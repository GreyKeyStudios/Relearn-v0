import type { TopicExperience } from "@/content/types";

/** LES — STP: redundancy pain → triangle election → roles (Network Access rewrite). */
export const STP_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "Redundant links without a brain = fire.",
      body: "Two switches with two cables between them looks safer — until one broadcast loops forever. Layer 2 has no TTL like IP. Spanning Tree Protocol picks which links stay active.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "SW1" },
          { icon: "cable", label: "Two uplinks" },
          { icon: "switch", label: "SW2" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Broadcast storm",
          tier: "basics",
          shortDefinition:
            "Layer 2 broadcasts amplified around a loop — can melt a LAN; STP exists to prevent that.",
        },
        {
          id: "mac",
          label: "Switching",
          tier: "basics",
          shortDefinition:
            "From Switching: floods and forwards frames — loops turn floods into storms.",
        },
      ],
    },
    {
      id: "loop-pain",
      type: "analogy",
      osiLayer: 2,
      headline: "Why a loop is catastrophic.",
      body: "One broadcast enters the looped pair of links, gets forwarded again and again, multiplies, and fills every switch CPU/buffer. IP’s TTL would die on routers; Ethernet frames do not age out that way.",
    },
    {
      id: "stp-job",
      type: "teach",
      osiLayer: 2,
      headline: "STP’s job: one loop-free tree.",
      body: "Spanning Tree leaves redundant physical cables plugged in for failover, but blocks some ports so only a loop-free forwarding tree is active. If the primary path fails, a blocked port can take over.",
      terms: [
        {
          id: "stp",
          label: "STP",
          tier: "basics",
          shortDefinition:
            "Spanning Tree Protocol — prevents Layer 2 loops by blocking redundant paths until needed.",
        },
      ],
    },
    {
      id: "problem-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — what STP solves",
      checkpointQuestionId: "stp-q1",
    },
    {
      id: "bpdu-early",
      type: "teach",
      osiLayer: 2,
      headline: "BPDUs are STP’s chat messages.",
      body: "Bridges exchange Bridge Protocol Data Units to share identity and path cost. Think of BPDUs as “here is who I am and how expensive my path to the root is” — not user data.",
      terms: [
        {
          id: "bpdu",
          label: "BPDU",
          tier: "basics",
          shortDefinition:
            "Bridge Protocol Data Unit — STP control frames switches use to elect roles and detect topology changes.",
        },
      ],
    },
    {
      id: "triangle-setup",
      type: "teach",
      osiLayer: 2,
      headline: "Worked example — three switches.",
      body: "SW-A, SW-B, SW-C in a triangle — every pair connected. Bridge IDs (priority + MAC): A = lowest, then B, then C highest. Lowest BID wins root.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "A lowest BID" },
          { icon: "switch", label: "B middle" },
          { icon: "switch", label: "C highest" },
        ],
      },
      terms: [
        {
          id: "bridge-id",
          label: "Bridge ID",
          tier: "basics",
          shortDefinition:
            "Priority + MAC address. Lowest Bridge ID becomes the root bridge.",
        },
      ],
    },
    {
      id: "root-wins",
      type: "teach",
      osiLayer: 2,
      headline: "Step 1 — elect the root.",
      body: "SW-A has the lowest Bridge ID, so A is the root bridge. Every other switch must find a path toward A. Root is the reference point of the tree.",
    },
    {
      id: "root-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — root election",
      checkpointQuestionId: "stp-q2",
    },
    {
      id: "root-ports",
      type: "teach",
      osiLayer: 2,
      headline: "Step 2 — root ports.",
      body: "On non-root switches, one port is the best path toward the root — the root port. It forwards. SW-B’s root port faces A; SW-C’s faces A (or B, depending on cost — exams give cost numbers).",
      terms: [
        {
          id: "root-port",
          label: "Root port",
          tier: "basics",
          shortDefinition:
            "On a non-root switch, the one port with the best path toward the root bridge.",
        },
      ],
    },
    {
      id: "designated",
      type: "teach",
      osiLayer: 2,
      headline: "Step 3 — designated ports.",
      body: "Each link segment elects one designated port — the best claim to forward for that segment toward the root. Root ports and designated ports forward user traffic.",
      terms: [
        {
          id: "designated-port",
          label: "Designated port",
          tier: "basics",
          shortDefinition:
            "Forwarding port elected for a segment — preferred path toward the root from that link.",
        },
      ],
    },
    {
      id: "block",
      type: "teach",
      osiLayer: 2,
      headline: "Step 4 — someone must block.",
      body: "One remaining path in the triangle would complete a loop. That port blocks: no user frames forwarded, but it still listens to BPDUs so it can unblock if the active path dies.",
      studyTip: {
        title: "Picture it",
        body: "Physical cables stay plugged. Logical tree has one blocked edge — that is the spare.",
      },
    },
    {
      id: "block-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — blocked port",
      checkpointQuestionId: "stp-q4",
    },
    {
      id: "rstp",
      type: "teach",
      osiLayer: 2,
      headline: "RSTP converges faster.",
      body: "Classic 802.1D can take tens of seconds. Rapid STP (802.1w) reuses smarter roles/states and recovers in seconds. Same idea — elect root, block loops — just quicker.",
      laterLearn: ["Per-VLAN priorities (PVST+)", "MST / MSTP"],
    },
    {
      id: "rstp-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — RSTP",
      checkpointQuestionId: "stp-q5",
    },
    {
      id: "port-states-peek",
      type: "memory",
      osiLayer: 2,
      headline: "Port states — quick peek.",
      body: "Classic ports move through listening and learning before forwarding so loops do not form while the tree settles. Edge hosts hate that delay — that is why PortFast exists.",
    },
    {
      id: "portfast",
      type: "teach",
      osiLayer: 2,
      headline: "PortFast for hosts, not switch uplinks.",
      body: "PortFast skips listening/learning delay on access ports to PCs/phones so they come up fast. Never enable it on trunks toward other switches — you risk a temporary loop.",
      terms: [
        {
          id: "portfast",
          label: "PortFast",
          tier: "basics",
          shortDefinition:
            "Edge feature that skips STP wait for host/access ports — not for inter-switch trunks.",
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
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "STP in one story.",
      body: "Redundant cables good; loops lethal. BPDUs elect the lowest BID as root. Root ports and designated ports forward; one path blocks. RSTP is faster; PortFast only on host edges.",
    },
  ],
};
