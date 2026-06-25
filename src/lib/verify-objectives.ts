import type { Certification, QuizQuestion } from "@/content/types";
import { ccna } from "@/content/certifications/ccna";

export interface ObjectiveTagWarning {
  certId: string;
  topicId: string;
  questionId: string;
  message: string;
}

function isQuizQuestion(item: QuizQuestion): boolean {
  return Boolean(item.prompt && item.choices);
}

export function verifyCcnaObjectiveTags(): ObjectiveTagWarning[] {
  const warnings: ObjectiveTagWarning[] = [];
  const cert: Certification = ccna;

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const objectives = new Set(topic.objectives ?? []);
      const questions = [
        ...topic.quiz.filter(isQuizQuestion),
        ...(topic.questionBank ?? []).filter(isQuizQuestion),
      ];

      for (const q of questions) {
        if (!q.objectiveId) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            questionId: q.id,
            message: "Missing objectiveId",
          });
          continue;
        }
        if (objectives.size > 0 && !objectives.has(q.objectiveId)) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            questionId: q.id,
            message: `objectiveId ${q.objectiveId} not in topic objectives`,
          });
        }
        if (!q.difficulty) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            questionId: q.id,
            message: "Missing difficulty",
          });
        }
      }
    }
  }

  return warnings;
}
