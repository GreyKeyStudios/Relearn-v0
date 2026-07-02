# Definition of Done — Topic Complete

**Version:** 1.0  
**Owner:** M0  
**Applies to:** Every ReLearn topic — CCNA pilot first, then all certs and future tracks.

---

## Philosophy

> **Lesson complete ≠ Topic complete.**

A learner can understand the material while assessments still test untaught content. That is a curriculum flaw, not a learner failure.

**Topic complete** means every learning artifact in the topic measures the same objectives the lesson teaches — or explicitly declared prerequisites and deferred destinations documented in [`ccna-deferral-manifest.md`](ccna-deferral-manifest.md).

**Domain complete** means every topic in that domain is topic complete, signed off by the project owner (Michael) after a full first-time learner walkthrough.

---

## Two separate signals

| Signal | Meaning | Does NOT mean |
|--------|---------|---------------|
| Learner passes Professor Mode / explains concepts orally | Real understanding is forming | Module is production-ready |
| Quiz score improves | Exposure to assessments is working | Every artifact is aligned |
| Lesson feels good | LES teaching may be OK | Flashcards, bank, drills, and labs were verified |

Do not conflate learner progress with curriculum integrity.

---

## Mandatory learner flow (gate)

Every topic must pass this sequence before sign-off:

```text
1. Lesson (LES experience or stepped lesson)
2. After-lesson hub (lightbulb, key facts, cheat sheets, deep dive)
3. Flashcards
4. Topic quiz
5. Question bank (drill mode)
6. In-app simulators / drills (if assigned)
7. Packet Tracer / external lab (if assigned)
8. Professor Mode (oral mastery — no hidden knowledge)
9. Michael full-flow walkthrough as first-time learner → sign off
```

Skipping steps 2–7 and validating only the lesson + Professor Mode is **not** sufficient.

---

## Topic complete checklist

Mark a topic **COMPLETE** only when **all** items pass:

| # | Artifact | Pass criteria | BLS tie-in |
|---|----------|---------------|------------|
| 1 | **Lesson (LES)** | Teaches every objective for this topic; deferrals use `laterLearn` / term tiers | BLS-1, BLS-10, LES-11 |
| 2 | **Inline checkpoints** | Test only material taught on prior screens | BLS-1, BLS-5 |
| 3 | **After-lesson hub** | `lightbulbMoment`, `keyFacts`, `guidedExample`, `commonMistakes`, `examTraps`, `realWorldScenario` match LES — no stale copy | BLS-6 |
| 4 | **Flashcards** | Backs contain no facts absent from lesson or keyFacts | BLS-6 |
| 5 | **Topic quiz** | Every question tests taught material or declared prerequisite | BLS-1, BLS-9 |
| 6 | **Question bank** | Same as quiz; advanced items relocated to destination topic per deferral manifest | BLS-1 |
| 7 | **Drills / simulators** | Reinforce taught skills only; assignment `order` after lesson | BLS-7 |
| 8 | **External lab (PT)** | Uses only introduced concepts | BLS-8 |
| 9 | **Professor Mode** | Passable without hidden knowledge (~8/10 oral bar) | Oral Mastery Gate |
| 10 | **Owner walkthrough** | Michael completes full flow; no "unfair" questions | Integration test |

---

## Domain complete checklist

A domain (e.g. `network-fundamentals`) is **production-ready** when:

- Every topic in the domain is topic complete (10/10 above)
- Wave audit sheet shows **Topic Complete = YES** for all topics
- `npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives --strict-pedagogy --strict-experience` passes
- Deferral manifest accounts for every relocated assessment item from that wave

---

## Relocation rule (no silent deletions)

Removing a quiz or bank question from Topic A requires:

1. A row in [`ccna-deferral-manifest.md`](ccna-deferral-manifest.md) with source topic, destination topic, question IDs, and rationale
2. The question staged in Topic B's `questionBank` (or a planned gap noted with target wave)

Exam coverage is preserved across the **full cert**, not within a single topic in isolation.

---

## Sign-off

Record in [`.cursor/plans/ccna-pedagogy-audits/wave-*.md`](../.cursor/plans/ccna-pedagogy-audits/):

- **Topic Complete:** YES / NO
- **Signed off by:** Michael
- **Date:**
- **Notes:** Any remaining PARTIAL items or known gaps

---

## Related docs

- [`bridge-learning-standard.md`](bridge-learning-standard.md) — BLS rules (what "aligned" means)
- [`learning-experience-standard.md`](learning-experience-standard.md) — LES storyboard rules
- [`ccna-deferral-manifest.md`](ccna-deferral-manifest.md) — relocated assessment items
- [`phase-5-ai-learning.md`](phase-5-ai-learning.md) — Professor Mode spec
- [`reference-experiences.md`](reference-experiences.md) — reference topic bar
