import type { TopicExperience } from "@/content/types";

/** LES — VLANs: pain → purpose → access ports → Sales/Engineering story (Network Access rewrite). */
export const VLANS_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-pain",
      type: "hero",
      osiLayer: 2,
      headline: "Everyone hears everything.",
      body: "One flat switch: when PC-A ARP-broadcasts, every port hears it — Sales laptops, Engineering servers, guest kiosks. Switching taught that flood. Today we stop the noise from going everywhere.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "Sales" },
          { icon: "monitor", label: "Eng" },
          { icon: "switch", label: "One flood" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container — on a flat switch, broadcasts still reach every port.",
        },
        {
          id: "mac",
          label: "MAC flooding",
          tier: "basics",
          shortDefinition:
            "From Switching: unknown or broadcast traffic can hit every port on a flat switch.",
        },
      ],
    },
    {
      id: "pain-story",
      type: "analogy",
      osiLayer: 2,
      headline: "Four PCs, one loud party.",
      body: "Imagine four PCs on one switch. An ARP who-has from Sales still hits Engineering. Security and chatty apps make that worse. You need separate Layer 2 worlds without buying four switches.",
    },
    {
      id: "invent-vlans",
      type: "teach",
      osiLayer: 2,
      headline: "Invent separate Layer 2 worlds.",
      body: "Put Sales on world 10 and Engineering on world 20. Broadcasts in 10 never hit ports in 20. Those worlds are Virtual LANs — VLANs — numbered IDs on the same physical switch.",
      terms: [
        {
          id: "vlan",
          label: "VLAN",
          tier: "basics",
          shortDefinition:
            "Virtual LAN — a logical broadcast domain on a switch, identified by a numeric VLAN ID.",
        },
        {
          id: "broadcast-domain",
          label: "Broadcast domain",
          tier: "basics",
          shortDefinition:
            "Ports that receive the same Layer 2 broadcast. Each VLAN is its own.",
        },
      ],
    },
    {
      id: "benefit-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — why VLANs",
      checkpointQuestionId: "vlans-q1",
    },
    {
      id: "vlan-id",
      type: "teach",
      osiLayer: 2,
      headline: "VLAN IDs name each world.",
      body: "VLAN IDs are numbers (roughly 1–4094). You create vlan 10 name Sales and vlan 20 name Engineering. The ID is how the switch remembers which ports share a broadcast domain.",
      studyTip: {
        title: "Range for exams",
        body: "Standard usable VID range is about 1–4094 (12-bit). VLAN 0 / 4095 are not “normal host VLANs.”",
      },
    },
    {
      id: "range-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — VLAN ID range",
      checkpointQuestionId: "vlans-q5",
    },
    {
      id: "vlan1",
      type: "teach",
      osiLayer: 2,
      headline: "VLAN 1 is the factory default.",
      body: "Out of the box, Cisco access ports sit in VLAN 1 until you move them. Best practice: put user data elsewhere — leave VLAN 1 alone for exams and tidy designs.",
    },
    {
      id: "vlan1-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — default VLAN",
      checkpointQuestionId: "vlans-q2",
    },
    {
      id: "access-ports",
      type: "teach",
      osiLayer: 2,
      headline: "Access ports face PCs.",
      body: "An access port carries one VLAN, usually untagged. switchport mode access then switchport access vlan 10 puts that wall jack in Sales. Hosts never see the VLAN number — the switch does.",
      terms: [
        {
          id: "access-port",
          label: "Access port",
          tier: "basics",
          shortDefinition:
            "Switch port for an end host — one VLAN, typically untagged frames.",
        },
      ],
    },
    {
      id: "guided-create",
      type: "teach",
      osiLayer: 2,
      headline: "Worked example — create the VLANs.",
      body: "On the switch: vlan 10 name Sales, vlan 20 name Engineering. That only creates the containers — ports still need assigning or traffic stays in default habits.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "vlan 10 Sales" },
          { icon: "layers", label: "vlan 20 Eng" },
        ],
      },
    },
    {
      id: "guided-assign",
      type: "teach",
      osiLayer: 2,
      headline: "Worked example — assign access ports.",
      body: "Sales PCs on Fa0/1–4: mode access, access vlan 10. Engineering on Fa0/5–8: access vlan 20. show vlan brief should list the ports under the right ID.",
      studyTip: {
        title: "Common miss",
        body: "Creating the VLAN without switchport access vlan … leaves the PC in VLAN 1.",
      },
    },
    {
      id: "same-vlan-ok",
      type: "teach",
      osiLayer: 2,
      headline: "Same VLAN = same Layer 2 world.",
      body: "Two Sales PCs in VLAN 10 can ARP and talk at Layer 2 through the switch. Floods stay inside VLAN 10 — Engineering ports stay quiet.",
    },
    {
      id: "cross-vlan-fail",
      type: "misconception",
      osiLayer: 2,
      headline: "Different VLANs do not talk at Layer 2.",
      body: "Sales PC (VLAN 10) cannot reach Engineering PC (VLAN 20) by MAC switching alone. You need a Layer 3 device with a foot in each VLAN — that is the next beat, not more switching.",
    },
    {
      id: "need-l3",
      type: "teach",
      osiLayer: 3,
      headline: "Inter-VLAN traffic needs Layer 3.",
      body: "A router (or multilayer switch) must route between VLAN 10’s subnet and VLAN 20’s subnet. Layer 2 VLANs isolate; Layer 3 reconnects on purpose.",
    },
    {
      id: "intervlan-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — inter-VLAN",
      checkpointQuestionId: "vlans-q3",
    },
    {
      id: "svi-light",
      type: "teach",
      osiLayer: 3,
      headline: "SVI = the switch’s gateway IP for a VLAN.",
      body: "On a multilayer switch, a Switch Virtual Interface is a virtual IP for a VLAN — think “gateway for VLAN 10.” Deep CLI and trunking for router-on-a-stick wait until after trunks.",
      terms: [
        {
          id: "svi",
          label: "SVI",
          tier: "basics",
          shortDefinition:
            "Switch Virtual Interface — Layer 3 gateway IP for a VLAN on a multilayer switch.",
        },
      ],
      laterLearn: ["interface vlan CLI detail", "router-on-a-stick subinterfaces"],
    },
    {
      id: "svi-check",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — SVI",
      checkpointQuestionId: "vlans-q4",
    },
    {
      id: "trunk-defer",
      type: "teach",
      osiLayer: 2,
      headline: "Many VLANs on one uplink — next lesson.",
      body: "Two switches each with Sales and Engineering need one cable that carries both VLANs. That uses tags on a trunk. Voice VLAN tagging waits until then too.",
      laterLearn: ["802.1Q tags", "Native VLAN", "Voice VLAN"],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "VLANs in one story.",
      body: "Flat switch flood was the pain. VLANs carve broadcast domains. Access ports put hosts in one world. Cross-VLAN needs Layer 3. SVI is the multilayer gateway idea — trunks come next.",
    },
  ],
};
