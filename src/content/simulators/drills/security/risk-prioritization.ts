import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const RISK_PRIORITIZATION_POOL: ChoiceDrillItem[] = [
  {
    id: "risk-cvss-critical",
    prompt:
      "Vulnerability A: CVSS 9.8, internet-facing web server, public exploit available.\nVulnerability B: CVSS 5.3, internal-only dev tool, no known exploit.\nWhich should be remediated first?",
    choices: [
      { id: "a", text: "Vulnerability A — higher risk due to exposure and exploitability" },
      { id: "b", text: "Vulnerability B — lower CVSS means lower priority always" },
      { id: "c", text: "Both equally — CVSS alone determines priority" },
      { id: "d", text: "Neither — patch on next maintenance window regardless" },
    ],
    correctChoiceId: "a",
    weakConcept: "Risk = likelihood × impact",
    explanation:
      "Risk prioritization considers asset exposure and exploit availability, not CVSS alone.",
  },
  {
    id: "risk-asset-critical",
    prompt:
      "Two CVSS 7.5 flaws: one on domain controller, one on guest Wi-Fi captive portal. Priority?",
    choices: [
      { id: "a", text: "Domain controller — higher asset criticality" },
      { id: "b", text: "Guest portal — internet-facing" },
      { id: "c", text: "Equal — same CVSS score" },
      { id: "d", text: "Guest portal — easier to exploit" },
    ],
    correctChoiceId: "a",
    weakConcept: "Asset criticality in risk scoring",
    explanation: "Identity infrastructure compromise has greater organizational impact than guest network issues.",
  },
  {
    id: "risk-compensating",
    prompt:
      "Critical SQL injection on internal app. WAF blocks known patterns; app scheduled for decommission in 30 days. Best priority?",
    choices: [
      { id: "a", text: "High — compensating controls may fail; plan fix or accelerated retirement" },
      { id: "b", text: "Low — WAF fully mitigates all injection" },
      { id: "c", text: "Ignore — decommission removes risk entirely without action" },
      { id: "d", text: "Low — internal apps are never targeted" },
    ],
    correctChoiceId: "a",
    weakConcept: "Compensating control limitations",
    explanation: "WAFs reduce but do not eliminate risk; track until patched or retired.",
  },
  {
    id: "risk-zero-day",
    prompt:
      "Vendor patch unavailable for actively exploited zero-day on edge VPN appliance. Priority action?",
    choices: [
      { id: "a", text: "Emergency — implement vendor workaround or isolate until patched" },
      { id: "b", text: "Low — wait for scheduled patch Tuesday" },
      { id: "c", text: "Medium — scan quarterly for confirmation" },
      { id: "d", text: "Defer — zero-days are theoretical until patch exists" },
    ],
    correctChoiceId: "a",
    weakConcept: "Zero-day active exploitation",
    explanation: "Active exploitation without a patch requires immediate mitigation or isolation.",
  },
  {
    id: "risk-data-class",
    prompt:
      "Medium CVSS flaw on system storing PCI cardholder data vs same flaw on public marketing site with no PII. Priority?",
    choices: [
      { id: "a", text: "PCI system — data classification raises impact" },
      { id: "b", text: "Marketing site — internet-facing always wins" },
      { id: "c", text: "Equal severity" },
      { id: "d", text: "Marketing site — higher traffic volume" },
    ],
    correctChoiceId: "a",
    weakConcept: "Data sensitivity impact",
    explanation: "Regulated data increases impact even when CVSS scores match.",
  },
  {
    id: "risk-likelihood",
    prompt:
      "Misconfiguration allows anonymous read on S3 bucket with backups (no public exploit script). Likelihood vs impact assessment?",
    choices: [
      { id: "a", text: "High priority — easy to discover and high impact if data exposed" },
      { id: "b", text: "Low — no CVE means no risk" },
      { id: "c", text: "Low — backups are encrypted so exposure is harmless" },
      { id: "d", text: "Medium — only fix if audit finds it" },
    ],
    correctChoiceId: "a",
    weakConcept: "Misconfiguration risk",
    explanation: "Open cloud storage is frequently scanned; backup exposure is high impact.",
  },
  {
    id: "risk-acceptance",
    prompt:
      "Legacy OT system cannot be patched without vendor approval (6-month lead). CVSS 8.1, network-segmented, no internet route. Best approach?",
    choices: [
      { id: "a", text: "Document risk acceptance with compensating controls and review date" },
      { id: "b", text: "Ignore — segmentation eliminates all risk" },
      { id: "c", text: "Deploy patch immediately without testing" },
      { id: "d", text: "Remove from asset inventory to close finding" },
    ],
    correctChoiceId: "a",
    weakConcept: "Risk acceptance process",
    explanation: "Formal acceptance with controls and review is appropriate when patching is constrained.",
  },
  {
    id: "risk-vuln-scan",
    prompt:
      "Weekly scan shows 400 findings. Best triage starting point?",
    choices: [
      { id: "a", text: "Critical/high on internet-facing and sensitive assets first" },
      { id: "b", text: "Alphabetical by hostname" },
      { id: "c", text: "Low severity bulk close to reduce count" },
      { id: "d", text: "Random sample of 10 for manual review only" },
    ],
    correctChoiceId: "a",
    weakConcept: "Vulnerability scan triage",
    explanation: "Focus on severity combined with asset exposure and data sensitivity.",
  },
];
