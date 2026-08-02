# A8h — Mobile & Embedded Device Security — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.9 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8h live — **AP1202-2.1–2.8 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **52** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.8 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.8` → `ap-mobile-security`
- Knowledge DNA: `hardening-basics`
- No lock/MDM/Activation Lock/root/jailbreak bypass; no unauthorized tracking
- Labs fictional/defensive only
- No 2.9+ Security topics implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-mobile-security` | AP1202-2.8 | Ownership-aware mobile/embedded security |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8h.ts` | **Added** — `ap-mobile-security` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.8 |
| `src/content/certifications/a-plus.ts` | Wire batch 8; overview |
| `docs/a-plus-learning-path.md` | A8h live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8h-mobile-security-review.md` | This report |

---

## AP1202-2.8 coverage

| Area | Covered |
|------|---------|
| Ownership contexts (BYOD, corp, kiosk, IoT, etc.) | Yes |
| MDM/UEM + management boundaries | Yes |
| Auth / screen lock distinctions | Yes |
| Encryption vs sync/backup/wipe | Yes |
| Apps, permissions, sideloading | Yes |
| Root/jailbreak risk (no how-to) | Yes |
| Wi-Fi/BT/NFC/hotspot/USB charging | Yes |
| Privacy permissions | Yes |
| Lost/stolen + remote wipe nuance | Yes |
| Backup/MFA recovery | Yes |
| SIM-swap awareness | Yes |
| Embedded/IoT hardening | Yes |
| Disposal/reassignment (lawful ownership) | Yes |
| Wearable/health awareness | Yes |
| Posture lab + assessment | Yes |

---

## Practical activity

`ap-lab-mobile-embedded-posture` — eight fictional profiles (lost corp phone, resigning BYOD, kiosk tablet, MFA-only phone, default-password camera, wearable, POS sideload, unsupported IoT). Learner records assets, risks, controls, ownership constraints, corrections, wipe/recovery, verification, notes.

---

## Ownership, privacy, wipe, and management boundaries

- Selective wipe for personal BYOD vs full wipe for corp devices — authority first
- Don’t remove MDM for ordinary tickets
- Wipe may be offline/queued; still revoke sessions
- Plan MFA recovery before destructive resets
- No Activation Lock / ownership / lock bypass
- No unauthorized tracking

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.9 data destruction/disposal | Next — `ap-data-destruction` |
| AP1202-2.10–2.11 | Queued |
| Full Core 1 Mobile redo | Referral only |
| Medical-device clinical config | Awareness boundary only |
| Security domain first-pass | Not earned from 2.1–2.8 alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Lost managed phone — lock, revoke, wipe per policy.
2. Leaving employee BYOD — selective wipe, not casual full wipe.
3. Flashlight app over-permissions — deny/remove.
4. Rooted enrollment — refuse bypass.
5. USB kiosk — power-only/approved charger.
6. Camera default password — change, update, segment.
7. SIM-swap signs — trusted carrier + protect accounts.
8. Posture lab A vs B wipe distinction.
9. Confirm remediation 2.8 → `ap-mobile-security`.

---

## Recommended next topic

```text
ap-data-destruction — AP1202-2.9
Scope: Given a scenario, use common data destruction and disposal methods.
Boundary: Sanitization, destruction, and disposal of data/media — not mobile security redo.
Do not implement SOHO network security (2.10) or browser security (2.11) in the same job.
```

---

## Stop

A8h complete. **52** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.9+ / SW-TS / Ops / CCNA C1 / Available promotion started.
