# A1 Hardware batch 1 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop here** before displays / MB-CPU / power / printers  
**Authorized:** Job A0 + A1 batch (`ap-cables-connectors` → `ap-ram` → `ap-storage`)

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass (3 topics; CES + objective tags) |
| `npm run verify:curriculum` | Pass |

---

## Job A0 delivered

| Artifact | Path |
|----------|------|
| Objective registry (V15) | `src/content/objectives/a-plus.ts` |
| Learning path (IDs locked) | `docs/a-plus-learning-path.md` |
| Provenance live check | `docs/a-plus-objectives-source.md` — V15 still current on CompTIA product page (2026-08-01) |
| Strict A+ verify | `--strict-aplus` now enforces CES + registry-tagged quiz/bank IDs when topics exist |

Numbering follows architecture §2 (cables = **AP1201-3.2**, RAM = **3.3**, storage = **3.4**; displays remain **3.1** for the next batch).

---

## Job A1 topics completed

| Topic | Objective | Lesson form | Practical |
|-------|-----------|-------------|-----------|
| `ap-cables-connectors` | AP1201-3.2 | First-pass prose + full hub CES | `cable-type-drill` + cable-swap lab |
| `ap-ram` | AP1201-3.3 | First-pass prose + full hub CES | RAM inventory lab (Win11) |
| `ap-storage` | AP1201-3.4 | First-pass prose + full hub CES | Disk inventory lab (read-only Disk Management) |

Each topic includes: lightbulb, guidedExample, commonMistakes (5), examTraps (5), realWorldScenario, whenThisFails, teacherReflectionPrompt, keyFacts, quiz (5), bank (8), flashcards (6), objectives, difficulty, estimatedStudyMinutes.

**Teach-before-test:** Assessments stay inside taught scope (connector capability, DDR compatibility/slots, HDD/SSD/NVMe/RAID basics). No gold LES yet (accepted).

---

## Files changed

- `src/content/objectives/a-plus.ts` *(new)*
- `docs/a-plus-learning-path.md` *(new)*
- `docs/a-plus-objectives-source.md`
- `src/content/certifications/a-plus.ts`
- `src/content/certifications/ap/ap-core1-hardware.ts` *(new)*
- `src/content/simulators/registry.ts` (wire `cable-type-drill` → `ap-cables-connectors`)
- `src/lib/verify-objectives.ts`
- `scripts/verify-curriculum.ts`

---

## Remaining gaps (intentional)

| Gap | Notes |
|-----|--------|
| Hardware topics 4–8 | `ap-displays`, `ap-mb-cpu-cards`, `ap-power-supplies`, `ap-printers-setup`, `ap-printer-maintenance` — **queued after this review** |
| Gold LES experiences | Deferred; first-pass prose accepted |
| Track maturity | Still `planned` (honest) until Core 1 is broadly studyable |
| Knowledge DNA nodes | Not yet added for A+ topics |
| Explicit CF `prerequisites` fields | Learning path lists CF referrals; topic prereqs currently chain within A+ only |
| Mobile / Networking / … | Empty domains remain |
| F5 residency | Deferred |
| CCNA C1 | Still queued/fenced |

---

## Proposed next (after Michael OK)

1. **A1b — Hardware batch 2:** `ap-displays` → `ap-mb-cpu-cards` → `ap-power-supplies` (one topic at a time + verify).  
2. Then printers pair (`ap-printers-setup`, `ap-printer-maintenance`).  
3. Hardware domain integration pass before Mobile or Networking.

Do **not** auto-start A1b until review approval.
