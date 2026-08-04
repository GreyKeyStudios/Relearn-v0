/**
 * Source catalog for curriculum production.
 * Only include records we can honestly document — never invent citations.
 */

import type { SourceRecord } from "../types";

export const PRODUCTION_SOURCES: SourceRecord[] = [
  {
    id: "src-aplus-objectives-v15",
    title: "CompTIA A+ Core 1 & Core 2 Exam Objectives (V15)",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "3.0",
    url: "https://www.comptia.org/en/certifications/a/core-1-and-2-v15/",
    retrievedAt: "2026-07-15",
    lastCheckedAt: "2026-08-01",
    confidence: "verified",
    notes:
      "Exam codes 220-1201 / 220-1202. Provenance table in docs/a-plus-objectives-source.md. " +
      "PDF asset URLs are recorded in that doc; re-open official PDFs before renumbering.",
  },
  {
    id: "src-ccna-objectives-pilot",
    title: "CCNA exam objectives — ReLearn pilot catalog",
    kind: "internal-architecture",
    publisher: "ReLearn",
    version: "pilot",
    confidence: "needs-retrieval",
    notes:
      "src/content/objectives/ccna.ts is a pilot catalog for objective-level mastery. " +
      "Before claiming official Cisco numbering in learner-facing marketing, retrieve the " +
      "current first-party Cisco CCNA exam topics document and record version + retrieval date.",
  },
  {
    id: "src-relearn-course-architecture",
    title: "ReLearn Course Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/COURSE_ARCHITECTURE.md",
    version: "1.0",
    confidence: "verified",
    notes: "Platform constitution — template taxonomy and engine hierarchy.",
  },
  {
    id: "src-relearn-bls",
    title: "Bridge Learning Standard",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/bridge-learning-standard.md",
    confidence: "verified",
  },
  {
    id: "src-relearn-les",
    title: "Learning Experience Standard",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/learning-experience-standard.md",
    confidence: "verified",
  },
  {
    id: "src-relearn-dod",
    title: "Definition of Done — Topic Complete",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/definition-of-done.md",
    version: "1.0",
    confidence: "verified",
  },
  {
    id: "src-relearn-type-b",
    title: "TYPE_B_MASTER — Skill template",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/TYPE_B_MASTER.md",
    confidence: "verified",
  },
  {
    id: "src-relearn-type-c",
    title: "TYPE_C_MASTER — Tool template",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/TYPE_C_MASTER.md",
    confidence: "verified",
  },
  {
    id: "src-cf-aplus-architecture",
    title: "Computer Fundamentals + A+ Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/computer-fundamentals-aplus-architecture.md",
    confidence: "verified",
  },
  {
    id: "src-git-architecture",
    title: "Git & GitHub Learning Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/git-github-learning-architecture.md",
    confidence: "verified",
  },
];

const byId = new Map(PRODUCTION_SOURCES.map((s) => [s.id, s]));

export function getProductionSource(id: string): SourceRecord | undefined {
  return byId.get(id);
}

export function listProductionSources(): SourceRecord[] {
  return PRODUCTION_SOURCES;
}
