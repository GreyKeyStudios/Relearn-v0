import type { Page } from "@playwright/test";

export interface LessonWalkResult {
  completed: boolean;
  stepsTaken: number;
  stalledReason?: string;
  firstScreen: {
    hasHeadline: boolean;
    bodyCharCount: number;
    interactiveCount: number;
  };
}

export async function hubUnlocked(page: Page): Promise<boolean> {
  const practice = page.getByText(/Practice path/i);
  const complete = page.getByText(/Lesson complete/i);
  const markDone = page.getByRole("button", { name: /Mark Lesson Complete/i });
  return (
    (await practice.isVisible().catch(() => false)) ||
    (await complete.isVisible().catch(() => false)) ||
    (await markDone.isVisible().catch(() => false))
  );
}

export async function snapshotFirstScreen(page: Page) {
  const headline = page.locator("h3").first();
  const hasHeadline = await headline.isVisible().catch(() => false);
  const bodyText = await page.locator("main").innerText().catch(() => "");
  const interactiveCount = await page.locator("main button, main a").count();
  // Approximate first-card body: first card paragraph lengths
  const paras = page.locator("main .rounded-xl p, main [class*='Card'] p, main p");
  let bodyCharCount = 0;
  const n = Math.min(await paras.count(), 6);
  for (let i = 0; i < n; i++) {
    const t = await paras.nth(i).innerText().catch(() => "");
    bodyCharCount += t.length;
  }
  if (bodyCharCount === 0) bodyCharCount = Math.min(bodyText.length, 2000);
  return { hasHeadline, bodyCharCount, interactiveCount };
}

/**
 * Click through Continue / checkpoints until the post-lesson hub unlocks.
 */
export async function walkLessonAsNewLearner(
  page: Page,
  opts: { maxSteps?: number } = {}
): Promise<LessonWalkResult> {
  const maxSteps = opts.maxSteps ?? 80;
  let stepsTaken = 0;
  let firstScreen = await snapshotFirstScreen(page);

  if (await hubUnlocked(page)) {
    return { completed: true, stepsTaken: 0, firstScreen };
  }

  // Capture first player frame once Continue is available
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
      return { completed: true, stepsTaken, firstScreen };
    }

    // Checkpoint path: pick a choice → Check answer → Continue
    const checkAnswer = page.getByRole("button", { name: /Check answer/i });
    if (await checkAnswer.isVisible().catch(() => false)) {
      const choices = page.locator("button.min-h-12:not(:disabled)");
      if ((await choices.count()) > 0) {
        await choices.first().click();
      }
      if (await checkAnswer.isEnabled().catch(() => false)) {
        await checkAnswer.click();
      }
      const afterCheck = page.getByRole("button", {
        name: /Continue|Next question/i,
      });
      if (await afterCheck.isVisible().catch(() => false)) {
        await afterCheck.click();
        stepsTaken += 1;
        continue;
      }
    }

    const advance = page
      .getByRole("button", {
        name: /^(Continue|Check my understanding|Mark Lesson Complete)$/i,
      })
      .first();

    if (await advance.isVisible().catch(() => false)) {
      await advance.click();
      stepsTaken += 1;
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

  return {
    completed: await hubUnlocked(page),
    stepsTaken,
    firstScreen,
    stalledReason: `Hit max steps (${maxSteps}) without unlocking hub`,
  };
}

export interface SoftRubric {
  /** 1–5 estimated first-screen clarity */
  clarity: number;
  /** 1–5 estimated clutter (5 = clean) */
  clutter: number;
  /** 1–5 how obvious the next action is after the lesson */
  nextStep: number;
  /** Average of the three */
  overall: number;
  reasons: string[];
}

function clampScore(n: number): number {
  return Math.max(1, Math.min(5, Math.round(n)));
}

/**
 * Cheap mobile UX heuristics — not a substitute for human taste,
 * but ranks topics so you know where to look first.
 */
export function scoreSoftRubric(input: {
  walk: LessonWalkResult;
  hubHasPracticePath: boolean;
  hubHasQuizCta: boolean;
  hubInteractiveCount: number;
}): SoftRubric {
  const reasons: string[] = [];
  let clarity = 4;
  let clutter = 4;
  let nextStep = 3;

  if (!input.walk.firstScreen.hasHeadline) {
    clarity -= 2;
    reasons.push("First screen missing a clear headline (h3)");
  }
  if (input.walk.firstScreen.bodyCharCount > 900) {
    clarity -= 1;
    reasons.push(
      `Dense first screen (~${input.walk.firstScreen.bodyCharCount} chars in early paragraphs)`
    );
  } else if (input.walk.firstScreen.bodyCharCount < 80) {
    clarity -= 1;
    reasons.push("First screen body felt very thin");
  }

  if (input.walk.firstScreen.interactiveCount > 8) {
    clutter -= 1;
    reasons.push(
      `Busy first frame (${input.walk.firstScreen.interactiveCount} buttons/links in main)`
    );
  }
  if (input.hubInteractiveCount > 18) {
    clutter -= 1;
    reasons.push(
      `Busy post-lesson hub (${input.hubInteractiveCount} interactive controls)`
    );
  } else if (input.hubInteractiveCount > 12) {
    clutter -= 0.5;
    reasons.push(`Moderately crowded hub (${input.hubInteractiveCount} controls)`);
  }

  if (!input.walk.completed) {
    nextStep -= 2;
    reasons.push(
      `Could not finish first-time lesson walk${
        input.walk.stalledReason ? ` — ${input.walk.stalledReason}` : ""
      }`
    );
  }
  if (input.hubHasPracticePath) {
    nextStep += 1;
  } else {
    nextStep -= 1;
    reasons.push("Practice path missing after lesson");
  }
  if (input.hubHasQuizCta) {
    nextStep += 1;
  } else if (input.walk.completed) {
    reasons.push("No obvious quiz CTA after unlocking hub");
  }

  if (input.walk.stepsTaken > 40) {
    clutter -= 1;
    reasons.push(`Long lesson player (${input.walk.stepsTaken} advances)`);
  }

  clarity = clampScore(clarity);
  clutter = clampScore(clutter);
  nextStep = clampScore(nextStep);
  const overall = clampScore((clarity + clutter + nextStep) / 3);

  if (reasons.length === 0) {
    reasons.push("No automatic red flags — still worth a human skim");
  }

  return { clarity, clutter, nextStep, overall, reasons };
}
