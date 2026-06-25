import type { FlashcardSession, QuizAttempt, WeakTopic } from "@/types/progress";
import { topicKey } from "@/lib/ids";

export function deriveWeaknessFromQuiz(
  attempt: QuizAttempt,
  existing?: WeakTopic
): WeakTopic | null {
  const missed = attempt.answers.filter((a) => !a.correct);
  const scorePercent = (attempt.score / attempt.total) * 100;
  const reasons: string[] = [];

  if (missed.length > 0) reasons.push("Missed quiz questions");
  if (scorePercent < 70) reasons.push("Quiz score below 70%");

  if (reasons.length === 0) {
    if (existing && scorePercent >= 90) {
      return null;
    }
    return null;
  }

  const missedQuestionIds = missed.map((m) => m.questionId);
  let severity: 1 | 2 | 3 = 1;
  if (existing) {
    const repeatMiss = missedQuestionIds.some((id) =>
      existing.missedQuestionIds.includes(id)
    );
    severity = repeatMiss ? (Math.min(3, existing.severity + 1) as 1 | 2 | 3) : existing.severity;
  }

  return {
    topicKey: attempt.topicKey,
    certId: attempt.certId,
    reasons,
    missedQuestionIds,
    missedCardIds: existing?.missedCardIds ?? [],
    lastSeenAt: attempt.completedAt,
    severity,
  };
}

export function deriveWeaknessFromFlashcards(
  session: FlashcardSession,
  existing?: WeakTopic
): WeakTopic | null {
  const missed = session.results.filter((r) => !r.gotIt);
  if (missed.length === 0) {
    if (existing && existing.missedQuestionIds.length === 0) {
      return null;
    }
    if (!existing) return null;
    if (existing.missedCardIds.length === 0) return null;
  }

  const missedCardIds = missed.map((m) => m.cardId);
  const reasons = missed.length > 0 ? ["Missed flashcards"] : (existing?.reasons ?? []);
  let severity: 1 | 2 | 3 = existing?.severity ?? 1;
  if (missed.length > 0) {
    const repeatMiss = missedCardIds.some((id) => existing?.missedCardIds.includes(id));
    severity = repeatMiss ? (Math.min(3, severity + 1) as 1 | 2 | 3) : severity;
  }

  return {
    topicKey: session.topicKey,
    certId: session.certId,
    reasons: reasons.length > 0 ? reasons : ["Weak area"],
    missedQuestionIds: existing?.missedQuestionIds ?? [],
    missedCardIds: missed.length > 0 ? missedCardIds : (existing?.missedCardIds ?? []),
    lastSeenAt: session.completedAt,
    severity,
  };
}

export function shouldClearWeakness(
  attempt: QuizAttempt,
  session: FlashcardSession | undefined,
  existing: WeakTopic
): boolean {
  const scorePercent = (attempt.score / attempt.total) * 100;
  const allFlashcardsGot =
    session?.results.every((r) => r.gotIt) ?? existing.missedCardIds.length === 0;
  return scorePercent >= 90 && allFlashcardsGot;
}

export function getWeakTopicsList(weakTopics: Record<string, WeakTopic>): WeakTopic[] {
  return Object.values(weakTopics).sort((a, b) => b.severity - a.severity);
}

export function makeTopicKey(certId: string, topicId: string): string {
  return topicKey(certId, topicId);
}
