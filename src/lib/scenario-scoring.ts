import type {
  ScenarioScoreCategory,
  ScenarioScoreDefinition,
  SecurityScenario,
} from "@/content/scenarios/types";

export interface ScenarioAttemptInput {
  /** Action ids chosen across phases */
  selectedActionIds: string[];
  /** Objective ids marked complete */
  completedObjectiveIds: string[];
  /** Evidence ids collected */
  collectedEvidenceIds: string[];
  /** Learner submitted an incident report */
  submittedReport: boolean;
  /** Optional 0–100 self/instructor technical understanding */
  technicalUnderstandingScore?: number;
}

export interface ScenarioCategoryScore {
  category: ScenarioScoreCategory;
  score: number;
  weight: number;
  notes: string[];
}

export interface ScenarioScoreResult {
  categories: ScenarioCategoryScore[];
  weightedTotal: number;
  passed: boolean;
  failReasons: string[];
}

const CATEGORY_LABELS: Record<ScenarioScoreCategory, string> = {
  technicalUnderstanding: "Technical understanding",
  objectiveCompletion: "Objective completion",
  scopeCompliance: "Scope compliance",
  evidenceCollection: "Evidence collection",
  detectionQuality: "Detection quality",
  containmentQuality: "Containment quality",
  remediationQuality: "Remediation quality",
  recoveryQuality: "Recovery quality",
  reportingQuality: "Reporting quality",
  professionalism: "Professionalism",
};

export function scenarioScoreCategoryLabel(
  category: ScenarioScoreCategory
): string {
  return CATEGORY_LABELS[category];
}

function clamp(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

function allActions(scenario: SecurityScenario) {
  return scenario.phases.flatMap((p) => p.availableActions);
}

function allObjectives(scenario: SecurityScenario) {
  return scenario.phases.flatMap((p) => p.objectives);
}

/**
 * Score a scenario attempt. Technical success alone is not enough:
 * scope violations / evidence destruction can force a fail.
 */
export function scoreScenarioAttempt(
  scenario: SecurityScenario,
  attempt: ScenarioAttemptInput
): ScenarioScoreResult {
  const model = scenario.scoringModel;
  const actions = allActions(scenario);
  const byAction = new Map(actions.map((a) => [a.id, a]));
  const selected = attempt.selectedActionIds
    .map((id) => byAction.get(id))
    .filter((a): a is NonNullable<typeof a> => a != null);

  const scopeViolations = selected.filter((a) => a.violatesScope);
  const evidenceDestroyed = selected.filter((a) => a.destroysEvidence);

  const requiredObjectives = allObjectives(scenario).filter((o) => o.required);
  const completedRequired = requiredObjectives.filter((o) =>
    attempt.completedObjectiveIds.includes(o.id)
  );
  const objectivePct =
    requiredObjectives.length === 0
      ? 100
      : (completedRequired.length / requiredObjectives.length) * 100;

  const evidenceTotal = scenario.evidence.length;
  const evidencePct =
    evidenceTotal === 0
      ? 100
      : (attempt.collectedEvidenceIds.length / evidenceTotal) * 100;

  const notesByCategory: Partial<Record<ScenarioScoreCategory, string[]>> = {};

  const push = (cat: ScenarioScoreCategory, note: string) => {
    notesByCategory[cat] = [...(notesByCategory[cat] ?? []), note];
  };

  if (scopeViolations.length > 0) {
    push(
      "scopeCompliance",
      `Out-of-scope actions: ${scopeViolations.map((a) => a.label).join(", ")}`
    );
  }
  if (evidenceDestroyed.length > 0) {
    push(
      "evidenceCollection",
      `Evidence destroyed via: ${evidenceDestroyed.map((a) => a.label).join(", ")}`
    );
    push("professionalism", "Destroying evidence is unprofessional and fails the exercise.");
  }
  if (!attempt.submittedReport) {
    push("reportingQuality", "No incident report submitted.");
  }

  const rawScores: Record<ScenarioScoreCategory, number> = {
    technicalUnderstanding: clamp(attempt.technicalUnderstandingScore ?? objectivePct),
    objectiveCompletion: clamp(objectivePct),
    scopeCompliance: scopeViolations.length === 0 ? 100 : 0,
    evidenceCollection:
      evidenceDestroyed.length > 0 ? 0 : clamp(evidencePct),
    detectionQuality: clamp(
      selected.some((a) => a.id.includes("alert") || a.id.includes("log"))
        ? 80 + evidencePct * 0.2
        : evidencePct
    ),
    containmentQuality: clamp(
      attempt.completedObjectiveIds.some((id) => id.includes("isolat"))
        ? 90
        : objectivePct * 0.5
    ),
    remediationQuality: clamp(
      attempt.completedObjectiveIds.some((id) => id.includes("patch") || id.includes("remediat"))
        ? 90
        : objectivePct * 0.5
    ),
    recoveryQuality: clamp(
      attempt.completedObjectiveIds.some((id) => id.includes("verify") || id.includes("reset"))
        ? 85
        : objectivePct * 0.4
    ),
    reportingQuality: attempt.submittedReport ? 100 : 20,
    professionalism:
      scopeViolations.length === 0 && evidenceDestroyed.length === 0
        ? attempt.submittedReport
          ? 100
          : 70
        : 0,
  };

  const categories: ScenarioCategoryScore[] = model.categories.map((category) => {
    const weight = model.weights[category] ?? 0;
    return {
      category,
      score: rawScores[category],
      weight,
      notes: notesByCategory[category] ?? [],
    };
  });

  const weightSum = categories.reduce((s, c) => s + c.weight, 0) || 1;
  const weightedTotal = clamp(
    categories.reduce((s, c) => s + c.score * c.weight, 0) / weightSum
  );

  const failReasons: string[] = [];
  if (model.failOnScopeViolation && scopeViolations.length > 0) {
    failReasons.push("Violated rules of engagement / scope.");
  }
  if (model.failOnEvidenceDestruction && evidenceDestroyed.length > 0) {
    failReasons.push("Destroyed or tampered with evidence.");
  }
  if (!attempt.submittedReport) {
    failReasons.push("Missing incident report.");
  }
  if (completedRequired.length < requiredObjectives.length) {
    failReasons.push("Required objectives incomplete.");
  }

  const passed = failReasons.length === 0 && weightedTotal >= 70;

  return { categories, weightedTotal, passed, failReasons };
}

export function defaultScoringModel(): ScenarioScoreDefinition {
  return {
    categories: [
      "technicalUnderstanding",
      "objectiveCompletion",
      "scopeCompliance",
      "evidenceCollection",
      "detectionQuality",
      "containmentQuality",
      "remediationQuality",
      "recoveryQuality",
      "reportingQuality",
      "professionalism",
    ],
    weights: {
      technicalUnderstanding: 0.1,
      objectiveCompletion: 0.15,
      scopeCompliance: 0.15,
      evidenceCollection: 0.1,
      detectionQuality: 0.1,
      containmentQuality: 0.1,
      remediationQuality: 0.1,
      recoveryQuality: 0.05,
      reportingQuality: 0.1,
      professionalism: 0.05,
    },
    failOnScopeViolation: true,
    failOnEvidenceDestruction: true,
  };
}
