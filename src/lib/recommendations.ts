import type { Certification } from "@/content/types";
import {
  curriculumStepForTopic,
  getNextCurriculumStep,
  type CurriculumStep,
} from "@/lib/curriculum";
import { getCoachRecommendation } from "@/lib/coach-recommendation";
import type { ProgressState, WeakTopic } from "@/types/progress";

export type StudyRecommendation = CurriculumStep;

function coachToCurriculumStep(
  rec: NonNullable<ReturnType<typeof getCoachRecommendation>>
): CurriculumStep {
  const topicIdMatch = rec.href.match(/\/lesson\/([^/?]+)/) ?? rec.href.match(/\/quiz\/([^/?]+)/);
  const topicId = topicIdMatch?.[1] ?? "";
  return {
    certId: rec.certId,
    topicId,
    topicKey: topicId ? `${rec.certId}:${topicId}` : `${rec.certId}:`,
    topicName: rec.label,
    certName: rec.certName,
    reason: rec.reason,
    stepType: rec.type === "curriculum" ? "assignment" : "lesson",
    href: rec.href,
    assignmentTitle: rec.type === "curriculum" ? rec.label : undefined,
  };
}

export function getTodaysStudyItem(
  certs: Certification[],
  state: ProgressState,
  _weakTopics: WeakTopic[]
): StudyRecommendation | null {
  const rec = getCoachRecommendation(state, certs);
  if (!rec) return null;
  if (rec.type === "review") {
    const step = getNextCurriculumStep(
      certs.find((c) => c.id === rec.certId) ?? certs[0],
      state
    );
    return step ? { ...step, reason: rec.reason, href: rec.href } : coachToCurriculumStep(rec);
  }
  return coachToCurriculumStep(rec);
}

export function getNextTopicForCert(
  cert: Certification,
  state: ProgressState,
  weakTopics: WeakTopic[]
): StudyRecommendation | null {
  const rec = getCoachRecommendation(state, [cert], { certId: cert.id });
  if (rec) return coachToCurriculumStep(rec);

  const certWeak = weakTopics
    .filter((w) => w.certId === cert.id)
    .sort((a, b) => b.severity - a.severity)[0];

  if (certWeak) {
    const topicId = certWeak.topicKey.split(":").slice(1).join(":");
    return curriculumStepForTopic(cert, topicId, state, "Review weak area");
  }

  return null;
}
