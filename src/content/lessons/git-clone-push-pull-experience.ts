import type { TopicExperience } from "@/content/types";

/** LES — Clone, push, pull (Git/GitHub Module 4). */
export const GIT_CLONE_PUSH_PULL_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-clone",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Clone starts a project on a new machine.",
      body: "git clone URL downloads the repo plus full history. You get origin set automatically — ready to pull updates and push commits.",
    },
    {
      id: "first-push",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Connect local repo to GitHub.",
      body: "Create empty repo on GitHub. git remote add origin URL, then git push -u origin main. -u remembers the upstream branch for future pushes.",
      studyTip: {
        title: "Sync habit",
        body: "pull before push when working with others",
      },
    },
    {
      id: "pull-sync",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Pull keeps you current.",
      body: "After someone else pushes, git pull on your machine merges their commits. Always status after pull — resolve conflicts if Git stops.",
    },
    {
      id: "clone-vs-download",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "Download ZIP is not clone.",
      body: "ZIP gives files without .git history. Clone gives a full repo — branches, log, remotes. Professional work always uses clone.",
    },
    {
      id: "memory-rejected",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Push rejected? Pull first.",
      body: "Non-fast-forward means remote has commits you lack. git pull, fix conflicts if any, then push again — do not force-push as a beginner.",
    },
    {
      id: "clone-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — sync commands",
      checkpointQuestionId: "git-clone-push-pull-q1",
    },
    {
      id: "summary-clone",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Local and GitHub stay in sync.",
      body: "Clone, push, pull — the remote workflow. Complete the GitHub Remote lab on your machine.",
    },
  ],
};
