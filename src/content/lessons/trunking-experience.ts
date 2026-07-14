import type { TopicExperience } from "@/content/types";

/** LES experience — VLAN trunking / 802.1Q (Wave 2). */
export const TRUNKING_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "One cable, many VLANs.",
      body: "VLANs live on each switch. Between switches (or switch and router), a trunk carries multiple VLANs on one link using tags so each frame keeps its VLAN identity.",
      media: {
        kind: "icons",
        items: [
          { icon: "cable", label: "Trunk link" },
          { icon: "layers", label: "Multiple VLANs" },
        ],
      },
      terms: [
        {
          id: "vlan",
          label: "VLAN",
          tier: "basics",
          shortDefinition: "Logical broadcast domain from the VLANs lesson — trunks carry many of them.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container — on a trunk, tagged frames keep their VLAN identity across switches.",
        },
      ],
    },
    {
      id: "bridge-vlans",
      type: "teach",
      osiLayer: 2,
      headline: "Access vs trunk — job split.",
      body: "Access ports face hosts: one VLAN. Trunk ports face another switch or a router-on-a-stick: many VLANs, usually with tags. Wrong mode on a switch-to-switch link breaks isolation.",
      terms: [
        {
          id: "access-port",
          label: "Access port",
          tier: "basics",
          shortDefinition: "One VLAN for an end device — usually untagged.",
        },
        {
          id: "trunk",
          label: "Trunk port",
          tier: "basics",
          shortDefinition: "Carries multiple VLANs between network devices using tagging.",
        },
      ],
    },
    {
      id: "dot1q",
      type: "teach",
      osiLayer: 2,
      headline: "IEEE 802.1Q tagging.",
      body: "802.1Q inserts a 4-byte VLAN tag into Ethernet frames on trunks. The tag includes the VLAN ID so the other end knows which VLAN owns the frame.",
      terms: [
        {
          id: "8021q",
          label: "802.1Q",
          tier: "basics",
          shortDefinition:
            "Standard VLAN tagging method — 4-byte tag with VLAN ID (and priority bits).",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition: "Tagged Ethernet frames on a trunk carry the VLAN ID in the 802.1Q header.",
        },
      ],
    },
    {
      id: "std-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — tagging standard",
      checkpointQuestionId: "trunking-q1",
    },
    {
      id: "not-8023",
      type: "misconception",
      osiLayer: 2,
      headline: "Trap: 802.3 is not tagging.",
      body: "802.3 is Ethernet. 802.1Q tags VLANs. 802.1X authenticates. 802.11 is Wi-Fi. Exams love swapping these numbers.",
    },
    {
      id: "native-vlan",
      type: "teach",
      osiLayer: 2,
      headline: "Native VLAN — untagged.",
      body: "On Cisco 802.1Q trunks, native VLAN frames travel untagged. Both ends must agree on which VLAN is native, or untagged traffic lands in the wrong place.",
      terms: [
        {
          id: "native-vlan",
          label: "Native VLAN",
          tier: "basics",
          shortDefinition:
            "VLAN whose frames are untagged on a Cisco 802.1Q trunk — must match on both sides.",
        },
      ],
    },
    {
      id: "native-mismatch",
      type: "teach",
      osiLayer: 2,
      headline: "Native VLAN mismatch hurts.",
      body: "If ends disagree, untagged frames enter the wrong VLAN — outages and possible security leaks. Match native VLANs deliberately; do not leave mismatched defaults.",
      studyTip: {
        title: "Exam tip",
        body: "Mismatch = connectivity issues and security concerns — not faster routing.",
      },
    },
    {
      id: "native-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — native mismatch",
      checkpointQuestionId: "trunking-q2",
    },
    {
      id: "allowed-list",
      type: "teach",
      osiLayer: 2,
      headline: "Allowed VLAN list.",
      body: "switchport trunk allowed vlan lists which VLANs may cross the trunk. Default often allows all — best practice prunes to only required VLANs for security and clarity.",
      terms: [
        {
          id: "allowed-vlans",
          label: "Allowed VLANs",
          tier: "basics",
          shortDefinition:
            "Configured set of VLANs permitted on a trunk — prune unused VLANs off the link.",
        },
      ],
    },
    {
      id: "trunk-vs-access",
      type: "teach",
      osiLayer: 2,
      headline: "Why trunks exist.",
      body: "A trunk carries multiple VLANs with tags (plus one untagged native). An access port carries one VLAN for a host. Do not put access mode on a multi-VLAN switch uplink.",
    },
    {
      id: "trunk-diff-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — trunk vs access",
      checkpointQuestionId: "trunking-q5",
    },
    {
      id: "dtp-teach",
      type: "teach",
      osiLayer: 2,
      headline: "DTP negotiates trunks.",
      body: "Dynamic Trunking Protocol can negotiate trunk vs access between Cisco peers. Convenient — and surprising when a port trunks when you did not intend it.",
      terms: [
        {
          id: "dtp",
          label: "DTP",
          tier: "basics",
          shortDefinition:
            "Dynamic Trunking Protocol — Cisco negotiation for trunk versus access mode.",
        },
      ],
    },
    {
      id: "explicit-trunk",
      type: "teach",
      osiLayer: 2,
      headline: "Prefer explicit trunk mode.",
      body: "Hard-set switchport mode trunk where you want a trunk. On hardened designs, add switchport nonegotiate so DTP stops talking. Explicit beats hope.",
      studyTip: {
        title: "Secure habit",
        body: "mode trunk + nonegotiate on trunks you control — do not rely on dynamic alone.",
      },
    },
    {
      id: "nonegotiate-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — stop DTP",
      checkpointQuestionId: "trunking-q4",
    },
    {
      id: "rotas-preview",
      type: "teach",
      osiLayer: 3,
      headline: "Router-on-a-stick preview.",
      body: "One router physical port trunks to the switch; subinterfaces each encapsulate one VLAN (dot1Q). That is how one cable routes many VLANs — shallow intro only.",
      terms: [
        {
          id: "rotas",
          label: "Router-on-a-stick",
          tier: "basics",
          shortDefinition:
            "Single trunked router interface with 802.1Q subinterfaces for inter-VLAN routing.",
        },
      ],
    },
    {
      id: "rotas-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — router-on-a-stick",
      checkpointQuestionId: "trunking-q3",
    },
    {
      id: "verify-trunk",
      type: "teach",
      osiLayer: 2,
      headline: "show interfaces trunk.",
      body: "Verify mode, encapsulation, native VLAN, and allowed VLANs with show interfaces trunk. First check when VLANs appear on one switch but not the other.",
    },
    {
      id: "defer-etherchannel",
      type: "teach",
      osiLayer: 2,
      headline: "EtherChannel — later.",
      body: "Bundling parallel links for bandwidth and redundancy is EtherChannel / port-channels. STP will treat a bundle as one logical link — depth deferred past this trunking pass.",
      laterLearn: ["EtherChannel / LACP", "Port-channel and STP"],
      terms: [
        {
          id: "etherchannel",
          label: "EtherChannel",
          tier: "later",
          shortDefinition:
            "Link aggregation — multiple physical links as one logical path. Full depth later.",
          laterItems: ["LACP", "Static EtherChannel", "STP treats channel as one link"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Trunking covered.",
      body: "You can explain 802.1Q tags, access vs trunk, native VLAN match, allowed lists, and why explicit trunk (+ nonegotiate) beats DTP alone. Next: Spanning Tree.",
    },
  ],
};
