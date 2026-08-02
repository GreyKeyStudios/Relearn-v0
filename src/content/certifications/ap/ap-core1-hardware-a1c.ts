import type { ExternalResource, Topic } from "../../types";
import { AP_HARDWARE_OBJECTIVE_TOPIC } from "./ap-hardware-remediation";

/**
 * A+ Core 1 Hardware — A1c (Michael 2026-08-01).
 * Printers (3.7 + 3.8) + Hardware domain integration review.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Printer labs here are scenario-based — a physical printer is not required.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_HARDWARE_OBJECTIVE_TOPIC[objectiveId];
  return topic
    ? ` If this was unclear, review topic \`${topic}\`.`
    : "";
}

export const apCore1HardwareBatch3Topics: Topic[] = [
  {
    id: "ap-printers-setup",
    name: "Printers & Multifunction Devices",
    prerequisites: ["ap-displays"],
    objectives: ["AP1201-3.7"],
    lesson: {
      title: "Deploy & Configure Printers and MFDs",
      content: `Printers turn digital documents into physical output. Multifunction devices (MFDs) combine print, scan, copy, and sometimes fax. On A+, you choose the right technology, connect it, install drivers, and configure queues so users can print reliably.

**Coming from displays:** You already isolate video cables and docks. Printing adds another chain — app → OS/spooler → driver → connection → device mechanics/consumables.

**Computer Fundamentals refresher (optional):** \`cf-meetings-print-scan\` for everyday print/scan literacy before technician deployment depth.

**What it is.** A printer renders pages. An MFD adds scan/copy (and often network sharing). Technologies differ in how they put marks on media.

**Why it exists.** Offices still need paper for signatures, labels, tickets, and compliance. Choosing the wrong printer type or a broken driver path creates constant help-desk noise.

**Major printer types.**
- **Laser** — toner and a heated fuser; fast for high volume, sharp text.
- **Inkjet** — liquid ink through nozzles; strong for color photos, can clog if idle.
- **Thermal** — heat-sensitive paper or transfer ribbon; receipts and labels; few consumables beyond media/ribbon.
- **Impact (dot matrix)** — pins strike an inked ribbon; multipart forms; noisy, durable for carbon copies.

**Laser printing process (know the job of each stage).**
1. **Processing** — the printer (or driver/RIP) builds a page image the engine can use.
2. **Charging** — the primary charge roller/corona gives the photosensitive drum a uniform charge.
3. **Exposing** — a laser (or LED array) writes the image by discharging areas of the drum.
4. **Developing** — toner is attracted to the discharged image areas on the drum.
5. **Transferring** — toner moves from the drum to the paper (transfer roller/belt).
6. **Fusing** — heat and pressure melt toner into the fiber of the page so it does not rub off.
7. **Cleaning** — leftover toner is removed from the drum so the next page starts clean.

Memorizing names without purpose fails in the field: "toner rubs off" points at **fusing**; "ghosted" leftover images often implicate **cleaning** or a worn drum; blank pages can be empty cartridge, transfer failure, or a sealed packing strip still in place.

**Inkjet operation.** Tiny nozzles spray ink. Print heads may be in the cartridge or fixed in the printer. Alignment and nozzle checks matter after moving the device. Leaving inkjets unused can dry nozzles — run maintenance cycles before assuming the whole unit is dead.

**Thermal printers.** Direct thermal darkens special paper with heat (receipts fade in heat/light). Thermal transfer uses a ribbon for longer-lasting labels. No liquid ink mess; watch paper type and print-head cleanliness.

**Impact printers.** Useful when you need multiple carbon copies at once. Tractor-fed paper and ribbon replacement are routine. Not for quiet offices.

**MFDs.** One network identity may offer print + scan-to-email/folder. Configure SMTP/scan destinations carefully; wrong scan settings look like "printer is broken" when print still works.

**Connectivity.** USB local, Ethernet/Wi-Fi network, and sometimes wireless direct. Network printers need a valid IP/DHCP reservation, correct subnet, and firewall allow rules for print protocols. Sharing a USB printer from one PC is fragile — prefer a true network print device when many users need it.

**Drivers and print queues.** Windows uses a print spooler and a queue per printer. Correct driver (manufacturer PCL/PS/universal) matters more than a random similar model. A stuck job can block the queue — cancel the job, restart the spooler service when appropriate, then reprint a test page.

**Interpretation.** If Notepad test page works but Excel does not, suspect the **application**. If no app can print but the printer web page prints a config page, suspect **OS/queue/driver**. If the config page fails, suspect **connectivity or the device itself**.`,
    },
    lightbulbMoment:
      "Print problems live in layers — prove app vs queue/driver vs cable/network vs the engine before replacing hardware.",
    keyFacts: [
      "Laser stages: processing → charging → exposing → developing → transferring → fusing → cleaning",
      "Fusing melts toner into paper; unfused toner rubs off",
      "Inkjet uses liquid nozzles; thermal uses heat; impact strikes a ribbon for multipart forms",
      "MFDs add scan/copy — configure scan paths separately from print",
      "Prefer network printers with stable addressing for multi-user offices",
      "Test pages help split application problems from device problems",
    ],
    guidedExample: {
      title: "New network laser for accounting",
      steps: [
        "Confirm volume/duty cycle fits a laser (not a photo inkjet).",
        "Connect Ethernet; set a DHCP reservation or static IP on the printer subnet.",
        "Install the vendor driver for Windows 11; add the printer by IP.",
        "Print a Windows test page, then a sample invoice from the accounting app.",
        "Document queue name, IP, and driver package in the asset notes.",
      ],
    },
    commonMistakes: [
      "Installing a look-alike driver instead of the model-specific package",
      "Calling a printer 'broken' when the job is stuck in a paused queue",
      "Putting an inkjet in a high-volume print closet",
      "Skipping the laser packing seal removal and getting blank pages",
      "Sharing one flaky USB printer across a whole floor without a plan",
    ],
    examTraps: [
      "Order and purpose of laser imaging stages",
      "Which technology fits multipart forms (impact)",
      "Toner rubs off → fuser problem",
      "USB vs network printer deployment choices",
      "Test page isolates app vs device",
    ],
    realWorldScenario:
      "Finance says invoices will not print. Word test pages work; their ERP job sits in a paused queue from a prior paper-out error. You resume the queue, clear the old job, print a test invoice, and show them how to spot a paused queue — no new printer required.",
    whenThisFails: [
      "If the printer config page will not print, stop blaming Windows — check power, toner seals, display errors, and network link lights",
      "If only one subnet cannot reach the printer, check VLAN/firewall before reinstalling drivers on every PC",
      "If scans fail but prints succeed on an MFD, inspect scan destination settings (email/SMB), not the laser engine",
    ],
    teacherReflectionPrompt:
      "Explain the laser stages in order and, for fusing and cleaning, what user-visible symptom shows that stage failed.",
    quiz: [
      {
        id: "ap-printers-setup-q1",
        prompt: "Which laser stage melts toner into the paper fibers?",
        choices: [
          { id: "a", text: "Fusing" },
          { id: "b", text: "Charging" },
          { id: "c", text: "Exposing" },
          { id: "d", text: "Processing" },
        ],
        correctChoiceId: "a",
        explanation:
          "Fusing uses heat and pressure so toner sticks. If toner rubs off, suspect the fuser path.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-q2",
        prompt: "Which printer type is best when you need carbon-copy multipart forms?",
        choices: [
          { id: "a", text: "Impact (dot matrix)" },
          { id: "b", text: "Direct thermal receipt printer only" },
          { id: "c", text: "Photo inkjet with dye inks only" },
          { id: "d", text: "Laser with no paper tray" },
        ],
        correctChoiceId: "a",
        explanation: "Impact printers strike through multipart forms; lasers/inkjets typically cannot.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
      {
        id: "ap-printers-setup-q3",
        prompt: "Correct order of the first four laser stages is:",
        choices: [
          { id: "a", text: "Processing → Charging → Exposing → Developing" },
          { id: "b", text: "Fusing → Cleaning → Charging → Exposing" },
          { id: "c", text: "Developing → Processing → Fusing → Charging" },
          { id: "d", text: "Transferring → Processing → Charging → Exposing" },
        ],
        correctChoiceId: "a",
        explanation:
          "Build the image data, charge the drum, expose the image, then develop with toner before transfer/fuse/clean.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
      {
        id: "ap-printers-setup-q4",
        prompt: "A Windows test page prints, but one application always fails. Where should you look first?",
        choices: [
          { id: "a", text: "The application print settings / that app's output path" },
          { id: "b", text: "Replace the fuser immediately" },
          { id: "c", text: "Open the PSU" },
          { id: "d", text: "Change the CPU socket" },
        ],
        correctChoiceId: "a",
        explanation:
          "A successful OS test page largely clears queue/device basics — focus on the failing app next.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
      {
        id: "ap-printers-setup-q5",
        prompt: "An MFD prints fine but scan-to-email fails. What is the most likely layer?",
        choices: [
          { id: "a", text: "Scan destination / SMTP or folder configuration" },
          { id: "b", text: "The laser fuser temperature exclusively" },
          { id: "c", text: "SODIMM seating" },
          { id: "d", text: "DisplayPort version" },
        ],
        correctChoiceId: "a",
        explanation: "Print success means the engine works; scan uses separate destination settings.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-printers-setup-b1",
        prompt: "Charging in a laser printer does what?",
        choices: [
          { id: "a", text: "Applies a uniform charge to the photosensitive drum" },
          { id: "b", text: "Melts toner into paper" },
          { id: "c", text: "Cuts sheets to size" },
        ],
        correctChoiceId: "a",
        explanation: "Charging prepares the drum before exposure.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-b2",
        prompt: "Exposing (laser/LED) purpose:",
        choices: [
          { id: "a", text: "Writes the latent image by discharging drum areas" },
          { id: "b", text: "Cleans the fuser rollers with alcohol always" },
          { id: "c", text: "Assigns a DHCP address" },
        ],
        correctChoiceId: "a",
        explanation: "Exposure creates the electrostatic image pattern.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-b3",
        prompt: "Developing stage adds:",
        choices: [
          { id: "a", text: "Toner to the latent image on the drum" },
          { id: "b", text: "Heat to melt toner" },
          { id: "c", text: "Ethernet PoE" },
        ],
        correctChoiceId: "a",
        explanation: "Toner particles form the visible image on the drum before transfer.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-b4",
        prompt: "Transferring moves toner:",
        choices: [
          { id: "a", text: "From the drum to the paper" },
          { id: "b", text: "From the PSU to the CPU" },
          { id: "c", text: "From RAM to SSD" },
        ],
        correctChoiceId: "a",
        explanation: "Transfer places toner on the page before fusing.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-b5",
        prompt: "Cleaning stage purpose:",
        choices: [
          { id: "a", text: "Remove residual toner from the drum between pages" },
          { id: "b", text: "Format the print server" },
          { id: "c", text: "Charge the paper tray magnetically forever" },
        ],
        correctChoiceId: "a",
        explanation: "Cleaning prevents ghosting/contamination on later pages.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
      {
        id: "ap-printers-setup-b6",
        prompt: "Thermal printers are common for:",
        choices: [
          { id: "a", text: "Receipts and labels" },
          { id: "b", text: "CPU cooling" },
          { id: "c", text: "RAID controllers" },
        ],
        correctChoiceId: "a",
        explanation: "Point-of-sale and labeling workflows use thermal tech heavily.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-printers-setup-b7",
        prompt: "A paused Windows print queue can cause:",
        choices: [
          { id: "a", text: "Jobs to sit without printing even if the printer is healthy" },
          { id: "b", text: "Automatic DDR upgrades" },
          { id: "c", text: "GPU lane renegotiation" },
        ],
        correctChoiceId: "a",
        explanation: "Queue state is an OS-layer failure mode.",
        objectiveId: "AP1201-3.7",
        difficulty: "medium",
      },
      {
        id: "ap-printers-setup-b8",
        prompt: "After deploying a shared multifunction printer, what best verifies the installation?",
        choices: [
          { id: "a", text: "Print and scan through the intended user path, confirm settings/permissions, and document the device" },
          { id: "b", text: "Confirm only that the power light is on" },
          { id: "c", text: "Install an unrelated network protocol" },
        ],
        correctChoiceId: "a",
        explanation: "Deployment is complete when required print/scan workflows, access, settings, and records are verified.",
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-printers-setup-f1",
        front: "Laser stage order (short)?",
        back: "Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning",
      },
      {
        id: "ap-printers-setup-f2",
        front: "Toner rubs off — which stage?",
        back: "Fusing (heat/pressure) failed or fuser worn",
      },
      {
        id: "ap-printers-setup-f3",
        front: "Multipart carbon forms need?",
        back: "Impact (dot matrix) printer",
      },
      {
        id: "ap-printers-setup-f4",
        front: "OS test page works, one app fails?",
        back: "Investigate the application layer first",
      },
      {
        id: "ap-printers-setup-f5",
        front: "MFD scan fails, print OK?",
        back: "Check scan destination / SMTP / folder settings",
      },
      {
        id: "ap-printers-setup-f6",
        front: "Network printer needs?",
        back: "Reachable IP + correct driver + healthy queue",
      },
    ],
    assignments: [
      {
        id: "ap-lab-printer-deploy-plan",
        title: "Printer deployment checklist (scenario)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions:
          "Scenario: Add a networked laser for five users. Write a short plan covering: (1) why laser vs inkjet, (2) IP/reservation, (3) driver source, (4) test page proof, (5) what you document. No physical printer required. Optional CF refresher: cf-meetings-print-scan.",
        estimatedMinutes: 12,
        completionCriteria: [
          "Justify laser for the scenario",
          "List IP + driver + test-page steps",
          "List two fields you would document for assets",
        ],
        relatedTopicIds: ["ap-printers-setup"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-printer-maintenance",
    name: "Printer Maintenance & Troubleshooting",
    prerequisites: ["ap-printers-setup"],
    objectives: ["AP1201-3.8"],
    lesson: {
      title: "Maintain Print Technologies & Isolate Failures",
      content: `Maintenance keeps printers reliable; structured troubleshooting finds which layer failed. This topic builds on deploy/configure skills — you already know laser stages and queues; now you interpret symptoms and take safe actions.

**What it is.** Consumables (toner, ink, drums, fusers, rollers, ribbons, specialty paper) wear out. Maintenance kits replace life-limited parts. Troubleshooting decides whether the fault is app, OS/queue, driver, connectivity, configuration, or mechanical/consumable.

**Why it exists.** Blind part-swapping wastes money. A jammed roller or empty toner looks like a "network outage" to users.

**Components to recognize.** Pickup rollers, separation pads, transfer rollers, fuser assembly, toner cartridge/drum, waste toner, print heads (inkjet), platens/ribbons (impact), paper trays/sensors.

**Consumables & maintenance.** Replace toner/ink before quality collapses; shake laser cartridges only if the vendor allows. Clean paper path of scraps. Replace maintenance kits at page-count thresholds. Store paper dry and flat. Recycle toner per site policy — do not dump powder into trash casually.

**Safety.**
- Fusers run hot — allow cool-down before touching.
- Avoid high-voltage areas inside lasers; do not bypass interlocks.
- Follow SDS guidance for toner/ink; avoid inhaling toner dust; clean spills with approved methods (not household vacuums that aerosolize toner).
- Disconnect power before approved physical inspection.
- Escalate sealed-unit or high-voltage repairs beyond your authorization.

**Symptom reasoning (not a lookup table).**

| Symptom | Suggests | Inspect first | Distinguishing evidence | Safe action |
|---------|----------|---------------|-------------------------|-------------|
| Blank pages | No toner transferred/developed, or packaging seal | Toner level / seal / transfer | Config page blank too? | Remove seal, replace cartridge, then engine path |
| Faded output | Low toner/ink, economy mode, density | Consumable + print settings | Improves after new cartridge? | Replace consumable; check density/eco mode |
| Repeating marks | Drum/roller defect at fixed interval | Measure mark spacing vs drum circumference | Same mark every page at interval | Replace drum/kit per manual |
| Toner not fused / rubs off | Fuser heat/pressure | Fuser life, media type | Toner wipes off with finger | Correct media; replace fuser when cool |
| Paper jams | Path obstruction, worn rollers, wrong media | Jam location diagram | Jam always at same roller | Clear gently; replace rollers; correct paper |
| Multi-sheet feed | Worn separation pad / humid paper | Separation pad + paper storage | Fan paper; humidity history | Replace pad; use fresh dry paper |
| Wrong colors / missing color | Empty color, clogged inkjet, color calibration | Per-color levels / nozzle check | Nozzle check pattern gaps | Replace/clean; calibrate |
| Streaks/lines | Dirty mirrors/heads, damaged drum | Vertical vs horizontal pattern | Laser vs inkjet path | Clean per manual; replace drum/head |
| Garbled print | Driver/language mismatch, bad cable | Driver type + cable/network | Other PCs OK? | Correct driver; test cable/port |
| Stuck in queue | Spooler/job state | Queue status | Paused/error jobs listed | Cancel jobs; restart spooler |
| Offline | Connectivity/port | Ping/web UI / USB link | Device UI reachable? | Fix link/IP; recreate port |
| Network unavailable | IP/DNS/firewall/VLAN | From user subnet to printer IP | Other VLANs work? | Fix addressing/firewall |
| Wrong size/orientation | Tray/app settings | Tray guides + app page setup | Test page size OK? | Align tray; fix app settings |
| Slow printing | Resolution/driver/network/processing | Draft mode vs high quality; job size | Local USB faster than network? | Lower quality if OK; check NIC/duplex |

**Layer model.** App → OS/queue → driver → connectivity → device config → mechanical/consumable. Escalate inward only after outer layers pass.

**Next after printers:** The Hardware domain review mixes cables through printers so you practice choosing the right subsystem under pressure — preparation for later Core 1 hardware troubleshooting domains.`,
    },
    lightbulbMoment:
      "Name the layer first — app, queue, driver, link, config, or mechanics — then pick the part.",
    keyFacts: [
      "Maintenance kits and rollers are life items — page counts matter",
      "Hot fuser: cool before service; never bypass safety interlocks",
      "Repeating marks often map to drum/roller circumference",
      "Unfused toner points to fuser or unsupported media",
      "Queue offline/stuck is an OS-layer issue until the device UI fails too",
      "Toner cleanup follows SDS — avoid casual vacuuming of toner",
    ],
    guidedExample: {
      title: "Ticket: 'Printer prints ghost logos'",
      steps: [
        "Print a config/test page from the printer panel (bypasses user PC).",
        "Ghost appears on config page → device-side, not the ERP app.",
        "Measure repeat interval; matches drum circumference → imaging unit/drum path.",
        "Check page count vs maintenance kit; replace drum/kit per manual after cool-down.",
        "Retest; document consumable life for the next cycle.",
      ],
    },
    commonMistakes: [
      "Replacing the whole printer for a paused queue",
      "Touching a hot fuser immediately after a jam",
      "Using compressed air to blow toner into the room",
      "Ignoring media type settings that prevent proper fusing",
      "Assuming every streak means 'buy more ink' on a laser",
    ],
    examTraps: [
      "Symptom → component (fuser, drum, rollers, separation pad)",
      "Safety around fusers and toner",
      "Queue vs device isolation with panel test pages",
      "Impact of humidity on multi-feed",
      "Driver mismatch garbled output",
    ],
    realWorldScenario:
      "Warehouse labels smear when stacked. You confirm thermal-transfer ribbon was replaced with direct-thermal paper in a transfer printer. After loading the correct media/ribbon pair and cleaning the head per the manual, labels smudge-test clean — configuration/consumable mismatch, not a 'bad printer.'",
    whenThisFails: [
      "If panel test pages also fail with hardware errors, escalate to vendor maintenance — do not defeat interlocks",
      "If multiple printers fail from one PC only, focus on that PC's spooler/drivers/firewall",
      "If toner spilled heavily, follow SDS and facilities guidance before returning the device to users",
    ],
    teacherReflectionPrompt:
      "Pick three symptoms (blank page, unfused toner, stuck queue) and narrate layer-first isolation for each.",
    quiz: [
      {
        id: "ap-printer-maintenance-q1",
        prompt: "Toner rubs off onto your finger after printing. Which component/process should you suspect first?",
        choices: [
          { id: "a", text: "Fuser (fusing stage) or unsupported media for the fuser temperature" },
          { id: "b", text: "The Ethernet patch panel exclusively" },
          { id: "c", text: "SODIMM channel population" },
          { id: "d", text: "Display scaling in Windows" },
        ],
        correctChoiceId: "a",
        explanation:
          "Unfused toner means heat/pressure did not set the image — fuser or media settings.",
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-printer-maintenance-q2",
        prompt: "Multiple sheets feed together frequently. A common mechanical cause is:",
        choices: [
          { id: "a", text: "Worn separation pad and/or humid wrinkled paper" },
          { id: "b", text: "Incorrect CPU socket" },
          { id: "c", text: "RAID 0 stripe size" },
          { id: "d", text: "Missing DisplayPort cable" },
        ],
        correctChoiceId: "a",
        explanation: "Separation pads and paper condition control single-sheet feeding.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-q3",
        prompt: "A panel config page looks perfect, but all PC jobs stay 'Error - Printing.' Where is the fault likely?",
        choices: [
          { id: "a", text: "PC/OS queue, driver, or connectivity from that host — not the print engine" },
          { id: "b", text: "The drum is always destroyed" },
          { id: "c", text: "The PSU 24-pin is unplugged from the printer" },
          { id: "d", text: "The monitor refresh rate" },
        ],
        correctChoiceId: "a",
        explanation:
          "Device-side success isolates the problem to the host path (queue/driver/network).",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-q4",
        prompt: "Before inspecting a laser fuser area after a jam, you should:",
        choices: [
          { id: "a", text: "Allow hot components to cool and follow safety/interlock guidance" },
          { id: "b", text: "Bypass all covers with tape to save time" },
          { id: "c", text: "Open the PSU first" },
          { id: "d", text: "Shake toner vigorously over the carpet" },
        ],
        correctChoiceId: "a",
        explanation: "Fusers cause burns; interlocks exist for a reason.",
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-printer-maintenance-q5",
        prompt: "Repeating marks at a fixed interval on every page most often implicate:",
        choices: [
          { id: "a", text: "A damaged drum or roller whose circumference matches the interval" },
          { id: "b", text: "DNS TTL exclusively" },
          { id: "c", text: "UEFI secure boot" },
          { id: "d", text: "Cat6 vs Cat5e coloring" },
        ],
        correctChoiceId: "a",
        explanation: "Periodic defects track rotating component circumference.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-printer-maintenance-b1",
        prompt: "Garbled nonsense characters often point to:",
        choices: [
          { id: "a", text: "Wrong driver / page description language mismatch" },
          { id: "b", text: "A cooler lacking thermal paste on the printer" },
          { id: "c", text: "RAID 1 rebuild" },
        ],
        correctChoiceId: "a",
        explanation: "Drivers must match the printer language expectations.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-b2",
        prompt: "Printer shows Offline while its web UI loads from your PC:",
        choices: [
          { id: "a", text: "Recreate/check the local queue/port — device is reachable" },
          { id: "b", text: "Replace the drum immediately" },
          { id: "c", text: "Upgrade the wall to 240 V" },
        ],
        correctChoiceId: "a",
        explanation: "Reachable UI means connectivity works; fix the Windows port/queue.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-b3",
        prompt: "Toner spill cleanup should:",
        choices: [
          { id: "a", text: "Follow SDS / approved methods — avoid ordinary vacuums that aerosolize toner" },
          { id: "b", text: "Use a household vacuum on full blast always" },
          { id: "c", text: "Be ignored" },
        ],
        correctChoiceId: "a",
        explanation: "Toner handling is an environmental/safety procedure.",
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-printer-maintenance-b4",
        prompt: "Vertical black line down every laser page may indicate:",
        choices: [
          { id: "a", text: "Scratch on drum or dirty charge/transfer path — inspect imaging unit" },
          { id: "b", text: "Missing CPU cooler" },
          { id: "c", text: "Wrong HDMI cable" },
        ],
        correctChoiceId: "a",
        explanation: "Persistent geometry defects implicate rotating imaging parts.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-b5",
        prompt: "Slow printing of huge color PDFs over Wi-Fi — useful comparison:",
        choices: [
          { id: "a", text: "Try a smaller test job or wired path to see if network/processing is the bottleneck" },
          { id: "b", text: "Replace RAM with SODIMM in the printer tray" },
          { id: "c", text: "Disable the fuser permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Controlled comparisons isolate network vs render cost.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-printer-maintenance-b6",
        prompt: "Wrong paper size errors after a tray refill:",
        choices: [
          { id: "a", text: "Check tray guides and the app's paper size setting" },
          { id: "b", text: "Re-seat the GPU" },
          { id: "c", text: "Clear CMOS" },
        ],
        correctChoiceId: "a",
        explanation: "Size mismatches are configuration/media path issues.",
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-printer-maintenance-b7",
        prompt: "Escalate rather than DIY when:",
        choices: [
          { id: "a", text: "Repair requires defeating interlocks or high-voltage service beyond your scope" },
          { id: "b", text: "A queue is paused" },
          { id: "c", text: "Paper orientation is landscape" },
        ],
        correctChoiceId: "a",
        explanation: "Safety and authorization boundaries matter.",
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-printer-maintenance-b8",
        prompt: "Blank pages with a full toner gauge — check:",
        choices: [
          { id: "a", text: "Shipping seal, transfer path, and whether panel test pages are also blank" },
          { id: "b", text: "Only the user's desktop wallpaper" },
          { id: "c", text: "ECC vs non-ECC" },
        ],
        correctChoiceId: "a",
        explanation: "Seals and transfer failures produce blanks even with 'full' toner.",
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-printer-maintenance-f1",
        front: "Unfused toner?",
        back: "Fuser/media issue — toner rubs off",
      },
      {
        id: "ap-printer-maintenance-f2",
        front: "Multi-sheet feed?",
        back: "Separation pad and/or paper condition",
      },
      {
        id: "ap-printer-maintenance-f3",
        front: "Panel test OK, PC jobs fail?",
        back: "Host queue/driver/connectivity layer",
      },
      {
        id: "ap-printer-maintenance-f4",
        front: "Repeating marks?",
        back: "Drum/roller circumference defect",
      },
      {
        id: "ap-printer-maintenance-f5",
        front: "Fuser safety?",
        back: "Let it cool; never bypass interlocks",
      },
      {
        id: "ap-printer-maintenance-f6",
        front: "Print isolation layers?",
        back: "App → queue → driver → link → config → mechanics",
      },
    ],
    assignments: [
      {
        id: "ap-lab-printer-ticket-tree",
        title: "Printer ticket — layer isolation worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Work this fictional ticket (no printer required):

Ticket: "HR cannot print offer letters. Printer shows Online. Other teams print fine."

Complete a worksheet with:
1) Two questions you ask HR to classify app vs all-apps.
2) One test that proves OS/queue health.
3) One test that proves connectivity to the device.
4) What evidence would push you to mechanical/consumable next.
5) One escalation you would NOT attempt alone (safety).

Distinguish explicitly: application · OS/queue · driver · connectivity · configuration · mechanical/consumable.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Classify the ticket with at least three layers ruled in/out",
          "List evidence for each step",
          "Name one unsafe action you will not take",
        ],
        relatedTopicIds: ["ap-printer-maintenance", "ap-printers-setup"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-hardware-domain-review",
    name: "Hardware Domain Review",
    prerequisites: ["ap-printer-maintenance"],
    objectives: [
      "AP1201-3.1",
      "AP1201-3.2",
      "AP1201-3.3",
      "AP1201-3.4",
      "AP1201-3.5",
      "AP1201-3.6",
      "AP1201-3.7",
      "AP1201-3.8",
    ],
    lesson: {
      title: "Integrate Core 1 Hardware",
      content: `This checkpoint ties the Hardware path together. You are not learning a new subsystem — you are practicing selection, compatibility, isolation, and safety across everything you already studied.

**Path you completed.**
1. **Cables & connectors** — fit vs capability; Ethernet, video, USB/Thunderbolt, SATA.
2. **RAM** — DIMM/SODIMM, DDR generation, channels, verification.
3. **Storage** — HDD/SSD/NVMe, form factors, RAID is not backup.
4. **Motherboards, CPUs & cards** — form factors, sockets, support lists, UEFI, PCIe seating.
5. **Power supplies** — wattage, connectors, modular cable rules; never open a PSU.
6. **Displays** — resolution/refresh, display-chain isolation, laptop lid vs GPU.
7. **Printers** — laser stage purposes, queues/drivers, maintenance, layered print troubleshooting.

**How to use missed questions.** Each review item is tagged with an objective. If you miss it, return to the mapped topic:

${Object.entries(AP_HARDWARE_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Technician habits to keep.** Prove with swaps and known-good parts. Read support lists before spending. Separate layers (power vs display vs storage vs print). Respect hot fusers and sealed PSUs. Escalate beyond authorization.

**Looking ahead (not in this domain).** Next on the locked path: Core 1 Mobile Devices, then Networking, Virtualization & Cloud, and Hardware & Network Troubleshooting — you are building the parts literacy those domains assume.`,
    },
    lightbulbMoment:
      "Hardware mastery is compatibility + isolation — knowing which link to test next.",
    keyFacts: [
      "USB-C fit ≠ Thunderbolt/PD/video capability",
      "DDR generation and slot maps gate RAM upgrades",
      "NVMe needs a supporting M.2/PCIe slot — not every M.2 is NVMe",
      "CPU support lists beat socket assumptions",
      "PSUs are replaceable sealed units — size and cable them correctly",
      "Display and print problems both yield to layered isolation tests",
    ],
    guidedExample: {
      title: "Mixed ticket triage",
      steps: [
        "Ticket A: no POST after CPU upgrade → support list/BIOS/cooler (motherboard/CPU topic).",
        "Ticket B: black screens on dock only → direct cable test (displays + cables).",
        "Ticket C: jobs freeze; panel test page OK → queue/driver (printers).",
        "Ticket D: random reboot under GPU load → PSU wattage/PCIe power.",
        "Write the first proving test for each before ordering parts.",
      ],
    },
    commonMistakes: [
      "Ordering parts before a known-good cable/power/POST baseline",
      "Opening a PSU or bypassing printer interlocks",
      "Treating RAID as a backup strategy",
      "Blaming a printer engine when the queue is paused",
      "Skipping BIOS requirements on CPU upgrades",
    ],
    examTraps: [
      "Connector capability vs shape",
      "RAM/CPU compatibility lists",
      "Storage interface mismatch",
      "PSU connector identification",
      "Laser fusing vs charging symptoms",
      "Safe vs unsafe technician actions",
    ],
    realWorldScenario:
      "A single afternoon brings a RAM upgrade, a dock display complaint, and a 'printer offline' call. You sequence proving tests: About/Task Manager for RAM, direct HDMI for the dock, printer web UI for offline — three different topics, one habit: isolate before you replace.",
    whenThisFails: [
      "If review scores are weak on one objective cluster, loop that topic's lesson + lab before starting Mobile Devices",
      "If safety items are missed, re-read power and printer-maintenance safety sections before any hands-on practice",
    ],
    teacherReflectionPrompt:
      "Without notes, list the seven Hardware topics in order and one proving test you would run for each under a vague 'it doesn't work' ticket.",
    quiz: [
      {
        id: "ap-hardware-domain-review-q1",
        prompt: "A Thunderbolt dock stays dark when a thin phone USB-C cable is used, but works with the OEM cable. What principle applies?",
        choices: [
          { id: "a", text: "Connector fit does not guarantee cable capability" },
          { id: "b", text: "All USB-C cables carry the same power and video" },
          { id: "c", text: "Docks ignore cables entirely" },
          { id: "d", text: "The CPU socket changed" },
        ],
        correctChoiceId: "a",
        explanation:
          "Capability vs fit is a cables lesson." + reviewHint("AP1201-3.2"),
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q2",
        prompt: "DDR5 modules will not install in a DDR4 board because:",
        choices: [
          { id: "a", text: "Generations are keyed differently and not interchangeable" },
          { id: "b", text: "Windows blocks all RAM upgrades" },
          { id: "c", text: "Ethernet categories forbid it" },
          { id: "d", text: "Laser printers consume the slots" },
        ],
        correctChoiceId: "a",
        explanation: "RAM compatibility is generation-specific." + reviewHint("AP1201-3.3"),
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q3",
        prompt: "An NVMe SSD is purchased for a laptop whose M.2 slot is SATA-only. Result?",
        choices: [
          { id: "a", text: "Likely incompatible — interface support matters" },
          { id: "b", text: "It always works at full PCIe speed anyway" },
          { id: "c", text: "It converts into DDR5" },
          { id: "d", text: "It becomes a PSU" },
        ],
        correctChoiceId: "a",
        explanation: "Storage selection requires slot/interface checks." + reviewHint("AP1201-3.4"),
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-q4",
        prompt: "Best authority for CPU ↔ motherboard compatibility?",
        choices: [
          { id: "a", text: "Motherboard CPU support list and required BIOS version" },
          { id: "b", text: "A random marketplace title" },
          { id: "c", text: "The monitor EDIDs" },
          { id: "d", text: "Toner part numbers" },
        ],
        correctChoiceId: "a",
        explanation: "Support lists beat assumptions." + reviewHint("AP1201-3.5"),
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q5",
        prompt: "A technician should not open a desktop PSU because:",
        choices: [
          { id: "a", text: "Hazardous charge can remain — replace the unit instead" },
          { id: "b", text: "It voids the HDMI specification" },
          { id: "c", text: "PSUs contain no capacitors ever" },
          { id: "d", text: "Opening increases wattage safely" },
        ],
        correctChoiceId: "a",
        explanation: "Sealed-unit safety rule." + reviewHint("AP1201-3.6"),
        objectiveId: "AP1201-3.6",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q6",
        prompt: "Laptop lid flickers when tilted; external HDMI is stable. Suspect:",
        choices: [
          { id: "a", text: "Internal display cable / lid path" },
          { id: "b", text: "DHCP scope exhaustion only" },
          { id: "c", text: "RAID 0 failure" },
          { id: "d", text: "Missing 24-pin ATX on the laptop" },
        ],
        correctChoiceId: "a",
        explanation: "Display-chain isolation." + reviewHint("AP1201-3.1"),
        objectiveId: "AP1201-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-q7",
        prompt: "Which laser stage melts toner into the page?",
        choices: [
          { id: "a", text: "Fusing" },
          { id: "b", text: "Charging" },
          { id: "c", text: "Exposing" },
          { id: "d", text: "Processing" },
        ],
        correctChoiceId: "a",
        explanation: "Fusing sets toner." + reviewHint("AP1201-3.7"),
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q8",
        prompt: "Panel test page is perfect; all PC jobs remain queued/errors. Next focus:",
        choices: [
          { id: "a", text: "OS queue, driver, or host connectivity — not the engine" },
          { id: "b", text: "Immediate fuser replacement without cool-down" },
          { id: "c", text: "CPU reseat" },
          { id: "d", text: "Buying DDR3 for a DDR5 board" },
        ],
        correctChoiceId: "a",
        explanation: "Printer layer isolation." + reviewHint("AP1201-3.8"),
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-q9",
        prompt: "GPU upgrade causes load reboots; idle is fine. Most likely:",
        choices: [
          { id: "a", text: "Inadequate PSU wattage or missing PCIe power plugs" },
          { id: "b", text: "Wrong paper orientation" },
          { id: "c", text: "Cat5e jacket color" },
          { id: "d", text: "Display scaling 125%" },
        ],
        correctChoiceId: "a",
        explanation: "Power delivery under load." + reviewHint("AP1201-3.6"),
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-q10",
        prompt: "RAID 1 provides mirroring. Why is it still not a backup?",
        choices: [
          { id: "a", text: "It does not protect against deletion, malware, or site loss by itself" },
          { id: "b", text: "RAID 1 deletes cloud accounts nightly" },
          { id: "c", text: "Mirroring disables ECC" },
          { id: "d", text: "Mirroring removes SATA power" },
        ],
        correctChoiceId: "a",
        explanation: "Storage topic: RAID ≠ backup." + reviewHint("AP1201-3.4"),
        objectiveId: "AP1201-3.4",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-q11",
        prompt: "Safe action when a laser fuser area jammed recently:",
        choices: [
          { id: "a", text: "Allow cool-down; do not bypass interlocks; escalate sealed HV repairs" },
          { id: "b", text: "Reach in immediately while powered" },
          { id: "c", text: "Open the PSU to borrow capacitors" },
          { id: "d", text: "Disable all grounding" },
        ],
        correctChoiceId: "a",
        explanation: "Printer safety + escalation." + reviewHint("AP1201-3.8"),
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-q12",
        prompt: "Clearing CMOS/UEFI settings will:",
        choices: [
          { id: "a", text: "Reset firmware defaults — not reinstall Windows" },
          { id: "b", text: "Erase the SSD automatically always" },
          { id: "c", text: "Change RJ45 pinouts" },
          { id: "d", text: "Install toner" },
        ],
        correctChoiceId: "a",
        explanation: "Motherboard firmware literacy." + reviewHint("AP1201-3.5"),
        objectiveId: "AP1201-3.5",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-hardware-domain-review-b1",
        prompt: "Plenum Ethernet cable is chosen for:",
        choices: [
          { id: "a", text: "Air-handling spaces (fire code)" },
          { id: "b", text: "Faster DDR5 speeds" },
          { id: "c", text: "Laser fusing temperature" },
        ],
        correctChoiceId: "a",
        explanation: "Cables topic." + reviewHint("AP1201-3.2"),
        objectiveId: "AP1201-3.2",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-b2",
        prompt: "Dual-channel RAM needs:",
        choices: [
          { id: "a", text: "Modules in the motherboard's paired slots" },
          { id: "b", text: "A thermal printer" },
          { id: "c", text: "RAID 0" },
        ],
        correctChoiceId: "a",
        explanation: "RAM topic." + reviewHint("AP1201-3.3"),
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-b3",
        prompt: "Win+P helps with:",
        choices: [
          { id: "a", text: "Projection modes for external displays/projectors" },
          { id: "b", text: "PSU modular cabling" },
          { id: "c", text: "Toner density" },
        ],
        correctChoiceId: "a",
        explanation: "Displays topic." + reviewHint("AP1201-3.1"),
        objectiveId: "AP1201-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-b4",
        prompt: "Impact printers are chosen for:",
        choices: [
          { id: "a", text: "Multipart carbon forms" },
          { id: "b", text: "Silent photo galleries" },
          { id: "c", text: "CPU socket adapters" },
        ],
        correctChoiceId: "a",
        explanation: "Printers setup." + reviewHint("AP1201-3.7"),
        objectiveId: "AP1201-3.7",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-b5",
        prompt: "Mixing modular PSU cables across brands is risky because:",
        choices: [
          { id: "a", text: "Pinouts may differ and can damage hardware" },
          { id: "b", text: "It improves efficiency always" },
          { id: "c", text: "It enables NVMe" },
        ],
        correctChoiceId: "a",
        explanation: "Power topic." + reviewHint("AP1201-3.6"),
        objectiveId: "AP1201-3.6",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-b6",
        prompt: "Separation pad wear causes:",
        choices: [
          { id: "a", text: "Multi-sheet feeding" },
          { id: "b", text: "DDR mismatch" },
          { id: "c", text: "UEFI password reset" },
        ],
        correctChoiceId: "a",
        explanation: "Printer maintenance." + reviewHint("AP1201-3.8"),
        objectiveId: "AP1201-3.8",
        difficulty: "medium",
      },
      {
        id: "ap-hardware-domain-review-b7",
        prompt: "Soldered laptop RAM means:",
        choices: [
          { id: "a", text: "Not user-upgradable on that model" },
          { id: "b", text: "Any DIMM fits under the keyboard" },
          { id: "c", text: "ECC is mandatory" },
        ],
        correctChoiceId: "a",
        explanation: "RAM topic." + reviewHint("AP1201-3.3"),
        objectiveId: "AP1201-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-hardware-domain-review-b8",
        prompt: "Escalate rather than DIY:",
        choices: [
          { id: "a", text: "High-voltage printer/PSU internal repairs beyond authorization" },
          { id: "b", text: "Canceling a paused print job" },
          { id: "c", text: "Reseating an HDMI cable" },
        ],
        correctChoiceId: "a",
        explanation: "Safety/escalation across power + printers." + reviewHint("AP1201-3.8"),
        objectiveId: "AP1201-3.8",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-hardware-domain-review-f1",
        front: "Hardware path order?",
        back: "Cables → RAM → Storage → MB/CPU → PSU → Displays → Printers → Review",
      },
      {
        id: "ap-hardware-domain-review-f2",
        front: "Missed objective — what next?",
        back: "Return to the mapped topic for that AP1201-3.x ID",
      },
      {
        id: "ap-hardware-domain-review-f3",
        front: "Shared isolation habit?",
        back: "Known-good swap + layer tests before part replacement",
      },
      {
        id: "ap-hardware-domain-review-f4",
        front: "Two sealed/hot hazards?",
        back: "PSU internals (don't open) and hot fusers (cool first)",
      },
      {
        id: "ap-hardware-domain-review-f5",
        front: "Compatibility mantra?",
        back: "Read the support list / interface / wattage before buying",
      },
      {
        id: "ap-hardware-domain-review-f6",
        front: "After Hardware domain?",
        back: "Keep Planned track overall; next Core 1 domain is Networking (when authorized)",
      },
    ],
    assignments: [
      {
        id: "ap-lab-hardware-weak-area",
        title: "Weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Hardware Domain Review quiz. For every miss:
1) Note the question's objectiveId (AP1201-3.x).
2) Look up the mapped topic from the lesson list.
3) Re-do that topic's guided example or lab.
4) Retake only the missed objective cluster (quiz or bank).

Write a three-line plan for your weakest objective.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-cables-connectors",
          "ap-ram",
          "ap-storage",
          "ap-mb-cpu-cards",
          "ap-power-supplies",
          "ap-displays",
          "ap-printers-setup",
          "ap-printer-maintenance",
          "ap-hardware-domain-review",
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
