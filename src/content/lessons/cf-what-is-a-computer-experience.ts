import type { TopicExperience } from "@/content/types";

/** LES — What is a computer (CF pilot). */
export const CF_WHAT_IS_A_COMPUTER_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 4,
      headline: "A computer is a tool that follows instructions.",
      body: "You already use one every day on your phone. A desktop or laptop is the same idea with a bigger screen, keyboard, and more parts you can see and touch.",
    },
    {
      id: "stack",
      type: "teach",
      computerStackLayer: 4,
      headline: "Four layers — remember this stack.",
      body: "You (your goals) → Apps (programs) → Operating system (Windows 11) → Hardware (physical parts). Each layer needs the one below it.",
      terms: [
        {
          id: "hardware",
          label: "Hardware",
          tier: "now",
          shortDefinition: "Physical parts you can touch — screen, keyboard, chips, cables.",
        },
        {
          id: "software",
          label: "Software",
          tier: "now",
          shortDefinition: "Instructions and programs — apps and the operating system.",
        },
      ],
    },
    {
      id: "os-layer",
      type: "teach",
      computerStackLayer: 2,
      headline: "The operating system runs the show.",
      body: "Windows 11 is the operating system (OS) on most work PCs. It starts the computer, shows the desktop, and lets apps share the hardware safely.",
      terms: [
        {
          id: "os",
          label: "Operating system (OS)",
          tier: "basics",
          shortDefinition: "The main program that manages hardware and runs apps — Windows 11, macOS, Linux, Android, iOS.",
        },
      ],
      laterLearn: [
        "Other devices (phones, tablets, servers) use the same stack idea",
        "Safe Settings exploration in later practice",
      ],
    },
    {
      id: "analogy",
      type: "analogy",
      computerStackLayer: 3,
      headline: "Kitchen analogy.",
      body: "Hardware is the kitchen. The OS is the cook who runs the kitchen. Apps are recipes. You decide what meal you want.",
    },
    {
      id: "misconception",
      type: "misconception",
      computerStackLayer: 1,
      headline: "The box is not the whole computer.",
      body: "People say “the computer” meaning the tower. The monitor, keyboard, and Windows are part of the system too. The stack keeps that clear.",
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 2,
      headline: "Quick check — the stack",
      checkpointQuestionId: "cf-what-is-a-computer-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 4,
      headline: "You sit on top of the stack.",
      body: "Remember: You → Apps → OS → Hardware. Next you will separate hardware from software with clear examples.",
    },
  ],
};
