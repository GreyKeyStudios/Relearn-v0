# A8c — Wireless Security — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.4 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8c live — **AP1202-2.1–2.3 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **47** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.3 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.3` → `ap-wireless-security`
- Knowledge DNA: `authentication`
- Defensive boundaries intact — no attack steps, no password cracking, no rogue-AP labs, no deauth/capture
- No 2.4+ Security topics implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-wireless-security` | AP1202-2.3 | Wireless auth/encryption selection, Personal vs Enterprise, safe triage |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8c.ts` | **Added** — `ap-wireless-security` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.3 |
| `src/content/certifications/a-plus.ts` | Wire batch 3; overview |
| `docs/a-plus-learning-path.md` | A8c live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8c-wireless-security-review.md` | This report |

---

## AP1202-2.3 coverage

| Area | Covered |
|------|---------|
| Layered model (discovery/auth/encrypt/authz/access) | Yes |
| Open networks + captive portal ≠ encryption | Yes |
| WEP / WPA / WPA2 / WPA3 (incl. SAE intro, not invulnerable) | Yes |
| Personal vs Enterprise | Yes |
| 802.1X / RADIUS roles + failure layers | Yes |
| TKIP / AES / CCMP / GCMP recognition; auth ≠ encryption | Yes |
| SSID design, guest/IoT, WPS, MAC filter limits | Yes |
| Rogue / evil twin defensive awareness | Yes |
| Public Wi-Fi safety | Yes |
| 12-layer troubleshooting model | Yes |
| Guided scenarios (SOHO upgrade, cert warning, café twin, ex-employee PSK, legacy device, joined-but-isolated) | Yes |
| Practical configuration review | Yes |
| Assessment (selection/layers/escalation — not year trivia) | Yes |

---

## Practical activity

`ap-lab-wireless-security-review` — fictional Sites A–C (WPA/TKIP SOHO with WPS/defaults; WPA2-Enterprise cert warning + slow clock; café look-alike open SSIDs) plus three symptom-layer notes (can’t join / no DHCP / guest isolation). **No real router config, attacks, or public Wi-Fi testing.**

---

## Defensive and authorization boundaries

- No password attacks, handshake capture, deauth, rogue AP construction, or exploitation of WPS
- Do not weaken main SSID for one legacy device; isolate/replace with approval
- Do not blindly accept certificates
- Do not disable firewall/EDR to force joins
- Evil twin response is document/notify/verify — not experiment by joining

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.4 malware detect/remove/prevent | Next — `ap-malware` |
| AP1202-2.5–2.11 | Queued |
| Deep enterprise WLAN engineering | A+ depth only |
| Offensive wireless labs | Forbidden |
| Security domain first-pass | Not earned from 2.1–2.3 alone |
| SW-TS / Ops / Core 2 integration / gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Open + captive portal ≠ encrypted wireless.
2. WPA/TKIP SOHO → WPA2/WPA3 + rotate + guest + firmware.
3. Enterprise cert warning → time/profile; no Continue-anyway habit.
4. Former employee + PSK → rotate; Enterprise for offboarding.
5. Legacy WEP-only device → isolate/replace; never drop main SSID to WEP.
6. Joined but no SharePoint → guest/segment/VPN layer.
7. Worksheet Sites A–C: no offensive or weaken-main-network answers.
8. Confirm remediation 2.3 → `ap-wireless-security`.

---

## Recommended next topic

```text
ap-malware — AP1202-2.4
Scope: Given a scenario, detect, remove, and prevent malware using appropriate tools and methods.
Stay inside malware tooling/methods for 2.4.
Do not swallow SOHO malware-removal best-practice procedures (2.6) or social engineering (2.5) in the same job unless separately authorized.
```

---

## Stop

A8c complete. **47** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.4+ / SW-TS / Ops / CCNA C1 / Available promotion started.
