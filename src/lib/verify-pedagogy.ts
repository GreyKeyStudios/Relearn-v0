import type { Certification, Topic } from "@/content/types";
import { CERTIFICATIONS } from "@/content/registry";
import { getOrderedPracticeAssignments } from "@/lib/curriculum";

export interface PedagogyWarning {
  certId: string;
  topicId: string;
  message: string;
}

function topicIdSet(cert: Certification): Set<string> {
  const ids = new Set<string>();
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      ids.add(topic.id);
    }
  }
  return ids;
}

/** Warnings for Bridge Learning Standard — CCNA strict by default when flag set */
export function verifyPedagogyWarnings(certFilter?: string): PedagogyWarning[] {
  const warnings: PedagogyWarning[] = [];

  for (const cert of CERTIFICATIONS) {
    if (certFilter && cert.id !== certFilter) continue;

    const validTopicIds = topicIdSet(cert);
    const quizIdsByTopic = new Map<string, Set<string>>();

    for (const domain of cert.domains) {
      for (const topic of domain.topics) {
        const quizIds = new Set(topic.quiz.map((q) => q.id));
        quizIdsByTopic.set(topic.id, quizIds);

        if (topic.quiz.length === 0 && (topic.questionBank?.length ?? 0) > 0) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            message: "Question bank exists but quiz[] is empty (BLS-9)",
          });
        }

        const firstQuiz = topic.quiz[0];
        if (firstQuiz?.difficulty === "hard") {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            message: `First quiz question (${firstQuiz.id}) is hard — should ramp easy first (BLS-9)`,
          });
        }

        for (const prereq of topic.prerequisites ?? []) {
          if (!validTopicIds.has(prereq)) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              message: `Invalid prerequisite topic id: ${prereq}`,
            });
          }
        }

        for (const checkpointId of topic.lessonCheckpoints ?? []) {
          if (!checkpointId) continue;
          if (!quizIds.has(checkpointId)) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              message: `lessonCheckpoints id not in quiz[]: ${checkpointId}`,
            });
          }
        }

        for (const step of topic.lesson.steps ?? []) {
          const id = step.checkpointQuestionId;
          if (!id) continue;
          if (!quizIds.has(id)) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              message: `lesson step ${step.id} checkpoint not in quiz[]: ${id}`,
            });
          }
        }

        for (const screen of topic.lesson.experience?.screens ?? []) {
          const id = screen.checkpointQuestionId;
          if (!id) continue;
          if (!quizIds.has(id)) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              message: `experience screen ${screen.id} checkpoint not in quiz[]: ${id}`,
            });
          }
        }

        const practice = getOrderedPracticeAssignments(topic.assignments);
        const orders = practice.map((a) => a.order);
        if (orders.length > 1) {
          const sorted = [...orders].sort((a, b) => a - b);
          for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] - sorted[i - 1] > 1) {
              warnings.push({
                certId: cert.id,
                topicId: topic.id,
                message: `Practice assignment order gap between ${sorted[i - 1]} and ${sorted[i]}`,
              });
              break;
            }
          }
        }
      }
    }
  }

  return warnings;
}

export function verifyCcnaPedagogyWarnings(): PedagogyWarning[] {
  return verifyPedagogyWarnings("ccna");
}
