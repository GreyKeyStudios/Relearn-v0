/**
 * Shared-core curriculum layer design for CCNA dual-version pathways.
 *
 * Shared lessons may satisfy both versions, but objective associations remain
 * version-specific (`200-301-v1.1/...` vs `200-301-v2.0/...`).
 */

import { CCNA_TRANSITION_MANIFEST } from "./comparison";

export interface SharedCoreCluster {
  id: string;
  title: string;
  summary: string;
  v11ObjectiveNumbers: string[];
  v20ObjectiveNumbers: string[];
  /** Live topics that may already teach part of this cluster (pilot-tagged). */
  candidateLiveTopicIds: string[];
  priority: "P0" | "P1" | "P2";
  notes: string;
}

/**
 * Clusters are design units — not live content. They guide future authoring so
 * one lesson body can carry two version-specific objective association lists.
 */
export const CCNA_SHARED_CORE_CLUSTERS: SharedCoreCluster[] = [
  {
    id: "shared-cabling-interfaces",
    title: "Cabling, interfaces, and link faults",
    summary:
      "Physical media, duplex/speed, and interface fault recognition spanning v1.1 identify/compare and v2.0 diagnose depth.",
    v11ObjectiveNumbers: ["1.3", "1.4"],
    v20ObjectiveNumbers: ["1.1"],
    candidateLiveTopicIds: ["ethernet", "tcp-ip-model"],
    priority: "P0",
    notes: "v2.0 requires greater practical diagnose depth.",
  },
  {
    id: "shared-ipv4-addressing",
    title: "IPv4 addressing, private space, and subnetting",
    summary:
      "IPv4 address planning and subnet math common to both; v2.0 emphasizes troubleshoot.",
    v11ObjectiveNumbers: ["1.6", "1.7"],
    v20ObjectiveNumbers: ["1.3"],
    candidateLiveTopicIds: ["ipv4-addressing", "subnetting", "ip-ranges"],
    priority: "P0",
    notes: "Keep version-specific objective tags on shared lesson.",
  },
  {
    id: "shared-ipv6-addressing",
    title: "IPv6 addressing and prefix basics",
    summary: "IPv6 configuration/types overlapping v1.1 1.8/1.9 and v2.0 1.4 troubleshoot.",
    v11ObjectiveNumbers: ["1.8", "1.9"],
    v20ObjectiveNumbers: ["1.4"],
    candidateLiveTopicIds: ["ipv6-basics"],
    priority: "P0",
    notes: "v2.0 reduces named address-type catalog.",
  },
  {
    id: "shared-wireless-principles",
    title: "Wireless principles",
    summary: "Parent wording unchanged; sub-bullet sets differ by version.",
    v11ObjectiveNumbers: ["1.11", "5.9"],
    v20ObjectiveNumbers: ["1.5"],
    candidateLiveTopicIds: ["wireless-basics"],
    priority: "P1",
    notes: "Version-specific sub-bullet coverage must stay separate.",
  },
  {
    id: "shared-virtualization",
    title: "Virtualization / hypervisors / containers",
    summary: "Overlapping virtualization fundamentals; VRFs not required in v2.0 1.2.",
    v11ObjectiveNumbers: ["1.12"],
    v20ObjectiveNumbers: ["1.2"],
    candidateLiveTopicIds: ["ipv6-basics"],
    priority: "P1",
    notes: "Candidate live topic tagging is weak today — do not invent coverage.",
  },
  {
    id: "shared-switching-access",
    title: "Switching, VLANs, trunks, EtherChannel, STP",
    summary: "Core L2 access skills shared; v2.0 adds documentation validation and deeper troubleshooting.",
    v11ObjectiveNumbers: ["2.1", "2.2", "2.3", "2.4", "2.5"],
    v20ObjectiveNumbers: ["2.1", "2.2", "2.3", "2.5"],
    candidateLiveTopicIds: ["switching", "vlans", "trunking", "stp"],
    priority: "P0",
    notes: "v2.0 2.4 troubleshoot parent is version-specific add-on, not shared-core.",
  },
  {
    id: "shared-routing",
    title: "Routing tables, static routes, OSPF, FHRP",
    summary: "IP routing core with v2.0 OSPFv3 + operational FHRP depth.",
    v11ObjectiveNumbers: ["3.1", "3.3", "3.4", "3.5"],
    v20ObjectiveNumbers: ["3.1", "3.2", "3.3", "3.4"],
    candidateLiveTopicIds: [
      "routing-fundamentals",
      "static-routes",
      "ospf-basics",
    ],
    priority: "P0",
    notes: "Static routes shift configure→troubleshoot in v2.0.",
  },
  {
    id: "shared-services-security",
    title: "NAT, DHCP, DNS, ACLs, L2 security, VPN, AAA",
    summary: "Services/security overlap with domain renumbering in v2.0.",
    v11ObjectiveNumbers: ["4.1", "4.3", "4.6", "5.3", "5.5", "5.6", "5.7", "5.8"],
    v20ObjectiveNumbers: ["1.7", "4.1", "4.3", "4.4", "4.5", "4.6", "4.7"],
    candidateLiveTopicIds: ["nat", "dhcp", "dns", "acls", "network-security"],
    priority: "P0",
    notes: "NTP/QoS/SSH/TFTP gaps are version-specific, not shared-core.",
  },
  {
    id: "shared-ops-telemetry",
    title: "SNMP and syslog operations",
    summary: "Ops telemetry common to both; domain moves to AI/ops in v2.0.",
    v11ObjectiveNumbers: ["4.4", "4.5"],
    v20ObjectiveNumbers: ["5.4", "5.6"],
    candidateLiveTopicIds: ["dns", "automation-basics"],
    priority: "P1",
    notes: "Live topic coverage is thin — mark as shared-core design only.",
  },
];

export function listSharedCoreObjectiveIds(): {
  v11: string[];
  v20: string[];
} {
  const v11 = new Set(
    CCNA_TRANSITION_MANIFEST.filter(
      (e) => e.side === "v1.1" && e.sharedCoreCandidate
    ).map((e) => e.objectiveId)
  );
  const v20 = new Set(
    CCNA_TRANSITION_MANIFEST.filter(
      (e) => e.side === "v2.0" && e.sharedCoreCandidate
    ).map((e) => e.objectiveId)
  );
  return { v11: [...v11].sort(), v20: [...v20].sort() };
}
