import type { Certification } from "@/content/types";
import type { ProgressState } from "@/types/progress";
import { countCurriculumSteps, countCompletedCurriculumSteps } from "@/lib/curriculum";

export interface ExamPaceSummary {
  daysRemaining: number;
  examDate: string;
  minutesPerDayNeeded: number | null;
  remainingSteps: number;
  totalSteps: number;
  onTrack: boolean | null;
  paceMessage: string;
}

function daysUntil(isoDate: string): number {
  const today = new Date().toISOString().slice(0, 10);
  const todayMs = new Date(today + "T12:00:00").getTime();
  const targetMs = new Date(isoDate + "T12:00:00").getTime();
  return Math.max(0, Math.ceil((targetMs - todayMs) / 86400000));
}

export function getExamPaceSummary(
  state: ProgressState,
  certs: Certification[]
): ExamPaceSummary | null {
  const examDate = state.studyPlan.examDate;
  if (!examDate) return null;

  const daysRemaining = daysUntil(examDate);
  const activeIds = state.studyPlan.activeCertIds;
  const scoped =
    activeIds.length === 0
      ? certs.filter((c) => c.domains.some((d) => d.topics.length > 0))
      : certs.filter((c) => activeIds.includes(c.id));

  let totalSteps = 0;
  let completedSteps = 0;
  for (const cert of scoped) {
    totalSteps += countCurriculumSteps(cert);
    completedSteps += countCompletedCurriculumSteps(cert, state);
  }
  const remainingSteps = Math.max(0, totalSteps - completedSteps);

  const dailyBudget = Math.round(state.studyPlan.weeklyMinutes / 7);
  const avgMinutesPerStep = 25;
  const minutesNeeded = remainingSteps * avgMinutesPerStep;
  const minutesPerDayNeeded =
    daysRemaining > 0 ? Math.ceil(minutesNeeded / daysRemaining) : minutesNeeded;

  let onTrack: boolean | null = null;
  let paceMessage: string;

  if (daysRemaining === 0) {
    paceMessage = "Exam is today — focus on review and weak areas.";
    onTrack = remainingSteps === 0;
  } else if (remainingSteps === 0) {
    paceMessage = `${daysRemaining} days left — curriculum complete. Prioritize review.`;
    onTrack = true;
  } else if (minutesPerDayNeeded <= dailyBudget) {
    paceMessage = `${daysRemaining} days left · ~${minutesPerDayNeeded} min/day needed (budget: ${dailyBudget} min/day)`;
    onTrack = true;
  } else {
    paceMessage = `${daysRemaining} days left · need ~${minutesPerDayNeeded} min/day — increase weekly budget or extend timeline`;
    onTrack = false;
  }

  return {
    daysRemaining,
    examDate,
    minutesPerDayNeeded,
    remainingSteps,
    totalSteps,
    onTrack,
    paceMessage,
  };
}

/** Urgency window for exam-prep plan boosts (days before exam). */
export const EXAM_URGENCY_DAYS = 30;
