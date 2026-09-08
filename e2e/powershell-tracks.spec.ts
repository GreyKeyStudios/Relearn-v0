import { expect, test } from "@playwright/test";
import { gotoHydrated, seedProfile } from "./helpers/seed";

test.describe("PowerShell I and II learner paths", () => {
  test("PowerShell I catalog entry and first lab render Try/Break/Fix", async ({
    page,
  }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/cert/powershell");

    await expect(
      page.getByRole("heading", {
        name: /PowerShell I: Foundations & Local Automation/i,
      })
    ).toBeVisible();

    await gotoHydrated(page, "/cert/powershell/assignment/ps-lab-first-commands");
    await expect(page.getByRole("heading", { name: "Try It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Break It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fix It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Verify It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reflect" })).toBeVisible();
  });

  test("PowerShell II starts at reusable tools and reaches the capstone", async ({
    page,
  }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, "/cert/powershell-ii");

    await expect(
      page.getByRole("heading", {
        name: /PowerShell II: Enterprise & Cloud Automation/i,
      })
    ).toBeVisible();
    await expect(
      page.getByText("Module 1 — Reusable Tool Design")
    ).toBeVisible();

    await gotoHydrated(
      page,
      "/cert/powershell-ii/lesson/ps2-advanced-functions"
    );
    await expect(
      page.getByText(/script you can hand over|CmdletBinding|advanced function/i)
    ).toBeVisible();

    await gotoHydrated(
      page,
      "/cert/powershell-ii/assignment/ps2-lab-build-a-tool"
    );
    await expect(page.getByRole("heading", { name: "Try It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Break It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fix It" })).toBeVisible();

    await gotoHydrated(
      page,
      "/cert/powershell-ii/assignment/ps2-capstone-automation-toolkit"
    );
    await expect(
      page.getByRole("heading", { name: /Enterprise Automation Toolkit|Capstone/i })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Try It" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reflect" })).toBeVisible();
  });

  test("PowerShell II Graph project documents the fixture-first path", async ({
    page,
  }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(
      page,
      "/cert/powershell-ii/assignment/ps2-project-graph-report"
    );

    await expect(page.getByRole("heading", { name: "Try It" })).toBeVisible();
    await expect(
      page.getByText(/fixture|ConvertTo-Json|no tenant|locally/i).first()
    ).toBeVisible();
  });
});
