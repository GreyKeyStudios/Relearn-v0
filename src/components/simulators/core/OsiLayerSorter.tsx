"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { OrderDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { OSI_LAYER_POOL } from "@/content/simulators/drills/core/osi-layer";

export function OsiLayerSorter({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={OSI_LAYER_POOL} onComplete={onComplete} minItems={4} maxItems={5} />;
}
