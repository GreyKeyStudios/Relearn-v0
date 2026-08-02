import type { TopicExperience } from "@/content/types";

export const CF_FILES_COPY_MOVE_DELETE_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 2,
      headline: "Copy keeps two. Move relocates one. Delete sends to Recycle Bin.",
      body: "These three actions cover most everyday file work. Practice them slowly once — then they become muscle memory.",
    },
    {
      id: "copy",
      type: "teach",
      computerStackLayer: 2,
      headline: "Copy",
      body: "Right-click a file → Copy. Open the destination folder → Right-click → Paste. Or Ctrl+C then Ctrl+V. The original stays put.",
    },
    {
      id: "move",
      type: "teach",
      computerStackLayer: 2,
      headline: "Move (cut)",
      body: "Right-click → Cut (or Ctrl+X), then Paste in the new folder. The file leaves the old location. Dragging between folders on the same drive usually moves.",
    },
    {
      id: "delete",
      type: "teach",
      computerStackLayer: 2,
      headline: "Delete is usually reversible",
      body: "Delete sends items to the Recycle Bin on the desktop. Open Recycle Bin → Restore if you made a mistake. Emptying the Recycle Bin is harder to undo — pause before that.",
      studyTip: {
        title: "Name before you delete",
        body: "If unsure, rename to OLD-filename first. Easier to spot later than hunting the Recycle Bin.",
      },
    },
    {
      id: "misconception",
      type: "misconception",
      computerStackLayer: 2,
      headline: "Delete is not always forever",
      body: "On a normal Windows 11 PC, Delete ≠ permanent wipe. Recycle Bin is your safety net. Cloud or USB deletes can behave differently — check before you assume.",
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 2,
      headline: "Quick check — copy vs move",
      checkpointQuestionId: "cf-files-copy-move-delete-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 2,
      headline: "Copy · Move · Recycle Bin",
      body: "You can rearrange files without panic. Next: file extensions — the short tag after the dot that tells Windows what kind of file it is.",
    },
  ],
};
