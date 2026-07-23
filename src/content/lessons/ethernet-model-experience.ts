import type { TopicExperience } from "@/content/types";

/** LES experience — Ethernet L2, frames, switches, devices (Wave 1). */
export const ETHERNET_MODEL_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 2,
      headline: "Ethernet is how wired LANs actually work.",
      body: "You met frames and MAC addresses in our OSI and TCP/IP lessons. Ethernet is the IEEE 802.3 standard for wired LAN communication — framing, MAC addresses, and access to the physical medium.",
      media: {
        kind: "icons",
        items: [
          { icon: "layers", label: "IEEE 802.3" },
          { icon: "cable", label: "Uses cable (L1)" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frames",
          tier: "basics",
          shortDefinition:
            "Layer 2 containers for local delivery — you will see how they are built on the next cards.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "A unique hardware address on each network port — switches use it to forward frames.",
          example: "00:1A:2B:3C:4D:5E",
        },
        {
          id: "tcp",
          label: "TCP/IP",
          tier: "basics",
          shortDefinition:
            "The four-layer model from the previous lesson — Ethernet maps to the Network Access layer at Layer 2.",
        },
      ],
    },
    {
      id: "ethernet-standard",
      type: "misconception",
      osiLayer: 2,
      headline: "Ethernet is not the cable.",
      body: "Ethernet is the IEEE 802.3 standard — the rules for how devices on a LAN communicate, including framing and MAC addressing. Copper or fiber cable is just the physical medium Ethernet uses to move bits.",
      terms: [
        {
          id: "ethernet",
          label: "Ethernet",
          tier: "basics",
          shortDefinition:
            "A networking standard (IEEE 802.3) for LAN communication — not the cable itself.",
        },
      ],
    },
    {
      id: "ethernet-layers",
      type: "teach",
      showFullStack: true,
      headline: "Ethernet uses Layers 1 and 2.",
      body: "Layer 1 (Physical) puts bits on the cable. Layer 2 (Data Link) wraps those bits in frames with MAC addresses. CCNA exams usually emphasize Layer 2 when they ask about Ethernet framing.",
      studyTip: {
        title: "Exam tip",
        body: "Cable and bits = Layer 1. Frames and MAC addresses = Layer 2. Both are part of Ethernet.",
      },
    },
    {
      id: "intro-bridge",
      type: "teach",
      osiLayer: 2,
      headline: "Ethernet builds on what you learned.",
      body: "In the OSI lesson, you learned what frames and switches do at Layer 2. This lesson covers Ethernet in depth — how frames are built, how switches use MAC addresses, and how hubs differ from switches.",
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "A Layer 2 container for local delivery — destination MAC, source MAC, payload, and error checking.",
        },
      ],
    },
    {
      id: "frame-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Inside an Ethernet frame.",
      body: "Every Ethernet frame carries four parts in order: destination MAC address, source MAC address, payload, and FCS at the end for error checking.",
      media: {
        kind: "flow",
        items: [
          { icon: "network", label: "Dest MAC address" },
          { icon: "network", label: "Src MAC address" },
          { icon: "layers", label: "Payload" },
          { icon: "server", label: "FCS" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Ethernet wraps data from higher layers in a frame for delivery on one LAN segment.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Destination and source MAC addresses sit in the header of every Ethernet frame.",
        },
      ],
      laterLearn: ["802.1Q VLAN tags", "EtherType field"],
    },
    {
      id: "frame-payload",
      type: "teach",
      osiLayer: 2,
      headline: "What is the payload?",
      body: "The payload is the actual data from higher layers — often an IP packet from Layer 3. Most Ethernet networks allow up to 1500 bytes of payload. That size limit is called the MTU (Maximum Transmission Unit).",
      terms: [
        {
          id: "payload",
          label: "Payload",
          tier: "basics",
          shortDefinition:
            "The data inside a frame from a higher layer — not the MAC addresses or error-checking fields.",
        },
        {
          id: "mtu",
          label: "MTU",
          tier: "basics",
          shortDefinition:
            "Maximum Transmission Unit — the largest payload size a link will carry. Ethernet MTU is typically 1500 bytes.",
        },
      ],
    },
    {
      id: "mac-teach",
      type: "teach",
      osiLayer: 2,
      headline: "What is a MAC address?",
      body: "A MAC address is a unique 48-bit identifier built into each network interface card (NIC). Every device on a LAN has one. Switches read the destination MAC address to decide where to forward a frame.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Media Access Control address — a burned-in Layer 2 ID that identifies one network port on a LAN.",
          example: "00:1A:2B:3C:4D:5E",
        },
        {
          id: "nic",
          label: "NIC",
          tier: "basics",
          shortDefinition:
            "Network Interface Card — the hardware port on a device that owns the MAC address.",
        },
      ],
    },
    {
      id: "mac-format",
      type: "teach",
      osiLayer: 2,
      headline: "MAC address format.",
      body: "A MAC address is 48 bits long, written as six hex pairs with colons — like 00:1A:2B:3C:4D:5E. You will see this format on exams, in ARP tables, and in switch MAC address tables.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "48 bits shown as six hex pairs (e.g. 00:1A:2B:3C:4D:5E). Burned into the NIC by the manufacturer.",
          example: "00:1A:2B:3C:4D:5E",
        },
      ],
    },
    {
      id: "mac-manufacturer",
      type: "teach",
      osiLayer: 2,
      headline: "Who assigns MAC addresses?",
      body: "The manufacturer. IEEE gives each maker a block of addresses (called an OUI). The manufacturer burns a unique MAC into each NIC before the device ships.",
      terms: [
        {
          id: "oui",
          label: "OUI",
          tier: "basics",
          shortDefinition:
            "Organizationally Unique Identifier — the first part of a MAC that identifies the manufacturer.",
        },
      ],
    },
    {
      id: "mac-broadcast",
      type: "teach",
      osiLayer: 2,
      headline: "Broadcast MAC addresses.",
      body: "When a host must reach every device on the LAN at once, it sends a broadcast frame. The destination MAC address is FF:FF:FF:FF:FF:FF — every NIC on that segment receives the frame.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Unicast MACs target one device. The broadcast MAC FF:FF:FF:FF:FF:FF targets every device on the segment.",
          example: "FF:FF:FF:FF:FF:FF",
        },
      ],
    },
    {
      id: "l2-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — Ethernet layer",
      checkpointQuestionId: "ethernet-q1",
    },
    {
      id: "switch-ports",
      type: "teach",
      osiLayer: 2,
      headline: "Switch ports are physical connections.",
      body: "A switch has physical ports — RJ-45 jacks where Ethernet cables plug in. Each port connects to one device. This is not the same as a Layer 4 port number like TCP port 443 — those identify applications, not cables.",
      terms: [
        {
          id: "port",
          label: "Switch port",
          tier: "basics",
          shortDefinition:
            "A physical connector on a switch. One cable, one connected device. Switches forward frames between ports.",
        },
        {
          id: "l4-port",
          label: "TCP/UDP port",
          tier: "basics",
          shortDefinition:
            "A logical number at Layer 4 that identifies an application (e.g. 443 for HTTPS). Covered in the OSI and TCP/IP lessons.",
        },
      ],
    },
    {
      id: "dest-mac-purpose",
      type: "teach",
      osiLayer: 2,
      headline: "Why the destination MAC?",
      body: "The destination MAC address tells Ethernet which single device on the LAN should receive the frame. The switch reads it to pick which outbound port to use — delivering the frame to that one host.",
    },
    {
      id: "switch-hero",
      type: "hero",
      osiLayer: 2,
      headline: "Switches forward frames.",
      body: "Host A plugs into port 1; Host B plugs into port 2. Host B asked Host A for data. Host A sends a reply with Host B's MAC as the destination into port 1. The switch reads that MAC and forwards the frame out port 2 to Host B.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Host A (port 1)" },
          { icon: "switch", label: "Reads dest MAC" },
          { icon: "monitor", label: "Host B (port 2)" },
        ],
      },
    },
    {
      id: "switch-learn",
      type: "teach",
      osiLayer: 2,
      headline: "How switches learn MAC addresses.",
      body: "A switch does not know every MAC address when it powers on. Each arriving frame reveals its source MAC address and which port it entered on. The switch records both in a MAC address table for future lookups.",
      studyTip: {
        title: "Exam tip",
        body: "Switches learn from the source MAC address in received frames — not from ARP or DHCP.",
      },
    },
    {
      id: "switch-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — switches",
      checkpointQuestionId: "ethernet-q2",
    },
    {
      id: "hub-behavior",
      type: "teach",
      osiLayer: 2,
      headline: "What a hub does.",
      body: "A hub is a Layer 1 device — essentially a multi-port repeater. It does not read MAC addresses. When a frame arrives, the hub repeats the electrical signal out every port, so every connected device hears it.",
      terms: [
        {
          id: "repeater",
          label: "Repeater",
          tier: "basics",
          shortDefinition:
            "A Layer 1 device that regenerates weakened signals to extend cable distance. A hub is a multi-port repeater.",
        },
      ],
    },
    {
      id: "collision-domain",
      type: "teach",
      osiLayer: 2,
      headline: "What is a collision domain?",
      body: "When two devices transmit at the same time on shared media, their electrical signals collide and both frames are ruined. A collision domain is every device that shares that risk — if one pair collides, they all may be affected.",
      terms: [
        {
          id: "collision-domain",
          label: "Collision domain",
          tier: "basics",
          shortDefinition:
            "A group of devices sharing the same physical path where simultaneous transmissions can collide and corrupt frames.",
        },
      ],
    },
    {
      id: "hub-vs-switch",
      type: "misconception",
      osiLayer: 2,
      headline: "A hub is not a switch.",
      body: "On a hub, every port is in one collision domain — all devices share the same path. A switch forwards each frame to only the port that needs it, keeping traffic separated between devices.",
      laterLearn: ["Half-duplex vs full-duplex", "How duplex affects collisions"],
    },
    {
      id: "devices-layers",
      type: "teach",
      osiLayer: 2,
      headline: "Network devices by OSI layer.",
      body: "Repeater (Layer 1): regenerates weakened signals to extend a cable.\n\nHub (Layer 1): broadcasts incoming bits to every port.\n\nSwitch (Layer 2): reads frames and uses MAC address tables.\n\nRouter (Layer 3): forwards IP packets between networks.",
      media: {
        kind: "icons",
        items: [
          { icon: "cable", label: "Repeater (L1)" },
          { icon: "radio", label: "Hub (L1)" },
          { icon: "switch", label: "Switch (L2)" },
          { icon: "router", label: "Router (L3)" },
        ],
      },
      studyTip: {
        title: "Exam tip",
        body: "Know which layer each device operates at: repeater and hub at L1, switch at L2, router at L3.",
      },
    },
    {
      id: "duplex-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Half-duplex vs full-duplex.",
      body: "Duplex describes whether a link can send and receive at the same time. Half-duplex shares one path — a device can send or receive, but not both at once. Legacy hub networks ran half-duplex.",
      terms: [
        {
          id: "duplex",
          label: "Duplex",
          tier: "basics",
          shortDefinition:
            "Whether a network link can transmit and receive simultaneously. Half-duplex is one direction at a time; full-duplex is both at once.",
        },
      ],
    },
    {
      id: "csma-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Collisions and CSMA/CD.",
      body: "Half-duplex networks use CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Devices listen before sending. If two transmit at once, they detect a collision, stop, wait, and retry.",
      terms: [
        {
          id: "csma",
          label: "CSMA/CD",
          tier: "basics",
          shortDefinition:
            "A half-duplex Ethernet rule: listen before transmit, detect collisions, then back off and retry.",
        },
      ],
    },
    {
      id: "duplex-full",
      type: "teach",
      osiLayer: 2,
      headline: "Full-duplex on switch ports.",
      body: "Full-duplex gives send and receive their own paths. A modern switch port connected to a host typically runs full-duplex — both directions at once, so collisions do not occur on that link.",
      laterLearn: ["Auto-negotiation", "Duplex mismatch troubleshooting"],
    },
    {
      id: "duplex-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — duplex",
      checkpointQuestionId: "ethernet-q3",
    },
    {
      id: "arp-teach",
      type: "teach",
      osiLayer: 2,
      headline: "ARP connects IP addresses to MAC addresses.",
      body: "Hosts on a LAN deliver frames using MAC addresses, but applications use IP addresses. Address Resolution Protocol (ARP) discovers which MAC address belongs to a given IP on the same LAN.",
      terms: [
        {
          id: "arp",
          label: "ARP",
          tier: "basics",
          shortDefinition:
            "Address Resolution Protocol — maps a destination IP address to a MAC address on the same LAN.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address ARP looks up when a host needs to reach another device on the same LAN.",
        },
      ],
    },
    {
      id: "arp-boundary",
      type: "teach",
      osiLayer: 2,
      headline: "Where ARP lives.",
      body: "ARP sits at the boundary between Layer 3 (IP) and Layer 2 (Ethernet). You will study it in more detail when you reach IPv4 addressing.",
    },
    {
      id: "local-dest-mac",
      type: "teach",
      osiLayer: 2,
      headline: "Same LAN — use the PC's MAC.",
      body: "When two PCs are on the same LAN, the Ethernet frame's destination MAC is the target PC's MAC address. The switch forwards the frame directly to that host.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Your PC" },
          { icon: "switch", label: "Dest MAC = PC B" },
          { icon: "monitor", label: "PC B" },
        ],
      },
    },
    {
      id: "remote-dest-mac",
      type: "teach",
      osiLayer: 2,
      headline: "Remote host — use the router's MAC.",
      body: "Sending to google.com? Google is not on your LAN — its MAC cannot be the destination. The frame's destination MAC is your default gateway (the router). The IP packet inside still names Google.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Your PC" },
          { icon: "router", label: "Dest MAC = router" },
          { icon: "globe", label: "IP names Google" },
        ],
      },
      terms: [
        {
          id: "gateway",
          label: "Default gateway",
          tier: "basics",
          shortDefinition:
            "Your router's IP on the LAN — the next hop for traffic leaving your local network. ARP resolves it to the router's MAC address.",
        },
      ],
    },
    {
      id: "mac-lan-only",
      type: "teach",
      osiLayer: 2,
      headline: "MAC addresses stay local.",
      body: "MAC addresses only work on your LAN — they identify devices on one local segment. When traffic must leave your LAN, a router (your default gateway) receives the frame, strips it, and builds a new frame for the next network with different MAC addresses.",
    },
    {
      id: "mac-ip-inside",
      type: "teach",
      osiLayer: 2,
      headline: "The IP packet travels on.",
      body: "Each router rebuilds the Ethernet frame with new MAC addresses for the next local segment. The IP packet inside stays the same end to end. That is why the Internet runs on IP routing — not MAC addresses across the whole path.",
    },
    {
      id: "fcs-teach",
      type: "teach",
      osiLayer: 2,
      headline: "FCS — error detection.",
      body: "The Frame Check Sequence (FCS) sits at the end of every Ethernet frame. The sender runs a CRC — Cyclic Redundancy Check — a math formula that fingerprints the frame contents. That fingerprint is stored in the FCS field.",
      terms: [
        {
          id: "fcs",
          label: "FCS",
          tier: "basics",
          shortDefinition:
            "Frame Check Sequence — a trailer field that holds a checksum for detecting transmission errors.",
        },
        {
          id: "crc",
          label: "CRC",
          tier: "basics",
          shortDefinition:
            "Cyclic Redundancy Check — a calculation that produces a short code from frame data. Mismatch means corruption.",
        },
      ],
    },
    {
      id: "fcs-receive",
      type: "teach",
      osiLayer: 2,
      headline: "What the receiver does with FCS.",
      body: "The receiver runs the same CRC calculation. If the result does not match the FCS value, bits were corrupted on the wire and the receiver drops the frame — it does not try to repair it.",
      media: {
        kind: "flow",
        items: [
          { icon: "network", label: "Frame arrives" },
          { icon: "server", label: "CRC check" },
          { icon: "monitor", label: "Keep or drop" },
        ],
      },
    },
    {
      id: "fcs-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — FCS",
      checkpointQuestionId: "ethernet-q4",
    },
    {
      id: "learn-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — MAC learning",
      checkpointQuestionId: "ethernet-q5",
    },
    {
      id: "speeds-bits",
      type: "teach",
      osiLayer: 2,
      headline: "Mbps and Gbps — bits, not bytes.",
      body: "Remember bits from Layer 1 in the OSI lesson — the smallest unit on the wire. Ethernet speed counts how many bits travel per second. Mbps = megabits per second; Gbps = gigabits per second. Network speed uses bits, not bytes (storage).",
      terms: [
        {
          id: "bits",
          label: "Bits",
          tier: "basics",
          shortDefinition:
            "The 1s and 0s from Layer 1 — Physical sends bits on the cable. Speed ratings count bits per second, not bytes.",
        },
        {
          id: "mbps",
          label: "Mbps",
          tier: "basics",
          shortDefinition:
            "Megabits per second — one million bits transmitted each second. Fast Ethernet runs at 100 Mbps.",
        },
        {
          id: "gbps",
          label: "Gbps",
          tier: "basics",
          shortDefinition:
            "Gigabits per second — one billion bits per second. Gigabit Ethernet runs at 1 Gbps, 10× faster than 100 Mbps.",
        },
      ],
    },
    {
      id: "speeds-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Common Ethernet speeds.",
      body: "Fast Ethernet runs at 100 Mbps. Gigabit Ethernet runs at 1 Gbps — 10× faster. Most office networks today run at 1 Gbps.",
      laterLearn: ["10 Gbps fiber", "Auto-MDIX"],
    },
    {
      id: "speeds-copper",
      type: "teach",
      osiLayer: 2,
      headline: "Why cable type matters.",
      body: "Ethernet speed depends on the physical medium too. Cat 5e and Cat 6 copper cable have four twisted pairs rated for Gigabit. The cable must support the speed — old or damaged cable may not reliably carry 1 Gbps.",
      terms: [
        {
          id: "cat5",
          label: "Cat 5e / Cat 6",
          tier: "basics",
          shortDefinition:
            "Twisted-pair copper cable categories rated for Gigabit Ethernet on four wire pairs.",
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Ethernet fundamentals covered.",
      body: "You can now explain what Ethernet is, frames, MAC addresses, switch forwarding, default gateway MAC, hub vs switch, duplex, ARP, and FCS. Next: IPv4 addressing — the Layer 3 addresses carried inside Ethernet frames.",
    },
  ],
};
