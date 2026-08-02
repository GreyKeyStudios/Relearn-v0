import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8d (Michael 2026-08-01).
 * ap-malware (AP1202-2.4) only — detect, remove, prevent.
 * Stop after verify — no 2.5+ Security, SW-TS, Ops, or CCNA C1.
 * Defensive only: no malware samples, code, payloads, or exploitation.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only Defender/history inventories and fictional malware-response worksheets. Do not download malware samples, execute suspicious files, disable endpoint protection, restore quarantine blindly, pay ransom, or change passwords from a suspected infected device. Use synthetic incident cards only.",
};

export const apCore2SecurityBatch4Topics: Topic[] = [
  {
    id: "ap-malware",
    name: "Malware Detection, Removal & Prevention",
    prerequisites: [
      "ap-wireless-security",
      "ap-windows-security",
      "ap-security-measures",
    ],
    objectives: ["AP1202-2.4"],
    knowledgeNodeId: "incident-response",
    lesson: {
      title: "Respond to Malware with Containment, Evidence, and Approved Remediation",
      content: `Malware response is a **safe support and incident-handling process**, not a glossary of bug names:

\`\`\`text
recognize symptoms → preserve safety/evidence → isolate appropriately → identify/scan
→ remediate with approved methods → update/harden → verify → document → escalate when required
\`\`\`

**Prior:** \`ap-security-measures\` (defense in depth) · \`ap-windows-security\` (Defender, quarantine, UAC) · OS tools for process/startup evidence. **Later:** social engineering (\`ap-social-engineering\` / 2.5) and SOHO removal procedure drills (\`ap-malware-removal\` / 2.6) deepen delivery and procedure sequences — do not substitute them here.

**Defensive boundary.** No malware creation, payload code, persistence how-tos, evasion, credential-theft playbooks, or exploitation.

---

## Categories (overlap is normal)

Virus · worm · Trojan · ransomware · spyware · adware · rootkit · keylogger · bot/botnet client · backdoor · logic bomb · cryptominer/cryptojacking · PUA · fileless · boot/firmware (recognition) · mobile malware · browser hijacker · malicious extension · social-engineering-delivered malware.

Categories describe *delivery*, *behavior*, or *impact* — one program can fit several. Symptoms alone do **not** prove a specific category.

## Warning signs ≠ proof

Watch for: pop-ups/redirects · new toolbars/extensions · security tools disabled · unexplained CPU/GPU/disk/network · slow startup · unfamiliar processes · renamed/encrypted files · ransom note · new accounts · odd startup/tasks · missing files · idle traffic · contacts getting weird messages · camera/mic oddities · mobile battery/data spikes · search hijacks · repeated auth prompts · OS/EDR alerts.

**Also can be:** hardware · normal updates · misconfig · failing storage · heavy apps · browser settings · account compromise without local malware. Gather evidence before declaring infection.

---

## Initial triage questions

1) Observed? 2) When started? 3) Recent changes? 4) One device or many? 5) Sensitive data? 6) Active encrypt/destroy/exfil suspected? 7) Org-managed? 8) Policy escalate now? 9) Evidence > ordinary repair? 10) Safe to stay connected?

**Escalate promptly** on: ransomware · active theft · credential compromise · multi-system · privileged accounts · regulated data · unknown actor disabled security tools · persistence after cleanup · rootkit/firmware/boot suspicion · managed-device incident · legal/compliance · destructive activity · unknown removable-media spread · business-critical impact. Stay within authorization.

## Isolation / containment (policy-first)

May include: unplug Ethernet · disable Wi-Fi/cellular · remove from active use · block removable media · preserve power state if IR says so · avoid unnecessary reboot · call security/IR · document symptoms/timestamps.

Blind power-off/reboot can destroy volatile evidence, interrupt investigation, or change malware behavior. Follow org IR — do not improvise forensics.

---

## Approved removal workflow (exam-aligned habit)

1. Investigate/verify symptoms  
2. Quarantine/isolate per policy  
3. Disable/limit System Restore **only** when the approved procedure requires it (explain recovery impact)  
4. Update anti-malware from a **trusted** source  
5. Run appropriate scans  
6. Trusted removal/recovery methods  
7. Quarantine/remove confirmed threats  
8. Review apps/extensions/startup/accounts  
9. OS/app updates  
10. Restore protective controls  
11. Re-scan + verify behavior  
12. Credential review if compromise possible  
13. Restore clean data only from trusted backup  
14. Document  
15. Escalate or **reimage** when integrity confidence is insufficient  

No reverse-engineering malware by hand.

## Tools (what they prove)

Defender: real-time · quick/full/custom · Offline · quarantine · protection history · trusted second-opinion scanner if policy allows · mobile/vendor tools · extension/app/startup review · Task Manager/Resource Monitor evidence · Event Viewer · Safe Mode/WinRE where aligned · vendor cleanup · reimage/recovery path.

Limits: clean scan ≠ uncompromised · high CPU ≠ malware · detection names may be heuristic · quarantine ≠ stolen creds fixed · removal ≠ trust restored.

---

## Ransomware (defensive)

Signs: mass encrypt/rename · ransom note · shares unavailable · rapid spread · backup/share risk · possible credential compromise.

Response: isolate per policy · stop casual file interaction · **escalate immediately** · do not pay/negotiate as an individual tech · don’t delete evidence casually · protect clean backups · IR reviews credentials/systems · restore only from trusted verified sources · confirm entry path closed before normal ops. No ransomware code, encryption how-to, or payment guidance.

## Browser / PUA / fake alerts

Extensions · notification spam · search hijack · redirects · fake “antivirus” pages · bundled installers · adware · phishing pages.

Workflow: confirm browser vs system · review extensions/notifications · supported uninstall · browser reset only with data impact understood · scan · review saved creds if needed · check sync won’t re-push junk · educate trusted sources. Never run the suspicious file “to test.”

## Mobile (objective depth)

Unknown apps · excessive permissions · device-admin/profile concerns · battery/data spikes · pop-ups · sideload · root/jailbreak risk · SMS abuse · account compromise · malicious profiles · accessibility abuse (where relevant).

Response: verify source/permissions · supported uninstall · update · org/vendor tools · preserve data · escalate managed cases · factory reset only late, authorized, after backup/account recovery prep. No mobile security bypass.

## Recurring / persistence → escalate

Returns after reboot · security tools keep dying · admin account reappears · extension returns via sync · scheduled tasks return · multi-system related · unknown MDM profile · boot/firmware integrity questioned → security escalation · account review · trusted reimage · firmware/vendor · enterprise IR · replace bad recovery media · review sync sources. No manual deep persistence surgery beyond supported tooling.

---

## Prevention (layered)

Patch OS/apps · EDR/AV + current defs · least privilege · MFA · trusted sources · no piracy/cracks · email/web filtering · user awareness · macro/policy controls · tested backups · segmentation · limit removable media · app control · monitor alerts · secure extensions · protect admin accounts · baselines · IR procedures. Ties to defense in depth / Zero Trust without re-teaching 2.1.

## Credentials

Suspect theft → escalate · change passwords from a **known-clean** system · revoke sessions/tokens · review MFA · review activity · **don’t** change passwords on the suspected infected device · review reuse · document account types · treat privileged/service accounts carefully.

## Recovery vs trust

Removed ≠ symptoms gone ≠ repaired ≠ **trusted**. Trust may need verified scans · patches · restored controls · credential reset · clean restore · reimage · security approval · monitoring · entry path closed.

**Prefer reimage** when integrity can’t be established · rootkit/deep compromise · multiple protections disabled · policy requires · cleanup less reliable than rebuild.

## Documentation

Symptoms · date/time · system · scope · alerts/detection names · isolation · tools/scans · results · quarantines · updates · accounts at risk · escalation owner · recovery · verification · user education · follow-up. **Never** put passwords, recovery keys, or unnecessary PII in tickets.

**What's next.** Social-engineering attacks, threats, and vulnerabilities (\`ap-social-engineering\` / AP1202-2.5) when authorized.`,
    },
    lightbulbMoment:
      "Malware tickets are evidence-first incident handling: contain safely, use approved scans, escalate ransomware and multi-system cases, and remember a clean scan or vanished symptom is not the same as a trusted system.",
    keyFacts: [
      "Category labels overlap — symptoms alone don’t prove the type",
      "Slow PC ≠ malware; gather evidence before declaring infection",
      "Isolate per policy; don’t improvise forensics or blind reboot",
      "Update trusted AV → scan → quarantine → harden → re-scan → verify",
      "Ransomware: isolate, escalate, don’t pay, protect clean backups",
      "Don’t change passwords on a suspected infected device",
      "Removal ≠ restored trust — reimage when integrity is doubtful",
    ],
    guidedExample: {
      title: "Six malware-response tickets",
      steps: [
        "Browser redirects + fake ‘call support’ pop-up → extensions/notifications first; approved scan; check sync restore; educate; don’t run the pop-up ‘cleaner.’",
        "Ransom note + renamed files → stop ordinary TS; isolate; escalate IR; protect evidence/backups; no restore freelancing.",
        "Unknown high-CPU process → identify process + recent changes + alerts before assuming malware; scan; escalate if suspicious.",
        "Defender quarantines ‘needed’ LOB file → no auto-restore; verify publisher/source; security review; keep protection on.",
        "Threat returns after cleanup → sync/account/persistence/media/other hosts; escalate or reimage.",
        "Sideloaded APK then pop-ups → permissions/source; supported remove; update; account risk; escalate if managed/sensitive — no hasty factory reset.",
      ],
    },
    commonMistakes: [
      "Assuming every slow computer is infected",
      "Downloading ‘antivirus’ from a pop-up warning",
      "Disabling endpoint protection to ‘fix’ apps",
      "Restoring quarantine without validation",
      "Changing passwords on the infected machine",
      "Paying ransom or contacting attackers personally",
      "Treating one clean scan as proof of trust",
    ],
    examTraps: [
      "Safest next action with incomplete evidence",
      "Ransomware escalation vs DIY decrypt",
      "When to reimage vs cleanup",
      "Credential reset from clean system",
      "Browser PUA vs system-wide infection framing",
      "System Restore disable only when procedure requires",
    ],
    realWorldScenario:
      "A user clicks a fake ‘PC infected’ banner and installs a ‘cleaner.’ Pop-ups multiply; Defender was turned off. You isolate Wi-Fi per policy, re-enable protection from a trusted path, run an offline scan, remove the PUA, reset browser sync that re-pushed the extension, force a password change from a clean kiosk, and document — without downloading anything the banner recommended.",
    whenThisFails: [
      "If ransomware or multi-host spread is suspected, stop DIY cleanup and escalate IR immediately",
      "If threats return after standard cleanup, escalate toward reimage/account review — don’t keep looping random tools",
      "If you lack authorization for isolation or account actions, document and escalate",
    ],
    teacherReflectionPrompt:
      "For ransom note vs browser redirect vs recurring infection after cleanup: state immediate isolation/escalation difference and one verification that proves trust is returning.",
    quiz: [
      {
        id: "ap-malware-q1",
        prompt: "Files are renamed and a ransom note appears on one PC. Safest first path?",
        choices: [
          { id: "a", text: "Isolate per policy, escalate immediately, protect evidence/backups — do not pay or casually delete evidence" },
          { id: "b", text: "Pay the ransom from personal funds to restore files quickly" },
          { id: "c", text: "Disable Defender and download a random decryptor from a forum" },
          { id: "d", text: "Connect a USB full of backups to the infected PC immediately without IR guidance" },
        ],
        correctChoiceId: "a",
        explanation: "Ransomware is an escalation incident, not ordinary cleanup.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-q2",
        prompt: "A PC is slow and an unknown process uses high CPU. Best framing?",
        choices: [
          { id: "a", text: "High CPU is not proof of malware — identify the process, recent changes, and alerts; scan with approved tools" },
          { id: "b", text: "Always format C: as step one" },
          { id: "c", text: "Disable real-time protection permanently" },
          { id: "d", text: "Assume ransomware and pay immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Symptoms need evidence before category claims.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-q3",
        prompt: "Credential theft is possible after malware on a laptop. Where should the user change the password?",
        choices: [
          { id: "a", text: "From a known-clean system — not from the suspected infected device" },
          { id: "b", text: "Only on the infected device so the malware ‘sees’ the new password" },
          { id: "c", text: "In a public ticket comment in plaintext" },
          { id: "d", text: "Never change passwords after malware" },
        ],
        correctChoiceId: "a",
        explanation: "Credential response hygiene.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-q4",
        prompt: "Defender quarantines a file the user says is a required business installer. Best next action?",
        choices: [
          { id: "a", text: "Do not auto-restore — verify publisher/source/need and escalate for security review while keeping protection on" },
          { id: "b", text: "Restore immediately and add a permanent *.* exclusion" },
          { id: "c", text: "Turn off tamper protection and real-time scanning" },
          { id: "d", text: "Run the file from the recycle bin to ‘test’" },
        ],
        correctChoiceId: "a",
        explanation: "Quarantine decisions preserve protection.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-malware-q5",
        prompt: "A threat returns after standard cleanup and an extension reappears via browser sync. Best interpretation?",
        choices: [
          { id: "a", text: "Ordinary cleanup may be insufficient — review sync/account/persistence and escalate or reimage as needed" },
          { id: "b", text: "One clean quick scan already restored full trust" },
          { id: "c", text: "Disable logging so it stops alerting" },
          { id: "d", text: "Pay any ransom notes that appear later" },
        ],
        correctChoiceId: "a",
        explanation: "Recurring symptoms need deeper response.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-malware-q6",
        prompt: "When is trusted reimaging often preferable to repeated cleanup?",
        choices: [
          { id: "a", text: "When system integrity cannot be established, deep/rootkit compromise is suspected, or policy requires rebuild" },
          { id: "b", text: "Whenever a single pop-up appears once" },
          { id: "c", text: "Instead of ever using Defender" },
          { id: "d", text: "Only for printer toner issues" },
        ],
        correctChoiceId: "a",
        explanation: "Restoring trust vs clearing a symptom.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-malware-b1",
        prompt: "Trojan versus ransomware category framing:",
        choices: [
          { id: "a", text: "Trojan emphasizes deceptive delivery; ransomware emphasizes encrypt/impact behavior — one sample can fit both ideas" },
          { id: "b", text: "They are mutually exclusive forever" },
          { id: "c", text: "Ransomware only exists on printers" },
        ],
        correctChoiceId: "a",
        explanation: "Categories overlap.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b2",
        prompt: "Before declaring infection from pop-ups alone:",
        choices: [
          { id: "a", text: "Gather evidence — browser settings, extensions, alerts, and approved scans" },
          { id: "b", text: "Format all company servers" },
          { id: "c", text: "Disable MFA tenant-wide" },
        ],
        correctChoiceId: "a",
        explanation: "Symptom vs evidence.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b3",
        prompt: "Why avoid unnecessary reboot during active investigation?",
        choices: [
          { id: "a", text: "May destroy volatile evidence or change what can be observed — follow IR policy" },
          { id: "b", text: "Reboots always create ransomware" },
          { id: "c", text: "Windows forbids reboots after malware" },
        ],
        correctChoiceId: "a",
        explanation: "Containment/evidence awareness.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-malware-b4",
        prompt: "A clean Defender full scan means:",
        choices: [
          { id: "a", text: "Useful evidence — still not an absolute guarantee the device is fully trusted" },
          { id: "b", text: "Credentials cannot have been stolen" },
          { id: "c", text: "Backups are unnecessary forever" },
        ],
        correctChoiceId: "a",
        explanation: "Tool limits.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b5",
        prompt: "Fake security pop-up recommending a download — technician habit?",
        choices: [
          { id: "a", text: "Do not download from the pop-up — use approved tools/path and investigate the browser/system" },
          { id: "b", text: "Install whatever the banner offers immediately" },
          { id: "c", text: "Disable SmartScreen to speed the download" },
        ],
        correctChoiceId: "a",
        explanation: "Common social-delivery/PUA trap without teaching full 2.5.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b6",
        prompt: "Mobile sideloaded app with pop-ups — safe response includes:",
        choices: [
          { id: "a", text: "Verify source/permissions, supported uninstall, update/scan where available, escalate if managed/sensitive" },
          { id: "b", text: "Jailbreak to remove it faster" },
          { id: "c", text: "Immediate factory reset with no backup or account prep" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile malware response depth.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-malware-b7",
        prompt: "Prevention layer that most directly reduces malicious installer risk:",
        choices: [
          { id: "a", text: "Trusted software sources + least privilege + current endpoint protection" },
          { id: "b", text: "Leaving WEP enabled on Wi-Fi" },
          { id: "c", text: "Sharing Domain Admin passwords" },
        ],
        correctChoiceId: "a",
        explanation: "Layered prevention.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b8",
        prompt: "Fileless malware recognition point for technicians:",
        choices: [
          { id: "a", text: "May live primarily in memory/legitimate tools — clean file scans can miss context; escalate when behavior persists" },
          { id: "b", text: "Only infects printers via USB ink" },
          { id: "c", text: "Is cured by hiding the SSID" },
        ],
        correctChoiceId: "a",
        explanation: "V15 category awareness without exploit detail.",
        objectiveId: "AP1202-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-malware-b9",
        prompt: "Cryptominer/cryptojacking symptom family often includes:",
        choices: [
          { id: "a", text: "Unexpected sustained CPU/GPU usage and heat/power draw with little user workload" },
          { id: "b", text: "Mandatory BitLocker recovery every minute" },
          { id: "c", text: "Automatic OSPF convergence" },
        ],
        correctChoiceId: "a",
        explanation: "Modern malware type recognition.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-malware-b10",
        prompt: "Before restoring a quarantined file, what should a technician confirm?",
        choices: [
          { id: "a", text: "The detection is a verified false positive and restoration is authorized" },
          { id: "b", text: "The user wants the alert to disappear" },
          { id: "c", text: "The printer has enough toner" },
        ],
        correctChoiceId: "a",
        explanation: "Builds on Windows security settings.",
        objectiveId: "AP1202-2.4",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-malware-f1",
        front: "Malware response loop?",
        back: "Symptoms → evidence → isolate → scan → remediate → harden → verify → document/escalate",
      },
      {
        id: "ap-malware-f2",
        front: "Ransom note first moves?",
        back: "Isolate · escalate IR · protect evidence/backups · don’t pay",
      },
      {
        id: "ap-malware-f3",
        front: "Password after infection?",
        back: "Change from a known-clean system",
      },
      {
        id: "ap-malware-f4",
        front: "Clean scan = trusted?",
        back: "Not automatically — trust needs more than one green scan",
      },
      {
        id: "ap-malware-f5",
        front: "Quarantined ‘needed’ file?",
        back: "Don’t auto-restore — verify source and escalate",
      },
      {
        id: "ap-malware-f6",
        front: "Infection returns?",
        back: "Sync/account/persistence/other hosts → escalate/reimage",
      },
      {
        id: "ap-malware-f7",
        front: "Fake AV pop-up download?",
        back: "Refuse — use approved tooling only",
      },
    ],
    assignments: [
      {
        id: "ap-lab-malware-triage",
        title: "Malware-response triage lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional incident cards only. No malware samples, code, payloads, or live suspicious files.

For each card record:
1) Confirmed / Suspected / Not yet supported
2) Immediate safety or isolation action
3) Evidence to gather
4) Approved scan/tool
5) Escalation mandatory? (Y/N + why)
6) Remediation or recovery path
7) Credential-response needed?
8) Verification
9) Ticket note (no passwords/keys/PII)

Card 1 — Browser
Symptoms: redirects, fake security warning, new toolbar. Recent: free PDF converter install. Alerts: none yet. Evidence: three unknown extensions; notifications allowed for random sites. Scope: 1 PC. Data: none regulated. Managed: Yes.

Card 2 — Ransomware
Symptoms: files .locked + ransom note on desktop. Recent: opened invoice email attachment. Alerts: Defender disabled by user ‘to open file.’ Scope: 1 PC so far; mapped finance share used today. Data: sensitive. Managed: Yes.

Card 3 — Performance
Symptoms: slow; unknown process ~90% CPU. Recent: none claimed. Alerts: none. Evidence: process name resembles a game launcher user denies installing. Scope: 1. Data: low. Managed: No (home office loaner).

Card 4 — Quarantine dispute
Symptoms: LOB updater quarantined. User demands restore. Publisher: unknown. Source: USB from vendor visit. Scope: 1. Data: medium. Managed: Yes.

Card 5 — Recurring
Symptoms: adware returns after cleanup last week. Evidence: extension reappears after Edge sync; same PUA name. Scope: 1 user, 2 devices signed into same profile. Data: low. Managed: Yes.

Card 6 — Mobile
Symptoms: pop-ups after sideloaded APK. Permissions: accessibility + SMS. Battery drain. Scope: 1 phone. Org email profile present. Managed: MDM enrolled.

Boundaries: do not recommend paying ransom, disabling protection, running suspicious files, or password changes on the infected device.`,
        estimatedMinutes: 30,
        completionCriteria: [
          "Complete all nine fields for Cards 1–6",
          "Mark escalation mandatory correctly for ransomware and multi-device/account recurrence",
          "Ticket notes contain no secrets",
        ],
        relatedTopicIds: ["ap-malware", "ap-windows-security", "ap-security-measures"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
