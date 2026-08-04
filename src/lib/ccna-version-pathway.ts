/**
 * CCNA dual-version pathway helpers for learner-facing catalog visibility.
 * Progress keys stay on pilot/topic ids — switching pathways never remaps mastery.
 */

import type { Certification, Domain, Topic } from "@/content/types";
import {
  buildCcnaVersionSelectionFromOptionalDate,
  CCNA_VERSION_SELECTION_UI_CONTRACT,
} from "@/content/production/ccna-transition/version-selection";
import type { UtcCalendarDate } from "@/content/production/ccna-transition/dates";

export type CcnaObjectivesVersion = "v1.1" | "v2.0";

export interface CcnaPathwayPreference {
  /** UTC calendar YYYY-MM-DD or null */
  intendedExamDate: UtcCalendarDate | null;
  /** Manual override; null means follow recommendation / default */
  preferredObjectivesVersion: CcnaObjectivesVersion | null;
}

export const CCNA_PATHWAY_UI = CCNA_VERSION_SELECTION_UI_CONTRACT;

/** Batch-1 parents not yet elevated to learner-facing Path A (labeled unfinished). */
export const CCNA_V20_UNFINISHED_BATCH1 = [
  { number: "2.4", title: "Troubleshoot L2/L3 connectivity & device operations", status: "spec-ready" },
  { number: "1.4", title: "Troubleshoot IPv6 addressing / EUI-64", status: "spec-ready · revise" },
  { number: "1.7", title: "Troubleshoot DHCPv4 client/server/relay", status: "spec-ready" },
  { number: "2.5", title: "Configure Rapid PVST+", status: "spec-ready" },
  { number: "3.2", title: "Troubleshoot static routing", status: "spec-ready" },
  { number: "3.3", title: "Configure OSPFv2 + OSPFv3", status: "spec-ready · split" },
] as const;

export const CCNA_V20_LIVE_SLICES = [
  { number: "1.3", topicId: "ipv4-troubleshoot-v20", title: "Troubleshoot IPv4 addressing" },
  { number: "5.2", topicId: "ai-prompts-netops-v20", title: "Select generative-AI prompts for net ops" },
] as const;

/**
 * Effective pathway for catalog filtering.
 * - Manual override wins when set.
 * - Else recommended version from intended exam date.
 * - Else default v1.1 (current Cisco test window for most learners).
 */
export function resolveEffectiveCcnaPathway(
  preference: CcnaPathwayPreference | null | undefined
): CcnaObjectivesVersion {
  if (preference?.preferredObjectivesVersion) {
    return preference.preferredObjectivesVersion;
  }
  const selection = buildCcnaVersionSelectionFromOptionalDate(
    preference?.intendedExamDate ?? null
  );
  return selection.recommendedVersion ?? "v1.1";
}

/** Foundation topics (no objectivesVersion) always visible; versioned topics filter by pathway. */
export function isTopicVisibleForCcnaPathway(
  topic: Topic,
  pathway: CcnaObjectivesVersion
): boolean {
  if (!topic.objectivesVersion) return true;
  return topic.objectivesVersion === pathway;
}

export function filterCertificationForCcnaPathway(
  cert: Certification,
  pathway: CcnaObjectivesVersion
): Certification {
  if (cert.id !== "ccna") return cert;
  return {
    ...cert,
    domains: cert.domains
      .map((domain) => ({
        ...domain,
        topics: domain.topics.filter((t) =>
          isTopicVisibleForCcnaPathway(t, pathway)
        ),
      }))
      .filter((d) => d.topics.length > 0),
  };
}

export function listVisibleCcnaTopics(
  cert: Certification,
  pathway: CcnaObjectivesVersion
): Topic[] {
  return filterCertificationForCcnaPathway(cert, pathway).domains.flatMap(
    (d) => d.topics
  );
}

export function findDomainForTopic(
  cert: Certification,
  topicId: string
): Domain | undefined {
  return cert.domains.find((d) => d.topics.some((t) => t.id === topicId));
}
