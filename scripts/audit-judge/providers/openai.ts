import fs from "node:fs";
import type {
  CheckpointJudgeInput,
  CheckpointJudgeResult,
  JudgeProvider,
  LessonJudgeInput,
  LessonJudgeResult,
} from "./types";
import type { FindingCategory, FindingSeverity, LessonFinding } from "../types";

function parseJsonObject(raw: string): Record<string, unknown> {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const text = fenced ? fenced[1].trim() : trimmed;
  return JSON.parse(text) as Record<string, unknown>;
}

function normalizeFinding(
  raw: Record<string, unknown>,
  fallbackCheckpoint: string
): Omit<LessonFinding, "lessonId"> {
  const severity = String(raw.severity ?? "medium") as FindingSeverity;
  const category = String(raw.category ?? "clarity") as FindingCategory;
  const confidence = Number(raw.confidence ?? 0.5);
  return {
    checkpoint: String(raw.checkpoint ?? fallbackCheckpoint),
    severity: ["blocker", "high", "medium", "low"].includes(severity)
      ? severity
      : "medium",
    category: [
      "bug",
      "flow",
      "clarity",
      "clutter",
      "pedagogy",
      "feedback",
      "prerequisite",
      "pacing",
    ].includes(category)
      ? category
      : "clarity",
    observation: String(raw.observation ?? ""),
    learnerImpact: String(raw.learnerImpact ?? ""),
    recommendation: String(raw.recommendation ?? ""),
    evidence: String(raw.evidence ?? ""),
    confidence: Number.isFinite(confidence) ? Math.max(0, Math.min(1, confidence)) : 0.5,
  };
}

async function callOpenAi(params: {
  model: string;
  apiKey: string;
  system: string;
  user: string;
  imagePaths: string[];
  maxTokens: number;
}): Promise<string> {
  const content: Array<Record<string, unknown>> = [{ type: "text", text: params.user }];
  for (const img of params.imagePaths) {
    if (!fs.existsSync(img)) continue;
    const b64 = fs.readFileSync(img).toString("base64");
    content.push({
      type: "image_url",
      image_url: { url: `data:image/png;base64,${b64}` },
    });
  }

  let lastErr: unknown;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${params.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: params.model,
          temperature: 0.2,
          max_tokens: params.maxTokens,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: params.system },
            { role: "user", content },
          ],
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        const retryable = res.status === 429 || res.status >= 500;
        if (retryable && attempt < 4) {
          const waitMs = attempt * 2000;
          console.warn(`  OpenAI ${res.status}, retry in ${waitMs}ms…`);
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
        throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 500)}`);
      }

      const data = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text = data.choices?.[0]?.message?.content;
      if (!text) throw new Error("OpenAI returned empty content");
      return text;
    } catch (err) {
      lastErr = err;
      const msg = err instanceof Error ? err.message : String(err);
      const networkish =
        /fetch failed|ECONNRESET|ETIMEDOUT|socket|network/i.test(msg);
      if (networkish && attempt < 4) {
        const waitMs = attempt * 2000;
        console.warn(`  ${msg}, retry in ${waitMs}ms…`);
        await new Promise((r) => setTimeout(r, waitMs));
        continue;
      }
      throw err;
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
}

export function createOpenAiJudgeProvider(opts?: {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
}): JudgeProvider {
  const apiKey = opts?.apiKey ?? process.env.OPENAI_API_KEY ?? "";
  const model = opts?.model ?? process.env.AUDIT_JUDGE_MODEL ?? "gpt-4.1-mini";
  const maxTokens = opts?.maxTokens ?? Number(process.env.AUDIT_JUDGE_MAX_TOKENS ?? 800);

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required for audit:judge");
  }

  return {
    name: "openai",
    model,
    async judgeCheckpoint(input: CheckpointJudgeInput): Promise<CheckpointJudgeResult> {
      const raw = await callOpenAi({
        model,
        apiKey,
        system: input.systemPrompt,
        user: input.userPrompt,
        imagePaths: [input.screenshotPath],
        maxTokens,
      });
      const parsed = parseJsonObject(raw);
      const list = Array.isArray(parsed.findings) ? parsed.findings : [];
      return {
        findings: list.map((f) =>
          normalizeFinding(f as Record<string, unknown>, "first-screen")
        ),
      };
    },
    async judgeLesson(input: LessonJudgeInput): Promise<LessonJudgeResult> {
      const raw = await callOpenAi({
        model,
        apiKey,
        system: input.systemPrompt,
        user: input.userPrompt,
        imagePaths: input.screenshotPaths,
        maxTokens: Math.max(maxTokens, 1000),
      });
      const parsed = parseJsonObject(raw);
      const list = Array.isArray(parsed.findings) ? parsed.findings : [];
      return {
        lessonSummary: String(parsed.lessonSummary ?? ""),
        findings: list.map((f) =>
          normalizeFinding(f as Record<string, unknown>, "lesson-overall")
        ),
      };
    },
  };
}
