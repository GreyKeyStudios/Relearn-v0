import type { ProgressState } from "@/types/progress";

export interface QuestionStat {
  attempts: number;
  correct: number;
}

export function recordAnswerStats(
  existing: Record<string, QuestionStat>,
  questionId: string,
  correct: boolean
): Record<string, QuestionStat> {
  const prev = existing[questionId] ?? { attempts: 0, correct: 0 };
  return {
    ...existing,
    [questionId]: {
      attempts: prev.attempts + 1,
      correct: prev.correct + (correct ? 1 : 0),
    },
  };
}

export function recordAnswerBatch(
  existing: Record<string, QuestionStat>,
  answers: { questionId: string; correct: boolean }[]
): Record<string, QuestionStat> {
  let stats = existing;
  for (const a of answers) {
    stats = recordAnswerStats(stats, a.questionId, a.correct);
  }
  return stats;
}

/** 0 = easy (high correct rate), 100 = hard (low correct rate). Null if insufficient data. */
export function getEmpiricalDifficultyScore(
  stats: Record<string, QuestionStat>,
  questionId: string,
  minAttempts = 10
): number | null {
  const s = stats[questionId];
  if (!s || s.attempts < minAttempts) return null;
  const accuracy = s.correct / s.attempts;
  return Math.round((1 - accuracy) * 100);
}

export function getQuestionStats(state: ProgressState): Record<string, QuestionStat> {
  return state.questionStats ?? {};
}
