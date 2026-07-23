import type { TopicExperience } from "@/content/types";

/** LES — Merge basics (Git/GitHub Module 3). */
export const GIT_MERGE_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-merge",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Merge brings branch work home.",
      body: "When a feature is ready, switch to main and git merge feature-branch. Git combines histories — one timeline again.",
    },
    {
      id: "merge-steps",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Merge workflow in order.",
      body: "Checkout main → git merge add-notes → verify with git log --oneline. The merge commit records that branches joined.",
      studyTip: {
        title: "Before merge",
        body: "Commit or stash on the feature branch first — clean working tree",
      },
    },
    {
      id: "fast-forward",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Fast-forward vs merge commit.",
      body: "If main had no new commits, merge may fast-forward — just move the pointer. Otherwise Git creates a merge commit combining both lines.",
    },
    {
      id: "merge-delete",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Merging does not delete your work.",
      body: "Merge combines changes into the target branch. The feature branch still exists until you delete it — history is preserved.",
    },
    {
      id: "memory-verify",
      type: "memory",
      gitWorkflowStep: 3,
      headline: "Always verify after merge.",
      body: "Run git log --oneline and git status after merging. Confirm files look right before pushing or opening a PR.",
    },
    {
      id: "merge-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — merge target",
      checkpointQuestionId: "git-merge-basics-q1",
    },
    {
      id: "summary-merge",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You can combine branch work.",
      body: "Checkout main, merge feature branch, verify log. Next: what happens when two people edit the same line — conflict markers.",
    },
  ],
};
