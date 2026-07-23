import type { TopicExperience } from "@/content/types";

/** LES — Branching basics (Git/GitHub Module 3). */
export const GIT_BRANCHING_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-branch",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Branches are cheap experiments.",
      body: "A branch is a movable label on your timeline. Try ideas on a feature branch while main stays stable — switch back anytime.",
    },
    {
      id: "main-clean",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Keep main stable.",
      body: "main (or master) holds production-ready work. Create feature branches for experiments, fixes, or new sections — merge only when ready.",
    },
    {
      id: "switch-branch",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Create and switch branches.",
      body: "git branch lists branches. git checkout -b add-notes creates and switches. git switch works too on modern Git. Status shows which branch you are on.",
      laterLearn: ["git merge", "git pull request"],
    },
    {
      id: "duplicate-universe",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "A branch is not a full copy of your disk.",
      body: "Branches share history until they diverge. Git stores differences efficiently — creating a branch is nearly instant, not a folder duplication.",
    },
    {
      id: "memory-label",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Branch = label, not panic.",
      body: "Wrong branch? git status tells you where you are. Switch branches — uncommitted changes may need stashing or committing first.",
    },
    {
      id: "branch-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — why branch?",
      checkpointQuestionId: "git-branching-basics-q1",
    },
    {
      id: "summary-branch",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Experiment without fear.",
      body: "Branch for new work. Keep main clean. Next: merging feature work back into main.",
    },
  ],
};
