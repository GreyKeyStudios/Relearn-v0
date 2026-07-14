/**
 * Capture CCNA evidence for judgment.
 * Usage:
 *   npx tsx scripts/audit-evidence.ts --topic=subnetting
 *   npx tsx scripts/audit-evidence.ts              # 3 pilots
 *   npx tsx scripts/audit-evidence.ts --all        # every CCNA topic
 */
import { spawnSync } from "node:child_process";

function parseArgs(argv: string[]) {
  let topic: string | undefined;
  let all = false;
  for (const a of argv) {
    if (a === "--all") all = true;
    else if (a.startsWith("--topic=")) topic = a.slice("--topic=".length);
  }
  return { topic, all };
}

const { topic, all } = parseArgs(process.argv.slice(2));
const env = { ...process.env };
if (topic) env.AUDIT_EVIDENCE_TOPIC = topic;
if (all) env.AUDIT_EVIDENCE_ALL = "1";

const result = spawnSync(
  "npx",
  ["playwright", "test", "e2e/ccna-evidence-pilot.spec.ts"],
  { stdio: "inherit", env, shell: true }
);

process.exit(result.status ?? 1);
