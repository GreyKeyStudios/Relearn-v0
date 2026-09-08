# PowerShell Course Readiness Audit

**Date:** 2026-09-08  
**Track:** PowerShell Foundations (`powershell`)  
**Repo:** `Relearn-v0` (branch audited: `dev` @ `dd9d600` + local verification)  
**Auditor:** Cursor agent (learner-path QA + technical verification)

---

## Executive Verdict

**READY WITH MINOR ISSUES**

Michael can start the ReLearn PowerShell Foundations track **today** as a beginner and follow it through useful **local Windows admin automation** (pipelines, CSV reports, small scripts, capstone health-check pattern).

This is **not** a gold-standard Type B graduation against `definition-of-done.md` (missing Try It / Break It / Fix It lab sections; no in-app PowerShell drill). Cloud / Graph / remoting are out of stated scope. Labs require a real Windows PowerShell host and are self-attested checklists.

---

## Course Inventory

| Asset | Count | Notes |
|-------|------:|-------|
| Modules (domains) | 5 | Shell Basics → Files & Objects → Pipeline Reports → Output & Admin → Scripting & Capstone |
| Topics / lessons | 15 | All with LES experiences (`ps-*-experience.ts`) |
| Quiz questions | 75 | 5 per topic |
| Question bank | 120 | 8 per topic |
| Flashcards | ~78 | 5–6 per topic |
| External labs | 6 | `external-lab` on Windows PC |
| In-app simulators / drills | 0 | Instructional `PowerShellShellDiagram` only |
| Capstone | 1 | `ps-lab-capstone-admin` → `Admin-HealthCheck.ps1` |
| Curriculum progress steps | 21 | 15 lessons + 6 labs (`countCurriculumSteps`) |

### Modules & topics

1. **Module 1 — Shell Basics**  
   `ps-why-the-shell` → `ps-cmdlets-pipeline` → `ps-first-commands-safely` (+ `ps-lab-first-commands`)
2. **Module 2 — Files & Objects**  
   `ps-paths-and-navigation` → `ps-objects-and-properties` → `ps-aliases-vs-cmdlets` (+ `ps-lab-files-navigation`)
3. **Module 3 — Pipeline Reports**  
   `ps-filtering-with-where` → `ps-shaping-with-select` → `ps-sorting-and-measure` (+ `ps-lab-pipeline-report`)
4. **Module 4 — Output & Admin Tasks**  
   `ps-formatting-and-export` → `ps-services-and-processes` (+ `ps-lab-services-export`) → `ps-variables-and-quoting`
5. **Module 5 — Scripting & Capstone**  
   `ps-if-and-loops` (+ `ps-lab-first-script`) → `ps-functions-and-parameters` → `ps-errors-and-capstone` (+ `ps-lab-capstone-admin`)

### Assessment mechanisms

- Per-topic quiz + bank + flashcards with explanations
- Domain review banks (e.g. Module 1 “Review this module (24 questions)”)
- External-lab completion checklists (honor system)
- Topic mastery / weak-topic updates via quiz attempts (generic progress store)
- **No** objective-level coaching for PowerShell (`OBJECTIVE_COACHING_CERT_IDS` = CCNA / A+ only)

---

## Learner Journey

Traced as a learner on 2026-09-08:

1. **Discover:** `/certifications` → Available now → **PowerShell — Skill track** (live).
2. **Hub:** `/cert/powershell` — overview clear (“Job skill curriculum”, not vendor exam); “Start this session” / today’s focus → Why the Shell; five modules listed.
3. **Lesson:** `/cert/powershell/lesson/ps-why-the-shell` — LES storyboard + PowerShell workflow diagram loads; Continue advances screens.
4. **Quiz:** `/cert/powershell/quiz/ps-why-the-shell` — wrong answer shows **Explanation** with remediation text.
5. **Lab:** `/cert/powershell/assignment/ps-lab-first-commands` — external Windows lab + checklist; Mark complete enables when criteria checked (verified via DOM click; a11y tree falsely reports `readonly` for controlled inputs).
6. **Linear path:** `getNextTopicInPath` walks all 15 topics without orphans:
   `ps-why-the-shell → … → ps-errors-and-capstone`
7. **Capstone:** `/cert/powershell/assignment/ps-lab-capstone-admin` — build `Admin-HealthCheck.ps1` with function/param, CSVs, transcript, try/catch or `-ErrorAction`.
8. **Done (product):** 21/21 curriculum steps (lessons + labs). Quizzes recommended but not required for progress %.

Prerequisites: Windows PC (or PowerShell-capable host). Beginner-friendly; no prior PowerShell required. Remoting / Azure / Graph explicitly deferred as “outside this track.”

---

## Curriculum Coverage

Stated scope: Type B **Foundations** skill track for help desk / junior admin — not cloud admin certification.

| Area | Coverage | Quality | Practice | Assessment | Status |
|------|----------|---------|----------|------------|--------|
| Foundations (why shell, Get-Help, Verb-Noun, safety) | Solid | Strong prose + LES | Lab M1 | Quiz/bank/flash | OK |
| Object model (properties, Get-Member, `$_`) | Solid | Explicit Get-Member habits | Lab M2 | Quiz/bank | OK |
| Files / system (paths, providers, Get-ChildItem) | Solid | Practical | Lab M2 | Quiz/bank | OK |
| Language (variables, if/loops, functions, params) | Solid | Capstone-ready | Labs M5 | Quiz/bank | OK |
| Pipeline / automation (Where/Select/Sort/Measure/Export) | Solid | Report habit emphasized | Lab M3 | Quiz/bank | OK |
| Robust scripting (errors, -WhatIf, transcript) | Partial→Solid | try/catch taught; signing/remoting out of scope | Capstone | Quiz + lab | OK for foundations |
| Administration (services/processes) | Solid (local) | Safety warnings present | Lab M4 | Quiz/bank | OK |
| Real-world automation (CSV tickets, health check) | Solid (local PC) | Capstone integrates track | Capstone | Criteria checklist | OK |
| Cloud / Modern MS (Azure, Graph, Entra, remoting) | None | By design | — | Distractors only | Out of scope |

---

## Functional QA

| Path / workflow | Result |
|-----------------|--------|
| `/certifications` shows PowerShell as live Skill track | Pass |
| `/cert/powershell` hub + Study Now / Start session | Pass |
| Lesson LES for first topic | Pass |
| Quiz feedback / explanation on wrong answer | Pass |
| Assignment checklist interaction | Pass (DOM); complete button gated correctly |
| Capstone assignment page | Pass |
| Capstone lesson page | Pass |
| Next-topic chain (15 topics) | Pass |
| Lab ID resolution (`verify:curriculum` smoke) | Pass |
| In-app PowerShell command runner | N/A (none by design) |
| Catalog card click in automation | Flaky (nav overlay); direct URL works |

No dead topic IDs or missing experience imports found for the 15 topics.

---

## Content QA

| Check | Finding |
|-------|---------|
| Placeholder / TODO lessons | None found as stubs |
| Suspiciously short lessons | No — ~400+ words prose per topic |
| Experiences present | 15/15 |
| Dangerous commands | Taught with `-WhatIf` / `-Confirm`; labs mostly Get-*/Export; services lab forbids stopping critical services |
| Obsolete syntax without note | No major issue flagged |
| Answers embedded in lesson prose | Not observed as accidental leaks |
| Quiz vs objectives | Quizzes align with topic themes; no `objectiveId` wiring |
| Type B Break/Fix sections | **Missing** vs DoD B1 / Git reference pattern |
| Capstone try/catch example quality | Functional but somewhat soft vs “risky path” lesson guidance — non-blocking |

Safe PowerShell snippet spot-check on host (PS 7.6.5): `Get-Help`, `Get-Process`, `Get-Member`, `Where-Object`/`Select-Object`, `Export-Csv`, try/catch — core patterns run. (Automation quoting noise on one string literal; not a curriculum defect.)

---

## Mastery & Progress Integration

| Capability | PowerShell status |
|------------|-------------------|
| Progress % (lessons + labs) | Wired — 21 steps |
| Topic mastery / weak topics from quizzes | Wired (generic store) |
| Review / coach recommendations | Works at topic weakness + curriculum next-step level |
| Objective-level coaching | **Not** for PowerShell |
| Knowledge DNA / perspectives | No PowerShell connective tissue entries |
| Career path Ethical Hacking includes PS | Referenced, but career path still `planned` |

---

## Technical Verification

Commands run (2026-09-08):

| Command | Result |
|---------|--------|
| `npm run build` | **Pass** (exit 0) — Next.js 16.2.9; 1274 static pages |
| `npm run verify:curriculum` | **Pass** (exit 0) — includes PS smoke paths |
| `npx tsc --noEmit` | **Pass** (exit 0) |
| `npx eslint` on `powershell.ts`, `ps-*.ts`, `PowerShellShellDiagram.tsx` | **Pass** (exit 0) |
| Programmatic inventory / next-topic chain | **Pass** — 5 domains, 15 topics, 6 labs, 21 steps |
| Dev server learner path (browser) | **Pass** for hub → lesson → quiz → labs |

CI (`.github/workflows/verify.yml`): `build` + `verify:curriculum -- --strict-ccna --strict-ccna-objectives` + `tsc` on `main`/`dev`. No PowerShell-specific e2e. Preview Pages workflow exists for static export.

---

## Blocking Issues

**None that prevent starting or finishing the Foundations track on a Windows PC.**

Environment prerequisite (not a content bug):

- Hands-on labs and the intended mastery story **require** local PowerShell / Windows Terminal. There is no in-browser shell.

---

## Non-Blocking Improvements

1. Add **Try It / Break It / Fix It** sections to Module 2+ labs to meet Type B DoD B1 (match Git pattern).
2. Optional in-app safe command drill / simulator later (not required to start).
3. Wire `objectiveId` on quiz items + objective coaching if PS should match CCNA remediation depth.
4. Add PowerShell paths to e2e / `--strict-experience` CI gate.
5. Soften catalog click target / bottom-nav overlap for mobile automation (minor UX).
6. Follow-on track for remoting / Microsoft Graph / Azure PowerShell when Foundations graduates.
7. Strengthen capstone try/catch example to wrap a realistically failing path.

---

## Recommended Fix Order

1. **No immediate rewrite** — start learning.
2. (Optional product debt) Break/Fix lab sections on existing 6 labs — smallest Type B DoD alignment.
3. (Optional) Experience-strict CI + one PS e2e smoke.
4. (Later, needs approval) Cloud/remoting extension track — do **not** inflate Foundations scope.

---

## Final Recommendation

**Should Michael start this course now?**

**YES, WITH THESE CAVEATS**

- Use a Windows machine and actually run the external labs (do not skip to quizzes only).
- Expect Foundations → local automation competence, not Azure/Graph admin.
- Treat lab checklists as honor-system practice evidence.
- Do not treat the track as “gold-standard / production-perfect Type B” until Break/Fix and fuller learner QA land — but it is **studyable and coherent today**.

---

## Fixes applied during this audit

None. No mechanical broken routes, missing IDs, or safe one-line defects required a content rewrite. Issues above are documented for approval rather than auto-redesigned.
