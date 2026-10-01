import { verifyIntegration } from "../src/integration/verify-integration";
import { buildCourseCatalog } from "../src/integration/course-manifest";

const issues = verifyIntegration();
const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");
const catalog = buildCourseCatalog();

console.log("=== ReLearn interchange v1 verification ===");
console.log(`Courses: ${catalog.courses.length} (${catalog.courses.filter((c) => c.studyable).length} studyable)`);
for (const i of errors) console.log(`  ERROR  ${i.where} — ${i.message}`);
for (const i of warnings.slice(0, 30)) console.log(`  WARN   ${i.where} — ${i.message}`);
if (warnings.length > 30) console.log(`  … ${warnings.length - 30} more warning(s)`);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length > 0 ? 1 : 0);
