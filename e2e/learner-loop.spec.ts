import { test, expect } from "@playwright/test";
import {
  answerQuizQuestions,
  expectCcnaPage,
  gotoHydrated,
  seedProfile,
} from "./helpers/seed";

/**
 * Deep path for the overdue-reviews persona — the spaced-review learning loop.
 * Broader profile coverage lives in demo-profiles.spec.ts.
 */
test.describe("learner loop", () => {
  test("overdue-reviews profile can open CCNA and answer review questions", async ({
    page,
  }) => {
    await seedProfile(page, "overdue-reviews");
    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();

    await gotoHydrated(page, "/cert/ccna");
    await expectCcnaPage(page);

    await gotoHydrated(page, "/review/session");
    await expect(page.getByRole("heading", { name: /Adaptive Review/i })).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByText(/No topics are due for review/i)).toHaveCount(0);

    await answerQuizQuestions(page, 3);

    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();
  });
});
