import type { SimulatorSpec } from "../../types";

/** Spec-only simulators for batch-1 — do not claim live registry IDs yet. */
export const CCNA_V20_BATCH1_SIMULATORS: SimulatorSpec[] = [
  {
    id: "simspec-ccna-v20-ipv4-troubleshoot",
    name: "IPv4 addressing/subnetting troubleshoot drill",
    status: "spec-only",
    learningGoals: [
      "Distinguish public vs private IPv4 assignment faults",
      "Troubleshoot mask/gateway mismatches beyond CIDR calculation",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-1.3",
      "alo-ccna-v2.0-1.3-public-private",
      "alo-ccna-v2.0-1.3-assignment",
    ],
    interactionSummary:
      "Scenario cards with ipconfig/ifconfig-style output and topology notes; learner picks root cause and next verify command.",
    autoGradeHints: [
      "Score root-cause ID and whether public/private context was considered",
    ],
  },
  {
    id: "simspec-ccna-v20-ipv6-troubleshoot",
    name: "IPv6 addressing/prefix troubleshoot drill",
    status: "spec-only",
    learningGoals: [
      "Troubleshoot IPv6 unicast assignment and prefix sizing",
      "Recognize modified EUI-64 interface-ID issues without over-generalizing",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-1.4",
      "alo-ccna-v2.0-1.4-eui64",
      "alo-ccna-v2.0-1.4-prefix",
    ],
    interactionSummary:
      "Present interface IPv6 configs; learner identifies prefix vs interface-ID faults.",
    autoGradeHints: ["Compare selected fault class to scenario key"],
  },
  {
    id: "simspec-ccna-v20-dhcpv4-troubleshoot",
    name: "DHCPv4 client/server/relay troubleshoot",
    status: "spec-only",
    learningGoals: [
      "Troubleshoot DHCPv4 on IOS across client, server, and relay roles",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-1.7",
      "alo-ccna-v2.0-1.7-relay",
      "alo-ccna-v2.0-1.7-server",
    ],
    interactionSummary:
      "Multi-device ticket: choose where to look first (client vs relay vs pool) from show/debug excerpts.",
    autoGradeHints: ["Reward correct role isolation before config edits"],
  },
  {
    id: "simspec-ccna-v20-l2l3-troubleshoot",
    name: "L2/L3 connectivity troubleshoot (show/ping/trace/pcap)",
    status: "spec-only",
    learningGoals: [
      "Correlate show commands, logs, ping/extended ping, traceroute, and packet capture",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-2.4",
      "alo-ccna-v2.0-2.4-evidence",
      "alo-ccna-v2.0-2.4-tools",
    ],
    interactionSummary:
      "Fault tickets unlock evidence panels one at a time; learner must justify tool order.",
    autoGradeHints: [
      "Penalize stopping after a single successful ping when other evidence contradicts",
    ],
  },
  {
    id: "simspec-ccna-v20-stp-configure",
    name: "Rapid PVST+ configure operations",
    status: "spec-only",
    learningGoals: [
      "Configure Rapid PVST+ root/port roles, PortFast, and v2.0 guard set",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-2.5",
      "alo-ccna-v2.0-2.5-root",
      "alo-ccna-v2.0-2.5-guards",
    ],
    interactionSummary:
      "CLI-style tasks to set primary/secondary root, PortFast, and guards listed in v2.0 2.5.d only.",
    autoGradeHints: ["Reject BPDU filter as a required v2.0 check"],
  },
  {
    id: "simspec-ccna-v20-static-troubleshoot",
    name: "IPv4/IPv6 static route troubleshoot",
    status: "spec-only",
    learningGoals: [
      "Troubleshoot default, network, host, and floating static routes",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-3.2",
      "alo-ccna-v2.0-3.2-types",
      "alo-ccna-v2.0-3.2-floating",
    ],
    interactionSummary:
      "Broken routing table scenarios; learner identifies wrong next-hop, AD, or missing route type.",
  },
  {
    id: "simspec-ccna-v20-ospfv3",
    name: "OSPFv2/OSPFv3 single-area configure lab",
    status: "spec-only",
    learningGoals: [
      "Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6) neighbor formation",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-3.3",
      "alo-ccna-v2.0-3.3-ospfv3",
      "alo-ccna-v2.0-3.3-adjacency",
    ],
    interactionSummary:
      "Dual-stack lab excluding authentication; verify neighbors, RID, and network types.",
    autoGradeHints: ["Do not score OSPF authentication — out of official scope"],
  },
  {
    id: "simspec-ccna-v20-ai-prompts",
    name: "Generative AI prompt selection scenarios",
    status: "spec-only",
    learningGoals: [
      "Select prompts that include data classification, output format, persona, and instructions",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-5.2",
      "alo-ccna-v2.0-5.2-components",
      "alo-ccna-v2.0-5.2-safe",
    ],
    interactionSummary:
      "Multiple-choice prompt cards for ops tasks; reject unsafe/leaky prompts.",
    autoGradeHints: [
      "Require all four prompt components for full credit",
      "Fail prompts that request/paste secrets without classification controls",
    ],
  },
];
