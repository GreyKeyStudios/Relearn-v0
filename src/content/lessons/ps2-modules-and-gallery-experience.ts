import type { TopicExperience } from "@/content/types";

/** LES — Modules, the Gallery, and trust (PowerShell II Module 4). */
export const PS2_MODULES_AND_GALLERY_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 1,
      headline: "A module is how a script stops being a file you email.",
      body: "Everything you use in this course — Microsoft.Graph, Az, SecretManagement — arrives as a module. Learning to find, trust, and eventually write one is what lets your automation be installed rather than pasted.",
    },
    {
      id: "what",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "A module is a folder that says what it exports.",
      body: "At its smallest it is MyTools.psm1 with your functions plus MyTools.psd1, the manifest, declaring the version, the author, the minimum PowerShell version, and — critically — FunctionsToExport. Everything not exported stays private, which is how you keep helper functions from becoming someone else's dependency.",
      terms: [
        {
          id: "manifest",
          label: "Module manifest",
          tier: "now",
          shortDefinition:
            "A .psd1 data file describing a module: version, author, requirements, and which functions it exports.",
        },
      ],
    },
    {
      id: "finding",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "Find-Module searches, Install-Module commits.",
      body: "Find-Module reads the PowerShell Gallery and tells you the version, author, and download count without changing anything. Install-Module -Scope CurrentUser puts it in your profile and needs no admin rights. Get-Command -Module <name> then shows you what you actually gained.",
      media: {
        kind: "flow",
        items: [
          { icon: "search", label: "Find-Module" },
          { icon: "package", label: "Install-Module" },
          { icon: "list-checks", label: "Get-Command -Module" },
          { icon: "terminal", label: "Use it" },
        ],
      },
    },
    {
      id: "trust",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "The Gallery is a public repository, not a vetted app store.",
      body: "Anyone can publish. Before you install into an environment that matters, check the author against the vendor you expect, look at the project URI and source, prefer packages with a real release history, and read Save-Module output rather than executing blind. Microsoft-published modules are signed; typo-squatted lookalikes are not.",
      studyTip: {
        title: "Save before you install",
        body: "Save-Module -Path .\\review downloads without loading. You can read the .psm1 first. Do that once and the habit is yours.",
      },
    },
    {
      id: "profile",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "Import-Module is usually unnecessary — until it is not.",
      body: "PowerShell auto-loads modules on a directory in PSModulePath the moment you call one of their commands. You need an explicit Import-Module when the module is somewhere else, when you want a specific version with -RequiredVersion, or when you are developing and need -Force to reload your edits.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 1,
      headline: "\"Install-Module updates the module.\"",
      body: "It installs another side-by-side version and the newest wins by default. Get-InstalledModule -AllVersions will show you the pile you have accumulated. Update-Module is the upgrade verb, and Uninstall-Module -RequiredVersion is how you clean up.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 1,
      headline: "Quick check — modules",
      checkpointQuestionId: "ps2-modules-and-gallery-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 1,
      headline: "Search, verify, install to CurrentUser, and export deliberately.",
      body: "Consuming modules is a trust decision before it is a technical one. Publishing one is mostly discipline: a manifest, a version you increment, and an export list you keep honest.",
    },
  ],
};
