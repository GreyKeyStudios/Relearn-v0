# A8b — Windows Security Settings — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.3 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8b live — **AP1202-2.1–2.2 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **46** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.2 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.2` → `ap-windows-security`
- Knowledge DNA: `hardening-basics`
- AP1202-2.1 referenced as prerequisite (not fully re-taught)
- No 2.3+ Security topics implemented
- Labs do not require weakening security controls
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-windows-security` | AP1202-2.2 | Windows security settings/controls — evidence-first configuration |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8b.ts` | **Added** — `ap-windows-security` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.2 |
| `src/content/certifications/a-plus.ts` | Wire batch 2; overview |
| `docs/a-plus-learning-path.md` | A8b live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8b-windows-security-review.md` | This report |

---

## AP1202-2.2 coverage

| Area | Covered |
|------|---------|
| Windows security architecture + 2.1 connections | Yes |
| Windows Security app areas | Yes |
| Microsoft Defender (scans, quarantine, exclusions, tamper/cloud recognition) | Yes |
| Exclusion authorization boundaries | Yes |
| Windows Firewall profiles / inbound-outbound / narrow exceptions | Yes |
| UAC + least privilege | Yes |
| Accounts / sign-in / Hello / MFA / Credential Manager | Yes |
| BitLocker / device encryption + recovery-key safety | Yes |
| Secure Boot / TPM / core isolation–memory integrity recognition | Yes |
| SmartScreen / reputation / app-browser protection | Yes |
| Windows Update as security control | Yes |
| NTFS/share permissions, ownership, inheritance (2.2 boundary) | Yes |
| Recovery / Controlled folder access concepts | Yes |
| GPO/MDM/policy boundaries | Yes |
| Guided scenarios (block, firewall, BitLocker, quarantine, managed, UAC) | Yes |
| Practical posture review | Yes |
| Assessment (selection/evidence/escalation — not menu trivia) | Yes |

---

## Practical activity

`ap-lab-windows-security-posture` — fictional WS-OPS-07 evidence pack (Windows Security summary, Defender/quarantine, firewall profiles, updates, admin daily account, UAC, BitLocker escrow unknown, Secure Boot/TPM/memory integrity, SmartScreen, Intune compliance, restore/backup/CFA). Learner marks status + risk + safe next action + verification + escalation. Includes short notes for SmartScreen, firewall-disable, and BitLocker-recovery scenarios. **No weaken-controls recommendations.**

---

## Safety and authorization boundaries

Explicitly taught / enforced in lab:

- Do not disable Defender, firewall, UAC, BitLocker, SmartScreen, or updates as a default fix
- No broad casual exclusions; no key exposure in tickets
- No SmartScreen auto-bypass; no policy bypass
- No casual take-ownership; admin capability ≠ authorization
- Grayed settings often mean policy working as designed

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.3 wireless security protocols/auth | Next — `ap-wireless-security` |
| AP1202-2.4–2.11 | Queued |
| Full malware removal procedures | Later topics |
| Deep ACL / identity platform courses | Boundary intro only |
| Security domain first-pass marker | Not earned from 2.1–2.2 alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Public vs Private firewall failure — profile before disable.
2. SmartScreen unsigned download — investigate, don’t click through.
3. BitLocker recovery — ownership + escrow; never paste keys in chat.
4. Quarantine — preserve evidence; don’t auto-restore.
5. Grayed real-time protection — MDM/GPO, escalate exception.
6. Unexpected UAC on `invoice.pdf.exe` — do not elevate.
7. Posture worksheet: no control-weakening answers.
8. Confirm remediation 2.2 → `ap-windows-security`.

---

## Recommended next topic

```text
ap-wireless-security — AP1202-2.3
Scope: Compare and contrast wireless security protocols and authentication methods.
Stay inside wireless security/auth comparison.
Do not implement malware (2.4+), social engineering (2.5), or hardening (2.7) in the same job.
```

---

## Stop

A8b complete. **46** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.3+ / SW-TS / Ops / CCNA C1 / Available promotion started.
