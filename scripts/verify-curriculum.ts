import {
  smokeTestPaths,
  verifyCurriculumLinks,
} from "../src/lib/verify-curriculum";
import {
  verifyAllCesWarnings,
  verifyCcnaCesWarnings,
} from "../src/lib/content-expansion";
import { verifyCcnaObjectiveTags } from "../src/lib/verify-objectives";
import { verifyCcnaPedagogyWarnings } from "../src/lib/verify-pedagogy";
import { verifyCcnaExperienceWarnings } from "../src/lib/verify-experience";

const strictCcna = process.argv.includes("--strict-ccna");
const strictAll = process.argv.includes("--strict-all");
const strictCcnaObjectives = process.argv.includes("--strict-ccna-objectives");
const strictPedagogy = process.argv.includes("--strict-pedagogy");
const strictExperience = process.argv.includes("--strict-experience");

const issues = verifyCurriculumLinks();
const smoke = smokeTestPaths();
const cesWarnings = strictAll
  ? verifyAllCesWarnings()
  : strictCcna
    ? verifyCcnaCesWarnings()
    : [];

console.log("=== Curriculum link verification ===");
if (issues.length === 0) {
  console.log("All assignment links OK");
} else {
  console.log(`Found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.log(`  [${issue.certId}] ${issue.assignmentId} (${issue.topicId}): ${issue.message}`);
  }
}

console.log("\n=== Smoke test paths ===");
let smokeFailed = false;
for (const test of smoke) {
  const status = test.ok ? "OK" : "FAIL";
  console.log(`  ${status}  ${test.path} — ${test.detail}`);
  if (!test.ok) smokeFailed = true;
}

if (strictCcna || strictAll) {
  const label = strictAll ? "All certs CES warnings (--strict-all)" : "CCNA CES warnings (--strict-ccna)";
  console.log(`\n=== ${label} ===`);
  if (cesWarnings.length === 0) {
    console.log("No CES warnings");
  } else {
    console.log(`Found ${cesWarnings.length} warning(s):`);
    for (const w of cesWarnings) {
      console.log(`  [${w.certId}] ${w.topicId}: ${w.message}`);
    }
  }
}

if (strictCcnaObjectives) {
  const objWarnings = verifyCcnaObjectiveTags();
  console.log("\n=== CCNA objective tags (--strict-ccna-objectives) ===");
  if (objWarnings.length === 0) {
    console.log("All CCNA quiz/bank questions tagged");
  } else {
    console.log(`Found ${objWarnings.length} warning(s):`);
    for (const w of objWarnings) {
      console.log(`  [${w.topicId}] ${w.questionId}: ${w.message}`);
    }
  }
  if (objWarnings.length > 0) {
    process.exit(1);
  }
}

if (strictPedagogy) {
  const pedWarnings = verifyCcnaPedagogyWarnings();
  console.log("\n=== CCNA pedagogy warnings (--strict-pedagogy) ===");
  if (pedWarnings.length === 0) {
    console.log("No pedagogy warnings");
  } else {
    console.log(`Found ${pedWarnings.length} warning(s):`);
    for (const w of pedWarnings) {
      console.log(`  [${w.topicId}]: ${w.message}`);
    }
  }
}

if (strictExperience) {
  const expWarnings = verifyCcnaExperienceWarnings();
  console.log("\n=== CCNA experience warnings (--strict-experience) ===");
  if (expWarnings.length === 0) {
    console.log("No experience warnings");
  } else {
    console.log(`Found ${expWarnings.length} warning(s):`);
    for (const w of expWarnings) {
      console.log(`  [${w.topicId}]: ${w.message}`);
    }
  }
  if (expWarnings.length > 0) {
    process.exit(1);
  }
}

if (issues.length > 0 || smokeFailed) {
  process.exit(1);
}
