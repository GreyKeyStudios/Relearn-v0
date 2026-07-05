import type { TopicExperience } from "@/content/types";

/** LES — Pull requests (Git/GitHub Module 5). */
export const GIT_PULL_REQUESTS_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-pr",
      type: "hero",
      gitWorkflowStep: 4,
      headline: "Pull requests are review before merge.",
      body: "Push a feature branch, open a PR on GitHub, review the diff line by line, then merge. Mistakes get caught before they hit main.",
    },
    {
      id: "pr-flow",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Branch → push → PR → merge.",
      body: "Never commit directly to main on teams. Branch locally, push the branch, open PR into main or dev, discuss, merge via GitHub UI.",
    },
    {
      id: "review-diff",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Review your own diff first.",
      body: "The Files changed tab shows every line. Read it like a reviewer — typos, secrets, unrelated edits. Self-review is professional habit.",
    },
    {
      id: "pr-not-pull",
      type: "misconception",
      gitWorkflowStep: 4,
      headline: "A PR is not git pull.",
      body: "git pull fetches remote changes. A pull request is a GitHub feature asking to merge your branch — conversation plus code review.",
    },
    {
      id: "memory-bridge",
      type: "memory",
      gitWorkflowStep: 4,
      headline: "Same flow as Bridge team.",
      body: "Branch from dev, PR into dev, never push to main. You are learning the workflow real projects use daily.",
    },
    {
      id: "pr-check",
      type: "checkpoint",
      gitWorkflowStep: 4,
      headline: "Quick check — why PRs?",
      checkpointQuestionId: "git-pull-requests-q1",
    },
    {
      id: "summary-pr",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Collaborate with review.",
      body: "PRs protect main and teach review skills. Next: commit messages that help reviewers understand why.",
    },
  ],
};
