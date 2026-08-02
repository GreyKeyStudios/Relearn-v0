# A7c — Core 2 Operating Systems Batch 3 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A7d / Security / CCNA C1**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** A7a–A7c live (9 topics) — domain not first-pass until 1.10–1.11 + review  
**Full A+ track:** remains **`planned`**

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-windows-networking` | Pass | Pass (39 topics) | Pass |
| After `ap-macos-tools` | Pass | Pass (40 topics) | Pass |
| After `ap-linux-client` | Pass | Pass (**41** topics) | Pass |

No Core 1 / A7a–A7b IDs changed. No apps/cloud/OS review. No Security/SW-TS/Ops. No CCNA. No track promotion.

---

## Topics added (A7c)

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-windows-networking` | AP1202-1.7 | Windows client networking; profiles; sharing; ladder; Core 1 reuse |
| `ap-macos-tools` | AP1202-1.8 | Native macOS tools; Gatekeeper/FileVault/MDM boundaries |
| `ap-linux-client` | AP1202-1.9 | Safe shell evidence; distro differences; VM Lab practice |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-os-a7c.ts` | **Added** — networking, macOS, Linux |
| `src/content/certifications/ap/ap-os-remediation.ts` | Map AP1202-1.7–1.9 |
| `src/content/certifications/a-plus.ts` | Wire batch 3; overview |
| `docs/a-plus-learning-path.md` | A7c live rows |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a7c-os-batch3-review.md` | This report |

---

## Objective coverage (A7c)

| ID | Topic | Assess | Practical | Status |
|----|-------|--------|-----------|--------|
| AP1202-1.7 | `ap-windows-networking` | Quiz + bank | Client network inventory | Live |
| AP1202-1.8 | `ap-macos-tools` | Quiz + bank | Tool-selection worksheet (no Mac required) | Live |
| AP1202-1.9 | `ap-linux-client` | Quiz + bank | VM Lab safe commands / fictional worksheet | Live |

**OS domain so far:** AP1202-1.1–1.9 live. **Remaining:** 1.10, 1.11, domain review.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| App install / configuration (1.10) | A7d |
| Cloud productivity (1.11) | A7d |
| OS domain review | A7d after 1.10–1.11 |
| Full NTFS/share ACL deep dive | Security domain later; intro only here |
| Activation Lock / FileVault / MDM / Gatekeeper bypass | Forbidden |
| `chmod 777` as routine fix | Forbidden |
| Core 2 Security / SW TS / Ops | Not started |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Windows — Public vs Private; APIPA; UNC vs DNS; RDP client≠host; no Private-on-café.
2. macOS — Force Quit/Activity Monitor; privacy mic; Gatekeeper; no Activation Lock bypass; Migration vs Time Machine.
3. Linux — whoami/pwd first; apt≠universal; reject chmod 777; VM Lab snapshot + safe commands.
4. Confirm Core 1 network referrals resolve from Windows networking topic.
5. Spot-check remediation for 1.7–1.9.

---

## Recommended A7d sequence (exact)

```text
Job A7d — Core 2 OS Batch 4 + domain integration
1) ap-app-install              (AP1202-1.10)
2) ap-cloud-productivity       (AP1202-1.11)
3) ap-os-domain-review         (AP1202-1.1–1.11)  — create if absent; weak-area map complete 1.1–1.11
Stop after verify + OS domain first-pass recommendation.
Do not start Security in the same job unless separately authorized.
```

After A7d passes, Operating Systems may receive a **first-pass** domain marker; full A+ track still stays **Planned** until Security, Software Troubleshooting, and Operational Procedures are also first-pass.

---

## Stop

A7c complete. Full A+ remains **Planned**. No A7d / Security / CCNA C1 / Available promotion started.
