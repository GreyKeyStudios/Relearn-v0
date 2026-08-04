# Owner Walkthrough Checklist — v2.0 Vertical Slices (1.3 + 5.2)

**Owner:** Michael  
**Tracks:** CCNA learner-facing elevations from batch-1 specs  
**PR:** draft — do not merge until signed

---

## Preconditions

- [ ] On `dev` tip that includes merged PR #34 specs
- [ ] Local or preview build loads `/cert/ccna`
- [ ] Clear or use a fresh learner profile (no conflicting incomplete quizzes)

---

## Pathway UI

- [ ] Version pathway card visible on CCNA cert page
- [ ] Default/v1.1 pathway **hides** `IPv4 Troubleshoot (CCNA v2.0)` and `AI Prompts for Net Ops (CCNA v2.0)`
- [ ] Switching to **v2.0** shows both live slices
- [ ] Unfinished batch-1 parents (2.4, 1.4, 1.7, 2.5, 3.2, 3.3) listed as not learner-facing
- [ ] Apply exam date `2027-03-01`, clear override → effective pathway v2.0
- [ ] Switch v2.0 → v1.1 → v2.0 without losing prior lesson/quiz progress keys

---

## Slice 1.3 — IPv4 troubleshoot

- [ ] First-time LES walk completes without stall (checkpoints answerable from prior screens)
- [ ] Misconception screen teaches “private ≠ broken”
- [ ] Remediation teach screen covers public/private triage
- [ ] Hub shows lightbulb, key facts, guided example
- [ ] Quiz Q1 wrong “private illegal” shows diagnostic remediation panel
- [ ] Quiz explanations match lesson (gateway outside /24, troubleshoot verb)
- [ ] Flashcards + question bank load
- [ ] Simulator: evidence gate blocks diagnosis until ≥2 panels opened
- [ ] Simulator: correct diagnosis on gateway-mismatch scenario
- [ ] Simulator: misconception choice shows remediation copy
- [ ] Objective coaching labels show `v2.0 1.3 …` (not a pilot `CCNA-*` remap)
- [ ] Completing `subnetting` alone does **not** mark this topic mastered

---

## Slice 5.2 — AI prompts for net ops

- [ ] LES walk completes; four components taught before select checkpoint
- [ ] Examples stay in CRC / ACL / change-window / ops framing
- [ ] No temperature/top-k as a correct path
- [ ] Quiz wrong “fix my network” routes to prompt-component remediation
- [ ] Simulator rejects secret-leaking and generic LLM-tuning prompts
- [ ] Simulator awards credit only when all four components present
- [ ] Topic remains hidden on v1.1 pathway
- [ ] Completing `automation-basics` does **not** credit `200-301-v2.0/5.2`

---

## Cross-cutting

- [ ] Mobile + desktop: pathway card and sims usable
- [ ] No second mastery/SRS system introduced
- [ ] Pilot progress keys on existing topics unchanged
- [ ] Playwright `ccna-v20-vertical-slices` + learner-loop + ccna audit green

---

## Sign-off

| Role | Name | Date | Result |
| --- | --- | --- | --- |
| Owner walkthrough | | | ☐ Pass ☐ Fail |
| Notes | | | |
