import type { Certification } from "../types";
import { ssM0PilotTopics } from "./ss/ss-m0-pilot";
import { ssM1PilotTopics } from "./ss/ss-m1-pilot";

/**
 * Sound Synthesis — ReLearn Type C creative tool track (Pathway S).
 * Pilot: Module 0 fundamentals + Module 1 subtractive (8 topics).
 * Practice DAW: learner-owned FL Studio (stock plugins).
 * See docs/sound-synthesis-learning-architecture.md.
 */
export const soundSynthesis: Certification = {
  id: "sound-synthesis",
  name: "Sound Synthesis",
  shortName: "Synthesis",
  vendor: "ReLearn",
  overview:
    "A project-based sound design track — not a vendor exam. Learn synthesis concepts with FL Studio stock plugins (3xOSC, Wave Candy, Fruity Filter, and friends). Every lesson asks what is actually happening to the sound. Dual challenges: Recreate (craft) and Interpret (imagination). Optional Go Deeper lanes for physics, math, DSP, and history — never required. Pilot covers fundamentals then subtractive; FM, additive, granular, and more follow in later modules.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + Recreate / Interpret challenges",
    format: "Hands-on FL Studio labs · ear training · self-eval checklists",
  },
  domains: [
    {
      id: "ss-m0-fundamentals",
      name: "Module 0 — Sound Fundamentals",
      topics: ssM0PilotTopics,
    },
    {
      id: "ss-m1-subtractive",
      name: "Module 1 — Subtractive Synthesis",
      topics: ssM1PilotTopics,
    },
  ],
};

/** Shared FL Studio resource used by Recreate / Interpret labs (on topics). */
export { FL_STUDIO_STOCK_RESOURCE } from "./ss/ss-m0-pilot";
