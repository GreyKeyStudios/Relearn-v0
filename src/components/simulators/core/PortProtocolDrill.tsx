"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { PORT_PROTOCOL_POOL } from "@/content/simulators/drills/core/port-protocol";

export function PortProtocolDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={PORT_PROTOCOL_POOL} onComplete={onComplete} />;
}
