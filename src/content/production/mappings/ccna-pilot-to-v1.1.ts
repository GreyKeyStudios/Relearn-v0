/**
 * Explicit migration / alias layer: ReLearn pilot `CCNA-*` IDs → official
 * 200-301 v1.1 objective lines.
 *
 * Rules:
 * - Do NOT rename live topic.objectives / quiz.objectiveId / persisted progress keys.
 * - Do NOT invent mappings to force complete coverage.
 * - Pilot IDs remain the operational alias until a dedicated content-remap batch.
 */

import { CCNA_OBJECTIVES } from "@/content/objectives/ccna";
import { ccna } from "@/content/certifications/ccna";
import type { PilotOfficialMappingEntry, PilotMappingStatus } from "../types";
import {
  ccnaV11ObjectiveId,
  getCcnaV11OfficialLine,
  listCcnaV11ParentObjectives,
} from "../objectives/ccna-200-301-v1.1";

type Draft = {
  pilotId: string;
  status: PilotMappingStatus;
  officialNumbers: string[];
  notes: string;
};

/**
 * Hand-authored from pilot text vs official PDF wording.
 * Status vocabulary is fixed by the ingestion ticket.
 */
const DRAFT_MAPPINGS: Draft[] = [
  {
    pilotId: "CCNA-1.1",
    status: "exact match",
    officialNumbers: ["1.1"],
    notes: "Wording matches official 1.1 parent line.",
  },
  {
    pilotId: "CCNA-1.2",
    status: "exact match",
    officialNumbers: ["1.2"],
    notes: "Wording matches official 1.2 parent line.",
  },
  {
    pilotId: "CCNA-1.3",
    status: "exact match",
    officialNumbers: ["1.3"],
    notes: "Wording matches official 1.3 parent line.",
  },
  {
    pilotId: "CCNA-1.4",
    status: "narrower than official objective",
    officialNumbers: ["1.4"],
    notes:
      "Pilot omits official parenthetical detail (collisions, errors, mismatch duplex, and/or speed).",
  },
  {
    pilotId: "CCNA-1.5",
    status: "exact match",
    officialNumbers: ["1.5"],
    notes: "Wording matches official 1.5.",
  },
  {
    pilotId: "CCNA-1.6",
    status: "exact match",
    officialNumbers: ["1.6"],
    notes: "Wording matches official 1.6.",
  },
  {
    pilotId: "CCNA-1.7",
    status: "combines multiple official objectives",
    officialNumbers: ["1.7", "1.9"],
    notes:
      "Pilot text 'Describe IPv4 and IPv6 address types' spans official 1.7 and 1.9. Official 1.7 is private-IPv4-addressing only (not a general IPv4 address-types catalog); official 1.9 is IPv6 address types. Combined alias is intentional — not an exact match to either line alone.",
  },
  {
    pilotId: "CCNA-1.8",
    status: "narrower than official objective",
    officialNumbers: ["1.10"],
    notes:
      "Pilot number 1.8 is NOT official 1.8 (IPv6 addressing). Closest official line is 1.10; pilot omits OS list (Windows, Mac OS, Linux).",
  },
  {
    pilotId: "CCNA-1.9",
    status: "narrower than official objective",
    officialNumbers: ["1.6"],
    notes:
      "CRITICAL numbering mismatch: pilot CCNA-1.9 is subnet calculations; official 1.9 is IPv6 address types. Maps as a narrower slice of official 1.6 (IPv4 addressing and subnetting).",
  },
  {
    pilotId: "CCNA-1.10",
    status: "narrower than official objective",
    officialNumbers: ["1.6"],
    notes:
      "Pilot number 1.10 is NOT official 1.10 (client OS IP parameters). Text is a configure-only slice of official 1.6 (omits verify).",
  },
  {
    pilotId: "CCNA-1.11",
    status: "exact match",
    officialNumbers: ["1.7"],
    notes:
      "Text matches official 1.7; pilot numbering does not match official numbering.",
  },
  {
    pilotId: "CCNA-1.12",
    status: "narrower than official objective",
    officialNumbers: ["1.8"],
    notes:
      "Closest official line is 1.8; pilot omits verify and prefix language.",
  },
  {
    pilotId: "CCNA-1.13",
    status: "exact match",
    officialNumbers: ["1.11"],
    notes:
      "Text matches official 1.11; pilot numbering does not match official numbering.",
  },
  {
    pilotId: "CCNA-2.1",
    status: "narrower than official objective",
    officialNumbers: ["2.1"],
    notes:
      "Pilot omits 'normal range spanning multiple switches' and sub-bullets. Unused by live topics today.",
  },
  {
    pilotId: "CCNA-2.2",
    status: "narrower than official objective",
    officialNumbers: ["2.2"],
    notes:
      "Pilot omits verify and trunk/802.1Q/native VLAN detail. Unused by live topics today.",
  },
  {
    pilotId: "CCNA-2.3",
    status: "narrower than official objective",
    officialNumbers: ["2.3"],
    notes: "Pilot omits verify and explicit CDP/LLDP naming.",
  },
  {
    pilotId: "CCNA-2.4",
    status: "narrower than official objective",
    officialNumbers: ["2.4"],
    notes: "Pilot omits Layer 2/Layer 3 and LACP specificity.",
  },
  {
    pilotId: "CCNA-2.5",
    status: "partial match",
    officialNumbers: ["2.5"],
    notes:
      "Pilot 'Describe STP and RSTP' vs official 'Interpret basic operations of Rapid PVST+ Spanning Tree Protocol' — related but different verb/scope.",
  },
  {
    pilotId: "CCNA-2.6",
    status: "partial match",
    officialNumbers: ["2.5"],
    notes:
      "Pilot number 2.6 is NOT official 2.6 (wireless architectures). Root bridge/port roles relate to official 2.5 / 2.5.a, but pilot verb is Configure while official 2.5 is Interpret — partial, not a narrower same-verb slice.",
  },
  {
    pilotId: "CCNA-2.7",
    status: "partial match",
    officialNumbers: ["2.6"],
    notes:
      "Pilot 'Compare Cisco Wireless architectures' vs official 2.6 'Describe Cisco Wireless Architectures and AP modes'.",
  },
  {
    pilotId: "CCNA-2.8",
    status: "narrower than official objective",
    officialNumbers: ["2.7"],
    notes:
      "Pilot number 2.8 is NOT official 2.8 (device management access). Generic 'physical infrastructure connections' is narrower than official WLAN-component 2.7.",
  },
  {
    pilotId: "CCNA-2.9",
    status: "partial match",
    officialNumbers: ["2.9"],
    notes:
      "Pilot 'Describe wireless LAN access' is vaguer than official GUI client-connectivity interpretation objective 2.9.",
  },
  {
    pilotId: "CCNA-3.1",
    status: "partial match",
    officialNumbers: ["3.1"],
    notes:
      "Same subject as official 3.1, but wording differs (pilot 'Interpret routing table components' vs official 'Interpret the components of routing table') — not an exact match.",
  },
  {
    pilotId: "CCNA-3.2",
    status: "narrower than official objective",
    officialNumbers: ["3.2"],
    notes: "Pilot omits official trailing 'by default'.",
  },
  {
    pilotId: "CCNA-3.3",
    status: "exact match",
    officialNumbers: ["3.3"],
    notes: "Wording matches official 3.3.",
  },
  {
    pilotId: "CCNA-3.4",
    status: "narrower than official objective",
    officialNumbers: ["3.4"],
    notes: "Pilot omits verify.",
  },
  {
    pilotId: "CCNA-3.5",
    status: "partial match",
    officialNumbers: ["3.4"],
    notes:
      "CRITICAL numbering mismatch: pilot CCNA-3.5 is OSPF neighbor adjacencies; official 3.5 is first hop redundancy protocols (FHRP). Relates to official 3.4.a under 3.4, but pilot verb is Describe while parent 3.4 is Configure and verify — partial, not a silent remap to FHRP.",
  },
  {
    pilotId: "CCNA-3.6",
    status: "narrower than official objective",
    officialNumbers: ["3.4"],
    notes:
      "No official 3.6. OSPF neighbor relationships are under official 3.4.",
  },
  {
    pilotId: "CCNA-3.7",
    status: "narrower than official objective",
    officialNumbers: ["4.1"],
    notes:
      "Domain misnumbering: NAT is official IP Services 4.1 (inside source NAT using static and pools), not IP Connectivity 3.x.",
  },
  {
    pilotId: "CCNA-3.8",
    status: "narrower than official objective",
    officialNumbers: ["4.2"],
    notes:
      "Domain misnumbering: NTP is official 4.2; pilot omits client/server mode detail.",
  },
  {
    pilotId: "CCNA-4.1",
    status: "partial match",
    officialNumbers: ["4.6"],
    notes:
      "Pilot 'Configure and verify DHCP on a router' is not an official line. Closest official configure objective is 4.6 (DHCP client and relay); 4.3 covers DHCP/DNS roles.",
  },
  {
    pilotId: "CCNA-4.2",
    status: "narrower than official objective",
    officialNumbers: ["4.3"],
    notes:
      "DNS lookup is only part of official 4.3 (role of DHCP and DNS).",
  },
  {
    pilotId: "CCNA-4.3",
    status: "unable to map",
    officialNumbers: [],
    notes:
      "No official v1.1 line for 'Configure DNS on a Cisco router'. Official 4.3 is explain-role only. Left unmapped rather than inventing alignment.",
  },
  {
    pilotId: "CCNA-4.4",
    status: "partial match",
    officialNumbers: ["4.4"],
    notes: "Describe vs official Explain; same SNMP subject.",
  },
  {
    pilotId: "CCNA-5.1",
    status: "narrower than official objective",
    officialNumbers: ["5.1"],
    notes:
      "Pilot omits official parenthetical (threats, vulnerabilities, exploits, and mitigation techniques).",
  },
  {
    pilotId: "CCNA-5.2",
    status: "partial match",
    officialNumbers: ["5.6"],
    notes:
      "Pilot 'Configure and verify ACLs' abbreviates official 5.6 'Configure and verify access control lists'. Pilot number 5.2 is NOT official 5.2 (security program elements).",
  },
  {
    pilotId: "CCNA-5.3",
    status: "narrower than official objective",
    officialNumbers: ["5.7"],
    notes:
      "Pilot number 5.3 is NOT official 5.3 (local passwords). Maps to official 5.7; omits DHCP snooping / DAI / port security list.",
  },
  {
    pilotId: "CCNA-5.4",
    status: "narrower than official objective",
    officialNumbers: ["5.9"],
    notes:
      "Pilot number 5.4 is NOT official 5.4 (password policy). Maps to official 5.9; omits WPA/WPA2/WPA3 list.",
  },
  {
    pilotId: "CCNA-6.1",
    status: "exact match",
    officialNumbers: ["6.1"],
    notes: "Wording matches official 6.1.",
  },
  {
    pilotId: "CCNA-6.2",
    status: "exact match",
    officialNumbers: ["6.2"],
    notes: "Wording matches official 6.2.",
  },
];

function liveUsage(): {
  topicsByPilot: Map<string, string[]>;
  questionsByPilot: Map<string, number>;
} {
  const topicsByPilot = new Map<string, string[]>();
  const questionsByPilot = new Map<string, number>();
  for (const domain of ccna.domains) {
    for (const topic of domain.topics) {
      for (const oid of topic.objectives ?? []) {
        const list = topicsByPilot.get(oid) ?? [];
        list.push(topic.id);
        topicsByPilot.set(oid, list);
      }
      for (const q of [...topic.quiz, ...(topic.questionBank ?? [])]) {
        if (!q.objectiveId) continue;
        questionsByPilot.set(
          q.objectiveId,
          (questionsByPilot.get(q.objectiveId) ?? 0) + 1
        );
      }
    }
  }
  return { topicsByPilot, questionsByPilot };
}

function buildEntries(): PilotOfficialMappingEntry[] {
  const { topicsByPilot, questionsByPilot } = liveUsage();
  const draftById = new Map(DRAFT_MAPPINGS.map((d) => [d.pilotId, d]));
  const missingDraft = CCNA_OBJECTIVES.filter((o) => !draftById.has(o.id));
  if (missingDraft.length > 0) {
    throw new Error(
      `Missing pilot mapping drafts for: ${missingDraft.map((o) => o.id).join(", ")}`
    );
  }

  return CCNA_OBJECTIVES.map((pilot) => {
    const draft = draftById.get(pilot.id)!;
    for (const num of draft.officialNumbers) {
      if (!getCcnaV11OfficialLine(num)) {
        throw new Error(
          `Mapping for ${pilot.id} references unknown official number ${num}`
        );
      }
    }
    return {
      pilotId: pilot.id,
      pilotText: pilot.text,
      status: draft.status,
      officialIds: draft.officialNumbers.map(ccnaV11ObjectiveId),
      officialNumbers: draft.officialNumbers,
      notes: draft.notes,
      liveTopicIds: topicsByPilot.get(pilot.id) ?? [],
      liveQuestionCount: questionsByPilot.get(pilot.id) ?? 0,
    };
  });
}

export const CCNA_PILOT_TO_V11_MAPPINGS: PilotOfficialMappingEntry[] =
  buildEntries();

/** Operational alias: pilot ID remains the key used in live content/progress. */
export function resolveOfficialIdsForPilot(pilotId: string): string[] {
  return (
    CCNA_PILOT_TO_V11_MAPPINGS.find((m) => m.pilotId === pilotId)?.officialIds ??
    []
  );
}

/** Topics that currently provide indirect coverage for an official parent id. */
export function liveTopicsCoveringOfficialId(officialId: string): string[] {
  const topics = new Set<string>();
  for (const entry of CCNA_PILOT_TO_V11_MAPPINGS) {
    if (!entry.officialIds.includes(officialId)) continue;
    for (const topicId of entry.liveTopicIds) topics.add(topicId);
  }
  return [...topics].sort();
}

export function buildCcnaV11CoverageReport(): {
  officialParentId: string;
  officialNumber: string;
  officialText: string;
  coveringPilotIds: string[];
  coveringTopicIds: string[];
  hasLiveContent: boolean;
}[] {
  return listCcnaV11ParentObjectives().map((parent) => {
    const coveringPilotIds = CCNA_PILOT_TO_V11_MAPPINGS.filter((m) =>
      m.officialIds.includes(parent.id)
    ).map((m) => m.pilotId);
    const coveringTopicIds = liveTopicsCoveringOfficialId(parent.id);
    return {
      officialParentId: parent.id,
      officialNumber: parent.number,
      officialText: parent.text,
      coveringPilotIds,
      coveringTopicIds,
      hasLiveContent: coveringTopicIds.length > 0,
    };
  });
}

export function buildCcnaPilotMappingManifest(): {
  schemaVersion: 1;
  examCode: string;
  objectivesVersion: string;
  generatedFor: "pilot-to-official-alias-layer";
  note: string;
  mappings: PilotOfficialMappingEntry[];
  coverage: ReturnType<typeof buildCcnaV11CoverageReport>;
} {
  return {
    schemaVersion: 1,
    examCode: "200-301",
    objectivesVersion: "v1.1",
    generatedFor: "pilot-to-official-alias-layer",
    note:
      "Pilot CCNA-* IDs remain operational aliases for live content and persisted objectiveScores/objectiveAttempts. Do not silently rename.",
    mappings: CCNA_PILOT_TO_V11_MAPPINGS,
    coverage: buildCcnaV11CoverageReport(),
  };
}

export function assertCcnaPilotMappingComplete(): string[] {
  const errors: string[] = [];
  const mapped = new Set(CCNA_PILOT_TO_V11_MAPPINGS.map((m) => m.pilotId));
  for (const pilot of CCNA_OBJECTIVES) {
    if (!mapped.has(pilot.id)) {
      errors.push(`Pilot ${pilot.id} missing from mapping table`);
    }
  }
  if (CCNA_PILOT_TO_V11_MAPPINGS.length !== CCNA_OBJECTIVES.length) {
    errors.push(
      `Mapping count ${CCNA_PILOT_TO_V11_MAPPINGS.length} != pilot count ${CCNA_OBJECTIVES.length}`
    );
  }
  for (const entry of CCNA_PILOT_TO_V11_MAPPINGS) {
    if (entry.status === "unable to map" && entry.officialIds.length > 0) {
      errors.push(
        `${entry.pilotId}: unable to map must not list officialIds`
      );
    }
    if (entry.status !== "unable to map" && entry.officialIds.length === 0) {
      errors.push(
        `${entry.pilotId}: status ${entry.status} requires at least one official id`
      );
    }
  }
  return errors;
}
