import type { TopicExperience } from "@/content/types";

/** LES — Data shaping and reporting (PowerShell II Module 3). */
export const PS2_DATA_SHAPING_AND_REPORTING_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 5,
      headline: "Most automation work is not exciting. It is data arriving badly.",
      body: "A spreadsheet from HR with trailing spaces and two date formats. An export with a blank row in the middle. Two lists that should match and do not. Handling that well is the single most transferable PowerShell skill in IT support.",
    },
    {
      id: "custom-objects",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Normalise into your own object shape early.",
      body: "Do not carry someone else's column names through your whole script. Read the messy input, then emit [PSCustomObject] rows with the property names, types, and trimmed values you decided on. Everything downstream gets to assume the data is clean because one place made it so.",
      terms: [
        {
          id: "normalise",
          label: "Normalise",
          tier: "now",
          shortDefinition:
            "Convert varied input into one consistent shape — same property names, same types, same casing — before any logic runs.",
        },
      ],
    },
    {
      id: "calculated",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Calculated properties compute the column you actually need.",
      body: "Select-Object @{Name='SizeGB';Expression={[math]::Round($_.Length/1GB,2)}} adds a real numeric column. Keep it numeric — the moment you format it as a string with 'GB' on the end, sorting and summing stop working and your report starts lying.",
    },
    {
      id: "group-and-measure",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Group-Object and Measure-Object turn rows into answers.",
      body: "Group-Object Department gives you Name, Count, and Group per bucket. Measure-Object -Property SizeGB -Sum -Average -Maximum aggregates. Together they answer the question a manager actually asked instead of handing over 4,000 rows.",
      media: {
        kind: "flow",
        items: [
          { icon: "filter", label: "Normalise" },
          { icon: "list-checks", label: "Group-Object" },
          { icon: "activity", label: "Measure-Object" },
          { icon: "file-spreadsheet", label: "Export" },
        ],
      },
    },
    {
      id: "compare",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Compare-Object answers 'what is different?'",
      body: "Compare-Object -ReferenceObject $expected -DifferenceObject $actual -Property SamAccountName marks each row with <= (only in reference) or => (only in difference). That single cmdlet replaces the reconciliation people do by eye in two spreadsheets.",
    },
    {
      id: "two-reports",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Always produce two reports: what worked and what did not.",
      body: "A bulk job that emits only successes hides its own failures. Collect valid rows and rejected rows separately, export both, and put the reason on every rejected row. The error report is the one your colleagues will actually use.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 5,
      headline: "A blank cell and a zero are not the same fact.",
      body: "Empty means nobody told us. Zero means we measured nothing. If you replace $null with 0 while cleaning input, you have quietly invented data — and any average you calculate afterwards is wrong.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 5,
      headline: "Quick check — data shaping",
      checkpointQuestionId: "ps2-data-shaping-and-reporting-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 5,
      headline: "Validate, normalise, group, compare, then report both outcomes.",
      body: "Clean once at the edge into your own object shape. Aggregate with Group-Object and Measure-Object. Reconcile with Compare-Object. Export a success report and an error report, and never let a rejected row disappear.",
    },
  ],
};
