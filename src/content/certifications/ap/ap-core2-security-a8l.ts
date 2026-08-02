import type { ExternalResource, Topic } from "../../types";
import { AP_SECURITY_OBJECTIVE_TOPIC } from "./ap-security-remediation";

/**
 * A+ Core 2 Security — A8l (Michael 2026-08-01).
 * ap-security-domain-review (AP1202-2.1–2.11) only — Security domain integration.
 * Stop after Security first-pass — no SW-TS / Ops / Core 2 integration / CCNA C1.
 * Fictional Security Operations Desk only — no malware samples, live phishing, real router access, or destructive actions.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional Security Operations Desk worksheets only. Do not open live phishing sites, install malware samples, access real routers without authorization, bypass certificate/MDM/ownership controls, wipe devices under legal hold, or disable security controls to ‘fix’ tickets.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_SECURITY_OBJECTIVE_TOPIC[objectiveId];
  return topic ? ` If this was unclear, review topic \`${topic}\`.` : "";
}

export const apCore2SecurityBatch12Topics: Topic[] = [
  {
    id: "ap-security-domain-review",
    name: "Security Domain Review",
    prerequisites: ["ap-browser-security"],
    objectives: [
      "AP1202-2.1",
      "AP1202-2.2",
      "AP1202-2.3",
      "AP1202-2.4",
      "AP1202-2.5",
      "AP1202-2.6",
      "AP1202-2.7",
      "AP1202-2.8",
      "AP1202-2.9",
      "AP1202-2.10",
      "AP1202-2.11",
    ],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Integrate the Security Domain as Applied Support Decisions",
      content: `This checkpoint integrates Core 2 Security end-to-end. Practice:

\`asset and risk → security control → platform/environment → evidence → safe technician action → verification → escalation → documentation\`

Prefer **real support scenario → identify security layer → choose safe response → justify boundaries → verify and document**. Reject objective-by-objective recall dumps.

**There is no AP1202-2.12** in the V15 registry used by this track.

---

## Path you completed

1. **Security measures / Zero Trust** — control types; verify explicitly; least privilege; assume breach
2. **Windows security** — accounts, UAC, firewall, BitLocker, Defender, Secure Boot, policy
3. **Wireless security** — WPA2/WPA3, Personal vs Enterprise, WPS limits, auth layers
4. **Malware** — recognition, tools, symptoms ≠ proof, isolation instincts
5. **Social engineering** — phishing, vishing, BEC, MFA fatigue, out-of-band verify
6. **Malware-removal procedure** — SOHO best-practice order; reimage threshold; document
7. **Workstation hardening** — baselines, services, accounts, encryption, least privilege
8. **Mobile/embedded** — ownership, MDM, wipe authority, IoT defaults
9. **Data destruction** — delete ≠ sanitize; media-specific methods; legal hold; custody
10. **SOHO security** — admin hygiene, segmentation, exposure (DMZ/forwards), DNS integrity
11. **Browser security** — HTTPS ≠ trust; cert warnings; extensions/sync; narrow fixes

**Missed questions map to the precise topic (not this review):**

${Object.entries(AP_SECURITY_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

---

## Integration themes

**Control selection.** Technical / administrative / operational / physical · preventive / detective / corrective / deterrent / compensating / directive — choose for asset, risk, environment, and business need.

**Authorization.** Technical capability ≠ authorization. Standard vs admin · need to know · separation of duties · temporary access · managed policy · device ownership · wipe/destruction authority · router ownership · browser policy · recovery-key handling.

**Zero Trust.** Verify explicitly · least privilege · assume breach · policy decision vs enforcement · continuous evaluation · device/identity/session context · network location alone is not trust. Zero Trust ≠ “MFA checkbox” or one vendor product.

**Control vs friction.** UAC, MDM, firewall, browser policy, compliance, MFA, Secure Boot/encryption may inconvenience while working correctly — do **not** automatically disable the control. Prefer narrow approved exception + verify.

**Evidence vs assumption.** Symptom ≠ proof · warning ≠ confirmed compromise · user claim ≠ verified authorization · encryption ≠ backup · deletion ≠ sanitization · Wi-Fi association ≠ network authorization · HTTPS ≠ website legitimacy · clean scan ≠ restored trust · factory reset ≠ verified destruction · guest SSID ≠ enforced segmentation.

**Escalate when:** ransomware · suspected data theft · privileged compromise · multi-system impact · managed-device incidents · rootkit/firmware suspicion · missing BitLocker key · legal hold · missing destruction asset · repeated router compromise · deepfake/BEC payment change · sensitive-system cert anomaly · lost device with regulated data.

---

## Cross-topic consistency (domain rules)

- \`ap-malware\` recognizes/isolates; \`ap-malware-removal\` sequences SOHO cleanup — escalate ransomware/data theft early; clean scan ≠ guaranteed trust.
- \`ap-wireless-security\` principles apply inside \`ap-soho-security\` — do not weaken primary LAN for one legacy device; guest SSID needs real isolation.
- \`ap-windows-security\` + \`ap-hardening\` — policy/UAC/encryption are protective friction, not bugs to remove casually.
- \`ap-mobile-security\` + \`ap-data-destruction\` — selective vs full wipe by ownership; factory reset ≠ universal sanitization; cloud copies survive local wipe.
- \`ap-social-engineering\` + \`ap-browser-security\` — domain/cert warnings and fake virus pages are social + browser layers; don’t call scareware numbers.
- \`ap-security-measures\` frames all control-specific topics — MFA alone is not complete Zero Trust; admin rights are not authorization.

**Lab boundary.** Security Operations Desk packets are fictional and inert. No malware, live phishing, public targets, real router access, tracking, destructive actions, or control bypasses.

**Looking ahead.** After this review, Security is **first-pass**. Next Core 2 domain when authorized: Software Troubleshooting (\`ap-ts-windows-os\` / AP1202-3.1). Full A+ track stays **Planned** until SW-TS and Operational Procedures are also first-pass.`,
    },
    lightbulbMoment:
      "Security support is layer selection under authorization: identify the asset and risk, pick the control that fits, gather evidence before disabling anything, verify, escalate when trust or custody is broken, and document.",
    keyFacts: [
      "Security path: measures → Windows → wireless → malware → social eng → removal → hardening → mobile → destruction → SOHO → browser → review",
      "Technical capability ≠ authorization",
      "Zero Trust ≠ MFA alone; network location ≠ trust",
      "Do not disable working controls to remove friction",
      "HTTPS ≠ legitimacy; delete ≠ sanitize; guest SSID ≠ isolation; clean scan ≠ restored trust",
      "Misses route to precise AP1202-2.x topics — not only this review",
      "No AP1202-2.12 in V15; next domain is Software Troubleshooting when authorized",
    ],
    guidedExample: {
      title: "Mixed Security domain triage",
      steps: [
        "Contractor wants permanent local admin → temporary least privilege + sponsor approval (2.1/2.7).",
        "UAC blocks an unapproved installer → verify source; don’t disable UAC (2.2/2.7).",
        "WPA3 upgrade breaks one barcode scanner → isolate/replace; don’t drop primary to WEP (2.3/2.10).",
        "Fake browser virus page with phone number → don’t call; close; review notifications (2.5/2.11/2.4).",
        "Ransom note on one PC → isolate/report; follow removal procedure; escalate (2.4/2.6).",
        "Leaving employee BYOD → selective wipe/sessions; not casual full wipe (2.8).",
        "Failed HDD under legal hold → stop wipe; escalate custody (2.9).",
        "Guest SSID reaches NAS → fix isolation; verify from guest device (2.10).",
        "Payroll cert warning on look-alike domain → stop credentials; escalate (2.11/2.5).",
        "10 drives destroyed; cert lists 9 → stop closure; reconcile (2.9).",
        "Extension removed but returns via sync → account/sync/malware path (2.11/2.4).",
        "Router DNS changed across all devices → integrity response, not ‘clear cookies’ only (2.10).",
      ],
    },
    commonMistakes: [
      "Disabling UAC, firewall, Safe Browsing, or MDM to make something work",
      "Treating HTTPS, hidden SSID, or MAC filtering as strong trust",
      "Treating deletion/quick format/factory reset as verified sanitization",
      "Weakening the whole WLAN for one legacy device",
      "Calling scareware numbers or downloading the offered cleaner",
      "Wiping under legal hold or without ownership authority",
      "Assuming a clean scan restores full trust after ransomware",
      "Routing every miss back only to the domain review instead of the precise topic",
    ],
    examTraps: [
      "Best first action under authorization",
      "Correct security layer (identity, endpoint, wireless, SOHO, browser, media)",
      "Narrowest safe correction vs control removal",
      "Escalation threshold (ransomware, legal hold, missing asset, BEC)",
      "Evidence vs assumption pairs",
      "Selective wipe vs full wipe by ownership",
    ],
    realWorldScenario:
      "One shift: MFA fatigue on a privileged account, a guest SSID that can browse the NAS, a BitLocker recovery screen after a firmware flash, and a payroll cert warning from a search ad. Four layers — identity, SOHO segmentation, Windows recovery-key handling, and browser/domain verification — keep you from one reckless ‘just disable security’ answer.",
    whenThisFails: [
      "If misses cluster on one objective, remediate that topic before claiming Security first-pass personally",
      "If ransomware, legal hold, missing destruction assets, or BEC payment changes appear, escalate — don’t solo",
      "If a control is managed/policy-enforced, escalate rather than remove management",
    ],
    teacherReflectionPrompt:
      "Without notes, list the eleven Security topic IDs in path order and name one authorization boundary, one evidence-vs-assumption pair, and one escalation trigger from this domain.",
    quiz: [
      {
        id: "ap-security-domain-review-q1",
        prompt: "A contractor needs access for two weeks and asks for a permanent local administrator account ‘to save time.’ Best framing?",
        choices: [
          { id: "a", text: "Temporary least-privilege access with sponsor approval and an end date — technical ability to grant admin is not authorization for permanent admin" },
          { id: "b", text: "Always grant permanent local admin for any contractor" },
          { id: "c", text: "Disable MFA so access is easier" },
          { id: "d", text: "Share the help-desk break-glass password" },
        ],
        correctChoiceId: "a",
        explanation: "Least privilege and authorization." + reviewHint("AP1202-2.1"),
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q2",
        prompt: "After authorized firmware work, a laptop shows the BitLocker recovery screen. Safest framing?",
        choices: [
          { id: "a", text: "Use the authorized recovery-key process; protect the key; do not paste keys into chat or disable BitLocker casually" },
          { id: "b", text: "Turn off Secure Boot and encryption permanently as step one" },
          { id: "c", text: "Post the recovery key on the shared ticket wall" },
          { id: "d", text: "Format the drive without checking backups or ownership" },
        ],
        correctChoiceId: "a",
        explanation: "Windows encryption recovery safety." + reviewHint("AP1202-2.2"),
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q3",
        prompt: "A corporate SSID presents an unexpected certificate warning during Enterprise authentication. Best first action?",
        choices: [
          { id: "a", text: "Stop joining; verify expected SSID/certificate details; escalate unexpected changes — do not casually accept unknown certs" },
          { id: "b", text: "Accept the certificate to finish the ticket faster" },
          { id: "c", text: "Switch the whole company to open Wi-Fi" },
          { id: "d", text: "Disable 802.1X permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Wireless Enterprise certificate handling." + reviewHint("AP1202-2.3"),
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q4",
        prompt: "A workstation shows a ransom note and encrypted user files. Best immediate framing?",
        choices: [
          { id: "a", text: "Isolate/report per procedure; preserve evidence; escalate — do not treat a single clean scan as restored trust" },
          { id: "b", text: "Pay the ransom from personal funds and keep working online" },
          { id: "c", text: "Ignore it if Task Manager still opens" },
          { id: "d", text: "Disable Defender so files open again" },
        ],
        correctChoiceId: "a",
        explanation: "Malware recognition and escalation." + reviewHint("AP1202-2.4"),
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-q5",
        prompt: "An email claims the vendor’s bank account changed and demands urgent payment. Best response?",
        choices: [
          { id: "a", text: "Out-of-band verification with a known contact; escalate suspected BEC — do not trust the email thread alone" },
          { id: "b", text: "Pay immediately to avoid late fees" },
          { id: "c", text: "Reply with the company’s banking credentials for ‘verification’" },
          { id: "d", text: "Disable MFA so accounting can move faster" },
        ],
        correctChoiceId: "a",
        explanation: "Social engineering / BEC." + reviewHint("AP1202-2.5"),
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-q6",
        prompt: "After a SOHO malware cleanup, the same threat returns within a day. Best framing?",
        choices: [
          { id: "a", text: "Revisit the removal procedure: persistence, reinfection source, account/extension sync, and reimage threshold — document and escalate as needed" },
          { id: "b", text: "Assume one Defender quick scan always restores full trust" },
          { id: "c", text: "Disable all security tools so the threat ‘has nothing to fight’" },
          { id: "d", text: "Ignore recurrence if the desktop wallpaper looks fine" },
        ],
        correctChoiceId: "a",
        explanation: "Malware-removal procedure depth." + reviewHint("AP1202-2.6"),
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q7",
        prompt: "A standard user cannot install software because of policy/UAC. The app is unapproved. Best action?",
        choices: [
          { id: "a", text: "Treat the control as working; use the approved software request path — do not disable UAC/policy to force the install" },
          { id: "b", text: "Grant permanent local admin to every user" },
          { id: "c", text: "Turn off SmartScreen and the firewall permanently" },
          { id: "d", text: "Install a cracked elevated installer from a forum" },
        ],
        correctChoiceId: "a",
        explanation: "Hardening / least privilege friction." + reviewHint("AP1202-2.7"),
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-q8",
        prompt: "An employee resigns and owns their phone, which has a work profile. Best wipe framing?",
        choices: [
          { id: "a", text: "Selective wipe / work-profile and session revocation per ownership — full wipe needs separate authority" },
          { id: "b", text: "Factory-reset the personal phone without consent because IT can" },
          { id: "c", text: "Ignore account revocation if the phone is personal" },
          { id: "d", text: "Bypass Activation Lock to prove ownership" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile ownership and wipe authority." + reviewHint("AP1202-2.8"),
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q9",
        prompt: "A failed magnetic HDD holds confidential data and is under legal hold. Best action?",
        choices: [
          { id: "a", text: "Stop casual wipe/destruction; preserve chain of custody and escalate — legal hold blocks routine disposal" },
          { id: "b", text: "Quick-format at the desk and recycle" },
          { id: "c", text: "Degauss at home without records" },
          { id: "d", text: "Delete the files in Explorer and close the ticket" },
        ],
        correctChoiceId: "a",
        explanation: "Data destruction + legal hold." + reviewHint("AP1202-2.9"),
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-q10",
        prompt: "Guests can reach the office NAS from the guest SSID. Best framing?",
        choices: [
          { id: "a", text: "Guest SSID without enforced isolation is not meaningful segmentation — fix isolation and verify from a guest device" },
          { id: "b", text: "Hide the SSID only; isolation is unnecessary" },
          { id: "c", text: "Put the NAS in the router DMZ" },
          { id: "d", text: "Disable the firewall so guests and NAS share freely" },
        ],
        correctChoiceId: "a",
        explanation: "SOHO segmentation." + reviewHint("AP1202-2.10"),
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-q11",
        prompt: "A payroll site shows a certificate warning and a look-alike domain from a search ad. Safest immediate action?",
        choices: [
          { id: "a", text: "Stop credential entry; verify the known portal/domain; escalate unexpected certificate/domain issues — HTTPS/lock icon is not proof of legitimacy" },
          { id: "b", text: "Click through the warning because the logo looks right" },
          { id: "c", text: "Disable Safe Browsing permanently" },
          { id: "d", text: "Export all passwords to the desktop first" },
        ],
        correctChoiceId: "a",
        explanation: "Browser + social-engineering domain verification." + reviewHint("AP1202-2.11"),
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-q12",
        prompt: "Zero Trust is best summarized for A+ support as:",
        choices: [
          { id: "a", text: "Verify explicitly, least privilege, assume breach, and continuously evaluate identity/device/session context — not ‘MFA alone’ or trusting the LAN" },
          { id: "b", text: "Turn off firewalls inside the office because the network is trusted" },
          { id: "c", text: "Give every user domain admin" },
          { id: "d", text: "A single vendor product name" },
        ],
        correctChoiceId: "a",
        explanation: "Zero Trust foundations." + reviewHint("AP1202-2.1"),
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-security-domain-review-b1",
        prompt: "Defender quarantines a business file the user insists is needed. Best framing?",
        choices: [
          { id: "a", text: "Investigate reputation/source and use approved restore exception paths — do not disable protection globally" },
          { id: "b", text: "Turn off Defender permanently" },
          { id: "c", text: "Email the file to a personal account to bypass scanning" },
        ],
        correctChoiceId: "a",
        explanation: "Windows endpoint security friction." + reviewHint("AP1202-2.2"),
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-b2",
        prompt: "One legacy device requires WEP. Correct SOHO/wireless decision?",
        choices: [
          { id: "a", text: "Prefer replace/update or an approved isolated network — do not weaken the primary LAN" },
          { id: "b", text: "Enable WEP for all SSIDs" },
          { id: "c", text: "Disable encryption because wired is ‘safe enough’" },
        ],
        correctChoiceId: "a",
        explanation: "Wireless + SOHO consistency." + reviewHint("AP1202-2.3"),
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-b3",
        prompt: "Repeated unexpected MFA approvals on a privileged account suggest:",
        choices: [
          { id: "a", text: "Possible account compromise / MFA fatigue attack — revoke sessions, reset, escalate" },
          { id: "b", text: "That MFA should be removed" },
          { id: "c", text: "That Zero Trust is complete" },
        ],
        correctChoiceId: "a",
        explanation: "Identity + social-engineering overlap." + reviewHint("AP1202-2.5"),
        objectiveId: "AP1202-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-b4",
        prompt: "A smart camera still uses the default password with open cloud sharing. Priority?",
        choices: [
          { id: "a", text: "Change credentials, MFA on cloud, update firmware, segment, review sharing — ownership/privacy first" },
          { id: "b", text: "Place the camera in the DMZ" },
          { id: "c", text: "Ignore it because IoT is out of scope forever" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile/embedded + SOHO IoT." + reviewHint("AP1202-2.8"),
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-b5",
        prompt: "An SSD-equipped PC will leave the organization. Destruction framing?",
        choices: [
          { id: "a", text: "Authorized sanitize/crypto-erase or physical destruction per policy; address keys, accounts, cloud copies; verify — deletion alone is insufficient" },
          { id: "b", text: "Empty the Recycle Bin only" },
          { id: "c", text: "Degauss the SSD as the preferred flash method" },
        ],
        correctChoiceId: "a",
        explanation: "Media-specific destruction." + reviewHint("AP1202-2.9"),
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-b6",
        prompt: "Unknown port forwarding and unexpected DNS appear on the SOHO router. Best framing?",
        choices: [
          { id: "a", text: "Treat as possible compromise: secure admin path, restore approved settings, update firmware, change credentials, review clients, escalate if needed" },
          { id: "b", text: "Clear browser cookies only and close the ticket" },
          { id: "c", text: "Enable remote admin from the Internet to investigate faster" },
        ],
        correctChoiceId: "a",
        explanation: "SOHO compromise response." + reviewHint("AP1202-2.10"),
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-b7",
        prompt: "A removed browser extension reappears after reboot with sync enabled. Consider:",
        choices: [
          { id: "a", text: "Profile sync, managed policy, other devices, account compromise — may need malware investigation" },
          { id: "b", text: "That private mode proves the extension is gone forever" },
          { id: "c", text: "Disabling Safe Browsing as the fix" },
        ],
        correctChoiceId: "a",
        explanation: "Browser sync persistence." + reviewHint("AP1202-2.11"),
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-security-domain-review-b8",
        prompt: "Deletion versus sanitization:",
        choices: [
          { id: "a", text: "Deletion removes FS references and is generally not sufficient for secure disposal" },
          { id: "b", text: "Deletion always equals physical destruction" },
          { id: "c", text: "Deletion degausses flash automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Evidence vs assumption — media." + reviewHint("AP1202-2.9"),
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-b9",
        prompt: "A lost managed phone with regulated data. Best framing?",
        choices: [
          { id: "a", text: "Lock/locate/wipe per policy, revoke sessions, escalate for regulated-data exposure — ownership and MDM matter" },
          { id: "b", text: "Wait a week with no action" },
          { id: "c", text: "Post the unlock PIN in email so anyone can help" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile lost-device escalation." + reviewHint("AP1202-2.8"),
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-b10",
        prompt: "Factory reset as data destruction:",
        choices: [
          { id: "a", text: "Not automatically verified sanitization for every classification/ownership context" },
          { id: "b", text: "Always sufficient for legal-hold evidence drives" },
          { id: "c", text: "Identical to certified shredding" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile/destruction consistency." + reviewHint("AP1202-2.9"),
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-security-domain-review-b11",
        prompt: "After Security domain review, Software Troubleshooting should be:",
        choices: [
          { id: "a", text: "The next Core 2 domain when authorized — not started inside this Security review" },
          { id: "b", text: "Already completed inside this topic" },
          { id: "c", text: "Replaced by inventing AP1202-2.12" },
        ],
        correctChoiceId: "a",
        explanation: "Stop-gate clarity." + reviewHint("AP1202-2.1"),
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-security-domain-review-f1",
        front: "Security domain path?",
        back: "Measures → Win → Wi-Fi → malware → social → removal → harden → mobile → destroy → SOHO → browser → review",
      },
      {
        id: "ap-security-domain-review-f2",
        front: "Capability = authorization?",
        back: "No — technical ability ≠ permission",
      },
      {
        id: "ap-security-domain-review-f3",
        front: "Zero Trust = MFA only?",
        back: "No — verify, least privilege, assume breach, continuous eval",
      },
      {
        id: "ap-security-domain-review-f4",
        front: "HTTPS = legitimate site?",
        back: "No — encrypts connection, not honesty",
      },
      {
        id: "ap-security-domain-review-f5",
        front: "Guest SSID = isolated?",
        back: "Only if isolation is enforced and verified",
      },
      {
        id: "ap-security-domain-review-f6",
        front: "Missed AP1202-2.6?",
        back: "Remediate ap-malware-removal",
      },
      {
        id: "ap-security-domain-review-f7",
        front: "AP1202-2.12?",
        back: "Does not exist in V15 — next is SW-TS 3.x",
      },
    ],
    assignments: [
      {
        id: "ap-lab-security-ops-desk",
        title: "Security Operations Desk capstone",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional inert queue only. No malware samples, live phishing links, real router access, tracking, destructive actions, or security-control bypasses.

For each incident record:
1) Asset
2) Risk
3) Relevant objective/topic (AP1202-2.x → topic id)
4) Evidence
5) Immediate safe action
6) Control or procedure
7) Authorization boundary
8) Escalation owner
9) Verification
10) Ticket note
11) User-facing explanation

Incident packets:

1) Repeated MFA prompts + suspicious sign-in on a privileged account
2) Lost managed phone with email and CRM access
3) BitLocker recovery after authorized firmware change
4) Browser certificate warning on a look-alike payroll URL
5) Ransomware indicators on one workstation
6) Guest network can browse NAS shares
7) SSD scheduled for external donation/disposal
8) Smart camera with default password and public share link
9) Defender quarantine of a claimed business file
10) Vendor payment-change email (BEC style)
11) Unsupported/legacy browser required for one LOB site; user also banks in same session
12) Unknown router DNS settings affecting all devices

Also complete a weak-area plan:
- Take the Security Domain Review quiz
- For each miss, open the mapped topic (not only this review)
- Note two weakest objectives and one remediation activity each

Boundaries: capability ≠ authorization; do not disable working controls; legal hold and ownership block casual wipes; HTTPS ≠ legitimacy; clean scan ≠ restored trust.`,
        estimatedMinutes: 45,
        completionCriteria: [
          "Complete all eleven fields for incidents 1–12",
          "Map each incident to the narrowest AP1202-2.x topic",
          "Escalate ransomware, BEC, legal-hold, missing-custody, and regulated lost-device cases appropriately",
          "Refuse control-bypass and scareware-call actions",
          "Record weak-area remediation plan from quiz misses",
        ],
        relatedTopicIds: [
          "ap-security-measures",
          "ap-windows-security",
          "ap-wireless-security",
          "ap-malware",
          "ap-social-engineering",
          "ap-malware-removal",
          "ap-hardening",
          "ap-mobile-security",
          "ap-data-destruction",
          "ap-soho-security",
          "ap-browser-security",
          "ap-security-domain-review",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 60,
    difficulty: "medium",
  },
];
