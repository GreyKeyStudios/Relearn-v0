/**
 * v2.0 content-gap and simulator-gap reporting (architecture batch).
 * Does not author lessons or labs.
 */

import { ccna } from "@/content/certifications/ccna";
import { getAllSimulatorIds } from "@/content/simulators/registry";
import { listSimulatorSpecs } from "../simulators/catalog";
import { listCcnaV20ParentObjectives } from "../objectives/ccna-200-301-v2.0";
import { CCNA_PILOT_DUAL_VERSION_MAPPINGS } from "./pilot-dual-map";
import { CCNA_SHARED_CORE_CLUSTERS } from "./shared-core";
import { CCNA_TRANSITION_MANIFEST } from "./comparison";

export interface CcnaV20ContentGapRow {
  officialNumber: string;
  officialId: string;
  text: string;
  classification: string;
  coveringPilotIds: string[];
  coveringTopicIds: string[];
  sharedCoreClusterIds: string[];
  gapSeverity: "critical" | "high" | "medium" | "low";
  notes: string;
}

export interface CcnaV20SimulatorGapRow {
  needId: string;
  title: string;
  relatedV20Numbers: string[];
  existingSimulatorIds: string[];
  status: "missing" | "partial" | "covered";
  priority: "P0" | "P1" | "P2";
  notes: string;
}

function liveTopicsForV20(officialId: string): {
  pilots: string[];
  topics: string[];
} {
  const pilots: string[] = [];
  const topics = new Set<string>();
  for (const m of CCNA_PILOT_DUAL_VERSION_MAPPINGS) {
    if (!m.v20.officialIds.includes(officialId)) continue;
    pilots.push(m.pilotId);
    for (const t of m.liveTopicIds) topics.add(t);
  }
  return { pilots, topics: [...topics].sort() };
}

export function buildCcnaV20ContentGapReport(): CcnaV20ContentGapRow[] {
  return listCcnaV20ParentObjectives().map((obj) => {
    const { pilots, topics } = liveTopicsForV20(obj.id);
    const transition = CCNA_TRANSITION_MANIFEST.find(
      (e) => e.side === "v2.0" && e.number === obj.number
    );
    const clusters = CCNA_SHARED_CORE_CLUSTERS.filter((c) =>
      c.v20ObjectiveNumbers.includes(obj.number)
    ).map((c) => c.id);

    let gapSeverity: CcnaV20ContentGapRow["gapSeverity"] = "low";
    if (topics.length === 0 && transition?.classification === "newly added") {
      gapSeverity = "critical";
    } else if (topics.length === 0) {
      gapSeverity = "high";
    } else if (
      transition?.classification === "requires greater practical depth" ||
      transition?.classification === "expanded"
    ) {
      gapSeverity = "medium";
    }

    return {
      officialNumber: obj.number,
      officialId: obj.id,
      text: obj.text,
      classification: transition?.classification ?? "unable to determine",
      coveringPilotIds: pilots,
      coveringTopicIds: topics,
      sharedCoreClusterIds: clusters,
      gapSeverity,
      notes:
        topics.length === 0
          ? "No live topic currently aliases to this v2.0 parent via the dual mapping layer."
          : "Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose).",
    };
  });
}

export function buildCcnaV20SimulatorGapReport(): CcnaV20SimulatorGapRow[] {
  const live = new Set(getAllSimulatorIds());
  const specs = listSimulatorSpecs();
  const hasSubnet = live.has("subnet-cidr-drill") ||
    specs.some((s) => s.liveSimulatorId === "subnet-cidr-drill");

  return [
    {
      needId: "sim-gap-ipv4-troubleshoot",
      title: "IPv4 addressing/subnetting troubleshoot drill",
      relatedV20Numbers: ["1.3"],
      existingSimulatorIds: hasSubnet ? ["subnet-cidr-drill"] : [],
      status: hasSubnet ? "partial" : "missing",
      priority: "P0",
      notes:
        "Existing subnet CIDR drill covers calculation; v2.0 asks troubleshoot configuration/assignment (public/private).",
    },
    {
      needId: "sim-gap-ipv6-troubleshoot",
      title: "IPv6 addressing/prefix troubleshoot drill",
      relatedV20Numbers: ["1.4"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "No live IPv6 troubleshoot simulator registered.",
    },
    {
      needId: "sim-gap-client-connectivity",
      title: "Wired/wireless client connectivity troubleshoot lab",
      relatedV20Numbers: ["1.6"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "Needs OS-parameter + wireless security parameter scenarios.",
    },
    {
      needId: "sim-gap-dhcpv4-troubleshoot",
      title: "DHCPv4 client/server/relay troubleshoot",
      relatedV20Numbers: ["1.7"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "Live dhcp topic exists but no dedicated DHCP troubleshoot simulator.",
    },
    {
      needId: "sim-gap-l2l3-troubleshoot",
      title: "L2/L3 connectivity troubleshoot with show/ping/trace/pcap",
      relatedV20Numbers: ["2.4"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "Newly added v2.0 parent — high simulator priority.",
    },
    {
      needId: "sim-gap-stp-configure",
      title: "Rapid PVST+ configure operations",
      relatedV20Numbers: ["2.5"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "v1.1 was interpret; v2.0 is configure — depth gap.",
    },
    {
      needId: "sim-gap-static-troubleshoot",
      title: "IPv4/IPv6 static route troubleshoot",
      relatedV20Numbers: ["3.2"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "Shift from configure/verify to troubleshoot.",
    },
    {
      needId: "sim-gap-ospfv3",
      title: "OSPFv3 for IPv6 configure lab",
      relatedV20Numbers: ["3.3"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "v2.0 expands beyond OSPFv2-only.",
    },
    {
      needId: "sim-gap-fhrp-status",
      title: "HSRP/VRRP operational status interpretation",
      relatedV20Numbers: ["3.4"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "No FHRP simulator today.",
    },
    {
      needId: "sim-gap-dns-diagnose",
      title: "DNS record diagnose drill (A/AAAA/CNAME/MX/NS/PTR)",
      relatedV20Numbers: ["4.4"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "Expanded DNS depth vs v1.1 role-only wording.",
    },
    {
      needId: "sim-gap-l2-security-expanded",
      title: "L2 security including storm control + RA guard",
      relatedV20Numbers: ["4.7"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "New sub-features vs v1.1 DHCP snooping/DAI/port security set.",
    },
    {
      needId: "sim-gap-ai-prompts",
      title: "Generative/agentic AI prompt selection scenarios",
      relatedV20Numbers: ["5.1", "5.2"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P0",
      notes: "Net-new AI objectives — no current ReLearn simulator.",
    },
    {
      needId: "sim-gap-ansible-execute",
      title: "Ansible command execution practice",
      relatedV20Numbers: ["5.5"],
      existingSimulatorIds: [],
      status: "missing",
      priority: "P1",
      notes: "v2.0 asks use/execute, not merely recognize capabilities.",
    },
  ];
}

export function buildCcnaV20ProductionSequence(): {
  order: number;
  batchId: string;
  title: string;
  focus: string;
  relatedV20Numbers: string[];
  dependsOnSharedCore: boolean;
}[] {
  return [
    {
      order: 1,
      batchId: "ccna-v20-p0-addressing-troubleshoot",
      title: "IPv4/IPv6/DHCP troubleshoot elevation",
      focus: "Upgrade shared addressing lessons + add troubleshoot drills",
      relatedV20Numbers: ["1.3", "1.4", "1.7"],
      dependsOnSharedCore: true,
    },
    {
      order: 2,
      batchId: "ccna-v20-p0-l2l3-troubleshoot",
      title: "New L2/L3 troubleshoot parent + STP configure depth",
      focus: "Author 2.4 pathway; elevate 2.5 from interpret→configure",
      relatedV20Numbers: ["2.4", "2.5"],
      dependsOnSharedCore: true,
    },
    {
      order: 3,
      batchId: "ccna-v20-p0-routing-expansion",
      title: "Static troubleshoot + OSPFv3 + FHRP status",
      focus: "Routing shared-core with v2.0-only expansions",
      relatedV20Numbers: ["3.2", "3.3", "3.4"],
      dependsOnSharedCore: true,
    },
    {
      order: 4,
      batchId: "ccna-v20-p0-ai-ops",
      title: "Agentic/generative AI + Ansible execute",
      focus: "Net-new AI/ops objectives with safe scenario design",
      relatedV20Numbers: ["5.1", "5.2", "5.5"],
      dependsOnSharedCore: false,
    },
    {
      order: 5,
      batchId: "ccna-v20-p1-services-security",
      title: "DNS diagnose, L2 security expands, AAA/NAT wording",
      focus: "Services/security shared-core plus expanded subfeatures",
      relatedV20Numbers: ["4.1", "4.3", "4.4", "4.6", "4.7"],
      dependsOnSharedCore: true,
    },
    {
      order: 6,
      batchId: "ccna-v20-p1-client-wireless",
      title: "Client connectivity + wireless sub-bullet refresh",
      focus: "1.5/1.6 depth and OS/wireless security parameters",
      relatedV20Numbers: ["1.5", "1.6"],
      dependsOnSharedCore: true,
    },
  ];
}

/** Sanity: live topic count remains unchanged by this architecture batch. */
export function liveCcnaTopicCount(): number {
  return ccna.domains.reduce((sum, d) => sum + d.topics.length, 0);
}
