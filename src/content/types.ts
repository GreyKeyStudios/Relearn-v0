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

export interface StudyTip {
  title: string;
  body: string;
}

/** Authored lesson step — one screen, optional visual + checkpoint (Phase 4.8). */
export interface LessonStepDef {
  id: string;
  title: string;
  body: string;
  /** Highlight layer 1–7 on OSI diagram */
  osiLayer?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Show full stack with no layer highlighted */
  showFullStack?: boolean;
  studyTip?: StudyTip;
  checkpointQuestionId?: string;
}

export type ExperienceScreenType =
  | "hero"
  | "teach"
  | "flow"
  | "analogy"
  | "memory"
  | "misconception"
  | "checkpoint"
  | "summary";

export interface ExperienceMediaItem {
  /** Lucide icon name, e.g. "cable", "monitor" */
  icon: string;
  label: string;
}

export interface ExperienceMediaDef {
  kind: "icons" | "flow";
  items: ExperienceMediaItem[];
}

export interface DeferredTerm {
  term: string;
  teachInStepId: string;
}

/** Term tier for Permission To Defer (LES-11). */
export type TermTier = "now" | "basics" | "later";

export interface ExperienceTerm {
  id: string;
  label: string;
  tier: TermTier;
  /** Popover copy — max ~2 sentences */
  shortDefinition: string;
  /** Recognition example — e.g. MAC or IP address format */
  example?: string;
  laterTopicId?: string;
  laterTopicLabel?: string;
  laterItems?: string[];
}

/** One swipe card in a LES experience (Phase 4.9). */
export interface ExperienceScreen {
  id: string;
  type: ExperienceScreenType;
  headline: string;
  body?: string;
  /** TCP/IP layer 4=Application (top) through 1=Network Access (bottom) */
  tcpLayer?: 1 | 2 | 3 | 4;
  osiLayer?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  showFullStack?: boolean;
  studyTip?: StudyTip;
  media?: ExperienceMediaDef;
  /** @deprecated use terms with tier "later" */
  deferredTerms?: DeferredTerm[];
  terms?: ExperienceTerm[];
  /** Breadcrumb list — anxiety reducers for deferred depth */
  laterLearn?: string[];
  checkpointQuestionId?: string;
  /** Multiple quiz questions on one checkpoint screen (in order) */
  checkpointQuestionIds?: string[];
  /** Git workflow anchor highlight (skills track) */
  gitWorkflowStep?: 1 | 2 | 3 | 4;
  /** PowerShell shell workflow anchor highlight (skills track) */
  powershellShellStep?: 1 | 2 | 3 | 4;
}

export type ExperienceAnchorType =
  | "osi-stack"
  | "tcp-ip-stack"
  | "git-workflow"
  | "powershell-shell";

export interface TopicExperience {
  anchor: { type: ExperienceAnchorType };
  screens: ExperienceScreen[];
}

export interface TopicLesson {
  title: string;
  /** Reference prose after lesson complete */
  content: string;
  /** LES experience — preferred when set (Phase 4.9) */
  experience?: TopicExperience;
  /** When set, stepped lesson uses authored screens instead of auto-chunking */
  steps?: LessonStepDef[];
  /** Lesson-specific visual aid */
  visual?: "osi-stack";
}

export interface Topic {
  id: string;
  name: string;
  lesson: TopicLesson;
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
  /** Phase 4.8 — quiz question IDs per lesson step index for inline checkpoints */
  lessonCheckpoints?: string[];
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
