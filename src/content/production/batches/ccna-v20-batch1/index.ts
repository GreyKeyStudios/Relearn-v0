/**
 * CCNA v2.0 bounded curriculum-production batch 1.
 *
 * Specifications only — does not rewrite live v1.1 lessons, quizzes,
 * simulators, progress keys, mastery thresholds, or SRS intervals.
 */

import type { ContentProductionBatch } from "../../types";
import {
  CCNA_V20_BATCH1_DEFERRED,
  CCNA_V20_BATCH1_SELECTION,
} from "./selection";
import { CCNA_V20_BATCH1_UNITS } from "./units";
import {
  CCNA_V20_BATCH1_MISCONCEPTIONS,
  CCNA_V20_BATCH1_REMEDIATIONS,
} from "./misconceptions";
import { CCNA_V20_BATCH1_SIMULATORS } from "./simulators";

export {
  CCNA_V20_BATCH1_SELECTION,
  CCNA_V20_BATCH1_DEFERRED,
} from "./selection";
export { CCNA_V20_BATCH1_UNITS } from "./units";
export {
  CCNA_V20_BATCH1_MISCONCEPTIONS,
  CCNA_V20_BATCH1_REMEDIATIONS,
} from "./misconceptions";
export { CCNA_V20_BATCH1_SIMULATORS } from "./simulators";

export const CCNA_V20_BATCH1_ID = "ccna-v20-batch1-p0-depth";
export const CCNA_V20_BATCH1_MAX_PARENTS = 8;

export const CCNA_V20_BATCH1: ContentProductionBatch = {
  id: CCNA_V20_BATCH1_ID,
  title:
    "CCNA v2.0 P0 depth batch — troubleshoot elevation, new L2/L3 parent, OSPFv3, AI prompts",
  trackId: "ccna",
  objectivesVersion: "v2.0",
  maxParents: CCNA_V20_BATCH1_MAX_PARENTS,
  selectedOfficialNumbers: CCNA_V20_BATCH1_SELECTION.map(
    (s) => s.officialNumber
  ),
  units: CCNA_V20_BATCH1_UNITS,
  misconceptionRecords: CCNA_V20_BATCH1_MISCONCEPTIONS,
  remediationActivities: CCNA_V20_BATCH1_REMEDIATIONS,
  simulatorSpecs: CCNA_V20_BATCH1_SIMULATORS,
  notes:
    "Selected from transition manifest + V20 gap report + production sequence. " +
    "Prefer complete specifications over mass-generated prose. " +
    "Live Path A and pilot progress keys remain unchanged. " +
    `Deferred: ${CCNA_V20_BATCH1_DEFERRED.map((d) => d.officialNumber).join(", ")}.`,
};

export function assertCcnaV20Batch1Integrity(): string[] {
  const errors: string[] = [];
  const batch = CCNA_V20_BATCH1;

  if (batch.selectedOfficialNumbers.length > batch.maxParents) {
    errors.push(
      `Batch selects ${batch.selectedOfficialNumbers.length} > max ${batch.maxParents}`
    );
  }
  if (batch.units.length !== batch.selectedOfficialNumbers.length) {
    errors.push(
      `Unit count ${batch.units.length} != selection ${batch.selectedOfficialNumbers.length}`
    );
  }

  const seen = new Set<string>();
  for (const unit of batch.units) {
    if (unit.objectivesVersion !== "v2.0") {
      errors.push(`${unit.officialNumber}: objectivesVersion must be v2.0`);
    }
    if (!unit.officialObjectiveId.startsWith("200-301-v2.0/")) {
      errors.push(`${unit.officialNumber}: bad official id namespace`);
    }
    if (unit.officialObjectiveId.includes("v1.1")) {
      errors.push(`${unit.officialNumber}: v1.1 id leaked into unit`);
    }
    if (seen.has(unit.officialNumber)) {
      errors.push(`Duplicate unit for ${unit.officialNumber}`);
    }
    seen.add(unit.officialNumber);

    if (!batch.selectedOfficialNumbers.includes(unit.officialNumber)) {
      errors.push(`${unit.officialNumber} not in selection list`);
    }

    for (const a of unit.atomicObjectives) {
      for (const eid of a.examObjectiveIds ?? []) {
        if (!eid.startsWith("200-301-v2.0/")) {
          errors.push(`${a.id}: examObjectiveId not v2.0 namespaced`);
        }
      }
    }

    const quiz = unit.lessonSpec.quiz;
    for (const q of quiz) {
      if (!q.choices.some((c) => c.id === q.correctChoiceId)) {
        errors.push(`${q.id}: correctChoiceId not in choices`);
      }
      if (q.examObjectiveId && !q.examObjectiveId.startsWith("200-301-v2.0/")) {
        errors.push(`${q.id}: examObjectiveId not v2.0`);
      }
    }

    for (const mid of unit.misconceptionIds) {
      if (!batch.misconceptionRecords.some((m) => m.id === mid)) {
        errors.push(`${unit.officialNumber}: missing misconception ${mid}`);
      }
    }
    for (const rid of unit.remediationIds) {
      if (!batch.remediationActivities.some((r) => r.id === rid)) {
        errors.push(`${unit.officialNumber}: missing remediation ${rid}`);
      }
    }
    for (const sid of unit.simulatorSpecIds) {
      if (!batch.simulatorSpecs.some((s) => s.id === sid)) {
        errors.push(`${unit.officialNumber}: missing simulator spec ${sid}`);
      }
    }

    // Mastery must stay compatible — thresholds already asserted globally.
    if (unit.masteryEvidence.srsAdvancePercent !== 80) {
      errors.push(`${unit.officialNumber}: SRS advance must remain 80%`);
    }
  }

  for (const num of batch.selectedOfficialNumbers) {
    if (!seen.has(num)) errors.push(`Selection ${num} missing unit`);
  }

  return errors;
}
