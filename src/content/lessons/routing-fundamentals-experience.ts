import type { TopicExperience } from "@/content/types";

/** LES experience — Routing fundamentals (Wave 3 / Domain 3). */
export const ROUTING_FUNDAMENTALS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Routers move packets between networks.",
      body: "Switches forward frames inside a LAN by MAC. When traffic must leave a subnet, a router looks at the destination IP and picks a next hop. That Layer 3 job is routing.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "Router" },
          { icon: "globe", label: "IP networks" },
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
            "Layer 2 container switches forward on a LAN — MAC addressed, not IP routed.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address used by switches on a LAN — not how routers choose inter-network paths.",
        },
      ],
    },
    {
      id: "bridge-switching",
      type: "teach",
      tcpLayer: 2,
      headline: "Layer 3 vs Layer 2 switch.",
      body: "A Layer 2 switch bridges frames in a VLAN. A router (or L3 device) forwards IP packets between subnets. Different question: which MAC port vs which IP network next?",
      terms: [
        {
          id: "router",
          label: "Router",
          tier: "basics",
          shortDefinition:
            "Device that forwards IP packets between networks using a routing table.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 PDU on the LAN — already introduced on the hero screen.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Hardware address used for L2 switch forwarding — not the Layer 3 path key.",
        },
      ],
    },
    {
      id: "why-routers",
      type: "teach",
      tcpLayer: 2,
      headline: "Why you need routers.",
      body: "Broadcasts stay in a subnet. Different networks need a gateway that can rewrite the next-hop path — the router — so hosts in 10.1.1.0/24 can reach 10.2.2.0/24 or the Internet.",
    },
    {
      id: "lookup-dest",
      type: "teach",
      tcpLayer: 2,
      headline: "Destination IP lookup.",
      body: "On each packet, the router reads the destination IP and searches its routing table for a matching prefix. The winning entry supplies the outgoing interface and/or next-hop IP.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Dest IP in" },
          { icon: "server", label: "Table lookup" },
          { icon: "globe", label: "Next hop out" },
        ],
      },
    },
    {
      id: "lookup-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — routing decision",
      checkpointQuestionId: "routing-fundamentals-q1",
    },
    {
      id: "rib-teach",
      type: "teach",
      tcpLayer: 2,
      headline: "The routing table (RIB).",
      body: "The Routing Information Base is the router’s map of known prefixes — connected, static, or learned from protocols. show ip route displays it with codes like C, S, and O.",
      terms: [
        {
          id: "rib",
          label: "RIB",
          tier: "basics",
          shortDefinition:
            "Routing Information Base — the routing table that stores known prefixes and how to reach them.",
        },
        {
          id: "routing-table",
          label: "Routing table",
          tier: "basics",
          shortDefinition:
            "Same idea as the RIB in everyday CCNA talk — prefix, next hop, AD, and metric.",
        },
      ],
      laterLearn: ["FIB / CEF forwarding details"],
    },
    {
      id: "connected",
      type: "teach",
      tcpLayer: 2,
      headline: "Connected routes appear automatically.",
      body: "When an interface has an IP and is up/up, IOS installs that network as Connected (code C). No static line and no OSPF needed for the local wire.",
      terms: [
        {
          id: "connected-route",
          label: "Connected route",
          tier: "basics",
          shortDefinition:
            "Route installed automatically for an active interface’s network — AD 0 on Cisco.",
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
      id: "longest-prefix",
      type: "teach",
      tcpLayer: 2,
      headline: "Longest prefix match.",
      body: "If several routes match a destination, the most specific prefix wins — /24 beats /16 beats 0.0.0.0/0. Metric and AD do not override a longer match.",
      terms: [
        {
          id: "longest-prefix",
          label: "Longest prefix match",
          tier: "basics",
          shortDefinition:
            "Among matching routes, the router chooses the prefix with the most matching bits.",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "More specific first. Default route is the last resort.",
      },
    },
    {
      id: "lpm-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — longest prefix",
      checkpointQuestionId: "routing-fundamentals-q2",
    },
    {
      id: "ad-concept",
      type: "teach",
      tcpLayer: 2,
      headline: "Administrative distance (AD).",
      body: "When two sources offer the same prefix length, AD picks the trusted source. Lower AD wins — connected 0, static 1, OSPF 110 are classic Cisco values.",
      terms: [
        {
          id: "ad",
          label: "Administrative distance",
          tier: "basics",
          shortDefinition:
            "Trust ranking for route sources. Lower AD preferred when prefixes are equal length.",
        },
      ],
      laterLearn: ["Full AD chart for every protocol"],
    },
    {
      id: "default-route",
      type: "teach",
      tcpLayer: 2,
      headline: "Default route 0.0.0.0/0.",
      body: "The default route matches every destination when nothing more specific exists — the gateway of last resort. Many edge routers use it toward an ISP.",
      terms: [
        {
          id: "default-route",
          label: "Default route",
          tier: "basics",
          shortDefinition:
            "0.0.0.0/0 — catch-all route used only when no longer prefix matches.",
          example: "0.0.0.0/0",
        },
      ],
    },
    {
      id: "default-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — default route",
      checkpointQuestionId: "routing-fundamentals-q3",
    },
    {
      id: "ttl-hop",
      type: "teach",
      tcpLayer: 2,
      headline: "TTL counts hops.",
      body: "Each router decrements Time To Live by 1. When TTL hits 0, the packet is dropped — that hop limit stops loops and powers traceroute.",
      terms: [
        {
          id: "ttl",
          label: "TTL",
          tier: "basics",
          shortDefinition:
            "Time To Live — hop counter in the IP header, decremented by each router.",
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
      id: "control-vs-data",
      type: "teach",
      tcpLayer: 2,
      headline: "Control plane vs data plane.",
      body: "Control plane builds and maintains the routing table (static config or protocols). Data plane forwards packets using those answers. Light distinction only — not a deep CEF lesson.",
      terms: [
        {
          id: "control-plane",
          label: "Control plane",
          tier: "basics",
          shortDefinition: "Builds the routing table — static config or routing protocols.",
        },
        {
          id: "data-plane",
          label: "Data plane",
          tier: "basics",
          shortDefinition: "Forwards packets using the routes already installed.",
        },
      ],
      laterLearn: ["CEF / FIB internals", "Process switching vs CEF"],
    },
    {
      id: "mac-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Not a MAC table across subnets.",
      body: "Routers do not forward by destination MAC for the whole path. Each hop rewrites Layer 2 for the next link; the destination IP stays the guide across networks.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition: "Local link hardware address — rebuilt hop by hop, not used as the end-to-end path key.",
        },
      ],
    },
    {
      id: "sources-preview",
      type: "teach",
      tcpLayer: 2,
      headline: "How routes get into the table.",
      body: "Connected install themselves. Static routes are typed by you. Dynamic protocols like OSPF learn and share. Next lessons: static routes, then OSPF basics.",
      laterLearn: ["Static route syntax", "OSPF neighbor/adjacency"],
      terms: [
        {
          id: "static",
          label: "Static route",
          tier: "later",
          shortDefinition: "Manually configured path to a prefix.",
          laterTopicId: "static-routes",
          laterTopicLabel: "Static Routes",
          laterItems: ["ip route syntax", "Floating static", "Default static"],
        },
        {
          id: "ospf",
          label: "OSPF",
          tier: "later",
          shortDefinition: "Link-state IGP that advertises topology and installs routes.",
          laterTopicId: "ospf-basics",
          laterTopicLabel: "OSPF Basics",
          laterItems: ["Areas", "Hello / adjacency", "Cost metric"],
        },
      ],
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 2,
      headline: "What we defer.",
      body: "Deep OSPF, EIGRP metrics, and CEF internals wait. Today you own lookup, connected routes, longest prefix, AD idea, defaults, and TTL hops.",
      laterLearn: [
        "OSPF in depth (next)",
        "EIGRP deep dive",
        "CEF / FIB detail",
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Routing fundamentals covered.",
      body: "You can explain L3 vs L2, RIB lookup, connected routes, longest prefix, AD concept, 0.0.0.0/0, TTL, and control vs data plane. Next: static routes.",
    },
  ],
};
