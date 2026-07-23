/** Future auth persona label only — not used for login. */
export const DEMO_PERSONA_LABEL = "demo@greykeystudios.dev";

export const DEMO_ACTIVE_PROFILE_KEY = "bridge-demo-profile";

export type DemoProfileId =
  | "new-learner"
  | "intermediate"
  | "failed-subnetting"
  | "overdue-reviews"
  | "domain-1-complete"
  | "exam-ready";

export interface DemoProfileMeta {
  id: DemoProfileId;
  label: string;
  description: string;
}

export const DEMO_PROFILE_META: DemoProfileMeta[] = [
  {
    id: "new-learner",
    label: "New learner",
    description: "Empty progress, streak 0 — first-time experience",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    description: "Mixed mastery ~60%, active streak, some weak objectives",
  },
  {
    id: "failed-subnetting",
    label: "Failed subnetting",
    description: "Low CCNA-1.9 scores with enough attempts to coach",
  },
  {
    id: "overdue-reviews",
    label: "Overdue reviews",
    description: "Multiple topics with nextReviewAt in the past",
  },
  {
    id: "domain-1-complete",
    label: "Domain 1 complete",
    description: "Network Fundamentals lessons complete with solid scores",
  },
  {
    id: "exam-ready",
    label: "Exam ready",
    description: "High mastery, thin weak list, exam date soon",
  },
];

export function isDemoProfileId(value: string): value is DemoProfileId {
  return DEMO_PROFILE_META.some((m) => m.id === value);
}
