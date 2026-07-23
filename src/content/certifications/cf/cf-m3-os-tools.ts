import type { Domain, ExternalResource } from "../../types";

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Avoid managed school/work accounts for account and install/uninstall labs.",
};

/**
 * Computer Fundamentals — Module 3 (Windows Tools).
 * Install/uninstall apps, Settings vs. Control Panel + Windows Update + accounts,
 * Task Manager + restart vs. shut down + backup concepts. Prose lessons — no LES
 * experience yet (first pass).
 */
export const cfOsToolsDomain: Domain = {
  id: "cf-os-tools",
  name: "Module 3 — Windows Tools",
  topics: [
    {
      id: "cf-install-uninstall-apps",
      name: "Installing and Uninstalling Apps Safely",
      prerequisites: ["cf-extensions-and-associations"],
      objectives: ["CF-M3-O1", "CF-M3-O2", "CF-M3-O3"],
      lesson: {
        title: "Installing and Uninstalling Apps Safely",
        content: `Installing and uninstalling apps safely is one of the most useful everyday Windows 11 skills — it's also one of the easiest places to accidentally install something you didn't want. There are two main sources apps come from, and recognizing which one you're using changes how careful you need to be.

The Microsoft Store is the first source: a built-in app where you search, click Get or Install, and Windows handles the rest. Store apps are generally vetted before they're listed, update themselves automatically in the background, and sometimes ask you to sign in with a Microsoft account for purchases or certain features. This is the lowest-friction, generally safest way to install software on Windows 11.

The second source is a traditional installer downloaded from a website — a file usually ending in .exe or .msi. You download it (it typically lands in your Downloads folder), then double-click it to run a setup wizard: a sequence of screens, usually a Next, Next, Install, then Finish. Along the way, Windows may show a SmartScreen warning — "Windows protected your PC" — for publishers it doesn't widely recognize yet. That warning is a prompt to pause and verify, not an automatic sign of danger: check that the publisher name matches the software you actually meant to download, from its real, official website, before continuing.

Uninstalling works the same way regardless of where an app came from. Open Settings > Apps > Installed apps (or right-click an app's tile in the Start menu and choose Uninstall) to see every installed app with an Uninstall button next to it. Uninstalling removes the app's program files, but it does not necessarily remove files you created and saved somewhere else — a document you wrote in a word processor, for example, stays right where you saved it even after the word processor itself is gone.

Uninstalling matters for more than just tidiness. It frees up storage space, removes apps you no longer trust or use, and is a genuinely useful troubleshooting step: if one specific app keeps misbehaving, uninstalling and reinstalling it is often a faster fix than assuming something deeper is broken.

Two safety habits round this topic out. First, never uninstall something you don't recognize without a quick search — some unfamiliar-looking entries are components Windows itself actually needs. Second, never install an app from a random pop-up ad or an unfamiliar "download" site; a legitimate app almost always has either an official Microsoft Store listing or a real website you can verify independently, and it's worth taking the extra ten seconds to confirm that before clicking Install.

Once you know the two sources — Store versus downloaded installer — and where the Uninstall list lives, installing and removing software becomes a completely reversible, low-risk skill you can use confidently, instead of something that feels like it might permanently mess up the PC.`,
      },
      lightbulbMoment:
        "Two sources — the Store, or a downloaded installer — and one Uninstall list; once you know both, installing software stops feeling risky.",
      keyFacts: [
        "Two main install sources: Microsoft Store (curated, auto-updating) and a downloaded installer (.exe/.msi) you run manually",
        "Downloaded installers usually land in Downloads first, then you double-click to run the setup wizard",
        "Settings > Apps > Installed apps lists every app with an Uninstall button",
        "Uninstalling removes an app's program files, not necessarily files you created and saved elsewhere",
        "Only install apps from an official Microsoft Store listing or the software's real, trusted website",
      ],
      guidedExample: {
        title: "Install and Uninstall an App Safely",
        steps: [
          "Open Microsoft Store and search for a well-known free app.",
          "Click Get or Install and wait for it to finish.",
          "Open Settings > Apps > Installed apps and find that same app in the list.",
          "Click the three-dot menu or Uninstall button next to it.",
          "Confirm the uninstall and verify the app no longer appears in the Start menu.",
        ],
      },
      commonMistakes: [
        "Downloading installers from unofficial 'download' sites instead of the software's real website or the Microsoft Store",
        "Clicking through a SmartScreen warning without checking whether the publisher name looks legitimate",
        "Assuming uninstalling an app also deletes documents/files created with that app",
        "Uninstalling an unfamiliar system component without a quick search, potentially removing something Windows needs",
      ],
      realWorldTraps: [
        "Pop-up ads claiming 'Your PC needs this update — install now' are almost always fake; real updates come through Windows Update or the app itself, not a browser pop-up",
        "A managed work PC may block installing apps entirely, requiring IT to install approved software — that's policy, not a personal error",
        "Some free installers try to also install extra, unwanted toolbars or programs during setup — reading each setup screen before clicking Next avoids installing something you didn't ask for",
      ],
      realWorldScenario:
        "A relative wants a video-calling app installed. Because you check the Microsoft Store first and recognize the official publisher name, you install it confidently in under a minute instead of downloading an unfamiliar file from a random search result.",
      whenThisFails: [
        "If an app won't install, check available storage space and confirm you're using an official source before assuming something's broken",
        "If uninstalling doesn't remove an app fully (icon lingers, files remain), restart the PC and check Installed apps again — a fresh reinstall is also a safe reset for a misbehaving app",
      ],
      teacherReflectionPrompt:
        "Walk through, out loud, exactly how you'd safely find, install, and later uninstall a video-calling app on a Windows 11 PC.",
      quiz: [
        {
          id: "cf-install-uninstall-apps-q1",
          prompt: "What are the two main sources for installing an app on Windows 11?",
          choices: [
            { id: "a", text: "The Microsoft Store and a downloaded installer (.exe/.msi)" },
            { id: "b", text: "Task Manager and Settings only" },
            { id: "c", text: "Only the Microsoft Store — there's no other way" },
            { id: "d", text: "Email attachments only" },
          ],
          correctChoiceId: "a",
          explanation: "Apps come either from the curated Microsoft Store or a downloaded installer you run manually.",
          difficulty: "easy",
        },
        {
          id: "cf-install-uninstall-apps-q2",
          prompt: "Where do downloaded installers usually land first?",
          choices: [
            { id: "a", text: "Downloads" },
            { id: "b", text: "Documents" },
            { id: "c", text: "The Recycle Bin" },
            { id: "d", text: "Nowhere — they run without saving a file" },
          ],
          correctChoiceId: "a",
          explanation: "Downloaded installer files typically land in the Downloads folder before you run them.",
          difficulty: "easy",
        },
        {
          id: "cf-install-uninstall-apps-q3",
          prompt: "Where do you go to uninstall an app in Windows 11?",
          choices: [
            { id: "a", text: "Settings > Apps > Installed apps" },
            { id: "b", text: "Personalization" },
            { id: "c", text: "The Recycle Bin" },
            { id: "d", text: "Windows Update" },
          ],
          correctChoiceId: "a",
          explanation: "Settings > Apps > Installed apps lists every installed app with an Uninstall option next to it.",
          difficulty: "medium",
        },
        {
          id: "cf-install-uninstall-apps-q4",
          prompt: "Does uninstalling an app also delete documents you created with it?",
          choices: [
            { id: "a", text: "No, not necessarily — the app's program files are removed, not your saved documents" },
            { id: "b", text: "Yes, always" },
            { id: "c", text: "Only if you have a Microsoft account" },
            { id: "d", text: "Only on Windows 10, not Windows 11" },
          ],
          correctChoiceId: "a",
          explanation: "Uninstalling removes the app's own program files, but files you saved elsewhere are unaffected.",
          difficulty: "medium",
        },
        {
          id: "cf-install-uninstall-apps-q5",
          prompt: "A pop-up claims your PC urgently needs an install right now. What's the wise reaction?",
          choices: [
            { id: "a", text: "Treat it as suspicious and use an official source (Store or the real website) instead" },
            { id: "b", text: "Click Install immediately" },
            { id: "c", text: "Assume it's from Windows Update" },
            { id: "d", text: "Uninstall your browser" },
          ],
          correctChoiceId: "a",
          explanation: "Urgent pop-up 'install now' prompts are almost always fake; verify through an official source instead.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-install-uninstall-apps-b1",
          prompt: "What does a SmartScreen warning ('Windows protected your PC') mean?",
          choices: [
            { id: "a", text: "A prompt to pause and verify the publisher, not an automatic sign of danger" },
            { id: "b", text: "The installer is definitely a virus" },
            { id: "c", text: "Windows has crashed" },
            { id: "d", text: "It always means to cancel the install immediately" },
          ],
          correctChoiceId: "a",
          explanation: "SmartScreen flags less-recognized publishers as a prompt to verify, not a guaranteed threat.",
        },
        {
          id: "cf-install-uninstall-apps-b2",
          prompt: "Why check a publisher's name before continuing past a SmartScreen warning?",
          choices: [
            { id: "a", text: "To confirm it matches the software you actually meant to download" },
            { id: "b", text: "It has no real purpose" },
            { id: "c", text: "Only Microsoft Store apps have publishers" },
            { id: "d", text: "Publisher names are randomly generated" },
          ],
          correctChoiceId: "a",
          explanation: "Verifying the publisher name helps confirm you're installing the real software, not an impersonator.",
        },
        {
          id: "cf-install-uninstall-apps-b3",
          prompt: "During setup, an installer offers to also install an extra toolbar you didn't ask for. What should you do?",
          choices: [
            { id: "a", text: "Read each setup screen and decline the extra toolbar" },
            { id: "b", text: "Click Next repeatedly without reading" },
            { id: "c", text: "Restart the PC immediately" },
            { id: "d", text: "Uninstall Windows Update" },
          ],
          correctChoiceId: "a",
          explanation: "Reading each setup screen lets you decline unwanted extras bundled with some free installers.",
        },
        {
          id: "cf-install-uninstall-apps-b4",
          prompt: "Why is uninstalling and reinstalling a useful troubleshooting step for one misbehaving app?",
          choices: [
            { id: "a", text: "It's often a faster fix than assuming something deeper is broken" },
            { id: "b", text: "It always requires reinstalling Windows itself" },
            { id: "c", text: "It permanently deletes all your documents" },
            { id: "d", text: "It has no effect on app problems" },
          ],
          correctChoiceId: "a",
          explanation: "Reinstalling a single misbehaving app is a targeted, low-risk fix, faster than deeper troubleshooting.",
        },
        {
          id: "cf-install-uninstall-apps-b5",
          prompt: "A work-managed PC won't let you install any app yourself. Why?",
          choices: [
            { id: "a", text: "IT policy on managed devices often restricts installs" },
            { id: "b", text: "The Microsoft Store has been deleted" },
            { id: "c", text: "The PC has no apps layer" },
            { id: "d", text: "Windows Update is broken" },
          ],
          correctChoiceId: "a",
          explanation: "Managed/work PCs often restrict app installs by IT policy, requiring approved software to be installed centrally.",
        },
        {
          id: "cf-install-uninstall-apps-b6",
          prompt: "Which install source generally updates itself automatically in the background?",
          choices: [
            { id: "a", text: "Microsoft Store apps" },
            { id: "b", text: "Every downloaded .exe installer, automatically" },
            { id: "c", text: "Neither source ever updates" },
            { id: "d", text: "Only apps installed by IT" },
          ],
          correctChoiceId: "a",
          explanation: "Microsoft Store apps typically update automatically; downloaded installers often require manual updates.",
        },
        {
          id: "cf-install-uninstall-apps-b7",
          prompt: "Why might installing an app prompt you to sign in with a Microsoft account?",
          choices: [
            { id: "a", text: "Some Store purchases and features require it" },
            { id: "b", text: "Every app install always requires it" },
            { id: "c", text: "It's required to open Settings" },
            { id: "d", text: "It has nothing to do with app installs" },
          ],
          correctChoiceId: "a",
          explanation: "Certain Store purchases and features are tied to a Microsoft account sign-in.",
        },
        {
          id: "cf-install-uninstall-apps-b8",
          prompt: "You uninstall an app but its icon lingers and files remain. What's a reasonable next step?",
          choices: [
            { id: "a", text: "Restart the PC and check Installed apps again, or reinstall then uninstall cleanly" },
            { id: "b", text: "Assume the PC is permanently broken" },
            { id: "c", text: "Delete System32 manually" },
            { id: "d", text: "Disable Windows Update" },
          ],
          correctChoiceId: "a",
          explanation: "A restart followed by rechecking Installed apps, or a clean reinstall/uninstall, safely resolves lingering leftovers.",
        },
      ],
      flashcards: [
        {
          id: "cf-install-uninstall-apps-f1",
          front: "Two main install sources for Windows 11 apps?",
          back: "Microsoft Store, and a downloaded installer (.exe/.msi)",
        },
        {
          id: "cf-install-uninstall-apps-f2",
          front: "Where does the Installed apps list live?",
          back: "Settings > Apps > Installed apps",
        },
        {
          id: "cf-install-uninstall-apps-f3",
          front: "Does uninstalling remove your saved documents?",
          back: "No — only the app's own program files, not documents saved elsewhere",
        },
        {
          id: "cf-install-uninstall-apps-f4",
          front: "Where do downloaded installers usually land first?",
          back: "The Downloads folder",
        },
        {
          id: "cf-install-uninstall-apps-f5",
          front: "How do you spot a fake 'install now' pop-up?",
          back: "It doesn't come from the Store or the app itself — treat urgent install pop-ups as suspicious",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-settings-updates-accounts",
      name: "Settings, Windows Update & Accounts",
      prerequisites: ["cf-install-uninstall-apps"],
      objectives: ["CF-M3-O4", "CF-M3-O5", "CF-M3-O6"],
      lesson: {
        title: "Settings, Windows Update & Accounts",
        content: `Windows 11 has two overlapping settings tools: the modern Settings app (Windows key + I, the one this course teaches throughout) and the older Control Panel, a legacy tool from earlier Windows versions that Microsoft has been gradually retiring in favor of Settings. Most day-to-day tasks now live in Settings; Control Panel still exists mainly for a handful of advanced or legacy items that haven't been fully migrated yet.

You don't need to memorize Control Panel's layout — just recognize it if it appears (an older look, list-style categories) and know it isn't broken, fake, or a mistake, just legacy. If an older guide tells you to open Control Panel for something, typing "control panel" into the Start menu's search box opens it directly, no hunting required.

Windows Update lives in Settings > Windows Update. It checks for and installs operating system updates — security fixes and feature updates — and often driver updates too. Updates matter for a real reason: they patch security vulnerabilities, and delaying them indefinitely is a genuine security risk, covered further in a later security module. You can check for updates manually at any time, and you can pause updates briefly before something important, like a presentation, without turning updates off forever.

Accounts, revisited from an earlier topic, live in Settings > Accounts — the place to manage your sign-in info, switch between a local and Microsoft account, add a family member or additional user, and set up sign-in options like a PIN, password, or Windows Hello (face or fingerprint recognition, on hardware that supports it).

Adding another user account is genuinely useful on a shared household PC: it gives each person their own separate files, desktop, and settings, which is a different thing entirely from just adding another Microsoft account on top of a single shared account. Skipping this on a shared PC means everyone can see everyone else's files, browsing history, and desktop — worth fixing early rather than living with.

Sign-in options are worth a quick comparison. A PIN is tied to that specific device — convenient, quick, and still secure. Your account password, by contrast, works everywhere, including other devices and websites. Windows often nudges you toward setting up a PIN for faster local sign-in; that's a legitimate convenience feature, not a security downgrade, since it only ever works on that one device.

Put together, knowing where updates, accounts, and the Settings/Control Panel relationship live turns "my computer is asking me to do something about an update or account" from a confusing mystery into a two-click lookup you can handle calmly, every time.`,
      },
      lightbulbMoment:
        "Updates, accounts, and even legacy Control Panel steps are all just a two-click lookup away, once you know where each one lives.",
      keyFacts: [
        "Settings (Windows key + I) is the modern tool for almost all day-to-day tasks; Control Panel is an older, legacy tool still used for a few items Microsoft hasn't fully migrated yet",
        "Windows Update lives in Settings > Windows Update and patches security vulnerabilities while adding features",
        "Pausing updates briefly (e.g., before a presentation) is fine; leaving updates off indefinitely is a real security risk",
        "Settings > Accounts manages sign-in info, account type, and adding additional users to a shared PC",
        "A PIN is tied to one device for convenient sign-in; your account password works across devices and websites",
      ],
      guidedExample: {
        title: "Check for Updates and Review Your Account",
        steps: [
          "Open Settings > Windows Update and click Check for updates.",
          "If updates are found, let them install, or pause them briefly if you're mid-task on something important.",
          "Open Settings > Accounts and confirm whether you're signed in with a local or Microsoft account.",
          "Look at Sign-in options to see whether a PIN is set up.",
          "If a guide mentions Control Panel, type 'control panel' in Start search instead of assuming it's missing.",
        ],
      },
      commonMistakes: [
        "Assuming Control Panel is broken, fake, or removed just because it looks different from Settings",
        "Pausing or disabling Windows Update indefinitely, leaving security fixes unapplied for months",
        "Confusing 'adding a Microsoft account to sign in' with 'adding a separate user account for a family member'",
        "Believing a PIN is less secure than a password, when it's actually a convenient, device-specific sign-in option",
      ],
      realWorldTraps: [
        "IT support may ask you to check 'Windows Update history' when troubleshooting — knowing where that screen lives saves a phone call",
        "A shared family PC without separate user accounts means everyone sees everyone else's desktop, files, and browser history — a real privacy trap worth fixing early",
        "Old guides written for earlier Windows versions may reference Control Panel steps that have since moved into Settings — if a step doesn't exist where the guide says, check Settings first",
      ],
      realWorldScenario:
        "A family member says 'the computer keeps nagging me about an update.' Knowing updates patch real security holes, you help them either install it now or pause it for an hour, instead of disabling updates entirely out of annoyance.",
      whenThisFails: [
        "If Windows Update seems stuck, restart the PC and check again before assuming something is broken",
        "If you can't find a setting in Settings, search 'control panel' or use the Settings search box at the top — most items are findable by typing a keyword",
      ],
      teacherReflectionPrompt:
        "Explain out loud why leaving Windows Update paused indefinitely is a security risk, not just an annoyance to postpone.",
      quiz: [
        {
          id: "cf-settings-updates-accounts-q1",
          prompt: "What is the keyboard shortcut for the modern Settings app?",
          choices: [
            { id: "a", text: "Windows key + I" },
            { id: "b", text: "Windows key + E" },
            { id: "c", text: "Ctrl + Alt + Delete" },
            { id: "d", text: "Alt + Tab" },
          ],
          correctChoiceId: "a",
          explanation: "Windows key + I opens the modern Settings app.",
          difficulty: "easy",
        },
        {
          id: "cf-settings-updates-accounts-q2",
          prompt: "What does Windows Update primarily do?",
          choices: [
            { id: "a", text: "Patches security vulnerabilities and adds features" },
            { id: "b", text: "Deletes unused apps automatically" },
            { id: "c", text: "Changes your account type" },
            { id: "d", text: "Only updates the desktop wallpaper" },
          ],
          correctChoiceId: "a",
          explanation: "Windows Update installs security fixes and feature updates, and often driver updates.",
          difficulty: "easy",
        },
        {
          id: "cf-settings-updates-accounts-q3",
          prompt: "Is it okay to pause Windows Update briefly before an important presentation?",
          choices: [
            { id: "a", text: "Yes — briefly pausing is fine; leaving it off indefinitely is a security risk" },
            { id: "b", text: "No — pausing updates is never allowed" },
            { id: "c", text: "Yes, and it should stay paused forever afterward" },
            { id: "d", text: "Pausing updates deletes your files" },
          ],
          correctChoiceId: "a",
          explanation: "A brief pause is reasonable; indefinitely disabling updates leaves real security vulnerabilities unpatched.",
          difficulty: "medium",
        },
        {
          id: "cf-settings-updates-accounts-q4",
          prompt: "Where do you manage account sign-in options like a PIN or password?",
          choices: [
            { id: "a", text: "Settings > Accounts" },
            { id: "b", text: "Control Panel only" },
            { id: "c", text: "Task Manager" },
            { id: "d", text: "The Recycle Bin" },
          ],
          correctChoiceId: "a",
          explanation: "Settings > Accounts is where sign-in options, account type, and additional users are managed.",
          difficulty: "medium",
        },
        {
          id: "cf-settings-updates-accounts-q5",
          prompt: "What's a key difference between a PIN and an account password?",
          choices: [
            { id: "a", text: "A PIN is tied to that one device; a password works across devices and websites" },
            { id: "b", text: "A PIN is always less secure than a password" },
            { id: "c", text: "A password only works on Windows 10" },
            { id: "d", text: "There is no meaningful difference" },
          ],
          correctChoiceId: "a",
          explanation: "A PIN is device-specific and convenient; a password is your broader account credential across devices/websites.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-settings-updates-accounts-b1",
          prompt: "What is Control Panel?",
          choices: [
            { id: "a", text: "An older, legacy settings tool still used for a few items not yet migrated to Settings" },
            { id: "b", text: "A virus that appeared on older Windows versions" },
            { id: "c", text: "A replacement for the Start menu" },
            { id: "d", text: "A mobile-only settings app" },
          ],
          correctChoiceId: "a",
          explanation: "Control Panel is legacy, not broken — a handful of advanced items still live there.",
        },
        {
          id: "cf-settings-updates-accounts-b2",
          prompt: "How can you quickly open Control Panel if a guide mentions it?",
          choices: [
            { id: "a", text: "Type 'control panel' into Start search" },
            { id: "b", text: "It's impossible to open on Windows 11" },
            { id: "c", text: "Only through Windows Update" },
            { id: "d", text: "Only via a Microsoft account" },
          ],
          correctChoiceId: "a",
          explanation: "Typing 'control panel' in Start search opens it directly.",
        },
        {
          id: "cf-settings-updates-accounts-b3",
          prompt: "Why should a shared family PC have separate user accounts for each person?",
          choices: [
            { id: "a", text: "It keeps each person's files, desktop, and browsing history private from the others" },
            { id: "b", text: "It's required to install any app" },
            { id: "c", text: "It disables Windows Update" },
            { id: "d", text: "It has no real benefit" },
          ],
          correctChoiceId: "a",
          explanation: "Separate accounts keep personal files and browsing history from being visible to other household members.",
        },
        {
          id: "cf-settings-updates-accounts-b4",
          prompt: "What is Windows Hello?",
          choices: [
            { id: "a", text: "A sign-in option using face or fingerprint recognition, on supporting hardware" },
            { id: "b", text: "A chat app built into Windows" },
            { id: "c", text: "A Control Panel feature only" },
            { id: "d", text: "A type of account password" },
          ],
          correctChoiceId: "a",
          explanation: "Windows Hello is a biometric sign-in option (face or fingerprint) on hardware that supports it.",
        },
        {
          id: "cf-settings-updates-accounts-b5",
          prompt: "What's the practical consequence of ignoring Windows Update for a long time?",
          choices: [
            { id: "a", text: "Security vulnerabilities go unpatched, a real risk over time" },
            { id: "b", text: "Nothing changes at all" },
            { id: "c", text: "The PC automatically reinstalls Windows" },
            { id: "d", text: "Your account type switches to local automatically" },
          ],
          correctChoiceId: "a",
          explanation: "Long-term neglect of updates leaves known security holes unpatched, a genuine risk.",
        },
        {
          id: "cf-settings-updates-accounts-b6",
          prompt: "IT support asks you to check your 'Windows Update history.' Where do you look?",
          choices: [
            { id: "a", text: "Settings > Windows Update" },
            { id: "b", text: "The Recycle Bin" },
            { id: "c", text: "Personalization" },
            { id: "d", text: "Task Manager's Processes tab" },
          ],
          correctChoiceId: "a",
          explanation: "Update history and status are found within Settings > Windows Update.",
        },
        {
          id: "cf-settings-updates-accounts-b7",
          prompt: "An old guide tells you to change a setting in Control Panel, but you can't find that exact screen there. What's a good next step?",
          choices: [
            { id: "a", text: "Check Settings — many Control Panel items have moved there over time" },
            { id: "b", text: "Assume the guide is completely wrong" },
            { id: "c", text: "Reinstall Windows" },
            { id: "d", text: "Give up on the task" },
          ],
          correctChoiceId: "a",
          explanation: "Many Control Panel functions have migrated into Settings over successive Windows versions.",
        },
        {
          id: "cf-settings-updates-accounts-b8",
          prompt: "What's the difference between adding a Microsoft account to sign in and adding a new Windows user account?",
          choices: [
            { id: "a", text: "A new user account creates a separate profile with its own files/desktop; linking a Microsoft account doesn't by itself" },
            { id: "b", text: "They are exactly the same action" },
            { id: "c", text: "Adding a Microsoft account always creates a new user profile too" },
            { id: "d", text: "Neither action is possible on a shared PC" },
          ],
          correctChoiceId: "a",
          explanation: "Adding a new user account creates a distinct profile; signing in with a Microsoft account on an existing profile does not.",
        },
      ],
      flashcards: [
        {
          id: "cf-settings-updates-accounts-f1",
          front: "Shortcut for the modern Settings app?",
          back: "Windows key + I",
        },
        {
          id: "cf-settings-updates-accounts-f2",
          front: "What is Control Panel?",
          back: "An older, legacy settings tool — not broken or fake, just legacy",
        },
        {
          id: "cf-settings-updates-accounts-f3",
          front: "Where does Windows Update live?",
          back: "Settings > Windows Update",
        },
        {
          id: "cf-settings-updates-accounts-f4",
          front: "Why is a PIN convenient?",
          back: "It's tied to just this device, for quick local sign-in",
        },
        {
          id: "cf-settings-updates-accounts-f5",
          front: "Why add separate user accounts on a shared PC?",
          back: "Keeps each person's files, desktop, and browsing history private",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-task-manager-restart-backup",
      name: "Task Manager, Restart vs. Shut Down & Backup Concepts",
      prerequisites: ["cf-settings-updates-accounts"],
      objectives: ["CF-M3-O7", "CF-M3-O8", "CF-M3-O9"],
      lesson: {
        title: "Task Manager, Restart vs. Shut Down & Backup Concepts",
        content: `Task Manager is Windows 11's built-in tool for seeing exactly what's running right now and, when needed, closing something that's stuck. Open it with Ctrl+Shift+Esc — a shortcut that works even when the screen feels unresponsive — or right-click the taskbar and choose Task Manager, or press Ctrl+Alt+Delete and pick Task Manager from that menu.

The Processes tab lists every running app and background process, along with how much CPU, memory, and other resources each one is using. If an app shows "Not responding" here, right-click it and choose End task to force-close just that one app — a targeted fix that's far less disruptive than restarting the entire PC for a single frozen program.

The Performance tab shows live graphs of overall CPU, memory, disk, and network usage. You don't need to interpret every number precisely to get value from it — noticing "my PC feels slow, and this graph is pegged at the top" is a legitimate, useful clue that something is demanding more than usual, even before you know exactly what to do about it.

Restart and Shut down are genuinely different actions. Shut down fully powers the device off. Restart powers it off and back on automatically, which often actually fixes a stuck update, a sluggish system, or a setting that needs a fresh start — because it clears out whatever had built up in memory. "Have you tried restarting it?" isn't a dismissive cliché; it resolves a real, large share of everyday glitches by giving every running process a genuinely clean slate.

Sleep is a third, different option: a low-power pause where the screen turns off but your work stays loaded in memory, meant for short breaks — stepping away for ten minutes, not a replacement for an occasional full restart. Relying on Sleep indefinitely, without ever restarting, is part of why some PCs feel like they've been quietly slowing down for weeks.

Backup concepts round out this topic, at an introductory level rather than as a full backup system to build today. A backup means a separate copy of your files exists somewhere other than the only place the originals live — an external drive, a cloud service like OneDrive, or another device entirely. The core rule to internalize: if a file only exists in one place, it isn't backed up, no matter how careful you've been with that one copy. This course doesn't require setting up automated backup software right now; the concept — a copy exists elsewhere — is what matters at this stage, with hands-on backup tools revisited in later, deeper modules.

Together, Task Manager gives you a calm way to see what's happening and end just one stuck app; knowing when a routine restart is the right move versus when you're actually relying on backups (before doing anything risky) rounds out a realistic, everyday toolkit for keeping a Windows 11 PC healthy.`,
      },
      lightbulbMoment:
        "'Have you tried restarting it?' genuinely works — and Task Manager lets you end just one stuck app instead of restarting everything.",
      keyFacts: [
        "Open Task Manager with Ctrl+Shift+Esc, even if the screen feels unresponsive",
        "The Processes tab lists running apps/background processes and lets you End task on just the one that's stuck",
        "The Performance tab shows live CPU/memory/disk/network graphs to spot what's demanding resources",
        "Restart clears memory and often fixes sluggishness or a stuck update; Shut down fully powers off; Sleep is a short, low-power pause, not a substitute for restarting",
        "A backup means a separate copy of your files exists somewhere else (external drive, cloud, another device) — if a file only exists in one place, it isn't backed up",
      ],
      guidedExample: {
        title: "Force-Close a Stuck App and Restart Safely",
        steps: [
          "Press Ctrl+Shift+Esc to open Task Manager.",
          "Find the app marked 'Not responding' on the Processes tab.",
          "Right-click it and choose End task.",
          "Check the Performance tab to confirm CPU/memory usage has settled down.",
          "If the PC still feels sluggish afterward, Restart (not just Sleep) for a genuinely clean slate.",
        ],
      },
      commonMistakes: [
        "Restarting the entire PC for a single frozen app when End task in Task Manager would fix it in seconds",
        "Treating Sleep as equivalent to a restart, then wondering why a stubborn glitch never clears",
        "Assuming files saved only on the PC itself are automatically backed up somewhere",
        "Reading Task Manager's resource numbers as a precise diagnosis instead of a general clue about what's busy",
      ],
      realWorldTraps: [
        "IT support's first question is almost always 'have you tried restarting it' — it's a genuine, high-success first step, not a brush-off",
        "A file that 'disappeared' after a hard drive failure or a lost device was often never backed up in the first place — this is the single most common real-world data-loss story",
        "Ending the wrong process in Task Manager (a real system process you don't recognize) can cause instability — only End task apps you recognize as something you opened, and search first if unsure",
      ],
      realWorldScenario:
        "A work app freezes right before a deadline. Instead of restarting the whole PC and losing several minutes, you open Task Manager, end just that one app, reopen it, and keep working — while quietly reminding yourself that the file you were editing is saved to a synced cloud folder, not just the local drive.",
      whenThisFails: [
        "If Task Manager itself won't open, Ctrl+Alt+Delete and choosing Task Manager from that menu is a reliable backup path",
        "If ending a task doesn't resolve the freeze, a full Restart is the reasonable next step — reserve Shut down for when you're done using the device for a while",
      ],
      teacherReflectionPrompt:
        "Explain out loud when you'd choose End task in Task Manager versus a full Restart versus Shut down, using a real slow-or-frozen-PC situation as your example.",
      quiz: [
        {
          id: "cf-task-manager-restart-backup-q1",
          prompt: "What is the keyboard shortcut to open Task Manager?",
          choices: [
            { id: "a", text: "Ctrl+Shift+Esc" },
            { id: "b", text: "Windows key + I" },
            { id: "c", text: "Alt+Tab" },
            { id: "d", text: "Windows key + E" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+Shift+Esc opens Task Manager directly, even if the screen feels unresponsive.",
          difficulty: "easy",
        },
        {
          id: "cf-task-manager-restart-backup-q2",
          prompt: "Which Task Manager tab lets you force-close a single stuck app?",
          choices: [
            { id: "a", text: "Processes" },
            { id: "b", text: "Performance" },
            { id: "c", text: "Personalization" },
            { id: "d", text: "Windows Update" },
          ],
          correctChoiceId: "a",
          explanation: "The Processes tab lists running apps and lets you right-click one to End task.",
          difficulty: "easy",
        },
        {
          id: "cf-task-manager-restart-backup-q3",
          prompt: "Which tab shows live CPU, memory, disk, and network usage graphs?",
          choices: [
            { id: "a", text: "Performance" },
            { id: "b", text: "Processes" },
            { id: "c", text: "Accounts" },
            { id: "d", text: "Recovery" },
          ],
          correctChoiceId: "a",
          explanation: "The Performance tab shows live resource usage graphs for the whole system.",
          difficulty: "medium",
        },
        {
          id: "cf-task-manager-restart-backup-q4",
          prompt: "What does Restart do that Sleep doesn't?",
          choices: [
            { id: "a", text: "Clears memory for a genuinely fresh start" },
            { id: "b", text: "Both do exactly the same thing" },
            { id: "c", text: "Deletes all installed apps" },
            { id: "d", text: "Disconnects the PC from Wi-Fi permanently" },
          ],
          correctChoiceId: "a",
          explanation: "Restart clears out memory and gives every process a fresh start; Sleep just pauses everything in place.",
          difficulty: "medium",
        },
        {
          id: "cf-task-manager-restart-backup-q5",
          prompt: "What makes a file 'backed up'?",
          choices: [
            { id: "a", text: "A separate copy exists somewhere else — an external drive, cloud service, or another device" },
            { id: "b", text: "It's saved once on the PC's main drive" },
            { id: "c", text: "It has a longer file name" },
            { id: "d", text: "It's stored in the Recycle Bin" },
          ],
          correctChoiceId: "a",
          explanation: "A backup is a separate copy stored somewhere other than the only place the original lives.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-task-manager-restart-backup-b1",
          prompt: "Besides Ctrl+Shift+Esc, what's another way to open Task Manager?",
          choices: [
            { id: "a", text: "Right-click the taskbar, or press Ctrl+Alt+Delete and choose Task Manager" },
            { id: "b", text: "Open Personalization settings" },
            { id: "c", text: "Uninstall an app" },
            { id: "d", text: "There is no other way" },
          ],
          correctChoiceId: "a",
          explanation: "Right-clicking the taskbar, or Ctrl+Alt+Delete, both offer a path to Task Manager.",
        },
        {
          id: "cf-task-manager-restart-backup-b2",
          prompt: "Should you End task on a process you don't recognize at all?",
          choices: [
            { id: "a", text: "No — only end tasks you recognize as something you opened; search first if unsure" },
            { id: "b", text: "Yes, always, to free up resources" },
            { id: "c", text: "It has no consequences either way" },
            { id: "d", text: "Only if the PC is plugged in" },
          ],
          correctChoiceId: "a",
          explanation: "Ending an unrecognized system process can cause instability — verify before ending anything unfamiliar.",
        },
        {
          id: "cf-task-manager-restart-backup-b3",
          prompt: "A CPU graph in the Performance tab is consistently maxed out. What does that suggest?",
          choices: [
            { id: "a", text: "Something is demanding more resources than usual — a legitimate clue, even without a full diagnosis" },
            { id: "b", text: "The PC is definitely broken beyond repair" },
            { id: "c", text: "Windows Update has failed permanently" },
            { id: "d", text: "It means nothing at all" },
          ],
          correctChoiceId: "a",
          explanation: "A maxed-out resource graph is a useful clue pointing toward what's busy, even without pinpointing the exact cause.",
        },
        {
          id: "cf-task-manager-restart-backup-b4",
          prompt: "What's the difference between Restart and Shut down?",
          choices: [
            { id: "a", text: "Restart powers off and back on automatically; Shut down fully powers off and stays off" },
            { id: "b", text: "They are identical actions" },
            { id: "c", text: "Shut down clears memory; Restart does not" },
            { id: "d", text: "Restart deletes installed apps" },
          ],
          correctChoiceId: "a",
          explanation: "Restart automatically powers back on after powering off; Shut down leaves the device off until you turn it on again.",
        },
        {
          id: "cf-task-manager-restart-backup-b5",
          prompt: "What is Sleep best used for?",
          choices: [
            { id: "a", text: "A short break, with work still loaded in memory and the screen off" },
            { id: "b", text: "A full replacement for restarting periodically" },
            { id: "c", text: "Permanently backing up files" },
            { id: "d", text: "Uninstalling apps" },
          ],
          correctChoiceId: "a",
          explanation: "Sleep is a low-power pause suited to short breaks, not a substitute for an occasional full restart.",
        },
        {
          id: "cf-task-manager-restart-backup-b6",
          prompt: "Why is 'have you tried restarting it' a genuinely useful troubleshooting step, not just a cliché?",
          choices: [
            { id: "a", text: "It clears memory and resolves a large share of everyday glitches" },
            { id: "b", text: "It always fixes hardware failures" },
            { id: "c", text: "It's only said to end a support call quickly" },
            { id: "d", text: "It has no real technical effect" },
          ],
          correctChoiceId: "a",
          explanation: "Restarting gives every running process a genuinely fresh start, which resolves many common glitches.",
        },
        {
          id: "cf-task-manager-restart-backup-b7",
          prompt: "A device is lost or its hard drive fails, and a file is gone for good. What does this usually reveal?",
          choices: [
            { id: "a", text: "The file was likely never backed up — it only existed in one place" },
            { id: "b", text: "Backups always prevent this outcome automatically" },
            { id: "c", text: "The file was deleted on purpose" },
            { id: "d", text: "This can never actually happen" },
          ],
          correctChoiceId: "a",
          explanation: "This is the most common real-world data-loss story: a file that only ever existed in one place, with no backup.",
        },
        {
          id: "cf-task-manager-restart-backup-b8",
          prompt: "A single work app freezes right before a deadline. What's the best first move?",
          choices: [
            { id: "a", text: "Open Task Manager and End task on just that app" },
            { id: "b", text: "Restart the entire PC immediately" },
            { id: "c", text: "Shut down and leave the PC off" },
            { id: "d", text: "Uninstall the app permanently" },
          ],
          correctChoiceId: "a",
          explanation: "Ending just the frozen app via Task Manager is faster and less disruptive than restarting the whole PC.",
        },
      ],
      flashcards: [
        {
          id: "cf-task-manager-restart-backup-f1",
          front: "Task Manager shortcut?",
          back: "Ctrl+Shift+Esc",
        },
        {
          id: "cf-task-manager-restart-backup-f2",
          front: "Processes tab lets you...",
          back: "End task on one stuck app",
        },
        {
          id: "cf-task-manager-restart-backup-f3",
          front: "Restart vs. Sleep?",
          back: "Restart clears memory for a fresh start; Sleep is a low-power pause",
        },
        {
          id: "cf-task-manager-restart-backup-f4",
          front: "What is a backup?",
          back: "A separate copy of your files kept somewhere else",
        },
        {
          id: "cf-task-manager-restart-backup-f5",
          front: "Rule for 'is this backed up'?",
          back: "If it only exists in one place, it's not backed up",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard", "external-lab"],
      assignments: [
        {
          id: "cf-lab-task-manager",
          title: "Lab: Open Task Manager and Identify Processes & Performance",
          type: "external-lab",
          instructions: `Practice on a real Windows 11 PC you are allowed to use for hands-on learning.

Safety boundaries: this lab is read-only. You will open Task Manager and look around — you will not end any tasks, change any settings, or install/uninstall anything. Nothing on the PC changes during this lab.

Steps (Windows 11):
1. Press Ctrl+Shift+Esc to open Task Manager.
2. Click the Processes tab. Identify at least one app you recognize (something you opened yourself) and at least one background process.
3. Note roughly how much CPU and memory the busiest item is using — you don't need exact numbers, just a general sense.
4. Click the Performance tab. Identify the CPU, Memory, and Disk graphs, and note whether any of them look consistently high right now.
5. Close Task Manager without ending any tasks or changing any settings.

Rollback: nothing was changed — this lab only involves looking, not modifying anything. There is nothing to undo.

Windows 10 note (legacy): Ctrl+Shift+Esc and the Processes/Performance tabs work the same way on Windows 10; only minor visual layout differences exist.

Mobile-only fallback: if you do not have access to a Windows 11 PC right now, re-read this topic's guided example and describe out loud (or in writing) which tab you would check first if an app on your own phone or tablet felt unresponsive, and revisit this lab the next time you can use a real desktop or laptop.`,
          estimatedMinutes: 10,
          externalResourceId: "windows-11-pc",
          completionCriteria: [
            "Opened Task Manager using Ctrl+Shift+Esc",
            "Identified the Processes tab and named at least one running app",
            "Identified the Performance tab and noted current CPU and memory usage",
            "Closed Task Manager without ending any tasks or changing any settings",
          ],
          relatedTopicIds: ["cf-task-manager-restart-backup"],
          order: 1,
        },
      ],
      externalResources: [WINDOWS_11_PC_RESOURCE],
      estimatedStudyMinutes: 22,
      difficulty: "medium",
    },
  ],
};
