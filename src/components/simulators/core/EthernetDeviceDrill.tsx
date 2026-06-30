"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { OrderDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { ETHERNET_DEVICE_POOL } from "@/content/simulators/drills/core/ethernet-devices";

export function EthernetDeviceDrill({ onComplete }: SimulatorComponentProps) {
  return (
    <OrderDrillRunner pool={ETHERNET_DEVICE_POOL} onComplete={onComplete} minItems={2} maxItems={4} />
  );
}
