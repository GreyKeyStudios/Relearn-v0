/**
 * Objective production units for CCNA v2.0 batch-1 (specifications).
 * Prefer complete specs over mass-generated prose; no live Path A rewrites.
 */

import { ccnaV20ObjectiveId } from "../../objectives/ccna-200-301-v2.0";
import type { ObjectiveProductionUnit, PrereqEdge } from "../../types";
import { CCNA_V20_BATCH1_SELECTION } from "./selection";
import {
  lessonSpec,
  masteryEvidence,
  mcq,
  parentAtomic,
  teachingAtomic,
} from "./helpers";

function sel(number: string) {
  const row = CCNA_V20_BATCH1_SELECTION.find((s) => s.officialNumber === number);
  if (!row) throw new Error(`Missing selection row ${number}`);
  return row;
}

function edge(
  id: string,
  fromId: string,
  toId: string,
  rationale: string
): PrereqEdge {
  return {
    id,
    from: { kind: "atomic", id: fromId },
    to: { kind: "atomic", id: toId },
    strength: "required",
    rationale,
  };
}

const remainingCommon = [
  "Implement simulator (currently spec-only)",
  "Author LES/CES live topic elevation without renaming pilot progress keys",
  "Michael/owner walkthrough per definition-of-done",
  "Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)",
];

export const CCNA_V20_BATCH1_UNITS: ObjectiveProductionUnit[] = [
  // ── 2.4 newly added ───────────────────────────────────────────────────
  (() => {
    const s = sel("2.4");
    const atomics = [
      parentAtomic({
        number: "2.4",
        statement:
          "Troubleshoot basic Layer 2/Layer 3 connectivity and device operations using show commands (including show logs), ping, extended ping, traceroute, and packet capture output",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "2.4",
        suffix: "tools",
        statement:
          "Select an appropriate evidence tool (show/logs, ping/extended ping, traceroute, or capture) for a stated L2/L3 symptom",
        verb: "compare",
      }),
      teachingAtomic({
        number: "2.4",
        suffix: "evidence",
        statement:
          "Correlate at least two independent evidence sources before declaring an L2/L3 root cause",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-tools"],
      }),
    ];
    const misc = ["misc-v20-ping-success-means-l2-healthy"];
    const rem = ["rem-v20-l2l3-evidence-ladder"];
    const sims = ["simspec-ccna-v20-l2l3-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("2.4"),
      officialNumber: "2.4",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "newly added",
      pathwayClassification: "version-specific",
      relatedV11ObjectiveIds: [],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-2.4-tools",
          "alo-ccna-v2.0-2.4",
          "alo-ccna-v2.0-2.4-tools",
          "Tool selection supports the parent troubleshoot objective"
        ),
        edge(
          "pre-v20-2.4-evidence",
          "alo-ccna-v2.0-2.4-tools",
          "alo-ccna-v2.0-2.4-evidence",
          "Evidence correlation builds on tool selection"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "2.4",
        title: "Troubleshoot L2/L3 connectivity with show, ping, traceroute, and capture",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "When the network 'feels broken,' you gather clues the way a detective would — not by guessing cables at random.",
          practical:
            "Start with interface status and logs, prove reachability with ping/extended ping, map the path with traceroute, and use packet capture when headers/payloads disagree with your theory.",
          technical:
            "Official v2.0 2.4 scopes troubleshooting to show commands (including show logs), ping, extended ping, traceroute, and packet capture output for basic L2/L3 connectivity and device operations.",
        },
        quiz: [
          mcq({
            id: "q-v20-2.4-01",
            prompt:
              "Ping to a remote host succeeds, but users still report an application failure. Which action best matches v2.0 2.4 depth?",
            choices: [
              "Declare Layer 2/3 healthy and stop",
              "Correlate traceroute/path and relevant show/log or capture evidence before concluding",
              "Only reboot the access switch",
              "Replace the default route immediately",
            ],
            correctIndex: 1,
            explanation:
              "A single successful ping is insufficient; v2.0 2.4 expects multi-tool evidence for connectivity/device operation faults.",
            examNumber: "2.4",
            atomicIds: ["alo-ccna-v2.0-2.4-evidence"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-2.4-02",
            prompt:
              "Which evidence set is explicitly in scope for official v2.0 objective 2.4?",
            choices: [
              "SNMP polling thresholds only",
              "Show commands/logs, ping/extended ping, traceroute, and packet capture output",
              "NetFlow licensing only",
              "Wireless controller GUI QoS profiles only",
            ],
            correctIndex: 1,
            explanation:
              "The official parent line names those tools specifically.",
            examNumber: "2.4",
            atomicIds: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-tools"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-2.4-pre",
            purpose: "pretest",
            prompt:
              "List the evidence tools named in CCNA v2.0 objective 2.4.",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.4-tools"],
            scoringNote: "Credit only tools present in the official line.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-2.4-tools",
            front: "v2.0 2.4 evidence tools?",
            back: "show (incl. logs), ping/extended ping, traceroute, packet capture output",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.4-tools"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        cognitiveLoad: "high",
        minutes: 45,
      }),
      quizSpecIds: ["q-v20-2.4-01", "q-v20-2.4-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "No v1.1 one-to-one counterpart — do not auto-credit from older topics",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 1.3 IPv4 troubleshoot ─────────────────────────────────────────────
  (() => {
    const s = sel("1.3");
    const atomics = [
      parentAtomic({
        number: "1.3",
        statement:
          "Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private)",
        verb: "diagnose",
        prereqs: ["alo-ccna-subnetting"],
      }),
      teachingAtomic({
        number: "1.3",
        suffix: "public-private",
        statement:
          "Distinguish public vs private IPv4 addressing faults during troubleshooting",
        verb: "compare",
      }),
      teachingAtomic({
        number: "1.3",
        suffix: "assignment",
        statement:
          "Diagnose IPv4 configuration/assignment errors (mask, gateway, duplicate) using host/device evidence",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-1.3", "alo-ccna-v2.0-1.3-public-private"],
      }),
    ];
    const misc = ["misc-v20-ipv4-private-always-unusable"];
    const rem = ["rem-v20-ipv4-public-private-triage"];
    const sims = ["simspec-ccna-v20-ipv4-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("1.3"),
      officialNumber: "1.3",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-ipv4-addressing",
      relatedV11ObjectiveIds: [
        "200-301-v1.1/1.6",
        "200-301-v1.1/1.7",
      ],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-1.3-from-subnet",
          "alo-ccna-subnetting",
          "alo-ccna-v2.0-1.3",
          "Subnet math supports troubleshoot depth (shared-core; associations stay version-specific)"
        ),
        edge(
          "pre-v20-1.3-assign",
          "alo-ccna-v2.0-1.3-public-private",
          "alo-ccna-v2.0-1.3-assignment",
          "Public/private context before assignment diagnosis"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "1.3",
        title: "Troubleshoot IPv4 addressing, assignment, and subnetting",
        liveTopicId: "subnetting",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "An address that 'looks right' can still be wrong for its network — troubleshooting asks why a host cannot talk, not only how to calculate a subnet.",
          practical:
            "Compare configured IP/mask/gateway to the designed subnet; decide whether the address should be public or private for that segment; fix assignment errors before blaming routing.",
          technical:
            "v2.0 1.3 elevates v1.1 configure/verify IPv4 addressing into troubleshoot of configuration, assignment, and subnetting for public and private space.",
          mathematical:
            "Use prefix length to compute network/broadcast/usable ranges, then verify the host address and gateway fall in the intended subnet.",
        },
        quiz: [
          mcq({
            id: "q-v20-1.3-01",
            prompt:
              "A host uses 192.168.10.50/24 but its gateway is 192.168.11.1. What is the most likely IPv4 fault class?",
            choices: [
              "Private addresses are illegal",
              "Subnet/gateway assignment mismatch",
              "Missing OSPFv3 process",
              "BPDU guard misconfiguration",
            ],
            correctIndex: 1,
            explanation:
              "Gateway is outside the /24 subnet — an assignment/subnetting troubleshoot case, not a private-address ban.",
            examNumber: "1.3",
            atomicIds: ["alo-ccna-v2.0-1.3-assignment"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-1.3-02",
            prompt:
              "How does official v2.0 1.3 differ most clearly from typical v1.1 configure/verify IPv4 wording?",
            choices: [
              "It removes private addressing entirely",
              "It emphasizes troubleshoot of configuration/assignment/subnetting (public and private)",
              "It requires BGP",
              "It only covers IPv6",
            ],
            correctIndex: 1,
            explanation:
              "Transition classification is greater practical depth toward troubleshoot.",
            examNumber: "1.3",
            atomicIds: ["alo-ccna-v2.0-1.3"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-1.3-form",
            purpose: "formative",
            prompt:
              "Given ipconfig output, name the primary IPv4 fault (mask, gateway, duplicate, or public/private context).",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.3-assignment"],
          },
        ],
        flashcards: [
          {
            id: "fc-v20-1.3-verb",
            front: "v2.0 1.3 primary verb?",
            back: "Troubleshoot (configuration, assignment, subnetting — public and private)",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.3"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        minutes: 40,
      }),
      quizSpecIds: ["q-v20-1.3-01", "q-v20-1.3-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "Elevate beyond live subnet-cidr-drill calculation coverage",
        "Dual-tag associations: v1.1 1.6/1.7 vs v2.0 1.3 separately if sharing lesson body",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 1.4 IPv6 troubleshoot ─────────────────────────────────────────────
  (() => {
    const s = sel("1.4");
    const atomics = [
      parentAtomic({
        number: "1.4",
        statement:
          "Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64)",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "1.4",
        suffix: "prefix",
        statement: "Diagnose IPv6 prefix-sizing errors that break subnet placement",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "1.4",
        suffix: "eui64",
        statement:
          "Troubleshoot modified EUI-64 interface-ID issues without treating EUI-64 as mandatory for every host",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-1.4", "alo-ccna-v2.0-1.4-prefix"],
      }),
    ];
    const misc = ["misc-v20-eui64-always-required"];
    const rem = ["rem-v20-ipv6-prefix-eui64"];
    const sims = ["simspec-ccna-v20-ipv6-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("1.4"),
      officialNumber: "1.4",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-ipv6-addressing",
      relatedV11ObjectiveIds: ["200-301-v1.1/1.8", "200-301-v1.1/1.9"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-1.4-eui",
          "alo-ccna-v2.0-1.4-prefix",
          "alo-ccna-v2.0-1.4-eui64",
          "Prefix sizing before EUI-64 interface-ID diagnosis"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "1.4",
        title: "Troubleshoot IPv6 addressing, prefix sizing, and EUI-64",
        liveTopicId: "ipv6-basics",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "IPv6 problems often hide in the prefix length — the 'neighborhood' — not only in the long address string.",
          practical:
            "Check unicast configuration/assignment, confirm prefix sizing, then inspect modified EUI-64 interface IDs when that method is in use.",
          technical:
            "Official v2.0 1.4 focuses troubleshoot on unicast and modified EUI-64; do not invent anycast/multicast catalog requirements from v1.1 into this parent.",
        },
        quiz: [
          mcq({
            id: "q-v20-1.4-01",
            prompt:
              "An interface has a plausible modified EUI-64 interface ID but the wrong prefix length for its LAN. What should you troubleshoot first for v2.0 1.4?",
            choices: [
              "Only the EUI-64 MAC encoding",
              "Prefix sizing / subnet placement, then re-check assignment",
              "OSPFv2 area type",
              "WPA3 passphrase",
            ],
            correctIndex: 1,
            explanation:
              "Prefix sizing is explicitly in the official troubleshoot scope.",
            examNumber: "1.4",
            atomicIds: ["alo-ccna-v2.0-1.4-prefix"],
          }),
          mcq({
            id: "q-v20-1.4-02",
            prompt: "Which claim is unsafe for official v2.0 1.4?",
            choices: [
              "Troubleshoot unicast assignment",
              "Every IPv6 address must use modified EUI-64",
              "Prefix sizing can break connectivity",
              "Configuration errors can be diagnosed from interface state",
            ],
            correctIndex: 1,
            explanation:
              "EUI-64 is in scope as a method to troubleshoot, not as a universal mandate.",
            examNumber: "1.4",
            atomicIds: ["alo-ccna-v2.0-1.4-eui64"],
            misconceptionIds: misc,
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-1.4-pre",
            purpose: "pretest",
            prompt: "Name two IPv6 elements called out in v2.0 1.4.",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.4"],
            scoringNote: "Expect unicast and modified EUI-64 / prefix sizing themes.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-1.4-scope",
            front: "v2.0 1.4 named IPv6 focus?",
            back: "Troubleshoot configuration/assignment/prefix sizing (unicast and modified EUI-64)",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.4"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
      }),
      quizSpecIds: ["q-v20-1.4-01", "q-v20-1.4-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "No live IPv6 troubleshoot simulator yet — implement simspec-ccna-v20-ipv6-troubleshoot",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 1.7 DHCP troubleshoot ─────────────────────────────────────────────
  (() => {
    const s = sel("1.7");
    const atomics = [
      parentAtomic({
        number: "1.7",
        statement:
          "Troubleshoot DHCPv4 client, server, and relay on IOS devices",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "1.7",
        suffix: "server",
        statement: "Diagnose DHCPv4 server-pool and IOS server-role faults",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "1.7",
        suffix: "relay",
        statement:
          "Troubleshoot DHCPv4 relay/helper behavior when client and server are on different subnets",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-1.7", "alo-ccna-v2.0-1.7-server"],
      }),
    ];
    const misc = ["misc-v20-dhcp-relay-optional-everywhere"];
    const rem = ["rem-v20-dhcp-relay-path"];
    const sims = ["simspec-ccna-v20-dhcpv4-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("1.7"),
      officialNumber: "1.7",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-services-security",
      relatedV11ObjectiveIds: ["200-301-v1.1/4.3", "200-301-v1.1/4.6"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-1.7-relay",
          "alo-ccna-v2.0-1.7-server",
          "alo-ccna-v2.0-1.7-relay",
          "Server-role literacy before relay-path diagnosis"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "1.7",
        title: "Troubleshoot DHCPv4 client, server, and relay on IOS",
        liveTopicId: "dhcp",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "DHCP is a conversation with three seats — client, server, and sometimes a relay messenger across networks.",
          practical:
            "When a host fails to lease an address, isolate whether the client, the IOS server pool, or the relay/helper path is at fault.",
          technical:
            "v2.0 1.7 requires troubleshoot of DHCPv4 client, server, and relay on IOS devices — deeper than role-only or client/relay configure wording in v1.1.",
        },
        quiz: [
          mcq({
            id: "q-v20-1.7-01",
            prompt:
              "Client and DHCP server are in different VLANs/subnets. Discoveries never leave the client subnet. What should you troubleshoot?",
            choices: [
              "Only DNS AAAA records",
              "DHCPv4 relay/helper path on the IOS hop between subnets",
              "OSPFv3 RID only",
              "PortFast on all trunks",
            ],
            correctIndex: 1,
            explanation:
              "Relay is in the official v2.0 1.7 scope when client/server are separated by L3.",
            examNumber: "1.7",
            atomicIds: ["alo-ccna-v2.0-1.7-relay"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-1.7-02",
            prompt: "Official v2.0 1.7 includes which DHCP roles?",
            choices: [
              "Client only",
              "Server only",
              "Client, server, and relay on IOS devices",
              "Relay only for IPv6",
            ],
            correctIndex: 2,
            explanation: "The parent line names client, server, and relay.",
            examNumber: "1.7",
            atomicIds: ["alo-ccna-v2.0-1.7"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-1.7-form",
            purpose: "formative",
            prompt:
              "Order your checks for a no-lease ticket across different subnets.",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.7-relay"],
          },
        ],
        flashcards: [
          {
            id: "fc-v20-1.7-roles",
            front: "v2.0 1.7 DHCP roles?",
            back: "Troubleshoot DHCPv4 client, server, and relay on IOS",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.7"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
      }),
      quizSpecIds: ["q-v20-1.7-01", "q-v20-1.7-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "Live dhcp topic is configure-leaning — elevate to troubleshoot depth without remapping progress keys",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 2.5 STP configure ─────────────────────────────────────────────────
  (() => {
    const s = sel("2.5");
    const atomics = [
      parentAtomic({
        number: "2.5",
        statement:
          "Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+)",
        verb: "configure",
      }),
      teachingAtomic({
        number: "2.5",
        suffix: "root",
        statement:
          "Configure Rapid PVST+ root bridge (primary/secondary), root port, and related port names/roles",
        verb: "configure",
      }),
      teachingAtomic({
        number: "2.5",
        suffix: "guards",
        statement:
          "Configure PortFast plus root guard, loop guard, and BPDU guard as listed in v2.0 2.5",
        verb: "configure",
        prereqs: ["alo-ccna-v2.0-2.5", "alo-ccna-v2.0-2.5-root"],
      }),
    ];
    const misc = ["misc-v20-bpdu-filter-still-required"];
    const rem = ["rem-v20-stp-guard-scope"];
    const sims = ["simspec-ccna-v20-stp-configure"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("2.5"),
      officialNumber: "2.5",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-switching-access",
      relatedV11ObjectiveIds: ["200-301-v1.1/2.5"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-2.5-guards",
          "alo-ccna-v2.0-2.5-root",
          "alo-ccna-v2.0-2.5-guards",
          "Root/role literacy before guard features"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "2.5",
        title: "Configure Rapid PVST+ operations",
        liveTopicId: "stp",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "Spanning Tree keeps redundant Ethernet links from looping — configuration means you deliberately place the root and protect edge ports.",
          practical:
            "Set primary/secondary root, verify port roles/states, enable PortFast where appropriate, and apply root/loop/BPDU guard per the v2.0 list.",
          technical:
            "v2.0 shifts from interpret to configure Rapid PVST+. Sub-bullet 2.5.d lists root guard, loop guard, and BPDU guard — not BPDU filter.",
        },
        quiz: [
          mcq({
            id: "q-v20-2.5-01",
            prompt:
              "Which feature set matches official v2.0 Rapid PVST+ 2.5.d?",
            choices: [
              "Root guard, loop guard, and BPDU guard",
              "BPDU filter only",
              "HSRP and VRRP",
              "NAT/PAT pools",
            ],
            correctIndex: 0,
            explanation:
              "v2.0 2.5.d names those three guards; BPDU filter is not listed.",
            examNumber: "2.5",
            atomicIds: ["alo-ccna-v2.0-2.5-guards"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-2.5-02",
            prompt:
              "Compared with v1.1 interpret wording, v2.0 2.5 primarily asks you to…",
            choices: [
              "Configure Rapid PVST+ operations",
              "Describe wireless AP modes",
              "Explain JSON tokens",
              "Select generative-AI prompts",
            ],
            correctIndex: 0,
            explanation: "Greater practical depth: configure vs interpret.",
            examNumber: "2.5",
            atomicIds: ["alo-ccna-v2.0-2.5"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-2.5-pre",
            purpose: "pretest",
            prompt: "Is BPDU filter required by official v2.0 2.5.d?",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.5-guards"],
            scoringNote: "Correct answer: no.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-2.5-guards",
            front: "v2.0 2.5.d guards?",
            back: "Root guard, loop guard, BPDU guard (not BPDU filter)",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.5-guards"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
      }),
      quizSpecIds: ["q-v20-2.5-01", "q-v20-2.5-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "Audit any live STP content that still teaches BPDU filter as required for v2.0",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 3.2 static troubleshoot ───────────────────────────────────────────
  (() => {
    const s = sel("3.2");
    const atomics = [
      parentAtomic({
        number: "3.2",
        statement: "Troubleshoot IPv4 and IPv6 static routing",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "3.2",
        suffix: "types",
        statement:
          "Troubleshoot default, network, host, and floating static route types on IPv4/IPv6",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "3.2",
        suffix: "floating",
        statement:
          "Diagnose floating static behavior using administrative distance and primary-route withdrawal",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-3.2", "alo-ccna-v2.0-3.2-types"],
      }),
    ];
    const misc = ["misc-v20-static-float-always-wins"];
    const rem = ["rem-v20-floating-static-ad"];
    const sims = ["simspec-ccna-v20-static-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("3.2"),
      officialNumber: "3.2",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-routing",
      relatedV11ObjectiveIds: ["200-301-v1.1/3.3"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-3.2-float",
          "alo-ccna-v2.0-3.2-types",
          "alo-ccna-v2.0-3.2-floating",
          "Route-type literacy before floating-static AD diagnosis"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "3.2",
        title: "Troubleshoot IPv4/IPv6 static routing",
        liveTopicId: "static-routes",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "A static route is a handwritten direction — troubleshooting asks why the router is not using the directions you think you wrote.",
          practical:
            "Verify route type (default/network/host/floating), next-hop reachability, and administrative distance when backups fail to install.",
          technical:
            "v2.0 3.2 moves from configure/verify static routing to troubleshoot for IPv4 and IPv6 with the same route-type sub-bullets.",
        },
        quiz: [
          mcq({
            id: "q-v20-3.2-01",
            prompt:
              "A floating static never appears while the primary static is present. What is the expected explanation?",
            choices: [
              "Floating statics always display beside primaries",
              "Higher AD keeps the floating route out until the primary is withdrawn",
              "Floating statics only work for IPv6",
              "NAT replaces static routing",
            ],
            correctIndex: 1,
            explanation:
              "Floating statics intentionally lose on AD until the primary is gone.",
            examNumber: "3.2",
            atomicIds: ["alo-ccna-v2.0-3.2-floating"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-3.2-02",
            prompt: "Which route types are called out under v2.0 3.2?",
            choices: [
              "Default, network, host, floating static",
              "Only OSPF externals",
              "Only BGP aggregates",
              "Only DHCP option 121",
            ],
            correctIndex: 0,
            explanation: "Official sub-bullets 3.2.a–d list those types.",
            examNumber: "3.2",
            atomicIds: ["alo-ccna-v2.0-3.2-types"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-3.2-form",
            purpose: "formative",
            prompt:
              "From a routing table excerpt, identify which static type failed and why.",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.2-types"],
          },
        ],
        flashcards: [
          {
            id: "fc-v20-3.2-types",
            front: "v2.0 3.2 static types?",
            back: "Default, network, host, floating",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.2-types"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
      }),
      quizSpecIds: ["q-v20-3.2-01", "q-v20-3.2-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: remainingCommon,
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 3.3 OSPFv2 + OSPFv3 expanded ──────────────────────────────────────
  (() => {
    const s = sel("3.3");
    const atomics = [
      parentAtomic({
        number: "3.3",
        statement:
          "Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6",
        verb: "configure",
      }),
      teachingAtomic({
        number: "3.3",
        suffix: "ospfv3",
        statement: "Configure single-area OSPFv3 for IPv6 neighbor formation",
        verb: "configure",
      }),
      teachingAtomic({
        number: "3.3",
        suffix: "adjacency",
        statement:
          "Configure/verify OSPF neighbor adjacencies for point-to-point and broadcast (DR/BDR), including router ID — excluding authentication",
        verb: "configure",
        prereqs: ["alo-ccna-v2.0-3.3", "alo-ccna-v2.0-3.3-ospfv3"],
      }),
    ];
    const misc = ["misc-v20-ospfv3-same-as-v2-commands"];
    const rem = ["rem-v20-ospfv2-vs-v3"];
    const sims = ["simspec-ccna-v20-ospfv3"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("3.3"),
      officialNumber: "3.3",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "expanded",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-routing",
      relatedV11ObjectiveIds: ["200-301-v1.1/3.4"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-3.3-adj",
          "alo-ccna-v2.0-3.3-ospfv3",
          "alo-ccna-v2.0-3.3-adjacency",
          "OSPFv3 enablement before adjacency/network-type detail"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "3.3",
        title: "Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6)",
        liveTopicId: "ospf-basics",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "OSPF neighbors must agree they are in the same club — for IPv4 (OSPFv2) and IPv6 (OSPFv3) separately in this exam version.",
          practical:
            "Enable single-area OSPFv2 on IPv4 and OSPFv3 on IPv6; verify adjacencies, RID, and network types without configuring authentication.",
          technical:
            "v2.0 expands beyond OSPFv2-only. Neighbor adjacencies explicitly exclude authentication. Broadcast includes DR/BDR selection.",
        },
        quiz: [
          mcq({
            id: "q-v20-3.3-01",
            prompt: "Official v2.0 3.3 requires which OSPF coverage?",
            choices: [
              "OSPFv2 for IPv4 only",
              "OSPFv2 for IPv4 and OSPFv3 for IPv6 (single area)",
              "Multi-area OSPF with authentication",
              "IS-IS only",
            ],
            correctIndex: 1,
            explanation: "Expansion vs v1.1 OSPFv2-only wording.",
            examNumber: "3.3",
            atomicIds: ["alo-ccna-v2.0-3.3", "alo-ccna-v2.0-3.3-ospfv3"],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-3.3-02",
            prompt:
              "Per official v2.0 3.3.a, which topic is excluded from neighbor adjacency scope?",
            choices: [
              "Router ID",
              "Authentication",
              "Point-to-point",
              "Broadcast DR/BDR",
            ],
            correctIndex: 1,
            explanation:
              "The official line says neighbor adjacencies excluding authentication.",
            examNumber: "3.3",
            atomicIds: ["alo-ccna-v2.0-3.3-adjacency"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-3.3-pre",
            purpose: "pretest",
            prompt: "Does v2.0 3.3 include OSPFv3 for IPv6?",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.3-ospfv3"],
            scoringNote: "Yes.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-3.3-expand",
            front: "v2.0 OSPF expansion vs typical v1.1 OSPFv2-only?",
            back: "Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6); auth excluded",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.3"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        cognitiveLoad: "high",
        minutes: 45,
      }),
      quizSpecIds: ["q-v20-3.3-01", "q-v20-3.3-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "Live ospf-basics is OSPFv2-leaning — add OSPFv3 labs without inventing authentication tasks",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 5.2 generative AI prompts ─────────────────────────────────────────
  (() => {
    const s = sel("5.2");
    const atomics = [
      parentAtomic({
        number: "5.2",
        statement:
          "Select a prompt to send to a generative AI system to support network operations considering prompt components such as data classification, output format, persona, and instructions",
        verb: "compare",
      }),
      teachingAtomic({
        number: "5.2",
        suffix: "components",
        statement:
          "Identify prompt components: data classification, output format, persona, and instructions",
        verb: "recognize",
      }),
      teachingAtomic({
        number: "5.2",
        suffix: "safe",
        statement:
          "Reject prompts that mishandle sensitive network data classification for ops assistance",
        verb: "compare",
        prereqs: ["alo-ccna-v2.0-5.2", "alo-ccna-v2.0-5.2-components"],
      }),
    ];
    const misc = ["misc-v20-ai-prompt-no-structure"];
    const rem = ["rem-v20-prompt-components"];
    const sims = ["simspec-ccna-v20-ai-prompts"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("5.2"),
      officialNumber: "5.2",
      officialText: atomics[0].statement,
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "expanded",
      pathwayClassification: "version-specific",
      relatedV11ObjectiveIds: ["200-301-v1.1/6.4"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        edge(
          "pre-v20-5.2-safe",
          "alo-ccna-v2.0-5.2-components",
          "alo-ccna-v2.0-5.2-safe",
          "Component literacy before safe prompt selection"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "5.2",
        title: "Select generative-AI prompts for network operations",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "Asking an AI for network help works better when you say who it should act as, what it may see, and how it should answer.",
          practical:
            "When choosing among prompts, prefer those that state data classification, output format, persona, and clear instructions — and avoid dumping secrets casually.",
          technical:
            "Official v2.0 5.2 is a select/compare skill on prompt components for generative AI supporting network operations. Associations are v2.0-specific (not shared-core).",
        },
        quiz: [
          mcq({
            id: "q-v20-5.2-01",
            prompt:
              "Which prompt best matches official v2.0 5.2 component expectations?",
            choices: [
              "fix my network",
              "As a network ops assistant, using only non-secret interface counters (internal), output a three-bullet root-cause hypothesis in markdown.",
              "Paste the full enable secret and ask for ideas",
              "Ignore classification and ask for any config",
            ],
            correctIndex: 1,
            explanation:
              "It includes persona, data classification boundary, output format, and instructions.",
            examNumber: "5.2",
            atomicIds: [
              "alo-ccna-v2.0-5.2",
              "alo-ccna-v2.0-5.2-components",
              "alo-ccna-v2.0-5.2-safe",
            ],
            misconceptionIds: misc,
          }),
          mcq({
            id: "q-v20-5.2-02",
            prompt:
              "Which component set is named in official v2.0 objective 5.2?",
            choices: [
              "Data classification, output format, persona, and instructions",
              "Only temperature and top-k",
              "Only BGP communities",
              "Only syslog facilities",
            ],
            correctIndex: 0,
            explanation: "Those four components are explicit in the parent line.",
            examNumber: "5.2",
            atomicIds: ["alo-ccna-v2.0-5.2-components"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-5.2-pre",
            purpose: "placement",
            prompt: "List the four prompt components named in v2.0 5.2.",
            atomicObjectiveIds: ["alo-ccna-v2.0-5.2-components"],
          },
        ],
        flashcards: [
          {
            id: "fc-v20-5.2-components",
            front: "v2.0 5.2 prompt components?",
            back: "Data classification, output format, persona, instructions",
            atomicObjectiveIds: ["alo-ccna-v2.0-5.2-components"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        minutes: 30,
      }),
      quizSpecIds: ["q-v20-5.2-01", "q-v20-5.2-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "No live AI topic yet — create version-specific pathway (do not force into v1.1 automation topic)",
        "Safety review for prompt scenarios (no secret leakage in examples)",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),
];
