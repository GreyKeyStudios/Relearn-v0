import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.5", difficulty,
});

export const apCore2OpsBatch5Topics: Topic[] = [{
  id: "ap-environment",
  name: "Environmental Impacts & Controls",
  prerequisites: ["ap-safety", "ap-data-destruction", "ap-hardening"],
  objectives: ["AP1202-4.5"],
  knowledgeNodeId: "storage",
  lesson: {
    title: "Protect Equipment and the Environment Across the Asset Lifecycle",
    content: `Environmental responsibility has two directions:

1. **The environment affects technology** through heat, humidity, dust, liquid, power, vibration, electromagnetic interference, and physical conditions.
2. **Technology affects the environment** through electricity, cooling, manufacturing, batteries, chemicals, toner, packaging, and electronic waste.

Use a lifecycle process:

\`identify site and asset conditions → compare approved operating limits and local requirements → control and monitor exposure → reduce avoidable energy/material use → reuse, return, recycle, or dispose through approved channels → verify custody and records\`

## Temperature, airflow, and heat

Electronics convert power into heat. Excess temperature can cause throttling, instability, shortened component/battery life, shutdown, and fire risk. Check manufacturer limits, inlet versus exhaust temperature, fan/vent condition, rack orientation, cable obstruction, equipment spacing, room cooling, sunlight, nearby heat sources, workload, and sensor trends.

Do not point to one room-temperature reading and conclude cooling is adequate. Hot spots, recirculation, blocked vents, failed fans, overfilled cabinets, or loss of HVAC can affect a small area first. Keep hot and cold airflow separated where facilities design supports it, maintain blanking/containment components, and escalate cooling alarms or rapid temperature rise.

Never defeat thermal protection, remove required guards, place equipment on soft surfaces that block vents, or spray refrigerant/cleaner into operating equipment. Controlled shutdown may be safer than continued operation when limits are exceeded.

## Humidity, condensation, liquid, and contaminants

Very low relative humidity increases static risk. High humidity can encourage corrosion, leakage, and condensation. Rapid movement from a cold environment to a warm humid room can create condensation inside equipment; allow vendor-directed acclimation before power-on.

Protect equipment from plumbing, roof leaks, sprinklers, drinks, flooding, and floor-level water risk. Do not place critical equipment directly beneath known leak paths or on the floor where site design provides raised or protected placement. If liquid exposure occurs, follow electrical/safety and incident procedures—do not power on merely because the outside looks dry.

Dust, smoke, fibers, grease, salt, metal particles, insects, and construction debris can block cooling, conduct electricity, corrode contacts, contaminate optics, and shorten service life. Use suitable enclosures, filtration, positive pressure or environmental controls where designed, scheduled inspection, and manufacturer-approved cleaning. Ordinary household vacuums or compressed air can create ESD, overspeed fans, spread contaminants, or violate procedure.

## Power quality and physical environment

Outages, sags/brownouts, surges, spikes, noise, incorrect voltage, overloaded circuits, and poor grounding can corrupt data, damage hardware, or create unsafe conditions. Use correctly rated surge protection, UPS/power conditioning, redundant feeds, or generator support according to design. A UPS supplies limited runtime; it is not unlimited backup power and still needs testing, battery maintenance, capacity planning, ventilation, and safe disposal.

Vibration, shock, unstable shelving, seismic risk, vehicle/industrial motion, and frequent movement can affect drives, connectors, displays, and racks. Secure equipment using approved mounting and site controls.

## EMI and RFI

Electromagnetic and radio-frequency interference may affect cables, displays, wireless links, audio, sensors, and other electronics. Sources include motors, transformers, fluorescent/LED power systems, transmitters, microwaves, medical/industrial equipment, poorly shielded cables, and high-current power runs.

Identify correlation with location, time, load, cable path, and source activation. Use approved separation, shielding, grounding, ferrites, cable type/routing, channel planning, or facilities/vendor assistance. Do not disable regulated equipment, open high-voltage sources, or assume every intermittent fault is interference.

## Energy and resource efficiency

Reduce unnecessary environmental impact without compromising security, reliability, accessibility, or required work. Use power-management policies, sleep/hibernate where appropriate, efficient equipment and power supplies, virtualization/consolidation when justified, right-sized systems, scheduled shutdown for appropriate devices, print management, duplexing, reusable supplies where approved, and lifecycle extension through repair/upgrades.

Measure before claiming savings. Consider idle and peak power, workload, cooling overhead, battery health, performance, supportability, user needs, and rebound effects. Disabling updates or security scanning, shortening backup retention below requirements, or forcing sleep on critical services is not responsible efficiency.

## Consumables and waste streams

Separate ordinary trash from regulated or special waste. Potential special streams include batteries, toner/ink cartridges, circuit boards, computers, displays, lamps, UPS units, storage media, cables, packaging, cleaning chemicals, and contaminated materials.

Use manufacturer take-back, authorized recycler, leasing/vendor return, donation/reuse, or approved hazardous/e-waste service according to ownership, data, safety, transport, and local requirements. Never place swollen/damaged batteries, leaking toner, unknown chemicals, or regulated electronics into ordinary trash. Do not assume a recycling logo proves downstream handling is acceptable.

Before reuse, return, donation, resale, or recycling, coordinate asset ownership, warranty/lease, licensing, account/management removal, data retention, approved sanitization or destruction, accessories, inventory closure, and chain of custody. Data sanitization and physical destruction are taught in \`ap-data-destruction\`; environmental disposition remains necessary after data risk is addressed.

## Batteries, toner, and hazardous materials

Battery chemistry, condition, terminals, packaging, storage, transport, and disposal rules differ. Protect terminals from short circuits and use approved containers and collection points. Damaged lithium batteries require specialist handling and may have strict transport restrictions.

Return toner/ink through approved programs where possible. Follow vendor/SDS/site procedure for spills; avoid dispersing fine powder. Store chemicals labeled, compatible, secured, and within temperature/ventilation limits. Do not mix waste streams or pour chemicals, toner, or electronics into drains.

## Local requirements and records

Environmental, recycling, hazardous-material, privacy, transport, and workplace rules vary by jurisdiction and site. Use current organizational policy, local authority guidance, Safety Data Sheets, carrier requirements, contracts, and approved vendors. This course teaches recognition and process, not universal legal advice.

Records may include asset ID, item/media type, quantity/weight, condition, data-sanitization reference, owner approval, pickup date, transporter/vendor, destination, chain of custody, recycling/destruction certificate, exception, and inventory closure. A certificate supports the record but does not replace correct vendor selection, custody, and reconciliation.

## Monitor, respond, and verify

Monitor temperature/humidity, airflow or fan status, water/leak sensors, UPS/load/battery health, power events, dust/filter condition, and site alarms where appropriate. Set thresholds from equipment/facility requirements, validate sensor placement and alert delivery, trend recurring conditions, and test response procedures.

When an alarm occurs: protect people → verify the signal without unsafe exposure → assess scope/trend → notify facilities/owners → reduce load or shut down according to the approved continuity plan → preserve service/data where safe → document → do not return to normal until conditions and controls are verified.

Verify operating limits, stable trends, unobstructed airflow, dry/clean area, power and UPS health, correct waste segregation, sanitized/authorized assets, reconciled counts, approved custody, and updated records.

**Practice boundary:** analyze fictional site and disposition records only; do not handle chemicals, batteries, energized power, contaminated equipment, or real waste. **Next when authorized:** AP1202-4.6 privacy, licensing, prohibited content/activity, and policy.`,
  },
  lightbulbMoment: "Environmental control is lifecycle risk management: keep technology within safe operating conditions, then ensure its energy, consumables, data-bearing parts, and final disposition do not merely move risk somewhere else.",
  keyFacts: [
    "Heat depends on airflow and hot spots, not room temperature alone",
    "Low humidity raises ESD risk; high humidity raises corrosion/condensation risk",
    "Allow cold equipment to acclimate before power when condensation is possible",
    "A UPS has limited runtime and requires capacity, battery, ventilation, and testing",
    "Efficiency changes must preserve security, reliability, accessibility, and policy",
    "Data sanitization and environmental disposition are separate required controls",
    "Local rules and approved custody govern batteries, toner, chemicals, and e-waste",
  ],
  guidedExample: {
    title: "Respond to a hot network closet and retire its old UPS",
    steps: [
      "Review inlet/exhaust sensors, trend, fan/vent state, rack airflow, blocked filters, room cooling, load, UPS alarms, and nearby work—not one wall thermostat.",
      "Temperature is rising after HVAC failure. Notify facilities/service owners and execute the approved load-reduction or controlled-shutdown plan; do not defeat thermal alarms.",
      "After cooling returns, verify stable trends, equipment health, airflow, alerts, and business service before normal operation.",
      "For the failed UPS, verify ownership and data implications, inspect condition without opening it, and route batteries/electronics through an approved vendor under local transport rules.",
      "Reconcile asset ID, battery count, custody, destination/certificate, inventory closure, and any sanitization reference.",
    ],
  },
  commonMistakes: [
    "Using one room reading while ignoring rack hot spots and recirculation",
    "Powering cold equipment before condensation can clear",
    "Using unapproved vacuums, compressed air, or cleaners",
    "Treating a UPS as unlimited generator power",
    "Calling every intermittent issue EMI without correlation",
    "Saving energy by weakening updates, backups, security, or accessibility",
    "Putting batteries, toner, electronics, or chemicals in ordinary trash",
    "Sanitizing data but failing to complete environmental custody and inventory records",
  ],
  examTraps: [
    "Temperature versus airflow/hot-spot evidence",
    "Low versus high humidity effects",
    "Condensation and acclimation",
    "UPS capability and maintenance limits",
    "EMI/RFI isolation by correlation and approved controls",
    "Sanitization versus environmental disposition",
    "Local requirements and approved vendor chain of custody",
  ],
  realWorldScenario: "A school receives donated laptops stored overnight in a freezing vehicle. Staff do not power them immediately; they inventory and allow vendor-directed acclimation to prevent condensation damage. Later, failed batteries are separated by condition, terminals protected, and routed through an approved local program. Drives are sanitized under the data policy, asset and licensing records close, and environmental custody is documented separately.",
  whenThisFails: [
    "If temperature, liquid, smoke, power, or battery conditions create an immediate hazard, apply the safety/emergency procedure before environmental troubleshooting",
    "If disposition rules or vendor downstream handling are unclear, retain secure custody and consult the responsible environmental/legal/asset owner",
    "If environmental alarms recur, trend facility, load, placement, and sensor evidence and escalate root-cause work rather than repeatedly clearing alerts",
  ],
  teacherReflectionPrompt: "For a hot rack, a cold delivered laptop, a dusty shop PC, UPS retirement, and damaged battery shipment, state the environmental risk, safe control, monitoring evidence, disposition path, and records required.",
  quiz: [
    item("ap-environment-q1", "A rack overheats although the room thermostat looks normal. Best next evidence?", "Check inlet/exhaust sensors, airflow, recirculation, vents, fans, rack load, and trend", "Disable thermal shutdown", "Assume the thermostat proves safety", "easy"),
    item("ap-environment-q2", "Cold equipment enters a warm humid room. Why delay power-on?", "Moisture may condense internally; allow approved acclimation", "The keyboard layout changes", "It permanently increases ESD"),
    item("ap-environment-q3", "What is a key UPS limitation?", "It provides finite conditioned runtime and needs capacity, battery, ventilation, monitoring, and testing", "It powers a site forever", "It removes the need for shutdown planning"),
    item("ap-environment-q4", "A drive has been securely sanitized. Is disposal complete?", "No; ownership, asset closure, environmental handling, custody, and approved destination remain", "Yes; place it in ordinary trash", "Yes; no record is needed"),
    item("ap-environment-q5", "Which efficiency action is inappropriate?", "Disabling security scans and backups to reduce electricity use", "Right-sizing equipment with measured workload", "Approved sleep policy for idle workstations", "medium"),
  ],
  questionBank: [
    item("ap-environment-b1", "Very low humidity primarily increases:", "Electrostatic-discharge risk", "Condensation from saturation", "UPS runtime", "easy"),
    item("ap-environment-b2", "High humidity can contribute to:", "Condensation, leakage, and corrosion", "Guaranteed static elimination without other risk", "Faster backups"),
    item("ap-environment-b3", "Why avoid an ordinary vacuum inside electronics?", "It may create static, spread contamination, damage parts, or violate procedure", "It always erases storage", "It improves grounding"),
    item("ap-environment-b4", "How should suspected EMI/RFI be investigated?", "Correlate location/time/source/load/cable path, then use approved separation, shielding, grounding, or expert help", "Disable nearby regulated equipment", "Replace every computer"),
    item("ap-environment-b5", "A swollen lithium battery awaiting disposal should be:", "Kept from ordinary trash and handled/packaged/transported by the approved specialist process", "Punctured to flatten it", "Placed loose with metal scrap"),
    item("ap-environment-b6", "What must an e-waste vendor record complement?", "Correct authorization, asset reconciliation, data disposition, custody, and verified item counts", "No internal records", "A verbal promise only"),
    item("ap-environment-b7", "Why can retaining backups forever be environmentally and operationally harmful?", "It consumes resources and increases cost, privacy exposure, and stale-data obligations", "Retention has no tradeoff", "It eliminates recovery planning"),
    item("ap-environment-b8", "Environmental thresholds should come from:", "Equipment/facility requirements, policy, local rules, and validated sensor placement", "A universal guessed number", "The loudest fan"),
  ],
  flashcards: [
    { id: "ap-environment-f1", front: "Low humidity risk?", back: "Electrostatic discharge" },
    { id: "ap-environment-f2", front: "High humidity risk?", back: "Condensation, leakage, corrosion" },
    { id: "ap-environment-f3", front: "Cold device in warm air?", back: "Allow approved acclimation before power" },
    { id: "ap-environment-f4", front: "UPS is not?", back: "Unlimited backup power or a substitute for recovery planning" },
    { id: "ap-environment-f5", front: "Sanitized = disposed?", back: "No—environmental custody and asset closure remain" },
    { id: "ap-environment-f6", front: "E-waste rule source?", back: "Current local policy/law, asset owner, SDS/carrier rules, approved vendor" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 60,
  difficulty: "medium",
}];
