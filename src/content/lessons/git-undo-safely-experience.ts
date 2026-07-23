import type { TopicExperience } from "@/content/types";

/** LES — Undo safely (Git/GitHub Module 6). */
export const GIT_UNDO_SAFELY_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-undo",
      type: "hero",
      gitWorkflowStep: 2,
      headline: "Undo is layered — match the mistake.",
      body: "Unstaged edit? restore file. Staged too early? restore --staged. Bad commit locally? revert or reset carefully. Read status before any undo.",
    },
    {
      id: "restore-file",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "git restore discards local edits.",
      body: "git restore README.md drops unstaged changes to last commit. git restore --staged file.js unstages without deleting file content.",
    },
    {
      id: "revert-commit",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "git revert for shared history.",
      body: "After push, prefer git revert COMMIT — creates a new commit that undoes changes. Safer than rewrite for team repos.",
      studyTip: {
        title: "Before force",
        body: "status → log → ask if others pulled your commits",
      },
    },
    {
      id: "reset-danger",
      type: "misconception",
      gitWorkflowStep: 3,
      headline: "git reset --hard is not your first tool.",
      body: "Hard reset throws away uncommitted work. Fine on a solo experiment branch — dangerous on shared history. Status and diff first.",
    },
    {
      id: "memory-stack",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Undo stack mental model.",
      body: "Working tree → staging → commits → remote. Each layer has its own undo command. Match the layer you are fixing.",
    },
    {
      id: "undo-check",
      type: "checkpoint",
      gitWorkflowStep: 2,
      headline: "Quick check — unstaged file",
      checkpointQuestionId: "git-undo-safely-q1",
    },
    {
      id: "summary-undo",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Recover without panic.",
      body: "restore, restore --staged, revert — safe defaults. Next: resolving merge conflicts hands-on.",
    },
  ],
};
