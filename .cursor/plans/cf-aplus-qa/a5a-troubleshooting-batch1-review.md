# A5a — Core 1 Troubleshooting Batch 1 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A5b**  
**Troubleshooting domain:** in progress (5.1–5.2 only)  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-ts-power-mb-ram-cpu` | Pass | Pass (26 topics) | Pass |
| After `ap-ts-storage-raid` | Pass | Pass (**27** topics) | Pass |

No display/mobile/network/printer TS topics. No Core 2. No CCNA edits.

---

## Topics added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-ts-power-mb-ram-cpu` | AP1201-5.1 | Process-first diagnosis; safety stops; power/POST/RAM/CPU/cooling/upgrade isolation |
| `ap-ts-storage-raid` | AP1201-5.2 | Visibility layers; data protection; RAID ≠ backup; degraded-array caution |

**Pedagogy:** identify → theory → test → plan → implement/escalate → verify → document  
Assessments emphasize **best next check**, safety, and evidence — not symptom→part flashcards.

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-troubleshoot-a5a.ts` | **Added** — A5a topics |
| `src/content/certifications/ap/ap-troubleshoot-remediation.ts` | **Added** — 5.1/5.2 map |
| `src/content/certifications/a-plus.ts` | Wire Troubleshooting domain batch 1 |
| `src/lib/quiz-remediation.ts` | Include `troubleshootTopicForObjective` |
| `docs/a-plus-learning-path.md` | A5a status + A5b/A5c queue |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a5a-troubleshooting-batch1-review.md` | This report |

---

## Objective coverage

| ID | Topic | Status |
|----|-------|--------|
| AP1201-5.1 | `ap-ts-power-mb-ram-cpu` | **Live (A5a)** |
| AP1201-5.2 | `ap-ts-storage-raid` | **Live (A5a)** |
| AP1201-5.3 | `ap-ts-display` | Deferred → A5b |
| AP1201-5.4 | `ap-ts-mobile` | Deferred → A5b |
| AP1201-5.5 | `ap-ts-network` | Deferred → A5c |
| AP1201-5.6 | `ap-ts-printer` | Deferred → A5c |
| AP1201-5.1–5.6 | `ap-troubleshoot-domain-review` | Deferred → A5c |

Prerequisites reuse Hardware domain review + Virt/Cloud domain review; lesson referrals to `ap-power-supplies`, `ap-ram`, `ap-mb-cpu-cards`, `ap-storage`.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Display TS (5.3), Mobile TS (5.4) | **A5b** |
| Network TS (5.5), Printer TS (5.6), domain review | **A5c** |
| Opening PSU enclosures / live electrical internals | Forbidden |
| Early destructive disk format | Forbidden as early step |
| Enterprise SAN administration | Out of A+ depth |
| Gold LES / Core 2 / CCNA C1 | Not started |
| Full Troubleshooting domain first-pass marker | After A5c only |
| Full-track maturity promotion | Still **planned** |

---

## Learner-walkthrough items (Michael)

1. Power decision-tree: no power · RAM upgrade no-POST · load shutdown — confirm safety stop on smell/smoke.
2. Confirm beep codes taught as model-specific.
3. Storage incidents: firmware-visible SSD · clicking HDD · degraded RAID wrong-drive risk · letter/policy case.
4. Confirm quizzes ask for next check / safety / data protection, not only final parts.
5. Weak-area routing: 5.1 → `ap-ts-power-mb-ram-cpu`; 5.2 → `ap-ts-storage-raid`.

---

## Recommended exact A5b structure

```text
ap-ts-display   (AP1201-5.3)
→ ap-ts-mobile  (AP1201-5.4)
```

Then stop for A5b review before A5c:

```text
ap-ts-network   (AP1201-5.5)
→ ap-ts-printer (AP1201-5.6)
→ ap-troubleshoot-domain-review  (5.1–5.6)
```

Do not start A5b until Michael authorizes.

---

## Stop

A5a complete. No A5b/A5c content authored. Full A+ track remains **Planned**. CCNA C1 remains queued and fenced.
