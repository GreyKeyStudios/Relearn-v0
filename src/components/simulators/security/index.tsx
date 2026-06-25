"use client";

import {
  ChoiceDrillRunner,
  OrderDrillRunner,
} from "@/components/simulators/SimulatorRegistry";
import { AUTH_FLOW_POOL } from "@/content/simulators/drills/security/auth-flow";
import { CERT_CHAIN_POOL } from "@/content/simulators/drills/security/cert-chain-order";
import { FIREWALL_RULE_POOL } from "@/content/simulators/drills/security/firewall-rule";
import { ITIL_INCIDENT_POOL } from "@/content/simulators/drills/security/itil-incident-order";
import { LINUX_PACKAGE_POOL } from "@/content/simulators/drills/security/linux-package";
import { LINUX_SYSTEMD_POOL } from "@/content/simulators/drills/security/linux-systemd";
import { MALWARE_CLASSIFIER_POOL } from "@/content/simulators/drills/security/malware-classifier";
import { MITRE_TACTIC_POOL } from "@/content/simulators/drills/security/mitre-tactic";
import { RISK_PRIORITIZATION_POOL } from "@/content/simulators/drills/security/risk-prioritization";
import { SIEM_ALERT_PRIORITY_POOL } from "@/content/simulators/drills/security/siem-alert-priority";
import type { SimulatorComponentProps } from "@/content/simulators/registry";

export function FirewallRuleDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={FIREWALL_RULE_POOL} onComplete={onComplete} />;
}

export function MalwareClassifier({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={MALWARE_CLASSIFIER_POOL} onComplete={onComplete} />;
}

export function MitreTacticDrill({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={MITRE_TACTIC_POOL} onComplete={onComplete} />;
}

export function SiemAlertPriority({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={SIEM_ALERT_PRIORITY_POOL} onComplete={onComplete} />;
}

export function RiskPrioritizationDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={RISK_PRIORITIZATION_POOL} onComplete={onComplete} />;
}

export function AuthFlowDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={AUTH_FLOW_POOL} onComplete={onComplete} />;
}

export function CertChainOrder({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={CERT_CHAIN_POOL} onComplete={onComplete} />;
}

export function LinuxSystemdDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={LINUX_SYSTEMD_POOL} onComplete={onComplete} />;
}

export function LinuxPackageDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={LINUX_PACKAGE_POOL} onComplete={onComplete} />;
}

export function ItilIncidentOrder({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={ITIL_INCIDENT_POOL} onComplete={onComplete} />;
}
