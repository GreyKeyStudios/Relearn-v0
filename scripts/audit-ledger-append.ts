/**
 * Append/update Curriculum Review Board decision-log rows from ChatGPT triage.
 *
 * Input: markdown table rows:
 *   | findingId | decision | reason |
 *
 * Decisions accepted (case-insensitive aliases):
 *   ship-before-signoff | Ship Before Sign-off
 *   improve-later | Improve Later
 *   intentional-design | Intentional Design
 *
 * Usage:
 *   npx tsx scripts/audit-ledger-append.ts path/to/triage-reply.md
 *   npx tsx scripts/audit-ledger-append.ts path/to/triage-reply.md --force
 *   npx tsx scripts/audit-ledger-append.ts path/to/triage-reply.md --by=Michael
 */
import fs from "node:fs";
import path from "node:path";

const ledgerPath = path.join(
  process.cwd(),
  ".cursor/plans/ccna-pedagogy-audits/review-board/decision-log.md"
);

function normalizeDecision(raw: string): string | null {
  const s = raw.trim().toLowerCase().replace(/\s+/g, " ");
  if (
    s === "ship-before-signoff" ||
    s === "ship before sign-off" ||
    s === "ship before signoff"
  ) {
    return "ship-before-signoff";
  }
  if (s === "improve-later" || s === "improve later") return "improve-later";
  if (s === "intentional-design" || s === "intentional design") {
    return "intentional-design";
  }
  return null;
}

function parseArgs(argv: string[]) {
  let file = "";
  let force = false;
  let by = "Michael";
  for (const a of argv) {
    if (a === "--force") force = true;
    else if (a.startsWith("--by=")) by = a.slice("--by=".length);
    else if (!a.startsWith("-")) file = a;
  }
  return { file, force, by };
}

function parseTriageTable(text: string): Array<{
  findingId: string;
  decision: string;
  reason: string;
}> {
  const rows: Array<{ findingId: string; decision: string; reason: string }> =
    [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.includes("|")) continue;
    const cells = line.split("|").map((c) => c.trim());
    // leading empty from |, then findingId, decision, reason
    if (cells.length < 4) continue;
    const findingId = cells[1];
    const decisionRaw = cells[2];
    const reason = cells[3] ?? "";
    if (!findingId || findingId === "findingId" || findingId.startsWith("-")) {
      continue;
    }
    const decision = normalizeDecision(decisionRaw);
    if (!decision) continue;
    rows.push({ findingId, decision, reason });
  }
  return rows;
}

function updateLedgerRow(
  line: string,
  decision: string,
  reason: string,
  by: string,
  force: boolean
): { line: string; changed: boolean; skipped?: string } {
  // Markdown table row: | id | topic | ... | decision | reason | approvedBy | date | prOrCommit | auditBatch |
  const parts = line.split("|");
  if (parts.length < 12) return { line, changed: false, skipped: "malformed" };
  // parts[0] empty, [1]=findingId ... map by header order in seed file
  // 1 findingId, 2 topicId, 3 severity, 4 category, 5 checkpoint, 6 observation,
  // 7 originalRecommendation, 8 decision, 9 reason, 10 approvedBy, 11 date, 12 prOrCommit, 13 auditBatch
  const existingDecision = parts[8].trim();
  if (existingDecision && !force) {
    return { line, changed: false, skipped: "already decided" };
  }
  parts[8] = ` ${decision} `;
  parts[9] = ` ${reason.replace(/\|/g, "/")} `;
  parts[10] = ` ${by} `;
  parts[11] = ` ${new Date().toISOString().slice(0, 10)} `;
  return { line: parts.join("|"), changed: true };
}

function main() {
  const { file, force, by } = parseArgs(process.argv.slice(2));
  if (!file) {
    console.error(
      "Usage: npx tsx scripts/audit-ledger-append.ts <triage.md> [--force] [--by=Michael]"
    );
    process.exit(1);
  }
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }
  if (!fs.existsSync(ledgerPath)) {
    console.error(`Ledger not found: ${ledgerPath}`);
    process.exit(1);
  }

  const triage = parseTriageTable(fs.readFileSync(file, "utf8"));
  if (triage.length === 0) {
    console.error("No triage table rows found (need | findingId | decision | reason |)");
    process.exit(1);
  }

  let ledger = fs.readFileSync(ledgerPath, "utf8");
  const lines = ledger.split(/\r?\n/);
  let updated = 0;
  let skipped = 0;

  for (const row of triage) {
    const idx = lines.findIndex((l) => l.includes(`\`${row.findingId}\``) || l.includes(row.findingId));
    if (idx < 0) {
      console.warn(`No ledger row for ${row.findingId} — promote/append manually if needed`);
      skipped += 1;
      continue;
    }
    const result = updateLedgerRow(
      lines[idx],
      row.decision,
      row.reason,
      by,
      force
    );
    if (result.changed) {
      lines[idx] = result.line;
      updated += 1;
      console.log(`Updated ${row.findingId} → ${row.decision}`);
    } else {
      skipped += 1;
      console.log(`Skip ${row.findingId} (${result.skipped})`);
    }
  }

  fs.writeFileSync(ledgerPath, lines.join("\n"), "utf8");
  console.log(`Done. updated=${updated} skipped=${skipped}`);
}

main();
