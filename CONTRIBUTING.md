# Contributing to ReLearn v0 (Bridge Study Companion)

GitHub is the **shared brain**. Cursor, v0, Codex, and humans coordinate through branches, commits, and pull requests — not direct tool-to-tool chat.

**Repo:** [GreyKeyStudios/Relearn-v0](https://github.com/GreyKeyStudios/Relearn-v0) (private)

---

## Before you edit anything

1. Read [`BRIDGE_MASTER.md`](BRIDGE_MASTER.md) — source of truth for phases, file ownership, and completion criteria.
2. Read [`AGENTS.md`](AGENTS.md) — agent rules and verify commands.
3. Respect **file ownership** in BRIDGE_MASTER §8–9 (content agents do not touch platform code, etc.).

---

## Branch model

```text
main          stable — merge only via PR, CI green
dev           integration — feature branches merge here first
feature/*     one branch per task / tool / agent pass
```

**Never push directly to `main`.**

### Start work

```bash
git fetch origin
git checkout dev
git pull origin dev
git checkout -b feature/your-task-name
```

Examples:

```text
feature/ccna-network-access-content
feature/v0-dashboard-polish
feature/lesson-stepper-ux
feature/codex-pr-review-fixes
```

### Finish work

```bash
npm run build
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npm run verify:production
npm run curriculum:gap-report
npx tsc --noEmit

git add .
git commit -m "Short why-focused message"
git push -u origin feature/your-task-name
```

Open a **pull request → `dev`**. After review and CI, merge to `dev`. When a release slice is ready, open **PR `dev` → `main`**.

---

## Tool roles

| Tool | Best for | Branch prefix | Do not use for |
|------|----------|---------------|----------------|
| **Cursor** | Architecture, implementation, content sprints, agent delegation | `feature/cursor-*` | Unreviewed pushes to `main` |
| **v0** | UI screens, component polish, layout iteration | `feature/v0-*` | Mastery logic, stores, `ccna.ts`, schemas |
| **Codex** | PR review, bug fixes, refactor sanity, test suggestions | `feature/codex-*` or review-only | Full redesigns without a plan |

### v0 prompt template

```text
Read BRIDGE_MASTER.md and AGENTS.md.
Branch: feature/v0-<name>
Scope: UI only — <list components/pages>
Do not change: progress store, mastery logic, curriculum content, types.ts
Match existing Tailwind dark-mode patterns.
```

### Codex review prompt template

```text
Review this PR for serious issues only:
- Broken curriculum / assignment links
- TypeScript errors
- Progress store migration risks
- Study loop regressions (lesson → quiz → sim)
Respect BRIDGE_MASTER file ownership.
```

---

## Verify commands (required before PR)

```bash
npm install
npm run dev          # manual smoke optional
npm run build
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npx tsc --noEmit
```

CI runs the same checks on every PR to `main` and `dev` (see `.github/workflows/verify.yml`).

---

## Git remotes (Windows + WSL)

SSH keys live in **WSL** (`~/.ssh/id_ed25519`). From PowerShell, either:

```powershell
# Option A: push via WSL
wsl bash -c "cd '/mnt/c/Users/titan/OneDrive/Desktop/Projects-WIN/Cert Companion' && git push"

# Option B: one-time — use WSL ssh from Windows git
git config core.sshCommand "wsl ssh"
```

---

## GitHub settings (manual, one-time)

**Settings → Branches → Add rule for `main`:**

- Require pull request before merging
- Require status check: **Verify** (after first CI run)
- Do not allow force pushes

Optionally protect `dev` the same way once the team grows.

---

## Current pilot focus

- **CCNA** is the cert pilot — domain-by-domain exam-ready content, then QA pass.
- See BRIDGE_MASTER for phase gates (Python Phase 7 blocked, AI Phase 5 not started).
