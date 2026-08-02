# A3 — Core 1 Mobile Devices — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before Virt/Cloud**  
**Mobile Devices domain maturity:** **First-pass** (recommended)  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-mobile-hardware` | Pass | Pass (19 topics) | Pass |
| After `ap-mobile-accessories` | Pass | Pass (20 topics) | Pass |
| After `ap-mobile-connectivity` | Pass | Pass (21 topics) | Pass |
| After domain review + integration | Pass | Pass (**22** topics) | Pass |

No CCNA edits. No Virt/Cloud, Domain 5 troubleshooting, or Core 2 content started. No broad platform refactor.

---

## Topics added

| Topic ID | Objective(s) | Focus |
|----------|--------------|--------|
| `ap-mobile-hardware` | AP1201-1.1 | FRUs, display/digitizer/charge layers, battery safety, escalate vs serviceable |
| `ap-mobile-accessories` | AP1201-1.2 | Docks/hubs/stylus/PD/display; fit ≠ capability |
| `ap-mobile-connectivity` | AP1201-1.3 | Radios, BT stages/profiles, hotspot/tether, sync ≠ backup, permissions/MDM |
| `ap-mobile-domain-review` | AP1201-1.1–1.3 | Mixed applied assessment + weak-area routing |

**Path:** hardware → accessories → connectivity → domain review

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-mobile-a3.ts` | **Added** — A3 topics + domain review |
| `src/content/certifications/ap/ap-mobile-remediation.ts` | **Added** — 1.1–1.3 weak-area map |
| `src/content/certifications/a-plus.ts` | Wire Mobile domain; overview update |
| `src/lib/quiz-remediation.ts` | Include `mobileTopicForObjective` |
| `docs/a-plus-learning-path.md` | A3 status + Mobile first-pass note |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a3-mobile-devices-review.md` | This report |

---

## Objective coverage (Mobile — complete)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-1.1 | `ap-mobile-hardware` | **Live** |
| AP1201-1.2 | `ap-mobile-accessories` | **Live** |
| AP1201-1.3 | `ap-mobile-connectivity` | **Live** |
| AP1201-1.1–1.3 | `ap-mobile-domain-review` | **Live** |

Weak-area routing: all three objectives → valid topic IDs. Domain review explanations include remediation hints.

---

## Integration checks

| Check | Result |
|-------|--------|
| Prerequisites follow locked path | Yes (after Hardware domain review) |
| CF referrals resolve | Yes |
| Assessments teach-before-test | Yes |
| Battery / sealed-device safety consistent | Yes |
| BT pairing vs profile consistent | Yes |
| Sync ≠ backup distinguished | Yes |
| Labs: no required disassembly; no secret harvesting | Yes |
| DNA linkage | Not forced — no dedicated mobile DNA node |

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Virtualization & Cloud | Next Core 1 domain when authorized |
| Hardware & Network Troubleshooting | Separate domain |
| Core 2 | Not started |
| Gold LES | Not required |
| Board-level micro-soldering labs | Escalation-only guidance |
| Carrier fraud / payment deep-dives | Out of scope |
| Full-track maturity promotion | Still **planned** |
| CCNA C1 | Queued / fenced |

**Intentional overlap:** Wi-Fi/BT/NFC/hotspot also appear in Networking wireless; Mobile adds device OS sync, tethering tickets, and accessory context without rewriting Networking lessons.

---

## Domain maturity recommendation

**Core 1 Mobile Devices → First-pass** — authorized for documentation.

Do **not** promote the complete A+ certification.

**Completed first-pass domains:** Hardware · Networking · Mobile

---

## Learner-walkthrough items (Michael)

1. Hardware inventory worksheet — FRU vs escalate; swollen battery + lid-flex cases.
2. Accessory tickets — dual-monitor dock, active stylus, hub power budget.
3. Connectivity sheet — BT profile vs pair; hotspot without cellular data; sync vs backup.
4. Domain review — confirm misses route to `ap-mobile-hardware` / `accessories` / `connectivity`.
5. Confirm no lab requires opening sealed devices or recording IMEI/passwords.

---

## Recommended next Core 1 domain

**Virtualization & Cloud (`ap-core1-virt-cloud`)**

Proposed sequence:

```text
ap-cloud-concepts     (AP1201-4.1)
→ ap-virtualization   (AP1201-4.2)
→ ap-virt-cloud-domain-review   (4.1–4.2 integration; if following prior pattern)
```

Then: **Hardware & Network Troubleshooting** (Domain 5).

Do not start until Michael authorizes.

---

## Stop

A3 complete. Mobile Devices documented as **first-pass**. Full A+ track remains **Planned**. No Virt/Cloud, Domain 5, Core 2, CCNA C1, or gold LES work started.
