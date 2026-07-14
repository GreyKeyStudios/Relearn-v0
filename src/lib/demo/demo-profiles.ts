import type { TopicMastery } from "@/types/mastery";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import type { Activity, ProgressState, QuizAttempt, WeakTopic } from "@/types/progress";
import { PROGRESS_STORAGE_VERSION } from "@/lib/progress-migrate";
import type { DemoProfileId } from "@/lib/demo/types";

/** Partialized progress matching progress-store persist shape. */
export type DemoPersistedState = Pick<
  ProgressState,
  | "completedLessons"
  | "completedAssignments"
  | "quizAttempts"
  | "flashcardSessions"
  | "simulatorAttempts"
  | "weakTopics"
  | "quizInProgress"
  | "flashcardInProgress"
  | "lastStudyDate"
  | "streak"
  | "recentActivity"
  | "topicMastery"
  | "studyPlan"
  | "onboardingComplete"
  | "questionStats"
  | "caseStudyAttempts"
>;

const DOMAIN1_TOPICS = [
  "osi-model",
  "tcp-ip-model",
  "ethernet",
  "ipv4-addressing",
  "subnetting",
  "ip-ranges",
  "ipv6-basics",
  "wireless-basics",
] as const;

const EXTRA_TOPICS = ["vlans", "ospf-basics", "acls", "network-security"] as const;

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

function daysFromNow(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function isoDaysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

function tk(topicId: string): string {
  return `ccna:${topicId}`;
}

function mastery(opts: {
  topicId: string;
  score: number;
  level: TopicMastery["level"];
  nextReviewAt: string;
  lastPracticedAt?: string;
  attemptCount?: number;
  objectiveScores?: Record<string, number>;
  objectiveAttempts?: Record<string, number>;
  reviewIntervalDays?: number;
  streak?: number;
}): TopicMastery {
  return {
    topicKey: tk(opts.topicId),
    certId: "ccna",
    score: opts.score,
    level: opts.level,
    objectiveScores: opts.objectiveScores ?? {},
    objectiveAttempts: opts.objectiveAttempts ?? {},
    lastPracticedAt: opts.lastPracticedAt ?? isoDaysAgo(2),
    nextReviewAt: opts.nextReviewAt,
    attemptCount: opts.attemptCount ?? 4,
    streak: opts.streak ?? 1,
    reviewIntervalDays: opts.reviewIntervalDays ?? 3,
  };
}

function emptySeed(): DemoPersistedState {
  return {
    completedLessons: {},
    completedAssignments: {},
    quizAttempts: [],
    flashcardSessions: [],
    simulatorAttempts: [],
    weakTopics: {},
    quizInProgress: null,
    flashcardInProgress: null,
    lastStudyDate: null,
    streak: 0,
    recentActivity: [],
    topicMastery: {},
    studyPlan: { ...DEFAULT_STUDY_PLAN, activeCertIds: ["ccna"] },
    onboardingComplete: false,
    questionStats: {},
    caseStudyAttempts: [],
  };
}

function quizAttempt(
  topicId: string,
  score: number,
  total: number,
  daysBack: number,
  answers: QuizAttempt["answers"] = []
): QuizAttempt {
  return {
    topicKey: tk(topicId),
    certId: "ccna",
    score,
    total,
    answers,
    completedAt: isoDaysAgo(daysBack),
  };
}

function activity(
  type: Activity["type"],
  topicId: string,
  label: string,
  daysBack: number,
  id: string
): Activity {
  return {
    id,
    type,
    certId: "ccna",
    topicKey: tk(topicId),
    label,
    timestamp: isoDaysAgo(daysBack),
  };
}

function buildNewLearner(): DemoPersistedState {
  return {
    ...emptySeed(),
    studyPlan: {
      ...DEFAULT_STUDY_PLAN,
      activeCertIds: ["ccna"],
      weeklyMinutes: 210,
    },
  };
}

function buildIntermediate(): DemoPersistedState {
  const completedLessons: Record<string, true> = {
    [tk("osi-model")]: true,
    [tk("tcp-ip-model")]: true,
    [tk("ethernet")]: true,
    [tk("ipv4-addressing")]: true,
    [tk("subnetting")]: true,
    [tk("vlans")]: true,
  };

  const topicMastery: Record<string, TopicMastery> = {
    [tk("osi-model")]: mastery({
      topicId: "osi-model",
      score: 72,
      level: "proficient",
      nextReviewAt: daysFromNow(5),
      objectiveScores: { "CCNA-1.1": 78, "CCNA-1.2": 65 },
      objectiveAttempts: { "CCNA-1.1": 5, "CCNA-1.2": 4 },
    }),
    [tk("tcp-ip-model")]: mastery({
      topicId: "tcp-ip-model",
      score: 68,
      level: "familiar",
      nextReviewAt: daysFromNow(3),
      objectiveScores: { "CCNA-1.5": 70 },
      objectiveAttempts: { "CCNA-1.5": 3 },
    }),
    [tk("ethernet")]: mastery({
      topicId: "ethernet",
      score: 61,
      level: "familiar",
      nextReviewAt: daysFromNow(2),
    }),
    [tk("ipv4-addressing")]: mastery({
      topicId: "ipv4-addressing",
      score: 55,
      level: "learning",
      nextReviewAt: daysFromNow(1),
      objectiveScores: { "CCNA-1.6": 52, "CCNA-1.11": 58 },
      objectiveAttempts: { "CCNA-1.6": 4, "CCNA-1.11": 3 },
    }),
    [tk("subnetting")]: mastery({
      topicId: "subnetting",
      score: 48,
      level: "learning",
      nextReviewAt: daysAgo(1),
      objectiveScores: { "CCNA-1.9": 41, "CCNA-1.10": 55 },
      objectiveAttempts: { "CCNA-1.9": 6, "CCNA-1.10": 4 },
    }),
    [tk("vlans")]: mastery({
      topicId: "vlans",
      score: 58,
      level: "familiar",
      nextReviewAt: daysFromNow(4),
      objectiveScores: { "CCNA-2.1": 58 },
      objectiveAttempts: { "CCNA-2.1": 3 },
    }),
    [tk("ospf-basics")]: mastery({
      topicId: "ospf-basics",
      score: 42,
      level: "learning",
      nextReviewAt: daysAgo(2),
      objectiveScores: { "CCNA-3.5": 33, "CCNA-3.4": 50 },
      objectiveAttempts: { "CCNA-3.5": 5, "CCNA-3.4": 3 },
    }),
    [tk("acls")]: mastery({
      topicId: "acls",
      score: 50,
      level: "learning",
      nextReviewAt: daysFromNow(2),
      objectiveScores: { "CCNA-5.2": 52 },
      objectiveAttempts: { "CCNA-5.2": 4 },
    }),
  };

  const weakTopics: Record<string, WeakTopic> = {
    [tk("subnetting")]: {
      topicKey: tk("subnetting"),
      certId: "ccna",
      reasons: ["Low quiz accuracy on subnet calculations"],
      missedQuestionIds: ["subnetting-q1", "subnetting-q3"],
      missedCardIds: [],
      lastSeenAt: isoDaysAgo(1),
      severity: 3,
    },
    [tk("ospf-basics")]: {
      topicKey: tk("ospf-basics"),
      certId: "ccna",
      reasons: ["Missed OSPF neighbor questions"],
      missedQuestionIds: [],
      missedCardIds: [],
      lastSeenAt: isoDaysAgo(2),
      severity: 2,
    },
  };

  return {
    ...emptySeed(),
    completedLessons,
    quizAttempts: [
      quizAttempt("subnetting", 2, 5, 1),
      quizAttempt("osi-model", 4, 5, 3),
      quizAttempt("ospf-basics", 1, 5, 2),
      quizAttempt("vlans", 3, 5, 4),
    ],
    weakTopics,
    lastStudyDate: daysAgo(0),
    streak: 5,
    recentActivity: [
      activity("quiz", "subnetting", "Subnetting quiz", 1, "demo-act-1"),
      activity("lesson_complete", "vlans", "VLANs lesson", 4, "demo-act-2"),
      activity("quiz", "osi-model", "OSI Model quiz", 3, "demo-act-3"),
    ],
    topicMastery,
    studyPlan: {
      examDate: daysFromNow(45),
      weeklyMinutes: 300,
      activeCertIds: ["ccna"],
      sessionMinutes: 25,
    },
    onboardingComplete: true,
  };
}

function buildFailedSubnetting(): DemoPersistedState {
  const base = buildIntermediate();
  base.topicMastery[tk("subnetting")] = mastery({
    topicId: "subnetting",
    score: 28,
    level: "learning",
    nextReviewAt: daysAgo(0),
    attemptCount: 8,
    objectiveScores: { "CCNA-1.9": 22, "CCNA-1.10": 35 },
    objectiveAttempts: { "CCNA-1.9": 8, "CCNA-1.10": 5 },
    streak: 0,
  });
  base.weakTopics[tk("subnetting")] = {
    topicKey: tk("subnetting"),
    certId: "ccna",
    reasons: ["Repeated failures on subnet calculations"],
    missedQuestionIds: ["subnetting-q1", "subnetting-q2", "subnetting-q3"],
    missedCardIds: [],
    lastSeenAt: isoDaysAgo(0),
    severity: 3,
  };
  base.quizAttempts = [
    quizAttempt("subnetting", 1, 5, 0),
    quizAttempt("subnetting", 0, 5, 1),
    quizAttempt("subnetting", 2, 5, 2),
    ...base.quizAttempts,
  ];
  base.streak = 2;
  base.lastStudyDate = daysAgo(0);
  return base;
}

function buildOverdueReviews(): DemoPersistedState {
  const base = buildIntermediate();
  const overdueTopics = ["osi-model", "ethernet", "subnetting", "vlans", "ospf-basics"] as const;
  for (const topicId of overdueTopics) {
    const existing = base.topicMastery[tk(topicId)];
    if (!existing) continue;
    base.topicMastery[tk(topicId)] = {
      ...existing,
      nextReviewAt: daysAgo(3 + Math.abs(topicId.length % 5)),
      attemptCount: Math.max(existing.attemptCount, 3),
    };
  }
  base.streak = 4;
  base.lastStudyDate = daysAgo(1);
  return base;
}

function buildDomain1Complete(): DemoPersistedState {
  const completedLessons: Record<string, true> = {};
  const topicMastery: Record<string, TopicMastery> = {};

  for (const topicId of DOMAIN1_TOPICS) {
    completedLessons[tk(topicId)] = true;
    topicMastery[tk(topicId)] = mastery({
      topicId,
      score: topicId === "subnetting" ? 75 : 82,
      level: topicId === "subnetting" ? "proficient" : "mastered",
      nextReviewAt: daysFromNow(7),
      attemptCount: 5,
    });
  }

  topicMastery[tk("subnetting")] = mastery({
    topicId: "subnetting",
    score: 75,
    level: "proficient",
    nextReviewAt: daysFromNow(5),
    objectiveScores: { "CCNA-1.9": 78, "CCNA-1.10": 72 },
    objectiveAttempts: { "CCNA-1.9": 5, "CCNA-1.10": 4 },
  });

  return {
    ...emptySeed(),
    completedLessons,
    quizAttempts: DOMAIN1_TOPICS.map((id, i) => quizAttempt(id, 4, 5, i + 1)),
    lastStudyDate: daysAgo(0),
    streak: 8,
    recentActivity: [
      activity("lesson_complete", "wireless-basics", "Wireless Basics lesson", 1, "demo-d1-1"),
      activity("quiz", "subnetting", "Subnetting quiz", 2, "demo-d1-2"),
    ],
    topicMastery,
    studyPlan: {
      examDate: daysFromNow(60),
      weeklyMinutes: 300,
      activeCertIds: ["ccna"],
      sessionMinutes: 30,
    },
    onboardingComplete: true,
  };
}

function buildExamReady(): DemoPersistedState {
  const allTopics = [...DOMAIN1_TOPICS, ...EXTRA_TOPICS];
  const completedLessons: Record<string, true> = {};
  const topicMastery: Record<string, TopicMastery> = {};

  for (const topicId of allTopics) {
    completedLessons[tk(topicId)] = true;
    topicMastery[tk(topicId)] = mastery({
      topicId,
      score: 88,
      level: "mastered",
      nextReviewAt: daysFromNow(14),
      attemptCount: 6,
      streak: 4,
      reviewIntervalDays: 14,
    });
  }

  topicMastery[tk("automation-basics")] = mastery({
    topicId: "automation-basics",
    score: 70,
    level: "proficient",
    nextReviewAt: daysFromNow(7),
    attemptCount: 3,
  });
  completedLessons[tk("automation-basics")] = true;

  return {
    ...emptySeed(),
    completedLessons,
    quizAttempts: allTopics.slice(0, 6).map((id, i) => quizAttempt(id, 5, 5, i)),
    lastStudyDate: daysAgo(0),
    streak: 14,
    recentActivity: [
      activity("quiz", "acls", "ACLs quiz", 0, "demo-er-1"),
      activity("quiz", "ospf-basics", "OSPF quiz", 1, "demo-er-2"),
    ],
    topicMastery,
    studyPlan: {
      examDate: daysFromNow(10),
      weeklyMinutes: 420,
      activeCertIds: ["ccna"],
      sessionMinutes: 45,
    },
    onboardingComplete: true,
  };
}

const BUILDERS: Record<DemoProfileId, () => DemoPersistedState> = {
  "new-learner": buildNewLearner,
  intermediate: buildIntermediate,
  "failed-subnetting": buildFailedSubnetting,
  "overdue-reviews": buildOverdueReviews,
  "domain-1-complete": buildDomain1Complete,
  "exam-ready": buildExamReady,
};

export function getDemoPersistedState(profileId: DemoProfileId): DemoPersistedState {
  return BUILDERS[profileId]();
}

/** Zustand persist JSON for localStorage key bridge-study-progress-v2 */
export function serializeDemoSeed(profileId: DemoProfileId): string {
  return JSON.stringify({
    state: getDemoPersistedState(profileId),
    version: PROGRESS_STORAGE_VERSION,
  });
}
