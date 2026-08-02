import type { Topic } from "../../types";

/**
 * Computer Fundamentals — Module 1 (Orientation & Confidence), extra topics.
 * Extends the F1 pilot (`cf-what-is-a-computer`, `cf-hardware-vs-software`) with
 * device literacy, OS/app/account vocabulary, safe Settings exploration, and
 * windows/dialogs mechanics. Prose lessons — no LES experience yet (first pass).
 */
export const cfOrientationExtraTopics: Topic[] = [
  {
    id: "cf-device-types",
    name: "Device Types: Desktop, Laptop, Phone, Tablet & Server",
    prerequisites: ["cf-what-is-a-computer"],
    objectives: ["CF-M1-O1", "CF-M1-O2", "CF-M1-O3"],
    lesson: {
      title: "Device Types: Desktop, Laptop, Phone, Tablet & Server",
      content: `Every device you touch in a day — a phone, a laptop at work, a tablet on the couch, a desktop in an office, a server you'll probably never see — runs the same four-layer stack from the previous topic: hardware, operating system, apps, you. What changes from one device to the next isn't that idea, it's the shape: how much hardware fits inside, how it's powered, and who the device is actually meant to be used by.

A desktop computer splits its parts into separate pieces: a case (sometimes called a "tower") full of internal components, plus a monitor, keyboard, and mouse that plug into it. It usually stays plugged into wall power at all times and doesn't move. That separation makes desktops easier to repair and upgrade one piece at a time, which is part of why offices and workshops still rely on them heavily.

A laptop takes the same basic stack and folds it into one portable case — screen, keyboard, trackpad, and battery all built in. You trade some of that easy piece-by-piece upgradeability for the ability to close the lid and take it anywhere. Under the hood, though, a laptop runs the exact same kind of operating system and the exact same apps a desktop does — nothing about "portable" makes it a lesser computer.

Phones and tablets are touch-first devices: no built-in physical keyboard by default, controlled mainly by tapping and swiping a screen. They run mobile operating systems — a genuinely different OS family from what desktops and laptops run, which the next topic covers by name. Apps on phones and tablets are often simplified, touch-optimized versions of a desktop app rather than identical twins. That makes phones and tablets excellent for quick tasks and less suited to heavy typing or juggling many windows at once.

A server is the device most people never directly touch, and it's built for a different job entirely: instead of serving one person sitting in front of it, a server runs continuously and responds to requests coming in from other devices — a website loading, an email arriving, a streaming video starting. Many servers are "headless," meaning no monitor or keyboard is even attached; they sit in a rack inside a server room or data center, watched over remotely. Every account you log into — email, banking, streaming — is quietly talking to servers behind the scenes, even though you'll rarely see one in person.

None of these device types is "better" in some universal sense. Each is shaped for a different job: a desktop for a stationary, upgradeable workstation; a laptop for the same power in a portable case; a phone or tablet for quick, touch-first tasks; a server for running unattended and serving requests from many other devices at once. Recognizing the shape and the job — not just the brand or the screen size — is what lets you follow a workplace conversation ("the server is down," "grab your laptop for the meeting") without translating in your head first.`,
    },
    lightbulbMoment:
      "Desktop, laptop, phone, tablet, and server all run the same stack — the shape and the job change, not the underlying idea.",
    keyFacts: [
      "Desktop, laptop, phone, tablet, and server are all built on the same hardware → OS → apps → you stack — the shape and role change, not the underlying idea",
      "Desktops separate the case, monitor, keyboard, and mouse into individual parts; laptops combine all of them into one portable case",
      "Phones and tablets are touch-first and run mobile operating systems, a different OS family from Windows/macOS/Linux",
      "A server is built to run continuously and respond to requests from other devices, not for one person to sit in front of directly",
      "Most servers are 'headless' — no monitor or keyboard attached — and live in a rack in a server room or data center",
    ],
    guidedExample: {
      title: "Match the Device to the Job",
      steps: [
        "You need to write a long report using a full keyboard and a large screen — a desktop or laptop fits best.",
        "You need to check an email quickly while waiting in line — a phone fits best.",
        "Your company's website needs to stay online 24/7 for thousands of customers — that's a server's job, not a laptop's.",
        "You want to read on the couch with a touch screen and no typing — a tablet fits best.",
        "None of these devices is 'better' in general — each is shaped for a different job.",
      ],
    },
    commonMistakes: [
      "Assuming a server is just 'a really powerful desktop' rather than a different-purpose machine built to run unattended",
      "Thinking phone and tablet apps are identical to their desktop versions instead of touch-optimized variants",
      "Believing a laptop can't do 'real work' because it's portable — it runs the same OS and apps as a desktop",
      "Assuming every computer has a monitor and keyboard attached, which rules out headless servers",
    ],
    realWorldTraps: [
      "A job posting lists 'server administration experience' — that means headless, always-on machines, not desktop troubleshooting",
      "A coworker says 'the server is down,' meaning a shared background machine, not anyone's personal laptop",
      "Some 2-in-1 devices blur the categories (a tablet that runs a full desktop-style OS) — device shape alone doesn't always tell you the OS family, so it's fine to verify rather than guess by looks alone",
    ],
    realWorldScenario:
      "IT asks you to 'check if the print server is responding.' Because you know a server is a background machine — not something with a screen someone sits in front of — you don't walk over looking for a monitor; you check its status from your own device instead.",
    whenThisFails: [
      "If you're unsure whether something is a server or a regular PC, ask: 'who or what is this meant to respond to — a person sitting here, or requests from other devices?'",
      "If a device blurs categories (like a 2-in-1 laptop/tablet), it's fine to say 'it's both' — the categories are a learning tool, not a rigid rulebook",
    ],
    teacherReflectionPrompt:
      "In your own words, explain to someone why a server your company uses isn't just 'a bigger laptop,' using the idea of who or what the device serves.",
    quiz: [
      {
        id: "cf-device-types-q1",
        prompt: "Which best describes a desktop computer?",
        choices: [
          { id: "a", text: "Screen, keyboard, and battery built into one portable case" },
          { id: "b", text: "Case, monitor, keyboard, and mouse as separate pieces, usually plugged into wall power" },
          { id: "c", text: "A touch-first device with no keyboard by default" },
          { id: "d", text: "A device with no monitor or keyboard attached at all" },
        ],
        correctChoiceId: "b",
        explanation: "A desktop separates its parts — case, monitor, keyboard, mouse — and typically stays plugged in at one location.",
        difficulty: "easy",
      },
      {
        id: "cf-device-types-q2",
        prompt: "What makes a laptop different from a desktop, while running the same basic stack?",
        choices: [
          { id: "a", text: "It combines screen, keyboard, and battery into one portable case" },
          { id: "b", text: "It cannot run the same operating system as a desktop" },
          { id: "c", text: "It has no apps layer at all" },
          { id: "d", text: "It only works while plugged into wall power" },
        ],
        correctChoiceId: "a",
        explanation: "A laptop folds the same hardware/OS/apps stack into one portable case, trading some upgradeability for portability.",
        difficulty: "easy",
      },
      {
        id: "cf-device-types-q3",
        prompt: "What is a server primarily built to do?",
        choices: [
          { id: "a", text: "Sit on a desk for one person to use directly" },
          { id: "b", text: "Run continuously and respond to requests from other devices" },
          { id: "c", text: "Replace a phone for quick, touch-first tasks" },
          { id: "d", text: "Only run during business hours" },
        ],
        correctChoiceId: "b",
        explanation: "A server runs unattended and responds to requests from many other devices, rather than serving one person in front of it.",
        difficulty: "medium",
      },
      {
        id: "cf-device-types-q4",
        prompt: "Why are many servers described as 'headless'?",
        choices: [
          { id: "a", text: "They have no monitor or keyboard attached" },
          { id: "b", text: "They cannot run an operating system" },
          { id: "c", text: "They are always broken" },
          { id: "d", text: "They only exist as phone apps" },
        ],
        correctChoiceId: "a",
        explanation: "'Headless' means no monitor or keyboard is attached — the server is managed remotely instead.",
        difficulty: "medium",
      },
      {
        id: "cf-device-types-q5",
        prompt: "Phones and tablets typically run which kind of operating system?",
        choices: [
          { id: "a", text: "The exact same OS as desktops and laptops" },
          { id: "b", text: "No operating system at all" },
          { id: "c", text: "A mobile operating system, a different family from desktop/laptop OS" },
          { id: "d", text: "Only server operating systems" },
        ],
        correctChoiceId: "c",
        explanation: "Phones and tablets run mobile operating systems — a genuinely different OS family, covered by name in the next topic.",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "cf-device-types-b1",
        prompt: "Why do offices often keep using desktops instead of only laptops?",
        choices: [
          { id: "a", text: "Desktops are easier to repair and upgrade one piece at a time" },
          { id: "b", text: "Desktops don't run apps" },
          { id: "c", text: "Laptops cannot connect to monitors" },
          { id: "d", text: "Desktops are always cheaper" },
        ],
        correctChoiceId: "a",
        explanation: "Separating the case, monitor, keyboard, and mouse makes desktops easier to repair or upgrade piece by piece.",
      },
      {
        id: "cf-device-types-b2",
        prompt: "Where do many servers physically live?",
        choices: [
          { id: "a", text: "On an office desk next to a keyboard" },
          { id: "b", text: "In a rack inside a server room or data center" },
          { id: "c", text: "Inside a phone" },
          { id: "d", text: "They have no physical location" },
        ],
        correctChoiceId: "b",
        explanation: "Servers commonly live in racks inside server rooms or data centers, managed remotely.",
      },
      {
        id: "cf-device-types-b3",
        prompt: "Why does 'who or what a device serves' matter when identifying it?",
        choices: [
          { id: "a", text: "It helps distinguish a personal device from a shared background machine like a server" },
          { id: "b", text: "It determines the device's color" },
          { id: "c", text: "It has no practical use" },
          { id: "d", text: "It only matters for phones" },
        ],
        correctChoiceId: "a",
        explanation: "Asking who or what a device is meant to serve is a fast way to tell a personal computer from a shared/background machine.",
      },
      {
        id: "cf-device-types-b4",
        prompt: "A relative says 'I need something I can check email on while standing in line.' What fits best?",
        choices: [
          { id: "a", text: "A server" },
          { id: "b", text: "A desktop" },
          { id: "c", text: "A phone" },
          { id: "d", text: "None of these can check email" },
        ],
        correctChoiceId: "c",
        explanation: "A phone is the touch-first, pocketable device best suited to a quick task like checking email while standing in line.",
      },
      {
        id: "cf-device-types-b5",
        prompt: "Why is 'a server is just a bigger desktop' a misleading idea?",
        choices: [
          { id: "a", text: "Servers run continuously to serve requests from other devices, not one person directly" },
          { id: "b", text: "Servers are smaller than phones" },
          { id: "c", text: "Servers don't use hardware" },
          { id: "d", text: "It's actually accurate" },
        ],
        correctChoiceId: "a",
        explanation: "A server's job — serving many other devices continuously — is fundamentally different from a personal workstation's job.",
      },
      {
        id: "cf-device-types-b6",
        prompt: "What's typically different about a mobile app compared to its desktop version?",
        choices: [
          { id: "a", text: "It's often a simplified, touch-optimized variant" },
          { id: "b", text: "It's always identical in every way" },
          { id: "c", text: "It can only run on a server" },
          { id: "d", text: "It has no relationship to the desktop version" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile apps are frequently simplified, touch-first variants of a desktop app rather than exact copies.",
      },
      {
        id: "cf-device-types-b7",
        prompt: "What's the main tradeoff a laptop makes compared to a desktop?",
        choices: [
          { id: "a", text: "Portability in exchange for some easy piece-by-piece upgradeability" },
          { id: "b", text: "It runs a different operating system entirely" },
          { id: "c", text: "It has no apps layer" },
          { id: "d", text: "It cannot be plugged into wall power" },
        ],
        correctChoiceId: "a",
        explanation: "A laptop folds everything into one portable case, trading some easy upgrade/repair access for portability.",
      },
      {
        id: "cf-device-types-b8",
        prompt: "A coworker mentions 'server administration.' What does that most likely refer to?",
        choices: [
          { id: "a", text: "Managing headless, always-on machines that serve other devices" },
          { id: "b", text: "Fixing a single employee's personal laptop" },
          { id: "c", text: "Setting up a new phone" },
          { id: "d", text: "Choosing a desktop background" },
        ],
        correctChoiceId: "a",
        explanation: "Server administration refers to managing always-on, often headless machines that serve requests from other devices.",
      },
    ],
    flashcards: [
      {
        id: "cf-device-types-f1",
        front: "What's common to desktop, laptop, phone, tablet, and server?",
        back: "The same four-layer stack (hardware → OS → apps → you) — the shape and role change, not the underlying idea",
      },
      {
        id: "cf-device-types-f2",
        front: "How does a laptop differ physically from a desktop?",
        back: "It combines the case, screen, keyboard, and battery into one portable unit",
      },
      {
        id: "cf-device-types-f3",
        front: "What is a server built for?",
        back: "Running continuously and responding to requests from other devices, not one person directly",
      },
      {
        id: "cf-device-types-f4",
        front: "What does 'headless' mean for a server?",
        back: "No monitor or keyboard is attached",
      },
      {
        id: "cf-device-types-f5",
        front: "What OS family do phones and tablets typically run?",
        back: "A mobile operating system — a different family from desktop/laptop OS",
      },
    ],
    practiceType: ["reading", "quiz", "flashcard"],
    estimatedStudyMinutes: 15,
    difficulty: "easy",
  },
  {
    id: "cf-operating-systems",
    name: "Operating Systems: What They Do (and Which One You're Using)",
    prerequisites: ["cf-device-types"],
    objectives: ["CF-M1-O4", "CF-M1-O5", "CF-M1-O6"],
    lesson: {
      title: "Operating Systems: What They Do (and Which One You're Using)",
      content: `The operating system, or OS, is the layer that starts the machine, manages the hardware underneath, keeps every app from fighting over the same resources, and gives you a consistent way to interact with the device — windows and icons on a desktop, or taps and swipes on a phone. Every device from the last topic has one; what differs is which OS family it runs and what that OS looks like on screen.

Windows 11 is the primary OS taught throughout this course, because it's the OS most home and office desktops and laptops run today. When someone at work says "restart your computer," they almost always mean Windows 11 — or Windows 10 on an older setup that hasn't been upgraded yet.

Two other desktop/laptop OS families are worth recognizing by name, without a deep dive: macOS is Apple's operating system, found on MacBooks and iMacs, doing the same basic job as Windows with a different look and different keyboard shortcuts. Linux is an open-source OS family with many different versions (called distributions); it quietly runs a large share of the world's servers and shows up on some desktops and laptops too. You don't need to operate either one for this course — you need to recognize the name so you're not caught off guard.

On the mobile side, two OS families cover almost every phone and tablet: Android, made by Google and used by many different phone manufacturers, and iOS, made by Apple exclusively for the iPhone (iPads run a closely related variant called iPadOS). Both are touch-first, app-store-driven operating systems — conceptually similar to Windows, but a genuinely different OS family from anything on a desktop or laptop.

Recognizing which OS you're on matters for a very practical reason: help articles, keyboard shortcuts, and troubleshooting steps are OS-specific. "How do I take a screenshot?" has a completely different answer on Windows 11, macOS, Android, and iOS. Naming the OS before you search or ask for help — "on Windows 11, how do I…" — saves real time and avoids following instructions meant for a different system entirely.

If you're ever unsure which OS or version a Windows 11 PC is running, Settings > System > About shows you directly, in plain text, with no guesswork required. That single screen is worth remembering, because it's the fastest way to confirm what you're working with before diving into any other setting.

You don't need to master every OS family to be comfortable on a computer. You need to recognize the major names, know that Windows 11 is this course's home base, and know exactly where to check when you're not sure. That's a realistic, achievable bar — and it's the one this course holds you to.`,
    },
    lightbulbMoment:
      "You don't need to master every OS — you need to recognize the major names and know where to check which one you're on.",
    keyFacts: [
      "The operating system (OS) manages hardware, runs apps, and gives you a consistent way to interact with the device",
      "Windows 11 is this course's primary OS — most home/office desktops and laptops taught here run it",
      "macOS (Apple) and Linux (open-source) are other desktop/laptop OS families with the same basic job as Windows, different look and commands",
      "Android (many phone makers) and iOS (Apple/iPhone only) are the two major mobile OS families",
      "Settings > System > About in Windows 11 tells you exactly which OS version you're running",
    ],
    guidedExample: {
      title: "Recognize the OS Before You Search for Help",
      steps: [
        "A friend's laptop has an Apple logo and a menu bar at the top of the screen — that's macOS, not Windows.",
        "Your work desktop shows a Start button and taskbar at the bottom — that's Windows, most likely Windows 11.",
        "Your phone has a Google Play Store — that's Android.",
        "Your phone has an App Store and is made by Apple — that's iOS.",
        "Before searching 'how do I take a screenshot,' add the OS name to the search so you get instructions that actually match your device.",
      ],
    },
    commonMistakes: [
      "Searching for help without naming the OS, then following instructions meant for a different operating system",
      "Assuming every computer runs Windows just because that's what this course teaches first",
      "Confusing Android or iOS (mobile OS) with Windows or macOS (desktop OS) — they are not interchangeable",
      "Thinking Linux is rare or irrelevant — it quietly runs a large share of servers and some everyday devices",
    ],
    realWorldTraps: [
      "A coworker with a Mac gives you keyboard shortcuts that don't exist on your Windows 11 PC (and vice versa) — always confirm which OS a tip applies to before trying it",
      "IT support scripts sometimes assume Windows by default — say 'I'm on a Mac' or 'this is Linux' immediately if that's the case, to avoid wrong instructions",
      "Some job tools only run on specific OS families — checking OS compatibility before starting a task avoids wasted setup time",
    ],
    realWorldScenario:
      "A help article says 'right-click the Start button,' but you're on a friend's device with no Start button at all — recognizing that other OS families don't share every Windows feature stops you from hunting for something that doesn't exist there.",
    whenThisFails: [
      "If you genuinely don't know which OS a device runs, check the logo/branding on the device or open its 'About this device' screen — every major OS has one",
      "If instructions clearly don't match what's on your screen, stop and re-search with the specific OS name added",
    ],
    teacherReflectionPrompt:
      "Explain out loud the difference between an operating system 'family' (like Windows) and a specific version (like Windows 11), using an example from your own devices.",
    quiz: [
      {
        id: "cf-operating-systems-q1",
        prompt: "What is the main job of an operating system?",
        choices: [
          { id: "a", text: "Manage hardware, run apps, and provide a consistent way to interact with the device" },
          { id: "b", text: "Physically power the device" },
          { id: "c", text: "Replace the need for any apps" },
          { id: "d", text: "Only display a wallpaper" },
        ],
        correctChoiceId: "a",
        explanation: "The OS manages hardware, runs apps, and gives you a consistent interface, whether windows and icons or taps and swipes.",
        difficulty: "easy",
      },
      {
        id: "cf-operating-systems-q2",
        prompt: "Which operating system is primary for this course?",
        choices: [
          { id: "a", text: "macOS" },
          { id: "b", text: "Windows 11" },
          { id: "c", text: "Android" },
          { id: "d", text: "Linux" },
        ],
        correctChoiceId: "b",
        explanation: "Windows 11 is the primary OS taught throughout this course, with Windows 10 differences called out as legacy notes.",
        difficulty: "easy",
      },
      {
        id: "cf-operating-systems-q3",
        prompt: "Which of the following is a mobile operating system family?",
        choices: [
          { id: "a", text: "Windows" },
          { id: "b", text: "macOS" },
          { id: "c", text: "Android" },
          { id: "d", text: "Linux" },
        ],
        correctChoiceId: "c",
        explanation: "Android is a mobile OS family used by many phone manufacturers, distinct from desktop/laptop OS families.",
        difficulty: "medium",
      },
      {
        id: "cf-operating-systems-q4",
        prompt: "Why does naming the OS matter before searching for help online?",
        choices: [
          { id: "a", text: "Help instructions and shortcuts are OS-specific" },
          { id: "b", text: "It doesn't matter — all OS families work identically" },
          { id: "c", text: "Search engines require it" },
          { id: "d", text: "Only IT professionals need to know the OS" },
        ],
        correctChoiceId: "a",
        explanation: "Instructions like screenshot shortcuts differ completely between OS families, so naming it first gets you the right answer.",
        difficulty: "medium",
      },
      {
        id: "cf-operating-systems-q5",
        prompt: "Where do you check exactly which Windows version you're running?",
        choices: [
          { id: "a", text: "Settings > System > About" },
          { id: "b", text: "The Recycle Bin" },
          { id: "c", text: "The taskbar clock" },
          { id: "d", text: "There is no way to check" },
        ],
        correctChoiceId: "a",
        explanation: "Settings > System > About shows the exact OS version and edition in plain text.",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "cf-operating-systems-b1",
        prompt: "What is macOS?",
        choices: [
          { id: "a", text: "Apple's desktop/laptop operating system, used on MacBooks and iMacs" },
          { id: "b", text: "A mobile OS for Android phones" },
          { id: "c", text: "A version of Windows" },
          { id: "d", text: "A brand of laptop hardware only" },
        ],
        correctChoiceId: "a",
        explanation: "macOS is Apple's desktop/laptop OS, doing the same basic job as Windows with a different appearance and shortcuts.",
      },
      {
        id: "cf-operating-systems-b2",
        prompt: "What is Linux best known for, in this course's context?",
        choices: [
          { id: "a", text: "An open-source OS family that runs a large share of servers and some desktops/laptops" },
          { id: "b", text: "A mobile-only OS" },
          { id: "c", text: "A brand of phone" },
          { id: "d", text: "A type of app store" },
        ],
        correctChoiceId: "a",
        explanation: "Linux is an open-source OS family with many distributions, common on servers and some personal devices.",
      },
      {
        id: "cf-operating-systems-b3",
        prompt: "Who makes iOS, and what device does it run on?",
        choices: [
          { id: "a", text: "Apple, exclusively on the iPhone" },
          { id: "b", text: "Google, on many phone brands" },
          { id: "c", text: "Microsoft, on desktops" },
          { id: "d", text: "It runs on any brand of phone" },
        ],
        correctChoiceId: "a",
        explanation: "iOS is Apple's mobile OS, built exclusively for the iPhone (iPads run the related iPadOS).",
      },
      {
        id: "cf-operating-systems-b4",
        prompt: "Your phone has a Google Play Store. What OS is it most likely running?",
        choices: [
          { id: "a", text: "Android" },
          { id: "b", text: "iOS" },
          { id: "c", text: "macOS" },
          { id: "d", text: "Windows" },
        ],
        correctChoiceId: "a",
        explanation: "The Google Play Store is associated with Android, used across many phone manufacturers.",
      },
      {
        id: "cf-operating-systems-b5",
        prompt: "Why isn't 'the computer' automatically assumed to run Windows in every situation?",
        choices: [
          { id: "a", text: "Devices may run macOS, Linux, or a mobile OS instead, each with different instructions" },
          { id: "b", text: "All computers technically run the same OS underneath" },
          { id: "c", text: "Windows is the only real operating system" },
          { id: "d", text: "It doesn't matter which OS a device runs" },
        ],
        correctChoiceId: "a",
        explanation: "Different devices run different OS families, and instructions/shortcuts don't transfer automatically between them.",
      },
      {
        id: "cf-operating-systems-b6",
        prompt: "A friend's device has an Apple logo and a menu bar at the top of the screen. What OS is that most likely?",
        choices: [
          { id: "a", text: "macOS" },
          { id: "b", text: "Android" },
          { id: "c", text: "Windows" },
          { id: "d", text: "Linux" },
        ],
        correctChoiceId: "a",
        explanation: "An Apple logo with a top menu bar on a laptop/desktop is a strong visual signal for macOS.",
      },
      {
        id: "cf-operating-systems-b7",
        prompt: "What's the relationship between Windows 10 and Windows 11?",
        choices: [
          { id: "a", text: "Both are versions within the same Windows OS family" },
          { id: "b", text: "They are unrelated operating systems" },
          { id: "c", text: "Windows 10 is a mobile OS" },
          { id: "d", text: "Windows 11 is made by a different company" },
        ],
        correctChoiceId: "a",
        explanation: "Windows 10 and Windows 11 are both versions of the same Windows OS family, sharing most core concepts.",
      },
      {
        id: "cf-operating-systems-b8",
        prompt: "Why is it useful to add the OS name when searching for a how-to guide?",
        choices: [
          { id: "a", text: "It filters results to instructions that will actually match what's on your screen" },
          { id: "b", text: "It's required by law" },
          { id: "c", text: "It changes your operating system" },
          { id: "d", text: "It has no effect on search results" },
        ],
        correctChoiceId: "a",
        explanation: "Adding the OS name narrows search results to instructions written for the system you're actually using.",
      },
    ],
    flashcards: [
      {
        id: "cf-operating-systems-f1",
        front: "What is the main job of an OS?",
        back: "Manage hardware, run apps, and give a consistent way to interact with the device",
      },
      {
        id: "cf-operating-systems-f2",
        front: "This course's primary OS?",
        back: "Windows 11",
      },
      {
        id: "cf-operating-systems-f3",
        front: "Two major mobile OS families?",
        back: "Android and iOS",
      },
      {
        id: "cf-operating-systems-f4",
        front: "Where do you check your Windows version?",
        back: "Settings > System > About",
      },
      {
        id: "cf-operating-systems-f5",
        front: "Two other desktop OS families besides Windows?",
        back: "macOS and Linux",
      },
    ],
    practiceType: ["reading", "quiz", "flashcard"],
    estimatedStudyMinutes: 15,
    difficulty: "easy",
  },
  {
    id: "cf-apps-and-accounts",
    name: "Apps vs. the Operating System — and Local vs. Microsoft Accounts",
    prerequisites: ["cf-operating-systems"],
    objectives: ["CF-M1-O7", "CF-M1-O8", "CF-M1-O9"],
    lesson: {
      title: "Apps vs. the Operating System — and Local vs. Microsoft Accounts",
      content: `You've already met the four-layer stack and the idea of an OS family. Now it's time to zoom into two things that get conflated constantly, even by people who use computers every day: apps versus the OS itself, and the account you sign in with.

Apps are separate, installable programs — Word, a web browser, a game, a video-calling tool — that live on top of the operating system. You can add or remove apps freely without touching the OS underneath. The OS keeps running exactly the same before and after any single app is installed or removed, which is why "the app crashed" is never the same statement as "Windows crashed."

Some apps come pre-installed with Windows 11 — Notepad, Calculator, Photos, Microsoft Edge — and can feel like "part of Windows" because they're already there on day one. They aren't part of the OS itself, though; they're still separate apps that can be updated on their own schedule, and in several cases replaced entirely (installing Chrome or Firefox instead of relying only on Edge, for example).

Now the account layer. When you sign into Windows 11, you use one of two account types. A local account lives only on that one PC — no cloud sync, no online tie-in, the simplest option. A Microsoft account is email-based (an outlook.com, hotmail.com, or live.com address, or any email you've linked to one), and it syncs settings and files across devices through OneDrive, plus unlocks Microsoft Store purchases and certain built-in features.

Neither account type is the "correct" one — they're a genuine tradeoff. A local account offers more privacy and simplicity, with no cross-device syncing, which suits a single offline or shared machine well. A Microsoft account offers convenient sync and password-recovery options, at the cost of tying that PC to an online identity. You get to choose deliberately, once you understand what each option actually does.

There's a workplace nuance worth knowing in advance: many work and school PCs use a managed account — a Microsoft-style account that an organization controls centrally. Under a managed account, IT sets more of the rules, and some Settings screens may be locked or hidden. That's expected behavior for a managed device, not something you broke, and it's fine to say "that's not my personal account — IT manages this one" when it comes up.

Putting both ideas together gives you a genuinely useful troubleshooting habit: when something goes wrong, ask "is this an app problem, an account problem, or an OS problem?" before assuming the worst. Most of the time, the answer narrows the fix down to something small and fixable — closing one frozen app, or checking which account you're signed into — instead of a mystery that feels like it requires starting over.`,
    },
    lightbulbMoment:
      "'App problem, account problem, or OS problem?' is a genuinely useful first question — it usually narrows the fix to something small.",
    keyFacts: [
      "Apps are separate programs installed on top of the OS — you can add, update, or remove them without affecting the OS itself",
      "Some apps (Notepad, Calculator, Edge) come pre-installed with Windows 11 but are still separate, independently updatable apps",
      "A local account lives only on that one PC and does not sync across devices",
      "A Microsoft account is email-based, syncs settings/files via OneDrive, and is required for some Store purchases and features",
      "Work/school PCs often use a managed account controlled by an organization, with different rules than a personal account",
    ],
    guidedExample: {
      title: "App Crash vs. Account Confusion",
      steps: [
        "Microsoft Edge freezes — that's an app-layer issue, not proof that Windows itself is broken.",
        "You close Edge, and the rest of Windows keeps working normally — confirming it was just that one app.",
        "You try to install a new app from the Microsoft Store and it asks you to sign in — that's the account layer, not an app problem.",
        "You check Settings > Accounts to see whether you're signed in with a local account or a Microsoft account.",
        "Naming which layer — app, account, or OS — is the issue narrows down what to actually fix.",
      ],
    },
    commonMistakes: [
      "Restarting the whole PC when only one app has frozen",
      "Assuming a pre-installed app like Edge or Photos can't be replaced or is 'part of Windows itself'",
      "Not knowing whether you're signed in with a local or Microsoft account, then being confused when settings don't sync (or do sync) across devices",
      "Treating a work-managed account like a personal Microsoft account and expecting full control over its settings",
    ],
    realWorldTraps: [
      "A workplace IT team may restrict which apps you can install under a managed account — that's policy, not something broken on your end",
      "Losing access to a Microsoft account can lock you out of purchased apps and OneDrive files — knowing your account type in advance helps you set up recovery options ahead of time",
      "Some 'free' apps outside the Microsoft Store are less trustworthy than Store apps — a later security module covers vetting apps safely",
    ],
    realWorldScenario:
      "A new laptop asks during setup: 'Sign in with a Microsoft account or create a local account?' Understanding the tradeoff — sync and recovery versus simplicity and privacy — lets you make a deliberate choice in seconds instead of clicking through in confusion.",
    whenThisFails: [
      "If you're not sure which account you're using, open Settings > Accounts — it tells you directly",
      "If an app truly won't open no matter what, that's still an apps-layer problem first; restarting the whole PC is a reasonable next step only after closing and reopening the app itself doesn't help",
    ],
    teacherReflectionPrompt:
      "Explain the difference between a local account and a Microsoft account to someone setting up their first Windows 11 PC, including one reason someone might prefer each.",
    quiz: [
      {
        id: "cf-apps-and-accounts-q1",
        prompt: "What happens to the OS when you install or remove an app?",
        choices: [
          { id: "a", text: "It keeps running normally, unaffected" },
          { id: "b", text: "It must be reinstalled" },
          { id: "c", text: "It automatically switches accounts" },
          { id: "d", text: "It stops working until restarted" },
        ],
        correctChoiceId: "a",
        explanation: "Apps live on top of the OS; installing or removing one doesn't affect the OS itself.",
        difficulty: "easy",
      },
      {
        id: "cf-apps-and-accounts-q2",
        prompt: "Which of these is true about a local account?",
        choices: [
          { id: "a", text: "It lives only on that PC, with no cloud sync" },
          { id: "b", text: "It automatically syncs to every device you own" },
          { id: "c", text: "It's required for all app installs" },
          { id: "d", text: "It's controlled entirely by Microsoft's servers" },
        ],
        correctChoiceId: "a",
        explanation: "A local account exists only on one PC and has no cross-device cloud sync.",
        difficulty: "easy",
      },
      {
        id: "cf-apps-and-accounts-q3",
        prompt: "Which of these typically requires signing in with a Microsoft account?",
        choices: [
          { id: "a", text: "Opening File Explorer" },
          { id: "b", text: "Microsoft Store purchases and certain built-in features" },
          { id: "c", text: "Adjusting screen brightness" },
          { id: "d", text: "Opening Notepad" },
        ],
        correctChoiceId: "b",
        explanation: "Store purchases and some features are tied to a Microsoft account, not a local account.",
        difficulty: "medium",
      },
      {
        id: "cf-apps-and-accounts-q4",
        prompt: "A pre-installed app like Edge crashes. What layer is most likely affected?",
        choices: [
          { id: "a", text: "The hardware layer" },
          { id: "b", text: "The apps layer" },
          { id: "c", text: "The account layer" },
          { id: "d", text: "There's no way to know" },
        ],
        correctChoiceId: "b",
        explanation: "A single app crashing, even a pre-installed one, is an apps-layer issue rather than an OS or hardware failure.",
        difficulty: "medium",
      },
      {
        id: "cf-apps-and-accounts-q5",
        prompt: "What is a managed account typically associated with?",
        choices: [
          { id: "a", text: "A workplace or school controlling settings on that device" },
          { id: "b", text: "A brand-new personal PC with no restrictions" },
          { id: "c", text: "A device that cannot install any apps at all" },
          { id: "d", text: "A local account with no online tie-in" },
        ],
        correctChoiceId: "a",
        explanation: "Managed accounts are controlled by an organization (workplace or school), which sets rules and may restrict settings.",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "cf-apps-and-accounts-b1",
        prompt: "Can a pre-installed app like Photos or Edge be replaced with a different app?",
        choices: [
          { id: "a", text: "Yes — pre-installed apps are still separate, replaceable apps" },
          { id: "b", text: "No — they are permanently fused to the OS" },
          { id: "c", text: "Only on Windows 10, not Windows 11" },
          { id: "d", text: "Only with a Microsoft account" },
        ],
        correctChoiceId: "a",
        explanation: "Pre-installed apps are still independent apps and can often be replaced by an alternative (e.g., Chrome instead of Edge).",
      },
      {
        id: "cf-apps-and-accounts-b2",
        prompt: "What does a Microsoft account sync across devices?",
        choices: [
          { id: "a", text: "Settings and files, via OneDrive" },
          { id: "b", text: "Nothing — it works exactly like a local account" },
          { id: "c", text: "Only the desktop wallpaper" },
          { id: "d", text: "The physical hardware" },
        ],
        correctChoiceId: "a",
        explanation: "A Microsoft account syncs settings and files across devices through OneDrive.",
      },
      {
        id: "cf-apps-and-accounts-b3",
        prompt: "What's one privacy-related benefit of a local account?",
        choices: [
          { id: "a", text: "No cross-device cloud sync, which suits a single offline or shared machine" },
          { id: "b", text: "It's the only account type that can install apps" },
          { id: "c", text: "It automatically encrypts every file" },
          { id: "d", text: "It requires a Microsoft email address" },
        ],
        correctChoiceId: "a",
        explanation: "A local account's lack of cloud sync is a genuine privacy/simplicity benefit for a single, non-shared-online machine.",
      },
      {
        id: "cf-apps-and-accounts-b4",
        prompt: "Why might a Microsoft account help with password recovery?",
        choices: [
          { id: "a", text: "It's tied to an email address with built-in recovery options" },
          { id: "b", text: "Local accounts can never be recovered under any circumstances" },
          { id: "c", text: "It removes the need for a password entirely" },
          { id: "d", text: "It has no relationship to recovery at all" },
        ],
        correctChoiceId: "a",
        explanation: "A Microsoft account's email-based identity supports account recovery options a purely local account doesn't offer.",
      },
      {
        id: "cf-apps-and-accounts-b5",
        prompt: "You try to install an app and Windows asks you to sign in. What layer is that?",
        choices: [
          { id: "a", text: "The account layer" },
          { id: "b", text: "The hardware layer" },
          { id: "c", text: "It means the app is broken" },
          { id: "d", text: "It means the OS crashed" },
        ],
        correctChoiceId: "a",
        explanation: "Being prompted to sign in is an account-layer requirement, separate from the app itself being broken.",
      },
      {
        id: "cf-apps-and-accounts-b6",
        prompt: "A work PC won't let you install a certain app. What's the most likely explanation?",
        choices: [
          { id: "a", text: "IT restrictions on a managed account" },
          { id: "b", text: "The Windows operating system has crashed" },
          { id: "c", text: "The PC has no apps layer" },
          { id: "d", text: "Local accounts can never install apps" },
        ],
        correctChoiceId: "a",
        explanation: "Managed accounts often restrict app installs by IT policy — this is expected, not a sign of a broken PC.",
      },
      {
        id: "cf-apps-and-accounts-b7",
        prompt: "What's the fastest way to check which account type you're signed in with?",
        choices: [
          { id: "a", text: "Settings > Accounts" },
          { id: "b", text: "The Recycle Bin" },
          { id: "c", text: "Task Manager's Performance tab" },
          { id: "d", text: "There is no way to check" },
        ],
        correctChoiceId: "a",
        explanation: "Settings > Accounts directly shows whether you're signed in with a local or Microsoft account.",
      },
      {
        id: "cf-apps-and-accounts-b8",
        prompt: "What's a genuinely useful first question when something goes wrong on a PC?",
        choices: [
          { id: "a", text: "Is this an app problem, an account problem, or an OS problem?" },
          { id: "b", text: "Should I buy a new PC?" },
          { id: "c", text: "Should I uninstall every app immediately?" },
          { id: "d", text: "Is the Wi-Fi password wrong?" },
        ],
        correctChoiceId: "a",
        explanation: "Naming which layer is affected — app, account, or OS — is the habit that narrows down the actual fix.",
      },
    ],
    flashcards: [
      {
        id: "cf-apps-and-accounts-f1",
        front: "What is an app, relative to the OS?",
        back: "A separate program installed and removed on top of the OS",
      },
      {
        id: "cf-apps-and-accounts-f2",
        front: "Key trait of a local account?",
        back: "Lives only on that PC — no cloud sync",
      },
      {
        id: "cf-apps-and-accounts-f3",
        front: "Key trait of a Microsoft account?",
        back: "Email-based; syncs settings/files via OneDrive",
      },
      {
        id: "cf-apps-and-accounts-f4",
        front: "Where do you check your account type in Windows 11?",
        back: "Settings > Accounts",
      },
      {
        id: "cf-apps-and-accounts-f5",
        front: "What's a managed account?",
        back: "An account controlled by a workplace or school, with settings it can restrict",
      },
    ],
    practiceType: ["reading", "quiz", "flashcard"],
    estimatedStudyMinutes: 18,
    difficulty: "easy",
  },
  {
    id: "cf-safe-settings-exploration",
    name: "Exploring Windows Settings Without Fear",
    prerequisites: ["cf-apps-and-accounts"],
    objectives: ["CF-M1-O10", "CF-M1-O11", "CF-M1-O12"],
    lesson: {
      title: "Exploring Windows Settings Without Fear",
      content: `Many new Windows users avoid the Settings app entirely out of a very reasonable-sounding fear: "what if I break something?" The reality is that the large majority of what's inside Settings is just viewing information or adjusting personal preferences, and almost everything you're able to change there is easy to change back.

Open Settings with the Windows key + I, or by clicking the gear icon in the Start menu. Once open, a sidebar on the left lists categories: System, Bluetooth & devices, Network & internet, Personalization, Apps, Accounts, Time & language, Gaming, Accessibility, Privacy & security, and Windows Update, among others.

Some of that list is a genuinely safe-to-explore zone. Personalization — background, colors, lock screen — is fully cosmetic; changing it changes nothing functional, and it's always reversible with another click. System > Display, including brightness and text size, works the same way: try it, and set it back if you liked the original better. System > About is pure information — there's nothing there to accidentally change at all.

A second zone deserves a look, with a bit more care. Network & internet is safe to view freely, but changing a setting you don't fully understand — like turning Wi-Fi off entirely or "forgetting" a saved network — can disconnect you from the internet; reconnecting is usually one click away, so it's an inconvenience, not a disaster. Privacy & security is genuinely worth reviewing (it shows which apps have access to your camera, microphone, and location), but toggling a permission off can quietly break a feature you rely on — video calls losing camera access, for instance. That's annoying, not dangerous, and it's fixed by flipping the same toggle back on.

A third zone is worth treating differently: avoid casual clicking here for now. System > Recovery (which includes "Reset this PC" and advanced startup options) is a real action zone, not exploration territory — these options are meant to be used deliberately, with a clear reason, not browsed through out of curiosity. The same caution applies to anything with explicit warning text explaining real consequences: read that text fully before confirming, every time.

That gives you one genuinely useful rule for fear-free exploration: if a button has no warning explaining consequences, it's almost certainly safe to click and see what happens. If it does have a warning, read it fully before confirming — and it's completely fine to back out using Cancel or the back arrow instead of proceeding, with nothing "locked in" just from looking.

Settings isn't a minefield you're navigating blindly — it's a map you're allowed to walk around on. Clicking through categories just to see what's there, without pressing any "Reset" or "Delete" button, is a completely safe way to build real familiarity with where things live.`,
    },
    lightbulbMoment:
      "If a button has no warning explaining consequences, it's almost certainly safe to click and see — Settings is a map, not a minefield.",
    keyFacts: [
      "Open Settings with Windows key + I, or Start menu > Settings gear icon",
      "Personalization and Display settings are cosmetic/reversible and completely safe to explore freely",
      "Privacy & Security settings control app permissions (camera, microphone, location) — worth reviewing, and easy to toggle back if something stops working",
      "Recovery/reset options and any button with an explicit warning are action zones, not casual exploration — read warnings fully before confirming",
      "Cancel or the back arrow is always available — backing out of a settings screen never 'locks in' a change you didn't confirm",
    ],
    guidedExample: {
      title: "A Safe First Tour of Settings",
      steps: [
        "Press Windows key + I to open Settings.",
        "Click Personalization and try a different background or accent color — fully reversible.",
        "Click System > Display and preview a different text size, then set it back if you prefer the original.",
        "Click Privacy & security > Camera and just look at which apps have access — no changes needed.",
        "Avoid clicking anything under System > Recovery today — that's a deliberate-action screen, not a browsing screen.",
      ],
    },
    commonMistakes: [
      "Avoiding the Settings app entirely out of fear, which slows down learning every other Windows skill",
      "Clicking a button with a clear warning without reading what it actually does first",
      "Turning off a permission (like camera or microphone access) and not remembering why a video call app stopped working afterward",
      "Assuming every setting change is permanent or risky, when most are one click to reverse",
    ],
    realWorldTraps: [
      "A shared or work-managed PC may hide or gray out certain Settings categories — that's IT policy, not something you broke",
      "Some 'helpful' online guides tell you to change advanced settings to 'speed up your PC' — be skeptical of instructions from unknown sources that touch Recovery, Registry, or startup settings",
      "Revoking a permission 'just to be safe' can silently break a feature you use daily, like location access for a maps app — review each one, don't blanket-deny",
    ],
    realWorldScenario:
      "A friend asks you to help change their laptop's background and text size because 'the whole computer feels overwhelming.' Because you know Personalization and Display are safe, reversible zones, you click through Settings with them confidently instead of avoiding the app altogether.",
    whenThisFails: [
      "If you're unsure whether a setting is safe, look for warning text first — no warning usually means it's safe to try",
      "If you did change something and don't like the result, most screens let you pick the previous option again immediately",
    ],
    teacherReflectionPrompt:
      "Describe out loud which Settings categories you'd feel comfortable clicking through today without help, and which ones you'd still want to research first — and why.",
    quiz: [
      {
        id: "cf-safe-settings-exploration-q1",
        prompt: "What is the keyboard shortcut to open Settings on Windows 11?",
        choices: [
          { id: "a", text: "Windows key + I" },
          { id: "b", text: "Ctrl + Alt + Delete" },
          { id: "c", text: "Windows key + E" },
          { id: "d", text: "F1" },
        ],
        correctChoiceId: "a",
        explanation: "Windows key + I opens the Settings app directly.",
        difficulty: "easy",
      },
      {
        id: "cf-safe-settings-exploration-q2",
        prompt: "Which category is purely cosmetic and fully reversible?",
        choices: [
          { id: "a", text: "System > Recovery" },
          { id: "b", text: "Personalization" },
          { id: "c", text: "Windows Update" },
          { id: "d", text: "Privacy & security" },
        ],
        correctChoiceId: "b",
        explanation: "Personalization (background, colors, lock screen) changes nothing functional and is always reversible.",
        difficulty: "easy",
      },
      {
        id: "cf-safe-settings-exploration-q3",
        prompt: "What should you do before confirming a button that shows warning text?",
        choices: [
          { id: "a", text: "Read the warning fully first" },
          { id: "b", text: "Click it immediately to see what happens" },
          { id: "c", text: "Restart the PC first" },
          { id: "d", text: "Ignore it — warnings are usually meaningless" },
        ],
        correctChoiceId: "a",
        explanation: "Any button with explicit warning text should be read fully before confirming, since it describes real consequences.",
        difficulty: "medium",
      },
      {
        id: "cf-safe-settings-exploration-q4",
        prompt: "Revoking camera access in Privacy & security might cause what?",
        choices: [
          { id: "a", text: "A video-calling app losing camera access until you re-enable it" },
          { id: "b", text: "Permanent hardware damage" },
          { id: "c", text: "The whole PC to shut down" },
          { id: "d", text: "Nothing — permissions have no real effect" },
        ],
        correctChoiceId: "a",
        explanation: "Revoking a permission can break a feature that depends on it, but it's easily fixed by toggling it back on.",
        difficulty: "medium",
      },
      {
        id: "cf-safe-settings-exploration-q5",
        prompt: "Which settings area is an 'avoid casual exploration' action zone?",
        choices: [
          { id: "a", text: "System > Recovery (Reset this PC, advanced startup)" },
          { id: "b", text: "Personalization" },
          { id: "c", text: "System > Display brightness" },
          { id: "d", text: "System > About" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery/reset options are meant to be used deliberately, not browsed casually — read any warning fully before confirming.",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "cf-safe-settings-exploration-b1",
        prompt: "Is changing your text size under System > Display risky?",
        choices: [
          { id: "a", text: "No — it's cosmetic and reversible" },
          { id: "b", text: "Yes — it permanently changes your account" },
          { id: "c", text: "It deletes files" },
          { id: "d", text: "It requires IT approval on every PC" },
        ],
        correctChoiceId: "a",
        explanation: "Display settings like text size are cosmetic and reversible, safe to try freely.",
      },
      {
        id: "cf-safe-settings-exploration-b2",
        prompt: "You view your saved Wi-Fi network settings but don't change anything. Is that risky?",
        choices: [
          { id: "a", text: "No — viewing is always safe; changing an unfamiliar setting is what to be careful with" },
          { id: "b", text: "Yes — viewing alone disconnects you" },
          { id: "c", text: "It deletes the network permanently" },
          { id: "d", text: "It requires a Microsoft account" },
        ],
        correctChoiceId: "a",
        explanation: "Viewing network settings is safe; the caution applies to changing settings you don't understand.",
      },
      {
        id: "cf-safe-settings-exploration-b3",
        prompt: "A work-managed PC has some Settings categories grayed out. What does that most likely mean?",
        choices: [
          { id: "a", text: "IT policy is restricting those settings, not a personal mistake" },
          { id: "b", text: "The PC is broken" },
          { id: "c", text: "The user accidentally disabled Settings" },
          { id: "d", text: "Windows Update failed" },
        ],
        correctChoiceId: "a",
        explanation: "Grayed-out categories on a managed device usually reflect organizational IT policy, not user error.",
      },
      {
        id: "cf-safe-settings-exploration-b4",
        prompt: "An online guide from an unfamiliar source tells you to change an advanced setting to 'speed up your PC.' What's the wise approach?",
        choices: [
          { id: "a", text: "Be skeptical of unfamiliar sources touching Recovery, Registry, or startup settings" },
          { id: "b", text: "Follow it immediately without checking the source" },
          { id: "c", text: "Assume all online guides are equally trustworthy" },
          { id: "d", text: "Disable Windows Update to comply" },
        ],
        correctChoiceId: "a",
        explanation: "Unverified guides that touch sensitive settings deserve skepticism before you act on them.",
      },
      {
        id: "cf-safe-settings-exploration-b5",
        prompt: "What can you always do if you're unsure about a Settings screen?",
        choices: [
          { id: "a", text: "Click Cancel or the back arrow instead of proceeding" },
          { id: "b", text: "You must confirm every screen you open" },
          { id: "c", text: "Restart the PC before backing out" },
          { id: "d", text: "Nothing — once opened, changes apply automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Backing out with Cancel or the back arrow is always available and never locks in an unconfirmed change.",
      },
      {
        id: "cf-safe-settings-exploration-b6",
        prompt: "Which of these best describes the 'safe zone / caution zone / avoid zone' idea from this lesson?",
        choices: [
          { id: "a", text: "Cosmetic settings are safe; permissions/network need care; reset/recovery buttons need deliberate intent" },
          { id: "b", text: "All Settings screens carry equal risk" },
          { id: "c", text: "Only Personalization exists in Settings" },
          { id: "d", text: "Every screen requires IT approval" },
        ],
        correctChoiceId: "a",
        explanation: "The three zones map roughly to cosmetic (safe), permissions/network (caution), and reset/recovery (avoid casual clicking).",
      },
      {
        id: "cf-safe-settings-exploration-b7",
        prompt: "Your friend feels overwhelmed by their laptop's Settings app. What's a good first step to build their confidence?",
        choices: [
          { id: "a", text: "Explore Personalization and Display together — both are safe and reversible" },
          { id: "b", text: "Start with System > Recovery" },
          { id: "c", text: "Disable Windows Update" },
          { id: "d", text: "Avoid Settings entirely" },
        ],
        correctChoiceId: "a",
        explanation: "Starting with the safest, most reversible categories builds confidence without real risk.",
      },
      {
        id: "cf-safe-settings-exploration-b8",
        prompt: "A button in Settings has no warning text at all. What does that usually suggest?",
        choices: [
          { id: "a", text: "It's almost certainly safe to click and see what happens" },
          { id: "b", text: "It's automatically dangerous" },
          { id: "c", text: "It will delete your account" },
          { id: "d", text: "It requires IT approval" },
        ],
        correctChoiceId: "a",
        explanation: "Absence of warning text is a strong signal that a setting is low-risk and easy to reverse.",
      },
    ],
    flashcards: [
      {
        id: "cf-safe-settings-exploration-f1",
        front: "Shortcut to open Settings?",
        back: "Windows key + I",
      },
      {
        id: "cf-safe-settings-exploration-f2",
        front: "Safe/reversible settings category example?",
        back: "Personalization (background, colors, lock screen)",
      },
      {
        id: "cf-safe-settings-exploration-f3",
        front: "Golden rule for clicking a Settings button?",
        back: "No warning = safe to try; warning = read it fully first",
      },
      {
        id: "cf-safe-settings-exploration-f4",
        front: "What does a grayed-out setting on a work PC usually mean?",
        back: "IT policy, not something you broke",
      },
      {
        id: "cf-safe-settings-exploration-f5",
        front: "What's the 'avoid for now' zone?",
        back: "Recovery/reset options and any button with a deletion/reset warning",
      },
    ],
    practiceType: ["reading", "quiz", "flashcard"],
    estimatedStudyMinutes: 15,
    difficulty: "easy",
  },
  {
    id: "cf-windows-and-dialogs",
    name: "Windows, Dialogs & the Minimize/Maximize/Close Buttons",
    prerequisites: ["cf-desktop-taskbar-start"],
    objectives: ["CF-M1-O13", "CF-M1-O14", "CF-M1-O15"],
    lesson: {
      title: "Windows, Dialogs & the Minimize/Maximize/Close Buttons",
      content: `Every app you open on Windows 11 appears inside a "window" — a rectangular frame with its own title bar, content area, and edges you can resize. Worth saying out loud once: "window" here means the on-screen frame an app opens in, not the Windows operating system itself. That naming overlap trips up a lot of newcomers, and it's fine to have found it confusing.

Nearly every window has three controls in its top-right corner. Minimize (a small dash, —) tucks the window down onto the taskbar without closing it — the app is still running, just out of view. Maximize/restore (a small square, □) expands the window to fill the entire screen, or shrinks it back to its previous size if it's already maximized. Close (an X) shuts that window — for most apps, this ends the app itself, so anything unsaved should be saved first.

You can have several apps open at once, and each gets its own icon on the taskbar. Clicking a taskbar icon brings that app's window to the front. If you'd rather not reach for the mouse, Alt+Tab cycles between all your open windows with the keyboard alone — hold Alt and tap Tab repeatedly to step through them.

Windows 11 adds a genuinely handy feature called Snap Layouts: drag a window's title bar to the edge of the screen, or hover briefly over its maximize button, and Windows offers to snap it into exactly half or a quarter of the screen next to another window. That makes comparing two documents, or working next to a reference video, far easier than resizing windows by hand.

A dialog box is a smaller pop-up window with a specific, narrower job: it asks a question or requires a decision before you can continue — "Save changes before closing?", "Are you sure you want to delete this?", or a file picker when you choose what to open or save. Dialogs typically pause the app behind them until you respond, which is exactly the point: they exist to make you pause before something meaningful happens.

Dialogs often highlight one button as the default, but that default isn't automatically the safest or most desired choice for your situation. Reading the actual question the dialog is asking — not just clicking through on autopilot — is what prevents accidentally discarding unsaved work or confirming a deletion you didn't mean to make.

Once you can name both of these things — a window as the on-screen frame an app lives in, and a dialog as the smaller pop-up that pauses things to ask you something specific — "I have too many windows open" and "a box popped up" both stop being confusing events and become perfectly ordinary parts of using a Windows 11 PC.`,
    },
    lightbulbMoment:
      "'A window is stuck open' and 'a box popped up' are both totally ordinary, once you can name what a window and a dialog actually are.",
    keyFacts: [
      "A 'window' is the on-screen frame an app opens in — not the Windows operating system itself",
      "Minimize tucks a window to the taskbar; maximize/restore fills or shrinks the window; close (X) shuts it, usually ending the app",
      "Alt+Tab cycles between open windows; each open app also gets its own taskbar icon",
      "Windows 11's Snap Layouts let you drag or hover a window to the screen edge to arrange it side-by-side with another",
      "A dialog box is a smaller pop-up that pauses the app to ask a specific question — read it before clicking a button",
    ],
    guidedExample: {
      title: "Manage Two Open Windows and a Dialog",
      steps: [
        "Open two apps — for example, a browser and Notepad — and notice each gets its own taskbar icon.",
        "Press Alt+Tab to switch between them without using the mouse.",
        "Drag one window's title bar to the left edge of the screen to snap it into the left half.",
        "In Notepad, type something and click the X to close — a dialog appears asking whether to save changes.",
        "Read the dialog's actual question before choosing Save, Don't Save, or Cancel.",
      ],
    },
    commonMistakes: [
      "Clicking the X on a window with unsaved work without reading the save dialog that appears",
      "Confusing 'a window is stuck open' with 'Windows (the OS) is broken'",
      "Assuming minimize closes the app, when it actually just tucks it out of view on the taskbar",
      "Clicking through a dialog's default button without reading what it actually confirms",
    ],
    realWorldTraps: [
      "Coworkers say 'a window popped up' meaning a dialog box specifically — knowing the vocabulary helps you follow IT instructions over the phone",
      "Some untrustworthy pop-ups (like fake 'your PC is infected' warnings) try to imitate real dialogs to trick you into clicking — a real Windows dialog matches the app you were using; an unexpected full-screen warning from an unfamiliar source deserves suspicion, covered fully in a later security module",
      "Snap Layouts behave slightly differently across Windows 11 versions and updates — the core drag-to-edge idea stays the same even if the exact hover menu looks a little different",
    ],
    realWorldScenario:
      "You're mid-task in a work document when a save dialog appears after clicking close by accident. Because you've learned to read the dialog instead of clicking through it, you choose Cancel and go back to your document instead of losing unsaved changes.",
    whenThisFails: [
      "If a window seems frozen and won't minimize, maximize, or close normally, Task Manager (a later topic) can force-close it safely",
      "If you're not sure what a dialog is really asking, it's always safe to click Cancel and re-read the situation before choosing again",
    ],
    teacherReflectionPrompt:
      "Explain out loud the difference between minimizing, closing, and a dialog box appearing — using a real app you use often as the example.",
    quiz: [
      {
        id: "cf-windows-and-dialogs-q1",
        prompt: "What does the minimize button do?",
        choices: [
          { id: "a", text: "Tucks the window to the taskbar without closing it" },
          { id: "b", text: "Closes the app entirely" },
          { id: "c", text: "Deletes unsaved work automatically" },
          { id: "d", text: "Restarts the PC" },
        ],
        correctChoiceId: "a",
        explanation: "Minimize hides the window on the taskbar, but the app keeps running.",
        difficulty: "easy",
      },
      {
        id: "cf-windows-and-dialogs-q2",
        prompt: "What does the X (close) button usually do?",
        choices: [
          { id: "a", text: "Closes the window, which usually ends the app" },
          { id: "b", text: "Minimizes the window" },
          { id: "c", text: "Snaps the window to the edge of the screen" },
          { id: "d", text: "Opens a new window" },
        ],
        correctChoiceId: "a",
        explanation: "For most apps, the X shuts the window and ends the app, so unsaved work should be saved first.",
        difficulty: "easy",
      },
      {
        id: "cf-windows-and-dialogs-q3",
        prompt: "What is a dialog box?",
        choices: [
          { id: "a", text: "A small pop-up that pauses the app to ask a specific question" },
          { id: "b", text: "A full replacement for the taskbar" },
          { id: "c", text: "Another name for the Start menu" },
          { id: "d", text: "A type of app icon" },
        ],
        correctChoiceId: "a",
        explanation: "A dialog is a smaller pop-up window that pauses the app and requires a specific decision before continuing.",
        difficulty: "medium",
      },
      {
        id: "cf-windows-and-dialogs-q4",
        prompt: "What does Alt+Tab do?",
        choices: [
          { id: "a", text: "Cycles between open windows" },
          { id: "b", text: "Closes the current window" },
          { id: "c", text: "Opens Settings" },
          { id: "d", text: "Snaps a window to the screen edge" },
        ],
        correctChoiceId: "a",
        explanation: "Alt+Tab lets you switch between open windows using the keyboard alone.",
        difficulty: "medium",
      },
      {
        id: "cf-windows-and-dialogs-q5",
        prompt: "What should you do before clicking a dialog's default highlighted button?",
        choices: [
          { id: "a", text: "Read what it's actually asking or confirming" },
          { id: "b", text: "Nothing — the default is always the right choice" },
          { id: "c", text: "Restart the PC" },
          { id: "d", text: "Close the whole app first" },
        ],
        correctChoiceId: "a",
        explanation: "The highlighted default isn't automatically the safest choice — reading the question first avoids accidental confirmations.",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "cf-windows-and-dialogs-b1",
        prompt: "What is a Snap Layout?",
        choices: [
          { id: "a", text: "Dragging or hovering a window to the screen edge to arrange it side-by-side with another" },
          { id: "b", text: "A way to permanently delete a window" },
          { id: "c", text: "A type of dialog box" },
          { id: "d", text: "A Windows Update setting" },
        ],
        correctChoiceId: "a",
        explanation: "Snap Layouts let you drag or hover a window to the screen edge to arrange multiple windows side-by-side.",
      },
      {
        id: "cf-windows-and-dialogs-b2",
        prompt: "Why is 'window' a confusing term for newcomers?",
        choices: [
          { id: "a", text: "It can mean the on-screen app frame or be mistaken for the Windows OS itself" },
          { id: "b", text: "It only refers to physical glass windows" },
          { id: "c", text: "It's not actually used in Windows 11" },
          { id: "d", text: "It refers only to dialog boxes" },
        ],
        correctChoiceId: "a",
        explanation: "The overlap between 'a window' (app frame) and 'Windows' (the OS name) genuinely confuses newcomers.",
      },
      {
        id: "cf-windows-and-dialogs-b3",
        prompt: "How many taskbar icons does an open app usually get?",
        choices: [
          { id: "a", text: "One per open app" },
          { id: "b", text: "None — apps don't appear on the taskbar" },
          { id: "c", text: "Exactly three, always" },
          { id: "d", text: "It depends on the Wi-Fi connection" },
        ],
        correctChoiceId: "a",
        explanation: "Each open app typically gets its own taskbar icon, which you can click to bring it to the front.",
      },
      {
        id: "cf-windows-and-dialogs-b4",
        prompt: "What does maximize/restore do when a window is already maximized?",
        choices: [
          { id: "a", text: "Shrinks it back to its previous size" },
          { id: "b", text: "Closes the app" },
          { id: "c", text: "Minimizes it to the taskbar" },
          { id: "d", text: "Deletes the window permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Clicking maximize/restore on an already-maximized window shrinks it back to its previous size.",
      },
      {
        id: "cf-windows-and-dialogs-b5",
        prompt: "You click close on a document with unsaved changes. What typically happens?",
        choices: [
          { id: "a", text: "A dialog appears asking whether to save changes first" },
          { id: "b", text: "The document is deleted immediately with no warning" },
          { id: "c", text: "The window minimizes instead of closing" },
          { id: "d", text: "Nothing happens at all" },
        ],
        correctChoiceId: "a",
        explanation: "Most apps show a save dialog when closing with unsaved changes, pausing until you decide.",
      },
      {
        id: "cf-windows-and-dialogs-b6",
        prompt: "An unexpected full-screen warning claims your PC is infected and demands you click a button immediately. What's the wise response?",
        choices: [
          { id: "a", text: "Be suspicious — it may not be a real Windows dialog at all" },
          { id: "b", text: "Click through it immediately" },
          { id: "c", text: "Assume it's always legitimate" },
          { id: "d", text: "Restart the PC to make it worse" },
        ],
        correctChoiceId: "a",
        explanation: "Unexpected, urgent full-screen warnings from unfamiliar sources deserve suspicion, not an immediate click.",
      },
      {
        id: "cf-windows-and-dialogs-b7",
        prompt: "What should you do if a window seems completely frozen and won't respond to minimize, maximize, or close?",
        choices: [
          { id: "a", text: "Use Task Manager to force-close it safely" },
          { id: "b", text: "Unplug the PC immediately" },
          { id: "c", text: "Assume nothing can be done" },
          { id: "d", text: "Reinstall Windows" },
        ],
        correctChoiceId: "a",
        explanation: "Task Manager, covered in a later topic, can safely force-close a frozen window without affecting the rest of the PC.",
      },
      {
        id: "cf-windows-and-dialogs-b8",
        prompt: "What's a safe move if you're unsure what a dialog box is really asking?",
        choices: [
          { id: "a", text: "Click Cancel and re-read the situation before choosing again" },
          { id: "b", text: "Always click the default highlighted button" },
          { id: "c", text: "Close the entire app instead" },
          { id: "d", text: "Restart the PC immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Clicking Cancel is always a safe way to pause and reassess before making a decision in a dialog.",
      },
    ],
    flashcards: [
      {
        id: "cf-windows-and-dialogs-f1",
        front: "What is a 'window' in this context?",
        back: "The on-screen frame an app opens in — not the Windows OS itself",
      },
      {
        id: "cf-windows-and-dialogs-f2",
        front: "What does the X button do?",
        back: "Closes the window, usually ending the app",
      },
      {
        id: "cf-windows-and-dialogs-f3",
        front: "What's a dialog box?",
        back: "A small pop-up that pauses the app to ask a specific question",
      },
      {
        id: "cf-windows-and-dialogs-f4",
        front: "Shortcut to cycle between open windows?",
        back: "Alt+Tab",
      },
      {
        id: "cf-windows-and-dialogs-f5",
        front: "What's a Snap Layout?",
        back: "Dragging or hovering a window to the screen edge to arrange it side-by-side with another",
      },
    ],
    practiceType: ["reading", "quiz", "flashcard"],
    estimatedStudyMinutes: 15,
    difficulty: "easy",
  },
];
