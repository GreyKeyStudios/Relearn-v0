# A9b — Mobile OS & Application Troubleshooting — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-3.3 and all later Software Troubleshooting objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS / Security:** First-pass (unchanged)  
**Core 2 SW-TS:** A9a–A9b live — **AP1202-3.1–3.2 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **58** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-3.2 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-3.2` → `ap-ts-mobile-os`
- Knowledge DNA: `authentication`
- Lab fictional only — no required destructive reset, no lock/MDM/activation/root/jailbreak bypass, no unsafe battery work
- No 3.3+ SW-TS topics; no Ops; no CCNA / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-ts-mobile-os` | AP1202-3.2 | Mobile OS and application diagnosis |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-sw-troubleshoot-a9b.ts` | **Added** — `ap-ts-mobile-os` |
| `src/content/certifications/ap/ap-sw-troubleshoot-remediation.ts` | Map AP1202-3.2 |
| `src/content/certifications/a-plus.ts` | Wire batch 2; overview |
| `docs/a-plus-learning-path.md` | A9b live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a9b-mobile-os-troubleshooting-review.md` | This report |

---

## AP1202-3.2 coverage

| Area | Covered |
|------|---------|
| Troubleshooting process | Yes |
| Data / account / MFA protection | Yes |
| App · OS · account/sync · connectivity · storage · battery | Yes |
| Evidence + scope isolation | Yes |
| App workflow · permissions · notifications | Yes |
| Cache vs data vs reinstall | Yes |
| OS updates · boot failures · charging | Yes |
| Wi-Fi, cellular, VPN, Bluetooth | Yes |
| MFA recovery · managed boundaries | Yes |
| Security escalation · factory-reset impact | Yes |
| Verification + documentation | Yes |
| Guided scenarios (8) + Mobile TS Desk + assessment | Yes |
| Links to Mobile, Security, cloud, wireless, Windows TS | Yes |
| Remediation + knowledge DNA | Yes |

---

## Practical activity

`ap-lab-mobile-ts-desk` — nine fictional packets (app crash after update, mic permissions, browser-OK/app-fail email, storage full, overnight drain, BT paired/no call audio, lost phone + authenticator, managed VPN setting, swollen battery). Learner records scope, layer, protection, evidence, test, least-disruptive fix, policy boundary, escalation, verification, ticket note.

---

## Data, account, battery, and reset boundaries

- Backup, sync, local-only data, authenticator/MFA, eSIM, ownership reviewed before factory reset
- Cache clear ≠ app-data clear; warn before destructive app actions
- Swollen/hot/damaged battery → stop use; never puncture or keep charging
- No real factory reset required by the lab

---

## Security and management boundaries

- No lock, Activation Lock, MDM, root, or jailbreak bypass
- Managed unavailable settings may be by design
- Lost authenticator → approved recovery + revoke sessions
- SIM-swap / compromise indicators → escalate; don’t collect passwords/OTP

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-3.3 mobile OS/app security TS | Next — `ap-ts-mobile-security` |
| AP1202-3.4 PC security TS | Queued |
| SW-TS domain first-pass | Not earned from 3.1–3.2 alone |
| Operational Procedures | Deferred |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. App crash after OS update — update app; no instant factory reset.
2. Meeting mic — app permission → OS → BT routing → policy.
3. Email browser OK / app fail — token/account/profile layers.
4. Storage full — protect unsynced local photos before delete.
5. BT paired, no call audio — profile/routing/other host.
6. Lost phone + authenticator — revoke + approved MFA recovery.
7. Managed VPN grayed — policy ownership; don’t remove MDM.
8. Swollen battery — safety stop.
9. Confirm remediation 3.2 → `ap-ts-mobile-os`.

---

## Recommended next topic

```text
ap-ts-mobile-security — AP1202-3.3
Scope: Given a scenario, troubleshoot common mobile OS and application security issues.
Boundary: Mobile security incident/troubleshooting — not general mobile OS/app redo (3.2); not PC security TS (3.4) in the same job.
Do not begin Operational Procedures or Core 2 integration in the same job.
```

---

## Stop

A9b complete. **58** verified A+ topics. SW-TS domain **not** first-pass. Full A+ remains **Planned**. No 3.3+ / Ops / Core 2 integration / CCNA C1 / Available promotion started.
