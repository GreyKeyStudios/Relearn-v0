import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt, choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.8", difficulty,
});

export const apCore2OpsBatch8Topics: Topic[] = [{
  id: "ap-scripting-basics",
  name: "Scripting Basics for Support",
  prerequisites: ["ap-communication", "ap-windows-cli", "ap-linux-client"],
  objectives: ["AP1202-4.8"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Automate Repeatable Support Work Without Scaling a Mistake",
    content: `A script is an ordered set of instructions interpreted or executed to automate work. The safe support workflow is:

\`define one authorized repeatable task → identify inputs, targets, dependencies, and risk → choose the supported language/runtime → write readable narrow logic → validate and test with inert data → review and approve → run with least privilege → log and verify → version and maintain\`

Scripts reduce repetition and inconsistency, but they also execute errors rapidly and at scale. Automation does not grant authorization.

## Common languages and files

- **Batch** (\`.bat\`, \`.cmd\`): Windows command-interpreter automation; useful for established command workflows, with limited structure compared with modern shells.
- **PowerShell** (\`.ps1\`): object-oriented Windows and cross-platform automation; cmdlets, pipeline objects, modules, remoting, and rich error handling.
- **Shell** (commonly \`.sh\`): command automation on Linux/macOS and other Unix-like systems; interpreter is selected by environment/shebang and compatibility matters.
- **Python** (\`.py\`): general-purpose interpreted language used for automation, data processing, APIs, and cross-platform tools; runtime/package versions matter.
- **JavaScript** (\`.js\`, and related module forms): commonly executed by browsers or runtimes such as Node.js; environment and permissions differ.
- **Visual Basic Script** (\`.vbs\`): legacy Windows scripting still encountered; support and policy may restrict it.

An extension is a clue, not proof of safety or exact behavior. Inspect trusted source, expected interpreter, signature/hash where used, dependencies, arguments, privileges, targets, and change approval before execution. Never run code copied from an unknown message or website merely because it looks short.

## Core constructs

**Variables** name values that may change. **Constants** represent values intended not to change. **Data types** include strings/text, integers and decimals, Boolean true/false, dates/times, arrays/lists, and objects/maps. Quoting and type conversion matter: text \`"10"\` may not behave like number \`10\`.

**Conditionals** choose a path: if a service is stopped, attempt the approved start; otherwise record that it is already running. **Loops** repeat across an explicit collection; every loop needs a known boundary or exit. **Functions** package reusable behavior with inputs and outputs. **Comments** explain intent, assumptions, risk, and non-obvious decisions; they do not replace readable code or documentation.

**Operators** compare, calculate, and combine conditions. Equality versus assignment symbols vary by language. **Input/output** may come from arguments, prompts, files, environment variables, standard input/output, APIs, or pipelines. Treat every external input as untrusted until validated.

## Control flow and errors

A script should distinguish expected conditions from failures. Check exit status, exceptions, error streams, missing files, access denied, timeouts, partial results, unavailable dependencies, and unexpected formats. Use fail-safe defaults, clear messages, cleanup/finally behavior, bounded retry with delay where appropriate, and a nonzero exit or explicit failure result for automation systems.

Do not suppress all errors, retry forever, or continue destructive work after a prerequisite fails. Idempotent design—where repeated execution reaches the same intended state without duplicate harm—improves recovery, but it must be proven for the specific operations.

## Validation and target safety

Validate required and allowed values, formats, ranges, paths, identifiers, host lists, and counts. Resolve and display exact targets before modification. Reject empty, root, home, wildcard, parent-traversal, unexpected network, or out-of-scope targets for destructive operations. Use allowlists and structured APIs rather than building command strings from untrusted text.

Protect against injection: do not concatenate user input into shell, SQL, URLs, or commands without the language’s safe parameter mechanisms. Do not log secrets, tokens, passwords, private content, or full sensitive command lines.

## Permissions and execution policy

Run with the least privileges and narrowest network/data scope required. Do not disable execution policy, antivirus, application control, code signing, firewall, certificate validation, or audit logging to make a script run. If policy blocks it, verify source and business need and use the approved signing, packaging, deployment, or exception workflow.

Store secrets in approved secret-management facilities and pass references or protected environment/configuration—not hard-coded strings, source control, command history, or tickets. Service accounts require ownership, rotation, monitoring, and constrained permissions.

## Testing and deployment

Review source before execution. Test syntax/lint where supported, then unit-sized logic, inert sample data, dry-run/what-if mode, a disposable lab, and a small pilot. Test normal, empty, boundary, invalid, permission-denied, timeout, partial-failure, retry, interruption, and rollback/recovery cases.

Separate discovery/reporting from modification where possible. Require explicit confirmation or change approval for high-impact actions; record the approved version/hash, operator, arguments excluding secrets, targets, start/end, counts, changes, failures, and verification.

Use source control for authorship, review, history, release tags, and rollback of the script itself. A prior script version does not automatically undo changes that script already made to systems or data.

## Support use cases

Appropriate examples include inventory/report collection, log gathering, file or service-state checks, approved software/configuration deployment, account/report audits, backup verification, repetitive file organization, API queries, health checks, and creation of consistent ticket evidence.

High-risk examples include bulk account changes, deletion, permissions, registry/configuration edits, firmware, encryption keys, firewall/network changes, production database operations, remote execution, and restoration. These require tighter scope, testing, approval, backup/recovery, staged rollout, and monitoring.

## Read a script safely

Before running, answer: What interpreter/runtime? What inputs and defaults? What systems/files/accounts does it read or change? What privilege and network access? What happens on empty input? Are targets resolved? Are destructive actions guarded? Are secrets exposed? How are errors/retries/partial results handled? What proves success? How is it stopped and recovered?

Example pseudocode:

\`load approved host list → reject empty/out-of-scope entries → for each host: query disk usage read-only → record success/failure → summarize counts → exit nonzero if collection incomplete\`

This is safer than: \`for every discovered device → delete logs → ignore errors\`.

## Verification and documentation

Verify expected targets and counts, intended state, unchanged out-of-scope systems, security controls, permissions, logs, error count, user/business function, and monitoring. Reconcile partial success rather than reporting the overall run as simply “complete.”

Document purpose, owner, language/runtime/dependencies, version, inputs/outputs, privileges, targets/exclusions, approval, test evidence, dry-run/pilot, error and recovery behavior, logging, verification, known limitations, and review date.

**Lab boundary:** read and reason about fictional pseudocode and inert examples only; no real deletion, credential use, remote execution, security-control changes, or production modification. **Next:** AP1202-4.9 remote access technologies.`,
  },
  lightbulbMoment: "A safe script makes scope and failure visible before it makes change: automation quality is measured not only by the happy path, but by what happens with empty input, wrong targets, partial success, insufficient privilege, and interruption.",
  keyFacts: [
    "Automation does not grant authorization",
    "Extensions identify likely script types but do not prove safety",
    "Conditionals choose; loops repeat; functions package reusable behavior",
    "Validate untrusted inputs and resolve exact targets before change",
    "Use least privilege and approved secret storage",
    "Test dry-run, boundary, failure, interruption, and recovery paths",
    "Versioning the script does not undo system changes it already made",
  ],
  guidedExample: {
    title: "Review a disk-space inventory script before deployment",
    steps: [
      "Define read-only purpose, approved host allowlist, required runtime/module, service account scope, output location, and success criteria.",
      "Reject an empty list, duplicates, malformed/out-of-scope hosts, and output paths outside the approved directory; never turn empty input into 'all hosts.'",
      "Use a function returning structured host, free space, timestamp, and error; loop with timeout and bounded concurrency; continue collection but mark partial failures.",
      "Dry-run against inert names, test unreachable/access-denied/timeout cases, pilot three systems, review logs for secrets, and approve the exact version.",
      "Run least-privileged, verify queried targets/counts and unchanged state, report partial failures with nonzero status, attach sanitized results, and schedule review.",
    ],
  },
  commonMistakes: [
    "Running unknown copied code without source review",
    "Assuming a file extension or short script proves safety",
    "Letting empty input expand to every system or broad path",
    "Concatenating untrusted input into commands",
    "Hard-coding secrets or logging tokens",
    "Disabling execution/security policy to make code run",
    "Testing only the happy path",
    "Reporting complete when several targets failed",
  ],
  examTraps: [
    "Language/file-extension recognition",
    "Variable, type, conditional, loop, and function roles",
    "Input validation and injection boundaries",
    "Least privilege and secret handling",
    "Dry-run/pilot versus production execution",
    "Idempotence and bounded retries",
    "Script rollback versus rollback of system changes",
  ],
  realWorldScenario: "A technician receives a PowerShell script that removes stale profiles. Review shows an empty exclusion list causes every local profile to match and errors are suppressed. The technician does not run it. They require an explicit allowlist, protected system-profile exclusions, path resolution, age and ownership validation, dry-run output, backup/recovery and approval, per-profile logging, stop-on-prerequisite failure, a small pilot, and post-run verification.",
  whenThisFails: [
    "If source, author, interpreter, dependencies, signature, target, or authorization cannot be established, do not execute",
    "If actual targets or results differ from dry-run/approval, stop safely, preserve logs, and invoke the change/recovery plan",
    "If partial failure leaves inconsistent state, prevent blind retry and reconcile each target before continuing",
  ],
  teacherReflectionPrompt: "Review a fictional bulk-cleanup script: identify language, inputs, types, loop/condition/function, empty-input risk, injection, permissions, secrets, dry-run tests, failure handling, recovery, and proof of bounded success.",
  quiz: [
    item("ap-script-q1", "What does a conditional do?", "Chooses an execution path based on a condition", "Repeats forever", "Stores a password", "easy"),
    item("ap-script-q2", "A cleanup script receives an empty target list. Safest behavior?", "Fail closed with a clear error rather than expanding scope", "Delete from every system", "Ignore target validation", "medium"),
    item("ap-script-q3", "Where should an automation credential be stored?", "In an approved secret-management mechanism with constrained access and rotation", "Hard-coded in source", "In the ticket"),
    item("ap-script-q4", "Execution policy blocks an unsigned script. Best response?", "Verify source and use the approved signing/deployment or exception workflow", "Disable every security control", "Rename the extension"),
    item("ap-script-q5", "A script succeeds on 90 of 100 hosts. Best result?", "Report partial success, identify ten failures, return an appropriate failure status, and reconcile before retry", "Report complete", "Retry forever without logs", "hard"),
  ],
  questionBank: [
    item("ap-script-b1", "Which extension commonly identifies PowerShell?", ".ps1", ".jpg", ".xlsx", "easy"),
    item("ap-script-b2", "A loop should have:", "An explicit collection/boundary or safe exit condition", "No termination behavior", "A hidden password"),
    item("ap-script-b3", "A function primarily:", "Packages reusable behavior with defined inputs and outputs", "Automatically grants admin", "Eliminates testing"),
    item("ap-script-b4", "Why avoid command-string concatenation with user input?", "It can allow injection or unintended interpretation; use validation and safe parameters", "It makes comments longer", "It always encrypts input"),
    item("ap-script-b5", "Idempotent behavior means:", "Repeated execution reaches the intended state without duplicate harmful effects", "The script never exits", "Every retry changes more data"),
    item("ap-script-b6", "A dry run should:", "Show resolved targets and intended actions without making the production change", "Hide targets", "Replace approval"),
    item("ap-script-b7", "Source-control rollback does not necessarily:", "Reverse configuration, files, accounts, or data already changed by the script", "Restore older source text", "Show authorship"),
    item("ap-script-b8", "Safe automation logging includes:", "Version, operator, targets/counts, actions/results/errors, timestamps, and verification without secrets", "Passwords and tokens", "Only the word success"),
  ],
  flashcards: [
    { id: "ap-script-f1", front: "Conditional?", back: "Chooses a path based on a condition" },
    { id: "ap-script-f2", front: "Loop?", back: "Repeats over a bounded collection or until a safe exit" },
    { id: "ap-script-f3", front: "Function?", back: "Reusable behavior with inputs and outputs" },
    { id: "ap-script-f4", front: "Empty destructive target?", back: "Fail closed—never expand to broad defaults" },
    { id: "ap-script-f5", front: "Dry run?", back: "Resolve and display intended actions without changing production" },
    { id: "ap-script-f6", front: "Partial success?", back: "Report exact successes/failures and reconcile before retry" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 60,
  difficulty: "medium",
}];
