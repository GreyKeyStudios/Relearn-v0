import type { TopicExperience } from "@/content/types";

export const CF_EXTENSIONS_AND_ASSOCIATIONS_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 3,
      headline: "The letters after the dot matter.",
      body: "report.pdf and report.docx are different kinds of files. That ending is the file extension. It helps Windows choose an app to open the file.",
    },
    {
      id: "extension",
      type: "teach",
      computerStackLayer: 3,
      headline: "Common extensions",
      body: ".pdf documents, .docx Word, .xlsx Excel, .jpg / .png pictures, .mp4 video, .zip compressed folder, .exe program installer — treat .exe with care.",
      terms: [
        {
          id: "extension",
          label: "File extension",
          tier: "now",
          shortDefinition: "The short suffix after the last dot in a filename — e.g. .pdf — that hints at the file type.",
        },
      ],
    },
    {
      id: "show",
      type: "teach",
      computerStackLayer: 2,
      headline: "Show extensions in Windows 11",
      body: "File Explorer → View → Show → File name extensions. Seeing the real name prevents surprises like invoice.pdf.exe.",
    },
    {
      id: "association",
      type: "teach",
      computerStackLayer: 3,
      headline: "Associations",
      body: "Windows links an extension to a default app. Double-click a .pdf might open Edge or another reader. You can change defaults in Settings later — today just recognize the idea.",
      laterLearn: ["Changing default apps in Settings", "Why double extensions are a scam pattern"],
    },
    {
      id: "trap",
      type: "misconception",
      computerStackLayer: 3,
      headline: "Renaming the extension does not convert the file",
      body: "Changing notes.txt to notes.pdf does not make a real PDF. You need Save As or Export from an app. Fake extensions are also a common scam trick.",
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 3,
      headline: "Quick check — extensions",
      checkpointQuestionId: "cf-extensions-and-associations-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 3,
      headline: "Read the ending before you open.",
      body: "Extensions tell you what you are dealing with. You finished the Orientation and Files pilot — practice with the folder simulator and Windows 11 lab next.",
    },
  ],
};
