import type { TopicExperience } from "@/content/types";

/** LES — Git vs GitHub (Git/GitHub Module 1). */
export const GIT_VS_GITHUB_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-split",
      type: "hero",
      gitWorkflowStep: 2,
      headline: "Git and GitHub are not the same thing.",
      body: "Git is a tool on your computer. GitHub is a website that hosts Git repos online. You can use Git without GitHub — but teams usually want both.",
    },
    {
      id: "git-local",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "Git lives on your machine.",
      body: "Git tracks changes locally: commits, branches, history. It works offline in a folder on your laptop. No account required to learn the basics.",
      terms: [
        {
          id: "git",
          label: "Git",
          tier: "basics",
          shortDefinition:
            "Version control software on your computer — tracks files, commits, and branches locally.",
        },
      ],
    },
    {
      id: "github-remote",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "GitHub hosts repos on the internet.",
      body: "GitHub stores a copy of your repo online so others can clone, review, and collaborate. Push sends your commits up; pull brings others' work down.",
      terms: [
        {
          id: "github",
          label: "GitHub",
          tier: "basics",
          shortDefinition:
            "A hosting platform for Git repositories — collaboration, pull requests, and backups in the cloud.",
        },
        {
          id: "remote",
          label: "Remote",
          tier: "later",
          shortDefinition:
            "A copy of your repo hosted elsewhere — usually on GitHub. You sync with push and pull in Module 4.",
        },
      ],
    },
    {
      id: "not-same",
      type: "misconception",
      gitWorkflowStep: 2,
      headline: "Installing GitHub Desktop is not the same as understanding Git.",
      body: "Apps wrap Git commands in buttons — the ideas stay the same: commit, branch, push. Learn the workflow first; tools second.",
    },
    {
      id: "analogy",
      type: "analogy",
      gitWorkflowStep: 4,
      headline: "Git is the engine. GitHub is the garage.",
      body: "Git does the tracking. GitHub is where you park a copy so your team can access it, review changes, and keep backups.",
    },
    {
      id: "vs-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — Git vs GitHub",
      checkpointQuestionId: "git-vs-github-q1",
    },
    {
      id: "summary",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Clear on the split.",
      body: "Git = local version control. GitHub = online collaboration host. Next: why Git feels scary — and why it shouldn't.",
    },
  ],
};
