# Subject Onboarding Process — ReLearn

**Purpose:** Reusable checklist for adding any new subject to Bridge/ReLearn  
**First worked example:** Python Foundations (Tier 2)  
**Owner:** Master Agent (M0)

Every new subject — Python, French, music theory, algebra — must complete this process **before** content agents write curriculum or platform agents build new interaction types.

---

## Process overview

```text
1. Philosophy      Why this subject? Who is it for?
2. Gate            What must happen before we build?
3. Curriculum map  Modules, outcomes, prerequisites
4. Engine mapping  Which activities reuse Bridge vs need new UI?
5. Interaction types  Simulators, labs, projects
6. Project catalog Capstones and integration projects
7. Learner research  Field notes from real study (when applicable)
8. BRIDGE_MASTER     Document tier, phase, non-goals
9. Agent roster      Assign P*-Platform, P*-Content, P*-Verify
```

---

## Onboarding checklist

Copy this table for each new subject. All rows must be answered before content agents start.

| # | Question | Required answer |
|---|---|---|
| 1 | **Why should ReLearn teach this?** | Strategic fit, learner demand, platform differentiation |
| 2 | **Who is it for?** | Prerequisites, prior tracks, experience level |
| 3 | **Prerequisites (other tracks)?** | Which Bridge/ReLearn tracks should be completed first |
| 4 | **How is success measured?** | Observable outcomes, not "finished videos" |
| 5 | **What activity types are needed?** | lesson / quiz / flashcard / lab / project / case study / … |
| 6 | **What simulator or lab types are needed?** | New interaction types vs reuse existing |
| 7 | **What makes this subject different from certs?** | Learning loop, assessment style, creation vs recall |
| 8 | **How does it map to the learning engine?** | mastery, weakness, coach, planner, curriculum |
| 9 | **Tier placement** | Tier 1–4 in ReLearn expansion model |
| 10 | **Blocker / gate** | e.g. learner research, exam passed, security review |
| 11 | **Track type** | `certification` or `skills` (LearningTrack) |
| 12 | **Content location** | e.g. `src/content/certifications/` vs `src/content/tracks/` |
| 13 | **Route prefix** | e.g. `/cert/` vs `/track/python/` |
| 14 | **Phase assignment** | Which Bridge phase owns implementation |
| 15 | **What delight moments should we reproduce?** | Teaching techniques that caused breakthroughs, not just topics covered |

---

## Worked example #1 — Python Foundations

| # | Question | Python answer |
|---|---|---|
| 1 | Why teach this? | First **creation** subject; scripting glue for all Tier 1 certs; automation prerequisite for Tier 3 |
| 2 | Who is it for? | Bridge learners post–Tier 1 cert; career switchers needing scripting |
| 3 | Prerequisites | At least one Tier 1 track (CCNA recommended) |
| 4 | Success measured | 50-line real IT script without copy-paste; 2 cert-bridge projects; all module capstones passed |
| 5 | Activity types | lesson, quiz, flashcard, **code-lab**, debug challenge, mini project, case study (optional) |
| 6 | Lab types | 9 Code Lab types — see [`python-learning-architecture.md`](python-learning-architecture.md) §P3 |
| 7 | Different from certs | Learn → **Write → Break → Fix → Build** vs Learn → Practice → Review → Master |
| 8 | Engine mapping | Reuse mastery/SRS/coach/planner; add `code-lab` practice type + `codeLabAttempts` |
| 9 | Tier | **Tier 2** — IT Automation |
| 10 | Gate | **Blocked** until Michael completes external Python course + [`python-learner-research.md`](python-learner-research.md) (must include delight synthesis, not only frustration log) |
| 11 | Track type | `skills` (LearningTrack) — not a Certification |
| 12 | Content location | `src/content/tracks/python/` (future) |
| 13 | Route prefix | `/track/python/` (future) |
| 14 | Phase | **Phase 7** (planned, blocked) |
| 15 | Delight moments | Before/after comparisons, predict-then-run, incremental refactor — see research doc delight table |

**Full architecture:** [`python-learning-architecture.md`](python-learning-architecture.md)  
**Field research:** [`python-learner-research.md`](python-learner-research.md)

---

## Worked example #2 — Template for future subjects

| # | Question | [Subject name] answer |
|---|---|---|
| 1 | Why teach this? | |
| 2 | Who is it for? | |
| 3 | Prerequisites | |
| 4 | Success measured | |
| 5 | Activity types | |
| 6 | Lab/simulator types | |
| 7 | Different from certs | |
| 8 | Engine mapping | |
| 9 | Tier | |
| 10 | Gate | |
| 11 | Track type | |
| 12 | Content location | |
| 13 | Route prefix | |
| 14 | Phase | |
| 15 | Delight moments | |

---

## Decision rules

### When to reuse vs extend the engine

| Situation | Decision |
|---|---|
| Activity is read + quiz + flashcard | **Reuse** existing lesson/quiz/flashcard surfaces |
| Activity is multiple-choice drill | **Reuse** simulator choice/order runners |
| Activity requires learner to **produce** something (code, audio, writing) | **New** interaction type — plan in architecture doc first |
| Activity is open-ended project | **Extend** assignment pattern with rubric; may use external-lab until submission UI exists |

### When to block implementation

- No completed onboarding checklist
- No learner research (for subjects where the builder is also the target learner)
- No security model for code execution (Python, future programming subjects)
- Track type forces fit into Certification schema without platform abstraction

### When to update BRIDGE_MASTER

After onboarding checklist is complete:

1. Add tier placement (§2b)
2. Add future track section (§17 pattern)
3. Add non-goals for the subject until gate passes (§14)
4. Add phase row to roadmap table (§2)
5. Link to architecture doc from agent command block if agents will be assigned

---

## Agent assignment template

When implementation gate opens, M0 assigns:

| Agent ID | Scope | Must read |
|---|---|---|
| M0 | BRIDGE_MASTER only | This doc + architecture doc |
| P*-Platform | types, lib, curriculum integration | Architecture appendix A |
| P*-UI / P*-Lab-UI | New components | Interaction taxonomy |
| P*-Content | Content files only | Curriculum map + learner research |
| P*-Verify | Integration, build | Handoff checklist |

Content agents must **not** edit `types.ts`, `registry.ts`, `src/app/**`, or other agents' content files.

---

## Sign-off

Before any subject moves from **Planned** to **In progress**:

- [ ] Onboarding checklist complete (all 14 rows)
- [ ] Architecture doc written (curriculum + engine + projects)
- [ ] BRIDGE_MASTER updated
- [ ] Gate explicitly documented and met (or waived by Master Agent with reason)
- [ ] Agent roster and file ownership defined

**Python status:** Checklist complete in planning docs; **gate not met** — implementation remains blocked.

---

*See also: [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) §18, [`python-learning-architecture.md`](python-learning-architecture.md)*
