/**
 * Grade captured CCNA lesson evidence with a vision model.
 *
 * Usage:
 *   npx tsx scripts/audit-judge.ts --dry-run --topic=subnetting
 *   npx tsx scripts/audit-judge.ts --topic=subnetting
 *   npx tsx scripts/audit-judge.ts --all-pilots
 */
import fs from "node:fs";
import path from "node:path";
import {
  ALL_CHECKPOINTS,
  LEARNER_PERSONA,
  PILOT_TOPIC_IDS,
  type EvidenceCheckpoint,
  type EvidenceManifest,
  type LessonJudgment,
} from "./audit-judge/types";
import {
  checkpointJudgeSystemPrompt,
  checkpointUserPrompt,
  lessonOverallSystemPrompt,
  lessonOverallUserPrompt,
} from "./audit-judge/rubric";
import { createOpenAiJudgeProvider } from "./audit-judge/providers/openai";
import { attachLessonId, renderJudgmentMarkdown } from "./audit-judge/report";

/** Load .env.local then .env into process.env (does not override existing vars). */
function loadDotEnvFiles() {
  for (const name of [".env.local", ".env"]) {
    const filePath = path.join(process.cwd(), name);
    if (!fs.existsSync(filePath)) continue;
    const text = fs.readFileSync(filePath, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = value;
    }
  }
}

loadDotEnvFiles();

function parseArgs(argv: string[]) {
  const out = {
    dryRun: false,
    allPilots: false,
    topic: "" as string,
  };
  for (const a of argv) {
    if (a === "--dry-run") out.dryRun = true;
    else if (a === "--all-pilots") out.allPilots = true;
    else if (a.startsWith("--topic=")) out.topic = a.slice("--topic=".length);
  }
  return out;
}

function evidenceRoot(...parts: string[]) {
  return path.join(process.cwd(), "reports", "ccna-evidence", ...parts);
}

function judgmentRoot(...parts: string[]) {
  return path.join(process.cwd(), "reports", "ccna-judgment", ...parts);
}

function loadManifest(topicId: string): EvidenceManifest | null {
  const p = evidenceRoot(topicId, "manifest.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8")) as EvidenceManifest;
}

function keyScreenshots(manifest: EvidenceManifest): string[] {
  const want = ["first-screen", "first-incorrect-feedback", "practice-hub"] as const;
  const paths: string[] = [];
  for (const id of want) {
    const c = manifest.checkpoints.find((x) => x.checkpoint === id);
    if (!c) continue;
    paths.push(evidenceRoot(manifest.topicId, c.screenshotRelPath));
  }
  return paths.slice(0, 3);
}

function dossier(cps: EvidenceCheckpoint[]): string {
  return cps
    .map(
      (c) =>
        `## ${c.checkpoint} (step ${c.stepNumber})\nPrevious: ${c.previousAction}\nButtons: ${c.buttons.join(", ")}\nText: ${c.visibleText.slice(0, 800)}`
    )
    .join("\n\n");
}

async function judgeTopic(
  topicId: string,
  opts: { dryRun: boolean; callBudget: { used: number; max: number } }
): Promise<LessonJudgment> {
  const manifest = loadManifest(topicId);

  if (opts.dryRun) {
    if (!manifest) {
      console.log(
        `\n${topicId}: no evidence yet → ≤${ALL_CHECKPOINTS.length + 1} API calls (max)`
      );
      for (const id of ALL_CHECKPOINTS) {
        console.log(`  [dry-run] checkpoint ${id}`);
      }
      console.log(`  [dry-run] lesson-overall`);
      return {
        lessonId: topicId,
        lessonTitle: topicId,
        persona: LEARNER_PERSONA,
        model: "dry-run",
        findings: [],
        lessonSummary: "(dry-run — no evidence captured yet)",
      };
    }
    const planned = manifest.checkpoints.length + 1;
    console.log(
      `\n${topicId}: ${manifest.checkpoints.length} checkpoints` +
        (manifest.missingCheckpoints.length
          ? ` (missing: ${manifest.missingCheckpoints.join(", ")})`
          : "") +
        ` → ~${planned} API calls`
    );
    for (const c of manifest.checkpoints) {
      console.log(`  [dry-run] checkpoint ${c.checkpoint} (${c.screenshotRelPath})`);
    }
    console.log(`  [dry-run] lesson-overall`);
    return {
      lessonId: topicId,
      lessonTitle: manifest.topicTitle,
      persona: LEARNER_PERSONA,
      model: "dry-run",
      findings: [],
      lessonSummary: "(dry-run — no model calls)",
    };
  }

  if (!manifest) {
    throw new Error(
      `Missing evidence for ${topicId}. Run: npm run audit:evidence -- --topic=${topicId}`
    );
  }

  const planned = manifest.checkpoints.length + 1;

  console.log(
    `\n${topicId}: ${manifest.checkpoints.length} checkpoints` +
      (manifest.missingCheckpoints.length
        ? ` (missing: ${manifest.missingCheckpoints.join(", ")})`
        : "") +
      ` → ~${planned} API calls`
  );

  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY is not set. Capture still works without it; judging requires a key."
    );
  }

  if (opts.callBudget.used + planned > opts.callBudget.max) {
    throw new Error(
      `AUDIT_JUDGE_MAX_CALLS (${opts.callBudget.max}) would be exceeded (used ${opts.callBudget.used}, need ${planned})`
    );
  }

  const provider = createOpenAiJudgeProvider();
  const findings = [];

  for (const c of manifest.checkpoints) {
    const shot = evidenceRoot(topicId, c.screenshotRelPath);
    const result = await provider.judgeCheckpoint({
      lessonId: topicId,
      lessonTitle: manifest.topicTitle,
      systemPrompt: checkpointJudgeSystemPrompt(),
      userPrompt: checkpointUserPrompt({
        topicTitle: manifest.topicTitle,
        checkpoint: c.checkpoint,
        stepNumber: c.stepNumber,
        totalWalkSteps: c.totalWalkSteps,
        previousAction: c.previousAction,
        visibleText: c.visibleText,
        buttons: c.buttons,
        url: c.url,
      }),
      screenshotPath: shot,
    });
    opts.callBudget.used += 1;
    findings.push(...attachLessonId(topicId, result.findings));
    console.log(`  judged ${c.checkpoint} (+${result.findings.length} findings)`);
  }

  const overall = await provider.judgeLesson({
    lessonId: topicId,
    lessonTitle: manifest.topicTitle,
    systemPrompt: lessonOverallSystemPrompt(),
    userPrompt: lessonOverallUserPrompt({
      topicTitle: manifest.topicTitle,
      totalWalkSteps: manifest.totalWalkSteps,
      checkpointSummaries: dossier(manifest.checkpoints),
    }),
    screenshotPaths: keyScreenshots(manifest),
  });
  opts.callBudget.used += 1;
  findings.push(...attachLessonId(topicId, overall.findings));
  console.log(`  judged lesson-overall (+${overall.findings.length} findings)`);

  return {
    lessonId: topicId,
    lessonTitle: manifest.topicTitle,
    persona: LEARNER_PERSONA,
    model: provider.model,
    findings,
    lessonSummary: overall.lessonSummary,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const topics = args.allPilots
    ? [...PILOT_TOPIC_IDS]
    : args.topic
      ? [args.topic]
      : [...PILOT_TOPIC_IDS];

  const maxCalls = Number(process.env.AUDIT_JUDGE_MAX_CALLS ?? 30);
  const budget = { used: 0, max: maxCalls };

  console.log(
    `audit:judge topics=[${topics.join(", ")}] dryRun=${args.dryRun} maxCalls=${maxCalls}`
  );
  console.log(`Expected checkpoints per lesson (max): ${ALL_CHECKPOINTS.join(", ")}`);

  const judgments: LessonJudgment[] = [];
  for (const topicId of topics) {
    judgments.push(await judgeTopic(topicId, { dryRun: args.dryRun, callBudget: budget }));
  }

  if (!args.dryRun) {
    fs.mkdirSync(judgmentRoot(), { recursive: true });
    for (const j of judgments) {
      fs.writeFileSync(
        judgmentRoot(`${j.lessonId}.json`),
        JSON.stringify(j, null, 2),
        "utf8"
      );
    }
    const md = renderJudgmentMarkdown(judgments);
    fs.writeFileSync(judgmentRoot("summary.md"), md, "utf8");
    console.log(`\nWrote ${judgmentRoot("summary.md")} (API calls used: ${budget.used})`);
  } else {
    console.log(`\nDry-run complete. Estimated calls ≤ ${topics.length * 9} (cap ${maxCalls}).`);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
