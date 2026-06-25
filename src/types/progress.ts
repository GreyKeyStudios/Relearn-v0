import type { SimulatorAttempt } from "@/types/simulator";
import type { StudyPlanPreferences, TopicMastery } from "@/types/mastery";
import type { LearnerConfidenceScore } from "@/types/readiness";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import type { CaseStudyAttempt } from "@/types/case-study";
import type { QuestionStat } from "@/lib/question-stats";

export interface QuizAnswer {
  questionId: string;
  selectedChoiceId: string;
  correct: boolean;
}

export interface QuizAttempt {
  topicKey: string;
  certId: string;
  score: number;
  total: number;
  answers: QuizAnswer[];
  completedAt: string;
}

export interface FlashcardResult {
  cardId: string;
  gotIt: boolean;
}

export interface FlashcardSession {
  topicKey: string;
  certId: string;
  results: FlashcardResult[];
  completedAt: string;
}

export interface WeakTopic {
  topicKey: string;
  certId: string;
  reasons: string[];
  missedQuestionIds: string[];
  missedCardIds: string[];
  lastSeenAt: string;
  severity: 1 | 2 | 3;
}

export type ActivityType =
  | "lesson_complete"
  | "quiz"
  | "flashcards"
  | "simulator"
  | "assignment_complete";

export interface Activity {
  id: string;
  type: ActivityType;
  certId: string;
  topicKey: string;
  label: string;
  timestamp: string;
}

export interface QuizInProgress {
  topicKey: string;
  certId: string;
  currentIndex: number;
  answers: Record<string, string>;
  showResult: boolean;
  /** Question order for this session — used to validate resume after shuffle/cap changes */
  questionIds?: string[];
}

export interface FlashcardInProgress {
  topicKey: string;
  certId: string;
  deckOrder: string[];
  index: number;
  results: FlashcardResult[];
  flipped: boolean;
}

export interface ProgressState {
  completedLessons: Record<string, true>;
  completedAssignments: Record<string, true>;
  quizAttempts: QuizAttempt[];
  flashcardSessions: FlashcardSession[];
  simulatorAttempts: SimulatorAttempt[];
  weakTopics: Record<string, WeakTopic>;
  quizInProgress: QuizInProgress | null;
  flashcardInProgress: FlashcardInProgress | null;
  lastStudyDate: string | null;
  streak: number;
  recentActivity: Activity[];
  topicMastery: Record<string, TopicMastery>;
  studyPlan: StudyPlanPreferences;
  onboardingComplete: boolean;
  questionStats?: Record<string, QuestionStat>;
  caseStudyAttempts?: CaseStudyAttempt[];
  confidenceScores?: Record<string, LearnerConfidenceScore>;
}
