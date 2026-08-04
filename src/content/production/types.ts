/**
 * ReLearn Curriculum Production Architecture — authoring schemas.
 *
 * Parallel to the live Path A model (`src/content/types.ts`).
 * Production records guide research, quality control, and gap analysis.
 * They do NOT replace Certification/Topic at runtime and must not change
 * mastery scoring or SRS intervals.
 *
 * Hierarchy:
 *   Subject → Domain → Competency → Skill → Concept → AtomicLearningObjective
 */

import type { TopicDifficulty } from "@/content/types";
import type { MasteryLevel } from "@/types/mastery";

/** Subject families ReLearn may eventually teach. */
export type SubjectFamily =
  | "certification"
  | "mathematics"
  | "science"
  | "technology"
  | "music"
  | "language"
  | "history"
  | "philosophy"
  | "skill"
  | "tool"
  | "other";

export type CourseTemplate = "A" | "B" | "C" | "D";

/** Freshness classification — timeless vs review-required information. */
export type FreshnessClass =
  | "timeless"
  | "slow-changing"
  | "versioned"
  | "vendor-current"
  | "ephemeral";

export type CognitiveLoad = "low" | "moderate" | "high" | "very-high";

export type AssumedBackground =
  | "none"
  | "general-literacy"
  | "secondary-math"
  | "intro-it"
  | "prior-track"
  | "domain-experience";

/** Explanation layers every rich concept should eventually support. */
export type ExplanationLayer =
  | "intuitive"
  | "practical"
  | "technical"
  | "mathematical";

export type SourceKind =
  | "official-exam-objectives"
  | "official-vendor-docs"
  | "textbook"
  | "university"
  | "standards-body"
  | "peer-reviewed"
  | "reputable-education"
  | "internal-architecture"
  | "other";

export type SourceConfidence = "verified" | "needs-retrieval" | "placeholder";

/** Provenance record — never invent quotations, objective numbers, or citations. */
export interface SourceRecord {
  id: string;
  title: string;
  kind: SourceKind;
  /** Publisher / vendor / institution when known */
  publisher?: string;
  url?: string;
  /** Document or exam version string when applicable */
  version?: string;
  /**
   * UTC calendar date (YYYY-MM-DD) when the source was retrieved.
   * Date-of-record only — not a local wall-clock timestamp. Compare as strings
   * or at noon UTC (`T12:00:00Z`) to avoid timezone day-shift.
   */
  retrievedAt?: string;
  /**
   * UTC calendar date (YYYY-MM-DD) of the last live check.
   * Same semantics as `retrievedAt`.
   */
  lastCheckedAt?: string;
  confidence: SourceConfidence;
  notes?: string;
  /** Explicit flag when mixing versions is unavoidable */
  mixedVersionWarning?: string;
  /**
   * UTC calendar date (YYYY-MM-DD) by which this source/fact must be re-checked.
   * Estimated retirements must say "estimated" in notes/futureReviewReason —
   * never present them as officially confirmed cutover dates.
   */
  reviewBy?: string;
  /** Why a future review is required */
  futureReviewReason?: string;
  /** How the live retrieval was performed (e.g. exa, manual) */
  retrievalMethod?: "exa" | "manual" | "internal";
}

/** Explicit fact that must be re-verified later (version sunsets, estimated retirements, etc.). */
export interface FutureReviewFlag {
  id: string;
  subject: string;
  fact: string;
  sourceIds: string[];
  reviewBy: string;
  severity: "info" | "warning" | "critical";
  notes?: string;
}

export interface SubjectDefinition {
  id: string;
  name: string;
  family: SubjectFamily;
  template: CourseTemplate;
  /** Live Path A certification/track id when already registered */
  liveTrackId?: string;
  overview: string;
  sourceIds: string[];
  assumedBackground: AssumedBackground;
}

export interface DomainDefinition {
  id: string;
  subjectId: string;
  name: string;
  /** Live domain id when mapped */
  liveDomainId?: string;
  order: number;
  summary?: string;
}

export interface CompetencyDefinition {
  id: string;
  domainId: string;
  name: string;
  description: string;
  skillIds: string[];
}

export interface SkillDefinition {
  id: string;
  competencyId: string;
  name: string;
  description: string;
  conceptIds: string[];
  difficulty: TopicDifficulty;
  cognitiveLoad: CognitiveLoad;
}

export interface ConceptDefinition {
  id: string;
  skillId: string;
  name: string;
  summary: string;
  freshness: FreshnessClass;
  /** Review cadence hint in days when not timeless */
  reviewCadenceDays?: number;
  explanationLayers: Partial<Record<ExplanationLayer, string>>;
  atomicObjectiveIds: string[];
  misconceptionIds: string[];
  sourceIds: string[];
}

/** Smallest teachable / assessable unit. */
export interface AtomicLearningObjective {
  id: string;
  conceptId: string;
  statement: string;
  /** Bloom-ish verb for authoring clarity */
  verb:
    | "recognize"
    | "explain"
    | "calculate"
    | "configure"
    | "diagnose"
    | "compare"
    | "apply"
    | "create";
  difficulty: TopicDifficulty;
  cognitiveLoad: CognitiveLoad;
  assumedBackground: AssumedBackground;
  freshness: FreshnessClass;
  /** Official exam objective ids when certification-aligned */
  examObjectiveIds?: string[];
  prerequisiteAtomicIds: string[];
  sourceIds: string[];
}

/**
 * Prerequisite graph edge. Nodes may be atomic objectives, concepts,
 * skills, topics (live), or knowledge-DNA nodes.
 */
export type PrereqNodeKind =
  | "atomic"
  | "concept"
  | "skill"
  | "competency"
  | "live-topic"
  | "knowledge-node";

export interface PrereqNodeRef {
  kind: PrereqNodeKind;
  id: string;
  /** For live-topic: certId:topicId */
  liveTrackId?: string;
}

export type PrereqEdgeStrength = "required" | "recommended" | "helpful";

export interface PrereqEdge {
  id: string;
  from: PrereqNodeRef;
  to: PrereqNodeRef;
  strength: PrereqEdgeStrength;
  rationale?: string;
}

export interface PrerequisiteGraph {
  id: string;
  subjectId: string;
  nodes: PrereqNodeRef[];
  edges: PrereqEdge[];
}

export interface ExplanationBundle {
  intuitive?: string;
  practical?: string;
  technical?: string;
  mathematical?: string;
}

export interface ExampleSpec {
  id: string;
  title: string;
  steps: string[];
  layer?: ExplanationLayer;
  sourceIds?: string[];
}

export interface FlashcardSpec {
  id: string;
  front: string;
  back: string;
  atomicObjectiveIds?: string[];
  freshness?: FreshnessClass;
}

export interface QuizItemSpec {
  id: string;
  prompt: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  explanation: string;
  difficulty?: TopicDifficulty;
  atomicObjectiveIds?: string[];
  examObjectiveId?: string;
  misconceptionIds?: string[];
}

export interface DiagnosticItemSpec {
  id: string;
  prompt: string;
  purpose: "placement" | "pretest" | "formative" | "summative";
  atomicObjectiveIds: string[];
  choices?: { id: string; text: string }[];
  correctChoiceId?: string;
  scoringNote?: string;
}

export interface MisconceptionRecord {
  id: string;
  statement: string;
  /** Why learners believe it */
  whyItAppears: string;
  /** Correct model */
  correction: string;
  diagnosticSignals: string[];
  remediationActivityIds: string[];
  relatedAtomicIds: string[];
  sourceIds?: string[];
}

export interface RemediationActivity {
  id: string;
  title: string;
  kind: "re-teach" | "worked-example" | "drill" | "lab" | "reflection";
  instructions: string;
  targetMisconceptionIds: string[];
  atomicObjectiveIds: string[];
  estimatedMinutes: number;
}

export interface SimulatorSpec {
  id: string;
  name: string;
  /** Live simulator registry id when implemented */
  liveSimulatorId?: string;
  status: "live" | "planned" | "spec-only";
  learningGoals: string[];
  atomicObjectiveIds: string[];
  interactionSummary: string;
  autoGradeHints?: string[];
}

export interface LessonProductionSpec {
  id: string;
  /** Live topic id when mapped */
  liveTopicId?: string;
  liveTrackId?: string;
  title: string;
  atomicObjectiveIds: string[];
  explanations: ExplanationBundle;
  examples: ExampleSpec[];
  flashcards: FlashcardSpec[];
  quiz: QuizItemSpec[];
  diagnostics?: DiagnosticItemSpec[];
  misconceptionIds: string[];
  remediationIds: string[];
  simulatorIds: string[];
  sourceIds: string[];
  difficulty: TopicDifficulty;
  cognitiveLoad: CognitiveLoad;
  assumedBackground: AssumedBackground;
  freshness: FreshnessClass;
  estimatedStudyMinutes?: number;
}

/**
 * Maps a track to one official exam blueprint version.
 * One blueprint = one exam version. Never silently attach v2 objectives to a v1 track.
 */
export interface ExamBlueprint {
  id: string;
  trackId: string;
  vendor: string;
  examName: string;
  examCodes: string[];
  /** Document version from first-party objectives */
  objectivesVersion: string;
  /** UTC calendar date YYYY-MM-DD (date-of-record) */
  retrievedAt: string;
  /** UTC calendar date YYYY-MM-DD (date-of-record) */
  lastCheckedAt?: string;
  sourceIds: string[];
  /**
   * Domain entries may carry weights with `objectives: []`.
   * Empty objective arrays mean "not yet mapped" — never treat weights as a
   * complete objectives document.
   */
  domains: ExamBlueprintDomain[];
  /** Set when any objective text mixes versions */
  mixedVersionWarning?: string;
  confidence: SourceConfidence;
  notes?: string;
}

export interface ExamBlueprintDomain {
  id: string;
  name: string;
  /** Exam weight percent when published as a single number (not a range). */
  weightPercent?: number;
  /**
   * Official objective line items. Empty until a PDF/line mapping batch.
   * Domain weights alone are NOT a substitute for this array.
   */
  objectives: ExamBlueprintObjective[];
}

export interface ExamBlueprintObjective {
  id: string;
  text: string;
  /** Live topic ids that claim coverage */
  coveredByTopicIds: string[];
  freshness: FreshnessClass;
}

/**
 * How a live/pilot objective ID relates to an official exam-objectives line.
 * Used by migration layers — never silently rename persisted pilot IDs.
 */
export type PilotMappingStatus =
  | "exact match"
  | "partial match"
  | "combines multiple official objectives"
  | "narrower than official objective"
  | "broader than official objective"
  | "obsolete"
  | "unable to map";

/** One numbered line (parent or sub-bullet) from an official exam-topics document. */
export interface OfficialExamObjectiveLine {
  /** Stable production id, e.g. `200-301-v1.1/1.1` */
  id: string;
  examCode: string;
  objectivesVersion: string;
  /** Cisco numbering as published, e.g. `1.1` or `1.1.a` */
  number: string;
  text: string;
  domainNumber: string;
  domainName: string;
  domainWeightPercent: number;
  /** Parent objective number when this is a sub-bullet */
  parentNumber?: string;
  /** 1 = parent objective, 2 = sub-bullet */
  depth: 1 | 2;
  /** 1-based page in the official PDF */
  pdfPage: number;
  sourceId: string;
}

export interface PilotOfficialMappingEntry {
  pilotId: string;
  pilotText: string;
  status: PilotMappingStatus;
  /** Official production ids (may be empty when unable to map) */
  officialIds: string[];
  /** Official numbers for human tables */
  officialNumbers: string[];
  notes: string;
  /**
   * Live topic ids currently tagging this pilot ID.
   * Progress/quiz tags keep using `pilotId` until an explicit content remap batch.
   */
  liveTopicIds: string[];
  liveQuestionCount: number;
}

/**
 * Assessment / mastery requirements for production content.
 * Must stay compatible with `src/lib/mastery-thresholds.ts` and SRS intervals.
 */
export interface MasteryRequirementSpec {
  quizPassPercent: number;
  srsAdvancePercent: number;
  weakClearPercent: number;
  objectiveWeakPercent: number;
  objectiveMinAttempts: number;
  /** Canonical SRS interval ladder in days */
  srsIntervalDays: number[];
  scoreToLevel: { minScore: number; level: MasteryLevel }[];
  notes: string;
}

export interface ProductionValidationIssue {
  code: string;
  severity: "error" | "warning" | "info";
  trackId?: string;
  topicId?: string;
  entityId?: string;
  message: string;
}

export interface TrackGapSummary {
  trackId: string;
  trackName: string;
  kind: "certification" | "skills" | "planned";
  topicCount: number;
  domainCount: number;
  topicsWithObjectives: number;
  topicsWithPrerequisites: number;
  topicsWithExperience: number;
  topicsFullCes: number;
  topicsStandardCes: number;
  topicsMinimalCes: number;
  quizQuestionCount: number;
  bankQuestionCount: number;
  flashcardCount: number;
  questionsMissingObjectiveId: number;
  questionsMissingDifficulty: number;
  questionsMissingExplanation: number;
  invalidCorrectChoiceCount: number;
  duplicateQuestionIdCount: number;
  brokenPrerequisiteCount: number;
  missingSourceBlueprint: boolean;
  uncoveredBlueprintObjectives: string[];
  freshnessCoverage: Partial<Record<FreshnessClass, number>>;
  notes: string[];
}
