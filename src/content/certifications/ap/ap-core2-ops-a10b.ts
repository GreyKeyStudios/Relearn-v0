import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.2", difficulty,
});

export const apCore2OpsBatch2Topics: Topic[] = [{
  id: "ap-change-management",
  name: "Change Management Best Practices",
  prerequisites: ["ap-documentation-ticketing"],
  objectives: ["AP1202-4.2"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Make Controlled Changes with Evidence, Approval, and a Way Back",
    content: `Change management reduces avoidable outages and makes intentional modifications accountable:

\`request and business reason → define scope and affected assets/services → analyze risk and impact → plan/test/validate → obtain authorization → schedule and communicate → implement with evidence → verify → back out if thresholds fail → document and review\`

Change control is proportional, not one identical ceremony for every environment. Standard, normal, and emergency workflows may differ, but authority, traceability, risk, validation, and communication still matter.

## Define the change

A change request should identify requester/owner, business reason, exact systems/configuration, current and proposed state, dependencies, users/services affected, security/privacy/compliance concerns, expected benefit, implementation steps, test evidence, validation plan, maintenance window, communication, rollback/backout plan, responsible implementer, and approvals.

Avoid vague scope such as “upgrade servers.” Name versions, configuration items, sites, sequence, exclusions, prerequisites, and success/failure criteria. Link the incident, problem, project, vendor advisory, or security requirement that motivates the work.

## Risk and impact

Assess likelihood and consequence across availability, performance, security, privacy, integrity, compliance, interoperability, supportability, users, downstream dependencies, recovery time, and business timing. Consider blast radius, novelty, complexity, reversibility, monitoring quality, staff/vendor availability, and collision with other changes.

Risk is not eliminated by approval. Approval confirms an authorized decision with known evidence and constraints; the implementer must still stop when reality leaves the approved plan.

## Types and authorization

**Standard change:** repeatable, low-risk, pre-authorized procedure with defined boundaries. Deviating from those boundaries usually makes it a normal change.

**Normal change:** evaluated and approved through the ordinary process before implementation.

**Emergency change:** expedited to address urgent harm, outage, or security risk. It is not “no documentation.” Record justification, authority, risk, actions, validation, and retrospective review as policy requires.

Do not split a risky change into small tickets to evade review, self-approve outside policy, borrow another person’s account, or treat technical capability as authorization.

## Test and implementation plans

Test in a representative non-production environment when feasible. Confirm backups/configuration exports, version compatibility, dependencies, capacity, licenses, credentials through approved mechanisms, monitoring, access, and rollback prerequisites. Test both intended behavior and important regressions.

An implementation plan is ordered and observable: prechecks → commands/actions → checkpoints → go/no-go criteria → validation → communication → closure. Identify who performs, observes, approves continuation, and owns service after handoff. Use peer review or separation of duties where required.

## Backout and recovery

A rollback plan states the trigger, decision authority, exact restoration steps, required backups/snapshots/configurations, expected recovery time, data reconciliation, communications, and verification. “Undo the change” is not a plan.

Rollback can itself be risky or impossible after data/schema/security transitions. In those cases use a tested roll-forward, restore, failover, staged migration, or vendor-supported recovery strategy. Verify backup usability and restoration authority before starting—not after failure.

## Schedule and communication

Choose a window using business cycles, user impact, dependencies, freeze periods, support/vendor coverage, time zones, monitoring duration, and recovery time. A low-usage window is not automatically safe if nobody can recover the service.

Communicate audience, purpose, impact, expected duration, user action, workaround, owner/contact, start/end updates, and rollback or delay. Avoid exposing sensitive technical detail to inappropriate audiences or promising zero risk.

## Implement, verify, and close

Run prechecks immediately before work: approved version and scope, correct target, health baseline, backup/recovery readiness, access, monitoring, dependencies, communication, and absence of conflicting changes. Record actual start/end, implementer, deviations, evidence, checkpoints, results, incidents, and decision points.

Stop and reassess when scope, target, prerequisites, behavior, impact, security, or time exceeds approved thresholds. Do not improvise an unreviewed production change merely because the window is open.

Validate technical success and business outcome: intended state, service health, security controls, performance, integrations, logs/alerts, user workflow, data integrity, monitoring, and stakeholder acceptance where required. Close only after records, asset/configuration/KB/runbook updates, follow-up, and lessons are captured.

## Failed and emergency changes

If validation fails, follow the approved decision path: pause, contain impact, back out or recover, verify restored service/data, communicate, open/link incidents, preserve evidence, and reschedule through review. Do not conceal failure or rewrite the plan as if the deviation were authorized.

Post-implementation review asks whether the objective was met, risk predictions were accurate, controls worked, unexpected effects occurred, rollback was used, documentation remains correct, and future changes should be standardized or redesigned. A blameless review still requires precise accountability.

**Fictional planning practice only:** do not modify real production systems. **Next when authorized:** AP1202-4.3 backup and recovery.`,
  },
  lightbulbMoment: "The heart of change management is not the approval form; it is a shared, evidence-based decision about scope, risk, success, failure, and recovery before production is altered.",
  keyFacts: [
    "Define current state, proposed state, scope, dependencies, and success criteria",
    "Approval accepts known risk but does not authorize unlimited improvisation",
    "Standard changes are pre-authorized only within defined boundaries",
    "Emergency changes remain authorized, documented, validated, and reviewed",
    "Backout plans require triggers, authority, steps, data handling, and verification",
    "Prechecks confirm the approved target and recovery readiness immediately before work",
    "Close only after technical and business validation plus record updates",
  ],
  guidedExample: {
    title: "Plan a managed Wi-Fi authentication change",
    steps: [
      "Define affected sites, controller/RADIUS versions, certificate chain, client types, exclusions, business reason, and linked security requirement.",
      "Map dependencies and blast radius; test representative managed and guest clients; capture baseline health and approved configuration backup.",
      "Set go/no-go and rollback triggers, decision authority, restoration steps, recovery time, monitoring, and client validation.",
      "Obtain approval, schedule with network/help-desk coverage, notify users and owners, and perform target/version prechecks.",
      "Implement in a pilot site, validate authentication, roaming, monitoring, security, and user workflow; expand only at the checkpoint.",
      "Record actual results/deviations and update configuration, runbook, KB, asset/service records, and post-change findings.",
    ],
  },
  commonMistakes: [
    "Using a vague scope or success criterion",
    "Treating approval as permission to improvise",
    "Calling untested recurring work a standard change",
    "Using emergency status to skip authorization and records",
    "Assuming a snapshot is a tested rollback plan",
    "Scheduling when recovery staff or vendors are unavailable",
    "Continuing after go/no-go thresholds fail",
    "Validating only that a command completed, not the business workflow",
  ],
  examTraps: [
    "Standard versus normal versus emergency change",
    "Risk acceptance versus risk removal",
    "Test plan versus implementation plan versus validation plan",
    "Backup/snapshot versus complete backout plan",
    "Go/no-go and rollback triggers",
    "Technical success versus business outcome",
    "Emergency documentation and retrospective review",
  ],
  realWorldScenario: "A security update is urgent but breaks one legacy client in testing. The team does not label it standard or deploy everywhere. They document exposure and compatibility risk, obtain emergency authority, pilot an approved compensating control and limited rollout, monitor explicit success criteria, maintain a tested restore path, communicate affected users, and complete a retrospective that creates a supported legacy-client retirement change.",
  whenThisFails: [
    "If the actual target, scope, prerequisites, or impact differ from approval, stop and obtain a new decision",
    "If rollback cannot preserve data integrity, escalate before implementation and design a tested recovery or roll-forward path",
    "If an emergency requires immediate containment, follow emergency authority and document decisions contemporaneously or as soon as safely possible",
  ],
  teacherReflectionPrompt: "Design a change for upgrading a shared application: distinguish test, implementation, validation, and backout plans; define approval, communications, go/no-go criteria, and post-change evidence.",
  quiz: [
    item("ap-change-q1", "What makes a proposed change adequately scoped?", "Named current/proposed state, targets, dependencies, exclusions, impact, and success criteria", "Upgrade systems", "A verbal guess", "easy"),
    item("ap-change-q2", "A technician must deviate beyond the approved plan. Best action?", "Stop at a safe point, preserve state, and obtain an authorized decision", "Improvise because the window is open", "Hide the deviation"),
    item("ap-change-q3", "Which statement best describes an emergency change?", "Expedited authorized work with risk, actions, validation, records, and retrospective review", "Any change without documentation", "A way to bypass approval"),
    item("ap-change-q4", "What distinguishes a backout plan from 'restore the snapshot'?", "Defined trigger, authority, validated steps, data reconciliation, timing, communication, and verification", "The word rollback", "No recovery test", "hard"),
    item("ap-change-q5", "A command succeeds, but the user workflow fails. Is the change successful?", "No; validate technical state and the intended business outcome", "Yes; command exit status is enough", "Yes; close without recording it"),
  ],
  questionBank: [
    item("ap-change-b1", "When is a change standard?", "It is repeatable, low-risk, documented, and pre-authorized within defined boundaries", "Whenever the technician has done it once", "Whenever no one is watching"),
    item("ap-change-b2", "Risk approval means:", "Authorized stakeholders accept evaluated risk and constraints; implementation controls still apply", "Risk is eliminated", "Any scope is permitted"),
    item("ap-change-b3", "Representative testing should cover:", "Intended behavior, dependencies, client/platform variety, and important regressions", "Only installation start", "Only the newest client"),
    item("ap-change-b4", "A safe maintenance window accounts for:", "Business timing, dependencies, freezes, support coverage, monitoring, and recovery time", "Lowest traffic only", "Implementer convenience only"),
    item("ap-change-b5", "Prechecks are performed:", "Immediately before work to confirm target, health, scope, backup, access, dependencies, and conflicts", "Only after failure", "Instead of planning"),
    item("ap-change-b6", "Rollback is impossible after a schema conversion. What is needed?", "A tested restore, roll-forward, staged migration, or vendor-supported recovery strategy before approval", "Hope", "An unverified screenshot", "hard"),
    item("ap-change-b7", "Which evidence belongs in the change record?", "Actual times, implementer, checkpoints, deviations, results, validation, incidents, and decisions", "Passwords", "A rewritten history"),
    item("ap-change-b8", "Post-implementation review should:", "Compare objective, predicted risk, results, controls, surprises, recovery, and documentation improvements", "Assign blame without evidence", "Delete failed-change details"),
  ],
  flashcards: [
    { id: "ap-change-f1", front: "Standard change?", back: "Repeatable, low-risk, pre-authorized within strict boundaries" },
    { id: "ap-change-f2", front: "Emergency change?", back: "Expedited—not unauthorized or undocumented" },
    { id: "ap-change-f3", front: "Go/no-go criterion?", back: "Evidence threshold controlling whether implementation proceeds" },
    { id: "ap-change-f4", front: "Backout plan parts?", back: "Trigger, authority, steps, data, timing, communication, verification" },
    { id: "ap-change-f5", front: "Precheck purpose?", back: "Confirm approved target, health, dependencies, and recovery readiness" },
    { id: "ap-change-f6", front: "Change success?", back: "Intended technical state plus business outcome and no unacceptable regression" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 55,
  difficulty: "medium",
}];
