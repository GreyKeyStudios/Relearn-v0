import type { WeakTopic } from "@/types/progress";
import type { SimulatorAttempt } from "@/types/simulator";
import { assignmentKey, topicKey } from "@/lib/ids";

export function deriveWeaknessFromSimulator(
  attempt: SimulatorAttempt,
  existing?: WeakTopic
): WeakTopic | null {
  const scorePercent = attempt.total > 0 ? (attempt.score / attempt.total) * 100 : 0;
  const reasons: string[] = [];

  if (attempt.weakConcepts.length > 0) reasons.push("Weak simulator concepts");
  if (scorePercent < 70) reasons.push("Simulator score below 70%");

  if (reasons.length === 0) {
    return null;
  }

  const key =
    attempt.topicKey ??
    (attempt.assignmentId
      ? assignmentKey(attempt.certId, attempt.assignmentId)
      : `${attempt.certId}:simulator:${attempt.simulatorId}`);

  let severity: 1 | 2 | 3 = 1;
  if (existing) {
    const repeatWeak = attempt.weakConcepts.some((c: string) =>
      existing.reasons.some((r) => r.includes(c))
    );
    severity = repeatWeak ? (Math.min(3, existing.severity + 1) as 1 | 2 | 3) : existing.severity;
  }

  return {
    topicKey: key,
    certId: attempt.certId,
    reasons,
    missedQuestionIds: existing?.missedQuestionIds ?? [],
    missedCardIds: existing?.missedCardIds ?? [],
    lastSeenAt: attempt.completedAt,
    severity,
  };
}

export function makeSimulatorTopicKey(certId: string, topicId: string): string {
  return topicKey(certId, topicId);
}
