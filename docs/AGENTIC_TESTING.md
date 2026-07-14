# Agentic Testing

Local-first browser testing for ReLearn / Bridge Study Companion. Progress lives in Zustand + `localStorage` (`bridge-study-progress-v2`). **There is no authentication.**

Future persona label (docs only): `demo@greykeystudios.dev`.

## Sign-off pipeline (CCNA)

Use this order before Michael marks Topic Complete:

```text
1. Playwright mechanical walk (every topic)
       ↓
2. Evidence capture + vision judge (optional but preferred)
       ↓
3. npm run audit:chatgpt-export  →  paste reports/ccna-chatgpt-triage.md into ChatGPT
       ↓
4. ChatGPT triage: IMPLEMENT / SKIP / DEFER per finding
       ↓
5. Implement only approved items (feature branch → PR → dev)
       ↓
6. Michael full-course walkthrough + sign-off on wave sheets
```

Agents do **not** auto-fix curriculum from judgments. ChatGPT and Michael decide.

### Commands (full course)

```bash
# 1) Mechanical walk — every CCNA topic → reports/ccna-ux-audit.md
npm run test:e2e:audit

# 2) Evidence + AI judge — every topic with a captured manifest
npm run audit:evidence -- --all
npm run audit:judge -- --all

# Or cheaper pilots only (subnetting, osi-model, switching)
npm run audit:evidence
npm run audit:judge -- --all-pilots

# 3) ChatGPT paste dossier
npm run audit:chatgpt-export
# → reports/ccna-chatgpt-triage.md (gitignored under reports/)
```

`OPENAI_API_KEY` in `.env.local` is required for `audit:judge`. Full-course judge may use ~9 API calls per topic; `--all` raises the default call cap.

## Run Playwright

```bash
npm run test:e2e
npm run test:e2e:ui
```

Config: [`playwright.config.ts`](../playwright.config.ts) — Chromium only, starts `npm run dev` on `http://127.0.0.1:3000`.

Suite coverage:

| Spec | What it exercises |
|------|-------------------|
| `e2e/demo-profiles.spec.ts` | `/dev` console, all 6 profiles (persona assertions + catalog smoke) |
| `e2e/learner-loop.spec.ts` | Deep overdue → review → answer path |
| `e2e/ccna-curriculum-audit.spec.ts` | Walks **every CCNA topic** as a first-time learner (Continue through lesson player), scores soft heuristics, then quiz/flashcards; writes `reports/ccna-ux-audit.md` |
| `e2e/ccna-evidence-pilot.spec.ts` | Captures **8 named checkpoints** (screenshots + text) — pilots by default, or `--all` / `--topic=` |

```bash
npm run test:e2e:audit
```

Open the mechanical report: [`reports/ccna-ux-audit.md`](../reports/ccna-ux-audit.md) (gitignored).

### AI judgment layer (optional — Vision model)

Playwright walks; a vision model grades **evidence bundles**, not every Continue.

```bash
# Capture evidence for 3 pilots (or one topic, or all)
npm run audit:evidence
npm run audit:evidence -- --topic=subnetting
npm run audit:evidence -- --all

# Preview API call plan (no key needed)
npm run audit:judge -- --dry-run --topic=subnetting

# Grade (requires OPENAI_API_KEY)
npm run audit:judge -- --topic=subnetting
npm run audit:judge -- --all-pilots
npm run audit:judge -- --all
```

Artifacts:
- `reports/ccna-evidence/<topicId>/` — screenshots + JSON + `manifest.json`
- `reports/ccna-judgment/<topicId>.json` + `summary.md`
- `reports/ccna-chatgpt-triage.md` — mechanical + judgment packaged for ChatGPT

Env (put these in **`.env.local`** at the repo root — the file is gitignored):
- `OPENAI_API_KEY` — required for judge
- `AUDIT_JUDGE_MODEL` — default `gpt-4.1-mini`
- `AUDIT_JUDGE_MAX_TOKENS` — default `800`
- `AUDIT_JUDGE_MAX_CALLS` — default `30` pilots; auto-raised for `--all`

`audit:judge` loads `.env.local` then `.env` automatically. Do not commit API keys.

Cost: ≤ **9 calls/lesson** (≤8 checkpoints + 1 overall). Pilots ≤ ~27 calls. Full cert ≤ ~189 calls. Skip missing checkpoints.

**What it grades:** clarity, pacing, clutter, pedagogy, incorrect-answer feedback, prerequisites, next action — structured findings you approve/reject. Not autonomous code fixes.

**What it grades (mechanical):**

1. First-time lesson walk (can the learner finish the player?)
2. Soft triage scores 1–5: clarity · clutter · next-step (heuristics — not taste)
3. Quiz explanation + flashcard controls

Use the “Look here first” table to decide where *you* still need to skim. Soft scores are a ranking aid, not a certificate.

## `/dev` console

Available when:

- `NODE_ENV === "development"`, **or**
- `ENABLE_DEV_TOOLS=true` (deployed preview / agent hosts)

Otherwise `/dev` returns 404.

Use the console to:

- Load a named demo profile
- Reset all learner storage
- Inspect the active seed id
- Jump to Dashboard, CCNA, or Review

Query shortcut: `/dev?profile=intermediate` writes the seed and redirects home.

Stable testids: `dev-console`, `dev-active-profile`, `dev-load-{profileId}`, `dev-reset`.

## Demo profiles

| id | Purpose |
|----|---------|
| `new-learner` | Empty progress |
| `intermediate` | Mixed mastery, weak objectives, streak |
| `failed-subnetting` | Low CCNA-1.9 / subnetting scores |
| `overdue-reviews` | Due spaced-review topics |
| `domain-1-complete` | Network Fundamentals complete |
| `exam-ready` | High mastery, exam soon |

Seeds are hand-authored in [`src/lib/demo/demo-profiles.ts`](../src/lib/demo/demo-profiles.ts). They do **not** change mastery formulas or curriculum content.

## Playwright seeding (preferred)

```ts
import { seedProfile } from "./helpers/seed";

await seedProfile(page, "overdue-reviews");
await page.goto("/");
```

`seedProfile` uses `page.addInitScript` to write persist JSON **before** the app hydrates. Do not rely on clicking `/dev` buttons for automated tests.

## AI / browser agent prompts

| Prompt idea | Seed |
|-------------|------|
| Pretend you are a first-time learner | `new-learner` via `/dev?profile=new-learner` |
| Intentionally fail every subnetting question | `failed-subnetting` |
| Use the app ~30 min and critique UX | `intermediate` → explore `/`, `/cert/ccna`, lesson, quiz, review |

Agents should: load a profile → navigate like a learner → note failures → report findings.

## Non-goals (for this foundation)

- Auth / fake login
- Multi-browser matrix / visual regression
- CI nightly AI judge
- Rewriting curriculum during QA setup
- Free-roaming browser agent replacing Playwright walks
- Autonomous code fixes from judgment output
- Grading every lesson screen (use named checkpoints + lesson overall)

## Storage shape

Zustand persist:

```json
{ "state": { /* partialized ProgressState */ }, "version": 3 }
```

Key: `bridge-study-progress-v2`. Active profile marker: `sessionStorage.bridge-demo-profile`.
