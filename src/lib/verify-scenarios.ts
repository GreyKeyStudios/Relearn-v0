import type { SecurityScenario } from "@/content/scenarios/types";
import { scoreScenarioAttempt } from "@/lib/scenario-scoring";

export interface ScenarioVerificationIssue {
  scenarioId: string;
  message: string;
}

export function verifyScenario(scenario: SecurityScenario): ScenarioVerificationIssue[] {
  const issues: ScenarioVerificationIssue[] = [];
  const evidenceIds = new Set(scenario.evidence.map((e) => e.id));
  const actionIds = new Set<string>();
  const objectiveIds = new Set<string>();

  if (scenario.phases.length === 0) {
    issues.push({ scenarioId: scenario.id, message: "Scenario has no phases" });
  }

  for (const phase of scenario.phases) {
    for (const obj of phase.objectives) {
      if (objectiveIds.has(obj.id)) {
        issues.push({
          scenarioId: scenario.id,
          message: `Duplicate objective id: ${obj.id}`,
        });
      }
      objectiveIds.add(obj.id);
    }
    for (const action of phase.availableActions) {
      if (actionIds.has(action.id)) {
        issues.push({
          scenarioId: scenario.id,
          message: `Duplicate action id: ${action.id}`,
        });
      }
      actionIds.add(action.id);
      for (const eid of action.collectsEvidenceIds ?? []) {
        if (!evidenceIds.has(eid)) {
          issues.push({
            scenarioId: scenario.id,
            message: `Action ${action.id} references unknown evidence ${eid}`,
          });
        }
      }
      for (const oid of action.advancesObjectiveIds ?? []) {
        if (!objectiveIds.has(oid) && !phase.objectives.some((o) => o.id === oid)) {
          // allow forward refs within same scenario — check after loop
        }
      }
    }
    for (const eid of phase.evidenceIds) {
      if (!evidenceIds.has(eid)) {
        issues.push({
          scenarioId: scenario.id,
          message: `Phase ${phase.id} references unknown evidence ${eid}`,
        });
      }
    }
  }

  // Second pass: objective refs on actions
  for (const phase of scenario.phases) {
    for (const action of phase.availableActions) {
      for (const oid of action.advancesObjectiveIds ?? []) {
        if (!objectiveIds.has(oid)) {
          issues.push({
            scenarioId: scenario.id,
            message: `Action ${action.id} advances unknown objective ${oid}`,
          });
        }
      }
    }
  }

  const weightSum = scenario.scoringModel.categories.reduce(
    (s, c) => s + (scenario.scoringModel.weights[c] ?? 0),
    0
  );
  if (Math.abs(weightSum - 1) > 0.05) {
    issues.push({
      scenarioId: scenario.id,
      message: `Scoring weights sum to ${weightSum.toFixed(2)} (expected ~1.0)`,
    });
  }

  // Smoke: scoring pure function does not throw
  try {
    scoreScenarioAttempt(scenario, {
      selectedActionIds: [],
      completedObjectiveIds: [],
      collectedEvidenceIds: [],
      submittedReport: false,
    });
  } catch (err) {
    issues.push({
      scenarioId: scenario.id,
      message: `scoreScenarioAttempt threw: ${err instanceof Error ? err.message : String(err)}`,
    });
  }

  return issues;
}

export function verifyScenarios(
  scenarios: SecurityScenario[]
): ScenarioVerificationIssue[] {
  return scenarios.flatMap(verifyScenario);
}
