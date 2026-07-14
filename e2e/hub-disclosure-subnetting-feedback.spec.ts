import { test, expect } from "@playwright/test";
import {
  seedCcnaCurriculumAudit,
  seedCcnaFreshLearner,
} from "./helpers/audit-seed";
import { waitForHydration } from "./helpers/seed";

test.describe("hub disclosure + subnetting feedback", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("bottom nav shows Courses", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/");
    await waitForHydration(page);
    await expect(page.getByRole("link", { name: /^Courses$/i })).toBeVisible();
  });

  test("practice hub: sections collapsed, CTA and path visible", async ({ page }) => {
    await seedCcnaCurriculumAudit(page);
    await page.goto("/cert/ccna/lesson/subnetting");
    await waitForHydration(page);
    await page
      .getByText(/Loading your progress/i)
      .waitFor({ state: "hidden", timeout: 30_000 })
      .catch(() => undefined);

    await expect(page.getByText(/Lesson complete|Complete/i).first()).toBeVisible();
    await expect(page.getByText(/Practice path/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Start with quiz/i })).toBeVisible();

    const keyFacts = page.locator("details").filter({ hasText: /^Key Facts/i });
    await expect(keyFacts).toBeVisible();
    await expect(keyFacts).not.toHaveAttribute("open", "");
    await expect(
      page.getByText(/Exam strategy: prefix → block size/i)
    ).toBeHidden();

    const guided = page.locator("details").filter({ hasText: /^Guided Example/i });
    await expect(guided).toBeVisible();
    await expect(
      page.getByText(/Subnet 192\.168\.10\.0\/24 into Four Equal/i)
    ).toBeHidden();

    await keyFacts.locator("summary").click();
    await expect(keyFacts).toHaveAttribute("open", "");
    await expect(
      page.getByText(/Exam strategy: prefix → block size/i)
    ).toBeVisible();

    await keyFacts.locator("summary").click();
    await expect(
      page.getByText(/Exam strategy: prefix → block size/i)
    ).toBeHidden();

    await guided.locator("summary").click();
    await expect(
      page.getByText(/Subnet 192\.168\.10\.0\/24 into Four Equal/i)
    ).toBeVisible();

    await expect(page.getByText(/Complete/i).first()).toBeVisible();
  });

  test("need a refresher appears for subnetting", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/lesson/subnetting");
    await waitForHydration(page);
    await page
      .getByText(/Loading your progress/i)
      .waitFor({ state: "hidden", timeout: 30_000 })
      .catch(() => undefined);

    const refresher = page.locator("details").filter({ hasText: /Need a refresher/i });
    await expect(refresher).toBeVisible();
    await expect(page.getByText(/Powers of two/i)).toBeHidden();
    await refresher.locator("summary").click();
    await expect(page.getByText(/Powers of two/i)).toBeVisible();
    await expect(
      refresher.getByRole("link", { name: /IPv4 Addressing/i })
    ).toBeVisible();
  });

  test("need a refresher appears for ethernet (NF expansion)", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/lesson/ethernet");
    await waitForHydration(page);
    await page
      .getByText(/Loading your progress/i)
      .waitFor({ state: "hidden", timeout: 30_000 })
      .catch(() => undefined);

    const refresher = page.locator("details").filter({ hasText: /Need a refresher/i });
    await expect(refresher).toBeVisible();
    await refresher.locator("summary").click();
    await expect(refresher.getByText(/OSI Data Link/i)).toBeVisible();
  });

  test("need a refresher appears for vlans (Network Access)", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/lesson/vlans");
    await waitForHydration(page);
    await page
      .getByText(/Loading your progress/i)
      .waitFor({ state: "hidden", timeout: 30_000 })
      .catch(() => undefined);

    const refresher = page.locator("details").filter({ hasText: /Need a refresher/i });
    await expect(refresher).toBeVisible();
    await refresher.locator("summary").click();
    await expect(refresher.getByText(/Why Layer 3 between VLANs/i)).toBeVisible();
  });

  test("switching quiz teaches why on unknown MAC", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/quiz/switching");
    await waitForHydration(page);
    await expect(
      page.getByText(/unknown destination MAC/i)
    ).toBeVisible({ timeout: 15_000 });
    await page.getByRole("button", { name: /Drops the frame/i }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/floods within the VLAN/i)).toBeVisible();
  });

  test("need a refresher appears for ospf-basics (IP Connectivity)", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/lesson/ospf-basics");
    await waitForHydration(page);
    await page
      .getByText(/Loading your progress/i)
      .waitFor({ state: "hidden", timeout: 30_000 })
      .catch(() => undefined);

    const refresher = page.locator("details").filter({ hasText: /Need a refresher/i });
    await expect(refresher).toBeVisible();
    await refresher.locator("summary").click();
    await expect(refresher.getByText(/Area 0 is the backbone/i)).toBeVisible();
  });

  test("static-routes quiz teaches floating AD why", async ({ page }) => {
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/quiz/static-routes");
    await waitForHydration(page);
    await expect(
      page.getByText(/Administrative distance of a static route/i)
    ).toBeVisible({ timeout: 15_000 });
    await page.getByRole("button", { name: /^0$/ }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/Default static AD is 1/i)).toBeVisible();
  });

  test("subnetting quiz: richer teaching after incorrect answers", async ({ page }) => {
    test.setTimeout(120_000);
    await seedCcnaFreshLearner(page);
    await page.goto("/cert/ccna/quiz/subnetting");
    await waitForHydration(page);

    await expect(
      page.getByText(/How many usable host addresses in a \/26 subnet/i)
    ).toBeVisible({ timeout: 15_000 });
    await page.getByRole("button", { name: /^30$/ }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/2\^6 = 64/i)).toBeVisible();
    await expect(page.getByText(/network/i).first()).toBeVisible();
    await expect(page.getByText(/broadcast/i).first()).toBeVisible();
    await page.getByRole("button", { name: /Next Question/i }).click();

    for (let i = 0; i < 4; i++) {
      const seeResults = page.getByRole("button", { name: /See Results/i });
      if (await seeResults.isVisible().catch(() => false)) break;
      const choices = page.locator("button.min-h-12:not(:disabled)");
      await expect(choices.first()).toBeVisible({ timeout: 10_000 });
      await choices.first().click();
      await page.getByRole("button", { name: /Check Answer/i }).click();
      const next = page.getByRole("button", { name: /Next Question|See Results/i });
      await next.click();
    }

    await expect(
      page.getByText(/192\.168\.1\.90\/26 — which range/i)
    ).toBeVisible({ timeout: 15_000 });
    await page.getByRole("button", { name: /^0–63$/ }).click();
    await page.getByRole("button", { name: /Check Answer/i }).click();
    await expect(page.getByText(/0, 64, 128, 192/i)).toBeVisible();
    await expect(page.getByText(/64–127/i).first()).toBeVisible();
  });
});
