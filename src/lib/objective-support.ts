import type { Certification } from "@/content/types";
import { isSkillsTrack } from "@/lib/track-kind";

/** Certs with objectiveId tags on quiz questions support objective-level coaching. */
const OBJECTIVE_COACHING_CERT_IDS = new Set(["ccna"]);

export function certSupportsObjectiveCoaching(certId: string): boolean {
  return OBJECTIVE_COACHING_CERT_IDS.has(certId);
}

export function activeCertsSupportObjectives(
  certs: Certification[],
  activeCertIds: string[]
): boolean {
  const scoped =
    activeCertIds.length === 0
      ? certs.filter((c) => c.domains.some((d) => d.topics.length > 0))
      : certs.filter((c) => activeCertIds.includes(c.id));
  return scoped.some((c) => certSupportsObjectiveCoaching(c.id));
}

export function coachingLevelLabel(certId: string, cert?: Certification): string {
  if (cert && isSkillsTrack(cert)) {
    return "Job skill curriculum";
  }
  return certSupportsObjectiveCoaching(certId)
    ? "Exam-objective coaching"
    : "Topic-level coaching";
}
