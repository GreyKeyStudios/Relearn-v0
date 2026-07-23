/** Topic and lab data for generate-git-github.mjs */

export const module1Topics = [
  {
    id: "git-why-version-control",
    name: "Why Version Control",
    prereq: [],
    objs: ["GIT-M01-O1", "GIT-M01-O2", "GIT-M01-O3"],
    title: "Why Version Control Exists",
    exp: "GIT_WHY_VERSION_CONTROL_EXPERIENCE",
    mins: 20,
    diff: "easy",
    content: `Before Git commands, understand the problem. Copying folders — final-project, final-project-v2, final-project-real-final — is not version control. It is chaos with polite names. Nobody knows which copy is authoritative, who changed what, or when a bug was introduced.

Version control gives you one project timeline: who changed what, when, and why. Every commit is a save point you can inspect or return to. Teams share that timeline instead of emailing zip files or fighting over shared drives.

A repository is one project with a full change history. Commits are snapshots with messages explaining intent — not just filenames like v3-fixed. You can compare any two points in time, blame a line on a person and date, and roll back without guessing which folder was good.

This skill applies everywhere: Python scripts, network configs, lab writeups, documentation, and Bridge content. Solo developers benefit from save points; teams require shared history and review.

This module is conceptual — no terminal required yet. You will spot the folder problem, distinguish Git from GitHub, and build confidence before Module 2 introduces real commands. Notice repeatable work on your own projects: any task where you duplicate folders to feel safe is a version-control candidate.`,
    keyFacts: [
      "Copying folders is not version control — history gets lost",
      "A repository is one project with a full change timeline",
      "Commits are save points with messages explaining why",
      "Version control helps solo work and is essential for teams",
      "Blame and diff replace guessing which copy is current",
    ],
    guided: {
      title: "Spot the Folder Problem",
      steps: [
        "List three folder names a team might use without Git: final, final-v2, final-real.",
        "Ask: which file is authoritative? Who edited line 42 last Tuesday?",
        "Note that folder names cannot answer those questions — only history can.",
        "Imagine one repo where git log shows every change with author and message.",
        "Write one sentence: what problem does a timeline solve that folders cannot?",
      ],
    },
    mistakes: [
      "Renaming folders instead of recording incremental commits",
      "Assuming cloud sync replaces version control — sync is not history",
      "Keeping only the latest zip backup without change messages",
    ],
    traps: [
      "Coworkers say Google Drive is enough — Drive lacks commit messages and blame",
      "Thinking version control is only for programmers — docs and configs need it too",
      "Believing backups replace VCS — backups do not explain why a change happened",
    ],
    scenario:
      "Eight interns edit the same onboarding doc via email attachments. Three versions exist by Friday. With Git, one file, one history — git log shows who added which section and when.",
    quizQ1: [
      "What problem does version control solve first?",
      "b",
      "Version control records a timeline of changes — author, time, and content.",
      ["Making Wi-Fi faster", "Tracking who changed what and when", "Replacing backups entirely", "Compiling Python scripts"],
      "easy",
    ],
    quizExtra: [
      ["Copying folders fails because:", "b", "History and authority are lost.", ["Too colorful", "No shared timeline", "Illegal on Mac", "Uses GitHub"], "easy"],
      ["A repository is:", "a", "One project with tracked history.", ["Any USB stick", "One tracked project", "GitHub only", "A branch"], "easy"],
      ["Commit message purpose:", "c", "Explain why a change happened.", ["Decorate log", "Hide author", "Explain why", "Replace code review"], "easy"],
      ["Version control helps teams by:", "b", "Sharing one timeline instead of conflicting copies.", ["Banning edits", "One shared timeline", "Deleting old work", "Avoiding messages"], "easy"],
    ],
    bankItems: [
      ["Folder copies fail because:", "b", "No shared timeline or author record.", ["They use too much color", "History and authorship are lost", "Folders are illegal", "GitHub requires them"]],
      ["A commit is best described as:", "a", "A snapshot with an explanatory message.", ["A random rename", "A snapshot with message", "A Wi-Fi setting", "A GitHub login"]],
      ["Version control helps teams by:", "c", "One shared history instead of conflicting copies.", ["Banning all edits", "Emailing zips faster", "Shared timeline everyone reads", "Deleting old files daily"]],
      ["Solo developers still benefit because:", "a", "Save points let you experiment and revert.", ["Git requires teams", "Commits are public instantly", "You cannot use branches alone", "Folders are faster"]],
      ["Which is NOT version control?", "d", "final-v2-real folder naming.", ["git log history", "Commit messages", "Blame on a line", "Copying final-v2-real folders"]],
      ["Repository means:", "b", "One project with tracked history.", ["Any USB stick", "One tracked project", "GitHub website only", "Windows Registry"]],
      ["Why messages on commits?", "a", "Explain why a change happened for future you.", ["Slow down work", "Explain intent to future readers", "Replace code", "Required by law only"]],
      ["Before Git commands this module:", "c", "Builds the problem mental model.", ["Teaches push --force", "Installs GitHub OAuth", "Explains why VCS exists", "Deletes .git folders"]],
    ],
    flashItems: [
      ["Why not copy folders?", "Copies multiply; history and authority are lost"],
      ["What is a commit?", "A save point — snapshot with message explaining why"],
      ["What is a repository?", "One project with full change timeline"],
      ["VC vs cloud sync?", "Sync copies files · VCS records who/when/why"],
      ["Who needs version control?", "Solo devs and teams — anyone with changing files"],
    ],
  },
  {
    id: "git-vs-github",
    name: "Git vs GitHub",
    prereq: ["git-why-version-control"],
    objs: ["GIT-M01-O4", "GIT-M01-O5", "GIT-M01-O6"],
    title: "Git vs GitHub",
    exp: "GIT_VS_GITHUB_EXPERIENCE",
    mins: 15,
    diff: "easy",
    content: `Git is software on your computer that tracks file changes, branches, and history. It works offline in a .git folder. GitHub is a website that hosts Git repositories online for backup, collaboration, and pull requests.

You can use Git without GitHub — Module 2 is entirely local. Most teams use both: Git for daily commits on your machine, GitHub (or GitLab, Bitbucket) for sharing and review. Push sends your commits to a remote; pull brings others' commits down.

Do not conflate them in interviews or standups. Saying "push to Git" or "I use GitHub locally" signals confusion. Git is the tool; GitHub is a hosting service built around Git.

Remotes are bookmarks with URLs — origin usually points at GitHub. Your local repo remains the workspace; the remote is a conversation partner. Losing network access does not delete local commits.

Module 4 connects local repos to GitHub. Until then, focus on Git commands that work in any folder with git init — no account required.`,
    keyFacts: [
      "Git is local version control software on your machine",
      "GitHub is a hosting platform for Git repositories online",
      "Push sends commits to a remote; pull brings remote changes down",
      "Git works offline; remotes require network access",
      "GitLab and Bitbucket are GitHub alternatives — same Git commands",
    ],
    guided: {
      title: "Separate Tool from Host",
      steps: [
        "Write two columns: Git (local) vs GitHub (online).",
        "List git init, commit, log under Git — all work offline.",
        "List create repo on website, open PR, star project under GitHub.",
        "Say aloud: I commit locally with Git; I push to GitHub when ready to share.",
        "Note: you need Git installed for Module 2; GitHub account waits until Module 4.",
      ],
    },
    mistakes: [
      "Using Git and GitHub as interchangeable names in documentation",
      "Assuming commits automatically appear on GitHub without push",
      "Thinking you cannot learn Git without a GitHub account",
    ],
    traps: [
      "Interview question: Is GitHub required for Git? Answer: No — local Git is standalone",
      "Confusing GitHub Issues with Git commits — issues are project management",
      "Believing GitHub stores only code — it stores any text files Git tracks",
    ],
    scenario:
      "On a flight with no Wi-Fi you fix typos in a README, commit twice locally with Git, and push when you land. Git worked offline; GitHub received the commits after push.",
    quizQ1: [
      "Which statement is correct?",
      "b",
      "Git runs locally; GitHub hosts repos online.",
      ["GitHub is another name for Git", "Git runs locally; GitHub hosts repos online", "You must have GitHub to use Git", "Git only works in a browser"],
      "easy",
    ],
    quizExtra: [
      ["Git is installed:", "a", "On your computer for local history.", ["In browser only", "On your computer", "On GitHub only", "In email"], "easy"],
      ["Push sends commits:", "b", "To a remote like GitHub.", ["To recycle bin", "To remote hosting", "To .gitignore", "To main only always"], "easy"],
      ["Pull brings:", "c", "Remote changes into local repo.", ["Local to remote only", "Nothing", "Remote changes down", "Branches deleted"], "medium"],
      ["Module 2 needs:", "d", "Local Git — not GitHub account.", ["GitHub Enterprise", "Two remotes", "OAuth", "Local Git install only"], "easy"],
    ],
    bankItems: [
      ["Git runs:", "a", "On your computer — local history in .git.", ["Only in browser", "On your computer", "Only on GitHub servers", "In email"]],
      ["GitHub provides:", "c", "Remote hosting and collaboration features.", ["Local .git folder", "Windows updates", "Online repo hosting", "Antivirus"]],
      ["Push means:", "b", "Send local commits to a remote.", ["Delete remote", "Send commits to remote", "Clone a repo", "Ignore files"]],
      ["Pull means:", "a", "Fetch and merge remote changes locally.", ["Fetch remote changes down", "Force delete branch", "Skip merge always", "Create .gitignore"]],
      ["Without internet Git can:", "c", "Commit, branch, and log locally.", ["Do nothing", "Only browse GitHub", "Commit and log locally", "Open pull requests"]],
      ["origin typically is:", "b", "Default name for main remote URL.", ["Your password", "Default remote name", "Branch name only", "Commit message"]],
      ["Alternatives to GitHub:", "a", "GitLab, Bitbucket — same Git workflow.", ["None exist", "GitLab, Bitbucket", "Only SVN", "Email only"]],
      ["Module 2 requires:", "d", "Local Git install — not GitHub account.", ["GitHub Pro", "Two remotes", "OAuth app", "Local Git install only"]],
    ],
    flashItems: [
      ["Git vs GitHub one line?", "Git = local VCS · GitHub = online hosting"],
      ["Commit vs push?", "Commit = local save · push = send to remote"],
      ["Work offline?", "Yes — Git commits locally without network"],
      ["What is origin?", "Default nickname for your primary remote URL"],
      ["Need GitHub for Module 2?", "No — local Git only until Module 4"],
    ],
  },
  {
    id: "git-fear-removal-intro",
    name: "Git Without Fear",
    prereq: ["git-vs-github"],
    objs: ["GIT-M01-O7", "GIT-M01-O8", "GIT-M01-O9"],
    title: "Git Without Fear",
    exp: "GIT_FEAR_REMOVAL_INTRO_EXPERIENCE",
    mins: 20,
    diff: "easy",
    content: `Many beginners avoid Git because one command feels like it could destroy a project. In practice, Git is designed with safety rails: status before action, branches for experiments, commits as local save points until you push.

Your habit stack starts here: git status when lost, git log for the story, git diff before committing. Branches let you experiment without touching main. Destructive operations usually require explicit flags — read what Git prints before pressing Enter.

Commits stay on your machine until push — you cannot accidentally publish to the internet with git commit alone. Module 2 teaches real commands; this lesson builds confidence so you run them without panic.

When coworkers share horror stories, ask what command they ran and whether they read status first. Most Git disasters involve force flags or skipped review — habits this track replaces with read → status → diff → small fix.

Complete the reflection lab: spot version-control problems in folder chaos before you touch a terminal. Fear removal is not fluff — it is the skill that keeps you using Git after the first error message.`,
    keyFacts: [
      "Run git status first when unsure what Git will do",
      "Commits are local save points until you push",
      "Branches are cheap safety copies for experiments",
      "Git warns before many destructive actions — read the message",
      "Force flags (--force) deserve extra caution — status first",
    ],
    guided: {
      title: "Build the Safety Habit Stack",
      steps: [
        "Write on a sticky note: status → log → diff before scary commands.",
        "List one Git fear you have — wrong branch, lost work, public embarrassment.",
        "For each fear, note one command that informs you before acting: status or log.",
        "Repeat: commit is local; push is the sharing step — not automatic.",
        "Commit to running status before every lab in Module 2 — make it muscle memory.",
      ],
    },
    mistakes: [
      "Running commands from Stack Overflow without reading what they delete",
      "Deleting the .git folder when confused instead of asking for help",
      "Assuming one error message means the repo is permanently broken",
    ],
    traps: [
      "Senior dev jokes about rm -rf .git — never casual deletion for beginners",
      "Copy-pasting git push --force before understanding non-fast-forward errors",
      "Skipping status because the command worked yesterday on a different repo",
    ],
    scenario:
      "You panic after a weird merge message. You run git status, see conflict markers listed, breathe, and open the recovery module instead of deleting the project folder.",
    quizQ1: [
      "You feel lost in Git. What should you run first?",
      "b",
      "git status shows branch and changes — safe home base.",
      ["git push --force", "git status", "Delete the .git folder", "Rename every file manually"],
      "easy",
    ],
    quizExtra: [
      ["Commits before push are:", "a", "Local only — not on the internet.", ["Local only", "Instantly public", "Deleted hourly", "On GitHub always"], "easy"],
      ["Branches let you:", "c", "Experiment without changing main directly.", ["Delete history", "Skip merges", "Experiment safely", "Avoid commits"], "easy"],
      ["git log helps:", "b", "Read what happened in history.", ["Fix Wi-Fi", "See commit story", "Push automatically", "Create account"], "easy"],
      ["Destructive flags need:", "d", "Extra caution — read Git warnings.", ["No thought", "Blind trust", "Skipping status", "Careful reading first"], "medium"],
    ],
    bankItems: [
      ["First command when nervous:", "b", "git status — see state before acting.", ["push --force", "git status", "Delete repo", "Format disk"]],
      ["Commits before push are:", "a", "Local only — not on internet yet.", ["Local only", "Instantly public", "Deleted hourly", "On GitHub always"]],
      ["Branches let you:", "c", "Experiment without changing main directly.", ["Delete history", "Avoid all merges", "Experiment safely", "Skip commits"]],
      ["git log helps you:", "b", "Read the story of what happened.", ["Change Wi-Fi", "See commit history", "Push automatically", "Create GitHub account"]],
      ["Destructive commands often:", "a", "Require explicit flags — read warnings.", ["Run silently always", "Need explicit dangerous flags", "Never exist in Git", "Only work on Mac"]],
      ["Fear removal goal:", "c", "Git as safety system, not trap.", ["Memorize all flags", "Never use terminal", "Git as safety system", "Avoid branches forever"]],
      ["Before lab Module 2:", "b", "Install Git and trust status habit.", ["Learn force push", "Install Git, trust status", "Delete all repos", "Skip staging"]],
      ["Wrong reaction to error:", "d", "Delete .git or random force commands.", ["Read message", "Run status", "Search docs", "Delete .git immediately"]],
    ],
    flashItems: [
      ["Lost in Git — first command?", "git status"],
      ["Commits instantly online?", "No — push is separate from commit"],
      ["Experiment safely how?", "Create a branch — cheap save copy"],
      ["Before scary command?", "status → log → diff"],
      ["See history story?", "git log --oneline"],
    ],
    externalResources: "NOTES_ANY_RESOURCE",
    assignment: "git-lab-spot-vc-problem",
  },
];

export const topicDefs = [
  {
    id: "git-repos-and-commits",
    name: "Repos and Commits",
    prereq: ["git-fear-removal-intro"],
    objs: ["GIT-M02-O1", "GIT-M02-O2", "GIT-M02-O3"],
    title: "Repositories and Commits",
    exp: "GIT_REPOS_AND_COMMITS_EXPERIENCE",
    mins: 30,
    diff: "easy",
    content: `Git tracks a project inside a repository — a folder with a hidden .git directory storing every commit. Your visible files are the working tree; edits there are not history until you commit.

Start with git init in your project folder. That creates .git and turns an ordinary directory into a repo. Never delete .git unless you intentionally abandon history — it holds your entire timeline.

A commit is a snapshot with a message explaining why. The basic loop is: edit files, git add to stage, git commit to record. Commits stay local on your machine until you push to a remote in later modules — nothing goes online automatically.

Understand working tree vs repository: the working tree is what you edit in your editor; the repository is Git's recorded timeline inside .git. git status (next topic) bridges the two by showing what changed and what is staged.

Practice on a scratch folder like hello-bridge. One README, two commits with clear messages, and you have a real timeline — no GitHub required yet. Run git log --oneline after each commit to see history grow.`,
    keyFacts: [
      "git init creates a .git directory and starts local history",
      "The working tree is your editable project files",
      "Commits are local snapshots until you push",
      "Never delete .git unless abandoning history",
      "Each commit needs staged changes and a message",
    ],
    guided: {
      title: "Create Your First Repo",
      steps: [
        "mkdir hello-bridge && cd hello-bridge",
        'echo "# Hello Bridge" > README.md',
        "git init",
        'git add README.md && git commit -m "Initial commit with README"',
        "git log --oneline to verify one commit appears",
      ],
    },
    mistakes: [
      "Deleting .git when confused instead of reading status",
      "Assuming saving in an editor automatically commits",
      "Running git init inside an existing repo nested by mistake",
    ],
    traps: [
      "Thinking commits instantly upload to the internet",
      "Believing Git copies the entire disk — only the project folder",
      "Using git init in your home directory — always cd into the project first",
    ],
    scenario:
      "You join a docs team. The lead says: init a repo for the onboarding guide, commit the outline today. You create hello-bridge, add README.md, commit locally — history starts without waiting for IT to provision GitHub.",
    quizQ1: [
      "What is a Git commit?",
      "b",
      "A commit is a local snapshot of staged changes with an explanatory message.",
      ["A push to GitHub", "A local snapshot with message", "A branch name", "A .gitignore rule"],
      "easy",
    ],
    quizExtra: [
      ["What does git init do?", "a", "Creates .git and starts tracking in the current folder.", ["Creates .git in current folder", "Uploads to GitHub", "Deletes files", "Formats disk"], "easy"],
      ["Where is commit history stored locally?", "b", "In the hidden .git directory.", ["README.md", ".git directory", "Recycle Bin", "Registry"], "easy"],
      ["Commits before push are:", "a", "Local only until you push.", ["Local only", "Instantly public", "Deleted hourly", "On GitHub always"], "easy"],
      ["The working tree is:", "c", "Files you edit before committing.", ["GitHub website", "Remote URL", "Editable project files", "Only .git"], "easy"],
    ],
    bankItems: [
      ["git init runs:", "c", "Inside the project folder you want to track.", ["In C:\\ always", "On GitHub only", "Inside project root", "In PATH"]],
      [".git contains:", "a", "Repository metadata and object history.", ["History metadata", "Only README", "SSH keys default", "System files"]],
      ["Commit needs:", "b", "Staged changes and message.", ["Only push", "Stage + message", "GitHub login", "Two branches"]],
      ["Working tree vs repo:", "a", "Live files vs recorded commits.", ["Live vs recorded", "Same always", "Repo is GitHub only", ".git is working tree"]],
      ["After init, safe read:", "b", "git status.", ["push --force", "git status", "rm .git", "clone ."]],
      ["Commits without push:", "a", "Stay local.", ["Stay local", "Go public", "Delete on reboot", "USB only"]],
      ["Nested git init:", "c", "Creates confusing repo-in-repo.", ["Recommended", "Faster", "Confusing nested repos", "Required"]],
      ["hello-bridge goal:", "b", "Practice init and commits.", ["Delete prod", "Practice local commits", "Skip staging", "Avoid log"]],
    ],
    flashItems: [
      ["git init?", "Creates .git and starts tracking in current folder"],
      ["Working tree?", "Project files you edit — not yet history"],
      ["History stored where?", "Hidden .git directory"],
      ["Commit vs push?", "Commit = local save · push = send remote"],
      ["Never delete casually?", ".git — entire history lives there"],
    ],
  },
  {
    id: "git-staging-and-status",
    name: "Staging and Status",
    prereq: ["git-repos-and-commits"],
    objs: ["GIT-M02-O4", "GIT-M02-O5", "GIT-M02-O6"],
    title: "Staging and Status",
    exp: "GIT_STAGING_AND_STATUS_EXPERIENCE",
    mins: 30,
    diff: "easy",
    content: `git status is your home base. Run it before add, commit, merge, or push. It names your branch, lists modified files, and separates unstaged from staged changes.

Git has three main states for tracked files: modified (edited in working tree), staged (git add — ready to commit), and committed (saved in history). Saving in your editor only reaches modified — you still need add and commit.

git add README.md stages one file. git add . stages all changes — convenient but risky if unrelated files changed. Always read status after add to confirm the index matches your intent.

git commit -m "message" records staged files only. Unstaged edits stay in the working tree for a future commit. This lets you split work into logical commits instead of one giant snapshot.

Build the habit: status before every commit. If Git says nothing to commit, you forgot to add. If the wrong file is staged, git restore --staged filename before committing.`,
    keyFacts: [
      "git status shows branch, unstaged, and staged changes",
      "git add moves changes from modified to staged",
      "git commit records only staged files",
      "Editor save ≠ git commit",
      "Review status after git add before commit",
    ],
    guided: {
      title: "Stage and Commit Deliberately",
      steps: [
        "Edit README.md and run git status — see modified, unstaged",
        "git add README.md — status shows staged",
        'git commit -m "Update README intro"',
        "Edit again without add — status shows unstaged changes",
        "git add and commit second change; verify two commits in git log --oneline",
      ],
    },
    mistakes: [
      "Running git commit without git add when files are unstaged",
      "Using git add . without checking status first",
      "Assuming Ctrl+S in the editor creates a Git commit",
    ],
    traps: [
      "Staging secrets because git add . grabbed .env",
      "Committing debug files because status was skipped",
      "Thinking staged changes are committed automatically",
    ],
    scenario:
      "You fix a typo in docs and add a new script in the same folder. Status shows both files. You git add only the doc file, commit docs fix typo, then stage the script separately — two clean commits.",
    quizQ1: [
      "You edited a file but git commit says nothing to commit. Likely cause?",
      "a",
      "Changes are unstaged — run git add first.",
      ["Forgot git add", "Git is broken", "Need push first", "File read-only forever"],
      "easy",
    ],
    quizExtra: [
      ["git status shows:", "b", "Branch and file states.", ["GitHub avatar", "Branch and changes", "Wi-Fi password", "CPU temp"], "easy"],
      ["git add . stages:", "c", "All changes in scope.", ["Nothing", "Only README", "All changes in scope", "Only deletes"], "medium"],
      ["Editor save:", "a", "Updates working tree only.", ["Working tree only", "Auto-commits", "Pushes origin", "Deletes .git"], "easy"],
      ["Before commit habit:", "b", "git status then commit.", ["Skip status", "status then commit", "push --force", "Delete staged"], "medium"],
    ],
    bankItems: [
      ["Staged means:", "b", "Ready for next commit.", ["On GitHub", "Ready to commit", "Deleted", "Encrypted"]],
      ["Unstaged modified:", "a", "Changed, not in next commit.", ["Changed not staged", "Committed", "Remote only", "Ignored always"]],
      ["Stage one file:", "c", "git add filename.", ["commit only", "push file", "git add file", "delete file"]],
      ["After git add verify:", "a", "git status.", ["format C:", "push --force", "git status", "reboot"]],
      ["nothing to commit:", "b", "Nothing staged.", ["Corrupted", "Nothing staged", "Reinstall Git", "Need Pro"]],
      ["Two features two commits:", "b", "Stage/commit each separately.", ["One always", "Each logical change", "Never add", "Use ZIP"]],
      ["restore --staged:", "b", "Unstages keeping edits.", ["Deletes repo", "Unstages file", "Pushes main", "Creates branch"]],
      ["Status first when:", "b", "Unsure what Git will do.", ["Never", "Lost or before action", "Linux only", "After force only"]],
    ],
    flashItems: [
      ["Lost — first command?", "git status"],
      ["Modified vs staged?", "Modified = edited · staged = git add ready"],
      ["git commit records?", "Only staged files"],
      ["git add . risk?", "Stages everything — check status"],
      ["Editor save vs commit?", "Save = disk · commit = history"],
    ],
  },
  {
    id: "git-history-and-diff",
    name: "History and Diff",
    prereq: ["git-staging-and-status"],
    objs: ["GIT-M02-O7", "GIT-M02-O8", "GIT-M02-O9"],
    title: "History and Diff",
    exp: "GIT_HISTORY_AND_DIFF_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `git log shows your project's timeline — each commit has a hash, author, date, and message. git log --oneline compresses the story for daily use. When debugging, scan messages to find when behavior changed.

git diff shows line-level changes. Without flags, it compares working tree to staging for unstaged edits. git diff --staged shows what your next commit will contain. Read diffs before commit — catch debug prints and accidental edits.

Commit hashes uniquely identify snapshots. You rarely type full hashes; copy from log when needed for cherry-pick or revert in later modules.

Your review habit before commit: git status (what files), git diff (unstaged), git diff --staged (will commit). Three commands prevent most embarrassing commits.

Module 2 lab puts this together: init hello-bridge, two commits, log --oneline proof. Install Git locally — GitHub optional until Module 4.`,
    keyFacts: [
      "git log shows commit history with messages",
      "git log --oneline gives compact timeline",
      "git diff shows unstaged line changes",
      "git diff --staged previews the next commit",
      "Read diff before commit to catch mistakes",
    ],
    guided: {
      title: "Log and Diff Review",
      steps: [
        "Make two commits with distinct messages",
        "Run git log --oneline — note short hashes",
        "Edit a file without staging; run git diff",
        "git add the file; run git diff --staged",
        "Commit only after staged diff looks correct",
      ],
    },
    mistakes: [
      "Committing without reading git diff --staged",
      "Assuming git diff shows committed history — use git show",
      "Panicking at long log output instead of using --oneline",
    ],
    traps: [
      "Committing debug code because diff was skipped",
      "Using git diff after commit expecting last commit — use git show HEAD",
      "Sharing log screenshots instead of learning --oneline",
    ],
    scenario:
      "Production broke after yesterday's deploy. You git log --oneline, spot the suspect message, git show that hash, and see the config typo — diff and log saved hours.",
    quizQ1: [
      "Before committing staged files, which command previews the commit?",
      "c",
      "git diff --staged shows staged changes.",
      ["git push", "git init", "git diff --staged", "git remote -v"],
      "medium",
    ],
    quizExtra: [
      ["git log --oneline:", "a", "Compact hash + message list.", ["Deletes commits", "Compact timeline", "Pushes GitHub", "Merges branches"], "easy"],
      ["Plain git diff shows:", "b", "Unstaged working tree changes.", ["GitHub issues", "Unstaged changes", "Remotes only", "Ignored always"], "medium"],
      ["Commit hash:", "a", "Unique snapshot identifier.", ["Unique ID", "Password", "Wi-Fi channel", "Branch only"], "easy"],
      ["Habit before commit:", "b", "status → diff → diff --staged → commit.", ["push force delete", "status diff staged commit", "only add .", "skip log"], "medium"],
    ],
    bankItems: [
      ["Last commit details:", "c", "git show HEAD.", ["git init", "push --force", "git show HEAD", "clone"]],
      ["Long log tip:", "b", "Use --oneline.", ["Delete .git", "Use --oneline", "Never log", "GUI only"]],
      ["Committed changes view:", "b", "git show not plain diff.", ["diff always", "git show", "reboot", "ignore diff"]],
      ["Author in log:", "a", "Who made commit.", ["Who committed", "CPU", "Remote URL", "License"]],
      ["Two commits proof:", "b", "log --oneline two lines.", ["status only", "two log lines", "delete README", "no log"]],
      ["Staged preview flag:", "c", "--staged.", ["--force", "--hard", "--staged", "--push"]],
      ["Find bug introduction:", "b", "Log then git show.", ["Random reset", "Log + show", "Delete branch", "Ignore history"]],
      ["Module 2 lab:", "b", "Local init, commits, log.", ["PR only", "init commits log", "No install", "Email ZIP"]],
    ],
    flashItems: [
      ["Quick history?", "git log --oneline"],
      ["Preview next commit?", "git diff --staged"],
      ["Unstaged edits?", "git diff"],
      ["Commit ID?", "Unique hash for one snapshot"],
      ["Before commit?", "status → diff → diff --staged"],
    ],
    externalResources: "LOCAL_GIT_RESOURCE",
    assignment: "git-lab-local-basics",
  },
  {
    id: "git-branching-basics",
    name: "Branching Basics",
    prereq: ["git-history-and-diff"],
    objs: ["GIT-M03-O1", "GIT-M03-O2", "GIT-M03-O3"],
    title: "Branching Basics",
    exp: "GIT_BRANCHING_BASICS_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `Branches are movable labels pointing at commits — cheap safety copies for experiments. main (or master) is the default line of history teams treat as stable. Feature work happens on named branches so main stays deployable.

Create a branch with git branch add-notes or git checkout -b add-notes. git switch -c feature-name is the modern equivalent. git branch lists local branches; the asterisk marks your current branch.

git checkout branch-name or git switch branch-name moves your working tree to that branch's latest commit. Edits and commits on a branch stay on that branch until you merge.

Why branch? You can try a risky refactor without touching main. If the experiment fails, delete the branch. If it succeeds, merge back. Branches are labels, not duplicate universes — Git stores commits efficiently.

Always git status after switching branches. It confirms which line of history you are extending before you commit.`,
    keyFacts: [
      "Branches are cheap pointers to commits — safe experiments",
      "main is the default stable branch name",
      "git switch -c name creates and switches to a new branch",
      "Commits belong to whichever branch is checked out",
      "git status confirms current branch before you commit",
    ],
    guided: {
      title: "Branch for a Small Feature",
      steps: [
        "In hello-bridge on main, run git status — confirm branch",
        "git switch -c add-notes",
        "Add a notes.txt file and commit with a clear message",
        "git log --oneline — commit exists on add-notes",
        "git switch main — notes.txt disappears from working tree until merge",
      ],
    },
    mistakes: [
      "Committing directly on main for risky experiments",
      "Forgetting to switch branch before starting new work",
      "Assuming branches copy every file on disk twice",
    ],
    traps: [
      "Deleting main instead of a feature branch — know your current branch",
      "Creating branches but never merging — stale work piles up",
      "Switching branches with uncommitted changes without reading Git's warning",
    ],
    scenario:
      "You need to draft release notes while a hotfix is in progress. You branch docs-release on main, write notes, while a teammate branches hotfix-login — parallel work without stepping on each other.",
    quizQ1: [
      "Why create a feature branch instead of committing on main?",
      "b",
      "Branches isolate experiments so main stays stable.",
      ["Branches delete main", "Isolate work safely", "Required by GitHub", "Faster internet"],
      "easy",
    ],
    quizExtra: [
      ["Create and switch branch:", "c", "git switch -c branch-name.", ["git push --force", "git init", "git switch -c name", "git clone"], "easy"],
      ["Current branch shown by:", "a", "git status or git branch.", ["git status / branch", "git push", "git remote", "git clean"], "easy"],
      ["Branch is best described as:", "b", "A movable label on commits.", ["Duplicate disk copy", "Label on commits", "GitHub account", "SSH key"], "medium"],
      ["Before commit on branch:", "d", "git status to confirm branch.", ["push --force", "delete .git", "skip status", "git status confirm branch"], "medium"],
    ],
    bankItems: [
      ["Default stable branch often:", "a", "main or master.", ["main/master", "random", "origin only", "dev always"]],
      ["List branches:", "b", "git branch.", ["git log only", "git branch", "git push", "git init"]],
      ["Switch branch:", "c", "git switch name or checkout.", ["git merge only", "git add .", "git switch name", "git remote"]],
      ["Commit goes to:", "a", "Currently checked-out branch.", ["Current branch", "All branches", "GitHub only", "No branch"]],
      ["Failed experiment:", "b", "Delete feature branch, main untouched.", ["Delete main", "Drop feature branch", "Reinstall Git", "Force push"]],
      ["Parallel features:", "c", "Separate branches from main.", ["One branch only", "Email ZIPs", "Separate branches", "No commits"]],
      ["Uncommitted switch warning:", "a", "Git may block or require stash.", ["Git may warn/block", "Always silent", "Deletes repo", "Auto commits"]],
      ["Branch naming:", "b", "Descriptive: add-notes, fix-typo.", ["Random numbers", "Descriptive names", "Always main", "No names"]],
    ],
    flashItems: [
      ["Why branch?", "Safe experiments without touching main"],
      ["Create + switch?", "git switch -c branch-name"],
      ["See current branch?", "git status — first line"],
      ["Branch is not?", "A full duplicate of every file on disk"],
      ["Before commit?", "status — confirm branch"],
    ],
  },
  {
    id: "git-merge-basics",
    name: "Merge Basics",
    prereq: ["git-branching-basics"],
    objs: ["GIT-M03-O4", "GIT-M03-O5", "GIT-M03-O6"],
    title: "Merge Basics",
    exp: "GIT_MERGE_BASICS_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `Merging combines branch history into another branch — usually feature into main. Checkout the target branch first, then git merge feature-branch. Git fast-forwards when main had no new commits; otherwise it creates a merge commit.

After merge, main contains all commits from the feature branch. git log --oneline --graph shows the story. Delete the feature branch locally with git branch -d add-notes when done — it is housekeeping, not deleting code from main.

Always merge into the branch that should receive the work. Wrong direction merges the wrong way — status and branch name before merge prevent this.

If merge reports conflicts, Git stops and marks files — Module 3 intro covers reading markers; Module 6 resolves them hands-on.

Merge is local until push. Teams often merge via pull request on GitHub for review — Module 5 — but local git merge is the core mechanic.`,
    keyFacts: [
      "Checkout target branch, then git merge source-branch",
      "Fast-forward merge when target has no new commits",
      "git log --graph visualizes merge history",
      "git branch -d removes merged feature branches locally",
      "Merge direction matters — receive work on the branch you checkout",
    ],
    guided: {
      title: "Merge Feature into Main",
      steps: [
        "On add-notes branch with a commit, git switch main",
        "git merge add-notes — note fast-forward or merge commit message",
        "Confirm notes.txt exists on main",
        "git log --oneline --graph — see branch join",
        "git branch -d add-notes — cleanup merged branch",
      ],
    },
    mistakes: [
      "Running merge on the feature branch instead of main",
      "Deleting main after merge confusion",
      "Force pushing after a messy local merge without understanding",
    ],
    traps: [
      "Merging main into feature repeatedly without ever merging feature back — stale branches",
      "Assuming merge deletes commits — history is preserved",
      "Using git merge with uncommitted changes — status first",
    ],
    scenario:
      "Your add-notes branch is approved. You switch main, merge add-notes, run tests on main, then delete the feature branch — standard team flow before push.",
    quizQ1: [
      "You want main to include add-notes commits. What is the correct order?",
      "a",
      "Checkout main, then git merge add-notes.",
      ["git merge main on add-notes", "Checkout main, merge add-notes", "Delete main", "git push --force only"],
      "medium",
    ],
    quizExtra: [
      ["Fast-forward merge when:", "b", "Target branch unchanged since branch point.", ["Always", "Target had no new commits", "Never", "Only on GitHub"], "easy"],
      ["See merge graph:", "c", "git log --oneline --graph.", ["git init", "git clean", "log --graph", "git remote"], "easy"],
      ["After merge cleanup:", "a", "git branch -d feature.", ["Delete main", "branch -d feature", "rm .git", "force push"], "medium"],
      ["Merge conflicts mean:", "d", "Git needs human to pick combined content.", ["Repo deleted", "Auto fixed always", "Push blocked forever", "Edit conflict markers"], "medium"],
    ],
    bankItems: [
      ["Merge target first step:", "b", "Checkout branch receiving work.", ["Push --force", "Checkout target", "Delete .git", "git init"]],
      ["Merge command:", "a", "git merge source-branch.", ["git merge source", "git push main", "git clone", "git ignore"]],
      ["Merged branch cleanup:", "c", "git branch -d name.", ["Delete main", "format disk", "branch -d feature", "git reset --hard always"]],
      ["Merge preserves:", "b", "Commit history from both lines.", ["Nothing", "History from both", "Only latest file", "Remote only"]],
      ["Wrong merge direction:", "a", "Work lands on wrong branch — read status.", ["Wrong branch gets commits", "Impossible", "Always fine", "Deletes GitHub"]],
      ["Local merge vs PR:", "c", "PR adds review on hosting site.", ["Same thing always", "PR is local only", "PR adds review layer", "Merge illegal on GitHub"]],
      ["Uncommitted merge attempt:", "b", "Git may refuse — commit or stash first.", ["Always works", "May refuse — status first", "Auto deletes", "Pushes main"]],
      ["Graph log shows:", "a", "How branches joined.", ["Branch merge story", "Wi-Fi speed", "SSH keys", "License"]],
    ],
    flashItems: [
      ["Merge order?", "Checkout target → git merge source"],
      ["Fast-forward?", "Main unchanged since branch — pointer moves"],
      ["Visualize history?", "git log --oneline --graph"],
      ["Cleanup merged branch?", "git branch -d feature-name"],
      ["Conflicts?", "Git pauses — edit markers, then commit"],
    ],
  },
  {
    id: "git-conflicts-intro",
    name: "Conflicts (Intro)",
    prereq: ["git-merge-basics"],
    objs: ["GIT-M03-O7", "GIT-M03-O8", "GIT-M03-O9"],
    title: "Conflicts (Intro)",
    exp: "GIT_CONFLICTS_INTRO_EXPERIENCE",
    mins: 30,
    diff: "medium",
    content: `A merge conflict happens when two branches edit the same lines differently and Git cannot pick a winner automatically. Git stops the merge and marks files with conflict markers: <<<<<<< HEAD, =======, >>>>>>> branch-name.

Do not panic — your repo is not corrupted. Git paused and left markers for you to read. git status lists unmerged paths. Open the file, decide the correct combined content, remove markers, save, git add, git commit to finish the merge.

Prevention beats firefighting: pull or merge main into feature branches often; communicate on shared files; keep commits small so conflicts are small.

Module 6 practices full resolution. This intro teaches recognition: if you see <<<<<<< in a file, you are mid-merge and must resolve before continuing.

Never commit conflict markers intentionally — reviewers and CI will catch them, but fixing before commit is professional habit.`,
    keyFacts: [
      "Conflict markers: <<<<<<<, =======, >>>>>>>",
      "git status lists unmerged files during conflict",
      "Remove markers, save, add, commit to complete merge",
      "Conflicts mean Git needs human judgment — not failure",
      "Small frequent merges reduce conflict size",
    ],
    guided: {
      title: "Recognize Conflict Markers",
      steps: [
        "Read a sample conflict block in docs — identify HEAD vs incoming side",
        "Note git status shows both branches unmerged",
        "Decide final text removing all marker lines",
        "git add resolved-file after editing",
        "git commit completes the merge — no special merge flag needed",
      ],
    },
    mistakes: [
      "Deleting the entire file instead of editing markers",
      "Committing with markers still inside the file",
      "Running git merge --abort without trying to understand the conflict",
    ],
    traps: [
      "Assuming conflict means someone did something wrong — parallel work causes them",
      "Force pushing to avoid conflicts — creates worse remote problems",
      "Ignoring status during merge — you will commit half-resolved files",
    ],
    scenario:
      "Two teammates edit the same README heading on different branches. Merge shows markers. You pick the approved title, remove markers, commit — ship continues.",
    quizQ1: [
      "What do <<<<<<< HEAD markers in a file mean?",
      "c",
      "Git paused a merge and needs you to pick combined content.",
      ["File is deleted", "Push succeeded", "Merge conflict — resolve markers", "Branch renamed"],
      "medium",
    ],
    quizExtra: [
      ["During conflict run first:", "b", "git status.", ["push --force", "git status", "rm .git", "git init"], "easy"],
      ["After editing conflict file:", "a", "git add then commit.", ["Push only", "git add then commit", "Delete branch", "Skip add"]],
      ["Conflict markers must:", "d", "Be removed before commit.", ["Stay forever", "Push automatically", "Replace .git", "Be removed before commit"], "easy"],
      ["Reduce conflicts by:", "c", "Merging main into feature often.", ["Never merge", "Force push daily", "Merge main into feature regularly", "Delete main"]],
    ],
    bankItems: [
      ["Markers include:", "a", "<<<<<<< ======= >>>>>>>.", ["Conflict markers", "JSON only", "HTML tags", "SSH headers"]],
      ["Unmerged files shown in:", "b", "git status.", ["git remote", "git status", "git config --list only", "git clean always"]],
      ["Abort merge:", "c", "git merge --abort.", ["Delete .git", "push --force", "merge --abort", "git init"]],
      ["Conflict not corruption:", "a", "Git waits for your edit.", ["Normal pause state", "Repo ruined", "Must reclone", "Illegal state"]],
      ["Commit with markers:", "d", "Bad — breaks code and review.", ["Best practice", "Required", "Auto fixed", "Bad — remove first"]],
      ["HEAD in marker means:", "b", "Current branch version.", ["Remote only", "Current branch side", "Deleted content", "GitHub UI"]],
      ["Finish merge after fix:", "a", "add resolved files + commit.", ["push --force only", "add + commit", "new init", "ignore"]],
      ["Module 3 lab branch:", "b", "Practice branch merge workflow.", ["Skip branches", "Branch merge lab", "Only GitHub", "No merge"]],
    ],
    flashItems: [
      ["Conflict markers?", "<<<<<<< ======= >>>>>>>"],
      ["Conflict first step?", "git status — see unmerged files"],
      ["After fix?", "Remove markers → add → commit"],
      ["Conflict means?", "Git needs human merge decision"],
      ["Prevention?", "Merge main into feature often"],
    ],
    externalResources: "LOCAL_GIT_RESOURCE",
    assignment: "git-lab-branches",
  },
  {
    id: "git-remotes-explained",
    name: "Remotes Explained",
    prereq: ["git-conflicts-intro"],
    objs: ["GIT-M04-O1", "GIT-M04-O2", "GIT-M04-O3"],
    title: "Remotes Explained",
    exp: "GIT_REMOTES_EXPLAINED_EXPERIENCE",
    mins: 30,
    diff: "medium",
    content: `A remote is a named bookmark to another copy of your repository — usually on GitHub. origin is the default name for the server you cloned from or pushed to first. Local commits live in .git; remotes let you exchange commits with teammates.

git remote -v lists URLs for fetch and push. git remote add origin URL connects an existing local repo to GitHub after you create an empty repository online.

Push sends your commits upstream; fetch downloads remote commits without merging; pull is fetch plus merge (or rebase). Your local repo remains the workspace — remote is a conversation partner, not a replacement.

Losing network does not delete local history. Pushing requires authentication (HTTPS or SSH). Create a free GitHub account before this module's lab.

Never confuse remote with cloud backup alone — you choose what to push; Git history stays structured with messages and branches.`,
    keyFacts: [
      "origin is the default remote name",
      "git remote -v shows fetch and push URLs",
      "Push uploads commits; pull downloads and integrates",
      "Local repo works offline — remotes need network",
      "git remote add origin URL links local repo to GitHub",
    ],
    guided: {
      title: "Connect Local to Remote",
      steps: [
        "Create empty repo on GitHub — no README if you have local commits",
        "Copy HTTPS or SSH URL from GitHub",
        "git remote add origin URL in local hello-bridge",
        "git remote -v — verify fetch and push URLs",
        "git push -u origin main — send commits and set upstream tracking",
      ],
    },
    mistakes: [
      "Pushing before adding any remote",
      "Typos in remote URL causing authentication errors",
      "Assuming clone and init are the same workflow",
    ],
    traps: [
      "Saying backup when you mean push — push shares commits, not arbitrary folders",
      "Adding origin twice with different URLs — remove and re-add carefully",
      "Confusing GitHub repo name with local folder name — they can differ",
    ],
    scenario:
      "Your laptop has hello-bridge commits; GitHub has nothing. You create remote repo, git remote add origin, push — teammates can clone the same history.",
    quizQ1: [
      "What is origin in Git?",
      "b",
      "Default nickname for the primary remote repository URL.",
      ["Your username", "Default remote name", "Main branch only", "Commit message prefix"],
      "easy",
    ],
    quizExtra: [
      ["List remotes:", "a", "git remote -v.", ["git remote -v", "git log", "git branch -a only", "git init"], "easy"],
      ["Push sends:", "c", "Local commits to remote.", ["Remote to local only", "Emails", "Local commits upstream", "Deletes main"]],
      ["Offline local repo:", "b", "Still has full local history.", ["Empty", "Keeps local history", "Deletes .git", "Requires Wi-Fi"]],
      ["Add remote to existing repo:", "d", "git remote add origin URL.", ["git clone .", "git init again", "delete .git", "remote add origin URL"], "medium"],
    ],
    bankItems: [
      ["Remote is:", "a", "Bookmark to another repo copy.", ["Bookmark URL", "Local branch", "Editor plugin", "Wi-Fi"]],
      ["Default remote name:", "b", "origin.", ["main", "origin", "HEAD", "master only"]],
      ["pull combines:", "c", "Fetch + integrate changes.", ["Push only", "Delete remote", "Fetch and merge", "Init"]],
      ["remote -v shows:", "a", "Fetch and push URLs.", ["URLs", "Passwords", "CPU usage", "Branch colors"]],
      ["Push requires:", "b", "Network and authentication.", ["Nothing", "Network + auth", "Only GUI", "USB"]],
      ["Local without push:", "a", "Commits still exist locally.", ["Commits remain", "All lost", "Illegal", "Auto sync"]],
      ["Wrong remote URL fix:", "c", "remote set-url or remove/re-add.", ["Delete project", "Reinstall OS", "set-url or re-add", "Force only"]],
      ["GitHub account for module:", "b", "Free account sufficient.", ["Enterprise only", "Free account OK", "No account ever", "Paid only"]],
    ],
    flashItems: [
      ["Default remote?", "origin"],
      ["See remote URLs?", "git remote -v"],
      ["Push vs pull?", "Push up · pull down and merge"],
      ["Offline?", "Local commits safe without network"],
      ["Link existing local repo?", "git remote add origin URL"],
    ],
  },
  {
    id: "git-clone-push-pull",
    name: "Clone, Push, Pull",
    prereq: ["git-remotes-explained"],
    objs: ["GIT-M04-O4", "GIT-M04-O5", "GIT-M04-O6"],
    title: "Clone, Push, Pull",
    exp: "GIT_CLONE_PUSH_PULL_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `git clone URL downloads a repository with full history and checks out the default branch — use it to start from an existing GitHub project. Clone once; daily work uses pull and push.

git push origin branch-name sends local commits to GitHub. git pull origin main fetches and merges remote updates into your current branch. Pull before push when teammates may have merged changes — avoids non-fast-forward rejections.

-u on first push sets upstream tracking so later git push and git pull need fewer arguments. git status shows ahead/behind counts when tracking is configured.

Sync habit: pull at start of day, commit locally, pull again before push, then push. Module lab creates GitHub repo, pushes hello-bridge, clones to second folder, simulates remote change, pulls.

When push is rejected non-fast-forward, do not force — pull, resolve if needed, push again.`,
    keyFacts: [
      "git clone copies remote repo with history",
      "git push uploads local commits to remote",
      "git pull integrates remote changes locally",
      "Non-fast-forward rejection means remote has commits you lack",
      "git push -u origin main sets upstream tracking",
    ],
    guided: {
      title: "Push, Clone, Pull Sync",
      steps: [
        "Push hello-bridge to GitHub with git push -u origin main",
        "Clone to ../hello-bridge-clone with git clone URL",
        "Edit README on GitHub web UI — commit there",
        "In clone folder: git pull — see remote README change",
        "In original folder: git pull before next push",
      ],
    },
    mistakes: [
      "Force pushing to fix rejection without pulling first",
      "Cloning inside an existing repo folder",
      "Forgetting pull before push on shared branches",
    ],
    traps: [
      "git push --force on shared main — overwrites teammates' work",
      "Assuming clone updates automatically — need pull",
      "HTTPS auth failures from expired tokens — regenerate on GitHub",
    ],
    scenario:
      "Teammate merged overnight. Your push rejects. You git pull, merge completes fast-forward, push succeeds — no force needed.",
    quizQ1: [
      "Push rejected as non-fast-forward. Best first response?",
      "b",
      "Pull remote changes, integrate, then push again.",
      ["git push --force", "git pull then push", "Delete .git", "New clone always"],
      "medium",
    ],
    quizExtra: [
      ["git clone:", "a", "Downloads repo with full history.", ["Download full history", "Deletes remote", "Only gets latest file", "Creates branch only"], "easy"],
      ["git pull:", "c", "Fetch and merge remote into current branch.", ["Push only", "Delete local", "Fetch + merge", "Init remote"], "easy"],
      ["Upstream tracking set by:", "b", "git push -u origin branch.", ["git init", "push -u origin branch", "git clean", "git ignore"], "medium"],
      ["Before push on shared branch:", "d", "Pull to integrate remote first.", ["Force always", "Skip network", "Delete main", "Pull first"], "medium"],
    ],
    bankItems: [
      ["Clone use case:", "b", "Start from existing GitHub repo.", ["Delete local", "Start from remote repo", "Ignore history", "Push only"]],
      ["Non-fast-forward means:", "a", "Remote has commits you missing.", ["Remote ahead", "Wi-Fi down", "Branch illegal", "No auth"]],
      ["Force push risk:", "c", "Overwrites shared remote history.", ["None", "Always safe", "Overwrites team work", "Required daily"]],
      ["pull vs fetch:", "b", "pull merges; fetch only downloads.", ["Same always", "pull merges in", "fetch merges always", "Neither needs network"]],
      ["Second machine workflow:", "a", "Clone then pull/push.", ["Email ZIP", "Clone + sync", "Copy .git only", "Screenshot"]],
      ["HTTPS push needs:", "c", "Valid credentials/token.", ["Nothing", "Paper note", "Auth token/password", "GUI only"]],
      ["status ahead/behind:", "b", "Compares to tracked remote branch.", ["CPU info", "Remote tracking info", "License", "RAM"]],
      ["Module 4 lab:", "a", "Push, clone, pull sync.", ["PR merge only", "Push clone pull", "No GitHub", "Only init"]],
    ],
    flashItems: [
      ["Start from GitHub project?", "git clone URL"],
      ["Push rejected?", "pull → integrate → push"],
      ["Daily sync?", "pull before push on shared branches"],
      ["Set upstream?", "git push -u origin branch"],
      ["Never on shared main?", "git push --force without team OK"],
    ],
    externalResources: "GITHUB_FREE_RESOURCE",
    assignment: "git-lab-github-remote",
  },
  {
    id: "git-pull-requests",
    name: "Pull Requests",
    prereq: ["git-clone-push-pull"],
    objs: ["GIT-M05-O1", "GIT-M05-O2", "GIT-M05-O3"],
    title: "Pull Requests",
    exp: "GIT_PULL_REQUESTS_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `A pull request (PR) asks maintainers to merge your branch after review — GitHub UI on top of Git push. Workflow: branch locally, commit, push branch, open PR, review diff, address feedback, merge, delete branch, pull updated main.

PRs catch mistakes before merge — diff view shows every line changed. Self-review before requesting others: read your own diff as if you were the reviewer.

Bridge team workflow matches this track: branch from dev, PR into dev, never push directly to main. Same mechanics on any repo.

PR title and description explain why the change exists — link tickets, note testing done. Small PRs review faster than thousand-line dumps.

After merge on GitHub, git checkout main && git pull locally so your machine matches remote.`,
    keyFacts: [
      "PRs propose merging a branch after review",
      "Push feature branch before opening PR on GitHub",
      "Diff view shows line changes reviewers judge",
      "Merge via GitHub UI integrates into target branch",
      "Pull locally after remote merge to sync main",
    ],
    guided: {
      title: "Open and Review a PR",
      steps: [
        "git switch -c feature/docs-tweak && edit README",
        "Commit and git push -u origin feature/docs-tweak",
        "On GitHub: Compare & pull request → choose base main",
        "Read diff tab line by line — note any accidental edits",
        "Merge PR, delete branch on GitHub, git pull on local main",
      ],
    },
    mistakes: [
      "Opening PR from unpushed local-only branch",
      "Merging without reading the diff",
      "Forgetting git pull after GitHub merge leaves stale local main",
    ],
    traps: [
      "PR against wrong base branch — verify main vs dev",
      "Huge PR with unrelated changes — reviewers reject or delay",
      "Assuming merge on GitHub updates laptop automatically",
    ],
    scenario:
      "You fix a typo in team docs. Feature branch, push, PR with screenshot of preview, reviewer approves, merge — audit trail shows who approved what.",
    quizQ1: [
      "Why do teams use pull requests?",
      "a",
      "Review changes before merging into shared branches.",
      ["Review before merge", "Replace git commit", "Delete branches", "Avoid Git entirely"],
      "easy",
    ],
    quizExtra: [
      ["Before opening PR:", "b", "Push feature branch to remote.", ["Delete main", "Push feature branch", "Only local commit", "git init"], "easy"],
      ["PR diff shows:", "c", "Line changes between base and branch.", ["Wi-Fi list", "SSH keys", "Line-level changes", "Disk usage"], "easy"],
      ["After GitHub merge locally:", "d", "git pull on main.", ["Never pull", "push --force", "delete .git", "git pull main"], "medium"],
      ["Bridge workflow:", "a", "Branch dev, PR to dev, not direct main push.", ["Push main direct", "PR to dev branch", "No branches", "Email patch"]],
    ],
    bankItems: [
      ["PR is:", "b", "Request to merge after review.", ["Local only", "Merge request + review", "git init alias", "Force push"]],
      ["Self-review means:", "a", "Read your diff before others.", ["Skip diff", "Read own diff first", "Merge instantly", "Delete branch"]],
      ["PR base branch:", "c", "Target receiving merge — often main/dev.", ["Random", "Always feature", "Target like main", "origin URL"]],
      ["Small PRs:", "b", "Review faster, fewer mistakes hide.", ["Slower always", "Easier review", "Forbidden", "No diff"]],
      ["Post-merge local sync:", "a", "git pull on updated branch.", ["Never sync", "pull updated main", "Reclone always", "Force push"]],
      ["PR without push:", "d", "GitHub cannot see commits.", ["Works fine", "Auto magic", "Uses email", "Fails — push first"]],
      ["Review catches:", "c", "Accidental secrets and typos.", ["Nothing", "Only style", "Secrets and logic errors", "Hardware"]],
      ["Delete branch after merge:", "b", "Housekeeping — main has commits.", ["Deletes code from main", "Cleanup merged branch", "Illegal", "Removes history"]],
    ],
    flashItems: [
      ["PR purpose?", "Review before merge to shared branch"],
      ["PR steps?", "branch → commit → push → open PR"],
      ["Before asking review?", "Read your own diff"],
      ["After GitHub merge?", "git pull locally"],
      ["Bridge rule?", "PR into dev — no direct main push"],
    ],
  },
  {
    id: "git-commit-messages",
    name: "Commit Messages That Help",
    prereq: ["git-pull-requests"],
    objs: ["GIT-M05-O4", "GIT-M05-O5", "GIT-M05-O6"],
    title: "Commit Messages That Help",
    exp: "GIT_COMMIT_MESSAGES_EXPERIENCE",
    mins: 25,
    diff: "medium",
    content: `Commit messages explain why a change exists — future you and reviewers read git log like a story. First line: imperative summary under ~50 chars — Add login retry, Fix typo in README. Body optional: context, ticket link, what you tested.

Bad: fixed stuff, wip, asdf. Good: Document API timeout in README — support asked for clearer error steps.

Atomic commits: one logical change per commit — easier revert and review. Mixed refactors plus feature in one commit forces all-or-nothing rollback.

PR description complements messages — messages are per commit; PR summarizes the whole change set.

Teams may adopt Conventional Commits (feat:, fix:) — follow project CONTRIBUTING.md. Bridge content uses clear plain English why-focused messages.`,
    keyFacts: [
      "First line: imperative summary of the change",
      "Explain why — not only what file changed",
      "One logical change per commit when possible",
      "Avoid vague messages: fix, wip, update",
      "Match team CONTRIBUTING conventions if present",
    ],
    guided: {
      title: "Write a Reviewer-Friendly Message",
      steps: [
        "Identify why: e.g., clarify install steps for Windows users",
        'Subject: Document Git install path for Windows in README',
        "Body: Support ticket #42 — users missed winget option",
        "git commit -m \"subject\" -m \"body paragraph\"",
        "git log -1 — verify message readable in log",
      ],
    },
    mistakes: [
      "Empty or one-word messages on shared repos",
      "Combining unrelated changes in one commit",
      "Writing novels in subject line instead of body",
    ],
    traps: [
      "Commit messages like fixed bug without which bug — useless in git blame",
      "Squashing everything to wip before PR — loses review granularity",
      "Copying ticket number only with no human sentence",
    ],
    scenario:
      "On-call finds bad doc caused misconfig. git log shows Document TLS verify steps — author, date, and why without opening email archive.",
    quizQ1: [
      "Which commit message is strongest for a team repo?",
      "c",
      "Imperative summary explaining the change purpose.",
      ["wip", "fixed stuff", "Document API timeout in README", "asdf"],
      "easy",
    ],
    quizExtra: [
      ["Message should explain:", "b", "Why the change was needed.", ["Your lunch", "Why change needed", "CPU serial", "Wi-Fi password"], "easy"],
      ["Atomic commit:", "a", "One logical change per commit.", ["Everything at once", "One logical change", "No messages", "Binary only"], "medium"],
      ["Imperative subject example:", "d", "Add user export filter.", ["Added filtering maybe", "I added filters", "filters", "Add user export filter"], "medium"],
      ["Long context goes in:", "b", "Commit body after blank line.", ["Subject only always", "Commit body", ".git/config", "Branch name"]],
    ],
    bankItems: [
      ["Bad message:", "a", "wip with no context.", ["wip", "Add retry to login API", "Fix README install path", "Document env vars"]],
      ["git log readers:", "c", "Future you and reviewers.", ["Nobody", "Only GitHub", "You and reviewers", "Antivirus"]],
      ["Subject line length:", "b", "Keep concise — detail in body.", ["Unlimited essay", "Concise summary", "Empty always", "Binary"]],
      ["feat: prefix from:", "a", "Conventional Commits style.", ["Conventional Commits", "Random", "Illegal Git", "Windows only"]],
      ["Mixed refactor+feature:", "d", "Split commits when possible.", ["Always one commit", "Never commit", "Delete branch", "Split when possible"]],
      ["PR description vs commit:", "b", "PR summarizes whole change set.", ["Identical always", "PR summarizes series", "Commit replaces PR", "Neither matter"]],
      ["Blame uses:", "c", "Messages to explain line history.", ["Colors", "Icons", "Messages and authors", "USB"]],
      ["Bridge style:", "a", "Clear why-focused English.", ["Random chars", "Clear why-focused", "No messages", "Emoji only"]],
    ],
    flashItems: [
      ["Good subject?", "Imperative: Add, Fix, Document…"],
      ["Explain?", "Why — not only which file"],
      ["Avoid?", "wip, asdf, fixed stuff"],
      ["Atomic commit?", "One logical change each"],
      ["Long context?", "Commit body after blank line"],
    ],
  },
  {
    id: "git-gitignore-secrets",
    name: ".gitignore and Secrets",
    prereq: ["git-commit-messages"],
    objs: ["GIT-M05-O7", "GIT-M05-O8", "GIT-M05-O9"],
    title: ".gitignore and Secrets",
    exp: "GIT_GITIGNORE_SECRETS_EXPERIENCE",
    mins: 30,
    diff: "medium",
    content: `.gitignore tells Git which paths never to track — .env, node_modules/, build output, OS junk. Create .gitignore in repo root; patterns apply recursively. git status should not list ignored files as untracked.

Never commit secrets: API keys, passwords, private keys, connection strings. Once pushed, assume exposed — rotate credentials and use gitignore going forward. Prevention beats frantic history rewriting.

If you accidentally git add .env, git restore --staged .env unstages without deleting the file. Add .env to .gitignore, commit that rule, verify git status clean.

Security reviews check git history — ignored files never enter timeline. Teams share .gitignore templates per stack.

Module lab: open PR workflow plus Break It staging .env — Fix It with restore --staged and gitignore.`,
    keyFacts: [
      ".gitignore excludes paths from tracking",
      "Never commit .env, keys, or tokens",
      "git restore --staged unstages without deleting file",
      "Rotating leaked secrets is mandatory",
      "Commit .gitignore so team shares same rules",
    ],
    guided: {
      title: "Ignore Local Secrets",
      steps: [
        "Create .env with fake API_KEY=demo — do not push real secrets",
        "Add .env to .gitignore",
        "git status — .env should not appear as untracked",
        "If staged by mistake: git restore --staged .env",
        "Commit .gitignore with message Explain ignore local env files",
      ],
    },
    mistakes: [
      "git add . without checking for .env",
      "Committing then only deleting file — history still has secret",
      "Sharing .env.example with real values copied in",
    ],
    traps: [
      "Assuming private GitHub repo means secrets are safe — still leaked to anyone with access",
      "Ignoring .gitignore itself — team diverges on tracked junk",
      "Force pushing secret scrub without team coordination",
    ],
    scenario:
      "Intern stages .env with database password. Senior catches in PR diff. restore --staged, add gitignore, rotate DB password — crisis avoided before merge.",
    quizQ1: [
      "You accidentally staged .env. First fix?",
      "b",
      "git restore --staged .env and add .env to .gitignore.",
      ["Push anyway", "restore --staged + gitignore", "Delete repo", "Change password only"],
      "medium",
    ],
    quizExtra: [
      [".gitignore purpose:", "a", "Exclude paths from Git tracking.", ["Exclude paths", "Speed Wi-Fi", "Encrypt disk", "Merge branches"], "easy"],
      ["Secret pushed to GitHub:", "c", "Rotate credential — treat as exposed.", ["Ignore", "Delete branch only", "Rotate secret", "Change wallpaper"], "medium"],
      ["restore --staged:", "b", "Unstages file, keeps working copy.", ["Deletes file", "Unstages only", "Pushes main", "Creates PR"]],
      ["Share ignore rules:", "d", "Commit .gitignore to repo.", ["Never commit", "Email only", "Delete .git", "Commit .gitignore"]],
    ],
    bankItems: [
      ["Never commit:", "a", ".env and private keys.", [".env / keys", "README", ".gitignore", "LICENSE"]],
      ["node_modules usually:", "b", "Listed in .gitignore.", ["Committed always", "Ignored", "Required on GitHub", "Encrypted"]],
      ["add . risk:", "c", "May stage secrets if not ignored.", ["None", "Always safe", "May grab secrets", "Illegal"]],
      ["Leaked secret fix includes:", "d", "Rotate + prevent re-commit.", ["Hope", "Screenshot", "Ignore", "Rotate + gitignore"]],
      ["status with good ignore:", "b", ".env not listed untracked.", ["Shows .env", "Hides ignored .env", "Deletes .env", "Pushes .env"]],
      [".env.example:", "a", "Template without real secrets.", ["Template no secrets", "Real production keys", "Binary", "Ignored always"]],
      ["Private repo secrets:", "c", "Still sensitive — access controlled not public.", ["Public internet", "Safe to leak", "Still sensitive", "Auto encrypted"]],
      ["Module 5 lab break:", "b", "Stage .env then fix with restore.", ["Force push", "Stage .env fix", "Delete main", "Skip PR"]],
    ],
    flashItems: [
      ["Never commit?", ".env, keys, tokens"],
      ["Accidental stage?", "git restore --staged file"],
      ["Prevent tracking?", "Add pattern to .gitignore"],
      ["Secret pushed?", "Rotate credential immediately"],
      ["git add . ?", "Check status — may grab secrets"],
    ],
    externalResources: "GITHUB_FREE_RESOURCE",
    assignment: "git-lab-pull-request",
  },
  {
    id: "git-undo-safely",
    name: "Undo Safely",
    prereq: ["git-gitignore-secrets"],
    objs: ["GIT-M06-O1", "GIT-M06-O2", "GIT-M06-O3"],
    title: "Undo Safely",
    exp: "GIT_UNDO_SAFELY_EXPERIENCE",
    mins: 35,
    diff: "medium",
    content: `Git undo is layered — pick the smallest fix for the mistake. Unstaged file edits: git restore filename discards working tree changes to last commit. Staged but not committed: git restore --staged filename unstages; add --worktree to also discard edits.

Committed locally not pushed: git revert HEAD creates new commit undoing changes — safe for shared history later. git reset --soft HEAD~1 moves branch back keeping changes staged — use when commit was early, not to erase pushed work.

Read git status after every undo command — confirm you are in expected state before next action.

Avoid git reset --hard until you understand it destroys uncommitted work. Module 6 lab practices bad git add recovery with restore.

When unsure, stop — status, log, diff — ask teammate before force or hard reset on shared branches.`,
    keyFacts: [
      "git restore file drops unstaged working tree changes",
      "git restore --staged unstages without deleting edits",
      "git revert adds inverse commit — safe for shared history",
      "git reset --hard destroys uncommitted work — caution",
      "status after undo confirms resulting state",
    ],
    guided: {
      title: "Unstage and Restore",
      steps: [
        "Edit README and git add — staged",
        "git restore --staged README.md — unstaged, edits remain",
        "Edit again; git restore README.md — discard working changes",
        "Make commit; practice git revert HEAD for safe undo",
        "git status and git log --oneline after each step",
      ],
    },
    mistakes: [
      "Using reset --hard to fix minor staging errors",
      "Reverting without reading what HEAD contains",
      "Undoing on shared pushed commits with reset instead of revert",
    ],
    traps: [
      "Stack Overflow reset --hard as first answer — often overkill",
      "Assuming deleted file is gone — git restore can recover from index",
      "Multiple undo commands without status — compound confusion",
    ],
    scenario:
      "You stage wrong config. restore --staged, fix .gitignore, recommit — no force push, no panic.",
    quizQ1: [
      "Wrong file staged, edits should stay. Command?",
      "a",
      "git restore --staged filename.",
      ["git restore --staged file", "git reset --hard", "Delete .git", "git push --force"],
      "medium",
    ],
    quizExtra: [
      ["Discard unstaged edits:", "b", "git restore filename.", ["push --force", "git restore file", "git init", "git clone"]],
      ["Safe undo pushed commit:", "c", "git revert.", ["reset --hard on main", "delete remote", "git revert", "ignore"]],
      ["reset --hard risk:", "d", "Destroys uncommitted work.", ["None", "Always safe", "Speeds Wi-Fi", "Destroys uncommitted work"]],
      ["After undo always:", "a", "git status.", ["push --force", "git status", "reboot", "rm .git"]],
    ],
    bankItems: [
      ["Unstage only:", "a", "git restore --staged.", ["restore --staged", "reset --hard", "push", "init"]],
      ["Discard working edits:", "b", "git restore file.", ["commit --force", "restore file", "remote add", "merge abort only"]],
      ["Revert vs reset shared:", "c", "Revert adds new commit — safer.", ["Reset always", "Delete branch", "Revert safer shared", "Force only"]],
      ["soft reset HEAD~1:", "a", "Undo commit keep staged.", ["Undo commit keep changes", "Delete repo", "Push main", "Ignore log"]],
      ["Undo ladder first:", "b", "Smallest fix — restore before hard reset.", ["Hard reset first", "Smallest fix first", "Delete .git", "New clone"]],
      ["status after undo:", "d", "Confirms clean or expected files.", ["Optional", "Illegal", "Slows Git", "Confirms state"]],
      ["Pushed mistake team:", "b", "Revert commit — discuss reset.", ["Force main always", "Revert + discuss", "Hide laptop", "Email ZIP"]],
      ["Module 6 lab:", "a", "Bad add + conflict recovery.", ["Only init", "Recovery drills", "Skip status", "Capstone only"]],
    ],
    flashItems: [
      ["Unstage?", "git restore --staged file"],
      ["Drop unstaged edits?", "git restore file"],
      ["Safe shared undo?", "git revert"],
      ["Dangerous?", "git reset --hard — read first"],
      ["After undo?", "git status"],
    ],
  },
  {
    id: "git-merge-conflicts",
    name: "Merge Conflicts",
    prereq: ["git-undo-safely"],
    objs: ["GIT-M06-O4", "GIT-M06-O5", "GIT-M06-O6"],
    title: "Merge Conflicts",
    exp: "GIT_MERGE_CONFLICTS_EXPERIENCE",
    mins: 40,
    diff: "hard",
    content: `Module 3 introduced conflict markers — now resolve them hands-on. When git merge stops with conflict, open each listed file, read both sides between markers, produce correct combined text, remove markers entirely, save, git add, git commit.

git diff during conflict shows unmerged states. git merge --abort returns to pre-merge state if you need to start over — safe escape hatch.

Use editor merge tools or VS Code conflict UI if available — same outcome: one correct file without markers. Communicate with author of other branch when unsure which text wins.

Test after resolving — broken syntax from half-merged JSON or YAML causes CI failures. status must show clean before you push resolved merge.

Practice in lab with intentional parallel edits — confidence comes from repetition, not reading alone.`,
    keyFacts: [
      "Edit files to remove all conflict markers",
      "git add resolved files then git commit completes merge",
      "git merge --abort cancels merge attempt",
      "git status lists unmerged paths during conflict",
      "Test project after resolution before push",
    ],
    guided: {
      title: "Resolve a Two-Line Conflict",
      steps: [
        "Create conflict via merge exercise — status shows unmerged",
        "Open file — locate <<<<<<< ======= >>>>>>> block",
        "Choose combined correct text — delete marker lines",
        "git add file && git status — no unmerged paths",
        "git commit — default merge message OK; run tests",
      ],
    },
    mistakes: [
      "Leaving marker lines in committed file",
      "Adding file before editing markers",
      "Force pushing instead of finishing merge commit",
    ],
    traps: [
      "Resolving without talking to teammate on intentional parallel feature",
      "Accepting all incoming blindly in IDE — may drop important main fix",
      "Assuming one conflict file means done — status lists all unmerged",
    ],
    scenario:
      "CI fails after merge. Diff shows leftover ======= marker in config. Fix, commit amend or follow-up — lesson: read diff after merge.",
    quizQ1: [
      "After editing conflict markers, next steps?",
      "b",
      "git add resolved files, then git commit.",
      ["git push --force", "git add then commit", "git merge --abort always", "Delete branch"],
      "medium",
    ],
    quizExtra: [
      ["Cancel merge attempt:", "a", "git merge --abort.", ["merge --abort", "push --force", "rm .git", "git init"], "easy"],
      ["Unmerged paths listed in:", "c", "git status.", ["git remote", "git config", "git status", "git clean -fd blindly"]],
      ["Marker lines in commit:", "d", "Break code — must remove.", ["Required", "Decorative", "Auto removed", "Must remove manually"]],
      ["After resolve before push:", "b", "Run tests / verify build.", ["Skip tests", "Verify build", "Force only", "Delete main"]],
    ],
    bankItems: [
      ["Conflict resolution ends with:", "a", "Merge commit after add.", ["Merge commit", "Force push only", "New init", "Email patch"]],
      ["HEAD side in marker:", "b", "Current branch content.", ["Incoming only", "Current branch", "Random", "Deleted"]],
      ["Incoming side:", "c", "Other branch being merged.", ["Current only", "Remote Wi-Fi", "Other branch", "GitHub logo"]],
      ["IDE merge tool:", "a", "Helps pick hunks — still review.", ["Pick hunks to review", "Skip review", "Deletes repo", "Push auto"]],
      ["Multiple conflict files:", "d", "Resolve all before commit.", ["Commit one only", "Ignore rest", "Abort always", "Resolve all listed"]],
      ["JSON/YAML conflicts:", "b", "Validate syntax after edit.", ["Ignore syntax", "Validate after", "Binary only", "Never merge"]],
      ["Communication:", "c", "Talk when both sides intentional.", ["Never talk", "Hide changes", "Coordinate with author", "Force main"]],
      ["Post-merge verify:", "a", "git status clean.", ["Skip status", "status clean", "Delete .git", "Random reset"]],
    ],
    flashItems: [
      ["Resolve steps?", "Edit → remove markers → add → commit"],
      ["Need escape?", "git merge --abort"],
      ["All files done?", "status shows no unmerged"],
      ["Never commit?", "Lines with <<<<<<<"],
      ["After merge?", "Test before push"],
    ],
  },
  {
    id: "git-when-not-to-panic",
    name: "When Not to Panic",
    prereq: ["git-merge-conflicts"],
    objs: ["GIT-M06-O7", "GIT-M06-O8", "GIT-M06-O9"],
    title: "When Not to Panic",
    exp: "GIT_WHEN_NOT_TO_PANIC_EXPERIENCE",
    mins: 30,
    diff: "medium",
    content: `Most Git mistakes are recoverable if you stop and read. Wrong branch commit? git log, then cherry-pick commit hash onto correct branch, or merge branch if simpler. Pushed too early? Communicate — revert PR or add follow-up commit; avoid force on shared branches.

Panic checklist: git status → git log --oneline -5 → git diff. Answer: where am I, what changed, is it committed or pushed?

Detached HEAD scares beginners — usually from checking out old commit. git switch main returns to named branch.

When someone says just force push — ask why non-fast-forward happened first. Module lab drills bad git add and conflict recovery without deleting .git.

Git is a safety system when you read messages — not a trap when you pause.`,
    keyFacts: [
      "status → log → diff before destructive commands",
      "Wrong branch: cherry-pick or merge to move work",
      "Shared branches: prefer revert over force push",
      "Detached HEAD: git switch main to return",
      "Ask for help before reset --hard on team repos",
    ],
    guided: {
      title: "Panic Checklist Drill",
      steps: [
        "Simulate mistake — note gut panic response",
        "Run git status — write branch and file state",
        "git log --oneline -5 — locate recent commits",
        "git diff or git diff --staged — see actual changes",
        "Pick smallest fix: restore, cherry-pick, revert — not delete .git",
      ],
    },
    mistakes: [
      "Deleting repo folder at first error",
      "Force pushing shared main to fix local confusion",
      "Running commands you do not understand from forums",
    ],
    traps: [
      "Coworker hero narrative about rewriting history — not beginner first move",
      "Assuming committed means lost if on wrong branch — cherry-pick exists",
      "Ignoring Git's hint messages at bottom of output",
    ],
    scenario:
      "You commit API key fix on feature-docs instead of hotfix. log shows hash, cherry-pick onto hotfix branch, push — main never saw wrong branch name.",
    quizQ1: [
      "Scared after Git error. First command?",
      "b",
      "git status — see branch and changes before anything else.",
      ["git push --force", "git status", "Delete .git", "Reinstall Windows"],
      "easy",
    ],
    quizExtra: [
      ["Wrong branch commit fix:", "c", "Cherry-pick or merge workflow.", ["Delete all", "Force main", "Cherry-pick hash", "Email ZIP"]],
      ["Shared branch mistake:", "a", "Revert or new fix commit — talk to team.", ["Revert/fix commit", "Force push always", "Hide", "Delete remote"]],
      ["Detached HEAD fix:", "d", "git switch main.", ["rm .git", "push --force", "init", "git switch main"]],
      ["Before hard reset:", "b", "Confirm unpushed and team impact.", ["Never think", "Confirm impact", "Always fine", "Required daily"]],
    ],
    bankItems: [
      ["Panic checklist:", "a", "status → log → diff.", ["Force first", "status log diff", "Delete repo", "Ignore messages"]],
      ["cherry-pick moves:", "b", "Specific commit to current branch.", ["All branches", "One commit copy", "Remote only", "Wi-Fi"]],
      ["Force push shared:", "c", "Dangerous — team coordination required.", ["Always OK", "Required daily", "Dangerous on shared", "Automatic"]],
      ["Git error message:", "a", "Often tells next step — read it.", ["Ignore", "Read for hints", "Spam", "Virus"]],
      ["Committed not pushed:", "b", "Still local — many undo options.", ["On internet", "Local undo options", "Permanent", "Illegal"]],
      ["Ask teammate when:", "d", "Unsure about reset/force on shared repo.", ["Never", "Always hide", "Before breakfast only", "Unsure on shared repo"]],
      ["Module 6 lab:", "c", "Recovery drills with Break/Fix.", ["Only reading", "Skip labs", "Recovery lab", "No Git install"]],
      ["Fear removal truth:", "a", "Most mistakes recoverable with status first.", ["All data lost always", "Most recoverable", "Never use Git", "GUI only"]],
    ],
    flashItems: [
      ["Scared — run?", "git status first"],
      ["Checklist?", "status → log → diff"],
      ["Wrong branch?", "cherry-pick or merge fix"],
      ["Shared branch?", "Avoid force — revert/fix"],
      ["Detached HEAD?", "git switch main"],
    ],
    externalResources: "GITHUB_FREE_RESOURCE",
    assignment: "git-lab-recovery",
  },
  {
    id: "git-bridge-capstone",
    name: "Bridge Workflow Capstone",
    prereq: ["git-when-not-to-panic"],
    objs: ["GIT-M07-O1", "GIT-M07-O2", "GIT-M07-O3"],
    title: "Bridge Workflow Capstone",
    exp: "GIT_BRIDGE_CAPSTONE_EXPERIENCE",
    mins: 60,
    diff: "medium",
    content: `Capstone executes the full professional loop on a real repository: clone or fork practice repo, create feature branch from dev, make small docs or content change, status and diff before commit, push branch, open PR, review diff line by line, merge via GitHub, checkout dev, pull latest.

This mirrors Bridge AGENTS.md workflow — branch from dev, PR into dev, never push directly to main. Success means you explain each diff hunk and recover from a deliberate lab error without panic.

Self-review questions: Why branch? What would conflict look like? What files must stay out of commits?

Submit PR link and checklist in external-lab. Graduation is workflow confidence — not memorizing every plumbing command.`,
    keyFacts: [
      "Feature branch from dev — not direct main commits",
      "status and diff before every commit",
      "PR diff review before merge",
      "Pull dev after merge to sync local",
      "Capstone proves end-to-end workflow competence",
    ],
    guided: {
      title: "Full Bridge PR Workflow",
      steps: [
        "Fork or clone practice repo; git switch dev && git pull",
        "git switch -c feature/git-github-capstone",
        "Make small doc edit; git status && git diff",
        "git add, commit with why-focused message, push -u origin feature branch",
        "Open PR to dev, review diff, merge, local git switch dev && git pull",
      ],
    },
    mistakes: [
      "Committing directly to main or dev without branch",
      "Merging PR without reading diff",
      "Forgetting git pull after remote merge",
    ],
    traps: [
      "Copy-pasting commands without adapting branch names",
      "Opening PR against main when project uses dev as integration branch",
      "Skipping .gitignore check before first commit in repo",
    ],
    scenario:
      "You contribute a typo fix to Bridge docs. Same workflow as maintainers — branch, PR, review, merge — you are part of the team process.",
    quizQ1: [
      "Bridge capstone workflow starts with?",
      "c",
      "Feature branch from dev with pulled latest changes.",
      ["Push directly to main", "Delete .git", "Branch from updated dev", "Only flashcards"],
      "medium",
    ],
    quizExtra: [
      ["Before capstone commit:", "a", "git status and git diff.", ["push --force", "status and diff", "skip review", "git clean -fd"]],
      ["PR target for Bridge:", "b", "dev branch — not direct main push.", ["main direct push", "PR into dev", "no PR", "email maintainer"]],
      ["After merge locally:", "d", "git switch dev && git pull.", ["never sync", "delete clone", "force push", "switch dev and pull"]],
      ["Capstone proves:", "c", "End-to-end safe collaboration workflow.", ["Exam memorization", "GUI clicking only", "Full Git workflow", "Wi-Fi config"]],
    ],
    bankItems: [
      ["Capstone branch name example:", "b", "feature/git-github-capstone.", ["main", "feature/descriptive", "random", "empty"]],
      ["Self-review includes:", "a", "Explain each diff hunk.", ["Skip diff", "Explain changes", "Hide commits", "Force push"]],
      ["Never on Bridge main:", "c", "Direct push without PR.", ["PR review", "Branch work", "Direct main push", "Pull after merge"]],
      ["Graduation signal:", "b", "Completed PR workflow + labs.", ["Quiz only", "PR + labs done", "Flashcards only", "Reading only"]],
      ["Wrong base branch PR:", "d", "Close and reopen against correct base.", ["Ignore", "Force merge", "Delete GitHub", "Fix base branch"]],
      ["Conflict during capstone:", "a", "status first — resolve or ask help.", ["Delete repo", "status then resolve", "push --force", "quit"]],
      ["secrets in capstone:", "b", "Verify .gitignore before commit.", ["Commit .env", "Check gitignore", "Share keys", "Skip status"]],
      ["Post-capstone habit:", "c", "status before every commit.", ["Never Git again", "Random commands", "status habit", "Avoid branches"]],
    ],
    flashItems: [
      ["Capstone flow?", "branch → commit → push → PR → merge → pull"],
      ["Bridge target branch?", "dev — PR not direct main"],
      ["Before commit?", "status + diff"],
      ["After merge?", "git pull on dev"],
      ["Success?", "Explain workflow without cheat sheet"],
    ],
    externalResources: "GITHUB_FREE_RESOURCE",
    assignment: "git-lab-capstone",
  },
];

export const labs = {
  "git-lab-spot-vc-problem": {
    id: "git-lab-spot-vc-problem",
    title: "Spot the Version-Control Problem",
    type: "external-lab",
    instructions: `Scenario: A team shared a project using only folder copies:

• final-project
• final-project-v2
• final-project-real-final
• final-project-fixed-again

In your notes app or on paper:

### Try It
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
    relatedTopicIds: ["git-why-version-control", "git-vs-github", "git-fear-removal-intro"],
    order: 1,
  },
  "git-lab-local-basics": {
    id: "git-lab-local-basics",
    title: "Local Git Basics",
    type: "external-lab",
    instructions: `Goal: Create hello-bridge locally with two commits and readable history. Git must be installed (see Local Git resource).

### Try It
1. mkdir hello-bridge && cd hello-bridge
2. echo "# Hello Bridge" > README.md
3. git init
4. git add README.md && git commit -m "Initial commit with README"
5. Add a second line to README.md
6. git add README.md && git commit -m "Add project description line"
7. git log --oneline — you should see two commits

### Break It
8. Edit README again but run git commit -m "Skipped add" without git add — read the error.

### Fix It
9. Run git status — note unstaged changes
10. git add README.md && git commit -m "Document lab completion steps"
11. git log --oneline — verify three commits`,
    estimatedMinutes: 30,
    externalResourceId: "local-git",
    completionCriteria: [
      "Created hello-bridge folder with git init",
      "Made at least two meaningful commits",
      "Ran git log --oneline successfully",
      "Completed Break It / Fix It staging recovery",
    ],
    relatedTopicIds: ["git-repos-and-commits", "git-staging-and-status", "git-history-and-diff"],
    order: 1,
  },
  "git-lab-branches": {
    id: "git-lab-branches",
    title: "Branches Lab",
    type: "external-lab",
    instructions: `Goal: Branch, commit, merge to main — local hello-bridge repo.

### Try It
1. cd hello-bridge && git status — confirm on main
2. git switch -c add-notes
3. echo "Lab notes" > notes.txt && git add notes.txt && git commit -m "Add lab notes file"
4. git switch main && git merge add-notes
5. git log --oneline --graph — verify merge

### Break It
6. git switch -c wrong-branch && echo "oops" >> notes.txt && git add . && git commit -m "Commit on wrong branch"

### Fix It
7. git log --oneline -3 — copy commit hash from wrong-branch
8. git switch main && git cherry-pick <hash> (or merge wrong-branch if preferred)
9. git status — confirm notes change on main`,
    estimatedMinutes: 35,
    externalResourceId: "local-git",
    completionCriteria: [
      "Created feature branch and committed",
      "Merged branch to main successfully",
      "Completed Break/Fix wrong-branch recovery",
      "Verified history with git log --graph",
    ],
    relatedTopicIds: ["git-branching-basics", "git-merge-basics", "git-conflicts-intro"],
    order: 1,
  },
  "git-lab-github-remote": {
    id: "git-lab-github-remote",
    title: "GitHub Remote Sync",
    type: "external-lab",
    instructions: `Goal: Connect hello-bridge to GitHub — push, clone, pull. Free GitHub account required.

### Try It
1. Create empty GitHub repo (no README if pushing existing hello-bridge)
2. git remote add origin <URL> && git push -u origin main
3. Clone to second folder: git clone <URL> hello-bridge-clone
4. Edit README on GitHub web — commit
5. In clone: git pull — see remote change

### Break It
6. Make local commit without pulling; attempt git push — read non-fast-forward rejection

### Fix It
7. git pull origin main (merge or rebase per your team habit)
8. git push origin main — succeeds after integration
9. git status — confirm clean and synced`,
    estimatedMinutes: 40,
    externalResourceId: "github-free",
    completionCriteria: [
      "Pushed local repo to GitHub",
      "Cloned repo to second location",
      "Pulled remote changes successfully",
      "Fixed non-fast-forward push rejection",
    ],
    relatedTopicIds: ["git-remotes-explained", "git-clone-push-pull"],
    order: 1,
  },
  "git-lab-pull-request": {
    id: "git-lab-pull-request",
    title: "Pull Request Workflow",
    type: "external-lab",
    instructions: `Goal: Feature branch, two commits, PR with self-review. GitHub account required.

### Try It
1. git switch -c feature/pr-lab && make small doc edit — commit
2. Second commit with another small improvement
3. git push -u origin feature/pr-lab
4. Open PR on GitHub — write summary in description
5. Review diff tab — merge when satisfied

### Break It
6. Create fake .env with DEMO_KEY=test && git add .env — check status shows staged secret

### Fix It
7. git restore --staged .env
8. Add .env to .gitignore && git add .gitignore && commit "Ignore local env files"
9. Verify git status — .env not staged; push branch update`,
    estimatedMinutes: 45,
    externalResourceId: "github-free",
    completionCriteria: [
      "Pushed feature branch with two commits",
      "Opened and merged PR with diff review",
      "Fixed staged .env with restore --staged and gitignore",
      "Pulled updated main/dev locally after merge",
    ],
    relatedTopicIds: ["git-pull-requests", "git-commit-messages", "git-gitignore-secrets"],
    order: 1,
  },
  "git-lab-recovery": {
    id: "git-lab-recovery",
    title: "Recovery Lab",
    type: "external-lab",
    instructions: `Goal: Practice calm recovery — bad add, conflict markers, status-first drill.

### Try It
1. Create conflict: two branches edit same README line — merge and resolve markers
2. git add resolved file && git commit merge
3. Practice git restore --staged on wrongly staged file

### Break It
4. git add . including a temp junk file you did not mean to stage

### Fix It
5. git restore --staged junk-file.txt (keep or delete file as appropriate)
6. Add pattern to .gitignore if needed
7. Run panic checklist: status → log --oneline -5 → diff`,
    estimatedMinutes: 40,
    externalResourceId: "github-free",
    completionCriteria: [
      "Resolved a merge conflict with markers removed",
      "Unstaged bad git add without panic",
      "Completed status → log → diff drill",
    ],
    relatedTopicIds: ["git-undo-safely", "git-merge-conflicts", "git-when-not-to-panic"],
    order: 1,
  },
  "git-lab-capstone": {
    id: "git-lab-capstone",
    title: "Bridge Workflow Capstone",
    type: "external-lab",
    instructions: `Goal: End-to-end Bridge-style PR on a practice or forked repo.

### Try It
1. Fork/clone practice repo; git switch dev && git pull
2. git switch -c feature/git-github-capstone
3. Small docs/content change — git status && git diff before commit
4. git push -u origin feature/git-github-capstone
5. Open PR into dev — review every diff hunk
6. Merge PR; local git switch dev && git pull

### Break It
7. Deliberately skip git pull before push on stale branch — read rejection or behind message

### Fix It
8. git pull origin dev — integrate remote
9. git push — complete capstone; answer self-review questions in notes

Self-review: What changed? Why branch? What files never commit?`,
    estimatedMinutes: 60,
    externalResourceId: "github-free",
    completionCriteria: [
      "Feature branch from dev with meaningful commit",
      "PR opened and diff reviewed before merge",
      "Merged PR and pulled dev locally",
      "Answered capstone self-review questions",
    ],
    relatedTopicIds: ["git-bridge-capstone"],
    order: 1,
  },
};
