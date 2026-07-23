"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { CF_FILE_FOLDER_POOL } from "@/content/simulators/drills/fundamentals/cf-file-folder";

export function CfFileFolderManager({ onComplete }: SimulatorComponentProps) {
  return (
    <ChoiceDrillRunner
      pool={CF_FILE_FOLDER_POOL}
      onComplete={onComplete}
      minItems={5}
      maxItems={8}
    />
  );
}
