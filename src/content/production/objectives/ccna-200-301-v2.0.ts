/**
 * Official Cisco CCNA 200-301 v2.0 exam objectives (complete PDF ingestion).
 *
 * Source PDF: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf
 * SHA-256: 5f0bf00d2d459c1f2b52c54c9680fd7c5bb261b6842641a1f445fb0a0ca9923e
 * Extracted text: docs/curriculum-production/ccna-transition/200-301_CCNA_v2.0.extracted.txt
 *
 * Do NOT mix with v1.1 IDs. Live Path A remains on pilot aliases + v1.1 pathway.
 */

import type {
  AtomicLearningObjective,
  OfficialExamObjectiveLine,
} from "../types";

export const CCNA_V20_EXAM_CODE = "200-301";
export const CCNA_V20_OBJECTIVES_VERSION = "v2.0";
export const CCNA_V20_SOURCE_ID = "src-cisco-ccna-200-301-v2.0";
export const CCNA_V20_PDF_URL =
  "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf";
export const CCNA_V20_PDF_SHA256 =
  "5f0bf00d2d459c1f2b52c54c9680fd7c5bb261b6842641a1f445fb0a0ca9923e";
export const CCNA_V20_RETRIEVED_AT = "2026-08-04";
export const CCNA_V20_LANDING_URL =
  "https://learningnetwork.cisco.com/s/ccna-v2-exam-topics";

export function ccnaV20ObjectiveId(number: string): string {
  return `${CCNA_V20_EXAM_CODE}-${CCNA_V20_OBJECTIVES_VERSION}/${number}`;
}

type LineInput = {
  number: string;
  text: string;
  domainNumber: string;
  domainName: string;
  domainWeightPercent: number;
  parentNumber?: string;
  pdfPage: number;
};

function line(input: LineInput): OfficialExamObjectiveLine {
  return {
    id: ccnaV20ObjectiveId(input.number),
    examCode: CCNA_V20_EXAM_CODE,
    objectivesVersion: CCNA_V20_OBJECTIVES_VERSION,
    number: input.number,
    text: input.text,
    domainNumber: input.domainNumber,
    domainName: input.domainName,
    domainWeightPercent: input.domainWeightPercent,
    parentNumber: input.parentNumber,
    depth: input.parentNumber ? 2 : 1,
    pdfPage: input.pdfPage,
    sourceId: CCNA_V20_SOURCE_ID,
  };
}

/** Complete official hierarchy from the v2.0 PDF (parents + sub-bullets). */
export const CCNA_V20_OFFICIAL_LINES: OfficialExamObjectiveLine[] = [
  // Domain 1 — Network Infrastructure and Connectivity (25%) — PDF p. 1
  line({
    number: "1.1",
    text: "Diagnose interface and cable (copper and fiber) issues such as collisions, errors, mismatched duplex, speed, distance, interface, signal levels, pin out, and cable types",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.2",
    text: "Describe the role and function of hypervisors, virtual machines, and containers",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.3",
    text: "Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private)",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.4",
    text: "Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64)",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.5",
    text: "Describe wireless principles",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.5.a",
    text: "Band and channel selection",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    parentNumber: "1.5",
    pdfPage: 1,
  }),
  line({
    number: "1.5.b",
    text: "RF characteristics",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    parentNumber: "1.5",
    pdfPage: 1,
  }),
  line({
    number: "1.5.c",
    text: "Security protocols",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    parentNumber: "1.5",
    pdfPage: 1,
  }),
  line({
    number: "1.5.d",
    text: "Cause of interference",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    parentNumber: "1.5",
    pdfPage: 1,
  }),
  line({
    number: "1.6",
    text: "Troubleshoot wired and wireless client connectivity (IP configuration, network reachability, and wireless security parameters on Windows, MacOS, and Linux)",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "1.7",
    text: "Troubleshoot DHCPv4 client, server, and relay on IOS devices",
    domainNumber: "1.0",
    domainName: "Network Infrastructure and Connectivity",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),

  // Domain 2 — Switching and Network Access (25%) — PDF pp. 1–2
  line({
    number: "2.1",
    text: "Configure network infrastructure connectivity (switch-to-switch and switch-to-router)",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "2.1.a",
    text: "Layer 2/Layer 3 physical interfaces",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.1",
    pdfPage: 1,
  }),
  line({
    number: "2.1.b",
    text: "Layer 2 802.1Q trunk interfaces",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.1",
    pdfPage: 1,
  }),
  line({
    number: "2.1.c",
    text: "Layer 2/Layer 3 LACP port-channel/EtherChannel",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.1",
    pdfPage: 1,
  }),
  line({
    number: "2.1.d",
    text: "Switch virtual interface (SVI)",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.1",
    pdfPage: 1,
  }),
  line({
    number: "2.2",
    text: "Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP)",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "2.2.a",
    text: "Desktop, printer, and IOT appliances",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.2",
    pdfPage: 1,
  }),
  line({
    number: "2.2.b",
    text: "Wireless access points (standalone and controller based)",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.2",
    pdfPage: 1,
  }),
  line({
    number: "2.2.c",
    text: "Voice over IP phone",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.2",
    pdfPage: 1,
  }),
  line({
    number: "2.2.d",
    text: "Virtualized hosts",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.2",
    pdfPage: 1,
  }),
  line({
    number: "2.2.e",
    text: "Network appliances",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.2",
    pdfPage: 1,
  }),
  line({
    number: "2.3",
    text: "Validate the accuracy of network documentation using CDP and LLDP",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    pdfPage: 1,
  }),
  line({
    number: "2.4",
    text: "Troubleshoot basic Layer 2/Layer 3 connectivity and device operations using show commands (including show logs), ping, extended ping, trace route, and packet capture output",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    pdfPage: 2,
  }),
  line({
    number: "2.5",
    text: "Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+)",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    pdfPage: 2,
  }),
  line({
    number: "2.5.a",
    text: "Root port, root bridge (primary/secondary), and other port names",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.b",
    text: "Port states and roles",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.c",
    text: "PortFast",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.d",
    text: "Root guard, loop guard, and BPDU guard",
    domainNumber: "2.0",
    domainName: "Switching and Network Access",
    domainWeightPercent: 25,
    parentNumber: "2.5",
    pdfPage: 2,
  }),

  // Domain 3 — IP Routing (20%) — PDF p. 2
  line({
    number: "3.1",
    text: "Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route)",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "3.2",
    text: "Troubleshoot IPv4 and IPv6 static routing",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "3.2.a",
    text: "Default route",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.2",
    pdfPage: 2,
  }),
  line({
    number: "3.2.b",
    text: "Network route",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.2",
    pdfPage: 2,
  }),
  line({
    number: "3.2.c",
    text: "Host route",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.2",
    pdfPage: 2,
  }),
  line({
    number: "3.2.d",
    text: "Floating static",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.2",
    pdfPage: 2,
  }),
  line({
    number: "3.3",
    text: "Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "3.3.a",
    text: "Neighbor adjacencies (excluding authentication)",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.3",
    pdfPage: 2,
  }),
  line({
    number: "3.3.b",
    text: "Point-to-point",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.3",
    pdfPage: 2,
  }),
  line({
    number: "3.3.c",
    text: "Broadcast (DR/BDR selection)",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.3",
    pdfPage: 2,
  }),
  line({
    number: "3.3.d",
    text: "Router ID",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    parentNumber: "3.3",
    pdfPage: 2,
  }),
  line({
    number: "3.4",
    text: "Interpret the operational status of First Hop Redundancy Protocols (HSRP and VRRP)",
    domainNumber: "3.0",
    domainName: "IP Routing",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),

  // Domain 4 — Network Services and Security (20%) — PDF p. 2
  line({
    number: "4.1",
    text: "Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.2",
    text: "Manage device configuration and software files using secure file transfer operations with SFTP/SCP",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.3",
    text: "Configure NAT/PAT on IOS XE routers",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.4",
    text: "Diagnose issues with DNS records (A, AAAA, CNAME, MX, NS, and PTR) to support host, web application, and mail server access by name",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.5",
    text: "Describe IPsec remote access and site-to-site VPNs (protocols and transport modes)",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.6",
    text: "Configure IPv4 access control lists (standard, extended, numbered, and named ACLs)",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.7",
    text: "Configure Layer 2 security features",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "4.7.a",
    text: "DHCP snooping",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    parentNumber: "4.7",
    pdfPage: 2,
  }),
  line({
    number: "4.7.b",
    text: "Dynamic ARP inspection",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    parentNumber: "4.7",
    pdfPage: 2,
  }),
  line({
    number: "4.7.c",
    text: "Storm control",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    parentNumber: "4.7",
    pdfPage: 2,
  }),
  line({
    number: "4.7.d",
    text: "RA guard",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    parentNumber: "4.7",
    pdfPage: 2,
  }),
  line({
    number: "4.7.e",
    text: "Port security",
    domainNumber: "4.0",
    domainName: "Network Services and Security",
    domainWeightPercent: 20,
    parentNumber: "4.7",
    pdfPage: 2,
  }),

  // Domain 5 — AI, and Network Operations and Management (10%) — PDF pp. 2–3
  line({
    number: "5.1",
    text: "Describe the role of agentic AI in network operations",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 2,
  }),
  line({
    number: "5.2",
    text: "Select a prompt to send to a generative AI system to support network operations considering prompt components such as data classification, output format, persona, and instructions",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 2,
  }),
  line({
    number: "5.3",
    text: "Describe network management approaches (device-based, cloud-based, controller-based, automation-based, and infrastructure as code)",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 2,
  }),
  line({
    number: "5.4",
    text: "Describe the function of SNMP in network operations",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
  line({
    number: "5.5",
    text: "Use configuration management mechanisms such as Ansible to execute commands",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
  line({
    number: "5.6",
    text: "Interpret syslog message content, severity levels, and facilities",
    domainNumber: "5.0",
    domainName: "AI, and Network Operations and Management",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
];

const byId = new Map(CCNA_V20_OFFICIAL_LINES.map((o) => [o.id, o]));
const byNumber = new Map(CCNA_V20_OFFICIAL_LINES.map((o) => [o.number, o]));

export function getCcnaV20OfficialLine(
  idOrNumber: string
): OfficialExamObjectiveLine | undefined {
  return byId.get(idOrNumber) ?? byNumber.get(idOrNumber);
}

export function listCcnaV20ParentObjectives(): OfficialExamObjectiveLine[] {
  return CCNA_V20_OFFICIAL_LINES.filter((o) => o.depth === 1);
}

export function listCcnaV20OfficialLines(): OfficialExamObjectiveLine[] {
  return CCNA_V20_OFFICIAL_LINES;
}

function verbForOfficialText(
  text: string
): AtomicLearningObjective["verb"] {
  const t = text.toLowerCase();
  if (t.startsWith("configure") || t.startsWith("use ")) return "configure";
  if (t.startsWith("troubleshoot") || t.startsWith("diagnose")) return "diagnose";
  if (t.startsWith("compare") || t.startsWith("select")) return "compare";
  if (t.startsWith("interpret") || t.startsWith("validate")) return "apply";
  if (t.startsWith("recognize")) return "recognize";
  return "explain";
}

export const CCNA_V20_ATOMIC_OBJECTIVES: AtomicLearningObjective[] =
  CCNA_V20_OFFICIAL_LINES.map((obj) => {
    const parentAtomicId = obj.parentNumber
      ? `alo-ccna-v2.0-${obj.parentNumber}`
      : undefined;
    return {
      id: `alo-ccna-v2.0-${obj.number}`,
      conceptId: `concept-ccna-v2.0-${obj.parentNumber ?? obj.number}`,
      statement: obj.depth === 1 ? obj.text : `${obj.parentNumber} — ${obj.text}`,
      verb: verbForOfficialText(obj.text),
      difficulty: "medium",
      cognitiveLoad: "moderate",
      assumedBackground: "intro-it",
      freshness: "versioned",
      examObjectiveIds: [obj.id],
      prerequisiteAtomicIds: parentAtomicId ? [parentAtomicId] : [],
      sourceIds: [CCNA_V20_SOURCE_ID],
    };
  });

export function listCcnaV20AtomicObjectives(): AtomicLearningObjective[] {
  return CCNA_V20_ATOMIC_OBJECTIVES;
}
