import type { TopicExperience } from "@/content/types";

/** LES — Trunking: one uplink, two VLANs → tag walkthrough (Network Access rewrite). */
export const TRUNKING_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-job",
      type: "hero",
      osiLayer: 2,
      headline: "One cable, two VLANs.",
      body: "You built Sales (10) and Engineering (20) on access ports. Now SwitchA and SwitchB both need those VLANs — with only one uplink cable between them. How does the far switch know which world a frame belongs to?",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "SwitchA" },
          { icon: "cable", label: "Uplink" },
          { icon: "switch", label: "SwitchB" },
        ],
      },
      terms: [
        {
          id: "vlan",
          label: "VLAN",
          tier: "basics",
          shortDefinition:
            "From the VLAN lesson — separate Layer 2 broadcast domains by ID (e.g. 10 and 20).",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Ethernet frame from hosts — on the uplink we need a way to mark which VLAN it belongs to.",
        },
      ],
    },
    {
      id: "problem",
      type: "analogy",
      osiLayer: 2,
      headline: "Without a tag, the uplink is confused.",
      body: "Access ports strip away the VLAN number toward PCs. On the uplink, an untagged Sales frame looks like an untagged Engineering frame. SwitchB cannot tell which broadcast domain should receive it.",
    },
    {
      id: "insert-tag",
      type: "teach",
      osiLayer: 2,
      headline: "Worked example — insert a tag.",
      body: "802.1Q adds a small tag inside the frame that carries the VLAN ID. SwitchA tags VID 10 before the uplink. SwitchB reads the tag, strips it toward an access port in VLAN 10, and delivers a normal untagged frame to the Sales PC.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Access (no tag)" },
          { icon: "layers", label: "Tag VID 10" },
          { icon: "cable", label: "Trunk" },
          { icon: "monitor", label: "Access (strip)" },
        ],
      },
      terms: [
        {
          id: "8021q",
          label: "802.1Q",
          tier: "basics",
          shortDefinition:
            "IEEE standard that inserts a VLAN ID tag into Ethernet frames on trunks.",
        },
        {
          id: "trunk",
          label: "Trunk",
          tier: "basics",
          shortDefinition:
            "Link that carries multiple VLANs — frames are tagged so each VLAN stays distinct.",
        },
      ],
    },
    {
      id: "tag-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — tagging standard",
      checkpointQuestionId: "trunking-q1",
    },
    {
      id: "trunk-vs-access",
      type: "teach",
      osiLayer: 2,
      headline: "Access vs trunk job split.",
      body: "Access: one VLAN to a host, usually untagged. Trunk: many VLANs between switches (or switch↔router), tagged. Wrong mode on the uplink breaks VLANs in silent, painful ways.",
    },
    {
      id: "access-trunk-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — trunk vs access",
      checkpointQuestionId: "trunking-q5",
    },
    {
      id: "native-vlan",
      type: "teach",
      osiLayer: 2,
      headline: "Native VLAN = the untagged exception.",
      body: "One VLAN on a trunk can travel untagged — the native VLAN. Both ends must agree. Mismatch: SwitchA’s native 10 becomes SwitchB’s native 99 → frames land wrong.",
      terms: [
        {
          id: "native-vlan",
          label: "Native VLAN",
          tier: "basics",
          shortDefinition:
            "The VLAN whose frames cross a trunk untagged — must match on both ends.",
        },
      ],
    },
    {
      id: "native-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — native mismatch",
      checkpointQuestionId: "trunking-q2",
    },
    {
      id: "allowed",
      type: "teach",
      osiLayer: 2,
      headline: "Allowed list = which VLANs may cross.",
      body: "By default a trunk may allow many VLANs. switchport trunk allowed vlan prunes to only the ones you need — less flood risk and clearer intent.",
      studyTip: {
        title: "Design habit",
        body: "Allow only VLANs that must cross that link — not “all” because it is convenient.",
      },
    },
    {
      id: "explicit-trunk",
      type: "teach",
      osiLayer: 2,
      headline: "Prefer explicit trunk mode.",
      body: "Set switchport mode trunk when you mean trunk. DTP can negotiate for you — and surprise you. Exams like explicit configs and nonegotiate on locked designs.",
      terms: [
        {
          id: "dtp",
          label: "DTP",
          tier: "basics",
          shortDefinition:
            "Dynamic Trunking Protocol — Cisco negotiation of trunk vs access; often disabled in careful designs.",
        },
      ],
      laterLearn: ["DTP modes in depth", "EtherChannel"],
    },
    {
      id: "dtp-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — stop DTP",
      checkpointQuestionId: "trunking-q4",
    },
    {
      id: "roas-peek",
      type: "teach",
      osiLayer: 3,
      headline: "Router-on-a-stick uses a trunk.",
      body: "A router can terminate many VLANs on one physical link with subinterfaces — each subinterface has encapsulation dot1Q <vlan>. Same tag idea as switch trunks; routing details deepen with inter-VLAN design.",
      laterLearn: ["Subinterface CLI labs", "SVI vs RoaS choice"],
    },
    {
      id: "roas-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — router-on-a-stick",
      checkpointQuestionId: "trunking-q3",
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Trunking in one story.",
      body: "One uplink needed two worlds → tags carry the VLAN ID → native is the untagged exception → allowed lists prune → prefer explicit trunks. Access stays one VLAN to the host.",
    },
  ],
};
