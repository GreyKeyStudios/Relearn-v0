# A8k — Browser Security Settings & Features — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before Security domain review and all later Core 2 work**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8k live — **AP1202-2.1–2.11 topics only** (domain **not** first-pass; review pending)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **55** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.11 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.11` → `ap-browser-security`
- Knowledge DNA: `hardening-basics`
- Lab fictional/inert only — no live phishing, malware samples, or credential collection
- Certificate/policy/security bypass is not taught as routine support
- No AP1202-2.12 (none exists in V15 registry) and no Security domain review implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-browser-security` | AP1202-2.11 | Browser hardening, evidence-based troubleshooting |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8k.ts` | **Added** — `ap-browser-security` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.11 |
| `src/content/certifications/a-plus.ts` | Wire batch 11; overview |
| `docs/a-plus-learning-path.md` | A8k live row; domain-review queued; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8k-browser-security-review.md` | This report |

---

## AP1202-2.11 coverage

| Area | Covered |
|------|---------|
| Browser update lifecycle | Yes |
| HTTPS / certificates / domain verification | Yes |
| Site permissions | Yes |
| Notifications & pop-up abuse | Yes |
| Cookies, cache, site data, history | Yes |
| Password storage & autofill | Yes |
| Profiles & synchronization | Yes |
| Extension security | Yes |
| Download safety / reputation | Yes |
| Privacy, tracking, private-browsing limits | Yes |
| Safe browsing & content controls | Yes |
| Sandbox concepts | Yes |
| Managed browser policies | Yes |
| Proxy / VPN / secure-DNS distinctions | Yes |
| Troubleshooting model | Yes |
| Guided scenarios (7) + triage lab + assessment | Yes |
| Links to Windows security, social engineering, malware, hardening, cloud, app install | Yes |
| Remediation + knowledge DNA | Yes |

---

## Practical activity

`ap-lab-browser-security-triage` — eight fictional packets (cert look-alike, scareware, mic permission, returning extension, one-browser fail, shared kiosk passwords, download warning, legacy insecure portal). Learner records risk, layer, evidence, immediate action, narrow change, account/malware need, policy boundary, verification, user explanation, ticket note.

---

## Certificate, permission, extension, profile, privacy, and policy boundaries

- Certificate warnings: stop credentials; verify; don’t casual-bypass
- HTTPS ≠ legitimacy; lock icon ≠ full business identity
- Permissions: purpose-matched, revocable, narrowest grant
- Extensions: sync/policy can restore removed add-ons
- Profiles: verify ownership before delete; shared PC = remove saved creds
- Private browsing ≠ anonymity from ISP/employer/websites/malware
- Managed settings: do not remove organization policy for ordinary tickets

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.12 | **Does not exist** in V15 objective registry |
| `ap-security-domain-review` | Next when authorized — required for Security first-pass |
| Security domain first-pass marker | Not earned from 2.1–2.11 topics alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Payroll cert warning + look-alike domain — no click-through.
2. Fake virus page — don’t call; review notification permissions.
3. Mic blocked — browser vs OS vs managed policy.
4. Extension returns — sync / other device / policy / account.
5. Works in Edge not Chrome — scoped compare before full reset.
6. Shared PC saved passwords — remove, sign out, rotate if needed.
7. Private browsing misconception.
8. Legacy insecure portal — isolate session; document risk.
9. Confirm remediation 2.11 → `ap-browser-security`.

---

## Recommended next topic

```text
ap-security-domain-review — AP1202-2.1–2.11 (integration)
Scope: Cross-topic Security domain synthesis, scenario mix, remediation map check, first-pass gate.
Boundary: Integration review only — not a new exam objective.
Note: There is no AP1202-2.12 in the CompTIA A+ V15 registry used by this repo.
Do not start Software Troubleshooting or Operational Procedures in the same job.
```

---

## Stop

A8k complete. **55** verified A+ topics. Security domain **not** first-pass (review still required). Full A+ remains **Planned**. No domain review / SW-TS / Ops / CCNA C1 / Available promotion started.
