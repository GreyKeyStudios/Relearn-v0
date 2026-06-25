# Python Learner Research — Field Notes

**Status:** Active during external Python course  
**Owner:** Michael  
**Purpose:** Capture direct learner experience to inform Bridge Phase 7 (Python Foundations) curriculum  
**Gate:** Phase 7 content agents must not start until this document has substantive entries from course completion

---

## How to use this document

1. Add **one section per lesson** in your paid Python course (copy the template below).
2. Fill it out **immediately after** each lesson while memory is fresh.
3. Record **frustrations and moments of delight** — both are curriculum research.
   - Frustrations → what to fix or cut.
   - Delight → what to reproduce in Bridge.
4. Review this entire document before any Phase 7 planning or content work begins.

**Rule:** The version of you studying the course is doing curriculum research for future-you. Six months from now you will forget half of these frustrations — and half of the breakthrough moments. Capture both while they are fresh.

---

## Course metadata

| Field | Value |
|---|---|
| Course name | |
| Provider / URL | |
| Start date | |
| Target completion | |
| Prior Bridge tracks completed | e.g. CCNA in progress, Security+ started |

---

## Lesson template (copy for each lesson)

```markdown
## Lesson: [title]
**Date:**
**Module / chapter:**

### Confusing concepts
- 

### Moments of delight
(The "ohhh, now I get it" moments — these are as important as frustrations)

| Finally understood | Why it clicked | Reproduce in Bridge |
|---|---|---|
| e.g. List comprehensions | Instructor showed before/after versions side by side | Lesson: imperative loop first, then refactor; Code Lab: predict-output on both |
| | | |

### What clicked (quick notes)
- 

### Better analogy
(If the course explanation was weak, what would have helped?)

### Exercises worth keeping
- 

### Exercises to improve
- 

### Things beginners always get wrong
- 

### Ideas for Bridge
(Code lab type, project idea, quiz angle, debug challenge, etc.)

### Time spent
(minutes)

### Would I pay for this lesson standalone?
(yes / no / maybe — why?)
```

---

## Lesson entries

<!-- Add entries below as you complete each lesson -->

### Example entry (delete when you add real entries)

## Lesson: Variables and print()
**Date:** 2026-01-15  
**Module / chapter:** 1 — Getting Started

### Confusing concepts
- Difference between `input()` return type and when to cast to `int`

### Moments of delight

| Finally understood | Why it clicked | Reproduce in Bridge |
|---|---|---|
| f-strings | Immediately useful for debugging real output | Show broken `print(a, b)` then f-string fix on same screen |

### What clicked (quick notes)
- f-strings felt useful right away for seeing variable values

### Better analogy
- Variables as labeled boxes, not "containers that hold values" (too abstract)

### Exercises worth keeping
- Temperature converter (C to F)

### Exercises to improve
- Five identical `print("Hello")` variations with no progression

### Things beginners always get wrong
- Forgetting quotes around strings in `print`

### Ideas for Bridge
- `predict-output` lab: what prints when `x = 3` then `print(x + "2")`?

### Time spent
25 min

### Would I pay for this lesson standalone?
maybe — converter exercise was good; intro video was too long

---

## End-of-course synthesis (fill when course is complete)

### Top 5 concepts that should be taught earlier
1. 
2. 
3. 
4. 
5. 

### Top 5 concepts that should be taught later (or cut)
1. 
2. 
3. 
4. 
5. 

### Top 5 moments of delight to reproduce
(Concept + teaching technique + Bridge idea for each)

1. 
2. 
3. 
4. 
5. 

### Teaching techniques that worked
(e.g. before/after, worked example, predict-then-run, build-up from broken code)

- 

### Best exercises from the entire course
- 

### Worst exercises / wasted time
- 

### Projects I wish existed during the course
- 

### "Would I have paid for Bridge Python?" benchmark
(Answer after completing CCNA + this course + reviewing Bridge cert UX)

| Question | Answer |
|---|---|
| Would past-me pay for this Python track? | |
| What would make the answer "yes"? | |
| What must Bridge do better than the paid course? | |

---

## Sign-off (required before Phase 7 implementation)

- [ ] All lessons logged
- [ ] Delight moments captured (not only frustrations)
- [ ] End-of-course synthesis complete
- [ ] Reviewed with `docs/python-learning-architecture.md`
- [ ] Master Agent approval to open Phase 7 implementation gate
