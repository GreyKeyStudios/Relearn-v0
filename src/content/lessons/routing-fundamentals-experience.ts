import type { TopicExperience } from "@/content/types";

/** LES — Routing fundamentals: PC→GW→table anatomy → LPM → AD vs metric (Domain 3 rewrite). */
export const ROUTING_FUNDAMENTALS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Follow one packet off the LAN.",
      body: "Switching kept frames inside one Layer 2 world. When PC-A must reach a different network, the packet needs a router. Today we watch destination IP — and the table that answers “where next?”",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "PC-A" },
          { icon: "server", label: "Gateway" },
          { icon: "globe", label: "Remote net" },
        ],
      },
      terms: [
        {
          id: "packet",
          label: "IP packet",
          tier: "basics",
          shortDefinition:
            "Layer 3 container with source and destination IP — what routers forward between networks.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container on each hop’s LAN — rewritten each hop; destination IP inside stays the same.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 address switches use on a LAN — not how routers choose inter-network paths.",
        },
      ],
    },
    {
      id: "path-story",
      type: "teach",
      tcpLayer: 2,
      headline: "Worked path — PC to remote.",
      body: "PC-A (10.1.1.10/24) wants 10.2.2.50. Same? No — different subnet. PC sends to its default gateway (10.1.1.1). The router reads destination IP 10.2.2.50 and looks up its routing table — not a MAC table.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "10.1.1.10" },
          { icon: "server", label: "GW 10.1.1.1" },
          { icon: "globe", label: "10.2.2.50" },
        ],
      },
    },
    {
      id: "l2-rebuild",
      type: "misconception",
      tcpLayer: 2,
      headline: "Dest IP stays; MAC changes each hop.",
      body: "Across routers, the destination IP stays 10.2.2.50 until delivery. Each hop strips the old Ethernet frame and builds a new one toward the next device. End-to-end MAC is a myth.",
    },
    {
      id: "table-anatomy",
      type: "teach",
      tcpLayer: 2,
      headline: "Meet one routing-table row.",
      body: "Imagine: S 10.2.2.0/24 [1/0] via 10.0.0.2, Gig0/0. Prefix = where. via = next-hop who. AD/metric in brackets. Code S = static (C = connected, O = OSPF later).",
      terms: [
        {
          id: "routing-table",
          label: "Routing table (RIB)",
          tier: "basics",
          shortDefinition:
            "Router’s map of prefixes — which network, via whom, and how the entry was learned.",
        },
        {
          id: "next-hop",
          label: "Next-hop",
          tier: "basics",
          shortDefinition:
            "Neighbor IP on a shared link that should receive packets for this prefix.",
          example: "10.0.0.2",
        },
      ],
      studyTip: {
        title: "show ip route",
        body: "Each line answers: network?, how learned?, AD/metric?, next-hop?, exit interface?",
      },
    },
    {
      id: "table-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — what drives routing",
      checkpointQuestionId: "routing-fundamentals-q1",
    },
    {
      id: "connected",
      type: "teach",
      tcpLayer: 2,
      headline: "Connected routes appear automatically.",
      body: "When Gig0/0 has 10.1.1.1/24 and is up/up, IOS installs C 10.1.1.0/24 — connected. You did not type a static for the cable you plugged into.",
      terms: [
        {
          id: "connected",
          label: "Connected route",
          tier: "basics",
          shortDefinition:
            "Automatically added for each active interface network (code C) — AD 0.",
        },
      ],
    },
    {
      id: "connected-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — connected routes",
      checkpointQuestionId: "routing-fundamentals-q4",
    },
    {
      id: "lpm-work",
      type: "teach",
      tcpLayer: 2,
      headline: "Worked example — longest prefix.",
      body: "Packet to 10.1.2.5. Table has 10.0.0.0/8, 10.1.0.0/16, 10.1.2.0/24, and 0.0.0.0/0. All could “match” loosely — /24 wins because it is most specific. AD and metric do not override a longer match.",
      terms: [
        {
          id: "lpm",
          label: "Longest prefix match",
          tier: "basics",
          shortDefinition:
            "Among matching routes, the most specific prefix wins (/24 beats /16 beats /0).",
        },
      ],
    },
    {
      id: "lpm-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — longest prefix",
      checkpointQuestionId: "routing-fundamentals-q2",
    },
    {
      id: "default-route",
      type: "teach",
      tcpLayer: 2,
      headline: "Default route = last resort.",
      body: "0.0.0.0/0 matches only when nothing more specific exists — gateway of last resort toward an ISP or lab exit. Not the same as the host’s default gateway IP, though they often cooperate.",
      terms: [
        {
          id: "default-route",
          label: "Default route",
          tier: "basics",
          shortDefinition: "0.0.0.0/0 — catch-all when no longer prefix matches.",
        },
      ],
    },
    {
      id: "default-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — default notation",
      checkpointQuestionId: "routing-fundamentals-q3",
    },
    {
      id: "ad-vs-metric",
      type: "teach",
      tcpLayer: 2,
      headline: "AD vs metric — different questions.",
      body: "Same prefix length from two sources? Administrative distance picks the trusted source (connected 0, static 1, OSPF 110 — lower wins). Metric picks best path inside one source (OSPF cost, etc.).",
      terms: [
        {
          id: "ad",
          label: "Administrative distance",
          tier: "basics",
          shortDefinition:
            "Trust ranking of route sources — used when equal-length prefixes compete.",
        },
        {
          id: "metric",
          label: "Metric",
          tier: "basics",
          shortDefinition:
            "Path quality inside one protocol/source — not a substitute for longest-prefix match.",
        },
      ],
      studyTip: {
        title: "Order of decisions",
        body: "1) Longest prefix. 2) If tie on length, lower AD source. 3) Then metric within that source.",
      },
    },
    {
      id: "ttl-cyber",
      type: "teach",
      tcpLayer: 2,
      headline: "TTL — your cyber hook still holds.",
      body: "Each router decrements Time To Live by 1. At 0 the packet dies (often an ICMP Time Exceeded reply). Traceroute uses that hop-by-hop countdown — same idea you met in cybersecurity.",
      terms: [
        {
          id: "ttl",
          label: "TTL",
          tier: "basics",
          shortDefinition:
            "Hop limit in the IP header — decremented each router; 0 means drop.",
        },
        {
          id: "icmp",
          label: "ICMP",
          tier: "basics",
          shortDefinition:
            "Internet Control Message Protocol — used for Time Exceeded and other network diagnostics.",
        },
      ],
    },
    {
      id: "ttl-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — TTL",
      checkpointQuestionId: "routing-fundamentals-q5",
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Routing map in one story.",
      body: "Off-LAN → gateway → destination IP lookup. Read a table row. Connected installs itself. Longest prefix first; AD then metric for ties. TTL counts hops. Next: you write static rows by hand.",
    },
  ],
};
