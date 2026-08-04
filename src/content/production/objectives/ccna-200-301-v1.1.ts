/**
 * Official Cisco CCNA 200-301 v1.1 exam objectives (complete PDF ingestion).
 *
 * Source PDF: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf
 * SHA-256: da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5
 * Extracted text artifact: docs/curriculum-production/ccna-v1.1/200-301-CCNA-v1.1.extracted.txt
 *
 * Do NOT mix with v2.0. Live Path A content still uses pilot `CCNA-*` IDs —
 * see mappings/ccna-pilot-to-v1.1.ts.
 */

import type {
  AtomicLearningObjective,
  OfficialExamObjectiveLine,
} from "../types";

export const CCNA_V11_EXAM_CODE = "200-301";
export const CCNA_V11_OBJECTIVES_VERSION = "v1.1";
export const CCNA_V11_SOURCE_ID = "src-cisco-ccna-200-301-v1.1";
export const CCNA_V11_PDF_URL =
  "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf";
export const CCNA_V11_PDF_SHA256 =
  "da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5";
export const CCNA_V11_RETRIEVED_AT = "2026-08-04";

export function ccnaV11ObjectiveId(number: string): string {
  return `${CCNA_V11_EXAM_CODE}-${CCNA_V11_OBJECTIVES_VERSION}/${number}`;
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
    id: ccnaV11ObjectiveId(input.number),
    examCode: CCNA_V11_EXAM_CODE,
    objectivesVersion: CCNA_V11_OBJECTIVES_VERSION,
    number: input.number,
    text: input.text,
    domainNumber: input.domainNumber,
    domainName: input.domainName,
    domainWeightPercent: input.domainWeightPercent,
    parentNumber: input.parentNumber,
    depth: input.parentNumber ? 2 : 1,
    pdfPage: input.pdfPage,
    sourceId: CCNA_V11_SOURCE_ID,
  };
}

/** Complete official hierarchy from the v1.1 PDF (parents + sub-bullets). */
export const CCNA_V11_OFFICIAL_LINES: OfficialExamObjectiveLine[] = [
  // Domain 1 — Network Fundamentals (20%) — PDF pp. 1–2
  line({
    number: "1.1",
    text: "Explain the role and function of network components",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.1.a",
    text: "Routers",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.b",
    text: "Layer 2 and Layer 3 switches",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.c",
    text: "Next-generation firewalls and IPS",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.d",
    text: "Access points",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.e",
    text: "Controllers",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.f",
    text: "Endpoints",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.g",
    text: "Servers",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.1.h",
    text: "PoE",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.1",
    pdfPage: 1,
  }),
  line({
    number: "1.2",
    text: "Describe characteristics of network topology architectures",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.2.a",
    text: "Two-tier",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.2.b",
    text: "Three-tier",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.2.c",
    text: "Spine-leaf",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.2.d",
    text: "WAN",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.2.e",
    text: "Small office/home office (SOHO)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.2.f",
    text: "On-premises and cloud",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.2",
    pdfPage: 1,
  }),
  line({
    number: "1.3",
    text: "Compare physical interface and cabling types",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.3.a",
    text: "Single-mode fiber, multimode fiber, copper",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.3",
    pdfPage: 1,
  }),
  line({
    number: "1.3.b",
    text: "Connections (Ethernet shared media and point-to-point)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.3",
    pdfPage: 1,
  }),
  line({
    number: "1.4",
    text: "Identify interface and cable issues (collisions, errors, mismatch duplex, and/or speed)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.5",
    text: "Compare TCP to UDP",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.6",
    text: "Configure and verify IPv4 addressing and subnetting",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.7",
    text: "Describe private IPv4 addressing",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 1,
  }),
  line({
    number: "1.8",
    text: "Configure and verify IPv6 addressing and prefix",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.9",
    text: "Describe IPv6 address types",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.9.a",
    text: "Unicast (global, unique local, and link local)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.9",
    pdfPage: 2,
  }),
  line({
    number: "1.9.b",
    text: "Anycast",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.9",
    pdfPage: 2,
  }),
  line({
    number: "1.9.c",
    text: "Multicast",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.9",
    pdfPage: 2,
  }),
  line({
    number: "1.9.d",
    text: "Modified EUI 64",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.9",
    pdfPage: 2,
  }),
  line({
    number: "1.10",
    text: "Verify IP parameters for Client OS (Windows, Mac OS, Linux)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.11",
    text: "Describe wireless principles",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.11.a",
    text: "Nonoverlapping Wi-Fi channels",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.11",
    pdfPage: 2,
  }),
  line({
    number: "1.11.b",
    text: "SSID",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.11",
    pdfPage: 2,
  }),
  line({
    number: "1.11.c",
    text: "RF",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.11",
    pdfPage: 2,
  }),
  line({
    number: "1.11.d",
    text: "Encryption",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.11",
    pdfPage: 2,
  }),
  line({
    number: "1.12",
    text: "Explain virtualization fundamentals (server virtualization, containers, and VRFs)",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.13",
    text: "Describe switching concepts",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "1.13.a",
    text: "MAC learning and aging",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.13",
    pdfPage: 2,
  }),
  line({
    number: "1.13.b",
    text: "Frame switching",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.13",
    pdfPage: 2,
  }),
  line({
    number: "1.13.c",
    text: "Frame flooding",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.13",
    pdfPage: 2,
  }),
  line({
    number: "1.13.d",
    text: "MAC address table",
    domainNumber: "1.0",
    domainName: "Network Fundamentals",
    domainWeightPercent: 20,
    parentNumber: "1.13",
    pdfPage: 2,
  }),

  // Domain 2 — Network Access (20%) — PDF pp. 2–3
  line({
    number: "2.1",
    text: "Configure and verify VLANs (normal range) spanning multiple switches",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "2.1.a",
    text: "Access ports (data and voice)",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.1",
    pdfPage: 2,
  }),
  line({
    number: "2.1.b",
    text: "Default VLAN",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.1",
    pdfPage: 2,
  }),
  line({
    number: "2.1.c",
    text: "InterVLAN connectivity",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.1",
    pdfPage: 2,
  }),
  line({
    number: "2.2",
    text: "Configure and verify interswitch connectivity",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "2.2.a",
    text: "Trunk ports",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.2",
    pdfPage: 2,
  }),
  line({
    number: "2.2.b",
    text: "802.1Q",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.2",
    pdfPage: 2,
  }),
  line({
    number: "2.2.c",
    text: "Native VLAN",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.2",
    pdfPage: 2,
  }),
  line({
    number: "2.3",
    text: "Configure and verify Layer 2 discovery protocols (Cisco Discovery Protocol and LLDP)",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "2.4",
    text: "Configure and verify (Layer 2/Layer 3) EtherChannel (LACP)",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "2.5",
    text: "Interpret basic operations of Rapid PVST+ Spanning Tree Protocol",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 2,
  }),
  line({
    number: "2.5.a",
    text: "Root port, root bridge (primary/secondary), and other port names",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.b",
    text: "Port states and roles",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.c",
    text: "PortFast",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.5.d",
    text: "Root guard, loop guard, BPDU filter, and BPDU guard",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    parentNumber: "2.5",
    pdfPage: 2,
  }),
  line({
    number: "2.6",
    text: "Describe Cisco Wireless Architectures and AP modes",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 3,
  }),
  line({
    number: "2.7",
    text: "Describe physical infrastructure connections of WLAN components (AP, WLC, access/trunk ports, and LAG)",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 3,
  }),
  line({
    number: "2.8",
    text: "Describe network device management access (Telnet, SSH, HTTP, HTTPS, console, TACACS+/RADIUS, and cloud managed)",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 3,
  }),
  line({
    number: "2.9",
    text: "Interpret the wireless LAN GUI configuration for client connectivity, such as WLAN creation, security settings, QoS profiles, and advanced settings",
    domainNumber: "2.0",
    domainName: "Network Access",
    domainWeightPercent: 20,
    pdfPage: 3,
  }),

  // Domain 3 — IP Connectivity (25%) — PDF p. 3
  line({
    number: "3.1",
    text: "Interpret the components of routing table",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    pdfPage: 3,
  }),
  line({
    number: "3.1.a",
    text: "Routing protocol code",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.b",
    text: "Prefix",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.c",
    text: "Network mask",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.d",
    text: "Next hop",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.e",
    text: "Administrative distance",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.f",
    text: "Metric",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.1.g",
    text: "Gateway of last resort",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.1",
    pdfPage: 3,
  }),
  line({
    number: "3.2",
    text: "Determine how a router makes a forwarding decision by default",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    pdfPage: 3,
  }),
  line({
    number: "3.2.a",
    text: "Longest prefix match",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.2",
    pdfPage: 3,
  }),
  line({
    number: "3.2.b",
    text: "Administrative distance",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.2",
    pdfPage: 3,
  }),
  line({
    number: "3.2.c",
    text: "Routing protocol metric",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.2",
    pdfPage: 3,
  }),
  line({
    number: "3.3",
    text: "Configure and verify IPv4 and IPv6 static routing",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    pdfPage: 3,
  }),
  line({
    number: "3.3.a",
    text: "Default route",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.3",
    pdfPage: 3,
  }),
  line({
    number: "3.3.b",
    text: "Network route",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.3",
    pdfPage: 3,
  }),
  line({
    number: "3.3.c",
    text: "Host route",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.3",
    pdfPage: 3,
  }),
  line({
    number: "3.3.d",
    text: "Floating static",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.3",
    pdfPage: 3,
  }),
  line({
    number: "3.4",
    text: "Configure and verify single area OSPFv2",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    pdfPage: 3,
  }),
  line({
    number: "3.4.a",
    text: "Neighbor adjacencies",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.4",
    pdfPage: 3,
  }),
  line({
    number: "3.4.b",
    text: "Point-to-point",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.4",
    pdfPage: 3,
  }),
  line({
    number: "3.4.c",
    text: "Broadcast (DR/BDR selection)",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.4",
    pdfPage: 3,
  }),
  line({
    number: "3.4.d",
    text: "Router ID",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    parentNumber: "3.4",
    pdfPage: 3,
  }),
  line({
    number: "3.5",
    text: "Describe the purpose, functions, and concepts of first hop redundancy protocols",
    domainNumber: "3.0",
    domainName: "IP Connectivity",
    domainWeightPercent: 25,
    pdfPage: 3,
  }),

  // Domain 4 — IP Services (10%) — PDF pp. 3–4
  line({
    number: "4.1",
    text: "Configure and verify inside source NAT using static and pools",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
  line({
    number: "4.2",
    text: "Configure and verify NTP operating in a client and server mode",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
  line({
    number: "4.3",
    text: "Explain the role of DHCP and DNS within the network",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 3,
  }),
  line({
    number: "4.4",
    text: "Explain the function of SNMP in network operations",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "4.5",
    text: "Describe the use of syslog features, including facilities and severity levels",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "4.6",
    text: "Configure and verify DHCP client and relay",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "4.7",
    text: "Explain the forwarding per-hop behavior (PHB) for QoS such as classification, marking, queuing, congestion, policing, and shaping",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "4.8",
    text: "Configure network devices for remote access using SSH",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "4.9",
    text: "Describe the capabilities and functions of TFTP/FTP in the network",
    domainNumber: "4.0",
    domainName: "IP Services",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),

  // Domain 5 — Security Fundamentals (15%) — PDF p. 4
  line({
    number: "5.1",
    text: "Define key security concepts (threats, vulnerabilities, exploits, and mitigation techniques)",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.2",
    text: "Describe security program elements (user awareness, training, and physical access control)",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.3",
    text: "Configure and verify device access control using local passwords",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.4",
    text: "Describe security password policy elements, such as management, complexity, and password alternatives (multifactor authentication, certificates, and biometrics)",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.5",
    text: "Describe IPsec remote access and site-to-site VPNs",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.6",
    text: "Configure and verify access control lists",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.7",
    text: "Configure and verify Layer 2 security features (DHCP snooping, dynamic ARP inspection, and port security)",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.8",
    text: "Compare authentication, authorization, and accounting concepts",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.9",
    text: "Describe wireless security protocols (WPA, WPA2, and WPA3)",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),
  line({
    number: "5.10",
    text: "Configure and verify WLAN within the GUI using WPA2 PSK",
    domainNumber: "5.0",
    domainName: "Security Fundamentals",
    domainWeightPercent: 15,
    pdfPage: 4,
  }),

  // Domain 6 — Automation and Programmability (10%) — PDF p. 4
  line({
    number: "6.1",
    text: "Explain how automation impacts network management",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.2",
    text: "Compare traditional networks with controller-based networking",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.3",
    text: "Describe controller-based, software defined architecture (overlay, underlay, and fabric)",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.3.a",
    text: "Separation of control plane and data plane",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    parentNumber: "6.3",
    pdfPage: 4,
  }),
  line({
    number: "6.3.b",
    text: "Northbound and Southbound APIs",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    parentNumber: "6.3",
    pdfPage: 4,
  }),
  line({
    number: "6.4",
    text: "Explain AI (generative and predictive) and machine learning in network operations",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.5",
    text: "Describe characteristics of REST-based APIs (authentication types, CRUD, HTTP verbs, and data encoding)",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.6",
    text: "Recognize the capabilities of configuration management mechanisms such as Ansible and Terraform",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
  line({
    number: "6.7",
    text: "Recognize components of JSON-encoded data",
    domainNumber: "6.0",
    domainName: "Automation and Programmability",
    domainWeightPercent: 10,
    pdfPage: 4,
  }),
];

const byId = new Map(CCNA_V11_OFFICIAL_LINES.map((o) => [o.id, o]));
const byNumber = new Map(CCNA_V11_OFFICIAL_LINES.map((o) => [o.number, o]));

export function getCcnaV11OfficialLine(
  idOrNumber: string
): OfficialExamObjectiveLine | undefined {
  return byId.get(idOrNumber) ?? byNumber.get(idOrNumber);
}

export function listCcnaV11ParentObjectives(): OfficialExamObjectiveLine[] {
  return CCNA_V11_OFFICIAL_LINES.filter((o) => o.depth === 1);
}

export function listCcnaV11OfficialLines(): OfficialExamObjectiveLine[] {
  return CCNA_V11_OFFICIAL_LINES;
}

function verbForOfficialText(
  text: string
): AtomicLearningObjective["verb"] {
  const t = text.toLowerCase();
  if (t.startsWith("configure")) return "configure";
  if (t.startsWith("compare")) return "compare";
  if (t.startsWith("identify")) return "diagnose";
  if (t.startsWith("verify") || t.startsWith("interpret") || t.startsWith("determine"))
    return "apply";
  if (t.startsWith("recognize")) return "recognize";
  if (t.startsWith("explain") || t.startsWith("describe") || t.startsWith("define"))
    return "explain";
  return "explain";
}

/**
 * Atomic records for every official numbered line (parent + sub-bullet).
 * IDs are production-scoped and do not replace live pilot `CCNA-*` tags.
 */
export const CCNA_V11_ATOMIC_OBJECTIVES: AtomicLearningObjective[] =
  CCNA_V11_OFFICIAL_LINES.map((obj) => {
    const parentAtomicId = obj.parentNumber
      ? `alo-ccna-v1.1-${obj.parentNumber}`
      : undefined;
    return {
      id: `alo-ccna-v1.1-${obj.number}`,
      conceptId: `concept-ccna-v1.1-${obj.parentNumber ?? obj.number}`,
      statement: obj.depth === 1 ? obj.text : `${obj.parentNumber} — ${obj.text}`,
      verb: verbForOfficialText(obj.text),
      difficulty: "medium",
      cognitiveLoad: "moderate",
      assumedBackground: "intro-it",
      freshness: "versioned",
      examObjectiveIds: [obj.id],
      prerequisiteAtomicIds: parentAtomicId ? [parentAtomicId] : [],
      sourceIds: [CCNA_V11_SOURCE_ID],
    };
  });

export function listCcnaV11AtomicObjectives(): AtomicLearningObjective[] {
  return CCNA_V11_ATOMIC_OBJECTIVES;
}
