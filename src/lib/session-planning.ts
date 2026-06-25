import type { CoachRecommendation } from "@/lib/coach-recommendation";
import type { DailyPlan, PlanItem } from "@/lib/study-planner";

export const SESSION_LENGTH_OPTIONS = [10, 20, 30, 45] as const;

export function filterPlanBySessionMinutes(
  plan: DailyPlan,
  sessionMinutes: number | null | undefined
): DailyPlan {
  if (!sessionMinutes || sessionMinutes <= 0) return plan;

  const items: PlanItem[] = [];
  let used = 0;
  for (const item of plan.items) {
    if (used + item.estimatedMinutes > sessionMinutes && items.length > 0) break;
    if (item.estimatedMinutes > sessionMinutes && items.length === 0) {
      items.push({ ...item, estimatedMinutes: sessionMinutes });
      used = sessionMinutes;
      break;
    }
    items.push(item);
    used += item.estimatedMinutes;
    if (used >= sessionMinutes) break;
  }

  return {
    ...plan,
    usedMinutes: used,
    dailyBudgetMinutes: sessionMinutes,
    items,
  };
}

export function coachFitsSession(
  rec: CoachRecommendation | null,
  sessionMinutes: number | null | undefined
): boolean {
  if (!rec || !sessionMinutes) return true;
  return rec.estimatedMinutes <= sessionMinutes;
}

/** Cap question count for short sessions (~2 min per question). */
export function maxQuestionsForSession(sessionMinutes: number | null | undefined): number | null {
  if (!sessionMinutes) return null;
  return Math.max(3, Math.floor(sessionMinutes / 2));
}
