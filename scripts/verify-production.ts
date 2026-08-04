import { verifyProductionArchitecture } from "../src/lib/production/verify-production";
import { listFutureReviewFlags } from "../src/content/production/sources/catalog";

const result = verifyProductionArchitecture();
const reviewFlags = listFutureReviewFlags();

console.log("=== ReLearn curriculum production verification ===");
console.log(
  `Inventory: ${result.inventory.subjects} subjects, ${result.inventory.sources} sources, ` +
    `${result.inventory.blueprints} exam blueprints, ${result.inventory.prereqGraphs} prereq graphs, ` +
    `${result.inventory.freshnessClasses} freshness classes`
);
console.log(
  `Future-review flags: ${reviewFlags.length} ` +
    `(${reviewFlags.filter((f) => f.severity === "critical").length} critical)`
);
console.log(
  `Mastery/SRS compatibility: ${
    result.masteryErrors.length === 0 ? "OK" : "FAIL"
  }`
);
for (const err of result.masteryErrors) {
  console.log(`  ERROR  ${err}`);
}

console.log(
  `\nIssues: ${result.summary.errors} error(s), ${result.summary.warnings} warning(s), ${result.summary.infos} info`
);

const bySeverity = {
  error: result.issues.filter((i) => i.severity === "error"),
  warning: result.issues.filter((i) => i.severity === "warning"),
  info: result.issues.filter((i) => i.severity === "info"),
};

for (const issue of bySeverity.error) {
  const loc = [issue.trackId, issue.topicId, issue.entityId]
    .filter(Boolean)
    .join(" / ");
  console.log(`  ERROR  [${issue.code}] ${loc ? loc + " — " : ""}${issue.message}`);
}

const warningSample = bySeverity.warning.slice(0, 40);
for (const issue of warningSample) {
  const loc = [issue.trackId, issue.topicId, issue.entityId]
    .filter(Boolean)
    .join(" / ");
  console.log(
    `  WARN   [${issue.code}] ${loc ? loc + " — " : ""}${issue.message}`
  );
}
if (bySeverity.warning.length > warningSample.length) {
  console.log(
    `  ... ${bySeverity.warning.length - warningSample.length} more warning(s)`
  );
}

const infoSample = bySeverity.info.slice(0, 10);
for (const issue of infoSample) {
  const loc = [issue.trackId, issue.topicId, issue.entityId]
    .filter(Boolean)
    .join(" / ");
  console.log(
    `  INFO   [${issue.code}] ${loc ? loc + " — " : ""}${issue.message}`
  );
}
if (bySeverity.info.length > infoSample.length) {
  console.log(
    `  ... ${bySeverity.info.length - infoSample.length} more info item(s)`
  );
}

if (!result.ok) {
  console.log("\nFAIL — production verification found errors");
  process.exit(1);
}

console.log("\nOK — production architecture validators passed (errors=0)");
process.exit(0);
