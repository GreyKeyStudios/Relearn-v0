import type { Domain } from "../../types";

/**
 * Computer Fundamentals — Module 6: Troubleshooting Mindset (Pathway F, FContent-2).
 * Standalone literacy track — not exam prep. Chains from cf-when-something-feels-wrong (Module 5).
 */
export const cfTroubleshootDomain: Domain = {
  id: "cf-troubleshoot",
  name: "Module 6 — Troubleshooting Mindset",
  topics: [
    {
      id: "cf-identify-and-reproduce",
      name: "Identify the Problem and Reproduce It",
      objectives: ["CF-M6-O1", "CF-M6-O2"],
      prerequisites: ["cf-when-something-feels-wrong"],
      lesson: {
        title: "Identify the Problem and Reproduce It",
        content: `Almost every troubleshooting story that ends badly starts the same way: someone starts clicking things before they actually know what is wrong. The single most valuable habit in this entire module costs nothing and takes thirty seconds — stop, and put the problem into one clear sentence before you touch anything else.

A vague description like "the internet is broken" or "it's not working" tells you almost nothing, and it tells anyone helping you even less. A useful description answers three questions: what were you trying to do, what actually happened instead, and when did you first notice it. "I tried to open a saved photo attachment in an email at 9:15 this morning, and Outlook shows a spinning circle that never finishes" is a completely different starting point than "email is broken." One of those sentences lets you start narrowing things down immediately. The other one leaves you guessing.

Once you have a clear sentence, the next step is reproduction: can you make the exact same thing happen again, on purpose? This matters more than people expect. A problem that happens once and never again is often a fluke — a temporary hiccup that resolves itself and isn't worth chasing. A problem you can reliably trigger every time is a real, fixable pattern. Try the same action again, the same way. Does it fail the same way? Does it fail every time, or only sometimes? Does it only happen with one specific file, one specific app, or one specific website, or does it happen everywhere?

This is also where "what changed" earns its place as one of the most powerful troubleshooting questions in existence. Nothing breaks in a vacuum. Did you install something new? Did an update run overnight? Did you move the file? Did someone else use this device? Most problems trace back to a change, even when that change feels unrelated. You do not need to find the exact cause yet — you just need to notice that something changed, and hold onto that thread, because it will matter later in this module when you start testing fixes one at a time.

It helps to think of yourself here less like someone frantically searching for a fix, and more like someone collecting evidence before deciding anything. A doctor does not prescribe treatment before describing the symptom. You are doing the same thing, just for a laptop instead of a body. The habit of pausing to describe and reproduce a problem clearly is not a delay tactic — it is the fastest path through everything that follows, because every later step in this module depends on knowing precisely what you are dealing with.

Windows 11 specifics: use Windows key + Shift + S to capture a screenshot of any error the moment it appears, before it disappears or you dismiss it by accident — you will use that screenshot again in a later topic in this module.`,
      },
      lightbulbMoment:
        "You cannot fix a problem you can't describe in one clear sentence — reproduction turns 'it's broken' into evidence you can actually act on.",
      keyFacts: [
        "A useful problem description names what you tried, what happened instead, and when it started",
        "Reproducing a problem on purpose tells you whether it's a real pattern or a one-time fluke",
        "Ask 'what changed recently' before anything else — most problems trace back to a change",
        "Notice whether the problem happens every time, sometimes, or only in one specific app/file/site",
        "Capture the moment with Windows key + Shift + S so evidence doesn't disappear when a dialog closes",
      ],
      guidedExample: {
        title: "From 'It's Broken' to a Usable Description",
        steps: [
          "Vague start: 'My laptop is acting weird.'",
          "Ask what you were doing: opening a spreadsheet attachment from an email.",
          "Ask what happened instead: the file opened but every column showed ##### instead of numbers.",
          "Ask when it started: first noticed this morning, worked fine yesterday afternoon.",
          "Try to reproduce it: open two other spreadsheets — same ##### symptom, so it's not one bad file.",
          "Final usable sentence: 'Since this morning, every spreadsheet shows ##### in number columns, on this one laptop.'",
        ],
      },
      commonMistakes: [
        "Starting to click random settings before describing what's actually wrong",
        "Assuming a one-time glitch is the same as a real, repeatable problem",
        "Skipping 'what changed' and jumping straight to blaming the whole device",
        "Closing an error message immediately instead of reading or screenshotting it first",
      ],
      realWorldTraps: [
        "Coworkers describe problems as 'it's just broken' and expect you to somehow know what they mean",
        "A problem that only happens on one specific website or file gets misdiagnosed as 'the whole internet is down'",
        "People restart the device immediately, which can erase the exact evidence (open windows, error text) you needed to reproduce it",
      ],
      realWorldScenario:
        "A friend texts you: 'my printer won't work, help.' Instead of guessing, you ask three questions: what were you trying to print, what happened when you clicked print, and does it happen every time or just once? Within two replies you learn it only fails on one specific PDF, works fine on everything else, and started right after they downloaded that PDF from an email. That's not 'the printer is broken' — that's a specific, testable clue you can actually act on.",
      whenThisFails: [
        "If you truly cannot reproduce the problem after several honest attempts, write down exactly what you tried and move on — some issues are transient, and that's a valid outcome, not a failure",
        "If the problem only happens on someone else's device, ask them the same three questions rather than assuming your own experience applies",
      ],
      teacherReflectionPrompt:
        "Describe a real tech problem you've had recently in one clear sentence, using the what-were-you-doing / what-happened-instead / when-it-started structure.",
      quiz: [
        {
          id: "cf-identify-and-reproduce-q1",
          prompt: "Which of these is the most useful problem description?",
          choices: [
            { id: "a", text: "\"The computer is broken.\"" },
            { id: "b", text: "\"Since this morning, Outlook spins forever when I open any photo attachment.\"" },
            { id: "c", text: "\"Nothing works.\"" },
            { id: "d", text: "\"It's doing something weird.\"" },
          ],
          correctChoiceId: "b",
          explanation:
            "A useful description names what you tried, what happened instead, and when it started — not a vague catch-all complaint.",
          difficulty: "easy",
        },
        {
          id: "cf-identify-and-reproduce-q2",
          prompt: "Why does reproducing a problem on purpose matter?",
          choices: [
            { id: "a", text: "It doesn't — you should fix things immediately" },
            { id: "b", text: "It tells you whether it's a real, repeatable pattern or a one-time fluke" },
            { id: "c", text: "It's only useful for IT professionals" },
            { id: "d", text: "It guarantees the problem will never happen again" },
          ],
          correctChoiceId: "b",
          explanation: "Reproduction separates real, fixable patterns from one-off glitches that may resolve on their own.",
          difficulty: "easy",
        },
        {
          id: "cf-identify-and-reproduce-q3",
          prompt: "What question should you ask early, before guessing at causes?",
          choices: [
            { id: "a", text: "\"How much did this device cost?\"" },
            { id: "b", text: "\"What changed recently?\"" },
            { id: "c", text: "\"Who designed this app?\"" },
            { id: "d", text: "\"What color is the case?\"" },
          ],
          correctChoiceId: "b",
          explanation: "Most problems trace back to a recent change — an install, update, or edit — even when it seems unrelated.",
          difficulty: "medium",
        },
        {
          id: "cf-identify-and-reproduce-q4",
          prompt: "A problem only happens when you open one specific file, never with any other file. What does that tell you?",
          choices: [
            { id: "a", text: "The whole device is broken" },
            { id: "b", text: "The problem is likely tied to that one file, not the device generally" },
            { id: "c", text: "Nothing useful" },
            { id: "d", text: "The internet connection is at fault" },
          ],
          correctChoiceId: "b",
          explanation: "Narrowing scope to one file, app, or site is exactly the kind of pattern reproduction is meant to reveal.",
          difficulty: "medium",
        },
        {
          id: "cf-identify-and-reproduce-q5",
          prompt: "What is the Windows 11 shortcut for capturing a screenshot of an error before it disappears?",
          choices: [
            { id: "a", text: "Windows key + Shift + S" },
            { id: "b", text: "Ctrl + Alt + Delete" },
            { id: "c", text: "Windows key + L" },
            { id: "d", text: "Alt + F4" },
          ],
          correctChoiceId: "a",
          explanation: "Windows key + Shift + S opens the snipping tool for a quick screenshot capture.",
          difficulty: "easy",
        },
      ],
      questionBank: [
        {
          id: "cf-identify-and-reproduce-b1",
          prompt: "What three things should a useful problem description include?",
          choices: [
            { id: "a", text: "The device's purchase price, color, and brand" },
            { id: "b", text: "What you tried, what happened instead, and when it started" },
            { id: "c", text: "Only the error code" },
            { id: "d", text: "A guess at the root cause" },
          ],
          correctChoiceId: "b",
          explanation: "Those three elements turn a vague complaint into something you can actually act on.",
        },
        {
          id: "cf-identify-and-reproduce-b2",
          prompt: "A problem happens once and never again despite repeated attempts to trigger it. What is this most likely?",
          choices: [
            { id: "a", text: "A permanent hardware failure" },
            { id: "b", text: "A one-time fluke, not a repeatable pattern" },
            { id: "c", text: "Proof the whole device needs replacing" },
            { id: "d", text: "A sign the internet is down everywhere" },
          ],
          correctChoiceId: "b",
          explanation: "Problems that can't be reproduced are often transient and not worth extensive chasing.",
        },
        {
          id: "cf-identify-and-reproduce-b3",
          prompt: "Why should you avoid closing an error message immediately?",
          choices: [
            { id: "a", text: "Error messages are always dangerous to read" },
            { id: "b", text: "You lose evidence you may need later" },
            { id: "c", text: "It's required by Windows 11" },
            { id: "d", text: "It has no effect either way" },
          ],
          correctChoiceId: "b",
          explanation: "Reading or screenshotting the exact error text preserves evidence you'll use in later troubleshooting steps.",
        },
        {
          id: "cf-identify-and-reproduce-b4",
          prompt: "Which is the better first move when something goes wrong?",
          choices: [
            { id: "a", text: "Restart the device immediately" },
            { id: "b", text: "Pause and describe the problem clearly first" },
            { id: "c", text: "Reinstall everything" },
            { id: "d", text: "Ignore it and hope it resolves itself" },
          ],
          correctChoiceId: "b",
          explanation: "A clear description is the foundation every later troubleshooting step depends on.",
        },
        {
          id: "cf-identify-and-reproduce-b5",
          prompt: "\"What changed recently\" is a powerful question because:",
          choices: [
            { id: "a", text: "Most problems trace back to a change, even an unrelated-seeming one" },
            { id: "b", text: "It's the only question that matters" },
            { id: "c", text: "Nothing ever changes on a computer" },
            { id: "d", text: "It only applies to hardware problems" },
          ],
          correctChoiceId: "a",
          explanation: "Installs, updates, and edits are common hidden triggers behind problems that seem to appear out of nowhere.",
        },
        {
          id: "cf-identify-and-reproduce-b6",
          prompt: "A coworker says 'the internet is down.' What's a better first question to ask them?",
          choices: [
            { id: "a", text: "\"What were you trying to do, and what happened instead?\"" },
            { id: "b", text: "\"Have you tried turning it off and on?\"" },
            { id: "c", text: "\"What's your favorite website?\"" },
            { id: "d", text: "\"Is your computer new?\"" },
          ],
          correctChoiceId: "a",
          explanation: "Getting a precise description first avoids wasted troubleshooting on the wrong problem.",
        },
        {
          id: "cf-identify-and-reproduce-b7",
          prompt: "You can only reproduce a problem with one specific app, never with anything else. This narrows the issue to:",
          choices: [
            { id: "a", text: "The entire operating system" },
            { id: "b", text: "That specific app, not the device generally" },
            { id: "c", text: "The power supply" },
            { id: "d", text: "Nothing — it's random" },
          ],
          correctChoiceId: "b",
          explanation: "Scope narrowing is one of the main payoffs of deliberately trying to reproduce a problem.",
        },
        {
          id: "cf-identify-and-reproduce-b8",
          prompt: "Why is 'nothing works' considered an unhelpful description?",
          choices: [
            { id: "a", text: "It's too short to type" },
            { id: "b", text: "It gives no information about what was tried, what happened, or when" },
            { id: "c", text: "It's technically incorrect" },
            { id: "d", text: "It's only a problem for beginners" },
          ],
          correctChoiceId: "b",
          explanation: "Vague catch-all phrases skip the exact details that make a description actionable.",
        },
      ],
      flashcards: [
        {
          id: "cf-identify-and-reproduce-f1",
          front: "Three parts of a useful problem description?",
          back: "What you tried, what happened instead, and when it started",
        },
        {
          id: "cf-identify-and-reproduce-f2",
          front: "Why reproduce a problem on purpose?",
          back: "To tell a real, repeatable pattern apart from a one-time fluke",
        },
        {
          id: "cf-identify-and-reproduce-f3",
          front: "Powerful early troubleshooting question?",
          back: "\"What changed recently?\" — most problems trace back to a change",
        },
        {
          id: "cf-identify-and-reproduce-f4",
          front: "Windows 11 screenshot shortcut for capturing an error?",
          back: "Windows key + Shift + S",
        },
        {
          id: "cf-identify-and-reproduce-f5",
          front: "Problem only happens with one file — what does that suggest?",
          back: "The issue is likely tied to that file, not the whole device",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-simple-checks-first",
      name: "Try the Simple Checks First",
      objectives: ["CF-M6-O3", "CF-M6-O4"],
      prerequisites: ["cf-identify-and-reproduce"],
      lesson: {
        title: "Try the Simple Checks First",
        content: `There is a reason IT support asks "have you tried turning it off and on again" so often that it has become a joke: it works, constantly, for reasons that have nothing to do with laziness. Once you have a clear, reproducible description of a problem from the last topic, the next habit is resisting the urge to jump to the most dramatic fix available. Complex problems are rare. Boring problems are common. Start boring.

The simple-checks ladder looks roughly the same for almost every everyday tech problem, and it moves from least disruptive to most disruptive. First: is the thing actually on, plugged in, and connected? This sounds insulting to even mention, but a loose cable, a muted volume slider, an unplugged monitor, or Wi-Fi accidentally toggled off in Windows 11's quick settings solves an enormous share of "broken" reports the moment someone actually looks. Second: close and reopen the one app that's misbehaving, rather than restarting the whole device. Many app-layer glitches (a frozen window, a stuck spinner, a menu that won't respond) clear up the moment the single app restarts, and you keep every other window you had open. Third, if reopening the app doesn't help, restart the device itself — this clears out memory issues and stuck background processes that a single app restart can't reach. Fourth: check whether the problem is actually a connectivity issue wearing a costume — is Wi-Fi connected, is airplane mode off, does another website or app also fail?

The reason to move through this ladder in order, rather than skipping straight to reinstalling something or calling for help, is that each step costs you almost nothing and rules out an entire category of cause. Checking a cable takes five seconds. Reinstalling software takes twenty minutes and might not even be related to the actual problem. Skipping straight to the expensive fix wastes far more time than working the ladder in order — and often the expensive fix wasn't even necessary.

There's a psychological trap worth naming directly: simple checks can feel embarrassing, as if trying them means you're admitting you don't know anything more advanced. The opposite is true. Every experienced IT professional runs through this exact ladder first, every single time, because it is the fastest, cheapest way to eliminate obvious causes before investing real effort. Skipping it isn't a sign of sophistication — it's usually a sign of impatience, and impatience is what turns a five-second fix into a twenty-minute detour.

One more habit worth building here: after each simple check, go back and test whether the original problem is actually gone — using the exact reproduction steps from the last topic. Don't assume a restart fixed something; confirm it. That confirmation step is what keeps you from declaring victory prematurely, only to have the same issue reappear an hour later.`,
      },
      lightbulbMoment:
        "Work from least disruptive to most disruptive — checking a cable costs five seconds, so it always goes before a twenty-minute reinstall.",
      keyFacts: [
        "The simple-checks ladder: power/connection → restart the one app → restart the device → check connectivity",
        "Each simple check costs almost nothing and rules out an entire category of possible cause",
        "Skipping simple checks to jump to a dramatic fix usually wastes more time, not less",
        "Simple checks aren't a sign of low skill — experienced IT staff run them first every time",
        "Always re-test using your original reproduction steps to confirm a fix actually worked",
      ],
      guidedExample: {
        title: "Working the Ladder on a 'Frozen' App",
        steps: [
          "Problem confirmed from last topic: a spreadsheet app freezes every time you open a specific file.",
          "Check 1 (power/connection): device is plugged in and awake — not the cause here.",
          "Check 2 (restart the app): close the spreadsheet app fully and reopen it — freeze happens again.",
          "Check 3 (restart the device): restart the laptop, reopen the same file — freeze happens again.",
          "Check 4 (connectivity): try opening a different, unrelated spreadsheet file — it opens fine.",
          "Conclusion: the ladder ruled out the device and the app in general — the problem is specific to that one file.",
        ],
      },
      commonMistakes: [
        "Jumping straight to reinstalling or replacing something before checking power, cables, or connections",
        "Restarting the whole device for a problem that only affects one app",
        "Assuming a restart fixed the issue without re-testing using the original reproduction steps",
        "Treating simple checks as beneath you or a waste of time",
      ],
      realWorldTraps: [
        "\"Have you tried turning it off and on again?\" becomes an eye-roll line, even though it's the correct first step most of the time",
        "People restart a whole shared office PC for an issue that only affected one browser tab, disrupting everyone else's open work",
        "A quick settings toggle (Wi-Fi, airplane mode, volume) gets accidentally flipped and is blamed on 'the network' or 'the computer' instead of checked directly",
      ],
      realWorldScenario:
        "A relative calls, certain their laptop is 'completely dead' because the screen is black. Instead of assuming hardware failure, you walk the ladder over the phone: is it plugged in (yes), is the screen brightness turned all the way down (they check — it was), problem solved in under two minutes without a single technical fix, just working the ladder in order instead of panicking.",
      whenThisFails: [
        "If you've worked the entire ladder and the problem persists exactly as before, that's valuable information — it means the cause is likely more specific (one file, one setting, one account) and worth investigating with the next topic's error-reading skills",
        "If restarting the device fixes the symptom but it returns within a day, note that pattern — a fix that doesn't hold is itself a clue worth writing down",
      ],
      teacherReflectionPrompt:
        "Walk through the four-step simple-checks ladder out loud, in order, and explain in your own words why the order matters.",
      quiz: [
        {
          id: "cf-simple-checks-first-q1",
          prompt: "What is the correct order for the simple-checks ladder?",
          choices: [
            { id: "a", text: "Reinstall everything → restart device → check power → restart app" },
            { id: "b", text: "Power/connection → restart the app → restart the device → check connectivity" },
            { id: "c", text: "Call IT → restart device → check power" },
            { id: "d", text: "There is no useful order — try things randomly" },
          ],
          correctChoiceId: "b",
          explanation: "The ladder moves from least disruptive (checking power/connection) to more disruptive (restarting the device).",
          difficulty: "easy",
        },
        {
          id: "cf-simple-checks-first-q2",
          prompt: "Why restart just the one misbehaving app instead of the whole device first?",
          choices: [
            { id: "a", text: "It's always required by Windows 11" },
            { id: "b", text: "It's less disruptive and often clears app-layer glitches without losing other open work" },
            { id: "c", text: "Restarting an app never works" },
            { id: "d", text: "It takes longer than restarting the device" },
          ],
          correctChoiceId: "b",
          explanation: "App restarts are quicker and preserve your other open windows, and they solve many issues on their own.",
          difficulty: "easy",
        },
        {
          id: "cf-simple-checks-first-q3",
          prompt: "After restarting a device to fix a problem, what should you do next?",
          choices: [
            { id: "a", text: "Assume it's fixed and move on" },
            { id: "b", text: "Re-test using your original reproduction steps to confirm" },
            { id: "c", text: "Restart it again immediately" },
            { id: "d", text: "Uninstall the app just in case" },
          ],
          correctChoiceId: "b",
          explanation: "Confirming with the same reproduction steps prevents falsely declaring victory too early.",
          difficulty: "medium",
        },
        {
          id: "cf-simple-checks-first-q4",
          prompt: "Why is skipping straight to a dramatic fix usually a bad idea?",
          choices: [
            { id: "a", text: "Dramatic fixes are illegal" },
            { id: "b", text: "It often wastes more time than working the ladder in order would have" },
            { id: "c", text: "It always breaks something else" },
            { id: "d", text: "There's no reason — it's just a personal preference" },
          ],
          correctChoiceId: "b",
          explanation: "Simple checks cost almost nothing; skipping them to jump straight to a big fix often costs far more time overall.",
          difficulty: "medium",
        },
        {
          id: "cf-simple-checks-first-q5",
          prompt: "A problem happens with one specific file but not with other similar files after you've worked the full ladder. What does this suggest?",
          choices: [
            { id: "a", text: "The device is completely broken" },
            { id: "b", text: "The cause is likely specific to that one file, not the device or app generally" },
            { id: "c", text: "You should restart again" },
            { id: "d", text: "Nothing — this is inconclusive" },
          ],
          correctChoiceId: "b",
          explanation: "Ruling out the device and app in general through the ladder narrows the likely cause to something more specific.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-simple-checks-first-b1",
          prompt: "What's the first thing to check in the simple-checks ladder?",
          choices: [
            { id: "a", text: "Power, cables, and connection" },
            { id: "b", text: "Whether to buy a new device" },
            { id: "c", text: "The device's warranty status" },
            { id: "d", text: "Reinstalling the operating system" },
          ],
          correctChoiceId: "a",
          explanation: "Power and connection checks are the least disruptive and rule out an entire category of cause instantly.",
        },
        {
          id: "cf-simple-checks-first-b2",
          prompt: "Which is a lower-disruption fix: restarting one app, or restarting the whole device?",
          choices: [
            { id: "a", text: "Restarting one app" },
            { id: "b", text: "Restarting the whole device" },
            { id: "c", text: "They're equally disruptive" },
            { id: "d", text: "Neither is ever appropriate" },
          ],
          correctChoiceId: "a",
          explanation: "Restarting a single app preserves your other open work and is a smaller, faster step.",
        },
        {
          id: "cf-simple-checks-first-b3",
          prompt: "Why should you re-test after applying a simple fix?",
          choices: [
            { id: "a", text: "To confirm the original problem is actually gone, not assumed fixed" },
            { id: "b", text: "Because Windows 11 requires a second check" },
            { id: "c", text: "It's unnecessary busywork" },
            { id: "d", text: "To make the device slower on purpose" },
          ],
          correctChoiceId: "a",
          explanation: "Confirming with your original reproduction steps avoids falsely declaring the problem solved.",
        },
        {
          id: "cf-simple-checks-first-b4",
          prompt: "Someone says checking cables and power feels 'too basic' to bother with. What's the better mindset?",
          choices: [
            { id: "a", text: "They're right — skip it and go straight to advanced fixes" },
            { id: "b", text: "Experienced IT staff run these checks first every time, because they're fast and rule out common causes" },
            { id: "c", text: "Simple checks are only for beginners" },
            { id: "d", text: "Simple checks are a myth" },
          ],
          correctChoiceId: "b",
          explanation: "Simple checks are standard professional practice, not a sign of low skill.",
        },
        {
          id: "cf-simple-checks-first-b5",
          prompt: "A Wi-Fi icon shows disconnected. What's the fastest reasonable first step?",
          choices: [
            { id: "a", text: "Buy a new router immediately" },
            { id: "b", text: "Check whether Wi-Fi or airplane mode was accidentally toggled off" },
            { id: "c", text: "Reinstall the operating system" },
            { id: "d", text: "Call your internet provider before checking anything locally" },
          ],
          correctChoiceId: "b",
          explanation: "A toggled setting is a common, five-second-to-check cause before assuming a bigger network problem.",
        },
        {
          id: "cf-simple-checks-first-b6",
          prompt: "Why move through the ladder from least to most disruptive?",
          choices: [
            { id: "a", text: "Each cheap step rules out a cause before you invest in an expensive one" },
            { id: "b", text: "There's no real reason for the order" },
            { id: "c", text: "Disruptive steps should always come first" },
            { id: "d", text: "It's only a suggestion, order never matters" },
          ],
          correctChoiceId: "a",
          explanation: "Cheap checks eliminate common causes quickly, saving the expensive steps for when they're truly needed.",
        },
        {
          id: "cf-simple-checks-first-b7",
          prompt: "Restarting a shared office PC to fix a single browser tab issue is an example of:",
          choices: [
            { id: "a", text: "The correct, minimal fix" },
            { id: "b", text: "Skipping a less disruptive option (closing the tab or app) that likely would have worked" },
            { id: "c", text: "Something that never happens in real workplaces" },
            { id: "d", text: "A required step" },
          ],
          correctChoiceId: "b",
          explanation: "A full device restart disrupts everyone else's open work when a smaller fix might have solved it.",
        },
        {
          id: "cf-simple-checks-first-b8",
          prompt: "What does it mean if a problem persists after working through the entire simple-checks ladder?",
          choices: [
            { id: "a", text: "The ladder failed and should be abandoned" },
            { id: "b", text: "The cause is likely more specific and worth deeper investigation" },
            { id: "c", text: "The device must be replaced immediately" },
            { id: "d", text: "Nothing — it's random" },
          ],
          correctChoiceId: "b",
          explanation: "Ruling out common causes through the ladder is valuable information that narrows where to look next.",
        },
      ],
      flashcards: [
        {
          id: "cf-simple-checks-first-f1",
          front: "Order of the simple-checks ladder?",
          back: "Power/connection → restart the app → restart the device → check connectivity",
        },
        {
          id: "cf-simple-checks-first-f2",
          front: "Why restart one app before the whole device?",
          back: "Less disruptive — preserves other open work and often fixes app-layer glitches",
        },
        {
          id: "cf-simple-checks-first-f3",
          front: "After a fix, what should you always do?",
          back: "Re-test using your original reproduction steps to confirm it actually worked",
        },
        {
          id: "cf-simple-checks-first-f4",
          front: "Why do simple checks matter even though they feel too basic?",
          back: "They're fast, cheap, and rule out common causes before you invest in bigger fixes",
        },
        {
          id: "cf-simple-checks-first-f5",
          front: "Problem survives the whole ladder — what does that tell you?",
          back: "The cause is likely more specific and needs deeper investigation, not a bigger version of the same fix",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-read-error-messages",
      name: "Read Error Messages (Don't Panic-Click)",
      objectives: ["CF-M6-O5", "CF-M6-O6"],
      prerequisites: ["cf-simple-checks-first"],
      lesson: {
        title: "Read Error Messages (Don't Panic-Click)",
        content: `An error message is not an insult, and it is not a sign of failure — it is one of the most useful pieces of troubleshooting information you will ever be handed, and most people click it away before reading a single word. That single habit, pausing to actually read the text, separates people who solve their own problems quickly from people who stay stuck and frustrated.

Start by noticing that not all error messages are equally useful, and learning to tell the difference matters. A specific error names something concrete: a file name, a code, an app name, a reason ("this file is open in another program," "the connection timed out," "you don't have permission to open this file"). A generic error just says something failed, with no details ("something went wrong," a plain red X, a blank dialog). Specific errors are gifts — they usually tell you exactly what to try next. Generic errors are frustrating, but they still tell you something happened, which rules out "nothing is happening at all."

When you see an error, resist the reflex to immediately click "OK" or the red X to make it disappear. Instead: read the full sentence, not just the first few words. Note whether there's an error code or file name mentioned — these are searchable. And, building on the last topic's screenshot habit, capture it with Windows key + Shift + S before it vanishes, especially if it appears only briefly or you suspect you'll see it again.

Once you have the exact wording, searching it becomes far more useful than searching a vague description of the symptom. Typing the exact error text (or code) into a search engine, in quotation marks if it's a distinctive phrase, tends to surface other people who hit the identical problem, often with a specific fix. This is not "cheating" or a sign you don't understand computers — it is standard practice for IT professionals at every experience level, because no one memorizes every possible error message, and no one is expected to.

There's a particular trap worth naming: some error messages are designed to create false urgency, especially fake pop-ups claiming your device is infected and demanding you call a phone number or download something immediately. A real Windows 11 system error never demands you call a number or pay money on the spot. If an "error" message is pushing you toward urgency, fear, or an unexpected payment, treat that as a red flag rather than a real system error — this connects directly back to what you learned in Module 5 about things that feel wrong.

Finally, once you've read and understood an error, connect it back to the "what changed" question from earlier in this module. An error that mentions a specific app often points to that app's recent update. An error about a file often points to how that file was created or where it's stored. Reading carefully turns a scary red box into a specific, searchable, often solvable clue.`,
      },
      lightbulbMoment:
        "A specific error message is a gift, not an insult — reading the exact wording turns a scary red box into a searchable clue.",
      keyFacts: [
        "Specific errors (file names, codes, reasons) are more useful than generic ones (\"something went wrong\")",
        "Read the full error sentence before clicking OK or the X — don't dismiss it on reflex",
        "Screenshot errors with Windows key + Shift + S before they disappear",
        "Searching the exact error text or code often surfaces others who hit the identical problem",
        "Fake urgency (call this number, pay now, your device is infected) is a red flag, not a real Windows error",
      ],
      guidedExample: {
        title: "Turning an Error Into a Searchable Clue",
        steps: [
          "A dialog appears: \"This file is already open in another program. Close it and try again.\"",
          "Resist the urge to click OK immediately — read the full sentence first.",
          "Screenshot it with Windows key + Shift + S in case it reappears differently later.",
          "Identify the specific clue: the file is already open somewhere, not corrupted or missing.",
          "Check for the app already open in the taskbar, close it, and try again.",
          "Confirm the fix using your original reproduction steps from earlier in this module.",
        ],
      },
      commonMistakes: [
        "Clicking OK or the X the instant an error appears without reading the text",
        "Treating a generic error the same as a specific one, without noticing the difference",
        "Searching a vague description ('file won't open') instead of the exact error text",
        "Trusting an urgent pop-up demanding a phone call or payment as a real system error",
      ],
      realWorldTraps: [
        "A fake 'your PC is infected, call this number now' pop-up mimics urgency to bypass careful reading",
        "IT support asks 'what did the error say exactly?' and the honest answer is 'I didn't read it, I just closed it'",
        "A specific, helpful error code gets ignored because it 'looks too technical,' when it's actually the fastest path to a fix",
      ],
      realWorldScenario:
        "You try to delete a folder and get a message saying it's in use by another program. Panic-clicking past this and trying again five times just repeats the same failure. Reading it carefully tells you exactly what to do instead: find and close whatever program has a file open inside that folder, then delete it once, successfully, on the first try.",
      whenThisFails: [
        "If an error message is too generic to act on, note the exact time and what you were doing right before it, and try to reproduce it again — sometimes a second occurrence includes more detail",
        "If searching the exact error text finds nothing useful, that's a sign to move on to writing down what you've tried and asking for help, which the next topics in this module cover",
      ],
      teacherReflectionPrompt:
        "Recall a real error message you've seen and dismissed quickly in the past — what would reading it fully and searching the exact text have told you?",
      quiz: [
        {
          id: "cf-read-error-messages-q1",
          prompt: "What should you do the moment an error message appears?",
          choices: [
            { id: "a", text: "Click OK or the X immediately to dismiss it" },
            { id: "b", text: "Read the full text before dismissing it" },
            { id: "c", text: "Restart the device without reading it" },
            { id: "d", text: "Ignore it and try the same action again right away" },
          ],
          correctChoiceId: "b",
          explanation: "Reading the full message first preserves details you'll need for the next troubleshooting step.",
          difficulty: "easy",
        },
        {
          id: "cf-read-error-messages-q2",
          prompt: "What makes an error message 'specific' rather than 'generic'?",
          choices: [
            { id: "a", text: "It's written in a bigger font" },
            { id: "b", text: "It names concrete details like a file, code, or reason" },
            { id: "c", text: "It appears in red" },
            { id: "d", text: "It's longer than one sentence" },
          ],
          correctChoiceId: "b",
          explanation: "Specific errors name concrete details, which usually point directly at what to try next.",
          difficulty: "easy",
        },
        {
          id: "cf-read-error-messages-q3",
          prompt: "Why search the exact error text or code instead of a vague description?",
          choices: [
            { id: "a", text: "It's more likely to surface others who hit the identical problem" },
            { id: "b", text: "It's required by Windows 11" },
            { id: "c", text: "Vague searches always work better" },
            { id: "d", text: "It has no real benefit" },
          ],
          correctChoiceId: "a",
          explanation: "Exact wording narrows a search to people who encountered the same specific issue.",
          difficulty: "medium",
        },
        {
          id: "cf-read-error-messages-q4",
          prompt: "A pop-up says your PC is infected and demands you call a phone number immediately. What should you do?",
          choices: [
            { id: "a", text: "Call the number right away" },
            { id: "b", text: "Treat it as a red flag — real Windows errors don't demand calls or payment" },
            { id: "c", text: "Enter your payment information to fix it" },
            { id: "d", text: "Assume it's a normal system update" },
          ],
          correctChoiceId: "b",
          explanation: "Fake urgency pushing toward a call or payment is a scam pattern, not a genuine Windows error.",
          difficulty: "medium",
        },
        {
          id: "cf-read-error-messages-q5",
          prompt: "An error mentions a specific app just after that app updated. What's the most useful next connection to make?",
          choices: [
            { id: "a", text: "None — the timing is a coincidence" },
            { id: "b", text: "Link the error back to the recent update ('what changed') from earlier in this module" },
            { id: "c", text: "Assume the whole device is failing" },
            { id: "d", text: "Delete the app immediately without reading further" },
          ],
          correctChoiceId: "b",
          explanation: "Connecting an error to a recent change is one of the fastest ways to narrow down a cause.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-read-error-messages-b1",
          prompt: "What is the most useful first reaction to an error message?",
          choices: [
            { id: "a", text: "Read it fully before doing anything else" },
            { id: "b", text: "Dismiss it as fast as possible" },
            { id: "c", text: "Assume it's always a scam" },
            { id: "d", text: "Restart the device without reading it" },
          ],
          correctChoiceId: "a",
          explanation: "Reading the full message preserves details needed for the next troubleshooting step.",
        },
        {
          id: "cf-read-error-messages-b2",
          prompt: "Which of these is a specific, useful error detail?",
          choices: [
            { id: "a", text: "\"Something went wrong\"" },
            { id: "b", text: "\"File is open in another program\"" },
            { id: "c", text: "A blank red X with no text" },
            { id: "d", text: "A beep with no dialog" },
          ],
          correctChoiceId: "b",
          explanation: "Naming a concrete cause (the file being open elsewhere) points directly to a fix.",
        },
        {
          id: "cf-read-error-messages-b3",
          prompt: "What tool captures an error before it disappears?",
          choices: [
            { id: "a", text: "Windows key + Shift + S" },
            { id: "b", text: "Ctrl + Z" },
            { id: "c", text: "Alt + Tab" },
            { id: "d", text: "Windows key + L" },
          ],
          correctChoiceId: "a",
          explanation: "Windows key + Shift + S opens the snipping tool for a quick screenshot of the exact error.",
        },
        {
          id: "cf-read-error-messages-b4",
          prompt: "Why is searching an exact error code often more effective than describing the symptom?",
          choices: [
            { id: "a", text: "It surfaces others who had the identical, specific problem" },
            { id: "b", text: "Error codes are always fake" },
            { id: "c", text: "Symptom descriptions are always more accurate" },
            { id: "d", text: "There's no difference" },
          ],
          correctChoiceId: "a",
          explanation: "Exact codes and phrases narrow search results to the same specific issue other people hit.",
        },
        {
          id: "cf-read-error-messages-b5",
          prompt: "A pop-up urgently demands payment to 'fix' your device right now. This is best treated as:",
          choices: [
            { id: "a", text: "A normal Windows update prompt" },
            { id: "b", text: "A likely scam — real system errors don't demand urgent payment" },
            { id: "c", text: "Something to comply with immediately" },
            { id: "d", text: "A billing issue with your internet provider" },
          ],
          correctChoiceId: "b",
          explanation: "Urgency plus a payment or call demand is a classic scam pattern covered in Module 5.",
        },
        {
          id: "cf-read-error-messages-b6",
          prompt: "Generic errors (like a blank red X) are still useful because:",
          choices: [
            { id: "a", text: "They confirm something happened, ruling out total silence" },
            { id: "b", text: "They always name the exact cause" },
            { id: "c", text: "They're more useful than specific errors" },
            { id: "d", text: "They never occur in real software" },
          ],
          correctChoiceId: "a",
          explanation: "Even a vague error confirms an event occurred, which is more than no feedback at all.",
        },
        {
          id: "cf-read-error-messages-b7",
          prompt: "Reading an error carefully and connecting it to a recent app update illustrates which earlier troubleshooting habit?",
          choices: [
            { id: "a", text: "\"What changed recently?\"" },
            { id: "b", text: "Restarting the device first" },
            { id: "c", text: "Ignoring the problem" },
            { id: "d", text: "Buying new hardware" },
          ],
          correctChoiceId: "a",
          explanation: "Linking an error to a recent change reuses the reproduction-and-change habit from earlier in this module.",
        },
        {
          id: "cf-read-error-messages-b8",
          prompt: "Why shouldn't you assume every technical-looking error is a scam?",
          choices: [
            { id: "a", text: "Real, legitimate error messages with codes and file names are common and useful" },
            { id: "b", text: "All errors are scams" },
            { id: "c", text: "Windows never shows real errors" },
            { id: "d", text: "There's no way to tell the difference" },
          ],
          correctChoiceId: "a",
          explanation: "Most specific system errors are genuine and helpful; the red flag is urgency toward calls or payment, not technical detail itself.",
        },
      ],
      flashcards: [
        {
          id: "cf-read-error-messages-f1",
          front: "First reaction to any error message?",
          back: "Read the full text before dismissing it",
        },
        {
          id: "cf-read-error-messages-f2",
          front: "Specific vs. generic error — which is more useful?",
          back: "Specific — it names a concrete detail like a file, code, or reason",
        },
        {
          id: "cf-read-error-messages-f3",
          front: "Why search the exact error text?",
          back: "It's more likely to surface others who hit the identical, specific problem",
        },
        {
          id: "cf-read-error-messages-f4",
          front: "Red flag that an 'error' pop-up is a scam?",
          back: "It demands urgent payment or a phone call — real system errors don't do that",
        },
        {
          id: "cf-read-error-messages-f5",
          front: "How to capture a fast-disappearing error?",
          back: "Windows key + Shift + S to screenshot it immediately",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-one-change-document",
      name: "One Change at a Time — and Write It Down",
      objectives: ["CF-M6-O7", "CF-M6-O8"],
      prerequisites: ["cf-read-error-messages"],
      lesson: {
        title: "One Change at a Time — and Write It Down",
        content: `Once you have a clear description, have worked the simple-checks ladder, and have read any error carefully, the next habit is the one that separates methodical troubleshooting from flailing: change exactly one thing, then test, then decide what to do next based on the result. Change five things at once — restart, reinstall, update, change a setting, and delete a file, all in the same five minutes — and even if the problem goes away, you have learned nothing about which one actually mattered. Worse, you may have introduced a new, unrelated problem without any way to trace it back to its cause.

This is the same basic idea behind a fair scientific experiment: you can only trust a result if you changed one variable and held everything else steady. In everyday troubleshooting terms, that means picking the single most likely fix based on everything you've learned so far, trying only that fix, and then re-testing with your original reproduction steps before touching anything else. If it works, you're done, and you know exactly what fixed it. If it doesn't, you've cleanly ruled out one possibility and can move to the next one with confidence, instead of wondering which of five changes might have mattered.

Writing things down as you go is not optional bureaucracy — it's what makes the one-change habit actually work over time, especially for a problem that takes more than a few minutes to resolve. A simple running note, even just a few lines in a notes app or a physical notepad, should capture: what you tried, in what order, and what happened each time. This protects you from your own memory in two specific ways. First, if you get interrupted and come back an hour later, you won't accidentally repeat something you already tried and ruled out. Second, if you eventually do need to ask someone else for help — a coworker, a friend, IT support — you can hand them a clean list instead of a vague "I tried a bunch of stuff," which saves everyone time and avoids repeating steps that already failed.

A useful running note doesn't need to be formal. Something as simple as: "Restarted the app — no change. Restarted the laptop — no change. Checked Wi-Fi — connected fine. Read the error, it mentions a permissions issue. Trying: right-click the file, Properties, checked Read-only box, unchecked it — testing now" is already more useful than most people's mental notes, because it's specific, ordered, and honest about what didn't work, not just what eventually did.

There's a real temptation to skip this note-taking step because the problem feels small or because you're confident you'll remember. Resist that temptation specifically for anything that takes more than two or three attempts to resolve — that's exactly the point where memory gets unreliable and repeated attempts start blurring together. The habit of writing it down as you go, rather than trying to reconstruct it afterward, is a small discipline that pays off every single time a problem takes longer than expected.`,
      },
      lightbulbMoment:
        "Change one thing, test, then decide — change five things at once and even a successful fix teaches you nothing about what actually worked.",
      keyFacts: [
        "Change exactly one thing, then re-test with your original reproduction steps before changing anything else",
        "Changing multiple things at once means you can't tell which change actually fixed (or broke) anything",
        "A simple running note (what you tried, in order, what happened) protects your memory during longer troubleshooting",
        "Writing things down prevents accidentally repeating a fix you already tried and ruled out",
        "A clean written list saves time if you eventually need to ask someone else for help",
      ],
      guidedExample: {
        title: "One Change, Tested, Documented",
        steps: [
          "Problem: a shared document won't save, error mentions permissions (from the last topic's error-reading habit).",
          "Note: \"Try 1: right-click file → Properties → uncheck Read-only.\"",
          "Test using original reproduction steps: try saving again.",
          "Result recorded: \"Try 1 result: still fails, same error.\"",
          "Next single change: \"Try 2: save a copy to a different folder instead.\"",
          "Test again, record result: \"Try 2 result: saves fine — problem is specific to that one folder's permissions, not the file itself.\"",
        ],
      },
      commonMistakes: [
        "Making several changes at once, then not knowing which one actually fixed (or caused) anything",
        "Relying entirely on memory for a problem that takes more than a couple of attempts to solve",
        "Skipping the re-test step after a change and just assuming it worked",
        "Repeating an attempt you already tried and ruled out because you didn't write it down",
      ],
      realWorldTraps: [
        "IT support asks 'what have you already tried?' and the honest answer is 'I don't remember, a bunch of stuff'",
        "A 'fix' that was really three changes at once gets repeated for a different problem later, wasting time because nobody knows which part actually mattered",
        "A quick mental note gets lost after a phone call or interruption, leading to repeating the same failed attempt twice",
      ],
      realWorldScenario:
        "A printer stops working and, out of frustration, someone reinstalls the printer software, restarts the router, and updates Windows all within ten minutes. It starts working again — but nobody can say why, so when it breaks again next month, they're back to guessing from scratch instead of already knowing the actual fix.",
      whenThisFails: [
        "If you're genuinely under time pressure and can't afford to test one change at a time, at minimum write down every change you make in order, so you can retrace your steps afterward even if you didn't test between each one",
        "If your running note gets long and confusing, that's a sign to summarize it into one clean sentence before asking anyone else for help — which the next topic in this module covers",
      ],
      teacherReflectionPrompt:
        "Think of a time you changed several things at once to fix a problem — could you say for certain which change actually worked? What would a running note have told you?",
      quiz: [
        {
          id: "cf-one-change-document-q1",
          prompt: "Why change only one thing at a time when troubleshooting?",
          choices: [
            { id: "a", text: "So you can tell exactly which change fixed (or didn't fix) the problem" },
            { id: "b", text: "It's faster than changing several things at once" },
            { id: "c", text: "It's a rule that has no real benefit" },
            { id: "d", text: "It guarantees the first attempt will work" },
          ],
          correctChoiceId: "a",
          explanation: "Testing one change at a time is the only way to know with confidence which change mattered.",
          difficulty: "easy",
        },
        {
          id: "cf-one-change-document-q2",
          prompt: "What should a simple running note include?",
          choices: [
            { id: "a", text: "Only the final successful fix" },
            { id: "b", text: "What you tried, in order, and what happened each time" },
            { id: "c", text: "Nothing — memory is always reliable enough" },
            { id: "d", text: "Just a guess at the cause" },
          ],
          correctChoiceId: "b",
          explanation: "An ordered record of attempts and outcomes is what makes the note actually useful later.",
          difficulty: "easy",
        },
        {
          id: "cf-one-change-document-q3",
          prompt: "What's a risk of changing five things at once even if the problem goes away?",
          choices: [
            { id: "a", text: "None — a fixed problem is a fixed problem" },
            { id: "b", text: "You won't know which change actually fixed it, and you may have introduced an unrelated new issue" },
            { id: "c", text: "It always makes things worse" },
            { id: "d", text: "It's technically impossible to do" },
          ],
          correctChoiceId: "b",
          explanation: "Multiple simultaneous changes make it impossible to isolate the actual cause of the fix.",
          difficulty: "medium",
        },
        {
          id: "cf-one-change-document-q4",
          prompt: "Why does writing things down matter more for longer troubleshooting sessions?",
          choices: [
            { id: "a", text: "It doesn't — short and long sessions are the same" },
            { id: "b", text: "Memory becomes unreliable across repeated attempts, especially after interruptions" },
            { id: "c", text: "Only professionals need to write things down" },
            { id: "d", text: "Writing things down slows you down for no benefit" },
          ],
          correctChoiceId: "b",
          explanation: "The more attempts and time involved, the easier it is to lose track without a written record.",
          difficulty: "medium",
        },
        {
          id: "cf-one-change-document-q5",
          prompt: "A running note helps most directly with which later step?",
          choices: [
            { id: "a", text: "Asking someone else for help, since you can hand them a clean list instead of a vague summary" },
            { id: "b", text: "Making the device run faster" },
            { id: "c", text: "Avoiding all future problems" },
            { id: "d", text: "Guaranteeing a fix on the first try" },
          ],
          correctChoiceId: "a",
          explanation: "A clear record makes escalating to someone else far more efficient, which the next topic builds on directly.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-one-change-document-b1",
          prompt: "What is the core idea behind changing one thing at a time?",
          choices: [
            { id: "a", text: "It's the same principle as a fair scientific experiment — isolate one variable" },
            { id: "b", text: "It has no connection to any other kind of problem-solving" },
            { id: "c", text: "It's slower with no benefit" },
            { id: "d", text: "It only applies to hardware" },
          ],
          correctChoiceId: "a",
          explanation: "Holding everything else steady while changing one thing is exactly how a fair test works.",
        },
        {
          id: "cf-one-change-document-b2",
          prompt: "After making one change, what should you do next?",
          choices: [
            { id: "a", text: "Re-test using your original reproduction steps" },
            { id: "b", text: "Immediately make another unrelated change" },
            { id: "c", text: "Assume it worked without checking" },
            { id: "d", text: "Restart the device regardless of the result" },
          ],
          correctChoiceId: "a",
          explanation: "Re-testing confirms whether that specific change actually resolved the original problem.",
        },
        {
          id: "cf-one-change-document-b3",
          prompt: "Why is 'I tried a bunch of stuff' an unhelpful thing to tell someone helping you?",
          choices: [
            { id: "a", text: "It gives no specific, ordered information about what was tried or what happened" },
            { id: "b", text: "It's technically inaccurate" },
            { id: "c", text: "It's too short" },
            { id: "d", text: "It's actually very helpful" },
          ],
          correctChoiceId: "a",
          explanation: "A vague summary forces whoever is helping to start from zero, repeating steps that may already be ruled out.",
        },
        {
          id: "cf-one-change-document-b4",
          prompt: "A running note doesn't need to be:",
          choices: [
            { id: "a", text: "Formal or polished" },
            { id: "b", text: "Specific about what was tried" },
            { id: "c", text: "Ordered by when things happened" },
            { id: "d", text: "Honest about what didn't work" },
          ],
          correctChoiceId: "a",
          explanation: "A running note just needs to be specific, ordered, and honest — formality doesn't matter.",
        },
        {
          id: "cf-one-change-document-b5",
          prompt: "What's a real risk of skipping notes on a problem that takes many attempts?",
          choices: [
            { id: "a", text: "Accidentally repeating an attempt you already ruled out" },
            { id: "b", text: "The device will run faster" },
            { id: "c", text: "There is no real risk" },
            { id: "d", text: "The problem will definitely get worse" },
          ],
          correctChoiceId: "a",
          explanation: "Without notes, repeated or interrupted attempts easily blur together in memory.",
        },
        {
          id: "cf-one-change-document-b6",
          prompt: "Reinstalling software, restarting the router, and updating Windows all within ten minutes for one problem is risky because:",
          choices: [
            { id: "a", text: "You won't know which of the three actually mattered if it starts working" },
            { id: "b", text: "None of those things ever help" },
            { id: "c", text: "It's always faster to do this" },
            { id: "d", text: "It's the recommended first step" },
          ],
          correctChoiceId: "a",
          explanation: "Bundling multiple changes together erases the ability to isolate which change caused the fix.",
        },
        {
          id: "cf-one-change-document-b7",
          prompt: "If you're under real time pressure and can't test between every single change, what's the minimum you should still do?",
          choices: [
            { id: "a", text: "Write down every change you make in order, even without testing between each" },
            { id: "b", text: "Skip notes entirely to save time" },
            { id: "c", text: "Make all changes and never record anything" },
            { id: "d", text: "Guess and hope" },
          ],
          correctChoiceId: "a",
          explanation: "An ordered list of changes, even without testing each one, still lets you retrace your steps afterward.",
        },
        {
          id: "cf-one-change-document-b8",
          prompt: "What should you do if your running note gets long and hard to follow?",
          choices: [
            { id: "a", text: "Summarize it into one clean sentence before asking anyone else for help" },
            { id: "b", text: "Delete it and start over from memory" },
            { id: "c", text: "Ignore it — length doesn't matter" },
            { id: "d", text: "Keep adding without ever reviewing it" },
          ],
          correctChoiceId: "a",
          explanation: "A clean summary makes the note actually useful when it's time to escalate to someone else.",
        },
      ],
      flashcards: [
        {
          id: "cf-one-change-document-f1",
          front: "Why change only one thing at a time?",
          back: "So you know exactly which change fixed or didn't fix the problem",
        },
        {
          id: "cf-one-change-document-f2",
          front: "What to do right after making one change?",
          back: "Re-test using your original reproduction steps",
        },
        {
          id: "cf-one-change-document-f3",
          front: "What should a running note include?",
          back: "What you tried, in order, and what happened each time",
        },
        {
          id: "cf-one-change-document-f4",
          front: "Risk of changing five things at once, even if it works?",
          back: "You won't know which change actually fixed it, and may have introduced a new issue",
        },
        {
          id: "cf-one-change-document-f5",
          front: "Why write notes even for a problem you're confident you'll remember?",
          back: "Memory gets unreliable once a problem takes more than a couple of attempts",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
    {
      id: "cf-escalate-and-communicate",
      name: "Know When and How to Escalate",
      objectives: ["CF-M6-O9", "CF-M6-O10"],
      prerequisites: ["cf-one-change-document"],
      lesson: {
        title: "Know When and How to Escalate",
        content: `Every habit in this module so far — describing and reproducing the problem, working the simple-checks ladder, reading errors carefully, and changing one thing at a time while writing it down — exists to make you more capable on your own. This final topic is about the equally important skill of recognizing when self-service troubleshooting has reached its honest limit, and asking for help well when it has.

Knowing when to stop trying alone is not a failure of the previous habits — it's the natural, planned outcome of some of them. A few honest signals point toward escalation: you've worked through the ladder and your own reasonable ideas and the problem persists exactly as before; the fix would require touching something you don't have permission for or aren't confident is safe (account permissions, shared systems, anything explicitly marked as IT-managed); or the problem affects other people, not just you, which usually means it needs to be handled centrally rather than locally. None of these signals mean you failed at troubleshooting — they mean you troubleshot correctly enough to know exactly where the boundary is.

How you ask for help matters as much as when. The running note you built in the last topic becomes the backbone of a good request: what you were trying to do, what happened instead, when it started, what you've already tried (in order, with results), and what you need. Compare two requests: "my email is broken, please help" versus "since 9 AM, Outlook won't open PDF attachments — I've restarted Outlook and the laptop, checked that Wi-Fi is connected, and the error says 'file cannot be opened, it may be in use.' I haven't tried repairing Outlook yet — can you help with that, or should I?" The second version gets a faster, more accurate response every time, because it hands the helper a head start instead of a blank page.

Tone matters too, especially under frustration. A calm, specific request treats the person helping you as a collaborator working from the evidence you're handing them, not as a mind reader who should already know what's wrong, and not as a target for venting. This isn't about suppressing frustration — it's about recognizing that frustration expressed as vague blame ("nothing ever works right") slows down the exact help you're asking for, while frustration channeled into a clear, specific request speeds it up.

There's also a professional dimension worth naming even outside a literal help-desk job: knowing when to escalate, and escalating clearly, is a skill employers explicitly value, because it shows judgment rather than either reckless overconfidence (breaking something further by pushing past your access or knowledge) or learned helplessness (asking for help on things you could solve in thirty seconds with the simple-checks ladder). Landing in the middle — capable on your own, clear about your limits, and easy to hand off to — is exactly the mindset the next module in this course builds on directly.`,
      },
      lightbulbMoment:
        "Escalating well isn't giving up — handing someone your running note (what you tried, in order, with results) gets you help faster than any amount of vague frustration.",
      keyFacts: [
        "Escalate when the ladder and your own ideas are exhausted, when it needs permissions you don't have, or when it affects other people",
        "A good help request includes what you tried, in what order, and the results — not just the symptom",
        "Comparing a vague request to a specific one shows why specific requests get faster, more accurate help",
        "Calm, specific requests treat the helper as a collaborator, not a mind reader or a target for venting",
        "Knowing when to escalate is itself a professional skill, distinct from both overconfidence and learned helplessness",
      ],
      guidedExample: {
        title: "Turning a Running Note Into a Good Help Request",
        steps: [
          "Running note from earlier: restarted Outlook (no change), restarted laptop (no change), checked Wi-Fi (fine), error says file may be in use.",
          "Recognize the escalation signal: you've worked the ladder and your own ideas; time to ask for help.",
          "Draft the request: state what you were doing, what happened, and when it started.",
          "Add what you've already tried, in order, with results — pulled directly from the note.",
          "State clearly what you need: 'Can you help repair Outlook, or should I try that myself first?'",
          "Send it calmly, without vague blame language, even if you're frustrated.",
        ],
      },
      commonMistakes: [
        "Asking for help with only a vague symptom and no mention of what's already been tried",
        "Pushing past your own access or permissions to 'just fix it yourself' on a shared or managed system",
        "Waiting far too long to escalate a problem that's actually affecting other people, not just you",
        "Letting frustration come out as vague blame instead of a specific, actionable request",
      ],
      realWorldTraps: [
        "A request like 'nothing works, fix it' gets deprioritized because it gives the helper nothing to start with",
        "Someone tries to fix a shared network setting without permission, making the problem worse for everyone on that network",
        "A problem that's actually affecting a whole team gets treated as one person's individual annoyance for days before anyone escalates it",
      ],
      realWorldScenario:
        "A shared printer at a small office stops working for everyone, not just you. Instead of quietly trying to fix it alone for an hour, you recognize the 'affects other people' signal from this topic, write a two-line note of what you've already checked (power, cable, one simple check), and send it to whoever manages the printer — getting it fixed for the whole office faster than solo troubleshooting would have.",
      whenThisFails: [
        "If you escalate and still get no response or resolution, resist frustration-venting and instead follow up with your same clear note plus the new fact that time has passed — professionalism holds even when the wait is long",
        "If you're not sure whether something is safe to try yourself or needs escalation, treat that uncertainty itself as a reason to ask first, especially on shared or managed systems",
      ],
      teacherReflectionPrompt:
        "Write a two-sentence help request for a real problem you've had, including what you tried and what you need — then compare it to how you actually asked for help at the time.",
      quiz: [
        {
          id: "cf-escalate-and-communicate-q1",
          prompt: "Which is a valid signal that it's time to escalate rather than keep troubleshooting alone?",
          choices: [
            { id: "a", text: "You've tried the ladder and your own ideas, and the problem persists" },
            { id: "b", text: "You've spent exactly one minute on the problem" },
            { id: "c", text: "The problem only affects you and is trivial" },
            { id: "d", text: "You haven't read the error message yet" },
          ],
          correctChoiceId: "a",
          explanation: "Exhausting reasonable self-service steps is one of the clearest, most honest signals to ask for help.",
          difficulty: "easy",
        },
        {
          id: "cf-escalate-and-communicate-q2",
          prompt: "What makes a help request effective?",
          choices: [
            { id: "a", text: "Stating only the symptom, with no other detail" },
            { id: "b", text: "Including what you tried, in order, with results" },
            { id: "c", text: "Expressing frustration as vague blame" },
            { id: "d", text: "Asking multiple people the exact same vague question" },
          ],
          correctChoiceId: "b",
          explanation: "A running record of attempts and outcomes gives the helper a head start instead of a blank page.",
          difficulty: "easy",
        },
        {
          id: "cf-escalate-and-communicate-q3",
          prompt: "Why should you avoid pushing past your own permissions on a shared system?",
          choices: [
            { id: "a", text: "You might make the problem worse for other people who share that system" },
            { id: "b", text: "Permissions never matter" },
            { id: "c", text: "It's always faster to work around permissions" },
            { id: "d", text: "There's no real risk" },
          ],
          correctChoiceId: "a",
          explanation: "Shared and managed systems carry risk beyond your own device when changes are made without proper access.",
          difficulty: "medium",
        },
        {
          id: "cf-escalate-and-communicate-q4",
          prompt: "A problem is affecting your whole team, not just you. What does this suggest?",
          choices: [
            { id: "a", text: "It should probably be escalated centrally rather than solved individually by everyone" },
            { id: "b", text: "Everyone should just troubleshoot it separately" },
            { id: "c", text: "It's not worth reporting" },
            { id: "d", text: "It will resolve itself" },
          ],
          correctChoiceId: "a",
          explanation: "Problems affecting multiple people are usually more efficiently fixed once, centrally, than repeatedly by each person.",
          difficulty: "medium",
        },
        {
          id: "cf-escalate-and-communicate-q5",
          prompt: "Why is knowing when to escalate considered a professional skill, not a weakness?",
          choices: [
            { id: "a", text: "It shows judgment between overconfidence and learned helplessness" },
            { id: "b", text: "It means you never have to troubleshoot anything yourself" },
            { id: "c", text: "It proves you don't understand computers" },
            { id: "d", text: "Employers never value this skill" },
          ],
          correctChoiceId: "a",
          explanation: "Landing between reckless overconfidence and asking for help too early shows real professional judgment.",
          difficulty: "hard",
        },
      ],
      questionBank: [
        {
          id: "cf-escalate-and-communicate-b1",
          prompt: "Which help request is more effective?",
          choices: [
            { id: "a", text: "\"Nothing works, please fix it.\"" },
            { id: "b", text: "\"Since 9 AM, Outlook won't open PDFs; I've restarted Outlook and the laptop, checked Wi-Fi, and the error says the file may be in use.\"" },
            { id: "c", text: "\"Email is broken again, ugh.\"" },
            { id: "d", text: "\"Can someone look at my computer sometime?\"" },
          ],
          correctChoiceId: "b",
          explanation: "Specific, ordered detail gives the helper a head start and gets a faster, more accurate response.",
        },
        {
          id: "cf-escalate-and-communicate-b2",
          prompt: "What is one honest signal that it's time to ask for help?",
          choices: [
            { id: "a", text: "The fix requires permissions or access you don't have" },
            { id: "b", text: "You haven't tried anything yet" },
            { id: "c", text: "You feel slightly bored" },
            { id: "d", text: "The problem is trivial and affects no one else" },
          ],
          correctChoiceId: "a",
          explanation: "Needing access or permission you don't have is a clear, legitimate reason to escalate rather than push through.",
        },
        {
          id: "cf-escalate-and-communicate-b3",
          prompt: "Why does a running note (from the previous topic) matter when escalating?",
          choices: [
            { id: "a", text: "It becomes the backbone of a clear, specific help request" },
            { id: "b", text: "It has no use once you decide to ask for help" },
            { id: "c", text: "It's only useful for solving things alone" },
            { id: "d", text: "It should be deleted before asking for help" },
          ],
          correctChoiceId: "a",
          explanation: "The what-tried/what-happened record from the note translates directly into an effective request.",
        },
        {
          id: "cf-escalate-and-communicate-b4",
          prompt: "What's the risk of expressing frustration as vague blame in a help request?",
          choices: [
            { id: "a", text: "It slows down the exact help you're asking for" },
            { id: "b", text: "It speeds up the response every time" },
            { id: "c", text: "There's no real downside" },
            { id: "d", text: "It's the most professional approach" },
          ],
          correctChoiceId: "a",
          explanation: "Vague blame gives the helper nothing actionable and can come across as venting rather than a request.",
        },
        {
          id: "cf-escalate-and-communicate-b5",
          prompt: "A problem is affecting an entire shared office, not just one person. What's the better move?",
          choices: [
            { id: "a", text: "Escalate it to whoever manages that shared system, with a brief note of what's already been checked" },
            { id: "b", text: "Let everyone individually troubleshoot their own copy of the same problem" },
            { id: "c", text: "Ignore it since it's not solely your problem" },
            { id: "d", text: "Wait indefinitely for it to resolve on its own" },
          ],
          correctChoiceId: "a",
          explanation: "Centralized escalation with a clear note is far more efficient than everyone re-solving the same shared problem.",
        },
        {
          id: "cf-escalate-and-communicate-b6",
          prompt: "What does 'learned helplessness' look like in a troubleshooting context?",
          choices: [
            { id: "a", text: "Asking for help on something solvable in thirty seconds with the simple-checks ladder" },
            { id: "b", text: "Trying every reasonable step before asking for help" },
            { id: "c", text: "Writing a clear, specific help request" },
            { id: "d", text: "Reading an error message carefully" },
          ],
          correctChoiceId: "a",
          explanation: "Escalating too early, before trying basic self-service steps, is the flip side of pushing past your limits recklessly.",
        },
        {
          id: "cf-escalate-and-communicate-b7",
          prompt: "Why treat the helper as a collaborator rather than a mind reader?",
          choices: [
            { id: "a", text: "It sets the expectation that you'll provide the evidence they need to help effectively" },
            { id: "b", text: "It means you don't need to explain anything" },
            { id: "c", text: "It guarantees an instant fix" },
            { id: "d", text: "It has nothing to do with communication quality" },
          ],
          correctChoiceId: "a",
          explanation: "Framing the helper as a collaborator working from your evidence encourages you to hand over specific, useful detail.",
        },
        {
          id: "cf-escalate-and-communicate-b8",
          prompt: "If a help request gets no response after some time, what's the professional way to follow up?",
          choices: [
            { id: "a", text: "Send the same clear note again, noting that time has passed" },
            { id: "b", text: "Send an angry, vague message" },
            { id: "c", text: "Give up entirely" },
            { id: "d", text: "Try to bypass permissions yourself out of frustration" },
          ],
          correctChoiceId: "a",
          explanation: "A calm, specific follow-up keeps the same professional standard even when the wait is frustrating.",
        },
      ],
      flashcards: [
        {
          id: "cf-escalate-and-communicate-f1",
          front: "One honest signal it's time to escalate?",
          back: "You've worked the ladder and your own ideas, and the problem persists — or it needs permissions you don't have",
        },
        {
          id: "cf-escalate-and-communicate-f2",
          front: "What makes a help request effective?",
          back: "What you tried, in order, with results — not just the symptom",
        },
        {
          id: "cf-escalate-and-communicate-f3",
          front: "Why avoid pushing past your permissions on a shared system?",
          back: "You might make the problem worse for everyone else who shares it",
        },
        {
          id: "cf-escalate-and-communicate-f4",
          front: "Risk of vague blame in a help request?",
          back: "It slows down the help you're asking for instead of speeding it up",
        },
        {
          id: "cf-escalate-and-communicate-f5",
          front: "Why is knowing when to escalate a professional skill?",
          back: "It shows judgment between reckless overconfidence and learned helplessness",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "medium",
    },
  ],
};
