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

## Production information architecture

The prototype's nine screens are visual directions, not a replacement route map. Production keeps the learning hierarchy explicit:

`Focus → Library → Track → Lesson → Activity → Evidence → Review`

### Primary learner navigation

| Destination | Product job | Initial route mapping |
| --- | --- | --- |
| Focus | Decide and launch the learner's next best action | `/` |
| Library | Discover, search, and resume tracks across subjects | `/certifications` |
| Review | Maintain recall and reopen fragile concepts | `/review` |
| Progress | Inspect usable knowledge and evidence | `/progress` |
| Knowledge | Explore the learner's connected concept model | Future top-level route after the 2D graph is proven |

Desktop may expose Practice, assigned Labs, Notes, and future Professor tools in the rail. Mobile must stay at four or five primary destinations; secondary tools belong in contextual actions or an overflow/profile surface.

### Route coverage and required design templates

| Existing or planned route | Required production screen | Prototype coverage | Action before implementation |
| --- | --- | --- | --- |
| `/` | Focus dashboard | Strong | First reference implementation |
| `/certifications` | Library / Explore | Covered | Map the row-based library to the registry and current-track state |
| `/cert/[certId]` | Track detail / curriculum | Covered | Bind pathway/version, domains/modules, progress, and next action |
| `/cert/[certId]/lesson/[topicId]` | Lesson workspace | Covered | Bind lesson content, checks, notes, and next-activity handoff |
| `/cert/[certId]/quiz/[topicId]` | Quiz activity | Covered | Preserve current grading and evidence behavior inside the activity shell |
| `/cert/[certId]/flashcards/[topicId]` | Flashcard activity | Covered | Preserve reveal/confidence logic and add keyboard/touch controls |
| `/cert/[certId]/assignment/[assignmentId]` | Assignment workspace | Covered | Bind brief, success contract, response, submission, and retry state |
| `/cert/[certId]/simulator/[simulatorId]` | Simulator workspace | Covered | Bind task pane, environment, validation, hints, and evidence capture |
| `/cert/[certId]/tool/[toolId]` | External tool guide | Covered | Keep setup, assignment, and return-to-ReLearn evidence in one flow |
| `/cert/[certId]/domain-review/[domainId]` | Domain review | Covered | Bind domain readiness, gaps, and recommended proof |
| `/review/session` | Review session | Covered | Keep the queue overview separate from focused retrieval |
| `/labs/relearn-vm` | Assigned environment | Covered | Bind real availability and keep planned capabilities visibly unavailable |
| `/career/[path]` and journey/scenario routes | Career path experience | Reference template | Expand scenario detail after the core track/activity system is stable |
| onboarding/study-plan flow | Track selection and plan setup | Reference template | Extend the focused study-rhythm step using current onboarding behavior |
| settings/profile | Preferences, theme, sync, offline, notifications | Reference template | Expand utility sections only when their underlying capability exists |

The expanded prototype contains 20 navigable states: Focus, Library, Track Detail, Lesson, Quiz, Flashcards, Assignment, Simulator, Tool Guide, Domain Review, Review, Review Session, Knowledge, Practice, Assigned Labs, Progress, Career Path, Onboarding, lesson-local Notes, and Settings.

## Product boundaries

### Build now

- Semantic tokens and responsive shell
- Focus using current planner and coaching data
- Library, Track Detail, Lesson, Review, Review Session, and Progress
- Existing activity engines restyled through shared activity-shell patterns
- A performant accessible 2D Knowledge surface before optional 3D enhancement
- Rule-based Professor Insight components when supported by real learner evidence

### Defer or feature-flag

- Full AI Professor chat remains a Phase 5 feature and must not be represented as live functionality.
- Spline is an optional enhancement layer, never a required dependency for navigation or comprehension.
- Notes remain lesson-local until persistence, ownership, sync, search, and export behavior are approved.
- Native wrappers remain later work; the web implementation must be responsive and touch-ready now.
- Planned tracks, device bridges, environments, and downloads must be visibly labeled and cannot appear runnable.

### Do not build

- A generic external-resources or random-tools catalog
- A second practice engine that duplicates quiz, flashcard, assignment, simulator, or review logic
- Nine equally weighted mobile destinations
- Dashboard card grids copied onto every route
- AI-generated coaching claims without traceable learner evidence

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

1. Introduce semantic CSS variables and shared shell primitives behind the current routes without changing stores or curriculum behavior.
2. Implement the dashboard/Focus route as the reference screen using real planner and coaching data.
3. Port the core learning hierarchy: Library → Track Detail → Lesson.
4. Port Review overview, Review Session, and Progress.
5. Apply a shared activity shell to Quiz, Flashcards, Assignment, Simulator, Tool Guide, and Domain Review while preserving each activity's distinct interaction.
6. Add the 2D Knowledge surface, Practice aggregation, and assigned Lab environments.
7. Design career-path templates after the track/activity hierarchy is proven.
8. Add Notes, full Professor, light theme, Spline, and native packaging only after their product gates are approved.

## Porting readiness decision

The visual system and Focus screen are ready to enter production implementation. The prototype is not approved for a one-to-one route replacement.

Production work may begin when the first implementation PR is limited to:

1. semantic design tokens,
2. responsive application shell,
3. Focus dashboard mapped to existing data and actions, and
4. regression coverage proving the current learner loop and persisted progress remain intact.

Library and downstream route implementations should follow only after their design templates are reviewed. This prevents a visual redesign from accidentally deleting product capability.

## Acceptance checks for implementation

- Existing study loop remains intact: lesson → quiz → simulator/assignment → review.
- Progress-store schema and persisted key are unchanged unless separately approved.
- Current curriculum and mastery computations remain the source of truth.
- Each route uses its own information structure while clearly belonging to the same app.
- Keyboard focus, contrast, reduced motion, and mobile touch targets pass review.
- Build, curriculum verification, production verification, gap report, and TypeScript checks pass before PR merge.
