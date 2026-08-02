import type { Domain, ExternalResource } from "../../types";

/**
 * Computer Fundamentals — Module 7: Everyday Productivity (Pathway F, FContent-2).
 * Standalone literacy track — not exam prep. Chains from cf-escalate-and-communicate (Module 6).
 */
const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Avoid managed school/work accounts for account-creation or settings-change labs.",
};

export const cfProductivityDomain: Domain = {
  id: "cf-productivity",
  name: "Module 7 — Everyday Productivity",
  topics: [
    {
      id: "cf-email-and-attachments",
      name: "Email and Attachments Without the Anxiety",
      objectives: ["CF-M7-O1", "CF-M7-O2"],
      prerequisites: ["cf-escalate-and-communicate"],
      lesson: {
        title: "Email and Attachments Without the Anxiety",
        content: `Email has been around long enough that it feels like it should be simple, and yet the small decisions inside it — reply versus reply-all, what to attach, who to CC, whether a file is too big to send — trip up plenty of confident, capable adults. None of that is a sign you're behind. Email's interface has barely changed in decades while everything around it has, so the anxiety is about unfamiliarity with specific buttons, not about intelligence.

Start with the core distinction that causes the most accidental embarrassment: Reply sends your response only to the original sender. Reply All sends it to every single person who was on the original message, including people who may not need or want to see your response. Before clicking Reply All, ask yourself one question: does everyone on this thread actually need to see what I'm about to say? If the honest answer is no, use Reply instead. CC (carbon copy) adds someone who should see the conversation but isn't the primary recipient — useful for keeping a manager or teammate informed without putting the burden of responding on them. BCC (blind carbon copy) adds someone invisibly, so other recipients don't see they were included; this is mostly used for sending the same message to a large group without exposing everyone's email address to each other, not for secrecy in personal conversations.

Attachments are the second major anxiety point. To attach a file in most modern email clients (Outlook, Gmail, and similar), look for a paperclip icon near where you type your message, click it, and browse to the file's location — Documents and Downloads are the two most common places files end up on Windows 11. Most everyday attachments (a document, a spreadsheet, a photo) attach without issue. Very large files, especially videos or many photos at once, sometimes exceed an email provider's size limit; when that happens, the email client usually tells you directly, and the practical fix is to send fewer files at once or use a cloud-storage share link instead of an attachment, which is a topic covered lightly here and more deeply as your skills grow.

A specific, common real-world task worth practicing directly is attaching a screenshot — for example, sending someone a picture of an error message, a confirmation screen, or anything currently on your display. On Windows 11, press Windows key + Shift + S to open the snipping tool, drag to select the area of the screen you want, and the image copies automatically to your clipboard. From there, you can paste it directly into most email bodies with Ctrl+V, or save it as a file first (it typically lands in your Pictures > Screenshots folder, or you can choose Documents when saving manually) and then attach it like any other file.

The last piece of anxiety worth naming directly: sending an email you're unsure about is rarely as high-stakes as it feels in the moment. Most email mistakes — an accidental Reply All, a missing attachment, an awkward wording choice — are recoverable with a quick, calm follow-up message. The goal here isn't perfection on the first try; it's comfort with the mechanics, so the actual content of what you're saying gets your attention instead of the buttons.`,
      },
      lightbulbMoment:
        "Before hitting Reply All, ask 'does everyone on this thread actually need to see this?' — if not, Reply is the right button.",
      keyFacts: [
        "Reply goes only to the sender; Reply All goes to everyone on the thread",
        "CC keeps someone informed; BCC hides recipients from each other, usually for large group sends",
        "The paperclip icon attaches a file; Documents and Downloads are the most common file locations on Windows 11",
        "Windows key + Shift + S captures a screenshot you can paste (Ctrl+V) or save and attach",
        "Very large attachments may hit a size limit — send fewer files or use a cloud share link instead",
      ],
      guidedExample: {
        title: "Attaching a Screenshot to an Email",
        steps: [
          "Something on screen needs to be shared — an error message or confirmation page.",
          "Press Windows key + Shift + S to open the snipping tool.",
          "Drag to select the exact area of the screen you want to capture.",
          "Open your email draft and press Ctrl+V to paste the screenshot directly into the message.",
          "Alternative: save the screenshot as a file first (Pictures > Screenshots, or choose Documents), then use the paperclip icon to attach it like any other file.",
          "Review before sending: is this going to Reply or Reply All, and does everyone on the thread need to see it?",
        ],
      },
      commonMistakes: [
        "Clicking Reply All by reflex instead of checking whether everyone actually needs to see the response",
        "Confusing CC and BCC, exposing everyone's email address when BCC was the appropriate choice",
        "Trying to attach a very large file (many photos, a long video) without realizing it may exceed a size limit",
        "Assuming a screenshot has to be saved as a file first, when pasting directly with Ctrl+V is often faster",
      ],
      realWorldTraps: [
        "An accidental Reply All sends an internal comment to an entire company distribution list instead of one person",
        "A 'confidential' note gets CC'd instead of BCC'd, exposing it to everyone else in a large group send",
        "A file 'won't attach' and gets assumed broken, when the real issue is simply exceeding a size limit",
      ],
      realWorldScenario:
        "You need to report an error to a coworker. Instead of describing it in words, you press Windows key + Shift + S, capture the exact error dialog, paste it straight into your email with Ctrl+V, and hit Reply (not Reply All, since only that one coworker needs it) — a clear, fast, low-anxiety way to communicate something that would take three paragraphs to describe accurately.",
      whenThisFails: [
        "If an attachment won't send and no size-limit message appears, try sending it alone in a fresh email rather than bundled with several other files, to isolate whether it's a combined size problem",
        "If you accidentally hit Reply All, a calm, brief follow-up ('sorry, meant to reply just to you') resolves it faster than ignoring it or panicking",
      ],
      teacherReflectionPrompt:
        "Explain out loud the difference between Reply, Reply All, CC, and BCC, using a specific example for each.",
      quiz: [
        {
          id: "cf-email-and-attachments-q1",
          prompt: "What's the difference between Reply and Reply All?",
          choices: [
            { id: "a", text: "There is no difference" },
            { id: "b", text: "Reply goes only to the sender; Reply All goes to everyone on the thread" },
            { id: "c", text: "Reply All is always the safer choice" },
            { id: "d", text: "Reply is only for attachments" },
          ],
          correctChoiceId: "b",
          explanation: "Reply targets just the original sender, while Reply All includes every recipient on the original message.",
          difficulty: "easy",
        },
        {
          id: "cf-email-and-attachments-q2",
          prompt: "What does BCC do that CC does not?",
          choices: [
            { id: "a", text: "BCC hides that recipient from the other recipients" },
            { id: "b", text: "BCC deletes the message after sending" },
            { id: "c", text: "BCC is identical to CC" },
            { id: "d", text: "BCC only works with attachments" },
          ],
          correctChoiceId: "a",
          explanation: "BCC adds a recipient invisibly, commonly used for large group sends without exposing everyone's address.",
          difficulty: "easy",
        },
        {
          id: "cf-email-and-attachments-q3",
          prompt: "What is the Windows 11 shortcut to capture a screenshot to attach or paste into an email?",
          choices: [
            { id: "a", text: "Windows key + Shift + S" },
            { id: "b", text: "Ctrl + Alt + Delete" },
            { id: "c", text: "Windows key + E" },
            { id: "d", text: "Alt + Tab" },
          ],
          correctChoiceId: "a",
          explanation: "Windows key + Shift + S opens the snipping tool for a quick, selectable screenshot.",
          difficulty: "easy",
        },
        {
          id: "cf-email-and-attachments-q4",
          prompt: "An attachment fails to send with no error, and it's several large video files at once. What's the most likely explanation?",
          choices: [
            { id: "a", text: "The email account is permanently broken" },
            { id: "b", text: "The combined file size likely exceeds a limit" },
            { id: "c", text: "Video files can never be emailed" },
            { id: "d", text: "The internet connection is definitely at fault" },
          ],
          correctChoiceId: "b",
          explanation: "Large combined attachments are a common, ordinary cause of send failures, not a sign of a broken account.",
          difficulty: "medium",
        },
        {
          id: "cf-email-and-attachments-q5",
          prompt: "You captured a screenshot with Windows key + Shift + S. What's the fastest way to get it into an email you're drafting?",
          choices: [
            { id: "a", text: "Save it as a file, then always attach it manually" },
            { id: "b", text: "Paste it directly into the email body with Ctrl+V" },
            { id: "c", text: "Print it and re-scan it" },
            { id: "d", text: "It cannot be added to an email" },
          ],
          correctChoiceId: "b",
          explanation: "The captured screenshot copies to the clipboard automatically and can be pasted directly, no saving required.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-email-and-attachments-b1",
          prompt: "Before clicking Reply All, what question should you ask?",
          choices: [
            { id: "a", text: "\"Does everyone on this thread actually need to see this?\"" },
            { id: "b", text: "\"Is this the fastest button to click?\"" },
            { id: "c", text: "\"Will this impress everyone?\"" },
            { id: "d", text: "\"Is my email address visible?\"" },
          ],
          correctChoiceId: "a",
          explanation: "This question is the practical filter for choosing Reply over Reply All.",
        },
        {
          id: "cf-email-and-attachments-b2",
          prompt: "CC is best used for:",
          choices: [
            { id: "a", text: "Keeping someone informed without expecting them to respond" },
            { id: "b", text: "Hiding a recipient from everyone else" },
            { id: "c", text: "Deleting a message" },
            { id: "d", text: "Attaching a large file" },
          ],
          correctChoiceId: "a",
          explanation: "CC visibly includes someone for awareness, distinct from the primary recipient who's expected to respond.",
        },
        {
          id: "cf-email-and-attachments-b3",
          prompt: "Where do downloaded or saved files most commonly end up on Windows 11?",
          choices: [
            { id: "a", text: "Documents and Downloads" },
            { id: "b", text: "The Recycle Bin" },
            { id: "c", text: "Task Manager" },
            { id: "d", text: "The Control Panel" },
          ],
          correctChoiceId: "a",
          explanation: "Documents and Downloads are the two most common default file locations to browse to when attaching.",
        },
        {
          id: "cf-email-and-attachments-b4",
          prompt: "What icon typically starts the process of attaching a file in most email clients?",
          choices: [
            { id: "a", text: "A paperclip icon" },
            { id: "b", text: "A trash can icon" },
            { id: "c", text: "A magnifying glass icon" },
            { id: "d", text: "A gear icon" },
          ],
          correctChoiceId: "a",
          explanation: "The paperclip icon is the near-universal symbol for adding an attachment.",
        },
        {
          id: "cf-email-and-attachments-b5",
          prompt: "A large group email should use BCC mainly to:",
          choices: [
            { id: "a", text: "Avoid exposing everyone's email address to each other" },
            { id: "b", text: "Make the message load faster" },
            { id: "c", text: "Guarantee delivery" },
            { id: "d", text: "Prevent replies entirely" },
          ],
          correctChoiceId: "a",
          explanation: "BCC's main everyday use is privacy for large distribution sends, not secrecy in personal conversations.",
        },
        {
          id: "cf-email-and-attachments-b6",
          prompt: "After capturing a screenshot with Windows key + Shift + S, where might it also be automatically saved if you don't paste it first?",
          choices: [
            { id: "a", text: "Pictures > Screenshots" },
            { id: "b", text: "The Recycle Bin" },
            { id: "c", text: "Task Manager" },
            { id: "d", text: "It's never saved anywhere" },
          ],
          correctChoiceId: "a",
          explanation: "Windows 11 commonly saves snips to Pictures > Screenshots in addition to copying them to the clipboard.",
        },
        {
          id: "cf-email-and-attachments-b7",
          prompt: "You accidentally hit Reply All on a message meant for one person. What's the most professional next step?",
          choices: [
            { id: "a", text: "Send a calm, brief follow-up correcting it" },
            { id: "b", text: "Ignore it and hope no one notices" },
            { id: "c", text: "Delete your email account" },
            { id: "d", text: "Blame the email provider" },
          ],
          correctChoiceId: "a",
          explanation: "A short, calm correction resolves the mistake far better than ignoring it or panicking.",
        },
        {
          id: "cf-email-and-attachments-b8",
          prompt: "Why is email mechanics anxiety often about unfamiliarity rather than difficulty?",
          choices: [
            { id: "a", text: "Email's interface has barely changed in decades, so the buttons just need practice, not special skill" },
            { id: "b", text: "Email is objectively the hardest software to use" },
            { id: "c", text: "It's impossible to learn without formal training" },
            { id: "d", text: "There's no way to reduce this anxiety" },
          ],
          correctChoiceId: "a",
          explanation: "The mechanics are simple and stable; the anxiety usually comes from not having practiced the specific buttons yet.",
        },
      ],
      flashcards: [
        {
          id: "cf-email-and-attachments-f1",
          front: "Difference between Reply and Reply All?",
          back: "Reply goes only to the sender; Reply All goes to everyone on the thread",
        },
        {
          id: "cf-email-and-attachments-f2",
          front: "What does BCC do?",
          back: "Adds a recipient invisibly, so others on the thread don't see they were included",
        },
        {
          id: "cf-email-and-attachments-f3",
          front: "Windows 11 screenshot shortcut?",
          back: "Windows key + Shift + S",
        },
        {
          id: "cf-email-and-attachments-f4",
          front: "Fastest way to get a screenshot into an email body?",
          back: "Paste directly with Ctrl+V after capturing it",
        },
        {
          id: "cf-email-and-attachments-f5",
          front: "Likely cause of an attachment failing to send with no clear error?",
          back: "The combined file size probably exceeds a limit",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard", "external-lab"],
      assignments: [
        {
          id: "cf-lab-screenshot",
          title: "Lab: Capture and Send a Screenshot",
          type: "external-lab",
          instructions: `Practice on a real Windows 11 PC you are allowed to use for hands-on learning.

Safety boundaries: this lab only captures a picture of your own screen and saves it to your own Documents folder — it never shares anything automatically and nothing leaves your device unless you choose to send it yourself.

Steps (Windows 11):
1. Open anything on screen you'd like practice capturing — a webpage, a document, or the Windows desktop itself.
2. Press Windows key + Shift + S to open the snipping tool.
3. Drag to select the area of the screen you want to capture. The image copies to your clipboard automatically.
4. Open a new email draft (or a notes app if you'd rather not send a real email yet) and press Ctrl+V to paste the screenshot directly into the message.
5. Now practice the file-saving path too: capture a second screenshot, and this time click the notification that appears after snipping to open it in the editor, then choose Save As and save it into your Documents folder with a clear file name like "practice-screenshot".
6. Attach that saved file to a draft email using the paperclip icon, to practice both methods (paste vs. attach).

Rollback: everything created in this lab is one or two image files inside your own Documents folder — delete them when you're done and nothing else on the PC is affected.

Windows 10 note (legacy): Windows key + Shift + S works identically on Windows 10; the snip editor notification and Save As dialog look nearly the same.

Mobile-only fallback: if you do not have access to a Windows 11 PC right now, practice the equivalent action on your phone — take a screenshot (most phones use a button combination like power + volume down), then attach or paste it into an email or messaging app draft. Revisit the Windows-specific steps the next time you can use a real desktop or laptop.`,
          estimatedMinutes: 15,
          externalResourceId: "windows-11-pc",
          completionCriteria: [
            "Captured a screenshot using Windows key + Shift + S",
            "Pasted a screenshot directly into an email or notes draft with Ctrl+V",
            "Saved a second screenshot into Documents and attached it using the paperclip icon",
            "Deleted the practice screenshot files as rollback cleanup when finished",
          ],
          relatedTopicIds: ["cf-email-and-attachments"],
          order: 1,
        },
      ],
      externalResources: [WINDOWS_11_PC_RESOURCE],
      estimatedStudyMinutes: 25,
      difficulty: "easy",
    },
    {
      id: "cf-pdfs-docs-sheets-light",
      name: "PDFs, Docs, and Spreadsheets — Just Enough",
      objectives: ["CF-M7-O3", "CF-M7-O4"],
      prerequisites: ["cf-email-and-attachments"],
      lesson: {
        title: "PDFs, Docs, and Spreadsheets — Just Enough",
        content: `You don't need to become an expert in document software to function comfortably at work or in everyday life — you need a small, reliable set of moves that cover the vast majority of situations you'll actually run into. This topic is deliberately "just enough": PDFs, word documents, and spreadsheets, at the literacy level, not the power-user level.

Start with PDFs, since they're the format you'll open more than any other — tax forms, receipts, official letters, signed contracts. A PDF is designed to look identical no matter what device opens it, which is exactly why it's the standard for anything official. On Windows 11, PDFs typically open in Microsoft Edge by default, which is enough for reading and printing most of the time. Some PDFs are fillable forms — look for boxes that highlight or a "Fill & Sign" option; clicking directly into a highlighted box lets you type into it like a form. If a PDF you need to edit isn't fillable and you truly need to change its content (not just fill boxes), that typically requires dedicated software, which is a reasonable point to search for a specific free tool rather than assuming you're missing a basic skill.

Word documents (.docx) and their free-tool equivalents are for anything you're actively writing or editing — letters, resumes, reports. The single most important habit here is understanding Save versus Save As. Save updates the same file you already have open, overwriting the previous version. Save As creates a new, separate file, which is exactly what you want when you're starting from a template, keeping an old version around, or sending someone a fresh copy without touching your original. Getting this backwards — using Save when you meant Save As — is how people accidentally lose an original version they wanted to keep.

Spreadsheets (.xlsx) look intimidating because of the grid of cells, but at the literacy level you mainly need three things: a cell is one box, referenced by its column letter and row number (like B4); typing a number versus typing text behaves differently, and spreadsheets are built around numbers, dates, and simple math; and a formula always starts with an equals sign (=), like =A1+A2 to add two cells together. You do not need to memorize functions to be spreadsheet-literate — you need to recognize that a cell showing a formula (visible when you click it, even if the cell displays a calculated result) is doing math, not just displaying typed text.

One quiet but important habit across all three formats: know what file type you're dealing with, visible in the file name's ending (.pdf, .docx, .xlsx) — this connects directly back to file extensions from earlier in this course, and it's exactly how you predict which app will open a file and what you can reasonably do with it. When in doubt about what a specific document requires beyond this literacy level — heavy formatting, complex spreadsheet formulas, digital signatures with legal weight — treat that as a legitimate reason to search for a targeted answer or ask someone with more specific experience, not as a gap in your basic competence.`,
      },
      lightbulbMoment:
        "Save overwrites what you have open; Save As creates a separate new file — mixing those two up is how people lose an original they meant to keep.",
      keyFacts: [
        "PDFs look identical everywhere, which is why they're the standard for official documents",
        "Fillable PDF forms show highlighted boxes you can click directly into and type",
        "Save overwrites the current file; Save As creates a new, separate file",
        "A spreadsheet formula always starts with an equals sign, like =A1+A2",
        "File extensions (.pdf, .docx, .xlsx) tell you which app will open a file and what you can do with it",
      ],
      guidedExample: {
        title: "Save vs. Save As, Correctly Chosen",
        steps: [
          "You open a resume template file you want to reuse for a different job application.",
          "Ask: do I want to keep the original template unchanged? Yes.",
          "Use Save As, not Save, and give the new file a clear name like 'Resume-CompanyName'.",
          "Edit the new file freely — the original template file remains untouched.",
          "Later, editing your own in-progress resume (not a template), use Save normally to update the same file.",
          "Result: one reusable template preserved, plus one actively updated working copy.",
        ],
      },
      commonMistakes: [
        "Using Save when you meant Save As, accidentally overwriting a template or original you wanted to keep",
        "Assuming every PDF is fillable when only some are, and getting stuck trying to type directly onto plain text",
        "Typing a number into a spreadsheet cell as text (with extra characters), which breaks simple math",
        "Ignoring a file's extension and being surprised when the 'wrong' app tries to open it",
      ],
      realWorldTraps: [
        "A job application template gets accidentally overwritten because Save was clicked instead of Save As",
        "A fillable PDF form's boxes get manually typed around instead of clicked into directly, producing messy results",
        "A spreadsheet total looks wrong because one cell has a stray space or letter mixed into what should be a pure number",
      ],
      realWorldScenario:
        "You receive a fillable PDF job application. Instead of printing it and filling it out by hand, you notice the highlighted boxes, click directly into the first one, and type your information — then use Save As to keep a completed copy separate from the blank original, in case you need to apply somewhere else with the same form later.",
      whenThisFails: [
        "If you accidentally overwrote a file with Save instead of Save As, check whether the app has a recent-versions or undo-history feature before assuming the original is permanently gone",
        "If a spreadsheet formula shows an error instead of a number, click the cell and read exactly what it references — a mistyped cell reference is the most common cause",
      ],
      teacherReflectionPrompt:
        "Explain the difference between Save and Save As using a real example from your own files, and describe a situation where picking the wrong one would matter.",
      quiz: [
        {
          id: "cf-pdfs-docs-sheets-light-q1",
          prompt: "Why is PDF the standard format for official documents?",
          choices: [
            { id: "a", text: "It looks identical no matter what device opens it" },
            { id: "b", text: "It's the only format that can be emailed" },
            { id: "c", text: "It cannot be opened without special software" },
            { id: "d", text: "It's always editable like a Word document" },
          ],
          correctChoiceId: "a",
          explanation: "Consistent appearance across devices is exactly why PDFs are trusted for official paperwork.",
          difficulty: "easy",
        },
        {
          id: "cf-pdfs-docs-sheets-light-q2",
          prompt: "What is the key difference between Save and Save As?",
          choices: [
            { id: "a", text: "Save overwrites the current file; Save As creates a new, separate file" },
            { id: "b", text: "They do exactly the same thing" },
            { id: "c", text: "Save As deletes the original automatically" },
            { id: "d", text: "Save only works on spreadsheets" },
          ],
          correctChoiceId: "a",
          explanation: "Understanding this difference prevents accidentally overwriting a file you meant to preserve.",
          difficulty: "easy",
        },
        {
          id: "cf-pdfs-docs-sheets-light-q3",
          prompt: "What always starts a spreadsheet formula?",
          choices: [
            { id: "a", text: "A dollar sign" },
            { id: "b", text: "An equals sign (=)" },
            { id: "c", text: "A colon" },
            { id: "d", text: "A pound sign" },
          ],
          correctChoiceId: "b",
          explanation: "An equals sign tells the spreadsheet the cell contains a calculation, not just typed text.",
          difficulty: "easy",
        },
        {
          id: "cf-pdfs-docs-sheets-light-q4",
          prompt: "You need to reuse a template file without changing the original. What should you use?",
          choices: [
            { id: "a", text: "Save" },
            { id: "b", text: "Save As, with a new file name" },
            { id: "c", text: "Delete the template first" },
            { id: "d", text: "Print it instead of saving" },
          ],
          correctChoiceId: "b",
          explanation: "Save As preserves the original template while letting you create a fresh, editable copy.",
          difficulty: "medium",
        },
        {
          id: "cf-pdfs-docs-sheets-light-q5",
          prompt: "A spreadsheet total looks wrong even though the numbers look right visually. What's a likely cause worth checking?",
          choices: [
            { id: "a", text: "A cell contains text or a stray character instead of a pure number" },
            { id: "b", text: "Spreadsheets never make math errors" },
            { id: "c", text: "The file extension is wrong" },
            { id: "d", text: "The formula never starts with an equals sign" },
          ],
          correctChoiceId: "a",
          explanation: "Numbers typed with extra characters or spaces often get treated as text, breaking simple math.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-pdfs-docs-sheets-light-b1",
          prompt: "What typically opens a PDF by default on Windows 11?",
          choices: [
            { id: "a", text: "Microsoft Edge" },
            { id: "b", text: "Task Manager" },
            { id: "c", text: "File Explorer only, with no viewer" },
            { id: "d", text: "It cannot be opened without paid software" },
          ],
          correctChoiceId: "a",
          explanation: "Microsoft Edge is the common default PDF viewer on Windows 11, sufficient for reading and printing.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b2",
          prompt: "How do you recognize a fillable PDF form?",
          choices: [
            { id: "a", text: "Highlighted boxes you can click into and type" },
            { id: "b", text: "It's always printed in color" },
            { id: "c", text: "It has no text at all" },
            { id: "d", text: "It cannot be opened in a browser" },
          ],
          correctChoiceId: "a",
          explanation: "Highlighted, clickable boxes are the visual cue that a PDF form accepts typed input.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b3",
          prompt: "What does a cell reference like B4 mean in a spreadsheet?",
          choices: [
            { id: "a", text: "Column B, row 4" },
            { id: "b", text: "Row B, column 4" },
            { id: "c", text: "A formula name" },
            { id: "d", text: "A file extension" },
          ],
          correctChoiceId: "a",
          explanation: "Spreadsheet cells are referenced by column letter first, then row number.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b4",
          prompt: "Why does a file's extension (.pdf, .docx, .xlsx) matter?",
          choices: [
            { id: "a", text: "It predicts which app opens the file and what you can do with it" },
            { id: "b", text: "It has no practical use" },
            { id: "c", text: "It only matters for pictures" },
            { id: "d", text: "It determines the file's size" },
          ],
          correctChoiceId: "a",
          explanation: "This connects directly to file extension literacy — the ending tells you the file type and likely app.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b5",
          prompt: "What's the risk of clicking Save instead of Save As on a template you want to preserve?",
          choices: [
            { id: "a", text: "You permanently overwrite the original template" },
            { id: "b", text: "Nothing changes at all" },
            { id: "c", text: "It automatically creates a backup" },
            { id: "d", text: "It converts the file to a PDF" },
          ],
          correctChoiceId: "a",
          explanation: "Save overwrites the file you currently have open, which erases the previous version if it was the original template.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b6",
          prompt: "What is the minimum spreadsheet literacy needed at this level?",
          choices: [
            { id: "a", text: "Understanding cells, number vs. text, and that formulas start with =" },
            { id: "b", text: "Memorizing every built-in function" },
            { id: "c", text: "Writing complex macros" },
            { id: "d", text: "Nothing — spreadsheets require no basic skills" },
          ],
          correctChoiceId: "a",
          explanation: "This topic intentionally targets everyday literacy, not advanced spreadsheet skills.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b7",
          prompt: "If a PDF isn't fillable but you truly need to edit its content, what's the reasonable next step?",
          choices: [
            { id: "a", text: "Search for a specific free tool designed for that task" },
            { id: "b", text: "Assume it's impossible and give up" },
            { id: "c", text: "Print it and retype the whole thing" },
            { id: "d", text: "Delete the file" },
          ],
          correctChoiceId: "a",
          explanation: "Editing non-fillable PDF content is a legitimate reason to search for a targeted tool, not a basic-skill gap.",
        },
        {
          id: "cf-pdfs-docs-sheets-light-b8",
          prompt: "Why is treating advanced document tasks as 'search for a specific answer' better than assuming you lack basic competence?",
          choices: [
            { id: "a", text: "Because these tasks genuinely go beyond everyday literacy, not because you're missing something basic" },
            { id: "b", text: "Because searching always works instantly" },
            { id: "c", text: "Because basic literacy includes every advanced feature" },
            { id: "d", text: "There's no meaningful distinction" },
          ],
          correctChoiceId: "a",
          explanation: "This module deliberately separates everyday literacy from power-user skill, and it's honest to name that boundary.",
        },
      ],
      flashcards: [
        {
          id: "cf-pdfs-docs-sheets-light-f1",
          front: "Why is PDF the standard for official documents?",
          back: "It looks identical no matter what device opens it",
        },
        {
          id: "cf-pdfs-docs-sheets-light-f2",
          front: "Save vs. Save As?",
          back: "Save overwrites the current file; Save As creates a new, separate file",
        },
        {
          id: "cf-pdfs-docs-sheets-light-f3",
          front: "What always starts a spreadsheet formula?",
          back: "An equals sign (=)",
        },
        {
          id: "cf-pdfs-docs-sheets-light-f4",
          front: "How do you recognize a fillable PDF form?",
          back: "Highlighted boxes you can click into and type directly",
        },
        {
          id: "cf-pdfs-docs-sheets-light-f5",
          front: "Why does a file extension matter?",
          back: "It predicts which app will open the file and what you can reasonably do with it",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
    {
      id: "cf-meetings-print-scan",
      name: "Meetings, Printing, and Scanning",
      objectives: ["CF-M7-O5", "CF-M7-O6"],
      prerequisites: ["cf-pdfs-docs-sheets-light"],
      lesson: {
        title: "Meetings, Printing, and Scanning",
        content: `A surprising amount of everyday computer anxiety isn't about the computer at all — it's about the moment right before a video call starts, or the printer that "randomly" won't cooperate. Both are made of a handful of predictable pieces, and knowing them ahead of time turns a stressful few minutes into a routine one.

For video meetings (Teams, Zoom, Google Meet, and similar tools work almost identically at this level), a calendar invite typically contains a clickable link or a "Join" button — clicking it either opens the meeting directly in your browser or offers to open a dedicated app if one is installed. Before joining, it's worth knowing where three controls live, because they're nearly universal across these tools: a microphone icon to mute/unmute, a camera icon to turn your video on/off, and a "share screen" option, usually in a toolbar at the bottom or top of the meeting window. A quiet habit worth building: join muted by default in larger meetings, and unmute only when you're about to speak — this avoids background noise interrupting others, and it's considered standard etiquette rather than something that makes you look uncertain.

Printing sounds simple until it isn't, and almost every "printer problem" traces back to one of a few causes. Ctrl+P (or File > Print) opens the print dialog in nearly every app. From there, check three things before assuming something is broken: which printer is selected (it's easy to accidentally print to the wrong one, especially with multiple printers on a shared network), how many copies and pages, and whether the printer shows as online — a printer that's off, out of paper, or disconnected from Wi-Fi will often show a warning icon in Windows 11's printer settings rather than failing silently. If a print job seems stuck, Windows 11's print queue (searchable from the Start menu as "Printers & scanners," then clicking the specific printer) shows what's waiting and lets you cancel a stuck job that might be blocking everything behind it.

Scanning has gotten dramatically easier than it used to be, mainly because most people now have a scanner in their pocket. A phone's camera, combined with a document-scanning feature built into most phone camera or notes apps, can capture a clean, flat, cropped image of a paper document that's good enough for the overwhelming majority of everyday needs — signing a form, submitting a receipt, sharing a handwritten note. If a dedicated scanner or all-in-one printer/scanner is available instead, the process is similar in spirit: place the document face-down (or as the scanner indicates), select "Scan" from the device or from Windows 11's Scan app, and choose where to save the result, usually as a PDF or image file into Documents or Pictures.

The throughline across all three of these tasks is the same one from earlier in this course: know roughly where the important controls live, expect a small number of predictable causes when something doesn't work on the first try, and treat the whole thing as a repeatable skill rather than a fresh crisis every single time it comes up.`,
      },
      lightbulbMoment:
        "Almost every 'printer problem' is one of three things: wrong printer selected, out of paper, or offline — check those before assuming something is broken.",
      keyFacts: [
        "Video meeting tools share nearly universal controls: microphone mute, camera on/off, and share screen",
        "Joining muted by default in larger meetings is standard etiquette, not a sign of uncertainty",
        "Ctrl+P (or File > Print) opens the print dialog in nearly every app",
        "Check the selected printer, page count, and online status before assuming a print failure is complex",
        "A phone camera with a document-scanning feature covers most everyday scanning needs",
      ],
      guidedExample: {
        title: "Diagnosing a 'Broken' Print Job",
        steps: [
          "Print job doesn't appear on the printer after clicking Print.",
          "Check 1: which printer was selected in the print dialog — was it the right one?",
          "Check 2: open 'Printers & scanners' from the Start menu and check the printer's status.",
          "Status shows offline — check the printer's power and Wi-Fi/cable connection (simple-checks ladder from Module 6).",
          "Reconnect the printer, then check the print queue for the original stuck job.",
          "Cancel the stuck job if it's still sitting there, and print again fresh.",
        ],
      },
      commonMistakes: [
        "Assuming a printer is 'broken' without checking which printer was actually selected",
        "Not checking the print queue for a stuck job that's blocking everything behind it",
        "Joining a meeting unmuted by default in a large group, creating background noise",
        "Assuming scanning requires a dedicated scanner when a phone camera often works just as well",
      ],
      realWorldTraps: [
        "A document 'fails to print' repeatedly because it's silently printing to a different, disconnected printer on a shared network",
        "Someone joins a video call unmuted with background noise and doesn't realize it until someone else mentions it",
        "A print queue backs up with one stuck job, and every job after it appears to fail for no visible reason",
      ],
      realWorldScenario:
        "You need to submit a signed form by end of day but don't have a scanner at home. Instead of panicking, you use your phone's camera with its document-scanning feature, get a clean, cropped, well-lit capture of the signed page, and email it as a photo — a completely acceptable, common substitute for a dedicated scanner in most everyday situations.",
      whenThisFails: [
        "If a printer still won't work after checking selection, status, and the queue, that's a legitimate point to escalate to whoever manages that printer, using the running-note habit from Module 6",
        "If a meeting link won't open in your browser, try the dedicated app version if one is offered, or ask the organizer for a phone dial-in option as a fallback",
      ],
      teacherReflectionPrompt:
        "Walk through the three things to check before assuming a printer is broken, and explain why checking them in that order makes sense.",
      quiz: [
        {
          id: "cf-meetings-print-scan-q1",
          prompt: "What three controls are nearly universal across video meeting tools?",
          choices: [
            { id: "a", text: "Mute, camera on/off, and share screen" },
            { id: "b", text: "Print, scan, and save" },
            { id: "c", text: "Restart, update, and delete" },
            { id: "d", text: "Bold, italic, and underline" },
          ],
          correctChoiceId: "a",
          explanation: "These three controls appear in nearly identical form across Teams, Zoom, Google Meet, and similar tools.",
          difficulty: "easy",
        },
        {
          id: "cf-meetings-print-scan-q2",
          prompt: "What shortcut typically opens the print dialog in most apps?",
          choices: [
            { id: "a", text: "Ctrl+P" },
            { id: "b", text: "Ctrl+S" },
            { id: "c", text: "Windows key + L" },
            { id: "d", text: "Alt+F4" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+P is a near-universal shortcut for opening the print dialog.",
          difficulty: "easy",
        },
        {
          id: "cf-meetings-print-scan-q3",
          prompt: "Before assuming a printer is broken, what should you check first?",
          choices: [
            { id: "a", text: "Which printer is selected, its online status, and the print queue" },
            { id: "b", text: "Whether to buy a new printer" },
            { id: "c", text: "The printer's original purchase receipt" },
            { id: "d", text: "Nothing — printers are unpredictable and unfixable" },
          ],
          correctChoiceId: "a",
          explanation: "Most print failures trace back to these three ordinary, checkable causes.",
          difficulty: "medium",
        },
        {
          id: "cf-meetings-print-scan-q4",
          prompt: "Why join a large meeting muted by default?",
          choices: [
            { id: "a", text: "It's a sign you don't know how to use the software" },
            { id: "b", text: "It avoids background noise interrupting others and is standard etiquette" },
            { id: "c", text: "It's required by every meeting tool" },
            { id: "d", text: "It automatically records the meeting" },
          ],
          correctChoiceId: "b",
          explanation: "Joining muted is considered courteous, standard practice, not a sign of uncertainty.",
          difficulty: "medium",
        },
        {
          id: "cf-meetings-print-scan-q5",
          prompt: "A print job you sent seems stuck, and nothing after it will print either. What's the likely explanation?",
          choices: [
            { id: "a", text: "A stuck job in the print queue is blocking everything behind it" },
            { id: "b", text: "The printer is permanently broken" },
            { id: "c", text: "Print queues never get stuck" },
            { id: "d", text: "This only happens with wireless printers" },
          ],
          correctChoiceId: "a",
          explanation: "A stalled job at the front of the queue commonly blocks subsequent jobs until it's cancelled.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-meetings-print-scan-b1",
          prompt: "Where can you find and cancel a stuck print job on Windows 11?",
          choices: [
            { id: "a", text: "Printers & scanners settings, then the specific printer's queue" },
            { id: "b", text: "Task Manager only" },
            { id: "c", text: "The Recycle Bin" },
            { id: "d", text: "It cannot be cancelled once sent" },
          ],
          correctChoiceId: "a",
          explanation: "The printer's queue view lets you see and cancel jobs that are stuck.",
        },
        {
          id: "cf-meetings-print-scan-b2",
          prompt: "What's a common substitute for a dedicated scanner for everyday needs?",
          choices: [
            { id: "a", text: "A phone camera with a document-scanning feature" },
            { id: "b", text: "A printer with no scan function" },
            { id: "c", text: "There is no substitute" },
            { id: "d", text: "A calculator app" },
          ],
          correctChoiceId: "a",
          explanation: "Phone document-scanning features handle most everyday scanning needs without a dedicated scanner.",
        },
        {
          id: "cf-meetings-print-scan-b3",
          prompt: "A print job silently fails on a shared network with multiple printers. What should you check first?",
          choices: [
            { id: "a", text: "Which printer was actually selected in the print dialog" },
            { id: "b", text: "The printer's purchase date" },
            { id: "c", text: "The document's font" },
            { id: "d", text: "The Wi-Fi password" },
          ],
          correctChoiceId: "a",
          explanation: "Printing to the wrong printer on a shared network is a very common, easily overlooked cause.",
        },
        {
          id: "cf-meetings-print-scan-b4",
          prompt: "What does the microphone icon in a meeting tool control?",
          choices: [
            { id: "a", text: "Mute/unmute your audio" },
            { id: "b", text: "Turning your camera on and off" },
            { id: "c", text: "Sharing your screen" },
            { id: "d", text: "Ending the meeting for everyone" },
          ],
          correctChoiceId: "a",
          explanation: "The microphone icon is the near-universal mute/unmute control.",
        },
        {
          id: "cf-meetings-print-scan-b5",
          prompt: "Why check whether a printer shows as 'online' before troubleshooting further?",
          choices: [
            { id: "a", text: "A printer that's off or disconnected won't complete jobs, and Windows often shows this status directly" },
            { id: "b", text: "Printer status has no bearing on print jobs" },
            { id: "c", text: "Online status only matters for scanners" },
            { id: "d", text: "It's unrelated to whether printing works" },
          ],
          correctChoiceId: "a",
          explanation: "Checking status first can immediately explain a failure without deeper troubleshooting.",
        },
        {
          id: "cf-meetings-print-scan-b6",
          prompt: "What's a reasonable fallback if a video meeting link won't open in your browser?",
          choices: [
            { id: "a", text: "Try the dedicated app version, or ask for a phone dial-in option" },
            { id: "b", text: "Give up on joining the meeting entirely" },
            { id: "c", text: "Assume the internet is completely down" },
            { id: "d", text: "Restart the router immediately with no other checks" },
          ],
          correctChoiceId: "a",
          explanation: "Alternative join methods are common and simple fallbacks before assuming a bigger problem.",
        },
        {
          id: "cf-meetings-print-scan-b7",
          prompt: "Why is 'share screen' worth knowing the location of ahead of a meeting, rather than during it?",
          choices: [
            { id: "a", text: "Finding it calmly beforehand avoids fumbling for it under time pressure during a live meeting" },
            { id: "b", text: "It's rarely used in real meetings" },
            { id: "c", text: "It only exists in some meeting tools" },
            { id: "d", text: "It has no practical use" },
          ],
          correctChoiceId: "a",
          explanation: "Knowing where controls live ahead of time reduces stress in the moment they're actually needed.",
        },
        {
          id: "cf-meetings-print-scan-b8",
          prompt: "What is the general theme connecting meetings, printing, and scanning as skills?",
          choices: [
            { id: "a", text: "Knowing where key controls live and expecting a small set of predictable causes when something fails" },
            { id: "b", text: "Each one requires completely unrelated, unpredictable troubleshooting" },
            { id: "c", text: "None of them are learnable skills" },
            { id: "d", text: "They only matter for IT professionals" },
          ],
          correctChoiceId: "a",
          explanation: "All three tasks reward the same mindset: predictable controls, predictable common causes, repeatable skill.",
        },
      ],
      flashcards: [
        {
          id: "cf-meetings-print-scan-f1",
          front: "Three nearly universal video meeting controls?",
          back: "Microphone mute, camera on/off, and share screen",
        },
        {
          id: "cf-meetings-print-scan-f2",
          front: "Shortcut to open the print dialog in most apps?",
          back: "Ctrl+P",
        },
        {
          id: "cf-meetings-print-scan-f3",
          front: "Three things to check before assuming a printer is broken?",
          back: "Selected printer, page/copy settings, and online status",
        },
        {
          id: "cf-meetings-print-scan-f4",
          front: "Where to find and cancel a stuck print job on Windows 11?",
          back: "Printers & scanners settings, then that printer's queue",
        },
        {
          id: "cf-meetings-print-scan-f5",
          front: "Common substitute for a dedicated scanner?",
          back: "A phone camera with a document-scanning feature",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
    {
      id: "cf-zip-and-organization",
      name: "Zip Files and Everyday Organization",
      objectives: ["CF-M7-O7", "CF-M7-O8"],
      prerequisites: ["cf-meetings-print-scan"],
      lesson: {
        title: "Zip Files and Everyday Organization",
        content: `A "zip file" (also called a compressed folder) solves two problems at once: it bundles many files into one, and it usually shrinks their total size. Both matter in ordinary life — sending someone twenty photos as twenty separate email attachments is clumsy and may hit a size limit, while zipping them into one file is a single, tidy attachment that's often smaller too. Once you understand what a zip file actually is, the mystery around it disappears.

On Windows 11, creating a zip file takes one right-click: select the files or folder you want to bundle, right-click, and choose "Compress to ZIP file" (sometimes shown as "Send to" > "Compressed (zipped) folder" on slightly older interfaces). Windows creates a new file with a .zip extension containing everything you selected. Opening, or "extracting," a zip file someone sent you is just as simple: right-click the .zip file and choose "Extract All," then pick a destination folder — Windows suggests a sensible one automatically, usually a new folder with the same name as the zip file, placed wherever the zip file itself is. You can also often peek inside a zip file without extracting first, by double-clicking it like a regular folder, though extracting is more reliable if you plan to actually edit or move the files inside.

Zip files connect directly to a second, quietly powerful habit: everyday folder organization. The core idea is simple and doesn't require a complicated system — a small number of clearly named folders beats one giant folder with everything dumped in loose. A reasonable starting structure inside Documents might be a folder per broad category (Work, Personal, Taxes, or whatever matches your actual life), with dated or clearly named subfolders inside when a category grows large enough to need it. The naming habit that pays off the most is consistency: if you sometimes name a file "March Report" and sometimes "report_march," you'll struggle to find things later by scanning or searching. Picking one pattern and sticking with it — even something as simple as Year-Month-Description, like "2026-07-Invoice" — makes files sort in a useful order automatically and search reliably by keyword.

The two ideas in this topic reinforce each other in practice. When you receive a zip file full of loose documents from someone else, extracting it into a clearly named folder rather than leaving it in Downloads (where extracted files often land by default) is what actually makes the organization habit stick over time. And when you're the one sending files, deciding whether to zip them (many small files, or a folder structure worth preserving) versus attaching them individually (one or two files) is a quick judgment call that gets easier with practice.

None of this requires memorizing anything beyond right-click, Compress to ZIP file, Extract All, and a consistent naming habit — the goal is a small number of reliable moves you reach for automatically, not a complex filing system you have to relearn every time.`,
      },
      lightbulbMoment:
        "A zip file bundles many files into one, shrinks the total size, and is created or opened with a single right-click on Windows 11.",
      keyFacts: [
        "A zip file (compressed folder) bundles multiple files into one and usually shrinks total size",
        "Right-click files or a folder and choose \"Compress to ZIP file\" to create one on Windows 11",
        "Right-click a .zip file and choose \"Extract All\" to unpack its contents into a folder",
        "A small number of clearly named folders beats one giant folder with everything dumped loose",
        "A consistent file-naming pattern (like Year-Month-Description) makes files sort and search reliably",
      ],
      guidedExample: {
        title: "Zipping Photos to Email as One Attachment",
        steps: [
          "You have 20 photos to send, too many to attach individually without hitting a size or clutter problem.",
          "Select all 20 photos in File Explorer (click the first, Shift+click the last, or Ctrl+click each one).",
          "Right-click the selection and choose \"Compress to ZIP file.\"",
          "Windows creates one .zip file containing all 20 photos, usually smaller in total size.",
          "Attach that single .zip file to your email instead of 20 separate attachments.",
          "The recipient right-clicks the .zip file and chooses \"Extract All\" to get the individual photos back.",
        ],
      },
      commonMistakes: [
        "Attaching many individual files one by one instead of zipping them into one attachment first",
        "Leaving extracted files scattered in Downloads instead of moving them into a clearly named folder",
        "Using inconsistent file names (sometimes 'March Report,' sometimes 'report_march') that make searching unreliable",
        "Assuming a zip file needs special paid software when Windows 11 has this built in",
      ],
      realWorldTraps: [
        "An email bounces back as 'too large' because 15 individual photo attachments together exceed a size limit that one zipped file would have avoided",
        "A downloaded zip file's extracted contents get lost inside a cluttered Downloads folder within a week",
        "A search for 'invoice' misses half the relevant files because some were named 'Invoice,' others 'INV,' and others just a date",
      ],
      realWorldScenario:
        "A coworker emails you a zip file containing an entire project's worth of documents. Instead of leaving it sitting in Downloads, you extract it, then move the resulting folder into your own Work folder with a clear name like '2026-07-ProjectHandoff' — a habit that means you can actually find it again in three months, instead of scrolling through dozens of unrelated downloads.",
      whenThisFails: [
        "If 'Extract All' fails or the zip file seems corrupted, ask the sender to re-send it — zip files can occasionally get damaged in transfer, and this isn't a sign you did anything wrong",
        "If your folder structure has already become a cluttered mess, don't try to fix it all at once — start applying the consistent naming habit to new files going forward, and clean up older folders gradually",
      ],
      teacherReflectionPrompt:
        "Describe your current file-naming habits honestly — are they consistent? What one naming pattern could you commit to starting today?",
      quiz: [
        {
          id: "cf-zip-and-organization-q1",
          prompt: "What does a zip file (compressed folder) do?",
          choices: [
            { id: "a", text: "Bundles multiple files into one and usually shrinks total size" },
            { id: "b", text: "Deletes the original files permanently" },
            { id: "c", text: "Makes files impossible to open without special software" },
            { id: "d", text: "Only works with photos" },
          ],
          correctChoiceId: "a",
          explanation: "Zipping combines files into a single, usually smaller, package.",
          difficulty: "easy",
        },
        {
          id: "cf-zip-and-organization-q2",
          prompt: "How do you create a zip file on Windows 11?",
          choices: [
            { id: "a", text: "Right-click the selected files/folder and choose \"Compress to ZIP file\"" },
            { id: "b", text: "Double-click each file individually" },
            { id: "c", text: "Open Task Manager" },
            { id: "d", text: "There's no built-in way; you always need extra software" },
          ],
          correctChoiceId: "a",
          explanation: "This is a built-in Windows 11 feature accessible with a single right-click.",
          difficulty: "easy",
        },
        {
          id: "cf-zip-and-organization-q3",
          prompt: "What does 'Extract All' do to a .zip file?",
          choices: [
            { id: "a", text: "Unpacks its contents into a regular folder you can browse normally" },
            { id: "b", text: "Deletes the zip file without opening it" },
            { id: "c", text: "Compresses it further" },
            { id: "d", text: "Sends it back to the original sender" },
          ],
          correctChoiceId: "a",
          explanation: "Extracting unpacks the bundled files into their own accessible folder.",
          difficulty: "medium",
        },
        {
          id: "cf-zip-and-organization-q4",
          prompt: "Why does inconsistent file naming cause problems later?",
          choices: [
            { id: "a", text: "It makes searching and sorting unreliable" },
            { id: "b", text: "It has no real effect" },
            { id: "c", text: "It only matters for zip files" },
            { id: "d", text: "Windows 11 automatically fixes inconsistent names" },
          ],
          correctChoiceId: "a",
          explanation: "Inconsistent names defeat keyword search and automatic sorting by name.",
          difficulty: "medium",
        },
        {
          id: "cf-zip-and-organization-q5",
          prompt: "You just extracted a zip file's contents into Downloads. What's the better next habit?",
          choices: [
            { id: "a", text: "Leave everything in Downloads permanently" },
            { id: "b", text: "Move the extracted folder into a clearly named location, like a relevant folder in Documents" },
            { id: "c", text: "Delete the extracted files immediately" },
            { id: "d", text: "Re-zip them right away for no reason" },
          ],
          correctChoiceId: "b",
          explanation: "Moving extracted files into an organized, clearly named folder is what makes the organization habit actually stick.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-zip-and-organization-b1",
          prompt: "Why zip 20 photos instead of attaching them individually to an email?",
          choices: [
            { id: "a", text: "One zipped attachment is tidier and less likely to hit a size limit" },
            { id: "b", text: "Zipping is required by all email providers" },
            { id: "c", text: "Individual attachments are always faster" },
            { id: "d", text: "There's no real benefit either way" },
          ],
          correctChoiceId: "a",
          explanation: "Bundling many files reduces both clutter and total attachment size in most cases.",
        },
        {
          id: "cf-zip-and-organization-b2",
          prompt: "What file extension does a zip file have?",
          choices: [
            { id: "a", text: ".zip" },
            { id: "b", text: ".docx" },
            { id: "c", text: ".pdf" },
            { id: "d", text: ".exe" },
          ],
          correctChoiceId: "a",
          explanation: "Compressed folders created this way use the .zip extension.",
        },
        {
          id: "cf-zip-and-organization-b3",
          prompt: "A reasonable everyday folder structure is best described as:",
          choices: [
            { id: "a", text: "A small number of clearly named folders, not one giant catch-all folder" },
            { id: "b", text: "One giant folder with everything mixed together" },
            { id: "c", text: "Hundreds of tiny, oddly named folders" },
            { id: "d", text: "No folders at all, just search" },
          ],
          correctChoiceId: "a",
          explanation: "A small number of clearly named categories is easier to maintain and search than either extreme.",
        },
        {
          id: "cf-zip-and-organization-b4",
          prompt: "Which naming pattern is most consistent and search-friendly?",
          choices: [
            { id: "a", text: "\"2026-07-Invoice\" used consistently every time" },
            { id: "b", text: "Sometimes \"Invoice,\" sometimes \"INV,\" sometimes just a date" },
            { id: "c", text: "Random names with no pattern" },
            { id: "d", text: "Naming files after the day of the week only" },
          ],
          correctChoiceId: "a",
          explanation: "A single, consistently applied pattern makes both sorting and searching reliable over time.",
        },
        {
          id: "cf-zip-and-organization-b5",
          prompt: "Can you view what's inside a zip file without fully extracting it first?",
          choices: [
            { id: "a", text: "Yes — double-clicking it often lets you peek inside like a regular folder" },
            { id: "b", text: "No — extraction is always required first" },
            { id: "c", text: "Only with paid software" },
            { id: "d", text: "Only on Windows 10, not Windows 11" },
          ],
          correctChoiceId: "a",
          explanation: "Windows lets you browse a zip file's contents directly, though extracting is more reliable for editing or moving files.",
        },
        {
          id: "cf-zip-and-organization-b6",
          prompt: "If a zip file fails to extract or seems corrupted, what's the reasonable first step?",
          choices: [
            { id: "a", text: "Ask the sender to re-send it" },
            { id: "b", text: "Assume your device is broken" },
            { id: "c", text: "Delete Windows and reinstall it" },
            { id: "d", text: "Give up entirely" },
          ],
          correctChoiceId: "a",
          explanation: "Zip files can occasionally get damaged in transfer; re-sending is a simple, non-technical fix.",
        },
        {
          id: "cf-zip-and-organization-b7",
          prompt: "What happens by default when you extract a zip file's contents?",
          choices: [
            { id: "a", text: "Windows suggests a destination folder, often named after the zip file itself" },
            { id: "b", text: "The files are permanently deleted" },
            { id: "c", text: "Nothing happens without extra software" },
            { id: "d", text: "The files are automatically emailed to someone" },
          ],
          correctChoiceId: "a",
          explanation: "Windows creates a sensible default extraction folder, though you can choose a different destination.",
        },
        {
          id: "cf-zip-and-organization-b8",
          prompt: "Why is fixing an already-cluttered folder structure all at once usually not the recommended approach?",
          choices: [
            { id: "a", text: "It's more sustainable to apply the new naming habit going forward and clean up gradually" },
            { id: "b", text: "Cluttered folders can never be improved" },
            { id: "c", text: "It's always faster to fix everything in one sitting" },
            { id: "d", text: "There's no benefit to gradual cleanup" },
          ],
          correctChoiceId: "a",
          explanation: "Gradual, forward-looking habit change tends to stick better than an overwhelming one-time overhaul.",
        },
      ],
      flashcards: [
        {
          id: "cf-zip-and-organization-f1",
          front: "What does a zip file do?",
          back: "Bundles multiple files into one, usually shrinking total size",
        },
        {
          id: "cf-zip-and-organization-f2",
          front: "How to create a zip file on Windows 11?",
          back: "Right-click the selection → \"Compress to ZIP file\"",
        },
        {
          id: "cf-zip-and-organization-f3",
          front: "How to open a zip file's contents?",
          back: "Right-click it → \"Extract All\" → choose a destination folder",
        },
        {
          id: "cf-zip-and-organization-f4",
          front: "Best everyday folder strategy?",
          back: "A small number of clearly named folders, not one giant mixed folder",
        },
        {
          id: "cf-zip-and-organization-f5",
          front: "Why keep a consistent file-naming pattern?",
          back: "It makes files sort and search reliably later on",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-password-managers-bookmarks",
      name: "Password Managers and Bookmarks",
      objectives: ["CF-M7-O9", "CF-M7-O10"],
      prerequisites: ["cf-zip-and-organization"],
      lesson: {
        title: "Password Managers and Bookmarks",
        content: `Two small habits — using a password manager and keeping bookmarks organized — save an enormous amount of daily friction, and both are genuinely easy once set up, even though both get put off far longer than they should be.

A password manager is software that generates, stores, and automatically fills unique, strong passwords for every account you have, protected behind one strong master password (or your device's biometric unlock, like a fingerprint or face scan). The problem it solves is real and specific: reusing the same password across multiple accounts means that if one site gets breached, every account using that same password is now at risk too. Most people cope with this by reusing a small handful of passwords everywhere, or by using predictable, easy-to-guess variations. A password manager removes the need to remember dozens of unique passwords, because it remembers them for you and fills them in automatically on the correct site. Windows 11 and modern browsers (Edge, Chrome) include a basic built-in password manager that's a reasonable starting point; dedicated standalone password managers offer more features (like secure notes, syncing across more device types, and sharing credentials safely with family) if you outgrow the basic version. Either way, the core habit is the same: let the software generate a unique password for each new account, rather than typing your own familiar one out of habit.

Setting one up takes less time than it seems like it should. On sign-up for a new account, when the site asks you to create a password, look for a "suggest strong password" option — most browsers offer this automatically, and accepting it means you never have to think of or remember that password again. For existing accounts with weak or reused passwords, most password managers include a built-in checkup feature that flags reused or weak passwords, so you can update them gradually rather than all at once.

Bookmarks (sometimes called favorites) are the second habit, and they solve a much smaller but real problem: retyping or re-searching for the same website every time you need it. Most browsers let you bookmark the current page with Ctrl+D, and organize bookmarks into folders the same way you'd organize files — a "Work" folder, a "Bills" folder, whatever matches your actual routine. The habit that makes bookmarks genuinely useful, rather than a junk drawer, is the same consistency lesson from the last topic: bookmark sites you actually revisit regularly, organize them into a small number of clear folders as they accumulate, and periodically delete ones you no longer use.

Together, these two habits reduce two of the most common sources of daily digital friction — password fatigue and "wait, what was that website again" — down to a system that runs quietly in the background instead of requiring your attention every single time.`,
      },
      lightbulbMoment:
        "A password manager remembers a unique, strong password for every account so you don't have to reuse the same one everywhere — reuse is the real risk, not forgetting.",
      keyFacts: [
        "Reusing the same password across accounts means one breach can put every account using it at risk",
        "A password manager generates, stores, and auto-fills unique passwords behind one master password or biometric unlock",
        "Windows 11 and modern browsers include a basic built-in password manager as a reasonable starting point",
        "Most password managers include a checkup feature that flags weak or reused passwords",
        "Ctrl+D bookmarks the current page; organizing bookmarks into folders keeps them useful instead of cluttered",
      ],
      guidedExample: {
        title: "Letting a Password Manager Do the Work",
        steps: [
          "You sign up for a new account and reach the 'create a password' step.",
          "Instead of typing a familiar password out of habit, click the browser's 'suggest strong password' option.",
          "The browser generates a unique, random password and offers to save it.",
          "Accept the save — the password manager now remembers it for you.",
          "Next time you visit that site, the saved password auto-fills, so you never retype or re-remember it.",
          "Later, run the password manager's checkup feature to find and update any old, reused passwords elsewhere.",
        ],
      },
      commonMistakes: [
        "Reusing the same password across multiple accounts because it's easier to remember",
        "Assuming a password manager is only for 'tech people' rather than a basic literacy habit",
        "Never running a password checkup, leaving old reused passwords unnoticed",
        "Letting bookmarks pile up unsorted until finding anything in them becomes its own chore",
      ],
      realWorldTraps: [
        "One breached website exposes a password that turns out to be reused on a banking or email account too",
        "A predictable password pattern (adding a '1' or '!' to the same base word) gets guessed because it's a well-known habit, not a secure one",
        "An unsorted bookmarks bar with 200 entries becomes functionally useless, so the browser's search bar gets used instead anyway",
      ],
      realWorldScenario:
        "You get a notification that a website you signed up for years ago was breached. Because you've been using a password manager to generate a unique password for every site, this breach affects exactly one account, not five — you change that one password and move on, instead of scrambling to update the same reused password everywhere it might also be at risk.",
      whenThisFails: [
        "If you're not ready to switch to a dedicated password manager, start with your browser's built-in one — a basic version used consistently beats a perfect system you never set up",
        "If your bookmarks are already a disorganized mess, don't try to sort all of them at once — create a couple of clear folders and sort new bookmarks going forward, cleaning up the backlog gradually",
      ],
      teacherReflectionPrompt:
        "Honestly assess your current password habits — are any passwords reused across accounts? What's one account you could move to a password manager today?",
      quiz: [
        {
          id: "cf-password-managers-bookmarks-q1",
          prompt: "What's the main risk of reusing the same password across multiple accounts?",
          choices: [
            { id: "a", text: "One breach can put every account using that password at risk" },
            { id: "b", text: "There's no real risk if the password is long" },
            { id: "c", text: "It only matters for banking sites" },
            { id: "d", text: "Reuse makes passwords automatically stronger" },
          ],
          correctChoiceId: "a",
          explanation: "A single breached site exposes that password everywhere else it was reused too.",
          difficulty: "easy",
        },
        {
          id: "cf-password-managers-bookmarks-q2",
          prompt: "What does a password manager actually do?",
          choices: [
            { id: "a", text: "Generates, stores, and auto-fills unique passwords for each account" },
            { id: "b", text: "Deletes old accounts automatically" },
            { id: "c", text: "Makes every account use the same password for consistency" },
            { id: "d", text: "Only works on one specific website" },
          ],
          correctChoiceId: "a",
          explanation: "This is the core function that removes the need to remember dozens of unique passwords yourself.",
          difficulty: "easy",
        },
        {
          id: "cf-password-managers-bookmarks-q3",
          prompt: "What shortcut bookmarks the current page in most browsers?",
          choices: [
            { id: "a", text: "Ctrl+D" },
            { id: "b", text: "Ctrl+P" },
            { id: "c", text: "Ctrl+Z" },
            { id: "d", text: "Windows key + S" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+D is the near-universal shortcut for bookmarking the current page.",
          difficulty: "easy",
        },
        {
          id: "cf-password-managers-bookmarks-q4",
          prompt: "What does a password manager's 'checkup' feature typically do?",
          choices: [
            { id: "a", text: "Flags weak or reused passwords so you can update them" },
            { id: "b", text: "Deletes all your saved passwords" },
            { id: "c", text: "Automatically posts your passwords online" },
            { id: "d", text: "It doesn't exist in any password manager" },
          ],
          correctChoiceId: "a",
          explanation: "Checkup features scan saved passwords for reuse or weakness and flag them for updating.",
          difficulty: "medium",
        },
        {
          id: "cf-password-managers-bookmarks-q5",
          prompt: "Why do unsorted, accumulated bookmarks eventually stop being useful?",
          choices: [
            { id: "a", text: "Finding anything specific becomes as much work as just searching normally" },
            { id: "b", text: "Bookmarks automatically delete themselves after 100 entries" },
            { id: "c", text: "Browsers limit bookmarks to five total" },
            { id: "d", text: "There's no real downside to leaving them unsorted" },
          ],
          correctChoiceId: "a",
          explanation: "Without folders or organization, a large bookmark list becomes as hard to navigate as no bookmarks at all.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-password-managers-bookmarks-b1",
          prompt: "What is a reasonable starting point for a password manager if you're not ready for a dedicated app?",
          choices: [
            { id: "a", text: "Your browser's built-in password manager (Edge, Chrome, etc.)" },
            { id: "b", text: "Writing all passwords on a sticky note" },
            { id: "c", text: "Using the same password everywhere for simplicity" },
            { id: "d", text: "There is no starting point available" },
          ],
          correctChoiceId: "a",
          explanation: "Built-in browser password managers are a reasonable, accessible first step.",
        },
        {
          id: "cf-password-managers-bookmarks-b2",
          prompt: "What protects access to a dedicated password manager?",
          choices: [
            { id: "a", text: "One strong master password or biometric unlock" },
            { id: "b", text: "Nothing — anyone can open it" },
            { id: "c", text: "A separate password for every saved password" },
            { id: "d", text: "It requires no protection at all" },
          ],
          correctChoiceId: "a",
          explanation: "A single strong master credential (or biometrics) protects the whole vault of saved passwords.",
        },
        {
          id: "cf-password-managers-bookmarks-b3",
          prompt: "When signing up for a new account, what option should you look for regarding the password field?",
          choices: [
            { id: "a", text: "\"Suggest strong password\"" },
            { id: "b", text: "\"Use my old password again\"" },
            { id: "c", text: "\"Skip password creation\"" },
            { id: "d", text: "\"Make password visible to everyone\"" },
          ],
          correctChoiceId: "a",
          explanation: "Accepting a browser-suggested strong password removes the temptation to reuse a familiar one.",
        },
        {
          id: "cf-password-managers-bookmarks-b4",
          prompt: "Why organize bookmarks into folders instead of one long list?",
          choices: [
            { id: "a", text: "It keeps bookmarks genuinely useful instead of becoming a junk drawer" },
            { id: "b", text: "Folders make pages load faster" },
            { id: "c", text: "Browsers require folders after ten bookmarks" },
            { id: "d", text: "There's no benefit to folders" },
          ],
          correctChoiceId: "a",
          explanation: "Folder organization mirrors the file-organization habit and keeps bookmarks findable as they accumulate.",
        },
        {
          id: "cf-password-managers-bookmarks-b5",
          prompt: "A predictable password pattern, like adding '1' to the same base word, is risky because:",
          choices: [
            { id: "a", text: "It's a well-known habit that's easier to guess, not a secure variation" },
            { id: "b", text: "It's actually the most secure method" },
            { id: "c", text: "It has no bearing on security" },
            { id: "d", text: "It only matters for very old accounts" },
          ],
          correctChoiceId: "a",
          explanation: "Predictable variations on a familiar password are well-known guessing patterns, not real added security.",
        },
        {
          id: "cf-password-managers-bookmarks-b6",
          prompt: "If a website you use gets breached, what determines how much risk you're exposed to?",
          choices: [
            { id: "a", text: "Whether that password was reused anywhere else" },
            { id: "b", text: "The color scheme of the website" },
            { id: "c", text: "How long ago you created the account" },
            { id: "d", text: "Nothing — breaches always expose every account equally" },
          ],
          correctChoiceId: "a",
          explanation: "A unique password limits the breach's impact to that one account; a reused password spreads the risk.",
        },
        {
          id: "cf-password-managers-bookmarks-b7",
          prompt: "What's a practical way to handle an already cluttered, unsorted bookmarks list?",
          choices: [
            { id: "a", text: "Create a couple of clear folders and sort new bookmarks going forward, cleaning up gradually" },
            { id: "b", text: "Delete every bookmark immediately with no plan" },
            { id: "c", text: "Leave it exactly as is forever" },
            { id: "d", text: "Sort all 200 entries perfectly in one sitting or not at all" },
          ],
          correctChoiceId: "a",
          explanation: "Gradual, forward-looking organization is more sustainable than an all-or-nothing approach.",
        },
        {
          id: "cf-password-managers-bookmarks-b8",
          prompt: "What extra features might a dedicated standalone password manager offer beyond a basic browser one?",
          choices: [
            { id: "a", text: "Secure notes, broader device syncing, and safe credential sharing" },
            { id: "b", text: "Nothing — they're functionally identical" },
            { id: "c", text: "The ability to reuse the same password everywhere safely" },
            { id: "d", text: "Automatic deletion of all saved passwords" },
          ],
          correctChoiceId: "a",
          explanation: "Dedicated password managers often extend beyond basic password saving with additional secure features.",
        },
      ],
      flashcards: [
        {
          id: "cf-password-managers-bookmarks-f1",
          front: "Main risk of reusing the same password everywhere?",
          back: "One breach can put every account using that password at risk",
        },
        {
          id: "cf-password-managers-bookmarks-f2",
          front: "What does a password manager do?",
          back: "Generates, stores, and auto-fills a unique password for each account",
        },
        {
          id: "cf-password-managers-bookmarks-f3",
          front: "Shortcut to bookmark the current page?",
          back: "Ctrl+D",
        },
        {
          id: "cf-password-managers-bookmarks-f4",
          front: "Reasonable starting point for password management?",
          back: "Your browser's built-in password manager (Edge, Chrome, etc.)",
        },
        {
          id: "cf-password-managers-bookmarks-f5",
          front: "Why organize bookmarks into folders?",
          back: "Keeps them genuinely useful instead of an unsearchable junk drawer",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-shortcuts-that-matter",
      name: "Keyboard Shortcuts That Actually Matter",
      objectives: ["CF-M7-O11", "CF-M7-O12"],
      prerequisites: ["cf-password-managers-bookmarks"],
      lesson: {
        title: "Keyboard Shortcuts That Actually Matter",
        content: `Keyboard shortcuts have a reputation for being either trivial party tricks or an overwhelming wall of hundreds of key combinations to memorize. Neither is accurate. A small, deliberately chosen set of shortcuts — maybe a dozen — covers the overwhelming majority of everyday friction, and learning just those saves real time every single day without turning you into someone who's memorized an entire cheat sheet.

Start with the ones you'll use constantly, all of which work across nearly every Windows app: Ctrl+C copies whatever is selected, Ctrl+V pastes it, and Ctrl+X cuts it (copies and removes it, ready to paste elsewhere) — these three alone replace an enormous amount of right-click-menu hunting. Ctrl+Z undoes your last action, which matters more than it sounds like it should, because it turns "I just made a mistake" from a moment of panic into a half-second correction. Ctrl+F opens a find/search box inside whatever app or webpage you're using, letting you jump straight to a word or phrase instead of scrolling and scanning manually. Ctrl+S saves the current file — building the habit of pressing it periodically, not just when you're about to close something, protects you from losing work to an unexpected crash or a browser tab closing by accident.

A second tier is specific to navigating Windows 11 itself. Alt+Tab switches between open windows — hold Alt and tap Tab repeatedly to cycle through everything currently open, which is faster than clicking through the taskbar when you have several windows going at once. Windows key + D minimizes everything at once, showing the desktop, and pressing it again brings everything back — useful for a quick, clean view without closing anything. Windows key + L locks your screen immediately, which matters anywhere you step away from a device even briefly, especially on a shared or public device; it's a genuinely important safety habit, not just a convenience. And, tying back directly to earlier topics in this module, Windows key + Shift + S captures a screenshot instantly, which you've now practiced for both error messages and everyday sharing.

One more worth knowing specifically: Ctrl+Shift+Esc opens Task Manager directly, without needing to right-click the taskbar first — useful the moment an app freezes and you need to close it without restarting the whole device, connecting straight back to the simple-checks ladder from Module 6.

The honest case for learning these isn't "shortcuts make you look impressive" — it's that each one removes a small, repeated friction point from your day, and those small removals add up across weeks and months far more than any single flashy trick would. You don't need all of them memorized by tomorrow; picking two or three to deliberately practice this week, and letting the rest become familiar through repetition, is a realistic, sustainable way to actually make them stick.`,
      },
      lightbulbMoment:
        "A dozen shortcuts cover almost all everyday friction — Windows key + L to lock your screen the moment you step away is a safety habit, not just a convenience.",
      keyFacts: [
        "Ctrl+C, Ctrl+V, Ctrl+X handle copy, paste, and cut across nearly every Windows app",
        "Ctrl+Z undoes your last action; Ctrl+S saves — building a habit of pressing it periodically protects your work",
        "Ctrl+F opens find/search inside an app or webpage to jump straight to a word or phrase",
        "Alt+Tab switches between open windows; Windows key + D shows the desktop",
        "Windows key + L locks your screen instantly — an important safety habit, not just convenience",
      ],
      guidedExample: {
        title: "A Realistic Shortcut-Building Week",
        steps: [
          "Pick two or three shortcuts to deliberately practice this week, not all twelve at once.",
          "Choose ones that solve a real friction you hit often — for example, Ctrl+F if you frequently scroll to find text.",
          "Each time you'd normally right-click or scroll manually, pause and use the shortcut instead, even if it feels slower at first.",
          "By the end of the week, notice whether reaching for it has become automatic.",
          "Add Windows key + L immediately, regardless of the rest, the next time you step away from a shared or public device.",
          "Add one or two new shortcuts the following week, building the set gradually rather than all at once.",
        ],
      },
      commonMistakes: [
        "Trying to memorize a huge list of shortcuts all at once instead of building a small set gradually",
        "Never using Ctrl+S until right before closing something, risking lost work from an unexpected crash",
        "Walking away from a shared or public device unlocked, skipping Windows key + L",
        "Restarting an entire frozen app the slow way instead of using Ctrl+Shift+Esc to close it via Task Manager",
      ],
      realWorldTraps: [
        "An unsaved document is lost when a browser crashes, because Ctrl+S was only used right before closing, not periodically",
        "A shared office computer is left unlocked while someone steps away, exposing whatever was open on screen to anyone nearby",
        "Someone scrolls manually through a long document searching for one word, unaware Ctrl+F would have found it instantly",
      ],
      realWorldScenario:
        "You're working on a shared document at a coffee shop and need to step away for two minutes. Instead of leaving your laptop open and unlocked, you press Windows key + L on your way up — a five-second habit that protects both your work and your accounts from anyone who might glance at an unattended, unlocked screen.",
      whenThisFails: [
        "If a shortcut doesn't seem to work in a specific app, it may use a slightly different combination for that one action — a quick search for 'app name + shortcut name' usually clarifies it fast",
        "If you keep forgetting to use a shortcut you've chosen to practice, try a physical reminder (a sticky note near your screen) for the first few days rather than giving up on it",
      ],
      teacherReflectionPrompt:
        "Pick two shortcuts from this topic you don't currently use, and explain out loud exactly which everyday friction each one would remove for you specifically.",
      quiz: [
        {
          id: "cf-shortcuts-that-matter-q1",
          prompt: "Which shortcut copies a selection, ready to paste elsewhere?",
          choices: [
            { id: "a", text: "Ctrl+C" },
            { id: "b", text: "Ctrl+Z" },
            { id: "c", text: "Ctrl+F" },
            { id: "d", text: "Alt+Tab" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+C is the standard copy shortcut across nearly every Windows app.",
          difficulty: "easy",
        },
        {
          id: "cf-shortcuts-that-matter-q2",
          prompt: "Why is Windows key + L considered a safety habit, not just a convenience?",
          choices: [
            { id: "a", text: "It locks your screen immediately, protecting an unattended device" },
            { id: "b", text: "It permanently deletes your files" },
            { id: "c", text: "It's only useful on personal devices, never shared ones" },
            { id: "d", text: "It has no real security benefit" },
          ],
          correctChoiceId: "a",
          explanation: "Locking your screen the moment you step away protects your open work and accounts on shared or public devices.",
          difficulty: "easy",
        },
        {
          id: "cf-shortcuts-that-matter-q3",
          prompt: "What does Ctrl+F do inside an app or webpage?",
          choices: [
            { id: "a", text: "Opens a find/search box to jump to a specific word or phrase" },
            { id: "b", text: "Saves the current file" },
            { id: "c", text: "Locks the screen" },
            { id: "d", text: "Switches between open windows" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+F is the standard find/search shortcut, avoiding manual scrolling and scanning.",
          difficulty: "easy",
        },
        {
          id: "cf-shortcuts-that-matter-q4",
          prompt: "An app has completely frozen and won't respond to clicks. What's the more targeted fix than restarting the whole device?",
          choices: [
            { id: "a", text: "Ctrl+Shift+Esc to open Task Manager and close just that app" },
            { id: "b", text: "Windows key + D" },
            { id: "c", text: "Ctrl+S" },
            { id: "d", text: "Ctrl+D" },
          ],
          correctChoiceId: "a",
          explanation: "Task Manager lets you close a single frozen app without restarting the entire device, connecting back to the Module 6 simple-checks ladder.",
          difficulty: "medium",
        },
        {
          id: "cf-shortcuts-that-matter-q5",
          prompt: "What's a realistic way to actually build a shortcut habit long-term?",
          choices: [
            { id: "a", text: "Practice two or three deliberately chosen ones at a time, adding more gradually" },
            { id: "b", text: "Memorize all twelve in a single sitting" },
            { id: "c", text: "Avoid shortcuts entirely since they're unnecessary" },
            { id: "d", text: "Only use shortcuts if you already consider yourself technical" },
          ],
          correctChoiceId: "a",
          explanation: "Gradual, deliberate practice of a small set is realistic and sustainable, unlike memorizing everything at once.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-shortcuts-that-matter-b1",
          prompt: "Which shortcut undoes your last action?",
          choices: [
            { id: "a", text: "Ctrl+Z" },
            { id: "b", text: "Ctrl+X" },
            { id: "c", text: "Ctrl+D" },
            { id: "d", text: "Windows key + L" },
          ],
          correctChoiceId: "a",
          explanation: "Ctrl+Z reverses your most recent action, turning a mistake into a quick correction.",
        },
        {
          id: "cf-shortcuts-that-matter-b2",
          prompt: "Which shortcut shows the desktop by minimizing all open windows at once?",
          choices: [
            { id: "a", text: "Windows key + D" },
            { id: "b", text: "Ctrl+V" },
            { id: "c", text: "Ctrl+F" },
            { id: "d", text: "Alt+F4" },
          ],
          correctChoiceId: "a",
          explanation: "Windows key + D toggles minimizing everything to reveal the desktop.",
        },
        {
          id: "cf-shortcuts-that-matter-b3",
          prompt: "Why build a habit of pressing Ctrl+S periodically, not just before closing a file?",
          choices: [
            { id: "a", text: "It protects your work from an unexpected crash or accidental tab closure" },
            { id: "b", text: "Ctrl+S has no effect until you close the file" },
            { id: "c", text: "It slows your computer down if used too often" },
            { id: "d", text: "It only matters for spreadsheets" },
          ],
          correctChoiceId: "a",
          explanation: "Frequent saving reduces how much work you'd lose if something unexpected happens.",
        },
        {
          id: "cf-shortcuts-that-matter-b4",
          prompt: "Which shortcut cycles through your currently open windows?",
          choices: [
            { id: "a", text: "Alt+Tab" },
            { id: "b", text: "Ctrl+C" },
            { id: "c", text: "Windows key + L" },
            { id: "d", text: "Ctrl+Z" },
          ],
          correctChoiceId: "a",
          explanation: "Holding Alt and tapping Tab cycles through open windows faster than using the taskbar.",
        },
        {
          id: "cf-shortcuts-that-matter-b5",
          prompt: "What is the safest habit when stepping away from a shared or public device, even briefly?",
          choices: [
            { id: "a", text: "Windows key + L to lock the screen" },
            { id: "b", text: "Leaving it exactly as is" },
            { id: "c", text: "Closing the lid without locking" },
            { id: "d", text: "Turning the volume down" },
          ],
          correctChoiceId: "a",
          explanation: "Locking immediately is the reliable way to protect an unattended screen from prying eyes.",
        },
        {
          id: "cf-shortcuts-that-matter-b6",
          prompt: "Ctrl+Shift+Esc connects most directly back to which earlier module's habit?",
          choices: [
            { id: "a", text: "Module 6's simple-checks ladder (restarting the one misbehaving app)" },
            { id: "b", text: "Module 5's phishing awareness" },
            { id: "c", text: "Module 7's zip file habit" },
            { id: "d", text: "It has no connection to earlier material" },
          ],
          correctChoiceId: "a",
          explanation: "Closing a single frozen app via Task Manager is the less-disruptive step from the simple-checks ladder.",
        },
        {
          id: "cf-shortcuts-that-matter-b7",
          prompt: "What's the realistic goal for learning shortcuts from this topic?",
          choices: [
            { id: "a", text: "Removing small, repeated daily friction points, not impressing anyone" },
            { id: "b", text: "Memorizing all of them within 24 hours" },
            { id: "c", text: "Using them only when someone is watching" },
            { id: "d", text: "There is no real practical benefit" },
          ],
          correctChoiceId: "a",
          explanation: "The value compounds from many small time savings across weeks and months, not from any single impressive trick.",
        },
        {
          id: "cf-shortcuts-that-matter-b8",
          prompt: "If a shortcut doesn't work the same way in a specific app, what's a reasonable next step?",
          choices: [
            { id: "a", text: "Search for that app's specific shortcut for the same action" },
            { id: "b", text: "Assume shortcuts never work in that app" },
            { id: "c", text: "Give up on shortcuts entirely" },
            { id: "d", text: "Reinstall the app" },
          ],
          correctChoiceId: "a",
          explanation: "Some apps use slightly different key combinations; a quick search clarifies the correct one for that app.",
        },
      ],
      flashcards: [
        {
          id: "cf-shortcuts-that-matter-f1",
          front: "Copy, paste, and cut shortcuts?",
          back: "Ctrl+C (copy), Ctrl+V (paste), Ctrl+X (cut)",
        },
        {
          id: "cf-shortcuts-that-matter-f2",
          front: "Undo your last action?",
          back: "Ctrl+Z",
        },
        {
          id: "cf-shortcuts-that-matter-f3",
          front: "Find/search inside an app or webpage?",
          back: "Ctrl+F",
        },
        {
          id: "cf-shortcuts-that-matter-f4",
          front: "Lock your screen instantly (a safety habit)?",
          back: "Windows key + L",
        },
        {
          id: "cf-shortcuts-that-matter-f5",
          front: "Open Task Manager directly to close a frozen app?",
          back: "Ctrl+Shift+Esc",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
  ],
};
