"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { computeStreakUpdate } from "@/lib/streak";
import {
  deriveWeaknessFromFlashcards,
  deriveWeaknessFromQuiz,
} from "@/lib/weakness";
import { deriveWeaknessFromSimulator } from "@/lib/simulator-weakness";
import {
  recomputeTopicMastery,
  sessionPassedFromQuiz,
} from "@/lib/mastery";
import { activityId, assignmentKey, parseMasteryTopicKey, topicKey } from "@/lib/ids";
import { getTopic } from "@/lib/content-selectors";
import { recordAnswerBatch } from "@/lib/question-stats";
import {
  clearAllLearnerStorage,
  migrateProgressState,
  PROGRESS_STORAGE_VERSION,
} from "@/lib/progress-migrate";
import type { Topic, QuizQuestion } from "@/content/types";
import type { QuizAnswer } from "@/types/progress";
import type { CaseStudyAttempt } from "@/types/case-study";
import type { StudyPlanPreferences } from "@/types/mastery";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import type {
  Activity,
  CcnaPathwayPreferenceState,
  FlashcardInProgress,
  FlashcardSession,
  ProgressState,
  QuizAttempt,
  QuizInProgress,
  WeakTopic,
} from "@/types/progress";
import type { SimulatorAttempt } from "@/types/simulator";

interface ProgressActions {
  completeLesson: (certId: string, topicId: string, topicName: string) => void;
  completeAssignment: (
    certId: string,
    assignmentId: string,
    assignmentTitle: string,
    topicId: string
  ) => void;
  recordQuizAttempt: (attempt: QuizAttempt, topicName: string) => void;
  recordAdaptiveReview: (
    attempt: QuizAttempt,
    topicScores: { certId: string; topicId: string; correct: number; total: number }[]
  ) => void;
  recordFlashcardSession: (session: FlashcardSession, topicName: string) => void;
  recordSimulatorAttempt: (attempt: SimulatorAttempt) => void;
  recordCaseStudyAttempt: (attempt: CaseStudyAttempt, caseStudyTitle: string) => void;
  updateStudyPlan: (prefs: Partial<StudyPlanPreferences>) => void;
  completeOnboarding: (prefs: StudyPlanPreferences) => void;
  setCcnaPathwayPreference: (prefs: Partial<CcnaPathwayPreferenceState>) => void;
  saveQuizProgress: (progress: QuizInProgress) => void;
  clearQuizProgress: () => void;
  saveFlashcardProgress: (progress: FlashcardInProgress) => void;
  clearFlashcardProgress: () => void;
  getWeakTopics: () => WeakTopic[];
  resetProgress: () => void;
}

type ProgressStore = ProgressState & ProgressActions;

const initialState: ProgressState = {
  completedLessons: {},
  completedAssignments: {},
  quizAttempts: [],
  flashcardSessions: [],
  simulatorAttempts: [],
  weakTopics: {},
  quizInProgress: null,
  flashcardInProgress: null,
  lastStudyDate: null,
  streak: 0,
  recentActivity: [],
  topicMastery: {},
  studyPlan: DEFAULT_STUDY_PLAN,
  onboardingComplete: false,
  questionStats: {},
  caseStudyAttempts: [],
  ccnaPathwayPreference: {
    intendedExamDate: null,
    preferredObjectivesVersion: null,
  },
};

function addActivity(
  activities: Activity[],
  entry: Omit<Activity, "id" | "timestamp">
): Activity[] {
  const newActivity: Activity = {
    ...entry,
    id: activityId(),
    timestamp: new Date().toISOString(),
  };
  return [newActivity, ...activities].slice(0, 30);
}

function touchStreak(state: ProgressState): Pick<ProgressState, "streak" | "lastStudyDate"> {
  const { streak, lastStudyDate } = computeStreakUpdate(state.lastStudyDate, state.streak);
  return { streak, lastStudyDate };
}

function questionsForAttempt(
  topic: Topic,
  answers: QuizAnswer[]
): QuizQuestion[] {
  const all = [...topic.quiz, ...(topic.questionBank ?? [])];
  const ids = new Set(answers.map((a) => a.questionId));
  return all.filter((q) => ids.has(q.id));
}

function applyMasteryUpdate(
  state: ProgressState,
  certId: string,
  topicId: string,
  sessionPassed?: boolean,
  quizContext?: { answers: QuizAnswer[]; questions: QuizQuestion[]; topic: Topic }
): ProgressState["topicMastery"] {
  const updated = recomputeTopicMastery(
    state,
    certId,
    topicId,
    sessionPassed,
    quizContext
  );
  return { ...state.topicMastery, [updated.topicKey]: updated };
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeLesson: (certId, topicId, topicName) => {
        const key = topicKey(certId, topicId);
        set((state) => ({
          ...state,
          ...touchStreak(state),
          completedLessons: { ...state.completedLessons, [key]: true },
          recentActivity: addActivity(state.recentActivity, {
            type: "lesson_complete",
            certId,
            topicKey: key,
            label: `Completed: ${topicName}`,
          }),
        }));
      },

      completeAssignment: (certId, assignmentId, assignmentTitle, topicId) => {
        const key = assignmentKey(certId, assignmentId);
        const tKey = topicKey(certId, topicId);
        set((state) => ({
          ...state,
          ...touchStreak(state),
          completedAssignments: { ...state.completedAssignments, [key]: true },
          recentActivity: addActivity(state.recentActivity, {
            type: "assignment_complete",
            certId,
            topicKey: tKey,
            label: `Assignment: ${assignmentTitle}`,
          }),
        }));
      },

      recordSimulatorAttempt: (attempt) => {
        set((state) => {
          const weakKey =
            attempt.topicKey ??
            (attempt.assignmentId
              ? assignmentKey(attempt.certId, attempt.assignmentId)
              : `${attempt.certId}:simulator:${attempt.simulatorId}`);
          const existing = state.weakTopics[weakKey];
          const weakness = deriveWeaknessFromSimulator(attempt, existing);
          const weakTopics = { ...state.weakTopics };
          if (weakness) {
            weakTopics[weakKey] = weakness;
          } else if (existing && attempt.total > 0) {
            const scorePercent = (attempt.score / attempt.total) * 100;
            if (scorePercent >= 90 && attempt.weakConcepts.length === 0) {
              delete weakTopics[weakKey];
            }
          }

          let topicMastery = state.topicMastery;
          if (attempt.topicKey) {
            const parsed = parseMasteryTopicKey(attempt.topicKey);
            if (parsed) {
              const passed =
                attempt.total > 0 &&
                attempt.score / attempt.total >= 0.8 &&
                attempt.weakConcepts.length === 0;
              topicMastery = applyMasteryUpdate(
                state,
                parsed.certId,
                parsed.topicId,
                passed
              );
            }
          }

          return {
            ...state,
            ...touchStreak(state),
            simulatorAttempts: [...state.simulatorAttempts, attempt],
            weakTopics,
            topicMastery,
            recentActivity: addActivity(state.recentActivity, {
              type: "simulator",
              certId: attempt.certId,
              topicKey: attempt.topicKey ?? weakKey,
              label: `Simulator: ${attempt.simulatorId} (${attempt.score}/${attempt.total})`,
            }),
          };
        });
      },

      recordQuizAttempt: (attempt, topicName) => {
        set((state) => {
          const existing = state.weakTopics[attempt.topicKey];
          const weakness = deriveWeaknessFromQuiz(attempt, existing);
          const weakTopics = { ...state.weakTopics };
          if (weakness) {
            weakTopics[attempt.topicKey] = weakness;
          } else if (existing) {
            const scorePercent = (attempt.score / attempt.total) * 100;
            if (scorePercent >= 90) {
              delete weakTopics[attempt.topicKey];
            }
          }

          const questionStats = recordAnswerBatch(
            state.questionStats ?? {},
            attempt.answers.map((a) => ({
              questionId: a.questionId,
              correct: a.correct,
            }))
          );

          let topicMastery = state.topicMastery;
          const parsed = parseMasteryTopicKey(attempt.topicKey);
          if (parsed) {
            const resolved = getTopic(parsed.certId, parsed.topicId);
            const quizContext = resolved
              ? {
                  answers: attempt.answers,
                  questions: questionsForAttempt(resolved.topic, attempt.answers),
                  topic: resolved.topic,
                }
              : undefined;
            topicMastery = applyMasteryUpdate(
              { ...state, questionStats },
              parsed.certId,
              parsed.topicId,
              sessionPassedFromQuiz(attempt),
              quizContext
            );
          }

          return {
            ...state,
            ...touchStreak(state),
            quizAttempts: [...state.quizAttempts, attempt],
            quizInProgress: null,
            weakTopics,
            topicMastery,
            questionStats,
            recentActivity: addActivity(state.recentActivity, {
              type: "quiz",
              certId: attempt.certId,
              topicKey: attempt.topicKey,
              label: `Quiz: ${topicName} (${attempt.score}/${attempt.total})`,
            }),
          };
        });
      },

      recordAdaptiveReview: (attempt, topicScores) => {
        set((state) => {
          let topicMastery = state.topicMastery;
          for (const ts of topicScores) {
            const passed = ts.total > 0 && ts.correct / ts.total >= 0.8;
            topicMastery = applyMasteryUpdate(
              { ...state, topicMastery },
              ts.certId,
              ts.topicId,
              passed
            );
          }
          return {
            ...state,
            ...touchStreak(state),
            quizAttempts: [...state.quizAttempts, attempt],
            quizInProgress: null,
            topicMastery,
            recentActivity: addActivity(state.recentActivity, {
              type: "quiz",
              certId: attempt.certId,
              topicKey: attempt.topicKey,
              label: `Adaptive review (${attempt.score}/${attempt.total})`,
            }),
          };
        });
      },

      recordFlashcardSession: (session, topicName) => {
        set((state) => {
          const existing = state.weakTopics[session.topicKey];
          const weakness = deriveWeaknessFromFlashcards(session, existing);
          const weakTopics = { ...state.weakTopics };
          if (weakness) {
            weakTopics[session.topicKey] = weakness;
          } else if (existing && session.results.every((r) => r.gotIt)) {
            if (existing.missedQuestionIds.length === 0) {
              delete weakTopics[session.topicKey];
            }
          }

          const parsed = parseMasteryTopicKey(session.topicKey);
          let topicMastery = state.topicMastery;
          if (parsed) {
            const got = session.results.filter((r) => r.gotIt).length;
            const passed =
              session.results.length > 0 && got / session.results.length >= 0.8;
            topicMastery = applyMasteryUpdate(
              state,
              parsed.certId,
              parsed.topicId,
              passed
            );
          }

          return {
            ...state,
            ...touchStreak(state),
            flashcardSessions: [...state.flashcardSessions, session],
            flashcardInProgress: null,
            weakTopics,
            topicMastery,
            recentActivity: addActivity(state.recentActivity, {
              type: "flashcards",
              certId: session.certId,
              topicKey: session.topicKey,
              label: `Flashcards: ${topicName}`,
            }),
          };
        });
      },

      updateStudyPlan: (prefs) => {
        set((state) => ({
          studyPlan: { ...state.studyPlan, ...prefs },
        }));
      },

      completeOnboarding: (prefs) => {
        set({
          studyPlan: { ...DEFAULT_STUDY_PLAN, ...prefs },
          onboardingComplete: true,
        });
      },

      setCcnaPathwayPreference: (prefs) => {
        set((state) => ({
          ...state,
          ccnaPathwayPreference: {
            intendedExamDate:
              prefs.intendedExamDate !== undefined
                ? prefs.intendedExamDate
                : (state.ccnaPathwayPreference?.intendedExamDate ?? null),
            preferredObjectivesVersion:
              prefs.preferredObjectivesVersion !== undefined
                ? prefs.preferredObjectivesVersion
                : (state.ccnaPathwayPreference?.preferredObjectivesVersion ??
                  null),
          },
        }));
      },

      recordCaseStudyAttempt: (attempt, caseStudyTitle) => {
        set((state) => {
          const topicKeyStr = topicKey(attempt.certId, attempt.topicId);
          const weakTopics = { ...state.weakTopics };
          if (attempt.weakConcepts.length > 0) {
            const existing = weakTopics[topicKeyStr];
            weakTopics[topicKeyStr] = {
              topicKey: topicKeyStr,
              certId: attempt.certId,
              reasons: [
                ...new Set([
                  ...(existing?.reasons ?? []),
                  ...attempt.weakConcepts.map((c) => `Case study: ${c}`),
                ]),
              ],
              missedQuestionIds: existing?.missedQuestionIds ?? [],
              missedCardIds: existing?.missedCardIds ?? [],
              lastSeenAt: new Date().toISOString(),
              severity: 2,
            };
          }

          return {
            ...state,
            ...touchStreak(state),
            caseStudyAttempts: [...(state.caseStudyAttempts ?? []), attempt],
            weakTopics,
            recentActivity: addActivity(state.recentActivity, {
              type: "assignment_complete",
              certId: attempt.certId,
              topicKey: topicKeyStr,
              label: `Case study: ${caseStudyTitle} (${attempt.score}/${attempt.maxScore})`,
            }),
          };
        });
      },

      saveQuizProgress: (progress) => {
        set({ quizInProgress: progress });
      },

      clearQuizProgress: () => {
        set({ quizInProgress: null });
      },

      saveFlashcardProgress: (progress) => {
        set({ flashcardInProgress: progress });
      },

      clearFlashcardProgress: () => {
        set({ flashcardInProgress: null });
      },

      getWeakTopics: () => {
        return Object.values(get().weakTopics).sort((a, b) => b.severity - a.severity);
      },

      resetProgress: () => {
        clearAllLearnerStorage();
        set(initialState);
      },
    }),
    {
      name: "bridge-study-progress-v2",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return window.localStorage;
      }),
      partialize: (state) => ({
        completedLessons: state.completedLessons,
        completedAssignments: state.completedAssignments,
        quizAttempts: state.quizAttempts,
        flashcardSessions: state.flashcardSessions,
        simulatorAttempts: state.simulatorAttempts,
        weakTopics: state.weakTopics,
        quizInProgress: state.quizInProgress,
        flashcardInProgress: state.flashcardInProgress,
        lastStudyDate: state.lastStudyDate,
        streak: state.streak,
        recentActivity: state.recentActivity,
        topicMastery: state.topicMastery,
        studyPlan: state.studyPlan,
        onboardingComplete: state.onboardingComplete,
        questionStats: state.questionStats,
        caseStudyAttempts: state.caseStudyAttempts,
        ccnaPathwayPreference: state.ccnaPathwayPreference,
      }),
      skipHydration: true,
      version: PROGRESS_STORAGE_VERSION,
      migrate: migrateProgressState,
    }
  )
);
