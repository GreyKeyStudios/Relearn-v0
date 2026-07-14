import type { Certification } from "../types";
import { OSI_MODEL_EXPERIENCE } from "@/content/lessons/osi-model-experience";
import { TCP_IP_MODEL_EXPERIENCE } from "@/content/lessons/tcp-ip-model-experience";
import { ETHERNET_MODEL_EXPERIENCE } from "@/content/lessons/ethernet-model-experience";
import { IPV4_ADDRESSING_EXPERIENCE } from "@/content/lessons/ipv4-addressing-experience";
import { SUBNETTING_EXPERIENCE } from "@/content/lessons/subnetting-experience";
import { IP_RANGES_EXPERIENCE } from "@/content/lessons/ip-ranges-experience";
import { IPV6_BASICS_EXPERIENCE } from "@/content/lessons/ipv6-basics-experience";
import { WIRELESS_BASICS_EXPERIENCE } from "@/content/lessons/wireless-basics-experience";

export const ccna: Certification = {
  id: "ccna",
  name: "Cisco Certified Network Associate",
  shortName: "CCNA",
  vendor: "Cisco",
  overview:
    "The CCNA validates your ability to install, configure, operate, and troubleshoot medium-sized routed and switched networks. It covers network fundamentals, IP connectivity, security basics, and automation.",
  examSummary: {
    questionCount: 100,
    durationMinutes: 120,
    passingScore: "825/1000",
    format: "Multiple choice, drag-and-drop, simulations",
  },
  domains: [
    {
      id: "network-fundamentals",
      name: "Network Fundamentals",
      topics: [
        {
          id: "osi-model",
          name: "OSI Model",
          lesson: {
            title: "Understanding the OSI Model",
            content: `The Open Systems Interconnection (OSI) model is a conceptual framework that standardizes network functions into seven distinct layers. Each layer serves a specific purpose and communicates with the layers directly above and below it.

Layer 7 (Application) provides network services to end-user applications like web browsers and email clients. Layer 6 (Presentation) handles data formatting, encryption, and compression. Layer 5 (Session) manages connections between applications. Layer 4 (Transport) ensures reliable or unreliable delivery via TCP or UDP. Layer 3 (Network) handles logical addressing and routing using IP addresses. Layer 2 (Data Link) manages physical addressing with MAC addresses on local segments. Layer 1 (Physical) transmits raw bits over cables, fiber, or radio.

Network professionals use the OSI model to troubleshoot by isolating problems to specific layers. For example, if you can ping a host (Layer 3 works) but cannot browse a website (Layer 7 issue), you narrow the problem quickly. The mnemonic "All People Seem To Need Data Processing" helps remember the layers from top to bottom.

While modern networks primarily reference the TCP/IP model, the OSI model remains essential for certification exams and structured troubleshooting discussions.

On the CCNA exam, expect drag-and-drop questions that map protocols to layers. HTTP, FTP, and DNS live at Layer 7. TLS encryption typically maps to Presentation (Layer 6) or Application depending on framing. TCP and UDP are Layer 4; IP and ICMP are Layer 3. Ethernet and Wi-Fi are Layer 2, while cables and radio frequencies are Layer 1.

When troubleshooting, work top-down or bottom-up systematically. A successful ping proves Layers 1–3 (and ICMP) are likely functional between two hosts. If ping works but a web page fails, suspect application-layer issues, proxy settings, or firewalls filtering TCP port 443.

Encapsulation wraps upper-layer data with headers (and sometimes trailers) as it descends the stack. De-encapsulation strips those headers at each layer on the receiving host. Each layer adds its own Protocol Data Unit (PDU): segments at Transport, packets at Network, frames at Data Link, and bits at Physical.`,
            visual: "osi-stack",
            experience: OSI_MODEL_EXPERIENCE,
          },
          keyFacts: [
            "Seven layers: Application, Presentation, Session, Transport, Network, Data Link, Physical",
            "Mnemonic top-down: APSTNDP — All People Seem To Need Data Processing",
            "Mnemonic bottom-up: PDNTSPA — Please Do Not Throw Sausage Pizza Away",
            "PDU names: segments (L4), packets (L3), frames (L2), bits (L1)",
            "Encapsulation adds headers going down the stack; receiving strips them going up",
            "Troubleshoot systematically — pick bottom-up or top-down and stay consistent",
          ],
          lightbulbMoment: "Every layer has exactly one job.",
          guidedExample: {
            title: "Ping works but the website fails — where to look",
            steps: [
              "First, test with an IP address (not a name): ping 8.8.8.8 (Google DNS). If this works, your PC can reach a remote IP — Physical/Data Link/Network are *probably* OK.",
              "A hostname is a human-friendly name like example.com. If ping by hostname fails but ping by IP works, DNS name resolution is the likely issue (Application layer).",
              "If the site loads but says “connection refused,” the network path worked — the server (or firewall) rejected the TCP connection at the destination (Transport/Application).",
              "Troubleshoot one layer at a time (bottom-up or top-down). Don’t jump randomly — change one thing, re-test, repeat.",
            ],
          },
          commonMistakes: [
            "Memorizing layers top-to-bottom but forgetting PDU names (bits, frames, packets, segments)",
            "Placing TLS/encryption at Application when exam expects Presentation (Layer 6)",
            "Confusing Session layer (Layer 5) with Transport connection management (TCP handshake)",
            "Skipping systematic troubleshooting and jumping between layers randomly",
          ],
          examTraps: [
            "Protocol-to-layer drag-and-drop with distractors like ICMP at Transport",
            "Questions mixing TCP/IP four-layer model with OSI seven-layer model",
            "ICMP placement—Layer 3 Network, not Transport",
            "Ethernet and MAC addressing attributed to Layer 3 instead of Data Link",
            "Encapsulation direction traps (headers added going down, removed going up)",
          ],
          realWorldScenario: "A user can ping the file server by IP but cannot open the intranet site by name. You confirm Layer 1–3 connectivity with ping, then check DNS resolution at the Application layer before re-cabling the switch.",
          quiz: [
            {
              id: "osi-q1",
              prompt: "Which OSI layer is responsible for logical addressing and routing?",
              choices: [
                { id: "a", text: "Layer 2 - Data Link" },
                { id: "b", text: "Layer 3 - Network" },
                { id: "c", text: "Layer 4 - Transport" },
                { id: "d", text: "Layer 7 - Application" },
              ],
              correctChoiceId: "b",
              explanation:
                "Layer 3 (Network) handles logical addressing with IP addresses and makes routing decisions to forward packets between networks.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "osi-q2",
              prompt: "At which layer do switches primarily operate when forwarding frames based on MAC addresses?",
              choices: [
                { id: "a", text: "Layer 1 - Physical" },
                { id: "b", text: "Layer 2 - Data Link" },
                { id: "c", text: "Layer 3 - Network" },
                { id: "d", text: "Layer 5 - Session" },
              ],
              correctChoiceId: "b",
              explanation:
                "Switches operate at Layer 2, using MAC addresses in Ethernet frames to forward traffic within a local network segment.",
              objectiveId: "CCNA-1.2",
              difficulty: "easy",
            },
            {
              id: "osi-q3",
              prompt: "Which transport protocol provides reliable, connection-oriented delivery?",
              choices: [
                { id: "a", text: "UDP" },
                { id: "b", text: "ICMP" },
                { id: "c", text: "TCP" },
                { id: "d", text: "ARP" },
              ],
              correctChoiceId: "c",
              explanation:
                "TCP (Transmission Control Protocol) at Layer 4 provides reliable delivery with acknowledgments, sequencing, and retransmission.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "osi-q4",
              prompt: "What is the correct order of OSI layers from Layer 1 to Layer 7?",
              choices: [
                { id: "a", text: "Physical, Data Link, Network, Transport, Session, Presentation, Application" },
                { id: "b", text: "Physical, Network, Data Link, Transport, Session, Application, Presentation" },
                { id: "c", text: "Application, Presentation, Session, Transport, Network, Data Link, Physical" },
                { id: "d", text: "Data Link, Physical, Network, Transport, Application, Session, Presentation" },
              ],
              correctChoiceId: "a",
              explanation:
                "From bottom (Layer 1) to top (Layer 7): Physical, Data Link, Network, Transport, Session, Presentation, Application.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "osi-q5",
              prompt: "During encapsulation, what happens as data moves down the OSI stack?",
              choices: [
                { id: "a", text: "Headers are removed at each layer" },
                { id: "b", text: "Headers are added at each layer" },
                { id: "c", text: "Data is encrypted only at Layer 1" },
                { id: "d", text: "MAC addresses are replaced with IP addresses" },
              ],
              correctChoiceId: "b",
              explanation:
                "Encapsulation adds protocol headers at each layer as data travels down the stack toward the physical medium.",
              objectiveId: "CCNA-1.2",
              difficulty: "medium",
            },
            {
              id: "osi-q6",
              prompt: "What is the correct PDU order from Layer 4 down to Layer 1?",
              choices: [
                { id: "a", text: "Packet, Segment, Frame, Bits" },
                { id: "b", text: "Segment, Packet, Frame, Bits" },
                { id: "c", text: "Frame, Packet, Segment, Bits" },
                { id: "d", text: "Segment, Frame, Packet, Bits" },
              ],
              correctChoiceId: "b",
              explanation:
                "Going down the stack: Transport = segment (or datagram), Network = packet, Data Link = frame, Physical = bits.",
              objectiveId: "CCNA-1.2",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "osi-f1",
              front: "What are the 7 OSI layers (top to bottom)?",
              back: "Application, Presentation, Session, Transport, Network, Data Link, Physical",
            },
            {
              id: "osi-f2",
              front: "Which OSI layer uses MAC addresses?",
              back: "Layer 2 - Data Link",
            },
            {
              id: "osi-f3",
              front: "Which OSI layer handles routing between networks?",
              back: "Layer 3 - Network",
            },
            {
              id: "osi-f4",
              front: "PDU at Layer 4?",
              back: "Segment (TCP) or Datagram (UDP)",
            },
            {
              id: "osi-f4b",
              front: "Which layer uses IP addresses?",
              back: "Layer 3 — Network",
            },
            {
              id: "osi-f4c",
              front: "Common Layer 7 protocols?",
              back: "HTTP, DNS, SMTP",
            }
          ],
          objectives: [
            "CCNA-1.1",
            "CCNA-1.2",
            "CCNA-1.3"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "osi-b1",
              prompt: "Which PDU name is used at the Data Link layer?",
              choices: [
                { id: "a", text: "Packet" },
                { id: "b", text: "Frame" },
                { id: "c", text: "Segment" },
                { id: "d", text: "Bit" }
              ],
              correctChoiceId: "b",
              explanation: "Layer 2 PDUs are called frames.",
              objectiveId: "CCNA-1.3",
              difficulty: "medium",
            },
            {
              id: "osi-b2",
              prompt: "At which layer does a router primarily operate when forwarding between networks?",
              choices: [
                { id: "a", text: "Layer 1" },
                { id: "b", text: "Layer 2" },
                { id: "c", text: "Layer 3" },
                { id: "d", text: "Layer 7" }
              ],
              correctChoiceId: "c",
              explanation: "Routers make forwarding decisions using Layer 3 IP addresses.",
              objectiveId: "CCNA-1.1",
              difficulty: "hard",
            },
            {
              id: "osi-b3",
              prompt: "Which protocol provides best-effort delivery without connection setup?",
              choices: [
                { id: "a", text: "TCP" },
                { id: "b", text: "UDP" },
                { id: "c", text: "HTTP" },
                { id: "d", text: "SMTP" }
              ],
              correctChoiceId: "b",
              explanation: "UDP is connectionless at Layer 4.",
              objectiveId: "CCNA-1.2",
              difficulty: "hard",
            },
            {
              id: "osi-b4",
              prompt: "Presentation layer responsibilities include:",
              choices: [
                { id: "a", text: "MAC addressing" },
                { id: "b", text: "Data formatting and encryption" },
                { id: "c", text: "Routing" },
                { id: "d", text: "Cable specifications" }
              ],
              correctChoiceId: "b",
              explanation: "Presentation handles syntax, encoding, compression, and encryption.",
              objectiveId: "CCNA-1.3",
              difficulty: "hard",
            },
            {
              id: "osi-b5",
              prompt: "A switch forwarding based on MAC addresses operates primarily at:",
              choices: [
                { id: "a", text: "Layer 1" },
                { id: "b", text: "Layer 2" },
                { id: "c", text: "Layer 3" },
                { id: "d", text: "Layer 4" }
              ],
              correctChoiceId: "b",
              explanation: "Classic switch forwarding is Layer 2.",
              objectiveId: "CCNA-1.1",
              difficulty: "hard",
            },
            {
              id: "osi-b6",
              prompt: "De-encapsulation occurs:",
              choices: [
                { id: "a", text: "As data moves down the stack" },
                { id: "b", text: "As data moves up the stack on the receiver" },
                { id: "c", text: "Only at Layer 1" },
                { id: "d", text: "Only in routers" }
              ],
              correctChoiceId: "b",
              explanation: "Receiving hosts strip headers layer by layer going up.",
              objectiveId: "CCNA-1.2",
              difficulty: "hard",
            }
          ,
            {
              id: "osi-b7",
              prompt: "Which OSI layer is responsible for establishing, managing, and terminating sessions between applications?",
              choices: [
              { id: "a", text: "Layer 4 – Transport" },
              { id: "b", text: "Layer 5 – Session" },
              { id: "c", text: "Layer 6 – Presentation" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "b",
              explanation: "The Session layer (Layer 5) sets up, coordinates, and terminates conversations between applications.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "osi-b8",
              prompt: "When a host sends data, at which OSI layer is the IP header added?",
              choices: [
              { id: "a", text: "Layer 2 – Data Link" },
              { id: "b", text: "Layer 3 – Network" },
              { id: "c", text: "Layer 4 – Transport" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "b",
              explanation: "The Network layer (Layer 3) encapsulates the segment into a packet by adding the source and destination IP addresses.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "osi-b9",
              prompt: "What is the correct name for the Protocol Data Unit (PDU) at the Transport layer?",
              choices: [
              { id: "a", text: "Packet" },
              { id: "b", text: "Frame" },
              { id: "c", text: "Segment" },
              { id: "d", text: "Datagram" }
              ],
              correctChoiceId: "c",
              explanation: "TCP calls its PDU a segment; the Transport layer PDU is officially named a segment (TCP) or datagram (UDP), but 'segment' is the standard exam answer.",
              objectiveId: "CCNA-1.2",
              difficulty: "easy",
            },
            {
              id: "osi-b11",
              prompt: "HTTP, DNS, and SMTP are examples of protocols operating at which OSI layer?",
              choices: [
              { id: "a", text: "Layer 4 – Transport" },
              { id: "b", text: "Layer 5 – Session" },
              { id: "c", text: "Layer 6 – Presentation" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "d",
              explanation: "HTTP, DNS, and SMTP are application-layer protocols taught in the OSI lesson.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "osi-b12",
              prompt: "ICMP (Internet Control Message Protocol) operates at which OSI layer?",
              choices: [
              { id: "a", text: "Layer 2 – Data Link" },
              { id: "b", text: "Layer 3 – Network" },
              { id: "c", text: "Layer 4 – Transport" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "b",
              explanation: "ICMP is a Layer 3 protocol carried inside IP packets; it is used by ping and traceroute.",
              objectiveId: "CCNA-1.1",
              difficulty: "medium",
            },
            {
              id: "osi-b13",
              prompt: "Which OSI layer converts digital bits into electrical, optical, or radio signals?",
              choices: [
              { id: "a", text: "Layer 1 – Physical" },
              { id: "b", text: "Layer 2 – Data Link" },
              { id: "c", text: "Layer 3 – Network" },
              { id: "d", text: "Layer 5 – Session" }
              ],
              correctChoiceId: "a",
              explanation: "The Physical layer defines how bits are transmitted over a medium as electrical voltages, light pulses, or radio waves.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "osi-b14",
              prompt: "Port numbers (e.g., TCP 80, UDP 53) are a function of which OSI layer?",
              choices: [
              { id: "a", text: "Layer 2 – Data Link" },
              { id: "b", text: "Layer 3 – Network" },
              { id: "c", text: "Layer 4 – Transport" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "c",
              explanation: "Port numbers identify upper-layer services and reside in the Transport layer (TCP/UDP) header.",
              objectiveId: "CCNA-1.2",
              difficulty: "easy",
            },
            {
              id: "osi-b15",
              prompt: "What is the PDU name at OSI Layer 3?",
              choices: [
              { id: "a", text: "Segment" },
              { id: "b", text: "Packet" },
              { id: "c", text: "Frame" },
              { id: "d", text: "Bit" }
              ],
              correctChoiceId: "b",
              explanation: "Layer 3 (Network) PDUs are called packets; they include the IP header with logical addresses.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "osi-b16",
              prompt: "TLS/SSL encryption is most commonly mapped to which OSI layer for exam purposes?",
              choices: [
              { id: "a", text: "Layer 3 – Network" },
              { id: "b", text: "Layer 4 – Transport" },
              { id: "c", text: "Layer 6 – Presentation" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "c",
              explanation: "TLS/SSL handles data formatting and encryption, which maps to the Presentation layer (Layer 6) on CCNA exams.",
              objectiveId: "CCNA-1.3",
              difficulty: "medium",
            },
            {
              id: "osi-b17",
              prompt: "A technician suspects a physical-layer issue. Which troubleshooting approach should they start with?",
              choices: [
              { id: "a", text: "Check application settings first" },
              { id: "b", text: "Verify Layer 1 (cable, NIC, LEDs) before progressing upward" },
              { id: "c", text: "Capture packets at Layer 4" },
              { id: "d", text: "Reload the router OS" }
              ],
              correctChoiceId: "b",
              explanation: "Bottom-up troubleshooting starts at Layer 1. Physical connectivity must be confirmed before checking higher-layer issues.",
              objectiveId: "CCNA-1.1",
              difficulty: "medium",
            },
            {
              id: "osi-b18",
              prompt: "Which mnemonic correctly lists OSI layers from Layer 7 down to Layer 1?",
              choices: [
              { id: "a", text: "Please Do Not Throw Sausage Pizza Away" },
              { id: "b", text: "All People Seem To Need Data Processing" },
              { id: "c", text: "Physical Data Network Transport Session Presentation Application" },
              { id: "d", text: "Application Presentation Session Network Transport Data Physical" }
              ],
              correctChoiceId: "b",
              explanation: "'All People Seem To Need Data Processing' maps to Application, Presentation, Session, Transport, Network, Data Link, Physical (Layers 7 to 1).",
              objectiveId: "CCNA-1.2",
              difficulty: "easy",
            },
            {
              id: "osi-b19",
              prompt: "SMTP (Simple Mail Transfer Protocol) used for sending email operates at which OSI layer?",
              choices: [
              { id: "a", text: "Layer 3 – Network" },
              { id: "b", text: "Layer 4 – Transport" },
              { id: "c", text: "Layer 5 – Session" },
              { id: "d", text: "Layer 7 – Application" }
              ],
              correctChoiceId: "d",
              explanation: "SMTP is an application-layer protocol running over TCP port 25 to transfer email between servers.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            }],
          assignments: [
            {
              id: "osi-sim-drill",
              title: "OSI Layer Sorter Drill",
              type: "simulator",
              instructions: "Complete the in-app OSI layer sorter. Match protocols and functions to the correct layer. Repeat until you score at least 80%.",
              estimatedMinutes: 15,
              simulatorId: "osi-layer-sorter",
              completionCriteria: [
                "Completed simulator session",
                "Scored 80% or higher"
              ],
              relatedTopicIds: ["osi-model"],
              order: 1,
            }
          ],
        
        },
        {
          id: "tcp-ip-model",
          name: "TCP/IP Model",
          prerequisites: ["osi-model"],
          lesson: {
            title: "The TCP/IP Model",
            content: `The TCP/IP model is the practical networking model used on the modern Internet. Unlike the 7-layer OSI model, TCP/IP has four layers that map loosely to OSI layers but reflect how protocols are actually implemented.

The Network Access layer (combining OSI Layers 1 and 2) handles physical transmission and local delivery using Ethernet, Wi-Fi, or other link technologies. The Internet layer (similar to OSI Layer 3) uses IP for logical addressing and routing across networks. The Transport layer (OSI Layer 4) provides end-to-end communication with TCP for reliable streams or UDP for lightweight datagrams. The Application layer (OSI Layers 5-7) encompasses protocols like HTTP, DNS, SMTP, and FTP that applications use directly.

TCP/IP emerged from ARPANET research and became the foundation of the Internet. Its simplicity—four layers instead of seven—makes it easier to implement while still providing structured protocol design. Most troubleshooting on real networks uses TCP/IP terminology: checking IP connectivity, verifying TCP sessions, or testing application protocols.

Understanding how TCP/IP maps to OSI helps on exams and in conversations with colleagues who reference either model. For example, Ethernet operates at the Network Access layer, IP at the Internet layer, and HTTPS at the Application layer.

Protocol suites in the Application layer include HTTP/HTTPS for web traffic, DNS for name resolution, DHCP for address assignment, and SMTP/IMAP for email. The Transport layer multiplexes applications using port numbers—well-known ports 0–1023, registered 1024–49151, and dynamic/ephemeral above that.

ICMP lives at the Internet layer alongside IP and provides diagnostics like ping (echo request/reply) and unreachable messages. ARP resolves IP to MAC and sits at the boundary between Internet and Network Access layers—often described as Layer 2.5.

Dual-stack hosts run IPv4 and IPv6 simultaneously. When studying for CCNA, practice mapping exam questions between OSI seven layers and TCP/IP four layers quickly.`,
            experience: TCP_IP_MODEL_EXPERIENCE,
          },
          keyFacts: [
            "Four TCP/IP layers (ATIN): Application, Transport, Internet, Network Access",
            "OSI map: Application ≈ layers 5–7 · Transport = 4 · Internet = 3 · Network Access = 1–2",
            "TCP = reliable, connection-oriented (SYN → SYN-ACK → ACK); UDP = fast, connectionless",
            "Ports live at Transport — well-known 0–1023 · registered 1024–49151 · ephemeral 49152+",
            "Ports for this topic: TCP 80 HTTP · 443 HTTPS · 22 SSH · 23 Telnet · UDP 53 DNS (mostly)",
            "Internet = IP + ICMP (ping); ARP is deferred to Ethernet · Network Access = Ethernet/Wi-Fi",
          ],
          lightbulbMoment: "TCP/IP is the Internet's practical version of OSI — same stack, four layers instead of seven.",
          guidedExample: {
            title: "Load https://example.com — layer by layer",
            steps: [
              "Application: browser builds an HTTP request (web protocol).",
              "Transport: TCP wraps it, picks source port + destination port 443 (HTTPS), runs SYN → SYN-ACK → ACK.",
              "Internet: IP adds source and destination addresses so routers can forward the packet.",
              "Network Access: Ethernet frame with your MAC and the default gateway's MAC carries the packet on the LAN.",
              "Same trip in reverse for the reply — each layer strips its header going back up.",
            ],
          },
          commonMistakes: [
            "Confusing TCP (Transport) with IP (Internet) — different layers, different jobs",
            "Thinking UDP is reliable because it sits at the Transport layer",
            "Placing SSH or Telnet at Transport or Internet — both are Application layer protocols",
            "Mixing up port numbers (Transport) with IP addresses (Internet)",
            "Memorizing FTP, DHCP, SNMP, TFTP, or NTP ports here — those belong to IP Services topics later",
            "Testing yourself on ARP before the Ethernet lesson — ARP is introduced there, only deferred here",
          ],
          examTraps: [
            "HTTP, DNS, SSH, and Telnet belong to Application — not Transport",
            "TCP three-way handshake is Transport only — not Internet or Application",
            "ICMP ping succeeding only proves reachability through the Internet layer",
            "DNS is mostly UDP port 53 — do not pick TCP-only distractors without context",
            "SSH = TCP 22 · Telnet = TCP 23 · HTTPS = TCP 443 — know these for this topic",
            "Distractors listing five TCP/IP layers, or placing Ethernet at the Internet layer",
          ],
          realWorldScenario: "You open a webpage: HTTP at Application, TCP port 443 at Transport, IP routing at Internet, and an Ethernet frame to your router at Network Access. Later you SSH into a switch on TCP port 22 — same four-layer trip, different Application protocol.",
          quiz: [
            {
              id: "tcp-q1",
              prompt: "How many layers does the TCP/IP model have?",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "4" },
                { id: "c", text: "5" },
                { id: "d", text: "7" },
              ],
              correctChoiceId: "b",
              explanation: "The TCP/IP model has 4 layers: Application, Transport, Internet, and Network Access.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "tcp-q2",
              prompt: "Which TCP/IP layer corresponds to OSI Layer 3 (Network)?",
              choices: [
                { id: "a", text: "Application" },
                { id: "b", text: "Transport" },
                { id: "c", text: "Internet" },
                { id: "d", text: "Network Access" },
              ],
              correctChoiceId: "c",
              explanation:
                "The Internet layer handles IP addressing and routing, equivalent to OSI Layer 3.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            },
            {
              id: "tcp-q3",
              prompt: "Which protocol operates at the TCP/IP Transport layer?",
              choices: [
                { id: "a", text: "HTTP" },
                { id: "b", text: "IP" },
                { id: "c", text: "TCP" },
                { id: "d", text: "Ethernet" },
              ],
              correctChoiceId: "c",
              explanation:
                "TCP and UDP operate at the Transport layer, providing end-to-end communication between hosts.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "tcp-q4",
              prompt: "The TCP/IP Network Access layer combines which OSI layers?",
              choices: [
                { id: "a", text: "Layers 1 and 2" },
                { id: "b", text: "Layers 2 and 3" },
                { id: "c", text: "Layers 3 and 4" },
                { id: "d", text: "Layers 5, 6, and 7" },
              ],
              correctChoiceId: "a",
              explanation:
                "Network Access maps to OSI Physical (Layer 1) and Data Link (Layer 2) for local network delivery.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            },
            {
              id: "tcp-q5",
              prompt: "Which statement best describes UDP?",
              choices: [
                { id: "a", text: "Reliable, connection-oriented with acknowledgments" },
                { id: "b", text: "Fast, connectionless with no guaranteed delivery" },
                { id: "c", text: "Used only for web browsing" },
                { id: "d", text: "Operates at the Internet layer" },
              ],
              correctChoiceId: "b",
              explanation:
                "UDP is connectionless and does not guarantee delivery, making it faster for applications like DNS and streaming.",
              objectiveId: "CCNA-1.1",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "tcp-f1",
              front: "Name the 4 TCP/IP layers (top to bottom)",
              back: "Application, Transport, Internet, Network Access",
            },
            {
              id: "tcp-f2",
              front: "TCP/IP layer for IP addressing and routing?",
              back: "Internet layer",
            },
            {
              id: "tcp-f3",
              front: "Difference between TCP and UDP?",
              back: "TCP is reliable and connection-oriented; UDP is fast and connectionless",
            },
            {
              id: "tcp-f4",
              front: "ICMP belongs to which TCP/IP layer?",
              back: "Internet layer",
            },
            {
              id: "tcp-f4b",
              front: "Well-known port range?",
              back: "0–1023",
            },
            {
              id: "tcp-f4c",
              front: "Network Access layer examples?",
              back: "Ethernet and Wi-Fi (802.11) on LANs — PPP on WAN serial links comes later",
            },
            {
              id: "tcp-f5",
              front: "SSH vs Telnet — layer and ports?",
              back: "Both Application layer · SSH TCP 22 (encrypted) · Telnet TCP 23 (plain text)",
            },
            {
              id: "tcp-f6",
              front: "Common CCNA ports (TCP unless noted)?",
              back: "80 HTTP · 443 HTTPS · 22 SSH · 23 Telnet · 53 DNS (UDP mostly)",
            }
          ],
          objectives: [
            "CCNA-1.1",
            "CCNA-1.4",
            "CCNA-1.5"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "tcp-b1",
              prompt: "Which port does HTTPS typically use?",
              choices: [
                { id: "a", text: "80" },
                { id: "b", text: "443" },
                { id: "c", text: "22" },
                { id: "d", text: "53" }
              ],
              correctChoiceId: "b",
              explanation: "HTTPS uses TCP port 443 (taught in the Transport ports card).",
              objectiveId: "CCNA-1.4",
              difficulty: "medium",
            },
            {
              id: "tcp-b2",
              prompt: "DNS primarily uses which transport protocol?",
              choices: [
                { id: "a", text: "TCP only" },
                { id: "b", text: "UDP primarily (TCP for large transfers)" },
                { id: "c", text: "ICMP" },
                { id: "d", text: "ARP" }
              ],
              correctChoiceId: "b",
              explanation: "Most DNS queries use UDP port 53 — covered in the lesson's common ports card.",
              objectiveId: "CCNA-1.1",
              difficulty: "medium",
            },
            {
              id: "tcp-b4",
              prompt: "The Internet layer PDU is called a:",
              choices: [
                { id: "a", text: "Segment" },
                { id: "b", text: "Packet" },
                { id: "c", text: "Frame" },
                { id: "d", text: "Bit" }
              ],
              correctChoiceId: "b",
              explanation: "IP packets are Internet layer PDUs (also covered in the OSI lesson prerequisite).",
              objectiveId: "CCNA-1.1",
              difficulty: "medium",
            },
            {
              id: "tcp-b5",
              prompt: "Which layer includes both physical cabling and Ethernet framing?",
              choices: [
                { id: "a", text: "Application" },
                { id: "b", text: "Transport" },
                { id: "c", text: "Internet" },
                { id: "d", text: "Network Access" }
              ],
              correctChoiceId: "d",
              explanation: "Network Access combines OSI Layers 1 and 2.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            },
            {
              id: "tcp-b6",
              prompt: "Telnet and SSH are examples of:",
              choices: [
                { id: "a", text: "Internet layer protocols" },
                { id: "b", text: "Application layer protocols" },
                { id: "c", text: "Transport layer protocols" },
                { id: "d", text: "Link-layer control protocols" }
              ],
              correctChoiceId: "b",
              explanation: "Both are Application layer remote-access protocols — taught in the SSH/Telnet card.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "tcp-b7",
              prompt: "What is the correct sequence of the TCP three-way handshake?",
              choices: [
              { id: "a", text: "SYN → ACK → SYN-ACK" },
              { id: "b", text: "SYN → SYN-ACK → ACK" },
              { id: "c", text: "ACK → SYN → SYN-ACK" },
              { id: "d", text: "SYN-ACK → SYN → ACK" }
              ],
              correctChoiceId: "b",
              explanation: "TCP establishes connections with SYN (client), SYN-ACK (server), ACK (client) before data transfer begins.",
              objectiveId: "CCNA-1.5",
              difficulty: "easy",
            },
            {
              id: "tcp-b8",
              prompt: "Which statement best distinguishes TCP from UDP?",
              choices: [
              { id: "a", text: "TCP is faster; UDP provides reliability" },
              { id: "b", text: "TCP guarantees ordered, reliable delivery; UDP offers low-overhead connectionless delivery" },
              { id: "c", text: "UDP uses port numbers; TCP does not" },
              { id: "d", text: "TCP operates at Layer 3; UDP operates at Layer 2" }
              ],
              correctChoiceId: "b",
              explanation: "TCP provides connection-oriented, reliable delivery. UDP is connectionless with no delivery guarantee.",
              objectiveId: "CCNA-1.5",
              difficulty: "easy",
            },
            {
              id: "tcp-b9",
              prompt: "The TCP/IP Transport layer maps to which OSI layer?",
              choices: [
              { id: "a", text: "OSI Layer 2" },
              { id: "b", text: "OSI Layer 3" },
              { id: "c", text: "OSI Layer 4" },
              { id: "d", text: "OSI Layers 5-7" }
              ],
              correctChoiceId: "c",
              explanation: "The TCP/IP Transport layer directly corresponds to OSI Layer 4.",
              objectiveId: "CCNA-1.1",
              difficulty: "easy",
            },
            {
              id: "tcp-b11",
              prompt: "Which application would most benefit from UDP rather than TCP?",
              choices: [
              { id: "a", text: "Downloading a software update" },
              { id: "b", text: "Live video streaming" },
              { id: "c", text: "Uploading a file via SFTP" },
              { id: "d", text: "Sending an email via SMTP" }
              ],
              correctChoiceId: "b",
              explanation: "Live streaming tolerates some loss but not TCP retransmission delays — UDP fits better.",
              objectiveId: "CCNA-1.5",
              difficulty: "medium",
            },
            {
              id: "tcp-b13",
              prompt: "Which TCP/IP port is used by SSH for secure remote management?",
              choices: [
              { id: "a", text: "23" },
              { id: "b", text: "22" },
              { id: "c", text: "3389" },
              { id: "d", text: "443" }
              ],
              correctChoiceId: "b",
              explanation: "SSH runs on TCP port 22 — on the lesson's common ports card.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            },
            {
              id: "tcp-b16",
              prompt: "Well-known port numbers are defined in which range?",
              choices: [
              { id: "a", text: "0 – 1023" },
              { id: "b", text: "1024 – 49151" },
              { id: "c", text: "49152 – 65535" },
              { id: "d", text: "0 – 65535" }
              ],
              correctChoiceId: "a",
              explanation: "IANA defines ports 0–1023 as well-known — taught in the port ranges card.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            }],
          assignments: [
            {
              id: "tcpip-map-sim",
              title: "TCP/IP Model Mapping Drill",
              type: "simulator",
              instructions: "Run the TCP/IP layer map simulator. Match each protocol to the correct TCP/IP layer until you consistently score 80%+.",
              estimatedMinutes: 12,
              simulatorId: "tcpip-layer-map",
              completionCriteria: [
                "Completed simulator",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["tcp-ip-model"],
              order: 1,
            }
          ],
        
        },
        {
          id: "ethernet",
          name: "Ethernet",
          prerequisites: ["osi-model", "tcp-ip-model"],
          lesson: {
            title: "Ethernet Fundamentals",
            content: `Ethernet is the dominant Layer 2 technology for wired local area networks. Defined originally by IEEE 802.3, it uses MAC addresses to deliver frames between devices on the same broadcast domain. Common speeds include 10 Mbps, 100 Mbps (Fast Ethernet), 1 Gbps, and 10 Gbps.

An Ethernet frame contains destination and source MAC addresses, a Type/Length field, the data payload, and a Frame Check Sequence (FCS) for error detection. Switches learn MAC addresses by examining source addresses in incoming frames and build a MAC address table to forward traffic efficiently.

Half-duplex Ethernet uses CSMA/CD to detect collisions on shared media. Full-duplex operation on switched ports eliminates collisions because each direction has a dedicated path. Auto-negotiation allows devices to agree on speed and duplex settings automatically, though mismatches can cause performance problems.

Understanding Ethernet framing, MAC addressing, and duplex settings is essential for CCNA troubleshooting on access-layer switches and host connections.

Ethernet variants include 10BASE-T (10 Mbps over copper), 100BASE-TX (Fast Ethernet), 1000BASE-T (Gigabit over UTP), and fiber options like 1000BASE-SX. Category 5e or Cat 6 cable supports Gigabit on four pairs. MDI/MDI-X and auto-MDIX resolve transmit/receive pair wiring.

The Ethernet header includes a 6-byte destination MAC, 6-byte source MAC, optional 802.1Q VLAN tag (4 bytes when present), EtherType/Length field, payload (46–1500 bytes typical), and 4-byte FCS. Broadcast MAC is FF:FF:FF:FF:FF:FF; unicast addresses have an even first octet in the I/G bit convention.

Jumbo frames exceed 1500-byte MTU and may not traverse all paths. Understanding collision vs broadcast domains remains essential even in full-duplex switched networks.`,
            experience: ETHERNET_MODEL_EXPERIENCE,
          },
          keyFacts: [
            "Ethernet is IEEE 802.3 — spans OSI Layers 1 (Physical) and 2 (Data Link)",
            "Frames carry packets; a frame contains source/destination MAC plus payload",
            "Switches learn MACs and forward unicast frames; broadcasts flood the local segment (FF:FF:FF:FF:FF:FF)",
            "For remote destinations, the frame destination MAC is the default gateway router — not the remote host",
            "Full-duplex switched ports eliminate collisions; hubs create collision domains",
            "ARP resolves IP to MAC on the local segment; FCS provides frame error detection",
          ],
          lightbulbMoment: "Ethernet delivers frames inside a local network using MAC addresses.",
          guidedExample: {
            title: "PC sends a packet to a remote web server",
            steps: [
              "PC knows the server IP but needs a Layer 2 destination on the local segment.",
              "ARP resolves the default gateway IP to the router's MAC address.",
              "PC builds an Ethernet frame: destination MAC = router, source MAC = PC NIC.",
              "The IP packet inside still lists the remote server as the final destination.",
              "Router receives the frame, strips Layer 2, and routes the packet toward the server.",
            ],
          },
          commonMistakes: [
            "Confusing collision domains (hubs) with broadcast domains on a switch",
            "Putting the remote server's MAC as the frame destination when the host is off-LAN",
            "Forgetting that broadcasts (FF:FF:FF:FF:FF:FF) flood the local segment",
            "Attributing IP routing decisions to Ethernet switches at Layer 2",
          ],
          examTraps: [
            "Half vs full duplex impact on collisions and throughput",
            "MAC address format and locally vs universally administered addresses",
            "Frame vs packet terminology on exam questions",
            "Destination MAC for off-LAN traffic is the default gateway — not the remote host",
            "FCS/CRC error detection at Layer 2 — not routing or encryption",
          ],
          realWorldScenario: "A user on the office LAN pings a server on another subnet. The PC's frame goes to the router's MAC address; the switch forwards based on its MAC table without reading the destination IP inside the packet.",
          quiz: [
            {
              id: "ethernet-q1",
              prompt: "At which OSI layer does Ethernet primarily operate?",
              choices: [
                { id: "a", text: "Layer 1 - Physical" },
                { id: "b", text: "Layer 2 - Data Link" },
                { id: "c", text: "Layer 3 - Network" },
                { id: "d", text: "Layer 4 - Transport" },
              ],
              correctChoiceId: "b",
              explanation: "Ethernet is a Data Link layer technology that uses MAC addresses in frames.",
              objectiveId: "CCNA-1.5",
              difficulty: "easy",
            },
            {
              id: "ethernet-q2",
              prompt: "What does a switch use to forward Ethernet frames?",
              choices: [
                { id: "a", text: "IP addresses" },
                { id: "b", text: "MAC addresses" },
                { id: "c", text: "Port numbers" },
                { id: "d", text: "VLAN tags only" },
              ],
              correctChoiceId: "b",
              explanation: "Switches examine destination MAC addresses and consult their MAC address table.",
              objectiveId: "CCNA-1.6",
              difficulty: "easy",
            },
            {
              id: "ethernet-q3",
              prompt: "Which duplex mode eliminates collisions on a switched port?",
              choices: [
                { id: "a", text: "Half-duplex" },
                { id: "b", text: "Full-duplex" },
                { id: "c", text: "Auto only" },
                { id: "d", text: "Simplex" },
              ],
              correctChoiceId: "b",
              explanation: "Full-duplex allows simultaneous send and receive on separate paths, eliminating collisions.",
              objectiveId: "CCNA-1.5",
              difficulty: "easy",
            },
            {
              id: "ethernet-q4",
              prompt: "What is the purpose of the FCS field in an Ethernet frame?",
              choices: [
                { id: "a", text: "Routing" },
                { id: "b", text: "Error detection" },
                { id: "c", text: "Encryption" },
                { id: "d", text: "VLAN identification" },
              ],
              correctChoiceId: "b",
              explanation: "The Frame Check Sequence uses CRC to detect transmission errors.",
              objectiveId: "CCNA-1.6",
              difficulty: "easy",
            },
            {
              id: "ethernet-q5",
              prompt: "How does a switch learn MAC addresses?",
              choices: [
                { id: "a", text: "From ARP requests" },
                { id: "b", text: "From source MAC in received frames" },
                { id: "c", text: "From DHCP" },
                { id: "d", text: "From DNS queries" },
              ],
              correctChoiceId: "b",
              explanation: "Switches record the source MAC address and incoming port of each frame.",
              objectiveId: "CCNA-1.5",
              difficulty: "medium",
            },
            {
              id: "ethernet-q9",
              prompt: "When a host sends traffic to a remote server (not on the local LAN), what MAC address is in the Ethernet frame destination field?",
              choices: [
                { id: "a", text: "The remote server's MAC address" },
                { id: "b", text: "The default gateway's MAC address" },
                { id: "c", text: "FF:FF:FF:FF:FF:FF" },
                { id: "d", text: "The host's own MAC address" },
              ],
              correctChoiceId: "b",
              explanation: "The remote server's MAC is unknown on your LAN. The frame goes to the default gateway (router), which routes the IP packet onward.",
              objectiveId: "CCNA-1.5",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "ethernet-f1",
              front: "What address type does Ethernet use at Layer 2?",
              back: "MAC address — 48 bits, typically shown as six hex pairs",
            },
            {
              id: "ethernet-f2",
              front: "Half-duplex vs full-duplex on Ethernet?",
              back: "Half-duplex can collide on shared media; full-duplex sends and receives simultaneously without collisions",
            },
            {
              id: "ethernet-f3",
              front: "What builds a switch MAC address table?",
              back: "Learning source MAC addresses from incoming frames and associating them with ports",
            },
            {
              id: "ethernet-f4",
              front: "Standard Ethernet MTU?",
              back: "1500 bytes",
            },
            {
              id: "ethernet-f4b",
              front: "Broadcast MAC address?",
              back: "FF:FF:FF:FF:FF:FF",
            },
            {
              id: "ethernet-f4c",
              front: "CSMA/CD used in?",
              back: "Legacy half-duplex shared Ethernet",
            },
            {
              id: "ethernet-f5",
              front: "Destination MAC for remote traffic?",
              back: "Default gateway (router) MAC — the remote server MAC is not on your LAN",
            },
          ],
          objectives: [
            "CCNA-1.3",
            "CCNA-1.4",
            "CCNA-1.5",
            "CCNA-1.6"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "ethernet-b1",
              prompt: "Fast Ethernet speed?",
              choices: [
                { id: "a", text: "10 Mbps" },
                { id: "b", text: "100 Mbps" },
                { id: "c", text: "1 Gbps" },
                { id: "d", text: "10 Gbps" }
              ],
              correctChoiceId: "b",
              explanation: "100BASE-T is Fast Ethernet at 100 Mbps.",
              objectiveId: "CCNA-1.6",
              difficulty: "medium",
            },
            {
              id: "ethernet-b5",
              prompt: "Full-duplex on a switch port means:",
              choices: [
                { id: "a", text: "Shared collision domain" },
                { id: "b", text: "Simultaneous send and receive without collisions" },
                { id: "c", text: "Half speed" },
                { id: "d", text: "Wireless only" }
              ],
              correctChoiceId: "b",
              explanation: "Full-duplex uses separate paths for TX/RX.",
              objectiveId: "CCNA-1.6",
              difficulty: "hard",
            },
            {
              id: "ethernet-b6",
              prompt: "Which cable category commonly supports 1 Gbps UTP?",
              choices: [
                { id: "a", text: "Cat 3" },
                { id: "b", text: "Cat 5e or Cat 6" },
                { id: "c", text: "Cat 1" },
                { id: "d", text: "Coax RG-59 only" }
              ],
              correctChoiceId: "b",
              explanation: "Cat 5e/6 supports Gigabit Ethernet on UTP.",
              objectiveId: "CCNA-1.5",
              difficulty: "hard",
            },
            {
              id: "ethernet-b9",
              prompt: "What destination MAC address is used for an Ethernet broadcast?",
              choices: [
              { id: "a", text: "00:00:00:00:00:00" },
              { id: "b", text: "FF:FF:FF:FF:FF:FF" },
              { id: "c", text: "01:00:5E:00:00:01" },
              { id: "d", text: "00:0C:29:XX:XX:XX" }
              ],
              correctChoiceId: "b",
              explanation: "FF:FF:FF:FF:FF:FF is the Ethernet broadcast address. All devices on the segment process frames with this destination.",
              objectiveId: "CCNA-1.4",
              difficulty: "easy",
            },
            {
              id: "ethernet-b10",
              prompt: "Which duplex mode allows simultaneous transmit and receive, eliminating collisions?",
              choices: [
              { id: "a", text: "Half-duplex" },
              { id: "b", text: "Full-duplex" },
              { id: "c", text: "Simplex" },
              { id: "d", text: "Auto-duplex" }
              ],
              correctChoiceId: "b",
              explanation: "Full-duplex uses separate wire pairs for transmit and receive simultaneously. Half-duplex cannot send and receive at the same time and relies on CSMA/CD.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "ethernet-b11",
              prompt: "The IEEE standard that defines Ethernet is:",
              choices: [
              { id: "a", text: "IEEE 802.11" },
              { id: "b", text: "IEEE 802.3" },
              { id: "c", text: "IEEE 802.1Q" },
              { id: "d", text: "IEEE 802.1X" }
              ],
              correctChoiceId: "b",
              explanation: "IEEE 802.3 defines the Ethernet standard for wired LANs. 802.11 is Wi-Fi, 802.1Q is VLAN tagging, and 802.1X is port-based access control.",
              objectiveId: "CCNA-1.3",
              difficulty: "easy",
            },
            {
              id: "ethernet-b12",
              prompt: "CSMA/CD is used to manage collisions in which Ethernet environment?",
              choices: [
              { id: "a", text: "Switched full-duplex links" },
              { id: "b", text: "Half-duplex shared bus or hub-based segments" },
              { id: "c", text: "Fiber optic links only" },
              { id: "d", text: "Wi-Fi networks" }
              ],
              correctChoiceId: "b",
              explanation: "CSMA/CD (Carrier Sense Multiple Access / Collision Detect) applies to half-duplex Ethernet shared segments. Modern switched full-duplex links do not have collisions.",
              objectiveId: "CCNA-1.3",
              difficulty: "medium",
            },
            {
              id: "ethernet-b16",
              prompt: "The first 24 bits (3 bytes) of a MAC address identify the:",
              choices: [
              { id: "a", text: "Device serial number" },
              { id: "b", text: "Organizationally Unique Identifier (OUI) assigned to the manufacturer" },
              { id: "c", text: "VLAN ID" },
              { id: "d", text: "IP subnet" }
              ],
              correctChoiceId: "b",
              explanation: "The OUI occupies the first 24 bits of a 48-bit MAC address and is assigned by IEEE to identify the manufacturer (e.g., Cisco, Intel).",
              objectiveId: "CCNA-1.4",
              difficulty: "medium",
            },
            {
              id: "ethernet-b18",
              prompt: "In a switched Ethernet network, each port forms its own:",
              choices: [
              { id: "a", text: "Broadcast domain" },
              { id: "b", text: "Collision domain" },
              { id: "c", text: "VLAN by default" },
              { id: "d", text: "Subnet" }
              ],
              correctChoiceId: "b",
              explanation: "Each switch port is its own collision domain. All ports on the same switch (without VLANs) share a single broadcast domain.",
              objectiveId: "CCNA-1.4",
              difficulty: "medium",
            },
            {
              id: "ethernet-b21",
              prompt: "CRC (Cyclic Redundancy Check) error detection in Ethernet is performed using which field?",
              choices: [
              { id: "a", text: "EtherType" },
              { id: "b", text: "FCS at the end of the frame" },
              { id: "c", text: "Preamble" },
              { id: "d", text: "VLAN tag" }
              ],
              correctChoiceId: "b",
              explanation: "The Frame Check Sequence (FCS) stores the CRC fingerprint — taught in the Ethernet FCS cards.",
              objectiveId: "CCNA-1.3",
              difficulty: "medium",
            },
            {
              id: "ethernet-b22",
              prompt: "Layer 2 encapsulation wraps an IP packet with:",
              choices: [
              { id: "a", text: "IP header and IP trailer" },
              { id: "b", text: "Ethernet header (MAC addresses) and FCS trailer" },
              { id: "c", text: "TCP header and port numbers" },
              { id: "d", text: "HTTP header and body" }
              ],
              correctChoiceId: "b",
              explanation: "Ethernet adds source/destination MAC addresses and an FCS for error checking — relocated from OSI topic after deferral.",
              objectiveId: "CCNA-1.3",
              difficulty: "medium",
            }],
          assignments: [
            {
              id: "ethernet-cable-sim",
              title: "Cable and Connector Identification",
              type: "simulator",
              instructions: "Complete the cable type drill. Identify cable categories, connectors, and maximum distances for common Ethernet media.",
              estimatedMinutes: 10,
              simulatorId: "cable-type-drill",
              completionCriteria: [
                "Completed drill",
                "Score 70% or higher"
              ],
              relatedTopicIds: ["ethernet"],
              order: 1,
            }
          ],
        
        },
        {
          id: "ipv4-addressing",
          name: "IPv4 Addressing",
          prerequisites: ["osi-model", "tcp-ip-model", "ethernet"],
          lesson: {
            title: "IPv4 Address Structure and Classes",
            content: `IPv4 addresses are 32-bit logical identifiers written as four decimal octets separated by dots, such as 192.168.1.10. Each octet ranges from 0 to 255. IPv4 addresses identify hosts and interfaces on IP networks and are used by routers to forward packets between subnets.

An IPv4 address has two parts: the network portion and the host portion. The subnet mask (or prefix length) defines where the boundary falls. A /24 mask (255.255.255.0) means the first 24 bits identify the network and the last 8 bits identify the host. Private address ranges defined in RFC 1918 are not routable on the public Internet.

Special addresses include 127.0.0.0/8 for loopback (127.0.0.1), link-local 169.254.0.0/16 when DHCP fails, and 255.255.255.255 for limited broadcast. Default gateway is the router IP on a subnet that hosts use to reach remote networks.

Every device needs a unique IP address on its subnet, correct subnet mask, and default gateway to communicate beyond the local network.

IPv4 addresses are 32-bit dotted-decimal values. The subnet mask (or prefix length) separates network and host portions. CIDR notation like /24 means 24 network bits. Usable host count = 2^hostbits − 2 (subtract network and broadcast in classful-style subnets).

Private RFC 1918 ranges: 10.0.0.0/8, 172.16.0.0/12, 172.31.255.255, and 192.168.0.0/16. APIPA 169.254.0.0/16 indicates DHCP failure. Loopback 127.0.0.0/8 tests the local stack.

Every host needs a unique address in its subnet, a matching mask, and a default gateway on the same subnet to reach remote networks. Practice converting between dotted-decimal masks and prefix lengths—CCNA exams test this heavily.`,
            experience: IPV4_ADDRESSING_EXPERIENCE,
          },
          keyFacts: [
            "IPv4 addresses are 32 bits written as four dotted-decimal octets (0–255 each)",
            "IP identifies hosts on networks; MAC identifies devices on a local link — both are needed",
            "Subnet mask or CIDR prefix defines network vs host bits — same idea, two notations",
            "Default gateway must be on the same subnet as the host to reach remote networks",
            "Private RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — details in IP Ranges lesson",
            "127.0.0.1 is loopback; 169.254.x.x is APIPA when DHCP fails",
          ],
          lightbulbMoment: "IP tells you where; MAC tells you who on the local link.",
          guidedExample: {
            title: "Configure a host on 192.168.1.0/24",
            steps: [
              "Choose a host address inside the subnet — e.g., 192.168.1.10 on a /24 network.",
              "Set mask /24 (255.255.255.0) so the host knows its local network boundary.",
              "Set default gateway to a router on the same subnet — e.g., 192.168.1.1.",
              "ping 127.0.0.1 tests the local stack; ping the gateway tests Layer 3 reachability.",
            ],
          },
          commonMistakes: [
            "Setting wrong default gateway outside the host's subnet",
            "Invalid octet values above 255 in dotted-decimal notation",
            "Confusing loopback (127.x) with APIPA (169.254.x)",
            "Mixing up which octets belong to private vs public space without checking RFC 1918",
          ],
          examTraps: [
            "Subnet mask in dotted decimal vs prefix length conversion (/24 = 255.255.255.0)",
            "Default gateway must be reachable on local subnet",
            "Private vs public address classification",
            "APIPA 169.254.x.x means DHCP failed — not a valid routable address",
          ],
          realWorldScenario: "A new laptop on the office LAN needs 192.168.10.50/24 with gateway 192.168.10.1. You confirm the address and gateway share the same /24 before handing it to the user.",
          quiz: [
            {
              id: "ipv4-addressing-q1",
              prompt: "Which is a private IPv4 address range?",
              choices: [
                { id: "a", text: "8.8.8.0/24" },
                { id: "b", text: "192.168.50.0/24" },
                { id: "c", text: "203.0.113.0/24" },
                { id: "d", text: "11.0.0.0/8" },
              ],
              correctChoiceId: "b",
              explanation: "192.168.0.0/16 is one of the RFC 1918 private address blocks.",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ipv4-addressing-q2",
              prompt: "How many bits are in an IPv4 address?",
              choices: [
                { id: "a", text: "16" },
                { id: "b", text: "32" },
                { id: "c", text: "64" },
                { id: "d", text: "128" },
              ],
              correctChoiceId: "b",
              explanation: "IPv4 uses 32-bit addresses, typically shown as four octets.",
              objectiveId: "CCNA-1.8",
              difficulty: "easy",
            },
            {
              id: "ipv4-addressing-q3",
              prompt: "What is 127.0.0.1 used for?",
              choices: [
                { id: "a", text: "Default gateway" },
                { id: "b", text: "Loopback testing" },
                { id: "c", text: "Broadcast" },
                { id: "d", text: "DNS server" },
              ],
              correctChoiceId: "b",
              explanation: "127.0.0.1 is the standard loopback address for testing the local TCP/IP stack.",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ipv4-addressing-q4",
              prompt: "A /24 subnet mask in dotted decimal is:",
              choices: [
                { id: "a", text: "255.255.0.0" },
                { id: "b", text: "255.255.255.0" },
                { id: "c", text: "255.0.0.0" },
                { id: "d", text: "255.255.255.252" },
              ],
              correctChoiceId: "b",
              explanation: "/24 means 24 network bits: 255.255.255.0 — three octets locked as network (255), one octet for hosts (0).",
              objectiveId: "CCNA-1.8",
              difficulty: "easy",
            },
            {
              id: "ipv4-addressing-q5",
              prompt: "What address range appears when DHCP fails on Windows?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "169.254.0.0/16" },
                { id: "c", text: "224.0.0.0/4" },
                { id: "d", text: "192.0.2.0/24" },
              ],
              correctChoiceId: "b",
              explanation: "APIPA assigns addresses from 169.254.0.0/16 automatically.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
            {
              id: "ipv4-addressing-q6",
              prompt: "A host has IP 192.168.1.50/24. Which default gateway can it use?",
              choices: [
                { id: "a", text: "192.168.1.1" },
                { id: "b", text: "10.0.0.1" },
                { id: "c", text: "192.168.2.1" },
                { id: "d", text: "172.16.5.1" },
              ],
              correctChoiceId: "a",
              explanation: "The default gateway must be on the same subnet. 192.168.1.1 shares the /24 network with 192.168.1.50.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
            {
              id: "ipv4-addressing-q7",
              prompt: "Which is a valid IPv4 address?",
              choices: [
                { id: "a", text: "192.168.1.256" },
                { id: "b", text: "10.0.5.8" },
                { id: "c", text: "300.1.1.1" },
                { id: "d", text: "192.168.1" },
              ],
              correctChoiceId: "b",
              explanation: "10.0.5.8 is valid — four octets, each 0–255.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "ipv4-addressing-f1",
              front: "RFC 1918 private IPv4 ranges?",
              back: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
            },
            {
              id: "ipv4-addressing-f2",
              front: "What does a /24 prefix mean?",
              back: "24 network bits, mask 255.255.255.0 — host vs network split taught in subnetting",
            },
            {
              id: "ipv4-addressing-f3",
              front: "Purpose of default gateway?",
              back: "Router IP on the local subnet used to forward traffic to remote networks",
            },
            {
              id: "ipv4-addressing-f4",
              front: "/24 mask in dotted decimal?",
              back: "255.255.255.0",
            },
            {
              id: "ipv4-addressing-f4b",
              front: "172.16.0.0/12 is:",
              back: "Private RFC 1918 range",
            },
            {
              id: "ipv4-addressing-f4c",
              front: "Purpose of default gateway?",
              back: "Router interface for off-subnet traffic",
            },
            {
              id: "ipv4-addressing-f6",
              front: "Is 10.0.5.8 a valid IPv4 address?",
              back: "Yes — four octets, each 0–255",
            },
          ],
          objectives: [
            "CCNA-1.6",
            "CCNA-1.7",
            "CCNA-1.8",
            "CCNA-1.11"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "ipv4-addressing-b4",
              prompt: "127.0.0.1 belongs to:",
              choices: [
                { id: "a", text: "Loopback range" },
                { id: "b", text: "Multicast" },
                { id: "c", text: "Public routable space" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "127.0.0.0/8 is reserved for loopback.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            },
            {
              id: "ipv4-addressing-b6",
              prompt: "Default gateway must be:",
              choices: [
                { id: "a", text: "In the same subnet as the host" },
                { id: "b", text: "A broadcast address" },
                { id: "c", text: "Always .1" },
                { id: "d", text: "A public IP" }
              ],
              correctChoiceId: "a",
              explanation: "Gateway must be reachable on the local subnet.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            },
            {
              id: "ipv4-addressing-b9",
              prompt: "A host receives the IP address 169.254.45.10 automatically. This indicates:",
              choices: [
              { id: "a", text: "The host is using a static IP in the 172.16.0.0 range" },
              { id: "b", text: "The host failed to obtain a DHCP address and self-assigned an APIPA address" },
              { id: "c", text: "The host is on the Internet" },
              { id: "d", text: "The host has a valid loopback address" }
              ],
              correctChoiceId: "b",
              explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. Windows/Linux assign an address from this range when DHCP is unavailable.",
              objectiveId: "CCNA-1.11",
              difficulty: "medium",
            },
            {
              id: "ipv4-addressing-b10",
              prompt: "Which of the following is a valid RFC 1918 private IPv4 address?",
              choices: [
              { id: "a", text: "192.0.2.1" },
              { id: "b", text: "172.32.0.1" },
              { id: "c", text: "192.168.255.254" },
              { id: "d", text: "128.0.0.1" }
              ],
              correctChoiceId: "c",
              explanation: "192.168.255.254 is within the private 192.168.0.0/16 range. 192.0.2.x is documentation-only; 172.32.x.x is public; 128.0.x.x is public.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
            {
              id: "ipv4-addressing-b12",
              prompt: "An IPv4 address is divided into which two logical parts?",
              choices: [
              { id: "a", text: "MAC portion and IP portion" },
              { id: "b", text: "Network portion and host portion" },
              { id: "c", text: "Subnet portion and VLAN portion" },
              { id: "d", text: "Unicast portion and multicast portion" }
              ],
              correctChoiceId: "b",
              explanation: "The subnet mask separates the 32-bit IPv4 address into a network portion (identifying the subnet) and a host portion (identifying the device).",
              objectiveId: "CCNA-1.8",
              difficulty: "easy",
            },
            {
              id: "ipv4-addressing-b15",
              prompt: "The maximum decimal value in any single IPv4 octet is:",
              choices: [
              { id: "a", text: "128" },
              { id: "b", text: "192" },
              { id: "c", text: "254" },
              { id: "d", text: "255" }
              ],
              correctChoiceId: "d",
              explanation: "Each IPv4 octet is 8 bits. The maximum value of 8 set bits is 11111111 binary = 255 decimal.",
              objectiveId: "CCNA-1.6",
              difficulty: "easy",
            }],
          assignments: [
            {
              id: "binary-ip-sim",
              title: "Binary ↔ Decimal IP Converter",
              type: "simulator",
              instructions: "Practice converting between binary and decimal octets using the in-app converter drill until comfortable with exam speed.",
              estimatedMinutes: 15,
              simulatorId: "binary-ip-converter",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["ipv4-addressing"],
              order: 1,
            }
          ],
        
        },
        {
          id: "subnetting",
          name: "Subnetting",
          lesson: {
            title: "IPv4 Subnetting",
            content: `Subnetting divides a larger network into smaller subnetworks to improve organization, security, and routing efficiency. By borrowing host bits for the network portion, you create multiple smaller subnets from one address block.

To subnet, determine how many subnets and hosts you need. The formula for usable hosts is 2^host_bits - 2 (subtract network and broadcast addresses). For example, a /26 subnet has 6 host bits: 2^6 - 2 = 62 usable host addresses. Subnet boundaries must align on powers of 2.

CIDR notation expresses the prefix length after a slash (e.g., 10.1.1.0/24). Variable Length Subnet Masks (VLSM) allow different subnet sizes within the same network design, maximizing address efficiency. Route summarization aggregates multiple subnets into one route advertisement.

Practice converting between binary, decimal, and prefix notation. Identify network address, broadcast address, first usable host, and last usable host for any given IP and mask.

Subnetting divides a network into smaller broadcast domains. Given a requirement like "four equal subnets from 192.168.10.0/24," borrow host bits to create 2^n subnets. Each new subnet has its own network address, usable range, and broadcast.

VLSM allows different mask lengths within the same major network to minimize wasted addresses—critical for point-to-point links using /30 or /31. Always allocate largest subnets first when using VLSM to avoid overlap.

Exam strategy: write out the block size (256 − last octet of mask for /24-style problems), list subnet boundaries, and verify host ranges. Double-check that network and broadcast addresses are excluded from assignable hosts.`,
            experience: SUBNETTING_EXPERIENCE,
          },
          keyFacts: [
            "Exam strategy: prefix → block size → which block? → network → broadcast → hosts",
            "Usable hosts = 2^host_bits − 2 (exclude network and broadcast) for /24–/30",
            "Block size in last octet = 256 − subnet octet value (e.g., /26 → 256 − 192 = 64)",
            "Network address has all host bits 0; broadcast has all host bits 1",
            "VLSM allocates different mask lengths — largest subnets first to avoid overlap",
            "/22–/23 cross-octet and /31–/32 have different rules — deferred to later topics",
          ],
          lightbulbMoment: "Find the block first — everything else comes from the block.",
          guidedExample: {
            title: "Subnet 192.168.10.0/24 into Four Equal /26 Networks",
            steps: [
              "Identify the requirement: four equal subnets from a /24 means borrowing 2 host bits (2^2 = 4), yielding /26.",
              "Calculate block size in the fourth octet: 256 - 192 (subnet mask) = 64, so subnet boundaries are .0, .64, .128, .192.",
              "List each subnet with network, usable range, and broadcast for all four /26 blocks.",
              "Verify usable hosts per subnet: 6 host bits gives 2^6 - 2 = 62 usable addresses.",
              "Assign gateways as the first usable host on each subnet and map to departments.",
              "Confirm no overlap and that all subnets fit within the original 192.168.10.0/24 block.",
            ],
          },
          commonMistakes: [
            "Forgetting to subtract 2 for network and broadcast when calculating usable hosts",
            "Placing subnet boundaries on invalid values instead of power-of-2 block sizes",
            "Allocating VLSM subnets smallest-first, causing overlaps with larger subnets",
            "Confusing total addresses with usable hosts when the question specifies assignable IPs",
            "Including network or broadcast addresses when assigning host IPs",
          ],
          examTraps: [
            "Questions asking for total addresses vs usable hosts—read carefully for assignable or usable",
            "Trick answers that give the broadcast address when first or last usable host is requested",
            "VLSM problems where a smaller prefix wastes space while minimum-hosts questions expect a tighter mask",
            "Cross-octet subnetting (/22, /23) where students only calculate in the fourth octet",
            "Subnet ID vs network address confusion on multi-subnet /26 and /27 problems",
          ],
          realWorldScenario: "Your company opens a branch with four departments on 192.168.10.0/24. You subnet into four equal /26 blocks using VLSM — largest needs first — document each range for DHCP, assign gateways at .1 on each LAN, and verify no overlap before rollout.",
          estimatedStudyMinutes: 45,
          difficulty: "hard",
          prerequisites: ["ipv4-addressing"],
          quiz: [
            {
              id: "subnetting-q1",
              prompt: "How many usable host addresses in a /26 subnet?",
              choices: [
                { id: "a", text: "30" },
                { id: "b", text: "62" },
                { id: "c", text: "126" },
                { id: "d", text: "254" },
              ],
              correctChoiceId: "b",
              explanation:
                "/26 leaves 6 host bits (32 − 26 = 6). 2^6 = 64 total addresses in each block. Two are reserved: network (all host bits 0) and broadcast (all host bits 1). Usable hosts = 64 − 2 = 62.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-q2",
              prompt: "What is the broadcast address for 192.168.10.0/24?",
              choices: [
                { id: "a", text: "192.168.10.0" },
                { id: "b", text: "192.168.10.1" },
                { id: "c", text: "192.168.10.254" },
                { id: "d", text: "192.168.10.255" },
              ],
              correctChoiceId: "d",
              explanation: "In a /24, the last address .255 is the broadcast.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-q3",
              prompt: "VLSM allows:",
              choices: [
                { id: "a", text: "Only one mask size per network" },
                { id: "b", text: "Different subnet mask lengths in the same design" },
                { id: "c", text: "IPv6 only" },
                { id: "d", text: "Automatic DHCP assignment" },
              ],
              correctChoiceId: "b",
              explanation: "Variable Length Subnet Masks enable efficient use of address space with mixed prefix lengths.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-q4",
              prompt: "A /28 subnet has how many total IP addresses?",
              choices: [
                { id: "a", text: "8" },
                { id: "b", text: "16" },
                { id: "c", text: "32" },
                { id: "d", text: "64" },
              ],
              correctChoiceId: "b",
              explanation:
                "/28 leaves 4 host bits (32 − 28 = 4). Total addresses = 2^4 = 16 (network through broadcast). This question asks for total addresses, not usable hosts.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-q5",
              prompt: "The network address always has host bits set to:",
              choices: [
                { id: "a", text: "All 1s" },
                { id: "b", text: "All 0s" },
                { id: "c", text: "Alternating" },
                { id: "d", text: "Random" },
              ],
              correctChoiceId: "b",
              explanation: "The network address is the lowest address with all host bits as 0.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-q6",
              prompt: "192.168.1.90/26 — which range in the last octet contains .90?",
              choices: [
                { id: "a", text: "0–63" },
                { id: "b", text: "64–127" },
                { id: "c", text: "128–191" },
                { id: "d", text: "192–255" },
              ],
              correctChoiceId: "b",
              explanation:
                "/26 means 26 network bits, so 6 host bits remain (32 − 26). Those 6 bits make block size 2^6 = 64. Last-octet blocks therefore start at 0, 64, 128, 192. .90 is ≥ 64 and < 128, so it belongs in 64–127.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-q7",
              prompt: "192.168.1.45/27 — which range in the last octet contains .45?",
              choices: [
                { id: "a", text: "0–31" },
                { id: "b", text: "32–63" },
                { id: "c", text: "64–95" },
                { id: "d", text: "96–127" },
              ],
              correctChoiceId: "b",
              explanation:
                "/27 leaves 5 host bits (32 − 27 = 5). Block size = 2^5 = 32. Last-octet blocks start at 0, 32, 64, 96…. .45 is ≥ 32 and < 64, so it belongs in 32–63.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-q8",
              prompt: "192.168.1.200/28 — which range in the last octet contains .200?",
              choices: [
                { id: "a", text: "176–191" },
                { id: "b", text: "192–207" },
                { id: "c", text: "208–223" },
                { id: "d", text: "224–239" },
              ],
              correctChoiceId: "b",
              explanation:
                "/28 leaves 4 host bits (32 − 28 = 4). Block size = 2^4 = 16. Last-octet blocks start at 0, 16, 32… 176, 192, 208…. .200 is ≥ 192 and < 208, so it belongs in 192–207.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "subnetting-f1",
              front: "Usable hosts formula?",
              back: "2^host_bits - 2",
            },
            {
              id: "subnetting-f2",
              front: "/26 usable hosts?",
              back: "62 usable addresses (64 total minus network and broadcast)",
            },
            {
              id: "subnetting-f3",
              front: "What is VLSM?",
              back: "Variable Length Subnet Masks — using different prefix lengths within one network design",
            },
            {
              id: "subnetting-f4",
              front: "Borrow 2 host bits from /24 creates:",
              back: "4 subnets (/26)",
            },
            {
              id: "subnetting-f4b",
              front: "Block size for /26 in fourth octet?",
              back: "64",
            },
            {
              id: "subnetting-f4c",
              front: "VLSM benefit?",
              back: "Different mask sizes to reduce wasted IPs",
            }
          ],
          objectives: [
            "CCNA-1.9",
            "CCNA-1.10"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "case-study"],
          questionBank: [
            {
              id: "subnetting-b1",
              prompt: "192.168.1.0/26 network address of 3rd subnet?",
              choices: [
                { id: "a", text: "192.168.1.128" },
                { id: "b", text: "192.168.1.64" },
                { id: "c", text: "192.168.1.192" },
                { id: "d", text: "192.168.1.0" }
              ],
              correctChoiceId: "a",
              explanation:
                "/26 block size is 64, so subnets in the last octet are .0, .64, .128, .192. Count: 1st=.0, 2nd=.64, 3rd=.128.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b2",
              prompt: "How many /28 subnets in a /24?",
              choices: [
                { id: "a", text: "16" },
                { id: "b", text: "8" },
                { id: "c", text: "4" },
                { id: "d", text: "32" }
              ],
              correctChoiceId: "a",
              explanation: "Borrow 4 bits → 2^4 = 16 subnets.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b3",
              prompt: "First usable host in 10.1.1.0/30?",
              choices: [
                { id: "a", text: "10.1.1.0" },
                { id: "b", text: "10.1.1.1" },
                { id: "c", text: "10.1.1.2" },
                { id: "d", text: "10.1.1.3" }
              ],
              correctChoiceId: "b",
              explanation: ".0 is network; .1 is first usable.",
              objectiveId: "CCNA-1.10",
              difficulty: "hard",
            },
            {
              id: "subnetting-b4",
              prompt: "VLSM stands for:",
              choices: [
                { id: "a", text: "Virtual LAN Subnet Mask" },
                { id: "b", text: "Variable Length Subnet Mask" },
                { id: "c", text: "Verified Link State Mask" },
                { id: "d", text: "Vector Link Subnet Method" }
              ],
              correctChoiceId: "b",
              explanation: "VLSM uses different prefix lengths in one design.",
              objectiveId: "CCNA-1.9",
              difficulty: "hard",
            },
            {
              id: "subnetting-b6",
              prompt: "Minimum subnet for 2 usable hosts (traditional)?",
              choices: [
                { id: "a", text: "/30" },
                { id: "b", text: "/24" },
                { id: "c", text: "/16" },
                { id: "d", text: "/8" }
              ],
              correctChoiceId: "a",
              explanation: "/30 provides 2 usable host addresses.",
              objectiveId: "CCNA-1.9",
              difficulty: "hard",
            },
            {
              id: "subnetting-b7",
              prompt: "How many usable hosts in a /27 subnet?",
              choices: [
                { id: "a", text: "30" },
                { id: "b", text: "32" },
                { id: "c", text: "62" },
                { id: "d", text: "126" }
              ],
              correctChoiceId: "a",
              explanation: "/27 leaves 5 host bits: 2^5 - 2 = 30 usable addresses.",
              objectiveId: "CCNA-1.10",
              difficulty: "hard",
            },
            {
              id: "subnetting-b8",
              prompt: "Which mask corresponds to a /25 prefix?",
              choices: [
                { id: "a", text: "255.255.255.128" },
                { id: "b", text: "255.255.255.192" },
                { id: "c", text: "255.255.255.224" },
                { id: "d", text: "255.255.255.0" }
              ],
              correctChoiceId: "a",
              explanation: "/25 borrows 1 bit from the fourth octet: 128 decimal = 255.255.255.128.",
              objectiveId: "CCNA-1.9",
              difficulty: "hard",
            }
          ,
            {
              id: "subnetting-b9",
              prompt: "What is the network address for the host 192.168.10.45/29?",
              choices: [
              { id: "a", text: "192.168.10.32" },
              { id: "b", text: "192.168.10.40" },
              { id: "c", text: "192.168.10.48" },
              { id: "d", text: "192.168.10.0" }
              ],
              correctChoiceId: "b",
              explanation: "/29 has a block size of 8. Subnets: .0, .8, .16, .24, .32, .40, .48... The host .45 falls in the .40 block, so the network address is 192.168.10.40.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b10",
              prompt: "What is the broadcast address for 192.168.10.40/29?",
              choices: [
              { id: "a", text: "192.168.10.47" },
              { id: "b", text: "192.168.10.48" },
              { id: "c", text: "192.168.10.46" },
              { id: "d", text: "192.168.10.255" }
              ],
              correctChoiceId: "a",
              explanation: "/29 block size is 8. Starting at .40, the subnet range is .40–.47. The last address (.47) is the broadcast.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b11",
              prompt: "What is the first usable host address in the 192.168.10.40/29 subnet?",
              choices: [
              { id: "a", text: "192.168.10.39" },
              { id: "b", text: "192.168.10.40" },
              { id: "c", text: "192.168.10.41" },
              { id: "d", text: "192.168.10.42" }
              ],
              correctChoiceId: "c",
              explanation: "The network address is .40 (reserved). The first usable host is .41.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b12",
              prompt: "How many usable host addresses exist in a /29 subnet?",
              choices: [
              { id: "a", text: "4" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "14" }
              ],
              correctChoiceId: "b",
              explanation: "/29 leaves 3 host bits: 2^3 = 8 total addresses minus network and broadcast = 6 usable hosts.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-b13",
              prompt: "What subnet mask in dotted decimal corresponds to a /29 prefix?",
              choices: [
              { id: "a", text: "255.255.255.240" },
              { id: "b", text: "255.255.255.248" },
              { id: "c", text: "255.255.255.252" },
              { id: "d", text: "255.255.255.224" }
              ],
              correctChoiceId: "b",
              explanation: "/29 has 29 network bits. The last octet has 5 bits set: 11111000 = 248. So the mask is 255.255.255.248.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-b14",
              prompt: "What is the network address for the host 10.0.0.130/27?",
              choices: [
              { id: "a", text: "10.0.0.96" },
              { id: "b", text: "10.0.0.128" },
              { id: "c", text: "10.0.0.160" },
              { id: "d", text: "10.0.0.0" }
              ],
              correctChoiceId: "b",
              explanation: "/27 has a block size of 32. Subnets in the last octet: .0, .32, .64, .96, .128, .160... The host .130 falls in the .128 block.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b15",
              prompt: "What is the broadcast address for 10.0.0.128/27?",
              choices: [
              { id: "a", text: "10.0.0.159" },
              { id: "b", text: "10.0.0.160" },
              { id: "c", text: "10.0.0.255" },
              { id: "d", text: "10.0.0.158" }
              ],
              correctChoiceId: "a",
              explanation: "/27 block size is 32. The subnet .128 spans .128–.159. Broadcast is .159.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b16",
              prompt: "How many /27 subnets can be created from a single /24 network?",
              choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "16" },
              { id: "d", text: "32" }
              ],
              correctChoiceId: "b",
              explanation: "Moving from /24 to /27 borrows 3 bits: 2^3 = 8 subnets, each with 30 usable hosts.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b21",
              prompt: "In VLSM design, what is the smallest subnet that accommodates exactly 50 hosts?",
              choices: [
              { id: "a", text: "/24 — 254 usable hosts" },
              { id: "b", text: "/26 — 62 usable hosts" },
              { id: "c", text: "/27 — 30 usable hosts" },
              { id: "d", text: "/25 — 126 usable hosts" }
              ],
              correctChoiceId: "b",
              explanation: "/27 gives only 30 usable hosts — too small. /26 gives 2^6 - 2 = 62 usable hosts, which is the smallest prefix that fits 50 hosts.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b25",
              prompt: "What is the dotted-decimal mask for a /28 prefix?",
              choices: [
              { id: "a", text: "255.255.255.224" },
              { id: "b", text: "255.255.255.240" },
              { id: "c", text: "255.255.255.248" },
              { id: "d", text: "255.255.255.252" }
              ],
              correctChoiceId: "b",
              explanation: "/28 has 28 network bits. The fourth octet has 4 bits set: 11110000 = 240. Mask = 255.255.255.240.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-b26",
              prompt: "How many usable host addresses are in a /28 subnet?",
              choices: [
              { id: "a", text: "14" },
              { id: "b", text: "16" },
              { id: "c", text: "30" },
              { id: "d", text: "6" }
              ],
              correctChoiceId: "a",
              explanation: "/28 leaves 4 host bits: 2^4 = 16 total minus 2 = 14 usable hosts.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-b27",
              prompt: "What is the network address for host 192.168.100.200/28?",
              choices: [
              { id: "a", text: "192.168.100.192" },
              { id: "b", text: "192.168.100.208" },
              { id: "c", text: "192.168.100.196" },
              { id: "d", text: "192.168.100.176" }
              ],
              correctChoiceId: "a",
              explanation: "/28 block size is 16. Subnets in the last octet: .0, .16, .32... .176, .192, .208. Host .200 falls in the .192 block.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b28",
              prompt: "What is the broadcast address for 192.168.100.192/28?",
              choices: [
              { id: "a", text: "192.168.100.200" },
              { id: "b", text: "192.168.100.207" },
              { id: "c", text: "192.168.100.208" },
              { id: "d", text: "192.168.100.255" }
              ],
              correctChoiceId: "b",
              explanation: "/28 block size is 16. The .192 subnet spans .192–.207. Broadcast is .207.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b29",
              prompt: "How many /30 subnets can be carved from a single /27 network?",
              choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "16" },
              { id: "d", text: "2" }
              ],
              correctChoiceId: "b",
              explanation: "Going from /27 to /30 borrows 3 more bits: 2^3 = 8 /30 subnets per /27.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b30",
              prompt: "Which of the following IP addresses is a valid usable host in the 10.5.0.64/26 subnet?",
              choices: [
              { id: "a", text: "10.5.0.64" },
              { id: "b", text: "10.5.0.127" },
              { id: "c", text: "10.5.0.100" },
              { id: "d", text: "10.5.0.128" }
              ],
              correctChoiceId: "c",
              explanation: "/26 block size 64: subnet is 10.5.0.64 (network) to 10.5.0.127 (broadcast). Usable range: .65–.126. Only .100 is a valid usable host.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b31",
              prompt: "In a VLSM design, which prefix is most appropriate for a WAN point-to-point link requiring only 2 usable host addresses?",
              choices: [
              { id: "a", text: "/29" },
              { id: "b", text: "/30" },
              { id: "c", text: "/28" },
              { id: "d", text: "/31" }
              ],
              correctChoiceId: "b",
              explanation: "/30 provides exactly 2 usable hosts (2^2 - 2 = 2), making it the traditional choice for point-to-point WAN links. /31 is also valid (RFC 3021) but /30 is the classic CCNA answer.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b33",
              prompt: "What is the dotted-decimal mask for a /30 prefix?",
              choices: [
              { id: "a", text: "255.255.255.240" },
              { id: "b", text: "255.255.255.248" },
              { id: "c", text: "255.255.255.252" },
              { id: "d", text: "255.255.255.254" }
              ],
              correctChoiceId: "c",
              explanation: "/30 has 30 network bits. The last octet has 6 bits set: 11111100 = 252. Mask = 255.255.255.252.",
              objectiveId: "CCNA-1.9",
              difficulty: "easy",
            },
            {
              id: "subnetting-b36",
              prompt: "How many usable host addresses are in a /30 subnet?",
              choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "0" }
              ],
              correctChoiceId: "a",
              explanation: "/30 leaves 2 host bits: 2^2 = 4 total addresses minus network and broadcast = 2 usable hosts.",
              objectiveId: "CCNA-1.10",
              difficulty: "easy",
            },
            {
              id: "subnetting-b37",
              prompt: "A network administrator needs to subnet for a department of 25 hosts. Which is the smallest subnet prefix that accommodates all hosts?",
              choices: [
              { id: "a", text: "/28 — 14 usable hosts" },
              { id: "b", text: "/27 — 30 usable hosts" },
              { id: "c", text: "/26 — 62 usable hosts" },
              { id: "d", text: "/25 — 126 usable hosts" }
              ],
              correctChoiceId: "b",
              explanation: "/28 gives only 14 usable hosts — not enough. /27 gives 30 usable hosts, which accommodates 25 hosts with room to spare while minimizing wasted addresses.",
              objectiveId: "CCNA-1.9",
              difficulty: "medium",
            },
            {
              id: "subnetting-b38",
              prompt: "What is the network address for host 192.168.1.100/27?",
              choices: [
              { id: "a", text: "192.168.1.64" },
              { id: "b", text: "192.168.1.96" },
              { id: "c", text: "192.168.1.128" },
              { id: "d", text: "192.168.1.80" }
              ],
              correctChoiceId: "b",
              explanation: "/27 block size is 32. Subnets: .0, .32, .64, .96, .128... Host .100 falls in the .96 block. Network address = 192.168.1.96.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b39",
              prompt: "What is the last usable host address in the 192.168.1.96/27 subnet?",
              choices: [
              { id: "a", text: "192.168.1.127" },
              { id: "b", text: "192.168.1.126" },
              { id: "c", text: "192.168.1.128" },
              { id: "d", text: "192.168.1.125" }
              ],
              correctChoiceId: "b",
              explanation: "/27 subnet .96 spans .96–.127. Broadcast is .127. Last usable host is one below broadcast = .126.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            },
            {
              id: "subnetting-b40",
              prompt: "What is the broadcast address for 192.168.1.96/27?",
              choices: [
              { id: "a", text: "192.168.1.126" },
              { id: "b", text: "192.168.1.127" },
              { id: "c", text: "192.168.1.128" },
              { id: "d", text: "192.168.1.255" }
              ],
              correctChoiceId: "b",
              explanation: "/27 block size 32: the .96 subnet spans .96–.127. The broadcast address is 192.168.1.127.",
              objectiveId: "CCNA-1.10",
              difficulty: "medium",
            }],
          externalResources: [
            {
              id: "packet-tracer",
              name: "Cisco Packet Tracer",
              url: "https://www.netacad.com/cisco-packet-tracer",
              cost: "free",
              platform: "windows",
              installNotes: "Create a free Cisco Networking Academy account to download Packet Tracer.",
            }
          ],
          assignments: [
            {
              id: "packet-tracer-intro",
              title: "Get Started with Packet Tracer",
              type: "external-lab",
              instructions: `Install Packet Tracer before hands-on subnet and routing labs.

1. Open the Bridge Packet Tracer guide (link on this page) — download, UI tour, troubleshooting.
2. Create a free Cisco Networking Academy account and install Packet Tracer.
3. Build a simple topology: one PC + one switch, copper straight-through cable.
4. Set the PC to 192.168.1.10 / 255.255.255.0.
5. PC Desktop → Command Prompt → ping 127.0.0.1.

You will reuse Packet Tracer for subnetting, VLANs, static routes, and OSPF.`,
              estimatedMinutes: 30,
              externalResourceId: "packet-tracer",
              completionCriteria: [
                "Read the Bridge Packet Tracer getting-started guide",
                "Installed and launched Packet Tracer",
                "Built a PC + switch topology with a cable",
                "Ran ping 127.0.0.1 from the PC command prompt",
              ],
              relatedTopicIds: ["subnetting"],
              order: 0,
            },
            {
              id: "subnet-cidr-sim",
              title: "Subnet & CIDR Drill",
              type: "simulator",
              instructions: "Complete the subnet/CIDR drill until you score 80%+. Focus on network/broadcast boundaries and usable host counts.",
              estimatedMinutes: 20,
              simulatorId: "subnet-cidr-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["subnetting"],
              order: 1,
            },
            {
              id: "vlsm-sim",
              title: "VLSM Allocation Drill",
              type: "simulator",
              instructions: "Practice VLSM allocation scenarios in the VLSM drill. Allocate subnets from largest to smallest without overlap.",
              estimatedMinutes: 20,
              simulatorId: "vlsm-drill",
              completionCriteria: [
                "Completed drill",
                "Score 75% or higher"
              ],
              relatedTopicIds: ["subnetting"],
              order: 2,
            },
            {
              id: "subnet-pt-lab",
              title: "Packet Tracer: Subnet a /24 into Four Networks",
              type: "external-lab",
              instructions: "1. Open Packet Tracer and create four LAN segments.\n2. Subnet 192.168.100.0/24 into four equal /26 networks.\n3. Assign PC addresses, masks, and gateways on each segment.\n4. Connect a router with one interface per subnet or use a multilayer switch.\n5. Verify connectivity with ping between at least two subnets.",
              estimatedMinutes: 45,
              externalResourceId: "packet-tracer",
              completionCriteria: [
                "Four subnets documented with network/broadcast ranges",
                "All PCs configured with correct mask and gateway",
                "Successful ping between subnets"
              ],
              relatedTopicIds: ["subnetting"],
              order: 3,
            },
            {
              id: "subnet-vlsm-case-1",
              title: "Case Study: VLSM Branch Office Design",
              type: "case-study",
              instructions: `Scenario: You are given 10.50.0.0/22 for a branch with these requirements:
- Sales LAN: 60 hosts
- Engineering LAN: 30 hosts
- Guest Wi-Fi: 14 hosts
- WAN link to HQ: 2 usable addresses (point-to-point)

1. List subnets from largest to smallest and assign a prefix length to each.
2. Document network address, mask, usable host range, and broadcast for each subnet.
3. Assign a gateway (.1) on each LAN subnet.
4. Verify no overlap and that all subnets fit within 10.50.0.0/22.
5. Write one sentence explaining why VLSM was used instead of equal-size subnets.

Use your lesson notes — no external tools required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Allocated four subnets with correct prefix lengths",
                "Documented network, range, and broadcast for each subnet",
                "Assigned gateways without overlap",
                "Confirmed all subnets fit within 10.50.0.0/22",
                "Explained VLSM benefit in the scenario",
              ],
              relatedTopicIds: ["subnetting"],
              order: 4,
            }
          ],
        
        },
        {
          id: "ip-ranges",
          name: "IP Ranges",
          lesson: {
            title: "Special and Reserved IPv4 Ranges",
            content: `Beyond standard host addressing, several IPv4 ranges serve special purposes that CCNA candidates must recognize instantly. These include private addresses, loopback, link-local, multicast, and reserved documentation ranges.

RFC 1918 private addresses are used internally and require NAT or proxy to reach the Internet. The 127.0.0.0/8 block is reserved for loopback. Link-local 169.254.0.0/16 (APIPA) allows communication on a local segment when no DHCP server responds.

Multicast addresses fall in 224.0.0.0/4 for one-to-many delivery. Reserved ranges like 0.0.0.0/8 should not appear on production hosts. TEST-NET blocks 192.0.2.0/24, 198.51.100.0/24, and 203.0.113.0/24 are for documentation only.

Recognizing these ranges helps you quickly eliminate wrong answers on exams and diagnose misconfigurations.

Special IPv4 ranges appear frequently on exams. Multicast 224.0.0.0–239.255.255.255 delivers one-to-many traffic (e.g., OSPF 224.0.0.5). Reserved and experimental ranges should not appear on production Internet routing tables.

Documentation TEST-NET blocks (192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24) are for examples only. Carrier-grade NAT and RFC 6598 100.64.0.0/10 sit between private and public space for ISP use.

Know which addresses are routable on the public Internet vs usable only internally. NAT translates between private inside and public outside addresses.`,
            experience: IP_RANGES_EXPERIENCE,
          },
          keyFacts: [
            "Private mnemonic: 10 = ALL · 172 = ONLY 16–31 · 192 = ONLY 168 — read octets, not /12 math",
            "172.40.x.x is public — same first octet as private 172.20.x.x is a common exam trap",
            "127.0.0.0/8 = loopback · 169.254.0.0/16 = APIPA (DHCP failed) · 224.0.0.0/4 = multicast",
            "TEST-NET docs only: 192.0.2.0/24 · 198.51.100.0/24 · 203.0.113.0/24 — not for production",
            "Private addresses need NAT at the edge router for Internet access — not the switch",
            "CCNA tests purpose of each range, not legacy class A/B/C labels",
          ],
          lightbulbMoment: "Private addresses work inside; NAT at the router translates for the Internet.",
          guidedExample: {
            title: "Classify five addresses at a glance",
            steps: [
              "10.1.1.1 → private (any 10.x.x.x).",
              "172.20.5.4 → private (172.16–172.31 only).",
              "172.40.1.1 → public trap — not private despite starting with 172.",
              "169.254.10.5 → APIPA — host could not get DHCP.",
              "224.0.0.5 → multicast (OSPF All SPF Routers).",
            ],
          },
          commonMistakes: [
            "Treating all 172.x.x.x as private — only 172.16 through 172.31 count",
            "Confusing link-local APIPA (169.254.x.x) with private RFC 1918 addresses",
            "Using documentation TEST-NET (192.0.2.x) like private 192.168.x in real configs",
            "Assigning loopback (127.x.x.x) to a LAN interface",
            "Expecting NAT on a switch instead of the edge router",
          ],
          examTraps: [
            "172.40.1.1 listed as private because it starts with 172",
            "APIPA automatic assignment when DHCP fails — 169.254.x.x",
            "Multicast OSPF address 224.0.0.5 in special-range questions",
            "192.0.2.1 vs 192.168.1.1 — TEST-NET vs private confusion",
            "Carrier-grade NAT 100.64.0.0/10 distinction from RFC 1918",
          ],
          realWorldScenario: "After a DHCP server outage, laptops show 169.254.x.x addresses and cannot reach the Internet. You restore DHCP first; APIPA only allows local link communication until a lease is obtained.",
          quiz: [
            {
              id: "ip-ranges-q1",
              prompt: "Which range is used for IPv4 multicast?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "127.0.0.0/8" },
                { id: "c", text: "224.0.0.0/4" },
                { id: "d", text: "169.254.0.0/16" },
              ],
              correctChoiceId: "c",
              explanation: "Multicast addresses are in 224.0.0.0/4 (224.0.0.0–239.255.255.255).",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-q2",
              prompt: "169.254.x.x indicates:",
              choices: [
                { id: "a", text: "Public routable address" },
                { id: "b", text: "Link-local/APIPA address" },
                { id: "c", text: "Multicast" },
                { id: "d", text: "Loopback" },
              ],
              correctChoiceId: "b",
              explanation: "169.254.0.0/16 is assigned automatically when DHCP is unavailable.",
              objectiveId: "CCNA-1.11",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-q3",
              prompt: "Which block is designated for documentation examples?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "192.0.2.0/24" },
                { id: "c", text: "172.16.0.0/12" },
                { id: "d", text: "224.0.0.0/4" },
              ],
              correctChoiceId: "b",
              explanation: "192.0.2.0/24 (TEST-NET-1) is reserved for documentation.",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-q4",
              prompt: "Private addresses require what to reach the public Internet?",
              choices: [
                { id: "a", text: "Static routing only" },
                { id: "b", text: "NAT or translation" },
                { id: "c", text: "Multicast" },
                { id: "d", text: "Loopback" },
              ],
              correctChoiceId: "b",
              explanation: "Private RFC 1918 addresses are not globally routable; NAT translates them to public addresses.",
              objectiveId: "CCNA-1.11",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-q5",
              prompt: "127.0.0.1 is an example of:",
              choices: [
                { id: "a", text: "APIPA" },
                { id: "b", text: "Loopback" },
                { id: "c", text: "Broadcast" },
                { id: "d", text: "Default route" },
              ],
              correctChoiceId: "b",
              explanation: "127.0.0.1 is the most common IPv4 loopback address for local testing.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "ip-ranges-f1",
              front: "RFC 1918 private mnemonic?",
              back: "10 = ALL · 172 = ONLY 16–31 · 192 = ONLY 168",
            },
            {
              id: "ip-ranges-f2",
              front: "IPv4 multicast range?",
              back: "224.0.0.0/4 (224.0.0.0 through 239.255.255.255)",
            },
            {
              id: "ip-ranges-f3",
              front: "What is APIPA?",
              back: "Automatic Private IP Addressing — 169.254.0.0/16 assigned when DHCP fails",
            },
            {
              id: "ip-ranges-f4",
              front: "OSPF All SPF Routers multicast?",
              back: "224.0.0.5",
            },
            {
              id: "ip-ranges-f4b",
              front: "TEST-NET-1 block?",
              back: "192.0.2.0/24",
            },
            {
              id: "ip-ranges-f4c",
              front: "169.254.x.x indicates?",
              back: "APIPA — no DHCP lease",
            }
          ],
          objectives: [
            "CCNA-1.7",
            "CCNA-1.11"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "ip-ranges-b1",
              prompt: "Which range is multicast?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "224.0.0.0/4" },
                { id: "c", text: "127.0.0.0/8" },
                { id: "d", text: "169.254.0.0/16" }
              ],
              correctChoiceId: "b",
              explanation: "224.0.0.0/4 is IPv4 multicast.",
              objectiveId: "CCNA-1.11",
              difficulty: "medium",
            },
            {
              id: "ip-ranges-b2",
              prompt: "192.0.2.0/24 is reserved for:",
              choices: [
                { id: "a", text: "Private enterprise use" },
                { id: "b", text: "Documentation and examples" },
                { id: "c", text: "Loopback" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "b",
              explanation: "RFC 5737 documentation block.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            },
            {
              id: "ip-ranges-b3",
              prompt: "172.31.255.255 is:",
              choices: [
                { id: "a", text: "Private address" },
                { id: "b", text: "Public routable" },
                { id: "c", text: "Multicast" },
                { id: "d", text: "Broadcast only" }
              ],
              correctChoiceId: "a",
              explanation: "172.16.0.0/12 is private RFC 1918.",
              objectiveId: "CCNA-1.11",
              difficulty: "hard",
            },
            {
              id: "ip-ranges-b4",
              prompt: "127.255.255.254 is used for:",
              choices: [
                { id: "a", text: "Default gateway" },
                { id: "b", text: "Local loopback testing" },
                { id: "c", text: "DHCP server" },
                { id: "d", text: "DNS anycast" }
              ],
              correctChoiceId: "b",
              explanation: "127.0.0.0/8 is loopback.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            },
            {
              id: "ip-ranges-b5",
              prompt: "Which requires NAT for Internet access?",
              choices: [
                { id: "a", text: "203.0.113.50" },
                { id: "b", text: "10.50.1.10" },
                { id: "c", text: "Both equally" },
                { id: "d", text: "Neither" }
              ],
              correctChoiceId: "b",
              explanation: "10.x is private and needs translation for public Internet.",
              objectiveId: "CCNA-1.11",
              difficulty: "hard",
            },
            {
              id: "ip-ranges-b6",
              prompt: "APIPA address range?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "169.254.0.0/16" },
                { id: "c", text: "224.0.0.0/4" },
                { id: "d", text: "192.168.0.0/16" }
              ],
              correctChoiceId: "b",
              explanation: "169.254.0.0/16 is link-local/APIPA.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            }
          ,
            {
              id: "ip-ranges-b7",
              prompt: "Which RFC 1918 private address block has the largest address space?",
              choices: [
              { id: "a", text: "192.168.0.0/16 — 65,536 addresses" },
              { id: "b", text: "172.16.0.0/12 — 1,048,576 addresses" },
              { id: "c", text: "10.0.0.0/8 — 16,777,216 addresses" },
              { id: "d", text: "169.254.0.0/16 — 65,536 addresses" }
              ],
              correctChoiceId: "c",
              explanation: "10.0.0.0/8 (Class A private) is the largest private block with over 16 million addresses, far exceeding 172.16.0.0/12 (~1M) and 192.168.0.0/16 (~65K).",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-b8",
              prompt: "The private IPv4 range 192.168.0.0/16 was defined by which RFC?",
              choices: [
              { id: "a", text: "RFC 791" },
              { id: "b", text: "RFC 1918" },
              { id: "c", text: "RFC 5737" },
              { id: "d", text: "RFC 3022" }
              ],
              correctChoiceId: "b",
              explanation: "RFC 1918 (Address Allocation for Private Internets) defines the three private IPv4 ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-b9",
              prompt: "A workstation is assigned 169.254.10.5 with no gateway. What is the most likely cause?",
              choices: [
              { id: "a", text: "The workstation has a static IP configured" },
              { id: "b", text: "DHCP server is unreachable and the OS assigned an APIPA address" },
              { id: "c", text: "The workstation is on the Internet" },
              { id: "d", text: "The address is a private 172.16.0.0 range address" }
              ],
              correctChoiceId: "b",
              explanation: "169.254.0.0/16 is the APIPA range. When DHCP fails, Windows and other OSes self-assign an address in this range. No gateway is assigned because APIPA only provides link-local communication.",
              objectiveId: "CCNA-1.11",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-b10",
              prompt: "The 198.51.100.0/24 block is reserved for which purpose?",
              choices: [
              { id: "a", text: "Internet Service Provider backbone routing" },
              { id: "b", text: "Documentation and example use only (RFC 5737)" },
              { id: "c", text: "Carrier-grade NAT" },
              { id: "d", text: "Experimental research" }
              ],
              correctChoiceId: "b",
              explanation: "RFC 5737 defines three documentation prefixes: 192.0.2.0/24 (TEST-NET-1), 198.51.100.0/24 (TEST-NET-2), and 203.0.113.0/24 (TEST-NET-3). These appear in RFCs and textbooks but must never be routed.",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
            {
              id: "ip-ranges-b15",
              prompt: "The 172.16.0.0/12 private range spans which address range?",
              choices: [
              { id: "a", text: "172.16.0.0 – 172.16.255.255" },
              { id: "b", text: "172.0.0.0 – 172.255.255.255" },
              { id: "c", text: "172.16.0.0 – 172.31.255.255" },
              { id: "d", text: "172.16.0.0 – 172.24.255.255" }
              ],
              correctChoiceId: "c",
              explanation: "172.16.0.0/12 covers 172.16.0.0 through 172.31.255.255 (the /12 mask borrows 4 bits into the second octet: values 16–31).",
              objectiveId: "CCNA-1.7",
              difficulty: "medium",
            },
            {
              id: "ip-ranges-b17",
              prompt: "203.0.113.0/24 (TEST-NET-3) is designated by which RFC and for what purpose?",
              choices: [
              { id: "a", text: "RFC 1918 — private enterprise networking" },
              { id: "b", text: "RFC 5737 — documentation and example use" },
              { id: "c", text: "RFC 4291 — IPv6 addressing" },
              { id: "d", text: "RFC 3927 — APIPA link-local" }
              ],
              correctChoiceId: "b",
              explanation: "RFC 5737 reserves 192.0.2.0/24, 198.51.100.0/24, and 203.0.113.0/24 specifically for documentation examples and MUST NOT be used in live networks.",
              objectiveId: "CCNA-1.7",
              difficulty: "hard",
            },
            {
              id: "ip-ranges-b18",
              prompt: "How many distinct private IPv4 address ranges are defined by RFC 1918?",
              choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" }
              ],
              correctChoiceId: "c",
              explanation: "RFC 1918 defines three private ranges: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), and 192.168.0.0/16 (Class C).",
              objectiveId: "CCNA-1.7",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-b19",
              prompt: "What is the directed broadcast address for the 192.168.5.0/24 network?",
              choices: [
              { id: "a", text: "192.168.5.0" },
              { id: "b", text: "192.168.5.254" },
              { id: "c", text: "192.168.5.255" },
              { id: "d", text: "255.255.255.255" }
              ],
              correctChoiceId: "c",
              explanation: "The directed broadcast for 192.168.5.0/24 is 192.168.5.255 — all host bits set to 1. This targets all hosts in that specific subnet.",
              objectiveId: "CCNA-1.11",
              difficulty: "easy",
            },
            {
              id: "ip-ranges-b20",
              prompt: "Which statement about the 127.0.0.0/8 range is correct?",
              choices: [
              { id: "a", text: "It is a valid private range for internal LANs" },
              { id: "b", text: "It is reserved for loopback; packets sent here never leave the host" },
              { id: "c", text: "It is used for APIPA self-assignment" },
              { id: "d", text: "It is the multicast range" }
              ],
              correctChoiceId: "b",
              explanation: "127.0.0.0/8 is the loopback range (RFC 990). Packets destined to any address in this range are processed locally by the TCP/IP stack and never transmitted on any network interface.",
              objectiveId: "CCNA-1.11",
              difficulty: "easy",
            }],
          assignments: [
            {
              id: "ip-range-sim",
              title: "IPv4 Range Classifier Drill",
              type: "simulator",
              instructions: "Classify addresses as private, public, loopback, APIPA, multicast, or TEST-NET. Focus on the 172.16–31 rule and 172.40 trap until you score 80%+.",
              estimatedMinutes: 12,
              simulatorId: "ip-range-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher",
              ],
              relatedTopicIds: ["ip-ranges"],
              order: 1,
            },
          ],

        },
        {
          id: "ipv6-basics",
          name: "IPv6 Basics",
          lesson: {
            title: "Introduction to IPv6",
            content: `IPv6 uses 128-bit addresses written as eight groups of four hexadecimal digits separated by colons, such as 2001:db8::1. Double colons represent consecutive groups of zeros, used only once per address. IPv6 solves IPv4 exhaustion with a vastly larger address space and simplifies header format.

IPv6 address types include unicast, multicast, and anycast. There is no IPv6 broadcast; multicast replaces it. Global unicast addresses (2000::/3) are routable on the Internet. Link-local addresses (fe80::/10) are automatically configured and used for neighbor discovery on local segments.

Stateless Address Autoconfiguration (SLAAC) allows hosts to derive addresses from router advertisements without a DHCP server. DHCPv6 can still assign addresses and options. IPv6 neighbor discovery replaces ARP, using ICMPv6 messages.

Transition mechanisms include dual-stack, tunneling, and translation. CCNA focuses on addressing format, prefix lengths, and basic configuration concepts.

IPv6 addresses are 128 bits written as eight hextets separated by colons. Leading zeros in a hextet can be omitted, and one consecutive zero group can be replaced with :: (only once per address). Loopback is ::1; unspecified is ::.

Address types: Global unicast (2000::/3), unique local (fc00::/7), link-local fe80::/10 (never routed beyond local link), and multicast ff00::/8. IPv6 typically does not use broadcast; multicast replaces ARP via Neighbor Discovery (NDP).

SLAAC and DHCPv6 assign addresses. EUI-64 can derive interface IDs from MAC. Know how to compress and expand addresses quickly for exam items.`,
            experience: IPV6_BASICS_EXPERIENCE,
          },
          keyFacts: [
            "IPv6 addresses are 128 bits, written in eight hexadecimal groups separated by colons",
            "Leading zeros in a group can be dropped; use :: once to compress the longest zero run",
            "Standard LAN prefix is /64 — first 64 bits network, last 64 bits interface ID",
            "Global unicast 2000::/3 · link-local fe80::/10 · unique local fc00::/7 · multicast ff00::/8",
            "IPv6 has no broadcast; Neighbor Discovery (NDP) replaces ARP for address resolution",
            "SLAAC auto-configures addresses; DHCPv6 and dual-stack with IPv4 are common in production",
          ],
          lightbulbMoment: "IPv6 wasn't created just because addresses ran out — it simplifies how the Internet grows.",
          guidedExample: {
            title: "Compress 2001:0db8:0000:0000:0000:ff00:0042:8329",
            steps: [
              "Drop leading zeros in each group: 2001:db8:0:0:0:ff00:42:8329.",
              "Find the longest run of zero groups — here four zeros in the middle.",
              "Replace that run with :: once: 2001:db8::ff00:42:8329.",
              "Verify only one :: appears and each group has at most four hex digits.",
            ],
          },
          commonMistakes: [
            "Using more than one :: double-colon compression in a single address",
            "Dropping zeros inside a group (0042 → 42 is OK; 0db8 → db8 is OK; do not shorten db8 to b8 incorrectly)",
            "Forgetting link-local fe80::/10 is never routed beyond the local link",
            "Assuming IPv6 removes DHCP entirely — SLAAC and DHCPv6 coexist",
            "Confusing solicited-node multicast with all-nodes multicast",
          ],
          examTraps: [
            "Valid vs invalid compressed IPv6 notation",
            "Link-local fe80:: scope — not routable off the local segment",
            "Global unicast 2000::/3 vs unique local fc00::/7",
            "ICMPv6 neighbor discovery replacing ARP",
            "EUI-64 interface ID derivation from MAC",
          ],
          realWorldScenario: "Your home router advertises both 192.168.1.x and a global IPv6 /64 prefix — dual-stack. The PC gets IPv4 via DHCP and may get IPv6 via SLAAC at the same time.",
          quiz: [
            {
              id: "ipv6-basics-q1",
              prompt: "How many bits is an IPv6 address?",
              choices: [
                { id: "a", text: "32" },
                { id: "b", text: "64" },
                { id: "c", text: "96" },
                { id: "d", text: "128" },
              ],
              correctChoiceId: "d",
              explanation: "IPv6 addresses are 128 bits long.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-q2",
              prompt: "Which prefix identifies IPv6 link-local addresses?",
              choices: [
                { id: "a", text: "2000::/3" },
                { id: "b", text: "fe80::/10" },
                { id: "c", text: "fc00::/7" },
                { id: "d", text: "ff00::/8" },
              ],
              correctChoiceId: "b",
              explanation: "fe80::/10 is the link-local range.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-q3",
              prompt: "IPv6 replaces ARP with:",
              choices: [
                { id: "a", text: "DNS" },
                { id: "b", text: "ICMPv6 Neighbor Discovery" },
                { id: "c", text: "DHCP" },
                { id: "d", text: "TCP" },
              ],
              correctChoiceId: "b",
              explanation: "Neighbor Discovery Protocol uses ICMPv6 to resolve layer 2 addresses.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-q4",
              prompt: "What does :: mean in an IPv6 address?",
              choices: [
                { id: "a", text: "Invalid syntax" },
                { id: "b", text: "Compression of consecutive zero groups" },
                { id: "c", text: "Broadcast" },
                { id: "d", text: "Multicast" },
              ],
              correctChoiceId: "b",
              explanation: "Double colon replaces one contiguous sequence of all-zero 16-bit groups.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-q5",
              prompt: "SLAAC stands for:",
              choices: [
                { id: "a", text: "Secure Link Access Control" },
                { id: "b", text: "Stateless Address Autoconfiguration" },
                { id: "c", text: "Static Local Address Assignment" },
                { id: "d", text: "Subnet Level Access Control" },
              ],
              correctChoiceId: "b",
              explanation: "SLAAC lets hosts self-configure addresses from router advertisements.",
              objectiveId: "CCNA-1.12",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "ipv6-basics-f1",
              front: "IPv6 address length?",
              back: "128 bits, eight hextets in hex notation",
            },
            {
              id: "ipv6-basics-f2",
              front: "IPv6 link-local prefix?",
              back: "fe80::/10",
            },
            {
              id: "ipv6-basics-f3",
              front: "IPv6 vs IPv4 broadcast?",
              back: "IPv6 has no broadcast; multicast addresses (ff00::/8) are used instead",
            },
            {
              id: "ipv6-basics-f4",
              front: "IPv6 loopback?",
              back: "::1",
            },
            {
              id: "ipv6-basics-f4b",
              front: "Link-local prefix?",
              back: "fe80::/10",
            },
            {
              id: "ipv6-basics-f4c",
              front: "IPv6 replaces ARP with?",
              back: "Neighbor Discovery (NDP)",
            }
          ],
          objectives: [
            "CCNA-1.12",
            "CCNA-1.13"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "ipv6-basics-b1",
              prompt: "Full form of ::1?",
              choices: [
                { id: "a", text: "0:0:0:0:0:0:0:1" },
                { id: "b", text: "ff:ff:ff:ff:ff:ff" },
                { id: "c", text: "fe80::1 only" },
                { id: "d", text: "127.0.0.1" }
              ],
              correctChoiceId: "a",
              explanation: "::1 expands to all zeros except last hextet 1.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "ipv6-basics-b2",
              prompt: "Unique local address range?",
              choices: [
                { id: "a", text: "2000::/3" },
                { id: "b", text: "fc00::/7" },
                { id: "c", text: "fe80::/10" },
                { id: "d", text: "ff00::/8" }
              ],
              correctChoiceId: "b",
              explanation: "fc00::/7 is unique local (similar to private IPv4).",
              objectiveId: "CCNA-1.12",
              difficulty: "hard",
            },
            {
              id: "ipv6-basics-b3",
              prompt: "fe80:: addresses are:",
              choices: [
                { id: "a", text: "Globally routable" },
                { id: "b", text: "Link-local only" },
                { id: "c", text: "Multicast" },
                { id: "d", text: "Deprecated" }
              ],
              correctChoiceId: "b",
              explanation: "fe80::/10 never leaves the local link.",
              objectiveId: "CCNA-1.13",
              difficulty: "hard",
            },
            {
              id: "ipv6-basics-b4",
              prompt: "How many :: compressions allowed per address?",
              choices: [
                { id: "a", text: "One" },
                { id: "b", text: "Two" },
                { id: "c", text: "Unlimited" },
                { id: "d", text: "None" }
              ],
              correctChoiceId: "a",
              explanation: "Only one :: sequence per address.",
              objectiveId: "CCNA-1.12",
              difficulty: "hard",
            },
            {
              id: "ipv6-basics-b6",
              prompt: "NDP replaces which IPv4 protocol pair?",
              choices: [
                { id: "a", text: "TCP/IP" },
                { id: "b", text: "ARP and parts of ICMP" },
                { id: "c", text: "DNS" },
                { id: "d", text: "DHCP only" }
              ],
              correctChoiceId: "b",
              explanation: "Neighbor Discovery handles reachability and MAC resolution.",
              objectiveId: "CCNA-1.12",
              difficulty: "hard",
            }
          ,
            {
              id: "ipv6-basics-b7",
              prompt: "Global unicast IPv6 addresses are allocated from which prefix?",
              choices: [
              { id: "a", text: "fe80::/10" },
              { id: "b", text: "fc00::/7" },
              { id: "c", text: "2000::/3" },
              { id: "d", text: "ff00::/8" }
              ],
              correctChoiceId: "c",
              explanation: "IANA allocates global unicast addresses from the 2000::/3 range (all addresses beginning with binary 001), which includes 2001::/32, 2002::/16, etc.",
              objectiveId: "CCNA-1.12",
              difficulty: "medium",
            },
            {
              id: "ipv6-basics-b8",
              prompt: "How many bits are in an IPv6 address?",
              choices: [
              { id: "a", text: "32 bits" },
              { id: "b", text: "64 bits" },
              { id: "c", text: "128 bits" },
              { id: "d", text: "256 bits" }
              ],
              correctChoiceId: "c",
              explanation: "IPv6 addresses are 128 bits long (compared to 32-bit IPv4), written as 8 groups of 4 hexadecimal digits separated by colons.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-b10",
              prompt: "IPv6 multicast addresses begin with which prefix?",
              choices: [
              { id: "a", text: "fe80::/10" },
              { id: "b", text: "fc00::/7" },
              { id: "c", text: "2000::/3" },
              { id: "d", text: "ff00::/8" }
              ],
              correctChoiceId: "d",
              explanation: "All IPv6 multicast addresses start with ff (binary 11111111). There is no broadcast in IPv6; multicast replaces it for one-to-many delivery.",
              objectiveId: "CCNA-1.12",
              difficulty: "medium",
            },
            {
              id: "ipv6-basics-b11",
              prompt: "SLAAC (Stateless Address Autoconfiguration) allows a host to:",
              choices: [
              { id: "a", text: "Assign itself an IPv6 address using the network prefix from a Router Advertisement without a DHCPv6 server" },
              { id: "b", text: "Receive an IP address only from a DHCPv6 server" },
              { id: "c", text: "Use an IPv4 address automatically" },
              { id: "d", text: "Compress its IPv6 address using :: notation" }
              ],
              correctChoiceId: "a",
              explanation: "SLAAC (RFC 4862) lets hosts auto-configure a global unicast address by combining the /64 prefix from a Router Advertisement with a self-generated 64-bit interface ID, no DHCPv6 required.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "ipv6-basics-b12",
              prompt: "In IPv6, which protocol replaces ARP for resolving layer-3 addresses to MAC addresses?",
              choices: [
              { id: "a", text: "ICMPv6 Neighbor Discovery Protocol (NDP)" },
              { id: "b", text: "DHCPv6" },
              { id: "c", text: "OSPF" },
              { id: "d", text: "RIPng" }
              ],
              correctChoiceId: "a",
              explanation: "NDP (Neighbor Discovery Protocol), using ICMPv6 messages, replaces ARP in IPv6. Neighbor Solicitation and Neighbor Advertisement messages perform address resolution.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "ipv6-basics-b14",
              prompt: "The IPv6 loopback address ::1 is equivalent to which IPv4 address?",
              choices: [
              { id: "a", text: "0.0.0.0" },
              { id: "b", text: "255.255.255.255" },
              { id: "c", text: "127.0.0.1" },
              { id: "d", text: "192.168.0.1" }
              ],
              correctChoiceId: "c",
              explanation: "IPv6 ::1 (0000...0001) is the loopback address, functionally equivalent to IPv4's 127.0.0.1. Packets sent to ::1 never leave the host's network stack.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-b15",
              prompt: "How many 16-bit hextets (groups) make up a full IPv6 address?",
              choices: [
              { id: "a", text: "4" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "16" }
              ],
              correctChoiceId: "c",
              explanation: "A 128-bit IPv6 address is written as 8 groups of 4 hex digits (8 × 16 bits = 128 bits), separated by colons.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-b16",
              prompt: "A dual-stack host has both an IPv4 and an IPv6 address configured. This means:",
              choices: [
              { id: "a", text: "IPv4 traffic is automatically tunneled inside IPv6" },
              { id: "b", text: "The host can communicate using either IPv4 or IPv6, choosing based on destination" },
              { id: "c", text: "IPv6 is used only for loopback traffic" },
              { id: "d", text: "The host requires two separate network interfaces" }
              ],
              correctChoiceId: "b",
              explanation: "Dual-stack is an IPv6 transition mechanism where a host runs both protocol stacks simultaneously. It selects IPv4 or IPv6 based on the destination address and DNS resolution.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-b17",
              prompt: "In IPv6 address notation, leading zeros within a hextet may be:",
              choices: [
              { id: "a", text: "Never omitted" },
              { id: "b", text: "Omitted (e.g., 0042 can be written as 42)" },
              { id: "c", text: "Replaced with :: only" },
              { id: "d", text: "Replaced with 0000" }
              ],
              correctChoiceId: "b",
              explanation: "Leading zeros within any 16-bit group may be dropped. For example, 2001:0db8:0000:0000:0000:0000:0000:0001 can be shortened to 2001:db8::1.",
              objectiveId: "CCNA-1.12",
              difficulty: "easy",
            },
            {
              id: "ipv6-basics-b19",
              prompt: "Which ICMPv6 message type does a router send to advertise its presence and network prefix to hosts on a link?",
              choices: [
              { id: "a", text: "Neighbor Solicitation" },
              { id: "b", text: "Router Advertisement (RA)" },
              { id: "c", text: "Echo Request" },
              { id: "d", text: "Redirect" }
              ],
              correctChoiceId: "b",
              explanation: "Router Advertisements (ICMPv6 type 134) are sent periodically by routers (and in response to Router Solicitations) to announce the network prefix, default gateway, and other configuration flags for SLAAC.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            }],
          assignments: [
            {
              id: "ipv6-compress-sim",
              title: "IPv6 Address Compression Drill",
              type: "simulator",
              instructions: "Practice expanding and compressing IPv6 addresses in the drill until you can answer exam-style items quickly.",
              estimatedMinutes: 15,
              simulatorId: "ipv6-compress-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["ipv6-basics"],
              order: 1,
            }
          ],
        
        },
        {
          id: "wireless-basics",
          name: "Wireless Basics",
          lesson: {
            title: "802.11 Wireless LAN Fundamentals",
            content: `Wireless LANs use IEEE 802.11 standards to transmit data over radio frequencies instead of copper or fiber. Common standards include 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), and 802.11ax (Wi-Fi 6). The 2.4 GHz band offers better range but more interference; 5 GHz and 6 GHz bands provide more channels and higher throughput.

A wireless network consists of access points (APs) that bridge wireless clients to the wired infrastructure, wireless LAN controllers (WLCs) that manage multiple APs centrally, and client devices with wireless NICs. SSID is the network name clients see when connecting. WPA2 and WPA3 protect wireless traffic from eavesdropping.

Wireless uses half-duplex shared medium access; CSMA/CA reduces collisions because radios cannot transmit and listen simultaneously on the same channel. Channel overlap in 2.4 GHz causes interference and degraded performance.

Site surveys, proper AP placement, and power/channel planning are critical for reliable coverage.

802.11 standards evolve: 802.11n (Wi-Fi 4) uses MIMO and 2.4/5 GHz; 802.11ac (Wi-Fi 5) focuses on 5 GHz; 802.11ax (Wi-Fi 6) improves efficiency with OFDMA. Channels in 2.4 GHz overlap—use 1, 6, and 11 in North America for non-overlapping 20 MHz channels.

Security progressed from WEP (broken) to WPA (TKIP) to WPA2 (AES-CCMP) and WPA3 (SAE, stronger protection). Enterprise deployments use 802.1X with a RADIUS server for authentication. A lightweight AP model uses a wireless LAN controller (WLC) for centralized management.

Signal factors include RSSI, SNR, attenuation through walls, and interference from non-Wi-Fi sources. Site surveys help AP placement.`,
            experience: WIRELESS_BASICS_EXPERIENCE,
          },
          keyFacts: [
            "802.11 = wireless LAN (Wi-Fi); 802.3 = wired Ethernet — both at Layer 1–2",
            "SSID = human-readable network name; BSSID = the AP's radio MAC address",
            "2.4 GHz: channels 1, 6, 11 are non-overlapping in North America — plan like subnet blocks",
            "5 GHz offers more channels and speed; 2.4 GHz offers better range through walls",
            "Shared air + half-duplex → CSMA/CA (listen before talk); wired Ethernet has dedicated links",
            "WEP is broken — deploy WPA2 or WPA3; roaming = same SSID, different BSSID as you move",
          ],
          lightbulbMoment: "Wi-Fi is Ethernet over shared air, not over a dedicated wire.",
          guidedExample: {
            title: "Basement Wi-Fi is slow — troubleshoot Layer 1–2 first",
            steps: [
              "Confirm Ethernet to the router works — if yes, IP routing is probably fine.",
              "Check signal: distance, walls, and whether the device is on 5 GHz (shorter range).",
              "Look for channel overlap on 2.4 GHz — neighbors on channel 6 when you are on 4 causes interference.",
              "Verify WPA2/WPA3 passphrase and security mode before checking DNS or static routes.",
            ],
          },
          commonMistakes: [
            "Treating SSID hiding as a security control — it only obscures the name",
            "Confusing SSID (network name) with BSSID (AP MAC address)",
            "Using overlapping 2.4 GHz channels instead of 1, 6, and 11",
            "Jumping to Layer 3 routing when the issue is signal, channel, or wrong password",
            "Deploying WEP or open Wi-Fi on a production network",
          ],
          examTraps: [
            "802.11n/ac/ax mapped to Wi-Fi 4/5/6 marketing names",
            "WPA2 vs WPA3 — SAE improves offline password-guess resistance",
            "CSMA/CA on wireless vs CSMA/CD on legacy half-duplex Ethernet",
            "Roaming described as changing SSID instead of changing BSSID",
            "Wireless controller vs autonomous AP — lightweight AP needs WLC (deferred detail)",
          ],
          realWorldScenario: "An employee walks a long hallway while on a video call. Their phone roams between APs sharing the same SSID but different BSSIDs — the session stays up because the wireless network is designed for coverage overlap.",
          quiz: [
            {
              id: "wireless-basics-q1",
              prompt: "Which IEEE standard defines wireless LANs?",
              choices: [
                { id: "a", text: "802.1Q" },
                { id: "b", text: "802.3" },
                { id: "c", text: "802.11" },
                { id: "d", text: "802.1X" },
              ],
              correctChoiceId: "c",
              explanation: "IEEE 802.11 is the family of WLAN standards.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-q2",
              prompt: "SSID stands for:",
              choices: [
                { id: "a", text: "Secure Service Identifier" },
                { id: "b", text: "Service Set Identifier" },
                { id: "c", text: "Subnet System ID" },
                { id: "d", text: "Signal Strength Indicator Data" },
              ],
              correctChoiceId: "b",
              explanation: "SSID is the wireless network name broadcast by access points.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-q3",
              prompt: "Non-overlapping 2.4 GHz channels in North America include:",
              choices: [
                { id: "a", text: "1, 2, 3" },
                { id: "b", text: "1, 6, 11" },
                { id: "c", text: "2, 5, 8" },
                { id: "d", text: "3, 6, 9" },
              ],
              correctChoiceId: "b",
              explanation: "Channels 1, 6, and 11 do not overlap in the 2.4 GHz band.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-q4",
              prompt: "WPA3 improves wireless security by providing:",
              choices: [
                { id: "a", text: "Faster Ethernet speeds" },
                { id: "b", text: "Stronger encryption and protection against offline attacks" },
                { id: "c", text: "VLAN tagging" },
                { id: "d", text: "Static routing" },
              ],
              correctChoiceId: "b",
              explanation: "WPA3 enhances encryption and replaces WPA2's weaker handshake protections.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-q5",
              prompt: "An access point primarily:",
              choices: [
                { id: "a", text: "Routes between WAN sites" },
                { id: "b", text: "Bridges wireless clients to the wired LAN" },
                { id: "c", text: "Filters Layer 3 ACLs only" },
                { id: "d", text: "Assigns public IP addresses" },
              ],
              correctChoiceId: "b",
              explanation: "APs provide wireless connectivity and forward traffic to the wired infrastructure.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "wireless-basics-f1",
              front: "802.11 vs 802.3?",
              back: "802.11 is wireless LAN; 802.3 is wired Ethernet",
            },
            {
              id: "wireless-basics-f2",
              front: "What is an SSID?",
              back: "Service Set Identifier — the wireless network name",
            },
            {
              id: "wireless-basics-f3",
              front: "Non-overlapping 2.4 GHz channels?",
              back: "1, 6, and 11 (in typical North American deployments)",
            },
            {
              id: "wireless-basics-f4",
              front: "WPA3 improvement over WPA2?",
              back: "SAE resists offline dictionary attacks",
            },
            {
              id: "wireless-basics-f4b",
              front: "802.11ac primarily uses:",
              back: "5 GHz band",
            },
            {
              id: "wireless-basics-f4c",
              front: "CSMA/CA — what does CA mean?",
              back: "Collision Avoidance — wireless tries to avoid collisions before transmitting",
            }
          ],
          objectives: [
            "CCNA-1.13"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "wireless-basics-b1",
              prompt: "802.11ax is marketed as:",
              choices: [
                { id: "a", text: "Wi-Fi 4" },
                { id: "b", text: "Wi-Fi 5" },
                { id: "c", text: "Wi-Fi 6" },
                { id: "d", text: "Wi-Fi 7" }
              ],
              correctChoiceId: "c",
              explanation: "802.11ax is Wi-Fi 6.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "wireless-basics-b2",
              prompt: "Which encryption should you deploy today?",
              choices: [
                { id: "a", text: "WEP" },
                { id: "b", text: "WPA-TKIP only" },
                { id: "c", text: "WPA2/WPA3 with AES" },
                { id: "d", text: "Open auth" }
              ],
              correctChoiceId: "c",
              explanation: "AES-based WPA2/WPA3 is current best practice.",
              objectiveId: "CCNA-1.13",
              difficulty: "hard",
            },
            {
              id: "wireless-basics-b3",
              prompt: "A lightweight AP receives config from:",
              choices: [
                { id: "a", text: "DNS server" },
                { id: "b", text: "Wireless LAN controller" },
                { id: "c", text: "DHCP option 43 only always" },
                { id: "d", text: "STP root bridge" }
              ],
              correctChoiceId: "b",
              explanation: "Split-MAC architecture uses a WLC.",
              objectiveId: "CCNA-1.13",
              difficulty: "hard",
            },
            {
              id: "wireless-basics-b4",
              prompt: "Non-overlapping 2.4 GHz channels (20 MHz)?",
              choices: [
                { id: "a", text: "1, 6, 11" },
                { id: "b", text: "1, 2, 3" },
                { id: "c", text: "6, 7, 8" },
                { id: "d", text: "All channels overlap equally" }
              ],
              correctChoiceId: "a",
              explanation: "Channels 1, 6, 11 do not overlap in 2.4 GHz.",
              objectiveId: "CCNA-1.13",
              difficulty: "hard",
            },
            {
              id: "wireless-basics-b5",
              prompt: "BSSID refers to:",
              choices: [
                { id: "a", text: "Network name string" },
                { id: "b", text: "AP radio MAC address" },
                { id: "c", text: "VLAN tag" },
                { id: "d", text: "SSID password" }
              ],
              correctChoiceId: "b",
              explanation: "BSSID is the MAC of the access point radio.",
              objectiveId: "CCNA-1.13",
              difficulty: "hard",
            },
            {
              id: "wireless-basics-b7",
              prompt: "What is the maximum channel width supported by 802.11n (Wi-Fi 4)?",
              choices: [
              { id: "a", text: "20 MHz only" },
              { id: "b", text: "40 MHz" },
              { id: "c", text: "80 MHz" },
              { id: "d", text: "160 MHz" }
              ],
              correctChoiceId: "b",
              explanation: "802.11n introduced channel bonding, allowing 40 MHz channels (combining two adjacent 20 MHz channels) to increase throughput compared to the 20 MHz maximum of older standards.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "wireless-basics-b8",
              prompt: "Which advantage does the 5 GHz band have over the 2.4 GHz band for Wi-Fi?",
              choices: [
              { id: "a", text: "Greater range through walls and obstacles" },
              { id: "b", text: "More available non-overlapping channels and less congestion" },
              { id: "c", text: "Better penetration through concrete structures" },
              { id: "d", text: "Lower cost access points" }
              ],
              correctChoiceId: "b",
              explanation: "The 5 GHz band offers up to 23+ non-overlapping 20 MHz channels (vs. 3 in 2.4 GHz) and is less congested because fewer consumer devices and interferers (microwaves, baby monitors) use it.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-b10",
              prompt: "WPA3 Personal improves over WPA2 Personal primarily by using:",
              choices: [
              { id: "a", text: "RC4 encryption instead of AES" },
              { id: "b", text: "Simultaneous Authentication of Equals (SAE) instead of PSK" },
              { id: "c", text: "TKIP instead of CCMP" },
              { id: "d", text: "Open authentication without encryption" }
              ],
              correctChoiceId: "b",
              explanation: "WPA3 replaces the Pre-Shared Key (PSK) handshake with SAE (Dragonfly handshake), which is resistant to offline dictionary attacks and provides forward secrecy.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "wireless-basics-b11",
              prompt: "802.11ac (Wi-Fi 5) operates exclusively in which frequency band?",
              choices: [
              { id: "a", text: "2.4 GHz only" },
              { id: "b", text: "5 GHz only" },
              { id: "c", text: "Both 2.4 GHz and 5 GHz simultaneously" },
              { id: "d", text: "6 GHz only" }
              ],
              correctChoiceId: "b",
              explanation: "802.11ac (Wi-Fi 5) operates only in the 5 GHz band. 802.11n operates in both 2.4 GHz and 5 GHz. Wi-Fi 6E and Wi-Fi 7 add the 6 GHz band.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-b12",
              prompt: "What is the purpose of an SSID (Service Set Identifier)?",
              choices: [
              { id: "a", text: "Uniquely identify the access point's MAC address" },
              { id: "b", text: "Provide the human-readable name for a wireless network that clients use to identify and join" },
              { id: "c", text: "Encrypt wireless frames between client and AP" },
              { id: "d", text: "Define the IP subnet used on the wireless LAN" }
              ],
              correctChoiceId: "b",
              explanation: "The SSID is the network name broadcast in Beacon frames. Clients use it to identify and connect to a specific wireless network. Multiple APs can share the same SSID to form an Extended Service Set (ESS).",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-b15",
              prompt: "MIMO (Multiple Input, Multiple Output) technology, introduced in 802.11n, increases throughput by:",
              choices: [
              { id: "a", text: "Using a higher-frequency band" },
              { id: "b", text: "Transmitting multiple data streams simultaneously over multiple antennas" },
              { id: "c", text: "Compressing wireless frames at Layer 2" },
              { id: "d", text: "Reducing the preamble length in each frame" }
              ],
              correctChoiceId: "b",
              explanation: "MIMO uses multiple antennas at both transmitter and receiver to send several spatial data streams simultaneously, multiplying throughput without requiring additional spectrum.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            },
            {
              id: "wireless-basics-b16",
              prompt: "Compared to 5 GHz, the 2.4 GHz Wi-Fi band generally offers:",
              choices: [
              { id: "a", text: "Higher maximum data rates" },
              { id: "b", text: "More non-overlapping channels" },
              { id: "c", text: "Better range and penetration through walls" },
              { id: "d", text: "Less interference from other devices" }
              ],
              correctChoiceId: "c",
              explanation: "Lower-frequency radio waves (2.4 GHz) travel farther and penetrate solid objects better than higher-frequency 5 GHz signals, though at the cost of less available bandwidth and more congestion.",
              objectiveId: "CCNA-1.13",
              difficulty: "easy",
            },
            {
              id: "wireless-basics-b17",
              prompt: "Wireless 802.11 networks use CSMA/CA instead of CSMA/CD. What does CA stand for and why is it used?",
              choices: [
              { id: "a", text: "Collision Avoidance — wireless devices cannot detect collisions while transmitting so they try to avoid them" },
              { id: "b", text: "Collision Acceptance — wireless accepts all collisions gracefully" },
              { id: "c", text: "Channel Allocation — channels are reserved before transmission" },
              { id: "d", text: "Carrier Assignment — carriers are pre-assigned to each device" }
              ],
              correctChoiceId: "a",
              explanation: "CSMA/CA (Collision Avoidance) is necessary because wireless NICs cannot simultaneously transmit and listen for collisions (hidden node problem), so they use random back-off timers and optional RTS/CTS to avoid them before transmitting.",
              objectiveId: "CCNA-1.13",
              difficulty: "medium",
            }],
          assignments: [
            {
              id: "wireless-std-sim",
              title: "Wireless Standard Matcher",
              type: "simulator",
              instructions: "Match 802.11 standards to frequency bands, maximum theoretical speeds, and marketing names in the wireless standard drill.",
              estimatedMinutes: 12,
              simulatorId: "wireless-standard-drill",
              completionCriteria: [
                "Completed drill",
                "Score 75% or higher"
              ],
              relatedTopicIds: ["wireless-basics"],
              order: 1,
            }
          ],
        
        },
      ],
    },
    {
      id: "network-access",
      name: "Network Access",
      topics: [
        {
          id: "switching",
          name: "Switching",
          lesson: {
            title: "Layer 2 Switching",
            content: `Layer 2 switches forward Ethernet frames within a LAN using MAC addresses. Unlike hubs that flood all traffic to every port, switches make intelligent forwarding decisions based on a dynamically built MAC address table. When a switch receives a frame, it records the source MAC and port, then forwards the frame only to the port matching the destination MAC—or floods if unknown.

Switches segment collision domains: each switched port is its own collision domain in full-duplex mode. However, all ports in the same VLAN share one broadcast domain unless routing is introduced. Store-and-forward switching reads the entire frame and checks FCS before forwarding.

Managed switches support VLANs, trunking, Spanning Tree, port security, and QoS. Access ports connect end devices and carry one VLAN; trunk ports carry multiple VLANs using 802.1Q tags.

Understanding switching fundamentals is the foundation for VLANs, inter-VLAN routing, and troubleshooting Layer 2 connectivity.

Modern switches support cut-through (forwards after reading destination MAC, lower latency) and store-and-forward modes. Fragment-free is a hybrid rarely emphasized on CCNA. Buffering and ASICs enable wire-speed forwarding on enterprise switches.

Microsegmentation with switches eliminates collision domains on each port. Broadcast storms can still occur within a VLAN—use storm control and proper STP. Port security can limit MAC addresses learned on access ports.

Show commands: show mac address-table, show interfaces status, show spanning-tree. Clear the MAC table with clear mac address-table dynamic when troubleshooting sticky entries.`,
          },
          keyFacts: [
            "Switches forward based on destination MAC addresses",
            "MAC address table maps MACs to switch ports",
            "Each switched full-duplex port is its own collision domain",
            "Unknown destination MACs cause flooding to all ports in the VLAN",
            "Store-and-forward checks FCS; cut-through forwards faster with less checking",
            "Access ports carry one VLAN; trunk ports carry multiple VLANs",
          ],
          commonMistakes: [
            "Assuming switches break up broadcast domains without VLANs",
            "Confusing MAC address table aging with ARP cache timeouts",
            "Forgetting that unknown unicast frames are flooded out all ports except ingress",
            "Mixing up collision domain boundaries on switched full-duplex ports",
            "Configuring speed/duplex mismatch causing intermittent connectivity",
          ],
          examTraps: [
            "How a switch learns MAC addresses—source MAC on received frames",
            "Destination unknown unicast flooding behavior",
            "Store-and-forward vs cut-through switching latency trade-offs",
            "Port security questions mixed into basic switching scenarios",
            "CAM table overflow attacks beyond CCNA but MAC learning process is tested",
          ],
          quiz: [
            {
              id: "switching-q1",
              prompt: "What happens when a switch receives a frame with an unknown destination MAC?",
              choices: [
                { id: "a", text: "Drops the frame" },
                { id: "b", text: "Floods to all ports in the VLAN except the incoming port" },
                { id: "c", text: "Sends to the default gateway" },
                { id: "d", text: "Converts to IP routing" },
              ],
              correctChoiceId: "b",
              explanation: "Unknown unicast destinations are flooded within the VLAN until the MAC is learned.",
              objectiveId: "CCNA-2.3",
              difficulty: "easy",
            },
            {
              id: "switching-q2",
              prompt: "A MAC address table maps:",
              choices: [
                { id: "a", text: "IP to MAC" },
                { id: "b", text: "MAC address to switch port" },
                { id: "c", text: "VLAN to subnet" },
                { id: "d", text: "SSID to AP" },
              ],
              correctChoiceId: "b",
              explanation: "The CAM/MAC table associates each learned MAC with the port where it was seen.",
              objectiveId: "CCNA-2.4",
              difficulty: "easy",
            },
            {
              id: "switching-q3",
              prompt: "Full-duplex switched ports create:",
              choices: [
                { id: "a", text: "One shared collision domain" },
                { id: "b", text: "Separate collision domains per port" },
                { id: "c", text: "No broadcast domains" },
                { id: "d", text: "WAN links" },
              ],
              correctChoiceId: "b",
              explanation: "Each full-duplex port operates independently without collisions.",
              objectiveId: "CCNA-2.3",
              difficulty: "easy",
            },
            {
              id: "switching-q4",
              prompt: "Store-and-forward switching:",
              choices: [
                { id: "a", text: "Forwards immediately after destination MAC" },
                { id: "b", text: "Receives entire frame and checks FCS before forwarding" },
                { id: "c", text: "Only works on routers" },
                { id: "d", text: "Disables VLANs" },
              ],
              correctChoiceId: "b",
              explanation: "Store-and-forward waits for the complete frame and validates the FCS.",
              objectiveId: "CCNA-2.4",
              difficulty: "easy",
            },
            {
              id: "switching-q5",
              prompt: "An access port typically carries:",
              choices: [
                { id: "a", text: "All VLANs tagged" },
                { id: "b", text: "One untagged VLAN" },
                { id: "c", text: "Only IP packets" },
                { id: "d", text: "Wireless traffic only" },
              ],
              correctChoiceId: "b",
              explanation: "Access ports belong to a single VLAN and do not tag frames for end hosts.",
              objectiveId: "CCNA-2.3",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "switching-f1",
              front: "How does a switch learn MAC addresses?",
              back: "Records source MAC and incoming port from each received frame",
            },
            {
              id: "switching-f2",
              front: "Unknown unicast destination behavior?",
              back: "Flood the frame to all ports in the same VLAN except the source port",
            },
            {
              id: "switching-f3",
              front: "Access port vs trunk port?",
              back: "Access: one VLAN, untagged. Trunk: multiple VLANs with 802.1Q tags",
            },
            {
              id: "switching-f4",
              front: "Cut-through vs store-and-forward?",
              back: "Cut-through: lower latency, less error checking",
            },
            {
              id: "switching-f4b",
              front: "show mac address-table displays?",
              back: "Learned MAC-to-port mappings",
            },
            {
              id: "switching-f4c",
              front: "Broadcast domain on one VLAN?",
              back: "All ports in that VLAN share one broadcast domain",
            }
          ],
          objectives: [
            "CCNA-2.3",
            "CCNA-2.4"
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "switching-b1",
              prompt: "Cut-through switching forwards after reading:",
              choices: [
                { id: "a", text: "Entire frame and FCS" },
                { id: "b", text: "Destination MAC only" },
                { id: "c", text: "IP header" },
                { id: "d", text: "TCP port" }
              ],
              correctChoiceId: "b",
              explanation: "Cut-through starts forwarding before entire frame arrives.",
              objectiveId: "CCNA-2.4",
              difficulty: "medium",
            },
            {
              id: "switching-b2",
              prompt: "CAM table overflow may cause:",
              choices: [
                { id: "a", text: "More flooding of unknown unicasts" },
                { id: "b", text: "Automatic VLAN deletion" },
                { id: "c", text: "OSPF adjacency" },
                { id: "d", text: "DNS failure" }
              ],
              correctChoiceId: "a",
              explanation: "If MAC table fills, unknown unicast flooding increases.",
              objectiveId: "CCNA-2.3",
              difficulty: "hard",
            },
            {
              id: "switching-b3",
              prompt: "Duplex mismatch symptom:",
              choices: [
                { id: "a", text: "Late collisions, poor performance" },
                { id: "b", text: "STP root change" },
                { id: "c", text: "APIPA addresses" },
                { id: "d", text: "TTL exceeded" }
              ],
              correctChoiceId: "a",
              explanation: "Half/full duplex mismatch causes collisions/errors.",
              objectiveId: "CCNA-2.4",
              difficulty: "hard",
            },
            {
              id: "switching-b4",
              prompt: "Which device breaks up broadcast domains?",
              choices: [
                { id: "a", text: "Unmanaged switch" },
                { id: "b", text: "Router or L3 switch SVI" },
                { id: "c", text: "Hub" },
                { id: "d", text: "Patch panel" }
              ],
              correctChoiceId: "b",
              explanation: "Routing between VLANs requires a Layer 3 device.",
              objectiveId: "CCNA-2.3",
              difficulty: "hard",
            },
            {
              id: "switching-b5",
              prompt: "Dynamic MAC entries age out by default after:",
              choices: [
                { id: "a", text: "Varies by platform; often 300 seconds" },
                { id: "b", text: "Never" },
                { id: "c", text: "1 second" },
                { id: "d", text: "24 hours always" }
              ],
              correctChoiceId: "a",
              explanation: "Aging timers vary; Cisco default often 300s for dynamic entries.",
              objectiveId: "CCNA-2.4",
              difficulty: "hard",
            },
            {
              id: "switching-b6",
              prompt: "Port security violation modes include:",
              choices: [
                { id: "a", text: "Protect, restrict, shutdown" },
                { id: "b", text: "Open, shared, closed" },
                { id: "c", text: "WEP, WPA, WPA3" },
                { id: "d", text: "Static, dynamic, floating" }
              ],
              correctChoiceId: "a",
              explanation: "Port security can protect, restrict, or shutdown on violation.",
              objectiveId: "CCNA-2.3",
              difficulty: "hard",
            }
          ],
        
        },
        {
          id: "vlans",
          name: "VLANs",
          lesson: {
            title: "Virtual LANs",
            content: `Virtual LANs (VLANs) logically segment a physical switch into multiple broadcast domains. Each VLAN is a separate Layer 2 network identified by a VLAN ID (1–4094). Devices in different VLANs cannot communicate at Layer 2 without a router or Layer 3 switch, improving security and reducing broadcast traffic scope.

VLAN 1 is the default VLAN on Cisco switches; all ports start in VLAN 1 unless changed. To assign a port to a VLAN, configure it as an access port with switchport mode access and switchport access vlan. Inter-VLAN routing requires a device with an IP interface in each VLAN—either router-on-a-stick subinterfaces or a multilayer switch SVI.

Plan VLANs by function: users, servers, management, guest, IoT. Document VLAN IDs consistently across the organization. VLAN misconfiguration is a frequent cause of connectivity issues across subnets.

VLANs logically segment a switch into separate broadcast domains. VLAN 1 is default on Cisco switches; best practice avoids using VLAN 1 for user data. Create VLANs with vlan 10 name Sales, assign access ports with switchport mode access and switchport access vlan 10.

Inter-VLAN routing requires a router-on-a-stick (subinterfaces) or multilayer switch SVI (interface vlan 10). Each SVI needs an IP address and no shutdown. show vlan brief lists VLANs and ports.

Voice VLANs and data VLANs can be assigned to the same port for IP phones with PCs behind them. Native VLAN considerations apply on trunks—covered in trunking topic.`,
          },
          keyFacts: [
            "VLANs create separate broadcast domains on a switch",
            "VLAN IDs range from 1 to 4094",
            "Access ports belong to a single VLAN",
            "Inter-VLAN routing requires a Layer 3 device",
            "SVI is a virtual routed interface for a VLAN on a multilayer switch",
            "802.1Q tags carry VLAN ID on trunk links",
          ],
          guidedExample: {
            title: "Create Sales and Engineering VLANs with Inter-VLAN Routing",
            steps: [
              "Create VLANs: vlan 10 name Sales and vlan 20 name Engineering in global config.",
              "Assign access ports: interface fa0/1 with switchport mode access and switchport access vlan 10 for Sales PCs.",
              "Assign Engineering PCs to vlan 20 on their access ports using the same access-mode commands.",
              "Configure SVIs on a multilayer switch: interface vlan 10 with ip address 192.168.10.1 255.255.255.0 and no shutdown.",
              "Add interface vlan 20 with ip address 192.168.20.1 255.255.255.0 and no shutdown as the Engineering gateway.",
              "Verify with show vlan brief and ping from a Sales PC to the Engineering gateway to confirm inter-VLAN routing.",
            ],
          },
          commonMistakes: [
            "Creating VLANs but forgetting to assign access ports to the correct VLAN ID",
            "Configuring SVIs without issuing no shutdown, leaving gateways down",
            "Expecting hosts in different VLANs to communicate without a Layer 3 device",
            "Using VLAN 1 for user data despite security best practice to avoid the default VLAN",
            "Mismatching VLAN IDs on trunk allowed lists between switches",
          ],
          examTraps: [
            "Questions that assume VLANs replace routing—different VLANs still need L3 for cross-VLAN traffic",
            "Trick answers listing VLAN 0 or 4095 as valid standard VLAN IDs",
            "Confusing SVI (Layer 3 VLAN interface) with access port VLAN assignment",
            "Scenarios where ping works within a VLAN but fails across VLANs due to missing gateway or SVI",
            "Voice VLAN questions mixing data VLAN, voice VLAN, and trunk requirements on one port",
          ],
          realWorldScenario: "A retail chain is segmenting store networks so POS terminals, back-office PCs, and guest Wi-Fi are isolated. You create VLAN 10 for POS, VLAN 20 for staff, and VLAN 30 for guests on access-layer switches, then configure SVIs on the distribution switch as default gateways. When a cashier cannot reach the inventory server in VLAN 20, you verify the PC is in VLAN 10, confirm the SVI is up, and check that inter-VLAN routing is enabled.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["switching"],
          quiz: [
            {
              id: "vlans-q1",
              prompt: "What is the primary benefit of VLANs?",
              choices: [
                { id: "a", text: "Increase physical cable speed" },
                { id: "b", text: "Logical segmentation into separate broadcast domains" },
                { id: "c", text: "Replace IP addressing" },
                { id: "d", text: "Eliminate need for routing" },
              ],
              correctChoiceId: "b",
              explanation: "VLANs divide a switch into isolated Layer 2 broadcast domains.",
              objectiveId: "CCNA-2.5",
              difficulty: "easy",
            },
            {
              id: "vlans-q2",
              prompt: "Default VLAN on Cisco switches is:",
              choices: [
                { id: "a", text: "0" },
                { id: "b", text: "1" },
                { id: "c", text: "10" },
                { id: "d", text: "100" },
              ],
              correctChoiceId: "b",
              explanation: "VLAN 1 is the default; all ports start here until configured otherwise.",
              objectiveId: "CCNA-2.6",
              difficulty: "easy",
            },
            {
              id: "vlans-q3",
              prompt: "Inter-VLAN routing requires:",
              choices: [
                { id: "a", text: "Only a hub" },
                { id: "b", text: "A Layer 3 device with interfaces in each VLAN" },
                { id: "c", text: "Disabling STP" },
                { id: "d", text: "Removing trunk ports" },
              ],
              correctChoiceId: "b",
              explanation: "Routing between VLANs needs Layer 3—router subinterfaces or switch SVIs.",
              objectiveId: "CCNA-2.5",
              difficulty: "easy",
            },
            {
              id: "vlans-q4",
              prompt: "An SVI is:",
              choices: [
                { id: "a", text: "A physical router port" },
                { id: "b", text: "A virtual IP interface for a VLAN on a switch" },
                { id: "c", text: "A wireless SSID" },
                { id: "d", text: "A NAT pool" },
              ],
              correctChoiceId: "b",
              explanation: "Switch Virtual Interface provides Layer 3 gateway functionality for a VLAN.",
              objectiveId: "CCNA-2.6",
              difficulty: "easy",
            },
            {
              id: "vlans-q5",
              prompt: "Valid VLAN ID range for normal use is approximately:",
              choices: [
                { id: "a", text: "1–4094" },
                { id: "b", text: "1–255 only" },
                { id: "c", text: "0–65535" },
                { id: "d", text: "10–99 only" },
              ],
              correctChoiceId: "a",
              explanation: "IEEE 802.1Q supports VLAN IDs 1–4094 for standard deployments.",
              objectiveId: "CCNA-2.5",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "vlans-f1",
              front: "What problem do VLANs solve?",
              back: "Split one physical switch into multiple isolated broadcast domains",
            },
            {
              id: "vlans-f2",
              front: "Default Cisco VLAN?",
              back: "VLAN 1",
            },
            {
              id: "vlans-f3",
              front: "What is an SVI?",
              back: "Switch Virtual Interface — Layer 3 gateway IP for a VLAN on a multilayer switch",
            },
            {
              id: "vlans-f4",
              front: "Create VLAN on Cisco IOS?",
              back: "vlan 10 + name",
            },
            {
              id: "vlans-f4b",
              front: "Inter-VLAN routing options?",
              back: "Router-on-a-stick or L3 switch SVI",
            },
            {
              id: "vlans-f4c",
              front: "show vlan brief shows?",
              back: "VLAN IDs, names, and member ports",
            }
          ],
          objectives: [
            "CCNA-2.5",
            "CCNA-2.6"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
          questionBank: [
            {
              id: "vlans-b1",
              prompt: "Default VLAN on Cisco switches?",
              choices: [
                { id: "a", text: "VLAN 0" },
                { id: "b", text: "VLAN 1" },
                { id: "c", text: "VLAN 10" },
                { id: "d", text: "VLAN 4094" }
              ],
              correctChoiceId: "b",
              explanation: "VLAN 1 is the default VLAN.",
              objectiveId: "CCNA-2.6",
              difficulty: "medium",
            },
            {
              id: "vlans-b2",
              prompt: "Maximum VLAN ID (normal range)?",
              choices: [
                { id: "a", text: "256" },
                { id: "b", text: "1005" },
                { id: "c", text: "4094" },
                { id: "d", text: "65535" }
              ],
              correctChoiceId: "c",
              explanation: "Standard VLAN range 1–4094.",
              objectiveId: "CCNA-2.5",
              difficulty: "medium",
            },
            {
              id: "vlans-b3",
              prompt: "SVI stands for:",
              choices: [
                { id: "a", text: "Switch Virtual Interface" },
                { id: "b", text: "Secure VLAN ID" },
                { id: "c", text: "Static VLAN Interconnect" },
                { id: "d", text: "Segmented Virtual IP" }
              ],
              correctChoiceId: "a",
              explanation: "SVI is a Layer 3 VLAN interface on multilayer switches.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            },
            {
              id: "vlans-b4",
              prompt: "Two hosts in different VLANs on same switch without routing:",
              choices: [
                { id: "a", text: "Communicate via MAC table" },
                { id: "b", text: "Cannot communicate at Layer 3" },
                { id: "c", text: "Share one collision domain" },
                { id: "d", text: "Use APIPA" }
              ],
              correctChoiceId: "b",
              explanation: "Different VLANs need L3 routing to communicate.",
              objectiveId: "CCNA-2.5",
              difficulty: "hard",
            },
            {
              id: "vlans-b5",
              prompt: "switchport mode access configures:",
              choices: [
                { id: "a", text: "Trunk" },
                { id: "b", text: "Single VLAN access port" },
                { id: "c", text: "Routed port" },
                { id: "d", text: "Dot1x only" }
              ],
              correctChoiceId: "b",
              explanation: "Access mode assigns one untagged VLAN.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            },
            {
              id: "vlans-b6",
              prompt: "Voice VLAN feature allows:",
              choices: [
                { id: "a", text: "Separate VLAN for IP phone traffic on same port" },
                { id: "b", text: "Wireless SSID naming" },
                { id: "c", text: "OSPF on phone" },
                { id: "d", text: "NAT overload" }
              ],
              correctChoiceId: "a",
              explanation: "Voice VLAN tags phone traffic separately from PC data.",
              objectiveId: "CCNA-2.5",
              difficulty: "hard",
            },
            {
              id: "vlans-b7",
              prompt: "Command to create VLAN 30 named Guest?",
              choices: [
                { id: "a", text: "vlan 30 + name Guest" },
                { id: "b", text: "switchport vlan guest 30" },
                { id: "c", text: "interface vlan guest" },
                { id: "d", text: "vtp domain Guest" }
              ],
              correctChoiceId: "a",
              explanation: "vlan <id> and name <label> creates and names a VLAN.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            },
            {
              id: "vlans-b8",
              prompt: "Inter-VLAN routing on a multilayer switch uses:",
              choices: [
                { id: "a", text: "SVIs with IP addresses" },
                { id: "b", text: "Access ports only" },
                { id: "c", text: "NAT overload" },
                { id: "d", text: "DHCP snooping" }
              ],
              correctChoiceId: "a",
              explanation: "SVIs provide Layer 3 gateways for each VLAN.",
              objectiveId: "CCNA-2.5",
              difficulty: "hard",
            }
          ],
          externalResources: [
            {
              id: "packet-tracer",
              name: "Cisco Packet Tracer",
              url: "https://www.netacad.com/cisco-packet-tracer",
              cost: "free",
              platform: "windows",
              installNotes: "Create a free Cisco Networking Academy account to download Packet Tracer.",
            }
          ],
          assignments: [
            {
              id: "vlan-trunk-sim",
              title: "VLAN & Trunk Identification Drill",
              type: "simulator",
              instructions: "Complete the VLAN/trunk drill to identify access vs trunk ports, native VLAN, and allowed VLAN lists.",
              estimatedMinutes: 15,
              simulatorId: "vlan-trunk-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["vlans", "trunking"],
              order: 1,
            },
            {
              id: "vlan-pt-lab-1",
              title: "Packet Tracer: Build a Multi-VLAN Topology",
              type: "external-lab",
              instructions: "1. Create VLANs 10 (Sales) and 20 (Engineering) on switches.\n2. Assign access ports to PCs.\n3. Configure a router-on-a-stick or L3 switch SVIs for inter-VLAN routing.\n4. Verify ping between VLANs and isolation within misconfigured tests.",
              estimatedMinutes: 60,
              externalResourceId: "packet-tracer",
              completionCriteria: [
                "VLANs 10 and 20 created and documented",
                "Inter-VLAN routing configured",
                "Successful ping between VLANs"
              ],
              relatedTopicIds: ["vlans", "trunking"],
              order: 2,
            },
            {
              id: "vlan-misconfig-case",
              title: "Case Study: VLAN Misconfiguration",
              type: "case-study",
              instructions: "Interactive troubleshooting: PCs in different VLANs cannot communicate.",
              estimatedMinutes: 15,
              caseStudyId: "ccna-case-vlan",
              completionCriteria: ["Completed interactive case study"],
              relatedTopicIds: ["vlans"],
              order: 3,
            }
          ],
        
        },
        {
          id: "trunking",
          name: "Trunking",
          lesson: {
            title: "VLAN Trunking with 802.1Q",
            content: `Trunk links carry traffic for multiple VLANs between switches or between a switch and a router. IEEE 802.1Q is the standard tagging method that inserts a 4-byte VLAN tag into Ethernet frames, identifying which VLAN the frame belongs to. Native VLAN traffic may be sent untagged on Cisco trunks.

Configure a trunk with switchport mode trunk and optionally specify allowed VLANs with switchport trunk allowed vlan. The native VLAN must match on both ends of a trunk; mismatches cause subtle connectivity problems. Only necessary VLANs should be allowed across trunks for security.

Dynamic Trunking Protocol (DTP) can negotiate trunk formation between Cisco devices, but many designs disable DTP and hard-set trunk mode. Router-on-a-stick uses a single physical router interface with multiple 802.1Q subinterfaces to route between VLANs.

802.1Q tagging inserts a 4-byte VLAN tag into Ethernet frames on trunk links. The native VLAN carries untagged traffic; mismatching native VLANs between switches causes subtle leaks and security issues. switchport trunk allowed vlan lists restrict which VLANs cross a trunk.

Dynamic Trunking Protocol (DTP) can negotiate trunk/access—best practice sets explicit switchport mode trunk and disables DTP with switchport nonegotiate on security-sensitive designs. show interfaces trunk verifies mode, native VLAN, and allowed VLANs.

Only trunks should exist between switches carrying multiple VLANs; access ports connect end devices.`,
          },
          keyFacts: [
            "802.1Q adds a 4-byte VLAN tag to Ethernet frames on trunks",
            "Trunk ports carry multiple VLANs; access ports carry one VLAN",
            "Native VLAN frames may traverse untagged on Cisco trunks",
            "Native VLAN must match on both ends of a trunk",
            "switchport trunk allowed vlan restricts which VLANs cross the link",
            "DTP negotiates trunk status on Cisco switches (often disabled in secure designs)",
          ],
          commonMistakes: [
            "Native VLAN mismatch between trunk ends causing untagged traffic leaks",
            "Allowing all VLANs on trunks instead of pruning to required VLANs only",
            "Configuring access mode on switch-to-switch links that need trunks",
            "Forgetting that 802.1Q adds 4 bytes, slightly reducing effective MTU",
            "Assuming DTP will always negotiate trunk—explicit mode is safer",
          ],
          examTraps: [
            "Native VLAN untagged behavior on Cisco 802.1Q trunks",
            "switchport trunk allowed vlan syntax and default allow-all behavior",
            "Router-on-a-stick subinterface encapsulation dot1Q <vlan>",
            "DTP desirable/auto/nonegotiate mode combinations",
            "802.1Q vs ISL—CCNA focuses on 802.1Q as the standard",
          ],
          quiz: [
            {
              id: "trunking-q1",
              prompt: "Which standard adds VLAN tags to Ethernet frames?",
              choices: [
                { id: "a", text: "802.3" },
                { id: "b", text: "802.1Q" },
                { id: "c", text: "802.1X" },
                { id: "d", text: "802.11" },
              ],
              correctChoiceId: "b",
              explanation: "IEEE 802.1Q defines VLAN tagging for trunk links.",
              objectiveId: "CCNA-2.6",
              difficulty: "easy",
            },
            {
              id: "trunking-q2",
              prompt: "Native VLAN mismatch on a trunk can cause:",
              choices: [
                { id: "a", text: "Faster routing" },
                { id: "b", text: "Connectivity issues and security concerns" },
                { id: "c", text: "Automatic IP assignment" },
                { id: "d", text: "STP disable" },
              ],
              correctChoiceId: "b",
              explanation: "Mismatched native VLANs lead to misdirected untagged traffic between switches.",
              objectiveId: "CCNA-2.7",
              difficulty: "easy",
            },
            {
              id: "trunking-q3",
              prompt: "Router-on-a-stick uses:",
              choices: [
                { id: "a", text: "Multiple physical router ports only" },
                { id: "b", text: "One trunk with 802.1Q subinterfaces" },
                { id: "c", text: "NAT exclusively" },
                { id: "d", text: "Wireless APs" },
              ],
              correctChoiceId: "b",
              explanation: "Subinterfaces on one physical link handle each VLAN tag for inter-VLAN routing.",
              objectiveId: "CCNA-2.6",
              difficulty: "easy",
            },
            {
              id: "trunking-q4",
              prompt: "To prevent DTP negotiation on a Cisco port:",
              choices: [
                { id: "a", text: "switchport mode dynamic" },
                { id: "b", text: "switchport nonegotiate" },
                { id: "c", text: "no vlan 1" },
                { id: "d", text: "spanning-tree off" },
              ],
              correctChoiceId: "b",
              explanation: "switchport nonegotiate stops DTP from attempting trunk negotiation.",
              objectiveId: "CCNA-2.7",
              difficulty: "easy",
            },
            {
              id: "trunking-q5",
              prompt: "A trunk port differs from an access port because it:",
              choices: [
                { id: "a", text: "Carries only untagged traffic" },
                { id: "b", text: "Carries multiple VLANs with tags" },
                { id: "c", text: "Cannot connect two switches" },
                { id: "d", text: "Operates at Layer 3 only" },
              ],
              correctChoiceId: "b",
              explanation: "Trunks multiplex several VLANs over one link using 802.1Q tags.",
              objectiveId: "CCNA-2.6",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "trunking-f1",
              front: "802.1Q tag size and purpose?",
              back: "4-byte tag identifying VLAN ID on trunk links",
            },
            {
              id: "trunking-f2",
              front: "What is native VLAN?",
              back: "VLAN whose frames are sent untagged on a Cisco 802.1Q trunk; must match on both sides",
            },
            {
              id: "trunking-f3",
              front: "Router-on-a-stick?",
              back: "Single router trunk link with subinterfaces—each tagged for one VLAN—to route between them",
            },
            {
              id: "trunking-f4",
              front: "802.1Q tag size?",
              back: "4 bytes",
            },
            {
              id: "trunking-f4b",
              front: "Native VLAN traffic is:",
              back: "Untagged on the trunk",
            },
            {
              id: "trunking-f4c",
              front: "Disable DTP negotiation?",
              back: "switchport nonegotiate",
            }
          ],
          objectives: [
            "CCNA-2.6",
            "CCNA-2.7"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "trunking-b1",
              prompt: "802.1Q tag includes:",
              choices: [
                { id: "a", text: "VLAN ID and priority" },
                { id: "b", text: "IP TOS only" },
                { id: "c", text: "MAC of router" },
                { id: "d", text: "SSID" }
              ],
              correctChoiceId: "a",
              explanation: "Tag carries VLAN ID (12 bits) and priority fields.",
              objectiveId: "CCNA-2.7",
              difficulty: "medium",
            },
            {
              id: "trunking-b2",
              prompt: "Native VLAN mismatch between switches causes:",
              choices: [
                { id: "a", text: "Automatic shutdown" },
                { id: "b", text: "Untagged traffic in wrong VLAN context" },
                { id: "c", text: "OSPF failure only" },
                { id: "d", text: "DHCP block" }
              ],
              correctChoiceId: "b",
              explanation: "Native VLAN mismatch is a common trunk misconfiguration.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            },
            {
              id: "trunking-b3",
              prompt: "switchport mode trunk:",
              choices: [
                { id: "a", text: "Forces trunking without DTP dependency for mode" },
                { id: "b", text: "Creates access port" },
                { id: "c", text: "Enables NAT" },
                { id: "d", text: "Sets SSID" }
              ],
              correctChoiceId: "a",
              explanation: "Explicit trunk mode is recommended.",
              objectiveId: "CCNA-2.7",
              difficulty: "hard",
            },
            {
              id: "trunking-b4",
              prompt: "Allowed VLAN list purpose:",
              choices: [
                { id: "a", text: "Restrict VLANs permitted on trunk" },
                { id: "b", text: "Assign IP addresses" },
                { id: "c", text: "Configure WPA3" },
                { id: "d", text: "Set OSPF cost" }
              ],
              correctChoiceId: "a",
              explanation: "Prune VLANs not needed across the link.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            },
            {
              id: "trunking-b5",
              prompt: "DTP stands for:",
              choices: [
                { id: "a", text: "Dynamic Trunking Protocol" },
                { id: "b", text: "Domain Tag Protocol" },
                { id: "c", text: "Data Transfer Protocol" },
                { id: "d", text: "Default Trunk Port" }
              ],
              correctChoiceId: "a",
              explanation: "DTP negotiates trunk/access between Cisco devices.",
              objectiveId: "CCNA-2.7",
              difficulty: "hard",
            },
            {
              id: "trunking-b6",
              prompt: "Which frames remain untagged on a trunk?",
              choices: [
                { id: "a", text: "Native VLAN frames" },
                { id: "b", text: "All frames" },
                { id: "c", text: "Tagged management only" },
                { id: "d", text: "None" }
              ],
              correctChoiceId: "a",
              explanation: "Native VLAN traffic is untagged on 802.1Q trunks.",
              objectiveId: "CCNA-2.6",
              difficulty: "hard",
            }
          ],
        
        },
        {
          id: "stp",
          name: "STP",
          lesson: {
            title: "Spanning Tree Protocol",
            content: `Spanning Tree Protocol (STP) prevents Layer 2 loops in redundant switched topologies. Without STP, broadcast frames could circulate endlessly, causing broadcast storms, MAC table instability, and network failure. STP logically blocks redundant paths while keeping them as backups.

IEEE 802.1D STP elects a root bridge with the lowest bridge ID (priority plus MAC). All other switches determine root port and designated ports on each segment. Remaining ports are blocked. Rapid STP (802.1w) provides faster convergence than classic STP.

Configure root bridge placement deliberately—usually the most central switch. PortFast on access ports skips STP delay for end devices; BPDU Guard disables PortFast ports if they receive BPDUs, preventing rogue switches.

Spanning Tree Protocol (802.1D and RSTP 802.1w) prevents Layer 2 loops by blocking redundant paths. One root bridge is elected with lowest bridge ID (priority + MAC). Port roles: root, designated, alternate/backup. RSTP speeds convergence with alternate paths pre-blocked.

Port states in classic STP: blocking, listening, learning, forwarding. PortFast on access ports skips delays but must never face another switch. BPDU Guard disables ports receiving BPDUs on PortFast-enabled access ports.

EtherChannel bundles links for bandwidth and redundancy—STP treats the bundle as one logical link. Verify with show spanning-tree vlan 1 and show spanning-tree root.`,
          },
          keyFacts: [
            "STP prevents Layer 2 loops by blocking redundant paths",
            "Root bridge has the lowest bridge ID (priority + MAC)",
            "Root port is the best path to the root bridge on non-root switches",
            "802.1w Rapid STP converges faster than classic 802.1D",
            "PortFast allows immediate forwarding on access ports connected to hosts",
            "BPDU Guard protects against connecting unauthorized switches",
          ],
          commonMistakes: [
            "Disabling STP on switches with redundant links, causing loops",
            "Confusing root bridge election (lowest bridge ID) with lowest MAC always winning",
            "Forgetting that blocked ports still receive BPDUs",
            "Mixing up port roles: root, designated, alternate/alternate blocked",
            "Ignoring port priority and cost when predicting root port selection",
          ],
          examTraps: [
            "Root bridge election with priority + MAC tiebreak",
            "Which port is blocked in a triangle topology with given costs",
            "RSTP vs legacy STP convergence terminology (802.1w)",
            "BPDU guard and root guard purpose on access vs trunk ports",
            "PVST+ per-VLAN spanning tree vs single spanning tree",
          ],
          quiz: [
            {
              id: "stp-q1",
              prompt: "What problem does STP solve?",
              choices: [
                { id: "a", text: "IPv4 exhaustion" },
                { id: "b", text: "Layer 2 switching loops" },
                { id: "c", text: "DNS failures" },
                { id: "d", text: "Wireless interference" },
              ],
              correctChoiceId: "b",
              explanation: "STP blocks redundant Layer 2 paths to prevent broadcast storms and loops.",
              objectiveId: "CCNA-2.8",
              difficulty: "easy",
            },
            {
              id: "stp-q2",
              prompt: "Root bridge selection is based primarily on:",
              choices: [
                { id: "a", text: "Highest IP address" },
                { id: "b", text: "Lowest bridge ID" },
                { id: "c", text: "Most ports" },
                { id: "d", text: "Newest switch" },
              ],
              correctChoiceId: "b",
              explanation: "Lowest bridge ID (priority + system MAC) wins root election.",
              objectiveId: "CCNA-2.9",
              difficulty: "easy",
            },
            {
              id: "stp-q3",
              prompt: "PortFast should be used on:",
              choices: [
                { id: "a", text: "Trunk ports to core switches" },
                { id: "b", text: "Access ports connected to end hosts" },
                { id: "c", text: "All ports by default" },
                { id: "d", text: "Disabled ports only" },
              ],
              correctChoiceId: "b",
              explanation: "PortFast skips listening/learning delay for host-facing access ports.",
              objectiveId: "CCNA-2.8",
              difficulty: "easy",
            },
            {
              id: "stp-q4",
              prompt: "A blocked STP port:",
              choices: [
                { id: "a", text: "Forwards all traffic" },
                { id: "b", text: "Does not forward user traffic but listens for BPDUs" },
                { id: "c", text: "Replaces a router" },
                { id: "d", text: "Assigns IP addresses" },
              ],
              correctChoiceId: "b",
              explanation: "Blocked ports do not forward frames but remain in the STP topology.",
              objectiveId: "CCNA-2.9",
              difficulty: "easy",
            },
            {
              id: "stp-q5",
              prompt: "Rapid STP (802.1w) compared to 802.1D:",
              choices: [
                { id: "a", text: "Slower convergence" },
                { id: "b", text: "Faster convergence" },
                { id: "c", text: "No root bridge" },
                { id: "d", text: "Works only on routers" },
              ],
              correctChoiceId: "b",
              explanation: "RSTP significantly reduces reconvergence time after topology changes.",
              objectiveId: "CCNA-2.8",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "stp-f1",
              front: "STP purpose?",
              back: "Prevent Layer 2 loops by blocking redundant switch paths",
            },
            {
              id: "stp-f2",
              front: "How is root bridge chosen?",
              back: "Lowest bridge ID (bridge priority + MAC address)",
            },
            {
              id: "stp-f3",
              front: "PortFast use case?",
              back: "Access ports connected to end devices—skip STP forwarding delay",
            },
            {
              id: "stp-f4",
              front: "Root bridge election uses:",
              back: "Lowest bridge ID (priority + MAC)",
            },
            {
              id: "stp-f4b",
              front: "RSTP advantage?",
              back: "Faster convergence than classic STP",
            },
            {
              id: "stp-f4c",
              front: "BPDU Guard protects:",
              back: "PortFast access ports from rogue switches",
            }
          ],
          objectives: [
            "CCNA-2.8",
            "CCNA-2.9"
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "stp-b1",
              prompt: "Default Cisco STP priority increment?",
              choices: [
                { id: "a", text: "4096 per change" },
                { id: "b", text: "1 per VLAN always" },
                { id: "c", text: "65535 fixed" },
                { id: "d", text: "100 only" }
              ],
              correctChoiceId: "a",
              explanation: "Bridge priority changes in 4096 steps on Cisco.",
              objectiveId: "CCNA-2.9",
              difficulty: "medium",
            },
            {
              id: "stp-b2",
              prompt: "Root port is:",
              choices: [
                { id: "a", text: "Best path to root bridge on non-root switch" },
                { id: "b", text: "Always blocked" },
                { id: "c", text: "Access port only" },
                { id: "d", text: "Trunk with native VLAN 1 only" }
              ],
              correctChoiceId: "a",
              explanation: "Each non-root switch has one root port toward root.",
              objectiveId: "CCNA-2.8",
              difficulty: "hard",
            },
            {
              id: "stp-b3",
              prompt: "PortFast should be enabled on:",
              choices: [
                { id: "a", text: "Access ports to end devices" },
                { id: "b", text: "Trunk to core switch" },
                { id: "c", text: "Router interfaces" },
                { id: "d", text: "WAN serial links" }
              ],
              correctChoiceId: "a",
              explanation: "PortFast skips STP timing on edge access ports.",
              objectiveId: "CCNA-2.9",
              difficulty: "hard",
            },
            {
              id: "stp-b4",
              prompt: "Layer 2 loop symptom:",
              choices: [
                { id: "a", text: "Broadcast storm, MAC flapping, high CPU" },
                { id: "b", text: "TTL expired only" },
                { id: "c", text: "APIPA assignment" },
                { id: "d", text: "DNS NXDOMAIN" }
              ],
              correctChoiceId: "a",
              explanation: "Loops cause excessive broadcasts and instability.",
              objectiveId: "CCNA-2.8",
              difficulty: "hard",
            },
            {
              id: "stp-b5",
              prompt: "802.1w refers to:",
              choices: [
                { id: "a", text: "RSTP" },
                { id: "b", text: "WEP" },
                { id: "c", text: "Wi-Fi 6" },
                { id: "d", text: "VTP" }
              ],
              correctChoiceId: "a",
              explanation: "802.1w is Rapid STP.",
              objectiveId: "CCNA-2.9",
              difficulty: "hard",
            },
            {
              id: "stp-b6",
              prompt: "Designated port on a segment:",
              choices: [
                { id: "a", text: "Forwards traffic for that segment toward root" },
                { id: "b", text: "Always blocked" },
                { id: "c", text: "Only on root bridge" },
                { id: "d", text: "Same as alternate port" }
              ],
              correctChoiceId: "a",
              explanation: "One designated port per segment forwards BPDUs/data.",
              objectiveId: "CCNA-2.8",
              difficulty: "hard",
            }
          ],
        
        },
      ],
    },
    {
      id: "ip-connectivity",
      name: "IP Connectivity",
      topics: [
        {
          id: "routing-fundamentals",
          name: "Routing Fundamentals",
          lesson: {
            title: "IP Routing Concepts",
            content: `Routing is the process of forwarding IP packets from source to destination across multiple networks. Routers examine destination IP addresses, consult routing tables, and select the best path based on metrics and administrative distance. Routing occurs at OSI Layer 3.

A routing table contains routes learned dynamically or configured statically. Each entry includes a prefix, next-hop IP or exit interface, administrative distance, and metric. Longest prefix match determines which route applies when multiple entries match a destination.

Connected routes appear automatically when an interface is configured with an IP address and is up/up. Default route (0.0.0.0/0) forwards traffic when no specific match exists. TTL is decremented at each router hop.

Understanding routing tables, next-hop concepts, and the difference between routing and forwarding is core CCNA knowledge.

Routing protocols classify as distance-vector (RIP, EIGRP classic behavior) or link-state (OSPF, IS-IS). Hybrid EIGRP combines features. Metrics differ: hop count (RIP), bandwidth/delay (EIGRP), cost (OSPF).

The forwarding plane (data plane) moves packets; the control plane builds routing tables via protocols or static config. CEF (Cisco Express Forwarding) enables fast switching on routers after the routing table (RIB) is built.

When multiple routes exist to the same prefix, compare administrative distance first, then metric. show ip route displays codes: C connected, S static, O OSPF, etc.`,
          },
          keyFacts: [
            "Routers forward packets based on destination IP and routing table lookup",
            "Longest prefix match selects the most specific route",
            "Administrative distance selects between different route sources",
            "Connected routes are created automatically for active interfaces",
            "Default route 0.0.0.0/0 matches all destinations",
            "TTL is decremented at each router hop",
          ],
          commonMistakes: [
            "Confusing routing table with MAC address table",
            "Assuming routers forward by destination MAC across subnets",
            "Forgetting administrative distance when multiple sources offer same prefix",
            "Mixing up directly connected, static, and dynamic route sources",
            "Ignoring longest prefix match when two routes could apply",
          ],
          examTraps: [
            "Longest prefix match selection among overlapping routes",
            "Administrative distance: static vs OSPF vs connected",
            "Default route 0.0.0.0/0 gateway of last resort",
            "Routing vs switching decision at Layer 3 boundary",
            "Show ip route codes (C, S, O, etc.) interpretation",
          ],
          quiz: [
            {
              id: "routing-fundamentals-q1",
              prompt: "Routing decisions are made using:",
              choices: [
                { id: "a", text: "MAC address table" },
                { id: "b", text: "Routing table based on destination IP" },
                { id: "c", text: "SSID" },
                { id: "d", text: "VLAN ID only" },
              ],
              correctChoiceId: "b",
              explanation: "Routers use destination IP addresses and routing tables for path selection.",
              objectiveId: "CCNA-3.1",
              difficulty: "easy",
            },
            {
              id: "routing-fundamentals-q2",
              prompt: "Longest prefix match means:",
              choices: [
                { id: "a", text: "Lowest metric wins always" },
                { id: "b", text: "Most specific (longest) matching prefix is chosen" },
                { id: "c", text: "Default route always wins" },
                { id: "d", text: "Static routes are ignored" },
              ],
              correctChoiceId: "b",
              explanation: "The route with the longest matching prefix takes precedence.",
              objectiveId: "CCNA-3.2",
              difficulty: "easy",
            },
            {
              id: "routing-fundamentals-q3",
              prompt: "A default route is written as:",
              choices: [
                { id: "a", text: "127.0.0.0/8" },
                { id: "b", text: "0.0.0.0/0" },
                { id: "c", text: "255.255.255.255/32" },
                { id: "d", text: "169.254.0.0/16" },
              ],
              correctChoiceId: "b",
              explanation: "0.0.0.0/0 matches all destinations not covered by more specific routes.",
              objectiveId: "CCNA-3.1",
              difficulty: "easy",
            },
            {
              id: "routing-fundamentals-q4",
              prompt: "Connected routes are:",
              choices: [
                { id: "a", text: "Manually configured only" },
                { id: "b", text: "Automatically added for configured active interfaces" },
                { id: "c", text: "Learned only via OSPF" },
                { id: "d", text: "Always the default route" },
              ],
              correctChoiceId: "b",
              explanation: "When an interface has an IP and is up, its network appears as connected.",
              objectiveId: "CCNA-3.2",
              difficulty: "easy",
            },
            {
              id: "routing-fundamentals-q5",
              prompt: "What happens to TTL at each router?",
              choices: [
                { id: "a", text: "Increased by 1" },
                { id: "b", text: "Decremented by 1" },
                { id: "c", text: "Reset to 255" },
                { id: "d", text: "Unchanged" },
              ],
              correctChoiceId: "b",
              explanation: "TTL decreases by one at each hop; at zero the packet is discarded.",
              objectiveId: "CCNA-3.1",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "routing-fundamentals-f1",
              front: "Longest prefix match?",
              back: "Router chooses the route with the most specific (longest) matching network prefix",
            },
            {
              id: "routing-fundamentals-f2",
              front: "Default route notation?",
              back: "0.0.0.0/0 — gateway of last resort",
            },
            {
              id: "routing-fundamentals-f3",
              front: "Connected route?",
              back: "Automatically added when an interface is configured with IP and is up/up",
            },
            {
              id: "routing-fundamentals-f4",
              front: "Administrative distance vs metric?",
              back: "AD picks route source; metric picks best path within source",
            },
            {
              id: "routing-fundamentals-f4b",
              front: "OSPF route code in show ip route?",
              back: "O",
            },
            {
              id: "routing-fundamentals-f4c",
              front: "Control plane vs data plane?",
              back: "Control builds table; data forwards packets",
            }
          ],
          objectives: [
            "CCNA-3.1",
            "CCNA-3.2"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "routing-fundamentals-b1",
              prompt: "OSPF administrative distance on Cisco?",
              choices: [
                { id: "a", text: "90" },
                { id: "b", text: "110" },
                { id: "c", text: "120" },
                { id: "d", text: "1" }
              ],
              correctChoiceId: "b",
              explanation: "OSPF internal routes AD 110.",
              objectiveId: "CCNA-3.2",
              difficulty: "medium",
            },
            {
              id: "routing-fundamentals-b2",
              prompt: "EIGRP AD on Cisco?",
              choices: [
                { id: "a", text: "90" },
                { id: "b", text: "110" },
                { id: "c", text: "120" },
                { id: "d", text: "170" }
              ],
              correctChoiceId: "a",
              explanation: "Internal EIGRP AD is 90.",
              objectiveId: "CCNA-3.1",
              difficulty: "hard",
            },
            {
              id: "routing-fundamentals-b3",
              prompt: "Which is link-state?",
              choices: [
                { id: "a", text: "RIP" },
                { id: "b", text: "OSPF" },
                { id: "c", text: "Static routes" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "b",
              explanation: "OSPF is link-state.",
              objectiveId: "CCNA-3.2",
              difficulty: "hard",
            },
            {
              id: "routing-fundamentals-b4",
              prompt: "RIB stands for:",
              choices: [
                { id: "a", text: "Routing Information Base" },
                { id: "b", text: "Router Interface Bridge" },
                { id: "c", text: "Remote IP Binding" },
                { id: "d", text: "Route Injection Block" }
              ],
              correctChoiceId: "a",
              explanation: "RIB is the routing table used to build FIB.",
              objectiveId: "CCNA-3.1",
              difficulty: "hard",
            },
            {
              id: "routing-fundamentals-b5",
              prompt: "Equal-cost multipath (ECMP)?",
              choices: [
                { id: "a", text: "Load-balance across multiple best paths" },
                { id: "b", text: "Always uses static routes only" },
                { id: "c", text: "Disables OSPF" },
                { id: "d", text: "Requires NAT" }
              ],
              correctChoiceId: "a",
              explanation: "ECMP forwards across equal-metric paths.",
              objectiveId: "CCNA-3.2",
              difficulty: "hard",
            },
            {
              id: "routing-fundamentals-b6",
              prompt: "A packet's destination IP is used for:",
              choices: [
                { id: "a", text: "Routing table lookup" },
                { id: "b", text: "MAC table lookup on all devices" },
                { id: "c", text: "SSID selection" },
                { id: "d", text: "VLAN tag assignment on host" }
              ],
              correctChoiceId: "a",
              explanation: "Routers route based on destination IP.",
              objectiveId: "CCNA-3.1",
              difficulty: "hard",
            }
          ],
          assignments: [
            {
              id: "static-route-sim-intro",
              title: "Static Route Scenario Drill",
              type: "simulator",
              instructions: "Practice choosing correct static route statements for given topologies in the static route chooser drill.",
              estimatedMinutes: 15,
              simulatorId: "static-route-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["routing-fundamentals", "static-routes"],
              order: 1,
            }
          ],
        
        },
        {
          id: "static-routes",
          name: "Static Routes",
          lesson: {
            title: "Configuring Static Routing",
            content: `Static routes are manually configured entries that tell a router how to reach specific networks. They use minimal CPU and bandwidth compared to dynamic routing protocols but require manual updates when topology changes. Static routes suit small networks, stub networks, and default routes toward ISPs.

Configure a static route on Cisco IOS with ip route network mask next-hop or exit-interface. Floating static routes have a higher administrative distance than dynamic routes and activate only when the primary route fails.

A next-hop address is preferred on multi-access networks like Ethernet to avoid ARP issues. Default static route ip route 0.0.0.0 0.0.0.0 next-hop provides Internet exit. Verify with show ip route static and test with traceroute or ping.

Recursive lookups occur when a route points to a next-hop IP—the router must resolve that next-hop via another route. Directly connected next-hops avoid some recursion issues. Null0 routes summarize black-hole routes to prevent routing loops in redistribution scenarios.

Verify static routes with show running-config | section ip route, show ip route static, and traceroute. Remove with no ip route. Floating static backup example: ip route 0.0.0.0 0.0.0.0 203.0.113.1 200 (AD 200) backing up OSPF default.

IPv6 static routes use ipv6 route prefix/length next-hop. Practice both IPv4 and IPv6 static syntax for CCNA.`,
          },
          keyFacts: [
            "Static routes are manually configured; no protocol overhead",
            "Syntax: ip route network mask next-hop-or-interface",
            "Default static route: ip route 0.0.0.0 0.0.0.0 next-hop",
            "Floating static uses higher AD to serve as backup route",
            "Administrative distance for static route defaults to 1 on Cisco",
            "Next-hop recommended on multi-access networks like Ethernet",
          ],
          commonMistakes: [
            "Pointing static route next-hop to unreachable or wrong interface",
            "Forgetting exit interface on point-to-point links when next-hop omitted",
            "Not adding reciprocal routes causing one-way connectivity",
            "Confusing floating static (higher AD) with primary static route",
            "Using static routes in large dynamic networks without documentation",
          ],
          examTraps: [
            "ip route destination mask next-hop vs exit-interface syntax",
            "Floating static backup route with administrative distance > 1",
            "Default static route propagation and gateway of last resort",
            "Recursive lookup failure when next-hop is unreachable",
            "Null0 static route for summarization and blackholing",
          ],
          quiz: [
            {
              id: "static-routes-q1",
              prompt: "Administrative distance of a static route on Cisco IOS defaults to:",
              choices: [
                { id: "a", text: "0" },
                { id: "b", text: "1" },
                { id: "c", text: "90" },
                { id: "d", text: "110" },
              ],
              correctChoiceId: "b",
              explanation: "Static routes have AD 1; connected routes have AD 0.",
              objectiveId: "CCNA-3.3",
              difficulty: "easy",
            },
            {
              id: "static-routes-q2",
              prompt: "A floating static route has:",
              choices: [
                { id: "a", text: "Lower AD than OSPF" },
                { id: "b", text: "Higher AD than the primary route" },
                { id: "c", text: "No next-hop" },
                { id: "d", text: "Only IPv6 support" },
              ],
              correctChoiceId: "b",
              explanation: "Floating statics use elevated AD so they activate only when primary routes disappear.",
              objectiveId: "CCNA-3.4",
              difficulty: "easy",
            },
            {
              id: "static-routes-q3",
              prompt: "Default route configuration:",
              choices: [
                { id: "a", text: "ip route 127.0.0.0 255.0.0.0" },
                { id: "b", text: "ip route 0.0.0.0 0.0.0.0 203.0.113.1" },
                { id: "c", text: "ip route 255.255.255.255" },
                { id: "d", text: "no ip routing" },
              ],
              correctChoiceId: "b",
              explanation: "0.0.0.0/0 with next-hop defines a default route.",
              objectiveId: "CCNA-3.3",
              difficulty: "easy",
            },
            {
              id: "static-routes-q4",
              prompt: "Static routes are best for:",
              choices: [
                { id: "a", text: "Large dynamic datacenter cores only" },
                { id: "b", text: "Stub networks and simple topologies" },
                { id: "c", text: "Replacing all MAC tables" },
                { id: "d", text: "Wireless SSIDs" },
              ],
              correctChoiceId: "b",
              explanation: "Statics work well where topology is stable and small.",
              objectiveId: "CCNA-3.4",
              difficulty: "easy",
            },
            {
              id: "static-routes-q5",
              prompt: "On multi-access networks, static routes should specify:",
              choices: [
                { id: "a", text: "Only exit interface" },
                { id: "b", text: "Next-hop IP address" },
                { id: "c", text: "MAC address" },
                { id: "d", text: "SSID" },
              ],
              correctChoiceId: "b",
              explanation: "Next-hop IP avoids ARP resolution problems on broadcast segments.",
              objectiveId: "CCNA-3.3",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "static-routes-f1",
              front: "Static route Cisco syntax?",
              back: "ip route network mask next-hop-ip or exit-interface",
            },
            {
              id: "static-routes-f2",
              front: "Floating static route?",
              back: "Backup static route with higher AD, active only when primary fails",
            },
            {
              id: "static-routes-f3",
              front: "Static route AD on Cisco?",
              back: "1 (connected routes are 0)",
            },
            {
              id: "static-routes-f4",
              front: "Null0 route purpose?",
              back: "Discard traffic matching prefix (black hole)",
            },
            {
              id: "static-routes-f4b",
              front: "Verify static routes?",
              back: "show ip route static",
            },
            {
              id: "static-routes-f4c",
              front: "Floating static AD example?",
              back: "Higher than dynamic protocol (e.g., 200)",
            }
          ],
          objectives: [
            "CCNA-3.3",
            "CCNA-3.4"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
          questionBank: [
            {
              id: "static-routes-b1",
              prompt: "Recursive routing lookup means:",
              choices: [
                { id: "a", text: "Resolve next-hop via another route entry" },
                { id: "b", text: "Use MAC table only" },
                { id: "c", text: "Disable ICMP" },
                { id: "d", text: "Assign APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "Router may need a second lookup to reach next-hop.",
              objectiveId: "CCNA-3.4",
              difficulty: "medium",
            },
            {
              id: "static-routes-b2",
              prompt: "Remove static route:",
              choices: [
                { id: "a", text: "no ip route ..." },
                { id: "b", text: "delete static" },
                { id: "c", text: "clear ip route" },
                { id: "d", text: "shutdown route" }
              ],
              correctChoiceId: "a",
              explanation: "Negate with no ip route matching statement.",
              objectiveId: "CCNA-3.3",
              difficulty: "hard",
            },
            {
              id: "static-routes-b3",
              prompt: "Static route AD 1 loses to:",
              choices: [
                { id: "a", text: "Connected route AD 0" },
                { id: "b", text: "Nothing ever" },
                { id: "c", text: "All dynamic routes" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "Connected routes have AD 0 and win over static.",
              objectiveId: "CCNA-3.4",
              difficulty: "hard",
            },
            {
              id: "static-routes-b4",
              prompt: "Point-to-point serial link static route can use:",
              choices: [
                { id: "a", text: "Exit interface or next-hop" },
                { id: "b", text: "SSID only" },
                { id: "c", text: "VLAN tag" },
                { id: "d", text: "MAC address" }
              ],
              correctChoiceId: "a",
              explanation: "Point-to-point links often use exit interface.",
              objectiveId: "CCNA-3.3",
              difficulty: "hard",
            },
            {
              id: "static-routes-b5",
              prompt: "Default static route advertises:",
              choices: [
                { id: "a", text: "Gateway of last resort" },
                { id: "b", text: "Loopback only" },
                { id: "c", text: "Multicast routing" },
                { id: "d", text: "VTP domain" }
              ],
              correctChoiceId: "a",
              explanation: "0.0.0.0/0 is default route.",
              objectiveId: "CCNA-3.4",
              difficulty: "hard",
            },
            {
              id: "static-routes-b6",
              prompt: "ipv6 route 2001:db8::/64 2001:db8:1::1 configures:",
              choices: [
                { id: "a", text: "IPv6 static route" },
                { id: "b", text: "IPv4 NAT" },
                { id: "c", text: "OSPFv3 only" },
                { id: "d", text: "DHCPv6 server" }
              ],
              correctChoiceId: "a",
              explanation: "ipv6 route syntax for static IPv6 routing.",
              objectiveId: "CCNA-3.3",
              difficulty: "hard",
            }
          ],
          externalResources: [
            {
              id: "packet-tracer",
              name: "Cisco Packet Tracer",
              url: "https://www.netacad.com/cisco-packet-tracer",
              cost: "free",
              platform: "windows",
              installNotes: "Create a free Cisco Networking Academy account to download Packet Tracer.",
            }
          ],
          assignments: [
            {
              id: "static-route-pt-lab",
              title: "Packet Tracer: Static Route Lab",
              type: "external-lab",
              instructions: "1. Build a three-router topology with multiple LAN subnets.\n2. Configure interfaces and PC gateways.\n3. Add static routes (or default routes) so all networks are reachable.\n4. Verify with ping and traceroute; add a floating static backup if time permits.",
              estimatedMinutes: 50,
              externalResourceId: "packet-tracer",
              completionCriteria: [
                "All subnets reachable end-to-end",
                "Static routes documented",
                "traceroute shows expected path"
              ],
              relatedTopicIds: ["static-routes", "routing-fundamentals"],
              order: 1,
            }
          ],
        
        },
        {
          id: "ospf-basics",
          name: "OSPF Basics",
          lesson: {
            title: "OSPF Fundamentals",
            content: `Open Shortest Path First (OSPF) is a link-state interior gateway protocol that uses Dijkstra's algorithm to compute the shortest path tree. OSPF routers flood Link State Advertisements (LSAs) to build a synchronized topology database within an area. OSPF is classless, supports VLSM, and uses cost (based on bandwidth) as its metric.

All routers in an area must have identical link-state databases. Area 0 is the backbone; all other areas connect to it. Router ID is a 32-bit value, often derived from a loopback or highest active IP. Neighbor adjacencies form via Hello packets sent to 224.0.0.5.

Designated Router (DR) and Backup DR reduce adjacency count on multi-access networks like Ethernet. Configure with router ospf process-id and network statements using wildcard masks.

OSPF is a link-state IGP using Dijkstra SPF to build a topology map. Routers form adjacencies on shared segments; DR/BDR election reduces LSA flooding on multi-access networks like Ethernet. Router ID is chosen from manual config, highest loopback IP, or highest active interface IP.

OSPF areas: area 0 (backbone) is required; other areas connect to area 0. LSA types describe networks and external routes—CCNA focuses on concepts more than every LSA type detail.

Enable with router ospf 1, network statements or interface ip ospf commands. Verify neighbors: show ip ospf neighbor. Cost is based on interface bandwidth reference.`,
          },
          keyFacts: [
            "OSPF is a link-state protocol using cost as metric",
            "Area 0 is the OSPF backbone; all areas connect to it",
            "Router ID identifies each OSPF router (32-bit, often loopback IP)",
            "Hello packets discover neighbors on 224.0.0.5",
            "DR/BDR reduce full adjacencies on multi-access segments",
            "Wildcard mask in network statements is inverse of subnet mask",
          ],
          guidedExample: {
            title: "Enable Single-Area OSPF on Three Routers",
            steps: [
              "Assign IP addresses on all router interfaces and verify Layer 3 connectivity with show ip interface brief.",
              "Enable OSPF process 1 on each router: router ospf 1.",
              "Advertise networks using wildcard masks: network 192.168.1.0 0.0.0.255 area 0.",
              "Optionally set router-id manually: router-id 1.1.1.1 for predictable DR election.",
              "Verify neighbor adjacencies: show ip ospf neighbor—expect Full state with DR/BDR on Ethernet segments.",
              "Confirm OSPF routes in the routing table with show ip route ospf and test end-to-end ping.",
            ],
          },
          commonMistakes: [
            "Using subnet mask instead of wildcard mask in network statements",
            "Placing interfaces in the wrong OSPF area (non-zero area not connected to area 0)",
            "Expecting OSPF adjacencies when interface subnets do not match or interfaces are shutdown",
            "Confusing OSPF process ID (locally significant) with area ID or AS number",
            "Ignoring DR/BDR election on multi-access networks when debugging partial adjacencies",
          ],
          examTraps: [
            "Wildcard mask questions inverting subnet mask bits (0.0.0.255 for /24, not 255.255.255.0)",
            "Router ID selection order: manual router-id beats highest loopback beats highest active interface",
            "Cost calculation traps using reference bandwidth / interface bandwidth",
            "Hello multicast address 224.0.0.5 vs 224.0.0.6 (DR/BDR) confusion",
            "Area 0 backbone rule—virtual links are beyond CCNA but area connectivity questions appear",
          ],
          realWorldScenario: "A regional office has three routers connecting HQ, a warehouse LAN, and a backup Internet link. You enable OSPF area 0 on all three, set loopback router IDs for stability, and verify Full adjacencies before cutover. When the warehouse subnet disappears from HQ routing tables, you check show ip ospf neighbor, confirm the warehouse interface is in area 0, and fix a mismatched hello/dead timer on one link.",
          estimatedStudyMinutes: 45,
          difficulty: "hard",
          prerequisites: ["routing-fundamentals", "static-routes"],
          quiz: [
            {
              id: "ospf-basics-q1",
              prompt: "OSPF is classified as:",
              choices: [
                { id: "a", text: "Distance vector" },
                { id: "b", text: "Link-state" },
                { id: "c", text: "Path vector" },
                { id: "d", text: "Hybrid wireless" },
              ],
              correctChoiceId: "b",
              explanation: "OSPF builds a complete topology map using link-state advertisements.",
              objectiveId: "CCNA-3.5",
              difficulty: "easy",
            },
            {
              id: "ospf-basics-q2",
              prompt: "Which OSPF area must other areas connect through?",
              choices: [
                { id: "a", text: "Area 1" },
                { id: "b", text: "Area 0" },
                { id: "c", text: "Area 51" },
                { id: "d", text: "Stub area only" },
              ],
              correctChoiceId: "b",
              explanation: "Area 0 is the backbone; inter-area routing goes through it.",
              objectiveId: "CCNA-3.6",
              difficulty: "easy",
            },
            {
              id: "ospf-basics-q3",
              prompt: "OSPF cost is primarily based on:",
              choices: [
                { id: "a", text: "Hop count" },
                { id: "b", text: "Interface bandwidth" },
                { id: "c", text: "SSID" },
                { id: "d", text: "MAC address" },
              ],
              correctChoiceId: "b",
              explanation: "Cost = reference bandwidth / interface bandwidth (default ref 100 Mbps).",
              objectiveId: "CCNA-3.5",
              difficulty: "easy",
            },
            {
              id: "ospf-basics-q4",
              prompt: "OSPF Hello packets are sent to:",
              choices: [
                { id: "a", text: "255.255.255.255" },
                { id: "b", text: "224.0.0.5" },
                { id: "c", text: "127.0.0.1" },
                { id: "d", text: "239.255.255.255" },
              ],
              correctChoiceId: "b",
              explanation: "224.0.0.5 is AllSPFRouters multicast address.",
              objectiveId: "CCNA-3.6",
              difficulty: "easy",
            },
            {
              id: "ospf-basics-q5",
              prompt: "Wildcard mask for 192.168.1.0/24 in OSPF network command:",
              choices: [
                { id: "a", text: "255.255.255.0" },
                { id: "b", text: "0.0.0.255" },
                { id: "c", text: "0.0.0.0" },
                { id: "d", text: "255.0.0.0" },
              ],
              correctChoiceId: "b",
              explanation: "Wildcard 0.0.0.255 matches the /24—inverse of the subnet mask.",
              objectiveId: "CCNA-3.5",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "ospf-basics-f1",
              front: "OSPF area 0?",
              back: "Backbone area—all other OSPF areas must connect to it",
            },
            {
              id: "ospf-basics-f2",
              front: "OSPF metric?",
              back: "Cost based on interface bandwidth (lower cost = preferred path)",
            },
            {
              id: "ospf-basics-f3",
              front: "DR/BDR purpose?",
              back: "Reduce OSPF adjacencies on multi-access networks like Ethernet",
            },
            {
              id: "ospf-basics-f4",
              front: "OSPF area 0 is:",
              back: "Backbone — required for multi-area OSPF",
            },
            {
              id: "ospf-basics-f4b",
              front: "DR/BDR elected on:",
              back: "Multi-access broadcast segments (e.g., Ethernet)",
            },
            {
              id: "ospf-basics-f4c",
              front: "Verify OSPF neighbors?",
              back: "show ip ospf neighbor",
            }
          ],
          objectives: [
            "CCNA-3.5",
            "CCNA-3.6"
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          questionBank: [
            {
              id: "ospf-basics-b1",
              prompt: "OSPF metric called:",
              choices: [
                { id: "a", text: "Cost" },
                { id: "b", text: "Hop count only" },
                { id: "c", text: "Delay only" },
                { id: "d", text: "SSID" }
              ],
              correctChoiceId: "a",
              explanation: "OSPF uses cost based on bandwidth.",
              objectiveId: "CCNA-3.6",
              difficulty: "medium",
            },
            {
              id: "ospf-basics-b2",
              prompt: "All OSPF areas must connect to:",
              choices: [
                { id: "a", text: "Area 0" },
                { id: "b", text: "Area 1 only" },
                { id: "c", text: "External AS" },
                { id: "d", text: "VLAN 1" }
              ],
              correctChoiceId: "a",
              explanation: "Area 0 is the OSPF backbone.",
              objectiveId: "CCNA-3.5",
              difficulty: "medium",
            },
            {
              id: "ospf-basics-b3",
              prompt: "OSPF router ID selection prefers:",
              choices: [
                { id: "a", text: "Manually configured RID" },
                { id: "b", text: "Lowest MAC" },
                { id: "c", text: "Highest VLAN" },
                { id: "d", text: "DNS name" }
              ],
              correctChoiceId: "a",
              explanation: "Manual router-id wins if configured.",
              objectiveId: "CCNA-3.6",
              difficulty: "hard",
            },
            {
              id: "ospf-basics-b4",
              prompt: "OSPF adjacency state Full means:",
              choices: [
                { id: "a", text: "Databases synchronized, ready to route" },
                { id: "b", text: "No hello packets" },
                { id: "c", text: "Static route only" },
                { id: "d", text: "APIPA mode" }
              ],
              correctChoiceId: "a",
              explanation: "Full state indicates complete adjacency.",
              objectiveId: "CCNA-3.5",
              difficulty: "hard",
            },
            {
              id: "ospf-basics-b5",
              prompt: "Hello protocol purpose:",
              choices: [
                { id: "a", text: "Discover neighbors and maintain adjacencies" },
                { id: "b", text: "Encrypt LSAs" },
                { id: "c", text: "Assign IP addresses" },
                { id: "d", text: "NAT translation" }
              ],
              correctChoiceId: "a",
              explanation: "Hellos detect neighbors on links.",
              objectiveId: "CCNA-3.6",
              difficulty: "hard",
            },
            {
              id: "ospf-basics-b6",
              prompt: "Multi-access OSPF networks elect:",
              choices: [
                { id: "a", text: "DR and BDR" },
                { id: "b", text: "Root bridge" },
                { id: "c", text: "VTP server" },
                { id: "d", text: "DHCP relay" }
              ],
              correctChoiceId: "a",
              explanation: "DR/BDR reduce adjacency count on LANs.",
              objectiveId: "CCNA-3.5",
              difficulty: "hard",
            },
            {
              id: "ospf-basics-b7",
              prompt: "OSPF Hello packets use multicast address:",
              choices: [
                { id: "a", text: "224.0.0.5" },
                { id: "b", text: "224.0.0.1" },
                { id: "c", text: "255.255.255.255" },
                { id: "d", text: "239.255.255.255" }
              ],
              correctChoiceId: "a",
              explanation: "224.0.0.5 is AllSPFRouters.",
              objectiveId: "CCNA-3.6",
              difficulty: "hard",
            },
            {
              id: "ospf-basics-b8",
              prompt: "Wildcard mask for 10.0.0.0/8 in OSPF network command?",
              choices: [
                { id: "a", text: "0.255.255.255" },
                { id: "b", text: "255.0.0.0" },
                { id: "c", text: "0.0.0.255" },
                { id: "d", text: "255.255.255.255" }
              ],
              correctChoiceId: "a",
              explanation: "Wildcard 0.255.255.255 matches the /8—inverse of 255.0.0.0.",
              objectiveId: "CCNA-3.5",
              difficulty: "hard",
            }
          ],
          externalResources: [
            {
              id: "packet-tracer",
              name: "Cisco Packet Tracer",
              url: "https://www.netacad.com/cisco-packet-tracer",
              cost: "free",
              platform: "windows",
              installNotes: "Create a free Cisco Networking Academy account to download Packet Tracer.",
            },
            {
              id: "gns3",
              name: "GNS3",
              url: "https://www.gns3.com/",
              cost: "free",
              platform: "any",
              installNotes: "GNS3 requires separate IOS images; use for advanced topology practice.",
            }
          ],
          assignments: [
            {
              id: "ospf-pt-lab",
              title: "Packet Tracer: Single-Area OSPF",
              type: "external-lab",
              instructions: "1. Configure three routers in area 0.\n2. Enable OSPF process 1 on all interfaces.\n3. Verify adjacencies with show ip ospf neighbor.\n4. Confirm routes in routing table and test end-to-end ping.",
              estimatedMinutes: 60,
              externalResourceId: "packet-tracer",
              completionCriteria: [
                "OSPF adjacencies reach Full state",
                "OSPF routes in routing table",
                "End-to-end connectivity verified"
              ],
              relatedTopicIds: ["ospf-basics"],
              order: 1,
            },
            {
              id: "ospf-neighbor-case",
              title: "Case Study: OSPF Neighbor Failure",
              type: "case-study",
              instructions: "Interactive troubleshooting: OSPF neighbors won't form between two routers.",
              estimatedMinutes: 15,
              caseStudyId: "ccna-case-ospf",
              completionCriteria: ["Completed interactive case study"],
              relatedTopicIds: ["ospf-basics"],
              order: 2,
            }
          ],
        
        },
        {
          id: "nat",
          name: "NAT",
          lesson: {
            title: "Network Address Translation",
            content: `Network Address Translation (NAT) modifies IP address information in packet headers as traffic crosses a router, enabling private RFC 1918 addresses to access the public Internet using fewer public IPs. Static NAT maps one private IP to one public IP permanently. PAT (NAT overload) maps many private addresses to one public IP using unique source port numbers.

Inside local is the actual private address on the internal host. Inside global is the translated public address seen externally. Configure with ip nat inside on the internal interface and ip nat outside on the external interface.

NAT translations time out after inactivity. NAT is typically deployed at the network edge toward the ISP and can complicate VPNs and protocols that embed IP addresses in payload.

NAT types: static NAT (one-to-one), dynamic NAT (pool), PAT/NAT overload (many inside to one outside IP using ports). Inside local vs inside global and outside local vs outside global terminology maps private to public representations.

Configure PAT: ip nat inside on internal interface, ip nat outside on external, access-list defining inside sources, ip nat inside source list 1 interface g0/0 overload. Verify with show ip nat translations.

NAT breaks end-to-end connectivity for some protocols but conserves IPv4 addresses. IPv6 reduces NAT need but CCNA still tests PAT thoroughly.`,
          },
          keyFacts: [
            "NAT translates private addresses to public addresses at a router",
            "PAT (overload) maps many internal hosts to one public IP using ports",
            "Inside interface: ip nat inside; outside interface: ip nat outside",
            "Static NAT: one-to-one permanent mapping",
            "Inside local = private address; inside global = translated public address",
            "NAT is typically deployed at the network edge toward the ISP",
          ],
          commonMistakes: [
            "Applying ip nat inside and outside on wrong interfaces",
            "Forgetting overload keyword for PAT many-to-one",
            "Confusing inside local vs inside global terminology",
            "NAT order of operations with ACL—know inside source list flow",
            "Expecting NAT to fix routing problems without proper routes",
          ],
          examTraps: [
            "Inside local vs inside global vs outside local vs outside global",
            "PAT/overload using interface IP vs NAT pool",
            "Which interface is inside vs outside in a given topology diagram",
            "Static NAT one-to-one vs dynamic pool vs PAT",
            "show ip nat translations reading real exam-style output",
          ],
          quiz: [
            {
              id: "nat-q1",
              prompt: "PAT is also known as:",
              choices: [
                { id: "a", text: "Static NAT" },
                { id: "b", text: "NAT overload" },
                { id: "c", text: "DNS translation" },
                { id: "d", text: "VLAN tagging" },
              ],
              correctChoiceId: "b",
              explanation: "Port Address Translation overloads a single public IP with many internal hosts.",
              objectiveId: "CCNA-3.7",
              difficulty: "easy",
            },
            {
              id: "nat-q2",
              prompt: "Which interface command marks the LAN side of NAT?",
              choices: [
                { id: "a", text: "ip nat outside" },
                { id: "b", text: "ip nat inside" },
                { id: "c", text: "ip nat pool" },
                { id: "d", text: "ip route 0.0.0.0" },
              ],
              correctChoiceId: "b",
              explanation: "ip nat inside designates the internal (private) interface.",
              objectiveId: "CCNA-3.8",
              difficulty: "easy",
            },
            {
              id: "nat-q3",
              prompt: "Static NAT provides:",
              choices: [
                { id: "a", text: "Many-to-one using ports" },
                { id: "b", text: "One-to-one fixed mapping" },
                { id: "c", text: "No translation" },
                { id: "d", text: "IPv6 only" },
              ],
              correctChoiceId: "b",
              explanation: "Static NAT permanently maps one private IP to one public IP.",
              objectiveId: "CCNA-3.7",
              difficulty: "easy",
            },
            {
              id: "nat-q4",
              prompt: "Inside local address refers to:",
              choices: [
                { id: "a", text: "Public ISP address" },
                { id: "b", text: "Actual private address on internal host" },
                { id: "c", text: "DNS name" },
                { id: "d", text: "MAC address" },
              ],
              correctChoiceId: "b",
              explanation: "Inside local is the real private IP before translation.",
              objectiveId: "CCNA-3.8",
              difficulty: "easy",
            },
            {
              id: "nat-q5",
              prompt: "Primary reason enterprises use NAT:",
              choices: [
                { id: "a", text: "Increase broadcast domains" },
                { id: "b", text: "Conserve public IPv4 addresses" },
                { id: "c", text: "Replace OSPF" },
                { id: "d", text: "Enable STP" },
              ],
              correctChoiceId: "b",
              explanation: "NAT allows many private hosts to share one or few public IPs.",
              objectiveId: "CCNA-3.7",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "nat-f1",
              front: "PAT vs static NAT?",
              back: "PAT: many private hosts to one public IP via ports. Static NAT: one private to one public",
            },
            {
              id: "nat-f2",
              front: "NAT inside vs outside?",
              back: "Inside faces private network; outside faces public/ISP network",
            },
            {
              id: "nat-f3",
              front: "Inside local vs inside global?",
              back: "Local = actual private address; global = translated address seen externally",
            },
            {
              id: "nat-f4",
              front: "PAT also called?",
              back: "NAT overload (many-to-one using ports)",
            },
            {
              id: "nat-f4b",
              front: "Inside global address?",
              back: "Public representation of inside host",
            },
            {
              id: "nat-f4c",
              front: "Verify NAT translations?",
              back: "show ip nat translations",
            }
          ],
          objectives: [
            "CCNA-3.7",
            "CCNA-3.8"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "nat-b1",
              prompt: "PAT uses which additional field?",
              choices: [
                { id: "a", text: "TCP/UDP port numbers" },
                { id: "b", text: "VLAN ID" },
                { id: "c", text: "SSID" },
                { id: "d", text: "MAC only" }
              ],
              correctChoiceId: "a",
              explanation: "PAT multiplexes using L4 ports.",
              objectiveId: "CCNA-3.8",
              difficulty: "medium",
            },
            {
              id: "nat-b2",
              prompt: "ip nat inside is configured on:",
              choices: [
                { id: "a", text: "Inside interface facing private network" },
                { id: "b", text: "Outside ISP interface only" },
                { id: "c", text: "Loopback only" },
                { id: "d", text: "Console port" }
              ],
              correctChoiceId: "a",
              explanation: "Mark inside on private-side interfaces.",
              objectiveId: "CCNA-3.7",
              difficulty: "hard",
            },
            {
              id: "nat-b3",
              prompt: "Static NAT maps:",
              choices: [
                { id: "a", text: "One inside local to one inside global" },
                { id: "b", text: "Many to many automatically" },
                { id: "c", text: "MAC to IP" },
                { id: "d", text: "VLAN to subnet" }
              ],
              correctChoiceId: "a",
              explanation: "Static NAT is 1:1 fixed mapping.",
              objectiveId: "CCNA-3.8",
              difficulty: "hard",
            },
            {
              id: "nat-b4",
              prompt: "Outside global address is:",
              choices: [
                { id: "a", text: "Public address as seen by outside world" },
                { id: "b", text: "Private RFC1918 only" },
                { id: "c", text: "Loopback" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "Outside global is public routable representation.",
              objectiveId: "CCNA-3.7",
              difficulty: "hard",
            },
            {
              id: "nat-b5",
              prompt: "NAT overload conserves:",
              choices: [
                { id: "a", text: "Public IPv4 addresses" },
                { id: "b", text: "MAC addresses" },
                { id: "c", text: "VLAN IDs" },
                { id: "d", text: "STP BPDUs" }
              ],
              correctChoiceId: "a",
              explanation: "PAT allows many hosts behind one public IP.",
              objectiveId: "CCNA-3.8",
              difficulty: "hard",
            },
            {
              id: "nat-b6",
              prompt: "Which breaks some VPN protocols without traversal helpers?",
              choices: [
                { id: "a", text: "NAT" },
                { id: "b", text: "STP" },
                { id: "c", text: "VTP" },
                { id: "d", text: "802.1X" }
              ],
              correctChoiceId: "a",
              explanation: "NAT can interfere with IPsec unless passthrough/ALG used.",
              objectiveId: "CCNA-3.7",
              difficulty: "hard",
            }
          ],
          assignments: [
            {
              id: "nat-type-sim",
              title: "NAT Type Identifier Drill",
              type: "simulator",
              instructions: "Classify NAT scenarios as static, dynamic, or PAT overload in the NAT type drill until scoring 80%+.",
              estimatedMinutes: 12,
              simulatorId: "nat-type-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["nat"],
              order: 1,
            }
          ],
        
        },
      ],
    },
    {
      id: "ip-services",
      name: "IP Services",
      topics: [
        {
          id: "dhcp",
          name: "DHCP",
          lesson: {
            title: "Dynamic Host Configuration Protocol",
            content: `DHCP automatically assigns IP addresses, subnet masks, default gateways, DNS servers, and other options to clients. DHCP uses UDP: server port 67, client port 68. The DORA process—Discover, Offer, Request, Acknowledge—leases addresses for a configurable time.

A DHCP scope defines the range of addresses a server can assign on a subnet. Exclusions reserve addresses for static devices. DHCP relay (ip helper-address on Cisco) forwards DHCP broadcasts from remote subnets to a central DHCP server.

Without relay or a local server, clients may fall back to APIPA (169.254.x.x). Security considerations include DHCP snooping to prevent rogue servers.

DHCP DORA: Discover (broadcast), Offer, Request, Acknowledge. Relay agents (ip helper-address on Cisco) forward broadcasts to remote DHCP servers. DHCP snooping on switches mitigates rogue servers on access VLANs.

Lease time, default gateway (option 3), DNS servers (option 6), and domain name are common options. Reservations map MAC to fixed IP. Verify client lease with ipconfig /all or show ip dhcp binding on server/router.

DHCPv6 uses similar concepts with ICMPv6 and DHCPv6 messages for IPv6 environments.`,
          },
          keyFacts: [
            "DHCP DORA: Discover, Offer, Request, Acknowledge",
            "UDP ports 67 (server) and 68 (client)",
            "Default gateway and DNS are common DHCP options",
            "ip helper-address forwards DHCP to a remote server",
            "Lease time controls how long an address assignment lasts",
            "APIPA (169.254.x.x) occurs when DHCP fails",
          ],
          commonMistakes: [
            "DHCP pool excluding network or broadcast addresses incorrectly",
            "Forgetting ip helper-address or DHCP relay for remote subnets",
            "Lease scope not matching subnet mask or gateway",
            "Confusing DORA process order (Discover, Offer, Request, Acknowledge)",
            "Not reserving addresses for servers still in dynamic pool",
          ],
          examTraps: [
            "DORA sequence and which message is broadcast vs unicast",
            "ip helper-address UDP ports 67/68 relay to remote DHCP server",
            "APIPA 169.254.x.x when DHCP fails",
            "Excluded-address range configuration on Cisco IOS",
            "DHCP snooping trusted vs untrusted port concept",
          ],
          quiz: [
            {
              id: "dhcp-q1",
              prompt: "DHCP uses which transport protocol and ports?",
              choices: [
                { id: "a", text: "TCP 80/443" },
                { id: "b", text: "UDP 67/68" },
                { id: "c", text: "ICMP" },
                { id: "d", text: "TCP 25" },
              ],
              correctChoiceId: "b",
              explanation: "DHCP runs over UDP with server on 67 and client on 68.",
              objectiveId: "CCNA-4.1",
              difficulty: "easy",
            },
            {
              id: "dhcp-q2",
              prompt: "First message in DHCP process from client:",
              choices: [
                { id: "a", text: "Acknowledge" },
                { id: "b", text: "Offer" },
                { id: "c", text: "Discover" },
                { id: "d", text: "Request" },
              ],
              correctChoiceId: "c",
              explanation: "Clients begin with a DHCP Discover broadcast.",
              objectiveId: "CCNA-4.2",
              difficulty: "easy",
            },
            {
              id: "dhcp-q3",
              prompt: "ip helper-address on a Cisco router:",
              choices: [
                { id: "a", text: "Enables NAT" },
                { id: "b", text: "Forwards DHCP broadcasts to a specified server" },
                { id: "c", text: "Configures OSPF" },
                { id: "d", text: "Creates VLANs" },
              ],
              correctChoiceId: "b",
              explanation: "Helper address relays BOOTP/DHCP to a remote server IP.",
              objectiveId: "CCNA-4.1",
              difficulty: "easy",
            },
            {
              id: "dhcp-q4",
              prompt: "When DHCP fails, Windows clients often get:",
              choices: [
                { id: "a", text: "10.0.0.1" },
                { id: "b", text: "169.254.x.x" },
                { id: "c", text: "127.0.0.1" },
                { id: "d", text: "224.0.0.1" },
              ],
              correctChoiceId: "b",
              explanation: "APIPA assigns link-local 169.254.0.0/16 addresses.",
              objectiveId: "CCNA-4.2",
              difficulty: "easy",
            },
            {
              id: "dhcp-q5",
              prompt: "A DHCP scope defines:",
              choices: [
                { id: "a", text: "OSPF area" },
                { id: "b", text: "Range of assignable IP addresses" },
                { id: "c", text: "STP priority" },
                { id: "d", text: "SSID name" },
              ],
              correctChoiceId: "b",
              explanation: "The scope is the pool of addresses the server can lease on a subnet.",
              objectiveId: "CCNA-4.1",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "dhcp-f1",
              front: "DHCP DORA process?",
              back: "Discover → Offer → Request → Acknowledge",
            },
            {
              id: "dhcp-f2",
              front: "DHCP relay purpose?",
              back: "Forward DHCP broadcasts across subnets to a central server (ip helper-address)",
            },
            {
              id: "dhcp-f3",
              front: "DHCP UDP ports?",
              back: "Server 67, client 68",
            },
            {
              id: "dhcp-f4",
              front: "DHCP relay on Cisco?",
              back: "ip helper-address",
            },
            {
              id: "dhcp-f4b",
              front: "DHCP option 3 provides?",
              back: "Default gateway (router)",
            },
            {
              id: "dhcp-f4c",
              front: "Rogue DHCP mitigation?",
              back: "DHCP snooping",
            }
          ],
          objectives: [
            "CCNA-4.1",
            "CCNA-4.2"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "dhcp-b1",
              prompt: "First DHCP message from client?",
              choices: [
                { id: "a", text: "Discover" },
                { id: "b", text: "Offer" },
                { id: "c", text: "Ack" },
                { id: "d", text: "Request" }
              ],
              correctChoiceId: "a",
              explanation: "Client begins with DHCP Discover broadcast.",
              objectiveId: "CCNA-4.2",
              difficulty: "medium",
            },
            {
              id: "dhcp-b2",
              prompt: "ip helper-address forwards:",
              choices: [
                { id: "a", text: "BootP/DHCP broadcasts to server" },
                { id: "b", text: "OSPF hellos" },
                { id: "c", text: "STP BPDUs" },
                { id: "d", text: "HTTPS" }
              ],
              correctChoiceId: "a",
              explanation: "Helper address relays DHCP to remote server.",
              objectiveId: "CCNA-4.1",
              difficulty: "hard",
            },
            {
              id: "dhcp-b3",
              prompt: "DHCP option 6 specifies:",
              choices: [
                { id: "a", text: "DNS servers" },
                { id: "b", text: "Default gateway" },
                { id: "c", text: "Lease time only" },
                { id: "d", text: "VLAN ID" }
              ],
              correctChoiceId: "a",
              explanation: "Option 6 lists DNS server IPs.",
              objectiveId: "CCNA-4.2",
              difficulty: "hard",
            },
            {
              id: "dhcp-b4",
              prompt: "APIPA indicates:",
              choices: [
                { id: "a", text: "DHCP server unreachable" },
                { id: "b", text: "Successful OSPF adjacency" },
                { id: "c", text: "NAT overload" },
                { id: "d", text: "Trunk mismatch" }
              ],
              correctChoiceId: "a",
              explanation: "169.254.x.x means no DHCP lease obtained.",
              objectiveId: "CCNA-4.1",
              difficulty: "hard",
            },
            {
              id: "dhcp-b5",
              prompt: "DHCP Ack message:",
              choices: [
                { id: "a", text: "Confirms lease parameters to client" },
                { id: "b", text: "Initial broadcast discover" },
                { id: "c", text: "Router advertisement" },
                { id: "d", text: "ARP reply" }
              ],
              correctChoiceId: "a",
              explanation: "ACK finalizes the lease offer.",
              objectiveId: "CCNA-4.2",
              difficulty: "hard",
            },
            {
              id: "dhcp-b6",
              prompt: "DHCP snooping trusted port connects to:",
              choices: [
                { id: "a", text: "Legitimate DHCP server or uplink" },
                { id: "b", text: "All access ports by default" },
                { id: "c", text: "Wireless clients only" },
                { id: "d", text: "Loopback interface" }
              ],
              correctChoiceId: "a",
              explanation: "Trusted ports allow server responses; untrusted block rogue offers.",
              objectiveId: "CCNA-4.1",
              difficulty: "hard",
            }
          ],
          assignments: [
            {
              id: "dhcp-dora-sim",
              title: "DHCP DORA Ordering Drill",
              type: "simulator",
              instructions: "Order DHCP messages correctly and identify message types in the DORA drill until consistent 80%+ scores.",
              estimatedMinutes: 10,
              simulatorId: "dhcp-dora-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["dhcp"],
              order: 1,
            },
            {
              id: "internet-dns-case",
              title: "Case Study: Users Can't Reach the Internet",
              type: "case-study",
              instructions: "Interactive troubleshooting: web fails but ping to 8.8.8.8 works.",
              estimatedMinutes: 15,
              caseStudyId: "ccna-case-internet-down",
              completionCriteria: ["Completed interactive case study"],
              relatedTopicIds: ["dhcp", "dns"],
              order: 2,
            }
          ],
        
        },
        {
          id: "dns",
          name: "DNS",
          lesson: {
            title: "Domain Name System",
            content: `DNS translates human-readable domain names like www.example.com into IP addresses that computers use for routing. DNS is a hierarchical, distributed database organized into zones. The resolution process starts at the client's configured DNS resolver.

Resource record types include A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (name server), and PTR (reverse lookup). TTL on records controls caching duration. DNS uses UDP/TCP port 53.

Common issues: wrong DNS server configured, stale cache, firewall blocking port 53, or missing records. DHCP often provides DNS server addresses automatically to clients.

DNS resolves names to IP addresses hierarchically: root, TLD (.com), authoritative servers. Record types: A/AAAA (address), CNAME (alias), MX (mail), NS (name server), PTR (reverse), TXT (text). Resolver queries recursive; authoritative answers for its zone.

DNS uses UDP 53 for queries; TCP 53 for large responses or zone transfers. Split-horizon DNS returns different answers inside vs outside corporate networks. nslookup and dig test resolution.

DNS security topics include DNSSEC (signing) and filtering malicious domains—high-level CCNA awareness.`,
          },
          keyFacts: [
            "DNS maps domain names to IP addresses",
            "A record maps hostname to IPv4; AAAA maps to IPv6",
            "CNAME creates an alias pointing to another name",
            "DNS uses UDP/TCP port 53",
            "Recursive queries ask the resolver to find the full answer",
            "TTL controls how long resolvers cache a record",
          ],
          commonMistakes: [
            "Confusing A record (hostname to IPv4) with AAAA (IPv6) and PTR (reverse)",
            "Assuming DNS resolves MAC addresses—ARP handles Layer 2",
            "Forgetting recursive vs iterative query roles",
            "MX record priority confusion for mail server selection",
            "Caching TTL ignored causing stale record troubleshooting misses",
          ],
          examTraps: [
            "Record type matching: A, AAAA, CNAME, MX, PTR, NS, SOA",
            "FQDN vs hostname vs search domain suffix behavior",
            "Recursive query to resolver vs iterative between servers",
            "DNS over UDP port 53 vs TCP for large responses",
            "nslookup/dig style output interpretation on exams",
          ],
          quiz: [
            {
              id: "dns-q1",
              prompt: "Which DNS record maps a name to IPv4?",
              choices: [
                { id: "a", text: "MX" },
                { id: "b", text: "A" },
                { id: "c", text: "CNAME" },
                { id: "d", text: "NS" },
              ],
              correctChoiceId: "b",
              explanation: "A records hold IPv4 address mappings.",
              objectiveId: "CCNA-4.3",
              difficulty: "easy",
            },
            {
              id: "dns-q2",
              prompt: "DNS primarily operates on port:",
              choices: [
                { id: "a", text: "80" },
                { id: "b", text: "443" },
                { id: "c", text: "53" },
                { id: "d", text: "22" },
              ],
              correctChoiceId: "c",
              explanation: "DNS uses port 53 (UDP for queries, TCP for zone transfers and large responses).",
              objectiveId: "CCNA-4.4",
              difficulty: "easy",
            },
            {
              id: "dns-q3",
              prompt: "CNAME record:",
              choices: [
                { id: "a", text: "Mail server priority" },
                { id: "b", text: "Alias to another hostname" },
                { id: "c", text: "IPv6 address" },
                { id: "d", text: "Reverse lookup" },
              ],
              correctChoiceId: "b",
              explanation: "CNAME points one name to another canonical name.",
              objectiveId: "CCNA-4.3",
              difficulty: "easy",
            },
            {
              id: "dns-q4",
              prompt: "TTL in a DNS record indicates:",
              choices: [
                { id: "a", text: "Subnet mask" },
                { id: "b", text: "Cache lifetime in seconds" },
                { id: "c", text: "OSPF cost" },
                { id: "d", text: "VLAN ID" },
              ],
              correctChoiceId: "b",
              explanation: "Time To Live tells resolvers how long to cache the record.",
              objectiveId: "CCNA-4.4",
              difficulty: "easy",
            },
            {
              id: "dns-q5",
              prompt: "PTR records are used for:",
              choices: [
                { id: "a", text: "Email routing" },
                { id: "b", text: "Reverse DNS (IP to name)" },
                { id: "c", text: "IPv6 only" },
                { id: "d", text: "NAT translation" },
              ],
              correctChoiceId: "b",
              explanation: "PTR records map IP addresses back to hostnames.",
              objectiveId: "CCNA-4.3",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "dns-f1",
              front: "A vs AAAA record?",
              back: "A = IPv4 address; AAAA = IPv6 address",
            },
            {
              id: "dns-f2",
              front: "DNS port?",
              back: "UDP/TCP port 53",
            },
            {
              id: "dns-f3",
              front: "What is CNAME?",
              back: "Canonical name alias — one hostname pointing to another name",
            },
            {
              id: "dns-f4",
              front: "A record maps:",
              back: "Hostname to IPv4 address",
            },
            {
              id: "dns-f4b",
              front: "MX record used for:",
              back: "Mail exchange servers",
            },
            {
              id: "dns-f4c",
              front: "Reverse DNS uses:",
              back: "PTR records",
            }
          ],
          objectives: [
            "CCNA-4.3",
            "CCNA-4.4"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "dns-b1",
              prompt: "CNAME record:",
              choices: [
                { id: "a", text: "Alias pointing to another name" },
                { id: "b", text: "IPv6 address" },
                { id: "c", text: "Mail priority" },
                { id: "d", text: "Root hint" }
              ],
              correctChoiceId: "a",
              explanation: "CNAME maps alias to canonical name.",
              objectiveId: "CCNA-4.4",
              difficulty: "medium",
            },
            {
              id: "dns-b2",
              prompt: "Authoritative DNS server:",
              choices: [
                { id: "a", text: "Answers for zones it owns" },
                { id: "b", text: "Only caches public web" },
                { id: "c", text: "Assigns MAC addresses" },
                { id: "d", text: "Runs STP" }
              ],
              correctChoiceId: "a",
              explanation: "Authoritative servers host zone data.",
              objectiveId: "CCNA-4.3",
              difficulty: "hard",
            },
            {
              id: "dns-b3",
              prompt: "DNS query over UDP uses port:",
              choices: [
                { id: "a", text: "53" },
                { id: "b", text: "443" },
                { id: "c", text: "67" },
                { id: "d", text: "22" }
              ],
              correctChoiceId: "a",
              explanation: "Standard DNS queries use UDP/53.",
              objectiveId: "CCNA-4.4",
              difficulty: "hard",
            },
            {
              id: "dns-b4",
              prompt: "AAAA record provides:",
              choices: [
                { id: "a", text: "IPv6 address" },
                { id: "b", text: "IPv4 only" },
                { id: "c", text: "Mail exchange" },
                { id: "d", text: "Canonical alias" }
              ],
              correctChoiceId: "a",
              explanation: "AAAA maps name to IPv6.",
              objectiveId: "CCNA-4.3",
              difficulty: "hard",
            },
            {
              id: "dns-b5",
              prompt: "Recursive resolver:",
              choices: [
                { id: "a", text: "Queries on behalf of client until answer found" },
                { id: "b", text: "Only authoritative" },
                { id: "c", text: "Blocks NAT" },
                { id: "d", text: "Assigns VLANs" }
              ],
              correctChoiceId: "a",
              explanation: "Recursive mode chases referrals for client.",
              objectiveId: "CCNA-4.4",
              difficulty: "hard",
            },
            {
              id: "dns-b6",
              prompt: "PTR record used for:",
              choices: [
                { id: "a", text: "Reverse lookup (IP to name)" },
                { id: "b", text: "Mail routing" },
                { id: "c", text: "Text verification only" },
                { id: "d", text: "Subnet masks" }
              ],
              correctChoiceId: "a",
              explanation: "PTR maps IP to hostname in reverse zones.",
              objectiveId: "CCNA-4.3",
              difficulty: "hard",
            }
          ],
          assignments: [
            {
              id: "dns-record-sim",
              title: "DNS Record Type Matcher",
              type: "simulator",
              instructions: "Match DNS record types to their purpose in the DNS record drill. Repeat until scoring 80%+.",
              estimatedMinutes: 10,
              simulatorId: "dns-record-drill",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["dns"],
              order: 1,
            }
          ],
        
        },
      ],
    },
    {
      id: "security-fundamentals",
      name: "Security Fundamentals",
      topics: [
        {
          id: "acls",
          name: "ACLs",
          lesson: {
            title: "Access Control Lists",
            content: `Access Control Lists (ACLs) filter traffic on Cisco routers and switches by matching packet attributes—source/destination IP, protocol, and port numbers. Standard ACLs match only source IP address. Extended ACLs match source/destination IP, protocol, and port.

ACLs are processed top-to-bottom; the first match wins. An implicit deny all exists at the end. Place standard ACLs close to the destination; extended ACLs close to the source for efficiency.

Wildcard masks in ACLs differ from subnet masks—0 means must match and 1 means don't care. Apply ACLs to interfaces with ip access-group name in or out.

Standard ACLs (1–99, 1300–1999) filter source IP only. Extended ACLs (100–199, 2000–2699) filter source/dest IP, protocol, and ports. Named ACLs improve readability. ACLs are processed top-down; first match wins; implicit deny all at end.

Place standard ACLs close to destination; extended ACLs close to source (best practice guidelines). IPv6 ACLs use similar logic with ipv6 access-list.

Wildcard masks invert subnet masks for ACL matching—0 means must match, 1 means ignore. Example: 0.0.0.255 matches any host in last octet.`,
          },
          keyFacts: [
            "Standard ACLs match source IP only; extended match source, destination, ports",
            "ACLs process top-to-bottom; first match applies",
            "Implicit deny all at end of every ACL",
            "Wildcard mask: 0 = match bit, 1 = ignore bit",
            "Apply extended ACLs close to source for efficiency",
            "Named ACLs are easier to manage than numbered-only",
          ],
          guidedExample: {
            title: "Block Telnet and Permit HTTP with an Extended ACL",
            steps: [
              "Define a named extended ACL: ip access-list extended BLOCK-TELNET-PERMIT-HTTP.",
              "Permit HTTP first: permit tcp 192.168.10.0 0.0.0.255 any eq 80.",
              "Permit HTTPS: permit tcp 192.168.10.0 0.0.0.255 any eq 443.",
              "Deny Telnet explicitly: deny tcp any any eq 23.",
              "Permit remaining IP traffic if required: permit ip any any (or stop after denies—remember implicit deny).",
              "Apply inbound on the router interface facing the source: ip access-group BLOCK-TELNET-PERMIT-HTTP in.",
            ],
          },
          commonMistakes: [
            "Placing standard ACLs far from the destination or extended ACLs far from the source",
            "Forgetting the implicit deny-all at the end of every ACL",
            "Reversing wildcard mask logic (0 = match, 1 = ignore) compared to subnet masks",
            "Putting a broad permit any any before specific deny rules, making denies unreachable",
            "Applying ACLs to the wrong interface direction (in vs out)",
          ],
          examTraps: [
            "Rule-order questions where permit any any above a deny makes the deny never match",
            "Wildcard mask answers that use subnet mask values instead of inverses",
            "Standard vs extended placement—exam expects extended near source, standard near destination",
            "Numbered ACL range traps: 1-99 standard, 100-199 extended",
            "Questions about what happens to return traffic when only outbound ACL is applied",
          ],
          realWorldScenario: "Your organization's security team requires that only the accounting subnet may reach the payroll server on TCP port 443, while all other internal subnets are denied. You write an extended ACL with permit tcp for the accounting network and deny ip for everyone else, place it inbound on the router interface closest to the sources, and test from HR (should fail) and accounting (should succeed) before change-control approval.",
          estimatedStudyMinutes: 40,
          difficulty: "medium",
          prerequisites: ["routing-fundamentals"],
          quiz: [
            {
              id: "acls-q1",
              prompt: "Standard ACLs match traffic based on:",
              choices: [
                { id: "a", text: "Source IP only" },
                { id: "b", text: "Source and destination IP and ports" },
                { id: "c", text: "MAC address only" },
                { id: "d", text: "SSID" },
              ],
              correctChoiceId: "a",
              explanation: "Standard ACLs filter solely on source IP address.",
              objectiveId: "CCNA-5.1",
              difficulty: "easy",
            },
            {
              id: "acls-q2",
              prompt: "Default action at end of an ACL:",
              choices: [
                { id: "a", text: "Permit all" },
                { id: "b", text: "Deny all" },
                { id: "c", text: "Forward to OSPF" },
                { id: "d", text: "NAT overload" },
              ],
              correctChoiceId: "b",
              explanation: "An implicit deny drops unmatched traffic.",
              objectiveId: "CCNA-5.2",
              difficulty: "easy",
            },
            {
              id: "acls-q3",
              prompt: "In ACL wildcard masks, 0 means:",
              choices: [
                { id: "a", text: "Don't care" },
                { id: "b", text: "Must match" },
                { id: "c", text: "Broadcast" },
                { id: "d", text: "Multicast" },
              ],
              correctChoiceId: "b",
              explanation: "0 requires the bit to match; 1 ignores the bit.",
              objectiveId: "CCNA-5.1",
              difficulty: "easy",
            },
            {
              id: "acls-q4",
              prompt: "Extended ACLs should generally be placed:",
              choices: [
                { id: "a", text: "Close to destination only" },
                { id: "b", text: "Close to source" },
                { id: "c", text: "On wireless APs only" },
                { id: "d", text: "In DNS server" },
              ],
              correctChoiceId: "b",
              explanation: "Filtering near the source prevents unwanted traffic from traversing the network.",
              objectiveId: "CCNA-5.2",
              difficulty: "easy",
            },
            {
              id: "acls-q5",
              prompt: "First matching ACE in an ACL:",
              choices: [
                { id: "a", text: "Is ignored" },
                { id: "b", text: "Determines permit or deny" },
                { id: "c", text: "Always permits" },
                { id: "d", text: "Resets TTL" },
              ],
              correctChoiceId: "b",
              explanation: "Processing stops at the first matching access control entry.",
              objectiveId: "CCNA-5.1",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "acls-f1",
              front: "Standard vs extended ACL?",
              back: "Standard: source IP only. Extended: source, destination, protocol, ports",
            },
            {
              id: "acls-f2",
              front: "ACL wildcard mask?",
              back: "0 = must match, 1 = don't care",
            },
            {
              id: "acls-f3",
              front: "Implicit ACL rule?",
              back: "Deny all traffic not explicitly permitted",
            },
            {
              id: "acls-f4",
              front: "Wildcard 0.0.0.255 means:",
              back: "Match any in last octet",
            },
            {
              id: "acls-f4b",
              front: "Extended ACL filters:",
              back: "Source, destination, protocol, ports",
            },
            {
              id: "acls-f4c",
              front: "Implicit ACL ending?",
              back: "Deny all unmatched traffic",
            }
          ],
          objectives: [
            "CCNA-5.1",
            "CCNA-5.2"
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "acls-b1",
              prompt: "Standard ACL number range?",
              choices: [
                { id: "a", text: "1–99" },
                { id: "b", text: "100–199 only" },
                { id: "c", text: "1000–1099" },
                { id: "d", text: "7000–7999" }
              ],
              correctChoiceId: "a",
              explanation: "Standard ACLs use 1–99 and extended ranges.",
              objectiveId: "CCNA-5.2",
              difficulty: "medium",
            },
            {
              id: "acls-b2",
              prompt: "Wildcard mask 0.0.255.255 matches:",
              choices: [
                { id: "a", text: "Any value in third and fourth octets pattern" },
                { id: "b", text: "Exact host only" },
                { id: "c", text: "All zeros only" },
                { id: "d", text: "Broadcast only" }
              ],
              correctChoiceId: "a",
              explanation: "0=match bit, 1=ignore bit in each octet position.",
              objectiveId: "CCNA-5.1",
              difficulty: "medium",
            },
            {
              id: "acls-b3",
              prompt: "First match ACL rule:",
              choices: [
                { id: "a", text: "Wins; later rules not evaluated" },
                { id: "b", text: "Lowest number loses" },
                { id: "c", text: "Always permit" },
                { id: "d", text: "Ignored on trunks" }
              ],
              correctChoiceId: "a",
              explanation: "Top-down first-match semantics.",
              objectiveId: "CCNA-5.2",
              difficulty: "hard",
            },
            {
              id: "acls-b4",
              prompt: "access-list 101 is:",
              choices: [
                { id: "a", text: "Extended numbered ACL" },
                { id: "b", text: "Standard ACL" },
                { id: "c", text: "NAT pool" },
                { id: "d", text: "VLAN list" }
              ],
              correctChoiceId: "a",
              explanation: "101 falls in extended range 100–199.",
              objectiveId: "CCNA-5.1",
              difficulty: "hard",
            },
            {
              id: "acls-b5",
              prompt: "Apply ACL with:",
              choices: [
                { id: "a", text: "ip access-group in/out on interface" },
                { id: "b", text: "switchport trunk" },
                { id: "c", text: "router ospf" },
                { id: "d", text: "line vty only always" }
              ],
              correctChoiceId: "a",
              explanation: "ip access-group applies ACL to interface direction.",
              objectiveId: "CCNA-5.2",
              difficulty: "hard",
            },
            {
              id: "acls-b6",
              prompt: "Named ACL advantage?",
              choices: [
                { id: "a", text: "Easier to read and edit" },
                { id: "b", text: "No sequence numbers possible" },
                { id: "c", text: "Only works on IPv6" },
                { id: "d", text: "Disables logging" }
              ],
              correctChoiceId: "a",
              explanation: "Named ACLs support remarks and incremental edits.",
              objectiveId: "CCNA-5.1",
              difficulty: "hard",
            },
            {
              id: "acls-b7",
              prompt: "Implicit action at end of every ACL?",
              choices: [
                { id: "a", text: "Deny all" },
                { id: "b", text: "Permit all" },
                { id: "c", text: "Log and permit" },
                { id: "d", text: "Forward to CPU" }
              ],
              correctChoiceId: "a",
              explanation: "Unmatched traffic is implicitly denied.",
              objectiveId: "CCNA-5.2",
              difficulty: "hard",
            },
            {
              id: "acls-b8",
              prompt: "Extended ACL number range includes:",
              choices: [
                { id: "a", text: "100-199" },
                { id: "b", text: "1-99 only" },
                { id: "c", text: "400-499" },
                { id: "d", text: "800-899" }
              ],
              correctChoiceId: "a",
              explanation: "Extended numbered ACLs use 100-199 (and extended ranges).",
              objectiveId: "CCNA-5.1",
              difficulty: "hard",
            }
          ],
          assignments: [
            {
              id: "acl-order-sim",
              title: "ACL Rule Ordering Evaluator",
              type: "simulator",
              instructions: "Predict permit/deny outcomes and correct rule order in the ACL rule ordering drill. Score 80%+ before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "acl-rule-order",
              completionCriteria: [
                "Completed drill",
                "Score 80% or higher"
              ],
              relatedTopicIds: ["acls"],
              order: 1,
            },
            {
              id: "acl-block-case",
              title: "Case Study: ACL Blocking Traffic",
              type: "case-study",
              instructions: "Interactive troubleshooting: server unreachable after ACL change.",
              estimatedMinutes: 12,
              caseStudyId: "ccna-case-acl",
              completionCriteria: ["Completed interactive case study"],
              relatedTopicIds: ["acls"],
              order: 2,
            }
          ],
        
        },
        {
          id: "network-security",
          name: "Network Security",
          lesson: {
            title: "Network Security Fundamentals",
            content: `Network security protects confidentiality, integrity, and availability of data and infrastructure. The CIA triad guides control selection. Defense in depth layers multiple controls—physical, network, host, and application—so no single failure compromises everything.

Common threats include malware, phishing, DDoS attacks, and unauthorized access. Mitigations include firewalls, IPS/IDS, 802.1X port-based network access control, VPNs, and segmentation with VLANs and ACLs.

Cisco security features relevant to CCNA include port security, DHCP snooping, Dynamic ARP Inspection, and WPA2/WPA3 for wireless. Always follow least privilege and keep firmware patched.

Defense in depth layers controls at network, host, and application levels. Firewalls filter traffic by stateful inspection, ACLs, and zones (inside/outside/DMZ). VPNs encrypt remote access (SSL/IPsec). 802.1X port-based NAC authenticates devices before network access.

Common threats: reconnaissance, DoS, MITM, password attacks, malware. Mitigations include patching, strong auth, segmentation, logging, and user training. Port security limits MACs on switch ports; DHCP snooping and DAI protect L2 infrastructure.

Security monitoring uses syslog, SNMP, and NetFlow/IPFIX for visibility.`,
          },
          keyFacts: [
            "CIA triad: Confidentiality, Integrity, Availability",
            "Defense in depth uses multiple layered security controls",
            "802.1X provides port-based network access control",
            "Firewalls filter traffic based on rules; stateful tracks sessions",
            "Port security limits MAC addresses allowed on a switch port",
            "WPA2/WPA3 encrypt wireless traffic",
          ],
          guidedExample: {
            title: "Harden a Switch Access Port with Port Security",
            steps: [
              "Identify the access port connecting a single corporate laptop: interface gi0/5.",
              "Enable port security: switchport mode access, switchport port-security.",
              "Limit MAC addresses: switchport port-security maximum 1.",
              "Set violation mode: switchport port-security violation shutdown.",
              "Learn the sticky MAC or manually configure: switchport port-security mac-address sticky.",
              "Verify with show port-security interface gi0/5 and test that an unauthorized device triggers err-disable.",
            ],
          },
          commonMistakes: [
            "Enabling port security on trunk ports where multiple MACs are expected",
            "Choosing protect mode when the requirement is to alert and disable the port (shutdown mode)",
            "Confusing 802.1X (authentication) with port security (MAC limiting)—they complement each other",
            "Forgetting that defense in depth means layering controls, not relying on one feature",
            "Mixing up CIA triad terms—availability vs confidentiality in mitigation scenarios",
          ],
          examTraps: [
            "CIA triad acronym distractors that sound plausible but swap integrity and availability",
            "802.1X vs 802.1Q—authentication vs VLAN tagging",
            "Port security violation modes: protect (drop), restrict (drop + SNMP), shutdown (err-disable)",
            "WPA2 vs WPA3 questions focusing on encryption improvements, not cable types",
            "DAI and DHCP snooping dependency—DAI validates ARP against the DHCP snooping binding table",
          ],
          realWorldScenario: "After an unauthorized device was plugged into a conference room port and caused a minor security incident, your manager asks you to harden all single-device access ports. You enable port security with sticky MAC learning and shutdown violation mode, document err-disable recovery with shutdown/no shutdown, and coordinate with the NOC to monitor syslog for violation events during the rollout.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: [],
          quiz: [
            {
              id: "network-security-q1",
              prompt: "CIA triad stands for:",
              choices: [
                { id: "a", text: "Cable, Internet, Access" },
                { id: "b", text: "Confidentiality, Integrity, Availability" },
                { id: "c", text: "Central, Internal, Admin" },
                { id: "d", text: "Certification, Identity, Authentication" },
              ],
              correctChoiceId: "b",
              explanation: "CIA defines the core goals of information security.",
              objectiveId: "CCNA-5.3",
              difficulty: "easy",
            },
            {
              id: "network-security-q2",
              prompt: "802.1X provides:",
              choices: [
                { id: "a", text: "VLAN tagging" },
                { id: "b", text: "Port-based network access control" },
                { id: "c", text: "NAT overload" },
                { id: "d", text: "OSPF authentication only" },
              ],
              correctChoiceId: "b",
              explanation: "802.1X authenticates devices before granting network access.",
              objectiveId: "CCNA-5.4",
              difficulty: "easy",
            },
            {
              id: "network-security-q3",
              prompt: "Port security on a switch:",
              choices: [
                { id: "a", text: "Blocks all IP routing" },
                { id: "b", text: "Restricts allowed MAC addresses on a port" },
                { id: "c", text: "Replaces DNS" },
                { id: "d", text: "Configures WPA3" },
              ],
              correctChoiceId: "b",
              explanation: "Port security limits which MACs can send traffic on an access port.",
              objectiveId: "CCNA-5.3",
              difficulty: "easy",
            },
            {
              id: "network-security-q4",
              prompt: "Defense in depth means:",
              choices: [
                { id: "a", text: "One strong firewall only" },
                { id: "b", text: "Multiple overlapping security layers" },
                { id: "c", text: "No wireless" },
                { id: "d", text: "Disable all ACLs" },
              ],
              correctChoiceId: "b",
              explanation: "Layered controls reduce risk if one mechanism fails.",
              objectiveId: "CCNA-5.4",
              difficulty: "easy",
            },
            {
              id: "network-security-q5",
              prompt: "WPA3 improves over WPA2 primarily in:",
              choices: [
                { id: "a", text: "Cable length" },
                { id: "b", text: "Wireless encryption strength" },
                { id: "c", text: "Subnet size" },
                { id: "d", text: "STP convergence" },
              ],
              correctChoiceId: "b",
              explanation: "WPA3 strengthens wireless encryption and handshake security.",
              objectiveId: "CCNA-5.3",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "network-security-f1",
              front: "CIA triad?",
              back: "Confidentiality, Integrity, Availability",
            },
            {
              id: "network-security-f2",
              front: "802.1X purpose?",
              back: "Authenticate devices before allowing network access on a port",
            },
            {
              id: "network-security-f3",
              front: "Port security?",
              back: "Switch feature limiting which MAC addresses can use an access port",
            },
            {
              id: "network-security-f4",
              front: "802.1X provides:",
              back: "Port-based network access control",
            },
            {
              id: "network-security-f4b",
              front: "DMZ purpose?",
              back: "Semi-trusted zone for public-facing servers",
            },
            {
              id: "network-security-f4c",
              front: "Defense in depth?",
              back: "Multiple layered security controls",
            }
          ],
          objectives: [
            "CCNA-5.3",
            "CCNA-5.4"
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "network-security-b1",
              prompt: "Stateful firewall tracks:",
              choices: [
                { id: "a", text: "Connection state for permit/deny decisions" },
                { id: "b", text: "Only MAC addresses" },
                { id: "c", text: "VLAN colors" },
                { id: "d", text: "SSID names" }
              ],
              correctChoiceId: "a",
              explanation: "Stateful inspection matches return traffic to sessions.",
              objectiveId: "CCNA-5.4",
              difficulty: "medium",
            },
            {
              id: "network-security-b2",
              prompt: "Port security violation shutdown mode:",
              choices: [
                { id: "a", text: "Err-disables port on violation" },
                { id: "b", text: "Increases speed" },
                { id: "c", text: "Enables NAT" },
                { id: "d", text: "Opens all VLANs" }
              ],
              correctChoiceId: "a",
              explanation: "Shutdown mode err-disables the interface.",
              objectiveId: "CCNA-5.3",
              difficulty: "medium",
            },
            {
              id: "network-security-b3",
              prompt: "IPsec VPN provides:",
              choices: [
                { id: "a", text: "Encrypted authenticated tunnels" },
                { id: "b", text: "DHCP leases" },
                { id: "c", text: "STP root guard" },
                { id: "d", text: "VTP pruning" }
              ],
              correctChoiceId: "a",
              explanation: "IPsec secures site-to-site and remote VPNs.",
              objectiveId: "CCNA-5.4",
              difficulty: "hard",
            },
            {
              id: "network-security-b4",
              prompt: "Phishing is:",
              choices: [
                { id: "a", text: "Social engineering via deceptive messages" },
                { id: "b", text: "Layer 2 loop" },
                { id: "c", text: "Routing loop" },
                { id: "d", text: "DNS cache poison only" }
              ],
              correctChoiceId: "a",
              explanation: "Phishing tricks users into revealing credentials.",
              objectiveId: "CCNA-5.3",
              difficulty: "hard",
            },
            {
              id: "network-security-b5",
              prompt: "DAI helps prevent:",
              choices: [
                { id: "a", text: "ARP spoofing/poisoning on LAN" },
                { id: "b", text: "OSPF attacks only" },
                { id: "c", text: "IPv6 compression errors" },
                { id: "d", text: "Cable faults" }
              ],
              correctChoiceId: "a",
              explanation: "Dynamic ARP Inspection validates ARP against DHCP snooping table.",
              objectiveId: "CCNA-5.4",
              difficulty: "hard",
            },
            {
              id: "network-security-b6",
              prompt: "Syslog severity 0 means:",
              choices: [
                { id: "a", text: "Emergency" },
                { id: "b", text: "Informational" },
                { id: "c", text: "Debug only" },
                { id: "d", text: "Notice" }
              ],
              correctChoiceId: "a",
              explanation: "Severity 0 is emergency (most critical).",
              objectiveId: "CCNA-5.3",
              difficulty: "hard",
            },
            {
              id: "network-security-b7",
              prompt: "Defense in depth means:",
              choices: [
                { id: "a", text: "Multiple overlapping security layers" },
                { id: "b", text: "One perimeter firewall only" },
                { id: "c", text: "Disabling all guest VLANs" },
                { id: "d", text: "Removing ACLs for speed" }
              ],
              correctChoiceId: "a",
              explanation: "Layered controls reduce risk if one mechanism fails.",
              objectiveId: "CCNA-5.4",
              difficulty: "hard",
            },
            {
              id: "network-security-b8",
              prompt: "802.1X authenticates:",
              choices: [
                { id: "a", text: "Devices before granting network port access" },
                { id: "b", text: "DNS zone transfers" },
                { id: "c", text: "OSPF neighbors" },
                { id: "d", text: "NAT translations" }
              ],
              correctChoiceId: "a",
              explanation: "802.1X is port-based network access control.",
              objectiveId: "CCNA-5.3",
              difficulty: "hard",
            }
          ],
          externalResources: [
            {
              id: "wireshark",
              name: "Wireshark",
              url: "https://www.wireshark.org/",
              cost: "free",
              platform: "any",
              installNotes: "Install Wireshark and accept the Npcap/WinPcap prompt on Windows.",
            }
          ],
          assignments: [
            {
              id: "wireshark-frames-lab",
              title: "Wireshark: Inspect Ethernet and ARP Frames",
              type: "external-lab",
              instructions: "1. Capture traffic on your lab interface for 60 seconds.\n2. Identify broadcast, unicast, and ARP request/reply frames.\n3. Document source/destination MAC and EtherType for three frames.\n4. Relate observations to OSI Layer 2 concepts.",
              estimatedMinutes: 30,
              externalResourceId: "wireshark",
              completionCriteria: [
                "Capture file saved",
                "Three frames documented with MAC addresses",
                "ARP request and reply identified"
              ],
              relatedTopicIds: ["network-security", "ethernet"],
              order: 1,
            }
          ],
        
        },
      ],
    },
    {
      id: "automation",
      name: "Automation and Programmability",
      topics: [
        {
          id: "automation-basics",
          name: "Automation Basics",
          lesson: {
            title: "Network Automation and Programmability",
            content: `Network automation reduces manual CLI configuration, improves consistency, and speeds deployments using tools and programmatic interfaces. Modern CCNA includes fundamentals of automation, controller-based networking, and how APIs enable machine-to-machine communication.

Software-Defined Networking (SDN) separates the control plane (centralized logic) from the data plane (forwarding). Controllers push policies to devices via southbound APIs. Devices expose REST APIs (HTTP/JSON), SNMP, and NETCONF/YANG for management.

Infrastructure as Code treats configs as version-controlled templates. Benefits include faster provisioning, reduced human error, and repeatable compliance checks.

Network automation uses APIs (REST, NETCONF/RESTCONF), configuration management (Ansible), and controllers (Cisco DNA Center, SD-WAN). YANG models describe structured data for devices. Python scripts with Netmiko or NAPalm push configs at scale.

Benefits: speed, consistency, reduced human error, audit trails via version control (Git). Day 0 (deploy), Day 1 (configure), Day 2 (operate/monitor) lifecycle terminology appears on exams.

Start small: automate show commands, backup configs, and validate compliance before full self-driving network ambitions.`,
          },
          keyFacts: [
            "Automation reduces manual errors and speeds repetitive tasks",
            "SDN separates control plane from data plane",
            "REST APIs use HTTP methods (GET, POST, PUT, DELETE) with JSON",
            "SNMP monitors network devices; NETCONF/YANG configures them",
            "Infrastructure as Code version-controls network configurations",
            "Controllers push centralized policies to network devices",
          ],
          commonMistakes: [
            "Confusing SDN control plane separation with simply using SSH scripts",
            "Thinking REST only uses GET—POST, PUT, DELETE matter for config",
            "Mixing SNMP (monitoring) with NETCONF (structured config)",
            "Assuming automation eliminates need for networking fundamentals",
            "Ignoring version control and change management for Infrastructure as Code",
          ],
          examTraps: [
            "SDN southbound vs northbound API direction",
            "JSON over HTTP as REST API transport",
            "YANG data models used with NETCONF/RESTCONF",
            "Day 0 / Day 1 / Day 2 operations terminology",
            "Controller-based networking vs traditional distributed control plane",
          ],
          quiz: [
            {
              id: "automation-basics-q1",
              prompt: "SDN primarily separates:",
              choices: [
                { id: "a", text: "IP and MAC" },
                { id: "b", text: "Control plane and data plane" },
                { id: "c", text: "DNS and DHCP" },
                { id: "d", text: "VLAN and trunk" },
              ],
              correctChoiceId: "b",
              explanation: "SDN centralizes control logic while devices focus on forwarding.",
              objectiveId: "CCNA-6.1",
              difficulty: "easy",
            },
            {
              id: "automation-basics-q2",
              prompt: "REST APIs commonly use which data format?",
              choices: [
                { id: "a", text: "Binary only" },
                { id: "b", text: "JSON" },
                { id: "c", text: "Ethernet frames" },
                { id: "d", text: "STP BPDUs" },
              ],
              correctChoiceId: "b",
              explanation: "RESTful APIs typically exchange JSON over HTTP.",
              objectiveId: "CCNA-6.2",
              difficulty: "easy",
            },
            {
              id: "automation-basics-q3",
              prompt: "NETCONF with YANG is used for:",
              choices: [
                { id: "a", text: "Wireless SSID naming" },
                { id: "b", text: "Structured network configuration" },
                { id: "c", text: "NAT overload only" },
                { id: "d", text: "Cable testing" },
              ],
              correctChoiceId: "b",
              explanation: "NETCONF/YANG provides standardized programmatic configuration.",
              objectiveId: "CCNA-6.1",
              difficulty: "easy",
            },
            {
              id: "automation-basics-q4",
              prompt: "Infrastructure as Code means:",
              choices: [
                { id: "a", text: "Running code on every PC" },
                { id: "b", text: "Managing configs as version-controlled code" },
                { id: "c", text: "Replacing all routers with servers" },
                { id: "d", text: "Disabling APIs" },
              ],
              correctChoiceId: "b",
              explanation: "IaC applies software development practices to network configuration.",
              objectiveId: "CCNA-6.2",
              difficulty: "easy",
            },
            {
              id: "automation-basics-q5",
              prompt: "A benefit of network automation is:",
              choices: [
                { id: "a", text: "More manual CLI work" },
                { id: "b", text: "Consistent repeatable deployments" },
                { id: "c", text: "Elimination of all security" },
                { id: "d", text: "Removal of routing tables" },
              ],
              correctChoiceId: "b",
              explanation: "Automation ensures the same config is applied reliably every time.",
              objectiveId: "CCNA-6.1",
              difficulty: "medium",
            },
          ],
          flashcards: [
            {
              id: "automation-basics-f1",
              front: "SDN concept?",
              back: "Separate centralized control plane from distributed data/forwarding plane",
            },
            {
              id: "automation-basics-f2",
              front: "REST API?",
              back: "HTTP-based API often using JSON for device and controller communication",
            },
            {
              id: "automation-basics-f3",
              front: "NETCONF/YANG?",
              back: "Standards for programmatic configuration using structured data models",
            },
            {
              id: "automation-basics-f4",
              front: "YANG used for?",
              back: "Structured data models for network config",
            },
            {
              id: "automation-basics-f4b",
              front: "REST uses verbs like:",
              back: "GET, POST, PUT, DELETE",
            },
            {
              id: "automation-basics-f4c",
              front: "IaC stored in:",
              back: "Version control (e.g., Git)",
            }
          ],
          objectives: [
            "CCNA-6.1",
            "CCNA-6.2"
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "automation-basics-b1",
              prompt: "RESTCONF uses:",
              choices: [
                { id: "a", text: "HTTP-based API with YANG data models" },
                { id: "b", text: "SNMPv1 only" },
                { id: "c", text: "Telnet exclusively" },
                { id: "d", text: "STP BPDUs" }
              ],
              correctChoiceId: "a",
              explanation: "RESTCONF is HTTP REST for structured config.",
              objectiveId: "CCNA-6.2",
              difficulty: "medium",
            },
            {
              id: "automation-basics-b2",
              prompt: "Ansible connects to devices via:",
              choices: [
                { id: "a", text: "SSH often without agent on device" },
                { id: "b", text: "Requires full OS install on router" },
                { id: "c", text: "Only via console cable" },
                { id: "d", text: "DHCP options" }
              ],
              correctChoiceId: "a",
              explanation: "Ansible is agentless using SSH/API.",
              objectiveId: "CCNA-6.1",
              difficulty: "hard",
            },
            {
              id: "automation-basics-b3",
              prompt: "Controller-based networking separates:",
              choices: [
                { id: "a", text: "Control plane from data plane (SDN concept)" },
                { id: "b", text: "DNS from DHCP" },
                { id: "c", text: "MAC from IP always" },
                { id: "d", text: "VLAN from SSID" }
              ],
              correctChoiceId: "a",
              explanation: "SDN centralizes control logic.",
              objectiveId: "CCNA-6.2",
              difficulty: "hard",
            },
            {
              id: "automation-basics-b4",
              prompt: "Day 2 operations include:",
              choices: [
                { id: "a", text: "Monitoring, troubleshooting, changes" },
                { id: "b", text: "Initial hardware rack only" },
                { id: "c", text: "DNS registration" },
                { id: "d", text: "Cable testing only" }
              ],
              correctChoiceId: "a",
              explanation: "Day 2 is ongoing operations.",
              objectiveId: "CCNA-6.1",
              difficulty: "hard",
            },
            {
              id: "automation-basics-b5",
              prompt: "JSON is used because:",
              choices: [
                { id: "a", text: "Human-readable structured data for APIs" },
                { id: "b", text: "Binary only format" },
                { id: "c", text: "Replaces TCP/IP" },
                { id: "d", text: "Encapsulates Ethernet" }
              ],
              correctChoiceId: "a",
              explanation: "JSON is common REST API payload format.",
              objectiveId: "CCNA-6.2",
              difficulty: "hard",
            },
            {
              id: "automation-basics-b6",
              prompt: "Git in network automation provides:",
              choices: [
                { id: "a", text: "Version history and rollback for configs" },
                { id: "b", text: "MAC learning" },
                { id: "c", text: "OSPF LSDB" },
                { id: "d", text: "DHCP leases" }
              ],
              correctChoiceId: "a",
              explanation: "Git tracks IaC changes over time.",
              objectiveId: "CCNA-6.1",
              difficulty: "hard",
            }
          ],
        
        },
      ],
    },
  ],
};
