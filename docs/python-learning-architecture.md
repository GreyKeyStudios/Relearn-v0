# Python Learning Architecture — Bridge / ReLearn Phase 7

**Status:** Planning only — implementation blocked  
**Gate:** Michael completes external Python course + fills [`python-learner-research.md`](python-learner-research.md)  
**Tier:** ReLearn Tier 2 — IT Automation  
**Related:** [`subject-onboarding-process.md`](subject-onboarding-process.md), [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) §17

---

## Implementation gate

```text
Status:   Blocked until Michael completes external Python course
Reason:   Curriculum must be informed by direct learner experience
Artifact: docs/python-learner-research.md (filled during course)
```

**Additional gates before Phase 7 code:**

- CCNA exam passed (benchmark: "would I have paid for this when I was learning?")
- Coach UX validated in real cert study (Phase 4.75 complete)
- Code runner security model decided (client-only vs sandboxed worker)

---

## P0 — Python philosophy

### Why Python?

Python is the first ReLearn subject where learners **create** instead of only **understand**. Tier 1 certifications teach concepts, protocols, and procedures through reading, quizzes, and drills. Python introduces a different loop: write code, run it, break it, fix it, and ship something useful.

Python is not chosen because it is the "best" language. It is chosen because it connects to everything Bridge already teaches — networking, security, Linux administration, cloud APIs, and log analysis. A learner who passed CCNA and Security+ can immediately apply Python to subnet calculators, log parsers, and automation scripts. The tracks reinforce each other instead of living in silos.

### Target audience

- Bridge learners who have completed **at least one Tier 1 track** (CCNA recommended first)
- Career switchers who need scripting and automation skills after certification foundations
- IT professionals who understand concepts but have never written production scripts

**Not for:** absolute beginners with zero IT context (Tier 1 certs first), or experienced developers seeking advanced Python (Tier 3 Applied Technology, future).

### Relationship to certifications

Python **reinforces** cert knowledge; it does not replace cert study. Bridge projects explicitly tie back to prior tracks:

| Cert track | Bridge project | Reinforces |
|---|---|---|
| CCNA | `subnet_calculator.py` | Subnetting, CIDR, host ranges |
| Security+ | `log_parser.py` | Log analysis, SIEM patterns |
| Linux+ | `file_inventory.py` | Filesystem, permissions, paths |
| AWS CP | `boto3` automation | S3, IAM, cloud resource listing |
| CySA+ | `ioc_extractor.py` | IOC formats, threat intel parsing |
| Network+ | `port_scanner.py` (stretch) | Ports, protocols, connectivity |

### Learning mode shift

```text
Cert loop:     Learn → Practice → Review → Master
Python loop:   Learn → Write → Break → Fix → Build
```

Certifications optimize for **recognition and recall** under exam conditions. Python optimizes for **construction and debugging** under real task conditions. Bridge must support both without collapsing them into the same interaction pattern.

### Success definition

A learner has succeeded in Python Foundations when they can:

1. Write a **50-line script** that solves a real IT task without copy-paste
2. Pass all **module capstone** Code Labs and debug challenges
3. Complete **two Tier B integration projects** tied to prior cert knowledge (e.g. subnet calculator + log parser)
4. Explain what their code does line-by-line when asked

Success is **not** measured by finishing videos or reading lessons alone.

---

## P1 — Curriculum map (12 modules)

Each module includes prerequisites, estimated study minutes, and learning outcomes. Module IDs use prefix `py-m` for future content keys (e.g. `py-m04-functions`).

### Module 1 — Hello Python (`py-m01-hello`)

**Prerequisites:** None (Tier 1 exposure recommended)  
**Estimated minutes:** 90

**Topics:** Variables, types (`str`, `int`, `float`, `bool`), `print`, `input`, f-strings, basic errors

**Outcomes:**
- Assign values to variables and predict their types
- Format output with f-strings
- Read user input and use it in simple expressions
- Read a traceback for a `TypeError` or `NameError`

---

### Module 2 — Decisions (`py-m02-conditionals`)

**Prerequisites:** `py-m01-hello`  
**Estimated minutes:** 75

**Topics:** Boolean logic, comparison operators, `if` / `elif` / `else`, nested conditionals, truthiness

**Outcomes:**
- Write branching logic for validation and filtering
- Combine conditions with `and`, `or`, `not`
- Avoid common pitfalls (`=` vs `==`, empty string truthiness)

---

### Module 3 — Loops (`py-m03-loops`)

**Prerequisites:** `py-m02-conditionals`  
**Estimated minutes:** 90

**Topics:** `while`, `for`, `range`, iterating collections, `break` / `continue`, infinite loop risks

**Outcomes:**
- Choose the correct loop for a task
- Iterate over lists and strings safely
- Recognize off-by-one errors

---

### Module 4 — Functions (`py-m04-functions`)

**Prerequisites:** `py-m03-loops`  
**Estimated minutes:** 105

**Topics:** `def`, parameters, return values, scope, default arguments, docstrings

**Outcomes:**
- Decompose scripts into reusable functions
- Trace variable scope (local vs global)
- Write functions with clear inputs and outputs

---

### Module 5 — Collections (`py-m05-collections`)

**Prerequisites:** `py-m04-functions`  
**Estimated minutes:** 120

**Topics:** Lists, tuples, sets, dictionaries, list comprehensions (intro), nested structures

**Outcomes:**
- Select the right collection for a data shape
- Index, slice, and mutate lists safely
- Use dictionaries for lookups (IOC tables, port maps)

---

### Module 6 — Files (`py-m06-files`)

**Prerequisites:** `py-m05-collections`  
**Estimated minutes:** 90

**Topics:** `open`, read/write, paths (`pathlib` intro), `with` context manager, CSV intro

**Outcomes:**
- Read and write text files without leaking handles
- Process line-by-line for log files
- Handle missing files gracefully

---

### Module 7 — Modules and packages (`py-m07-modules`)

**Prerequisites:** `py-m06-files`  
**Estimated minutes:** 75

**Topics:** `import`, standard library highlights (`os`, `json`, `datetime`), `pip`, virtual environments (conceptual)

**Outcomes:**
- Import and use standard library modules
- Install a third-party package with `pip`
- Understand why virtual environments matter

---

### Module 8 — OOP basics (`py-m08-oop`)

**Prerequisites:** `py-m07-modules`  
**Estimated minutes:** 105

**Topics:** Classes, `__init__`, methods, attributes, when OOP helps vs hurts

**Outcomes:**
- Model a simple domain object (e.g. `Host`, `LogEntry`)
- Instantiate and call methods on objects
- Recognize when a function is simpler than a class

---

### Module 9 — Automation (`py-m09-automation`)

**Prerequisites:** `py-m08-oop`  
**Estimated minutes:** 120

**Topics:** `argparse`, scripting patterns, scheduling concept, error handling (`try` / `except` intro)

**Outcomes:**
- Build CLI tools with arguments
- Wrap repetitive IT tasks in scripts
- Handle expected failures without crashing

---

### Module 10 — Networking with Python (`py-m10-networking`)

**Prerequisites:** `py-m09-automation`, CCNA networking basics recommended  
**Estimated minutes:** 105

**Topics:** `socket` intro, `requests`, parsing network output, timeouts and retries

**Outcomes:**
- Fetch data from HTTP endpoints
- Parse structured network output
- Connect Python to CCNA/Network+ mental models

---

### Module 11 — APIs (`py-m11-apis`)

**Prerequisites:** `py-m10-networking`  
**Estimated minutes:** 90

**Topics:** REST concepts, JSON request/response, status codes, API keys (security hygiene), error handling

**Outcomes:**
- Construct GET/POST requests against a public API
- Parse JSON responses into Python structures
- Handle 4xx/5xx responses appropriately

---

### Module 12 — Capstone portfolio (`py-m12-capstone`)

**Prerequisites:** All modules `py-m01` through `py-m11`  
**Estimated minutes:** 180+

**Topics:** Integration projects, code organization, README, cert-bridge projects

**Outcomes:**
- Complete two Tier B cert-bridge projects
- Present a small portfolio of working scripts
- Self-assess readiness for Tier 3 Applied Technology

---

## P2 — Learning engine mapping

### Standard activity stack (every module)

```text
Lesson (reading + worked examples)
  ↓
Concept quiz (5 questions, auto-grade)
  ↓
Flashcards (syntax / vocabulary)
  ↓
Code Lab (write + run + pass tests)       ← NEW
  ↓
Debug Challenge (fix broken code)         ← NEW
  ↓
Mini project (module-scoped)
  ↓
Case study (optional — "which approach?")
```

### Engine surface mapping

| Activity | Existing Bridge surface | New work (Phase 7) |
|---|---|---|
| Lesson | `LessonPageClient`, CES fields | Content only |
| Concept quiz | `QuizEngine` | Content only |
| Flashcards | `FlashcardDeck` | Content only |
| Code Lab | — | Editor, runner, test harness, grading |
| Debug Challenge | Partial — choice/order drills in `SimulatorRegistry` | Code-diff grading, editable snippets |
| Mini project | Partial — `external-lab` assignment pattern | Rubric, optional submission |
| Case study | `CaseStudyDefinition` | Decision-tree content |

### Curriculum integration

Today [`src/lib/curriculum.ts`](../src/lib/curriculum.ts) treats only `simulator`, `external-lab`, and `case-study` as practice assignment types. Phase 7-Platform must add **`code-lab`** as a fourth practice type so Code Labs appear in curriculum steps, coach recommendations, and daily plans.

### Mastery and weakness

Python modules reuse the existing engine:

| Signal | Storage | Coach behavior |
|---|---|---|
| Quiz score | `topicMastery`, `weakTopics` | Same thresholds (70/80/90%) |
| Code Lab pass/fail | `codeLabAttempts` (new, mirrors `simulatorAttempts`) | Weak concepts from failed tests |
| Debug challenge | `simulatorAttempts` or `codeLabAttempts` | Severity escalation on repeat misses |
| Project completion | `completedAssignments` | Curriculum advance |

### Track abstraction gap

Bridge models tracks as `Certification` in [`src/content/registry.ts`](../src/content/registry.ts). Python is **not** a certification. Phase 7-Platform must introduce a **track type** abstraction:

```text
Track (abstract)
  ├── Certification  (Tier 1 — existing)
  └── LearningTrack  (Tier 2+ — Python first instance)
```

Planning decision: do not force Python into `Certification` schema. New content lives under `src/content/tracks/python/` when implementation opens.

---

## P3 — Code Lab interaction taxonomy

Code Labs are a new simulator family. They extend the locked `SimulatorResult` contract for auto-grading and weak-concept tagging.

### Interaction types

| Lab type ID | Learner action | Example | Mobile UX notes |
|---|---|---|---|
| `predict-output` | Choose stdout from options | What prints when `x=3; print(x+"2")`? | Large tap targets; no keyboard |
| `fix-the-bug` | Edit code until tests pass | Off-by-one loop | Monospace editor; run button prominent |
| `drag-order` | Reorder code lines | Script steps for DHCP check | Touch drag; max 8 lines |
| `complete-lines` | Fill blanks | Missing `def`, colon, indent | Inline blanks; autocomplete off |
| `function-builder` | Assemble signature + body | Parse a log line function | Snippet chips; drag or tap |
| `loop-builder` | Choose correct iteration | Loop over list of IPs | Multiple-choice or drag |
| `dict-practice` | Key/value exercises | IOC lookup table | Match pairs UI |
| `regex-playground` | Match groups | Extract IPs from log line | Simplified regex; hints allowed |
| `api-explorer` | Construct HTTP request | GET `/users` with headers | Form builder; no raw curl |

### Per-type requirements

Every Code Lab type must define:

1. **Starter code** (if editable)
2. **Test cases** (assertions the runner executes)
3. **Weak concepts** tagged per failed test
4. **Hints** (progressive, optional)
5. **Mobile constraints** — max lines visible without scroll; font size ≥ 14px monospace

### Grading contract

Code Labs produce the same result shape as existing simulators:

```typescript
interface SimulatorResult {
  score: number;
  total: number;
  weakConcepts: string[];
  completed: boolean;
}
```

Pass threshold: all required tests pass (`completed: true`). Partial credit allowed for `predict-output` and `drag-order` types only.

---

## P4 — Project catalog

### Tier A — Module capstones (single file, &lt;80 lines)

| Project ID | Module | Description | Rubric |
|---|---|---|---|
| `py-proj-password-gen` | m04 | Password generator with length arg | Generates correct length; uses `random` or `secrets` |
| `py-proj-file-renamer` | m06 | Bulk rename files by pattern | Renames without data loss; dry-run mode |
| `py-proj-csv-summary` | m06 | Summarize numeric column in CSV | Correct sum/avg; handles empty file |

### Tier B — Cert bridge projects

| Project ID | Modules | Cert tie-in | Description |
|---|---|---|---|
| `py-proj-subnet-calc` | m04, m05 | CCNA | CIDR calculator — network/broadcast/host count |
| `py-proj-log-analyzer` | m05, m06 | Security+ | Parse auth.log; count failed SSH attempts |
| `py-proj-ioc-extractor` | m05, m06 | CySA+ | Extract IPs/domains from threat feed text |
| `py-proj-file-inventory` | m06, m07 | Linux+ | Walk directory; report sizes and permissions |
| `py-proj-s3-reporter` | m07, m11 | AWS CP | List S3 buckets/objects via boto3 (or mock) |
| `py-proj-api-client` | m10, m11 | APIs module | GET public API; display formatted JSON |

**Rubric (all Tier B):** Script runs without modification; handles edge cases documented in README; includes brief usage instructions; passes automated test suite.

### Tier C — Portfolio (multi-file, optional)

| Project ID | Prerequisites | Description |
|---|---|---|
| `py-proj-network-inventory` | m10 + CCNA | Ping sweep + CSV export + summary report |
| `py-proj-incident-triage` | m06 + Security+ | Ingest logs + IOC lookup + severity scoring |

Tier C is optional stretch content for Module 12 capstone portfolio.

---

## P5 — Learner research

Field research during the external Python course is captured in [`python-learner-research.md`](python-learner-research.md).

**Dual mandate:** Eliminate confusion **and** engineer breakthrough moments. The goal is not only to fix bad explanations — it is to reproduce the satisfying "ohhh, now I get it" experiences that made concepts stick.

**Process:**
1. One entry per lesson, filled immediately after study
2. Capture **frustrations** (what to fix or cut) and **moments of delight** (what clicked, why, how to reproduce in Bridge)
3. End-of-course synthesis when the paid course is complete — including top delight moments and teaching techniques
4. Master Agent reviews research + this architecture doc before opening Phase 7 implementation
5. Curriculum agents revise module outcomes, exercise selection, and lesson structure based on research findings

**Delight patterns to look for when reviewing research:**

| Pattern | Bridge reproduction |
|---|---|
| Before/after comparison | Lesson shows imperative version, then idiomatic refactor (e.g. loop → list comprehension) |
| Predict-then-run | `predict-output` Code Lab before revealing the answer |
| Incremental refactor | Build working code first, then improve in a second step |
| Intentional mistake, then fix | Worked example with a bug; learner spots it, then sees the correction |
| Side-by-side contrast | Two approaches on one screen (verbose vs concise, wrong vs right) |

**Content agent instruction:** Before writing any module lesson, pull **at least one delight technique** from learner research for that topic. If research has no delight entry for a module, flag it to M0 — do not ship lessons that only avoid confusion without creating breakthrough moments.

---

## Appendix A — Proposed schema (Phase 7 — do not implement yet)

These types are **design stubs only**. Do not edit [`src/content/types.ts`](../src/content/types.ts) until the implementation gate opens.

### PracticeType extension

```typescript
export type PracticeType =
  | "reading"
  | "quiz"
  | "flashcard"
  | "simulator"
  | "external-lab"
  | "case-study"
  | "code-lab";  // Phase 7
```

### Assignment extension

```typescript
export interface Assignment {
  // ... existing fields ...
  codeLabId?: string;  // Phase 7 — references CodeLabDefinition.id
}
```

### CodeLabDefinition

```typescript
export type CodeLabType =
  | "predict-output"
  | "fix-the-bug"
  | "drag-order"
  | "complete-lines"
  | "function-builder"
  | "loop-builder"
  | "dict-practice"
  | "regex-playground"
  | "api-explorer";

export interface CodeLabTestCase {
  id: string;
  description: string;
  /** Python assert expression or expected stdout */
  assertion: string;
  weakConcept: string;
}

export interface CodeLabDefinition {
  id: string;
  title: string;
  type: CodeLabType;
  trackId: string;       // e.g. "python"
  moduleId: string;      // e.g. "py-m04-functions"
  topicIds: string[];
  estimatedMinutes: number;
  starterCode?: string;
  solutionCode?: string;  // never sent to client in fix-the-bug until pass
  testCases: CodeLabTestCase[];
  hints?: string[];
  instructions: string;
}
```

### CodeLabAttempt (progress store)

```typescript
export interface CodeLabAttempt {
  codeLabId: string;
  trackId: string;
  moduleId: string;
  score: number;
  total: number;
  weakConcepts: string[];
  submittedCode: string;
  completedAt: string;
}
```

### LearningTrack (track abstraction)

```typescript
export interface LearningTrack {
  id: string;
  name: string;
  shortName: string;
  tier: 1 | 2 | 3 | 4;
  trackType: "certification" | "skills";
  overview: string;
  modules: LearningModule[];
}

export interface LearningModule {
  id: string;
  name: string;
  topics: Topic[];  // reuse existing Topic shape where possible
  prerequisites: string[];
  estimatedStudyMinutes: number;
}
```

### Route plan (Phase 7)

| Route | Purpose |
|---|---|
| `/tracks` | Track grid (certs + skills) |
| `/track/python` | Python track hub |
| `/track/python/lesson/[topicId]` | Lesson |
| `/track/python/quiz/[topicId]` | Quiz |
| `/track/python/code-lab/[labId]` | Code Lab |

Existing `/cert/*` routes remain unchanged for Tier 1.

---

## Appendix B — Phase 7 implementation sequence (when gate opens)

```text
Gate: learner research complete
  ↓
7-Platform   Track abstraction, code-lab type, runner sandbox design
  ↓
7-Lab-UI     Editor + runner + test display
  ↓
7-Content    Module lessons, quizzes, labs (informed by research)
  ↓
7-Verify     Build, mobile UX, grading accuracy
```

| Agent | Owns |
|---|---|
| **7-Platform** | `types.ts`, `src/lib/code-lab/`, `curriculum.ts` practice types |
| **7-Lab-UI** | `src/components/code-lab/` |
| **7-Content** | `src/content/tracks/python/` |
| **7-Verify** | Integration, build, grading tests |

---

## Appendix C — ReLearn expansion context

```text
Tier 1  IT Foundations     → CCNA, Network+, Security+, … (Bridge today)
Tier 2  IT Automation      → Python Foundations (this document)
Tier 3  Applied Technology → APIs, DevOps, Cloud Projects (future)
Tier 4  ReLearn Labs       → Robotics, IoT, Physical Computing (future)
```

Python is the **first non-certification subject** and the template for all future Tier 2+ tracks. See [`subject-onboarding-process.md`](subject-onboarding-process.md).

---

*Planning document. No code, content, or routes implemented until learner-research gate passes.*
