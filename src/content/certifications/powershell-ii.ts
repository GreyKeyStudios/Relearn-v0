import type { Certification, ExternalResource } from "../types";
import { PS2_ADVANCED_FUNCTIONS_EXPERIENCE } from "@/content/lessons/ps2-advanced-functions-experience";
import { PS2_PARAMETERS_AND_VALIDATION_EXPERIENCE } from "@/content/lessons/ps2-parameters-and-validation-experience";
import { PS2_ERROR_HANDLING_DEPTH_EXPERIENCE } from "@/content/lessons/ps2-error-handling-depth-experience";
import { PS2_DEBUGGING_AND_LOGGING_EXPERIENCE } from "@/content/lessons/ps2-debugging-and-logging-experience";
import { PS2_DATA_SHAPING_AND_REPORTING_EXPERIENCE } from "@/content/lessons/ps2-data-shaping-and-reporting-experience";
import { PS2_REST_APIS_EXPERIENCE } from "@/content/lessons/ps2-rest-apis-experience";
import { PS2_CREDENTIALS_AND_SECRETS_EXPERIENCE } from "@/content/lessons/ps2-credentials-and-secrets-experience";
import { PS2_MODULES_AND_GALLERY_EXPERIENCE } from "@/content/lessons/ps2-modules-and-gallery-experience";
import { PS2_WINDOWS_ADMIN_AT_SCALE_EXPERIENCE } from "@/content/lessons/ps2-windows-admin-at-scale-experience";
import { PS2_REMOTING_EXPERIENCE } from "@/content/lessons/ps2-remoting-experience";
import { PS2_MICROSOFT_GRAPH_EXPERIENCE } from "@/content/lessons/ps2-microsoft-graph-experience";
import { PS2_ENTRA_AND_M365_EXPERIENCE } from "@/content/lessons/ps2-entra-and-m365-experience";
import { PS2_AZURE_POWERSHELL_EXPERIENCE } from "@/content/lessons/ps2-azure-powershell-experience";
import { PS2_UNATTENDED_AUTOMATION_EXPERIENCE } from "@/content/lessons/ps2-unattended-automation-experience";
import { PS2_PROFESSIONAL_PATTERNS_EXPERIENCE } from "@/content/lessons/ps2-professional-patterns-experience";

const WINDOWS_POWERSHELL_RESOURCE: ExternalResource = {
  id: "windows-powershell",
  name: "Windows PowerShell",
  url: "https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows",
  cost: "free",
  platform: "any",
  installNotes:
    "PowerShell 5.1 ships with Windows. PowerShell 7 is recommended for this track and installs side by side without removing 5.1.",
};

const POWERSHELL_GALLERY_RESOURCE: ExternalResource = {
  id: "powershell-gallery",
  name: "PowerShell Gallery",
  url: "https://www.powershellgallery.com",
  cost: "free",
  platform: "any",
  installNotes:
    "No install. Find-Module and Install-Module -Scope CurrentUser talk to this repository and need no admin rights.",
};

const GRAPH_POWERSHELL_RESOURCE: ExternalResource = {
  id: "microsoft-graph-powershell",
  name: "Microsoft Graph PowerShell SDK",
  url: "https://learn.microsoft.com/powershell/microsoftgraph/installation",
  cost: "free",
  platform: "any",
  installNotes:
    "Optional for this track. Every graded step runs against fixture JSON you generate locally; a Microsoft 365 Developer tenant is only needed for the optional live path.",
};

const AZURE_POWERSHELL_RESOURCE: ExternalResource = {
  id: "azure-powershell-az",
  name: "Azure PowerShell (Az module)",
  url: "https://learn.microsoft.com/powershell/azure/install-azure-powershell",
  cost: "free",
  platform: "any",
  installNotes:
    "Optional for this track. Graded steps use locally generated fixture JSON shaped like Get-AzResource output; an Azure free account is only needed for the optional live path.",
};

/**
 * PowerShell II: Enterprise & Cloud Automation — ReLearn skills track (Path A cert shell).
 *
 * Prerequisite: PowerShell I (`powershell`) or equivalent fundamentals.
 * Boundary rationale and environment limitations: docs/powershell-learning-architecture.md §3, §8.
 */
export const powershellII: Certification = {
  id: "powershell-ii",
  name: "PowerShell II: Enterprise & Cloud Automation",
  shortName: "PowerShell II",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum for people who can already write a working PowerShell script and now need it to be reliable, reusable, and safe. Six modules cover reusable tool design with advanced functions and validated parameters, error handling and debugging that survives production, bulk data and REST API automation, credential hygiene, modules, Windows administration at scale, PowerShell remoting, Microsoft Graph, Entra ID and Microsoft 365 reporting, Azure resource discovery, unattended scheduling, and the professional patterns that tie them together. Five real projects and a capstone toolkit make you design automation rather than memorise cmdlets. Every graded step runs on your own machine — the Graph and Azure work grades against fixture data you generate locally, so no tenant or subscription is required, with live paths marked optional. Prerequisite: PowerShell I or equivalent fundamentals.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + projects + capstone toolkit",
    format: "Hands-on labs, automation projects, and code-reasoning exercises",
  },
  domains: [
    {
      id: "ps2-tool-design",
      name: "Module 1 — Reusable Tool Design",
      topics: [
        {
          id: "ps2-advanced-functions",
          name: "Advanced Functions & Comment-Based Help",
          objectives: ["PS2-M01-O1", "PS2-M01-O2", "PS2-M01-O3"],
          prerequisites: [],
          lesson: {
            title: "From Script To Tool",
            content: `In PowerShell I you wrote scripts that worked. A tool is different: someone else can find it, read its help, run it without asking you questions, and pipe its output into their own work. The distance between those two things is smaller than it looks, and most of it is four habits.

The first is the name. PowerShell's Verb-Noun convention is a discovery contract, not decoration. Get-DiskSpaceReport tells a reader the command is safe to run before they read a single line of code. Cleanup-Disks tells them nothing, uses a verb PowerShell does not recognise, and will make Get-Command searches miss you. Run Get-Verb, pick from the approved list, and make the noun singular and specific.

The second is [CmdletBinding()]. One attribute above your param block promotes an ordinary function into an advanced function, and PowerShell hands you behaviour you did not write: -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, and strict rejection of parameters you never declared. You also gain $PSCmdlet, which is what later lets you add -WhatIf. Adding the attribute costs one line and is the single highest-value edit you can make to an existing script.

The third is output discipline. A reusable function returns objects on the success stream and lets the caller decide how to display them. Write-Host paints text onto a console and hands the caller nothing they can filter, sort, or export — it is the reason so many inherited scripts cannot be reused. If you want narration, that is what Write-Verbose is for, and [CmdletBinding()] already gave you the switch that turns it on.

The fourth is comment-based help. A block above the function containing .SYNOPSIS, .DESCRIPTION, .PARAMETER, .EXAMPLE, and .OUTPUTS makes Get-Help YourFunction behave exactly like Get-Help on a Microsoft cmdlet. Nothing else you can do in five minutes changes how professional a tool feels. It is also the cheapest documentation that never goes stale, because it lives beside the parameter it describes.

Finally, keep one function to one job. A function that inventories disks and emails a report and writes a log is three functions wearing a coat: you cannot test it, reuse half of it, or explain its output. Gather in one function, format in another, deliver in a third. That separation is what makes the capstone toolkit at the end of this course possible.`,
            experience: PS2_ADVANCED_FUNCTIONS_EXPERIENCE,
          },
          lightbulbMoment:
            "One attribute — [CmdletBinding()] — turns your function into a real command with -Verbose, -ErrorAction, and a route to -WhatIf.",
          keyFacts: [
            "[CmdletBinding()] makes a function advanced and adds the common parameters for free",
            "Approved Verb-Noun names make your tool discoverable and signal whether it changes state",
            "Return objects on the success stream; Write-Host output cannot be filtered, sorted, or exported",
            "Comment-based help (.SYNOPSIS, .PARAMETER, .EXAMPLE) makes Get-Help work on your function",
            "One function, one job — gather, format, and deliver belong in separate functions",
          ],
          guidedExample: {
            title: "Promote A Working Script Into A Tool",
            steps: [
              "Start with a script body that runs Get-Volume and prints free space with Write-Host.",
              "Wrap it in function Get-DiskSpaceReport — an approved verb plus a specific noun.",
              "Add [CmdletBinding()] above the param block; you now have -Verbose and -ErrorAction.",
              "Replace Write-Host with [PSCustomObject]@{ Drive = ...; FreeGB = ... } so the caller gets data.",
              "Move the progress narration to Write-Verbose so it only appears when asked for.",
              "Add a comment-based help block, then prove it with Get-Help Get-DiskSpaceReport -Examples.",
            ],
          },
          commonMistakes: [
            "Using Write-Host for data, which makes the function's output impossible to reuse",
            "Inventing verbs like Cleanup- or Check- that Get-Verb does not recognise",
            "Adding [CmdletBinding()] but never calling Write-Verbose, so -Verbose does nothing",
            "Bundling gather, format, and email into one function that cannot be tested in pieces",
            "Writing help as a comment above the file instead of the .SYNOPSIS block Get-Help reads",
          ],
          realWorldTraps: [
            "A colleague pipes your function into Where-Object and gets nothing — because you printed instead of returning",
            "Get-Command in a script cannot find your tool because the name does not follow Verb-Noun",
            "The team asks what parameters your tool takes and the only answer is 'read the source'",
            "A function named Get-Something quietly writes files, so a reviewer assumes it is safe when it is not",
          ],
          realWorldScenario:
            "Your team has a share full of files named check_disks_v3_final.ps1. Nobody knows which one is current or what parameters they take. You rewrite one as Get-DiskSpaceReport with [CmdletBinding()], typed parameters, object output, and comment-based help. Within a week two other people are calling it from their own scripts, because they could discover it and read its help without asking you.",
          quiz: [
            {
              id: "ps2-advanced-functions-q1",
              prompt:
                "You add [CmdletBinding()] to a function but do not change anything else. A colleague runs it with -Verbose and sees no extra output. Why?",
              choices: [
                { id: "a", text: "[CmdletBinding()] must be placed below the param block to work" },
                { id: "b", text: "-Verbose only works on compiled cmdlets, never on functions" },
                { id: "c", text: "The switch now exists, but nothing in the function calls Write-Verbose" },
                { id: "d", text: "You must also set $VerbosePreference inside the function body" },
              ],
              correctChoiceId: "c",
              explanation:
                "[CmdletBinding()] provides the -Verbose switch and wires it to the verbose stream. You still have to emit messages with Write-Verbose. Placement above the param block is correct, functions do get common parameters, and setting $VerbosePreference yourself would override the caller's choice.",
              difficulty: "medium",
            },
            {
              id: "ps2-advanced-functions-q2",
              prompt:
                "A function ends with Write-Host \"$Total files found\". A caller runs $result = Get-FileCount. What is in $result?",
              choices: [
                { id: "a", text: "The string \"42 files found\"" },
                { id: "b", text: "The number 42" },
                { id: "c", text: "Nothing — Write-Host does not write to the success stream" },
                { id: "d", text: "An array containing one string" },
              ],
              correctChoiceId: "c",
              explanation:
                "Write-Host writes to the host display, not the success stream, so assignment captures nothing. This is exactly why reusable functions return objects instead of printing them.",
              difficulty: "medium",
            },
            {
              id: "ps2-advanced-functions-q3",
              prompt:
                "Which function name best signals to a reader that the command is safe to run on a production server?",
              choices: [
                { id: "a", text: "Cleanup-ServerLogs" },
                { id: "b", text: "Get-ServerLogSummary" },
                { id: "c", text: "Process-Logs" },
                { id: "d", text: "ServerLogTool" },
              ],
              correctChoiceId: "b",
              explanation:
                "Get- is an approved verb that means read-only, and the noun is specific. Cleanup- and Process- are not approved verbs and imply change, and ServerLogTool has no verb at all so no reader can guess what it does.",
              difficulty: "easy",
            },
            {
              id: "ps2-advanced-functions-q4",
              prompt:
                "You want Get-Help Get-DiskSpaceReport -Examples to show a usage example. Where does that example have to live?",
              choices: [
                { id: "a", text: "In a README.md beside the script" },
                { id: "b", text: "In an .EXAMPLE section of the comment-based help block" },
                { id: "c", text: "In a Write-Verbose call at the top of the function" },
                { id: "d", text: "In the parameter's HelpMessage attribute" },
              ],
              correctChoiceId: "b",
              explanation:
                "Get-Help reads the structured comment-based help block. A README is invisible to Get-Help, Write-Verbose is runtime narration, and HelpMessage only appears when PowerShell prompts for a missing mandatory parameter.",
              difficulty: "easy",
            },
            {
              id: "ps2-advanced-functions-q5",
              prompt:
                "A single function collects service state, builds an HTML report, and emails it. Which problem is this design most likely to cause first?",
              choices: [
                { id: "a", text: "PowerShell refuses to run functions longer than 100 lines" },
                { id: "b", text: "You cannot test or reuse the data collection without sending mail" },
                { id: "c", text: "Comment-based help cannot document more than one behaviour" },
                { id: "d", text: "[CmdletBinding()] stops working when a function has multiple jobs" },
              ],
              correctChoiceId: "b",
              explanation:
                "Bundling three jobs means the only way to exercise the collection logic is to trigger the email. Splitting into gather, format, and deliver lets you test and reuse each piece. The other options are invented limits.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps2-advanced-functions-b1",
              prompt: "Which command lists the verbs PowerShell considers approved?",
              choices: [
                { id: "a", text: "Get-Verb" },
                { id: "b", text: "Get-Command -Verb All" },
                { id: "c", text: "Get-Help about_Verbs -Full" },
                { id: "d", text: "Get-Member -Verb" },
              ],
              correctChoiceId: "a",
              explanation:
                "Get-Verb returns the approved verb list with its grouping. about_Verbs is useful reading but is not the list command, and the other two do not exist in that form.",
            },
            {
              id: "ps2-advanced-functions-b2",
              prompt:
                "Which stream should a function use to narrate progress without polluting its data output?",
              choices: [
                { id: "a", text: "The success stream via Write-Output" },
                { id: "b", text: "The verbose stream via Write-Verbose" },
                { id: "c", text: "The host display via Write-Host" },
                { id: "d", text: "The error stream via Write-Error" },
              ],
              correctChoiceId: "b",
              explanation:
                "Write-Verbose is suppressed by default and enabled by the caller with -Verbose. Write-Output would mix narration into the data, Write-Host cannot be captured cleanly, and Write-Error signals failure.",
            },
            {
              id: "ps2-advanced-functions-b3",
              prompt: "What does [CmdletBinding()] do about parameters you never declared?",
              choices: [
                { id: "a", text: "Silently ignores them" },
                { id: "b", text: "Collects them into $args for you" },
                { id: "c", text: "Throws a parameter-binding error" },
                { id: "d", text: "Passes them through to the first nested command" },
              ],
              correctChoiceId: "c",
              explanation:
                "Advanced functions reject unknown parameters instead of dumping them into $args, which catches typos at call time rather than producing wrong results.",
            },
            {
              id: "ps2-advanced-functions-b4",
              prompt:
                "A tool returns [PSCustomObject] rows. Which caller behaviour does that make possible that Write-Host does not?",
              choices: [
                { id: "a", text: "Piping to Where-Object, Sort-Object, and Export-Csv" },
                { id: "b", text: "Running the tool from Task Scheduler" },
                { id: "c", text: "Adding comment-based help" },
                { id: "d", text: "Using -Verbose" },
              ],
              correctChoiceId: "a",
              explanation:
                "Objects on the success stream can be filtered, sorted, and exported by the caller. The other three work regardless of how output is produced.",
            },
            {
              id: "ps2-advanced-functions-b5",
              prompt: "Which comment-based help keyword documents what the function returns?",
              choices: [
                { id: "a", text: ".RETURNS" },
                { id: "b", text: ".OUTPUTS" },
                { id: "c", text: ".RESULT" },
                { id: "d", text: ".TYPE" },
              ],
              correctChoiceId: "b",
              explanation:
                ".OUTPUTS is the recognised keyword. PowerShell ignores invented keywords silently, which is why help blocks sometimes look complete but render half empty.",
            },
            {
              id: "ps2-advanced-functions-b6",
              prompt:
                "Why is naming a state-changing function Get-UserCleanup actively dangerous?",
              choices: [
                { id: "a", text: "Get- functions cannot accept parameters" },
                { id: "b", text: "PowerShell blocks writes inside Get- functions" },
                { id: "c", text: "Readers and reviewers treat Get- as read-only and will run it without checking" },
                { id: "d", text: "Get- functions ignore -WhatIf" },
              ],
              correctChoiceId: "c",
              explanation:
                "The verb is a safety signal other people rely on. PowerShell does not enforce it, which is precisely why misusing it misleads humans.",
            },
            {
              id: "ps2-advanced-functions-b7",
              prompt:
                "You inherit a 400-line script with no functions. What is the highest-value first refactor?",
              choices: [
                { id: "a", text: "Rename every variable to Hungarian notation" },
                { id: "b", text: "Extract the data-gathering section into a named advanced function that returns objects" },
                { id: "c", text: "Convert every Write-Host to Write-Output" },
                { id: "d", text: "Add a try/catch around the entire file" },
              ],
              correctChoiceId: "b",
              explanation:
                "Extracting a gather function you can run and inspect on its own makes everything else testable. A single outer try/catch hides which step failed, and blanket Write-Output conversion turns narration into data.",
            },
            {
              id: "ps2-advanced-functions-b8",
              prompt: "What does $PSCmdlet, available inside an advanced function, later enable?",
              choices: [
                { id: "a", text: "Automatic parameter validation without attributes" },
                { id: "b", text: "ShouldProcess support, which is how -WhatIf and -Confirm work" },
                { id: "c", text: "Remote execution of the function" },
                { id: "d", text: "Automatic comment-based help generation" },
              ],
              correctChoiceId: "b",
              explanation:
                "$PSCmdlet.ShouldProcess() is the gate that gives your own function -WhatIf and -Confirm. Validation still needs attributes, and neither remoting nor help is generated for you.",
            },
          ],
          flashcards: [
            {
              id: "ps2-advanced-functions-f1",
              front: "What does [CmdletBinding()] add?",
              back: "Common parameters (-Verbose, -Debug, -ErrorAction, -ErrorVariable), strict unknown-parameter rejection, and $PSCmdlet",
            },
            {
              id: "ps2-advanced-functions-f2",
              front: "Why never Write-Host for data?",
              back: "It writes to the display, not the success stream — the caller cannot capture, filter, or export it",
            },
            {
              id: "ps2-advanced-functions-f3",
              front: "Which help keywords make Get-Help work?",
              back: ".SYNOPSIS, .DESCRIPTION, .PARAMETER, .EXAMPLE, .OUTPUTS in a comment block above the function",
            },
            {
              id: "ps2-advanced-functions-f4",
              front: "How do you find approved verbs?",
              back: "Get-Verb — and Get- must mean read-only",
            },
            {
              id: "ps2-advanced-functions-f5",
              front: "One function, how many jobs?",
              back: "One. Split gather, format, and deliver so each can be tested and reused",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
        {
          id: "ps2-parameters-and-validation",
          name: "Parameters, Types & Validation",
          objectives: ["PS2-M01-O4", "PS2-M01-O5", "PS2-M01-O6"],
          prerequisites: ["ps2-advanced-functions"],
          lesson: {
            title: "Parameters As A Contract",
            content: `A parameter block is a contract between your tool and whoever calls it. Written well, PowerShell enforces the contract before your first line of code runs, and bad input never reaches your logic. Written badly, your function accepts nonsense and fails somewhere deep inside with an error that names none of the real problem.

Start with types. [string]$Path, [int]$Days, [string[]]$ComputerName, and [switch]$IncludeDisabled all tell PowerShell what to accept and what to convert. A typed parameter that receives the wrong kind of value fails at binding time with a message naming the parameter — which is far kinder than an unrelated crash forty lines later. [switch] in particular is how you write a flag: present means true, absent means false, and you never ask the caller to pass -Force $true.

Then decide what is required. [Parameter(Mandatory)] makes PowerShell prompt or fail rather than proceeding with an empty value. Resist the urge to make everything mandatory: a good default is better than a prompt, and a tool that prompts cannot be scheduled. Use Mandatory for the things with no sensible default, such as the target you are about to act on.

Validation attributes are where most of the value is, because they replace hand-written checks with declarations. [ValidateSet('Dev','Test','Prod')] gives you tab completion and a helpful error listing the valid choices. [ValidateRange(1,365)] bounds a number. [ValidateNotNullOrEmpty()] refuses blanks. [ValidatePattern()] enforces a shape, and [ValidateScript({ Test-Path $_ })] runs arbitrary logic. Each one fails before your body executes, and each one documents the rule in the place a reader will look.

Pipeline input is the last piece and the one that makes your tool feel native. [Parameter(ValueFromPipeline)] accepts whole objects; [Parameter(ValueFromPipelineByPropertyName)] accepts a property from them, which is how Get-ADUser | Set-Something binds a Name or SamAccountName automatically. To handle a stream you need the three named blocks: begin runs once, process runs once per incoming item, and end runs once at the finish. Put your per-item work in process — code in the body of a pipeline-aware function without a process block sees only the last item, which is a bug that silently reports the wrong answer instead of erroring.

Finally, remember that parameter sets exist for the case where two parameters must not be used together. [Parameter(ParameterSetName='ByName')] and [Parameter(ParameterSetName='ById')] let PowerShell reject the invalid combination for you, with a readable error, instead of you writing an if-statement that checks which arguments were supplied.`,
            experience: PS2_PARAMETERS_AND_VALIDATION_EXPERIENCE,
          },
          lightbulbMoment:
            "Validation attributes let PowerShell reject bad input before your code runs — and they document the rule where the reader is already looking.",
          keyFacts: [
            "Typed parameters fail at binding with an error that names the parameter",
            "[switch] is the correct shape for a flag — presence means true",
            "Validate* attributes reject bad input before the function body executes",
            "ValueFromPipeline needs a process block or you only handle the last item",
            "Parameter sets express 'these two cannot be used together' without hand-written checks",
          ],
          guidedExample: {
            title: "Write A Parameter Block That Cannot Be Misused",
            steps: [
              "Declare [Parameter(Mandatory)][ValidateScript({ Test-Path $_ })][string]$Path for the input file.",
              "Add [ValidateRange(1,365)][int]$Days = 30 so the default is sensible and out-of-range fails early.",
              "Add [ValidateSet('Csv','Json')][string]$Format = 'Csv' — the caller now gets tab completion.",
              "Add [switch]$IncludeDisabled instead of a boolean the caller has to spell out.",
              "Add [Parameter(ValueFromPipelineByPropertyName)][string[]]$ComputerName and a process block.",
              "Call the function with -Days 400 and read the error: it names the parameter and the allowed range.",
            ],
          },
          commonMistakes: [
            "Writing if (-not $Path) { throw } instead of declaring [Parameter(Mandatory)]",
            "Using [bool]$Force so callers must pass -Force $true, instead of [switch]$Force",
            "Accepting pipeline input without a process block, so only the last item is handled",
            "Making every parameter mandatory, which makes the tool impossible to schedule",
            "Validating inside the body after an expensive operation has already run",
          ],
          realWorldTraps: [
            "A scheduled task hangs forever because a mandatory parameter was not supplied and PowerShell is waiting at a prompt",
            "A tool 'works' on one server and reports one row for a 200-server pipeline, because there was no process block",
            "A caller passes -Days '30 days' and the failure surfaces as an unrelated arithmetic error deep in the function",
            "Two mutually exclusive parameters are both accepted, and the function silently honours only one of them",
          ],
          realWorldScenario:
            "A colleague's report script takes a -Environment parameter as free text. Someone types 'prod ' with a trailing space, the filter matches nothing, and the report shows zero incidents — which management reads as good news. Adding [ValidateSet('Dev','Test','Prod')] would have rejected the input at the prompt and given tab completion instead.",
          quiz: [
            {
              id: "ps2-parameters-and-validation-q1",
              prompt:
                "Your function declares [Parameter(ValueFromPipeline)][string[]]$Name and does its work directly in the function body with no begin/process/end blocks. You run 'a','b','c' | Get-Thing. What happens?",
              choices: [
                { id: "a", text: "All three names are processed" },
                { id: "b", text: "Only 'c' is processed, because the body runs once with the last item bound" },
                { id: "c", text: "PowerShell throws a binding error requiring a process block" },
                { id: "d", text: "Only 'a' is processed, because binding stops at the first item" },
              ],
              correctChoiceId: "b",
              explanation:
                "Without a process block the entire body is treated as the end block: it runs once, after the pipeline has finished, with $Name holding only the final item. PowerShell does not error, which is why this bug produces confidently wrong reports.",
              difficulty: "hard",
            },
            {
              id: "ps2-parameters-and-validation-q2",
              prompt:
                "You want callers to pass -Environment and only accept Dev, Test, or Prod, with tab completion. Which is best?",
              choices: [
                { id: "a", text: "[ValidatePattern('Dev|Test|Prod')][string]$Environment" },
                { id: "b", text: "[ValidateSet('Dev','Test','Prod')][string]$Environment" },
                { id: "c", text: "[string]$Environment plus an if-statement that throws on anything else" },
                { id: "d", text: "[ValidateNotNullOrEmpty()][string]$Environment" },
              ],
              correctChoiceId: "b",
              explanation:
                "ValidateSet is the only option that gives tab completion and an error listing the valid values. ValidatePattern would also match 'Development', a hand-written check runs too late and is undiscoverable, and ValidateNotNullOrEmpty only rejects blanks.",
              difficulty: "easy",
            },
            {
              id: "ps2-parameters-and-validation-q3",
              prompt:
                "A tool used by Task Scheduler declares [Parameter(Mandatory)][string]$OutputPath, and the scheduled command omits it. What is the observed failure?",
              choices: [
                { id: "a", text: "The task fails immediately with a clear parameter error" },
                { id: "b", text: "The task runs and writes to the current directory" },
                { id: "c", text: "The task hangs, because PowerShell is waiting at a prompt nobody can answer" },
                { id: "d", text: "The parameter is bound to $null and the script continues" },
              ],
              correctChoiceId: "c",
              explanation:
                "A missing mandatory parameter makes PowerShell prompt. With no interactive host that prompt never gets answered, so the task sits running until it is killed. This is the main reason unattended scripts take inputs with defaults or from config.",
              difficulty: "medium",
            },
            {
              id: "ps2-parameters-and-validation-q4",
              prompt:
                "Which declaration lets Get-Content list.txt | Get-ServerHealth bind each line, and Get-ADComputer | Get-ServerHealth bind the Name property?",
              choices: [
                { id: "a", text: "[Parameter(ValueFromPipeline, ValueFromPipelineByPropertyName)][string[]]$Name" },
                { id: "b", text: "[Parameter(Mandatory)][string[]]$Name" },
                { id: "c", text: "[Parameter(Position=0)][string[]]$Name" },
                { id: "d", text: "[ValidateNotNullOrEmpty()][string[]]$Name" },
              ],
              correctChoiceId: "a",
              explanation:
                "ValueFromPipeline binds the whole incoming object (a string, here), and ValueFromPipelineByPropertyName binds a matching property name from richer objects. Declaring both covers text and object pipelines. Position and validation do not enable pipeline binding.",
              difficulty: "medium",
            },
            {
              id: "ps2-parameters-and-validation-q5",
              prompt:
                "Which parameter declaration is the safest choice for a flag that enables extra output?",
              choices: [
                { id: "a", text: "[bool]$IncludeDetail" },
                { id: "b", text: "[string]$IncludeDetail = 'false'" },
                { id: "c", text: "[switch]$IncludeDetail" },
                { id: "d", text: "[int]$IncludeDetail = 0" },
              ],
              correctChoiceId: "c",
              explanation:
                "[switch] means the caller writes -IncludeDetail and nothing else. [bool] forces -IncludeDetail $true, and string or int flags invite 'false', 'False', and 0 being read as truthy text.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-parameters-and-validation-b1",
              prompt: "Which block runs once per incoming pipeline item?",
              choices: [
                { id: "a", text: "begin" },
                { id: "b", text: "process" },
                { id: "c", text: "end" },
                { id: "d", text: "clean" },
              ],
              correctChoiceId: "b",
              explanation:
                "begin runs once before the stream, process runs per item, end runs once after. A pipeline-aware function without process only sees the last item.",
            },
            {
              id: "ps2-parameters-and-validation-b2",
              prompt: "What does [ValidateScript({ Test-Path $_ })] do?",
              choices: [
                { id: "a", text: "Creates the path if it does not exist" },
                { id: "b", text: "Rejects the value at binding time if the path does not exist" },
                { id: "c", text: "Warns but continues when the path is missing" },
                { id: "d", text: "Converts the value to a FileInfo object" },
              ],
              correctChoiceId: "b",
              explanation:
                "ValidateScript runs the scriptblock against $_ during binding; a false result fails the call before the body executes. It does not create or convert anything.",
            },
            {
              id: "ps2-parameters-and-validation-b3",
              prompt:
                "A caller passes -Days '45' as a string to [int]$Days. What happens?",
              choices: [
                { id: "a", text: "A binding error, because the types differ" },
                { id: "b", text: "PowerShell coerces the string to the integer 45" },
                { id: "c", text: "$Days becomes 0" },
                { id: "d", text: "The parameter is silently ignored" },
              ],
              correctChoiceId: "b",
              explanation:
                "PowerShell coerces convertible values, so '45' becomes 45. '45 days' would fail — which is the useful half of typing.",
            },
            {
              id: "ps2-parameters-and-validation-b4",
              prompt: "Why prefer a default value over [Parameter(Mandatory)] where a sensible default exists?",
              choices: [
                { id: "a", text: "Mandatory parameters cannot be validated" },
                { id: "b", text: "A default keeps the tool usable unattended, since Mandatory can prompt" },
                { id: "c", text: "Defaults are faster to bind" },
                { id: "d", text: "Mandatory parameters break pipeline input" },
              ],
              correctChoiceId: "b",
              explanation:
                "Mandatory means prompt-or-fail, and prompts hang schedulers. Mandatory parameters can absolutely be validated and can accept pipeline input.",
            },
            {
              id: "ps2-parameters-and-validation-b5",
              prompt: "What problem do parameter sets solve?",
              choices: [
                { id: "a", text: "Grouping parameters in help output only" },
                { id: "b", text: "Declaring that certain parameters cannot be used together" },
                { id: "c", text: "Applying validation to several parameters at once" },
                { id: "d", text: "Allowing more than 32 parameters" },
              ],
              correctChoiceId: "b",
              explanation:
                "Parameter sets let PowerShell reject invalid combinations with a readable error instead of you writing argument-inspection logic.",
            },
            {
              id: "ps2-parameters-and-validation-b6",
              prompt:
                "Which validation attribute is right for 'must be between 1 and 90'?",
              choices: [
                { id: "a", text: "[ValidateRange(1,90)]" },
                { id: "b", text: "[ValidateCount(1,90)]" },
                { id: "c", text: "[ValidateLength(1,90)]" },
                { id: "d", text: "[ValidatePattern('[1-90]')]" },
              ],
              correctChoiceId: "a",
              explanation:
                "ValidateRange bounds a numeric value. ValidateCount bounds how many items an array holds, ValidateLength bounds string length, and that pattern is a character class that does not mean a numeric range.",
            },
            {
              id: "ps2-parameters-and-validation-b7",
              prompt:
                "Your function must accept either -Name or -Id but never both. What is the idiomatic solution?",
              choices: [
                { id: "a", text: "Check $PSBoundParameters.Count and throw" },
                { id: "b", text: "Declare each in a different ParameterSetName" },
                { id: "c", text: "Make both parameters [switch]" },
                { id: "d", text: "Use [ValidateNotNullOrEmpty()] on both" },
              ],
              correctChoiceId: "b",
              explanation:
                "Parameter sets make PowerShell enforce the exclusivity and document it in help. Inspecting $PSBoundParameters works but reimplements what the engine already does.",
            },
            {
              id: "ps2-parameters-and-validation-b8",
              prompt:
                "Why is validating input inside the function body considered worse than a validation attribute?",
              choices: [
                { id: "a", text: "Body checks cannot use Test-Path" },
                { id: "b", text: "The check may run after side effects, and it is invisible in Get-Help and tab completion" },
                { id: "c", text: "PowerShell ignores throw statements in a function body" },
                { id: "d", text: "Attributes are faster at runtime" },
              ],
              correctChoiceId: "b",
              explanation:
                "Attributes fail before any code runs and are surfaced by help and completion. A body check can fire after you have already opened a file or connected somewhere.",
            },
          ],
          flashcards: [
            {
              id: "ps2-parameters-and-validation-f1",
              front: "begin / process / end — which runs per item?",
              back: "process. begin runs once before, end once after",
            },
            {
              id: "ps2-parameters-and-validation-f2",
              front: "Flag parameter — which type?",
              back: "[switch] — presence means true, no value needed",
            },
            {
              id: "ps2-parameters-and-validation-f3",
              front: "Restrict to a fixed list with tab completion?",
              back: "[ValidateSet('A','B','C')]",
            },
            {
              id: "ps2-parameters-and-validation-f4",
              front: "Why is Mandatory risky for scheduled scripts?",
              back: "A missing value prompts, and an unattended prompt hangs forever",
            },
            {
              id: "ps2-parameters-and-validation-f5",
              front: "Bind a property from incoming objects?",
              back: "[Parameter(ValueFromPipelineByPropertyName)] with a matching parameter name",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-build-a-tool",
              title: "Build A Reusable Tool",
              type: "external-lab",
              instructions: `Goal: turn a working one-liner into a discoverable, validated, pipeline-aware tool. Everything here is read-only apart from writing your own .ps1 file. Work in a folder you own, such as Documents\\ps2-labs.

### Try It
1. Create Get-ServiceReport.ps1 with a function Get-ServiceReport that has [CmdletBinding()] above its param block.
2. Declare [Parameter(ValueFromPipeline, ValueFromPipelineByPropertyName)][string[]]$Name = '*' and [ValidateSet('Running','Stopped','All')][string]$State = 'All'.
3. Add begin, process, and end blocks. In process, call Get-Service -Name $n for each $n in $Name, filter by $State unless it is All, and return one [PSCustomObject] per service with Name, DisplayName, Status, and StartType.
4. Add a comment-based help block with .SYNOPSIS, .DESCRIPTION, .PARAMETER Name, .PARAMETER State, .EXAMPLE, and .OUTPUTS.
5. Add one Write-Verbose line in process naming the service being inspected.
6. Dot-source the file with . .\\Get-ServiceReport.ps1, then run Get-ServiceReport -State Running | Select-Object -First 5.
7. Run Get-Help Get-ServiceReport -Examples and confirm your example appears.
8. Run Get-ServiceReport -Verbose | Select-Object -First 2 and confirm the narration appears only with -Verbose.

### Break It
9. Comment out the process block keyword so the per-item code sits in the function body, re-dot-source, and run 'BITS','Winmgmt','Spooler' | Get-ServiceReport. Note how many rows you get.
10. Restore the process block. Now change $State to plain [string]$State with no ValidateSet, re-dot-source, and run Get-ServiceReport -State Runnning (three n's). Note that it returns rows instead of complaining.
11. Replace your [PSCustomObject] output with Write-Host "$($svc.Name) is $($svc.Status)", re-dot-source, and run $r = Get-ServiceReport -State Running; $r.Count.

### Fix It
12. Put the per-item work back inside process — the pipeline is meant to be handled once per item.
13. Restore [ValidateSet('Running','Stopped','All')] and rerun the misspelled call. Read the error: it lists the legal values.
14. Restore the [PSCustomObject] return so the function emits data rather than painting text.

### Verify It
15. Run 'BITS','Winmgmt','Spooler' | Get-ServiceReport | Measure-Object — Count is 3, not 1.
16. Run Get-ServiceReport -State Runnning — you get a parameter-validation error naming the allowed values.
17. Run $r = Get-ServiceReport -State Running; $r.Count — a real number, and $r[0] | Get-Member shows your four properties.
18. Run Get-ServiceReport -State Running | Export-Csv "$env:TEMP\\service-report.csv" -NoTypeInformation and open the file: four named columns.

### Reflect
19. In your notes, answer two questions in one or two sentences each. Why did the missing process block produce one row instead of an error? And why can a caller pipe your function into Export-Csv now but not in step 11?`,
              estimatedMinutes: 50,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Wrote an advanced function with [CmdletBinding()], typed parameters, and a ValidateSet",
                "Handled pipeline input correctly using begin / process / end",
                "Returned [PSCustomObject] rows instead of printing text",
                "Comment-based help renders via Get-Help -Examples",
                "Break It / Fix It: reproduced and repaired the missing process block, the missing ValidateSet, and the Write-Host output bug",
                "Verify It: piped three names through the function and exported a four-column CSV",
                "Reflect: explained why a missing process block reports the last item silently",
              ],
              relatedTopicIds: ["ps2-advanced-functions", "ps2-parameters-and-validation"],
              order: 1,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "ps2-reliability",
      name: "Module 2 — Reliability & Diagnostics",
      topics: [
        {
          id: "ps2-error-handling-depth",
          name: "Errors In Depth",
          objectives: ["PS2-M02-O1", "PS2-M02-O2", "PS2-M02-O3"],
          prerequisites: ["ps2-parameters-and-validation"],
          lesson: {
            title: "Failing On Purpose",
            content: `PowerShell I told you that terminating errors stop execution and non-terminating errors do not. That distinction now becomes the single most practical thing you know, because it explains the most common bug in intermediate PowerShell: a try/catch that never fires.

Most cmdlet failures are non-terminating. Get-Service on a name that does not exist writes an error to the error stream and then lets the pipeline continue. Wrap it in try/catch and the catch block is never entered, because nothing terminated. The fix is -ErrorAction Stop, which promotes that specific call's non-terminating error into a terminating one so catch can see it. Write it on the call you actually want to guard, not as a blanket $ErrorActionPreference = 'Stop' at the top of the file — that changes behaviour for every command including ones you wanted to tolerate.

The four -ErrorAction values are decisions, not habits. Stop makes it catchable. Continue reports and carries on, which is the default. SilentlyContinue hides the message but still records the error in $Error. Ignore does not even record it. Using SilentlyContinue is a claim: I know this can fail and the failure genuinely does not matter. If you cannot say that sentence out loud about the specific call, use Stop.

Inside catch, $_ is an ErrorRecord and it is much richer than the red text suggests. $_.Exception.Message is the human sentence. $_.Exception.GetType().FullName is the type, which is what lets you write a typed catch such as catch [System.IO.FileNotFoundException] before a general catch. $_.ScriptStackTrace tells you where. $_.TargetObject is often the item that failed, which is exactly what you want in a per-item error report. A catch block that logs only "an error occurred" throws all of that away.

finally runs whether or not anything failed, and whether or not you caught it. That makes it the correct place for cleanup: closing a file, removing a session, stopping a transcript, disconnecting from a service. Cleanup written after the try block instead of inside finally is cleanup that gets skipped on the day it matters.

Sometimes the right behaviour is to fail deliberately. throw raises a terminating error with your own message, and you should use it whenever continuing would produce a confidently wrong answer: the input file has zero rows, a required column is missing, you are pointed at the wrong subscription. A loud stop is cheaper than a plausible report built on bad data.

Finally, the pattern that makes bulk automation usable: wrap the per-item work in try/catch inside the loop, not the loop inside one try/catch. An outer try/catch aborts the whole run on the first bad item and tells you nothing about the other 199. A per-item catch lets you record a Status of Failed with a Reason on that row and keep going, which is what turns a crash into a report you can act on.`,
            experience: PS2_ERROR_HANDLING_DEPTH_EXPERIENCE,
          },
          lightbulbMoment:
            "Most cmdlet errors are non-terminating, so try/catch cannot see them until you add -ErrorAction Stop to that call.",
          keyFacts: [
            "-ErrorAction Stop promotes a non-terminating error so catch can handle it",
            "$_ in catch is an ErrorRecord: .Exception.Message, .Exception.GetType().FullName, .ScriptStackTrace, .TargetObject",
            "A typed catch must appear before the general catch block",
            "finally always runs — put cleanup there, not after the try block",
            "Put try/catch inside the loop so one bad item does not abandon the other 199",
          ],
          guidedExample: {
            title: "Make A Catch Block Actually Fire",
            steps: [
              "Run try { Get-Service NoSuchSvc } catch { 'caught' } — nothing is caught, because the error is non-terminating.",
              "Add -ErrorAction Stop to the Get-Service call and rerun; the catch block now runs.",
              "Inside catch, output $_.Exception.GetType().FullName to learn the exception type.",
              "Add catch [Microsoft.PowerShell.Commands.ServiceCommandException] above your general catch.",
              "Add a finally block that writes 'cleanup done' and confirm it runs on both success and failure.",
              "Move the try/catch inside a foreach over three names, two valid, and return a Status per row.",
            ],
          },
          commonMistakes: [
            "Expecting try/catch to catch a cmdlet error without -ErrorAction Stop",
            "Setting $ErrorActionPreference = 'Stop' globally instead of guarding the specific call",
            "Writing catch { } or catch { Write-Host 'error' }, which discards everything useful in $_",
            "Putting the loop inside one try/catch so the first bad item ends the whole run",
            "Doing cleanup after the try block instead of in finally, so it is skipped when the script fails",
          ],
          realWorldTraps: [
            "A scheduled report shows a green run every night because a catch block swallowed the failure",
            "A bulk operation stops at item 3 of 200 and nobody knows which items were processed",
            "SilentlyContinue on a Copy-Item hides a full disk, and the backup is empty for a month",
            "A shared session or transcript is left open because cleanup ran only on the success path",
          ],
          realWorldScenario:
            "An overnight job that reconciles 500 user records starts failing on one malformed row. Because the whole foreach sits inside a single try/catch, the run aborts at record 12 and the log says only 'Exception calling Trim'. Rewriting it with a per-item try/catch that records UserPrincipalName, Status, and Reason turns the next failure into a 3-row error CSV and a 497-row success CSV.",
          quiz: [
            {
              id: "ps2-error-handling-depth-q1",
              prompt:
                "try { Get-Service 'NoSuchService' } catch { Write-Warning 'handled' } prints a red error but never prints the warning. Why?",
              choices: [
                { id: "a", text: "Get-Service cannot be used inside a try block" },
                { id: "b", text: "The error is non-terminating, so nothing terminated for catch to handle" },
                { id: "c", text: "Write-Warning is suppressed inside catch blocks" },
                { id: "d", text: "The catch block needs an explicit exception type" },
              ],
              correctChoiceId: "b",
              explanation:
                "Get-Service reports a non-terminating error and execution continues, so the catch never runs. Adding -ErrorAction Stop promotes it to terminating. Warnings are not suppressed in catch, and an untyped catch is valid.",
              difficulty: "medium",
            },
            {
              id: "ps2-error-handling-depth-q2",
              prompt:
                "You are processing 200 servers in a foreach loop. Where should the try/catch go so one unreachable server does not end the run?",
              choices: [
                { id: "a", text: "Around the entire foreach loop" },
                { id: "b", text: "Inside the loop, around the per-server work" },
                { id: "c", text: "In a finally block after the loop" },
                { id: "d", text: "Nowhere — set $ErrorActionPreference = 'SilentlyContinue' instead" },
              ],
              correctChoiceId: "b",
              explanation:
                "A per-item try/catch lets you record a failure for that server and continue. Wrapping the whole loop aborts at the first failure, finally cannot resume a loop, and SilentlyContinue hides the failures entirely.",
              difficulty: "medium",
            },
            {
              id: "ps2-error-handling-depth-q3",
              prompt:
                "Which expression inside a catch block gives you the exception type you would need for a typed catch?",
              choices: [
                { id: "a", text: "$_.Message" },
                { id: "b", text: "$_.Exception.GetType().FullName" },
                { id: "c", text: "$Error.Count" },
                { id: "d", text: "$_.CategoryInfo.Activity" },
              ],
              correctChoiceId: "b",
              explanation:
                "$_.Exception.GetType().FullName returns the fully qualified type name you put in catch [Type]. $_.Message is the text, $Error.Count is a tally, and CategoryInfo.Activity names the cmdlet.",
              difficulty: "medium",
            },
            {
              id: "ps2-error-handling-depth-q4",
              prompt:
                "A script opens a transcript, does work, and stops the transcript on the line after the try block. The work throws. What happens to the transcript?",
              choices: [
                { id: "a", text: "PowerShell always stops transcripts when a script ends" },
                { id: "b", text: "It is left running, because the stop line was skipped" },
                { id: "c", text: "The catch block stops it automatically" },
                { id: "d", text: "The transcript file is deleted" },
              ],
              correctChoiceId: "b",
              explanation:
                "Code after a try block does not run when an unhandled terminating error propagates. Cleanup belongs in finally, which runs on every path.",
              difficulty: "hard",
            },
            {
              id: "ps2-error-handling-depth-q5",
              prompt:
                "A script imports a CSV, finds zero rows, and continues to produce an empty report. What is the most defensible improvement?",
              choices: [
                { id: "a", text: "Wrap Import-Csv in catch { } so the error is hidden" },
                { id: "b", text: "throw a message saying the input file had no rows, and exit non-zero" },
                { id: "c", text: "Set $ErrorActionPreference = 'SilentlyContinue' at the top" },
                { id: "d", text: "Retry Import-Csv ten times" },
              ],
              correctChoiceId: "b",
              explanation:
                "Zero rows is a precondition failure, not a transient one. Throwing loudly prevents a confidently empty report from being mistaken for good news. Retrying will not add rows, and the other two options hide the problem.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps2-error-handling-depth-b1",
              prompt: "Which -ErrorAction value makes an error catchable?",
              choices: [
                { id: "a", text: "Continue" },
                { id: "b", text: "SilentlyContinue" },
                { id: "c", text: "Stop" },
                { id: "d", text: "Ignore" },
              ],
              correctChoiceId: "c",
              explanation:
                "Stop promotes a non-terminating error to terminating so try/catch can handle it. The others let execution continue, with varying amounts of reporting.",
            },
            {
              id: "ps2-error-handling-depth-b2",
              prompt: "What is the difference between SilentlyContinue and Ignore?",
              choices: [
                { id: "a", text: "There is none" },
                { id: "b", text: "SilentlyContinue still records the error in $Error; Ignore does not" },
                { id: "c", text: "Ignore stops the pipeline; SilentlyContinue does not" },
                { id: "d", text: "SilentlyContinue only works on cmdlets, Ignore only on functions" },
              ],
              correctChoiceId: "b",
              explanation:
                "Both suppress the display, but Ignore leaves no record at all, which makes later diagnosis impossible.",
            },
            {
              id: "ps2-error-handling-depth-b3",
              prompt: "When does a finally block run?",
              choices: [
                { id: "a", text: "Only when no error occurred" },
                { id: "b", text: "Only when an error was caught" },
                { id: "c", text: "On every path — success, caught error, and uncaught error" },
                { id: "d", text: "Only if you call it explicitly" },
              ],
              correctChoiceId: "c",
              explanation:
                "finally is the guaranteed cleanup path, which is why sessions, files, and transcripts belong there.",
            },
            {
              id: "ps2-error-handling-depth-b4",
              prompt: "Why must a typed catch appear before a general catch?",
              choices: [
                { id: "a", text: "PowerShell sorts catch blocks alphabetically" },
                { id: "b", text: "The first matching catch wins, and an untyped catch matches everything" },
                { id: "c", text: "Typed catches are only allowed in the first position by syntax" },
                { id: "d", text: "It makes no difference to behaviour" },
              ],
              correctChoiceId: "b",
              explanation:
                "Catch blocks are evaluated in order and the first match handles the error, so a general catch placed first makes every typed catch below it unreachable.",
            },
            {
              id: "ps2-error-handling-depth-b5",
              prompt:
                "-ErrorVariable myErrors on a cmdlet call does what?",
              choices: [
                { id: "a", text: "Suppresses the error display" },
                { id: "b", text: "Collects the errors from that call into $myErrors for inspection" },
                { id: "c", text: "Renames $Error globally" },
                { id: "d", text: "Converts the error to a terminating error" },
              ],
              correctChoiceId: "b",
              explanation:
                "-ErrorVariable captures that call's errors into a named variable so you can count and report them. It does not suppress or promote anything on its own.",
            },
            {
              id: "ps2-error-handling-depth-b6",
              prompt:
                "Which is the strongest argument against $ErrorActionPreference = 'Stop' at the top of a large script?",
              choices: [
                { id: "a", text: "It is deprecated in PowerShell 7" },
                { id: "b", text: "It makes every command terminating, including ones whose failure you intended to tolerate" },
                { id: "c", text: "It disables try/catch" },
                { id: "d", text: "It slows the script down measurably" },
              ],
              correctChoiceId: "b",
              explanation:
                "A global preference is a blunt instrument: a tolerable failure now aborts the run. Per-call -ErrorAction Stop expresses intent where the intent lives.",
            },
            {
              id: "ps2-error-handling-depth-b7",
              prompt:
                "In a per-item catch, which ErrorRecord property most often holds the item that failed?",
              choices: [
                { id: "a", text: "$_.TargetObject" },
                { id: "b", text: "$_.ScriptStackTrace" },
                { id: "c", text: "$_.FullyQualifiedErrorId" },
                { id: "d", text: "$_.InvocationInfo.Line" },
              ],
              correctChoiceId: "a",
              explanation:
                "TargetObject is the object the cmdlet was acting on, which is exactly what an error report row needs. The others describe location, identity, and source text.",
            },
            {
              id: "ps2-error-handling-depth-b8",
              prompt:
                "When is throw the correct response rather than catch-and-continue?",
              choices: [
                { id: "a", text: "Whenever any command fails" },
                { id: "b", text: "When a precondition is violated and continuing would produce a wrong result" },
                { id: "c", text: "Never — throw is only for module authors" },
                { id: "d", text: "Only inside finally blocks" },
              ],
              correctChoiceId: "b",
              explanation:
                "throw is for the cases where a plausible-looking wrong answer is worse than a stopped run: empty input, missing column, wrong subscription.",
            },
          ],
          flashcards: [
            {
              id: "ps2-error-handling-depth-f1",
              front: "Why did my try/catch not fire?",
              back: "The error was non-terminating — add -ErrorAction Stop to that call",
            },
            {
              id: "ps2-error-handling-depth-f2",
              front: "Where does cleanup belong?",
              back: "finally — it runs on success, caught error, and uncaught error",
            },
            {
              id: "ps2-error-handling-depth-f3",
              front: "Useful ErrorRecord properties?",
              back: "$_.Exception.Message, $_.Exception.GetType().FullName, $_.ScriptStackTrace, $_.TargetObject",
            },
            {
              id: "ps2-error-handling-depth-f4",
              front: "Bulk loop — try/catch inside or outside?",
              back: "Inside, per item, so one failure becomes a row instead of ending the run",
            },
            {
              id: "ps2-error-handling-depth-f5",
              front: "When should a script throw?",
              back: "When a precondition fails and continuing would produce a confidently wrong answer",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-error-contract",
              title: "Make Failure Visible",
              type: "external-lab",
              instructions: `Goal: prove you can decide how a script fails instead of hoping it does not. Read-only apart from files you write in Documents\\ps2-labs. No admin rights needed.

### Try It
1. Run try { Get-Service 'NoSuchSvc' } catch { Write-Warning "caught: $($_.Exception.Message)" } and note that no warning appears.
2. Add -ErrorAction Stop to the Get-Service call and rerun. The warning now appears.
3. Inside the catch, print $_.Exception.GetType().FullName and write the type down.
4. Write a script Get-ServiceState.ps1 that takes [string[]]$Name, loops with foreach, and for each name uses try { Get-Service -Name $n -ErrorAction Stop } to build a [PSCustomObject] with Name, Status, and Result = 'OK'.
5. In the catch, build the same object shape with Status = $null, Result = 'Failed', and Reason = $_.Exception.Message.
6. Add a finally block inside the loop that writes a Write-Verbose line naming the item just handled.
7. Run .\\Get-ServiceState.ps1 -Name BITS,NoSuchSvc,Spooler and confirm you get three rows, one of them Failed.

### Break It
8. Change the catch block to an empty catch { } and rerun. Note that you now get two rows and no sign that anything failed.
9. Restore the catch, then move the try/catch so it wraps the whole foreach loop instead of the per-item work. Rerun the same three names and count the rows.
10. Restore the per-item try/catch, then remove -ErrorAction Stop from Get-Service. Rerun and note that the catch never fires and the bad name produces a red error plus a missing row.

### Fix It
11. Put the per-item try/catch back with -ErrorAction Stop, and make sure every path — success and failure — emits one object with the same properties.
12. Add a precondition at the top: if (-not $Name) { throw 'No service names supplied.' } and prove it fires with .\\Get-ServiceState.ps1 -Name @().

### Verify It
13. Run .\\Get-ServiceState.ps1 -Name BITS,NoSuchSvc,Spooler | Format-Table Name,Status,Result,Reason — three rows, one Failed with a real reason.
14. Run the same command piped into Where-Object Result -eq 'Failed' | Measure-Object — Count is exactly 1.
15. Export both halves: one CSV of Result -eq 'OK' and one of Result -eq 'Failed'. Open both and confirm the failed file names the service and the reason.
16. Run with -Verbose and confirm the finally narration appears once per item, including the failing one.

### Reflect
17. In your notes, answer in one or two sentences each. Why did step 9 produce fewer rows than step 7? And why is an empty catch block more dangerous than no try/catch at all?`,
              estimatedMinutes: 45,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Demonstrated that try/catch does not catch a non-terminating error without -ErrorAction Stop",
                "Built a per-item try/catch/finally that emits one consistent object per item",
                "Recorded the real reason from $_.Exception.Message on failed rows",
                "Added a throw precondition for empty input",
                "Break It / Fix It: reproduced and repaired the empty catch, the loop-wrapping try/catch, and the missing -ErrorAction Stop",
                "Verify It: exported paired success and failure CSVs with correct counts",
                "Reflect: explained why an empty catch is worse than no catch",
              ],
              relatedTopicIds: ["ps2-error-handling-depth", "ps2-parameters-and-validation"],
              order: 2,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "hard",
        },
        {
          id: "ps2-debugging-and-logging",
          name: "Debugging & Logging",
          objectives: ["PS2-M02-O4", "PS2-M02-O5", "PS2-M02-O6"],
          prerequisites: ["ps2-error-handling-depth"],
          lesson: {
            title: "Diagnose, Then Fix",
            content: `You will spend more of your career fixing automation you did not write than writing it. The people who do that quickly are not smarter; they follow a method instead of rereading the file hoping to spot the problem.

The method is: reproduce it, read the actual error, check the inputs, halve the script, inspect the object, then change one thing. Reproducing matters because a failure you cannot trigger on demand cannot be confirmed fixed. Reading the actual error matters because PowerShell errors name the cmdlet, the parameter, the path, or the property that failed, and people skip straight past that sentence to guess. Checking the inputs matters because most inherited breakages are environmental — a changed CSV header, an expired token, a new module version — not logic. Halving the script means commenting out the second half and confirming the first half still produces what you expect; you narrow by measurement rather than intuition.

PowerShell gives you six output streams and using them correctly is both a debugging tool and a design habit. The success stream carries data the caller can pipe. Write-Verbose narrates for a human who asked for detail with -Verbose. Write-Debug is for you, the author, and appears only with -Debug. Write-Warning flags something suspicious that did not stop the run. Write-Error records a failure without necessarily stopping. Write-Host paints text on a console and gives the caller nothing they can capture — which is why it belongs only in interactive tools.

Be generous with Write-Verbose while the code works, because it costs nothing when nobody asks for it. Say which file you are about to read, how many rows came back, which branch you took, which subscription you are pointed at. Those are exactly the lines you will wish existed the first time the script fails at 3 a.m.

When narration is not enough, use breakpoints instead of scattering print statements. Set-PSBreakpoint -Script .\\job.ps1 -Line 42 pauses execution there and drops you into a prompt where you can inspect real variables. The more powerful form is -Variable rows -Mode Write, which pauses the moment a variable is assigned — that is how you find where a value first goes wrong rather than where it finally causes an error. Clean up with Get-PSBreakpoint | Remove-PSBreakpoint. In VS Code you get the same engine with a UI.

Logging is a separate discipline from debugging, and it is written for the person reading it later. Every line wants a timestamp, a severity, and enough context to act: which item, which path, which count. Prefer structured lines you can Import-Csv over prose, because a log you can query is a log you will actually use. Start-Transcript captures a whole session including everything you typed, which is excellent evidence for a change window, but it is a record of what happened rather than a substitute for deliberate log lines. And a run that produced no log line at all is indistinguishable from a run that never happened.`,
            experience: PS2_DEBUGGING_AND_LOGGING_EXPERIENCE,
          },
          lightbulbMoment:
            "Set-PSBreakpoint -Variable x -Mode Write finds where a value first goes wrong, not where it finally causes an error.",
          keyFacts: [
            "Reproduce, read the error, check inputs, halve the script, inspect the object, change one thing",
            "Six streams: success for data, verbose for humans, debug for authors, warning, error, host",
            "Write-Verbose is free when nobody passes -Verbose — narrate generously",
            "Set-PSBreakpoint -Variable <name> -Mode Write pauses when a value changes",
            "A log line needs a timestamp, a severity, and enough context to act on",
          ],
          guidedExample: {
            title: "Narrow A Failure Without Guessing",
            steps: [
              "Reproduce the failure on demand and copy the complete error text, not a paraphrase.",
              "Read which cmdlet, parameter, path, or property the error names.",
              "Check the inputs: does the CSV still have the header the script expects?",
              "Comment out the second half and confirm the first half produces the expected object count.",
              "Pipe the suspect variable into Get-Member to see what it actually is, not what you assumed.",
              "Set-PSBreakpoint -Script .\\job.ps1 -Variable rows -Mode Write, rerun, and inspect at the pause.",
            ],
          },
          commonMistakes: [
            "Guessing at a fix before reading the error message that names the failing parameter",
            "Changing several things at once, so a passing run proves nothing about the cause",
            "Using Write-Host for diagnostics, which cannot be redirected or captured by the caller",
            "Assuming the code broke when the input file, token, or module version changed",
            "Logging prose sentences that cannot be filtered, counted, or imported later",
          ],
          realWorldTraps: [
            "A script 'stopped working' after a CSV export added a space to a column header",
            "The only evidence of a failed overnight run is that the report file is missing",
            "Diagnostics written with Write-Host disappear when the script runs under a scheduler",
            "A left-behind breakpoint pauses a scheduled run and the task appears to hang",
          ],
          realWorldScenario:
            "A nightly inventory script has produced an empty CSV for a week and nobody noticed because it exits cleanly. You reproduce it, find the error text names a property that no longer exists after a module upgrade, and add three Write-Verbose lines plus a timestamped log with a row count. The next silent failure is caught the same morning because the log says Rows=0.",
          quiz: [
            {
              id: "ps2-debugging-and-logging-q1",
              prompt:
                "A variable holds the wrong value by the time it is used, but no error is thrown until much later. Which tool most directly finds where the value first went wrong?",
              choices: [
                { id: "a", text: "Set-PSBreakpoint -Variable rows -Mode Write" },
                { id: "b", text: "Start-Transcript" },
                { id: "c", text: "Write-Host at the end of the script" },
                { id: "d", text: "$ErrorActionPreference = 'Stop'" },
              ],
              correctChoiceId: "a",
              explanation:
                "A write-mode variable breakpoint pauses at each assignment, so you see the moment the value becomes wrong. A transcript records output after the fact, a final Write-Host shows only the end state, and changing the error preference does not address a wrong-but-valid value.",
              difficulty: "medium",
            },
            {
              id: "ps2-debugging-and-logging-q2",
              prompt:
                "You want a function to narrate its progress for anyone who asks, without polluting the data it returns. Which is correct?",
              choices: [
                { id: "a", text: "Write-Host, because it never enters the pipeline" },
                { id: "b", text: "Write-Output, because callers can filter it out" },
                { id: "c", text: "Write-Verbose, which is off by default and enabled with -Verbose" },
                { id: "d", text: "Write-Error with -ErrorAction SilentlyContinue" },
              ],
              correctChoiceId: "c",
              explanation:
                "Write-Verbose is the narration stream: suppressed unless requested and never mixed into data. Write-Output would become part of the result, Write-Host cannot be captured or redirected usefully, and Write-Error misrepresents progress as failure.",
              difficulty: "easy",
            },
            {
              id: "ps2-debugging-and-logging-q3",
              prompt:
                "A script that worked last month now fails, and the code has not changed. Which step should come first?",
              choices: [
                { id: "a", text: "Rewrite the failing section with try/catch" },
                { id: "b", text: "Compare the current inputs, permissions, and module versions against the last good run" },
                { id: "c", text: "Add Write-Host statements throughout" },
                { id: "d", text: "Increase the retry count" },
              ],
              correctChoiceId: "b",
              explanation:
                "If the code did not change, something in the environment did. Checking inputs, credentials, and module versions is faster and more likely to find the cause than editing logic you have not yet proven wrong.",
              difficulty: "medium",
            },
            {
              id: "ps2-debugging-and-logging-q4",
              prompt: "Which log line is most useful during an incident review?",
              choices: [
                { id: "a", text: "\"Something went wrong\"" },
                { id: "b", text: "\"2026-09-08 03:14:07,ERROR,Import,users.csv,Rows=0,Missing column UserPrincipalName\"" },
                { id: "c", text: "\"Script finished\"" },
                { id: "d", text: "\"ERROR\"" },
              ],
              correctChoiceId: "b",
              explanation:
                "It carries a timestamp, severity, stage, target, a count, and the specific reason — and its structure means you can Import-Csv a month of logs and filter them. The others cannot be acted on or aggregated.",
              difficulty: "easy",
            },
            {
              id: "ps2-debugging-and-logging-q5",
              prompt:
                "What is the main limitation of relying on Start-Transcript instead of deliberate log lines?",
              choices: [
                { id: "a", text: "Transcripts cannot be written to disk" },
                { id: "b", text: "It records what was displayed, so it captures no structure and nothing about suppressed streams" },
                { id: "c", text: "Transcripts only work in PowerShell 7" },
                { id: "d", text: "It stops the script when an error occurs" },
              ],
              correctChoiceId: "b",
              explanation:
                "A transcript is a session recording: excellent evidence, but unstructured and blind to anything you did not display. Deliberate log lines give you fields you can filter and count.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps2-debugging-and-logging-b1",
              prompt: "Which stream is intended for the script author rather than the operator?",
              choices: [
                { id: "a", text: "Verbose" },
                { id: "b", text: "Debug" },
                { id: "c", text: "Warning" },
                { id: "d", text: "Information" },
              ],
              correctChoiceId: "b",
              explanation:
                "Write-Debug is author-facing and appears with -Debug. Verbose is operator narration, warning flags suspicion, and information is a general-purpose stream.",
            },
            {
              id: "ps2-debugging-and-logging-b2",
              prompt: "How do you remove every breakpoint from the current session?",
              choices: [
                { id: "a", text: "Clear-PSBreakpoint" },
                { id: "b", text: "Get-PSBreakpoint | Remove-PSBreakpoint" },
                { id: "c", text: "Reset-Debugger" },
                { id: "d", text: "Disable-PSBreakpoint -All" },
              ],
              correctChoiceId: "b",
              explanation:
                "Get-PSBreakpoint piped into Remove-PSBreakpoint is the idiom. Disable-PSBreakpoint exists but only turns them off; the other two are not real cmdlets.",
            },
            {
              id: "ps2-debugging-and-logging-b3",
              prompt: "Why is 'change one thing at a time' a debugging rule?",
              choices: [
                { id: "a", text: "PowerShell caches edits" },
                { id: "b", text: "If several changes are made together, a passing run does not tell you which one mattered" },
                { id: "c", text: "Multiple edits break comment-based help" },
                { id: "d", text: "It is only a style preference" },
              ],
              correctChoiceId: "b",
              explanation:
                "Diagnosis requires attributing the fix. Bundled changes leave you with a working script and no understanding, which is how the same bug returns.",
            },
            {
              id: "ps2-debugging-and-logging-b4",
              prompt:
                "$data | Get-Member is useful during debugging mainly because it tells you:",
              choices: [
                { id: "a", text: "How long the pipeline took" },
                { id: "b", text: "What the object actually is and which properties really exist" },
                { id: "c", text: "Whether the script has syntax errors" },
                { id: "d", text: "Which user is running the script" },
              ],
              correctChoiceId: "b",
              explanation:
                "Most 'empty output' bugs are a property name that does not exist on the object you actually have. Get-Member replaces the assumption with a fact.",
            },
            {
              id: "ps2-debugging-and-logging-b5",
              prompt: "Which is the strongest reason to write logs as CSV-shaped lines?",
              choices: [
                { id: "a", text: "CSV files compress better" },
                { id: "b", text: "You can Import-Csv a month of runs and filter, group, and count them" },
                { id: "c", text: "PowerShell cannot append plain text" },
                { id: "d", text: "Auditors reject plain text logs" },
              ],
              correctChoiceId: "b",
              explanation:
                "Structure is what makes a log queryable. Prose logs get read once during the incident and never again.",
            },
            {
              id: "ps2-debugging-and-logging-b6",
              prompt:
                "A scheduled task appears to hang every night at the same point. Which overlooked cause fits best?",
              choices: [
                { id: "a", text: "A leftover breakpoint or an interactive prompt in the script" },
                { id: "b", text: "Too many Write-Verbose calls" },
                { id: "c", text: "A CSV export with too many columns" },
                { id: "d", text: "Using try/catch inside a loop" },
              ],
              correctChoiceId: "a",
              explanation:
                "Anything that waits for a human — a breakpoint, Read-Host, a missing mandatory parameter, a -Confirm prompt — hangs under a scheduler. The others affect output or speed, not blocking.",
            },
            {
              id: "ps2-debugging-and-logging-b7",
              prompt: "What does 'halve the script' mean as a diagnostic step?",
              choices: [
                { id: "a", text: "Delete half the code permanently to simplify it" },
                { id: "b", text: "Disable the later half and confirm the earlier half still produces the expected result" },
                { id: "c", text: "Split the script into two files for readability" },
                { id: "d", text: "Run it with half the input rows" },
              ],
              correctChoiceId: "b",
              explanation:
                "You are bisecting to find which side of the script the failure lives on. Reducing input volume is a different, sometimes complementary, test.",
            },
            {
              id: "ps2-debugging-and-logging-b8",
              prompt:
                "Which pair of facts should every unattended run leave behind?",
              choices: [
                { id: "a", text: "A start and end timestamp with an outcome and a record count" },
                { id: "b", text: "The script's full source code" },
                { id: "c", text: "The operator's password hash" },
                { id: "d", text: "A screenshot of the console" },
              ],
              correctChoiceId: "a",
              explanation:
                "Timestamps plus outcome and counts let you tell a healthy run from a silently empty one. Never log credentials in any form.",
            },
          ],
          flashcards: [
            {
              id: "ps2-debugging-and-logging-f1",
              front: "Debugging method in order?",
              back: "Reproduce, read the error, check inputs, halve the script, inspect the object, change one thing",
            },
            {
              id: "ps2-debugging-and-logging-f2",
              front: "Verbose vs Debug?",
              back: "Verbose narrates for the operator (-Verbose); Debug is for the author (-Debug)",
            },
            {
              id: "ps2-debugging-and-logging-f3",
              front: "Find where a value first goes wrong?",
              back: "Set-PSBreakpoint -Variable <name> -Mode Write",
            },
            {
              id: "ps2-debugging-and-logging-f4",
              front: "What belongs on every log line?",
              back: "Timestamp, severity, stage, target, count, and the specific reason",
            },
            {
              id: "ps2-debugging-and-logging-f5",
              front: "Script broke but code did not change — first check?",
              back: "Inputs, permissions, tokens, and module versions",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-broken-automation",
              title: "Fix Someone Else's Broken Automation",
              type: "external-lab",
              instructions: `Goal: diagnose a script you did not write using a method instead of intuition. Everything is read-only apart from files in Documents\\ps2-labs.

### Try It
1. Create a folder Documents\\ps2-labs and run: Get-Process | Select-Object -First 20 Name,Id,WorkingSet | Export-Csv .\\procs.csv -NoTypeInformation
2. Create Report-Procs.ps1 containing exactly this deliberately fragile body: a param block with [string]$Path = '.\\procs.csv'; then $rows = Import-Csv $Path; then $big = $rows | Where-Object { $_.WorkingSetMB -gt 50 }; then $big | Select-Object Name, Id, WorkingSetMB | Export-Csv .\\big-procs.csv -NoTypeInformation; then Write-Host "Done."
3. Run .\\Report-Procs.ps1 and open big-procs.csv. It is empty, and the script printed Done and exited cleanly.
4. Now diagnose. Run $rows = Import-Csv .\\procs.csv; $rows[0] | Get-Member -MemberType NoteProperty and read the real property names.
5. Write down the mismatch you found between the property the script filters on and the property that exists.

### Break It
6. Make the failure worse in a realistic way. Add -ErrorAction SilentlyContinue to the Import-Csv call and change $Path's default to '.\\procs-missing.csv'. Rerun. Note that you still get Done and a clean exit with no file and no error.
7. Replace Write-Host "Done." with Write-Host "Exported $($big.Count) rows." Rerun and note that it reports 0 without treating 0 as a problem.

### Fix It
8. Remove -ErrorAction SilentlyContinue and restore the real path, so a missing file is visible.
9. Add a precondition: if (-not (Test-Path $Path)) { throw "Input file not found: $Path" }
10. Fix the filter to use the property that actually exists, and add a calculated property so the report has a real WorkingSetMB: Select-Object Name, Id, @{ Name='WorkingSetMB'; Expression={ [math]::Round($_.WorkingSet / 1MB, 1) } }
11. Add [CmdletBinding()] and replace both Write-Host lines with Write-Verbose for narration plus one Write-Warning when the exported row count is 0.
12. Append one structured log line per run to .\\report-log.csv with Timestamp, Path, Rows, Exported, and Outcome.

### Verify It
13. Run .\\Report-Procs.ps1 -Verbose. The narration names the input path and the row count, and big-procs.csv now has rows with a numeric WorkingSetMB.
14. Run .\\Report-Procs.ps1 -Path .\\nope.csv and confirm you get a thrown error naming the missing file, not a clean exit.
15. Run Import-Csv .\\report-log.csv | Format-Table and confirm you can see one row per run including the failed attempt.
16. Set a breakpoint with Set-PSBreakpoint -Script .\\Report-Procs.ps1 -Variable big -Mode Write, rerun, inspect $big at the pause, then run Get-PSBreakpoint | Remove-PSBreakpoint.

### Reflect
17. In your notes, answer in one or two sentences each. Which single diagnostic step told you the real cause in step 4, and why did the original script's clean exit make the bug survive for so long?`,
              estimatedMinutes: 55,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Reproduced a silent wrong-answer failure and found the cause with Get-Member",
                "Demonstrated how -ErrorAction SilentlyContinue and Write-Host hid a missing input file",
                "Added a Test-Path precondition that throws with the offending path in the message",
                "Replaced the broken filter with a calculated property that produces real numbers",
                "Converted narration to Write-Verbose and added a warning on a zero-row export",
                "Appended a structured CSV log line per run and read it back with Import-Csv",
                "Used Set-PSBreakpoint -Variable -Mode Write and removed the breakpoint afterwards",
                "Reflect: named the diagnostic step that found the cause and why the clean exit hid it",
              ],
              relatedTopicIds: ["ps2-debugging-and-logging", "ps2-error-handling-depth"],
              order: 3,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "ps2-data-and-apis",
      name: "Module 3 — Data & API Automation",
      topics: [
        {
          id: "ps2-data-shaping-and-reporting",
          name: "Data Shaping & Reporting",
          objectives: ["PS2-M03-O1", "PS2-M03-O2", "PS2-M03-O3"],
          prerequisites: ["ps2-debugging-and-logging"],
          lesson: {
            title: "Messy Input, Trustworthy Report",
            content: `Most automation work is not exciting. It is data arriving badly: a spreadsheet from HR with trailing spaces and two date formats, an export with a blank row in the middle, two lists that should match and do not. Handling that well is the single most transferable PowerShell skill in IT support, and it is almost entirely about deciding where the cleaning happens.

The answer is: once, at the edge. Read the messy input, then immediately emit [PSCustomObject] rows with the property names, types, and trimmed values you chose. Do not carry someone else's column names — Emp Name, e-mail_address, StartDt — through your whole script, because then every downstream step has to know about the mess. Normalise into your own shape and everything after that point gets to assume the data is clean, because one place made it so.

Validation belongs in the same pass. For each row decide whether it is usable, and if not, why. Keep two collections: valid rows in your normalised shape, and rejected rows carrying the original values plus a Reason. That paired output is the difference between a bulk job people trust and one that quietly drops records. A job that emits only successes hides its own failures.

Calculated properties are how you compute the column you actually need. Select-Object @{ Name='SizeGB'; Expression={ [math]::Round($_.Length/1GB, 2) } } adds a real numeric column. Keep it numeric. The moment you format it as a string with GB on the end, sorting compares text, summing fails, and your report starts lying while looking tidier.

Group-Object and Measure-Object turn rows into answers. Group-Object Department returns Name, Count, and Group for each bucket, and piping those into a [PSCustomObject] with a count and a sum gives you the summary a manager actually asked for instead of 4,000 rows. Measure-Object -Property SizeGB -Sum -Average -Maximum aggregates in one call. Remember that Group-Object on unsorted data still works — unlike some other tools, it does not require a sort first — but the order of the resulting groups follows first appearance unless you sort afterwards.

Compare-Object answers the reconciliation question people otherwise do by eye across two spreadsheets. Compare-Object -ReferenceObject $expected -DifferenceObject $actual -Property SamAccountName marks each difference with a SideIndicator of <= for reference-only and => for difference-only, and -IncludeEqual adds == for matches. That is your leaver report, your licence drift report, and your "why does this group have members it should not" report.

One caution that catches everyone: a blank cell and a zero are different facts. Empty means nobody told us; zero means we measured nothing. If you replace $null with 0 while cleaning, you have invented data, and every average you compute afterwards is wrong. Reject the row or keep the null — do not guess on the caller's behalf.`,
            experience: PS2_DATA_SHAPING_AND_REPORTING_EXPERIENCE,
          },
          lightbulbMoment:
            "Clean and validate once at the edge into your own object shape, and everything downstream can assume the data is good.",
          keyFacts: [
            "Normalise messy input into [PSCustomObject] rows with your own property names and types",
            "Keep two collections: valid rows and rejected rows with a Reason on each",
            "Calculated properties must stay numeric — formatting them as strings breaks sorting and summing",
            "Group-Object plus Measure-Object turns rows into the summary that was actually requested",
            "Compare-Object -Property with SideIndicator answers 'what is different between these two lists'",
          ],
          guidedExample: {
            title: "Turn A Messy CSV Into Two Reports",
            steps: [
              "Import-Csv the raw file and inspect the real headers with $rows[0] | Get-Member.",
              "For each row, trim strings and validate: is the email plausible, is the date parseable, is the department non-empty?",
              "Emit valid rows as [PSCustomObject]@{ UserPrincipalName=...; Department=...; StartDate=[datetime]... }.",
              "Emit rejected rows as [PSCustomObject] carrying the original values plus Reason.",
              "Group the valid rows with Group-Object Department and build a summary with Count per department.",
              "Export three files: valid.csv, rejected.csv, and summary.csv — then check the row counts add up.",
            ],
          },
          commonMistakes: [
            "Carrying the source system's column names through the whole script instead of normalising once",
            "Formatting a numeric calculated property as a string, which breaks Sort-Object and Measure-Object",
            "Replacing empty values with 0, which invents data and corrupts every average",
            "Exporting only the successful rows, so dropped records are invisible",
            "Filtering on a property that does not exist, which yields an empty report and no error",
          ],
          realWorldTraps: [
            "A trailing space in a department name creates a second 'Sales ' group with three people in it",
            "Dates arrive as both 03/04/2026 and 2026-04-03 and the sort silently interleaves them",
            "A bulk import reports 480 successes out of a 500-row file and nobody asks about the other 20",
            "A summary that sums a 'SizeGB' string column returns 0 and is signed off as accurate",
          ],
          realWorldScenario:
            "HR sends a 500-row starters spreadsheet each Monday. Twenty rows have a blank department, three have a malformed email, and one has a date in the wrong format. Your script normalises every row, rejects the 24 bad ones into rejected.csv with a Reason, imports the rest, and emails a summary grouped by department. HR now fixes their own data because the rejection report names the row.",
          quiz: [
            {
              id: "ps2-data-shaping-and-reporting-q1",
              prompt:
                "Your report adds a size column with @{ Name='SizeGB'; Expression={ \"$([math]::Round($_.Length/1GB,2)) GB\" } }. Sorting by SizeGB puts 9.5 GB above 100.2 GB. Why?",
              choices: [
                { id: "a", text: "Sort-Object needs the -Descending switch to handle decimals" },
                { id: "b", text: "The property is a string, so it sorts alphabetically and '9' beats '1'" },
                { id: "c", text: "Round() returns a string in PowerShell" },
                { id: "d", text: "Calculated properties cannot be sorted" },
              ],
              correctChoiceId: "b",
              explanation:
                "Embedding the value in a string makes the column text, so comparison is character by character. Keep the property numeric and let the display layer add units. Round() returns a number; the interpolation is what stringified it.",
              difficulty: "medium",
            },
            {
              id: "ps2-data-shaping-and-reporting-q2",
              prompt:
                "You must report which users are in the expected list but missing from the actual export. Which approach is most direct?",
              choices: [
                { id: "a", text: "Two nested foreach loops with a match flag" },
                { id: "b", text: "Compare-Object -ReferenceObject $expected -DifferenceObject $actual -Property UserPrincipalName, then filter SideIndicator '<='" },
                { id: "c", text: "Group-Object UserPrincipalName on the combined lists" },
                { id: "d", text: "Sort both lists and compare row counts" },
              ],
              correctChoiceId: "b",
              explanation:
                "Compare-Object with -Property gives per-row SideIndicators; <= means present only in the reference set. Nested loops work but are slower and easier to get wrong, grouping does not tell you which side is missing, and counts cannot identify rows.",
              difficulty: "medium",
            },
            {
              id: "ps2-data-shaping-and-reporting-q3",
              prompt:
                "A CSV has some rows with an empty Salary cell. Your report averages Salary. What should the cleaning pass do?",
              choices: [
                { id: "a", text: "Replace empty with 0 so the average always works" },
                { id: "b", text: "Keep the value null or reject the row with a Reason, and exclude it from the average" },
                { id: "c", text: "Copy the previous row's value down" },
                { id: "d", text: "Replace empty with the current average" },
              ],
              correctChoiceId: "b",
              explanation:
                "Empty means unknown. Substituting 0, a neighbouring value, or the mean all fabricate data and change the result. Excluding it and saying so is honest and reproducible.",
              difficulty: "medium",
            },
            {
              id: "ps2-data-shaping-and-reporting-q4",
              prompt:
                "A bulk job processes 500 rows and exports 500 successes, but only 480 records reached the target system. What was most likely missing from the design?",
              choices: [
                { id: "a", text: "A -WhatIf switch" },
                { id: "b", text: "A paired rejected-rows collection, so the 20 failures were never recorded" },
                { id: "c", text: "A Group-Object summary" },
                { id: "d", text: "A faster import method" },
              ],
              correctChoiceId: "b",
              explanation:
                "Exporting only successes hides failures. A per-row outcome with a Reason, exported alongside, makes the 20 visible immediately. The other options are useful but do not address missing failure records.",
              difficulty: "easy",
            },
            {
              id: "ps2-data-shaping-and-reporting-q5",
              prompt:
                "Why normalise input into your own [PSCustomObject] shape immediately rather than filtering the imported rows directly?",
              choices: [
                { id: "a", text: "Import-Csv objects cannot be filtered" },
                { id: "b", text: "It centralises trimming, typing, and renaming in one place so downstream code can assume clean data" },
                { id: "c", text: "PSCustomObject uses less memory than a CSV row" },
                { id: "d", text: "Only PSCustomObject can be exported to CSV" },
              ],
              correctChoiceId: "b",
              explanation:
                "One cleaning boundary means one place to fix when the source format changes. Imported rows are perfectly filterable and exportable; the issue is that their shape belongs to someone else.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-data-shaping-and-reporting-b1",
              prompt: "Which cmdlet returns Name, Count, and Group per bucket?",
              choices: [
                { id: "a", text: "Measure-Object" },
                { id: "b", text: "Group-Object" },
                { id: "c", text: "Compare-Object" },
                { id: "d", text: "Sort-Object" },
              ],
              correctChoiceId: "b",
              explanation:
                "Group-Object buckets rows and reports Name, Count, and the grouped items. Measure-Object aggregates numbers, Compare-Object finds differences, Sort-Object orders.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b2",
              prompt: "What does a SideIndicator of => mean in Compare-Object output?",
              choices: [
                { id: "a", text: "Present only in the reference object" },
                { id: "b", text: "Present only in the difference object" },
                { id: "c", text: "Present in both" },
                { id: "d", text: "The values differ but the keys match" },
              ],
              correctChoiceId: "b",
              explanation:
                "=> points to the difference side. <= means reference-only, and == appears only when you pass -IncludeEqual.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b3",
              prompt: "Which is the correct calculated-property syntax?",
              choices: [
                { id: "a", text: "@{ Name='X'; Value={ ... } }" },
                { id: "b", text: "@{ Label='X'; Expression={ ... } }" },
                { id: "c", text: "@{ Property='X'; Script={ ... } }" },
                { id: "d", text: "@{ Column='X'; Compute={ ... } }" },
              ],
              correctChoiceId: "b",
              explanation:
                "Select-Object accepts Name or Label for the column and Expression for the scriptblock. The other key names are ignored, which is why a mistyped hash table yields an empty column.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b4",
              prompt:
                "Every property from Import-Csv arrives as which type?",
              choices: [
                { id: "a", text: "The type inferred from the value" },
                { id: "b", text: "String" },
                { id: "c", text: "Object" },
                { id: "d", text: "Whatever the header suffix says" },
              ],
              correctChoiceId: "b",
              explanation:
                "Import-Csv produces string properties, which is why '9' -gt '100' is true and why casting during normalisation matters.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b5",
              prompt:
                "Which pair of exports should a bulk data job always produce?",
              choices: [
                { id: "a", text: "A success report and an error report" },
                { id: "b", text: "A CSV and an HTML version of the same rows" },
                { id: "c", text: "A log and a screenshot" },
                { id: "d", text: "A summary and a copy of the source file" },
              ],
              correctChoiceId: "a",
              explanation:
                "Paired outputs make dropped records impossible to miss. Formats and copies are conveniences, not accountability.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b6",
              prompt:
                "You need a total of a numeric column plus the largest value. Which is most direct?",
              choices: [
                { id: "a", text: "Measure-Object -Property SizeGB -Sum -Maximum" },
                { id: "b", text: "Group-Object SizeGB | Select-Object Count" },
                { id: "c", text: "Sort-Object SizeGB -Descending | Select-Object -First 1" },
                { id: "d", text: "Compare-Object with -IncludeEqual" },
              ],
              correctChoiceId: "a",
              explanation:
                "Measure-Object computes Sum, Average, Minimum, Maximum, and Count in one pass. Sorting gives you the maximum but not the total.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b7",
              prompt:
                "A department column contains 'Sales' and 'Sales ' and grouping shows two departments. What is the fix?",
              choices: [
                { id: "a", text: "Group on a different property" },
                { id: "b", text: "Trim the value during normalisation" },
                { id: "c", text: "Sort before grouping" },
                { id: "d", text: "Use -CaseSensitive on Group-Object" },
              ],
              correctChoiceId: "b",
              explanation:
                "Trailing whitespace is a data problem, so it belongs in the cleaning pass. Sorting does not merge groups, and case sensitivity is a different issue.",
            },
            {
              id: "ps2-data-shaping-and-reporting-b8",
              prompt:
                "Why is Export-Csv -NoTypeInformation (or PowerShell 7's default) important for handoff files?",
              choices: [
                { id: "a", text: "It makes the file smaller" },
                { id: "b", text: "It omits the #TYPE header line that confuses Excel and other importers" },
                { id: "c", text: "It enforces UTF-8" },
                { id: "d", text: "It sorts the columns alphabetically" },
              ],
              correctChoiceId: "b",
              explanation:
                "The #TYPE line is PowerShell metadata that other tools read as a data row. Encoding is a separate parameter, and column order follows the object.",
            },
          ],
          flashcards: [
            {
              id: "ps2-data-shaping-and-reporting-f1",
              front: "Where should input cleaning happen?",
              back: "Once at the edge — normalise into your own [PSCustomObject] shape before any logic",
            },
            {
              id: "ps2-data-shaping-and-reporting-f2",
              front: "Import-Csv property types?",
              back: "All strings — cast during normalisation or comparisons will surprise you",
            },
            {
              id: "ps2-data-shaping-and-reporting-f3",
              front: "Compare-Object SideIndicators?",
              back: "<= reference only, => difference only, == equal (with -IncludeEqual)",
            },
            {
              id: "ps2-data-shaping-and-reporting-f4",
              front: "Calculated property keys?",
              back: "@{ Name='X'; Expression={ ... } } — keep the result numeric",
            },
            {
              id: "ps2-data-shaping-and-reporting-f5",
              front: "Blank cell vs zero?",
              back: "Blank means unknown; zero is a measurement. Never substitute one for the other",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-project-bulk-user-cleanup",
              title: "Project — Bulk User Data Cleanup",
              type: "external-lab",
              instructions: `Goal: build the bulk data workflow that IT support runs every week — validate messy input, normalise it, reconcile it against a second list, and emit paired success and error reports. No accounts are created or changed anywhere; this is local file work in Documents\\ps2-labs.

### Try It
1. Create starters-raw.csv with a deliberately messy header row and eight data rows. Include: two rows with trailing spaces in Department, one row with a blank Department, one row with an email missing the @, one row with StartDate as 03/04/2026 and another as 2026-04-03, and one completely blank line.
2. Create existing-users.csv with a UserPrincipalName column holding five values, three of which match your starters file and two of which do not.
3. Write Invoke-StarterCleanup.ps1 with [CmdletBinding()] and parameters [Parameter(Mandatory)][ValidateScript({Test-Path $_})][string]$StarterPath, [Parameter(Mandatory)][ValidateScript({Test-Path $_})][string]$ExistingPath, and [string]$OutputFolder = '.'.
4. Import the starters file and, for each row, decide valid or rejected. Emit valid rows as [PSCustomObject] with UserPrincipalName (trimmed, lowercased), DisplayName, Department (trimmed), and StartDate cast to [datetime].
5. Emit rejected rows as [PSCustomObject] with the original values plus a Reason such as 'Blank department' or 'Email missing @' or 'Unparseable date'.
6. Export valid rows to starters-valid.csv and rejected rows to starters-rejected.csv, both with -NoTypeInformation.
7. Build a summary with Group-Object Department and export Department, Count to starters-summary.csv.
8. Use Compare-Object -ReferenceObject (Import-Csv $ExistingPath) -DifferenceObject $valid -Property UserPrincipalName -IncludeEqual and export a reconciliation file showing which starters are new, which already exist, and which existing users are not in the starters list.

### Break It
9. Change your StartDate normalisation to [datetime]$_.StartDate with no try/catch, rerun, and watch the whole script die on the ambiguous date row instead of rejecting just that row.
10. Change the Department normalisation to drop the .Trim() call, rerun, and note that starters-summary.csv now shows the same department twice with split counts.
11. Change the blank-department rule to substitute 'Unknown' silently instead of rejecting, rerun, and note that the rejected file loses a row while the summary gains a department that does not exist in the source.

### Fix It
12. Wrap the per-row normalisation in try/catch so a bad date rejects that row with a Reason and the run continues.
13. Restore .Trim() on every string you group or compare on.
14. Restore the rejection for blank Department, and confirm the rejected file names the row and the reason.

### Verify It
15. Confirm (Import-Csv starters-valid.csv).Count + (Import-Csv starters-rejected.csv).Count equals the number of non-blank data rows in your source file. Write both numbers down.
16. Confirm starters-summary.csv has exactly one row per real department and that the counts sum to the valid row count.
17. Confirm the reconciliation export contains at least one <= row, one => row, and one == row, and that you can explain each in one sentence.
18. Rerun the whole script a second time with the same inputs and confirm every output file is identical — the job is repeatable.

### Reflect
19. In your notes, answer in one or two sentences each. Why did substituting 'Unknown' for a blank department make the report less trustworthy than rejecting the row? And why does a per-row try/catch produce a more useful outcome than one try/catch around the whole import?`,
              estimatedMinutes: 75,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Built a validating, normalising import that emits its own [PSCustomObject] shape",
                "Produced paired starters-valid.csv and starters-rejected.csv with a Reason on every rejected row",
                "Produced a Group-Object summary whose counts reconcile with the valid row count",
                "Used Compare-Object -IncludeEqual to reconcile starters against an existing-user list",
                "Break It / Fix It: reproduced and repaired the unhandled date cast, the missing Trim, and the silent 'Unknown' substitution",
                "Verify It: proved valid + rejected equals the source row count and that a rerun is byte-identical",
                "Reflect: explained why substituting data is worse than rejecting a row",
              ],
              relatedTopicIds: [
                "ps2-data-shaping-and-reporting",
                "ps2-error-handling-depth",
                "ps2-parameters-and-validation",
              ],
              order: 4,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
        },
        {
          id: "ps2-rest-apis",
          name: "REST APIs",
          objectives: ["PS2-M03-O4", "PS2-M03-O5", "PS2-M03-O6"],
          prerequisites: ["ps2-data-shaping-and-reporting"],
          lesson: {
            title: "Automation Beyond The Machine",
            content: `PowerShell I called one endpoint with Invoke-RestMethod and read the JSON that came back. That proves the idea and is not enough to ship anything. Real API automation deals with headers, authentication, more pages than you asked for, failures you have to survive, and limits you have to respect.

Start with the verbs. Invoke-RestMethod -Method Get asks a question and is safe to retry as often as you like. -Method Post -Body ($obj | ConvertTo-Json -Depth 5) -ContentType 'application/json' creates or triggers something, and retrying it may do the thing twice. Know which one you are sending before you put it in a loop. Note the -Depth on ConvertTo-Json: the default of 2 silently truncates nested objects, which produces a request the API rejects for reasons that look nothing like truncation.

Headers carry who you are and what you want back. You pass them as a hash table: @{ Authorization = "Bearer $token"; Accept = 'application/json' }. Bearer tokens are the common pattern and they expire, which is why an API script that ran happily for three weeks can start returning 401 with no code change at all. Some APIs use an API key header instead, and some use basic authentication — in every case the credential comes from a prompt, a vault, or an environment variable, never from a literal in the file.

The first page is not the answer. Almost every API caps a response and tells you how to get the rest: a nextLink URL in the body, a cursor, a page number, or a Link header. The pattern is a while loop that follows the pointer until it is absent, collecting as you go. Cap the iterations, because a broken pointer that always returns itself will otherwise spin forever. The tell that you have missed pagination is a report that always contains exactly 100, 50, or 1000 rows — that is page one, and it is almost never a coincidence.

Status codes tell you whether retrying can possibly help, and this is the judgement that separates a robust script from a stubborn one. 401 means not authenticated; retrying the identical request fails identically, so you need a new token. 403 is permission or, on some services, throttling. 404 means it is not there and never will be by asking again. 429 means slow down, and usually carries a Retry-After header telling you how long. 5xx is their side and is the classic candidate for a backed-off retry. In PowerShell 7 you can get the response body of a failure with -SkipHttpErrorCheck or from $_.ErrorDetails.Message, which usually contains a far better explanation than the status line.

So retry with backoff, and only what is safe to retry. A loop that waits 2 seconds, then 4, then 8 handles a transient blip without becoming the outage. Retry GETs freely; think hard before retrying a POST, and prefer an idempotency key if the API offers one. Always cap the attempts — an uncapped retry loop is a denial-of-service attack you wrote against a service you depend on. And when you hit 429, the answer is a wait, a smaller page size, or fewer calls. It is never more parallelism.`,
            experience: PS2_REST_APIS_EXPERIENCE,
          },
          lightbulbMoment:
            "A report that always shows exactly 100 rows is not a coincidence — it is page one, and you never followed the pagination pointer.",
          keyFacts: [
            "GET is safe to retry; POST usually is not, so decide before you loop",
            "ConvertTo-Json defaults to -Depth 2 and silently truncates nested objects",
            "Follow the nextLink, cursor, or page pointer until it is absent — and cap the iterations",
            "401 needs a new token, 404 will never succeed by retrying, 429 means slow down, 5xx is worth a backoff",
            "$_.ErrorDetails.Message usually holds a better explanation than the status line",
          ],
          guidedExample: {
            title: "Page Through An API Safely",
            steps: [
              "Set $headers = @{ Accept = 'application/json' } and $url to the first endpoint.",
              "Initialise $all = [System.Collections.Generic.List[object]]::new() and $page = 0.",
              "In a while ($url -and $page -lt 50) loop, call Invoke-RestMethod -Uri $url -Headers $headers.",
              "Add the response's item array to $all, then set $url to the response's next pointer or $null.",
              "Wrap the call in try/catch; on 429, read Retry-After, wait, and retry that page without advancing.",
              "After the loop, report $all.Count and $page so the output states how much data it actually covers.",
            ],
          },
          commonMistakes: [
            "Reporting on page one because the pagination pointer was never followed",
            "Retrying a 401 or 404 unchanged, which cannot succeed",
            "Responding to 429 by adding parallelism or tightening the loop",
            "Leaving a retry loop uncapped, turning a transient failure into a self-inflicted outage",
            "Using ConvertTo-Json without -Depth and sending a truncated body",
          ],
          realWorldTraps: [
            "An inventory report has said 100 items for months because nobody questioned the round number",
            "A token hardcoded during testing is committed to the repository and stays valid",
            "A nightly job hammers a rate-limited API at 429 for an hour and gets the account throttled",
            "A POST retry after a timeout creates a duplicate record because the first attempt actually succeeded",
          ],
          realWorldScenario:
            "A device-inventory script pulls from a vendor API and has reported 100 devices since it was written. The fleet is 340. Following the response's nextLink in a capped while loop fixes the count, and adding a 429 handler with Retry-After stops the vendor from throttling the whole tenant during month-end reporting.",
          quiz: [
            {
              id: "ps2-rest-apis-q1",
              prompt:
                "Your API script returns exactly 100 records every run, and the source system shows 340. What is the most likely cause?",
              choices: [
                { id: "a", text: "The API is rate limiting you at 100 requests" },
                { id: "b", text: "Your token only has access to 100 records" },
                { id: "c", text: "You are reading page one and never following the pagination pointer" },
                { id: "d", text: "Invoke-RestMethod truncates arrays at 100 items" },
              ],
              correctChoiceId: "c",
              explanation:
                "A suspiciously round, constant count is the classic signature of unpaged results. Rate limiting produces 429s, scoped access rarely lands on a round number, and Invoke-RestMethod does not truncate arrays.",
              difficulty: "medium",
            },
            {
              id: "ps2-rest-apis-q2",
              prompt: "Which HTTP status is worth an automatic retry with backoff?",
              choices: [
                { id: "a", text: "401 Unauthorized" },
                { id: "b", text: "404 Not Found" },
                { id: "c", text: "503 Service Unavailable" },
                { id: "d", text: "400 Bad Request" },
              ],
              correctChoiceId: "c",
              explanation:
                "5xx indicates a server-side problem that may clear. 401 needs a new token, 404 means the resource is not there, and 400 means your request is malformed — retrying any of those unchanged repeats the same failure.",
              difficulty: "easy",
            },
            {
              id: "ps2-rest-apis-q3",
              prompt:
                "A network timeout occurs during a POST that creates a ticket. What is the safest next step?",
              choices: [
                { id: "a", text: "Retry the POST immediately" },
                { id: "b", text: "Retry the POST three times with backoff" },
                { id: "c", text: "GET to check whether the ticket already exists, then decide" },
                { id: "d", text: "Ignore it — timeouts mean the request never arrived" },
              ],
              correctChoiceId: "c",
              explanation:
                "A timeout tells you nothing about whether the server processed the request. Checking with a safe GET before retrying is how you avoid duplicates. Some APIs offer an idempotency key for exactly this case.",
              difficulty: "hard",
            },
            {
              id: "ps2-rest-apis-q4",
              prompt:
                "You receive HTTP 429 with a Retry-After header of 30. What should the script do?",
              choices: [
                { id: "a", text: "Wait 30 seconds, then retry the same page" },
                { id: "b", text: "Split the work across five parallel jobs to finish sooner" },
                { id: "c", text: "Retry immediately in a tight loop until it succeeds" },
                { id: "d", text: "Treat it as a fatal error and abandon the run" },
              ],
              correctChoiceId: "a",
              explanation:
                "429 with Retry-After is an explicit instruction. Parallelism and tight retries make throttling worse, and abandoning the run discards recoverable work.",
              difficulty: "medium",
            },
            {
              id: "ps2-rest-apis-q5",
              prompt:
                "A POST body built with $obj | ConvertTo-Json is rejected as malformed, but the object looks correct in the console. What should you check first?",
              choices: [
                { id: "a", text: "Whether -Depth was omitted, truncating nested properties" },
                { id: "b", text: "Whether the API requires XML" },
                { id: "c", text: "Whether $obj needs Sort-Object first" },
                { id: "d", text: "Whether -ContentType should be text/plain" },
              ],
              correctChoiceId: "a",
              explanation:
                "ConvertTo-Json defaults to a depth of 2 and silently replaces deeper structures with a type name string. The console display does not show that, which makes it a common and confusing failure.",
              difficulty: "hard",
            },
          ],
          questionBank: [
            {
              id: "ps2-rest-apis-b1",
              prompt: "Which parameter carries authentication and content-negotiation values?",
              choices: [
                { id: "a", text: "-Headers with a hash table" },
                { id: "b", text: "-Body with a hash table" },
                { id: "c", text: "-ContentType only" },
                { id: "d", text: "-Credential only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Headers hold Authorization, Accept, and API-key values. -Body is the payload and -ContentType describes the body's format.",
            },
            {
              id: "ps2-rest-apis-b2",
              prompt: "What does 'idempotent' mean for an API call?",
              choices: [
                { id: "a", text: "It returns the same data every time" },
                { id: "b", text: "Repeating it leaves the same result as doing it once" },
                { id: "c", text: "It requires authentication" },
                { id: "d", text: "It is rate limited" },
              ],
              correctChoiceId: "b",
              explanation:
                "Idempotence is about repeat-safety, not about identical responses. It is what makes a retry loop acceptable.",
            },
            {
              id: "ps2-rest-apis-b3",
              prompt: "Where does a failing request's detailed explanation usually live?",
              choices: [
                { id: "a", text: "$_.Exception.Message only" },
                { id: "b", text: "$_.ErrorDetails.Message, which holds the response body" },
                { id: "c", text: "$Error[0].CategoryInfo" },
                { id: "d", text: "The verbose stream" },
              ],
              correctChoiceId: "b",
              explanation:
                "The status line rarely says why. ErrorDetails.Message carries the API's own error body, which usually names the field or scope at fault.",
            },
            {
              id: "ps2-rest-apis-b4",
              prompt: "Why cap a retry loop?",
              choices: [
                { id: "a", text: "PowerShell limits loops to 1000 iterations" },
                { id: "b", text: "An uncapped retry against a struggling service becomes an attack you wrote" },
                { id: "c", text: "Retries consume disk space" },
                { id: "d", text: "Capping is only needed for POST" },
              ],
              correctChoiceId: "b",
              explanation:
                "Unbounded retries amplify an outage and can get your credentials throttled or blocked. Caps apply to every method.",
            },
            {
              id: "ps2-rest-apis-b5",
              prompt:
                "Which is the correct shape for following a nextLink-style pointer?",
              choices: [
                { id: "a", text: "A foreach over a fixed page count" },
                { id: "b", text: "A while loop that runs while the pointer is non-null, with an iteration cap" },
                { id: "c", text: "A do/until that stops when the response is empty" },
                { id: "d", text: "Recursion with no base case" },
              ],
              correctChoiceId: "b",
              explanation:
                "The pointer's absence is the stop condition, and the cap protects you from a pointer that never clears. A fixed page count guesses, and an empty-response check misses APIs that return a final empty page with a pointer.",
            },
            {
              id: "ps2-rest-apis-b6",
              prompt: "A token that worked yesterday now returns 401. What changed?",
              choices: [
                { id: "a", text: "The endpoint URL" },
                { id: "b", text: "The token expired or was revoked — you need a new one" },
                { id: "c", text: "The Accept header" },
                { id: "d", text: "The JSON depth" },
              ],
              correctChoiceId: "b",
              explanation:
                "Bearer tokens are short-lived by design. A script that assumes a token is permanent will fail on a schedule you did not choose.",
            },
            {
              id: "ps2-rest-apis-b7",
              prompt:
                "Which practice keeps an API credential out of your script file?",
              choices: [
                { id: "a", text: "Storing it in a variable at the top of the script" },
                { id: "b", text: "Base64-encoding it in the script" },
                { id: "c", text: "Reading it from an environment variable or a secret vault at runtime" },
                { id: "d", text: "Putting it in a comment" },
              ],
              correctChoiceId: "c",
              explanation:
                "Only runtime retrieval keeps the secret out of the file. A variable, base64, or a comment all put the credential in the source.",
            },
            {
              id: "ps2-rest-apis-b8",
              prompt:
                "Why is -Method Get preferred for the graded API work in this course?",
              choices: [
                { id: "a", text: "It is faster than POST" },
                { id: "b", text: "It is read-only, so practice cannot change a real system" },
                { id: "c", text: "POST is not supported by Invoke-RestMethod" },
                { id: "d", text: "GET does not need headers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Read-only practice is safe practice. POST is fully supported and is taught as a concept with a local dry-run rather than by writing to someone else's service.",
            },
          ],
          flashcards: [
            {
              id: "ps2-rest-apis-f1",
              front: "Report always shows exactly 100 rows — cause?",
              back: "Unfollowed pagination. You are reading page one",
            },
            {
              id: "ps2-rest-apis-f2",
              front: "401 vs 429?",
              back: "401 needs a new token; 429 needs you to wait, usually per Retry-After",
            },
            {
              id: "ps2-rest-apis-f3",
              front: "ConvertTo-Json default depth?",
              back: "2 — deeper structures are silently replaced, so pass -Depth for nested bodies",
            },
            {
              id: "ps2-rest-apis-f4",
              front: "Safe to retry?",
              back: "GET yes. POST only with an idempotency key or after a GET check",
            },
            {
              id: "ps2-rest-apis-f5",
              front: "Where is the real API error message?",
              back: "$_.ErrorDetails.Message — the response body, not the status line",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-project-api-automation",
              title: "Project — Paginated API Automation",
              type: "external-lab",
              instructions: `Goal: build an end-to-end API automation that pages correctly, survives failures, respects limits, and produces a report you could hand to a manager. The graded path uses a local paginated fixture so it runs with no internet access, no account, and no key. An optional live section follows.

### Try It — build the fixture
1. In Documents\\ps2-labs, create Build-ApiFixture.ps1 that writes three JSON files, page1.json, page2.json, and page3.json. Each file is an object with two properties: value, an array of 40 items shaped @{ id = <int>; name = "device-<int>"; type = 'Laptop' | 'Desktop' | 'Phone'; lastSeen = (Get-Date).AddDays(-<int>).ToString('o'); ownerDept = 'Sales' | 'IT' | 'Ops' }, and nextLink, which is the file path of the following page — with page3.json setting nextLink to $null.
2. Run it and confirm three files exist and that Get-Content page1.json -Raw | ConvertFrom-Json returns 40 items in .value and a non-null .nextLink.

### Try It — build the client
3. Write Get-DeviceInventory.ps1 with [CmdletBinding()] and parameters [string]$FirstPage = '.\\page1.json', [int]$MaxPages = 10, and [int]$MaxRetries = 3.
4. Write a helper function Invoke-FixtureRequest that takes a path and returns ConvertFrom-Json of its contents — this stands in for Invoke-RestMethod so the pagination and retry logic is identical to the live version.
5. Page with a while loop: while the pointer is non-null and the page counter is under $MaxPages, fetch, add .value items to a List, set the pointer to .nextLink, and increment the counter.
6. Normalise each item into [PSCustomObject] with Id, Name, Type, LastSeen cast to [datetime], DaysSinceSeen as a numeric calculated value, and Department.
7. Return the objects, and write Write-Verbose lines reporting the page count and running total.
8. Run .\\Get-DeviceInventory.ps1 -Verbose | Measure-Object and confirm Count is 120, not 40.

### Try It — report it
9. Export the full inventory to devices.csv with -NoTypeInformation.
10. Export a summary grouped by Type with Count and by Department with Count.
11. Export a stale-device report of everything with DaysSinceSeen greater than 30.

### Break It
12. Remove the pointer-following line so the loop runs once. Rerun and note that Count is 40 and nothing warns you that you are reporting a third of the fleet.
13. Restore paging, then set page3.json's nextLink back to '.\\page1.json' so the pointer cycles. Remove the -MaxPages cap and rerun. Stop it with Ctrl+C and note that an uncapped loop never terminates.
14. Restore the cap and the null pointer. Now add a deliberate transient failure: make Invoke-FixtureRequest throw on its second call the first two times it is asked, then succeed. Run without any retry handling and note the run dies mid-inventory with a partial result and no record of how far it got.

### Fix It
15. Restore the pointer-following loop and keep the $MaxPages cap, and add a Write-Warning when the cap is hit — a truncated result must announce itself.
16. Wrap each page fetch in a retry loop bounded by $MaxRetries with a growing wait of 2, 4, then 8 seconds, and a Write-Verbose line per attempt. Confirm the injected transient failure is now survived.
17. Add a catch that distinguishes retryable from non-retryable conditions. For the fixture, treat a missing file as non-retryable and throw with the path in the message; treat the injected transient error as retryable.

### Verify It
18. Run .\\Get-DeviceInventory.ps1 -Verbose and confirm the verbose output reports 3 pages and 120 items, and that the retry attempts appear and then succeed.
19. Run with -MaxPages 2 and confirm you get 80 items plus a warning that the result is truncated.
20. Run with -FirstPage '.\\nope.json' and confirm you get a thrown error naming the missing path, not an empty report.
21. Open devices.csv and confirm DaysSinceSeen sorts numerically, and that the Type and Department summaries sum to 120.

### Optional live path
22. If you want to exercise real HTTP, repeat steps 5 to 11 against a free public read-only API that paginates, using Invoke-RestMethod -Method Get with only an Accept header. Do not use an API that requires payment, and do not send POST requests to a service you do not own. Add a 429 branch that reads the Retry-After header and waits. This section is optional and is not required for completion.

### Reflect
23. In your notes, answer in one or two sentences each. What single symptom in step 12 would have told you the report was incomplete without checking the source system? And why is retrying a GET acceptable when retrying a POST after a timeout is not?`,
              estimatedMinutes: 90,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Generated a three-page local JSON fixture with a nextLink pointer",
                "Built a paginated client that follows the pointer and collects all 120 items",
                "Normalised API items into typed [PSCustomObject] rows with a numeric calculated property",
                "Added a bounded retry with growing backoff and per-attempt verbose narration",
                "Distinguished retryable from non-retryable failures and threw on the latter",
                "Break It / Fix It: reproduced and repaired unfollowed pagination, an uncapped pointer loop, and an unhandled transient failure",
                "Verify It: proved 120 items over 3 pages, a warning on truncation, and a thrown error on a missing source",
                "Reflect: named the symptom of unpaged data and explained GET vs POST retry safety",
              ],
              relatedTopicIds: [
                "ps2-rest-apis",
                "ps2-data-shaping-and-reporting",
                "ps2-error-handling-depth",
              ],
              order: 5,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "hard",
        },
        {
          id: "ps2-credentials-and-secrets",
          name: "Credentials & Secrets",
          objectives: ["PS2-M03-O7", "PS2-M03-O8", "PS2-M03-O9"],
          prerequisites: ["ps2-rest-apis"],
          lesson: {
            title: "Where Does The Secret Come From?",
            content: `Every script you write from here on needs an answer to one question: where does the credential come from, and who can read it? Getting that wrong once puts a working password into version control, a ticket, or a chat message, where it stays long after you have forgotten about it.

PSCredential is the shape everything agrees on. Get-Credential prompts and returns an object holding a username and a SecureString password, and almost every cmdlet with a -Credential parameter expects exactly that. Note what it is not: PSCredential says nothing about where the secret lived before the prompt. It is an interface, not a storage strategy.

SecureString is the piece people most often misunderstand. It keeps a password out of your console history and away from casual inspection while the process runs. On Windows, ConvertFrom-SecureString encrypts using DPAPI tied to your user account and machine, so an exported string only decrypts as you, on that box — which is genuinely useful for your own scheduled task and useless for sharing. On Linux and macOS there is no DPAPI, so the same export is obfuscation rather than encryption. Say the limitation out loud before you rely on it: SecureString protects the value in memory and, on Windows only, at rest for one user on one machine.

Choose storage by who runs the script and where. Interactive work should prompt — it is the safest option and costs one line. Your own scheduled task on your own machine can use the SecretManagement module with a SecretStore vault, or a DPAPI-protected file that only your account can read. Shared automation and anything cloud-hosted should use a platform identity — a managed identity or a vault the platform unlocks — so that no secret ever exists in your code or your files. Environment variables sit in the middle: better than a literal, readable by anything running as you, and easy to leak in a process dump or a CI log.

There is one rule with no exceptions: never hardcode. And be honest about what that means. $Password = 'Summer2026!' is a hardcoded password that has been moved up three lines. So is a plain-text config file beside the script, and so is a base64 string — base64 is encoding, not encryption, and decoding it is one command. The test is not where the literal sits; it is whether reading the file gives you the secret.

Least privilege limits the damage of the leak you have not noticed yet. A reporting script needs read scopes and never write. A service account that only inventories servers does not belong in Domain Admins. In the cloud this becomes concrete and checkable: Connect-MgGraph -Scopes 'User.Read.All' versus 'User.ReadWrite.All' is one word that decides whether a compromised report script can change every account in the tenant. Ask what the script must do, grant exactly that, and revisit when the script's job changes.

Finally, plan for rotation and revocation before you need them. A credential you cannot rotate without editing five scripts will not get rotated. Keep the secret in one place those scripts read from, and make sure someone other than you knows how to revoke it.`,
            experience: PS2_CREDENTIALS_AND_SECRETS_EXPERIENCE,
          },
          lightbulbMoment:
            "SecureString protects a value in memory and, on Windows only, at rest for one user on one machine — it is not portable encryption.",
          keyFacts: [
            "PSCredential is the interface every -Credential parameter expects, not a storage strategy",
            "ConvertFrom-SecureString uses DPAPI on Windows — same user, same machine only",
            "Base64 is encoding, not encryption; a config file beside the script is still plain text",
            "SecretManagement with SecretStore is the local vault answer; managed identity is the cloud answer",
            "Read scopes and least privilege limit the damage of a leak you have not detected yet",
          ],
          guidedExample: {
            title: "Take A Secret Out Of A Script",
            steps: [
              "Find the literal: $ApiKey = 'abcd1234' near the top of an inherited script.",
              "Replace it with a parameter: [Parameter(Mandatory)][string]$ApiKey — the caller now supplies it.",
              "For interactive use, prompt with Get-Credential and use the credential's password property.",
              "For your own scheduled run, install Microsoft.PowerShell.SecretManagement and SecretStore, then Set-Secret once.",
              "In the script, read it at runtime with Get-Secret -Name ApiKey -AsPlainText only at the point of use.",
              "Search the repository history for the old literal and get the key rotated — it is still compromised.",
            ],
          },
          commonMistakes: [
            "Assuming SecureString means the value is safely encrypted anywhere it is written",
            "Base64-encoding a secret and treating it as protected",
            "Storing credentials in a config file that sits beside the script in version control",
            "Requesting a ReadWrite scope for a script that only produces a report",
            "Deleting a leaked secret from the current file without rotating it, leaving it live in history",
          ],
          realWorldTraps: [
            "An exported SecureString file works for weeks then fails after a machine rebuild — DPAPI was machine-bound",
            "A service account is granted Domain Admin 'temporarily' to make one inventory script work",
            "An API key pasted into a ticket for troubleshooting is now readable by everyone with ticket access",
            "A CI log prints the environment and publishes the secret it was told to keep",
          ],
          realWorldScenario:
            "You inherit a reporting script with an API key in line 4 and a comment saying do not share this file. It has been on a shared drive for two years. You move the key into a SecretStore vault, change the script to read it at runtime, have the key rotated because the old one must be assumed compromised, and reduce the token's permissions from write to read. The report still works and the blast radius is now a read-only key you can revoke.",
          quiz: [
            {
              id: "ps2-credentials-and-secrets-q1",
              prompt:
                "A script exports a password with ConvertFrom-SecureString to cred.txt on a Windows server, and the scheduled task reads it back fine. A colleague copies the script and cred.txt to their laptop and it fails. Why?",
              choices: [
                { id: "a", text: "The file was corrupted by the copy" },
                { id: "b", text: "DPAPI encryption is tied to the original user and machine, so it cannot be decrypted elsewhere" },
                { id: "c", text: "SecureString files expire after 24 hours" },
                { id: "d", text: "ConvertTo-SecureString requires administrator rights" },
              ],
              correctChoiceId: "b",
              explanation:
                "Without an explicit key, ConvertFrom-SecureString protects the value with DPAPI for that user on that machine. The portability limit is the security feature — and the reason this is not a sharing mechanism.",
              difficulty: "medium",
            },
            {
              id: "ps2-credentials-and-secrets-q2",
              prompt:
                "Which of these is genuinely not a hardcoded secret?",
              choices: [
                { id: "a", text: "$Key = 'abc123' at the top of the script" },
                { id: "b", text: "$Key = 'YWJjMTIz' with a comment saying it is base64" },
                { id: "c", text: "$Key = Get-Secret -Name ApiKey -AsPlainText at the point of use" },
                { id: "d", text: "$Key = Get-Content .\\key.txt where key.txt sits beside the script" },
              ],
              correctChoiceId: "c",
              explanation:
                "Only runtime retrieval from a vault keeps the secret out of the files you distribute. Base64 is trivially decoded, and a plain-text file beside the script is the same exposure as the literal.",
              difficulty: "easy",
            },
            {
              id: "ps2-credentials-and-secrets-q3",
              prompt:
                "An automation runs inside Azure and needs to read resource data. Which credential strategy is strongest?",
              choices: [
                { id: "a", text: "A service principal secret stored in an environment variable" },
                { id: "b", text: "A managed identity, so no secret exists for you to store or rotate" },
                { id: "c", text: "A user account password in a DPAPI-protected file" },
                { id: "d", text: "A certificate emailed to the automation owner" },
              ],
              correctChoiceId: "b",
              explanation:
                "A managed identity has no credential you hold, so there is nothing to leak, store, or rotate. A service-principal secret is workable but is still a secret you own, and the other two are worse on every axis.",
              difficulty: "medium",
            },
            {
              id: "ps2-credentials-and-secrets-q4",
              prompt:
                "You discover a live API key in a script that has been committed to Git for a year. You delete the line and push. Is the problem solved?",
              choices: [
                { id: "a", text: "Yes — the current file no longer contains it" },
                { id: "b", text: "No — the key is still in history and must be treated as compromised and rotated" },
                { id: "c", text: "Yes, provided the repository is private" },
                { id: "d", text: "No, but only if the repository is public" },
              ],
              correctChoiceId: "b",
              explanation:
                "Anything committed must be assumed exposed regardless of repository visibility, because history, clones, forks, and backups persist. Rotation is the only real remediation.",
              difficulty: "easy",
            },
            {
              id: "ps2-credentials-and-secrets-q5",
              prompt:
                "A script only produces a user report. Which Graph connection reflects least privilege?",
              choices: [
                { id: "a", text: "Connect-MgGraph -Scopes 'User.ReadWrite.All','Directory.ReadWrite.All'" },
                { id: "b", text: "Connect-MgGraph -Scopes 'User.Read.All'" },
                { id: "c", text: "Connect-MgGraph with no scopes, so defaults apply" },
                { id: "d", text: "Connect-MgGraph -Scopes 'Directory.AccessAsUser.All'" },
              ],
              correctChoiceId: "b",
              explanation:
                "A report needs read access to users and nothing else. Requesting write scopes gives a compromised report script the ability to change every account, and broad delegated scopes are worse still.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-credentials-and-secrets-b1",
              prompt: "What does Get-Credential return?",
              choices: [
                { id: "a", text: "A plain-text password string" },
                { id: "b", text: "A PSCredential object holding a username and a SecureString password" },
                { id: "c", text: "A bearer token" },
                { id: "d", text: "A certificate thumbprint" },
              ],
              correctChoiceId: "b",
              explanation:
                "PSCredential is the standard object accepted by -Credential parameters across the ecosystem.",
            },
            {
              id: "ps2-credentials-and-secrets-b2",
              prompt: "On Linux, what does ConvertFrom-SecureString without a key produce?",
              choices: [
                { id: "a", text: "DPAPI-encrypted text, same as Windows" },
                { id: "b", text: "An error, because it is unsupported" },
                { id: "c", text: "Obfuscated text with no real encryption, because there is no DPAPI" },
                { id: "d", text: "A hashed value that cannot be reversed" },
              ],
              correctChoiceId: "c",
              explanation:
                "Without DPAPI the result is not meaningfully protected at rest. Assuming cross-platform parity here is a common and serious mistake.",
            },
            {
              id: "ps2-credentials-and-secrets-b3",
              prompt: "Which module pair provides a local encrypted vault for scripts?",
              choices: [
                { id: "a", text: "SecretManagement and SecretStore" },
                { id: "b", text: "PSReadLine and PSScriptAnalyzer" },
                { id: "c", text: "Az.KeyVault and Az.Accounts only" },
                { id: "d", text: "CredentialManager and DPAPI" },
              ],
              correctChoiceId: "a",
              explanation:
                "Microsoft.PowerShell.SecretManagement is the common interface and SecretStore is a local vault implementation behind it. Az.KeyVault is a cloud vault extension for the same interface.",
            },
            {
              id: "ps2-credentials-and-secrets-b4",
              prompt: "Why are environment variables only a partial answer?",
              choices: [
                { id: "a", text: "They cannot hold long strings" },
                { id: "b", text: "Anything running as that user can read them, and they leak easily into logs and dumps" },
                { id: "c", text: "PowerShell cannot read them" },
                { id: "d", text: "They are encrypted but only on Windows" },
              ],
              correctChoiceId: "b",
              explanation:
                "They are better than a literal and worse than a vault. The classic failure is a CI job printing the whole environment.",
            },
            {
              id: "ps2-credentials-and-secrets-b5",
              prompt: "What is the difference between a service principal and a managed identity?",
              choices: [
                { id: "a", text: "They are the same thing with different names" },
                { id: "b", text: "A managed identity is a service principal whose credential the platform holds and rotates" },
                { id: "c", text: "A service principal is only for humans" },
                { id: "d", text: "A managed identity cannot be assigned permissions" },
              ],
              correctChoiceId: "b",
              explanation:
                "Managed identities remove the secret you would otherwise store and rotate. They are available to the Azure resource they are attached to.",
            },
            {
              id: "ps2-credentials-and-secrets-b6",
              prompt:
                "Which practice most reduces the blast radius of an undetected credential leak?",
              choices: [
                { id: "a", text: "Rotating it every five years" },
                { id: "b", text: "Granting only the read scopes the script needs" },
                { id: "c", text: "Renaming the variable that holds it" },
                { id: "d", text: "Storing it in two places for redundancy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Least privilege bounds what a stolen credential can do. Rotation frequency matters too, but scope is what limits the damage while the leak is unknown.",
            },
            {
              id: "ps2-credentials-and-secrets-b7",
              prompt:
                "A credential is used by five scripts. What design makes rotation realistic?",
              choices: [
                { id: "a", text: "Each script keeps its own copy so they can be updated independently" },
                { id: "b", text: "All five read it at runtime from one vault entry" },
                { id: "c", text: "Store it in a shared spreadsheet the team can edit" },
                { id: "d", text: "Hardcode it and add a comment with the rotation date" },
              ],
              correctChoiceId: "b",
              explanation:
                "One source of truth means rotation is a single update. Five copies guarantee at least one gets missed, and a shared spreadsheet is a plain-text secret store.",
            },
            {
              id: "ps2-credentials-and-secrets-b8",
              prompt: "Which statement about PSCredential is accurate?",
              choices: [
                { id: "a", text: "It encrypts the password on disk automatically" },
                { id: "b", text: "It is an in-memory object; where the secret came from and where it is stored are separate decisions" },
                { id: "c", text: "It can only be created interactively" },
                { id: "d", text: "It expires with the session token" },
              ],
              correctChoiceId: "b",
              explanation:
                "PSCredential is the transport shape. It can be constructed programmatically from a vault secret, and it never persists anything by itself.",
            },
          ],
          flashcards: [
            {
              id: "ps2-credentials-and-secrets-f1",
              front: "What does SecureString actually protect?",
              back: "The value in memory, and on Windows only, at rest via DPAPI for one user on one machine",
            },
            {
              id: "ps2-credentials-and-secrets-f2",
              front: "Is base64 protection?",
              back: "No — it is encoding. Decoding is one command",
            },
            {
              id: "ps2-credentials-and-secrets-f3",
              front: "Local vault for scripts?",
              back: "SecretManagement + SecretStore; read with Get-Secret at the point of use",
            },
            {
              id: "ps2-credentials-and-secrets-f4",
              front: "Best cloud credential strategy?",
              back: "Managed identity — no secret for you to store, leak, or rotate",
            },
            {
              id: "ps2-credentials-and-secrets-f5",
              front: "Secret was committed to Git — what now?",
              back: "Rotate it. Deleting the line does not remove it from history, clones, or backups",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE, POWERSHELL_GALLERY_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-secrets-hygiene",
              title: "Take The Secret Out Of The Script",
              type: "external-lab",
              instructions: `Goal: prove you can remove a credential from source and understand exactly what each storage option does and does not protect. Every value in this lab is a fake string you invent — never use a real password, key, or token. Work in Documents\\ps2-labs.

### Try It
1. Create Bad-ApiReport.ps1 that begins with $ApiKey = 'FAKE-not-a-real-key-1234' and then simply writes Write-Output "Would call API with key length $($ApiKey.Length)". No network calls are needed anywhere in this lab.
2. Run it and note that the secret is visible to anyone who can read the file — including anyone who receives a copy for troubleshooting.
3. Convert the literal into a parameter: [Parameter(Mandatory)][string]$ApiKey, and call the script with a value passed on the command line. Then run Get-History and note that the value is now in your session history instead.
4. Change the script to accept [Parameter(Mandatory)][System.Security.SecureString]$ApiKey and run it with no argument so PowerShell prompts you. Confirm the typed value does not appear in Get-History.
5. Install the vault modules for your user only: Install-Module Microsoft.PowerShell.SecretManagement -Scope CurrentUser and Install-Module Microsoft.PowerShell.SecretStore -Scope CurrentUser.
6. Register the vault with Register-SecretVault -Name LocalStore -ModuleName Microsoft.PowerShell.SecretStore -DefaultVault, then store your fake value with Set-Secret -Name DemoApiKey.
7. Change the script to read the value at the point of use with Get-Secret -Name DemoApiKey, and confirm the source file now contains no secret at all.

### Break It
8. Create a fake "protected" version: $enc = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('FAKE-not-a-real-key-1234')) and put $enc in a script with a comment claiming it is encoded for safety. Then decode it in one line with [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($enc)) and read your own secret back.
9. Export a SecureString to disk: 'FAKE-value' | ConvertTo-SecureString -AsPlainText -Force | ConvertFrom-SecureString | Set-Content .\\cred.txt. Read it back successfully in the same session with Get-Content .\\cred.txt | ConvertTo-SecureString. Then write down what would happen if you copied cred.txt to a different machine or a different user account, and why.
10. Create config.json containing { "apiKey": "FAKE-not-a-real-key-1234" } beside the script, and note that this is exactly as exposed as step 1 — the secret simply moved file.

### Fix It
11. Delete cred.txt, config.json, and the base64 script. Keep only the vault-backed version.
12. Add a comment-based help .NOTES section to the surviving script stating where the secret comes from and which permission level it needs.
13. Write a one-paragraph classification in your notes ranking these five options from least to most protected for a scheduled task running as you on one Windows machine: literal in script, base64 in script, plain-text config file, DPAPI SecureString file, SecretStore vault. Justify the ordering.

### Verify It
14. Run Select-String -Path .\\*.ps1 -Pattern 'FAKE-not-a-real-key' and confirm there are zero matches in your surviving scripts.
15. Run the vault-backed script and confirm it still works with no secret in the file.
16. Run Get-SecretInfo and confirm DemoApiKey is listed in LocalStore with no value displayed.
17. Run Remove-Secret -Name DemoApiKey -Vault LocalStore and confirm the script now fails with a clear 'secret not found' error rather than silently continuing with an empty key.

### Reflect
18. In your notes, answer in one or two sentences each. Why is a DPAPI-protected SecureString file appropriate for your own scheduled task but useless for sharing with a colleague? And if a real API key had been in step 1 of this lab and the file had ever been on a shared drive, what is the only remediation that actually works?`,
              estimatedMinutes: 45,
              externalResourceId: "powershell-gallery",
              completionCriteria: [
                "Removed a hardcoded value from a script and replaced it with a runtime vault lookup",
                "Demonstrated that a command-line argument lands in session history and a SecureString prompt does not",
                "Registered a SecretStore vault and read the value with Get-Secret at the point of use",
                "Decoded a base64 'protected' secret to prove encoding is not encryption",
                "Explained the machine and user binding of a DPAPI-protected SecureString file",
                "Ranked five storage options from least to most protected with justification",
                "Verify It: Select-String finds no secret in the surviving scripts, and a removed secret produces a clear error",
                "Reflect: explained why DPAPI files cannot be shared and why a leaked key must be rotated",
              ],
              relatedTopicIds: ["ps2-credentials-and-secrets", "ps2-rest-apis"],
              order: 6,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "ps2-enterprise-windows",
      name: "Module 4 — Enterprise Windows Automation",
      topics: [
        {
          id: "ps2-modules-and-gallery",
          name: "Modules & the Gallery",
          objectives: ["PS2-M04-O1", "PS2-M04-O2", "PS2-M04-O3"],
          prerequisites: ["ps2-credentials-and-secrets"],
          lesson: {
            title: "From Script File To Installable Module",
            content: `Everything you have used in this course that was not built into Windows arrived as a module. Microsoft.Graph, Az, SecretManagement — each is a folder on PSModulePath with a manifest that declares what it exports. Learning to find, trust, install, and eventually publish a module is what lets your automation be distributed instead of emailed.

A module at its smallest is a .psm1 file containing your functions and a .psd1 manifest beside it. The manifest is a data file, not code: it names the version, the author, the minimum PowerShell version, and — critically — FunctionsToExport. Anything not listed there stays private, which is how you keep helper functions from becoming someone else's dependency. Get-Module -ListAvailable shows what is installed; Import-Module loads a specific one when auto-loading is not enough.

Find-Module searches the PowerShell Gallery without changing anything. Install-Module -Scope CurrentUser puts a package in your profile and needs no administrator rights. Get-Command -Module <name> then shows what you actually gained. Save-Module -Path .\\review downloads without loading, which is the habit that turns installation from blind trust into a deliberate decision.

The Gallery is a public repository, not a vetted app store. Anyone can publish. Before you install into an environment that matters, check the author against the vendor you expect, read the project URI, prefer packages with a real release history, and inspect the files you downloaded. Microsoft-published modules are signed; typo-squatted lookalikes are not. Treat every Install-Module as a trust decision first and a technical one second.

Import-Module is usually unnecessary because PowerShell auto-loads modules from PSModulePath the moment you call one of their commands. You need an explicit import when the module lives somewhere else, when you want a specific version with -RequiredVersion, or when you are developing and need -Force to reload your edits. Install-Module does not update in place — it installs another side-by-side version and the newest wins by default. Update-Module is the upgrade verb, and Uninstall-Module -RequiredVersion is how you clean up the pile.`,
            experience: PS2_MODULES_AND_GALLERY_EXPERIENCE,
          },
          lightbulbMoment:
            "Install-Module adds another version side by side — it does not replace the one you have. Get-InstalledModule -AllVersions shows the pile.",
          keyFacts: [
            "A module is a .psm1 plus a .psd1 manifest that declares FunctionsToExport",
            "Find-Module searches; Install-Module -Scope CurrentUser needs no admin rights",
            "Save-Module downloads without loading so you can read the code first",
            "The Gallery is public — verify the author before you install in a real environment",
            "Import-Module is for non-standard paths, pinned versions, or development reloads",
          ],
          guidedExample: {
            title: "Find, Review, And Install A Gallery Module",
            steps: [
              "Run Find-Module PSScriptAnalyzer | Select-Object Name, Version, Author — note the publisher.",
              "Run Save-Module PSScriptAnalyzer -Path .\\review -RequiredVersion (Find-Module PSScriptAnalyzer).Version.",
              "Open the saved .psm1 in a text editor and skim the first exported function.",
              "Run Install-Module PSScriptAnalyzer -Scope CurrentUser -Force.",
              "Run Get-Command -Module PSScriptAnalyzer and confirm Invoke-ScriptAnalyzer appears.",
              "Run Get-InstalledModule PSScriptAnalyzer -AllVersions and note how many versions are present.",
            ],
          },
          commonMistakes: [
            "Assuming Install-Module replaced the old version instead of adding another",
            "Installing a module without checking whether the author matches the vendor you expected",
            "Exporting every helper function instead of keeping internals private in the manifest",
            "Running Install-Module without -Scope CurrentUser and failing for lack of admin rights",
            "Skipping the manifest entirely and dot-sourcing a .psm1 from a random folder",
          ],
          realWorldTraps: [
            "A typo-squatted package name installs malware because nobody read the author field",
            "A script breaks after a teammate runs Update-Module because a new version changed behaviour",
            "A helper function you never meant to export becomes someone's undocumented dependency",
            "Install-Module succeeds but the script cannot find the module because it is not on PSModulePath",
          ],
          realWorldScenario:
            "Your team shares scripts that all begin with Install-Module SomeVendorTool. A new hire runs one and gets a package from a lookalike publisher. You standardise on Save-Module to a review folder, a signed-author check, and a private feed for internal modules. The same scripts now install from a path you control, and nobody has to trust a random Gallery name.",
          quiz: [
            {
              id: "ps2-modules-and-gallery-q1",
              prompt:
                "You run Install-Module MyTool three times as new versions appear on the Gallery. Get-Module MyTool shows 1.2.0. Get-InstalledModule MyTool -AllVersions shows 1.0.0, 1.1.0, and 1.2.0. What happened?",
              choices: [
                { id: "a", text: "Only the latest version is installed; the list is a display bug" },
                { id: "b", text: "Install-Module added each version side by side and the newest wins by default" },
                { id: "c", text: "Install-Module failed silently on the older versions" },
                { id: "d", text: "You must run Update-Module before older versions appear" },
              ],
              correctChoiceId: "b",
              explanation:
                "Install-Module does not remove prior versions. They accumulate side by side, and PowerShell loads the highest version unless you pin with -RequiredVersion. Update-Module is the explicit upgrade path.",
              difficulty: "medium",
            },
            {
              id: "ps2-modules-and-gallery-q2",
              prompt: "Which command lets you download a Gallery module without loading it into your session?",
              choices: [
                { id: "a", text: "Install-Module -WhatIf" },
                { id: "b", text: "Save-Module -Path .\\review" },
                { id: "c", text: "Import-Module -Force" },
                { id: "d", text: "Find-Module -Install" },
              ],
              correctChoiceId: "b",
              explanation:
                "Save-Module writes the files to a folder you choose without importing. Install-Module loads it, and Find-Module only searches.",
              difficulty: "easy",
            },
            {
              id: "ps2-modules-and-gallery-q3",
              prompt: "A function named Format-ReportHelper is used only inside your module. Where should it live?",
              choices: [
                { id: "a", text: "In FunctionsToExport so callers can use it" },
                { id: "b", text: "In the .psm1 but omitted from FunctionsToExport so it stays private" },
                { id: "c", text: "In a separate script callers dot-source" },
                { id: "d", text: "In the manifest Author field" },
              ],
              correctChoiceId: "b",
              explanation:
                "Only exported functions become public. Helpers stay in the .psm1 but off the export list, which keeps your surface area honest.",
              difficulty: "easy",
            },
            {
              id: "ps2-modules-and-gallery-q4",
              prompt: "Install-Module fails with an error about untrusted repository. What is the usual fix on a personal machine?",
              choices: [
                { id: "a", text: "Run as Administrator" },
                { id: "b", text: "Set PSGallery as a trusted repository with Install-Module's trust prompt, or use -Scope CurrentUser after trusting" },
                { id: "c", text: "Delete PSModulePath" },
                { id: "d", text: "Use Import-Module instead" },
              ],
              correctChoiceId: "b",
              explanation:
                "The Gallery requires an explicit trust decision once. -Scope CurrentUser avoids needing admin, but trust is still required.",
              difficulty: "medium",
            },
            {
              id: "ps2-modules-and-gallery-q5",
              prompt: "You are editing your module and changed a function, but your console still runs the old version. What reloads it?",
              choices: [
                { id: "a", text: "Close and reopen PowerShell only" },
                { id: "b", text: "Import-Module .\\MyModule.psd1 -Force" },
                { id: "c", text: "Find-Module -Refresh" },
                { id: "d", text: "Update-Module -Reload" },
              ],
              correctChoiceId: "b",
              explanation:
                "Development reloads need Import-Module -Force on the manifest. Auto-loading will not pick up edits to an already-imported module.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps2-modules-and-gallery-b1",
              prompt: "What file declares FunctionsToExport?",
              choices: [
                { id: "a", text: "The .psd1 manifest" },
                { id: "b", text: "The .ps1 script" },
                { id: "c", text: "profile.ps1" },
                { id: "d", text: "The Gallery web page" },
              ],
              correctChoiceId: "a",
              explanation: "The manifest is the contract about what the module exposes.",
            },
            {
              id: "ps2-modules-and-gallery-b2",
              prompt: "Install-Module -Scope CurrentUser installs to:",
              choices: [
                { id: "a", text: "A folder under your profile, without admin rights" },
                { id: "b", text: "C:\\Windows\\System32 only" },
                { id: "c", text: "The Gallery server" },
                { id: "d", text: "A temp folder deleted at reboot" },
              ],
              correctChoiceId: "a",
              explanation: "CurrentUser scope is the standard personal install path.",
            },
            {
              id: "ps2-modules-and-gallery-b3",
              prompt: "Find-Module vs Install-Module:",
              choices: [
                { id: "a", text: "Find searches; Install downloads and registers" },
                { id: "b", text: "They are identical" },
                { id: "c", text: "Find installs; Install searches" },
                { id: "d", text: "Find only works online" },
              ],
              correctChoiceId: "a",
              explanation: "Find-Module is read-only discovery.",
            },
            {
              id: "ps2-modules-and-gallery-b4",
              prompt: "Why check the Gallery author field?",
              choices: [
                { id: "a", text: "Anyone can publish — author verifies you got the real vendor" },
                { id: "b", text: "Author determines load order" },
                { id: "c", text: "Author encrypts the module" },
                { id: "d", text: "Author is optional decoration" },
              ],
              correctChoiceId: "a",
              explanation: "Typo-squatting is real. Author is your first trust signal.",
            },
            {
              id: "ps2-modules-and-gallery-b5",
              prompt: "Get-Command -Module MyTool shows:",
              choices: [
                { id: "a", text: "Commands exported by that loaded module" },
                { id: "b", text: "Every command on the system" },
                { id: "c", text: "Only aliases" },
                { id: "d", text: "Only errors" },
              ],
              correctChoiceId: "a",
              explanation: "This is how you verify what an install actually gave you.",
            },
            {
              id: "ps2-modules-and-gallery-b6",
              prompt: "Update-Module vs Install-Module:",
              choices: [
                { id: "a", text: "Update upgrades an installed module; Install adds a version" },
                { id: "b", text: "Update removes old versions automatically" },
                { id: "c", text: "Install is only for Microsoft modules" },
                { id: "d", text: "Update searches only" },
              ],
              correctChoiceId: "a",
              explanation: "Neither removes old versions unless you uninstall explicitly.",
            },
            {
              id: "ps2-modules-and-gallery-b7",
              prompt: "When is explicit Import-Module required?",
              choices: [
                { id: "a", text: "When the module is outside PSModulePath or you need -RequiredVersion" },
                { id: "b", text: "Before every cmdlet call" },
                { id: "c", text: "Only on Linux" },
                { id: "d", text: "Never — auto-load always works" },
              ],
              correctChoiceId: "a",
              explanation: "Auto-load covers standard paths; pinning and dev reloads need explicit import.",
            },
            {
              id: "ps2-modules-and-gallery-b8",
              prompt: "ModuleVersion in the manifest should:",
              choices: [
                { id: "a", text: "Increment when you change exported behaviour" },
                { id: "b", text: "Stay at 1.0 forever" },
                { id: "c", text: "Match the Gallery download count" },
                { id: "d", text: "Be random" },
              ],
              correctChoiceId: "a",
              explanation: "Version discipline lets callers pin and lets you communicate breaking changes.",
            },
          ],
          flashcards: [
            {
              id: "ps2-modules-and-gallery-f1",
              front: "Install-Module updates in place?",
              back: "No — it adds side by side; newest wins unless you pin",
            },
            {
              id: "ps2-modules-and-gallery-f2",
              front: "Review without loading?",
              back: "Save-Module -Path .\\review",
            },
            {
              id: "ps2-modules-and-gallery-f3",
              front: "Keep a helper private?",
              back: "Put it in the .psm1 but omit from FunctionsToExport",
            },
            {
              id: "ps2-modules-and-gallery-f4",
              front: "No-admin Gallery install?",
              back: "Install-Module -Scope CurrentUser",
            },
            {
              id: "ps2-modules-and-gallery-f5",
              front: "Reload dev edits?",
              back: "Import-Module .\\MyModule.psd1 -Force",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE, POWERSHELL_GALLERY_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-build-a-module",
              title: "Build A Reusable Module",
              type: "external-lab",
              instructions: `Goal: turn a working script into a small installable module with a manifest, a version, and a deliberate export list. Everything runs in Documents\\ps2-labs with no admin rights.

### Try It
1. Create Documents\\ps2-labs\\CorpTools folder.
2. Write CorpTools.psm1 containing two functions: Get-DiskSummary with [CmdletBinding()] that returns [PSCustomObject] rows for each volume with Drive, FreeGB, and UsedPercent, and Format-DiskSummary that accepts those objects and returns a string table — keep Format-DiskSummary as a private helper not meant for export.
3. Create CorpTools.psd1 with ModuleVersion 1.0.0, RootModule CorpTools.psm1, FunctionsToExport @('Get-DiskSummary'), and a short Description.
4. Run Import-Module .\\CorpTools.psd1 -Force and then Get-Command -Module CorpTools — confirm only Get-DiskSummary is exported.
5. Run Get-DiskSummary | Format-DiskSummary by calling the helper from inside Get-DiskSummary, or note that Format-DiskSummary is not visible to callers.
6. Add comment-based help to Get-DiskSummary and run Get-Help Get-DiskSummary -Examples.

### Break It
7. Add Format-DiskSummary to FunctionsToExport, reimport, and note that callers can now depend on an internal helper you may rename later.
8. Remove ModuleVersion from the manifest and try Import-Module — note the warning or failure about an invalid manifest.
9. Dot-source the .psm1 without the manifest from another folder and note that Get-Command -Module CorpTools shows nothing because it was never registered as a module.

### Fix It
10. Restore FunctionsToExport to only Get-DiskSummary.
11. Restore ModuleVersion 1.0.0 and a Description.
12. Import via the manifest path only: Import-Module .\\CorpTools.psd1 -Force.

### Verify It
13. Run Get-Command -Module CorpTools and confirm exactly one exported command.
14. Run Get-DiskSummary | Select-Object -First 1 | Get-Member and confirm object output, not strings.
15. Run Get-Help Get-DiskSummary and confirm .SYNOPSIS appears.
16. Bump ModuleVersion to 1.0.1 in the manifest, reimport with -Force, and run Get-Module CorpTools | Select-Object Version to confirm the new number.

### Reflect
17. In your notes, answer in one or two sentences each. Why is exporting only Get-DiskSummary safer than exporting every function in the file? And what breaks if teammates dot-source your .psm1 instead of importing the manifest?`,
              estimatedMinutes: 50,
              externalResourceId: "powershell-gallery",
              completionCriteria: [
                "Created a .psm1 with at least one advanced function returning objects",
                "Created a .psd1 manifest with ModuleVersion and FunctionsToExport",
                "Kept an internal helper off the export list",
                "Break It / Fix It: reproduced over-export, invalid manifest, and dot-source confusion",
                "Verify It: proved one exported command, object output, and help",
                "Reflect: explained export discipline and manifest import",
              ],
              relatedTopicIds: ["ps2-modules-and-gallery", "ps2-advanced-functions"],
              order: 7,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "medium",
        },
        {
          id: "ps2-windows-admin-at-scale",
          name: "Windows Admin at Scale",
          objectives: ["PS2-M04-O4", "PS2-M04-O5", "PS2-M04-O6"],
          prerequisites: ["ps2-modules-and-gallery"],
          lesson: {
            title: "Bulk Work Needs Bulk Safeguards",
            content: `On one machine, a wrong command costs you an afternoon. On two hundred, the same mistake happens two hundred times before you finish reading the first error. The cmdlets barely change when you go from a single host to a fleet — what changes is the blast radius, and that is why bulk administration is as much about discipline as it is about syntax.

Inventory is the read-only half you should master first. Get-ComputerInfo, Get-CimInstance Win32_LogicalDisk, Get-Service, Get-Process, Get-LocalUser, and Get-WinEvent answer almost every support question without changing a thing. The skill is shaping their output into one flat [PSCustomObject] per machine so the same report format works whether you ran locally or looped a list later.

Get-CimInstance replaced Get-WmiObject. CIM uses WinRM instead of DCOM, works with -CimSession for remote reuse, and is what you should write in new scripts. WMI cmdlets still appear in inherited scripts — recognise them, then port them.

Filter at the source, not in the pipeline. Get-WinEvent -FilterHashtable @{ LogName='System'; StartTime=(Get-Date).AddDays(-1); Level=2 } asks the log service for exactly what you want. Piping the whole log into Where-Object reads millions of records into your session first and is the classic reason an inventory script takes forty minutes. The same principle appears again in Graph (-Filter) and Azure (-ResourceGroupName): ask the source to narrow; never drag everything home.

Four safeguards belong before any bulk change. Report first so you know the true target list. Dry-run with -WhatIf and read the output. Pilot on one machine you can fix by hand. Then run the batch with logging and a stop condition, so a bad result halts the loop instead of completing it. A bulk script without a per-item try/catch and a result object will not tell you which of the two hundred failed — and at scale, that is the difference between a fixable afternoon and a week of tickets.`,
            experience: PS2_WINDOWS_ADMIN_AT_SCALE_EXPERIENCE,
          },
          lightbulbMoment:
            "Get-WinEvent with -FilterHashtable asks the log service for what you want. Piping the whole log into Where-Object drags millions of rows home first.",
          keyFacts: [
            "Inventory cmdlets are read-only — master them before any bulk change",
            "Get-CimInstance is the modern replacement for Get-WmiObject",
            "Filter at the source with -FilterHashtable, -Filter, or cmdlet parameters",
            "Bulk change needs report, -WhatIf, pilot, then batch with per-item results",
            "A loop without per-item try/catch cannot tell you which host failed",
          ],
          guidedExample: {
            title: "Build A Single-Machine Inventory Row",
            steps: [
              "Run Get-ComputerInfo | Select-Object WindowsProductName, OsHardwareAbstractionLayer, CsTotalPhysicalMemory.",
              "Run Get-CimInstance Win32_LogicalDisk -Filter \"DriveType=3\" | Select-Object DeviceID, FreeSpace, Size.",
              "Run Get-Service | Where-Object Status -eq 'Running' | Measure-Object and keep the count.",
              "Combine into one [PSCustomObject] with ComputerName, OS, TotalRAMGB, LowestFreeGB, RunningServiceCount.",
              "Export the object to a one-row CSV with Export-Csv -NoTypeInformation.",
              "Wrap the gather logic in a function Get-MachineInventoryRow with [CmdletBinding()].",
            ],
          },
          commonMistakes: [
            "Piping an entire event log through Where-Object instead of using -FilterHashtable",
            "Assuming success on your machine means the same command is safe on every host in the list",
            "Running a bulk change without a prior report that proves the target count",
            "Using Get-WmiObject in new scripts when Get-CimInstance is available",
            "Stopping the whole run on the first failure instead of recording per-item outcomes",
          ],
          realWorldTraps: [
            "An inventory script runs forty minutes because it imported every System log entry",
            "A service restart loop hits a host that is offline and aborts without reporting which ones succeeded",
            "A -WhatIf dry run shows 400 targets because the filter matched empty departments",
            "Disk space is reported in bytes and sorted wrong because nobody cast FreeSpace to a number",
          ],
          realWorldScenario:
            "A patch-status script runs against 180 servers and stops at server 12 with an access denied error. Nobody knows whether servers 1–11 actually patched. You rewrite it to emit a [PSCustomObject] per host with Status, ErrorMessage, and Timestamp, and to continue on failure. The next run produces a CSV that names the twelve failures and lets the team fix permissions without rerunning the whole fleet.",
          quiz: [
            {
              id: "ps2-windows-admin-at-scale-q1",
              prompt:
                "An event-log script uses Get-WinEvent -LogName System | Where-Object TimeCreated -gt (Get-Date).AddDays(-1) and takes forty minutes. What is the better approach?",
              choices: [
                { id: "a", text: "Add -Parallel to Where-Object" },
                { id: "b", text: "Use Get-WinEvent -FilterHashtable with LogName and StartTime so the service filters at the source" },
                { id: "c", text: "Export to CSV first, then filter" },
                { id: "d", text: "Use Format-Table before Where-Object" },
              ],
              correctChoiceId: "b",
              explanation:
                "FilterHashtable pushes the date filter to the log service. Piping the whole log home first is why the script is slow.",
              difficulty: "medium",
            },
            {
              id: "ps2-windows-admin-at-scale-q2",
              prompt: "Which cmdlet should you prefer for new WMI-style queries?",
              choices: [
                { id: "a", text: "Get-WmiObject" },
                { id: "b", text: "Get-CimInstance" },
                { id: "c", text: "Get-EventLog" },
                { id: "d", text: "Get-Item WMI:" },
              ],
              correctChoiceId: "b",
              explanation:
                "CIM is the modern implementation using WinRM. WMI cmdlets are legacy.",
              difficulty: "easy",
            },
            {
              id: "ps2-windows-admin-at-scale-q3",
              prompt: "Before restarting a service on 200 servers, what is the correct order?",
              choices: [
                { id: "a", text: "Loop immediately, then check logs if someone complains" },
                { id: "b", text: "Report targets, -WhatIf, pilot one host, then batch with per-item logging" },
                { id: "c", text: "Pilot one, then loop without -WhatIf" },
                { id: "d", text: "-WhatIf only — never run the real change" },
              ],
              correctChoiceId: "b",
              explanation:
                "Report proves scope, -WhatIf previews touch, pilot proves the command on a fixable host, then batch with records.",
              difficulty: "medium",
            },
            {
              id: "ps2-windows-admin-at-scale-q4",
              prompt: "A bulk script stops at the first error. What is missing?",
              choices: [
                { id: "a", text: "More parallelism" },
                { id: "b", text: "Per-item try/catch that records success and failure and continues" },
                { id: "c", text: "Write-Host instead of Write-Verbose" },
                { id: "d", text: "A larger timeout" },
              ],
              correctChoiceId: "b",
              explanation:
                "At scale you need a result object per item, not an all-or-nothing stop.",
              difficulty: "easy",
            },
            {
              id: "ps2-windows-admin-at-scale-q5",
              prompt: "Get-ComputerInfo is best classified as:",
              choices: [
                { id: "a", text: "Read-only inventory" },
                { id: "b", text: "Destructive change" },
                { id: "c", text: "Requires domain admin" },
                { id: "d", text: "Remote only" },
              ],
              correctChoiceId: "a",
              explanation:
                "It gathers system information without changing state — the safe starting point for fleet work.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-windows-admin-at-scale-b1",
              prompt: "Win32_LogicalDisk is queried with:",
              choices: [
                { id: "a", text: "Get-CimInstance" },
                { id: "b", text: "Get-Content" },
                { id: "c", text: "Get-History" },
                { id: "d", text: "Get-Alias" },
              ],
              correctChoiceId: "a",
              explanation: "CIM classes expose hardware and OS data.",
            },
            {
              id: "ps2-windows-admin-at-scale-b2",
              prompt: "Level=2 in a WinEvent filter means:",
              choices: [
                { id: "a", text: "Error events" },
                { id: "b", text: "Verbose only" },
                { id: "c", text: "Information" },
                { id: "d", text: "Audit success" },
              ],
              correctChoiceId: "a",
              explanation: "Level 2 is Error in the Windows event level scale.",
            },
            {
              id: "ps2-windows-admin-at-scale-b3",
              prompt: "Why report before bulk change?",
              choices: [
                { id: "a", text: "To prove the target count and scope before touching anything" },
                { id: "b", text: "Reports are optional decoration" },
                { id: "c", text: "To slow the script down" },
                { id: "d", text: "Because -WhatIf is unavailable" },
              ],
              correctChoiceId: "a",
              explanation: "If you do not know how many objects match, you cannot sanity-check -WhatIf output.",
            },
            {
              id: "ps2-windows-admin-at-scale-b4",
              prompt: "Per-item result object should include:",
              choices: [
                { id: "a", text: "Target name, status, and error message if any" },
                { id: "b", text: "Only Write-Host lines" },
                { id: "c", text: "The entire exception stack only" },
                { id: "d", text: "Nothing — success is assumed" },
              ],
              correctChoiceId: "a",
              explanation: "Fleet work needs an auditable row per host.",
            },
            {
              id: "ps2-windows-admin-at-scale-b5",
              prompt: "Get-Service in an inventory script is:",
              choices: [
                { id: "a", text: "Read-only" },
                { id: "b", text: "Always destructive" },
                { id: "c", text: "Remote-only" },
                { id: "d", text: "Deprecated" },
              ],
              correctChoiceId: "a",
              explanation: "Get-Service reads state; Restart-Service changes it.",
            },
            {
              id: "ps2-windows-admin-at-scale-b6",
              prompt: "Pilot one machine means:",
              choices: [
                { id: "a", text: "Run the real change on one host you can fix manually" },
                { id: "b", text: "Skip -WhatIf" },
                { id: "c", text: "Use Format-Table" },
                { id: "d", text: "Run on production first" },
              ],
              correctChoiceId: "a",
              explanation: "Pilot proves the command on a recoverable target.",
            },
            {
              id: "ps2-windows-admin-at-scale-b7",
              prompt: "FreeSpace from CIM should be:",
              choices: [
                { id: "a", text: "Cast or calculated into GB for readable reports" },
                { id: "b", text: "Left as a string with commas" },
                { id: "c", text: "Discarded" },
                { id: "d", text: "Multiplied by zero" },
              ],
              correctChoiceId: "a",
              explanation: "Numeric types sort and aggregate correctly.",
            },
            {
              id: "ps2-windows-admin-at-scale-b8",
              prompt: "Inherited script uses Get-WmiObject. You should:",
              choices: [
                { id: "a", text: "Port to Get-CimInstance when you maintain it" },
                { id: "b", text: "Never change working scripts" },
                { id: "c", text: "Delete all WMI" },
                { id: "d", text: "Add more WMI calls" },
              ],
              correctChoiceId: "a",
              explanation: "Recognise legacy, modernise on contact.",
            },
          ],
          flashcards: [
            {
              id: "ps2-windows-admin-at-scale-f1",
              front: "Slow event log query?",
              back: "You piped the whole log — use -FilterHashtable instead",
            },
            {
              id: "ps2-windows-admin-at-scale-f2",
              front: "WMI successor?",
              back: "Get-CimInstance",
            },
            {
              id: "ps2-windows-admin-at-scale-f3",
              front: "Bulk change order?",
              back: "Report, -WhatIf, pilot one, batch with per-item results",
            },
            {
              id: "ps2-windows-admin-at-scale-f4",
              front: "Fleet script stops at first error?",
              back: "Add per-item try/catch and a result object",
            },
            {
              id: "ps2-windows-admin-at-scale-f5",
              front: "Get-ComputerInfo tier?",
              back: "Read-only inventory",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-project-it-inventory",
              title: "Project — IT Inventory Reporter",
              type: "external-lab",
              instructions: `Goal: build a single-machine IT inventory reporter that gathers OS, disk, service, and event data into one object row and exports manager-ready CSV summaries. This is project family A — the same shape scales to remoting later. Work in Documents\\ps2-labs.

### Try It
1. Create Documents\\ps2-labs and write Get-ItInventory.ps1 with [CmdletBinding()] and an optional [string]$ComputerName = $env:COMPUTERNAME parameter.
2. Gather OS facts with Get-ComputerInfo: WindowsProductName, WindowsVersion, CsTotalPhysicalMemory.
3. Gather disk facts with Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3": for each volume compute FreeGB and UsedPercent as numbers.
4. Count running services with (Get-Service | Where-Object Status -eq 'Running' | Measure-Object).Count.
5. Query errors from the last 24 hours with Get-WinEvent -FilterHashtable @{ LogName='System'; StartTime=(Get-Date).AddDays(-1); Level=2 } and keep (Measure-Object).Count — if zero events, record 0, not blank.
6. Emit one [PSCustomObject] with ComputerName, OSName, OSVersion, TotalRAMGB, LowestFreeGB, LowestUsedPercent, RunningServiceCount, ErrorCount24h, and CollectedAt (Get-Date).
7. Export the row to inventory.csv and a disk detail file disks.csv with one row per volume.

### Break It
8. Replace the Get-WinEvent -FilterHashtable call with Get-WinEvent -LogName System | Where-Object TimeCreated -gt (Get-Date).AddDays(-1) and Level -eq 2 — run both and note the time difference on your machine.
9. Store FreeGB as a string with formatting like "12.3 GB" and try Sort-Object FreeGB — note incorrect order.
10. Remove the per-volume export and only keep summary — note you cannot answer which drive is lowest.

### Fix It
11. Restore -FilterHashtable for event collection.
12. Store FreeGB and UsedPercent as numeric types in the objects.
13. Restore disks.csv with DeviceID, FreeGB, UsedPercent per volume.

### Verify It
14. Run .\\Get-ItInventory.ps1 -Verbose and confirm inventory.csv has exactly one data row with non-blank ErrorCount24h.
15. Confirm disks.csv row count matches the number of fixed disks on your machine.
16. Confirm LowestFreeGB equals the minimum FreeGB from disks.csv.
17. Rerun and confirm CollectedAt updates while structure stays the same.

### Reflect
18. In your notes, answer in one or two sentences each. Why is server-side event filtering the same lesson as Graph -Filter? And why must ErrorCount24h be 0 rather than blank when there were no errors?`,
              estimatedMinutes: 75,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Built Get-ItInventory.ps1 with [CmdletBinding()] and typed output",
                "Used Get-CimInstance and Get-WinEvent -FilterHashtable",
                "Exported summary and detail CSV files",
                "Break It / Fix It: reproduced slow log query, string sorting, and missing detail",
                "Verify It: proved numeric fields reconcile across files",
                "Reflect: connected server-side filtering to cloud topics",
              ],
              relatedTopicIds: [
                "ps2-windows-admin-at-scale",
                "ps2-data-shaping-and-reporting",
                "ps2-modules-and-gallery",
              ],
              order: 8,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
        },
        {
          id: "ps2-remoting",
          name: "PowerShell Remoting",
          objectives: ["PS2-M04-O7", "PS2-M04-O8", "PS2-M04-O9"],
          prerequisites: ["ps2-windows-admin-at-scale"],
          lesson: {
            title: "Send The Command, Not The Data",
            content: `Remoting moves the command to the machine where the data lives and returns objects to you. Instead of an RDP session per host, you send a scriptblock, it runs in a remote session, and results cross the wire back. The model is essential for fleet work — and ReLearn cannot hand you a fleet, so this topic teaches the concepts honestly and grades you on predicting behaviour, not on faked success output.

WinRM is the transport; PowerShell Remoting Protocol is what runs on top. Windows Remote Management listens on TCP 5985 for HTTP and 5986 for HTTPS. Even on 5985, the payload is encrypted for authenticated domain sessions — but hardened environments require HTTPS listeners. Enable-PSRemoting configures the service, listener, and firewall rule; it is an administrative change, not a casual click.

Enter-PSSession is interactive diagnosis — your prompt lands on one remote host. Invoke-Command is automation — it sends a scriptblock to one or many hosts in parallel and returns objects tagged with PSComputerName. Scripts almost always want Invoke-Command.

What comes back is a deserialised copy, not a live object. Objects cross as XML and arrive as Deserialized.* types with properties intact but methods gone. So $svc = Invoke-Command { Get-Service BITS } then $svc.Stop() fails locally — the work must happen inside the scriptblock, and only data should return.

The remote scriptblock cannot see your local variables unless you pass them. Use $using:MyVar or -ArgumentList with a param block. New-PSSession creates reusable sessions; Remove-PSSession cleans up. The second-hop problem, TrustedHosts in workgroups, and the fact that every remoting endpoint is a full administrative door are the real security concerns — not the oversimplified claim that port 5985 means plaintext passwords.`,
            experience: PS2_REMOTING_EXPERIENCE,
          },
          lightbulbMoment:
            "Objects that cross remoting keep their properties but lose their methods — do the work remotely inside the scriptblock.",
          keyFacts: [
            "WinRM listens on 5985/5986; Enable-PSRemoting is an admin change",
            "Enter-PSSession is interactive; Invoke-Command is for automation",
            "Returned objects are Deserialized.* — methods do not survive",
            "Pass local values with $using:Var or -ArgumentList",
            "Every remoting endpoint is an administrative entry point — treat it as one",
          ],
          guidedExample: {
            title: "Read A Remote Property The Safe Way",
            steps: [
              "Imagine Invoke-Command -ComputerName SRV1 -ScriptBlock { Get-Service BITS } returns a service object.",
              "Note the TypeName includes Deserialized.System.ServiceController.",
              "Attempting .Stop() locally fails because the method is not present.",
              "Instead run Invoke-Command { (Get-Service BITS).Status } and return only the string Running or Stopped.",
              "Pass a service name with $using:Name inside the scriptblock.",
              "Tag results mentally with PSComputerName to know which host each row came from.",
            ],
          },
          commonMistakes: [
            "Calling .Stop() or .Start() on an object returned from Invoke-Command locally",
            "Using Enter-PSSession inside a scheduled automation script",
            "Assuming remote scriptblocks can read local variables without $using:",
            "Enabling remoting broadly without documenting who can connect",
            "Treating ReLearn lab output as proof of real remoting when the graded path is reasoning-only",
          ],
          realWorldTraps: [
            "A fan-out script returns 200 objects but nobody notices 15 hosts failed silently",
            "TrustedHosts = * in a workgroup script becomes the reason lateral movement succeeds",
            "A deserialized CIM instance looks fine in the console but cannot call any instance methods",
            "Credential delegation limits block access to a file share from inside a remote session",
          ],
          realWorldScenario:
            "A junior runs Invoke-Command against fifty servers to restart a service, piping to ForEach-Object { $_.Stop() } locally. Nothing restarts. You rewrite the script so Stop-Service runs inside the scriptblock, return only Status and PSComputerName, and log per-host errors. The next run produces a CSV that proves which hosts restarted and which need manual follow-up.",
          quiz: [
            {
              id: "ps2-remoting-q1",
              prompt:
                "$svc = Invoke-Command { Get-Service BITS }; $svc.Stop() fails locally with a method-not-found style error. Why?",
              choices: [
                { id: "a", text: "BITS cannot be stopped" },
                { id: "b", text: "The returned object is deserialized — methods do not cross remoting" },
                { id: "c", text: "Invoke-Command is read-only" },
                { id: "d", text: "You needed Enter-PSSession first" },
              ],
              correctChoiceId: "b",
              explanation:
                "Properties survive serialization; methods do not. Perform the action inside the scriptblock.",
              difficulty: "medium",
            },
            {
              id: "ps2-remoting-q2",
              prompt: "Which cmdlet is appropriate for fan-out automation against many hosts?",
              choices: [
                { id: "a", text: "Enter-PSSession" },
                { id: "b", text: "Invoke-Command" },
                { id: "c", text: "Start-Process" },
                { id: "d", text: "Get-History" },
              ],
              correctChoiceId: "b",
              explanation:
                "Invoke-Command runs scriptblocks on multiple targets and returns results.",
              difficulty: "easy",
            },
            {
              id: "ps2-remoting-q3",
              prompt: "A remote scriptblock needs the value of local $Path. How do you pass it?",
              choices: [
                { id: "a", text: "It can read $Path automatically" },
                { id: "b", text: "Use $using:Path inside the scriptblock or -ArgumentList" },
                { id: "c", text: "Set global variables only" },
                { id: "d", text: "Copy the file to every host first" },
              ],
              correctChoiceId: "b",
              explanation:
                "Remote sessions are isolated; $using: captures local values explicitly.",
              difficulty: "easy",
            },
            {
              id: "ps2-remoting-q4",
              prompt: "Enable-PSRemoting on a server should be treated as:",
              choices: [
                { id: "a", text: "A harmless default with no security impact" },
                { id: "b", text: "An administrative change that opens a remote management endpoint" },
                { id: "c", text: "Required for local scripts" },
                { id: "d", text: "The same as installing PowerShell 7" },
              ],
              correctChoiceId: "b",
              explanation:
                "Remoting is a management door — enable it deliberately and restrict who can use it.",
              difficulty: "medium",
            },
            {
              id: "ps2-remoting-q5",
              prompt: "Results from Invoke-Command include PSComputerName so that:",
              choices: [
                { id: "a", text: "You know which host produced each object in a fan-out" },
                { id: "b", text: "DNS is configured automatically" },
                { id: "c", text: "Methods are restored" },
                { id: "d", text: "Credentials are cached" },
              ],
              correctChoiceId: "a",
              explanation:
                "Fan-out without host tagging cannot produce per-server reports.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-remoting-b1",
              prompt: "Default WinRM HTTP port?",
              choices: [
                { id: "a", text: "5985" },
                { id: "b", text: "443" },
                { id: "c", text: "22" },
                { id: "d", text: "3389" },
              ],
              correctChoiceId: "a",
              explanation: "5986 is HTTPS.",
            },
            {
              id: "ps2-remoting-b2",
              prompt: "Enter-PSSession is for:",
              choices: [
                { id: "a", text: "Interactive diagnosis on one host" },
                { id: "b", text: "Scheduled fan-out" },
                { id: "c", text: "CSV export" },
                { id: "d", text: "Module publishing" },
              ],
              correctChoiceId: "a",
              explanation: "Automation uses Invoke-Command.",
            },
            {
              id: "ps2-remoting-b3",
              prompt: "Deserialized object means:",
              choices: [
                { id: "a", text: "Properties yes, methods no" },
                { id: "b", text: "Fully live remote object" },
                { id: "c", text: "Encrypted file" },
                { id: "d", text: "Error only" },
              ],
              correctChoiceId: "a",
              explanation: "This is the core remoting mental model.",
            },
            {
              id: "ps2-remoting-b4",
              prompt: "New-PSSession helps when:",
              choices: [
                { id: "a", text: "You call the same hosts repeatedly and want to reuse connections" },
                { id: "b", text: "You never remote" },
                { id: "c", text: "You need Format-Table" },
                { id: "d", text: "You uninstall modules" },
              ],
              correctChoiceId: "a",
              explanation: "Sessions amortize connection cost.",
            },
            {
              id: "ps2-remoting-b5",
              prompt: "Second-hop problem relates to:",
              choices: [
                { id: "a", text: "Credential delegation limits to a second resource" },
                { id: "b", text: "Typing speed" },
                { id: "c", text: "CSV headers" },
                { id: "d", text: "Gallery trust" },
              ],
              correctChoiceId: "a",
              explanation: "Remote session credentials do not automatically flow to file shares or other servers.",
            },
            {
              id: "ps2-remoting-b6",
              prompt: "Workgroup remoting often uses:",
              choices: [
                { id: "a", text: "TrustedHosts configuration — use carefully" },
                { id: "b", text: "No configuration ever" },
                { id: "c", text: "Only SSH" },
                { id: "d", text: "Only RDP" },
              ],
              correctChoiceId: "a",
              explanation: "TrustedHosts is a workgroup workaround with security tradeoffs.",
            },
            {
              id: "ps2-remoting-b7",
              prompt: "Inside Invoke-Command scriptblock, local $config is:",
              choices: [
                { id: "a", text: "Not visible unless passed with $using: or ArgumentList" },
                { id: "b", text: "Always visible" },
                { id: "c", text: "Stored in Git" },
                { id: "d", text: "A method" },
              ],
              correctChoiceId: "a",
              explanation: "Remote scope is fresh.",
            },
            {
              id: "ps2-remoting-b8",
              prompt: "ReLearn remoting lab graded path is:",
              choices: [
                { id: "a", text: "Static code-reasoning — predict behaviour from transcripts" },
                { id: "b", text: "Simulated fake success against a fleet" },
                { id: "c", text: "Azure only" },
                { id: "d", text: "Requires domain admin" },
              ],
              correctChoiceId: "a",
              explanation: "Honest environment limits — optional live loopback is labelled separately.",
            },
          ],
          flashcards: [
            {
              id: "ps2-remoting-f1",
              front: "Methods after Invoke-Command?",
              back: "Gone — work inside the scriptblock",
            },
            {
              id: "ps2-remoting-f2",
              front: "Fan-out automation?",
              back: "Invoke-Command, not Enter-PSSession",
            },
            {
              id: "ps2-remoting-f3",
              front: "Pass local $var?",
              back: "$using:var",
            },
            {
              id: "ps2-remoting-f4",
              front: "WinRM ports?",
              back: "5985 HTTP, 5986 HTTPS",
            },
            {
              id: "ps2-remoting-f5",
              front: "PSComputerName purpose?",
              back: "Tags which host returned each object",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-remoting-reasoning",
              title: "Remoting Reasoning Lab (Static)",
              type: "external-lab",
              instructions: `Goal: predict and explain remoting behaviour from provided scripts and transcripts. ReLearn cannot provide a real server fleet — this graded lab is static code-reasoning only. No step claims you successfully remoted to hidden hosts. An optional live loopback section at the end requires admin on your own machine and is clearly labelled optional.

Environment note: the transcripts below are teaching artefacts. Treat them like exam scenarios — your answers go in your notes.

### Try It
1. Read Script A: Invoke-Command -ComputerName PC1,PC2 -ScriptBlock { Get-Service Spooler } | ForEach-Object { $_.Stop() }. In your notes, predict whether any remote service stops and name the deserialization rule that explains your answer.
2. Read Script B: $name = 'BITS'; Invoke-Command -ComputerName PC1 -ScriptBlock { Get-Service $name }. Predict the error or behaviour — does the remote session see $name?
3. Read Script C: $name = 'BITS'; Invoke-Command -ComputerName PC1 -ScriptBlock { Get-Service $using:name }. Predict success and the status property returned.
4. Read Transcript D: output shows TypeNames containing Deserialized.System.ServiceController. Explain in one sentence what callers cannot do with that object locally.
5. Classify each script as interactive (Enter-PSSession) or automation (Invoke-Command) appropriate — rewrite Script A so Stop-Service runs inside the scriptblock and only Status and Name return.

### Break It
6. Script E uses Enter-PSSession inside a scheduled task action. Predict the outcome at 3 a.m. when nobody is at the console.
7. Script F sets $env:COMPUTERNAME inside a remote scriptblock expecting to change the remote identity. Predict what actually changes.
8. Script G runs Invoke-Command against fifty hosts but discards errors with -ErrorAction SilentlyContinue and never checks $? per host. Predict what the operator sees when five hosts are offline.

### Fix It
9. Rewrite Script A correctly: action inside scriptblock, return [PSCustomObject] with PSComputerName, Name, Status.
10. Fix Script B using $using:name.
11. Add per-host error capture to Script G: record ComputerName, Status Failed or Success, and ErrorMessage — continue on failure.

### Verify It
12. Exchange answers with your notes checklist: Script A fixed version must not call .Stop() outside the scriptblock.
13. Confirm your Script B vs C answers cite scope isolation explicitly.
14. Confirm your Script G design mentions PSComputerName on every returned row.
15. Optional live path only: on your own PC with admin, run Enable-PSRemoting once, then Enter-PSSession localhost and run hostname. This proves loopback only — not graded.

### Reflect
16. In your notes, answer in one or two sentences each. Why is faked remoting success output harmful in training? And why is Invoke-Command the right verb for the IT inventory project when you later fan out?`,
              estimatedMinutes: 40,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Predicted deserialization failure for local .Stop() on remote objects",
                "Explained scope isolation and the role of $using:",
                "Rewrote a fan-out script to perform work inside the scriptblock",
                "Designed per-host error capture for partial fan-out failure",
                "Verify It: checklist shows no local method calls on deserialized objects",
                "Reflect: explained honest environment limits and Invoke-Command for fan-out",
              ],
              relatedTopicIds: ["ps2-remoting", "ps2-windows-admin-at-scale"],
              order: 9,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "ps2-microsoft-cloud",
      name: "Module 5 — Microsoft Cloud Automation",
      topics: [
        {
          id: "ps2-microsoft-graph",
          name: "Microsoft Graph",
          objectives: ["PS2-M05-O1", "PS2-M05-O2", "PS2-M05-O3"],
          prerequisites: ["ps2-remoting"],
          lesson: {
            title: "One API For The Microsoft Cloud",
            content: `Microsoft Graph is one REST API in front of Entra ID, Microsoft 365, Teams, Intune, and more. Users, groups, licences, sign-ins, devices — one endpoint, one token model, one permission vocabulary. The Graph PowerShell SDK is a generated wrapper over that API, which means everything you learned about REST, JSON, paging, and least-privilege scopes still applies underneath.

Install-Module Microsoft.Graph gives you thousands of Get-Mg*, New-Mg*, and Update-Mg* commands named after Graph resources. Because they are generated, help is thin and output is deeply nested — Get-Member and Select-Object are not optional extras. Get-MgUser is /users. Older tutorials using Get-MsolUser or Get-AzureADUser point at retired modules; if you inherit them, the migration target is Microsoft.Graph.

Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All' requests exactly those permissions. Ask for User.ReadWrite.All when you only report and you hand a reporting script the power to change every account. Get-MgContext shows what you actually hold. Read scopes end in .Read.All; write scopes end in .ReadWrite.All — one word separates a safe script from an audit finding.

Query server-side, then page fully. Get-MgUser -Filter "accountEnabled eq false" -Property Id,DisplayName,UserPrincipalName -All lets Graph narrow results. Without -All you get one page — usually 100 users — and a script that quietly reports on a fraction of the tenant. Without -Property, requested fields may come back empty rather than erroring.

You can practise the entire pipeline without a tenant. A Graph response is JSON with a value array. Build that shape with ConvertTo-Json, read it with ConvertFrom-Json, and every downstream step — Get-Member, Where-Object, calculated properties, Group-Object, Export-Csv — is identical to the live path. The project in this module grades on fixture data; a developer tenant is optional.`,
            experience: PS2_MICROSOFT_GRAPH_EXPERIENCE,
          },
          lightbulbMoment:
            "Without -All on Get-MgUser you get page one — usually 100 users — and a report that has understated the tenant for months.",
          keyFacts: [
            "Graph is one REST API; the SDK cmdlets are generated wrappers",
            "AzureAD and MSOnline modules are retired — migrate to Microsoft.Graph",
            "Connect-MgGraph -Scopes requests permissions — use least privilege",
            "Use -Filter and -Property server-side, then -All to page completely",
            "Fixture JSON with a value array practises the same pipeline without a tenant",
          ],
          guidedExample: {
            title: "Shape A Fixture Like Graph Users",
            steps: [
              "Create five user objects with id, displayName, userPrincipalName, accountEnabled.",
              "Wrap them in @{ value = $users; '@odata.nextLink' = $null }.",
              "Pipe to ConvertTo-Json -Depth 5 and save as graph-users.json.",
              "Read back with Get-Content graph-users.json -Raw | ConvertFrom-Json.",
              "Expand .value and select DisplayName, UserPrincipalName, accountEnabled.",
              "Filter accountEnabled eq false and export to disabled-users.csv.",
            ],
          },
          commonMistakes: [
            "Following tutorials that use Get-MsolUser or Get-AzureADUser",
            "Requesting ReadWrite scopes for a read-only report",
            "Running Get-MgUser without -All and assuming the count is complete",
            "Omitting -Property and wondering why fields are empty",
            "Hardcoding a bearer token in the script instead of Connect-MgGraph",
          ],
          realWorldTraps: [
            "A licence report shows 100 users every month because nobody added -All",
            "A compromised report script had User.ReadWrite.All — an attacker changed every account",
            "Nested Graph objects display in the console but Export-Csv loses columns without Select-Object",
            "A filter typo matches zero users and management reads it as good news",
          ],
          realWorldScenario:
            "An offboarding report has listed exactly 100 disabled accounts since it was written. The tenant has 340. Adding -All and a Write-Verbose line reporting page count fixes the number, and changing scopes to User.Read.All means a stolen token can read but not rewrite identities.",
          quiz: [
            {
              id: "ps2-microsoft-graph-q1",
              prompt:
                "Get-MgUser returns 100 users every run, but the Entra portal shows 340. What is the most likely cause?",
              choices: [
                { id: "a", text: "The token is expired" },
                { id: "b", text: "You read page one and never used -All to follow paging" },
                { id: "c", text: "Graph limits all tenants to 100 users" },
                { id: "d", text: "Get-MgUser truncates at 100 by design in PowerShell" },
              ],
              correctChoiceId: "b",
              explanation:
                "A constant round number is the signature of unpaged Graph results. -All follows @odata.nextLink until done.",
              difficulty: "medium",
            },
            {
              id: "ps2-microsoft-graph-q2",
              prompt: "Which scope is appropriate for a user inventory report?",
              choices: [
                { id: "a", text: "User.ReadWrite.All" },
                { id: "b", text: "User.Read.All" },
                { id: "c", text: "Directory.ReadWrite.All" },
                { id: "d", text: "No scopes — defaults are always least privilege" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reports need read access only. ReadWrite scopes allow account changes.",
              difficulty: "easy",
            },
            {
              id: "ps2-microsoft-graph-q3",
              prompt: "Get-MgUser -Property Department returns empty Department on every user. Likely cause?",
              choices: [
                { id: "a", text: "Department is not populated in the tenant" },
                { id: "b", text: "You did not request the property — Graph returns only defaults unless asked" },
                { id: "c", text: "ConvertTo-Json broke it" },
                { id: "d", text: "You need admin rights locally" },
              ],
              correctChoiceId: "b",
              explanation:
                "-Property lists fields to retrieve. Missing properties come back empty, not as errors.",
              difficulty: "medium",
            },
            {
              id: "ps2-microsoft-graph-q4",
              prompt: "Inherited script uses Get-AzureADUser. You should:",
              choices: [
                { id: "a", text: "Plan migration to Get-MgUser in Microsoft.Graph" },
                { id: "b", text: "Install AzureAD module from Gallery" },
                { id: "c", text: "Ignore — it still works everywhere" },
                { id: "d", text: "Use Get-WmiObject instead" },
              ],
              correctChoiceId: "a",
              explanation:
                "AzureAD and MSOnline are retired. Graph is the supported path.",
              difficulty: "easy",
            },
            {
              id: "ps2-microsoft-graph-q5",
              prompt: "Fixture JSON for graded work should resemble:",
              choices: [
                { id: "a", text: "A value array plus optional @odata.nextLink, like a Graph page" },
                { id: "b", text: "A plain string" },
                { id: "c", text: "Registry hives" },
                { id: "d", text: "Binary XML only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Matching the API shape lets the same pipeline run against fixtures or live Graph.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-microsoft-graph-b1",
              prompt: "Get-MgContext shows:",
              choices: [
                { id: "a", text: "Current account and granted scopes" },
                { id: "b", text: "Local disk space" },
                { id: "c", text: "Windows services" },
                { id: "d", text: "Gallery modules only" },
              ],
              correctChoiceId: "a",
              explanation: "Verify what you actually connected with.",
            },
            {
              id: "ps2-microsoft-graph-b2",
              prompt: "Graph filter runs:",
              choices: [
                { id: "a", text: "Server-side when using -Filter" },
                { id: "b", text: "Only after Export-Csv" },
                { id: "c", text: "Only on Linux" },
                { id: "d", text: "Never — use Where-Object on all users client-side" },
              ],
              correctChoiceId: "a",
              explanation: "Same lesson as WinEvent FilterHashtable.",
            },
            {
              id: "ps2-microsoft-graph-b3",
              prompt: "Connect-MgGraph without scopes:",
              choices: [
                { id: "a", text: "May default to broader delegated permissions than you intend" },
                { id: "b", text: "Grants no permissions" },
                { id: "c", text: "Fails always" },
                { id: "d", text: "Is recommended for production" },
              ],
              correctChoiceId: "a",
              explanation: "Always pass explicit read scopes for reporting scripts.",
            },
            {
              id: "ps2-microsoft-graph-b4",
              prompt: "ConvertTo-Json -Depth matters because:",
              choices: [
                { id: "a", text: "Default depth truncates nested objects in fixtures too" },
                { id: "b", text: "Graph requires XML" },
                { id: "c", text: "Depth affects CPU only" },
                { id: "d", text: "It does not matter for JSON" },
              ],
              correctChoiceId: "a",
              explanation: "Nested user properties need sufficient -Depth.",
            },
            {
              id: "ps2-microsoft-graph-b5",
              prompt: "Get-Member on a Graph user object helps because:",
              choices: [
                { id: "a", text: "Generated output is nested — you must discover real property names" },
                { id: "b", text: "It deletes users" },
                { id: "c", text: "It replaces Connect-MgGraph" },
                { id: "d", text: "It pages automatically" },
              ],
              correctChoiceId: "a",
              explanation: "Inspect before you trust console formatting.",
            },
            {
              id: "ps2-microsoft-graph-b6",
              prompt: "Optional live path for this course requires:",
              choices: [
                { id: "a", text: "Developer tenant and read-only scopes — not required for grading" },
                { id: "b", text: "Production tenant admin" },
                { id: "c", text: "Azure subscription only" },
                { id: "d", text: "Second physical PC" },
              ],
              correctChoiceId: "a",
              explanation: "Fixtures grade the pipeline; live is extra.",
            },
            {
              id: "ps2-microsoft-graph-b7",
              prompt: "userPrincipalName in fixtures should be:",
              choices: [
                { id: "a", text: "Fake values you invent — never real colleagues" },
                { id: "b", text: "Copied from production CSV" },
                { id: "c", text: "Left blank always" },
                { id: "d", text: "A password" },
              ],
              correctChoiceId: "a",
              explanation: "Synthetic data keeps labs safe.",
            },
            {
              id: "ps2-microsoft-graph-b8",
              prompt: "@odata.nextLink in fixture means:",
              choices: [
                { id: "a", text: "Another page exists — follow it in live or multi-file fixtures" },
                { id: "b", text: "Error state" },
                { id: "c", text: "Token expired" },
                { id: "d", text: "User is admin" },
              ],
              correctChoiceId: "a",
              explanation: "Paging pointer matches real Graph responses.",
            },
          ],
          flashcards: [
            {
              id: "ps2-microsoft-graph-f1",
              front: "Always 100 users?",
              back: "Missing -All — you have page one only",
            },
            {
              id: "ps2-microsoft-graph-f2",
              front: "Report scope?",
              back: "User.Read.All — not ReadWrite",
            },
            {
              id: "ps2-microsoft-graph-f3",
              front: "Retired modules?",
              back: "AzureAD / MSOnline → Microsoft.Graph",
            },
            {
              id: "ps2-microsoft-graph-f4",
              front: "Empty property column?",
              back: "You did not pass -Property",
            },
            {
              id: "ps2-microsoft-graph-f5",
              front: "No tenant practice?",
              back: "Build value-array JSON fixtures locally",
            },
          ],
          externalResources: [GRAPH_POWERSHELL_RESOURCE, WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-project-graph-report",
              title: "Project — Microsoft Graph User Report",
              type: "external-lab",
              instructions: `Goal: build a Microsoft 365-style user report from fixture JSON you generate locally — same pipeline as live Graph, no tenant required. Optional live section at the end uses read-only scopes only.

### Try It
1. In Documents\\ps2-labs, create Build-GraphFixture.ps1 that writes graph-users.json: an object with value, an array of 25 fake users with id, displayName, userPrincipalName, accountEnabled, and department, and @odata.nextLink set to $null.
2. Run it and confirm (Get-Content graph-users.json -Raw | ConvertFrom-Json).value.Count is 25.
3. Write Get-GraphUserReport.ps1 with [CmdletBinding()], parameter [string]$FixturePath = '.\\graph-users.json', and helper Read-GraphPage that returns ConvertFrom-Json of the file.
4. Expand .value, select Id, DisplayName, UserPrincipalName, AccountEnabled, Department as typed fields.
5. Export all users to users-all.csv and disabled users to users-disabled.csv where accountEnabled is false.
6. Group-Object Department | Select-Object Name, Count | Export-Csv dept-summary.csv -NoTypeInformation.

### Break It
7. Remove department from half the fixture users without fixing the summary — note blank department becomes its own group.
8. Change accountEnabled to strings 'True'/'False' instead of booleans — note filter behaviour changes.
9. Export without Select-Object and open CSV — note nested objects become useless strings.

### Fix It
10. Normalize accountEnabled to [bool] when building output objects.
11. Add a calculated property EnabledText for reporting readability.
12. Trim department and substitute 'Unassigned' only in the display column, not silently in the source filter.

### Verify It
13. Confirm users-disabled.csv count matches (fixture | Where accountEnabled -eq $false).Count.
14. Confirm dept-summary counts sum to 25.
15. Run Get-Member on one output object and confirm property types.

### Optional live path
16. If you have a developer tenant: Connect-MgGraph -Scopes User.Read.All, run Get-MgUser -Property DisplayName,UserPrincipalName,AccountEnabled -All, export same CSVs. Read-only only. Not required for completion.

### Reflect
17. In your notes: why is fixture grading honest about environment limits? And what symptom would tell you live Graph paging is broken?`,
              estimatedMinutes: 75,
              externalResourceId: "microsoft-graph-powershell",
              completionCriteria: [
                "Generated Graph-shaped fixture JSON with a value array",
                "Built a report script that reads fixtures like live Graph pages",
                "Exported full, filtered, and grouped CSV reports",
                "Break It / Fix It: fixed boolean typing and property selection",
                "Verify It: counts reconcile to fixture size",
                "Reflect: explained fixture vs live paging symptoms",
              ],
              relatedTopicIds: [
                "ps2-microsoft-graph",
                "ps2-data-shaping-and-reporting",
                "ps2-rest-apis",
              ],
              order: 10,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
        },
        {
          id: "ps2-entra-and-m365",
          name: "Entra ID & M365 Reporting",
          objectives: ["PS2-M05-O4", "PS2-M05-O5", "PS2-M05-O6"],
          prerequisites: ["ps2-microsoft-graph"],
          lesson: {
            title: "Tenant Automation Is Change Management",
            content: `In a tenant, your script's blast radius is other people's accounts. Local automation that goes wrong costs you an afternoon; Entra automation that goes wrong locks colleagues out of email. This topic spends as much time on classification and change planning as on cmdlets — because the professional practice comes first.

Four object types carry most of the work. Users hold identity and account state. Groups hold membership, and membership often drives licensing and access. Licences explain cost and capability. Sign-in and audit data explain what actually happened. Almost every real request joins two of these.

Classify every command before you run it. Read-only: Get-MgUser, Get-MgGroupMember, Get-MgSubscribedSku. Administrative change: Update-MgUser, New-MgGroupMember, Set-MgUserLicense. High-risk: bulk Remove-MgUser, removing members from access-granting groups, disabling accounts in a loop. The verb tells you the tier, and the tier tells you what evidence you need first.

A change plan is five answers written before the run: what exactly changes, which objects are in scope proven by a report, how you undo it, how you verify success, and who approved it and when. A reviewer can sanity-check your automation from the plan without reading code.

Disabled, unlicensed, and deleted are three different states. accountEnabled = false blocks sign-in but keeps the object. Removing a licence strips service but keeps the account. Deleting moves the object to a recycle bin. Leaver processes need a specific order — reclaiming a licence before preserving a mailbox destroys data someone asked you to keep.

-WhatIf proves which objects would be touched, not that your filter was right. If your query matched every user with an empty department, -WhatIf will faithfully report 400 targets. Read the count and compare it to a number you expected before you proceed.`,
            experience: PS2_ENTRA_AND_M365_EXPERIENCE,
          },
          lightbulbMoment:
            "-WhatIf shows what your filter matched — it cannot tell you the filter was correct. Always compare the count to an expected number.",
          keyFacts: [
            "Classify commands: read-only, safe local, administrative, destructive",
            "A change plan documents scope, rollback, verification, and approval",
            "Disabled, unlicensed, and deleted are different states with different recovery",
            "Get-Mg* for reports; Set-Mg* and Remove-Mg* need planning and -WhatIf",
            "Empty department in a filter can match hundreds — count before you change",
          ],
          guidedExample: {
            title: "Classify And Plan A Leaver Script",
            steps: [
              "List proposed commands: Get-MgUser, Update-MgUser, Set-MgUserLicense, Remove-MgUser.",
              "Tag each as Read-only, Administrative, or Destructive per course vocabulary.",
              "Write a scope report query: disabled candidates with last sign-in older than 90 days.",
              "Record expected count from the report before any change command.",
              "Draft rollback: re-enable account and reassign licence from saved CSV.",
              "Add verification: rerun report and confirm count decreased by expected amount only.",
            ],
          },
          commonMistakes: [
            "Treating -WhatIf as proof the business logic is correct",
            "Removing licences before mailbox preservation is arranged",
            "Running Set-MgUserLicense in a loop without per-user error records",
            "Using ReadWrite scopes when the task is reporting only",
            "Skipping written approval for administrative-tier changes",
          ],
          realWorldTraps: [
            "A filter on empty department disables four hundred accounts at once",
            "A script removes a user from an access group that was also the licence group",
            "An offboarding run succeeds on 98 users and silently skips 2 — nobody checks",
            "A colleague runs your script against production with test parameters removed",
          ],
          realWorldScenario:
            "A manager asks you to disable stale guest accounts. You produce a CSV of 23 matches, attach it to a change ticket, run Update-MgUser with -WhatIf and confirm 23 lines, pilot on one test guest, then run the batch logging per-user outcomes. Security approves because you showed scope before touch — not because your code was clever.",
          quiz: [
            {
              id: "ps2-entra-and-m365-q1",
              prompt:
                "You run Update-MgUser -AccountEnabled:$false with -WhatIf and it lists 400 users. Your manager expected about 12. What should you do?",
              choices: [
                { id: "a", text: "Proceed — -WhatIf already validated the change" },
                { id: "b", text: "Stop and fix the filter — -WhatIf only shows what matched, not that matching was correct" },
                { id: "c", text: "Remove -WhatIf to save time" },
                { id: "d", text: "Run anyway on the first 12" },
              ],
              correctChoiceId: "b",
              explanation:
                "-WhatIf is faithful to your filter. A wrong filter produces a confidently wrong preview.",
              difficulty: "medium",
            },
            {
              id: "ps2-entra-and-m365-q2",
              prompt: "Get-MgSubscribedSku is classified as:",
              choices: [
                { id: "a", text: "Read-only" },
                { id: "b", text: "Destructive" },
                { id: "c", text: "Local change only" },
                { id: "d", text: "Requires reboot" },
              ],
              correctChoiceId: "a",
              explanation:
                "It reads licence SKU information without changing tenant state.",
              difficulty: "easy",
            },
            {
              id: "ps2-entra-and-m365-q3",
              prompt: "Correct high-level offboarding order when mailbox must be kept:",
              choices: [
                { id: "a", text: "Remove licence first, then disable sign-in" },
                { id: "b", text: "Disable sign-in, preserve or delegate mailbox data, then reclaim licence" },
                { id: "c", text: "Delete user immediately" },
                { id: "d", text: "Remove from all groups before any report" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reclaiming licence too early can destroy mailbox data you were told to keep.",
              difficulty: "hard",
            },
            {
              id: "ps2-entra-and-m365-q4",
              prompt: "A change plan should include:",
              choices: [
                { id: "a", text: "Scope report, rollback, verification, and approval" },
                { id: "b", text: "Only the script file path" },
                { id: "c", text: "Your password" },
                { id: "d", text: "Nothing — code is self-explanatory" },
              ],
              correctChoiceId: "a",
              explanation:
                "Reviewers approve plans, not just scripts.",
              difficulty: "easy",
            },
            {
              id: "ps2-entra-and-m365-q5",
              prompt: "This course performs destructive Entra commands by:",
              choices: [
                { id: "a", text: "Never — they are discussed and simulated with -WhatIf or local stand-ins only" },
                { id: "b", text: "Running them against production nightly" },
                { id: "c", text: "Using Remove-MgUser on real colleagues" },
                { id: "d", text: "Skipping classification" },
              ],
              correctChoiceId: "a",
              explanation:
                "Safety tier rules: destructive commands are not steps to run in graded work.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-entra-and-m365-b1",
              prompt: "New-MgGroupMember is:",
              choices: [
                { id: "a", text: "Administrative change" },
                { id: "b", text: "Read-only" },
                { id: "c", text: "Local only" },
                { id: "d", text: "Deprecated" },
              ],
              correctChoiceId: "a",
              explanation: "It changes group membership.",
            },
            {
              id: "ps2-entra-and-m365-b2",
              prompt: "accountEnabled false means:",
              choices: [
                { id: "a", text: "Sign-in blocked; object remains" },
                { id: "b", text: "User deleted immediately" },
                { id: "c", text: "Licence removed" },
                { id: "d", text: "Mailbox deleted" },
              ],
              correctChoiceId: "a",
              explanation: "Different from licence removal or deletion.",
            },
            {
              id: "ps2-entra-and-m365-b3",
              prompt: "Scope report purpose:",
              choices: [
                { id: "a", text: "Prove how many objects will be touched" },
                { id: "b", text: "Replace -WhatIf" },
                { id: "c", text: "Install modules" },
                { id: "d", text: "Encrypt secrets" },
              ],
              correctChoiceId: "a",
              explanation: "Expected count before change.",
            },
            {
              id: "ps2-entra-and-m365-b4",
              prompt: "Set-MgUserLicense tier:",
              choices: [
                { id: "a", text: "Administrative change" },
                { id: "b", text: "Read-only" },
                { id: "c", text: "Safe local" },
                { id: "d", text: "Not in Graph" },
              ],
              correctChoiceId: "a",
              explanation: "Licence changes affect service access.",
            },
            {
              id: "ps2-entra-and-m365-b5",
              prompt: "Bulk Remove-MgUser in this course:",
              choices: [
                { id: "a", text: "Discussed as high-risk, not executed as a lab step" },
                { id: "b", text: "Required homework" },
                { id: "c", text: "Read-only" },
                { id: "d", text: "Same as Get-MgUser" },
              ],
              correctChoiceId: "a",
              explanation: "Destructive tier is never a run step.",
            },
            {
              id: "ps2-entra-and-m365-b6",
              prompt: "Pilot one account means:",
              choices: [
                { id: "a", text: "Run the real administrative change on one test object first" },
                { id: "b", text: "Skip reporting" },
                { id: "c", text: "Use production first" },
                { id: "d", text: "Delete logs" },
              ],
              correctChoiceId: "a",
              explanation: "Prove the command on a recoverable target.",
            },
            {
              id: "ps2-entra-and-m365-b7",
              prompt: "Audit/sign-in data helps because:",
              choices: [
                { id: "a", text: "It shows what actually happened, not just intended state" },
                { id: "b", text: "It replaces backups" },
                { id: "c", text: "It installs patches" },
                { id: "d", text: "It is always read-write" },
              ],
              correctChoiceId: "a",
              explanation: "Reports often join identity with activity.",
            },
            {
              id: "ps2-entra-and-m365-b8",
              prompt: "Local WhatIf dry run in lab uses:",
              choices: [
                { id: "a", text: "SupportsShouldProcess against local files or objects — not tenant destruction" },
                { id: "b", text: "Remove-MgUser on all users" },
                { id: "c", text: "Format-Table only" },
                { id: "d", text: "RDP" },
              ],
              correctChoiceId: "a",
              explanation: "Practice the pattern safely on local stand-ins.",
            },
          ],
          flashcards: [
            {
              id: "ps2-entra-and-m365-f1",
              front: "-WhatIf proves filter right?",
              back: "No — only shows what matched. Compare count to expected",
            },
            {
              id: "ps2-entra-and-m365-f2",
              front: "Get-MgUser tier?",
              back: "Read-only",
            },
            {
              id: "ps2-entra-and-m365-f3",
              front: "Disabled vs licence removed?",
              back: "Different states — different recovery",
            },
            {
              id: "ps2-entra-and-m365-f4",
              front: "Change plan includes?",
              back: "Scope, rollback, verify, approval",
            },
            {
              id: "ps2-entra-and-m365-f5",
              front: "Offboarding with mailbox keep?",
              back: "Disable, preserve data, then reclaim licence",
            },
          ],
          externalResources: [GRAPH_POWERSHELL_RESOURCE, WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-entra-change-plan",
              title: "Entra Change Plan Lab",
              type: "external-lab",
              instructions: `Goal: classify a provided command list by safety tier, write a change plan for one administrative scenario, and practise SupportsShouldProcess with -WhatIf against local stand-in objects. No tenant changes are required for grading.

### Try It
1. Create Documents\\ps2-labs\\entra-commands.txt with one command per line: Get-MgUser, Get-MgGroupMember, Get-MgSubscribedSku, Update-MgUser, New-MgGroupMember, Set-MgUserLicense, Remove-MgUser.
2. In your notes, classify each line as Read-only, Administrative change, or Destructive/high-risk per course vocabulary.
3. Scenario: disable stale guest accounts over 90 days without sign-in. Write a one-page change plan with scope report description, expected count source, rollback steps, verification steps, and approval placeholder.
4. Create local stand-ins: guests.csv with 8 fake rows including UserPrincipalName, LastSignInDate, AccountEnabled.
5. Write Invoke-GuestDisablePlan.ps1 with [CmdletBinding(SupportsShouldProcess)] and function Disable-StaleGuest that accepts CSV rows, filters LastSignInDate older than 90 days, and wraps Set-Content to a log file inside if ($PSCmdlet.ShouldProcess($row.UserPrincipalName,'Disable')) { } — no Graph calls required.

### Break It
6. Change the filter to Department -eq '' and run with -WhatIf — note how many rows match compared to your expected 90-day stale count.
7. Remove SupportsShouldProcess and run — note you cannot preview touches.
8. Log only success with no per-row outcome — note you cannot audit partial failure.

### Fix It
9. Restore the 90-day date filter and document expected count in the change plan.
10. Restore SupportsShouldProcess and demonstrate -WhatIf listing only matching rows.
11. Emit [PSCustomObject] per row with UserPrincipalName, Action, Result.

### Verify It
12. Confirm classifications match course tier table for all seven commands.
13. Confirm change plan has all five required sections.
14. Run Disable-StaleGuest -WhatIf and confirm count matches your scope report expectation.
15. Run without -WhatIf against log file only and confirm log lines were written.

### Reflect
16. In your notes: why is classification a professional skill before scripting? And what would 400 -WhatIf lines tell you about an empty-department filter?`,
              estimatedMinutes: 50,
              externalResourceId: "microsoft-graph-powershell",
              completionCriteria: [
                "Classified seven Graph commands by safety tier",
                "Wrote a complete change plan for a guest-disable scenario",
                "Implemented SupportsShouldProcess with -WhatIf on local stand-ins",
                "Break It / Fix It: demonstrated wrong filter count and missing ShouldProcess",
                "Verify It: plan sections and -WhatIf count align",
                "Reflect: tied classification to blast radius",
              ],
              relatedTopicIds: [
                "ps2-entra-and-m365",
                "ps2-microsoft-graph",
                "ps2-credentials-and-secrets",
              ],
              order: 11,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "hard",
        },
        {
          id: "ps2-azure-powershell",
          name: "Azure PowerShell",
          objectives: ["PS2-M05-O7", "PS2-M05-O8", "PS2-M05-O9"],
          prerequisites: ["ps2-entra-and-m365"],
          lesson: {
            title: "Azure Through PowerShell Objects",
            content: `PowerShell, Azure CLI, and the portal all call the same Azure Resource Manager API. The portal is a website in front of it, az is a CLI in front of it, and the Az module is PowerShell cmdlets in front of it. Pick the one that fits the job — Az wins when the result needs to become objects you filter, group, and export.

Context is the variable that silently ruins scripts. Connect-AzAccount signs you in and selects a subscription — often not the one you meant. Every Get-Az* call runs against that context. Get-AzContext tells you where you are; Set-AzContext -Subscription moves you. A script that assumes the current context is a script that eventually reports on production while you were testing.

The hierarchy is tenant, subscription, resource group, resource. Subscriptions are billing and quota boundaries. Resource groups are lifecycle boundaries — things you create and delete together. Resources are VMs, storage accounts, and databases. Every Az cmdlet asks you to name a level.

Get-AzResource is the inventory workhorse. It returns Name, ResourceType, ResourceGroupName, Location, and Tags — enough to answer what you have, where, and who owns it. Group-Object ResourceType gives a service breakdown; filtering on a missing tag gives a compliance list your manager will read.

Get-Az* is read-only. New-, Set-, and Remove-Az* are not. Remove-AzResourceGroup deletes everything inside it and is never a step in this course. Change-tier cmdlets support -WhatIf, and resource locks plus RBAC exist because scripts make mistakes at machine speed. Report before you touch.

Azure operations are often asynchronous. New-AzVM returning does not mean the guest OS is ready. Real automation polls for the state it needs — the same verify discipline you built for local scripts, just slower.`,
            experience: PS2_AZURE_POWERSHELL_EXPERIENCE,
          },
          lightbulbMoment:
            "Get-AzContext before every run — the subscription you think you are in is not always the subscription your script is using.",
          keyFacts: [
            "Az cmdlets wrap the same ARM API as the portal and Azure CLI",
            "Get-AzContext / Set-AzContext control which subscription commands target",
            "Hierarchy: tenant → subscription → resource group → resource",
            "Get-AzResource is the read-only inventory workhorse",
            "Remove-AzResourceGroup is destructive — discuss only, never a lab step",
          ],
          guidedExample: {
            title: "Report From Get-AzResource-Shaped Fixtures",
            steps: [
              "Create ten fake resources with Name, ResourceType, ResourceGroupName, Location, Tags hashtable.",
              "Export as JSON array with ConvertTo-Json -Depth 5 to az-resources.json.",
              "Import with Get-Content az-resources.json -Raw | ConvertFrom-Json.",
              "Select Name, ResourceType, ResourceGroupName, Location, Owner from Tags.",
              "Group-Object ResourceType and export type-summary.csv.",
              "Filter where Tags.Owner is missing and export untagged.csv.",
            ],
          },
          commonMistakes: [
            "Running Get-AzResource without confirming subscription context",
            "Treating cmdlet return as proof the resource is fully provisioned",
            "Using Remove-AzResourceGroup in learning scripts",
            "Ignoring tags until a compliance audit asks for them",
            "Assuming Az and AzureAD modules are the same thing",
          ],
          realWorldTraps: [
            "A cost report runs against the wrong subscription for a quarter",
            "A script tags resources Owner=TeamA but filters on owner lowercase",
            "An automation creates duplicates because it never checked if the resource already existed",
            "A junior confuses Connect-AzAccount with Connect-MgGraph scopes",
          ],
          realWorldScenario:
            "Finance asks which resource groups lack an Owner tag. You generate fixture JSON shaped like Get-AzResource output, build the same pipeline you will use live, and prove the report finds six offenders. When you connect to a free subscription later, only Connect-AzAccount and context lines change — the report logic is identical.",
          quiz: [
            {
              id: "ps2-azure-powershell-q1",
              prompt:
                "Your script calls Get-AzResource but results show resources you do not recognise. First check?",
              choices: [
                { id: "a", text: "Reinstall the Az module" },
                { id: "b", text: "Get-AzContext — you may be in the wrong subscription" },
                { id: "c", text: "Restart the computer" },
                { id: "d", text: "Use Format-Table" },
              ],
              correctChoiceId: "b",
              explanation:
                "Context determines subscription scope. Wrong context is the common surprise.",
              difficulty: "medium",
            },
            {
              id: "ps2-azure-powershell-q2",
              prompt: "Get-AzResource is classified as:",
              choices: [
                { id: "a", text: "Read-only" },
                { id: "b", text: "Destructive" },
                { id: "c", text: "Local only" },
                { id: "d", text: "Deprecated" },
              ],
              correctChoiceId: "a",
              explanation:
                "Inventory cmdlets read ARM without changing resources.",
              difficulty: "easy",
            },
            {
              id: "ps2-azure-powershell-q3",
              prompt: "Remove-AzResourceGroup in this course:",
              choices: [
                { id: "a", text: "Is discussed as dangerous but never a step to run" },
                { id: "b", text: "Is the capstone lab" },
                { id: "c", text: "Is read-only" },
                { id: "d", text: "Replaces Get-AzResource" },
              ],
              correctChoiceId: "a",
              explanation:
                "Destructive tier commands are not presented as runnable steps.",
              difficulty: "easy",
            },
            {
              id: "ps2-azure-powershell-q4",
              prompt: "Resource groups primarily represent:",
              choices: [
                { id: "a", text: "A lifecycle boundary — resources managed together" },
                { id: "b", text: "A single VM only" },
                { id: "c", text: "DNS zones only" },
                { id: "d", text: "PowerShell modules" },
              ],
              correctChoiceId: "a",
              explanation:
                "RGs group resources deployed and deleted as a unit.",
              difficulty: "easy",
            },
            {
              id: "ps2-azure-powershell-q5",
              prompt: "Graded Azure labs use:",
              choices: [
                { id: "a", text: "Locally generated JSON shaped like Get-AzResource output" },
                { id: "b", text: "Mandatory production subscription" },
                { id: "c", text: "Remove-AzVM loops" },
                { id: "d", text: "Only the portal" },
              ],
              correctChoiceId: "a",
              explanation:
                "Fixtures let you practise inventory pipelines without a subscription.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-azure-powershell-b1",
              prompt: "Set-AzContext changes:",
              choices: [
                { id: "a", text: "Active subscription for subsequent Az calls" },
                { id: "b", text: "Local time zone only" },
                { id: "c", text: "Graph scopes" },
                { id: "d", text: "WinRM port" },
              ],
              correctChoiceId: "a",
              explanation: "Explicit context prevents wrong-subscription reports.",
            },
            {
              id: "ps2-azure-powershell-b2",
              prompt: "Tags on resources are used for:",
              choices: [
                { id: "a", text: "Ownership, cost allocation, compliance reporting" },
                { id: "b", text: "Encrypting disks automatically" },
                { id: "c", text: "Replacing RBAC" },
                { id: "d", text: "PowerShell version" },
              ],
              correctChoiceId: "a",
              explanation: "Missing Owner tag is a common compliance finding.",
            },
            {
              id: "ps2-azure-powershell-b3",
              prompt: "New-AzVM returning means:",
              choices: [
                { id: "a", text: "Deployment was accepted — not necessarily that the app inside is up" },
                { id: "b", text: "Guest OS is fully patched" },
                { id: "c", text: "Resource group was deleted" },
                { id: "d", text: "Subscription cancelled" },
              ],
              correctChoiceId: "a",
              explanation: "Asynchronous platform operations need verification polling.",
            },
            {
              id: "ps2-azure-powershell-b4",
              prompt: "Connect-AzAccount vs Connect-MgGraph:",
              choices: [
                { id: "a", text: "Az is ARM/Azure resources; Graph is Microsoft 365/Entra data" },
                { id: "b", text: "They are identical" },
                { id: "c", text: "Graph replaces Az" },
                { id: "d", text: "Az is only for Linux" },
              ],
              correctChoiceId: "a",
              explanation: "Different APIs and modules for different workloads.",
            },
            {
              id: "ps2-azure-powershell-b5",
              prompt: "Group-Object ResourceType helps:",
              choices: [
                { id: "a", text: "Summarize how many VMs, storage accounts, etc. exist" },
                { id: "b", text: "Delete resources" },
                { id: "c", text: "Install modules" },
                { id: "d", text: "Enable remoting" },
              ],
              correctChoiceId: "a",
              explanation: "Manager-friendly service breakdown.",
            },
            {
              id: "ps2-azure-powershell-b6",
              prompt: "Fixture JSON step 1 uses:",
              choices: [
                { id: "a", text: "ConvertTo-Json on fake resource objects" },
                { id: "b", text: "Remove-AzResourceGroup" },
                { id: "c", text: "RDP" },
                { id: "d", text: "Base64 secrets" },
              ],
              correctChoiceId: "a",
              explanation: "Same pattern as Graph fixtures.",
            },
            {
              id: "ps2-azure-powershell-b7",
              prompt: "-WhatIf on Set-Az* commands:",
              choices: [
                { id: "a", text: "Previews administrative changes" },
                { id: "b", text: "Is unsupported" },
                { id: "c", text: "Deletes resources" },
                { id: "d", text: "Only works on Get-*" },
              ],
              correctChoiceId: "a",
              explanation: "Preview before administrative tier changes.",
            },
            {
              id: "ps2-azure-powershell-b8",
              prompt: "Write-Verbose subscription name:",
              choices: [
                { id: "a", text: "Cheap insurance against wrong-context outages" },
                { id: "b", text: "Leaks secrets" },
                { id: "c", text: "Breaks Az module" },
                { id: "d", text: "Required by Microsoft" },
              ],
              correctChoiceId: "a",
              explanation: "Log context at run start.",
            },
          ],
          flashcards: [
            {
              id: "ps2-azure-powershell-f1",
              front: "Wrong resources in report?",
              back: "Check Get-AzContext subscription first",
            },
            {
              id: "ps2-azure-powershell-f2",
              front: "Inventory cmdlet?",
              back: "Get-AzResource — read-only",
            },
            {
              id: "ps2-azure-powershell-f3",
              front: "Never run in labs?",
              back: "Remove-AzResourceGroup",
            },
            {
              id: "ps2-azure-powershell-f4",
              front: "ARM hierarchy?",
              back: "Tenant → subscription → RG → resource",
            },
            {
              id: "ps2-azure-powershell-f5",
              front: "No subscription practice?",
              back: "Get-AzResource-shaped JSON fixtures",
            },
          ],
          externalResources: [AZURE_POWERSHELL_RESOURCE, WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-project-azure-inventory",
              title: "Project — Azure Resource Inventory",
              type: "external-lab",
              instructions: `Goal: build an Azure resource inventory and tag-compliance report from fixture JSON shaped like Get-AzResource output. No Azure subscription required for grading.

### Try It
1. Create Build-AzFixture.ps1 in Documents\\ps2-labs that writes az-resources.json: an array of 20 fake resources with Name, ResourceType, ResourceGroupName, Location, and Tags as a hashtable including Owner on only 14 of them.
2. Run it and confirm 20 objects import cleanly.
3. Write Get-AzInventoryReport.ps1 with [CmdletBinding()], parameter [string]$FixturePath = '.\\az-resources.json', and Write-Verbose line stating you are reporting from fixture data.
4. Import fixtures and select Name, ResourceType, ResourceGroupName, Location, Owner from Tags.
5. Export all-resources.csv, type-summary.csv via Group-Object ResourceType, and missing-owner.csv where Owner is null or empty.
6. Add a calculated property IsCompliant = [bool]($_.Owner) for each row.

### Break It
7. Store Tags as a string instead of expandable properties — note Owner column is wrong after import.
8. Filter Owner with case-sensitive comparison so Owner and owner split incorrectly.
9. Group before selecting columns and lose fields you needed in export.

### Fix It
10. Restore Tags structure in fixture as nested object properties after ConvertFrom-Json.
11. Use case-insensitive owner check or normalize casing in Select-Object.
12. Select properties before grouping for summary, or group with correct pipeline order.

### Verify It
13. Confirm all-resources.csv has 20 rows.
14. Confirm missing-owner.csv has 6 rows.
15. Confirm type-summary counts sum to 20.

### Optional live path
16. With a free Azure account: Connect-AzAccount, Get-AzContext, Get-AzResource | select same columns, compare shape to fixture pipeline. Read-only only.

### Reflect
17. In your notes: how is wrong subscription context similar to an empty-department Graph filter?`,
              estimatedMinutes: 75,
              externalResourceId: "azure-powershell-az",
              completionCriteria: [
                "Generated Get-AzResource-shaped fixture JSON",
                "Built inventory and tag-compliance CSV exports",
                "Used Group-Object for type summary",
                "Break It / Fix It: fixed Tags parsing and filter casing",
                "Verify It: row counts reconcile to 20",
                "Reflect: compared context mistakes to filter mistakes",
              ],
              relatedTopicIds: [
                "ps2-azure-powershell",
                "ps2-data-shaping-and-reporting",
                "ps2-microsoft-graph",
              ],
              order: 12,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
        },
      ],
    },
    {
      id: "ps2-production-capstone",
      name: "Module 6 — Production Automation & Capstone",
      topics: [
        {
          id: "ps2-unattended-automation",
          name: "Unattended Automation",
          objectives: ["PS2-M06-O1", "PS2-M06-O2", "PS2-M06-O3"],
          prerequisites: ["ps2-azure-powershell"],
          lesson: {
            title: "Nobody Is Watching At 3 A.M.",
            content: `A script you run by hand can afford to be chatty and a bit fragile — you are watching. The same script on a schedule has no console, no prompt, and no you. Everything it needs must be in the script, and everything it learns must go somewhere durable.

Any prompt is a hang, not an error. Get-Credential, Read-Host, a mandatory parameter you forgot to pass, or a -Confirm on a change cmdlet will sit there forever under a scheduler. Non-interactive scripts take every input as a parameter or from configuration, source secrets from a vault or a platform identity, and never assume a human is available.

Register-ScheduledTask is the local answer on Windows. New-ScheduledTaskAction runs powershell.exe with -NoProfile -NonInteractive -File; New-ScheduledTaskTrigger sets when; Register-ScheduledTask ties them together. -NoProfile matters: your profile does not load, so anything your script relied on from your console session will be missing. Test with the exact command line the task uses, not from your prompt.

Non-interactive cloud identity means a service principal or managed identity. A service principal is an application identity with a credential you store and rotate. A managed identity is one whose credential Azure holds — better when the workload runs in Azure because there is no secret for you to leak.

Idempotence and retries make reruns safe. Idempotent means running twice leaves the same result as once — check before you create, target by identity, and make already correct a success. Pair that with bounded retry and backoff for transient failures, and a non-zero exit code plus a log line for real failures.

Task Scheduler reports success when powershell.exe exits cleanly — even if your script caught an error and gave up. Unattended automation must set exit 1 on failure and write a log with timestamp, outcome, and counts. Otherwise a silently broken report looks identical to a working one for months.`,
            experience: PS2_UNATTENDED_AUTOMATION_EXPERIENCE,
          },
          lightbulbMoment:
            "Task Scheduler shows 0x0 when powershell.exe exits — not when your script succeeded. Set exit codes and write logs yourself.",
          keyFacts: [
            "Prompts hang scheduled tasks — pass parameters and read config instead",
            "Use powershell.exe -NoProfile -NonInteractive -File in scheduled actions",
            "Managed identity avoids secrets for Azure-hosted workloads",
            "Idempotent scripts are safe to rerun; cap retries with backoff",
            "exit 1 plus a timestamped log proves failure — exit 0 alone proves nothing",
          ],
          guidedExample: {
            title: "Register A Read-Only Scheduled Report",
            steps: [
              "Write Report.ps1 that accepts -OutputFolder and writes inventory.csv with no prompts.",
              "Add try/catch that logs errors to report.log and exits 1 on failure.",
              "Create $action = New-ScheduledTaskAction -Execute powershell.exe -Argument '-NoProfile -NonInteractive -File C:\\path\\Report.ps1 -OutputFolder C:\\reports'.",
              "Create $trigger = New-ScheduledTaskTrigger -Daily -At 6am.",
              "Register-ScheduledTask -TaskName NightlyReport -Action $action -Trigger $trigger -User $env:USERNAME.",
              "Run the task once from Task Scheduler and confirm log and CSV appear.",
            ],
          },
          commonMistakes: [
            "Using Get-Credential in a script that will be scheduled",
            "Relying on profile.ps1 settings that -NoProfile skips",
            "Using relative paths that break when the task's working directory differs",
            "Assuming exit code 0 means the report is correct",
            "Retrying forever on a permanent failure",
          ],
          realWorldTraps: [
            "A task runs weekly but the CSV has been empty since month one — nobody reads the log",
            "A script works interactively and fails scheduled because $env:TEMP paths differ",
            "A service principal secret expires and the task hangs waiting for a password",
            "Uncapped retry against a down API becomes an outage you caused",
          ],
          realWorldScenario:
            "A disk report task shows Last Run Result 0x0 but the share is empty. You open report.log and find silently caught errors. You add explicit exit 1, Write-Verbose to a file, and an email-on-failure hook. The next failure pages someone instead of hiding for another month.",
          quiz: [
            {
              id: "ps2-unattended-automation-q1",
              prompt:
                "A scheduled task runs a script that calls Get-Credential. Task Scheduler shows the task is still Running for hours. Cause?",
              choices: [
                { id: "a", text: "Get-Credential blocks waiting for interactive input that never arrives" },
                { id: "b", text: "PowerShell cannot run scheduled" },
                { id: "c", text: "WinRM is disabled" },
                { id: "d", text: "The CSV is too large" },
              ],
              correctChoiceId: "a",
              explanation:
                "Any prompt is a hang under unattended execution. Pass credentials via vault or managed identity.",
              difficulty: "medium",
            },
            {
              id: "ps2-unattended-automation-q2",
              prompt: "Why -NoProfile on the scheduled powershell.exe line?",
              choices: [
                { id: "a", text: "Profile modules and paths from your console are not loaded — match production reality" },
                { id: "b", text: "It disables try/catch" },
                { id: "c", text: "It is required for admin rights" },
                { id: "d", text: "It speeds up Format-Table" },
              ],
              correctChoiceId: "a",
              explanation:
                "Tasks do not load your interactive profile unless you force them to.",
              difficulty: "easy",
            },
            {
              id: "ps2-unattended-automation-q3",
              prompt: "Best credential approach for automation running in Azure?",
              choices: [
                { id: "a", text: "Managed identity" },
                { id: "b", text: "Password in the script" },
                { id: "c", text: "Get-Credential in the script" },
                { id: "d", text: "Base64 in a comment" },
              ],
              correctChoiceId: "a",
              explanation:
                "No secret to store, leak, or rotate.",
              difficulty: "easy",
            },
            {
              id: "ps2-unattended-automation-q4",
              prompt: "Idempotent means:",
              choices: [
                { id: "a", text: "Running twice leaves the same result as running once" },
                { id: "b", text: "Running twice always doubles output" },
                { id: "c", text: "The script never logs" },
                { id: "d", text: "Only GET requests allowed" },
              ],
              correctChoiceId: "a",
              explanation:
                "Reruns after partial failure should be safe.",
              difficulty: "easy",
            },
            {
              id: "ps2-unattended-automation-q5",
              prompt: "After a failed unattended run you should:",
              choices: [
                { id: "a", text: "exit 1 and write a log with timestamp and failure detail" },
                { id: "b", text: "exit 0 so the scheduler stays green" },
                { id: "c", text: "Delete the task" },
                { id: "d", text: "Use Write-Host only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Green scheduler status without evidence is how silent failures hide.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "ps2-unattended-automation-b1",
              prompt: "New-ScheduledTaskAction -Execute should be:",
              choices: [
                { id: "a", text: "powershell.exe with script path in -Argument" },
                { id: "b", text: "Notepad.exe" },
                { id: "c", text: "cmd /c del" },
                { id: "d", text: "Only pwsh on Linux" },
              ],
              correctChoiceId: "a",
              explanation: "Explicit executable and arguments.",
            },
            {
              id: "ps2-unattended-automation-b2",
              prompt: "Relative paths fail because:",
              choices: [
                { id: "a", text: "Task working directory may differ from your console" },
                { id: "b", text: "PowerShell forbids them" },
                { id: "c", text: "CSV cannot use paths" },
                { id: "d", text: "Graph requires absolute URLs only" },
              ],
              correctChoiceId: "a",
              explanation: "Use absolute paths or parameters.",
            },
            {
              id: "ps2-unattended-automation-b3",
              prompt: "Bounded retry means:",
              choices: [
                { id: "a", text: "Max attempts with growing wait — not infinite loop" },
                { id: "b", text: "Never retry" },
                { id: "c", text: "Retry POST forever" },
                { id: "d", text: "Ignore all errors" },
              ],
              correctChoiceId: "a",
              explanation: "Same lesson as REST module.",
            },
            {
              id: "ps2-unattended-automation-b4",
              prompt: "Service principal vs managed identity:",
              choices: [
                { id: "a", text: "Managed identity has no user-stored secret" },
                { id: "b", text: "They are unrelated" },
                { id: "c", text: "Service principal is only for humans" },
                { id: "d", text: "Managed identity cannot access Azure" },
              ],
              correctChoiceId: "a",
              explanation: "Prefer managed identity in Azure workloads.",
            },
            {
              id: "ps2-unattended-automation-b5",
              prompt: "Mandatory parameter without value in task:",
              choices: [
                { id: "a", text: "May hang or fail depending on configuration" },
                { id: "b", text: "Always works" },
                { id: "c", text: "Uses zero" },
                { id: "d", text: "Calls Graph" },
              ],
              correctChoiceId: "a",
              explanation: "Supply all parameters in the task argument list.",
            },
            {
              id: "ps2-unattended-automation-b6",
              prompt: "Log file should include:",
              choices: [
                { id: "a", text: "Timestamp, scope, counts, errors" },
                { id: "b", text: "Passwords" },
                { id: "c", text: "Only emoji" },
                { id: "d", text: "Nothing" },
              ],
              correctChoiceId: "a",
              explanation: "Auditable unattended evidence.",
            },
            {
              id: "ps2-unattended-automation-b7",
              prompt: "Read-only scheduled report in course:",
              choices: [
                { id: "a", text: "Safe tier — runs under your user context" },
                { id: "b", text: "Destructive" },
                { id: "c", text: "Forbidden" },
                { id: "d", text: "Requires domain admin" },
              ],
              correctChoiceId: "a",
              explanation: "Local read-only inventory to your folder.",
            },
            {
              id: "ps2-unattended-automation-b8",
              prompt: "Test scheduled script by:",
              choices: [
                { id: "a", text: "Running exact powershell.exe -NoProfile -NonInteractive -File command line" },
                { id: "b", text: "Only dot-sourcing in ISE" },
                { id: "c", text: "Only reading help" },
                { id: "d", text: "Skipping execution" },
              ],
              correctChoiceId: "a",
              explanation: "Match the task action string.",
            },
          ],
          flashcards: [
            {
              id: "ps2-unattended-automation-f1",
              front: "Task stuck Running?",
              back: "Probably waiting on a prompt — remove Get-Credential/Read-Host",
            },
            {
              id: "ps2-unattended-automation-f2",
              front: "Scheduler 0x0 means?",
              back: "powershell.exe exited — not that your script succeeded",
            },
            {
              id: "ps2-unattended-automation-f3",
              front: "Scheduled action flags?",
              back: "-NoProfile -NonInteractive -File",
            },
            {
              id: "ps2-unattended-automation-f4",
              front: "Azure unattended identity?",
              back: "Managed identity when possible",
            },
            {
              id: "ps2-unattended-automation-f5",
              front: "Safe rerun?",
              back: "Idempotent design plus capped retry",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-scheduled-automation",
              title: "Scheduled Read-Only Report",
              type: "external-lab",
              instructions: `Goal: take your IT inventory or Graph fixture report script and make it runnable unattended via Task Scheduler with logging, exit codes, and absolute paths. Read-only output only — no system changes.

### Try It
1. Copy Get-ItInventory.ps1 or Get-GraphUserReport.ps1 to Documents\\ps2-labs\\NightlyReport.ps1 and add mandatory [string]$OutputFolder parameter with absolute path default.
2. Ensure the script writes report.csv and report.log under $OutputFolder with timestamp and row count.
3. Add catch that writes error detail to report.log and exit 1 on terminating failure.
4. Build $action = New-ScheduledTaskAction -Execute powershell.exe -Argument '-NoProfile -NonInteractive -ExecutionPolicy Bypass -File \"C:\\full\\path\\NightlyReport.ps1\" -OutputFolder \"C:\\full\\path\\reports\"'.
5. Build $trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(2).
6. Register-ScheduledTask -TaskName Ps2NightlyReport -Action $action -Trigger $trigger -User $env:USERNAME -Description 'PS2 read-only report lab'.

### Break It
7. Remove -OutputFolder from the task argument and register — note hang or failure.
8. Use a relative -File path in the action — note file not found when task runs.
9. Catch all errors but always exit 0 — note scheduler shows success on failure.

### Fix It
10. Restore absolute paths in the task action for both script and output folder.
11. Pass -OutputFolder explicitly in -Argument.
12. Restore exit 1 on failure after logging.

### Verify It
13. Run the task manually from Task Scheduler once and confirm report.csv and report.log exist.
14. Confirm log contains timestamp and row count.
15. Introduce a bad path parameter, rerun, confirm non-zero last result and error in log.

### Reflect
16. In your notes: why test the exact powershell.exe command line instead of only running the script from your prompt?`,
              estimatedMinutes: 45,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Parameterized script with absolute paths and file logging",
                "Registered scheduled task with -NoProfile -NonInteractive",
                "Break It / Fix It: fixed missing parameter, relative path, and false success exit code",
                "Verify It: proved CSV, log, and failure exit behaviour",
                "Reflect: explained profile and working-directory differences",
              ],
              relatedTopicIds: [
                "ps2-unattended-automation",
                "ps2-windows-admin-at-scale",
                "ps2-debugging-and-logging",
              ],
              order: 13,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 40,
          difficulty: "medium",
        },
        {
          id: "ps2-professional-patterns",
          name: "Professional Patterns & Capstone",
          objectives: ["PS2-M06-O4", "PS2-M06-O5", "PS2-M06-O6"],
          prerequisites: ["ps2-unattended-automation"],
          lesson: {
            title: "Patterns You Should Not Add Later",
            content: `Validation, dry runs, logging, least privilege, retries, idempotence, configuration outside the code, documentation — none of these are advanced. What makes someone a professional is that they are present by default, not added after the incident.

SupportsShouldProcess gives your own tools -WhatIf and -Confirm. Declare [CmdletBinding(SupportsShouldProcess)] and wrap each state change in if ($PSCmdlet.ShouldProcess($target, 'Action')) { }. Colleagues can preview your tool the same way they preview a Microsoft cmdlet. Set $ConfirmImpact = 'High' when the operation deserves a prompt by default.

Separate configuration from code. Server names, thresholds, output paths, and recipient lists belong in a JSON or PSD1 file the script reads — not in literals you edit and re-test. The same script runs in test and production with a different config file.

Output is an interface; logging is a separate one. Return objects on the success stream so callers can pipe them. Send narration to Write-Verbose, problems to Write-Warning, failures to the error stream. Write-Host is for a human at a console and nothing else.

A log that answers who, what, when, and what happened turns the script ran into evidence you can hand to an auditor. Every run should leave a timestamp, the identity, the scope, per-item outcomes, and a summary count.

You will not add error handling and logging once it works — the version without them is the version that goes on a schedule. Design the result shape and failure path first; the happy path is the easy part. The capstone toolkit asks you to demonstrate these together: parameterized functions, fixture or API interaction, validation, error handling, logging, report generation, module organization, safe credential strategy, SupportsShouldProcess, and documentation — graded against fixtures.`,
            experience: PS2_PROFESSIONAL_PATTERNS_EXPERIENCE,
          },
          lightbulbMoment:
            "[CmdletBinding(SupportsShouldProcess)] plus ShouldProcess gates give your function -WhatIf and -Confirm for free.",
          keyFacts: [
            "SupportsShouldProcess wraps state changes so -WhatIf previews them",
            "Configuration belongs in JSON/PSD1 files, not script literals",
            "Return data on the success stream; log to verbose/warning/error streams",
            "Audit logs need timestamp, scope, per-item outcomes, and summary counts",
            "Design failure paths before the happy path — retrofitting is rare",
          ],
          guidedExample: {
            title: "Add -WhatIf To Your Own Cmdlet",
            steps: [
              "Start with function Set-ArchiveFlag that sets a property on file objects.",
              "Add [CmdletBinding(SupportsShouldProcess, ConfirmImpact='Medium')].",
              "Wrap Set-Content or Move-Item in if ($PSCmdlet.ShouldProcess($Path,'Archive')) { }.",
              "Run Set-ArchiveFlag -WhatIf and read the preview lines.",
              "Run with -Confirm and answer N to verify the gate works.",
              "Add comment-based help mentioning -WhatIf and -Confirm support.",
            ],
          },
          commonMistakes: [
            "Putting environment-specific paths as literals in the script body",
            "Using Write-Host for data the next script needs to consume",
            "Shipping a change function without SupportsShouldProcess",
            "Logging only on success and leaving failures invisible",
            "Promising to add tests and logging after go-live",
          ],
          realWorldTraps: [
            "A toolkit works in dev but points at production URLs because config was hardcoded",
            "A -WhatIf preview is never run because the function did not support it",
            "An auditor asks who ran a change and the log has no identity field",
            "A capstone module exports twelve functions with no manifest version discipline",
          ],
          realWorldScenario:
            "You deliver the Enterprise Automation Toolkit as a module. A reviewer runs Get-Help, executes with -WhatIf against fixture users, reads run.log, and changes config.json to point at a test folder without editing code. That review takes twenty minutes instead of a week of production incidents — which is the point of the capstone.",
          quiz: [
            {
              id: "ps2-professional-patterns-q1",
              prompt:
                "You want colleagues to preview your function's changes before running. What do you add?",
              choices: [
                { id: "a", text: "Write-Host 'Are you sure?'" },
                { id: "b", text: "[CmdletBinding(SupportsShouldProcess)] with ShouldProcess gates around state changes" },
                { id: "c", text: "Read-Host before every line" },
                { id: "d", text: "Remove -ErrorAction" },
              ],
              correctChoiceId: "b",
              explanation:
                "ShouldProcess integrates with -WhatIf and -Confirm like built-in cmdlets.",
              difficulty: "medium",
            },
            {
              id: "ps2-professional-patterns-q2",
              prompt: "Production server list should live in:",
              choices: [
                { id: "a", text: "config.json read at runtime" },
                { id: "b", text: "A literal at the top of every function" },
                { id: "c", text: "A comment" },
                { id: "d", text: "Write-Host output" },
              ],
              correctChoiceId: "a",
              explanation:
                "Configuration outside code enables environment switches without code edits.",
              difficulty: "easy",
            },
            {
              id: "ps2-professional-patterns-q3",
              prompt: "Which stream should reusable function results use?",
              choices: [
                { id: "a", text: "Success stream — return objects" },
                { id: "b", text: "Write-Host" },
                { id: "c", text: "Warning only" },
                { id: "d", text: "Clipboard" },
              ],
              correctChoiceId: "a",
              explanation:
                "Callers pipe success-stream objects; host output is not reusable.",
              difficulty: "easy",
            },
            {
              id: "ps2-professional-patterns-q4",
              prompt: "A professional audit log includes:",
              choices: [
                { id: "a", text: "Timestamp, identity, scope, per-item outcomes, summary" },
                { id: "b", text: "Only the word Done" },
                { id: "c", text: "Secrets in plain text" },
                { id: "d", text: "Random GUIDs only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Evidence answers who did what, when, and with what result.",
              difficulty: "easy",
            },
            {
              id: "ps2-professional-patterns-q5",
              prompt: "Capstone toolkit is graded against:",
              choices: [
                { id: "a", text: "Fixture data — demonstrating patterns without live tenant requirements" },
                { id: "b", text: "Deleting production resources" },
                { id: "c", text: "Memorizing every Az cmdlet" },
                { id: "d", text: "A multiple-choice exam only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Fixtures let reviewers check design without cloud dependencies.",
              difficulty: "easy",
            },
          ],
          questionBank: [
            {
              id: "ps2-professional-patterns-b1",
              prompt: "ShouldProcess wraps:",
              choices: [
                { id: "a", text: "State-changing operations only" },
                { id: "b", text: "Get-Help" },
                { id: "c", text: "Comment blocks" },
                { id: "d", text: "Imports only" },
              ],
              correctChoiceId: "a",
              explanation: "Reads do not need ShouldProcess gates.",
            },
            {
              id: "ps2-professional-patterns-b2",
              prompt: "ConfirmImpact High:",
              choices: [
                { id: "a", text: "Prompts by default on -Confirm for risky operations" },
                { id: "b", text: "Disables -WhatIf" },
                { id: "c", text: "Deletes logs" },
                { id: "d", text: "Is ignored" },
              ],
              correctChoiceId: "a",
              explanation: "Signals severity to the caller.",
            },
            {
              id: "ps2-professional-patterns-b3",
              prompt: "Write-Verbose is for:",
              choices: [
                { id: "a", text: "Optional narration when -Verbose is set" },
                { id: "b", text: "Return values" },
                { id: "c", text: "Secrets" },
                { id: "d", text: "Replacing Export-Csv" },
              ],
              correctChoiceId: "a",
              explanation: "Separate narration from data.",
            },
            {
              id: "ps2-professional-patterns-b4",
              prompt: "Module manifest version bump when:",
              choices: [
                { id: "a", text: "Exported behaviour changes" },
                { id: "b", text: "Never" },
                { id: "c", text: "Every hour" },
                { id: "d", text: "Randomly" },
              ],
              correctChoiceId: "a",
              explanation: "Version communicates change to consumers.",
            },
            {
              id: "ps2-professional-patterns-b5",
              prompt: "Secret in capstone should come from:",
              choices: [
                { id: "a", text: "Parameter, vault, or fixture token — never a literal" },
                { id: "b", text: "Line 1 of the script" },
                { id: "c", text: "Git history" },
                { id: "d", text: "Write-Host" },
              ],
              correctChoiceId: "a",
              explanation: "Credential hygiene from Module 3 applies here.",
            },
            {
              id: "ps2-professional-patterns-b6",
              prompt: "Idempotence in toolkit means:",
              choices: [
                { id: "a", text: "Second run does not duplicate work or corrupt state" },
                { id: "b", text: "Run once only ever" },
                { id: "c", text: "No logging" },
                { id: "d", text: "No parameters" },
              ],
              correctChoiceId: "a",
              explanation: "Schedulers rerun jobs.",
            },
            {
              id: "ps2-professional-patterns-b7",
              prompt: "Get-Help on toolkit functions requires:",
              choices: [
                { id: "a", text: "Comment-based help blocks" },
                { id: "b", text: "README only" },
                { id: "c", text: "Internet access" },
                { id: "d", text: "Admin rights" },
              ],
              correctChoiceId: "a",
              explanation: "Documentation is part of the capstone rubric.",
            },
            {
              id: "ps2-professional-patterns-b8",
              prompt: "Fixture Graph/API interaction in capstone:",
              choices: [
                { id: "a", text: "Same pipeline as live — proves design without tenant" },
                { id: "b", text: "Optional decoration" },
                { id: "c", text: "Forbidden" },
                { id: "d", text: "Replaces all functions" },
              ],
              correctChoiceId: "a",
              explanation: "Graded path uses local JSON.",
            },
          ],
          flashcards: [
            {
              id: "ps2-professional-patterns-f1",
              front: "Own function -WhatIf?",
              back: "SupportsShouldProcess + ShouldProcess gates",
            },
            {
              id: "ps2-professional-patterns-f2",
              front: "Server list belongs in?",
              back: "config.json — not the script",
            },
            {
              id: "ps2-professional-patterns-f3",
              front: "Data vs narration?",
              back: "Return objects; Write-Verbose for narration",
            },
            {
              id: "ps2-professional-patterns-f4",
              front: "Audit log fields?",
              back: "When, who, scope, per-item result, summary",
            },
            {
              id: "ps2-professional-patterns-f5",
              front: "Capstone proves?",
              back: "Patterns together — module, fixtures, safety, docs",
            },
          ],
          externalResources: [WINDOWS_POWERSHELL_RESOURCE, POWERSHELL_GALLERY_RESOURCE],
          assignments: [
            {
              id: "ps2-lab-whatif-safety",
              title: "WhatIf Safety Lab",
              type: "external-lab",
              instructions: `Goal: add SupportsShouldProcess to a state-changing function and prove -WhatIf and -Confirm behaviour against local stand-in files. No cloud or remoting required.

### Try It
1. In Documents\\ps2-labs create folder WhatIfLab with three empty files: report-a.txt, report-b.txt, report-c.txt.
2. Write Set-ArchiveTag.ps1 with function Set-ArchiveTag that accepts [string[]]$Path and [string]$Tag = 'Archived'.
3. Add [CmdletBinding(SupportsShouldProcess, ConfirmImpact='Medium')] and wrap Set-Content -Path (Join-Path dirname $_) -Value $Tag inside ShouldProcess for each file path — use a marker file archive.tag beside each target or append tag line to a log.csv.
4. Implement per-file [PSCustomObject] result with Path, Action, Result.
5. Run Set-ArchiveTag -Path .\\WhatIfLab\\report-a.txt -WhatIf and confirm preview mentions the path.
6. Run without -WhatIf on one file and confirm log or marker exists.

### Break It
7. Remove SupportsShouldProcess and run -WhatIf — note error or no preview.
8. Run against all three files with a typo path mixed in without -ErrorAction Stop — note partial success without clear per-file results.
9. Use Write-Host instead of returning result objects — note nothing to export.

### Fix It
10. Restore SupportsShouldProcess and ShouldProcess gates.
11. Add per-file try/catch recording Success or Failed with message.
12. Return result objects for the caller to export.

### Verify It
13. -WhatIf on all three paths shows three preview lines and changes no files.
14. Real run on two paths only updates two markers or log rows.
15. Export results to whatif-results.csv and confirm three rows with statuses.

### Reflect
16. In your notes: how is this the same safety model as Update-MgUser -WhatIf in the Entra lab?`,
              estimatedMinutes: 35,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Implemented SupportsShouldProcess with ShouldProcess gates",
                "Demonstrated -WhatIf preview without changes",
                "Per-file result objects with success and failure",
                "Break It / Fix It: restored WhatIf support and structured results",
                "Verify It: preview vs real run behaviour proved",
                "Reflect: connected to tenant change planning",
              ],
              relatedTopicIds: [
                "ps2-professional-patterns",
                "ps2-entra-and-m365",
                "ps2-parameters-and-validation",
              ],
              order: 14,
            },
            {
              id: "ps2-capstone-automation-toolkit",
              title: "Capstone — Enterprise Automation Toolkit",
              type: "external-lab",
              instructions: `Goal: build a small reusable module toolkit that demonstrates professional patterns end to end. Graded against fixture JSON you generate — no tenant or Azure subscription required. Optional live paths are not required for completion.

Required capabilities: parameterized advanced functions, structured input via config file, Graph or REST fixture interaction, validation, error handling, logging, report generation, module organization with manifest, safe credential strategy (parameter or fake fixture token — no literals), SupportsShouldProcess on change functions, and comment-based help.

### Try It
1. Create Documents\\ps2-labs\\EnterpriseToolkit module folder with EnterpriseToolkit.psm1 and EnterpriseToolkit.psd1 version 1.0.0.
2. Add config.json with OutputFolder, FixturePath, LogPath, and ReportTag keys using absolute paths under ps2-labs.
3. Step 1 fixture: write Build-ToolkitFixture.ps1 that emits toolkit-users.json — Graph-shaped value array of 15 fake users with id, displayName, userPrincipalName, accountEnabled, department.
4. Implement Get-ToolkitConfig that validates config keys exist and paths are absolute.
5. Implement Get-ToolkitUserData that reads fixture JSON and returns typed user objects with validation on required properties.
6. Implement Export-ToolkitReport that writes users-all.csv and users-by-department.csv with error handling and verbose logging to the configured log file.
7. Implement Set-ToolkitUserFlag with SupportsShouldProcess that would mark users inactive in a separate flags.csv — graded with -WhatIf against fixtures only; no Graph calls.
8. Export only public functions in the manifest; keep helpers private.
9. Add comment-based help on each exported function with examples.

### Break It
10. Remove try/catch around fixture import — note entire toolkit dies on one bad property.
11. Hardcode OutputFolder in the script — note changing config.json has no effect.
12. Put FAKE-token-123 in the script — note Select-String finds it.

### Fix It
13. Restore per-step try/catch with log lines and continued processing where safe.
14. Read all paths from config.json only.
15. Replace literal token with parameter or read from config as fake placeholder documented in help.

### Verify It
16. Import-Module .\\EnterpriseToolkit.psd1 -Force; run Export-ToolkitReport and confirm CSV row counts match fixture.
17. Run Set-ToolkitUserFlag -WhatIf and confirm flags.csv unchanged but verbose/log shows preview.
18. Run Select-String -Pattern FAKE-token across module files — zero matches in committed code paths.
19. Run Get-Help Export-ToolkitReport -Examples and confirm help renders.

### Reflect
20. In your notes: list the eight professional patterns your toolkit demonstrates and which file implements each.

Self-check rubric: reviewer can preview with -WhatIf, read help, follow the log, and change scope via config without editing code.`,
              estimatedMinutes: 120,
              externalResourceId: "powershell-gallery",
              completionCriteria: [
                "Shipped a versioned module with manifest and private helpers",
                "Config-driven paths and validated fixture import",
                "Export-ToolkitReport produces reconciled CSV reports from fixtures",
                "Set-ToolkitUserFlag uses SupportsShouldProcess with -WhatIf graded path",
                "Logging, error handling, and no hardcoded secrets",
                "Break It / Fix It: restored config-driven design and error isolation",
                "Verify It: counts, WhatIf, help, and secret scan pass",
                "Reflect: mapped patterns to implementation files",
              ],
              relatedTopicIds: [
                "ps2-professional-patterns",
                "ps2-microsoft-graph",
                "ps2-modules-and-gallery",
                "ps2-unattended-automation",
                "ps2-credentials-and-secrets",
              ],
              order: 15,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 50,
          difficulty: "hard",
        },
      ],
    },
  ],
};
