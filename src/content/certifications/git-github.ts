import type { Certification } from "../types";
import { GIT_WHY_VERSION_CONTROL_EXPERIENCE } from "@/content/lessons/git-why-version-control-experience";
import { GIT_VS_GITHUB_EXPERIENCE } from "@/content/lessons/git-vs-github-experience";
import { GIT_FEAR_REMOVAL_INTRO_EXPERIENCE } from "@/content/lessons/git-fear-removal-intro-experience";

/** Git & GitHub Foundations — ReLearn skills track (Path A cert shell). */
export const gitGithub: Certification = {
  id: "git-github",
  name: "Git & GitHub Foundations",
  shortName: "Git/GitHub",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum — not a vendor exam. Learn why version control exists, how Git tracks changes locally, how GitHub enables collaboration, and how to work without fear. Module 2 onward adds real terminal commands.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + capstone",
    format: "Hands-on labs and workflow practice",
  },
  domains: [
    {
      id: "version-control-foundations",
      name: "Module 1 — Why Version Control",
      topics: [
        {
          id: "git-why-version-control",
          name: "Why Version Control",
          lesson: {
            title: "Why Version Control Exists",
            content: `Before Git commands, understand the problem. Copying folders — final-project, final-project-v2, final-project-real-final — is not version control. It is chaos with polite names.

Version control gives you one project timeline: who changed what, when, and why. Every commit is a save point you can inspect or return to. Teams share that timeline instead of emailing zip files.

This module is conceptual — no terminal required yet. You will spot the folder problem, then learn what Git and GitHub actually are.`,
            experience: GIT_WHY_VERSION_CONTROL_EXPERIENCE,
          },
          keyFacts: [
            "Copying folders is not version control — history gets lost",
            "A repository is one project with a full change timeline",
            "Commits are save points with messages explaining why",
            "Version control helps solo work and is essential for teams",
          ],
          quiz: [
            {
              id: "git-why-version-control-q1",
              prompt: "What problem does version control solve first?",
              choices: [
                { id: "a", text: "Making Wi-Fi faster" },
                { id: "b", text: "Tracking who changed what and when" },
                { id: "c", text: "Replacing the need for backups entirely" },
                { id: "d", text: "Compiling Python scripts" },
              ],
              correctChoiceId: "b",
              explanation:
                "Version control records a timeline of changes — author, time, and content — so you stop guessing which copy is current.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "git-why-version-control-f1",
              front: "Why not just copy the project folder?",
              back: "Copies multiply, history is lost, and nobody knows which version is authoritative",
            },
            {
              id: "git-why-version-control-f2",
              front: "What is a commit?",
              back: "A save point — a snapshot of the project with a message explaining why",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
        {
          id: "git-vs-github",
          name: "Git vs GitHub",
          prerequisites: ["git-why-version-control"],
          lesson: {
            title: "Git vs GitHub",
            content: `Git is software on your computer that tracks file changes, branches, and history. It works offline. GitHub is a website that hosts Git repositories online for backup and collaboration.

You can use Git without GitHub. Most teams use both: Git for local work, GitHub (or similar) for sharing, pull requests, and review.

Do not conflate them on interviews or in conversation — exam-style confusion is a common beginner trap.`,
            experience: GIT_VS_GITHUB_EXPERIENCE,
          },
          keyFacts: [
            "Git is local version control software",
            "GitHub is a hosting platform for Git repositories",
            "Push sends commits to a remote; pull brings remote changes down",
            "Git works offline; remotes require network access",
          ],
          quiz: [
            {
              id: "git-vs-github-q1",
              prompt: "Which statement is correct?",
              choices: [
                { id: "a", text: "GitHub is another name for Git" },
                { id: "b", text: "Git runs locally; GitHub hosts repos online" },
                { id: "c", text: "You must have GitHub to use Git" },
                { id: "d", text: "Git only works inside a web browser" },
              ],
              correctChoiceId: "b",
              explanation: "Git is the version control tool on your machine. GitHub is a remote hosting service for Git repos.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "git-vs-github-f1",
              front: "Git vs GitHub in one line?",
              back: "Git = local version control · GitHub = online repo hosting",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
        },
        {
          id: "git-fear-removal-intro",
          name: "Git Without Fear",
          prerequisites: ["git-vs-github"],
          lesson: {
            title: "Git Without Fear",
            content: `Many beginners avoid Git because one command feels like it could destroy a project. In practice, Git is designed with safety rails: status before action, branches for experiments, commits as local save points until you push.

Your habit stack: git status when lost, git log for the story, git diff before committing. Branches let you experiment without touching main. Destructive operations usually require explicit flags — read the message Git prints.

Module 2 will introduce real commands. This lesson builds confidence first.`,
            experience: GIT_FEAR_REMOVAL_INTRO_EXPERIENCE,
          },
          keyFacts: [
            "Run git status first when unsure",
            "Commits are local save points until you push",
            "Branches are cheap safety copies for experiments",
            "Git often warns before destructive actions",
          ],
          quiz: [
            {
              id: "git-fear-removal-intro-q1",
              prompt: "You feel lost in Git. What should you run first?",
              choices: [
                { id: "a", text: "git push --force" },
                { id: "b", text: "git status" },
                { id: "c", text: "Delete the .git folder" },
                { id: "d", text: "Rename every file manually" },
              ],
              correctChoiceId: "b",
              explanation: "git status shows your branch and what changed — the safe home base before any other command.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "git-fear-removal-intro-f1",
              front: "Lost in Git — first command?",
              back: "git status",
            },
            {
              id: "git-fear-removal-intro-f2",
              front: "Are commits instantly on the internet?",
              back: "No — push is a separate step that sends commits to a remote",
            },
          ],
          externalResources: [
            {
              id: "notes-any",
              name: "Notes app or paper",
              url: "https://docs.github.com",
              cost: "free",
              platform: "any",
              installNotes: "Any text editor, notes app, or paper works — no Git install required for this lab.",
            },
          ],
          assignments: [
            {
              id: "git-lab-spot-vc-problem",
              title: "Spot the Version-Control Problem",
              type: "external-lab",
              instructions: `Scenario: A team shared a project using only folder copies:

• final-project
• final-project-v2
• final-project-real-final
• final-project-fixed-again

In your notes app or on paper:

1. List at least two problems this approach causes (hint: which file is current? who changed what?).
2. Explain how a single Git repository with commits would replace the folder chaos.
3. Name one thing Git history tells you that folder names cannot.

No terminal or Git install required — this is a thinking exercise before Module 2 commands.`,
              estimatedMinutes: 15,
              externalResourceId: "notes-any",
              completionCriteria: [
                "Named at least two problems with duplicate folder naming",
                "Explained how one repo with commits replaces multiple folders",
                "Identified one advantage of Git history over folder names",
              ],
              relatedTopicIds: [
                "git-why-version-control",
                "git-vs-github",
                "git-fear-removal-intro",
              ],
              order: 1,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
      ],
    },
  ],
};
