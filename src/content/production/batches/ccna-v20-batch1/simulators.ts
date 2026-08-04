import type { SimulatorSpec } from "../../types";

/**
 * Spec-only simulators for batch-1 — do not claim live registry IDs yet.
 * Architecture constraint: ReLearn sims are React drills with onComplete
 * (see src/content/simulators/registry.ts). Troubleshoot specs must expose
 * observable symptom/evidence panels — not trial-and-error clicking.
 */
export const CCNA_V20_BATCH1_SIMULATORS: SimulatorSpec[] = [
  {
    id: "simspec-ccna-v20-ipv4-troubleshoot",
    name: "IPv4 addressing/subnetting troubleshoot drill",
    status: "live",
    liveSimulatorId: "ipv4-troubleshoot-drill",
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
      "Scenario cards show fixed ipconfig/ifconfig-style output and a one-line topology note (observable evidence). Learner selects fault class (mask/gateway/duplicate/public-private context) and the next show/verify command. No hidden state revealed only by random clicking.",
    autoGradeHints: [
      "Score root-cause ID against the scenario key",
      "Require public/private context when the scenario is an internal RFC1918 LAN",
      "Do not award credit for unrelated OSPF/STP answers",
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
      "Present interface IPv6 config blocks and neighbor/RA notes as readable evidence panels. Learner labels primary fault: prefix sizing vs modified EUI-64 IID vs valid manual IID. Include at least one distractor where EUI-64 is not required.",
    autoGradeHints: [
      "Compare selected fault class to scenario key",
      "Penalize 'EUI-64 always required' when a manual IID is valid",
    ],
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
      "alo-ccna-v2.0-1.7-client",
      "alo-ccna-v2.0-1.7-relay",
      "alo-ccna-v2.0-1.7-server",
    ],
    interactionSummary:
      "Multi-device ticket with visible show/debug excerpts (client ipconfig, gateway helper-address, server pool). Learner chooses where to look first and names the primary role at fault. Evidence panels unlock in a justified order — not blind device clicking.",
    autoGradeHints: [
      "Reward correct role isolation before config edits",
      "When client/server subnets differ, require relay/helper consideration",
    ],
  },
  {
    id: "simspec-ccna-v20-l2l3-troubleshoot",
    name: "L2/L3 connectivity troubleshoot (show/ping/trace/pcap)",
    status: "spec-only",
    learningGoals: [
      "Correlate show commands (including show logs), ping, extended ping, trace route, and packet capture for L2/L3 connectivity and device operations",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-2.4",
      "alo-ccna-v2.0-2.4-evidence",
      "alo-ccna-v2.0-2.4-tools",
      "alo-ccna-v2.0-2.4-device-ops",
    ],
    interactionSummary:
      "Fault tickets start with a symptom card. Learner requests evidence panels one at a time (show interface/logs, ping/extended ping, trace route, capture summary). Each panel shows concrete output. Root-cause selection stays locked until ≥2 official evidence sources are opened and cited. Success measures official 2.4 tool correlation — not cable-guessing minigames.",
    autoGradeHints: [
      "Penalize stopping after a single successful ping when other evidence contradicts",
      "Require at least one show/logs (device operations) panel when the ticket includes log symptoms",
      "Do not score SNMP/NetFlow — out of official 2.4 scope",
    ],
  },
  {
    id: "simspec-ccna-v20-stp-configure",
    name: "Rapid PVST+ configure operations",
    status: "spec-only",
    learningGoals: [
      "Configure Rapid PVST+ root/port roles, PortFast, and v2.0 2.5.d guards",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-2.5",
      "alo-ccna-v2.0-2.5-root",
      "alo-ccna-v2.0-2.5-portfast",
      "alo-ccna-v2.0-2.5-guards",
    ],
    interactionSummary:
      "CLI-style tasks to set primary/secondary root, PortFast on edge ports, and guards listed in v2.0 2.5.d only. Optional show spanning-tree readout confirms lab success without inventing a Verify exam verb.",
    autoGradeHints: [
      "Reject BPDU filter as a required v2.0 check",
      "Require PortFast and the three 2.5.d guards as separate scored steps",
    ],
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
      "Broken routing-table scenarios with visible show ip/ipv6 route excerpts and configured static statements. Learner identifies wrong next-hop, AD, or missing route type from the evidence — not by toggling random interfaces.",
    autoGradeHints: [
      "Score route-type identification (default/network/host/floating)",
      "For floating cases, require AD/primary-withdrawal reasoning",
    ],
  },
  {
    id: "simspec-ccna-v20-ospfv3",
    name: "OSPFv2/OSPFv3 single-area configure lab",
    status: "spec-only",
    learningGoals: [
      "Configure single-area OSPFv2 for IPv4 to official 3.3.a–d depth",
      "Configure single-area OSPFv3 for IPv6 to the same 3.3.a–d depth",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-3.3",
      "alo-ccna-v2.0-3.3-ospfv2",
      "alo-ccna-v2.0-3.3-ospfv3",
      "alo-ccna-v2.0-3.3-adjacency",
    ],
    interactionSummary:
      "Dual-stack React configure lab: separate OSPFv2 (IPv4) and OSPFv3 (IPv6) task panes. Learner sets RID, enables single-area processes, and forms point-to-point plus broadcast (DR/BDR) adjacencies. Neighbor tables are observable success criteria. Authentication controls are absent/disabled — out of official scope.",
    autoGradeHints: [
      "Require both OSPFv2 and OSPFv3 neighbor formation for full credit",
      "Score RID + network-type adjacency outcomes, not unrelated ACL/NAT skills",
      "Do not score OSPF authentication — out of official scope",
    ],
  },
  {
    id: "simspec-ccna-v20-ai-prompts",
    name: "Generative AI prompt selection for network operations",
    status: "live",
    liveSimulatorId: "ai-prompts-netops-drill",
    learningGoals: [
      "Select network-operations prompts that include data classification, output format, persona, and instructions",
      "Reject prompts that mishandle sensitive Cisco/network data",
    ],
    atomicObjectiveIds: [
      "alo-ccna-v2.0-5.2",
      "alo-ccna-v2.0-5.2-components",
      "alo-ccna-v2.0-5.2-safe",
    ],
    interactionSummary:
      "Cards frame Cisco network-ops tasks (interface CRC triage, ACL review draft, change-window checklist). Learner selects among prompts. Generic LLM tips (temperature/top-k) never appear as correct answers. Unsafe/leaky prompts fail.",
    autoGradeHints: [
      "Require all four official prompt components for full credit",
      "Fail prompts that request/paste secrets without classification controls",
      "Fail generic prompt-engineering answers unrelated to network operations",
    ],
  },
];
