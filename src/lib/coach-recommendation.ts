import type { Certification } from "@/content/types";
import { getDueTopicMasteries } from "@/lib/adaptive-review";
import { getNextCurriculumStep } from "@/lib/curriculum";
import { flattenTopics } from "@/lib/content-selectors";
import { getWeakObjectivesForActiveCerts } from "@/lib/objective-mastery";
import { coachFitsSession } from "@/lib/session-planning";
import { topicKey } from "@/lib/ids";
import type { ProgressState } from "@/types/progress";

export type CoachRecommendationType =
  | "review"
  | "objective"
  | "weak"
  | "curriculum";

export interface CoachRecommendation {
  type: CoachRecommendationType;
  reason: string;
  label: string;
  href: string;
  estimatedMinutes: number;
  certId: string;
  certName: string;
  score?: number;
}

function activeCerts(certs: Certification[], state: ProgressState): Certification[] {
  const ids = state.studyPlan.activeCertIds;
  const withContent = certs.filter((c) => c.domains.some((d) => d.topics.length > 0));
  if (ids.length === 0) return withContent;
  return withContent.filter((c) => ids.includes(c.id));
}

function scopedCerts(
  certs: Certification[],
  state: ProgressState,
  certId?: string
): Certification[] {
  if (certId) {
    const cert = certs.find((c) => c.id === certId);
    return cert ? [cert] : [];
  }
  return activeCerts(certs, state);
}

export function getCoachRecommendation(
  state: ProgressState,
  certs: Certification[],
  options?: { certId?: string }
): CoachRecommendation | null {
  const certList = scopedCerts(certs, state, options?.certId);
  if (certList.length === 0) return null;

  const due = getDueTopicMasteries(state, certList);
  if (due.length > 0) {
    const mastery = due[0];
    const cert = certList.find((c) => c.id === mastery.certId);
    const topic = cert?.domains
      .flatMap((d) => d.topics)
      .find((t) => topicKey(mastery.certId, t.id) === mastery.topicKey);
    return {
      type: "review",
      reason: "Spaced review due",
      label: topic?.name ?? mastery.topicKey,
      href: "/review/session",
      estimatedMinutes: 15,
      certId: mastery.certId,
      certName: cert?.shortName ?? mastery.certId,
    };
  }

  const weakObjectives = getWeakObjectivesForActiveCerts(state, certList, 1);
  if (weakObjectives.length > 0) {
    const obj = weakObjectives[0];
    const cert = certList.find((c) => c.id === obj.certId);
    return {
      type: "objective",
      reason: "Weakest exam objective",
      label: obj.shortLabel,
      href: obj.href,
      estimatedMinutes: 15,
      certId: obj.certId,
      certName: cert?.shortName ?? obj.certId,
      score: obj.score,
    };
  }

  const weakTopics = Object.values(state.weakTopics)
    .filter(
      (w) =>
        w.severity >= 2 &&
        certList.some((c) => c.id === w.certId)
    )
    .sort((a, b) => b.severity - a.severity);

  if (weakTopics.length > 0) {
    const w = weakTopics[0];
    const cert = certList.find((c) => c.id === w.certId);
    const topicId = w.topicKey.split(":").slice(1).join(":");
    const topic = cert
      ? flattenTopics(cert).find((t) => t.id === topicId)
      : undefined;
    return {
      type: "weak",
      reason: "High-priority weak area",
      label: topic?.name ?? topicId.replace(/-/g, " "),
      href: `/cert/${w.certId}/lesson/${topicId}`,
      estimatedMinutes: 20,
      certId: w.certId,
      certName: cert?.shortName ?? w.certId,
    };
  }

  let best: CoachRecommendation | null = null;
  let lowestProgress = Infinity;

  for (const cert of certList) {
    const topics = flattenTopics(cert);
    if (topics.length === 0) continue;
    const completed = topics.filter((t) =>
      state.completedLessons[topicKey(cert.id, t.id)]
    ).length;
    const progress = completed / topics.length;
    if (progress < lowestProgress) {
      const step = getNextCurriculumStep(cert, state);
      if (step) {
        lowestProgress = progress;
        best = {
          type: "curriculum",
          reason: step.reason,
          label: step.assignmentTitle ?? step.topicName,
          href: step.href,
          estimatedMinutes: 25,
          certId: step.certId,
          certName: cert.shortName,
        };
      }
    }
  }

  return best;
}

/** Coach recommendation that respects optional session-length cap. */
export function getCoachRecommendationForSession(
  state: ProgressState,
  certs: Certification[],
  options?: { certId?: string }
): CoachRecommendation | null {
  const sessionMinutes = state.studyPlan.sessionMinutes;
  const rec = getCoachRecommendation(state, certs, options);
  if (!rec || !sessionMinutes) return rec;
  if (coachFitsSession(rec, sessionMinutes)) return rec;

  const certList = options?.certId
    ? certs.filter((c) => c.id === options.certId)
    : (() => {
        const ids = state.studyPlan.activeCertIds;
        const withContent = certs.filter((c) => c.domains.some((d) => d.topics.length > 0));
        return ids.length === 0 ? withContent : withContent.filter((c) => ids.includes(c.id));
      })();

  const due = getDueTopicMasteries(state, certList);
  if (due.length > 0) {
    const mastery = due[0];
    const cert = certList.find((c) => c.id === mastery.certId);
    const topic = cert?.domains
      .flatMap((d) => d.topics)
      .find((t) => topicKey(mastery.certId, t.id) === mastery.topicKey);
    return {
      type: "review",
      reason: "Fits your session — spaced review due",
      label: topic?.name ?? mastery.topicKey,
      href: "/review/session",
      estimatedMinutes: Math.min(15, sessionMinutes),
      certId: mastery.certId,
      certName: cert?.shortName ?? mastery.certId,
    };
  }

  const weakObjectives = getWeakObjectivesForActiveCerts(state, certList, 1);
  if (weakObjectives.length > 0) {
    const obj = weakObjectives[0];
    const cert = certList.find((c) => c.id === obj.certId);
    return {
      type: "objective",
      reason: "Fits your session — weak exam objective",
      label: obj.shortLabel,
      href: obj.href,
      estimatedMinutes: Math.min(15, sessionMinutes),
      certId: obj.certId,
      certName: cert?.shortName ?? obj.certId,
      score: obj.score,
    };
  }

  return rec;
}
