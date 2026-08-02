import { test, expect } from "@playwright/test";
import {
  answerQuizQuestions,
  DEMO_PROFILE_META,
  expectCcnaPage,
  gotoHydrated,
  seedProfile,
  waitForHydration,
  type DemoProfileId,
} from "./helpers/seed";

test.describe("dev console", () => {
  test("lists every demo profile and shows tooling controls", async ({ page }) => {
    await page.goto("/dev");
    await expect(page.getByTestId("dev-console")).toBeVisible();
    await expect(page.getByTestId("dev-active-profile")).toBeVisible();
    await expect(page.getByTestId("dev-reset")).toBeVisible();

    for (const profile of DEMO_PROFILE_META) {
      await expect(page.getByTestId(`dev-load-${profile.id}`)).toBeVisible();
    }

    await expect(page.getByRole("link", { name: /Dashboard/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /^CCNA$/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Review session/i })).toBeVisible();
  });

  test("query shortcut seeds intermediate then lands on home", async ({ page }) => {
    await page.goto("/dev?profile=intermediate");
    // Redirect + hard navigation to /
    await page.waitForURL(/\/$/, { timeout: 15_000 });
    await waitForHydration(page);
    await expect(page.getByText("ReLearn").first()).toBeVisible();
    // Intermediate is past onboarding
    await expect(page.getByText("Welcome to ReLearn")).toHaveCount(0);
  });
});

test.describe("demo profiles", () => {
  test("new-learner shows onboarding", async ({ page }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/");
    await expect(page.getByText("Welcome to ReLearn")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Which course are you studying/i })
    ).toBeVisible();
  });

  test("intermediate opens CCNA coach surfaces", async ({ page }) => {
    await seedProfile(page, "intermediate");
    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();
    await expect(page.getByText("Welcome to ReLearn")).toHaveCount(0);

    await gotoHydrated(page, "/cert/ccna");
    await expectCcnaPage(page);

    // Weak objectives or weak areas should surface for this seed
    await expect(
      page.getByText(/Weak objectives|Weak Areas|Subnetting|1\.9|OSPF|ACL/i).first()
    ).toBeVisible({ timeout: 10_000 });
  });

  test("failed-subnetting highlights subnetting weakness", async ({ page }) => {
    await seedProfile(page, "failed-subnetting");
    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();

    await gotoHydrated(page, "/cert/ccna");
    await expectCcnaPage(page);
    await expect(page.getByText(/subnet|1\.9|Perform subnet/i).first()).toBeVisible({
      timeout: 10_000,
    });

    await gotoHydrated(page, "/cert/ccna/lesson/subnetting");
    await expect(page.getByText(/Subnetting/i).first()).toBeVisible();
  });

  test("overdue-reviews can complete a review session", async ({ page }) => {
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

  test("domain-1-complete shows fundamentals progress", async ({ page }) => {
    await seedProfile(page, "domain-1-complete");
    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();
    await expect(page.getByText("Welcome to ReLearn")).toHaveCount(0);

    await gotoHydrated(page, "/cert/ccna");
    await expectCcnaPage(page);
    await expect(
      page.getByText(/Network Fundamentals|OSI|Ethernet|Subnetting/i).first()
    ).toBeVisible();

    await gotoHydrated(page, "/cert/ccna/lesson/osi-model");
    await expect(page.getByText(/OSI/i).first()).toBeVisible();
  });

  test("exam-ready shows exam countdown pacing", async ({ page }) => {
    await seedProfile(page, "exam-ready");
    await gotoHydrated(page, "/");
    await expect(page.getByText("ReLearn").first()).toBeVisible();
    await expect(page.getByText(/until exam|exam/i).first()).toBeVisible({
      timeout: 10_000,
    });

    await gotoHydrated(page, "/cert/ccna");
    await expectCcnaPage(page);
    await gotoHydrated(page, "/progress");
    await expect(page.getByText(/Progress|Streak|Accuracy|CCNA/i).first()).toBeVisible();
  });
});

test.describe("profile catalog smoke", () => {
  const profiles: DemoProfileId[] = DEMO_PROFILE_META.map((p) => p.id);

  for (const profileId of profiles) {
    test(`${profileId} hydrates without crash on home + ccna`, async ({ page }) => {
      await seedProfile(page, profileId);
      await gotoHydrated(page, "/");
      // Either onboarding or dashboard brand
      const onboarding = page.getByText("Welcome to ReLearn");
      const brand = page.getByText("ReLearn").first();
      await expect(onboarding.or(brand)).toBeVisible();

      if (profileId !== "new-learner") {
        await gotoHydrated(page, "/cert/ccna");
        await expectCcnaPage(page);
      }
    });
  }
});
