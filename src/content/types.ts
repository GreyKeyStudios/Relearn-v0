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

export interface ExperienceIconsMediaDef {
  kind: "icons";
  items: ExperienceMediaItem[];
}

export interface ExperienceFlowMediaDef {
  kind: "flow";
  items: ExperienceMediaItem[];
}

/** Interactive pie-slice visual for subnetting lessons. */
export interface SubnetPieMediaDef {
  kind: "subnet-pie";
  prefix?: 24 | 25 | 26 | 27 | 28 | 29 | 30;
  interactive?: boolean;
  maxPrefix?: 24 | 25 | 26 | 27 | 28 | 29 | 30;
}

/** Gray-out IP + pick-the-block drill for subnetting lessons. */
export interface BlockFinderMediaDef {
  kind: "block-finder";
  ip: string;
  prefix: number;
  mode?: "gray" | "interactive" | "revealed";
}

/** Two-column recall table for IP ranges lesson. */
export interface IpRangesTableMediaDef {
  kind: "ip-ranges-table";
}

/** Two-column recall table for IPv6 address types. */
export interface Ipv6TypesTableMediaDef {
  kind: "ipv6-types-table";
}

/** /64 network vs host split visual. */
export interface Ipv6PrefixMediaDef {
  kind: "ipv6-prefix";
  prefix?: number;
}

/** IPv4 ↔ IPv6 role comparison table. */
export interface Ipv4Ipv6CompareMediaDef {
  kind: "ipv4-ipv6-compare";
}

/** Leading-zero compression examples strip. */
export interface Ipv6LeadingZeroMediaDef {
  kind: "ipv6-leading-zeros";
}

/** Wireless fundamentals recall table. */
export interface WirelessRecallTableMediaDef {
  kind: "wireless-recall-table";
}

/** 2.4 GHz channel dial — spacing vs width visual. */
export interface WifiChannelDialMediaDef {
  kind: "wifi-channel-dial";
  showOverlap?: boolean;
}

/** Teacher audio demo stage — matches sound-synthesis naming (a-baseline … d-musical). */
export type AudioDemoStage =
  | "baseline"
  | "changed"
  | "exaggerated"
  | "musical";

/** Single teacher-rendered clip in LES. Soft-fail if file missing. */
export interface ExperienceAudioMediaDef {
  kind: "audio";
  /** Public URL path, e.g. "/media/sound-synthesis/m1/m1-filter-resonance-a-baseline.wav" */
  src: string;
  caption?: string;
  label?: string;
  conceptId?: string;
  stage?: AudioDemoStage;
  plugin?: string;
  sampleRate?: number;
  loudnessMatched?: boolean;
}

export interface ExperienceAudioAbClip {
  id: string;
  label: string;
  src: string;
  stage?: AudioDemoStage;
}

/** A/B(/C/D) teacher demo ladder — predict-before-hear when predictPrompt is set. */
export interface ExperienceAudioAbMediaDef {
  kind: "audio-ab";
  clips: ExperienceAudioAbClip[];
  predictPrompt?: string;
  conceptId?: string;
  plugin?: string;
  loudnessMatched?: boolean;
}

export type ExperienceMediaDef =
  | ExperienceIconsMediaDef
  | ExperienceFlowMediaDef
  | SubnetPieMediaDef
  | BlockFinderMediaDef
  | IpRangesTableMediaDef
  | Ipv6TypesTableMediaDef
  | Ipv6PrefixMediaDef
  | Ipv4Ipv6CompareMediaDef
  | Ipv6LeadingZeroMediaDef
  | WirelessRecallTableMediaDef
  | WifiChannelDialMediaDef
  | ExperienceAudioMediaDef
  | ExperienceAudioAbMediaDef;

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
  /** Computer stack layer 1=Hardware (bottom) through 4=You/User (top) */
  computerStackLayer?: 1 | 2 | 3 | 4;
  /** Sound synthesis signal path 1=Source … 5=Hear */
  synthesisSignalPathStage?: 1 | 2 | 3 | 4 | 5;
}

export type ExperienceAnchorType =
  | "osi-stack"
  | "tcp-ip-stack"
  | "git-workflow"
  | "powershell-shell"
  /** Computer Fundamentals — User → Apps → OS → Hardware */
  | "computer-stack"
  /** Sound Synthesis — Source → Shape → Filter → Amp → Hear */
  | "synthesis-signal-path";

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
  /**
   * Official objectives pathway for catalog visibility.
   * Omit for legacy/shared foundation topics (always visible).
   * `"v2.0"` topics appear when the learner’s effective CCNA pathway is v2.0.
   */
  objectivesVersion?: "v1.1" | "v2.0";
  /** Short badge for unfinished / version-specific pathway UI */
  pathwayBadge?: string;
  assignments?: Assignment[];
  externalResources?: ExternalResource[];
  practiceType?: PracticeType[];
  questionBank?: QuizQuestion[];
  /** Phase 3 CES — optional until content expanded */
  guidedExample?: GuidedExample;
  /** One-sentence mental model — shown first on the after-lesson hub (LES) */
  lightbulbMoment?: string;
  commonMistakes?: string[];
  examTraps?: string[];
  /** Workplace traps for non-exam tracks (Computer Fundamentals). Prefer over examTraps for CF. */
  realWorldTraps?: string[];
  realWorldScenario?: string;
  estimatedStudyMinutes?: number;
  difficulty?: TopicDifficulty;
  prerequisites?: string[];
  /** Optional Knowledge DNA node id — see src/content/knowledge/ */
  knowledgeNodeId?: string;
  /** Phase 4.8 — quiz question IDs per lesson step index for inline checkpoints */
  lessonCheckpoints?: string[];
  /** Optional oral / teacher-mode reflection prompt (until Professor Mode AI) */
  teacherReflectionPrompt?: string;
  /** Optional STEM / history depth — never required; each lane must reconnect to FL Studio */
  goDeeper?: GoDeeperLane[];
  /** When this procedure fails — practical recovery steps */
  whenThisFails?: string[];
}

/** Optional depth lane (Sound Synthesis Go Deeper — curiosity only). */
export type GoDeeperKind =
  | "physics"
  | "math"
  | "dsp"
  | "electricity"
  | "history"
  | "philosophy"
  | "code";

export interface GoDeeperLane {
  id: string;
  title: string;
  kind: GoDeeperKind;
  body: string;
  /** Required — audible or visible next step in FL Studio */
  flReconnect: string;
}

/** Pathway F — placement diagnostic result (Computer Fundamentals / A+ entry). */
export type CfPlacementPath =
  | "start-cf-beginning"
  | "skip-to-files"
  | "cf-partial-skip"
  | "begin-aplus-with-refreshers";

export interface CfPlacementResult {
  path: CfPlacementPath;
  /** Module or topic IDs the learner may skip */
  skipTopicIds: string[];
  /** Human-readable recommendation — respectful, never remedial */
  recommendation: string;
  /** Intent captured during placement */
  intent?: "confidence" | "job" | "aplus" | "unsure";
}

/** Cross-track foundation referral when an A+ learner shows a CF gap. */
export interface FoundationReferral {
  fromCertId: string;
  fromTopicId: string;
  foundationCertId: "computer-fundamentals";
  foundationTopicId: string;
  tip: string;
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
  /**
   * Choice ids that signal a known misconception (not random guessing).
   * Used to route diagnostic → remediation without inventing a second mastery engine.
   */
  misconceptionChoiceIds?: string[];
  /** Production remediation activity id when a misconception choice is selected */
  remediationActivityId?: string;
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
  /** Sound Synthesis — Recreate (craft) vs Interpret (imagination) */
  challengeKind?: "recreate" | "interpret";
  /** Recreate — teacher reference clip id / path */
  referenceAudioId?: string;
  /** Recreate — audible-trait checklist */
  audibleTraitRubric?: string[];
  /** Interpret — creative prompt */
  creativePrompt?: string;
  /** Interpret — reflection checklist */
  reflectionRubric?: string[];
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
