import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const LINUX_CHMOD_POOL: ChoiceDrillItem[] = [
  {
    id: "chmod-755",
    prompt: "What does chmod 755 set for a file?",
    choices: [
      { id: "a", text: "rwxr-xr-x (owner rwx, group/others r-x)" },
      { id: "b", text: "rwxrwxrwx" },
      { id: "c", text: "rw-r--r--" },
      { id: "d", text: "r-xr-x---" },
    ],
    correctChoiceId: "a",
    weakConcept: "Octal permission conversion",
    explanation: "7=rwx, 5=r-x. 755 = rwxr-xr-x.",
  },
  {
    id: "chmod-644",
    prompt: "chmod 644 equals which symbolic permissions?",
    choices: [
      { id: "a", text: "rw-r--r--" },
      { id: "b", text: "rwxr-xr-x" },
      { id: "c", text: "rw-rw-r--" },
      { id: "d", text: "r--r--r--" },
    ],
    correctChoiceId: "a",
    weakConcept: "644 permissions",
  },
  {
    id: "chmod-u+x",
    prompt: "chmod u+x script.sh adds:",
    choices: [
      { id: "a", text: "Execute permission for the owner (user)" },
      { id: "b", text: "Execute for everyone" },
      { id: "c", text: "Write for the group" },
      { id: "d", text: "Read for others" },
    ],
    correctChoiceId: "a",
    weakConcept: "Symbolic chmod (u/g/o)",
  },
  {
    id: "chmod-600",
    prompt: "Which best describes chmod 600?",
    choices: [
      { id: "a", text: "Owner read+write only; no group/other access" },
      { id: "b", text: "Everyone can read" },
      { id: "c", text: "Owner execute only" },
      { id: "d", text: "Sticky bit set" },
    ],
    correctChoiceId: "a",
    weakConcept: "Restrictive file permissions",
    explanation: "600 = rw------- — common for private keys and secrets.",
  },
  {
    id: "chmod-o-w",
    prompt: "chmod o-w file.txt removes:",
    choices: [
      { id: "a", text: "Write permission for others" },
      { id: "b", text: "Write for owner" },
      { id: "c", text: "All permissions" },
      { id: "d", text: "Execute for group" },
    ],
    correctChoiceId: "a",
    weakConcept: "Removing permissions symbolically",
  },
  {
    id: "chmod-digit-4",
    prompt: "In octal notation, the digit 4 represents:",
    choices: [
      { id: "a", text: "Read (r--)" },
      { id: "b", text: "Write (-w-)" },
      { id: "c", text: "Execute (--x)" },
      { id: "d", text: "Setuid" },
    ],
    correctChoiceId: "a",
    weakConcept: "Octal digit values",
    explanation: "4=read, 2=write, 1=execute. Combine: 4+2+1=7=rwx.",
  },
  {
    id: "chmod-result",
    prompt: "A file is rw-r--r--. chmod g+w is applied. New permissions?",
    choices: [
      { id: "a", text: "rw-rw-r--" },
      { id: "b", text: "rwxr--r--" },
      { id: "c", text: "rw-r--rw-" },
      { id: "d", text: "r--r--r--" },
    ],
    correctChoiceId: "a",
    weakConcept: "Applying symbolic changes",
  },
  {
    id: "chmod-777",
    prompt: "Why is chmod 777 generally discouraged on production files?",
    choices: [
      { id: "a", text: "Grants read, write, execute to everyone — excessive privilege" },
      { id: "b", text: "It removes execute permission" },
      { id: "c", text: "It enables encryption" },
      { id: "d", text: "It sets the immutable flag" },
    ],
    correctChoiceId: "a",
    weakConcept: "Least privilege",
  },
];
