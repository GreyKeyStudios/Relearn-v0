/**
 * Multi-phase security career scenarios (synthetic / lab-safe only).
 * Distinct from CaseStudyDefinition decision trees.
 *
 * SAFE SIMULATION BOUNDARY: scenarios must use fictional hosts, fake credentials,
 * synthetic logs, and predefined safe actions. Never include real malware,
 * credential-stealing tooling, destructive payloads, or unauthorized attack instructions.
 * See docs/ethical-hacking-architecture.md.
 */

import type { CertificationMapping } from "@/content/knowledge/types";
import type { LabEnvironmentRequirement } from "@/content/labs/types";

export type ScenarioRole = "red" | "blue" | "purple";

export type ScenarioDifficulty = "foundation" | "beginner" | "intermediate" | "advanced";

export interface ScenarioObjective {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

export interface ScenarioAction {
  id: string;
  label: string;
  /** Short outcome shown after selection — simulated only */
  outcome: string;
  /** Marks an unsafe / out-of-scope choice for scoring */
  violatesScope?: boolean;
  destroysEvidence?: boolean;
  advancesObjectiveIds?: string[];
  collectsEvidenceIds?: string[];
}

export interface ScenarioEvidence {
  id: string;
  title: string;
  kind: "log" | "alert" | "asset" | "note" | "artifact";
  summary: string;
}

export interface ScenarioPhase {
  id: string;
  role: ScenarioRole;
  title: string;
  briefing: string;
  objectives: ScenarioObjective[];
  availableActions: ScenarioAction[];
  evidenceIds: string[];
  completionHint: string;
}

export type ScenarioScoreCategory =
  | "technicalUnderstanding"
  | "objectiveCompletion"
  | "scopeCompliance"
  | "evidenceCollection"
  | "detectionQuality"
  | "containmentQuality"
  | "remediationQuality"
  | "recoveryQuality"
  | "reportingQuality"
  | "professionalism";

export interface ScenarioScoreDefinition {
  categories: ScenarioScoreCategory[];
  /** Weight 0–1; should sum ~1 */
  weights: Partial<Record<ScenarioScoreCategory, number>>;
  /** If true, scope violations force an overall fail despite technical wins */
  failOnScopeViolation: boolean;
  failOnEvidenceDestruction: boolean;
}

export interface ScenarioDebrief {
  summary: string;
  attackPathReplay: string[];
  defensiveControls: string[];
  lessonsLearned: string[];
}

export interface SecurityScenario {
  id: string;
  title: string;
  description: string;
  difficulty: ScenarioDifficulty;
  /** Knowledge node or topic-style prerequisite ids */
  prerequisites: string[];
  certificationMappings: CertificationMapping[];
  rulesOfEngagement: string[];
  prohibitedActions: string[];
  fictionalOrganization: string;
  environmentDescription: string;
  phases: ScenarioPhase[];
  evidence: ScenarioEvidence[];
  scoringModel: ScenarioScoreDefinition;
  debrief: ScenarioDebrief;
  /** Optional lab delivery metadata (web now / VM later) */
  labEnvironment?: LabEnvironmentRequirement;
}
