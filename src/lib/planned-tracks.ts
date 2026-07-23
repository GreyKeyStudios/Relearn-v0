/**
 * Catalog-only tracks — listed in the library before content ships.
 * See docs/COURSE_ARCHITECTURE.md and docs/TYPE_B_MASTER.md for build order.
 */
export type PlannedTemplate = "A" | "B" | "C" | "D";

export interface PlannedTrack {
  id: string;
  shortName: string;
  name: string;
  template: PlannedTemplate;
  /** Shown under the title — e.g. ReLearn · Job skill */
  kindLabel: string;
  tagline: string;
  /** Lower = higher in Coming soon list */
  order: number;
}

/** Planned ReLearn tracks — no content file until the template graduates. */
export const PLANNED_TRACKS: PlannedTrack[] = [
  {
    id: "vm-lab",
    shortName: "VM Lab",
    name: "VM Lab Foundations",
    template: "C",
    kindLabel: "ReLearn · Lab skill",
    tagline: "Install VirtualBox · safe Linux & Windows guests for CMD and Bash",
    order: -1,
  },
  {
    id: "sql",
    shortName: "SQL",
    name: "SQL Foundations",
    template: "B",
    kindLabel: "ReLearn · Job skill",
    tagline: "SELECT, JOIN, and fix broken queries",
    order: 0,
  },
  {
    id: "bash",
    shortName: "Bash",
    name: "Bash Shell Basics",
    template: "B",
    kindLabel: "ReLearn · Job skill",
    tagline: "Linux commands · pairs with Linux+ concepts · needs VM Lab",
    order: 1,
  },
  {
    id: "regex",
    shortName: "Regex",
    name: "Regular Expressions",
    template: "B",
    kindLabel: "ReLearn · Job skill",
    tagline: "Patterns for logs, filters, and validation",
    order: 2,
  },
  {
    id: "json",
    shortName: "JSON",
    name: "JSON for IT",
    template: "B",
    kindLabel: "ReLearn · Job skill",
    tagline: "APIs, configs, and cloud payloads",
    order: 3,
  },
  {
    id: "rest-apis",
    shortName: "REST",
    name: "REST API Basics",
    template: "B",
    kindLabel: "ReLearn · Job skill",
    tagline: "GET, POST, headers, and authentication",
    order: 4,
  },
  {
    id: "python",
    shortName: "Python",
    name: "Python Foundations",
    template: "B",
    kindLabel: "ReLearn · Automation",
    tagline: "Write, break, fix, and build scripts",
    order: 5,
  },
  {
    id: "excel",
    shortName: "Excel",
    name: "Excel for IT",
    template: "C",
    kindLabel: "ReLearn · Tool skill",
    tagline: "Reports, pivot tables, and CSV workflows",
    order: 10,
  },
  {
    id: "wireshark",
    shortName: "Wireshark",
    name: "Wireshark Basics",
    template: "C",
    kindLabel: "ReLearn · Tool skill",
    tagline: "Capture packets and troubleshoot networks",
    order: 11,
  },
];

export function filterPlannedTracks(query: string): PlannedTrack[] {
  const q = query.trim().toLowerCase();
  const sorted = [...PLANNED_TRACKS].sort((a, b) => a.order - b.order);
  if (!q) return sorted;
  return sorted.filter(
    (t) =>
      t.shortName.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.kindLabel.toLowerCase().includes(q)
  );
}
