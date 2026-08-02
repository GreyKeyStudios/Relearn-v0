/**
 * Lesson perspective blocks — Neutral / Red / Blue / Purple.
 * Content must stay conceptual and lab-safe (see docs/ethical-hacking-architecture.md).
 */

export type PerspectiveMode = "neutral" | "red" | "blue" | "purple";

export interface PerspectiveBlock {
  mode: PerspectiveMode;
  title: string;
  /** Educational body — no operational exploit steps */
  body: string;
  bullets?: string[];
}

export interface PerspectiveSet {
  id: string;
  title: string;
  /** Optional link into live curriculum */
  topicRef?: { certId: string; topicId: string };
  knowledgeNodeId?: string;
  blocks: PerspectiveBlock[];
}

export const PERSPECTIVE_MODE_LABELS: Record<PerspectiveMode, string> = {
  neutral: "Neutral",
  red: "Red Team",
  blue: "Blue Team",
  purple: "Purple Team",
};
