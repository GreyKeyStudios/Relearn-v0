import type { HotspotDrillItem, HotspotRegion } from "@/components/simulators/SimulatorRegistry";

/**
 * Desktop PC interior, authored as SVG paths rather than a photograph:
 * no licensing, no asset pipeline, crisp at any size, and it inherits the theme.
 *
 * Region `ariaLabel` values describe position and shape only. Naming the part
 * there would hand the answer to keyboard and screen-reader users.
 */
const REGIONS: HotspotRegion[] = [
  {
    id: "motherboard",
    label: "motherboard",
    d: "M40 40H300V240H40Z",
    ariaLabel: "large flat board filling the left two thirds",
  },
  {
    id: "cpu",
    label: "CPU",
    d: "M92 72H152V132H92Z",
    ariaLabel: "square component near the upper left of the large board",
  },
  {
    id: "ram",
    label: "RAM slots",
    d: "M176 62H191V162H176Z M201 62H216V162H201Z",
    ariaLabel: "pair of tall narrow strips in the upper middle",
  },
  {
    id: "gpu",
    label: "graphics card",
    d: "M60 180H262V216H60Z",
    ariaLabel: "long horizontal bar across the lower half of the large board",
  },
  {
    id: "psu",
    label: "power supply unit",
    d: "M312 190H386V266H312Z",
    ariaLabel: "large box in the bottom right corner",
  },
  {
    id: "storage",
    label: "storage drive",
    d: "M312 40H386V110H312Z",
    ariaLabel: "rectangular block in the top right corner",
  },
  {
    id: "fan",
    label: "case fan",
    d: "M355 150m-28 0a28 28 0 1 0 56 0a28 28 0 1 0 -56 0",
    ariaLabel: "circular component on the right side, between the two corner blocks",
  },
];

const DIAGRAM: Pick<HotspotDrillItem, "viewBox" | "backdrop" | "regions"> = {
  viewBox: "0 0 400 300",
  backdrop: [{ d: "M10 10H390V290H10Z" }],
  regions: REGIONS,
};

/**
 * One diagram, seven prompts. Each item spreads the shared diagram rather than
 * repeating it, so adding a question is one line.
 */
export const PC_INTERIOR_POOL: HotspotDrillItem[] = [
  {
    ...DIAGRAM,
    id: "pc-interior-motherboard",
    prompt: "Click the motherboard — the board everything else plugs into.",
    correctRegionId: "motherboard",
    weakConcept: "Identifying the motherboard",
    explanation:
      "Every other component either sits on the motherboard or connects to it. It is the board, not a box or a card.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-cpu",
    prompt: "Click the CPU.",
    correctRegionId: "cpu",
    weakConcept: "Locating the CPU",
    explanation:
      "The CPU (Central Processing Unit) sits in a square socket on the motherboard, almost always under a cooler.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-ram",
    prompt: "Click the RAM slots.",
    correctRegionId: "ram",
    weakConcept: "Locating RAM slots",
    explanation:
      "RAM (Random Access Memory) sticks stand in long thin slots beside the CPU, usually in matched pairs.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-gpu",
    prompt: "Click the graphics card.",
    correctRegionId: "gpu",
    weakConcept: "Locating the graphics card",
    explanation:
      "The graphics card lies flat in an expansion slot below the CPU and is usually the longest component inside the case.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-psu",
    prompt: "Click the power supply unit (PSU).",
    correctRegionId: "psu",
    weakConcept: "Locating the PSU",
    explanation:
      "The PSU is a sealed metal box, normally bottom-rear, with the wall socket on the outside and power cables running to everything else.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-storage",
    prompt: "Click the storage drive.",
    correctRegionId: "storage",
    weakConcept: "Locating storage",
    explanation:
      "Storage holds files when the power is off. RAM does not — that difference is why a crash loses unsaved work.",
  },
  {
    ...DIAGRAM,
    id: "pc-interior-fan",
    prompt: "Click the case fan.",
    correctRegionId: "fan",
    weakConcept: "Locating cooling",
    explanation:
      "Case fans move air through the chassis. Heat, not age, is what kills most components early.",
  },
];
