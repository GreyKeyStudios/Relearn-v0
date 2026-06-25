import type { Certification } from "@/content/types";
import { flattenTopics } from "@/lib/content-selectors";
import {
  countCompletedCurriculumSteps,
  countCurriculumSteps,
} from "@/lib/curriculum";
import type { ProgressState, QuizAttempt } from "@/types/progress";

export function getCertProgressPercent(
  cert: Certification,
  state: Pick<ProgressState, "completedLessons" | "completedAssignments">
): number {
  const total = countCurriculumSteps(cert);
  if (total === 0) return 0;
  const completed = countCompletedCurriculumSteps(cert, state as ProgressState);
  return Math.round((completed / total) * 100);
}

export function getDomainReviewAttempts(
  certId: string,
  attempts: QuizAttempt[]
): QuizAttempt[] {
  return attempts.filter(
    (a) => a.certId === certId && a.topicKey.includes(":domain-review:")
  );
}

export function getQuizAccuracy(attempts: QuizAttempt[]): number {
  if (attempts.length === 0) return 0;
  const totalCorrect = attempts.reduce((sum, a) => sum + a.score, 0);
  const totalQuestions = attempts.reduce((sum, a) => sum + a.total, 0);
  if (totalQuestions === 0) return 0;
  return Math.round((totalCorrect / totalQuestions) * 100);
}

export function getCertQuizAccuracy(certId: string, attempts: QuizAttempt[]): number {
  return getQuizAccuracy(attempts.filter((a) => a.certId === certId));
}

export function getCompletedLessonCount(state: ProgressState, cert: Certification): number {
  return flattenTopics(cert).filter((t) => state.completedLessons[`${cert.id}:${t.id}`]).length;
}
