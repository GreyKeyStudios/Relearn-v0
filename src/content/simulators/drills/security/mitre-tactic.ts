import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const MITRE_TACTIC_POOL: OrderDrillItem[] = [
  {
    id: "ir-phases",
    prompt: "Order the NIST incident response lifecycle phases.",
    items: ["Preparation", "Detection & Analysis", "Containment", "Eradication & Recovery", "Post-Incident Activity"],
    weakConcept: "Incident response phase order",
    explanation: "NIST SP 800-61 defines this sequence from readiness through lessons learned.",
  },
  {
    id: "ir-contain-first",
    prompt: "After confirming active ransomware, order immediate response actions.",
    items: [
      "Isolate affected hosts from the network",
      "Preserve volatile evidence (memory dump if feasible)",
      "Identify patient zero and scope",
      "Notify stakeholders and activate IR team",
    ],
    weakConcept: "Containment priority",
    explanation: "Isolation limits spread; evidence preservation and scoping follow while communication runs in parallel.",
  },
  {
    id: "attack-chain",
    prompt: "Order these MITRE ATT&CK-style phases in a typical attack chain.",
    items: ["Initial Access", "Execution", "Persistence", "Lateral Movement", "Impact"],
    weakConcept: "ATT&CK kill chain order",
    explanation: "Attackers gain access, run code, maintain presence, move internally, then achieve impact.",
  },
  {
    id: "ir-eradicate",
    prompt: "Order eradication and recovery steps after containment.",
    items: [
      "Remove malware and unauthorized access",
      "Patch exploited vulnerabilities",
      "Restore systems from clean backups",
      "Validate monitoring before returning to production",
    ],
    weakConcept: "Eradication and recovery order",
    explanation: "Clean removal and patching precede restoration; validation ensures the threat is gone.",
  },
  {
    id: "cysa-triage",
    prompt: "Order analyst actions when multiple alerts fire during suspected breach.",
    items: [
      "Correlate alerts to identify related activity",
      "Determine severity and business impact",
      "Escalate to incident response if confirmed",
      "Document timeline and indicators",
    ],
    weakConcept: "Alert triage workflow",
    explanation: "Correlation and impact assessment drive escalation; documentation supports containment.",
  },
  {
    id: "mitre-tactics-recon",
    prompt: "Order these ATT&CK tactics from early to late in an intrusion (simplified).",
    items: ["Reconnaissance", "Resource Development", "Initial Access", "Command and Control", "Exfiltration"],
    weakConcept: "ATT&CK tactic timeline",
    explanation: "Adversaries recon and prepare assets before access, then establish C2 and exfiltrate data.",
  },
  {
    id: "ir-evidence",
    prompt: "Order forensic evidence collection from most to least volatile (typical guidance).",
    items: ["CPU registers and cache", "RAM / running processes", "Network connections", "Disk storage"],
    weakConcept: "Order of volatility",
    explanation: "Collect the most ephemeral evidence first before it is lost on shutdown or timeout.",
  },
  {
    id: "ir-comm",
    prompt: "Order stakeholder communication during a confirmed data breach.",
    items: [
      "Internal IR team and legal briefed",
      "Executive leadership informed",
      "Regulatory/customer notification per policy",
      "Public statement if required",
    ],
    weakConcept: "Breach communication sequence",
    explanation: "Internal coordination and legal review precede external notifications.",
  },
];
