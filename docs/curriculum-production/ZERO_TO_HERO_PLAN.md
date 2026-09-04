# Zero-to-Hero Curriculum Plan

**Status:** Proposed — awaiting owner sign-off (Michael)
**Owner:** M0 / planning
**Date:** 2026-09-03
**Parent:** [`CONTENT_BATCH_SEQUENCE.md`](CONTENT_BATCH_SEQUENCE.md) · [`../COURSE_ARCHITECTURE.md`](../COURSE_ARCHITECTURE.md)

This plan decides **what order to fill the curriculum in, and when to stop**. It introduces no new pedagogy: the teaching method is already defined in [`../bridge-learning-standard.md`](../bridge-learning-standard.md) (BLS), [`../learning-experience-standard.md`](../learning-experience-standard.md) (LES), and [`../definition-of-done.md`](../definition-of-done.md). Those stay authoritative and unchanged.

---

## The problem this solves

Breadth ran ahead of depth. Measured 2026-09-03 by `npm run curriculum:gap-report`:

- **15 live tracks, 298 topics, 194 full-CES topics**
- **10 of 15 tracks have zero LES experiences**

Only three tracks are actually *taught*: Git & GitHub (18/18 CES, 18 LES), PowerShell (15/15, 15 LES), and CCNA (23 LES, though only 7 full CES).

Two findings drive the ordering below.

**A+ is the largest body of unteaching content in the repo.** 72 topics, all full CES, **zero LES** and zero misconception screens (`verify:production`). That is exactly the failure BLS exists to catch — *content correctness ≠ teaching quality*. A learner can read all 72 topics and never be taught.

**Six certification tracks are shells.** Security+, Network+, CySA+, AWS CP, Azure, and ITIL each hold 3–5 full-CES topics out of 11–16, with no LES and no objective line-items. Publishing these as courses would fail the Definition of Done Ready bar on point 4 alone (*no known content gap requires an unlisted outside course*).

## The decision

**Take one spine to Ready depth-first rather than spreading LES thinly across fifteen tracks.**

Approved spine order:

1. **IT ladder** — Computer Fundamentals → A+ → Network+
2. **Piano Foundations** — units 6–12
3. **CCNA** — CES completion and official tag remap

Rationale: the IT ladder is the only path in the repo that starts at genuine zero and reaches employability, and it contains both of the findings above. Piano follows because it already has the cleanest pedagogy in the product (the `experience → notice → name → explore → practice → prove → connect` phase model) and proves the engine on a non-cert subject. CCNA is last *despite* being the declared flagship, because it is the least broken: it already has LES on all 23 topics, so it needs CES depth rather than a teaching layer.

### Ordering principle change

[`CONTENT_BATCH_SEQUENCE.md`](CONTENT_BATCH_SEQUENCE.md) Phase P2 orders tracks by **reference quality** (CCNA → Git → Computer Fundamentals → A+). That was correct for establishing quality patterns, and it worked — Git and PowerShell are the proof.

From here the ordering principle becomes **learner sequence**: a beginner must meet fully-taught material in the order they would actually study it. A half-taught Computer Fundamentals in front of a polished CCNA is worse than the reverse.

---

## Teaching stance — build the circuit, don't just name it

**Interaction is the default. Prose plus a quiz is the fallback, used when no honest interaction exists.**

Reading a definition and then recognising it in four options tests exposure. Constructing the thing builds the connection. Piano already works this way — its phase model opens on `experience`, where the learner plays the note before anyone names it — and BLS-4 (*examples before definitions*) asks for the same thing in text. The IT ladder never received that treatment, and that is the substantive difference between "content exists" and "this teaches".

So when a concept has a shape, teach the shape by making the learner build it.

### Concept shape → interaction

This mapping keeps drill choice principled rather than arbitrary. Existing components are named where they already cover the shape.

| Concept shape | Interaction | Example | Exists |
|---|---|---|---|
| Ordered sequence | Sorter — drag into order | OSI layers, boot sequence, DORA | [`OsiLayerSorter`](../../src/components/simulators/core/OsiLayerSorter.tsx) |
| Pairing / mapping | Matcher — connect two sets | port ↔ protocol, cipher ↔ use | [`PortProtocolDrill`](../../src/components/simulators/core/PortProtocolDrill.tsx), [`CryptoMatcher`](../../src/components/simulators/core/CryptoMatcher.tsx) |
| Layered correspondence | Map one model onto another | TCP/IP ↔ OSI | [`TcpipLayerMap`](../../src/components/simulators/core/TcpipLayerMap.tsx) |
| Numeric transform | Calculator drill — show the work | subnetting, binary/hex, VLSM | [`SubnetCidrDrill`](../../src/components/simulators/core/SubnetCidrDrill.tsx), [`VlsmDrill`](../../src/components/simulators/core/VlsmDrill.tsx) |
| Classification | Bucket sort into categories | RAM types, cable categories, port types | — author |
| Symbolic notation | Compose the notation | `chmod` bits, CIDR masks | [`LinuxChmodDrill`](../../src/components/simulators/core/LinuxChmodDrill.tsx) |
| Diagnosis from symptoms | Triage — pick cause from evidence | log lines, "PC won't POST" | [`LogLineTriage`](../../src/components/simulators/core/LogLineTriage.tsx) |
| **Physical topology** | **Connect-the-dots wiring** | cable a small LAN, seat RAM/PSU headers | **— author** |
| **Assembly from parts** | **Build it, then boot it** | assemble a PC, populate a rack | **— author** |
| Procedure / ordering of steps | Step-order builder with wrong turns | safe teardown, ESD procedure | — author |
| Spatial identification | Label the diagram — click the part | motherboard headers, port panel | — author |

The bolded rows are the biggest wins for A+ specifically: it is a hardware certification currently taught entirely in prose. "Connect the dots" for cabling and "build it, then boot it" for assembly are the interactions that concept genuinely wants, and neither needs a VM.

### Which runners to build

Interaction variety does **not** come from new components. Two generic runners — [`ChoiceDrillRunner` and `OrderDrillRunner`](../../src/components/simulators/SimulatorRegistry.tsx) — already power all 36 drills in [`src/content/simulators/drills/`](../../src/content/simulators/drills/). Each named drill is a ~9-line wrapper over a runner plus a **data pool**. Adding a drill means adding a content file, not a component.

Keep it that way. Runners are shared infrastructure and must stay few; pools are cheap and parallelise safely.

A shape audit of all 72 A+ topics and 27 of Computer Fundamentals' topics gives this priority:

| Priority | Runner | Serves | Note |
|---|---|---|---|
| 1 | **`HotspotRunner`** — click a region of an image | ~14 spatial-identification topics, likely +9 settings-panel topics | Biggest single gap. "Click the CPU socket" and "click where you'd disable startup apps" are one interaction with different images — build it generic and it covers both |
| 2 | **`ConnectRunner`** — link node to node | ~7 physical-topology topics | Makes SOHO setup and "what is a network" teach rather than describe |
| 3 | `TerminalRunner` | ~4 CLI topics | **Hold.** Lowest ROI, highest cost. Check how PowerShell's 15 LES already teach CLI before building anything |
| — | Branching / wrong-turn steps | procedure topics | An option on `OrderDrillRunner`, not a new runner |

Classification, triage, and procedure shapes — roughly a third of the audited topics — are already served by the existing two runners and need pools only.

Note also that **~15 of A+'s 72 topics need no new interaction at all**: nine are domain reviews that compose other topics' drills, and six are genuinely propositional. The interactive gap is smaller than "72 topics, zero LES" implies.

**Status of this audit:** provisional. Shapes were derived by keyword matching over topic names; 17 topics came back unclassified, and Computer Fundamentals module 1 was not parsed. Treat the runner priority as sound and the per-topic assignment as unverified — a human reads the topic before authoring its pool.

### Rules that keep this honest

1. **A drill teaches only what it can observe.** A matcher demonstrates recall of pairs, not understanding of why the pairing holds. Do not report drill completion as conceptual mastery — the same discipline Piano uses when it verifies notes and order but explicitly refuses to judge fingering, posture, or tension.
2. **Interaction still obeys BLS-7** — a drill's assignment `order` comes after the lesson that teaches it. Play-first *within* a lesson step is the `experience` phase; a graded drill before teaching is a hidden-knowledge failure.
3. **No decorative interaction.** If a game does not reinforce the actual structure of the concept, it is a distraction. Per the design handoff: *knowledge relationships, not generic decorative icons*.
4. **Prose is not banned.** Some concepts are genuinely propositional (why a policy exists, what a standard body governs). Those get good writing and a fair quiz, not a forced minigame.

---

## Stage 1 — IT ladder

### 1a. Computer Fundamentals — the zero entry point

| Metric | State |
|---|---|
| Topics | 49 |
| Full CES | 49 — content is complete |
| LES | 6 — **43 topics need a teaching experience** |
| Misconception screens | 0 of 44 full-CES topics |

This is the true beginner surface and the highest-leverage work in the repo. Content exists, so this is a pure teaching-layer pass: no research, no sourcing, no exam blueprint.

### 1b. A+ — the largest gap

| Metric | State |
|---|---|
| Topics | 72 |
| Full CES | 72 — content is complete |
| LES | **0** |
| Misconception screens | **0** |

Same shape as 1a at larger scale. Sequence A+ domains to follow Computer Fundamentals prerequisites so the ladder holds.

Per [`../definition-of-done.md`](../definition-of-done.md), LES is required only for *teaching-critical* topics — this is not a mandate for 72 LES experiences. Triage first: which topics fail BLS-4 (examples before definitions) or BLS-12 (unknown word rule) when read cold? Those get LES. The rest need misconception screens and remediation links only.

A+ is where the *Teaching stance* section pays off most. It is a hardware certification currently delivered entirely as prose: cabling, connectors, RAM seating, PSU headers, port identification, and teardown order are all spatial or procedural concepts being taught as paragraphs. Connect-the-dots wiring, build-it-then-boot-it assembly, and label-the-diagram drills are the interactions this content actually wants, and none of them need a VM. Prioritise those over additional prose LES.

### 1c. Network+ — first shell to fill

| Metric | State |
|---|---|
| Topics | 15 |
| Full CES | 4 — **11 topics thin** |
| LES | 0 |
| Objective line-items | empty (domain weights only) |

Unlike 1a and 1b this needs real content production: N10-009 objective PDF ingestion first (Phase P1 item 6), then CES elevation, then LES triage. Do not begin authoring before objectives are populated — that is the P1 rule *architecture and sources before mass lesson authoring*.

### Lab policy by stage

Practice difficulty must climb with the ladder. A beginner should never be blocked by a hypervisor.

| Stage | Practice surface | External lab? |
|---|---|---|
| 1a Computer Fundamentals | In-app micro-drills only — matchers, sorters, pickers | **No** |
| 1b A+ | In-app micro-drills only | **No** |
| 1c Network+ | Micro-drills **plus** first external labs where a real device or topology is unavoidable | **Begins here** |
| 3 CCNA | Micro-drills, Packet Tracer, and Lab VM scenarios | Yes |

This is a hard constraint, not a preference: the ReLearn Lab VM is **not released** (`/labs/relearn-vm` is `Planned · No download yet`). Any Stage 1 topic that requires it would fail the Definition of Done Ready bar point 4 — *no known content gap requires an unlisted outside course*. Stage 1 must be completable in the browser.

The micro-drill registry already exists and needs no new infrastructure — [`src/components/simulators/core/`](../../src/components/simulators/core/) holds `CryptoMatcher`, `OsiLayerSorter`, `PortProtocolDrill`, `EthernetDeviceDrill`, `LinuxChmodDrill`, `SubnetCidrDrill`, `VlsmDrill`, `TcpipLayerMap`, `LogLineTriage`, and friends. Computer Fundamentals currently has **one** simulator ([`CfFileFolderManager`](../../src/components/simulators/fundamentals/)) across 49 topics, so authoring new drills into the existing registry is the practice work for Stage 1.

Drills stay bound to BLS-7: a simulator's assignment `order` comes **after** the lesson that teaches it.

### Vertical reuse — earlier content feeds harder content

The spine is a prerequisite chain, not four separate courses. Ports, addressing, binary, cabling, permissions, and OS concepts are taught once at the lowest stage that needs them, then **referenced** upward — never re-authored.

Practically:

- Declare the dependency in [`src/content/production/prerequisites/`](../../src/content/production/prerequisites/) rather than duplicating explanation text.
- BLS-3 (*connect to previous*) is satisfied by pointing at the earlier topic explicitly — this is what makes the ladder feel like one path instead of four.
- When a harder track needs a concept the earlier track already owns, the harder track's job is **retrieval and application**, not re-teaching.
- Where a concept is genuinely tested before it is taught, that is a relocation — record it the way [`../ccna-deferral-manifest.md`](../ccna-deferral-manifest.md) does. No silent duplication and no silent deletion.

This is also why Stage 3 gets cheaper than its topic count suggests: much of CCNA's foundation is Network+ and A+ material the learner has already proven.

## Stage 2 — Piano Foundations units 6–12

**Passion project — schedule around the ladder, not through it.** Piano carries no exam deadline and no employability claim, so it yields whenever Stage 1 or 3 needs the time. It is in the spine because it is the best interactive teaching in the product, not because it is urgent.

12 units exist; `READY_UNIT_MAX = 5` gates units 6–12 out of the learner-ready path, and the curriculum map labels them *in development · curriculum preview only*. That gate is honest and should stay closed until a unit actually meets the bar.

Units 1–5 are the reference implementation for interactive teaching and should be treated as the pattern to extend, not revisited. Each new unit needs the full phase model, inline activities with honest verification boundaries, and the same refusal to award mastery the app cannot observe.

## Stage 3 — CCNA

**Expected to build naturally on the ladder.** By this point the learner has proven addressing, ports, cabling, and OS fundamentals in A+ and Network+, so CCNA inherits rather than re-teaches (see *Vertical reuse* above). Its 16 thin topics should cost less than the count implies.

| Metric | State |
|---|---|
| Topics | 23 |
| Full CES | 7 — **16 topics need elevation** |
| LES | 23 — complete |
| Blocker | live `CCNA-*` pilot tags still need remap onto official v1.1 IDs |

Also carries 21 uncovered blueprint objectives across all tracks and a **v2.0 cutover review dated 2027-02-03**. The tag remap is a progress-safe migration and must not reset learner progress.

---

## Deferred

### CySA+ (CS0-003) — defer to successor exam

**Decision 2026-09-03:** stop work against CS0-003.

The English exam **retires 2026-12-22**, roughly 15 weeks out. Only 3 of 12 topics are full CES, so little is lost, and authoring into a retiring exam is waste. Revisit when successor objectives publish.

### Other shells — not scheduled

Security+, AWS CP, Azure, ITIL, Cloudflare Hosting, VM Lab, Sound Synthesis remain as-is. They must not be presented to learners as complete courses while at 3–5 full-CES topics with no LES.

---

## Gates — unchanged

Nothing in this plan lowers a bar. Every topic still passes:

1. the 13 BLS rules;
2. the mandatory 9-step learner flow in [`../definition-of-done.md`](../definition-of-done.md);
3. the Oral Mastery Gate — ~10 ramping questions, ~8/10 comfortable, **conceptual misses are lesson feedback, not learner failure**; and
4. Michael's first-time-learner walkthrough and sign-off.

Track promotion to **Ready** remains an owner decision, not an automated one. Coverage does not promise a passing exam score, and marketing copy must not imply one.

## Batch sizing

One ticket per track-domain, not per track. Reuse the existing template:

```text
Title: curriculum-batch/<track>/<domain>
Scope: LES triage | CES elevation | misconceptions | objectives
Out of scope: unrelated tracks, mastery engine changes, mass banks
Sources: SourceRecord ids + retrieval dates
Verify: verify:production, curriculum:gap-report, verify:curriculum flags, tsc
```

Re-run `npm run curriculum:gap-report` at each stage boundary and record the LES/CES deltas, so progress is measured rather than asserted.

## What this plan does not do

- It does not mass-produce lessons. Stage 1a/1b are teaching-layer passes over content that already exists.
- It does not invent a second progression system. Mastery thresholds and SRS intervals stay as defined in [`README.md`](README.md).
- It does not change the live engine or Path A schemas.
- It does not promise every track reaches Ready. Seven tracks are explicitly unscheduled above.
