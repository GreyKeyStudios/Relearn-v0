"use client";

import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { ChoiceDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { CRYPTO_POOL } from "@/content/simulators/drills/core/crypto";

export function CryptoMatcher({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={CRYPTO_POOL} onComplete={onComplete} />;
}
