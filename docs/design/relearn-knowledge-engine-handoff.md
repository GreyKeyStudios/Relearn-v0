# ReLearn Knowledge Engine — Design Handoff

Status: approved visual direction, implementation not started  
Target: ReLearn v0 / Bridge Study Companion  
Prototype: `docs/design/relearn-app-system-prototype.html`

## Decision

Use the dark Knowledge Engine direction as ReLearn's visual foundation. The dashboard establishes the system, but other routes must not become copies of its card grid. Every surface inherits shared tokens and interaction language while using a structure appropriate to its learning job.

## Shared visual system

- Canvas: `#090B0D` / `#0A0A0A`
- Primary text: `#F4F1EA`
- Secondary text: `#9B9A96`
- Muted text: `#686A6E`
- Active/current: `#C89B58` with light gold `#E0BE86`
- Proven/durable: `#71B88A`
- Review/fragile: `#9B82D6`
- Misconception/risk: `#D4746B`
- Future/locked: `#526173`
- Typography: Inter for the application; restrained Playfair Display Italic only for rare editorial/Professor moments
- Depth: dark translucent working surfaces, quiet borders, restrained warm glow for meaningful interactive systems

These colors are semantic learning states, not decoration. A future light theme should preserve the same semantic roles through CSS variables rather than create a separate product identity.

## Shared application patterns

1. Desktop app rail and mobile bottom navigation
2. Next Best Action with an explicit reason for selection
3. Learning loop: Understand → Practice → Apply → Prove → Retain
4. Professor Insight tied to real learner evidence
5. Knowledge Core / concept graph with accessible 2D fallback and a future Spline enhancement layer
6. Mastery states that distinguish exposure, application, independent proof, and durable recall
7. Labs and simulations treated as first-class learning environments

## Route-specific structure

| Route family | Primary structure | Avoid |
| --- | --- | --- |
| Dashboard / Focus | Next action + Knowledge Core + today loop | Marketing hero and generic course cards |
| My Knowledge | Large concept canvas + selected-node inspector | Small decorative graph trapped in a card |
| Learn / Lesson | Curriculum rail + focused lesson workspace + lesson map | Dashboard metrics surrounding the lesson |
| Practice | Skill builders + adaptive practice prescription | Undifferentiated quiz tiles |
| Labs | Active environment + evidence contract + environment launcher | Random external-tool links |
| Review | Retrieval prompt + memory queue and intervals | Streak-first gamification |
| Professor | Context-aware conversation workspace + visible evidence context | Generic chatbot shell |
| Notes | Note list + writing surface + concept connections | Standalone text documents disconnected from learning |
| Progress | Evidence trends + Professor readout + mastery ledger | Completion percentage as the primary result |

## Mobile rules

- Keep the learning task first; supporting evidence follows.
- Replace the desktop rail with a five-destination bottom navigation and an overflow destination for secondary tools.
- Stack split workspaces deliberately; do not shrink desktop grids into tiny cards.
- Knowledge Core defaults to a compact 2D summary with an explicit open-map action.
- Professor context becomes a drawer or sheet.
- Minimum touch target: 44px.
- Spline and ambient motion must be optional, lazy-loaded, and reduced-motion aware.

## Prototype boundaries

The prototype is a design artifact with static representative data. It does not replace current production routes, progress logic, curriculum content, stores, mastery calculations, or simulator contracts. Professor is represented as a future interaction consistent with the approved product vision; Phase 5 implementation remains gated by `BRIDGE_MASTER.md`.

## Recommended implementation sequence

1. Introduce semantic CSS variables and shared shell primitives behind the current routes.
2. Implement the dashboard/Focus route as the reference screen.
3. Apply the system to existing production routes: certifications, cert detail, lesson, review, progress, simulator shell.
4. Extract reusable Professor Insight, Mastery State, Learning Loop, and Knowledge Surface components only after the first production route proves their props.
5. Perform mobile walkthroughs before adding Spline.
6. Add the future light theme through the same semantic tokens.

## Acceptance checks for implementation

- Existing study loop remains intact: lesson → quiz → simulator/assignment → review.
- Progress-store schema and persisted key are unchanged unless separately approved.
- Current curriculum and mastery computations remain the source of truth.
- Each route uses its own information structure while clearly belonging to the same app.
- Keyboard focus, contrast, reduced motion, and mobile touch targets pass review.
- Build, curriculum verification, production verification, gap report, and TypeScript checks pass before PR merge.
