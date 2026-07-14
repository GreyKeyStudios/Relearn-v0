/**
 * Capture CCNA evidence for judgment pilots.
 * Usage: npx tsx scripts/audit-evidence.ts --topic=subnetting
 *        npx tsx scripts/audit-evidence.ts
 */
import { spawnSync } from "node:child_process";

function parseTopic(argv: string[]): string | undefined {
  for (const a of argv) {
    if (a.startsWith("--topic=")) return a.slice("--topic=".length);
  }
  return undefined;
}

const topic = parseTopic(process.argv.slice(2));
const env = { ...process.env };
if (topic) env.AUDIT_EVIDENCE_TOPIC = topic;

const result = spawnSync(
  "npx",
  ["playwright", "test", "e2e/ccna-evidence-pilot.spec.ts"],
  { stdio: "inherit", env, shell: true }
);

process.exit(result.status ?? 1);
