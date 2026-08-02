import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 — Hardware domain topics (Pathway F / Job A1 batch 1).
 * cables → RAM → storage. A1b lives in ap-core1-hardware-a1b.ts.
 * Objective IDs: src/content/objectives/a-plus.ts
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Avoid managed school/work accounts for labs that change hardware or system settings.",
};

export const apCore1HardwareBatch1Topics: Topic[] = [
  {
    id: "ap-cables-connectors",
    name: "Cables & Connectors",
    prerequisites: [],
    objectives: ["AP1201-3.2"],
    lesson: {
      title: "Cables & Connectors for Technicians",
      content: `Cables and connectors are how power and signals leave one device and arrive at another. On CompTIA A+, you are expected to recognize common cable types, match them to the right port, know what each is for, and troubleshoot "nothing works" problems that are often just the wrong cable or a damaged connector.

**What it is.** A cable is a physical medium. A connector is the molded end that plugs into a port. The same family (for example USB) can include several shapes and speed ratings. Shape tells you what fits; rating and wiring tell you what the cable can actually carry.

**Why it exists.** Without standardized cables, every vendor would invent custom plugs. Standards let a USB-C dock, an HDMI display, an Ethernet wall jack, and a SATA drive all interoperate across brands. For help desk work, cable literacy is often the fastest fix: reseat, swap, or replace before you rebuild a PC.

**Where you see it.** Front-desk monitors (HDMI / DisplayPort), laptop docks (USB-C / Thunderbolt), wired desks (RJ45 Ethernet), internal desktop builds (SATA data + SATA power), phone chargers (USB-C or Lightning), and legacy gear (VGA, DVI, USB-A).

**How to think about cables (mechanism).**
1. Identify the job: video, data, network, power, or a combination.
2. Match connector shape to the port — never force a plug.
3. Check capability: a USB-C cable that only charges may not carry DisplayPort Alt Mode or high-speed data.
4. Check condition: bent pins, frayed jackets, and broken strain reliefs cause intermittent faults.
5. Prove with a known-good spare before blaming the device.

**Copper Ethernet (twisted pair).** RJ45 connectors terminate Cat5e, Cat6, or Cat6a cable. Higher categories support higher frequencies and cleaner signaling for Gigabit and multi-Gig links. Plenum-rated cable is required in air-handling spaces for fire code; PVC is common for general office drops. Patch cables between PC and wall jack are usually short stranded assemblies; horizontal runs in walls are solid-core.

**Video cables.** HDMI and DisplayPort carry digital video and audio to monitors and TVs. DisplayPort is common on business docks; HDMI dominates consumer displays. VGA is analog and legacy — avoid for new installs when digital options exist. DVI appears on older PCs/monitors; know adapters exist but analog/digital conversion has limits.

**USB family.** USB-A is the classic rectangular host connector. USB-C is the small reversible oval used for data, power delivery, and sometimes video (Alt Mode). USB versions (2.0 / 3.x / USB4) affect speed; the connector shape alone does not guarantee speed or power. Thunderbolt (often over USB-C) adds high bandwidth for docks, external GPUs, and fast storage — look for Thunderbolt branding when a dock requires it.

**Storage and power inside the case.** SATA data cables are thin flat connectors to HDDs/SSDs. SATA power connectors come from the PSU. Older Molex power connectors still appear on legacy devices. Do not hot-unplug SATA casually on spinning disks without OS guidance.

**Mobile and legacy tips.** Apple Lightning remains on older iPhones; many newer Apple devices use USB-C. Coaxial cable appears for cable modems and some antennas — different job from Ethernet.

**Interpretation tip.** If a laptop charges slowly, the cable or charger may be under-rated for Power Delivery even though USB-C fits. If a monitor stays black, confirm input source (HDMI1 vs DP) and try a known-good video cable before replacing the panel.

**Common field pattern.** User: "My dock stopped working." Tech: verify Thunderbolt/USB-C cable is the original high-spec cable, reseat both ends, test a direct HDMI cable to isolate dock vs display.`,
    },
    lightbulbMoment:
      "Connector shape proves fit — cable rating proves capability. Always check both.",
    keyFacts: [
      "Match connector shape to the port; never force a plug",
      "RJ45 + Cat5e/Cat6/Cat6a carry Ethernet; plenum rating matters in air spaces",
      "HDMI and DisplayPort are digital video (often with audio); VGA is legacy analog",
      "USB-C shape ≠ guaranteed speed, power delivery, or video Alt Mode",
      "Thunderbolt (often over USB-C) is required by many high-bandwidth docks",
      "SATA data and SATA power are separate connectors on internal drives",
    ],
    guidedExample: {
      title: "Black monitor after a desk move",
      steps: [
        "Confirm the PC is powered and the monitor power LED is on.",
        "Read the cable: is it HDMI, DisplayPort, or an adapter dongle from USB-C?",
        "Reseat both ends firmly; try the monitor's input button to select the matching input.",
        "Swap in a known-good HDMI or DP cable before suspecting the GPU or panel.",
        "If a USB-C dock is involved, test a direct PC→monitor cable to isolate the dock path.",
      ],
    },
    commonMistakes: [
      "Assuming every USB-C cable supports charging, data, and video equally",
      "Forcing a connector because it 'almost' fits",
      "Blaming the PC when a frayed cable causes intermittent disconnects",
      "Using a charge-only cable for a data sync or dock that needs SuperSpeed pairs",
      "Ignoring plenum vs PVC requirements on new cable runs in ceiling spaces",
    ],
    examTraps: [
      "Questions that show a connector photo and ask purpose (HDMI vs RJ45 vs SATA)",
      "USB-C capability traps — fit does not equal Thunderbolt or PD wattage",
      "Cat6 vs Cat5e scenarios aiming at Gigabit / longer-run noise immunity",
      "Plenum cable required in air-handling spaces",
      "SATA data vs SATA power identification",
    ],
    realWorldScenario:
      "A designer says their Thunderbolt dock 'died.' You notice they replaced the cable with a thin USB-C phone charger cable. You explain that the dock needs a Thunderbolt/USB4-rated cable, swap in the original cable, and the displays return — no dock replacement needed.",
    whenThisFails: [
      "If a known-good cable still fails, move to port damage, dock firmware, or display input settings — document what you already swapped",
      "If pins are bent on a port, stop inserting cables and escalate for hardware repair",
      "If fire-code plenum cable is required and you only have PVC, do not substitute — order the correct rating",
    ],
    teacherReflectionPrompt:
      "Explain out loud how you would prove whether a black-screen ticket is the cable, the dock, or the monitor — naming at least three tests in order.",
    quiz: [
      {
        id: "ap-cables-connectors-q1",
        prompt: "An RJ45 connector is primarily used for which purpose?",
        choices: [
          { id: "a", text: "Ethernet networking" },
          { id: "b", text: "Analog VGA video" },
          { id: "c", text: "Internal SATA power" },
          { id: "d", text: "3.5mm audio only" },
        ],
        correctChoiceId: "a",
        explanation:
          "RJ45 is the modular connector used on twisted-pair Ethernet patch and horizontal cables.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-q2",
        prompt: "A USB-C cable fits a laptop and a dock, but external monitors on the dock stay dark. What should you suspect first?",
        choices: [
          { id: "a", text: "The cable may lack the wiring/rating for video or Thunderbolt" },
          { id: "b", text: "USB-C never carries video under any circumstance" },
          { id: "c", text: "The OS must be reinstalled before any cable test" },
          { id: "d", text: "RJ45 must be used for all docks" },
        ],
        correctChoiceId: "a",
        explanation:
          "Many charge-only or low-spec USB-C cables will not support DisplayPort Alt Mode or Thunderbolt dock video. Prove with the OEM/high-spec cable.",
        objectiveId: "AP1201-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-cables-connectors-q3",
        prompt: "Which video connector family is legacy analog and usually avoided for new digital-only installs?",
        choices: [
          { id: "a", text: "VGA" },
          { id: "b", text: "HDMI" },
          { id: "c", text: "DisplayPort" },
          { id: "d", text: "USB4" },
        ],
        correctChoiceId: "a",
        explanation:
          "VGA is analog. HDMI and DisplayPort are digital; prefer them for modern displays.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-q4",
        prompt: "Why might an electrician specify plenum-rated Ethernet cable for a ceiling run?",
        choices: [
          { id: "a", text: "Fire-code / safer jacket materials in air-handling spaces" },
          { id: "b", text: "Plenum cable is the only cable that supports IPv6" },
          { id: "c", text: "Plenum cable is required for USB-C docks" },
          { id: "d", text: "Plenum means the cable is fiber optic" },
        ],
        correctChoiceId: "a",
        explanation:
          "Plenum-rated jackets are used where cable sits in air-handling spaces to meet fire code.",
        objectiveId: "AP1201-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-cables-connectors-q5",
        prompt: "On an internal SSD, the thin flat data cable that carries drive traffic (not power) is typically:",
        choices: [
          { id: "a", text: "SATA data" },
          { id: "b", text: "RJ45" },
          { id: "c", text: "HDMI" },
          { id: "d", text: "Lightning" },
        ],
        correctChoiceId: "a",
        explanation:
          "SATA data cables carry storage signals; SATA power is a separate connector from the PSU.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-cables-connectors-b1",
        prompt: "DisplayPort is most often used for:",
        choices: [
          { id: "a", text: "Digital video (and often audio) to a display" },
          { id: "b", text: "Twisted-pair Ethernet" },
          { id: "c", text: "Internal CPU power only" },
        ],
        correctChoiceId: "a",
        explanation: "DisplayPort is a digital display interface common on PCs and docks.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-b2",
        prompt: "USB-A connectors are:",
        choices: [
          { id: "a", text: "Rectangular and typically oriented one way" },
          { id: "b", text: "Always reversible ovals" },
          { id: "c", text: "Identical to RJ45" },
        ],
        correctChoiceId: "a",
        explanation: "USB-A is the classic rectangular host connector.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-b3",
        prompt: "Cat6 cable is generally chosen over Cat5e when you need:",
        choices: [
          { id: "a", text: "Better support for higher frequencies / cleaner Gigabit+ signaling" },
          { id: "b", text: "A different connector than RJ45" },
          { id: "c", text: "Analog VGA signaling" },
        ],
        correctChoiceId: "a",
        explanation: "Higher category twisted pair improves frequency performance and noise immunity.",
        objectiveId: "AP1201-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-cables-connectors-b4",
        prompt: "A phone charger cable that fits USB-C but will not transfer files is often:",
        choices: [
          { id: "a", text: "Charge-only or missing data wires" },
          { id: "b", text: "Secretly an HDMI cable" },
          { id: "c", text: "Proof USB-C cannot carry data" },
        ],
        correctChoiceId: "a",
        explanation: "Some cables implement power pins only.",
        objectiveId: "AP1201-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-cables-connectors-b5",
        prompt: "First safe action when a connector will not seat easily:",
        choices: [
          { id: "a", text: "Stop and verify shape/orientation — do not force it" },
          { id: "b", text: "Push harder until it clicks" },
          { id: "c", text: "Cut the connector off and strip wires" },
        ],
        correctChoiceId: "a",
        explanation: "Forcing bends pins and destroys ports.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-b6",
        prompt: "Thunderbolt docks typically require:",
        choices: [
          { id: "a", text: "A Thunderbolt/USB4-capable cable and port, not any random USB-C lead" },
          { id: "b", text: "VGA only" },
          { id: "c", text: "Coaxial cable" },
        ],
        correctChoiceId: "a",
        explanation: "Bandwidth and protocol support depend on cable and host port capability.",
        objectiveId: "AP1201-3.2",
        difficulty: "medium",
      },
      {
        id: "ap-cables-connectors-b7",
        prompt: "SATA power connectors originate from the:",
        choices: [
          { id: "a", text: "Power supply unit (PSU)" },
          { id: "b", text: "RJ45 wall jack" },
          { id: "c", text: "HDMI port" },
        ],
        correctChoiceId: "a",
        explanation: "Drive power comes from the PSU via SATA power (or legacy Molex).",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-cables-connectors-b8",
        prompt: "A frayed cable jacket with exposed conductors should be:",
        choices: [
          { id: "a", text: "Removed from service and replaced" },
          { id: "b", text: "Ignored if the device still sometimes works" },
          { id: "c", text: "Wrapped in ordinary tape and reused indefinitely" },
        ],
        correctChoiceId: "a",
        explanation: "Damaged insulation is a safety and reliability issue.",
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-cables-connectors-f1",
        front: "RJ45 is used for?",
        back: "Twisted-pair Ethernet networking",
      },
      {
        id: "ap-cables-connectors-f2",
        front: "HDMI vs VGA in one line?",
        back: "HDMI = digital video/audio; VGA = legacy analog video",
      },
      {
        id: "ap-cables-connectors-f3",
        front: "USB-C fit guarantees what?",
        back: "Only physical fit — not speed, PD wattage, or Thunderbolt/video",
      },
      {
        id: "ap-cables-connectors-f4",
        front: "Plenum Ethernet cable is for?",
        back: "Air-handling spaces to meet fire code",
      },
      {
        id: "ap-cables-connectors-f5",
        front: "SATA data vs SATA power?",
        back: "Data = thin signal cable to motherboard/HBA; power = from PSU",
      },
      {
        id: "ap-cables-connectors-f6",
        front: "First black-screen cable step?",
        back: "Reseat / swap known-good video cable; confirm input source",
      },
    ],
    assignments: [
      {
        id: "ap-lab-cable-id",
        title: "Cable & connector identification drill",
        type: "simulator",
        simulatorId: "cable-type-drill",
        instructions:
          "Complete the Cabling & Connector ID drill. Say the purpose of each connector out loud before you confirm. Then on a real desk (if available), identify HDMI/DP, USB-A/C, and RJ45 without looking up photos.",
        estimatedMinutes: 15,
        completionCriteria: [
          "Finish the in-app cable-type drill",
          "Name purpose for HDMI, RJ45, USB-C, and SATA data from memory",
        ],
        relatedTopicIds: ["ap-cables-connectors"],
        order: 1,
      },
      {
        id: "ap-lab-cable-swap",
        title: "Known-good cable swap (Windows 11)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "On a practice PC you may use: disconnect and reconnect the display cable cleanly by the connector (not the cord). If you have a spare cable, swap it and confirm the image returns. Document: symptom → cable action → result.",
        estimatedMinutes: 10,
        completionCriteria: [
          "Reseat or swap a display or USB data cable safely",
          "Write a one-line ticket note of what you changed",
        ],
        relatedTopicIds: ["ap-cables-connectors"],
        order: 2,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },

  {
    id: "ap-ram",
    name: "RAM Installation & Compatibility",
    prerequisites: ["ap-cables-connectors"],
    objectives: ["AP1201-3.3"],
    lesson: {
      title: "Install the Appropriate RAM",
      content: `RAM (random-access memory) is the computer's fast working space. Programs and open files live here while in use. When RAM fills up, the system slows as it spills to disk. On A+, you must choose compatible modules, install them correctly, and verify the OS sees the new capacity.

**What it is.** RAM modules are sticks (or soldered packages) that temporarily store working data. Desktop PCs commonly use DIMMs; laptops use smaller SODIMMs. Generations such as DDR4 and DDR5 are not interchangeable — the notch keying physically prevents wrong installs.

**Why it exists.** CPUs need a fast workspace closer than storage. More usable RAM lets users multitask (many browser tabs, VMs, large documents) without thrashing.

**Where you see it.** Desktop upgrades, laptop service manuals, error messages about low memory, Task Manager Performance charts, and build sheets that list "2×16 GB DDR4-3200."

**How installation works (mechanism).**
1. Confirm form factor (DIMM vs SODIMM) and DDR generation from the motherboard or laptop manual — not from guesswork.
2. Match speed and capacity rules: motherboard supports a maximum per slot and a maximum total. Mixing sizes can work but may change channel behavior.
3. Prefer matched pairs in the correct slots for dual-channel operation (check the manual's color/slot map).
4. Power off, unplug, ground yourself (ESD awareness from CF), open the case or access panel.
5. Open the slot clips, align the notch, press evenly until clips lock.
6. Boot and verify in BIOS/UEFI and in Windows Settings > System > About or Task Manager.

**ECC vs non-ECC.** ECC (error-correcting) memory is common on servers/workstations that need higher integrity. Consumer boards usually need non-ECC. Mixing incorrectly can prevent POST.

**Single- vs dual-channel.** Two matched modules in the correct slots let the memory controller read wider/faster paths. One module works but may leave performance on the table.

**Interpretation.** Task Manager shows committed memory and usage. If usage hugs 99% while disk activity spikes, RAM is a likely bottleneck — not always "the PC is old." After an upgrade, if capacity is unchanged, reseat modules or check that you filled supported slots.

**Laptop caution.** Many thin laptops solder RAM; there is no upgrade path. Believe the service manual over a YouTube generic guide.`,
    },
    lightbulbMoment:
      "RAM upgrades fail more often from generation/slot mismatch than from 'bad sticks.'",
    keyFacts: [
      "DIMM = desktop form factor; SODIMM = laptop form factor",
      "DDR4 and DDR5 are not interchangeable — keyed differently",
      "Install in the motherboard's recommended slots for dual-channel",
      "Verify capacity in UEFI and Windows after install",
      "ECC vs non-ECC must match platform expectations",
      "Soldered laptop RAM often cannot be upgraded",
    ],
    guidedExample: {
      title: "Upgrade a desktop from 8 GB to 32 GB",
      steps: [
        "Read the board manual: max 128 GB, DDR4 DIMM, dual-channel in slots A2/B2 first.",
        "Buy a matched kit: 2×16 GB DDR4-3200 non-ECC.",
        "Power down, unplug, use ESD precautions, open the side panel.",
        "Seat both modules until clips click; reconnect and boot.",
        "Confirm About/Task Manager shows ~32 GB; if not, reseat and retest one stick at a time.",
      ],
    },
    commonMistakes: [
      "Buying DDR5 for a DDR4 board because the price looked good",
      "Installing laptop SODIMM into a desktop DIMM slot (or the reverse)",
      "Filling the wrong slots and wondering why dual-channel is disabled",
      "Forcing a module past a notch misalignment",
      "Assuming every laptop has two empty SODIMM slots",
    ],
    examTraps: [
      "Photo-based DIMM vs SODIMM identification",
      "DDR generation compatibility questions",
      "Dual-channel slot population from a diagram",
      "ECC vs non-ECC workstation scenarios",
      "Symptoms of insufficient RAM vs failing storage",
    ],
    realWorldScenario:
      "Accounting reports Excel 'feels frozen' with twenty workbooks open. Task Manager shows 15.8/16 GB RAM used and heavy disk activity. You confirm the desktop board supports 64 GB DDR4, install a matched 2×16 GB kit in the correct channels, and the disk thrashing stops under the same workload.",
    whenThisFails: [
      "If the system will not POST after install, reseat modules, try one known-good stick, and verify generation/ECC compatibility",
      "If Windows shows less RAM than installed, check 32-bit OS limits (rare on modern Win11) or unused/disabled slots in UEFI",
      "If a laptop has soldered RAM, stop disassembly and discuss replacement device options instead",
    ],
    teacherReflectionPrompt:
      "Walk through how you would confirm a RAM kit is compatible before purchase, naming form factor, DDR generation, and slot plan.",
    quiz: [
      {
        id: "ap-ram-q1",
        prompt: "Which form factor is typically used for desktop RAM modules?",
        choices: [
          { id: "a", text: "DIMM" },
          { id: "b", text: "SODIMM only" },
          { id: "c", text: "RJ45" },
          { id: "d", text: "SATA power" },
        ],
        correctChoiceId: "a",
        explanation: "Desktops use DIMMs; laptops more often use SODIMMs.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-q2",
        prompt: "A technician buys DDR5 RAM for a motherboard that only lists DDR4 support. What happens?",
        choices: [
          { id: "a", text: "The modules will not be compatible (and usually will not fit the keyed slot)" },
          { id: "b", text: "The board auto-converts DDR5 to DDR4" },
          { id: "c", text: "Windows will remap the memory type silently" },
          { id: "d", text: "Only ECC is affected" },
        ],
        correctChoiceId: "a",
        explanation: "DDR generations are not interchangeable; notches prevent incorrect seating.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-q3",
        prompt: "Why do manuals show a preferred slot order for two modules?",
        choices: [
          { id: "a", text: "To enable dual-channel operation correctly" },
          { id: "b", text: "Because RAM only works in slot 1 alphabetically" },
          { id: "c", text: "To satisfy HDMI requirements" },
          { id: "d", text: "So ECC becomes non-ECC" },
        ],
        correctChoiceId: "a",
        explanation: "Correct population pairs channels for dual-channel performance.",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ram-q4",
        prompt: "After installing RAM, which Windows 11 location quickly confirms total installed memory?",
        choices: [
          { id: "a", text: "Settings > System > About (or Task Manager > Performance)" },
          { id: "b", text: "Recycle Bin properties" },
          { id: "c", text: "Notepad font menu" },
          { id: "d", text: "Ethernet adapter status only" },
        ],
        correctChoiceId: "a",
        explanation: "About and Task Manager both report installed RAM capacity.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-q5",
        prompt: "A thin laptop service guide says memory is 'on-board / soldered.' What is the correct upgrade advice?",
        choices: [
          { id: "a", text: "RAM is not user-upgradable on that model" },
          { id: "b", text: "Any DDR5 DIMM can be clipped onto the heatsink" },
          { id: "c", text: "SODIMM always fits under the keyboard" },
          { id: "d", text: "Upgrade by replacing the HDMI cable" },
        ],
        correctChoiceId: "a",
        explanation: "Soldered RAM cannot be swapped like a module; plan device replacement if more RAM is required.",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-ram-b1",
        prompt: "SODIMM modules are most associated with:",
        choices: [
          { id: "a", text: "Laptops and small form-factor systems" },
          { id: "b", text: "Rack switch backplanes" },
          { id: "c", text: "HDMI splitters" },
        ],
        correctChoiceId: "a",
        explanation: "SODIMMs are the compact RAM form factor.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-b2",
        prompt: "ECC memory is most often required on:",
        choices: [
          { id: "a", text: "Servers / error-sensitive workstations" },
          { id: "b", text: "All gaming desktops exclusively" },
          { id: "c", text: "USB flash drives" },
        ],
        correctChoiceId: "a",
        explanation: "ECC targets integrity-focused platforms.",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ram-b3",
        prompt: "If RAM usage is pegged and the disk light is thrashing under load, a likely fix is:",
        choices: [
          { id: "a", text: "Add compatible RAM (or reduce workload)" },
          { id: "b", text: "Replace every Ethernet cable" },
          { id: "c", text: "Disable the power supply" },
        ],
        correctChoiceId: "a",
        explanation: "Memory pressure forces paging to disk and feels like 'slowness.'",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ram-b4",
        prompt: "Before buying RAM you should read:",
        choices: [
          { id: "a", text: "The motherboard or laptop service manual for supported type and max capacity" },
          { id: "b", text: "Only the cheapest listing title" },
          { id: "c", text: "A random social media comment" },
        ],
        correctChoiceId: "a",
        explanation: "Compatibility comes from the platform documentation.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-b5",
        prompt: "Clips on a DIMM slot that will not close usually mean:",
        choices: [
          { id: "a", text: "The module is not fully seated or is the wrong keying" },
          { id: "b", text: "Windows needs reactivation" },
          { id: "c", text: "The CPU cooler is optional" },
        ],
        correctChoiceId: "a",
        explanation: "Fully seated modules lock the clips; wrong generation will not key in.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-b6",
        prompt: "Dual-channel typically requires:",
        choices: [
          { id: "a", text: "Modules installed in the motherboard's paired slots" },
          { id: "b", text: "Exactly one stick forever" },
          { id: "c", text: "VGA cabling" },
        ],
        correctChoiceId: "a",
        explanation: "Channel pairing is a slot-population rule.",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ram-b7",
        prompt: "RAM contents when power is removed:",
        choices: [
          { id: "a", text: "Are lost (volatile)" },
          { id: "b", text: "Remain forever like an SSD" },
          { id: "c", text: "Move automatically to the PSU" },
        ],
        correctChoiceId: "a",
        explanation: "RAM is volatile working memory.",
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ram-b8",
        prompt: "A system posts with beep/LED codes after a RAM change. Best first step:",
        choices: [
          { id: "a", text: "Reseat modules and test known-good configurations one stick at a time" },
          { id: "b", text: "Reinstall Office immediately" },
          { id: "c", text: "Replace the wall Ethernet jack" },
        ],
        correctChoiceId: "a",
        explanation: "Isolate seating and compatibility before replacing the board.",
        objectiveId: "AP1201-3.3",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-ram-f1",
        front: "DIMM vs SODIMM?",
        back: "DIMM = desktop size; SODIMM = laptop/small form factor",
      },
      {
        id: "ap-ram-f2",
        front: "DDR4 stick in DDR5 board?",
        back: "Incompatible — different generation and keying",
      },
      {
        id: "ap-ram-f3",
        front: "Why populate RAM slots per the manual?",
        back: "Enables dual-channel and stays within supported configs",
      },
      {
        id: "ap-ram-f4",
        front: "Where to verify RAM in Windows 11?",
        back: "Settings > System > About or Task Manager > Performance",
      },
      {
        id: "ap-ram-f5",
        front: "ECC memory is for?",
        back: "Error-correcting platforms (servers/workstations) — match the board",
      },
      {
        id: "ap-ram-f6",
        front: "Soldered laptop RAM means?",
        back: "Not user-upgradable — check the service guide",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ram-inventory",
        title: "Inventory installed RAM (Windows 11)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "On a practice Windows 11 PC: open Settings > System > About and Task Manager > Performance > Memory. Record total RAM, speed if shown, and current usage under your normal apps. Do not open a laptop you are not authorized to service.",
        estimatedMinutes: 10,
        completionCriteria: [
          "Record total RAM from About or Task Manager",
          "Note whether usage exceeds ~80% with your usual apps",
        ],
        relatedTopicIds: ["ap-ram"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },

  {
    id: "ap-storage",
    name: "Storage Devices",
    prerequisites: ["ap-ram"],
    objectives: ["AP1201-3.4"],
    lesson: {
      title: "Select and Install Storage Devices",
      content: `Storage holds data when the power is off — the OS, applications, and files. A+ expects you to choose among HDD, SSD, and NVMe options, pick the right form factor and interface, install safely, and understand basic RAID ideas used for capacity or redundancy.

**What it is.** Hard disk drives (HDDs) use spinning platters. Solid-state drives (SSDs) use flash memory with no moving parts. NVMe SSDs typically use the PCIe/M.2 path for higher performance than SATA SSDs. Optical drives (less common now) read/write discs.

**Why it exists.** RAM is fast but volatile. Storage is persistent. The right storage choice balances speed, capacity, cost, and reliability for the user's job.

**Where you see it.** New PC builds, laptop upgrades, "disk full" tickets, boot failures, and servers using RAID arrays.

**How selection works (mechanism).**
1. Decide interface: SATA (cabled 2.5"/3.5" or some M.2 SATA) vs NVMe (M.2 PCIe).
2. Decide form factor: 3.5" HDD, 2.5" SSD/HDD, M.2 2280 module, etc.
3. Confirm motherboard/laptop slot keying (M.2 M-key vs B-key) and length.
4. For desktops: mount the drive, attach SATA data + SATA power (or seat M.2 and secure the screw).
5. In UEFI, confirm the drive is detected; in Windows use Disk Management to initialize/format new data disks (careful on OS disks).
6. For RAID: understand the goal — RAID 0 stripes for speed (no redundancy), RAID 1 mirrors for redundancy, RAID 5/10 trade capacity for fault tolerance on multi-disk sets. RAID is not a backup.

**Interpretation.** CrystalDiskInfo / manufacturer tools / Task Manager can show disk type and activity. A loud clicking HDD with rising reallocated sectors is a replace-and-restore situation, not a 'defrag harder' situation. NVMe may appear as 'PCIe' storage; SATA SSDs appear on AHCI/SATA channels.

**Hot-swappable bays** (more common in servers) allow drive replacement designed for that chassis — desktop towers usually are not hot-swap unless built for it.

**Safety.** Use ESD practice. Do not drop HDDs. Back up before repartitioning. RAID rebuilds are stressful — have backups first.`,
    },
    lightbulbMoment:
      "Pick storage by interface and job: SATA SSD for solid upgrades, NVMe when the slot and workload need PCIe speed — and RAID is not a backup.",
    keyFacts: [
      "HDD = magnetic spinning disks; SSD = flash, no moving parts",
      "NVMe SSDs use PCIe (often M.2) and are usually faster than SATA SSDs",
      "Match form factor and connector: 2.5\", 3.5\", M.2 keying/length",
      "SATA drives need data and power cables; M.2 seats in a slot with a mounting screw",
      "RAID 0 stripes; RAID 1 mirrors; RAID is not a substitute for backups",
      "Initialize/format new data disks in Disk Management only when you intend to wipe them",
    ],
    guidedExample: {
      title: "Add a 1 TB NVMe drive to a desktop",
      steps: [
        "Confirm the board has a free M.2 M-key slot that supports NVMe (manual).",
        "Power down, unplug, use ESD precautions, remove the side panel.",
        "Seat the M.2 2280 module at an angle, press flat, secure the screw.",
        "Boot to UEFI and confirm the model is listed.",
        "In Windows Disk Management, initialize GPT and create a volume for data (not the OS disk).",
      ],
    },
    commonMistakes: [
      "Buying an NVMe drive for a laptop that only has a SATA M.2 slot",
      "Forgetting the M.2 mounting screw so the drive disconnects under vibration",
      "Calling RAID a backup strategy",
      "Initializing the wrong disk and wiping the OS",
      "Expecting a 3.5\" HDD to fit a thin laptop bay",
    ],
    examTraps: [
      "HDD vs SSD vs NVMe speed/characteristics comparisons",
      "M.2 keying / form-factor identification",
      "RAID 0/1/5 purpose questions",
      "SATA data vs power cabling steps",
      "'Disk full' vs failing drive symptom discrimination",
    ],
    realWorldScenario:
      "A video editor's SATA SSD is at 98% capacity and exports crawl. You add a 2 TB NVMe in a free M.2 slot, move media folders to the new volume, and leave the OS on the original SSD. Export times drop because sequential write throughput and free space both improved.",
    whenThisFails: [
      "If UEFI does not see a new NVMe, verify slot support (some slots share lanes with GPUs), reseat, and try another slot",
      "If RAID shows degraded, replace the failed member with a compatible disk and allow rebuild — restore from backup if data matters now",
      "If Disk Management shows unknown/not initialized on the wrong disk, stop — confirm disk numbers before any initialize action",
    ],
    teacherReflectionPrompt:
      "Explain when you would choose a SATA SSD versus an NVMe SSD for a help-desk upgrade, including one compatibility check you would perform first.",
    quiz: [
      {
        id: "ap-storage-q1",
        prompt: "Which storage type generally offers the fastest everyday performance in modern PCs when the platform supports it?",
        choices: [
          { id: "a", text: "NVMe SSD (PCIe)" },
          { id: "b", text: "5400 RPM HDD" },
          { id: "c", text: "Optical DVD-ROM" },
          { id: "d", text: "USB 1.1 thumb drive" },
        ],
        correctChoiceId: "a",
        explanation: "NVMe over PCIe outperforms typical SATA HDDs and usually SATA SSDs.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-q2",
        prompt: "A 2.5\" SATA SSD in a desktop requires which connections?",
        choices: [
          { id: "a", text: "SATA data cable and SATA power from the PSU" },
          { id: "b", text: "Only an HDMI cable" },
          { id: "c", text: "Only RJ45" },
          { id: "d", text: "DIMM clips" },
        ],
        correctChoiceId: "a",
        explanation: "SATA SSDs use separate data and power connectors.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-q3",
        prompt: "RAID 1's primary purpose is:",
        choices: [
          { id: "a", text: "Mirroring for redundancy" },
          { id: "b", text: "Maximum capacity with no redundancy (striping only)" },
          { id: "c", text: "Replacing offsite backups" },
          { id: "d", text: "Providing ECC for RAM" },
        ],
        correctChoiceId: "a",
        explanation: "RAID 1 mirrors data across disks; it is still not a full backup strategy.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-storage-q4",
        prompt: "Before initializing a disk in Windows Disk Management you must:",
        choices: [
          { id: "a", text: "Confirm you selected the new empty disk — not the OS disk" },
          { id: "b", text: "Disable the Ethernet port" },
          { id: "c", text: "Remove all RAM" },
          { id: "d", text: "Set the monitor to VGA" },
        ],
        correctChoiceId: "a",
        explanation: "Initializing/formatting the wrong disk destroys data.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-storage-q5",
        prompt: "An M.2 NVMe SSD will not fit/work in a system that only provides:",
        choices: [
          { id: "a", text: "A SATA-only M.2 slot with no NVMe support" },
          { id: "b", text: "A PCIe NVMe-capable M.2 M-key slot listed in the manual" },
          { id: "c", text: "Adequate PSU wattage and cooling" },
          { id: "d", text: "UEFI firmware that can enumerate NVMe" },
        ],
        correctChoiceId: "a",
        explanation: "Slot capability matters — SATA M.2 ≠ NVMe PCIe support.",
        objectiveId: "AP1201-3.4",
        difficulty: "hard",
      },
    ],
    questionBank: [
      {
        id: "ap-storage-b1",
        prompt: "HDD characteristics include:",
        choices: [
          { id: "a", text: "Moving platters; typically cheaper per GB; more vibration/noise" },
          { id: "b", text: "No moving parts and always faster than NVMe" },
          { id: "c", text: "Volatile storage like RAM" },
        ],
        correctChoiceId: "a",
        explanation: "HDDs are magnetic and mechanical.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-b2",
        prompt: "RAID 0 provides:",
        choices: [
          { id: "a", text: "Striping for performance without redundancy" },
          { id: "b", text: "Mirroring" },
          { id: "c", text: "Automatic cloud backup" },
        ],
        correctChoiceId: "a",
        explanation: "RAID 0 speeds/capacity aggregation without fault tolerance.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-storage-b3",
        prompt: "M.2 2280 describes:",
        choices: [
          { id: "a", text: "A common M.2 module length/form factor" },
          { id: "b", text: "An Ethernet category" },
          { id: "c", text: "A DDR5 speed rating" },
        ],
        correctChoiceId: "a",
        explanation: "2280 is width/length naming for M.2 cards.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-b4",
        prompt: "Why is RAID not a backup?",
        choices: [
          { id: "a", text: "It does not protect against deletion, malware, or site disasters by itself" },
          { id: "b", text: "RAID always deletes cloud copies" },
          { id: "c", text: "RAID only works on optical media" },
        ],
        correctChoiceId: "a",
        explanation: "Backups are separate copies, preferably offline/offsite.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-storage-b5",
        prompt: "A clicking HDD with SMART reallocated sector growth should be:",
        choices: [
          { id: "a", text: "Backed up and replaced" },
          { id: "b", text: "Defragmented forever as the only fix" },
          { id: "c", text: "Ignored until total failure with no backup" },
        ],
        correctChoiceId: "a",
        explanation: "Mechanical failure signs warrant migration and replacement.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-storage-b6",
        prompt: "After seating an M.2 drive you should:",
        choices: [
          { id: "a", text: "Secure the mounting screw and verify detection in UEFI/OS" },
          { id: "b", text: "Leave it floating unsecured" },
          { id: "c", text: "Attach it with HDMI" },
        ],
        correctChoiceId: "a",
        explanation: "Mechanical retention and firmware detection complete the install.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-b7",
        prompt: "Optical drives are:",
        choices: [
          { id: "a", text: "Less common now but still appear on some exams and legacy systems" },
          { id: "b", text: "Required for all NVMe installs" },
          { id: "c", text: "A type of ECC RAM" },
        ],
        correctChoiceId: "a",
        explanation: "Know they exist; modern builds often omit them.",
        objectiveId: "AP1201-3.4",
        difficulty: "easy",
      },
      {
        id: "ap-storage-b8",
        prompt: "Hot-swappable drive bays are most associated with:",
        choices: [
          { id: "a", text: "Server/storage chassis designed for live replacement" },
          { id: "b", text: "Every mini-laptop" },
          { id: "c", text: "USB-A flash drives only" },
        ],
        correctChoiceId: "a",
        explanation: "Hot swap is a chassis/backplane feature, not universal on desktops.",
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-storage-f1",
        front: "HDD vs SSD?",
        back: "HDD = spinning platters; SSD = flash, faster, no moving parts",
      },
      {
        id: "ap-storage-f2",
        front: "NVMe typically uses?",
        back: "PCIe (often M.2) — faster path than SATA SSD",
      },
      {
        id: "ap-storage-f3",
        front: "SATA SSD needs which cables?",
        back: "SATA data + SATA power",
      },
      {
        id: "ap-storage-f4",
        front: "RAID 1 purpose?",
        back: "Mirroring for redundancy — still not a backup alone",
      },
      {
        id: "ap-storage-f5",
        front: "RAID 0 risk?",
        back: "Striping without redundancy — one failure can lose the set",
      },
      {
        id: "ap-storage-f6",
        front: "Before Disk Management initialize?",
        back: "Confirm disk number so you do not wipe the OS drive",
      },
    ],
    assignments: [
      {
        id: "ap-lab-storage-inventory",
        title: "Inventory disks (Windows 11)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "On a practice PC: open Task Manager > Performance and note each disk type if shown. Open Disk Management (diskmgmt.msc) in read-only observation — do not initialize or delete volumes. Record disk sizes and whether the system disk looks like SSD/NVMe vs HDD from the Performance tab or About/storage settings.",
        estimatedMinutes: 12,
        completionCriteria: [
          "List each physical disk size observed",
          "Identify whether the OS disk behaves like SSD/NVMe or HDD from available UI clues",
          "No destructive Disk Management changes",
        ],
        relatedTopicIds: ["ap-storage"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },
];
