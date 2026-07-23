import type { Page } from "@playwright/test";
import { getDemoPersistedState } from "../../src/lib/demo/demo-profiles";
import {
  PROGRESS_STORAGE_VERSION,
  PROGRESS_STORAGE_V2_KEY,
} from "../../src/lib/progress-migrate";
import { listCcnaTopics } from "./ccna-catalog";
import { DEMO_ACTIVE_PROFILE_KEY } from "../../src/lib/demo/types";

/** Seed: all CCNA lessons marked complete so the post-lesson hub (practice path) is visible. */
export function serializeCcnaCurriculumAuditSeed(): string {
  const state = getDemoPersistedState("exam-ready");
  const today = new Date().toISOString().slice(0, 10);
  const now = new Date().toISOString();

  for (const topic of listCcnaTopics()) {
    const key = `ccna:${topic.topicId}`;
    state.completedLessons[key] = true;
    if (!state.topicMastery[key]) {
      state.topicMastery[key] = {
        topicKey: key,
        certId: "ccna",
        score: 80,
        level: "proficient",
        objectiveScores: {},
        objectiveAttempts: {},
        lastPracticedAt: now,
        nextReviewAt: today,
        attemptCount: 3,
        streak: 1,
        reviewIntervalDays: 7,
      };
    }
  }

  state.onboardingComplete = true;
  state.studyPlan = {
    ...state.studyPlan,
    activeCertIds: ["ccna"],
  };

  return JSON.stringify({ state, version: PROGRESS_STORAGE_VERSION });
}

/**
 * Fresh CCNA learner past onboarding: no completed lessons.
 * Used to walk ExperiencePlayer / steppers as a first-time learner.
 */
export function serializeCcnaFreshLearnerSeed(): string {
  const state = getDemoPersistedState("new-learner");
  state.onboardingComplete = true;
  state.studyPlan = {
    ...state.studyPlan,
    activeCertIds: ["ccna"],
    weeklyMinutes: 300,
    sessionMinutes: 25,
  };
  return JSON.stringify({ state, version: PROGRESS_STORAGE_VERSION });
}

async function applySeed(
  page: Page,
  payload: string,
  profileLabel: string
) {
  await page.addInitScript(
    ({ key, value, profileKey, label }) => {
      window.localStorage.setItem(key, value);
      window.sessionStorage.setItem(profileKey, label);
      // Clear any leftover lesson stepper positions
      const toRemove: string[] = [];
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const k = window.sessionStorage.key(i);
        if (k?.startsWith("lesson-step:")) toRemove.push(k);
      }
      for (const k of toRemove) window.sessionStorage.removeItem(k);
    },
    {
      key: PROGRESS_STORAGE_V2_KEY,
      value: payload,
      profileKey: DEMO_ACTIVE_PROFILE_KEY,
      label: profileLabel,
    }
  );
}

export async function seedCcnaCurriculumAudit(page: Page) {
  await applySeed(page, serializeCcnaCurriculumAuditSeed(), "ccna-curriculum-audit");
}

export async function seedCcnaFreshLearner(page: Page) {
  await applySeed(page, serializeCcnaFreshLearnerSeed(), "ccna-fresh-learner");
}
