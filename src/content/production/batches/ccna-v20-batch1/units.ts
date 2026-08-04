/**
 * Objective production units for CCNA v2.0 batch-1 (specifications).
 * Prefer complete specs over mass-generated prose; no live Path A rewrites.
 *
 * Adversarial review (PR #34): parent statements/officialText come from the
 * v2.0 registry only; verbs stay at official performance levels.
 */

import { ccnaV20ObjectiveId } from "../../objectives/ccna-200-301-v2.0";
import type { ObjectiveProductionUnit } from "../../types";
import { CCNA_V20_BATCH1_SELECTION } from "./selection";
import {
  atomicEdge,
  lessonSpec,
  liveTopicEdge,
  masteryEvidence,
  mcq,
  officialTextFor,
  parentAtomic,
  teachingAtomic,
} from "./helpers";

function sel(number: string) {
  const row = CCNA_V20_BATCH1_SELECTION.find((s) => s.officialNumber === number);
  if (!row) throw new Error(`Missing selection row ${number}`);
  return row;
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
      parentAtomic({ number: "2.4", verb: "diagnose" }),
      teachingAtomic({
        number: "2.4",
        suffix: "tools",
        statement:
          "Select an appropriate evidence tool (show commands including show logs, ping, extended ping, trace route, or packet capture) for a stated L2/L3 or device-operations symptom",
        verb: "compare",
      }),
      teachingAtomic({
        number: "2.4",
        suffix: "device-ops",
        statement:
          "Troubleshoot basic device operations using show commands including show logs when connectivity probes alone are inconclusive",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-tools"],
      }),
      teachingAtomic({
        number: "2.4",
        suffix: "evidence",
        statement:
          "Correlate at least two independent evidence sources from the official 2.4 tool set before declaring an L2/L3 or device-operations root cause",
        verb: "diagnose",
        prereqs: [
          "alo-ccna-v2.0-2.4",
          "alo-ccna-v2.0-2.4-tools",
          "alo-ccna-v2.0-2.4-device-ops",
        ],
      }),
    ];
    const misc = ["misc-v20-ping-success-means-l2-healthy"];
    const rem = ["rem-v20-l2l3-evidence-ladder"];
    const sims = ["simspec-ccna-v20-l2l3-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("2.4"),
      officialNumber: "2.4",
      officialText: officialTextFor("2.4"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "newly added",
      pathwayClassification: "version-specific",
      relatedV11ObjectiveIds: [],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        atomicEdge(
          "pre-v20-2.4-tools",
          "alo-ccna-v2.0-2.4",
          "alo-ccna-v2.0-2.4-tools",
          "Tool selection supports the parent troubleshoot objective"
        ),
        atomicEdge(
          "pre-v20-2.4-device-ops",
          "alo-ccna-v2.0-2.4-tools",
          "alo-ccna-v2.0-2.4-device-ops",
          "Device-operations show/log diagnosis builds on tool selection"
        ),
        atomicEdge(
          "pre-v20-2.4-evidence",
          "alo-ccna-v2.0-2.4-device-ops",
          "alo-ccna-v2.0-2.4-evidence",
          "Multi-source correlation builds on tool and device-ops literacy"
        ),
      ],
      misconceptionIds: misc,
      remediationIds: rem,
      lessonSpec: lessonSpec({
        number: "2.4",
        title:
          "Troubleshoot L2/L3 connectivity and device operations with show, ping, trace route, and capture",
        atomics: atomics.map((a) => a.id),
        explanations: {
          intuitive:
            "When the network 'feels broken,' you gather clues — interface state, logs, reachability probes, path traces, and captures — instead of guessing cables at random.",
          practical:
            "For a stuck host or flapping device: read interface/status and show logs first, prove reachability with ping/extended ping, map the path with trace route, and open packet capture when headers disagree with your theory. Device-operations faults often surface in logs before pings fail.",
          technical:
            "Official v2.0 2.4 scopes troubleshooting to show commands (including show logs), ping, extended ping, trace route, and packet capture output for basic Layer 2/Layer 3 connectivity and device operations. Do not invent SNMP/NetFlow as required evidence for this parent.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-2.4-primary",
            title: "Failed remote app with successful ping — evidence ladder",
            layer: "practical",
            steps: [
              "Symptom card: users report app failure; a single ping to the server succeeds.",
              "Unlock show interface + show logging excerpts (errors/duplex or repeated interface downs).",
              "Unlock extended ping and trace route panels; note where the path diverges.",
              "Unlock a short packet-capture summary that contradicts 'L2/L3 fully healthy.'",
              "Learner selects root-cause class only after citing ≥2 official evidence sources.",
            ],
            sourceIds: ["src-cisco-ccna-200-301-v2.0"],
          },
        ],
        quiz: [
          mcq({
            id: "q-v20-2.4-01",
            prompt:
              "Ping to a remote host succeeds, but users still report an application failure. Which action best matches v2.0 2.4 depth?",
            choices: [
              "Declare Layer 2/3 healthy and stop",
              "Correlate trace route/path and relevant show/log or capture evidence before concluding",
              "Only reboot the access switch",
              "Replace the default route immediately",
            ],
            correctIndex: 1,
            explanation:
              "A single successful ping is insufficient; v2.0 2.4 expects multi-tool evidence for connectivity and device-operation faults.",
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
              "Show commands (including show logs), ping, extended ping, trace route, and packet capture output",
              "NetFlow licensing only",
              "Wireless controller GUI QoS profiles only",
            ],
            correctIndex: 1,
            explanation:
              "The official parent line names those tools specifically, including device operations via show/logs.",
            examNumber: "2.4",
            atomicIds: ["alo-ccna-v2.0-2.4", "alo-ccna-v2.0-2.4-tools"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-2.4-pre",
            purpose: "pretest",
            prompt:
              "A switch port shows repeated 'up/down' in show logging, but ping still succeeds intermittently. Which official 2.4 evidence class is missing if you stop after ping?",
            atomicObjectiveIds: [
              "alo-ccna-v2.0-2.4-device-ops",
              "alo-ccna-v2.0-2.4-evidence",
            ],
            scoringNote:
              "Credit recognition that show logs/device operations (and/or capture/trace route) are still required — wrong if learner treats ping alone as sufficient (misc-v20-ping-success-means-l2-healthy).",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-2.4-tools",
            front: "v2.0 2.4 evidence tools (official wording)?",
            back: "show commands (including show logs), ping, extended ping, trace route, and packet capture output — for L2/L3 connectivity and device operations",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.4-tools"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        cognitiveLoad: "high",
        minutes: 50,
      }),
      quizSpecIds: ["q-v20-2.4-01", "q-v20-2.4-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "SPLIT: ship as two learner-facing lessons under one official parent — (A) connectivity probes (ping/extended ping/trace route/capture) (B) device-operations show/logs correlation — then a short synthesis for multi-evidence",
        "No v1.1 one-to-one counterpart — do not auto-credit from older topics",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 1.3 IPv4 troubleshoot ─────────────────────────────────────────────
  (() => {
    const s = sel("1.3");
    const atomics = [
      parentAtomic({ number: "1.3", verb: "diagnose" }),
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
      officialText: officialTextFor("1.3"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-ipv4-addressing",
      relatedV11ObjectiveIds: ["200-301-v1.1/1.6", "200-301-v1.1/1.7"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-1.3-from-subnetting-topic",
          topicId: "subnetting",
          toAtomicId: "alo-ccna-v2.0-1.3",
          rationale:
            "Live subnetting/CIDR literacy supports troubleshoot depth; do not invent a phantom atomic id",
          strength: "recommended",
        }),
        liveTopicEdge({
          id: "pre-v20-1.3-from-ipv4-topic",
          topicId: "ipv4-addressing",
          toAtomicId: "alo-ccna-v2.0-1.3",
          rationale:
            "Live IPv4 addressing (public/private) is the configure/verify foundation before troubleshoot elevation",
          strength: "recommended",
        }),
        atomicEdge(
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
            "v2.0 1.3 elevates v1.1 configure/verify IPv4 addressing into troubleshoot of configuration, assignment, and subnetting for public and private space. Official verb is Troubleshoot — not Configure.",
          mathematical:
            "Use prefix length to compute network/broadcast/usable ranges, then verify the host address and gateway fall in the intended subnet.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-1.3-primary",
            title: "Gateway outside /24 — assignment fault",
            layer: "practical",
            steps: [
              "Host: 192.168.10.50/24; gateway 192.168.11.1; private LAN expected.",
              "Compute that .11.1 is outside the /24 — assignment/subnetting fault.",
              "Reject 'private addresses are illegal' as the root cause.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
              "Given ipconfig output showing 10.1.1.50/24 with gateway 10.1.2.1 on an internal LAN, name the primary IPv4 fault class and whether 'private = broken' is correct.",
            atomicObjectiveIds: ["alo-ccna-v2.0-1.3-assignment"],
            scoringNote:
              "Correct: subnet/gateway mismatch; private addressing itself is fine. Wrong 'private is illegal' → misc-v20-ipv4-private-always-unusable (misunderstanding). Random unrelated OSPF/STP answers → guessing.",
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
      parentAtomic({ number: "1.4", verb: "diagnose" }),
      teachingAtomic({
        number: "1.4",
        suffix: "prefix",
        statement:
          "Diagnose IPv6 prefix-sizing errors that break subnet placement for unicast addresses",
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
      officialText: officialTextFor("1.4"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-ipv6-addressing",
      relatedV11ObjectiveIds: ["200-301-v1.1/1.8", "200-301-v1.1/1.9"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-1.4-from-ipv6-topic",
          topicId: "ipv6-basics",
          toAtomicId: "alo-ccna-v2.0-1.4",
          rationale:
            "Live ipv6-basics covers unicast/SLAAC/prefix literacy but not modified EUI-64 — elevation must teach EUI-64 explicitly",
          strength: "recommended",
        }),
        atomicEdge(
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
            "Check unicast configuration/assignment, confirm prefix sizing, then inspect modified EUI-64 interface IDs when that method is in use. Modified EUI-64 inserts FFFE and flips the U/L bit — teach that procedure here because live ipv6-basics currently defers deep interface-ID tricks.",
          technical:
            "Official v2.0 1.4 focuses troubleshoot on unicast and modified EUI 64 (official spelling). Do not invent anycast/multicast catalog requirements from v1.1 into this parent. Official verb is Troubleshoot — not Configure.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-1.4-primary",
            title: "Wrong /64 vs wrong EUI-64 interface ID",
            layer: "practical",
            steps: [
              "Scenario A: plausible modified EUI-64 IID with wrong prefix length → fix prefix first.",
              "Scenario B: correct /64 but IID missing FFFE / wrong U/L flip → EUI-64 fault.",
              "Scenario C: manually configured IID that is valid — do not force EUI-64.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
            prompt:
              "Two faults: (1) IID looks like modified EUI-64 but prefix is /80 on a LAN expecting /64; (2) /64 correct but IID never inserted FFFE. Which primary fault class for each?",
            atomicObjectiveIds: [
              "alo-ccna-v2.0-1.4-prefix",
              "alo-ccna-v2.0-1.4-eui64",
            ],
            scoringNote:
              "Expect (1) prefix sizing, (2) modified EUI-64. 'All addresses must use EUI-64' → misconception. Blank/unrelated → guessing.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-1.4-scope",
            front: "v2.0 1.4 named IPv6 focus?",
            back: "Troubleshoot configuration/assignment/prefix sizing (unicast and modified EUI 64)",
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
        "REVISE elevation: live ipv6-basics does not teach modified EUI-64 — lesson elevation must introduce EUI-64 procedure (FFFE + U/L) before troubleshoot drills",
        "No live IPv6 troubleshoot simulator yet — implement simspec-ccna-v20-ipv6-troubleshoot with observable config/symptom panels",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 1.7 DHCP troubleshoot ─────────────────────────────────────────────
  (() => {
    const s = sel("1.7");
    const atomics = [
      parentAtomic({ number: "1.7", verb: "diagnose" }),
      teachingAtomic({
        number: "1.7",
        suffix: "client",
        statement:
          "Diagnose DHCPv4 client-side lease failures using host evidence on IOS-attached networks",
        verb: "diagnose",
      }),
      teachingAtomic({
        number: "1.7",
        suffix: "server",
        statement: "Diagnose DHCPv4 server-pool and IOS server-role faults",
        verb: "diagnose",
        prereqs: ["alo-ccna-v2.0-1.7", "alo-ccna-v2.0-1.7-client"],
      }),
      teachingAtomic({
        number: "1.7",
        suffix: "relay",
        statement:
          "Troubleshoot DHCPv4 relay/helper behavior when client and server are on different subnets",
        verb: "diagnose",
        prereqs: [
          "alo-ccna-v2.0-1.7",
          "alo-ccna-v2.0-1.7-client",
          "alo-ccna-v2.0-1.7-server",
        ],
      }),
    ];
    const misc = ["misc-v20-dhcp-relay-optional-everywhere"];
    const rem = ["rem-v20-dhcp-relay-path"];
    const sims = ["simspec-ccna-v20-dhcpv4-troubleshoot"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("1.7"),
      officialNumber: "1.7",
      officialText: officialTextFor("1.7"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-services-security",
      relatedV11ObjectiveIds: ["200-301-v1.1/4.3", "200-301-v1.1/4.6"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-1.7-from-dhcp-topic",
          topicId: "dhcp",
          toAtomicId: "alo-ccna-v2.0-1.7",
          rationale:
            "Live dhcp topic already teaches DORA, pools, and helper/relay — required foundation before troubleshoot elevation",
          strength: "recommended",
        }),
        atomicEdge(
          "pre-v20-1.7-server",
          "alo-ccna-v2.0-1.7-client",
          "alo-ccna-v2.0-1.7-server",
          "Client-lease symptoms before IOS server-pool diagnosis"
        ),
        atomicEdge(
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
            "When a host fails to lease an address, isolate whether the client, the IOS server pool, or the relay/helper path is at fault using show/debug excerpts — do not skip relay when VLANs differ.",
          technical:
            "v2.0 1.7 requires troubleshoot of DHCPv4 client, server, and relay on IOS devices — deeper than role-only or client/relay configure wording in v1.1. Official verb is Troubleshoot.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-1.7-primary",
            title: "No lease across VLANs — relay path",
            layer: "practical",
            steps: [
              "Client VLAN A, server VLAN B; Discover never leaves VLAN A.",
              "Inspect client ipconfig (APIPA?), then gateway helper-address, then server pool.",
              "Conclude relay/helper path fault when server never sees Discover.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
            atomicIds: ["alo-ccna-v2.0-1.7", "alo-ccna-v2.0-1.7-client"],
          }),
        ],
        diagnostics: [
          {
            id: "diag-v20-1.7-form",
            purpose: "formative",
            prompt:
              "No-lease ticket: client shows APIPA; server is on another subnet; helper-address missing on the gateway. Order your first three checks and name the primary role at fault.",
            atomicObjectiveIds: [
              "alo-ccna-v2.0-1.7-client",
              "alo-ccna-v2.0-1.7-relay",
            ],
            scoringNote:
              "Primary fault = relay/helper. Credit client evidence first then relay. 'Relay optional across subnets' → misconception. Random OSPF/STP → guessing.",
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
      parentAtomic({ number: "2.5", verb: "configure" }),
      teachingAtomic({
        number: "2.5",
        suffix: "root",
        statement:
          "Configure Rapid PVST+ root bridge (primary/secondary), root port, port names, and port states/roles",
        verb: "configure",
      }),
      teachingAtomic({
        number: "2.5",
        suffix: "portfast",
        statement: "Configure PortFast on appropriate Rapid PVST+ edge ports",
        verb: "configure",
        prereqs: ["alo-ccna-v2.0-2.5", "alo-ccna-v2.0-2.5-root"],
      }),
      teachingAtomic({
        number: "2.5",
        suffix: "guards",
        statement:
          "Configure root guard, loop guard, and BPDU guard as listed in v2.0 2.5.d (not BPDU filter)",
        verb: "configure",
        prereqs: [
          "alo-ccna-v2.0-2.5",
          "alo-ccna-v2.0-2.5-root",
          "alo-ccna-v2.0-2.5-portfast",
        ],
      }),
    ];
    const misc = ["misc-v20-bpdu-filter-still-required"];
    const rem = ["rem-v20-stp-guard-scope"];
    const sims = ["simspec-ccna-v20-stp-configure"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("2.5"),
      officialNumber: "2.5",
      officialText: officialTextFor("2.5"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-switching-access",
      relatedV11ObjectiveIds: ["200-301-v1.1/2.5"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-2.5-from-stp-topic",
          topicId: "stp",
          toAtomicId: "alo-ccna-v2.0-2.5",
          rationale:
            "Live stp topic provides interpret-era foundation before configure elevation",
          strength: "recommended",
        }),
        atomicEdge(
          "pre-v20-2.5-portfast",
          "alo-ccna-v2.0-2.5-root",
          "alo-ccna-v2.0-2.5-portfast",
          "Root/role literacy before PortFast (official 2.5.c)"
        ),
        atomicEdge(
          "pre-v20-2.5-guards",
          "alo-ccna-v2.0-2.5-portfast",
          "alo-ccna-v2.0-2.5-guards",
          "PortFast before guard features (official 2.5.d)"
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
            "Configure primary/secondary root, set expected port roles/states, enable PortFast where appropriate, and apply root/loop/BPDU guard per the v2.0 list. Use show spanning-tree as a lab check without treating Verify as an official verb for this parent.",
          technical:
            "v2.0 shifts from interpret to configure Rapid PVST+. Sub-bullets: 2.5.a root/port names, 2.5.b states/roles, 2.5.c PortFast, 2.5.d root/loop/BPDU guard — not BPDU filter.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-2.5-primary",
            title: "Primary root + edge PortFast + BPDU guard",
            layer: "practical",
            steps: [
              "Set primary/secondary root bridges for a VLAN.",
              "Enable PortFast on access edge ports only.",
              "Enable BPDU guard on those edge ports; omit BPDU filter from the v2.0 checklist.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
            prompt:
              "List the three features in official v2.0 2.5.d and state whether BPDU filter is required.",
            atomicObjectiveIds: ["alo-ccna-v2.0-2.5-guards"],
            scoringNote:
              "Correct: root guard, loop guard, BPDU guard; BPDU filter not required. Including BPDU filter as required → misconception. Empty/unrelated → guessing.",
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
      parentAtomic({ number: "3.2", verb: "diagnose" }),
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
      officialText: officialTextFor("3.2"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "requires greater practical depth",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-routing",
      relatedV11ObjectiveIds: ["200-301-v1.1/3.3"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-3.2-from-static-topic",
          topicId: "static-routes",
          toAtomicId: "alo-ccna-v2.0-3.2",
          rationale:
            "Live static-routes configure/verify foundation before troubleshoot elevation",
          strength: "recommended",
        }),
        atomicEdge(
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
            "Inspect route type (default/network/host/floating), next-hop reachability, and administrative distance when backups fail to install.",
          technical:
            "v2.0 3.2 moves from configure/verify static routing to troubleshoot for IPv4 and IPv6 with sub-bullets 3.2.a–d (default, network, host, floating static). Official verb is Troubleshoot.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-3.2-primary",
            title: "Floating static stays out while primary exists",
            layer: "practical",
            steps: [
              "Primary static AD 1 present; floating static AD 210 configured.",
              "Confirm floating does not install beside primary.",
              "Withdraw primary next-hop and confirm floating installs.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
              "Routing table shows only the AD 1 static while an AD 210 floating static is configured to the same prefix. Is that healthy? Why?",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.2-floating"],
            scoringNote:
              "Healthy while primary exists. Expecting both installed → misconception. Unrelated NAT/BGP → guessing.",
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
      parentAtomic({ number: "3.3", verb: "configure" }),
      teachingAtomic({
        number: "3.3",
        suffix: "ospfv2",
        statement:
          "Configure single-area OSPFv2 for IPv4 including neighbor adjacencies (excluding authentication), point-to-point, broadcast DR/BDR, and router ID",
        verb: "configure",
      }),
      teachingAtomic({
        number: "3.3",
        suffix: "ospfv3",
        statement:
          "Configure single-area OSPFv3 for IPv6 including neighbor adjacencies (excluding authentication), point-to-point, broadcast DR/BDR, and router ID",
        verb: "configure",
        prereqs: ["alo-ccna-v2.0-3.3", "alo-ccna-v2.0-3.3-ospfv2"],
      }),
      teachingAtomic({
        number: "3.3",
        suffix: "adjacency",
        statement:
          "Configure OSPF neighbor adjacencies for point-to-point and broadcast (DR/BDR) with an explicit router ID — excluding authentication — on both OSPFv2 and OSPFv3",
        verb: "configure",
        prereqs: [
          "alo-ccna-v2.0-3.3",
          "alo-ccna-v2.0-3.3-ospfv2",
          "alo-ccna-v2.0-3.3-ospfv3",
        ],
      }),
    ];
    const misc = ["misc-v20-ospfv3-same-as-v2-commands"];
    const rem = ["rem-v20-ospfv2-vs-v3"];
    const sims = ["simspec-ccna-v20-ospfv3"];
    return {
      officialObjectiveId: ccnaV20ObjectiveId("3.3"),
      officialNumber: "3.3",
      officialText: officialTextFor("3.3"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "expanded",
      pathwayClassification: "shared-core",
      sharedCoreClusterId: "shared-routing",
      relatedV11ObjectiveIds: ["200-301-v1.1/3.4"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        liveTopicEdge({
          id: "pre-v20-3.3-from-ospf-topic",
          topicId: "ospf-basics",
          toAtomicId: "alo-ccna-v2.0-3.3-ospfv2",
          rationale:
            "Live ospf-basics is OSPFv2-leaning foundation before OSPFv3 expansion",
          strength: "recommended",
        }),
        atomicEdge(
          "pre-v20-3.3-v3",
          "alo-ccna-v2.0-3.3-ospfv2",
          "alo-ccna-v2.0-3.3-ospfv3",
          "OSPFv2 single-area configure before OSPFv3 (same official sub-scope)"
        ),
        atomicEdge(
          "pre-v20-3.3-adj",
          "alo-ccna-v2.0-3.3-ospfv3",
          "alo-ccna-v2.0-3.3-adjacency",
          "Both address-family enablements before cross-cutting adjacency/network-type practice"
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
            "Enable single-area OSPFv2 on IPv4 and OSPFv3 on IPv6 to the same official depth: adjacencies without authentication, point-to-point, broadcast DR/BDR, and router ID. Lab show commands confirm success; official verb remains Configure (not Verify).",
          technical:
            "v2.0 expands beyond OSPFv2-only. Official 3.3.a excludes authentication. 3.3.b–d apply to the single-area OSPFv2 and OSPFv3 configure scope. OSPFv3 must receive full sub-bullet depth — not a mention-only add-on. Do not dual-tag OSPFv3-only drills to v1.1 3.4.",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-3.3-primary",
            title: "Dual-stack single-area neighbors without authentication",
            layer: "practical",
            steps: [
              "Configure OSPFv2 single-area on IPv4 interfaces; set RID; form P2P and broadcast (DR/BDR) adjacencies.",
              "Configure OSPFv3 single-area on IPv6 interfaces with its own enablement model; set RID; form the same network-type adjacencies.",
              "Do not configure OSPF authentication — out of official scope.",
            ],
            sourceIds: [
              "src-cisco-ccna-200-301-v2.0",
              "src-cisco-ccna-200-301-v1.1",
            ],
          },
        ],
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
            prompt:
              "A learner enables OSPFv2 with network statements and assumes IPv6 neighbors will form. What official v2.0 gap did they miss, and is authentication required?",
            atomicObjectiveIds: [
              "alo-ccna-v2.0-3.3-ospfv3",
              "alo-ccna-v2.0-3.3-adjacency",
            ],
            scoringNote:
              "Must identify need for OSPFv3 for IPv6; authentication excluded. Same-as-v2 commands → misconception. Unrelated IS-IS → guessing.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-3.3-expand",
            front: "v2.0 OSPF expansion vs typical v1.1 OSPFv2-only?",
            back: "Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6); neighbor adjacencies exclude authentication",
            atomicObjectiveIds: ["alo-ccna-v2.0-3.3"],
            freshness: "versioned",
          },
        ],
        misconceptionIds: misc,
        remediationIds: rem,
        simulatorIds: sims,
        cognitiveLoad: "high",
        minutes: 55,
      }),
      quizSpecIds: ["q-v20-3.3-01", "q-v20-3.3-02"],
      simulatorSpecIds: sims,
      sourceIds: ["src-cisco-ccna-200-301-v2.0", "src-cisco-ccna-200-301-v1.1"],
      masteryEvidence: masteryEvidence(),
      remainingBeforeLearnerFacing: [
        ...remainingCommon,
        "SPLIT: learner-facing Lesson A = single-area OSPFv2 (3.3.a–d on IPv4); Lesson B = single-area OSPFv3 (same 3.3.a–d depth on IPv6) + short synthesis — keep one official parent association",
        "Live ospf-basics is OSPFv2-leaning — add OSPFv3 labs without inventing authentication tasks",
        "OSPFv3 content is the v2.0 expansion — do not label it v1.1-required",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),

  // ── 5.2 generative AI prompts ─────────────────────────────────────────
  (() => {
    const s = sel("5.2");
    const atomics = [
      parentAtomic({ number: "5.2", verb: "compare" }),
      teachingAtomic({
        number: "5.2",
        suffix: "components",
        statement:
          "Identify prompt components for network-operations AI assistance: data classification, output format, persona, and instructions",
        verb: "recognize",
      }),
      teachingAtomic({
        number: "5.2",
        suffix: "safe",
        statement:
          "Select network-operations prompts that respect data classification (e.g., reject pasting enable secrets, full running-configs with credentials, or customer PII)",
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
      officialText: officialTextFor("5.2"),
      objectivesVersion: "v2.0",
      selectionReasons: s.reasons,
      transitionClassification: "expanded",
      pathwayClassification: "version-specific",
      relatedV11ObjectiveIds: ["200-301-v1.1/6.4"],
      atomicObjectives: atomics,
      prerequisiteEdges: [
        atomicEdge(
          "pre-v20-5.2-safe",
          "alo-ccna-v2.0-5.2-components",
          "alo-ccna-v2.0-5.2-safe",
          "Component literacy before safe network-ops prompt selection"
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
            "When you ask an AI to help with a Cisco network ticket, you still decide what data is safe to share, who the assistant should act as, and what the answer should look like.",
          practical:
            "Prefer prompts for tasks like interface-error triage, ACL review drafts, or change-window checklists that state: data classification (e.g., internal counters only — no secrets), output format (bullets/table), persona (network ops assistant), and clear instructions. Reject prompts that paste enable secrets or full credentialed configs.",
          technical:
            "Official v2.0 5.2 is a select skill on prompt components (data classification, output format, persona, instructions) for generative AI supporting network operations. This is not generic prompt-engineering trivia (temperature/top-k). Associations are v2.0-specific (not shared-core).",
        },
        examples: [
          {
            id: "ex-ccna-v2.0-5.2-primary",
            title: "Select a prompt for interface-error triage",
            layer: "practical",
            steps: [
              "Ops task: summarize likely causes of rising CRC errors on Gi0/1.",
              "Weak prompt: 'fix my network' or paste of enable secret + full show run.",
              "Strong prompt: persona=network ops assistant; data=non-secret interface counters (internal); format=three markdown bullets; instructions=hypothesize L1/L2 causes only.",
            ],
            sourceIds: ["src-cisco-ccna-200-301-v2.0"],
          },
        ],
        quiz: [
          mcq({
            id: "q-v20-5.2-01",
            prompt:
              "Which prompt best matches official v2.0 5.2 for a Cisco interface CRC triage task?",
            choices: [
              "fix my network",
              "As a network ops assistant, using only non-secret interface counters (internal), output a three-bullet root-cause hypothesis in markdown focused on L1/L2 causes.",
              "Paste the full enable secret and ask for ideas",
              "Ignore classification and ask for any config",
            ],
            correctIndex: 1,
            explanation:
              "It includes persona, data classification boundary, output format, and instructions for a network-operations use case.",
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
            prompt:
              "For an ACL review assist task, rewrite 'check this ACL' into a prompt that includes all four official components — or mark why a secret-leaking rewrite fails.",
            atomicObjectiveIds: [
              "alo-ccna-v2.0-5.2-components",
              "alo-ccna-v2.0-5.2-safe",
            ],
            scoringNote:
              "Credit four components in a network-ops framing. Unstructured chat → misconception. Temperature/top-k essays → off-objective guessing.",
          },
        ],
        flashcards: [
          {
            id: "fc-v20-5.2-components",
            front: "v2.0 5.2 prompt components?",
            back: "Data classification, output format, persona, instructions — for network operations AI assistance",
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
        "First-party support is the official exam objective line; do not invent Cisco product claims beyond that without added sources",
      ],
    } satisfies ObjectiveProductionUnit;
  })(),
];
