/**
 * Writes machine-readable mapping manifest + human-readable reports
 * for the CCNA 200-301 v1.1 official objective ingestion batch.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  CCNA_V11_PDF_SHA256,
  CCNA_V11_PDF_URL,
  CCNA_V11_RETRIEVED_AT,
  listCcnaV11AtomicObjectives,
  listCcnaV11OfficialLines,
  listCcnaV11ParentObjectives,
} from "../src/content/production/objectives/ccna-200-301-v1.1";
import {
  assertCcnaPilotMappingComplete,
  buildCcnaPilotMappingManifest,
  CCNA_PILOT_TO_V11_MAPPINGS,
} from "../src/content/production/mappings/ccna-pilot-to-v1.1";

const outDir = join(
  process.cwd(),
  "docs/curriculum-production/ccna-v1.1"
);
mkdirSync(outDir, { recursive: true });

const mappingErrors = assertCcnaPilotMappingComplete();
if (mappingErrors.length > 0) {
  console.error("Mapping integrity errors:");
  for (const err of mappingErrors) console.error(`  - ${err}`);
  process.exit(1);
}

const manifest = buildCcnaPilotMappingManifest();
const manifestPath = join(outDir, "pilot-to-v1.1.mapping.json");
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

const parents = listCcnaV11ParentObjectives();
const lines = listCcnaV11OfficialLines();
const atomics = listCcnaV11AtomicObjectives();
const uncovered = manifest.coverage.filter((c) => !c.hasLiveContent);

const statusCounts = CCNA_PILOT_TO_V11_MAPPINGS.reduce(
  (acc, m) => {
    acc[m.status] = (acc[m.status] ?? 0) + 1;
    return acc;
  },
  {} as Record<string, number>
);

const mappingMd: string[] = [];
mappingMd.push("# CCNA Pilot → Official 200-301 v1.1 Mapping Report");
mappingMd.push("");
mappingMd.push(`Generated: ${new Date().toISOString()}`);
mappingMd.push("");
mappingMd.push("## Source provenance");
mappingMd.push("");
mappingMd.push(`- Exam: **200-301** / objectives version **v1.1**`);
mappingMd.push(`- Official PDF: ${CCNA_V11_PDF_URL}`);
mappingMd.push(`- PDF SHA-256: \`${CCNA_V11_PDF_SHA256}\``);
mappingMd.push(`- Retrieved (UTC calendar): ${CCNA_V11_RETRIEVED_AT}`);
mappingMd.push(
  `- Extracted text artifact: \`docs/curriculum-production/ccna-v1.1/200-301-CCNA-v1.1.extracted.txt\``
);
mappingMd.push(
  `- Machine-readable manifest: \`docs/curriculum-production/ccna-v1.1/pilot-to-v1.1.mapping.json\``
);
mappingMd.push("");
mappingMd.push("## Inventory");
mappingMd.push("");
mappingMd.push(`- Official numbered lines (parents + sub-bullets): **${lines.length}**`);
mappingMd.push(`- Official parent objectives: **${parents.length}**`);
mappingMd.push(`- Production atomic records: **${atomics.length}**`);
mappingMd.push(`- Pilot IDs mapped: **${CCNA_PILOT_TO_V11_MAPPINGS.length}**`);
mappingMd.push("");
mappingMd.push("### Mapping status counts");
mappingMd.push("");
mappingMd.push("| Status | Count |");
mappingMd.push("| --- | ---: |");
for (const [status, count] of Object.entries(statusCounts).sort()) {
  mappingMd.push(`| ${status} | ${count} |`);
}
mappingMd.push("");
mappingMd.push("## Human-readable mapping table");
mappingMd.push("");
mappingMd.push(
  "| Pilot ID | Pilot text | Status | Official number(s) | Live topics | Quiz/bank tags | Notes |"
);
mappingMd.push("| --- | --- | --- | --- | --- | ---: | --- |");
for (const m of CCNA_PILOT_TO_V11_MAPPINGS) {
  const topics = m.liveTopicIds.length ? m.liveTopicIds.join(", ") : "—";
  const nums = m.officialNumbers.length
    ? m.officialNumbers.join(", ")
    : "—";
  mappingMd.push(
    `| \`${m.pilotId}\` | ${m.pilotText.replace(/\|/g, "\\|")} | ${m.status} | ${nums} | ${topics} | ${m.liveQuestionCount} | ${m.notes.replace(/\|/g, "\\|")} |`
  );
}
mappingMd.push("");
mappingMd.push("## Critical numbering mismatches");
mappingMd.push("");
mappingMd.push(
  "- `CCNA-1.9` (subnet calculations) ≠ official **1.9** (IPv6 address types) → maps to **1.6**"
);
mappingMd.push(
  "- `CCNA-3.5` (OSPF neighbor adjacencies) ≠ official **3.5** (FHRP) → maps to **3.4**"
);
mappingMd.push(
  "- Several pilot 3.x service topics (NAT/NTP) are official **4.x** IP Services lines"
);
mappingMd.push("");
mappingMd.push("## Rules honored");
mappingMd.push("");
mappingMd.push("- No silent rename of live/persisted pilot IDs");
mappingMd.push("- v2.0 not ingested; Feb 2027 cutover remains a future-review flag");
mappingMd.push("- `unable to map` used instead of inventing coverage (`CCNA-4.3`)");
mappingMd.push("");

writeFileSync(join(outDir, "MAPPING_REPORT.md"), mappingMd.join("\n"));

const coverageMd: string[] = [];
coverageMd.push("# CCNA 200-301 v1.1 Official Coverage Report");
coverageMd.push("");
coverageMd.push(`Generated: ${new Date().toISOString()}`);
coverageMd.push("");
coverageMd.push(
  "Coverage means at least one live topic tags a pilot ID that aliases to the official parent via `mappings/ccna-pilot-to-v1.1.ts`. " +
    "This is **not** a claim that the topic fully teaches the official objective."
);
coverageMd.push("");
coverageMd.push(`- Official parents: ${parents.length}`);
coverageMd.push(`- Parents with live topic alias coverage: ${parents.length - uncovered.length}`);
coverageMd.push(`- Parents with **no** live topic alias coverage: **${uncovered.length}**`);
coverageMd.push("");
coverageMd.push("## Uncovered official parents");
coverageMd.push("");
coverageMd.push("| Official # | Official text | Aliased pilots (if any, unused) |");
coverageMd.push("| --- | --- | --- |");
for (const row of uncovered) {
  const pilots = row.coveringPilotIds.length
    ? row.coveringPilotIds.join(", ")
    : "—";
  coverageMd.push(
    `| ${row.officialNumber} | ${row.officialText.replace(/\|/g, "\\|")} | ${pilots} |`
  );
}
coverageMd.push("");
coverageMd.push("## Full parent coverage matrix");
coverageMd.push("");
coverageMd.push("| Official # | Live topics | Pilot aliases | Covered? |");
coverageMd.push("| --- | --- | --- | --- |");
for (const row of manifest.coverage) {
  coverageMd.push(
    `| ${row.officialNumber} | ${row.coveringTopicIds.join(", ") || "—"} | ${row.coveringPilotIds.join(", ") || "—"} | ${row.hasLiveContent ? "yes" : "**no**"} |`
  );
}
coverageMd.push("");

writeFileSync(join(outDir, "COVERAGE_REPORT.md"), coverageMd.join("\n"));

console.log(`Wrote ${manifestPath}`);
console.log(`Wrote ${join(outDir, "MAPPING_REPORT.md")}`);
console.log(`Wrote ${join(outDir, "COVERAGE_REPORT.md")}`);
console.log(
  `Parents uncovered by live alias topics: ${uncovered.length}/${parents.length}`
);
console.log("OK");
