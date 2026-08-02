# ReLearn v0 — A+ completion and learner audit

Date: 2026-08-01

## Outcome

The CompTIA A+ 220-1201/220-1202 curriculum now has first-pass teaching coverage for every registered objective, including domain integrations and remediation routing. A+ is marked `first-pass`; it is intentionally not Ready or Available. CCNA C1 remains fenced. Gold LES conversion was not started.

## Curriculum delivered

- Core 2 Software Troubleshooting: AP1202-3.1 through AP1202-3.4 plus domain integration.
- Core 2 Operational Procedures: AP1202-4.1 through AP1202-4.10 plus domain integration.
- Final A+ catalog: 9 domains, 72 topics.
- Objective coverage verifier now requires every registered A+ objective to have a teaching topic in the correct domain.
- Operational Procedures remediation routes were added for AP1202-4.1 through AP1202-4.10.

## Learner walkthrough

Walked onboarding, course selection, weekly-plan setup, dashboard, course catalog, A+ course overview, lesson player, checkpoints, completed-topic hub, quiz failure, retry/remediation, objective drill, weak-topic navigation, flashcard and assignment entry points, domain review, review dashboard, progress dashboard, and route/state persistence.

Representative lesson pages were inspected for every active course: CCNA, Computer Basics, Git/GitHub, PowerShell, Synthesis, VM Lab, and A+. The A+ overview, lesson, quiz, flashcard, assignment, domain-review, and bank-drill surfaces were exercised. The automated CCNA mobile audit completed all 21 topics at 390×844 with no walk stalls or hard UX warnings.

## Clear defects fixed

1. A+ opened all nine domains at once, creating an unnecessarily long page. It now expands only the first incomplete domain and exposes correct disclosure semantics with `aria-expanded` and `aria-controls`.
2. Quiz remediation exposed raw internal topic slugs. It now displays the learner-facing topic name and provides a direct weak-area lesson action.
3. Numerous A+ bank questions asked learners to select internal curriculum IDs instead of demonstrating technical knowledge. These were replaced with objective-aligned learner questions.
4. The objective verifier now rejects learner-facing answer choices that expose internal curriculum IDs.
5. The onboarding browser test expected obsolete “certification” copy after the product broadened to courses.
6. The curriculum audit title locator was ambiguous when a page contained duplicate same-name headings; it now asserts the level-one page title.

## Verification

- `npx tsc --noEmit`: pass.
- `npm run verify:curriculum -- --strict-aplus --strict-pedagogy --strict-experience`: pass.
- Strict A+: 72 topics, no CES warnings, all quiz/bank questions tagged against the objective registry.
- Assignment links, smoke paths, knowledge graph, scenarios, scenario scoring, and lab catalog: pass.
- CCNA pedagogy and experience gates: no warnings.
- `npm run test:e2e`: 54/54 pass.
- CCNA mobile curriculum audit: 21 pass, 0 warn, 0 fail, 0 lesson-walk stalls; average soft score 3.9/5.
- `npm run build`: pass; 1,608 static pages generated.

## Product decisions still requiring an owner

- Define the evidence threshold for moving A+ from `first-pass` to Ready/Available. Recommended minimum: an owner acceptance walk, device/browser matrix, and a scored A+ pilot cohort.
- Decide whether every active course needs the same full-topic automated mobile audit currently used by CCNA, or whether representative route coverage is sufficient for first-pass tracks.
- Decide when gold LES conversion begins and which A+ domain is the pilot. No conversion should begin before that decision and an explicit content-quality rubric.
- Decide whether WCAG conformance will be a formal release gate. Current work improved disclosure semantics and found no obvious sampled blockers, but it is not a formal WCAG audit with assistive-technology coverage.

## Remaining blockers and next steps

There is no code, build, curriculum-link, or automated learner-flow blocker for A+ first-pass. Promotion beyond first-pass is blocked by product acceptance criteria, broader device/assistive-technology validation, and the intentionally deferred gold LES decision.

Recommended next sequence:

1. Owner acceptance walkthrough of A+ on desktop and a physical phone.
2. Add a dedicated full-topic A+ mobile learner-audit suite modeled on the CCNA audit.
3. Run keyboard-only and screen-reader checks, then define the accessibility release gate.
4. Pilot A+ with learners and review misses, abandonment points, and remediation usefulness.
5. Authorize a bounded gold LES pilot only after the pilot evidence is reviewed.

