import type { TopicExperience } from "@/content/types";

/** LES — Bridge capstone (Git/GitHub Module 7). */
export const GIT_BRIDGE_CAPSTONE_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-capstone",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Full workflow — branch to merge.",
      body: "This capstone runs the Bridge team flow: feature branch, meaningful commits, push, pull request, diff review, merge, pull latest.",
    },
    {
      id: "capstone-script",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Your capstone script.",
      body: "checkout -b feature/your-change → edit → status → add → commit → push -u origin branch → open PR → review diff → merge → checkout main → pull",
      studyTip: {
        title: "Bridge rule",
        body: "Branch from dev · PR into dev · never push to main",
      },
    },
    {
      id: "self-review",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Self-review before merge.",
      body: "Answer: What changed? Why a branch? What if conflict? What files must never commit? These questions prove you own the workflow.",
    },
    {
      id: "capstone-fear",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "You have done every piece before.",
      body: "Capstone is not new commands — it is one connected story. Status when stuck. You built this habit across seven modules.",
    },
    {
      id: "cheat-sheet",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Capstone without copy-paste cheat sheet.",
      body: "Goal: run the flow from memory with status as safety net. Notes are fine — blind paste from Google is not the skill employers want.",
    },
    {
      id: "capstone-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — capstone flow",
      checkpointQuestionId: "git-bridge-capstone-q1",
    },
    {
      id: "summary-capstone",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Git is how you work on real projects.",
      body: "Complete the Bridge Capstone lab — real repo, real PR, real review. You graduate when the workflow feels like safety, not fear.",
    },
  ],
};
