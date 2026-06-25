import type { SimulatorResult } from "@/types/simulator";

/** Parse minimum score % from completion criteria (e.g. "Score at least 80%"). */
export function parseMinimumScorePercent(criteria: string[]): number | null {
  let min: number | null = null;
  for (const line of criteria) {
    const matches = line.match(/(?:at least|score|≥|>=)\s*(\d{1,3})\s*%/i);
    if (matches) {
      const value = Number(matches[1]);
      if (value >= 0 && value <= 100) {
        min = min === null ? value : Math.max(min, value);
      }
    }
    const bare = line.match(/(\d{1,3})\s*%\s*or higher/i);
    if (bare) {
      const value = Number(bare[1]);
      if (value >= 0 && value <= 100) {
        min = min === null ? value : Math.max(min, value);
      }
    }
  }
  return min;
}

export function scorePercent(score: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((score / total) * 100);
}

export function meetsSimulatorCompletionCriteria(
  result: SimulatorResult,
  completionCriteria: string[]
): boolean {
  if (!result.completed || result.total <= 0) return false;

  const minPercent = parseMinimumScorePercent(completionCriteria);
  const percent = scorePercent(result.score, result.total);

  if (minPercent !== null && percent < minPercent) return false;
  if (result.weakConcepts.length > 0 && minPercent !== null && minPercent >= 80) {
    return false;
  }

  return true;
}
