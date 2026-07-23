/**
 * Track maturity tiers.
 *
 * Legacy tiers (flagship / reference / skill / early) remain for existing catalog.
 * Pathway F adds an explicit content-maturity ladder so empty or partial tracks
 * are never marketed as production-ready.
 */

import type { Certification } from "@/content/types";

/** Legacy + Pathway F maturity ladder */
export type TrackStatus =
  | "flagship"
  | "reference"
  | "skill"
  | "early"
  | "planned"
  | "first-pass"
  | "internal-review"
  | "learner-qa"
  | "stable"
  | "gold-standard";

export type TrackGroup = "active" | "early" | "planned";

export interface TrackStatusMeta {
  status: TrackStatus;
  /** Short badge label shown on cards. */
  label: string;
  /** One-line positioning statement. */
  tagline: string;
  /** Which catalog section the track belongs to. */
  group: TrackGroup;
  /** Sort order within the catalog (lower = higher priority). */
  order: number;
  /** True when the track has a studyable curriculum (pilot or full). */
  live: boolean;
}

const STATUS_BY_ID: Record<string, TrackStatus> = {
  ccna: "flagship",
  powershell: "reference",
  "git-github": "skill",
  /** Pathway F — full Module 1-8 track wired; bump again once learner QA completes */
  "computer-fundamentals": "first-pass",
  "sound-synthesis": "first-pass",
  "a-plus": "planned",
};

const META: Record<TrackStatus, Omit<TrackStatusMeta, "status">> = {
  flagship: {
    label: "Flagship",
    tagline: "The primary ReLearn curriculum",
    group: "active",
    order: 0,
    live: true,
  },
  reference: {
    label: "Skill track",
    tagline: "Hands-on job skill curriculum",
    group: "active",
    order: 1,
    live: true,
  },
  skill: {
    label: "Skill track",
    tagline: "Hands-on job skill curriculum",
    group: "active",
    order: 2,
    live: true,
  },
  "gold-standard": {
    label: "Gold standard",
    tagline: "Fully aligned lesson-to-assessment quality",
    group: "active",
    order: 0,
    live: true,
  },
  stable: {
    label: "Ready",
    tagline: "Production literacy or cert prep",
    group: "active",
    order: 2,
    live: true,
  },
  "learner-qa": {
    label: "Learner testing",
    tagline: "Buddy / owner walkthrough in progress",
    group: "active",
    order: 3,
    live: true,
  },
  "internal-review": {
    label: "In review",
    tagline: "Team QA before learner testing",
    group: "active",
    order: 4,
    live: true,
  },
  "first-pass": {
    label: "In progress",
    tagline: "Full literacy track — QA and polish in progress",
    group: "active",
    order: 5,
    live: true,
  },
  early: {
    label: "Early access",
    tagline: "Quizzes and flashcards live · lessons in progress",
    group: "early",
    order: 10,
    live: false,
  },
  planned: {
    label: "Coming soon",
    tagline: "Architecture ready · content not studyable yet",
    group: "planned",
    order: 20,
    live: false,
  },
};

export function getTrackStatus(cert: Certification): TrackStatus {
  return STATUS_BY_ID[cert.id] ?? "early";
}

export function getTrackStatusMeta(cert: Certification): TrackStatusMeta {
  const status = getTrackStatus(cert);
  return { status, ...META[status] };
}

export function isActiveTrack(cert: Certification): boolean {
  return getTrackStatusMeta(cert).group === "active";
}

export function isPlannedTrack(cert: Certification): boolean {
  return getTrackStatusMeta(cert).group === "planned";
}

/** Sort certs by maturity tier, then by name. */
export function sortByTrackStatus(certs: Certification[]): Certification[] {
  return [...certs].sort((a, b) => {
    const ao = getTrackStatusMeta(a).order;
    const bo = getTrackStatusMeta(b).order;
    if (ao !== bo) return ao - bo;
    return a.shortName.localeCompare(b.shortName);
  });
}

/** Group certs into the catalog sections used across the UI. */
export function groupTracksByStatus(certs: Certification[]): {
  active: Certification[];
  early: Certification[];
  planned: Certification[];
} {
  const sorted = sortByTrackStatus(certs);
  return {
    active: sorted.filter((c) => getTrackStatusMeta(c).group === "active"),
    early: sorted.filter((c) => getTrackStatusMeta(c).group === "early"),
    planned: sorted.filter((c) => getTrackStatusMeta(c).group === "planned"),
  };
}

/**
 * The single track the dashboard should center on: the learner's active track
 * if they've chosen exactly one, otherwise the flagship.
 */
export function getPrimaryTrack(
  certs: Certification[],
  activeCertIds: string[]
): Certification | undefined {
  if (activeCertIds.length === 1) {
    const chosen = certs.find((c) => c.id === activeCertIds[0]);
    if (chosen && getTrackStatusMeta(chosen).live) return chosen;
  }
  return (
    certs.find((c) => getTrackStatus(c) === "flagship") ??
    certs.find((c) => isActiveTrack(c)) ??
    certs[0]
  );
}
