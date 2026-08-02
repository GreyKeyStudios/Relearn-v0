import type { Certification, QuizQuestion } from "@/content/types";
import { ccna } from "@/content/certifications/ccna";
import { aPlus } from "@/content/certifications/a-plus";
import { APLUS_OBJECTIVES, isAplusObjectiveId } from "@/content/objectives/a-plus";

export interface ObjectiveTagWarning {
  certId: string;
  topicId: string;
  questionId: string;
  message: string;
}

function isQuizQuestion(item: QuizQuestion): boolean {
  return Boolean(item.prompt && item.choices);
}

function verifyCertObjectiveTags(
  cert: Certification,
  options?: { requireKnownAplusId?: boolean }
): ObjectiveTagWarning[] {
  const warnings: ObjectiveTagWarning[] = [];

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const objectives = new Set(topic.objectives ?? []);
      for (const obj of objectives) {
        if (options?.requireKnownAplusId && !isAplusObjectiveId(obj)) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            questionId: "(topic.objectives)",
            message: `Unknown or malformed A+ objective "${obj}"`,
          });
        }
      }

      const questions = [
        ...topic.quiz.filter(isQuizQuestion),
        ...(topic.questionBank ?? []).filter(isQuizQuestion),
      ];

      for (const q of questions) {
        for (const choice of q.choices) {
          if (/^(?:ap|cf|ss)-[a-z0-9-]+|^ccna[- ][a-z0-9-]+/i.test(choice.text.trim())) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              questionId: q.id,
              message: `Learner-facing choice exposes internal curriculum ID: "${choice.text}"`,
            });
          }
        }
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
        if (
          options?.requireKnownAplusId &&
          !isAplusObjectiveId(q.objectiveId)
        ) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            questionId: q.id,
            message: `objectiveId ${q.objectiveId} not in A+ registry`,
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

export function verifyCcnaObjectiveTags(): ObjectiveTagWarning[] {
  return verifyCertObjectiveTags(ccna);
}

export function verifyAplusObjectiveTags(): ObjectiveTagWarning[] {
  const warnings = verifyCertObjectiveTags(aPlus, { requireKnownAplusId: true });
  const covered = new Map<string, { topicId: string; domainId: string }>();

  for (const domain of aPlus.domains) {
    for (const topic of domain.topics) {
      for (const objectiveId of topic.objectives ?? []) {
        if (!covered.has(objectiveId)) {
          covered.set(objectiveId, { topicId: topic.id, domainId: domain.id });
        }
      }
    }
  }

  for (const objective of APLUS_OBJECTIVES) {
    const location = covered.get(objective.id);
    if (!location) {
      warnings.push({
        certId: aPlus.id,
        topicId: "(registry)",
        questionId: objective.id,
        message: `Registered objective ${objective.id} has no teaching topic`,
      });
    } else if (location.domainId !== objective.domain) {
      warnings.push({
        certId: aPlus.id,
        topicId: location.topicId,
        questionId: objective.id,
        message: `Objective ${objective.id} is taught in ${location.domainId}, expected ${objective.domain}`,
      });
    }
  }

  return warnings;
}
