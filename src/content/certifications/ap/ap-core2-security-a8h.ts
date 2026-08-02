import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8h (Michael 2026-08-01).
 * ap-mobile-security (AP1202-2.8) only — mobile and embedded device security.
 * Stop after verify — no 2.9+ Security, SW-TS, Ops, or CCNA C1.
 * No lock/MDM/Activation Lock/root/jailbreak bypass; no unauthorized tracking.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional mobile/embedded security posture worksheets only. Do not root/jailbreak devices, bypass MDM/Activation Lock/screen locks, track people without authorization, sideload malware, or test unknown USB kiosks with work devices. All lab devices are fictional.",
};

export const apCore2SecurityBatch8Topics: Topic[] = [
  {
    id: "ap-mobile-security",
    name: "Mobile & Embedded Device Security",
    prerequisites: [
      "ap-hardening",
      "ap-wireless-security",
      "ap-mobile-domain-review",
      "ap-security-measures",
      "ap-malware",
    ],
    objectives: ["AP1202-2.8"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Secure Mobile and Embedded Devices by Ownership, Data, and Custody",
      content: `Mobile and embedded security protects **device ownership, identity, authentication, data, apps, connectivity, permissions, physical custody, management, recovery, and disposal**.

\`device and use case → ownership/management → data/access risk → controls → safe config → verify → loss/incident response → document\`

**Prior:** Core 1 Mobile (\`ap-mobile-domain-review\`) · \`ap-wireless-security\` · \`ap-hardening\` · \`ap-malware\` · \`ap-security-measures\`. **Later:** data destruction (\`ap-data-destruction\` / 2.9) — don’t substitute disposal deep-dives here beyond device wipe/reassign basics.

**Boundaries.** No lock bypass, MDM/enrollment bypass, Activation Lock bypass, rooting/jailbreaking instructions, unauthorized tracking, SIM cloning, or malicious app development.

---

## Ownership contexts

Personally owned · organization-owned · BYOD · COPE (where aligned) · shared · kiosk · dedicated-purpose · embedded · IoT · wearable · POS · smart appliance · vehicle-integrated (where applicable) · medical/assistive (awareness only).

Ownership affects: who may configure · what data may live on device · remote management permission · privacy expectations · support scope · wipe authority · app policy · evidence handling. Device-owner capability ≠ business authorization.

## MDM / UEM

Enrollment · profiles · security policies · compliance · app deploy/restrict · remote config · inventory · certificates · VPN/Wi-Fi profiles · managed accounts · work profiles/containers · remote lock · remote wipe · selective wipe · lost mode · ownership state · managed vs unmanaged.

**Boundaries:** Grayed settings may be working · don’t remove management to “fix” ordinary tickets · don’t bypass enrollment/compliance · remote wipe needs ownership/identity/approval/retention rules · personal devices may hold mixed data · selective wipe ≠ full wipe.

## Authentication & screen security

PIN / password / passphrase / pattern · biometrics (face/fingerprint) · auto lock / timeout · failed-attempt limits · wipe-after-failures where policy · MFA · security keys/passkeys (where aligned) · recovery · emergency-access awareness.

**Distinctions:** Biometrics ≠ secret passwords · short PIN may still use hardware + attempt limits · screen lock ≠ encryption · device unlock ≠ account auth · recovery must verify identity · techs never need user passwords/OTP. **No lock bypass.**

## Encryption & data

Device encryption · file-based concepts · hardware-backed keys · at rest / in transit · secure backup · cloud sync · data minimization · work profile/container · managed app data · clipboard/screenshot restrictions where managed · secure messaging where required · protect recovery materials.

**Distinctions:** Encryption ≠ authentication or backup · sync ≠ guaranteed backup · remote wipe may be offline/queued · remove app ≠ remove synced data · lock-screen notification previews can leak.

## Applications & permissions

Official stores · enterprise catalogs · permissions · sideloading / unknown sources · signing/publisher trust (intro) · counterfeit/malicious apps · updates · unsupported apps · sandboxing · managed apps · excessive permissions · background activity · accessibility abuse (where aligned) · device-admin privileges · configuration profiles · mobile browser risks.

**Practice:** verify publisher/source · match permissions to purpose · no piracy/mods · remove unused · keep updated · don’t disable platform protections to force install · escalate suspicious profiles · preserve evidence before removal when IR requires. No malicious sideload bypasses.

## Rooting / jailbreaking

Alters platform security boundaries · weakens isolation/update trust · breaks compliance · exposes data · support/warranty impact · security apps may refuse · org access may be denied. **Do not teach how.** Document · avoid org credentials · escalate · recommend supported config · follow replacement/re-enrollment policy.

## Connectivity

Wi-Fi (verify SSID; no look-alikes; no auto-join junk; approved VPN; keep protections; forget public nets — \`ap-wireless-security\`) · cellular · Bluetooth (discoverable only when needed; verify pair codes; remove unused; unexpected requests = refuse) · NFC/proximity (disable if policy; protect unlocked device; payments/access still depend on account/device security) · hotspots/tethering (strong passphrase, modern protocol, limit discoverability, off when unused, review clients, org policy — don’t bypass network controls) · USB/charging (unknown ports/cables may expose data; power-only/approved gear; no unexpected trust prompts; no unknown PCs).

No wireless/USB attack instructions.

## Privacy permissions

Location · camera · mic · contacts · photos/files · calendar · nearby/Bluetooth · notification content · tracking controls (where aligned) · background access.

Ask: needed? always/in-use/once/never? trusted app? managed device? break approved function if denied? escalate?

## Lost / stolen response

1) Confirm device + user identity  
2) Last known when/where  
3) Ownership/management state  
4) Report immediately  
5) Locate/lock/lost-mode **per policy**  
6) Revoke/suspend org access  
7) Review sessions/MFA  
8) Remote wipe per policy  
9) Protect linked accounts  
10) Document sensitivity/exposure  
11) Escalate legal/privacy/regulated concerns  
12) Replace/re-enroll approved path  

**Wipe nuance:** full vs selective · offline/queued · wipe ≠ session revoke · may affect evidence · verify authorization/ownership. No unauthorized people-tracking.

## Backup / recovery / replacement

Cloud/local encrypted backup · account restore · apps/config · authenticator/MFA recovery · eSIM/SIM transfer · recovery codes · trusted-device relationships · re-enrollment · restore only approved org data.

Failures: recovery email/phone unreachable · authenticator only on lost phone · stale backup · never enrolled · work profile not backed up · personal/work account confusion · malware/settings restore from backup. **Plan recovery before destructive actions.**

## SIM / cellular account

SIM PIN · eSIM · carrier account protection · SIM-swap / port-out risk · unexpected service loss · verify via known carrier channels.

**Warnings:** sudden no service · unexpected carrier notices · MFA SMS stops · unrequested account changes → trusted carrier contact · protect email/finance · escalate · don’t rely only on the compromised phone for recovery. No SIM-cloning/bypass.

## Embedded / IoT

Default creds · unsupported firmware · weak updates · unnecessary internet exposure · insecure companion apps · cloud dependence · weak recovery · shared access · poor logging · limited config · physical reset · privacy · long life cycles.

**Harden where supported:** change defaults · update firmware · disable unused services · restrict remote access · IoT/guest segmentation · MFA on cloud accounts · inventory · replace unsupported · protect physical management · secure end-of-life. No offensive IoT testing.

## Disposal / resale / reassignment

Backup needed data · remove org accounts · selective wipe if appropriate · approved full wipe/factory reset · remove SIM/eSIM · remove memory cards · remove from account portals · remove management · handle Activation Lock / ownership controls **lawfully** · confirm wipe/encryption completion · asset-disposal policy · document custody. **No Activation Lock/MDM/ownership bypass.**

## Wearables / health-connected (awareness)

Health/biometric data · Bluetooth pairing · companion apps · cloud accounts · shared-phone access · notification privacy · firmware · loss · account removal before resale · medical-support boundaries. No medical-device config beyond general security scope.

**What's next.** Data destruction and disposal methods (\`ap-data-destruction\` / AP1202-2.9) when authorized.`,
    },
    lightbulbMoment:
      "Mobile security is ownership-aware: manage and wipe only what you’re authorized to touch, lock and encrypt the device, distrust excess permissions and unknown networks, and plan MFA/account recovery before the phone is gone.",
    keyFacts: [
      "Ownership decides wipe authority, privacy, and management scope",
      "Don’t remove MDM to fix ordinary tickets; grayed settings may be working",
      "Selective wipe ≠ full wipe; wipe may be queued offline",
      "Screen lock ≠ encryption; biometrics ≠ secret passwords",
      "Sideloading/rooting/jailbreaking break trust and compliance",
      "Unknown USB charge/data paths and look-alike Wi-Fi are custody risks",
      "Lost device: report, lock, revoke sessions, then wipe per policy",
    ],
    guidedExample: {
      title: "Seven mobile/embedded tickets",
      steps: [
        "Lost managed company phone → verify identity/ownership; report; lock/lost-mode; revoke sessions; selective/full wipe per policy; document exposure; replace/enroll.",
        "Employee leaves with personal BYOD + work profile → selective work removal + session revoke; full wipe only with explicit authority.",
        "Flashlight app wants contacts/mic/files/accessibility → deny; verify source; remove if unauthorized; review risk.",
        "User wants to enroll rooted phone → refuse bypass; document; BYOD policy; supported device/config.",
        "Traveler at USB kiosk → approved charger/power-only; no trust prompts; no unknown PC.",
        "Smart camera still on default password → change creds; firmware; restrict remote; segment; protect cloud account; inventory.",
        "Sudden no cellular + account-change email → trusted carrier channel; protect email/finance; review MFA/sessions; escalate SIM-swap suspicion.",
      ],
    },
    commonMistakes: [
      "Treating personal and org ownership as identical",
      "Removing MDM for ordinary fixes",
      "Granting every app permission or sideloading unknowns",
      "Full-wiping a personal device without authority",
      "Assuming remote wipe already completed",
      "Ignoring authenticator/MFA recovery before wipe",
      "Leaving IoT default credentials internet-exposed",
    ],
    examTraps: [
      "Selective wipe vs full wipe by ownership",
      "Safest lost-device next step",
      "Rooted device enrollment refusal",
      "Permission vs app purpose mismatch",
      "Public USB charging caution",
      "SIM-swap indicators and trusted carrier contact",
    ],
    realWorldScenario:
      "A nurse’s managed phone with work email is left in a rideshare. You verify identity, trigger lost-mode, revoke mail sessions, confirm selective wipe of the work container per policy (not a casual full wipe of her personal photos without process), document PHI exposure risk, and start replacement enrollment — custody and data handled without bypassing ownership rules.",
    whenThisFails: [
      "If wipe authority is unclear (BYOD vs corporate), escalate before full wipe",
      "If Activation Lock / account ownership blocks transfer, use lawful owner processes — never bypass",
      "If SIM-swap or account takeover is suspected, protect email/finance first via trusted channels",
    ],
    teacherReflectionPrompt:
      "Contrast selective wipe on BYOD versus full wipe on a corporate phone after loss — ownership, data, and session revocation in three bullets each.",
    quiz: [
      {
        id: "ap-mobile-security-q1",
        prompt: "A managed company phone with work email is lost. Best immediate path?",
        choices: [
          { id: "a", text: "Verify identity/ownership, report, lock/lost-mode per policy, revoke sessions, then consider wipe per policy" },
          { id: "b", text: "Wait a week hoping it returns before any action" },
          { id: "c", text: "Post the unlock PIN in a public channel" },
          { id: "d", text: "Remove MDM from another device to ‘test’" },
        ],
        correctChoiceId: "a",
        explanation: "Lost-device workflow with authorization.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-q2",
        prompt: "An employee leaves; the phone is personally owned with a work profile. Correct wipe framing?",
        choices: [
          { id: "a", text: "Selective work-data removal and session revocation — full wipe only with explicit authority" },
          { id: "b", text: "Always factory-reset personal phones without asking" },
          { id: "c", text: "Leave work email active forever" },
          { id: "d", text: "Bypass Activation Lock for convenience" },
        ],
        correctChoiceId: "a",
        explanation: "Ownership-aware wipe.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-security-q3",
        prompt: "A flashlight app requests contacts, microphone, files, and accessibility. Best response?",
        choices: [
          { id: "a", text: "Treat permissions as mismatched to purpose — verify source and deny/remove if unauthorized" },
          { id: "b", text: "Grant all permissions because the icon looks bright" },
          { id: "c", text: "Sideload a cracked ‘premium’ version" },
          { id: "d", text: "Disable the screen lock so the app works better" },
        ],
        correctChoiceId: "a",
        explanation: "Application permission security.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-q4",
        prompt: "A user wants to enroll a rooted/jailbroken phone for org access. Correct action?",
        choices: [
          { id: "a", text: "Document risk, do not bypass compliance, follow BYOD policy, recommend a supported configuration/device" },
          { id: "b", text: "Teach bootloader unlock steps to finish enrollment" },
          { id: "c", text: "Remove the MDM check as a favor" },
          { id: "d", text: "Share the corporate VPN PSK in SMS" },
        ],
        correctChoiceId: "a",
        explanation: "Root/jailbreak risk without teaching bypass.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-q5",
        prompt: "Traveler wants to charge a work phone from an unknown USB kiosk. Best guidance?",
        choices: [
          { id: "a", text: "Use an approved charger or power-only path; avoid unexpected trust prompts and unknown computers" },
          { id: "b", text: "Always approve ‘Trust this computer’ for speed" },
          { id: "c", text: "Disable encryption before charging" },
          { id: "d", text: "Connect and install any offered drivers" },
        ],
        correctChoiceId: "a",
        explanation: "USB/charging custody risk.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-security-q6",
        prompt: "A SOHO camera is online with the vendor default password. Best first hardening?",
        choices: [
          { id: "a", text: "Change default credentials, update firmware, restrict remote access, segment/isolate, protect the cloud account" },
          { id: "b", text: "Expose admin to the open Internet for easier setup" },
          { id: "c", text: "Leave defaults and hide the SSID only" },
          { id: "d", text: "Root the camera and disable logging" },
        ],
        correctChoiceId: "a",
        explanation: "Embedded/IoT hardening.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-mobile-security-b1",
        prompt: "Selective wipe typically aims to:",
        choices: [
          { id: "a", text: "Remove managed/organizational data while leaving personal data when ownership requires it" },
          { id: "b", text: "Always destroy the entire personal photo library by default" },
          { id: "c", text: "Disable cellular towers" },
        ],
        correctChoiceId: "a",
        explanation: "Full vs selective wipe.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b2",
        prompt: "A remote wipe was issued but the phone is offline:",
        choices: [
          { id: "a", text: "The command may queue and run later — still revoke sessions/accounts now" },
          { id: "b", text: "Wipe already completed the moment you clicked" },
          { id: "c", text: "Offline devices cannot be a risk" },
        ],
        correctChoiceId: "a",
        explanation: "Wipe nuance.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-security-b3",
        prompt: "Screen lock versus encryption:",
        choices: [
          { id: "a", text: "Lock controls access; encryption protects data at rest — both matter" },
          { id: "b", text: "They are identical always" },
          { id: "c", text: "Encryption replaces MFA forever" },
        ],
        correctChoiceId: "a",
        explanation: "Core distinctions.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b4",
        prompt: "Mobile hotspot security should include:",
        choices: [
          { id: "a", text: "Strong passphrase, modern protocol, disable when unused, review connected devices" },
          { id: "b", text: "Open authentication for convenience" },
          { id: "c", text: "WEP with the SSID as the password" },
        ],
        correctChoiceId: "a",
        explanation: "Hotspot/tethering.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b5",
        prompt: "SIM-swap warning pattern:",
        choices: [
          { id: "a", text: "Sudden loss of service plus unexpected account-change notices — contact carrier via trusted channel" },
          { id: "b", text: "Battery at 40%" },
          { id: "c", text: "Bluetooth off" },
        ],
        correctChoiceId: "a",
        explanation: "Cellular-account security.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-security-b6",
        prompt: "Before factory reset of a phone used for MFA:",
        choices: [
          { id: "a", text: "Plan authenticator/recovery access on a known-good path — don’t strand account recovery" },
          { id: "b", text: "Reset immediately with no recovery plan" },
          { id: "c", text: "Share recovery codes in the public ticket" },
        ],
        correctChoiceId: "a",
        explanation: "Backup/recovery planning.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-security-b7",
        prompt: "Removing an MDM profile to fix a grayed setting is usually:",
        choices: [
          { id: "a", text: "Inappropriate — escalate policy/management owners" },
          { id: "b", text: "Required CompTIA first step" },
          { id: "c", text: "How BitLocker works" },
        ],
        correctChoiceId: "a",
        explanation: "Management boundary.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b8",
        prompt: "Bluetooth discoverable mode should be:",
        choices: [
          { id: "a", text: "Enabled only when needed; verify pairing; remove unused devices" },
          { id: "b", text: "Always on for all travelers" },
          { id: "c", text: "Used instead of screen locks" },
        ],
        correctChoiceId: "a",
        explanation: "Bluetooth hygiene.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b9",
        prompt: "Which mobile-connectivity knowledge is most relevant when investigating suspicious device behavior?",
        choices: [
          { id: "a", text: "Wi-Fi, Bluetooth, cellular, account synchronization, and application permissions" },
          { id: "b", text: "Enterprise routing redesign" },
          { id: "c", text: "Printer fuser maintenance" },
        ],
        correctChoiceId: "a",
        explanation: "Builds on Mobile Devices without redoing the domain.",
        objectiveId: "AP1202-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-security-b10",
        prompt: "Resale of a phone still enrolled in org MDM:",
        choices: [
          { id: "a", text: "Remove accounts/management and complete approved wipe/custody steps before transfer — no ownership bypass" },
          { id: "b", text: "Sell it enrolled so the buyer gets company email" },
          { id: "c", text: "Just remove the SIM and ship" },
        ],
        correctChoiceId: "a",
        explanation: "Disposal/reassignment.",
        objectiveId: "AP1202-2.8",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-mobile-security-f1",
        front: "BYOD leave wipe?",
        back: "Usually selective work wipe + revoke — not casual full wipe",
      },
      {
        id: "ap-mobile-security-f2",
        front: "Lost managed phone first moves?",
        back: "Report · lock/lost-mode · revoke sessions · wipe per policy",
      },
      {
        id: "ap-mobile-security-f3",
        front: "Rooted device + org access?",
        back: "Compliance risk — don’t bypass enrollment",
      },
      {
        id: "ap-mobile-security-f4",
        front: "USB kiosk charge?",
        back: "Approved/power-only — no trust prompts",
      },
      {
        id: "ap-mobile-security-f5",
        front: "IoT default password?",
        back: "Change · update · segment · restrict remote",
      },
      {
        id: "ap-mobile-security-f6",
        front: "Wipe offline?",
        back: "May queue later — still revoke accounts now",
      },
      {
        id: "ap-mobile-security-f7",
        front: "Remove MDM for gray setting?",
        back: "No — escalate management/policy",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-embedded-posture",
        title: "Mobile and embedded security posture lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional devices only. No rooting, jailbreaking, MDM/lock/Activation Lock bypass, unauthorized tracking, or malicious apps.

For each profile record:
1) Primary assets
2) Current risks
3) Required controls
4) Ownership/authorization constraints
5) Immediate safe correction
6) Management/policy dependency
7) Lost-device response
8) Recovery requirement
9) Verification
10) Ticket/inventory note (no secrets)

Profiles:
A) CORP-PHONE-14 — org-owned, Intune enrolled, work email, BitLocker N/A (platform encrypt On), PIN On, Find My/lost-mode available, last seen café, user reports lost 20 min ago
B) BYOD-ALEX — personal phone, work profile, MFA authenticator only on this device, employee resigning tomorrow
C) KIOSK-TAB — shared clinic tablet, auto-login local account, no screen timeout, guest Wi-Fi auto-join On
D) AUTH-PHONE — personal phone used as only authenticator for corp SSO; backup codes never printed; phone cracked screen / may be stolen
E) CAM-SOHO — internet camera, default admin/admin, firmware 2 years old, UPnP On, on main LAN
F) WATCH-1 — wearable paired to BYOD-ALEX, health sync to personal cloud, work calendar notifications On lock screen
G) POS-TAB — store tablet, MDM, card app, Bluetooth discoverable On, unknown sideloaded “menu helper” APK
H) IOT-SENSOR — unsupported temp sensor, no updates, cloud account shared password on sticky note

Boundaries: thank users; no bypass instructions; distinguish selective vs full wipe by ownership; plan MFA recovery before destructive resets.`,
        estimatedMinutes: 32,
        completionCriteria: [
          "Complete all ten fields for profiles A–H",
          "Correct ownership-aware wipe on A vs B",
          "IoT default-credential hardening on E/H",
          "MFA recovery planning on D",
          "No bypass or tracking recommendations",
        ],
        relatedTopicIds: [
          "ap-mobile-security",
          "ap-wireless-security",
          "ap-hardening",
          "ap-mobile-domain-review",
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
