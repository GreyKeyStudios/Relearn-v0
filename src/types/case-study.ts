export interface CaseStudyAttempt {
  caseStudyId: string;
  certId: string;
  topicId: string;
  score: number;
  maxScore: number;
  decisionPath: string[];
  weakConcepts: string[];
  completedAt: string;
}
