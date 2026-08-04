import type { ExamObjective } from "@/content/types";
import { getCcnaV20OfficialLine } from "@/content/production/objectives/ccna-200-301-v2.0";

/** CCNA exam objectives — pilot catalog for objective-level mastery */
export const CCNA_OBJECTIVES: ExamObjective[] = [
  { id: "CCNA-1.1", domain: "network-fundamentals", text: "Explain the role and function of network components" },
  { id: "CCNA-1.2", domain: "network-fundamentals", text: "Describe characteristics of network topology architectures" },
  { id: "CCNA-1.3", domain: "network-fundamentals", text: "Compare physical interface and cabling types" },
  { id: "CCNA-1.4", domain: "network-fundamentals", text: "Identify interface and cable issues" },
  { id: "CCNA-1.5", domain: "network-fundamentals", text: "Compare TCP to UDP" },
  { id: "CCNA-1.6", domain: "network-fundamentals", text: "Configure and verify IPv4 addressing and subnetting" },
  { id: "CCNA-1.7", domain: "network-fundamentals", text: "Describe IPv4 and IPv6 address types" },
  { id: "CCNA-1.8", domain: "network-fundamentals", text: "Verify IP parameters for Client OS" },
  { id: "CCNA-1.9", domain: "network-fundamentals", text: "Perform subnet calculations" },
  { id: "CCNA-1.10", domain: "network-fundamentals", text: "Configure IPv4 addressing and subnetting" },
  { id: "CCNA-1.11", domain: "network-fundamentals", text: "Describe private IPv4 addressing" },
  { id: "CCNA-1.12", domain: "network-fundamentals", text: "Configure IPv6 addressing" },
  { id: "CCNA-1.13", domain: "network-fundamentals", text: "Describe wireless principles" },
  { id: "CCNA-2.1", domain: "network-access", text: "Configure and verify VLANs" },
  { id: "CCNA-2.2", domain: "network-access", text: "Configure interswitch connectivity" },
  { id: "CCNA-2.3", domain: "network-access", text: "Configure Layer 2 discovery protocols" },
  { id: "CCNA-2.4", domain: "network-access", text: "Configure and verify EtherChannel" },
  { id: "CCNA-2.5", domain: "network-access", text: "Describe STP and RSTP" },
  { id: "CCNA-2.6", domain: "network-access", text: "Configure root bridge and port roles" },
  { id: "CCNA-2.7", domain: "network-access", text: "Compare Cisco Wireless architectures" },
  { id: "CCNA-2.8", domain: "network-access", text: "Describe physical infrastructure connections" },
  { id: "CCNA-2.9", domain: "network-access", text: "Describe wireless LAN access" },
  { id: "CCNA-3.1", domain: "ip-connectivity", text: "Interpret routing table components" },
  { id: "CCNA-3.2", domain: "ip-connectivity", text: "Determine how a router makes forwarding decisions" },
  { id: "CCNA-3.3", domain: "ip-connectivity", text: "Configure and verify IPv4 and IPv6 static routing" },
  { id: "CCNA-3.4", domain: "ip-connectivity", text: "Configure single-area OSPFv2" },
  { id: "CCNA-3.5", domain: "ip-connectivity", text: "Describe OSPF neighbor adjacencies" },
  { id: "CCNA-3.6", domain: "ip-connectivity", text: "Configure and verify OSPF neighbor relationships" },
  { id: "CCNA-3.7", domain: "ip-connectivity", text: "Configure and verify NAT" },
  { id: "CCNA-3.8", domain: "ip-connectivity", text: "Configure and verify NTP" },
  { id: "CCNA-4.1", domain: "ip-services", text: "Configure and verify DHCP on a router" },
  { id: "CCNA-4.2", domain: "ip-services", text: "Describe DNS lookup operation" },
  { id: "CCNA-4.3", domain: "ip-services", text: "Configure DNS on a Cisco router" },
  { id: "CCNA-4.4", domain: "ip-services", text: "Describe SNMP in network operations" },
  { id: "CCNA-5.1", domain: "security-fundamentals", text: "Define key security concepts" },
  { id: "CCNA-5.2", domain: "security-fundamentals", text: "Configure and verify ACLs" },
  { id: "CCNA-5.3", domain: "security-fundamentals", text: "Configure Layer 2 security features" },
  { id: "CCNA-5.4", domain: "security-fundamentals", text: "Describe wireless security protocols" },
  { id: "CCNA-6.1", domain: "automation", text: "Explain how automation impacts network management" },
  { id: "CCNA-6.2", domain: "automation", text: "Compare traditional networks with controller-based networking" },
];

const byId = new Map(CCNA_OBJECTIVES.map((o) => [o.id, o]));

export function getCcnaObjective(id: string): ExamObjective | undefined {
  const pilot = byId.get(id);
  if (pilot) return pilot;
  if (id.startsWith("200-301-v2.0/")) {
    const number = id.slice("200-301-v2.0/".length);
    const line = getCcnaV20OfficialLine(number);
    if (!line) return undefined;
    return {
      id,
      domain: line.domainName,
      text: line.text,
    };
  }
  return undefined;
}

export function getCcnaObjectiveShortLabel(id: string): string {
  const obj = getCcnaObjective(id);
  if (!obj) {
    if (id.startsWith("200-301-v2.0/")) return id.replace("200-301-v2.0/", "v2.0 ");
    return id.replace("CCNA-", "");
  }
  const num = id.startsWith("200-301-v2.0/")
    ? `v2.0 ${id.replace("200-301-v2.0/", "")}`
    : id.replace("CCNA-", "");
  const short = obj.text.length > 42 ? obj.text.slice(0, 39) + "…" : obj.text;
  return `${num} ${short}`;
}
