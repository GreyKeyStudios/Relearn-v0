# A8j — SOHO Wired & Wireless Security Settings — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.11 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8j live — **AP1202-2.1–2.10 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **54** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.10 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.10` → `ap-soho-security`
- Knowledge DNA: `hardening-basics`
- Lab is fictional configuration review only — no real router access, scanning, password guessing, or public exposure testing
- No offensive wireless/network activity instructed
- No control-weakening lab required
- No 2.11+ Security topics implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-soho-security` | AP1202-2.10 | SOHO wired/wireless security configuration decisions |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8j.ts` | **Added** — `ap-soho-security` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.10 |
| `src/content/certifications/a-plus.ts` | Wire batch 10; overview |
| `docs/a-plus-learning-path.md` | A8j live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8j-soho-security-review.md` | This report |

---

## AP1202-2.10 coverage

| Area | Covered |
|------|---------|
| Environment inventory | Yes |
| Administrative security + default credential risk | Yes |
| Firmware & support lifecycle | Yes |
| WPA2/WPA3, passphrases, SSID, WPS | Yes |
| Guest & IoT segmentation | Yes |
| Wired / physical security | Yes |
| DHCP / client awareness | Yes |
| DNS integrity | Yes |
| UPnP · port forwarding · DMZ risk | Yes |
| Router firewall + host firewall depth | Yes |
| Remote administration · VPN (SOHO depth) | Yes |
| NAS, printer, camera, smart-home protection | Yes |
| Logs / monitoring | Yes |
| Backup, reset, recovery | Yes |
| Compromise response | Yes |
| Compatibility without weakening | Yes |
| Guided scenarios (7) + config-review lab + assessment | Yes |
| Links to SOHO networking, wireless security, hardening, mobile, data destruction | Yes |
| Remediation + knowledge DNA | Yes |

---

## Practical activity

`ap-lab-soho-config-review` — four fictional environments (family home, remote-worker office, small retail, IoT-heavy smart home). Learner records assets, risks, priority correction, wireless/wired changes, segmentation, exposures to remove, compatibility, ownership boundary, verification, and follow-up.

---

## Segmentation, exposure, compatibility, and ownership boundaries

- Guest/IoT SSIDs require verified isolation — same unrestricted LAN ≠ segmentation
- Prefer replace/isolate legacy WEP devices rather than weakening the primary LAN
- Refuse DMZ / broad forwards / firewall-off as generic fixes
- Prefer approved VPN/managed remote access over direct RDP exposure
- Do not bypass ISP-managed or organization controls
- Compatibility problems → narrowest approved exception, then verify security and function

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.11 browser security | Next — `ap-browser-security` |
| Security domain first-pass / domain review | Not earned from 2.1–2.10 alone |
| Full wireless-protocol reteach | Referral to `ap-wireless-security` |
| Enterprise network security deep-dive | Out of scope |
| Gold LES | Not required |
| SW-TS / Ops / Core 2 integration / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Default router admin → unique admin passphrase ≠ Wi-Fi password.
2. WEP-only device → isolate/replace; don’t weaken primary SSID.
3. Guest access → separate passphrase + verified isolation from NAS/PCs.
4. Game-console DMZ request → narrow rule / UPnP policy; refuse DMZ.
5. Default-credential camera → creds, MFA, firmware, segment.
6. Multi-device redirects → router DNS/admin integrity.
7. Home RDP forward → remove; VPN/managed access + MFA.
8. Config-review lab A–D — especially retail DMZ spare PC and unexpected DNS.
9. Confirm remediation 2.10 → `ap-soho-security`.

---

## Recommended next topic

```text
ap-browser-security — AP1202-2.11
Scope: Given a scenario, configure and apply browser security settings and related features.
Boundary: Browser hardening, extensions, certificates, and related client settings — not SOHO router redo.
Do not start Software Troubleshooting or Security domain review in the same job.
```

---

## Stop

A8j complete. **54** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.11+ / Security domain review / SW-TS / Ops / CCNA C1 / Available promotion started.
