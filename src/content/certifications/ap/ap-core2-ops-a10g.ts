import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt, choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.7", difficulty,
});

export const apCore2OpsBatch7Topics: Topic[] = [{
  id: "ap-communication",
  name: "Communication & Professionalism",
  prerequisites: ["ap-privacy-licensing", "ap-documentation-ticketing"],
  objectives: ["AP1202-4.7"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Make the User a Partner in Safe, Verifiable Support",
    content: `Professional communication turns technical work into a trustworthy service:

\`prepare and verify context → listen without interruption → clarify symptom, impact, and goal → explain the plan and boundaries → obtain required consent/approval → communicate progress and uncertainty → verify with the user → document and close\`

## First contact and active listening

Introduce yourself and role, verify the user and appropriate contact channel, confirm the affected asset/service, and ask how the issue affects their work. Let the user finish describing the problem. Use open questions for the story, then focused questions for scope, timeline, errors, recent changes, and reproduction.

Reflect back the issue in plain language: “You can open webmail, but the desktop app has prompted repeatedly since this morning; no coworkers are affected. Is that accurate?” Separate observed facts from assumptions. Avoid blame, sarcasm, jargon, talking over the user, or implying that a problem is trivial because it is familiar to you.

## Empathy without false promises

Acknowledge impact without claiming facts you do not know: “I can see this is blocking the payroll deadline. I’ll first protect the unsaved work, then test whether the issue is limited to this device.” Do not promise a fix, deadline, data recovery, confidentiality beyond policy, reimbursement, or an outcome outside your authority.

State what you know, what remains uncertain, what you will do next, expected disruption, user action, and the next update time. If an estimate changes, communicate early with evidence and a revised checkpoint.

## Match the user and channel

Use clear, respectful language appropriate to the user’s familiarity, accessibility needs, language preferences, stress, and environment. Explain one meaningful step at a time and why it matters. Ask the user to describe the result rather than merely agree.

For phone/chat/email, protect identity and private information, use approved channels, and avoid sensitive details in notifications or shared spaces. For in-person work, respect workspace and physical boundaries, ask before moving belongings, and protect screens and conversations from bystanders. For remote support, explain what the user will see, obtain authorization before control, and announce disruptive or privacy-sensitive actions.

## Difficult interactions

Stay calm, lower pace and volume, acknowledge impact, set respectful boundaries, and focus on choices within authority. Do not mirror hostility, argue, threaten, shame, or retaliate through priority or access decisions. If behavior is abusive, discriminatory, threatening, or unsafe, end or transfer the interaction according to policy and involve the appropriate manager/security/emergency channel.

A user may refuse a step because of data risk, accessibility, time, policy, or misunderstanding. Explain purpose, impact, alternatives, and consequences; do not coerce. Record the decision and escalate when the requested outcome cannot be achieved safely within the refusal.

## Scope, ownership, and escalation

Own the next action even when another team owns the fix. Tell the user who has the issue, what was handed off, why, current workaround if approved, and when to expect an update. Do not say “not my problem,” abandon the user between queues, or criticize another technician/vendor.

When you make an error, state the relevant fact, protect the user/service, notify the right owner, correct it through procedure, and document accurately. Do not hide, rewrite, or over-share blame.

Escalation communication includes symptom, impact, scope, timeline, evidence, actions/results, risk, user availability, and the explicit help or decision needed. Hierarchical escalation addresses severity, resources, policy, or relationship; functional escalation routes skill/authority.

## Change, outage, and security communication

For planned work, communicate purpose, affected service, window, expected impact, user action, workaround, contact, and completion/rollback status. For outages, avoid speculation: state confirmed scope, current response, workaround, and next update. Use consistent approved messaging.

For suspected security/privacy incidents, do not disclose sensitive indicators, affected identities, or investigative details beyond need to know. Do not accuse the user or promise the incident is contained. Follow incident communications and preserve evidence.

## Cultural awareness, accessibility, and inclusion

Avoid assumptions about ability, age, role, identity, accent, education, equipment ownership, or intent. Address the person as requested, use inclusive examples, and separate communication difficulty from technical competence. Offer approved accessibility accommodations: captions, text alternatives, screen-reader-friendly instructions, extra processing time, keyboard navigation, interpreter/relay process, or another channel.

Do not disable assistive technology as a shortcut without understanding impact and authorization. Confirm instructions work with the user’s actual input/output method.

## Professional conduct

Be punctual, prepared, appropriately presented for the workplace, protective of property and confidentiality, and honest about competence. Keep tools/workspace organized, avoid food/drink around equipment, minimize disruption, and restore the workspace. Do not use customer systems for personal activity, install unapproved tools, photograph private areas, or make jokes about content or users.

Manage conflicts of interest and gifts through policy. Maintain appropriate boundaries outside the ticket. Never solicit passwords or MFA codes. Use test accounts or let the user enter secrets privately where procedure permits.

## Teaching and handoff

Explain the cause at the right level, the safe user action, what not to do, recurrence signs, and when/how to seek help. Use teach-back: ask the user to demonstrate or summarize the critical step. Do not overload the closure with unrelated advice.

For shift/team handoff, record owner, current state, completed actions/results, risk, pending dependency, user expectation, next update, and explicit next action. A professional handoff is continuity, not a ticket dump.

## Verify and close

Ask the user to perform the original task where appropriate. Verify adjacent functions, data, access, accessibility, and approved security controls. Summarize what changed, remaining limitations, prevention/follow-up, and the next contact path. Record user confirmation or the documented attempt/closure policy.

**Practice boundary:** fictional support conversations only; no real customer or sensitive data. **Next when authorized:** AP1202-4.8 scripting basics.`,
  },
  lightbulbMoment: "Professional support is not sounding technical; it is making the user’s impact, choices, risks, next action, and proof of success clear while preserving dignity and boundaries.",
  keyFacts: [
    "Listen, reflect, then narrow with evidence",
    "Acknowledge impact without promising an unknown outcome",
    "Explain purpose, impact, alternatives, and the next update",
    "Own the next action even when another team owns the repair",
    "De-escalate calmly and use policy for abusive or unsafe behavior",
    "Adapt communication for accessibility without disabling assistive tools",
    "Verify through the user's original workflow and teach-back",
  ],
  guidedExample: {
    title: "De-escalate an urgent support call without overpromising",
    steps: [
      "The user says, “IT broke payroll again.” Let them finish, acknowledge the payroll impact, and avoid defending the team.",
      "Reflect the scope: one workstation cannot open the payroll app; web access and coworkers still work; deadline is in 45 minutes.",
      "Protect unsaved work and explain the first narrow test, expected disruption, and a ten-minute update checkpoint—without promising a fix.",
      "The issue needs application support. Provide an approved browser workaround, send a complete functional escalation, retain ownership of user updates, and state who is acting next.",
      "After repair, have the user complete the payroll workflow, confirm data and accessibility, summarize the cause/fix/limitation, and document user confirmation.",
    ],
  },
  commonMistakes: [
    "Interrupting and diagnosing before hearing the impact and timeline",
    "Using jargon or condescension to appear competent",
    "Promising a deadline, recovery, or outcome without authority",
    "Matching hostility or changing priority as retaliation",
    "Saying 'not my problem' after escalation",
    "Disclosing security or private details to reassure broadly",
    "Disabling accessibility tools as a shortcut",
    "Closing after technician-only testing without user workflow verification",
  ],
  examTraps: [
    "Active listening before narrow questions",
    "Empathy versus admission or false promise",
    "De-escalation and respectful boundaries",
    "Functional versus hierarchical escalation communication",
    "Remote-control consent and privacy narration",
    "Accessibility and inclusive communication",
    "Teach-back and user-centered verification",
  ],
  realWorldScenario: "A user using a screen reader reports that a post-update dialog is inaccessible and becomes frustrated after being told to 'just click the icon.' The technician apologizes for the unusable instruction, asks which output/input works, switches to an approved keyboard-and-audio path, does not disable the screen reader, documents the accessibility regression, provides the product team with reproducible evidence, and verifies the original workflow with the user.",
  whenThisFails: [
    "If behavior becomes threatening, discriminatory, or unsafe, end/transfer the interaction and invoke the defined manager/security/emergency path",
    "If a language or accessibility need exceeds available support, use the approved interpreter, relay, accessibility, or alternate-channel process",
    "If the user refuses a required safe step, explain alternatives/consequences, record the decision, and escalate rather than coerce or bypass",
  ],
  teacherReflectionPrompt: "Respond to an angry payroll user, a screen-reader user, and a security-incident requester: give the opening, clarification, boundary, update promise, escalation handoff, and user-centered verification.",
  quiz: [
    item("ap-communication-q1", "A user begins with a frustrated account of an outage. Best first response?", "Let them finish, acknowledge impact, reflect the facts, then ask focused scope questions", "Interrupt with a likely fix", "Tell them to calm down", "easy"),
    item("ap-communication-q2", "A fix duration is uncertain. Best statement?", "Explain what is known, the next action, expected disruption, and a realistic update checkpoint", "Promise completion in ten minutes", "Avoid all updates"),
    item("ap-communication-q3", "A ticket moves to another technical team. What ownership remains?", "Ensure a complete handoff and tell the user the owner, reason, next action, and update expectation", "Say it is no longer your problem", "Close without notice"),
    item("ap-communication-q4", "A user relies on assistive technology that conflicts with a proposed shortcut. Best action?", "Understand the workflow and use an approved accessible alternative without disabling the aid reflexively", "Disable the aid", "Blame the user"),
    item("ap-communication-q5", "What best verifies resolution?", "The user completes the original workflow and relevant adjacent/accessibility/security checks pass", "The technician says it looks fine", "The dialog disappeared once", "hard"),
  ],
  questionBank: [
    item("ap-communication-b1", "Active listening includes:", "Allowing the story, reflecting meaning, and confirming before narrowing", "Typing while ignoring the user", "Correcting every nontechnical term"),
    item("ap-communication-b2", "Empathy without overpromising sounds like:", "I see this blocks your deadline; I'll protect the current work, test scope, and update you in ten minutes", "I guarantee no data is lost", "This is easy"),
    item("ap-communication-b3", "A user refuses a reset because of local data. Best response?", "Explain purpose, risk and alternatives; verify backup/recovery, record the decision, and escalate if needed", "Reset secretly", "Threaten them"),
    item("ap-communication-b4", "Remote support should begin with:", "Identity, scope, authorization, privacy expectations, and explanation before control", "Unannounced control", "A request for the password"),
    item("ap-communication-b5", "During an outage update, avoid:", "Speculation and unsupported promises; state confirmed scope, action, workaround, and next update", "A clear timestamp", "An approved status channel"),
    item("ap-communication-b6", "A security case requires communication to be:", "Need-to-know, factual, policy-aligned, and free of accusations or unnecessary details", "Broadcast to all users", "Posted with evidence publicly"),
    item("ap-communication-b7", "Teach-back asks the user to:", "Demonstrate or summarize the critical action to confirm usable understanding", "Repeat jargon verbatim", "Reveal a password"),
    item("ap-communication-b8", "A professional error response is:", "Protect service/user, state relevant facts, notify the owner, correct through procedure, and document accurately", "Hide the error", "Blame the prior shift"),
  ],
  flashcards: [
    { id: "ap-communication-f1", front: "First conversation skill?", back: "Listen fully, acknowledge impact, reflect facts" },
    { id: "ap-communication-f2", front: "Uncertain ETA?", back: "Promise the next evidence-based update, not an unknown fix time" },
    { id: "ap-communication-f3", front: "Escalation ownership?", back: "Complete handoff plus clear user owner/next action/update" },
    { id: "ap-communication-f4", front: "Remote-control boundary?", back: "Verify identity/scope and obtain authorization before control" },
    { id: "ap-communication-f5", front: "Accessibility shortcut?", back: "Adapt the procedure; do not disable assistive tech reflexively" },
    { id: "ap-communication-f6", front: "Teach-back?", back: "User demonstrates or explains the critical workflow" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 55,
  difficulty: "medium",
}];
