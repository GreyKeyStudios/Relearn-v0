import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 Hardware & Network Troubleshooting — A5b (Michael 2026-08-01).
 * display (5.3) → mobile (5.4).
 * Stop before network / printer / domain review (A5c).
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use worksheets and fictional cases. No high-voltage projector/panel disassembly. No swollen-battery handling beyond stop/escalate. Factory resets are late, authorized actions only.",
};

const TS_PROCESS = `**Troubleshooting process (use every ticket).**
1. **Identify** the problem — symptoms, scope, recent changes, safety hazards.
2. **Establish a theory** of probable cause — list layers; pick the most likely *testable* one.
3. **Test the theory** safely — one change at a time; known-good swaps when authorized.
4. **Plan** the fix (or escalate) — parts, data risk, downtime, approval.
5. **Implement** the solution or escalate within authorization.
6. **Verify** full functionality — not only the first symptom gone.
7. **Document** findings, actions, and outcomes.

Reward yourself for the correct **next diagnostic step**, not lucky component guesses.`;

export const apCore1TroubleshootBatch2Topics: Topic[] = [
  {
    id: "ap-ts-display",
    name: "Troubleshoot Displays & Projectors",
    prerequisites: ["ap-ts-storage-raid", "ap-displays"],
    objectives: ["AP1201-5.3"],
    lesson: {
      title: "Isolate the Display Signal Chain",
      content: `A blank or bad image is rarely “the monitor is dead” by default. Reuse \`ap-displays\`, \`ap-cables-connectors\`, and dock habits from Mobile accessories. Walk the **entire chain**.

${TS_PROCESS}

**CF refreshers:** \`cf-peripherals-and-displays\`, \`cf-ports-and-connectors\`.

**Display chain (outside-in or inside-out — pick a direction and stick to it).**
\`\`\`
Application / OS → display settings & driver → graphics adapter
→ output port → cable / adapter → dock / intermediary
→ monitor, panel, or projector → power & input selection
\`\`\`

**Also separate:** no-POST / power failure (topic 5.1) from a healthy PC with a broken display path. Fans + POST codes with black screen ≠ automatically a dead panel.

**Layers.**

**Power & input.** Display powered? Correct input (HDMI1 vs DP)? Loose power brick? Projector lamp cool-down / shutter?

**Physical signal path.** Damaged cable, unsupported adapter (USB-C fit ≠ DP Alt Mode), wrong port, dock bandwidth limits, loose **internal laptop LVDS/eDP cable** (flicker with lid angle).

**Configuration.** Wrong projection mode (PC screen only), disabled display, resolution/refresh mismatch, scaling/overscan, brightness at zero, night-light extremes.

**Driver / OS.** Bad driver after update; works in BIOS/logo but fails in Windows; Safe Mode OK → driver/OS path; one app only → application.

**Graphics hardware.** Artifacting under load, GPU overheating, insufficient GPU power after upgrade, iGPU vs dGPU output confusion.

**Panel assembly.** Backlight failure (very dim image still visible with flashlight), dead pixels, burn-in/retention, digitizer vs image mismatch, cracked glass, hinge damage.

**Symptom → first theories (then test).**
| Symptom | Early isolation ideas |
|---------|------------------------|
| No image / “No signal” | Input, cable, port, PC sleep, POST vs display |
| Dim / faint content | Brightness, backlight, inverter-era gear (legacy), night mode |
| Flicker | Refresh rate, cable, lid-angle cable, driver |
| Wrong resolution / scaling | EDID/cable bandwidth, dock, OS settings |
| Artifacting under load | GPU/thermals/power before new monitor |
| External not detected | Cable/port/dock/OS detect; try direct port |
| Laptop black, external OK | Internal panel/cable/backlight — not whole GPU dead |
| Projector wrong | Input, resolution, keystone/overscan, lamp |

**Screenshot distinction (useful, not absolute).** If a captured screenshot shows the defect, suspect rendering/GPU/software. If a photo of the screen shows the defect but a screenshot looks clean, suspect the physical display chain. Use it as a clue, not courtroom proof.

**Safety.** Disconnect power before approved inspection. No high-voltage projector/CRT/panel innards. Let lamps cool. Handle cracked glass carefully. Document damage. Escalate internal panel/board/high-voltage work.

**Verify.** Correct input, stable image at needed resolution/refresh, multi-monitor arrangement if applicable, no flicker through lid range, user apps OK.

**Document.** Cable/port/dock tested, settings changed, parts replaced, remaining limitations.

**What's next.** Mobile-device troubleshooting — portable power, radios, sync, and touch layers.`,
    },
    lightbulbMoment:
      "Prove the chain — power and input, then cable/port, then settings/driver, then panel — before you order a new screen.",
    keyFacts: [
      "Visible symptom ≠ panel failure by default",
      "Laptop black + external OK points at internal panel/cable/backlight path",
      "Dim with faint content often implicates backlight/brightness, not total GPU death",
      "Dock/adapter capability can limit resolution even when the plug fits",
      "Screenshot-vs-photo clue helps separate rendering from panel path",
      "Escalate high-voltage / sealed panel work; document damage first",
    ],
    guidedExample: {
      title: "Laptop internal black; external works",
      steps: [
        "Identify: External HDMI shows Windows; lid panel black; machine otherwise responsive.",
        "Theories: brightness/projection mode; backlight; internal cable; panel; less likely whole GPU (external works).",
        "Tests: Win+P modes; brightness keys; flashlight for faint image; gently vary lid angle for flicker/cutout.",
        "Interpretation: Faint image visible → backlight/power to panel more than ‘no GPU.’ Lid-angle cutout → cable/hinge path.",
        "Plan: Authorized display-cable/panel service per model guide; backup data; document cracks.",
        "Escalate if sealed ultrabook / warranty / no parts authorization.",
        "Verify after repair: internal + external, lid travel, brightness range.",
        "Document: tests, parts, serials, cosmetic pre-damage.",
      ],
    },
    commonMistakes: [
      "Replacing a monitor when the HDMI input wasn’t selected",
      "Blaming the GPU when only the internal laptop panel fails",
      "Ignoring dock/port capability limits on dual 4K",
      "Working inside a hot projector lamp housing",
      "Skipping the POST/logo check that proves the PC is actually starting",
    ],
    examTraps: [
      "Best next check in the display chain",
      "Internal vs external isolation",
      "Backlight vs no-signal",
      "Cable/dock/adapter capability",
      "Driver/OS vs panel evidence (incl. screenshot clue)",
    ],
    realWorldScenario:
      "A designer’s ‘dead ultrawide’ shows No Signal. The PC POST LEDs are healthy. Moving the cable from a USB-C dock DP output to the GPU’s native DP brings 144 Hz back — the dock link was the weak layer, not the panel and not the GPU die.",
    whenThisFails: [
      "If there is no POST and no fans, leave display TS and return to power/POST (5.1)",
      "If the panel is cracked or under warranty, stop unauthorized teardown and use OEM channels",
      "If only one app shows corruption, capture screenshot evidence before hardware RMA",
    ],
    teacherReflectionPrompt:
      "For ‘No signal’ on a desktop monitor, list the first four safe tests in chain order and what each result implies.",
    quiz: [
      {
        id: "ap-ts-display-q1",
        prompt: "Laptop lid is black; external monitor shows Windows normally. Best early framing?",
        choices: [
          { id: "a", text: "Internal panel / cable / backlight path — not automatic total GPU failure" },
          { id: "b", text: "Immediate PSU replacement only" },
          { id: "c", text: "Format the SSD first" },
          { id: "d", text: "Disable all external ports forever" },
        ],
        correctChoiceId: "a",
        explanation:
          "Working external output isolates the fault toward the internal display path.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-q2",
        prompt: "Monitor shows ‘No Signal’ but the PC’s power/POST indicators look normal. Best first checks include:",
        choices: [
          { id: "a", text: "Input selection, cable/port, and known-good cable or display" },
          { id: "b", text: "Opening the projector ballast while hot" },
          { id: "c", text: "Replacing RAID members" },
          { id: "d", text: "Factory-resetting the phone" },
        ],
        correctChoiceId: "a",
        explanation: "Prove the physical/config signal path before condemning the GPU.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-q3",
        prompt: "Image is extremely dim but a flashlight reveals faint content. Strong theory?",
        choices: [
          { id: "a", text: "Backlight / brightness path rather than total lack of panel signal" },
          { id: "b", text: "DNS failure" },
          { id: "c", text: "Missing CMOS battery only" },
          { id: "d", text: "SaaS outage" },
        ],
        correctChoiceId: "a",
        explanation: "Faint visible content often means the panel still receives image data.",
        objectiveId: "AP1201-5.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-display-q4",
        prompt: "Dual 4K fails on a cheap USB-C hub but works on a Thunderbolt dock. Lesson?",
        choices: [
          { id: "a", text: "Intermediary device/protocol capability can limit the display chain" },
          { id: "b", text: "All USB-C docks are identical" },
          { id: "c", text: "Panels never need cables" },
          { id: "d", text: "Refresh rate is always 30 Hz" },
        ],
        correctChoiceId: "a",
        explanation: "Docks/adapters are part of the chain.",
        objectiveId: "AP1201-5.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-display-q5",
        prompt: "A photo of the monitor shows colored lines; a screenshot of the same desktop looks clean. Useful (not absolute) clue?",
        choices: [
          { id: "a", text: "Physical display chain is more suspicious than pure software framebuffer content" },
          { id: "b", text: "Proof the SSD has failed" },
          { id: "c", text: "Proof RAID is degraded" },
          { id: "d", text: "Proof the CMOS battery is swollen" },
        ],
        correctChoiceId: "a",
        explanation: "Screenshot-vs-photo is a helpful isolation clue, not infallible proof.",
        objectiveId: "AP1201-5.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-display-b1",
        prompt: "Flicker only when the laptop lid angle changes suggests:",
        choices: [
          { id: "a", text: "Internal display cable / hinge path" },
          { id: "b", text: "Only DNS" },
          { id: "c", text: "Only toner" },
        ],
        correctChoiceId: "a",
        explanation: "Lid-dependent flicker is a classic cable/hinge clue.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b2",
        prompt: "BIOS/vendor logo appears, then Windows stays black. Early theories include:",
        choices: [
          { id: "a", text: "Driver/OS display stack more than total panel death" },
          { id: "b", text: "The outlet never had power" },
          { id: "c", text: "The monitor input cannot show firmware logos ever" },
        ],
        correctChoiceId: "a",
        explanation: "Pre-OS image proves much of the hardware path can work.",
        objectiveId: "AP1201-5.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-display-b3",
        prompt: "Artifacting only under 3D load points more toward:",
        choices: [
          { id: "a", text: "GPU/thermals/power under load than a random HDMI cable first" },
          { id: "b", text: "A missing stylus tip" },
          { id: "c", text: "APIPA addressing" },
        ],
        correctChoiceId: "a",
        explanation: "Load-linked artifacting implicates graphics hardware/path.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b4",
        prompt: "Projector safety includes:",
        choices: [
          { id: "a", text: "Allow lamps/hot parts to cool; avoid high-voltage internals" },
          { id: "b", text: "Changing lamps while powered for speed" },
          { id: "c", text: "Ignoring cracked glass" },
        ],
        correctChoiceId: "a",
        explanation: "Thermal and electrical hazards are real.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b5",
        prompt: "Win+P / projection mode stuck on ‘Second screen only’ can cause:",
        choices: [
          { id: "a", text: "A ‘dead’ laptop panel while the external still works" },
          { id: "b", text: "RAID rebuilds" },
          { id: "c", text: "CMOS battery swelling" },
        ],
        correctChoiceId: "a",
        explanation: "Configuration layer — quick, reversible test.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b6",
        prompt: "Overscan / scaling issues are usually:",
        choices: [
          { id: "a", text: "Configuration on TV/projector/OS — not automatic panel RMA" },
          { id: "b", text: "Fixed only by replacing the PSU" },
          { id: "c", text: "Proof of dead pixels" },
        ],
        correctChoiceId: "a",
        explanation: "Settings before parts.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b7",
        prompt: "Verify after a cable swap for flicker:",
        choices: [
          { id: "a", text: "Stable image at the needed refresh/resolution across apps" },
          { id: "b", text: "Only that the power LED blinks" },
          { id: "c", text: "Only Disk Management" },
        ],
        correctChoiceId: "a",
        explanation: "Verify the user’s display requirements.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-display-b8",
        prompt: "A projector says 'No signal.' What is the best first isolation step?",
        choices: [
          { id: "a", text: "Verify power/input, OS display mode, and a known-good direct cable/source before replacing hardware" },
          { id: "b", text: "Rebuild the wireless network" },
          { id: "c", text: "Replace the projector lamp without testing" },
        ],
        correctChoiceId: "a",
        explanation: "Power, input selection, display mode, and a known-good signal path isolate common no-signal causes safely.",
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-display-f1",
        front: "Display chain?",
        back: "OS/driver → GPU → port → cable/dock → panel → power/input",
      },
      {
        id: "ap-ts-display-f2",
        front: "Laptop black, external OK?",
        back: "Internal panel/cable/backlight — not whole GPU by default",
      },
      {
        id: "ap-ts-display-f3",
        front: "Dim but faint image?",
        back: "Suspect backlight/brightness path",
      },
      {
        id: "ap-ts-display-f4",
        front: "Screenshot clean, photo dirty?",
        back: "Clue toward physical display chain",
      },
      {
        id: "ap-ts-display-f5",
        front: "No signal first checks?",
        back: "Input, cable, port, known-good swap",
      },
      {
        id: "ap-ts-display-f6",
        front: "Projector safety?",
        back: "Cool lamps; no high-voltage DIY",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-display-chain",
        title: "Display-chain isolation worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `For each fictional case: likely layer · first safe test · expected evidence · next action · verify · escalate Y/N

1) Desktop monitor: “No Signal”; PC fans/POST OK.
2) Dual monitors fail through a USB-C hub; single monitor on GPU port works.
3) Flicker only at 144 Hz; 60 Hz stable.
4) Laptop panel very dim; flashlight shows faint Windows.
5) Colored blocks under GPU stress; idle desktop clean.
6) Conference projector shows huge overscan / cut edges.

Optional read-only on your PC: note current resolution/refresh in Display Settings. No panel disassembly.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete all six cases with escalate decisions",
          "Include chain-layer language (not only ‘bad monitor’)",
        ],
        relatedTopicIds: ["ap-ts-display", "ap-displays", "ap-cables-connectors"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-ts-mobile",
    name: "Troubleshoot Mobile Devices",
    prerequisites: ["ap-ts-display", "ap-mobile-domain-review"],
    objectives: ["AP1201-5.4"],
    lesson: {
      title: "Diagnose Mobile Power, Radios, Apps, and Policies",
      content: `Mobile tickets mix hardware, radios, OS, apps, accounts, carriers, and MDM. Reuse \`ap-mobile-hardware\`, \`ap-mobile-accessories\`, \`ap-mobile-connectivity\` — this topic is **layered diagnosis**, not a second full Mobile course.

${TS_PROCESS}

**CF / prior A+:** connection and battery literacy from CF + Mobile first-pass; wireless habits from Networking when Wi-Fi symptoms appear.

**Layers (use as a checklist).**
1. Physical damage (crack, bent port, liquid indicators)
2. Power / battery / charger / cable / port / PD compatibility
3. Radio / signal (Wi-Fi, BT, cellular, NFC, GPS)
4. OS configuration (airplane mode, focus, updates)
5. Application configuration
6. Permissions
7. Account / synchronization (sync ≠ backup)
8. Carrier / provider service
9. Device-management policy (MDM)
10. Hardware failure

**Battery & charging safety (non-negotiable).**
Stop use/charge on **swollen** batteries. Never puncture, bend, crush, heat, or press them. Don’t use damaged chargers/cables. Slow charge may be cable/PD budget, heat throttling, background load, or aging battery — prove compatibility before board swap. Escalate sealed-battery work.

**Symptom clusters → theories.**

**Won’t power on / won’t charge / slow charge.** Outlet → brick → cable → port debris/damage → temperature hold → battery health → board. One-cable-orientation charge → port damage suspicion.

**Drains fast / overheats.** Battery usage by app; rogue sync; poor signal (radios work harder); charging while gaming; case heat.

**Frozen / crashes / slow / storage full.** Force-stop app; free storage; update OS/app; note after which install it started.

**No sound / mic / camera.** Mute switch, BT audio route, app permission, MDM camera block — not only “dead mic.”

**Touch / orientation / dim-blank display.** Restart; clean screen; remove thick protector; check auto-rotate permission/sensor; brightness; if cracked → hardware path; one-app touch fail → app layer.

**Wi-Fi / BT / cellular / hotspot.**
- Wi-Fi: signal, password/portal, saved network, airplane mode, DHCP/DNS (Networking tools habits), radio failure last.
- BT: discovery → pairing → connection → **profile/capability** (media vs call audio vs HID). Paired ≠ call audio.
- Cellular: voice vs data; SIM/eSIM; APN; plan; roaming; carrier outage vs device.
- Hotspot: clients associate but no internet → phone’s mobile data/plan/APN upstream.

**Sync / notifications / location / NFC / updates.** Account selection; sync toggles; battery optimization killing background; storage quotas; stale auth; Focus modes; per-app location permission; MDM blocks; sync ≠ backup; don’t remove accounts as unexplained step one.

**Malware / suspicious apps (objective-aligned).** Unusual battery/network use; unknown admin profiles — escalate security process; don’t pirate “cleaner” tools.

**Factory reset** is a **late**, authorized action after backup and account-recovery understanding — never routine first step.

**Escalate:** swollen battery, liquid, board-level, damaged port needing internals, sealed battery, carrier provisioning, MDM locks, data-loss risk, warranty repairs.

**Verify.** Charge path, radios used by the user, sync of the needed data types, permissions for mic/camera/location, no overheat on light use.

**Document.** Cable/charger tested, OS build, MDM yes/no, carrier steps, what was *not* reset.

**What's next (A5c).** Network troubleshooting, printer troubleshooting, and Troubleshooting domain review.`,
    },
    lightbulbMoment:
      "Name the mobile layer — power, radio, permission, account, carrier, or MDM — before you factory-reset someone’s life off the phone.",
    keyFacts: [
      "Swollen battery = stop charge/use — never puncture or heat — escalate",
      "Paired Bluetooth ≠ required profile (call audio/HID) is working",
      "Hotspot up ≠ cellular data path is working",
      "Sync ≠ backup; one data type can fail while others succeed",
      "Permissions/MDM/Focus can look like ‘broken camera/mic/GPS’",
      "Factory reset is late and authorized — after backup/account recovery plan",
    ],
    guidedExample: {
      title: "Headset pairs; calls stay on phone earpiece",
      steps: [
        "Identify: Music plays on BT speaker/headset; incoming calls ring on phone speaker.",
        "Layers: pairing succeeded → suspect call-audio profile / OS routing / permissions — not ‘BT radio dead.’",
        "Evidence: BT device details; phone call audio output setting; try another call-capable headset.",
        "Tests: Forget/re-pair; toggle phone BT audio route during call; confirm headset supports HFP-style call audio.",
        "If still fails on multiple call headsets → phone OS/radio escalation; if only one headset → accessory.",
        "Verify with a test call; document model and OS version; no factory reset required.",
      ],
    },
    commonMistakes: [
      "Factory reset for a disabled sync toggle or Focus mode",
      "Charging a swollen phone ‘overnight to see’",
      "Assuming Wi-Fi association proves internet",
      "Replacing a phone for a denied camera permission",
      "Removing a work account without warning about local data impact",
    ],
    examTraps: [
      "Best next check by layer",
      "Battery safety stops",
      "BT pairing vs profile",
      "Hotspot vs mobile data",
      "Sync vs backup; MDM/permission blocks",
    ],
    realWorldScenario:
      "A salesperson says hotspot is ‘broken’ after a plan change. Laptops still join the SSID. The phone’s mobile data toggle was off on the new SIM profile. Enabling data restores client internet — radio association was never the failure layer.",
    whenThisFails: [
      "If the battery is swollen or liquid-damaged, stop and use hazardous-device escalation paths",
      "If MDM blocks the needed setting, ticket the admin with evidence — don’t jailbreak",
      "If carrier eSIM activation fails after hardware swap, involve carrier with authorized identity checks",
    ],
    teacherReflectionPrompt:
      "For ‘won’t charge’ and ‘BT pairs but no call audio,’ write the first three safe checks for each and the escalation trigger.",
    quiz: [
      {
        id: "ap-ts-mobile-q1",
        prompt: "Phone battery is visibly swollen. Best immediate action?",
        choices: [
          { id: "a", text: "Stop charging/using and escalate safely — do not puncture, bend, or heat" },
          { id: "b", text: "Press the back glass flat and keep charging" },
          { id: "c", text: "Microwave briefly to shrink cells" },
          { id: "d", text: "Factory reset as step one" },
        ],
        correctChoiceId: "a",
        explanation: "Swollen Li-ion is a hard safety stop.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-q2",
        prompt: "Bluetooth headset pairs and plays music, but call audio stays on the phone. Best framing?",
        choices: [
          { id: "a", text: "Pairing worked; call-audio profile/routing/capability may still be failing" },
          { id: "b", text: "Pairing always guarantees every Bluetooth feature" },
          { id: "c", text: "Replace the SSD" },
          { id: "d", text: "Disable airplane mode on the router" },
        ],
        correctChoiceId: "a",
        explanation: "Discovery/pair/connect/profile are different stages.",
        objectiveId: "AP1201-5.4",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-q3",
        prompt: "Hotspot clients associate but cannot reach websites. Prime upstream check?",
        choices: [
          { id: "a", text: "Phone cellular data / plan / APN — not only the hotspot SSID" },
          { id: "b", text: "Laptop RAM generation only" },
          { id: "c", text: "Projector lamp cool-down" },
          { id: "d", text: "RAID stripe size" },
        ],
        correctChoiceId: "a",
        explanation: "Hotspot Wi-Fi can be up while cellular data is not.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-q4",
        prompt: "Camera works in one app but not another. Best early layer?",
        choices: [
          { id: "a", text: "Per-app camera permission (or MDM policy) before hardware replacement" },
          { id: "b", text: "Immediate logic-board swap" },
          { id: "c", text: "Format the boot SSD" },
          { id: "d", text: "Replace the CMOS battery" },
        ],
        correctChoiceId: "a",
        explanation: "Single-app failures often track permissions/policy.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-q5",
        prompt: "Factory reset should be treated as:",
        choices: [
          { id: "a", text: "A late, authorized action after backup and account-recovery planning" },
          { id: "b", text: "The first step for every Wi-Fi ticket" },
          { id: "c", text: "Identical to toggling airplane mode" },
          { id: "d", text: "Required before checking permissions" },
        ],
        correctChoiceId: "a",
        explanation: "Resets are destructive to local state — not routine first aid.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-mobile-b1",
        prompt: "Slow charging only through a thin USB-C cable often implicates:",
        choices: [
          { id: "a", text: "Cable/PD capability or power budget — try known-good charger/cable" },
          { id: "b", text: "DNS root failure" },
          { id: "c", text: "RAID degradation" },
        ],
        correctChoiceId: "a",
        explanation: "Compatibility before board-level blame.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-b2",
        prompt: "Voice calls work; mobile data does not. Separate:",
        choices: [
          { id: "a", text: "Data toggle / APN / plan from the voice path" },
          { id: "b", text: "The digitizer from physics" },
          { id: "c", text: "HDMI from DisplayPort chemically" },
        ],
        correctChoiceId: "a",
        explanation: "Cellular voice and data can fail independently.",
        objectiveId: "AP1201-5.4",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-b3",
        prompt: "Contacts update on a tablet but not the phone. Early checks include:",
        choices: [
          { id: "a", text: "Account selection, sync toggles, battery optimization, and storage limits" },
          { id: "b", text: "Replacing both devices’ motherboards first" },
          { id: "c", text: "Formatting the NAS" },
        ],
        correctChoiceId: "a",
        explanation: "Sync/account layers before hardware.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-b4",
        prompt: "MDM may explain why:",
        choices: [
          { id: "a", text: "Camera, hotspot, or personal accounts are blocked on a work phone" },
          { id: "b", text: "Lithium becomes alkaline" },
          { id: "c", text: "Hinges self-repair" },
        ],
        correctChoiceId: "a",
        explanation: "Policy is a real troubleshooting layer — escalate to admins.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-b5",
        prompt: "Touch fails in one app only; other apps fine. Suspect:",
        choices: [
          { id: "a", text: "Application layer before full digitizer replacement" },
          { id: "b", text: "Dead cellular modem always" },
          { id: "c", text: "Missing SATA power" },
        ],
        correctChoiceId: "a",
        explanation: "Scope the failure to app vs system-wide touch.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-b6",
        prompt: "Overheating while charging and gaming — useful guidance includes:",
        choices: [
          { id: "a", text: "Remove case if needed, reduce load, verify cable/charger, watch for thermal charge limits" },
          { id: "b", text: "Seal the phone in a warm oven" },
          { id: "c", text: "Disable all backups permanently as step one" },
        ],
        correctChoiceId: "a",
        explanation: "Heat throttles charging and risks battery stress.",
        objectiveId: "AP1201-5.4",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-b7",
        prompt: "Sync vs backup reminder:",
        choices: [
          { id: "a", text: "Sync keeps data current; backup is a recoverable point-in-time copy" },
          { id: "b", text: "They are always identical" },
          { id: "c", text: "Backup only works over NFC" },
        ],
        correctChoiceId: "a",
        explanation: "Do not conflate sync with backup during mobile TS.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-b8",
        prompt: "A phone will not charge. Which comparison best isolates the failing layer?",
        choices: [
          { id: "a", text: "Inspect for battery damage, then compare a known-good rated cable, charger, source, port, and supported wireless charging" },
          { id: "b", text: "Replace the printer fuser" },
          { id: "c", text: "Puncture the battery to inspect it" },
        ],
        correctChoiceId: "a",
        explanation: "Safe comparison across power accessories, port, source, and battery condition narrows charging faults.",
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-mobile-f1",
        front: "Swollen battery?",
        back: "Stop use/charge — never puncture/heat — escalate",
      },
      {
        id: "ap-ts-mobile-f2",
        front: "BT stages?",
        back: "Discover → pair → connect → profile/capability",
      },
      {
        id: "ap-ts-mobile-f3",
        front: "Hotspot no internet?",
        back: "Check cellular data/plan/APN upstream",
      },
      {
        id: "ap-ts-mobile-f4",
        front: "One-app camera fail?",
        back: "Permission/MDM before hardware swap",
      },
      {
        id: "ap-ts-mobile-f5",
        front: "Factory reset?",
        back: "Late, authorized, after backup/account plan",
      },
      {
        id: "ap-ts-mobile-f6",
        front: "Mobile TS layers?",
        back: "Physical → power → radio → OS → app → permission → account → carrier → MDM → hardware",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-mobile-worksheet",
        title: "Mobile troubleshooting worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Read-only inventory on a phone/tablet you own (yes/no only — NO passwords, IMEI, or full emails):
Battery saver on? Storage nearly full? Wi-Fi connected? BT on? Airplane mode? Any work/MDM profile? Camera permission denied to any app?

Part B — For each ticket: failing layer · first safe check · evidence · next action · verify · escalate Y/N
1) Charges only with one cable orientation.
2) BT headset music OK; call audio on phone.
3) Joins café Wi-Fi; no internet (portal?).
4) Contacts sync on laptop; phone stale.
5) Battery drains after installing a new social app.
6) Hotspot clients online; no internet.
7) Touch fails in one game only.
8) Camera blocked on work phone (MDM suspected).
9) Overheats while charging during navigation.

No factory reset. No swollen-battery handling beyond stop/escalate notes.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Complete Part A yes/no inventory without secrets",
          "Complete all nine Part B rows with escalate decisions",
        ],
        relatedTopicIds: [
          "ap-ts-mobile",
          "ap-mobile-hardware",
          "ap-mobile-connectivity",
          "ap-mobile-accessories",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },
];
