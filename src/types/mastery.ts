export type MasteryLevel = "new" | "learning" | "familiar" | "proficient" | "mastered";

export interface TopicMastery {
  topicKey: string;
  certId: string;
  score: number;
  level: MasteryLevel;
  objectiveScores: Record<string, number>;
  objectiveAttempts: Record<string, number>;
  lastPracticedAt: string;
  nextReviewAt: string;
  attemptCount: number;
  streak: number;
  reviewIntervalDays: number;
}

export interface StudyPlanPreferences {
  examDate: string | null;
  weeklyMinutes: number;
  activeCertIds: string[];
  /** When set, coach and plan prioritize items that fit this session length. */
  sessionMinutes: number | null;
}

export const DEFAULT_STUDY_PLAN: StudyPlanPreferences = {
  examDate: null,
  weeklyMinutes: 300,
  activeCertIds: [],
  sessionMinutes: null,
};
