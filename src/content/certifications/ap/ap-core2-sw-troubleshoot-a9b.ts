import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Software Troubleshooting — A9b (Michael 2026-08-01).
 * ap-ts-mobile-os (AP1202-3.2) only — mobile OS and application troubleshooting.
 * Stop after verify — no 3.3+ SW-TS, Ops, Core 2 integration, or CCNA C1.
 * Fictional Mobile Troubleshooting Desk only — no lock/MDM/activation bypass, rooting, jailbreak, unsafe battery work, or destructive reset required.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional Mobile Troubleshooting Desk worksheets only. Do not bypass locks, Activation Lock, MDM, or ownership controls. Do not root/jailbreak. Do not factory-reset a real device for this lab. Do not puncture, compress, bend, or continue charging a damaged/swollen battery. Do not collect passwords or MFA codes.",
};

const TS_PROCESS = `**Troubleshooting process (every ticket).**
1. **Identify** the problem — symptoms, scope, device/account/management context, safety/data risk.
2. **Establish a theory** of probable cause — name the likely layer; pick a testable one.
3. **Test the theory** safely — one change at a time; preserve evidence when needed.
4. **Plan** the fix (or escalate) — backup, MFA recovery, ownership, downtime, approval.
5. **Implement** the solution or escalate within authorization.
6. **Verify** full functionality — app function, sync, notifications, network, security, management.
7. **Document** findings, actions, and outcomes (no passwords, MFA codes, recovery keys, or private messages).`;

export const apCore2SwTroubleshootBatch2Topics: Topic[] = [
  {
    id: "ap-ts-mobile-os",
    name: "Troubleshoot Mobile OS & Application Issues",
    prerequisites: [
      "ap-ts-windows-os",
      "ap-mobile-security",
      "ap-mobile-domain-review",
      "ap-mobile-connectivity",
      "ap-cloud-productivity",
      "ap-app-install",
      "ap-wireless-security",
      "ap-ts-mobile",
    ],
    objectives: ["AP1202-3.2"],
    knowledgeNodeId: "authentication",
    lesson: {
      title: "Diagnose Mobile Failures by Layer Before You Factory Reset",
      content: `Mobile OS and application troubleshooting:

\`identify symptom and scope → establish device, account, and management context → protect user data → gather evidence → isolate OS, app, account, network, permission, storage, or hardware layer → apply the least disruptive supported fix → verify → document and escalate\`

**Symptom and context → evidence → failing layer → narrow safe correction → verification** — not restart → reinstall → factory reset.

${TS_PROCESS}

**Prior:** Core 1 Mobile (\`ap-mobile-domain-review\` / connectivity) · \`ap-mobile-security\` · \`ap-cloud-productivity\` · \`ap-app-install\` · \`ap-wireless-security\` · \`ap-ts-windows-os\` · Core 1 mobile hardware TS. **Later:** mobile OS/app **security** troubleshooting (\`ap-ts-mobile-security\` / 3.3) — do not substitute that deep security-incident path here beyond escalation boundaries.

**Layers:** OS · application · account/sync · permission · connectivity · storage · battery/thermal · hardware · management policy · malware/account-compromise concern.

**Protect data and account access first.** Before reset/removal/destructive recovery: backup · cloud sync · local-only files · photos/messages/app data · authenticator/MFA · account recovery · eSIM/SIM · encryption · work profile/MDM · ownership · unsaved work · licenses · compromise/evidence. **No factory reset before recovery and ownership risks are evaluated.** No lock/activation/ownership/MDM/root/jailbreak bypass.

---

## Symptom categories

**Applications:** won’t launch · crash/freeze/slow · closes · missing · cannot update · incompatible · repeated sign-in · cannot access camera/mic/contacts/files/location/BT/notifications · excessive storage/battery/data/CPU/memory · works in browser not client · one account works · data/settings missing · notifications fail · blocked by management.

**OS:** freeze/restart · boot loop · black/blank screen · slow · storage full · update fail/stuck · overheat · battery drain · touch/input wrong · UI unresponsive · unlock method fails · wrong date/time · settings managed · unstable after update · activation/enrollment fails. **No unlock/activation/management bypass.**

**Account/sync:** wrong account · cloud not syncing · contacts/calendars missing · email OK in browser not app · auth loops · MFA unavailable · authenticator on replaced device · locked account · license unavailable · personal vs work confusion · work profile not syncing · read-only shared data · stale data · changes don’t appear elsewhere. Connect \`ap-cloud-productivity\` — don’t fully reteach it.

**Connectivity:** Wi-Fi no Internet · mobile data down · app Wi-Fi-only or cellular-only · BT pair fail · paired but wrong function · NFC/payment fail · VPN unexpected · hotspot fail · enterprise Wi-Fi fail · captive portal missing · one app offline while others work. Deeper network → Networking/wireless topics.

**Storage:** full · cache large · media/downloads · cloud cache · update can’t install · missing photos/files · card unavailable · can’t save · inconsistent reports · deleted files reappear via sync. Distinguish cache · app data · local files · sync · backup.

**Battery/thermal:** rapid drain · overheat · app dominates battery · background activity · weak signal · screen use · degraded health · slow/no charge · thermal throttle · swelling/damage.

**Safety:** swelling, smoke, odor, extreme heat, physical damage → stop use, escalate battery-safety procedures. **Never** puncture, compress, bend, or keep charging a damaged battery.

---

## Evidence & scope

Inspect: exact error · repro · OS/app version · model · free storage · battery/data use · permissions · notifications · account/sync · network type · BT state · VPN/proxy · updates · store status · crash/analytics where available · management/work-profile indicators · diagnostics · vendor/org status · compare browser / other account / other network.

**Principles:** one symptom → many causes · restart clearing ≠ root cause · reinstall ≠ fix account/policy/outage · full bars ≠ Internet/app access · high battery may be expected · missing notifications = app/OS/focus/battery-opt/account/network layers.

**Scope questions:** one app or all? one account or all? personal vs work profile? Wi-Fi/cellular/both? one BT accessory or all? one device or many? local vs cloud? after update? personal vs managed? app vs OS permission? device vs service outage?

---

## Application workflow (least disruptive)

1. Supported OS/app version · 2. Account/license · 3. Network · 4. Permissions · 5. Storage · 6. Force-close/reopen · 7. Restart if justified · 8. App/OS updates · 9. Review cache · 10. Sign out/in only after recovery implications known · 11. Clear cache where supported · 12. Clear app data only after impact understood · 13. Reinstall after backup/account/config impact understood · 14. Escalate service/policy/account. Cache clear / reinstall are **not** universal fixes.

**Permissions:** camera · mic · location · contacts · photos/files · BT/nearby · notifications · background · cellular data · local network · accessibility · device admin/management where relevant. Ask: needed? granted at app? OS restriction? managed? privacy control working correctly? correct hardware input selected? Don’t grant excessive permissions.

**Notifications layers:** permission · categories · Focus/DND · battery optimization · background data · sign-in · network · sync · volume/haptics · BT/wearable routing · OS update · service outage · managed policy. Don’t disable all battery/privacy protections first.

| Store | Framing |
|-------|---------|
| **Cache** | Temporary; often recreated; may fix stale/corrupt; may re-download |
| **App data** | Account/settings/downloads/local/tokens — may be lost when cleared |
| **Reinstall** | May remove local data; cloud may remain; sync may restore bad config; needs account/recovery |

Warn before destructive app actions.

---

## OS updates, boot, battery, networks

**Updates:** compatible device · free storage · battery/power · stable network · backup · management policy · date/time · restart · supported retry · escalate persistent/widespread · no unofficial firmware. Aftermath may be: app compatibility · permissions reset · background optimization · firmware integration · storage · pending app updates · policy · vendor-known issue · rollback limitations (don’t promise rollback).

**Boot loop / startup:** failed update · full storage · corrupt app/system · hardware · battery/power · unsupported modification · root/jailbreak state · enrollment failure. Supported: vendor forced restart · known-good charge · recovery mode · Safe Mode where supported · vendor diagnostics · backup/restore · factory reset **late** · escalate/repair. **No bootloader/activation/lock bypass.**

**Charging isolation:** charger · cable · port · power source · wireless alignment · debris/damage · battery health · background apps · weak signal · screen · thermal · OS/firmware · HW failure. Use known-good gear; inspect without unsafe probing; stop if swollen/damaged; cool overheated devices safely; review battery use; update; escalate physical damage. No unsafe battery repair.

**Wi-Fi:** correct SSID · auth · profile · captive portal · IP/DNS · trust · forget/reconnect only after credential impact understood · enterprise cert · outage. **Cellular:** airplane · mobile data · signal · plan · roaming · SIM/eSIM · carrier · APN where carrier-approved · app cellular permission · data saver. **VPN:** account · network · profile · cert · MFA · org policy · access expectations · outage. Don’t bypass org VPN policy. Deeper TS → networking topics.

**Bluetooth:** power · discoverable · pairing mode · existing pair record · profile/service · app permission · OS compat · firmware · range/interference · wrong host · media/call routing · multi-device limits. Paired ≠ expected function if wrong profile, missing permission, routing differs, outdated firmware, connected elsewhere, or limited platform support. Don’t reteach all of Mobile Devices.

---

## MFA, managed devices, security, factory reset

**Authenticator/MFA recovery:** authenticator only on old device · replaced/reset phone · auth loops · work profile removed · lost device · number change · SIM-swap suspicion · recovery unavailable. Verify identity · approved recovery · **don’t ask for passwords/OTP** · protect recovery codes · revoke old sessions when authorized · re-enroll MFA · escalate compromise. No bypass.

**Managed boundaries:** MDM/UEM · work profile · compliance · required VPN/app · blocked app · disabled setting · remote config · cert profile · account restriction. Unchangeable setting may be by design — **don’t remove management** for ordinary tickets.

**Security escalate** (connect Security / later 3.3): malicious app · unknown management profile · root/jailbreak on managed device · account takeover · SIM swap · repeated unexpected MFA · sensitive exposure · multi-device · tracking/surveillance concern · security controls disabled. Don’t factory-reset before evidence/policy considered.

**Factory reset (late, high impact).** Before: ownership · authorization · backup · credentials · MFA recovery · activation-lock/FRP · eSIM/SIM · work profile/MDM · local-only data · authenticator · encryption · app restore · disposal/transfer intent. After: update OS · restore trusted source · re-enroll · restore accounts securely · verify apps/security · avoid restoring suspected malicious config. **No Activation Lock / ownership bypass.**

## Verification & documentation

Verify: original symptom · app opens **and** required function · correct account · data present · sync · notifications if needed · permissions appropriately limited · Wi-Fi/cellular/VPN/BT · battery/thermal normal · security on · management intact · no unwanted profile/app/account · user follow-up. Launch alone ≠ success if sync/notify/hardware still fail.

Document: model · OS · app version · ownership/management · symptom · exact error · scope · recent changes · account · permissions · network · storage/battery · actions · data-impact warning · backup/recovery · security concern · verification · escalation · follow-up — no passwords/MFA/recovery keys/private messages/unnecessary PII.

**Lab boundary.** Fictional packets only. No real credentials, lock bypass, MDM removal, rooting/jailbreaking, tracking, required destructive reset, or unsafe battery work.

**What's next.** Mobile OS and application **security** troubleshooting (\`ap-ts-mobile-security\` / AP1202-3.3) when authorized.`,
    },
    lightbulbMoment:
      "Mobile repair is layer selection under ownership and recovery: prove app versus account versus permission versus network before you clear data or factory-reset, and never trade MFA or management for a faster close.",
    keyFacts: [
      "Identify → theory → test → plan → implement/escalate → verify → document",
      "Protect backup, MFA/authenticator, and ownership before factory reset",
      "Scope: one app/account/network/profile before broad changes",
      "Cache ≠ app data; clear data and reinstall have real impact",
      "Paired Bluetooth ≠ correct function (profile, permission, routing)",
      "Managed unavailable settings may be by design — don’t remove MDM",
      "Swollen/damaged battery → stop use and escalate; never puncture or keep charging",
    ],
    guidedExample: {
      title: "Eight mobile OS/app tickets",
      steps: [
        "App crashes after OS update → versions; other apps OK?; permissions/storage; update app; preserve account; no immediate factory reset; escalate known compatibility.",
        "Meeting app no mic → app permission → OS privacy → selected input → BT routing → managed policy → app update; narrowest fix.",
        "Email OK in browser, not app → app account/license/cache/token/MFA/network/update/managed profile — not automatic server outage.",
        "Storage full blocking updates → identify consumers; distinguish cache/downloads/photos/synced; protect data; remove appropriate content; verify cloud; retry.",
        "Battery drains overnight → usage, background, weak signal, location, BT, update, health; malware only with evidence.",
        "BT accessory paired but silent → profile, routing, other host, app permission, firmware, platform support.",
        "Lost phone with authenticator → report; revoke sessions; approved MFA recovery; remote lock/wipe per policy; don’t rely on lost device.",
        "Managed setting unavailable → identify policy ownership; don’t remove management.",
      ],
    },
    commonMistakes: [
      "Factory-resetting too early",
      "Reinstalling before checking account, permissions, and network",
      "Clearing application data without warning",
      "Confusing cache with user data; deleting synced content blindly",
      "Removing management profiles",
      "Granting excessive permissions or disabling all battery/privacy protections",
      "Assuming pairing equals correct Bluetooth function",
      "Treating full signal as proof of service access",
      "Changing passwords from a suspected compromised device",
      "Ignoring authenticator recovery",
      "Continuing to charge a swollen or damaged battery",
      "Assuming every battery problem is malware",
      "Failing to verify notifications, sync, and account state after repair",
    ],
    examTraps: [
      "Best first action with data/MFA risk in mind",
      "Most likely failing layer (app vs account vs permission vs network)",
      "Safest test / least disruptive correction",
      "Cache vs app-data impact",
      "Managed-policy boundary",
      "Battery safety escalation",
      "Verification beyond ‘app opens’",
    ],
    realWorldScenario:
      "A managed phone’s meeting app has no microphone after an OS update. Browser web meetings work. You confirm the app is missing Microphone permission (reset after update), OS privacy still allows the browser, Bluetooth headset is connected for media not calls, and Intune does not block mic. You grant mic to the meeting app only, confirm the headset call route, join a test meeting, and leave battery optimization unchanged — no MDM removal, no factory reset.",
    whenThisFails: [
      "If Activation Lock/FRP/ownership blocks reset or setup, escalate — don’t bypass",
      "If battery is swollen or smoking, stop use and escalate physical safety — don’t keep charging",
      "If authenticator is only on a lost device, use approved MFA recovery and revoke sessions — don’t invent bypasses",
    ],
    teacherReflectionPrompt:
      "For mic-blocked meeting app vs email browser-OK/app-fail vs overnight battery drain: name the layer, one unsafe shortcut to refuse, and the verification that proves the fix.",
    quiz: [
      {
        id: "ap-ts-mobile-os-q1",
        prompt: "One app crashes after an OS update; other apps work. Best first framing?",
        choices: [
          { id: "a", text: "Confirm versions, permissions, and storage; update the app; preserve account context — avoid immediate factory reset" },
          { id: "b", text: "Factory-reset before checking the app version" },
          { id: "c", text: "Remove the MDM profile to make the app stable" },
          { id: "d", text: "Root the phone to fix compatibility" },
        ],
        correctChoiceId: "a",
        explanation: "App vs OS scope after update.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-q2",
        prompt: "A legitimate meeting site/app cannot use the microphone. Narrowest order?",
        choices: [
          { id: "a", text: "App permission → OS privacy → selected input/BT routing → managed policy → update; apply the smallest safe change" },
          { id: "b", text: "Grant every permission to every app" },
          { id: "c", text: "Disable all battery and privacy controls globally" },
          { id: "d", text: "Factory-reset without checking permissions" },
        ],
        correctChoiceId: "a",
        explanation: "Permission layering.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-os-q3",
        prompt: "Corporate email works in the browser but not in the mobile app. Best framing?",
        choices: [
          { id: "a", text: "Investigate app account, license, cache/token, MFA, network, update, and managed profile — not an automatic server outage" },
          { id: "b", text: "Declare the mail servers down with no other evidence" },
          { id: "c", text: "Bypass MFA permanently" },
          { id: "d", text: "Remove Activation Lock" },
        ],
        correctChoiceId: "a",
        explanation: "Browser vs mobile client isolation.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-os-q4",
        prompt: "OS and app updates fail; storage is full. Best reasoning?",
        choices: [
          { id: "a", text: "Identify storage consumers; distinguish cache, downloads, photos, and synced files; protect user data; free appropriate space; verify cloud state; retry" },
          { id: "b", text: "Delete everything including unsynced local-only photos without checking" },
          { id: "c", text: "Keep charging a swollen battery while updating" },
          { id: "d", text: "Install unofficial firmware to skip storage checks" },
        ],
        correctChoiceId: "a",
        explanation: "Storage vs update failures.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-q5",
        prompt: "A Bluetooth headset is paired but the user hears no call audio. Best distinction?",
        choices: [
          { id: "a", text: "Paired ≠ correct function — check profile/routing, other host connection, app permissions, firmware, and platform support" },
          { id: "b", text: "Pairing always guarantees every function works" },
          { id: "c", text: "Factory-reset is the only Bluetooth fix" },
          { id: "d", text: "Disable cellular forever" },
        ],
        correctChoiceId: "a",
        explanation: "Bluetooth function vs pairing.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-q6",
        prompt: "A user’s phone with their only authenticator was lost. Safest framing?",
        choices: [
          { id: "a", text: "Report loss; revoke sessions; use approved MFA recovery; remote lock/wipe per policy; re-enroll MFA securely — no bypass" },
          { id: "b", text: "Ask the user to text you their passwords and OTP codes" },
          { id: "c", text: "Ignore account risk until the phone is found" },
          { id: "d", text: "Remove company MFA permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Authenticator recovery boundaries.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-mobile-os-b1",
        prompt: "Clearing application cache versus application data:",
        choices: [
          { id: "a", text: "Cache is usually temporary/recreatable; clearing app data may remove settings, tokens, and local-only content" },
          { id: "b", text: "They are identical and always safe" },
          { id: "c", text: "Clearing data never affects sign-in" },
        ],
        correctChoiceId: "a",
        explanation: "Cache vs data impact.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b2",
        prompt: "A managed phone cannot enable a feature the user wants. Best framing?",
        choices: [
          { id: "a", text: "Identify policy ownership — managed settings may be by design; do not remove MDM for an ordinary symptom" },
          { id: "b", text: "Delete the work profile immediately" },
          { id: "c", text: "Jailbreak to unlock the setting" },
        ],
        correctChoiceId: "a",
        explanation: "Managed-device boundary.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b3",
        prompt: "Battery is swollen and the device is hot. Immediate action?",
        choices: [
          { id: "a", text: "Stop use, do not keep charging, escalate battery-safety/hardware procedures — never puncture or compress" },
          { id: "b", text: "Continue fast-charging overnight" },
          { id: "c", text: "Bend the battery flat" },
        ],
        correctChoiceId: "a",
        explanation: "Battery safety.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b4",
        prompt: "Notifications missing for one app. Possible layers include:",
        choices: [
          { id: "a", text: "Permission, categories, Focus/DND, battery optimization, background data, account/sync, network, wearable routing, policy, or service outage" },
          { id: "b", text: "Only a factory reset" },
          { id: "c", text: "Only malware in every case" },
        ],
        correctChoiceId: "a",
        explanation: "Notification layers.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-os-b5",
        prompt: "Wi-Fi shows connected but an app has no Internet while the browser works. Best next framing?",
        choices: [
          { id: "a", text: "App-specific network permission, VPN/proxy, captive portal completion, or app/service issue — not automatic ‘dead Wi-Fi’" },
          { id: "b", text: "Replace the phone radio immediately" },
          { id: "c", text: "Disable all security controls" },
        ],
        correctChoiceId: "a",
        explanation: "Connectivity scope.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-os-b6",
        prompt: "Factory reset should be treated as:",
        choices: [
          { id: "a", text: "A late, high-impact action after ownership, backup, MFA recovery, activation-lock, eSIM, and management implications are reviewed" },
          { id: "b", text: "The first step for every app crash" },
          { id: "c", text: "A way to bypass Activation Lock without authorization" },
        ],
        correctChoiceId: "a",
        explanation: "Factory-reset impact.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b7",
        prompt: "Overnight battery drain with one app high in battery usage. Best first path?",
        choices: [
          { id: "a", text: "Review battery usage, background activity, signal, location/BT, updates, and health — escalate malware only with supporting evidence" },
          { id: "b", text: "Assume malware and wipe without evidence" },
          { id: "c", text: "Puncture the battery to ‘vent heat’" },
        ],
        correctChoiceId: "a",
        explanation: "Battery troubleshooting discipline.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b8",
        prompt: "After fixing an app crash, verification should include:",
        choices: [
          { id: "a", text: "Required function works — not only launch — plus account, sync, notifications if needed, and security/management still intact" },
          { id: "b", text: "Only that the icon appeared" },
          { id: "c", text: "Leaving the device unmanaged" },
        ],
        correctChoiceId: "a",
        explanation: "Full verification.",
        objectiveId: "AP1202-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-os-b9",
        prompt: "Suspected SIM-swap with unexpected MFA prompts. Boundary?",
        choices: [
          { id: "a", text: "Escalate account-compromise response — verify identity via approved channels; don’t change passwords from a suspected compromised device casually" },
          { id: "b", text: "Ignore it as normal battery drain" },
          { id: "c", text: "Remove all MFA forever" },
        ],
        correctChoiceId: "a",
        explanation: "Security escalation during mobile TS.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-os-b10",
        prompt: "Reinstalling a mobile app alone may fail to fix the issue when:",
        choices: [
          { id: "a", text: "The root cause is account, license, policy, service outage, or network — reinstall doesn’t fix those" },
          { id: "b", text: "Reinstall always fixes every OS boot loop" },
          { id: "c", text: "Reinstall always restores Activation Lock bypass" },
        ],
        correctChoiceId: "a",
        explanation: "Reinstall limits.",
        objectiveId: "AP1202-3.2",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-mobile-os-f1",
        front: "Before factory reset?",
        back: "Ownership, backup, MFA recovery, activation-lock, eSIM, MDM",
      },
      {
        id: "ap-ts-mobile-os-f2",
        front: "Cache vs app data?",
        back: "Cache often recreatable; data may hold settings/tokens/local files",
      },
      {
        id: "ap-ts-mobile-os-f3",
        front: "Paired BT = working?",
        back: "No — check profile, routing, permissions, host",
      },
      {
        id: "ap-ts-mobile-os-f4",
        front: "Managed setting locked?",
        back: "May be by design — don’t remove MDM",
      },
      {
        id: "ap-ts-mobile-os-f5",
        front: "Swollen battery?",
        back: "Stop use; don’t charge; escalate — never puncture",
      },
      {
        id: "ap-ts-mobile-os-f6",
        front: "Browser OK, app fails?",
        back: "App account/token/cache/policy — not auto server outage",
      },
      {
        id: "ap-ts-mobile-os-f7",
        front: "Lost phone + authenticator?",
        back: "Revoke sessions; approved MFA recovery; lock/wipe per policy",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-ts-desk",
        title: "Mobile Troubleshooting Desk",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional inert packets only. No real credentials, lock/Activation Lock/MDM bypass, rooting/jailbreaking, tracking, required destructive reset, or unsafe battery work.

For each incident record:
1) Scope
2) Most likely failing layer
3) Data or account protection step
4) Best evidence
5) Safe test
6) Least disruptive corrective action
7) Policy or ownership boundary
8) Escalation condition
9) Verification
10) Ticket note

Packets:

A) App crash after OS update — MeetNow 5.2 on iOS 18.x; other apps OK; Mic permission Allowed; 2 GB free; Intune enrolled; crash on launch only.

B) Meeting mic missing — Android 14; MeetNow; App mic Denied after update; OS privacy mic Allowed; BT headset connected for media; policy does not block mic.

C) Email browser OK / app fail — Outlook mobile shows “Need password”; OWA works; work profile present; token age 90 days; Wi-Fi OK.

D) Storage full — 0.4 GB free; updates fail; Photos = 48 GB (sync On); app caches 6 GB; local-only Camera folder 3 GB unsynced.

E) Overnight drain — Battery: Maps 38% background; weak LTE overnight; Location Always; no malware alerts; battery health 86%.

F) BT paired, no call audio — headset paired; media plays; Phone app uses earpiece; headset also listed on user’s laptop as Connected.

G) Lost phone + authenticator — corp iPhone lost; Authenticator was only MFA factor; Find My last seen 2h ago; user at help desk with ID.

H) Managed setting unavailable — user cannot disable VPN; setting grayed “Managed by Contoso”; compliance requires VPN for email.

I) Safety pivot — phone hot; case bulging at battery edge; user wants to keep charging to finish a download.

Boundaries: least disruptive first; escalate I as physical safety; refuse MDM/lock bypass; factory reset only as late documented option with ownership/backup/MFA checks; no real resets.`,
        estimatedMinutes: 40,
        completionCriteria: [
          "Complete all ten fields for packets A–I",
          "Correctly separate app, permission, account, storage, BT, policy, and safety layers",
          "Include data/MFA protection before destructive actions",
          "Escalate swollen-battery and lost-authenticator cases appropriately",
          "Refuse lock/MDM/root bypass and unsafe battery handling",
        ],
        relatedTopicIds: [
          "ap-ts-mobile-os",
          "ap-mobile-security",
          "ap-mobile-connectivity",
          "ap-cloud-productivity",
          "ap-wireless-security",
          "ap-ts-mobile",
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
