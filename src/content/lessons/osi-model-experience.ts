import type { TopicExperience } from "@/content/types";

/** Reference LES experience — OSI model, anchor-first, novice entry (Phase 4.9.3). */
export const OSI_MODEL_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      showFullStack: true,
      headline: "You need a map before you configure anything.",
      body: "The OSI model is a troubleshooting map and a common language for how data moves. Seven named layers so engineers can say where a problem lives instead of guessing.",
    },
    {
      id: "intro-stack",
      type: "teach",
      showFullStack: true,
      headline: "Seven layers, top to bottom.",
      body: "Layer 7 is closest to you — the apps you touch. Layer 1 touches the cable or Wi-Fi radio. Each layer only talks to the layer directly above and below it.",
    },
    {
      id: "intro-one-idea",
      type: "hero",
      showFullStack: true,
      headline: "One layer at a time.",
      body: "The stack stays pinned while the focus moves layer by layer. We start at the wire and work up.",
    },
    {
      id: "intro-permission",
      type: "teach",
      showFullStack: true,
      headline: "You don't need to master everything today.",
      body: "This lesson gives you the map and basic vocabulary. Deeper topics — like Ethernet frames and TCP connections — come later, and we'll point you there.",
      terms: [
        {
          id: "frame",
          label: "Frames",
          tier: "later",
          shortDefinition:
            "Frames are Layer 2 containers for local delivery. You'll study their structure in the Ethernet topic.",
          laterTopicId: "ethernet",
          laterTopicLabel: "Ethernet",
          laterItems: ["Ethernet frame anatomy", "Frame headers"],
        },
        {
          id: "tcp",
          label: "TCP connections",
          tier: "later",
          shortDefinition:
            "TCP manages reliable delivery between hosts. Handshake details come in the TCP/IP topic.",
          laterTopicId: "tcp-ip-model",
          laterTopicLabel: "TCP/IP Model",
          laterItems: ["TCP three-way handshake", "Ports and sockets"],
        },
      ],
    },
    {
      id: "memory-top",
      type: "memory",
      showFullStack: true,
      headline: "Memory trick — top to bottom (7 → 1)",
      studyTip: {
        title: "APSTNDP",
        body: "All People Seem To Need Data Processing → Application, Presentation, Session, Transport, Network, Data Link, Physical.",
      },
    },
    {
      id: "memory-bottom",
      type: "memory",
      showFullStack: true,
      headline: "Same stack, read from the wire up (1 → 7)",
      body: "Exams often list layers starting at Physical. That is the same stack — opposite direction.",
      studyTip: {
        title: "PDNTSPA",
        body: "Please Do Not Throw Sausage Pizza Away → Physical, Data Link, Network, Transport, Session, Presentation, Application.",
      },
    },
    {
      id: "memory-check",
      type: "checkpoint",
      showFullStack: true,
      headline: "Quick check — layer order",
      checkpointQuestionId: "osi-q4",
    },
    {
      id: "l1-hero",
      type: "hero",
      osiLayer: 1,
      headline: "Layer 1 — Physical.",
      body: "We start at the wire. Everything above depends on bits actually moving here.",
      terms: [
        {
          id: "bits",
          label: "Bits",
          tier: "basics",
          shortDefinition:
            "The smallest unit of data — a 1 or a 0. Layer 1 turns bits into electrical signals, light pulses, or radio waves on the medium.",
          example: "1 0 1 1 0 0 1 …",
        },
      ],
    },
    {
      id: "l1-teach",
      type: "teach",
      osiLayer: 1,
      headline: "Bits on the wire.",
      body: "Electrical signals on copper, light in fiber, radio waves in Wi-Fi. Cables, connectors, and link lights live here.",
      media: {
        kind: "icons",
        items: [{ icon: "cable", label: "Ethernet cable" }],
      },
    },
    {
      id: "l1-flow",
      type: "flow",
      osiLayer: 1,
      headline: "From computer to switch.",
      body: "A switch connects devices on the same local network. If the cable is unplugged, no higher layer can work.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Computer" },
          { icon: "cable", label: "Cable" },
          { icon: "switch", label: "Switch" },
        ],
      },
      laterLearn: ["Switch ports and speeds", "Cable types", "Link lights and troubleshooting"],
      terms: [
        {
          id: "switch-preview",
          label: "Switch",
          tier: "basics",
          shortDefinition:
            "A switch connects devices on the same local network and forwards traffic between them.",
          laterTopicLabel: "Ethernet",
          laterItems: ["Switch operation", "MAC address tables", "Port settings"],
        },
      ],
    },
    {
      id: "l1-analogy",
      type: "analogy",
      osiLayer: 1,
      headline: "Think: the road itself.",
      body: "Physical is the pavement — not the cars, not the addresses. No road, no trip.",
    },
    {
      id: "l1-l2-cable",
      type: "misconception",
      osiLayer: 1,
      headline: "A bad cable is Layer 1.",
      body: "Replacing an Ethernet cable fixes the physical medium — copper, light, or radio. Switches and MAC addresses are Layer 2. Ethernet uses both layers; a broken cable is almost always Physical first.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "A unique hardware address on each NIC — Layer 2 uses MAC for local delivery.",
          example: "00:1A:2B:3C:4D:5E",
        },
      ],
    },
    {
      id: "l2-hero",
      type: "hero",
      osiLayer: 2,
      headline: "Layer 2 — Data Link.",
      body: "Same stack, new focus. Layer 2 handles local delivery on one network segment — a group of devices that can reach each other without a router.",
      terms: [
        {
          id: "network-segment",
          label: "Network segment",
          tier: "basics",
          shortDefinition:
            "A portion of a network where devices share the same local broadcast domain — often one LAN behind a switch.",
          laterTopicLabel: "Ethernet",
          laterItems: ["Broadcast domains", "VLAN segments"],
        },
      ],
    },
    {
      id: "l2-lan",
      type: "teach",
      osiLayer: 2,
      headline: "What is a LAN?",
      body: "LAN = Local Area Network. Devices in one building or site that share the same network segment — like everyone in one office.",
      terms: [
        {
          id: "lan",
          label: "LAN",
          tier: "now",
          shortDefinition: "Local Area Network — devices on the same local segment.",
        },
        {
          id: "network-segment-lan",
          label: "Network segment",
          tier: "basics",
          shortDefinition:
            "A group of devices on the same local network — one switch, one office, one Wi-Fi network.",
          laterTopicLabel: "Ethernet",
          laterItems: ["Broadcast domains", "Subnetting vs segments"],
        },
      ],
    },
    {
      id: "l2-switch",
      type: "teach",
      osiLayer: 2,
      headline: "What does a switch do?",
      body: "A switch connects devices on a LAN. It forwards traffic between them so each device can reach others on the same segment.",
      media: {
        kind: "icons",
        items: [{ icon: "switch", label: "Switch" }],
      },
      laterLearn: ["How switches learn MAC addresses", "Switch vs hub", "Port configuration"],
    },
    {
      id: "l2-mac-nic",
      type: "teach",
      osiLayer: 2,
      headline: "MAC address and NIC.",
      body: "NIC = Network Interface Card (your network port). Every NIC has a burned-in MAC address — a unique local name tag for that device on the LAN.",
      terms: [
        {
          id: "nic",
          label: "NIC",
          tier: "basics",
          shortDefinition:
            "Network Interface Card — the hardware that connects your device to the network. Often called a network port or adapter.",
          laterTopicLabel: "Ethernet",
          laterItems: ["MAC address format", "NIC drivers"],
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "A unique hardware address burned into each NIC. Switches use MAC addresses to deliver frames on a LAN.",
          example: "00:1A:2B:3C:4D:5E",
          laterTopicLabel: "Ethernet",
          laterItems: ["MAC address tables", "Broadcast MAC"],
        },
      ],
    },
    {
      id: "l2-frame",
      type: "teach",
      osiLayer: 2,
      headline: "What is a frame?",
      body: "A frame is Layer 2's container for moving data across one LAN. Think of it as a labeled envelope for local delivery.",
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "A frame is the Data Link layer's container for sending data across one local network segment.",
          laterTopicLabel: "Ethernet",
          laterItems: ["Ethernet frame anatomy", "Frame headers", "CRC error checking"],
        },
      ],
      laterLearn: ["Ethernet frame anatomy", "Frame headers", "Switch MAC tables"],
    },
    {
      id: "l2-teach",
      type: "teach",
      osiLayer: 2,
      headline: "Putting it together at Layer 2.",
      body: "Switches forward frames using destination MAC addresses. The frame stays on the local segment — that's Data Link's job.",
      media: {
        kind: "icons",
        items: [
          { icon: "switch", label: "Switch" },
          { icon: "network", label: "Frame" },
        ],
      },
    },
    {
      id: "l2-flow",
      type: "flow",
      osiLayer: 2,
      headline: "Host A talks to Host B on the same LAN.",
      body: "Wi-Fi also operates at Layer 2 for wireless delivery on the local segment.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Host A" },
          { icon: "switch", label: "Switch" },
          { icon: "monitor", label: "Host B" },
        ],
      },
    },
    {
      id: "l2-checkpoint",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — Layer 2",
      checkpointQuestionId: "osi-q2",
    },
    {
      id: "l3-hero",
      type: "hero",
      osiLayer: 3,
      headline: "Layer 3 — Network.",
      body: "Logical addressing and routing between different networks.",
    },
    {
      id: "l3-lan-vs-network",
      type: "teach",
      osiLayer: 3,
      headline: "Local vs between networks.",
      body: "Layer 2 stays local — one LAN. Layer 3 moves data between different networks, like from your office to a server across the Internet.",
    },
    {
      id: "l3-ip-ping",
      type: "teach",
      osiLayer: 3,
      headline: "IP address and ping.",
      body: "An IP address is a logical address for finding hosts across networks. Ping uses ICMP (Internet Control Message Protocol) to test if a host is reachable.",
      terms: [
        {
          id: "ip",
          label: "IP address",
          tier: "basics",
          shortDefinition:
            "A logical address assigned to a device so routers can find it across networks — different from a MAC address.",
          example: "192.168.1.10",
          laterTopicId: "ipv4-addressing",
          laterTopicLabel: "IPv4 Addressing",
          laterItems: ["IPv4 octets", "Subnet masks", "Public vs private IPs"],
        },
        {
          id: "icmp",
          label: "ICMP / ping",
          tier: "basics",
          shortDefinition:
            "ICMP (Internet Control Message Protocol) carries diagnostic messages. Ping sends an ICMP echo to check if a host responds.",
          laterTopicLabel: "TCP/IP Model",
          laterItems: ["Ping troubleshooting", "ICMP message types"],
        },
      ],
      laterLearn: ["IPv4 addressing", "Subnet masks", "Public vs private IPs"],
    },
    {
      id: "l3-teach",
      type: "teach",
      osiLayer: 3,
      headline: "Routers and packets.",
      body: "Routers read destination IP addresses and choose paths between networks. At Layer 3, data is called a packet.",
      media: {
        kind: "icons",
        items: [
          { icon: "router", label: "Router" },
          { icon: "globe", label: "Packet" },
        ],
      },
      terms: [
        {
          id: "packet",
          label: "Packet",
          tier: "basics",
          shortDefinition:
            "A packet is the Network layer's container for data traveling between different networks.",
          laterItems: ["Packet headers", "TTL and routing"],
        },
      ],
      laterLearn: ["How routing tables work", "Default gateway", "Static routes"],
    },
    {
      id: "l3-checkpoint",
      type: "checkpoint",
      osiLayer: 3,
      headline: "Quick check — Layer 3",
      checkpointQuestionId: "osi-q1",
    },
    {
      id: "l4-hero",
      type: "hero",
      osiLayer: 4,
      headline: "Layer 4 — Transport.",
      body: "End-to-end delivery between applications using port numbers.",
    },
    {
      id: "l4-why-transport",
      type: "analogy",
      osiLayer: 4,
      headline: "Network says where. Transport says how.",
      body: "Imagine shipping a package. Network layer: get this to Minneapolis. Transport layer: make sure every box arrives — or send one postcard and accept it might get lost. Network decides where; Transport decides how reliably.",
    },
    {
      id: "l4-tcp",
      type: "teach",
      osiLayer: 4,
      headline: "What is TCP?",
      body: "TCP = Transmission Control Protocol. It checks that data arrived and re-sends pieces if needed. Used for web pages and email where completeness matters.",
      terms: [
        {
          id: "tcp",
          label: "TCP",
          tier: "basics",
          shortDefinition:
            "Transmission Control Protocol — reliable delivery with checks and re-sends. Used when every byte must arrive.",
          laterTopicId: "tcp-ip-model",
          laterTopicLabel: "TCP/IP Model",
          laterItems: ["TCP handshake (SYN, ACK)", "Ports and sockets", "Window size"],
        },
      ],
    },
    {
      id: "l4-udp",
      type: "teach",
      osiLayer: 4,
      headline: "What is UDP?",
      body: "UDP = User Datagram Protocol. It sends data fast without guaranteeing delivery. Used for live video and DNS lookups where speed beats perfect delivery. At Layer 4, the UDP chunk is called a datagram.",
      terms: [
        {
          id: "udp",
          label: "UDP",
          tier: "basics",
          shortDefinition:
            "User Datagram Protocol — lightweight and fast with no delivery guarantee. Used when speed matters more than perfection.",
          laterTopicId: "tcp-ip-model",
          laterTopicLabel: "TCP/IP Model",
          laterItems: ["UDP use cases", "Port numbers"],
        },
      ],
    },
    {
      id: "l4-teach",
      type: "teach",
      osiLayer: 4,
      headline: "TCP vs UDP — when to use which.",
      body: "TCP: reliable, slower — web (port 443) and email. UDP: fast, no guarantee — video streams and DNS (port 53). Port numbers tell the host which app should receive the data.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "TCP port 443" },
          { icon: "server", label: "UDP port 53" },
        ],
      },
      studyTip: {
        title: "Quick check",
        body: "Ports or TCP/UDP mentioned? Think Layer 4 — Transport.",
      },
      laterLearn: ["TCP three-way handshake", "Well-known port numbers", "Socket pairs"],
    },
    {
      id: "l4-checkpoint",
      type: "checkpoint",
      osiLayer: 4,
      headline: "Quick check — Layer 4",
      checkpointQuestionId: "osi-q3",
    },
    {
      id: "l5-hero",
      type: "hero",
      osiLayer: 5,
      headline: "Layer 5 — Session.",
      body: "Starts, keeps, and ends conversations between applications.",
    },
    {
      id: "l5-teach",
      type: "teach",
      osiLayer: 5,
      headline: "Keeps the conversation on track.",
      body: "Session coordinates multi-message back-and-forth — like staying logged in while you browse. Many real apps handle this inside the application itself, which is why this layer feels abstract.",
    },
    {
      id: "l5-misconception",
      type: "misconception",
      osiLayer: 5,
      headline: "Session is not the same as TCP.",
      body: "TCP (Layer 4) handles reliable delivery between hosts. Session (Layer 5) is the exam label for application-level back-and-forth. Know the name and where it sits between Presentation and Transport.",
    },
    {
      id: "l6-hero",
      type: "hero",
      osiLayer: 6,
      headline: "Layer 6 — Presentation.",
      body: "Translates data into formats applications understand.",
    },
    {
      id: "l6-tls",
      type: "teach",
      osiLayer: 6,
      headline: "What is TLS?",
      body: "TLS = Transport Layer Security. It encrypts data so only the intended application can read it. HTTPS (secure web) uses TLS — the CCNA exam often maps TLS to Presentation.",
      terms: [
        {
          id: "tls",
          label: "TLS",
          tier: "basics",
          shortDefinition:
            "Transport Layer Security — encrypts and formats data so only the right app can read it. Powers HTTPS secure web browsing.",
          laterTopicLabel: "Network Security",
          laterItems: ["TLS certificates", "HTTPS handshake", "Encryption basics"],
        },
      ],
      laterLearn: ["TLS certificates", "HTTPS handshake", "Encryption algorithms"],
    },
    {
      id: "l6-teach",
      type: "teach",
      osiLayer: 6,
      headline: "Format, compress, encrypt.",
      body: "Presentation handles character sets, compression, and encryption. If bytes are not translated correctly, the application sees garbage instead of a readable file.",
    },
    {
      id: "l7-hero",
      type: "hero",
      osiLayer: 7,
      headline: "Layer 7 — Application.",
      body: "Where network services meet the programs you actually use.",
    },
    {
      id: "l7-defer",
      type: "teach",
      osiLayer: 7,
      headline: "Protocols get their own lessons.",
      body: "You will meet HTTP, DNS, DHCP, and more in dedicated topics. For today: know they live at Layer 7 and that your browser relies on lower layers to deliver them.",
      laterLearn: ["HTTP and HTTPS", "DNS name lookup", "DHCP address assignment"],
    },
    {
      id: "l7-teach",
      type: "teach",
      osiLayer: 7,
      headline: "Apps you touch every day.",
      body: "HTTP (Hypertext Transfer Protocol) for web. HTTPS for secure web. DNS (Domain Name System) for name lookup. SMTP for email. The browser asks lower layers to deliver requests — it does not care about cables.",
      media: {
        kind: "icons",
        items: [
          { icon: "globe", label: "HTTP / HTTPS" },
          { icon: "server", label: "DNS" },
        ],
      },
    },
    {
      id: "protocol-map",
      type: "teach",
      showFullStack: true,
      headline: "Protocols by layer — quick map.",
      body: "Know the big ones per layer for troubleshooting. Layer 7: HTTP, DNS, SMTP. Layer 4: TCP, UDP. Layer 3: IP, ICMP. Layer 2: Ethernet frames. Layer 1: the cable and bits.",
      media: {
        kind: "icons",
        items: [
          { icon: "globe", label: "L7 HTTP / DNS" },
          { icon: "server", label: "L4 TCP / UDP" },
          { icon: "router", label: "L3 IP / ICMP" },
          { icon: "network", label: "L2 Frames" },
          { icon: "cable", label: "L1 Bits" },
        ],
      },
      studyTip: {
        title: "Not every protocol today",
        body: "FTP, SSH, and more appear in later topics — this map is your exam troubleshooting cheat sheet.",
      },
    },
    {
      id: "troubleshoot",
      type: "teach",
      showFullStack: true,
      headline: "Troubleshoot like a checklist.",
      body: "Work bottom-up or top-down — pick one direction and stick with it. Ping works but website fails? Lower layers likely fine — look higher (DNS, app, firewall).",
    },
    {
      id: "encapsulation-teach",
      type: "teach",
      showFullStack: true,
      headline: "Encapsulation — nested envelopes.",
      body: "Sending: each layer wraps data from above with its own header. Receiving: each layer strips its header going back up. Headers are added going down, removed going up.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "App data" },
          { icon: "layers", label: "+ Transport header" },
          { icon: "layers", label: "+ Network header" },
          { icon: "layers", label: "+ Data Link header" },
          { icon: "cable", label: "Bits on wire" },
        ],
      },
    },
    {
      id: "encapsulation-nested",
      type: "misconception",
      showFullStack: true,
      headline: "Frame and packet are not different sizes.",
      body: "Like birthday presents in nested boxes: app data becomes a segment, then a packet, then a frame, then bits. Each layer wraps the layer above — a frame contains a packet; a packet contains a segment.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "App data" },
          { icon: "server", label: "+ Transport (segment)" },
          { icon: "globe", label: "+ Network (packet)" },
          { icon: "network", label: "+ Data Link (frame)" },
          { icon: "cable", label: "Bits on wire" },
        ],
      },
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2's outer wrapper — contains the packet inside for local delivery.",
        },
        {
          id: "packet",
          label: "Packet",
          tier: "basics",
          shortDefinition:
            "Layer 3's wrapper — contains the segment inside for routing between networks.",
        },
      ],
    },
    {
      id: "encapsulation-webpage",
      type: "flow",
      showFullStack: true,
      headline: "Loading a webpage — top to wire.",
      body: "Your browser creates the request. Each layer wraps what came from above — they do not ask the layer above for data. Transport adds ports, Network adds IP, Data Link builds the frame with MAC, Physical sends bits on the cable.",
      media: {
        kind: "flow",
        items: [
          { icon: "globe", label: "HTTP request" },
          { icon: "server", label: "TCP segment" },
          { icon: "router", label: "IP packet" },
          { icon: "network", label: "Ethernet frame" },
          { icon: "cable", label: "Bits on cable" },
        ],
      },
      studyTip: {
        title: "Explain it simply",
        body: "Data moves in layers like a relay — each step adds its own label going down, removes it going up. Seven steps, one trip.",
      },
    },
    {
      id: "encapsulation-check",
      type: "checkpoint",
      showFullStack: true,
      headline: "Quick check — encapsulation",
      checkpointQuestionId: "osi-q5",
    },
    {
      id: "pdu-teach",
      type: "teach",
      showFullStack: true,
      headline: "PDU — Protocol Data Unit.",
      body: "PDU = Protocol Data Unit — the name each layer gives its chunk of data. Learn these after encapsulation direction makes sense.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Segment (L4)" },
          { icon: "globe", label: "Packet (L3)" },
          { icon: "network", label: "Frame (L2)" },
          { icon: "cable", label: "Bits (L1)" },
        ],
      },
      studyTip: {
        title: "PDU memory trick",
        body: "Data → Segment (TCP) or Datagram (UDP) → Packet → Frame → Bits. Each PDU name is the outer wrapper at that layer.",
      },
      terms: [
        {
          id: "pdu",
          label: "PDU",
          tier: "now",
          shortDefinition:
            "Protocol Data Unit — the formal name for each layer's chunk of data during encapsulation.",
        },
      ],
    },
    {
      id: "pdu-check",
      type: "checkpoint",
      showFullStack: true,
      headline: "Quick check — PDU names",
      checkpointQuestionId: "osi-q6",
    },
    {
      id: "summary",
      type: "summary",
      showFullStack: true,
      headline: "You have the map.",
      body: "Seven layers, both directions, encapsulation, and PDU names. Next: TCP/IP — four layers that map to what the Internet actually runs.",
    },
  ],
};
