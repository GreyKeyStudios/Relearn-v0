import type { TopicExperience } from "@/content/types";

/** LES — History and diff (Git/GitHub Module 2). */
export const GIT_HISTORY_AND_DIFF_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-history",
      type: "hero",
      gitWorkflowStep: 3,
      headline: "History tells the story of your project.",
      body: "Every commit has an ID, author, date, and message. git log shows that timeline — your undo map and audit trail.",
    },
    {
      id: "log-oneline",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "git log --oneline for a quick scan.",
      body: "Short hashes plus messages give you a compact timeline. git log alone shows full details when you need them.",
      studyTip: {
        title: "Habit stack",
        body: "status → log → diff before you commit or merge",
      },
    },
    {
      id: "diff-preview",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "git diff shows what changed.",
      body: "Before committing, git diff shows unstaged edits. git diff --staged shows what you already added. Read diffs — do not commit blind.",
    },
    {
      id: "hash-meaning",
      type: "memory",
      gitWorkflowStep: 3,
      headline: "Commit IDs are fingerprints.",
      body: "Each commit hash uniquely identifies one snapshot. You rarely type full hashes — copy from log when you need one.",
    },
    {
      id: "log-overwhelm",
      type: "misconception",
      gitWorkflowStep: 3,
      headline: "Long log output is normal.",
      body: "Many commits means Git is working. Use --oneline, -n 5, or a GUI — the full log is not meant to be read top to bottom every time.",
    },
    {
      id: "history-check",
      type: "checkpoint",
      gitWorkflowStep: 3,
      headline: "Quick check — before committing",
      checkpointQuestionId: "git-history-and-diff-q1",
    },
    {
      id: "summary-history",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Read before you record.",
      body: "Log shows what happened. Diff shows what will happen next. Complete the Local Git Basics lab — init, commit, log on your machine.",
    },
  ],
};
