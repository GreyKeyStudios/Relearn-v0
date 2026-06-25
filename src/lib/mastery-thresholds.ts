/** Learner-facing mastery and pass thresholds — keep in sync with weakness/mastery logic. */

export const QUIZ_PASS_PERCENT = 70;
export const SRS_PASS_PERCENT = 80;
export const WEAK_CLEAR_PERCENT = 90;
export const OBJECTIVE_WEAK_PERCENT = 70;
export const OBJECTIVE_MIN_ATTEMPTS = 3;

export function quizPassLabel(percent: number): string {
  if (percent >= WEAK_CLEAR_PERCENT) return "Strong — weak area may clear";
  if (percent >= SRS_PASS_PERCENT) return "Passing — spaced review advances";
  if (percent >= QUIZ_PASS_PERCENT) return "Passing — keep practicing for retention";
  return "Below passing — review missed questions";
}

export function thresholdGuideText(): string {
  return `${QUIZ_PASS_PERCENT}% quiz pass · ${SRS_PASS_PERCENT}% for spaced-review advance · ${WEAK_CLEAR_PERCENT}% to clear weak areas`;
}
