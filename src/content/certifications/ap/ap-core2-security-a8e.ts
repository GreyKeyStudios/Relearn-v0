import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8e (Michael 2026-08-01).
 * ap-social-engineering (AP1202-2.5) only.
 * Stop after verify — no 2.6+ Security, SW-TS, Ops, or CCNA C1.
 * Defensive awareness only: no deception scripts, harvesting ops, or live malicious links.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional social-engineering triage worksheets only. Do not click live suspicious links, open unknown attachments, scan unknown QR codes, plug in found USB devices, approve unexpected MFA prompts, share passwords/OTP codes, or practice real-person impersonation. Artifacts in the lab are fictional and nonfunctional.",
};

export const apCore2SecurityBatch5Topics: Topic[] = [
  {
    id: "ap-social-engineering",
    name: "Social Engineering Attacks & Defenses",
    prerequisites: [
      "ap-malware",
      "ap-security-measures",
      "ap-windows-security",
      "ap-cloud-productivity",
    ],
    objectives: ["AP1202-2.5"],
    knowledgeNodeId: "auth-weakness-concepts",
    lesson: {
      title: "Verify People, Identity, and Requests Before You Trust Them",
      content: `Social engineering manipulates **people, identity, process, trust, urgency, and channels**. On A+:

\`request or message → manipulation signals → verification path → safe response → reporting → documentation\`

**Prior:** \`ap-security-measures\` · \`ap-malware\` (post-click device compromise) · Windows/cloud identity habits. **Later:** SOHO malware-removal procedure (\`ap-malware-removal\` / 2.6) is a separate remediation drill — do not substitute it here.

**Defensive boundary.** No detailed scripts to deceive real people, credential harvesting operations, impersonation playbooks, or process-bypass how-tos. No live malicious links.

---

## Why it works

Attackers exploit: trust · authority · urgency · fear · curiosity · helpfulness · scarcity · familiarity · social pressure · routine · process gaps.

Technical controls **and** human verification procedures work together. A convincing message ≠ legitimacy. A familiar display name ≠ identity. Knowing some personal facts ≠ authorization.

---

## Techniques (recognize to defend)

| Technique | Technician framing |
|-----------|-------------------|
| **Phishing** | Broad fraud via email/messages: links, attachments, fake logins, payment/account alerts, invoice lures |
| **Spear phishing** | Targeted + personalized; role/org context raises credibility |
| **Whaling** | Executives/high-value targets; finance/legal/access pressure |
| **Smishing** | SMS/messaging; shortened links; mobile urgency |
| **Vishing** | Voice; caller-ID spoof; help-desk/finance impersonation; codes/credentials |
| **BEC** | Exec/vendor impersonation; payment/invoice redirection; urgent wires/gift cards; sometimes compromised real mailboxes — need out-of-band verify |
| **Pretexting** | Invented role/story; false business justification; info gathering |
| **Impersonation** | Employee, tech, vendor, exec, delivery, authority, partner |
| **Tailgating / piggybacking** | Unauthorized follow-through of controlled doors; authorized person may enable entry knowingly or not |
| **Shoulder surfing** | Screens, keyboards, PINs, docs — privacy screens/positioning |
| **Dumpster diving** | Docs, labels, notes, device info — shred/secure disposal |
| **Baiting** | Suspicious removable media, “free” downloads, curiosity rewards — **do not interact** with unknown media |
| **Quid pro quo** | Offer help/benefit in exchange for access/info/action |
| **Watering hole** (awareness) | Familiar sites can be compromised; familiarity ≠ current safety; keep patching/browser/EDR |
| **Credential harvest / MFA fatigue** | Fake logins; OTP requests; repeated push prompts — **do not approve unexpected pushes** |
| **Invoice / gift-card / payment scams** | Banking changes, secrecy, process bypass — out-of-band confirm |

Deepfake/AI-assisted deception (awareness): voice/video/text/image fakes and personalized phishing. **Realistic media is evidence to verify, not proof of identity.** Use known contacts, callbacks, approvals, secondary confirmation, transaction limits (and org code words only if policy supports them). No instructions to create deceptive media.

---

## Manipulation indicators (clusters matter)

Urgency · threats · secrecy · bypass policy · unexpected attachment · mismatched/look-alike domain · odd reply-to · unexpected credential/MFA/OTP ask · payment change · gift cards · push floods · caller-ID confidence · unusual access · new vendor instructions · outside normal process · emotional pressure · requester “should already know” · refusal of approved verify channels. One signal ≠ proof; clusters raise risk. Grammar alone is unreliable.

## Verification process

1. Pause  
2. **Do not** use contact info from the suspicious request  
3. Use approved directory / known number / internal system / trusted channel  
4. Verify person  
5. Verify business request separately  
6. Confirm authorization/scope  
7. Involve supervisor/finance/security/owner as required  
8. Document  
9. Report  

**Out-of-band:** second trusted channel; independently confirm; don’t reply to the suspicious message to ask if it’s real; don’t call numbers in the email/SMS; confirm payment changes via established vendor contacts.

**Help desk:** follow **org policy** before password/MFA reset, unlock, contact updates, privilege change, enrollment, recovery-key disclosure, access restore. No universal invented procedure — policy is authority. Pressure to skip verify = escalate.

## Credentials & MFA

Never ask for/share passwords · techs don’t need user passwords · never share OTP/codes · don’t approve unexpected MFA · report push floods · verify resets · protect recovery codes · don’t enter creds from unsolicited links · use approved auth flows · change creds from a **trusted/clean** device after suspected compromise. No MFA defeat methods.

## Email/messaging inspection (safe)

Display name vs real address · domain · reply-to · link preview (don’t click) · attachment type · context expected? · external-sender labels · thread-hijack awareness · signatures where aligned. Use fictional artifacts only.

## Physical & media

Unbadged visitors · tailgating · fake techs/delivery · hold-the-door asks · unattended device access · unknown equipment · sensitive talk in public. Response: polite challenge per policy · reception · verify work orders · contact security · refuse unknown device connections · privacy screens · document. No unsafe confrontation.

**Found USB/unknown media:** don’t plug into production · don’t “test” · report · preserve context · authorized analysis only. No malicious USB construction.

## After the user interacted

Clicked/opened/replied/entered creds/approved MFA/connected media/disclosed info:

1. Stop further interaction  
2. Report immediately  
3. Preserve message/evidence  
4. Isolate only per incident policy  
5. Change creds from known-clean system if directed  
6. Revoke sessions/tokens where authorized  
7. Review MFA enrollment/activity  
8. Scan/investigate via approved procedures (\`ap-malware\` if device risk)  
9. Identify what was disclosed  
10. Document timeline  
11. **Do not shame the user**

## Reporting & evidence

Preserve: message · headers · sender/reply-to · phone · timestamp · link text/destination · attachment **name** · screenshot · voicemail · payment instructions · systems affected · actions already taken. **Never** put passwords, MFA codes, recovery keys, or unnecessary PII in tickets.

Paths: report-phishing controls · security mailbox/ticket · supervisor · finance/fraud · physical security · IR — per org policy.

## Psychological safety

No blame/humiliation · thank reporters · calm facts · avoid leading questions · explain next steps · protect privacy · trained people can still be deceived. Punishment culture delays reporting and increases impact.

**What's next.** SOHO malware removal best-practice procedures (\`ap-malware-removal\` / AP1202-2.6) when authorized — procedural remediation, not social-engineering technique drills.`,
    },
    lightbulbMoment:
      "Social engineering fails when you pause, verify out-of-band with trusted contacts, refuse unexpected codes and MFA pushes, and report without shaming — realism and urgency are not proof of identity.",
    keyFacts: [
      "Convincing message / caller ID / display name ≠ verified identity",
      "Verify out-of-band — never use contacts supplied in the suspicious request",
      "Never share passwords or OTP codes; don’t approve unexpected MFA pushes",
      "BEC and payment changes need finance + established vendor confirmation",
      "Found USB and unknown media: report, don’t plug in",
      "Deepfake realism is evidence to verify, not identity proof",
      "Thank reporters — blame delays the next report",
    ],
    guidedExample: {
      title: "Seven social-engineering tickets",
      steps: [
        "MFA push flood → do not approve; check if user initiated login; report compromise; reset from clean system; revoke sessions.",
        "Vendor banking-change email → ignore email phone numbers; verify via established vendor record; involve finance; preserve message.",
        "‘CEO’ gift-card + secrecy → authority+urgency+bypass; verify approved channel; do not buy; report.",
        "Caller wants password reset before ‘critical meeting’ → follow ID policy; refuse bypass; escalate pressure tactics.",
        "Person with boxes asks to hold secured door → visitor policy/reception; safety first; report if suspicious.",
        "QR ‘account disabled’ SMS → don’t scan; verify via known portal/app; report.",
        "Convincing deepfake voice for urgent transfer → approval process + independent callback; escalate finance/security.",
      ],
    },
    commonMistakes: [
      "Trusting display names or caller ID",
      "Replying to the suspicious message to ‘verify’",
      "Calling the number in the phishing email/SMS",
      "Sharing passwords or MFA codes with ‘IT’",
      "Approving unexpected MFA prompts",
      "Plugging in found USB devices",
      "Shaming users who report late or after a click",
    ],
    examTraps: [
      "Safest immediate action for MFA fatigue",
      "Best verification for vendor payment change",
      "Help-desk pressure to skip identity checks",
      "Tailgating response without unsafe confrontation",
      "Post-click response path + malware referral",
      "Evidence to preserve vs secrets never to ticket",
    ],
    realWorldScenario:
      "Finance gets an urgent email ‘from the CFO’ to buy gift cards and keep it quiet. The display name matches; the domain is a look-alike. You stop the purchase, call the CFO using the directory number (not the email signature), confirm no such request, report phishing, and thank the clerk — authority + secrecy + process bypass caught without humiliating anyone.",
    whenThisFails: [
      "If credentials or MFA were already disclosed, escalate IR and follow malware/account response — don’t wait out of embarrassment",
      "If payment may already have moved, involve finance/fraud immediately with preserved evidence",
      "If physical safety is at risk during a challenge, prioritize safety and contact security",
    ],
    teacherReflectionPrompt:
      "Write a 30-second user-facing script that stops an MFA push flood, forbids approval, and thanks the user for reporting — without blame.",
    quiz: [
      {
        id: "ap-social-engineering-q1",
        prompt: "A user gets repeated unexpected MFA approval prompts. Safest immediate guidance?",
        choices: [
          { id: "a", text: "Do not approve; report possible credential compromise; verify whether a login was initiated; follow authorized reset/revoke steps from a clean system" },
          { id: "b", text: "Approve all prompts so the noise stops" },
          { id: "c", text: "Text the one-time code to the unknown helper who called" },
          { id: "d", text: "Disable MFA permanently for convenience" },
        ],
        correctChoiceId: "a",
        explanation: "MFA fatigue is a credential-risk signal.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-q2",
        prompt: "Email asks to change a vendor’s bank account for the next payment. Best verification?",
        choices: [
          { id: "a", text: "Confirm out-of-band using established vendor contacts/records and involve finance — do not use numbers from the suspicious email" },
          { id: "b", text: "Reply to the email asking ‘Is this real?’" },
          { id: "c", text: "Call the phone number printed in the email signature only" },
          { id: "d", text: "Process the change immediately because the display name matches" },
        ],
        correctChoiceId: "a",
        explanation: "BEC / payment redirection defense.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-q3",
        prompt: "A caller claiming to be an employee demands a password reset and insists you skip verification because of an urgent meeting. Correct response?",
        choices: [
          { id: "a", text: "Follow organizational identity-verification policy; refuse bypass; escalate unusual pressure" },
          { id: "b", text: "Reset immediately if they know their manager’s first name" },
          { id: "c", text: "Ask them to text you their current password for confirmation" },
          { id: "d", text: "Email the new password to any address they provide" },
        ],
        correctChoiceId: "a",
        explanation: "Help-desk identity boundaries.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-q4",
        prompt: "Someone carrying boxes asks an employee to hold open a badge-controlled door. Best framing?",
        choices: [
          { id: "a", text: "Follow visitor-access policy (reception/security); avoid unsafe confrontation; report suspicious behavior" },
          { id: "b", text: "Always hold the door for anyone with boxes" },
          { id: "c", text: "Demand their password before opening" },
          { id: "d", text: "Plug their USB into a lobby PC to ‘check ID’" },
        ],
        correctChoiceId: "a",
        explanation: "Physical social engineering / tailgating defense.",
        objectiveId: "AP1202-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-social-engineering-q5",
        prompt: "A user already entered credentials on a fake login page. Best next path?",
        choices: [
          { id: "a", text: "Stop further interaction, report, preserve evidence, change credentials from a known-clean system as directed, and investigate device risk via approved procedures — without shaming" },
          { id: "b", text: "Delete the email so nobody knows and wait" },
          { id: "c", text: "Change the password on that same suspicious site again" },
          { id: "d", text: "Approve any MFA prompts that arrive next" },
        ],
        correctChoiceId: "a",
        explanation: "Post-interaction response + malware/account linkage.",
        objectiveId: "AP1202-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-social-engineering-q6",
        prompt: "A convincing AI-cloned voice asks for an urgent wire transfer. Core lesson?",
        choices: [
          { id: "a", text: "Realistic media is not identity proof — use independent approval/callback processes and escalate" },
          { id: "b", text: "Voice realism alone authorizes payment" },
          { id: "c", text: "Gift cards are always safer than wires" },
          { id: "d", text: "Disable all finance approvals forever" },
        ],
        correctChoiceId: "a",
        explanation: "Deepfake awareness at defensive depth.",
        objectiveId: "AP1202-2.5",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-social-engineering-b1",
        prompt: "Spear phishing differs from broad phishing mainly by:",
        choices: [
          { id: "a", text: "Targeting with personalized or role-specific context" },
          { id: "b", text: "Only using postal mail" },
          { id: "c", text: "Never including links" },
        ],
        correctChoiceId: "a",
        explanation: "Targeting depth.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b2",
        prompt: "Whaling typically targets:",
        choices: [
          { id: "a", text: "Executives or other high-value decision makers" },
          { id: "b", text: "Only printers" },
          { id: "c", text: "Only guest Wi-Fi SSIDs" },
        ],
        correctChoiceId: "a",
        explanation: "High-value targeting.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b3",
        prompt: "Smishing is primarily delivered via:",
        choices: [
          { id: "a", text: "SMS or similar messaging channels" },
          { id: "b", text: "BIOS flash only" },
          { id: "c", text: "Patch cables" },
        ],
        correctChoiceId: "a",
        explanation: "Channel recognition.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b4",
        prompt: "Found USB in the parking lot — correct action?",
        choices: [
          { id: "a", text: "Do not connect it; report and follow security/disposal policy" },
          { id: "b", text: "Plug into a production PC to see the files" },
          { id: "c", text: "Format it and keep it as a free drive" },
        ],
        correctChoiceId: "a",
        explanation: "Baiting defense.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b5",
        prompt: "Shoulder surfing is reduced by:",
        choices: [
          { id: "a", text: "Privacy screens, careful positioning, and protecting PINs/documents in public spaces" },
          { id: "b", text: "Disabling MFA" },
          { id: "c", text: "Sharing passwords on sticky notes under the keyboard" },
        ],
        correctChoiceId: "a",
        explanation: "Physical observation risk.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b6",
        prompt: "Dumpster diving risk is reduced by:",
        choices: [
          { id: "a", text: "Shredding/secure disposal of sensitive documents and labels" },
          { id: "b", text: "Printing more password lists" },
          { id: "c", text: "Leaving badge copies in recycle bins" },
        ],
        correctChoiceId: "a",
        explanation: "Disposal hygiene.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b7",
        prompt: "Why is grammar a weak sole phishing indicator?",
        choices: [
          { id: "a", text: "Modern/AI-assisted messages can look polished — verify process and signals, don’t rely on typos alone" },
          { id: "b", text: "All phishing has perfect grammar always" },
          { id: "c", text: "Grammar proves WPA3" },
        ],
        correctChoiceId: "a",
        explanation: "Modern threat awareness.",
        objectiveId: "AP1202-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-social-engineering-b8",
        prompt: "Quid pro quo social engineering offers:",
        choices: [
          { id: "a", text: "A benefit or ‘help’ in exchange for access, information, or an action" },
          { id: "b", text: "Free BitLocker keys from Microsoft automatically" },
          { id: "c", text: "A new CPU socket" },
        ],
        correctChoiceId: "a",
        explanation: "Technique recognition.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b9",
        prompt: "After a user reports phishing, best technician stance?",
        choices: [
          { id: "a", text: "Thank them, gather facts calmly, preserve evidence, escalate as needed — no humiliation" },
          { id: "b", text: "Publicly shame them so others learn" },
          { id: "c", text: "Delete all evidence to protect reputation" },
        ],
        correctChoiceId: "a",
        explanation: "Psychological safety.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-social-engineering-b10",
        prompt: "If a phishing click may have compromised a device, what is the best next action?",
        choices: [
          { id: "a", text: "Follow approved evidence-gathering, containment, and escalation procedures" },
          { id: "b", text: "Ignore it if the browser still opens" },
          { id: "c", text: "Replace the printer fuser" },
        ],
        correctChoiceId: "a",
        explanation: "Cross-topic defensive linkage.",
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-social-engineering-f1",
        front: "Verify how?",
        back: "Out-of-band with trusted contacts — not the request’s contact info",
      },
      {
        id: "ap-social-engineering-f2",
        front: "MFA push flood?",
        back: "Don’t approve · report · clean-system credential response",
      },
      {
        id: "ap-social-engineering-f3",
        front: "BEC payment change?",
        back: "Finance + established vendor confirmation",
      },
      {
        id: "ap-social-engineering-f4",
        front: "Found USB?",
        back: "Don’t plug in — report",
      },
      {
        id: "ap-social-engineering-f5",
        front: "Deepfake voice?",
        back: "Realism ≠ identity — independent approval",
      },
      {
        id: "ap-social-engineering-f6",
        front: "User clicked phishing?",
        back: "Stop · report · preserve · clean reset · no shame",
      },
      {
        id: "ap-social-engineering-f7",
        front: "Display name proof?",
        back: "No — check real address/domain and verify process",
      },
    ],
    assignments: [
      {
        id: "ap-lab-social-engineering-triage",
        title: "Social-engineering triage lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional, nonfunctional artifacts only. No live links, credential collection, real impersonation, or deceptive outreach.

For each artifact record:
1) Technique / manipulation method
2) Warning indicators
3) Asset at risk
4) Safe immediate response
5) Verification channel
6) Reporting owner
7) Evidence to preserve
8) Credential / device / finance / physical response needed?
9) User-facing explanation (no blame)
10) Ticket note (no passwords, OTP, recovery keys, or unnecessary PII)

Artifacts:
A) Email: display "CFO Dana Lee" from dana.lee@cont0so-mail.com — urgent gift cards + "don't tell anyone"
B) SMS: "Package held — pay $2.99" + shortened link claim (do not open)
C) Voicemail transcript: "IT Security — read me your MFA code to stop account deletion"
D) Support call notes: caller knows employee ID format, demands password reset without directory callback
E) Visitor: person with ladder asks to be badge-tailed into server room "for HVAC"
F) QR poster photo (fictional): "Scan to keep Teams account" on lobby printer
G) MFA log: 14 denyable push prompts in 3 minutes; user initiated none
H) Vendor email: new banking details for next invoice; reply-to differs from From domain
I) Found USB labeled "Executive Salaries 2026" left at reception — do not insert

Boundaries: thank reporters; never recommend sharing codes, approving unexpected MFA, plugging unknown media, or calling numbers from the suspicious message.`,
        estimatedMinutes: 30,
        completionCriteria: [
          "Complete all ten fields for artifacts A–I",
          "Correct out-of-band verification on payment/exec/finance cases",
          "Ticket notes contain no secrets",
        ],
        relatedTopicIds: [
          "ap-social-engineering",
          "ap-malware",
          "ap-security-measures",
          "ap-cloud-productivity",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },
];
