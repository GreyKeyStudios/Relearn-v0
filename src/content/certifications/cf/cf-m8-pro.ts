import type { Domain } from "../../types";

/**
 * Computer Fundamentals — Module 8: Professional Readiness (Pathway F, FContent-2).
 * Standalone literacy track — not exam prep. Chains from cf-shortcuts-that-matter (Module 7).
 */
export const cfProDomain: Domain = {
  id: "cf-pro",
  name: "Module 8 — Professional Readiness",
  topics: [
    {
      id: "cf-what-is-help-desk",
      name: "What Is Help Desk, Really?",
      objectives: ["CF-M8-O1", "CF-M8-O2"],
      prerequisites: ["cf-shortcuts-that-matter"],
      lesson: {
        title: "What Is Help Desk, Really?",
        content: `"Help desk" gets used loosely enough in everyday conversation that it's worth pinning down what the job actually is, especially if you're considering it as a real career direction rather than just a phrase you've heard. At its core, help desk is the first point of contact when someone's technology isn't working the way they need it to — a password won't reset, an app won't open, a laptop won't connect to Wi-Fi, a printer refuses to cooperate. The person answering that call, chat, or ticket is doing real, valuable work: turning someone's frustration and confusion into a clear problem, and then either solving it directly or routing it to whoever can.

Most organizations structure support in tiers, and understanding this structure removes a lot of mystery about what "escalating" even means in a workplace, tying directly back to the escalation habit from Module 6. Tier 1 handles the most common, well-understood issues — password resets, basic connectivity problems, guiding someone through a setting, or confirming whether an outage is affecting more than one person. Tier 2 handles issues Tier 1 couldn't resolve, usually because they require deeper system access, specialized knowledge, or more time. Tier 3 typically involves the specialists or engineers who built or maintain the systems in question, brought in for the hardest or most unusual problems. Nobody expects a Tier 1 support person to personally fix everything — the job is to solve what's solvable quickly and route everything else clearly and efficiently, which is exactly the skill you built in Module 6's escalation topic.

A typical day in help desk work has a rhythm, even though no two tickets are identical: a queue of incoming requests, prioritized roughly by urgency and impact (is this affecting one person or an entire team?), worked through methodically using the exact troubleshooting mindset from Module 6 — describe the problem clearly, try simple checks, read errors carefully, change one thing at a time, document what you tried. The technical skill matters, but so does the communication skill: explaining a fix in plain language to someone who may already feel embarrassed or frustrated, without making them feel worse for not already knowing the answer.

It's worth naming directly why this is a legitimate, respected career entry point, not a "consolation prize" job. Help desk roles are where most IT careers genuinely begin, because the job forces you to build the exact combination of technical troubleshooting and clear communication that every more advanced IT role builds on. The patience, curiosity, and calm-under-pressure habits this module and Module 6 have been building aren't just "customer service skills" — they're the actual foundation of the job, not a soft add-on to it.

If any of this sounds intimidating, remember the throughline of this entire course: familiarity comes from repetition, not innate talent, and every habit in this module builds directly on troubleshooting and communication skills you've already practiced, not on brand-new abilities you're missing.`,
      },
      lightbulbMoment:
        "Help desk work is exactly the troubleshooting and escalation mindset from Module 6, applied to someone else's problem instead of your own — it's not a different skill set.",
      keyFacts: [
        "Help desk is the first point of contact when someone's technology isn't working as needed",
        "Support is usually structured in tiers: Tier 1 (common issues), Tier 2 (deeper access/knowledge), Tier 3 (specialists/engineers)",
        "The job is to solve what's solvable quickly and route everything else clearly, mirroring Module 6's escalation skill",
        "A typical day involves a prioritized queue worked through with the troubleshooting mindset from Module 6",
        "Help desk is where most IT careers genuinely begin, not a lesser or unrelated job",
      ],
      guidedExample: {
        title: "Following a Ticket Through the Tiers",
        steps: [
          "A user reports their laptop won't connect to office Wi-Fi.",
          "Tier 1 checks the common causes: is Wi-Fi toggled on, is the correct network selected, is the password correct.",
          "Tier 1 resolves it directly — the network was accidentally set to a guest network instead of the main one.",
          "A separate ticket: the same issue is affecting an entire floor of the building, not just one person.",
          "Tier 1 recognizes this exceeds a single-user fix and escalates to Tier 2, who has access to check the actual network hardware.",
          "Tier 2 finds and fixes a misconfigured access point, resolving it for everyone at once.",
        ],
      },
      commonMistakes: [
        "Assuming help desk work is unskilled or a 'consolation prize' rather than a real technical and communication skill set",
        "Expecting a Tier 1 support person to personally fix every possible issue without ever escalating",
        "Treating a user's frustration as a personal attack instead of a normal reaction to a disrupted workday",
        "Underestimating how much the Module 6 troubleshooting mindset directly transfers into this kind of work",
      ],
      realWorldTraps: [
        "A Tier 1 issue gets stuck for hours because the support person is embarrassed to escalate something they couldn't solve alone",
        "A user is treated dismissively for not knowing technical vocabulary, discouraging them from reporting real problems in the future",
        "An issue affecting many people gets treated as a series of individual one-off tickets instead of being recognized and escalated as a shared root cause",
      ],
      realWorldScenario:
        "You're considering an entry-level IT role and worry you don't have 'real' technical experience yet. Looking honestly at this course, you realize you've already practiced describing problems clearly, working a troubleshooting ladder, reading errors, documenting attempts, and knowing when to escalate — which is precisely the skill set a Tier 1 help desk role is built on, not a separate, more advanced skill you're missing.",
      whenThisFails: [
        "If you're unsure whether an issue is Tier 1 or needs escalation, treat that uncertainty itself as a reason to ask a more experienced coworker rather than guessing either direction",
        "If a user is highly frustrated when you first talk to them, address the frustration briefly and calmly before diving into technical questions — people communicate more clearly once they feel heard",
      ],
      teacherReflectionPrompt:
        "Explain the difference between Tier 1, Tier 2, and Tier 3 support in your own words, using a specific example issue for each.",
      quiz: [
        {
          id: "cf-what-is-help-desk-q1",
          prompt: "What does Tier 1 support typically handle?",
          choices: [
            { id: "a", text: "The most common, well-understood issues" },
            { id: "b", text: "Only the rarest, most complex system failures" },
            { id: "c", text: "Nothing — Tier 1 only forwards every ticket" },
            { id: "d", text: "Building brand-new software features" },
          ],
          correctChoiceId: "a",
          explanation: "Tier 1 is the first point of contact for common issues like password resets and connectivity problems.",
          difficulty: "easy",
        },
        {
          id: "cf-what-is-help-desk-q2",
          prompt: "What is the core job of a Tier 1 support role?",
          choices: [
            { id: "a", text: "Solve what's solvable quickly and route everything else clearly" },
            { id: "b", text: "Personally resolve every issue with no escalation ever" },
            { id: "c", text: "Only handle hardware, never software" },
            { id: "d", text: "Avoid speaking with users directly" },
          ],
          correctChoiceId: "a",
          explanation: "Knowing when and how to escalate is as much a part of the job as direct problem-solving.",
          difficulty: "easy",
        },
        {
          id: "cf-what-is-help-desk-q3",
          prompt: "Why is help desk considered a legitimate career entry point rather than a lesser job?",
          choices: [
            { id: "a", text: "It builds the exact combination of troubleshooting and communication skills more advanced IT roles depend on" },
            { id: "b", text: "It requires no real skill at all" },
            { id: "c", text: "It's only a stepping stone with no useful skills gained" },
            { id: "d", text: "Most IT careers skip this stage entirely" },
          ],
          correctChoiceId: "a",
          explanation: "The technical and communication skills built here are foundational, not a separate, lesser skill set.",
          difficulty: "medium",
        },
        {
          id: "cf-what-is-help-desk-q4",
          prompt: "An issue turns out to be affecting an entire floor of a building, not just one person. What should happen?",
          choices: [
            { id: "a", text: "It should be escalated, since it likely needs deeper access to fix at the root cause" },
            { id: "b", text: "It should be treated exactly like a single-user issue" },
            { id: "c", text: "It should be ignored until more people complain" },
            { id: "d", text: "Tier 1 should attempt to fix network hardware directly" },
          ],
          correctChoiceId: "a",
          explanation: "Scope (one person vs. many) is a key signal for whether an issue needs escalation to a tier with deeper access.",
          difficulty: "medium",
        },
        {
          id: "cf-what-is-help-desk-q5",
          prompt: "Which skills from this course transfer most directly into help desk work?",
          choices: [
            { id: "a", text: "The Module 6 troubleshooting mindset and clear communication habits" },
            { id: "b", text: "None — help desk requires entirely separate skills" },
            { id: "c", text: "Only spreadsheet formulas from Module 7" },
            { id: "d", text: "Only password management from Module 7" },
          ],
          correctChoiceId: "a",
          explanation: "The describe-reproduce-check-document-escalate mindset from Module 6 is the direct foundation of the role.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-what-is-help-desk-b1",
          prompt: "What typically distinguishes Tier 2 from Tier 1 support?",
          choices: [
            { id: "a", text: "Tier 2 handles issues requiring deeper system access or specialized knowledge" },
            { id: "b", text: "Tier 2 never talks to Tier 1" },
            { id: "c", text: "Tier 2 only exists in very large companies" },
            { id: "d", text: "There is no real difference" },
          ],
          correctChoiceId: "a",
          explanation: "Tier 2 picks up issues Tier 1 couldn't resolve due to access or knowledge limits.",
        },
        {
          id: "cf-what-is-help-desk-b2",
          prompt: "Who typically handles the rarest, most specialized problems?",
          choices: [
            { id: "a", text: "Tier 3 specialists or engineers" },
            { id: "b", text: "Only Tier 1" },
            { id: "c", text: "No one — these go unresolved" },
            { id: "d", text: "The original user themselves" },
          ],
          correctChoiceId: "a",
          explanation: "Tier 3 typically involves the specialists who built or maintain the systems in question.",
        },
        {
          id: "cf-what-is-help-desk-b3",
          prompt: "What does a help desk worker turn a user's frustration and confusion into?",
          choices: [
            { id: "a", text: "A clear problem that can be solved or routed appropriately" },
            { id: "b", text: "A personal grievance to hold against the user" },
            { id: "c", text: "Nothing — frustration is ignored entirely" },
            { id: "d", text: "An excuse to close the ticket immediately" },
          ],
          correctChoiceId: "a",
          explanation: "Translating frustration into a clear, actionable problem is a core part of the role.",
        },
        {
          id: "cf-what-is-help-desk-b4",
          prompt: "How does a typical help desk queue get prioritized?",
          choices: [
            { id: "a", text: "Roughly by urgency and impact — how many people are affected and how severely" },
            { id: "b", text: "Strictly by the order tickets arrive, with no other consideration" },
            { id: "c", text: "Randomly" },
            { id: "d", text: "By which ticket is easiest, regardless of urgency" },
          ],
          correctChoiceId: "a",
          explanation: "Urgency and scope of impact typically drive how a support queue gets worked.",
        },
        {
          id: "cf-what-is-help-desk-b5",
          prompt: "Why shouldn't a Tier 1 worker feel embarrassed to escalate an issue?",
          choices: [
            { id: "a", text: "Escalating appropriately is the correct, expected part of the job, not a personal failure" },
            { id: "b", text: "Escalation is rare and unusual" },
            { id: "c", text: "Tier 1 workers are never expected to escalate anything" },
            { id: "d", text: "Escalating always means you did something wrong" },
          ],
          correctChoiceId: "a",
          explanation: "Recognizing the limits of Tier 1 and escalating clearly is a designed, expected part of the tiered system.",
        },
        {
          id: "cf-what-is-help-desk-b6",
          prompt: "Which skill set is described as foundational to help desk work, not a soft add-on?",
          choices: [
            { id: "a", text: "Patience, curiosity, and calm-under-pressure communication" },
            { id: "b", text: "Only memorized technical trivia" },
            { id: "c", text: "Speed alone, with no regard for accuracy" },
            { id: "d", text: "Avoiding all direct communication with users" },
          ],
          correctChoiceId: "a",
          explanation: "Communication skills are treated as core job requirements, not secondary extras.",
        },
        {
          id: "cf-what-is-help-desk-b7",
          prompt: "Why might someone underestimate their own readiness for a help desk role?",
          choices: [
            { id: "a", text: "They may not realize the troubleshooting and communication skills they've already practiced directly transfer" },
            { id: "b", text: "Help desk requires an unrelated, entirely new skill set" },
            { id: "c", text: "Readiness has nothing to do with practiced habits" },
            { id: "d", text: "There's no honest way to prepare for this kind of role" },
          ],
          correctChoiceId: "a",
          explanation: "The course's Module 6 habits map directly onto real help desk work, which people often don't realize.",
        },
        {
          id: "cf-what-is-help-desk-b8",
          prompt: "What should you do first when a user is highly frustrated before diving into technical questions?",
          choices: [
            { id: "a", text: "Briefly and calmly acknowledge the frustration" },
            { id: "b", text: "Ignore their tone completely and proceed with questions" },
            { id: "c", text: "End the conversation immediately" },
            { id: "d", text: "Match their frustration with your own" },
          ],
          correctChoiceId: "a",
          explanation: "Addressing frustration briefly first often leads to clearer communication for the technical part that follows.",
        },
      ],
      flashcards: [
        {
          id: "cf-what-is-help-desk-f1",
          front: "What does Tier 1 support typically handle?",
          back: "The most common, well-understood issues (password resets, connectivity, basic settings)",
        },
        {
          id: "cf-what-is-help-desk-f2",
          front: "Who handles the rarest, most specialized problems?",
          back: "Tier 3 specialists or engineers",
        },
        {
          id: "cf-what-is-help-desk-f3",
          front: "Core job of Tier 1 support?",
          back: "Solve what's solvable quickly and route everything else clearly",
        },
        {
          id: "cf-what-is-help-desk-f4",
          front: "Why is help desk a legitimate career entry point?",
          back: "It builds the exact troubleshooting + communication foundation more advanced IT roles depend on",
        },
        {
          id: "cf-what-is-help-desk-f5",
          front: "What signal suggests an issue needs escalation beyond one user?",
          back: "The same issue is affecting multiple people, suggesting a shared root cause",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-ticket-basics",
      name: "Ticket Basics — How Support Requests Flow",
      objectives: ["CF-M8-O3", "CF-M8-O4"],
      prerequisites: ["cf-what-is-help-desk"],
      lesson: {
        title: "Ticket Basics — How Support Requests Flow",
        content: `A "ticket" is simply a written record of a support request, and understanding how one moves from creation to resolution demystifies a huge chunk of how IT support actually works day to day. Far from being pointless bureaucracy, a ticket exists to solve a real, practical problem: without a written record, requests get forgotten, repeated, or lost the moment more than a couple of them are happening at once.

A ticket typically has a lifecycle with a small number of predictable stages. It's opened (created) when someone reports an issue, either by themselves through a self-service portal or by a support person on their behalf during a call or chat. It moves to in progress once someone starts actively working it — this is where the Module 6 troubleshooting habits (describe, reproduce, check, document) directly apply. It becomes resolved once a fix is applied and appears to work, and finally closed once the person who reported it confirms the fix actually solved their problem, or after enough time passes with no further report of the issue. That confirmation step matters — a ticket marked resolved without checking back is a common source of the exact same problem quietly reopening later.

Two fields on nearly every ticket are worth understanding clearly: priority and severity, sometimes combined into one field, sometimes separate. Severity describes how bad the impact is (is the whole system down, or is one minor feature just slightly annoying?). Priority describes how urgently it needs attention, which usually blends severity with scope (how many people are affected) and time-sensitivity (is there a deadline connected to this?). A low-severity issue affecting one person on a non-urgent task might reasonably wait behind a medium-severity issue blocking an entire team's ability to work. This is also where SLAs (service level agreements) come in at a basic level — an SLA is simply an agreed-upon expectation for how quickly a given priority level should get a response or resolution, which is why some tickets show an expected timeframe rather than an exact promise.

None of this structure exists to make requesters feel like a number rather than a person — it exists so that, when dozens or hundreds of requests are coming in, the ones that genuinely need fast attention actually get it, and nothing quietly falls through the cracks. Understanding this from the requester's side also makes you a better requester: a ticket that clearly states what's wrong, when it started, who's affected, and what's already been tried (exactly the Module 6 habits) moves through this lifecycle faster than a vague one, because it gives whoever picks it up a head start instead of a blank page.

Even outside a literal help-desk job, this same lifecycle thinking applies anywhere requests get tracked in writing — a maintenance request, a customer support inquiry, a bug report for an app. Recognizing the pattern (opened → in progress → resolved → closed, with priority reflecting real urgency) makes any of those systems less mysterious the first time you encounter them.`,
      },
      lightbulbMoment:
        "A ticket exists so requests don't get forgotten or repeated once more than a couple are happening at once — it's memory and accountability, not bureaucracy for its own sake.",
      keyFacts: [
        "A ticket's typical lifecycle: opened → in progress → resolved → closed",
        "Closing a ticket should include confirming with the requester that the fix actually worked",
        "Severity describes impact; priority blends severity with scope and time-sensitivity to decide urgency",
        "An SLA is an agreed-upon expectation for how quickly a given priority level gets a response or resolution",
        "A clearly written ticket (what, when, who's affected, what's tried) moves through the lifecycle faster than a vague one",
      ],
      guidedExample: {
        title: "Following One Ticket Through Its Lifecycle",
        steps: [
          "Opened: a user reports their email won't send attachments, starting this morning.",
          "Priority/severity assessed: affects one person, no hard deadline mentioned — moderate priority, low severity.",
          "In progress: support person applies the Module 6 ladder — checks file size, tries a smaller attachment, reads the exact error.",
          "A fix is identified: the attachment exceeded a size limit; the user is shown how to use a cloud-share link instead.",
          "Resolved: the fix is applied and appears to work in a test.",
          "Closed: the support person follows up with the user, who confirms sending attachments now works — the ticket closes with confirmation, not just an assumption.",
        ],
      },
      commonMistakes: [
        "Marking a ticket resolved or closed without confirming with the requester that the fix actually worked",
        "Treating every ticket as equally urgent regardless of severity, scope, or deadline",
        "Assuming SLAs are guarantees rather than agreed-upon expectations for response time",
        "Submitting a vague ticket ('it's broken') that gives whoever picks it up nothing to start with",
      ],
      realWorldTraps: [
        "A ticket gets closed prematurely, and the same issue quietly reopens a week later because it was never actually confirmed fixed",
        "A low-severity, single-person issue jumps ahead of a higher-impact issue simply because it was submitted first, with no priority triage",
        "A requester assumes an SLA is an exact promise and grows frustrated when a response arrives at the edge of the expected window rather than instantly",
      ],
      realWorldScenario:
        "You submit a request for a new peripheral device and, days later, you're unsure whether anyone is even working on it. Understanding the ticket lifecycle, you check the ticket's current status (opened vs. in progress) instead of assuming it's been ignored, and you see it's genuinely in progress with an expected timeframe attached — which turns anxious uncertainty into an accurate, calm expectation.",
      whenThisFails: [
        "If a ticket seems stuck in 'in progress' well past its expected SLA timeframe with no update, a polite, specific follow-up referencing the ticket number is reasonable and expected, not pushy",
        "If you're not sure how to describe the priority or severity of your own issue, describe the actual impact honestly (how many people, how urgent) and let whoever triages it make the final call",
      ],
      teacherReflectionPrompt:
        "Describe the four-stage ticket lifecycle in your own words, and explain why the confirmation step before closing matters as much as the fix itself.",
      quiz: [
        {
          id: "cf-ticket-basics-q1",
          prompt: "What is the typical order of a ticket's lifecycle?",
          choices: [
            { id: "a", text: "Opened → in progress → resolved → closed" },
            { id: "b", text: "Closed → opened → resolved → in progress" },
            { id: "c", text: "There is no typical order" },
            { id: "d", text: "Resolved → opened → closed → in progress" },
          ],
          correctChoiceId: "a",
          explanation: "This is the standard predictable flow of a support ticket from creation to confirmed resolution.",
          difficulty: "easy",
        },
        {
          id: "cf-ticket-basics-q2",
          prompt: "What's the difference between severity and priority?",
          choices: [
            { id: "a", text: "Severity describes impact; priority blends severity with scope and time-sensitivity" },
            { id: "b", text: "They are exactly the same thing" },
            { id: "c", text: "Severity only applies to hardware issues" },
            { id: "d", text: "Priority is decided entirely by the requester" },
          ],
          correctChoiceId: "a",
          explanation: "Priority factors in more than just how bad an issue is — also how many people it affects and any deadlines.",
          difficulty: "easy",
        },
        {
          id: "cf-ticket-basics-q3",
          prompt: "Why does confirming with the requester matter before closing a ticket?",
          choices: [
            { id: "a", text: "Without confirmation, the same problem can quietly reopen later unnoticed" },
            { id: "b", text: "It has no real benefit" },
            { id: "c", text: "It's only required for high-severity tickets" },
            { id: "d", text: "It delays resolution unnecessarily" },
          ],
          correctChoiceId: "a",
          explanation: "Confirmation ensures the fix genuinely solved the reported problem, not just appeared to.",
          difficulty: "medium",
        },
        {
          id: "cf-ticket-basics-q4",
          prompt: "What is an SLA?",
          choices: [
            { id: "a", text: "An agreed-upon expectation for how quickly a given priority level gets addressed" },
            { id: "b", text: "A guaranteed, exact promise with no exceptions" },
            { id: "c", text: "A type of error message" },
            { id: "d", text: "A file format" },
          ],
          correctChoiceId: "a",
          explanation: "SLAs set expectations for response/resolution time, not ironclad guarantees.",
          difficulty: "medium",
        },
        {
          id: "cf-ticket-basics-q5",
          prompt: "Two tickets arrive: one low-severity, single-person, non-urgent; another affecting an entire team with a deadline. What should typically happen?",
          choices: [
            { id: "a", text: "The team-wide, deadline-driven ticket should generally get higher priority" },
            { id: "b", text: "They should be handled strictly in the order submitted regardless of impact" },
            { id: "c", text: "The single-person ticket should always go first" },
            { id: "d", text: "Priority has nothing to do with scope or urgency" },
          ],
          correctChoiceId: "a",
          explanation: "Priority triage weighs impact and urgency, not just submission order.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-ticket-basics-b1",
          prompt: "What problem does a written ticket solve that a purely verbal request doesn't?",
          choices: [
            { id: "a", text: "Requests don't get forgotten, repeated, or lost once several are happening at once" },
            { id: "b", text: "It makes requests take longer on purpose" },
            { id: "c", text: "It has no real benefit over a verbal request" },
            { id: "d", text: "It replaces the need for any troubleshooting" },
          ],
          correctChoiceId: "a",
          explanation: "Written records provide memory and accountability that purely verbal requests lack at scale.",
        },
        {
          id: "cf-ticket-basics-b2",
          prompt: "What stage comes right after a ticket is opened?",
          choices: [
            { id: "a", text: "In progress" },
            { id: "b", text: "Closed" },
            { id: "c", text: "Resolved with no further steps" },
            { id: "d", text: "Deleted" },
          ],
          correctChoiceId: "a",
          explanation: "A ticket typically moves to in progress once someone begins actively working it.",
        },
        {
          id: "cf-ticket-basics-b3",
          prompt: "What does severity describe on a ticket?",
          choices: [
            { id: "a", text: "How bad the impact of the issue is" },
            { id: "b", text: "The exact time it was submitted" },
            { id: "c", text: "The requester's job title" },
            { id: "d", text: "The file format of any attachments" },
          ],
          correctChoiceId: "a",
          explanation: "Severity focuses on the magnitude of impact, independent of scheduling or scope factors.",
        },
        {
          id: "cf-ticket-basics-b4",
          prompt: "Why might a lower-severity ticket still get high priority?",
          choices: [
            { id: "a", text: "If it affects many people or has a tight deadline, priority can rise even with moderate severity" },
            { id: "b", text: "Priority is always identical to severity" },
            { id: "c", text: "Lower-severity tickets are never prioritized" },
            { id: "d", text: "Priority ignores deadlines entirely" },
          ],
          correctChoiceId: "a",
          explanation: "Priority blends severity with scope and time-sensitivity, so either factor can push urgency up.",
        },
        {
          id: "cf-ticket-basics-b5",
          prompt: "What information in a well-written ticket gives the support person a head start?",
          choices: [
            { id: "a", text: "What's wrong, when it started, who's affected, and what's already been tried" },
            { id: "b", text: "Nothing — all tickets read the same regardless of detail" },
            { id: "c", text: "Only the requester's name" },
            { id: "d", text: "The requester's opinion of the IT department" },
          ],
          correctChoiceId: "a",
          explanation: "This mirrors the Module 6 problem-description and documentation habits directly.",
        },
        {
          id: "cf-ticket-basics-b6",
          prompt: "If a ticket seems stuck past its expected SLA window, what's a reasonable action?",
          choices: [
            { id: "a", text: "A polite, specific follow-up referencing the ticket number" },
            { id: "b", text: "Submitting five duplicate tickets" },
            { id: "c", text: "Assuming nothing can be done" },
            { id: "d", text: "Escalating anonymously with no reference to the original ticket" },
          ],
          correctChoiceId: "a",
          explanation: "A specific, calm follow-up is the expected, professional way to check on a delayed ticket.",
        },
        {
          id: "cf-ticket-basics-b7",
          prompt: "Why isn't an SLA the same as an exact, guaranteed promise?",
          choices: [
            { id: "a", text: "It's an agreed-upon expectation for typical response/resolution time, not an ironclad guarantee" },
            { id: "b", text: "SLAs are always missed" },
            { id: "c", text: "SLAs apply only to hardware tickets" },
            { id: "d", text: "SLAs are decided by the requester alone" },
          ],
          correctChoiceId: "a",
          explanation: "Framing SLAs as expectations, not guarantees, sets realistic expectations for requesters.",
        },
        {
          id: "cf-ticket-basics-b8",
          prompt: "This same ticket lifecycle idea (opened → in progress → resolved → closed) shows up in which other everyday contexts?",
          choices: [
            { id: "a", text: "Maintenance requests, customer support inquiries, and app bug reports" },
            { id: "b", text: "Only in formal IT departments, nowhere else" },
            { id: "c", text: "It's unique to email software" },
            { id: "d", text: "It doesn't apply outside a literal help-desk job" },
          ],
          correctChoiceId: "a",
          explanation: "The same tracked-request pattern appears across many everyday systems beyond IT help desks specifically.",
        },
      ],
      flashcards: [
        {
          id: "cf-ticket-basics-f1",
          front: "Typical ticket lifecycle stages?",
          back: "Opened → in progress → resolved → closed",
        },
        {
          id: "cf-ticket-basics-f2",
          front: "Severity vs. priority?",
          back: "Severity = how bad the impact is; priority = severity blended with scope and time-sensitivity",
        },
        {
          id: "cf-ticket-basics-f3",
          front: "Why confirm before closing a ticket?",
          back: "Without confirmation, the same problem can quietly reopen unnoticed",
        },
        {
          id: "cf-ticket-basics-f4",
          front: "What is an SLA?",
          back: "An agreed-upon expectation for how quickly a given priority level gets a response or resolution",
        },
        {
          id: "cf-ticket-basics-f5",
          front: "What makes a ticket move through the lifecycle faster?",
          back: "Clearly stating what's wrong, when it started, who's affected, and what's already been tried",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-writing-useful-notes",
      name: "Writing Notes Someone Else Can Use",
      objectives: ["CF-M8-O5", "CF-M8-O6"],
      prerequisites: ["cf-ticket-basics"],
      lesson: {
        title: "Writing Notes Someone Else Can Use",
        content: `"Fixed it" is, on its own, one of the least useful sentences in all of technical support — and it gets written constantly, by well-meaning people who genuinely did fix something, but left no trace of what, how, or why for the next person (including their own future self) who runs into something similar.

A genuinely useful ticket note or support log follows a small, repeatable structure that mirrors the exact documentation habit built in Module 6: what was the problem (in the requester's words and in your own clarified version), when did it start and how often does it happen, what did you try, in what order, and what was the actual result of each attempt, and what's the final outcome or current status. This isn't about writing more — often a good note is shorter than a bad one, because it's organized instead of rambling. Compare "tried a few things, seems okay now" to "restarted the print spooler service (no change), reinstalled the printer driver (fixed it — printer now shows online and test page printed successfully)." The second one is barely longer, but it tells the next reader exactly what worked, which means if the same printer acts up again next month, nobody has to start from zero.

Clarity matters more than technical sophistication here. Avoid unexplained jargon or internal shorthand that only makes sense to you in the moment — write for a version of yourself (or a coworker) who has zero memory of this specific incident by next week, because that's realistically who will be reading it. Timestamps matter more than people expect: "this morning" written today is useless information in three weeks; "9:15 AM" or a specific date is not. If you took an action that changed a setting, name the setting specifically rather than describing it vaguely — "changed a setting in the network options" tells a future reader nothing actionable, while "disabled the VPN's kill switch under Network settings" tells them exactly where to look.

There's a habit worth calling out directly: write the note as you go, immediately after each attempt, rather than trying to reconstruct the whole sequence from memory once everything is finally resolved. This is the same discipline from Module 6's one-change-at-a-time habit, applied specifically to writing rather than just remembering — the moment you're relying on memory for something that happened forty-five minutes and six attempts ago, details start blurring or disappearing entirely.

Good notes have a second, quieter benefit beyond helping any one specific ticket: over time, they build a searchable record of what's actually gone wrong and what's actually worked, across weeks and months, which is exactly the raw material a knowledge base (covered later in this module) gets built from. A note you write carelessly today is a resource you (or someone else) either has or doesn't have available six months from now — that's a real, tangible reason to take the extra thirty seconds now.`,
      },
      lightbulbMoment:
        "\"Fixed it\" tells the next reader nothing — \"reinstalled the printer driver, fixed it, test page printed\" is barely longer but tells them exactly what worked.",
      keyFacts: [
        "A useful note structure: what the problem was, when/how often, what was tried and the result of each attempt, and the final outcome",
        "A good note is often shorter than a bad one because it's organized, not because it's longer",
        "Write for a reader (including future-you) with zero memory of this specific incident",
        "Specific timestamps and specific setting names matter far more than vague phrases like 'this morning' or 'a setting'",
        "Write notes as you go, not reconstructed from memory once everything is finally resolved",
      ],
      guidedExample: {
        title: "Turning a Vague Note Into a Useful One",
        steps: [
          "Vague version: \"Printer was broken, tried stuff, fixed it now.\"",
          "Add the problem, specifically: \"Printer showed offline starting ~9:00 AM, affecting one desk.\"",
          "Add what was tried, in order: \"Checked cable and power (fine). Restarted print spooler service (no change).\"",
          "Add the actual fix, specifically: \"Reinstalled the printer driver — printer now shows online.\"",
          "Add confirmation: \"Test page printed successfully at 9:40 AM.\"",
          "Final note: specific, ordered, honest about what didn't work, and confirms the actual result.",
        ],
      },
      commonMistakes: [
        "Writing 'fixed it' or 'tried a few things' with no specifics about what actually worked",
        "Using vague time references ('this morning,' 'a while ago') instead of specific timestamps",
        "Waiting until everything is fully resolved to try to reconstruct the whole sequence from memory",
        "Using unexplained shorthand or jargon that won't make sense to a future reader with no memory of the incident",
      ],
      realWorldTraps: [
        "The exact same printer issue recurs next month, and nobody can find what worked last time because the note just says 'fixed'",
        "A note references 'the usual fix' without naming it, leaving a future reader with no idea what that actually means",
        "A detailed sequence of troubleshooting steps gets lost because notes were only written after everything was already resolved, from memory",
      ],
      realWorldScenario:
        "Six months after resolving a tricky Wi-Fi issue, the exact same problem reappears on a different device. Because you wrote a specific, ordered note at the time — not just 'fixed it' — you find it in two minutes, follow the same three steps that worked before, and resolve the repeat issue in five minutes instead of troubleshooting it again from scratch.",
      whenThisFails: [
        "If you genuinely don't have time to write a full note in the moment, at minimum jot down the final specific fix immediately after it works — a partial note beats no note",
        "If you're unsure how much detail to include, err toward more specific rather than less; a reader can skim past detail they don't need, but can't recover detail that was never written down",
      ],
      teacherReflectionPrompt:
        "Take a real 'fixed it' style note you've written or seen before, and rewrite it using the what/when/tried/result/outcome structure from this topic.",
      quiz: [
        {
          id: "cf-writing-useful-notes-q1",
          prompt: "Why is 'fixed it' considered an unhelpful note on its own?",
          choices: [
            { id: "a", text: "It leaves no trace of what, how, or why for the next person" },
            { id: "b", text: "It's grammatically incorrect" },
            { id: "c", text: "It's too long" },
            { id: "d", text: "It's always factually wrong" },
          ],
          correctChoiceId: "a",
          explanation: "A note with no specifics gives a future reader nothing actionable to work from.",
          difficulty: "easy",
        },
        {
          id: "cf-writing-useful-notes-q2",
          prompt: "What's the recommended structure for a useful note?",
          choices: [
            { id: "a", text: "Problem, when/how often, what was tried and each result, final outcome" },
            { id: "b", text: "Just the final outcome, nothing else" },
            { id: "c", text: "A single vague sentence" },
            { id: "d", text: "Only technical jargon with no plain-language explanation" },
          ],
          correctChoiceId: "a",
          explanation: "This structure mirrors the Module 6 documentation habit and gives a complete, useful picture.",
          difficulty: "easy",
        },
        {
          id: "cf-writing-useful-notes-q3",
          prompt: "Why write specific timestamps instead of vague phrases like 'this morning'?",
          choices: [
            { id: "a", text: "Vague time references become meaningless once enough time has passed" },
            { id: "b", text: "Timestamps are required by law" },
            { id: "c", text: "There's no real difference" },
            { id: "d", text: "Specific times only matter for legal documents" },
          ],
          correctChoiceId: "a",
          explanation: "\"This morning\" written today is useless information read weeks later; a specific time or date isn't.",
          difficulty: "medium",
        },
        {
          id: "cf-writing-useful-notes-q4",
          prompt: "Why write notes as you go rather than reconstructing them from memory afterward?",
          choices: [
            { id: "a", text: "Memory blurs or loses details across multiple attempts and time" },
            { id: "b", text: "Writing as you go is always slower" },
            { id: "c", text: "It has no real benefit over reconstructing later" },
            { id: "d", text: "Notes written afterward are always more accurate" },
          ],
          correctChoiceId: "a",
          explanation: "This mirrors the one-change-at-a-time documentation discipline from Module 6, applied to note-taking specifically.",
          difficulty: "medium",
        },
        {
          id: "cf-writing-useful-notes-q5",
          prompt: "What long-term benefit do specific, well-written notes provide beyond the immediate ticket?",
          choices: [
            { id: "a", text: "They become searchable raw material for a knowledge base over time" },
            { id: "b", text: "They have no benefit beyond the single ticket" },
            { id: "c", text: "They only matter for legal compliance" },
            { id: "d", text: "They slow down future troubleshooting" },
          ],
          correctChoiceId: "a",
          explanation: "Good notes accumulate into a searchable resource that helps resolve future, similar issues faster.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-writing-useful-notes-b1",
          prompt: "Which note is more useful?",
          choices: [
            { id: "a", text: "\"Reinstalled the printer driver — fixed it, test page printed.\"" },
            { id: "b", text: "\"Tried a few things, seems okay now.\"" },
            { id: "c", text: "\"Printer issue resolved.\"" },
            { id: "d", text: "\"Did the usual fix.\"" },
          ],
          correctChoiceId: "a",
          explanation: "Specificity about the actual action and confirmed result makes this note genuinely reusable later.",
        },
        {
          id: "cf-writing-useful-notes-b2",
          prompt: "Why avoid unexplained shorthand or jargon in a note?",
          choices: [
            { id: "a", text: "A future reader with no memory of the incident won't understand it" },
            { id: "b", text: "Jargon is always factually incorrect" },
            { id: "c", text: "Notes should never use any technical terms at all" },
            { id: "d", text: "Shorthand is required for all notes" },
          ],
          correctChoiceId: "a",
          explanation: "Writing for a reader with zero memory of the incident means avoiding assumptions about shared context.",
        },
        {
          id: "cf-writing-useful-notes-b3",
          prompt: "What makes a note 'organized' rather than just longer?",
          choices: [
            { id: "a", text: "Following a clear structure: problem, attempts and results, final outcome" },
            { id: "b", text: "Writing as many words as possible" },
            { id: "c", text: "Repeating the same sentence multiple times" },
            { id: "d", text: "Skipping the final outcome entirely" },
          ],
          correctChoiceId: "a",
          explanation: "A structured, organized note communicates more with fewer, better-chosen words.",
        },
        {
          id: "cf-writing-useful-notes-b4",
          prompt: "\"Changed a setting in the network options\" is a weak note entry because:",
          choices: [
            { id: "a", text: "It doesn't name the specific setting, giving a future reader nothing actionable" },
            { id: "b", text: "It's too specific" },
            { id: "c", text: "It's grammatically incorrect" },
            { id: "d", text: "Network settings should never be mentioned in notes" },
          ],
          correctChoiceId: "a",
          explanation: "Naming the exact setting changed is what makes a note reusable for a similar future issue.",
        },
        {
          id: "cf-writing-useful-notes-b5",
          prompt: "What's the minimum acceptable note if you're genuinely short on time?",
          choices: [
            { id: "a", text: "The specific final fix, written down immediately after it works" },
            { id: "b", text: "No note at all" },
            { id: "c", text: "A note written a week later from memory" },
            { id: "d", text: "Just the ticket number with nothing else" },
          ],
          correctChoiceId: "a",
          explanation: "A partial but specific note is far more useful than no note or a vague, memory-reconstructed one.",
        },
        {
          id: "cf-writing-useful-notes-b6",
          prompt: "How do good, specific notes relate to a knowledge base?",
          choices: [
            { id: "a", text: "They accumulate into the searchable raw material a knowledge base is built from" },
            { id: "b", text: "They have no relationship to a knowledge base" },
            { id: "c", text: "Knowledge bases are built entirely separately from ticket notes" },
            { id: "d", text: "Notes replace the need for a knowledge base entirely" },
          ],
          correctChoiceId: "a",
          explanation: "Specific, well-organized notes become the source material for a broader knowledge base over time.",
        },
        {
          id: "cf-writing-useful-notes-b7",
          prompt: "Why err toward including more specific detail rather than less in a note?",
          choices: [
            { id: "a", text: "A reader can skim past extra detail, but can't recover detail that was never written down" },
            { id: "b", text: "More detail always makes a note worse" },
            { id: "c", text: "Notes should be as short as physically possible regardless of usefulness" },
            { id: "d", text: "There's no real tradeoff to consider" },
          ],
          correctChoiceId: "a",
          explanation: "Missing detail can't be recovered later, while excess detail is at worst mildly inconvenient to skim.",
        },
        {
          id: "cf-writing-useful-notes-b8",
          prompt: "Which earlier module's habit does writing notes as you go directly extend?",
          choices: [
            { id: "a", text: "Module 6's one-change-at-a-time documentation habit" },
            { id: "b", text: "Module 7's password manager habit" },
            { id: "c", text: "Module 5's phishing awareness" },
            { id: "d", text: "It has no connection to earlier material" },
          ],
          correctChoiceId: "a",
          explanation: "This topic applies the same real-time documentation discipline specifically to writing usable notes.",
        },
      ],
      flashcards: [
        {
          id: "cf-writing-useful-notes-f1",
          front: "Why is 'fixed it' an unhelpful note?",
          back: "It leaves no trace of what, how, or why for the next reader",
        },
        {
          id: "cf-writing-useful-notes-f2",
          front: "Useful note structure?",
          back: "Problem, when/how often, what was tried and each result, final outcome",
        },
        {
          id: "cf-writing-useful-notes-f3",
          front: "Why use specific timestamps instead of 'this morning'?",
          back: "Vague time references become meaningless once enough time has passed",
        },
        {
          id: "cf-writing-useful-notes-f4",
          front: "When should you write a note?",
          back: "As you go, immediately after each attempt — not reconstructed later from memory",
        },
        {
          id: "cf-writing-useful-notes-f5",
          front: "Long-term benefit of specific, well-written notes?",
          back: "They become searchable raw material for a knowledge base",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-remote-support-etiquette",
      name: "Remote Support Etiquette",
      objectives: ["CF-M8-O7", "CF-M8-O8"],
      prerequisites: ["cf-writing-useful-notes"],
      lesson: {
        title: "Remote Support Etiquette",
        content: `Remote support — someone helping you (or you helping someone else) through screen sharing or a remote-control tool rather than sitting at the same desk — has become common enough that it deserves its own etiquette, distinct from an in-person interaction. The tools have gotten simple technically; the social and trust dynamics around them are what actually take practice.

The single most important rule, on both sides of a remote support session, is explicit permission and visibility. If you're providing support, ask clearly before taking control of someone's screen, rather than assuming consent because a session is already connected — "I'm going to click into your Settings now, is that okay?" takes two seconds and preserves trust. If you're receiving support, know that you generally retain the right to end a remote session at any time, for any reason, and a legitimate support person will never make you feel bad for exercising that right. This connects directly to the "what feels wrong" instinct from Module 5: unsolicited remote-access requests, or pressure to keep a session open longer than you're comfortable with, are exactly the pattern that scam tech support calls exploit — legitimate support is something you requested, through a channel you trust, not something that shows up uninvited.

Narrating your actions while you're the one providing remote support is a small habit with an outsized effect on trust and comfort: saying "I'm opening Device Manager now" or "I'm about to restart this — your open windows will close, that's expected" out loud (or in chat) as you go means the person watching never feels like something mysterious or alarming is happening to their device without explanation. This is also just good practice for your own troubleshooting discipline — narrating forces you to be deliberate about each single change, which ties back to Module 6's one-change-at-a-time habit.

Patience matters more in remote support than almost any other context in this module, because the person on the other end is often already anxious about a broken device and now also watching a stranger (or at least someone less familiar with the exact same screen) move confidently through settings they don't recognize. Avoid jargon without a plain-language translation, avoid taking over completely when walking someone through a step themselves would build their own confidence for next time, and avoid any tone of impatience or condescension — remember Module 1's foundational idea that unfamiliarity is not the same thing as inability.

Privacy awareness rounds this topic out: during any remote session, be conscious that whatever is currently visible on screen — open tabs, notifications, files — becomes visible to whoever's watching too. If you're providing support, it's considerate to suggest closing anything unrelated and private before starting; if you're receiving support, it's entirely reasonable to close a personal tab or notification yourself before a session begins, and no legitimate support process should ever require you to share something unrelated to the actual problem.`,
      },
      lightbulbMoment:
        "Legitimate remote support is something you requested through a channel you trust — unsolicited access requests or pressure to keep a session open are the exact scam pattern from Module 5.",
      keyFacts: [
        "Always ask explicit permission before taking control of someone's screen, even mid-session",
        "You can end a remote support session at any time, for any reason, without justification",
        "Narrate actions out loud while providing support so nothing feels mysterious or alarming",
        "Avoid jargon without translation, and avoid taking over completely when a step would build the other person's confidence instead",
        "Whatever's visible on screen during a session is visible to the other party — close anything unrelated or private beforehand",
      ],
      guidedExample: {
        title: "A Well-Run Remote Support Session",
        steps: [
          "Support person confirms: \"Can you confirm you requested this session and can see my cursor on your screen now?\"",
          "Before making any change: \"I'm going to open Device Manager to check your network adapter — okay to proceed?\"",
          "While working: \"I'm about to restart this driver — your Wi-Fi icon may flicker briefly, that's expected.\"",
          "When a step could be shown instead of just done: \"Here's exactly where this setting lives, in case you want to check it yourself next time.\"",
          "Before ending: \"That should resolve it — is there anything currently open on your screen you'd like me to help close, or are we done?\"",
          "Session ends cleanly, with the user clear on what changed and why.",
        ],
      },
      commonMistakes: [
        "Taking control of a screen or making changes without asking explicit permission first",
        "Assuming a remote session, once started, can't be ended by the person receiving support",
        "Working silently through settings without narrating what's happening or why",
        "Using unexplained jargon that leaves the person watching more confused, not less",
      ],
      realWorldTraps: [
        "A scam caller pressures someone into starting or keeping open a remote session by claiming urgency, mimicking legitimate support's tools but not its consent-based etiquette",
        "A support person silently clicks through settings, leaving the person watching anxious about what's happening to their own device",
        "A private tab or notification stays open during a session and becomes visible to someone who didn't need to see it",
      ],
      realWorldScenario:
        "You requested remote help from your company's IT support after a legitimate ticket. Midway through, you feel uneasy about a specific setting they're about to change and say so — a real support session respects that immediately, explains the setting in plain language, and either proceeds with your explicit okay or pauses to explain further, rather than pushing past your hesitation.",
      whenThisFails: [
        "If someone pressures you to start or continue a remote session you didn't request, or refuses to let you end one, treat that as the Module 5 'feels wrong' signal it is and disconnect immediately",
        "If a legitimate support session moves too fast for you to follow, it's entirely reasonable to ask the person to slow down or repeat an explanation — that's a fair request, not an inconvenience",
      ],
      teacherReflectionPrompt:
        "Describe, in your own words, the difference between a legitimate remote support session and a scam tech-support call, focusing specifically on consent and pressure.",
      quiz: [
        {
          id: "cf-remote-support-etiquette-q1",
          prompt: "What should a support person always do before taking control of someone's screen?",
          choices: [
            { id: "a", text: "Ask explicit permission first" },
            { id: "b", text: "Assume consent since the session is already connected" },
            { id: "c", text: "Take control immediately to save time" },
            { id: "d", text: "Wait for the user to ask them to stop" },
          ],
          correctChoiceId: "a",
          explanation: "Explicit permission before each significant action preserves trust throughout a session.",
          difficulty: "easy",
        },
        {
          id: "cf-remote-support-etiquette-q2",
          prompt: "Can someone receiving remote support end the session at any time?",
          choices: [
            { id: "a", text: "Yes, for any reason, without needing to justify it" },
            { id: "b", text: "No, only the support provider can end it" },
            { id: "c", text: "Only if the issue is already fixed" },
            { id: "d", text: "Only with advance written notice" },
          ],
          correctChoiceId: "a",
          explanation: "Retaining the right to end a session at any time is a core protection for the person receiving support.",
          difficulty: "easy",
        },
        {
          id: "cf-remote-support-etiquette-q3",
          prompt: "Why narrate your actions out loud while providing remote support?",
          choices: [
            { id: "a", text: "So nothing feels mysterious or alarming to the person watching" },
            { id: "b", text: "It's required by law" },
            { id: "c", text: "It has no real benefit" },
            { id: "d", text: "It slows the session down with no purpose" },
          ],
          correctChoiceId: "a",
          explanation: "Narration builds trust and comfort, and also reinforces deliberate, one-change-at-a-time troubleshooting.",
          difficulty: "medium",
        },
        {
          id: "cf-remote-support-etiquette-q4",
          prompt: "What connects unsolicited remote-access requests to Module 5?",
          choices: [
            { id: "a", text: "They match the exact scam pattern of things that 'feel wrong' covered there" },
            { id: "b", text: "Module 5 has no connection to remote support" },
            { id: "c", text: "All remote-access requests are automatically legitimate" },
            { id: "d", text: "Module 5 only covers phishing emails, not calls" },
          ],
          correctChoiceId: "a",
          explanation: "Legitimate support is requested through a trusted channel; unsolicited pressure is the scam pattern to recognize.",
          difficulty: "medium",
        },
        {
          id: "cf-remote-support-etiquette-q5",
          prompt: "During a remote session, what's a privacy-conscious step to take beforehand?",
          choices: [
            { id: "a", text: "Close anything unrelated or private, like personal tabs or notifications" },
            { id: "b", text: "Leave everything open so the support person sees more context" },
            { id: "c", text: "Share your password out loud for convenience" },
            { id: "d", text: "There's no privacy consideration in remote support" },
          ],
          correctChoiceId: "a",
          explanation: "Whatever's visible on screen becomes visible to the other party, so closing unrelated items beforehand is considerate and reasonable.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-remote-support-etiquette-b1",
          prompt: "What should a support person say before making a change during a session?",
          choices: [
            { id: "a", text: "A clear statement of what they're about to do and a request to proceed" },
            { id: "b", text: "Nothing — changes should happen silently" },
            { id: "c", text: "A technical term with no explanation" },
            { id: "d", text: "A vague statement that avoids specifics" },
          ],
          correctChoiceId: "a",
          explanation: "Explicit, specific narration before each action keeps the session transparent and trustworthy.",
        },
        {
          id: "cf-remote-support-etiquette-b2",
          prompt: "Why is patience especially important in remote support?",
          choices: [
            { id: "a", text: "The person is often already anxious and watching an unfamiliar process on their own device" },
            { id: "b", text: "Patience doesn't matter more here than elsewhere" },
            { id: "c", text: "Remote sessions are always short, so patience isn't needed" },
            { id: "d", text: "Only technical accuracy matters, not tone" },
          ],
          correctChoiceId: "a",
          explanation: "Anxiety plus unfamiliarity makes tone and pacing especially important in this specific context.",
        },
        {
          id: "cf-remote-support-etiquette-b3",
          prompt: "What should you do if a support session pressures you to keep it open longer than you're comfortable with?",
          choices: [
            { id: "a", text: "Recognize it as a red flag and disconnect" },
            { id: "b", text: "Comply, since support providers know best" },
            { id: "c", text: "Ignore the discomfort and continue" },
            { id: "d", text: "Assume this is normal for all remote support" },
          ],
          correctChoiceId: "a",
          explanation: "Pressure to extend a session against your comfort is a scam pattern, not standard legitimate practice.",
        },
        {
          id: "cf-remote-support-etiquette-b4",
          prompt: "Why avoid taking over completely when walking someone through a step themselves would work just as well?",
          choices: [
            { id: "a", text: "It builds the other person's own confidence and skill for next time" },
            { id: "b", text: "It's always faster to take over completely" },
            { id: "c", text: "There's no benefit to letting someone try it themselves" },
            { id: "d", text: "Taking over is required by remote support tools" },
          ],
          correctChoiceId: "a",
          explanation: "Guiding rather than fully taking over transfers skill and confidence, not just a one-time fix.",
        },
        {
          id: "cf-remote-support-etiquette-b5",
          prompt: "What is the key difference between legitimate remote support and a scam tech-support call?",
          choices: [
            { id: "a", text: "Legitimate support is requested by you through a channel you trust; scams show up uninvited with pressure" },
            { id: "b", text: "There is no meaningful difference" },
            { id: "c", text: "Scams always use different software" },
            { id: "d", text: "Legitimate support never asks any questions" },
          ],
          correctChoiceId: "a",
          explanation: "The consent and initiation pattern, not the tool itself, is what separates legitimate support from a scam.",
        },
        {
          id: "cf-remote-support-etiquette-b6",
          prompt: "Is it reasonable to ask a support person to slow down or repeat an explanation?",
          choices: [
            { id: "a", text: "Yes, that's a fair request, not an inconvenience" },
            { id: "b", text: "No, it's rude to ask" },
            { id: "c", text: "Only technical experts are allowed to ask this" },
            { id: "d", text: "It should never be necessary" },
          ],
          correctChoiceId: "a",
          explanation: "Asking for a slower pace or clearer explanation is a completely legitimate and expected request during support.",
        },
        {
          id: "cf-remote-support-etiquette-b7",
          prompt: "How does narrating actions during remote support connect back to Module 6?",
          choices: [
            { id: "a", text: "It reinforces the one-change-at-a-time discipline by forcing deliberate, explained steps" },
            { id: "b", text: "It has no connection to earlier material" },
            { id: "c", text: "Module 6 discourages narration" },
            { id: "d", text: "Narration only matters for writing tickets, not remote sessions" },
          ],
          correctChoiceId: "a",
          explanation: "Explaining each step as you take it naturally enforces changing and confirming one thing at a time.",
        },
        {
          id: "cf-remote-support-etiquette-b8",
          prompt: "What should a legitimate support process never require you to share?",
          choices: [
            { id: "a", text: "Anything unrelated to the actual problem being addressed" },
            { id: "b", text: "Any information at all, ever" },
            { id: "c", text: "Your name" },
            { id: "d", text: "A description of the problem" },
          ],
          correctChoiceId: "a",
          explanation: "Legitimate support stays scoped to the actual issue and doesn't require exposing unrelated personal information.",
        },
      ],
      flashcards: [
        {
          id: "cf-remote-support-etiquette-f1",
          front: "Golden rule before taking control of someone's screen?",
          back: "Always ask explicit permission first",
        },
        {
          id: "cf-remote-support-etiquette-f2",
          front: "Can you end a remote support session anytime?",
          back: "Yes, for any reason, without needing to justify it",
        },
        {
          id: "cf-remote-support-etiquette-f3",
          front: "Why narrate actions during remote support?",
          back: "So nothing feels mysterious or alarming to the person watching",
        },
        {
          id: "cf-remote-support-etiquette-f4",
          front: "Difference between legitimate support and a scam call?",
          back: "Legitimate support is requested by you through a trusted channel; scams show up uninvited with pressure",
        },
        {
          id: "cf-remote-support-etiquette-f5",
          front: "Privacy step to take before a remote session?",
          back: "Close anything unrelated or private, since whatever's visible becomes visible to the other party",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-assets-kb-scenarios",
      name: "Assets, Knowledge Base, and Practice Scenarios",
      objectives: ["CF-M8-O9", "CF-M8-O10"],
      prerequisites: ["cf-remote-support-etiquette"],
      lesson: {
        title: "Assets, Knowledge Base, and Practice Scenarios",
        content: `This final topic brings together two more workplace-readiness concepts — asset tracking and knowledge bases — and then puts everything from this module and Module 6 to work in a set of realistic practice scenarios, because reading about a skill and actually applying it under a bit of pressure are genuinely different experiences.

An "asset," in an IT context, is simply a tracked piece of equipment — a laptop, a monitor, a phone, a printer — usually identified by an asset tag: a small sticker or label with a unique number or barcode. Organizations track assets for practical reasons that have nothing to do with distrust: knowing which laptop is assigned to which person makes support faster (a ticket referencing an asset tag tells support exactly which device's history and specs they're dealing with), makes replacements and repairs easier to manage, and matters for security (a lost or stolen device can be identified and, in many organizations, remotely locked or wiped specifically because it was tracked). If you're ever asked for an asset tag number when reporting an issue, it's not bureaucratic suspicion — it's the fastest way for support to pull up exactly the right device's information.

A knowledge base (often shortened to "KB") is a searchable collection of articles describing known issues and their solutions — effectively the accumulated, organized version of all those well-written notes from earlier in this module, made available so the next person with a similar problem doesn't have to solve it from scratch. Using a knowledge base well means searching it before opening a new ticket for a problem that seems common (many workplaces expect this as a first step, not a shortcut around asking for help) — and, once you're comfortable, contributing to it: if you solved something that took real effort and might recur, writing it up as a KB article is one of the most quietly valuable things a support person can do, because it turns your one-time effort into everyone's future time savings.

Now, bring the whole module together with three brief scenarios, applying the troubleshooting mindset from Module 6 and the professional habits from this module:

Scenario 1 — "My laptop won't turn on at all, please help immediately." Before assuming hardware failure, check the simple things: is it actually plugged in, is the battery indicator light on, is the screen just at zero brightness. If genuinely nothing responds after checking power, this is a legitimate Tier 1-to-Tier 2 escalation, documented with a clear note of what was already checked.

Scenario 2 — A coworker reports Wi-Fi problems, but it turns out three other people on the same floor report the identical issue within the hour. Recognize the scope signal from earlier in this module: this isn't five separate tickets, it's one shared root cause, and it should be escalated and tracked as such, referencing the asset or location pattern connecting them.

Scenario 3 — You're asked to remotely help a stressed, unfamiliar user fix a printer issue. Apply the remote support etiquette from the last topic: ask permission, narrate your actions, avoid jargon, and write a specific, useful note afterward — not "fixed printer," but exactly what was checked and what worked, so the next person (possibly you) doesn't start from zero.

None of these scenarios require memorizing a script — they require recognizing the same small set of habits this module and Module 6 have built, and applying them calmly, in whatever specific situation actually shows up.`,
      },
      lightbulbMoment:
        "A knowledge base is just the accumulated, organized version of well-written notes — search it before opening a new ticket, and contribute to it once you've solved something that took real effort.",
      keyFacts: [
        "An asset tag uniquely identifies a piece of tracked equipment, making support, replacement, and security response faster",
        "A knowledge base is a searchable collection of known issues and solutions, built from well-documented past tickets",
        "Search the knowledge base before opening a new ticket for a problem that seems common",
        "Contributing a KB article after solving something effortful turns a one-time fix into everyone's future time savings",
        "The same troubleshooting and communication habits from this module and Module 6 apply directly to realistic workplace scenarios",
      ],
      guidedExample: {
        title: "Working a Realistic Scenario End to End",
        steps: [
          "A coworker reports 'the printer is broken' with no other detail.",
          "Apply Module 6: ask what they were trying to do, what happened, and when it started.",
          "Check the knowledge base for a similar known printer issue before assuming this is brand new.",
          "If no KB match, work the simple-checks ladder and document each attempt as you go.",
          "Once resolved, write a specific note: what was tried, what worked, and confirm with the coworker it's actually fixed.",
          "If this issue seems likely to recur, write it up as a new knowledge base article for the next person.",
        ],
      },
      commonMistakes: [
        "Treating a request for an asset tag number as suspicious rather than understanding its practical support purpose",
        "Opening a new ticket for a common issue without first checking whether a knowledge base article already covers it",
        "Solving a genuinely effortful problem and never writing it up for anyone else to benefit from later",
        "Treating a scenario with several similar reports as unrelated individual tickets instead of recognizing a shared root cause",
      ],
      realWorldTraps: [
        "A device is lost or stolen, and without an asset tag on record, identifying and securing it takes far longer than it should",
        "The same common question gets answered from scratch dozens of times because no one ever wrote it up as a knowledge base article",
        "A shared root-cause issue (like one misconfigured network device) gets logged as ten separate, seemingly unrelated tickets, delaying the actual fix",
      ],
      realWorldScenario:
        "You're new to a help desk role and get a ticket for an issue that feels oddly familiar. Instead of starting from scratch, you search the knowledge base first, find a specific article describing the exact symptom and fix, apply it, confirm it worked, and close the ticket in minutes — exactly the kind of speed a well-maintained knowledge base is built to provide.",
      whenThisFails: [
        "If the knowledge base has no matching article, that's not a failure of the system — it's an opportunity to document a brand-new one once you solve it",
        "If you're unsure whether several similar reports share a root cause or are coincidentally unrelated, ask directly whether others are experiencing the same specific symptom before assuming either way",
      ],
      teacherReflectionPrompt:
        "Walk through Scenario 2 (the shared Wi-Fi issue) out loud, explaining exactly which habits from this module and Module 6 you'd apply and in what order.",
      quiz: [
        {
          id: "cf-assets-kb-scenarios-q1",
          prompt: "What is an asset tag used for?",
          choices: [
            { id: "a", text: "Uniquely identifying a piece of tracked equipment for support, replacement, and security" },
            { id: "b", text: "Tracking an employee's personal browsing history" },
            { id: "c", text: "Nothing practical — it's purely decorative" },
            { id: "d", text: "Only for tracking software licenses, never hardware" },
          ],
          correctChoiceId: "a",
          explanation: "Asset tags speed up support, replacement, and security response by uniquely identifying equipment.",
          difficulty: "easy",
        },
        {
          id: "cf-assets-kb-scenarios-q2",
          prompt: "What is a knowledge base?",
          choices: [
            { id: "a", text: "A searchable collection of known issues and their solutions" },
            { id: "b", text: "A single person's personal notes, never shared" },
            { id: "c", text: "A type of remote support tool" },
            { id: "d", text: "A list of asset tags only" },
          ],
          correctChoiceId: "a",
          explanation: "A KB is effectively the organized, searchable version of well-documented past tickets.",
          difficulty: "easy",
        },
        {
          id: "cf-assets-kb-scenarios-q3",
          prompt: "What should you generally do before opening a new ticket for a common-seeming issue?",
          choices: [
            { id: "a", text: "Search the knowledge base for a matching known issue" },
            { id: "b", text: "Skip any research and open the ticket immediately" },
            { id: "c", text: "Assume no one has ever had this issue before" },
            { id: "d", text: "Ask for a new asset tag" },
          ],
          correctChoiceId: "a",
          explanation: "Checking the KB first is a standard, expected first step, not a shortcut around asking for help.",
          difficulty: "medium",
        },
        {
          id: "cf-assets-kb-scenarios-q4",
          prompt: "Several coworkers on the same floor report an identical Wi-Fi issue within the same hour. What's the right recognition?",
          choices: [
            { id: "a", text: "This is likely one shared root cause, not several unrelated individual problems" },
            { id: "b", text: "Each report should be treated as completely unrelated" },
            { id: "c", text: "This is definitely a coincidence with no common cause" },
            { id: "d", text: "Nothing should be escalated since it's 'just Wi-Fi'" },
          ],
          correctChoiceId: "a",
          explanation: "Recognizing scope (multiple similar reports close together) points to a shared cause worth escalating together.",
          difficulty: "medium",
        },
        {
          id: "cf-assets-kb-scenarios-q5",
          prompt: "Why write up a solved, effortful problem as a new knowledge base article?",
          choices: [
            { id: "a", text: "It turns a one-time effort into everyone's future time savings" },
            { id: "b", text: "It's required for every single ticket regardless of difficulty" },
            { id: "c", text: "It has no real long-term benefit" },
            { id: "d", text: "It replaces the need to ever document tickets again" },
          ],
          correctChoiceId: "a",
          explanation: "Contributing to the KB after a hard-won fix is one of the most valuable habits a support person can build.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-assets-kb-scenarios-b1",
          prompt: "Why isn't being asked for an asset tag number a sign of suspicion?",
          choices: [
            { id: "a", text: "It's the fastest way for support to pull up exactly the right device's information" },
            { id: "b", text: "It's always a formality with no real purpose" },
            { id: "c", text: "Asset tags are only used to track employees, not devices" },
            { id: "d", text: "There's no legitimate reason to ask for one" },
          ],
          correctChoiceId: "a",
          explanation: "Asset tags identify specific devices quickly, speeding up accurate support.",
        },
        {
          id: "cf-assets-kb-scenarios-b2",
          prompt: "A lost or stolen tracked device can often be:",
          choices: [
            { id: "a", text: "Identified and, in many organizations, remotely locked or wiped" },
            { id: "b", text: "Never located or secured in any way" },
            { id: "c", text: "Only found through a purely manual search" },
            { id: "d", text: "Automatically replaced without any record" },
          ],
          correctChoiceId: "a",
          explanation: "Asset tracking enables faster identification and remote security response for lost or stolen devices.",
        },
        {
          id: "cf-assets-kb-scenarios-b3",
          prompt: "What is a knowledge base effectively built from?",
          choices: [
            { id: "a", text: "Well-documented, organized notes from past tickets" },
            { id: "b", text: "Random guesses with no real basis" },
            { id: "c", text: "Only official vendor manuals" },
            { id: "d", text: "Nothing — it's generated automatically with no human input" },
          ],
          correctChoiceId: "a",
          explanation: "This ties directly to the earlier note-writing topic — good notes are the raw material of a KB.",
        },
        {
          id: "cf-assets-kb-scenarios-b4",
          prompt: "In Scenario 1 (laptop won't turn on), what should happen before assuming hardware failure?",
          choices: [
            { id: "a", text: "Check simple things first: power connection, battery light, screen brightness" },
            { id: "b", text: "Immediately replace the laptop" },
            { id: "c", text: "Escalate without checking anything first" },
            { id: "d", text: "Assume it's unfixable" },
          ],
          correctChoiceId: "a",
          explanation: "The Module 6 simple-checks ladder applies directly here before jumping to a bigger conclusion.",
        },
        {
          id: "cf-assets-kb-scenarios-b5",
          prompt: "In Scenario 3 (remote help for a stressed user), which habits from the previous topic apply?",
          choices: [
            { id: "a", text: "Ask permission, narrate actions, avoid jargon, and write a specific note afterward" },
            { id: "b", text: "Take control silently and work as fast as possible with no explanation" },
            { id: "c", text: "Skip documenting the fix since it's 'just a printer'" },
            { id: "d", text: "Assume the user understands all technical terms" },
          ],
          correctChoiceId: "a",
          explanation: "Remote support etiquette applies directly, including the specific-note habit from earlier in this module.",
        },
        {
          id: "cf-assets-kb-scenarios-b6",
          prompt: "If no knowledge base article matches a new problem you just solved, what's the right takeaway?",
          choices: [
            { id: "a", text: "It's an opportunity to write a new article, not a failure of the system" },
            { id: "b", text: "The knowledge base is broken and should be abandoned" },
            { id: "c", text: "The problem must not be real" },
            { id: "d", text: "Nothing should be done about it" },
          ],
          correctChoiceId: "a",
          explanation: "Gaps in a knowledge base are simply chances to expand it, not evidence the system has failed.",
        },
        {
          id: "cf-assets-kb-scenarios-b7",
          prompt: "What should you do if you're unsure whether several similar reports share one root cause?",
          choices: [
            { id: "a", text: "Ask directly whether others are experiencing the same specific symptom" },
            { id: "b", text: "Assume they're unrelated without checking" },
            { id: "c", text: "Ignore the pattern entirely" },
            { id: "d", text: "Escalate immediately with no investigation" },
          ],
          correctChoiceId: "a",
          explanation: "A direct question about shared symptoms is the fastest way to confirm or rule out a shared root cause.",
        },
        {
          id: "cf-assets-kb-scenarios-b8",
          prompt: "What is the overall theme connecting this module's final topic to Module 6?",
          choices: [
            { id: "a", text: "The same troubleshooting and communication habits apply directly to realistic workplace scenarios" },
            { id: "b", text: "Module 6 and Module 8 are completely unrelated" },
            { id: "c", text: "Only technical skill matters in realistic scenarios, not communication" },
            { id: "d", text: "Realistic scenarios require entirely new, unpracticed skills" },
          ],
          correctChoiceId: "a",
          explanation: "This topic deliberately closes the loop, showing the Module 6 mindset and this module's professional habits working together.",
        },
      ],
      flashcards: [
        {
          id: "cf-assets-kb-scenarios-f1",
          front: "What is an asset tag used for?",
          back: "Uniquely identifying a piece of tracked equipment for faster support, replacement, and security response",
        },
        {
          id: "cf-assets-kb-scenarios-f2",
          front: "What is a knowledge base?",
          back: "A searchable collection of known issues and their solutions, built from well-documented notes",
        },
        {
          id: "cf-assets-kb-scenarios-f3",
          front: "What should you do before opening a ticket for a common issue?",
          back: "Search the knowledge base first for a matching known issue",
        },
        {
          id: "cf-assets-kb-scenarios-f4",
          front: "Why contribute a KB article after a hard-won fix?",
          back: "It turns a one-time effort into everyone's future time savings",
        },
        {
          id: "cf-assets-kb-scenarios-f5",
          front: "Several similar reports appear close together — what should you consider?",
          back: "They may share one root cause rather than being unrelated individual issues",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
  ],
};
