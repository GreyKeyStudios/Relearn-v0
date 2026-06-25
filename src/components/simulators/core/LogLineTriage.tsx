"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { LOG_LINE_POOL } from "@/content/simulators/drills/core/log-line";

export function LogLineTriage({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={LOG_LINE_POOL} onComplete={onComplete} />;
}
