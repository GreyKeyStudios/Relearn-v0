import type { TopicExperience } from "@/content/types";

/** LES — Repos and commits (Git/GitHub Module 2). */
export const GIT_REPOS_AND_COMMITS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-repo",
      type: "hero",
      gitWorkflowStep: 1,
      headline: "A repo is one project with a memory.",
      body: "Git does not track random folders on your drive — it tracks a repository: your project files plus every save point you create.",
    },
    {
      id: "init-hidden",
      type: "teach",
      gitWorkflowStep: 1,
      headline: "git init turns a folder into a repo.",
      body: "Run git init inside your project folder. Git creates a hidden .git directory that stores history. Your files stay visible; history lives in .git.",
      terms: [
        {
          id: "working-tree",
          label: "Working tree",
          tier: "basics",
          shortDefinition:
            "The files you edit in your project folder — the live copy Git watches for changes.",
        },
      ],
    },
    {
      id: "commit-save",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Commits are local save points.",
      body: "After you stage changes, git commit records a snapshot with a message. Commits stay on your machine until you push — nothing goes online automatically.",
      studyTip: {
        title: "First commands",
        body: "git init → edit files → git add → git commit",
      },
    },
    {
      id: "not-backup",
      type: "misconception",
      gitWorkflowStep: 2,
      headline: "A repo is not a cloud backup.",
      body: "git init only creates local history. You still need remotes and pushes for off-machine backup — but local commits are safe save points on your PC.",
    },
    {
      id: "memory-dotgit",
      type: "memory",
      gitWorkflowStep: 1,
      headline: "Never delete .git casually.",
      body: "The .git folder is your entire history. Deleting it turns the folder back into an ordinary directory with no timeline.",
    },
    {
      id: "repo-check",
      type: "checkpoint",
      gitWorkflowStep: 3,
      headline: "Quick check — what is a commit?",
      checkpointQuestionId: "git-repos-and-commits-q1",
    },
    {
      id: "summary-repo",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "You can start a repo and save work.",
      body: "git init creates a repo. Commits record snapshots locally. Next: staging and git status — your home base before every commit.",
    },
  ],
};
