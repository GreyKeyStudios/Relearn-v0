import type { Topic, ExternalResource } from "../../types";
import { CF_WHAT_IS_A_COMPUTER_EXPERIENCE } from "@/content/lessons/cf-what-is-a-computer-experience";
import { CF_HARDWARE_VS_SOFTWARE_EXPERIENCE } from "@/content/lessons/cf-hardware-vs-software-experience";
import { CF_DESKTOP_TASKBAR_START_EXPERIENCE } from "@/content/lessons/cf-desktop-taskbar-start-experience";
import { CF_FILE_EXPLORER_BASICS_EXPERIENCE } from "@/content/lessons/cf-file-explorer-basics-experience";
import { CF_FILES_COPY_MOVE_DELETE_EXPERIENCE } from "@/content/lessons/cf-files-copy-move-delete-experience";
import { CF_EXTENSIONS_AND_ASSOCIATIONS_EXPERIENCE } from "@/content/lessons/cf-extensions-and-associations-experience";

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Avoid managed school/work accounts for account-creation labs.",
};

/**
 * Computer Fundamentals — Module 1 pilot topics (Orientation & Files, F1).
 * Original pilot content, split from computer-fundamentals.ts so the cert
 * file can assemble the full track from Module 1 through Module 8.
 */
export const cfPilotOrientationTopics: Topic[] = [
        {
          id: "cf-what-is-a-computer",
          name: "What Is a Computer?",
          objectives: ["CF-P1-O1", "CF-P1-O2", "CF-P1-O3"],
          lesson: {
            title: "What Is a Computer?",
            content: `A computer is a tool that follows instructions, one step at a time, extremely fast and without complaint. You already own one — your phone. A phone runs on the same basic idea as a Windows 11 desktop or laptop: hardware you can touch, an operating system that manages that hardware, and apps that let you do specific things. The desktop or laptop simply spreads those same layers across a bigger screen, a keyboard, and more visible parts.

Think of the whole system as a stack of four layers, built from the bottom up. Hardware is the physical foundation — the screen, keyboard, mouse, and the case full of chips and cables. On top of hardware sits the operating system, or OS. On a typical work or home PC today, that OS is Windows 11. The OS starts the machine, shows you a desktop, and lets every app share the hardware safely instead of fighting over it. Above the OS sit apps — Word, a web browser, a game, anything you open on purpose. And on top of everything sits you: the person with a goal, deciding what to open and why.

This stack matters because most computer confusion comes from mixing up the layers. Someone says "the computer is broken" when the problem is actually one app crashing, not the hardware failing. Someone blames "Windows" for a website loading slowly, when the real cause is the internet connection — a layer this course covers later, not the OS itself. Naming the layer correctly is the first real troubleshooting skill, and it costs nothing to practice.

If you have ever set up a new phone, you have already lived this stack without a diagram. You touched the hardware, waited for the operating system to finish setup, then opened your first apps. Windows 11 asks for the same patience: sign in, let the desktop appear, then start opening what you need. Nothing about that process requires a technical background — it requires familiarity, and familiarity comes from repetition, not talent.

It helps to drop the phrase "I'm just not a computer person." Nobody is born knowing where the Start button lives. What separates a confident user from an anxious one is usually just exposure: has this person opened File Explorer fifty times, or zero times? This course is built to get you those fifty repetitions in a way that never assumes you already know the vocabulary. Every term gets defined before it gets used.

Windows 11 is the current version taught throughout this course. If your workplace still runs Windows 10, the ideas are almost identical — desktop, taskbar, Start menu, File Explorer — with small layout differences. Any place that distinction matters, this course labels it clearly as a legacy note rather than letting you guess.

Notice, too, that this stack idea keeps reappearing throughout the course. When you learn hardware versus software next, you are zooming into the bottom two layers. When you later meet the Start menu and File Explorer, you are exploring what the operating system layer actually lets you do. Keep the stack picture loose in your mind — you do not need to memorize it like a vocabulary quiz, you need to recognize it the way you recognize the floor plan of a house you are about to move into.

By the end of this topic, you should be able to say out loud, in your own words, what a computer actually is: hardware running an operating system that runs apps that you control. That one sentence is worth more than any list of part names, because it is the sentence that keeps you calm the next time something on screen looks unfamiliar.`,
            experience: CF_WHAT_IS_A_COMPUTER_EXPERIENCE,
          },
          lightbulbMoment:
            "You already run this exact stack on your phone — Windows 11 just makes each layer bigger and easier to point at.",
          keyFacts: [
            "A computer is hardware (physical parts) running an operating system (like Windows 11) that runs apps",
            "The four-layer stack, bottom to top: Hardware → Operating system → Apps → You",
            "Windows 11 is the primary operating system taught in this course; Windows 10 differences are called out as legacy notes",
            "Naming which layer has a problem is the first troubleshooting skill — not a technical trick",
            "Phone habits (touch it, wait for setup, open an app) transfer directly to desktop and laptop use",
          ],
          guidedExample: {
            title: "Spot the Layer",
            steps: [
              "Your laptop screen goes black. Ask: is this hardware (power, cable, brightness) or software (a frozen app)?",
              "You press the power button and the fan spins — hardware is receiving power, so the issue may be a layer above it.",
              "Windows 11 shows a sign-in screen a few seconds later — the operating system layer is working.",
              "You open a browser and it feels slow — that points to the apps layer, or the network, not the OS itself.",
              "Naming the layer out loud narrows what to check next, instead of restarting everything and hoping.",
            ],
          },
          commonMistakes: [
            "Calling the whole system 'the computer' when only one app crashed",
            "Assuming a slow app means Windows itself is broken",
            "Believing you need a technical background to start — familiarity, not talent, is what's missing",
            "Skipping the vocabulary because it feels too basic, then guessing later when it matters",
          ],
          realWorldTraps: [
            "Coworkers say 'reboot the computer' as a reflex answer for every layer of problem, even app-only crashes",
            "IT support asks 'is this a hardware or software issue?' and expects a rough guess before they even arrive",
            "Job postings list 'basic computer literacy' as a requirement with zero explanation — this stack is exactly what they mean",
          ],
          realWorldScenario:
            "A relative calls to say 'the computer won't turn on.' Before touching anything, you ask two questions: does the power light turn on at all (hardware), and does it get past a loading screen (operating system)? With two questions you already know whether this is a cable problem or something deeper — without opening a single settings menu.",
          whenThisFails: [
            "If you can't tell which layer is failing, start from the bottom: confirm power and cables (hardware) before blaming Windows or an app",
            "If the machine won't get past a black screen at all, that's a hardware or startup issue — later hardware topics go deeper; for now it's fine to say 'this needs someone with more tools' without shame",
          ],
          teacherReflectionPrompt:
            "In your own words, explain the four-layer stack to someone who has never heard of it, using your phone as the example instead of a PC.",
          quiz: [
            {
              id: "cf-what-is-a-computer-q1",
              prompt: "Which of these correctly orders the computer stack from bottom to top?",
              choices: [
                { id: "a", text: "Apps → Hardware → Operating system → You" },
                { id: "b", text: "Hardware → Operating system → Apps → You" },
                { id: "c", text: "You → Hardware → Apps → Operating system" },
                { id: "d", text: "Operating system → You → Hardware → Apps" },
              ],
              correctChoiceId: "b",
              explanation:
                "The stack builds from physical hardware, up through the operating system, up through apps, with you deciding what to open.",
              difficulty: "easy",
            },
            {
              id: "cf-what-is-a-computer-q2",
              prompt: "Which layer of the stack does Windows 11 belong to?",
              choices: [
                { id: "a", text: "Hardware" },
                { id: "b", text: "Operating system" },
                { id: "c", text: "Apps" },
                { id: "d", text: "You" },
              ],
              correctChoiceId: "b",
              explanation: "Windows 11 is the operating system — it manages hardware and runs apps.",
              difficulty: "easy",
            },
            {
              id: "cf-what-is-a-computer-q3",
              prompt: "A web browser like Microsoft Edge belongs to which layer?",
              choices: [
                { id: "a", text: "Hardware" },
                { id: "b", text: "Operating system" },
                { id: "c", text: "Apps" },
                { id: "d", text: "You" },
              ],
              correctChoiceId: "c",
              explanation: "A browser is a program you open on purpose — it sits in the apps layer.",
              difficulty: "easy",
            },
            {
              id: "cf-what-is-a-computer-q4",
              prompt:
                "Your screen is black, but the fan spins and lights are on. What's the most useful next question?",
              choices: [
                { id: "a", text: "Is Windows 11 itself broken?" },
                { id: "b", text: "Is the display connection or brightness the issue, before blaming software?" },
                { id: "c", text: "Should you buy a new laptop immediately?" },
                { id: "d", text: "Should you uninstall all apps?" },
              ],
              correctChoiceId: "b",
              explanation:
                "Power signs (fan, lights) suggest the hardware layer is receiving power — check display/cable basics before assuming software failed.",
              difficulty: "medium",
            },
            {
              id: "cf-what-is-a-computer-q5",
              prompt: "Why does naming which layer is affected help with troubleshooting?",
              choices: [
                { id: "a", text: "It doesn't — every problem is fixed the same way" },
                { id: "b", text: "It narrows down what to check next instead of guessing randomly" },
                { id: "c", text: "It voids the warranty" },
                { id: "d", text: "It only matters for IT professionals" },
              ],
              correctChoiceId: "b",
              explanation: "Identifying the layer focuses your next step and avoids wasted, random troubleshooting.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-what-is-a-computer-b1",
              prompt: "What is a computer, in plain terms?",
              choices: [
                { id: "a", text: "A tool that follows instructions using hardware, an OS, and apps" },
                { id: "b", text: "Only the plastic case and screen" },
                { id: "c", text: "A device that only works with a technical degree" },
                { id: "d", text: "Software with no physical parts" },
              ],
              correctChoiceId: "a",
              explanation: "A computer is hardware running an operating system that runs apps, controlled by you.",
            },
            {
              id: "cf-what-is-a-computer-b2",
              prompt: "Which of these is the bottom layer of the computer stack?",
              choices: [
                { id: "a", text: "Apps" },
                { id: "b", text: "You" },
                { id: "c", text: "Hardware" },
                { id: "d", text: "Operating system" },
              ],
              correctChoiceId: "c",
              explanation: "Hardware is the physical foundation everything else runs on top of.",
            },
            {
              id: "cf-what-is-a-computer-b3",
              prompt: "Which of these is the top layer of the computer stack?",
              choices: [
                { id: "a", text: "You (the user)" },
                { id: "b", text: "Hardware" },
                { id: "c", text: "Operating system" },
                { id: "d", text: "Apps" },
              ],
              correctChoiceId: "a",
              explanation: "You sit on top, deciding what to open and why — apps, OS, and hardware support that goal.",
            },
            {
              id: "cf-what-is-a-computer-b4",
              prompt: "A phone and a Windows 11 laptop share which basic idea?",
              choices: [
                { id: "a", text: "Neither has software" },
                { id: "b", text: "Both use hardware running an OS that runs apps" },
                { id: "c", text: "Only laptops have an operating system" },
                { id: "d", text: "Phones cannot run apps" },
              ],
              correctChoiceId: "b",
              explanation: "The same four-layer idea applies to phones, tablets, and PCs.",
            },
            {
              id: "cf-what-is-a-computer-b5",
              prompt: "If your workplace still uses Windows 10, what should you expect?",
              choices: [
                { id: "a", text: "Completely different concepts you haven't learned" },
                { id: "b", text: "The same core ideas with a slightly different layout" },
                { id: "c", text: "No operating system at all" },
                { id: "d", text: "Apps that cannot be opened" },
              ],
              correctChoiceId: "b",
              explanation: "Windows 10 shares the same desktop/taskbar/Start concepts, just laid out a bit differently.",
            },
            {
              id: "cf-what-is-a-computer-b6",
              prompt: "Why is 'I'm just not a computer person' a misleading phrase?",
              choices: [
                { id: "a", text: "It's accurate — some people can't learn this" },
                { id: "b", text: "Confidence usually comes from repetition and exposure, not innate talent" },
                { id: "c", text: "It's only true for phones" },
                { id: "d", text: "It's a technical requirement listed by Microsoft" },
              ],
              correctChoiceId: "b",
              explanation: "Familiarity from practice — not special talent — is what builds computer confidence.",
            },
            {
              id: "cf-what-is-a-computer-b7",
              prompt: "A frozen single app most likely points to a problem in which layer?",
              choices: [
                { id: "a", text: "Hardware" },
                { id: "b", text: "Apps" },
                { id: "c", text: "You" },
                { id: "d", text: "The power supply" },
              ],
              correctChoiceId: "b",
              explanation: "One misbehaving program is usually an apps-layer issue, not a hardware failure.",
            },
            {
              id: "cf-what-is-a-computer-b8",
              prompt: "Why does this course define every term before using it?",
              choices: [
                { id: "a", text: "To slow learners down" },
                { id: "b", text: "So no vocabulary gap makes you feel behind or embarrassed" },
                { id: "c", text: "Because Windows 11 requires it" },
                { id: "d", text: "It doesn't — terms are assumed" },
              ],
              correctChoiceId: "b",
              explanation: "Defining vocabulary first removes the shame barrier common in computer literacy training.",
            },
          ],
          flashcards: [
            {
              id: "cf-what-is-a-computer-f1",
              front: "What is a computer, in one sentence?",
              back: "Hardware running an operating system that runs apps that you control",
            },
            {
              id: "cf-what-is-a-computer-f2",
              front: "Bottom layer of the computer stack?",
              back: "Hardware — the physical parts",
            },
            {
              id: "cf-what-is-a-computer-f3",
              front: "Top layer of the computer stack?",
              back: "You — the person deciding what to open",
            },
            {
              id: "cf-what-is-a-computer-f4",
              front: "Which OS does this course teach as primary?",
              back: "Windows 11 (Windows 10 differences are labeled as legacy notes)",
            },
            {
              id: "cf-what-is-a-computer-f5",
              front: "Why name the affected layer first when troubleshooting?",
              back: "It narrows what to check next instead of guessing randomly",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
        {
          id: "cf-hardware-vs-software",
          name: "Hardware vs. Software",
          prerequisites: ["cf-what-is-a-computer"],
          objectives: ["CF-P2-O1", "CF-P2-O2", "CF-P2-O3"],
          lesson: {
            title: "Hardware vs. Software",
            content: `Hardware is anything you could physically drop, plug in, or unplug. Software is instructions — code stored as files that tell hardware what to do. That single distinction resolves more day-to-day computer confusion than almost any other idea in this course, because most "the computer is broken" situations are actually one specific layer failing, not the whole machine.

Common hardware on a Windows 11 laptop or desktop: the screen, keyboard, mouse or trackpad, the case and its internal chips, a USB cable, an external hard drive, a printer, even the Wi-Fi card sitting inside the machine. If you can hold it, ship it in a box, or watch it get dusty, it is hardware. Ports and cables count too — a broken HDMI cable is a hardware problem, full stop, no matter what is or isn't displayed on screen.

Software lives as files and runs as programs. Windows 11 itself is software — an enormous, extremely important piece of software, but software all the same. Microsoft Edge or Chrome, Word, Zoom, a game you downloaded — all software. Software gets installed, updated, uninstalled, and occasionally crashes, all without a single physical part failing. When an app "freezes," nothing broke physically; a program simply stopped responding correctly to instructions.

There is a smaller, quieter category worth knowing by name only for now: firmware. Firmware is tiny built-in software stored directly on a chip, helping hardware start up and run at the lowest level. You are not expected to manage firmware day to day, and this course will not ask you to. Just recognize the word if you hear it — later hardware-focused material goes deeper into BIOS, UEFI, and firmware updates.

A simple gut-check habit: the touch test. If you can touch it, it is probably hardware. If you install it from a store, a website, or a download link, it is software. When something breaks, ask "is this a broken part, or a broken program?" before doing anything else. That one question saves an enormous amount of wasted troubleshooting time, because the fix for a broken part (replace or reconnect it) is completely different from the fix for a broken program (restart, reinstall, or update it).

One especially common mix-up: people treat "Windows" as if it were a piece of the laptop itself, the way the keyboard is. It is not. Windows 11 is software running on top of hardware — which means, in theory, it can be reinstalled, repaired, or replaced without you buying a new physical machine. That is exactly why IT support can often "fix" a machine remotely: they are working entirely in the software layer, no screwdriver required.

Getting hardware and software sorted correctly also protects you from panic. A laptop that will not turn on at all is almost always a hardware or power issue. A laptop that turns on fine but one specific app misbehaves is almost always a software issue contained to that one program. Learning to separate those two buckets, quickly and calmly, is one of the most transferable skills in this entire course — it applies to phones, tablets, smart TVs, and anything else running an operating system, not just Windows 11 PCs.`,
            experience: CF_HARDWARE_VS_SOFTWARE_EXPERIENCE,
          },
          lightbulbMoment:
            "Touch it → hardware. Install it → software. That one test resolves most 'is this broken' confusion instantly.",
          keyFacts: [
            "Hardware = physical parts you can touch — screen, keyboard, cables, chips",
            "Software = installed programs and instructions — including Windows 11 itself",
            "Firmware is tiny built-in software on a chip — recognize the word; depth comes later",
            "The touch test: touchable = hardware, installed/downloaded = software",
            "A completely dead machine is usually hardware/power; one misbehaving app is usually software",
          ],
          guidedExample: {
            title: "Sort Five Everyday Items",
            steps: [
              "Laptop lid and hinge — touchable, so hardware.",
              "Microsoft Word — installed and opened on purpose, so software.",
              "A USB charging cable — touchable, so hardware.",
              "Windows 11 itself — the operating system, so software (even though it feels like 'the computer').",
              "Zoom — downloaded and installed, so software.",
              "Notice none of these required a technical background — just the touch-vs-install question.",
            ],
          },
          commonMistakes: [
            "Calling Windows 11 'the computer' as if it were a physical part",
            "Assuming one frozen app means the entire machine is broken",
            "Trying to 'fix' a loose cable by reinstalling software, or the reverse",
            "Confusing firmware with regular apps you install yourself",
          ],
          realWorldTraps: [
            "A coworker says 'my computer has a virus' when really one browser extension misbehaves — software, not proof of malware or hardware failure",
            "IT asks 'is it a hardware or software ticket?' before triage — a confident, correct answer speeds up your support ticket",
            "Retail 'tech support' upsells a brand-new laptop for what is actually a fixable software problem",
          ],
          realWorldScenario:
            "Your laptop's touchpad stops responding. You touch-test it: nothing about the touchpad hardware changed, but you did install an update overnight. Rather than assuming the touchpad itself failed, you check software settings first — and find a driver setting flipped during the update. Ten minutes of software troubleshooting instead of an unnecessary hardware replacement.",
          whenThisFails: [
            "If you're not sure which side broke, test with a different app or a different peripheral — isolating variables tells you which layer is actually failing",
            "If a hardware part seems completely dead (no lights, no fan, no response at all), stop guessing at software fixes — that's a hardware/power question for later modules or a technician",
          ],
          teacherReflectionPrompt:
            "Pick three items within arm's reach right now and explain out loud whether each is hardware, software, or an example of both working together.",
          quiz: [
            {
              id: "cf-hardware-vs-software-q1",
              prompt: "Which of these is hardware?",
              choices: [
                { id: "a", text: "Windows 11" },
                { id: "b", text: "A USB cable" },
                { id: "c", text: "Microsoft Word" },
                { id: "d", text: "A Zoom call app" },
              ],
              correctChoiceId: "b",
              explanation: "A USB cable is a physical, touchable part — hardware. The others are software.",
              difficulty: "easy",
            },
            {
              id: "cf-hardware-vs-software-q2",
              prompt: "Which of these is software?",
              choices: [
                { id: "a", text: "Keyboard" },
                { id: "b", text: "Monitor" },
                { id: "c", text: "Windows 11" },
                { id: "d", text: "Wi-Fi card inside the laptop" },
              ],
              correctChoiceId: "c",
              explanation: "Windows 11 is the operating system — software, even though it feels built into the machine.",
              difficulty: "easy",
            },
            {
              id: "cf-hardware-vs-software-q3",
              prompt: "What is firmware?",
              choices: [
                { id: "a", text: "A brand of laptop" },
                { id: "b", text: "Tiny built-in software stored on a chip that helps hardware start and run" },
                { id: "c", text: "A type of USB cable" },
                { id: "d", text: "A setting only found in Windows 10" },
              ],
              correctChoiceId: "b",
              explanation: "Firmware is low-level software on a chip — you rarely manage it directly as a beginner.",
              difficulty: "medium",
            },
            {
              id: "cf-hardware-vs-software-q4",
              prompt:
                "A laptop turns on fine, fans spin, but one specific app keeps crashing. What's the most likely layer?",
              choices: [
                { id: "a", text: "Hardware — replace the laptop" },
                { id: "b", text: "Software — the issue is contained to that one app" },
                { id: "c", text: "Firmware — update the BIOS immediately" },
                { id: "d", text: "None of the layers — it's unfixable" },
              ],
              correctChoiceId: "b",
              explanation:
                "One misbehaving app, with everything else working, points to a software issue in that specific program.",
              difficulty: "medium",
            },
            {
              id: "cf-hardware-vs-software-q5",
              prompt: "Why does the 'touch it = hardware' test help in troubleshooting?",
              choices: [
                { id: "a", text: "It doesn't — it's just a memory trick with no practical use" },
                { id: "b", text: "It quickly narrows whether the fix is a physical repair or a software fix" },
                { id: "c", text: "It only works on Windows 10" },
                { id: "d", text: "It replaces the need for any other troubleshooting step" },
              ],
              correctChoiceId: "b",
              explanation: "The touch test quickly sorts a problem into the right bucket before you waste time on the wrong fix.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-hardware-vs-software-b1",
              prompt: "Which best defines hardware?",
              choices: [
                { id: "a", text: "Physical parts you could drop, plug in, or unplug" },
                { id: "b", text: "Any installed program" },
                { id: "c", text: "A website you visit" },
                { id: "d", text: "A file extension" },
              ],
              correctChoiceId: "a",
              explanation: "Hardware is the physical, touchable side of a computer system.",
            },
            {
              id: "cf-hardware-vs-software-b2",
              prompt: "Which best defines software?",
              choices: [
                { id: "a", text: "Instructions/programs stored as files that tell hardware what to do" },
                { id: "b", text: "The laptop's case" },
                { id: "c", text: "A monitor cable" },
                { id: "d", text: "A keyboard" },
              ],
              correctChoiceId: "a",
              explanation: "Software is code and instructions — including operating systems and apps.",
            },
            {
              id: "cf-hardware-vs-software-b3",
              prompt: "A printer is an example of:",
              choices: [
                { id: "a", text: "Software" },
                { id: "b", text: "Hardware" },
                { id: "c", text: "Firmware only" },
                { id: "d", text: "An operating system" },
              ],
              correctChoiceId: "b",
              explanation: "A printer is a physical peripheral — hardware.",
            },
            {
              id: "cf-hardware-vs-software-b4",
              prompt: "Microsoft Edge is an example of:",
              choices: [
                { id: "a", text: "Hardware" },
                { id: "b", text: "Software" },
                { id: "c", text: "A cable" },
                { id: "d", text: "A chip" },
              ],
              correctChoiceId: "b",
              explanation: "Edge is a browser app — software.",
            },
            {
              id: "cf-hardware-vs-software-b5",
              prompt: "If a machine shows zero lights, zero fan noise, and zero response, that most likely points to:",
              choices: [
                { id: "a", text: "A software bug in one app" },
                { id: "b", text: "A hardware or power issue" },
                { id: "c", text: "A file extension problem" },
                { id: "d", text: "A firmware update notification" },
              ],
              correctChoiceId: "b",
              explanation: "No power signs at all typically points to hardware or power, not a single app misbehaving.",
            },
            {
              id: "cf-hardware-vs-software-b6",
              prompt: "Why is it inaccurate to call Windows 11 'the computer'?",
              choices: [
                { id: "a", text: "Windows 11 is software running on top of hardware, not the physical machine" },
                { id: "b", text: "Windows 11 doesn't exist" },
                { id: "c", text: "Windows 11 is a piece of hardware" },
                { id: "d", text: "It's actually accurate to call it that" },
              ],
              correctChoiceId: "a",
              explanation: "Windows 11 is the operating system layer, distinct from the physical hardware it runs on.",
            },
            {
              id: "cf-hardware-vs-software-b7",
              prompt: "IT support can often fix issues remotely because:",
              choices: [
                { id: "a", text: "They mail you a new part instantly" },
                { id: "b", text: "Many fixable issues live entirely in the software layer" },
                { id: "c", text: "They physically teleport to your location" },
                { id: "d", text: "Hardware issues are always fixed remotely too" },
              ],
              correctChoiceId: "b",
              explanation: "Remote support works well for software-layer problems, which don't require physical access.",
            },
            {
              id: "cf-hardware-vs-software-b8",
              prompt: "What should you do before assuming a hardware replacement is needed?",
              choices: [
                { id: "a", text: "Rule out a software cause first with basic checks" },
                { id: "b", text: "Immediately buy a new device" },
                { id: "c", text: "Ignore the problem" },
                { id: "d", text: "Reinstall firmware without checking anything else" },
              ],
              correctChoiceId: "a",
              explanation: "Cheaper, faster software checks should usually come before assuming hardware failure.",
            },
          ],
          flashcards: [
            {
              id: "cf-hardware-vs-software-f1",
              front: "Quick test to sort hardware vs software?",
              back: "Touch it → hardware. Install/download it → software.",
            },
            {
              id: "cf-hardware-vs-software-f2",
              front: "Is Windows 11 hardware or software?",
              back: "Software — the operating system, running on top of hardware",
            },
            {
              id: "cf-hardware-vs-software-f3",
              front: "What is firmware?",
              back: "Tiny built-in software stored on a chip that helps hardware start and run",
            },
            {
              id: "cf-hardware-vs-software-f4",
              front: "One frozen app usually means?",
              back: "A software issue contained to that app — not a hardware failure",
            },
            {
              id: "cf-hardware-vs-software-f5",
              front: "Zero lights, zero fan, zero response usually means?",
              back: "A hardware or power issue, not a software bug",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
];

export const cfPilotFilesTopics: Topic[] = [
        {
          id: "cf-desktop-taskbar-start",
          name: "Desktop, Taskbar & Start Menu",
          prerequisites: ["cf-hardware-vs-software"],
          objectives: ["CF-P3-O1", "CF-P3-O2", "CF-P3-O3"],
          lesson: {
            title: "Desktop, Taskbar & Start Menu",
            content: `After you sign in to a Windows 11 PC, you land on the desktop — a home base for everything else you do. Learning to move confidently around the desktop, the taskbar, and the Start menu is the single biggest jump in day-to-day comfort this course offers, because almost every other skill starts from here.

The desktop itself is just a background area, sometimes decorated with a wallpaper image, sometimes holding a few icons — shortcuts to apps or folders you use often. There is no rule that says your desktop needs icons at all; a clean, mostly empty desktop is completely normal and, for many people, easier to think in. Icons are optional convenience, not a requirement of a "properly set up" computer.

Running along the bottom of the screen is the taskbar. On Windows 11, the taskbar is centered by default, showing pinned app icons, any apps currently open, and a clock in the corner. Click any icon to open that app, or click it again to switch to a window that is already open. If you have ever tapped app icons on a phone's home screen or dock, this will feel immediately familiar — the taskbar is doing the same job.

The Start menu is your launcher for anything not already pinned to the taskbar. Click the Windows logo, or simply press the Windows key on your keyboard, and a search-first menu opens. You do not need to hunt through folders of icons: type the first few letters of an app's name — "word," "calc," "settings" — and Windows 11 will surface it immediately. This search-first habit is faster than browsing for almost everyone, including experienced users, so build it early rather than treating it as a shortcut for later.

If your workplace still runs Windows 10, expect a similar but not identical layout: the Start button typically sits on the left rather than the center, and the Start menu itself looks a little different, though it still opens with the same click or keypress and still supports typing to search. The ideas — desktop, taskbar, Start, search-to-launch — carry over completely. This course teaches Windows 11 as the current, primary platform and calls out Windows 10 differences only where they would otherwise cause real confusion.

One quiet confidence-builder: you cannot break Windows 11 by clicking around the desktop, taskbar, or Start menu to look at things. Opening the Start menu, scrolling through the app list, or right-clicking the taskbar to see what options appear will not damage anything. Curiosity here is safe, and safe exploration is exactly how the icons and layout stop feeling unfamiliar.

By the end of this topic, opening any installed app should feel like a two-second action — press the Windows key, type a few letters, press Enter — rather than a hunt. That speed is not a party trick; it is the foundation every later topic, from File Explorer to troubleshooting, assumes you already have.`,
            experience: CF_DESKTOP_TASKBAR_START_EXPERIENCE,
          },
          lightbulbMoment:
            "Windows key + type the app name beats hunting for icons — on Windows 11 or Windows 10.",
          keyFacts: [
            "The desktop is your home screen after sign-in — icons are optional, not required",
            "The Windows 11 taskbar is centered by default; older Windows 10 machines have it left-aligned",
            "Click Start (or press the Windows key) and type to search — faster than browsing icons",
            "Clicking around the desktop, taskbar, and Start menu is safe — you cannot break Windows by looking",
            "Windows 10 uses the same core ideas (desktop, taskbar, Start) with a different layout",
          ],
          guidedExample: {
            title: "Open Three Apps by Search",
            steps: [
              "Press the Windows key.",
              "Type \"notepad\" and press Enter — Notepad opens.",
              "Press the Windows key again, type \"calculator\", press Enter.",
              "Press the Windows key once more, type \"settings\", press Enter.",
              "Notice each app opened in seconds without you ever hunting for an icon.",
            ],
          },
          commonMistakes: [
            "Hunting for a desktop icon that doesn't exist instead of using Start search",
            "Assuming a centered Windows 11 taskbar means something is 'wrong' if you're used to Windows 10's left layout",
            "Avoiding right-click menus out of fear of breaking something",
            "Cluttering the desktop with dozens of icons instead of pinning key apps to the taskbar",
          ],
          realWorldTraps: [
            "A workplace PC runs Windows 10 with a left-aligned Start button — don't assume your training was wrong; the concepts still apply",
            "Coworkers judge desktop clutter as a sign of skill level, when a clean Start-search habit is actually the stronger skill",
            "IT-provided laptops sometimes lock certain taskbar customization by admin policy — that's a policy, not something you broke",
          ],
          realWorldScenario:
            "On your first day at a new job, the desk PC looks nothing like your personal laptop — different pinned apps, a work-specific wallpaper, maybe even Windows 10 instead of Windows 11. Instead of panicking, you press the Windows key and type the name of the app you need. It works exactly the same way it did in training, regardless of the visual differences.",
          whenThisFails: [
            "If pressing the Windows key does nothing, try clicking directly on the Start icon in the taskbar — some keyboards remap or disable the Windows key",
            "If search doesn't find an app you know is installed, try the exact app name instead of a nickname, or check if it's still installing in the background",
          ],
          teacherReflectionPrompt:
            "Walk someone through opening Notepad from a completely closed desktop, narrating each click or keypress as you go.",
          quiz: [
            {
              id: "cf-desktop-taskbar-start-q1",
              prompt: "What is the fastest way to open an app you know the name of on Windows 11?",
              choices: [
                { id: "a", text: "Right-click the desktop and hope for an icon" },
                { id: "b", text: "Press the Windows key and type the app name" },
                { id: "c", text: "Restart the computer first" },
                { id: "d", text: "Call IT support" },
              ],
              correctChoiceId: "b",
              explanation: "Windows key + type is faster than hunting for icons, on both Windows 11 and Windows 10.",
              difficulty: "easy",
            },
            {
              id: "cf-desktop-taskbar-start-q2",
              prompt: "Where does the Windows 11 taskbar sit by default?",
              choices: [
                { id: "a", text: "Left-aligned, like Windows 10" },
                { id: "b", text: "Centered" },
                { id: "c", text: "Always hidden" },
                { id: "d", text: "Along the top of the screen" },
              ],
              correctChoiceId: "b",
              explanation: "Windows 11 centers the taskbar by default, unlike the left-aligned Windows 10 layout.",
              difficulty: "easy",
            },
            {
              id: "cf-desktop-taskbar-start-q3",
              prompt: "Are desktop icons required for a properly working Windows 11 PC?",
              choices: [
                { id: "a", text: "Yes, required" },
                { id: "b", text: "No, optional" },
                { id: "c", text: "Only for gaming PCs" },
                { id: "d", text: "Only for managed work accounts" },
              ],
              correctChoiceId: "b",
              explanation: "Desktop icons are a convenience, not a requirement — an empty desktop works fine.",
              difficulty: "easy",
            },
            {
              id: "cf-desktop-taskbar-start-q4",
              prompt: "Your work PC runs Windows 10 with a left-aligned Start button. What should you assume?",
              choices: [
                { id: "a", text: "Your Windows 11 training doesn't apply at all" },
                { id: "b", text: "The same core concepts apply with a slightly different layout" },
                { id: "c", text: "The PC is broken" },
                { id: "d", text: "You must reinstall Windows 11 to proceed" },
              ],
              correctChoiceId: "b",
              explanation: "Windows 10 shares the desktop/taskbar/Start concepts — only the layout differs.",
              difficulty: "medium",
            },
            {
              id: "cf-desktop-taskbar-start-q5",
              prompt: "What happens if you click around the Start menu and taskbar just to look at options?",
              choices: [
                { id: "a", text: "Nothing breaks — safe exploration" },
                { id: "b", text: "Apps get uninstalled automatically" },
                { id: "c", text: "Windows resets to factory settings" },
                { id: "d", text: "Your files are deleted" },
              ],
              correctChoiceId: "a",
              explanation: "Looking around the Start menu and taskbar is safe and will not damage anything.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-desktop-taskbar-start-b1",
              prompt: "What is the desktop?",
              choices: [
                { id: "a", text: "The main Windows screen after sign-in" },
                { id: "b", text: "A type of laptop" },
                { id: "c", text: "A file extension" },
                { id: "d", text: "A cloud storage service" },
              ],
              correctChoiceId: "a",
              explanation: "The desktop is the main screen you see after signing in.",
            },
            {
              id: "cf-desktop-taskbar-start-b2",
              prompt: "What does the taskbar show?",
              choices: [
                { id: "a", text: "Pinned apps, open windows, and the clock" },
                { id: "b", text: "Only the wallpaper" },
                { id: "c", text: "Only error messages" },
                { id: "d", text: "Nothing until you install extra software" },
              ],
              correctChoiceId: "a",
              explanation: "The taskbar shows pinned apps, currently open windows, and system items like the clock.",
            },
            {
              id: "cf-desktop-taskbar-start-b3",
              prompt: "How do you open the Start menu?",
              choices: [
                { id: "a", text: "Press Ctrl+Alt+Delete only" },
                { id: "b", text: "Click the Windows logo or press the Windows key" },
                { id: "c", text: "Unplug the mouse" },
                { id: "d", text: "Restart the PC" },
              ],
              correctChoiceId: "b",
              explanation: "The Start menu opens by clicking the Windows logo or pressing the Windows key.",
            },
            {
              id: "cf-desktop-taskbar-start-b4",
              prompt: "Typing an app's name in the Start menu:",
              choices: [
                { id: "a", text: "Does nothing useful" },
                { id: "b", text: "Searches and surfaces that app quickly" },
                { id: "c", text: "Deletes the app" },
                { id: "d", text: "Only works for Microsoft apps" },
              ],
              correctChoiceId: "b",
              explanation: "Typing in Start searches installed apps and settings by name.",
            },
            {
              id: "cf-desktop-taskbar-start-b5",
              prompt: "Is it safe to right-click the taskbar just to see the menu?",
              choices: [
                { id: "a", text: "Yes, it's safe to look" },
                { id: "b", text: "No, it will uninstall Windows" },
                { id: "c", text: "Only on Windows 10" },
                { id: "d", text: "Only with administrator rights" },
              ],
              correctChoiceId: "a",
              explanation: "Right-clicking the taskbar just opens a menu of options — safe to explore.",
            },
            {
              id: "cf-desktop-taskbar-start-b6",
              prompt: "A cluttered desktop with 100 icons compared to a clean one with Start search habits:",
              choices: [
                { id: "a", text: "Is always the better/faster approach" },
                { id: "b", text: "Is not inherently better — search-first is often faster" },
                { id: "c", text: "Is required by Windows 11" },
                { id: "d", text: "Means the PC is broken" },
              ],
              correctChoiceId: "b",
              explanation: "Desktop clutter isn't a skill marker — search-first habits are often faster and cleaner.",
            },
            {
              id: "cf-desktop-taskbar-start-b7",
              prompt: "Windows 10's Start button is typically located:",
              choices: [
                { id: "a", text: "Left-aligned" },
                { id: "b", text: "Centered like Windows 11" },
                { id: "c", text: "On the right side only" },
                { id: "d", text: "There is no Start button in Windows 10" },
              ],
              correctChoiceId: "a",
              explanation: "Windows 10 places the Start button on the left, unlike Windows 11's centered default.",
            },
            {
              id: "cf-desktop-taskbar-start-b8",
              prompt: "If the Windows key doesn't open Start, what should you try?",
              choices: [
                { id: "a", text: "Assume the PC is permanently broken" },
                { id: "b", text: "Click the Start icon directly in the taskbar" },
                { id: "c", text: "Reinstall Windows immediately" },
                { id: "d", text: "Unplug the monitor" },
              ],
              correctChoiceId: "b",
              explanation: "Clicking the Start icon directly works even if a keyboard's Windows key is remapped or disabled.",
            },
          ],
          flashcards: [
            {
              id: "cf-desktop-taskbar-start-f1",
              front: "Fastest way to open a known app on Windows 11?",
              back: "Press the Windows key, type the app name, press Enter",
            },
            {
              id: "cf-desktop-taskbar-start-f2",
              front: "Windows 11 taskbar default position?",
              back: "Centered (Windows 10 is left-aligned)",
            },
            {
              id: "cf-desktop-taskbar-start-f3",
              front: "Are desktop icons required?",
              back: "No — an empty desktop is completely normal",
            },
            {
              id: "cf-desktop-taskbar-start-f4",
              front: "Is it safe to click around Start/taskbar just to look?",
              back: "Yes — looking around does not damage anything",
            },
            {
              id: "cf-desktop-taskbar-start-f5",
              front: "How to open Start menu without a mouse?",
              back: "Press the Windows key on the keyboard",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
        },
        {
          id: "cf-file-explorer-basics",
          name: "File Explorer Basics",
          prerequisites: ["cf-desktop-taskbar-start"],
          objectives: ["CF-P4-O1", "CF-P4-O2", "CF-P4-O3"],
          lesson: {
            title: "File Explorer Basics",
            content: `Every file you save, download, or create on a Windows 11 PC lives somewhere specific — inside a folder, inside another folder, inside a drive. File Explorer is the built-in app that lets you see and navigate that structure, the same way a filing cabinet lets you see drawers, folders, and papers instead of one giant pile.

Open File Explorer by clicking the folder icon on the taskbar, or by pressing the Windows key + E, a shortcut worth memorizing immediately because you will use it constantly. Inside, you will typically see Quick access shortcuts near the top, This PC below that, and a set of personal folders — Documents, Downloads, Desktop, Pictures — created automatically for your user account. These default folders exist specifically so a brand-new user always has somewhere sensible to save things without having to design a folder structure on day one.

Creating a folder is the first hands-on skill worth locking in. Navigate to Documents, right-click on empty space (not on an existing file), choose New, then Folder. Type a clear, specific name — something like "Practice-ReLearn" rather than accepting a generic default name — and press Enter. That folder is now yours: a real, permanent location you can find again, rename, move, or delete whenever you want.

Finding a folder again is just as important as creating one. Double-click through Documents to reach your new folder, and look at the address bar running along the top of the window — it shows the exact path, the step-by-step route from This PC down to your folder. If you ever forget where something lives, the search box in the top-right corner of File Explorer searches by name across the areas you tell it to search, which is often faster than manually re-tracing your folder path from memory.

One distinction saves enormous confusion later: Documents versus Downloads. Documents holds files you deliberately created or saved — a resume you wrote, a spreadsheet you built. Downloads holds files that arrived automatically from your web browser — a PDF you clicked, an installer you grabbed from a website. When something "disappears" after you download it, check Downloads first; it is the single most common hiding spot for a file that feels lost but never actually left.

File Explorer also has a View menu worth knowing exists, even if you do not touch every option today — it controls how files are displayed (icons, list, details) and, importantly, whether file name extensions are visible, a setting the next topic in this course depends on directly.

None of this requires memorizing a rigid folder system. What matters is the underlying confidence: you can make a folder on purpose, name it something meaningful, and find it again later without luck or guesswork. That single skill — deliberate, findable file organization — quietly underlies nearly every other computer task, from saving a resume to backing up photos to following an IT support instruction that says "save this to a new folder on your desktop."`,
            experience: CF_FILE_EXPLORER_BASICS_EXPERIENCE,
          },
          lightbulbMoment:
            "Creating a folder on purpose and finding it again removes a huge amount of everyday computer anxiety.",
          keyFacts: [
            "File Explorer opens with Windows key + E or the taskbar folder icon",
            "Documents, Downloads, and Desktop are default personal folders created automatically",
            "Right-click empty space → New → Folder creates a new folder with a name you choose",
            "The address bar shows the exact path/location of whatever folder you're viewing",
            "Downloads holds browser-downloaded files; Documents holds files you saved on purpose",
          ],
          guidedExample: {
            title: "Create and Find a Folder",
            steps: [
              "Press Windows key + E to open File Explorer.",
              "Navigate to Documents.",
              "Right-click empty space → New → Folder, and name it \"Practice-ReLearn\".",
              "Close File Explorer completely.",
              "Reopen File Explorer and navigate back to Documents to confirm the folder is still there.",
              "Use the address bar to confirm the exact path to your folder.",
            ],
          },
          commonMistakes: [
            "Saving everything to Desktop out of habit instead of a named folder in Documents",
            "Right-clicking directly on a file instead of empty space when trying to create a new folder",
            "Forgetting a folder's name and giving up instead of using the search box",
            "Assuming a downloaded file vanished when it's actually sitting in Downloads",
          ],
          realWorldTraps: [
            "A shared or managed work computer may hide 'This PC' or restrict where you can create folders — that's an IT policy, not a mistake on your part",
            "Cloud sync (like OneDrive) can make Documents look different across devices — the folder concept is the same, the sync layer is new",
            "Some browsers let you choose a custom download location — always double-check where a file actually landed if it's not in Downloads",
          ],
          realWorldScenario:
            "IT support tells you over the phone: 'Create a new folder on your Desktop called Screenshots and save the error image there.' Because you can now create a named folder and navigate to it confidently, you complete this in under a minute instead of guessing where the screenshot went and re-taking it three times.",
          whenThisFails: [
            "If New → Folder doesn't appear in the right-click menu, make sure you clicked truly empty space, not inside a file list row",
            "If a folder you created seems to disappear, use the File Explorer search box with the folder's name before assuming it was deleted",
          ],
          teacherReflectionPrompt:
            "Describe, step by step and out loud, exactly how you would create a folder called 'Taxes-2026' inside Documents and then find it again tomorrow.",
          quiz: [
            {
              id: "cf-file-explorer-basics-q1",
              prompt: "What is the keyboard shortcut to open File Explorer on Windows 11?",
              choices: [
                { id: "a", text: "Windows key + E" },
                { id: "b", text: "Ctrl + Alt + Delete" },
                { id: "c", text: "Windows key + R only" },
                { id: "d", text: "F1" },
              ],
              correctChoiceId: "a",
              explanation: "Windows key + E opens File Explorer directly, on Windows 11 and Windows 10.",
              difficulty: "easy",
            },
            {
              id: "cf-file-explorer-basics-q2",
              prompt: "Which folder automatically holds files your browser downloads?",
              choices: [
                { id: "a", text: "Documents" },
                { id: "b", text: "Downloads" },
                { id: "c", text: "Desktop" },
                { id: "d", text: "Pictures" },
              ],
              correctChoiceId: "b",
              explanation: "Downloads is the default landing spot for browser-downloaded files.",
              difficulty: "easy",
            },
            {
              id: "cf-file-explorer-basics-q3",
              prompt: "How do you create a new folder in File Explorer?",
              choices: [
                { id: "a", text: "Right-click empty space → New → Folder" },
                { id: "b", text: "Double-click any existing file" },
                { id: "c", text: "Press Ctrl+P" },
                { id: "d", text: "Restart the computer" },
              ],
              correctChoiceId: "a",
              explanation: "Right-clicking empty space and choosing New → Folder creates a new, empty folder.",
              difficulty: "easy",
            },
            {
              id: "cf-file-explorer-basics-q4",
              prompt: "What does the address bar at the top of File Explorer show?",
              choices: [
                { id: "a", text: "The exact path/location of the current folder" },
                { id: "b", text: "A list of installed apps" },
                { id: "c", text: "Your Wi-Fi password" },
                { id: "d", text: "Nothing useful" },
              ],
              correctChoiceId: "a",
              explanation: "The address bar shows the step-by-step path to the folder you're currently viewing.",
              difficulty: "medium",
            },
            {
              id: "cf-file-explorer-basics-q5",
              prompt: "You downloaded a file and can't find it. Where should you check first?",
              choices: [
                { id: "a", text: "Documents" },
                { id: "b", text: "Downloads" },
                { id: "c", text: "Recycle Bin" },
                { id: "d", text: "Desktop" },
              ],
              correctChoiceId: "b",
              explanation: "Downloads is the most common hiding spot for a file that feels lost after downloading.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-file-explorer-basics-b1",
              prompt: "What does File Explorer let you do?",
              choices: [
                { id: "a", text: "Browse and manage files and folders" },
                { id: "b", text: "Edit photos only" },
                { id: "c", text: "Browse the internet" },
                { id: "d", text: "Send email" },
              ],
              correctChoiceId: "a",
              explanation: "File Explorer is the Windows app for browsing and managing files and folders.",
            },
            {
              id: "cf-file-explorer-basics-b2",
              prompt: "Which of these is a default personal folder on Windows 11?",
              choices: [
                { id: "a", text: "Documents" },
                { id: "b", text: "System32" },
                { id: "c", text: "Program Files" },
                { id: "d", text: "Windows" },
              ],
              correctChoiceId: "a",
              explanation: "Documents is one of the default personal folders created for your user account.",
            },
            {
              id: "cf-file-explorer-basics-b3",
              prompt: "Naming a folder something clear like 'Practice-ReLearn' instead of a generic default name:",
              choices: [
                { id: "a", text: "Makes it easier to find and identify later" },
                { id: "b", text: "Is not allowed by Windows" },
                { id: "c", text: "Slows down the computer" },
                { id: "d", text: "Only matters for work accounts" },
              ],
              correctChoiceId: "a",
              explanation: "Clear, specific names make folders easier to recognize and find later.",
            },
            {
              id: "cf-file-explorer-basics-b4",
              prompt: "What is Quick access in File Explorer?",
              choices: [
                { id: "a", text: "Shortcuts to frequently used folders" },
                { id: "b", text: "A security setting" },
                { id: "c", text: "A file extension" },
                { id: "d", text: "A type of cable" },
              ],
              correctChoiceId: "a",
              explanation: "Quick access provides shortcuts to commonly used or recent folders.",
            },
            {
              id: "cf-file-explorer-basics-b5",
              prompt: "The File Explorer search box is most useful for:",
              choices: [
                { id: "a", text: "Finding a file/folder by name without retracing every click" },
                { id: "b", text: "Deleting files permanently" },
                { id: "c", text: "Installing new apps" },
                { id: "d", text: "Changing your password" },
              ],
              correctChoiceId: "a",
              explanation: "Search finds items by name, faster than manually re-tracing your folder path.",
            },
            {
              id: "cf-file-explorer-basics-b6",
              prompt: "Documents is best described as:",
              choices: [
                { id: "a", text: "Files you deliberately created or saved" },
                { id: "b", text: "Only browser downloads" },
                { id: "c", text: "System files you should never touch" },
                { id: "d", text: "A folder that doesn't exist by default" },
              ],
              correctChoiceId: "a",
              explanation: "Documents is meant for files you intentionally created or saved, unlike Downloads.",
            },
            {
              id: "cf-file-explorer-basics-b7",
              prompt: "The View menu in File Explorer can control:",
              choices: [
                { id: "a", text: "Whether file name extensions are shown" },
                { id: "b", text: "Your Wi-Fi password" },
                { id: "c", text: "The computer's IP address" },
                { id: "d", text: "Windows Update settings" },
              ],
              correctChoiceId: "a",
              explanation: "The View menu controls display options including file name extension visibility.",
            },
            {
              id: "cf-file-explorer-basics-b8",
              prompt: "On a managed/work computer, if you can't create a folder somewhere expected, that's most likely:",
              choices: [
                { id: "a", text: "A mistake you made" },
                { id: "b", text: "An IT policy restriction, not a personal error" },
                { id: "c", text: "Proof the PC is broken" },
                { id: "d", text: "A sign Windows 11 doesn't work correctly" },
              ],
              correctChoiceId: "b",
              explanation: "Managed devices often restrict folder creation by policy — this isn't a personal mistake.",
            },
          ],
          flashcards: [
            {
              id: "cf-file-explorer-basics-f1",
              front: "Shortcut to open File Explorer?",
              back: "Windows key + E",
            },
            {
              id: "cf-file-explorer-basics-f2",
              front: "How to create a new folder?",
              back: "Right-click empty space → New → Folder",
            },
            {
              id: "cf-file-explorer-basics-f3",
              front: "Documents vs Downloads?",
              back: "Documents = saved on purpose · Downloads = arrived from the browser",
            },
            {
              id: "cf-file-explorer-basics-f4",
              front: "What does the address bar show?",
              back: "The exact path/location of the folder you're viewing",
            },
            {
              id: "cf-file-explorer-basics-f5",
              front: "Can't remember where a file is?",
              back: "Use the File Explorer search box to find it by name",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
          assignments: [
            {
              id: "cf-sim-file-folder",
              title: "Simulator: File & Folder Manager",
              type: "simulator",
              instructions:
                "Complete the in-app File & Folder Manager simulator: create, rename, and organize folders in a safe practice environment. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "cf-file-folder-manager",
              completionCriteria: [
                "Finished the File & Folder Manager simulator session",
                "Created at least one folder and moved a file into it",
                "Reviewed any missed steps",
              ],
              relatedTopicIds: ["cf-file-explorer-basics", "cf-files-copy-move-delete", "cf-extensions-and-associations"],
              order: 1,
            },
            {
              id: "cf-lab-folders",
              title: "Lab: Create and Organize Folders on a Windows 11 PC",
              type: "external-lab",
              instructions: `Practice on a real Windows 11 PC you are allowed to use for hands-on learning.

Safety boundaries: this lab only creates, renames, and moves folders/files you make yourself — it never touches system folders, installed apps, or other people's files. Avoid managed school/work accounts, since some organizations restrict folder creation outside approved locations.

Steps (Windows 11):
1. Press Windows key + E to open File Explorer.
2. Navigate to Documents.
3. Right-click empty space → New → Folder. Name it "ReLearn-Practice".
4. Inside that folder, create two subfolders: "Keep" and "Old".
5. Create a throwaway text file (right-click → New → Text Document) inside "ReLearn-Practice".
6. Copy that file into "Keep" (Ctrl+C, then Ctrl+V inside Keep).
7. Move the original file into "Old" (Ctrl+X, then Ctrl+V inside Old).
8. Delete the copy inside "Keep" and confirm it appears in the Recycle Bin, then restore it from the Recycle Bin.

Rollback: everything created in this lab lives inside "ReLearn-Practice" — delete that one folder when you're done and nothing else on the PC is affected.

Windows 10 note (legacy): the same right-click → New → Folder, Ctrl+C/Ctrl+X/Ctrl+V, and Recycle Bin steps work identically on Windows 10; only the taskbar/Start layout differs.

Mobile-only fallback: if you do not have access to a Windows 11 PC right now, complete the in-app File & Folder Manager simulator instead, and revisit this lab the next time you can use a real desktop or laptop.`,
              estimatedMinutes: 25,
              externalResourceId: "windows-11-pc",
              completionCriteria: [
                "Created ReLearn-Practice with Keep and Old subfolders",
                "Copied a file into Keep and moved the original into Old",
                "Deleted and restored a file using the Recycle Bin",
                "Deleted ReLearn-Practice as rollback cleanup when finished",
              ],
              relatedTopicIds: ["cf-file-explorer-basics", "cf-files-copy-move-delete", "cf-extensions-and-associations"],
              order: 2,
            },
          ],
          externalResources: [WINDOWS_11_PC_RESOURCE],
          estimatedStudyMinutes: 25,
          difficulty: "medium",
        },
        {
          id: "cf-files-copy-move-delete",
          name: "Copy, Move & Delete Files",
          prerequisites: ["cf-file-explorer-basics"],
          objectives: ["CF-P5-O1", "CF-P5-O2", "CF-P5-O3"],
          lesson: {
            title: "Copy, Move & Delete Files",
            content: `Once you can create and find a folder, the next skill is rearranging what is inside it — copying, moving, and deleting files without a moment of panic. These three actions cover the overwhelming majority of everyday file work on a Windows 11 PC, and once practiced a few times, they become close to automatic.

Copy leaves the original exactly where it is and creates a duplicate somewhere else. Right-click a file, choose Copy (or press Ctrl+C), open the destination folder, then right-click empty space and choose Paste (or press Ctrl+V). You now have two identical files in two locations — useful any time you want a backup copy or need the same file in more than one project folder.

Move relocates a file instead of duplicating it. Right-click a file and choose Cut (or press Ctrl+X), then Paste in the new folder. The file leaves its original location entirely — there is no duplicate left behind. A quick shortcut worth knowing: dragging a file between two folders on the same drive in File Explorer usually performs a move by default, while dragging between different drives (like an internal drive and a USB stick) usually performs a copy instead. When in doubt, use Cut/Copy and Paste explicitly rather than relying on drag behavior you're unsure about.

Delete is the action people worry about most, and on a normal Windows 11 PC, that worry is usually larger than the actual risk. Deleting a file sends it to the Recycle Bin, an icon typically sitting on the desktop. Nothing is permanently gone yet. Open the Recycle Bin, find the file, right-click it, and choose Restore to put it back exactly where it came from. The riskier action is emptying the Recycle Bin — that step is much harder to undo, so it deserves a deliberate pause rather than a reflexive click.

A useful habit for anyone still building delete confidence: rename a file to "OLD-filename" before deleting it, rather than deleting it outright. A renamed file sitting untouched for a day is easy to spot and easy to reconsider; a deleted file buried among dozens of other Recycle Bin items is harder to locate later even though it is technically recoverable.

It is worth being precise about one common misconception: Delete on a normal Windows 11 PC is not the same as a permanent wipe. That distinction changes, though, outside the ordinary desktop Recycle Bin flow — deleting a file from a cloud storage service, a USB drive in some configurations, or a shared network folder can behave differently, sometimes skipping a safety net entirely. When you are working somewhere unfamiliar, check whether a Recycle Bin or equivalent "trash" exists before assuming your usual safety net is there.

Copy, move, and delete are not separate specialized skills reserved for advanced users — they are the three verbs behind almost every file-related instruction you will ever receive at a job, from "back this up before you touch it" to "move that report into the shared folder" to "clean out anything you don't need anymore." Getting comfortable with all three, including recovering from a Recycle Bin mistake, removes a very specific and very common source of computer anxiety.`,
            experience: CF_FILES_COPY_MOVE_DELETE_EXPERIENCE,
          },
          lightbulbMoment:
            "Copy keeps two, move relocates one, and Delete almost always has an undo button called the Recycle Bin.",
          keyFacts: [
            "Copy (Ctrl+C, Ctrl+V) leaves the original in place and creates a duplicate",
            "Move (Ctrl+X, Ctrl+V) relocates the file — no duplicate remains",
            "Dragging within the same drive usually moves; dragging across drives usually copies",
            "Delete sends files to the Recycle Bin — Restore undoes most deletes",
            "Emptying the Recycle Bin is the harder-to-undo step, not the Delete itself",
          ],
          guidedExample: {
            title: "Copy, Move, Then Undo a Delete",
            steps: [
              "Copy a practice file from one folder to another using Ctrl+C and Ctrl+V.",
              "Move a different practice file using Ctrl+X and Ctrl+V — confirm the original location is now empty.",
              "Delete one of the practice files and confirm it appears in the Recycle Bin.",
              "Open the Recycle Bin, right-click the deleted file, and choose Restore.",
              "Confirm the restored file is back in its original folder.",
            ],
          },
          commonMistakes: [
            "Dragging a file between drives expecting a move, and ending up with two copies",
            "Emptying the Recycle Bin immediately out of habit instead of leaving mistakes recoverable",
            "Using Cut (Ctrl+X) and then forgetting to Paste, leaving the file in limbo",
            "Assuming Delete always means permanently gone, even outside the normal desktop Recycle Bin",
          ],
          realWorldTraps: [
            "Cloud-synced folders (like OneDrive) can delete a file everywhere it syncs, not just on one device — always check where a shared/synced delete actually applies",
            "USB drives and some network shares skip the Recycle Bin safety net entirely — deletes there can be immediate",
            "A coworker says 'just delete it, we'll get it back' assuming Recycle Bin behavior applies somewhere it doesn't",
          ],
          realWorldScenario:
            "You're asked to clean up an old project folder before a shared drive migration. Instead of deleting everything at once, you copy anything uncertain into an 'Archive-2026' folder first, then delete the originals with confidence — because even if something turns out to matter later, both the Recycle Bin and your archive copy give you two chances to recover it.",
          whenThisFails: [
            "If Restore from the Recycle Bin doesn't bring a file back where expected, check whether the original folder itself was renamed or moved, not just the file",
            "If a deleted file isn't in the Recycle Bin at all, it may have been deleted from a location that skips it (USB drive, network share, or an already-emptied bin) — stop and ask before assuming user error",
          ],
          teacherReflectionPrompt:
            "Explain, out loud, the practical difference between Copy and Move to someone who keeps accidentally ending up with duplicate files.",
          quiz: [
            {
              id: "cf-files-copy-move-delete-q1",
              prompt: "What is the key difference between Copy and Move?",
              choices: [
                { id: "a", text: "Copy deletes the original; Move keeps it" },
                { id: "b", text: "Copy keeps the original and makes a duplicate; Move relocates without a duplicate" },
                { id: "c", text: "They are the same action" },
                { id: "d", text: "Move only works on image files" },
              ],
              correctChoiceId: "b",
              explanation: "Copy duplicates a file while leaving the original in place; Move relocates it entirely.",
              difficulty: "easy",
            },
            {
              id: "cf-files-copy-move-delete-q2",
              prompt: "Where do deleted files go by default on a normal Windows 11 PC?",
              choices: [
                { id: "a", text: "Permanently erased instantly" },
                { id: "b", text: "The Recycle Bin" },
                { id: "c", text: "A cloud backup automatically" },
                { id: "d", text: "Nowhere — they stay in place" },
              ],
              correctChoiceId: "b",
              explanation: "Deleted files go to the Recycle Bin, which can be used to restore them.",
              difficulty: "easy",
            },
            {
              id: "cf-files-copy-move-delete-q3",
              prompt: "Which action is harder to undo?",
              choices: [
                { id: "a", text: "Deleting a file" },
                { id: "b", text: "Emptying the Recycle Bin" },
                { id: "c", text: "Copying a file" },
                { id: "d", text: "Renaming a file" },
              ],
              correctChoiceId: "b",
              explanation: "Emptying the Recycle Bin removes the safety net that ordinary deletes rely on.",
              difficulty: "medium",
            },
            {
              id: "cf-files-copy-move-delete-q4",
              prompt: "Dragging a file between two folders on the same internal drive usually performs which action?",
              choices: [
                { id: "a", text: "Copy" },
                { id: "b", text: "Move" },
                { id: "c", text: "Permanent delete" },
                { id: "d", text: "Rename" },
              ],
              correctChoiceId: "b",
              explanation: "Dragging within the same drive typically moves the file rather than duplicating it.",
              difficulty: "medium",
            },
            {
              id: "cf-files-copy-move-delete-q5",
              prompt: "A file was deleted from a USB drive and isn't in the Recycle Bin. What's the most likely explanation?",
              choices: [
                { id: "a", text: "You made a careless mistake and it's gone forever regardless" },
                { id: "b", text: "USB drives sometimes skip the Recycle Bin safety net" },
                { id: "c", text: "The Recycle Bin only works on Tuesdays" },
                { id: "d", text: "Windows 11 has no Recycle Bin at all" },
              ],
              correctChoiceId: "b",
              explanation: "Removable drives can bypass the Recycle Bin, deleting files more immediately than the internal drive.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-files-copy-move-delete-b1",
              prompt: "The keyboard shortcut for Copy is:",
              choices: [
                { id: "a", text: "Ctrl+C" },
                { id: "b", text: "Ctrl+X" },
                { id: "c", text: "Ctrl+V" },
                { id: "d", text: "Ctrl+Z" },
              ],
              correctChoiceId: "a",
              explanation: "Ctrl+C copies the selected item.",
            },
            {
              id: "cf-files-copy-move-delete-b2",
              prompt: "The keyboard shortcut for Cut (used for Move) is:",
              choices: [
                { id: "a", text: "Ctrl+C" },
                { id: "b", text: "Ctrl+X" },
                { id: "c", text: "Ctrl+P" },
                { id: "d", text: "Ctrl+S" },
              ],
              correctChoiceId: "b",
              explanation: "Ctrl+X cuts the selected item so it can be moved with Paste.",
            },
            {
              id: "cf-files-copy-move-delete-b3",
              prompt: "After deleting a file, where should you look to undo the delete?",
              choices: [
                { id: "a", text: "The Recycle Bin" },
                { id: "b", text: "The Start menu" },
                { id: "c", text: "The taskbar clock" },
                { id: "d", text: "Task Manager" },
              ],
              correctChoiceId: "a",
              explanation: "The Recycle Bin holds deleted files until it is emptied.",
            },
            {
              id: "cf-files-copy-move-delete-b4",
              prompt: "Restoring a file from the Recycle Bin:",
              choices: [
                { id: "a", text: "Puts it back in its original location" },
                { id: "b", text: "Permanently deletes it" },
                { id: "c", text: "Emails it to IT" },
                { id: "d", text: "Converts it to a different file type" },
              ],
              correctChoiceId: "a",
              explanation: "Restore returns the file to where it was before it was deleted.",
            },
            {
              id: "cf-files-copy-move-delete-b5",
              prompt: "A helpful habit before deleting a file you're unsure about is:",
              choices: [
                { id: "a", text: "Rename it to OLD-filename first" },
                { id: "b", text: "Empty the Recycle Bin immediately after" },
                { id: "c", text: "Delete it from a USB drive instead" },
                { id: "d", text: "Change its extension" },
              ],
              correctChoiceId: "a",
              explanation: "Renaming to OLD-filename makes an uncertain file easy to spot and reconsider.",
            },
            {
              id: "cf-files-copy-move-delete-b6",
              prompt: "Dragging a file from your internal drive to a USB stick usually:",
              choices: [
                { id: "a", text: "Copies it" },
                { id: "b", text: "Deletes the original with no copy" },
                { id: "c", text: "Renames it automatically" },
                { id: "d", text: "Does nothing" },
              ],
              correctChoiceId: "a",
              explanation: "Dragging between different drives usually performs a copy rather than a move.",
            },
            {
              id: "cf-files-copy-move-delete-b7",
              prompt: "Emptying the Recycle Bin is riskier than a normal delete because:",
              choices: [
                { id: "a", text: "It removes the safety net that lets you undo deletes" },
                { id: "b", text: "It deletes the entire operating system" },
                { id: "c", text: "It only affects Downloads" },
                { id: "d", text: "It's actually not riskier at all" },
              ],
              correctChoiceId: "a",
              explanation: "Emptying the bin removes the ability to restore anything that was in it.",
            },
            {
              id: "cf-files-copy-move-delete-b8",
              prompt: "Cloud-synced folders like OneDrive can make deletes:",
              choices: [
                { id: "a", text: "Apply across every synced device, not just one" },
                { id: "b", text: "Impossible to perform" },
                { id: "c", text: "Only visible on the original device" },
                { id: "d", text: "Automatically reversed after a week always" },
              ],
              correctChoiceId: "a",
              explanation: "Sync services can propagate a delete to every device sharing that folder.",
            },
          ],
          flashcards: [
            {
              id: "cf-files-copy-move-delete-f1",
              front: "Copy vs Move?",
              back: "Copy keeps the original + makes a duplicate. Move relocates with no duplicate.",
            },
            {
              id: "cf-files-copy-move-delete-f2",
              front: "Where do deleted files go first?",
              back: "The Recycle Bin — Restore undoes the delete",
            },
            {
              id: "cf-files-copy-move-delete-f3",
              front: "Harder-to-undo action?",
              back: "Emptying the Recycle Bin, not the delete itself",
            },
            {
              id: "cf-files-copy-move-delete-f4",
              front: "Same-drive drag usually does what?",
              back: "Moves the file (cross-drive drag usually copies)",
            },
            {
              id: "cf-files-copy-move-delete-f5",
              front: "Habit for uncertain deletes?",
              back: "Rename to OLD-filename first, then decide later",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 25,
          difficulty: "medium",
        },
        {
          id: "cf-extensions-and-associations",
          name: "File Extensions & Associations",
          prerequisites: ["cf-files-copy-move-delete"],
          objectives: ["CF-P6-O1", "CF-P6-O2", "CF-P6-O3"],
          lesson: {
            title: "File Extensions & Associations",
            content: `Two files can look almost identical in a folder — same icon style, similar name — and still be completely different kinds of files underneath. report.pdf and report.docx are a good example: both are "report," but the letters after the final dot, called the file extension, tell Windows 11 (and you) what kind of file each one actually is.

Common extensions worth recognizing on sight: .pdf for documents meant to look the same everywhere, .docx for Word documents, .xlsx for Excel spreadsheets, .jpg and .png for pictures, .mp4 for video, .zip for a compressed folder bundling multiple files together, and .exe for a program installer. That last one deserves extra caution — running an .exe means running a program with real ability to change your system, so only run one from a source you trust.

By default, Windows 11 hides file name extensions in File Explorer for a cleaner look, which sounds convenient but actually removes useful information. To turn extensions back on: open File Explorer, click View in the toolbar, then Show, then check File name extensions. Once visible, you will see the real, complete name of every file — invoice.pdf instead of just invoice — and that visibility is exactly what prevents a specific, well-known scam pattern: a malicious file disguised as invoice.pdf.exe, which looks like a harmless PDF until you can see the full extension and notice the .exe hiding at the true end of the name.

Extensions connect to a second idea: associations. Windows links each extension to a default app that opens when you double-click a file of that type. Double-click a .pdf and it might open in Microsoft Edge, or in a dedicated PDF reader if you have one installed — either way, Windows already decided which app to hand that file to. You can change these default apps later in Settings; for now, the goal is simply recognizing that this decision exists and is changeable, not memorizing every setting screen.

One misconception worth correcting directly: renaming a file's extension does not convert it into that file type. Changing notes.txt to notes.pdf does not produce a real, functioning PDF — it just relabels a plain text file with a PDF-shaped name, and most apps will fail to open it correctly, or open it and show garbled content. Real file conversion requires an app's Save As or Export feature, which actually rewrites the file's internal contents into the new format, not just its name.

That misconception is also exactly the mechanism behind fake extension scams: a scammer might rename a harmful program to look like a familiar, safe file type at a glance. Combined with hidden extensions, this trick becomes far more convincing — which is precisely why turning extensions back on is worth the two extra clicks in File Explorer's View menu.

Reading the letters after the dot, before you open anything unfamiliar, is a small habit that pays off constantly: it tells you what app to expect, what the file can actually do, and occasionally, whether something deserves a second look before you double-click it at all.`,
            experience: CF_EXTENSIONS_AND_ASSOCIATIONS_EXPERIENCE,
          },
          lightbulbMoment:
            "Read the letters after the dot before you double-click — extensions tell you what an app actually is, not just what it's named.",
          keyFacts: [
            "A file extension is the short suffix after the last dot — .pdf, .docx, .jpg, .exe",
            "Windows 11 hides extensions by default; turn them on via View → Show → File name extensions",
            "An association links an extension to the default app that opens it",
            "Renaming a file's extension does not convert it — Save As/Export actually changes the file format",
            "Treat .exe files with extra caution — they run programs, not just open documents",
          ],
          guidedExample: {
            title: "Turn On Extensions and Spot a Fake",
            steps: [
              "Open File Explorer, click View, then Show, then check File name extensions.",
              "Confirm a known file — like invoice.pdf — now shows its full extension.",
              "Imagine a file named invoice.pdf.exe arriving in your inbox as an attachment.",
              "Recognize the real extension is .exe, a program, not a document, despite the misleading name.",
              "Decide not to open it, and report or delete the suspicious attachment instead.",
            ],
          },
          commonMistakes: [
            "Assuming a hidden .exe on a renamed file is harmless because the visible name looks like a document",
            "Renaming notes.txt to notes.pdf and expecting a real, working PDF",
            "Double-clicking an unfamiliar attachment without glancing at its full extension first",
            "Leaving extensions hidden because the default setting feels like the 'correct' one",
          ],
          realWorldTraps: [
            "Email attachments named invoice.pdf.exe rely on hidden extensions to look safe — a classic phishing pattern",
            "A coworker asks you to 'just change the extension' to fix a file that won't open — that almost never actually fixes anything",
            "Some workplaces re-enable hidden extensions by IT policy specifically to reduce phishing risk — expect it, don't fight it",
          ],
          realWorldScenario:
            "An email arrives with an attachment labeled shipping-label.pdf. With extensions visible, you notice it's actually shipping-label.pdf.exe — a program pretending to be a document. You don't open it, and you report or delete the email instead, avoiding a scam that relies entirely on most people never turning extensions on.",
          whenThisFails: [
            "If View → Show → File name extensions doesn't seem to change anything, close and reopen File Explorer, or check whether a workplace policy already controls this setting",
            "If a file won't open no matter which app you try, don't rename the extension to force it — instead confirm the file fully downloaded, or ask the sender to resend/export it in a standard format",
          ],
          teacherReflectionPrompt:
            "Explain, out loud, why renaming a file's extension is different from actually converting it, using a real example file you have.",
          quiz: [
            {
              id: "cf-extensions-and-associations-q1",
              prompt: "What does a file extension tell you?",
              choices: [
                { id: "a", text: "The file's exact size" },
                { id: "b", text: "What kind of file it is, e.g. .pdf or .docx" },
                { id: "c", text: "Who created the file" },
                { id: "d", text: "How many times it's been opened" },
              ],
              correctChoiceId: "b",
              explanation: "The extension hints at the file type, telling you and Windows what kind of file it is.",
              difficulty: "easy",
            },
            {
              id: "cf-extensions-and-associations-q2",
              prompt: "By default, does Windows 11 show file extensions in File Explorer?",
              choices: [
                { id: "a", text: "Yes, always visible" },
                { id: "b", text: "No, hidden by default" },
                { id: "c", text: "Only for .exe files" },
                { id: "d", text: "Only in Settings" },
              ],
              correctChoiceId: "b",
              explanation: "Windows 11 hides extensions by default; View → Show → File name extensions turns them on.",
              difficulty: "easy",
            },
            {
              id: "cf-extensions-and-associations-q3",
              prompt: "Does renaming notes.txt to notes.pdf actually convert it to a real PDF?",
              choices: [
                { id: "a", text: "Yes, always" },
                { id: "b", text: "No — it just relabels the file" },
                { id: "c", text: "Only if you restart the PC" },
                { id: "d", text: "Only on Windows 10" },
              ],
              correctChoiceId: "b",
              explanation: "Renaming an extension only changes the label — real conversion requires Save As/Export.",
              difficulty: "easy",
            },
            {
              id: "cf-extensions-and-associations-q4",
              prompt: "Why should you treat .exe attachments with extra caution?",
              choices: [
                { id: "a", text: "They only open pictures" },
                { id: "b", text: "They run programs, with real ability to change your system" },
                { id: "c", text: "They are always safe from Microsoft" },
                { id: "d", text: "They cannot be opened on Windows 11" },
              ],
              correctChoiceId: "b",
              explanation: ".exe files are executable programs, not passive documents — treat unfamiliar ones with caution.",
              difficulty: "medium",
            },
            {
              id: "cf-extensions-and-associations-q5",
              prompt: "An attachment is named invoice.pdf.exe. What does this most likely indicate?",
              choices: [
                { id: "a", text: "A normal PDF with an unusual name" },
                { id: "b", text: "A disguised executable relying on a hidden real extension" },
                { id: "c", text: "A Windows 10-only file type" },
                { id: "d", text: "A zipped folder" },
              ],
              correctChoiceId: "b",
              explanation: "The true extension is .exe — a program disguised to look like a harmless PDF.",
              difficulty: "medium",
            },
          ],
          questionBank: [
            {
              id: "cf-extensions-and-associations-b1",
              prompt: "The extension in the filename photo.jpg is:",
              choices: [
                { id: "a", text: ".jpg" },
                { id: "b", text: "photo" },
                { id: "c", text: "photo.jpg" },
                { id: "d", text: "There is no extension" },
              ],
              correctChoiceId: "a",
              explanation: "The extension is the suffix after the last dot — .jpg in this case.",
            },
            {
              id: "cf-extensions-and-associations-b2",
              prompt: ".zip files are typically used for:",
              choices: [
                { id: "a", text: "Compressing/bundling multiple files together" },
                { id: "b", text: "Playing video only" },
                { id: "c", text: "Running as a program" },
                { id: "d", text: "Displaying a spreadsheet" },
              ],
              correctChoiceId: "a",
              explanation: ".zip is a compressed folder format bundling multiple files.",
            },
            {
              id: "cf-extensions-and-associations-b3",
              prompt: "An association in Windows refers to:",
              choices: [
                { id: "a", text: "The default app linked to a file extension" },
                { id: "b", text: "A type of network cable" },
                { id: "c", text: "A user account permission" },
                { id: "d", text: "A firmware setting" },
              ],
              correctChoiceId: "a",
              explanation: "An association links a file extension to the app that opens it by default.",
            },
            {
              id: "cf-extensions-and-associations-b4",
              prompt: "To actually convert a file to a different format, you should:",
              choices: [
                { id: "a", text: "Rename the extension" },
                { id: "b", text: "Use an app's Save As or Export feature" },
                { id: "c", text: "Delete and recreate the file" },
                { id: "d", text: "Restart Windows" },
              ],
              correctChoiceId: "b",
              explanation: "Save As/Export rewrites the file's actual contents into a new format — renaming does not.",
            },
            {
              id: "cf-extensions-and-associations-b5",
              prompt: "Where do you turn file name extensions back on in File Explorer?",
              choices: [
                { id: "a", text: "View → Show → File name extensions" },
                { id: "b", text: "Settings → Update" },
                { id: "c", text: "Start menu → Power" },
                { id: "d", text: "Task Manager" },
              ],
              correctChoiceId: "a",
              explanation: "The View menu's Show submenu controls file name extension visibility.",
            },
            {
              id: "cf-extensions-and-associations-b6",
              prompt: ".docx files are associated with which category of app?",
              choices: [
                { id: "a", text: "Word processors like Microsoft Word" },
                { id: "b", text: "Video players" },
                { id: "c", text: "Compression tools only" },
                { id: "d", text: "Firmware updaters" },
              ],
              correctChoiceId: "a",
              explanation: ".docx is Word's document format, opened by word processing apps.",
            },
            {
              id: "cf-extensions-and-associations-b7",
              prompt: "Why do hidden extensions make phishing attachments more convincing?",
              choices: [
                { id: "a", text: "They hide the true file type, like .exe, behind a familiar-looking name" },
                { id: "b", text: "They make files load faster" },
                { id: "c", text: "They automatically scan for viruses" },
                { id: "d", text: "They have no effect on phishing at all" },
              ],
              correctChoiceId: "a",
              explanation: "Hidden extensions let a disguised .exe look like a harmless document at a glance.",
            },
            {
              id: "cf-extensions-and-associations-b8",
              prompt: "You can change which app opens a given file type by default:",
              choices: [
                { id: "a", text: "Only by reinstalling Windows" },
                { id: "b", text: "In Windows Settings, by changing the default app association" },
                { id: "c", text: "It's impossible to change" },
                { id: "d", text: "Only IT administrators can ever change this" },
              ],
              correctChoiceId: "b",
              explanation: "Default app associations are changeable in Windows Settings.",
            },
          ],
          flashcards: [
            {
              id: "cf-extensions-and-associations-f1",
              front: "What is a file extension?",
              back: "The short suffix after the last dot in a filename, e.g. .pdf",
            },
            {
              id: "cf-extensions-and-associations-f2",
              front: "How to show extensions in File Explorer?",
              back: "View → Show → File name extensions",
            },
            {
              id: "cf-extensions-and-associations-f3",
              front: "Does renaming an extension convert the file?",
              back: "No — it only relabels it. Use Save As/Export to really convert it.",
            },
            {
              id: "cf-extensions-and-associations-f4",
              front: "What is an association?",
              back: "The default app linked to a file extension",
            },
            {
              id: "cf-extensions-and-associations-f5",
              front: "Why be cautious with .exe files?",
              back: "They run programs with real ability to change your system — not passive documents",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 25,
          difficulty: "medium",
        },
];
