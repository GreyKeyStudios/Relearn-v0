/**
 * Career path compositions — reference existing tracks/topics; do not duplicate lessons.
 */

export type CareerPathStatus = "planned" | "early" | "active";

export interface CareerPathPhase {
  id: string;
  title: string;
  summary: string;
  /** Track ids (certs or planned-track ids) that feed this phase */
  trackIds: string[];
  /** Knowledge node ids for this phase */
  knowledgeNodeIds: string[];
  status: CareerPathStatus;
}

export interface CareerPathDefinition {
  id: string;
  shortName: string;
  name: string;
  tagline: string;
  overview: string;
  status: CareerPathStatus;
  phases: CareerPathPhase[];
  /** Demo scenario ids */
  scenarioIds: string[];
  /** Sample knowledge node for Knowledge DNA on the overview page */
  featuredKnowledgeNodeId: string;
  /** Sample perspective set id */
  featuredPerspectiveId: string;
}
