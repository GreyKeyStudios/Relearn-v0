# A7d — Core 2 Operating Systems Batch 4 + domain integration — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before Security / SW-TS / Ops / CCNA C1**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** A7a–A7d live — **domain first-pass recommended**  
**Full A+ track:** remains **`planned`**

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-app-install` | Pass | Pass (42 topics) | Pass |
| After `ap-cloud-productivity` | Pass | Pass (43 topics) | Pass |
| After `ap-os-domain-review` | Pass | Pass (**44** topics) | Pass |

Confirmed:

- AP1202-1.1–1.11 objective IDs resolve in registry and remediation map
- CES checks pass (no A+ CES warnings)
- Assessments tagged; weak-area routing via `AP_OS_OBJECTIVE_TOPIC` / `osTopicForObjective`
- CF (`cf-install-uninstall-apps`) and VM Lab (`/cert/vm-lab`) referrals remain valid from OS path
- No existing topic IDs changed
- No Security / SW-TS / Ops / CCNA / platform refactor / track promotion

---

## Topics added (A7d)

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-app-install` | AP1202-1.10 | App lifecycle: source → compat → install → config → update → remove; trust/policy |
| `ap-cloud-productivity` | AP1202-1.11 | Identity, sync≠backup, sharing≠ownership, local vs cloud, client triage |
| `ap-os-domain-review` | AP1202-1.1–1.11 | Mixed applied assessment + precise remediation routing |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-os-a7d.ts` | **Added** — apps, cloud productivity, OS domain review |
| `src/content/certifications/ap/ap-os-remediation.ts` | Map AP1202-1.10–1.11 |
| `src/content/certifications/a-plus.ts` | Wire batch 4; overview (OS first-pass; other Core 2 planned) |
| `docs/a-plus-learning-path.md` | A7d live rows; OS first-pass marker |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a7d-os-batch4-review.md` | This report |

---

## Objective coverage (AP1202-1.1 through AP1202-1.11)

| ID | Topic | Assess | Practical | Status |
|----|-------|--------|-----------|--------|
| AP1202-1.1 | `ap-os-types` | Quiz + bank | (prior batches) | Live |
| AP1202-1.2 | `ap-os-install` | Quiz + bank | (prior) | Live |
| AP1202-1.3 | `ap-windows-editions` | Quiz + bank | (prior) | Live |
| AP1202-1.4 | `ap-windows-tools` | Quiz + bank | (prior) | Live |
| AP1202-1.5 | `ap-windows-cli` | Quiz + bank | (prior) | Live |
| AP1202-1.6 | `ap-windows-settings` | Quiz + bank | (prior) | Live |
| AP1202-1.7 | `ap-windows-networking` | Quiz + bank | (prior) | Live |
| AP1202-1.8 | `ap-macos-tools` | Quiz + bank | (prior) | Live |
| AP1202-1.9 | `ap-linux-client` | Quiz + bank | (prior) | Live |
| AP1202-1.10 | `ap-app-install` | Quiz + bank | Deployment worksheet | Live |
| AP1202-1.11 | `ap-cloud-productivity` | Quiz + bank | Support worksheet | Live |
| Integration | `ap-os-domain-review` | Mixed quiz + bank | Weak-area routing plan | Live |

**Ordering** matches locked learning path. No objective silently omitted.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Core 2 Security (2.1–2.11) | Not started — next when authorized |
| Core 2 Software Troubleshooting | Not started |
| Core 2 Operational Procedures | Not started |
| Core 2 full-track integration / Readiness | Deferred until remaining domains first-pass |
| Gold LES conversion | Deferred |
| Full NTFS/share ACL / malware deep dive | Security domain |
| MFA / tenant / Gatekeeper / Activation Lock bypass | Forbidden |
| Piracy / security-control disable to force installs | Forbidden |
| CCNA C1 | Queued / fenced |
| A+ track promotion to Readiness/Available | Not authorized |

---

## Learner-walkthrough items (Michael)

1. Apps — lifecycle worksheet; refuse cracked installer; ARM/x64; per-user vs all-users; folder-delete ≠ uninstall; policy escalation.
2. Cloud — browser vs desktop; sync≠backup; sharing≠ownership; wrong tenant; org-wide red status; no personal-account data move; no MFA bypass.
3. Domain review — mixed scenarios across 1.1–1.11; miss routes to precise topic IDs.
4. Spot-check remediation map for 1.10–1.11 and review quiz explanations.
5. Confirm CF install refresher and VM Lab Linux referral still resolve from OS path.
6. Confirm no Security content leaked into OS review.

---

## Domain maturity recommendation

| Scope | Recommendation |
|-------|----------------|
| **Operating Systems (`ap-core2-os`)** | **First-pass** — AP1202-1.1–1.11 + review complete |
| **Full A+ track** | Remain **`planned`** |
| **Security / SW-TS / Ops** | Incomplete |

Operating Systems is the **first completed Core 2 domain**.

---

## Recommended next job (first Core 2 Security batch)

```text
Job A8a (suggested id) — Core 2 Security Batch 1
1) ap-security-measures     (AP1202-2.1)  — including Zero Trust basics
Stop after verify. Do not swallow the entire Security domain in one job unless separately scoped.
```

Do not begin Software Troubleshooting, Operational Procedures, Core 2 integration, CCNA C1, gold LES, or track promotion in that job unless Michael re-authorizes.

---

## Stop

A7d complete. Operating Systems → **first-pass**. Full A+ remains **Planned**. No Security / SW-TS / Ops / CCNA C1 / Available promotion started.
