export interface Certification {
  id: string;
  name: string;
  shortName: string;
  vendor: string;
  overview: string;
  examSummary: {
    questionCount: number;
    durationMinutes: number;
    passingScore: string;
    format: string;
  };
  domains: Domain[];
}

export interface Domain {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  lesson: { title: string; content: string };
  keyFacts: string[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
  /** Phase 2 — optional until content agents expand certs */
  objectives?: string[];
  assignments?: Assignment[];
  externalResources?: ExternalResource[];
  practiceType?: PracticeType[];
  questionBank?: QuizQuestion[];
  /** Phase 3 CES — optional until content expanded */
  guidedExample?: GuidedExample;
  commonMistakes?: string[];
  examTraps?: string[];
  realWorldScenario?: string;
  estimatedStudyMinutes?: number;
  difficulty?: TopicDifficulty;
  prerequisites?: string[];
}

export type TopicDifficulty = "easy" | "medium" | "hard";

export interface GuidedExample {
  title: string;
  steps: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  explanation: string;
  /** Phase 4.5 — exam objective mapping (CCNA pilot) */
  objectiveId?: string;
  difficulty?: TopicDifficulty;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

/** Official exam objective reference — e.g. CCNA-1.9 */
export interface ExamObjective {
  id: string;
  domain: string;
  text: string;
}

export type PracticeType =
  | "reading"
  | "quiz"
  | "flashcard"
  | "simulator"
  | "external-lab"
  | "case-study";

export interface ExternalResource {
  id: string;
  name: string;
  url: string;
  cost: "free";
  platform: "windows" | "mac" | "linux" | "web" | "any";
  installNotes?: string;
}

export interface Assignment {
  id: string;
  title: string;
  type: PracticeType;
  instructions: string;
  estimatedMinutes: number;
  externalResourceId?: string;
  simulatorId?: string;
  /** Phase 4.5 — interactive case study engine */
  caseStudyId?: string;
  completionCriteria: string[];
  relatedTopicIds: string[];
  order: number;
}

export interface CaseStudyChoice {
  id: string;
  label: string;
  nextNodeId: string | null;
  isOptimal?: boolean;
  weakConcept?: string;
}

export interface CaseStudyNode {
  id: string;
  prompt: string;
  evidence?: string;
  choices: CaseStudyChoice[];
}

export interface CaseStudyDefinition {
  id: string;
  title: string;
  certId: string;
  topicIds: string[];
  estimatedMinutes: number;
  startNodeId: string;
  nodes: Record<string, CaseStudyNode>;
  successNodeIds: string[];
}

export interface SimulatorDefinition {
  id: string;
  name: string;
  component: string;
  topicIds: string[];
}
