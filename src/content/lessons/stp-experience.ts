import type { TopicExperience } from "@/content/types";

/** LES experience — Spanning Tree Protocol (Wave 2). */
export const STP_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "Redundancy without Layer 2 loops.",
      body: "Extra switch links add resilience — and can create loops. Without Spanning Tree, broadcasts can circulate forever and melt the LAN. STP blocks extras until needed.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "Switches" },
          { icon: "network", label: "Loop risk" },
        ],
      },
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 address — loops churn MAC tables as the same MACs appear on changing ports.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 frames have no IP-style TTL hop limit — a loop can circulate them forever.",
        },
      ],
    },
    {
      id: "why-loops-bad",
      type: "teach",
      osiLayer: 2,
      headline: "Why loops are bad.",
      body: "A Layer 2 loop floods broadcasts endlessly (broadcast storm), flaps MAC tables, and spikes CPU. Ethernet has no TTL like IP — frames do not time out across hop counts the same way.",
      terms: [
        {
          id: "broadcast-storm",
          label: "Broadcast storm",
          tier: "basics",
          shortDefinition:
            "Runaway broadcast traffic looping until the LAN is unusable — classic L2 loop symptom.",
        },
      ],
    },
    {
      id: "stp-purpose",
      type: "teach",
      osiLayer: 2,
      headline: "What STP solves.",
      body: "Spanning Tree Protocol finds a loop-free logical tree. It blocks some ports so only one active path remains between any two points — backups stay ready.",
      terms: [
        {
          id: "stp",
          label: "STP",
          tier: "basics",
          shortDefinition:
            "Spanning Tree Protocol — prevents Layer 2 loops by blocking redundant paths.",
        },
      ],
    },
    {
      id: "purpose-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — STP purpose",
      checkpointQuestionId: "stp-q1",
    },
    {
      id: "root-bridge",
      type: "teach",
      osiLayer: 2,
      headline: "Root bridge election.",
      body: "One switch becomes the root bridge — the reference point for the tree. Election uses bridge ID: bridge priority plus MAC. Lowest bridge ID wins.",
      terms: [
        {
          id: "root-bridge",
          label: "Root bridge",
          tier: "basics",
          shortDefinition: "Switch with the lowest bridge ID — center of the Spanning Tree topology.",
        },
        {
          id: "bridge-id",
          label: "Bridge ID",
          tier: "basics",
          shortDefinition: "Priority + MAC address. Lowest BID becomes root.",
        },
      ],
    },
    {
      id: "root-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — root election",
      checkpointQuestionId: "stp-q2",
    },
    {
      id: "place-root",
      type: "teach",
      osiLayer: 2,
      headline: "Place the root on purpose.",
      body: "Do not leave root election to chance. Lower priority on your core/distribution switch so traffic paths are predictable. Priority changes usually step by 4096 on Cisco.",
      laterLearn: ["Per-VLAN priorities (PVST+)", "Extended system ID details"],
    },
    {
      id: "root-port",
      type: "teach",
      osiLayer: 2,
      headline: "Root port role.",
      body: "On every non-root switch, the root port is the best path toward the root bridge — one RP per switch. It forwards toward the root.",
      terms: [
        {
          id: "root-port",
          label: "Root port",
          tier: "basics",
          shortDefinition:
            "On a non-root switch, the port with the best path to the root bridge.",
        },
      ],
    },
    {
      id: "designated-port",
      type: "teach",
      osiLayer: 2,
      headline: "Designated port role.",
      body: "Each network segment has one designated port — the best path from that segment toward the root. Designated ports forward for that segment.",
      terms: [
        {
          id: "designated-port",
          label: "Designated port",
          tier: "basics",
          shortDefinition:
            "Forwarding port elected for a segment — the preferred path toward the root from that link.",
        },
      ],
    },
    {
      id: "blocked-port",
      type: "teach",
      osiLayer: 2,
      headline: "Blocked (alternate) ports.",
      body: "Ports that lose the election do not forward user traffic. They still listen for BPDUs so they can take over if the active path fails. Blocking ≠ unplugged.",
      terms: [
        {
          id: "blocked-port",
          label: "Blocked / alternate",
          tier: "basics",
          shortDefinition:
            "Does not forward user frames; still processes BPDUs as a backup path.",
        },
        {
          id: "bpdu",
          label: "BPDU",
          tier: "basics",
          shortDefinition:
            "Bridge Protocol Data Unit — STP messages switches exchange to build the tree.",
        },
      ],
    },
    {
      id: "blocked-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — blocked port",
      checkpointQuestionId: "stp-q4",
    },
    {
      id: "roles-memory",
      type: "memory",
      osiLayer: 2,
      headline: "Memory — three roles",
      studyTip: {
        title: "R-D-B",
        body: "Root port → to root. Designated → for the segment. Blocked → backup, no user forward.",
      },
    },
    {
      id: "rstp-brief",
      type: "teach",
      osiLayer: 2,
      headline: "RSTP vs classic STP.",
      body: "Classic IEEE 802.1D STP can take tens of seconds to converge. Rapid STP (802.1w) uses smarter roles and converges much faster — still elects a root, still blocks loops.",
      terms: [
        {
          id: "rstp",
          label: "RSTP (802.1w)",
          tier: "basics",
          shortDefinition: "Rapid Spanning Tree — faster convergence than classic 802.1D.",
        },
      ],
    },
    {
      id: "rstp-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — 802.1w",
      checkpointQuestionId: "stp-q5",
    },
    {
      id: "portfast",
      type: "teach",
      osiLayer: 2,
      headline: "PortFast on edge ports.",
      body: "PortFast lets access ports to end hosts skip long listening/learning delays so PCs and phones come up quickly. Never enable PortFast on trunks toward other switches.",
      terms: [
        {
          id: "portfast",
          label: "PortFast",
          tier: "basics",
          shortDefinition:
            "Edge feature — immediate forwarding on host-facing access ports; not for switch uplinks.",
        },
      ],
    },
    {
      id: "portfast-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — PortFast",
      checkpointQuestionId: "stp-q3",
    },
    {
      id: "bpdu-guard",
      type: "teach",
      osiLayer: 2,
      headline: "BPDU Guard on the edge.",
      body: "BPDU Guard shuts down a PortFast access port if it receives BPDUs — someone plugged in a switch. Protects against accidental (or rogue) loops at the edge.",
      terms: [
        {
          id: "bpdu-guard",
          label: "BPDU Guard",
          tier: "basics",
          shortDefinition:
            "Err-disables a PortFast port that hears BPDUs — blocks unauthorized switches.",
        },
      ],
      studyTip: {
        title: "Pair them",
        body: "PortFast + BPDU Guard on host access ports is the usual CCNA habit.",
      },
    },
    {
      id: "show-stp",
      type: "teach",
      osiLayer: 2,
      headline: "Verify with show spanning-tree.",
      body: "show spanning-tree vlan <id> and show spanning-tree root reveal who is root, port roles, and states. Use them when a redundant link stays dark — it may be correctly blocked.",
    },
    {
      id: "defer-depth",
      type: "teach",
      osiLayer: 2,
      headline: "Deferred depth.",
      body: "EtherChannel bundles and MST (Multiple Spanning Tree) get deeper later. Today: loops bad, root bridge, roles, RSTP briefly, PortFast + BPDU Guard on edge.",
      laterLearn: ["EtherChannel with STP", "MST / MSTP", "Root Guard details"],
      terms: [
        {
          id: "etherchannel",
          label: "EtherChannel",
          tier: "later",
          shortDefinition:
            "Link aggregation treated as one STP link — full config depth deferred.",
          laterItems: ["LACP", "Port-channel as one logical STP port"],
        },
        {
          id: "mst",
          label: "MST",
          tier: "later",
          shortDefinition: "Multiple Spanning Tree — map VLANs to fewer trees. Beyond this pass.",
          laterItems: ["Instance mapping", "Region config"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "STP covered.",
      body: "You can explain why loops hurt, root bridge election, root/designated/blocked roles, RSTP vs classic briefly, and PortFast + BPDU Guard on edge ports.",
    },
  ],
};
