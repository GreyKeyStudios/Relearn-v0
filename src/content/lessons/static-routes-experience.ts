import type { TopicExperience } from "@/content/types";

/** LES experience — Static routes (Wave 3 / Domain 3). */
export const STATIC_ROUTES_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "You tell the router where to go.",
      body: "Routing fundamentals explained lookup and longest prefix. Static routes are hand-written table entries — simple, predictable, and perfect for stubs and defaults toward an ISP.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "Router" },
          { icon: "cable", label: "ip route" },
        ],
      },
      terms: [
        {
          id: "routing-table",
          label: "Routing table",
          tier: "basics",
          shortDefinition:
            "RIB of known prefixes — statics appear as code S when installed.",
        },
        {
          id: "static-route",
          label: "Static route",
          tier: "basics",
          shortDefinition:
            "Manually configured path: network, mask, and next-hop or exit interface.",
        },
      ],
    },
    {
      id: "why-static",
      type: "teach",
      tcpLayer: 2,
      headline: "Why use static routes?",
      body: "No neighbor chatter, tiny CPU cost, full admin control. Best for stub sites, lab paths, and a default toward the Internet — not for huge cores that change often.",
    },
    {
      id: "stub-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — when statics fit",
      checkpointQuestionId: "static-routes-q4",
    },
    {
      id: "syntax",
      type: "teach",
      tcpLayer: 2,
      headline: "ip route network mask next-hop.",
      body: "Cisco syntax: ip route <network> <mask> <next-hop-ip>. Example: ip route 192.168.2.0 255.255.255.0 10.0.0.2 sends that /24 via neighbor 10.0.0.2.",
      terms: [
        {
          id: "next-hop",
          label: "Next-hop",
          tier: "basics",
          shortDefinition:
            "IP address of the neighboring router that should receive packets for this prefix.",
          example: "10.0.0.2",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "Order: destination network, mask, then next-hop (or exit interface).",
      },
    },
    {
      id: "default-static",
      type: "teach",
      tcpLayer: 2,
      headline: "Default static route.",
      body: "ip route 0.0.0.0 0.0.0.0 <next-hop> installs the gateway of last resort. Traffic with no better match exits toward that neighbor — common ISP handoff.",
      terms: [
        {
          id: "default-route",
          label: "Default route",
          tier: "basics",
          shortDefinition: "0.0.0.0/0 — catch-all when no longer prefix matches.",
          example: "ip route 0.0.0.0 0.0.0.0 203.0.113.1",
        },
      ],
    },
    {
      id: "default-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — default config",
      checkpointQuestionId: "static-routes-q3",
    },
    {
      id: "ad-default",
      type: "teach",
      tcpLayer: 2,
      headline: "Static AD defaults to 1.",
      body: "On Cisco IOS, a normal static route has administrative distance 1 — preferred over OSPF (110) but still loses to connected (0) for the same prefix.",
      terms: [
        {
          id: "ad",
          label: "Administrative distance",
          tier: "basics",
          shortDefinition:
            "Trust score for a route source. Static default = 1 on Cisco.",
        },
      ],
    },
    {
      id: "ad-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — static AD",
      checkpointQuestionId: "static-routes-q1",
    },
    {
      id: "floating",
      type: "teach",
      tcpLayer: 2,
      headline: "Floating static = higher AD.",
      body: "Raise AD (for example 200) so the static stays out of the table until a better (lower AD) route disappears. Then it becomes the backup — a floating static.",
      terms: [
        {
          id: "floating-static",
          label: "Floating static",
          tier: "basics",
          shortDefinition:
            "Backup static with intentionally higher AD than the primary route.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Primary (low AD)" },
          { icon: "server", label: "Fails" },
          { icon: "cable", label: "Floating installs" },
        ],
      },
    },
    {
      id: "floating-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — floating static",
      checkpointQuestionId: "static-routes-q2",
    },
    {
      id: "nexthop-vs-exit",
      type: "teach",
      tcpLayer: 2,
      headline: "Next-hop vs exit interface.",
      body: "On Ethernet (multi-access), prefer a next-hop IP so the router knows who to ARP for. Exit-interface-only statics on Ethernet can cause messy recursive ARP behavior.",
      terms: [
        {
          id: "exit-interface",
          label: "Exit interface",
          tier: "basics",
          shortDefinition:
            "Outgoing interface named in a static (e.g. GigabitEthernet0/0) instead of — or with — a next-hop.",
        },
      ],
      laterLearn: ["Point-to-point serial exit-interface nuance"],
    },
    {
      id: "nexthop-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — Ethernet preference",
      checkpointQuestionId: "static-routes-q5",
    },
    {
      id: "recursive-light",
      type: "teach",
      tcpLayer: 2,
      headline: "Recursive lookup — light.",
      body: "If the next-hop is not directly connected, the router looks up that next-hop IP via another route. If that second lookup fails, the static cannot be used.",
      terms: [
        {
          id: "recursive",
          label: "Recursive lookup",
          tier: "basics",
          shortDefinition:
            "Extra routing-table search to resolve a next-hop that is not on a connected link.",
        },
      ],
      laterLearn: ["Fully specified static (next-hop + exit interface)"],
    },
    {
      id: "verify",
      type: "teach",
      tcpLayer: 2,
      headline: "Verify with show ip route.",
      body: "show ip route (or show ip route static) lists installed statics as code S. Confirm the prefix, next-hop, and that traffic can ping/traceroute the far network.",
      studyTip: {
        title: "CLI habit",
        body: "Also: show running-config | section ip route. Remove with no ip route …",
      },
    },
    {
      id: "one-way-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Routes must work both ways.",
      body: "A static on one router does not auto-create the return path. Missing reciprocal routes cause one-way pings — classic lab headache.",
    },
    {
      id: "ipv6-light",
      type: "teach",
      tcpLayer: 2,
      headline: "IPv6 static — light mention.",
      body: "IPv6 uses ipv6 route <prefix/length> <next-hop>. Same idea as IPv4 statics; deep IPv6 addressing and OSPFv3 stay for later practice.",
      laterLearn: ["Deep IPv6 static labs", "OSPFv3"],
      terms: [
        {
          id: "ipv6-route",
          label: "ipv6 route",
          tier: "basics",
          shortDefinition:
            "Cisco command to install an IPv6 static route — prefix/length plus next-hop.",
          example: "ipv6 route 2001:db8::/64 2001:db8:1::1",
        },
      ],
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 2,
      headline: "What we defer.",
      body: "Null0 blackhole tricks for redistribution, advanced recursive edge cases, and heavy IPv6 static design wait. Today: syntax, default, AD 1, floating, next-hop on Ethernet, verify.",
      laterLearn: [
        "Null0 / summarization blackholes",
        "Redistribution of statics",
        "Deep IPv6 statics",
      ],
    },
    {
      id: "upcoming",
      type: "teach",
      tcpLayer: 2,
      headline: "Dynamic next.",
      body: "When many networks change often, static typing does not scale. OSPF will share topology automatically — next topic after you can write and verify statics.",
      laterLearn: ["OSPF Basics"],
      terms: [
        {
          id: "ospf",
          label: "OSPF",
          tier: "later",
          shortDefinition: "Link-state IGP that learns routes without hand typing every prefix.",
          laterTopicId: "ospf-basics",
          laterTopicLabel: "OSPF Basics",
          laterItems: ["Hello / adjacency", "Area 0", "Cost"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Static routes covered.",
      body: "You can configure ip route, defaults, AD 1 vs floating backups, prefer next-hop on Ethernet, explain light recursion, and verify with show ip route. Next: OSPF basics.",
    },
  ],
};
