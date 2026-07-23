import type { Certification, ExternalResource } from "../types";
import { PS_WHY_THE_SHELL_EXPERIENCE } from "@/content/lessons/ps-why-the-shell-experience";
import { PS_CMDLETS_PIPELINE_EXPERIENCE } from "@/content/lessons/ps-cmdlets-pipeline-experience";
import { PS_FIRST_COMMANDS_SAFELY_EXPERIENCE } from "@/content/lessons/ps-first-commands-safely-experience";
import { PS_PATHS_AND_NAVIGATION_EXPERIENCE } from "@/content/lessons/ps-paths-and-navigation-experience";
import { PS_OBJECTS_AND_PROPERTIES_EXPERIENCE } from "@/content/lessons/ps-objects-and-properties-experience";
import { PS_ALIASES_VS_CMDLETS_EXPERIENCE } from "@/content/lessons/ps-aliases-vs-cmdlets-experience";
import { PS_FILTERING_WITH_WHERE_EXPERIENCE } from "@/content/lessons/ps-filtering-with-where-experience";
import { PS_SHAPING_WITH_SELECT_EXPERIENCE } from "@/content/lessons/ps-shaping-with-select-experience";
import { PS_SORTING_AND_MEASURE_EXPERIENCE } from "@/content/lessons/ps-sorting-and-measure-experience";
import { PS_FORMATTING_AND_EXPORT_EXPERIENCE } from "@/content/lessons/ps-formatting-and-export-experience";
import { PS_SERVICES_AND_PROCESSES_EXPERIENCE } from "@/content/lessons/ps-services-and-processes-experience";
import { PS_VARIABLES_AND_QUOTING_EXPERIENCE } from "@/content/lessons/ps-variables-and-quoting-experience";
import { PS_IF_AND_LOOPS_EXPERIENCE } from "@/content/lessons/ps-if-and-loops-experience";
import { PS_FUNCTIONS_AND_PARAMETERS_EXPERIENCE } from "@/content/lessons/ps-functions-and-parameters-experience";
import { PS_ERRORS_AND_CAPSTONE_EXPERIENCE } from "@/content/lessons/ps-errors-and-capstone-experience";

const WINDOWS_POWERSHELL_RESOURCE: ExternalResource = {
  id: "windows-powershell",
  name: "Windows PowerShell",
  url: "https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows",
  cost: "free",
  platform: "any",
  installNotes:
    "PowerShell 5.1 ships with Windows. Windows Terminal is recommended. See Microsoft docs for PowerShell 7+ install on other OSes.",
};

/** PowerShell Foundations — ReLearn skills track (Path A cert shell). */
export const powershell: Certification = {
  id: "powershell",
  name: "PowerShell Foundations",
  shortName: "PowerShell",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum — not a vendor exam. Five procedural modules take you from why IT work needs a shell through cmdlets, pipelines, file navigation, object properties, filtering and shaping reports, formatting and export, services and processes, variables and quoting, then scripting with if/loops, functions, and a capstone admin task. Each topic includes guided examples, labs on your own Windows PC, and workplace-focused traps — built for help desk and junior admin roles.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + capstone",
    format: "Hands-on labs and command practice",
  },
  domains: [
    {
      id: "powershell-foundations",
      name: "Module 1 — Shell Basics",
      topics: [
        {
          id: "ps-why-the-shell",
          name: "Why the Shell",
          objectives: ["PS-M01-O1", "PS-M01-O2", "PS-M01-O3"],
          lesson: {
            title: "Why Use a Shell",
            content: `GUIs are fine for one-off tasks. IT work at scale — listing users, checking services, searching logs, patching dozens of servers — needs commands you can repeat, log, and script. A shell is a program that reads text commands and runs them. On Windows, PowerShell is the primary shell for admin work.

PowerShell is Microsoft's shell for Windows and is cross-platform today. It uses Verb-Noun cmdlets like Get-Process and passes structured objects through pipelines — not just plain text lines. That object model is why PowerShell feels different from older command prompts: you filter and shape data without parsing strings by hand.

You do not need to be a programmer to start. Read-only Get-* cmdlets are safe first steps. Module 1 builds the mental model: why shells exist, how cmdlets chain together, and how to explore commands without breaking anything. Later modules add file work, pipeline reports, admin tasks, and scripting.

When a manager asks for a list of every machine running low on disk space, a GUI click-through does not scale. A shell command — or a short script built from commands you already know — turns a two-hour manual task into a repeatable five-minute job. That is the job skill this track teaches.

Start today by noticing repeatable work on your own PC or help desk queue. Any task you do twice the same way — checking a service, listing a folder, confirming a version — is a shell candidate. Write the clicks as plain English first: open folder, sort by date, copy newest file name. That sentence becomes your future command plan.

Windows ships with PowerShell 5.1; Windows Terminal gives you tabs and readable fonts. Open it the same way each time so muscle memory sticks. Pin it next to your ticket queue. Consistency beats heroics: the goal is dependable output you can attach to tickets, not flashy one-liners.

This track is procedural. You will run commands on a real machine, export CSVs, and finish with a capstone script. There is no vendor exam — graduation means you can safely investigate, report, and automate small admin tasks without fear of breaking production on your first try.

Compare shell work to ticket documentation: every command you run should answer who, what, and when as clearly as a good ticket note. Peers should reproduce your steps from written commands alone. That discipline separates hobby copying from professional admin practice your manager can audit during compliance reviews.`,
            experience: PS_WHY_THE_SHELL_EXPERIENCE,
          },
          lightbulbMoment:
            "A shell turns one-off clicking into repeatable commands — the foundation of every admin automation story.",
          keyFacts: [
            "A shell runs text commands — repeatable, scriptable admin work",
            "PowerShell is built into Windows and uses Verb-Noun cmdlets",
            "GUIs do not scale for bulk or automated tasks across many systems",
            "You do not need to be a programmer to start with read-only Get-* cmdlets",
            "PowerShell passes objects through pipelines, not just text lines",
          ],
          guidedExample: {
            title: "Spot the Repeatable Task",
            steps: [
              "A help desk ticket asks: list all users locked out today across 50 PCs.",
              "In a GUI, you would RDP to each machine and check Event Viewer — hours of work.",
              "In a shell, one command pattern can query all machines from your admin workstation.",
              "The command can be saved, scheduled, and run again tomorrow without re-learning clicks.",
              "That repeatability is why IT teams standardize on shells for operational work.",
              "Module 1 teaches the concepts; later modules teach the exact cmdlets.",
            ],
          },
          commonMistakes: [
            "Assuming PowerShell is only for developers or advanced scripters",
            "Trying to memorize every cmdlet instead of learning Get-Help and patterns",
            "Avoiding the shell because one bad command story scared you — safety habits come first",
            "Expecting the shell to replace GUIs entirely — both have roles",
          ],
          examTraps: [
            "Coworkers say PowerShell replaced CMD entirely — both exist; PowerShell is the admin default",
            "Confusing PowerShell with Python or Bash syntax before learning cmdlet names",
            "Thinking remote admin always requires a GUI session when WinRM and remoting use shells",
            "Believing automation requires a compiled app when scripts start as saved command lines",
          ],
          realWorldScenario:
            "Your team onboards ten new hires monthly. HR emails a spreadsheet; IT must create accounts, assign groups, and verify licenses. A senior admin shows you their shell script that reads the CSV and calls New-ADUser — same steps every time, auditable, no missed checkbox in a GUI wizard.",
          quiz: [
            {
              id: "ps-why-the-shell-q1",
              prompt: "Why do IT admins use shells instead of only GUIs?",
              choices: [
                { id: "a", text: "GUIs are illegal on servers" },
                { id: "b", text: "Commands can be repeated and automated at scale" },
                { id: "c", text: "PowerShell replaces the need for backups" },
                { id: "d", text: "Shells only work without a mouse" },
              ],
              correctChoiceId: "b",
              explanation:
                "Shell commands are repeatable and scriptable — essential for managing many systems or the same task many times.",
              difficulty: "easy",
            },
            {
              id: "ps-why-the-shell-q2",
              prompt: "What is a shell in IT terms?",
              choices: [
                { id: "a", text: "A hardware case for a server" },
                { id: "b", text: "A program that reads and runs text commands" },
                { id: "c", text: "A type of firewall rule" },
                { id: "d", text: "A backup storage tier" },
              ],
              correctChoiceId: "b",
              explanation: "A shell interprets text commands — PowerShell on Windows, bash on Linux.",
              difficulty: "easy",
            },
            {
              id: "ps-why-the-shell-q3",
              prompt: "Which task best fits shell work over GUI clicking?",
              choices: [
                { id: "a", text: "Changing desktop wallpaper once" },
                { id: "b", text: "Checking service status on 200 servers" },
                { id: "c", text: "Editing a single Word document" },
                { id: "d", text: "Browsing a website" },
              ],
              correctChoiceId: "b",
              explanation: "Bulk, repeatable checks across many systems are where shells shine.",
              difficulty: "easy",
            },
            {
              id: "ps-why-the-shell-q4",
              prompt: "PowerShell cmdlets typically follow which naming pattern?",
              choices: [
                { id: "a", text: "noun-verb" },
                { id: "b", text: "Verb-Noun" },
                { id: "c", text: "random abbreviations only" },
                { id: "d", text: "file.exe names" },
              ],
              correctChoiceId: "b",
              explanation: "Verb-Noun pairs like Get-Process tell you the action and target.",
              difficulty: "easy",
            },
            {
              id: "ps-why-the-shell-q5",
              prompt: "Do you need programming experience to start with read-only PowerShell commands?",
              choices: [
                { id: "a", text: "Yes — only developers may open PowerShell" },
                { id: "b", text: "No — Get-* cmdlets are safe exploratory first steps" },
                { id: "c", text: "Yes — you must know C# first" },
                { id: "d", text: "No — but you should run Remove-Item first" },
              ],
              correctChoiceId: "b",
              explanation: "Read-only Get cmdlets let beginners explore without changing the system.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps-why-the-shell-b1",
              prompt: "PowerShell is primarily used on Windows for:",
              choices: [
                { id: "a", text: "Playing games only" },
                { id: "b", text: "Administration and automation" },
                { id: "c", text: "Replacing the kernel" },
                { id: "d", text: "Drawing network diagrams" },
              ],
              correctChoiceId: "b",
              explanation: "PowerShell is Microsoft's shell for admin and automation tasks.",
            },
            {
              id: "ps-why-the-shell-b2",
              prompt: "A GUI weakness at scale is:",
              choices: [
                { id: "a", text: "It shows icons" },
                { id: "b", text: "Manual steps do not repeat easily across many systems" },
                { id: "c", text: "It uses colors" },
                { id: "d", text: "It requires a monitor" },
              ],
              correctChoiceId: "b",
              explanation: "GUIs are poor for bulk repeat work — shells script the same steps.",
            },
            {
              id: "ps-why-the-shell-b3",
              prompt: "PowerShell pipelines pass:",
              choices: [
                { id: "a", text: "Objects with properties" },
                { id: "b", text: "Only binary executables" },
                { id: "c", text: "GUI windows" },
                { id: "d", text: "Registry hives only" },
              ],
              correctChoiceId: "a",
              explanation: "Object pipelines are PowerShell's core advantage over text-only shells.",
            },
            {
              id: "ps-why-the-shell-b4",
              prompt: "Which is a safe first cmdlet family?",
              choices: [
                { id: "a", text: "Remove-*" },
                { id: "b", text: "Get-*" },
                { id: "c", text: "Format-Table -AutoSize only" },
                { id: "d", text: "Stop-Computer -Force" },
              ],
              correctChoiceId: "b",
              explanation: "Get-* cmdlets read data without changing system state.",
            },
            {
              id: "ps-why-the-shell-b5",
              prompt: "Scripting in IT usually starts as:",
              choices: [
                { id: "a", text: "Saved commands that worked once in the shell" },
                { id: "b", text: "Random keystrokes" },
                { id: "c", text: "Deleting system32" },
                { id: "d", text: "Installing games" },
              ],
              correctChoiceId: "a",
              explanation: "Most scripts begin as command lines you ran successfully by hand.",
            },
            {
              id: "ps-why-the-shell-b6",
              prompt: "Cross-platform PowerShell means:",
              choices: [
                { id: "a", text: "It runs on Windows, Linux, and macOS" },
                { id: "b", text: "It only runs in Azure" },
                { id: "c", text: "It replaces all operating systems" },
                { id: "d", text: "It requires Mainframe access" },
              ],
              correctChoiceId: "a",
              explanation: "PowerShell 7+ installs on multiple OSes; 5.1 ships with Windows.",
            },
            {
              id: "ps-why-the-shell-b7",
              prompt: "Audit trails favor shell work because:",
              choices: [
                { id: "a", text: "Commands can be logged and replayed" },
                { id: "b", text: "GUIs never leave traces" },
                { id: "c", text: "Shells hide all actions" },
                { id: "d", text: "Screenshots are illegal" },
              ],
              correctChoiceId: "a",
              explanation: "Logged commands document exactly what ran — important for compliance.",
            },
            {
              id: "ps-why-the-shell-b8",
              prompt: "Help desk tier-1 can use PowerShell to:",
              choices: [
                { id: "a", text: "Quickly gather read-only system info" },
                { id: "b", text: "Reformat all drives by default" },
                { id: "c", text: "Skip ticket documentation" },
                { id: "d", text: "Disable all security" },
              ],
              correctChoiceId: "a",
              explanation: "Read-only queries speed up triage without elevated change risk.",
            },
          ],
          flashcards: [
            {
              id: "ps-why-the-shell-f1",
              front: "What is a shell?",
              back: "A program that reads text commands and runs them — PowerShell on Windows",
            },
            {
              id: "ps-why-the-shell-f2",
              front: "GUI vs shell for IT?",
              back: "GUI for one-offs · shell for repeat work and automation",
            },
            {
              id: "ps-why-the-shell-f3",
              front: "Cmdlet naming pattern?",
              back: "Verb-Noun — Get-Process, Set-Location",
            },
            {
              id: "ps-why-the-shell-f4",
              front: "Safe first cmdlets?",
              back: "Get-* read-only cmdlets — Get-Location, Get-ChildItem",
            },
            {
              id: "ps-why-the-shell-f5",
              front: "Why objects in pipelines?",
              back: "Structured data you can filter without parsing text",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
        {
          id: "ps-cmdlets-pipeline",
          name: "Cmdlets & Pipeline",
          prerequisites: ["ps-why-the-shell"],
          objectives: ["PS-M01-O4", "PS-M01-O5", "PS-M01-O6"],
          lesson: {
            title: "Cmdlets and the Pipeline",
            content: `PowerShell commands are cmdlets: Verb-Noun pairs like Get-Process, Set-Location, or Stop-Service. The verb tells you the action — Get retrieves, Set changes, New creates, Remove deletes. The noun tells you the target — Process, Service, ChildItem. This naming convention lets you guess cmdlet names before you memorize them.

Parameters refine behavior. Get-ChildItem -Path C:\\Logs -Recurse lists files recursively. Many cmdlets support -Filter or pipeline input. Always check Get-Help when parameters confuse you — do not guess destructive flags.

The pipeline character (|) chains cmdlets left to right. Output from the left cmdlet becomes input to the right. In Unix shells, pipelines pass text lines. PowerShell passes objects — structured records with properties like Name, CPU, and Id. That difference matters: you filter with Where-Object on properties, not with grep and awk on strings.

Example flow: Get-Process passes process objects to Where-Object { $_.CPU -gt 100 }, which passes matching objects to Select-Object Name, CPU. Each stage receives typed objects, not scrambled text.

Common pipeline cmdlets you will use constantly: Where-Object filters, Select-Object picks columns, Sort-Object orders, Measure-Object counts or sums, Format-Table displays. Format-* cmdlets should usually sit at the end — they convert objects to display strings and break further pipeline processing.

Think of the pipeline as an assembly line: each station receives parts, does one job, passes parts onward. Your job is picking the right stations in order — get data, filter, shape, sort, then format or export.

Practice reading pipelines aloud left to right: Get-Service means fetch services; Where-Object means keep some; Select-Object means show these columns. If you cannot explain each pipe segment, run Get-Help on that cmdlet before executing on a production machine.

Discovery cmdlets reduce memorization. Get-Command lists commands; Get-Command -Noun Service finds service-related cmdlets. Get-Help Get-Service -Examples shows copy-paste patterns vetted by Microsoft. Build the habit: name the goal, find the noun, pick the verb, read help, then run read-only first.

When output scrolls past, pipe to Select-Object -First 10 while learning — smaller samples are easier to read. Save full pipelines in a .ps1 only after each segment works interactively. That incremental approach prevents compound errors where you cannot tell which cmdlet failed.

Record one working pipeline per week in personal notes — Verb-Noun pattern, parameters used, sample output description. In six weeks you own a library of admin patterns faster than flashcards alone. Share sanitized examples with teammates learning alongside you.

Module 1 quiz and flashcards reinforce cmdlet names you will reuse through Module 5 capstone — do not skip them because they feel basic. Naming fluency speeds every later lab when you stop guessing Get-ChildItem versus Get-Content under pressure.`,
            experience: PS_CMDLETS_PIPELINE_EXPERIENCE,
          },
          lightbulbMoment:
            "The pipeline passes objects, not text — filter on properties, not parsed strings.",
          keyFacts: [
            "Cmdlets use Verb-Noun names: Get-, Set-, New-, Remove-",
            "The pipeline | chains cmdlets left to right",
            "PowerShell passes objects through the pipeline",
            "Where-Object filters · Select-Object shapes output",
            "Format-* cmdlets usually belong at the end of a pipeline",
            "Get-Help shows parameters and examples for any cmdlet",
          ],
          guidedExample: {
            title: "Build a Three-Stage Pipeline",
            steps: [
              "Run Get-Process alone — note object output with Name, Id, CPU columns.",
              "Pipe to Where-Object { $_.CPU -gt 50 } to keep busy processes only.",
              "Pipe to Select-Object Name, CPU to show just those two properties.",
              "Run Get-Help Where-Object -Examples if the $_ syntax looks unfamiliar.",
              "Add Sort-Object CPU -Descending before Select-Object to see hottest first.",
              "Avoid Format-Table in the middle — it stops object flow to later cmdlets.",
            ],
          },
          commonMistakes: [
            "Putting Format-Table in the middle of a pipeline then wondering why export fails",
            "Treating pipeline output like CMD text instead of objects with properties",
            "Guessing cmdlet names instead of using Get-Command -Noun Process or Get-Help",
            "Forgetting that the left cmdlet's output type must match what the right cmdlet expects",
          ],
          examTraps: [
            "Coworkers pipe to findstr like CMD — Where-Object is the PowerShell filter",
            "Using Select-Object and Where-Object in the wrong order for the desired result",
            "Assuming | passes strings — scripts break when properties are available but ignored",
            "Confusing aliases like dir with cmdlet names in documentation or scripts",
          ],
          realWorldScenario:
            "A server is slow. You run Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, CPU and immediately see which process to investigate — no Task Manager RDP session needed.",
          quiz: [
            {
              id: "ps-cmdlets-pipeline-q1",
              prompt: "Which cmdlet name follows the Verb-Noun pattern?",
              choices: [
                { id: "a", text: "list-files" },
                { id: "b", text: "Get-ChildItem" },
                { id: "c", text: "dir.exe" },
                { id: "d", text: "processlist" },
              ],
              correctChoiceId: "b",
              explanation: "PowerShell cmdlets are Verb-Noun — Get-ChildItem lists items in a container.",
              difficulty: "easy",
            },
            {
              id: "ps-cmdlets-pipeline-q2",
              prompt: "What does the pipeline operator | do?",
              choices: [
                { id: "a", text: "Runs two commands in parallel always" },
                { id: "b", text: "Sends left cmdlet output as input to the right cmdlet" },
                { id: "c", text: "Comments out the next command" },
                { id: "d", text: "Redirects output to a file only" },
              ],
              correctChoiceId: "b",
              explanation: "The pipeline chains cmdlets — output flows left to right.",
              difficulty: "easy",
            },
            {
              id: "ps-cmdlets-pipeline-q3",
              prompt: "PowerShell pipelines primarily pass:",
              choices: [
                { id: "a", text: "Objects with properties" },
                { id: "b", text: "Only plain text lines" },
                { id: "c", text: "Binary .exe files" },
                { id: "d", text: "HTML pages" },
              ],
              correctChoiceId: "a",
              explanation: "Objects carry properties you filter and select without string parsing.",
              difficulty: "easy",
            },
            {
              id: "ps-cmdlets-pipeline-q4",
              prompt: "Which cmdlet filters objects in a pipeline?",
              choices: [
                { id: "a", text: "Format-List" },
                { id: "b", text: "Where-Object" },
                { id: "c", text: "Out-File" },
                { id: "d", text: "Get-Help" },
              ],
              correctChoiceId: "b",
              explanation: "Where-Object keeps objects matching a condition.",
              difficulty: "easy",
            },
            {
              id: "ps-cmdlets-pipeline-q5",
              prompt: "Why avoid Format-Table mid-pipeline?",
              choices: [
                { id: "a", text: "It converts objects to display strings and stops object flow" },
                { id: "b", text: "It is deprecated" },
                { id: "c", text: "It deletes files" },
                { id: "d", text: "It requires admin rights always" },
              ],
              correctChoiceId: "a",
              explanation: "Format cmdlets render for the screen — later cmdlets cannot process that output as objects.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps-cmdlets-pipeline-b1",
              prompt: "Get-Help is used to:",
              choices: [
                { id: "a", text: "Show cmdlet syntax and examples" },
                { id: "b", text: "Delete help files" },
                { id: "c", text: "Restart the computer" },
                { id: "d", text: "Format disks" },
              ],
              correctChoiceId: "a",
              explanation: "Get-Help is the built-in documentation command.",
            },
            {
              id: "ps-cmdlets-pipeline-b2",
              prompt: "Select-Object in a pipeline:",
              choices: [
                { id: "a", text: "Picks which properties to keep" },
                { id: "b", text: "Stops all services" },
                { id: "c", text: "Installs Windows updates" },
                { id: "d", text: "Changes file permissions" },
              ],
              correctChoiceId: "a",
              explanation: "Select-Object shapes output columns or limits count with -First.",
            },
            {
              id: "ps-cmdlets-pipeline-b3",
              prompt: "In Where-Object { $_.Status -eq 'Running' }, $_ represents:",
              choices: [
                { id: "a", text: "The current pipeline object" },
                { id: "b", text: "The keyboard" },
                { id: "c", text: "The last error" },
                { id: "d", text: "The hostname only" },
              ],
              correctChoiceId: "a",
              explanation: "$_ is the current object in a script block filter.",
            },
            {
              id: "ps-cmdlets-pipeline-b4",
              prompt: "Sort-Object CPU -Descending sorts by:",
              choices: [
                { id: "a", text: "CPU highest first" },
                { id: "b", text: "Alphabetical name only" },
                { id: "c", text: "Random order" },
                { id: "d", text: "File size" },
              ],
              correctChoiceId: "a",
              explanation: "-Descending puts largest CPU values first.",
            },
            {
              id: "ps-cmdlets-pipeline-b5",
              prompt: "Measure-Object -Line is often used to:",
              choices: [
                { id: "a", text: "Count lines or objects" },
                { id: "b", text: "Draw graphs" },
                { id: "c", text: "Mount drives" },
                { id: "d", text: "Edit the registry" },
              ],
              correctChoiceId: "a",
              explanation: "Measure-Object aggregates — count, sum, average depending on input.",
            },
            {
              id: "ps-cmdlets-pipeline-b6",
              prompt: "Verb in Stop-Service tells you:",
              choices: [
                { id: "a", text: "The action — stopping" },
                { id: "b", text: "The server name" },
                { id: "c", text: "The GUI color" },
                { id: "d", text: "The license key" },
              ],
              correctChoiceId: "a",
              explanation: "Verbs describe actions — Get, Set, New, Remove, Stop.",
            },
            {
              id: "ps-cmdlets-pipeline-b7",
              prompt: "Get-Command -Noun Service lists:",
              choices: [
                { id: "a", text: "Cmdlets whose noun is Service" },
                { id: "b", text: "Running services only" },
                { id: "c", text: "All files on disk" },
                { id: "d", text: "Network adapters" },
              ],
              correctChoiceId: "a",
              explanation: "Get-Command discovers cmdlets when you know the noun or verb.",
            },
            {
              id: "ps-cmdlets-pipeline-b8",
              prompt: "Pipeline order Get-Process | Select-Object Name | Where-Object { $_.Name -eq 'svchost' } is:",
              choices: [
                { id: "a", text: "Wrong — filter before selecting when possible for clarity" },
                { id: "b", text: "Illegal syntax" },
                { id: "c", text: "Required by Microsoft" },
                { id: "d", text: "The only way to filter" },
              ],
              correctChoiceId: "a",
              explanation: "Filtering before selecting can be clearer; order changes which properties exist.",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "ps-cmdlets-pipeline-f1",
              front: "Cmdlet naming pattern?",
              back: "Verb-Noun — e.g. Get-Process, Stop-Service, New-Item",
            },
            {
              id: "ps-cmdlets-pipeline-f2",
              front: "What does | do?",
              back: "Pipeline — sends output of the left cmdlet to the right cmdlet",
            },
            {
              id: "ps-cmdlets-pipeline-f3",
              front: "Filter cmdlet?",
              back: "Where-Object — keep objects matching a condition",
            },
            {
              id: "ps-cmdlets-pipeline-f4",
              front: "Shape columns cmdlet?",
              back: "Select-Object — pick properties or -First N items",
            },
            {
              id: "ps-cmdlets-pipeline-f5",
              front: "Format-Table placement?",
              back: "Usually last — it converts objects to display strings",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 25,
          difficulty: "easy",
        },
        {
          id: "ps-first-commands-safely",
          name: "First Commands Safely",
          prerequisites: ["ps-cmdlets-pipeline"],
          objectives: ["PS-M01-O7", "PS-M01-O8", "PS-M01-O9"],
          lesson: {
            title: "First Commands Safely",
            content: `Before running anything unfamiliar, read the docs: Get-Help Get-ChildItem or Get-ChildItem -?. Help shows syntax, parameters, and examples. Update help once with Update-Help if examples are missing — requires internet on many systems.

Start with read-only Get-* cmdlets. Get-Location shows your current folder. Get-ChildItem lists items in that folder — aliases dir and ls work but scripts should use full cmdlet names. Get-Process lists running programs. Get-Service lists Windows services. None of these change system state by default.

For cmdlets that modify or delete, preview first. -WhatIf shows what would happen without doing it. -Confirm prompts yes/no before executing. Example: Remove-Item .\\temp\\old.log -WhatIf. Many destructive cmdlets support these switches — check Get-Help.

Open Windows Terminal or PowerShell from the Start menu — same window every time builds muscle memory. If a command errors, read the red message: often it names the bad parameter or missing path. Run Get-Help on that cmdlet before retrying blindly.

Your safety stack: Get-Help before new cmdlets, Get-* for exploration, -WhatIf before Remove/Stop/Restart, and copy-paste paths carefully — PowerShell uses backslashes on Windows but also accepts forward slashes. Complete the First Commands lab on this topic to practice location, listing, help, and one simple pipeline.

Build a personal checklist taped to your monitor if needed: Help, Read, Preview, Execute. Help means Get-Help or -?. Read means start with Get-* even when you intend to change something — know current state first. Preview means -WhatIf or listing targets with Get-ChildItem before Remove-Item. Execute means run the real command only after the prior steps make sense.

Error messages are data, not insults. Cannot find path means typo or wrong drive. Access denied means elevation or permissions — do not hammer -Force until you understand why. Parameter cannot be found means wrong spelling — compare to Get-Help parameter list character by character.

Keep a scratch log file during labs: command you ran, one-line result, date. Future you — and your teammates — inherit scripts from those notes. The First Commands lab installs the Windows PowerShell external resource; you need a real session, not screenshots, to finish Module 1.

Teach a colleague one Get-* cmdlet you learned — explaining aloud confirms understanding better than rereading. If you cannot teach Get-Location and Get-ChildItem in two sentences, rerun the lesson experience before Module 2 file navigation.

The external Windows PowerShell resource documents install options for PowerShell 7 and Windows Terminal — skim install notes even if 5.1 already works. Knowing where official docs live beats random blog posts when your environment differs from lab examples.`,
            experience: PS_FIRST_COMMANDS_SAFELY_EXPERIENCE,
          },
          keyFacts: [
            "Get-Help and -? show syntax and examples",
            "Get-* cmdlets are read-only — safe first steps",
            "-WhatIf previews destructive commands without running them",
            "-Confirm prompts before executing risky actions",
            "Windows Terminal or PowerShell — same window every time",
            "Read error messages — they usually name the bad parameter or path",
          ],
          guidedExample: {
            title: "Safe Exploration Workflow",
            steps: [
              "Open Windows Terminal and launch PowerShell.",
              "Run Get-Location — note your starting path.",
              "Run Get-Help Get-ChildItem -Examples — pick one example to try.",
              "Run Get-ChildItem and observe files listed as objects.",
              "Run Get-Process | Select-Object -First 3 Name, Id — a safe mini-pipeline.",
              "Run Get-Help Remove-Item -Parameter WhatIf — read how preview works (no need to delete).",
            ],
          },
          commonMistakes: [
            "Running Remove-Item or Stop-Computer without reading Get-Help first",
            "Ignoring -WhatIf and -Confirm on destructive cmdlets",
            "Copy-pasting admin commands from the internet without understanding them",
            "Closing the terminal immediately on red errors instead of reading the message",
          ],
          examTraps: [
            "Senior admin sends a one-liner — running it without -WhatIf on production",
            "Assuming dir and ls are cmdlets — they are aliases for Get-ChildItem",
            "Thinking PowerShell must run as admin for all commands — many Get-* work as standard user",
            "Confusing -WhatIf (preview) with -Confirm (prompt) — both help but behave differently",
          ],
          realWorldScenario:
            "You need to clean old log files in C:\\Logs. Before Remove-Item, you run Get-ChildItem C:\\Logs -Filter *.log | Remove-Item -WhatIf and review the list of files that would be deleted. Your manager signs off; then you remove -WhatIf.",
          quiz: [
            {
              id: "ps-first-commands-safely-q1",
              prompt: "You need to learn an unfamiliar cmdlet. What do you run first?",
              choices: [
                { id: "a", text: "Remove-Item -Recurse" },
                { id: "b", text: "Get-Help <cmdlet>" },
                { id: "c", text: "Restart-Computer -Force" },
                { id: "d", text: "Close the terminal" },
              ],
              correctChoiceId: "b",
              explanation: "Get-Help shows syntax and examples before you run a cmdlet you do not know.",
              difficulty: "easy",
            },
            {
              id: "ps-first-commands-safely-q2",
              prompt: "Which cmdlet shows your current folder?",
              choices: [
                { id: "a", text: "Get-Location" },
                { id: "b", text: "Set-Content" },
                { id: "c", text: "Stop-Process" },
                { id: "d", text: "New-Service" },
              ],
              correctChoiceId: "a",
              explanation: "Get-Location (alias pwd) returns the current path.",
              difficulty: "easy",
            },
            {
              id: "ps-first-commands-safely-q3",
              prompt: "What does -WhatIf do on Remove-Item?",
              choices: [
                { id: "a", text: "Deletes files silently" },
                { id: "b", text: "Shows what would be deleted without deleting" },
                { id: "c", text: "Formats the drive" },
                { id: "d", text: "Disables confirmation forever" },
              ],
              correctChoiceId: "b",
              explanation: "-WhatIf is a dry run — preview only.",
              difficulty: "easy",
            },
            {
              id: "ps-first-commands-safely-q4",
              prompt: "Which family of cmdlets is safest for beginners?",
              choices: [
                { id: "a", text: "Remove-*" },
                { id: "b", text: "Get-*" },
                { id: "c", text: "Clear-*" },
                { id: "d", text: "Stop-Computer" },
              ],
              correctChoiceId: "b",
              explanation: "Get-* cmdlets read information without changing state.",
              difficulty: "easy",
            },
            {
              id: "ps-first-commands-safely-q5",
              prompt: "A command returns red error text. Best next step?",
              choices: [
                { id: "a", text: "Read the error and run Get-Help on the cmdlet" },
                { id: "b", text: "Run the same command ten times faster" },
                { id: "c", text: "Uninstall PowerShell" },
                { id: "d", text: "Ignore it — errors never matter" },
              ],
              correctChoiceId: "a",
              explanation: "Errors usually identify bad parameters or paths — help docs clarify fixes.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps-first-commands-safely-b1",
              prompt: "Get-ChildItem is aliased as:",
              choices: [
                { id: "a", text: "dir and ls" },
                { id: "b", text: "cd only" },
                { id: "c", text: "help" },
                { id: "d", text: "cls" },
              ],
              correctChoiceId: "a",
              explanation: "dir and ls are common aliases — scripts should use Get-ChildItem.",
            },
            {
              id: "ps-first-commands-safely-b2",
              prompt: "-Confirm on a cmdlet:",
              choices: [
                { id: "a", text: "Prompts before executing" },
                { id: "b", text: "Skips all safety checks" },
                { id: "c", text: "Runs in the background" },
                { id: "d", text: "Exports to CSV" },
              ],
              correctChoiceId: "a",
              explanation: "-Confirm asks yes/no before proceeding.",
            },
            {
              id: "ps-first-commands-safely-b3",
              prompt: "Update-Help requires:",
              choices: [
                { id: "a", text: "Internet access on many systems to download help" },
                { id: "b", text: "Deleting System32" },
                { id: "c", text: "A GitHub account" },
                { id: "d", text: "Linux installed" },
              ],
              correctChoiceId: "a",
              explanation: "Help content downloads from Microsoft when online.",
            },
            {
              id: "ps-first-commands-safely-b4",
              prompt: "Get-Process without parameters:",
              choices: [
                { id: "a", text: "Lists running processes on the local machine" },
                { id: "b", text: "Stops all processes" },
                { id: "c", text: "Installs updates" },
                { id: "d", text: "Changes passwords" },
              ],
              correctChoiceId: "a",
              explanation: "Get-Process is read-only — lists processes.",
            },
            {
              id: "ps-first-commands-safely-b5",
              prompt: "Cmdlet -? is shorthand for:",
              choices: [
                { id: "a", text: "Get-Help on that cmdlet" },
                { id: "b", text: "Remove the cmdlet" },
                { id: "c", text: "Run as administrator" },
                { id: "d", text: "Format output as JSON" },
              ],
              correctChoiceId: "a",
              explanation: "-? quickly opens help for the command you typed.",
            },
            {
              id: "ps-first-commands-safely-b6",
              prompt: "Windows Terminal is recommended because:",
              choices: [
                { id: "a", text: "Better tabs, fonts, and consistent PowerShell launch" },
                { id: "b", text: "It replaces Active Directory" },
                { id: "c", text: "It removes the need for cmdlets" },
                { id: "d", text: "It only runs on Linux" },
              ],
              correctChoiceId: "a",
              explanation: "Windows Terminal is a modern host for PowerShell and other shells.",
            },
            {
              id: "ps-first-commands-safely-b7",
              prompt: "Before Remove-Item on many files, best practice:",
              choices: [
                { id: "a", text: "Get-ChildItem first to verify the target list" },
                { id: "b", text: "Skip listing — speed matters" },
                { id: "c", text: "Use -Force always without looking" },
                { id: "d", text: "Disable backups" },
              ],
              correctChoiceId: "a",
              explanation: "List first, preview with -WhatIf, then delete.",
            },
            {
              id: "ps-first-commands-safely-b8",
              prompt: "PowerShell 5.1 on Windows:",
              choices: [
                { id: "a", text: "Ships with Windows — no separate install required" },
                { id: "b", text: "Must be purchased separately" },
                { id: "c", text: "Is only in Azure" },
                { id: "d", text: "Cannot run Get-Help" },
              ],
              correctChoiceId: "a",
              explanation: "Windows includes PowerShell 5.1; PowerShell 7+ is optional cross-platform.",
            },
          ],
          flashcards: [
            {
              id: "ps-first-commands-safely-f1",
              front: "Unfamiliar cmdlet — first step?",
              back: "Get-Help <cmdlet> or <cmdlet> -?",
            },
            {
              id: "ps-first-commands-safely-f2",
              front: "What does -WhatIf do?",
              back: "Shows what would happen without executing — dry run",
            },
            {
              id: "ps-first-commands-safely-f3",
              front: "What does -Confirm do?",
              back: "Prompts yes/no before executing the action",
            },
            {
              id: "ps-first-commands-safely-f4",
              front: "Safe read cmdlets?",
              back: "Get-Location, Get-ChildItem, Get-Process, Get-Service",
            },
            {
              id: "ps-first-commands-safely-f5",
              front: "Command errors — what next?",
              back: "Read the message, then Get-Help on the cmdlet",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-first-commands",
              title: "First PowerShell Commands",
              type: "external-lab",
              instructions: `Open Windows Terminal or PowerShell on your PC.

1. Run Get-Location — note your current folder path.
2. Run Get-ChildItem — list files in that folder (alias: dir or ls).
3. Run Get-Help Get-Process -Examples — read one example, then run Get-Process | Select-Object -First 3.
4. Run Get-Help Get-ChildItem -Parameter WhatIf (read only — no need to delete anything).

Write down one thing each command printed. If a command errors, run Get-Help on that cmdlet before retrying.`,
              estimatedMinutes: 20,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Opened PowerShell or Windows Terminal",
                "Ran Get-Location and Get-ChildItem successfully",
                "Used Get-Help on at least one cmdlet",
                "Ran a pipeline (command | command) at least once",
              ],
              relatedTopicIds: [
                "ps-why-the-shell",
                "ps-cmdlets-pipeline",
                "ps-first-commands-safely",
              ],
              order: 1,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 30,
          difficulty: "easy",
        },
      ],
    },
    {
      id: "powershell-files-objects",
      name: "Module 2 — Files & Objects",
      topics: [
        {
          id: "ps-paths-and-navigation",
          name: "Paths & Navigation",
          prerequisites: ["ps-first-commands-safely"],
          objectives: ["PS-M02-O1", "PS-M02-O2", "PS-M02-O3"],
          lesson: {
            title: "Paths and Navigation",
            content: `Every file operation starts with knowing where you are and where things live. Get-Location (alias pwd) prints the current directory. Set-Location (alias cd) changes it — Set-Location C:\\Users or cd .. to go up one level.

Paths can be relative or absolute. Relative paths start from your current location: .\\Documents\\notes.txt means a file in a Documents subfolder. Absolute paths start from a drive root: C:\\Users\\name\\Documents\\notes.txt. PowerShell accepts backslashes on Windows and often forward slashes too.

The provider model matters. PowerShell navigates more than the file system. cd HKLM:\\Software jumps into the registry as if it were folders. Cert: and Env: are other drives. Get-ChildItem works on any provider path — same cmdlet, different data source.

Wildcards help listing: Get-ChildItem *.log or -Filter *.log in a folder. -Recurse walks subfolders — use carefully on large drives. LiteralPath vs Path: when filenames contain brackets or wildcards, use -LiteralPath so characters are not interpreted as patterns.

Tab completion is your friend: type Set-Location C:\\Us and press Tab to cycle matches. Copy paths from File Explorer address bar when typing long paths. Navigation errors usually mean a typo, missing quotes around paths with spaces, or wrong drive letter.

Procedural habit: always run Get-Location before and after Set-Location when learning. You should be able to answer where am I without guessing. For ticket work, paste the full absolute path into notes — relative paths confuse the next shift who starts elsewhere.

Join-Path builds paths safely: Join-Path $env:USERPROFILE 'Documents\\report.csv' avoids doubled or missing backslashes. Test-Path checks existence before you copy or delete — returns True or False. Combined: if (Test-Path $logPath) { Get-Content $logPath -Tail 20 } prevents silly errors on typos.

Network paths use UNC: Set-Location '\\\\server\\share\\folder' requires quotes when spaces appear. Mapped drives like Z: work but break when another user runs the script — prefer UNC in shared automation. Elevation does not fix bad paths; fix the string first.

Before deleting or archiving by path, list with Get-ChildItem and count with Measure-Object — matches ticket scope. Off-by-one folder typos cause incident-level data loss; thirty seconds of listing prevents hours of restore calls.

Provider awareness prevents silly mistakes: you cannot Set-Location to a file path — only containers. Get-Item retrieves a file object while Get-ChildItem lists inside folders. Mixing them produces errors that look scary but mean wrong cmdlet for the target type.

Copy-Item and Move-Item reuse path skills from this topic — always verify source with Get-ChildItem before bulk copies. Path literacy here prevents the wrong-folder incidents that dominate junior admin postmortems.`,
            experience: PS_PATHS_AND_NAVIGATION_EXPERIENCE,
          },
          keyFacts: [
            "Get-Location shows current path · Set-Location (cd) changes it",
            "Relative paths start from current location · absolute from drive root",
            "PowerShell providers expose FileSystem, Registry, Env:, and more",
            "Use -LiteralPath when filenames contain [ ] or * characters",
            "-Recurse lists subfolders — can be slow on large trees",
            "Tab completion reduces typos on long paths",
          ],
          guidedExample: {
            title: "Navigate and List Safely",
            steps: [
              "Run Get-Location — note your starting path.",
              "Run Set-Location $env:USERPROFILE\\Documents then Get-Location again.",
              "Run Get-ChildItem — list files in Documents.",
              "Run Set-Location .. then Get-ChildItem *.txt -ErrorAction SilentlyContinue.",
              "Run Get-ChildItem Env: | Select-Object -First 5 Name, Value — provider demo.",
              "Return home with Set-Location ~ — ~ expands to your profile folder.",
            ],
          },
          commonMistakes: [
            "Forgetting quotes around paths with spaces: cd C:\\Program Files fails without quotes",
            "Using -Path when brackets in filenames need -LiteralPath",
            "Running Get-ChildItem -Recurse from C:\\ without narrowing — very slow",
            "Confusing .. (parent) with . (current directory)",
          ],
          examTraps: [
            "Copying Explorer paths that include quotes wrong — PowerShell needs consistent quoting",
            "Assuming cd only works on disks — registry and cert paths use same cmdlets",
            "Using dir /s mentality from CMD without understanding -Recurse scope",
            "Mixing relative paths after Set-Location without re-checking Get-Location",
          ],
          realWorldScenario:
            "A log bundle ticket says errors are in C:\\ProgramData\\Vendor\\Logs. You Set-Location there, Get-ChildItem -Filter *.log | Sort-Object LastWriteTime -Descending | Select-Object -First 5, and attach the newest files to the ticket — no Explorer digging.",
          quiz: [
            {
              id: "ps-paths-and-navigation-q1",
              prompt: "Which cmdlet changes the current directory?",
              choices: [
                { id: "a", text: "Get-Location" },
                { id: "b", text: "Set-Location" },
                { id: "c", text: "Get-Content" },
                { id: "d", text: "Measure-Object" },
              ],
              correctChoiceId: "b",
              explanation: "Set-Location (cd) changes directory; Get-Location shows it.",
              difficulty: "easy",
            },
            {
              id: "ps-paths-and-navigation-q2",
              prompt: "An absolute path on Windows typically:",
              choices: [
                { id: "a", text: "Starts with a drive letter like C:\\" },
                { id: "b", text: "Has no drive letter ever" },
                { id: "c", text: "Uses only forward slashes and no drive" },
                { id: "d", text: "Requires HKLM:" },
              ],
              correctChoiceId: "a",
              explanation: "Absolute paths start from root — C:\\Users\\... on Windows.",
              difficulty: "easy",
            },
            {
              id: "ps-paths-and-navigation-q3",
              prompt: "Why use -LiteralPath?",
              choices: [
                { id: "a", text: "When wildcards or brackets should not be interpreted" },
                { id: "b", text: "To run commands as SYSTEM" },
                { id: "c", text: "To format output as HTML" },
                { id: "d", text: "To delete registry keys only" },
              ],
              correctChoiceId: "a",
              explanation: "-LiteralPath treats special characters literally.",
              difficulty: "medium",
            },
            {
              id: "ps-paths-and-navigation-q4",
              prompt: "Get-ChildItem Env: lists:",
              choices: [
                { id: "a", text: "Environment variables via the Env: provider" },
                { id: "b", text: "Only .env files" },
                { id: "c", text: "Network adapters" },
                { id: "d", text: "Windows services" },
              ],
              correctChoiceId: "a",
              explanation: "Env: is a PowerShell drive for environment variables.",
              difficulty: "medium",
            },
            {
              id: "ps-paths-and-navigation-q5",
              prompt: "cd .. moves to:",
              choices: [
                { id: "a", text: "The parent directory" },
                { id: "b", text: "The root of the universe" },
                { id: "c", text: "A hidden admin share only" },
                { id: "d", text: "The recycle bin" },
              ],
              correctChoiceId: "a",
              explanation: ".. is the parent folder relative to current location.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            { id: "ps-paths-and-navigation-b1", prompt: "Get-Location alias?", choices: [{ id: "a", text: "pwd" }, { id: "b", text: "cls" }, { id: "c", text: "man" }, { id: "d", text: "echo" }], correctChoiceId: "a", explanation: "pwd is the common alias for Get-Location." },
            { id: "ps-paths-and-navigation-b2", prompt: "Path with spaces needs:", choices: [{ id: "a", text: "Quotes around the path" }, { id: "b", text: "No cmdlet name" }, { id: "c", text: "Admin always" }, { id: "d", text: "Binary mode" }], correctChoiceId: "a", explanation: "Quote paths containing spaces." },
            { id: "ps-paths-and-navigation-b3", prompt: "-Recurse on Get-ChildItem:", choices: [{ id: "a", text: "Includes subfolders" }, { id: "b", text: "Deletes files" }, { id: "c", text: "Formats disk" }, { id: "d", text: "Stops services" }], correctChoiceId: "a", explanation: "-Recurse walks the directory tree." },
            { id: "ps-paths-and-navigation-b4", prompt: "~ in Set-Location ~ means:", choices: [{ id: "a", text: "Current user's home directory" }, { id: "b", text: "Temp folder only" }, { id: "c", text: "System32" }, { id: "d", text: "Network share" }], correctChoiceId: "a", explanation: "~ expands to the user profile path." },
            { id: "ps-paths-and-navigation-b5", prompt: "HKLM:\\ is accessed via:", choices: [{ id: "a", text: "Registry provider" }, { id: "b", text: "FTP provider" }, { id: "c", text: "SMTP" }, { id: "d", text: "WMI only" }], correctChoiceId: "a", explanation: "Registry hives appear as drives in PowerShell." },
            { id: "ps-paths-and-navigation-b6", prompt: ".\\file.txt means:", choices: [{ id: "a", text: "file.txt in current directory" }, { id: "b", text: "file on Z drive only" }, { id: "c", text: "Deleted file" }, { id: "d", text: "Network path" }], correctChoiceId: "a", explanation: ".\\ is relative to current location." },
            { id: "ps-paths-and-navigation-b7", prompt: "-Filter *.log is faster than:", choices: [{ id: "a", text: "Piping all items to Where-Object when provider supports -Filter" }, { id: "b", text: "Using Get-ChildItem at all" }, { id: "c", text: "Tab completion" }, { id: "d", text: "Get-Location" }], correctChoiceId: "a", explanation: "-Filter pushes filtering to the provider when possible." },
            { id: "ps-paths-and-navigation-b8", prompt: "Tab completion helps:", choices: [{ id: "a", text: "Finish path and cmdlet names with fewer typos" }, { id: "b", text: "Bypass permissions" }, { id: "c", text: "Run scripts hidden" }, { id: "d", text: "Disable logging" }], correctChoiceId: "a", explanation: "Tab cycles matching paths and command names." },
          ],
          flashcards: [
            { id: "ps-paths-and-navigation-f1", front: "Show current folder?", back: "Get-Location (pwd)" },
            { id: "ps-paths-and-navigation-f2", front: "Change folder?", back: "Set-Location path (cd)" },
            { id: "ps-paths-and-navigation-f3", front: "LiteralPath when?", back: "Filenames with [ ] * ? — no wildcard interpretation" },
            { id: "ps-paths-and-navigation-f4", front: "List all env vars?", back: "Get-ChildItem Env:" },
            { id: "ps-paths-and-navigation-f5", front: "Parent directory?", back: "cd .. or Set-Location .." },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 25,
          difficulty: "easy",
        },
        {
          id: "ps-objects-and-properties",
          name: "Objects & Properties",
          prerequisites: ["ps-paths-and-navigation"],
          objectives: ["PS-M02-O4", "PS-M02-O5", "PS-M02-O6"],
          lesson: {
            title: "Objects and Properties",
            content: `Everything useful in PowerShell is an object — a structured record with properties and sometimes methods. When you run Get-Process, you do not get text; you get Process objects with Name, Id, CPU, and WorkingSet properties. That structure is why pipelines work without parsing.

Inspect objects with Get-Member (alias gm). Pipe any output to Get-Member to see property names and methods. Get-Process | Get-Member -MemberType Property lists columns you can use in Select-Object. Methods are actions — some objects support .Kill() on processes, but prefer cmdlets like Stop-Process for clarity and safety.

Access one property with dot notation: (Get-Process -Name powershell).Id. In a pipeline, Where-Object and Select-Object use $_.PropertyName inside script blocks. Select-Object Name, CPU pulls just those columns. Calculated properties use Select-Object @{Name='CPUsec';Expression={$_.CPU}}.

Count objects with measure: (Get-ChildItem).Count or Get-ChildItem | Measure-Object. One object vs an array behaves differently — a single file returns one object; multiple files return an array. @() forces array behavior when needed.

Custom objects appear in scripts: [PSCustomObject]@{ Name='Server1'; Status='Up' }. Reports you build for managers are often collections of custom objects exported to CSV. Understanding properties is the bridge from typing commands to building reports.

Work procedurally: run a cmdlet once, pipe to Get-Member, write down three property names you care about, then rebuild the pipeline with Select-Object. Skipping Get-Member is how beginners filter on Status when the property is actually State — empty reports with no error.

Store intermediate results when learning: $procs = Get-Process; $procs | Get-Member; $procs | Select-Object Name, CPU. Variables let you inspect the same collection multiple ways without re-querying the system. On a busy server, repeating Get-Process ten times while debugging adds load.

Methods vs cmdlets: seeing .Close() on a file object does not mean you should call it in production scripts. Prefer documented cmdlets with -WhatIf support. Get-Member shows what is possible; Get-Help shows what is supported and stable for automation.

When CSV columns look empty after export, trace backward: did Format-Table appear too early? Did Select-Object drop the property you needed? Object discipline from this topic prevents the garbled export bugs that embarrass teams in front of managers.

Run Get-Member on the first row and the tenth row of a large result set occasionally — schema drift happens when some objects lack properties others have. Select-Object handles missing properties gracefully but calculated expressions may need null checks: $_.Length ?? 0 patterns in PS7 or if ($_.Length) { ... } in 5.1.`,
            experience: PS_OBJECTS_AND_PROPERTIES_EXPERIENCE,
          },
          lightbulbMoment:
            "Cmdlets return objects with properties — dot notation and Select-Object read those fields without parsing text.",
          keyFacts: [
            "PowerShell output is objects with properties, not plain text",
            "Get-Member lists properties and methods on any object",
            "Dot notation: (Get-Service wuauserv).Status",
            "$_ in script blocks refers to the current pipeline object",
            "Select-Object picks properties; calculated properties use hashtable syntax",
            "Measure-Object counts, sums, or averages property values",
          ],
          guidedExample: {
            title: "Inspect and Shape Process Objects",
            steps: [
              "Run Get-Process | Get-Member -MemberType Property — note Name, CPU, Id.",
              "Run Get-Process | Select-Object Name, Id, CPU — shaped table columns.",
              "Run (Get-Process -Name 'explorer').Id — dot notation on one object.",
              "Run Get-Process | Where-Object { $_.CPU -gt 10 } | Measure-Object — count hot processes.",
              "Run Get-Service | Select-Object Name, Status, StartType — same pattern, different noun.",
              "Run Get-Process | Select-Object Name, @{N='MemMB';E={[math]::Round($_.WS/1MB,1)}} — calculated property.",
            ],
          },
          commonMistakes: [
            "Trying to parse Format-Table text output instead of using Select-Object on objects",
            "Forgetting parentheses when dotting into a single object: Get-Process.Id vs (Get-Process).Id",
            "Using wrong property names — always verify with Get-Member",
            "Assuming empty output means error — may be zero matching objects",
          ],
          examTraps: [
            "Saving Format-Table output to CSV and getting garbled columns — export objects before formatting",
            "Confusing .Count on one object vs array — wrap with @() when scripting counts",
            "Using grep-style thinking when properties already exist on objects",
            "Calling .Kill() on processes when Stop-Process -Id is the documented approach",
          ],
          realWorldScenario:
            "You audit disk use per folder. Get-ChildItem produces objects with Length and FullName. You Select-Object FullName, @{N='SizeMB';E={[math]::Round($_.Length/1MB,2)}} and export to CSV for finance — property math, not manual spreadsheet typing.",
          quiz: [
            { id: "ps-objects-and-properties-q1", prompt: "Which cmdlet lists properties on pipeline objects?", choices: [{ id: "a", text: "Get-Member" }, { id: "b", text: "Format-Table" }, { id: "c", text: "Out-Null" }, { id: "d", text: "Clear-Host" }], correctChoiceId: "a", explanation: "Get-Member reveals properties and methods.", difficulty: "easy" },
            { id: "ps-objects-and-properties-q2", prompt: "$_ in Where-Object { $_.Status -eq 'Running' } is:", choices: [{ id: "a", text: "The current object in the pipeline" }, { id: "b", text: "The last error record" }, { id: "c", text: "The host name" }, { id: "d", text: "A comment marker" }], correctChoiceId: "a", explanation: "$_ represents the current pipeline item in script blocks.", difficulty: "easy" },
            { id: "ps-objects-and-properties-q3", prompt: "Dot notation (Get-Service wuauserv).Status returns:", choices: [{ id: "a", text: "The Status property of that service object" }, { id: "b", text: "All services" }, { id: "c", text: "A file path" }, { id: "d", text: "An error always" }], correctChoiceId: "a", explanation: "Parentheses run the cmdlet first; dot accesses a property.", difficulty: "easy" },
            { id: "ps-objects-and-properties-q4", prompt: "Select-Object Name, CPU on Get-Process:", choices: [{ id: "a", text: "Returns objects with only those properties" }, { id: "b", text: "Stops all processes" }, { id: "c", text: "Formats the screen only" }, { id: "d", text: "Deletes CPU data" }], correctChoiceId: "a", explanation: "Select-Object shapes which properties remain on objects.", difficulty: "easy" },
            { id: "ps-objects-and-properties-q5", prompt: "Measure-Object without properties on a list counts:", choices: [{ id: "a", text: "How many objects were piped in" }, { id: "b", text: "CPU temperature" }, { id: "c", text: "Registry keys only" }, { id: "d", text: "Network latency" }], correctChoiceId: "a", explanation: "Measure-Object aggregates — default count of input objects.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-objects-and-properties-b1", prompt: "Get-Member alias?", choices: [{ id: "a", text: "gm" }, { id: "b", text: "gc" }, { id: "c", text: "gp" }, { id: "d", text: "gl" }], correctChoiceId: "a", explanation: "gm is the common alias for Get-Member." },
            { id: "ps-objects-and-properties-b2", prompt: "Methods on objects are:", choices: [{ id: "a", text: "Actions the object can perform" }, { id: "b", text: "Always dangerous" }, { id: "c", text: "Only in CSV" }, { id: "d", text: "GUI buttons" }], correctChoiceId: "a", explanation: "Methods are functions attached to object types." },
            { id: "ps-objects-and-properties-b3", prompt: "[PSCustomObject]@{A=1} creates:", choices: [{ id: "a", text: "A custom object with property A" }, { id: "b", text: "A Windows service" }, { id: "c", text: "A registry hive" }, { id: "d", text: "An executable" }], correctChoiceId: "a", explanation: "Hashtable syntax builds custom objects for reports." },
            { id: "ps-objects-and-properties-b4", prompt: "Get-Member -MemberType Property shows:", choices: [{ id: "a", text: "Only properties, not methods" }, { id: "b", text: "Only errors" }, { id: "c", text: "Only aliases" }, { id: "d", text: "Only modules" }], correctChoiceId: "a", explanation: "-MemberType filters what Get-Member displays." },
            { id: "ps-objects-and-properties-b5", prompt: "Calculated property syntax uses:", choices: [{ id: "a", text: "@{Name='X';Expression={...}}" }, { id: "b", text: "Only semicolons" }, { id: "c", text: "HTML tags" }, { id: "d", text: "Batch labels" }], correctChoiceId: "a", explanation: "Hashtable Name/Expression defines computed columns." },
            { id: "ps-objects-and-properties-b6", prompt: "Why parentheses around Get-Process before .Id?", choices: [{ id: "a", text: "Dot binds to the object result, not the cmdlet name" }, { id: "b", text: "Required for all cmdlets always" }, { id: "c", text: "Makes output red" }, { id: "d", text: "Runs as admin" }], correctChoiceId: "a", explanation: "Without parens, .Id would attach to the command name incorrectly." },
            { id: "ps-objects-and-properties-b7", prompt: "Empty pipeline output often means:", choices: [{ id: "a", text: "Zero matching objects — not always an error" }, { id: "b", text: "PowerShell is broken" }, { id: "c", text: "Must reboot" }, { id: "d", text: "License expired" }], correctChoiceId: "a", explanation: "Filters can legitimately return nothing." },
            { id: "ps-objects-and-properties-b8", prompt: "Export-Csv works best when input is:", choices: [{ id: "a", text: "Objects with consistent properties" }, { id: "b", text: "Format-Table strings" }, { id: "c", text: "Random text" }, { id: "d", text: "Binary executables" }], correctChoiceId: "a", explanation: "CSV export expects object properties, not formatted text." },
          ],
          flashcards: [
            { id: "ps-objects-and-properties-f1", front: "Inspect object shape?", back: "Get-Member (gm) — lists properties and methods" },
            { id: "ps-objects-and-properties-f2", front: "Current pipeline object?", back: "$_ inside Where-Object / ForEach-Object script blocks" },
            { id: "ps-objects-and-properties-f3", front: "One property from one result?", back: "(Get-Service name).Status — parentheses first" },
            { id: "ps-objects-and-properties-f4", front: "Pick columns?", back: "Select-Object Prop1, Prop2" },
            { id: "ps-objects-and-properties-f5", front: "Count items?", back: "Measure-Object or (collection).Count" },
            { id: "ps-objects-and-properties-f6", front: "Custom report row?", back: "[PSCustomObject]@{ Column = 'value' }" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
        {
          id: "ps-aliases-vs-cmdlets",
          name: "Aliases vs Cmdlets",
          prerequisites: ["ps-objects-and-properties"],
          objectives: ["PS-M02-O7", "PS-M02-O8", "PS-M02-O9"],
          lesson: {
            title: "Aliases vs Cmdlets",
            content: `PowerShell includes aliases — short names for cmdlets and functions. dir and ls map to Get-ChildItem. cd maps to Set-Location. curl in PowerShell is an alias for Invoke-WebRequest, not the Linux curl binary — a common confusion when copying tutorials from the web.

Aliases save typing interactively but scripts should use full cmdlet names. Scripts are read by teammates, run in scheduled tasks, and must be clear in audits. Get-Alias lists mappings; Get-Alias dir shows Get-ChildItem. Find what an alias points to before assuming behavior.

Get-Command resolves names: Get-Command dir shows it is an alias for Get-ChildItem. Get-Command *-ChildItem finds cmdlets by pattern. When documentation says Invoke-RestMethod but you only know curl, check whether you mean the alias or the real executable.

Some aliases come from other shells for familiarity — gi, gci, gl for Get-Item, Get-ChildItem, Get-Location. That helps CMD graduates but hides the Verb-Noun system from beginners. Prefer learning Get-ChildItem so Get-WinEvent and Get-Service feel consistent.

Remove aliases in a session with Remove-Item Alias:curl if an alias shadows an external program you need — rare but happens. In scripts, avoid creating custom aliases unless the team agrees — explicit names beat clever shortcuts in shared code.

Team standard: interactive sessions may use aliases for speed; anything checked into git or saved on a share uses cmdlets only. Code review should flag dir, ls, curl, and wget in scripts unless commented as intentional. Onboarding docs should list your team's top ten cmdlets with examples — not alias cheat sheets alone.

When migrating CMD batch files, map each command: dir becomes Get-ChildItem, type becomes Get-Content, copy becomes Copy-Item. Run Get-Command for the old name — if CommandType is Alias, follow Definition to the cmdlet and read Get-Help there. Document the mapping in script headers for auditors.

Lab preview: Module 2 ends with Files and Navigation lab on ps-aliases-vs-cmdlets — you will navigate, inspect file object properties, and rewrite alias lines as cmdlets. That enforces the script standard before Module 3 pipeline reports.

When reviewing others scripts, highlight alias usage in comments requesting cmdlet renames before merge. Consistency across the team matters more than any single clever shortcut — onboarding cost drops when everyone reads the same Verb-Noun vocabulary daily.

The Files and Navigation lab is your Module 2 graduation gate — complete it before pipeline reports. Navigation plus object inspection plus cmdlet naming together mirror daily tier-1 tickets more than any single topic alone.`,
            experience: PS_ALIASES_VS_CMDLETS_EXPERIENCE,
          },
          keyFacts: [
            "Aliases are shortcuts — dir and ls → Get-ChildItem",
            "Scripts should use full Verb-Noun cmdlet names",
            "Get-Alias and Get-Command reveal what a name resolves to",
            "PowerShell curl is Invoke-WebRequest — not Linux curl.exe",
            "Aliases help interactive speed, not script clarity",
            "Consistent cmdlet names make Get-Help and discovery easier",
          ],
          guidedExample: {
            title: "Resolve Names Before Scripting",
            steps: [
              "Run Get-Alias dir — note it points to Get-ChildItem.",
              "Run Get-Command ls | Select-Object Name, CommandType, Definition.",
              "Run Get-Command -CommandType Cmdlet -Name *-ChildItem.",
              "Run Get-Alias -Definition Get-Location — aliases for cd/pwd.",
              "Write the same listing twice: once with dir, once with Get-ChildItem — identical output.",
              "In your notes, rewrite dir .\\*.txt as Get-ChildItem -Filter *.txt for script style.",
            ],
          },
          commonMistakes: [
            "Using dir in production scripts because it works on your machine",
            "Assuming curl calls curl.exe — in PowerShell it may be Invoke-WebRequest",
            "Creating personal aliases in shared scripts without team agreement",
            "Memorizing alias lists instead of Verb-Noun patterns",
          ],
          examTraps: [
            "Blog posts use ls — workplace scripts require Get-ChildItem for clarity",
            "Stack Overflow answer uses wget — maps to Invoke-WebRequest in PowerShell",
            "Trainer says type gi — new hire cannot find Get-Item in docs",
            "Copying bash habits like cat for Get-Content without checking Get-Command",
          ],
          realWorldScenario:
            "Code review rejects a onboarding script because it uses dir and ls mixed randomly. You refactor to Get-ChildItem and Set-Location — reviewers approve, scheduled task runs reliably, and Get-Help works consistently for the junior who maintains it next quarter.",
          quiz: [
            { id: "ps-aliases-vs-cmdlets-q1", prompt: "dir in PowerShell is an alias for:", choices: [{ id: "a", text: "Get-ChildItem" }, { id: "b", text: "Remove-Item" }, { id: "c", text: "Format-Table" }, { id: "d", text: "Stop-Process" }], correctChoiceId: "a", explanation: "dir and ls both alias Get-ChildItem.", difficulty: "easy" },
            { id: "ps-aliases-vs-cmdlets-q2", prompt: "Production scripts should prefer:", choices: [{ id: "a", text: "Full cmdlet names like Get-ChildItem" }, { id: "b", text: "Only shortest aliases" }, { id: "c", text: "No cmdlets — exe only" }, { id: "d", text: "Random abbreviations" }], correctChoiceId: "a", explanation: "Full names are self-documenting in shared scripts.", difficulty: "easy" },
            { id: "ps-aliases-vs-cmdlets-q3", prompt: "Which cmdlet shows what a name resolves to?", choices: [{ id: "a", text: "Get-Command" }, { id: "b", text: "Clear-History" }, { id: "c", text: "Start-Sleep" }, { id: "d", text: "Out-String" }], correctChoiceId: "a", explanation: "Get-Command reports cmdlets, aliases, functions, and externals.", difficulty: "easy" },
            { id: "ps-aliases-vs-cmdlets-q4", prompt: "PowerShell alias curl typically maps to:", choices: [{ id: "a", text: "Invoke-WebRequest" }, { id: "b", text: "curl.exe always" }, { id: "c", text: "Copy-Item" }, { id: "d", text: "Get-Credential" }], correctChoiceId: "a", explanation: "curl is an alias — use curl.exe for the real binary if needed.", difficulty: "medium" },
            { id: "ps-aliases-vs-cmdlets-q5", prompt: "Get-Alias dir shows:", choices: [{ id: "a", text: "That dir maps to Get-ChildItem" }, { id: "b", text: "Disk free space" }, { id: "c", text: "DNS records" }, { id: "d", text: "Firewall rules" }], correctChoiceId: "a", explanation: "Get-Alias reveals alias definitions.", difficulty: "easy" },
          ],
          questionBank: [
            { id: "ps-aliases-vs-cmdlets-b1", prompt: "cd aliases to:", choices: [{ id: "a", text: "Set-Location" }, { id: "b", text: "Get-Content" }, { id: "c", text: "Clear-Disk" }, { id: "d", text: "Compare-Object" }], correctChoiceId: "a", explanation: "cd changes location via Set-Location." },
            { id: "ps-aliases-vs-cmdlets-b2", prompt: "Why avoid aliases in scripts?", choices: [{ id: "a", text: "Clarity and maintainability for the team" }, { id: "b", text: "Aliases are slower always" }, { id: "c", text: "Aliases are removed in PS7" }, { id: "d", text: "Scripts cannot run aliases" }], correctChoiceId: "a", explanation: "Explicit cmdlets read clearly in code review." },
            { id: "ps-aliases-vs-cmdlets-b3", prompt: "Get-Command -CommandType Alias lists:", choices: [{ id: "a", text: "All aliases in session" }, { id: "b", text: "Only files" }, { id: "c", text: "Only services" }, { id: "d", text: "Only modules" }], correctChoiceId: "a", explanation: "Filter Get-Command by CommandType." },
            { id: "ps-aliases-vs-cmdlets-b4", prompt: "gci is alias for:", choices: [{ id: "a", text: "Get-ChildItem" }, { id: "b", text: "Get-CimInstance" }, { id: "c", text: "Get-Clipboard" }, { id: "d", text: "Get-ComputerInfo" }], correctChoiceId: "a", explanation: "gci is a shorthand many admins use interactively." },
            { id: "ps-aliases-vs-cmdlets-b5", prompt: "To call real curl.exe explicitly:", choices: [{ id: "a", text: "Use curl.exe or full path to avoid alias" }, { id: "b", text: "Aliases cannot be bypassed" }, { id: "c", text: "Reinstall Windows" }, { id: "d", text: "Use Format-Table" }], correctChoiceId: "a", explanation: "The .exe suffix invokes the external program." },
            { id: "ps-aliases-vs-cmdlets-b6", prompt: "Get-Help works best on:", choices: [{ id: "a", text: "Cmdlet names, not aliases" }, { id: "b", text: "Aliases only" }, { id: "c", text: "Comments" }, { id: "d", text: "CSV files" }], correctChoiceId: "a", explanation: "Help targets cmdlets — another reason scripts use full names." },
            { id: "ps-aliases-vs-cmdlets-b7", prompt: "Verb-Noun naming helps because:", choices: [{ id: "a", text: "You can guess related cmdlets consistently" }, { id: "b", text: "It hides documentation" }, { id: "c", text: "It disables pipelines" }, { id: "d", text: "It removes parameters" }], correctChoiceId: "a", explanation: "Get-Service, Stop-Service, Restart-Service share a noun." },
            { id: "ps-aliases-vs-cmdlets-b8", prompt: "Scheduled task script fails review for:", choices: [{ id: "a", text: "Mixed cryptic aliases without comments" }, { id: "b", text: "Using Get-ChildItem" }, { id: "c", text: "Using -WhatIf" }, { id: "d", text: "Using full paths" }], correctChoiceId: "a", explanation: "Tasks need readable, supportable script standards." },
          ],
          flashcards: [
            { id: "ps-aliases-vs-cmdlets-f1", front: "dir / ls alias target?", back: "Get-ChildItem" },
            { id: "ps-aliases-vs-cmdlets-f2", front: "Scripts use?", back: "Full Verb-Noun cmdlets — not aliases" },
            { id: "ps-aliases-vs-cmdlets-f3", front: "Resolve any command name?", back: "Get-Command name" },
            { id: "ps-aliases-vs-cmdlets-f4", front: "PowerShell curl is?", back: "Alias for Invoke-WebRequest — use curl.exe for binary" },
            { id: "ps-aliases-vs-cmdlets-f5", front: "List aliases?", back: "Get-Alias or Get-Alias -Definition Get-ChildItem" },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-files-navigation",
              title: "Files and Navigation Lab",
              type: "external-lab",
              instructions: `Open PowerShell and complete these tasks:

1. Run Get-Location, then Set-Location $env:USERPROFILE\\Documents (create the folder if missing).
2. Run New-Item -ItemType File -Name lab-notes.txt -Force, then Get-ChildItem lab-notes.txt | Get-Member -MemberType Property.
3. List three properties with Select-Object on that file object.
4. Run Get-Alias dir and Get-Command cd — write down the real cmdlet names.
5. Rewrite this alias line as cmdlets: cd .. ; dir *.txt
6. Run Set-Location ~ when finished.

Document cmdlet equivalents you discovered. Use Get-Help if any step errors.`,
              estimatedMinutes: 25,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Navigated with Set-Location and verified with Get-Location",
                "Created a file and inspected properties with Get-Member",
                "Identified alias mappings with Get-Alias or Get-Command",
                "Rewrote alias commands using full cmdlet names",
              ],
              relatedTopicIds: [
                "ps-paths-and-navigation",
                "ps-objects-and-properties",
                "ps-aliases-vs-cmdlets",
              ],
              order: 2,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 25,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "powershell-pipeline-reports",
      name: "Module 3 — Pipeline Reports",
      topics: [
        {
          id: "ps-filtering-with-where",
          name: "Filtering with Where-Object",
          prerequisites: ["ps-aliases-vs-cmdlets"],
          objectives: ["PS-M03-O1", "PS-M03-O2", "PS-M03-O3"],
          lesson: {
            title: "Filtering with Where-Object",
            content: `Reports start by cutting noise. Where-Object (alias where) keeps objects that match a condition. Syntax: Get-Service | Where-Object { $_.Status -eq 'Running' }. The script block in braces runs once per object; $_ is the current object.

Comparison operators use PowerShell syntax: -eq equal, -ne not equal, -gt greater, -lt less, -like wildcard (supports * and ?), -match regex. Strings are case-insensitive by default. Use -ceq for case-sensitive when needed.

Multiple conditions: Where-Object { $_.Status -eq 'Running' -and $_.StartType -eq 'Automatic' }. Parentheses clarify order. Filter as early as possible in the pipeline — Get-Service | Where-Object before Select-Object reduces work downstream.

Shortcut syntax when filtering one property: Get-Service | Where-Object Status -eq Running — no script block, simpler for beginners. For property comparisons against other properties, stick to script blocks.

Empty results are valid — no error. If Where-Object returns nothing, widen the filter or verify property names with Get-Member. Workplace reports often chain Get-* | Where-Object | Select-Object — master this trio before formatting.

Build filters incrementally: start with Get-Service alone and count; add one Where-Object clause; count again; add -and only when the first filter works. Debugging compound filters is painful when three conditions fail together — isolate each.

Date and numeric comparisons need correct types. Compare-Object helps diff two lists — different tool, do not confuse with Where-Object. For text cleanup before -like, consider .Trim() in a calculated property or ForEach-Object { $_.Name.Trim() } — spaces break naive matches.

Performance note: Get-ChildItem -Filter at the provider beats Get-ChildItem | Where-Object Extension -eq '.log' on huge trees when you only need one pattern. Where-Object still essential when properties require logic providers cannot express.

Write filters as comments above the pipeline: purpose, expected count ballpark, owner name. Next shift validates quickly when filters return unexpected empty output during an outage — context saves panic reboots.

Negative filters use -ne or -notlike: Get-Service | Where-Object { $_.Name -notlike 'Xbox*' } trims noise on consumer PCs. Combine with Select-Object early to reduce visual clutter before Sort-Object — your eyes thank you during long incidents.

Comparison operators work on properties of different types — know when you compare dates, strings, or integers. Cast with [datetime] or [int] when imports from CSV arrive as strings and filters behave unexpectedly despite looking correct in the script editor.

Where-Object is the most reused pipeline cmdlet in admin scripts — invest time here. Revisit this topic when capstone filters return empty CSVs; the bug is usually property name or type, not Export-Csv itself.`,
            experience: PS_FILTERING_WITH_WHERE_EXPERIENCE,
          },
          lightbulbMoment:
            "Where-Object is your pipeline sieve — $_ is each object passing through the mesh.",
          keyFacts: [
            "Where-Object filters objects — alias where",
            "$_ is the current object inside { } script blocks",
            "Operators: -eq -ne -gt -lt -like -match",
            "Combine conditions with -and / -or inside one script block",
            "Filter before Select-Object when possible for efficiency",
            "Empty output can mean zero matches — verify property names",
          ],
          guidedExample: {
            title: "Filter Services for a Report",
            steps: [
              "Run Get-Service | Get-Member -MemberType Property — note Status, StartType.",
              "Run Get-Service | Where-Object { $_.Status -eq 'Running' } | Measure-Object.",
              "Add -and $_.StartType -eq 'Automatic' to narrow to auto-start running services.",
              "Run Get-Service | Where-Object Status -eq Running — shortcut syntax.",
              "Pipe to Select-Object Name, Status, StartType for a manager-friendly subset.",
              "Test a filter that returns nothing — confirm no error, just empty pipeline.",
            ],
          },
          commonMistakes: [
            "Using = instead of -eq inside Where-Object — assignment vs comparison",
            "Wrong property names — Status vs State on some object types",
            "Filtering after Format-Table when objects are already destroyed",
            "Expecting Where-Object to modify objects — it only passes matches through",
          ],
          examTraps: [
            "SQL habits using = for equality — PowerShell uses -eq in expressions",
            "Case-sensitive file extensions — .TXT vs .txt may matter with -ceq",
            "Filtering on formatted strings instead of original object properties",
            "Using Where-Object when -Filter on Get-ChildItem would be faster",
          ],
          realWorldScenario:
            "Monthly patch report needs all Windows services set to Automatic that are currently Stopped. Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' } | Select-Object Name, DisplayName feeds the ticket queue.",
          quiz: [
            { id: "ps-filtering-with-where-q1", prompt: "Which cmdlet filters pipeline objects?", choices: [{ id: "a", text: "Where-Object" }, { id: "b", text: "Format-List" }, { id: "c", text: "Write-Host" }, { id: "d", text: "Start-Process" }], correctChoiceId: "a", explanation: "Where-Object keeps matching objects.", difficulty: "easy" },
            { id: "ps-filtering-with-where-q2", prompt: "Equality test in PowerShell uses:", choices: [{ id: "a", text: "-eq" }, { id: "b", text: "=" }, { id: "c", text: "==" }, { id: "d", text: "eq()" }], correctChoiceId: "a", explanation: "-eq compares values; = assigns.", difficulty: "easy" },
            { id: "ps-filtering-with-where-q3", prompt: "$_ inside Where-Object { } represents:", choices: [{ id: "a", text: "Current pipeline object" }, { id: "b", text: "Last cmdlet name" }, { id: "c", text: "Error stream" }, { id: "d", text: "Host UI" }], correctChoiceId: "a", explanation: "$_ is the object being tested.", difficulty: "easy" },
            { id: "ps-filtering-with-where-q4", prompt: "-like operator supports:", choices: [{ id: "a", text: "Wildcards * and ?" }, { id: "b", text: "Only exact match" }, { id: "c", text: "JSON parsing" }, { id: "d", text: "Disk formatting" }], correctChoiceId: "a", explanation: "-like does wildcard string matching.", difficulty: "medium" },
            { id: "ps-filtering-with-where-q5", prompt: "Two conditions both required — use:", choices: [{ id: "a", text: "-and inside one Where-Object block" }, { id: "b", text: "Semicolon only" }, { id: "c", text: "Format-Table" }, { id: "d", text: "Remove-Item" }], correctChoiceId: "a", explanation: "-and combines boolean tests on the same object.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-filtering-with-where-b1", prompt: "Where-Object alias?", choices: [{ id: "a", text: "where" }, { id: "b", text: "filter" }, { id: "c", text: "grep" }, { id: "d", text: "find" }], correctChoiceId: "a", explanation: "where is the interactive alias." },
            { id: "ps-filtering-with-where-b2", prompt: "-ne means:", choices: [{ id: "a", text: "Not equal" }, { id: "b", text: "Network error" }, { id: "c", text: "New entry" }, { id: "d", text: "No effect" }], correctChoiceId: "a", explanation: "-ne is not equal." },
            { id: "ps-filtering-with-where-b3", prompt: "-match uses:", choices: [{ id: "a", text: "Regular expressions" }, { id: "b", text: "Only integers" }, { id: "c", text: "GUI dialogs" }, { id: "d", text: "DNS only" }], correctChoiceId: "a", explanation: "-match tests regex patterns." },
            { id: "ps-filtering-with-where-b4", prompt: "Shortcut Where-Object Status -eq Running omits:", choices: [{ id: "a", text: "Script block braces when comparing one property" }, { id: "b", text: "The cmdlet name" }, { id: "c", text: "Pipeline" }, { id: "d", text: "Objects" }], correctChoiceId: "a", explanation: "PropertyName operator value syntax is simplified." },
            { id: "ps-filtering-with-where-b5", prompt: "Filter stopped services:", choices: [{ id: "a", text: "Where-Object { $_.Status -eq 'Stopped' }" }, { id: "b", text: "Format-Table Stopped" }, { id: "c", text: "Stop-Service *" }, { id: "d", text: "Clear-Host" }], correctChoiceId: "a", explanation: "Compare Status property to Stopped." },
            { id: "ps-filtering-with-where-b6", prompt: "-or in a filter means:", choices: [{ id: "a", text: "Either condition can be true" }, { id: "b", text: "Exclusive nor" }, { id: "c", text: "Sort descending" }, { id: "d", text: "Export CSV" }], correctChoiceId: "a", explanation: "-or passes if any test succeeds." },
            { id: "ps-filtering-with-where-b7", prompt: "Zero results from Where-Object:", choices: [{ id: "a", text: "Often normal — no matching objects" }, { id: "b", text: "Always fatal error" }, { id: "c", text: "Means syntax invalid always" }, { id: "d", text: "Requires reboot" }], correctChoiceId: "a", explanation: "Empty pipeline is valid output." },
            { id: "ps-filtering-with-where-b8", prompt: "Verify property before filter:", choices: [{ id: "a", text: "Get-Member on sample object" }, { id: "b", text: "Restart-Computer" }, { id: "c", text: "Out-Printer" }, { id: "d", text: "Disable-NetAdapter" }], correctChoiceId: "a", explanation: "Get-Member confirms property names and types." },
          ],
          flashcards: [
            { id: "ps-filtering-with-where-f1", front: "Filter cmdlet?", back: "Where-Object (where)" },
            { id: "ps-filtering-with-where-f2", front: "Equal operator?", back: "-eq (not =)" },
            { id: "ps-filtering-with-where-f3", front: "Wildcard match?", back: "-like with * and ?" },
            { id: "ps-filtering-with-where-f4", front: "Both conditions true?", back: "-and inside script block" },
            { id: "ps-filtering-with-where-f5", front: "Current object in filter?", back: "$_" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
        {
          id: "ps-shaping-with-select",
          name: "Shaping with Select-Object",
          prerequisites: ["ps-filtering-with-where"],
          objectives: ["PS-M03-O4", "PS-M03-O5", "PS-M03-O6"],
          lesson: {
            title: "Shaping with Select-Object",
            content: `After filtering, shape what you show. Select-Object (alias select) picks properties, renames columns, limits count, and expands nested data. Get-Process | Select-Object Name, CPU returns slim objects with only those fields — ideal before Export-Csv.

Limit results: Select-Object -First 5 gets the first five objects after Sort-Object. -Last 5 gets the bottom. -Skip 10 skips the first ten — useful for paging in ad hoc reports. -Unique deduplicates by selected properties.

Calculated properties add computed columns: Select-Object Name, @{Name='CPUsec';Expression={$_.CPU}}. Name is the column header; Expression script runs per object. @{N='X';E={...}} is the short form. This is how you convert bytes to megabytes or build full names from parts.

-ExpandProperty flattens nested properties — Get-ChildItem | Select-Object -ExpandProperty FullName returns strings instead of file objects. Handy for simple lists; you lose other properties afterward.

Select-Object runs late in the pipeline after Where-Object and before Sort-Object or export. Order matters: filter first, shape columns, sort, then format or export. Workplace dashboards fail when someone formats before selecting — always keep objects until the last responsible moment.

Rename columns for audiences: @{N='Service Name';E={$_.DisplayName}} presents friendly headers in CSV while scripts still use Name internally. Hide secrets by omitting properties — Select-Object excludes password fields before export. Never Select-Object * on AD objects into CSV without reviewing columns for PII.

Practice -First with Sort-Object only after you trust the sort key. For paged reports, -Skip and -First together simulate pages: Select-Object -Skip 20 -First 10. Document skip values in script comments so the next operator knows which page the CSV represents.

When managers rename columns in Excel after export, update Select-Object calculated property Name fields in the script — not the CSV manually each week. Single source of truth lives in PowerShell, Excel is just the view.

-ExpandProperty to simple lists feeds other commands expecting strings — useful before Compare-Object or Out-File line lists. Document when you intentionally flatten objects so maintainers know properties were dropped on purpose.

Select-Object -Property * picks every property but does not replace Get-Member for discovery — wide exports may leak sensitive fields. Explicit property lists are a security habit as much as a readability habit in workplace reporting.

Shaping columns is where reports become legible to non-PowerShell readers — prioritize human column names in calculated properties over cryptic property names copied from Get-Member output verbatim. Module 3 labs assume you can Select-Object before every Export-Csv without hesitation on real tickets.`,
            experience: PS_SHAPING_WITH_SELECT_EXPERIENCE,
          },
          keyFacts: [
            "Select-Object picks properties — alias select",
            "-First, -Last, -Skip limit how many objects pass through",
            "Calculated columns: @{Name='Col';Expression={$_.Prop}}",
            "-ExpandProperty outputs one property value per object",
            "-Unique removes duplicate combinations of selected properties",
            "Shape objects before Export-Csv — not after Format-Table",
          ],
          guidedExample: {
            title: "Build a Top-Five CPU Report",
            steps: [
              "Run Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU.",
              "Add calculated column: @{N='MemMB';E={[math]::Round($_.WorkingSet64/1MB,1)}}.",
              "Run Get-Service | Select-Object Name, Status | Export-Csv .\\services.csv -NoTypeInformation.",
              "Open the CSV — verify columns match selected properties.",
              "Run 1..10 | Select-Object -First 3 — -First works on any objects.",
              "Compare output with and without -ExpandProperty Name on Get-Process.",
            ],
          },
          commonMistakes: [
            "Selecting properties after Format-Table — too late, data is text",
            "Forgetting -NoTypeInformation on Export-Csv — adds ugly type header row",
            "Using -ExpandProperty when you still need multiple columns",
            "Misspelling Expression hashtable keys — must be Name and Expression (or N and E)",
          ],
          examTraps: [
            "Manager wants CSV — teammate pipes Format-Table to Out-File and columns break",
            "Select-Object -First without Sort-Object — random five items, not top five",
            "Calculated property uses $_.WrongProperty — blank column in export",
            "Confusing Select-Object with Where-Object — select shapes, where filters",
          ],
          realWorldScenario:
            "Leadership wants top ten disk consumers on a file server. Get-ChildItem -Recurse (scoped folder) | Sort-Object Length -Descending | Select-Object -First 10 FullName, @{N='MB';E={[math]::Round($_.Length/1MB,2)}}, LastWriteTime | Export-Csv report.csv — done before the meeting.",
          quiz: [
            { id: "ps-shaping-with-select-q1", prompt: "Select-Object primarily:", choices: [{ id: "a", text: "Chooses which properties appear on objects" }, { id: "b", text: "Stops services" }, { id: "c", text: "Installs modules" }, { id: "d", text: "Patches Windows" }], correctChoiceId: "a", explanation: "Select-Object shapes output columns.", difficulty: "easy" },
            { id: "ps-shaping-with-select-q2", prompt: "Top 5 after sorting uses:", choices: [{ id: "a", text: "Sort-Object then Select-Object -First 5" }, { id: "b", text: "Select-Object before Get-Process only" }, { id: "c", text: "Format-Table -First 5" }, { id: "d", text: "Remove-Item -First 5" }], correctChoiceId: "a", explanation: "Sort first, then take -First N.", difficulty: "easy" },
            { id: "ps-shaping-with-select-q3", prompt: "Calculated property syntax includes:", choices: [{ id: "a", text: "@{Name='X';Expression={...}}" }, { id: "b", text: "SELECT * FROM" }, { id: "c", text: "echo only" }, { id: "d", text: "goto label" }], correctChoiceId: "a", explanation: "Hashtable defines computed columns.", difficulty: "medium" },
            { id: "ps-shaping-with-select-q4", prompt: "-ExpandProperty on FullName returns:", choices: [{ id: "a", text: "Plain string paths instead of file objects" }, { id: "b", text: "Services" }, { id: "c", text: "Registry keys" }, { id: "d", text: "Errors only" }], correctChoiceId: "a", explanation: "-ExpandProperty unwraps one property value.", difficulty: "medium" },
            { id: "ps-shaping-with-select-q5", prompt: "Export-Csv best practice:", choices: [{ id: "a", text: "Pipe objects before formatting; use -NoTypeInformation" }, { id: "b", text: "Always format as table first" }, { id: "c", text: "Never use Select-Object" }, { id: "d", text: "Only export binaries" }], correctChoiceId: "a", explanation: "CSV needs object properties, not rendered text.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-shaping-with-select-b1", prompt: "Select-Object alias?", choices: [{ id: "a", text: "select" }, { id: "b", text: "shape" }, { id: "c", text: "pick" }, { id: "d", text: "col" }], correctChoiceId: "a", explanation: "select is the common alias." },
            { id: "ps-shaping-with-select-b2", prompt: "-Skip 5 skips:", choices: [{ id: "a", text: "First five objects then passes rest" }, { id: "b", text: "Five properties" }, { id: "c", text: "Five seconds" }, { id: "d", text: "Five disks" }], correctChoiceId: "a", explanation: "-Skip omits leading objects." },
            { id: "ps-shaping-with-select-b3", prompt: "-Unique on Name column:", choices: [{ id: "a", text: "Deduplicates by selected properties" }, { id: "b", text: "Deletes files" }, { id: "c", text: "Sorts alphabetically only" }, { id: "d", text: "Requires admin" }], correctChoiceId: "a", explanation: "-Unique filters duplicate property combinations." },
            { id: "ps-shaping-with-select-b4", prompt: "Expression in calculated property uses:", choices: [{ id: "a", text: "$_ to reference current object" }, { id: "b", text: "Only global variables" }, { id: "c", text: "HTML" }, { id: "d", text: "Batch files" }], correctChoiceId: "a", explanation: "Same $_ convention as Where-Object." },
            { id: "ps-shaping-with-select-b5", prompt: "Select-Object after Where-Object is typical because:", choices: [{ id: "a", text: "Filter first, then pick columns for report" }, { id: "b", text: "Required by PowerShell grammar" }, { id: "c", text: "Where needs formatted input" }, { id: "d", text: "CSV forbids filters" }], correctChoiceId: "a", explanation: "Reduce rows, then shape columns." },
            { id: "ps-shaping-with-select-b6", prompt: "-NoTypeInformation on Export-Csv:", choices: [{ id: "a", text: "Omits #TYPE header line in CSV" }, { id: "b", text: "Encrypts file" }, { id: "c", text: "Deletes source data" }, { id: "d", text: "Adds columns" }], correctChoiceId: "a", explanation: "Cleaner CSV for Excel and managers." },
            { id: "ps-shaping-with-select-b7", prompt: "Select Name,Id vs Select *:", choices: [{ id: "a", text: "Fewer columns — easier to read and export" }, { id: "b", text: "Same always" }, { id: "c", text: "Illegal syntax" }, { id: "d", text: "Runs only on Linux" }], correctChoiceId: "a", explanation: "Pick only what the report needs." },
            { id: "ps-shaping-with-select-b8", prompt: "Wrong pipeline order for top CPU:", choices: [{ id: "a", text: "Select-Object -First 5 before Sort-Object CPU" }, { id: "b", text: "Sort then Select -First" }, { id: "c", text: "Get-Process then Sort" }, { id: "d", text: "Where then Sort" }], correctChoiceId: "a", explanation: "Selecting before sort gives wrong items." },
          ],
          flashcards: [
            { id: "ps-shaping-with-select-f1", front: "Pick columns?", back: "Select-Object Prop1, Prop2" },
            { id: "ps-shaping-with-select-f2", front: "Top N items?", back: "Sort-Object then Select-Object -First N" },
            { id: "ps-shaping-with-select-f3", front: "Calculated column?", back: "@{N='Header';E={$_.Field}}" },
            { id: "ps-shaping-with-select-f4", front: "-ExpandProperty?", back: "Outputs one property value per object as plain values" },
            { id: "ps-shaping-with-select-f5", front: "Clean CSV export?", back: "Objects | Export-Csv -NoTypeInformation" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
        {
          id: "ps-sorting-and-measure",
          name: "Sorting & Measure-Object",
          prerequisites: ["ps-shaping-with-select"],
          objectives: ["PS-M03-O7", "PS-M03-O8", "PS-M03-O9"],
          lesson: {
            title: "Sorting and Measuring",
            content: `Sorted data answers who is biggest, oldest, or most frequent. Sort-Object (alias sort) orders pipeline objects by property. Get-Process | Sort-Object CPU -Descending puts highest CPU first. Multiple keys: Sort-Object Status, Name sorts by Status then Name within each group.

Descending vs ascending: -Descending for top-N reports; default ascending for alphabetical lists. Sort-Object accepts property names or script blocks: Sort-Object { $_.Length } for files.

Measure-Object summarizes numbers. Get-ChildItem | Measure-Object -Property Length -Sum returns total bytes. -Average, -Maximum, -Minimum, -Sum apply to numeric properties. Pipe plain objects without -Property to get Count — how many items arrived.

Combine for reports: Get-ChildItem *.log | Measure-Object -Property Length -Sum -Average gives total and average log size. Group-Object buckets items: Get-Service | Group-Object Status | Select-Object Name, Count shows Running vs Stopped counts.

Pipeline report pattern: Get-* source data, Where-Object filter, Select-Object shape, Sort-Object order, Measure-Object or Group-Object summarize, Export-Csv deliver. Complete the Pipeline Report lab to practice end-to-end on your PC.

When numbers look wrong after Sort-Object, check property types with Get-Member — strings sort differently from integers. Cast if needed: Sort-Object { [int]$_.Port }. Group-Object before Measure-Object when you need subtotals per category — measure each group in a second step or use Select-Object Count on group output.

The Pipeline Report lab exports running services and top CPU processes — mirror those steps on ticket templates you use weekly. Repetition turns syntax into muscle memory faster than reading alone.

Before presenting a report verbally, run Measure-Object one more time on the final object set — know your row counts and sums cold. Executives ask how many and how big first; Sort-Object and Measure-Object answer before they finish the question.

Group-Object Name, Status — multiple properties create finer buckets when one dimension hides patterns. Export group summaries to CSV for charts in Excel pivot tables — faster than manual counting during audit season.

Stable Sort-Object keys make reports comparable week to week — document sort properties in script headers so Monday report matches Friday report structure when leadership tracks trends verbally in standup meetings.

Measure-Object Line, Character, Word apply to text files via Get-Content piped input — different use case from file Length sums. Pick the measure that matches the ticket question exactly instead of defaulting to Count alone. End Module 3 with the Pipeline Report lab — it validates the full Get-Where-Select-Sort-Export chain on your machine with real CSV output you can open and verify.`,
            experience: PS_SORTING_AND_MEASURE_EXPERIENCE,
          },
          keyFacts: [
            "Sort-Object orders by property — -Descending for largest first",
            "Multiple sort keys: Sort-Object Prop1, Prop2",
            "Measure-Object -Sum -Average -Maximum -Minimum on numeric properties",
            "Measure-Object without -Property returns Count of objects",
            "Group-Object buckets by property value with Count per group",
            "Report pattern: Get → Where → Select → Sort → Export or Measure",
          ],
          guidedExample: {
            title: "End-to-End Mini Report",
            steps: [
              "Run Get-Service | Group-Object Status | Select-Object Name, Count.",
              "Run Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name, @{N='WSMB';E={[math]::Round($_.WorkingSet64/1MB,1)}}.",
              "Run Get-ChildItem $env:TEMP -File | Measure-Object -Property Length -Sum -Average.",
              "Build: Get-ChildItem . -File | Where-Object { $_.Extension -eq '.txt' } | Sort-Object Length -Descending | Select-Object -First 3 Name, Length.",
              "Export that result: append | Export-Csv .\\top-txt.csv -NoTypeInformation.",
              "Open CSV — verify three rows with Name and Length columns.",
            ],
          },
          commonMistakes: [
            "Sorting strings that look like numbers — Length sorts lexically if strings",
            "Using Measure-Object -Sum on non-numeric properties without conversion",
            "Forgetting -Descending when asked for top or largest",
            "Grouping after Format-Table — objects already lost",
          ],
          examTraps: [
            "Sort-Object Name on IP addresses — 10.x sorts before 192.x incorrectly as strings",
            "Count property vs Measure-Object — know both patterns",
            "Group-Object output structure confuses — use Select-Object Name, Count on groups",
            "Average log size report built on empty folder — zero objects is valid",
          ],
          realWorldScenario:
            "Storage triage: Group-Object Extension on a share folder shows .vhdx eating space; Sort-Object Length -Descending on that filter identifies files to archive. You attach CSV to change ticket with sums from Measure-Object.",
          quiz: [
            { id: "ps-sorting-and-measure-q1", prompt: "Highest CPU processes first:", choices: [{ id: "a", text: "Sort-Object CPU -Descending" }, { id: "b", text: "Sort-Object CPU" }, { id: "c", text: "Format-Table CPU" }, { id: "d", text: "Stop-Process CPU" }], correctChoiceId: "a", explanation: "-Descending puts largest values first.", difficulty: "easy" },
            { id: "ps-sorting-and-measure-q2", prompt: "Measure-Object -Property Length -Sum returns:", choices: [{ id: "a", text: "Total of Length values" }, { id: "b", text: "Sorted list" }, { id: "c", text: "Services" }, { id: "d", text: "Registry backup" }], correctChoiceId: "a", explanation: "-Sum aggregates numeric property.", difficulty: "easy" },
            { id: "ps-sorting-and-measure-q3", prompt: "Count how many services piped in:", choices: [{ id: "a", text: "Measure-Object (no -Property)" }, { id: "b", text: "Format-List" }, { id: "c", text: "Clear-Content" }, { id: "d", text: "New-Item" }], correctChoiceId: "a", explanation: "Default Measure-Object output includes Count.", difficulty: "easy" },
            { id: "ps-sorting-and-measure-q4", prompt: "Group-Object Status on services shows:", choices: [{ id: "a", text: "Groups with Name (status) and Count" }, { id: "b", text: "Only running services" }, { id: "c", text: "Disk partitions" }, { id: "d", text: "User passwords" }], correctChoiceId: "a", explanation: "Group-Object creates buckets with counts.", difficulty: "medium" },
            { id: "ps-sorting-and-measure-q5", prompt: "Top 3 largest files after filter:", choices: [{ id: "a", text: "Where → Sort Length -Descending → Select -First 3" }, { id: "b", text: "Select -First 3 → Sort" }, { id: "c", text: "Format-Table only" }, { id: "d", text: "Remove-Item -First 3" }], correctChoiceId: "a", explanation: "Filter, sort descending, then take first three.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-sorting-and-measure-b1", prompt: "Sort-Object alias?", choices: [{ id: "a", text: "sort" }, { id: "b", text: "order" }, { id: "c", text: "rank" }, { id: "d", text: "arrange" }], correctChoiceId: "a", explanation: "sort is the alias." },
            { id: "ps-sorting-and-measure-b2", prompt: "-Average on file Length:", choices: [{ id: "a", text: "Mean file size" }, { id: "b", text: "File names only" }, { id: "c", text: "Deletes files" }, { id: "d", text: "Stops services" }], correctChoiceId: "a", explanation: "-Average computes mean of property." },
            { id: "ps-sorting-and-measure-b3", prompt: "Sort-Object Name, Date sorts:", choices: [{ id: "a", text: "By Name then Date within same names" }, { id: "b", text: "Randomly" }, { id: "c", text: "By Date only" }, { id: "d", text: "Illegal" }], correctChoiceId: "a", explanation: "Multiple properties are sort keys in order." },
            { id: "ps-sorting-and-measure-b4", prompt: "Group-Object Department | Select Name, Count:", choices: [{ id: "a", text: "Headcount per department" }, { id: "b", text: "Deletes departments" }, { id: "c", text: "Formats screen only" }, { id: "d", text: "Requires SQL" }], correctChoiceId: "a", explanation: "Classic summary pattern for categories." },
            { id: "ps-sorting-and-measure-b5", prompt: "-Maximum on CPU property:", choices: [{ id: "a", text: "Largest CPU value in set" }, { id: "b", text: "Minimum CPU" }, { id: "c", text: "Count of processes" }, { id: "d", text: "Exports PDF" }], correctChoiceId: "a", explanation: "-Maximum finds highest value." },
            { id: "ps-sorting-and-measure-b6", prompt: "Script block sort Sort-Object { $_.Length }:", choices: [{ id: "a", text: "Sorts by expression result per object" }, { id: "b", text: "Invalid syntax" }, { id: "c", text: "Only for services" }, { id: "d", text: "Requires Python" }], correctChoiceId: "a", explanation: "Script blocks compute sort keys." },
            { id: "ps-sorting-and-measure-b7", prompt: "Pipeline report should end with:", choices: [{ id: "a", text: "Export-Csv or Format-* for display — not both mid-pipeline" }, { id: "b", text: "Remove-Item" }, { id: "c", text: "Restart-Computer" }, { id: "d", text: "Clear-Host only" }], correctChoiceId: "a", explanation: "Deliver data then format or export." },
            { id: "ps-sorting-and-measure-b8", prompt: "Empty Measure-Object input:", choices: [{ id: "a", text: "Count 0 — handle in scripts" }, { id: "b", text: "Always throws" }, { id: "c", text: "Returns infinity" }, { id: "d", text: "Reboots PC" }], correctChoiceId: "a", explanation: "Zero objects yields Count 0." },
          ],
          flashcards: [
            { id: "ps-sorting-and-measure-f1", front: "Sort largest first?", back: "Sort-Object Prop -Descending" },
            { id: "ps-sorting-and-measure-f2", front: "Total file size?", back: "Measure-Object -Property Length -Sum" },
            { id: "ps-sorting-and-measure-f3", front: "How many objects?", back: "Measure-Object or ( $_ ).Count" },
            { id: "ps-sorting-and-measure-f4", front: "Count per category?", back: "Group-Object Prop | Select Name, Count" },
            { id: "ps-sorting-and-measure-f5", front: "Report pipeline order?", back: "Get → Where → Select → Sort → Export/Measure" },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-pipeline-report",
              title: "Pipeline Report Lab",
              type: "external-lab",
              instructions: `Build a service report in PowerShell:

1. Run Get-Service | Group-Object Status | Select-Object Name, Count — note running vs stopped counts.
2. Run Get-Service | Where-Object { $_.Status -eq 'Running' } | Sort-Object DisplayName | Select-Object Name, DisplayName, StartType.
3. Export step 2 to .\\running-services.csv with Export-Csv -NoTypeInformation.
4. Run Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU.
5. Run Get-ChildItem $env:TEMP -File | Measure-Object -Property Length -Sum.

Write one sentence explaining what each step produced. Fix errors with Get-Help.`,
              estimatedMinutes: 30,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Grouped services by status with counts",
                "Filtered, sorted, and exported running services to CSV",
                "Produced top-five CPU process list",
                "Measured total byte size of temp files",
              ],
              relatedTopicIds: [
                "ps-filtering-with-where",
                "ps-shaping-with-select",
                "ps-sorting-and-measure",
              ],
              order: 3,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "powershell-output-admin",
      name: "Module 4 — Output & Admin Tasks",
      topics: [
        {
          id: "ps-formatting-and-export",
          name: "Formatting & Export",
          prerequisites: ["ps-sorting-and-measure"],
          objectives: ["PS-M04-O1", "PS-M04-O2", "PS-M04-O3"],
          lesson: {
            title: "Formatting and Export",
            content: `The screen is not the report. Format-Table and Format-List turn objects into human-readable text for the console. Format-Table Name, CPU -AutoSize aligns columns. Format-List shows every property vertically — good for one detailed object. Format-Wide shows few columns across the screen.

Format cmdlets destroy object pipelines — output is text, not objects. Always complete filtering, sorting, and Export-Csv before Format-Table. If you need pretty screen output and a file, run two pipelines or store results in a variable first: $data = Get-Service | Where-Object ...; $data | Export-Csv ...; $data | Format-Table.

Export-Csv converts objects to comma-separated files Excel opens. Export-Csv .\\out.csv -NoTypeInformation avoids the type header line. Import-Csv reads files back as objects. Out-File and Set-Content write text; prefer Export-Csv for structured data.

ConvertTo-Json and ConvertFrom-Json move between objects and JSON for APIs and config files. Out-GridView opens interactive grid filtering — useful for exploration, not automation. Write-Host prints custom messages but does not belong in pipelines — it bypasses normal output streams.

Workplace rule: objects until the last step, then format for humans or export for spreadsheets. Your manager reads CSV; you explore with Format-Table.

Encoding matters for international teams: Export-Csv -Encoding utf8 avoids garbled characters when names include accents. Import-Csv on older Excel may need UTF-8 BOM — test one file before automating hundreds. Out-File -Append adds transcript lines; Export-Csv overwrites by default unless you merge manually.

For email attachments, zip CSV plus transcript together — proves what command produced the data. Format-List one sample object in transcript helps reviewers understand columns without opening Excel.

Schedule a five-minute weekly drill: pick one Format-* and one Export-* cmdlet, run both from the same $variable on harmless Get-* output. That pairing habit prevents the mid-pipeline Format mistake forever.

ConvertTo-Json -Depth parameter matters when objects nest — default depth truncates silently. For admin summaries flat objects suffice; JSON APIs may need deeper depth and testing against the receiving system before production schedules rely on output.

Out-File -Encoding utf8 versus default can matter for tools reading your exports on Linux shares — when in doubt, test round-trip Import-Csv or Import-Clixml on a sample file before automating nightly jobs that feed other teams systems.

Formatting is presentation; export is delivery — never confuse the two in ticket attachments. If attachment opens correctly in Excel with sortable columns, you exported objects correctly regardless of how plain the console looked. Module 4 begins the shift from exploration to deliverables managers can file.`,
            experience: PS_FORMATTING_AND_EXPORT_EXPERIENCE,
          },
          keyFacts: [
            "Format-Table / Format-List display objects — end of pipeline for objects",
            "Export-Csv saves structured data — use -NoTypeInformation",
            "Import-Csv reads CSV back as objects",
            "Format-* output is text — cannot pipe to Select-Object afterward",
            "Store in $variable to both export and display same data",
            "ConvertTo-Json for API payloads and structured logs",
          ],
          guidedExample: {
            title: "Display and Export the Same Data",
            steps: [
              "Run $svc = Get-Service | Where-Object { $_.Status -eq 'Running' }.",
              "Run $svc | Export-Csv .\\running.csv -NoTypeInformation.",
              "Run $svc | Format-Table Name, Status, StartType -AutoSize.",
              "Run Import-Csv .\\running.csv | Select-Object -First 3 Name.",
              "Run Get-Process | Select-Object -First 2 Name, Id | ConvertTo-Json.",
              "Compare: Get-Process | Format-Table vs Select-Object — note export difference.",
            ],
          },
          commonMistakes: [
            "Piping Format-Table to Export-Csv — garbage columns",
            "Omitting -NoTypeInformation and confusing Excel with #TYPE line",
            "Using Write-Host for data output — breaks pipeline capture",
            "Out-File default encoding surprises — specify -Encoding utf8 when needed",
          ],
          examTraps: [
            "Ticket says attach CSV — teammate screenshots Format-Table instead",
            "Double-click CSV in Excel shows scientific notation for long IDs — format columns in Excel",
            "Out-GridView used in scheduled task — requires interactive desktop",
            "JSON export of huge pipeline without Select-Object first — massive files",
          ],
          realWorldScenario:
            "Auditors need all local administrators exported nightly. Your script stores query results in $rows, exports CSV to a share, and logs Format-Table summary to transcript — same data, two audiences.",
          quiz: [
            { id: "ps-formatting-and-export-q1", prompt: "Format-Table mid-pipeline breaks export because:", choices: [{ id: "a", text: "It outputs display strings, not objects" }, { id: "b", text: "It is deprecated" }, { id: "c", text: "It requires Linux" }, { id: "d", text: "It deletes source data" }], correctChoiceId: "a", explanation: "Formatted output is not object-shaped.", difficulty: "easy" },
            { id: "ps-formatting-and-export-q2", prompt: "Best cmdlet to save objects for Excel:", choices: [{ id: "a", text: "Export-Csv" }, { id: "b", text: "Write-Host" }, { id: "c", text: "Format-List only" }, { id: "d", text: "Clear-Host" }], correctChoiceId: "a", explanation: "Export-Csv preserves column structure.", difficulty: "easy" },
            { id: "ps-formatting-and-export-q3", prompt: "-NoTypeInformation on Export-Csv:", choices: [{ id: "a", text: "Removes #TYPE header from CSV" }, { id: "b", text: "Encrypts file" }, { id: "c", text: "Adds BOM always" }, { id: "d", text: "Requires admin" }], correctChoiceId: "a", explanation: "Cleaner CSV without type info line.", difficulty: "easy" },
            { id: "ps-formatting-and-export-q4", prompt: "Import-Csv returns:", choices: [{ id: "a", text: "Objects with properties from column headers" }, { id: "b", text: "Plain hex" }, { id: "c", text: "Services running" }, { id: "d", text: "Nothing useful" }], correctChoiceId: "a", explanation: "CSV rows become PSCustomObject rows.", difficulty: "medium" },
            { id: "ps-formatting-and-export-q5", prompt: "Show and save same filtered list:", choices: [{ id: "a", text: "Store in variable; export then format" }, { id: "b", text: "Format then export same pipeline" }, { id: "c", text: "Only screenshot" }, { id: "d", text: "Print paper only" }], correctChoiceId: "a", explanation: "Variables hold objects for multiple outputs.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-formatting-and-export-b1", prompt: "Format-List best for:", choices: [{ id: "a", text: "One object — all properties listed" }, { id: "b", text: "Sorting CPU" }, { id: "c", text: "Deleting files" }, { id: "d", text: "DNS queries" }], correctChoiceId: "a", explanation: "Vertical list for detail view." },
            { id: "ps-formatting-and-export-b2", prompt: "ConvertTo-Json used for:", choices: [{ id: "a", text: "API and structured text exchange" }, { id: "b", text: "Disk partitioning" }, { id: "c", text: "Stopping services" }, { id: "d", text: "Registry only" }], correctChoiceId: "a", explanation: "JSON serializes objects." },
            { id: "ps-formatting-and-export-b3", prompt: "Out-File vs Export-Csv:", choices: [{ id: "a", text: "Out-File writes text lines; Export-Csv writes structured columns" }, { id: "b", text: "Identical always" }, { id: "c", text: "Out-File is objects only" }, { id: "d", text: "Export-Csv is deprecated" }], correctChoiceId: "a", explanation: "Choose based on output shape needed." },
            { id: "ps-formatting-and-export-b4", prompt: "Out-GridView requires:", choices: [{ id: "a", text: "Interactive desktop session" }, { id: "b", text: "Linux kernel" }, { id: "c", text: "Mainframe" }, { id: "d", text: "No PowerShell" }], correctChoiceId: "a", explanation: "GridView is GUI — poor for headless tasks." },
            { id: "ps-formatting-and-export-b5", prompt: "Write-Host output:", choices: [{ id: "a", text: "Goes to information stream — not normal pipeline" }, { id: "b", text: "Is same as Export-Csv" }, { id: "c", text: "Cannot include text" }, { id: "d", text: "Replaces Format-Table" }], correctChoiceId: "a", explanation: "Write-Host is for messages, not data pipelines." },
            { id: "ps-formatting-and-export-b6", prompt: "Format-Table -AutoSize:", choices: [{ id: "a", text: "Adjusts column widths to content" }, { id: "b", text: "Deletes columns" }, { id: "c", text: "Exports JSON" }, { id: "d", text: "Runs as SYSTEM" }], correctChoiceId: "a", explanation: "AutoSize fits columns to data." },
            { id: "ps-formatting-and-export-b7", prompt: "Re-import CSV to filter again:", choices: [{ id: "a", text: "Import-Csv then Where-Object" }, { id: "b", text: "Open in Notepad and pipe" }, { id: "c", text: "Format-Table only" }, { id: "d", text: "Impossible" }], correctChoiceId: "a", explanation: "Import-Csv restores objects for pipelines." },
            { id: "ps-formatting-and-export-b8", prompt: "Default rule for reports:", choices: [{ id: "a", text: "Objects until export or final format" }, { id: "b", text: "Format first always" }, { id: "c", text: "Never export" }, { id: "d", text: "Avoid variables" }], correctChoiceId: "a", explanation: "Core pipeline discipline." },
          ],
          flashcards: [
            { id: "ps-formatting-and-export-f1", front: "Screen table?", back: "Format-Table — at end, objects die after" },
            { id: "ps-formatting-and-export-f2", front: "Excel-friendly export?", back: "Export-Csv -NoTypeInformation" },
            { id: "ps-formatting-and-export-f3", front: "CSV back to objects?", back: "Import-Csv path" },
            { id: "ps-formatting-and-export-f4", front: "Export AND display?", back: "Save to $var first, then branch pipelines" },
            { id: "ps-formatting-and-export-f5", front: "JSON serialization?", back: "ConvertTo-Json / ConvertFrom-Json" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
        {
          id: "ps-services-and-processes",
          name: "Services & Processes",
          prerequisites: ["ps-formatting-and-export"],
          objectives: ["PS-M04-O4", "PS-M04-O5", "PS-M04-O6"],
          lesson: {
            title: "Services and Processes",
            content: `Help desk and junior admin work constantly touches what is running and what should start automatically. Get-Process lists processes — CPU, memory, Id. Get-Process -Name chrome or -Id 1234 targets one. Stop-Process -Name notepad closes it — use -WhatIf when testing. Prefer Stop-Process over killing in Task Manager when documenting tickets.

Get-Service lists Windows services and status: Running, Stopped, Paused. Get-Service wuauserv checks Windows Update. Start-Service, Stop-Service, Restart-Service change state — require elevation for many services. Always read service impact before stopping on production; use -WhatIf where supported.

Filter services for reports: Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' } finds services that should run but do not — common after reboot issues. Export results for handoff.

Processes vs services: a service runs in background managed by Service Control Manager; processes are programs you see in Task Manager. Some services spawn processes — correlate with Get-Process and service names when troubleshooting.

Remote admin preview: Get-CimInstance Win32_Service on local machine mirrors much of Get-Service. Stay local in this course — complete the Services and Export lab on your PC. Elevation: run PowerShell as administrator when Start/Stop-Service fails with access denied.

Document before changing state: Get-Service Spooler | Format-List * exports current state to transcript. After Restart-Service, capture again — tickets need before and after. For processes, prefer Stop-Process -Id from verified Get-Process output rather than killing by vague name when multiple instances exist.

Read-only triage should be your default shift habit: export lists, attach CSV, escalate with data. Start/Stop belongs in change windows with approval. The Services and Export lab reinforces read-heavy workflows you can run without admin if policy restricts elevation.

Correlate process CPU spikes with service DisplayName in tickets — names differ and stakeholders confuse them. Export both Get-Process and Get-Service views when escalation needs full context for tier-2 engineers joining mid-incident.

Wait-Process and Start-Process appear in advanced automation — know they exist but stay with Get-Process and Stop-Process until comfortable with -WhatIf and elevation rules. Jumping ahead causes irreversible user data loss on wrong process targets.

Service recovery procedures belong in runbooks with exact cmdlets — Restart-Service Spooler reads clearer than click services.msc during outages when muscle memory fails under stress and auditors need reproducible steps after the fact.

Process Owner column in Task Manager maps to different properties in Get-Process — include Id and Path when escalating memory leaks so tier-2 can distinguish duplicate process names with different binaries on disk.`,
            experience: PS_SERVICES_AND_PROCESSES_EXPERIENCE,
          },
          keyFacts: [
            "Get-Process lists running programs · Stop-Process ends them",
            "Get-Service shows Windows service status and start type",
            "Start-Service / Stop-Service / Restart-Service change service state",
            "Many service changes require elevated PowerShell",
            "Automatic + Stopped is a common troubleshooting filter",
            "Use -WhatIf on destructive cmdlets when available",
          ],
          guidedExample: {
            title: "Triage a Stopped Auto Service",
            steps: [
              "Run Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' } | Select-Object Name, DisplayName, Status.",
              "Pick a non-critical service (e.g., Spooler if safe in lab) — Get-Service Spooler.",
              "Run Start-Service Spooler — if access denied, note need for admin elevation.",
              "Run Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, Id, CPU.",
              "Export auto-stopped list: rerun step 1 pipeline | Export-Csv .\\auto-stopped.csv -NoTypeInformation.",
              "Document which cmdlet is read-only vs changes state in your notes.",
            ],
          },
          commonMistakes: [
            "Stopping critical services (RPC, DNS, AD) on production without change control",
            "Confusing process name with service name — they differ",
            "Running Stop-Process on svchost — can kill multiple services",
            "Forgetting elevation when Start-Service fails silently or access denied",
          ],
          examTraps: [
            "Restart-Service fixes app but root cause was Automatic delayed start misconfig",
            "Killing hung process instead of graceful Stop-Process -Force documentation",
            "Exporting Get-Process after Format-Table — broken CSV again",
            "Assuming Get-Service includes drivers on all Windows editions the same way",
          ],
          realWorldScenario:
            "Print queue stuck after update. Ticket says restart spooler. Get-Service Spooler shows Stopped though StartType Automatic. Restart-Service Spooler; verify Running; attach Get-Service output to ticket — reproducible steps for next shift.",
          quiz: [
            { id: "ps-services-and-processes-q1", prompt: "Read-only cmdlet for services:", choices: [{ id: "a", text: "Get-Service" }, { id: "b", text: "Stop-Service" }, { id: "c", text: "Remove-Service" }, { id: "d", text: "Format-Service" }], correctChoiceId: "a", explanation: "Get-Service lists without changing state.", difficulty: "easy" },
            { id: "ps-services-and-processes-q2", prompt: "Stop a process by name:", choices: [{ id: "a", text: "Stop-Process -Name notepad" }, { id: "b", text: "Get-Location notepad" }, { id: "c", text: "Export-Csv notepad" }, { id: "d", text: "Set-Content notepad" }], correctChoiceId: "a", explanation: "Stop-Process terminates processes.", difficulty: "easy" },
            { id: "ps-services-and-processes-q3", prompt: "Start-Service fails access denied — likely need:", choices: [{ id: "a", text: "Run PowerShell as administrator" }, { id: "b", text: "Delete System32" }, { id: "c", text: "Disable network" }, { id: "d", text: "Use Format-Table" }], correctChoiceId: "a", explanation: "Service control often requires elevation.", difficulty: "easy" },
            { id: "ps-services-and-processes-q4", prompt: "Find auto-start services that are stopped:", choices: [{ id: "a", text: "Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' }" }, { id: "b", text: "Stop-Service *" }, { id: "c", text: "Get-ChildItem C:\\" }, { id: "d", text: "Clear-Host" }], correctChoiceId: "a", explanation: "Classic filter for service triage.", difficulty: "medium" },
            { id: "ps-services-and-processes-q5", prompt: "Get-Process without parameters:", choices: [{ id: "a", text: "Lists processes on local computer" }, { id: "b", text: "Stops all processes" }, { id: "c", text: "Installs updates" }, { id: "d", text: "Creates services" }], correctChoiceId: "a", explanation: "Get-Process is read-only listing.", difficulty: "easy" },
          ],
          questionBank: [
            { id: "ps-services-and-processes-b1", prompt: "Restart-Service does:", choices: [{ id: "a", text: "Stop then start the service" }, { id: "b", text: "Only queries status" }, { id: "c", text: "Formats CSV" }, { id: "d", text: "Deletes logs" }], correctChoiceId: "a", explanation: "Restart is stop+start cycle." },
            { id: "ps-services-and-processes-b2", prompt: "Process Id column used for:", choices: [{ id: "a", text: "Stop-Process -Id targeting" }, { id: "b", text: "DNS lookup" }, { id: "c", text: "File copy" }, { id: "d", text: "Registry export" }], correctChoiceId: "a", explanation: "Id uniquely identifies a process instance." },
            { id: "ps-services-and-processes-b3", prompt: "StartType Automatic means:", choices: [{ id: "a", text: "Service should start at boot" }, { id: "b", text: "Never starts" }, { id: "c", text: "Manual only always" }, { id: "d", text: "Disabled legally" }], correctChoiceId: "a", explanation: "Automatic services start with Windows." },
            { id: "ps-services-and-processes-b4", prompt: "Before Stop-Process on unknown process:", choices: [{ id: "a", text: "Identify process owner and purpose" }, { id: "b", text: "Stop all svchost" }, { id: "c", text: "Skip documentation" }, { id: "d", text: "Disable firewall" }], correctChoiceId: "a", explanation: "Avoid killing critical system processes." },
            { id: "ps-services-and-processes-b5", prompt: "Get-Process | Sort-Object CPU -Descending helps:", choices: [{ id: "a", text: "Find CPU-heavy processes" }, { id: "b", text: "Install printers" }, { id: "c", text: "Change passwords" }, { id: "d", text: "Edit GPO" }], correctChoiceId: "a", explanation: "Sort by CPU for performance triage." },
            { id: "ps-services-and-processes-b6", prompt: "Service Status Running means:", choices: [{ id: "a", text: "Service is active" }, { id: "b", text: "Service uninstalled" }, { id: "c", text: "Process deleted" }, { id: "d", text: "Network down" }], correctChoiceId: "a", explanation: "Running vs Stopped vs Paused." },
            { id: "ps-services-and-processes-b7", prompt: "Export service report:", choices: [{ id: "a", text: "Get-Service | Select-Object ... | Export-Csv" }, { id: "b", text: "Format-Table | Export-Csv" }, { id: "c", text: "Write-Host | Export-Csv" }, { id: "d", text: "Stop-Service | Export-Csv" }], correctChoiceId: "a", explanation: "Export objects before formatting." },
            { id: "ps-services-and-processes-b8", prompt: "-WhatIf on Stop-Process:", choices: [{ id: "a", text: "Shows what would stop without stopping" }, { id: "b", text: "Force kill hidden" }, { id: "c", text: "Starts service" }, { id: "d", text: "Exports JSON" }], correctChoiceId: "a", explanation: "Preview destructive action safely." },
          ],
          flashcards: [
            { id: "ps-services-and-processes-f1", front: "List services?", back: "Get-Service" },
            { id: "ps-services-and-processes-f2", front: "Restart print spooler?", back: "Restart-Service Spooler (elevated if needed)" },
            { id: "ps-services-and-processes-f3", front: "Kill process by name?", back: "Stop-Process -Name name" },
            { id: "ps-services-and-processes-f4", front: "Auto but stopped filter?", back: "StartType Automatic AND Status Stopped" },
            { id: "ps-services-and-processes-f5", front: "Top CPU processes?", back: "Get-Process | Sort-Object CPU -Descending | Select -First N" },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-services-export",
              title: "Services and Export Lab",
              type: "external-lab",
              instructions: `Complete on your PC (admin optional but helpful):

1. Run Get-Service | Group-Object Status | Select-Object Name, Count.
2. Run Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' } | Select-Object Name, DisplayName, Status | Export-Csv .\\auto-stopped.csv -NoTypeInformation.
3. Run Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name, Id, @{N='MemMB';E={[math]::Round($_.WorkingSet64/1MB,1)}}.
4. If safe, run Get-Service Spooler and note Status. Do NOT stop critical services on a work PC without approval.
5. Open auto-stopped.csv in Excel or Notepad — verify columns.

Record one service you would investigate from the CSV and why.`,
              estimatedMinutes: 25,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Grouped services by status",
                "Exported automatic-but-stopped services to CSV",
                "Listed top five processes by memory",
                "Opened and verified CSV contents",
              ],
              relatedTopicIds: [
                "ps-formatting-and-export",
                "ps-services-and-processes",
              ],
              order: 4,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "ps-variables-and-quoting",
          name: "Variables & Quoting",
          prerequisites: ["ps-services-and-processes"],
          objectives: ["PS-M04-O7", "PS-M04-O8", "PS-M04-O9"],
          lesson: {
            title: "Variables and Quoting",
            content: `Variables store values for reuse: $name = 'Taylor'. Reference with $name. PowerShell variables start with $ but assignment has no $ on the left: $path = 'C:\\Logs' — not $path = ... with extra dollar on left side wrong pattern is just $path = value.

Strings use single quotes 'literal' — no expansion inside. Double quotes "expand $variables and $(subexpressions)". Paths with spaces need quotes: Set-Location "C:\\Program Files". Here-strings @' multi line literal '@ or @" multi line expand "@ for blocks of text.

Environment variables: $env:USERNAME, $env:COMPUTERNAME, $env:TEMP — same names as Windows env vars. $PWD is current location object; $HOME profile path. $_ is pipeline variable; $null is empty.

Combine variables in pipelines: $folder = $env:TEMP; Get-ChildItem $folder -File. Subexpression $(Get-Date) runs command inside double quotes: "Report generated $(Get-Date)". Avoid smart quotes from Word — straight quotes only.

Script readiness: meaningful variable names ($serviceReport not $x), quote paths always, use -join or -f format operator for complex messages: 'User {0} on {1}' -f $user, $env:COMPUTERNAME. Module 5 adds if and loops using these variables.

Backtick is line continuation — avoid trailing spaces after backtick or the next line fails mysteriously. Here-strings for email bodies or JSON chunks reduce quote escaping pain. When building paths from variables, prefer Join-Path over manual backslash concatenation — fewer double-slash bugs on UNC paths.

Test quoting by Write-Output the string before using it in Remove-Item or Set-Location. If expansion looks wrong, switch quote types or use subexpression $() for clarity.

Build a personal variable cheat sheet: $env:COMPUTERNAME, $env:USERNAME, $env:TEMP, $PWD, $null, $_. Tape it near your monitor until quoting becomes automatic — most early script failures are quote or path related, not logic errors.

Escape literal double quotes inside double-quoted strings with backtick before quote or use single-quoted outer strings with concatenation. Email templates and user display names with apostrophes break naive scripts — test with awkward sample names intentionally.

Read host documentation when passing variables to external exe files — argument quoting rules differ from native PowerShell. Start-Process and legacy tools often need careful quote nesting that variables alone do not solve without trial on a test path first.

Variables make scripts reusable — capstone parameters like $ReportFolder exist because hardcoded paths break when another analyst runs the same script from a different profile or machine without editing internals. Quoting and variables together unlock Module 5 scripting — reread this topic if capstone strings look wrong.`,
            experience: PS_VARIABLES_AND_QUOTING_EXPERIENCE,
          },
          keyFacts: [
            "Assign: $name = 'value' — use $ to read, not on left of assignment",
            "Single quotes = literal · double quotes expand $variables",
            "Paths with spaces must be quoted",
            "$env:VAR accesses environment variables",
            "$(command) runs subexpression inside double-quoted strings",
            "$null represents no value — test with -eq $null",
          ],
          guidedExample: {
            title: "Build a Path Variable Report Line",
            steps: [
              "Run $target = $env:TEMP; Get-ChildItem $target -File | Measure-Object.",
              "Run $msg = \"Scanning $target on $env:COMPUTERNAME\"; Write-Output $msg.",
              "Run $literal = ' $env:TEMP is not expanded here'; Write-Output $literal.",
              "Run Set-Location \"C:\\Program Files\" — quotes required; cd back with Set-Location ~.",
              "Run $date = Get-Date -Format yyyy-MM-dd; \"Report-$date.txt\".",
              "Run if ($null -eq $fake) { 'Variable unset' } — $null comparison.",
            ],
          },
          commonMistakes: [
            "Using smart/curly quotes from email — breaks parsing",
            "Forgetting quotes on paths with spaces",
            "Using double quotes when literal $ signs needed — switch to single quotes",
            "Confusing = assignment with -eq comparison in expressions",
          ],
          examTraps: [
            "Copy-paste path from Explorer loses quotes — command breaks at Program Files",
            "String ' $env:USERNAME ' in single quotes does not expand — expected username missing",
            "Building file path with \\ trailing escape errors — use Join-Path",
            "$variable inside single-quoted SQL or JSON passed to tool — expansion surprise",
          ],
          realWorldScenario:
            "Backup script sets $source = '\\\\fileserver\\share\\data' and $dest = \"D:\\Backups\\$(Get-Date -Format yyyyMMdd)\" then copies with Copy-Item — readable, logged paths in transcript for audit.",
          quiz: [
            { id: "ps-variables-and-quoting-q1", prompt: "Assign value Taylor to variable name:", choices: [{ id: "a", text: "$name = 'Taylor'" }, { id: "b", text: "name = Taylor" }, { id: "c", text: "$$name = Taylor" }, { id: "d", text: "Set-Variable only" }], correctChoiceId: "a", explanation: "PowerShell assignment uses $name = value.", difficulty: "easy" },
            { id: "ps-variables-and-quoting-q2", prompt: "Single-quoted strings:", choices: [{ id: "a", text: "Treat content literally — no $ expansion" }, { id: "b", text: "Always expand variables" }, { id: "c", text: "Are illegal" }, { id: "d", text: "Require admin" }], correctChoiceId: "a", explanation: "Single quotes are literal strings.", difficulty: "easy" },
            { id: "ps-variables-and-quoting-q3", prompt: "Current Windows username env var:", choices: [{ id: "a", text: "$env:USERNAME" }, { id: "b", text: "$USERNAME only always" }, { id: "c", text: "Get-User" }, { id: "d", text: "$WindowsUser" }], correctChoiceId: "a", explanation: "Environment variables live in $env: drive.", difficulty: "easy" },
            { id: "ps-variables-and-quoting-q4", prompt: "Path C:\\Program Files needs:", choices: [{ id: "a", text: "Quotes around the path" }, { id: "b", text: "No cmdlet name" }, { id: "c", text: "Binary mode" }, { id: "d", text: "Restart" }], correctChoiceId: "a", explanation: "Spaces break unquoted paths into multiple arguments.", difficulty: "easy" },
            { id: "ps-variables-and-quoting-q5", prompt: "$(Get-Date) inside double quotes:", choices: [{ id: "a", text: "Runs Get-Date and inserts result in string" }, { id: "b", text: "Is a syntax error always" }, { id: "c", text: "Deletes files" }, { id: "d", text: "Only works in Linux" }], correctChoiceId: "a", explanation: "Subexpression operator evaluates inside strings.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-variables-and-quoting-b1", prompt: "$null test:", choices: [{ id: "a", text: "$var -eq $null" }, { id: "b", text: "$var = null.exe" }, { id: "c", text: "Remove-Variable only" }, { id: "d", text: "Format-Table null" }], correctChoiceId: "a", explanation: "Compare to $null for empty values." },
            { id: "ps-variables-and-quoting-b2", prompt: "$env:TEMP points to:", choices: [{ id: "a", text: "User temp folder" }, { id: "b", text: "CPU temperature" }, { id: "c", text: "Permanent storage" }, { id: "d", text: "DNS server" }], correctChoiceId: "a", explanation: "Standard Windows environment variable." },
            { id: "ps-variables-and-quoting-b3", prompt: "Join-Path helps:", choices: [{ id: "a", text: "Build paths without manual \\ errors" }, { id: "b", text: "Stop services" }, { id: "c", text: "Sort processes" }, { id: "d", text: "Format JSON" }], correctChoiceId: "a", explanation: "Join-Path combines path segments safely." },
            { id: "ps-variables-and-quoting-b4", prompt: "-f format operator:", choices: [{ id: "a", text: "'{0}' -f $value string formatting" }, { id: "b", text: "Force parameter only" }, { id: "c", text: "Filter objects" }, { id: "d", text: "Find files" }], correctChoiceId: "a", explanation: "-f inserts values into placeholders." },
            { id: "ps-variables-and-quoting-b5", prompt: "Here-string @' '@ used for:", choices: [{ id: "a", text: "Multi-line literal text blocks" }, { id: "b", text: "DNS records" }, { id: "c", text: "GPU drivers" }, { id: "d", text: "Stop-Process" }], correctChoiceId: "a", explanation: "Here-strings preserve multi-line content." },
            { id: "ps-variables-and-quoting-b6", prompt: "$PWD contains:", choices: [{ id: "a", text: "Current location object" }, { id: "b", text: "Password" }, { id: "c", text: "Printer list" }, { id: "d", text: "CPU count only" }], correctChoiceId: "a", explanation: "Automatic variable for present directory." },
            { id: "ps-variables-and-quoting-b7", prompt: "Double vs single quote choice:", choices: [{ id: "a", text: "Double when you need $ expansion" }, { id: "b", text: "Always single for paths" }, { id: "c", text: "Never quote" }, { id: "d", text: "Use backticks only" }], correctChoiceId: "a", explanation: "Pick quote style based on expansion need." },
            { id: "ps-variables-and-quoting-b8", prompt: "Good variable name:", choices: [{ id: "a", text: "$serviceReportPath" }, { id: "b", text: "$x" }, { id: "c", text: "$aaaa" }, { id: "d", text: "$1" }], correctChoiceId: "a", explanation: "Descriptive names aid script maintenance." },
          ],
          flashcards: [
            { id: "ps-variables-and-quoting-f1", front: "Assign variable?", back: "$name = 'value'" },
            { id: "ps-variables-and-quoting-f2", front: "Literal string?", back: "Single quotes 'no $ expansion'" },
            { id: "ps-variables-and-quoting-f3", front: "Expand in string?", back: "Double quotes \"Hello $env:USERNAME\"" },
            { id: "ps-variables-and-quoting-f4", front: "Env var?", back: "$env:COMPUTERNAME, $env:TEMP, etc." },
            { id: "ps-variables-and-quoting-f5", front: "Subexpression in string?", back: "\"Today is $(Get-Date)\"" },
            { id: "ps-variables-and-quoting-f6", front: "Empty value?", back: "$null" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "powershell-scripting-capstone",
      name: "Module 5 — Scripting & Capstone",
      topics: [
        {
          id: "ps-if-and-loops",
          name: "If & Loops",
          prerequisites: ["ps-variables-and-quoting"],
          objectives: ["PS-M05-O1", "PS-M05-O2", "PS-M05-O3"],
          lesson: {
            title: "If Statements and Loops",
            content: `Scripts add decisions and repetition. if ($service.Status -eq 'Stopped') { Start-Service $service.Name } runs Start-Service only when condition is true. elseif and else handle alternate branches. Conditions use comparison operators -eq -ne -gt -lt and logical -and -or -not.

switch ($status) { 'Running' { 'OK' } 'Stopped' { 'Down' } default { 'Unknown' } } matches multiple discrete values cleanly — good for ticket status codes.

Loops repeat work. foreach ($svc in Get-Service) { ... } walks a collection. foreach ($file in Get-ChildItem *.log) { ... } processes each file. while ($true) { ... } runs until break — use carefully. do { ... } while ($condition) runs at least once.

Pipeline loop: Get-ChildItem | ForEach-Object { $_.FullName }. ForEach-Object (alias %) script block runs per object — similar to foreach but pipeline-native. break exits loop; continue skips to next iteration.

Save scripts as .ps1 files: Set-Location folder; run .\\myscript.ps1. Execution policy may block scripts — Get-ExecutionPolicy shows level; use Set-ExecutionPolicy RemoteSigned for local scripts on lab PC with admin approval. Complete the First Script lab to combine if checks with a foreach report.

Indent script blocks consistently — one tab per level inside if and foreach. Future you reads elseif faster when braces line up. Use Write-Output for data you might capture; reserve Write-Host for human-only status lines that should not feed Export-Csv.

Test loops on small sets first: Get-ChildItem one folder before -Recurse entire drive. foreach is clearer for collections already in variables; ForEach-Object fits pipeline streaming when memory matters on huge sets.

Add a fake -WhatIf branch in practice scripts: if ($WhatIfPreference) { Write-Output 'Would run...' } — trains you for cmdlets that support -WhatIf natively in Module 5 capstone and future production change scripts.

switch versus if chains: three or more discrete string matches favor switch for readability. Numeric ranges still fit if with comparison operators — choose clarity over golf-score line counts when scripts live for years.

Set-StrictMode -Version Latest in lab scripts catches undeclared variables early — optional for capstone but valuable when expanding scripts later. Typos in variable names otherwise create silent $null behavior that empty reports without errors.

Indentation inside braces is not vanity — mismatched braces cause parse errors at line numbers far from the real typo. Use an editor that highlights matching braces when scripts exceed twenty lines in the First Script lab. The First Script lab is the bridge from commands to saved automation — complete it before functions.`,
            experience: PS_IF_AND_LOOPS_EXPERIENCE,
          },
          lightbulbMoment:
            "if decides once per branch; foreach and ForEach-Object repeat the same safe steps for every item in a collection.",
          keyFacts: [
            "if (condition) { commands } — use -eq not = in conditions",
            "foreach ($item in $collection) { process each item }",
            "ForEach-Object { } processes each pipeline object",
            "switch handles many discrete matching values",
            "Save reusable work as .ps1 script files",
            "Execution policy controls whether scripts run — check before deploying",
          ],
          guidedExample: {
            title: "Restart Stopped Auto Services Script Block",
            steps: [
              "Run $targets = Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' }.",
              "Run foreach ($svc in $targets) { Write-Output \"Would start: $($svc.Name)\" } — dry run listing.",
              "Wrap with if ($targets.Count -gt 0) { ... } else { 'None found' }.",
              "Run $targets | ForEach-Object { $_.DisplayName } — pipeline loop equivalent.",
              "Save commands to .\\check-services.ps1 and run with . .\\check-services.ps1.",
              "Run Get-ExecutionPolicy — note current policy before running scripts.",
            ],
          },
          commonMistakes: [
            "Using = instead of -eq inside if ( ) conditions",
            "Infinite while ($true) without break condition",
            "Modifying collection while foreach iterates it — unexpected skips",
            "Running unsigned scripts from internet without review",
          ],
          examTraps: [
            "Copy script from forum — runs Remove-Item inside foreach without -WhatIf test",
            "Execution policy RemoteSigned vs Unrestricted confusion on shared machines",
            "foreach vs ForEach-Object — both valid; pipeline vs collection source differs",
            "if ($var) treats empty string as false — explicit -eq $null clearer for beginners",
          ],
          realWorldScenario:
            "Nightly health check script: foreach ($svc in $criticalServices) { if ((Get-Service $svc).Status -ne 'Running') { Send-MailMessage -Body \"$svc down on $env:COMPUTERNAME\" } } — same logic you build in the lab, scaled to monitoring.",
          quiz: [
            { id: "ps-if-and-loops-q1", prompt: "If condition syntax uses:", choices: [{ id: "a", text: "if ($x -eq 1) { ... }" }, { id: "b", text: "if ($x = 1) always" }, { id: "c", text: "if x == 1" }, { id: "d", text: "if [x eq 1]" }], correctChoiceId: "a", explanation: "PowerShell conditions use -eq inside parentheses.", difficulty: "easy" },
            { id: "ps-if-and-loops-q2", prompt: "Loop each service in $list:", choices: [{ id: "a", text: "foreach ($s in $list) { ... }" }, { id: "b", text: "loop $s $list" }, { id: "c", text: "For-Each-Service" }, { id: "d", text: "Repeat-Item" }], correctChoiceId: "a", explanation: "foreach walks collection elements.", difficulty: "easy" },
            { id: "ps-if-and-loops-q3", prompt: "ForEach-Object is used:", choices: [{ id: "a", text: "In pipelines with script block per object" }, { id: "b", text: "Only for formatting" }, { id: "c", text: "To delete loops" }, { id: "d", text: "Only in Excel" }], correctChoiceId: "a", explanation: "Pipeline-native iteration with % alias.", difficulty: "easy" },
            { id: "ps-if-and-loops-q4", prompt: "Script files extension:", choices: [{ id: "a", text: ".ps1" }, { id: "b", text: ".exe" }, { id: "c", text: ".docx" }, { id: "d", text: ".bat only" }], correctChoiceId: "a", explanation: "PowerShell scripts are .ps1 files.", difficulty: "easy" },
            { id: "ps-if-and-loops-q5", prompt: "Get-ExecutionPolicy shows:", choices: [{ id: "a", text: "Whether scripts are allowed to run" }, { id: "b", text: "CPU speed" }, { id: "c", text: "DNS cache" }, { id: "d", text: "Printer queue" }], correctChoiceId: "a", explanation: "Execution policy gates script execution.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-if-and-loops-b1", prompt: "else branch runs when:", choices: [{ id: "a", text: "If condition is false" }, { id: "b", text: "Always first" }, { id: "c", text: "Never" }, { id: "d", text: "CPU idle" }], correctChoiceId: "a", explanation: "else handles false if path." },
            { id: "ps-if-and-loops-b2", prompt: "switch ($x) { 'A' { ... } } matches:", choices: [{ id: "a", text: "Discrete values of $x" }, { id: "b", text: "Only numbers" }, { id: "c", text: "Files only" }, { id: "d", text: "Registry only" }], correctChoiceId: "a", explanation: "switch is multi-branch equality match." },
            { id: "ps-if-and-loops-b3", prompt: "break in loop:", choices: [{ id: "a", text: "Exits the loop early" }, { id: "b", text: "Deletes script" }, { id: "c", text: "Formats disk" }, { id: "d", text: "Starts services" }], correctChoiceId: "a", explanation: "break stops loop execution." },
            { id: "ps-if-and-loops-b4", prompt: "continue in loop:", choices: [{ id: "a", text: "Skips to next iteration" }, { id: "b", text: "Stops PC" }, { id: "c", text: "Exports CSV" }, { id: "d", text: "Clears history" }], correctChoiceId: "a", explanation: "continue jumps to next item." },
            { id: "ps-if-and-loops-b5", prompt: "Run script .\\tool.ps1 from same folder:", choices: [{ id: "a", text: ". .\\tool.ps1 or .\\tool.ps1 depending on path" }, { id: "b", text: "double-click only" }, { id: "c", text: "Not possible" }, { id: "d", text: "Requires Python" }], correctChoiceId: "a", explanation: "Dot-source or call script by path." },
            { id: "ps-if-and-loops-b6", prompt: "-not in condition:", choices: [{ id: "a", text: "Logical negation" }, { id: "b", text: "Network test" }, { id: "c", text: "New object" }, { id: "d", text: "Null assign" }], correctChoiceId: "a", explanation: "-not reverses boolean result." },
            { id: "ps-if-and-loops-b7", prompt: "while loop risk:", choices: [{ id: "a", text: "Infinite loop if condition never becomes false" }, { id: "b", text: "Cannot iterate" }, { id: "c", text: "Only one iteration always" }, { id: "d", text: "Requires GUI" }], correctChoiceId: "a", explanation: "Ensure exit condition exists." },
            { id: "ps-if-and-loops-b8", prompt: "RemoteSigned policy means:", choices: [{ id: "a", text: "Local scripts run; downloaded need signature" }, { id: "b", text: "No scripts ever" }, { id: "c", text: "All scripts blocked" }, { id: "d", text: "Only macros" }], correctChoiceId: "a", explanation: "Common lab/workstation policy level." },
          ],
          flashcards: [
            { id: "ps-if-and-loops-f1", front: "If syntax?", back: "if (condition) { } elseif () { } else { }" },
            { id: "ps-if-and-loops-f2", front: "Foreach collection?", back: "foreach ($item in $col) { }" },
            { id: "ps-if-and-loops-f3", front: "Pipeline each object?", back: "ForEach-Object { } (alias %)" },
            { id: "ps-if-and-loops-f4", front: "Script extension?", back: ".ps1" },
            { id: "ps-if-and-loops-f5", front: "Check script policy?", back: "Get-ExecutionPolicy" },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-first-script",
              title: "First Script Lab",
              type: "external-lab",
              instructions: `Create a script on your PC:

1. Open Notepad or VS Code; save as check-temp.ps1 in your Documents folder.
2. Add: $files = Get-ChildItem $env:TEMP -File
3. Add: if ($files.Count -eq 0) { Write-Output 'No temp files' } else { Write-Output "Found $($files.Count) files" }
4. Add: $files | Sort-Object Length -Descending | Select-Object -First 3 Name, Length | Format-Table
5. In PowerShell: Set-Location $env:USERPROFILE\\Documents; .\\check-temp.ps1
6. Run Get-ExecutionPolicy — if script blocked, note the message (do not change policy without admin approval).

Save the script — you will reuse script patterns in the capstone.`,
              estimatedMinutes: 30,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Created a .ps1 script with if and pipeline commands",
                "Ran the script from PowerShell",
                "Used variable for file collection count",
                "Checked execution policy status",
              ],
              relatedTopicIds: ["ps-variables-and-quoting", "ps-if-and-loops"],
              order: 5,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "ps-functions-and-parameters",
          name: "Functions & Parameters",
          prerequisites: ["ps-if-and-loops"],
          objectives: ["PS-M05-O4", "PS-M05-O5", "PS-M05-O6"],
          lesson: {
            title: "Functions and Parameters",
            content: `Functions bundle commands with a name you reuse. function Get-TempReport { Get-ChildItem $env:TEMP -File | Measure-Object -Property Length -Sum } then run Get-TempReport. Functions live in session until saved in a .ps1 or module file.

Parameters make functions flexible: function Get-FolderSize { param([string]$Path) Get-ChildItem $Path -File -Recurse | Measure-Object -Property Length -Sum }. Call with Get-FolderSize -Path C:\\Logs. param block at top defines names, types, and defaults: param([string]$Name = 'World').

Mandatory and validation: param([Parameter(Mandatory=$true)][string]$ComputerName). Switch parameters: param([switch]$Detailed) — flag without value. Pipeline input: process block or ValueFromPipelineByPropertyName for advanced patterns — start with simple param lists.

Return values: output objects from pipeline inside function — no need for return keyword unless exiting early. return $null exits function. Write-Output emits objects; Write-Host only prints — same rule as scripts.

Organize scripts: functions at top, main execution at bottom. Comment-based help above function: .SYNOPSIS, .DESCRIPTION, .EXAMPLE for Get-Help compatibility. Workplace scripts become maintainable when repeated logic becomes named functions with parameters instead of copy-paste blocks.

Name functions with approved verbs when possible — Get, Set, New, Test — even for internal scripts. Test-Connection vs Check-Connection: Get-Command lists approved verbs. Parameters with defaults reduce breaking callers when you add optional features later.

AdvancedParameter adds ValidateNotNullOrEmpty and ValidateSet — use when scripts run unattended and bad input causes damage. Start simple with param([string]$Path); add validation after the happy path works in the First Script and Capstone labs.

Refactor one repeated pipeline block into a function before capstone — even ten lines saved clarifies main script flow. Functions are organizational tools, not advanced developer magic; help desk scripts benefit immediately from one well-named function.

Pass parameters by name in scripts — Get-TopCpu -Count 3 — so future parameter reordering does not break callers. Positional parameters save typing interactively but hurt maintainability in shared .ps1 files checked into source control.

Dot-source . .\\lib.ps1 loads functions from another file when capstone grows — preview of how teams share function libraries. Keep one function per concern so dot-sourced files stay readable and Get-Help remains accurate per function.

Functions should do one job — Get-StoppedAutoServices, Export-ServiceCsv, Write-LogLine — composed in main script body. Capstone reviewers look for that separation when deciding if you are script-ready for tier-2 tasks. Write-HealthLog in the capstone lab is intentionally small — real workplace functions grow from that same one-purpose pattern over time with comment help and parameter validation added gradually as scripts mature.`,
            experience: PS_FUNCTIONS_AND_PARAMETERS_EXPERIENCE,
          },
          keyFacts: [
            "function Name { param(...) commands } defines reusable blocks",
            "param([type]$Name) declares parameters with optional defaults",
            "[Parameter(Mandatory=$true)] requires caller to supply value",
            "[switch] parameters are on/off flags",
            "Functions output objects to pipeline like cmdlets",
            "Comment-based help enables Get-Help on your functions",
          ],
          guidedExample: {
            title: "Write Get-TopCpuProcesses",
            steps: [
              "Define: function Get-TopCpu { param([int]$Count = 5) Get-Process | Sort-Object CPU -Descending | Select-Object -First $Count Name, CPU }.",
              "Run Get-TopCpu — default five processes.",
              "Run Get-TopCpu -Count 3 — parameter overrides default.",
              "Add param([switch]$AsJson) and if ($AsJson) { ... | ConvertTo-Json } else { ... }.",
              "Add comment help .SYNOPSIS 'Returns top CPU processes' above function.",
              "Run Get-Help Get-TopCpu — verify help appears.",
            ],
          },
          commonMistakes: [
            "Using Write-Host inside functions meant to return data",
            "Forgetting param block — arguments become $args array awkwardly",
            "Same function name as existing cmdlet — shadows built-ins",
            "No default for switch — unset switch is $false, which is fine — but document behavior",
          ],
          examTraps: [
            "Function copied without param block — positional args misordered silently",
            "Mandatory parameter not passed — PowerShell prompts interactively and breaks scheduled task",
            "Renaming function without updating callers in same script",
            "Thinking return is required for all output — pipeline output suffices",
          ],
          realWorldScenario:
            "Team shared script defines function Export-ServiceReport { param($Path) Get-Service | Select Name, Status | Export-Csv $Path -NoTypeInformation }. On-call runs Export-ServiceReport -Path D:\\Reports\\svc.csv — one line, consistent columns every night.",
          quiz: [
            { id: "ps-functions-and-parameters-q1", prompt: "Function definition starts with:", choices: [{ id: "a", text: "function Name { }" }, { id: "b", text: "def Name()" }, { id: "c", text: "sub Name" }, { id: "d", text: "fn Name" }], correctChoiceId: "a", explanation: "PowerShell uses function keyword.", difficulty: "easy" },
            { id: "ps-functions-and-parameters-q2", prompt: "Mandatory parameter attribute:", choices: [{ id: "a", text: "[Parameter(Mandatory=$true)]" }, { id: "b", text: "[Required-Always]" }, { id: "c", text: "-Must" }, { id: "d", text: "[Force]" }], correctChoiceId: "a", explanation: "Parameter attribute enforces input.", difficulty: "medium" },
            { id: "ps-functions-and-parameters-q3", prompt: "Switch parameter -Detailed:", choices: [{ id: "a", text: "Flag — true when supplied" }, { id: "b", text: "Must be string" }, { id: "c", text: "Deletes files" }, { id: "d", text: "Illegal in functions" }], correctChoiceId: "a", explanation: "[switch] is boolean flag parameter.", difficulty: "medium" },
            { id: "ps-functions-and-parameters-q4", prompt: "Default parameter value syntax:", choices: [{ id: "a", text: "param([int]$Count = 5)" }, { id: "b", text: "param($Count := 5)" }, { id: "c", text: "default Count=5" }, { id: "d", text: "$Count default 5" }], correctChoiceId: "a", explanation: "Assignment in param declaration sets default.", difficulty: "easy" },
            { id: "ps-functions-and-parameters-q5", prompt: "Get-Help on custom function needs:", choices: [{ id: "a", text: "Comment-based help block in script" }, { id: "b", text: "Separate PDF" }, { id: "c", text: "Registry edit" }, { id: "d", text: "Cannot document functions" }], correctChoiceId: "a", explanation: ".SYNOPSIS and .EXAMPLE in comments power Get-Help.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-functions-and-parameters-b1", prompt: "param block placement:", choices: [{ id: "a", text: "First statement inside function" }, { id: "b", text: "After Export-Csv only" }, { id: "c", text: "Outside script file" }, { id: "d", text: "In registry" }], correctChoiceId: "a", explanation: "param must be first in function or script." },
            { id: "ps-functions-and-parameters-b2", prompt: "Function outputs objects via:", choices: [{ id: "a", text: "Pipeline output inside function body" }, { id: "b", text: "Write-Host only" }, { id: "c", text: "Format-Table only" }, { id: "d", text: "Cannot output" }], correctChoiceId: "a", explanation: "Unassigned pipeline output leaves function." },
            { id: "ps-functions-and-parameters-b3", prompt: "return keyword:", choices: [{ id: "a", text: "Exits function early optionally with value" }, { id: "b", text: "Required every line" }, { id: "c", text: "Deletes function" }, { id: "d", text: "Formats disk" }], correctChoiceId: "a", explanation: "return exits function scope." },
            { id: "ps-functions-and-parameters-b4", prompt: "Avoid function name:", choices: [{ id: "a", text: "Same as built-in cmdlet like Get-Process" }, { id: "b", text: "Verb-Noun pattern" }, { id: "c", text: "Descriptive names" }, { id: "d", text: "Comment help" }], correctChoiceId: "a", explanation: "Shadowing cmdlets causes confusion." },
            { id: "ps-functions-and-parameters-b5", prompt: "Typed param [string]$Path:", choices: [{ id: "a", text: "Coerces/expects string input" }, { id: "b", text: "Ignores input" }, { id: "c", text: "Runs only on Linux" }, { id: "d", text: "Blocks pipelines always" }], correctChoiceId: "a", explanation: "Type attributes document and validate input." },
            { id: "ps-functions-and-parameters-b6", prompt: "Save functions permanently:", choices: [{ id: "a", text: "Put in .ps1 or module file" }, { id: "b", text: "Session only forever" }, { id: "c", text: "Screenshots" }, { id: "d", text: "Cannot save" }], correctChoiceId: "a", explanation: "Scripts and modules persist functions." },
            { id: "ps-functions-and-parameters-b7", prompt: ".EXAMPLE in help:", choices: [{ id: "a", text: "Shows sample usage in Get-Help" }, { id: "b", text: "Deletes examples" }, { id: "c", text: "Runs automatically" }, { id: "d", text: "Required by law" }], correctChoiceId: "a", explanation: "Examples appear in Get-Help -Examples." },
            { id: "ps-functions-and-parameters-b8", prompt: "Refactor copy-paste into function when:", choices: [{ id: "a", text: "Same block repeats with small variations" }, { id: "b", text: "Never refactor" }, { id: "c", text: "One-time command" }, { id: "d", text: "GUI only workflows" }], correctChoiceId: "a", explanation: "Parameters capture the variations." },
          ],
          flashcards: [
            { id: "ps-functions-and-parameters-f1", front: "Define function?", back: "function Verb-Noun { param(...) ... }" },
            { id: "ps-functions-and-parameters-f2", front: "Mandatory param?", back: "[Parameter(Mandatory=$true)]" },
            { id: "ps-functions-and-parameters-f3", front: "Switch param?", back: "[switch]$Verbose — flag without value" },
            { id: "ps-functions-and-parameters-f4", front: "Default param value?", back: "param([int]$Top = 10)" },
            { id: "ps-functions-and-parameters-f5", front: "Help on your function?", back: "Comment block .SYNOPSIS / .EXAMPLE above function" },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "hard",
        },
        {
          id: "ps-errors-and-capstone",
          name: "Errors & Capstone",
          prerequisites: ["ps-functions-and-parameters"],
          objectives: ["PS-M05-O7", "PS-M05-O8", "PS-M05-O9"],
          lesson: {
            title: "Errors and Capstone Admin Task",
            content: `Production scripts fail sometimes — your job is failing safely and visibly. $Error automatic variable holds recent errors. $LASTEXITCODE stores exit code of last native command. Try { risky command } catch { Write-Error "Failed: $_" } handles terminating errors in scripts.

ErrorActionPreference and -ErrorAction parameter control noise: SilentlyContinue hides non-terminating errors; Stop promotes to terminating; Continue is default. Use -ErrorAction Stop when missing data should halt the script instead of silently continuing.

Write-Verbose and -Verbose switch show detailed steps; Write-Warning flags concerns. Start-Transcript logs entire session to file — attach to tickets for audit. Comment your capstone script: synopsis, author, date, and what it changes.

Capstone admin task combines the track: build Admin-HealthCheck.ps1 that (1) lists automatic services that are stopped, (2) exports top five CPU processes to CSV, (3) counts temp folder files, (4) logs results with timestamps, (5) uses at least one function with a parameter, (6) uses -ErrorAction sensibly. Run with -WhatIf on any destructive test.

Graduation means you can read help, navigate, pipeline reports, export data, manage services read-only safely, script decisions and loops, wrap logic in functions, and handle errors without panicking. Complete the Capstone Admin lab to finish PowerShell Foundations.

Capstone checklist: param block with sensible default folder; one function writing timestamped log lines; Start-Transcript; two CSV exports from object pipelines; temp file count message; try/catch or -ErrorAction on at least one risky path; Stop-Transcript. Run twice — second run proves idempotent reads and consistent output paths.

After capstone, your next workplace steps are module imports, remoting, and signed scripts — outside this track. You already have the daily driver skills: investigate with Get-*, report with pipelines, deliver CSV evidence, and script repetitive safe checks without fear.

When a script fails in catch, log $_ and $Error[0] to transcript — tier-2 needs the message, not only script failed. Good error hygiene in capstone becomes on-call hygiene when payroll scripts break at 6 AM Sunday.

Review capstone output files with a peer before marking complete — fresh eyes catch wrong sort order, empty CSV headers, or transcript paths pointing to another user profile. Collaboration mirrors workplace script review even when working solo in this track.

Keep capstone script and artifacts in version control or dated folders — Admin-HealthCheck-2026-07-04.ps1 beats Admin-HealthCheck.ps1 when comparing outputs after you improve the script next month and leadership asks what changed between runs.

Error handling is not optional decoration — capstone try/catch proves you read output before declaring success. Workplace scripts without visible failure modes cause false green checks that extend outages instead of shortening them.`,
            experience: PS_ERRORS_AND_CAPSTONE_EXPERIENCE,
          },
          lightbulbMoment:
            "Good scripts fail loud with clear messages — try/catch and -ErrorAction Stop beat silent SilentlyContinue surprises.",
          keyFacts: [
            "$Error and $LASTEXITCODE help diagnose failures",
            "try { } catch { } handles terminating errors",
            "-ErrorAction SilentlyContinue vs Stop changes failure behavior",
            "Start-Transcript logs session output for tickets",
            "Capstone combines Get/Where/Select/Sort/Export plus functions and if/loops",
            "Always test destructive steps with -WhatIf first",
          ],
          guidedExample: {
            title: "Safe Try/Catch Around Export",
            steps: [
              "Run try { Get-Service | Export-Csv .\\svc.csv -NoTypeInformation } catch { Write-Error $_ }.",
              "Run Get-ChildItem Z:\\badpath -ErrorAction Stop inside try/catch — observe catch runs.",
              "Run $Error[0] after a failed command — inspect last error record.",
              "Run Start-Transcript .\\session.log; Get-Location; Stop-Transcript.",
              "Open session.log — verify commands were captured.",
              "Sketch capstone sections: param block, function, main, export paths.",
            ],
          },
          commonMistakes: [
            "SilentlyContinue everywhere — script succeeds on ticket but did nothing",
            "Empty catch { } blocks swallow errors with no logging",
            "No transcript or log on production change scripts",
            "Capstone script runs Remove-* without -WhatIf review",
          ],
          examTraps: [
            "Scheduled task shows success but CSV empty — errors were silently ignored",
            "try/catch does not catch non-terminating errors without -ErrorAction Stop",
            "Transcript left running — locks log file across sessions",
            "Capstone copied from two scripts — inconsistent variable names break on edge cases",
          ],
          realWorldScenario:
            "You inherit a script that stops on first missing registry key and emails failure. You add try/catch per section, Start-Transcript to \\\\share\\logs, and -ErrorAction Stop only on export paths — on-call gets partial success data instead of a blind failure.",
          quiz: [
            { id: "ps-errors-and-capstone-q1", prompt: "try/catch best handles:", choices: [{ id: "a", text: "Terminating errors when configured" }, { id: "b", text: "GUI themes" }, { id: "c", text: "CPU temperature" }, { id: "d", text: "Printer colors" }], correctChoiceId: "a", explanation: "catch blocks need terminating errors or -ErrorAction Stop.", difficulty: "medium" },
            { id: "ps-errors-and-capstone-q2", prompt: "-ErrorAction SilentlyContinue:", choices: [{ id: "a", text: "Hides non-terminating errors and continues" }, { id: "b", text: "Stops PC" }, { id: "c", text: "Exports JSON always" }, { id: "d", text: "Elevates privileges" }], correctChoiceId: "a", explanation: "Use carefully — failures may go unnoticed.", difficulty: "medium" },
            { id: "ps-errors-and-capstone-q3", prompt: "Start-Transcript creates:", choices: [{ id: "a", text: "Log file of session commands and output" }, { id: "b", text: "New user account" }, { id: "c", text: "VPN tunnel" }, { id: "d", text: "DNS zone" }], correctChoiceId: "a", explanation: "Transcripts document what ran for audits.", difficulty: "easy" },
            { id: "ps-errors-and-capstone-q4", prompt: "Capstone should include:", choices: [{ id: "a", text: "Pipeline report, function, export, and safe error handling" }, { id: "b", text: "Only Write-Host" }, { id: "c", text: "Format-Table before every export" }, { id: "d", text: "Remove-Item * without review" }], correctChoiceId: "a", explanation: "Capstone integrates the full curriculum.", difficulty: "easy" },
            { id: "ps-errors-and-capstone-q5", prompt: "$LASTEXITCODE useful after:", choices: [{ id: "a", text: "Native .exe commands like ping or robocopy" }, { id: "b", text: "Get-Help only" }, { id: "c", text: "Comment lines" }, { id: "d", text: "Format-List only" }], correctChoiceId: "a", explanation: "External programs set exit codes PowerShell records.", difficulty: "medium" },
          ],
          questionBank: [
            { id: "ps-errors-and-capstone-b1", prompt: "$Error[0] is:", choices: [{ id: "a", text: "Most recent error record" }, { id: "b", text: "First cmdlet ever" }, { id: "c", text: "CPU count" }, { id: "d", text: "Hostname" }], correctChoiceId: "a", explanation: "Error stack is newest-first index 0." },
            { id: "ps-errors-and-capstone-b2", prompt: "Write-Warning used for:", choices: [{ id: "a", text: "Non-fatal issues user should notice" }, { id: "b", text: "Silent logs only" }, { id: "c", text: "Deleting files" }, { id: "d", text: "Stopping all services" }], correctChoiceId: "a", explanation: "Warnings highlight concerns without stopping by default." },
            { id: "ps-errors-and-capstone-b3", prompt: "-Verbose on advanced function:", choices: [{ id: "a", text: "Shows Write-Verbose messages when enabled" }, { id: "b", text: "Deletes verbose files" }, { id: "c", text: "Disables script" }, { id: "d", text: "Requires cloud" }], correctChoiceId: "a", explanation: "Verbose stream for detailed operational logs." },
            { id: "ps-errors-and-capstone-b4", prompt: "Stop-Transcript:", choices: [{ id: "a", text: "Ends logging started by Start-Transcript" }, { id: "b", text: "Kills processes" }, { id: "c", text: "Clears CSV" }, { id: "d", text: "Opens Excel" }], correctChoiceId: "a", explanation: "Always stop transcript when finished." },
            { id: "ps-errors-and-capstone-b5", prompt: "Capstone exports should use:", choices: [{ id: "a", text: "Export-Csv on objects before Format-*" }, { id: "b", text: "Screenshot only" }, { id: "c", text: "Write-Host redirect" }, { id: "d", text: "Format-Table pipe to CSV" }], correctChoiceId: "a", explanation: "Object export discipline from Module 3–4." },
            { id: "ps-errors-and-capstone-b6", prompt: "finally block in try/catch:", choices: [{ id: "a", text: "Runs cleanup whether or not error occurred" }, { id: "b", text: "Never runs" }, { id: "c", text: "Only on success" }, { id: "d", text: "Replaces catch" }], correctChoiceId: "a", explanation: "finally runs always — good for closing resources." },
            { id: "ps-errors-and-capstone-b7", prompt: "Graduation skill check includes:", choices: [{ id: "a", text: "Get-Help habit and pipeline reports" }, { id: "b", text: "Memorizing every cmdlet" }, { id: "c", text: "Never using variables" }, { id: "d", text: "Avoiding exports" }], correctChoiceId: "a", explanation: "Patterns matter more than memorization." },
            { id: "ps-errors-and-capstone-b8", prompt: "Before capstone submit:", choices: [{ id: "a", text: "Run script twice, verify CSV and transcript, review -WhatIf paths" }, { id: "b", text: "Skip testing" }, { id: "c", text: "Delete all logs" }, { id: "d", text: "Disable errors" }], correctChoiceId: "a", explanation: "Self-QA mirrors workplace delivery standards." },
          ],
          flashcards: [
            { id: "ps-errors-and-capstone-f1", front: "Recent errors?", back: "$Error — newest at index 0" },
            { id: "ps-errors-and-capstone-f2", front: "Catch terminating errors?", back: "try { } catch { } with -ErrorAction Stop if needed" },
            { id: "ps-errors-and-capstone-f3", front: "Hide non-terminating errors?", back: "-ErrorAction SilentlyContinue — use sparingly" },
            { id: "ps-errors-and-capstone-f4", front: "Log whole session?", back: "Start-Transcript path; Stop-Transcript when done" },
            { id: "ps-errors-and-capstone-f5", front: "Native exe exit code?", back: "$LASTEXITCODE after external command" },
            { id: "ps-errors-and-capstone-f6", front: "Capstone ingredients?", back: "Get/Where/Select/Sort/Export + function + if/try + transcript" },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps-lab-capstone-admin",
              title: "Capstone Admin Health Check",
              type: "external-lab",
              instructions: `Build Admin-HealthCheck.ps1 combining the full track:

1. param([string]$ReportFolder = $env:USERPROFILE\\Documents)
2. function Write-HealthLog { param([string]$Message) "$((Get-Date).ToString('s')) $Message" }
3. Start-Transcript "$ReportFolder\\health-transcript.log"
4. Auto-stopped services: Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -eq 'Stopped' } | Export-Csv "$ReportFolder\\auto-stopped.csv" -NoTypeInformation
5. Top 5 CPU: Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU | Export-Csv "$ReportFolder\\top-cpu.csv" -NoTypeInformation
6. Temp file count: $n = (Get-ChildItem $env:TEMP -File -ErrorAction SilentlyContinue | Measure-Object).Count; Write-HealthLog "Temp files: $n"
7. try { Write-HealthLog 'Export complete' } catch { Write-Error $_ }; Stop-Transcript

Run the script. Attach CSVs and transcript to your lab notes. Use Get-Help on any cmdlet you forgot.`,
              estimatedMinutes: 45,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Script uses function with parameter and param block",
                "Exported auto-stopped services and top CPU CSV files",
                "Logged temp file count with timestamp function",
                "Produced transcript log of the session",
                "Used try/catch or sensible -ErrorAction on at least one step",
              ],
              relatedTopicIds: [
                "ps-if-and-loops",
                "ps-functions-and-parameters",
                "ps-errors-and-capstone",
              ],
              order: 6,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "hard",
        },
      ],
    },
  ],
};
