import type { CaseStudyDefinition } from "@/content/types";
import { CCNA_CASE_STUDIES } from "@/content/case-studies/ccna";

const CASE_STUDIES: Record<string, CaseStudyDefinition> = Object.fromEntries(
  CCNA_CASE_STUDIES.map((cs) => [cs.id, cs])
);

export function getCaseStudy(caseStudyId: string): CaseStudyDefinition | undefined {
  return CASE_STUDIES[caseStudyId];
}
