/**
 * Build a ChatGPT-ready triage dossier from mechanical + judgment reports.
 *
 * Usage:
 *   npx tsx scripts/audit-chatgpt-export.ts
 *
 * Reads (if present):
 *   reports/ccna-ux-audit.md
 *   reports/ccna-judgment/summary.md
 *
 * Writes:
 *   reports/ccna-chatgpt-triage.md
 */
import fs from "node:fs";
import path from "node:path";

const reports = path.join(process.cwd(), "reports");
const outPath = path.join(reports, "ccna-chatgpt-triage.md");

function readIfExists(...parts: string[]): string | null {
  const p = path.join(reports, ...parts);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf8");
}

const mechanical = readIfExists("ccna-ux-audit.md");
const judgment = readIfExists("ccna-judgment", "summary.md");

const lines: string[] = [];
lines.push("# CCNA pre-sign-off triage (for ChatGPT)");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Your job");
lines.push("");
lines.push(
  "You are helping Michael triage Playwright / vision-model findings before he walkthroughs CCNA as a first-time learner and signs Topic Complete."
);
lines.push("");
lines.push("For each finding or soft-score concern, reply with exactly one of:");
lines.push("");
lines.push("| Decision | Meaning |");
lines.push("|----------|---------|");
lines.push("| **IMPLEMENT** | Fix now before Michael's walkthrough |");
lines.push("| **SKIP** | False alarm / too subjective / already acceptable |");
lines.push("| **DEFER** | Real issue, but after Michael walkthrough or later wave |");
lines.push("");
lines.push("Then give a one-line reason. Group IMPLEMENT items into a short priority stack.");
lines.push("");
lines.push("Do **not** invent new curriculum. Prefer teach-before-test, LES alignment, hub clarity, and wrong-answer teaching.");
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

if (judgment) {
  lines.push("## Vision-model judgment");
  lines.push("");
  lines.push(judgment.trim());
  lines.push("");
} else {
  lines.push("## Vision-model judgment");
  lines.push("");
  lines.push(
    "_Missing `reports/ccna-judgment/summary.md`. Capture evidence then judge:_"
  );
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
