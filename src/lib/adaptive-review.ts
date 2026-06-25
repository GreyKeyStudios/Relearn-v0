import type { Certification, QuizQuestion } from "@/content/types";
import type { TopicMastery } from "@/types/mastery";
import type { ProgressState } from "@/types/progress";
import { getAllCertifications } from "@/lib/content-selectors";
import { topicKey } from "@/lib/ids";
import {
  getTopicMastery,
  isReviewDue,
  selectBankQuestionsForMastery,
} from "@/lib/mastery";

export interface ReviewSessionQuestion extends QuizQuestion {
  sourceTopicKey: string;
  sourceTopicName: string;
}

export interface AdaptiveReviewSession {
  questions: ReviewSessionQuestion[];
  topicKeys: string[];
  dueCount: number;
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getDueTopicMasteries(
  state: ProgressState,
  certs: Certification[] = getAllCertifications()
): TopicMastery[] {
  const today = todayString();
  const due: TopicMastery[] = [];

  for (const cert of certs) {
    for (const domain of cert.domains) {
      for (const topic of domain.topics) {
        const mastery = getTopicMastery(state, cert.id, topic.id);
        if (
          mastery.attemptCount > 0 &&
          isReviewDue(mastery, today)
        ) {
          due.push(mastery);
        }
      }
    }
  }

  return due.sort((a, b) => {
    const overdueA = today.localeCompare(a.nextReviewAt);
    const overdueB = today.localeCompare(b.nextReviewAt);
    if (overdueA !== overdueB) return overdueB - overdueA;
    return a.score - b.score;
  });
}

export function buildAdaptiveReviewSession(
  state: ProgressState,
  maxQuestions = 20
): AdaptiveReviewSession {
  const certs = getAllCertifications();
  const due = getDueTopicMasteries(state, certs);
  const questions: ReviewSessionQuestion[] = [];
  const topicKeys: string[] = [];

  for (const mastery of due) {
    if (questions.length >= maxQuestions) break;

    const cert = certs.find((c) => c.id === mastery.certId);
    if (!cert) continue;

    const topic = cert.domains
      .flatMap((d) => d.topics)
      .find((t) => topicKey(cert.id, t.id) === mastery.topicKey);
    if (!topic) continue;

    const perTopic = Math.min(3, maxQuestions - questions.length);
    const picked = selectBankQuestionsForMastery(
      topic,
      mastery.level,
      perTopic,
      state.questionStats ?? {}
    );
    if (picked.length === 0) continue;

    topicKeys.push(mastery.topicKey);
    for (const q of picked) {
      questions.push({
        ...q,
        sourceTopicKey: mastery.topicKey,
        sourceTopicName: topic.name,
      });
    }
  }

  return {
    questions: questions.slice(0, maxQuestions),
    topicKeys: [...new Set(topicKeys)],
    dueCount: due.length,
  };
}

export function adaptiveReviewProgressKey(): string {
  return `adaptive-review:${todayString()}`;
}
