import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { serializeDemoSeed } from "../../src/lib/demo/demo-profiles";
import {
  DEMO_ACTIVE_PROFILE_KEY,
  DEMO_PROFILE_META,
  type DemoProfileId,
} from "../../src/lib/demo/types";
import { PROGRESS_STORAGE_V2_KEY } from "../../src/lib/progress-migrate";

export { DEMO_PROFILE_META };
export type { DemoProfileId };

/**
 * Inject a demo profile before the app hydrates.
 * Uses addInitScript so localStorage is set on first document load for this origin.
 */
export async function seedProfile(page: Page, profileId: DemoProfileId) {
  const payload = serializeDemoSeed(profileId);
  await page.addInitScript(
    ({ key, value, profileKey, id }) => {
      window.localStorage.setItem(key, value);
      window.sessionStorage.setItem(profileKey, id);
    },
    {
      key: PROGRESS_STORAGE_V2_KEY,
      value: payload,
      profileKey: DEMO_ACTIVE_PROFILE_KEY,
      id: profileId,
    }
  );
}

/** Wait until ProgressStoreProvider finishes hydrating. */
export async function waitForHydration(page: Page) {
  await page.getByText("Loading progress").waitFor({ state: "hidden", timeout: 30_000 });
}

export async function gotoHydrated(page: Page, path: string) {
  await page.goto(path);
  await waitForHydration(page);
}

/** Answer up to `count` quiz/review questions (choice → check → next). */
export async function answerQuizQuestions(page: Page, count = 3) {
  for (let i = 0; i < count; i++) {
    const done = page.getByRole("button", { name: /^Done$/i });
    if (await done.isVisible().catch(() => false)) break;

    const seeResults = page.getByRole("button", { name: /See Results/i });
    if (await seeResults.isVisible().catch(() => false)) {
      await seeResults.click();
      break;
    }

    const choices = page.locator("button.min-h-12:not(:disabled)");
    if (!(await choices.first().isVisible().catch(() => false))) break;
    await choices.first().click();

    const check = page.getByRole("button", { name: /Check Answer/i });
    if (await check.isVisible().catch(() => false)) {
      await check.click();
    }

    const next = page.getByRole("button", {
      name: /Next Question|See Results/i,
    });
    if (await next.isVisible().catch(() => false)) {
      await next.click();
    }
  }
}

export async function expectCcnaPage(page: Page) {
  await expect(page.getByRole("heading", { name: /CCNA/i }).first()).toBeVisible({
    timeout: 15_000,
  });
}
