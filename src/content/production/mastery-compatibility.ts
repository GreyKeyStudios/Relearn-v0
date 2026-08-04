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
import { scoreToLevel, SRS_INTERVALS } from "@/lib/mastery";
import type { MasteryRequirementSpec } from "./types";

/** Re-export of live SRS ladder — never maintain a divergent copy. */
export const PRODUCTION_SRS_INTERVALS = SRS_INTERVALS;

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

  if (req.quizPassPercent !== QUIZ_PASS_PERCENT) {
    errors.push(
      `quizPassPercent expected ${QUIZ_PASS_PERCENT}, got ${req.quizPassPercent}`
    );
  }
  if (req.srsAdvancePercent !== SRS_PASS_PERCENT) {
    errors.push(
      `srsAdvancePercent expected ${SRS_PASS_PERCENT}, got ${req.srsAdvancePercent}`
    );
  }
  if (req.weakClearPercent !== WEAK_CLEAR_PERCENT) {
    errors.push(
      `weakClearPercent expected ${WEAK_CLEAR_PERCENT}, got ${req.weakClearPercent}`
    );
  }
  if (req.objectiveWeakPercent !== OBJECTIVE_WEAK_PERCENT) {
    errors.push(
      `objectiveWeakPercent expected ${OBJECTIVE_WEAK_PERCENT}, got ${req.objectiveWeakPercent}`
    );
  }
  if (req.objectiveMinAttempts !== OBJECTIVE_MIN_ATTEMPTS) {
    errors.push(
      `objectiveMinAttempts expected ${OBJECTIVE_MIN_ATTEMPTS}, got ${req.objectiveMinAttempts}`
    );
  }
  const liveSrs = SRS_INTERVALS.join(",");
  if (req.srsIntervalDays.join(",") !== liveSrs) {
    errors.push(
      `srsIntervalDays expected ${liveSrs} (live SRS_INTERVALS), got ${req.srsIntervalDays.join(",")}`
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
