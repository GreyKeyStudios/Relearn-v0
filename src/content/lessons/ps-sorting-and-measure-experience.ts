import type { TopicExperience } from "@/content/types";

/** LES — Sort and measure (PowerShell Module 3). */
export const PS_SORTING_AND_MEASURE_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-sort",
      type: "hero",
      powershellShellStep: 4,
      headline: "Order and summarize.",
      body: "Sort-Object ranks pipeline results. Measure-Object counts or sums. Group-Object buckets rows — three cmdlets for quick admin reports.",
    },
    {
      id: "sort-object",
      type: "teach",
      powershellShellStep: 4,
      headline: "Sort-Object ranks rows.",
      body: "Get-ChildItem | Sort-Object Length -Descending | Select-Object -First 10 finds the ten largest files. -Descending puts biggest first.",
    },
    {
      id: "measure-group",
      type: "teach",
      powershellShellStep: 4,
      headline: "Measure and group.",
      body: "Get-ChildItem | Measure-Object -Property Length -Sum -Average reports total and average size. Group-Object Extension counts files by type.",
      studyTip: {
        title: "Report pattern",
        body: "Get → Where → Sort → Select → Export-Csv",
      },
    },
    {
      id: "measure-check",
      type: "checkpoint",
      powershellShellStep: 4,
      headline: "Quick check — reports",
      checkpointQuestionId: "ps-sorting-and-measure-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "Numbers from the pipeline.",
      body: "Sort for top-N lists. Measure-Object for totals. Group-Object for breakdowns. Combine with Select-Object before exporting.",
    },
  ],
};
