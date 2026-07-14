import type { TopicExperience } from "@/content/types";

/** LES — Static routes: continue RF topology with typed routes (Domain 3 rewrite). */
export const STATIC_ROUTES_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Write the missing map row.",
      body: "Routing fundamentals showed how lookup works. Static routes are hand-typed rows in that table — S codes you install for stubs, defaults, and lab paths.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "R1" },
          { icon: "cable", label: "ip route" },
          { icon: "globe", label: "Remote /24" },
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
            "Manually configured path: network, mask, and next-hop (or exit interface).",
        },
      ],
    },
    {
      id: "continue-topo",
      type: "teach",
      tcpLayer: 2,
      headline: "Same topology, missing prefix.",
      body: "R1 knows its connected LAN. Remote 192.168.2.0/24 sits behind neighbor 10.0.0.2. Until you add a static (or run OSPF later), R1 has no idea how to reach that /24.",
    },
    {
      id: "why-static",
      type: "teach",
      tcpLayer: 2,
      headline: "When statics fit.",
      body: "No neighbor chatter, tiny CPU, full control — great for stub sites, lab links, and a default toward the ISP. Painful for huge cores that change every hour.",
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
      headline: "Worked example — add the static.",
      body: "On R1: ip route 192.168.2.0 255.255.255.0 10.0.0.2. Order: destination network, mask, next-hop IP. show ip route now shows S 192.168.2.0/24 via 10.0.0.2.",
      terms: [
        {
          id: "next-hop",
          label: "Next-hop",
          tier: "basics",
          shortDefinition:
            "IP of the neighboring router that should receive packets for this prefix.",
          example: "10.0.0.2",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "192.168.2.0/24" },
          { icon: "server", label: "via 10.0.0.2" },
        ],
      },
    },
    {
      id: "ethernet-nh",
      type: "teach",
      tcpLayer: 2,
      headline: "On Ethernet, prefer a next-hop IP.",
      body: "Multi-access Ethernet: give a next-hop IP so R1 knows who to ARP for. Exit-interface-only statics on Ethernet can trigger messy recursive ARP — prefer via neighbor IP in this course.",
      studyTip: {
        title: "Picture it",
        body: "Next-hop 10.0.0.2 = “ask that router on this shared link.”",
      },
    },
    {
      id: "nh-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — multi-access next-hop",
      checkpointQuestionId: "static-routes-q5",
    },
    {
      id: "default-static",
      type: "teach",
      tcpLayer: 2,
      headline: "Default static toward the ISP.",
      body: "ip route 0.0.0.0 0.0.0.0 203.0.113.1 installs the gateway of last resort. Anything without a more specific match exits toward that neighbor.",
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
      headline: "Quick check — default static",
      checkpointQuestionId: "static-routes-q3",
    },
    {
      id: "ad-default",
      type: "teach",
      tcpLayer: 2,
      headline: "Static AD defaults to 1.",
      body: "Normal Cisco static AD is 1 — preferred over OSPF (110) for the same prefix length, still loses to connected (0). Floating backups raise AD on purpose.",
      terms: [
        {
          id: "ad",
          label: "Administrative distance",
          tier: "basics",
          shortDefinition:
            "Trust rank of the route source — lower wins among equal-length prefixes.",
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
      headline: "Floating static = intentional backup.",
      body: "Primary: ip route 192.168.2.0 255.255.255.0 10.0.0.2. Backup: same network via 10.0.0.6 with AD 210. The backup stays idle until the primary leaves the table.",
      terms: [
        {
          id: "floating",
          label: "Floating static",
          tier: "basics",
          shortDefinition:
            "Static with raised AD so it only installs when a better (lower AD) route disappears.",
        },
      ],
    },
    {
      id: "floating-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — floating idea",
      checkpointQuestionId: "static-routes-q2",
    },
    {
      id: "recursion-light",
      type: "teach",
      tcpLayer: 2,
      headline: "Recursive lookup — light.",
      body: "If the next-hop is not on a connected network, the router looks up that next-hop via another route. If that second lookup fails, the static cannot be used. Keep next-hops reachable.",
      laterLearn: ["Recursive static pitfalls", "IP SLA / tracking"],
    },
    {
      id: "verify",
      type: "teach",
      tcpLayer: 2,
      headline: "Verify the story.",
      body: "show ip route — S entries present? ping / traceroute toward the remote. Check next-hop is reachable (connected or resolved). Wrong mask is a classic silent miss.",
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Statics in one story.",
      body: "Type network + mask + next-hop → S appears. Prefer Ethernet next-hop IP. Default 0/0 for last resort. AD 1 by default; raise AD for floating backups. Recursion needs a reachable next-hop.",
    },
  ],
};
