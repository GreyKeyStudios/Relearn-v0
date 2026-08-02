# A5b — Core 1 Troubleshooting Batch 2 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A5c**  
**Troubleshooting domain:** in progress (5.1–5.4 live; **not** first-pass until A5c)  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-ts-display` | Pass | Pass (28 topics) | Pass |
| After `ap-ts-mobile` | Pass | Pass (**29** topics) | Pass |

No network/printer TS or domain review. No Core 2. No CCNA edits.

---

## Topics added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-ts-display` | AP1201-5.3 | Full display chain isolation; internal vs external; backlight; dock/cable; screenshot clue; projector safety |
| `ap-ts-mobile` | AP1201-5.4 | Power/battery safety; BT profile stages; Wi-Fi/cellular/hotspot; sync≠backup; permissions/MDM; late factory reset |

**Pedagogy preserved:** identify → theory → test → plan → implement/escalate → verify → document  
Assessments emphasize **best next check**, safety, and layer reasoning.

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-troubleshoot-a5b.ts` | **Added** — A5b topics |
| `src/content/certifications/ap/ap-troubleshoot-remediation.ts` | Map 5.3 / 5.4 |
| `src/content/certifications/a-plus.ts` | Wire batch 2 |
| `docs/a-plus-learning-path.md` | A5b live status |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a5b-troubleshooting-batch2-review.md` | This report |

---

## Objective coverage (Troubleshooting)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-5.1 | `ap-ts-power-mb-ram-cpu` | Live (A5a) |
| AP1201-5.2 | `ap-ts-storage-raid` | Live (A5a) |
| AP1201-5.3 | `ap-ts-display` | **Live (A5b)** |
| AP1201-5.4 | `ap-ts-mobile` | **Live (A5b)** |
| AP1201-5.5 | `ap-ts-network` | Deferred → A5c |
| AP1201-5.6 | `ap-ts-printer` | Deferred → A5c |
| AP1201-5.1–5.6 | `ap-troubleshoot-domain-review` | Deferred → A5c |

Prerequisites: `ap-ts-storage-raid` + `ap-displays`; `ap-ts-display` + `ap-mobile-domain-review`. Referrals to Mobile hardware/accessories/connectivity without reteaching.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Network TS (5.5), Printer TS (5.6), domain review | **A5c** |
| Troubleshooting domain first-pass marker | After A5c only |
| High-voltage projector/panel internals | Escalate — not lab work |
| Routine factory reset | Late/authorized only |
| Core 2 / CCNA C1 / gold LES | Not started |
| Full-track maturity promotion | Still **planned** |

---

## Learner-walkthrough items (Michael)

1. Display chain worksheet — No Signal, dock limit, 144 Hz flicker, dim backlight, GPU artifacting, projector overscan.
2. Confirm laptop-black/external-OK isolation and screenshot-vs-photo clue.
3. Mobile worksheet — swollen-battery stop; BT call-audio profile; hotspot without data; permission/MDM camera; no factory reset.
4. Confirm quizzes ask for next check / safety / layer, not only final parts.
5. Weak-area routing: 5.3 → `ap-ts-display`; 5.4 → `ap-ts-mobile`.

---

## Recommended exact A5c structure

```text
ap-ts-network                    (AP1201-5.5)
→ ap-ts-printer                  (AP1201-5.6)
→ ap-troubleshoot-domain-review  (AP1201-5.1–5.6 integration)
```

After A5c integration passes verification, Troubleshooting may receive a **first-pass** marker. Full A+ track remains **Planned** until Core 2 (and any Core 1 integration gate Michael requires).

Do not start A5c until Michael authorizes.

---

## Stop

A5b complete. No A5c content authored. Full A+ track remains **Planned**. CCNA C1 remains queued and fenced.
