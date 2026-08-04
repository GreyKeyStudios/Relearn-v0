/**
 * Learner-facing CCNA version-selection design (architecture only).
 * No UI rewrite in this batch — helpers + copy contracts for a future screen.
 */

import {
  CCNA_V11_LAST_TEST_DATE,
  CCNA_V20_FIRST_TEST_DATE,
  isUtcCalendarDate,
  listAvailableCcnaVersions,
  resolveActiveCcnaVersion,
  type UtcCalendarDate,
} from "./dates";

export interface CcnaVersionSelectionOption {
  version: "v1.1" | "v2.0";
  label: string;
  availability: "available" | "unavailable";
  reason: string;
  recommended: boolean;
}

export interface CcnaVersionSelectionResult {
  /** Null when the learner has not provided a valid UTC calendar exam date. */
  intendedExamDate: UtcCalendarDate | null;
  recommendedVersion: "v1.1" | "v2.0" | null;
  /** Why no version is recommended (missing date vs out of window). */
  recommendationState:
    | "recommended"
    | "missing-exam-date"
    | "outside-configured-windows";
  options: CcnaVersionSelectionOption[];
  learnerCopy: {
    headline: string;
    body: string;
    footnote: string;
  };
}

function baseOptions(
  available: Array<"v1.1" | "v2.0">,
  recommended: "v1.1" | "v2.0" | null
): CcnaVersionSelectionOption[] {
  return [
    {
      version: "v1.1",
      label: "CCNA 200-301 v1.1 (current)",
      availability: available.includes("v1.1") ? "available" : "unavailable",
      reason: available.includes("v1.1")
        ? `Available through ${CCNA_V11_LAST_TEST_DATE} (inclusive).`
        : `Last test date ${CCNA_V11_LAST_TEST_DATE} has passed for the selected exam date.`,
      recommended: recommended === "v1.1",
    },
    {
      version: "v2.0",
      label: "CCNA 200-301 v2.0 (upcoming)",
      availability: available.includes("v2.0") ? "available" : "unavailable",
      reason: available.includes("v2.0")
        ? `First test date ${CCNA_V20_FIRST_TEST_DATE} (inclusive).`
        : `Not available until ${CCNA_V20_FIRST_TEST_DATE}.`,
      recommended: recommended === "v2.0",
    },
  ];
}

/**
 * Pure selection model driven by intended exam date + configurable windows.
 * Study-loop/mastery behavior is unchanged — this only chooses which official
 * objective associations to emphasize.
 *
 * Prefers {@link buildCcnaVersionSelectionFromOptionalDate} when the UI may
 * not yet have collected a date.
 */
export function buildCcnaVersionSelection(
  intendedExamDate: UtcCalendarDate
): CcnaVersionSelectionResult {
  return buildCcnaVersionSelectionFromOptionalDate(intendedExamDate);
}

/**
 * Version selection when the learner may have no exam date yet.
 * Missing/invalid dates do **not** default to a pathway and do not mutate progress.
 */
export function buildCcnaVersionSelectionFromOptionalDate(
  intendedExamDate: UtcCalendarDate | null | undefined
): CcnaVersionSelectionResult {
  const footnote =
    "Cutover dates are configurable in src/content/production/ccna-transition/dates.ts and come from Cisco Learning Network first-party pages. " +
    "Progress keys remain on pilot aliases; switching pathways never duplicates mastery/SRS state.";

  if (!isUtcCalendarDate(intendedExamDate)) {
    return {
      intendedExamDate: null,
      recommendedVersion: null,
      recommendationState: "missing-exam-date",
      options: baseOptions([], null).map((o) => ({
        ...o,
        availability: "unavailable",
        reason: "Select an intended exam date to see which pathway applies.",
        recommended: false,
      })),
      learnerCopy: {
        headline: "Which CCNA exam date are you targeting?",
        body: "Choose your intended exam date to recommend the v1.1 or v2.0 pathway. You can still browse shared-core lessons; progress stays on your existing pilot keys.",
        footnote,
      },
    };
  }

  const available = listAvailableCcnaVersions(intendedExamDate);
  const recommended = resolveActiveCcnaVersion(intendedExamDate);
  const recommendationState =
    recommended == null ? "outside-configured-windows" : "recommended";

  const learnerCopy = {
    headline: "Which CCNA exam date are you targeting?",
    body:
      recommended === "v1.1"
        ? `For exams on or before ${CCNA_V11_LAST_TEST_DATE}, study the v1.1 pathway. Shared lessons still count, but objective checklists stay version-specific.`
        : recommended === "v2.0"
          ? `For exams on or after ${CCNA_V20_FIRST_TEST_DATE}, study the v2.0 pathway. Shared-core lessons may help both versions; v2.0-only gaps are called out separately.`
          : "The selected date is outside the configured Cisco test windows. Adjust the date or update the transition configuration.",
    footnote,
  };

  return {
    intendedExamDate,
    recommendedVersion: recommended,
    recommendationState,
    options: baseOptions(available, recommended),
    learnerCopy,
  };
}

/** Future UI contract — fields a version picker should collect/store. */
export const CCNA_VERSION_SELECTION_UI_CONTRACT = {
  storageKey: "ccna.intendedExamDate",
  preferredVersionKey: "ccna.preferredObjectivesVersion",
  allowManualOverride: true,
  showBothPathwaysDuringOverlap: false,
  /** Switching pathways must not rewrite or duplicate objectiveScores / SRS cards. */
  preserveProgressOnPathwaySwitch: true,
  progressKeyNamespace: "pilot-CCNA-*",
  dateSemantics:
    "Store UTC calendar YYYY-MM-DD date-of-record. Convert learner-local civil dates before save — dates.ts does not apply timezone offsets.",
  note:
    "Do not hard-code February 2027 strings in React components — import from dates.ts.",
} as const;
