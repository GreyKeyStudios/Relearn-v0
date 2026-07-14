import { test, expect } from "@playwright/test";
import { seedCcnaFreshLearner } from "./helpers/audit-seed";
import { listCcnaTopics } from "./helpers/ccna-catalog";
import { EvidenceSession } from "./helpers/evidence-capture";
import { walkLessonWithEvidence } from "./helpers/lesson-walk-evidence";
import { waitForHydration } from "./helpers/seed";
import { ALL_CHECKPOINTS, PILOT_TOPIC_IDS } from "../scripts/audit-judge/types";

const topicFilter = process.env.AUDIT_EVIDENCE_TOPIC?.trim();
const pilots = listCcnaTopics().filter((t) =>
  topicFilter
    ? t.topicId === topicFilter
    : (PILOT_TOPIC_IDS as readonly string[]).includes(t.topicId)
);

test.describe.configure({ mode: "serial" });

test.describe("CCNA evidence pilot", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test.setTimeout(180_000);

  test.beforeEach(async ({ page }) => {
    await seedCcnaFreshLearner(page);
  });

  for (const topic of pilots) {
    test(`capture ${topic.topicId}`, async ({ page }) => {
      const session = new EvidenceSession({
        topicId: topic.topicId,
        topicTitle: topic.topicName,
        domainName: topic.domainName,
      });

      await page.goto(`/cert/ccna/lesson/${topic.topicId}`);
      await waitForHydration(page);
      await page
        .getByText(/Loading your progress/i)
        .waitFor({ state: "hidden", timeout: 30_000 })
        .catch(() => undefined);

      const walk = await walkLessonWithEvidence(page, session, { maxSteps: 100 });

      if (!walk.completed) {
        const mark = page.getByRole("button", { name: /Mark Lesson Complete/i });
        if (await mark.isVisible().catch(() => false)) {
          await mark.click();
          session.setPreviousAction("marked lesson complete");
          await session.capture(page, "practice-hub", walk.stepsTaken);
          await session.capture(page, "completion-next", walk.stepsTaken);
          walk.completed = true;
        }
      }

      expect(walk.completed, walk.stalledReason ?? "walk incomplete").toBe(true);

      // Quiz checkpoints
      if (topic.quizCount > 0) {
        await page.goto(`/cert/ccna/quiz/${topic.topicId}`);
        await waitForHydration(page);
        session.setPreviousAction("opened topic quiz");
        await session.capture(page, "quiz-question", walk.stepsTaken);

        const choices = page.locator("button.min-h-12:not(:disabled)");
        if ((await choices.count()) > 0) {
          await choices.first().click();
          session.setPreviousAction("selected quiz answer");
          const check = page.getByRole("button", { name: /Check Answer/i });
          if (await check.isVisible().catch(() => false)) {
            await check.click();
            session.setPreviousAction("checked quiz answer");
            await session.capture(page, "quiz-explanation", walk.stepsTaken);
          }
        }
      }

      const manifest = session.finalize(walk.stepsTaken, ALL_CHECKPOINTS);
      expect(manifest.checkpoints.length).toBeGreaterThan(0);
      // eslint-disable-next-line no-console
      console.log(
        `\nEvidence ${topic.topicId}: ${manifest.checkpoints.length} checkpoints` +
          (manifest.missingCheckpoints.length
            ? ` (missing: ${manifest.missingCheckpoints.join(", ")})`
            : "")
      );
    });
  }
});
