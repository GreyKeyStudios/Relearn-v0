import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.4", difficulty,
});

export const apCore2OpsBatch4Topics: Topic[] = [{
  id: "ap-safety",
  name: "Technician Safety Procedures",
  prerequisites: ["ap-backup-recovery", "ap-power-supplies", "ap-printer-maintenance", "ap-mobile-security"],
  objectives: ["AP1202-4.4"],
  knowledgeNodeId: "esd-safety",
  lesson: {
    title: "Stop, De-Energize, Control the Hazard, Then Work",
    content: `Safety comes before uptime, data, convenience, and ticket speed:

\`recognize hazard → stop and protect people → isolate energy or area within training/authority → use the approved procedure and PPE → perform only qualified work → verify a safe state → report and document\`

Technicians must distinguish routine equipment handling from conditions requiring facilities, electrical, fire, environmental-health-and-safety, security, vendor, or emergency responders. Technical access does not equal safety qualification.

## Before work

Identify equipment, ownership, task, energy sources, stored energy, sharp/hot/moving parts, battery state, weight, chemical exposure, laser or optical hazard, workspace, nearby people, required tools/PPE, and vendor/organizational instructions. Preserve service and data through approved shutdown and change procedures where time and safety allow.

Remove jewelry or loose items when policy requires, secure hair/clothing, use appropriate footwear and eye/hand protection, keep food/liquid away, maintain lighting and clear exits, and tell affected people what is happening. Never work alone where policy requires a second qualified person.

## Electrical safety

Use grounded, undamaged, correctly rated cords, power strips, surge protection, and equipment. Never defeat a ground pin, overload a circuit, daisy-chain power strips, use visibly damaged conductors, or substitute an incorrect fuse or power supply.

Before routine internal service, shut down, disconnect external power, remove a removable battery where supported, and follow vendor instructions for stored energy. Some devices and components retain hazardous charge after unplugging. Power supplies, CRTs, UPS units, large capacitors, high-voltage printer sections, and mains wiring are not ordinary user-serviceable areas. Do not open or probe them unless specifically trained, equipped, and authorized.

If someone is receiving an electrical shock, do not touch them while the source may be energized. Disconnect power only if safe and within procedure, call emergency help, and follow trained first-aid/AED response. Do not use water on energized electrical equipment.

## Fire response

Know alarms, exits, assembly points, emergency contacts, shutdown controls, and extinguisher policy before an incident. Raise the alarm and evacuate according to site procedure. Use an extinguisher only if trained, the fire is small/contained, the correct extinguisher is available, a safe exit remains behind you, and policy permits it.

Fire classes and extinguisher labels vary by region. Electrical equipment commonly requires a nonconductive agent rated for the hazard. Water can conduct electricity and can spread certain burning liquids. Never fight a growing, smoke-filled, unknown, battery, or otherwise unsafe fire; evacuate and call trained responders.

## Electrostatic discharge

ESD can damage electronics at levels a person cannot feel. Work in an ESD-controlled area where possible. Disconnect power, use an approved grounded mat and wrist strap connected to the designated common point, maintain appropriate humidity/controls, handle boards by edges, avoid contacts/chips, and store components in shielding ESD bags or approved containers.

An antistatic bag protects a component when correctly closed; its outer surface is not automatically a work mat. Never wear a grounding strap while working on energized high-voltage equipment. ESD controls protect components; electrical-safety controls protect people—do not confuse them.

## Batteries and thermal hazards

Inspect for swelling, bulging, leakage, puncture, crushed housing, odor, smoke, hissing, discoloration, or unusual heat. If a lithium battery is damaged or overheating, stop charging and use, move people away, isolate the area according to the approved emergency procedure, and contact trained responders. Do not puncture, bend, compress, short, open, freeze, immerse, or place a damaged battery in ordinary trash.

Use manufacturer-approved chargers, replacement parts, packaging, storage, and transport/disposal routes. Avoid metal tools across terminals. A swollen battery can make a case difficult to open; do not force the enclosure. Battery-fire and shipping rules require specialized local guidance.

## Lifting, ergonomics, and workspace

Plan the route and destination; inspect weight, balance, rack mounting, handles, stairs, doors, and trip hazards. Get help or use a cart/lift for heavy, awkward, or rack-mounted equipment. Keep the load close, maintain stable footing, lift with legs, avoid twisting, and set down deliberately. Follow site weight/team-lift limits.

Use rack stabilizers and install heavy devices low where design requires. Do not pull multiple heavy rack units out together. Secure equipment, tools, panels, screws, and cables. Use cable management and covers so power/data leads do not create trip hazards, block exits/airflow, or become pinched.

Ergonomics includes neutral posture, appropriate chair/monitor/keyboard/mouse placement, glare control, task variation, and breaks. Do not diagnose injuries; report symptoms and follow workplace health procedures.

## Tools, PPE, and component hazards

Use the right, inspected, insulated or rated tool where required. Remove damaged tools from service. Never improvise with a knife, metal object, or excessive force. Wear eye protection for flying particles and appropriate gloves for sharp edges or chemicals, recognizing that loose gloves can be unsafe around moving equipment.

Printers can contain hot fusers, moving rollers, toner, sharp edges, high voltage, and laser assemblies. Power down and cool as directed; never defeat interlocks or stare into/open laser paths. Toner spills require the manufacturer/site procedure; ordinary hot vacuums or compressed air may disperse fine particles or create additional risk.

Fiber-optic ends can carry invisible light and small glass fragments. Never look into a fiber connector, use unapproved viewing tools, or handle shards barehanded. Use approved inspection, cleaning, disposal, and eye protection.

## Chemicals and SDS

Read labels and the Safety Data Sheet before using or responding to a chemical. SDS information includes identification, hazards, composition, first aid, fire response, spills, handling/storage, exposure controls/PPE, physical properties, stability, toxicology, disposal, transport, and regulatory information.

Do not mix cleaners, use unapproved solvents, eat/drink in the work area, transfer chemicals to unlabeled containers, or improvise spill response. Ventilate only as procedure directs. For exposure, spill, leak, or unknown substance, isolate and contact the appropriate safety authority; follow SDS and emergency instructions rather than relying on smell.

## Incident and near-miss response

Protect people, summon the correct help, preserve the scene/evidence where safe, and report injury, exposure, shock, smoke/fire, battery event, equipment damage, spill, or near miss promptly. Record objective facts, location/time, equipment, observed condition, actions, witnesses, and escalation without blame or private medical speculation.

Do not resume work until the area/equipment has been released through the approved process. A near miss is useful safety evidence, not something to hide because no one was hurt.

## Verification

Before returning equipment or the area to service, verify guards/covers/interlocks are restored, tools and loose hardware removed, cables and grounding correct, ventilation unobstructed, batteries undamaged, power ratings correct, work area clean, asset/configuration records updated, required tests pass, and safety/incident owners have cleared any exceptional condition.

**Training boundary:** use scenario analysis only—no energized internal work, fire practice, chemical handling, battery disassembly, laser exposure, or heavy lifting. **Next when authorized:** AP1202-4.5 environmental impacts and controls.`,
  },
  lightbulbMoment: "Technician safety is hazard recognition and boundary discipline: the correct technical action may be to stop, isolate, evacuate, and call a qualified responder rather than continue the repair.",
  keyFacts: [
    "Safety outranks uptime and data preservation",
    "Unplugged equipment may retain hazardous stored energy",
    "ESD controls protect components; electrical controls protect people",
    "Never touch a shock victim while the source may be energized",
    "Damaged or swollen lithium batteries require stop-use and specialist response",
    "Use the correct extinguisher only when trained, policy permits, and escape remains safe",
    "SDS and local procedure govern chemical hazards and spills",
  ],
  guidedExample: {
    title: "Stop a routine laptop repair when the hazard changes",
    steps: [
      "A laptop arrives for keyboard repair. Verify asset/task, shut down, disconnect power, prepare an ESD-controlled bench, and review vendor steps.",
      "The bottom case is bulging and unusually warm. Reclassify the work from routine repair to a battery safety event.",
      "Do not force the case, charge, puncture, or continue disassembly. Move people away and follow the site’s damaged-battery isolation/escalation procedure.",
      "Record observed heat/bulging and actions without guessing chemistry or attempting disposal; contact trained safety/vendor personnel.",
      "Resume no work until released. Update the ticket/asset and verify approved packaging, replacement, and disposal handling are assigned.",
    ],
  },
  commonMistakes: [
    "Prioritizing data recovery over immediate human safety",
    "Assuming unplugged means no stored electrical energy",
    "Opening a power supply, CRT, UPS, or high-voltage printer section without qualification",
    "Using an ESD strap during energized high-voltage work",
    "Forcing open a case around a swollen battery",
    "Using water on energized equipment or fighting an unsafe fire",
    "Looking into fiber or laser paths",
    "Improvising chemical or toner cleanup without SDS/vendor procedure",
  ],
  examTraps: [
    "Human safety before equipment or data",
    "ESD protection versus shock protection",
    "Stored energy after disconnect",
    "Correct fire-response boundary",
    "Swollen lithium battery stop-use response",
    "Team lift and rack stability",
    "SDS-guided exposure and spill response",
  ],
  realWorldScenario: "A technician smells an unknown odor near a UPS, sees heat discoloration, and hears popping. They stop work, keep others away, raise the site alarm and contact facilities/emergency response, and do not open the UPS or attempt an improvised extinguisher response. After clearance, they document objective observations, link affected assets, and wait for authorized electrical/vendor inspection before service restoration.",
  whenThisFails: [
    "If a hazard exceeds training, authority, PPE, or available procedure, stop and call the qualified safety owner",
    "If shock, fire, smoke, chemical exposure, or battery thermal event is active, prioritize emergency response and evacuation",
    "If safety equipment, grounding, ventilation, guards, or workspace controls are missing, do not begin the task",
  ],
  teacherReflectionPrompt: "For a swollen laptop, sparking power strip, toner spill, fiber shard, and rack server move, state the immediate stop/control action, prohibited shortcut, qualified escalation, and safe return-to-service evidence.",
  quiz: [
    item("ap-safety-q1", "A laptop case is bulging and warm near the battery. Best action?", "Stop use/charging, do not force or puncture it, clear the area, and follow the damaged-battery escalation procedure", "Press the case flat", "Keep charging to copy files", "easy"),
    item("ap-safety-q2", "A person is in contact with an energized conductor. First principle?", "Do not touch them while energized; disconnect power only if safe and summon emergency help", "Pull them away barehanded", "Pour water on the source", "hard"),
    item("ap-safety-q3", "What is the key distinction for an ESD wrist strap?", "It protects components from static and must not be used as shock protection during energized high-voltage work", "It makes mains voltage safe", "It replaces equipment grounding"),
    item("ap-safety-q4", "When may a technician attempt extinguisher use?", "Only when trained, policy permits, the fire is small/known, the correct unit is available, and escape remains safe", "Whenever smoke is visible", "Inside a blocked exit path"),
    item("ap-safety-q5", "What should guide response to an unknown cleaning chemical spill?", "The label, SDS, site procedure, PPE requirements, isolation, and qualified safety response", "Smell it closely", "Mix it with another cleaner"),
  ],
  questionBank: [
    item("ap-safety-b1", "Before ordinary internal PC service:", "Use approved shutdown, disconnect external power, address removable battery/stored energy, and follow vendor steps", "Open the PSU first", "Leave jewelry across the chassis"),
    item("ap-safety-b2", "Why is an antistatic bag not a work mat?", "Its protective design applies to correct component storage; the outer surface is not a designated grounded work surface", "It always produces power", "It replaces a wrist strap and mat"),
    item("ap-safety-b3", "Safest approach to a heavy rack device?", "Plan route and balance, stabilize rack, use rated lift/team help, and follow site limits", "Pull several heavy units out", "Twist while lifting alone"),
    item("ap-safety-b4", "A printer fuser was just operating. What hazard matters?", "Stored heat plus possible moving, sharp, laser, and high-voltage components; cool and follow vendor procedure", "Only toner color", "No hazard after pressing power"),
    item("ap-safety-b5", "Fiber-optic safety requires:", "Never look into connectors; use approved inspection/cleaning and handle glass shards with proper controls", "View light directly", "Brush shards away by hand"),
    item("ap-safety-b6", "Why report a near miss?", "It provides evidence to correct hazards before an injury or loss", "Only injuries matter", "It should be hidden from metrics"),
    item("ap-safety-b7", "An unknown odor and popping come from a UPS. Best response?", "Stop, isolate/evacuate per policy, and call facilities/emergency/vendor responders—do not open it", "Open the battery compartment", "Continue until shutdown"),
    item("ap-safety-b8", "Before returning equipment to use, verify:", "Covers/guards, tools, cables/grounding, ventilation, ratings, tests, records, and required safety clearance", "Only that LEDs turn on", "That the ticket has no notes"),
  ],
  flashcards: [
    { id: "ap-safety-f1", front: "Top safety priority?", back: "People before uptime, equipment, and data" },
    { id: "ap-safety-f2", front: "Unplugged = safe?", back: "Not always; hazardous stored energy may remain" },
    { id: "ap-safety-f3", front: "ESD strap purpose?", back: "Protect components from static—not people from shock" },
    { id: "ap-safety-f4", front: "Swollen battery?", back: "Stop use/charge; do not force, puncture, or trash; escalate" },
    { id: "ap-safety-f5", front: "Unknown chemical?", back: "Label, SDS, site procedure, PPE, qualified response" },
    { id: "ap-safety-f6", front: "Fiber connector?", back: "Never look into it; invisible light and glass shards can injure" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 60,
  difficulty: "medium",
}];
