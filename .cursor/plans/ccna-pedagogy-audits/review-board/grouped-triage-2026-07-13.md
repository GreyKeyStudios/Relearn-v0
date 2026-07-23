# Grouped CCNA triage — 2026-07-13

**Audit batch:** `2026-07-14-full` (222 findings: 6 HIGH · 190 MEDIUM · 26 LOW)  
**Source:** ChatGPT pedagogy triage of `reports/ccna-chatgpt-triage.md`  
**Rule:** Collapse duplicates into shared fixes. Do not treat 222 rows as 222 decision tickets.

Label map: IMPLEMENT → **Ship Before Sign-off** · DEFER → **Improve Later** · SKIP → **Intentional Design**

---

## Ship Before Sign-off (before Michael walkthrough)

### 1. Shared practice-hub progressive disclosure (cross-topic)

Repeated hub-density / completion-next findings across nearly every topic. **One shared UI fix**, not topic edits.

- Keep Practice path + primary CTA visible.
- Collapse secondary blocks (Deep Dive already collapsed; wrap Objectives, Assignments; collapse What’s Next on hub).
- Do not open per-topic PRs for hub chrome.

### 2. Actual teach-before-test violations

Only genuine gaps — verify before editing:

| Topic | Suspected issue |
|-------|-----------------|
| Network Security | CIA triad asked before properly taught (quiz bank / early order vs LES) |
| Automation | SDN / control-plane terminology tested without enough prior instruction |
| OSI | Answer / mnemonic exposed above ordering checkpoint (`PDNTSPA` + `showFullStack`) |
| Others | Only if tested concept truly absent earlier in the lesson |

### 3. Wrong-answer explanations that omit key reasoning

Feedback that restates the answer or uses letter shortcuts:

- Subnetting: `/26 → 64`, range boundaries, host bits, `−2`
- Ethernet: Layer 1 vs Layer 2
- Switching: FCS / store-and-forward; unknown-unicast flooding
- ACL: “B” instead of answer text
- IPv4: four octets × eight bits
- IPv6: hextet definition
- Anything else that merely restates the correct choice

Style: why correct + brief misconception contrast. Not an essay on every absurd distractor.

### 4. Subnetting pacing (milestones only)

HIGH `subnetting__lesson-overall__pacing__c6e11f7a` — **scoped**: resumable section markers / recap breaks / visible milestones so ~56 advances feel like chapters. **Not** a full rewrite or topic split tonight. Length split deferred to walkthrough.

---

## Improve Later (walkthrough decides)

| Theme | Notes |
|-------|-------|
| Other 5 HIGH pacing (NAT, OSI, OSPF, STP, Switching) | Model infers step-count overload; human fatigue is the judge |
| Lesson “too long” for Ethernet, IPv4, Wireless, etc. | Same |
| More animations / sims / drag-and-drop variety | Real desire; not blocking |
| Embedded prerequisite mini-lessons catalog-wide | Real; post–sign-off |
| Distractors that are easy rather than misleading | Sweep later |
| Explicit learning-objective text on every first screen | Heuristic noise unless a topic genuinely needs it |
| Quiz hints before submission everywhere | Allowed to test recall without teaching beside the item |

---

## Intentional Design (do not re-open)

| Theme | Reason |
|-------|--------|
| “Learner may not know whether to read or tap Continue” | Normal lesson nav already present |
| “Every quiz question needs context or a hint” | Quizzes may test recall |
| “Explain why every distractor is wrong” | Only for plausible misconceptions |
| Positive observations phrased as “maintain X” | Not findings |
| Soft clarity score 3 because opening text is short | Mechanical scoring, not learner harm |
| Blanket “weak arithmetic foundations” tying unrelated lessons | Overreach |
| Auto-split every lesson over an arbitrary step count | Reject heuristic; walkthrough decides |

---

## Ledger cross-ref

HIGH finding decisions live in [`decision-log.md`](decision-log.md). Shared themes above are the promotion rules for MEDIUM noise — do not dump all MEDIUM/LOW into the ledger.
