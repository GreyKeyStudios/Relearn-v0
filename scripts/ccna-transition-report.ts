/**
 * Writes dual-version CCNA transition artifacts:
 * - human-readable comparison report
 * - machine-readable transition manifest + comparison map
 * - v2.0 content/simulator gap report
 * - prioritized production sequence
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  CCNA_V11_LAST_TEST_DATE,
  CCNA_V20_FIRST_TEST_DATE,
} from "../src/content/production/ccna-transition/dates";
import {
  assertCcnaTransitionIntegrity,
  CCNA_TRANSITION_MANIFEST,
  CCNA_V11_V20_COMPARISON_EDGES,
} from "../src/content/production/ccna-transition/comparison";
import { CCNA_SHARED_CORE_CLUSTERS } from "../src/content/production/ccna-transition/shared-core";
import { buildPilotDualVersionManifest } from "../src/content/production/ccna-transition/pilot-dual-map";
import {
  buildCcnaV20ContentGapReport,
  buildCcnaV20ProductionSequence,
  buildCcnaV20SimulatorGapReport,
} from "../src/content/production/ccna-transition/gaps";
import {
  CCNA_V11_PDF_SHA256,
  CCNA_V11_PDF_URL,
  listCcnaV11ParentObjectives,
} from "../src/content/production/objectives/ccna-200-301-v1.1";
import {
  CCNA_V20_PDF_SHA256,
  CCNA_V20_PDF_URL,
  listCcnaV20ParentObjectives,
} from "../src/content/production/objectives/ccna-200-301-v2.0";

const outDir = join(process.cwd(), "docs/curriculum-production/ccna-transition");
mkdirSync(outDir, { recursive: true });

const integrity = assertCcnaTransitionIntegrity();
if (integrity.length > 0) {
  console.error(integrity);
  process.exit(1);
}

const generatedAt = new Date().toISOString();
const contentGaps = buildCcnaV20ContentGapReport();
const simGaps = buildCcnaV20SimulatorGapReport();
const sequence = buildCcnaV20ProductionSequence();
const dual = buildPilotDualVersionManifest();

const machine = {
  schemaVersion: 1,
  generatedAt,
  examCode: "200-301",
  windows: {
    v1_1_lastTestDate: CCNA_V11_LAST_TEST_DATE,
    v2_0_firstTestDate: CCNA_V20_FIRST_TEST_DATE,
    configModule: "src/content/production/ccna-transition/dates.ts",
  },
  sources: {
    v1_1: { url: CCNA_V11_PDF_URL, sha256: CCNA_V11_PDF_SHA256 },
    v2_0: { url: CCNA_V20_PDF_URL, sha256: CCNA_V20_PDF_SHA256 },
  },
  parentCounts: {
    v1_1: listCcnaV11ParentObjectives().length,
    v2_0: listCcnaV20ParentObjectives().length,
  },
  comparisonEdges: CCNA_V11_V20_COMPARISON_EDGES,
  transitionManifest: CCNA_TRANSITION_MANIFEST,
  pilotDualMappings: dual.mappings,
  sharedCoreClusters: CCNA_SHARED_CORE_CLUSTERS,
  v20ContentGaps: contentGaps,
  v20SimulatorGaps: simGaps,
  productionSequence: sequence,
};

writeFileSync(
  join(outDir, "transition-manifest.json"),
  JSON.stringify(machine, null, 2) + "\n"
);

const classCounts = CCNA_TRANSITION_MANIFEST.reduce(
  (acc, e) => {
    const key = `${e.side}:${e.classification}`;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  },
  {} as Record<string, number>
);

const md: string[] = [];
md.push("# CCNA 200-301 Dual-Version Transition Report");
md.push("");
md.push(`Generated: ${generatedAt}`);
md.push("");
md.push("## Version windows (configurable)");
md.push("");
md.push(`- **v1.1** active through **${CCNA_V11_LAST_TEST_DATE}** (inclusive)`);
md.push(`- **v2.0** begins **${CCNA_V20_FIRST_TEST_DATE}** (inclusive)`);
md.push(`- Config module: \`src/content/production/ccna-transition/dates.ts\``);
md.push("");
md.push("## Provenance");
md.push("");
md.push(`| Version | PDF | SHA-256 | Parents |`);
md.push(`| --- | --- | --- | ---: |`);
md.push(
  `| v1.1 | ${CCNA_V11_PDF_URL} | \`${CCNA_V11_PDF_SHA256}\` | ${listCcnaV11ParentObjectives().length} |`
);
md.push(
  `| v2.0 | ${CCNA_V20_PDF_URL} | \`${CCNA_V20_PDF_SHA256}\` | ${listCcnaV20ParentObjectives().length} |`
);
md.push("");
md.push("## Classification counts");
md.push("");
md.push("| Side | Classification | Count |");
md.push("| --- | --- | ---: |");
for (const [key, count] of Object.entries(classCounts).sort()) {
  const [side, ...rest] = key.split(":");
  md.push(`| ${side} | ${rest.join(":")} | ${count} |`);
}
md.push("");
md.push("## Comparison edges (v1.1 → v2.0)");
md.push("");
md.push("| v1.1 | v2.0 | Relationship | Confidence | Notes |");
md.push("| --- | --- | --- | --- | --- |");
for (const e of CCNA_V11_V20_COMPARISON_EDGES) {
  md.push(
    `| ${e.v11Number} | ${e.v20Number} | ${e.relationship} | ${e.confidence} | ${e.notes.replace(/\|/g, "\\|")} |`
  );
}
md.push("");
md.push("## Full transition manifest (parents)");
md.push("");
md.push("| Side | # | Classification | Counterparts | Shared-core? | Notes |");
md.push("| --- | --- | --- | --- | --- | --- |");
for (const e of CCNA_TRANSITION_MANIFEST) {
  md.push(
    `| ${e.side} | ${e.number} | ${e.classification} | ${e.counterpartNumbers.join(", ") || "—"} | ${e.sharedCoreCandidate ? "yes" : "no"} | ${e.notes.replace(/\|/g, "\\|")} |`
  );
}
md.push("");
md.push("## Shared-core clusters");
md.push("");
for (const c of CCNA_SHARED_CORE_CLUSTERS) {
  md.push(
    `- **${c.id}** (${c.priority}): ${c.title} — v1.1 [${c.v11ObjectiveNumbers.join(", ")}] ↔ v2.0 [${c.v20ObjectiveNumbers.join(", ")}]`
  );
}
md.push("");
md.push("## Rules honored");
md.push("");
md.push("- v1.1 pathway retained; v2.0 is additive");
md.push("- Objective IDs never mixed across versions");
md.push("- No invented equivalences — `unable to determine` / `removed` / `newly added` used when edges are not trustworthy");
md.push("- Shared lessons may serve both versions; associations stay version-specific");
md.push("- Pilot IDs remain operational aliases for progress");
md.push("");

writeFileSync(join(outDir, "COMPARISON_REPORT.md"), md.join("\n"));

const gapMd: string[] = [];
gapMd.push("# CCNA v2.0 Content & Simulator Gap Report");
gapMd.push("");
gapMd.push(`Generated: ${generatedAt}`);
gapMd.push("");
gapMd.push("## Content gaps (official v2.0 parents)");
gapMd.push("");
gapMd.push(
  "| # | Severity | Classification | Live topics | Shared-core | Notes |"
);
gapMd.push("| --- | --- | --- | --- | --- | --- |");
for (const g of contentGaps) {
  gapMd.push(
    `| ${g.officialNumber} | ${g.gapSeverity} | ${g.classification} | ${g.coveringTopicIds.join(", ") || "—"} | ${g.sharedCoreClusterIds.join(", ") || "—"} | ${g.notes.replace(/\|/g, "\\|")} |`
  );
}
gapMd.push("");
gapMd.push("## Simulator gaps");
gapMd.push("");
gapMd.push("| Need | Priority | Status | Related v2.0 | Existing sims | Notes |");
gapMd.push("| --- | --- | --- | --- | --- | --- |");
for (const g of simGaps) {
  gapMd.push(
    `| ${g.title} | ${g.priority} | ${g.status} | ${g.relatedV20Numbers.join(", ")} | ${g.existingSimulatorIds.join(", ") || "—"} | ${g.notes.replace(/\|/g, "\\|")} |`
  );
}
gapMd.push("");
gapMd.push("## Prioritized v2.0 content-production sequence");
gapMd.push("");
for (const s of sequence) {
  gapMd.push(
    `${s.order}. \`${s.batchId}\` — **${s.title}** (${s.focus}) — objectives ${s.relatedV20Numbers.join(", ")}${s.dependsOnSharedCore ? " · shared-core" : ""}`
  );
}
gapMd.push("");

writeFileSync(join(outDir, "V20_GAP_REPORT.md"), gapMd.join("\n"));

writeFileSync(
  join(outDir, "pilot-dual-version.mapping.json"),
  JSON.stringify(dual, null, 2) + "\n"
);

console.log(`Wrote ${join(outDir, "transition-manifest.json")}`);
console.log(`Wrote ${join(outDir, "COMPARISON_REPORT.md")}`);
console.log(`Wrote ${join(outDir, "V20_GAP_REPORT.md")}`);
console.log(`Wrote ${join(outDir, "pilot-dual-version.mapping.json")}`);
console.log(
  `Content gaps critical/high: ${contentGaps.filter((g) => g.gapSeverity === "critical" || g.gapSeverity === "high").length}`
);
console.log("OK");
