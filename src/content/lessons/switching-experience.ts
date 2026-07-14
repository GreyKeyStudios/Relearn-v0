import type { TopicExperience } from "@/content/types";

/** LES — Layer 2 switching: learn → forward → flood story (Network Access rewrite). */
export const SWITCHING_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "Watch one frame find its way.",
      body: "You already know Ethernet frames and MAC addresses. Today: what a switch actually does when PC-A talks to PC-B — learn, forward, or flood when it does not know yet.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "PC-A" },
          { icon: "switch", label: "Switch" },
          { icon: "monitor", label: "PC-B" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container with destination MAC, source MAC, payload, and FCS — from Ethernet.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Hardware address on each NIC. Switches forward frames using destination MAC.",
          example: "00:1A:2B:3C:4D:5E",
        },
      ],
    },
    {
      id: "hub-vs-switch",
      type: "misconception",
      osiLayer: 2,
      headline: "A hub is not a switch.",
      body: "A hub repeats every bit out every port — everyone hears everything. A switch builds a table and aims each frame at the right port when it can. That difference is the whole lesson.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Hub: copy all" },
          { icon: "switch", label: "Switch: choose" },
        ],
      },
    },
    {
      id: "cast-setup",
      type: "teach",
      osiLayer: 2,
      headline: "Meet the cast.",
      body: "One switch. PC-A on port 1, PC-B on port 2, PC-C on port 3. The MAC table starts empty. PC-A will send a frame destined for PC-B’s MAC.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "A · port 1" },
          { icon: "monitor", label: "B · port 2" },
          { icon: "monitor", label: "C · port 3" },
        ],
      },
    },
    {
      id: "learn-source",
      type: "teach",
      osiLayer: 2,
      headline: "Step 1 — learn the source.",
      body: "PC-A’s frame arrives on port 1. The switch reads the source MAC (A) and writes: “A lives on port 1.” Learning always uses the source — never the destination.",
      terms: [
        {
          id: "mac",
          label: "MAC address table",
          tier: "basics",
          shortDefinition:
            "Switch map of MAC → port. Built by recording each frame’s source MAC and ingress port.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Frame from A" },
          { icon: "switch", label: "Learn A→port 1" },
        ],
      },
    },
    {
      id: "unknown-flood",
      type: "teach",
      osiLayer: 2,
      headline: "Step 2 — unknown destination floods.",
      body: "Destination is B’s MAC, but the table has no entry yet. The switch floods: copies the frame out every port except port 1. B and C both receive it; only B keeps it.",
      terms: [
        {
          id: "flood",
          label: "Flooding",
          tier: "basics",
          shortDefinition:
            "Send a frame out all switch ports except the one it came in on — used when the destination MAC is unknown.",
        },
      ],
    },
    {
      id: "flood-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — unknown MAC",
      checkpointQuestionId: "switching-q1",
    },
    {
      id: "b-replies",
      type: "teach",
      osiLayer: 2,
      headline: "Step 3 — B replies; table grows.",
      body: "PC-B answers. Frame arrives on port 2 with source MAC B. Switch learns B→port 2. Now the table has A and B. Future A↔B frames can go straight — no flood.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "B replies" },
          { icon: "switch", label: "Learn B→port 2" },
        ],
      },
    },
    {
      id: "known-forward",
      type: "teach",
      osiLayer: 2,
      headline: "Step 4 — known MAC: forward only.",
      body: "Next frame from A to B: table says B→port 2. Switch sends that frame out port 2 only. PC-C never hears it. That is intelligent forwarding.",
      terms: [
        {
          id: "forward",
          label: "Forward",
          tier: "basics",
          shortDefinition:
            "Send the frame out the single port that matches the destination MAC in the table.",
        },
      ],
    },
    {
      id: "table-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — what the table maps",
      checkpointQuestionId: "switching-q2",
    },
    {
      id: "collision-broadcast",
      type: "analogy",
      osiLayer: 2,
      headline: "Two different “everyone hears it” problems.",
      body: "Collisions: two devices talk on one shared wire at once (old hubs / half-duplex). Broadcasts: one frame meant for everyone (like ARP). Switches mostly kill collisions per port — broadcasts still go to every port on this flat switch.",
      studyTip: {
        title: "Hold the distinction",
        body: "Full-duplex switch port ≈ its own collision domain. One flat switch ≈ one broadcast domain until VLANs carve it.",
      },
    },
    {
      id: "duplex-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — collision domains",
      checkpointQuestionId: "switching-q3",
    },
    {
      id: "show-mac",
      type: "teach",
      osiLayer: 2,
      headline: "Prove it on the CLI.",
      body: "show mac address-table lists learned MAC→port entries. clear mac address-table dynamic wipes them so the learn→flood→learn story restarts when traffic returns.",
      studyTip: {
        title: "Exam habit",
        body: "Unknown destination → flood. Table maps MAC→port, not IP→MAC (that is ARP).",
      },
    },
    {
      id: "store-cut",
      type: "teach",
      osiLayer: 2,
      headline: "Two forwarding styles (light).",
      body: "Store-and-forward buffers the whole frame and checks FCS before sending — safer. Cut-through starts after the destination MAC — faster, less checking. Exams contrast them; most switches use store-and-forward.",
      terms: [
        {
          id: "fcs",
          label: "FCS",
          tier: "basics",
          shortDefinition:
            "Frame Check Sequence at the end of the Ethernet frame — used for error detection.",
        },
      ],
      laterLearn: ["Fragment-free hybrids", "ASIC buffering details"],
    },
    {
      id: "store-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — store-and-forward",
      checkpointQuestionId: "switching-q4",
    },
    {
      id: "access-peek",
      type: "teach",
      osiLayer: 2,
      headline: "End hosts sit on access ports.",
      body: "The ports facing PCs usually carry one VLAN, untagged. Multi-VLAN links between switches use trunks — that is the next lesson. Today you only need: access = one host world.",
      laterLearn: ["802.1Q tags", "Trunk allowed lists"],
    },
    {
      id: "access-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — access ports",
      checkpointQuestionId: "switching-q5",
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Switching in one story.",
      body: "Learn source MAC→port. Unknown destination floods out other ports. Known destination forwards to one port. Collisions shrink; broadcasts still hit the whole flat switch until VLANs.",
    },
  ],
};
