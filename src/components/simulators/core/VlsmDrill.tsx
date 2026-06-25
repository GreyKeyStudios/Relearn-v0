"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { VLSM_POOL } from "@/content/simulators/drills/core/vlsm";

export function VlsmDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={VLSM_POOL} onComplete={onComplete} minItems={5} maxItems={8} />;
}
