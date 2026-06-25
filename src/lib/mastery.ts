import type { Certification, QuizQuestion, Topic } from "@/content/types";
import type { MasteryLevel, TopicMastery } from "@/types/mastery";
import type {
  FlashcardSession,
  ProgressState,
  QuizAnswer,
  QuizAttempt,
} from "@/types/progress";
import type { SimulatorAttempt } from "@/types/simulator";
import {
  computeObjectiveScoresFromAnswers,
  resolveQuestionObjectiveId,
} from "@/lib/objective-mastery";
import { getEmpiricalDifficultyScore } from "@/lib/question-stats";
import { topicBankKey, topicKey } from "@/lib/ids";

const SRS_INTERVALS = [1, 3, 7, 14, 30];

export function scoreToLevel(score: number): MasteryLevel {
  if (score >= 90) return "mastered";
  if (score >= 70) return "proficient";
  if (score >= 50) return "familiar";
  if (score >= 20) return "learning";
  return "new";
}

function todayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(isoDate: string, days: number): string {
  const d = new Date(isoDate + "T12:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function avgPercent(scores: number[]): number | null {
  if (scores.length === 0) return null;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

function quizAccuracyForTopic(attempts: QuizAttempt[], key: string): number | null {
  const bankKey = topicBankKey(key.split(":")[0], key.split(":").slice(1).join(":"));
  const topicAttempts = attempts.filter(
    (a) => a.topicKey === key || a.topicKey === bankKey
  );
  if (topicAttempts.length === 0) return null;
  const recent = topicAttempts.slice(-3);
  return avgPercent(
    recent.map((a) => (a.total > 0 ? Math.round((a.score / a.total) * 100) : 0))
  );
}

function simulatorScoreForTopic(
  attempts: SimulatorAttempt[],
  key: string
): number | null {
  const relevant = attempts
    .filter((a) => a.topicKey === key)
    .slice(-3);
  if (relevant.length === 0) return null;
  const scores = relevant.map((a) => {
    if (a.total <= 0) return 0;
    let pct = Math.round((a.score / a.total) * 100);
    pct -= a.weakConcepts.length * 5;
    return Math.max(0, pct);
  });
  return avgPercent(scores);
}

function flashcardScoreForTopic(
  sessions: FlashcardSession[],
  key: string
): number | null {
  const recent = sessions.filter((s) => s.topicKey === key).slice(-2);
  if (recent.length === 0) return null;
  const scores = recent.map((s) => {
    if (s.results.length === 0) return 0;
    const got = s.results.filter((r) => r.gotIt).length;
    return Math.round((got / s.results.length) * 100);
  });
  return avgPercent(scores);
}

export function computeTopicScore(
  state: ProgressState,
  certId: string,
  topicId: string
): number {
  const key = topicKey(certId, topicId);
  const quiz = quizAccuracyForTopic(state.quizAttempts, key);
  const sim = simulatorScoreForTopic(state.simulatorAttempts, key);
  const flash = flashcardScoreForTopic(state.flashcardSessions, key);

  const weights: { value: number | null; weight: number }[] = [
    { value: quiz, weight: 0.4 },
    { value: sim, weight: 0.2 },
    { value: flash, weight: 0.15 },
  ];

  let totalWeight = 0;
  let weighted = 0;
  for (const { value, weight } of weights) {
    if (value !== null) {
      weighted += value * weight;
      totalWeight += weight;
    }
  }

  if (totalWeight === 0) return 0;
  return Math.round(weighted / totalWeight);
}

export function recomputeTopicMastery(
  state: ProgressState,
  certId: string,
  topicId: string,
  sessionPassed?: boolean,
  quizContext?: {
    answers: QuizAnswer[];
    questions: QuizQuestion[];
    topic: Topic;
  }
): TopicMastery {
  const key = topicKey(certId, topicId);
  const existing = state.topicMastery[key];
  const score = computeTopicScore(state, certId, topicId);
  const level = scoreToLevel(score);
  const today = todayDateString();

  let reviewIntervalDays = existing?.reviewIntervalDays ?? 1;
  let streak = existing?.streak ?? 0;

  if (sessionPassed !== undefined) {
    if (sessionPassed) {
      streak += 1;
      const idx = SRS_INTERVALS.indexOf(reviewIntervalDays);
      reviewIntervalDays =
        idx < SRS_INTERVALS.length - 1 ? SRS_INTERVALS[idx + 1] : 30;
    } else {
      streak = 0;
      reviewIntervalDays = 1;
    }
  }

  let objectiveScores = existing?.objectiveScores ?? {};
  let objectiveAttempts = existing?.objectiveAttempts ?? {};

  if (quizContext) {
    objectiveScores = computeObjectiveScoresFromAnswers(
      objectiveScores,
      quizContext.answers,
      quizContext.questions,
      quizContext.topic
    );
    for (const answer of quizContext.answers) {
      const question = quizContext.questions.find((q) => q.id === answer.questionId);
      if (!question) continue;
      const objId = resolveQuestionObjectiveId(question, quizContext.topic);
      if (!objId) continue;
      objectiveAttempts = {
        ...objectiveAttempts,
        [objId]: (objectiveAttempts[objId] ?? 0) + 1,
      };
    }
  }

  return {
    topicKey: key,
    certId,
    score,
    level,
    objectiveScores,
    objectiveAttempts,
    lastPracticedAt: today,
    nextReviewAt: addDays(today, reviewIntervalDays),
    attemptCount: (existing?.attemptCount ?? 0) + (sessionPassed !== undefined ? 1 : 0),
    streak,
    reviewIntervalDays,
  };
}

export function isReviewDue(mastery: TopicMastery, date = todayDateString()): boolean {
  return mastery.nextReviewAt <= date;
}

export function getTopicMastery(
  state: ProgressState,
  certId: string,
  topicId: string
): TopicMastery {
  const key = topicKey(certId, topicId);
  return (
    state.topicMastery[key] ??
    recomputeTopicMastery(state, certId, topicId)
  );
}

export function getCertMasteryPercent(cert: Certification, state: ProgressState): number {
  const topics = cert.domains.flatMap((d) => d.topics);
  if (topics.length === 0) return 0;
  const proficientPlus = topics.filter((t) => {
    const m = getTopicMastery(state, cert.id, t.id);
    return m.level === "proficient" || m.level === "mastered";
  }).length;
  return Math.round((proficientPlus / topics.length) * 100);
}

export function getDomainAverageScore(
  cert: Certification,
  domainId: string,
  state: ProgressState
): number {
  const domain = cert.domains.find((d) => d.id === domainId);
  if (!domain || domain.topics.length === 0) return 0;
  const total = domain.topics.reduce((sum, t) => {
    return sum + getTopicMastery(state, cert.id, t.id).score;
  }, 0);
  return Math.round(total / domain.topics.length);
}

export function getDomainMasteryPercent(
  cert: Certification,
  domainId: string,
  state: ProgressState
): number {
  const domain = cert.domains.find((d) => d.id === domainId);
  if (!domain || domain.topics.length === 0) return 0;
  const proficientPlus = domain.topics.filter((t) => {
    const m = getTopicMastery(state, cert.id, t.id);
    return m.level === "proficient" || m.level === "mastered";
  }).length;
  return Math.round((proficientPlus / domain.topics.length) * 100);
}

export function sessionPassedFromQuiz(attempt: QuizAttempt): boolean {
  if (attempt.total <= 0) return false;
  return Math.round((attempt.score / attempt.total) * 100) >= 80;
}

export function selectBankQuestionsForMastery(
  topic: Topic,
  level: MasteryLevel,
  count: number,
  questionStats: Record<string, { attempts: number; correct: number }> = {}
): QuizQuestion[] {
  const bank = topic.questionBank ?? [];
  if (bank.length === 0) return [];

  const hasTags = bank.some((q) => q.difficulty != null);

  let pool: QuizQuestion[];
  if (hasTags) {
    const easy = bank.filter((q) => q.difficulty === "easy");
    const medium = bank.filter((q) => q.difficulty === "medium");
    const hard = bank.filter((q) => q.difficulty === "hard");
    if (level === "new" || level === "learning") {
      pool = easy.length > 0 ? easy : bank.slice(0, Math.ceil(bank.length * 0.4));
    } else if (level === "familiar") {
      pool = medium.length > 0 ? medium : bank;
    } else {
      pool = hard.length > 0 ? hard : bank.slice(Math.floor(bank.length * 0.6));
    }
  } else {
    const easyEnd = Math.max(1, Math.floor(bank.length * 0.4));
    const hardStart = Math.floor(bank.length * 0.6);
    if (level === "new" || level === "learning") {
      pool = bank.slice(0, easyEnd);
    } else if (level === "familiar") {
      pool = bank.slice(easyEnd, hardStart);
      if (pool.length === 0) pool = bank;
    } else {
      pool = bank.slice(hardStart);
      if (pool.length === 0) pool = bank;
    }
  }

  const shuffled = [...pool].sort((a, b) => {
    const da = getEmpiricalDifficultyScore(questionStats, a.id);
    const db = getEmpiricalDifficultyScore(questionStats, b.id);
    if (da !== null && db !== null) {
      if (level === "new" || level === "learning") return da - db;
      if (level === "proficient" || level === "mastered") return db - da;
    }
    return Math.random() - 0.5;
  });
  return shuffled.slice(0, count);
}

export function isDomainReviewAttempt(topicKeyStr: string): boolean {
  return topicKeyStr.includes(":domain-review:");
}

export function isBankAttempt(topicKeyStr: string): boolean {
  return topicKeyStr.includes(":question-bank:");
}
