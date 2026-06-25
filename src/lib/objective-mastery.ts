import type { Certification, QuizQuestion, Topic } from "@/content/types";
import type { ProgressState, QuizAnswer } from "@/types/progress";
import { getCcnaObjective, getCcnaObjectiveShortLabel } from "@/content/objectives/ccna";
import { certSupportsObjectiveCoaching } from "@/lib/objective-support";
import { topicKey } from "@/lib/ids";

function activeCerts(certs: Certification[], state: ProgressState): Certification[] {
  const ids = state.studyPlan.activeCertIds;
  const withContent = certs.filter((c) => c.domains.some((d) => d.topics.length > 0));
  if (ids.length === 0) return withContent;
  return withContent.filter((c) => ids.includes(c.id));
}

const OBJECTIVE_WINDOW = 12;
const WEAK_THRESHOLD = 70;
const MIN_ATTEMPTS = 3;

export interface ObjectiveMasteryEntry {
  objectiveId: string;
  score: number;
  attemptCount: number;
  label: string;
  shortLabel: string;
  topicId: string;
  topicName: string;
}

export interface WeakObjective {
  objectiveId: string;
  score: number;
  label: string;
  shortLabel: string;
  certId: string;
  topicId: string;
  topicName: string;
  href: string;
}

export function resolveQuestionObjectiveId(
  question: QuizQuestion,
  topic: Topic
): string | null {
  if (question.objectiveId) return question.objectiveId;
  if (topic.objectives?.length === 1) return topic.objectives[0];
  return null;
}

export function computeObjectiveScoresFromAnswers(
  existing: Record<string, number>,
  answers: QuizAnswer[],
  questions: QuizQuestion[],
  topic: Topic
): Record<string, number> {
  const questionMap = new Map(questions.map((q) => [q.id, q]));
  const buckets: Record<string, boolean[]> = {};

  for (const answer of answers) {
    const question = questionMap.get(answer.questionId);
    if (!question) continue;
    const objectiveId = resolveQuestionObjectiveId(question, topic);
    if (!objectiveId) continue;
    if (!buckets[objectiveId]) buckets[objectiveId] = [];
    buckets[objectiveId].push(answer.correct);
  }

  const updated = { ...existing };
  for (const [objectiveId, results] of Object.entries(buckets)) {
    const prior = updated[objectiveId];
    const merged = results;
    if (merged.length === 0) continue;
    const pct = Math.round(
      (merged.filter(Boolean).length / merged.length) * 100
    );
    updated[objectiveId] =
      prior === undefined ? pct : Math.round((prior + pct) / 2);
  }
  return updated;
}

export function recomputeObjectiveScoresFromHistory(
  certId: string,
  topic: Topic,
  quizAnswers: { answers: QuizAnswer[]; questions: QuizQuestion[] }[]
): Record<string, number> {
  let scores: Record<string, number> = {};
  const recent = quizAnswers.slice(-OBJECTIVE_WINDOW);
  for (const entry of recent) {
    scores = computeObjectiveScoresFromAnswers(
      scores,
      entry.answers,
      entry.questions,
      topic
    );
  }
  return scores;
}

export function countObjectiveAttempts(
  topic: Topic,
  answers: QuizAnswer[],
  questions: QuizQuestion[]
): Record<string, number> {
  const questionMap = new Map(questions.map((q) => [q.id, q]));
  const counts: Record<string, number> = {};
  for (const answer of answers) {
    const question = questionMap.get(answer.questionId);
    if (!question) continue;
    const objectiveId = resolveQuestionObjectiveId(question, topic);
    if (!objectiveId) continue;
    counts[objectiveId] = (counts[objectiveId] ?? 0) + 1;
  }
  return counts;
}

export function getObjectiveMasteryForTopic(
  certId: string,
  topic: Topic,
  objectiveScores: Record<string, number>,
  attemptCounts: Record<string, number>
): ObjectiveMasteryEntry[] {
  const objectives = topic.objectives ?? [];
  return objectives.map((objectiveId) => {
    const meta = certId === "ccna" ? getCcnaObjective(objectiveId) : undefined;
    const shortLabel =
      certId === "ccna"
        ? getCcnaObjectiveShortLabel(objectiveId)
        : objectiveId.replace(/^CCNA-/, "");
    return {
      objectiveId,
      score: objectiveScores[objectiveId] ?? 0,
      attemptCount: attemptCounts[objectiveId] ?? 0,
      label: meta?.text ?? objectiveId,
      shortLabel,
      topicId: topic.id,
      topicName: topic.name,
    };
  });
}

export function getWeakObjectivesFromState(
  cert: Certification,
  state: ProgressState,
  limit = 5
): WeakObjective[] {
  if (!certSupportsObjectiveCoaching(cert.id)) return [];

  const weak: WeakObjective[] = [];

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const key = topicKey(cert.id, topic.id);
      const mastery = state.topicMastery[key];
      if (!mastery) continue;

      for (const objectiveId of topic.objectives ?? []) {
        const score = mastery.objectiveScores[objectiveId];
        const count = mastery.objectiveAttempts?.[objectiveId] ?? 0;
        if (score === undefined || count < MIN_ATTEMPTS) continue;
        if (score >= WEAK_THRESHOLD) continue;
        const shortLabel =
          cert.id === "ccna"
            ? getCcnaObjectiveShortLabel(objectiveId)
            : objectiveId;
        const meta = cert.id === "ccna" ? getCcnaObjective(objectiveId) : undefined;
        weak.push({
          objectiveId,
          score,
          label: meta?.text ?? objectiveId,
          shortLabel,
          certId: cert.id,
          topicId: topic.id,
          topicName: topic.name,
          href: `/cert/${cert.id}/quiz/${topic.id}?objective=${encodeURIComponent(objectiveId)}`,
        });
      }
    }
  }

  return weak.sort((a, b) => a.score - b.score).slice(0, limit);
}

/** Weak objectives across active study-plan certs (or all certs if none selected). */
export function getWeakObjectivesForActiveCerts(
  state: ProgressState,
  certs: Certification[],
  limit = 5
): WeakObjective[] {
  const scoped = activeCerts(certs, state);
  const all: WeakObjective[] = [];
  for (const cert of scoped) {
    all.push(...getWeakObjectivesFromState(cert, state, limit));
  }
  return all.sort((a, b) => a.score - b.score).slice(0, limit);
}

export function filterQuestionsByObjective(
  questions: QuizQuestion[],
  objectiveId: string
): QuizQuestion[] {
  return questions.filter((q) => q.objectiveId === objectiveId);
}
