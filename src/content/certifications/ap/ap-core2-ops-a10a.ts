import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id,
  prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a",
  explanation: correct,
  objectiveId: "AP1202-4.1",
  difficulty,
});

export const apCore2OpsBatch1Topics: Topic[] = [{
  id: "ap-documentation-ticketing",
  name: "Documentation, Ticketing & Support Systems",
  prerequisites: ["ap-software-troubleshoot-domain-review"],
  objectives: ["AP1202-4.1"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Turn Support Work into an Accurate, Secure, Reusable Record",
    content: `Documentation and support systems turn an individual repair into accountable team work:

\`receive request → verify identity and scope → create or update the correct record → classify impact and urgency → record evidence and actions → communicate status → resolve or escalate → verify with the user → close with reusable detail\`

A ticket is not bureaucracy pasted onto troubleshooting. It preserves ownership, prevents duplicated or contradictory work, supports service targets, protects evidence, enables handoffs, and creates data for recurring-problem analysis.

## Ticket intake and identity

Capture the requester, affected user, contact method, device/asset, location, service, exact symptom/error, start time, recent changes, scope, business impact, safety/security/data risk, and reasonable availability. Verify identity before revealing account, device, or ticket details. Do not request or record passwords, one-time codes, recovery keys, full payment data, or unnecessary private content.

Separate **symptom** (what the user observes), **impact** (what work is blocked), **scope** (who/what is affected), and **cause** (supported conclusion). Do not write a guessed cause as fact.

Good: “At 09:12, user reports Outlook desktop prompts repeatedly; webmail works; one user affected; no recent password change known.” Poor: “Email broken—probably server.”

## Categorization, priority, and service levels

Use the organization’s category and subcategory so routing and reporting work. Priority usually combines **impact** and **urgency**; it is not determined by who complains most loudly. A safety issue, active security incident, regulated-data exposure, widespread outage, or critical business interruption may override ordinary queues.

Service-level targets can govern response, update, resolution, or escalation time. Record the actual timestamps and communicate when a target is at risk. Never alter timestamps, misclassify work, or close/reopen tickets merely to make metrics look better.

## Lifecycle, ownership, and escalation

Common states include new, assigned, in progress, pending user/vendor/change, resolved, and closed. State names vary; the record must still show current owner, next action, dependency, and next update time.

**Functional escalation** routes work to a team with deeper skills or authority. **Hierarchical escalation** raises impact, urgency, resource, policy, or customer concerns through management. Escalate with a useful packet: symptom, scope, impact, timeline, evidence, actions/results, current risk, what is needed, and contact context. Do not dump an empty ticket on another queue.

Document every meaningful attempt in chronological order: who acted, date/time, evidence, exact change or command at appropriate sensitivity, result, user communication, approval, and next step. Avoid vague notes such as “tried stuff” or “fixed.”

## Knowledge bases and standard procedures

Search approved knowledge articles, known-error records, service status, vendor documentation, runbooks, and previous related tickets. Check version, platform, audience, owner, and last review date. A matching symptom does not guarantee the same cause.

When creating or improving a knowledge article, include purpose, audience, prerequisites, scope, symptoms, cause where known, safe ordered steps, warnings/rollback, verification, escalation, references, owner, version, and review date. Remove secrets and customer-specific data. Distinguish an approved procedure from an informal workaround.

## Asset, inventory, and support records

Link the correct asset and configuration item where supported: asset tag, serial number only where policy permits, assigned user, location, model, OS/version, warranty, ownership, management state, related service, accessories, repair history, and disposition. Verify identifiers instead of selecting the first similar device.

Inventory systems may track hardware, software, licenses, consumables, spare parts, and lifecycle state. Update records after assignment, repair, replacement, loan, return, transfer, or disposal. Do not confuse physical possession with ownership or authorization.

## Incident, request, problem, and change

An **incident** restores an interrupted or degraded service. A **service request** asks for a standard access, item, or service. A **problem** investigates the underlying cause of one or more incidents. A **change** adds, removes, or modifies something in a controlled environment. Terms vary by organization, but choosing the right workflow prevents unauthorized work and preserves analysis.

Link related records rather than copying conflicting histories. A recurring symptom may require a problem record; a repair requiring production modification may require a change record. Do not use an incident ticket as silent authorization for any change.

## Communication and privacy

Use clear, neutral, factual language. Avoid blame, jokes at the user’s expense, unsupported conclusions, and unexplained jargon. Record only necessary personal information, use approved attachments and channels, redact secrets, respect retention and access controls, and treat screenshots/logs as potentially sensitive.

Status updates should state what is known, impact, current action, owner, workaround if approved, next update time, and requested user action. Do not promise a deadline or outcome outside your authority.

## Resolution and closure

Resolution notes answer: what was reported; what was found; what was changed; approvals/data impact; what tests passed; whether the user confirmed; remaining limitation; follow-up/monitoring; related KB/problem/change/asset updates.

Resolve when service is restored or the defined request is fulfilled; close according to policy after confirmation or the documented closure process. A workaround may resolve an incident while the underlying problem remains open. Never close merely because the user stopped replying without following the contact and closure policy.

**Fictional practice only:** do not enter real customer data or credentials. **Next when authorized:** AP1202-4.2 change management.`,
  },
  lightbulbMoment: "A useful ticket lets the next authorized technician understand the state, evidence, risk, actions, and next decision without interviewing the previous technician or exposing the user.",
  keyFacts: [
    "Record symptom, impact, scope, and supported cause separately",
    "Priority combines impact and urgency under organizational policy",
    "Every handoff needs owner, next action, dependency, and evidence",
    "Incident, request, problem, and change serve different workflows",
    "Knowledge articles need scope, safety, verification, ownership, and versioning",
    "Link and update the correct asset throughout its lifecycle",
    "Tickets must exclude secrets and unnecessary personal data",
  ],
  guidedExample: {
    title: "Build a ticket another technician can safely continue",
    steps: [
      "Intake: verify the caller and asset; record exact error, start time, one-user scope, webmail success, and business impact.",
      "Classify: email-client incident; set priority using the impact/urgency matrix, not the requester’s title alone.",
      "Investigate: record app version, account/token tests, approved KB used, each action, and its result in chronological order.",
      "Escalate: package the timeline, evidence, failed actions, current risk, and explicit request for the messaging team.",
      "Resolve: record the confirmed token repair, desktop send/receive and calendar tests, user confirmation, related KB correction, and no remaining limitation.",
    ],
  },
  commonMistakes: [
    "Writing a guessed cause as fact",
    "Using priority to reward the loudest or most senior requester",
    "Changing timestamps or categories to protect metrics",
    "Handoffs without evidence, owner, or explicit request",
    "Copying an old fix without checking platform and article version",
    "Recording passwords, codes, keys, or excessive private data",
    "Closing after a reboot without verification or user outcome",
    "Treating a workaround as permanent root-cause resolution",
  ],
  examTraps: [
    "Impact versus urgency versus priority",
    "Symptom versus supported root cause",
    "Functional versus hierarchical escalation",
    "Incident versus request versus problem versus change",
    "Required escalation packet",
    "Privacy-safe documentation",
    "Resolution versus closure and workaround versus permanent fix",
  ],
  realWorldScenario: "Three users report intermittent printing. The technician links each incident to the correct printer asset, records timestamps and error codes, avoids declaring hardware failure, identifies a recurring queue-service pattern, restores service using an approved runbook, links the incidents to a problem record, and proposes a controlled change. Resolution notes include print tests and user confirmation; the problem remains open for root-cause work.",
  whenThisFails: [
    "If the ticket may contain a security incident, sensitive data, or legal evidence, restrict access and escalate under policy",
    "If category, priority, or ownership is disputed, preserve facts and use the defined escalation path",
    "If a knowledge article is unsafe, stale, or wrong, stop using it and notify its owner rather than silently editing production procedure",
  ],
  teacherReflectionPrompt: "Turn 'VIP says email is broken; restarted; still bad' into a complete intake, priority rationale, action log, escalation packet, and verified resolution without inventing facts.",
  quiz: [
    item("ap-doc-ticket-q1", "Which ticket opening is best?", "Record verified user/asset, exact symptom, time, scope, impact, recent changes, and risk", "Email broken", "Probably server failure", "easy"),
    item("ap-doc-ticket-q2", "What normally determines ticket priority?", "Organizational impact and urgency criteria, including safety/security overrides", "Requester seniority alone", "Technician preference"),
    item("ap-doc-ticket-q3", "A technician needs a network specialist. What should functional escalation include?", "Timeline, scope, evidence, actions/results, current risk, and the specific help needed", "Only the ticket number", "A password"),
    item("ap-doc-ticket-q4", "Several incidents share an unknown underlying cause. Which linked record is appropriate?", "A problem record for root-cause investigation", "A fabricated closure", "An unrelated asset"),
    item("ap-doc-ticket-q5", "What makes resolution notes complete?", "Finding, approved action, exact verification, user outcome, limitations, follow-up, and related records", "Fixed", "A screenshot containing credentials", "hard"),
  ],
  questionBank: [
    item("ap-doc-ticket-b1", "Symptom and cause differ because:", "A symptom is observed; a cause requires supporting evidence", "They are always identical", "Cause is whatever was guessed first", "easy"),
    item("ap-doc-ticket-b2", "Which state detail prevents abandoned work?", "Current owner, pending dependency, next action, and next update time", "Only ticket color", "Requester title"),
    item("ap-doc-ticket-b3", "Hierarchical escalation is most appropriate for:", "Impact, urgency, resources, policy, or customer concerns needing management authority", "Every routine password request", "Avoiding documentation"),
    item("ap-doc-ticket-b4", "Before applying a KB fix, verify:", "Scope, platform/version, prerequisites, warnings, owner, and review currency", "Only that the title sounds similar", "That it has the shortest steps"),
    item("ap-doc-ticket-b5", "A standard laptop request is usually:", "A service request handled by the approved fulfillment workflow", "Always a security incident", "Silent authorization for any change"),
    item("ap-doc-ticket-b6", "Which information should not appear in a ticket?", "Passwords, one-time codes, recovery keys, and unnecessary private content", "Asset tag", "Verification result", "easy"),
    item("ap-doc-ticket-b7", "A workaround restores service but cause remains. Correct record state?", "Resolve the incident per policy and keep/link problem work for root cause", "Claim permanent repair", "Delete the history"),
    item("ap-doc-ticket-b8", "After swapping a failed device, also update:", "Asset assignment, location, repair/replacement, warranty, and lifecycle records", "Only the wallpaper", "Nothing outside the ticket"),
  ],
  flashcards: [
    { id: "ap-doc-ticket-f1", front: "Priority inputs?", back: "Impact plus urgency under policy" },
    { id: "ap-doc-ticket-f2", front: "Functional escalation?", back: "Route to deeper skill or authority with a complete evidence packet" },
    { id: "ap-doc-ticket-f3", front: "Problem record?", back: "Underlying cause across one or more incidents" },
    { id: "ap-doc-ticket-f4", front: "Change record?", back: "Controlled addition, removal, or modification" },
    { id: "ap-doc-ticket-f5", front: "Ticket privacy rule?", back: "Necessary data only; never secrets or excessive private content" },
    { id: "ap-doc-ticket-f6", front: "Closure proof?", back: "Exact verification, user outcome, limitations, and follow-up" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 55,
  difficulty: "medium",
}];
