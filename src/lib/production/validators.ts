/**
 * Automated validators for curriculum production quality control.
 * Inspects live Path A content + production registries without mutating runtime behavior.
 */

import { CERTIFICATIONS } from "@/content/registry";
import type { Certification, QuizQuestion, Topic } from "@/content/types";
import { getContentExpansionLevel } from "@/lib/content-expansion";
import { listExamBlueprints } from "@/content/production/exam-blueprints";
import {
  listFutureReviewFlags,
  listProductionSources,
} from "@/content/production/sources/catalog";
import { assertMasteryCompatibility } from "@/content/production/mastery-compatibility";
import {
  buildKnowledgePrerequisiteGraph,
  findGraphCycles,
  listTrackPrerequisiteGraphs,
  validateBrokenPrerequisiteLinks,
} from "@/content/production/prerequisites/graph";
import { listAllSubjects } from "@/content/production/hierarchy";
import {
  CCNA_V11_OFFICIAL_LINES,
  listCcnaV11ParentObjectives,
} from "@/content/production/objectives/ccna-200-301-v1.1";
import { assertCcnaPilotMappingComplete } from "@/content/production/mappings/ccna-pilot-to-v1.1";
import { assertCcnaTransitionIntegrity } from "@/content/production/ccna-transition/comparison";
import {
  CCNA_V11_LAST_TEST_DATE,
  CCNA_V20_FIRST_TEST_DATE,
  resolveActiveCcnaVersion,
} from "@/content/production/ccna-transition/dates";
import { listCcnaV20ParentObjectives } from "@/content/production/objectives/ccna-200-301-v2.0";
import type { ProductionValidationIssue } from "@/content/production/types";

/** UTC calendar date-of-record (YYYY-MM-DD). Not a local wall-clock timestamp. */
const ISO_CALENDAR_DATE = /^\d{4}-\d{2}-\d{2}$/;

function allQuestions(topic: Topic): QuizQuestion[] {
  return [...topic.quiz, ...(topic.questionBank ?? [])];
}

function isIsoCalendarDate(value: string | undefined): boolean {
  if (!value) return true;
  if (!ISO_CALENDAR_DATE.test(value)) return false;
  const t = Date.parse(`${value}T12:00:00Z`);
  return !Number.isNaN(t);
}

export function validateDuplicateIds(
  cert: Certification
): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  const topicIds = new Set<string>();
  const questionIds = new Set<string>();
  const flashcardIds = new Set<string>();

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      if (topicIds.has(topic.id)) {
        issues.push({
          code: "duplicate-topic-id",
          severity: "error",
          trackId: cert.id,
          topicId: topic.id,
          message: `Duplicate topic id "${topic.id}"`,
        });
      }
      topicIds.add(topic.id);

      for (const q of allQuestions(topic)) {
        const key = `${cert.id}:${q.id}`;
        if (questionIds.has(key)) {
          issues.push({
            code: "duplicate-question-id",
            severity: "error",
            trackId: cert.id,
            topicId: topic.id,
            entityId: q.id,
            message: `Duplicate question id "${q.id}"`,
          });
        }
        questionIds.add(key);
      }

      for (const card of topic.flashcards) {
        const key = `${cert.id}:${card.id}`;
        if (flashcardIds.has(key)) {
          issues.push({
            code: "duplicate-flashcard-id",
            severity: "warning",
            trackId: cert.id,
            topicId: topic.id,
            entityId: card.id,
            message: `Duplicate flashcard id "${card.id}"`,
          });
        }
        flashcardIds.add(key);
      }
    }
  }
  return issues;
}

export function validateQuizIntegrity(
  cert: Certification
): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const q of allQuestions(topic)) {
        if (!q.choices || q.choices.length < 2) {
          issues.push({
            code: "incomplete-choices",
            severity: "error",
            trackId: cert.id,
            topicId: topic.id,
            entityId: q.id,
            message: "Question has fewer than 2 choices",
          });
          continue;
        }
        const choiceIds = new Set(q.choices.map((c) => c.id));
        if (!choiceIds.has(q.correctChoiceId)) {
          issues.push({
            code: "invalid-correct-choice",
            severity: "error",
            trackId: cert.id,
            topicId: topic.id,
            entityId: q.id,
            message: `correctChoiceId "${q.correctChoiceId}" not in choices`,
          });
        }
        if (!q.explanation || q.explanation.trim().length < 8) {
          issues.push({
            code: "incomplete-explanation",
            severity: "warning",
            trackId: cert.id,
            topicId: topic.id,
            entityId: q.id,
            message: "Missing or too-short explanation",
          });
        }
        if (!q.prompt || q.prompt.trim().length < 5) {
          issues.push({
            code: "incomplete-prompt",
            severity: "error",
            trackId: cert.id,
            topicId: topic.id,
            entityId: q.id,
            message: "Missing or too-short prompt",
          });
        }
      }
    }
  }
  return issues;
}

export function validateUnsupportedClaims(
  cert: Certification
): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  // Heuristic: flag invented-looking quotation marks around "official" claims
  // without a source — soft warning only.
  const claimPattern =
    /\b(?:official(?:ly)?\s+requires|guaranteed\s+to\s+pass|cisco\s+says|comptia\s+says)\b/i;

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const blobs = [
        topic.lesson.content,
        topic.realWorldScenario ?? "",
        ...topic.keyFacts,
        ...topic.quiz.map((q) => q.explanation),
      ];
      for (const blob of blobs) {
        if (claimPattern.test(blob)) {
          issues.push({
            code: "unsupported-claim-heuristic",
            severity: "info",
            trackId: cert.id,
            topicId: topic.id,
            message:
              "Possible absolute/vendor claim — ensure a SourceRecord exists before keeping this wording",
          });
          break;
        }
      }
    }
  }
  return issues;
}

export function validateMissingSourceRecords(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  const sources = listProductionSources();
  const sourceIds = new Set(sources.map((s) => s.id));

  for (const blueprint of listExamBlueprints()) {
    for (const sid of blueprint.sourceIds) {
      if (!sourceIds.has(sid)) {
        issues.push({
          code: "missing-source-record",
          severity: "error",
          trackId: blueprint.trackId,
          entityId: sid,
          message: `Exam blueprint references missing source "${sid}"`,
        });
      }
    }
    if (blueprint.confidence === "needs-retrieval") {
      issues.push({
        code: "blueprint-needs-retrieval",
        severity: "warning",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message:
          "Blueprint confidence is needs-retrieval — fetch first-party objectives before claiming official alignment",
      });
    }
    if (blueprint.mixedVersionWarning) {
      // Presence of the field is the intentional flag — warn, do not hard-fail.
      issues.push({
        code: "mixed-exam-version",
        severity: "warning",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message: blueprint.mixedVersionWarning,
      });
    }
    if (!isIsoCalendarDate(blueprint.retrievedAt)) {
      issues.push({
        code: "invalid-calendar-date",
        severity: "error",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message: `Blueprint retrievedAt must be UTC calendar YYYY-MM-DD, got "${blueprint.retrievedAt}"`,
      });
    }
    if (!isIsoCalendarDate(blueprint.lastCheckedAt)) {
      issues.push({
        code: "invalid-calendar-date",
        severity: "error",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message: `Blueprint lastCheckedAt must be UTC calendar YYYY-MM-DD, got "${blueprint.lastCheckedAt}"`,
      });
    }
  }

  for (const subject of listAllSubjects()) {
    for (const sid of subject.sourceIds) {
      if (!sourceIds.has(sid)) {
        issues.push({
          code: "missing-source-record",
          severity: "warning",
          entityId: subject.id,
          message: `Subject references missing source "${sid}"`,
        });
      }
    }
  }

  return issues;
}

/**
 * Domain weights / empty objective arrays must not be mistaken for complete mappings.
 * Also catches blueprints that deferred all structure pending syllabus inspection.
 */
export function validateBlueprintObjectiveHonesty(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  for (const blueprint of listExamBlueprints()) {
    const objectiveCount = blueprint.domains.reduce(
      (sum, d) => sum + d.objectives.length,
      0
    );
    if (blueprint.domains.length === 0) {
      issues.push({
        code: "blueprint-structure-incomplete",
        severity: "warning",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message:
          "Blueprint has no domains — official syllabus/objectives structure not fully inspected yet",
      });
      continue;
    }
    if (objectiveCount === 0) {
      issues.push({
        code: "domain-weights-only",
        severity: "warning",
        trackId: blueprint.trackId,
        entityId: blueprint.id,
        message:
          "Blueprint has domains/weights but empty objectives[] — domain weights are not a complete objective mapping",
      });
    }
  }
  return issues;
}

export function validateUncoveredObjectives(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  for (const blueprint of listExamBlueprints()) {
    for (const domain of blueprint.domains) {
      for (const obj of domain.objectives) {
        if (obj.coveredByTopicIds.length === 0) {
          issues.push({
            code: "uncovered-objective",
            severity: "warning",
            trackId: blueprint.trackId,
            entityId: obj.id,
            message: `Blueprint objective "${obj.id}" has no topic.objectives coverage`,
          });
        }
      }
    }
  }
  return issues;
}

export function validateLessonCompleteness(
  cert: Certification
): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  let fullCesMissingMisconception = 0;
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const hasLesson =
        topic.lesson.content.trim().length > 0 ||
        (topic.lesson.experience?.screens.length ?? 0) > 0;
      if (!hasLesson) {
        issues.push({
          code: "incomplete-lesson",
          severity: "warning",
          trackId: cert.id,
          topicId: topic.id,
          message: "Topic lacks lesson content and LES experience",
        });
      }
      const level = getContentExpansionLevel(topic);
      if (
        level === "full" &&
        !(topic.lesson.experience?.screens.some((s) => s.type === "misconception"))
      ) {
        fullCesMissingMisconception += 1;
      }
    }
  }
  if (fullCesMissingMisconception > 0) {
    issues.push({
      code: "missing-misconception-screen",
      severity: "info",
      trackId: cert.id,
      message: `${fullCesMissingMisconception} full-CES topic(s) lack an LES misconception screen — consider MisconceptionRecord coverage in later batches`,
    });
  }
  return issues;
}

export function validateProductionRegistry(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  const subjects = listAllSubjects();
  const ids = new Set<string>();
  for (const s of subjects) {
    if (ids.has(s.id)) {
      issues.push({
        code: "duplicate-subject-id",
        severity: "error",
        entityId: s.id,
        message: `Duplicate subject id "${s.id}"`,
      });
    }
    ids.add(s.id);
  }

  for (const err of assertMasteryCompatibility()) {
    issues.push({
      code: "mastery-compatibility",
      severity: "error",
      message: err,
    });
  }

  for (const source of listProductionSources()) {
    if (source.confidence !== "placeholder" && !source.retrievedAt && source.kind !== "internal-architecture") {
      issues.push({
        code: "missing-retrieval-date",
        severity: "warning",
        entityId: source.id,
        message: `Non-internal source "${source.id}" lacks retrievedAt`,
      });
    }
    if (source.futureReviewReason && !source.reviewBy) {
      issues.push({
        code: "review-flag-missing-date",
        severity: "warning",
        entityId: source.id,
        message: `Source has futureReviewReason but no reviewBy date`,
      });
    }
    for (const [field, value] of [
      ["retrievedAt", source.retrievedAt],
      ["lastCheckedAt", source.lastCheckedAt],
      ["reviewBy", source.reviewBy],
    ] as const) {
      if (value != null && !isIsoCalendarDate(value)) {
        issues.push({
          code: "invalid-calendar-date",
          severity: "error",
          entityId: source.id,
          message: `Source ${field} must be UTC calendar YYYY-MM-DD, got "${value}"`,
        });
      }
    }
    if (source.mixedVersionWarning) {
      issues.push({
        code: "mixed-exam-version",
        severity: "warning",
        entityId: source.id,
        message: source.mixedVersionWarning,
      });
    }
  }

  for (const flag of listFutureReviewFlags()) {
    if (!isIsoCalendarDate(flag.reviewBy)) {
      issues.push({
        code: "invalid-calendar-date",
        severity: "error",
        trackId: flag.subject,
        entityId: flag.id,
        message: `FutureReviewFlag reviewBy must be UTC calendar YYYY-MM-DD, got "${flag.reviewBy}"`,
      });
    }
    const severity =
      flag.severity === "critical"
        ? "warning"
        : flag.severity === "warning"
          ? "info"
          : "info";
    issues.push({
      code: "future-review-flag",
      severity,
      trackId: flag.subject,
      entityId: flag.id,
      message: `[reviewBy ${flag.reviewBy}] ${flag.fact}`,
    });
  }

  return issues;
}

export function validateCcnaV11Ingestion(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  const parents = listCcnaV11ParentObjectives();
  if (parents.length !== 53) {
    // 13+9+5+9+10+7 = 53 parent objectives in v1.1 PDF
    issues.push({
      code: "ccna-v11-parent-count",
      severity: "error",
      trackId: "ccna",
      message: `Expected 53 official v1.1 parent objectives, found ${parents.length}`,
    });
  }
  // Complete v1.1 PDF hierarchy: 53 parents + 58 sub-bullets = 111 numbered lines.
  if (CCNA_V11_OFFICIAL_LINES.length !== 111) {
    issues.push({
      code: "ccna-v11-line-count",
      severity: "error",
      trackId: "ccna",
      message: `Expected 111 official v1.1 numbered lines, found ${CCNA_V11_OFFICIAL_LINES.length}`,
    });
  }
  const numbers = new Set<string>();
  for (const line of CCNA_V11_OFFICIAL_LINES) {
    if (numbers.has(line.number)) {
      issues.push({
        code: "ccna-v11-duplicate-number",
        severity: "error",
        trackId: "ccna",
        entityId: line.id,
        message: `Duplicate official number ${line.number}`,
      });
    }
    numbers.add(line.number);
    if (line.objectivesVersion !== "v1.1" || line.examCode !== "200-301") {
      issues.push({
        code: "ccna-version-mix",
        severity: "error",
        trackId: "ccna",
        entityId: line.id,
        message: "Non-v1.1 / non-200-301 line found in v1.1 registry",
      });
    }
    if (line.id.includes("v2.0")) {
      issues.push({
        code: "ccna-version-mix",
        severity: "error",
        trackId: "ccna",
        entityId: line.id,
        message: "v2.0 objective id leaked into v1.1 registry",
      });
    }
    // Sub-bullet form N.M.x → parent N.M; parent form N.M → no parent.
    if (/^\d+\.\d+\.[a-z]$/i.test(line.number)) {
      const parent = `${line.number.split(".")[0]}.${line.number.split(".")[1]}`;
      if (line.parentNumber !== parent || line.depth !== 2) {
        issues.push({
          code: "ccna-v11-hierarchy",
          severity: "error",
          trackId: "ccna",
          entityId: line.id,
          message: `Bad parent/depth for ${line.number}: parent=${line.parentNumber} depth=${line.depth}`,
        });
      }
    } else if (line.parentNumber != null || line.depth !== 1) {
      issues.push({
        code: "ccna-v11-hierarchy",
        severity: "error",
        trackId: "ccna",
        entityId: line.id,
        message: `Parent line ${line.number} must have depth 1 and no parentNumber`,
      });
    }
  }
  for (const err of assertCcnaPilotMappingComplete()) {
    issues.push({
      code: "ccna-pilot-mapping",
      severity: "error",
      trackId: "ccna",
      message: err,
    });
  }

  const v20Parents = listCcnaV20ParentObjectives();
  if (v20Parents.length !== 29) {
    issues.push({
      code: "ccna-v20-parent-count",
      severity: "error",
      trackId: "ccna",
      message: `Expected 29 official v2.0 parent objectives, found ${v20Parents.length}`,
    });
  }
  for (const err of assertCcnaTransitionIntegrity()) {
    issues.push({
      code: "ccna-transition-integrity",
      severity: "error",
      trackId: "ccna",
      message: err,
    });
  }
  if (resolveActiveCcnaVersion("2027-02-02") !== "v1.1") {
    issues.push({
      code: "ccna-cutover-config",
      severity: "error",
      trackId: "ccna",
      message: `Expected v1.1 active on ${CCNA_V11_LAST_TEST_DATE}`,
    });
  }
  if (resolveActiveCcnaVersion("2027-02-03") !== "v2.0") {
    issues.push({
      code: "ccna-cutover-config",
      severity: "error",
      trackId: "ccna",
      message: `Expected v2.0 active on ${CCNA_V20_FIRST_TEST_DATE}`,
    });
  }

  // Guard against silent ID mixing in blueprint objective ids.
  for (const blueprint of listExamBlueprints().filter((b) => b.trackId === "ccna")) {
    for (const domain of blueprint.domains) {
      for (const obj of domain.objectives) {
        if (
          blueprint.objectivesVersion === "v1.1" &&
          obj.id.includes("v2.0")
        ) {
          issues.push({
            code: "ccna-version-mix",
            severity: "error",
            trackId: "ccna",
            entityId: obj.id,
            message: "v1.1 blueprint contains a v2.0 objective id",
          });
        }
        if (
          blueprint.objectivesVersion === "v2.0" &&
          obj.id.includes("v1.1")
        ) {
          issues.push({
            code: "ccna-version-mix",
            severity: "error",
            trackId: "ccna",
            entityId: obj.id,
            message: "v2.0 blueprint contains a v1.1 objective id",
          });
        }
      }
    }
  }

  return issues;
}

export function runAllProductionValidators(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];

  issues.push(...validateProductionRegistry());
  issues.push(...validateMissingSourceRecords());
  issues.push(...validateBlueprintObjectiveHonesty());
  issues.push(...validateCcnaV11Ingestion());
  issues.push(...validateUncoveredObjectives());

  for (const cert of CERTIFICATIONS) {
    issues.push(...validateDuplicateIds(cert));
    issues.push(...validateQuizIntegrity(cert));
    issues.push(...validateUnsupportedClaims(cert));
    issues.push(...validateLessonCompleteness(cert));
    issues.push(...validateBrokenPrerequisiteLinks(cert.id));
  }

  for (const graph of listTrackPrerequisiteGraphs()) {
    issues.push(...findGraphCycles(graph));
  }
  issues.push(...findGraphCycles(buildKnowledgePrerequisiteGraph()));

  return issues;
}

export function summarizeIssues(issues: ProductionValidationIssue[]): {
  errors: number;
  warnings: number;
  infos: number;
} {
  return {
    errors: issues.filter((i) => i.severity === "error").length,
    warnings: issues.filter((i) => i.severity === "warning").length,
    infos: issues.filter((i) => i.severity === "info").length,
  };
}
