"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { HotspotDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { PC_INTERIOR_POOL } from "@/content/simulators/drills/fundamentals/pc-interior";

export function PcInteriorHotspot({ onComplete }: SimulatorComponentProps) {
  return <HotspotDrillRunner pool={PC_INTERIOR_POOL} onComplete={onComplete} minItems={5} maxItems={7} />;
}
