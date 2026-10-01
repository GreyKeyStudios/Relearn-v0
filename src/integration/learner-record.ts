/**
 * Adapter: persisted progress (`ProgressState`) → interchange learner record.
 *
 * Pure function over the existing store shape. Nothing is written back; the
 * learner record is a snapshot the learner chooses to export from their device.
 *
 * Not exported in v1 (see docs/integration/relearn-interchange-v1.md):
 * - `competencyEvidence` (piano practice) — not anchored to any course manifest.
 * - adaptive-review attempts — span topics and have no single manifest
 *   activity id. Their effect still appears in each lesson's masteryScore.
 */

import type { Certification, Topic } from "@/content/types";
import { CERTIFICATIONS } from "@/content/registry";
import { countCompletedCurriculumSteps, countCurriculumSteps } from "@/lib/curriculum";
import { assignmentKey, topicKey } from "@/lib/ids";
import { getCertMasteryPercent } from "@/lib/mastery";
import type { ProgressState } from "@/types/progress";
import {
  LEARNER_RECORD_TRUST,
  RELEARN_INTERCHANGE_VERSION,
  SCHEMA_IDS,
  lessonActivityIdFor,
  lessonIdFor,
  type AssessmentResult,
  type CourseProgressRecord,
  type EvidenceItem,
  type LearnerRecord,
  type LessonProgress,
} from "./contract";
import { ENGINE_INFO } from "./course-manifest";

function findAssignmentFor(
  cert: Certification,
  predicate: (a: NonNullable<Topic["assignments"]>[number]) => boolean
): { topic: Topic; assignmentId: string } | undefined {
  for (const d of cert.domains) {
    for (const t of d.topics) {
      const a = t.assignments?.find(predicate);
      if (a) return { topic: t, assignmentId: a.id };
    }
  }
  return undefined;
}

function quizAssessments(cert: Certification, state: ProgressState): AssessmentResult[] {
  const out: AssessmentResult[] = [];
  for (const q of state.quizAttempts) {
    if (q.certId !== cert.id || q.topicKey.startsWith("adaptive-review:")) continue;
    const rest = q.topicKey.slice(cert.id.length + 1);
    const weakConcepts = q.answers.filter((a) => !a.correct).map((a) => a.questionId);
    if (rest.startsWith("domain-review:")) {
      out.push({ activityId: q.topicKey, kind: "domain-review", score: q.score, total: q.total, completedAt: q.completedAt, weakConcepts });
    } else if (rest.startsWith("question-bank:")) {
      const lessonId = lessonIdFor(cert.id, rest.slice("question-bank:".length));
      out.push({ activityId: lessonActivityIdFor(lessonId, "question-bank"), lessonId, kind: "question-bank", score: q.score, total: q.total, completedAt: q.completedAt, weakConcepts });
    } else {
      const lessonId = lessonIdFor(cert.id, rest);
      out.push({ activityId: lessonActivityIdFor(lessonId, "quiz"), lessonId, kind: "quiz", score: q.score, total: q.total, completedAt: q.completedAt, weakConcepts });
    }
  }
  return out;
}

function practiceAssessments(cert: Certification, state: ProgressState): AssessmentResult[] {
  const out: AssessmentResult[] = [];
  for (const s of state.simulatorAttempts) {
    if (s.certId !== cert.id) continue;
    const match = s.assignmentId
      ? findAssignmentFor(cert, (a) => a.id === s.assignmentId)
      : findAssignmentFor(cert, (a) => a.simulatorId === s.simulatorId);
    if (!match) continue;
    out.push({
      activityId: assignmentKey(cert.id, match.assignmentId),
      lessonId: lessonIdFor(cert.id, match.topic.id),
      kind: "simulator",
      score: s.score,
      total: s.total,
      completedAt: s.completedAt,
      weakConcepts: [...s.weakConcepts],
    });
  }
  for (const c of state.caseStudyAttempts ?? []) {
    if (c.certId !== cert.id) continue;
    const match = findAssignmentFor(cert, (a) => a.caseStudyId === c.caseStudyId);
    if (!match) continue;
    out.push({
      activityId: assignmentKey(cert.id, match.assignmentId),
      lessonId: lessonIdFor(cert.id, match.topic.id),
      kind: "case-study",
      score: c.score,
      total: c.maxScore,
      completedAt: c.completedAt,
      weakConcepts: [...c.weakConcepts],
    });
  }
  return out;
}

export function buildCourseProgressRecord(
  cert: Certification,
  state: ProgressState
): CourseProgressRecord | null {
  const topics = cert.domains.flatMap((d) => d.topics);
  const lessons: LessonProgress[] = [];
  const evidence: EvidenceItem[] = [];

  for (const t of topics) {
    const key = topicKey(cert.id, t.id);
    const completed = Boolean(state.completedLessons[key]);
    const mastery = state.topicMastery[key];
    if (!completed && !mastery) continue;
    lessons.push({
      lessonId: key,
      completed,
      attempts: mastery?.attemptCount ?? 0,
      ...(mastery
        ? { masteryScore: mastery.score, masteryLevel: mastery.level, lastPracticedAt: mastery.lastPracticedAt }
        : {}),
    });
    if (completed) {
      evidence.push({
        id: `lesson-completion:${key}`,
        type: "lesson-completion",
        ref: lessonActivityIdFor(key, "lesson"),
        evidenceMode: "self-reported",
        summary: `Completed lesson: ${t.name}`,
      });
    }
    for (const a of t.assignments ?? []) {
      const aKey = assignmentKey(cert.id, a.id);
      if (!state.completedAssignments[aKey]) continue;
      evidence.push({
        id: `activity-completion:${aKey}`,
        type: "activity-completion",
        ref: aKey,
        evidenceMode: a.type === "external-lab" ? "external-attested" : a.type === "simulator" || a.type === "case-study" ? "auto-graded" : "self-reported",
        summary: `Completed ${a.type}: ${a.title}`,
      });
    }
  }

  const assessments = [...quizAssessments(cert, state), ...practiceAssessments(cert, state)].sort(
    (a, b) => a.completedAt.localeCompare(b.completedAt)
  );
  assessments.forEach((a, i) => {
    evidence.push({
      id: `assessment:${a.activityId}:${i}`,
      type: "assessment",
      ref: a.activityId,
      evidenceMode: "auto-graded",
      observedAt: a.completedAt,
      summary: `Scored ${a.score}/${a.total} on ${a.kind}`,
    });
  });

  if (lessons.length === 0 && assessments.length === 0 && evidence.length === 0) return null;

  return {
    courseId: cert.id,
    completedSteps: countCompletedCurriculumSteps(cert, state),
    totalSteps: countCurriculumSteps(cert),
    masteryPercent: getCertMasteryPercent(cert, state),
    lessons,
    assessments,
    evidence,
  };
}

export function buildLearnerRecord(
  state: ProgressState,
  options: { certs?: Certification[]; exportedAt?: string; provenance?: LearnerRecord["provenance"] } = {}
): LearnerRecord {
  const certs = options.certs ?? CERTIFICATIONS;
  return {
    schema: SCHEMA_IDS.learnerRecord,
    schemaVersion: RELEARN_INTERCHANGE_VERSION,
    engine: ENGINE_INFO,
    exportedAt: options.exportedAt ?? new Date().toISOString(),
    provenance: options.provenance ?? "device",
    trust: LEARNER_RECORD_TRUST,
    courses: certs
      .map((c) => buildCourseProgressRecord(c, state))
      .filter((c): c is CourseProgressRecord => c !== null),
  };
}
