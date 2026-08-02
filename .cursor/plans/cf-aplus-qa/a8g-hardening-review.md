# A8g — Workstation Hardening — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.8 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8g live — **AP1202-2.1–2.7 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **51** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.7 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.7` → `ap-hardening`
- Knowledge DNA: `hardening-basics`
- Labs do not require disabling security controls
- No 2.8+ Security topics implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-hardening` | AP1202-2.7 | Attack-surface reduction with preserved business function |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8g.ts` | **Added** — `ap-hardening` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.7 |
| `src/content/certifications/a-plus.ts` | Wire batch 7; overview |
| `docs/a-plus-learning-path.md` | A8g live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8g-hardening-review.md` | This report |

---

## AP1202-2.7 coverage

| Area | Covered |
|------|---------|
| Hardening lifecycle / baseline | Yes |
| Patch management | Yes |
| Account hardening / least privilege | Yes |
| App/service/startup reduction (evidence-first) | Yes |
| Workstation network hardening | Yes |
| Data protection distinctions | Yes |
| Browser/email + endpoint protection | Yes |
| Physical + firmware (Secure Boot/TPM) | Yes |
| Removable media + travel/portable | Yes |
| Logging / configuration drift | Yes |
| Hardening vs troubleshooting friction | Yes |
| Guided scenarios + baseline lab | Yes |

---

## Practical activity

`ap-lab-workstation-hardening-baseline` — fictional WS-CLINIC-12 profile (shared admin, former accounts, Public firewall Off, RDP on, leftover Defender exclusion, BitLocker escrow unknown, unrestricted USB, open desk). Learner records function, risk, action, approval, impact, verify, rollback, escalation, note for each finding.

---

## Authorization, rollback, and business-impact boundaries

- Record original state; plan rollback before service/app changes
- Narrowest authorized exception — not permanent admin or disabled updates
- Policy/MDM grayed settings → escalate, don’t bypass
- Verify both business function and that protections remain
- No firmware bypass; protect recovery keys

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.8 mobile/embedded security | Next — `ap-mobile-security` |
| AP1202-2.9–2.11 | Queued |
| Full mobile domain duplication | Avoided — portable notes only |
| Advanced compliance / SIEM / firewall engineering | Out of scope |
| Security domain first-pass | Not earned from 2.1–2.7 alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Shared local admin → individual + standard user + controlled elevation.
2. Leftover Defender exclusion → remove/narrow + scan + document.
3. Unnecessary RDP → disable or restrict + strong auth + logging.
4. Public firewall Off → enable/verify.
5. Travel laptop checklist (encrypt/MFA/VPN/lock/physical).
6. Friction from least privilege ≠ automatic misconfiguration.
7. Baseline lab: no weaken-control recommendations.
8. Confirm remediation 2.7 → `ap-hardening`.

---

## Recommended next topic

```text
ap-mobile-security — AP1202-2.8
Scope: Explain common methods for securing mobile and embedded devices.
Boundary: Mobile/embedded security methods — not full Core 1 Mobile Devices redo.
Do not implement data destruction (2.9), SOHO network security (2.10), or browser security (2.11) in the same job.
```

---

## Stop

A8g complete. **51** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.8+ / SW-TS / Ops / CCNA C1 / Available promotion started.
