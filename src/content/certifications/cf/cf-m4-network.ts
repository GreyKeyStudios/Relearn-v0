import type { Domain, ExternalResource } from "../../types";

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. A personal or home PC works best for this lab; managed school/work devices sometimes restrict Command Prompt access.",
};

/** Computer Fundamentals — Module 4: Internet & Networking Basics (ReLearn skills track, Pathway F). */
export const cfNetworkDomain: Domain = {
  id: "cf-network",
  name: "Module 4 — Internet & Networking Basics",
  topics: [
    {
      id: "cf-what-is-a-network",
      name: "What Is a Network?",
      prerequisites: ["cf-task-manager-restart-backup"],
      objectives: ["CF-M4-O1", "CF-M4-O2", "CF-M4-O3"],
      lesson: {
        title: "What Is a Network?",
        content: `A network is simply two or more devices connected so they can share something with each other — files, a printer, or a connection to the wider internet. That's the whole idea underneath a word that often sounds more technical than it is. Your phone, your laptop, and a smart TV sitting in the same house can all be "on a network" together long before any of them touches the internet at all.

It helps to separate two ideas that get blended together constantly in everyday speech: your local network and the internet. A local network — often called a LAN, short for Local Area Network — is the set of devices connected to each other in one place, like your home or a small office. The internet is something bigger: a vast network of networks, connecting your local network to nearly every other local network on Earth. Your home Wi-Fi is a LAN. What that LAN connects out to, through your internet provider, is the internet. They are related, but they are not the same thing, and a huge amount of "my internet is down" confusion actually starts with mixing these two up.

Here's a concrete example that makes the distinction real: if you have a printer connected to your home Wi-Fi, you can usually print to it from your laptop even if your internet connection goes out entirely. The laptop and the printer are still talking to each other over the local network — that conversation never had to leave the house. But if you try to load a website, that request has to travel out through your local network, past your router, out to your internet provider, and across the internet to a server somewhere else. Two very different distances, two very different points of failure.

Devices on a network share more than files and printers. They can share an internet connection itself — which is exactly what happens every time more than one device in your home is online at the same time. They can share access to a shared drive at work. They can send a message from one device to another almost instantly. None of this requires every device to be identical or made by the same company; a network's whole purpose is letting different devices, running different software, cooperate over a shared connection.

One respectful thing to notice: you have already been using networks constantly, probably for years, without ever needing this vocabulary. Every time you've connected a phone to home Wi-Fi, streamed a show, or printed a boarding pass from a laptop, you were using a network correctly. This module simply gives you the words and the mental map for what was already happening, so that when something goes wrong — a device won't connect, a printer disappears, Wi-Fi drops mid-call — you have a clearer starting point than just restarting everything and hoping.

The rest of this module builds directly on this one idea. Next you'll meet the specific hardware that creates a home network — modem, router, switch, access point — followed by the two main ways devices connect (wired and wireless), then how devices actually find each other by address, and finally some calm first steps for when a connection stops working. None of it requires a technical background. It requires the same thing computer confidence always requires: seeing the pieces clearly, one at a time.`,
      },
      lightbulbMoment:
        "A network is just devices sharing a connection with each other — your home Wi-Fi keeps working locally even when the internet itself goes down.",
      keyFacts: [
        "A network is two or more devices connected to share something — files, a printer, or an internet connection",
        "A LAN (Local Area Network) is your local network — home or office — separate from the internet",
        "The internet is a network of networks that your LAN connects out to",
        "Devices on the same LAN can still work together (like printing) even if the internet connection is down",
        "You've been using networks successfully for years — this module adds vocabulary to what you already do",
      ],
      guidedExample: {
        title: "Local Network vs. Internet, in One Household",
        steps: [
          "Your laptop and a wireless printer both connect to the same home Wi-Fi — that's your LAN.",
          "You print a document from the laptop — the request travels laptop → router → printer, entirely inside the house.",
          "Separately, your internet provider's service goes down for an hour.",
          "You can still print, because that trip never left the LAN.",
          "You cannot load a website, because that trip needs the internet connection your provider supplies.",
          "Same house, same Wi-Fi — two very different journeys with two very different failure points.",
        ],
      },
      commonMistakes: [
        "Treating 'the internet' and 'my Wi-Fi network' as the exact same thing",
        "Assuming every connection problem is an internet outage, even ones that are purely local",
        "Believing a network requires identical devices or the same brand of hardware",
        "Thinking 'network' is an advanced IT word rather than a description of something used daily",
      ],
      realWorldTraps: [
        "A relative says 'the internet is broken' when actually only one device lost its Wi-Fi connection — the rest of the house is fine",
        "IT support asks 'is this a local network issue or an internet issue?' and expects a quick, informed guess",
        "People assume printing wirelessly always needs internet access, and give up early when it doesn't",
      ],
      realWorldScenario:
        "A coworker messages you that 'the whole internet is down' at the office. Before escalating anything, you check whether the shared network printer still works from your own laptop. It does — which tells you the local network is fine and the problem is specifically the connection out to the internet, not everything at once. That one check saves the IT team from chasing the wrong problem.",
      whenThisFails: [
        "If you can't tell whether an issue is local or internet-wide, test something purely local (like printing, or reaching another device on the same Wi-Fi) — if that works, the problem is likely further out toward the internet",
        "If nothing local works either — no other device on the network can connect to anything, including each other — that points toward the router or modem itself, which the next lessons cover",
      ],
      teacherReflectionPrompt:
        "Explain out loud, in your own words, why a printer might keep working at home even during an internet outage — use the LAN vs. internet distinction.",
      quiz: [
        {
          id: "cf-what-is-a-network-q1",
          prompt: "What is a network, in the simplest terms?",
          choices: [
            { id: "a", text: "Any device that can connect to the internet" },
            { id: "b", text: "Two or more devices connected so they can share something with each other" },
            { id: "c", text: "A brand of router" },
            { id: "d", text: "A type of software installed on a laptop" },
          ],
          correctChoiceId: "b",
          explanation: "A network is simply devices connected to share files, a printer, or a connection — nothing more exotic than that.",
          difficulty: "easy",
        },
        {
          id: "cf-what-is-a-network-q2",
          prompt: "What does LAN stand for, and what does it describe?",
          choices: [
            { id: "a", text: "Large Area Network — describes the entire internet" },
            { id: "b", text: "Local Area Network — describes your home or office network" },
            { id: "c", text: "Linked Access Node — a type of cable" },
            { id: "d", text: "Login Authentication Number — a security code" },
          ],
          correctChoiceId: "b",
          explanation: "LAN means Local Area Network — the connected devices in one place, like a home or small office.",
          difficulty: "easy",
        },
        {
          id: "cf-what-is-a-network-q3",
          prompt:
            "Your home internet goes out, but your laptop can still print to a Wi-Fi printer in the next room. Why?",
          choices: [
            { id: "a", text: "Printers don't actually need any network at all" },
            { id: "b", text: "The laptop and printer are communicating over the local network, which doesn't require internet access" },
            { id: "c", text: "This is a bug and shouldn't be possible" },
            { id: "d", text: "The printer has its own separate internet connection" },
          ],
          correctChoiceId: "b",
          explanation: "Printing over the LAN never has to leave the house, so a local device-to-device task can keep working during an internet outage.",
          difficulty: "medium",
        },
        {
          id: "cf-what-is-a-network-q4",
          prompt: "How is the internet related to a home LAN?",
          choices: [
            { id: "a", text: "They are identical — there is no difference" },
            { id: "b", text: "The internet is a network of networks that your LAN connects out to" },
            { id: "c", text: "The internet only exists inside offices, not homes" },
            { id: "d", text: "A LAN replaces the need for internet entirely" },
          ],
          correctChoiceId: "b",
          explanation: "Your LAN is your local network; the internet is the much larger network of networks it connects to.",
          difficulty: "medium",
        },
        {
          id: "cf-what-is-a-network-q5",
          prompt: "Why does separating 'local network' from 'internet' matter for troubleshooting?",
          choices: [
            { id: "a", text: "It doesn't — every connection problem is fixed the same way" },
            { id: "b", text: "It helps you test the right thing first, instead of assuming the worst-case cause" },
            { id: "c", text: "It only matters for IT professionals with special tools" },
            { id: "d", text: "It's required by your internet provider's terms of service" },
          ],
          correctChoiceId: "b",
          explanation: "Knowing which layer might be failing lets you test something local (fast, easy) before assuming a bigger internet-wide outage.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-what-is-a-network-b1",
          prompt: "Which of these best describes a network?",
          choices: [
            { id: "a", text: "Devices connected to share files, a printer, or a connection" },
            { id: "b", text: "A single computer with no other devices attached" },
            { id: "c", text: "Only devices made by the same manufacturer" },
            { id: "d", text: "A type of antivirus software" },
          ],
          correctChoiceId: "a",
          explanation: "A network is fundamentally about connected devices sharing something with each other.",
        },
        {
          id: "cf-what-is-a-network-b2",
          prompt: "A home Wi-Fi network connecting a laptop, a phone, and a smart TV is an example of a:",
          choices: [
            { id: "a", text: "LAN" },
            { id: "b", text: "Internet service provider" },
            { id: "c", text: "Firmware update" },
            { id: "d", text: "Antivirus program" },
          ],
          correctChoiceId: "a",
          explanation: "Devices connected together in one place — like a home — form a LAN, a local network.",
        },
        {
          id: "cf-what-is-a-network-b3",
          prompt: "True or false: every device on a network must be the same brand or run the same software.",
          choices: [
            { id: "a", text: "True — networks only work between identical devices" },
            { id: "b", text: "False — a network's purpose is letting different devices cooperate" },
            { id: "c", text: "True, but only for wireless networks" },
            { id: "d", text: "False, but only for wired networks" },
          ],
          correctChoiceId: "b",
          explanation: "Networks are designed specifically so different brands and types of devices can work together.",
        },
        {
          id: "cf-what-is-a-network-b4",
          prompt: "Which task can typically still work on a LAN even when the internet is down?",
          choices: [
            { id: "a", text: "Loading a new website" },
            { id: "b", text: "Printing to a local Wi-Fi printer" },
            { id: "c", text: "Sending an email to someone outside the house" },
            { id: "d", text: "Streaming a show from an internet service" },
          ],
          correctChoiceId: "b",
          explanation: "Local printing stays entirely inside the LAN and doesn't need the internet connection to succeed.",
        },
        {
          id: "cf-what-is-a-network-b5",
          prompt: "What is the relationship between a LAN and the internet?",
          choices: [
            { id: "a", text: "No relationship — they are unrelated systems" },
            { id: "b", text: "A LAN is a small local network that connects out to the much larger internet" },
            { id: "c", text: "The internet is a smaller piece contained inside every LAN" },
            { id: "d", text: "LAN is just an older name for the internet" },
          ],
          correctChoiceId: "b",
          explanation: "Your LAN is local; the internet is the network of networks it connects to through your provider.",
        },
        {
          id: "cf-what-is-a-network-b6",
          prompt: "Why might 'the internet is down' be the wrong description of a problem?",
          choices: [
            { id: "a", text: "It's always the correct description" },
            { id: "b", text: "The issue might actually be limited to one device or the local network, not the internet itself" },
            { id: "c", text: "Because internet outages never happen" },
            { id: "d", text: "Because only businesses can lose internet access" },
          ],
          correctChoiceId: "b",
          explanation: "Many 'internet is down' complaints are actually local Wi-Fi or single-device issues, not a true internet-wide outage.",
        },
        {
          id: "cf-what-is-a-network-b7",
          prompt: "Have most people already used networks successfully before taking this course?",
          choices: [
            { id: "a", text: "No — networks are a brand-new concept for almost everyone" },
            { id: "b", text: "Yes — connecting a phone to Wi-Fi or printing wirelessly are both everyday network use" },
            { id: "c", text: "Only IT professionals have ever used a network" },
            { id: "d", text: "Only people with engineering degrees" },
          ],
          correctChoiceId: "b",
          explanation: "Nearly everyone has used networks daily; this module adds vocabulary and a mental map to that existing experience.",
        },
        {
          id: "cf-what-is-a-network-b8",
          prompt: "What is the first useful question when a connection problem appears?",
          choices: [
            { id: "a", text: "Is this a local network issue, or does it reach out to the internet?" },
            { id: "b", text: "What brand is the router?" },
            { id: "c", text: "How old is the computer?" },
            { id: "d", text: "Is the desk clean?" },
          ],
          correctChoiceId: "a",
          explanation: "Separating local vs. internet-reaching problems narrows down what to check next, just like the hardware/software distinction from earlier modules.",
        },
      ],
      flashcards: [
        {
          id: "cf-what-is-a-network-f1",
          front: "What is a network, in one sentence?",
          back: "Two or more devices connected so they can share files, a printer, or a connection",
        },
        {
          id: "cf-what-is-a-network-f2",
          front: "What does LAN stand for?",
          back: "Local Area Network — your home or office network",
        },
        {
          id: "cf-what-is-a-network-f3",
          front: "How is a LAN different from the internet?",
          back: "A LAN is your local network; the internet is the much larger network of networks it connects out to",
        },
        {
          id: "cf-what-is-a-network-f4",
          front: "Why can local printing keep working during an internet outage?",
          back: "It only travels over the local network — it never needs to reach the internet",
        },
        {
          id: "cf-what-is-a-network-f5",
          front: "First useful troubleshooting question for a connection problem?",
          back: "Is this local (LAN) or does it involve reaching the internet?",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-home-network-devices",
      name: "Modem, Router, Switch & Access Point",
      prerequisites: ["cf-what-is-a-network"],
      objectives: ["CF-M4-O4", "CF-M4-O5", "CF-M4-O6"],
      lesson: {
        title: "Modem, Router, Switch & Access Point",
        content: `Four small boxes make almost every home network possible, and in most households today they're combined into one all-in-one unit sitting near a TV or in a closet. Knowing what each piece actually does — even when they're merged into a single box — makes "my internet is down" conversations with an internet provider or IT support dramatically less confusing.

The modem is the translator between your home and your internet provider. Your provider delivers internet service over cable, fiber, or phone lines, using signals your home devices can't read directly. The modem converts that incoming signal into something your home network can use. Think of the modem as the doorway between your house and the outside internet — without it, your home network exists, but it has no path out to the wider internet at all.

The router is the traffic director for everything happening inside your home. It creates your actual local network (the LAN from the previous lesson), decides which device gets which local address, and directs traffic between your devices and out through the modem to the internet. If the modem is the doorway to the outside world, the router is the hallway system deciding which room's traffic goes where. Most home "internet down" problems are actually router problems, not modem problems — which is exactly why restarting the router is such a common first troubleshooting step.

A switch simply multiplies wired connections. It's a small box with several Ethernet ports, letting more than one wired device join the same network when a router doesn't have enough built-in ports on its own. Most home routers already have a small switch built in — four Ethernet ports on the back of a typical home router is a switch, quietly doing its job. Larger homes or offices sometimes add a separate switch when more wired ports are needed than the router alone provides.

An access point, often shortened to AP, is what actually broadcasts the Wi-Fi signal your phone and laptop connect to. In most homes, the access point is built directly into the same all-in-one box as the router — which is exactly why people casually call that single box "the router" even though it's doing router, switch, and access point jobs all at once. In larger homes or offices, separate access points are sometimes placed in different rooms specifically to extend Wi-Fi coverage past what one built-in AP could reach.

Here's the practical payoff of knowing these four roles apart: when someone tells you "my internet is out," you can now ask sharper questions. Is the modem showing its normal lights (a connection problem to the provider)? Is the router itself powered and lit up normally (a local traffic problem)? Is only Wi-Fi affected while a wired device works fine (an access point problem, not a modem problem)? None of this requires opening the box or touching a single cable — it requires knowing which job belongs to which piece.`,
      },
      lightbulbMoment:
        "Modem = doorway to the internet, router = traffic director inside your home, switch = more wired ports, access point = the Wi-Fi broadcaster — often bundled into one box, but four separate jobs.",
      keyFacts: [
        "Modem: translates your internet provider's incoming signal into something your home network can use",
        "Router: creates your local network and directs traffic between your devices and the modem",
        "Switch: multiplies wired Ethernet ports so more wired devices can join the network",
        "Access point (AP): broadcasts the Wi-Fi signal your phone/laptop connects to",
        "Most home 'all-in-one' boxes combine modem, router, switch, and AP into a single unit",
      ],
      guidedExample: {
        title: "Diagnose 'The Internet Is Out' by Job, Not Guesswork",
        steps: [
          "Check the modem's lights — if they show an error or no connection to the provider, the doorway itself is broken.",
          "If the modem looks normal, check the router's lights and whether wired devices can reach the local network at all.",
          "If wired devices work fine but Wi-Fi devices can't connect, suspect the access point specifically, not the modem.",
          "If you have several wired devices and run out of ports, that's a switch limitation, not a router or modem failure.",
          "Naming which of the four jobs is failing tells you (or support) exactly what to restart or replace first.",
        ],
      },
      commonMistakes: [
        "Calling every all-in-one home networking box simply 'the router' and assuming there's only one job happening inside it",
        "Restarting the modem when the actual problem is the router (or the reverse)",
        "Assuming a switch and a router do the same job because both have Ethernet ports",
        "Believing Wi-Fi problems always mean the whole internet connection is down",
      ],
      realWorldTraps: [
        "An ISP technician asks 'are you using our modem/router combo, or separate devices?' — knowing the difference speeds up the call significantly",
        "A landlord or office IT team blames 'the internet' for a problem that's actually a single failing access point in one room",
        "People buy an expensive new router to fix a problem that was actually the modem or the provider's line the whole time",
      ],
      realWorldScenario:
        "You're helping a family member whose Wi-Fi keeps dropping in the back bedroom, but works fine near the living room. Rather than replacing the whole networking setup, you recognize this as a coverage problem — the access point's signal simply doesn't reach that far — not a modem or router failure. A single additional access point in that room, not a full replacement, solves it.",
      whenThisFails: [
        "If the modem's connection lights show an error even after a restart, that points toward a provider-side outage or line issue — contacting the internet provider is the right next step, not replacing your own hardware",
        "If wired devices work but no Wi-Fi devices can connect anywhere in the home, suspect the access point (or its settings) specifically before assuming the whole network is broken",
      ],
      teacherReflectionPrompt:
        "Explain, out loud, the four jobs — modem, router, switch, access point — using the doorway/traffic-director/extra-ports/Wi-Fi-broadcaster analogies in your own words.",
      quiz: [
        {
          id: "cf-home-network-devices-q1",
          prompt: "What is the modem's main job?",
          choices: [
            { id: "a", text: "Broadcasting Wi-Fi to phones and laptops" },
            { id: "b", text: "Translating your internet provider's incoming signal into something your home network can use" },
            { id: "c", text: "Adding more Ethernet ports" },
            { id: "d", text: "Storing files for the whole house" },
          ],
          correctChoiceId: "b",
          explanation: "The modem is the doorway between your provider's incoming signal and your home network.",
          difficulty: "easy",
        },
        {
          id: "cf-home-network-devices-q2",
          prompt: "What does a router do?",
          choices: [
            { id: "a", text: "It creates your local network and directs traffic between your devices and the modem" },
            { id: "b", text: "It only broadcasts Wi-Fi" },
            { id: "c", text: "It only translates the provider's signal" },
            { id: "d", text: "It stores backups of your files" },
          ],
          correctChoiceId: "a",
          explanation: "The router is the traffic director for your home network, deciding where data goes.",
          difficulty: "easy",
        },
        {
          id: "cf-home-network-devices-q3",
          prompt: "Wired devices connect to the network fine, but no device can connect over Wi-Fi. Which piece most likely has a problem?",
          choices: [
            { id: "a", text: "The modem" },
            { id: "b", text: "The access point" },
            { id: "c", text: "The switch's wired ports" },
            { id: "d", text: "The internet provider's line" },
          ],
          correctChoiceId: "b",
          explanation: "Since wired connections work, the modem and router's core traffic function are fine — the access point specifically handling Wi-Fi is the likely issue.",
          difficulty: "medium",
        },
        {
          id: "cf-home-network-devices-q4",
          prompt: "What does a switch add to a home network?",
          choices: [
            { id: "a", text: "More Wi-Fi coverage" },
            { id: "b", text: "A translation of the provider's signal" },
            { id: "c", text: "More wired Ethernet ports for additional wired devices" },
            { id: "d", text: "A backup internet connection" },
          ],
          correctChoiceId: "c",
          explanation: "A switch multiplies wired ports so more devices can connect with cables.",
          difficulty: "medium",
        },
        {
          id: "cf-home-network-devices-q5",
          prompt: "Why do many people call their entire home networking box 'the router,' even though it's doing more than one job?",
          choices: [
            { id: "a", text: "Because only routers exist in modern homes" },
            { id: "b", text: "Because modem, router, switch, and access point are often combined into a single all-in-one box" },
            { id: "c", text: "Because switches and access points were discontinued" },
            { id: "d", text: "Because the word 'modem' is no longer used" },
          ],
          correctChoiceId: "b",
          explanation: "Most home units bundle all four jobs into one box, which is why the terms get used loosely in everyday speech.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-home-network-devices-b1",
          prompt: "Which device connects your home to your internet provider's incoming signal?",
          choices: [
            { id: "a", text: "Modem" },
            { id: "b", text: "Switch" },
            { id: "c", text: "Access point" },
            { id: "d", text: "Printer" },
          ],
          correctChoiceId: "a",
          explanation: "The modem translates the provider's incoming signal for your home network.",
        },
        {
          id: "cf-home-network-devices-b2",
          prompt: "Which device broadcasts the Wi-Fi signal your phone connects to?",
          choices: [
            { id: "a", text: "Access point" },
            { id: "b", text: "Modem" },
            { id: "c", text: "Switch" },
            { id: "d", text: "Ethernet cable" },
          ],
          correctChoiceId: "a",
          explanation: "The access point (AP) is specifically responsible for broadcasting Wi-Fi.",
        },
        {
          id: "cf-home-network-devices-b3",
          prompt: "A home router with four Ethernet ports on the back is quietly also acting as a:",
          choices: [
            { id: "a", text: "Switch" },
            { id: "b", text: "Printer" },
            { id: "c", text: "Modem" },
            { id: "d", text: "Firewall appliance only" },
          ],
          correctChoiceId: "a",
          explanation: "Multiple built-in Ethernet ports mean the router includes basic switch functionality.",
        },
        {
          id: "cf-home-network-devices-b4",
          prompt: "If the modem's connection lights show an error even after restarting, what's the best next step?",
          choices: [
            { id: "a", text: "Buy a completely new router" },
            { id: "b", text: "Contact the internet provider — this may be a provider-side or line issue" },
            { id: "c", text: "Ignore it; modems don't show errors" },
            { id: "d", text: "Add a second access point" },
          ],
          correctChoiceId: "b",
          explanation: "A persistent modem error after a restart often points to the provider's service or line, not your own equipment.",
        },
        {
          id: "cf-home-network-devices-b5",
          prompt: "Which best describes a router's role?",
          choices: [
            { id: "a", text: "Traffic director between your devices, your local network, and the modem" },
            { id: "b", text: "A cable that connects two computers" },
            { id: "c", text: "A device that only stores photos" },
            { id: "d", text: "A type of Wi-Fi password" },
          ],
          correctChoiceId: "a",
          explanation: "The router directs traffic within your LAN and out toward the modem/internet.",
        },
        {
          id: "cf-home-network-devices-b6",
          prompt: "Why might a larger home add a second access point?",
          choices: [
            { id: "a", text: "To extend Wi-Fi coverage into rooms the first one doesn't reach well" },
            { id: "b", text: "Because modems require two access points to function" },
            { id: "c", text: "To slow down the internet on purpose" },
            { id: "d", text: "Access points are required by law in large homes" },
          ],
          correctChoiceId: "a",
          explanation: "Extra access points are commonly added purely to extend Wi-Fi range and coverage.",
        },
        {
          id: "cf-home-network-devices-b7",
          prompt: "What is the relationship between a switch and a router in most home setups?",
          choices: [
            { id: "a", text: "A basic switch is often built directly into the home router" },
            { id: "b", text: "They are always separate, unrelated physical boxes" },
            { id: "c", text: "A switch replaces the need for a router entirely" },
            { id: "d", text: "A switch only works with fiber internet" },
          ],
          correctChoiceId: "a",
          explanation: "Home routers commonly include a small built-in switch, seen as extra Ethernet ports on the back.",
        },
        {
          id: "cf-home-network-devices-b8",
          prompt: "Which question helps most when diagnosing 'my Wi-Fi is out but wired still works'?",
          choices: [
            { id: "a", text: "Is the access point specifically having trouble, since the modem and router's core function still seem fine?" },
            { id: "b", text: "What brand of laptop do I own?" },
            { id: "c", text: "Has my internet provider ever raised prices?" },
            { id: "d", text: "How many browser tabs are open?" },
          ],
          correctChoiceId: "a",
          explanation: "A wired-works, wireless-fails pattern points specifically at the access point function, narrowing the search.",
        },
      ],
      flashcards: [
        {
          id: "cf-home-network-devices-f1",
          front: "What does a modem do?",
          back: "Translates your internet provider's incoming signal into something your home network can use",
        },
        {
          id: "cf-home-network-devices-f2",
          front: "What does a router do?",
          back: "Creates your local network and directs traffic between your devices and the modem",
        },
        {
          id: "cf-home-network-devices-f3",
          front: "What does a switch do?",
          back: "Multiplies wired Ethernet ports so more wired devices can join the network",
        },
        {
          id: "cf-home-network-devices-f4",
          front: "What does an access point (AP) do?",
          back: "Broadcasts the Wi-Fi signal that phones and laptops connect to",
        },
        {
          id: "cf-home-network-devices-f5",
          front: "Why is a home 'router box' usually doing four jobs at once?",
          back: "Modem, router, switch, and access point are commonly bundled into one all-in-one unit",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "easy",
    },
    {
      id: "cf-ethernet-vs-wifi",
      name: "Ethernet vs. Wi-Fi",
      prerequisites: ["cf-home-network-devices"],
      objectives: ["CF-M4-O7", "CF-M4-O8", "CF-M4-O9"],
      lesson: {
        title: "Ethernet vs. Wi-Fi",
        content: `Every device on your network connects one of two ways: a physical Ethernet cable, or a wireless Wi-Fi signal. Both get you onto the same local network and out to the internet — the difference is entirely in how the connection travels, and that difference has real, practical consequences worth knowing before something goes wrong.

Ethernet is a wired connection: a cable running from a device — a laptop, a desktop, a game console, a smart TV — directly into a port on the router or a switch. Because the connection travels through a physical cable rather than through open air, Ethernet is generally faster and more stable than Wi-Fi, and it isn't affected by walls, distance, or competing wireless signals nearby. The trade-off is obvious and physical: you need a cable, and you need to be near enough to plug into a router, switch, or a wall jack wired back to one.

Wi-Fi is the wireless alternative, broadcast by the access point covered in the previous lesson. It trades some speed and consistency for enormous convenience — no cable, no fixed spot, freedom to move around a house or office while staying connected. Wi-Fi signals are affected by distance from the access point, by physical obstacles like walls and floors, and by interference from other wireless signals, including neighboring Wi-Fi networks and certain household electronics like microwaves.

Neither option is universally "better" — they solve different problems. A desktop computer that never moves, sitting a few feet from the router, is often an excellent candidate for a wired Ethernet connection: maximum stability, zero wireless quirks, one-time cable setup. A phone, tablet, or laptop that needs to move freely from room to room is exactly what Wi-Fi was built for — plugging a laptop into a cable every time you sit on the couch would defeat the entire point of owning a laptop.

There's a genuinely useful troubleshooting habit hiding in this comparison: when something has an unreliable connection, plugging that device into Ethernet, even temporarily, tells you a lot. If the problem disappears the moment you're wired in, the issue was almost certainly Wi-Fi-related — signal strength, interference, or the access point itself — not a deeper problem with your modem, your provider, or the device. If the problem persists even over a wired connection, the cause lives somewhere else entirely, and chasing Wi-Fi settings would have been a waste of time.

Knowing this distinction also protects you from a common myth: that Wi-Fi and "the internet" are the same thing, or that a weak Wi-Fi signal means your internet service itself is failing. A weak Wi-Fi signal is a local, physical-distance problem between your device and the access point — completely separate from whether your internet service, out past the modem, is working perfectly fine the entire time.`,
      },
      lightbulbMoment:
        "Ethernet is a cable-based connection that's fast and stable but fixed in place; Wi-Fi is wireless and flexible but sensitive to distance and interference — plugging in a cable is a genuine troubleshooting test, not just a preference.",
      keyFacts: [
        "Ethernet: a wired cable connection — generally faster and more stable, but requires a physical cable and a nearby port",
        "Wi-Fi: a wireless connection broadcast by the access point — flexible and mobile, but affected by distance and interference",
        "Stationary devices near the router (desktops, TVs) are strong candidates for Ethernet",
        "Mobile devices (phones, laptops moving room to room) are exactly what Wi-Fi is designed for",
        "Plugging a struggling device into Ethernet temporarily is a real diagnostic test, not just a fix",
      ],
      guidedExample: {
        title: "Use a Cable to Isolate a Wi-Fi Problem",
        steps: [
          "A laptop's video calls keep freezing over Wi-Fi.",
          "You plug the laptop into an available Ethernet port with a cable, temporarily.",
          "The video call is smooth and stable over the wired connection.",
          "That single result tells you the problem was Wi-Fi-related — signal, interference, or distance — not the internet service itself.",
          "You now know to focus on Wi-Fi position or interference, not call your internet provider about an outage.",
        ],
      },
      commonMistakes: [
        "Assuming Wi-Fi and 'the internet' are the same thing",
        "Blaming your internet service for a problem that's actually weak Wi-Fi signal strength",
        "Believing Ethernet is always impractical because 'cables are old-fashioned'",
        "Never testing with a cable when troubleshooting a suspicious wireless connection issue",
      ],
      realWorldTraps: [
        "A video call keeps freezing and a coworker assumes 'the internet is bad,' when a wired test would reveal it's local Wi-Fi interference in that specific room",
        "Streaming devices placed far from the router get blamed for 'bad service' when Ethernet or repositioning the access point would fix it",
        "People buy a faster internet plan to fix what is actually a weak Wi-Fi signal problem, which a faster plan cannot solve",
      ],
      realWorldScenario:
        "A home office setup has a desktop computer positioned right next to the router, but connected only over Wi-Fi, and video calls keep stuttering. Rather than upgrading the internet plan, you run a short Ethernet cable from the router to the desktop. The stuttering disappears immediately — the desktop never needed Wi-Fi's flexibility in the first place, and a wired connection was simply the better tool for a device that never moves.",
      whenThisFails: [
        "If a connection problem persists even over a wired Ethernet connection, stop suspecting Wi-Fi and look further out — router, modem, or the internet service itself",
        "If Ethernet isn't available or practical for a given device, try relocating closer to the access point or reducing obstacles (walls, distance) before assuming the hardware itself is failing",
      ],
      teacherReflectionPrompt:
        "Explain, out loud, why plugging a device into Ethernet is a genuine troubleshooting test rather than just an alternative preference.",
      quiz: [
        {
          id: "cf-ethernet-vs-wifi-q1",
          prompt: "What is Ethernet?",
          choices: [
            { id: "a", text: "A wireless-only connection type" },
            { id: "b", text: "A wired cable connection to a router or switch" },
            { id: "c", text: "A brand of Wi-Fi router" },
            { id: "d", text: "A type of internet provider" },
          ],
          correctChoiceId: "b",
          explanation: "Ethernet is a physical, wired connection method, distinct from wireless Wi-Fi.",
          difficulty: "easy",
        },
        {
          id: "cf-ethernet-vs-wifi-q2",
          prompt: "Which of these commonly affects Wi-Fi but not Ethernet?",
          choices: [
            { id: "a", text: "Distance from the access point and physical obstacles like walls" },
            { id: "b", text: "The color of the device" },
            { id: "c", text: "The device's operating system version" },
            { id: "d", text: "How many browser tabs are open" },
          ],
          correctChoiceId: "a",
          explanation: "Distance and obstacles are classic wireless-signal issues that don't affect a physical cable connection.",
          difficulty: "easy",
        },
        {
          id: "cf-ethernet-vs-wifi-q3",
          prompt: "A stationary desktop sitting right next to the router is a strong candidate for which connection type, and why?",
          choices: [
            { id: "a", text: "Wi-Fi, because desktops can't use cables" },
            { id: "b", text: "Ethernet, because it's stable, fast, and the device never needs to move" },
            { id: "c", text: "Neither — desktops don't need a network connection" },
            { id: "d", text: "Wi-Fi, because it's always faster than Ethernet" },
          ],
          correctChoiceId: "b",
          explanation: "A device that never moves gains all of Ethernet's stability with none of the downside of being tied to a cable.",
          difficulty: "medium",
        },
        {
          id: "cf-ethernet-vs-wifi-q4",
          prompt: "A laptop's video calls freeze over Wi-Fi, but run smoothly once plugged into Ethernet. What does that tell you?",
          choices: [
            { id: "a", text: "The internet service itself is completely broken" },
            { id: "b", text: "The problem was Wi-Fi-related — signal or interference — not the internet connection itself" },
            { id: "c", text: "Ethernet cables cause video call software to work better regardless of the actual issue" },
            { id: "d", text: "Nothing useful — the result is random" },
          ],
          correctChoiceId: "b",
          explanation: "Isolating the problem to the wireless hop specifically points at Wi-Fi signal or interference as the cause.",
          difficulty: "medium",
        },
        {
          id: "cf-ethernet-vs-wifi-q5",
          prompt: "Why is 'my Wi-Fi is weak' not the same statement as 'my internet is down'?",
          choices: [
            { id: "a", text: "They are always the same thing" },
            { id: "b", text: "Weak Wi-Fi is a local signal/distance issue; the internet service beyond the modem can be working fine at the same time" },
            { id: "c", text: "Wi-Fi and internet service are managed by completely unrelated companies" },
            { id: "d", text: "Weak Wi-Fi only happens overnight" },
          ],
          correctChoiceId: "b",
          explanation: "Wi-Fi strength is a local, physical-distance issue separate from whether the internet service itself is functioning.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-ethernet-vs-wifi-b1",
          prompt: "Which connection type generally offers more speed and stability?",
          choices: [
            { id: "a", text: "Ethernet" },
            { id: "b", text: "Wi-Fi" },
            { id: "c", text: "Both are identical in every case" },
            { id: "d", text: "Neither — speed depends only on the device brand" },
          ],
          correctChoiceId: "a",
          explanation: "A wired Ethernet connection is generally faster and more stable than wireless Wi-Fi.",
        },
        {
          id: "cf-ethernet-vs-wifi-b2",
          prompt: "Which connection type is better suited to a phone that moves around the house?",
          choices: [
            { id: "a", text: "Wi-Fi" },
            { id: "b", text: "Ethernet" },
            { id: "c", text: "Neither — phones can't connect to networks" },
            { id: "d", text: "A switch cable" },
          ],
          correctChoiceId: "a",
          explanation: "Wi-Fi's flexibility is exactly what mobile devices need, unlike a fixed Ethernet cable.",
        },
        {
          id: "cf-ethernet-vs-wifi-b3",
          prompt: "What commonly interferes with Wi-Fi signal quality?",
          choices: [
            { id: "a", text: "Distance, walls, and competing wireless signals" },
            { id: "b", text: "The type of Ethernet cable in a different room" },
            { id: "c", text: "The brightness of the monitor" },
            { id: "d", text: "How many folders exist on the hard drive" },
          ],
          correctChoiceId: "a",
          explanation: "Physical distance, obstacles, and interference are the classic causes of weak Wi-Fi.",
        },
        {
          id: "cf-ethernet-vs-wifi-b4",
          prompt: "What is a useful diagnostic step when a device has an unreliable wireless connection?",
          choices: [
            { id: "a", text: "Temporarily connect it via Ethernet to see if the problem disappears" },
            { id: "b", text: "Immediately replace the device" },
            { id: "c", text: "Ignore it — wireless issues can't be tested" },
            { id: "d", text: "Uninstall the operating system" },
          ],
          correctChoiceId: "a",
          explanation: "Testing with a wired connection isolates whether the issue is specifically wireless-related.",
        },
        {
          id: "cf-ethernet-vs-wifi-b5",
          prompt: "If a connection problem persists even over Ethernet, what should you suspect?",
          choices: [
            { id: "a", text: "The problem is likely further out — router, modem, or internet service — not Wi-Fi" },
            { id: "b", text: "The Ethernet cable is definitely broken" },
            { id: "c", text: "Nothing — Ethernet problems can't be diagnosed" },
            { id: "d", text: "The device needs a factory reset immediately" },
          ],
          correctChoiceId: "a",
          explanation: "A problem that survives a switch to wired connection points to a cause beyond just Wi-Fi.",
        },
        {
          id: "cf-ethernet-vs-wifi-b6",
          prompt: "Is Wi-Fi the same thing as 'the internet'?",
          choices: [
            { id: "a", text: "Yes, they are always identical" },
            { id: "b", text: "No — Wi-Fi is a local wireless connection method; the internet is what it connects out to" },
            { id: "c", text: "Yes, but only on weekends" },
            { id: "d", text: "No, Wi-Fi is only used inside offices" },
          ],
          correctChoiceId: "b",
          explanation: "Wi-Fi is one way to connect locally; the internet is the separate, larger destination that connection can reach.",
        },
        {
          id: "cf-ethernet-vs-wifi-b7",
          prompt: "Why might someone upgrade their internet plan without actually fixing their problem?",
          choices: [
            { id: "a", text: "Because the real issue was weak Wi-Fi signal, which a faster plan doesn't fix" },
            { id: "b", text: "Because internet plans always fix Wi-Fi hardware issues" },
            { id: "c", text: "Because Ethernet cables require a plan upgrade" },
            { id: "d", text: "This scenario never actually happens" },
          ],
          correctChoiceId: "a",
          explanation: "A faster internet plan does nothing for a local Wi-Fi signal problem, so the underlying issue remains.",
        },
        {
          id: "cf-ethernet-vs-wifi-b8",
          prompt: "A game console sits permanently a few feet from the router. What connection type would likely serve it best?",
          choices: [
            { id: "a", text: "Ethernet, since it never moves and benefits from maximum stability" },
            { id: "b", text: "Wi-Fi only, because consoles can't use cables" },
            { id: "c", text: "Neither — consoles don't need a network" },
            { id: "d", text: "A dial-up connection" },
          ],
          correctChoiceId: "a",
          explanation: "A stationary device close to the router is an ideal candidate for a wired Ethernet connection.",
        },
      ],
      flashcards: [
        {
          id: "cf-ethernet-vs-wifi-f1",
          front: "What is Ethernet?",
          back: "A wired cable connection to a router or switch — generally fast and stable",
        },
        {
          id: "cf-ethernet-vs-wifi-f2",
          front: "What is Wi-Fi?",
          back: "A wireless connection broadcast by an access point — flexible, but sensitive to distance and interference",
        },
        {
          id: "cf-ethernet-vs-wifi-f3",
          front: "Best candidate for Ethernet?",
          back: "A stationary device near the router — like a desktop or TV",
        },
        {
          id: "cf-ethernet-vs-wifi-f4",
          front: "Best candidate for Wi-Fi?",
          back: "A mobile device that moves room to room — like a phone or laptop",
        },
        {
          id: "cf-ethernet-vs-wifi-f5",
          front: "Why plug a struggling device into Ethernet as a test?",
          back: "If the problem disappears, it was Wi-Fi-related, not a deeper internet or device issue",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-ip-and-dns-beginner",
      name: "IP Addresses & DNS (Beginner Basics)",
      prerequisites: ["cf-ethernet-vs-wifi"],
      objectives: ["CF-M4-O10", "CF-M4-O11", "CF-M4-O12"],
      lesson: {
        title: "IP Addresses & DNS (Beginner Basics)",
        content: `Every device on a network needs an address so other devices know where to send information — that address is called an IP address. This lesson stays deliberately at beginner level: no address math, no technical classification, just enough to recognize what an IP address is, what it's for, and how a related idea, DNS, saves you from ever having to remember one.

An IP address is a set of numbers assigned to a device on a network, similar in spirit to a mailing address for a house. Just as a delivery driver needs a specific address to bring a package to the right door, a network needs a specific address to deliver information to the right device. Your laptop has one, your phone has one, and so does the website server you're loading a page from — every participant in the exchange needs an address so responses know where to go back to.

You almost never type or memorize IP addresses yourself, and that's entirely by design — that's exactly the job of DNS, short for Domain Name System. DNS is essentially a phone book, or more precisely a contacts list, that translates a name you can actually remember — like a website's name — into the numeric IP address the network actually uses behind the scenes. When you type a website name into a browser, DNS quietly looks up the matching IP address for you, the same way tapping a saved contact's name on your phone dials the right number without you ever memorizing it.

This name-to-address lookup happens in a fraction of a second, invisibly, every single time you load a website — which is exactly why most people go their entire lives never thinking about IP addresses or DNS at all. You don't need to either, for day-to-day use. What's worth knowing at this level is simply that the lookup exists, and that it's the reason typing a memorable name works at all instead of forcing everyone to memorize strings of numbers for every website they visit.

There's one genuinely useful troubleshooting fact hiding in this beginner-level explanation: sometimes a website "won't load," but the underlying connection to the internet is actually fine — the DNS lookup itself failed or is temporarily unreachable, not the connection to the destination. A classic sign of this specific situation is when a website by name fails to load, but something that uses a raw address directly still works. You won't need to run that test yourself yet at this level, but recognizing that "name doesn't work" and "connection doesn't work" can be two different problems is a genuinely valuable habit going forward — including in the hands-on lab that follows this lesson.

Nothing about IP addresses or DNS requires memorizing number formats, doing any math, or understanding networking classes — that level of depth belongs to more advanced material later on, if you ever choose to go there. For now, the goal is simply recognition: every device has an address, DNS quietly translates names into those addresses, and that translation is one more piece of the invisible plumbing making "just type a name and press enter" possible.`,
      },
      lightbulbMoment:
        "An IP address is like a mailing address for a device; DNS is the phone book that turns a memorable name into that address automatically, so you never have to memorize numbers.",
      keyFacts: [
        "An IP address is a numeric address assigned to a device on a network — similar to a mailing address",
        "Every device involved in an exchange (your device and the destination) needs an address",
        "DNS (Domain Name System) translates memorable names into the numeric IP address behind the scenes",
        "This name-to-address lookup happens invisibly, in a fraction of a second, every time you load a website",
        "A website 'not loading' by name isn't always an internet problem — sometimes it's specifically the name lookup that's failing",
      ],
      guidedExample: {
        title: "How Typing a Website Name Actually Works",
        steps: [
          "You type a website's name into the browser and press enter.",
          "Behind the scenes, DNS looks up the numeric IP address that matches that name.",
          "Your device now knows the actual address to send the request to.",
          "The request travels out to that address and the website loads.",
          "You never saw a single number — DNS handled the translation invisibly the whole time.",
        ],
      },
      commonMistakes: [
        "Assuming IP addresses are something you need to memorize or manage day to day",
        "Believing 'the website won't load' always means the whole internet connection is broken",
        "Confusing DNS with the internet connection itself, rather than understanding it as a name-lookup step",
        "Overcomplicating this topic with technical depth (subnetting, address classes) that isn't needed at beginner level",
      ],
      realWorldTraps: [
        "IT support asks 'can you reach it by IP or does the name also fail?' as an early troubleshooting question — recognizing the difference speeds up the conversation",
        "A workplace tool briefly fails for everyone at once purely because of a DNS hiccup, while the underlying servers themselves are fine",
        "People assume restarting their whole computer fixes 'name doesn't load' issues, when the actual fix is often unrelated to the device itself",
      ],
      realWorldScenario:
        "A coworker says a work website 'is down' for the whole team. Before assuming a major outage, you recall that name-based loading and the underlying connection aren't always the same failure. That framing alone — even without running any technical test yourself — helps you ask a sharper question when you report it: is this every site, or just this one name?",
      whenThisFails: [
        "If a website by name won't load, try waiting a minute and trying again — many name-lookup hiccups are brief and resolve on their own",
        "If nothing loads by name for an extended period across many different websites, that points toward a broader connection issue, not just one lookup — revisit the connection troubleshooting basics in the next lesson",
      ],
      teacherReflectionPrompt:
        "Explain, out loud, the mailing-address and phone-book analogies for IP addresses and DNS, in your own words, to someone who has never heard either term.",
      quiz: [
        {
          id: "cf-ip-and-dns-beginner-q1",
          prompt: "What is an IP address?",
          choices: [
            { id: "a", text: "A password for a Wi-Fi network" },
            { id: "b", text: "A numeric address assigned to a device on a network, similar to a mailing address" },
            { id: "c", text: "The name of a website" },
            { id: "d", text: "A type of Ethernet cable" },
          ],
          correctChoiceId: "b",
          explanation: "An IP address identifies a device on a network, similar in purpose to a mailing address for a house.",
          difficulty: "easy",
        },
        {
          id: "cf-ip-and-dns-beginner-q2",
          prompt: "What does DNS do?",
          choices: [
            { id: "a", text: "It translates a memorable name into the numeric IP address the network uses" },
            { id: "b", text: "It broadcasts Wi-Fi signal" },
            { id: "c", text: "It stores backups of your files" },
            { id: "d", text: "It speeds up Ethernet cables" },
          ],
          correctChoiceId: "a",
          explanation: "DNS is essentially a phone book, translating names you can remember into the addresses the network actually uses.",
          difficulty: "easy",
        },
        {
          id: "cf-ip-and-dns-beginner-q3",
          prompt: "Why don't most people ever need to memorize IP addresses?",
          choices: [
            { id: "a", text: "Because IP addresses don't actually exist" },
            { id: "b", text: "Because DNS automatically translates memorable names into the correct address behind the scenes" },
            { id: "c", text: "Because every device shares the exact same address" },
            { id: "d", text: "Because IP addresses are optional" },
          ],
          correctChoiceId: "b",
          explanation: "DNS quietly handles the name-to-address translation so users never have to remember or type numbers.",
          difficulty: "medium",
        },
        {
          id: "cf-ip-and-dns-beginner-q4",
          prompt: "A website won't load by name, but the underlying connection to the internet might still be working. What does that suggest?",
          choices: [
            { id: "a", text: "The whole internet must be down" },
            { id: "b", text: "The name lookup (DNS) specifically may have failed, separate from the general connection" },
            { id: "c", text: "The device's screen is broken" },
            { id: "d", text: "This situation is impossible" },
          ],
          correctChoiceId: "b",
          explanation: "Name-lookup failures and general connection failures are distinct problems that can happen independently.",
          difficulty: "medium",
        },
        {
          id: "cf-ip-and-dns-beginner-q5",
          prompt: "At the beginner level taught here, what do you need to know about IP address formats or address classes?",
          choices: [
            { id: "a", text: "You need to memorize the full numeric format and math behind it" },
            { id: "b", text: "Nothing beyond recognizing that every device has an address — deeper technical detail is not needed at this level" },
            { id: "c", text: "You need to configure your own IP address manually every day" },
            { id: "d", text: "IP addresses change meaning depending on the day of the week" },
          ],
          correctChoiceId: "b",
          explanation: "This lesson intentionally stays at recognition level — deeper technical detail belongs to more advanced material later.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-ip-and-dns-beginner-b1",
          prompt: "What analogy best describes an IP address?",
          choices: [
            { id: "a", text: "A mailing address for a house" },
            { id: "b", text: "A brand name" },
            { id: "c", text: "A type of software license" },
            { id: "d", text: "A password" },
          ],
          correctChoiceId: "a",
          explanation: "An IP address identifies where to deliver information, just like a mailing address identifies where to deliver a package.",
        },
        {
          id: "cf-ip-and-dns-beginner-b2",
          prompt: "What analogy best describes DNS?",
          choices: [
            { id: "a", text: "A phone book or contacts list translating names into numbers" },
            { id: "b", text: "A physical Ethernet cable" },
            { id: "c", text: "A type of virus" },
            { id: "d", text: "A brand of router" },
          ],
          correctChoiceId: "a",
          explanation: "DNS translates memorable names into the numeric address the network uses, just like a phone book turns a name into a number.",
        },
        {
          id: "cf-ip-and-dns-beginner-b3",
          prompt: "Does every device involved in loading a website need an address?",
          choices: [
            { id: "a", text: "Yes — both your device and the destination server need an address" },
            { id: "b", text: "No — only the website's server needs one" },
            { id: "c", text: "No — only your device needs one" },
            { id: "d", text: "Addresses are optional and rarely used" },
          ],
          correctChoiceId: "a",
          explanation: "Both sides of the exchange need addresses so responses know exactly where to be delivered.",
        },
        {
          id: "cf-ip-and-dns-beginner-b4",
          prompt: "What happens, invisibly, every time you type a website's name and press enter?",
          choices: [
            { id: "a", text: "DNS looks up the matching IP address behind the scenes" },
            { id: "b", text: "Your device permanently changes its own IP address" },
            { id: "c", text: "The Wi-Fi password resets" },
            { id: "d", text: "Nothing happens until you refresh manually" },
          ],
          correctChoiceId: "a",
          explanation: "The name-to-address DNS lookup happens automatically and invisibly for every website you visit by name.",
        },
        {
          id: "cf-ip-and-dns-beginner-b5",
          prompt: "Why is it useful to know that 'name doesn't load' and 'connection doesn't work' can be different problems?",
          choices: [
            { id: "a", text: "It isn't useful — they're always the same problem" },
            { id: "b", text: "It helps you ask sharper troubleshooting questions instead of assuming the worst case immediately" },
            { id: "c", text: "It only matters for network engineers" },
            { id: "d", text: "It changes your Wi-Fi password automatically" },
          ],
          correctChoiceId: "b",
          explanation: "Recognizing the distinction helps frame a more precise, useful troubleshooting question.",
        },
        {
          id: "cf-ip-and-dns-beginner-b6",
          prompt: "Do you need to understand IP address math or classes for everyday computer confidence?",
          choices: [
            { id: "a", text: "No — this beginner lesson intentionally stops at simple recognition" },
            { id: "b", text: "Yes — it's required for basic troubleshooting" },
            { id: "c", text: "Yes — every user must configure addresses manually" },
            { id: "d", text: "No — because IP addresses don't actually exist" },
          ],
          correctChoiceId: "a",
          explanation: "Deeper technical detail is deliberately deferred to more advanced material; recognition is enough at this level.",
        },
        {
          id: "cf-ip-and-dns-beginner-b7",
          prompt: "If a brief DNS hiccup affects one workplace tool for everyone at once, what does that most likely mean?",
          choices: [
            { id: "a", text: "The underlying servers themselves may be fine — the name-lookup step had a temporary issue" },
            { id: "b", text: "Every employee's device is broken" },
            { id: "c", text: "The internet no longer exists" },
            { id: "d", text: "The Wi-Fi password must be changed" },
          ],
          correctChoiceId: "a",
          explanation: "A shared DNS hiccup can look like an outage while the actual destination servers remain fully functional.",
        },
        {
          id: "cf-ip-and-dns-beginner-b8",
          prompt: "What is the practical benefit of DNS existing at all?",
          choices: [
            { id: "a", text: "You get to type memorable names instead of memorizing numeric addresses for every site" },
            { id: "b", text: "It makes Wi-Fi signal stronger" },
            { id: "c", text: "It replaces the need for a router" },
            { id: "d", text: "It prevents all malware" },
          ],
          correctChoiceId: "a",
          explanation: "DNS's whole purpose is letting people use memorable names instead of memorizing numeric IP addresses.",
        },
      ],
      flashcards: [
        {
          id: "cf-ip-and-dns-beginner-f1",
          front: "What is an IP address?",
          back: "A numeric address assigned to a device on a network — like a mailing address",
        },
        {
          id: "cf-ip-and-dns-beginner-f2",
          front: "What does DNS stand for and do?",
          back: "Domain Name System — translates a memorable name into the numeric IP address",
        },
        {
          id: "cf-ip-and-dns-beginner-f3",
          front: "Why don't you need to memorize IP addresses?",
          back: "DNS automatically translates names into addresses behind the scenes",
        },
        {
          id: "cf-ip-and-dns-beginner-f4",
          front: "What might a 'website by name won't load' problem actually be?",
          back: "A DNS name-lookup issue, separate from a full internet connection failure",
        },
        {
          id: "cf-ip-and-dns-beginner-f5",
          front: "Do you need address math/classes at beginner level?",
          back: "No — just recognizing that devices have addresses and DNS translates names into them",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard", "external-lab"],
      assignments: [
        {
          id: "cf-lab-ipconfig-ping",
          title: "Lab: Check Your Address and Connection with ipconfig and ping",
          type: "external-lab",
          instructions: `Practice on a Windows 11 PC you are allowed to use. This lab is entirely read-only — you will only look at information and send simple test requests. Nothing here changes any setting, installs anything, or can break your connection.

Safety boundaries: every command below only displays information or sends a small, harmless test signal. You will not change any network setting, and there is nothing to "undo" afterward.

Steps (Windows 11):
1. Press the Windows key, type "cmd", and open Command Prompt (or open PowerShell the same way — both work for this lab).
2. Type "ipconfig" and press Enter. This displays your device's own network information, including its IP address on your local network.
3. Look for a line labeled "IPv4 Address" — that's your device's own address on your local network, matching the mailing-address idea from the lesson.
4. Type "ping 8.8.8.8" and press Enter. This sends a small test signal directly to a known numeric address and shows whether a response comes back.
5. Let it run through a few replies, then type "ping" plus a website name of your choice (for example, a well-known company's website name) and press Enter.
6. Compare the two ping results: notice that pinging the numeric address and pinging a name both work when everything is healthy — and that the name version needed a DNS lookup step first, exactly as described in the lesson.

Mobile-only fallback: if you don't have access to a Windows 11 PC right now, watch a short video of someone running "ipconfig" and "ping" in Command Prompt, or review a screenshot of typical ipconfig/ping output, and identify the IPv4 address line and the ping reply lines. Revisit the hands-on version the next time you have access to a Windows 11 PC.`,
          estimatedMinutes: 15,
          externalResourceId: "windows-11-pc",
          completionCriteria: [
            "Opened Command Prompt or PowerShell on Windows 11",
            "Ran ipconfig and located the IPv4 Address line",
            "Ran ping 8.8.8.8 and observed reply lines",
            "Ran ping against a website name and compared it to the numeric ping result",
          ],
          relatedTopicIds: ["cf-ip-and-dns-beginner", "cf-connection-troubleshooting-basics"],
          order: 1,
        },
      ],
      externalResources: [WINDOWS_11_PC_RESOURCE],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
    {
      id: "cf-browser-url-cloud",
      name: "Browsers, Search Engines, URLs & the Cloud",
      prerequisites: ["cf-ip-and-dns-beginner"],
      objectives: ["CF-M4-O13", "CF-M4-O14", "CF-M4-O15"],
      lesson: {
        title: "Browsers, Search Engines, URLs & the Cloud",
        content: `Four everyday ideas — the browser, the search engine, the URL, and "the cloud" — get blended together constantly in casual conversation, to the point where many people call the entire experience of going online simply "Google," regardless of what's actually happening on screen. Untangling these four ideas removes a surprising amount of confusion from ordinary internet use.

A browser is the app that displays web pages — Microsoft Edge, Google Chrome, Mozilla Firefox, and others all do the same fundamental job in slightly different packaging. The browser is the window through which you view the internet; it doesn't itself decide what website you're looking for, it simply displays whatever page you or a search result sends it to. A search engine, like Google or Bing, is a website you visit inside your browser specifically to find other websites. The mix-up happens because, for many people, Google is the very first page their browser opens to — but Google is a search engine running inside the browser, not the browser itself.

A URL — short for the web address you type or click, such as a link to a specific page — is simply the specific address of one page, the same way a street address points to one specific house rather than an entire city. You don't need to memorize the technical structure of a URL to use one; recognizing that a URL points to one particular page, and that different URLs on the same website lead to different pages, is enough at this level. What matters more practically is a habit worth building early: glance at a URL before trusting it, especially in an email or text message, since a URL that looks slightly "off" from what you'd expect is one of the earliest warning signs of a scam — a topic the next module covers in depth.

The last idea, "the cloud," sounds abstract but describes something concrete: storing files on a remote server, accessed over the internet, instead of only on your own device's local storage. When a photo lives "in the cloud" through a service like OneDrive or Google Photos, it's sitting on a computer somewhere else, reachable through the internet from any device you sign into. Local storage, by contrast, is a file sitting only on the specific device you're using right now — if that device is lost, damaged, or simply not with you, a purely local file isn't reachable at all.

Cloud storage's biggest practical advantage is exactly that reachability: a file saved to the cloud from your laptop is often visible moments later from your phone, without you copying anything manually. Its trade-off is equally real: cloud storage requires an internet connection to reach, and it means trusting a company somewhere else to keep that file safe and private — both worth knowing plainly rather than assuming either option is automatically "better."

None of these four ideas require technical depth to use correctly day to day. What they require is precision in language: your browser displays pages, a search engine helps you find one, a URL points to one specific page, and the cloud is simply storage that lives somewhere other than your own device. Getting that vocabulary straight makes every future conversation about "the internet" noticeably less confusing — for you and for whoever you're talking to.`,
      },
      lightbulbMoment:
        "Your browser displays pages, a search engine (like Google) helps you find one inside the browser, a URL points to one specific page, and the cloud is just storage on someone else's server, reachable over the internet.",
      keyFacts: [
        "A browser (Edge, Chrome, Firefox) is the app that displays web pages",
        "A search engine (Google, Bing) is a website, running inside your browser, used to find other websites",
        "A URL is the specific address of one page — glance at it before trusting a link, especially in messages",
        "'The cloud' means files stored on a remote server reached over the internet, not only on your own device",
        "Cloud storage is reachable from multiple devices but requires an internet connection and trusting another company",
      ],
      guidedExample: {
        title: "Trace What Actually Happens When You 'Google Something'",
        steps: [
          "You open your browser (say, Microsoft Edge) — that's the app displaying pages.",
          "Your browser opens to Google — a search engine, a website you're visiting, not the browser itself.",
          "You type a question into Google and click a result — that result's URL points to one specific page.",
          "The page loads inside your browser window.",
          "If that page shows a photo stored in OneDrive, you're now viewing something living in the cloud, reached over the internet, not sitting locally on your device.",
        ],
      },
      commonMistakes: [
        "Calling the browser itself 'Google,' when Google is a search engine running inside the browser",
        "Clicking a link without glancing at where the URL actually points",
        "Assuming a file 'in the cloud' is also automatically saved on your own device",
        "Believing cloud storage works the same with no internet connection at all",
      ],
      realWorldTraps: [
        "A convincing scam message includes a URL that looks almost right but points to a slightly different address — a glance habit catches this before a click does damage",
        "Someone assumes deleting a locally downloaded copy of a cloud file deletes it everywhere, or the reverse",
        "A coworker says 'just Google it in Chrome' interchangeably, which is harmless casually but worth untangling when troubleshooting for real",
      ],
      realWorldScenario:
        "You get a text message that looks like it's from a delivery company, with a link to 'track your package.' Before tapping it, you glance at the actual URL and notice it doesn't match the real delivery company's usual address at all — it's a lookalike. Recognizing that a URL is a specific, checkable address, not just decoration in a message, stops you from tapping through to a scam page.",
      whenThisFails: [
        "If you're not sure whether a link is legitimate, don't click it — instead, open your browser separately and go to the company's known website directly to check your account or package",
        "If a cloud file doesn't appear on a second device as expected, confirm you're signed into the same cloud account on both devices and that both have an internet connection, before assuming the file was lost",
      ],
      teacherReflectionPrompt:
        "Explain, out loud, the difference between your browser, a search engine, a URL, and the cloud, using a recent example from your own week.",
      quiz: [
        {
          id: "cf-browser-url-cloud-q1",
          prompt: "What is a browser?",
          choices: [
            { id: "a", text: "A search engine like Google" },
            { id: "b", text: "The app that displays web pages, such as Edge, Chrome, or Firefox" },
            { id: "c", text: "The specific address of one web page" },
            { id: "d", text: "A type of cloud storage service" },
          ],
          correctChoiceId: "b",
          explanation: "A browser is the app used to view web pages — Google and other search engines run inside it.",
          difficulty: "easy",
        },
        {
          id: "cf-browser-url-cloud-q2",
          prompt: "What is a search engine?",
          choices: [
            { id: "a", text: "The app that displays every web page" },
            { id: "b", text: "A website, visited inside your browser, used to find other websites" },
            { id: "c", text: "A type of URL" },
            { id: "d", text: "A cloud storage brand" },
          ],
          correctChoiceId: "b",
          explanation: "A search engine like Google or Bing is a website you use, inside your browser, to find other websites.",
          difficulty: "easy",
        },
        {
          id: "cf-browser-url-cloud-q3",
          prompt: "Why is glancing at a URL before clicking it a useful habit?",
          choices: [
            { id: "a", text: "URLs never matter once a page has loaded" },
            { id: "b", text: "A URL that looks slightly off from what you'd expect can be an early warning sign of a scam" },
            { id: "c", text: "It's only useful for IT professionals" },
            { id: "d", text: "URLs are purely decorative and carry no information" },
          ],
          correctChoiceId: "b",
          explanation: "A mismatched or lookalike URL is one of the earliest and most reliable warning signs that a link may not be trustworthy.",
          difficulty: "medium",
        },
        {
          id: "cf-browser-url-cloud-q4",
          prompt: "What does storing a file 'in the cloud' actually mean?",
          choices: [
            { id: "a", text: "The file only exists on your own device" },
            { id: "b", text: "The file is stored on a remote server, reached over the internet, rather than only on your own device" },
            { id: "c", text: "The file has been permanently deleted" },
            { id: "d", text: "The file is stored inside your browser's settings" },
          ],
          correctChoiceId: "b",
          explanation: "Cloud storage means the file lives on a remote server you reach over the internet, not solely on your device's local storage.",
          difficulty: "medium",
        },
        {
          id: "cf-browser-url-cloud-q5",
          prompt: "What is a real trade-off of cloud storage compared to purely local storage?",
          choices: [
            { id: "a", text: "Cloud storage never has any downsides" },
            { id: "b", text: "Cloud storage requires an internet connection to reach, and means trusting another company with your files" },
            { id: "c", text: "Cloud storage is always slower than local storage in every situation" },
            { id: "d", text: "Cloud storage can't be reached from more than one device" },
          ],
          correctChoiceId: "b",
          explanation: "Cloud storage trades local independence for reachability across devices, at the cost of needing internet access and trusting a provider.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-browser-url-cloud-b1",
          prompt: "Which of these is an example of a browser?",
          choices: [
            { id: "a", text: "Microsoft Edge" },
            { id: "b", text: "Google (as a search engine)" },
            { id: "c", text: "OneDrive" },
            { id: "d", text: "A URL" },
          ],
          correctChoiceId: "a",
          explanation: "Microsoft Edge, along with Chrome and Firefox, is a browser — the app that displays web pages.",
        },
        {
          id: "cf-browser-url-cloud-b2",
          prompt: "Which of these is an example of a search engine?",
          choices: [
            { id: "a", text: "Google" },
            { id: "b", text: "Microsoft Edge" },
            { id: "c", text: "A URL" },
            { id: "d", text: "Wi-Fi" },
          ],
          correctChoiceId: "a",
          explanation: "Google is a search engine — a website used inside a browser to find other websites.",
        },
        {
          id: "cf-browser-url-cloud-b3",
          prompt: "A URL is best described as:",
          choices: [
            { id: "a", text: "The specific address of one web page" },
            { id: "b", text: "The name of a browser" },
            { id: "c", text: "A type of cloud storage" },
            { id: "d", text: "A Wi-Fi password" },
          ],
          correctChoiceId: "a",
          explanation: "A URL points to one specific page, similar to how a street address points to one specific house.",
        },
        {
          id: "cf-browser-url-cloud-b4",
          prompt: "If a file is stored only on your laptop and never uploaded anywhere, that file is:",
          choices: [
            { id: "a", text: "Stored locally" },
            { id: "b", text: "Stored in the cloud" },
            { id: "c", text: "A URL" },
            { id: "d", text: "A search engine" },
          ],
          correctChoiceId: "a",
          explanation: "A file existing only on your own device, with no remote copy, is stored locally rather than in the cloud.",
        },
        {
          id: "cf-browser-url-cloud-b5",
          prompt: "Why can a photo saved to the cloud from your laptop often appear moments later on your phone?",
          choices: [
            { id: "a", text: "Because the photo is stored on a remote server both devices can reach over the internet" },
            { id: "b", text: "Because phones and laptops share physical storage" },
            { id: "c", text: "Because Wi-Fi automatically copies files between nearby devices" },
            { id: "d", text: "This is not actually possible" },
          ],
          correctChoiceId: "a",
          explanation: "Cloud storage is centrally reachable, so any signed-in device with internet access can see the same file.",
        },
        {
          id: "cf-browser-url-cloud-b6",
          prompt: "What should you do before clicking a link in an unexpected text message?",
          choices: [
            { id: "a", text: "Glance at the actual URL to see if it matches what you'd expect" },
            { id: "b", text: "Click it immediately without looking" },
            { id: "c", text: "Reply to the message asking if it's real" },
            { id: "d", text: "Forward it to everyone you know" },
          ],
          correctChoiceId: "a",
          explanation: "Checking the URL before clicking is a simple, effective first defense against scam links.",
        },
        {
          id: "cf-browser-url-cloud-b7",
          prompt: "Which statement correctly separates a browser from a search engine?",
          choices: [
            { id: "a", text: "The browser displays pages; the search engine is a website used inside the browser to find pages" },
            { id: "b", text: "They are exactly the same thing" },
            { id: "c", text: "The search engine displays pages; the browser finds other websites" },
            { id: "d", text: "Only one of them actually exists" },
          ],
          correctChoiceId: "a",
          explanation: "The browser is the viewing app; a search engine is a website you use inside it to locate other pages.",
        },
        {
          id: "cf-browser-url-cloud-b8",
          prompt: "What is the safest way to check your account or package status instead of tapping a suspicious link?",
          choices: [
            { id: "a", text: "Open your browser separately and go to the company's known website directly" },
            { id: "b", text: "Tap the link and see what happens" },
            { id: "c", text: "Reply with your personal information to confirm" },
            { id: "d", text: "Ignore the account entirely forever" },
          ],
          correctChoiceId: "a",
          explanation: "Navigating directly to a known, trusted address avoids the risk of a lookalike link entirely.",
        },
      ],
      flashcards: [
        {
          id: "cf-browser-url-cloud-f1",
          front: "What is a browser?",
          back: "The app that displays web pages — e.g. Edge, Chrome, Firefox",
        },
        {
          id: "cf-browser-url-cloud-f2",
          front: "What is a search engine?",
          back: "A website, used inside your browser, to find other websites — e.g. Google, Bing",
        },
        {
          id: "cf-browser-url-cloud-f3",
          front: "What is a URL?",
          back: "The specific address of one web page",
        },
        {
          id: "cf-browser-url-cloud-f4",
          front: "What does 'in the cloud' mean?",
          back: "Stored on a remote server, reached over the internet, rather than only on your own device",
        },
        {
          id: "cf-browser-url-cloud-f5",
          front: "Why glance at a URL before clicking it?",
          back: "A mismatched or lookalike URL is an early warning sign of a scam link",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 20,
      difficulty: "easy",
    },
    {
      id: "cf-connection-troubleshooting-basics",
      name: "Connection Troubleshooting Basics",
      prerequisites: ["cf-browser-url-cloud"],
      objectives: ["CF-M4-O16", "CF-M4-O17", "CF-M4-O18"],
      lesson: {
        title: "Connection Troubleshooting Basics",
        content: `Everything covered so far in this module — LAN vs. internet, the four home networking devices, Ethernet vs. Wi-Fi, and how names get translated into addresses — comes together here as a calm, repeatable first response for "I can't connect." None of the steps below require technical training; they require doing them in order, one at a time, instead of jumping straight to the most drastic option out of frustration.

Start narrow: is it one device, or everything? Check whether a different device — a phone, another laptop, a smart TV — can connect right now. If everything is affected, the problem is likely upstream, at the router, modem, or your internet provider. If only one device is struggling, the problem is more likely local to that specific device: its Wi-Fi setting, a temporary glitch, or something needing a plain restart.

Next, check the physical and visual basics before touching any settings. Is Wi-Fi actually turned on for the struggling device? Is airplane mode accidentally on? Are the modem and router's lights showing their normal pattern rather than an error color or a completely dark, powered-off state? This step catches an enormous number of everyday problems — a toggle switched by accident, a cable that came loose, a power outage that hasn't fully restored a device yet — without requiring any deeper diagnosis at all.

If the basics look fine, the classic next move is the humble restart, applied to the right device rather than everything at once. Restarting the struggling device itself often resolves a stuck Wi-Fi connection. If multiple devices in the house are affected, restarting the router (and, if needed, the modem) by unplugging it, waiting about thirty seconds, then plugging it back in, resolves a very large share of home networking problems — precisely because it's giving that piece of hardware a clean, complete restart rather than trying to fix a specific symptom you can't directly see inside it.

From the Wi-Fi vs. Ethernet lesson, you already have a genuinely useful next diagnostic: if a wired connection works while Wi-Fi doesn't, on the exact same device, that isolates the problem specifically to the wireless side — worth remembering rather than re-deriving from scratch every time. Similarly, from the IP and DNS lesson, recall that a website failing to load by name while other online activity works fine can point toward a temporary name-lookup hiccup rather than a full connection failure — another reason to try a second website or wait a minute before assuming the worst.

If none of these calm, ordered steps resolve the problem, that's the appropriate moment to escalate — contacting your internet provider, IT support at work, or someone with more tools — and doing so with real information instead of just "it's not working." Being able to say "every device is affected, the router's lights show an error, and a restart didn't fix it" turns a vague complaint into a useful, specific report that gets resolved faster. Knowing when you've reached the edge of what you can reasonably check yourself, and asking for help without embarrassment at that point, is itself part of real computer confidence — not a failure of it.`,
      },
      lightbulbMoment:
        "Check one device vs. all devices, check the obvious basics, restart the right piece of hardware, then escalate with specific information — in that order, calmly, before assuming the worst.",
      keyFacts: [
        "First question: is it one device, or every device? That narrows local vs. upstream problems immediately",
        "Check basics first: Wi-Fi toggle, airplane mode, and whether the modem/router lights look normal",
        "Restarting the right device (the struggling device, or the router/modem for house-wide issues) fixes a large share of problems",
        "A wired-works/wireless-fails pattern points specifically at Wi-Fi, not the whole connection",
        "Escalating with specific details ('every device affected, router shows an error, restart didn't help') gets faster help than a vague complaint",
      ],
      guidedExample: {
        title: "A Calm, Ordered First Response to 'No Wi-Fi'",
        steps: [
          "Check another device — if it also can't connect, the problem is likely upstream (router/modem/provider), not just your laptop.",
          "Confirm Wi-Fi is actually turned on and airplane mode is off on the struggling device.",
          "Glance at the router and modem lights to see if they look normal.",
          "If multiple devices are affected, unplug the router (and modem, if needed), wait about 30 seconds, and plug it back in.",
          "If only your device struggles, restart that device specifically before touching the router at all.",
          "If a wired connection works but Wi-Fi doesn't on the same device, note that it's a Wi-Fi-specific issue for anyone you ask for help.",
        ],
      },
      commonMistakes: [
        "Jumping straight to resetting the router without first checking whether it's actually a single-device problem",
        "Restarting everything at once instead of narrowing down which piece is actually affected first",
        "Assuming a website failing to load by name means the whole connection is down",
        "Escalating to support with only 'it's not working' instead of specific, useful details",
      ],
      realWorldTraps: [
        "A shared household or office Wi-Fi issue gets blamed entirely on the internet provider before anyone checks whether it's actually just one device's Wi-Fi toggle",
        "People power-cycle a router repeatedly without waiting the full 30 seconds unplugged, which can prevent a truly clean restart",
        "Support calls take far longer than necessary because the caller can't answer 'is it one device or all of them?' when asked",
      ],
      realWorldScenario:
        "Your laptop suddenly can't connect to Wi-Fi at home. Instead of immediately calling your internet provider, you check your phone — it connects fine. That single check tells you the problem is local to the laptop, not the router or the provider. A simple restart of just the laptop resolves it in under two minutes, without a single support call.",
      whenThisFails: [
        "If you've checked one-device-vs-all, confirmed the basics, and restarted the right hardware, and the problem still isn't resolved, it's time to contact your internet provider or IT support — bring the specific details you gathered along the way",
        "If the modem or router shows a persistent error light even after a full unplug-and-wait restart, that points toward a provider-side or hardware issue beyond what a restart alone can fix",
      ],
      teacherReflectionPrompt:
        "Walk through, out loud, the exact order of steps you'd take the next time Wi-Fi stops working at home — one device vs. all, basics, restart, then escalate.",
      quiz: [
        {
          id: "cf-connection-troubleshooting-basics-q1",
          prompt: "What is the first useful question when a connection problem appears?",
          choices: [
            { id: "a", text: "Is it one device, or every device on the network?" },
            { id: "b", text: "What brand is the router?" },
            { id: "c", text: "How old is the internet provider's contract?" },
            { id: "d", text: "Should I buy new hardware immediately?" },
          ],
          correctChoiceId: "a",
          explanation: "Narrowing down whether the issue is local to one device or affects everything is the fastest way to focus troubleshooting.",
          difficulty: "easy",
        },
        {
          id: "cf-connection-troubleshooting-basics-q2",
          prompt: "Before restarting anything, what basic checks should you do first?",
          choices: [
            { id: "a", text: "Confirm Wi-Fi is on, airplane mode is off, and the router/modem lights look normal" },
            { id: "b", text: "Immediately unplug every device in the house" },
            { id: "c", text: "Reinstall the operating system" },
            { id: "d", text: "Call the internet provider without checking anything" },
          ],
          correctChoiceId: "a",
          explanation: "Quick visual and setting checks catch a large share of problems before any restart is even needed.",
          difficulty: "easy",
        },
        {
          id: "cf-connection-troubleshooting-basics-q3",
          prompt: "Multiple devices in the house lose their connection at the same time. What's the appropriate restart target?",
          choices: [
            { id: "a", text: "Only the one device you're currently using" },
            { id: "b", text: "The router (and modem, if needed) — unplug, wait about 30 seconds, plug back in" },
            { id: "c", text: "Nothing — restarts never help with this" },
            { id: "d", text: "Every device in the house except the router" },
          ],
          correctChoiceId: "b",
          explanation: "A house-wide problem points to the router or modem, so that's the appropriate target for a clean restart.",
          difficulty: "medium",
        },
        {
          id: "cf-connection-troubleshooting-basics-q4",
          prompt: "On one device, Ethernet works but Wi-Fi doesn't. What does that specific pattern tell you?",
          choices: [
            { id: "a", text: "The entire internet connection is down" },
            { id: "b", text: "The problem is specific to Wi-Fi on that device, not the broader connection" },
            { id: "c", text: "The modem must be replaced" },
            { id: "d", text: "Nothing useful — this pattern is meaningless" },
          ],
          correctChoiceId: "b",
          explanation: "A wired-works/wireless-fails result on the same device isolates the problem specifically to Wi-Fi.",
          difficulty: "medium",
        },
        {
          id: "cf-connection-troubleshooting-basics-q5",
          prompt: "What makes an escalation to internet provider or IT support more effective?",
          choices: [
            { id: "a", text: "Saying only 'it's not working' with no other details" },
            { id: "b", text: "Providing specific details, like which devices are affected and what you already tried" },
            { id: "c", text: "Skipping all basic checks so support can 'find the real problem'" },
            { id: "d", text: "Escalating before checking anything at all" },
          ],
          correctChoiceId: "b",
          explanation: "Specific, gathered details turn a vague complaint into a useful report that gets resolved faster.",
          difficulty: "medium",
        },
      ],
      questionBank: [
        {
          id: "cf-connection-troubleshooting-basics-b1",
          prompt: "If every device in the house loses Wi-Fi at once, where should you look first?",
          choices: [
            { id: "a", text: "Upstream — the router, modem, or provider" },
            { id: "b", text: "Only the specific device you're using" },
            { id: "c", text: "The browser's settings" },
            { id: "d", text: "The Wi-Fi password on your phone only" },
          ],
          correctChoiceId: "a",
          explanation: "An issue affecting every device at once points to something upstream, not one individual device.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b2",
          prompt: "How long should you typically leave a router unplugged during a restart?",
          choices: [
            { id: "a", text: "About 30 seconds" },
            { id: "b", text: "Less than 1 second" },
            { id: "c", text: "A full week" },
            { id: "d", text: "It never needs to be unplugged" },
          ],
          correctChoiceId: "a",
          explanation: "A brief pause, around 30 seconds, allows a truly clean restart rather than an instant reconnect.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b3",
          prompt: "Which is a basic check to do before restarting anything?",
          choices: [
            { id: "a", text: "Confirm the device's Wi-Fi toggle is actually on and airplane mode is off" },
            { id: "b", text: "Reinstall all software on the device" },
            { id: "c", text: "Replace the router" },
            { id: "d", text: "Change your internet plan" },
          ],
          correctChoiceId: "a",
          explanation: "A simple toggle check catches a surprising number of everyday connection issues instantly.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b4",
          prompt: "Only your laptop can't connect, while your phone connects fine on the same Wi-Fi. What should you restart first?",
          choices: [
            { id: "a", text: "The laptop specifically" },
            { id: "b", text: "The router" },
            { id: "c", text: "The modem" },
            { id: "d", text: "The phone, since it's working fine" },
          ],
          correctChoiceId: "a",
          explanation: "Since only one device is affected, restarting that specific device is the appropriate, narrow first step.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b5",
          prompt: "A website fails to load by name, but other online activity seems fine. What should you try before assuming a full outage?",
          choices: [
            { id: "a", text: "Wait a moment and try again, or try a different website" },
            { id: "b", text: "Immediately replace your router" },
            { id: "c", text: "Assume your whole internet connection is permanently broken" },
            { id: "d", text: "Reinstall your operating system" },
          ],
          correctChoiceId: "a",
          explanation: "A brief DNS hiccup often resolves on its own; trying again or a different site helps confirm whether it's isolated.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b6",
          prompt: "What is the benefit of narrowing a problem to 'one device' vs. 'every device' before restarting anything?",
          choices: [
            { id: "a", text: "It tells you which piece of hardware to actually restart, instead of restarting everything blindly" },
            { id: "b", text: "It has no real benefit" },
            { id: "c", text: "It only matters for businesses, not homes" },
            { id: "d", text: "It changes your Wi-Fi password automatically" },
          ],
          correctChoiceId: "a",
          explanation: "Knowing the scope of the problem focuses the restart on the correct piece of hardware.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b7",
          prompt: "What information makes a support call more effective?",
          choices: [
            { id: "a", text: "Which devices are affected, what the router/modem lights show, and what you've already tried" },
            { id: "b", text: "Only saying 'the internet is broken'" },
            { id: "c", text: "The brand of your phone case" },
            { id: "d", text: "How long you've had your account" },
          ],
          correctChoiceId: "a",
          explanation: "Specific, gathered details help support diagnose the issue far faster than a vague description.",
        },
        {
          id: "cf-connection-troubleshooting-basics-b8",
          prompt: "Is asking for help after trying the basic steps yourself a sign of failure?",
          choices: [
            { id: "a", text: "No — recognizing the edge of what you can check yourself is part of real computer confidence" },
            { id: "b", text: "Yes — you should never ask for outside help" },
            { id: "c", text: "Yes, but only if you're a beginner" },
            { id: "d", text: "No, but only for business networks, never at home" },
          ],
          correctChoiceId: "a",
          explanation: "Knowing when to escalate, with good information in hand, is itself a mark of confident troubleshooting, not a failure.",
        },
      ],
      flashcards: [
        {
          id: "cf-connection-troubleshooting-basics-f1",
          front: "First question when a connection breaks?",
          back: "Is it one device, or every device on the network?",
        },
        {
          id: "cf-connection-troubleshooting-basics-f2",
          front: "Basic checks before restarting anything?",
          back: "Wi-Fi toggle on, airplane mode off, router/modem lights look normal",
        },
        {
          id: "cf-connection-troubleshooting-basics-f3",
          front: "How to restart a router properly?",
          back: "Unplug it, wait about 30 seconds, then plug it back in",
        },
        {
          id: "cf-connection-troubleshooting-basics-f4",
          front: "Ethernet works but Wi-Fi doesn't on the same device — what does that mean?",
          back: "The problem is specific to Wi-Fi, not the whole connection",
        },
        {
          id: "cf-connection-troubleshooting-basics-f5",
          front: "What makes an escalation to support effective?",
          back: "Specific details: which devices are affected and what you already tried",
        },
      ],
      practiceType: ["reading", "quiz", "flashcard"],
      estimatedStudyMinutes: 25,
      difficulty: "medium",
    },
  ],
};
