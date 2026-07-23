import type { TopicExperience } from "@/content/types";

/** LES — Merge conflicts (Git/GitHub Module 6). */
export const GIT_MERGE_CONFLICTS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-resolve",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Resolve conflicts step by step.",
      body: "Git stops the merge and marks files. Open each file, pick correct content, remove markers, git add, git commit. No shortcuts — read every hunk.",
    },
    {
      id: "resolve-steps",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "The resolution workflow.",
      body: "1. git status — see conflicted files. 2. Edit markers. 3. git add each fixed file. 4. git commit to complete merge.",
    },
    {
      id: "abort-option",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "git merge --abort escapes cleanly.",
      body: "Overwhelmed mid-merge? merge --abort returns to pre-merge state. Fix approach on a branch, try again — better than half-resolved files.",
    },
    {
      id: "both-keep",
      type: "memory",
      gitWorkflowStep: 4,
      headline: "Sometimes keep both changes.",
      body: "Conflict does not mean pick one side blindly. Merge both features if both belong — delete markers, combine logic carefully.",
    },
    {
      id: "markers-left",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Leaving markers breaks the build.",
      body: "Committing with <<<<<<< in the file ships broken code. Search for markers before add — editors often highlight them.",
    },
    {
      id: "resolve-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — after editing markers",
      checkpointQuestionId: "git-merge-conflicts-q1",
    },
    {
      id: "summary-resolve",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You can finish a conflicted merge.",
      body: "Status, edit, add, commit — or abort and retry. Next: when not to panic — wrong branch and early push.",
    },
  ],
};
