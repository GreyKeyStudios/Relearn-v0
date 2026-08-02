# Sound Synthesis — Learning Architecture

**Status:** Phase 1–2 pilot live (first-pass) — M0 + M1 (8 topics); ReLearn Synth S1.3 focused-workspace foundation live; WAVs and later modules gated
**Updated:** 2026-08-02 — lesson focus, protected references, bounded undo, and validated patch transfer live
**Tier:** ReLearn Creative Production (Type C tool track; catalog alongside Tier 3 tool skills)  
**Track type:** Skills track — **Type C (tool)** with Challenge A/B (**Recreate** / **Interpret** in learner UI)  
**Track ID:** `sound-synthesis`  
**Short name:** Synthesis  
**Vendor (Path A):** `ReLearn`  
**Practice DAW:** FL Studio (learner-owned; stock plugins only)  
**Teaching instrument:** ReLearn Synth (in-browser; phased build)
**Related:** [`TYPE_C_MASTER.md`](TYPE_C_MASTER.md) · [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) · [`subject-onboarding-process.md`](subject-onboarding-process.md) · [`phase-5-ai-learning.md`](phase-5-ai-learning.md) · [`definition-of-done.md`](definition-of-done.md)

---

## Why this track exists

Most synthesis courses teach **what the knobs do**.

This track teaches **how to think like a sound designer** — and optionally why the physics and math underneath make those knobs work.

```text
Hear → Predict → Change one thing → Hear again → Name what happened
         ↓
   Challenge A · Recreate      Challenge B · Interpret
         (craft)                    (imagination)
         ↓                              ↓
   Match audible traits         Justify design choices
```

FL Studio is the **transfer and production environment**, not the subject. ReLearn Synth is the primary teaching instrument: it provides stable starting states, visible signal flow, safe output, and parameter-level checks. Concepts must transfer to any synth, so each method returns to FL Studio with stock plugins. Learners never need Serum, Vital, or paid third-party suites.

**ReLearn Synth is not a DAW.** It is a browser-based instructional instrument. It teaches and checks synthesis concepts; FL Studio teaches real production workflow, including plugin loading, MIDI/audio routing, automation, saving, and rendering. Existing assignments remain valid external FL Studio labs while the teaching instrument is built.

---

## Template choice

| Aspect | Choice | Why |
|--------|--------|-----|
| Primary template | **Type C (Tool)** | Real tasks in FL Studio; success = project outcome |
| Creative loop | **Challenge A (Recreate) + Challenge B (Interpret)** | Objective recreation + subjective design (not Type B Break/Fix). Architecture keeps A/B; learner UI uses Recreate / Interpret. |
| Concept delivery | LES-style experiences + ear training | Borrow Type A/B “predict before change” |
| Optional depth | **Go Deeper** lanes | Physics / math / DSP / history — never required for completion |
| Not Type B | — | No command syntax Break/Fix |
| Not Type A | — | Not an exam-recall cert |

This track is a **candidate creative Type C reference** once Michael signs the architecture. Until Type C graduates a primary reference (Wireshark / Excel / this track), keep pedagogy contracts here — do not invent schema without Platform.

---

## Subject onboarding checklist

| # | Question | Answer |
|---|---|---|
| 1 | **Why teach this?** | Differentiates ReLearn: interdisciplinary sound design (ears + optional STEM). Connects music producers to physics/math without requiring an engineering degree. High delight density (“wait — that’s why that bass sounded like that”). |
| 2 | **Who is it for?** | Returning music producers with prior DAW exposure but years away from synthesis; comfortable with computers; not advanced DSP/math. Intuition first, technical explanations second. |
| 3 | **Prerequisites (other tracks)?** | None required. Optional: basic computer literacy (CF). FL Studio installed (any modern edition with stock synths). Headphones or monitors strongly recommended. |
| 4 | **How is success measured?** | Can **Recreate** (Challenge A) recognizable synth traits from a checklist; can **Interpret** (Challenge B) a creative prompt and justify every design choice; can identify common waveforms / filter / resonance by ear; capstone sound pack built from synthesis only. |
| 5 | **Activity types** | LES lesson · ear-training quiz · flashcards · external-lab (Recreate / Interpret) · teacher audio demos (A/B/C/D ladder) · optional Go Deeper reading · module / track capstones |
| 6 | **Lab / simulator types** | **ReLearn Synth exercises** for controlled audition, prediction, parameter inspection, and objective checks; **external FL Studio labs** for workflow transfer. In-app `audio` / `audio-ab` LES media remains useful. No automated creativity score; post-MVP AI Listening may provide non-authoritative feedback. |
| 7 | **Different from certs** | Creation + ear craft, not recall. Loop: Hear → Predict → Patch → Recreate / Interpret. Dual assessment: craft vs imagination. |
| 8 | **Engine mapping** | Reuse mastery, SRS, coach, planner, quiz, flashcards, assignments. Challenge A/B map to `Assignment` `external-lab` + `completionCriteria` + reflection prompts; learner-facing titles **Recreate** / **Interpret**. Planned (not built): `goDeeper`, `audio`/`audio-ab` media, AI Listening hooks under Phase 5. |
| 9 | **Tier** | Creative Production / Type C catalog (alongside Tier 3 tool skills). Not Tier 1 cert. |
| 10 | **Gate** | Phase 0 architecture must be signed. Content blocked until: (a) Michael approves this doc, (b) Platform schedules audio media / Go Deeper schema if pilot needs in-app demos. Teacher-rendered reference WAVs can ship with content once paths are agreed. |
| 11 | **Track type** | `skills` — Path A `Certification` shell with `vendor: "ReLearn"` (same as Git / VM Lab) until a dedicated `/track/` route exists |
| 12 | **Content location** | Future: `src/content/certifications/sound-synthesis.ts` (or `sound-synthesis/*.ts` assembler if large) + `src/content/lessons/ss-*-experience.ts` |
| 13 | **Route prefix** | `/cert/sound-synthesis` (Path A) until skills routes unify |
| 14 | **Phase** | Pathway S (Sound Synthesis) — Phase 0 architecture now; content after gate; AI Listening after Phase 5 |
| 15 | **Delight moments** | Wave Candy “seeing” pressure waves; sine→saw via harmonics; FM “one wave wobbles another”; grain clouds from a single recording; coffee-filter metaphor → resonance; history sidebars (DX7, TB-303); predict-before-hear on every demo ladder |

---

## Success definition

A learner finishes Sound Synthesis when they can:

1. Name and **hear** sine, triangle, saw, square, and noise — and predict what a filter / envelope / LFO will do before turning the knob  
2. Build subtractive, additive, FM, wavetable-style, and granular patches from **Init** (no preset tourism)  
3. Complete **Recreate** (Challenge A) using audible-trait checklists (not pixel-perfect clones)  
4. Complete **Interpret** (Challenge B) designs with intentional, written justification  
5. Capstone: design every sound for one themed pack (game level, horror ambience, cyberpunk city, etc.) **from synthesis only** (samples only as optional references, not the final source)

Success is **not** “watched tutorials” or “loaded presets.”

---

## Runtime decision (approved hybrid direction)

| Priority | Runtime | Role |
|----------|---------|------|
| **1** | **ReLearn Synth** (browser) | Primary teaching instrument — audition, predict, inspect, reset, compare, and objectively verify parameters |
| **2** | **FL Studio** (learner install) | Transfer and production environment — stock plugins only |
| **3** | Other DAWs | Out of scope for v1 instructions (concepts transfer; screenshots are FL) |

### ReLearn Synth teaching contract

The instrument must be understandable without prior synth or DAW experience and must provide:

- explicit audio-start consent, a safe output limiter, conservative default gain, and a panic/mute control;
- deterministic Init and lesson presets, reset, undo, A/B comparison, and shareable/saveable patch state;
- a visible signal path and parameter highlighting controlled by the current lesson;
- oscillator, mixer, filter/resonance, amplifier ADSR, LFO/modulation, oscilloscope, and spectrum views for the first subtractive release;
- keyboard, pointer, and touch operation with accessible names, visible focus, non-color status cues, and reduced-motion support;
- objective checks only where the target is measurable, such as waveform, frequency, envelope range, routing, modulation destination/depth, and approximate spectral shape;
- self-evaluation and written justification for subjective targets such as mood, warmth, aggression, beauty, or creative fit;
- clear messages for suspended audio, muted output, disconnected routing, clipping risk, unsupported browsers, and lost state.

The instrument must never claim to grade creativity or prove that two sounds are perceptually identical. A passing parameter check proves the requested configuration, not artistic quality.

### S1 delivered foundation

The first registered teaching instrument is `relearn-synth-subtractive`, assigned from `ss-m1-signal-path`. It currently provides:

- explicit user-started Web Audio with conservative gain, limiter, release-safe panic/mute, and actionable audio errors;
- monophonic sine, triangle, saw, and square sources with pitch control;
- low-pass cutoff/resonance and amplifier ADSR;
- live oscilloscope and spectrum views with a reduced-motion static fallback;
- deterministic Init and muted-pluck states in A/B slots, reset, versioned local persistence, and visible signal-path state;
- a five-part objective muted-saw-pluck check that requires actual audition before completion;
- pointer, touch, and keyboard controls with labeled ranges, visible values, non-color result text, and live status messaging.

S1 intentionally does **not** include an LFO/modulation matrix, polyphony/MIDI keyboard, patch export/import, undo history, lesson-driven parameter locking/highlighting, audio recording/rendering, additional synthesis engines, or subjective/AI listening scores. Those remain explicit later increments.

### S1.1 lesson-authored challenge layer

S1.1 makes the instrument reusable across lessons instead of hard-coding one exercise into its UI:

- the simulator route passes optional certification, topic, assignment, and simulator identity into registered components;
- authored challenge definitions select the brief, A/B starting states, assessed parameters, target ranges, weak concepts, and parameter-specific coaching;
- target controls are highlighted before checking and become explicitly met/adjust states afterward, with text as well as color;
- challenge state is versioned and persisted separately so one lesson cannot overwrite another lesson's patch;
- B is a guided comparison patch; learners may hear and inspect it, but must rebuild and complete the target in workspace A;
- `ss-m1-signal-path` uses the muted-saw-pluck definition, while `ss-m1-filter-resonance` uses the same instrument with a resonant-dark-saw definition.

This layer intentionally authors definitions in trusted course content. It does not accept arbitrary target expressions or executable grading logic from URLs or learner input.

### S1.2 keyboard, modulation, and ADSR transfer

S1.2 extends the subtractive instrument without changing its teaching contract:

- an eight-note C3–C4 keyboard is operable by pointer, touch, Enter, or Space and announces the active note;
- note buttons change oscillator pitch only while held, then return to the patch's authored base frequency;
- a sine LFO can modulate filter cutoff or oscillator pitch with adjustable rate and depth;
- filter modulation depth is capped relative to base cutoff, and pitch modulation is capped at one semitone;
- patch persistence moves to version 2 and migrates valid version 1 learner patches without losing their original oscillator, filter, gain, or ADSR settings;
- `ss-m1-adsr-envelope` adds a slow-pad challenge with four authored envelope targets and requires the learner to hear both the held and released note;
- the existing signal-path and filter challenges automatically receive the playable keyboard and modulation controls while keeping independent state.

S1.2 is still monophonic and intentionally does not request MIDI-device permission. Browser buttons teach note audition without creating a hardware or privacy dependency.

### S1.3 focused workspace and patch portability

S1.3 keeps the growing instrument teachable and makes learner work portable:

- every challenge declares visible `oscillator`, `filter`, `envelope`, and/or `modulation` panels;
- the default lesson view hides unrelated panels while preserving authored values, with a learner-controlled **Show all controls** exploration path;
- guided patch B is read-only at the control layer and cannot be reset, undone, imported into, exported as learner work, or used for completion;
- workspace A keeps at most 25 prior patch snapshots for bounded undo;
- workspace A exports an inspectable `relearn-synth-patch` version 2 JSON envelope and imports only validated parameters;
- import rejects empty, oversized, malformed, unsupported-version, incomplete, or out-of-range data and never evaluates code;
- imported patches can be undone immediately;
- the keyboard and patch-transfer interfaces are extracted from the main audio component into focused React components.

Text portability is the S1.3 contract. File download/upload and shareable URLs remain deferred until their filename, browser-permission, and privacy behavior are specified.

### Required learning transfer loop

Each synthesis method follows:

```text
Hear in ReLearn Synth
→ predict the change
→ change one parameter
→ inspect and explain the result
→ complete an objective configuration check
→ recreate the method in FL Studio
→ troubleshoot one broken patch or routing state
→ reflect on subjective choices
```

**Stock plugin priority list**

| Plugin | Role |
|--------|------|
| **3xOSC** | Waveform foundation; Week-1 / M0 lock-in |
| **Sytrus** | FM + flexible operator routing; subtractive / additive capable |
| **Harmless** | Clean subtractive |
| **Harmor** | Additive / spectral / wavetable-adjacent morphing |
| **FLEX** | Comparison only — never required for mastery |
| **Fruity Parametric EQ 2** | See spectrum / sculpt |
| **Fruity Filter** | Dedicated filter listening |
| **Wave Candy** | Constant visual ear training |
| **Edison** | Record, edit, analyze; granular-adjacent workflows |
| **Fruity Granulizer** | Granular synthesis (stock) |
| **Patcher** | Hybrid routing / modular thinking |

**Never assume** Serum, Vital, Massive, Pigments, or paid expansions. Mentions of third-party tools are **comparison only**.

### Honest stock gaps

| Method | Stock reality |
|--------|----------------|
| Subtractive / FM / additive | Excellent (3xOSC, Harmless, Sytrus, Harmor) |
| Wavetable | Harmor covers morphing / spectral; not a 1:1 Serum clone — teach the **idea**, then map to Harmor |
| Granular | Fruity Granulizer + Edison workflows |
| Physical modeling | Limited stock depth — teach the **idea** with whatever stock approximations exist; do not fake a full physical-model suite |
| Modular | Patcher for routing mindset; not Eurorack |

---

## Curriculum map

Module **IDs** follow **conceptual reference order** (M0–M7). Learners do **not** study modules in numeric order. Content agents must use the **recommended learner sequence** below when ordering domains, prerequisites, and “next lesson” links. Do not guess.

### Conceptual reference order (stable IDs)

These IDs never change. Additive remains `ss-m2-` and FM remains `ss-m3-` even though learners meet FM first.

| Module | ID prefix | Focus | Primary tools |
|--------|-----------|-------|---------------|
| **M0** | `ss-m0-` | Sound fundamentals — frequency, amplitude, phase, harmonics, waveforms, noise | Wave Candy, 3xOSC, Edison |
| **M1** | `ss-m1-` | Subtractive — osc → filter → ADSR → LFO | 3xOSC → Harmless / Sytrus, Fruity Filter, EQ 2 |
| **M2** | `ss-m2-` | Additive + Fourier intuition | Sytrus / Harmor |
| **M3** | `ss-m3-` | FM — operators, ratios, feedback | Sytrus |
| **M4** | `ss-m4-` | Wavetable / morphing waveforms | Harmor (+ FLEX compare optional) |
| **M5** | `ss-m5-` | Granular — grains, density, clouds, texture | Fruity Granulizer, Edison |
| **M6** | `ss-m6-` | Physical modeling — strings, reeds, membranes (concept + stock limits) | Best available stock; honest gaps |
| **M7** | `ss-m7-` | Hybrid synthesis + Patcher thinking | Patcher, combinations |
| **Capstone** | `ss-cap-` | Full themed sound pack from synthesis only | All prior |

**Topic count target:** ~24–36 topics (including challenges folded into topic assignments).  
**Estimated first-pass study hours:** 25–40 (heavy hands-on patching).

### Recommended learner sequence (locked)

```text
Fundamentals (M0)          — 3xOSC ONLY; no presets; no Sytrus yet
  → Subtractive (M1)
  → FM (M3)
  → Additive (M2)
  → Granular (M5)
  → Wavetable (M4)
  → Physical Modeling (M6)
  → Hybrid (M7)
  → Capstone
```

| Step | Module ID | Why this position |
|------|-----------|-------------------|
| 1 | M0 | Waveforms before any synthesis method |
| 2 | M1 | Clearest entry method (filter a rich wave) |
| 3 | M3 | High “physics returns”; builds on oscillator intuition |
| 4 | M2 | Fourier click after learners have heard rich / FM spectra |
| 5 | M5 | Delight spike — texture / time before morphing tables |
| 6 | M4 | Morphing makes more sense after additive + granular ears |
| 7 | M6 | Concept-heavy; stock gaps — after core methods |
| 8 | M7 | Combines prior methods in Patcher |
| 9 | Capstone | Full pack |

**Rule for content agents:** `prerequisites` and navigation follow this sequence, not M0→M1→M2→M3 numeric order.

### Explicit non-goals (v1 / MVP content)

- Plugin tourism or preset browsing as “learning”  
- Requiring paid third-party synths  
- Student audio upload / automated grading UI  
- Claiming the app can hear, grade, or score creativity  
- Advanced DSP homework or equation drills on the main path  
- Full Eurorack / modular curriculum  
- Music theory / composition track (separate future subject)  
- Mixing / mastering as primary scope (light mention only when a patch needs it)

---

## Dual challenge system (core pedagogy)

Every substantive topic ends with **two** challenges. In MVP content they are `Assignment` entries (`type: "external-lab"`) with structured `completionCriteria` and reflection prompts (`teacherReflectionPrompt` and/or instructions markdown).

| Architecture term | Learner-facing UI label | Purpose |
|-------------------|-------------------------|---------|
| **Challenge A** | **Recreate** | Craft — match recognizable audible traits |
| **Challenge B** | **Interpret** | Imagination — express a prompt; justify choices |

Content IDs and docs may say Challenge A/B. Buttons, headings, and assignment titles shown to learners must say **Recreate** and **Interpret**.

### Challenge A — Recreate (objective recreation)

**Goal:** Match recognizable characteristics of a known sound. Not perfection.

**Authoring contract (store on each Challenge A / Recreate):**

| Field | Purpose |
|-------|---------|
| `referenceAudioId` | Teacher-rendered reference clip ID (path under `public/media/sound-synthesis/` — see naming convention) |
| `targetMethod` | e.g. subtractive, FM, granular |
| `audibleTraitRubric[]` | Checklist of audible traits (not “sound identical”) |
| `expectedEnvelopeTraits` | Attack / decay / sustain / release notes |
| `expectedSpectralTraits` | Brightness, harmonic vs inharmonic, noise |
| `expectedPitchBehavior` | Static / glide / vibrato / drop |
| `relevantFlParameters` | Where to look in the assigned plugin |
| `acceptableVariation` | What may differ without failing the spirit |

**Example trait checklist — “make a bell”**

- Clear initial strike  
- Fast transient  
- Long decay  
- Inharmonic partials  
- Little or no sustain  
- Brightness fades over time  

**Self-eval (MVP):** learner renders locally, checks traits, notes what still sounds wrong. No upload.

**Example Recreate bank (assign per module as appropriate)**

DX7 electric piano · TB-303 bass · TR-808 kick · TR-909 snare · Moog bass · Stevie Wonder–style lead · Supersaw · FM bell · Organ · Brass · Flute · classic house stab

### Challenge B — Interpret (subjective design)

**Goal:** Express an idea through sound. No correct answer.

**Authoring contract:**

| Field | Purpose |
|-------|---------|
| `creativePrompt` | e.g. “ocean wave”, “rabbit”, “loneliness” |
| `intentQuestions[]` | What should the listener feel / imagine? |
| `suggestedApproaches[]` | Optional hints — never required |
| `reflectionRubric[]` | Must justify oscillator / filter / envelope / modulation choices |
| *(no acoustic target)* | Do not store a “correct” spectrum |

**Example Interpret prompt bank**

Ocean wave · broken glass · old VHS · rabbit · loneliness · electricity · rust · alien language · sunrise · underwater machinery · nostalgia · haunted toy · melting ice

### Ear training (every module)

Quiz / questionBank items such as:

- Which clip has more resonance?  
- Which oscillator is this?  
- Which filter was used?  
- Identify sine vs saw  

When Platform ships `audio` / `audio-ab` media, prefer in-lesson A/B listening. Until then, ear-training can use linked teacher files or described Wave Candy setups.

---

## Go Deeper (optional depth)

**Main path never requires equations.** Go Deeper is curiosity-only: no homework, no quizzes gated on depth lanes.

### Hard rule — reconnect to FL Studio

> **Every optional-depth section must reconnect to an audible or visible change in FL Studio.**

A Fourier explanation ends with “now add partials in Sytrus and watch Wave Candy,” not at an equation. A resonance physics note ends with “raise Res on Fruity Filter and listen for the whistle.” History sidebars still land on a patch or listening cue (“load Init Sytrus; set this ratio — that’s the DX7 bell family”).

If a Go Deeper draft cannot name a plugin control, Wave Candy view, or A/B demo stage to try next, rewrite it or cut it. No detached mini-textbooks.

### Lanes

| Lane | Intent |
|------|--------|
| **Physics** | Pressure waves, compression/rarefaction, resonance, standing waves, interference |
| **Math** | Sine as simplest repeating motion; ratios; Fourier intuition without textbook proofs |
| **DSP** | Sample rate, Nyquist, aliasing, oversampling, why cheap plugins crunch |
| **Electricity** | Coil → cone → air → ear (how a speaker works) |
| **History** | DX7, TB-303 accident, FM radio naming, vinyl coloration, Auto-Tune intuition |
| **Philosophy** | Tiny non-preachy lines (“Music is organized vibration.”) — still end with one listening or looking cue when possible |
| **Code** (future) | Optional pseudocode / tiny DSP sketches — post-MVP; still map to a hearable demo |

### Authoring / UI intent

- Phase 0: lanes authored as contracts in topic outlines inside this doc / future content comments  
- Phase 1 (Platform): planned `Topic.goDeeper?: { id, title, kind, body, flReconnect: string }[]` rendered as hub disclosures / chips beside `TopicDeepDive` (`flReconnect` = the audible/visible FL Studio next step)  
- Do **not** overload LES `laterLearn` for this — `laterLearn` means **defer**, not optional depth now  

Learners can finish the entire track without opening a single Go Deeper lane — or spend hours on one lesson.

---

## Audio demonstration system (teacher assets)

Every major concept plans a **demonstration ladder**. Sound is the evidence; words explain what ears already noticed.

### Per-demo checklist

1. Learning goal  
2. FL Studio plugin and Init patch  
3. Exact parameter change (one controlled variable)  
4. Audio files to render (stages A–D)  
5. What the student should listen for  
6. What Wave Candy should reveal  
7. Optional Go Deeper links (physics / math / DSP / history) — each must obey the FL reconnect rule  
8. Loudness-matched renders across stages (see below)

### Stage progression

| Stage code | `stage` field | Role |
|------------|---------------|------|
| **a** | `baseline` | Baseline |
| **b** | `changed` | One controlled change |
| **c** | `exaggerated` | Exaggerated version |
| **d** | `musical` | Musical-context version |

**Example — filter resonance**

- a / baseline: Saw, filter fully open  
- b / changed: Low-pass closing, resonance low  
- c / exaggerated: Same sweep, resonance high  
- d / musical: Resonant sweep in a short bass phrase  

Always ask the learner to **predict** before hearing the next step.

### File naming convention (locked now — files not created yet)

```text
{module}-{topic}-{demo}-{stage}-{stageName}.wav

stage:     a | b | c | d
stageName: baseline | one-change | exaggerated | musical
```

Examples:

```text
m1-filter-resonance-a-baseline.wav
m1-filter-resonance-b-one-change.wav
m1-filter-resonance-c-exaggerated.wav
m1-filter-resonance-d-musical.wav
```

Directory layout:

```text
public/media/sound-synthesis/
  m0/
  m1/
    m1-filter-resonance-a-baseline.wav
    m1-filter-resonance-b-one-change.wav
    m1-filter-resonance-c-exaggerated.wav
    m1-filter-resonance-d-musical.wav
  m2/
  ...
```

### Demo metadata contract (planned — Platform / content when assets ship)

Each rendered stage carries metadata (schema ships with Phase 1 audio media; author to this shape now):

```ts
{
  conceptId: "filter-resonance",
  stage: "baseline" | "changed" | "exaggerated" | "musical",
  plugin: "Fruity Filter",
  sampleRate: 44100,
  loudnessMatched: true
}
```

**Loudness matching is mandatory across a demo ladder.** “B sounds better” often secretly means “B is louder.” Match perceived loudness (e.g. LUFS / peak-normalized consistently within a concept) before publishing. Set `loudnessMatched: true` only when verified.

Stable IDs / filenames are referenced from challenges and future LES media. **Phase 0 does not add files or media kinds.**

---

## Student submissions and feedback (MVP honesty)

**Do not require audio uploads** unless the platform includes real analysis.

**Default MVP mode**

- Students render and save work locally in FL Studio  
- Guided self-evaluation  
- Challenge A (**Recreate**): audible-trait checklists  
- Challenge B (**Interpret**): design-intent reflection  
- Optional screenshots of plugin settings (honor system)  

**Do not claim** the course can hear, grade, or analyze student audio.  
**Do not build** an upload UI that implies feedback is available.

---

## AI Listening and Synthesis Feedback — Post-MVP

Planned feature name: **AI Listening and Synthesis Feedback**  
Depends on: overall app AI layer ([`phase-5-ai-learning.md`](phase-5-ai-learning.md))  
**Do not implement in initial content release.**

### Future workflow

1. Student uploads or records a submission  
2. App extracts defensible features (duration, envelope, attack/decay, loudness, pitch contour, spectrum, spectral centroid, harmonicity/noisiness, transient traits, stereo width)  
3. Objective exercises: compare measurements to reference + audible-trait rubric  
4. AI converts differences into plain-language musical observations, likely synthesis causes, and specific FL Studio adjustments  
5. Subjective exercises: **do not** judge whether the interpretation is “correct”; evaluate whether stated intention matches technical decisions; ask useful follow-ups  

**Example future feedback**

> Your bell has a clear transient and long decay, but it is darker than the reference because its upper partials fade more quickly. Try increasing the FM modulation amount and shortening the modulator’s decay.

**Forbidden**

- Fake precision scores (“82% accurate”, “creativity 7.4”)

### Architecture preparation

Keep analysis modular so it can attach without rewriting the course engine.

| Future module | Role |
|---------------|------|
| Audio upload / storage | Intake |
| Feature extraction service | Measurements |
| Reference comparison service | Diff vs rubric |
| AI feedback interpreter | Natural language |
| FL Studio recommendation mapper | Actionable knob advice |
| Instructor review / override | Human escape hatch |

Challenge A/B authoring contracts above are intentionally analysis-ready.

---

## Learning loop (Type C creative variant)

```text
Concept (LES / Wave Candy)
  ↓
Predict what will happen
  ↓
Guided patch in FL (Init → one change)
  ↓
Teacher A/B/C/D audio demo
  ↓
Ear-training check
  ↓
Challenge A Recreate (objective traits) + Challenge B Interpret (subjective intent)
  ↓
Optional Go Deeper lanes (must reconnect to FL Studio)
  ↓
Module mini-project → Track capstone
  ↓
Professor Mode (future) — explain the patch and recover from a broken one
```

---

## Capstone projects (examples)

Design every sound for one of:

- An entire game level  
- Horror ambience pack  
- Cyberpunk city  
- Forest at night  
- Retro arcade  
- Spaceship interior  
- Sci-fi UI  
- Cinematic trailer  

**Rule:** synthesis only. Samples only as optional reference listening.

---

## Course tone

Curious. Playful. Deep. Hands-on.

Constantly ask students to **predict** before changing parameters.

---

## Implementation phases

| Phase | Work | Status |
|-------|------|--------|
| **0** | This architecture + planned-tracks + BRIDGE pointers | **Done** |
| **1** | Platform: `audio` / `audio-ab` LES media; `goDeeper`; `teacherReflectionPrompt` hub UI; `synthesis-signal-path` anchor | **Done** |
| **2** | M0 + M1 pilot topics, Recreate / Interpret labs (WAV renders still pending) | **Done (first-pass)** |
| **3** | M2–M7 + capstones | Gated |
| **4** | AI Listening after Phase 5 AI layer exists | Post-MVP |

```text
Phase0_Architecture → Phase1_Schema_AudioMedia → Phase2_M0_M1_Pilot → Phase3_Modules → Phase4_AI_Listening
```

### Content file conventions (when unblocked)

| Artifact | Convention |
|----------|------------|
| Track id | `sound-synthesis` |
| Topic IDs | `ss-…` |
| Objectives | `SS-M0N-O#` |
| Cert file | `src/content/certifications/sound-synthesis.ts` (or split assembler) |
| Experiences | `src/content/lessons/ss-*-experience.ts` |
| Lab IDs | `ss-lab-…` |
| Media | `public/media/sound-synthesis/…` |
| Status | `planned-tracks.ts` until first-pass; then `registry.ts` + `track-status.ts` |

### Ownership

| Area | Owner |
|------|--------|
| This architecture doc | M0 |
| Future cert / lesson / challenge content | Per-track content agent (`P-Synthesis` when rostered) |
| `types.ts`, ExperienceMedia audio kinds, upload/AI services | Platform / Integrator only |
| `registry.ts`, `planned-tracks.ts`, `track-status.ts` | Integrator |

---

## Relationship to other tracks

| Track | Relationship |
|-------|----------------|
| **Computer Fundamentals** | Optional soft prereq (files, folders, audio ports literacy) |
| **Git / PowerShell / VM Lab** | Unrelated skill domain — no dependency |
| **Phase 5 AI** | AI Listening plugs into Professor / feedback modes when built |
| **Future music theory / production** | Separate subjects; this track owns **synthesis methods**, not songwriting |

---

## Appendix A — Cursor project prompt (source of truth for content agents)

Use this prompt when implementing curriculum after Phase 0 gates clear. Do not contradict MVP honesty rules above.

```text
Create a comprehensive, project-based synthesis course using FL Studio as the primary DAW.

Audience:
- Returning music producers with prior experience but years away from synthesis.
- Comfortable with computers but not advanced DSP or math.
- Wants intuition first, technical explanations second.
- Heavy emphasis on experimentation and ear training.

Teaching philosophy:

Do NOT teach plugins.
Teach concepts.
Every lesson should answer: "What is actually happening to the sound?"

Use FL Studio stock plugins whenever possible.

Primary plugins:
- 3xOSC
- Sytrus
- Harmor
- Harmless
- FLEX (only when useful for comparison)
- Fruity Parametric EQ 2
- Fruity Filter
- Wave Candy
- Edison
- Fruity Granulizer
- Patcher

Never assume expensive third-party plugins.

------------------------------------------------

COURSE STRUCTURE

Module 0 — Sound fundamentals
- frequency, amplitude, phase, harmonics, overtones
- sine, triangle, saw, square, noise
- Introduce Wave Candy constantly so students SEE what they hear.
- First teaching week: 3xOSC ONLY. No presets. No Sytrus yet.

Module 1 — Subtractive synthesis
- oscillators, mixer, gain, filters, resonance, ADSR, LFO, envelopes
- No presets. Everything starts from Init.

Module 2 — Additive synthesis
- Build complex sounds from sines (LEGO metaphor)
- Connect to Fourier analysis intuitively. No advanced math on the main path.

Module 3 — FM synthesis
- Operators, carriers, modulators, ratios, feedback
- Teach visually with Sytrus.

Module 4 — Wavetable
- Morphing waveforms; compare against subtractive and additive
- Harmor as primary stock vehicle; FLEX optional comparison.

Module 5 — Granular synthesis
- Time, grains, density, randomness, clouds, texture design
- Fruity Granulizer + Edison.

Module 6 — Physical modeling
- Mathematical simulation of strings, reeds, membranes
- Be honest about stock-plugin limits; teach the idea.

Module 7 — Hybrid synthesis
- Modern synths combine methods; Patcher routing mindset.

Capstone
- Design every sound for a themed pack from synthesis only.

First-pass / recommended learner sequence (locked):
M0 → M1 → M3 → M2 → M5 → M4 → M6 → M7 → Capstone
(Fundamentals → Subtractive → FM → Additive → Granular →
 Wavetable → Physical Modeling → Hybrid → Capstone)

Conceptual reference order for IDs stays M0–M7 as documented.
Do not navigate learners in numeric M2-before-M3 order.

------------------------------------------------

EVERY LESSON ENDS WITH TWO CHALLENGES

Architecture: Challenge A / Challenge B
Learner-facing UI labels: Recreate / Interpret

Challenge A — RECREATE (objective recreation)
- Reference clip + audible-trait checklist + guided self-eval
- Match recognizable characteristics. Not perfection.
- Examples: DX7 EP, TB-303, 808 kick, 909 snare, Moog bass,
  Stevie Wonder–style lead, supersaw, FM bell, organ, brass, flute

Challenge B — INTERPRET (subjective design)
- Prompt examples: ocean wave, broken glass, VHS, rabbit, loneliness,
  electricity, rust, alien language, sunrise, underwater machinery,
  nostalgia, haunted toy, melting ice
- No correct answer. Student must justify every design choice.

Every module also contains ear training quizzes.

------------------------------------------------

GO DEEPER (OPTIONAL)

Optional lanes per major concept: Physics, Math, DSP, Electricity,
History, Philosophy, (future) Code.
No homework. No quizzes gated on these lanes.
Main path never requires equations.

HARD RULE: Every optional-depth section must reconnect to an audible
or visible change in FL Studio. No detached mini-textbooks.
Example: Fourier explanation ends with "add partials in Sytrus and
watch Wave Candy."

------------------------------------------------

AUDIO EXAMPLE SYSTEM

Every major concept includes a plan for teacher-created audio demos.

For each demonstration, specify:
1. Learning goal
2. FL Studio plugin and initial patch
3. Exact parameter change
4. Audio files to render
5. What the student should listen for
6. What Wave Candy should reveal
7. Optional math, physics, DSP, and history connections (FL reconnect)
8. Loudness-matched stages (mandatory)

File naming (locked):
  {module}-{topic}-{demo}-{stage}-{stageName}.wav
  e.g. m1-filter-resonance-a-baseline.wav
       m1-filter-resonance-b-one-change.wav
       m1-filter-resonance-c-exaggerated.wav
       m1-filter-resonance-d-musical.wav

Each stage eventually carries metadata:
{
  conceptId: "filter-resonance",
  stage: "baseline" | "changed" | "exaggerated" | "musical",
  plugin: "Fruity Filter",
  sampleRate: 44100,
  loudnessMatched: true
}

Use a stage progression whenever possible:
- a / baseline
- b / changed (one controlled change)
- c / exaggerated
- d / musical

Students should predict the result before hearing each version.
Loudness-match all stages in a ladder — louder is not better.
------------------------------------------------

STUDENT SUBMISSIONS AND FEEDBACK (MVP)

Do not require audio uploads unless the platform includes real audio-analysis capability.

Default course mode:
- Students render and save their work locally.
- Students complete a guided self-evaluation.
- Recreate (Challenge A) uses audible-trait checklists.
- Interpret (Challenge B) uses design-intent reflection.
- Students may optionally include screenshots of plugin settings.

Do not claim the course can hear, grade, or analyze student audio.
Do not build an upload interface that implies feedback is currently available.

------------------------------------------------

AI AUDIO FEEDBACK — PLANNED, NOT IN MVP

Preserve audio feedback as a planned feature in product architecture.

Future AI feedback workflow:
1. Student uploads or records an audio submission.
2. App extracts defensible audio features.
3. For objective exercises, compare to reference + audible-trait rubric.
4. AI converts differences into plain-language observations,
   likely synthesis causes, and specific FL Studio adjustments.
5. For subjective exercises, do not judge “correctness” of interpretation;
   evaluate whether stated intention matches technical decisions.

Avoid fake numerical scores.

Architecture preparation:
- Each Challenge A (Recreate) stores reference audio ID, method, trait rubric,
  envelope/spectral/pitch expectations, relevant FL parameters,
  acceptable variation.
- Each Challenge B (Interpret) stores prompt, intent questions, suggested approaches,
  reflection rubric, no single acoustic target.
- Keep analysis services modular.

Mark in roadmap: "AI Listening and Synthesis Feedback — Post-MVP"

------------------------------------------------

Course tone: Curious. Playful. Deep. Hands-on.
Constantly ask students to predict what will happen before changing parameters.

Follow docs/sound-synthesis-learning-architecture.md for module IDs,
ownership, gates, and Path A content conventions.
```

---

## Appendix B — Sample Go Deeper sketches (authoring seeds)

These are seeds for future content — not shipped lessons.

### Physics — What is sound?

Pressure waves · molecules colliding · compression · rarefaction → open Wave Candy on a sine from 3xOSC: “It’s the air pressure on your screen.”

### Math — What is a sine wave?

Not memorize sin(x). A sine wave is the simplest repeating motion. Pendulum · rotating wheel · speaker cone · oscillator — same pattern → then stack partials in Sytrus / Harmor and watch the waveform fill in Wave Candy.

### DSP — Why 44.1 kHz?

Nyquist · aliasing · interpolation · oversampling → deliberately undersample or crunch a bright saw (document the exact stock path when authored) and compare Wave Candy before/after.

### Filters — Coffee filter metaphor

Some stuff gets through. Some doesn’t. Then frequency response. Then what resonance is physically → raise Res on Fruity Filter on a saw and listen for the whistle.

### History sidebars

Why the DX7 changed pop · why the TB-303 failed then created acid house · why FM radio is called FM · why vinyl sounds different → each ends with one Init patch or listening cue in FL.

### Philosophy (tiny)

> Every sound you’ve ever heard is a pattern of pressure moving through air.

> A synthesizer doesn’t create magic. It creates mathematics that becomes electricity that becomes motion that becomes sound.

Still end with one cue when possible: play a silent Init, then one oscillator — “that’s organized vibration.”

---

## Related docs

- [`TYPE_C_MASTER.md`](TYPE_C_MASTER.md) — tool template stub; this track is a creative Type C candidate  
- [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) — template taxonomy  
- [`subject-onboarding-process.md`](subject-onboarding-process.md) — onboarding gate  
- [`phase-5-ai-learning.md`](phase-5-ai-learning.md) — app-wide AI modes  
- [`learning-experience-standard.md`](learning-experience-standard.md) — LES (when experiences are authored)  
- [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) — phase table / ownership  

---

## ReLearn Synth S1.4 — resilient learner workspace

Status: implemented and verified.

- Workspace A now has a bounded 25-step undo/redo history. A new edit after undo intentionally clears the abandoned redo branch.
- Guided comparison B remains read-only; history controls cannot alter it.
- Learners can download a versioned `.relearn-synth.json` patch and load one back for review before explicitly importing it.
- Imported files are treated as data only, capped at 20 KB, parsed as JSON, and accepted only when every parameter is present and within the instrument's safe range.
- The curriculum verifier now fails when a synth assignment lacks a challenge, a challenge points to a missing assignment, assessed controls are hidden, IDs collide, or targets exceed supported ranges.

Polyphony remains deferred. The current monophonic design keeps oscillator, filter, envelope, and modulation cause-and-effect easy for a beginner to hear and inspect.
