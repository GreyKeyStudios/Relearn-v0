import type { TopicExperience } from "@/content/types";

/** LES — Staging and status (Git/GitHub Module 2). */
export const GIT_STAGING_AND_STATUS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-status",
      type: "hero",
      gitWorkflowStep: 2,
      headline: "git status is your home base.",
      body: "Before add, commit, or merge — run git status. It shows your branch, changed files, and what is staged vs unstaged.",
    },
    {
      id: "three-states",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "Modified, staged, committed.",
      body: "Edit a file and it is modified. git add moves it to staged — ready for the next commit. git commit moves staged files into history.",
      terms: [
        {
          id: "staging-area",
          label: "Staging area",
          tier: "basics",
          shortDefinition:
            "The holding zone between your edits and a commit — git add puts files here.",
        },
      ],
    },
    {
      id: "add-selective",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "Stage on purpose, not by accident.",
      body: "git add README.md stages one file. git add . stages everything changed. Review status before commit so unrelated files do not sneak in.",
    },
    {
      id: "commit-empty",
      type: "misconception",
      gitWorkflowStep: 3,
      headline: "Saving a file is not committing.",
      body: "Your editor saves to disk. Git only records a commit after git add and git commit. Uncommitted work can still be lost if you delete files.",
    },
    {
      id: "memory-status-first",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Lost? Status first.",
      body: "Nervous about what will happen? git status shows exactly what Git sees — read it before every commit.",
    },
    {
      id: "staging-check",
      type: "checkpoint",
      gitWorkflowStep: 2,
      headline: "Quick check — staging",
      checkpointQuestionId: "git-staging-and-status-q1",
    },
    {
      id: "summary-staging",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You control what goes into each commit.",
      body: "Status shows state. Add stages. Commit saves. Next: git log and git diff — read the story of your project.",
    },
  ],
};
