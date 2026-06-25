/** Future Phase 5/6 — composite exam readiness; not computed in Phase 4.5 */
export interface LearnerConfidenceScore {
  certId: string;
  score: number | null;
  computedAt: string | null;
  factors: Record<string, number | null>;
}
