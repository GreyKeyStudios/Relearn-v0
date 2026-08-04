/**
 * Misconception and remediation catalog (seed).
 * Records are pedagogical models — not vendor quotations.
 * Expand per research batch; never invent exam-objective citations here.
 */

import type { MisconceptionRecord, RemediationActivity } from "../types";
import {
  CCNA_V20_BATCH1_MISCONCEPTIONS,
  CCNA_V20_BATCH1_REMEDIATIONS,
} from "../batches/ccna-v20-batch1";

export const PRODUCTION_MISCONCEPTIONS: MisconceptionRecord[] = [
  {
    id: "misc-subnet-hosts-include-network-broadcast",
    statement:
      "Usable host count for a subnet equals 2^(host bits), including network and broadcast addresses.",
    whyItAppears:
      "Learners remember the power-of-two formula but forget to subtract network and broadcast addresses on IPv4.",
    correction:
      "Usable IPv4 hosts are typically 2^(host bits) − 2 for ordinary subnets (exceptions exist for /31 point-to-point).",
    diagnosticSignals: [
      "Chooses 256 usable hosts for /24",
      "Ignores network/broadcast reservation in quiz explanations",
    ],
    remediationActivityIds: ["rem-subnet-usable-hosts-drill"],
    relatedAtomicIds: ["alo-ccna-subnetting"],
  },
  {
    id: "misc-osi-layers-are-physical-boxes",
    statement:
      "Each OSI layer is a separate physical device the packet visits in order.",
    whyItAppears:
      "Layer diagrams look like a building; learners map layers to hardware hops.",
    correction:
      "OSI layers are a conceptual model for functions; encapsulation happens in software/firmware on hosts and network devices according to their roles.",
    diagnosticSignals: [
      "Says Layer 3 is always 'the router box' with no nuance",
      "Cannot explain encapsulation on a single host",
    ],
    remediationActivityIds: ["rem-osi-encapsulation-walkthrough"],
    relatedAtomicIds: ["alo-ccna-osi-model"],
  },
  ...CCNA_V20_BATCH1_MISCONCEPTIONS,
];

export const PRODUCTION_REMEDIATIONS: RemediationActivity[] = [
  {
    id: "rem-subnet-usable-hosts-drill",
    title: "Usable hosts: subtract two",
    kind: "drill",
    instructions:
      "For /24, /25, and /26, compute total addresses, then usable hosts. Say aloud what the two reserved addresses are.",
    targetMisconceptionIds: ["misc-subnet-hosts-include-network-broadcast"],
    atomicObjectiveIds: ["alo-ccna-subnetting"],
    estimatedMinutes: 10,
  },
  {
    id: "rem-osi-encapsulation-walkthrough",
    title: "Encapsulation on one host",
    kind: "worked-example",
    instructions:
      "Trace a ping from application data to bits on the wire on a single PC, naming what each layer adds — without inventing extra devices.",
    targetMisconceptionIds: ["misc-osi-layers-are-physical-boxes"],
    atomicObjectiveIds: ["alo-ccna-osi-model"],
    estimatedMinutes: 12,
  },
  ...CCNA_V20_BATCH1_REMEDIATIONS,
];
