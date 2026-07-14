import { test, expect } from "@playwright/test";
import { seedCcnaFreshLearner } from "./helpers/audit-seed";
import { listCcnaTopics } from "./helpers/ccna-catalog";
import {
  auditFlashcardsPage,
  auditLessonPage,
  auditQuizPage,
  topicGrade,
  writeAuditReport,
  type CurriculumAuditReport,
  type TopicAuditResult,
} from "./helpers/curriculum-audit";
import {
  scoreSoftRubric,
  walkLessonAsNewLearner,
} from "./helpers/lesson-walk";
import { waitForHydration } from "./helpers/seed";

const topics = listCcnaTopics();
const results: TopicAuditResult[] = [];

test.describe.configure({ mode: "serial" });

test.describe("CCNA curriculum UX audit", () => {
  test.use({
    viewport: { width: 390, height: 844 },
  });
  // First-time walks can be long (many experience screens + checkpoints)
  test.setTimeout(180_000);

  test.beforeAll(() => {
    results.length = 0;
  });

  test.beforeEach(async ({ page }) => {
    await seedCcnaFreshLearner(page);
  });

  for (const topic of topics) {
    test(`${topic.domainId}/${topic.topicId}`, async ({ page }) => {
      const notes: string[] = [];
      const checks = [];

      await page.goto(`/cert/ccna/lesson/${topic.topicId}`);
      await waitForHydration(page);
      await page
        .getByText(/Loading your progress/i)
        .waitFor({ state: "hidden", timeout: 30_000 })
        .catch(() => undefined);

      // --- First-time lesson player walk ---
      const walk = await walkLessonAsNewLearner(page, { maxSteps: 100 });
      checks.push({
        id: "first-time-walk",
        label: "First-time lesson player completes",
        status: walk.completed ? ("pass" as const) : ("fail" as const),
        detail: walk.completed
          ? `Unlocked hub in ${walk.stepsTaken} advances`
          : walk.stalledReason ?? "Stalled before hub",
      });

      // If still on a classic reading lesson with Mark complete only
      if (!walk.completed) {
        const mark = page.getByRole("button", { name: /Mark Lesson Complete/i });
        if (await mark.isVisible().catch(() => false)) {
          await mark.click();
          walk.completed = true;
        }
      }

      const lesson = await auditLessonPage(page, topic);
      checks.push(...lesson.checks);
      notes.push(...lesson.notes);

      const hubHasPracticePath = await page
        .getByText(/Practice path/i)
        .isVisible()
        .catch(() => false);
      const hubHasQuizCta = await page
        .getByRole("link", { name: /topic quiz|Take the topic quiz/i })
        .first()
        .isVisible()
        .catch(() => false);
      const hubInteractiveCount = await page.locator("main button, main a").count();

      const soft = scoreSoftRubric({
        walk,
        hubHasPracticePath,
        hubHasQuizCta,
        hubInteractiveCount,
      });

      // --- Quiz ---
      await page.goto(`/cert/ccna/quiz/${topic.topicId}`);
      await waitForHydration(page);
      const quiz = await auditQuizPage(page, topic);
      checks.push(...quiz.checks);
      notes.push(...quiz.notes);

      // --- Flashcards ---
      if (topic.flashcardCount > 0) {
        await page.goto(`/cert/ccna/flashcards/${topic.topicId}`);
        await waitForHydration(page);
        const flash = await auditFlashcardsPage(page, topic);
        checks.push(...flash.checks);
        notes.push(...flash.notes);
      }

      const result: TopicAuditResult = {
        topic,
        checks,
        notes,
        soft,
        walkSteps: walk.stepsTaken,
        walkCompleted: walk.completed,
      };
      results.push(result);

      const hardFails = checks.filter((c) => c.status === "fail");
      expect(
        hardFails,
        hardFails.map((c) => `${c.label}: ${c.detail ?? ""}`).join("; ")
      ).toEqual([]);
    });
  }

  test("writes markdown report", async () => {
    expect(results.length).toBe(topics.length);

    const report: CurriculumAuditReport = {
      generatedAt: new Date().toISOString(),
      viewport: "390x844 (mobile)",
      mode: "first-time lesson walk + soft heuristics + quiz/flash checks",
      topicResults: results,
    };
    const out = writeAuditReport(report);
    const failCount = results.filter((r) => topicGrade(r.checks) === "fail").length;
    const warnCount = results.filter((r) => topicGrade(r.checks) === "warn").length;
    const passCount = results.filter((r) => topicGrade(r.checks) === "pass").length;
    const avgSoft =
      results.reduce((sum, r) => sum + (r.soft?.overall ?? 0), 0) / Math.max(results.length, 1);
    const stalled = results.filter((r) => !r.walkCompleted).length;

    // eslint-disable-next-line no-console
    console.log(
      `\nCCNA UX audit → ${out}\nPass ${passCount} · Warn ${warnCount} · Fail ${failCount}\nAvg soft ${avgSoft.toFixed(1)}/5 · Walk stalls ${stalled}\n`
    );
  });
});
