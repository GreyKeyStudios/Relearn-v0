import type { StudyTip, TopicExperience } from "@/content/types";

/** Amber study tip on the final card — kept alongside the visual table. */
const RANGES_TABLE: StudyTip = {
  title: "Special IPv4 ranges",
  body:
    "Private (RFC 1918): 10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16 — Loopback: 127.0.0.0/8 — APIPA: 169.254.0.0/16 — Multicast: 224.0.0.0/4 — Docs: 192.0.2.0/24 · 198.51.100.0/24 · 203.0.113.0/24",
};

/** LES experience — recognize special IPv4 ranges by purpose (Wave 1). */
export const IP_RANGES_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Special IPv4 ranges.",
      body: "Not every address is a normal host on the Internet. CCNA expects you to glance at a block and know its job — private, loopback, APIPA, multicast, or documentation. Recognition, not subnet math.",
    },
    {
      id: "aplus-not-classes",
      type: "misconception",
      tcpLayer: 2,
      headline: "Skip the class letters.",
      body: "If you took A+, you might recall Class A, B, and C — old labels for address blocks. CCNA dropped that. This lesson is simpler: see a reserved range, know its purpose.",
      studyTip: {
        title: "What were classes?",
        body: "Old scheme: the first octet range decided block size (A = huge, C = small). CIDR replaced all that with /x prefixes. You do not need class math here.",
      },
    },
    {
      id: "purpose-spotting",
      type: "teach",
      tcpLayer: 2,
      headline: "Spot the purpose.",
      body: "Exam questions usually ask: Is it routable on the public Internet? Who uses it? What happens if you see it on a host? Learn the handful of reserved blocks — the table at the end is your cheat sheet.",
    },
    {
      id: "multicast",
      type: "teach",
      tcpLayer: 2,
      headline: "Multicast — 224.0.0.0/4.",
      body: "224.0.0.0 through 239.255.255.255 — one sender, many receivers. Routers running OSPF listen on 224.0.0.5 (All SPF Routers). Not a host address you assign to a PC.",
      terms: [
        {
          id: "multicast",
          label: "Multicast",
          tier: "basics",
          shortDefinition: "224.0.0.0/4 — one-to-many delivery.",
        },
        {
          id: "ospf",
          label: "OSPF",
          tier: "later",
          shortDefinition:
            "Open Shortest Path First — a dynamic routing protocol routers use to share network reachability.",
          laterTopicId: "ospf-basics",
          laterTopicLabel: "OSPF Basics",
        },
      ],
    },
    {
      id: "testnet-why",
      type: "teach",
      tcpLayer: 2,
      headline: "What is TEST-NET?",
      body: "Not a live network. Not file storage. IANA reserved three blocks so books, RFC standards docs, and lab configs can use safe example IPs (192.0.2.1) instead of a real company's address.",
      studyTip: {
        title: "Like 555 in the movies",
        body: "Films use 555 numbers so you never call a real person. TEST-NET IPs work the same way — safe fake addresses for textbooks and labs, never for production.",
      },
      terms: [
        {
          id: "testnet",
          label: "TEST-NET",
          tier: "basics",
          shortDefinition:
            "Documentation-only blocks — fake example addresses, never for production.",
        },
        {
          id: "iana",
          label: "IANA",
          tier: "basics",
          shortDefinition:
            "Internet Assigned Numbers Authority — allocates and reserves global IP address blocks.",
        },
        {
          id: "rfc",
          label: "RFC",
          tier: "basics",
          shortDefinition:
            "Request for Comments — an Internet standards document. You saw RFC 1918 in the IPv4 lesson.",
        },
      ],
    },
    {
      id: "testnet-blocks",
      type: "memory",
      tcpLayer: 2,
      headline: "Three documentation blocks.",
      body: "192.0.2.0/24 (TEST-NET-1) · 198.51.100.0/24 (TEST-NET-2) · 203.0.113.0/24 (TEST-NET-3). If you see these in a real config, something is wrong — they are for examples in docs only.",
      studyTip: {
        title: "Do not confuse with",
        body: "Private 192.168.x is for real LANs. TEST-NET 192.0.2.x is only for documentation — different block entirely.",
      },
    },
    {
      id: "already-know",
      type: "memory",
      tcpLayer: 2,
      headline: "Three you already know.",
      body: "From IPv4 addressing: Private 10.0.0.0/8 (any 10.x.x.x) · 172.16.0.0/12 · 192.168.0.0/16 — your router runs NAT at the edge, not the switch. Loopback 127.0.0.0/8. APIPA 169.254.0.0/16. This lesson adds multicast and TEST-NET.",
      terms: [
        {
          id: "private",
          label: "Private (RFC 1918)",
          tier: "basics",
          shortDefinition:
            "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — internal LANs; NAT for Internet access.",
        },
        {
          id: "loopback",
          label: "Loopback",
          tier: "basics",
          shortDefinition: "127.0.0.0/8 — traffic loops back to the same device.",
        },
        {
          id: "apipa",
          label: "APIPA",
          tier: "basics",
          shortDefinition:
            "169.254.0.0/16 — automatic link-local when DHCP is unavailable.",
        },
      ],
    },
    {
      id: "private-mnemonic",
      type: "memory",
      tcpLayer: 2,
      headline: "Private ranges — no CIDR math.",
      body: "10 = ALL (any 10.x.x.x). 172 = ONLY 16–31 (172.16.0.0 through 172.31.255.255). 192 = ONLY 168 (192.168.x.x). Read the octets — do not calculate /12 on the exam.",
      studyTip: {
        title: "Why not public for every PC?",
        body: "IPv4 has only ~4 billion addresses. Private ranges let millions of homes reuse 192.168.1.x — NAT shares one public IP at the router.",
      },
    },
    {
      id: "172-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Trap: 172.40 is public.",
      body: "172.40.1.1 looks close to private — it is public. Only 172.16 through 172.31 count. 172.20.15.4 is private; 172.40.1.1 is not. Same first octet, different rule.",
    },
    {
      id: "multicast-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — multicast",
      checkpointQuestionId: "ip-ranges-q1",
    },
    {
      id: "testnet-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — TEST-NET",
      checkpointQuestionId: "ip-ranges-q3",
    },
    {
      id: "apipa-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — APIPA",
      checkpointQuestionId: "ip-ranges-q2",
    },
    {
      id: "private-nat-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — private & NAT",
      checkpointQuestionId: "ip-ranges-q4",
    },
    {
      id: "loopback-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — loopback",
      checkpointQuestionId: "ip-ranges-q5",
    },
    {
      id: "ranges-table",
      type: "memory",
      tcpLayer: 2,
      headline: "Your recall table.",
      body: "Memorize purpose, not class letters. Private = internal · Loopback = this device · APIPA = no DHCP · Multicast = one-to-many · TEST-NET = example IPs in docs only.",
      studyTip: RANGES_TABLE,
      media: { kind: "ip-ranges-table" },
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "IP ranges covered.",
      body: "You can spot private, loopback, APIPA, multicast, and TEST-NET blocks — and you know classes are not how CCNA asks these questions. Next up in Wave 1: IPv6 basics.",
    },
  ],
};
