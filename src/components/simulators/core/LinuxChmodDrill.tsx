"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { LINUX_CHMOD_POOL } from "@/content/simulators/drills/core/linux-chmod";

export function LinuxChmodDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={LINUX_CHMOD_POOL} onComplete={onComplete} />;
}
