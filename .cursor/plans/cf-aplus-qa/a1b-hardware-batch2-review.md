# A1b Hardware batch 2 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before printers (A1c)**  
**Track maturity:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass (**6** topics; CES + objective tags) |
| `npm run verify:curriculum` | Pass |

No unrelated cert bodies or platform refactors touched.

---

## Topics completed (A1b)

| Order | Topic ID | Objective | Practical |
|------:|----------|-----------|-----------|
| 4 | `ap-mb-cpu-cards` | AP1201-3.5 | CPU/board compatibility worksheet (+ CF ESD/MB referrals) |
| 5 | `ap-power-supplies` | AP1201-3.6 | Safe PSU planning worksheet (**no open-PSU** instruction) |
| 6 | `ap-displays` | AP1201-3.1 | Display-chain isolation + Win+P / Settings exercise |

Learner sequence now matches authorization:

> cables → RAM → storage → **MB/CPU → power → displays** → (A1c) printers → Hardware integration

Topic IDs and objective IDs unchanged; `docs/a-plus-learning-path.md` order table updated accordingly.

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-hardware-a1b.ts` | **Added** — three A1b topics |
| `src/content/certifications/a-plus.ts` | Wire batch 2 into Hardware domain |
| `src/content/certifications/ap/ap-core1-hardware.ts` | Comment only |
| `docs/a-plus-learning-path.md` | A1b sequence + status |

---

## Objective coverage (Hardware domain)

| Objective | Topic | Status |
|-----------|-------|--------|
| AP1201-3.1 Displays | `ap-displays` | Live (A1b) |
| AP1201-3.2 Cables | `ap-cables-connectors` | Live (A1) |
| AP1201-3.3 RAM | `ap-ram` | Live (A1) |
| AP1201-3.4 Storage | `ap-storage` | Live (A1) |
| AP1201-3.5 MB/CPU/cards | `ap-mb-cpu-cards` | Live (A1b) |
| AP1201-3.6 Power | `ap-power-supplies` | Live (A1b) |
| AP1201-3.7 Printers setup | `ap-printers-setup` | **A1c** |
| AP1201-3.8 Printer maintenance | `ap-printer-maintenance` | **A1c** |

No silent objective omissions in this batch. Deep silicon/overclocking, laptop board micro-solder, and PSU internal repair remain intentionally out of scope / unsafe.

---

## Gaps / deferrals

| Item | Notes |
|------|--------|
| Printers (3.7 / 3.8) | **A1c** — separate batch |
| Hardware domain assessment + integration | After A1c |
| Gold LES | Not required yet |
| Knowledge DNA | Still not wired for A+ |
| Structured CF `prerequisites` fields | Referrals are in lesson copy + labs; optional future hard links |
| Michael walkthrough | Recommended on all six Hardware topics before any maturity bump |

---

## Walkthrough candidates (Michael)

1. `ap-mb-cpu-cards` — support-list / BIOS gate story  
2. `ap-power-supplies` — safety language (never open PSU)  
3. `ap-displays` — dock vs direct vs lid isolation  

---

## Explicitly not started

Printers · Networking · Mobile · Virt/Cloud · Core 1 TS · CCNA C1 · gold LES · track maturity change

**Next when authorized:** **A1c** — `ap-printers-setup` → `ap-printer-maintenance` → Hardware-domain integration/assessment pass.
