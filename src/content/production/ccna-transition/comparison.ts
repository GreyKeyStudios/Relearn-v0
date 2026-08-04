/**
 * Machine-readable CCNA 200-301 v1.1 ↔ v2.0 comparison + transition manifest.
 *
 * Rules:
 * - Do not mix objective IDs across versions.
 * - Do not invent equivalence from similar wording alone.
 * - Prefer `unable to determine` over a confident guess.
 */

import type {
  CcnaTransitionManifestEntry,
  CcnaVersionComparisonEdge,
  TransitionClassification,
} from "../types";
import {
  ccnaV11ObjectiveId,
  getCcnaV11OfficialLine,
  listCcnaV11ParentObjectives,
} from "../objectives/ccna-200-301-v1.1";
import {
  ccnaV20ObjectiveId,
  getCcnaV20OfficialLine,
  listCcnaV20ParentObjectives,
} from "../objectives/ccna-200-301-v2.0";

type EdgeDraft = {
  v11: string;
  v20: string;
  relationship: CcnaVersionComparisonEdge["relationship"];
  confidence: CcnaVersionComparisonEdge["confidence"];
  notes: string;
  sharedCore?: boolean;
};

/**
 * Explicit comparison edges. Only high/medium confidence relationships that are
 * grounded in clear topic continuity (not mere wording similarity).
 */
const EDGE_DRAFTS: EdgeDraft[] = [
  {
    v11: "1.4",
    v20: "1.1",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes:
      "Identify cable/interface issues → Diagnose with broader fault list (distance, signal levels, pin out, cable types).",
    sharedCore: true,
  },
  {
    v11: "1.3",
    v20: "1.1",
    relationship: "moved",
    confidence: "medium",
    notes:
      "Cabling-type compare knowledge is absorbed into the broader diagnose-cable objective; not a one-for-one wording match.",
    sharedCore: true,
  },
  {
    v11: "1.6",
    v20: "1.3",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Configure and verify IPv4 addressing/subnetting → Troubleshoot IPv4 (public and private).",
    sharedCore: true,
  },
  {
    v11: "1.7",
    v20: "1.3",
    relationship: "moved",
    confidence: "high",
    notes: "Standalone private IPv4 describe line folded into v2.0 1.3 public/private troubleshooting.",
    sharedCore: true,
  },
  {
    v11: "1.8",
    v20: "1.4",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Configure/verify IPv6 addressing/prefix → Troubleshoot IPv6 configuration/assignment/prefix sizing.",
    sharedCore: true,
  },
  {
    v11: "1.9",
    v20: "1.4",
    relationship: "reduced",
    confidence: "medium",
    notes:
      "IPv6 address-types catalog shrinks; v2.0 1.4 names unicast + modified EUI-64 only (not anycast/multicast catalog).",
    sharedCore: true,
  },
  {
    v11: "1.10",
    v20: "1.6",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes:
      "Verify client OS IP parameters → Troubleshoot wired/wireless client connectivity including wireless security parameters.",
    sharedCore: true,
  },
  {
    v11: "1.11",
    v20: "1.5",
    relationship: "unchanged",
    confidence: "high",
    notes:
      "Parent wording identical ('Describe wireless principles'). Sub-bullets differ (SSID/encryption vs interference/security protocols) — track separately in content work.",
    sharedCore: true,
  },
  {
    v11: "1.12",
    v20: "1.2",
    relationship: "reduced",
    confidence: "medium",
    notes:
      "Virtualization fundamentals → hypervisors/VMs/containers; VRFs called out in v1.1 are not present in v2.0 1.2.",
    sharedCore: true,
  },
  {
    v11: "2.1",
    v20: "2.2",
    relationship: "moved",
    confidence: "medium",
    notes:
      "VLAN configure/verify relocates into edge-host switch-port attributes (VLAN/PoE/port-channel/LACP).",
    sharedCore: true,
  },
  {
    v11: "2.2",
    v20: "2.1",
    relationship: "expanded",
    confidence: "medium",
    notes:
      "Interswitch connectivity expands into switch-to-switch/switch-to-router infrastructure connectivity with SVI/LACP/trunk detail.",
    sharedCore: true,
  },
  {
    v11: "2.3",
    v20: "2.3",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Configure/verify CDP/LLDP → Validate network documentation accuracy using CDP/LLDP.",
    sharedCore: true,
  },
  {
    v11: "2.4",
    v20: "2.1",
    relationship: "moved",
    confidence: "high",
    notes: "EtherChannel/LACP becomes v2.0 2.1.c under infrastructure connectivity.",
    sharedCore: true,
  },
  {
    v11: "2.5",
    v20: "2.5",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes:
      "Interpret Rapid PVST+ → Configure Rapid PVST+ operations. BPDU filter present in v1.1 2.5.d is absent from v2.0 2.5.d.",
    sharedCore: true,
  },
  {
    v11: "3.1",
    v20: "3.1",
    relationship: "expanded",
    confidence: "high",
    notes:
      "Interpret routing-table components → Interpret routing table to identify next hop (components listed inline).",
    sharedCore: true,
  },
  {
    v11: "3.3",
    v20: "3.2",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Configure/verify static routing → Troubleshoot static routing (same route-type sub-bullets).",
    sharedCore: true,
  },
  {
    v11: "3.4",
    v20: "3.3",
    relationship: "expanded",
    confidence: "high",
    notes: "OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6; adjacency note excludes authentication.",
    sharedCore: true,
  },
  {
    v11: "3.5",
    v20: "3.4",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Describe FHRP concepts → Interpret operational status of HSRP and VRRP.",
    sharedCore: true,
  },
  {
    v11: "4.1",
    v20: "4.3",
    relationship: "expanded",
    confidence: "high",
    notes: "Inside source NAT static/pools → NAT/PAT on IOS XE routers.",
    sharedCore: true,
  },
  {
    v11: "4.3",
    v20: "1.7",
    relationship: "moved",
    confidence: "medium",
    notes:
      "DHCP portion of v1.1 4.3 role objective moves toward v2.0 1.7 DHCPv4 troubleshoot (DNS portion maps separately to 4.4).",
    sharedCore: true,
  },
  {
    v11: "4.3",
    v20: "4.4",
    relationship: "expanded",
    confidence: "medium",
    notes:
      "DNS portion of v1.1 4.3 expands into diagnose DNS records (A/AAAA/CNAME/MX/NS/PTR).",
    sharedCore: true,
  },
  {
    v11: "4.4",
    v20: "5.4",
    relationship: "moved",
    confidence: "high",
    notes: "SNMP moves into AI/ops domain; wording Describe/Explain → Describe the function.",
    sharedCore: true,
  },
  {
    v11: "4.5",
    v20: "5.6",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Describe syslog features → Interpret syslog message content, severity levels, and facilities.",
    sharedCore: true,
  },
  {
    v11: "4.6",
    v20: "1.7",
    relationship: "requires greater practical depth",
    confidence: "high",
    notes: "Configure/verify DHCP client/relay → Troubleshoot DHCPv4 client/server/relay on IOS.",
    sharedCore: true,
  },
  {
    v11: "4.9",
    v20: "4.2",
    relationship: "expanded",
    confidence: "medium",
    notes: "TFTP/FTP capabilities → secure file transfer with SFTP/SCP for config/software files.",
    sharedCore: false,
  },
  {
    v11: "5.3",
    v20: "4.1",
    relationship: "expanded",
    confidence: "medium",
    notes: "Local password device access → local usernames and AAA client (TACACS+/RADIUS).",
    sharedCore: true,
  },
  {
    v11: "5.5",
    v20: "4.5",
    relationship: "expanded",
    confidence: "high",
    notes: "IPsec VPN describe gains protocols and transport modes detail.",
    sharedCore: true,
  },
  {
    v11: "5.6",
    v20: "4.6",
    relationship: "expanded",
    confidence: "high",
    notes: "ACLs → IPv4 ACLs explicitly standard/extended/numbered/named.",
    sharedCore: true,
  },
  {
    v11: "5.7",
    v20: "4.7",
    relationship: "expanded",
    confidence: "high",
    notes:
      "L2 security expands with storm control and RA guard; DHCP snooping/DAI/port security retained.",
    sharedCore: true,
  },
  {
    v11: "5.8",
    v20: "4.1",
    relationship: "requires greater practical depth",
    confidence: "medium",
    notes: "Compare AAA concepts → configure as AAA client for management.",
    sharedCore: true,
  },
  {
    v11: "5.9",
    v20: "1.5",
    relationship: "moved",
    confidence: "medium",
    notes: "Wireless security protocols relocate under wireless principles sub-bullet 1.5.c.",
    sharedCore: true,
  },
  {
    v11: "6.2",
    v20: "5.3",
    relationship: "moved",
    confidence: "medium",
    notes:
      "Traditional vs controller-based networking is one facet of broader network management approaches.",
    sharedCore: false,
  },
  {
    v11: "6.4",
    v20: "5.1",
    relationship: "expanded",
    confidence: "medium",
    notes: "AI/ML in network ops expands toward agentic AI role (also see 5.2 prompts).",
    sharedCore: false,
  },
  {
    v11: "6.4",
    v20: "5.2",
    relationship: "expanded",
    confidence: "medium",
    notes: "Generative AI portion expands into explicit prompt-selection objective.",
    sharedCore: false,
  },
  {
    v11: "6.6",
    v20: "5.5",
    relationship: "requires greater practical depth",
    confidence: "medium",
    notes:
      "Recognize Ansible/Terraform capabilities → Use Ansible to execute commands; Terraform not named in v2.0 5.5.",
    sharedCore: false,
  },
];

/** v1.1 parents with no trustworthy v2.0 counterpart. */
const V11_REMOVED_OR_UNDETERMINED: Record<
  string,
  { classification: TransitionClassification; notes: string }
> = {
  "1.1": {
    classification: "removed",
    notes: "No v2.0 parent asks to explain network-component roles/functions.",
  },
  "1.2": {
    classification: "removed",
    notes: "Topology architecture characteristics are not a v2.0 parent line.",
  },
  "1.5": {
    classification: "removed",
    notes: "TCP vs UDP compare is not listed in v2.0 parents.",
  },
  "1.13": {
    classification: "removed",
    notes: "Switching concepts (MAC learning/flooding/table) are not a v2.0 parent line.",
  },
  "2.6": {
    classification: "unable to determine",
    notes:
      "Wireless architectures/AP modes loosely resemble v2.0 2.2.b edge-host AP attributes, but that is not trustworthy equivalence — left undetermined rather than inventing a map.",
  },
  "2.7": {
    classification: "removed",
    notes: "WLAN physical infrastructure connections (AP/WLC/LAG) have no clear v2.0 parent.",
  },
  "2.8": {
    classification: "unable to determine",
    notes:
      "Device management access (Telnet/SSH/HTTP/HTTPS/console/TACACS+/RADIUS/cloud) overlaps partially with v2.0 4.1 AAA/local usernames but is not equivalent; left undetermined.",
  },
  "2.9": {
    classification: "removed",
    notes: "Wireless LAN GUI client-connectivity interpretation is not listed in v2.0.",
  },
  "3.2": {
    classification: "unable to determine",
    notes:
      "Default forwarding decision factors (longest prefix/AD/metric) may be implied by v2.0 3.1 but are not stated as a separate objective.",
  },
  "4.2": {
    classification: "removed",
    notes: "NTP client/server configure/verify is absent from v2.0 parents.",
  },
  "4.7": {
    classification: "removed",
    notes: "QoS PHB forwarding behavior is absent from v2.0 parents.",
  },
  "4.8": {
    classification: "unable to determine",
    notes:
      "SSH remote-access configure may relate to management/file-transfer objectives but has no explicit v2.0 parent.",
  },
  "5.1": {
    classification: "removed",
    notes: "Key security concepts (threats/vulnerabilities/exploits/mitigation) are not a v2.0 parent.",
  },
  "5.2": {
    classification: "removed",
    notes: "Security program elements (awareness/training/physical) are not a v2.0 parent.",
  },
  "5.4": {
    classification: "removed",
    notes: "Password policy elements are not a v2.0 parent.",
  },
  "5.10": {
    classification: "removed",
    notes: "WLAN GUI WPA2 PSK configure/verify is not a v2.0 parent.",
  },
  "6.1": {
    classification: "unable to determine",
    notes:
      "Automation impact on network management may relate to v2.0 5.3 approaches but is not a clear counterpart.",
  },
  "6.3": {
    classification: "unable to determine",
    notes:
      "SDN overlay/underlay/fabric + plane separation/APIs has no explicit v2.0 parent (controller-based appears only inside 5.3 list).",
  },
  "6.5": {
    classification: "removed",
    notes: "REST-based API characteristics are not a v2.0 parent.",
  },
  "6.7": {
    classification: "removed",
    notes: "JSON-encoded data components are not a v2.0 parent.",
  },
};

/** v2.0 parents that are newly added (no trustworthy v1.1 parent edge). */
const V20_NEWLY_ADDED: Record<string, string> = {
  "2.4":
    "Explicit L2/L3 troubleshooting with show/ping/traceroute/packet capture is new as a parent line.",
};

function buildEdges(): CcnaVersionComparisonEdge[] {
  return EDGE_DRAFTS.map((d) => {
    const a = getCcnaV11OfficialLine(d.v11);
    const b = getCcnaV20OfficialLine(d.v20);
    if (!a || !b) {
      throw new Error(`Bad comparison edge ${d.v11} → ${d.v20}`);
    }
    return {
      id: `edge-v11-${d.v11}-v20-${d.v20}`,
      v11Id: a.id,
      v11Number: a.number,
      v20Id: b.id,
      v20Number: b.number,
      relationship: d.relationship,
      confidence: d.confidence,
      notes: d.notes,
    };
  });
}

export const CCNA_V11_V20_COMPARISON_EDGES: CcnaVersionComparisonEdge[] =
  buildEdges();

function sharedCoreForV11(number: string): boolean {
  return EDGE_DRAFTS.some((e) => e.v11 === number && e.sharedCore);
}

function sharedCoreForV20(number: string): boolean {
  return EDGE_DRAFTS.some((e) => e.v20 === number && e.sharedCore);
}

function primaryV11Classification(
  number: string
): {
  classification: TransitionClassification;
  counterparts: string[];
  notes: string;
} {
  const edges = EDGE_DRAFTS.filter((e) => e.v11 === number);
  if (edges.length === 0) {
    const fallback = V11_REMOVED_OR_UNDETERMINED[number];
    if (!fallback) {
      throw new Error(`Missing transition classification for v1.1 ${number}`);
    }
    return {
      classification: fallback.classification,
      counterparts: [],
      notes: fallback.notes,
    };
  }
  // Prefer the highest-confidence edge's relationship as primary label.
  const ranked = [...edges].sort((a, b) => {
    const rank = { high: 0, medium: 1, low: 2 } as const;
    return rank[a.confidence] - rank[b.confidence];
  });
  const primary = ranked[0];
  return {
    classification: primary.relationship,
    counterparts: edges.map((e) => e.v20),
    notes: edges.map((e) => `${e.v20}: ${e.notes}`).join(" "),
  };
}

function primaryV20Classification(
  number: string
): {
  classification: TransitionClassification;
  counterparts: string[];
  notes: string;
} {
  const edges = EDGE_DRAFTS.filter((e) => e.v20 === number);
  if (edges.length === 0) {
    const note = V20_NEWLY_ADDED[number];
    return {
      classification: "newly added",
      counterparts: [],
      notes:
        note ??
        "No high-confidence v1.1 parent edge recorded; treated as newly added rather than inventing a match.",
    };
  }
  const ranked = [...edges].sort((a, b) => {
    const rank = { high: 0, medium: 1, low: 2 } as const;
    return rank[a.confidence] - rank[b.confidence];
  });
  const primary = ranked[0];
  return {
    classification: primary.relationship,
    counterparts: edges.map((e) => e.v11),
    notes: edges.map((e) => `${e.v11}: ${e.notes}`).join(" "),
  };
}

export function buildCcnaTransitionManifest(): CcnaTransitionManifestEntry[] {
  const entries: CcnaTransitionManifestEntry[] = [];

  for (const obj of listCcnaV11ParentObjectives()) {
    const meta = primaryV11Classification(obj.number);
    entries.push({
      id: `transition-v1.1-${obj.number}`,
      side: "v1.1",
      objectiveId: obj.id,
      number: obj.number,
      text: obj.text,
      domainNumber: obj.domainNumber,
      classification: meta.classification,
      counterpartIds: meta.counterparts.map(ccnaV20ObjectiveId),
      counterpartNumbers: meta.counterparts,
      notes: meta.notes,
      sharedCoreCandidate: sharedCoreForV11(obj.number),
      sourceId: obj.sourceId,
      pdfPage: obj.pdfPage,
    });
  }

  for (const obj of listCcnaV20ParentObjectives()) {
    const meta = primaryV20Classification(obj.number);
    entries.push({
      id: `transition-v2.0-${obj.number}`,
      side: "v2.0",
      objectiveId: obj.id,
      number: obj.number,
      text: obj.text,
      domainNumber: obj.domainNumber,
      classification: meta.classification,
      counterpartIds: meta.counterparts.map(ccnaV11ObjectiveId),
      counterpartNumbers: meta.counterparts,
      notes: meta.notes,
      sharedCoreCandidate: sharedCoreForV20(obj.number),
      sourceId: obj.sourceId,
      pdfPage: obj.pdfPage,
    });
  }

  return entries;
}

export const CCNA_TRANSITION_MANIFEST: CcnaTransitionManifestEntry[] =
  buildCcnaTransitionManifest();

export function assertCcnaTransitionIntegrity(): string[] {
  const errors: string[] = [];
  const v11Parents = listCcnaV11ParentObjectives();
  const v20Parents = listCcnaV20ParentObjectives();
  const v11Entries = CCNA_TRANSITION_MANIFEST.filter((e) => e.side === "v1.1");
  const v20Entries = CCNA_TRANSITION_MANIFEST.filter((e) => e.side === "v2.0");
  if (v11Entries.length !== v11Parents.length) {
    errors.push(
      `v1.1 transition entries ${v11Entries.length} != parents ${v11Parents.length}`
    );
  }
  if (v20Entries.length !== v20Parents.length) {
    errors.push(
      `v2.0 transition entries ${v20Entries.length} != parents ${v20Parents.length}`
    );
  }
  for (const edge of CCNA_V11_V20_COMPARISON_EDGES) {
    if (edge.v11Id.includes("v2.0") || edge.v20Id.includes("v1.1")) {
      errors.push(`Version ID mix on edge ${edge.id}`);
    }
  }
  return errors;
}
