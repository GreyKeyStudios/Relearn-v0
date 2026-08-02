import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.6", difficulty,
});

export const apCore2OpsBatch6Topics: Topic[] = [{
  id: "ap-privacy-licensing",
  name: "Privacy, Licensing & Policy",
  prerequisites: ["ap-environment", "ap-documentation-ticketing", "ap-data-destruction", "ap-security-measures"],
  objectives: ["AP1202-4.6"],
  knowledgeNodeId: "authentication",
  lesson: {
    title: "Support Systems Without Exceeding Authority or Exposing Data",
    content: `Operational trust depends on using access only for the approved support purpose:

\`verify identity, ownership, request, and authority → minimize access and data → follow policy and license terms → stop and escalate suspected prohibited or unlawful activity → preserve evidence correctly → verify records, access, and disposition\`

Technicians often have technical ability to view files, reset accounts, install software, copy data, or change controls. That capability is not permission. Authorization is limited by role, request, ownership, policy, contract, licensing, privacy obligations, and law.

## Policy framework

Common organizational controls include acceptable-use policy (AUP), information-security policy, data-classification/handling policy, privacy notice, password/access policy, remote-access policy, mobile/BYOD policy, software and licensing policy, retention/destruction policy, incident-response procedure, code of conduct, and nondisclosure/confidentiality agreement.

Policies define expected behavior and authority; standards state required controls; procedures give ordered steps; guidelines offer recommended practice. Names vary. Use the current approved version and escalation owner rather than inventing an exception.

An AUP may address business/personal use, prohibited sites/content, harassment, illegal activity, account sharing, unauthorized scanning or software, circumvention, copyright, monitoring notice, removable media, cloud services, and consequences. Technicians enforce only through assigned processes; they do not become investigators or disciplinarians on their own.

## Privacy and data minimization

Personal or sensitive data may include identifiers, contact information, credentials, financial data, health information, education/employment records, location, biometrics, communications, images, browsing, customer records, intellectual property, and authentication/recovery material. Classifications and legal terms vary by organization and jurisdiction.

Use **least privilege**, **need to know**, **purpose limitation**, and **data minimization**: access only the records necessary for the authorized task, through approved tools, for no longer than required. Prefer user demonstration, test accounts, synthetic files, redacted screenshots, targeted logs, and metadata over browsing real content.

Verify identity before revealing ticket, account, asset, or recovery details. Do not ask for passwords or one-time codes, read unrelated messages, copy personal files “just in case,” use customer data for training, move data to personal devices/accounts, or retain screenshots/logs outside the approved system.

## Data handling lifecycle

Know the data owner, custodian, classification, authorized users, approved storage/transfer, encryption, labeling, retention, backup, logging, sharing, breach reporting, legal hold, and disposition requirements.

**At rest:** approved location, access control, encryption, device management, physical protection. **In transit:** approved channel, correct recipient, encryption, sharing expiration/permissions, no consumer workaround without approval. **In use:** screen/privacy, least access, safe workspace, no unnecessary copies. **At disposal:** retention/hold check, account/cloud copies, approved sanitization/destruction, inventory and custody.

A user asking for data does not automatically prove they own it or may receive it. A manager title does not replace identity, data-owner approval, or established disclosure procedure.

## Confidentiality and regulated contexts

Nondisclosure and confidentiality obligations can cover customer, employee, product, security, legal, and business information. Regulated or contractual data may require specific access, logging, notification, retention, regional, or disposal controls. Technicians should recognize sensitivity and route questions to privacy, legal, security, records, or compliance owners—not provide legal interpretations.

If data is sent to the wrong recipient, lost, exposed publicly, copied to an unapproved service, or accessed without need, stop further disclosure where safe, preserve facts, notify the defined incident/privacy channel promptly, and follow containment. Do not quietly delete the evidence and assume the issue disappeared.

## Prohibited content or activity

Possible concerns include illegal or explicitly prohibited material, harassment, threats, abuse, piracy, unauthorized access/scanning, credential theft, control bypass, exfiltration, malware, unapproved crypto-mining, policy-violating software, or misuse of organizational resources.

Do not continue exploring, duplicate content, confront the person, announce accusations, or perform a personal investigation. Stop the unnecessary exposure, preserve the device/session and observable facts according to policy, restrict discussion to need-to-know channels, and contact the designated security, management, HR, safeguarding, legal, or law-enforcement liaison as applicable.

Immediate threats to life or safety follow emergency procedure. Suspected child sexual abuse material or other highly sensitive unlawful content requires strict organizational and jurisdictional procedure; do not open, copy, forward, categorize in detail, or attempt independent validation. This course does not give legal advice.

Distinguish a policy violation from a security incident and from lawful personal use. Context, ownership, notice, and approved policy matter. Avoid bias and unsupported assumptions.

## Software ownership and licensing

Software is normally licensed under terms rather than purchased as unrestricted property. Verify product, publisher/source, license type, number of users/devices/cores, assignment, subscription term, activation, transfer rights, virtualization/cloud/remote-use rights, geographic/organizational scope, support, and proof of entitlement.

Common models include:

- **Per-user / per-device / concurrent / site or volume / subscription / perpetual** licensing.
- **OEM** licenses commonly tied to original hardware or vendor terms.
- **Retail/commercial** licenses governed by their agreement and transfer rules.
- **Freeware**: no purchase price does not mean no license or unrestricted redistribution.
- **Shareware/trial**: evaluation terms, time/function limits, and purchase requirements apply.
- **Open source**: source availability and permissions depend on a specific license; attribution, notice, source-offer, or distribution obligations may apply.
- **Public domain**: different from open source; verify status rather than assuming it.

An end-user license agreement (EULA), organizational contract, or open-source license defines permissions and restrictions. Do not copy activation keys into tickets, reuse consumer licenses in business, install pirated/cracked software, bypass activation, exceed seats, or assume virtual machines and remote access are automatically covered.

## License operations and audits

Maintain inventory of installed software, versions, users/devices, entitlements, assignments, renewal dates, purchase/contract records, approved sources, and removal/reassignment. Reconcile deployment against entitlement, reclaim unused seats through approved process, remove unsupported/unapproved software, and preserve evidence for audits.

Discovery of a mismatch is not permission to uninstall a business-critical application immediately. Record scope, restrict further unapproved deployment, notify asset/licensing/security owners, assess service impact, and remediate through change and communication controls.

## Third parties, cloud, and AI services

Before placing data in a vendor, cloud, file-transfer, remote-support, analytics, or AI service, verify approval, contract and data terms, account ownership, access, retention, model/training use where relevant, regional requirements, deletion/export, incident obligations, and licensing. Convenience and a free tier do not establish authorization.

Never paste customer records, credentials, proprietary source, incident evidence, or sensitive logs into a public AI or consumer service without explicit approved handling. AP1202-4.10 teaches AI limitations in depth; the policy boundary begins here.

## Verification and documentation

After a privacy, policy, or license task, verify identity/authorization, least access, correct recipient and permissions, approved storage/channel, removal of temporary copies, logging, retention/hold, account/session state, license assignment/inventory, stakeholder notification, and follow-up.

Document objective facts, classification and owner where known, request/authority, necessary access, items affected, approved transfer/install/removal, license evidence reference, containment, escalation, and verification. Do not reproduce prohibited content, secrets, unnecessary personal data, or confidential material in the ticket.

**Practice boundary:** fictional records only; no real personal/prohibited data, keys, licensed installers, or legal conclusions. **Next when authorized:** AP1202-4.7 communication and professionalism.`,
  },
  lightbulbMoment: "Privileged access is borrowed for a specific support purpose: the professional technician proves identity and authority, uses the minimum data and access, and escalates concerns without becoming an unauthorized investigator.",
  keyFacts: [
    "Technical capability does not equal authorization",
    "Use least privilege, need to know, purpose limitation, and data minimization",
    "Verify identity and data-owner authority before disclosure",
    "Stop unnecessary exposure and escalate prohibited content/activity through defined channels",
    "Freeware and open source still have license terms",
    "Verify entitlement for users/devices/virtualization/remote use before installation",
    "A free cloud or AI service is not automatically approved for organizational data",
  ],
  guidedExample: {
    title: "Handle a support request that crosses privacy and licensing boundaries",
    steps: [
      "A manager asks for an absent employee’s mailbox export and a paid design application on a replacement laptop. Verify requester identity, but do not treat title alone as data-owner authority.",
      "Route mailbox disclosure through the approved HR/legal/privacy and access workflow; use minimum scoped export only if authorization is recorded.",
      "Check the replacement asset and design-software entitlement, assignment/transfer and device-use terms; never reuse a copied activation key from the ticket.",
      "Install only from the approved source after entitlement and change/request approval; remove or reassign the old seat through asset management.",
      "Verify recipient permissions, temporary-copy removal, mailbox and license records, audit trail, and user/application function without documenting private message contents or keys.",
    ],
  },
  commonMistakes: [
    "Treating technical access or manager seniority as authorization",
    "Collecting entire folders or mailboxes when targeted evidence is enough",
    "Placing screenshots, logs, or customer data in personal storage or public tools",
    "Continuing to browse suspected prohibited content",
    "Confronting or investigating a suspected violator independently",
    "Assuming freeware means unrestricted business use or redistribution",
    "Assuming open source has no obligations",
    "Copying product keys into tickets or reusing licenses without entitlement review",
  ],
  examTraps: [
    "Capability versus authorization",
    "Minimum necessary data and need-to-know access",
    "Policy violation versus security/privacy incident",
    "Preserve/escalate without copying prohibited content",
    "Freeware/shareware/open-source/public-domain distinctions",
    "License entitlement versus installed software",
    "Approved service and contract before cloud/AI data upload",
  ],
  realWorldScenario: "During a remote repair, a technician sees a folder name suggesting prohibited material. They stop navigating, do not open or copy files, preserve the session/device state and objective facts according to policy, and contact the designated security/safeguarding channel. They avoid accusations and restrict discussion. The organization’s authorized team determines next steps; the ticket contains no content reproduction or speculative legal conclusion.",
  whenThisFails: [
    "If identity, ownership, disclosure authority, or license entitlement cannot be established, pause the request and route it to the responsible owner",
    "If sensitive data is exposed or sent incorrectly, contain further disclosure and notify the privacy/security incident channel promptly",
    "If prohibited or potentially unlawful content appears, stop unnecessary viewing and follow the specific organizational and jurisdictional escalation procedure",
  ],
  teacherReflectionPrompt: "For a manager requesting mailbox access, a freeware business install, an open-source redistribution, and suspected prohibited content, state the authorization check, minimum action, prohibited shortcut, escalation, and privacy-safe record.",
  quiz: [
    item("ap-privacy-q1", "A manager asks for an employee's private mailbox export. Best first action?", "Verify identity and require the approved data-owner/HR/legal/privacy authorization workflow", "Export it because the requester is senior", "Ask for the employee's password", "easy"),
    item("ap-privacy-q2", "A technician encounters potentially prohibited content during repair. Best response?", "Stop unnecessary viewing, preserve observable facts/state per policy, and notify the designated authority", "Copy it for personal review", "Confront the user publicly", "hard"),
    item("ap-privacy-q3", "Which statement about freeware is correct?", "No purchase price does not remove license terms or guarantee unrestricted business redistribution", "It has no copyright or terms", "It may always be resold"),
    item("ap-privacy-q4", "What should happen before uploading a support log to a public AI service?", "Verify approved service, contract/data terms, classification, minimization, retention/training use, and authorization", "Upload first and redact later", "Assume free means private"),
    item("ap-privacy-q5", "What best demonstrates license compliance?", "Reconciled installations/assignments with valid entitlements and documented terms", "An application launches", "A key appears online", "medium"),
  ],
  questionBank: [
    item("ap-privacy-b1", "Data minimization means:", "Access and retain only data necessary for the authorized purpose", "Copy everything in case it helps", "Remove all audit logs", "easy"),
    item("ap-privacy-b2", "Need to know limits access based on:", "The person's authorized role and current task", "Curiosity", "Technical ability alone"),
    item("ap-privacy-b3", "A file was sent to the wrong recipient. Best response?", "Contain further access where possible, preserve facts, and report through the privacy/security process", "Quietly delete the sent copy and say nothing", "Forward it to more people"),
    item("ap-privacy-b4", "Open-source software is:", "Governed by a specific license that may require notices, attribution, source terms, or other obligations", "Always public domain", "Free of all conditions"),
    item("ap-privacy-b5", "A trial application's time limit expires. Correct action?", "Purchase/assign a valid entitlement or remove it according to policy", "Bypass activation", "Reset the clock"),
    item("ap-privacy-b6", "A VM runs licensed desktop software. What must be checked?", "Whether the entitlement covers the user/device, virtualization, remote use, and number of instances", "Nothing because VMs are invisible", "Only disk space"),
    item("ap-privacy-b7", "Why avoid product keys in tickets?", "They are sensitive entitlement/authentication material that can enable misuse", "They use too few words", "Tickets cannot contain numbers"),
    item("ap-privacy-b8", "A license mismatch affects a critical app. Best operational response?", "Record scope, stop further unapproved deployment, notify owners, and remediate through approved change/communication", "Uninstall immediately without impact review", "Hide it from the audit"),
  ],
  flashcards: [
    { id: "ap-privacy-f1", front: "Capability = authority?", back: "No—verify identity, ownership, purpose, role, policy, and approval" },
    { id: "ap-privacy-f2", front: "Data minimization?", back: "Only necessary data for the authorized purpose and duration" },
    { id: "ap-privacy-f3", front: "Prohibited content response?", back: "Stop viewing/copying; preserve facts/state; use designated escalation" },
    { id: "ap-privacy-f4", front: "Freeware?", back: "No price, but still licensed with terms" },
    { id: "ap-privacy-f5", front: "Open source?", back: "Permissions and obligations come from its specific license" },
    { id: "ap-privacy-f6", front: "Public AI upload?", back: "Only after approved service, data terms, minimization, and authorization" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 60,
  difficulty: "medium",
}];
