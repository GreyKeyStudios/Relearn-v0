import type { TopicExperience } from "@/content/types";

/** LES experience — Layer 2 switching fundamentals (Wave 2). */
export const SWITCHING_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "Switches decide where frames go.",
      body: "You already met Ethernet frames and MAC addresses. This lesson is how a switch uses those addresses to forward traffic — and when it floods because it does not know yet.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "Layer 2 switch" },
          { icon: "network", label: "MAC table" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container with destination MAC, source MAC, payload, and FCS — from your Ethernet lesson.",
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
      id: "bridge-ethernet",
      type: "teach",
      osiLayer: 2,
      headline: "Ethernet built the foundation.",
      body: "Ethernet taught frames, MAC learning basics, and hub vs switch. Switching drills the MAC table, flooding, and collision vs broadcast domains before VLANs and trunks.",
      laterLearn: ["VLANs", "Trunking", "Spanning Tree"],
    },
    {
      id: "not-a-hub",
      type: "misconception",
      osiLayer: 2,
      headline: "A switch is not a hub.",
      body: "A hub repeats bits out every port. A switch reads the destination MAC and forwards to one port when it knows the address — quieter LAN, separate full-duplex links.",
    },
    {
      id: "mac-table-teach",
      type: "teach",
      osiLayer: 2,
      headline: "The MAC address table.",
      body: "The MAC address table maps each learned MAC address to a switch port. When a frame arrives, the switch looks up the destination MAC to pick the exit port.",
      terms: [
        {
          id: "mac-table",
          label: "MAC address table",
          tier: "basics",
          shortDefinition:
            "Dynamic map of MAC address → switch port. Also called the CAM table on older Cisco gear.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition: "The key in the MAC table — which port faces that hardware address.",
        },
      ],
    },
    {
      id: "learn-source",
      type: "teach",
      osiLayer: 2,
      headline: "Learning from the source MAC.",
      body: "On every received frame, the switch records the source MAC and the ingress port. That is how the table fills — not from ARP or DHCP, and not from guessing destination MACs.",
      studyTip: {
        title: "Exam tip",
        body: "Learn = source MAC + incoming port. Forward = destination MAC lookup.",
      },
    },
    {
      id: "forward-known",
      type: "teach",
      osiLayer: 2,
      headline: "Known destination — one exit.",
      body: "If the destination MAC is in the table, the switch forwards the frame out that one port. Other ports stay quiet for that unicast frame.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Frame in" },
          { icon: "switch", label: "Lookup dest MAC" },
          { icon: "monitor", label: "One exit port" },
        ],
      },
    },
    {
      id: "flood-unknown",
      type: "teach",
      osiLayer: 2,
      headline: "Unknown destination — flood.",
      body: "No table entry for the destination MAC? The switch floods: send the frame out all ports in that VLAN except the one it arrived on. Later traffic reveals the real port.",
      terms: [
        {
          id: "flood",
          label: "Flooding",
          tier: "basics",
          shortDefinition:
            "Copying a frame out every eligible port when the destination MAC is unknown (or for broadcasts).",
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
      id: "table-maps",
      type: "teach",
      osiLayer: 2,
      headline: "What the MAC table maps.",
      body: "MAC → switch port. Not IP → MAC (that is ARP). Not VLAN → subnet (that is design). The MAC table answers: which port for this hardware address?",
    },
    {
      id: "table-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — MAC table",
      checkpointQuestionId: "switching-q2",
    },
    {
      id: "collision-domain",
      type: "teach",
      osiLayer: 2,
      headline: "Collision domain refresher.",
      body: "A collision domain is where simultaneous transmissions can corrupt each other. Hubs shared one big domain. Modern full-duplex switch ports give each link its own collision domain.",
      terms: [
        {
          id: "collision-domain",
          label: "Collision domain",
          tier: "basics",
          shortDefinition:
            "Devices that share a path where overlapping transmissions can collide and ruin frames.",
        },
      ],
    },
    {
      id: "broadcast-domain",
      type: "teach",
      osiLayer: 2,
      headline: "Broadcast domain vs collision.",
      body: "A broadcast domain is every port that receives a Layer 2 broadcast (dest FF:FF:FF:FF:FF:FF). One switch without VLANs — one broadcast domain. Separate collision domains ≠ separate broadcasts.",
      terms: [
        {
          id: "broadcast-domain",
          label: "Broadcast domain",
          tier: "basics",
          shortDefinition:
            "All ports that receive the same Layer 2 broadcast. Switches alone do not split it — VLANs or routers do.",
        },
        {
          id: "mac",
          label: "Broadcast MAC",
          tier: "basics",
          shortDefinition: "FF:FF:FF:FF:FF:FF — every NIC in the broadcast domain receives the frame.",
          example: "FF:FF:FF:FF:FF:FF",
        },
      ],
      laterLearn: ["How VLANs split broadcast domains"],
    },
    {
      id: "duplex-ports",
      type: "teach",
      osiLayer: 2,
      headline: "Full-duplex ports, separate collisions.",
      body: "Each full-duplex switch port connected to a host is its own collision domain — and under full duplex, collisions essentially do not occur on that link.",
      studyTip: {
        title: "Exam tip",
        body: "Switched full-duplex = per-port collision domains. Broadcasts still flood the VLAN.",
      },
    },
    {
      id: "collision-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — collision domains",
      checkpointQuestionId: "switching-q3",
    },
    {
      id: "store-forward",
      type: "teach",
      osiLayer: 2,
      headline: "Store-and-forward switching.",
      body: "Store-and-forward buffers the entire frame and checks the FCS before forwarding. Corrupted frames can be dropped. Slightly higher latency, stronger error checking.",
      terms: [
        {
          id: "fcs",
          label: "FCS",
          tier: "basics",
          shortDefinition:
            "Frame Check Sequence — trailer checksum used to detect transmission errors.",
        },
        {
          id: "store-forward",
          label: "Store-and-forward",
          tier: "basics",
          shortDefinition:
            "Receive the whole frame, validate FCS, then forward — classic reliable switching mode.",
        },
      ],
    },
    {
      id: "cut-through",
      type: "teach",
      osiLayer: 2,
      headline: "Cut-through — lower latency.",
      body: "Cut-through starts forwarding after reading the destination MAC — before the full frame arrives. Faster, but weaker error checking than store-and-forward. Light exam contrast only.",
      laterLearn: ["Fragment-free hybrids", "ASIC buffering details"],
      terms: [
        {
          id: "cut-through",
          label: "Cut-through",
          tier: "basics",
          shortDefinition:
            "Forward after the destination MAC is known — lower latency, less FCS protection.",
        },
      ],
    },
    {
      id: "mode-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — store-and-forward",
      checkpointQuestionId: "switching-q4",
    },
    {
      id: "show-mac",
      type: "teach",
      osiLayer: 2,
      headline: "show mac address-table.",
      body: "On Cisco IOS, show mac address-table lists learned MAC-to-port mappings. Use it when a host is on the wrong port or the table looks empty after a clear.",
      studyTip: {
        title: "CLI habit",
        body: "Also useful: show interfaces status. clear mac address-table dynamic when sticky entries linger.",
      },
    },
    {
      id: "access-preview",
      type: "teach",
      osiLayer: 2,
      headline: "Access ports — light preview.",
      body: "End devices usually sit on access ports: one VLAN, typically untagged. Multi-VLAN tagged links between switches are trunks — next topics.",
      laterLearn: ["VLANs in depth", "802.1Q trunking"],
      terms: [
        {
          id: "access-port",
          label: "Access port",
          tier: "basics",
          shortDefinition:
            "Port facing an end host — carries one VLAN. Trunk detail comes in the VLANs and trunking lessons.",
        },
      ],
    },
    {
      id: "access-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — access port",
      checkpointQuestionId: "switching-q5",
    },
    {
      id: "defer-depth",
      type: "teach",
      osiLayer: 2,
      headline: "What comes next.",
      body: "VLANs will split broadcast domains. Trunking carries multiple VLANs between switches. Spanning Tree stops Layer 2 loops. Port security is a later security topic — not today.",
      laterLearn: ["VLANs", "Trunking", "STP", "Port security"],
      terms: [
        {
          id: "vlan",
          label: "VLAN",
          tier: "later",
          shortDefinition: "Virtual LAN — logical broadcast domain on a switch.",
          laterTopicId: "vlans",
          laterTopicLabel: "VLANs",
          laterItems: ["VLAN IDs", "Access port assignment", "Inter-VLAN routing overview"],
        },
        {
          id: "stp",
          label: "STP",
          tier: "later",
          shortDefinition: "Spanning Tree Protocol — loop prevention on redundant Layer 2 paths.",
          laterTopicId: "stp",
          laterTopicLabel: "STP",
          laterItems: ["Root bridge", "Port roles", "PortFast"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Switching fundamentals covered.",
      body: "You can explain MAC learning, flooding unknowns, collision vs broadcast domains, store-and-forward vs cut-through, and show mac address-table. Next: VLANs.",
    },
  ],
};
