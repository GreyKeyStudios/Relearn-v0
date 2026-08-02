import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 Hardware — A1b batch (Michael 2026-08-01).
 * Order: mb/CPU → power → displays. Stop before printers (A1c).
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

export const apCore1HardwareBatch2Topics: Topic[] = [
  {
    id: "ap-mb-cpu-cards",
    name: "Motherboards, CPUs & Expansion Cards",
    prerequisites: ["ap-storage"],
    objectives: ["AP1201-3.5"],
    lesson: {
      title: "Motherboards, CPUs & Expansion Cards",
      content: `The motherboard is the central board that connects the CPU, RAM, storage interfaces, power inputs, and expansion devices. On A+, you select compatible CPUs and boards, recognize form factors and slots, understand firmware at a technician level, and spot symptoms of wrong or poorly seated parts.

**Computer Fundamentals refreshers (optional):** \`cf-inside-the-box\`, \`cf-motherboard-power-cooling\`, \`cf-esd-and-safe-handling\` — literacy names for parts and safe handling before exam-depth compatibility work.

**What it is.** A motherboard (system board) provides the CPU socket, RAM slots, chipset logic, expansion slots (PCIe), storage headers, and rear I/O. The CPU executes instructions. Add-on cards (GPU, NIC, capture, etc.) plug into PCIe when onboard options are missing or too slow.

**Why it exists.** Modular PCs let technicians repair or upgrade pieces instead of replacing the whole machine. Compatibility rules protect the expensive parts: the wrong socket or voltage plan will not work and can damage components.

**Where you see it.** Desktop builds and upgrades, laptop motherboard replacements (usually whole-board service), POST/beep/LED failure codes, and "no display after CPU upgrade" tickets.

**Form factors.** ATX, Micro-ATX, and Mini-ITX describe board size and mounting hole patterns. The case must support the form factor. Smaller boards may have fewer slots and RAM banks.

**CPU and socket compatibility (mechanism).**
1. Read the motherboard CPU support list (socket + chipset generation + BIOS/UEFI revision).
2. Confirm the CPU socket (for example LGA vs AM4/AM5 families — exact names change by generation; always check the list, do not assume).
3. Check TDP / cooler clearance and whether the cooler is included or required separately.
4. Apply thermal paste correctly (or use a pre-applied cooler pad as directed); seat the cooler evenly.
5. Update firmware if the support list requires a minimum BIOS version before the new CPU will POST.
6. Boot to UEFI and verify CPU model, cores/threads, and temperatures under light load.

**Chipsets (intro).** The chipset (and related controller hubs) governs which features the board exposes — USB counts, storage lanes, overclocking options, and how many PCIe lanes are available. You do not need silicon die diagrams; you need to read a board's feature list and know that "same socket" does not always mean "every CPU on every board."

**Expansion slots.** PCIe x16 is common for graphics; x1/x4 for other adapters. Physical slot length and electrical lanes can differ — a card may fit but run at fewer lanes. M.2 slots (covered with storage) also live on the board and may share bandwidth with other devices.

**Firmware.** UEFI (successor to legacy BIOS) stores board settings, boot order, virtualization toggles, and secure boot options. Clearing CMOS (jumper or button per manual) resets firmware settings when a bad setting prevents boot — it does not "reinstall Windows."

**Cooling.** CPUs need a heatsink/fan or AIO cooler. Dust-clogged coolers cause thermal throttling and unexpected shutdowns. After assembly, verify fan spin and sensible idle temperatures in UEFI or a monitoring tool.

**Incompatibility / install symptoms.** No POST, continuous reboot, overheating shutdowns, RAM not detected because CPU/memory controller or slot population is wrong, or a GPU that never initializes because it is not fully seated in PCIe.

**Interpretation.** A parts list saying "B760 + i5-14xxx" is a compatibility claim — verify against the board QVL/support page. If a system worked until a CPU swap, reverse the change before replacing the board.`,
    },
    lightbulbMoment:
      "Socket and support list beat guesswork — same brand names do not guarantee a CPU will POST on a board.",
    keyFacts: [
      "Motherboard form factors (ATX, Micro-ATX, Mini-ITX) must match the case",
      "CPU socket + chipset support list + BIOS/UEFI version determine compatibility",
      "Chipsets gate features and lanes — not just marketing names",
      "PCIe slots host expansion cards; seating and lane width matter",
      "UEFI/BIOS stores firmware settings; CMOS clear resets settings, not the OS",
      "Cooling and thermal paste are part of a valid CPU install",
    ],
    guidedExample: {
      title: "Will this CPU work in this board?",
      steps: [
        "Customer wants CPU model X in motherboard model Y.",
        "Open the motherboard support page; find the CPU support list.",
        "Confirm socket match, chipset family, and minimum BIOS version.",
        "If BIOS is older than required, plan a flash with a currently supported CPU (or USB BIOS flashback if the board has it) before installing X.",
        "Only after the list says yes, purchase cooler clearance checks and proceed with ESD-safe install.",
      ],
    },
    commonMistakes: [
      "Buying a CPU that shares a brand name but not the board's supported list",
      "Skipping thermal paste or mounting the cooler crooked",
      "Forcing a PCIe card that is not fully clicked into the slot",
      "Assuming CMOS clear reinstalls or repairs Windows",
      "Ignoring BIOS update requirements printed on the support page",
    ],
    examTraps: [
      "Form factor vs case compatibility",
      "Socket mismatch scenarios",
      "UEFI settings vs OS reinstall confusion",
      "PCIe slot purpose / graphics card seating",
      "Symptoms of insufficient cooling after a CPU swap",
    ],
    realWorldScenario:
      "A user upgrades a CPU and gets no POST. You reseat the cooler, confirm the motherboard support list required BIOS 2.10+, flash with the old CPU using USB BIOS flashback, then install the new CPU. The system POSTs and Windows boots — the board was fine; firmware was the gate.",
    whenThisFails: [
      "If there is still no POST after a verified-compatible CPU, test with one RAM stick, reseat power connectors (next topic), and try onboard video if available",
      "If temperatures spike above safe ranges under light load, reseat the cooler and inspect paste spread — do not keep stress-testing a dry mount",
      "If a laptop needs a motherboard, treat it as a board-level repair with the service manual — do not harvest random desktop CPUs into laptops",
    ],
    teacherReflectionPrompt:
      "Explain how you would prove a CPU is compatible with a motherboard before money is spent, naming socket, support list, and firmware.",
    quiz: [
      {
        id: "ap-mb-cpu-cards-q1",
        prompt: "Which document is the best authority for whether a specific CPU model works on a motherboard?",
        choices: [
          { id: "a", text: "The motherboard CPU support / QVL list (and required BIOS version)" },
          { id: "b", text: "Any social media unboxing comment" },
          { id: "c", text: "The HDMI cable packaging" },
          { id: "d", text: "The Windows desktop wallpaper" },
        ],
        correctChoiceId: "a",
        explanation:
          "Vendors publish CPU support lists with socket, chipset, and BIOS gates. Guessing from brand names alone is unreliable.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-q2",
        prompt: "ATX, Micro-ATX, and Mini-ITX primarily describe:",
        choices: [
          { id: "a", text: "Motherboard form factors (size/mounting)" },
          { id: "b", text: "Types of ECC RAM only" },
          { id: "c", text: "Wi-Fi encryption standards" },
          { id: "d", text: "Printer toner colors" },
        ],
        correctChoiceId: "a",
        explanation: "Form factors define board size and case compatibility.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-q3",
        prompt: "Clearing CMOS / resetting UEFI settings typically:",
        choices: [
          { id: "a", text: "Restores firmware defaults — it does not reinstall the operating system" },
          { id: "b", text: "Wipes the SSD automatically" },
          { id: "c", text: "Changes the CPU socket type" },
          { id: "d", text: "Converts DDR4 to DDR5" },
        ],
        correctChoiceId: "a",
        explanation: "CMOS/UEFI reset clears board settings stored in firmware.",
        objectiveId: "AP1201-3.5",
        difficulty: "medium",
      },
      {
        id: "ap-mb-cpu-cards-q4",
        prompt: "A discrete graphics card is most commonly installed in:",
        choices: [
          { id: "a", text: "A PCIe x16 expansion slot (fully seated)" },
          { id: "b", text: "An RJ45 Ethernet jack" },
          { id: "c", text: "A SODIMM memory slot" },
          { id: "d", text: "The PSU modular bay as data storage" },
        ],
        correctChoiceId: "a",
        explanation: "GPUs use PCIe; incomplete seating is a common no-display cause.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-q5",
        prompt: "After a CPU install, the system shuts down minutes into use and the cooler feels unusually hot. What should you check first?",
        choices: [
          { id: "a", text: "Cooler mounting pressure, fan spin, and thermal paste application" },
          { id: "b", text: "Whether the Ethernet cable is Cat6a" },
          { id: "c", text: "Whether Word is activated" },
          { id: "d", text: "Whether the monitor supports VGA only" },
        ],
        correctChoiceId: "a",
        explanation: "Thermal faults after CPU work often trace to cooler/paste/fan issues.",
        objectiveId: "AP1201-3.5",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-mb-cpu-cards-b1",
        prompt: "Chipset feature lists help a technician understand:",
        choices: [
          { id: "a", text: "Which board features and lane/connectivity options are available" },
          { id: "b", text: "The user's Active Directory password" },
          { id: "c", text: "Toner yield only" },
        ],
        correctChoiceId: "a",
        explanation: "Chipsets influence exposed I/O and platform capabilities.",
        objectiveId: "AP1201-3.5",
        difficulty: "medium",
      },
      {
        id: "ap-mb-cpu-cards-b2",
        prompt: "UEFI is best described as:",
        choices: [
          { id: "a", text: "Motherboard firmware that initializes hardware and exposes settings" },
          { id: "b", text: "A type of mechanical hard drive" },
          { id: "c", text: "A wireless encryption cipher" },
        ],
        correctChoiceId: "a",
        explanation: "UEFI/BIOS firmware lives on the board, not on the OS disk alone.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-b3",
        prompt: "Same CPU socket on two boards means:",
        choices: [
          { id: "a", text: "You still must verify the support list and BIOS requirements" },
          { id: "b", text: "Every CPU for that socket works on every board automatically" },
          { id: "c", text: "RAM generation no longer matters" },
        ],
        correctChoiceId: "a",
        explanation: "Socket is necessary but not sufficient.",
        objectiveId: "AP1201-3.5",
        difficulty: "medium",
      },
      {
        id: "ap-mb-cpu-cards-b4",
        prompt: "Mini-ITX compared with ATX typically offers:",
        choices: [
          { id: "a", text: "Smaller size and often fewer expansion/RAM options" },
          { id: "b", text: "Always more PCIe x16 slots than ATX" },
          { id: "c", text: "No CPU socket" },
        ],
        correctChoiceId: "a",
        explanation: "Smaller form factors trade expandability for size.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-b5",
        prompt: "A PCIe card that is not clicked fully into the slot may cause:",
        choices: [
          { id: "a", text: "No device, unstable video, or failure to initialize the card" },
          { id: "b", text: "Faster RAM speeds automatically" },
          { id: "c", text: "Automatic Cat6 certification" },
        ],
        correctChoiceId: "a",
        explanation: "Seating problems are common after case moves or upgrades.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-b6",
        prompt: "Thermal paste is used to:",
        choices: [
          { id: "a", text: "Improve heat transfer between CPU heatspreader and cooler" },
          { id: "b", text: "Glue RAM into slots permanently" },
          { id: "c", text: "Insulate Ethernet pairs" },
        ],
        correctChoiceId: "a",
        explanation: "Paste fills microscopic gaps for thermal transfer.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-mb-cpu-cards-b7",
        prompt: "If a new CPU needs a newer BIOS, a safe plan may include:",
        choices: [
          { id: "a", text: "Update firmware using a supported method before or via flashback features" },
          { id: "b", text: "Drill holes in the socket" },
          { id: "c", text: "Format the SSD from Disk Management as step one always" },
        ],
        correctChoiceId: "a",
        explanation: "Firmware gates are real; follow vendor flash procedures.",
        objectiveId: "AP1201-3.5",
        difficulty: "hard",
      },
      {
        id: "ap-mb-cpu-cards-b8",
        prompt: "Before installing a CPU on a motherboard, what compatibility evidence matters most?",
        choices: [
          { id: "a", text: "Socket, chipset/board support list, BIOS requirement, power/cooling, and safe handling" },
          { id: "b", text: "The CPU and board are the same color" },
          { id: "c", text: "Any processor fits any modern socket" },
        ],
        correctChoiceId: "a",
        explanation: "CPU installation requires verified socket, firmware, electrical, thermal, and handling compatibility.",
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-mb-cpu-cards-f1",
        front: "Best CPU↔board compatibility source?",
        back: "Motherboard CPU support list + required BIOS/UEFI version",
      },
      {
        id: "ap-mb-cpu-cards-f2",
        front: "ATX / Micro-ATX / Mini-ITX?",
        back: "Motherboard form factors — must match the case",
      },
      {
        id: "ap-mb-cpu-cards-f3",
        front: "What does CMOS/UEFI clear do?",
        back: "Resets firmware settings — does not reinstall Windows",
      },
      {
        id: "ap-mb-cpu-cards-f4",
        front: "Where do discrete GPUs usually install?",
        back: "PCIe x16 slot — seat fully until the latch clicks",
      },
      {
        id: "ap-mb-cpu-cards-f5",
        front: "Why thermal paste?",
        back: "Improves heat transfer from CPU to cooler",
      },
      {
        id: "ap-mb-cpu-cards-f6",
        front: "Same socket guarantee?",
        back: "No — still verify chipset support list and BIOS",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mb-cpu-compat",
        title: "CPU / motherboard compatibility check",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "Pick a real or sample motherboard model and a CPU model (from a listing or your practice PC's Settings > System > About processor line plus a board you look up). Find the motherboard CPU support page. Record: socket, whether the CPU is listed, and any minimum BIOS version. Optional CF refresher: skim cf-esd-and-safe-handling before imagining a physical install. Do not open a device you are not authorized to service.",
        estimatedMinutes: 15,
        completionCriteria: [
          "Write socket name from the board documentation",
          "State supported / not supported / needs BIOS for the chosen CPU",
          "Note one CF refresher topic you would send a shaky desktop user to",
        ],
        relatedTopicIds: ["ap-mb-cpu-cards"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-power-supplies",
    name: "Power Supplies & Power Delivery",
    prerequisites: ["ap-mb-cpu-cards"],
    objectives: ["AP1201-3.6"],
    lesson: {
      title: "Power Supplies & Power Delivery",
      content: `The power supply unit (PSU) converts wall AC power into the DC voltages a PC needs. On A+, you size wattage, match connectors, recognize modular designs, and troubleshoot power symptoms safely — without opening the PSU enclosure.

**Computer Fundamentals refresher (optional):** \`cf-motherboard-power-cooling\` for the literacy role of the PSU before exam-depth sizing and connectors.

**What it is.** A PSU takes AC from the wall and outputs regulated DC rails used by the motherboard, CPU, drives, and add-in cards. A power switch, fuse/protection circuitry, and multiple cable looms are part of the unit.

**Why it exists.** Components need stable, appropriate voltages. Underrated or failing supplies cause random reboots, failure to power on, coil whine, or damage under load (for example a new GPU).

**Where you see it.** Desktop builds, GPU upgrades that need extra PCIe power plugs, "it won't turn on" tickets, and burning-smell emergencies.

**Wattage and capacity.** Total wattage is a budget for the whole system. Size for CPU + GPU + drives + headroom (often ~20–30% above expected load for aging and spikes). Efficiency ratings (for example 80 PLUS tiers) describe conversion efficiency, not a license to buy an undersized unit.

**Common connectors (mechanism).**
1. **24-pin ATX** — main motherboard power.
2. **CPU / EPS (4/8-pin)** — processor power near the socket; missing this often means no POST.
3. **PCIe power (6/8-pin)** — discrete GPUs; some cards need two.
4. **SATA power** — drives and some accessories.
5. Legacy **Molex** — older devices / adapters.
Never force a connector; keyed shapes matter.

**Modular vs non-modular.** Non-modular PSUs have all cables attached. Modular / semi-modular units let you attach only needed cables — tidier airflow, fewer unused leads. Cable quality still matters; use the cables that shipped with that PSU (mixed modular cables from other brands can be dangerous).

**Symptoms and interpretation.** No fans/LEDs → wall outlet, switch, PSU power cable, or dead supply. Fans twitch then die → short, bad 24-pin/CPU power, or failing PSU. Random reboots under GPU load → wattage or aging PSU. Burning smell / smoke → power down, unplug, do not continue testing.

**Safe troubleshooting boundaries.**
- You may swap a known-good PSU of adequate wattage, reseat power connectors, verify the wall outlet/PDU, and confirm the case power switch wiring per the manual.
- You may use a PSU tester on the connectors if trained and equipped.
- **Do not open the PSU case.** Capacitors can hold dangerous charge even when unplugged. Replace the unit; do not service internals as an A+ field tech.

**Laptop note.** Laptops use external AC adapters with specific voltage/amperage and tip or USB-C PD profiles. Mismatched adapters charge slowly or not at all — related to cables/PD from earlier topics.`,
    },
    lightbulbMoment:
      "Treat the PSU as a sealed replaceable unit — size it, cable it, swap it; never open it.",
    keyFacts: [
      "PSU converts AC wall power to DC rails for the PC",
      "Size wattage for CPU + GPU + drives + headroom",
      "24-pin ATX + CPU 8-pin (or 4/8) are required on modern desktops",
      "GPUs often need PCIe 6/8-pin power connectors",
      "Use modular cables only from the same PSU brand/model family",
      "Never open a PSU enclosure — replace the unit instead",
    ],
    guidedExample: {
      title: "GPU upgrade power plan",
      steps: [
        "New GPU recommends a 650 W supply and two PCIe 8-pin plugs.",
        "Current PSU is 450 W non-modular with one PCIe 6-pin — inadequate.",
        "Select a quality 650–750 W unit with the needed connectors (prefer modular for cable management).",
        "Install: connect 24-pin, CPU power, SATA as needed, and both GPU power plugs until latched.",
        "Boot and watch for stable POST under a short load; if it dies under load, re-check seating and wattage claims.",
      ],
    },
    commonMistakes: [
      "Upgrading a GPU without checking PSU wattage and PCIe power plugs",
      "Leaving the CPU power connector unplugged after a board swap",
      "Mixing modular cables between different PSU brands",
      "Opening a PSU to 'see if the fan is stuck'",
      "Assuming any USB-C charger can power any USB-C laptop at full performance",
    ],
    examTraps: [
      "Identify 24-pin vs CPU vs PCIe power connectors",
      "Wattage sizing scenarios with a new GPU",
      "Modular cable interchange danger",
      "Safety: do not service PSU internals",
      "Symptoms of insufficient power under load",
    ],
    realWorldScenario:
      "After a graphics card install, the PC starts then dies when a game launches. You note the old 400 W unit and a single PCIe adapter daisy-chain. You replace it with a 750 W supply using two native PCIe cables. The system stays up under load — the card was fine; power delivery was not.",
    whenThisFails: [
      "If a known-good PSU still yields no power, check case front-panel wiring, outlet, and motherboard short (standoff misplaced)",
      "If you smell burning, stop testing immediately and replace the PSU; inspect downstream components before reuse",
      "If a laptop adapter is correct voltage but under-amperage, expect slow charge — use the OEM or a PD charger that meets the wattage profile",
    ],
    teacherReflectionPrompt:
      "Explain three safe checks you will do for a 'no power' desktop before you ever consider opening a PSU — and why opening it is out of bounds.",
    quiz: [
      {
        id: "ap-power-supplies-q1",
        prompt: "What is the primary job of a desktop PSU?",
        choices: [
          { id: "a", text: "Convert AC wall power into DC voltages the PC components use" },
          { id: "b", text: "Store files permanently like an SSD" },
          { id: "c", text: "Route Ethernet packets between VLANs" },
          { id: "d", text: "Render 3D graphics" },
        ],
        correctChoiceId: "a",
        explanation: "The PSU is a power converter/distributor, not storage or networking.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-q2",
        prompt: "Why should a technician not open a PSU enclosure?",
        choices: [
          { id: "a", text: "Dangerous voltages can remain even when unplugged — replace the unit instead" },
          { id: "b", text: "Opening it automatically upgrades wattage" },
          { id: "c", text: "PSUs contain no serviceable parts and also print money" },
          { id: "d", text: "It voids Ethernet warranties only" },
        ],
        correctChoiceId: "a",
        explanation: "Internal capacitors can hold hazardous charge; field practice is unit replacement.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-q3",
        prompt: "A modern motherboard typically needs which power connectors at minimum?",
        choices: [
          { id: "a", text: "24-pin ATX and CPU (4/8-pin) power" },
          { id: "b", text: "Only HDMI" },
          { id: "c", text: "Only RJ45" },
          { id: "d", text: "Only a Molex-to-USB adapter" },
        ],
        correctChoiceId: "a",
        explanation: "Main ATX plus CPU power are standard; missing CPU power often prevents POST.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-power-supplies-q4",
        prompt: "Mixing modular cables from different PSU brands is risky because:",
        choices: [
          { id: "a", text: "Pinouts can differ and may damage the board or supply" },
          { id: "b", text: "They change the CPU socket type" },
          { id: "c", text: "They convert the PSU into an HDD" },
          { id: "d", text: "Windows refuses to boot on modular systems always" },
        ],
        correctChoiceId: "a",
        explanation: "Modular cabling is not universally standardized across brands.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-power-supplies-q5",
        prompt: "A PC reboots when a new high-power GPU is stressed, but idles fine. What is a likely cause?",
        choices: [
          { id: "a", text: "PSU wattage or GPU power connectors are inadequate" },
          { id: "b", text: "The monitor refresh rate is too polite" },
          { id: "c", text: "Cat5e cannot carry frames" },
          { id: "d", text: "UEFI always forbids GPUs" },
        ],
        correctChoiceId: "a",
        explanation: "Load-related power failures point to capacity or PCIe power delivery.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-power-supplies-b1",
        prompt: "80 PLUS ratings primarily relate to:",
        choices: [
          { id: "a", text: "PSU conversion efficiency tiers" },
          { id: "b", text: "Wi-Fi channel width" },
          { id: "c", text: "RAM latency" },
        ],
        correctChoiceId: "a",
        explanation: "Efficiency is not the same as total wattage capacity.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-b2",
        prompt: "SATA power connectors commonly feed:",
        choices: [
          { id: "a", text: "Storage drives and some accessories" },
          { id: "b", text: "The CPU socket pins directly without a cable" },
          { id: "c", text: "DisplayPort lanes" },
        ],
        correctChoiceId: "a",
        explanation: "SATA power is for drives/peripherals, separate from SATA data.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-b3",
        prompt: "Modular PSUs help by:",
        choices: [
          { id: "a", text: "Letting you attach only needed cables for cleaner builds" },
          { id: "b", text: "Removing the need for a 24-pin connector" },
          { id: "c", text: "Making opening the PSU safe" },
        ],
        correctChoiceId: "a",
        explanation: "Cable management is the modular benefit — safety rules remain.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-b4",
        prompt: "First safe step when you smell burning from a PSU area:",
        choices: [
          { id: "a", text: "Power down, unplug, stop further testing, replace the unit" },
          { id: "b", text: "Open the PSU and poke capacitors" },
          { id: "c", text: "Increase GPU overclock to burn it out faster" },
        ],
        correctChoiceId: "a",
        explanation: "Burning smell is a stop-and-replace event.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-power-supplies-b5",
        prompt: "Headroom when choosing wattage means:",
        choices: [
          { id: "a", text: "Selecting capacity above expected peak load for spikes and aging" },
          { id: "b", text: "Buying the smallest unit that barely idles" },
          { id: "c", text: "Ignoring the GPU power listing" },
        ],
        correctChoiceId: "a",
        explanation: "Peaks and aging make headroom practical.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-power-supplies-b6",
        prompt: "Laptop power delivery often depends on:",
        choices: [
          { id: "a", text: "Correct voltage/amperage adapter or adequate USB-C PD wattage" },
          { id: "b", text: "ATX 24-pin plugged into the palm rest" },
          { id: "c", text: "RAID 0 on the charger brick" },
        ],
        correctChoiceId: "a",
        explanation: "Adapters and PD profiles must meet device requirements.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-power-supplies-b7",
        prompt: "A PC with no fans and no LEDs when the switch is pressed — early checks include:",
        choices: [
          { id: "a", text: "Wall power, PSU switch, power cord, then known-good PSU swap" },
          { id: "b", text: "Reinstalling Office" },
          { id: "c", text: "Changing the desktop theme" },
        ],
        correctChoiceId: "a",
        explanation: "Start with simple power path checks before deep board diagnosis.",
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-power-supplies-b8",
        prompt: "Why should a replacement PSU include reasonable wattage headroom?",
        choices: [
          { id: "a", text: "To support component demand and transient loads without operating continuously at the limit" },
          { id: "b", text: "To change the motherboard socket type" },
          { id: "c", text: "To make every connector interchangeable" },
        ],
        correctChoiceId: "a",
        explanation: "A correctly sized PSU includes practical headroom for component demand and transient loads.",
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-power-supplies-f1",
        front: "PSU job?",
        back: "Convert AC to DC rails for PC components",
      },
      {
        id: "ap-power-supplies-f2",
        front: "Main board power connector?",
        back: "24-pin ATX (plus CPU 4/8-pin)",
      },
      {
        id: "ap-power-supplies-f3",
        front: "Why not open a PSU?",
        back: "Hazardous stored charge — replace the unit",
      },
      {
        id: "ap-power-supplies-f4",
        front: "GPU power plugs?",
        back: "PCIe 6/8-pin connectors as required by the card",
      },
      {
        id: "ap-power-supplies-f5",
        front: "Modular cable rule?",
        back: "Use cables supplied for that PSU — do not mix brands",
      },
      {
        id: "ap-power-supplies-f6",
        front: "Load reboot after GPU upgrade?",
        back: "Suspect wattage or missing PCIe power",
      },
    ],
    assignments: [
      {
        id: "ap-lab-psu-plan",
        title: "Safe PSU planning worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "Without opening any PSU: (1) From a sample PC parts list or your practice PC GPU/CPU names, estimate a reasonable PSU wattage with headroom. (2) List the connectors you expect: 24-pin, CPU, PCIe, SATA. (3) Write one sentence explaining why you will not open a PSU to repair a fan. Optional: note cf-motherboard-power-cooling as a CF refresher for a nervous learner.",
        estimatedMinutes: 12,
        completionCriteria: [
          "Record a target wattage with brief rationale",
          "List at least four connector types you would verify on install",
          "Include the no-open-PSU safety statement in your notes",
        ],
        relatedTopicIds: ["ap-power-supplies"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },

  {
    id: "ap-displays",
    name: "Displays & Display Components",
    prerequisites: ["ap-power-supplies"],
    objectives: ["AP1201-3.1"],
    lesson: {
      title: "Displays & Display Components",
      content: `Displays turn GPU or integrated graphics output into images you can see. A+ expects you to compare display technologies, read resolution/refresh specs, match connectors, understand basic laptop display parts, and isolate whether a fault is the panel, cable, GPU, or software.

**Computer Fundamentals refresher (optional):** \`cf-peripherals-and-displays\` for literacy naming of monitors and ports before exam-depth troubleshooting.

**What it is.** A display (monitor, laptop panel, or projector) presents frames. Specs include resolution (pixel grid), refresh rate (Hz), panel technology (LCD/IPS/TN/VA, OLED where relevant), and brightness. Connectors include HDMI, DisplayPort, USB-C/Thunderbolt video, and legacy VGA/DVI.

**Why it exists.** Users cannot work without a reliable image. Many "PC is broken" tickets are cable, input-source, or resolution mismatches.

**Where you see it.** Docking stations, dual-monitor desks, laptop lid damage, projectors in conference rooms, and no-signal screens after GPU installs.

**Technologies (intro).** LCD panels with LED backlights dominate business monitors. IPS panels generally offer better viewing angles than older TN. OLED offers deep contrast on some devices but has different burn-in considerations. You need recognition and tradeoffs, not manufacturing chemistry.

**Resolution and refresh.** 1920×1080 (1080p), 2560×1440 (1440p), and 4K are common. Refresh rate (60 Hz, 144 Hz, etc.) is how often the image can update — important for smoothness. The cable, GPU, and display must all support the chosen mode.

**Connectors and adapters.** Prefer native digital paths (HDMI/DP). Adapters (USB-C to HDMI, DP to HDMI) add failure points. Active vs passive adapters matter for some signal conversions — if a cheap adapter fails at 4K, try a known-good certified dongle or native cable.

**Laptop display components.** Laptop assemblies may include the LCD panel, video cable (often through the hinge), inverter/backlight control on older designs, digitizer/webcam assemblies, and Wi-Fi antennas in the lid. Flicker when opening/closing the lid often points to a damaged display cable at the hinge — not necessarily a dead GPU.

**Projectors.** Conference projectors need correct input source, resolution that matches the PC, and sometimes keystone adjustment. Overheating projectors may shut down — clean filters per facility policy; do not ignore dust warnings.

**Isolating the display chain (mechanism).**
1. Confirm power LEDs on PC and display.
2. Try a known-good cable and the display's correct input.
3. Test the PC on a second known-good monitor (or the monitor on a second PC).
4. For laptops: external monitor test — if external works but lid does not, suspect lid panel/cable; if both fail, suspect GPU/driver/board.
5. Only then dig into driver reinstalls or hardware replacement.

**Interpretation.** "No signal" with fans spinning often means cable/input/GPU seating — not a dead PSU (covered last topic). Distorted colors on one cable that clear on another mean replace the cable before the panel.

**What's next.** Printers and MFDs add another output chain — app → queue/driver → connection → device — using the same isolation habit you just practiced on displays.`,
    },
    lightbulbMoment:
      "Prove where the image dies: second monitor and known-good cable split panel vs PC vs cable in minutes.",
    keyFacts: [
      "Resolution = pixel dimensions; refresh rate (Hz) = how often the image can update",
      "HDMI and DisplayPort are primary digital display interfaces",
      "Adapters add failure points — test native cables when possible",
      "Laptop lid flicker on hinge move often implicates the display cable",
      "External monitor test isolates lid panel vs GPU/system",
      "Projectors need correct input/source and adequate ventilation",
    ],
    guidedExample: {
      title: "Display-chain isolation",
      steps: [
        "Ticket: docking station shows black screens after cable cleanup.",
        "Bypass the dock: HDMI/DP directly from laptop to one monitor with a known-good cable.",
        "If direct works, suspect dock/cable/USB-C rating (tie back to cables topic).",
        "If direct fails, test a second monitor; if both fail, check GPU drivers and function keys for display output.",
        "Document: dock path fail / direct path result — replace the failing link only.",
      ],
    },
    commonMistakes: [
      "Reimaging Windows before swapping a $15 display cable",
      "Forgetting to change the monitor input source after moving a cable",
      "Assuming a laptop GPU is dead without testing an external display",
      "Driving 4K@high refresh over an under-spec HDMI cable or passive adapter",
      "Ignoring projector dust/overheat warnings",
    ],
    examTraps: [
      "Resolution vs refresh rate definitions",
      "Connector identification for displays",
      "Laptop hinge cable symptoms",
      "Using a second monitor to isolate faults",
      "Projector input/source mismatches",
    ],
    realWorldScenario:
      "A laptop image flickers when the lid angle changes. An external HDMI monitor is stable. You explain the hinge display cable is the likely fault, schedule a panel-cable service, and give the user an external display workaround — no unnecessary motherboard replacement.",
    whenThisFails: [
      "If every monitor and cable fails, check GPU seating/power (prior topics) and minimal UEFI display before OS driver work",
      "If only one app shows wrong colors, suspect software/color profile — not the panel",
      "If a projector shuts off after minutes, address heat/filter/environment before replacing the laptop",
    ],
    teacherReflectionPrompt:
      "Describe a three-test plan that distinguishes a bad HDMI cable from a bad laptop lid panel from a GPU/driver problem.",
    quiz: [
      {
        id: "ap-displays-q1",
        prompt: "Refresh rate is measured in hertz (Hz) and describes:",
        choices: [
          { id: "a", text: "How many times per second the display can update the image" },
          { id: "b", text: "How many megabytes of RAM the monitor stores" },
          { id: "c", text: "The wattage of the PSU" },
          { id: "d", text: "The Ethernet category of the desk cable" },
        ],
        correctChoiceId: "a",
        explanation: "Hz is update frequency; resolution is the pixel grid.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-q2",
        prompt: "A laptop flickers only when the lid moves, but an external monitor is stable. What is most likely?",
        choices: [
          { id: "a", text: "Damaged display cable / hinge assembly in the lid path" },
          { id: "b", text: "The wall Ethernet jack" },
          { id: "c", text: "RAID 0 failure on the charger" },
          { id: "d", text: "Incorrect DNS suffix" },
        ],
        correctChoiceId: "a",
        explanation: "Lid-angle flicker with a good external display points to the internal panel path.",
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-displays-q3",
        prompt: "Best first hardware swap for intermittent black screens on a desktop monitor:",
        choices: [
          { id: "a", text: "Known-good video cable and verify input source" },
          { id: "b", text: "Immediate motherboard replacement" },
          { id: "c", text: "Format the SSD" },
          { id: "d", text: "Open the PSU" },
        ],
        correctChoiceId: "a",
        explanation: "Cable and input source eliminate the most common faults quickly.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-q4",
        prompt: "1920×1080 refers to:",
        choices: [
          { id: "a", text: "Display resolution (pixel dimensions)" },
          { id: "b", text: "PSU wattage" },
          { id: "c", text: "CPU socket name" },
          { id: "d", text: "Wi-Fi channel width" },
        ],
        correctChoiceId: "a",
        explanation: "Resolution is width × height in pixels.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-q5",
        prompt: "A conference projector shows 'no signal' while the laptop image is fine on its lid. What should you check next?",
        choices: [
          { id: "a", text: "Projector input source, cable/path, and display output / Win+P projection mode" },
          { id: "b", text: "Whether DDR5 is installed" },
          { id: "c", text: "Whether the PSU is modular" },
          { id: "d", text: "Whether the SSD is NVMe" },
        ],
        correctChoiceId: "a",
        explanation: "Projectors need the correct input and the OS must output to the external display.",
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-displays-b1",
        prompt: "DisplayPort and HDMI are both:",
        choices: [
          { id: "a", text: "Digital display interfaces" },
          { id: "b", text: "Analog-only VGA replacements that never carry audio" },
          { id: "c", text: "RAM form factors" },
        ],
        correctChoiceId: "a",
        explanation: "Both carry digital video (and often audio).",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-b2",
        prompt: "IPS panels are often preferred over older TN panels because:",
        choices: [
          { id: "a", text: "Better viewing angles / color consistency for many office uses" },
          { id: "b", text: "They remove the need for a GPU" },
          { id: "c", text: "They are a type of PSU rail" },
        ],
        correctChoiceId: "a",
        explanation: "Panel tech tradeoffs show up in viewing angle and color.",
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-displays-b3",
        prompt: "If PC + cable A fails but PC + cable B works on the same monitor:",
        choices: [
          { id: "a", text: "Replace cable A — the panel is probably fine" },
          { id: "b", text: "Replace the motherboard first" },
          { id: "c", text: "Reinstall Windows immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Controlled swaps isolate the failing link.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-b4",
        prompt: "External monitor works; laptop lid stays black. Suspect first:",
        choices: [
          { id: "a", text: "Laptop panel or internal display cable" },
          { id: "b", text: "DNS" },
          { id: "c", text: "Printer drum" },
        ],
        correctChoiceId: "a",
        explanation: "External success usually clears GPU/system basics.",
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-displays-b5",
        prompt: "Win+P on Windows is useful to:",
        choices: [
          { id: "a", text: "Switch projection modes (PC screen only / duplicate / extend / second only)" },
          { id: "b", text: "Open Disk Management" },
          { id: "c", text: "Clear CMOS" },
        ],
        correctChoiceId: "a",
        explanation: "Projection mode mistakes look like 'dead' projectors.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-b6",
        prompt: "A 4K mode failing on a short cheap cable but working on a certified cable suggests:",
        choices: [
          { id: "a", text: "Cable bandwidth/quality limits" },
          { id: "b", text: "That 4K requires RAID 1" },
          { id: "c", text: "That UEFI cannot show any image ever" },
        ],
        correctChoiceId: "a",
        explanation: "High resolutions need adequate cable/adapter capability.",
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-displays-b7",
        prompt: "Projectors in closed cabinets may shut down due to:",
        choices: [
          { id: "a", text: "Overheating / blocked filters" },
          { id: "b", text: "Too much ECC RAM" },
          { id: "c", text: "Cat6a being too fast" },
        ],
        correctChoiceId: "a",
        explanation: "Thermal protection is common on projectors.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-displays-b8",
        prompt: "A monitor shows no signal after a dock change. What is the best first isolation step?",
        choices: [
          { id: "a", text: "Confirm the monitor input and test a known-good direct video cable to separate dock, cable, and display" },
          { id: "b", text: "Replace the display panel immediately" },
          { id: "c", text: "Reinstall the operating system before checking the cable" },
        ],
        correctChoiceId: "a",
        explanation: "A direct known-good path isolates the dock, cable, port, and monitor with minimal disruption.",
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-displays-f1",
        front: "Resolution vs refresh rate?",
        back: "Resolution = pixel grid; refresh (Hz) = updates per second",
      },
      {
        id: "ap-displays-f2",
        front: "Quick black-screen hardware swap?",
        back: "Known-good cable + correct input source",
      },
      {
        id: "ap-displays-f3",
        front: "Lid flicker on angle change?",
        back: "Suspect laptop display cable / hinge path",
      },
      {
        id: "ap-displays-f4",
        front: "External OK, lid black?",
        back: "Panel/cable more likely than whole GPU",
      },
      {
        id: "ap-displays-f5",
        front: "Win+P does what?",
        back: "Windows projection mode (duplicate/extend/second)",
      },
      {
        id: "ap-displays-f6",
        front: "Display isolation mantra?",
        back: "Second monitor + known-good cable before deep surgery",
      },
    ],
    assignments: [
      {
        id: "ap-lab-display-chain",
        title: "Display-chain troubleshooting exercise",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "On a practice Windows 11 PC with a monitor (or laptop + external if available): (1) Note current resolution and refresh rate under Settings > System > Display. (2) Practice Win+P modes and return to Extend or Duplicate as appropriate. (3) Write a 4-step isolation plan for 'no signal on dock' using direct cable vs dock vs second display. Do not force connectors. Optional CF refresher: cf-peripherals-and-displays.",
        estimatedMinutes: 15,
        completionCriteria: [
          "Record resolution and refresh rate from Settings",
          "Demonstrate or describe Win+P modes safely",
          "Submit a 4-step dock/no-signal isolation plan",
        ],
        relatedTopicIds: ["ap-displays"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },
];
