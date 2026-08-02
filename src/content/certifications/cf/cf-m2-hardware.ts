import type { Domain, ExternalResource } from "../../types";

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Avoid managed school/work accounts for labs that touch system settings.",
};

/**
 * Computer Fundamentals — Module 2: Physical Computer Basics.
 * Skills-track domain (Certification schema). Literacy depth only — not A+ exam depth.
 * Authored by FContent-1 per docs/computer-fundamentals-aplus-architecture.md.
 */
export const cfHardwareDomain: Domain = {
  id: "cf-hardware",
  name: "Module 2 — Physical Computer Basics",
  topics: [
    {
      id: "cf-inside-the-box",
      name: "What's Inside the Box?",
      prerequisites: ["cf-hardware-vs-software"],
      objectives: ["CF-M2-O1", "CF-M2-O2", "CF-M2-O3"],
      lesson: {
        title: "What's Inside the Box?",
        content: `Every desktop tower and every laptop is built around a case — sometimes called a chassis — the outer shell that holds and protects a set of internal parts. Each of those parts exists to do exactly one job, and this topic is your map of the whole layout before the next several topics zoom into each part one at a time.

The main internal parts, at a naming level, are: the motherboard, the CPU, RAM, storage, the power supply unit (PSU), and cooling. You will meet each of these terms again soon in more depth — for now, the goal is simply to recognize that a computer isn't one mysterious block, it's a small, fixed set of parts with clear jobs.

An analogy helps this stick. Picture an apartment building. The case is the building itself — walls that hold everything together. The motherboard is the wiring and plumbing running behind every wall, connecting every room so nothing works in isolation. The CPU is the person actually doing the work. RAM is the desk that person is working at right now — small, but instantly within reach. Storage is the filing cabinet down the hall — much bigger, but a short walk away. The power supply unit is the electric meter and breaker box, making sure every room gets the right kind of power. Cooling is the building's HVAC system, keeping the whole place from overheating while everyone works.

Desktops and laptops both contain the same categories of parts, but they're packaged very differently. A desktop tower is generally designed to be opened — a side panel that slides or unscrews off, giving access for cleaning, repairs, or upgrades. A laptop is usually sealed and tightly packed, and opening one is not something the average user is expected to do casually; doing so can void a warranty or risk delicate internal ribbon cables that desktops rarely have. Many modern laptops also solder parts like RAM directly onto the motherboard, meaning the common advice "just add more RAM" doesn't apply the same way it does to an easily opened desktop.

This matters at work more than it sounds like it should. When IT support asks "how much RAM do you have" or "is that drive an SSD or a hard drive," you don't need to memorize spec sheets — you need to know where to look. On Windows 11, Settings > System > About shows several of these details without ever opening the case, and that screen is exactly where this module's first lab sends you.

This module is structured to follow the order most people actually run into these parts. This topic names the whole map. Next, CPU, RAM, and storage — the three parts people ask about most when a computer "feels slow." After that, motherboard, power, and cooling — the supporting systems that make everything else actually run. Then ports and connectors, peripherals and displays, and common cable types — the parts you touch and plug in the most. The module closes with electrostatic discharge (ESD) and safe handling, the one rule that applies the moment anyone actually opens a case.

You don't need to memorize every acronym today. You need to walk away recognizing that "the box" is not a black box at all — it's six named categories of parts, and every topic ahead attaches a specific name to something you're about to see on a components list, a repair estimate, or a Settings screen.`,
      },
      lightbulbMoment:
        "Every part inside the case has exactly one job — once you can name the job, the part stops being mysterious.",
      keyFacts: [
        "The case (or chassis) is the outer shell that holds and protects every internal part — a desktop tower is designed to be opened; most laptops are not",
        "The core internal parts are the motherboard, CPU, RAM, storage, power supply unit (PSU), and cooling — each one gets its own topic in this module",
        "A helpful analogy: motherboard = wiring connecting every room, CPU = the person working, RAM = their desk, storage = the filing cabinet, PSU = the electric meter, cooling = the HVAC system",
        "Laptops pack the same categories of parts into a sealed case, and many modern laptops solder parts like RAM directly to the board instead of using swappable modules",
        "Windows 11's Settings > System > About screen shows several key hardware details without opening the case at all",
      ],
      guidedExample: {
        title: "Read a Spec Sheet Without Panic",
        steps: [
          'You see a listing: "Intel Core i5, 16 GB RAM, 512 GB SSD." Before reading further, sort each term into a part category: CPU, RAM, storage.',
          '"Intel Core i5" names the CPU — the part doing the actual work, so this tells you about processing power.',
          '"16 GB RAM" names the temporary workspace size — more RAM generally means smoother multitasking.',
          '"512 GB SSD" names the storage type and size — SSD tells you it\'s a fast drive, 512 GB tells you how much you can permanently save.',
          "Notice the listing never mentions the case, motherboard, or cooling by default — those matter more for desktops you plan to open or upgrade later.",
        ],
      },
      commonMistakes: [
        "Treating \"motherboard\" as a catch-all word for every part inside the case, instead of one specific connecting board",
        "Assuming a laptop can be opened and upgraded the same way a desktop tower can",
        "Believing you need to memorize brand names and model numbers to be \"good with computers,\" when naming the part category is the actual skill",
        "Skipping Settings > System > About because it \"sounds too technical,\" when it's built for exactly this kind of casual check",
      ],
      realWorldTraps: [
        "A salesperson lists specs quickly (\"16 gigs, 512 gig SSD, i5\") assuming you can sort them by category on the spot — you can, once you know RAM vs storage vs CPU",
        "A friend says \"just open it up and add more RAM\" about your laptop, not realizing many modern laptops have RAM soldered in and cannot be upgraded that way",
        "IT support asks \"what's your system info\" and expects you to check Settings > System > About yourself instead of walking you through it step by step every time",
      ],
      realWorldScenario:
        "A coworker is deciding between two refurbished laptops and reads you the listings out loud: one says '8 GB RAM, 256 GB SSD,' the other says '16 GB RAM, 1 TB HDD.' Instead of guessing, you sort each spec into its category first — RAM (workspace) and storage (filing cabinet) — and recognize the second laptop stores far more but might feel slower day-to-day since HDD storage is slower than SSD storage, a distinction the next topic covers in depth.",
      whenThisFails: [
        "If Settings > System > About won't open or the screen freezes while checking, that points to a deeper software or hardware problem — this is a moment to note what you saw and ask for help, not to start opening the case",
        "If you're on a managed work or school laptop, some system details may be hidden or restricted by IT policy — that's normal and not something to work around; ask your help desk for the number you need",
      ],
      teacherReflectionPrompt:
        "Explain out loud, using the apartment analogy, what job each of these does: motherboard, CPU, RAM, storage, PSU, cooling — without looking at your notes.",
      quiz: [
        {
          id: "cf-inside-the-box-q1",
          prompt: "What is another name for the outer shell that holds a computer's internal parts?",
          choices: [
            { id: "a", text: "Case, or chassis" },
            { id: "b", text: "Motherboard" },
            { id: "c", text: "RAM" },
            { id: "d", text: "Firmware" },
          ],
          correctChoiceId: "a",
          explanation: "The case, or chassis, is the outer shell that holds and protects every internal part.",
          difficulty: "easy",
        },
        {
          id: "cf-inside-the-box-q2",
          prompt: "Which of these is generally designed to be opened by the average user?",
          choices: [
            { id: "a", text: "A sealed ultrabook laptop" },
            { id: "b", text: "A desktop tower" },
            { id: "c", text: "A power supply unit" },
            { id: "d", text: "A soldered laptop board" },
          ],
          correctChoiceId: "b",
          explanation: "Desktop towers are designed with removable panels for access; most laptops are sealed and not meant for casual opening.",
          difficulty: "easy",
        },
        {
          id: "cf-inside-the-box-q3",
          prompt: "In the apartment analogy from this topic, what does RAM represent?",
          choices: [
            { id: "a", text: "The electric meter" },
            { id: "b", text: "The filing cabinet down the hall" },
            { id: "c", text: "The desk you're working at right now" },
            { id: "d", text: "The wiring behind the walls" },
          ],
          correctChoiceId: "c",
          explanation: "RAM is the small but instantly reachable workspace — like a desk right in front of the person working.",
          difficulty: "medium",
        },
        {
          id: "cf-inside-the-box-q4",
          prompt: "Where can you check key hardware details on Windows 11 without opening the case?",
          choices: [
            { id: "a", text: "Settings > System > About" },
            { id: "b", text: "The Recycle Bin" },
            { id: "c", text: "The File Explorer address bar" },
            { id: "d", text: "Notepad" },
          ],
          correctChoiceId: "a",
          explanation: "Settings > System > About shows processor, RAM, and other device details without opening the case.",
          difficulty: "medium",
        },
        {
          id: "cf-inside-the-box-q5",
          prompt: "A laptop listing says \"RAM is soldered to the motherboard.\" What does that mean for upgrades?",
          choices: [
            { id: "a", text: "RAM can be swapped exactly like a desktop" },
            { id: "b", text: "RAM cannot be user-upgraded on that model" },
            { id: "c", text: "It only affects storage speed" },
            { id: "d", text: "It means the laptop has no RAM at all" },
          ],
          correctChoiceId: "b",
          explanation: "Soldered RAM is permanently attached to the board, so it cannot be removed or upgraded like swappable desktop RAM modules.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-inside-the-box-b1",
          prompt: "What is a chassis?",
          choices: [
            { id: "a", text: "Another word for the case that holds internal parts" },
            { id: "b", text: "A type of CPU" },
            { id: "c", text: "A wireless connection" },
          ],
          correctChoiceId: "a",
          explanation: "Chassis is another term for the case that holds and protects internal parts.",
        },
        {
          id: "cf-inside-the-box-b2",
          prompt: "Which is generally NOT meant to be opened by an average user?",
          choices: [
            { id: "a", text: "A desktop tower" },
            { id: "b", text: "Most laptops" },
            { id: "c", text: "A spare cardboard box" },
          ],
          correctChoiceId: "b",
          explanation: "Most laptops are sealed and tightly packed, unlike desktop towers which are designed to be opened.",
        },
        {
          id: "cf-inside-the-box-b3",
          prompt: "What does the motherboard connect?",
          choices: [
            { id: "a", text: "Every other internal part" },
            { id: "b", text: "Only the case fans" },
            { id: "c", text: "Only the power cord" },
          ],
          correctChoiceId: "a",
          explanation: "The motherboard is the central board that every other internal part connects to or through.",
        },
        {
          id: "cf-inside-the-box-b4",
          prompt: "Which part converts electricity for a desktop computer?",
          choices: [
            { id: "a", text: "The power supply unit (PSU)" },
            { id: "b", text: "RAM" },
            { id: "c", text: "Storage" },
          ],
          correctChoiceId: "a",
          explanation: "The PSU is the part that receives wall power and converts it for internal use.",
        },
        {
          id: "cf-inside-the-box-b5",
          prompt: "What is the safest way to check basic hardware info on Windows 11?",
          choices: [
            { id: "a", text: "Settings > System > About" },
            { id: "b", text: "Opening the case" },
            { id: "c", text: "Calling a technician before checking anything" },
          ],
          correctChoiceId: "a",
          explanation: "Settings > System > About shows hardware details safely, without opening anything.",
        },
        {
          id: "cf-inside-the-box-b6",
          prompt: "True or false: all laptops let you swap RAM easily, like a desktop.",
          choices: [
            { id: "a", text: "False — many laptops have RAM soldered in" },
            { id: "b", text: "True, always" },
            { id: "c", text: "Only laptops made before 2010 have swappable RAM" },
          ],
          correctChoiceId: "a",
          explanation: "Many modern laptops solder RAM directly to the motherboard, making it non-upgradeable.",
        },
        {
          id: "cf-inside-the-box-b7",
          prompt: "Which best describes cooling's job?",
          choices: [
            { id: "a", text: "Removing heat generated by active parts" },
            { id: "b", text: "Adding extra power to the CPU" },
            { id: "c", text: "Storing files permanently" },
          ],
          correctChoiceId: "a",
          explanation: "Cooling removes the heat that active parts generate as a side effect of working.",
        },
        {
          id: "cf-inside-the-box-b8",
          prompt: "Naming which internal part category is struggling mainly helps with:",
          choices: [
            { id: "a", text: "Turning a vague complaint into something specific and fixable" },
            { id: "b", text: "Automatically voiding the warranty" },
            { id: "c", text: "Increasing storage size" },
          ],
          correctChoiceId: "a",
          explanation: "Naming the part category turns \"it's broken\" into a specific, actionable observation.",
        },
      ],
      flashcards: [
        {
          id: "cf-inside-the-box-f1",
          front: "Another name for the outer shell of a computer?",
          back: "Case, or chassis",
        },
        {
          id: "cf-inside-the-box-f2",
          front: "What does the motherboard do?",
          back: "Connects and lets every other internal part communicate — like the wiring in a building",
        },
        {
          id: "cf-inside-the-box-f3",
          front: "Can most laptops be opened and upgraded like desktops?",
          back: "No — most are sealed, and many have RAM soldered directly to the board",
        },
        {
          id: "cf-inside-the-box-f4",
          front: "Where to check hardware info on Windows 11 without opening the case?",
          back: "Settings > System > About",
        },
        {
          id: "cf-inside-the-box-f5",
          front: "Six main internal part categories?",
          back: "Motherboard, CPU, RAM, storage, PSU, cooling",
        },
      ],
      externalResources: [WINDOWS_11_PC_RESOURCE],
      assignments: [
        {
          id: "cf-lab-system-info",
          title: "Lab: Inspect Your System Information on Windows 11",
          type: "external-lab",
          instructions: `Practice on a real Windows 11 PC you are allowed to use for hands-on learning.

Safety boundaries: this lab is entirely read-only — you will only look at information Windows already displays, and you will not install, uninstall, or change any settings. There is nothing here to break.

Steps (Windows 11):
1. Press Windows key + I to open Settings.
2. Select System, then select About near the bottom of the list.
3. Note the Device specifications section: Processor (CPU), Installed RAM, and System type.
4. Note the Windows specifications section: Edition and Version.
5. Compare what you see to the six-part map from this topic — which category does "Processor" belong to? Which does "Installed RAM" belong to?
6. Optional: search "Storage" in Settings to see how much drive space is used and free — the part category covered in the next topic.

Rollback: nothing was changed — this lab only viewed existing information, so there's nothing to undo.

Windows 10 note (legacy): the same information appears at Settings > System > About, though the layout and section names differ slightly from Windows 11.

Mobile-only fallback: if you don't have access to a Windows 11 PC right now, look up your phone's equivalent (Settings > About Phone) and note which specs feel familiar — processor, storage, and RAM/memory appear on phones too, using the same vocabulary.`,
          estimatedMinutes: 15,
          externalResourceId: "windows-11-pc",
          completionCriteria: [
            "Opened Settings > System > About on a Windows 11 PC",
            "Located Processor, Installed RAM, and System type",
            "Sorted each spec into its correct part category (CPU, RAM, storage)",
            "Noted the Windows edition and version",
          ],
          relatedTopicIds: ["cf-inside-the-box", "cf-cpu-ram-storage"],
          order: 1,
        },
      ],
      practiceType: ["reading", "quiz", "flashcard", "external-lab"],
      estimatedStudyMinutes: 25,
      difficulty: "easy",
    },
    {
      id: "cf-cpu-ram-storage",
      name: "CPU, RAM & Storage",
      prerequisites: ["cf-inside-the-box"],
      objectives: ["CF-M2-O4", "CF-M2-O5", "CF-M2-O6"],
      lesson: {
        title: "CPU, RAM & Storage",
        content: `The last topic named six internal parts as a map. This topic zooms into the three that people discuss most whenever a computer "feels slow": the CPU, RAM, and storage. Every term here gets defined the moment it's used — none of this requires prior technical background.

CPU stands for central processing unit — the part that actually carries out instructions. Calling it "the brain" is a common shorthand, though even that undersells how narrowly focused it is: a CPU does exactly what it's told, extremely fast, over and over, without judgment or creativity involved. CPU speed is described in gigahertz (GHz), and modern CPUs have multiple "cores" — a core is a part of the CPU that can work on a task somewhat independently from the others. More cores can mean smoother multitasking, since different tasks can spread across different cores instead of queuing behind one another.

RAM stands for random access memory, and it means short-term, temporary workspace. Everything currently open right now — browser tabs, an unsaved document, a running game — lives in RAM while you're actively using it. RAM is measured in gigabytes (GB). Its most important trait: RAM clears completely the instant the computer loses power. That's exactly why unsaved work disappears after a crash — it was never in permanent storage yet, only sitting in temporary workspace.

Storage is the opposite: permanent, long-term space where files live even after shutdown. Two common types exist. HDD (hard disk drive) is an older, mechanical, spinning-disk technology. SSD (solid-state drive) is a newer, chip-based technology with no moving parts at all. SSDs are significantly faster at starting up, opening apps, and loading files; HDDs are often cheaper per gigabyte, which is why some budget or older machines still use them despite being slower.

The desk-and-filing-cabinet picture makes this concrete. RAM is the desk directly in front of the person working (the CPU) — small, but instantly within reach. Storage is the filing cabinet across the room — enormous capacity, but it takes a moment to walk there and back. A computer with plenty of storage but very little RAM is like someone with a warehouse full of files but only a tiny desk — they're constantly getting up to put things away and fetch new ones, which slows everything down even though nothing is technically broken.

This gives you a practical troubleshooting habit. When a computer feels "slow," these three parts are the first three things worth naming, in this order: is the CPU maxed out doing something specific, is RAM full from having too many things open at once, or is storage nearly full (a drive at 90%+ capacity commonly slows a machine down, regardless of SSD or HDD). Naming which of the three is struggling turns "it's slow" into a specific, useful observation — for yourself, or for whoever you're asking for help.

It also translates spec sheets instantly. A listing reading "8 GB RAM, 256 GB SSD, quad-core CPU" now reads as "a small-but-reachable desk, a mid-sized fast filing cabinet, and four workers instead of one" — plain language sitting right behind the acronyms.`,
      },
      lightbulbMoment:
        "RAM is the desk right in front of you; storage is the filing cabinet across the room — and a computer that feels slow is almost always struggling with one of those two, not secretly broken.",
      keyFacts: [
        "CPU (central processing unit) carries out instructions — its speed is measured in gigahertz (GHz), and it can have multiple cores that work somewhat independently",
        "RAM (random access memory) is short-term, temporary workspace measured in gigabytes (GB) — everything open right now lives here, and it clears completely when power is lost",
        "Storage is permanent, long-term space where files live even after shutdown — measured in gigabytes (GB) or terabytes (TB)",
        "SSD (solid-state drive) storage has no moving parts and is much faster than HDD (hard disk drive), an older mechanical spinning-disk technology",
        "A computer that \"feels slow\" is usually a CPU, RAM, or storage bottleneck — naming which one turns a vague complaint into something specific",
      ],
      guidedExample: {
        title: "Diagnose \"My Computer Feels Slow\"",
        steps: [
          'A relative says their laptop "feels slow lately." Resist the urge to guess "old computer" — name a specific part first.',
          "Ask how many browser tabs or programs are open at once — a large number points toward RAM being full, since each open item claims some RAM.",
          "Ask if storage is nearly full — Settings > System > Storage on Windows 11 shows a used/free breakdown; storage above roughly 90% full commonly slows a machine down.",
          "Ask whether the slowness happens during one heavy task (like exporting a video) versus all the time — heavy-task-only slowness points more toward CPU limits.",
          "With RAM, storage, and CPU each ruled in or out, you now have a specific next step instead of \"try turning it off and on.\"",
        ],
      },
      commonMistakes: [
        "Assuming \"more storage\" automatically means \"faster computer\" — storage size and storage speed (SSD vs HDD) are two different things",
        "Confusing RAM with storage because both are measured in gigabytes — RAM is temporary workspace, storage is permanent filing",
        "Believing unsaved work is \"in the computer somewhere\" after a crash — RAM clears on power loss, so unsaved work is genuinely gone",
        "Assuming a higher GHz number always means a faster real-world experience, ignoring that core count and the task itself also matter",
      ],
      realWorldTraps: [
        "A retailer advertises \"1 TB of storage!\" in large text while burying \"HDD\" in small print — a large, slow drive, not automatically a great deal",
        "A coworker insists \"just add more storage\" to fix a slow computer, when the actual bottleneck is RAM being full during multitasking",
        "Online marketplace listings sometimes list RAM and storage numbers without labeling which is which — reading \"8/256\" as \"8 GB storage, 256 GB RAM\" would be backwards",
      ],
      realWorldScenario:
        "You're helping a friend shop for a budget laptop. One listing reads '4 GB RAM, 1 TB HDD' for the same price as another reading '8 GB RAM, 256 GB SSD.' The first sounds bigger, but you know 4 GB RAM will struggle with modern browser tabs regardless of storage size, and an SSD will make everyday use noticeably snappier than a much larger HDD. You recommend the second laptop and explain why in one sentence: more usable desk space and a faster filing cabinet beats a bigger, slower filing cabinet with a cramped desk.",
      whenThisFails: [
        "If Settings > System > Storage shows a drive that's nearly full and deleting obvious large files doesn't free enough space, that's a sign to research safely moving files to external or cloud storage — a later module topic — rather than deleting anything unfamiliar",
        "If a computer is slow even with light RAM use and plenty of free storage, the CPU itself (or something running in the background) may be the bottleneck — Task Manager, covered in a later module, is the next tool, not guesswork",
      ],
      teacherReflectionPrompt:
        "In your own words, explain to someone why a computer with \"huge storage but tiny RAM\" can still feel slow, using the desk-and-filing-cabinet picture.",
      quiz: [
        {
          id: "cf-cpu-ram-storage-q1",
          prompt: "What does RAM stand for, and what does it do?",
          choices: [
            { id: "a", text: "Random access memory — short-term, temporary workspace" },
            { id: "b", text: "Rapid attached module — permanent storage" },
            { id: "c", text: "Remote application manager — a networking part" },
            { id: "d", text: "Read-active memory — the CPU's cooling system" },
          ],
          correctChoiceId: "a",
          explanation: "RAM (random access memory) is short-term, temporary workspace that clears when power is lost.",
          difficulty: "easy",
        },
        {
          id: "cf-cpu-ram-storage-q2",
          prompt: "Which type of storage generally loads files faster — SSD or HDD?",
          choices: [
            { id: "a", text: "HDD, because it's mechanical" },
            { id: "b", text: "SSD, because it has no moving parts" },
            { id: "c", text: "They are always identical in speed" },
            { id: "d", text: "Neither — speed depends only on RAM" },
          ],
          correctChoiceId: "b",
          explanation: "SSDs have no moving parts and are significantly faster than mechanical HDDs.",
          difficulty: "easy",
        },
        {
          id: "cf-cpu-ram-storage-q3",
          prompt: "What happens to information in RAM when the computer loses power?",
          choices: [
            { id: "a", text: "It clears completely" },
            { id: "b", text: "It moves automatically to storage" },
            { id: "c", text: "It stays exactly as it was" },
            { id: "d", text: "It gets faster to access" },
          ],
          correctChoiceId: "a",
          explanation: "RAM is temporary — it clears completely the instant power is lost, which is why unsaved work disappears in a crash.",
          difficulty: "medium",
        },
        {
          id: "cf-cpu-ram-storage-q4",
          prompt: "A laptop is described as having a \"quad-core CPU.\" What does \"core\" refer to here?",
          choices: [
            { id: "a", text: "A type of RAM module" },
            { id: "b", text: "A part of the CPU that can work on tasks somewhat independently" },
            { id: "c", text: "A storage partition" },
            { id: "d", text: "A cooling fan" },
          ],
          correctChoiceId: "b",
          explanation: "A core is a part of the CPU that can process tasks somewhat independently — more cores can mean smoother multitasking.",
          difficulty: "medium",
        },
        {
          id: "cf-cpu-ram-storage-q5",
          prompt: "A laptop has plenty of free storage but feels sluggish whenever many browser tabs are open. What's the most likely bottleneck?",
          choices: [
            { id: "a", text: "Storage capacity" },
            { id: "b", text: "RAM" },
            { id: "c", text: "The power supply unit" },
            { id: "d", text: "The case" },
          ],
          correctChoiceId: "b",
          explanation: "Many open tabs each claim RAM; a RAM shortage during multitasking is the most likely cause here, not storage capacity.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-cpu-ram-storage-b1",
          prompt: "CPU speed is measured in:",
          choices: [
            { id: "a", text: "Gigahertz (GHz)" },
            { id: "b", text: "Gigabytes (GB)" },
            { id: "c", text: "Watts" },
          ],
          correctChoiceId: "a",
          explanation: "CPU speed is measured in gigahertz (GHz).",
        },
        {
          id: "cf-cpu-ram-storage-b2",
          prompt: "RAM holds data:",
          choices: [
            { id: "a", text: "Temporarily, while the computer is powered on" },
            { id: "b", text: "Permanently, forever" },
            { id: "c", text: "Only when the computer is off" },
          ],
          correctChoiceId: "a",
          explanation: "RAM is temporary workspace that clears when power is lost.",
        },
        {
          id: "cf-cpu-ram-storage-b3",
          prompt: "Which storage type has moving mechanical parts?",
          choices: [
            { id: "a", text: "HDD (hard disk drive)" },
            { id: "b", text: "SSD (solid-state drive)" },
            { id: "c", text: "RAM" },
          ],
          correctChoiceId: "a",
          explanation: "HDDs use a spinning mechanical disk; SSDs have no moving parts.",
        },
        {
          id: "cf-cpu-ram-storage-b4",
          prompt: "Storage holds files:",
          choices: [
            { id: "a", text: "Permanently, even after shutdown" },
            { id: "b", text: "Only while an app is open" },
            { id: "c", text: "Only until the next restart" },
          ],
          correctChoiceId: "a",
          explanation: "Storage is permanent, long-term space — files remain after shutdown.",
        },
        {
          id: "cf-cpu-ram-storage-b5",
          prompt: "A computer with many browser tabs open and slow performance most likely needs more:",
          choices: [
            { id: "a", text: "RAM" },
            { id: "b", text: "Case airflow vents" },
            { id: "c", text: "Ethernet cables" },
          ],
          correctChoiceId: "a",
          explanation: "Each open tab claims some RAM; running low on RAM is a common cause of multitasking slowness.",
        },
        {
          id: "cf-cpu-ram-storage-b6",
          prompt: "\"Quad-core\" refers to:",
          choices: [
            { id: "a", text: "Four somewhat independent processing cores in the CPU" },
            { id: "b", text: "Four gigabytes of storage" },
            { id: "c", text: "Four cooling fans" },
          ],
          correctChoiceId: "a",
          explanation: "A quad-core CPU has four cores that can work on tasks somewhat independently.",
        },
        {
          id: "cf-cpu-ram-storage-b7",
          prompt: "Which is generally cheaper per gigabyte, SSD or HDD?",
          choices: [
            { id: "a", text: "HDD" },
            { id: "b", text: "SSD" },
            { id: "c", text: "They always cost the same" },
          ],
          correctChoiceId: "a",
          explanation: "HDDs are typically cheaper per gigabyte, though slower than SSDs.",
        },
        {
          id: "cf-cpu-ram-storage-b8",
          prompt: "Unsaved work disappears after a crash because:",
          choices: [
            { id: "a", text: "It was only in RAM, which clears when power is lost" },
            { id: "b", text: "Storage deleted it automatically" },
            { id: "c", text: "The CPU erased it on purpose" },
          ],
          correctChoiceId: "a",
          explanation: "Unsaved work lives only in RAM until saved to storage, so it clears completely on a crash or power loss.",
        },
      ],
      flashcards: [
        { id: "cf-cpu-ram-storage-f1", front: "CPU stands for?", back: "Central processing unit — carries out instructions" },
        { id: "cf-cpu-ram-storage-f2", front: "RAM is measured in?", back: "Gigabytes (GB) — and clears when power is lost" },
        { id: "cf-cpu-ram-storage-f3", front: "SSD vs HDD — which has moving parts?", back: "HDD (hard disk drive); SSD has none and is faster" },
        { id: "cf-cpu-ram-storage-f4", front: "Storage holds files...", back: "Permanently, even after shutdown" },
        { id: "cf-cpu-ram-storage-f5", front: "\"Slow computer\" troubleshooting starts by naming which part?", back: "CPU, RAM, or storage — whichever is the bottleneck" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
    {
      id: "cf-motherboard-power-cooling",
      name: "Motherboard, Power & Cooling",
      prerequisites: ["cf-cpu-ram-storage"],
      objectives: ["CF-M2-O7", "CF-M2-O8", "CF-M2-O9"],
      lesson: {
        title: "Motherboard, Power & Cooling",
        content: `The last topic named the CPU, RAM, and storage — the parts people ask about most. This topic covers the three supporting parts that make all of them actually able to run: the motherboard, the power supply unit (PSU), and cooling.

The motherboard is the large circuit board that every other internal part plugs into or connects through. The CPU sits in a socket on it, RAM slots into slots on it, storage connects via cables or a direct slot, and the PSU feeds power into it. Nothing runs in isolation — the motherboard is the shared communication and power-distribution layer, exactly like a building's plumbing and electrical wiring running behind every wall, connecting every room without anyone seeing the wiring itself.

PSU stands for power supply unit — the component that plugs into the wall outlet and converts standard AC (alternating current) household power into the specific DC (direct current) voltages each internal part actually needs. Different parts need different amounts of power; a high-end CPU or a graphics card (GPU) draws far more than a small storage drive. A PSU is rated in watts, and a PSU too small for the parts it's powering can cause random shutdowns or failures to start — a very real, nameable symptom rather than a mystery.

Cooling is the system that prevents heat damage. Every part that does real work generates heat as a side effect, and the CPU generates the most. Cooling ranges from a simple fan blowing air across a heatsink — a finned metal block designed to spread heat out so it dissipates faster — to more elaborate liquid cooling loops in higher-end desktops. Laptops use small, tightly packed fans and heat pipes because there's far less room to work with inside such a thin case. This is also why laptops sometimes throttle — deliberately slow themselves down — during heavy sustained work, specifically to avoid overheating in a small, sealed space.

This connects directly to safety, and sets up the module's final topic. A PSU can briefly hold an electrical charge even after being unplugged, because of internal components called capacitors that store energy. This is exactly why the general public is advised never to open a power supply, even in situations where the rest of a case is fine to view or dust with authorization. This isn't meant to alarm you — it's meant to explain precisely why "don't open the power supply" is universal advice, not an arbitrary rule someone invented.

These three parts also translate directly into everyday, describable symptoms. "My laptop fan is loud and it's hot to the touch" is a cooling-system observation, not a mystery malfunction — it usually means the cooling system is working exactly as designed under a heavy task, or that a vent is blocked (a sofa cushion, a lap blanket) and needs airflow restored. "My computer randomly shuts off under heavy use" is a symptom worth describing to a technician using this exact vocabulary, since it points specifically toward cooling or power delivery struggling under load, not a vague, unfixable failure.

Naming motherboard, PSU, and cooling correctly means you can describe a hardware symptom precisely — "it shuts down under load" or "the fan never stops" — instead of only saying "it's broken." That precision is often the single fastest thing you can offer IT support or a repair shop, and it costs nothing but the right vocabulary.`,
      },
      lightbulbMoment:
        "The motherboard is the shared wiring every part plugs into, the PSU is the electric meter feeding it all, and cooling is the HVAC system keeping the whole place from overheating — three supporting parts, one job each.",
      keyFacts: [
        "The motherboard is the central circuit board that every other internal part connects to or communicates through",
        "The power supply unit (PSU) converts household AC power from the wall outlet into the DC power levels each internal part needs, and is rated in watts",
        "Cooling systems (fans, heatsinks, or liquid loops) remove the heat that active parts — especially the CPU — generate as a side effect of working",
        "Laptops sometimes deliberately slow down (throttle) under heavy sustained work to avoid overheating in their small, tightly sealed cases",
        "A PSU can briefly hold an electrical charge even after being unplugged, which is why the general public is advised never to open one",
      ],
      guidedExample: {
        title: "Describe a Hardware Symptom Precisely",
        steps: [
          'A laptop shuts off randomly during video calls but works fine for light browsing. Instead of "it\'s broken," name the pattern: it fails specifically under heavier sustained work.',
          "That pattern points toward cooling or power delivery struggling under load, not a random full failure — narrow the vocabulary to \"shuts down under load.\"",
          "Check whether the vents are blocked (soft surface, dust buildup) — a cooling airflow issue is the simplest, cheapest explanation to rule out first.",
          "If vents are clear and it still shuts down under load, that's worth reporting to IT or a repair tech using the exact phrase \"shuts down under sustained heavy use, not on light tasks\" — far more useful than \"it's broken.\"",
          "Notice you reached a specific, communicable description without opening the case or guessing at a part replacement.",
        ],
      },
      commonMistakes: [
        "Describing every hardware issue as \"the motherboard is fried,\" when motherboard, PSU, and cooling are three separate, distinct parts with different symptoms",
        "Blocking laptop vents with a soft surface (bed, couch cushion, lap) without realizing that's a cooling airflow problem in progress",
        "Assuming a loud fan under a heavy task means something is broken, when it's often the cooling system working exactly as designed",
        "Opening a power supply unit out of curiosity, unaware it can retain a charge even unplugged",
      ],
      realWorldTraps: [
        "A repair estimate says \"PSU replacement\" and a coworker assumes that means \"the whole computer is replaced\" — a PSU is one replaceable part, not the entire machine",
        "\"It shuts off randomly\" gets dismissed as unfixable by someone unfamiliar with cooling/power vocabulary, when it's often a specific, diagnosable pattern",
        "A workplace policy bans opening any case at all, even for dusting — a normal, reasonable safety policy tied to PSU risk, not an overreaction",
      ],
      realWorldScenario:
        "Your work laptop keeps shutting off during long video calls but never during quick email checks. Instead of writing 'my laptop is broken' in the ticket, you write 'shuts off only during sustained heavy use, like video calls — works fine for light tasks like email.' The technician immediately suspects a cooling or power delivery issue under load instead of starting from zero, because your description already named the pattern.",
      whenThisFails: [
        "If a desktop won't power on at all — no lights, no fan spin, nothing — that points toward the PSU or a power connection, and is a \"call for help\" moment, not a DIY-open-the-PSU moment",
        "If a laptop overheats and shuts down even with clear vents and light use, that's beyond airflow — it needs a technician, since laptop cooling systems are sealed and not meant for casual user repair",
      ],
      teacherReflectionPrompt:
        "Describe, in your own words and without saying \"broken,\" what \"shuts down under heavy load\" most likely points to, and which two supporting parts share that responsibility.",
      quiz: [
        {
          id: "cf-motherboard-power-cooling-q1",
          prompt: "What does the motherboard do?",
          choices: [
            { id: "a", text: "Connects and lets every other internal part communicate and receive power" },
            { id: "b", text: "Converts wall power into DC voltage" },
            { id: "c", text: "Permanently stores files" },
            { id: "d", text: "Cools the CPU directly with liquid only" },
          ],
          correctChoiceId: "a",
          explanation: "The motherboard is the shared board every other internal part connects to or through.",
          difficulty: "easy",
        },
        {
          id: "cf-motherboard-power-cooling-q2",
          prompt: "What does the PSU convert wall power into?",
          choices: [
            { id: "a", text: "The DC power levels each internal part needs" },
            { id: "b", text: "Wireless network signals" },
            { id: "c", text: "Extra storage capacity" },
            { id: "d", text: "Cooling airflow" },
          ],
          correctChoiceId: "a",
          explanation: "The PSU converts standard AC wall power into the specific DC voltages internal parts need.",
          difficulty: "easy",
        },
        {
          id: "cf-motherboard-power-cooling-q3",
          prompt: "Why shouldn't you open a power supply unit yourself, even when it's unplugged?",
          choices: [
            { id: "a", text: "It can hold an electrical charge from internal capacitors" },
            { id: "b", text: "It automatically voids the CPU warranty" },
            { id: "c", text: "It's illegal in most places" },
            { id: "d", text: "It contains RAM that will be damaged by light" },
          ],
          correctChoiceId: "a",
          explanation: "Internal capacitors in a PSU can briefly retain a charge even after it's unplugged.",
          difficulty: "medium",
        },
        {
          id: "cf-motherboard-power-cooling-q4",
          prompt: "A laptop slows down noticeably during a long video call under heavy use. What is this called?",
          choices: [
            { id: "a", text: "Throttling, to avoid overheating" },
            { id: "b", text: "Storage failure" },
            { id: "c", text: "ESD damage" },
            { id: "d", text: "RAM clearing" },
          ],
          correctChoiceId: "a",
          explanation: "Throttling is a laptop deliberately slowing down under heavy sustained work to avoid overheating.",
          difficulty: "medium",
        },
        {
          id: "cf-motherboard-power-cooling-q5",
          prompt: "A laptop shuts off only during sustained heavy tasks, never during light browsing. What two systems are most likely involved?",
          choices: [
            { id: "a", text: "Cooling and power delivery" },
            { id: "b", text: "RAM and storage" },
            { id: "c", text: "Ports and connectors" },
            { id: "d", text: "The case and the keyboard" },
          ],
          correctChoiceId: "a",
          explanation: "Shutting down specifically under sustained heavy load points toward cooling or power delivery struggling to keep up.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-motherboard-power-cooling-b1",
          prompt: "The motherboard's core job is to:",
          choices: [
            { id: "a", text: "Connect and let every part communicate" },
            { id: "b", text: "Store files permanently" },
            { id: "c", text: "Cool the case" },
          ],
          correctChoiceId: "a",
          explanation: "The motherboard connects every other internal part so they can communicate and receive power.",
        },
        {
          id: "cf-motherboard-power-cooling-b2",
          prompt: "The PSU converts what type of power to what?",
          choices: [
            { id: "a", text: "AC wall power to DC power for internal parts" },
            { id: "b", text: "DC power to Wi-Fi signals" },
            { id: "c", text: "Heat to electricity" },
          ],
          correctChoiceId: "a",
          explanation: "The PSU converts AC household power into the DC power internal parts need.",
        },
        {
          id: "cf-motherboard-power-cooling-b3",
          prompt: "A PSU's power rating is measured in:",
          choices: [
            { id: "a", text: "Watts" },
            { id: "b", text: "Gigabytes" },
            { id: "c", text: "Gigahertz" },
          ],
          correctChoiceId: "a",
          explanation: "PSUs are rated in watts.",
        },
        {
          id: "cf-motherboard-power-cooling-b4",
          prompt: "Why never open a PSU, even unplugged?",
          choices: [
            { id: "a", text: "It can hold an electric charge from capacitors" },
            { id: "b", text: "It contains no useful parts" },
            { id: "c", text: "It automatically resets the motherboard" },
          ],
          correctChoiceId: "a",
          explanation: "Internal capacitors can retain a charge even after a PSU is unplugged.",
        },
        {
          id: "cf-motherboard-power-cooling-b5",
          prompt: "What does a heatsink do?",
          choices: [
            { id: "a", text: "Spreads out heat so it dissipates faster" },
            { id: "b", text: "Stores backup power" },
            { id: "c", text: "Boosts CPU speed permanently" },
          ],
          correctChoiceId: "a",
          explanation: "A heatsink is a finned metal block that spreads heat out to help it dissipate.",
        },
        {
          id: "cf-motherboard-power-cooling-b6",
          prompt: "Laptop throttling is a response to:",
          choices: [
            { id: "a", text: "Heat buildup during sustained heavy use" },
            { id: "b", text: "Low storage space" },
            { id: "c", text: "A disconnected mouse" },
          ],
          correctChoiceId: "a",
          explanation: "Throttling is a deliberate slowdown to avoid overheating during heavy sustained work.",
        },
        {
          id: "cf-motherboard-power-cooling-b7",
          prompt: "A desktop that shuts off only during heavy tasks most likely points to:",
          choices: [
            { id: "a", text: "Cooling or power delivery struggling under load" },
            { id: "b", text: "A full storage drive" },
            { id: "c", text: "A missing mouse driver" },
          ],
          correctChoiceId: "a",
          explanation: "Shutdowns specifically under heavy load point toward cooling or power delivery, not storage or peripherals.",
        },
        {
          id: "cf-motherboard-power-cooling-b8",
          prompt: "Which two supporting systems most often share responsibility for \"shuts down under load\"?",
          choices: [
            { id: "a", text: "Cooling and power delivery" },
            { id: "b", text: "RAM and the case" },
            { id: "c", text: "Ports and cables" },
          ],
          correctChoiceId: "a",
          explanation: "Cooling and power delivery are the two systems most commonly responsible for load-triggered shutdowns.",
        },
      ],
      flashcards: [
        { id: "cf-motherboard-power-cooling-f1", front: "Motherboard's job?", back: "Connects and lets every other internal part communicate and receive power" },
        { id: "cf-motherboard-power-cooling-f2", front: "PSU converts what to what?", back: "Wall AC power to the DC power each part needs" },
        { id: "cf-motherboard-power-cooling-f3", front: "Why is a PSU risky to open, even unplugged?", back: "It can briefly hold an electrical charge from internal capacitors" },
        { id: "cf-motherboard-power-cooling-f4", front: "What is throttling?", back: "A laptop deliberately slowing down to avoid overheating" },
        { id: "cf-motherboard-power-cooling-f5", front: "PSU is rated in?", back: "Watts" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
    {
      id: "cf-ports-and-connectors",
      name: "Ports & Connectors",
      prerequisites: ["cf-motherboard-power-cooling"],
      objectives: ["CF-M2-O10", "CF-M2-O11", "CF-M2-O12"],
      lesson: {
        title: "Ports & Connectors",
        content: `A port is the physical opening on a device that a cable plugs into. A connector is the matching end of a cable that plugs into it. This topic is about recognizing the most common ports by shape and knowing roughly what each one is for — literacy level, not memorizing pin counts or technical standards.

USB-A is the classic rectangular USB port. It's one-way, meaning there's a right-side-up orientation you have to find before it slides in — a small, familiar frustration most people have already met. USB-C is smaller and oval-shaped, and reversible: it plugs in either way, with no flipping required to find the correct side. USB-C is increasingly the standard for charging, data transfer, and even video output on modern laptops and phones, replacing USB-A on many newer devices.

HDMI is a video (and usually audio) port used for connecting to monitors, TVs, and projectors. Its connector has a distinct, slightly trapezoid shape you'll recognize instantly once you've been shown it once. DisplayPort serves a similar purpose — video output — and is common on desktop monitors and graphics cards. It looks visually similar to HDMI at a glance but is not interchangeable with it; for this course, it's enough to recognize both as "video output" ports, without needing to explain the technical differences between them.

Ethernet, also called RJ45, is the wired networking port — wider than a phone-charger-style jack, and used to connect a cable directly to a wired network. This gets covered in far more depth in the upcoming networking module; for now, just recognize its boxier shape and know its purpose is wired networking, not power or video. The 3.5mm audio jack is the small, round port for wired headphones or microphones — the same size port most phones used for headphones for many years before wireless became standard.

Rather than memorizing names first, this course teaches "recognize by shape, then attach the name." Hold a cable's connector up to a candidate port; if it's an obvious physical match, it's very likely the right one. Most connectors are intentionally shaped so you genuinely cannot force the wrong one in — a small, deliberate mercy of standardization that saves you from a lot of guesswork once you trust it.

A common real-world friction point: docking stations, monitors, and older devices sometimes only offer one or two of these ports, forcing the use of a small adapter or hub to bridge the gap. This is completely normal and not a sign that anything is wrong with your device — it's covered in more depth in the next topic on peripherals and displays.

Recognizing ports correctly by shape and name pays off twice. It lets you follow setup instructions ("plug the HDMI cable into the HDMI port") without mentally translating jargon first, and it lets you describe a problem precisely — "the USB-C port doesn't charge my laptop anymore" — instead of the far vaguer "the charging thing doesn't work."`,
      },
      lightbulbMoment:
        "Ports are shaped so you almost can't plug the wrong cable in — recognizing the shape is 90% of the skill; the name is just the label you attach afterward.",
      keyFacts: [
        "A port is the physical opening on a device; a connector is the matching end of a cable that plugs into it",
        "USB-A is the classic one-way rectangular port; USB-C is smaller, oval, and reversible — increasingly standard for charging, data, and video",
        "HDMI and DisplayPort are both video-output ports for monitors, TVs, and projectors — similar purpose, different (non-interchangeable) shapes",
        "Ethernet (RJ45) is the wired networking port; the 3.5mm audio jack is the small round port for wired headphones and microphones",
        "Most ports are physically shaped so the wrong cable simply won't fit — matching shapes is a reliable first step before worrying about names",
      ],
      guidedExample: {
        title: "Match the Cable to the Port",
        steps: [
          "You're handed a laptop and a bag of cables: one ends in a small reversible oval connector, one in a wide trapezoid shape, one in a familiar round headphone-style tip.",
          "The small reversible oval connector is USB-C — check the laptop for a matching oval port; it can go in either way.",
          "The wide trapezoid connector is HDMI — look for a similarly shaped port, usually near other video or charging ports, and connect it to a monitor or TV.",
          "The round tip connector is a 3.5mm audio jack — plug it into the matching round port, usually marked with a small headphone icon.",
          "If any cable doesn't physically fit a port without force, stop — that's your signal it's the wrong port, not a sign to push harder.",
        ],
      },
      commonMistakes: [
        "Forcing a connector into a port that doesn't quite fit instead of trusting the shape mismatch as a signal",
        "Assuming HDMI and DisplayPort are interchangeable because they look similar at a glance",
        "Calling every small port \"a USB port\" without distinguishing USB-A from USB-C, which affects both cable shape and orientation",
        "Assuming a device is broken when it simply has fewer ports than expected, rather than needing an adapter or hub",
      ],
      realWorldTraps: [
        "A conference room or hotel monitor offers only HDMI, but your laptop only has USB-C — a common, fixable mismatch, not a broken laptop",
        "A coworker says \"just plug in the USB\" without specifying USB-A or USB-C, assuming you'll know which cable they mean",
        "Store listings advertise \"USB-C fast charging\" without clarifying that not every USB-C port or cable supports the same charging speed — visually identical ports can behave differently",
      ],
      realWorldScenario:
        "You arrive at a client site to present from your laptop, and the conference room projector only has an HDMI input while your laptop only has USB-C ports. Instead of panicking, you recognize this as a known, common port mismatch — not a broken laptop — and ask the front desk for a USB-C-to-HDMI adapter, which most modern offices keep on hand for exactly this situation.",
      whenThisFails: [
        "If a cable and port look like a matching shape but nothing happens when connected, check for a small icon or label near the port (some ports look similar but serve different purposes) before assuming either device is broken",
        "If no adapter is available and a mismatch can't be resolved on the spot, it's reasonable to note the port types involved and ask IT or the venue for the correct cable rather than guessing with force",
      ],
      teacherReflectionPrompt:
        "Look at the back or side of any computer near you right now and name three ports you can identify by shape alone, out loud, before checking any label.",
      quiz: [
        {
          id: "cf-ports-and-connectors-q1",
          prompt: "What is the key trait of a USB-C port?",
          choices: [
            { id: "a", text: "It's reversible — it plugs in either way" },
            { id: "b", text: "It only carries audio" },
            { id: "c", text: "It requires a special adapter for every use" },
            { id: "d", text: "It is only found on printers" },
          ],
          correctChoiceId: "a",
          explanation: "USB-C is reversible, unlike the one-way USB-A port.",
          difficulty: "easy",
        },
        {
          id: "cf-ports-and-connectors-q2",
          prompt: "What is HDMI primarily used for?",
          choices: [
            { id: "a", text: "Video and audio output to monitors, TVs, or projectors" },
            { id: "b", text: "Charging a laptop" },
            { id: "c", text: "Wired networking" },
            { id: "d", text: "Connecting a mouse" },
          ],
          correctChoiceId: "a",
          explanation: "HDMI is a video (and usually audio) output port.",
          difficulty: "easy",
        },
        {
          id: "cf-ports-and-connectors-q3",
          prompt: "What is the Ethernet port also known as?",
          choices: [
            { id: "a", text: "RJ45" },
            { id: "b", text: "USB-C" },
            { id: "c", text: "3.5mm jack" },
            { id: "d", text: "DisplayPort" },
          ],
          correctChoiceId: "a",
          explanation: "The Ethernet port is also called RJ45.",
          difficulty: "medium",
        },
        {
          id: "cf-ports-and-connectors-q4",
          prompt: "If a cable's connector doesn't easily fit into a port, what should you do?",
          choices: [
            { id: "a", text: "Push harder until it goes in" },
            { id: "b", text: "Stop and check the shape — it's likely the wrong port" },
            { id: "c", text: "Assume the device is broken" },
            { id: "d", text: "Try a different, unrelated cable at random" },
          ],
          correctChoiceId: "b",
          explanation: "A poor fit is a signal to check the shape, not a sign to force the connection.",
          difficulty: "medium",
        },
        {
          id: "cf-ports-and-connectors-q5",
          prompt: "A laptop with only USB-C ports needs to connect to a monitor that only has an HDMI input. What's the correct next step?",
          choices: [
            { id: "a", text: "Use a USB-C-to-HDMI adapter" },
            { id: "b", text: "Force the HDMI cable into the USB-C port" },
            { id: "c", text: "Assume the monitor is broken" },
            { id: "d", text: "Give up on connecting entirely" },
          ],
          correctChoiceId: "a",
          explanation: "A USB-C-to-HDMI adapter bridges this common, normal port mismatch.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-ports-and-connectors-b1",
          prompt: "Which port is reversible?",
          choices: [
            { id: "a", text: "USB-C" },
            { id: "b", text: "USB-A" },
            { id: "c", text: "RJ45" },
          ],
          correctChoiceId: "a",
          explanation: "USB-C is reversible; USB-A is one-way.",
        },
        {
          id: "cf-ports-and-connectors-b2",
          prompt: "HDMI carries:",
          choices: [
            { id: "a", text: "Video and usually audio" },
            { id: "b", text: "Only network data" },
            { id: "c", text: "Only power" },
          ],
          correctChoiceId: "a",
          explanation: "HDMI is a combined video and audio output port.",
        },
        {
          id: "cf-ports-and-connectors-b3",
          prompt: "What is a connector?",
          choices: [
            { id: "a", text: "The end of a cable that plugs into a port" },
            { id: "b", text: "The opening on a device" },
            { id: "c", text: "A type of internal cooling fan" },
          ],
          correctChoiceId: "a",
          explanation: "A connector is the end of the cable; a port is the opening it plugs into.",
        },
        {
          id: "cf-ports-and-connectors-b4",
          prompt: "The Ethernet port is also known as:",
          choices: [
            { id: "a", text: "RJ45" },
            { id: "b", text: "USB-A" },
            { id: "c", text: "HDMI" },
          ],
          correctChoiceId: "a",
          explanation: "Ethernet ports are also called RJ45 ports.",
        },
        {
          id: "cf-ports-and-connectors-b5",
          prompt: "What is the small round port for wired headphones called?",
          choices: [
            { id: "a", text: "3.5mm audio jack" },
            { id: "b", text: "USB-C port" },
            { id: "c", text: "DisplayPort" },
          ],
          correctChoiceId: "a",
          explanation: "The 3.5mm audio jack is the standard round port for wired headphones and microphones.",
        },
        {
          id: "cf-ports-and-connectors-b6",
          prompt: "If a cable doesn't fit a port easily, you should:",
          choices: [
            { id: "a", text: "Stop and check the shape, don't force it" },
            { id: "b", text: "Push harder" },
            { id: "c", text: "Try a hammer" },
          ],
          correctChoiceId: "a",
          explanation: "A poor fit is a signal to check the shape, not to force the connection.",
        },
        {
          id: "cf-ports-and-connectors-b7",
          prompt: "DisplayPort and HDMI both serve what purpose?",
          choices: [
            { id: "a", text: "Video output" },
            { id: "b", text: "Wired networking" },
            { id: "c", text: "Charging only" },
          ],
          correctChoiceId: "a",
          explanation: "Both DisplayPort and HDMI are video-output ports, even though their shapes differ.",
        },
        {
          id: "cf-ports-and-connectors-b8",
          prompt: "A laptop with only USB-C ports connecting to an HDMI-only monitor needs:",
          choices: [
            { id: "a", text: "An adapter" },
            { id: "b", text: "A new laptop" },
            { id: "c", text: "Nothing — they always match" },
          ],
          correctChoiceId: "a",
          explanation: "A USB-C-to-HDMI adapter resolves this common port mismatch.",
        },
      ],
      flashcards: [
        { id: "cf-ports-and-connectors-f1", front: "Difference between USB-A and USB-C shape?", back: "USB-A is rectangular, one-way; USB-C is smaller, oval, reversible" },
        { id: "cf-ports-and-connectors-f2", front: "HDMI is used for?", back: "Video and audio output to monitors, TVs, projectors" },
        { id: "cf-ports-and-connectors-f3", front: "Ethernet port is also called?", back: "RJ45 — wired networking port" },
        { id: "cf-ports-and-connectors-f4", front: "3.5mm jack is for?", back: "Wired headphones or microphones" },
        { id: "cf-ports-and-connectors-f5", front: "If a connector doesn't fit a port, what should you do?", back: "Stop and check the shape — don't force it" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-peripherals-and-displays",
      name: "Peripherals & Displays",
      prerequisites: ["cf-ports-and-connectors"],
      objectives: ["CF-M2-O13", "CF-M2-O14", "CF-M2-O15"],
      lesson: {
        title: "Peripherals & Displays",
        content: `A peripheral is any external device connected to a computer to add input or output ability — a monitor, keyboard, mouse, webcam, headset, printer, or external drive. This is a distinct category from the internal parts covered earlier: peripherals live outside the case and usually connect through the ports covered in the last topic.

Start with displays. Resolution describes how many pixels — tiny dots of light — make up the picture, commonly described with numbers like 1920x1080 (often called "1080p" or "Full HD"). Higher resolution generally means a sharper, more detailed picture on the same size screen. Refresh rate describes how many times per second the image updates, measured in Hz (hertz). 60Hz is standard for everyday use; higher numbers matter mainly for fast motion, like gaming or video editing, where a smoother-looking image matters more.

Many desktop and laptop setups connect a second — or third — monitor for more visible workspace at once. This uses the video ports from the last topic (HDMI, DisplayPort, or USB-C with video support) and is a common setup in ordinary office jobs, not something reserved for tech-heavy roles.

Input peripherals include keyboards and mice, which come in a few connection types. Wired ones plug directly into a port. Wireless ones split into two common types: Bluetooth, which pairs directly with the computer's built-in Bluetooth, and RF/dongle, which uses a small separate USB receiver instead of Bluetooth. Knowing which type a peripheral uses matters directly for troubleshooting — a Bluetooth mouse that stops responding is fixed differently than a dongle-based one that stops responding, since the failure points are different.

Other common peripherals round out the picture: a webcam provides video input, often built into laptops but also available as an external add-on; a headset or standalone microphone provides audio input and output; an external drive adds extra portable storage that plugs in via USB; a printer produces output onto paper, connecting via USB or over the home or office network.

Docking stations and hubs deserve a specific mention, because they solve one of the most common real-world frustrations in this whole module: a laptop with only two USB-C ports, but a monitor, mouse, keyboard, and charger all needing to connect at once. A docking station or hub plugs into one port on the laptop and provides several additional ports at once, and it's a completely standard piece of office equipment — not a workaround for a broken or underpowered laptop.

Recognizing "peripheral" as its own category — external, add-on, connects through a port — turns an unfamiliar phrase into a familiar one. IT inventory and asset forms often literally use the word "peripherals" as a section heading, and troubleshooting a mouse or monitor now starts from the right mental category — "this is an external peripheral connection issue" — instead of jumping straight to "the whole computer must be broken."`,
      },
      lightbulbMoment:
        "A peripheral is anything external that plugs in to add an ability the computer doesn't have built in — once you can say that sentence, every \"peripherals\" section on an IT form makes sense.",
      keyFacts: [
        "A peripheral is any external device connected to a computer to add input or output ability — monitor, keyboard, mouse, webcam, headset, printer, and external drives are all peripherals",
        "Resolution describes how many pixels make up a screen's picture (like 1920x1080, or \"1080p\"); refresh rate describes how many times per second the image updates, measured in Hz",
        "Keyboards and mice can be wired, Bluetooth (pairs directly), or RF/dongle (a separate small USB receiver) — each type troubleshoots differently",
        "A docking station or hub plugs into one port and provides several additional ports, solving the common problem of a laptop having fewer ports than devices to connect",
        "Connecting multiple monitors is a normal office setup that uses the video ports (HDMI, DisplayPort, USB-C) covered in the previous topic",
      ],
      guidedExample: {
        title: "Sort a Peripheral Problem",
        steps: [
          "A wireless mouse stops responding during a meeting. First question: is it Bluetooth, or does it use a small USB dongle receiver?",
          "If it's a dongle-based mouse, check that the dongle is still plugged in and try a different USB port before assuming the mouse itself failed.",
          "If it's Bluetooth, check the computer's Bluetooth settings to confirm it still shows as connected, and check the mouse's battery or power switch.",
          "Either way, avoid assuming \"the mouse is broken\" until you've named which connection type it uses and checked that specific type's usual failure points.",
          "If neither check resolves it, swapping in a spare wired mouse, if available, confirms whether the problem is the mouse itself or the connection method.",
        ],
      },
      commonMistakes: [
        "Calling a monitor, keyboard, or mouse \"part of the computer\" instead of recognizing them as separate peripherals that connect through ports",
        "Assuming a wireless mouse or keyboard failure is always a dead battery, without checking whether it's Bluetooth or dongle-based first",
        "Believing more pixels (higher resolution) always means a better experience on every screen size, without considering refresh rate or intended use",
        "Treating a docking station as an unusual workaround instead of a standard office tool for limited-port laptops",
      ],
      realWorldTraps: [
        "An office issues a docking station with a new laptop, and it looks unfamiliar even though it's standard equipment for that model, not a special or broken accessory",
        "A meeting room's wireless presenter mouse silently disconnects, and someone assumes \"the laptop is broken\" instead of checking the dongle or Bluetooth connection first",
        "IT asset forms list \"peripherals\" as a category, and someone skips filling it in because the word feels overly technical, when it just means \"external stuff you plug in\"",
      ],
      realWorldScenario:
        "You start a new job and your desk has a laptop, a docking station, an external monitor, a keyboard, and a mouse — none of them look identical to what you used at home. Instead of feeling behind, you recognize the pattern immediately: the laptop is the computer, the dock is a port expander, and the monitor, keyboard, and mouse are peripherals connecting through it. You're set up and working within minutes because the categories, not the specific brands, are what you needed to recognize.",
      whenThisFails: [
        "If a monitor shows \"No Signal\" after connecting the right cable, check that the monitor's input source is set to match the port you used — monitors often have multiple inputs to choose between",
        "If a wireless peripheral won't reconnect after checking battery, Bluetooth, and dongle placement, it's reasonable to try a different USB port or restart the computer before assuming the device itself has failed",
      ],
      teacherReflectionPrompt:
        "Name every peripheral connected to a computer you use regularly, and for each one, say out loud whether it's wired, Bluetooth, or dongle-based.",
      quiz: [
        {
          id: "cf-peripherals-and-displays-q1",
          prompt: "What is a peripheral?",
          choices: [
            { id: "a", text: "An internal part inside the case" },
            { id: "b", text: "Any external device connected to add input or output ability" },
            { id: "c", text: "A type of cooling system" },
            { id: "d", text: "A CPU core" },
          ],
          correctChoiceId: "b",
          explanation: "A peripheral is any external device connected to add input or output ability.",
          difficulty: "easy",
        },
        {
          id: "cf-peripherals-and-displays-q2",
          prompt: "What does resolution describe on a display?",
          choices: [
            { id: "a", text: "How many pixels make up the picture" },
            { id: "b", text: "How loud the speakers are" },
            { id: "c", text: "How much storage the monitor has" },
            { id: "d", text: "The weight of the monitor" },
          ],
          correctChoiceId: "a",
          explanation: "Resolution describes how many pixels make up the screen's picture.",
          difficulty: "easy",
        },
        {
          id: "cf-peripherals-and-displays-q3",
          prompt: "What are two common ways a wireless mouse or keyboard connects?",
          choices: [
            { id: "a", text: "Bluetooth and RF/dongle receiver" },
            { id: "b", text: "HDMI and DisplayPort" },
            { id: "c", text: "Ethernet and RJ45" },
            { id: "d", text: "3.5mm jack and USB-A only" },
          ],
          correctChoiceId: "a",
          explanation: "Wireless mice and keyboards commonly connect via Bluetooth or a small RF/dongle receiver.",
          difficulty: "medium",
        },
        {
          id: "cf-peripherals-and-displays-q4",
          prompt: "What problem does a docking station or hub solve?",
          choices: [
            { id: "a", text: "A laptop having fewer ports than devices that need to connect" },
            { id: "b", text: "A CPU running too hot" },
            { id: "c", text: "RAM clearing after a crash" },
            { id: "d", text: "A full storage drive" },
          ],
          correctChoiceId: "a",
          explanation: "A docking station or hub expands one port into several, solving limited-port laptop setups.",
          difficulty: "medium",
        },
        {
          id: "cf-peripherals-and-displays-q5",
          prompt: "A monitor shows \"No Signal\" even though the correct cable is connected. What's the first thing to check?",
          choices: [
            { id: "a", text: "The monitor's input source setting" },
            { id: "b", text: "The CPU's core count" },
            { id: "c", text: "The RAM amount" },
            { id: "d", text: "The case's cooling fans" },
          ],
          correctChoiceId: "a",
          explanation: "Monitors often have multiple inputs, so the input source needs to match the port you used.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-peripherals-and-displays-b1",
          prompt: "Peripheral definition:",
          choices: [
            { id: "a", text: "An external device adding input or output ability" },
            { id: "b", text: "An internal circuit board" },
            { id: "c", text: "A type of storage drive only" },
          ],
          correctChoiceId: "a",
          explanation: "A peripheral is an external device that adds input or output ability.",
        },
        {
          id: "cf-peripherals-and-displays-b2",
          prompt: "Resolution describes:",
          choices: [
            { id: "a", text: "The number of pixels making up the picture" },
            { id: "b", text: "The screen's physical weight" },
            { id: "c", text: "The amount of RAM installed" },
          ],
          correctChoiceId: "a",
          explanation: "Resolution is the number of pixels that make up a display's picture.",
        },
        {
          id: "cf-peripherals-and-displays-b3",
          prompt: "Refresh rate is measured in:",
          choices: [
            { id: "a", text: "Hz (hertz)" },
            { id: "b", text: "GB (gigabytes)" },
            { id: "c", text: "Watts" },
          ],
          correctChoiceId: "a",
          explanation: "Refresh rate is measured in Hz — how many times per second the image updates.",
        },
        {
          id: "cf-peripherals-and-displays-b4",
          prompt: "Two common wireless connections for mice/keyboards:",
          choices: [
            { id: "a", text: "Bluetooth and RF/dongle" },
            { id: "b", text: "HDMI and USB-A" },
            { id: "c", text: "Ethernet and audio jack" },
          ],
          correctChoiceId: "a",
          explanation: "Bluetooth and RF/dongle are the two common wireless connection types.",
        },
        {
          id: "cf-peripherals-and-displays-b5",
          prompt: "What does a docking station/hub solve?",
          choices: [
            { id: "a", text: "Too few ports on a laptop for all needed devices" },
            { id: "b", text: "A laptop's low RAM" },
            { id: "c", text: "A cracked screen" },
          ],
          correctChoiceId: "a",
          explanation: "A docking station or hub expands a limited number of laptop ports into several.",
        },
        {
          id: "cf-peripherals-and-displays-b6",
          prompt: "A webcam is an example of:",
          choices: [
            { id: "a", text: "A peripheral, specifically video input" },
            { id: "b", text: "An internal cooling part" },
            { id: "c", text: "A type of storage" },
          ],
          correctChoiceId: "a",
          explanation: "A webcam is a peripheral that provides video input.",
        },
        {
          id: "cf-peripherals-and-displays-b7",
          prompt: "A monitor shows \"No Signal\" after connecting correctly — first check:",
          choices: [
            { id: "a", text: "The monitor's input source setting" },
            { id: "b", text: "The PSU wattage" },
            { id: "c", text: "The RAM capacity" },
          ],
          correctChoiceId: "a",
          explanation: "Checking the monitor's input source is the first step, since monitors often have multiple inputs.",
        },
        {
          id: "cf-peripherals-and-displays-b8",
          prompt: "Connecting a second monitor uses which type of port?",
          choices: [
            { id: "a", text: "Video ports like HDMI, DisplayPort, or USB-C" },
            { id: "b", text: "Only the audio jack" },
            { id: "c", text: "Only the Ethernet port" },
          ],
          correctChoiceId: "a",
          explanation: "Multiple monitors connect through video-output ports covered in the previous topic.",
        },
      ],
      flashcards: [
        { id: "cf-peripherals-and-displays-f1", front: "What is a peripheral?", back: "Any external device connected to add input or output ability" },
        { id: "cf-peripherals-and-displays-f2", front: "Resolution measures?", back: "Number of pixels making up the screen picture" },
        { id: "cf-peripherals-and-displays-f3", front: "Refresh rate measures?", back: "How many times per second the image updates (Hz)" },
        { id: "cf-peripherals-and-displays-f4", front: "Two common wireless connection types for mice/keyboards?", back: "Bluetooth and RF/dongle receiver" },
        { id: "cf-peripherals-and-displays-f5", front: "What does a docking station/hub do?", back: "Expands one port into several for laptops with limited ports" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-cables-common-types",
      name: "Common Cable Types",
      prerequisites: ["cf-peripherals-and-displays"],
      objectives: ["CF-M2-O16", "CF-M2-O17", "CF-M2-O18"],
      lesson: {
        title: "Common Cable Types",
        content: `This topic zooms all the way into cables themselves — the physical cords connecting everything covered so far. Ports, from an earlier topic, are the openings; cables are what actually runs between devices, each one with a connector shaped to match a specific port.

Power cables deliver electricity. This can be a simple two- or three-prong cord running straight into the wall, common for desktops and monitors, or a "brick"-style charger with a barrel tip or USB-C tip, common for laptops. Charging cables — phone-style USB-A-to-USB-C or USB-C-to-USB-C — increasingly double as laptop chargers on newer models, blurring the old line between "phone cable" and "laptop cable."

Data and video cables move information instead of power. USB cables (A-to-C, C-to-C, or the older A-to-micro-USB) move files and connect peripherals. HDMI and DisplayPort cables carry video, and usually audio, to monitors and TVs. Ethernet cables carry wired network data, and are recognizable by a slightly wider, boxier, clear-ish plug called RJ45 — distinct from phone-style cables despite a superficial size similarity to some older phone jacks.

The recognition-by-shape test from the ports topic applies directly here: hold the connector end up before assuming which cable you're holding. USB-C is the smallest, most symmetrical-looking oval. HDMI is a wider trapezoid. Ethernet's plug is boxier, with small visible metal pins along one edge. A laptop charger barrel tip is round and, on some brands, has a distinct click or magnetic snap when it connects.

Cable care is a practical, low-effort literacy skill worth building early. Avoid yanking a cable by the cord instead of the connector — this stresses and eventually breaks the connection point first, well before the rest of the cable wears out. Coil cables loosely rather than tightly wrapping them in the exact same crease every time, since repeated sharp bends fatigue the wire inside and shorten its life. Avoid running cables under rolling chairs or across high-traffic walkways, where they get stepped on or pinched — small, cumulative damage that eventually causes a cable to fail.

A common, low-stakes real-world mixup: a phone charging cable and a laptop charging cable can look identical, especially when both are USB-C-to-USB-C, but deliver very different amounts of power. Using the wrong one usually just charges painfully slowly rather than damaging anything — a helpful thing to know before assuming a cable or device is broken.

Cables are the most physically handled, most frequently swapped, and most often blamed part of any setup — "is it the cable or the port?" is one of the most common troubleshooting questions in any office. This topic gives you the shape vocabulary and the care habits to answer that question yourself, quickly, before escalating it to someone else.`,
      },
      lightbulbMoment:
        "When something \"won't connect,\" the cable is one of the cheapest, fastest things to swap and rule out — before assuming the device itself is broken.",
      keyFacts: [
        "Cables have a connector on each end shaped to match a specific port — USB-C is a small symmetrical oval, HDMI is a wider trapezoid, Ethernet (RJ45) is boxier with visible metal pins",
        "Power cables deliver electricity (a wall cord, or a \"brick\" charger with a barrel or USB-C tip); data/video cables (USB, HDMI, DisplayPort, Ethernet) move files, video, or network traffic",
        "Two USB-C cables can look identical but deliver very different charging power — a mismatch usually means slow charging, not damage",
        "Pulling a cable by the cord instead of the connector, and repeatedly sharp-bending it in the same spot, are the two most common ways cables wear out and fail early",
        "When a connection \"won't work,\" swapping in a known-working cable is one of the fastest, cheapest first troubleshooting steps",
      ],
      guidedExample: {
        title: "Rule Out the Cable First",
        steps: [
          "A monitor shows nothing despite being connected with an HDMI cable. Before assuming the monitor or laptop is broken, check the cable itself.",
          "Confirm the cable's connectors are seated snugly in both ports — a loose or half-inserted connector is a common, invisible-at-a-glance cause.",
          "If you have a second HDMI cable available, swap it in — if the picture appears, the original cable was the problem, not either device.",
          "If no spare cable exists, try the same cable on a different port or device if possible, to see if the cable itself is the common failing factor.",
          "Only after ruling out the cable does it make sense to suspect the monitor or the video port itself.",
        ],
      },
      commonMistakes: [
        "Assuming a \"no connection\" problem is always the device, without first testing whether the cable itself is the issue",
        "Yanking a cable out by the cord instead of gripping the connector, which stresses the connection point over time",
        "Using a random USB-C cable for laptop charging and assuming it's broken when it's actually just a slower, lower-power cable",
        "Tightly coiling cables in the exact same folds every time, which fatigues and eventually breaks the wire inside",
      ],
      realWorldTraps: [
        "A \"broken\" monitor at a shared desk turns out to be a bent or half-inserted cable, something a five-second reseat would have fixed",
        "A coworker insists their new laptop charger \"must be defective\" because it charges slowly, when it's actually a lower-wattage cable meant for phones, not laptops",
        "Facilities or IT sometimes label all cable problems generically as \"hardware issues,\" when a simple cable swap resolves most of them without any real hardware involved",
      ],
      realWorldScenario:
        "A shared conference room laptop suddenly won't display on the projector. Instead of reporting 'the laptop is broken,' you check the HDMI cable first, notice it's only halfway plugged in from someone brushing against it earlier, reseat it firmly, and the picture appears immediately — a two-minute fix instead of a service ticket.",
      whenThisFails: [
        "If swapping to a known-working cable doesn't resolve the issue, the problem is more likely the port or the device itself, and that's the point to note what you tried (which cable, which port) and escalate with specifics",
        "If a cable looks physically damaged (exposed wire, bent pins, burn marks), stop using it entirely and report it rather than continuing to test with it — a damaged cable is a safety issue, not just a connectivity one",
      ],
      teacherReflectionPrompt:
        "Pick a cable near you right now, identify its connector type by shape alone, and explain out loud one care habit that helps it last longer.",
      quiz: [
        {
          id: "cf-cables-common-types-q1",
          prompt: "What should you grip when unplugging a cable?",
          choices: [
            { id: "a", text: "The connector, not the cord" },
            { id: "b", text: "The middle of the cord" },
            { id: "c", text: "Whatever part is easiest to grab" },
            { id: "d", text: "The port itself" },
          ],
          correctChoiceId: "a",
          explanation: "Gripping the connector, not the cord, avoids stressing the connection point.",
          difficulty: "easy",
        },
        {
          id: "cf-cables-common-types-q2",
          prompt: "Cables generally serve which two purposes?",
          choices: [
            { id: "a", text: "Delivering power, or moving data/video/network traffic" },
            { id: "b", text: "Cooling and storage only" },
            { id: "c", text: "Only charging phones" },
            { id: "d", text: "Only connecting monitors" },
          ],
          correctChoiceId: "a",
          explanation: "Cables either deliver power or move data, video, or network traffic.",
          difficulty: "easy",
        },
        {
          id: "cf-cables-common-types-q3",
          prompt: "Why might a laptop charge very slowly with a random USB-C cable?",
          choices: [
            { id: "a", text: "The cable may carry less power than the laptop needs, even though it fits" },
            { id: "b", text: "USB-C cables never work for laptops" },
            { id: "c", text: "The laptop's battery is always at fault" },
            { id: "d", text: "USB-C cables only work with monitors" },
          ],
          correctChoiceId: "a",
          explanation: "Identical-looking USB-C cables can carry very different amounts of power.",
          difficulty: "medium",
        },
        {
          id: "cf-cables-common-types-q4",
          prompt: "A monitor shows nothing after connecting an HDMI cable. What's a smart first troubleshooting step?",
          choices: [
            { id: "a", text: "Check that the cable is seated snugly, or swap in a known-working cable" },
            { id: "b", text: "Immediately replace the monitor" },
            { id: "c", text: "Reinstall the operating system" },
            { id: "d", text: "Open the power supply unit" },
          ],
          correctChoiceId: "a",
          explanation: "Checking or swapping the cable is a fast, cheap first step before suspecting the devices themselves.",
          difficulty: "medium",
        },
        {
          id: "cf-cables-common-types-q5",
          prompt: "You notice a cable has exposed wire near the connector. What should you do?",
          choices: [
            { id: "a", text: "Keep using it carefully" },
            { id: "b", text: "Stop using it and report it" },
            { id: "c", text: "Wrap it tighter and continue" },
            { id: "d", text: "Ignore it since it still works" },
          ],
          correctChoiceId: "b",
          explanation: "A damaged cable with exposed wire is a safety issue and should be stopped from use and reported.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-cables-common-types-b1",
          prompt: "What shape is a USB-C connector?",
          choices: [
            { id: "a", text: "A small, symmetrical oval" },
            { id: "b", text: "A wide trapezoid" },
            { id: "c", text: "A round barrel" },
          ],
          correctChoiceId: "a",
          explanation: "USB-C connectors are small, symmetrical ovals.",
        },
        {
          id: "cf-cables-common-types-b2",
          prompt: "What shape is an Ethernet (RJ45) plug?",
          choices: [
            { id: "a", text: "Boxier, with visible metal pins" },
            { id: "b", text: "A round tip" },
            { id: "c", text: "A small oval" },
          ],
          correctChoiceId: "a",
          explanation: "Ethernet plugs are boxier, with small visible metal pins along one edge.",
        },
        {
          id: "cf-cables-common-types-b3",
          prompt: "What should you grip when unplugging?",
          choices: [
            { id: "a", text: "The connector, not the cord" },
            { id: "b", text: "The cord, anywhere" },
            { id: "c", text: "The port" },
          ],
          correctChoiceId: "a",
          explanation: "Gripping the connector avoids stressing the connection point.",
        },
        {
          id: "cf-cables-common-types-b4",
          prompt: "Why might identical-looking USB-C cables charge differently?",
          choices: [
            { id: "a", text: "They can carry different amounts of power" },
            { id: "b", text: "One is always defective" },
            { id: "c", text: "USB-C cables are all identical in power" },
          ],
          correctChoiceId: "a",
          explanation: "Visually identical USB-C cables can carry very different amounts of power.",
        },
        {
          id: "cf-cables-common-types-b5",
          prompt: "What's a fast early troubleshooting step for \"no connection\"?",
          choices: [
            { id: "a", text: "Check or swap the cable" },
            { id: "b", text: "Replace the device immediately" },
            { id: "c", text: "Reinstall the operating system" },
          ],
          correctChoiceId: "a",
          explanation: "Checking or swapping the cable is a fast, cheap first step.",
        },
        {
          id: "cf-cables-common-types-b6",
          prompt: "Repeatedly sharp-bending a cable in the same spot causes:",
          choices: [
            { id: "a", text: "Wire fatigue and eventual failure" },
            { id: "b", text: "Faster data speeds" },
            { id: "c", text: "No effect at all" },
          ],
          correctChoiceId: "a",
          explanation: "Repeated sharp bends fatigue the wire inside and shorten a cable's life.",
        },
        {
          id: "cf-cables-common-types-b7",
          prompt: "A cable with exposed wire should be:",
          choices: [
            { id: "a", text: "Stopped from use and reported" },
            { id: "b", text: "Taped and reused immediately" },
            { id: "c", text: "Ignored if it still works" },
          ],
          correctChoiceId: "a",
          explanation: "A damaged cable is a safety issue and should be reported, not reused.",
        },
        {
          id: "cf-cables-common-types-b8",
          prompt: "A laptop charger \"brick\" usually ends in what kind of tip?",
          choices: [
            { id: "a", text: "A barrel or USB-C tip" },
            { id: "b", text: "An HDMI tip" },
            { id: "c", text: "An Ethernet tip" },
          ],
          correctChoiceId: "a",
          explanation: "Laptop charger bricks commonly end in a round barrel tip or a USB-C tip.",
        },
      ],
      flashcards: [
        { id: "cf-cables-common-types-f1", front: "What should you grip when unplugging a cable?", back: "The connector, not the cord itself" },
        { id: "cf-cables-common-types-f2", front: "Two general cable purposes?", back: "Delivering power, or moving data/video/network traffic" },
        { id: "cf-cables-common-types-f3", front: "Why might two identical-looking USB-C cables charge differently?", back: "They can carry different amounts of power even with the same shape" },
        { id: "cf-cables-common-types-f4", front: "First step when a connection \"won't work\"?", back: "Check and reseat, or swap, the cable before suspecting the device" },
        { id: "cf-cables-common-types-f5", front: "What should you do with a visibly damaged cable?", back: "Stop using it and report it — it's a safety issue" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-esd-and-safe-handling",
      name: "ESD & Safe Handling",
      prerequisites: ["cf-cables-common-types"],
      objectives: ["CF-M2-O19", "CF-M2-O20", "CF-M2-O21"],
      lesson: {
        title: "ESD & Safe Handling",
        content: `ESD stands for electrostatic discharge — the sudden, small transfer of static electricity between two objects. It's the same kind of static shock you sometimes feel touching a doorknob after walking across carpet. That tiny shock is harmless to a person, but the same small static charge can permanently damage sensitive electronic components if it passes through them instead.

This matters even if you never plan to open a case yourself. Static buildup happens from ordinary things: walking on carpet, wearing certain fabrics, or dry winter air. A static-charged hand touching sensitive components — inside an opened case, or exposed connectors like RAM sticks or expansion cards — can silently damage them without any visible spark or felt shock at all. The device may not even fail immediately; ESD damage can also shorten a part's working lifespan in a way that's invisible until much later.

There's a clear, ordered set of core safe-handling habits. Power off and fully unplug a desktop before any internal work — never work on a device that's still receiving power. Touch a grounded metal object, like the unplugged case itself or another metal surface, briefly before touching internals, to discharge any static you're carrying. Avoid working on carpet, especially in dry conditions, since carpet is a common source of static buildup. Avoid wearing wool or certain synthetic fabrics prone to generating static while doing hands-on work. Hold expansion cards, RAM sticks, or drives by their edges, never by touching the gold or metal contact strips directly, since both oils from your skin and static risk that connection.

In professional settings, technicians often use an anti-static wrist strap — a wearable band clipped to a grounded point that continuously bleeds off static while working. It's worth knowing this term exists, without needing to own one for this course's literacy level, since most learners here aren't expected to open a case regularly.

This course sets a realistic scope here on purpose. ESD awareness exists so you can follow basic safety guidance if you're ever handed a component, watch a technician work, or occasionally add something simple like RAM to a desktop you're authorized to open. It does not require you to become a repair technician, and "I'm not confident opening this myself" is always a completely acceptable, professional response — never a sign of failure.

A few broader safe-handling habits sit alongside ESD specifically. Never open a power supply unit, covered in an earlier topic — it can retain a charge even unplugged. Never force a connector that doesn't fit. Keep liquids away from any open case. And always follow the specific make and model's official guidance rather than assuming every device opens or handles identically, since designs vary more than they might appear to from the outside.

This closes out the module's map. From "what's inside the box," through CPU, RAM, and storage, motherboard, power, and cooling, ports, peripherals, and cables, this topic adds the one rule that applies to nearly all of them the moment a case is actually opened: ground yourself first, handle by the edges, and remember that "I'll ask someone with more training" is always a safe, respected choice.`,
      },
      lightbulbMoment:
        "A static shock you can't even feel can still damage a sensitive component — which is exactly why \"touch something metal first\" is real advice, not superstition.",
      keyFacts: [
        "ESD (electrostatic discharge) is a small static electricity transfer that's harmless to people but can permanently damage sensitive electronic components, sometimes without any felt shock or visible spark",
        "Core safe-handling habits: power off and unplug before internal work, touch a grounded metal surface first to discharge static, avoid carpet and static-prone fabrics, and handle cards/RAM/drives by their edges, not the metal contacts",
        "An anti-static wrist strap is a wearable grounding band technicians use to continuously bleed off static while working",
        "A power supply unit should never be opened, even unplugged, since it can retain an electrical charge from internal capacitors",
        "Saying \"I'm not confident opening this myself\" is a completely acceptable, professional response — this course does not require becoming a repair technician",
      ],
      guidedExample: {
        title: "Handle a Component Safely",
        steps: [
          "You're asked to help add a RAM stick to a desktop you're authorized to open. First: power off and fully unplug the desktop — never work on a powered device.",
          "Before touching anything inside, briefly touch the metal case exterior to discharge any static you may be carrying.",
          "Pick up the RAM stick by its edges only — never touch the gold contact strip along the bottom, since oils and static both risk the connection.",
          "Line up the RAM stick with its slot's orientation notch and press in evenly until it clicks — never force it if it doesn't align.",
          "If at any point you feel unsure — a wrong-looking fit, unclear instructions, an unfamiliar case design — it's correct to stop and ask someone with more experience rather than push forward.",
        ],
      },
      commonMistakes: [
        "Assuming static electricity is only a concern if you can feel or see a shock, when unnoticed static can still damage components",
        "Working on carpet or in a static-prone setup out of convenience, without grounding first",
        "Touching the gold contact strips on RAM sticks or expansion cards directly instead of holding them by the edges",
        "Feeling embarrassed to say \"I'd rather have someone experienced handle this,\" when that's actually the safest and most professional response",
      ],
      realWorldTraps: [
        "A workplace policy requires anti-static precautions even for \"just adding RAM,\" and a new employee dismisses it as excessive, not realizing invisible ESD damage is the reason for the rule",
        "A well-meaning friend offers to \"just pop this open real quick\" on a shared or work device without grounding first, risking damage that won't show up immediately",
        "Some job postings list \"ESD awareness\" or \"anti-static handling\" as a requirement without explaining it — this topic is exactly what that phrase means",
      ],
      realWorldScenario:
        "A coworker hands you a replacement RAM stick and says, 'just pop it in, it's easy.' Instead of grabbing it by the contacts, you hold it by the edges, touch the case first to discharge static, and align it with the slot's notch before pressing evenly. The swap takes thirty extra seconds and completely avoids the invisible risk of static damage that 'just pop it in' skips over.",
      whenThisFails: [
        "If a component doesn't seem to align or click into place after gentle, correct-orientation attempts, stop rather than forcing it — a wrong-feeling fit is a signal to double check orientation or ask for help, not to push harder",
        "If you're unsure whether a device, cable, or component is safe to touch (a power supply, a recently unplugged device, an unfamiliar design), the safe default is to not touch it and ask someone with more training",
      ],
      teacherReflectionPrompt:
        "Explain out loud, to someone who's never heard of ESD, why a static shock you can't even feel could still ruin a computer part — and name two habits that prevent it.",
      quiz: [
        {
          id: "cf-esd-and-safe-handling-q1",
          prompt: "What does ESD stand for?",
          choices: [
            { id: "a", text: "Electrostatic discharge" },
            { id: "b", text: "External storage drive" },
            { id: "c", text: "Extended system diagnostics" },
            { id: "d", text: "Emergency shutdown device" },
          ],
          correctChoiceId: "a",
          explanation: "ESD stands for electrostatic discharge.",
          difficulty: "easy",
        },
        {
          id: "cf-esd-and-safe-handling-q2",
          prompt: "Is ESD damage always felt as a shock?",
          choices: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "No — it can happen without any felt shock or visible spark" },
            { id: "c", text: "Only on laptops" },
            { id: "d", text: "Only if the device is plugged in" },
          ],
          correctChoiceId: "b",
          explanation: "ESD damage can happen silently, without any felt shock or visible spark.",
          difficulty: "easy",
        },
        {
          id: "cf-esd-and-safe-handling-q3",
          prompt: "What's the correct way to hold a RAM stick or expansion card?",
          choices: [
            { id: "a", text: "By the gold contact strip for a firm grip" },
            { id: "b", text: "By its edges" },
            { id: "c", text: "By squeezing the middle" },
            { id: "d", text: "It doesn't matter how you hold it" },
          ],
          correctChoiceId: "b",
          explanation: "Cards and RAM sticks should be held by their edges, never by the metal contact strip.",
          difficulty: "medium",
        },
        {
          id: "cf-esd-and-safe-handling-q4",
          prompt: "Why should you never open a power supply unit, even unplugged?",
          choices: [
            { id: "a", text: "It can retain an electrical charge from internal capacitors" },
            { id: "b", text: "It's illegal in most places" },
            { id: "c", text: "It voids the CPU warranty" },
            { id: "d", text: "It contains RAM that needs light exposure" },
          ],
          correctChoiceId: "a",
          explanation: "A PSU's internal capacitors can retain a charge even after it's unplugged.",
          difficulty: "medium",
        },
        {
          id: "cf-esd-and-safe-handling-q5",
          prompt: "You're about to help with a desktop in a dry room with carpet flooring. What should you do first, before touching any internal parts?",
          choices: [
            { id: "a", text: "Touch a grounded metal surface to discharge static" },
            { id: "b", text: "Turn the desktop on to check for a spark" },
            { id: "c", text: "Wear a wool sweater for warmth" },
            { id: "d", text: "Skip grounding since carpet isn't a real risk" },
          ],
          correctChoiceId: "a",
          explanation: "Touching a grounded metal surface first discharges static built up from carpet and dry air.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-esd-and-safe-handling-b1",
          prompt: "ESD stands for:",
          choices: [
            { id: "a", text: "Electrostatic discharge" },
            { id: "b", text: "External system drive" },
            { id: "c", text: "Emergency safety device" },
          ],
          correctChoiceId: "a",
          explanation: "ESD stands for electrostatic discharge.",
        },
        {
          id: "cf-esd-and-safe-handling-b2",
          prompt: "ESD damage can happen:",
          choices: [
            { id: "a", text: "Without any felt shock" },
            { id: "b", text: "Only if you feel a strong shock" },
            { id: "c", text: "Only when the device is unplugged for a week" },
          ],
          correctChoiceId: "a",
          explanation: "ESD damage can occur silently, without any felt shock.",
        },
        {
          id: "cf-esd-and-safe-handling-b3",
          prompt: "Before touching internals, you should first:",
          choices: [
            { id: "a", text: "Touch a grounded metal surface" },
            { id: "b", text: "Turn the device on" },
            { id: "c", text: "Put on wool gloves" },
          ],
          correctChoiceId: "a",
          explanation: "Touching a grounded metal surface discharges static before handling internals.",
        },
        {
          id: "cf-esd-and-safe-handling-b4",
          prompt: "RAM sticks and cards should be held by their:",
          choices: [
            { id: "a", text: "Edges" },
            { id: "b", text: "Gold contact strip" },
            { id: "c", text: "Center, squeezed firmly" },
          ],
          correctChoiceId: "a",
          explanation: "Holding by the edges avoids touching the sensitive gold contact strip.",
        },
        {
          id: "cf-esd-and-safe-handling-b5",
          prompt: "An anti-static wrist strap does what?",
          choices: [
            { id: "a", text: "Continuously grounds the wearer while working" },
            { id: "b", text: "Charges a phone" },
            { id: "c", text: "Measures RAM speed" },
          ],
          correctChoiceId: "a",
          explanation: "An anti-static wrist strap continuously bleeds off static from the wearer while they work.",
        },
        {
          id: "cf-esd-and-safe-handling-b6",
          prompt: "Why never open a PSU, even unplugged?",
          choices: [
            { id: "a", text: "It can hold a charge from capacitors, even unplugged" },
            { id: "b", text: "It has no parts worth seeing" },
            { id: "c", text: "It automatically resets all settings" },
          ],
          correctChoiceId: "a",
          explanation: "Internal capacitors in a PSU can retain a charge even after it's unplugged.",
        },
        {
          id: "cf-esd-and-safe-handling-b7",
          prompt: "Working on carpet during dry conditions increases the risk of:",
          choices: [
            { id: "a", text: "Static buildup" },
            { id: "b", text: "Faster CPU speeds" },
            { id: "c", text: "More storage space" },
          ],
          correctChoiceId: "a",
          explanation: "Carpet and dry conditions are common sources of static buildup.",
        },
        {
          id: "cf-esd-and-safe-handling-b8",
          prompt: "If unsure about handling a component safely, the correct response is:",
          choices: [
            { id: "a", text: "Stop and ask someone with more training" },
            { id: "b", text: "Proceed carefully and hope for the best" },
            { id: "c", text: "Look up a video and try immediately" },
          ],
          correctChoiceId: "a",
          explanation: "Stopping and asking for help is a safe, professional response, not a failure.",
        },
      ],
      flashcards: [
        { id: "cf-esd-and-safe-handling-f1", front: "ESD stands for?", back: "Electrostatic discharge" },
        { id: "cf-esd-and-safe-handling-f2", front: "Is ESD damage always felt as a shock?", back: "No — it can happen without any felt shock or visible spark" },
        { id: "cf-esd-and-safe-handling-f3", front: "How should you hold a RAM stick or expansion card?", back: "By the edges — never touch the gold contact strip" },
        { id: "cf-esd-and-safe-handling-f4", front: "Why never open a PSU, even unplugged?", back: "It can retain an electrical charge from internal capacitors" },
        { id: "cf-esd-and-safe-handling-f5", front: "What's the safe response when unsure about handling a component?", back: "Stop and ask someone with more training — it's a professional answer, not a failure" },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
  ],
};
