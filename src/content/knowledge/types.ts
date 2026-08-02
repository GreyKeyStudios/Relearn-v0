/**
 * Knowledge DNA — reusable cross-track concept graph.
 * Completion for nodes with topicRef uses existing mastery (no second progression system).
 */

/** Soft exam/track mapping — do not claim official endorsement unless confidence is verified. */
export type CertificationFamily =
  | "security-plus"
  | "network-plus"
  | "ccna"
  | "linux-plus"
  | "cysa-plus"
  | "a-plus"
  | "computer-fundamentals"
  | "ejpt"
  | "pnpt"
  | "oscp"
  | "other";

export interface CertificationMapping {
  certFamily: CertificationFamily;
  /** Optional exam version label, e.g. "SY0-701" — keeps mappings modular when exams change */
  examVersion?: string;
  /** Soft objective ids — conceptual until verified against published objectives */
  objectiveIds?: string[];
  confidence: "conceptual" | "verified";
  note?: string;
}

export type KnowledgeDifficulty =
  | "foundation"
  | "beginner"
  | "intermediate"
  | "advanced";

export type KnowledgeNodeStatus = "live" | "partial" | "planned";

export interface TopicRef {
  certId: string;
  topicId: string;
}

export interface KnowledgeLabRef {
  id: string;
  title: string;
  /** When true, Knowledge DNA shows the lab as locked until required prereqs complete */
  requiresPrerequisites: boolean;
  href?: string;
}

/**
 * One concept in the reusable dependency graph.
 * Links may point at other KnowledgeNode ids (not raw topic ids).
 */
export interface KnowledgeNode {
  id: string;
  title: string;
  description: string;
  domain: string;
  difficulty: KnowledgeDifficulty;
  status: KnowledgeNodeStatus;
  /** When set, learner completion is derived from existing topic mastery */
  topicRef?: TopicRef;
  prerequisites: string[];
  recommendedPrerequisites: string[];
  relatedConcepts: string[];
  redTeamConnections: string[];
  blueTeamConnections: string[];
  remediationConnections: string[];
  certificationMappings: CertificationMapping[];
  labs: KnowledgeLabRef[];
}
