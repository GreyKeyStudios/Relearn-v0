import type { TopicExperience } from "@/content/types";

/** LES — Remotes explained (Git/GitHub Module 4). */
export const GIT_REMOTES_EXPLAINED_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-remote",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Local repo, remote backup.",
      body: "Your commits live on your machine first. A remote — usually on GitHub — is another copy for backup, sharing, and collaboration.",
    },
    {
      id: "origin",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "origin is the default remote name.",
      body: "git remote -v lists URLs. origin typically points to your GitHub repo. You can have multiple remotes, but one is enough to start.",
      terms: [
        {
          id: "remote",
          label: "Remote",
          tier: "basics",
          shortDefinition:
            "A named link to a repository hosted elsewhere — usually origin on GitHub.",
        },
      ],
    },
    {
      id: "push-pull",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Push up, pull down.",
      body: "git push sends your commits to the remote. git pull fetches and merges remote changes into your local branch. They are separate from commit.",
    },
    {
      id: "remote-deletes",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Push does not delete local work.",
      body: "Pushing copies commits upstream. Your local repo keeps full history. Pulling updates you — it does not wipe your machine by default.",
    },
    {
      id: "memory-conversation",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Remote is a conversation.",
      body: "Push when your local work is ready to share. Pull before you push if teammates may have updated the remote — stay in sync.",
    },
    {
      id: "remote-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — remotes",
      checkpointQuestionId: "git-remotes-explained-q1",
    },
    {
      id: "summary-remote",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You understand local vs remote.",
      body: "Remotes backup and share. Next: clone, push, and pull — connect hello-bridge to GitHub.",
    },
  ],
};
