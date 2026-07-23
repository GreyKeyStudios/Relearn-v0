/** Shared schemas for CCNA evidence capture + AI judgment (no Playwright imports). */

export const LEARNER_PERSONA =
  "Adult beginner studying CCNA; weak arithmetic foundations; limited working memory when stressed; wants to understand rather than memorize; studying on a phone-sized screen.";

export const PILOT_TOPIC_IDS = ["subnetting", "osi-model", "switching"] as const;

export type PilotTopicId = (typeof PILOT_TOPIC_IDS)[number];

export type CheckpointId =
  | "first-screen"
  | "first-explanation"
  | "first-interaction"
  | "first-incorrect-feedback"
  | "practice-hub"
  | "quiz-question"
  | "quiz-explanation"
  | "completion-next";

export const ALL_CHECKPOINTS: CheckpointId[] = [
  "first-screen",
  "first-explanation",
  "first-interaction",
  "first-incorrect-feedback",
  "practice-hub",
  "quiz-question",
  "quiz-explanation",
  "completion-next",
];

export type EvidenceCheckpoint = {
  topicId: string;
  topicTitle: string;
  domainName: string;
  checkpoint: CheckpointId;
  stepNumber: number;
  totalWalkSteps: number;
  viewport: "390x844";
  url: string;
  learnerPersona: string;
  previousAction: string;
  visibleText: string;
  buttons: string[];
  screenshotRelPath: string;
};

export type EvidenceManifest = {
  topicId: string;
  topicTitle: string;
  domainName: string;
  capturedAt: string;
  totalWalkSteps: number;
  checkpoints: EvidenceCheckpoint[];
  missingCheckpoints: CheckpointId[];
};

export type FindingSeverity = "blocker" | "high" | "medium" | "low";

export type FindingCategory =
  | "bug"
  | "flow"
  | "clarity"
  | "clutter"
  | "pedagogy"
  | "feedback"
  | "prerequisite"
  | "pacing";

export type LessonFinding = {
  lessonId: string;
  checkpoint: string;
  severity: FindingSeverity;
  category: FindingCategory;
  observation: string;
  learnerImpact: string;
  recommendation: string;
  evidence: string;
  confidence: number;
};

export type LessonJudgment = {
  lessonId: string;
  lessonTitle: string;
  persona: string;
  model: string;
  findings: LessonFinding[];
  lessonSummary: string;
};
