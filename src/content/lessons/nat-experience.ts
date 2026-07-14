import type { TopicExperience } from "@/content/types";

/** LES experience — NAT (Wave 3 / Domain 3). */
export const NAT_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Private IPs, public Internet.",
      body: "RFC 1918 private addresses are not Internet-routable. NAT on an edge router rewrites packets so many internal hosts can share scarce public IPv4 addresses.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "Edge router" },
          { icon: "globe", label: "Public IP" },
        ],
      },
      terms: [
        {
          id: "nat",
          label: "NAT",
          tier: "basics",
          shortDefinition:
            "Network Address Translation — change IP addresses (and often ports) as traffic crosses a router.",
        },
        {
          id: "rfc1918",
          label: "RFC 1918",
          tier: "basics",
          shortDefinition:
            "Private IPv4 ranges (10/8, 172.16/12, 192.168/16) for internal use only.",
          example: "192.168.1.10",
        },
      ],
    },
    {
      id: "why-nat",
      type: "teach",
      tcpLayer: 2,
      headline: "Why NAT exists.",
      body: "Public IPv4 addresses are scarce. Enterprises keep private addressing inside and translate at the ISP edge — conserve public IPs and hide internal numbering.",
    },
    {
      id: "why-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — why NAT",
      checkpointQuestionId: "nat-q5",
    },
    {
      id: "static-vs-pat",
      type: "teach",
      tcpLayer: 2,
      headline: "Static NAT vs PAT.",
      body: "Static NAT is a fixed one-to-one private↔public map (often for a server). PAT (overload) maps many privates to one public IP using unique TCP/UDP port numbers.",
      terms: [
        {
          id: "static-nat",
          label: "Static NAT",
          tier: "basics",
          shortDefinition: "Permanent one-to-one mapping of an inside address to a public address.",
        },
        {
          id: "pat",
          label: "PAT",
          tier: "basics",
          shortDefinition:
            "Port Address Translation / NAT overload — many inside hosts share one public IP via ports.",
        },
        {
          id: "tcp",
          label: "TCP",
          tier: "basics",
          shortDefinition:
            "Transport protocol with ports — PAT tracks source ports to multiplex sessions.",
        },
        {
          id: "udp",
          label: "UDP",
          tier: "basics",
          shortDefinition:
            "Connectionless transport with ports — also tracked by PAT overload.",
        },
      ],
    },
    {
      id: "pat-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — PAT name",
      checkpointQuestionId: "nat-q1",
    },
    {
      id: "static-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — static NAT",
      checkpointQuestionId: "nat-q3",
    },
    {
      id: "inside-local",
      type: "teach",
      tcpLayer: 2,
      headline: "Inside local vs inside global.",
      body: "Inside local is the real private address on the host. Inside global is the translated address the outside world sees. Master these two first — they drive most CCNA questions.",
      terms: [
        {
          id: "inside-local",
          label: "Inside local",
          tier: "basics",
          shortDefinition: "Actual private IP on the internal host before NAT.",
          example: "192.168.1.50",
        },
        {
          id: "inside-global",
          label: "Inside global",
          tier: "basics",
          shortDefinition: "Public (or external) address representing that host after NAT.",
          example: "203.0.113.10",
        },
      ],
      laterLearn: ["Outside local / outside global full matrix"],
    },
    {
      id: "inside-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — inside local",
      checkpointQuestionId: "nat-q4",
    },
    {
      id: "four-way-light",
      type: "teach",
      tcpLayer: 2,
      headline: "Outside terms — optional peek.",
      body: "Outside global is a public address as seen on the Internet; outside local is how that remote peer appears on the inside. Know the names exist — deep four-way quizzes can wait.",
      terms: [
        {
          id: "outside-global",
          label: "Outside global",
          tier: "basics",
          shortDefinition: "Public address of an outside host as seen on the Internet.",
        },
        {
          id: "outside-local",
          label: "Outside local",
          tier: "later",
          shortDefinition:
            "How an outside address appears from the inside — rarely the first exam focus.",
          laterItems: ["Full four-address NAT matrix drills"],
        },
      ],
      laterLearn: ["Full outside local / outside global matrix drills"],
    },
    {
      id: "interfaces",
      type: "teach",
      tcpLayer: 2,
      headline: "ip nat inside / outside.",
      body: "Mark private-facing interfaces with ip nat inside and the ISP/public-facing interface with ip nat outside. Wrong roles = no translations.",
      terms: [
        {
          id: "nat-inside",
          label: "ip nat inside",
          tier: "basics",
          shortDefinition: "Interface command marking the private/LAN side of NAT.",
        },
        {
          id: "nat-outside",
          label: "ip nat outside",
          tier: "basics",
          shortDefinition: "Interface command marking the public/WAN side of NAT.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "LAN inside" },
          { icon: "server", label: "NAT router" },
          { icon: "globe", label: "WAN outside" },
        ],
      },
    },
    {
      id: "iface-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — inside interface",
      checkpointQuestionId: "nat-q2",
    },
    {
      id: "edge-placement",
      type: "teach",
      tcpLayer: 2,
      headline: "Place NAT at the edge.",
      body: "NAT usually sits where private enterprise space meets the ISP — not deep in the campus core. Edge placement matches where public addresses exist.",
    },
    {
      id: "pat-ports",
      type: "teach",
      tcpLayer: 2,
      headline: "PAT tracks ports.",
      body: "With overload, many inside hosts share one public IP. The router remembers which internal IP:port maps to which public IP:port so return traffic finds the right host.",
      studyTip: {
        title: "Exam tip",
        body: "PAT = overload = many-to-one using L4 ports.",
      },
    },
    {
      id: "config-light",
      type: "teach",
      tcpLayer: 2,
      headline: "PAT config sketch.",
      body: "Typical pieces: ACL matching inside sources, ip nat inside source list … interface <wan> overload, plus inside/outside interface marks. Verify with show ip nat translations.",
      laterLearn: ["Dynamic NAT pools without overload"],
    },
    {
      id: "not-routing-fix",
      type: "misconception",
      tcpLayer: 2,
      headline: "NAT is not a routing protocol.",
      body: "NAT rewrites addresses; it does not invent routes. You still need correct routing (static or OSPF) so packets reach the NAT edge and return.",
    },
    {
      id: "ipsec-friction",
      type: "teach",
      tcpLayer: 2,
      headline: "IPsec can fight NAT.",
      body: "Some VPN/IPsec designs break when NAT rewrites addresses mid-path. NAT-T helpers exist — treat VPN traversal as later depth, not today’s drill.",
      laterLearn: ["IPsec NAT-T / passthrough", "VPN edge design"],
      terms: [
        {
          id: "ipsec",
          label: "IPsec",
          tier: "later",
          shortDefinition:
            "Encrypted VPN suite — often sensitive to address/port rewrite by NAT.",
          laterItems: ["NAT-T", "Tunnel vs transport quirks"],
        },
      ],
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 2,
      headline: "What we defer.",
      body: "Full four-way address matrix quizzes, exotic pool designs, and IPsec NAT-T labs wait. Today: why NAT, static vs PAT, inside local/global, interface roles, edge placement.",
      laterLearn: [
        "Outside local / outside global matrix",
        "IPsec NAT friction deep dive",
        "Advanced dynamic pool design",
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "NAT covered.",
      body: "You can explain RFC 1918 scarcity, static vs PAT/overload, inside local vs inside global, ip nat inside/outside, and edge placement — without needing the full four-way matrix yet.",
    },
  ],
};
