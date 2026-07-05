import type { Certification } from "@/content/types";

/**
 * Track maturity tiers.
 *
 * ReLearn currently ships with one flagship experience (CCNA) plus a small set
 * of strong skill tracks. Most other subjects are still being built. These tiers
 * let the UI signal that reality honestly: completed tracks feel complete,
 * in-progress tracks feel intentional, and future tracks never look broken.
 *
 * Source of truth for intent is the project architecture docs; the mapping below
 * is validated against real content depth (immersive experiences per topic).
 */
export type TrackStatus = "flagship" | "reference" | "skill" | "early";

export type TrackGroup = "active" | "early";

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
  /** True when the track has a full, immersive, studyable curriculum. */
  live: boolean;
}

const STATUS_BY_ID: Record<string, TrackStatus> = {
  ccna: "flagship",
  powershell: "reference",
  "git-github": "skill",
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
    // Internally this is the "reference implementation" tier (see architecture
    // docs), but learners just see a hands-on job-skill track like Git.
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
  early: {
    label: "Early access",
    tagline: "Quizzes ready · lessons in progress",
    group: "early",
    order: 3,
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
} {
  const sorted = sortByTrackStatus(certs);
  return {
    active: sorted.filter((c) => isActiveTrack(c)),
    early: sorted.filter((c) => !isActiveTrack(c)),
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
    if (chosen) return chosen;
  }
  return certs.find((c) => getTrackStatus(c) === "flagship") ?? certs[0];
}
