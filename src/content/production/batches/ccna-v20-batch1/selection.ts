/**
 * Bounded CCNA v2.0 batch-1 objective selection (max 8 parents).
 *
 * Selection is driven by the transition manifest + V20 gap report +
 * production sequence — not by numeric order.
 */

export interface Batch1SelectionRow {
  officialNumber: string;
  priorityRank: number;
  pathwayClassification: "shared-core" | "version-specific";
  sharedCoreClusterId?: string;
  transitionClassification: string;
  gapSeverity: string;
  simulatorNeed: string;
  reasons: string[];
}

/**
 * Selected parents (8):
 * 2.4 newly added · 1.3/1.4/1.7/2.5/3.2 greater practical depth ·
 * 3.3 substantially expanded · 5.2 expanded AI with P0 simulator gap
 */
export const CCNA_V20_BATCH1_SELECTION: Batch1SelectionRow[] = [
  {
    officialNumber: "2.4",
    priorityRank: 1,
    pathwayClassification: "version-specific",
    transitionClassification: "newly added",
    gapSeverity: "critical",
    simulatorNeed: "sim-gap-l2l3-troubleshoot (P0, missing)",
    reasons: [
      "Only newly added v2.0 parent in the transition manifest",
      "Gap report severity critical — no live topic alias coverage",
      "Production sequence batch ccna-v20-p0-l2l3-troubleshoot lead objective",
      "Requires new show/ping/traceroute/packet-capture troubleshoot simulator",
    ],
  },
  {
    officialNumber: "1.3",
    priorityRank: 2,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-ipv4-addressing",
    transitionClassification: "requires greater practical depth",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-ipv4-troubleshoot (P0, partial — elevate beyond CIDR drill)",
    reasons: [
      "v1.1 configure/verify → v2.0 troubleshoot (public and private)",
      "Production sequence batch ccna-v20-p0-addressing-troubleshoot",
      "Existing subnet CIDR drill is calculation-only; needs assignment/troubleshoot depth",
    ],
  },
  {
    officialNumber: "1.4",
    priorityRank: 3,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-ipv6-addressing",
    transitionClassification: "requires greater practical depth",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-ipv6-troubleshoot (P0, missing)",
    reasons: [
      "v1.1 configure/verify → v2.0 troubleshoot (unicast + modified EUI-64)",
      "No live IPv6 troubleshoot simulator registered",
      "Paired with 1.3 in addressing elevation batch",
    ],
  },
  {
    officialNumber: "1.7",
    priorityRank: 4,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-services-security",
    transitionClassification: "requires greater practical depth",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-dhcpv4-troubleshoot (P0, missing)",
    reasons: [
      "v1.1 DHCP configure/verify → v2.0 client/server/relay troubleshoot on IOS",
      "Live dhcp topic exists but lacks dedicated troubleshoot simulator",
      "Addressing/services P0 sequence item",
    ],
  },
  {
    officialNumber: "2.5",
    priorityRank: 5,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-switching-access",
    transitionClassification: "requires greater practical depth",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-stp-configure (P1, missing)",
    reasons: [
      "v1.1 Interpret Rapid PVST+ → v2.0 Configure operations",
      "Paired with newly added 2.4 in L2/L3 production sequence batch",
      "BPDU filter present in v1.1 2.5.d is absent from v2.0 — content must not invent it",
    ],
  },
  {
    officialNumber: "3.2",
    priorityRank: 6,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-routing",
    transitionClassification: "requires greater practical depth",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-static-troubleshoot (P0, missing)",
    reasons: [
      "v1.1 configure/verify static routing → v2.0 troubleshoot",
      "P0 simulator gap with no live static-route troubleshoot lab",
      "Routing expansion sequence lead",
    ],
  },
  {
    officialNumber: "3.3",
    priorityRank: 7,
    pathwayClassification: "shared-core",
    sharedCoreClusterId: "shared-routing",
    transitionClassification: "expanded",
    gapSeverity: "medium",
    simulatorNeed: "sim-gap-ospfv3 (P0, missing)",
    reasons: [
      "Substantially expanded: OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6",
      "P0 OSPFv3 configure lab gap",
      "Neighbor adjacency excludes authentication per official wording — do not invent auth labs",
    ],
  },
  {
    officialNumber: "5.2",
    priorityRank: 8,
    pathwayClassification: "version-specific",
    transitionClassification: "expanded",
    gapSeverity: "high",
    simulatorNeed: "sim-gap-ai-prompts (P0, missing)",
    reasons: [
      "Expanded generative-AI emphasis with explicit prompt-component objective",
      "High content gap — no live topic alias coverage",
      "P0 AI prompt-selection scenario need; version-specific (not shared-core)",
      "Selected over 5.1/5.5 to keep batch ≤8 while covering net-new AI practical skill",
    ],
  },
];

/** Explicitly deferred from this batch (still high priority later). */
export const CCNA_V20_BATCH1_DEFERRED = [
  {
    officialNumber: "5.1",
    whyDeferred:
      "Agentic AI role pairs with 5.2; deferred so batch stays ≤8 while still shipping one AI practical objective.",
  },
  {
    officialNumber: "5.5",
    whyDeferred:
      "Ansible execute is P1 simulator priority; follows AI prompt batch.",
  },
  {
    officialNumber: "3.4",
    whyDeferred:
      "FHRP operational status is high gap but P1 simulator; follows static/OSPF elevation.",
  },
] as const;
