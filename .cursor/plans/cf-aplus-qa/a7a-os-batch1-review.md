# A7a — Core 2 Operating Systems Batch 1 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A7b / Security / CCNA C1**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** A7a live (3 topics) — domain not first-pass yet  
**Full A+ track:** remains **`planned`**

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-os-types` | Pass | Pass (33 topics) | Pass |
| After `ap-os-install` | Pass | Pass (34 topics) | Pass |
| After `ap-windows-editions` | Pass | Pass (**35** topics) | Pass |

No Core 1 topic IDs changed. No CCNA edits. No Windows tools/CLI/settings. No Security/SW-TS/Ops. No track promotion.

---

## Topics added (A7a)

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-os-types` | AP1202-1.1 | OS families, architecture, FS recognition, selection reasoning |
| `ap-os-install` | AP1202-1.2 | Install/upgrade methods, media, prep, disk safety, VM Lab |
| `ap-windows-editions` | AP1202-1.3 | Windows 11 editions, requirements, identification, use cases |

**Learner sequence:** types → install → editions (edition details not assessed before taught).

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-os-a7a.ts` | **Added** — three OS topics |
| `src/content/certifications/ap/ap-os-remediation.ts` | **Added** — 1.1–1.3 weak-area map |
| `src/lib/quiz-remediation.ts` | Wire `osTopicForObjective` |
| `src/content/certifications/a-plus.ts` | Wire batch into `ap-core2-os`; overview |
| `docs/a-plus-learning-path.md` | A7a live status table |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a7a-os-batch1-review.md` | This report |

---

## Objective coverage (A7a)

| ID | Topic | Assess | Practical | Status |
|----|-------|--------|-----------|--------|
| AP1202-1.1 | `ap-os-types` | Quiz + bank | Compatibility worksheet | Live |
| AP1202-1.2 | `ap-os-install` | Quiz + bank | Install plan + VM Lab option | Live |
| AP1202-1.3 | `ap-windows-editions` | Quiz + bank | Edition inventory worksheet | Live |

**Remaining OS domain (queued):** AP1202-1.4–1.11 via `ap-windows-tools` … `ap-cloud-productivity`.

---

## Explicit deferrals / relocations

| Item | Notes |
|------|--------|
| Full disk management / permissions deep dive | Deferred beyond FS recognition + install partition safety |
| Windows tools, CLI, settings, client networking | A7b+ |
| macOS / Linux operational tools | Later OS topics (`ap-macos-tools`, `ap-linux-client`) |
| Application install (1.10) / cloud productivity (1.11) | Later |
| Core 2 Security / SW TS / Ops | Not started |
| Gold LES | Not required |
| Full-track maturity promotion | Still planned |
| CCNA C1 | Queued / fenced |
| Unofficial Win11 bypasses / activation circumvention | Forbidden (taught as unsupported) |

---

## Learner-walkthrough items (Michael)

1. OS compatibility worksheet — ARM + x64 app; macOS not on random PCs; ChromeOS Flex ≠ Chromebook.
2. Install planning — backup + recovery key before clean install; wrong-disk caution; VM Lab guest path.
3. Editions — Home cannot domain-join; BitLocker available ≠ enabled; RDP client ≠ host; no product keys in notes.
4. Spot-check remediation links from missed 1.1–1.3 items.
5. Confirm Core 1 topics unchanged in cert nav order.

---

## Recommended next OS batch — A7b

```text
Job A7b — Core 2 OS Batch 2
1) ap-windows-tools      (AP1202-1.4)
2) ap-windows-cli        (AP1202-1.5)
3) ap-windows-settings   (AP1202-1.6)
Stop after batch verify — then A7c (networking + macOS/Linux tools) when authorized
```

Rationale: tools → CLI → settings is the natural Windows admin literacy stack after editions.

---

## Stop

A7a complete. Core 2 OS has first three topics live. Full A+ remains **Planned**. No A7b / Security / CCNA C1 / Available promotion started.
