import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8k (Michael 2026-08-01).
 * ap-browser-security (AP1202-2.11) only — browser security settings and related features.
 * Stop after verify — no Security domain review, SW-TS, Ops, or CCNA C1.
 * Fictional browser incident worksheets only — no live phishing, malware, or credential collection.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional browser-security worksheets only. Do not open live phishing sites, install suspicious extensions, download malware samples, collect passwords, bypass certificate warnings as routine support, or remove organization-managed browser policies.",
};

export const apCore2SecurityBatch11Topics: Topic[] = [
  {
    id: "ap-browser-security",
    name: "Browser Security Settings & Features",
    prerequisites: [
      "ap-soho-security",
      "ap-windows-security",
      "ap-social-engineering",
      "ap-malware",
      "ap-hardening",
      "ap-cloud-productivity",
      "ap-app-install",
    ],
    objectives: ["AP1202-2.11"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Secure the Browser Without Disabling Protections to Make a Site Work",
      content: `Browser security protects across layers:

\`browser/profile → websites & connections → downloads & extensions → permissions & stored data → identity & sessions → privacy & org policy → evidence-based troubleshooting → verify & document\`

**User need or warning → identify browser layer → inspect evidence → narrow safe action → verify security and function** — not a settings cheat sheet.

**Prior:** \`ap-windows-security\` · \`ap-social-engineering\` · \`ap-malware\` · \`ap-hardening\` · \`ap-cloud-productivity\` · \`ap-app-install\` · \`ap-soho-security\`. **Later:** Security domain review (when authorized) — then Software Troubleshooting. Do not substitute those here.

**Lab boundary.** Fictional inert packets only. No live phishing URLs, malicious extensions, malware samples, or credential harvesting.

---

## Browser security model

Distinguish: browser app · profile · website · network · DNS · certificate · auth session · stored data · extension · download · OS controls · org-managed policy.

A site failing ≠ browser broken. HTTPS ≠ site trustworthy. Familiar profile ≠ correct account signed in.

## Updates & support lifecycle

Keep browsers updated · supported versions · understand auto-update · relaunch when required · remove unsupported browsers · confirm extension compatibility · recognize managed update channels · verify version/status · embedded web views/engines may also need updates.

**Reasoning layers:** pending browser update · outdated OS component · managed policy · unsupported legacy browser · app requiring old browser · extension incompatibility · site dropped support. Never advise permanently disabling updates.

## HTTPS, certificates, domain verification

HTTP vs HTTPS · encryption in transit · trust · name matching · validity dates · chain at A+ depth · browser warnings · mixed content (where aligned) · wrong system time · captive portals · org inspection/managed certs (intro).

**Distinctions:** HTTPS protects the connection, not honesty · lock icon ≠ full business identity · don’t auto-bypass warnings · wrong date/time can fake failures · familiar logo ≠ correct domain.

**Safe warning response:** stop credentials → verify exact domain → check date/time → confirm network/captive portal → management context → known trusted route → escalate unexpected cert changes → avoid casual permanent exceptions. Bypass is not routine support.

**Domain verification** (link \`ap-social-engineering\`): exact domain · subdomain vs registered domain (intro) · look-alikes · misspellings · homograph awareness · shortened links · redirects · search ads · QR destinations · displayed text vs real URL · bookmarks/known portals · out-of-band navigation. Search results and sponsored links are not inherently trusted. No live malicious links in materials.

## Permissions

Location · camera · mic · notifications · pop-ups/redirects · clipboard · downloads · automatic file handling · background sync · MIDI/device where relevant · USB · Bluetooth · serial · sensors · local network where applicable.

Ask: trusted site? permission matches purpose? once / while-in-use / persistent? personal vs managed? sensitive exposure? safer alternative? how to revoke later? Don’t grant everything to dismiss a prompt.

## Notifications & pop-up abuse

Fake virus alerts · scareware · redirect loops · pop-unders · deceptive download buttons · browser-locking pages · notification spam. Legitimate endpoint protection rarely needs a random webpage’s phone number (\`ap-malware\` · \`ap-social-engineering\`).

**Safe response:** don’t call · don’t download the “cleaner” · close tab/browser safely · review notification permissions · clear relevant site data · scan if interaction occurred · review apps/extensions · escalate if credentials/payment disclosed.

## Cookies, cache, site data, history

| Store | Framing |
|-------|---------|
| **Cookies** | Session/prefs; may auth; first- vs third-party; delete may sign out |
| **Cache** | Local resource copies; perf; may be stale/corrupt; clear forces refresh |
| **Local/site data** | App state; may persist; offline/tokens |
| **History** | Visited pages; privacy; clearing ≠ erase from websites/accounts/DNS/org logs |

Troubleshoot: clear **affected site** first · note user impact · don’t wipe all profiles casually · check unsaved browser work · verify after. “Clear everything” is not the universal fix.

## Passwords, autofill, profiles, sync

Browser password managers · approved standalone managers · autofill · saved payment/address data · sync · device access · recovery · export risks · shared-device risks · org policy.

Unique passwords · protect profile/sync account with strong auth + MFA · no saves on public/shared PCs · no unprotected password exports · verify domain before autofill · remove saved creds after suspected compromise · change exposed creds from known-clean device. **Technicians do not view or collect user passwords.**

**Profiles/sync:** personal vs org · bookmarks/history/passwords/extensions/settings/tabs/payment data · managed profiles · guest browsing. Risks: wrong profile · personal↔work sync bleed · malicious extension returning via sync · settings returning after reset · shared PC left signed in · deleting profile wipes local unsynced data. Verify ownership before reset/delete.

## Extensions & downloads

Inventory · source/publisher · store listings · reviews ≠ proof · updates · compromise/sale · excessive permissions · unnecessary add-ons · unpacked/dev extensions (recognition) · managed extensions · sync · hijacking · search-provider changes · toolbars · ad injection.

**Review steps:** inventory → source → permissions vs purpose → managed? → disable/remove only when authorized → preserve evidence if compromise suspected → scan endpoint → ensure sync won’t restore → review account exposure. Don’t build/modify malicious extensions.

**Downloads:** trusted source · publisher · file type · reputation/SmartScreen · PUA · bundled installers · archives · executables · macro docs · preview · quarantine · approved scanning · download location · auto-open. Don’t disable reputation protection · don’t run files “to test” · avoid cracked software · escalate uncertain business downloads · remove sensitive downloads per policy. No malware samples in lab.

## Privacy, safe browsing, content controls

First-/third-party cookies · tracking prevention · fingerprinting awareness · ad IDs · Do Not Track limits · private/incognito · history · search history · account activity · DNS/network visibility · org monitoring · permissions · location.

**Private browsing myth:** generally still visible to websites · ISP · employers/schools · network admins · account providers · malware · downloads saved to disk. Mainly limits some local history/session persistence.

Safe browsing / reputation: phishing/malware site warnings · download reputation · block lists · PUA blocking · fraudulent-site reporting · authorized content/family filters. Warnings are evidence · false positives happen · bypass needs verification + authorization · one bypass ≠ permanent global exception.

Pop-up blockers · JavaScript as normal web + risk surface · site-specific permissions · content/ad blockers · cross-site tracking controls · compatibility · org policy · **narrowest** site exception when justified. Don’t disable all security for one site.

## Sandbox, managed policy, proxy/VPN/DNS

Sandbox / process / site isolation (A+ depth) · protected browsing where supported · updates matter · sandbox ≠ unsafe downloads harmless · compromised extension/account still risky. No exploit development.

**Managed browsers:** GPO · MDM/UEM · cloud browser management · managed profiles · required/blocked extensions · proxy · certificates · homepage · safe browsing · download restrictions · password-manager policy · update channels. Managed setting may be by design — don’t remove management for ordinary tickets.

**Proxy / VPN / secure DNS:** browser vs system vs org proxy · VPN relationship · DoH/secure DNS recognition · policy-managed settings · auth prompts · captive portals · filtering. VPN ≠ malicious sites safe · secure DNS ≠ HTTPS replacement · no unauthorized proxy bypass · browser VPN extension ≠ protects every app.

## Troubleshooting model

Isolate: one site / many sites · one browser / all browsers · one profile / all · one device / many · network/DNS · account/auth · extension · cache/cookies/site data · cert/time · proxy/VPN · managed policy · service outage · endpoint compromise.

**Evidence:** exact error · browser version · URL/domain · cert details · network state · other browser · private window · other profile · extension state · site permissions · basic DevTools recognition if aligned · EDR alert · approved service status · policy indicators. Private mode alone doesn’t prove “extensions did it” — behavior varies.

**What's next.** Security domain review integrating 2.1–2.11 when authorized — then Software Troubleshooting. No AP1202-2.12 in the V15 registry.`,
    },
    lightbulbMoment:
      "Browser security is layered evidence work: a lock icon is not trust, a warning is not a prompt to bypass, and the fix is the narrowest change that restores function without turning off protections.",
    keyFacts: [
      "HTTPS encrypts the connection — it does not prove the site is legitimate",
      "Don’t routinely bypass certificate warnings; verify domain, time, network, and management context",
      "Private/incognito browsing is not anonymity from ISP, employer, websites, or malware",
      "Clear site data for the affected site first — not every profile by default",
      "Extensions can return through sync or managed policy after removal",
      "Never save work credentials on shared/public PCs",
      "Fake browser ‘virus’ pages — don’t call the number or download the cleaner",
    ],
    guidedExample: {
      title: "Seven browser security tickets",
      steps: [
        "Payroll cert warning → stop credentials; verify domain; check time/network/captive portal; management context; escalate unexpected certs; no casual bypass.",
        "Fake ‘infected PC — call now’ page → don’t call; close safely; review notification permissions; scan if interacted; review downloads/extensions (\`ap-malware\` / \`ap-social-engineering\`).",
        "Meeting site mic blocked → confirm site; browser permission; OS permission; input device; managed policy; narrowest fix; verify.",
        "Removed shady extension returns → sync, managed policy, other signed-in device, account compromise, bundled app; may need malware investigation.",
        "Site works in Browser B not A → version, extension, profile, cache/site data, compatibility, managed settings — don’t full-reset first.",
        "Work passwords saved on shared PC → remove saved creds; sign out profile; review sessions; change passwords if exposure possible; verify MFA; document.",
        "Legacy site needs insecure browser/settings → confirm business need; seek alternatives; isolate if approved; compensating controls; don’t use that profile for general browsing; document risk.",
      ],
    },
    commonMistakes: [
      "Bypassing certificate warnings",
      "Treating HTTPS or a lock icon as proof of legitimacy",
      "Trusting search results, display names, or shortened links automatically",
      "Clicking suspicious links to ‘investigate’ them",
      "Granting every site permission",
      "Clearing all browser data before checking user impact",
      "Deleting profiles without confirming synchronization",
      "Saving credentials on shared systems or exporting passwords unprotected",
      "Ignoring extension permissions; letting sync restore malware add-ons",
      "Disabling safe browsing or download protection",
      "Calling phone numbers in fake browser alerts",
      "Assuming private mode creates anonymity",
      "Removing organization-managed settings",
      "Disabling all scripts/security for one site",
      "Treating every browser symptom as malware without evidence",
    ],
    examTraps: [
      "Safest immediate action on a certificate warning",
      "Best evidence for one-browser vs all-browser failure",
      "Narrowest permission or exception for a legitimate meeting site",
      "Extension returns after removal — sync/policy/account layers",
      "Shared PC saved-password exposure steps",
      "Private browsing misconception",
      "Managed policy boundary — don’t remove management",
    ],
    realWorldScenario:
      "Finance opens what looks like the payroll portal from a search ad. The address bar shows a look-alike domain and a certificate warning. You stop the user before login, compare the bookmark/known portal URL, confirm system time, note the device is Intune-managed so casual exceptions are blocked anyway, have them navigate from the company SSO portal, and open a separate ticket for the ad/domain — no warning click-through, no ‘temporary’ exception for payroll.",
    whenThisFails: [
      "If credentials or payment data may have been entered on a fake site, escalate account recovery — don’t only clear cookies",
      "If browser settings are managed and required for compliance, escalate to the admin path — don’t remove policy",
      "If an extension keeps returning across devices, treat sync/account compromise and possible malware — not a one-click remove",
    ],
    teacherReflectionPrompt:
      "For cert warning vs fake virus page vs mic blocked on a legitimate site: name the layer, the safest immediate action, and what you would refuse to do.",
    quiz: [
      {
        id: "ap-browser-security-q1",
        prompt: "A user sees a certificate warning on what they believe is the payroll site. Safest immediate framing?",
        choices: [
          { id: "a", text: "Stop credential entry; verify exact domain; check time/network/captive portal and management context; escalate unexpected certificate issues — do not casually bypass" },
          { id: "b", text: "Always click through because HTTPS warnings are usually false" },
          { id: "c", text: "Disable Safe Browsing permanently so the site loads" },
          { id: "d", text: "Export all passwords, then ignore the warning" },
        ],
        correctChoiceId: "a",
        explanation: "Certificate warning response.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-q2",
        prompt: "A webpage claims the PC is infected and shows a phone number to call. Best response?",
        choices: [
          { id: "a", text: "Do not call; close the page safely; review notification permissions; scan if the user interacted; review downloads/extensions" },
          { id: "b", text: "Call the number and purchase the offered cleaner" },
          { id: "c", text: "Disable the host firewall so the page stops" },
          { id: "d", text: "Grant the site camera and mic so it can ‘scan’" },
        ],
        correctChoiceId: "a",
        explanation: "Scareware / fake alert response.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-q3",
        prompt: "A legitimate meeting site cannot use the microphone. Narrowest troubleshooting order?",
        choices: [
          { id: "a", text: "Confirm correct site; check browser permission, then OS permission/input device, then managed policy; apply the smallest safe change and verify" },
          { id: "b", text: "Disable all site permissions globally" },
          { id: "c", text: "Uninstall the OS security suite first" },
          { id: "d", text: "Clear every browser profile without checking impact" },
        ],
        correctChoiceId: "a",
        explanation: "Permission layering.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-q4",
        prompt: "A suspicious extension is removed but reappears. Likely layers to consider?",
        choices: [
          { id: "a", text: "Profile sync, managed policy, another signed-in device, account compromise, or a bundled application — may need malware investigation" },
          { id: "b", text: "Only the Recycle Bin restoring it" },
          { id: "c", text: "HTTPS automatically reinstalling extensions" },
          { id: "d", text: "Private mode forcing reinstall" },
        ],
        correctChoiceId: "a",
        explanation: "Extension persistence.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-q5",
        prompt: "Private/incognito browsing is best described as:",
        choices: [
          { id: "a", text: "Limiting some local history/session persistence — not invisibility to websites, ISP, employers, account providers, or malware" },
          { id: "b", text: "Complete anonymity from all networks and employers" },
          { id: "c", text: "A substitute for antivirus" },
          { id: "d", text: "Proof that certificate warnings can be ignored" },
        ],
        correctChoiceId: "a",
        explanation: "Private browsing limits.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-q6",
        prompt: "Work credentials were saved in a browser on a shared PC. Best framing?",
        choices: [
          { id: "a", text: "Remove saved credentials; sign out of account/profile; review sessions; change passwords if exposure is possible; verify MFA; document per policy" },
          { id: "b", text: "Leave them saved for convenience" },
          { id: "c", text: "Export passwords to a desktop text file" },
          { id: "d", text: "Disable MFA so login is easier next time" },
        ],
        correctChoiceId: "a",
        explanation: "Shared-device password exposure.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-browser-security-b1",
        prompt: "HTTPS with a lock icon proves:",
        choices: [
          { id: "a", text: "Encryption/trust relationship for the connection — not that the business or page content is honest" },
          { id: "b", text: "The site cannot be phishing" },
          { id: "c", text: "Extensions are safe" },
        ],
        correctChoiceId: "a",
        explanation: "HTTPS limits.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-b2",
        prompt: "Clearing browser history alone:",
        choices: [
          { id: "a", text: "Does not remove data from websites, accounts, DNS logs, or organization monitoring" },
          { id: "b", text: "Deletes the company’s cloud mailbox" },
          { id: "c", text: "Revokes all MFA tokens worldwide" },
        ],
        correctChoiceId: "a",
        explanation: "History clearing limits.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-b3",
        prompt: "A setting labeled Managed in the browser typically means:",
        choices: [
          { id: "a", text: "Organization policy may be enforcing it — do not remove management for an ordinary issue" },
          { id: "b", text: "The user must delete the browser" },
          { id: "c", text: "Safe browsing is broken" },
        ],
        correctChoiceId: "a",
        explanation: "Managed policy boundary.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-b4",
        prompt: "A site fails in one browser but works in another. Best first framing?",
        choices: [
          { id: "a", text: "Compare version, extensions, profile, cache/site data, compatibility, and managed settings before a full browser reset" },
          { id: "b", text: "Immediately wipe the OS" },
          { id: "c", text: "Disable the firewall on both browsers" },
        ],
        correctChoiceId: "a",
        explanation: "Scoped browser troubleshooting.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-b5",
        prompt: "Download reputation / SmartScreen-style warnings should generally be:",
        choices: [
          { id: "a", text: "Investigated — do not disable protection to force a run; verify source and scan through approved tools" },
          { id: "b", text: "Ignored for any .exe" },
          { id: "c", text: "Bypassed by turning off all OS security" },
        ],
        correctChoiceId: "a",
        explanation: "Download protection.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-b6",
        prompt: "Browser sandboxing means:",
        choices: [
          { id: "a", text: "Isolation that reduces impact of some web threats — it does not make unsafe downloads or compromised extensions harmless" },
          { id: "b", text: "The user is invisible to employers" },
          { id: "c", text: "Certificates can always be ignored" },
        ],
        correctChoiceId: "a",
        explanation: "Sandbox limits.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-b7",
        prompt: "A VPN browser extension primarily:",
        choices: [
          { id: "a", text: "Does not automatically protect every application or make malicious sites safe" },
          { id: "b", text: "Replaces HTTPS" },
          { id: "c", text: "Removes the need for MFA" },
        ],
        correctChoiceId: "a",
        explanation: "VPN extension limits.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-b8",
        prompt: "Incorrect system date/time can cause:",
        choices: [
          { id: "a", text: "False certificate validation failures" },
          { id: "b", text: "Automatic malware removal" },
          { id: "c", text: "Stronger WPA3 on the router" },
        ],
        correctChoiceId: "a",
        explanation: "Time vs certificates.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
      {
        id: "ap-browser-security-b9",
        prompt: "A legacy app requires disabling browser protections. Best framing?",
        choices: [
          { id: "a", text: "Confirm business need; seek supported alternatives; isolate use if explicitly approved; document accepted risk — don’t browse generally in that insecure mode" },
          { id: "b", text: "Disable all protections globally forever" },
          { id: "c", text: "Install cracked ‘security unlocker’ software" },
        ],
        correctChoiceId: "a",
        explanation: "Legacy insecure exception.",
        objectiveId: "AP1202-2.11",
        difficulty: "medium",
      },
      {
        id: "ap-browser-security-b10",
        prompt: "Clearing cookies for one problematic site (instead of all data) is preferred because:",
        choices: [
          { id: "a", text: "It limits impact — bulk clears can sign users out and discard needed sessions/work across sites" },
          { id: "b", text: "Cookies never affect authentication" },
          { id: "c", text: "Site-specific clear disables Safe Browsing" },
        ],
        correctChoiceId: "a",
        explanation: "Narrow site-data clear.",
        objectiveId: "AP1202-2.11",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-browser-security-f1",
        front: "HTTPS = trustworthy site?",
        back: "No — encrypts connection, not honesty",
      },
      {
        id: "ap-browser-security-f2",
        front: "Cert warning first step?",
        back: "Stop credentials; verify domain/time/network",
      },
      {
        id: "ap-browser-security-f3",
        front: "Private browsing = anonymous?",
        back: "No — local limits, not invisibility",
      },
      {
        id: "ap-browser-security-f4",
        front: "Extension returns after remove?",
        back: "Check sync, policy, other devices, account",
      },
      {
        id: "ap-browser-security-f5",
        front: "Fake virus page phone #?",
        back: "Don’t call; close; review perms/downloads",
      },
      {
        id: "ap-browser-security-f6",
        front: "Managed browser setting?",
        back: "May be by design — don’t remove policy",
      },
      {
        id: "ap-browser-security-f7",
        front: "Saved passwords on shared PC?",
        back: "Remove; sign out; rotate if exposed; MFA",
      },
    ],
    assignments: [
      {
        id: "ap-lab-browser-security-triage",
        title: "Browser security and troubleshooting lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional inert packets only. No live phishing sites, malicious extensions, malware samples, credential collection, or routine certificate/policy bypass.

For each case record:
1) Asset or data at risk
2) Affected browser layer
3) Evidence
4) Safest immediate action
5) Narrowest configuration change
6) Account or malware response needed? (Y/N + why)
7) Policy/authorization boundary
8) Verification
9) User-facing explanation
10) Ticket note

Packets (all names/URLs fictional):

A) Cert warning — URL shows payroII.example-finance.test (look-alike); system time OK; device Intune-managed; user about to enter SSO password.

B) Scareware tab — fullscreen “CALL 1-555-0199 — PC INFECTED”; notification permission previously Allowed for that origin; user did not download.

C) Mic blocked — meet.contoso-training.test; browser Site settings show Mic Block; Windows Privacy mic Allowed for browser; no managed restriction listed.

D) Extension returns — “SearchBoost Pro” removed yesterday; reappears after reboot; Chrome sync On; same extension present on user’s home PC profile.

E) One-browser fail — vendor portal works in Edge, fails in Chrome with blank page; Chrome has 12 extensions; clearing cache not tried; managed homepage set.

F) Shared kiosk — Edge profile still signed into finance@fabrikam.test; password manager shows 6 saved work logins; last interactive user unknown.

G) Download warning — SmartScreen blocks invoice-final.exe from email link display name “AP Clerk”; file reputation low; user insists it is urgent.

H) Legacy portal — old intranet app requires IE mode / lowered security; business owner approved temporary use; user also browses banking in same session.

Boundaries: never recommend calling scareware numbers; never teach permanent global security disable; never collect real passwords; escalate managed-policy and possible account compromise appropriately.`,
        estimatedMinutes: 35,
        completionCriteria: [
          "Complete all ten fields for packets A–H",
          "Refuse certificate/scareware/download bypass as routine",
          "Identify sync/policy layers for returning extension",
          "Separate OS vs browser permission for mic case",
          "Call out shared-PC credential exposure and legacy-session isolation",
          "No live malicious content used",
        ],
        relatedTopicIds: [
          "ap-browser-security",
          "ap-windows-security",
          "ap-social-engineering",
          "ap-malware",
          "ap-hardening",
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
