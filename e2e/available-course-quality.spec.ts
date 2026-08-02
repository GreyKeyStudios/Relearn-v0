import { expect, test } from "@playwright/test";
import { gotoHydrated, seedProfile } from "./helpers/seed";

test.describe("available-course beginner quality", () => {
  test("Computer Basics placement starts unanswered with usable touch targets", async ({ page }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/cert/computer-fundamentals");

    const choices = page.locator('button[aria-pressed]');
    await expect(choices).toHaveCount(12);
    await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Get recommendation" })).toBeDisabled();

    for (let index = 0; index < (await choices.count()); index++) {
      const box = await choices.nth(index).boundingBox();
      expect(box?.height ?? 0).toBeGreaterThanOrEqual(40);
      expect(box?.width ?? 0).toBeGreaterThanOrEqual(40);
    }
  });

  test("Git lab renders structured instructions and links its first-time guide", async ({ page }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/cert/git-github/assignment/git-lab-local-basics");

    await expect(page.getByRole("heading", { name: "Try It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Break It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fix It" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Local Git getting-started guide/i })).toBeVisible();
  });

  test("Synthesis gives a true first-time FL Studio path", async ({ page }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/cert/sound-synthesis/assignment/ss-lab-recreate-muted-saw");

    await page.getByRole("link", { name: /FL Studio.*getting-started guide/i }).click();
    await expect(page.getByRole("heading", { name: "Install and hear sound" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "When you get stuck" })).toBeVisible();
  });
});
