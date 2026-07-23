import type { TopicExperience } from "@/content/types";

/** LES — Conflicts intro (Git/GitHub Module 3). */
export const GIT_CONFLICTS_INTRO_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-conflict",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Conflicts mean Git needs your judgment.",
      body: "When two changes touch the same lines, Git stops and marks the file. It is not broken — it is asking you to pick the correct content.",
    },
    {
      id: "markers",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Recognize conflict markers.",
      body: "Look for <<<<<<<, =======, and >>>>>>> in files. They bracket yours vs theirs. Edit the file to one correct version, remove markers, then add and commit.",
    },
    {
      id: "pause-read",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Pause — status first.",
      body: "Conflict during merge? Run git status. It lists conflicted files. Do not panic-reset — read markers and fix deliberately.",
    },
    {
      id: "conflict-broken",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "A conflict is not data loss.",
      body: "Both versions are still in the file inside markers. Nothing is silently deleted — you choose what stays before completing the merge.",
    },
    {
      id: "when-happens",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "When conflicts appear.",
      body: "Same line edited on two branches, then merged. Pulling remote changes can conflict too. Small teams hit this regularly — it is normal.",
    },
    {
      id: "conflict-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — conflict markers",
      checkpointQuestionId: "git-conflicts-intro-q1",
    },
    {
      id: "summary-conflict",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Conflicts are solvable puzzles.",
      body: "Markers show both sides. Edit, stage, commit to finish. Complete the Branches lab — branch, merge, and verify history.",
    },
  ],
};
