# A8e — Social Engineering — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.6 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8e live — **AP1202-2.1–2.5 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **49** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.5 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.5` → `ap-social-engineering`
- Knowledge DNA: `auth-weakness-concepts`
- No live malicious links, credential collection, or real-person deception instructions
- Labs are fictional/nonfunctional and defensive
- AP1202-2.6 (`ap-malware-removal`) **not** implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-social-engineering` | AP1202-2.5 | Request → signals → out-of-band verify → safe response → report |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8e.ts` | **Added** — `ap-social-engineering` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.5 |
| `src/content/certifications/a-plus.ts` | Wire batch 5; overview |
| `docs/a-plus-learning-path.md` | A8e live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8e-social-engineering-review.md` | This report |

---

## AP1202-2.5 coverage

| Area | Covered |
|------|---------|
| Manipulation principles (trust, urgency, authority, etc.) | Yes |
| Phishing / spear / whaling / smishing / vishing | Yes |
| BEC, pretexting, impersonation | Yes |
| Tailgating/piggybacking, shoulder surfing, dumpster diving | Yes |
| Baiting, quid pro quo, watering-hole awareness | Yes |
| Credential harvest / MFA fatigue | Yes |
| Invoice/gift-card/payment scams | Yes |
| Deepfake/AI deception awareness | Yes |
| Out-of-band + help-desk identity verification | Yes |
| Email/messaging inspection (no click required) | Yes |
| Physical SE + unknown media | Yes |
| Post-interaction response + `ap-malware` link | Yes |
| Reporting, evidence, psychological safety | Yes |
| Fictional triage lab + assessment | Yes |

---

## Practical activity

`ap-lab-social-engineering-triage` — nine fictional artifacts (exec gift-card email, smishing, vishing OTP ask, help-desk pressure, tailgating, QR lure, MFA flood, vendor banking change, found USB). Learner records technique, indicators, asset, response, verify channel, report owner, evidence, response type, user-facing explanation, ticket note.

---

## Defensive and user-support boundaries

- No deception scripts, harvesting ops, or MFA defeat methods
- Never share passwords/OTP; never approve unexpected MFA; never plug found USB
- Verify out-of-band; don’t use contacts from the suspicious request
- Thank reporters; no blame culture
- Ticket notes exclude secrets and unnecessary PII

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.6 SOHO malware removal procedures | Next — `ap-malware-removal` |
| AP1202-2.7–2.11 | Queued |
| Live phishing / real impersonation practice | Forbidden |
| Security domain first-pass | Not earned from 2.1–2.5 alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. MFA push flood — don’t approve; report; clean-system reset path.
2. Vendor banking change — finance + established contacts, not email numbers.
3. “CEO” gift cards + secrecy — verify directory callback; don’t buy.
4. Help-desk pressure to skip ID checks — refuse; escalate.
5. Tailgating with boxes — reception/security; safety first.
6. Found USB “salaries” — report, don’t insert.
7. Deepfake voice transfer — process verification, not realism.
8. Triage lab: thank-the-user language; no secrets in tickets.
9. Confirm remediation 2.5 → `ap-social-engineering`.

---

## Recommended next topic — `ap-malware-removal` (AP1202-2.6)

```text
ap-malware-removal — AP1202-2.6
Scope: Given a scenario, follow SOHO malware removal best-practice procedures.
Boundary: Procedural remediation sequence for SOHO/context scenarios.
Reuse ap-malware (2.4) for categories/tools/escalation; do not re-teach social engineering (2.5).
Do not implement workstation hardening (2.7) or later Security objectives in the same job.
```

---

## Stop

A8e complete. **49** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.6+ / SW-TS / Ops / CCNA C1 / Available promotion started.
