/**
 * IPv4 troubleshoot scenarios for official CCNA v2.0 1.3.
 * Evidence panels are always readable — diagnosis, not blind clicking.
 */

export type Ipv4FaultClass =
  | "subnet-gateway-mismatch"
  | "duplicate-address"
  | "wrong-mask"
  | "public-private-context"
  | "healthy-private-lan";

export interface Ipv4EvidencePanel {
  id: string;
  title: string;
  body: string;
}

export interface Ipv4TroubleshootScenario {
  id: string;
  ticket: string;
  symptom: string;
  evidence: Ipv4EvidencePanel[];
  choices: { id: string; text: string; faultClass: Ipv4FaultClass }[];
  correctChoiceId: string;
  /** Choice that maps to misc-v20-ipv4-private-always-unusable */
  misconceptionChoiceId?: string;
  explanation: string;
  remediationHint?: string;
  weakConcept: string;
}

export const IPV4_TROUBLESHOOT_SCENARIOS: Ipv4TroubleshootScenario[] = [
  {
    id: "v20-1.3-gateway-outside",
    ticket: "Ticket #1042 — Branch PC cannot reach the file server",
    symptom: "Users report 'destination host unreachable' from a newly imaged laptop.",
    evidence: [
      {
        id: "ipconfig",
        title: "Host ipconfig",
        body: "IPv4 Address. . . . . . . . . . . : 192.168.10.50\nSubnet Mask . . . . . . . . . . . : 255.255.255.0\nDefault Gateway . . . . . . . . . : 192.168.11.1",
      },
      {
        id: "design",
        title: "Design note",
        body: "LAN VLAN 10 is planned as 192.168.10.0/24 (private). Gateway should be 192.168.10.1.",
      },
      {
        id: "iface",
        title: "Switch access port",
        body: "Gi1/0/12 status: connected, VLAN 10, no err-disable.",
      },
    ],
    choices: [
      { id: "a", text: "Private addresses are illegal — renumber to public", faultClass: "public-private-context" },
      { id: "b", text: "Subnet/gateway assignment mismatch", faultClass: "subnet-gateway-mismatch" },
      { id: "c", text: "Missing OSPFv3 process on the core", faultClass: "healthy-private-lan" },
      { id: "d", text: "BPDU guard is blocking the access port", faultClass: "healthy-private-lan" },
    ],
    correctChoiceId: "b",
    misconceptionChoiceId: "a",
    explanation:
      "Gateway 192.168.11.1 is outside 192.168.10.0/24. Private addressing itself is valid on an internal LAN — this is an assignment/subnetting fault.",
    remediationHint:
      "Private RFC 1918 ranges are valid on internal networks. Triage mask/gateway first; do not treat 'private' as broken.",
    weakConcept: "IPv4 gateway/subnet assignment",
  },
  {
    id: "v20-1.3-wrong-mask",
    ticket: "Ticket #1108 — Only half the printers respond",
    symptom: "Hosts .1–.100 work; .130–.160 cannot ping the gateway.",
    evidence: [
      {
        id: "ipconfig",
        title: "Failing host",
        body: "IPv4 Address: 10.20.30.140\nSubnet Mask: 255.255.255.128 (/25)\nDefault Gateway: 10.20.30.1",
      },
      {
        id: "design",
        title: "Intended subnet",
        body: "Printer VLAN designed as 10.20.30.0/24. Gateway 10.20.30.1 lives on that /24.",
      },
      {
        id: "route",
        title: "Gateway interface",
        body: "Gi0/0: 10.20.30.1/24 up/up — ARP shows neighbors only in .1–.126 from this host's view.",
      },
    ],
    choices: [
      { id: "a", text: "Wrong mask / prefix — host thinks gateway is on another subnet half", faultClass: "wrong-mask" },
      { id: "b", text: "Private 10.x addresses cannot be used", faultClass: "public-private-context" },
      { id: "c", text: "Duplicate MAC on the printer", faultClass: "duplicate-address" },
      { id: "d", text: "NAT PAT pool exhausted", faultClass: "healthy-private-lan" },
    ],
    correctChoiceId: "a",
    misconceptionChoiceId: "b",
    explanation:
      "A /25 places .140 in 10.20.30.128/25 while the gateway is in .0/25 — classic wrong-mask assignment fault. 10.x private space is fine.",
    remediationHint:
      "Compute the subnet from the host mask before blaming private addressing.",
    weakConcept: "IPv4 mask/prefix sizing",
  },
  {
    id: "v20-1.3-duplicate",
    ticket: "Ticket #1201 — Intermittent IP conflict",
    symptom: "Windows popup: 'Another computer has this IP address.'",
    evidence: [
      {
        id: "ipconfig",
        title: "Host A",
        body: "IPv4 Address: 172.16.5.20\nSubnet Mask: 255.255.255.0\nDefault Gateway: 172.16.5.1",
      },
      {
        id: "arp",
        title: "Router ARP",
        body: "172.16.5.20  aa:bb:cc:01:02:03  Gi0/1\n172.16.5.20  de:ad:be:ef:00:11  Gi0/1  (flapping)",
      },
      {
        id: "design",
        title: "DHCP vs static",
        body: "DHCP pool 172.16.5.50–200; printer statically set to .20 outside the exclusion list.",
      },
    ],
    choices: [
      { id: "a", text: "Duplicate IPv4 assignment", faultClass: "duplicate-address" },
      { id: "b", text: "172.16 private space is invalid", faultClass: "public-private-context" },
      { id: "c", text: "Gateway is on the wrong VLAN", faultClass: "subnet-gateway-mismatch" },
      { id: "d", text: "OSPFv2 area mismatch", faultClass: "healthy-private-lan" },
    ],
    correctChoiceId: "a",
    misconceptionChoiceId: "b",
    explanation:
      "Two MACs claiming 172.16.5.20 — duplicate assignment. Private 172.16/12 is expected on an internal LAN.",
    weakConcept: "IPv4 duplicate address",
  },
  {
    id: "v20-1.3-healthy-private",
    ticket: "Ticket #1300 — New intern thinks the LAN is 'broken'",
    symptom: "Intern says 10.0.0.0/8 addresses mean the network was misconfigured.",
    evidence: [
      {
        id: "ipconfig",
        title: "Working host",
        body: "IPv4 Address: 10.10.10.42\nSubnet Mask: 255.255.255.0\nDefault Gateway: 10.10.10.1\nPing gateway: success · Ping internal server: success",
      },
      {
        id: "nat",
        title: "Edge note",
        body: "Edge firewall NATs 10.10.10.0/24 to a public pool for Internet. Internal apps use private space by design.",
      },
      {
        id: "iface",
        title: "Interface state",
        body: "Gi0/1 up/up, no input errors, correct VLAN.",
      },
    ],
    choices: [
      { id: "a", text: "No IPv4 fault — private LAN addressing is intentional", faultClass: "healthy-private-lan" },
      { id: "b", text: "Private addresses are always a configuration error", faultClass: "public-private-context" },
      { id: "c", text: "Gateway is outside the /24", faultClass: "subnet-gateway-mismatch" },
      { id: "d", text: "Mask must be /16 for all 10.x networks", faultClass: "wrong-mask" },
    ],
    correctChoiceId: "a",
    misconceptionChoiceId: "b",
    explanation:
      "Evidence shows a healthy private LAN with working gateway reachability. Official 1.3 troubleshoot includes public/private context — private is not 'broken.'",
    remediationHint:
      "Given three hosts (private LAN, mis-subnetted private, public WAN), identify which faults are addressing/subnetting vs expected private use.",
    weakConcept: "Public vs private IPv4 context",
  },
  {
    id: "v20-1.3-public-wan",
    ticket: "Ticket #1411 — WAN interface will not route to ISP",
    symptom: "Edge router WAN cannot ping ISP next-hop after a cutover.",
    evidence: [
      {
        id: "iface",
        title: "WAN interface",
        body: "Gi0/0: 203.0.113.10/30 up/up\nConfigured gateway/next-hop: 10.255.255.1",
      },
      {
        id: "design",
        title: "ISP handoff",
        body: "Provider assigned 203.0.113.8/30; ISP router is 203.0.113.9 (public). Private next-hop was left from lab testing.",
      },
      {
        id: "route",
        title: "Routing implication",
        body: "No ARP entry for 10.255.255.1 on Gi0/0; default route points at that unreachable private hop.",
      },
    ],
    choices: [
      { id: "a", text: "Public/private context fault — WAN next-hop must match the public /30", faultClass: "public-private-context" },
      { id: "b", text: "Private addresses are illegal everywhere including the LAN", faultClass: "public-private-context" },
      { id: "c", text: "Duplicate address on the LAN printer", faultClass: "duplicate-address" },
      { id: "d", text: "BPDU filter missing on the WAN port", faultClass: "healthy-private-lan" },
    ],
    correctChoiceId: "a",
    explanation:
      "The WAN segment is public /30 space; a leftover private next-hop is a public/private context assignment fault — not a ban on private LANs.",
    weakConcept: "Public vs private IPv4 assignment context",
  },
  {
    id: "v20-1.3-gateway-ok-mask",
    ticket: "Ticket #1502 — VoIP phones offline after mask change",
    symptom: "Phones kept .50 addresses but someone pushed /30 masks.",
    evidence: [
      {
        id: "ipconfig",
        title: "Phone",
        body: "IPv4: 192.168.40.50\nMask: 255.255.255.252 (/30)\nGateway: 192.168.40.1",
      },
      {
        id: "math",
        title: "Subnet math",
        body: "/30 block containing .50 is 192.168.40.48–.51. Gateway .1 is not in that block.",
      },
      {
        id: "design",
        title: "Voice VLAN design",
        body: "Voice VLAN remains 192.168.40.0/24.",
      },
    ],
    choices: [
      { id: "a", text: "Wrong mask causing subnet/gateway mismatch", faultClass: "wrong-mask" },
      { id: "b", text: "192.168 private space cannot host phones", faultClass: "public-private-context" },
      { id: "c", text: "Healthy configuration — ignore the gateway", faultClass: "healthy-private-lan" },
      { id: "d", text: "Duplicate DHCP lease only", faultClass: "duplicate-address" },
    ],
    correctChoiceId: "a",
    misconceptionChoiceId: "b",
    explanation:
      "The /30 places the phone and gateway in different subnets. Fix the mask to the designed /24.",
    weakConcept: "IPv4 mask vs gateway placement",
  },
];
