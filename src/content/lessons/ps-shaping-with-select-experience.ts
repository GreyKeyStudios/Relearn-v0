import type { TopicExperience } from "@/content/types";

/** LES — Select-Object shaping (PowerShell Module 3). */
export const PS_SHAPING_WITH_SELECT_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-shape",
      type: "hero",
      powershellShellStep: 4,
      headline: "Pick columns, not clutter.",
      body: "Select-Object (select) chooses which properties appear in output. Managers want Name and Status — not fifty hidden fields.",
    },
    {
      id: "select-properties",
      type: "teach",
      powershellShellStep: 4,
      headline: "Name the properties you need.",
      body: "Get-Process | Select-Object Name, CPU, Id. Add -First 5 for top rows. -Unique removes duplicates after Sort-Object.",
      terms: [
        {
          id: "select-object",
          label: "Select-Object",
          tier: "basics",
          shortDefinition:
            "Shapes pipeline output — pick properties, limit count, or build calculated columns.",
        },
      ],
    },
    {
      id: "calculated",
      type: "teach",
      powershellShellStep: 4,
      headline: "Calculated properties.",
      body: "Select-Object Name, @{Name='SizeMB';Expression={$_.Length / 1MB}} builds new columns on the fly — useful before Export-Csv.",
    },
    {
      id: "select-check",
      type: "checkpoint",
      powershellShellStep: 4,
      headline: "Quick check — Select-Object",
      checkpointQuestionId: "ps-shaping-with-select-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "Shape before you share.",
      body: "Filter with Where-Object, then Select-Object the columns your report needs. Less noise makes scripts easier to audit.",
    },
  ],
};
