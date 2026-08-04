/**
 * Writes the CCNA v2.0 batch-1 production report.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  assertCcnaV20Batch1Integrity,
  CCNA_V20_BATCH1,
  CCNA_V20_BATCH1_DEFERRED,
  CCNA_V20_BATCH1_SELECTION,
} from "../src/content/production/batches/ccna-v20-batch1";

const errors = assertCcnaV20Batch1Integrity();
if (errors.length) {
  console.error(errors);
  process.exit(1);
}

const outDir = join(
  process.cwd(),
  "docs/curriculum-production/ccna-v20-batch1"
);
mkdirSync(outDir, { recursive: true });
const generatedAt = new Date().toISOString();

const md: string[] = [];
md.push("# CCNA v2.0 Curriculum-Production Batch 1 Report");
md.push("");
md.push(`Generated: ${generatedAt}`);
md.push(`Batch id: \`${CCNA_V20_BATCH1.id}\``);
md.push("");
md.push("## Scope");
md.push("");
md.push("- Official version: **200-301 v2.0** only (IDs `200-301-v2.0/<number>`)");
md.push(`- Selected parents: **${CCNA_V20_BATCH1.selectedOfficialNumbers.length}** / max ${CCNA_V20_BATCH1.maxParents}`);
md.push("- Mode: **complete specifications** (not mass-generated full lessons)");
md.push("- Preserved: existing v1.1 lessons, pilot progress keys, mastery thresholds, SRS ladder");
md.push("");
md.push("## Why these objectives (not numeric order)");
md.push("");
md.push(
  "Selection uses the transition manifest, V20 gap report, and production sequence priorities: newly added, substantially expanded, greater practical/troubleshooting depth, and P0 simulator gaps."
);
md.push("");
md.push("| Rank | # | Pathway | Transition | Gap | Simulator need |");
md.push("| ---: | --- | --- | --- | --- | --- |");
for (const s of CCNA_V20_BATCH1_SELECTION) {
  md.push(
    `| ${s.priorityRank} | ${s.officialNumber} | ${s.pathwayClassification} | ${s.transitionClassification} | ${s.gapSeverity} | ${s.simulatorNeed.replace(/\|/g, "\\|")} |`
  );
}
md.push("");
md.push("### Selection reasons");
md.push("");
for (const s of CCNA_V20_BATCH1_SELECTION) {
  md.push(`#### ${s.officialNumber}`);
  for (const r of s.reasons) md.push(`- ${r}`);
  md.push("");
}
md.push("### Deferred (still important)");
md.push("");
for (const d of CCNA_V20_BATCH1_DEFERRED) {
  md.push(`- **${d.officialNumber}**: ${d.whyDeferred}`);
}
md.push("");
md.push("## Per-objective deliverables");
md.push("");
for (const u of CCNA_V20_BATCH1.units) {
  md.push(`### ${u.officialNumber} — ${u.lessonSpec.title}`);
  md.push("");
  md.push(`- Official id: \`${u.officialObjectiveId}\``);
  md.push(`- Pathway: **${u.pathwayClassification}**${u.sharedCoreClusterId ? ` (\`${u.sharedCoreClusterId}\`)` : ""}`);
  md.push(`- Transition: ${u.transitionClassification}`);
  md.push(`- Related v1.1 ids: ${u.relatedV11ObjectiveIds.join(", ") || "—"}`);
  md.push(`- Atomics: ${u.atomicObjectives.map((a) => `\`${a.id}\``).join(", ")}`);
  md.push(`- Prereq edges: ${u.prerequisiteEdges.length}`);
  md.push(`- Misconceptions: ${u.misconceptionIds.join(", ")}`);
  md.push(`- Remediations: ${u.remediationIds.join(", ")}`);
  md.push(`- Lesson spec: \`${u.lessonSpec.id}\``);
  md.push(`- Quiz specs: ${u.quizSpecIds.join(", ")}`);
  md.push(`- Simulator specs: ${u.simulatorSpecIds.join(", ") || "—"}`);
  md.push(`- Sources: ${u.sourceIds.join(", ")}`);
  md.push(
    `- Mastery evidence: quizPass ${u.masteryEvidence.quizPassPercent}% · SRS advance ${u.masteryEvidence.srsAdvancePercent}% · min attempts ${u.masteryEvidence.objectiveMinAttempts} (live engine — no duplicate system)`
  );
  md.push(`- Explanation layers: ${Object.keys(u.lessonSpec.explanations).join(", ")}`);
  md.push("- Remaining before learner-facing:");
  for (const r of u.remainingBeforeLearnerFacing) md.push(`  - ${r}`);
  md.push("");
}
md.push("## Inventory");
md.push("");
md.push(`| Artifact | Count |`);
md.push(`| --- | ---: |`);
md.push(`| Official parents | ${CCNA_V20_BATCH1.units.length} |`);
md.push(
  `| Atomic objectives | ${CCNA_V20_BATCH1.units.reduce((n, u) => n + u.atomicObjectives.length, 0)} |`
);
md.push(
  `| Prerequisite edges | ${CCNA_V20_BATCH1.units.reduce((n, u) => n + u.prerequisiteEdges.length, 0)} |`
);
md.push(`| Misconceptions | ${CCNA_V20_BATCH1.misconceptionRecords.length} |`);
md.push(`| Remediations | ${CCNA_V20_BATCH1.remediationActivities.length} |`);
md.push(`| Simulator specs | ${CCNA_V20_BATCH1.simulatorSpecs.length} |`);
md.push(
  `| Quiz items (specs) | ${CCNA_V20_BATCH1.units.reduce((n, u) => n + u.lessonSpec.quiz.length, 0)} |`
);
md.push("");
md.push("## Explicit non-goals");
md.push("");
md.push("- No rewrite of live `src/content/certifications/ccna.ts` lessons/quizzes");
md.push("- No pilot progress-key rename");
md.push("- No second mastery/SRS engine");
md.push("- No mass-produced full prose lessons beyond lesson specifications");
md.push("");

writeFileSync(join(outDir, "BATCH_REPORT.md"), md.join("\n"));
writeFileSync(
  join(outDir, "batch1.manifest.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      generatedAt,
      batch: {
        id: CCNA_V20_BATCH1.id,
        selectedOfficialNumbers: CCNA_V20_BATCH1.selectedOfficialNumbers,
        notes: CCNA_V20_BATCH1.notes,
      },
      selection: CCNA_V20_BATCH1_SELECTION,
      deferred: CCNA_V20_BATCH1_DEFERRED,
      units: CCNA_V20_BATCH1.units.map((u) => ({
        officialNumber: u.officialNumber,
        officialObjectiveId: u.officialObjectiveId,
        pathwayClassification: u.pathwayClassification,
        transitionClassification: u.transitionClassification,
        atomicIds: u.atomicObjectives.map((a) => a.id),
        lessonSpecId: u.lessonSpec.id,
        quizSpecIds: u.quizSpecIds,
        simulatorSpecIds: u.simulatorSpecIds,
        remainingBeforeLearnerFacing: u.remainingBeforeLearnerFacing,
      })),
    },
    null,
    2
  ) + "\n"
);

console.log(`Wrote ${join(outDir, "BATCH_REPORT.md")}`);
console.log(`Wrote ${join(outDir, "batch1.manifest.json")}`);
console.log("OK");
