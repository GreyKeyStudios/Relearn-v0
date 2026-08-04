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
import type { ProductionValidationIssue } from "@/content/production/types";

function allQuestions(topic: Topic): QuizQuestion[] {
  return [...topic.quiz, ...(topic.questionBank ?? [])];
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
  }

  for (const flag of listFutureReviewFlags()) {
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

export function runAllProductionValidators(): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];

  issues.push(...validateProductionRegistry());
  issues.push(...validateMissingSourceRecords());
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
