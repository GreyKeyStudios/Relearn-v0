# A8l — Core 2 Security Domain Integration and Review — report

**Date:** 2026-08-01  
**Status:** Complete — **Security domain → first-pass**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a–A8l live — **AP1202-2.1–2.11 + domain review**  
**Full A+ track:** remains **`planned`**  
**Stop:** Do not begin Software Troubleshooting / Ops / Core 2 integration / CCNA C1

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **56** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- `ap-security-domain-review` resolves with objectives AP1202-2.1–2.11
- No AP1202-2.12 reference in content or registry
- Remediation map complete; quiz hints route to precise topics
- Capstone is fictional/inert — no malware samples, live phishing, real router access, or destructive actions
- No SW-TS / Ops topics started; no CCNA / platform refactor / track promotion

---

## Topic added

| Topic ID | Objectives | Focus |
|----------|------------|--------|
| `ap-security-domain-review` | AP1202-2.1–2.11 | Domain synthesis + Security Ops Desk |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8l.ts` | **Added** — domain review |
| `src/content/certifications/ap/ap-security-remediation.ts` | Comment: map complete |
| `src/content/certifications/a-plus.ts` | Wire batch 12; overview (Security first-pass) |
| `docs/a-plus-learning-path.md` | A8l live; Security first-pass; SW-TS queue table |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8l-security-domain-review.md` | This report |

---

## AP1202-2.1 through AP1202-2.11 coverage

| Objective | Topic | Live |
|-----------|-------|------|
| AP1202-2.1 | `ap-security-measures` | Yes |
| AP1202-2.2 | `ap-windows-security` | Yes |
| AP1202-2.3 | `ap-wireless-security` | Yes |
| AP1202-2.4 | `ap-malware` | Yes |
| AP1202-2.5 | `ap-social-engineering` | Yes |
| AP1202-2.6 | `ap-malware-removal` | Yes |
| AP1202-2.7 | `ap-hardening` | Yes |
| AP1202-2.8 | `ap-mobile-security` | Yes |
| AP1202-2.9 | `ap-data-destruction` | Yes |
| AP1202-2.10 | `ap-soho-security` | Yes |
| AP1202-2.11 | `ap-browser-security` | Yes |

**AP1202-2.12:** does **not** exist in the V15 registry.

---

## Integration audit findings

| Check | Result |
|-------|--------|
| Every AP1202-2.x resolves | Pass — 2.1–2.11 only |
| Every objective has a live topic | Pass |
| Topic IDs stable | Pass — no renames |
| Learning-path order | Pass — matches A8a–A8k sequence + review |
| Remediation mappings | Pass — see audit below |
| Assessments teach before test | Pass — prior topics + review lesson |
| No silent objective substitution | Pass |
| Safety/authorization boundaries | Pass — consistent capability ≠ authorization |
| Cross-topic referrals | Pass |
| No offensive/bypass labs | Pass |
| No destructive real-world labs | Pass |
| Privacy/ownership/policy explicit | Pass |
| Terminology consistency | Pass — no blockers found |

**Blockers:** none.

---

## Cross-topic consistency findings

| Pair | Finding |
|------|---------|
| malware vs malware-removal | Recognition/isolation vs SOHO procedure; clean scan ≠ restored trust |
| wireless vs SOHO | SOHO applies wireless principles; no primary-LAN weakening for legacy |
| hardening vs Windows security | UAC/policy/encryption = protective friction |
| mobile vs data destruction | Selective vs full wipe by ownership; factory reset ≠ universal sanitization |
| social engineering vs browser | Domain/cert/scareware shared boundaries |
| security-measures vs all | Zero Trust ≠ MFA alone; admin ≠ authorization |

No contradictions requiring content rewrites were found.

---

## Remediation audit

| Objective | Topic |
|-----------|-------|
| AP1202-2.1 | `ap-security-measures` |
| AP1202-2.2 | `ap-windows-security` |
| AP1202-2.3 | `ap-wireless-security` |
| AP1202-2.4 | `ap-malware` |
| AP1202-2.5 | `ap-social-engineering` |
| AP1202-2.6 | `ap-malware-removal` |
| AP1202-2.7 | `ap-hardening` |
| AP1202-2.8 | `ap-mobile-security` |
| AP1202-2.9 | `ap-data-destruction` |
| AP1202-2.10 | `ap-soho-security` |
| AP1202-2.11 | `ap-browser-security` |

Domain-review quiz/bank explanations append `reviewHint` to the precise topic. Failures do **not** route only to the domain review.

---

## Mixed assessment

- Quiz: 12 scenario items spanning 2.1–2.11 (control selection, friction, escalation, evidence pairs)
- Question bank: 11 additional mixed items
- Flashcards: path, authorization, Zero Trust, HTTPS, guest isolation, remediation, no-2.12

---

## Security Operations Desk capstone

`ap-lab-security-ops-desk` — twelve fictional incidents (MFA fatigue, lost phone, BitLocker recovery, cert warning, ransomware, guest→NAS, SSD disposal, IoT camera, Defender quarantine, BEC payment change, legacy browser, unknown router DNS) plus weak-area remediation plan from quiz misses.

---

## Learner-walkthrough items (Michael)

1. Permanent local admin request → temporary least privilege.
2. BitLocker after firmware → authorized recovery-key path.
3. Corporate SSID unexpected cert → stop/escalate.
4. Ransom note → isolate/report; clean scan ≠ trust.
5. Vendor bank-change email → out-of-band verify.
6. BYOD exit → selective wipe.
7. Legal-hold failed HDD → stop wipe.
8. Guest reaches NAS → verify isolation.
9. Payroll look-alike + cert warning → no click-through.
10. Ops Desk packets 1–12 + weak-area plan.
11. Confirm misses remediate to precise topics, not only the review.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Software Troubleshooting (3.1–3.4) | Next domain when authorized |
| Operational Procedures | Deferred |
| Core 2 full-track integration | Deferred until SW-TS + Ops first-pass |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Domain maturity decision

| Requirement | Met |
|-------------|-----|
| AP1202-2.1–2.11 all live | Yes |
| Complete remediation map | Yes |
| Domain review live | Yes |
| No blocking objective gaps | Yes |
| CES clean | Yes |
| All verification passes | Yes |
| Cross-topic safety/terminology consistent | Yes |
| Practical integration activity | Yes |
| Mixed assessment | Yes |
| No unsafe labs | Yes |
| No mapping conflicts | Yes |

**Security receives the first-pass marker.**

Full A+ track remains **Planned**. SW-TS and Ops remain incomplete.

---

## Recommended next topic

```text
ap-ts-windows-os — AP1202-3.1
Scope: Given a scenario, troubleshoot common Windows OS problems.
Boundary: Windows OS troubleshooting — not Security redo; not mobile OS (3.2) or PC security troubleshooting (3.4) in the same job unless separately scoped.
Do not begin Operational Procedures or Core 2 integration in the same job.
```

---

## Stop

A8l complete. **56** verified A+ topics. **Security → first-pass.** Full A+ remains **Planned**. No SW-TS / Ops / Core 2 integration / CCNA C1 / Available promotion started.
