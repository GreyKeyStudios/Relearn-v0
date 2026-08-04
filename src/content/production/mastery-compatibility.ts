/**
 * Production-layer mastery / SRS contract.
 * Re-exports live engine constants so authoring never drifts from runtime.
 */

import {
  OBJECTIVE_MIN_ATTEMPTS,
  OBJECTIVE_WEAK_PERCENT,
  QUIZ_PASS_PERCENT,
  SRS_PASS_PERCENT,
  WEAK_CLEAR_PERCENT,
} from "@/lib/mastery-thresholds";
import { scoreToLevel } from "@/lib/mastery";
import type { MasteryRequirementSpec } from "./types";

/** Must match `SRS_INTERVALS` in `src/lib/mastery.ts`. */
export const PRODUCTION_SRS_INTERVALS = [1, 3, 7, 14, 30] as const;

export const PRODUCTION_MASTERY_REQUIREMENTS: MasteryRequirementSpec = {
  quizPassPercent: QUIZ_PASS_PERCENT,
  srsAdvancePercent: SRS_PASS_PERCENT,
  weakClearPercent: WEAK_CLEAR_PERCENT,
  objectiveWeakPercent: OBJECTIVE_WEAK_PERCENT,
  objectiveMinAttempts: OBJECTIVE_MIN_ATTEMPTS,
  srsIntervalDays: [...PRODUCTION_SRS_INTERVALS],
  scoreToLevel: [
    { minScore: 90, level: "mastered" },
    { minScore: 70, level: "proficient" },
    { minScore: 50, level: "familiar" },
    { minScore: 20, level: "learning" },
    { minScore: 0, level: "new" },
  ],
  notes:
    "Production content must target these thresholds. Do not invent a second mastery engine. " +
    "SRS advances only when a session reaches srsAdvancePercent (80%). " +
    "Topic score blends quiz (0.4), simulator (0.2), and flashcards (0.15) when present.",
};

/** Runtime self-check used by verify:production. */
export function assertMasteryCompatibility(): string[] {
  const errors: string[] = [];
  const req = PRODUCTION_MASTERY_REQUIREMENTS;

  if (req.quizPassPercent !== 70) {
    errors.push(`quizPassPercent expected 70, got ${req.quizPassPercent}`);
  }
  if (req.srsAdvancePercent !== 80) {
    errors.push(`srsAdvancePercent expected 80, got ${req.srsAdvancePercent}`);
  }
  if (req.weakClearPercent !== 90) {
    errors.push(`weakClearPercent expected 90, got ${req.weakClearPercent}`);
  }
  if (req.objectiveWeakPercent !== 70) {
    errors.push(
      `objectiveWeakPercent expected 70, got ${req.objectiveWeakPercent}`
    );
  }
  if (req.objectiveMinAttempts !== 3) {
    errors.push(
      `objectiveMinAttempts expected 3, got ${req.objectiveMinAttempts}`
    );
  }
  if (req.srsIntervalDays.join(",") !== "1,3,7,14,30") {
    errors.push(
      `srsIntervalDays expected 1,3,7,14,30 got ${req.srsIntervalDays.join(",")}`
    );
  }

  const samples: [number, string][] = [
    [0, "new"],
    [19, "new"],
    [20, "learning"],
    [49, "learning"],
    [50, "familiar"],
    [69, "familiar"],
    [70, "proficient"],
    [89, "proficient"],
    [90, "mastered"],
    [100, "mastered"],
  ];
  for (const [score, expected] of samples) {
    const level = scoreToLevel(score);
    if (level !== expected) {
      errors.push(`scoreToLevel(${score}) expected ${expected}, got ${level}`);
    }
  }

  return errors;
}
