import type { TopicExperience } from "@/content/types";

/** LES experience — Virtual LANs (Wave 2). */
export const VLANS_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "One switch, many broadcast domains.",
      body: "Switching showed one broadcast domain per VLAN. VLANs let you carve the same physical switch into separate Layer 2 networks — quieter broadcasts, clearer security boundaries.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "Physical switch" },
          { icon: "layers", label: "Logical VLANs" },
        ],
      },
      terms: [
        {
          id: "broadcast-domain",
          label: "Broadcast domain",
          tier: "basics",
          shortDefinition:
            "Ports that receive the same Layer 2 broadcast. VLANs make separate broadcast domains on one chassis.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address from switching — MAC tables and floods stay inside each VLAN.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container — VLANs decide which ports share the same frames and broadcasts.",
        },
      ],
    },
    {
      id: "bridge-switching",
      type: "teach",
      osiLayer: 2,
      headline: "Built on switching.",
      body: "You know MAC tables and flooding within a VLAN. Without VLANs, that flood reaches every port. VLANs contain floods — and isolate groups that should not share Layer 2.",
    },
    {
      id: "what-is-vlan",
      type: "teach",
      osiLayer: 2,
      headline: "What is a VLAN?",
      body: "A Virtual LAN is a logical Layer 2 segment identified by a VLAN ID. Devices in the same VLAN share a broadcast domain. Different VLANs do not talk at Layer 2 without routing.",
      terms: [
        {
          id: "vlan",
          label: "VLAN",
          tier: "basics",
          shortDefinition:
            "Virtual LAN — a logical broadcast domain on a switch, tagged by a numeric VLAN ID.",
        },
      ],
    },
    {
      id: "benefit-check-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Primary benefit — segmentation.",
      body: "VLANs do not speed cables or remove the need for IP. They logically segment one physical switch so broadcasts (and many frames) stay inside each VLAN.",
    },
    {
      id: "benefit-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — VLAN benefit",
      checkpointQuestionId: "vlans-q1",
    },
    {
      id: "vlan-id",
      type: "teach",
      osiLayer: 2,
      headline: "VLAN IDs.",
      body: "Each VLAN has a numeric ID. Valid IDs for normal use run roughly 1–4094 (12-bit VID in 802.1Q). Plan IDs by role: users, servers, guest, management.",
      terms: [
        {
          id: "vlan-id",
          label: "VLAN ID",
          tier: "basics",
          shortDefinition:
            "Numeric identifier for a VLAN — typically 1 through 4094 on modern switches.",
        },
      ],
      laterLearn: ["How 802.1Q tags carry the VLAN ID on trunks"],
    },
    {
      id: "vlan1-default",
      type: "teach",
      osiLayer: 2,
      headline: "VLAN 1 is the default.",
      body: "On Cisco switches, ports start in VLAN 1 until you change them. Best practice often moves user data off VLAN 1 — but exams still expect you to know the factory default.",
      studyTip: {
        title: "Exam tip",
        body: "Default Cisco VLAN = 1. Not 0. Not 10.",
      },
    },
    {
      id: "default-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — default VLAN",
      checkpointQuestionId: "vlans-q2",
    },
    {
      id: "access-ports",
      type: "teach",
      osiLayer: 2,
      headline: "Access ports — one VLAN.",
      body: "An access port faces an end device and belongs to a single VLAN (usually untagged). Configure mode access, then switchport access vlan <id>.",
      terms: [
        {
          id: "access-port",
          label: "Access port",
          tier: "basics",
          shortDefinition:
            "Port for one host VLAN — switchport mode access + switchport access vlan.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "PC" },
          { icon: "cable", label: "Access port" },
          { icon: "switch", label: "VLAN 10" },
        ],
      },
    },
    {
      id: "create-vlan",
      type: "teach",
      osiLayer: 2,
      headline: "Create and name a VLAN.",
      body: "In global config: vlan 10 then name Sales. Assign ports afterward. Creating the VLAN alone does not move ports — forgetting assignment is a classic lab mistake.",
    },
    {
      id: "isolation",
      type: "misconception",
      osiLayer: 2,
      headline: "Same switch ≠ same VLAN.",
      body: "Two PCs on one chassis in different VLANs cannot reach each other at Layer 2. The MAC table will not bridge across VLAN boundaries — you need Layer 3.",
    },
    {
      id: "intervlan-need",
      type: "teach",
      osiLayer: 3,
      headline: "Crossing VLANs needs Layer 3.",
      body: "Inter-VLAN communication requires a Layer 3 device with an interface in each VLAN — a router (often subinterfaces) or a multilayer switch with SVIs.",
      terms: [
        {
          id: "inter-vlan",
          label: "Inter-VLAN routing",
          tier: "basics",
          shortDefinition:
            "Forwarding between VLANs at Layer 3 — not possible with pure L2 switching alone.",
        },
      ],
    },
    {
      id: "intervlan-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — inter-VLAN",
      checkpointQuestionId: "vlans-q3",
    },
    {
      id: "svi-teach",
      type: "teach",
      osiLayer: 3,
      headline: "What is an SVI?",
      body: "A Switch Virtual Interface is a virtual IP interface for a VLAN on a multilayer switch — interface vlan 10 with an IP address. It acts as the gateway for that VLAN.",
      terms: [
        {
          id: "svi",
          label: "SVI",
          tier: "basics",
          shortDefinition:
            "Switch Virtual Interface — Layer 3 gateway IP for a VLAN on a multilayer switch.",
        },
      ],
    },
    {
      id: "svi-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — SVI",
      checkpointQuestionId: "vlans-q4",
    },
    {
      id: "svi-up",
      type: "teach",
      osiLayer: 3,
      headline: "SVI must be up.",
      body: "Give the SVI an IP and no shutdown. At least one access or trunk port in that VLAN should be up, or the SVI may stay down. Shallow preview — labs will drill the details.",
    },
    {
      id: "id-range-check",
      type: "teach",
      osiLayer: 2,
      headline: "Remember the ID range.",
      body: "Think 1–4094 for usable VLAN IDs on exams. Do not invent VLAN 0 as a normal access VLAN, and do not stretch to 65535.",
    },
    {
      id: "range-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — VLAN ID range",
      checkpointQuestionId: "vlans-q5",
    },
    {
      id: "show-vlan",
      type: "teach",
      osiLayer: 2,
      headline: "show vlan brief.",
      body: "show vlan brief lists VLAN IDs, names, and which access ports belong to each VLAN. First verify command when a PC sits in the wrong segment.",
    },
    {
      id: "voice-light",
      type: "teach",
      osiLayer: 2,
      headline: "Voice VLAN — light touch.",
      body: "IP phones often share a port with a PC: data VLAN for the PC, voice VLAN for tagged phone frames. Deep QoS and CDPv2 phone specifics come later.",
      laterLearn: ["Voice VLAN QoS", "CDP phone detection"],
      terms: [
        {
          id: "voice-vlan",
          label: "Voice VLAN",
          tier: "basics",
          shortDefinition:
            "Separate VLAN for IP phone traffic on the same physical port as a data PC.",
        },
      ],
    },
    {
      id: "defer-trunk",
      type: "teach",
      osiLayer: 2,
      headline: "Trunks and native VLAN — next.",
      body: "How multiple VLANs cross a switch-to-switch link, 802.1Q tags, native VLAN, and allowed lists belong in trunking. Do not dig into DTP here.",
      laterLearn: ["802.1Q tags", "Native VLAN", "Allowed VLAN lists"],
      terms: [
        {
          id: "trunk",
          label: "Trunk",
          tier: "later",
          shortDefinition: "Link that carries multiple VLANs — tagging details in the trunking lesson.",
          laterTopicId: "trunking",
          laterTopicLabel: "Trunking",
          laterItems: ["802.1Q", "Native VLAN match", "DTP and explicit trunk mode"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "VLANs covered.",
      body: "You can explain broadcast domains, VLAN IDs, VLAN 1 default, access ports, shallow inter-VLAN needs (L3/SVI), and a light voice VLAN idea. Next: trunking.",
    },
  ],
};
