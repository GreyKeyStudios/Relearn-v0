import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const SIEM_ALERT_PRIORITY_POOL: OrderDrillItem[] = [
  {
    id: "siem-critical-first",
    prompt: "Rank these SIEM alerts from highest to lowest priority for immediate analyst action.",
    items: [
      "Multiple failed logins followed by successful admin login from foreign IP",
      "Outbound 50 GB transfer to unknown cloud storage at 3 AM",
      "Single failed VPN login from employee home IP",
      "Antivirus quarantined known adware on workstation",
    ],
    weakConcept: "Critical alert prioritization",
    explanation: "Suspected account compromise plus mass exfiltration outrank routine failed logins and adware.",
  },
  {
    id: "siem-ransomware",
    prompt: "Order investigation priority during suspected ransomware outbreak.",
    items: [
      "Alerts: mass file rename + vssadmin delete on file server",
      "Alert: one user opened phishing email attachment",
      "Alert: scheduled backup completed successfully",
      "Alert: DNS query to newly registered domain from one PC",
    ],
    weakConcept: "Ransomware alert triage",
    explanation: "Mass encryption indicators are highest priority; backup success is informational.",
  },
  {
    id: "siem-lateral",
    prompt: "Rank alerts suggesting lateral movement (highest priority first).",
    items: [
      "Pass-the-hash attempt detected on domain controller",
      "User accessed SharePoint from corporate laptop",
      "Nmap scan from internal dev subnet to production VLAN",
      "Expired SSL certificate on internal wiki",
    ],
    weakConcept: "Lateral movement indicators",
    explanation: "Credential attacks on DCs and internal scanning beat routine access and cert warnings.",
  },
  {
    id: "siem-data-exfil",
    prompt: "Order log review tasks when DLP flagged sensitive data leaving the network.",
    items: [
      "Identify source host, user, and destination",
      "Determine data classification and volume",
      "Check for related authentication anomalies",
      "Review proxy/firewall logs for same timeframe",
    ],
    weakConcept: "Exfiltration investigation order",
    explanation: "Source and data sensitivity establish scope; auth and network logs provide context.",
  },
  {
    id: "siem-noise",
    prompt: "Rank these for analyst attention during a busy shift (most urgent first).",
    items: [
      "EDR: Cobalt Strike beacon pattern on finance server",
      "Firewall: blocked inbound scan from internet",
      "IDS: signature match on old vulnerability exploit attempt (blocked)",
      "System: disk 85% full on log collector",
    ],
    weakConcept: "Signal vs noise in SIEM",
    explanation: "Active C2 on critical server beats blocked scans and capacity warnings.",
  },
  {
    id: "siem-priv-esc",
    prompt: "Order alerts related to privilege escalation (highest priority first).",
    items: [
      "Service account added to Domain Admins group",
      "User ran sudo on Linux jump host",
      "New local admin created on single workstation",
      "Group Policy refresh on domain clients",
    ],
    weakConcept: "Privilege escalation alert ranking",
    explanation: "Domain Admin membership changes are critical; routine GPO refresh is low priority.",
  },
  {
    id: "siem-phishing",
    prompt: "Rank phishing-related alerts for triage (most urgent first).",
    items: [
      "User submitted credentials to known phishing URL",
      "Email gateway blocked 200 similar phishing messages",
      "User reported suspicious email — not yet clicked",
      "SPF fail on marketing newsletter (legitimate vendor misconfig)",
    ],
    weakConcept: "Phishing incident severity",
    explanation: "Confirmed credential submission requires immediate account response.",
  },
  {
    id: "siem-after-hours",
    prompt: "Rank after-hours alerts on production database servers (highest first).",
    items: [
      "SQL login failures spike then success from new IP",
      "Automated backup job started on schedule",
      "Patch management agent checked in",
      "Temporary CPU spike during index rebuild",
    ],
    weakConcept: "After-hours anomaly detection",
    explanation: "Auth anomaly on production DB beats expected maintenance activity.",
  },
];
