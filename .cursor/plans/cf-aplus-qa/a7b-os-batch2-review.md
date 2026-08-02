# A7b — Core 2 Operating Systems Batch 2 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A7c / Security / CCNA C1**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** A7a–A7b live (6 topics) — domain not first-pass yet  
**Full A+ track:** remains **`planned`**

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-windows-tools` | Pass | Pass (36 topics) | Pass |
| After `ap-windows-cli` | Pass | Pass (37 topics) | Pass |
| After `ap-windows-settings` | Pass | Pass (**38** topics) | Pass |

No Core 1 / A7a topic IDs changed. No CCNA edits. No macOS/Linux/apps/cloud/Security. No track promotion.

---

## Topics added (A7b)

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-windows-tools` | AP1202-1.4 | Admin tools by question; distinctions; safe-use |
| `ap-windows-cli` | AP1202-1.5 | Commands by purpose; destructive boundaries; Core 1 net reuse |
| `ap-windows-settings` | AP1202-1.6 | Settings/Control Panel outcomes; policy boundaries |

**Sequence:** editions → tools → CLI → settings (referrals, not duplication).

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-os-a7b.ts` | **Added** — tools, CLI, settings |
| `src/content/certifications/ap/ap-os-remediation.ts` | Map AP1202-1.4–1.6 |
| `src/content/certifications/a-plus.ts` | Wire batch 2; overview |
| `docs/a-plus-learning-path.md` | A7b live rows |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a7b-os-batch2-review.md` | This report |

---

## Objective coverage (A7b)

| ID | Topic | Assess | Practical | Status |
|----|-------|--------|-----------|--------|
| AP1202-1.4 | `ap-windows-tools` | Quiz + bank | Read-only tools investigation | Live |
| AP1202-1.5 | `ap-windows-cli` | Quiz + bank | Read-only CLI worksheet | Live |
| AP1202-1.6 | `ap-windows-settings` | Quiz + bank | Settings inventory worksheet | Live |

**OS domain so far:** AP1202-1.1–1.6 live. **Remaining:** 1.7–1.11.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Windows client networking (1.7) | Next in locked path — A7c |
| macOS / Linux client tools (1.8–1.9) | A7c |
| App install (1.10) / cloud productivity (1.11) | A7c or A7d |
| OS domain review | After 1.1–1.11 complete |
| Deep file permissions / recovery courses | Beyond necessary references |
| Core 2 Security / SW TS / Ops | Not started |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Tools — Device Manager vs Disk Management; System Restore ≠ backup; Registry last resort.
2. CLI — whoami before elevation; gpresult for sticky settings; no diskpart/format in lab; robocopy /MIR risk.
3. Settings — default apps / privacy mic / grayed-out policy; never disable firewall/updates/AV for “fixes.”
4. Confirm network commands refer to Core 1 evidence limits.
5. Spot-check remediation for 1.4–1.6.

---

## Recommended A7c sequence (exact)

Do **not** skip Windows client networking — it is next in the locked path before macOS/Linux.

```text
Job A7c — Core 2 OS Batch 3
1) ap-windows-networking   (AP1202-1.7)  — client networking features; refer Core 1 + settings/CLI
2) ap-macos-tools          (AP1202-1.8)
3) ap-linux-client         (AP1202-1.9)
Stop after verify.

Job A7d (follow-on, not this batch)
4) ap-app-install          (AP1202-1.10)
5) ap-cloud-productivity   (AP1202-1.11)
6) ap-os-domain-review     (AP1202-1.1–1.11) — only after 1.1–1.11 live
```

**Boundary note:** Keep apps + cloud + domain review out of A7c so the batch stays three topics and finishes the “other desktop OS tools” arc with networking first.

---

## Stop

A7b complete. Full A+ remains **Planned**. No A7c / Security / CCNA C1 / Available promotion started.
