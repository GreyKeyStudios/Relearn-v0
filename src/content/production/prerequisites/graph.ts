/**
 * Prerequisite graph format + adapters from live topic.prerequisites
 * and Knowledge DNA nodes.
 */

import { CERTIFICATIONS } from "@/content/registry";
import { getKnowledgeNodes } from "@/content/knowledge/nodes";
import type {
  PrerequisiteGraph,
  PrereqEdge,
  PrereqNodeRef,
  ProductionValidationIssue,
} from "../types";
import { deriveHierarchyFromLiveTrack } from "../hierarchy";

export function buildLiveTopicPrerequisiteGraph(
  trackId: string
): PrerequisiteGraph {
  const cert = CERTIFICATIONS.find((c) => c.id === trackId);
  const nodes: PrereqNodeRef[] = [];
  const edges: PrereqEdge[] = [];
  const nodeKeys = new Set<string>();

  const addNode = (ref: PrereqNodeRef) => {
    const key = `${ref.kind}:${ref.id}`;
    if (nodeKeys.has(key)) return;
    nodeKeys.add(key);
    nodes.push(ref);
  };

  if (!cert) {
    return { id: `prereq-${trackId}`, subjectId: `subject-${trackId}`, nodes, edges };
  }

  const topicIds = new Set(
    cert.domains.flatMap((d) => d.topics.map((t) => t.id))
  );

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const to: PrereqNodeRef = {
        kind: "live-topic",
        id: `${cert.id}:${topic.id}`,
        liveTrackId: cert.id,
      };
      addNode(to);

      for (const pre of topic.prerequisites ?? []) {
        const from: PrereqNodeRef = {
          kind: "live-topic",
          id: `${cert.id}:${pre}`,
          liveTrackId: cert.id,
        };
        addNode(from);
        edges.push({
          id: `edge-${cert.id}-${pre}->${topic.id}`,
          from,
          to,
          strength: "required",
          rationale: topicIds.has(pre)
            ? undefined
            : `Broken prerequisite: ${pre} not in track`,
        });
      }

      // Mirror atomic edges from derived hierarchy
      const atomicId = `alo-${cert.id}-${topic.id}`;
      addNode({ kind: "atomic", id: atomicId });
      for (const pre of topic.prerequisites ?? []) {
        const fromAtomic: PrereqNodeRef = {
          kind: "atomic",
          id: `alo-${cert.id}-${pre}`,
        };
        addNode(fromAtomic);
        edges.push({
          id: `edge-atomic-${cert.id}-${pre}->${topic.id}`,
          from: fromAtomic,
          to: { kind: "atomic", id: atomicId },
          strength: "required",
        });
      }
    }
  }

  return {
    id: `prereq-${trackId}`,
    subjectId: `subject-${trackId}`,
    nodes,
    edges,
  };
}

export function buildKnowledgePrerequisiteGraph(): PrerequisiteGraph {
  const nodes: PrereqNodeRef[] = [];
  const edges: PrereqEdge[] = [];
  const nodeKeys = new Set<string>();

  const addNode = (ref: PrereqNodeRef) => {
    const key = `${ref.kind}:${ref.id}`;
    if (nodeKeys.has(key)) return;
    nodeKeys.add(key);
    nodes.push(ref);
  };

  for (const kn of getKnowledgeNodes()) {
    const to: PrereqNodeRef = { kind: "knowledge-node", id: kn.id };
    addNode(to);
    for (const pre of kn.prerequisites) {
      const from: PrereqNodeRef = { kind: "knowledge-node", id: pre };
      addNode(from);
      edges.push({
        id: `kg-${pre}->${kn.id}`,
        from,
        to,
        strength: "required",
      });
    }
    for (const pre of kn.recommendedPrerequisites) {
      const from: PrereqNodeRef = { kind: "knowledge-node", id: pre };
      addNode(from);
      edges.push({
        id: `kg-rec-${pre}->${kn.id}`,
        from,
        to,
        strength: "recommended",
      });
    }
  }

  return {
    id: "prereq-knowledge-dna",
    subjectId: "subject-knowledge-dna",
    nodes,
    edges,
  };
}

export function listTrackPrerequisiteGraphs(): PrerequisiteGraph[] {
  return CERTIFICATIONS.map((c) => buildLiveTopicPrerequisiteGraph(c.id));
}

/** Detect cycles with DFS. */
export function findGraphCycles(
  graph: PrerequisiteGraph
): ProductionValidationIssue[] {
  const issues: ProductionValidationIssue[] = [];
  const adj = new Map<string, string[]>();
  for (const edge of graph.edges) {
    if (edge.strength === "helpful") continue;
    const from = `${edge.from.kind}:${edge.from.id}`;
    const to = `${edge.to.kind}:${edge.to.id}`;
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from)!.push(to);
  }

  const visiting = new Set<string>();
  const visited = new Set<string>();

  function dfs(node: string, stack: string[]): void {
    if (visiting.has(node)) {
      const cycleStart = stack.indexOf(node);
      const cycle = stack.slice(cycleStart).concat(node);
      issues.push({
        code: "prereq-cycle",
        severity: "error",
        entityId: graph.id,
        message: `Prerequisite cycle: ${cycle.join(" → ")}`,
      });
      return;
    }
    if (visited.has(node)) return;
    visiting.add(node);
    for (const next of adj.get(node) ?? []) {
      dfs(next, [...stack, node]);
    }
    visiting.delete(node);
    visited.add(node);
  }

  for (const node of adj.keys()) {
    dfs(node, []);
  }
  return issues;
}

export function validateBrokenPrerequisiteLinks(
  trackId: string
): ProductionValidationIssue[] {
  const cert = CERTIFICATIONS.find((c) => c.id === trackId);
  if (!cert) return [];
  const topicIds = new Set(
    cert.domains.flatMap((d) => d.topics.map((t) => t.id))
  );
  const issues: ProductionValidationIssue[] = [];

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const pre of topic.prerequisites ?? []) {
        if (!topicIds.has(pre)) {
          issues.push({
            code: "broken-prerequisite",
            severity: "error",
            trackId,
            topicId: topic.id,
            entityId: pre,
            message: `Prerequisite "${pre}" is not a topic in track ${trackId}`,
          });
        }
      }
    }
  }

  // Derived atomic graph consistency
  const { atomics } = deriveHierarchyFromLiveTrack(trackId);
  const atomicIds = new Set(atomics.map((a) => a.id));
  for (const atomic of atomics) {
    for (const pre of atomic.prerequisiteAtomicIds) {
      if (!atomicIds.has(pre)) {
        issues.push({
          code: "broken-atomic-prerequisite",
          severity: "warning",
          trackId,
          entityId: atomic.id,
          message: `Atomic prerequisite "${pre}" missing from derived hierarchy`,
        });
      }
    }
  }

  return issues;
}
