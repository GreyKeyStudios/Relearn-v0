import type { ExternalResource, Topic } from "../../types";
import { AP_MOBILE_OBJECTIVE_TOPIC } from "./ap-mobile-remediation";

/**
 * A+ Core 1 Mobile Devices — A3 (Michael 2026-08-01).
 * hardware (1.1) → accessories (1.2) → connectivity (1.3) → domain review.
 * Stop after Mobile first-pass — no Virt/Cloud, Domain 5 TS, Core 2, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC or personal phone/tablet you may inspect. Mobile labs are inventory/planning worksheets — do not disassemble devices, puncture batteries, or open sealed units without manufacturer authorization.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_MOBILE_OBJECTIVE_TOPIC[objectiveId];
  return topic
    ? ` If this was unclear, review topic \`${topic}\`.`
    : "";
}

export const apCore1MobileBatch1Topics: Topic[] = [
  {
    id: "ap-mobile-hardware",
    name: "Mobile Device Hardware",
    prerequisites: ["ap-hardware-domain-review"],
    objectives: ["AP1201-1.1"],
    lesson: {
      title: "Install or Replace Mobile-Device Hardware Components",
      content: `Mobile devices pack desktop-class jobs into thin, often sealed assemblies. On A+, you identify components, judge **replaceability**, isolate symptoms by layer, and know when to escalate — not force every laptop open like a tower.

**CF refreshers:** \`cf-inside-the-box\`, \`cf-cpu-ram-storage\`, \`cf-peripherals-and-displays\`, \`cf-esd-and-safe-handling\` — literacy; this topic adds FRU judgment and battery/display safety.

**What it is.** Laptops, tablets, and smartphones are mobile computers with integrated I/O, batteries, radios, and displays. Many parts are **field-replaceable units (FRUs)** on serviceable laptops; phones/tablets are often adhesive-sealed with limited user serviceability.

**Laptop components (jobs).**
- **Keyboard / touchpad** — primary input; spills and wear are common; often modular on business laptops.
- **Display assembly** — panel, backlight/LED, cable, hinges, sometimes webcam bezel. Flicker when lid moves often implicates **cable/hinge**, not GPU.
- **Webcam / mic / speakers** — AV I/O; privacy shutters and OS mute can look like “dead hardware.”
- **Battery** — internal Li-ion/Li-poly pack; fuel-gauge and charging circuitry matter as much as the cells.
- **DC jack / USB-C charging hardware** — power in; intermittent charge can be jack, cable, adapter, or board path.
- **Wireless card + antenna leads** — Wi-Fi/BT module; antennas often run in the lid — reconnect carefully after display work.
- **Storage / memory** — M.2/2.5" or soldered; SODIMM vs soldered RAM is model-specific.
- **System board** — motherboard; usually escalation / depot-level.
- **Cooling** — heat pipes/fans; dust and blocked vents cause thermal throttle/shutdown.
- **Hinges** — mechanical; failed hinges can tear display cables.

**Tablet / phone concepts.**
- **Touchscreen + digitizer** — digitizer senses touch/pen; panel shows image. Touch fails with image OK → digitizer/glass stack more than “the LCD alone.”
- **Cameras / sensors** — front/rear imagers; accelerometer, gyro, ambient light, proximity.
- **SIM / eSIM** — carrier identity; physical SIM tray vs embedded profile.
- **Batteries** — often glued; swollen packs are a safety stop, not a DIY squeeze.

**Mechanism — isolate layers.**
- Display: panel vs backlight/cable vs hinge flex vs GPU/output.
- Touch: digitizer vs OS/driver vs screen protector interference vs cracked glass.
- Charge: wall adapter vs cable vs port debris vs battery health vs charging IC (board).
- Wireless: radio module vs antenna seating vs airplane mode/software (connectivity topic deepens radios).

**Replaceability judgment.**
- User-serviceable: some batteries/doors, SODIMM/M.2 on documented business laptops, external peripherals.
- Technician-serviceable (authorized): keyboards, displays, Wi-Fi cards per service manual.
- Escalation-only: most phone logic boards, soldered RAM/CPU, micro-soldering, sealed glass assemblies without training/parts.

**Safety (non-negotiable).**
- Never puncture, bend, crush, or heat lithium batteries.
- Stop using/charging a **swollen** battery; do not reuse damaged packs.
- Disconnect power before approved internal work; follow manufacturer docs.
- Avoid unapproved opening of sealed devices.
- **Back up / protect user data** before service; document existing damage.
- Use ESD precautions; escalate board-level repair unless authorized and trained.

**What's next.** Accessories — docks, styluses, chargers — compatibility without assuming connector shape equals capability.`,
    },
    lightbulbMoment:
      "The cracked screen is not always the broken layer — prove panel vs digitizer vs cable vs charge path before you order parts.",
    keyFacts: [
      "Model-specific service manuals beat generic 'open any laptop' advice",
      "Lid-flex flicker often points at display cable/hinge, not the GPU",
      "Digitizer (touch) and display panel are related but not identical failures",
      "Swollen or damaged Li-ion packs are a stop/escalate safety issue",
      "Soldered RAM/storage and sealed phones limit FRU options",
      "Protect user data and document damage before any service",
    ],
    guidedExample: {
      title: "Symptom → layer → serviceability",
      steps: [
        "Laptop image OK; touch dead after drop → digitizer/glass stack; often whole display assembly; check warranty/parts.",
        "Picture flickers only when lid angle changes → display cable/hinge path; not 'reinstall Windows first.'",
        "Phone swollen back glass → battery safety stop; do not charge; specialist/OEM path.",
        "Business laptop Wi-Fi after keyboard job → antenna leads unseated on wireless card.",
        "No charge; known-good USB-C PD charger works on another device → port debris/board/battery — isolate before board swap.",
      ],
    },
    commonMistakes: [
      "Prying sealed phones with metal tools near the battery",
      "Assuming all laptops have upgradeable RAM",
      "Replacing the panel when the hinge cable is pinched",
      "Charging a swollen battery 'to see if it recovers'",
      "Skipping backup before storage replacement",
    ],
    examTraps: [
      "FRU vs soldered/integrated components",
      "Display cable vs panel vs digitizer symptoms",
      "Battery swelling safety actions",
      "Antenna lead reconnection after service",
      "When to escalate to manufacturer/depot",
    ],
    realWorldScenario:
      "A sales laptop 'needs a new screen' because the image flickers. You reproduce only at certain lid angles, order the display cable/hinge kit per the service guide, and avoid a full panel + labor — isolation beat the visible complaint.",
    whenThisFails: [
      "If the device is under warranty/MDM lockdown, stop unauthorized opening and use OEM channels",
      "If the battery is swollen, cease charge/use and follow hazardous-battery handling policy",
      "If no service manual exists for your skill level, inventory symptoms and escalate",
    ],
    teacherReflectionPrompt:
      "Name three mobile components that are often FRUs on a business laptop and three that usually require specialist or OEM service on a modern phone.",
    quiz: [
      {
        id: "ap-mobile-hardware-q1",
        prompt: "Laptop display flickers only when the lid angle changes. Most likely layer?",
        choices: [
          { id: "a", text: "Display cable / hinge flex path" },
          { id: "b", text: "Dead toner cartridge" },
          { id: "c", text: "RAID 0 stripe size" },
          { id: "d", text: "DNS root failure exclusively" },
        ],
        correctChoiceId: "a",
        explanation:
          "Lid-dependent flicker often implicates the cable/hinge assembly.",
        objectiveId: "AP1201-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-hardware-q2",
        prompt: "A smartphone battery is visibly swollen. Correct immediate action?",
        choices: [
          { id: "a", text: "Stop charging/using and follow safe battery escalation procedures" },
          { id: "b", text: "Microwave the pack to flatten it" },
          { id: "c", text: "Puncture to release pressure" },
          { id: "d", text: "Bend the pack to fit the case" },
        ],
        correctChoiceId: "a",
        explanation: "Swollen Li-ion is a safety stop — never puncture or heat.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-q3",
        prompt: "Image displays correctly but touch input fails after a drop. Suspect first:",
        choices: [
          { id: "a", text: "Digitizer / touch layer (not necessarily the LCD image panel alone)" },
          { id: "b", text: "The ONT fiber handoff" },
          { id: "c", text: "The punch-down tool" },
          { id: "d", text: "ECC RAM registration" },
        ],
        correctChoiceId: "a",
        explanation: "Touch and image paths can fail independently.",
        objectiveId: "AP1201-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-hardware-q4",
        prompt: "Before replacing an internal laptop SSD you should:",
        choices: [
          { id: "a", text: "Back up / protect user data and follow the model service guide" },
          { id: "b", text: "Skip documentation because SSDs never hold data" },
          { id: "c", text: "Heat the battery with a heat gun first" },
          { id: "d", text: "Disable ESD precautions" },
        ],
        correctChoiceId: "a",
        explanation: "Data protection and model-specific procedures come first.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-q5",
        prompt: "Many modern ultrabooks and phones have soldered RAM. That means:",
        choices: [
          { id: "a", text: "RAM is not a simple user FRU upgrade on those models" },
          { id: "b", text: "You can always add SODIMMs like a desktop" },
          { id: "c", text: "RAM is stored in the SIM tray" },
          { id: "d", text: "Cooling fans are unnecessary" },
        ],
        correctChoiceId: "a",
        explanation: "Serviceability is model-specific; soldered ≠ desktop DIMMs.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-mobile-hardware-b1",
        prompt: "Wi-Fi fails after a laptop display replacement. A common oversight is:",
        choices: [
          { id: "a", text: "Antenna leads not reseated on the wireless card" },
          { id: "b", text: "Forgetting to install toner" },
          { id: "c", text: "Leaving the ONT unplugged from the laptop" },
        ],
        correctChoiceId: "a",
        explanation: "Lid antennas must be reconnected after many display jobs.",
        objectiveId: "AP1201-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-hardware-b2",
        prompt: "eSIM differs from a physical SIM mainly because:",
        choices: [
          { id: "a", text: "The carrier profile is embedded/downloadable rather than a removable card" },
          { id: "b", text: "eSIM replaces the battery" },
          { id: "c", text: "eSIM is only for printers" },
        ],
        correctChoiceId: "a",
        explanation: "eSIM is an embedded identity profile.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b3",
        prompt: "Laptop board-level power-management IC failure is usually:",
        choices: [
          { id: "a", text: "Escalation / depot or specialist — not casual user soldering" },
          { id: "b", text: "Fixed by enabling UPnP" },
          { id: "c", text: "Solved with a screen protector" },
        ],
        correctChoiceId: "a",
        explanation: "Know your serviceability limits.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b4",
        prompt: "Blocked laptop vents under load often cause:",
        choices: [
          { id: "a", text: "Thermal throttling or unexpected shutdowns" },
          { id: "b", text: "Automatic WPA3 Enterprise enrollment" },
          { id: "c", text: "DNS zone transfers" },
        ],
        correctChoiceId: "a",
        explanation: "Cooling path matters on thin devices.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b5",
        prompt: "Documenting existing cracks before service mainly helps:",
        choices: [
          { id: "a", text: "Clarify pre-existing damage vs repair-caused damage" },
          { id: "b", text: "Increase PoE budget" },
          { id: "c", text: "Disable airplane mode permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Intake documentation protects user and technician.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b6",
        prompt: "A digitizer’s job is to:",
        choices: [
          { id: "a", text: "Sense touch/pen input (separate from merely showing the image)" },
          { id: "b", text: "Terminate ISP fiber" },
          { id: "c", text: "Crimp RJ45 connectors" },
        ],
        correctChoiceId: "a",
        explanation: "Digitizer = touch sensing layer.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b7",
        prompt: "ESD precautions during approved internal work:",
        choices: [
          { id: "a", text: "Reduce risk of damaging sensitive components" },
          { id: "b", text: "Are optional because phones have no electronics" },
          { id: "c", text: "Replace the need for manufacturer procedures" },
        ],
        correctChoiceId: "a",
        explanation: "ESD + service docs both matter.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-hardware-b8",
        prompt: "Before replacing a mobile-device field-replaceable unit, first determine:",
        choices: [
          { id: "a", text: "Whether the part is serviceable, authorized, compatible, and safe under the vendor procedure" },
          { id: "b", text: "Whether the case can be forced open" },
          { id: "c", text: "Whether every mobile component uses the same connector" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile repair begins with serviceability, authorization, compatibility, data, and safety boundaries.",
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-mobile-hardware-f1",
        front: "Lid-angle flicker suggests?",
        back: "Display cable / hinge path — isolate before panel swap",
      },
      {
        id: "ap-mobile-hardware-f2",
        front: "Swollen battery action?",
        back: "Stop charge/use — never puncture/heat — escalate safely",
      },
      {
        id: "ap-mobile-hardware-f3",
        front: "Digitizer vs panel?",
        back: "Digitizer = touch · panel = image",
      },
      {
        id: "ap-mobile-hardware-f4",
        front: "Soldered RAM means?",
        back: "Not a simple user SODIMM upgrade on that model",
      },
      {
        id: "ap-mobile-hardware-f5",
        front: "Before internal storage work?",
        back: "Backup/protect data + follow service guide",
      },
      {
        id: "ap-mobile-hardware-f6",
        front: "After display service Wi-Fi dead?",
        back: "Check antenna leads on the wireless card",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-hw-inventory",
        title: "Mobile hardware inventory / repair plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Inspect your own laptop/phone/tablet externally OR use this fictional device:
"Latitude-style business laptop, serviceable bottom cover, SODIMM + M.2, 3-cell battery, Wi-Fi card with lid antennas, 1080p display with webcam."

Record (no disassembly):
1) Device type & model (or fictional model name)
2) Major components list
3) Which look user/tech FRU vs likely sealed/escalation
4) Upgrade limitations (RAM/storage)
5) Battery condition indicators you can see in OS/settings (or N/A)
6) Charging connector/requirements
7) Data-protection step before any service
8) One repair vs escalation recommendation for: (a) lid-flex flicker (b) swollen battery

Do not open sealed devices or handle damaged batteries.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Complete inventory fields 1–8",
          "Include FRU vs escalate judgment for both sample faults",
        ],
        relatedTopicIds: ["ap-mobile-hardware"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-mobile-accessories",
    name: "Mobile Accessories & Connectivity Options",
    prerequisites: ["ap-mobile-hardware"],
    objectives: ["AP1201-1.2"],
    lesson: {
      title: "Compare Mobile Accessories and Connection Options",
      content: `Accessories solve a job: expand ports, capture input, charge safely, protect the device, or present video. Compatibility is **connector + protocol + power + OS/drivers + form factor** — not “the plug fits.”

**CF refreshers:** \`cf-ports-and-connectors\`, \`cf-peripherals-and-displays\` — expand into dock/PD/stylus reasoning.

**Expansion and desks.**
- **Docking station** — often video + Ethernet + USB + charging over one cable (Thunderbolt/USB4/vendor USB-C docks).
- **Port replicator** — similar expansion; traditionally lighter on video/charging (terms blur by vendor — read the spec sheet).
- **USB hub** — more ports; may be bus-powered (limited) or powered; hubs can starve hungry devices.
- **External displays** — need host GPU/port capability (DP Alt Mode, Thunderbolt, etc.), cable grade, and OS display mode.
- **Stands / mounts / vehicle mounts** — ergonomics and safety; don’t block vents.

**Input and AV.**
- **External keyboards / pointing devices** — USB or Bluetooth.
- **Stylus** — **passive** (capacitive tip) vs **active** (digitizer protocol, pressure, buttons — device must support that protocol).
- **Headsets / speakers / webcams** — wired or wireless; mics need OS permission; Bluetooth audio ≠ automatic call-audio profile.
- **Game controllers** — wired/wireless; may need platform support.
- **Card readers / external storage** — USB/SD; phones may need OTG support and formatting rules.
- **Mobile payment accessories / NFC taps** — accessory must match payment/NFC capability (deep fraud topics stay out of scope).

**Power.**
- **Chargers / adapters** — wattage and PD profiles matter; a thin USB-C cable may charge slowly or not drive a laptop.
- **Power banks** — capacity + negotiated PD; some laptops need higher-watt banks.
- Slow charge through a hub often means **power budget**, not a “broken battery.”

**Protection and wearables.**
- Cases, screen protectors — can interfere with wireless charging, fit, or touch edges.
- Smartwatches / trackers — Bluetooth pairing + app ecosystem; battery and privacy settings matter.

**Compatibility checklist (always).**
1. Physical connector shape  
2. Protocol (USB2 vs USB3 vs Thunderbolt/USB4, DisplayPort Alt Mode)  
3. Power delivery capability  
4. Display bandwidth/resolution expectations  
5. OS and driver/app requirements  
6. Wireless profile/pairing support  
7. Manufacturer restrictions (supported dock list)

**Symptom framing.**
- Dock charges but no Ethernet → link/driver/port role, not “buy any hub.”
- External display low resolution → cable/protocol/mode, not always a dead GPU.
- Stylus draws but no pressure → passive tip on a device expecting active protocol (or vice versa).
- Headset pairs but mic missing → profile/permissions, not only “Bluetooth broken.”

**What's next.** Mobile connectivity — Wi-Fi, cellular, hotspot, sync — how the device talks and keeps data current.`,
    },
    lightbulbMoment:
      "Fit is not finish — if the plug seats but power, video, or protocol is missing, the accessory is the wrong tool for the job.",
    keyFacts: [
      "Matching connector shape does not guarantee protocol, PD, or display capability",
      "Docks/port replicators expand I/O; read supported host lists and cable requirements",
      "Active styluses need matching digitizer support; passive tips are not the same",
      "Bus-powered hubs can cause slow charge or dropped devices",
      "Bluetooth accessory paired ≠ every audio/input profile available",
      "Check OS drivers, permissions, and display mode before condemning hardware",
    ],
    guidedExample: {
      title: "Accessory selection scenarios",
      steps: [
        "Laptop needs dual 4K + Ethernet + charge → Thunderbolt/USB4 dock on a capable host port, not a cheap unpowered hub.",
        "Tablet handwriting with pressure → active stylus + supported digitizer; capacitive pen alone may not suffice.",
        "Phone external SSD → USB-C OTG/host support + powered enclosure if needed; format/FS compatibility.",
        "Call center headset → confirm call-audio profile + OS mic permission after pairing.",
        "Slow charge via hub → try direct PD charger; hub power budget is the suspect.",
        "Display connects at 1080p only → cable/dock bandwidth or OS resolution/refresh limits.",
      ],
    },
    commonMistakes: [
      "Buying any USB-C dock for a USB-C-only charge port that lacks DP Alt Mode/Thunderbolt",
      "Blaming the laptop GPU when the cable is USB2-grade for high-res video",
      "Assuming a paired Bluetooth headset always provides a microphone to the OS",
      "Stacking unpowered hubs for a bus-powered SSD and a phone charge",
      "Ignoring OEM 'supported docks' lists on managed business laptops",
    ],
    examTraps: [
      "Dock vs hub power/video differences",
      "Active vs passive stylus",
      "Connector fit ≠ capability",
      "PD/charging through accessories",
      "External display mode/cable limits",
    ],
    realWorldScenario:
      "A designer’s USB-C hub 'broke' dual monitors. The laptop’s left port is charge-only; the right port is Thunderbolt. Moving the dock cable restores both displays and Ethernet — the accessory was fine; the port capability was not checked.",
    whenThisFails: [
      "If a managed laptop blocks third-party docks, escalate to IT with the supported-accessory list",
      "If only one accessory fails across many hosts, replace/RMA the accessory",
      "If wireless accessories drain batteries overnight, check always-on radios and disconnect policies",
    ],
    teacherReflectionPrompt:
      "Explain why a USB-C dock might charge a laptop yet fail to drive an external display, listing at least two distinct causes.",
    quiz: [
      {
        id: "ap-mobile-accessories-q1",
        prompt: "A USB-C cable fits but the laptop barely charges. Best compatibility question?",
        choices: [
          { id: "a", text: "Does the charger/cable support the required USB Power Delivery wattage?" },
          { id: "b", text: "Is the toner cartridge empty?" },
          { id: "c", text: "Did the ONT lose DHCP?" },
          { id: "d", text: "Is RAID 1 degraded?" },
        ],
        correctChoiceId: "a",
        explanation: "PD capability and cable quality gate charging speed.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-q2",
        prompt: "Active stylus vs passive stylus — key difference?",
        choices: [
          { id: "a", text: "Active needs device digitizer/protocol support; passive is a basic capacitive tip" },
          { id: "b", text: "Passive always provides pressure levels on every phone" },
          { id: "c", text: "Active styluses are only Ethernet NICs" },
          { id: "d", text: "They are identical in every way" },
        ],
        correctChoiceId: "a",
        explanation: "Protocol support separates active pens from capacitive tips.",
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-accessories-q3",
        prompt: "Laptop needs Ethernet + dual monitors + charging on one cable. Best class of accessory?",
        choices: [
          { id: "a", text: "A capable docking station matched to the host port (e.g., Thunderbolt/USB4/vendor dock)" },
          { id: "b", text: "A passive screen protector" },
          { id: "c", text: "A SIM ejector tool" },
          { id: "d", text: "A punch-down tool" },
        ],
        correctChoiceId: "a",
        explanation: "Docks are built for multi-I/O desk expansion.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-q4",
        prompt: "External display connects but stays at unexpectedly low resolution. Likely causes include:",
        choices: [
          { id: "a", text: "Cable/dock bandwidth limits or OS display mode — not only a dead GPU" },
          { id: "b", text: "Missing toner" },
          { id: "c", text: "APIPA on the monitor backlight" },
          { id: "d", text: "WEP encryption on HDMI" },
        ],
        correctChoiceId: "a",
        explanation: "Protocol and mode limits are common accessory issues.",
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-accessories-q5",
        prompt: "Phone charges slowly only when connected through an unpowered hub. Prime suspect?",
        choices: [
          { id: "a", text: "Insufficient power budget through the hub path" },
          { id: "b", text: "The CPU socket changed" },
          { id: "c", text: "DNS zone transfer failure" },
          { id: "d", text: "Fuser temperature" },
        ],
        correctChoiceId: "a",
        explanation: "Hubs can starve charging current.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-mobile-accessories-b1",
        prompt: "Port replicators/docks primarily:",
        choices: [
          { id: "a", text: "Expand limited laptop/phone ports for desk use" },
          { id: "b", text: "Replace lithium batteries chemically" },
          { id: "c", text: "Terminate ISP fiber" },
        ],
        correctChoiceId: "a",
        explanation: "Expansion is the job; specs still matter.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-b2",
        prompt: "Bluetooth headset pairs but OS shows no mic. Consider:",
        choices: [
          { id: "a", text: "Profile/capability and OS microphone permissions" },
          { id: "b", text: "Replacing the motherboard first always" },
          { id: "c", text: "Disabling all chargers permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Paired ≠ full HFP/mic capability in the OS.",
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-accessories-b3",
        prompt: "External USB storage on a phone may require:",
        choices: [
          { id: "a", text: "OTG/host support and compatible formatting" },
          { id: "b", text: "A PoE injector into Lightning exclusively" },
          { id: "c", text: "WEP on the SSD" },
        ],
        correctChoiceId: "a",
        explanation: "Phones are not always USB hosts by default.",
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-accessories-b4",
        prompt: "Screen protectors can interfere with:",
        choices: [
          { id: "a", text: "Touch edges, fit of cases, or wireless charging on some devices" },
          { id: "b", text: "BGP routing tables" },
          { id: "c", text: "ECC bit width" },
        ],
        correctChoiceId: "a",
        explanation: "Physical accessories have side effects.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-b5",
        prompt: "Smartwatch typically depends on:",
        choices: [
          { id: "a", text: "Bluetooth pairing plus a companion app/ecosystem" },
          { id: "b", text: "Being an ONT" },
          { id: "c", text: "Punch-down termination" },
        ],
        correctChoiceId: "a",
        explanation: "Wearables are accessory + software ecosystems.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-b6",
        prompt: "Vehicle mounts mainly address:",
        choices: [
          { id: "a", text: "Safe positioning/visibility — not network routing" },
          { id: "b", text: "Automatic VLAN trunking" },
          { id: "c", text: "SAN zoning" },
        ],
        correctChoiceId: "a",
        explanation: "Mounts are ergonomics/safety accessories.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-b7",
        prompt: "OEM supported-dock lists matter because:",
        choices: [
          { id: "a", text: "Hosts may limit full features to validated accessories" },
          { id: "b", text: "All USB-C docks are electrically identical forever" },
          { id: "c", text: "Docks replace the need for batteries" },
        ],
        correctChoiceId: "a",
        explanation: "Manufacturer restrictions are real in business fleets.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-accessories-b8",
        prompt: "A USB-C dock fits a laptop but provides no video. What must be verified?",
        choices: [
          { id: "a", text: "The port, cable, and dock support the required video mode, data rate, and power delivery" },
          { id: "b", text: "USB-C shape guarantees every optional capability" },
          { id: "c", text: "The printer driver controls dock video" },
        ],
        correctChoiceId: "a",
        explanation: "Connector fit does not guarantee Alt Mode, Thunderbolt, bandwidth, or power capability.",
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-mobile-accessories-f1",
        front: "Fit ≠ capability?",
        back: "Same shape can lack PD, video Alt Mode, or Thunderbolt",
      },
      {
        id: "ap-mobile-accessories-f2",
        front: "Active vs passive stylus?",
        back: "Active needs digitizer protocol · passive = capacitive tip",
      },
      {
        id: "ap-mobile-accessories-f3",
        front: "Slow charge via hub?",
        back: "Suspect hub power budget — try direct PD charger",
      },
      {
        id: "ap-mobile-accessories-f4",
        front: "Dock selection rule?",
        back: "Match host port capability + OEM support list",
      },
      {
        id: "ap-mobile-accessories-f5",
        front: "Paired headset, no mic?",
        back: "Check profile + OS microphone permission",
      },
      {
        id: "ap-mobile-accessories-f6",
        front: "Low-res external display?",
        back: "Cable/dock bandwidth or OS display mode",
      },
    ],
    assignments: [
      {
        id: "ap-lab-accessory-tickets",
        title: "Accessory compatibility tickets",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `For each ticket, name: (1) accessory choice or check, (2) failure category (connector / protocol / power / driver / display mode / pairing / unsupported / damaged cable), (3) first safe proof.

A) Laptop needs two monitors + Ethernet + charging on one cable.
B) Tablet needs pressure-sensitive handwriting.
C) Phone needs external SSD for field photos.
D) User headset pairs but call audio/mic missing.
E) Phone charges slowly only through a hub.
F) Monitor connects; resolution/refresh far below panel rating.

No device disassembly. Do not share personal account secrets.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Complete A–F with category + first proof each",
        ],
        relatedTopicIds: ["ap-mobile-accessories", "ap-mobile-hardware"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-mobile-connectivity",
    name: "Mobile Network Connectivity & App Support",
    prerequisites: ["ap-mobile-accessories"],
    objectives: ["AP1201-1.3"],
    lesson: {
      title: "Configure Mobile Network Connectivity and Application Support",
      content: `Mobile devices stay useful when radios, accounts, and sync behave. On A+, you isolate **which layer failed** — radio, pairing/profile, authentication, account/sync, permission, battery/data policy, or carrier — without treating “Bluetooth” or “the cloud” as a single blob.

**CF / Networking refreshers:** \`cf-ethernet-vs-wifi\`, \`cf-connection-troubleshooting-basics\`, plus A+ wireless/config topics — reuse; add mobile sync and tethering judgment.

**Radios and links.**
- **Wi-Fi** — LAN access; wrong password, captive portal, or disabled radio ≠ “dead internet chip.”
- **Bluetooth** — short-range accessories and transfer. Stages: **discovery → pairing → connection**; then **profiles/capabilities** (media audio, call audio, HID input, file transfer). Paired ≠ every feature works.
- **NFC** — tap-range payments/pairing assists.
- **Cellular** — voice/SMS vs **mobile data** can fail separately; **SIM / eSIM** activation matters.
- **Hotspot / tethering** (Wi-Fi, Bluetooth, or **USB tethering**) — phone shares cellular data; clients may associate yet have no upstream if data is off, capped, or APN/carrier blocked.
- **Airplane mode** — kills most radios; some devices allow selective re-enable.
- **Location / GPS** — OS location services + app permission; GPS/network assist; one app denied ≠ system GPS dead.
- **VPN (intro)** — encrypted path for corp/personal privacy; misconfigured VPN can break apps while raw Wi-Fi looks fine.
- **MDM concepts** — org may enforce Wi-Fi, VPN, sync, or disable hotspot — escalate policy blocks.

**Synchronization (not the same as backup).**
- **Sync** keeps accounts current across devices (mail, contacts, calendar, photos/cloud files) — often bidirectional and network-dependent.
- **Backup** is a recoverable point-in-time copy — different goal.
- Watch: account presence, sync direction, conflicts, duplicates, stale data, storage quotas, metered/battery restrictions pausing sync, privacy of what leaves the device.

**Email / contacts / calendar.** Wrong account, disabled sync toggles, or OAuth token expiry look like “phone mail is broken” when another device still updates.

**Data transfer.** Cable, wireless share, cloud — each has trust and format limits. Prefer authorized methods; don’t scrape personal IDs into tickets.

**Troubleshooting framing.**
| Symptom | First layers to separate |
|---------|---------------------------|
| Sees Wi-Fi, won’t join | Auth/portal vs radio vs MAC filter |
| BT pairs, no mic/calls | Profile/capability vs OS permission |
| Hotspot clients online, no internet | Cellular data / plan / APN vs phone hotspot setting |
| Mail updates on tablet, not phone | Account/sync toggle vs battery restriction |
| Duplicate contacts | Multi-account sync overlap |
| Cellular calls OK, data dead | APN/data toggle/carrier vs Wi-Fi offload confusion |
| “No location” in one app | App permission vs master location service |
| Everything weird after travel | Airplane mode leftover / roaming data off |

**Safe inventory.** Record connection type, airplane mode, hotspot on/off, sync account present (not passwords), permission state, battery/data saver — never paste IMEI/IMSI or full account secrets into public notes.

**What's next.** Mobile Devices domain review — mixed scenarios across hardware, accessories, and connectivity.`,
    },
    lightbulbMoment:
      "Paired is not capable, and sync is not backup — name the stage that failed before you reset the phone.",
    keyFacts: [
      "Bluetooth: discovery → pairing → connection → profile/capability",
      "Hotspot association ≠ cellular data path is working",
      "Sync keeps data current; backup preserves recoverability — different jobs",
      "Airplane mode and battery/data savers can pause radios and sync",
      "Voice/SMS working does not prove mobile data is configured",
      "App permission can break location or mic without a hardware fault",
    ],
    guidedExample: {
      title: "Five connectivity tickets",
      steps: [
        "Wi-Fi listed but won’t connect → confirm password/portal; forget network; test another SSID; then radio hardware.",
        "BT speaker plays music but calls stay on phone earpiece → call-audio profile/OS routing, not only pairing.",
        "Laptop on phone hotspot, pages fail → phone mobile data/APN/plan; toggle airplane; check hotspot data saver.",
        "Contacts duplicate after adding work account → multi-account sync; adjust sync scopes.",
        "Maps denied location; Compass app works → per-app permission, not dead GPS chip.",
      ],
    },
    commonMistakes: [
      "Factory resetting for a disabled sync toggle",
      "Assuming Bluetooth pair guarantees headset microphone use",
      "Treating sync conflicts as storage hardware failure",
      "Leaving airplane mode on after a flight",
      "Pasting SIM ICCID/IMEI into unsecured tickets",
    ],
    examTraps: [
      "Bluetooth pairing vs profile capability",
      "Hotspot vs upstream cellular data",
      "Sync vs backup",
      "Airplane mode / metered / battery restrictions",
      "SIM/eSIM and mobile data vs voice",
    ],
    realWorldScenario:
      "A manager says hotspots are 'broken' after a carrier plan change. Phones still show the hotspot SSID and laptops associate, but cellular data was disabled on the new plan. Enabling data (or correcting APN) restores client internet — the Wi-Fi radio was never the fault.",
    whenThisFails: [
      "If MDM blocks personal hotspots, escalate to the admin — do not jailbreak or bypass",
      "If only one app fails sync, check that app’s account and permissions before network resets",
      "If eSIM activation fails after hardware swap, involve the carrier with authorized identity checks",
    ],
    teacherReflectionPrompt:
      "Walk through discovery → pairing → connection → profile for a Bluetooth headset that plays music but cannot take calls, and name the evidence you want at each stage.",
    quiz: [
      {
        id: "ap-mobile-connectivity-q1",
        prompt: "A Bluetooth device is paired but call audio never leaves the phone. Best framing?",
        choices: [
          { id: "a", text: "Pairing succeeded; call-audio profile/capability or OS routing may still be missing" },
          { id: "b", text: "Pairing always guarantees every Bluetooth feature" },
          { id: "c", text: "The digitizer is swollen" },
          { id: "d", text: "DNS replaced Bluetooth" },
        ],
        correctChoiceId: "a",
        explanation: "Paired ≠ all profiles available.",
        objectiveId: "AP1201-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-connectivity-q2",
        prompt: "Hotspot clients associate but cannot reach websites. Prime upstream check?",
        choices: [
          { id: "a", text: "Phone cellular data / plan / APN — not only the hotspot SSID" },
          { id: "b", text: "Laptop RAM generation" },
          { id: "c", text: "Toner density" },
          { id: "d", text: "Punch-down force" },
        ],
        correctChoiceId: "a",
        explanation: "Hotspot Wi-Fi can be up while cellular data is not.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-q3",
        prompt: "Synchronization differs from backup because sync typically:",
        choices: [
          { id: "a", text: "Keeps accounts current across devices; backup is a recoverable point-in-time copy" },
          { id: "b", text: "Is identical to RAID 1" },
          { id: "c", text: "Only works over NFC taps" },
          { id: "d", text: "Removes the need for passwords forever" },
        ],
        correctChoiceId: "a",
        explanation: "Do not conflate sync with backup.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-q4",
        prompt: "Calls and SMS work; mobile data does not. Likely focus?",
        choices: [
          { id: "a", text: "Data toggle, APN, plan, or carrier data path — separate from voice" },
          { id: "b", text: "Replace the display cable first" },
          { id: "c", text: "Disable all Wi-Fi worldwide" },
          { id: "d", text: "Install a passive stylus" },
        ],
        correctChoiceId: "a",
        explanation: "Voice and data can fail independently.",
        objectiveId: "AP1201-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-connectivity-q5",
        prompt: "One app lacks location; system location is on and other apps work. Suspect:",
        choices: [
          { id: "a", text: "Per-app location permission" },
          { id: "b", text: "Dead ONT" },
          { id: "c", text: "Missing PoE budget" },
          { id: "d", text: "WEP on GPS satellites" },
        ],
        correctChoiceId: "a",
        explanation: "Permissions often explain single-app location failures.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-mobile-connectivity-b1",
        prompt: "Airplane mode primarily:",
        choices: [
          { id: "a", text: "Disables most radios until re-enabled" },
          { id: "b", text: "Upgrades soldered RAM" },
          { id: "c", text: "Formats external SSDs" },
        ],
        correctChoiceId: "a",
        explanation: "Airplane mode is a radio kill switch with selective exceptions on some OS versions.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b2",
        prompt: "USB tethering shares:",
        choices: [
          { id: "a", text: "The phone’s network path over a USB cable to a host" },
          { id: "b", text: "Only Bluetooth music profiles" },
          { id: "c", text: "Toner status" },
        ],
        correctChoiceId: "a",
        explanation: "USB tethering is a tether mode alongside Wi-Fi/BT hotspots.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b3",
        prompt: "Metered connection / Low Power Mode may:",
        choices: [
          { id: "a", text: "Pause or delay cloud sync and large updates" },
          { id: "b", text: "Force WPA3 Enterprise on Bluetooth" },
          { id: "c", text: "Replace the digitizer" },
        ],
        correctChoiceId: "a",
        explanation: "Battery and data policies affect sync behavior.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b4",
        prompt: "eSIM activation context matters when:",
        choices: [
          { id: "a", text: "Provisioning cellular identity without a physical SIM card" },
          { id: "b", text: "Crimping RJ45" },
          { id: "c", text: "Setting DDR generation" },
        ],
        correctChoiceId: "a",
        explanation: "eSIM is carrier profile provisioning.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b5",
        prompt: "VPN at intro technician level:",
        choices: [
          { id: "a", text: "Provides an encrypted tunnel; misconfig can break apps while Wi-Fi still associates" },
          { id: "b", text: "Replaces the need for any passwords" },
          { id: "c", text: "Is identical to NFC payments" },
        ],
        correctChoiceId: "a",
        explanation: "VPN is a path overlay — intro depth only.",
        objectiveId: "AP1201-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-connectivity-b6",
        prompt: "MDM may explain why:",
        choices: [
          { id: "a", text: "Hotspot or personal accounts are blocked on a work phone" },
          { id: "b", text: "Lithium batteries become alkaline" },
          { id: "c", text: "Hinges self-repair" },
        ],
        correctChoiceId: "a",
        explanation: "Policy can override user wishes — escalate appropriately.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b7",
        prompt: "NFC is best described as:",
        choices: [
          { id: "a", text: "Very short-range tap communication" },
          { id: "b", text: "A WAN fiber handoff" },
          { id: "c", text: "A type of SODIMM" },
        ],
        correctChoiceId: "a",
        explanation: "NFC is centimeter-scale.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-connectivity-b8",
        prompt: "A phone reaches websites on cellular but not Wi-Fi. What does that comparison suggest?",
        choices: [
          { id: "a", text: "Focus on the Wi-Fi network, profile, addressing, DNS, captive portal, or policy path" },
          { id: "b", text: "The phone has no working network hardware" },
          { id: "c", text: "Factory reset before checking the network" },
        ],
        correctChoiceId: "a",
        explanation: "A cellular-versus-Wi-Fi comparison narrows the failure to the Wi-Fi-specific path.",
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-mobile-connectivity-f1",
        front: "Bluetooth stages?",
        back: "Discovery → pairing → connection → profile/capability",
      },
      {
        id: "ap-mobile-connectivity-f2",
        front: "Hotspot up, no internet?",
        back: "Check cellular data/plan/APN upstream",
      },
      {
        id: "ap-mobile-connectivity-f3",
        front: "Sync vs backup?",
        back: "Sync = keep current · backup = recoverable copy",
      },
      {
        id: "ap-mobile-connectivity-f4",
        front: "Voice OK, data dead?",
        back: "Data toggle/APN/plan — separate from voice",
      },
      {
        id: "ap-mobile-connectivity-f5",
        front: "One app no GPS?",
        back: "Check that app’s location permission first",
      },
      {
        id: "ap-mobile-connectivity-f6",
        front: "Airplane mode leftover?",
        back: "Radios stay down until you turn it off / re-enable",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-connectivity-sheet",
        title: "Mobile connectivity inventory & tickets",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Read-only inventory on a phone/tablet/laptop you own (do NOT record passwords, IMEI, or full account emails if sensitive — use yes/no):
Wi-Fi connected? Bluetooth on? Airplane mode? Hotspot available/on? Any work account sync present? Battery saver / metered restrictions on?

Part B — For each fictional ticket: layer · first check · expected evidence · next step · escalate Y/N
1) Sees corporate Wi-Fi, won’t join after password change.
2) BT keyboard pairs; keys don’t type in apps.
3) Hotspot clients connect; no internet.
4) Work mail updates on laptop only; phone stale.
5) Contacts duplicated after adding a second account.
6) Maps location denied; weather app location works.

Stay authorized/local; no public scanning.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete Part A with yes/no inventory (no secrets)",
          "Complete all six Part B ticket chains",
        ],
        relatedTopicIds: [
          "ap-mobile-connectivity",
          "ap-mobile-accessories",
          "ap-wireless-tech",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-mobile-domain-review",
    name: "Mobile Devices Domain Review",
    prerequisites: ["ap-mobile-connectivity"],
    objectives: ["AP1201-1.1", "AP1201-1.2", "AP1201-1.3"],
    lesson: {
      title: "Integrate Core 1 Mobile Devices",
      content: `This checkpoint ties Mobile Devices together. Practice **applied isolation** across hardware FRUs, accessory compatibility, and connectivity/sync — not vocabulary drills.

**Path you completed.**
1. **Mobile hardware** — components, replaceability, display/charge/battery layers, safety, escalate vs FRU.
2. **Accessories** — docks/hubs/styluses/chargers; fit ≠ capability; power/protocol/display checks.
3. **Connectivity** — Wi-Fi/BT/NFC/cellular/hotspot; pairing vs profiles; sync ≠ backup; permissions and policies.

**How to use missed questions.** Each item is tagged with an objective. If you miss it, return to:

${Object.entries(AP_MOBILE_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Habits to keep.** Prove the layer. Respect lithium-battery and sealed-device limits. Match accessories to host capability. Name Bluetooth stage and sync vs backup clearly. Do not paste device identifiers or secrets into public notes.

**Looking ahead.** Next on the locked path: Core 1 Networking, then Virtualization & Cloud and Hardware/Network Troubleshooting. Full A+ track stays planned until Core 2 lands.`,
    },
    lightbulbMoment:
      "Mobile tickets yield when you name the layer — FRU, accessory capability, or radio/account/sync — before you reset or replace.",
    keyFacts: [
      "Lid-flex flicker → cable/hinge path before panel blame",
      "Swollen battery → stop charge/use; never puncture or heat",
      "USB-C fit ≠ PD/video/Thunderbolt capability",
      "Active stylus needs matching digitizer support",
      "Bluetooth paired ≠ call-audio or HID capability guaranteed",
      "Hotspot up ≠ cellular data path working; sync ≠ backup",
    ],
    guidedExample: {
      title: "Mixed mobile triage",
      steps: [
        "Flicker at lid angles → hardware cable/hinge (1.1).",
        "Dock no video on charge-only USB-C port → accessory/port capability (1.2).",
        "Headset music OK, calls on earpiece → BT profile (1.3).",
        "Hotspot clients starved → cellular data upstream (1.3).",
        "Swollen phone → safety stop, not DIY press (1.1).",
      ],
    },
    commonMistakes: [
      "Opening sealed phones without authorization",
      "Buying docks by connector shape alone",
      "Factory reset for a sync toggle or app permission",
      "Charging damaged batteries",
      "Confusing backup with cloud sync",
    ],
    examTraps: [
      "FRU vs soldered/escalation",
      "Digitizer vs panel",
      "PD/dock/display capability",
      "Pairing vs profile",
      "Hotspot vs mobile data; sync vs backup",
    ],
    realWorldScenario:
      "One shift: lid flicker, a 'broken' USB-C dock on the wrong port, and a hotspot with data disabled. Three objectives, one habit — isolate before you replace.",
    whenThisFails: [
      "If review misses cluster on one objective, loop that topic’s lab before Networking",
      "If battery safety items are missed, re-read hardware safety before any hands-on",
    ],
    teacherReflectionPrompt:
      "List the three Mobile topics in order and one proving check you would run for a vague 'my phone/laptop won’t work' ticket in each.",
    quiz: [
      {
        id: "ap-mobile-domain-review-q1",
        prompt: "Lid-angle-only display flicker most nearly implicates:",
        choices: [
          { id: "a", text: "Display cable / hinge path" },
          { id: "b", text: "DNS root failure" },
          { id: "c", text: "Passive stylus protocol" },
          { id: "d", text: "UPnP on the ONT" },
        ],
        correctChoiceId: "a",
        explanation: "Hardware isolation." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q2",
        prompt: "Visibly swollen phone battery — first action?",
        choices: [
          { id: "a", text: "Stop charging/using and escalate safely" },
          { id: "b", text: "Puncture to relieve pressure" },
          { id: "c", text: "Microwave briefly" },
          { id: "d", text: "Bend flat into the case" },
        ],
        correctChoiceId: "a",
        explanation: "Battery safety." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q3",
        prompt: "USB-C dock charges but will not drive an external display. Compatibility lesson?",
        choices: [
          { id: "a", text: "Port/cable may lack DP Alt Mode/Thunderbolt — fit ≠ video capability" },
          { id: "b", text: "All USB-C ports are identical forever" },
          { id: "c", text: "Displays only use WEP" },
          { id: "d", text: "Docks replace GPUs with toner" },
        ],
        correctChoiceId: "a",
        explanation: "Accessory capability." + reviewHint("AP1201-1.2"),
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-domain-review-q4",
        prompt: "Pressure-sensitive pen on a tablet usually requires:",
        choices: [
          { id: "a", text: "An active stylus matched to the digitizer protocol" },
          { id: "b", text: "Any capacitive grocery stylus with identical results" },
          { id: "c", text: "A PoE injector" },
          { id: "d", text: "An ONT" },
        ],
        correctChoiceId: "a",
        explanation: "Active vs passive stylus." + reviewHint("AP1201-1.2"),
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q5",
        prompt: "Bluetooth paired but headset mic unavailable. Best model?",
        choices: [
          { id: "a", text: "Pairing ≠ profile/capability or OS permission success" },
          { id: "b", text: "Pairing always enables every feature" },
          { id: "c", text: "Mic failure means swollen battery always" },
          { id: "d", text: "Disable airplane mode permanently worldwide" },
        ],
        correctChoiceId: "a",
        explanation: "Connectivity profile stages." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-domain-review-q6",
        prompt: "Hotspot SSID up; clients have no internet. Check first:",
        choices: [
          { id: "a", text: "Phone cellular data / plan / APN path" },
          { id: "b", text: "Laptop SODIMM generation only" },
          { id: "c", text: "Printer fuser" },
          { id: "d", text: "RAID stripe size" },
        ],
        correctChoiceId: "a",
        explanation: "Tether upstream." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q7",
        prompt: "Sync vs backup — correct statement?",
        choices: [
          { id: "a", text: "Sync keeps data current across devices; backup is a recoverable copy" },
          { id: "b", text: "They are always identical operations" },
          { id: "c", text: "Backup only works over NFC" },
          { id: "d", text: "Sync replaces lithium cells" },
        ],
        correctChoiceId: "a",
        explanation: "Do not conflate sync and backup." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q8",
        prompt: "Image OK, touch dead after drop. Suspect:",
        choices: [
          { id: "a", text: "Digitizer / touch layer" },
          { id: "b", text: "DNS only" },
          { id: "c", text: "Missing DHCP scope on the phone" },
          { id: "d", text: "Crimper wear" },
        ],
        correctChoiceId: "a",
        explanation: "Digitizer vs panel." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-domain-review-q9",
        prompt: "Slow charge only through an unpowered hub suggests:",
        choices: [
          { id: "a", text: "Power budget limitation on the hub path" },
          { id: "b", text: "That Thunderbolt is banned globally" },
          { id: "c", text: "That eSIM became RAM" },
          { id: "d", text: "That GPS satellites use WEP" },
        ],
        correctChoiceId: "a",
        explanation: "Accessory power." + reviewHint("AP1201-1.2"),
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q10",
        prompt: "One app lacks location; others work. Likely:",
        choices: [
          { id: "a", text: "Per-app location permission" },
          { id: "b", text: "Dead motherboard always" },
          { id: "c", text: "Missing punch-down" },
          { id: "d", text: "Toner empty" },
        ],
        correctChoiceId: "a",
        explanation: "Permission isolation." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q11",
        prompt: "Before internal laptop storage replacement:",
        choices: [
          { id: "a", text: "Back up/protect user data and follow the model service guide" },
          { id: "b", text: "Heat the battery to loosen adhesive as step one always" },
          { id: "c", text: "Disable ESD precautions" },
          { id: "d", text: "Skip documentation of existing damage" },
        ],
        correctChoiceId: "a",
        explanation: "Data + procedure first." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-q12",
        prompt: "Calls work; mobile data does not. Separate:",
        choices: [
          { id: "a", text: "Data toggle/APN/plan from the voice path" },
          { id: "b", text: "The stylus from the digitizer forever" },
          { id: "c", text: "HDMI from DisplayPort chemically" },
          { id: "d", text: "The hinge from physics" },
        ],
        correctChoiceId: "a",
        explanation: "Cellular voice ≠ data." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-mobile-domain-review-b1",
        prompt: "Soldered RAM on an ultrabook means:",
        choices: [
          { id: "a", text: "Not a simple user SODIMM upgrade" },
          { id: "b", text: "Unlimited DIY upgrades always" },
          { id: "c", text: "RAM lives in the SIM tray" },
        ],
        correctChoiceId: "a",
        explanation: "Serviceability limits." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-b2",
        prompt: "After display service, Wi-Fi dies. Check:",
        choices: [
          { id: "a", text: "Antenna leads on the wireless card" },
          { id: "b", text: "Toner levels" },
          { id: "c", text: "BGP on the laptop" },
        ],
        correctChoiceId: "a",
        explanation: "Hardware reassembly." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-domain-review-b3",
        prompt: "OEM supported-dock lists matter because:",
        choices: [
          { id: "a", text: "Hosts may limit features to validated accessories" },
          { id: "b", text: "All docks are identical" },
          { id: "c", text: "Docks remove batteries" },
        ],
        correctChoiceId: "a",
        explanation: "Accessory compatibility." + reviewHint("AP1201-1.2"),
        objectiveId: "AP1201-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-b4",
        prompt: "External display stuck at low resolution — consider:",
        choices: [
          { id: "a", text: "Cable/dock bandwidth or OS display mode" },
          { id: "b", text: "Only a dead lithium cell" },
          { id: "c", text: "WEP on HDMI" },
        ],
        correctChoiceId: "a",
        explanation: "Accessory/display path." + reviewHint("AP1201-1.2"),
        objectiveId: "AP1201-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-mobile-domain-review-b5",
        prompt: "Airplane mode left on after travel often causes:",
        choices: [
          { id: "a", text: "Radios/data to stay down until disabled" },
          { id: "b", text: "Automatic soldered RAM upgrades" },
          { id: "c", text: "ONT replacement" },
        ],
        correctChoiceId: "a",
        explanation: "Connectivity basics." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-b6",
        prompt: "Duplicate contacts after adding work email usually points to:",
        choices: [
          { id: "a", text: "Multi-account sync overlap" },
          { id: "b", text: "A failed crimp" },
          { id: "c", text: "PoE brownout" },
        ],
        correctChoiceId: "a",
        explanation: "Sync configuration." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-b7",
        prompt: "MDM may block:",
        choices: [
          { id: "a", text: "Personal hotspot or unapproved accounts on work devices" },
          { id: "b", text: "The laws of gravity" },
          { id: "c", text: "USB-C physically existing" },
        ],
        correctChoiceId: "a",
        explanation: "Policy escalation." + reviewHint("AP1201-1.3"),
        objectiveId: "AP1201-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-mobile-domain-review-b8",
        prompt: "Public practice rule for mobile labs:",
        choices: [
          { id: "a", text: "No disassembly mandates; no secrets in tickets; authorized devices only" },
          { id: "b", text: "Always puncture training batteries" },
          { id: "c", text: "Scan the public internet for pairing codes" },
        ],
        correctChoiceId: "a",
        explanation: "Safety and privacy across the domain." + reviewHint("AP1201-1.1"),
        objectiveId: "AP1201-1.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-mobile-domain-review-f1",
        front: "Mobile path order?",
        back: "Hardware → Accessories → Connectivity → Review",
      },
      {
        id: "ap-mobile-domain-review-f2",
        front: "Missed 1.x objective?",
        back: "Return to the mapped ap-mobile-* topic",
      },
      {
        id: "ap-mobile-domain-review-f3",
        front: "Fit ≠ capability?",
        back: "Connector shape alone does not guarantee PD/video/protocol",
      },
      {
        id: "ap-mobile-domain-review-f4",
        front: "BT stages?",
        back: "Discover → pair → connect → profile/capability",
      },
      {
        id: "ap-mobile-domain-review-f5",
        front: "Sync vs backup?",
        back: "Current across devices vs recoverable copy",
      },
      {
        id: "ap-mobile-domain-review-f6",
        front: "Swollen battery?",
        back: "Stop use/charge — escalate — never puncture/heat",
      },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-weak-area",
        title: "Mobile weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Mobile Devices Domain Review quiz. For every miss:
1) Note objectiveId (AP1201-1.1 / 1.2 / 1.3).
2) Open the mapped topic.
3) Re-do that topic’s guided example or lab.
4) Retake items for that objective.

Write a three-line plan for your weakest objective. No disassembly; no secrets in notes.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-mobile-hardware",
          "ap-mobile-accessories",
          "ap-mobile-connectivity",
          "ap-mobile-domain-review",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },
];
