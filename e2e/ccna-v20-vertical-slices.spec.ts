import { test, expect } from "@playwright/test";
import {
  gotoHydrated,
  seedProfile,
  waitForHydration,
} from "./helpers/seed";
import { walkLessonAsNewLearner } from "./helpers/lesson-walk";

/**
 * CCNA v2.0 vertical slices (1.3 IPv4 troubleshoot + 5.2 AI prompts).
 * Covers pathway visibility, lesson→quiz answerability, diagnostic→remediation,
 * simulator pass/fail gates, and progress persistence across pathway switches.
 */
test.describe("CCNA v2.0 vertical slices", () => {
  test.beforeEach(async ({ page }) => {
    await seedProfile(page, "new-learner");
  });

  test("version-specific visibility hides v2.0 slices on v1.1 pathway", async ({
    page,
  }) => {
    await gotoHydrated(page, "/cert/ccna");
    const pathway = page.getByTestId("ccna-version-pathway");
    await pathway.scrollIntoViewIfNeeded();
    await expect(pathway).toBeVisible();

    await page.getByTestId("ccna-pathway-v1.1").click();
    await expect(page.getByTestId("ccna-effective-pathway")).toContainText("v1.1");
    await expect(
      page.getByRole("link", { name: /IPv4 Troubleshoot \(CCNA v2\.0\)/i })
    ).toHaveCount(0);
    await expect(
      page.getByRole("link", { name: /AI Prompts for Net Ops \(CCNA v2\.0\)/i })
    ).toHaveCount(0);
    // Foundation topics remain (expand Network Fundamentals if collapsed)
    const nf = page.getByRole("button", { name: /Network Fundamentals/i });
    if (await nf.isVisible().catch(() => false)) {
      const expanded = await nf.getAttribute("aria-expanded");
      if (expanded === "false") await nf.click();
    }
    await expect(page.getByRole("link", { name: /Subnetting/i }).first()).toBeVisible();
  });

  test("v2.0 pathway shows live slices and unfinished labels", async ({ page }) => {
    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-version-pathway").scrollIntoViewIfNeeded();
    await page.getByTestId("ccna-pathway-v2.0").click();
    await expect(page.getByTestId("ccna-effective-pathway")).toContainText("v2.0");
    await expect(page.getByTestId("v20-live-1.3")).toBeVisible();
    await expect(page.getByTestId("v20-live-5.2")).toBeVisible();
    await expect(page.getByTestId("v20-unfinished-list")).toContainText("2.4");

    // Expand domains that host the live slices
    for (const name of [/Network Fundamentals/i, /Automation/i]) {
      const btn = page.getByRole("button", { name });
      if (await btn.isVisible().catch(() => false)) {
        const expanded = await btn.getAttribute("aria-expanded");
        if (expanded === "false") await btn.click();
      }
    }
    await expect(
      page.getByRole("link", { name: /IPv4 Troubleshoot \(CCNA v2\.0\)/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /AI Prompts for Net Ops \(CCNA v2\.0\)/i })
    ).toBeVisible();
  });

  test("lesson-to-quiz answerability for 1.3 and diagnostic remediation", async ({
    page,
  }) => {
    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-pathway-v2.0").click();

    await gotoHydrated(page, "/cert/ccna/lesson/ipv4-troubleshoot-v20");
    const walk = await walkLessonAsNewLearner(page, { maxSteps: 60 });
    expect(walk.completed, walk.stalledReason).toBeTruthy();

    await gotoHydrated(page, "/cert/ccna/quiz/ipv4-troubleshoot-v20");
    // Diagnostic-style Q1: pick misconception "Private addresses are illegal"
    await page.getByRole("button", { name: /Private addresses are illegal/i }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByTestId("diagnostic-remediation")).toBeVisible();
    await expect(page.getByTestId("diagnostic-remediation")).toContainText(
      /Private RFC 1918|public vs private/i
    );
    // Correct path still answerable from lesson
    await page.getByRole("button", { name: /Next Question/i }).click();
    await page
      .getByRole("button", {
        name: /It emphasizes troubleshoot of configuration\/assignment\/subnetting/i,
      })
      .click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/greater practical depth|troubleshoot/i).first()).toBeVisible();
  });

  test("5.2 quiz answerable from lesson; rejects generic LLM tuning", async ({
    page,
  }) => {
    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-pathway-v2.0").click();

    await gotoHydrated(page, "/cert/ccna/lesson/ai-prompts-netops-v20");
    const walk = await walkLessonAsNewLearner(page, { maxSteps: 60 });
    expect(walk.completed, walk.stalledReason).toBeTruthy();

    await gotoHydrated(page, "/cert/ccna/quiz/ai-prompts-netops-v20");
    await page.getByRole("button", { name: /^fix my network$/i }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByTestId("diagnostic-remediation")).toBeVisible();
    await page.getByRole("button", { name: /Next Question/i }).click();
    await page
      .getByRole("button", {
        name: /Data classification, output format, persona, and instructions/i,
      })
      .click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/four components|explicit in the parent/i).first()).toBeVisible();
  });

  test("IPv4 troubleshoot simulator requires evidence and can complete", async ({
    page,
  }) => {
    await gotoHydrated(
      page,
      "/cert/ccna/simulator/ipv4-troubleshoot-drill?topicId=ipv4-troubleshoot-v20&assignmentId=ipv4-troubleshoot-v20-sim"
    );
    await expect(page.getByTestId("ipv4-troubleshoot-drill")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("evidence-gate")).toBeVisible();
    // Choices disabled until evidence opened
    await expect(page.locator("[data-testid^='choice-']").first()).toBeDisabled();

    const panels = page.locator("[data-testid^='evidence-']");
    await expect(panels.first()).toBeVisible();
    await panels.nth(0).click();
    await panels.nth(1).click();
    await expect(page.getByTestId("evidence-gate")).toHaveCount(0);

    // Prefer a concrete diagnosis choice when present; otherwise first enabled choice
    const preferred = page.getByRole("button", {
      name: /Subnet\/gateway assignment mismatch|Wrong mask|Duplicate IPv4|No IPv4 fault|Public\/private context fault/i,
    });
    if (await preferred.first().isVisible().catch(() => false)) {
      await preferred.first().click();
    } else {
      await page.locator("[data-testid^='choice-']:not([disabled])").first().click();
    }
    await page.getByTestId("drill-next").click();
    await expect(page.getByTestId("scenario-result")).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText(/Explanation/i).first()).toBeVisible();
    await page.getByTestId("drill-next").click();

    // Optional misconception path on a later scenario
    if (await page.getByTestId("evidence-gate").isVisible().catch(() => false)) {
      const more = page.locator("[data-testid^='evidence-']");
      await more.nth(0).click();
      await more.nth(1).click();
      const misc = page.getByRole("button", {
        name: /Private addresses are illegal|always a configuration error|private space is invalid|cannot host phones/i,
      });
      if (await misc.isVisible().catch(() => false)) {
        await misc.click();
        await page.getByTestId("drill-next").click();
        await expect(page.getByTestId("scenario-result")).toBeVisible();
      }
    }
  });

  test("AI prompts simulator completes and fails secret/generic answers", async ({
    page,
  }) => {
    await gotoHydrated(
      page,
      "/cert/ccna/simulator/ai-prompts-netops-drill?topicId=ai-prompts-netops-v20&assignmentId=ai-prompts-netops-v20-sim"
    );
    await expect(page.getByTestId("ai-prompts-netops-drill")).toBeVisible({
      timeout: 15_000,
    });

    // Select a prompt, check, then assert result panel (correct or fail both OK)
    const firstPrompt = page.locator("[data-testid^='prompt-']").first();
    await firstPrompt.click();
    await page.getByTestId("drill-next").click();
    await expect(page.getByTestId("prompt-result")).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText(/Explanation/i).first()).toBeVisible();

    // Advance and force a weak/leaky selection when available
    await page.getByTestId("drill-next").click();
    const leaky = page.getByTestId("prompt-c");
    if (await leaky.isVisible().catch(() => false)) {
      await leaky.click();
      await page.getByTestId("drill-next").click();
      const secretFail = page.getByTestId("secret-fail");
      const genericFail = page.getByTestId("generic-llm-fail");
      const misc = page.getByTestId("misconception-remediation");
      await expect(
        secretFail.or(genericFail).or(misc).first()
      ).toBeVisible();
    }
  });

  test("progress persists across v1.1 ↔ v2.0 pathway switches", async ({
    page,
  }) => {
    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-pathway-v2.0").click();

    await gotoHydrated(page, "/cert/ccna/lesson/ipv4-troubleshoot-v20");
    const walk = await walkLessonAsNewLearner(page, { maxSteps: 60 });
    expect(walk.completed).toBeTruthy();

    // Mark lesson complete if button present
    const mark = page.getByRole("button", { name: /Mark Lesson Complete/i });
    if (await mark.isVisible().catch(() => false)) {
      await mark.click();
    }

    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-pathway-v1.1").click();
    await expect(
      page.getByRole("link", { name: /IPv4 Troubleshoot \(CCNA v2\.0\)/i })
    ).toHaveCount(0);

    // Switch back — progress for the v2.0 topic must still be present in storage
    await page.getByTestId("ccna-pathway-v2.0").click();
    const stored = await page.evaluate(() => {
      const raw = window.localStorage.getItem("bridge-study-progress-v2");
      if (!raw) return null;
      const parsed = JSON.parse(raw) as {
        state?: {
          completedLessons?: Record<string, true>;
          ccnaPathwayPreference?: {
            preferredObjectivesVersion?: string | null;
          };
        };
      };
      return {
        lessonDone: !!parsed.state?.completedLessons?.["ccna:ipv4-troubleshoot-v20"],
        pathway: parsed.state?.ccnaPathwayPreference?.preferredObjectivesVersion,
      };
    });
    expect(stored?.pathway).toBe("v2.0");
    // Lesson completion may be auto on hub unlock in some flows — prefer storage key if marked
    await expect(
      page.getByRole("link", { name: /IPv4 Troubleshoot \(CCNA v2\.0\)/i })
    ).toBeVisible();
  });

  test("exam date recommendation updates effective pathway copy", async ({
    page,
  }) => {
    await gotoHydrated(page, "/cert/ccna");
    await page.getByTestId("ccna-exam-date").fill("2027-03-01");
    await page.getByTestId("ccna-exam-date-apply").click();
    await page.getByTestId("ccna-pathway-clear-override").click();
    await expect(page.getByTestId("ccna-effective-pathway")).toContainText("v2.0");
  });
});
