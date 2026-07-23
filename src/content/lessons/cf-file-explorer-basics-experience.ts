import type { TopicExperience } from "@/content/types";

export const CF_FILE_EXPLORER_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "computer-stack" },
  screens: [
    {
      id: "hero",
      type: "hero",
      computerStackLayer: 2,
      headline: "Files live in folders — like papers in drawers.",
      body: "File Explorer is the Windows 11 app that shows those drawers. Once you can create and find a folder, the PC feels less mysterious.",
    },
    {
      id: "open",
      type: "teach",
      computerStackLayer: 2,
      headline: "Open File Explorer",
      body: "Click the folder icon on the taskbar, or press Windows key + E. You will see Quick access, This PC, and your user folders (Documents, Downloads, Desktop).",
      terms: [
        {
          id: "file-explorer",
          label: "File Explorer",
          tier: "now",
          shortDefinition: "The Windows app for browsing files and folders.",
        },
      ],
    },
    {
      id: "folder",
      type: "teach",
      computerStackLayer: 2,
      headline: "Create a folder",
      body: "Go to Documents. Right-click empty space → New → Folder. Type a clear name like Practice-ReLearn and press Enter. That folder is yours.",
    },
    {
      id: "find",
      type: "teach",
      computerStackLayer: 2,
      headline: "Find it again",
      body: "Open Documents. Double-click your folder. Use the address bar at the top to see the path. Search box (top-right) finds names if you forget where you put something.",
    },
    {
      id: "memory",
      type: "memory",
      computerStackLayer: 2,
      headline: "Documents vs Downloads",
      body: "Documents = files you save on purpose. Downloads = files that arrived from the browser. Check Downloads first when something “vanished.”",
    },
    {
      id: "check",
      type: "checkpoint",
      computerStackLayer: 2,
      headline: "Quick check — open Explorer",
      checkpointQuestionId: "cf-file-explorer-basics-q1",
    },
    {
      id: "summary",
      type: "summary",
      computerStackLayer: 2,
      headline: "You can create and find a folder.",
      body: "That skill alone removes a huge amount of computer anxiety. Next: copy, move, rename, and delete safely.",
    },
  ],
};
