import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8g (Michael 2026-08-01).
 * ap-hardening (AP1202-2.7) only — workstation security best practices.
 * Stop after verify — no 2.8+ Security, SW-TS, Ops, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional workstation-hardening baseline worksheets only. Do not disable Defender, firewall, encryption, updates, or MDM policy for practice. Do not edit firmware passwords or make destructive changes. Do not connect unknown USB devices. Document recommended actions — do not weaken real controls.",
};

export const apCore2SecurityBatch7Topics: Topic[] = [
  {
    id: "ap-hardening",
    name: "Workstation Security Best Practices",
    prerequisites: [
      "ap-malware-removal",
      "ap-windows-security",
      "ap-security-measures",
      "ap-windows-settings",
    ],
    objectives: ["AP1202-2.7"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Harden Workstations by Reducing Attack Surface Safely",
      content: `Workstation hardening is the deliberate reduction of **attack surface** while preserving authorized business function:

\`asset and use case → unnecessary exposure → justified control → verify function and security → document\`

**Not** “turn everything off.” A secure workstation must still do its job.

**Prior:** \`ap-security-measures\` (least privilege / defense in depth) · \`ap-windows-security\` (Defender, firewall, BitLocker, UAC) · \`ap-malware-removal\` (restore protections after cleanup). **Later:** mobile/embedded (\`ap-mobile-security\` / 2.8) — don’t substitute that domain here.

---

## Hardening cycle

\`\`\`text
inventory → required function → unnecessary exposure → baseline → patch/configure
→ verify → monitor → document → review over time
\`\`\`

## Secure baseline

Approved OS version · required apps · approved config · security controls · update level · account model · network settings · logging · encryption · backup/recovery · device-management state.

Baselines reveal: missing controls · unauthorized changes · drift · unsupported software · excess privilege · unnecessary services. Not advanced compliance engineering.

## Patch management

OS / apps / browsers · drivers/firmware when appropriate · security intelligence · supported versions · EoS risk · test · restarts · managed policy · rollback/recovery planning.

Distinguish: missing · failed · compatibility hold · disk space · network/proxy · managed schedule · unsupported software · escalate. **Never** permanently disable updates.

## Account hardening

Standard user for routine work · separate admin account · least privilege · strong auth / MFA · password/passphrase policy · lockout · auto screen lock · session timeout · disable unused · remove former users · no shared accounts · review groups · temporary elevation where supported · secure recovery.

Admin rights are **not** justified merely because: frequent installs · poorly designed apps · elevation inconvenience · seniority. Use approved elevation/deployment instead. Ties to Zero Trust / lifecycle without re-teaching all of 2.1.

## Apps, services, startup

Remove unsupported/unnecessary software · trim startup · disable unused services **only** with evidence + authorization · remove unused extensions · restrict macros/scripting per policy · remove legacy protocols · limit sharing · close unnecessary listeners · allowlisting where available · review third-party updaters · no piracy/untrusted software.

**Before change:** purpose · dependency · business need · record original state · rollback · verify after. Never randomly disable unknown services.

## Network (workstation-level)

Host firewall On · correct profile · no unnecessary inbound · secure Wi-Fi · VPN when policy requires · unused adapters Off · no auto-join unknown nets · DNS/proxy only if approved · limit file/printer sharing · RDP Off unless required (then restrict + strong auth + logging) · SMB/legacy risk (intro) · Public-network caution. Not advanced firewall engineering.

## Data protection

Full-disk encryption · NTFS least privilege · backup + recovery testing · classification (intro) · privacy screens · removable-media policy · secure disposal · sync ≠ backup · protect recovery keys · minimize local sensitive data · lock when unattended.

**Distinctions:** encryption ≠ backup · backup ≠ permissions · hidden ≠ secure · sync ≠ recoverability · admin capability ≠ authorization to view all data.

## Browser / email

Updated browser · approved extensions only · block unwanted notifications appropriately · reputation/download protection · no unapproved credential stores · phishing protection · verify cert warnings · policy for risky content · org filtering/reporting. Don’t bypass warnings or disable protection globally.

## Endpoint protection

Real-time · scheduled/policy scans · current intelligence · tamper protection · host firewall · reputation · ransomware protection concepts · app/device control · logging/alerts · health monitoring. Connect \`ap-windows-security\`. Don’t disable controls “to test.”

## Physical

Cable locks · locked rooms/cabinets · badges · privacy screens · placement · port blockers · asset tags · clean desk · screen lock · secure media · controlled disposal · travel protection. Physical access can defeat logical controls.

## BIOS/UEFI / firmware (A+ depth)

Firmware updates · Secure Boot · TPM · firmware passwords where policy allows · boot-order control · disable external boot when appropriate · protect firmware/recovery credentials · avoid unsupported changes · document hardware changes · firmware changes may trigger BitLocker recovery. **No bypass instructions.**

## Removable media

Restrict unknown USB · approved encrypted media · scan per policy · autorun Off where applicable · track sensitive media · never connect found devices · secure erase/destroy at end of life. No malicious USB construction.

## Portable / travel (objective-aligned, not full mobile domain)

Encryption · strong sign-in/MFA · auto lock · remote management / wipe concepts · VPN · secure Wi-Fi · physical protection · minimal local sensitive data · backup · travel awareness · avoid unknown charge/data ports · report loss immediately.

## Logging / monitoring (workstation)

Security logs · endpoint alerts · update status · logins · device health · app changes · unauthorized accounts · failed auth · firewall events · backup failures. Logs don’t prevent everything; they must be reviewed/forwarded; preserve evidence and escalate. Not full SIEM.

## Configuration drift

Systems change: user installs · updates · leftover temporary exceptions · privilege creep · services return · settings disabled.

Examples: permanent “temp” firewall rule · leftover local admin · forgotten Defender exclusion · unsupported app remains · open share · endless update pause · guest enabled · former employee account active. **Review periodically.**

## Hardening vs troubleshooting

Friction may mean the control works: standard user can’t install · firewall blocks unapproved service · MFA prompt · app control · MDM lock · BitLocker after hardware change.

Response: (1) confirm business need (2) verify policy (3) approved exception/deploy path (4) narrowest change (5) verify protection remains (6) document. **Not** “disable the control.”

**What's next.** Mobile and embedded device security methods (\`ap-mobile-security\` / AP1202-2.8) when authorized.`,
    },
    lightbulbMoment:
      "Hardening is attack-surface reduction with a business purpose: inventory, remove unnecessary exposure, apply a justified baseline, verify the job still works, and never trade permanent admin or disabled updates for convenience.",
    keyFacts: [
      "Hardening cycle: inventory → function → exposure → baseline → patch → verify → monitor → document",
      "Standard user daily; separate admin; no shared admin for convenience",
      "Patch and keep endpoint protection — never permanently disable updates",
      "Disable services only with evidence, authorization, and rollback",
      "Encryption ≠ backup; sync ≠ backup; hidden ≠ secure",
      "Temporary exclusions/rules/admin rights cause dangerous drift if left forever",
      "Policy-managed settings are often working — escalate, don’t bypass",
    ],
    guidedExample: {
      title: "Six workstation-hardening tickets",
      steps: [
        "Shared local admin for all staff → individual accounts, standard users, controlled elevation, rotate/retire shared creds, audit.",
        "Unsupported browser for one LOB app → isolate/compensate; don’t use it for general browsing; plan supported path/risk acceptance.",
        "RDP on with no business need → confirm; disable if authorized; if required, restrict scope + strong auth + logging.",
        "Broad Defender exclusion left from last ticket → confirm reason; narrow/remove; scan; verify app; document.",
        "Travel laptop prep → encryption, MFA, auto-lock, VPN, updates, MDM/wipe readiness, minimal local data, physical protection, loss report path.",
        "User wants sensitive files on personal USB → check policy; approved encrypted media only; escalate data-handling concerns.",
      ],
    },
    commonMistakes: [
      "Disabling protections for convenience",
      "Permanent local admin for daily work",
      "Turning off updates or leaving pause forever",
      "Randomly disabling services",
      "Leaving broad firewall rules or Defender exclusions",
      "Assuming encryption replaces backup",
      "Hardening without recording original state or verifying business function",
    ],
    examTraps: [
      "Best first hardening action for the use case",
      "Narrowest safe correction vs disable control",
      "Shared admin / leftover exclusion drift",
      "RDP unnecessary vs restricted when required",
      "Policy-managed setting ≠ defect",
      "Verification that function and security both remain",
    ],
    realWorldScenario:
      "A clinic laptop still has a ‘temporary’ Defender exclusion for C:\\Tools and every nurse uses one local Administrator password on a sticky note. You inventory required apps, move staff to standard accounts with approved elevation, remove the leftover exclusion after confirming the LOB path, enable BitLocker escrow check, patch, verify appointments software still runs, and document — attack surface down without breaking the clinic day.",
    whenThisFails: [
      "If MDM/GPO blocks a change, escalate the policy owner with business justification — don’t bypass",
      "If a required legacy app forces risk, use compensating controls and formal acceptance — don’t weaken the whole baseline",
      "If firmware/BitLocker recovery is involved, protect keys and follow approved recovery — no bypass",
    ],
    teacherReflectionPrompt:
      "For a travel laptop and a shared-admin SOHO PC, list three hardening controls each that reduce exposure without removing the authorized job function.",
    quiz: [
      {
        id: "ap-hardening-q1",
        prompt: "Every employee uses one shared local Administrator account for daily work. Best first hardening direction?",
        choices: [
          { id: "a", text: "Individual accounts, standard-user daily work, separate controlled admin access — retire the shared credential" },
          { id: "b", text: "Keep the shared admin password but write it larger" },
          { id: "c", text: "Disable the firewall so elevation is never needed" },
          { id: "d", text: "Turn off BitLocker for convenience" },
        ],
        correctChoiceId: "a",
        explanation: "Account hardening and least privilege.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-q2",
        prompt: "RDP is enabled on a workstation with no approved business need. Safest authorized action?",
        choices: [
          { id: "a", text: "Confirm use case; disable if unnecessary; if required, restrict access, require strong auth, and verify logging/firewall scope" },
          { id: "b", text: "Expose RDP to the entire Internet for easier support" },
          { id: "c", text: "Disable Windows Update permanently" },
          { id: "d", text: "Add a Defender exclusion for *.*" },
        ],
        correctChoiceId: "a",
        explanation: "Network hardening with business-function check.",
        objectiveId: "AP1202-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-hardening-q3",
        prompt: "A broad Defender exclusion was added during troubleshooting and never removed. Best next step?",
        choices: [
          { id: "a", text: "Confirm original reason; remove or narrow if authorized; scan the path; verify the app; document" },
          { id: "b", text: "Widen the exclusion to the whole drive" },
          { id: "c", text: "Disable real-time protection entirely" },
          { id: "d", text: "Ignore drift because the PC is ‘working’" },
        ],
        correctChoiceId: "a",
        explanation: "Configuration drift cleanup.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-q4",
        prompt: "A standard user cannot install software on a managed PC. Correct framing?",
        choices: [
          { id: "a", text: "Likely least privilege / policy working — use approved deployment; don’t grant permanent admin for convenience" },
          { id: "b", text: "Always disable UAC and make the user Domain Admin" },
          { id: "c", text: "Turn off Secure Boot as the fix" },
          { id: "d", text: "Share the local Administrator password in chat" },
        ],
        correctChoiceId: "a",
        explanation: "Hardening vs troubleshooting friction.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-q5",
        prompt: "Traveling employee laptop hardening should prioritize:",
        choices: [
          { id: "a", text: "Encryption, strong sign-in/MFA, auto-lock, VPN, updates, remote management readiness, minimal local sensitive data, physical protection" },
          { id: "b", text: "Open guest Wi-Fi autoconnect and no screen lock" },
          { id: "c", text: "Storing all company files only on an unlabeled USB" },
          { id: "d", text: "Disabling endpoint protection to save battery" },
        ],
        correctChoiceId: "a",
        explanation: "Portable workstation considerations.",
        objectiveId: "AP1202-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-hardening-q6",
        prompt: "Full-disk encryption versus backup — correct statement?",
        choices: [
          { id: "a", text: "Encryption protects data at rest; it does not replace a recovery/backup strategy" },
          { id: "b", text: "Encryption is identical to OneDrive sync backup always" },
          { id: "c", text: "Backup replaces NTFS permissions" },
          { id: "d", text: "Hidden files are a substitute for encryption" },
        ],
        correctChoiceId: "a",
        explanation: "Data-protection distinctions.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-hardening-b1",
        prompt: "Before disabling an unknown Windows service:",
        choices: [
          { id: "a", text: "Identify purpose/dependency, confirm business need, record state, plan rollback, then verify after authorized change" },
          { id: "b", text: "Disable every service that looks unfamiliar immediately" },
          { id: "c", text: "Turn off the firewall first" },
        ],
        correctChoiceId: "a",
        explanation: "Evidence before service reduction.",
        objectiveId: "AP1202-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-hardening-b2",
        prompt: "Unsupported OS/application past end-of-support primarily increases:",
        choices: [
          { id: "a", text: "Unpatched vulnerability risk — plan upgrade/replacement or compensating controls with authorization" },
          { id: "b", text: "Wi-Fi channel bonding speed" },
          { id: "c", text: "Printer toner yield" },
        ],
        correctChoiceId: "a",
        explanation: "Patch/support lifecycle.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b3",
        prompt: "Found USB drive at a desk — hardening habit?",
        choices: [
          { id: "a", text: "Do not connect; follow removable-media / security policy" },
          { id: "b", text: "Plug into a production PC to inspect files" },
          { id: "c", text: "Disable Secure Boot so it can boot from the USB" },
        ],
        correctChoiceId: "a",
        explanation: "Removable-media policy.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b4",
        prompt: "Secure Boot / TPM on a workstation baseline primarily support:",
        choices: [
          { id: "a", text: "Firmware/boot-chain and hardware-backed security posture" },
          { id: "b", text: "Faster printer spooling only" },
          { id: "c", text: "Automatic Domain Admin rights" },
        ],
        correctChoiceId: "a",
        explanation: "Firmware hardening recognition.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b5",
        prompt: "Privacy screen + auto lock primarily mitigate:",
        choices: [
          { id: "a", text: "Shoulder surfing and unattended session access" },
          { id: "b", text: "DHCP scope exhaustion" },
          { id: "c", text: "CMOS battery failure" },
        ],
        correctChoiceId: "a",
        explanation: "Physical + session hardening.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b6",
        prompt: "A grayed-out security setting on a corporate PC often means:",
        choices: [
          { id: "a", text: "Policy/MDM enforcement — escalate for exception; don’t bypass" },
          { id: "b", text: "Proof Windows is broken; disable Secure Boot" },
          { id: "c", text: "You must remove BitLocker next" },
        ],
        correctChoiceId: "a",
        explanation: "Policy-managed boundaries.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b7",
        prompt: "Legacy browser required by one LOB app — best framing?",
        choices: [
          { id: "a", text: "Limit exposure with compensating controls; avoid using it for general browsing; plan supported alternative" },
          { id: "b", text: "Make it the default browser for all staff forever" },
          { id: "c", text: "Disable SmartScreen and AV company-wide" },
        ],
        correctChoiceId: "a",
        explanation: "Business function vs attack surface.",
        objectiveId: "AP1202-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-hardening-b8",
        prompt: "Host firewall Public profile Off on a café laptop is:",
        choices: [
          { id: "a", text: "A high-risk misconfiguration for that network profile — enable and verify" },
          { id: "b", text: "Required for DHCP to work" },
          { id: "c", text: "Equivalent to BitLocker" },
        ],
        correctChoiceId: "a",
        explanation: "Network-profile hardening.",
        objectiveId: "AP1202-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-hardening-b9",
        prompt: "Which Windows controls form a practical endpoint-hardening baseline?",
        choices: [
          { id: "a", text: "Endpoint protection, host firewall, updates, and drive encryption" },
          { id: "b", text: "A disabled firewall and shared administrator account" },
          { id: "c", text: "Printer maintenance and toner calibration" },
        ],
        correctChoiceId: "a",
        explanation: "Builds on Windows security settings.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardening-b10",
        prompt: "After applying hardening changes, verification should confirm:",
        choices: [
          { id: "a", text: "Required business function still works and protective controls remain enabled" },
          { id: "b", text: "Only that the wallpaper changed" },
          { id: "c", text: "That all security controls are disabled" },
        ],
        correctChoiceId: "a",
        explanation: "Function + security verification.",
        objectiveId: "AP1202-2.7",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-hardening-f1",
        front: "Hardening goal?",
        back: "Reduce attack surface while preserving authorized function",
      },
      {
        id: "ap-hardening-f2",
        front: "Daily account model?",
        back: "Standard user + separate controlled admin",
      },
      {
        id: "ap-hardening-f3",
        front: "Temp exclusion left forever?",
        back: "Configuration drift — remove/narrow and document",
      },
      {
        id: "ap-hardening-f4",
        front: "Encryption vs backup?",
        back: "Encryption ≠ backup; both needed",
      },
      {
        id: "ap-hardening-f5",
        front: "Friction from a control?",
        back: "May be working — approved exception, not disable",
      },
      {
        id: "ap-hardening-f6",
        front: "Before disabling a service?",
        back: "Purpose, dependency, authorization, rollback, verify",
      },
      {
        id: "ap-hardening-f7",
        front: "Travel laptop trio?",
        back: "Encrypt · MFA/lock · VPN + updates + physical protect",
      },
    ],
    assignments: [
      {
        id: "ap-lab-workstation-hardening-baseline",
        title: "Workstation hardening baseline lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional workstation profile only. Do not disable real protections, edit firmware, or make destructive changes.

Profile: WS-CLINIC-12 (Windows 11 Pro, Intune enrolled)
- Patch: OS 45 days behind; browser current; one app EoS
- Accounts: CLINIC\\sharedadmin used daily; two former-employee local accounts enabled; MFA for cloud On
- Software: unsupported chat tool; free PDF converter; required EHR client
- Startup: three unknown entries; Adobe updater; EHR
- Services: remote registry running (purpose unknown); Print Spooler needed
- Firewall: Domain/Private On; Public Off
- Network: auto-connect to open SSIDs On; RDP enabled (no ticketed business need)
- Encryption: BitLocker On; recovery key escrow Unknown
- Endpoint: real-time On; broad exclusion C:\\Temp\\* from last week; tamper On
- Browser: 4 extensions (2 unknown); password manager org-approved
- Removable media: unrestricted; personal USB used for “exports”
- Backup: OneDrive sync On; no tested restore this quarter
- Secure Boot On; TPM 2.0 present
- Logging: local Security log 1-day retention; no forwarder
- Physical: open nursing station; no cable lock; privacy screen absent
- Management: Compliant = No (Public firewall Off + local admin daily)

For each material finding, record:
1) Required function
2) Risk
3) Current state
4) Recommended hardening action
5) Approval required?
6) Possible business impact
7) Verification method
8) Rollback plan
9) Escalation owner
10) Baseline/ticket note (no secrets)

Boundaries: do not recommend disabling Defender/firewall/encryption/updates; do not grant permanent admin for convenience; do not bypass MDM.`,
        estimatedMinutes: 32,
        completionCriteria: [
          "Document at least ten findings with all ten fields",
          "Address shared admin, Public firewall Off, leftover exclusion, and RDP",
          "Include travel/physical and removable-media recommendations",
          "No control-weakening recommendations",
        ],
        relatedTopicIds: [
          "ap-hardening",
          "ap-windows-security",
          "ap-security-measures",
          "ap-malware-removal",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
