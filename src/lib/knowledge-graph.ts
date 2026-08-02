import { getCertification } from "@/content/registry";
import type { KnowledgeNode } from "@/content/knowledge/types";
import { getTopicMastery } from "@/lib/mastery";
import type { ProgressState } from "@/types/progress";

export interface KnowledgeGraphIssue {
  nodeId: string;
  message: string;
}

export function indexKnowledgeNodes(
  nodes: KnowledgeNode[]
): Map<string, KnowledgeNode> {
  return new Map(nodes.map((n) => [n.id, n]));
}

export function getKnowledgeNode(
  nodes: KnowledgeNode[],
  id: string
): KnowledgeNode | undefined {
  return nodes.find((n) => n.id === id);
}

/** Detect cycles among prerequisite edges (required only). */
export function findPrerequisiteCycles(nodes: KnowledgeNode[]): string[][] {
  const byId = indexKnowledgeNodes(nodes);
  const cycles: string[][] = [];
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const stack: string[] = [];

  function dfs(id: string) {
    if (visiting.has(id)) {
      const start = stack.indexOf(id);
      cycles.push(stack.slice(start).concat(id));
      return;
    }
    if (visited.has(id)) return;
    const node = byId.get(id);
    if (!node) return;
    visiting.add(id);
    stack.push(id);
    for (const pre of node.prerequisites) {
      dfs(pre);
    }
    stack.pop();
    visiting.delete(id);
    visited.add(id);
  }

  for (const node of nodes) {
    dfs(node.id);
  }
  return cycles;
}

export function validateKnowledgeGraph(nodes: KnowledgeNode[]): KnowledgeGraphIssue[] {
  const issues: KnowledgeGraphIssue[] = [];
  const byId = indexKnowledgeNodes(nodes);

  for (const node of nodes) {
    const linkFields: (keyof KnowledgeNode)[] = [
      "prerequisites",
      "recommendedPrerequisites",
      "relatedConcepts",
      "redTeamConnections",
      "blueTeamConnections",
      "remediationConnections",
    ];
    for (const field of linkFields) {
      const ids = node[field] as string[];
      for (const id of ids) {
        if (!byId.has(id)) {
          issues.push({
            nodeId: node.id,
            message: `Unknown ${String(field)} reference: ${id}`,
          });
        }
      }
    }

    if (node.topicRef) {
      const cert = getCertification(node.topicRef.certId);
      if (!cert) {
        issues.push({
          nodeId: node.id,
          message: `Unknown certId in topicRef: ${node.topicRef.certId}`,
        });
      } else {
        const topic = cert.domains
          .flatMap((d) => d.topics)
          .find((t) => t.id === node.topicRef!.topicId);
        if (!topic) {
          issues.push({
            nodeId: node.id,
            message: `Unknown topicId in topicRef: ${node.topicRef.certId}/${node.topicRef.topicId}`,
          });
        }
      }
    }
  }

  for (const cycle of findPrerequisiteCycles(nodes)) {
    issues.push({
      nodeId: cycle[0] ?? "cycle",
      message: `Circular prerequisites: ${cycle.join(" → ")}`,
    });
  }

  return issues;
}

export function isKnowledgeNodeComplete(
  node: KnowledgeNode,
  state: ProgressState
): boolean {
  if (!node.topicRef) return false;
  const mastery = getTopicMastery(
    state,
    node.topicRef.certId,
    node.topicRef.topicId
  );
  return mastery.level === "proficient" || mastery.level === "mastered";
}

export function resolveLinkedNodes(
  nodes: KnowledgeNode[],
  ids: string[]
): KnowledgeNode[] {
  const byId = indexKnowledgeNodes(nodes);
  return ids
    .map((id) => byId.get(id))
    .filter((n): n is KnowledgeNode => n != null);
}

export interface KnowledgeDnaViewModel {
  node: KnowledgeNode;
  required: { node: KnowledgeNode; complete: boolean }[];
  recommended: { node: KnowledgeNode; complete: boolean }[];
  redTeam: KnowledgeNode[];
  blueTeam: KnowledgeNode[];
  remediation: KnowledgeNode[];
  labs: {
    id: string;
    title: string;
    href?: string;
    locked: boolean;
    lockReason?: string;
  }[];
  missingRequired: KnowledgeNode[];
}

export function buildKnowledgeDnaView(
  nodes: KnowledgeNode[],
  nodeId: string,
  state: ProgressState
): KnowledgeDnaViewModel | null {
  const node = getKnowledgeNode(nodes, nodeId);
  if (!node) return null;

  const required = resolveLinkedNodes(nodes, node.prerequisites).map((n) => ({
    node: n,
    complete: isKnowledgeNodeComplete(n, state),
  }));
  const recommended = resolveLinkedNodes(
    nodes,
    node.recommendedPrerequisites
  ).map((n) => ({
    node: n,
    complete: isKnowledgeNodeComplete(n, state),
  }));
  const missingRequired = required.filter((r) => !r.complete).map((r) => r.node);
  const requiredComplete = missingRequired.length === 0;

  const labs = node.labs.map((lab) => {
    const locked = lab.requiresPrerequisites && !requiredComplete;
    return {
      id: lab.id,
      title: lab.title,
      href: lab.href,
      locked,
      lockReason: locked
        ? `Complete required prerequisites first: ${missingRequired.map((m) => m.title).join(", ")}`
        : undefined,
    };
  });

  return {
    node,
    required,
    recommended,
    redTeam: resolveLinkedNodes(nodes, node.redTeamConnections),
    blueTeam: resolveLinkedNodes(nodes, node.blueTeamConnections),
    remediation: resolveLinkedNodes(nodes, node.remediationConnections),
    labs,
    missingRequired,
  };
}

export function topicHref(ref: { certId: string; topicId: string }): string {
  return `/cert/${ref.certId}/lesson/${ref.topicId}`;
}
