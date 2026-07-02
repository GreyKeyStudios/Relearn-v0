import type { TopicExperience } from "@/content/types";

/** LES experience — TCP/IP model, 4-layer anchor, maps from OSI (Phase 4.9.4). */
export const TCP_IP_MODEL_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      showFullStack: true,
      headline: "The model the Internet actually runs.",
      body: "You learned the 7-layer OSI map. TCP/IP is the 4-layer model real networks use — simpler, same ideas.",
      terms: [
        {
          id: "tcp",
          label: "TCP/IP",
          tier: "basics",
          shortDefinition:
            "Transmission Control Protocol / Internet Protocol — the 4-layer model the Internet runs on.",
        },
      ],
    },
    {
      id: "intro-four",
      type: "teach",
      showFullStack: true,
      headline: "Four layers, top to bottom.",
      body: "Application, Transport, Internet, Network Access. The stack stays pinned while we walk each layer.",
    },
    {
      id: "intro-map-osi",
      type: "teach",
      showFullStack: true,
      headline: "How TCP/IP maps to OSI.",
      body: "Application ≈ OSI 5–7. Transport = OSI 4. Internet = OSI 3. Network Access = OSI 1–2. Exams love this mapping.",
      studyTip: {
        title: "Quick map",
        body: "7 OSI layers collapse into 4 TCP/IP layers — you already know the OSI names.",
      },
    },
    {
      id: "intro-permission",
      type: "teach",
      showFullStack: true,
      headline: "ARP comes later.",
      body: "ARP (IP-to-MAC lookup) sits between Internet and Network Access. You'll study it in Ethernet — not today.",
      terms: [
        {
          id: "arp",
          label: "ARP",
          tier: "later",
          shortDefinition:
            "Address Resolution Protocol — finds a MAC address when you already know an IP on the local segment.",
          laterTopicId: "ethernet",
          laterTopicLabel: "Ethernet",
          laterItems: ["ARP requests and replies", "ARP tables"],
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "A unique hardware address on each NIC. Switches use MAC addresses for local delivery.",
          example: "00:1A:2B:3C:4D:5E",
          laterTopicLabel: "Ethernet",
          laterItems: ["MAC address tables", "Broadcast MAC"],
        },
      ],
    },
    {
      id: "memory-layers",
      type: "memory",
      showFullStack: true,
      headline: "Memory trick — top to bottom",
      studyTip: {
        title: "ATIN",
        body: "Application, Transport, Internet, Network Access — say it as you read the stack down.",
      },
    },
    {
      id: "memory-check",
      type: "checkpoint",
      showFullStack: true,
      headline: "Quick check — how many layers?",
      checkpointQuestionId: "tcp-q1",
    },
    {
      id: "app-hero",
      type: "hero",
      tcpLayer: 4,
      headline: "Layer 4 — Application.",
      body: "Programs you use talk here — web, email, name lookup. OSI layers 5–7 collapse into this one layer.",
    },
    {
      id: "app-teach",
      type: "teach",
      tcpLayer: 4,
      headline: "Protocols you already met.",
      body: "HTTP (web), DNS (names), SMTP (email). Your browser relies on lower layers to deliver them — it does not care about cables.",
      media: {
        kind: "icons",
        items: [
          { icon: "globe", label: "HTTP / HTTPS" },
          { icon: "server", label: "DNS" },
        ],
      },
      laterLearn: ["DHCP address assignment", "FTP file transfer"],
    },
    {
      id: "transport-hero",
      type: "hero",
      tcpLayer: 3,
      headline: "Layer 3 — Transport.",
      body: "End-to-end delivery between hosts using port numbers. Same role as OSI Layer 4.",
    },
    {
      id: "transport-tcp",
      type: "teach",
      tcpLayer: 3,
      headline: "TCP — reliable delivery.",
      body: "Transmission Control Protocol checks delivery and re-sends if needed. Used for web, email, and file transfer when completeness matters.",
      terms: [
        {
          id: "tcp",
          label: "TCP",
          tier: "basics",
          shortDefinition:
            "Reliable, connection-oriented delivery. The sender and receiver agree the link is up before data flows.",
        },
      ],
    },
    {
      id: "transport-handshake",
      type: "teach",
      tcpLayer: 3,
      headline: "TCP three-way handshake.",
      body: "SYN — client says 'I want to connect.' SYN-ACK — server says 'OK, I'm ready.' ACK — client confirms the link is open. Then real data can flow. You'll drill the sequence more later.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "SYN — open request" },
          { icon: "server", label: "SYN-ACK — ready" },
          { icon: "monitor", label: "ACK — confirmed" },
        ],
      },
      studyTip: {
        title: "Exam tip",
        body: "Handshake = Transport layer only. Order: SYN → SYN-ACK → ACK.",
      },
    },
    {
      id: "transport-udp",
      type: "teach",
      tcpLayer: 3,
      headline: "UDP — fast, no guarantee.",
      body: "User Datagram Protocol sends quickly without confirming delivery. Used for DNS lookups and live video where speed beats perfection.",
      terms: [
        {
          id: "udp",
          label: "UDP",
          tier: "basics",
          shortDefinition:
            "Connectionless Transport protocol — no handshake, no delivery guarantee.",
        },
      ],
    },
    {
      id: "transport-ports",
      type: "teach",
      tcpLayer: 3,
      headline: "Port numbers.",
      body: "Ports tell the host which app should receive the data. Examples: TCP 443 (HTTPS), UDP 53 (DNS). Well-known ports are 0–1023.",
      terms: [
        {
          id: "port-443",
          label: "Port 443",
          tier: "basics",
          shortDefinition: "HTTPS (secure web) uses TCP port 443 by default.",
          example: "443",
        },
        {
          id: "port-53",
          label: "Port 53",
          tier: "basics",
          shortDefinition: "DNS lookups typically use UDP port 53.",
          example: "53",
        },
      ],
    },
    {
      id: "port-ranges",
      type: "memory",
      tcpLayer: 3,
      headline: "Three port ranges.",
      body: "Well-known 0–1023 · Registered 1024–49151 · Dynamic/ephemeral 49152–65535. CCNA usually tests well-known first.",
      studyTip: {
        title: "Why ranges matter",
        body: "Servers listen on well-known ports (80, 443, 53). Your browser picks a high ephemeral port for the return traffic.",
      },
    },
    {
      id: "common-ports",
      type: "memory",
      tcpLayer: 3,
      headline: "Ports to recognize now.",
      body: "TCP 80 HTTP · TCP 443 HTTPS · UDP 53 DNS (mostly) · TCP 22 SSH · TCP 23 Telnet (plain text, avoid in production).",
      studyTip: {
        title: "Transport + port",
        body: "The protocol (TCP or UDP) and port number together identify the service — both live at the Transport layer.",
      },
    },
    {
      id: "app-remote",
      type: "teach",
      tcpLayer: 4,
      headline: "Remote access at Application.",
      body: "SSH and Telnet are Application-layer terminal protocols — not Transport or Internet. SSH encrypts; Telnet does not. You manage routers and switches with SSH today.",
      terms: [
        {
          id: "ssh",
          label: "SSH",
          tier: "basics",
          shortDefinition: "Secure Shell — encrypted remote terminal access, TCP port 22.",
        },
        {
          id: "telnet",
          label: "Telnet",
          tier: "basics",
          shortDefinition: "Legacy remote terminal — no encryption, TCP port 23. Do not use on production networks.",
        },
      ],
    },
    {
      id: "defer-service-ports",
      type: "memory",
      tcpLayer: 4,
      headline: "More ports in later topics.",
      body: "FTP, DHCP, SNMP, TFTP, and NTP have dedicated lessons in IP Services. For this topic: know the model, TCP vs UDP, handshake, and the common ports above.",
      laterLearn: [
        "FTP control/data ports (20/21)",
        "DHCP UDP 67/68",
        "SNMP UDP 161",
        "NTP UDP 123",
        "TCP window size and flags (deep dive)",
      ],
    },
    {
      id: "transport-check",
      type: "checkpoint",
      tcpLayer: 3,
      headline: "Quick check — Transport",
      checkpointQuestionId: "tcp-q3",
    },
    {
      id: "internet-hero",
      type: "hero",
      tcpLayer: 2,
      headline: "Layer 2 — Internet.",
      body: "Logical addressing and routing between networks. Maps to OSI Layer 3 — IP lives here.",
    },
    {
      id: "internet-teach",
      type: "teach",
      tcpLayer: 2,
      headline: "IP and ICMP.",
      body: "IP addresses route packets between networks. ICMP carries ping and traceroute — diagnostics at this layer.",
      terms: [
        {
          id: "icmp",
          label: "ICMP",
          tier: "basics",
          shortDefinition:
            "Internet Control Message Protocol — diagnostic messages like ping echo request/reply.",
        },
      ],
      laterLearn: ["IPv4 vs IPv6", "TTL and routing"],
    },
    {
      id: "internet-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — Internet layer",
      checkpointQuestionId: "tcp-q2",
    },
    {
      id: "access-hero",
      type: "hero",
      tcpLayer: 1,
      headline: "Layer 1 — Network Access.",
      body: "Physical transmission and local delivery combined — OSI Layers 1 and 2 in one TCP/IP layer.",
    },
    {
      id: "access-teach",
      type: "teach",
      tcpLayer: 1,
      headline: "Ethernet and Wi-Fi.",
      body: "Cables, frames, MAC addresses, and link lights live here. You will go deeper in the Ethernet topic.",
      terms: [
        {
          id: "frame",
          label: "Frame",
          tier: "later",
          shortDefinition:
            "Layer 2 container for local delivery. Frame anatomy comes in the Ethernet topic.",
          laterTopicId: "ethernet",
          laterTopicLabel: "Ethernet",
          laterItems: ["Ethernet frame anatomy", "Frame headers"],
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "A unique hardware address on each NIC. Network Access uses MAC for local delivery.",
          example: "00:1A:2B:3C:4D:5E",
          laterTopicLabel: "Ethernet",
          laterItems: ["MAC address tables", "Broadcast MAC"],
        },
      ],
      media: {
        kind: "icons",
        items: [
          { icon: "cable", label: "Ethernet" },
          { icon: "wifi", label: "Wi-Fi" },
        ],
      },
      laterLearn: ["Frame anatomy", "Switch operation", "Duplex settings"],
    },
    {
      id: "access-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — Network Access",
      checkpointQuestionId: "tcp-q4",
    },
    {
      id: "misconception-tcp-ip",
      type: "misconception",
      showFullStack: true,
      headline: "TCP is not IP.",
      body: "TCP (Transport) handles reliable delivery between apps using ports. IP (Internet) handles addressing and routing between networks. Exams mix them on purpose.",
    },
    {
      id: "udp-check",
      type: "checkpoint",
      showFullStack: true,
      headline: "Quick check — UDP",
      checkpointQuestionId: "tcp-q5",
    },
    {
      id: "compare-zoom",
      type: "analogy",
      showFullStack: true,
      headline: "Micro vs macro.",
      body: "TCP/IP is the practical stack the Internet runs. OSI zooms in — one TCP/IP Application layer becomes OSI Application, Presentation, and Session. Same network, different granularity.",
    },
    {
      id: "compare-when",
      type: "teach",
      showFullStack: true,
      headline: "When do you use which model?",
      body: "Troubleshooting a stubborn problem? OSI — more places to look. Explaining how the Internet works? TCP/IP. Learning? OSI first for the map, then TCP/IP for what runs in production.",
      studyTip: {
        title: "Compare them",
        body: "OSI: 7 layers, conceptual, finer troubleshooting. TCP/IP: 4 layers, practical, Internet implementation. Neither is wrong — they answer different questions.",
      },
    },
    {
      id: "summary",
      type: "summary",
      showFullStack: true,
      headline: "You have the practical model.",
      body: "Four TCP/IP layers mapped to OSI, TCP vs UDP, handshake basics, common ports (80/443/53/22/23), and what to defer to IP Services. Next: Ethernet — frames and switches in detail.",
    },
  ],
};
