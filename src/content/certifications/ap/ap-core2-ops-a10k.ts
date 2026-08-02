import type { Topic } from "../../types";

const item = (id: string, objectiveId: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({ id, prompt, choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }], correctChoiceId: "a", explanation: correct, objectiveId, difficulty });

export const apCore2OpsIntegrationTopics: Topic[] = [{
  id: "ap-ops-domain-review",
  name: "Operational Procedures Domain Review",
  prerequisites: ["ap-documentation-ticketing", "ap-change-management", "ap-backup-recovery", "ap-safety", "ap-environment", "ap-privacy-licensing", "ap-communication", "ap-scripting-basics", "ap-remote-access", "ap-ai-basics"],
  objectives: ["AP1202-4.1", "AP1202-4.2", "AP1202-4.3", "AP1202-4.4", "AP1202-4.5", "AP1202-4.6", "AP1202-4.7", "AP1202-4.8", "AP1202-4.9", "AP1202-4.10"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Integrate Safe, Accountable Support Operations",
    content: `Operational Procedures turns a technical action into an authorized, recoverable, professional service:

\`verify identity, ownership, context, and authority → protect people, data, privacy, environment, and evidence → plan the least-risk action and recovery → communicate and document → implement with controlled tools/access → verify function, trust, records, and closure\`

## Ten connected lenses

1. **Documentation/support systems (4.1):** record symptom, impact, scope, evidence, owner, action, verification, and next step; distinguish incident, request, problem, and change.
2. **Change management (4.2):** define scope/risk/test/approval/window/backout/go-no-go/validation; emergency does not mean unauthorized or undocumented.
3. **Backup/recovery (4.3):** design to RPO/RTO, separate failure domains, protect keys/copies, and prove recoverability through tested restore.
4. **Safety (4.4):** people before uptime/data; recognize electrical, fire, ESD, battery, chemical, optical, lifting, and workspace boundaries.
5. **Environment (4.5):** control heat/humidity/airflow/power/contaminants/interference and complete responsible consumable/e-waste custody.
6. **Privacy/licensing/policy (4.6):** capability is not authority; minimize data, stop prohibited-content exploration, verify entitlements and approved services.
7. **Communication/professionalism (4.7):** listen, reflect impact, explain uncertainty and next action, de-escalate, adapt accessibly, own the handoff, verify with the user.
8. **Scripting (4.8):** validate inputs/targets, use least privilege and safe secrets, dry-run/pilot, handle partial failure, log and verify.
9. **Remote access (4.9):** choose minimum capability, verify both ends, encrypt, obtain consent/standing authority, limit features, revoke and confirm closure.
10. **AI (4.10):** classify/minimize input, use approved tools, treat output as untrusted, verify sources, resist bias/injection, and require human approval for consequential action.

## Cross-objective cases

**Bulk patching:** a recurring incident does not authorize an ad-hoc script. Link problem/change records, back up and test, review script targets/empty input, approve/pilot, schedule/communicate, use least-privileged remote management, validate business/security outcome, and update records.

**Swollen laptop during remote support:** stop charging/use and prioritize people. Do not ask the user to force the case or ship it ordinarily. Follow damaged-battery safety/vendor/environmental routing, protect account access and data only where safe, document observed facts, and communicate the replacement/custody path.

**Ransomware and restore:** isolate/escalate, preserve evidence, protect backups, use a known-good recovery point and clean account channel, reimage under change/incident controls, restore without suspect executables, verify endpoint/account/data/business function, and document RPO/RTO and exposure.

**AI-generated cleanup script:** approved AI tenant and synthetic data do not make code correct. Verify commands/dependencies/licenses, reject prompt injection, validate exact targets, dry-run/pilot, secure credentials, plan backup/recovery and approval, log partial results, and retain human accountability.

**Prohibited content in an unattended session:** stop unnecessary viewing, do not copy/investigate/confront, preserve state/facts per policy, terminate or restrict access appropriately, notify the designated authority, and keep ticket detail need-to-know.

## Priority conflicts

When goals conflict, use the governing boundary. Immediate human safety outranks data and uptime. Active security spread may outrank routine local testing. Legal hold/evidence may change disposal or reset. Privacy limits what enters tickets, remote tools, scripts, and AI. Accessibility changes how instructions and verification are delivered. Authorization limits every technically possible action.

“Least disruptive” does not mean avoiding necessary containment. “Emergency” does not remove accountability. “Automated” does not remove human approval. “Successful command” does not prove business outcome. “User requested” does not prove ownership or authority.

## Integrated closure

Before closure verify: original workflow; adjacent service/security/accessibility; user or service-owner outcome; correct asset/configuration/license records; backups and recovery state; temporary scripts/files/accounts/rules/sessions removed; privacy-safe evidence; environmental custody where applicable; known limitations; linked incident/problem/change/security records; monitoring; next owner and update.

The full A+ track remains Planned until the Core 2/A+ integration audit confirms complete objective mapping and curriculum checks. First-pass CES is not gold LES and does not replace a learner walkthrough.`,
  },
  lightbulbMoment: "Operational maturity is the connective tissue around the fix: identity, authority, safety, privacy, recovery, communication, evidence, and closure determine whether a technically successful action was actually good support.",
  keyFacts: ["Safety, authority, and privacy can override convenience", "A ticket is evidence and coordination—not automatic change authorization", "Restore testing proves backup value", "Emergency paths remain authorized, documented, validated, and reviewed", "Automation and remote access require exact scope and revocation", "AI output remains untrusted until independently verified", "Closure reconciles function, trust, assets, records, temporary access, and follow-up"],
  guidedExample: {
    title: "Integrate a remote emergency recovery without skipping controls",
    steps: [
      "A critical workstation encrypts files. Verify report/asset, raise incident priority, use approved isolation, protect people and backups, preserve evidence, and communicate confirmed scope without speculation.",
      "Use a clean channel for accounts; link incident/problem/change records and choose an authorized known-good recovery point against RPO/RTO.",
      "Review the recovery script and remote path: exact allowlisted target, approved code/version, least privilege, protected credentials, dry-run evidence, logging, and temporary access.",
      "Reimage/restore under emergency authority; do not restore suspect executables. Validate data, applications, accounts, security controls, network, monitoring, and user workflow.",
      "Revoke sessions/codes, remove tools/files, reconcile asset/license/backup records, record exposure and actual recovery result, communicate limitations, and complete retrospective follow-up.",
    ],
  },
  commonMistakes: ["Treating a ticket or emergency as unlimited authorization", "Saving data while ignoring immediate human safety", "Running an AI-generated script because it passed a syntax check", "Using remote access without consent/standing authority or leaving it active", "Calling a backup good without a tested restore", "Copying sensitive/prohibited content into tickets or AI prompts", "Claiming success from a command, reboot, or scan without user/business verification", "Closing without asset, license, access, monitoring, and follow-up reconciliation"],
  examTraps: ["Which operational boundary takes priority", "Incident versus problem versus change", "Emergency change versus uncontrolled action", "RPO/RTO and restore proof", "Safety/environment/data-disposition separation", "Script/remote/AI capability versus authority", "Integrated closure evidence"],
  realWorldScenario: "A technician is asked to use an AI-generated PowerShell script over an unattended RMM session to remove files from 200 laptops before a legal deadline. They stop: the ticket lacks data-owner/legal-hold authority, the target rule can expand on empty input, no backup/rollback or pilot exists, and the AI service was given real filenames. They preserve the request, notify privacy/legal/security/change owners, contain prompt exposure, redesign with synthetic data and exact allowlists, and proceed only after authorization, recovery testing, communication, staged execution, and verified custody.",
  whenThisFails: ["If requirements conflict or authority is unclear, preserve facts/state and route the decision to the responsible safety, data, security, change, or business owner", "If an action exceeds approved scope, fails a go/no-go threshold, or produces partial unexpected state, stop and invoke recovery/escalation", "If completion cannot be verified across function, trust, records, and temporary-access cleanup, keep the work open with an explicit owner and next action"],
  teacherReflectionPrompt: "For a bulk remote change, damaged battery, ransomware restore, prohibited content, and AI-generated script, identify which of the ten objectives governs each decision and define proof of professional closure.",
  quiz: [
    item("ap-ops-review-q1", "AP1202-4.4", "A swollen laptop is also the only copy of urgent work. What takes priority?", "Stop use/charging and follow battery safety escalation; recover data only through a safe authorized plan", "Keep charging to copy files", "Force the case flat"),
    item("ap-ops-review-q2", "AP1202-4.2", "An emergency production change requires:", "Expedited authority, documented risk/actions, validation, communication, recovery, and review", "No record or approval", "A hidden admin account"),
    item("ap-ops-review-q3", "AP1202-4.8", "An automation target list is empty. Safest behavior?", "Fail closed and require explicit validated targets", "Expand to every device", "Ignore the input"),
    item("ap-ops-review-q4", "AP1202-4.10", "AI proposes a precise command and citation. Before action:", "Verify the real authoritative source, environment, scope, policy, test, and human authorization", "Trust its confidence", "Disable safeguards"),
    item("ap-ops-review-q5", "AP1202-4.1", "What best completes an integrated support ticket?", "Exact verification plus user outcome, records/access cleanup, limitations, monitoring, owner, and follow-up", "The word fixed", "A password", "hard"),
  ],
  questionBank: [
    item("ap-ops-review-b1", "AP1202-4.1", "Recurring incidents with an unknown cause should link to:", "A problem record, with controlled changes linked separately", "Deleted history", "A shared password"),
    item("ap-ops-review-b2", "AP1202-4.3", "Backup protection is proven by:", "A tested usable restore meeting integrity, function, RPO, and RTO needs", "A green copy icon", "Sync alone"),
    item("ap-ops-review-b3", "AP1202-4.5", "A sanitized drive is ready for ordinary trash?", "No; approved environmental disposition, custody, and asset closure remain", "Always", "Only if encrypted"),
    item("ap-ops-review-b4", "AP1202-4.6", "Technical access to a mailbox means:", "Nothing about disclosure authority; verify identity, owner, purpose, and approval", "The technician may read everything", "A manager may skip procedure"),
    item("ap-ops-review-b5", "AP1202-4.7", "After functional escalation, professionalism requires:", "A complete handoff and clear user owner, next action, and update", "Not my problem", "Closing silently"),
    item("ap-ops-review-b6", "AP1202-4.9", "A one-time remote repair ends when:", "Work is verified and temporary tools/files/access/codes/sessions are removed and confirmed closed", "The window is minimized", "The persistent agent remains"),
    item("ap-ops-review-b7", "AP1202-4.10", "Prompt injection risk means retrieved content should be:", "Treated as untrusted data under restricted tools, data access, and human approval", "Granted system authority", "Allowed to upload secrets"),
    item("ap-ops-review-b8", "AP1202-4.2", "A command completes but the business workflow fails. The change is:", "Not successful; follow validation and recovery/escalation criteria", "Complete", "Ready to close"),
  ],
  flashcards: [
    { id: "ap-ops-review-f1", front: "Operational first gate?", back: "Identity, ownership, context, authority, and human safety" },
    { id: "ap-ops-review-f2", front: "Emergency means?", back: "Expedited control—not absent control" },
    { id: "ap-ops-review-f3", front: "Automation authority?", back: "Never implied; exact approved scope still required" },
    { id: "ap-ops-review-f4", front: "Remote session closure?", back: "Verified repair plus revoked/removed temporary access" },
    { id: "ap-ops-review-f5", front: "AI output status?", back: "Untrusted proposal until authoritative verification and approval" },
    { id: "ap-ops-review-f6", front: "Professional closure?", back: "Function, trust, records, cleanup, limitations, monitoring, follow-up" },
  ],
  practiceType: ["reading", "quiz", "flashcard"], estimatedStudyMinutes: 60, difficulty: "medium",
}];
