# A1c — Printers + Hardware-domain integration — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before next Core 1 domain**  
**Full A+ track maturity:** remains **`planned`**  
**Hardware domain maturity (documented):** **first-pass**

---

## Verification

| Gate | Result |
|------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass (**9** topics) |
| `npm run verify:curriculum` | Pass |

---

## Topics added (A1c)

| Topic ID | Objective(s) | Notes |
|----------|--------------|-------|
| `ap-printers-setup` | AP1201-3.7 | Types, **laser 7 stages with purpose**, inkjet/thermal/impact, MFD, connectivity, drivers/queues |
| `ap-printer-maintenance` | AP1201-3.8 | Consumables, safety, layered symptom reasoning, ticket isolation lab |
| `ap-hardware-domain-review` | AP1201-3.1–3.8 | Mixed domain assessment + weak-area routing map |

### Complete Hardware path (9 topics)

```text
ap-cables-connectors → ap-ram → ap-storage
→ ap-mb-cpu-cards → ap-power-supplies → ap-displays
→ ap-printers-setup → ap-printer-maintenance
→ ap-hardware-domain-review
```

---

## Integration outcomes

| Check | Status |
|-------|--------|
| Prerequisites follow locked path | Yes (displays → printers-setup → maintenance → review) |
| Transitions | Displays “what's next” → printers; review summarizes full path |
| CF referrals | Present in printer + prior topics |
| Objectives 3.1–3.8 covered | Yes |
| Teach-before-test on printers | Laser stages taught with purpose before quiz |
| Terminology / safety consistency | PSU sealed + hot fuser / no interlock bypass |
| Weak-area routing | `ap-hardware-remediation.ts` + quiz results link to review topic; A+ objective coaching enabled |
| Track not auto-promoted | `a-plus` stays `planned` |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-hardware-a1c.ts` | **Added** — printers + domain review |
| `src/content/certifications/ap/ap-hardware-remediation.ts` | **Added** — objective → topic map |
| `src/content/certifications/a-plus.ts` | Wire A1c topics |
| `src/content/certifications/ap/ap-core1-hardware-a1b.ts` | Displays → printers transition |
| `docs/a-plus-learning-path.md` | A1c status + Hardware first-pass note |
| `src/lib/objective-support.ts` | Enable `a-plus` objective coaching |
| `src/lib/content-selectors.ts` | A+ objective labels/text |
| `src/lib/quiz-remediation.ts` | `reviewTopicId` for Hardware map |
| `src/components/quiz/QuizResults.tsx` | Weak-area topic link in results |

---

## Hardware objective coverage

| ID | Topic | Status |
|----|-------|--------|
| AP1201-3.1 | `ap-displays` | Live |
| AP1201-3.2 | `ap-cables-connectors` | Live |
| AP1201-3.3 | `ap-ram` | Live |
| AP1201-3.4 | `ap-storage` | Live |
| AP1201-3.5 | `ap-mb-cpu-cards` | Live |
| AP1201-3.6 | `ap-power-supplies` | Live |
| AP1201-3.7 | `ap-printers-setup` | Live |
| AP1201-3.8 | `ap-printer-maintenance` | Live |

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Gold LES for Hardware topics | Deferred |
| Knowledge DNA nodes for A+ | Not yet |
| Full track `first-pass` / Available | Blocked until other Core 1 (+ later Core 2) domains |
| Deep vendor-specific MFD programming | Out of first-pass scope |
| Physical printer required | Not required — scenario labs |
| Core 1 Networking / Mobile / Virt / TS | **Not started** |

---

## Michael walkthrough candidates

1. Laser stage purposes (not name-only) — `ap-printers-setup`  
2. Layer isolation ticket lab — `ap-printer-maintenance`  
3. Domain review quiz + weak-area link to a mapped topic — `ap-hardware-domain-review`  
4. Safety language (PSU / fuser) across power + printers  

---

## Recommendations

| Question | Recommendation |
|----------|----------------|
| Mark Hardware domain first-pass? | **Yes** (documented in learning path). Content for 3.1–3.8 + review is studyable at first-pass CES. |
| Promote full A+ track? | **No** — keep **`planned`**. |
| Next Core 1 domain? | **Networking** (`ap-core1-networking`) as A2 — after Michael accepts this report. |
| CCNA C1? | Remains queued/fenced. |

**Stop.** Awaiting authorization for Core 1 Networking.
