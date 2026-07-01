import type { TopicExperience } from "@/content/types";

/** LES — Git fear removal intro (Git/GitHub Module 1). */
export const GIT_FEAR_REMOVAL_INTRO_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-fear",
      type: "hero",
      gitWorkflowStep: 1,
      headline: "Git feels dangerous until you know the safety rails.",
      body: "Beginners worry one wrong command deletes everything. Reality: Git warns you often, and most mistakes are fixable when you pause and read.",
    },
    {
      id: "status-home",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "git status is your home base.",
      body: "Lost or nervous? Run git status first. It shows which branch you are on and what changed — before you commit, push, or merge.",
      studyTip: {
        title: "When stuck",
        body: "Status → log → diff. Read before you react.",
      },
    },
    {
      id: "commits-save",
      type: "memory",
      gitWorkflowStep: 3,
      headline: "Commits are save points, not detonators.",
      body: "A commit records a snapshot. It does not publish to the internet. Push is a separate step — you choose when to share.",
    },
    {
      id: "branches-safety",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Branches are cheap experiments.",
      body: "Try ideas on a branch without touching main. Bad experiment? Switch back. Main stays clean until you deliberately merge good work.",
      laterLearn: ["git branch", "git checkout", "git merge"],
    },
    {
      id: "warns-you",
      type: "misconception",
      gitWorkflowStep: 1,
      headline: "Git usually warns before real danger.",
      body: "Destructive commands often need extra flags or confirmation. If Git refuses an action, that is protection — not punishment. Read the message.",
    },
    {
      id: "fear-check",
      type: "checkpoint",
      gitWorkflowStep: 2,
      headline: "Quick check — first move when nervous",
      checkpointQuestionId: "git-fear-removal-intro-q1",
    },
    {
      id: "summary-lab",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Ready for your first lab — no terminal yet.",
      body: "You do not need commands memorized today. Complete the Spot the Version-Control Problem lab — explain the folder mess and how Git would fix it.",
    },
  ],
};
