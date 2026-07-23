import type { Certification } from "@/content/types";

/** ReLearn-branded skills curricula delivered via the cert shell (Path A). */
export function isSkillsTrack(cert: Certification): boolean {
  return cert.vendor === "ReLearn";
}

export function trackKindLabel(cert: Certification): string {
  return isSkillsTrack(cert) ? "Skills track" : "Certification";
}

export function trackSubtitle(cert: Certification): string {
  if (isSkillsTrack(cert)) {
    return `${cert.name} · Job skill curriculum`;
  }
  return `${cert.name} · ${cert.vendor} exam prep`;
}
