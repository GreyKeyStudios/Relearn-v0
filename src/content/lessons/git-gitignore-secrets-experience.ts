import type { TopicExperience } from "@/content/types";

/** LES — .gitignore and secrets (Git/GitHub Module 5). */
export const GIT_GITIGNORE_SECRETS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-secrets",
      type: "hero",
      gitWorkflowStep: 2,
      headline: "Committed secrets stay in history.",
      body: "API keys, .env files, and passwords in Git are nearly impossible to fully erase. Prevent commits — never fix after push if you can avoid it.",
    },
    {
      id: "gitignore",
      type: "teach",
      gitWorkflowStep: 2,
      headline: ".gitignore blocks files from staging.",
      body: "Add patterns like .env, *.key, node_modules/ to .gitignore. Git skips ignored files on git add . — but already-tracked files need git rm --cached.",
    },
    {
      id: "env-trap",
      type: "misconception",
      gitWorkflowStep: 2,
      headline: "Private repo is not secret-safe.",
      body: "Anyone with repo access sees history. Bots scan GitHub for leaked keys. Treat every commit as public forever — ignore secrets before first add.",
    },
    {
      id: "check-status",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Status before commit — always.",
      body: "git status shows staged files. If .env appears, unstage with git restore --staged .env and add it to .gitignore before committing.",
    },
    {
      id: "common-patterns",
      type: "teach",
      gitWorkflowStep: 2,
      headline: "Common ignore patterns.",
      body: "node_modules/, .env, *.log, __pycache__/, .DS_Store, build/ — match your stack. Commit .gitignore itself so the team shares rules.",
    },
    {
      id: "ignore-check",
      type: "checkpoint",
      gitWorkflowStep: 2,
      headline: "Quick check — secrets",
      checkpointQuestionId: "git-gitignore-secrets-q1",
    },
    {
      id: "summary-ignore",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Keep secrets out of Git.",
      body: ".gitignore early, status before commit. Complete the Pull Request lab — full team workflow with safe staging.",
    },
  ],
};
