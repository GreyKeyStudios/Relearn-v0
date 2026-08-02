import type { TopicExperience } from "@/content/types";

export const CF_DESKTOP_TASKBAR_START_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 2,
      headline: "Windows 11 gives you a desktop workspace.",
      body: "After you sign in, you see the desktop — a home screen for your PC. The taskbar and Start menu are how you open almost everything.",
    },
    {
      id: "desktop",
      type: "teach",
      computerStackLayer: 2,
      headline: "Desktop and icons",
      body: "The large background area is the desktop. Icons are shortcuts to apps or folders. You can leave it tidy — empty is fine.",
      terms: [
        {
          id: "desktop",
          label: "Desktop",
          tier: "now",
          shortDefinition: "The main Windows screen after sign-in — wallpaper plus icons and open windows.",
        },
      ],
    },
    {
      id: "taskbar",
      type: "teach",
      computerStackLayer: 2,
      headline: "Taskbar — the strip at the bottom",
      body: "On Windows 11 the taskbar is usually centered. It shows pinned apps, open windows, and the clock. Click an icon to open or switch apps.",
    },
    {
      id: "start",
      type: "teach",
      computerStackLayer: 2,
      headline: "Start menu — your app launcher",
      body: "Click Start (Windows logo) or press the Windows key. Search by typing an app name. You do not need to memorize every icon.",
      studyTip: {
        title: "Search first",
        body: "Type the first few letters of what you need in Start. Faster than hunting icons.",
      },
    },
    {
      id: "legacy",
      type: "misconception",
      computerStackLayer: 2,
      headline: "Windows 10 looked a bit different",
      body: "Legacy note: older workplaces may still run Windows 10 with a left-aligned Start button. Same ideas — Start, taskbar, desktop. This course teaches Windows 11 as the current platform.",
      laterLearn: ["Windows 10 Start layout differences at work"],
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 2,
      headline: "Quick check — Start menu",
      checkpointQuestionId: "cf-desktop-taskbar-start-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 2,
      headline: "Desktop → taskbar → Start.",
      body: "You can open apps without fear. Next: File Explorer — where your documents actually live.",
    },
  ],
};
