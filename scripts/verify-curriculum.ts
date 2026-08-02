import {
  smokeTestPaths,
  verifyCurriculumLinks,
} from "../src/lib/verify-curriculum";
import {
  verifyAllCesWarnings,
  verifyCcnaCesWarnings,
  verifyCertCesWarnings,
} from "../src/lib/content-expansion";
import {
  verifyAplusObjectiveTags,
  verifyCcnaObjectiveTags,
} from "../src/lib/verify-objectives";
import { verifyCcnaPedagogyWarnings } from "../src/lib/verify-pedagogy";
import { verifyCcnaExperienceWarnings } from "../src/lib/verify-experience";
import { verifyKnowledgeGraph } from "../src/lib/verify-knowledge-graph";
import { verifyScenarios } from "../src/lib/verify-scenarios";
import { CERTIFICATIONS } from "../src/content/registry";
import { getKnowledgeNodes } from "../src/content/knowledge/nodes";
import {
  getAllScenarios,
  MISSING_PATCH_SCENARIO,
} from "../src/content/scenarios/missing-patch";
import { scoreScenarioAttempt } from "../src/lib/scenario-scoring";
import { findPrerequisiteCycles } from "../src/lib/knowledge-graph";
import { verifyLabCatalog } from "../src/lib/verify-labs";
import { verifySynthChallenges } from "../src/lib/verify-synth-challenges";

const strictCcna = process.argv.includes("--strict-ccna");
const strictAll = process.argv.includes("--strict-all");
const strictCcnaObjectives = process.argv.includes("--strict-ccna-objectives");
const strictPedagogy = process.argv.includes("--strict-pedagogy");
const strictExperience = process.argv.includes("--strict-experience");
const strictCf = process.argv.includes("--strict-cf");
const strictAplus = process.argv.includes("--strict-aplus");

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

const knowledgeNodes = getKnowledgeNodes();
const knowledgeIssues = verifyKnowledgeGraph(knowledgeNodes);
const cycleIssues = findPrerequisiteCycles(knowledgeNodes);
console.log("\n=== Knowledge graph verification ===");
if (knowledgeIssues.length === 0) {
  console.log(`OK — ${knowledgeNodes.length} nodes, no dangling refs or cycles`);
} else {
  console.log(`Found ${knowledgeIssues.length} issue(s):`);
  for (const issue of knowledgeIssues) {
    console.log(`  [${issue.nodeId}] ${issue.message}`);
  }
}
if (cycleIssues.length > 0) {
  console.log(`Cycle detector reported ${cycleIssues.length} cycle(s)`);
}

const scenarioIssues = verifyScenarios(getAllScenarios());
console.log("\n=== Scenario verification ===");
if (scenarioIssues.length === 0) {
  console.log(`OK — ${getAllScenarios().length} scenario(s)`);
} else {
  console.log(`Found ${scenarioIssues.length} issue(s):`);
  for (const issue of scenarioIssues) {
    console.log(`  [${issue.scenarioId}] ${issue.message}`);
  }
}

const scopeFail = scoreScenarioAttempt(MISSING_PATCH_SCENARIO, {
  selectedActionIds: ["act-attack-ceo-laptop"],
  completedObjectiveIds: [
    "obj-identify-outdated",
    "obj-prioritize-patch",
    "obj-enable-monitoring",
    "obj-find-weak-host",
    "obj-fake-access",
    "obj-stay-in-scope",
    "obj-find-initial-access",
    "obj-isolate-host",
    "obj-apply-patch",
    "obj-reset-creds",
    "obj-verify-fix",
    "obj-write-report",
  ],
  collectedEvidenceIds: MISSING_PATCH_SCENARIO.evidence.map((e) => e.id),
  submittedReport: true,
});
console.log("\n=== Scenario scoring smoke ===");
if (
  !scopeFail.passed &&
  scopeFail.failReasons.some((r) => r.toLowerCase().includes("scope"))
) {
  console.log("OK — scope violation forces fail");
} else {
  console.log("FAIL — expected scope violation to fail the attempt");
  smokeFailed = true;
}

const labIssues = verifyLabCatalog();
console.log("\n=== Lab catalog verification ===");
if (labIssues.length === 0) {
  console.log("OK — lab catalog metadata valid (no premature relearn-vm availability)");
} else {
  console.log(`Found ${labIssues.length} issue(s):`);
  for (const issue of labIssues) {
    console.log(`  [${issue.scenarioId}] ${issue.message}`);
  }
}

const synthChallengeIssues = verifySynthChallenges();
console.log("\n=== ReLearn Synth challenge verification ===");
if (synthChallengeIssues.length === 0) {
  console.log("OK — every synth assignment has one safe, visible, in-range challenge definition");
} else {
  console.log(`Found ${synthChallengeIssues.length} issue(s):`);
  for (const issue of synthChallengeIssues) {
    console.log(`  [${issue.challengeId}] ${issue.message}`);
  }
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

if (strictCf) {
  const cf = CERTIFICATIONS.find((c) => c.id === "computer-fundamentals");
  const cfWarnings = cf ? verifyCertCesWarnings(cf) : [];
  console.log("\n=== Computer Fundamentals CES warnings (--strict-cf) ===");
  if (cfWarnings.length === 0) {
    console.log("No CF CES warnings");
  } else {
    console.log(`Found ${cfWarnings.length} warning(s):`);
    for (const w of cfWarnings) {
      console.log(`  [${w.certId}] ${w.topicId}: ${w.message}`);
    }
  }
}

if (strictAplus) {
  const ap = CERTIFICATIONS.find((c) => c.id === "a-plus");
  const apWarnings = ap ? verifyCertCesWarnings(ap) : [];
  const topicCount =
    ap?.domains.reduce((n, d) => n + d.topics.length, 0) ?? 0;
  console.log("\n=== CompTIA A+ CES warnings (--strict-aplus) ===");
  if (topicCount === 0) {
    console.log("A+ shell has no topics yet — skip CES body checks (planned)");
  } else if (apWarnings.length === 0) {
    console.log(`No A+ CES warnings (${topicCount} topic(s))`);
  } else {
    console.log(`Found ${apWarnings.length} warning(s):`);
    for (const w of apWarnings) {
      console.log(`  [${w.certId}] ${w.topicId}: ${w.message}`);
    }
  }

  const apObjWarnings = verifyAplusObjectiveTags();
  console.log("\n=== CompTIA A+ objective tags (--strict-aplus) ===");
  if (topicCount === 0) {
    console.log("No A+ topics — skip objective tag checks");
  } else if (apObjWarnings.length === 0) {
    console.log("All A+ quiz/bank questions tagged against registry");
  } else {
    console.log(`Found ${apObjWarnings.length} warning(s):`);
    for (const w of apObjWarnings) {
      console.log(`  [${w.topicId}] ${w.questionId}: ${w.message}`);
    }
  }

  if (topicCount > 0 && (apWarnings.length > 0 || apObjWarnings.length > 0)) {
    process.exit(1);
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

if (
  issues.length > 0 ||
  smokeFailed ||
  knowledgeIssues.length > 0 ||
  scenarioIssues.length > 0 ||
  labIssues.length > 0 ||
  synthChallengeIssues.length > 0
) {
  process.exit(1);
}
