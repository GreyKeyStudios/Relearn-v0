import type { CfPlacementResult, FoundationReferral } from "@/content/types";

/**
 * Computer Fundamentals placement diagnostic (Pathway F / A4).
 * Respectful adult language — never remedial or deficiency framing.
 */

export type CfPlacementAnswerKey =
  | "canCreateFolder"
  | "wifiVsInternet"
  | "knowsCommonPorts"
  | "installedSoftware"
  | "usedTaskManager"
  | "workedWithTickets"
  | "intent";

export interface CfPlacementAnswers {
  canCreateFolder: boolean;
  wifiVsInternet: boolean;
  knowsCommonPorts: boolean;
  installedSoftware: boolean;
  usedTaskManager: boolean;
  workedWithTickets: boolean;
  intent: "confidence" | "job" | "aplus" | "unsure";
}

const ORIENTATION_TOPICS = [
  "cf-what-is-a-computer",
  "cf-hardware-vs-software",
  "cf-desktop-taskbar-start",
] as const;

const FILE_TOPICS = [
  "cf-file-explorer-basics",
  "cf-files-copy-move-delete",
  "cf-extensions-and-associations",
] as const;

/** Score placement answers into a respectful path recommendation. */
export function scoreCfPlacement(answers: CfPlacementAnswers): CfPlacementResult {
  const desktopBasics =
    answers.canCreateFolder &&
    answers.installedSoftware &&
    answers.usedTaskManager;

  if (answers.intent === "aplus" && desktopBasics && answers.wifiVsInternet) {
    return {
      path: "begin-aplus-with-refreshers",
      skipTopicIds: [...ORIENTATION_TOPICS, ...FILE_TOPICS],
      recommendation:
        "You can start CompTIA A+ preparation. Computer Fundamentals lessons stay available as refreshers whenever a concept feels shaky — that is normal, not a setback.",
      intent: answers.intent,
    };
  }

  if (answers.canCreateFolder && answers.installedSoftware) {
    return {
      path: "skip-to-files",
      skipTopicIds: [...ORIENTATION_TOPICS],
      recommendation:
        "Start with Files and Folders to sharpen everyday Windows 11 skills. You can revisit orientation lessons anytime.",
      intent: answers.intent,
    };
  }

  if (answers.canCreateFolder || answers.wifiVsInternet) {
    const skip: string[] = [];
    if (answers.canCreateFolder) skip.push("cf-file-explorer-basics");
    return {
      path: "cf-partial-skip",
      skipTopicIds: skip,
      recommendation:
        "Begin Computer Fundamentals with a short path tailored to what you already do comfortably. Skip only what you already demonstrated — nothing here is labeled as catch-up work.",
      intent: answers.intent,
    };
  }

  return {
    path: "start-cf-beginning",
    skipTopicIds: [],
    recommendation:
      "Start with Computer Orientation. We explain every term before using it, and you will practice on Windows 11 at a steady pace. Comfort first — certification can wait until you want it.",
    intent: answers.intent,
  };
}

/** A+ → CF automatic foundation referrals (extend as A+ topics ship). */
export const APLUS_FOUNDATION_REFERRALS: FoundationReferral[] = [
  {
    fromCertId: "a-plus",
    fromTopicId: "ap-windows-tools",
    foundationCertId: "computer-fundamentals",
    foundationTopicId: "cf-desktop-taskbar-start",
    tip: "If Windows 11 desktop chrome still feels unfamiliar, refresh the Computer Fundamentals desktop lesson before diving into A+ tools.",
  },
  {
    fromCertId: "a-plus",
    fromTopicId: "ap-os-types",
    foundationCertId: "computer-fundamentals",
    foundationTopicId: "cf-hardware-vs-software",
    tip: "Hardware vs software is the vocabulary base for every OS discussion — revisit it if terms blur together.",
  },
  {
    fromCertId: "a-plus",
    fromTopicId: "ap-cables-connectors",
    foundationCertId: "computer-fundamentals",
    foundationTopicId: "cf-what-is-a-computer",
    tip: "The computer stack mental model makes ports and cables less abstract.",
  },
];

export function getFoundationReferralsForTopic(
  certId: string,
  topicId: string
): FoundationReferral[] {
  return APLUS_FOUNDATION_REFERRALS.filter(
    (r) => r.fromCertId === certId && r.fromTopicId === topicId
  );
}
