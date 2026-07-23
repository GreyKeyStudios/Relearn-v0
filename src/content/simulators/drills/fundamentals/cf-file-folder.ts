import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

/** Computer Fundamentals — file/folder literacy matcher (F1 pilot). */
export const CF_FILE_FOLDER_POOL: ChoiceDrillItem[] = [
  {
    id: "cf-ff-1",
    prompt: "Where should you look first for a file you just downloaded from a browser?",
    choices: [
      { id: "a", text: "Recycle Bin" },
      { id: "b", text: "Downloads folder" },
      { id: "c", text: "Control Panel" },
      { id: "d", text: "Task Manager" },
    ],
    correctChoiceId: "b",
    weakConcept: "Downloads vs Documents",
    explanation: "Browsers save to Downloads by default unless you chose another folder.",
  },
  {
    id: "cf-ff-2",
    prompt: "You want a second copy of a file in another folder and keep the original. Which action?",
    choices: [
      { id: "a", text: "Cut and Paste" },
      { id: "b", text: "Copy and Paste" },
      { id: "c", text: "Delete then Undo" },
      { id: "d", text: "Empty Recycle Bin" },
    ],
    correctChoiceId: "b",
    weakConcept: "Copy vs move",
  },
  {
    id: "cf-ff-3",
    prompt: "Which keyboard shortcut opens File Explorer on Windows 11?",
    choices: [
      { id: "a", text: "Ctrl+Alt+Delete" },
      { id: "b", text: "Windows key + E" },
      { id: "c", text: "Ctrl+Shift+Esc" },
      { id: "d", text: "Alt+F4" },
    ],
    correctChoiceId: "b",
    weakConcept: "Open File Explorer",
  },
  {
    id: "cf-ff-4",
    prompt: "You deleted a document by mistake on a normal Windows 11 PC. Where do you look first?",
    choices: [
      { id: "a", text: "Taskbar settings" },
      { id: "b", text: "Recycle Bin" },
      { id: "c", text: "Device Manager" },
      { id: "d", text: "BIOS setup" },
    ],
    correctChoiceId: "b",
    weakConcept: "Recycle Bin restore",
  },
  {
    id: "cf-ff-5",
    prompt: "A file named report.pdf is most likely which type?",
    choices: [
      { id: "a", text: "A PDF document" },
      { id: "b", text: "A Windows system folder" },
      { id: "c", text: "A printer cable" },
      { id: "d", text: "A Wi-Fi password" },
    ],
    correctChoiceId: "a",
    weakConcept: "File extensions",
  },
  {
    id: "cf-ff-6",
    prompt: "Cut then Paste usually does what?",
    choices: [
      { id: "a", text: "Moves the file to the new location" },
      { id: "b", text: "Creates a permanent cloud backup" },
      { id: "c", text: "Formats the drive" },
      { id: "d", text: "Installs Windows updates" },
    ],
    correctChoiceId: "a",
    weakConcept: "Copy vs move",
  },
  {
    id: "cf-ff-7",
    prompt: "Best place to store practice documents you create on purpose?",
    choices: [
      { id: "a", text: "Downloads only" },
      { id: "b", text: "Documents (or a folder you create there)" },
      { id: "c", text: "Recycle Bin" },
      { id: "d", text: "Temporary Internet Files only" },
    ],
    correctChoiceId: "b",
    weakConcept: "Documents vs Downloads",
  },
  {
    id: "cf-ff-8",
    prompt: "Why turn on “File name extensions” in File Explorer View options?",
    choices: [
      { id: "a", text: "So you can see the real file type in the name" },
      { id: "b", text: "So Windows deletes all photos" },
      { id: "c", text: "So the Start menu disappears" },
      { id: "d", text: "So Wi-Fi runs faster" },
    ],
    correctChoiceId: "a",
    weakConcept: "Show extensions",
  },
  {
    id: "cf-ff-9",
    prompt: "Renaming notes.txt to notes.pdf…",
    choices: [
      { id: "a", text: "Fully converts the file into a real PDF" },
      { id: "b", text: "Does not convert the file — it only changes the name label" },
      { id: "c", text: "Deletes Windows" },
      { id: "d", text: "Creates a hardware driver" },
    ],
    correctChoiceId: "b",
    weakConcept: "Extension rename trap",
  },
  {
    id: "cf-ff-10",
    prompt: "You need a new empty container for related files. What do you create?",
    choices: [
      { id: "a", text: "A folder" },
      { id: "b", text: "A power supply" },
      { id: "c", text: "A subnet mask" },
      { id: "d", text: "A domain controller" },
    ],
    correctChoiceId: "a",
    weakConcept: "Create folder",
  },
];
