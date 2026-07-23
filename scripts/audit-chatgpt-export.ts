/**
 * Build a ChatGPT-ready triage dossier from mechanical + judgment reports.
 *
 * Usage:
 *   npx tsx scripts/audit-chatgpt-export.ts
 *
 * Reads (if present):
 *   reports/ccna-ux-audit.md
 *   reports/ccna-judgment/*.json  (preferred — stamps findingIds)
 *   reports/ccna-judgment/summary.md (fallback)
 *
 * Writes:
 *   reports/ccna-chatgpt-triage.md
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { LessonJudgment } from "./audit-judge/types";

const reports = path.join(process.cwd(), "reports");
const judgmentDir = path.join(reports, "ccna-judgment");
const outPath = path.join(reports, "ccna-chatgpt-triage.md");

export function findingId(
  topicId: string,
  checkpoint: string,
  category: string,
  observation: string
): string {
  const shortHash = crypto
    .createHash("sha256")
    .update(observation)
    .digest("hex")
    .slice(0, 8);
  return `${topicId}__${checkpoint}__${category}__${shortHash}`;
}

function readIfExists(...parts: string[]): string | null {
  const p = path.join(reports, ...parts);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf8");
}

function loadJudgments(): LessonJudgment[] {
  if (!fs.existsSync(judgmentDir)) return [];
  return fs
    .readdirSync(judgmentDir)
    .filter((n) => n.endsWith(".json"))
    .sort()
    .map(
      (n) =>
        JSON.parse(
          fs.readFileSync(path.join(judgmentDir, n), "utf8")
        ) as LessonJudgment
    );
}

const mechanical = readIfExists("ccna-ux-audit.md");
const judgments = loadJudgments();
const judgmentSummaryFallback = readIfExists("ccna-judgment", "summary.md");

const lines: string[] = [];
lines.push("# CCNA Curriculum Review Board — triage dossier");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Your job");
lines.push("");
lines.push(
  "You are the Pedagogy triage step of ReLearn’s Curriculum Review Board. Playwright and the vision judge already ran. Michael will do the final human walkthrough and Topic Complete sign-off."
);
lines.push("");
lines.push("For **each finding** (use the given `findingId`), reply with exactly one of:");
lines.push("");
lines.push("| Decision | Meaning |");
lines.push("|----------|---------|");
lines.push(
  "| **Ship Before Sign-off** | Must fix before Topic Complete / human sign-off |"
);
lines.push(
  "| **Improve Later** | Real issue; post–sign-off backlog — not blocking this week’s walkthrough |"
);
lines.push(
  "| **Intentional Design** | Conscious non-fix (we chose this on purpose — not “AI was wrong”) |"
);
lines.push("");
lines.push("Return a table:");
lines.push("");
lines.push("| findingId | decision | reason |");
lines.push("|-----------|----------|--------|");
lines.push("");
lines.push(
  "Then list **Ship Before Sign-off** items as a short priority stack. Prefer teach-before-test, LES alignment, hub clarity, and wrong-answer teaching. Do **not** invent new curriculum."
);
lines.push("");
lines.push(
  "Policy: [`docs/CURRICULUM_REVIEW_BOARD.md`](../docs/CURRICULUM_REVIEW_BOARD.md). HIGH findings are already seeded in the decision ledger — triage those first; promote MEDIUM/LOW only when they clearly matter."
);
lines.push("");
lines.push("---");
lines.push("");

if (mechanical) {
  lines.push("## Mechanical Playwright audit");
  lines.push("");
  lines.push(mechanical.trim());
  lines.push("");
  lines.push("---");
  lines.push("");
} else {
  lines.push("## Mechanical Playwright audit");
  lines.push("");
  lines.push("_Missing `reports/ccna-ux-audit.md`. Run: `npm run test:e2e:audit`_");
  lines.push("");
  lines.push("---");
  lines.push("");
}

if (judgments.length > 0) {
  lines.push("## Vision-model findings (with findingIds)");
  lines.push("");
  const ranked = judgments.flatMap((j) =>
    j.findings.map((f) => ({
      ...f,
      lessonTitle: j.lessonTitle,
      lessonId: j.lessonId,
      id: findingId(j.lessonId, f.checkpoint, f.category, f.observation),
    }))
  );
  const sevOrder = { blocker: 0, high: 1, medium: 2, low: 3 } as const;
  ranked.sort(
    (a, b) =>
      sevOrder[a.severity] - sevOrder[b.severity] || b.confidence - a.confidence
  );

  for (const f of ranked) {
    lines.push(`### [${f.severity.toUpperCase()}] \`${f.id}\``);
    lines.push("");
    lines.push(
      `- **Topic:** ${f.lessonTitle} (\`${f.lessonId}\`) · **Checkpoint:** ${f.checkpoint} · **Category:** ${f.category}`
    );
    lines.push(`- **Observation:** ${f.observation}`);
    lines.push(`- **Learner impact:** ${f.learnerImpact}`);
    lines.push(`- **Recommendation:** ${f.recommendation}`);
    lines.push(`- **Confidence:** ${f.confidence}`);
    lines.push("");
  }
} else if (judgmentSummaryFallback) {
  lines.push("## Vision-model judgment (no JSON — IDs not stamped)");
  lines.push("");
  lines.push(
    "_Prefer `reports/ccna-judgment/*.json` so findingIds are stable. Using summary.md fallback:_"
  );
  lines.push("");
  lines.push(judgmentSummaryFallback.trim());
  lines.push("");
} else {
  lines.push("## Vision-model judgment");
  lines.push("");
  lines.push("_Missing judgment artifacts. Run:_");
  lines.push("");
  lines.push("```bash");
  lines.push("npm run audit:evidence -- --all");
  lines.push("npm run audit:judge -- --all");
  lines.push("```");
  lines.push("");
}

fs.mkdirSync(reports, { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath}`);
if (judgments.length > 0) {
  const n = judgments.reduce((a, j) => a + j.findings.length, 0);
  console.log(`Stamped findingIds on ${n} findings from ${judgments.length} lessons`);
}
