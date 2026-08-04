/**
 * Orchestrator for `npm run verify:production`.
 */

import {
  runAllProductionValidators,
  summarizeIssues,
} from "@/lib/production/validators";
import { assertMasteryCompatibility } from "@/content/production/mastery-compatibility";
import { listAllSubjects } from "@/content/production/hierarchy";
import { listExamBlueprints } from "@/content/production/exam-blueprints";
import { listProductionSources } from "@/content/production/sources/catalog";
import { listTrackPrerequisiteGraphs } from "@/content/production/prerequisites/graph";
import { FRESHNESS_POLICIES } from "@/content/production/freshness";
import type { ProductionValidationIssue } from "@/content/production/types";

export interface ProductionVerifyResult {
  ok: boolean;
  issues: ProductionValidationIssue[];
  summary: { errors: number; warnings: number; infos: number };
  inventory: {
    subjects: number;
    sources: number;
    blueprints: number;
    prereqGraphs: number;
    freshnessClasses: number;
  };
  masteryErrors: string[];
}

export function verifyProductionArchitecture(): ProductionVerifyResult {
  const masteryErrors = assertMasteryCompatibility();
  const issues = runAllProductionValidators();
  const summary = summarizeIssues(issues);

  return {
    ok: summary.errors === 0 && masteryErrors.length === 0,
    issues,
    summary,
    inventory: {
      subjects: listAllSubjects().length,
      sources: listProductionSources().length,
      blueprints: listExamBlueprints().length,
      prereqGraphs: listTrackPrerequisiteGraphs().length,
      freshnessClasses: Object.keys(FRESHNESS_POLICIES).length,
    },
    masteryErrors,
  };
}
