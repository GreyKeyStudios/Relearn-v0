import type { LessonStepDef } from "@/content/types";

/** Reference lesson — one screen per layer, novice-first (Phase 4.8). */
export const OSI_MODEL_LESSON_STEPS: LessonStepDef[] = [
  {
    id: "why-osi",
    title: "Why the OSI model matters",
    showFullStack: true,
    body: `Before you configure a single switch or router, you need a map. The OSI model is that map.

Networks move data from an app on one device to an app on another. Along the way, different jobs must happen: formatting, addressing, delivery on a cable, and more. The OSI model splits those jobs into seven named layers so engineers can say "the problem is probably at Layer 3" instead of guessing.

You will not build a network from this lesson. You will learn the vocabulary every CCNA topic uses later. Take your time — one layer at a time.`,
  },
  {
    id: "seven-layers",
    title: "Seven layers, top to bottom",
    showFullStack: true,
    body: `Picture a stack of seven trays. The top tray (Layer 7) is closest to you — the apps you touch. The bottom tray (Layer 1) touches the physical cable or Wi-Fi radio.

Each layer only talks to the layer directly above and below it. Layer 4 does not skip down to Layer 1. That rule keeps the model predictable.

For the exam you must name all seven layers in order. We will walk through each layer on its own screen next.`,
    studyTip: {
      title: "Memory trick — top to bottom (Layer 7 → 1)",
      body: 'All People Seem To Need Data Processing → Application, Presentation, Session, Transport, Network, Data Link, Physical.',
    },
  },
  {
    id: "order-bottom-up",
    title: "The same stack, bottom to top",
    showFullStack: true,
    body: `Exams often list layers starting from the wire upward — Layer 1 first, Layer 7 last.

From the bottom (the wire) to the top (the user): Physical, Data Link, Network, Transport, Session, Presentation, Application.

That is the same stack you just met — only read in the opposite direction. When a question says "Layer 1 to Layer 7," start at Physical and work up.`,
    studyTip: {
      title: "Memory trick — bottom to top (Layer 1 → 7)",
      body: "Please Do Not Throw Sausage Pizza Away → Physical, Data Link, Network, Transport, Session, Presentation, Application.",
    },
    checkpointQuestionId: "osi-q4",
  },
  {
    id: "layer-7",
    title: "Layer 7 — Application",
    osiLayer: 7,
    body: `The Application layer is where network services meet the programs you use — web browsers, email apps, messaging, and file transfer tools.

When you open a website, the browser is a Layer 7 application. It does not care how bits move on a cable; it asks the lower layers to deliver an HTTP request and return a response.

Examples you will see on CCNA: HTTP (web), HTTPS (secure web), DNS (name lookup), FTP (files), SMTP (email).`,
  },
  {
    id: "layer-6",
    title: "Layer 6 — Presentation",
    osiLayer: 6,
    body: `The Presentation layer translates data into a format applications understand — like converting between character sets, compressing files, or encrypting content.

Think of opening a PDF: the bytes must be interpreted correctly or the file looks like garbage. TLS (the encryption inside HTTPS) is often mapped to Presentation on the exam because it formats/secures data before the application reads it.

You rarely troubleshoot "Presentation" by name in the field, but exam drag-and-drop questions love putting encryption here.`,
  },
  {
    id: "layer-5",
    title: "Layer 5 — Session",
    osiLayer: 5,
    body: `The Session layer sets up, maintains, and tears down conversations between applications. If two programs need to stay "in sync" across multiple messages, Session coordinates that dialogue.

This is not the same as TCP's connection — Session is the OSI label for application-level dialogue control. On CCNA, know the name and that it sits between Presentation (6) and Transport (4).

Many real protocols bundle Session duties into the application itself, which is why this layer feels abstract at first.`,
  },
  {
    id: "layer-4",
    title: "Layer 4 — Transport",
    osiLayer: 4,
    body: `Transport delivers data between applications on different hosts using port numbers. It answers: "Did all the pieces arrive, and in order?"

TCP (Transmission Control Protocol) is reliable — it acknowledges delivery and re-sends if needed. Think web pages and email.

UDP (User Datagram Protocol) is lightweight and fast with no guarantee — think live video or DNS lookups where speed beats perfect delivery.

Port numbers (like 80 for web, 443 for secure web) live in the Transport header.`,
    studyTip: {
      title: "Quick check",
      body: "If the question mentions ports or TCP/UDP, think Layer 4 — Transport.",
    },
    checkpointQuestionId: "osi-q3",
  },
  {
    id: "layer-3",
    title: "Layer 3 — Network",
    osiLayer: 3,
    body: `The Network layer handles logical addressing and routing between networks. The address you know here is the IP address (for example 192.168.1.10).

A router works primarily at Layer 3: it reads destination IP addresses and chooses which path to forward packets.

ICMP — used by ping — is also a Layer 3 protocol. If ping works between two hosts, Layers 1–3 are usually healthy along that path.`,
    studyTip: {
      title: "Quick check",
      body: "IP address, routing, ping/ICMP → Layer 3 Network.",
    },
    checkpointQuestionId: "osi-q1",
  },
  {
    id: "layer-2",
    title: "Layer 2 — Data Link",
    osiLayer: 2,
    body: `The Data Link layer delivers frames on the same local network segment using physical (MAC) addresses burned into network cards.

A classic switch forwards at Layer 2 using MAC addresses in Ethernet frames. You do not need to memorize frame formats yet — know that "MAC" and "switch" point here.

Wi-Fi also operates at Layer 2 for local wireless delivery.`,
    studyTip: {
      title: "Quick check",
      body: "MAC address, switch, Ethernet frame → Layer 2 Data Link.",
    },
    checkpointQuestionId: "osi-q2",
  },
  {
    id: "layer-1",
    title: "Layer 1 — Physical",
    osiLayer: 1,
    body: `The Physical layer is the actual transmission of bits as electrical signals, light pulses in fiber, or radio waves in Wi-Fi.

Cables, connectors, NIC link lights, and radio frequencies belong here. If the cable is unplugged or the wrong cable type is used, no higher layer can work.

Technicians often start troubleshooting at Layer 1: link lights, cable swaps, and interface status.`,
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting with the stack",
    showFullStack: true,
    body: `Use the OSI model like a checklist. Work bottom-up or top-down — pick one direction and stick with it.

Example: You can ping a server (reach it by IP) but the website will not load. Ping proves lower layers and ICMP are likely fine. The failure is probably higher — application settings, DNS, or a firewall blocking web traffic on TCP port 443.

Example: Nothing works at all — not even ping. Start at Layer 1 (link/cable) before blaming software.`,
  },
  {
    id: "encapsulation",
    title: "Encapsulation — data going down the stack",
    showFullStack: true,
    body: `When a host sends data, each layer wraps the data from the layer above with its own header (and sometimes a trailer). That process is encapsulation — like nested envelopes.

On the receiving host, each layer strips its header as data moves back up. That is de-encapsulation.

Direction matters: headers are added going down toward the wire, and removed going up on the receiver. Exam questions love reversing this.`,
    checkpointQuestionId: "osi-q5",
  },
  {
    id: "pdus",
    title: "PDU names — what each layer calls its unit",
    showFullStack: true,
    body: `Each layer has a name for its chunk of data — a Protocol Data Unit (PDU).

Layer 4 Transport: segment (TCP) or datagram (UDP). Layer 3 Network: packet. Layer 2 Data Link: frame. Layer 1 Physical: bits.

Learn PDU names only after you understand encapsulation direction. Exams pair layers with PDU names in drag-and-drop questions.`,
    studyTip: {
      title: "PDU memory trick (top → bottom)",
      body: "Data → Segment → Packet → Frame → Bits. Say it as data leaves the app and heads toward the cable.",
    },
    checkpointQuestionId: "osi-q6",
  },
  {
    id: "wrap-up",
    title: "You have the map",
    showFullStack: true,
    body: `You met all seven layers one at a time, practiced the order both ways, and saw how encapsulation and PDU names fit on the way down the stack.

Next topic: the TCP/IP model — four layers that map to what the Internet actually runs. You already know most of the ideas; we will connect them.

After this lesson, try the quiz and flashcards, then the OSI layer sorter simulator when you feel ready.`,
  },
];
