import type { QuizQuestion, Topic } from "@/content/types";
import type { QuizAnswer } from "@/types/progress";
import type { ProgressState } from "@/types/progress";
import { getCcnaObjectiveShortLabel } from "@/content/objectives/ccna";
import { getAplusObjectiveShortLabel } from "@/content/objectives/a-plus";
import { hardwareTopicForObjective } from "@/content/certifications/ap/ap-hardware-remediation";
import { networkingTopicForObjective } from "@/content/certifications/ap/ap-networking-remediation";
import { mobileTopicForObjective } from "@/content/certifications/ap/ap-mobile-remediation";
import { virtCloudTopicForObjective } from "@/content/certifications/ap/ap-virt-cloud-remediation";
import { troubleshootTopicForObjective } from "@/content/certifications/ap/ap-troubleshoot-remediation";
import { osTopicForObjective } from "@/content/certifications/ap/ap-os-remediation";
import { securityTopicForObjective } from "@/content/certifications/ap/ap-security-remediation";
import { swTroubleshootTopicForObjective } from "@/content/certifications/ap/ap-sw-troubleshoot-remediation";
import { opsTopicForObjective } from "@/content/certifications/ap/ap-ops-remediation";
import { resolveQuestionObjectiveId } from "@/lib/objective-mastery";
import { certSupportsObjectiveCoaching } from "@/lib/objective-support";
import { topicKey } from "@/lib/ids";

export interface ObjectiveDrillSuggestion {
  objectiveId: string;
  label: string;
  attemptCount: number;
  /** Optional topic id for weak-area routing (A+ Hardware map). */
  reviewTopicId?: string;
}

/** Pick the weakest objective among missed questions for post-quiz remediation. */
export function suggestObjectiveDrill(
  certId: string,
  topic: Topic,
  answers: QuizAnswer[],
  questions: QuizQuestion[],
  state: ProgressState
): ObjectiveDrillSuggestion | null {
  if (!certSupportsObjectiveCoaching(certId)) return null;

  const questionMap = new Map(questions.map((q) => [q.id, q]));
  const missedObjectives = new Map<string, number>();

  for (const answer of answers) {
    if (answer.correct) continue;
    const question = questionMap.get(answer.questionId);
    if (!question) continue;
    const objectiveId = resolveQuestionObjectiveId(question, topic);
    if (!objectiveId) continue;
    missedObjectives.set(objectiveId, (missedObjectives.get(objectiveId) ?? 0) + 1);
  }

  if (missedObjectives.size === 0) return null;

  const mastery = state.topicMastery[topicKey(certId, topic.id)];
  let bestId: string | null = null;
  let lowestScore = Infinity;

  for (const objectiveId of missedObjectives.keys()) {
    const score = mastery?.objectiveScores[objectiveId] ?? 100;
    if (score < lowestScore) {
      lowestScore = score;
      bestId = objectiveId;
    }
  }

  if (!bestId) return null;

  const label =
    certId === "ccna"
      ? getCcnaObjectiveShortLabel(bestId)
      : certId === "a-plus"
        ? getAplusObjectiveShortLabel(bestId)
        : bestId.replace(/^CCNA-/, "");

  const reviewTopicId =
    certId === "a-plus"
      ? hardwareTopicForObjective(bestId) ??
        networkingTopicForObjective(bestId) ??
        mobileTopicForObjective(bestId) ??
        virtCloudTopicForObjective(bestId) ??
        troubleshootTopicForObjective(bestId) ??
        osTopicForObjective(bestId) ??
        securityTopicForObjective(bestId) ??
        swTroubleshootTopicForObjective(bestId) ??
        opsTopicForObjective(bestId)
      : undefined;

  return {
    objectiveId: bestId,
    label,
    attemptCount: mastery?.objectiveAttempts?.[bestId] ?? 0,
    reviewTopicId,
  };
}
