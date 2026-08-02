# Type C Master — Tool-Driven Course Template (Stub)

**Version:** 0.1 (stub)  
**Owner:** M0  
**Parent:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md)  
**Reference track:** TBD — candidates: **Wireshark** (network troubleshooting), **Excel** (IT reporting), or **Sound Synthesis** (creative Type C variant)

---

## Status

This document is a **placeholder** so Type C subjects do not inherit Type B command-drill patterns by mistake. Expand when the first Type C track enters active development (product Phase 3).

**Creative Type C candidate:** [`sound-synthesis-learning-architecture.md`](sound-synthesis-learning-architecture.md) — FL Studio labs, Challenge A (objective recreation) + Challenge B (subjective design), optional Go Deeper lanes. Not Break/Fix. Track id `sound-synthesis` (first-pass pilot registered).

---

## Philosophy

Type C courses teach **applications and workflows** — not exam recall (Type A) or raw syntax (Type B).

Learners need to complete **real tasks** in a tool: capture packets, build a pivot table, run a Splunk search, configure VS Code for a project.

Success = **project outcome**, not quiz score alone.

---

## Canonical loop (draft)

```text
Tool overview
  ↓
Guided walkthrough (screens / steps)
  ↓
Practice task (checklist)
  ↓
Independent task (rubric)
  ↓
Mini project
  ↓
Capstone project
  ↓
Professor Mode — walk through solving the task step-by-step
```

---

## Artifacts (draft)

| Artifact | Type C purpose |
|----------|----------------|
| `lesson.content` | Where to click / what to configure; screenshots or step list |
| `guidedExample` | End-to-end task with expected result |
| `assignments` | external-lab or future in-app tool UI |
| `completionCriteria` | Rubric-style observable outcomes |
| `realWorldScenario` | Workplace task (ticket, report, investigation) |
| Quiz | Tool knowledge + "what would you do next" — lighter weight than Type A |

Type C may reuse fewer flashcards and question bank items than Type A/B.

---

## Delivery notes

- **Today:** external-lab assignments ("do this in Wireshark / Excel on your PC")
- **Future:** embedded tool UI or checklist runner in ReLearn
- **Not Type B:** Do not force Break/Fix command syntax unless the tool has a CLI (then hybrid B/C)

---

## Reference track selection (when ready)

Pick one tool Michael uses weekly. Criteria:

1. High job relevance for target learners
2. Clear rubric for "task complete"
3. Free or low-cost tool access
4. Reusable assignment pattern for sibling tools

Document choice in `BRIDGE_MASTER.md` §Reference tracks when assigned.

---

## Related

- [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) — template taxonomy
- [`definition-of-done.md`](definition-of-done.md) — Type C variant (stub)
- [`subject-onboarding-process.md`](subject-onboarding-process.md) — Step 0 template selection
- [`sound-synthesis-learning-architecture.md`](sound-synthesis-learning-architecture.md) — creative Type C candidate (FL Studio)
