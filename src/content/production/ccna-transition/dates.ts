/**
 * Configurable Cisco CCNA 200-301 version cutover dates.
 *
 * Source: Cisco Learning Network CCNA exam topics pages (retrieved 2026-08-04):
 * - Last date to test v1.1: 2027-02-02
 * - First date to test v2.0: 2027-02-03
 *
 * Keep these in one place — do not hard-code cutover behavior across the app.
 */

/** UTC calendar date-of-record (YYYY-MM-DD). */
export type UtcCalendarDate = string;

export interface CcnaVersionWindow {
  objectivesVersion: "v1.1" | "v2.0";
  examCode: "200-301";
  /** Inclusive first date learners may sit this version (UTC calendar). */
  firstTestDate: UtcCalendarDate;
  /** Inclusive last date learners may sit this version (UTC calendar). */
  lastTestDate: UtcCalendarDate | null;
  sourceIds: string[];
}

/**
 * Single configuration object for CCNA version windows.
 * Override in tests by importing and swapping via resolve helpers' `config` arg.
 */
export const CCNA_VERSION_WINDOWS: readonly CcnaVersionWindow[] = [
  {
    objectivesVersion: "v1.1",
    examCode: "200-301",
    firstTestDate: "2020-02-24",
    lastTestDate: "2027-02-02",
    sourceIds: ["src-cisco-ccna-200-301-v1.1"],
  },
  {
    objectivesVersion: "v2.0",
    examCode: "200-301",
    firstTestDate: "2027-02-03",
    lastTestDate: null,
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
] as const;

export const CCNA_V11_LAST_TEST_DATE: UtcCalendarDate = "2027-02-02";
export const CCNA_V20_FIRST_TEST_DATE: UtcCalendarDate = "2027-02-03";

function parseUtcDay(iso: UtcCalendarDate): number {
  return Date.parse(`${iso}T12:00:00Z`);
}

export function isCcnaVersionAvailableOn(
  version: "v1.1" | "v2.0",
  intendedExamDate: UtcCalendarDate,
  windows: readonly CcnaVersionWindow[] = CCNA_VERSION_WINDOWS
): boolean {
  const win = windows.find((w) => w.objectivesVersion === version);
  if (!win) return false;
  const day = parseUtcDay(intendedExamDate);
  if (Number.isNaN(day)) return false;
  if (day < parseUtcDay(win.firstTestDate)) return false;
  if (win.lastTestDate != null && day > parseUtcDay(win.lastTestDate)) {
    return false;
  }
  return true;
}

/**
 * Active exam version for an intended exam date.
 * Before v2.0 opens → v1.1; on/after v2.0 first test date → v2.0.
 * Does not delete the inactive pathway — selection only.
 */
export function resolveActiveCcnaVersion(
  intendedExamDate: UtcCalendarDate,
  windows: readonly CcnaVersionWindow[] = CCNA_VERSION_WINDOWS
): "v1.1" | "v2.0" | null {
  const v20 = isCcnaVersionAvailableOn("v2.0", intendedExamDate, windows);
  const v11 = isCcnaVersionAvailableOn("v1.1", intendedExamDate, windows);
  if (v20 && !v11) return "v2.0";
  if (v11 && !v20) return "v1.1";
  if (v20 && v11) {
    // Overlap should not occur with current Cisco dates; prefer v2.0 if it does.
    return "v2.0";
  }
  return null;
}

export function listAvailableCcnaVersions(
  intendedExamDate: UtcCalendarDate,
  windows: readonly CcnaVersionWindow[] = CCNA_VERSION_WINDOWS
): Array<"v1.1" | "v2.0"> {
  return (["v1.1", "v2.0"] as const).filter((v) =>
    isCcnaVersionAvailableOn(v, intendedExamDate, windows)
  );
}
