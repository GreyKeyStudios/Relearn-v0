/**
 * Simulator specification registry (production layer).
 * Maps known live simulators into SimulatorSpec without changing the runtime registry.
 */

import { getAllSimulatorIds } from "@/content/simulators/registry";
import type { SimulatorSpec } from "../types";
import { CCNA_V20_BATCH1_SIMULATORS } from "../batches/ccna-v20-batch1";

/** Seed specs — status live when present in the app simulator registry. */
const SEED_SPECS: Omit<SimulatorSpec, "status" | "liveSimulatorId">[] = [
  {
    id: "simspec-subnet-cidr-drill",
    name: "Subnet CIDR drill",
    learningGoals: [
      "Identify network prefix length",
      "Compute usable host counts for ordinary IPv4 subnets",
    ],
    atomicObjectiveIds: ["alo-ccna-subnetting"],
    interactionSummary: "Interactive subnetting drill used by CCNA subnetting assignments.",
    autoGradeHints: ["Compare learner answers to calculated network math"],
  },
  {
    id: "simspec-crypto-matcher",
    name: "Crypto matcher",
    learningGoals: ["Match cryptographic concepts to definitions"],
    atomicObjectiveIds: ["alo-security-plus-cryptography-basics"],
    interactionSummary: "Matching drill for Security+ cryptography basics.",
  },
];

export function listSimulatorSpecs(): SimulatorSpec[] {
  const liveIds = new Set(getAllSimulatorIds());
  const fromSeeds = SEED_SPECS.map((seed) => {
    const guessedLiveId =
      seed.id === "simspec-subnet-cidr-drill"
        ? "subnet-cidr-drill"
        : seed.id === "simspec-crypto-matcher"
          ? "crypto-matcher"
          : undefined;
    const live = guessedLiveId && liveIds.has(guessedLiveId) ? guessedLiveId : undefined;
    return {
      ...seed,
      liveSimulatorId: live,
      status: live ? ("live" as const) : ("spec-only" as const),
    } satisfies SimulatorSpec;
  });
  // Batch-1 CCNA v2.0 simulators remain spec-only until implemented.
  return [...fromSeeds, ...CCNA_V20_BATCH1_SIMULATORS];
}
