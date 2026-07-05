import type { TopicExperience } from "@/content/types";

/** LES — Formatting and export (PowerShell Module 4). */
export const PS_FORMATTING_AND_EXPORT_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-export",
      type: "hero",
      powershellShellStep: 4,
      headline: "Console view vs saved file.",
      body: "Format-Table and Format-List make output readable on screen. Export-Csv and Out-File save results for Excel, tickets, or audit trails.",
    },
    {
      id: "format-table-list",
      type: "teach",
      powershellShellStep: 4,
      headline: "Format for humans.",
      body: "Format-Table -AutoSize fits columns. Format-List shows every property on separate lines — good for one object. Format cmdlets go at the end of a pipeline.",
    },
    {
      id: "export-csv",
      type: "teach",
      powershellShellStep: 4,
      headline: "Export-Csv for spreadsheets.",
      body: "Get-Service | Select-Object Name, Status | Export-Csv .\\services.csv -NoTypeInformation. Open the CSV in Excel. -Append adds rows to an existing file.",
      terms: [
        {
          id: "export-csv",
          label: "Export-Csv",
          tier: "basics",
          shortDefinition:
            "Writes pipeline objects to a comma-separated file — common for reports and handoffs.",
        },
      ],
    },
    {
      id: "out-file",
      type: "teach",
      powershellShellStep: 4,
      headline: "Out-File for plain text.",
      body: "Get-Help Get-Process | Out-File .\\help.txt captures text output. Use -Encoding utf8 for clean Unicode. Prefer Export-Csv when columns matter.",
    },
    {
      id: "export-check",
      type: "checkpoint",
      powershellShellStep: 4,
      headline: "Quick check — export",
      checkpointQuestionId: "ps-formatting-and-export-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "Select, then export.",
      body: "Shape with Select-Object first, then Export-Csv. Format-* is for your eyes; export cmdlets are for files others will open.",
    },
  ],
};
