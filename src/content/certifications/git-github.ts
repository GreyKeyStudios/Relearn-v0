import type { Certification, ExternalResource } from "../types";
import { GIT_WHY_VERSION_CONTROL_EXPERIENCE } from "@/content/lessons/git-why-version-control-experience";
import { GIT_VS_GITHUB_EXPERIENCE } from "@/content/lessons/git-vs-github-experience";
import { GIT_FEAR_REMOVAL_INTRO_EXPERIENCE } from "@/content/lessons/git-fear-removal-intro-experience";
import { GIT_REPOS_AND_COMMITS_EXPERIENCE } from "@/content/lessons/git-repos-and-commits-experience";
import { GIT_STAGING_AND_STATUS_EXPERIENCE } from "@/content/lessons/git-staging-and-status-experience";
import { GIT_HISTORY_AND_DIFF_EXPERIENCE } from "@/content/lessons/git-history-and-diff-experience";
import { GIT_BRANCHING_BASICS_EXPERIENCE } from "@/content/lessons/git-branching-basics-experience";
import { GIT_MERGE_BASICS_EXPERIENCE } from "@/content/lessons/git-merge-basics-experience";
import { GIT_CONFLICTS_INTRO_EXPERIENCE } from "@/content/lessons/git-conflicts-intro-experience";
import { GIT_REMOTES_EXPLAINED_EXPERIENCE } from "@/content/lessons/git-remotes-explained-experience";
import { GIT_CLONE_PUSH_PULL_EXPERIENCE } from "@/content/lessons/git-clone-push-pull-experience";
import { GIT_PULL_REQUESTS_EXPERIENCE } from "@/content/lessons/git-pull-requests-experience";
import { GIT_COMMIT_MESSAGES_EXPERIENCE } from "@/content/lessons/git-commit-messages-experience";
import { GIT_GITIGNORE_SECRETS_EXPERIENCE } from "@/content/lessons/git-gitignore-secrets-experience";
import { GIT_UNDO_SAFELY_EXPERIENCE } from "@/content/lessons/git-undo-safely-experience";
import { GIT_MERGE_CONFLICTS_EXPERIENCE } from "@/content/lessons/git-merge-conflicts-experience";
import { GIT_WHEN_NOT_TO_PANIC_EXPERIENCE } from "@/content/lessons/git-when-not-to-panic-experience";
import { GIT_BRIDGE_CAPSTONE_EXPERIENCE } from "@/content/lessons/git-bridge-capstone-experience";

const LOCAL_GIT_RESOURCE: ExternalResource = {
  id: "local-git",
  name: "Local Git",
  url: "https://git-scm.com/downloads",
  cost: "free",
  platform: "any",
  installNotes:
    "Install Git. GitHub account optional until Module 4. Windows: Git for Windows or winget install Git.Git.",
};

const GITHUB_FREE_RESOURCE: ExternalResource = {
  id: "github-free",
  name: "GitHub",
  url: "https://github.com",
  cost: "free",
  platform: "any",
  installNotes: "Create a free GitHub account before Module 4 remotes and pull-request labs.",
};

const NOTES_ANY_RESOURCE: ExternalResource = {
  id: "notes-any",
  name: "Notes app or paper",
  url: "https://docs.github.com",
  cost: "free",
  platform: "any",
  installNotes: "Any text editor, notes app, or paper works — no Git install required for this lab.",
};

/** Git & GitHub Foundations — ReLearn skills track (Path A cert shell). */
export const gitGithub: Certification = {
  id: "git-github",
  name: "Git & GitHub Foundations",
  shortName: "Git/GitHub",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum — not a vendor exam. Seven modules take you from why version control exists through local Git commands, branches, GitHub remotes, professional pull-request workflow, recovery skills, and a Bridge capstone PR. Each procedural topic includes guided examples, Break It / Fix It labs, and workplace traps — built for beginners who want Git to feel like a safety system, not a trap.",
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
          objectives: ["GIT-M01-O1","GIT-M01-O2","GIT-M01-O3"],
          lesson: {
            title: "Why Version Control Exists",
            content: `Before Git commands, understand the problem. Copying folders — final-project, final-project-v2, final-project-real-final — is not version control. It is chaos with polite names. Nobody knows which copy is authoritative, who changed what, or when a bug was introduced.

Version control gives you one project timeline: who changed what, when, and why. Every commit is a save point you can inspect or return to. Teams share that timeline instead of emailing zip files or fighting over shared drives.

A repository is one project with a full change history. Commits are snapshots with messages explaining intent — not just filenames like v3-fixed. You can compare any two points in time, blame a line on a person and date, and roll back without guessing which folder was good.

This skill applies everywhere: Python scripts, network configs, lab writeups, documentation, and Bridge content. Solo developers benefit from save points; teams require shared history and review.

This module is conceptual — no terminal required yet. You will spot the folder problem, distinguish Git from GitHub, and build confidence before Module 2 introduces real commands. Notice repeatable work on your own projects: any task where you duplicate folders to feel safe is a version-control candidate.`,
            experience: GIT_WHY_VERSION_CONTROL_EXPERIENCE,
          },
          keyFacts:           [
            "Copying folders is not version control — history gets lost",
            "A repository is one project with a full change timeline",
            "Commits are save points with messages explaining why",
            "Version control helps solo work and is essential for teams",
            "Blame and diff replace guessing which copy is current"
          ],
          guidedExample: {
            title: "Spot the Folder Problem",
            steps:             [
              "List three folder names a team might use without Git: final, final-v2, final-real.",
              "Ask: which file is authoritative? Who edited line 42 last Tuesday?",
              "Note that folder names cannot answer those questions — only history can.",
              "Imagine one repo where git log shows every change with author and message.",
              "Write one sentence: what problem does a timeline solve that folders cannot?"
            ],
          },
          commonMistakes:           [
            "Renaming folders instead of recording incremental commits",
            "Assuming cloud sync replaces version control — sync is not history",
            "Keeping only the latest zip backup without change messages"
          ],
          examTraps:           [
            "Coworkers say Google Drive is enough — Drive lacks commit messages and blame",
            "Thinking version control is only for programmers — docs and configs need it too",
            "Believing backups replace VCS — backups do not explain why a change happened"
          ],
          realWorldScenario: "Eight interns edit the same onboarding doc via email attachments. Three versions exist by Friday. With Git, one file, one history — git log shows who added which section and when.",
          quiz:           [
            {
              "id": "git-why-version-control-q1",
              "prompt": "What problem does version control solve first?",
              "choices": [
                {
                  "id": "a",
                  "text": "Making Wi-Fi faster"
                },
                {
                  "id": "b",
                  "text": "Tracking who changed what and when"
                },
                {
                  "id": "c",
                  "text": "Replacing backups entirely"
                },
                {
                  "id": "d",
                  "text": "Compiling Python scripts"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Version control records a timeline of changes — author, time, and content.",
              "difficulty": "easy"
            },
            {
              "id": "git-why-version-control-q2",
              "prompt": "Copying folders fails because:",
              "choices": [
                {
                  "id": "a",
                  "text": "Too colorful"
                },
                {
                  "id": "b",
                  "text": "No shared timeline"
                },
                {
                  "id": "c",
                  "text": "Illegal on Mac"
                },
                {
                  "id": "d",
                  "text": "Uses GitHub"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "History and authority are lost.",
              "difficulty": "easy"
            },
            {
              "id": "git-why-version-control-q3",
              "prompt": "A repository is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Any USB stick"
                },
                {
                  "id": "b",
                  "text": "One tracked project"
                },
                {
                  "id": "c",
                  "text": "GitHub only"
                },
                {
                  "id": "d",
                  "text": "A branch"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "One project with tracked history.",
              "difficulty": "easy"
            },
            {
              "id": "git-why-version-control-q4",
              "prompt": "Commit message purpose:",
              "choices": [
                {
                  "id": "a",
                  "text": "Decorate log"
                },
                {
                  "id": "b",
                  "text": "Hide author"
                },
                {
                  "id": "c",
                  "text": "Explain why"
                },
                {
                  "id": "d",
                  "text": "Replace code review"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Explain why a change happened.",
              "difficulty": "easy"
            },
            {
              "id": "git-why-version-control-q5",
              "prompt": "Version control helps teams by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Banning edits"
                },
                {
                  "id": "b",
                  "text": "One shared timeline"
                },
                {
                  "id": "c",
                  "text": "Deleting old work"
                },
                {
                  "id": "d",
                  "text": "Avoiding messages"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Sharing one timeline instead of conflicting copies.",
              "difficulty": "easy"
            }
          ],
          questionBank:           [
            {
              "id": "git-why-version-control-b1",
              "prompt": "Folder copies fail because:",
              "choices": [
                {
                  "id": "a",
                  "text": "They use too much color"
                },
                {
                  "id": "b",
                  "text": "History and authorship are lost"
                },
                {
                  "id": "c",
                  "text": "Folders are illegal"
                },
                {
                  "id": "d",
                  "text": "GitHub requires them"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "No shared timeline or author record."
            },
            {
              "id": "git-why-version-control-b2",
              "prompt": "A commit is best described as:",
              "choices": [
                {
                  "id": "a",
                  "text": "A random rename"
                },
                {
                  "id": "b",
                  "text": "A snapshot with message"
                },
                {
                  "id": "c",
                  "text": "A Wi-Fi setting"
                },
                {
                  "id": "d",
                  "text": "A GitHub login"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "A snapshot with an explanatory message."
            },
            {
              "id": "git-why-version-control-b3",
              "prompt": "Version control helps teams by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Banning all edits"
                },
                {
                  "id": "b",
                  "text": "Emailing zips faster"
                },
                {
                  "id": "c",
                  "text": "Shared timeline everyone reads"
                },
                {
                  "id": "d",
                  "text": "Deleting old files daily"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "One shared history instead of conflicting copies."
            },
            {
              "id": "git-why-version-control-b4",
              "prompt": "Solo developers still benefit because:",
              "choices": [
                {
                  "id": "a",
                  "text": "Git requires teams"
                },
                {
                  "id": "b",
                  "text": "Commits are public instantly"
                },
                {
                  "id": "c",
                  "text": "You cannot use branches alone"
                },
                {
                  "id": "d",
                  "text": "Folders are faster"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Save points let you experiment and revert."
            },
            {
              "id": "git-why-version-control-b5",
              "prompt": "Which is NOT version control?",
              "choices": [
                {
                  "id": "a",
                  "text": "git log history"
                },
                {
                  "id": "b",
                  "text": "Commit messages"
                },
                {
                  "id": "c",
                  "text": "Blame on a line"
                },
                {
                  "id": "d",
                  "text": "Copying final-v2-real folders"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "final-v2-real folder naming."
            },
            {
              "id": "git-why-version-control-b6",
              "prompt": "Repository means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Any USB stick"
                },
                {
                  "id": "b",
                  "text": "One tracked project"
                },
                {
                  "id": "c",
                  "text": "GitHub website only"
                },
                {
                  "id": "d",
                  "text": "Windows Registry"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "One project with tracked history."
            },
            {
              "id": "git-why-version-control-b7",
              "prompt": "Why messages on commits?",
              "choices": [
                {
                  "id": "a",
                  "text": "Slow down work"
                },
                {
                  "id": "b",
                  "text": "Explain intent to future readers"
                },
                {
                  "id": "c",
                  "text": "Replace code"
                },
                {
                  "id": "d",
                  "text": "Required by law only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Explain why a change happened for future you."
            },
            {
              "id": "git-why-version-control-b8",
              "prompt": "Before Git commands this module:",
              "choices": [
                {
                  "id": "a",
                  "text": "Teaches push --force"
                },
                {
                  "id": "b",
                  "text": "Installs GitHub OAuth"
                },
                {
                  "id": "c",
                  "text": "Explains why VCS exists"
                },
                {
                  "id": "d",
                  "text": "Deletes .git folders"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Builds the problem mental model."
            }
          ],
          flashcards:           [
            {
              "id": "git-why-version-control-f1",
              "front": "Why not copy folders?",
              "back": "Copies multiply; history and authority are lost"
            },
            {
              "id": "git-why-version-control-f2",
              "front": "What is a commit?",
              "back": "A save point — snapshot with message explaining why"
            },
            {
              "id": "git-why-version-control-f3",
              "front": "What is a repository?",
              "back": "One project with full change timeline"
            },
            {
              "id": "git-why-version-control-f4",
              "front": "VC vs cloud sync?",
              "back": "Sync copies files · VCS records who/when/why"
            },
            {
              "id": "git-why-version-control-f5",
              "front": "Who needs version control?",
              "back": "Solo devs and teams — anyone with changing files"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
        {
          id: "git-vs-github",
          name: "Git vs GitHub",
          prerequisites: ["git-why-version-control"],
          objectives: ["GIT-M01-O4","GIT-M01-O5","GIT-M01-O6"],
          lesson: {
            title: "Git vs GitHub",
            content: `Git is software on your computer that tracks file changes, branches, and history. It works offline in a .git folder. GitHub is a website that hosts Git repositories online for backup, collaboration, and pull requests.

You can use Git without GitHub — Module 2 is entirely local. Most teams use both: Git for daily commits on your machine, GitHub (or GitLab, Bitbucket) for sharing and review. Push sends your commits to a remote; pull brings others' commits down.

Do not conflate them in interviews or standups. Saying "push to Git" or "I use GitHub locally" signals confusion. Git is the tool; GitHub is a hosting service built around Git.

Remotes are bookmarks with URLs — origin usually points at GitHub. Your local repo remains the workspace; the remote is a conversation partner. Losing network access does not delete local commits.

Module 4 connects local repos to GitHub. Until then, focus on Git commands that work in any folder with git init — no account required.`,
            experience: GIT_VS_GITHUB_EXPERIENCE,
          },
          keyFacts:           [
            "Git is local version control software on your machine",
            "GitHub is a hosting platform for Git repositories online",
            "Push sends commits to a remote; pull brings remote changes down",
            "Git works offline; remotes require network access",
            "GitLab and Bitbucket are GitHub alternatives — same Git commands"
          ],
          guidedExample: {
            title: "Separate Tool from Host",
            steps:             [
              "Write two columns: Git (local) vs GitHub (online).",
              "List git init, commit, log under Git — all work offline.",
              "List create repo on website, open PR, star project under GitHub.",
              "Say aloud: I commit locally with Git; I push to GitHub when ready to share.",
              "Note: you need Git installed for Module 2; GitHub account waits until Module 4."
            ],
          },
          commonMistakes:           [
            "Using Git and GitHub as interchangeable names in documentation",
            "Assuming commits automatically appear on GitHub without push",
            "Thinking you cannot learn Git without a GitHub account"
          ],
          examTraps:           [
            "Interview question: Is GitHub required for Git? Answer: No — local Git is standalone",
            "Confusing GitHub Issues with Git commits — issues are project management",
            "Believing GitHub stores only code — it stores any text files Git tracks"
          ],
          realWorldScenario: "On a flight with no Wi-Fi you fix typos in a README, commit twice locally with Git, and push when you land. Git worked offline; GitHub received the commits after push.",
          quiz:           [
            {
              "id": "git-vs-github-q1",
              "prompt": "Which statement is correct?",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub is another name for Git"
                },
                {
                  "id": "b",
                  "text": "Git runs locally; GitHub hosts repos online"
                },
                {
                  "id": "c",
                  "text": "You must have GitHub to use Git"
                },
                {
                  "id": "d",
                  "text": "Git only works in a browser"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Git runs locally; GitHub hosts repos online.",
              "difficulty": "easy"
            },
            {
              "id": "git-vs-github-q2",
              "prompt": "Git is installed:",
              "choices": [
                {
                  "id": "a",
                  "text": "In browser only"
                },
                {
                  "id": "b",
                  "text": "On your computer"
                },
                {
                  "id": "c",
                  "text": "On GitHub only"
                },
                {
                  "id": "d",
                  "text": "In email"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "On your computer for local history.",
              "difficulty": "easy"
            },
            {
              "id": "git-vs-github-q3",
              "prompt": "Push sends commits:",
              "choices": [
                {
                  "id": "a",
                  "text": "To recycle bin"
                },
                {
                  "id": "b",
                  "text": "To remote hosting"
                },
                {
                  "id": "c",
                  "text": "To .gitignore"
                },
                {
                  "id": "d",
                  "text": "To main only always"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "To a remote like GitHub.",
              "difficulty": "easy"
            },
            {
              "id": "git-vs-github-q4",
              "prompt": "Pull brings:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local to remote only"
                },
                {
                  "id": "b",
                  "text": "Nothing"
                },
                {
                  "id": "c",
                  "text": "Remote changes down"
                },
                {
                  "id": "d",
                  "text": "Branches deleted"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Remote changes into local repo.",
              "difficulty": "medium"
            },
            {
              "id": "git-vs-github-q5",
              "prompt": "Module 2 needs:",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub Enterprise"
                },
                {
                  "id": "b",
                  "text": "Two remotes"
                },
                {
                  "id": "c",
                  "text": "OAuth"
                },
                {
                  "id": "d",
                  "text": "Local Git install only"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Local Git — not GitHub account.",
              "difficulty": "easy"
            }
          ],
          questionBank:           [
            {
              "id": "git-vs-github-b1",
              "prompt": "Git runs:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only in browser"
                },
                {
                  "id": "b",
                  "text": "On your computer"
                },
                {
                  "id": "c",
                  "text": "Only on GitHub servers"
                },
                {
                  "id": "d",
                  "text": "In email"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "On your computer — local history in .git."
            },
            {
              "id": "git-vs-github-b2",
              "prompt": "GitHub provides:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local .git folder"
                },
                {
                  "id": "b",
                  "text": "Windows updates"
                },
                {
                  "id": "c",
                  "text": "Online repo hosting"
                },
                {
                  "id": "d",
                  "text": "Antivirus"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Remote hosting and collaboration features."
            },
            {
              "id": "git-vs-github-b3",
              "prompt": "Push means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete remote"
                },
                {
                  "id": "b",
                  "text": "Send commits to remote"
                },
                {
                  "id": "c",
                  "text": "Clone a repo"
                },
                {
                  "id": "d",
                  "text": "Ignore files"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Send local commits to a remote."
            },
            {
              "id": "git-vs-github-b4",
              "prompt": "Pull means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Fetch remote changes down"
                },
                {
                  "id": "b",
                  "text": "Force delete branch"
                },
                {
                  "id": "c",
                  "text": "Skip merge always"
                },
                {
                  "id": "d",
                  "text": "Create .gitignore"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Fetch and merge remote changes locally."
            },
            {
              "id": "git-vs-github-b5",
              "prompt": "Without internet Git can:",
              "choices": [
                {
                  "id": "a",
                  "text": "Do nothing"
                },
                {
                  "id": "b",
                  "text": "Only browse GitHub"
                },
                {
                  "id": "c",
                  "text": "Commit and log locally"
                },
                {
                  "id": "d",
                  "text": "Open pull requests"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Commit, branch, and log locally."
            },
            {
              "id": "git-vs-github-b6",
              "prompt": "origin typically is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Your password"
                },
                {
                  "id": "b",
                  "text": "Default remote name"
                },
                {
                  "id": "c",
                  "text": "Branch name only"
                },
                {
                  "id": "d",
                  "text": "Commit message"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Default name for main remote URL."
            },
            {
              "id": "git-vs-github-b7",
              "prompt": "Alternatives to GitHub:",
              "choices": [
                {
                  "id": "a",
                  "text": "None exist"
                },
                {
                  "id": "b",
                  "text": "GitLab, Bitbucket"
                },
                {
                  "id": "c",
                  "text": "Only SVN"
                },
                {
                  "id": "d",
                  "text": "Email only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "GitLab, Bitbucket — same Git workflow."
            },
            {
              "id": "git-vs-github-b8",
              "prompt": "Module 2 requires:",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub Pro"
                },
                {
                  "id": "b",
                  "text": "Two remotes"
                },
                {
                  "id": "c",
                  "text": "OAuth app"
                },
                {
                  "id": "d",
                  "text": "Local Git install only"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Local Git install — not GitHub account."
            }
          ],
          flashcards:           [
            {
              "id": "git-vs-github-f1",
              "front": "Git vs GitHub one line?",
              "back": "Git = local VCS · GitHub = online hosting"
            },
            {
              "id": "git-vs-github-f2",
              "front": "Commit vs push?",
              "back": "Commit = local save · push = send to remote"
            },
            {
              "id": "git-vs-github-f3",
              "front": "Work offline?",
              "back": "Yes — Git commits locally without network"
            },
            {
              "id": "git-vs-github-f4",
              "front": "What is origin?",
              "back": "Default nickname for your primary remote URL"
            },
            {
              "id": "git-vs-github-f5",
              "front": "Need GitHub for Module 2?",
              "back": "No — local Git only until Module 4"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
        },
        {
          id: "git-fear-removal-intro",
          name: "Git Without Fear",
          prerequisites: ["git-vs-github"],
          objectives: ["GIT-M01-O7","GIT-M01-O8","GIT-M01-O9"],
          lesson: {
            title: "Git Without Fear",
            content: `Many beginners avoid Git because one command feels like it could destroy a project. In practice, Git is designed with safety rails: status before action, branches for experiments, commits as local save points until you push.

Your habit stack starts here: git status when lost, git log for the story, git diff before committing. Branches let you experiment without touching main. Destructive operations usually require explicit flags — read what Git prints before pressing Enter.

Commits stay on your machine until push — you cannot accidentally publish to the internet with git commit alone. Module 2 teaches real commands; this lesson builds confidence so you run them without panic.

When coworkers share horror stories, ask what command they ran and whether they read status first. Most Git disasters involve force flags or skipped review — habits this track replaces with read → status → diff → small fix.

Complete the reflection lab: spot version-control problems in folder chaos before you touch a terminal. Fear removal is not fluff — it is the skill that keeps you using Git after the first error message.`,
            experience: GIT_FEAR_REMOVAL_INTRO_EXPERIENCE,
          },
          keyFacts:           [
            "Run git status first when unsure what Git will do",
            "Commits are local save points until you push",
            "Branches are cheap safety copies for experiments",
            "Git warns before many destructive actions — read the message",
            "Force flags (--force) deserve extra caution — status first"
          ],
          guidedExample: {
            title: "Build the Safety Habit Stack",
            steps:             [
              "Write on a sticky note: status → log → diff before scary commands.",
              "List one Git fear you have — wrong branch, lost work, public embarrassment.",
              "For each fear, note one command that informs you before acting: status or log.",
              "Repeat: commit is local; push is the sharing step — not automatic.",
              "Commit to running status before every lab in Module 2 — make it muscle memory."
            ],
          },
          commonMistakes:           [
            "Running commands from Stack Overflow without reading what they delete",
            "Deleting the .git folder when confused instead of asking for help",
            "Assuming one error message means the repo is permanently broken"
          ],
          examTraps:           [
            "Senior dev jokes about rm -rf .git — never casual deletion for beginners",
            "Copy-pasting git push --force before understanding non-fast-forward errors",
            "Skipping status because the command worked yesterday on a different repo"
          ],
          realWorldScenario: "You panic after a weird merge message. You run git status, see conflict markers listed, breathe, and open the recovery module instead of deleting the project folder.",
          quiz:           [
            {
              "id": "git-fear-removal-intro-q1",
              "prompt": "You feel lost in Git. What should you run first?",
              "choices": [
                {
                  "id": "a",
                  "text": "git push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "Delete the .git folder"
                },
                {
                  "id": "d",
                  "text": "Rename every file manually"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status shows branch and changes — safe home base.",
              "difficulty": "easy"
            },
            {
              "id": "git-fear-removal-intro-q2",
              "prompt": "Commits before push are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local only"
                },
                {
                  "id": "b",
                  "text": "Instantly public"
                },
                {
                  "id": "c",
                  "text": "Deleted hourly"
                },
                {
                  "id": "d",
                  "text": "On GitHub always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Local only — not on the internet.",
              "difficulty": "easy"
            },
            {
              "id": "git-fear-removal-intro-q3",
              "prompt": "Branches let you:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete history"
                },
                {
                  "id": "b",
                  "text": "Skip merges"
                },
                {
                  "id": "c",
                  "text": "Experiment safely"
                },
                {
                  "id": "d",
                  "text": "Avoid commits"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Experiment without changing main directly.",
              "difficulty": "easy"
            },
            {
              "id": "git-fear-removal-intro-q4",
              "prompt": "git log helps:",
              "choices": [
                {
                  "id": "a",
                  "text": "Fix Wi-Fi"
                },
                {
                  "id": "b",
                  "text": "See commit story"
                },
                {
                  "id": "c",
                  "text": "Push automatically"
                },
                {
                  "id": "d",
                  "text": "Create account"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Read what happened in history.",
              "difficulty": "easy"
            },
            {
              "id": "git-fear-removal-intro-q5",
              "prompt": "Destructive flags need:",
              "choices": [
                {
                  "id": "a",
                  "text": "No thought"
                },
                {
                  "id": "b",
                  "text": "Blind trust"
                },
                {
                  "id": "c",
                  "text": "Skipping status"
                },
                {
                  "id": "d",
                  "text": "Careful reading first"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Extra caution — read Git warnings.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-fear-removal-intro-b1",
              "prompt": "First command when nervous:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "Delete repo"
                },
                {
                  "id": "d",
                  "text": "Format disk"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status — see state before acting."
            },
            {
              "id": "git-fear-removal-intro-b2",
              "prompt": "Commits before push are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local only"
                },
                {
                  "id": "b",
                  "text": "Instantly public"
                },
                {
                  "id": "c",
                  "text": "Deleted hourly"
                },
                {
                  "id": "d",
                  "text": "On GitHub always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Local only — not on internet yet."
            },
            {
              "id": "git-fear-removal-intro-b3",
              "prompt": "Branches let you:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete history"
                },
                {
                  "id": "b",
                  "text": "Avoid all merges"
                },
                {
                  "id": "c",
                  "text": "Experiment safely"
                },
                {
                  "id": "d",
                  "text": "Skip commits"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Experiment without changing main directly."
            },
            {
              "id": "git-fear-removal-intro-b4",
              "prompt": "git log helps you:",
              "choices": [
                {
                  "id": "a",
                  "text": "Change Wi-Fi"
                },
                {
                  "id": "b",
                  "text": "See commit history"
                },
                {
                  "id": "c",
                  "text": "Push automatically"
                },
                {
                  "id": "d",
                  "text": "Create GitHub account"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Read the story of what happened."
            },
            {
              "id": "git-fear-removal-intro-b5",
              "prompt": "Destructive commands often:",
              "choices": [
                {
                  "id": "a",
                  "text": "Run silently always"
                },
                {
                  "id": "b",
                  "text": "Need explicit dangerous flags"
                },
                {
                  "id": "c",
                  "text": "Never exist in Git"
                },
                {
                  "id": "d",
                  "text": "Only work on Mac"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Require explicit flags — read warnings."
            },
            {
              "id": "git-fear-removal-intro-b6",
              "prompt": "Fear removal goal:",
              "choices": [
                {
                  "id": "a",
                  "text": "Memorize all flags"
                },
                {
                  "id": "b",
                  "text": "Never use terminal"
                },
                {
                  "id": "c",
                  "text": "Git as safety system"
                },
                {
                  "id": "d",
                  "text": "Avoid branches forever"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Git as safety system, not trap."
            },
            {
              "id": "git-fear-removal-intro-b7",
              "prompt": "Before lab Module 2:",
              "choices": [
                {
                  "id": "a",
                  "text": "Learn force push"
                },
                {
                  "id": "b",
                  "text": "Install Git, trust status"
                },
                {
                  "id": "c",
                  "text": "Delete all repos"
                },
                {
                  "id": "d",
                  "text": "Skip staging"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Install Git and trust status habit."
            },
            {
              "id": "git-fear-removal-intro-b8",
              "prompt": "Wrong reaction to error:",
              "choices": [
                {
                  "id": "a",
                  "text": "Read message"
                },
                {
                  "id": "b",
                  "text": "Run status"
                },
                {
                  "id": "c",
                  "text": "Search docs"
                },
                {
                  "id": "d",
                  "text": "Delete .git immediately"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Delete .git or random force commands."
            }
          ],
          flashcards:           [
            {
              "id": "git-fear-removal-intro-f1",
              "front": "Lost in Git — first command?",
              "back": "git status"
            },
            {
              "id": "git-fear-removal-intro-f2",
              "front": "Commits instantly online?",
              "back": "No — push is separate from commit"
            },
            {
              "id": "git-fear-removal-intro-f3",
              "front": "Experiment safely how?",
              "back": "Create a branch — cheap save copy"
            },
            {
              "id": "git-fear-removal-intro-f4",
              "front": "Before scary command?",
              "back": "status → log → diff"
            },
            {
              "id": "git-fear-removal-intro-f5",
              "front": "See history story?",
              "back": "git log --oneline"
            }
          ],
          externalResources: [NOTES_ANY_RESOURCE],
          assignments: [
            {
              "id": "git-lab-spot-vc-problem",
              "title": "Spot the Version-Control Problem",
              "type": "external-lab",
              "instructions": "Scenario: A team shared a project using only folder copies:\n\n• final-project\n• final-project-v2\n• final-project-real-final\n• final-project-fixed-again\n\nIn your notes app or on paper:\n\n### Try It\n1. List at least two problems this approach causes (hint: which file is current? who changed what?).\n2. Explain how a single Git repository with commits would replace the folder chaos.\n3. Name one thing Git history tells you that folder names cannot.\n\nNo terminal or Git install required — this is a thinking exercise before Module 2 commands.",
              "estimatedMinutes": 15,
              "externalResourceId": "notes-any",
              "completionCriteria": [
                "Named at least two problems with duplicate folder naming",
                "Explained how one repo with commits replaces multiple folders",
                "Identified one advantage of Git history over folder names"
              ],
              "relatedTopicIds": [
                "git-why-version-control",
                "git-vs-github",
                "git-fear-removal-intro"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
      ],
    },
    {
      id: "local-git",
      name: "Module 2 — Local Git Basics",
      topics: [
        {
          id: "git-repos-and-commits",
          name: "Repos and Commits",
          prerequisites: ["git-fear-removal-intro"],
          objectives: ["GIT-M02-O1","GIT-M02-O2","GIT-M02-O3"],
          lesson: {
            title: "Repositories and Commits",
            content: `Git tracks a project inside a repository — a folder with a hidden .git directory storing every commit. Your visible files are the working tree; edits there are not history until you commit.

Start with git init in your project folder. That creates .git and turns an ordinary directory into a repo. Never delete .git unless you intentionally abandon history — it holds your entire timeline.

A commit is a snapshot with a message explaining why. The basic loop is: edit files, git add to stage, git commit to record. Commits stay local on your machine until you push to a remote in later modules — nothing goes online automatically.

Understand working tree vs repository: the working tree is what you edit in your editor; the repository is Git's recorded timeline inside .git. git status (next topic) bridges the two by showing what changed and what is staged.

Practice on a scratch folder like hello-bridge. One README, two commits with clear messages, and you have a real timeline — no GitHub required yet. Run git log --oneline after each commit to see history grow.`,
            experience: GIT_REPOS_AND_COMMITS_EXPERIENCE,
          },
          keyFacts:           [
            "git init creates a .git directory and starts local history",
            "The working tree is your editable project files",
            "Commits are local snapshots until you push",
            "Never delete .git unless abandoning history",
            "Each commit needs staged changes and a message"
          ],
          guidedExample: {
            title: "Create Your First Repo",
            steps:             [
              "mkdir hello-bridge && cd hello-bridge",
              "echo \"# Hello Bridge\" > README.md",
              "git init",
              "git add README.md && git commit -m \"Initial commit with README\"",
              "git log --oneline to verify one commit appears"
            ],
          },
          commonMistakes:           [
            "Deleting .git when confused instead of reading status",
            "Assuming saving in an editor automatically commits",
            "Running git init inside an existing repo nested by mistake"
          ],
          examTraps:           [
            "Thinking commits instantly upload to the internet",
            "Believing Git copies the entire disk — only the project folder",
            "Using git init in your home directory — always cd into the project first"
          ],
          realWorldScenario: "You join a docs team. The lead says: init a repo for the onboarding guide, commit the outline today. You create hello-bridge, add README.md, commit locally — history starts without waiting for IT to provision GitHub.",
          quiz:           [
            {
              "id": "git-repos-and-commits-q1",
              "prompt": "What is a Git commit?",
              "choices": [
                {
                  "id": "a",
                  "text": "A push to GitHub"
                },
                {
                  "id": "b",
                  "text": "A local snapshot with message"
                },
                {
                  "id": "c",
                  "text": "A branch name"
                },
                {
                  "id": "d",
                  "text": "A .gitignore rule"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "A commit is a local snapshot of staged changes with an explanatory message.",
              "difficulty": "easy"
            },
            {
              "id": "git-repos-and-commits-q2",
              "prompt": "What does git init do?",
              "choices": [
                {
                  "id": "a",
                  "text": "Creates .git in current folder"
                },
                {
                  "id": "b",
                  "text": "Uploads to GitHub"
                },
                {
                  "id": "c",
                  "text": "Deletes files"
                },
                {
                  "id": "d",
                  "text": "Formats disk"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Creates .git and starts tracking in the current folder.",
              "difficulty": "easy"
            },
            {
              "id": "git-repos-and-commits-q3",
              "prompt": "Where is commit history stored locally?",
              "choices": [
                {
                  "id": "a",
                  "text": "README.md"
                },
                {
                  "id": "b",
                  "text": ".git directory"
                },
                {
                  "id": "c",
                  "text": "Recycle Bin"
                },
                {
                  "id": "d",
                  "text": "Registry"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "In the hidden .git directory.",
              "difficulty": "easy"
            },
            {
              "id": "git-repos-and-commits-q4",
              "prompt": "Commits before push are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local only"
                },
                {
                  "id": "b",
                  "text": "Instantly public"
                },
                {
                  "id": "c",
                  "text": "Deleted hourly"
                },
                {
                  "id": "d",
                  "text": "On GitHub always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Local only until you push.",
              "difficulty": "easy"
            },
            {
              "id": "git-repos-and-commits-q5",
              "prompt": "The working tree is:",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub website"
                },
                {
                  "id": "b",
                  "text": "Remote URL"
                },
                {
                  "id": "c",
                  "text": "Editable project files"
                },
                {
                  "id": "d",
                  "text": "Only .git"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Files you edit before committing.",
              "difficulty": "easy"
            }
          ],
          questionBank:           [
            {
              "id": "git-repos-and-commits-b1",
              "prompt": "git init runs:",
              "choices": [
                {
                  "id": "a",
                  "text": "In C:\\ always"
                },
                {
                  "id": "b",
                  "text": "On GitHub only"
                },
                {
                  "id": "c",
                  "text": "Inside project root"
                },
                {
                  "id": "d",
                  "text": "In PATH"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Inside the project folder you want to track."
            },
            {
              "id": "git-repos-and-commits-b2",
              "prompt": ".git contains:",
              "choices": [
                {
                  "id": "a",
                  "text": "History metadata"
                },
                {
                  "id": "b",
                  "text": "Only README"
                },
                {
                  "id": "c",
                  "text": "SSH keys default"
                },
                {
                  "id": "d",
                  "text": "System files"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Repository metadata and object history."
            },
            {
              "id": "git-repos-and-commits-b3",
              "prompt": "Commit needs:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only push"
                },
                {
                  "id": "b",
                  "text": "Stage + message"
                },
                {
                  "id": "c",
                  "text": "GitHub login"
                },
                {
                  "id": "d",
                  "text": "Two branches"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Staged changes and message."
            },
            {
              "id": "git-repos-and-commits-b4",
              "prompt": "Working tree vs repo:",
              "choices": [
                {
                  "id": "a",
                  "text": "Live vs recorded"
                },
                {
                  "id": "b",
                  "text": "Same always"
                },
                {
                  "id": "c",
                  "text": "Repo is GitHub only"
                },
                {
                  "id": "d",
                  "text": ".git is working tree"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Live files vs recorded commits."
            },
            {
              "id": "git-repos-and-commits-b5",
              "prompt": "After init, safe read:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "rm .git"
                },
                {
                  "id": "d",
                  "text": "clone ."
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status."
            },
            {
              "id": "git-repos-and-commits-b6",
              "prompt": "Commits without push:",
              "choices": [
                {
                  "id": "a",
                  "text": "Stay local"
                },
                {
                  "id": "b",
                  "text": "Go public"
                },
                {
                  "id": "c",
                  "text": "Delete on reboot"
                },
                {
                  "id": "d",
                  "text": "USB only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Stay local."
            },
            {
              "id": "git-repos-and-commits-b7",
              "prompt": "Nested git init:",
              "choices": [
                {
                  "id": "a",
                  "text": "Recommended"
                },
                {
                  "id": "b",
                  "text": "Faster"
                },
                {
                  "id": "c",
                  "text": "Confusing nested repos"
                },
                {
                  "id": "d",
                  "text": "Required"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Creates confusing repo-in-repo."
            },
            {
              "id": "git-repos-and-commits-b8",
              "prompt": "hello-bridge goal:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete prod"
                },
                {
                  "id": "b",
                  "text": "Practice local commits"
                },
                {
                  "id": "c",
                  "text": "Skip staging"
                },
                {
                  "id": "d",
                  "text": "Avoid log"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Practice init and commits."
            }
          ],
          flashcards:           [
            {
              "id": "git-repos-and-commits-f1",
              "front": "git init?",
              "back": "Creates .git and starts tracking in current folder"
            },
            {
              "id": "git-repos-and-commits-f2",
              "front": "Working tree?",
              "back": "Project files you edit — not yet history"
            },
            {
              "id": "git-repos-and-commits-f3",
              "front": "History stored where?",
              "back": "Hidden .git directory"
            },
            {
              "id": "git-repos-and-commits-f4",
              "front": "Commit vs push?",
              "back": "Commit = local save · push = send remote"
            },
            {
              "id": "git-repos-and-commits-f5",
              "front": "Never delete casually?",
              "back": ".git — entire history lives there"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "easy",
        },
        {
          id: "git-staging-and-status",
          name: "Staging and Status",
          prerequisites: ["git-repos-and-commits"],
          objectives: ["GIT-M02-O4","GIT-M02-O5","GIT-M02-O6"],
          lesson: {
            title: "Staging and Status",
            content: `git status is your home base. Run it before add, commit, merge, or push. It names your branch, lists modified files, and separates unstaged from staged changes.

Git has three main states for tracked files: modified (edited in working tree), staged (git add — ready to commit), and committed (saved in history). Saving in your editor only reaches modified — you still need add and commit.

git add README.md stages one file. git add . stages all changes — convenient but risky if unrelated files changed. Always read status after add to confirm the index matches your intent.

git commit -m "message" records staged files only. Unstaged edits stay in the working tree for a future commit. This lets you split work into logical commits instead of one giant snapshot.

Build the habit: status before every commit. If Git says nothing to commit, you forgot to add. If the wrong file is staged, git restore --staged filename before committing.`,
            experience: GIT_STAGING_AND_STATUS_EXPERIENCE,
          },
          keyFacts:           [
            "git status shows branch, unstaged, and staged changes",
            "git add moves changes from modified to staged",
            "git commit records only staged files",
            "Editor save ≠ git commit",
            "Review status after git add before commit"
          ],
          guidedExample: {
            title: "Stage and Commit Deliberately",
            steps:             [
              "Edit README.md and run git status — see modified, unstaged",
              "git add README.md — status shows staged",
              "git commit -m \"Update README intro\"",
              "Edit again without add — status shows unstaged changes",
              "git add and commit second change; verify two commits in git log --oneline"
            ],
          },
          commonMistakes:           [
            "Running git commit without git add when files are unstaged",
            "Using git add . without checking status first",
            "Assuming Ctrl+S in the editor creates a Git commit"
          ],
          examTraps:           [
            "Staging secrets because git add . grabbed .env",
            "Committing debug files because status was skipped",
            "Thinking staged changes are committed automatically"
          ],
          realWorldScenario: "You fix a typo in docs and add a new script in the same folder. Status shows both files. You git add only the doc file, commit docs fix typo, then stage the script separately — two clean commits.",
          quiz:           [
            {
              "id": "git-staging-and-status-q1",
              "prompt": "You edited a file but git commit says nothing to commit. Likely cause?",
              "choices": [
                {
                  "id": "a",
                  "text": "Forgot git add"
                },
                {
                  "id": "b",
                  "text": "Git is broken"
                },
                {
                  "id": "c",
                  "text": "Need push first"
                },
                {
                  "id": "d",
                  "text": "File read-only forever"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Changes are unstaged — run git add first.",
              "difficulty": "easy"
            },
            {
              "id": "git-staging-and-status-q2",
              "prompt": "git status shows:",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub avatar"
                },
                {
                  "id": "b",
                  "text": "Branch and changes"
                },
                {
                  "id": "c",
                  "text": "Wi-Fi password"
                },
                {
                  "id": "d",
                  "text": "CPU temp"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Branch and file states.",
              "difficulty": "easy"
            },
            {
              "id": "git-staging-and-status-q3",
              "prompt": "git add . stages:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nothing"
                },
                {
                  "id": "b",
                  "text": "Only README"
                },
                {
                  "id": "c",
                  "text": "All changes in scope"
                },
                {
                  "id": "d",
                  "text": "Only deletes"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "All changes in scope.",
              "difficulty": "medium"
            },
            {
              "id": "git-staging-and-status-q4",
              "prompt": "Editor save:",
              "choices": [
                {
                  "id": "a",
                  "text": "Working tree only"
                },
                {
                  "id": "b",
                  "text": "Auto-commits"
                },
                {
                  "id": "c",
                  "text": "Pushes origin"
                },
                {
                  "id": "d",
                  "text": "Deletes .git"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Updates working tree only.",
              "difficulty": "easy"
            },
            {
              "id": "git-staging-and-status-q5",
              "prompt": "Before commit habit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip status"
                },
                {
                  "id": "b",
                  "text": "status then commit"
                },
                {
                  "id": "c",
                  "text": "push --force"
                },
                {
                  "id": "d",
                  "text": "Delete staged"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status then commit.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-staging-and-status-b1",
              "prompt": "Staged means:",
              "choices": [
                {
                  "id": "a",
                  "text": "On GitHub"
                },
                {
                  "id": "b",
                  "text": "Ready to commit"
                },
                {
                  "id": "c",
                  "text": "Deleted"
                },
                {
                  "id": "d",
                  "text": "Encrypted"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Ready for next commit."
            },
            {
              "id": "git-staging-and-status-b2",
              "prompt": "Unstaged modified:",
              "choices": [
                {
                  "id": "a",
                  "text": "Changed not staged"
                },
                {
                  "id": "b",
                  "text": "Committed"
                },
                {
                  "id": "c",
                  "text": "Remote only"
                },
                {
                  "id": "d",
                  "text": "Ignored always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Changed, not in next commit."
            },
            {
              "id": "git-staging-and-status-b3",
              "prompt": "Stage one file:",
              "choices": [
                {
                  "id": "a",
                  "text": "commit only"
                },
                {
                  "id": "b",
                  "text": "push file"
                },
                {
                  "id": "c",
                  "text": "git add file"
                },
                {
                  "id": "d",
                  "text": "delete file"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git add filename."
            },
            {
              "id": "git-staging-and-status-b4",
              "prompt": "After git add verify:",
              "choices": [
                {
                  "id": "a",
                  "text": "format C:"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "git status"
                },
                {
                  "id": "d",
                  "text": "reboot"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git status."
            },
            {
              "id": "git-staging-and-status-b5",
              "prompt": "nothing to commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Corrupted"
                },
                {
                  "id": "b",
                  "text": "Nothing staged"
                },
                {
                  "id": "c",
                  "text": "Reinstall Git"
                },
                {
                  "id": "d",
                  "text": "Need Pro"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Nothing staged."
            },
            {
              "id": "git-staging-and-status-b6",
              "prompt": "Two features two commits:",
              "choices": [
                {
                  "id": "a",
                  "text": "One always"
                },
                {
                  "id": "b",
                  "text": "Each logical change"
                },
                {
                  "id": "c",
                  "text": "Never add"
                },
                {
                  "id": "d",
                  "text": "Use ZIP"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Stage/commit each separately."
            },
            {
              "id": "git-staging-and-status-b7",
              "prompt": "restore --staged:",
              "choices": [
                {
                  "id": "a",
                  "text": "Deletes repo"
                },
                {
                  "id": "b",
                  "text": "Unstages file"
                },
                {
                  "id": "c",
                  "text": "Pushes main"
                },
                {
                  "id": "d",
                  "text": "Creates branch"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Unstages keeping edits."
            },
            {
              "id": "git-staging-and-status-b8",
              "prompt": "Status first when:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never"
                },
                {
                  "id": "b",
                  "text": "Lost or before action"
                },
                {
                  "id": "c",
                  "text": "Linux only"
                },
                {
                  "id": "d",
                  "text": "After force only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Unsure what Git will do."
            }
          ],
          flashcards:           [
            {
              "id": "git-staging-and-status-f1",
              "front": "Lost — first command?",
              "back": "git status"
            },
            {
              "id": "git-staging-and-status-f2",
              "front": "Modified vs staged?",
              "back": "Modified = edited · staged = git add ready"
            },
            {
              "id": "git-staging-and-status-f3",
              "front": "git commit records?",
              "back": "Only staged files"
            },
            {
              "id": "git-staging-and-status-f4",
              "front": "git add . risk?",
              "back": "Stages everything — check status"
            },
            {
              "id": "git-staging-and-status-f5",
              "front": "Editor save vs commit?",
              "back": "Save = disk · commit = history"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "easy",
        },
        {
          id: "git-history-and-diff",
          name: "History and Diff",
          prerequisites: ["git-staging-and-status"],
          objectives: ["GIT-M02-O7","GIT-M02-O8","GIT-M02-O9"],
          lesson: {
            title: "History and Diff",
            content: `git log shows your project's timeline — each commit has a hash, author, date, and message. git log --oneline compresses the story for daily use. When debugging, scan messages to find when behavior changed.

git diff shows line-level changes. Without flags, it compares working tree to staging for unstaged edits. git diff --staged shows what your next commit will contain. Read diffs before commit — catch debug prints and accidental edits.

Commit hashes uniquely identify snapshots. You rarely type full hashes; copy from log when needed for cherry-pick or revert in later modules.

Your review habit before commit: git status (what files), git diff (unstaged), git diff --staged (will commit). Three commands prevent most embarrassing commits.

Module 2 lab puts this together: init hello-bridge, two commits, log --oneline proof. Install Git locally — GitHub optional until Module 4.`,
            experience: GIT_HISTORY_AND_DIFF_EXPERIENCE,
          },
          keyFacts:           [
            "git log shows commit history with messages",
            "git log --oneline gives compact timeline",
            "git diff shows unstaged line changes",
            "git diff --staged previews the next commit",
            "Read diff before commit to catch mistakes"
          ],
          guidedExample: {
            title: "Log and Diff Review",
            steps:             [
              "Make two commits with distinct messages",
              "Run git log --oneline — note short hashes",
              "Edit a file without staging; run git diff",
              "git add the file; run git diff --staged",
              "Commit only after staged diff looks correct"
            ],
          },
          commonMistakes:           [
            "Committing without reading git diff --staged",
            "Assuming git diff shows committed history — use git show",
            "Panicking at long log output instead of using --oneline"
          ],
          examTraps:           [
            "Committing debug code because diff was skipped",
            "Using git diff after commit expecting last commit — use git show HEAD",
            "Sharing log screenshots instead of learning --oneline"
          ],
          realWorldScenario: "Production broke after yesterday's deploy. You git log --oneline, spot the suspect message, git show that hash, and see the config typo — diff and log saved hours.",
          quiz:           [
            {
              "id": "git-history-and-diff-q1",
              "prompt": "Before committing staged files, which command previews the commit?",
              "choices": [
                {
                  "id": "a",
                  "text": "git push"
                },
                {
                  "id": "b",
                  "text": "git init"
                },
                {
                  "id": "c",
                  "text": "git diff --staged"
                },
                {
                  "id": "d",
                  "text": "git remote -v"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git diff --staged shows staged changes.",
              "difficulty": "medium"
            },
            {
              "id": "git-history-and-diff-q2",
              "prompt": "git log --oneline:",
              "choices": [
                {
                  "id": "a",
                  "text": "Deletes commits"
                },
                {
                  "id": "b",
                  "text": "Compact timeline"
                },
                {
                  "id": "c",
                  "text": "Pushes GitHub"
                },
                {
                  "id": "d",
                  "text": "Merges branches"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Compact hash + message list.",
              "difficulty": "easy"
            },
            {
              "id": "git-history-and-diff-q3",
              "prompt": "Plain git diff shows:",
              "choices": [
                {
                  "id": "a",
                  "text": "GitHub issues"
                },
                {
                  "id": "b",
                  "text": "Unstaged changes"
                },
                {
                  "id": "c",
                  "text": "Remotes only"
                },
                {
                  "id": "d",
                  "text": "Ignored always"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Unstaged working tree changes.",
              "difficulty": "medium"
            },
            {
              "id": "git-history-and-diff-q4",
              "prompt": "Commit hash:",
              "choices": [
                {
                  "id": "a",
                  "text": "Unique ID"
                },
                {
                  "id": "b",
                  "text": "Password"
                },
                {
                  "id": "c",
                  "text": "Wi-Fi channel"
                },
                {
                  "id": "d",
                  "text": "Branch only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Unique snapshot identifier.",
              "difficulty": "easy"
            },
            {
              "id": "git-history-and-diff-q5",
              "prompt": "Habit before commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "push force delete"
                },
                {
                  "id": "b",
                  "text": "status diff staged commit"
                },
                {
                  "id": "c",
                  "text": "only add ."
                },
                {
                  "id": "d",
                  "text": "skip log"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "status → diff → diff --staged → commit.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-history-and-diff-b1",
              "prompt": "Last commit details:",
              "choices": [
                {
                  "id": "a",
                  "text": "git init"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "git show HEAD"
                },
                {
                  "id": "d",
                  "text": "clone"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git show HEAD."
            },
            {
              "id": "git-history-and-diff-b2",
              "prompt": "Long log tip:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete .git"
                },
                {
                  "id": "b",
                  "text": "Use --oneline"
                },
                {
                  "id": "c",
                  "text": "Never log"
                },
                {
                  "id": "d",
                  "text": "GUI only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Use --oneline."
            },
            {
              "id": "git-history-and-diff-b3",
              "prompt": "Committed changes view:",
              "choices": [
                {
                  "id": "a",
                  "text": "diff always"
                },
                {
                  "id": "b",
                  "text": "git show"
                },
                {
                  "id": "c",
                  "text": "reboot"
                },
                {
                  "id": "d",
                  "text": "ignore diff"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git show not plain diff."
            },
            {
              "id": "git-history-and-diff-b4",
              "prompt": "Author in log:",
              "choices": [
                {
                  "id": "a",
                  "text": "Who committed"
                },
                {
                  "id": "b",
                  "text": "CPU"
                },
                {
                  "id": "c",
                  "text": "Remote URL"
                },
                {
                  "id": "d",
                  "text": "License"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Who made commit."
            },
            {
              "id": "git-history-and-diff-b5",
              "prompt": "Two commits proof:",
              "choices": [
                {
                  "id": "a",
                  "text": "status only"
                },
                {
                  "id": "b",
                  "text": "two log lines"
                },
                {
                  "id": "c",
                  "text": "delete README"
                },
                {
                  "id": "d",
                  "text": "no log"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "log --oneline two lines."
            },
            {
              "id": "git-history-and-diff-b6",
              "prompt": "Staged preview flag:",
              "choices": [
                {
                  "id": "a",
                  "text": "--force"
                },
                {
                  "id": "b",
                  "text": "--hard"
                },
                {
                  "id": "c",
                  "text": "--staged"
                },
                {
                  "id": "d",
                  "text": "--push"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "--staged."
            },
            {
              "id": "git-history-and-diff-b7",
              "prompt": "Find bug introduction:",
              "choices": [
                {
                  "id": "a",
                  "text": "Random reset"
                },
                {
                  "id": "b",
                  "text": "Log + show"
                },
                {
                  "id": "c",
                  "text": "Delete branch"
                },
                {
                  "id": "d",
                  "text": "Ignore history"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Log then git show."
            },
            {
              "id": "git-history-and-diff-b8",
              "prompt": "Module 2 lab:",
              "choices": [
                {
                  "id": "a",
                  "text": "PR only"
                },
                {
                  "id": "b",
                  "text": "init commits log"
                },
                {
                  "id": "c",
                  "text": "No install"
                },
                {
                  "id": "d",
                  "text": "Email ZIP"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Local init, commits, log."
            }
          ],
          flashcards:           [
            {
              "id": "git-history-and-diff-f1",
              "front": "Quick history?",
              "back": "git log --oneline"
            },
            {
              "id": "git-history-and-diff-f2",
              "front": "Preview next commit?",
              "back": "git diff --staged"
            },
            {
              "id": "git-history-and-diff-f3",
              "front": "Unstaged edits?",
              "back": "git diff"
            },
            {
              "id": "git-history-and-diff-f4",
              "front": "Commit ID?",
              "back": "Unique hash for one snapshot"
            },
            {
              "id": "git-history-and-diff-f5",
              "front": "Before commit?",
              "back": "status → diff → diff --staged"
            }
          ],
          externalResources: [LOCAL_GIT_RESOURCE],
          assignments: [
            {
              "id": "git-lab-local-basics",
              "title": "Local Git Basics",
              "type": "external-lab",
              "instructions": "Goal: Create hello-bridge locally with two commits and readable history. Git must be installed (see Local Git resource).\n\n### Try It\n1. mkdir hello-bridge && cd hello-bridge\n2. echo \"# Hello Bridge\" > README.md\n3. git init\n4. git add README.md && git commit -m \"Initial commit with README\"\n5. Add a second line to README.md\n6. git add README.md && git commit -m \"Add project description line\"\n7. git log --oneline — you should see two commits\n\n### Break It\n8. Edit README again but run git commit -m \"Skipped add\" without git add — read the error.\n\n### Fix It\n9. Run git status — note unstaged changes\n10. git add README.md && git commit -m \"Document lab completion steps\"\n11. git log --oneline — verify three commits",
              "estimatedMinutes": 30,
              "externalResourceId": "local-git",
              "completionCriteria": [
                "Created hello-bridge folder with git init",
                "Made at least two meaningful commits",
                "Ran git log --oneline successfully",
                "Completed Break It / Fix It staging recovery"
              ],
              "relatedTopicIds": [
                "git-repos-and-commits",
                "git-staging-and-status",
                "git-history-and-diff"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "branching",
      name: "Module 3 — Branches Without Fear",
      topics: [
        {
          id: "git-branching-basics",
          name: "Branching Basics",
          prerequisites: ["git-history-and-diff"],
          objectives: ["GIT-M03-O1","GIT-M03-O2","GIT-M03-O3"],
          lesson: {
            title: "Branching Basics",
            content: `Branches are movable labels pointing at commits — cheap safety copies for experiments. main (or master) is the default line of history teams treat as stable. Feature work happens on named branches so main stays deployable.

Create a branch with git branch add-notes or git checkout -b add-notes. git switch -c feature-name is the modern equivalent. git branch lists local branches; the asterisk marks your current branch.

git checkout branch-name or git switch branch-name moves your working tree to that branch's latest commit. Edits and commits on a branch stay on that branch until you merge.

Why branch? You can try a risky refactor without touching main. If the experiment fails, delete the branch. If it succeeds, merge back. Branches are labels, not duplicate universes — Git stores commits efficiently.

Always git status after switching branches. It confirms which line of history you are extending before you commit.`,
            experience: GIT_BRANCHING_BASICS_EXPERIENCE,
          },
          keyFacts:           [
            "Branches are cheap pointers to commits — safe experiments",
            "main is the default stable branch name",
            "git switch -c name creates and switches to a new branch",
            "Commits belong to whichever branch is checked out",
            "git status confirms current branch before you commit"
          ],
          guidedExample: {
            title: "Branch for a Small Feature",
            steps:             [
              "In hello-bridge on main, run git status — confirm branch",
              "git switch -c add-notes",
              "Add a notes.txt file and commit with a clear message",
              "git log --oneline — commit exists on add-notes",
              "git switch main — notes.txt disappears from working tree until merge"
            ],
          },
          commonMistakes:           [
            "Committing directly on main for risky experiments",
            "Forgetting to switch branch before starting new work",
            "Assuming branches copy every file on disk twice"
          ],
          examTraps:           [
            "Deleting main instead of a feature branch — know your current branch",
            "Creating branches but never merging — stale work piles up",
            "Switching branches with uncommitted changes without reading Git's warning"
          ],
          realWorldScenario: "You need to draft release notes while a hotfix is in progress. You branch docs-release on main, write notes, while a teammate branches hotfix-login — parallel work without stepping on each other.",
          quiz:           [
            {
              "id": "git-branching-basics-q1",
              "prompt": "Why create a feature branch instead of committing on main?",
              "choices": [
                {
                  "id": "a",
                  "text": "Branches delete main"
                },
                {
                  "id": "b",
                  "text": "Isolate work safely"
                },
                {
                  "id": "c",
                  "text": "Required by GitHub"
                },
                {
                  "id": "d",
                  "text": "Faster internet"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Branches isolate experiments so main stays stable.",
              "difficulty": "easy"
            },
            {
              "id": "git-branching-basics-q2",
              "prompt": "Create and switch branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "git push --force"
                },
                {
                  "id": "b",
                  "text": "git init"
                },
                {
                  "id": "c",
                  "text": "git switch -c name"
                },
                {
                  "id": "d",
                  "text": "git clone"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git switch -c branch-name.",
              "difficulty": "easy"
            },
            {
              "id": "git-branching-basics-q3",
              "prompt": "Current branch shown by:",
              "choices": [
                {
                  "id": "a",
                  "text": "git status / branch"
                },
                {
                  "id": "b",
                  "text": "git push"
                },
                {
                  "id": "c",
                  "text": "git remote"
                },
                {
                  "id": "d",
                  "text": "git clean"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git status or git branch.",
              "difficulty": "easy"
            },
            {
              "id": "git-branching-basics-q4",
              "prompt": "Branch is best described as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Duplicate disk copy"
                },
                {
                  "id": "b",
                  "text": "Label on commits"
                },
                {
                  "id": "c",
                  "text": "GitHub account"
                },
                {
                  "id": "d",
                  "text": "SSH key"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "A movable label on commits.",
              "difficulty": "medium"
            },
            {
              "id": "git-branching-basics-q5",
              "prompt": "Before commit on branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "delete .git"
                },
                {
                  "id": "c",
                  "text": "skip status"
                },
                {
                  "id": "d",
                  "text": "git status confirm branch"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "git status to confirm branch.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-branching-basics-b1",
              "prompt": "Default stable branch often:",
              "choices": [
                {
                  "id": "a",
                  "text": "main/master"
                },
                {
                  "id": "b",
                  "text": "random"
                },
                {
                  "id": "c",
                  "text": "origin only"
                },
                {
                  "id": "d",
                  "text": "dev always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "main or master."
            },
            {
              "id": "git-branching-basics-b2",
              "prompt": "List branches:",
              "choices": [
                {
                  "id": "a",
                  "text": "git log only"
                },
                {
                  "id": "b",
                  "text": "git branch"
                },
                {
                  "id": "c",
                  "text": "git push"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git branch."
            },
            {
              "id": "git-branching-basics-b3",
              "prompt": "Switch branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "git merge only"
                },
                {
                  "id": "b",
                  "text": "git add ."
                },
                {
                  "id": "c",
                  "text": "git switch name"
                },
                {
                  "id": "d",
                  "text": "git remote"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git switch name or checkout."
            },
            {
              "id": "git-branching-basics-b4",
              "prompt": "Commit goes to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Current branch"
                },
                {
                  "id": "b",
                  "text": "All branches"
                },
                {
                  "id": "c",
                  "text": "GitHub only"
                },
                {
                  "id": "d",
                  "text": "No branch"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Currently checked-out branch."
            },
            {
              "id": "git-branching-basics-b5",
              "prompt": "Failed experiment:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete main"
                },
                {
                  "id": "b",
                  "text": "Drop feature branch"
                },
                {
                  "id": "c",
                  "text": "Reinstall Git"
                },
                {
                  "id": "d",
                  "text": "Force push"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Delete feature branch, main untouched."
            },
            {
              "id": "git-branching-basics-b6",
              "prompt": "Parallel features:",
              "choices": [
                {
                  "id": "a",
                  "text": "One branch only"
                },
                {
                  "id": "b",
                  "text": "Email ZIPs"
                },
                {
                  "id": "c",
                  "text": "Separate branches"
                },
                {
                  "id": "d",
                  "text": "No commits"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Separate branches from main."
            },
            {
              "id": "git-branching-basics-b7",
              "prompt": "Uncommitted switch warning:",
              "choices": [
                {
                  "id": "a",
                  "text": "Git may warn/block"
                },
                {
                  "id": "b",
                  "text": "Always silent"
                },
                {
                  "id": "c",
                  "text": "Deletes repo"
                },
                {
                  "id": "d",
                  "text": "Auto commits"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Git may block or require stash."
            },
            {
              "id": "git-branching-basics-b8",
              "prompt": "Branch naming:",
              "choices": [
                {
                  "id": "a",
                  "text": "Random numbers"
                },
                {
                  "id": "b",
                  "text": "Descriptive names"
                },
                {
                  "id": "c",
                  "text": "Always main"
                },
                {
                  "id": "d",
                  "text": "No names"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Descriptive: add-notes, fix-typo."
            }
          ],
          flashcards:           [
            {
              "id": "git-branching-basics-f1",
              "front": "Why branch?",
              "back": "Safe experiments without touching main"
            },
            {
              "id": "git-branching-basics-f2",
              "front": "Create + switch?",
              "back": "git switch -c branch-name"
            },
            {
              "id": "git-branching-basics-f3",
              "front": "See current branch?",
              "back": "git status — first line"
            },
            {
              "id": "git-branching-basics-f4",
              "front": "Branch is not?",
              "back": "A full duplicate of every file on disk"
            },
            {
              "id": "git-branching-basics-f5",
              "front": "Before commit?",
              "back": "status — confirm branch"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "git-merge-basics",
          name: "Merge Basics",
          prerequisites: ["git-branching-basics"],
          objectives: ["GIT-M03-O4","GIT-M03-O5","GIT-M03-O6"],
          lesson: {
            title: "Merge Basics",
            content: `Merging combines branch history into another branch — usually feature into main. Checkout the target branch first, then git merge feature-branch. Git fast-forwards when main had no new commits; otherwise it creates a merge commit.

After merge, main contains all commits from the feature branch. git log --oneline --graph shows the story. Delete the feature branch locally with git branch -d add-notes when done — it is housekeeping, not deleting code from main.

Always merge into the branch that should receive the work. Wrong direction merges the wrong way — status and branch name before merge prevent this.

If merge reports conflicts, Git stops and marks files — Module 3 intro covers reading markers; Module 6 resolves them hands-on.

Merge is local until push. Teams often merge via pull request on GitHub for review — Module 5 — but local git merge is the core mechanic.`,
            experience: GIT_MERGE_BASICS_EXPERIENCE,
          },
          keyFacts:           [
            "Checkout target branch, then git merge source-branch",
            "Fast-forward merge when target has no new commits",
            "git log --graph visualizes merge history",
            "git branch -d removes merged feature branches locally",
            "Merge direction matters — receive work on the branch you checkout"
          ],
          guidedExample: {
            title: "Merge Feature into Main",
            steps:             [
              "On add-notes branch with a commit, git switch main",
              "git merge add-notes — note fast-forward or merge commit message",
              "Confirm notes.txt exists on main",
              "git log --oneline --graph — see branch join",
              "git branch -d add-notes — cleanup merged branch"
            ],
          },
          commonMistakes:           [
            "Running merge on the feature branch instead of main",
            "Deleting main after merge confusion",
            "Force pushing after a messy local merge without understanding"
          ],
          examTraps:           [
            "Merging main into feature repeatedly without ever merging feature back — stale branches",
            "Assuming merge deletes commits — history is preserved",
            "Using git merge with uncommitted changes — status first"
          ],
          realWorldScenario: "Your add-notes branch is approved. You switch main, merge add-notes, run tests on main, then delete the feature branch — standard team flow before push.",
          quiz:           [
            {
              "id": "git-merge-basics-q1",
              "prompt": "You want main to include add-notes commits. What is the correct order?",
              "choices": [
                {
                  "id": "a",
                  "text": "git merge main on add-notes"
                },
                {
                  "id": "b",
                  "text": "Checkout main, merge add-notes"
                },
                {
                  "id": "c",
                  "text": "Delete main"
                },
                {
                  "id": "d",
                  "text": "git push --force only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Checkout main, then git merge add-notes.",
              "difficulty": "medium"
            },
            {
              "id": "git-merge-basics-q2",
              "prompt": "Fast-forward merge when:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always"
                },
                {
                  "id": "b",
                  "text": "Target had no new commits"
                },
                {
                  "id": "c",
                  "text": "Never"
                },
                {
                  "id": "d",
                  "text": "Only on GitHub"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Target branch unchanged since branch point.",
              "difficulty": "easy"
            },
            {
              "id": "git-merge-basics-q3",
              "prompt": "See merge graph:",
              "choices": [
                {
                  "id": "a",
                  "text": "git init"
                },
                {
                  "id": "b",
                  "text": "git clean"
                },
                {
                  "id": "c",
                  "text": "log --graph"
                },
                {
                  "id": "d",
                  "text": "git remote"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git log --oneline --graph.",
              "difficulty": "easy"
            },
            {
              "id": "git-merge-basics-q4",
              "prompt": "After merge cleanup:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete main"
                },
                {
                  "id": "b",
                  "text": "branch -d feature"
                },
                {
                  "id": "c",
                  "text": "rm .git"
                },
                {
                  "id": "d",
                  "text": "force push"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git branch -d feature.",
              "difficulty": "medium"
            },
            {
              "id": "git-merge-basics-q5",
              "prompt": "Merge conflicts mean:",
              "choices": [
                {
                  "id": "a",
                  "text": "Repo deleted"
                },
                {
                  "id": "b",
                  "text": "Auto fixed always"
                },
                {
                  "id": "c",
                  "text": "Push blocked forever"
                },
                {
                  "id": "d",
                  "text": "Edit conflict markers"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Git needs human to pick combined content.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-merge-basics-b1",
              "prompt": "Merge target first step:",
              "choices": [
                {
                  "id": "a",
                  "text": "Push --force"
                },
                {
                  "id": "b",
                  "text": "Checkout target"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Checkout branch receiving work."
            },
            {
              "id": "git-merge-basics-b2",
              "prompt": "Merge command:",
              "choices": [
                {
                  "id": "a",
                  "text": "git merge source"
                },
                {
                  "id": "b",
                  "text": "git push main"
                },
                {
                  "id": "c",
                  "text": "git clone"
                },
                {
                  "id": "d",
                  "text": "git ignore"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git merge source-branch."
            },
            {
              "id": "git-merge-basics-b3",
              "prompt": "Merged branch cleanup:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete main"
                },
                {
                  "id": "b",
                  "text": "format disk"
                },
                {
                  "id": "c",
                  "text": "branch -d feature"
                },
                {
                  "id": "d",
                  "text": "git reset --hard always"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git branch -d name."
            },
            {
              "id": "git-merge-basics-b4",
              "prompt": "Merge preserves:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nothing"
                },
                {
                  "id": "b",
                  "text": "History from both"
                },
                {
                  "id": "c",
                  "text": "Only latest file"
                },
                {
                  "id": "d",
                  "text": "Remote only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Commit history from both lines."
            },
            {
              "id": "git-merge-basics-b5",
              "prompt": "Wrong merge direction:",
              "choices": [
                {
                  "id": "a",
                  "text": "Wrong branch gets commits"
                },
                {
                  "id": "b",
                  "text": "Impossible"
                },
                {
                  "id": "c",
                  "text": "Always fine"
                },
                {
                  "id": "d",
                  "text": "Deletes GitHub"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Work lands on wrong branch — read status."
            },
            {
              "id": "git-merge-basics-b6",
              "prompt": "Local merge vs PR:",
              "choices": [
                {
                  "id": "a",
                  "text": "Same thing always"
                },
                {
                  "id": "b",
                  "text": "PR is local only"
                },
                {
                  "id": "c",
                  "text": "PR adds review layer"
                },
                {
                  "id": "d",
                  "text": "Merge illegal on GitHub"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "PR adds review on hosting site."
            },
            {
              "id": "git-merge-basics-b7",
              "prompt": "Uncommitted merge attempt:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always works"
                },
                {
                  "id": "b",
                  "text": "May refuse — status first"
                },
                {
                  "id": "c",
                  "text": "Auto deletes"
                },
                {
                  "id": "d",
                  "text": "Pushes main"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Git may refuse — commit or stash first."
            },
            {
              "id": "git-merge-basics-b8",
              "prompt": "Graph log shows:",
              "choices": [
                {
                  "id": "a",
                  "text": "Branch merge story"
                },
                {
                  "id": "b",
                  "text": "Wi-Fi speed"
                },
                {
                  "id": "c",
                  "text": "SSH keys"
                },
                {
                  "id": "d",
                  "text": "License"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "How branches joined."
            }
          ],
          flashcards:           [
            {
              "id": "git-merge-basics-f1",
              "front": "Merge order?",
              "back": "Checkout target → git merge source"
            },
            {
              "id": "git-merge-basics-f2",
              "front": "Fast-forward?",
              "back": "Main unchanged since branch — pointer moves"
            },
            {
              "id": "git-merge-basics-f3",
              "front": "Visualize history?",
              "back": "git log --oneline --graph"
            },
            {
              "id": "git-merge-basics-f4",
              "front": "Cleanup merged branch?",
              "back": "git branch -d feature-name"
            },
            {
              "id": "git-merge-basics-f5",
              "front": "Conflicts?",
              "back": "Git pauses — edit markers, then commit"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "git-conflicts-intro",
          name: "Conflicts (Intro)",
          prerequisites: ["git-merge-basics"],
          objectives: ["GIT-M03-O7","GIT-M03-O8","GIT-M03-O9"],
          lesson: {
            title: "Conflicts (Intro)",
            content: `A merge conflict happens when two branches edit the same lines differently and Git cannot pick a winner automatically. Git stops the merge and marks files with conflict markers: <<<<<<< HEAD, =======, >>>>>>> branch-name.

Do not panic — your repo is not corrupted. Git paused and left markers for you to read. git status lists unmerged paths. Open the file, decide the correct combined content, remove markers, save, git add, git commit to finish the merge.

Prevention beats firefighting: pull or merge main into feature branches often; communicate on shared files; keep commits small so conflicts are small.

Module 6 practices full resolution. This intro teaches recognition: if you see <<<<<<< in a file, you are mid-merge and must resolve before continuing.

Never commit conflict markers intentionally — reviewers and CI will catch them, but fixing before commit is professional habit.`,
            experience: GIT_CONFLICTS_INTRO_EXPERIENCE,
          },
          keyFacts:           [
            "Conflict markers: <<<<<<<, =======, >>>>>>>",
            "git status lists unmerged files during conflict",
            "Remove markers, save, add, commit to complete merge",
            "Conflicts mean Git needs human judgment — not failure",
            "Small frequent merges reduce conflict size"
          ],
          guidedExample: {
            title: "Recognize Conflict Markers",
            steps:             [
              "Read a sample conflict block in docs — identify HEAD vs incoming side",
              "Note git status shows both branches unmerged",
              "Decide final text removing all marker lines",
              "git add resolved-file after editing",
              "git commit completes the merge — no special merge flag needed"
            ],
          },
          commonMistakes:           [
            "Deleting the entire file instead of editing markers",
            "Committing with markers still inside the file",
            "Running git merge --abort without trying to understand the conflict"
          ],
          examTraps:           [
            "Assuming conflict means someone did something wrong — parallel work causes them",
            "Force pushing to avoid conflicts — creates worse remote problems",
            "Ignoring status during merge — you will commit half-resolved files"
          ],
          realWorldScenario: "Two teammates edit the same README heading on different branches. Merge shows markers. You pick the approved title, remove markers, commit — ship continues.",
          quiz:           [
            {
              "id": "git-conflicts-intro-q1",
              "prompt": "What do <<<<<<< HEAD markers in a file mean?",
              "choices": [
                {
                  "id": "a",
                  "text": "File is deleted"
                },
                {
                  "id": "b",
                  "text": "Push succeeded"
                },
                {
                  "id": "c",
                  "text": "Merge conflict — resolve markers"
                },
                {
                  "id": "d",
                  "text": "Branch renamed"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Git paused a merge and needs you to pick combined content.",
              "difficulty": "medium"
            },
            {
              "id": "git-conflicts-intro-q2",
              "prompt": "During conflict run first:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "rm .git"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status.",
              "difficulty": "easy"
            },
            {
              "id": "git-conflicts-intro-q3",
              "prompt": "After editing conflict file:",
              "choices": [
                {
                  "id": "a",
                  "text": "Push only"
                },
                {
                  "id": "b",
                  "text": "git add then commit"
                },
                {
                  "id": "c",
                  "text": "Delete branch"
                },
                {
                  "id": "d",
                  "text": "Skip add"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git add then commit.",
              "difficulty": "medium"
            },
            {
              "id": "git-conflicts-intro-q4",
              "prompt": "Conflict markers must:",
              "choices": [
                {
                  "id": "a",
                  "text": "Stay forever"
                },
                {
                  "id": "b",
                  "text": "Push automatically"
                },
                {
                  "id": "c",
                  "text": "Replace .git"
                },
                {
                  "id": "d",
                  "text": "Be removed before commit"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Be removed before commit.",
              "difficulty": "easy"
            },
            {
              "id": "git-conflicts-intro-q5",
              "prompt": "Reduce conflicts by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never merge"
                },
                {
                  "id": "b",
                  "text": "Force push daily"
                },
                {
                  "id": "c",
                  "text": "Merge main into feature regularly"
                },
                {
                  "id": "d",
                  "text": "Delete main"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Merging main into feature often.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-conflicts-intro-b1",
              "prompt": "Markers include:",
              "choices": [
                {
                  "id": "a",
                  "text": "Conflict markers"
                },
                {
                  "id": "b",
                  "text": "JSON only"
                },
                {
                  "id": "c",
                  "text": "HTML tags"
                },
                {
                  "id": "d",
                  "text": "SSH headers"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "<<<<<<< ======= >>>>>>>."
            },
            {
              "id": "git-conflicts-intro-b2",
              "prompt": "Unmerged files shown in:",
              "choices": [
                {
                  "id": "a",
                  "text": "git remote"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "git config --list only"
                },
                {
                  "id": "d",
                  "text": "git clean always"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status."
            },
            {
              "id": "git-conflicts-intro-b3",
              "prompt": "Abort merge:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete .git"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "merge --abort"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git merge --abort."
            },
            {
              "id": "git-conflicts-intro-b4",
              "prompt": "Conflict not corruption:",
              "choices": [
                {
                  "id": "a",
                  "text": "Normal pause state"
                },
                {
                  "id": "b",
                  "text": "Repo ruined"
                },
                {
                  "id": "c",
                  "text": "Must reclone"
                },
                {
                  "id": "d",
                  "text": "Illegal state"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Git waits for your edit."
            },
            {
              "id": "git-conflicts-intro-b5",
              "prompt": "Commit with markers:",
              "choices": [
                {
                  "id": "a",
                  "text": "Best practice"
                },
                {
                  "id": "b",
                  "text": "Required"
                },
                {
                  "id": "c",
                  "text": "Auto fixed"
                },
                {
                  "id": "d",
                  "text": "Bad — remove first"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Bad — breaks code and review."
            },
            {
              "id": "git-conflicts-intro-b6",
              "prompt": "HEAD in marker means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Remote only"
                },
                {
                  "id": "b",
                  "text": "Current branch side"
                },
                {
                  "id": "c",
                  "text": "Deleted content"
                },
                {
                  "id": "d",
                  "text": "GitHub UI"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Current branch version."
            },
            {
              "id": "git-conflicts-intro-b7",
              "prompt": "Finish merge after fix:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force only"
                },
                {
                  "id": "b",
                  "text": "add + commit"
                },
                {
                  "id": "c",
                  "text": "new init"
                },
                {
                  "id": "d",
                  "text": "ignore"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "add resolved files + commit."
            },
            {
              "id": "git-conflicts-intro-b8",
              "prompt": "Module 3 lab branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip branches"
                },
                {
                  "id": "b",
                  "text": "Branch merge lab"
                },
                {
                  "id": "c",
                  "text": "Only GitHub"
                },
                {
                  "id": "d",
                  "text": "No merge"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Practice branch merge workflow."
            }
          ],
          flashcards:           [
            {
              "id": "git-conflicts-intro-f1",
              "front": "Conflict markers?",
              "back": "<<<<<<< ======= >>>>>>>"
            },
            {
              "id": "git-conflicts-intro-f2",
              "front": "Conflict first step?",
              "back": "git status — see unmerged files"
            },
            {
              "id": "git-conflicts-intro-f3",
              "front": "After fix?",
              "back": "Remove markers → add → commit"
            },
            {
              "id": "git-conflicts-intro-f4",
              "front": "Conflict means?",
              "back": "Git needs human merge decision"
            },
            {
              "id": "git-conflicts-intro-f5",
              "front": "Prevention?",
              "back": "Merge main into feature often"
            }
          ],
          externalResources: [LOCAL_GIT_RESOURCE],
          assignments: [
            {
              "id": "git-lab-branches",
              "title": "Branches Lab",
              "type": "external-lab",
              "instructions": "Goal: Branch, commit, merge to main — local hello-bridge repo.\n\n### Try It\n1. cd hello-bridge && git status — confirm on main\n2. git switch -c add-notes\n3. echo \"Lab notes\" > notes.txt && git add notes.txt && git commit -m \"Add lab notes file\"\n4. git switch main && git merge add-notes\n5. git log --oneline --graph — verify merge\n\n### Break It\n6. git switch -c wrong-branch && echo \"oops\" >> notes.txt && git add . && git commit -m \"Commit on wrong branch\"\n\n### Fix It\n7. git log --oneline -3 — copy commit hash from wrong-branch\n8. git switch main && git cherry-pick <hash> (or merge wrong-branch if preferred)\n9. git status — confirm notes change on main",
              "estimatedMinutes": 35,
              "externalResourceId": "local-git",
              "completionCriteria": [
                "Created feature branch and committed",
                "Merged branch to main successfully",
                "Completed Break/Fix wrong-branch recovery",
                "Verified history with git log --graph"
              ],
              "relatedTopicIds": [
                "git-branching-basics",
                "git-merge-basics",
                "git-conflicts-intro"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "github-remotes",
      name: "Module 4 — GitHub Remotes",
      topics: [
        {
          id: "git-remotes-explained",
          name: "Remotes Explained",
          prerequisites: ["git-conflicts-intro"],
          objectives: ["GIT-M04-O1","GIT-M04-O2","GIT-M04-O3"],
          lesson: {
            title: "Remotes Explained",
            content: `A remote is a named bookmark to another copy of your repository — usually on GitHub. origin is the default name for the server you cloned from or pushed to first. Local commits live in .git; remotes let you exchange commits with teammates.

git remote -v lists URLs for fetch and push. git remote add origin URL connects an existing local repo to GitHub after you create an empty repository online.

Push sends your commits upstream; fetch downloads remote commits without merging; pull is fetch plus merge (or rebase). Your local repo remains the workspace — remote is a conversation partner, not a replacement.

Losing network does not delete local history. Pushing requires authentication (HTTPS or SSH). Create a free GitHub account before this module's lab.

Never confuse remote with cloud backup alone — you choose what to push; Git history stays structured with messages and branches.`,
            experience: GIT_REMOTES_EXPLAINED_EXPERIENCE,
          },
          keyFacts:           [
            "origin is the default remote name",
            "git remote -v shows fetch and push URLs",
            "Push uploads commits; pull downloads and integrates",
            "Local repo works offline — remotes need network",
            "git remote add origin URL links local repo to GitHub"
          ],
          guidedExample: {
            title: "Connect Local to Remote",
            steps:             [
              "Create empty repo on GitHub — no README if you have local commits",
              "Copy HTTPS or SSH URL from GitHub",
              "git remote add origin URL in local hello-bridge",
              "git remote -v — verify fetch and push URLs",
              "git push -u origin main — send commits and set upstream tracking"
            ],
          },
          commonMistakes:           [
            "Pushing before adding any remote",
            "Typos in remote URL causing authentication errors",
            "Assuming clone and init are the same workflow"
          ],
          examTraps:           [
            "Saying backup when you mean push — push shares commits, not arbitrary folders",
            "Adding origin twice with different URLs — remove and re-add carefully",
            "Confusing GitHub repo name with local folder name — they can differ"
          ],
          realWorldScenario: "Your laptop has hello-bridge commits; GitHub has nothing. You create remote repo, git remote add origin, push — teammates can clone the same history.",
          quiz:           [
            {
              "id": "git-remotes-explained-q1",
              "prompt": "What is origin in Git?",
              "choices": [
                {
                  "id": "a",
                  "text": "Your username"
                },
                {
                  "id": "b",
                  "text": "Default remote name"
                },
                {
                  "id": "c",
                  "text": "Main branch only"
                },
                {
                  "id": "d",
                  "text": "Commit message prefix"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Default nickname for the primary remote repository URL.",
              "difficulty": "easy"
            },
            {
              "id": "git-remotes-explained-q2",
              "prompt": "List remotes:",
              "choices": [
                {
                  "id": "a",
                  "text": "git remote -v"
                },
                {
                  "id": "b",
                  "text": "git log"
                },
                {
                  "id": "c",
                  "text": "git branch -a only"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git remote -v.",
              "difficulty": "easy"
            },
            {
              "id": "git-remotes-explained-q3",
              "prompt": "Push sends:",
              "choices": [
                {
                  "id": "a",
                  "text": "Remote to local only"
                },
                {
                  "id": "b",
                  "text": "Emails"
                },
                {
                  "id": "c",
                  "text": "Local commits upstream"
                },
                {
                  "id": "d",
                  "text": "Deletes main"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Local commits to remote.",
              "difficulty": "medium"
            },
            {
              "id": "git-remotes-explained-q4",
              "prompt": "Offline local repo:",
              "choices": [
                {
                  "id": "a",
                  "text": "Empty"
                },
                {
                  "id": "b",
                  "text": "Keeps local history"
                },
                {
                  "id": "c",
                  "text": "Deletes .git"
                },
                {
                  "id": "d",
                  "text": "Requires Wi-Fi"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Still has full local history.",
              "difficulty": "medium"
            },
            {
              "id": "git-remotes-explained-q5",
              "prompt": "Add remote to existing repo:",
              "choices": [
                {
                  "id": "a",
                  "text": "git clone ."
                },
                {
                  "id": "b",
                  "text": "git init again"
                },
                {
                  "id": "c",
                  "text": "delete .git"
                },
                {
                  "id": "d",
                  "text": "remote add origin URL"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "git remote add origin URL.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-remotes-explained-b1",
              "prompt": "Remote is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Bookmark URL"
                },
                {
                  "id": "b",
                  "text": "Local branch"
                },
                {
                  "id": "c",
                  "text": "Editor plugin"
                },
                {
                  "id": "d",
                  "text": "Wi-Fi"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Bookmark to another repo copy."
            },
            {
              "id": "git-remotes-explained-b2",
              "prompt": "Default remote name:",
              "choices": [
                {
                  "id": "a",
                  "text": "main"
                },
                {
                  "id": "b",
                  "text": "origin"
                },
                {
                  "id": "c",
                  "text": "HEAD"
                },
                {
                  "id": "d",
                  "text": "master only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "origin."
            },
            {
              "id": "git-remotes-explained-b3",
              "prompt": "pull combines:",
              "choices": [
                {
                  "id": "a",
                  "text": "Push only"
                },
                {
                  "id": "b",
                  "text": "Delete remote"
                },
                {
                  "id": "c",
                  "text": "Fetch and merge"
                },
                {
                  "id": "d",
                  "text": "Init"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Fetch + integrate changes."
            },
            {
              "id": "git-remotes-explained-b4",
              "prompt": "remote -v shows:",
              "choices": [
                {
                  "id": "a",
                  "text": "URLs"
                },
                {
                  "id": "b",
                  "text": "Passwords"
                },
                {
                  "id": "c",
                  "text": "CPU usage"
                },
                {
                  "id": "d",
                  "text": "Branch colors"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Fetch and push URLs."
            },
            {
              "id": "git-remotes-explained-b5",
              "prompt": "Push requires:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nothing"
                },
                {
                  "id": "b",
                  "text": "Network + auth"
                },
                {
                  "id": "c",
                  "text": "Only GUI"
                },
                {
                  "id": "d",
                  "text": "USB"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Network and authentication."
            },
            {
              "id": "git-remotes-explained-b6",
              "prompt": "Local without push:",
              "choices": [
                {
                  "id": "a",
                  "text": "Commits remain"
                },
                {
                  "id": "b",
                  "text": "All lost"
                },
                {
                  "id": "c",
                  "text": "Illegal"
                },
                {
                  "id": "d",
                  "text": "Auto sync"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Commits still exist locally."
            },
            {
              "id": "git-remotes-explained-b7",
              "prompt": "Wrong remote URL fix:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete project"
                },
                {
                  "id": "b",
                  "text": "Reinstall OS"
                },
                {
                  "id": "c",
                  "text": "set-url or re-add"
                },
                {
                  "id": "d",
                  "text": "Force only"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "remote set-url or remove/re-add."
            },
            {
              "id": "git-remotes-explained-b8",
              "prompt": "GitHub account for module:",
              "choices": [
                {
                  "id": "a",
                  "text": "Enterprise only"
                },
                {
                  "id": "b",
                  "text": "Free account OK"
                },
                {
                  "id": "c",
                  "text": "No account ever"
                },
                {
                  "id": "d",
                  "text": "Paid only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Free account sufficient."
            }
          ],
          flashcards:           [
            {
              "id": "git-remotes-explained-f1",
              "front": "Default remote?",
              "back": "origin"
            },
            {
              "id": "git-remotes-explained-f2",
              "front": "See remote URLs?",
              "back": "git remote -v"
            },
            {
              "id": "git-remotes-explained-f3",
              "front": "Push vs pull?",
              "back": "Push up · pull down and merge"
            },
            {
              "id": "git-remotes-explained-f4",
              "front": "Offline?",
              "back": "Local commits safe without network"
            },
            {
              "id": "git-remotes-explained-f5",
              "front": "Link existing local repo?",
              "back": "git remote add origin URL"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
        {
          id: "git-clone-push-pull",
          name: "Clone, Push, Pull",
          prerequisites: ["git-remotes-explained"],
          objectives: ["GIT-M04-O4","GIT-M04-O5","GIT-M04-O6"],
          lesson: {
            title: "Clone, Push, Pull",
            content: `git clone URL downloads a repository with full history and checks out the default branch — use it to start from an existing GitHub project. Clone once; daily work uses pull and push.

git push origin branch-name sends local commits to GitHub. git pull origin main fetches and merges remote updates into your current branch. Pull before push when teammates may have merged changes — avoids non-fast-forward rejections.

-u on first push sets upstream tracking so later git push and git pull need fewer arguments. git status shows ahead/behind counts when tracking is configured.

Sync habit: pull at start of day, commit locally, pull again before push, then push. Module lab creates GitHub repo, pushes hello-bridge, clones to second folder, simulates remote change, pulls.

When push is rejected non-fast-forward, do not force — pull, resolve if needed, push again.`,
            experience: GIT_CLONE_PUSH_PULL_EXPERIENCE,
          },
          keyFacts:           [
            "git clone copies remote repo with history",
            "git push uploads local commits to remote",
            "git pull integrates remote changes locally",
            "Non-fast-forward rejection means remote has commits you lack",
            "git push -u origin main sets upstream tracking"
          ],
          guidedExample: {
            title: "Push, Clone, Pull Sync",
            steps:             [
              "Push hello-bridge to GitHub with git push -u origin main",
              "Clone to ../hello-bridge-clone with git clone URL",
              "Edit README on GitHub web UI — commit there",
              "In clone folder: git pull — see remote README change",
              "In original folder: git pull before next push"
            ],
          },
          commonMistakes:           [
            "Force pushing to fix rejection without pulling first",
            "Cloning inside an existing repo folder",
            "Forgetting pull before push on shared branches"
          ],
          examTraps:           [
            "git push --force on shared main — overwrites teammates' work",
            "Assuming clone updates automatically — need pull",
            "HTTPS auth failures from expired tokens — regenerate on GitHub"
          ],
          realWorldScenario: "Teammate merged overnight. Your push rejects. You git pull, merge completes fast-forward, push succeeds — no force needed.",
          quiz:           [
            {
              "id": "git-clone-push-pull-q1",
              "prompt": "Push rejected as non-fast-forward. Best first response?",
              "choices": [
                {
                  "id": "a",
                  "text": "git push --force"
                },
                {
                  "id": "b",
                  "text": "git pull then push"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "New clone always"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Pull remote changes, integrate, then push again.",
              "difficulty": "medium"
            },
            {
              "id": "git-clone-push-pull-q2",
              "prompt": "git clone:",
              "choices": [
                {
                  "id": "a",
                  "text": "Download full history"
                },
                {
                  "id": "b",
                  "text": "Deletes remote"
                },
                {
                  "id": "c",
                  "text": "Only gets latest file"
                },
                {
                  "id": "d",
                  "text": "Creates branch only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Downloads repo with full history.",
              "difficulty": "easy"
            },
            {
              "id": "git-clone-push-pull-q3",
              "prompt": "git pull:",
              "choices": [
                {
                  "id": "a",
                  "text": "Push only"
                },
                {
                  "id": "b",
                  "text": "Delete local"
                },
                {
                  "id": "c",
                  "text": "Fetch + merge"
                },
                {
                  "id": "d",
                  "text": "Init remote"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Fetch and merge remote into current branch.",
              "difficulty": "easy"
            },
            {
              "id": "git-clone-push-pull-q4",
              "prompt": "Upstream tracking set by:",
              "choices": [
                {
                  "id": "a",
                  "text": "git init"
                },
                {
                  "id": "b",
                  "text": "push -u origin branch"
                },
                {
                  "id": "c",
                  "text": "git clean"
                },
                {
                  "id": "d",
                  "text": "git ignore"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git push -u origin branch.",
              "difficulty": "medium"
            },
            {
              "id": "git-clone-push-pull-q5",
              "prompt": "Before push on shared branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "Force always"
                },
                {
                  "id": "b",
                  "text": "Skip network"
                },
                {
                  "id": "c",
                  "text": "Delete main"
                },
                {
                  "id": "d",
                  "text": "Pull first"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Pull to integrate remote first.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-clone-push-pull-b1",
              "prompt": "Clone use case:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete local"
                },
                {
                  "id": "b",
                  "text": "Start from remote repo"
                },
                {
                  "id": "c",
                  "text": "Ignore history"
                },
                {
                  "id": "d",
                  "text": "Push only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Start from existing GitHub repo."
            },
            {
              "id": "git-clone-push-pull-b2",
              "prompt": "Non-fast-forward means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Remote ahead"
                },
                {
                  "id": "b",
                  "text": "Wi-Fi down"
                },
                {
                  "id": "c",
                  "text": "Branch illegal"
                },
                {
                  "id": "d",
                  "text": "No auth"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Remote has commits you missing."
            },
            {
              "id": "git-clone-push-pull-b3",
              "prompt": "Force push risk:",
              "choices": [
                {
                  "id": "a",
                  "text": "None"
                },
                {
                  "id": "b",
                  "text": "Always safe"
                },
                {
                  "id": "c",
                  "text": "Overwrites team work"
                },
                {
                  "id": "d",
                  "text": "Required daily"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Overwrites shared remote history."
            },
            {
              "id": "git-clone-push-pull-b4",
              "prompt": "pull vs fetch:",
              "choices": [
                {
                  "id": "a",
                  "text": "Same always"
                },
                {
                  "id": "b",
                  "text": "pull merges in"
                },
                {
                  "id": "c",
                  "text": "fetch merges always"
                },
                {
                  "id": "d",
                  "text": "Neither needs network"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "pull merges; fetch only downloads."
            },
            {
              "id": "git-clone-push-pull-b5",
              "prompt": "Second machine workflow:",
              "choices": [
                {
                  "id": "a",
                  "text": "Email ZIP"
                },
                {
                  "id": "b",
                  "text": "Clone + sync"
                },
                {
                  "id": "c",
                  "text": "Copy .git only"
                },
                {
                  "id": "d",
                  "text": "Screenshot"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Clone then pull/push."
            },
            {
              "id": "git-clone-push-pull-b6",
              "prompt": "HTTPS push needs:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nothing"
                },
                {
                  "id": "b",
                  "text": "Paper note"
                },
                {
                  "id": "c",
                  "text": "Auth token/password"
                },
                {
                  "id": "d",
                  "text": "GUI only"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Valid credentials/token."
            },
            {
              "id": "git-clone-push-pull-b7",
              "prompt": "status ahead/behind:",
              "choices": [
                {
                  "id": "a",
                  "text": "CPU info"
                },
                {
                  "id": "b",
                  "text": "Remote tracking info"
                },
                {
                  "id": "c",
                  "text": "License"
                },
                {
                  "id": "d",
                  "text": "RAM"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Compares to tracked remote branch."
            },
            {
              "id": "git-clone-push-pull-b8",
              "prompt": "Module 4 lab:",
              "choices": [
                {
                  "id": "a",
                  "text": "PR merge only"
                },
                {
                  "id": "b",
                  "text": "Push clone pull"
                },
                {
                  "id": "c",
                  "text": "No GitHub"
                },
                {
                  "id": "d",
                  "text": "Only init"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Push, clone, pull sync."
            }
          ],
          flashcards:           [
            {
              "id": "git-clone-push-pull-f1",
              "front": "Start from GitHub project?",
              "back": "git clone URL"
            },
            {
              "id": "git-clone-push-pull-f2",
              "front": "Push rejected?",
              "back": "pull → integrate → push"
            },
            {
              "id": "git-clone-push-pull-f3",
              "front": "Daily sync?",
              "back": "pull before push on shared branches"
            },
            {
              "id": "git-clone-push-pull-f4",
              "front": "Set upstream?",
              "back": "git push -u origin branch"
            },
            {
              "id": "git-clone-push-pull-f5",
              "front": "Never on shared main?",
              "back": "git push --force without team OK"
            }
          ],
          externalResources: [GITHUB_FREE_RESOURCE],
          assignments: [
            {
              "id": "git-lab-github-remote",
              "title": "GitHub Remote Sync",
              "type": "external-lab",
              "instructions": "Goal: Connect hello-bridge to GitHub — push, clone, pull. Free GitHub account required.\n\n### Try It\n1. Create empty GitHub repo (no README if pushing existing hello-bridge)\n2. git remote add origin <URL> && git push -u origin main\n3. Clone to second folder: git clone <URL> hello-bridge-clone\n4. Edit README on GitHub web — commit\n5. In clone: git pull — see remote change\n\n### Break It\n6. Make local commit without pulling; attempt git push — read non-fast-forward rejection\n\n### Fix It\n7. git pull origin main (merge or rebase per your team habit)\n8. git push origin main — succeeds after integration\n9. git status — confirm clean and synced",
              "estimatedMinutes": 40,
              "externalResourceId": "github-free",
              "completionCriteria": [
                "Pushed local repo to GitHub",
                "Cloned repo to second location",
                "Pulled remote changes successfully",
                "Fixed non-fast-forward push rejection"
              ],
              "relatedTopicIds": [
                "git-remotes-explained",
                "git-clone-push-pull"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "professional-workflow",
      name: "Module 5 — Professional Workflow",
      topics: [
        {
          id: "git-pull-requests",
          name: "Pull Requests",
          prerequisites: ["git-clone-push-pull"],
          objectives: ["GIT-M05-O1","GIT-M05-O2","GIT-M05-O3"],
          lesson: {
            title: "Pull Requests",
            content: `A pull request (PR) asks maintainers to merge your branch after review — GitHub UI on top of Git push. Workflow: branch locally, commit, push branch, open PR, review diff, address feedback, merge, delete branch, pull updated main.

PRs catch mistakes before merge — diff view shows every line changed. Self-review before requesting others: read your own diff as if you were the reviewer.

Bridge team workflow matches this track: branch from dev, PR into dev, never push directly to main. Same mechanics on any repo.

PR title and description explain why the change exists — link tickets, note testing done. Small PRs review faster than thousand-line dumps.

After merge on GitHub, git checkout main && git pull locally so your machine matches remote.`,
            experience: GIT_PULL_REQUESTS_EXPERIENCE,
          },
          keyFacts:           [
            "PRs propose merging a branch after review",
            "Push feature branch before opening PR on GitHub",
            "Diff view shows line changes reviewers judge",
            "Merge via GitHub UI integrates into target branch",
            "Pull locally after remote merge to sync main"
          ],
          guidedExample: {
            title: "Open and Review a PR",
            steps:             [
              "git switch -c feature/docs-tweak && edit README",
              "Commit and git push -u origin feature/docs-tweak",
              "On GitHub: Compare & pull request → choose base main",
              "Read diff tab line by line — note any accidental edits",
              "Merge PR, delete branch on GitHub, git pull on local main"
            ],
          },
          commonMistakes:           [
            "Opening PR from unpushed local-only branch",
            "Merging without reading the diff",
            "Forgetting git pull after GitHub merge leaves stale local main"
          ],
          examTraps:           [
            "PR against wrong base branch — verify main vs dev",
            "Huge PR with unrelated changes — reviewers reject or delay",
            "Assuming merge on GitHub updates laptop automatically"
          ],
          realWorldScenario: "You fix a typo in team docs. Feature branch, push, PR with screenshot of preview, reviewer approves, merge — audit trail shows who approved what.",
          quiz:           [
            {
              "id": "git-pull-requests-q1",
              "prompt": "Why do teams use pull requests?",
              "choices": [
                {
                  "id": "a",
                  "text": "Review before merge"
                },
                {
                  "id": "b",
                  "text": "Replace git commit"
                },
                {
                  "id": "c",
                  "text": "Delete branches"
                },
                {
                  "id": "d",
                  "text": "Avoid Git entirely"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Review changes before merging into shared branches.",
              "difficulty": "easy"
            },
            {
              "id": "git-pull-requests-q2",
              "prompt": "Before opening PR:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete main"
                },
                {
                  "id": "b",
                  "text": "Push feature branch"
                },
                {
                  "id": "c",
                  "text": "Only local commit"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Push feature branch to remote.",
              "difficulty": "easy"
            },
            {
              "id": "git-pull-requests-q3",
              "prompt": "PR diff shows:",
              "choices": [
                {
                  "id": "a",
                  "text": "Wi-Fi list"
                },
                {
                  "id": "b",
                  "text": "SSH keys"
                },
                {
                  "id": "c",
                  "text": "Line-level changes"
                },
                {
                  "id": "d",
                  "text": "Disk usage"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Line changes between base and branch.",
              "difficulty": "easy"
            },
            {
              "id": "git-pull-requests-q4",
              "prompt": "After GitHub merge locally:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never pull"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "delete .git"
                },
                {
                  "id": "d",
                  "text": "git pull main"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "git pull on main.",
              "difficulty": "medium"
            },
            {
              "id": "git-pull-requests-q5",
              "prompt": "Bridge workflow:",
              "choices": [
                {
                  "id": "a",
                  "text": "Push main direct"
                },
                {
                  "id": "b",
                  "text": "PR to dev branch"
                },
                {
                  "id": "c",
                  "text": "No branches"
                },
                {
                  "id": "d",
                  "text": "Email patch"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Branch dev, PR to dev, not direct main push.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-pull-requests-b1",
              "prompt": "PR is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Local only"
                },
                {
                  "id": "b",
                  "text": "Merge request + review"
                },
                {
                  "id": "c",
                  "text": "git init alias"
                },
                {
                  "id": "d",
                  "text": "Force push"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Request to merge after review."
            },
            {
              "id": "git-pull-requests-b2",
              "prompt": "Self-review means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip diff"
                },
                {
                  "id": "b",
                  "text": "Read own diff first"
                },
                {
                  "id": "c",
                  "text": "Merge instantly"
                },
                {
                  "id": "d",
                  "text": "Delete branch"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Read your diff before others."
            },
            {
              "id": "git-pull-requests-b3",
              "prompt": "PR base branch:",
              "choices": [
                {
                  "id": "a",
                  "text": "Random"
                },
                {
                  "id": "b",
                  "text": "Always feature"
                },
                {
                  "id": "c",
                  "text": "Target like main"
                },
                {
                  "id": "d",
                  "text": "origin URL"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Target receiving merge — often main/dev."
            },
            {
              "id": "git-pull-requests-b4",
              "prompt": "Small PRs:",
              "choices": [
                {
                  "id": "a",
                  "text": "Slower always"
                },
                {
                  "id": "b",
                  "text": "Easier review"
                },
                {
                  "id": "c",
                  "text": "Forbidden"
                },
                {
                  "id": "d",
                  "text": "No diff"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Review faster, fewer mistakes hide."
            },
            {
              "id": "git-pull-requests-b5",
              "prompt": "Post-merge local sync:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never sync"
                },
                {
                  "id": "b",
                  "text": "pull updated main"
                },
                {
                  "id": "c",
                  "text": "Reclone always"
                },
                {
                  "id": "d",
                  "text": "Force push"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git pull on updated branch."
            },
            {
              "id": "git-pull-requests-b6",
              "prompt": "PR without push:",
              "choices": [
                {
                  "id": "a",
                  "text": "Works fine"
                },
                {
                  "id": "b",
                  "text": "Auto magic"
                },
                {
                  "id": "c",
                  "text": "Uses email"
                },
                {
                  "id": "d",
                  "text": "Fails — push first"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "GitHub cannot see commits."
            },
            {
              "id": "git-pull-requests-b7",
              "prompt": "Review catches:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nothing"
                },
                {
                  "id": "b",
                  "text": "Only style"
                },
                {
                  "id": "c",
                  "text": "Secrets and logic errors"
                },
                {
                  "id": "d",
                  "text": "Hardware"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Accidental secrets and typos."
            },
            {
              "id": "git-pull-requests-b8",
              "prompt": "Delete branch after merge:",
              "choices": [
                {
                  "id": "a",
                  "text": "Deletes code from main"
                },
                {
                  "id": "b",
                  "text": "Cleanup merged branch"
                },
                {
                  "id": "c",
                  "text": "Illegal"
                },
                {
                  "id": "d",
                  "text": "Removes history"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Housekeeping — main has commits."
            }
          ],
          flashcards:           [
            {
              "id": "git-pull-requests-f1",
              "front": "PR purpose?",
              "back": "Review before merge to shared branch"
            },
            {
              "id": "git-pull-requests-f2",
              "front": "PR steps?",
              "back": "branch → commit → push → open PR"
            },
            {
              "id": "git-pull-requests-f3",
              "front": "Before asking review?",
              "back": "Read your own diff"
            },
            {
              "id": "git-pull-requests-f4",
              "front": "After GitHub merge?",
              "back": "git pull locally"
            },
            {
              "id": "git-pull-requests-f5",
              "front": "Bridge rule?",
              "back": "PR into dev — no direct main push"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "git-commit-messages",
          name: "Commit Messages That Help",
          prerequisites: ["git-pull-requests"],
          objectives: ["GIT-M05-O4","GIT-M05-O5","GIT-M05-O6"],
          lesson: {
            title: "Commit Messages That Help",
            content: `Commit messages explain why a change exists — future you and reviewers read git log like a story. First line: imperative summary under ~50 chars — Add login retry, Fix typo in README. Body optional: context, ticket link, what you tested.

Bad: fixed stuff, wip, asdf. Good: Document API timeout in README — support asked for clearer error steps.

Atomic commits: one logical change per commit — easier revert and review. Mixed refactors plus feature in one commit forces all-or-nothing rollback.

PR description complements messages — messages are per commit; PR summarizes the whole change set.

Teams may adopt Conventional Commits (feat:, fix:) — follow project CONTRIBUTING.md. Bridge content uses clear plain English why-focused messages.`,
            experience: GIT_COMMIT_MESSAGES_EXPERIENCE,
          },
          keyFacts:           [
            "First line: imperative summary of the change",
            "Explain why — not only what file changed",
            "One logical change per commit when possible",
            "Avoid vague messages: fix, wip, update",
            "Match team CONTRIBUTING conventions if present"
          ],
          guidedExample: {
            title: "Write a Reviewer-Friendly Message",
            steps:             [
              "Identify why: e.g., clarify install steps for Windows users",
              "Subject: Document Git install path for Windows in README",
              "Body: Support ticket #42 — users missed winget option",
              "git commit -m \"subject\" -m \"body paragraph\"",
              "git log -1 — verify message readable in log"
            ],
          },
          commonMistakes:           [
            "Empty or one-word messages on shared repos",
            "Combining unrelated changes in one commit",
            "Writing novels in subject line instead of body"
          ],
          examTraps:           [
            "Commit messages like fixed bug without which bug — useless in git blame",
            "Squashing everything to wip before PR — loses review granularity",
            "Copying ticket number only with no human sentence"
          ],
          realWorldScenario: "On-call finds bad doc caused misconfig. git log shows Document TLS verify steps — author, date, and why without opening email archive.",
          quiz:           [
            {
              "id": "git-commit-messages-q1",
              "prompt": "Which commit message is strongest for a team repo?",
              "choices": [
                {
                  "id": "a",
                  "text": "wip"
                },
                {
                  "id": "b",
                  "text": "fixed stuff"
                },
                {
                  "id": "c",
                  "text": "Document API timeout in README"
                },
                {
                  "id": "d",
                  "text": "asdf"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Imperative summary explaining the change purpose.",
              "difficulty": "easy"
            },
            {
              "id": "git-commit-messages-q2",
              "prompt": "Message should explain:",
              "choices": [
                {
                  "id": "a",
                  "text": "Your lunch"
                },
                {
                  "id": "b",
                  "text": "Why change needed"
                },
                {
                  "id": "c",
                  "text": "CPU serial"
                },
                {
                  "id": "d",
                  "text": "Wi-Fi password"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Why the change was needed.",
              "difficulty": "easy"
            },
            {
              "id": "git-commit-messages-q3",
              "prompt": "Atomic commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Everything at once"
                },
                {
                  "id": "b",
                  "text": "One logical change"
                },
                {
                  "id": "c",
                  "text": "No messages"
                },
                {
                  "id": "d",
                  "text": "Binary only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "One logical change per commit.",
              "difficulty": "medium"
            },
            {
              "id": "git-commit-messages-q4",
              "prompt": "Imperative subject example:",
              "choices": [
                {
                  "id": "a",
                  "text": "Added filtering maybe"
                },
                {
                  "id": "b",
                  "text": "I added filters"
                },
                {
                  "id": "c",
                  "text": "filters"
                },
                {
                  "id": "d",
                  "text": "Add user export filter"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Add user export filter.",
              "difficulty": "medium"
            },
            {
              "id": "git-commit-messages-q5",
              "prompt": "Long context goes in:",
              "choices": [
                {
                  "id": "a",
                  "text": "Subject only always"
                },
                {
                  "id": "b",
                  "text": "Commit body"
                },
                {
                  "id": "c",
                  "text": ".git/config"
                },
                {
                  "id": "d",
                  "text": "Branch name"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Commit body after blank line.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-commit-messages-b1",
              "prompt": "Bad message:",
              "choices": [
                {
                  "id": "a",
                  "text": "wip"
                },
                {
                  "id": "b",
                  "text": "Add retry to login API"
                },
                {
                  "id": "c",
                  "text": "Fix README install path"
                },
                {
                  "id": "d",
                  "text": "Document env vars"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "wip with no context."
            },
            {
              "id": "git-commit-messages-b2",
              "prompt": "git log readers:",
              "choices": [
                {
                  "id": "a",
                  "text": "Nobody"
                },
                {
                  "id": "b",
                  "text": "Only GitHub"
                },
                {
                  "id": "c",
                  "text": "You and reviewers"
                },
                {
                  "id": "d",
                  "text": "Antivirus"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Future you and reviewers."
            },
            {
              "id": "git-commit-messages-b3",
              "prompt": "Subject line length:",
              "choices": [
                {
                  "id": "a",
                  "text": "Unlimited essay"
                },
                {
                  "id": "b",
                  "text": "Concise summary"
                },
                {
                  "id": "c",
                  "text": "Empty always"
                },
                {
                  "id": "d",
                  "text": "Binary"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Keep concise — detail in body."
            },
            {
              "id": "git-commit-messages-b4",
              "prompt": "feat: prefix from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Conventional Commits"
                },
                {
                  "id": "b",
                  "text": "Random"
                },
                {
                  "id": "c",
                  "text": "Illegal Git"
                },
                {
                  "id": "d",
                  "text": "Windows only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Conventional Commits style."
            },
            {
              "id": "git-commit-messages-b5",
              "prompt": "Mixed refactor+feature:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always one commit"
                },
                {
                  "id": "b",
                  "text": "Never commit"
                },
                {
                  "id": "c",
                  "text": "Delete branch"
                },
                {
                  "id": "d",
                  "text": "Split when possible"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Split commits when possible."
            },
            {
              "id": "git-commit-messages-b6",
              "prompt": "PR description vs commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Identical always"
                },
                {
                  "id": "b",
                  "text": "PR summarizes series"
                },
                {
                  "id": "c",
                  "text": "Commit replaces PR"
                },
                {
                  "id": "d",
                  "text": "Neither matter"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "PR summarizes whole change set."
            },
            {
              "id": "git-commit-messages-b7",
              "prompt": "Blame uses:",
              "choices": [
                {
                  "id": "a",
                  "text": "Colors"
                },
                {
                  "id": "b",
                  "text": "Icons"
                },
                {
                  "id": "c",
                  "text": "Messages and authors"
                },
                {
                  "id": "d",
                  "text": "USB"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Messages to explain line history."
            },
            {
              "id": "git-commit-messages-b8",
              "prompt": "Bridge style:",
              "choices": [
                {
                  "id": "a",
                  "text": "Random chars"
                },
                {
                  "id": "b",
                  "text": "Clear why-focused"
                },
                {
                  "id": "c",
                  "text": "No messages"
                },
                {
                  "id": "d",
                  "text": "Emoji only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Clear why-focused English."
            }
          ],
          flashcards:           [
            {
              "id": "git-commit-messages-f1",
              "front": "Good subject?",
              "back": "Imperative: Add, Fix, Document…"
            },
            {
              "id": "git-commit-messages-f2",
              "front": "Explain?",
              "back": "Why — not only which file"
            },
            {
              "id": "git-commit-messages-f3",
              "front": "Avoid?",
              "back": "wip, asdf, fixed stuff"
            },
            {
              "id": "git-commit-messages-f4",
              "front": "Atomic commit?",
              "back": "One logical change each"
            },
            {
              "id": "git-commit-messages-f5",
              "front": "Long context?",
              "back": "Commit body after blank line"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 25,
          difficulty: "medium",
        },
        {
          id: "git-gitignore-secrets",
          name: ".gitignore and Secrets",
          prerequisites: ["git-commit-messages"],
          objectives: ["GIT-M05-O7","GIT-M05-O8","GIT-M05-O9"],
          lesson: {
            title: ".gitignore and Secrets",
            content: `.gitignore tells Git which paths never to track — .env, node_modules/, build output, OS junk. Create .gitignore in repo root; patterns apply recursively. git status should not list ignored files as untracked.

Never commit secrets: API keys, passwords, private keys, connection strings. Once pushed, assume exposed — rotate credentials and use gitignore going forward. Prevention beats frantic history rewriting.

If you accidentally git add .env, git restore --staged .env unstages without deleting the file. Add .env to .gitignore, commit that rule, verify git status clean.

Security reviews check git history — ignored files never enter timeline. Teams share .gitignore templates per stack.

Module lab: open PR workflow plus Break It staging .env — Fix It with restore --staged and gitignore.`,
            experience: GIT_GITIGNORE_SECRETS_EXPERIENCE,
          },
          keyFacts:           [
            ".gitignore excludes paths from tracking",
            "Never commit .env, keys, or tokens",
            "git restore --staged unstages without deleting file",
            "Rotating leaked secrets is mandatory",
            "Commit .gitignore so team shares same rules"
          ],
          guidedExample: {
            title: "Ignore Local Secrets",
            steps:             [
              "Create .env with fake API_KEY=demo — do not push real secrets",
              "Add .env to .gitignore",
              "git status — .env should not appear as untracked",
              "If staged by mistake: git restore --staged .env",
              "Commit .gitignore with message Explain ignore local env files"
            ],
          },
          commonMistakes:           [
            "git add . without checking for .env",
            "Committing then only deleting file — history still has secret",
            "Sharing .env.example with real values copied in"
          ],
          examTraps:           [
            "Assuming private GitHub repo means secrets are safe — still leaked to anyone with access",
            "Ignoring .gitignore itself — team diverges on tracked junk",
            "Force pushing secret scrub without team coordination"
          ],
          realWorldScenario: "Intern stages .env with database password. Senior catches in PR diff. restore --staged, add gitignore, rotate DB password — crisis avoided before merge.",
          quiz:           [
            {
              "id": "git-gitignore-secrets-q1",
              "prompt": "You accidentally staged .env. First fix?",
              "choices": [
                {
                  "id": "a",
                  "text": "Push anyway"
                },
                {
                  "id": "b",
                  "text": "restore --staged + gitignore"
                },
                {
                  "id": "c",
                  "text": "Delete repo"
                },
                {
                  "id": "d",
                  "text": "Change password only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git restore --staged .env and add .env to .gitignore.",
              "difficulty": "medium"
            },
            {
              "id": "git-gitignore-secrets-q2",
              "prompt": ".gitignore purpose:",
              "choices": [
                {
                  "id": "a",
                  "text": "Exclude paths"
                },
                {
                  "id": "b",
                  "text": "Speed Wi-Fi"
                },
                {
                  "id": "c",
                  "text": "Encrypt disk"
                },
                {
                  "id": "d",
                  "text": "Merge branches"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Exclude paths from Git tracking.",
              "difficulty": "easy"
            },
            {
              "id": "git-gitignore-secrets-q3",
              "prompt": "Secret pushed to GitHub:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore"
                },
                {
                  "id": "b",
                  "text": "Delete branch only"
                },
                {
                  "id": "c",
                  "text": "Rotate secret"
                },
                {
                  "id": "d",
                  "text": "Change wallpaper"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Rotate credential — treat as exposed.",
              "difficulty": "medium"
            },
            {
              "id": "git-gitignore-secrets-q4",
              "prompt": "restore --staged:",
              "choices": [
                {
                  "id": "a",
                  "text": "Deletes file"
                },
                {
                  "id": "b",
                  "text": "Unstages only"
                },
                {
                  "id": "c",
                  "text": "Pushes main"
                },
                {
                  "id": "d",
                  "text": "Creates PR"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Unstages file, keeps working copy.",
              "difficulty": "medium"
            },
            {
              "id": "git-gitignore-secrets-q5",
              "prompt": "Share ignore rules:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never commit"
                },
                {
                  "id": "b",
                  "text": "Email only"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "Commit .gitignore"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Commit .gitignore to repo.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-gitignore-secrets-b1",
              "prompt": "Never commit:",
              "choices": [
                {
                  "id": "a",
                  "text": ".env / keys"
                },
                {
                  "id": "b",
                  "text": "README"
                },
                {
                  "id": "c",
                  "text": ".gitignore"
                },
                {
                  "id": "d",
                  "text": "LICENSE"
                }
              ],
              "correctChoiceId": "a",
              "explanation": ".env and private keys."
            },
            {
              "id": "git-gitignore-secrets-b2",
              "prompt": "node_modules usually:",
              "choices": [
                {
                  "id": "a",
                  "text": "Committed always"
                },
                {
                  "id": "b",
                  "text": "Ignored"
                },
                {
                  "id": "c",
                  "text": "Required on GitHub"
                },
                {
                  "id": "d",
                  "text": "Encrypted"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Listed in .gitignore."
            },
            {
              "id": "git-gitignore-secrets-b3",
              "prompt": "add . risk:",
              "choices": [
                {
                  "id": "a",
                  "text": "None"
                },
                {
                  "id": "b",
                  "text": "Always safe"
                },
                {
                  "id": "c",
                  "text": "May grab secrets"
                },
                {
                  "id": "d",
                  "text": "Illegal"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "May stage secrets if not ignored."
            },
            {
              "id": "git-gitignore-secrets-b4",
              "prompt": "Leaked secret fix includes:",
              "choices": [
                {
                  "id": "a",
                  "text": "Hope"
                },
                {
                  "id": "b",
                  "text": "Screenshot"
                },
                {
                  "id": "c",
                  "text": "Ignore"
                },
                {
                  "id": "d",
                  "text": "Rotate + gitignore"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Rotate + prevent re-commit."
            },
            {
              "id": "git-gitignore-secrets-b5",
              "prompt": "status with good ignore:",
              "choices": [
                {
                  "id": "a",
                  "text": "Shows .env"
                },
                {
                  "id": "b",
                  "text": "Hides ignored .env"
                },
                {
                  "id": "c",
                  "text": "Deletes .env"
                },
                {
                  "id": "d",
                  "text": "Pushes .env"
                }
              ],
              "correctChoiceId": "b",
              "explanation": ".env not listed untracked."
            },
            {
              "id": "git-gitignore-secrets-b6",
              "prompt": ".env.example:",
              "choices": [
                {
                  "id": "a",
                  "text": "Template no secrets"
                },
                {
                  "id": "b",
                  "text": "Real production keys"
                },
                {
                  "id": "c",
                  "text": "Binary"
                },
                {
                  "id": "d",
                  "text": "Ignored always"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Template without real secrets."
            },
            {
              "id": "git-gitignore-secrets-b7",
              "prompt": "Private repo secrets:",
              "choices": [
                {
                  "id": "a",
                  "text": "Public internet"
                },
                {
                  "id": "b",
                  "text": "Safe to leak"
                },
                {
                  "id": "c",
                  "text": "Still sensitive"
                },
                {
                  "id": "d",
                  "text": "Auto encrypted"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Still sensitive — access controlled not public."
            },
            {
              "id": "git-gitignore-secrets-b8",
              "prompt": "Module 5 lab break:",
              "choices": [
                {
                  "id": "a",
                  "text": "Force push"
                },
                {
                  "id": "b",
                  "text": "Stage .env fix"
                },
                {
                  "id": "c",
                  "text": "Delete main"
                },
                {
                  "id": "d",
                  "text": "Skip PR"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Stage .env then fix with restore."
            }
          ],
          flashcards:           [
            {
              "id": "git-gitignore-secrets-f1",
              "front": "Never commit?",
              "back": ".env, keys, tokens"
            },
            {
              "id": "git-gitignore-secrets-f2",
              "front": "Accidental stage?",
              "back": "git restore --staged file"
            },
            {
              "id": "git-gitignore-secrets-f3",
              "front": "Prevent tracking?",
              "back": "Add pattern to .gitignore"
            },
            {
              "id": "git-gitignore-secrets-f4",
              "front": "Secret pushed?",
              "back": "Rotate credential immediately"
            },
            {
              "id": "git-gitignore-secrets-f5",
              "front": "git add . ?",
              "back": "Check status — may grab secrets"
            }
          ],
          externalResources: [GITHUB_FREE_RESOURCE],
          assignments: [
            {
              "id": "git-lab-pull-request",
              "title": "Pull Request Workflow",
              "type": "external-lab",
              "instructions": "Goal: Feature branch, two commits, PR with self-review. GitHub account required.\n\n### Try It\n1. git switch -c feature/pr-lab && make small doc edit — commit\n2. Second commit with another small improvement\n3. git push -u origin feature/pr-lab\n4. Open PR on GitHub — write summary in description\n5. Review diff tab — merge when satisfied\n\n### Break It\n6. Create fake .env with DEMO_KEY=test && git add .env — check status shows staged secret\n\n### Fix It\n7. git restore --staged .env\n8. Add .env to .gitignore && git add .gitignore && commit \"Ignore local env files\"\n9. Verify git status — .env not staged; push branch update",
              "estimatedMinutes": 45,
              "externalResourceId": "github-free",
              "completionCriteria": [
                "Pushed feature branch with two commits",
                "Opened and merged PR with diff review",
                "Fixed staged .env with restore --staged and gitignore",
                "Pulled updated main/dev locally after merge"
              ],
              "relatedTopicIds": [
                "git-pull-requests",
                "git-commit-messages",
                "git-gitignore-secrets"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "recovery",
      name: "Module 6 — Recovery and Real-World Problems",
      topics: [
        {
          id: "git-undo-safely",
          name: "Undo Safely",
          prerequisites: ["git-gitignore-secrets"],
          objectives: ["GIT-M06-O1","GIT-M06-O2","GIT-M06-O3"],
          lesson: {
            title: "Undo Safely",
            content: `Git undo is layered — pick the smallest fix for the mistake. Unstaged file edits: git restore filename discards working tree changes to last commit. Staged but not committed: git restore --staged filename unstages; add --worktree to also discard edits.

Committed locally not pushed: git revert HEAD creates new commit undoing changes — safe for shared history later. git reset --soft HEAD~1 moves branch back keeping changes staged — use when commit was early, not to erase pushed work.

Read git status after every undo command — confirm you are in expected state before next action.

Avoid git reset --hard until you understand it destroys uncommitted work. Module 6 lab practices bad git add recovery with restore.

When unsure, stop — status, log, diff — ask teammate before force or hard reset on shared branches.`,
            experience: GIT_UNDO_SAFELY_EXPERIENCE,
          },
          keyFacts:           [
            "git restore file drops unstaged working tree changes",
            "git restore --staged unstages without deleting edits",
            "git revert adds inverse commit — safe for shared history",
            "git reset --hard destroys uncommitted work — caution",
            "status after undo confirms resulting state"
          ],
          guidedExample: {
            title: "Unstage and Restore",
            steps:             [
              "Edit README and git add — staged",
              "git restore --staged README.md — unstaged, edits remain",
              "Edit again; git restore README.md — discard working changes",
              "Make commit; practice git revert HEAD for safe undo",
              "git status and git log --oneline after each step"
            ],
          },
          commonMistakes:           [
            "Using reset --hard to fix minor staging errors",
            "Reverting without reading what HEAD contains",
            "Undoing on shared pushed commits with reset instead of revert"
          ],
          examTraps:           [
            "Stack Overflow reset --hard as first answer — often overkill",
            "Assuming deleted file is gone — git restore can recover from index",
            "Multiple undo commands without status — compound confusion"
          ],
          realWorldScenario: "You stage wrong config. restore --staged, fix .gitignore, recommit — no force push, no panic.",
          quiz:           [
            {
              "id": "git-undo-safely-q1",
              "prompt": "Wrong file staged, edits should stay. Command?",
              "choices": [
                {
                  "id": "a",
                  "text": "git restore --staged file"
                },
                {
                  "id": "b",
                  "text": "git reset --hard"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "git push --force"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git restore --staged filename.",
              "difficulty": "medium"
            },
            {
              "id": "git-undo-safely-q2",
              "prompt": "Discard unstaged edits:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "git restore file"
                },
                {
                  "id": "c",
                  "text": "git init"
                },
                {
                  "id": "d",
                  "text": "git clone"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git restore filename.",
              "difficulty": "medium"
            },
            {
              "id": "git-undo-safely-q3",
              "prompt": "Safe undo pushed commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "reset --hard on main"
                },
                {
                  "id": "b",
                  "text": "delete remote"
                },
                {
                  "id": "c",
                  "text": "git revert"
                },
                {
                  "id": "d",
                  "text": "ignore"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git revert.",
              "difficulty": "medium"
            },
            {
              "id": "git-undo-safely-q4",
              "prompt": "reset --hard risk:",
              "choices": [
                {
                  "id": "a",
                  "text": "None"
                },
                {
                  "id": "b",
                  "text": "Always safe"
                },
                {
                  "id": "c",
                  "text": "Speeds Wi-Fi"
                },
                {
                  "id": "d",
                  "text": "Destroys uncommitted work"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Destroys uncommitted work.",
              "difficulty": "medium"
            },
            {
              "id": "git-undo-safely-q5",
              "prompt": "After undo always:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "reboot"
                },
                {
                  "id": "d",
                  "text": "rm .git"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git status.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-undo-safely-b1",
              "prompt": "Unstage only:",
              "choices": [
                {
                  "id": "a",
                  "text": "restore --staged"
                },
                {
                  "id": "b",
                  "text": "reset --hard"
                },
                {
                  "id": "c",
                  "text": "push"
                },
                {
                  "id": "d",
                  "text": "init"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git restore --staged."
            },
            {
              "id": "git-undo-safely-b2",
              "prompt": "Discard working edits:",
              "choices": [
                {
                  "id": "a",
                  "text": "commit --force"
                },
                {
                  "id": "b",
                  "text": "restore file"
                },
                {
                  "id": "c",
                  "text": "remote add"
                },
                {
                  "id": "d",
                  "text": "merge abort only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git restore file."
            },
            {
              "id": "git-undo-safely-b3",
              "prompt": "Revert vs reset shared:",
              "choices": [
                {
                  "id": "a",
                  "text": "Reset always"
                },
                {
                  "id": "b",
                  "text": "Delete branch"
                },
                {
                  "id": "c",
                  "text": "Revert safer shared"
                },
                {
                  "id": "d",
                  "text": "Force only"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Revert adds new commit — safer."
            },
            {
              "id": "git-undo-safely-b4",
              "prompt": "soft reset HEAD~1:",
              "choices": [
                {
                  "id": "a",
                  "text": "Undo commit keep changes"
                },
                {
                  "id": "b",
                  "text": "Delete repo"
                },
                {
                  "id": "c",
                  "text": "Push main"
                },
                {
                  "id": "d",
                  "text": "Ignore log"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Undo commit keep staged."
            },
            {
              "id": "git-undo-safely-b5",
              "prompt": "Undo ladder first:",
              "choices": [
                {
                  "id": "a",
                  "text": "Hard reset first"
                },
                {
                  "id": "b",
                  "text": "Smallest fix first"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "New clone"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Smallest fix — restore before hard reset."
            },
            {
              "id": "git-undo-safely-b6",
              "prompt": "status after undo:",
              "choices": [
                {
                  "id": "a",
                  "text": "Optional"
                },
                {
                  "id": "b",
                  "text": "Illegal"
                },
                {
                  "id": "c",
                  "text": "Slows Git"
                },
                {
                  "id": "d",
                  "text": "Confirms state"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Confirms clean or expected files."
            },
            {
              "id": "git-undo-safely-b7",
              "prompt": "Pushed mistake team:",
              "choices": [
                {
                  "id": "a",
                  "text": "Force main always"
                },
                {
                  "id": "b",
                  "text": "Revert + discuss"
                },
                {
                  "id": "c",
                  "text": "Hide laptop"
                },
                {
                  "id": "d",
                  "text": "Email ZIP"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Revert commit — discuss reset."
            },
            {
              "id": "git-undo-safely-b8",
              "prompt": "Module 6 lab:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only init"
                },
                {
                  "id": "b",
                  "text": "Recovery drills"
                },
                {
                  "id": "c",
                  "text": "Skip status"
                },
                {
                  "id": "d",
                  "text": "Capstone only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Bad add + conflict recovery."
            }
          ],
          flashcards:           [
            {
              "id": "git-undo-safely-f1",
              "front": "Unstage?",
              "back": "git restore --staged file"
            },
            {
              "id": "git-undo-safely-f2",
              "front": "Drop unstaged edits?",
              "back": "git restore file"
            },
            {
              "id": "git-undo-safely-f3",
              "front": "Safe shared undo?",
              "back": "git revert"
            },
            {
              "id": "git-undo-safely-f4",
              "front": "Dangerous?",
              "back": "git reset --hard — read first"
            },
            {
              "id": "git-undo-safely-f5",
              "front": "After undo?",
              "back": "git status"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "git-merge-conflicts",
          name: "Merge Conflicts",
          prerequisites: ["git-undo-safely"],
          objectives: ["GIT-M06-O4","GIT-M06-O5","GIT-M06-O6"],
          lesson: {
            title: "Merge Conflicts",
            content: `Module 3 introduced conflict markers — now resolve them hands-on. When git merge stops with conflict, open each listed file, read both sides between markers, produce correct combined text, remove markers entirely, save, git add, git commit.

git diff during conflict shows unmerged states. git merge --abort returns to pre-merge state if you need to start over — safe escape hatch.

Use editor merge tools or VS Code conflict UI if available — same outcome: one correct file without markers. Communicate with author of other branch when unsure which text wins.

Test after resolving — broken syntax from half-merged JSON or YAML causes CI failures. status must show clean before you push resolved merge.

Practice in lab with intentional parallel edits — confidence comes from repetition, not reading alone.`,
            experience: GIT_MERGE_CONFLICTS_EXPERIENCE,
          },
          keyFacts:           [
            "Edit files to remove all conflict markers",
            "git add resolved files then git commit completes merge",
            "git merge --abort cancels merge attempt",
            "git status lists unmerged paths during conflict",
            "Test project after resolution before push"
          ],
          guidedExample: {
            title: "Resolve a Two-Line Conflict",
            steps:             [
              "Create conflict via merge exercise — status shows unmerged",
              "Open file — locate <<<<<<< ======= >>>>>>> block",
              "Choose combined correct text — delete marker lines",
              "git add file && git status — no unmerged paths",
              "git commit — default merge message OK; run tests"
            ],
          },
          commonMistakes:           [
            "Leaving marker lines in committed file",
            "Adding file before editing markers",
            "Force pushing instead of finishing merge commit"
          ],
          examTraps:           [
            "Resolving without talking to teammate on intentional parallel feature",
            "Accepting all incoming blindly in IDE — may drop important main fix",
            "Assuming one conflict file means done — status lists all unmerged"
          ],
          realWorldScenario: "CI fails after merge. Diff shows leftover ======= marker in config. Fix, commit amend or follow-up — lesson: read diff after merge.",
          quiz:           [
            {
              "id": "git-merge-conflicts-q1",
              "prompt": "After editing conflict markers, next steps?",
              "choices": [
                {
                  "id": "a",
                  "text": "git push --force"
                },
                {
                  "id": "b",
                  "text": "git add then commit"
                },
                {
                  "id": "c",
                  "text": "git merge --abort always"
                },
                {
                  "id": "d",
                  "text": "Delete branch"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git add resolved files, then git commit.",
              "difficulty": "medium"
            },
            {
              "id": "git-merge-conflicts-q2",
              "prompt": "Cancel merge attempt:",
              "choices": [
                {
                  "id": "a",
                  "text": "merge --abort"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "rm .git"
                },
                {
                  "id": "d",
                  "text": "git init"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git merge --abort.",
              "difficulty": "easy"
            },
            {
              "id": "git-merge-conflicts-q3",
              "prompt": "Unmerged paths listed in:",
              "choices": [
                {
                  "id": "a",
                  "text": "git remote"
                },
                {
                  "id": "b",
                  "text": "git config"
                },
                {
                  "id": "c",
                  "text": "git status"
                },
                {
                  "id": "d",
                  "text": "git clean -fd blindly"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "git status.",
              "difficulty": "medium"
            },
            {
              "id": "git-merge-conflicts-q4",
              "prompt": "Marker lines in commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Required"
                },
                {
                  "id": "b",
                  "text": "Decorative"
                },
                {
                  "id": "c",
                  "text": "Auto removed"
                },
                {
                  "id": "d",
                  "text": "Must remove manually"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Break code — must remove.",
              "difficulty": "medium"
            },
            {
              "id": "git-merge-conflicts-q5",
              "prompt": "After resolve before push:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip tests"
                },
                {
                  "id": "b",
                  "text": "Verify build"
                },
                {
                  "id": "c",
                  "text": "Force only"
                },
                {
                  "id": "d",
                  "text": "Delete main"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Run tests / verify build.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-merge-conflicts-b1",
              "prompt": "Conflict resolution ends with:",
              "choices": [
                {
                  "id": "a",
                  "text": "Merge commit"
                },
                {
                  "id": "b",
                  "text": "Force push only"
                },
                {
                  "id": "c",
                  "text": "New init"
                },
                {
                  "id": "d",
                  "text": "Email patch"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Merge commit after add."
            },
            {
              "id": "git-merge-conflicts-b2",
              "prompt": "HEAD side in marker:",
              "choices": [
                {
                  "id": "a",
                  "text": "Incoming only"
                },
                {
                  "id": "b",
                  "text": "Current branch"
                },
                {
                  "id": "c",
                  "text": "Random"
                },
                {
                  "id": "d",
                  "text": "Deleted"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Current branch content."
            },
            {
              "id": "git-merge-conflicts-b3",
              "prompt": "Incoming side:",
              "choices": [
                {
                  "id": "a",
                  "text": "Current only"
                },
                {
                  "id": "b",
                  "text": "Remote Wi-Fi"
                },
                {
                  "id": "c",
                  "text": "Other branch"
                },
                {
                  "id": "d",
                  "text": "GitHub logo"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Other branch being merged."
            },
            {
              "id": "git-merge-conflicts-b4",
              "prompt": "IDE merge tool:",
              "choices": [
                {
                  "id": "a",
                  "text": "Pick hunks to review"
                },
                {
                  "id": "b",
                  "text": "Skip review"
                },
                {
                  "id": "c",
                  "text": "Deletes repo"
                },
                {
                  "id": "d",
                  "text": "Push auto"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Helps pick hunks — still review."
            },
            {
              "id": "git-merge-conflicts-b5",
              "prompt": "Multiple conflict files:",
              "choices": [
                {
                  "id": "a",
                  "text": "Commit one only"
                },
                {
                  "id": "b",
                  "text": "Ignore rest"
                },
                {
                  "id": "c",
                  "text": "Abort always"
                },
                {
                  "id": "d",
                  "text": "Resolve all listed"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Resolve all before commit."
            },
            {
              "id": "git-merge-conflicts-b6",
              "prompt": "JSON/YAML conflicts:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore syntax"
                },
                {
                  "id": "b",
                  "text": "Validate after"
                },
                {
                  "id": "c",
                  "text": "Binary only"
                },
                {
                  "id": "d",
                  "text": "Never merge"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Validate syntax after edit."
            },
            {
              "id": "git-merge-conflicts-b7",
              "prompt": "Communication:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never talk"
                },
                {
                  "id": "b",
                  "text": "Hide changes"
                },
                {
                  "id": "c",
                  "text": "Coordinate with author"
                },
                {
                  "id": "d",
                  "text": "Force main"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Talk when both sides intentional."
            },
            {
              "id": "git-merge-conflicts-b8",
              "prompt": "Post-merge verify:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip status"
                },
                {
                  "id": "b",
                  "text": "status clean"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "Random reset"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git status clean."
            }
          ],
          flashcards:           [
            {
              "id": "git-merge-conflicts-f1",
              "front": "Resolve steps?",
              "back": "Edit → remove markers → add → commit"
            },
            {
              "id": "git-merge-conflicts-f2",
              "front": "Need escape?",
              "back": "git merge --abort"
            },
            {
              "id": "git-merge-conflicts-f3",
              "front": "All files done?",
              "back": "status shows no unmerged"
            },
            {
              "id": "git-merge-conflicts-f4",
              "front": "Never commit?",
              "back": "Lines with <<<<<<<"
            },
            {
              "id": "git-merge-conflicts-f5",
              "front": "After merge?",
              "back": "Test before push"
            }
          ],
          practiceType: ["reading","quiz","flashcard"],
          estimatedStudyMinutes: 40,
          difficulty: "hard",
        },
        {
          id: "git-when-not-to-panic",
          name: "When Not to Panic",
          prerequisites: ["git-merge-conflicts"],
          objectives: ["GIT-M06-O7","GIT-M06-O8","GIT-M06-O9"],
          lesson: {
            title: "When Not to Panic",
            content: `Most Git mistakes are recoverable if you stop and read. Wrong branch commit? git log, then cherry-pick commit hash onto correct branch, or merge branch if simpler. Pushed too early? Communicate — revert PR or add follow-up commit; avoid force on shared branches.

Panic checklist: git status → git log --oneline -5 → git diff. Answer: where am I, what changed, is it committed or pushed?

Detached HEAD scares beginners — usually from checking out old commit. git switch main returns to named branch.

When someone says just force push — ask why non-fast-forward happened first. Module lab drills bad git add and conflict recovery without deleting .git.

Git is a safety system when you read messages — not a trap when you pause.`,
            experience: GIT_WHEN_NOT_TO_PANIC_EXPERIENCE,
          },
          keyFacts:           [
            "status → log → diff before destructive commands",
            "Wrong branch: cherry-pick or merge to move work",
            "Shared branches: prefer revert over force push",
            "Detached HEAD: git switch main to return",
            "Ask for help before reset --hard on team repos"
          ],
          guidedExample: {
            title: "Panic Checklist Drill",
            steps:             [
              "Simulate mistake — note gut panic response",
              "Run git status — write branch and file state",
              "git log --oneline -5 — locate recent commits",
              "git diff or git diff --staged — see actual changes",
              "Pick smallest fix: restore, cherry-pick, revert — not delete .git"
            ],
          },
          commonMistakes:           [
            "Deleting repo folder at first error",
            "Force pushing shared main to fix local confusion",
            "Running commands you do not understand from forums"
          ],
          examTraps:           [
            "Coworker hero narrative about rewriting history — not beginner first move",
            "Assuming committed means lost if on wrong branch — cherry-pick exists",
            "Ignoring Git's hint messages at bottom of output"
          ],
          realWorldScenario: "You commit API key fix on feature-docs instead of hotfix. log shows hash, cherry-pick onto hotfix branch, push — main never saw wrong branch name.",
          quiz:           [
            {
              "id": "git-when-not-to-panic-q1",
              "prompt": "Scared after Git error. First command?",
              "choices": [
                {
                  "id": "a",
                  "text": "git push --force"
                },
                {
                  "id": "b",
                  "text": "git status"
                },
                {
                  "id": "c",
                  "text": "Delete .git"
                },
                {
                  "id": "d",
                  "text": "Reinstall Windows"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "git status — see branch and changes before anything else.",
              "difficulty": "easy"
            },
            {
              "id": "git-when-not-to-panic-q2",
              "prompt": "Wrong branch commit fix:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete all"
                },
                {
                  "id": "b",
                  "text": "Force main"
                },
                {
                  "id": "c",
                  "text": "Cherry-pick hash"
                },
                {
                  "id": "d",
                  "text": "Email ZIP"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Cherry-pick or merge workflow.",
              "difficulty": "medium"
            },
            {
              "id": "git-when-not-to-panic-q3",
              "prompt": "Shared branch mistake:",
              "choices": [
                {
                  "id": "a",
                  "text": "Revert/fix commit"
                },
                {
                  "id": "b",
                  "text": "Force push always"
                },
                {
                  "id": "c",
                  "text": "Hide"
                },
                {
                  "id": "d",
                  "text": "Delete remote"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Revert or new fix commit — talk to team.",
              "difficulty": "medium"
            },
            {
              "id": "git-when-not-to-panic-q4",
              "prompt": "Detached HEAD fix:",
              "choices": [
                {
                  "id": "a",
                  "text": "rm .git"
                },
                {
                  "id": "b",
                  "text": "push --force"
                },
                {
                  "id": "c",
                  "text": "init"
                },
                {
                  "id": "d",
                  "text": "git switch main"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "git switch main.",
              "difficulty": "medium"
            },
            {
              "id": "git-when-not-to-panic-q5",
              "prompt": "Before hard reset:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never think"
                },
                {
                  "id": "b",
                  "text": "Confirm impact"
                },
                {
                  "id": "c",
                  "text": "Always fine"
                },
                {
                  "id": "d",
                  "text": "Required daily"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Confirm unpushed and team impact.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-when-not-to-panic-b1",
              "prompt": "Panic checklist:",
              "choices": [
                {
                  "id": "a",
                  "text": "Force first"
                },
                {
                  "id": "b",
                  "text": "status log diff"
                },
                {
                  "id": "c",
                  "text": "Delete repo"
                },
                {
                  "id": "d",
                  "text": "Ignore messages"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "status → log → diff."
            },
            {
              "id": "git-when-not-to-panic-b2",
              "prompt": "cherry-pick moves:",
              "choices": [
                {
                  "id": "a",
                  "text": "All branches"
                },
                {
                  "id": "b",
                  "text": "One commit copy"
                },
                {
                  "id": "c",
                  "text": "Remote only"
                },
                {
                  "id": "d",
                  "text": "Wi-Fi"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Specific commit to current branch."
            },
            {
              "id": "git-when-not-to-panic-b3",
              "prompt": "Force push shared:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always OK"
                },
                {
                  "id": "b",
                  "text": "Required daily"
                },
                {
                  "id": "c",
                  "text": "Dangerous on shared"
                },
                {
                  "id": "d",
                  "text": "Automatic"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Dangerous — team coordination required."
            },
            {
              "id": "git-when-not-to-panic-b4",
              "prompt": "Git error message:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore"
                },
                {
                  "id": "b",
                  "text": "Read for hints"
                },
                {
                  "id": "c",
                  "text": "Spam"
                },
                {
                  "id": "d",
                  "text": "Virus"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Often tells next step — read it."
            },
            {
              "id": "git-when-not-to-panic-b5",
              "prompt": "Committed not pushed:",
              "choices": [
                {
                  "id": "a",
                  "text": "On internet"
                },
                {
                  "id": "b",
                  "text": "Local undo options"
                },
                {
                  "id": "c",
                  "text": "Permanent"
                },
                {
                  "id": "d",
                  "text": "Illegal"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Still local — many undo options."
            },
            {
              "id": "git-when-not-to-panic-b6",
              "prompt": "Ask teammate when:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never"
                },
                {
                  "id": "b",
                  "text": "Always hide"
                },
                {
                  "id": "c",
                  "text": "Before breakfast only"
                },
                {
                  "id": "d",
                  "text": "Unsure on shared repo"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Unsure about reset/force on shared repo."
            },
            {
              "id": "git-when-not-to-panic-b7",
              "prompt": "Module 6 lab:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only reading"
                },
                {
                  "id": "b",
                  "text": "Skip labs"
                },
                {
                  "id": "c",
                  "text": "Recovery lab"
                },
                {
                  "id": "d",
                  "text": "No Git install"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Recovery drills with Break/Fix."
            },
            {
              "id": "git-when-not-to-panic-b8",
              "prompt": "Fear removal truth:",
              "choices": [
                {
                  "id": "a",
                  "text": "All data lost always"
                },
                {
                  "id": "b",
                  "text": "Most recoverable"
                },
                {
                  "id": "c",
                  "text": "Never use Git"
                },
                {
                  "id": "d",
                  "text": "GUI only"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Most mistakes recoverable with status first."
            }
          ],
          flashcards:           [
            {
              "id": "git-when-not-to-panic-f1",
              "front": "Scared — run?",
              "back": "git status first"
            },
            {
              "id": "git-when-not-to-panic-f2",
              "front": "Checklist?",
              "back": "status → log → diff"
            },
            {
              "id": "git-when-not-to-panic-f3",
              "front": "Wrong branch?",
              "back": "cherry-pick or merge fix"
            },
            {
              "id": "git-when-not-to-panic-f4",
              "front": "Shared branch?",
              "back": "Avoid force — revert/fix"
            },
            {
              "id": "git-when-not-to-panic-f5",
              "front": "Detached HEAD?",
              "back": "git switch main"
            }
          ],
          externalResources: [GITHUB_FREE_RESOURCE],
          assignments: [
            {
              "id": "git-lab-recovery",
              "title": "Recovery Lab",
              "type": "external-lab",
              "instructions": "Goal: Practice calm recovery — bad add, conflict markers, status-first drill.\n\n### Try It\n1. Create conflict: two branches edit same README line — merge and resolve markers\n2. git add resolved file && git commit merge\n3. Practice git restore --staged on wrongly staged file\n\n### Break It\n4. git add . including a temp junk file you did not mean to stage\n\n### Fix It\n5. git restore --staged junk-file.txt (keep or delete file as appropriate)\n6. Add pattern to .gitignore if needed\n7. Run panic checklist: status → log --oneline -5 → diff",
              "estimatedMinutes": 40,
              "externalResourceId": "github-free",
              "completionCriteria": [
                "Resolved a merge conflict with markers removed",
                "Unstaged bad git add without panic",
                "Completed status → log → diff drill"
              ],
              "relatedTopicIds": [
                "git-undo-safely",
                "git-merge-conflicts",
                "git-when-not-to-panic"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "capstone",
      name: "Module 7 — Bridge Capstone",
      topics: [
        {
          id: "git-bridge-capstone",
          name: "Bridge Workflow Capstone",
          prerequisites: ["git-when-not-to-panic"],
          objectives: ["GIT-M07-O1","GIT-M07-O2","GIT-M07-O3"],
          lesson: {
            title: "Bridge Workflow Capstone",
            content: `Capstone executes the full professional loop on a real repository: clone or fork practice repo, create feature branch from dev, make small docs or content change, status and diff before commit, push branch, open PR, review diff line by line, merge via GitHub, checkout dev, pull latest.

This mirrors Bridge AGENTS.md workflow — branch from dev, PR into dev, never push directly to main. Success means you explain each diff hunk and recover from a deliberate lab error without panic.

Self-review questions: Why branch? What would conflict look like? What files must stay out of commits?

Submit PR link and checklist in external-lab. Graduation is workflow confidence — not memorizing every plumbing command.`,
            experience: GIT_BRIDGE_CAPSTONE_EXPERIENCE,
          },
          keyFacts:           [
            "Feature branch from dev — not direct main commits",
            "status and diff before every commit",
            "PR diff review before merge",
            "Pull dev after merge to sync local",
            "Capstone proves end-to-end workflow competence"
          ],
          guidedExample: {
            title: "Full Bridge PR Workflow",
            steps:             [
              "Fork or clone practice repo; git switch dev && git pull",
              "git switch -c feature/git-github-capstone",
              "Make small doc edit; git status && git diff",
              "git add, commit with why-focused message, push -u origin feature branch",
              "Open PR to dev, review diff, merge, local git switch dev && git pull"
            ],
          },
          commonMistakes:           [
            "Committing directly to main or dev without branch",
            "Merging PR without reading diff",
            "Forgetting git pull after remote merge"
          ],
          examTraps:           [
            "Copy-pasting commands without adapting branch names",
            "Opening PR against main when project uses dev as integration branch",
            "Skipping .gitignore check before first commit in repo"
          ],
          realWorldScenario: "You contribute a typo fix to Bridge docs. Same workflow as maintainers — branch, PR, review, merge — you are part of the team process.",
          quiz:           [
            {
              "id": "git-bridge-capstone-q1",
              "prompt": "Bridge capstone workflow starts with?",
              "choices": [
                {
                  "id": "a",
                  "text": "Push directly to main"
                },
                {
                  "id": "b",
                  "text": "Delete .git"
                },
                {
                  "id": "c",
                  "text": "Branch from updated dev"
                },
                {
                  "id": "d",
                  "text": "Only flashcards"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Feature branch from dev with pulled latest changes.",
              "difficulty": "medium"
            },
            {
              "id": "git-bridge-capstone-q2",
              "prompt": "Before capstone commit:",
              "choices": [
                {
                  "id": "a",
                  "text": "push --force"
                },
                {
                  "id": "b",
                  "text": "status and diff"
                },
                {
                  "id": "c",
                  "text": "skip review"
                },
                {
                  "id": "d",
                  "text": "git clean -fd"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "git status and git diff.",
              "difficulty": "medium"
            },
            {
              "id": "git-bridge-capstone-q3",
              "prompt": "PR target for Bridge:",
              "choices": [
                {
                  "id": "a",
                  "text": "main direct push"
                },
                {
                  "id": "b",
                  "text": "PR into dev"
                },
                {
                  "id": "c",
                  "text": "no PR"
                },
                {
                  "id": "d",
                  "text": "email maintainer"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "dev branch — not direct main push.",
              "difficulty": "medium"
            },
            {
              "id": "git-bridge-capstone-q4",
              "prompt": "After merge locally:",
              "choices": [
                {
                  "id": "a",
                  "text": "never sync"
                },
                {
                  "id": "b",
                  "text": "delete clone"
                },
                {
                  "id": "c",
                  "text": "force push"
                },
                {
                  "id": "d",
                  "text": "switch dev and pull"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "git switch dev && git pull.",
              "difficulty": "medium"
            },
            {
              "id": "git-bridge-capstone-q5",
              "prompt": "Capstone proves:",
              "choices": [
                {
                  "id": "a",
                  "text": "Exam memorization"
                },
                {
                  "id": "b",
                  "text": "GUI clicking only"
                },
                {
                  "id": "c",
                  "text": "Full Git workflow"
                },
                {
                  "id": "d",
                  "text": "Wi-Fi config"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "End-to-end safe collaboration workflow.",
              "difficulty": "medium"
            }
          ],
          questionBank:           [
            {
              "id": "git-bridge-capstone-b1",
              "prompt": "Capstone branch name example:",
              "choices": [
                {
                  "id": "a",
                  "text": "main"
                },
                {
                  "id": "b",
                  "text": "feature/descriptive"
                },
                {
                  "id": "c",
                  "text": "random"
                },
                {
                  "id": "d",
                  "text": "empty"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "feature/git-github-capstone."
            },
            {
              "id": "git-bridge-capstone-b2",
              "prompt": "Self-review includes:",
              "choices": [
                {
                  "id": "a",
                  "text": "Skip diff"
                },
                {
                  "id": "b",
                  "text": "Explain changes"
                },
                {
                  "id": "c",
                  "text": "Hide commits"
                },
                {
                  "id": "d",
                  "text": "Force push"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "Explain each diff hunk."
            },
            {
              "id": "git-bridge-capstone-b3",
              "prompt": "Never on Bridge main:",
              "choices": [
                {
                  "id": "a",
                  "text": "PR review"
                },
                {
                  "id": "b",
                  "text": "Branch work"
                },
                {
                  "id": "c",
                  "text": "Direct main push"
                },
                {
                  "id": "d",
                  "text": "Pull after merge"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "Direct push without PR."
            },
            {
              "id": "git-bridge-capstone-b4",
              "prompt": "Graduation signal:",
              "choices": [
                {
                  "id": "a",
                  "text": "Quiz only"
                },
                {
                  "id": "b",
                  "text": "PR + labs done"
                },
                {
                  "id": "c",
                  "text": "Flashcards only"
                },
                {
                  "id": "d",
                  "text": "Reading only"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Completed PR workflow + labs."
            },
            {
              "id": "git-bridge-capstone-b5",
              "prompt": "Wrong base branch PR:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore"
                },
                {
                  "id": "b",
                  "text": "Force merge"
                },
                {
                  "id": "c",
                  "text": "Delete GitHub"
                },
                {
                  "id": "d",
                  "text": "Fix base branch"
                }
              ],
              "correctChoiceId": "d",
              "explanation": "Close and reopen against correct base."
            },
            {
              "id": "git-bridge-capstone-b6",
              "prompt": "Conflict during capstone:",
              "choices": [
                {
                  "id": "a",
                  "text": "Delete repo"
                },
                {
                  "id": "b",
                  "text": "status then resolve"
                },
                {
                  "id": "c",
                  "text": "push --force"
                },
                {
                  "id": "d",
                  "text": "quit"
                }
              ],
              "correctChoiceId": "a",
              "explanation": "status first — resolve or ask help."
            },
            {
              "id": "git-bridge-capstone-b7",
              "prompt": "secrets in capstone:",
              "choices": [
                {
                  "id": "a",
                  "text": "Commit .env"
                },
                {
                  "id": "b",
                  "text": "Check gitignore"
                },
                {
                  "id": "c",
                  "text": "Share keys"
                },
                {
                  "id": "d",
                  "text": "Skip status"
                }
              ],
              "correctChoiceId": "b",
              "explanation": "Verify .gitignore before commit."
            },
            {
              "id": "git-bridge-capstone-b8",
              "prompt": "Post-capstone habit:",
              "choices": [
                {
                  "id": "a",
                  "text": "Never Git again"
                },
                {
                  "id": "b",
                  "text": "Random commands"
                },
                {
                  "id": "c",
                  "text": "status habit"
                },
                {
                  "id": "d",
                  "text": "Avoid branches"
                }
              ],
              "correctChoiceId": "c",
              "explanation": "status before every commit."
            }
          ],
          flashcards:           [
            {
              "id": "git-bridge-capstone-f1",
              "front": "Capstone flow?",
              "back": "branch → commit → push → PR → merge → pull"
            },
            {
              "id": "git-bridge-capstone-f2",
              "front": "Bridge target branch?",
              "back": "dev — PR not direct main"
            },
            {
              "id": "git-bridge-capstone-f3",
              "front": "Before commit?",
              "back": "status + diff"
            },
            {
              "id": "git-bridge-capstone-f4",
              "front": "After merge?",
              "back": "git pull on dev"
            },
            {
              "id": "git-bridge-capstone-f5",
              "front": "Success?",
              "back": "Explain workflow without cheat sheet"
            }
          ],
          externalResources: [GITHUB_FREE_RESOURCE],
          assignments: [
            {
              "id": "git-lab-capstone",
              "title": "Bridge Workflow Capstone",
              "type": "external-lab",
              "instructions": "Goal: End-to-end Bridge-style PR on a practice or forked repo.\n\n### Try It\n1. Fork/clone practice repo; git switch dev && git pull\n2. git switch -c feature/git-github-capstone\n3. Small docs/content change — git status && git diff before commit\n4. git push -u origin feature/git-github-capstone\n5. Open PR into dev — review every diff hunk\n6. Merge PR; local git switch dev && git pull\n\n### Break It\n7. Deliberately skip git pull before push on stale branch — read rejection or behind message\n\n### Fix It\n8. git pull origin dev — integrate remote\n9. git push — complete capstone; answer self-review questions in notes\n\nSelf-review: What changed? Why branch? What files never commit?",
              "estimatedMinutes": 60,
              "externalResourceId": "github-free",
              "completionCriteria": [
                "Feature branch from dev with meaningful commit",
                "PR opened and diff reviewed before merge",
                "Merged PR and pulled dev locally",
                "Answered capstone self-review questions"
              ],
              "relatedTopicIds": [
                "git-bridge-capstone"
              ],
              "order": 1
            }
          ],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          estimatedStudyMinutes: 60,
          difficulty: "medium",
        },
      ],
    }
  ],
};
