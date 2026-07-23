import type { Page } from "@playwright/test";
import type { EvidenceSession } from "./evidence-capture";
import {
  hubUnlocked,
  snapshotFirstScreen,
  type LessonWalkResult,
} from "./lesson-walk";

/**
 * Walk the lesson player while capturing named evidence checkpoints.
 * Deliberately answers the first in-lesson checkpoint incorrectly when possible.
 */
export async function walkLessonWithEvidence(
  page: Page,
  session: EvidenceSession,
  opts: { maxSteps?: number } = {}
): Promise<LessonWalkResult> {
  const maxSteps = opts.maxSteps ?? 100;
  let stepsTaken = 0;
  let firstScreen = await snapshotFirstScreen(page);
  let capturedExplanation = false;
  let capturedIncorrect = false;
  let sawCheckpoint = false;

  await session.capture(page, "first-screen", stepsTaken);
  session.setPreviousAction("viewed first lesson screen");

  if (await hubUnlocked(page)) {
    await session.capture(page, "practice-hub", stepsTaken);
    session.setPreviousAction("hub already unlocked");
    await session.capture(page, "completion-next", stepsTaken);
    return { completed: true, stepsTaken: 0, firstScreen };
  }

  const continueVisible = await page
    .getByRole("button", { name: /Continue|Check my understanding/i })
    .first()
    .isVisible()
    .catch(() => false);
  if (continueVisible) {
    firstScreen = await snapshotFirstScreen(page);
  }

  while (stepsTaken < maxSteps) {
    if (await hubUnlocked(page)) {
      await session.capture(page, "practice-hub", stepsTaken);
      session.setPreviousAction("reached practice hub");
      await session.capture(page, "completion-next", stepsTaken);
      return { completed: true, stepsTaken, firstScreen };
    }

    const checkAnswer = page.getByRole("button", { name: /Check answer/i });
    if (await checkAnswer.isVisible().catch(() => false)) {
      if (!sawCheckpoint) {
        sawCheckpoint = true;
        await session.capture(page, "first-interaction", stepsTaken);
        session.setPreviousAction("opened first checkpoint");
      }

      const choices = page.locator("button.min-h-12:not(:disabled)");
      const count = await choices.count();
      if (count > 0) {
        const idx = !capturedIncorrect && count > 1 ? 1 : 0;
        await choices.nth(idx).click();
        session.setPreviousAction(
          idx === 1 ? "selected second choice (likely incorrect)" : "selected first choice"
        );
      }

      if (await checkAnswer.isEnabled().catch(() => false)) {
        await checkAnswer.click();
        session.setPreviousAction("tapped Check answer");
      }

      if (!capturedIncorrect) {
        const wrongCue = page.getByText(/Review the explanation|keep going|Explanation/i);
        if (await wrongCue.first().isVisible().catch(() => false)) {
          await session.capture(page, "first-incorrect-feedback", stepsTaken);
          capturedIncorrect = true;
          session.setPreviousAction("viewed checkpoint feedback");
        }
      }

      const afterCheck = page.getByRole("button", {
        name: /Continue|Next question/i,
      });
      if (await afterCheck.isVisible().catch(() => false)) {
        await afterCheck.click();
        stepsTaken += 1;
        session.setPreviousAction("continued after checkpoint");
        continue;
      }
    }

    if (!capturedExplanation && stepsTaken >= 1) {
      const body = page.locator("main p").first();
      const bodyText = (await body.innerText().catch(() => "")).trim();
      const isCheckpointUi = await page
        .getByText(/Checkpoint/i)
        .first()
        .isVisible()
        .catch(() => false);
      if (!isCheckpointUi && bodyText.length > 120) {
        await session.capture(page, "first-explanation", stepsTaken);
        capturedExplanation = true;
        session.setPreviousAction("viewed first substantial explanation screen");
      }
    }

    const advance = page
      .getByRole("button", {
        name: /^(Continue|Check my understanding|Mark Lesson Complete)$/i,
      })
      .first();

    if (await advance.isVisible().catch(() => false)) {
      const label = (await advance.innerText().catch(() => "Continue")).trim();
      await advance.click();
      stepsTaken += 1;
      session.setPreviousAction(`tapped ${label}`);
      await page.waitForTimeout(150);
      continue;
    }

    return {
      completed: false,
      stepsTaken,
      firstScreen,
      stalledReason: "No Continue / checkpoint control found",
    };
  }

  const done = await hubUnlocked(page);
  if (done) {
    await session.capture(page, "practice-hub", stepsTaken);
    await session.capture(page, "completion-next", stepsTaken);
  }
  return {
    completed: done,
    stepsTaken,
    firstScreen,
    stalledReason: done ? undefined : `Hit max steps (${maxSteps}) without unlocking hub`,
  };
}
