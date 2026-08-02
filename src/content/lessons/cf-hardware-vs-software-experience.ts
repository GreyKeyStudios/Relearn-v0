import type { TopicExperience } from "@/content/types";

export const CF_HARDWARE_VS_SOFTWARE_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 1,
      headline: "Hardware is stuff. Software is instructions.",
      body: "If you can drop it on your foot, it is usually hardware. If it lives as files and windows on the screen, it is software.",
    },
    {
      id: "hardware",
      type: "teach",
      computerStackLayer: 1,
      headline: "Hardware examples",
      body: "Screen, keyboard, mouse, laptop body, USB cable, printer, Wi-Fi card inside the machine. Physical pieces.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "Display" },
          { icon: "keyboard", label: "Keyboard" },
          { icon: "hard-drive", label: "Storage" },
        ],
      },
    },
    {
      id: "software",
      type: "teach",
      computerStackLayer: 3,
      headline: "Software examples",
      body: "Windows 11 itself, Edge or Chrome, Word, Zoom, a game. Software tells hardware what to do.",
    },
    {
      id: "firmware",
      type: "teach",
      computerStackLayer: 1,
      headline: "Firmware sits in between (basics only).",
      body: "Some chips store tiny built-in software called firmware. You do not manage it day to day — just know the word exists. Details wait for later courses.",
      terms: [
        {
          id: "firmware",
          label: "Firmware",
          tier: "later",
          shortDefinition: "Software stored on a chip that helps hardware start and run — you rarely edit it as a beginner.",
          laterTopicId: "cf-inside-the-box",
          laterTopicLabel: "Inside the PC (later module)",
        },
      ],
      laterLearn: ["BIOS/UEFI names", "Updating firmware safely"],
    },
    {
      id: "memory",
      type: "memory",
      computerStackLayer: 3,
      headline: "Touch test.",
      body: "Touch it → hardware. Install it from a store or download → software. When stuck, ask: is the problem a broken part or a broken program?",
    },
    {
      id: "misconception",
      type: "misconception",
      computerStackLayer: 2,
      headline: "Windows is software — not a piece of plastic.",
      body: "Windows 11 is an operating system (software). The laptop case is hardware. Mixing those up makes troubleshooting harder.",
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 1,
      headline: "Quick check — hardware or software?",
      checkpointQuestionId: "cf-hardware-vs-software-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 4,
      headline: "Separate the layers before you fix anything.",
      body: "Name the layer first: hardware vs software. Next: meet the Windows 11 desktop you will actually use.",
    },
  ],
};
