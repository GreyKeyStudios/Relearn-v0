import type { SimulatorResult } from "@/types/simulator";

export function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick 5–10 randomized drill items from a pool */
export function pickDrillItems<T>(pool: T[], min = 5, max = 10): T[] {
  const count = Math.min(pool.length, min + Math.floor(Math.random() * (max - min + 1)));
  return shuffle(pool).slice(0, count);
}

export function buildSimulatorResult(
  score: number,
  total: number,
  weakConcepts: string[]
): SimulatorResult {
  const uniqueWeak = [...new Set(weakConcepts)];
  return {
    score,
    total,
    weakConcepts: uniqueWeak,
    completed: true,
  };
}

export function gradeChoice(
  selectedId: string,
  correctId: string,
  weakConcept: string
): { correct: boolean; weakConcept?: string } {
  if (selectedId === correctId) {
    return { correct: true };
  }
  return { correct: false, weakConcept };
}

export function gradeOrder(
  submitted: string[],
  correct: string[],
  weakConcept: string
): { correct: boolean; weakConcept?: string } {
  const match =
    submitted.length === correct.length &&
    submitted.every((item, index) => item === correct[index]);
  if (match) {
    return { correct: true };
  }
  return { correct: false, weakConcept };
}

export function gradeMatch(
  selectedId: string,
  correctId: string,
  weakConcept: string
): { correct: boolean; weakConcept?: string } {
  return gradeChoice(selectedId, correctId, weakConcept);
}
