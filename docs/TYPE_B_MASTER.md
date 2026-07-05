# Type B Master — Skill-Driven Course Template

**Version:** 1.0  
**Owner:** M0  
**Parent:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md)  
**Reference track:** Git & GitHub Foundations — [`git-github-learning-architecture.md`](git-github-learning-architecture.md)  
**v1 proof (pre-template):** PowerShell Foundations — [`src/content/certifications/powershell.ts`](../src/content/certifications/powershell.ts)

---

## Philosophy

Type B courses teach **job skills** — commands, syntax, workflows — through repetition and **deliberate failure**.

Most tutorials show the happy path only. ReLearn Type B adds:

```text
Break It  →  Fix It
```

Learner runs a command wrong (or hits a realistic error), reads the message, and recovers. That is the skill employers expect.

---

## Canonical lesson loop

```text
Concept
  ↓
Syntax
  ↓
Guided Example
  ↓
Try It          (external-lab: follow steps)
  ↓
Break It        (lab section: intentional mistake)
  ↓
Fix It          (lab section: recover using taught commands)
  ↓
Troubleshooting (commonMistakes + examTraps as workplace traps)
  ↓
Flashcards
  ↓
Quiz
  ↓
Professor Mode  (predict output, debug, fix — see COURSE_ARCHITECTURE §5)
  ↓
Mini Project    (module lab)
  ↓
Capstone        (final module — end-to-end workflow)
```

---

## Required topic artifacts

Reuse CES fields in [`src/content/types.ts`](../src/content/types.ts).

| Field | Type B guidance |
|-------|-----------------|
| `objectives` | Skill outcomes (e.g. `GIT-M02-O1`), not vendor exam IDs |
| `lesson.content` | Procedural: when to use, command sequence, what output means |
| `guidedExample` | Copy-paste command steps with expected result |
| `commonMistakes` | Wrong flag, wrong order, wrong path |
| `examTraps` | **Workplace traps** in prose — keep field name for schema |
| `realWorldScenario` | Ticket or task you'd solve with these commands |
| `quiz` | 5 questions — include at least 1 predict-output or pick-the-fix |
| `questionBank` | 8+ drill items — debug MCQ, command ordering |
| `flashcards` | 5–6 — syntax and recovery steps |
| `assignments` | external-lab until in-app runner exists |
| `lesson.experience` | LES — workflow or terminal anchor |

### LES anchor

Highlight moves along a **workflow pipeline** (Git) or **shell steps** (PowerShell). See [`learning-experience-standard.md`](learning-experience-standard.md) LES-0.

Temporary Path A: `media: { kind: "flow", ... }` on teach cards. Future: dedicated anchor types (`git-workflow`, `powershell-shell`).

---

## Module rules

| Rule | Detail |
|------|--------|
| Module 1 | May be conceptual only (Git Module 1 — why VC, fear removal) |
| Module 2+ | Must end with **external-lab** assignment |
| Every module 2+ lab | Includes **Try It** steps AND **Break It / Fix It** section |
| Final module | Capstone tying full workflow |
| Prerequisites | Chain topic IDs within track |

---

## Break It / Fix It lab pattern

Embed in `assignments[].instructions` after the Try It steps:

```markdown
### Try It
1. …
2. …

### Break It
3. Run `git commit` without `git add` — read the error.

### Fix It
4. Run `git status`, then `git add`, then commit again.
5. Verify with `git log --oneline`.
```

Each module's Break/Fix scenario is documented in [`git-github-learning-architecture.md`](git-github-learning-architecture.md) for the reference track.

---

## First-pass vs graduated track

| Level | Criteria |
|-------|----------|
| **First pass** | Module 1 + 1 lab + architecture doc — catalog-ready, honest overview |
| **Graduated** | All planned modules, Break/Fix per module, owner walkthrough per [`definition-of-done.md`](definition-of-done.md) Type B variant |

| Track | Status |
|-------|--------|
| PowerShell | Graduated **v1** — predates this doc; iterate after Git reference proves template |
| Git | Target **graduated reference** — Modules 2–7 |
| SQL, Bash, Regex, JSON, REST | **Not started** — build only after Git reference sign-off |

---

## Verification

Type B tracks do not use `--strict-ccna`. Required checks:

```bash
npm run build
npm run verify:curriculum
npx tsc --noEmit
```

Optional when LES experiences exist: `npm run verify:curriculum -- --strict-experience`

---

## Spreading the template

After Git reference track is signed off:

1. Copy module structure from Git architecture doc
2. Swap commands and Break/Fix scenarios for subject (SQL, Bash, …)
3. Reuse LES card rhythm — change anchor and syntax cards only
4. One new track at a time — each track may improve TYPE_B_MASTER (retrofit Git if needed)

**Do not** build six skeleton tracks in parallel before the template is proven.
