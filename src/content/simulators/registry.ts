import type { ComponentType } from "react";
import {
  AuthFlowDrill,
  CertChainOrder,
  FirewallRuleDrill,
  ItilIncidentOrder,
  LinuxPackageDrill,
  LinuxSystemdDrill,
  MalwareClassifier,
  MitreTacticDrill,
  RiskPrioritizationDrill,
  SiemAlertPriority,
} from "@/components/simulators/security";
import type { SimulatorResult } from "@/types/simulator";
import {
  AwsServicePicker,
  AzureRbacDrill,
  CryptoMatcher,
  LinuxChmodDrill,
  LogLineTriage,
  OsiLayerSorter,
  PortProtocolDrill,
  SubnetCidrDrill,
  TcpipLayerMap,
  EthernetDeviceDrill,
  VlsmDrill,
} from "@/components/simulators/core";
import {
  AclRuleOrderDrill,
  BinaryIpConverterDrill,
  CableTypeDrill,
  DhcpDoraDrill,
  DnsRecordDrill,
  Ipv6CompressDrill,
  NatTypeDrill,
  StaticRouteDrill,
  VlanTrunkDrill,
  WirelessStandardDrill,
} from "@/components/simulators/network";

export interface SimulatorRegistryEntry {
  id: string;
  name: string;
  component: ComponentType<SimulatorComponentProps>;
  topicIds: string[];
}

export interface SimulatorComponentProps {
  onComplete: (result: SimulatorResult) => void;
}

/** BSim-Core populates this */
export const coreRegistry: SimulatorRegistryEntry[] = [
  {
    id: "subnet-cidr-drill",
    name: "Subnet & CIDR Drill",
    component: SubnetCidrDrill,
    topicIds: ["subnetting", "ipv4-addressing", "ip-ranges"],
  },
  {
    id: "vlsm-drill",
    name: "VLSM Allocator",
    component: VlsmDrill,
    topicIds: ["subnetting", "ipv4-addressing"],
  },
  {
    id: "port-protocol-drill",
    name: "Port & Protocol Matcher",
    component: PortProtocolDrill,
    topicIds: ["routing-fundamentals", "network-security-basics", "networking-commands"],
  },
  {
    id: "osi-layer-sorter",
    name: "OSI Layer Sorter",
    component: OsiLayerSorter,
    topicIds: ["osi-model", "network-models"],
  },
  {
    id: "tcpip-layer-map",
    name: "TCP/IP Model Map",
    component: TcpipLayerMap,
    topicIds: ["tcp-ip-model", "network-models"],
  },
  {
    id: "ethernet-device-drill",
    name: "Ethernet Device Layers",
    component: EthernetDeviceDrill,
    topicIds: ["ethernet"],
  },
  {
    id: "log-line-triage",
    name: "Log Line Triage",
    component: LogLineTriage,
    topicIds: ["logs", "log-analysis", "incident-response", "security-operations"],
  },
  {
    id: "crypto-matcher",
    name: "Cryptography Matcher",
    component: CryptoMatcher,
    topicIds: ["cryptography-basics"],
  },
  {
    id: "linux-chmod-drill",
    name: "chmod / Permissions Drill",
    component: LinuxChmodDrill,
    topicIds: ["permissions"],
  },
  {
    id: "aws-service-picker",
    name: "AWS Service Picker",
    component: AwsServicePicker,
    topicIds: ["ec2", "s3", "iam", "lambda", "rds", "vpc", "cloudwatch", "cloud-concepts"],
  },
  {
    id: "azure-rbac-drill",
    name: "Azure RBAC Drill",
    component: AzureRbacDrill,
    topicIds: ["role-based-access-control", "microsoft-entra-id", "governance"],
  },
];

/** BSim-Network populates this */
export const networkRegistry: SimulatorRegistryEntry[] = [
  {
    id: "vlan-trunk-drill",
    name: "VLAN & Trunk Drill",
    component: VlanTrunkDrill,
    topicIds: ["vlans", "trunking"],
  },
  {
    id: "nat-type-drill",
    name: "NAT Type Identifier",
    component: NatTypeDrill,
    topicIds: ["nat"],
  },
  {
    id: "static-route-drill",
    name: "Static Route Chooser",
    component: StaticRouteDrill,
    topicIds: ["static-routes", "routing-fundamentals"],
  },
  {
    id: "acl-rule-order",
    name: "ACL Rule Ordering",
    component: AclRuleOrderDrill,
    topicIds: ["acls"],
  },
  {
    id: "dhcp-dora-drill",
    name: "DHCP DORA Ordering",
    component: DhcpDoraDrill,
    topicIds: ["dhcp"],
  },
  {
    id: "dns-record-drill",
    name: "DNS Record Matcher",
    component: DnsRecordDrill,
    topicIds: ["dns"],
  },
  {
    id: "wireless-standard-drill",
    name: "Wireless Standard Matcher",
    component: WirelessStandardDrill,
    topicIds: ["wireless-basics"],
  },
  {
    id: "cable-type-drill",
    name: "Cabling & Connector ID",
    component: CableTypeDrill,
    topicIds: ["ethernet"],
  },
  {
    id: "ipv6-compress-drill",
    name: "IPv6 Compression Drill",
    component: Ipv6CompressDrill,
    topicIds: ["ipv6-basics"],
  },
  {
    id: "binary-ip-converter",
    name: "Binary ↔ Decimal IP Converter",
    component: BinaryIpConverterDrill,
    topicIds: ["ipv4-addressing", "subnetting"],
  },
];

/** BSim-Security populates this */
export const securityRegistry: SimulatorRegistryEntry[] = [
  {
    id: "firewall-rule-drill",
    name: "Firewall Rule Outcome Tester",
    component: FirewallRuleDrill,
    topicIds: ["firewalls", "secure-network-design", "network-security"],
  },
  {
    id: "malware-classifier",
    name: "Malware Type Classifier",
    component: MalwareClassifier,
    topicIds: ["malware", "malware-indicators", "threat-actors"],
  },
  {
    id: "mitre-tactic-drill",
    name: "ATT&CK & Incident Response Ordering",
    component: MitreTacticDrill,
    topicIds: ["incident-response", "threat-intelligence", "security-operations"],
  },
  {
    id: "siem-alert-priority",
    name: "SIEM Alert Priority Ranker",
    component: SiemAlertPriority,
    topicIds: ["siem-basics", "log-analysis", "security-operations"],
  },
  {
    id: "risk-prioritization-drill",
    name: "Risk & Vulnerability Prioritization",
    component: RiskPrioritizationDrill,
    topicIds: ["risk-management", "risk-analysis", "vulnerability-management"],
  },
  {
    id: "auth-flow-drill",
    name: "Authentication Flow Drill",
    component: AuthFlowDrill,
    topicIds: ["authentication", "identity-access-management", "authorization"],
  },
  {
    id: "cert-chain-order",
    name: "Certificate Chain Ordering",
    component: CertChainOrder,
    topicIds: ["cryptography-basics"],
  },
  {
    id: "linux-systemd-drill",
    name: "systemd & journalctl Drill",
    component: LinuxSystemdDrill,
    topicIds: ["system-services", "logs", "troubleshooting"],
  },
  {
    id: "linux-package-drill",
    name: "Package Manager Command Drill",
    component: LinuxPackageDrill,
    topicIds: ["package-management"],
  },
  {
    id: "itil-incident-order",
    name: "ITIL Incident & Change Drill",
    component: ItilIncidentOrder,
    topicIds: ["incident-management", "change-enablement", "problem-management"],
  },
];

/** Merged registry — BSim agents export partial arrays; B9 merges into SIMULATORS */
export const SIMULATORS: SimulatorRegistryEntry[] = [
  ...coreRegistry,
  ...networkRegistry,
  ...securityRegistry,
];

export function getSimulator(id: string): SimulatorRegistryEntry | undefined {
  return SIMULATORS.find((s) => s.id === id);
}

export function getAllSimulatorIds(): string[] {
  return SIMULATORS.map((s) => s.id);
}
