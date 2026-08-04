/**
 * Pilot CCNA-* IDs → both official versions (alias layer only).
 * Does not rename live/persisted keys.
 */

import { CCNA_OBJECTIVES } from "@/content/objectives/ccna";
import { CCNA_PILOT_TO_V11_MAPPINGS } from "../mappings/ccna-pilot-to-v1.1";
import type {
  PilotDualVersionMappingEntry,
  PilotMappingStatus,
} from "../types";
import {
  ccnaV20ObjectiveId,
  getCcnaV20OfficialLine,
} from "../objectives/ccna-200-301-v2.0";
import { CCNA_V11_V20_COMPARISON_EDGES } from "./comparison";

type V20Draft = {
  status: PilotMappingStatus;
  officialNumbers: string[];
  notes: string;
};

/**
 * Derive v2.0 pilot mappings via v1.1 alias → comparison edges when honest.
 * If v1.1 is unable to map, or no trustworthy edge exists, keep unable to map.
 */
function deriveV20FromV11(pilotId: string): V20Draft {
  const v11 = CCNA_PILOT_TO_V11_MAPPINGS.find((m) => m.pilotId === pilotId);
  if (!v11) {
    return {
      status: "unable to map",
      officialNumbers: [],
      notes: "Missing v1.1 pilot mapping.",
    };
  }
  if (v11.status === "unable to map" || v11.officialNumbers.length === 0) {
    return {
      status: "unable to map",
      officialNumbers: [],
      notes: `No v1.1 official home (${v11.notes}) — refusing to invent a v2.0 mapping.`,
    };
  }

  const v20Numbers = new Set<string>();
  const edgeNotes: string[] = [];
  for (const num of v11.officialNumbers) {
    const edges = CCNA_V11_V20_COMPARISON_EDGES.filter(
      (e) => e.v11Number === num && e.confidence !== "low"
    );
    for (const edge of edges) {
      v20Numbers.add(edge.v20Number);
      edgeNotes.push(
        `via v1.1 ${num}→v2.0 ${edge.v20Number} (${edge.relationship}, ${edge.confidence})`
      );
    }
  }

  if (v20Numbers.size === 0) {
    return {
      status: "unable to map",
      officialNumbers: [],
      notes: `v1.1 aliases [${v11.officialNumbers.join(", ")}] have no medium/high-confidence v2.0 edge.`,
    };
  }

  const nums = [...v20Numbers].sort();
  let status: PilotMappingStatus =
    nums.length > 1
      ? "combines multiple official objectives"
      : "partial match";
  // If the pilot was an exact match on v1.1 and a single high-confidence unchanged/wording edge exists, keep closer status.
  if (
    nums.length === 1 &&
    v11.status === "exact match" &&
    CCNA_V11_V20_COMPARISON_EDGES.some(
      (e) =>
        e.v11Number === v11.officialNumbers[0] &&
        e.v20Number === nums[0] &&
        e.confidence === "high" &&
        (e.relationship === "unchanged" ||
          e.relationship === "wording changed only")
    )
  ) {
    status = "exact match";
  } else if (
    nums.length === 1 &&
    CCNA_V11_V20_COMPARISON_EDGES.some(
      (e) =>
        e.v11Number === v11.officialNumbers[0] &&
        e.v20Number === nums[0] &&
        e.relationship === "requires greater practical depth"
    )
  ) {
    status = "narrower than official objective";
  }

  return {
    status,
    officialNumbers: nums,
    notes: `Derived from v1.1 alias status (${v11.status}). ${edgeNotes.join("; ")}`,
  };
}

function buildDual(): PilotDualVersionMappingEntry[] {
  return CCNA_OBJECTIVES.map((pilot) => {
    const v11 = CCNA_PILOT_TO_V11_MAPPINGS.find((m) => m.pilotId === pilot.id);
    if (!v11) {
      throw new Error(`Missing v1.1 mapping for ${pilot.id}`);
    }
    const v20 = deriveV20FromV11(pilot.id);
    for (const num of v20.officialNumbers) {
      if (!getCcnaV20OfficialLine(num)) {
        throw new Error(`Bad v2.0 number ${num} for ${pilot.id}`);
      }
    }
    return {
      pilotId: pilot.id,
      pilotText: pilot.text,
      v11: {
        status: v11.status,
        officialIds: v11.officialIds,
        officialNumbers: v11.officialNumbers,
        notes: v11.notes,
      },
      v20: {
        status: v20.status,
        officialIds: v20.officialNumbers.map(ccnaV20ObjectiveId),
        officialNumbers: v20.officialNumbers,
        notes: v20.notes,
      },
      liveTopicIds: v11.liveTopicIds,
      liveQuestionCount: v11.liveQuestionCount,
    };
  });
}

export const CCNA_PILOT_DUAL_VERSION_MAPPINGS: PilotDualVersionMappingEntry[] =
  buildDual();

export function buildPilotDualVersionManifest(): {
  schemaVersion: 1;
  examCode: "200-301";
  note: string;
  mappings: PilotDualVersionMappingEntry[];
} {
  return {
    schemaVersion: 1,
    examCode: "200-301",
    note:
      "Pilot CCNA-* IDs remain operational aliases for live content and persisted progress. " +
      "v2.0 links are derived only through medium/high-confidence v1.1→v2.0 edges — never invented.",
    mappings: CCNA_PILOT_DUAL_VERSION_MAPPINGS,
  };
}
