"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { SUBNET_CIDR_POOL } from "@/content/simulators/drills/core/subnet-cidr";

export function SubnetCidrDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={SUBNET_CIDR_POOL} onComplete={onComplete} />;
}
