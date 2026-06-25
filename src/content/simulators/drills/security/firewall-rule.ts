import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const FIREWALL_RULE_POOL: ChoiceDrillItem[] = [
  {
    id: "fw-deny-first",
    prompt:
      "Rules (top to bottom):\n1. DENY TCP 192.168.1.0/24 → any:22\n2. ALLOW TCP any → any:443\n\nTraffic: 192.168.1.50 → 203.0.113.10:22\nOutcome?",
    choices: [
      { id: "a", text: "Denied — rule 1 matches first" },
      { id: "b", text: "Allowed — rule 2 permits all HTTPS-like traffic" },
      { id: "c", text: "Allowed — implicit allow at bottom" },
      { id: "d", text: "Denied — port 22 is always blocked globally" },
    ],
    correctChoiceId: "a",
    weakConcept: "Firewall rule order (first match)",
    explanation:
      "Stateful/stateless firewalls evaluate top-down. Rule 1 explicitly denies SSH from that subnet before rule 2 is reached.",
  },
  {
    id: "fw-allow-specific",
    prompt:
      "Rules:\n1. ALLOW TCP 10.0.0.5 → 10.0.0.10:3389\n2. DENY any → any\n\nTraffic: 10.0.0.5 → 10.0.0.10:3389\nOutcome?",
    choices: [
      { id: "a", text: "Allowed" },
      { id: "b", text: "Denied" },
      { id: "c", text: "Allowed only if stateful return traffic exists" },
      { id: "d", text: "Denied — default deny overrides allow" },
    ],
    correctChoiceId: "a",
    weakConcept: "Explicit allow before deny-all",
    explanation: "The first matching rule allows RDP from the specified host pair.",
  },
  {
    id: "fw-implicit-deny",
    prompt:
      "Rules:\n1. ALLOW UDP any → any:53\n2. ALLOW TCP any → any:443\n\nTraffic: 10.1.1.20 → 10.1.1.30:445 (SMB)\nOutcome?",
    choices: [
      { id: "a", text: "Denied — no matching allow rule (implicit deny)" },
      { id: "b", text: "Allowed — TCP is permitted by rule 2" },
      { id: "c", text: "Allowed — internal LAN traffic is trusted" },
      { id: "d", text: "Denied — SMB is blocked by default in all firewalls" },
    ],
    correctChoiceId: "a",
    weakConcept: "Implicit deny default",
    explanation:
      "Rule 2 only matches port 443. SMB on 445 matches neither rule, so implicit deny applies.",
  },
  {
    id: "fw-dmz-web",
    prompt:
      "Rules on perimeter firewall:\n1. ALLOW TCP any → DMZ_WEB:80,443\n2. DENY any → DMZ_WEB\n\nTraffic: Internet client → DMZ_WEB:443\nOutcome?",
    choices: [
      { id: "a", text: "Allowed" },
      { id: "b", text: "Denied" },
      { id: "c", text: "Allowed only from corporate VPN" },
      { id: "d", text: "Denied — inbound HTTPS requires application proxy" },
    ],
    correctChoiceId: "a",
    weakConcept: "DMZ inbound allow rules",
    explanation: "Rule 1 permits inbound HTTPS to the web server in the DMZ.",
  },
  {
    id: "fw-stateful-return",
    prompt:
      "Stateful firewall: outbound ALLOW established/related. Inbound: DENY all except return traffic.\n\nInternal host initiates TCP to 203.0.113.5:443. Return packets arrive.\nOutcome for return traffic?",
    choices: [
      { id: "a", text: "Allowed as established/related return traffic" },
      { id: "b", text: "Denied — inbound is denied by default" },
      { id: "c", text: "Allowed only if a static NAT rule exists" },
      { id: "d", text: "Denied — return traffic must match an explicit inbound allow" },
    ],
    correctChoiceId: "a",
    weakConcept: "Stateful firewall return traffic",
    explanation:
      "Stateful firewalls track outbound connections and permit matching return packets without a separate inbound allow rule.",
  },
  {
    id: "fw-zone-internal",
    prompt:
      "Zone policy: INTERNAL → DMZ ALLOW 443; INTERNAL → EXTERNAL ALLOW 443; DMZ → INTERNAL DENY all.\n\nDMZ app server → INTERNAL database:1433\nOutcome?",
    choices: [
      { id: "a", text: "Denied — DMZ to internal is blocked" },
      { id: "b", text: "Allowed — database port is standard" },
      { id: "c", text: "Allowed — return traffic from prior connection" },
      { id: "d", text: "Allowed if source IP is in allow list" },
    ],
    correctChoiceId: "a",
    weakConcept: "Zone-based firewall policies",
    explanation:
      "Zone policies block DMZ-initiated connections to internal networks to limit lateral movement.",
  },
  {
    id: "fw-log-deny",
    prompt:
      "Rules:\n1. DENY TCP any → any:23 LOG\n2. ALLOW any → any\n\nTelnet attempt to any host on port 23.\nOutcome?",
    choices: [
      { id: "a", text: "Denied and logged" },
      { id: "b", text: "Allowed — rule 2 permits everything" },
      { id: "c", text: "Denied without logging" },
      { id: "d", text: "Allowed — telnet is legacy but not blocked" },
    ],
    correctChoiceId: "a",
    weakConcept: "Deny with logging",
    explanation: "Rule 1 matches first, denies telnet, and logs the attempt per the LOG action.",
  },
  {
    id: "fw-port-range",
    prompt:
      "Rules:\n1. ALLOW TCP 192.168.0.0/16 → 10.0.0.0/8:8000-8010\n2. DENY 192.168.0.0/16 → 10.0.0.0/8\n\n192.168.5.10 → 10.0.1.5:8005\nOutcome?",
    choices: [
      { id: "a", text: "Allowed — port in allowed range" },
      { id: "b", text: "Denied — rule 2 blocks all cross-subnet traffic" },
      { id: "c", text: "Allowed only on weekdays per time-based rule" },
      { id: "d", text: "Denied — port ranges are not supported" },
    ],
    correctChoiceId: "a",
    weakConcept: "Port range matching",
    explanation: "Rule 1 matches before the broader deny in rule 2 because evaluation is first-match.",
  },
];
