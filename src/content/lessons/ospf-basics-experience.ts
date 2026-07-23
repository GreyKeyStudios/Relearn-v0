import type { TopicExperience } from "@/content/types";

/** LES experience — OSPF basics (Wave 3 / Domain 3). */
export const OSPF_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Routers share the map.",
      body: "Static routes work until the topology grows. OSPF is a link-state IGP: neighbors discover each other, flood topology info, and each router computes best paths with a cost metric.",
      media: {
        kind: "icons",
        items: [
          { icon: "network", label: "Link-state map" },
          { icon: "server", label: "OSPF routers" },
        ],
      },
      terms: [
        {
          id: "ospf",
          label: "OSPF",
          tier: "basics",
          shortDefinition:
            "Open Shortest Path First — classless link-state Interior Gateway Protocol.",
        },
        {
          id: "igp",
          label: "IGP",
          tier: "basics",
          shortDefinition:
            "Interior Gateway Protocol — routing inside one organization’s network (vs BGP between ASNs).",
        },
      ],
    },
    {
      id: "link-state",
      type: "teach",
      tcpLayer: 2,
      headline: "What “link-state” means.",
      body: "Each OSPF router describes its links, floods that information in the area, and builds a shared topology database. Then SPF (Dijkstra) picks shortest paths — not hop-count rumor like classic distance vector.",
      terms: [
        {
          id: "link-state",
          label: "Link-state",
          tier: "basics",
          shortDefinition:
            "Routing model where routers flood topology and each computes paths from a full map.",
        },
      ],
      laterLearn: ["LSA type catalog (Type 1–5 detail)"],
    },
    {
      id: "link-state-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — OSPF type",
      checkpointQuestionId: "ospf-basics-q1",
    },
    {
      id: "cost-metric",
      type: "teach",
      tcpLayer: 2,
      headline: "Metric = cost (bandwidth).",
      body: "OSPF prefers lower cost. Default cost comes from interface bandwidth (reference bandwidth ÷ interface speed). Faster links usually mean lower cost.",
      terms: [
        {
          id: "cost",
          label: "OSPF cost",
          tier: "basics",
          shortDefinition:
            "Interface metric derived from bandwidth — lower cost is preferred.",
        },
      ],
      laterLearn: ["Tuning reference bandwidth for 10G+"],
    },
    {
      id: "cost-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — OSPF metric",
      checkpointQuestionId: "ospf-basics-q3",
    },
    {
      id: "area0",
      type: "teach",
      tcpLayer: 2,
      headline: "Area 0 is the backbone.",
      body: "OSPF areas limit flooding domains. Area 0 is the backbone; other areas connect through it so inter-area design stays consistent. Single-area CCNA labs often put everything in Area 0.",
      terms: [
        {
          id: "area-0",
          label: "Area 0",
          tier: "basics",
          shortDefinition:
            "OSPF backbone area — non-backbone areas attach through Area 0.",
        },
        {
          id: "area",
          label: "OSPF area",
          tier: "basics",
          shortDefinition:
            "Logical grouping of routers that share an identical link-state database for that area.",
        },
      ],
      laterLearn: ["Stub/NSSA designs", "Multi-area fancy topologies"],
    },
    {
      id: "area-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — backbone",
      checkpointQuestionId: "ospf-basics-q2",
    },
    {
      id: "router-id",
      type: "teach",
      tcpLayer: 2,
      headline: "Router ID.",
      body: "Each OSPF router needs a 32-bit Router ID. Manual router-id is best. Else highest loopback IP, else highest active interface IP — set it on purpose in labs.",
      terms: [
        {
          id: "rid",
          label: "Router ID",
          tier: "basics",
          shortDefinition:
            "32-bit OSPF identity for the router — often shown like an IPv4 address.",
          example: "1.1.1.1",
        },
      ],
    },
    {
      id: "hello",
      type: "teach",
      tcpLayer: 2,
      headline: "Hello to 224.0.0.5.",
      body: "OSPF Hello packets discover and keep neighbors alive. On multi-access networks they go to multicast 224.0.0.5 (AllSPFRouters).",
      terms: [
        {
          id: "hello",
          label: "OSPF Hello",
          tier: "basics",
          shortDefinition:
            "Neighbor discovery/keepalive packets — multicast 224.0.0.5 on Ethernet.",
          example: "224.0.0.5",
        },
      ],
      laterLearn: ["224.0.0.6 AllDRouters", "Hello/Dead timer mismatches"],
    },
    {
      id: "hello-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — Hello address",
      checkpointQuestionId: "ospf-basics-q4",
    },
    {
      id: "adjacency-full",
      type: "teach",
      tcpLayer: 2,
      headline: "Adjacency reaches Full.",
      body: "Neighbors start with Hellos, exchange databases, then reach Full — LSDB synchronized and ready to route. Partial states mean something blocked the sync.",
      terms: [
        {
          id: "adjacency",
          label: "Adjacency",
          tier: "basics",
          shortDefinition:
            "Neighbor relationship advanced enough to exchange topology (Full = synced).",
        },
        {
          id: "full",
          label: "Full",
          tier: "basics",
          shortDefinition:
            "OSPF neighbor state when databases match and the adjacency is complete.",
        },
      ],
    },
    {
      id: "dr-bdr",
      type: "teach",
      tcpLayer: 2,
      headline: "DR/BDR on multi-access.",
      body: "On Ethernet, a Designated Router and Backup DR cut down full mesh adjacencies. Others form Full mainly with DR/BDR — fewer floods, quieter segments.",
      terms: [
        {
          id: "dr",
          label: "DR",
          tier: "basics",
          shortDefinition:
            "Designated Router — hub for adjacencies on a multi-access OSPF segment.",
        },
        {
          id: "bdr",
          label: "BDR",
          tier: "basics",
          shortDefinition:
            "Backup Designated Router — ready if the DR fails.",
        },
      ],
      laterLearn: ["Priority election tricks", "Point-to-point network type"],
    },
    {
      id: "network-wildcard",
      type: "teach",
      tcpLayer: 2,
      headline: "network + wildcard (light).",
      body: "Under router ospf <pid>, network statements use a wildcard mask (inverse of the subnet mask). /24 → 0.0.0.255 — not 255.255.255.0. Process ID is local only.",
      terms: [
        {
          id: "wildcard",
          label: "Wildcard mask",
          tier: "basics",
          shortDefinition:
            "Inverse of a subnet mask used in OSPF network statements (0 bits must match).",
          example: "0.0.0.255 for /24",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "Wildcard ≠ subnet mask. Flip the bits.",
      },
    },
    {
      id: "wildcard-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — wildcard",
      checkpointQuestionId: "ospf-basics-q5",
    },
    {
      id: "verify-neighbor",
      type: "teach",
      tcpLayer: 2,
      headline: "show ip ospf neighbor.",
      body: "Verify adjacencies with show ip ospf neighbor — look for Full and DR/BDR roles. Then check show ip route ospf for learned prefixes.",
      studyTip: {
        title: "CLI habit",
        body: "Also useful: show ip protocols, show ip ospf interface.",
      },
    },
    {
      id: "process-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Process ID ≠ area ID.",
      body: "router ospf 1 uses a locally significant process ID. Area 0 is topology design. Mixing “process 0” with “area 0” confuses labs — they are different knobs.",
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 2,
      headline: "What we defer.",
      body: "Full LSA type tables, multi-area fancy designs, and deep authentication stay for later. Today: link-state idea, cost, Area 0, RID, Hello, Full, DR/BDR purpose, wildcard light, verify.",
      laterLearn: [
        "LSA type catalog detail",
        "Multi-area / virtual links",
        "OSPF authentication deep dive",
      ],
    },
    {
      id: "nat-preview",
      type: "teach",
      tcpLayer: 2,
      headline: "Next domain skill: NAT.",
      body: "OSPF moves packets across private IP space. At the Internet edge, NAT often rewrites addresses so RFC 1918 hosts can share scarce public IPs — that is the next topic.",
      laterLearn: ["NAT / PAT"],
      terms: [
        {
          id: "nat",
          label: "NAT",
          tier: "later",
          shortDefinition:
            "Network Address Translation — rewrite IP addresses at a boundary router.",
          laterTopicId: "nat",
          laterTopicLabel: "NAT",
          laterItems: ["Static vs PAT", "Inside local / global", "ip nat inside/outside"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "OSPF basics covered.",
      body: "You can explain link-state IGP, cost, Area 0, Router ID, Hello/224.0.0.5, Full adjacency, DR/BDR purpose, network/wildcard light, and show ip ospf neighbor. Next: NAT.",
    },
  ],
};
