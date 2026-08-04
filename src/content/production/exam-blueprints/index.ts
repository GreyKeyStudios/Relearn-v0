/**
 * Exam blueprint registry — maps certification tracks to official (or
 * explicitly flagged pilot) objective versions.
 */

import { APLUS_OBJECTIVES } from "@/content/objectives/a-plus";
import { CCNA_OBJECTIVES } from "@/content/objectives/ccna";
import { aPlus } from "@/content/certifications/a-plus";
import { ccna } from "@/content/certifications/ccna";
import type { Certification } from "@/content/types";
import type { ExamBlueprint, ExamBlueprintDomain } from "../types";

function topicCoverageForObjectives(
  cert: Certification,
  objectiveIds: string[]
): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const id of objectiveIds) map.set(id, []);
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const obj of topic.objectives ?? []) {
        const list = map.get(obj);
        if (list) list.push(topic.id);
        else map.set(obj, [topic.id]);
      }
    }
  }
  return map;
}

function buildCcnaBlueprint(): ExamBlueprint {
  const coverage = topicCoverageForObjectives(
    ccna,
    CCNA_OBJECTIVES.map((o) => o.id)
  );
  const byDomain = new Map<string, ExamBlueprintDomain>();
  for (const obj of CCNA_OBJECTIVES) {
    let domain = byDomain.get(obj.domain);
    if (!domain) {
      domain = {
        id: obj.domain,
        name: obj.domain,
        objectives: [],
      };
      byDomain.set(obj.domain, domain);
    }
    domain.objectives.push({
      id: obj.id,
      text: obj.text,
      coveredByTopicIds: coverage.get(obj.id) ?? [],
      freshness: "versioned",
    });
  }
  return {
    id: "blueprint-ccna-pilot",
    trackId: "ccna",
    vendor: "Cisco",
    examName: "CCNA",
    examCodes: ["200-301"],
    objectivesVersion: "pilot-catalog",
    retrievedAt: "2026-08-04",
    sourceIds: ["src-ccna-objectives-pilot"],
    domains: [...byDomain.values()],
    confidence: "needs-retrieval",
    notes:
      "Pilot objective catalog in src/content/objectives/ccna.ts. " +
      "Retrieve current Cisco CCNA exam topics before claiming official alignment in marketing. " +
      "Do not mix retired objective numbering without mixedVersionWarning.",
  };
}

function buildAplusBlueprint(): ExamBlueprint {
  const coverage = topicCoverageForObjectives(
    aPlus,
    APLUS_OBJECTIVES.map((o) => o.id)
  );
  const core1: ExamBlueprintDomain = {
    id: "220-1201",
    name: "Core 1 (220-1201)",
    objectives: [],
  };
  const core2: ExamBlueprintDomain = {
    id: "220-1202",
    name: "Core 2 (220-1202)",
    objectives: [],
  };
  for (const obj of APLUS_OBJECTIVES) {
    const entry = {
      id: obj.id,
      text: obj.text,
      coveredByTopicIds: coverage.get(obj.id) ?? [],
      freshness: "versioned" as const,
    };
    if (obj.id.startsWith("AP1201-")) core1.objectives.push(entry);
    else if (obj.id.startsWith("AP1202-")) core2.objectives.push(entry);
  }
  return {
    id: "blueprint-aplus-v15",
    trackId: "a-plus",
    vendor: "CompTIA",
    examName: "CompTIA A+",
    examCodes: ["220-1201", "220-1202"],
    objectivesVersion: "3.0",
    retrievedAt: "2026-07-15",
    lastCheckedAt: "2026-08-01",
    sourceIds: ["src-aplus-objectives-v15", "src-cf-aplus-architecture"],
    domains: [core1, core2],
    confidence: "verified",
    notes:
      "See docs/a-plus-objectives-source.md. Do not teach retired 220-1101/220-1102.",
  };
}

/** Blueprints with first-party or explicitly flagged pilot provenance. */
export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  buildCcnaBlueprint(),
  buildAplusBlueprint(),
];

const byTrack = new Map(EXAM_BLUEPRINTS.map((b) => [b.trackId, b]));

export function getExamBlueprint(trackId: string): ExamBlueprint | undefined {
  return byTrack.get(trackId);
}

export function listExamBlueprints(): ExamBlueprint[] {
  return EXAM_BLUEPRINTS;
}

/** Tracks that are certifications but lack a production blueprint yet. */
export const CERT_TRACKS_NEEDING_BLUEPRINT = [
  "security-plus",
  "network-plus",
  "cysa-plus",
  "aws-cloud-practitioner",
  "azure-fundamentals",
  "linux-plus",
  "itil-foundation",
] as const;
