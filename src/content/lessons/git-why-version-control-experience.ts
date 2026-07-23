import type { TopicExperience } from "@/content/types";

/** LES — Why version control exists (Git/GitHub Module 1). */
export const GIT_WHY_VERSION_CONTROL_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-problem",
      type: "hero",
      gitWorkflowStep: 1,
      headline: "Folders lie. History does not.",
      body: "You finish a project and save final-project-v2. Your teammate saves final-project-real-final. Which one is correct? Without version control, nobody knows.",
    },
    {
      id: "copy-chaos",
      type: "teach",
      gitWorkflowStep: 1,
      headline: "Copy-paste is not a system.",
      body: "Duplicating folders feels safe until you have four versions and merge them by hand. One wrong overwrite and work disappears — with no undo story.",
      media: {
        kind: "icons",
        items: [
          { icon: "folder", label: "final-project" },
          { icon: "folder", label: "…-v2" },
          { icon: "folder", label: "…-real-final" },
        ],
      },
    },
    {
      id: "one-repo",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "One project, one timeline.",
      body: "Version control keeps every change in one place with a timestamp and author. You stop guessing which folder is current — you read the history.",
      terms: [
        {
          id: "repo",
          label: "Repository",
          tier: "basics",
          shortDefinition:
            "The project folder Git tracks — files plus the full history of every change.",
        },
      ],
    },
    {
      id: "history-saves",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Every commit is a save point.",
      body: "Like a game checkpoint: you can see what changed, when, and why. Roll back to a good state instead of digging through renamed folders.",
      terms: [
        {
          id: "commit",
          label: "Commit",
          tier: "basics",
          shortDefinition:
            "A snapshot of your project at one moment — a save point with a message explaining why.",
        },
      ],
    },
    {
      id: "team-mess",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Solo today does not mean solo forever.",
      body: "Even one person benefits from history. Teams need a shared timeline — otherwise two people edit the same file and someone loses work.",
    },
    {
      id: "memory-hook",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "One repo beats many folders.",
      body: "If the filename has -final, -v2, or -fixed-again in it, you already needed Git.",
    },
    {
      id: "why-check",
      type: "checkpoint",
      gitWorkflowStep: 3,
      headline: "Quick check — why version control?",
      checkpointQuestionId: "git-why-version-control-q1",
    },
    {
      id: "summary",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You know the problem Git solves.",
      body: "Messy copies, lost work, no shared story. Next: what Git is — and what GitHub is not.",
    },
  ],
};
