# A5c — Core 1 Troubleshooting Batch 3 + Domain Integration — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before Core 1 integration audit / Core 2**  
**Troubleshooting domain maturity:** **First-pass** (recommended)  
**All five Core 1 content domains:** **First-pass complete**  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-ts-network` | Pass | Pass (30 topics) | Pass |
| After `ap-ts-printer` | Pass | Pass (31 topics) | Pass |
| After domain review + integration | Pass | Pass (**32** topics) | Pass |

No Core 2. No CCNA edits. No full-track promotion.

---

## Topics added (A5c)

| Topic ID | Objective(s) | Focus |
|----------|--------------|--------|
| `ap-ts-network` | AP1201-5.5 | Scope-first isolation; DHCP/DNS/gateway; tools evidence; no public scanning |
| `ap-ts-printer` | AP1201-5.6 | Print-path vs mechanism; queue/driver; fusing/safety; network printer scope |
| `ap-troubleshoot-domain-review` | AP1201-5.1–5.6 | Mixed applied assessment + weak-area routing |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-troubleshoot-a5c.ts` | **Added** — network, printer, domain review |
| `src/content/certifications/ap/ap-troubleshoot-remediation.ts` | Complete 5.1–5.6 map |
| `src/content/certifications/a-plus.ts` | Wire batch 3; overview = all Core 1 first-pass |
| `docs/a-plus-learning-path.md` | A5c live + Core 1 integration next |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a5c-troubleshooting-batch3-review.md` | This report |

---

## Objective coverage (Troubleshooting — complete)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-5.1 | `ap-ts-power-mb-ram-cpu` | Live |
| AP1201-5.2 | `ap-ts-storage-raid` | Live |
| AP1201-5.3 | `ap-ts-display` | Live |
| AP1201-5.4 | `ap-ts-mobile` | Live |
| AP1201-5.5 | `ap-ts-network` | **Live (A5c)** |
| AP1201-5.6 | `ap-ts-printer` | **Live (A5c)** |
| AP1201-5.1–5.6 | `ap-troubleshoot-domain-review` | **Live (A5c)** |

Weak-area map covers every 5.x objective → valid topic ID.

---

## Core 1 first-pass status

| Domain | Marker |
|--------|--------|
| Hardware | First-pass |
| Networking | First-pass |
| Mobile Devices | First-pass |
| Virtualization & Cloud | First-pass |
| Hardware & Network Troubleshooting | **First-pass (recommended)** |

**Full A+ certification track:** still **Planned** — do not promote to Readiness/Available on Core 1 alone.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Core 1 integration audit (cross-domain coherence / readiness gate) | **Next recommended job** |
| Core 2 (OS, Security, SW TS, Ops) | Not started |
| Gold LES conversion | Not required |
| Full-track maturity promotion | Still planned |
| CCNA C1 | Queued / fenced |
| Public scanning / destructive early formats / PSU opening | Forbidden (unchanged) |

---

## Learner-walkthrough items (Michael)

1. Network tickets — APIPA one-host; DNS; LAN-OK/WAN-down; Wi-Fi congestion; VPN app path.
2. Printer incidents — stuck queue vs Ready; unfused toner safety; DHCP offline; repeating marks; single-app garbled.
3. Domain review — misses route to correct `ap-ts-*` topics; safety items (smoke, swollen battery, hot fuser).
4. Confirm ping ≠ app proof; RAID ≠ backup; factory reset still late/authorized.
5. Spot-check remediation from wrong 5.5/5.6 answers.

---

## Domain maturity recommendation

**Hardware & Network Troubleshooting → First-pass** — authorized.

**All five Core 1 content domains → First-pass complete.**

Do **not** auto-promote the full A+ track.

---

## Recommended next job — Core 1 integration & readiness audit

Exact structure (do not start Core 2 in the same job):

```text
Job C1-INT — Core 1 integration audit
1) Inventory all Core 1 topic IDs / objectives 1.x–5.x coverage matrix
2) Prerequisite chain walk (Hardware → … → Troubleshooting review)
3) CF referral resolution spot-check
4) Weak-area routing end-to-end (Hardware/Networking/Mobile/Virt/TS maps)
5) Terminology consistency (APIPA, sync≠backup, RAID≠backup, display chain, TS process)
6) Safety & lab boundaries audit
7) Assess teach-before-test gaps / intentional overlaps documented
8) Produce readiness recommendation:
   - remain Planned, or
   - propose internal-review / learner-qa criteria
9) Explicitly list Core 2 start sequence (only as recommendation)
10) Stop — no Core 2 content authored unless separately authorized
```

Suggested Core 2 opener (recommendation only):  
`ap-os-types` → `ap-os-install` → … per `docs/a-plus-learning-path.md` F4 IDs.

---

## Stop

A5c complete. Troubleshooting first-pass recommended. All Core 1 domains first-pass. Full A+ remains **Planned**. No Core 2 / CCNA C1 / gold LES / Available promotion started.
