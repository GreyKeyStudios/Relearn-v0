import type { Certification } from "@/content/types";
import type { ProgressState } from "@/types/progress";
import { getNextCurriculumStep, type CurriculumStep } from "@/lib/curriculum";
import { getDueTopicMasteries } from "@/lib/adaptive-review";
import { EXAM_URGENCY_DAYS } from "@/lib/exam-pace";
import { topicKey } from "@/lib/ids";
import { getAllCertifications } from "@/lib/content-selectors";
import { getWeakObjectivesForActiveCerts } from "@/lib/objective-mastery";

export interface PlanItem {
  id: string;
  type: "review" | "curriculum" | "weak" | "objective_review";
  estimatedMinutes: number;
  reason: string;
  label: string;
  href: string;
  certId: string;
  topicKey?: string;
}

export interface DailyPlan {
  date: string;
  dailyBudgetMinutes: number;
  usedMinutes: number;
  items: PlanItem[];
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysUntil(isoDate: string): number {
  const today = new Date(todayString() + "T12:00:00");
  const target = new Date(isoDate + "T12:00:00");
  return Math.max(0, Math.ceil((target.getTime() - today.getTime()) / 86400000));
}

function difficultyMinutes(difficulty?: string): number {
  if (difficulty === "hard") return 45;
  if (difficulty === "medium") return 30;
  if (difficulty === "easy") return 15;
  return 25;
}

function activeCerts(certs: Certification[], state: ProgressState): Certification[] {
  const ids = state.studyPlan.activeCertIds;
  const withContent = certs.filter((c) => c.domains.some((d) => d.topics.length > 0));
  if (ids.length === 0) return withContent;
  return withContent.filter((c) => ids.includes(c.id));
}

export function buildDailyPlan(
  state: ProgressState,
  certs: Certification[] = getAllCertifications(),
  date = todayString()
): DailyPlan {
  const dailyBudgetMinutes = Math.round(state.studyPlan.weeklyMinutes / 7);
  const items: PlanItem[] = [];
  let usedMinutes = 0;
  const certList = activeCerts(certs, state);
  const weakObjectives = getWeakObjectivesForActiveCerts(state, certList, 2);

  for (const weakObj of weakObjectives) {
    const mins = 15;
    if (usedMinutes + mins > dailyBudgetMinutes && items.length > 0) break;
    if (items.some((i) => i.id === `objective-${weakObj.objectiveId}`)) continue;
    items.push({
      id: `objective-${weakObj.objectiveId}`,
      type: "objective_review",
      estimatedMinutes: mins,
      reason: "Weak exam objective",
      label: weakObj.shortLabel,
      href: weakObj.href,
      certId: weakObj.certId,
      topicKey: `${weakObj.certId}:${weakObj.topicId}`,
    });
    usedMinutes += mins;
  }

  const due = getDueTopicMasteries(state, certList);
  for (const mastery of due.slice(0, 2)) {
    const mins = 15;
    if (usedMinutes + mins > dailyBudgetMinutes) break;
    const cert = certList.find((c) => c.id === mastery.certId);
    const topic = cert?.domains.flatMap((d) => d.topics).find(
      (t) => topicKey(mastery.certId, t.id) === mastery.topicKey
    );
    items.push({
      id: `review-${mastery.topicKey}`,
      type: "review",
      estimatedMinutes: mins,
      reason: "Spaced review due",
      label: topic?.name ?? mastery.topicKey,
      href: "/review/session",
      certId: mastery.certId,
      topicKey: mastery.topicKey,
    });
    usedMinutes += mins;
  }

  const weak = Object.values(state.weakTopics)
    .filter((w) => w.severity >= 2 && certList.some((c) => c.id === w.certId))
    .sort((a, b) => b.severity - a.severity);

  for (const w of weak.slice(0, 1)) {
    const mins = 20;
    if (usedMinutes + mins > dailyBudgetMinutes) break;
    const topicId = w.topicKey.split(":").slice(1).join(":");
    const cert = certList.find((c) => c.id === w.certId);
    const topic = cert?.domains.flatMap((d) => d.topics).find((t) => t.id === topicId);
    items.push({
      id: `weak-${w.topicKey}`,
      type: "weak",
      estimatedMinutes: mins,
      reason: "High-priority weak area",
      label: topic?.name ?? topicId.replace(/-/g, " "),
      href: `/cert/${w.certId}/lesson/${topicId}`,
      certId: w.certId,
      topicKey: w.topicKey,
    });
    usedMinutes += mins;
  }

  const curriculumCandidates: CurriculumStep[] = [];
  for (const cert of certList) {
    const step = getNextCurriculumStep(cert, state);
    if (step) curriculumCandidates.push(step);
  }

  curriculumCandidates.sort((a, b) => {
    const certA = certList.find((c) => c.id === a.certId);
    const certB = certList.find((c) => c.id === b.certId);
    const topicA = certA?.domains.flatMap((d) => d.topics).find((t) => t.id === a.topicId);
    const topicB = certB?.domains.flatMap((d) => d.topics).find((t) => t.id === b.topicId);
    const diffOrder = { hard: 0, medium: 1, easy: 2 };
    const da = diffOrder[topicA?.difficulty ?? "medium"];
    const db = diffOrder[topicB?.difficulty ?? "medium"];
    return da - db;
  });

  for (const step of curriculumCandidates) {
    const cert = certList.find((c) => c.id === step.certId);
    const topic = cert?.domains.flatMap((d) => d.topics).find((t) => t.id === step.topicId);
    const mins = topic?.estimatedStudyMinutes ?? difficultyMinutes(topic?.difficulty);
    if (usedMinutes + mins > dailyBudgetMinutes && items.length > 0) break;

    items.push({
      id: `curriculum-${step.topicKey}-${step.stepType}`,
      type: "curriculum",
      estimatedMinutes: mins,
      reason: step.reason,
      label: step.assignmentTitle ?? step.topicName,
      href: step.href,
      certId: step.certId,
      topicKey: step.topicKey,
    });
    usedMinutes += mins;
    if (items.length >= 5) break;
  }

  if (state.studyPlan.examDate && items.length < 5) {
    const days = daysUntil(state.studyPlan.examDate);
    if (days > 0 && days <= EXAM_URGENCY_DAYS) {
      const reasonPrefix =
        days <= 14 ? `${days} days until exam` : `Exam in ${days} days — stay on pace`;
      for (const step of curriculumCandidates) {
        if (items.some((i) => i.topicKey === step.topicKey)) continue;
        const cert = certList.find((c) => c.id === step.certId);
        const topic = cert?.domains.flatMap((d) => d.topics).find((t) => t.id === step.topicId);
        const mins = topic?.estimatedStudyMinutes ?? 25;
        if (usedMinutes + mins > dailyBudgetMinutes) break;
        items.push({
          id: `urgent-${step.topicKey}`,
          type: "curriculum",
          estimatedMinutes: mins,
          reason: reasonPrefix,
          label: step.topicName,
          href: step.href,
          certId: step.certId,
          topicKey: step.topicKey,
        });
        usedMinutes += mins;
        if (items.length >= 5) break;
      }
    }
  }

  return {
    date,
    dailyBudgetMinutes,
    usedMinutes,
    items: items.slice(0, 5),
  };
}

export function getDueReviewCount(state: ProgressState): number {
  return getDueTopicMasteries(state).length;
}
