# A9a — Windows OS Troubleshooting — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-3.2 and all later Software Troubleshooting objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** First-pass (unchanged)  
**Core 2 SW-TS:** A9a live — **AP1202-3.1 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **57** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-3.1 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-3.1` → `ap-ts-windows-os` (wired in `quiz-remediation.ts`)
- Knowledge DNA: `windows-literacy`
- Lab fictional only — no destructive recovery required, no password/BitLocker/policy bypass
- No 3.2+ SW-TS topics; no Ops; no CCNA / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-ts-windows-os` | AP1202-3.1 | Structured Windows OS diagnosis |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-sw-troubleshoot-a9a.ts` | **Added** — `ap-ts-windows-os` |
| `src/content/certifications/ap/ap-sw-troubleshoot-remediation.ts` | **Added** — AP1202-3.1 map |
| `src/lib/quiz-remediation.ts` | Chain `swTroubleshootTopicForObjective` |
| `src/content/certifications/a-plus.ts` | Wire SW-TS batch 1; overview |
| `docs/a-plus-learning-path.md` | A9a live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a9a-windows-os-troubleshooting-review.md` | This report |

---

## AP1202-3.1 coverage

| Area | Covered |
|------|---------|
| Troubleshooting process (identify→document) | Yes |
| Data-protection before disruptive repair | Yes |
| Boot/startup, performance, stability | Yes |
| Sign-in/profile · updates · storage/FS · drivers | Yes |
| Evidence tools + hierarchy | Yes |
| Boot-stage isolation | Yes |
| BSOD reasoning · slow-system workflow | Yes |
| Profile · Windows Update TS | Yes |
| App vs OS distinction | Yes |
| Malware/security escalation | Yes |
| Recovery options & impact | Yes |
| Verification + documentation | Yes |
| Guided scenarios (8) + TS Desk lab + assessment | Yes |
| Links to OS tools/CLI/install, Security, Hardware TS | Yes |
| Remediation + knowledge DNA | Yes |

---

## Practical activity

`ap-lab-windows-ts-desk` — nine fictional packets (Automatic Repair, BSOD after driver, temporary profile, slow/full disk, PIN failure, missing files/wrong profile, recurring corruption, BitLocker after firmware, ransomware pivot). Learner records scope, layer, data protection, evidence, theory, test, least-disruptive fix, boundaries, escalation, verification, ticket note.

---

## Data-protection and recovery boundaries

- Backup / keys / sync / policy considered before reset, reinstall, destructive disk/boot repair
- Least disruptive first (restart → Safe Mode/clean boot → Startup Repair/Restore/uninstall update → Reset/reinstall)
- System Restore ≠ user-data backup
- Clean boot leftovers must be restored
- No real recovery keys in lab notes

---

## Security and escalation boundaries

- No password/PIN/BitLocker/policy bypass
- Ransomware / disabled security tools / multi-system → escalate Security; don’t erase IR evidence
- Missing BitLocker key → escalate
- Drive not detected in firmware → Hardware TS, not random `bootrec`

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-3.2 mobile OS/app TS | Next — `ap-ts-mobile-os` |
| AP1202-3.3 / 3.4 | Queued |
| SW-TS domain first-pass | Not earned from 3.1 alone |
| Operational Procedures | Deferred |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Automatic Repair after update — data first, least disruptive WinRE path.
2. BSOD after GPU driver — record stop code; roll back in Safe Mode.
3. Temporary profile — backup before delete/recreate.
4. Slow PC + full disk + pending update — evidence before malware assumption.
5. PIN failure on managed laptop — approved recovery; no bypass.
6. “Missing files” — check TEMP/wrong profile.
7. Recurring sfc failures — storage/hardware escalation path.
8. BitLocker after firmware — escrow key; protect key.
9. Ransomware during OS TS — Security escalate.
10. Confirm remediation 3.1 → `ap-ts-windows-os`.

---

## Recommended next topic

```text
ap-ts-mobile-os — AP1202-3.2
Scope: Given a scenario, troubleshoot common mobile OS and application issues.
Boundary: Mobile OS/app troubleshooting — not Windows OS redo; not mobile security TS (3.3) in the same job unless separately scoped.
Do not begin Operational Procedures or Core 2 integration in the same job.
```

---

## Stop

A9a complete. **57** verified A+ topics. SW-TS domain **not** first-pass. Full A+ remains **Planned**. No 3.2+ / Ops / Core 2 integration / CCNA C1 / Available promotion started.
