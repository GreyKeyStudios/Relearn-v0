# A8a — Core 2 Security Batch 1 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before AP1202-2.2 and all later Security objectives**  
**Core 1:** First-pass complete (unchanged)  
**Core 2 OS:** First-pass (unchanged)  
**Core 2 Security:** A8a live — **AP1202-2.1 only**  
**Full A+ track:** remains **`planned`**

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **45** topics, no CES warnings, objective tags OK |
| Base `npm run verify:curriculum` | Pass |

Confirmed:

- AP1202-2.1 resolves in registry, topic `objectives[]`, quiz/bank tags, and remediation map
- Remediation route: `securityTopicForObjective("AP1202-2.1")` → `ap-security-measures`
- Knowledge DNA: `knowledgeNodeId: "authentication"`
- No AP1202-2.2+ topics implemented
- No existing topic IDs changed
- No CCNA / SW-TS / Ops / platform refactor / track promotion

---

## Topic added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-security-measures` | AP1202-2.1 | Layered security measures + Zero Trust decision model |

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core2-security-a8a.ts` | **Added** — `ap-security-measures` |
| `src/content/certifications/ap/ap-security-remediation.ts` | **Added** — AP1202-2.1 map |
| `src/lib/quiz-remediation.ts` | Wire `securityTopicForObjective` |
| `src/content/certifications/a-plus.ts` | Wire Security batch 1; overview |
| `docs/a-plus-learning-path.md` | A8a live row; stop gate |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker |
| `.cursor/plans/cf-aplus-qa/a8a-security-batch1-review.md` | This report |

---

## AP1202-2.1 coverage

| Area | Covered |
|------|---------|
| Control categories (technical, administrative/managerial, operational, physical) | Yes |
| Control functions (preventive, detective, corrective, deterrent, compensating, directive) | Yes |
| Category vs function distinction | Yes |
| Defense in depth | Yes |
| Least privilege / need to know / separation of duties | Yes |
| Job rotation / mandatory vacations (fraud/resilience framing) | Yes |
| Account lifecycle (intro) | Yes |
| Physical security measures + risk-based selection | Yes |
| Logical/endpoint foundational controls (layered set; forward-linked) | Yes |
| Technician scenarios (hire, contractor, lost laptop, shared PC, permanent admin) | Yes |
| Authorization boundaries / no bypass | Yes |
| Guided control-selection exercise | Yes |
| Practical: workstation security baseline review | Yes |
| Assessment: selection, ZT, category/function, escalation | Yes — not glossary-only |

---

## Zero Trust coverage

| Concept | Covered |
|---------|---------|
| Architecture/decision model (not a product) | Yes |
| Core principle (no continuing trust from “inside”) | Yes |
| Verify explicitly | Yes |
| Least-privilege access | Yes |
| Assume breach | Yes |
| Control plane vs data plane (A+ depth) | Yes |
| Policy decision vs enforcement | Yes |
| Continuous evaluation | Yes |
| Explicit misconception rejects | Yes |

---

## Practical activity

`ap-lab-security-baseline-review` — fictional workstation evidence pack (account type, screen lock, encryption, updates, EDR, firewall, MFA, MDM, backup, physical context, logging). Learner marks Present/Missing/Misconfigured/Unknown/Policy-controlled and recommends safe correction / approval / escalation / verification / docs. Plus three control-selection scenarios from the guided set.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| AP1202-2.2 Windows security settings | Next when authorized — `ap-windows-security` |
| AP1202-2.3–2.11 | Queued; not implemented |
| Full identity-management deep dive | Intro lifecycle only here |
| Malware removal / wireless / hardening / mobile / disposal / SOHO / browser | Later dedicated topics |
| SW Troubleshooting / Ops / Core 2 integration | Not started |
| Gold LES / track promotion / CCNA C1 | Deferred / fenced |

---

## Learner-walkthrough items (Michael)

1. Category vs function on policy, lock, logging, backup examples.
2. Zero Trust myths rejected; continuous evaluation after login.
3. Control plane vs data plane at A+ depth (not automation).
4. Least privilege “cannot install software” = working control, not auto-bypass.
5. Lost-laptop layered response without publishing recovery keys.
6. Baseline worksheet: no recommend-disable-security answers.
7. Confirm remediation routes 2.1 → `ap-security-measures`.

---

## Recommended next topic and boundary

```text
Next (when authorized): ap-windows-security — AP1202-2.2
Boundary: Given a scenario, manage/configure basic Microsoft Windows OS security settings.
Stay inside Windows security settings scenarios.
Do not swallow wireless (2.3), malware (2.4+), social engineering (2.5), or hardening (2.7) in the same job.
Stop after verify + short review note (or batch report if Michael scopes a multi-topic A8b).
```

---

## Stop

A8a complete. **45** verified A+ topics. Security domain **not** first-pass. Full A+ remains **Planned**. No 2.2+ / SW-TS / Ops / CCNA C1 / Available promotion started.
