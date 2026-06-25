"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { AZURE_RBAC_POOL } from "@/content/simulators/drills/core/azure-rbac";

export function AzureRbacDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={AZURE_RBAC_POOL} onComplete={onComplete} />;
}
