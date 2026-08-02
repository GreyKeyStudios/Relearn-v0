import type { KnowledgeNode } from "@/content/knowledge/types";
import {
  findPrerequisiteCycles,
  validateKnowledgeGraph,
  type KnowledgeGraphIssue,
} from "@/lib/knowledge-graph";

export type { KnowledgeGraphIssue };

export function verifyKnowledgeGraph(
  nodes: KnowledgeNode[]
): KnowledgeGraphIssue[] {
  return validateKnowledgeGraph(nodes);
}

export function verifyKnowledgeGraphCycles(
  nodes: KnowledgeNode[]
): KnowledgeGraphIssue[] {
  return findPrerequisiteCycles(nodes).map((cycle) => ({
    nodeId: cycle[0] ?? "cycle",
    message: `Circular prerequisites: ${cycle.join(" → ")}`,
  }));
}
