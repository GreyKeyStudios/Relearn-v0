import type { TopicExperience } from "@/content/types";

/** LES — Parameters, types, validation, and pipeline input (PowerShell II Module 1). */
export const PS2_PARAMETERS_AND_VALIDATION_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 2,
      headline: "Every bad input you reject up front is a bug you never debug.",
      body: "Most automation failures are not clever. They are a path that does not exist, a number someone typed as text, a blank string, or a value nobody thought to check. Parameters are where you catch all of that — before your code touches anything.",
    },
    {
      id: "types",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Declare the type and PowerShell enforces it.",
      body: "param([string]$Name, [int]$Top, [datetime]$Since, [switch]$IncludeStopped). A typed parameter converts what it can and rejects what it cannot, at the boundary, with a message naming the parameter. An untyped parameter accepts anything and fails somewhere deeper where the message means nothing.",
      terms: [
        {
          id: "switch",
          label: "[switch]",
          tier: "now",
          shortDefinition:
            "A flag parameter that is either present or absent — no value needed. -IncludeStopped rather than -IncludeStopped $true.",
        },
      ],
    },
    {
      id: "mandatory",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Mandatory means the caller cannot forget.",
      body: "[Parameter(Mandatory)][string]$Path makes PowerShell prompt interactively or fail loudly in a script. That is far better than a default that silently points at the wrong folder. Reserve defaults for values that are genuinely safe when unattended.",
    },
    {
      id: "validation",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Validation attributes are your first line of defence.",
      body: "ValidateSet limits input to a known list. ValidateRange bounds a number. ValidateNotNullOrEmpty rejects blanks. ValidatePattern matches a shape. ValidateScript runs your own test — and Test-Path inside a ValidateScript stops a bad folder before a single file is written.",
      media: {
        kind: "flow",
        items: [
          { icon: "list-checks", label: "ValidateSet" },
          { icon: "filter", label: "ValidateRange" },
          { icon: "shield", label: "NotNullOrEmpty" },
          { icon: "search", label: "ValidateScript" },
        ],
      },
    },
    {
      id: "pipeline-input",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Pipeline input needs a process block.",
      body: "ValueFromPipeline tells PowerShell your parameter can arrive down the pipe. But binding alone is not enough: put your work inside process { } or you will only ever handle the last item. begin runs once before, process runs per item, end runs once after.",
      studyTip: {
        title: "The classic one-row bug",
        body: "A function that accepts pipeline input but does its work in the function body instead of process { } returns exactly one result and looks like a filtering problem.",
      },
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 2,
      headline: "A default value is not validation.",
      body: "param([string]$ReportFolder = 'C:\\Reports') does not check that the folder exists, is writable, or is the one you meant. Defaults make a tool convenient. Validation makes it safe. You need both, and they are not the same job.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 2,
      headline: "Quick check — parameters",
      checkpointQuestionId: "ps2-parameters-and-validation-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 2,
      headline: "Type it, require it, validate it, then accept it from the pipeline.",
      body: "The parameter block is the contract between your tool and whoever runs it. Written well, its error messages teach the caller how to use it correctly. Written badly, it lets bad input travel until the failure is unrecognisable.",
    },
  ],
};
