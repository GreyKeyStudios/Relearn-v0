"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { OrderDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { TCPIP_LAYER_POOL } from "@/content/simulators/drills/core/tcpip-layer";

export function TcpipLayerMap({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={TCPIP_LAYER_POOL} onComplete={onComplete} minItems={4} maxItems={5} />;
}
