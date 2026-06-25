"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { AWS_SERVICE_POOL } from "@/content/simulators/drills/core/aws-service";

export function AwsServicePicker({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={AWS_SERVICE_POOL} onComplete={onComplete} />;
}
