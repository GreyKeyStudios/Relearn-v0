import type { TopicExperience } from "@/content/types";

/** LES — Objects and properties (PowerShell Module 2). */
export const PS_OBJECTS_AND_PROPERTIES_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-objects",
      type: "hero",
      powershellShellStep: 3,
      headline: "Output is structured data.",
      body: "When Get-Process runs, you get process objects — not just text lines. Each object has properties like Name, CPU, and Id you can read and filter.",
    },
    {
      id: "dot-notation",
      type: "teach",
      powershellShellStep: 3,
      headline: "Dot notation reads properties.",
      body: "Store one result: $p = Get-Process -Name notepad. Read a property: $p.Name or $p.CPU. Parentheses when calling methods: $p.Kill().",
      terms: [
        {
          id: "property",
          label: "Property",
          tier: "basics",
          shortDefinition:
            "A named field on an object — e.g. Length on a file, Name on a process.",
        },
      ],
    },
    {
      id: "get-member",
      type: "teach",
      powershellShellStep: 4,
      headline: "Get-Member discovers shape.",
      body: "Pipe anything to Get-Member (gm) to see properties and methods. Get-ChildItem | Get-Member -MemberType Property shows columns you can filter or export.",
      studyTip: {
        title: "Discovery habit",
        body: "Unknown output? Pipe to Get-Member before guessing property names.",
      },
    },
    {
      id: "not-strings",
      type: "misconception",
      powershellShellStep: 3,
      headline: "Stop parsing text by hand.",
      body: "Old shells made you cut columns with awk. PowerShell keeps objects intact through the pipeline — filter on .Status or .Length instead of regex on strings.",
    },
    {
      id: "member-check",
      type: "checkpoint",
      powershellShellStep: 3,
      headline: "Quick check — objects",
      checkpointQuestionId: "ps-objects-and-properties-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 3,
      headline: "Objects first, text later.",
      body: "Get-Member when unsure. Dot into properties. Let the pipeline carry structure — that is why Where-Object and Select-Object work so well.",
    },
  ],
};
