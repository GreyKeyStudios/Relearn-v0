/**
 * Freshness classification helpers — separate timeless concepts from
 * information that needs periodic review.
 */

import type { FreshnessClass } from "./types";

export interface FreshnessPolicy {
  class: FreshnessClass;
  description: string;
  /** Suggested maximum age in days before a source re-check */
  reviewWithinDays: number | null;
  examples: string[];
}

export const FRESHNESS_POLICIES: Record<FreshnessClass, FreshnessPolicy> = {
  timeless: {
    class: "timeless",
    description:
      "Stable conceptual truths unlikely to change with vendor releases.",
    reviewWithinDays: null,
    examples: [
      "Binary place values",
      "OSI layering mental model",
      "Definition of a set in mathematics",
    ],
  },
  "slow-changing": {
    class: "slow-changing",
    description:
      "Concepts that evolve slowly (standards, pedagogy, common practice).",
    reviewWithinDays: 730,
    examples: [
      "IPv4 private address ranges (RFC1918)",
      "Common password hygiene practices",
    ],
  },
  versioned: {
    class: "versioned",
    description:
      "Tied to an explicit document or exam version; must record version + retrieval date.",
    reviewWithinDays: 180,
    examples: [
      "CompTIA A+ 220-1201 domain weights",
      "CCNA exam objective numbering for a named blueprint",
    ],
  },
  "vendor-current": {
    class: "vendor-current",
    description:
      "UI paths, CLI syntax, product names, or cloud service branding that change often.",
    reviewWithinDays: 90,
    examples: [
      "Azure portal blade names",
      "AWS console navigation",
      "FL Studio stock plugin UI labels",
    ],
  },
  ephemeral: {
    class: "ephemeral",
    description:
      "News, pricing, temporary promos, beta features — avoid in core curriculum.",
    reviewWithinDays: 30,
    examples: ["Limited-time exam discount codes", "Beta feature flags"],
  },
};

/** Heuristic default for certification vs skills tracks when not authored. */
export function defaultFreshnessForTrack(kind: "certification" | "skills"): FreshnessClass {
  return kind === "certification" ? "versioned" : "slow-changing";
}

export function freshnessNeedsSourceVersion(freshness: FreshnessClass): boolean {
  return freshness === "versioned" || freshness === "vendor-current";
}
