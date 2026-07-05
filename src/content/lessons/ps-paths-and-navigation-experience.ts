import type { TopicExperience } from "@/content/types";

/** LES — Paths and navigation (PowerShell Module 2). */
export const PS_PATHS_AND_NAVIGATION_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-paths",
      type: "hero",
      powershellShellStep: 1,
      headline: "Every command runs somewhere.",
      body: "PowerShell always has a current location — a folder path. Set-Location moves you; Get-Location confirms where you are before you touch files.",
    },
    {
      id: "absolute-relative",
      type: "teach",
      powershellShellStep: 2,
      headline: "Absolute vs relative paths.",
      body: "C:\\Users\\Admin\\Documents is absolute — full path from the drive root. .\\Downloads is relative — from your current folder. ..\\ goes up one level.",
      terms: [
        {
          id: "path",
          label: "Path",
          tier: "basics",
          shortDefinition:
            "A location in the filesystem — absolute (full) or relative (from current folder).",
        },
      ],
    },
    {
      id: "set-location",
      type: "teach",
      powershellShellStep: 3,
      headline: "Set-Location moves you.",
      body: "Set-Location C:\\Windows moves to that folder. Aliases cd and sl work the same. Tab completion fills folder names — type Set-Loc and press Tab.",
      studyTip: {
        title: "Navigation cmdlets",
        body: "Get-Location (pwd) · Set-Location (cd) · Get-ChildItem (ls/dir)",
      },
    },
    {
      id: "childitem-params",
      type: "teach",
      powershellShellStep: 4,
      headline: "List deeper with parameters.",
      body: "Get-ChildItem lists the current folder. Add -Recurse to walk subfolders, -Filter *.log for name patterns, or a path argument to list elsewhere without moving.",
    },
    {
      id: "path-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — paths",
      checkpointQuestionId: "ps-paths-and-navigation-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 1,
      headline: "Know where you are.",
      body: "Get-Location before destructive work. Set-Location to move. Get-ChildItem to inspect — add -Recurse or -Filter when you need more than a flat list.",
    },
  ],
};
