# PowerShell Learning Architecture — PowerShell I and II

**Version:** 1.0
**Template:** Type B (Skill) — see [`TYPE_B_MASTER.md`](TYPE_B_MASTER.md)
**Reference track for Type B patterns:** Git & GitHub — [`git-github-learning-architecture.md`](git-github-learning-architecture.md)
**Tracks:**

| Track | Registry id | Catalog name | Status tier |
|-------|-------------|--------------|-------------|
| PowerShell I | `powershell` | PowerShell I: Foundations & Local Automation | `reference` |
| PowerShell II | `powershell-ii` | PowerShell II: Enterprise & Cloud Automation | `skill` |

---

## 1. Why two courses

A single "learn PowerShell" track collapses two different learners into one path:

- Someone who has never opened a shell and needs objects, pipelines, and confidence.
- Someone who can already write a working script and needs it to be *reliable, reusable, safe, and connected to real systems* (APIs, Microsoft Graph, Entra, Azure, remote machines).

Teaching both in one track forces the beginner past their working memory limit and bores the
practitioner. ReLearn therefore ships **two tracks with one shared spine**: PowerShell I owns
the language and the local machine; PowerShell II owns robustness, scale, and the Microsoft cloud.

PowerShell I stays deliberately small. It is not a container for everything PowerShell can do.

---

## 2. Intended audience and prerequisites

### PowerShell I — Foundations & Local Automation

| | |
|---|---|
| **Audience** | Help desk, desktop support, career switchers, students, anyone who has never scripted |
| **Prerequisites** | A Windows PC (PowerShell 5.1 ships with Windows) and willingness to type commands. No programming background. |
| **Environment** | Learner's own machine. Every graded step is read-only or writes only to the learner's own Documents / TEMP folders. |

### PowerShell II — Enterprise & Cloud Automation

| | |
|---|---|
| **Audience** | Junior sysadmins, IT support moving into automation, cloud/identity administrators-in-training |
| **Prerequisites** | **PowerShell I or equivalent fundamentals** — objects, pipeline, variables, collections, conditionals, loops, functions, basic error handling, and one prior `Invoke-RestMethod` call |
| **Environment** | Learner's own machine. Microsoft Graph and Azure topics grade against **locally generated fixture data** — the lab's first step builds the mock payload with `ConvertTo-Json`, so no tenant, subscription, or download is required. A live tenant/subscription is an explicitly optional stretch path. |

PowerShell II never describes its graduate as an expert. The honest claim is:
*"can design, document, and safely operate small production automation, and can read and debug
someone else's."*

---

## 3. Boundary between I and II

| Concept | PowerShell I | PowerShell II |
|---------|--------------|---------------|
| Discovery | `Get-Help`, `Get-Command`, aliases, naming conventions | Reading unfamiliar module help, `Get-Command -Module`, comment-based help you *write* |
| Objects | Properties, methods, `Get-Member`, `Select-Object`, formatting vs data | `[PSCustomObject]` report models, calculated properties, `Group-Object`, `Compare-Object`, aggregation |
| Pipeline | Filter / select / sort / iterate / compose | Functions that *accept* pipeline input (`ValueFromPipeline`, `process` block) |
| Language | Variables, arrays, hash tables, operators, strings, `if`, loops, simple functions, script files | Advanced functions, `[CmdletBinding()]`, typed and validated parameters, module layout |
| Errors | Terminating vs non-terminating at beginner depth, `try/catch`, `-ErrorAction`, readable messages | `try/catch/finally`, `$_.Exception`, `-ErrorVariable`, `throw`, retry policy, `Write-Verbose`/`Write-Debug`, structured logs |
| Data | CSV, JSON, small reports, exports | Bulk validation pipelines, dataset comparison, grouped/aggregated reporting, success + error report pairs |
| APIs | **One** beginner lesson: `Invoke-RestMethod`, JSON response, select useful fields | Headers, auth patterns, POST, pagination, HTTP error handling, rate limits, retry with backoff |
| Credentials | Never hardcode a password (stated as a rule) | `PSCredential`, `SecureString` limits, environment variables, SecretManagement/SecretStore, least privilege, cloud auth models |
| Modules | Not covered | Finding, trusting, installing, and **writing** a module with a manifest |
| Windows admin | Read-only services/processes on your own PC | Event logs, inventory, local users/groups, bulk operations with safeguards |
| Remoting | Not covered | WinRM model, `Enter-PSSession`, `Invoke-Command`, sessions, fan-out, security posture |
| Microsoft Graph | Not covered | What Graph is, Graph PowerShell SDK, scopes, least privilege, user/group/licence reporting |
| Entra / M365 | Not covered | Membership, account state, licence reporting, read-only vs state-changing classification, change planning |
| Azure | Not covered | `Az` module, context and subscriptions, resource discovery and inventory reporting |
| Unattended | Not covered | Scheduled tasks, service principals / managed identities, retries, idempotence, safe failure |
| Professional patterns | "Test before you change" habit | `SupportsShouldProcess`, `-WhatIf`/`-Confirm`, input validation, auditing, config separation, documentation |

### Why Graph, Azure, and remoting belong in II, not I

1. **They presuppose the object model.** Graph and `Az` return deeply nested objects. A learner who
   cannot yet run `Get-Member` will copy commands without understanding the output.
2. **They presuppose error discipline.** Every one of them fails across a network — tokens expire,
   scopes are missing, throttling happens. Teaching them before `try/catch` produces learners who
   silently ignore failures.
3. **They presuppose credential literacy.** The single fastest way to create a security incident is
   to teach cloud automation before `PSCredential`, least privilege, and "never hardcode a secret".
4. **They are state-changing by nature.** Beginner labs must stay read-only or self-scoped. Entra and
   Azure cmdlets can affect other people. Those belong behind a `-WhatIf` and change-planning lesson.
5. **They are environment-dependent.** PowerShell I must be completable on any Windows PC with no
   account, tenant, or subscription. PowerShell II can honestly say "these two projects grade against
   fixtures; live tenant is optional".

---

## 4. Learning outcomes

### After PowerShell I a learner can

1. Discover a cmdlet they have never seen using `Get-Help` and `Get-Command`, and explain the Verb-Noun convention.
2. Explain that PowerShell emits **objects**, inspect any output with `Get-Member`, and name the difference between formatting output and manipulating data.
3. Build a working pipeline that filters, selects, sorts, and counts, and explain why `Where-Object` must run before `Format-Table`.
4. Use variables, strings and quoting rules, arrays, hash tables, comparison and logical operators, `if`, and loops.
5. Write a `.ps1` script with a `param` block and at least one function.
6. Automate common local tasks: files and folders, processes, services (read-only), CSV import/export, and a small structured report.
7. Distinguish terminating from non-terminating errors, use `try/catch` and `-ErrorAction` deliberately, and produce a useful error message instead of a silent failure.
8. Call one public REST API with `Invoke-RestMethod`, read the JSON it returns, and select useful fields from it.
9. Recover from their own mistakes: wrong property name, filtering formatted text, bad path, broken conditional, unquoted path, uncaught error.

### After PowerShell II a learner can

1. Turn a throwaway script into a reusable tool: advanced function, `[CmdletBinding()]`, typed and validated parameters, pipeline input, comment-based help.
2. Handle failure deliberately: `try/catch/finally`, `-ErrorAction`/`-ErrorVariable`, meaningful exceptions, retry with backoff, and logs that a colleague can read at 3 a.m.
3. Debug automation they did not write, using `Write-Verbose`, `Write-Debug`, `Set-PSBreakpoint`, and a repeatable isolate-the-failure method.
4. Build bulk data workflows: validate messy CSV input, normalise it into custom objects, group and aggregate, compare two datasets, and emit paired success/error reports.
5. Automate a REST API end to end: headers, authentication patterns, POST, pagination, HTTP error handling, and rate-limit awareness.
6. Choose a defensible credential strategy and explain why `SecureString` is not encryption at rest on every platform.
7. Find, trust, install, and author modules, including a minimal manifest.
8. Automate Windows administration at scale — services, event logs, inventory, local accounts, bulk operations — with safeguards and a dry-run first.
9. Explain PowerShell remoting accurately: what WinRM is, when to use `Enter-PSSession` versus `Invoke-Command`, how sessions and fan-out work, and what the security trade-offs are.
10. Use Microsoft Graph PowerShell to retrieve and report on users, groups, and licences with least-privilege read scopes — and read Graph output critically.
11. Classify any Entra/M365 command as read-only, safe change, administrative change, or high-risk, and write a change plan before touching a tenant.
12. Discover, query, and report on Azure resources with the `Az` module, and explain the relationship between PowerShell, Azure CLI, and the underlying REST/ARM API.
13. Ship unattended automation: scheduled execution, non-interactive identity, retries, idempotence, and safe failure behaviour.
14. Apply professional patterns by default: `SupportsShouldProcess`, `-WhatIf`, confirmation, validation, logging, auditing, least privilege, configuration separated from code, and documentation.

**Not claimed after II:** production Azure architecture, Graph application-permission administration
at scale, DSC/Ansible-style configuration management, or CI/CD pipeline engineering. Those are
separate tracks.

---

## 5. Track maps

### PowerShell I — 5 modules, 17 topics, 10 labs

| Module | Topics | Lab |
|--------|--------|-----|
| M1 Shell Basics | Why the Shell · Cmdlets & Pipeline · First Commands Safely | `ps-lab-first-commands` — discovery Try/Break/Fix |
| M2 Files & Objects | Paths & Navigation · Objects & Properties · Aliases vs Cmdlets | `ps-lab-object-discovery` (objects) · `ps-lab-files-navigation` |
| M3 Pipeline Reports | Filtering with Where-Object · Shaping with Select-Object · Sorting & Measure-Object | `ps-lab-pipeline-report` |
| M4 Output & Admin Tasks | Formatting & Export · Services & Processes · Variables & Quoting · **Arrays & Hash Tables** | `ps-lab-services-export` · `ps-lab-collections-report` |
| M5 Scripting & Capstone | If & Loops · Functions & Parameters · **JSON & Your First API Call** · Errors & Capstone | `ps-lab-first-script` · `ps-lab-json-api` · `ps-lab-error-handling` · `ps-lab-capstone-admin` |

Bold = added in this pass. Curriculum steps: 17 topics + 10 practice labs = **27**.

### PowerShell II — 6 modules, 15 topics, 14 labs/projects

| Module | Topics | Labs / projects |
|--------|--------|-----------------|
| M1 Reusable Tool Design | Advanced Functions & Comment-Based Help · Parameters, Types & Validation | `ps2-lab-build-a-tool` |
| M2 Reliability & Diagnostics | Errors in Depth · Debugging & Logging | `ps2-lab-error-contract` · `ps2-lab-broken-automation` |
| M3 Data & API Automation | Data Shaping & Reporting · REST APIs · Credentials & Secrets | `ps2-project-bulk-user-cleanup` · `ps2-project-api-automation` · `ps2-lab-secrets-hygiene` |
| M4 Enterprise Windows Automation | Modules & the Gallery · Windows Admin at Scale · PowerShell Remoting | `ps2-lab-build-a-module` · `ps2-project-it-inventory` · `ps2-lab-remoting-reasoning` |
| M5 Microsoft Cloud Automation | Microsoft Graph · Entra ID & M365 Reporting · Azure PowerShell | `ps2-project-graph-report` · `ps2-lab-entra-change-plan` · `ps2-project-azure-inventory` |
| M6 Production Automation & Capstone | Unattended Automation · Professional Patterns & Capstone | `ps2-lab-scheduled-automation` · `ps2-lab-whatif-safety` · `ps2-capstone-automation-toolkit` |

Curriculum steps: 15 topics + 14 practice labs = **29**.

Project families covered: **A** IT inventory reporter (`ps2-project-it-inventory`), **B** bulk user data
cleanup (`ps2-project-bulk-user-cleanup`), **C** API automation with pagination and retry
(`ps2-project-api-automation`), **E** Microsoft 365 / Graph report (`ps2-project-graph-report`), and
**F** Azure resource report (`ps2-project-azure-inventory`). Family **D** (help-desk diagnostic tool)
is deliberately folded into the capstone rather than shipped as a fifth standalone project, to keep
the track from padding.

---

## 6. Lab standard

Every PowerShell lab from this pass follows the ReLearn Type B practical pattern, extended with
explicit verification and reflection:

```text
### Try It      build or run something that works
### Break It    introduce one realistic, lesson-relevant mistake
### Fix It      diagnose and repair it
### Verify It   prove the fixed behaviour with evidence you can paste into a ticket
### Reflect     answer why the fix worked
```

Rules:

- The Break It failure must reinforce the topic objective. No arbitrary syntax vandalism.
- Every lab is completable on a stock Windows PC with no admin rights unless the lab says otherwise.
- Nothing recursive-deletes, disables security controls, or mass-modifies accounts.
- Cloud labs generate their own fixture payload in step 1 using `ConvertTo-Json`, so they run with no
  tenant, no subscription, and no download. A live path is an optional extra section, and the lab
  instructions say which is which.
- Reflect answers are written in the learner's own notes — ReLearn does not yet auto-grade prose.

Fixture-graded labs are listed in §8.

---

## 7. Safety classification

PowerShell II teaches an explicit four-tier vocabulary, used in lesson prose, quiz stems, and the
change-planning lab:

| Tier | Meaning | Examples |
|------|---------|----------|
| **Read-only** | Cannot change state. Safe to run while learning. | `Get-Service`, `Get-MgUser`, `Get-AzResource`, `Invoke-RestMethod` GET |
| **Safe local change** | Changes only the operator's own scope. | writing a CSV to your Documents folder, `New-Item` in a temp folder, `Import-Module` |
| **Administrative change** | Changes shared state for other people. Needs a change plan and `-WhatIf` first. | `Set-Service`, `Set-MgUser`, `New-AzResourceGroup`, group membership edits |
| **Destructive / high-risk** | Data loss or outage potential. Not performed in this course. | `Remove-Item -Recurse -Force`, bulk account removal, `Remove-AzResourceGroup`, disabling security tooling |

Course rule: **no destructive tier command is ever presented as a step to run.** Where a destructive
command must be discussed (so learners recognise it in someone else's script), it appears in prose or
as a `-WhatIf` dry run only, always paired with the reason it is dangerous.

---

## 8. Environment-dependent content

ReLearn cannot guarantee a second Windows machine, a Microsoft 365 tenant, or an Azure subscription.
These topics therefore ship with an honest split:

| Topic | Graded path | Optional live path |
|-------|-------------|--------------------|
| PowerShell Remoting | Static code-reasoning lab over provided transcripts and scripts — the learner predicts and explains behaviour. No simulated "success" output is presented as real. | Loopback `Enter-PSSession localhost` after `Enable-PSRemoting` on a personal machine, or a second VM from the VM Lab track. Requires admin; clearly labelled. |
| Microsoft Graph | Learner-generated fixture JSON shaped like a Graph `/users` response, piped through the same `ConvertFrom-Json` → `Get-Member` → filter → report pipeline as live Graph output. | `Connect-MgGraph -Scopes User.Read.All` in a Microsoft 365 Developer tenant, read-only scopes only. |
| Entra / M365 | Change-plan authoring plus read-only/state-changing classification of a provided command list, with `ShouldProcess` dry runs against local objects. | Same developer tenant, `-WhatIf` only. |
| Azure PowerShell | Learner-generated fixture JSON shaped like `Get-AzResource` output, used for inventory, grouping, and tag-compliance reporting. | Azure free account, `Get-Az*` read-only commands. |
| Scheduled automation | `Register-ScheduledTask` on the learner's own machine under their own user context, running a read-only report script. | — |

The lab instructions state the limitation explicitly. We do not fake remote or cloud execution.

---

## 9. Platform integration

Both tracks are Path A `Certification` content packs — no new engine.

| Integration point | Wiring |
|-------------------|--------|
| Registry | `src/content/registry.ts` — `powershell`, `powershellII` |
| Catalog tier | `src/lib/track-status.ts` — `powershell: "reference"`, `powershell-ii: "skill"` |
| Production hierarchy | `src/content/production/hierarchy.ts` — both mapped to template `"B"` |
| Routes | Generated from the registry by `src/lib/static-params.ts`; no per-cert route code |
| Progress | `src/stores/progress-store.ts` via `topicKey`/`assignmentKey`; steps counted by `countCurriculumSteps` |
| Mastery | `src/lib/mastery.ts` from quiz, flashcard, and review scores per topic |
| Weakness | `src/lib/weakness.ts` from missed quiz questions and flashcards |
| Recommendation | `src/lib/coach-recommendation.ts` → `getNextCurriculumStep` (lesson, then ordered practice labs) |
| Adaptive review | `src/lib/adaptive-review.ts` draws from every topic's `questionBank` |
| External tool guide | `windows-powershell` guide in `src/content/external-tools/packet-tracer.ts`, linked from every lab |
| LES anchor | `powershell-shell` (I) and `powershell-automation` (II) — `src/components/lesson/` |

`objectives` use skill ids, not vendor exam ids: `PS-M0n-Ox` for PowerShell I and `PS2-M0n-Ox`
for PowerShell II. Neither track participates in CCNA/A+ objective strict validation.

---

## 10. Assessment standard

Quiz and question-bank items in both tracks must test understanding, not vocabulary. Allowed shapes:

- Predict the output of a pipeline or script.
- Choose the pipeline/command that produces a stated result.
- Diagnose a broken script from its error message.
- Identify the unsafe implementation among plausible alternatives.
- Choose the correct data-handling approach for a stated input.
- Explain parameter binding, validation, or error-action behaviour.
- Interpret Graph or Azure output.
- Decide whether a script is safe to run, and at which safety tier.

Banned shapes: "what does this cmdlet stand for", alias trivia, and anything answerable by
memorising syntax with no model of the behaviour. Every distractor gets an explanation that names the
specific misunderstanding it represents.

---

## 11. Verification

```bash
npm run verify:curriculum
npm run verify:production
npx tsc --noEmit
npm run build
npx eslint .
npx playwright test e2e/powershell-tracks.spec.ts
```

`--strict-ccna*`, `--strict-aplus`, and `--strict-experience` do not apply to these Type B tracks.
`--strict-all` emits CES advisory warnings for every cert in the registry; PowerShell I and II are
authored to satisfy the CES field set (objectives, three or more common mistakes, workplace traps,
real-world scenario, guided example, lightbulb moment).
