# A8i — Data Destruction & Disposal Methods — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.10 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8i live — **AP1202-2.1–2.9 only** (domain **not** first-pass)  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **53** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.9 resolves in registry, topic objectives, quiz/bank, remediation
- Remediation: `AP1202-2.9` → `ap-data-destruction`
- Knowledge DNA: `hardening-basics`
- Lab is fictional disposition worksheets only — no real wipe/destroy/drill/shred/burn/degauss
- No at-home physical destruction presented as an activity
- Ownership, legal-hold, and authorization boundaries are explicit
- No 2.10+ Security topics implemented
- No existing topic IDs changed; no CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-data-destruction` | AP1202-2.9 | Secure data destruction and disposal lifecycle |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8i.ts` | **Added** — `ap-data-destruction` |
| `src/content/certifications/ap/ap-security-remediation.ts` | Map AP1202-2.9 |
| `src/content/certifications/a-plus.ts` | Wire batch 9; overview |
| `docs/a-plus-learning-path.md` | A8i live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8i-data-destruction-review.md` | This report |

---

## AP1202-2.9 coverage

| Area | Covered |
|------|---------|
| Deletion vs formatting vs sanitization vs destruction | Yes |
| Encryption / cryptographic erase / factory-reset limits | Yes |
| Ownership & authorization before erase | Yes |
| Classification, retention, legal hold | Yes |
| HDD / SSD / flash / optical / mobile / MFP / IoT / backup media | Yes |
| Logical wipe · secure erase/sanitize · crypto-erase | Yes |
| Degaussing (magnetic only) | Yes |
| Shredding · crushing · drilling recognition · incineration · vendor | Yes |
| Paper disposal + dumpster-diving link | Yes |
| Cloud/sync implications | Yes |
| Reuse · return · resale · final disposal paths | Yes |
| Verification + chain of custody | Yes |
| Environmental / physical safety (simulated only) | Yes |
| Guided scenarios (7) + disposition lab + assessment | Yes |
| Links to mobile security, hardening, storage, cloud, OS install | Yes |
| Remediation + knowledge DNA | Yes |

---

## Practical activity

`ap-lab-media-disposition` — eleven fictional asset packets (reassigned HDD laptop, failed encrypted HDD, SSD leaving org, BYOD phone, org tablet, USB payroll, optical archives, leased MFP, IoT camera, cloud-synced workstation, tape box with count mismatch). Learner records authorization, prerequisites, method, ineffective methods, custody, safety, verification, cloud/account follow-up, disposition record, escalation owner.

---

## Media-specific method distinctions

- **HDD:** overwrite/logical wipe where approved; degaussing; physical destruction; deletion insufficient; damage can block logical paths
- **SSD:** wear leveling / overprovisioning; file overwrites may miss locations; supported sanitize / crypto-erase; physical destruction when assurance requires; **not** degauss
- **Flash removable:** erase limits, encryption, destruction, custody
- **Optical:** approved physical destruction; surface damage ≠ secure
- **Mobile:** connect to `ap-mobile-security` — backup, accounts/MDM, selective vs full wipe, SIM/cards, no ownership bypass
- **MFP / IoT / backup:** internal storage, caches, retention, vendor/process paths

---

## Ownership, retention, safety, and chain-of-custody boundaries

- Technical access and possession are not erase authority
- Legal hold / investigation → stop and escalate
- BYOD may require selective removal, not full wipe
- Local wipe does not complete cloud/backup/share disposition
- Certificate count mismatch → do not close
- No home/classroom burning, smashing, drilling, shredding e-waste, or degaussing

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.10 SOHO wired/wireless security | Next — `ap-soho-security` |
| AP1202-2.11 browser security | Queued — `ap-browser-security` |
| Security domain first-pass | Not earned from 2.1–2.9 alone |
| Gold LES / NIST-endorsed wipe recipes | Not claimed; CES first-pass only |
| Real destructive labs | Forbidden — simulated worksheets only |
| SW-TS / Ops / Core 2 integration / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Delete/Recycle Bin ≠ secure disposal.
2. Failed confidential HDD → degauss/physical destruction + custody (not quick format).
3. Degauss SSD → ineffective.
4. Crypto-erase → all key copies (escrow/recovery/cloud).
5. Local wipe + OneDrive sync → incomplete.
6. Cert lists 9 of 10 drives → stop, reconcile, escalate.
7. BYOD exit → selective wipe vs full wipe authority.
8. Leased MFP → internal storage / vendor sanitize.
9. Disposition lab packets A–K — especially K count mismatch.
10. Confirm remediation 2.9 → `ap-data-destruction`.

---

## Recommended next topic

```text
ap-soho-security — AP1202-2.10
Scope: Given a scenario, configure appropriate security settings on SOHO wireless and wired networks.
Boundary: SOHO router/AP/switch/firewall settings — not data destruction redo.
Do not implement browser security (2.11) in the same job.
```

---

## Stop

A8i complete. **53** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.10+ / SW-TS / Ops / CCNA C1 / Available promotion started.
