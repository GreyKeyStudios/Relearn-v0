import type { TopicMastery } from "@/types/mastery";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import type { ProgressState } from "@/types/progress";

export const PROGRESS_STORAGE_V1_KEY = "bridge-study-progress-v1";
export const PROGRESS_STORAGE_V2_KEY = "bridge-study-progress-v2";

const SESSION_STORAGE_PREFIXES = ["lesson-step:", "bridge-quiz-retry:"] as const;

/** Wipe all persisted learner data (progress, lesson steps, quiz retries). */
export function clearAllLearnerStorage(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(PROGRESS_STORAGE_V1_KEY);
  localStorage.removeItem(PROGRESS_STORAGE_V2_KEY);

  const keysToRemove: string[] = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (!key) continue;
    if (SESSION_STORAGE_PREFIXES.some((prefix) => key.startsWith(prefix))) {
      keysToRemove.push(key);
    }
  }
  for (const key of keysToRemove) {
    sessionStorage.removeItem(key);
  }
}

/** Bump when persisted shape changes; must match persist `version` in progress-store */
export const PROGRESS_STORAGE_VERSION = 3;

function normalizeTopicMastery(
  topicMastery: Record<string, TopicMastery>
): Record<string, TopicMastery> {
  const normalized: Record<string, TopicMastery> = {};
  for (const [key, mastery] of Object.entries(topicMastery)) {
    normalized[key] = {
      ...mastery,
      objectiveScores: mastery.objectiveScores ?? {},
      objectiveAttempts: mastery.objectiveAttempts ?? {},
    };
  }
  return normalized;
}

/** Zustand persist migrate — called when stored version !== PROGRESS_STORAGE_VERSION */
export function migrateProgressState(
  persistedState: unknown,
  _fromVersion: number
): Partial<ProgressState> {
  const state = (persistedState ?? {}) as Partial<ProgressState>;

  const hasPriorActivity =
    Object.keys(state.completedLessons ?? {}).length > 0 ||
    (state.quizAttempts ?? []).length > 0 ||
    (state.recentActivity ?? []).length > 0;

  return {
    completedLessons: state.completedLessons ?? {},
    completedAssignments: state.completedAssignments ?? {},
    quizAttempts: state.quizAttempts ?? [],
    flashcardSessions: state.flashcardSessions ?? [],
    simulatorAttempts: state.simulatorAttempts ?? [],
    weakTopics: state.weakTopics ?? {},
    quizInProgress: state.quizInProgress ?? null,
    flashcardInProgress: state.flashcardInProgress ?? null,
    lastStudyDate: state.lastStudyDate ?? null,
    streak: state.streak ?? 0,
    recentActivity: state.recentActivity ?? [],
    topicMastery: normalizeTopicMastery(state.topicMastery ?? {}),
    studyPlan: {
      ...DEFAULT_STUDY_PLAN,
      ...state.studyPlan,
      sessionMinutes: state.studyPlan?.sessionMinutes ?? null,
    },
    onboardingComplete: state.onboardingComplete ?? hasPriorActivity,
    questionStats: state.questionStats ?? {},
    caseStudyAttempts: state.caseStudyAttempts ?? [],
    confidenceScores: state.confidenceScores,
  };
}

/** One-time copy from legacy v1 localStorage key into v2 key (no version field). */
export function migrateV1ToV2IfNeeded(): void {
  if (typeof window === "undefined") return;

  const v2Raw = localStorage.getItem(PROGRESS_STORAGE_V2_KEY);
  if (v2Raw) return;

  const v1Raw = localStorage.getItem(PROGRESS_STORAGE_V1_KEY);
  if (!v1Raw) return;

  try {
    const parsed = JSON.parse(v1Raw) as
      | { state?: Partial<ProgressState> }
      | Partial<ProgressState>;
    const v1State: Partial<ProgressState> =
      "state" in parsed && parsed.state ? parsed.state : (parsed as Partial<ProgressState>);
    const migrated = migrateProgressState(v1State, 0);
    localStorage.setItem(
      PROGRESS_STORAGE_V2_KEY,
      JSON.stringify({ state: migrated, version: PROGRESS_STORAGE_VERSION })
    );
  } catch {
    // ignore corrupt v1 data
  }
}
