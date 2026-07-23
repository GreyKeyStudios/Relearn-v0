# Git & GitHub Learning Architecture — Bridge / ReLearn

**Status:** Approved — **canonical Type B reference track** (see [`TYPE_B_MASTER.md`](TYPE_B_MASTER.md), [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md))  
**Tier:** ReLearn Tier 3 — Applied Technology (Professional Foundations)  
**Track type:** Skills track (Type B) — temporary Certification schema delivery  
**Related:** [`TYPE_B_MASTER.md`](TYPE_B_MASTER.md), [`subject-onboarding-process.md`](subject-onboarding-process.md), [`learning-experience-standard.md`](learning-experience-standard.md), [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) §2b

### Break / Fix hooks per module (TYPE_B_MASTER)

| Module | Lab ID | Break It scenario | Fix It recovery |
|--------|--------|-------------------|-----------------|
| 2 Local Git | `git-lab-local-basics` | `git commit` without `git add` | `git status` → `git add` → commit |
| 3 Branches | `git-lab-branches` | Commit on wrong branch | `git log` → cherry-pick or move commit via branch workflow |
| 4 Remotes | `git-lab-github-remote` | `git push` rejected (non-fast-forward) | `git pull` then push |
| 5 Workflow | `git-lab-pull-request` | Staged `.env` or secret file | `git restore --staged` + `.gitignore` |
| 6 Recovery | `git-lab-recovery` | Bad `git add`, merge conflict markers | `git restore`, resolve markers, `git status` first |
| 7 Capstone | `git-lab-capstone` | End-to-end — errors expected | Status → diff → small fix → PR |

---

## Key architectural decision

```text
Initial implementation MAY use the existing Certification schema as a temporary
delivery path, but Git/GitHub is architecturally a SKILLS TRACK — not a vendor
certification.
```

**Path A now, designed like Path B:**

| Layer | Today (Path A) | Future (Path B) |
|---|---|---|
| Content file | `src/content/certifications/git-github.ts` | `src/content/tracks/git-github/` |
| Registry | `CERTIFICATIONS[]` entry | `LEARNING_TRACKS[]` entry |
| Routes | `/cert/git-github/lesson/...` | `/track/git-github/lesson/...` |
| UI label | “Git & GitHub Foundations” (not “cert prep”) | Same — skills track picker |
| `examSummary` | Reframed as **skills assessment summary** | Removed or replaced with capstone rubric |
| `vendor` | `ReLearn` | `ReLearn` |

Naming, topic IDs, and module keys use the **`git-` prefix** everywhere so migration is a file move + route alias — not a content rewrite.

---

## Implementation gate

```text
Status:   Open for Module 1–2 content + platform shell
Gate:     Architecture doc approved (this document)
Blocked:  Command-runner UI in-app (Phase 2+ for Git track)
Workaround until runner exists: external-lab assignments (“do this in your terminal”)
```

**Non-goals until Path B migration:**

- In-browser terminal emulator with live Git execution
- GitHub OAuth integration for auto-grading PRs
- Advanced Git internals (reflog deep dives, custom hooks, submodules)

---

## P0 — Philosophy

### Why Git/GitHub deserves its own curriculum

Git/GitHub is one of the highest-value **job skill** tracks in Bridge — not because there is a vendor exam, but because it teaches a **workflow** every technical role eventually needs:

```text
change files → track changes → explain changes → collaborate → recover from mistakes
```

That workflow applies to Python scripts, cloud configs, DevOps pipelines, cybersecurity lab writeups, documentation, app development, and Bridge’s own development process. Burying Git under CCNA or generic “tech basics” undersells it. Learners need **confidence with change**, not a single mention inside Infrastructure as Code.

### What Git is not

- Not a CCNA exam topic (CCNA may reference version control; this track owns the skill)
- Not a command memorization drill (learners must **do** the workflow)
- Not “read 30 cards about commits” — hands-on from Module 2 onward

### Learning mode shift

```text
Cert loop (Tier 1):   Learn → Practice → Review → Master (exam recall)
Git loop (skills):    Learn → Do → Commit → Explain → Collaborate → Recover
```

Bridge teaches **confidence**, not just button sequences. A learner who finishes this track should feel Git is a **safety system**, not a trap.

### Success definition

A learner has succeeded in Git & GitHub Foundations when they can:

1. Create a repo, branch, commit, push, and open a PR **without copy-pasting a cheat sheet**
2. Use `git status`, `git log`, and `git diff` as default “home base” commands before anything destructive
3. Write a commit message that explains **why**, not just **what**
4. Complete the **Bridge Capstone** workflow on a real repository (branch → commit → push → PR → review diff → merge → pull)
5. Recover from a common mistake (wrong branch commit, merge conflict, accidental staging) **without panic**

Success is **not** measured by finishing swipe cards alone.

### Relationship to other Bridge tracks

| Prior / parallel track | How Git reinforces it |
|---|---|
| CCNA / Network+ | Version-control network configs, Ansible playbooks, IaC templates |
| Python (Tier 2) | Every script and project lives in a repo; capstone expects Git fluency |
| Linux+ | Terminal comfort; file paths; `.gitignore` patterns |
| Security+ / CySA+ | Never commit secrets; audit trail; change review as security control |
| Bridge itself | Learners contribute content fixes using the same PR workflow as the team |

**Recommended order:** Git can start **in parallel with or before** Python. No Tier 1 cert required — only basic file/folder literacy and willingness to use a terminal.

---

## P1 — Learner profile

### Primary audience

- Career switchers who have never used version control
- Cert studiers who know networking/security concepts but not professional tooling
- Bridge learners about to start Python, cloud labs, or portfolio projects
- Anyone terrified of Git because “one wrong command destroys everything”

### Not for

- Experienced developers who already live in feature-branch + PR workflows daily
- Learners seeking Git internals (pack files, plumbing commands, custom hooks)

### Prerequisites

| Requirement | Required? | Notes |
|---|---|---|
| Tier 1 cert completion | No | Helpful context, not mandatory |
| Terminal basics | Soft | Open terminal, `cd`, `ls`/`dir` — Linux+ Module 1 overlap is enough |
| GitHub account | Module 4+ | Free account; created during remote module if needed |
| Local Git install | Module 2+ | Document install paths for Windows, macOS, Linux |

### Anxiety profile (design input)

Many beginners treat Git as **irreversible destruction waiting to happen**. The curriculum must explicitly teach **Git Fear Removal** (see P3) — not as fluff, but as a core pedagogical thread:

```text
git status  → your home base
git log     → the story of what happened
git diff    → what changed before you commit
branches    → safety copies for experiments
commits     → save points you can return to
Git usually warns you before real danger
```

---

## P2 — Module map

Seven modules. Topic IDs use prefix `git-`. Domains in the temporary cert file mirror these modules.

**Rule:** Every module from Module 2 onward ends with a **hands-on lab assignment** (external-lab until in-app runner exists).

### Module 1 — Why Version Control Exists (`git-m01-why`)

**Prerequisites:** None  
**Estimated minutes:** 45–60  
**Domain ID:** `version-control-foundations`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-why-version-control` | Why Version Control | Explain why teams track changes over time |
| `git-vs-github` | Git vs GitHub | Distinguish local tool from hosted platform |
| `git-fear-removal-intro` | Git Without Fear (intro) | Reframe Git as save points + safety copies |

**Module outcome:** Learner can articulate what problem Git solves and why “just copy the folder” fails at scale.

**Hands-on:** Reflection checkpoint only — “List three things that would break if eight people edited the same folder with no tracking.”

---

### Module 2 — Local Git Basics (`git-m02-local`)

**Prerequisites:** `git-m01-why`  
**Estimated minutes:** 90–120  
**Domain ID:** `local-git`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-repos-and-commits` | Repos and Commits | Init a repo; understand working tree vs repository |
| `git-staging-and-status` | Staging and Status | Use `status`, `add`, understand staged vs unstaged |
| `git-history-and-diff` | History and Diff | Read `log` and `diff`; commits as save points |

**Module outcome:** Learner creates a repo, stages files, commits, and reads history — locally, no GitHub required.

**Lab:** `git-lab-local-basics` — create `hello-bridge/`, add `README.md`, two commits with meaningful messages, show `git log --oneline`.

---

### Module 3 — Branches Without Fear (`git-m03-branches`)

**Prerequisites:** `git-m02-local`  
**Estimated minutes:** 90–120  
**Domain ID:** `branching`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-branching-basics` | Branching Basics | Create, switch, list branches; why `main` stays clean |
| `git-merge-basics` | Merge Basics | Merge a feature branch back into `main` |
| `git-conflicts-intro` | Conflicts (intro) | Recognize conflict markers; know when to pause and read |

**Module outcome:** Learner experiments on a branch, merges to `main`, and understands branches as **safety copies**.

**Lab:** `git-lab-branches` — branch `add-notes`, edit file, merge to `main`, verify history.

**Fear-removal cards:** “A branch is a label, not a duplicate universe”; “You can always `git status` first.”

---

### Module 4 — GitHub Remotes (`git-m04-remotes`)

**Prerequisites:** `git-m03-branches`  
**Estimated minutes:** 90  
**Domain ID:** `github-remotes`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-remotes-explained` | Remotes Explained | Local repo ↔ GitHub remote relationship |
| `git-clone-push-pull` | Clone, Push, Pull | Connect local work to GitHub |

**Module outcome:** Learner clones a repo, pushes commits, pulls updates — local and remote stay in sync.

**Lab:** `git-lab-github-remote` — create GitHub repo, push local `hello-bridge`, clone to second folder, pull after remote change.

---

### Module 5 — Professional Workflow (`git-m05-workflow`)

**Prerequisites:** `git-m04-remotes`  
**Estimated minutes:** 120  
**Domain ID:** `professional-workflow`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-pull-requests` | Pull Requests | Open a PR; review a diff before merge |
| `git-commit-messages` | Commit Messages That Help | Write why-focused messages reviewers understand |
| `git-gitignore-secrets` | .gitignore and Secrets | Never commit `.env`, keys, tokens, local junk |

**Module outcome:** Learner follows team workflow: branch → commit → push → PR → review → merge.

**Lab:** `git-lab-pull-request` — feature branch, two commits, open PR with summary, self-review diff, merge via GitHub UI.

**Bridge tie-in:** Same flow as [`AGENTS.md`](../AGENTS.md) — branch from `dev`, PR into `dev`, never push directly to `main`.

---

### Module 6 — Recovery and Real-World Problems (`git-m06-recovery`)

**Prerequisites:** `git-m05-workflow`  
**Estimated minutes:** 90–120  
**Domain ID:** `recovery`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-undo-safely` | Undo Safely | Unstage, restore file, revert commit (conceptual stack) |
| `git-merge-conflicts` | Merge Conflicts | Resolve a simple conflict with markers |
| `git-when-not-to-panic` | When Not to Panic | Wrong branch, pushed too early, “what do I run first?” |

**Module outcome:** Learner fixes a mistake using **read → status → diff → small fix** — not random hard resets.

**Lab:** `git-lab-recovery` — intentional conflict exercise; undo a bad `git add`; practice “stop and status” drill.

**Fear-removal cards:** “Most mistakes are recoverable”; “Never run a command you don’t understand — status first.”

---

### Module 7 — Bridge Capstone (`git-m07-capstone`)

**Prerequisites:** All modules `git-m01` through `git-m06`  
**Estimated minutes:** 60–90  
**Domain ID:** `capstone`

| Topic ID | Name | Outcome |
|---|---|---|
| `git-bridge-capstone` | Bridge Workflow Capstone | Execute full PR workflow on a real repo |

**Capstone script (money moment):**

```text
git checkout -b feature/git-github-track
# make a small docs or content change
git status
git add .
git commit -m "Add GitHub foundations module outline"
git push -u origin feature/git-github-track
# open PR on GitHub
# review diff line by line
# merge (or request review)
git checkout dev
git pull
```

**Capstone options (pick one for v1):**

| Option | Repo | Grading |
|---|---|---|
| **A — Bridge meta** | Learner’s fork of ReLearn / practice repo | PR link submitted via external-lab checklist |
| **B — Sandbox repo** | Bridge-provided template repo | Learner opens PR against template; rubric in assignment |
| **C — Portfolio** | Learner’s own `learning-notes` repo | README + PR history screenshot |

**Module outcome:** Git becomes “how I safely work on a real project,” not “commands I memorized.”

---

### Prerequisite graph

```text
git-m01-why
  └── git-m02-local ── git-lab-local-basics
        └── git-m03-branches ── git-lab-branches
              └── git-m04-remotes ── git-lab-github-remote
                    └── git-m05-workflow ── git-lab-pull-request
                          └── git-m06-recovery ── git-lab-recovery
                                └── git-m07-capstone
```

---

## P3 — Lesson experience (LES)

### Anchor

**Primary anchor:** Workflow pipeline — not a stack diagram.

```text
[ Working tree ] → [ Staged ] → [ Commit ] → [ Branch ] → [ Remote ] → [ PR ]
```

Highlight moves along the pipeline as the learner progresses. Same rhythm as OSI/TCP-IP LES cards; different anchor.

**Secondary anchor (Modules 2–6):** Terminal prompt mock — `$ git status` output shape so learners recognize real terminal feedback.

| LES field | Git track value |
|---|---|
| Anchor type (future) | `git-workflow` (new — plan in types when Path B lands) |
| Temporary Path A | `media: { kind: "flow", ... }` on teach cards; no new anchor component until Module 2 content ships |
| Headline max | 80 chars |
| Body max | 280 chars |
| One idea per card | Required |

### Card rhythm per topic

```text
hero        → why this idea matters now
teach       → one concept + workflow highlight
misconception → "Git and GitHub are not the same", "commit ≠ push"
flow        → command sequence as diagram (3–5 steps max)
memory      → fear-removal or mnemonic
checkpoint  → quiz question tied to idea
summary     → what you can do now + lab teaser
```

### Git Fear Removal thread

Woven across Modules 1–6 — not one disposable card.

| Module | Fear-removal focus |
|---|---|
| 1 | Git tracks; you cannot “break Git” by reading |
| 2 | `status` is home base; commits are save points |
| 3 | Branches are cheap experiments |
| 4 | Remote does not delete local; push is a conversation |
| 5 | PRs exist so mistakes are caught before merge |
| 6 | Recovery commands exist; pause before force |

Dedicated topic `git-fear-removal-intro` in Module 1 sets tone; each later module includes at least **two** fear-removal cards (`memory` or `misconception` type).

### Content file pattern (Path A)

```text
src/content/lessons/git-why-version-control-experience.ts
src/content/lessons/git-staging-and-status-experience.ts
…
```

Experiences import into `src/content/certifications/git-github.ts` the same way CCNA imports `osi-model-experience.ts`.

---

## P4 — Hands-on labs

Until an in-app command runner exists, labs use the **`external-lab` assignment** pattern with explicit checklists.

### Lab template (every module lab)

Each assignment includes:

1. **Goal** — one sentence
2. **Prerequisites** — Git installed, account created, folder path
3. **Steps** — numbered; copy-paste commands allowed in labs (not in quizzes)
4. **Verify** — “You should see …” expected output
5. **Submit** — checklist toggles in Bridge UI (honor system v1)
6. **If stuck** — run `git status` first; link to fear-removal recap

### Lab catalog

| Assignment ID | Module | Validates |
|---|---|---|
| `git-lab-local-basics` | 2 | init, add, commit, log |
| `git-lab-branches` | 3 | branch, switch, merge |
| `git-lab-github-remote` | 4 | remote, push, pull, clone |
| `git-lab-pull-request` | 5 | PR, diff review, merge |
| `git-lab-recovery` | 6 | conflict, unstage, calm recovery |
| `git-bridge-capstone` | 7 | full Bridge workflow |

### Future: Git command simulator (Path B+)

Reuse choice/order drill runners for **predict-the-output** and **order-the-workflow** exercises:

| Drill type | Example |
|---|---|
| `git-command-order` | Order: status → add → commit |
| `git-output-match` | What does `git status` show after `git add`? |
| `git-spot-the-mistake` | Committed `.env` — what should have been done? |

No live terminal in v1 — external-lab is sufficient for capstone value.

---

## P5 — Assessment model

### No vendor exam

Do **not** tag quiz questions with `CCNA-*` or other vendor objective IDs. Optional internal tags: `GIT-M02`, `GIT-WORKFLOW`, etc.

### Assessment layers

| Layer | Weight | Purpose |
|---|---|---|
| LES checkpoints | Medium | Confirm understanding before lab |
| Module quiz (5 Q) | Medium | Recall + scenario judgment |
| Flashcards | Low | Command ↔ purpose matching |
| **Module lab** | **High** | Proof of doing |
| **Capstone** | **Required pass** | End-to-end workflow |

### Passing thresholds (proposed)

| Activity | Pass |
|---|---|
| Topic quiz | ≥ 80% (same as cert tracks) |
| Lab checklist | All required steps marked complete |
| Capstone | PR link + self-review questions answered |

### `examSummary` reframing (Path A shell)

```typescript
examSummary: {
  questionCount: 0,           // not exam prep
  durationMinutes: 0,
  passingScore: "Capstone PR completed",
  format: "Hands-on labs + workflow capstone",
}
```

UI should render skills-track copy: **“Skills assessment”** not **“Exam simulator.”**

### Weakness and mastery

Reuse existing engine:

| Signal | Storage | Coach behavior |
|---|---|---|
| Quiz miss | `weakTopics`, `topicMastery` | Recommend redo lesson + flashcards |
| Lab incomplete | `completedAssignments` gate | Block capstone until prior labs done |
| Fear-removal checkpoint miss | Tag `git-fear-*` weak concept | Surface “status first” remedial card |

---

## P6 — Capstone (Bridge Workflow)

The capstone is the **money moment** — full script documented in Module 7 above.

### Self-review questions (after PR)

1. What changed in your diff? Can you explain each hunk?
2. Why use a branch instead of committing directly to `dev`/`main`?
3. If your PR had a conflict, what would you run first?
4. What files should never be committed? How does `.gitignore` help?

### Rubric (v1 — honor system)

| Criterion | Pass |
|---|---|
| Feature branch used | Yes |
| ≥ 1 commit with meaningful message | Yes |
| PR opened | Yes |
| Diff reviewed before merge | Self-attested |
| Default branch updated via pull | Yes |

---

## P7 — Migration path (Cert schema → Skills Track)

### Phase 1 — Path A shell (platform agent)

- [ ] Add `git-github.ts` certification file (ReLearn vendor, skills copy)
- [ ] Register in `src/content/registry.ts`
- [ ] Onboarding cert picker: group under **“Skills”** or label “Job skills” (UI copy only)
- [ ] Module 1–2 topics + experiences + labs
- [ ] `verify:curriculum` smoke paths for `/cert/git-github/lesson/...`

### Phase 2 — Content expansion (content agent)

- [ ] Modules 3–7 topics, experiences, labs, quizzes, flashcards
- [ ] Git command drills in simulator registry (optional)
- [ ] Capstone assignment + rubric

### Phase 3 — Path B abstraction (platform agent)

Introduce track type without breaking Path A URLs immediately:

```typescript
// Future shape — illustrative
type LearningTrack = {
  id: "git-github";
  trackType: "skills";
  displayGroup: "Job Skills";
  modules: Module[];
  // no vendor exam fields
};
```

| Step | Action |
|---|---|
| 1 | Add `LearningTrack` type alongside `Certification` |
| 2 | Move content to `src/content/tracks/git-github/` |
| 3 | Add `/track/git-github/*` routes; **301 alias** from `/cert/git-github/*` |
| 4 | Remove from `CERTIFICATIONS[]`; add to `LEARNING_TRACKS[]` |
| 5 | Coach + planner filter: `trackType === "skills"` |

**Migration guarantee:** Topic IDs (`git-*`), assignment IDs (`git-lab-*`), and experience files stay unchanged — only registry and routes move.

---

## Subject onboarding checklist

| # | Question | Git/GitHub answer |
|---|---|---|
| 1 | Why teach this? | Universal job workflow; unlocks Python, DevOps, portfolios, Bridge contributions |
| 2 | Who is it for? | Beginners to Git; cert studiers; anyone before coding tracks |
| 3 | Prerequisites | Basic file/folder + terminal comfort; no Tier 1 cert required |
| 4 | Success measured | Capstone PR workflow; labs complete; status/log/diff habit |
| 5 | Activity types | LES lesson, quiz, flashcard, **external-lab** (v1), drills (v2) |
| 6 | Lab types | External-lab checklists v1; command-order drills v2 |
| 7 | Different from certs | **Do → commit → collaborate → recover** vs exam recall |
| 8 | Engine mapping | Reuse mastery, coach, planner, curriculum; labs = assignments |
| 9 | Tier | **Tier 3** — Applied Technology / Professional Foundations |
| 10 | Gate | This architecture doc approved |
| 11 | Track type | **`skills`** (delivered via cert schema temporarily) |
| 12 | Content location | `src/content/certifications/git-github.ts` → `src/content/tracks/git-github/` |
| 13 | Route prefix | `/cert/git-github/` → `/track/git-github/` |
| 14 | Phase | **Phase 4.9 extension** (content) + small platform shell |
| 15 | Delight moments | First successful PR; “status saved me”; merge conflict survived |

---

## Agent roster (when implementation starts)

| Agent ID | Scope | First deliverable |
|---|---|---|
| M0 | BRIDGE_MASTER tier + phase row | Link this doc |
| P4-Platform | `registry.ts`, onboarding label, verify smoke | Shell + Module 1 route |
| P4-Content-Git | `git-github.ts`, experience files, labs | Module 1–2 full content |
| P4-Verify | build, verify:curriculum, LES warnings | CI green |

**File ownership:** `git-github.ts` and `src/content/lessons/git-*-experience.ts` — Git content agent only.

---

## Sign-off

Before moving from **Planned** to **In progress**:

- [x] Architecture doc written (this document)
- [ ] BRIDGE_MASTER updated (§2b tier + phase row)
- [ ] M0 approves Path A shell sprint
- [ ] Module 1 LES experience authored
- [ ] At least one external-lab assignment tested by a human learner

---

*See also: [`subject-onboarding-process.md`](subject-onboarding-process.md) · [`python-learning-architecture.md`](python-learning-architecture.md) · [`learning-experience-standard.md`](learning-experience-standard.md)*
