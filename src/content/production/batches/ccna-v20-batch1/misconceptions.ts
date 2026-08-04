import type { MisconceptionRecord, RemediationActivity } from "../../types";

export const CCNA_V20_BATCH1_MISCONCEPTIONS: MisconceptionRecord[] = [
  {
    id: "misc-v20-ipv4-private-always-unusable",
    statement: "Private IPv4 addresses can never be used on a working network.",
    whyItAppears:
      "Learners confuse RFC 1918 private addressing with 'invalid' or 'broken' addresses.",
    correction:
      "Private IPv4 ranges are valid on internal networks; troubleshoot assignment/subnetting, then NAT at the edge when Internet reachability is required.",
    diagnosticSignals: [
      "Marks 10.x/172.16–31.x/192.168.x as inherently misconfigured",
      "Ignores DHCP/static assignment faults inside a private LAN",
    ],
    remediationActivityIds: ["rem-v20-ipv4-public-private-triage"],
    relatedAtomicIds: [
      "alo-ccna-v2.0-1.3",
      "alo-ccna-v2.0-1.3-public-private",
    ],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-eui64-always-required",
    statement: "Every IPv6 address must use modified EUI-64.",
    whyItAppears:
      "Exam objectives name modified EUI-64, so learners treat it as the only assignment method.",
    correction:
      "Modified EUI-64 is one interface-ID method for unicast; troubleshoot configuration/assignment/prefix sizing without assuming EUI-64 is mandatory for every host.",
    diagnosticSignals: [
      "Rejects manually configured interface IDs as invalid",
      "Ignores prefix-length errors when EUI-64 looks 'correct'",
    ],
    remediationActivityIds: ["rem-v20-ipv6-prefix-eui64"],
    relatedAtomicIds: ["alo-ccna-v2.0-1.4", "alo-ccna-v2.0-1.4-eui64"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-dhcp-relay-optional-everywhere",
    statement: "DHCP relay is optional whenever a client and server are in different subnets.",
    whyItAppears:
      "Learners see DHCP as a 'server setting' and forget broadcasts do not cross L3 boundaries.",
    correction:
      "When client and server are separated by a router, DHCPv4 relay (or an equivalent helper) is required for discovery/offer to succeed — troubleshoot client, server, and relay together.",
    diagnosticSignals: [
      "Looks only at client ipconfig when server is remote",
      "Never checks ip helper-address / relay config",
    ],
    remediationActivityIds: ["rem-v20-dhcp-relay-path"],
    relatedAtomicIds: ["alo-ccna-v2.0-1.7", "alo-ccna-v2.0-1.7-relay"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-ping-success-means-l2-healthy",
    statement: "If ping succeeds, Layer 2 and Layer 3 are fully healthy.",
    whyItAppears:
      "Ping is treated as a complete network health certificate.",
    correction:
      "Ping proves basic reachability for that probe; v2.0 2.4 still requires correlating show commands, logs, traceroute, and packet capture for device/path faults.",
    diagnosticSignals: [
      "Stops troubleshooting after one successful ping",
      "Ignores asymmetric paths or intermittent interface errors",
    ],
    remediationActivityIds: ["rem-v20-l2l3-evidence-ladder"],
    relatedAtomicIds: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-evidence"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-bpdu-filter-still-required",
    statement: "Rapid PVST+ configuration always includes BPDU filter as in older CCNA lists.",
    whyItAppears:
      "v1.1 2.5.d listed BPDU filter; learners carry it into v2.0 unchanged.",
    correction:
      "Official v2.0 2.5.d lists root guard, loop guard, and BPDU guard — not BPDU filter. Do not invent BPDU filter as a v2.0 parent requirement.",
    diagnosticSignals: [
      "Adds BPDU filter to v2.0 lab checklists without source",
    ],
    remediationActivityIds: ["rem-v20-stp-guard-scope"],
    relatedAtomicIds: ["alo-ccna-v2.0-2.5", "alo-ccna-v2.0-2.5-guards"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-static-float-always-wins",
    statement: "A floating static route is preferred whenever it is configured.",
    whyItAppears:
      "Learners remember 'backup route' but forget administrative distance.",
    correction:
      "A floating static only takes over when its AD is worse (higher) than the primary and the primary is withdrawn — troubleshoot AD and next-hop reachability.",
    diagnosticSignals: [
      "Expects floating static to appear in the table beside the primary",
    ],
    remediationActivityIds: ["rem-v20-floating-static-ad"],
    relatedAtomicIds: ["alo-ccna-v2.0-3.2", "alo-ccna-v2.0-3.2-floating"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-ospfv3-same-as-v2-commands",
    statement: "OSPFv3 for IPv6 uses the same interface addressing model as OSPFv2.",
    whyItAppears:
      "Learners assume 'OSPF is OSPF' across address families.",
    correction:
      "v2.0 explicitly requires OSPFv2 for IPv4 and OSPFv3 for IPv6 (single area). Treat address-family and neighbor formation separately; authentication is out of scope per the objective.",
    diagnosticSignals: [
      "Applies IPv4 network statements thinking they enable IPv6 OSPF",
    ],
    remediationActivityIds: ["rem-v20-ospfv2-vs-v3"],
    relatedAtomicIds: ["alo-ccna-v2.0-3.3", "alo-ccna-v2.0-3.3-ospfv3"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
  {
    id: "misc-v20-ai-prompt-no-structure",
    statement: "Any natural-language question is a good generative-AI prompt for network ops.",
    whyItAppears:
      "Chat habits transfer into exam-style AI assistance tasks.",
    correction:
      "v2.0 5.2 requires selecting prompts that consider data classification, output format, persona, and instructions — unstructured chat is not sufficient.",
    diagnosticSignals: [
      "Chooses prompts that paste secrets without classification care",
      "Omits output format / persona constraints",
    ],
    remediationActivityIds: ["rem-v20-prompt-components"],
    relatedAtomicIds: ["alo-ccna-v2.0-5.2", "alo-ccna-v2.0-5.2-components"],
    sourceIds: ["src-cisco-ccna-200-301-v2.0"],
  },
];

export const CCNA_V20_BATCH1_REMEDIATIONS: RemediationActivity[] = [
  {
    id: "rem-v20-ipv4-public-private-triage",
    title: "Public vs private IPv4 triage",
    kind: "worked-example",
    instructions:
      "Given three hosts (private LAN, mis-subnetted private, public WAN), identify which faults are addressing/subnetting vs expected private use.",
    targetMisconceptionIds: ["misc-v20-ipv4-private-always-unusable"],
    atomicObjectiveIds: ["alo-ccna-v2.0-1.3", "alo-ccna-v2.0-1.3-public-private"],
    estimatedMinutes: 12,
  },
  {
    id: "rem-v20-ipv6-prefix-eui64",
    title: "IPv6 prefix vs EUI-64 checklist",
    kind: "drill",
    instructions:
      "For each scenario, mark whether the fault is prefix length, interface ID method, or unicast type — only one primary fault.",
    targetMisconceptionIds: ["misc-v20-eui64-always-required"],
    atomicObjectiveIds: ["alo-ccna-v2.0-1.4", "alo-ccna-v2.0-1.4-eui64"],
    estimatedMinutes: 12,
  },
  {
    id: "rem-v20-dhcp-relay-path",
    title: "DHCP client → relay → server path",
    kind: "lab",
    instructions:
      "Trace DHCPv4 discovery across a router hop. Verify relay/helper, then client, then server pools — in that order when subnets differ.",
    targetMisconceptionIds: ["misc-v20-dhcp-relay-optional-everywhere"],
    atomicObjectiveIds: ["alo-ccna-v2.0-1.7", "alo-ccna-v2.0-1.7-relay"],
    estimatedMinutes: 15,
  },
  {
    id: "rem-v20-l2l3-evidence-ladder",
    title: "L2/L3 evidence ladder",
    kind: "worked-example",
    instructions:
      "For one fault ticket, collect show interface/logs, ping/extended ping, traceroute, and a capture note. Rank which evidence ruled the fault in/out.",
    targetMisconceptionIds: ["misc-v20-ping-success-means-l2-healthy"],
    atomicObjectiveIds: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-evidence"],
    estimatedMinutes: 15,
  },
  {
    id: "rem-v20-stp-guard-scope",
    title: "v2.0 STP guard scope",
    kind: "re-teach",
    instructions:
      "List v2.0 2.5.d features from the official PDF only. Cross out any v1.1-only items (e.g., BPDU filter) from your personal checklist.",
    targetMisconceptionIds: ["misc-v20-bpdu-filter-still-required"],
    atomicObjectiveIds: ["alo-ccna-v2.0-2.5", "alo-ccna-v2.0-2.5-guards"],
    estimatedMinutes: 8,
  },
  {
    id: "rem-v20-floating-static-ad",
    title: "Floating static AD lab",
    kind: "drill",
    instructions:
      "Configure primary and floating static with distinct ADs. Withdraw the primary next-hop and verify which route installs — then restore.",
    targetMisconceptionIds: ["misc-v20-static-float-always-wins"],
    atomicObjectiveIds: ["alo-ccna-v2.0-3.2", "alo-ccna-v2.0-3.2-floating"],
    estimatedMinutes: 12,
  },
  {
    id: "rem-v20-ospfv2-vs-v3",
    title: "OSPFv2 vs OSPFv3 neighbor checklist",
    kind: "worked-example",
    instructions:
      "Side-by-side: enable single-area OSPFv2 on IPv4 and OSPFv3 on IPv6. Confirm neighbors without configuring authentication (out of scope).",
    targetMisconceptionIds: ["misc-v20-ospfv3-same-as-v2-commands"],
    atomicObjectiveIds: ["alo-ccna-v2.0-3.3", "alo-ccna-v2.0-3.3-ospfv3"],
    estimatedMinutes: 15,
  },
  {
    id: "rem-v20-prompt-components",
    title: "Prompt component cards",
    kind: "drill",
    instructions:
      "Rewrite a weak ops question into a prompt that states data classification, output format, persona, and instructions. Reject prompts that leak secrets.",
    targetMisconceptionIds: ["misc-v20-ai-prompt-no-structure"],
    atomicObjectiveIds: ["alo-ccna-v2.0-5.2", "alo-ccna-v2.0-5.2-components"],
    estimatedMinutes: 10,
  },
];
