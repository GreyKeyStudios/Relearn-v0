import type { Certification } from "../types";

export const networkPlus: Certification = {
  id: "network-plus",
  name: "CompTIA Network+",
  shortName: "Network+",
  vendor: "CompTIA",
  overview:
    "CompTIA Network+ validates foundational networking skills for designing, configuring, managing, and troubleshooting wired and wireless networks. It covers network models, infrastructure, operations, security, and troubleshooting across enterprise environments.",
  examSummary: {
    questionCount: 90,
    durationMinutes: 90,
    passingScore: "720/900",
    format: "Multiple choice and performance-based questions",
  },
  domains: [
    {
      id: "networking-fundamentals",
      name: "Networking Fundamentals",
      topics: [
        {
          id: "network-models",
          name: "Network Models",
          lesson: {
            title: "OSI and TCP/IP Network Models",
            content: `Network models provide a structured way to understand how data moves across networks. The OSI (Open Systems Interconnection) model divides networking into seven layers, while the TCP/IP model uses four layers that reflect real-world protocol stacks.

The OSI layers from bottom to top are Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer has defined responsibilities: Physical transmits bits, Data Link handles MAC addressing and framing, Network manages IP routing, Transport delivers end-to-end communication with TCP or UDP, and upper layers support application services.

The TCP/IP model maps practically to OSI. The Network Access layer covers Physical and Data Link, the Internet layer matches Network, Transport aligns with Transport, and Application covers Session, Presentation, and Application. Most troubleshooting uses TCP/IP terminology because that is what operating systems and protocols implement.

Understanding both models helps you isolate faults. If ping works but a website fails, you know lower layers are fine and the issue is likely application-related. Encapsulation adds headers as data descends the stack; decapsulation removes them on the receiving side. This layered approach is essential for Network+ and real-world network engineering.

CompTIA Network+ (N10-008) expects you to map protocols to layers and explain how data flows through encapsulation. Common Layer 7 protocols include HTTP, HTTPS, DNS, SMTP, and FTP. Layer 4 uses TCP for reliable sessions and UDP for lightweight delivery such as DNS queries and VoIP. Layer 3 relies on IP and ICMP; Layer 2 uses Ethernet and ARP within a broadcast domain.

When troubleshooting, start by identifying the failing layer. Link-local connectivity problems often point to Layers 1–2 (cabling, duplex, MAC). Hosts that ping by IP but fail by name suggest DNS at Layer 7. Use the OSI model as a checklist rather than memorizing it in isolation — exam scenarios often describe symptoms and ask which layer you should investigate first.`,
          },
          keyFacts: [
            "OSI has 7 layers; TCP/IP has 4 layers used on the Internet today",
            "Layer 3 handles IP addressing and routing; Layer 2 uses MAC addresses",
            "TCP provides reliable delivery; UDP is connectionless and faster",
            "Encapsulation adds headers as data moves down the stack",
            "The Application layer is closest to the end user and hosts protocols like HTTP and DNS",
            "Troubleshooting often maps symptoms to a specific layer to narrow root cause",
          ],
          commonMistakes: [
            "Memorizing OSI layer numbers without knowing which protocols belong at each layer",
            "Confusing TCP/IP four-layer names with OSI seven-layer numbering",
            "Attributing routing decisions to Layer 2 when the question describes IP forwarding",
            "Skipping layer isolation during troubleshooting and jumping straight to application fixes",
            "Mixing up encapsulation (headers added going down) with decapsulation (headers stripped going up)",
          ],
          examTraps: [
            "Questions listing HTTP, DNS, or SMTP and asking for the correct OSI layer—always Layer 7",
            "Trick answers that place ICMP at Layer 4 instead of Layer 3",
            "TCP/IP Network Access layer mapped incorrectly to OSI Layers 3–4 instead of 1–2",
            "Symptom-based scenarios where ping works but browsing fails—answer points to upper layers, not cabling",
            "UDP described as reliable or connection-oriented when the question tests Transport layer traits",
          ],
          quiz: [
            {
              id: "nm-q1",
              prompt: "Which OSI layer is responsible for logical addressing and routing?",
              choices: [
                { id: "a", text: "Layer 2 - Data Link" },
                { id: "b", text: "Layer 3 - Network" },
                { id: "c", text: "Layer 4 - Transport" },
                { id: "d", text: "Layer 7 - Application" },
              ],
              correctChoiceId: "b",
              explanation:
                "Layer 3 (Network) handles IP addressing and routing decisions between networks.",
            },
            {
              id: "nm-q2",
              prompt: "How many layers does the TCP/IP model have?",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "4" },
                { id: "c", text: "5" },
                { id: "d", text: "7" },
              ],
              correctChoiceId: "b",
              explanation:
                "The TCP/IP model has four layers: Application, Transport, Internet, and Network Access.",
            },
            {
              id: "nm-q3",
              prompt: "Which protocol operates at the Transport layer?",
              choices: [
                { id: "a", text: "IP" },
                { id: "b", text: "Ethernet" },
                { id: "c", text: "TCP" },
                { id: "d", text: "HTTP" },
              ],
              correctChoiceId: "c",
              explanation:
                "TCP and UDP operate at Layer 4 (Transport), providing end-to-end communication between hosts.",
            },
            {
              id: "nm-q4",
              prompt: "What happens during encapsulation?",
              choices: [
                { id: "a", text: "Headers are removed at each layer" },
                { id: "b", text: "Headers are added at each layer as data moves down the stack" },
                { id: "c", text: "Data is encrypted only at Layer 1" },
                { id: "d", text: "MAC addresses replace IP addresses" },
              ],
              correctChoiceId: "b",
              explanation:
                "Encapsulation wraps data with protocol headers at each layer as it travels toward the physical medium.",
            },
            {
              id: "nm-q5",
              prompt: "The TCP/IP Network Access layer corresponds to which OSI layers?",
              choices: [
                { id: "a", text: "Layers 1 and 2" },
                { id: "b", text: "Layers 2 and 3" },
                { id: "c", text: "Layers 3 and 4" },
                { id: "d", text: "Layers 5 through 7" },
              ],
              correctChoiceId: "a",
              explanation:
                "Network Access combines OSI Physical (Layer 1) and Data Link (Layer 2) functions.",
            },
          ],
          flashcards: [
            {
              id: "nm-f1",
              front: "Name the 7 OSI layers (bottom to top)",
              back: "Physical, Data Link, Network, Transport, Session, Presentation, Application",
            },
            {
              id: "nm-f2",
              front: "TCP/IP layer for IP addressing and routing?",
              back: "Internet layer (maps to OSI Layer 3)",
            },
            {
              id: "nm-f3",
              front: "TCP vs UDP at Transport layer?",
              back: "TCP is reliable and connection-oriented; UDP is fast and connectionless",
            },
            {
              id: "nm-f4",
              front: "Layer 7 protocol examples?",
              back: "HTTP, HTTPS, DNS, SMTP, FTP",
            },
            {
              id: "nm-f5",
              front: "ICMP operates at which layer?",
              back: "Layer 3 (Network) — used by ping and traceroute",
            }
          ],
          objectives: ["N10-008-1.1","N10-008-1.2","N10-008-1.3"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-osi-sorter",
              title: "OSI Layer Sorter Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: OSI Layer Sorter Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "osi-layer-sorter",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["network-models"],
              order: 1,
            },
            {
              id: "network-plus-tcpip-map",
              title: "TCP/IP Model Map Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: TCP/IP Model Map Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "tcpip-layer-map",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["network-models"],
              order: 2,
            },
          ],
          questionBank: [
            {
              id: "nm-qb1",
              prompt: "Which layer adds source and destination MAC addresses?",
              choices: [
                { id: "a", text: "Layer 1" },
                { id: "b", text: "Layer 2" },
                { id: "c", text: "Layer 3" },
                { id: "d", text: "Layer 4" }
              ],
              correctChoiceId: "b",
              explanation: "Layer 2 (Data Link) encapsulates data in frames with MAC addresses.",
            },
            {
              id: "nm-qb2",
              prompt: "HTTPS primarily operates at which OSI layer?",
              choices: [
                { id: "a", text: "Layer 2" },
                { id: "b", text: "Layer 3" },
                { id: "c", text: "Layer 4" },
                { id: "d", text: "Layer 7" }
              ],
              correctChoiceId: "d",
              explanation: "HTTPS is an application-layer protocol, though it uses lower layers for transport and routing.",
            },
            {
              id: "nm-qb3",
              prompt: "Decapsulation occurs when data moves:",
              choices: [
                { id: "a", text: "Up the stack on the receiving host" },
                { id: "b", text: "Down the stack on the sending host" },
                { id: "c", text: "Only at Layer 1" },
                { id: "d", text: "Only in routers" }
              ],
              correctChoiceId: "a",
              explanation: "Receiving hosts strip headers layer by layer as data moves up the stack.",
            },
            {
              id: "nm-qb4",
              prompt: "UDP is preferred over TCP when:",
              choices: [
                { id: "a", text: "Guaranteed delivery is required" },
                { id: "b", text: "Low latency matters more than retransmissions" },
                { id: "c", text: "Large file transfers need flow control" },
                { id: "d", text: "Encryption is mandatory" }
              ],
              correctChoiceId: "b",
              explanation: "UDP avoids connection overhead, useful for real-time traffic that tolerates minor loss.",
            },
            {
              id: "nm-qb5",
              prompt: "If tracert succeeds but browsing fails, suspect:",
              choices: [
                { id: "a", text: "Layer 1 cable fault" },
                { id: "b", text: "Application or DNS issue at upper layers" },
                { id: "c", text: "Broken ARP table only" },
                { id: "d", text: "STP loop" }
              ],
              correctChoiceId: "b",
              explanation: "Layer 3 path works (tracert), so upper-layer application or name resolution is likely failing.",
            },
          ],
        },
        {
          id: "cabling",
          name: "Cabling",
          lesson: {
            title: "Network Cabling and Connectors",
            content: `Physical cabling connects network devices and determines speed, distance, and media type. Copper twisted-pair, fiber-optic, and coaxial cables each serve different environments and performance requirements.

Unshielded Twisted Pair (UTP) is the most common LAN cable. Categories define bandwidth: Cat5e supports 1 Gbps, Cat6 supports 1 Gbps with better crosstalk performance, and Cat6a supports 10 Gbps. RJ-45 connectors terminate Ethernet UTP cables. Straight-through cables connect unlike devices (PC to switch); crossover cables connect like devices (switch to switch), though Auto-MDIX often makes crossover unnecessary.

Fiber-optic cable uses light instead of electrical signals, enabling longer distances and immunity to electromagnetic interference. Single-mode fiber (SMF) carries one light mode for long distances; multimode fiber (MMF) uses multiple modes for shorter campus links. Common connectors include LC and SC.

Coaxial cable appears in broadband and legacy networks. Understanding cable standards, maximum segment lengths, and proper termination is critical for installation and troubleshooting physical layer problems on the Network+ exam.

Plenum-rated cable is required in air-handling spaces to meet fire codes. Shielded Twisted Pair (STP) adds metallic shielding for environments with heavy EMI. Direct Attach Copper (DAC) and Active Optical Cables (AOC) connect switches in data centers at 10G+ speeds.

Know maximum distances: Cat5e/Cat6 UTP supports 100 meters for Ethernet; multimode fiber commonly reaches 550 meters at 1 Gbps and varies by standard. T568A and T568B are wiring standards — use the same pinout on both ends of a cable.

On the exam, expect connector-to-media matching: RJ-45 for UTP, LC/SC for fiber, and F-type for coax in broadband. Document cable type, length, and labeling during installs — mislabeled patch panels are a common troubleshooting time sink.`,
          },
          keyFacts: [
            "UTP categories (Cat5e, Cat6, Cat6a) define speed and performance ratings",
            "Straight-through cables connect unlike devices; crossover connects like devices",
            "Fiber uses light; SMF for long distance, MMF for shorter campus runs",
            "RJ-45 is the standard connector for Ethernet twisted-pair",
            "Fiber is immune to EMI and supports much longer distances than copper",
            "Auto-MDIX on modern ports automatically detects required cable type",
          ],
          commonMistakes: [
            "Using a crossover cable when straight-through is required on modern auto-MDIX ports",
            "Confusing Cat5e maximum distance with Cat6a performance at 10 Gbps",
            "Selecting multimode fiber for long campus backbones that need single-mode reach",
            "Ignoring plenum-rated cable requirements in air-handling spaces",
            "Mixing up T568A and T568B pinouts when terminating RJ-45 connectors",
          ],
          examTraps: [
            "Straight-through vs crossover scenarios with legacy like-to-like device connections",
            "Questions asking which medium is immune to EMI—fiber, not UTP",
            "Cat rating traps: Cat6a required for 10GBASE-T, not basic Cat5e",
            "SMF vs MMF distance and cost trade-offs reversed in answer choices",
            "Connector type mismatches—RJ-45 for copper Ethernet vs LC/SC for fiber",
          ],
          quiz: [
            {
              id: "cab-q1",
              prompt: "Which cable type is immune to electromagnetic interference?",
              choices: [
                { id: "a", text: "UTP" },
                { id: "b", text: "STP" },
                { id: "c", text: "Fiber-optic" },
                { id: "d", text: "Coaxial" },
              ],
              correctChoiceId: "c",
              explanation:
                "Fiber-optic cable transmits light signals and is not affected by electromagnetic interference.",
            },
            {
              id: "cab-q2",
              prompt: "Which connector is standard for Ethernet twisted-pair cabling?",
              choices: [
                { id: "a", text: "BNC" },
                { id: "b", text: "RJ-45" },
                { id: "c", text: "RJ-11" },
                { id: "d", text: "F-type" },
              ],
              correctChoiceId: "b",
              explanation:
                "RJ-45 connectors terminate Ethernet UTP cables used in modern LANs.",
            },
            {
              id: "cab-q3",
              prompt: "Single-mode fiber (SMF) is primarily used for:",
              choices: [
                { id: "a", text: "Short patch cables only" },
                { id: "b", text: "Long-distance transmission" },
                { id: "c", text: "Telephone lines" },
                { id: "d", text: "Wireless backhaul" },
              ],
              correctChoiceId: "b",
              explanation:
                "SMF carries a single light mode over long distances with minimal signal loss.",
            },
            {
              id: "cab-q4",
              prompt: "A straight-through Ethernet cable is typically used to connect:",
              choices: [
                { id: "a", text: "Switch to switch" },
                { id: "b", text: "Router to router" },
                { id: "c", text: "PC to switch" },
                { id: "d", text: "Switch to switch without Auto-MDIX" },
              ],
              correctChoiceId: "c",
              explanation:
                "Straight-through cables connect unlike devices, such as a PC (MDI) to a switch (MDIX).",
            },
            {
              id: "cab-q5",
              prompt: "Cat6a twisted-pair cable supports up to:",
              choices: [
                { id: "a", text: "100 Mbps" },
                { id: "b", text: "1 Gbps" },
                { id: "c", text: "10 Gbps" },
                { id: "d", text: "40 Gbps" },
              ],
              correctChoiceId: "c",
              explanation:
                "Cat6a is rated for 10 Gbps Ethernet over supported distances.",
            },
          ],
          flashcards: [
            {
              id: "cab-f1",
              front: "Straight-through vs crossover cable use?",
              back: "Straight-through: unlike devices (PC to switch). Crossover: like devices (switch to switch).",
            },
            {
              id: "cab-f2",
              front: "SMF vs MMF fiber?",
              back: "SMF: single light mode, long distance. MMF: multiple modes, shorter campus links.",
            },
            {
              id: "cab-f3",
              front: "Standard Ethernet copper connector?",
              back: "RJ-45",
            },
            {
              id: "cab-f4",
              front: "Max UTP Ethernet distance?",
              back: "100 meters (328 feet) per segment",
            },
            {
              id: "cab-f5",
              front: "T568A vs T568B?",
              back: "Two RJ-45 pinout standards — use the same on both ends",
            }
          ],
          objectives: ["N10-008-1.4","N10-008-1.5"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-cable-drill",
              title: "Cable and Connector ID Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Cable and Connector ID Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "cable-type-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["cabling"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "cab-qb1",
              prompt: "Plenum cable is used in:",
              choices: [
                { id: "a", text: "Underground outdoor runs only" },
                { id: "b", text: "Air-handling spaces with fire code requirements" },
                { id: "c", text: "Wireless backhaul" },
                { id: "d", text: "Satellite links" }
              ],
              correctChoiceId: "b",
              explanation: "Plenum-rated jackets reduce toxic smoke in HVAC spaces.",
            },
            {
              id: "cab-qb2",
              prompt: "STP differs from UTP by adding:",
              choices: [
                { id: "a", text: "Shielding against EMI" },
                { id: "b", text: "Fiber strands" },
                { id: "c", text: "Higher voltage" },
                { id: "d", text: "Wireless capability" }
              ],
              correctChoiceId: "a",
              explanation: "Shielded Twisted Pair wraps pairs in metallic shielding for noisy environments.",
            },
            {
              id: "cab-qb3",
              prompt: "LC connectors are commonly used with:",
              choices: [
                { id: "a", text: "Fiber-optic cable" },
                { id: "b", text: "Coax broadband" },
                { id: "c", text: "Serial console" },
                { id: "d", text: "POTS telephone" }
              ],
              correctChoiceId: "a",
              explanation: "LC is a small form-factor fiber connector common in modern installs.",
            },
            {
              id: "cab-qb4",
              prompt: "Multimode fiber is typically chosen for:",
              choices: [
                { id: "a", text: "Campus and data center short runs" },
                { id: "b", text: "Transcontinental links only" },
                { id: "c", text: "Dial-up modems" },
                { id: "d", text: "Bluetooth" }
              ],
              correctChoiceId: "a",
              explanation: "MMF uses LED/VCSEL sources and suits shorter high-speed links.",
            },
            {
              id: "cab-qb5",
              prompt: "A rollover cable is used for:",
              choices: [
                { id: "a", text: "Console access to network devices" },
                { id: "b", text: "1 Gbps backbone" },
                { id: "c", text: "PoE to access points" },
                { id: "d", text: "Fiber termination" }
              ],
              correctChoiceId: "a",
              explanation: "Rollover (console) cables connect a PC serial/USB adapter to device console ports.",
            },
          ],
        },
        {
          id: "ethernet",
          name: "Ethernet",
          lesson: {
            title: "Ethernet Standards and Operation",
            content: `Ethernet is the dominant LAN technology, defined by IEEE 802.3 standards. It operates at Layer 2 (Data Link) using MAC addresses to deliver frames within a broadcast domain.

Ethernet frames include source and destination MAC addresses, a type/length field, payload data, and a Frame Check Sequence (FCS) for error detection. Switches learn MAC addresses by examining source addresses and build a MAC address table to forward frames only to the correct port, reducing collisions compared to legacy hubs.

Speed standards include Fast Ethernet (100 Mbps), Gigabit Ethernet (1 Gbps), 10 Gigabit, and beyond. Duplex settings matter: full-duplex allows simultaneous send and receive, while half-duplex can cause collisions. Auto-negotiation typically sets speed and duplex automatically, but mismatches cause performance problems.

Carrier Sense Multiple Access with Collision Detection (CSMA/CD) governed half-duplex Ethernet. Modern switched full-duplex networks largely eliminate collisions. Understanding VLAN tagging (802.1Q), broadcast domains, and Ethernet frame structure is essential for Network+ and production networks.

Modern Ethernet runs predominantly at full duplex on switched ports, eliminating collisions. Speeds include 1 Gbps (1000BASE-T), 10 Gbps, and beyond on fiber or specialized copper. Power over Ethernet (PoE/PoE+/PoE++) delivers power to phones, cameras, and access points over data pairs.

Ethernet frames include preamble, destination/source MAC, EtherType/802.1Q tag, payload, and FCS for error detection. Broadcast frames use destination FF:FF:FF:FF:FF:FF and stay within a VLAN broadcast domain. Jumbo frames exceed the traditional 1500-byte MTU and require end-to-end support.

When link lights show activity but no connectivity, verify speed/duplex mismatch, VLAN assignment, and that the switch port is not err-disabled by security features.`,
          },
          keyFacts: [
            "Ethernet operates at Layer 2 using 48-bit MAC addresses",
            "Switches build MAC address tables to forward frames unicast to the correct port",
            "Full-duplex eliminates collisions; half-duplex uses CSMA/CD",
            "Gigabit Ethernet (1000BASE-T) runs over Cat5e/Cat6 UTP",
            "Ethernet frames include source/dest MAC, type/length, payload, and FCS",
            "A broadcast domain is a set of devices that receive each other's broadcast frames",
          ],
          commonMistakes: [
            "Confusing collision domains with broadcast domains on switched networks",
            "Assuming hubs and switches both forward frames intelligently using MAC tables",
            "Attributing IP routing to Ethernet switches operating at Layer 2",
            "Forgetting that full-duplex eliminates collisions on modern switched ports",
            "Mixing up the FCS field purpose with VLAN tagging in 802.1Q frames",
          ],
          examTraps: [
            "Questions asking which device creates separate collision domains—switches per port",
            "MAC address format traps—48-bit hexadecimal, not 32-bit dotted decimal",
            "Half-duplex CSMA/CD scenarios on legacy hubs vs full-duplex switch ports",
            "EtherType field confused with IP protocol numbers at Layer 3",
            "Broadcast frame behavior—flooded to all ports in a VLAN except the source port",
          ],
          quiz: [
            {
              id: "eth-q1",
              prompt: "At which OSI layer does Ethernet primarily operate?",
              choices: [
                { id: "a", text: "Layer 1 - Physical" },
                { id: "b", text: "Layer 2 - Data Link" },
                { id: "c", text: "Layer 3 - Network" },
                { id: "d", text: "Layer 4 - Transport" },
              ],
              correctChoiceId: "b",
              explanation:
                "Ethernet is a Data Link layer technology that uses MAC addresses in frames.",
            },
            {
              id: "eth-q2",
              prompt: "What does a switch use to forward frames to the correct port?",
              choices: [
                { id: "a", text: "IP routing table" },
                { id: "b", text: "MAC address table" },
                { id: "c", text: "DNS cache" },
                { id: "d", text: "ARP table on the router" },
              ],
              correctChoiceId: "b",
              explanation:
                "Switches learn MAC addresses and forward frames based on the destination MAC in their CAM/MAC table.",
            },
            {
              id: "eth-q3",
              prompt: "Which duplex mode allows simultaneous send and receive?",
              choices: [
                { id: "a", text: "Half-duplex" },
                { id: "b", text: "Full-duplex" },
                { id: "c", text: "Simplex" },
                { id: "d", text: "Auto-simplex" },
              ],
              correctChoiceId: "b",
              explanation:
                "Full-duplex permits simultaneous transmission and reception, eliminating collisions on a point-to-point link.",
            },
            {
              id: "eth-q4",
              prompt: "CSMA/CD is associated with:",
              choices: [
                { id: "a", text: "Half-duplex Ethernet collision handling" },
                { id: "b", text: "IP routing" },
                { id: "c", text: "Wi-Fi encryption" },
                { id: "d", text: "DNS resolution" },
              ],
              correctChoiceId: "a",
              explanation:
                "CSMA/CD detects and handles collisions on half-duplex Ethernet segments.",
            },
            {
              id: "eth-q5",
              prompt: "A MAC address is how many bits?",
              choices: [
                { id: "a", text: "32 bits" },
                { id: "b", text: "48 bits" },
                { id: "c", text: "64 bits" },
                { id: "d", text: "128 bits" },
              ],
              correctChoiceId: "b",
              explanation:
                "Ethernet MAC addresses are 48 bits, typically written as six hex octets.",
            },
          ],
          flashcards: [
            {
              id: "eth-f1",
              front: "What layer does Ethernet use?",
              back: "Layer 2 (Data Link) with MAC addresses",
            },
            {
              id: "eth-f2",
              front: "How does a switch forward frames?",
              back: "Uses a MAC address table built from observed source MACs",
            },
            {
              id: "eth-f3",
              front: "Full-duplex vs half-duplex?",
              back: "Full-duplex: simultaneous TX/RX, no collisions. Half-duplex: CSMA/CD handles collisions.",
            },
            {
              id: "eth-f4",
              front: "Ethernet broadcast MAC?",
              back: "FF:FF:FF:FF:FF:FF",
            },
            {
              id: "eth-f5",
              front: "What does PoE provide?",
              back: "Power over data cable to devices like APs and VoIP phones",
            }
          ],
          objectives: ["N10-008-1.6","N10-008-2.1"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "eth-qb1",
              prompt: "CSMA/CD is relevant primarily in:",
              choices: [
                { id: "a", text: "Half-duplex shared Ethernet" },
                { id: "b", text: "Full-duplex switched ports" },
                { id: "c", text: "Fiber-only networks" },
                { id: "d", text: "IPv6 routing" }
              ],
              correctChoiceId: "a",
              explanation: "Collision detection mattered on shared half-duplex segments; switched full duplex avoids collisions.",
            },
            {
              id: "eth-qb2",
              prompt: "The FCS field in an Ethernet frame is used for:",
              choices: [
                { id: "a", text: "Error detection" },
                { id: "b", text: "VLAN tagging" },
                { id: "c", text: "IP routing" },
                { id: "d", text: "DNS resolution" }
              ],
              correctChoiceId: "a",
              explanation: "Frame Check Sequence detects corrupted frames.",
            },
            {
              id: "eth-qb3",
              prompt: "PoE is defined in IEEE:",
              choices: [
                { id: "a", text: "802.3af/at/bt" },
                { id: "b", text: "802.11ax" },
                { id: "c", text: "802.1X only" },
                { id: "d", text: "802.15" }
              ],
              correctChoiceId: "a",
              explanation: "IEEE 802.3af/at/bt standards define Power over Ethernet.",
            },
            {
              id: "eth-qb4",
              prompt: "A unicast frame is sent to:",
              choices: [
                { id: "a", text: "One specific MAC address" },
                { id: "b", text: "All hosts on the VLAN" },
                { id: "c", text: "All routers globally" },
                { id: "d", text: "Multicast group 224.0.0.1" }
              ],
              correctChoiceId: "a",
              explanation: "Unicast delivers to a single destination MAC.",
            },
            {
              id: "eth-qb5",
              prompt: "Default Ethernet MTU is typically:",
              choices: [
                { id: "a", text: "576 bytes" },
                { id: "b", text: "1500 bytes" },
                { id: "c", text: "9000 bytes" },
                { id: "d", text: "65535 bytes" }
              ],
              correctChoiceId: "b",
              explanation: "1500 bytes is the standard Ethernet payload MTU on most networks.",
            },
          ],
        },
      ],
    },
    {
      id: "network-addressing",
      name: "Network Addressing",
      topics: [
        {
          id: "ip-addressing",
          name: "IP Addressing",
          lesson: {
            title: "IPv4 and IPv6 Addressing",
            content: `IP addressing provides logical identifiers so routers can deliver packets across networks. IPv4 uses 32-bit addresses written in dotted decimal (e.g., 192.168.1.10). IPv6 uses 128-bit addresses written in hexadecimal groups.

IPv4 addresses combine a network portion and host portion, defined by the subnet mask or prefix length. Private ranges (RFC 1918) include 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 for internal networks. Public addresses are globally routable on the Internet.

Special IPv4 addresses include loopback (127.0.0.1), APIPA (169.254.0.0/16 for link-local auto-configuration), and broadcast addresses. IPv6 improves address space, simplifies header format, and includes built-in features like link-local (fe80::/10) and unique local addresses.

Address assignment can be static (manual) or dynamic (DHCP). Understanding public vs private, reserved ranges, and how hosts obtain addresses is fundamental for designing networks and troubleshooting connectivity on the Network+ exam.

Classful addressing (Class A/B/C) is legacy; modern networks use CIDR for flexible prefix lengths. Multicast addresses (224.0.0.0/4) deliver one-to-many traffic; link-local APIPA helps isolated troubleshooting when DHCP fails.

IPv6 introduces types: global unicast (2000::/3), unique local (fc00::/7), link-local (fe80::/10), and multicast (ff00::/8). Stateless Address Autoconfiguration (SLAAC) and DHCPv6 assign IPv6 addresses. IPv6 removes NAT requirement in theory but dual-stack and translation still appear in enterprise networks.

Always verify which address family a host uses — ping6, ipconfig /all, and show ipv6 interface brief reveal configuration gaps that cause "partial" connectivity.`,
          },
          keyFacts: [
            "IPv4 is 32-bit dotted decimal; IPv6 is 128-bit hexadecimal",
            "Private IPv4 ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
            "127.0.0.1 is loopback; 169.254.x.x is APIPA link-local",
            "Subnet mask or CIDR prefix defines network vs host portions",
            "IPv6 link-local addresses start with fe80::/10",
            "Static addressing is manual; DHCP provides dynamic assignment",
          ],
          commonMistakes: [
            "Using classful Class A/B/C rules when CIDR and VLSM are required",
            "Confusing APIPA 169.254.x.x with private RFC 1918 address ranges",
            "Forgetting to compress only one :: sequence when writing IPv6 addresses",
            "Assigning link-local fe80:: addresses as routable global unicast",
            "Mixing up loopback 127.0.0.1 with any other special-use range",
          ],
          examTraps: [
            "Private range identification—172.16.0.0/12 vs 192.168.0.0/16 vs 10.0.0.0/8",
            "IPv6 address type traps—link-local fe80:: vs unique local fc00::/7",
            "APIPA scenarios when DHCP fails—host self-assigns 169.254.x.x",
            "Questions asking which address is valid loopback—127.0.0.1 only",
            "IPv6 compression rules—leading zeros per group, not multiple :: sequences",
          ],
          quiz: [
            {
              id: "ipa-q1",
              prompt: "Which is a private IPv4 address range?",
              choices: [
                { id: "a", text: "8.8.8.0/24" },
                { id: "b", text: "192.168.1.0/24" },
                { id: "c", text: "203.0.113.0/24" },
                { id: "d", text: "11.0.0.0/8" },
              ],
              correctChoiceId: "b",
              explanation:
                "192.168.0.0/16 is an RFC 1918 private address range for internal networks.",
            },
            {
              id: "ipa-q2",
              prompt: "What is the purpose of the 127.0.0.1 address?",
              choices: [
                { id: "a", text: "Default gateway" },
                { id: "b", text: "Loopback to the local host" },
                { id: "c", text: "DHCP server" },
                { id: "d", text: "Broadcast address" },
              ],
              correctChoiceId: "b",
              explanation:
                "127.0.0.1 is the IPv4 loopback address used to test the local TCP/IP stack.",
            },
            {
              id: "ipa-q3",
              prompt: "APIPA addresses fall within which range?",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "169.254.0.0/16" },
                { id: "c", text: "172.16.0.0/12" },
                { id: "d", text: "224.0.0.0/4" },
              ],
              correctChoiceId: "b",
              explanation:
                "APIPA (169.254.0.0/16) is assigned when DHCP is unavailable.",
            },
            {
              id: "ipa-q4",
              prompt: "How many bits are in an IPv6 address?",
              choices: [
                { id: "a", text: "32" },
                { id: "b", text: "64" },
                { id: "c", text: "128" },
                { id: "d", text: "256" },
              ],
              correctChoiceId: "c",
              explanation:
                "IPv6 addresses are 128 bits, providing vastly more address space than IPv4.",
            },
            {
              id: "ipa-q5",
              prompt: "CIDR notation 192.168.10.0/24 indicates:",
              choices: [
                { id: "a", text: "24 hosts total" },
                { id: "b", text: "24 network bits in the prefix" },
                { id: "c", text: "24 broadcast domains" },
                { id: "d", text: "24 default gateways" },
              ],
              correctChoiceId: "b",
              explanation:
                "/24 means the first 24 bits are the network portion, leaving 8 bits for hosts.",
            },
          ],
          flashcards: [
            {
              id: "ipa-f1",
              front: "RFC 1918 private IPv4 ranges?",
              back: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
            },
            {
              id: "ipa-f2",
              front: "What is APIPA?",
              back: "169.254.0.0/16 — auto-assigned when DHCP fails",
            },
            {
              id: "ipa-f3",
              front: "IPv4 vs IPv6 address length?",
              back: "IPv4: 32 bits. IPv6: 128 bits.",
            },
            {
              id: "ipa-f4",
              front: "IPv6 link-local prefix?",
              back: "fe80::/10",
            },
            {
              id: "ipa-f5",
              front: "Multicast IPv4 range?",
              back: "224.0.0.0 through 239.255.255.255 (224.0.0.0/4)",
            }
          ],
          objectives: ["N10-008-1.7","N10-008-1.8"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-ipv6-compress",
              title: "IPv6 Address Compression Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: IPv6 Address Compression Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "ipv6-compress-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["ip-addressing"],
              order: 1,
            },
            {
              id: "network-plus-binary-ip",
              title: "Binary IP Converter Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Binary IP Converter Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "binary-ip-converter",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["ip-addressing"],
              order: 2,
            },
          ],
          questionBank: [
            {
              id: "ipa-qb1",
              prompt: "Which address is IPv6 link-local?",
              choices: [
                { id: "a", text: "192.168.1.1" },
                { id: "b", text: "fe80::1" },
                { id: "c", text: "127.0.0.1" },
                { id: "d", text: "224.0.0.1" }
              ],
              correctChoiceId: "b",
              explanation: "fe80::/10 is the IPv6 link-local range.",
            },
            {
              id: "ipa-qb2",
              prompt: "Dual-stack means:",
              choices: [
                { id: "a", text: "Running IPv4 and IPv6 simultaneously" },
                { id: "b", text: "Two default gateways only" },
                { id: "c", text: "Using two DNS servers" },
                { id: "d", text: "Bonding two switches" }
              ],
              correctChoiceId: "a",
              explanation: "Dual-stack hosts run both IPv4 and IPv6 protocol stacks.",
            },
            {
              id: "ipa-qb3",
              prompt: "A /16 IPv4 network has how many host bits?",
              choices: [
                { id: "a", text: "8" },
                { id: "b", text: "16" },
                { id: "c", text: "24" },
                { id: "d", text: "32" }
              ],
              correctChoiceId: "b",
              explanation: "32 total bits minus 16 network bits leaves 16 host bits.",
            },
            {
              id: "ipa-qb4",
              prompt: "SLAAC is used for:",
              choices: [
                { id: "a", text: "Stateless IPv6 address self-configuration" },
                { id: "b", text: "Subnetting IPv4" },
                { id: "c", text: "Wireless encryption" },
                { id: "d", text: "STP root election" }
              ],
              correctChoiceId: "a",
              explanation: "SLAAC lets hosts derive IPv6 addresses without a DHCP server.",
            },
            {
              id: "ipa-qb5",
              prompt: "Which is a public routable address?",
              choices: [
                { id: "a", text: "10.1.1.1" },
                { id: "b", text: "172.16.5.5" },
                { id: "c", text: "203.0.113.50" },
                { id: "d", text: "169.254.1.1" }
              ],
              correctChoiceId: "c",
              explanation: "203.0.113.50 is public; the others are private or link-local.",
            },
          ],
        },
        {
          id: "subnetting",
          name: "Subnetting",
          lesson: {
            title: "Subnetting and CIDR",
            content: `Subnetting divides a network into smaller segments for improved organization, security, and broadcast control. The subnet mask (or CIDR prefix) determines which portion of an IP address belongs to the network and which identifies hosts.

A /24 subnet (255.255.255.0) provides 256 addresses with 254 usable hosts (network and broadcast addresses are reserved). A /25 splits a /24 into two subnets of 128 addresses each. Each time you borrow a host bit for subnetting, you double the number of subnets.

To find the network address, perform a bitwise AND between the IP and subnet mask. The broadcast address is the last address in the subnet. The usable host range lies between network and broadcast. For example, 192.168.1.50/24 is in network 192.168.1.0 with broadcast 192.168.1.255.

Variable Length Subnet Masking (VLSM) allows different subnet sizes within one network design. Subnetting is a core Network+ skill: practice converting between CIDR, dotted decimal masks, calculating usable hosts, and determining whether two hosts are on the same subnet.

Exam subnetting requires fast mental math: memorize powers of two for host counts (2^n minus 2 usable in traditional IPv4 subnetting). A /26 provides 64 addresses (62 usable). Summarize routes to reduce routing table size — a single summary route can represent multiple contiguous subnets.

Practice identifying subnet boundaries: addresses in the same subnet share identical network bits. Wrong masks cause silent failures — hosts on different subnets without a router cannot communicate. VLSM design allocates the smallest adequate subnet per link to conserve addresses.

Document every subnet with ID, mask, gateway, VLAN, and DHCP scope. Subnetting errors are among the most common root causes in help-desk escalations.`,
          },
          keyFacts: [
            "/24 = 255.255.255.0 = 256 addresses, 254 usable hosts",
            "Network address is first in subnet; broadcast is last",
            "Borrowing host bits increases subnet count by powers of 2",
            "VLSM allows different prefix lengths in one design",
            "Two hosts communicate locally only if they share the same network portion",
            "CIDR prefix length indicates how many bits are the network ID",
          ],
          guidedExample: {
            title: "Subnet 172.16.50.0/24 into Four Equal /26 Networks",
            steps: [
              "Identify the requirement: four equal subnets from a /24 means borrowing 2 host bits (2^2 = 4), yielding /26.",
              "Calculate block size in the fourth octet: 256 - 192 (subnet mask) = 64, so subnet boundaries are .0, .64, .128, .192.",
              "List each subnet: 172.16.50.0/26 (usable .1–.62, broadcast .63), 172.16.50.64/26, 172.16.50.128/26, 172.16.50.192/26.",
              "Verify usable hosts per subnet: 6 host bits gives 2^6 - 2 = 62 usable addresses.",
              "Assign the router interface on each subnet as the first usable host (.1) and map VLANs to each range.",
              "Confirm no overlap and that all four subnets fit within the original 172.16.50.0/24 block.",
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
          realWorldScenario: "Your help desk escalates a ticket: new laptops in the warehouse cannot reach the inventory server, but PCs in the office VLAN work fine. You discover the warehouse was moved to 172.16.50.80/26 while DHCP still hands out 172.16.50.0/26 addresses. You recalculate the /26 boundaries, update the DHCP scope to 172.16.50.65–.126, set the gateway to 172.16.50.65, and verify ping to the server before closing the ticket.",
          estimatedStudyMinutes: 45,
          difficulty: "hard",
          prerequisites: ["ip-addressing"],
          quiz: [
            {
              id: "sub-q1",
              prompt: "How many usable host addresses are in a /24 subnet?",
              choices: [
                { id: "a", text: "254" },
                { id: "b", text: "256" },
                { id: "c", text: "512" },
                { id: "d", text: "1022" },
              ],
              correctChoiceId: "a",
              explanation:
                "A /24 has 256 total addresses minus network and broadcast = 254 usable hosts.",
            },
            {
              id: "sub-q2",
              prompt: "What is the broadcast address for 192.168.5.0/24?",
              choices: [
                { id: "a", text: "192.168.5.0" },
                { id: "b", text: "192.168.5.1" },
                { id: "c", text: "192.168.5.254" },
                { id: "d", text: "192.168.5.255" },
              ],
              correctChoiceId: "d",
              explanation:
                "The broadcast address is the last address in the subnet: 192.168.5.255 for a /24.",
            },
            {
              id: "sub-q3",
              prompt: "Subnet mask 255.255.255.128 equals which CIDR prefix?",
              choices: [
                { id: "a", text: "/23" },
                { id: "b", text: "/24" },
                { id: "c", text: "/25" },
                { id: "d", text: "/26" },
              ],
              correctChoiceId: "c",
              explanation:
                "255.255.255.128 has 25 network bits, written as /25.",
            },
            {
              id: "sub-q4",
              prompt: "Hosts 10.1.1.10/26 and 10.1.1.70/26 are:",
              choices: [
                { id: "a", text: "On the same subnet" },
                { id: "b", text: "On different subnets" },
                { id: "c", text: "Both broadcast addresses" },
                { id: "d", text: "Invalid addresses" },
              ],
              correctChoiceId: "b",
              explanation:
                "/26 creates 64-address subnets. 10.1.1.10 is in 10.1.1.0/26; 10.1.1.70 is in 10.1.1.64/26.",
            },
            {
              id: "sub-q5",
              prompt: "VLSM allows:",
              choices: [
                { id: "a", text: "Only one subnet size per network" },
                { id: "b", text: "Different subnet mask lengths within one design" },
                { id: "c", text: "Elimination of IP addresses" },
                { id: "d", text: "Automatic DNS registration" },
              ],
              correctChoiceId: "b",
              explanation:
                "Variable Length Subnet Masking uses different prefix lengths to allocate subnets efficiently.",
            },
          ],
          flashcards: [
            {
              id: "sub-f1",
              front: "Usable hosts in /24?",
              back: "254 (256 total minus network and broadcast)",
            },
            {
              id: "sub-f2",
              front: "255.255.255.0 in CIDR?",
              back: "/24",
            },
            {
              id: "sub-f3",
              front: "What is VLSM?",
              back: "Variable Length Subnet Masking — different subnet sizes in one network",
            },
            {
              id: "sub-f4",
              front: "Hosts in a /26 subnet?",
              back: "64 total addresses, 62 usable",
            },
            {
              id: "sub-f5",
              front: "How to find network address?",
              back: "Bitwise AND of IP and subnet mask",
            }
          ],
          objectives: ["N10-008-1.9","N10-008-1.10"],
          practiceType: ["reading","quiz","flashcard","simulator","external-lab"],
          externalResources: [
            {
              id: "packet-tracer",
              name: "Cisco Packet Tracer",
              url: "https://www.netacad.com/cisco-packet-tracer",
              cost: "free",
              platform: "windows",
              installNotes: "Create a free Cisco Networking Academy account to download Packet Tracer.",
            },
          ],
          assignments: [
            {
              id: "network-plus-subnet-drill",
              title: "Subnet and CIDR Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Subnet and CIDR Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "subnet-cidr-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["subnetting"],
              order: 1,
            },
            {
              id: "network-plus-vlsm-drill",
              title: "VLSM Allocation Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: VLSM Allocation Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "vlsm-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["subnetting"],
              order: 2,
            },
            {
              id: "subnet-four-networks-pt",
              title: "Assignment: Subnet a /24 into Four Equal Networks",
              type: "external-lab",
              instructions: "Open Cisco Packet Tracer and create four subnets from 192.168.100.0/24.\n\n1. Plan four /26 subnets and document network address, usable range, and broadcast for each.\n2. Add two PCs and one switch per subnet; assign IPs from your plan.\n3. Connect subnets through a router with one interface per subnet.\n4. Verify PC-to-PC connectivity within each subnet and confirm PCs on different subnets require routing.\n5. Save the file as subnet-four-lab.pkt.",
              estimatedMinutes: 45,
              externalResourceId: "packet-tracer",
              completionCriteria: ["Four /26 subnets documented with correct ranges","Router-on-a-stick or multi-interface routing configured","Intra-subnet ping succeeds; inter-subnet ping succeeds via router"],
              relatedTopicIds: ["subnetting"],
              order: 3,
            },
          ],
          questionBank: [
            {
              id: "sub-qb1",
              prompt: "How many /28 subnets fit in a /24?",
              choices: [
                { id: "a", text: "4" },
                { id: "b", text: "8" },
                { id: "c", text: "16" },
                { id: "d", text: "32" }
              ],
              correctChoiceId: "c",
              explanation: "Borrow 4 bits: 2^4 = 16 /28 subnets in a /24.",
            },
            {
              id: "sub-qb2",
              prompt: "Network address for 10.5.5.77/26 is:",
              choices: [
                { id: "a", text: "10.5.5.0" },
                { id: "b", text: "10.5.5.64" },
                { id: "c", text: "10.5.5.128" },
                { id: "d", text: "10.5.5.77" }
              ],
              correctChoiceId: "b",
              explanation: "/26 blocks are 64 addresses; 77 falls in 10.5.5.64/26.",
            },
            {
              id: "sub-qb3",
              prompt: "A /30 subnet provides how many usable hosts?",
              choices: [
                { id: "a", text: "2" },
                { id: "b", text: "4" },
                { id: "c", text: "6" },
                { id: "d", text: "14" }
              ],
              correctChoiceId: "a",
              explanation: "/30 has 4 addresses minus network and broadcast = 2 usable (common on point-to-point links).",
            },
            {
              id: "sub-qb4",
              prompt: "255.255.255.192 equals:",
              choices: [
                { id: "a", text: "/25" },
                { id: "b", text: "/26" },
                { id: "c", text: "/27" },
                { id: "d", text: "/28" }
              ],
              correctChoiceId: "b",
              explanation: "255.255.255.192 is 26 network bits (/26).",
            },
            {
              id: "sub-qb5",
              prompt: "Route summarization reduces:",
              choices: [
                { id: "a", text: "Routing table size" },
                { id: "b", text: "Cable length limits" },
                { id: "c", text: "DNS TTL" },
                { id: "d", text: "PoE wattage" }
              ],
              correctChoiceId: "a",
              explanation: "Summarization advertises one aggregate prefix for multiple contiguous subnets.",
            },
            {
              id: "sub-qb6",
              prompt: "First usable host in 192.168.10.0/30?",
              choices: [
                { id: "a", text: "192.168.10.0" },
                { id: "b", text: "192.168.10.1" },
                { id: "c", text: "192.168.10.2" },
                { id: "d", text: "192.168.10.3" }
              ],
              correctChoiceId: "b",
              explanation: ".0 is network; .1 is first usable on a /30 point-to-point link.",
            },
            {
              id: "sub-qb7",
              prompt: "How many usable hosts in a /27 subnet?",
              choices: [
                { id: "a", text: "30" },
                { id: "b", text: "32" },
                { id: "c", text: "62" },
                { id: "d", text: "126" }
              ],
              correctChoiceId: "a",
              explanation: "/27 leaves 5 host bits: 2^5 - 2 = 30 usable addresses.",
            },
            {
              id: "sub-qb8",
              prompt: "192.168.1.0/26 — network address of the 3rd subnet?",
              choices: [
                { id: "a", text: "192.168.1.128" },
                { id: "b", text: "192.168.1.64" },
                { id: "c", text: "192.168.1.192" },
                { id: "d", text: "192.168.1.0" }
              ],
              correctChoiceId: "a",
              explanation: "/26 blocks: .0, .64, .128, .192 — third subnet starts at .128.",
            },
          ],
        },
      ],
    },
    {
      id: "network-implementations",
      name: "Network Implementations",
      topics: [
        {
          id: "routing",
          name: "Routing",
          lesson: {
            title: "Routing Fundamentals",
            content: `Routing forwards packets between networks using Layer 3 logical addresses. Routers maintain routing tables that list destination networks and the next-hop path to reach them.

Static routes are manually configured and work well for small or stable networks. Dynamic routing protocols automatically exchange routes. Distance-vector protocols (like RIP) share full routing tables periodically. Link-state protocols (like OSPF) build a topology map and calculate shortest paths. BGP routes between autonomous systems on the Internet.

A default route (0.0.0.0/0) sends traffic to unknown destinations toward an upstream gateway. Administrative distance determines route preference when multiple sources exist. Longest prefix match selects the most specific route for a destination.

Every host needs a default gateway — the router on its subnet — to reach remote networks. Understanding routing tables, static vs dynamic routing, and how routers make forwarding decisions is essential for Network+ troubleshooting and design.

Routing protocols are classified as interior (IGP: RIP, OSPF, EIGRP) or exterior (EGP: BGP). Metrics differ: hop count (RIP), bandwidth/delay (EIGRP), cost (OSPF). Equal-cost multipath (ECMP) load-balances across paths with equal metric.

Connected and local routes appear automatically. Static routes need manual maintenance but offer predictability. Floating static routes provide backup paths with higher administrative distance. Policy-based routing overrides default forwarding for specific traffic.

Verify routing with show ip route, tracert, and ping to next-hop. Asymmetric routing can break stateful firewalls — a common advanced troubleshooting scenario.`,
          },
          keyFacts: [
            "Routers forward packets between networks using IP and routing tables",
            "Static routes are manual; dynamic protocols learn routes automatically",
            "OSPF is link-state; RIP is distance-vector",
            "Default route 0.0.0.0/0 points to the gateway for unknown destinations",
            "Longest prefix match selects the most specific route",
            "Hosts use a default gateway to reach networks outside their subnet",
          ],
          guidedExample: {
            title: "Troubleshoot Missing Routes on a Branch Office Router",
            steps: [
              "Symptom: PCs on 192.168.10.0/24 can ping each other but cannot reach 192.168.20.0/24 on another router interface.",
              "Verify Layer 3 connectivity: confirm both router interfaces are up/up with correct IPs in their respective subnets.",
              "Check the routing table on the source router—look for a route to 192.168.20.0/24 via next-hop or connected interface.",
              "If missing, add a static route: ip route 192.168.20.0 255.255.255.0 <next-hop-IP> or use a default route 0.0.0.0/0 for Internet-bound traffic.",
              "Confirm the return path: the remote router needs a route back to 192.168.10.0/24 or a summary/default route.",
              "Test with ping and tracert from a PC; verify longest prefix match selects the intended route.",
            ],
          },
          commonMistakes: [
            "Configuring a default gateway on hosts but forgetting return routes on remote routers",
            "Confusing administrative distance with routing protocol metric",
            "Assuming RIP and OSPF are interchangeable without understanding distance-vector vs link-state",
            "Ignoring longest prefix match when multiple routes could match a destination",
            "Mixing up connected, static, and dynamic route sources in the routing table",
          ],
          examTraps: [
            "Default route notation—0.0.0.0/0 is gateway of last resort, not 127.0.0.1",
            "OSPF described as distance-vector when it is link-state; RIP is distance-vector",
            "Administrative distance vs metric—AD picks between sources, metric picks within a protocol",
            "BGP classified as interior gateway protocol when it is exterior (between autonomous systems)",
            "Host off-subnet behavior—packets go to default gateway, not broadcast address",
          ],
          realWorldScenario: "After a WAN link upgrade, users at a remote site can browse the Internet but cannot reach the corporate file server on 10.20.30.0/24. You check the branch router and find only a default route via the ISP. You add a static route for 10.20.30.0/24 through the MPLS next-hop, confirm the HQ router has a return route, and verify end-to-end ping before documenting the change in the network runbook.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["ip-addressing", "subnetting"],
          quiz: [
            {
              id: "rt-q1",
              prompt: "Which device primarily forwards packets between different IP networks?",
              choices: [
                { id: "a", text: "Hub" },
                { id: "b", text: "Switch" },
                { id: "c", text: "Router" },
                { id: "d", text: "Repeater" },
              ],
              correctChoiceId: "c",
              explanation:
                "Routers operate at Layer 3 and forward packets between networks based on IP destinations.",
            },
            {
              id: "rt-q2",
              prompt: "A default route is written as:",
              choices: [
                { id: "a", text: "127.0.0.1/32" },
                { id: "b", text: "0.0.0.0/0" },
                { id: "c", text: "255.255.255.255/32" },
                { id: "d", text: "192.168.0.0/16" },
              ],
              correctChoiceId: "b",
              explanation:
                "0.0.0.0/0 matches all destinations and is used as the gateway of last resort.",
            },
            {
              id: "rt-q3",
              prompt: "OSPF is an example of a:",
              choices: [
                { id: "a", text: "Distance-vector routing protocol" },
                { id: "b", text: "Link-state routing protocol" },
                { id: "c", text: "Application layer protocol" },
                { id: "d", text: "Wireless encryption standard" },
              ],
              correctChoiceId: "b",
              explanation:
                "OSPF builds a link-state database and calculates shortest paths using Dijkstra's algorithm.",
            },
            {
              id: "rt-q4",
              prompt: "Static routing is best suited for:",
              choices: [
                { id: "a", text: "Large ISP core with constant topology changes" },
                { id: "b", text: "Small networks with predictable paths" },
                { id: "c", text: "Replacing DNS entirely" },
                { id: "d", text: "Eliminating default gateways" },
              ],
              correctChoiceId: "b",
              explanation:
                "Static routes are simple and predictable, ideal for small or stable network designs.",
            },
            {
              id: "rt-q5",
              prompt: "Longest prefix match means the router selects:",
              choices: [
                { id: "a", text: "The route with the smallest subnet mask" },
                { id: "b", text: "The most specific matching route" },
                { id: "c", text: "The first route in the table" },
                { id: "d", text: "The route with highest MAC address" },
              ],
              correctChoiceId: "b",
              explanation:
                "The router chooses the route with the longest (most specific) matching prefix.",
            },
          ],
          flashcards: [
            {
              id: "rt-f1",
              front: "Static vs dynamic routing?",
              back: "Static: manually configured. Dynamic: protocols learn routes automatically.",
            },
            {
              id: "rt-f2",
              front: "Default route notation?",
              back: "0.0.0.0/0 — gateway of last resort",
            },
            {
              id: "rt-f3",
              front: "OSPF routing type?",
              back: "Link-state protocol",
            },
            {
              id: "rt-f4",
              front: "RIP vs OSPF metric?",
              back: "RIP: hop count. OSPF: cost based on bandwidth.",
            },
            {
              id: "rt-f5",
              front: "What is ECMP?",
              back: "Equal-cost multipath — load balance across equal metric paths",
            }
          ],
          objectives: ["N10-008-2.2","N10-008-2.3"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-static-route",
              title: "Static Route Chooser Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Static Route Chooser Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "static-route-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["routing"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "rt-qb1",
              prompt: "BGP is primarily used for:",
              choices: [
                { id: "a", text: "Internet routing between autonomous systems" },
                { id: "b", text: "Layer 2 loop prevention" },
                { id: "c", text: "DHCP relay" },
                { id: "d", text: "Wi-Fi channel selection" }
              ],
              correctChoiceId: "a",
              explanation: "BGP exchanges routes between autonomous systems on the Internet.",
            },
            {
              id: "rt-qb2",
              prompt: "Administrative distance measures:",
              choices: [
                { id: "a", text: "Trust preference among route sources" },
                { id: "b", text: "Cable length" },
                { id: "c", text: "Wireless signal strength" },
                { id: "d", text: "DNS cache age" }
              ],
              correctChoiceId: "a",
              explanation: "Lower AD wins when multiple routes to the same prefix exist.",
            },
            {
              id: "rt-qb3",
              prompt: "A connected route is created when:",
              choices: [
                { id: "a", text: "An interface is configured with an IP and up" },
                { id: "b", text: "DNS resolves" },
                { id: "c", text: "STP converges" },
                { id: "d", text: "WEP is enabled" }
              ],
              correctChoiceId: "a",
              explanation: "Directly connected networks appear automatically in routing tables.",
            },
            {
              id: "rt-qb4",
              prompt: "RIP is limited by:",
              choices: [
                { id: "a", text: "Maximum 15 hops" },
                { id: "b", text: "Requires fiber only" },
                { id: "c", text: "Works only with IPv6" },
                { id: "d", text: "Cannot run on routers" }
              ],
              correctChoiceId: "a",
              explanation: "RIP count-to-infinity limits usable diameter (15 hops).",
            },
            {
              id: "rt-qb5",
              prompt: "A host sends off-subnet traffic to:",
              choices: [
                { id: "a", text: "Default gateway" },
                { id: "b", text: "Broadcast address" },
                { id: "c", text: "DNS root server" },
                { id: "d", text: "Any switch MAC" }
              ],
              correctChoiceId: "a",
              explanation: "Off-subnet packets go to the configured default gateway router.",
            },
            {
              id: "rt-qb6",
              prompt: "EIGRP is classified as:",
              choices: [
                { id: "a", text: "Advanced distance-vector (hybrid)" },
                { id: "b", text: "Pure link-state only" },
                { id: "c", text: "Exterior gateway protocol" },
                { id: "d", text: "Layer 2 protocol" }
              ],
              correctChoiceId: "a",
              explanation: "EIGRP combines distance-vector behavior with link-state-like features.",
            },
            {
              id: "rt-qb7",
              prompt: "Longest prefix match selects the route with:",
              choices: [
                { id: "a", text: "The most specific (longest) matching prefix" },
                { id: "b", text: "The shortest subnet mask" },
                { id: "c", text: "The highest MAC address" },
                { id: "d", text: "The lowest hop count only" }
              ],
              correctChoiceId: "a",
              explanation: "Routers prefer the most specific matching entry in the routing table.",
            },
            {
              id: "rt-qb8",
              prompt: "A floating static route is used to:",
              choices: [
                { id: "a", text: "Provide backup when primary routes fail" },
                { id: "b", text: "Replace DNS" },
                { id: "c", text: "Disable STP" },
                { id: "d", text: "Assign DHCP leases" }
              ],
              correctChoiceId: "a",
              explanation: "Floating statics have higher AD and activate when preferred routes disappear.",
            },
          ],
        },
        {
          id: "switching",
          name: "Switching",
          lesson: {
            title: "Switching and VLANs",
            content: `Switches connect devices within a LAN and forward traffic based on MAC addresses. Unlike hubs that flood all ports, switches make intelligent forwarding decisions using a Content Addressable Memory (CAM) table built from observed source MAC addresses.

Virtual LANs (VLANs) logically segment a switch into separate broadcast domains. IEEE 802.1Q tagging adds a VLAN ID to Ethernet frames so trunk links can carry multiple VLANs between switches. Access ports belong to one VLAN; trunk ports carry tagged traffic for multiple VLANs.

Spanning Tree Protocol (STP) prevents Layer 2 loops by blocking redundant paths while maintaining backup links. Without STP, broadcast storms can overwhelm a network. Port security can limit which MAC addresses may connect to a switch port.

Understanding switching concepts — broadcast domains, VLAN assignment, trunking, and loop prevention — is critical for enterprise LAN design and the Network+ exam.

Managed switches offer VLANs, QoS, port mirroring, and SNMP monitoring. Link aggregation (802.3ad/LACP) bundles ports for bandwidth and redundancy. Switch stacking treats multiple switches as one logical unit for management.

Inter-VLAN routing requires a Layer 3 device — router-on-a-stick or multilayer switch SVIs. Native VLAN on trunks should match on both sides; mismatches cause subtle VLAN leaks. BPDU Guard and Root Guard protect against rogue switches and STP manipulation.

Document VLAN-to-subnet mapping and trunk allowed VLAN lists. These design artifacts prevent outages during changes.`,
          },
          keyFacts: [
            "Switches forward based on destination MAC addresses in a CAM table",
            "VLANs create separate broadcast domains on one physical switch",
            "802.1Q tagging identifies VLANs on trunk links",
            "Access ports carry one VLAN; trunk ports carry multiple tagged VLANs",
            "STP prevents Layer 2 loops by blocking redundant paths",
            "Port security restricts allowed MAC addresses on a switch port",
          ],
          commonMistakes: [
            "Placing all user VLANs on the native VLAN without matching trunk configuration on both ends",
            "Forgetting that inter-VLAN routing requires a Layer 3 device, not a basic Layer 2 switch",
            "Assuming STP eliminates the need for physical loop prevention in poorly cabled networks",
            "Mismatching allowed VLAN lists on trunk ports between switches",
            "Using VLAN 1 for production user traffic despite security best practice to avoid the default VLAN",
          ],
          examTraps: [
            "802.1Q native VLAN mismatch causing one-way traffic or VLAN leaks on trunks",
            "Access vs trunk port scenarios—access carries one untagged VLAN, trunk carries multiple tagged",
            "Inter-VLAN routing questions where ping works within VLAN but fails across VLANs",
            "STP root bridge election traps—lowest bridge ID wins, not highest",
            "Port security violation modes—shutdown vs restrict vs protect",
          ],
          quiz: [
            {
              id: "sw-q1",
              prompt: "What is the primary purpose of a VLAN?",
              choices: [
                { id: "a", text: "Increase physical cable length" },
                { id: "b", text: "Logically segment broadcast domains" },
                { id: "c", text: "Replace IP routing" },
                { id: "d", text: "Encrypt wireless traffic" },
              ],
              correctChoiceId: "b",
              explanation:
                "VLANs divide a switch into separate broadcast domains for isolation and organization.",
            },
            {
              id: "sw-q2",
              prompt: "IEEE 802.1Q is used for:",
              choices: [
                { id: "a", text: "Wi-Fi encryption" },
                { id: "b", text: "VLAN tagging on trunk links" },
                { id: "c", text: "IP subnetting" },
                { id: "d", text: "DNS record types" },
              ],
              correctChoiceId: "b",
              explanation:
                "802.1Q inserts a VLAN tag into Ethernet frames for trunk transport between switches.",
            },
            {
              id: "sw-q3",
              prompt: "Spanning Tree Protocol (STP) prevents:",
              choices: [
                { id: "a", text: "IP address conflicts" },
                { id: "b", text: "Layer 2 switching loops" },
                { id: "c", text: "DHCP exhaustion" },
                { id: "d", text: "DNS cache poisoning" },
              ],
              correctChoiceId: "b",
              explanation:
                "STP blocks redundant paths to prevent broadcast storms caused by Layer 2 loops.",
            },
            {
              id: "sw-q4",
              prompt: "An access port on a switch typically:",
              choices: [
                { id: "a", text: "Carries multiple tagged VLANs" },
                { id: "b", text: "Belongs to a single VLAN" },
                { id: "c", text: "Routes between subnets" },
                { id: "d", text: "Terminates VPN tunnels" },
              ],
              correctChoiceId: "b",
              explanation:
                "Access ports connect end devices and belong to one untagged VLAN.",
            },
            {
              id: "sw-q5",
              prompt: "A switch builds its forwarding table using:",
              choices: [
                { id: "a", text: "Source MAC addresses of received frames" },
                { id: "b", text: "Destination IP addresses only" },
                { id: "c", text: "DNS hostnames" },
                { id: "d", text: "Wireless SSIDs" },
              ],
              correctChoiceId: "a",
              explanation:
                "Switches learn MAC addresses from the source address of incoming frames.",
            },
          ],
          flashcards: [
            {
              id: "sw-f1",
              front: "Purpose of VLANs?",
              back: "Logical broadcast domain segmentation on a switch",
            },
            {
              id: "sw-f2",
              front: "802.1Q is used for?",
              back: "VLAN tagging on trunk links",
            },
            {
              id: "sw-f3",
              front: "What does STP prevent?",
              back: "Layer 2 switching loops and broadcast storms",
            },
            {
              id: "sw-f4",
              front: "Native VLAN on a trunk?",
              back: "Untagged VLAN — must match on both trunk ends",
            },
            {
              id: "sw-f5",
              front: "LACP purpose?",
              back: "802.3ad link aggregation for bandwidth/redundancy",
            }
          ],
          objectives: ["N10-008-2.4","N10-008-2.5"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-vlan-trunk",
              title: "VLAN and Trunk Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: VLAN and Trunk Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "vlan-trunk-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["switching"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "sw-qb1",
              prompt: "Inter-VLAN routing requires:",
              choices: [
                { id: "a", text: "A Layer 3 device" },
                { id: "b", text: "A hub" },
                { id: "c", text: "WEP keys" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "Routing between VLANs needs L3 — router or multilayer switch.",
            },
            {
              id: "sw-qb2",
              prompt: "Port mirroring is used to:",
              choices: [
                { id: "a", text: "Copy traffic to an analysis port" },
                { id: "b", text: "Increase PoE wattage" },
                { id: "c", text: "Assign DHCP scopes" },
                { id: "d", text: "Compress IPv6" }
              ],
              correctChoiceId: "a",
              explanation: "SPAN/mirror ports send copies to IDS or Wireshark capture.",
            },
            {
              id: "sw-qb3",
              prompt: "A broadcast domain is bounded by:",
              choices: [
                { id: "a", text: "VLAN or subnet boundaries" },
                { id: "b", text: "Cable color" },
                { id: "c", text: "DNS TTL" },
                { id: "d", text: "TLS version" }
              ],
              correctChoiceId: "a",
              explanation: "Each VLAN is a separate broadcast domain.",
            },
            {
              id: "sw-qb4",
              prompt: "Root Guard prevents:",
              choices: [
                { id: "a", text: "Unauthorized switch becoming STP root" },
                { id: "b", text: "DHCP Discover" },
                { id: "c", text: "IPv6 SLAAC" },
                { id: "d", text: "HTTPS" }
              ],
              correctChoiceId: "a",
              explanation: "Root Guard blocks superior BPDUs on designated ports.",
            },
            {
              id: "sw-qb5",
              prompt: "A CAM table overflow attack targets:",
              choices: [
                { id: "a", text: "MAC learning table" },
                { id: "b", text: "BGP tables" },
                { id: "c", text: "DNS root hints" },
                { id: "d", text: "NTP stratum" }
              ],
              correctChoiceId: "a",
              explanation: "Flooding fake MACs can force switch to hub-like flooding.",
            },
          ],
        },
        {
          id: "wireless-networking",
          name: "Wireless Networking",
          lesson: {
            title: "Wi-Fi Standards and Security",
            content: `Wireless networking uses radio frequencies to connect devices without physical cables. IEEE 802.11 defines Wi-Fi standards: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), and 802.11ax (Wi-Fi 6) offer increasing speeds and efficiency. Frequencies include 2.4 GHz (longer range, more interference) and 5 GHz (shorter range, more channels).

A Service Set Identifier (SSID) is the network name clients see. Wireless access points (APs) connect wireless clients to the wired LAN. Channels in 2.4 GHz overlap; only channels 1, 6, and 11 are non-overlapping in North America. Site surveys help plan AP placement for coverage and capacity.

Security protocols evolved from WEP (broken) to WPA, WPA2, and WPA3. WPA2-PSK uses a pre-shared key; enterprise deployments use 802.1X with a RADIUS server. Wi-Fi Protected Setup (WPS) is convenient but has known vulnerabilities.

Understanding wireless channels, SSIDs, AP modes, and encryption standards is essential for deploying secure wireless networks and troubleshooting connectivity issues on the Network+ exam.

Wi-Fi 6 (802.11ax) adds OFDMA and better dense-client performance. 6 GHz band (Wi-Fi 6E) adds channels where supported. Beamforming and MIMO increase throughput. Controller-based deployments centralize AP management; lightweight APs tunnel to WLCs.

Survey for coverage, overlap, and interference — neighboring APs on the same channel cause co-channel contention. Hidden node problems occur when clients cannot hear each other but both reach the AP. Captive portals provide guest access with web authentication.

Always match security to environment: WPA3-Personal for home/SMB; WPA3-Enterprise with 802.1X for corporate. Disable WPS and legacy WPA where possible.`,
          },
          keyFacts: [
            "802.11 defines Wi-Fi; common bands are 2.4 GHz and 5 GHz",
            "SSID is the wireless network name broadcast by an access point",
            "Channels 1, 6, and 11 are non-overlapping in 2.4 GHz",
            "WPA2 and WPA3 are current secure encryption standards; WEP is obsolete",
            "802.1X with RADIUS provides enterprise wireless authentication",
            "APs bridge wireless clients to the wired Ethernet network",
          ],
          guidedExample: {
            title: "Plan Channel Layout for a Two-Floor Office Wi-Fi Deployment",
            steps: [
              "Survey the floor plan and identify coverage zones—conference rooms, open office, and warehouse areas.",
              "On 2.4 GHz, assign non-overlapping channels 1, 6, and 11 to adjacent APs to minimize co-channel interference.",
              "Place 5 GHz APs closer together with more available channels for higher throughput in dense areas.",
              "Configure WPA3-Enterprise with 802.1X and RADIUS for staff SSID; use WPA3-Personal or captive portal for guest SSID.",
              "Disable WPS and legacy WEP/WPA on all APs; verify SSID names do not leak internal naming conventions.",
              "Run a post-deployment site survey with a Wi-Fi analyzer to confirm signal strength and channel separation.",
            ],
          },
          commonMistakes: [
            "Deploying adjacent APs on overlapping 2.4 GHz channels (e.g., 1 and 3) causing co-channel contention",
            "Using WEP or WPA-TKIP in production because legacy devices still support them",
            "Confusing SSID broadcast disable with security—hidden SSIDs are not encryption",
            "Ignoring hidden node problems in warehouse environments with metal shelving",
            "Enabling WPS for convenience despite known brute-force vulnerabilities",
          ],
          examTraps: [
            "WEP presented as acceptable when WPA2/WPA3 are the secure choices",
            "Channel overlap traps—only 1, 6, 11 are non-overlapping in 2.4 GHz (North America)",
            "802.1X questions asking what provides authentication—RADIUS, not MAC filtering alone",
            "Wi-Fi standard vs frequency band—802.11ac is 5 GHz primary, not 900 MHz",
            "MIMO and beamforming described as encryption features instead of throughput enhancements",
          ],
          realWorldScenario: "Users on the second floor report intermittent Wi-Fi drops during peak hours. A site survey shows three APs on channel 6 within range of each other and a microwave oven near the break room causing 2.4 GHz noise. You move one AP to channel 11, shift high-density users to 5 GHz, and relocate the break-room AP away from the microwave. Connectivity stabilizes and throughput tests meet the SLA.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["ethernet"],
          quiz: [
            {
              id: "wl-q1",
              prompt: "What does SSID stand for?",
              choices: [
                { id: "a", text: "Secure Socket ID" },
                { id: "b", text: "Service Set Identifier" },
                { id: "c", text: "System Subnet ID" },
                { id: "d", text: "Signal Strength Index Data" },
              ],
              correctChoiceId: "b",
              explanation:
                "SSID is the wireless network name that clients use to identify and join a Wi-Fi network.",
            },
            {
              id: "wl-q2",
              prompt: "Which wireless encryption standard should NOT be used?",
              choices: [
                { id: "a", text: "WPA2" },
                { id: "b", text: "WPA3" },
                { id: "c", text: "WEP" },
                { id: "d", text: "WPA2-Enterprise" },
              ],
              correctChoiceId: "c",
              explanation:
                "WEP is cryptographically broken and should never be used in production networks.",
            },
            {
              id: "wl-q3",
              prompt: "Non-overlapping 2.4 GHz channels in North America include:",
              choices: [
                { id: "a", text: "1, 3, 5" },
                { id: "b", text: "1, 6, 11" },
                { id: "c", text: "2, 4, 8" },
                { id: "d", text: "5, 10, 15" },
              ],
              correctChoiceId: "b",
              explanation:
                "Channels 1, 6, and 11 do not overlap in the 2.4 GHz band, reducing interference.",
            },
            {
              id: "wl-q4",
              prompt: "An access point primarily:",
              choices: [
                { id: "a", text: "Routes between autonomous systems" },
                { id: "b", text: "Connects wireless clients to a wired network" },
                { id: "c", text: "Assigns public IP addresses" },
                { id: "d", text: "Resolves domain names" },
              ],
              correctChoiceId: "b",
              explanation:
                "APs provide wireless connectivity and bridge clients to the wired LAN infrastructure.",
            },
            {
              id: "wl-q5",
              prompt: "802.1X in wireless networks typically uses:",
              choices: [
                { id: "a", text: "A RADIUS server for authentication" },
                { id: "b", text: "Static ARP entries" },
                { id: "c", text: "WEP keys only" },
                { id: "d", text: "Manual MAC filtering alone" },
              ],
              correctChoiceId: "a",
              explanation:
                "Enterprise wireless uses 802.1X port-based authentication, often backed by RADIUS.",
            },
          ],
          flashcards: [
            {
              id: "wl-f1",
              front: "What is an SSID?",
              back: "Service Set Identifier — the Wi-Fi network name",
            },
            {
              id: "wl-f2",
              front: "Non-overlapping 2.4 GHz channels?",
              back: "1, 6, and 11",
            },
            {
              id: "wl-f3",
              front: "Current Wi-Fi security standards?",
              back: "WPA2 and WPA3 (WEP is obsolete)",
            },
            {
              id: "wl-f4",
              front: "802.11ax marketing name?",
              back: "Wi-Fi 6",
            },
            {
              id: "wl-f5",
              front: "Hidden node problem?",
              back: "Clients can't hear each other but both reach the AP — causes collisions",
            }
          ],
          objectives: ["N10-008-2.6","N10-008-2.7"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-wifi-std",
              title: "Wireless Standard Matcher Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Wireless Standard Matcher Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "wireless-standard-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["wireless-networking"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "wl-qb1",
              prompt: "802.11ac operates primarily in:",
              choices: [
                { id: "a", text: "5 GHz band" },
                { id: "b", text: "900 MHz only" },
                { id: "c", text: "Submarine sonar" },
                { id: "d", text: "POTS" }
              ],
              correctChoiceId: "a",
              explanation: "802.11ac (Wi-Fi 5) uses 5 GHz for higher throughput.",
            },
            {
              id: "wl-qb2",
              prompt: "MIMO improves wireless by:",
              choices: [
                { id: "a", text: "Using multiple antennas for spatial streams" },
                { id: "b", text: "Disabling encryption" },
                { id: "c", text: "Removing SSIDs" },
                { id: "d", text: "Blocking 5 GHz" }
              ],
              correctChoiceId: "a",
              explanation: "Multiple-input multiple-output increases capacity and reliability.",
            },
            {
              id: "wl-qb3",
              prompt: "A captive portal typically provides:",
              choices: [
                { id: "a", text: "Guest web authentication before network access" },
                { id: "b", text: "Fiber termination" },
                { id: "c", text: "STP root bridge election" },
                { id: "d", text: "Static NAT" }
              ],
              correctChoiceId: "a",
              explanation: "Captive portals redirect users to accept terms or login for guest Wi-Fi.",
            },
            {
              id: "wl-qb4",
              prompt: "Co-channel interference happens when:",
              choices: [
                { id: "a", text: "APs use the same channel in range" },
                { id: "b", text: "Cables exceed 100m" },
                { id: "c", text: "DNS TTL expires" },
                { id: "d", text: "IPv6 is disabled" }
              ],
              correctChoiceId: "a",
              explanation: "Same-channel APs share airtime, reducing performance.",
            },
            {
              id: "wl-qb5",
              prompt: "WPA3 improves on WPA2 by:",
              choices: [
                { id: "a", text: "Stronger encryption and SAE for personal networks" },
                { id: "b", text: "Removing passphrases entirely" },
                { id: "c", text: "Using WEP fallback" },
                { id: "d", text: "Disabling authentication" }
              ],
              correctChoiceId: "a",
              explanation: "WPA3 uses SAE (Dragonfly) for better personal-network security.",
            },
            {
              id: "wl-qb6",
              prompt: "Wi-Fi 6 corresponds to IEEE standard:",
              choices: [
                { id: "a", text: "802.11ax" },
                { id: "b", text: "802.11ac" },
                { id: "c", text: "802.11n" },
                { id: "d", text: "802.3" }
              ],
              correctChoiceId: "a",
              explanation: "802.11ax is marketed as Wi-Fi 6 with OFDMA and improved dense-client performance.",
            },
            {
              id: "wl-qb7",
              prompt: "802.1X enterprise wireless authentication typically uses:",
              choices: [
                { id: "a", text: "A RADIUS server" },
                { id: "b", text: "Static WEP keys only" },
                { id: "c", text: "DNS zone transfers" },
                { id: "d", text: "STP root bridge election" }
              ],
              correctChoiceId: "a",
              explanation: "802.1X port-based authentication is backed by RADIUS in enterprise deployments.",
            },
            {
              id: "wl-qb8",
              prompt: "2.4 GHz band trade-off vs 5 GHz:",
              choices: [
                { id: "a", text: "Longer range but more interference" },
                { id: "b", text: "Shorter range and fewer channels" },
                { id: "c", text: "No difference" },
                { id: "d", text: "5 GHz always has longer range" }
              ],
              correctChoiceId: "a",
              explanation: "2.4 GHz penetrates better but shares crowded spectrum; 5 GHz offers more channels and speed.",
            },
          ],
        },
      ],
    },
    {
      id: "network-services",
      name: "Network Services",
      topics: [
        {
          id: "dns",
          name: "DNS",
          lesson: {
            title: "Domain Name System",
            content: `DNS translates human-readable domain names (like www.example.com) into IP addresses that computers use to route traffic. Without DNS, users would need to memorize numeric IP addresses for every service.

DNS uses a hierarchical distributed database. Root servers sit at the top, followed by Top-Level Domain (TLD) servers (.com, .org), authoritative servers for specific domains, and recursive resolvers that clients query. A typical lookup: client asks resolver, resolver queries root, TLD, then authoritative server, and caches the result.

Common record types include A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail server), and PTR (reverse lookup). TTL (Time to Live) controls how long records are cached. DNS uses UDP port 53 for queries and TCP port 53 for large transfers or zone transfers.

DNS problems cause "server not found" errors even when the network is up. Understanding record types, resolver behavior, and forward vs reverse lookups is essential for Network+ and production troubleshooting.

Split-horizon DNS serves different answers internally vs externally. DNSSEC adds signature validation against tampering. Common troubleshooting: flush local cache (ipconfig /flushdns), verify resolver IP, test with nslookup or dig, check forward vs reverse zones.

SRV records locate services (e.g., _ldap._tcp). TXT records hold SPF, DKIM, and verification strings. Zone transfers (AXFR) replicate records between primary and secondary DNS servers over TCP 53.

Latency and TTL choices affect failover speed — low TTL speeds changes but increases query load. Document authoritative vs recursive resolver roles clearly.`,
          },
          keyFacts: [
            "DNS resolves domain names to IP addresses",
            "A records map to IPv4; AAAA records map to IPv6",
            "CNAME creates an alias; MX specifies mail servers",
            "Recursive resolvers query on behalf of clients and cache results",
            "DNS typically uses UDP port 53; TCP 53 for large responses",
            "TTL controls how long DNS answers are cached",
          ],
          commonMistakes: [
            "Confusing A records (IPv4) with AAAA records (IPv6) when troubleshooting name resolution",
            "Using CNAME where an MX or SRV record is required for mail or service discovery",
            "Ignoring TTL when diagnosing stale DNS after a server IP change",
            "Assuming DNS always uses TCP—most queries use UDP port 53",
            "Forgetting forward vs reverse lookup zones (PTR records) in troubleshooting",
          ],
          examTraps: [
            "Record type traps—MX for mail, CNAME for alias, PTR for reverse DNS",
            "Recursive vs authoritative server roles reversed in scenario questions",
            "DNS port 53 UDP vs TCP—TCP used for zone transfers or large responses",
            "FQDN trailing dot significance ignored in zone configuration questions",
            "Split-horizon or internal vs external DNS confusion in hybrid cloud scenarios",
          ],
          quiz: [
            {
              id: "dns-q1",
              prompt: "Which DNS record type maps a name to an IPv4 address?",
              choices: [
                { id: "a", text: "MX" },
                { id: "b", text: "CNAME" },
                { id: "c", text: "A" },
                { id: "d", text: "PTR" },
              ],
              correctChoiceId: "c",
              explanation:
                "A records map hostnames to IPv4 addresses.",
            },
            {
              id: "dns-q2",
              prompt: "DNS queries most commonly use which transport?",
              choices: [
                { id: "a", text: "UDP port 53" },
                { id: "b", text: "TCP port 80" },
                { id: "c", text: "UDP port 67" },
                { id: "d", text: "ICMP" },
              ],
              correctChoiceId: "a",
              explanation:
                "Standard DNS queries use UDP port 53; TCP 53 is used for larger responses or zone transfers.",
            },
            {
              id: "dns-q3",
              prompt: "A CNAME record:",
              choices: [
                { id: "a", text: "Maps a name to another hostname alias" },
                { id: "b", text: "Defines the mail server priority" },
                { id: "c", text: "Provides reverse IP lookup" },
                { id: "d", text: "Assigns DHCP scopes" },
              ],
              correctChoiceId: "a",
              explanation:
                "CNAME (Canonical Name) records create an alias pointing one name to another hostname.",
            },
            {
              id: "dns-q4",
              prompt: "TTL in a DNS record determines:",
              choices: [
                { id: "a", text: "Cable maximum length" },
                { id: "b", text: "How long the record may be cached" },
                { id: "c", text: "The subnet mask" },
                { id: "d", text: "Wireless channel width" },
              ],
              correctChoiceId: "b",
              explanation:
                "Time to Live specifies how long resolvers should cache the DNS answer.",
            },
            {
              id: "dns-q5",
              prompt: "MX records specify:",
              choices: [
                { id: "a", text: "Mail exchange servers for a domain" },
                { id: "b", text: "Maximum transfer unit" },
                { id: "c", text: "Multicast group addresses" },
                { id: "d", text: "Management VLAN IDs" },
              ],
              correctChoiceId: "a",
              explanation:
                "MX (Mail Exchange) records identify mail servers responsible for a domain.",
            },
          ],
          flashcards: [
            {
              id: "dns-f1",
              front: "A vs AAAA DNS records?",
              back: "A: IPv4 address. AAAA: IPv6 address.",
            },
            {
              id: "dns-f2",
              front: "DNS port and protocol?",
              back: "UDP port 53 (TCP 53 for large transfers)",
            },
            {
              id: "dns-f3",
              front: "What does CNAME do?",
              back: "Creates a hostname alias pointing to another name",
            },
            {
              id: "dns-f4",
              front: "PTR record purpose?",
              back: "Reverse DNS — IP to hostname",
            },
            {
              id: "dns-f5",
              front: "SRV record used for?",
              back: "Service location (host and port for a service)",
            }
          ],
          objectives: ["N10-008-3.1","N10-008-3.2"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-dns-records",
              title: "DNS Record Matcher Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: DNS Record Matcher Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "dns-record-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["dns"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "dns-qb1",
              prompt: "Reverse DNS uses which record type?",
              choices: [
                { id: "a", text: "PTR" },
                { id: "b", text: "MX" },
                { id: "c", text: "CNAME" },
                { id: "d", text: "TXT" }
              ],
              correctChoiceId: "a",
              explanation: "PTR maps IP addresses back to hostnames.",
            },
            {
              id: "dns-qb2",
              prompt: "A secondary DNS server typically receives updates via:",
              choices: [
                { id: "a", text: "Zone transfer" },
                { id: "b", text: "DHCP Discover" },
                { id: "c", text: "ARP" },
                { id: "d", text: "STP" }
              ],
              correctChoiceId: "a",
              explanation: "Zone transfers replicate records from primary to secondary.",
            },
            {
              id: "dns-qb3",
              prompt: "DNSSEC provides:",
              choices: [
                { id: "a", text: "Cryptographic validation of DNS responses" },
                { id: "b", text: "Wireless encryption" },
                { id: "c", text: "PoE budgeting" },
                { id: "d", text: "Cable testing" }
              ],
              correctChoiceId: "a",
              explanation: "DNSSEC signs records to detect spoofing/tampering.",
            },
            {
              id: "dns-qb4",
              prompt: "An authoritative server:",
              choices: [
                { id: "a", text: "Holds official records for a zone" },
                { id: "b", text: "Only caches other zones" },
                { id: "c", text: "Assigns IP addresses" },
                { id: "d", text: "Terminates VPNs" }
              ],
              correctChoiceId: "a",
              explanation: "Authoritative servers are the source of truth for their zone.",
            },
            {
              id: "dns-qb5",
              prompt: "Low TTL values cause:",
              choices: [
                { id: "a", text: "Faster propagation of record changes" },
                { id: "b", text: "Permanent caching" },
                { id: "c", text: "STP reconvergence" },
                { id: "d", text: "APIPA assignment" }
              ],
              correctChoiceId: "a",
              explanation: "Short TTL expires cache quickly, speeding DNS changes.",
            },
          ],
        },
        {
          id: "dhcp",
          name: "DHCP",
          lesson: {
            title: "Dynamic Host Configuration Protocol",
            content: `DHCP automatically assigns IP configuration to clients, reducing manual errors and simplifying network administration. A DHCP server provides an IP address, subnet mask, default gateway, DNS servers, and optional parameters like lease time and domain name.

The DHCP process uses DORA: Discover (client broadcast seeking a server), Offer (server proposes an address), Request (client accepts), and Acknowledge (server confirms the lease). Clients broadcast Discover because they do not yet have an IP address.

DHCP uses UDP ports 67 (server) and 68 (client). Lease duration defines how long a client may use an address before renewal. Reservations assign fixed addresses to specific MAC addresses while still using DHCP management. Scopes define pools of addresses for a subnet.

When DHCP fails, Windows clients may self-assign APIPA addresses (169.254.x.x). Understanding the DORA process, lease renewal, and DHCP relay (for remote subnets) is key for Network+ troubleshooting.

DHCP relay (ip helper-address) forwards Discover broadcasts to remote DHCP servers across subnets. Options carry extra data: Option 3 default gateway, Option 6 DNS servers, Option 15 domain name, Option 43 for vendor-specific settings (common for APs).

T1 renewal at 50% lease time contacts the original server; T2 rebinding at 87.5% may accept any server. Exclusion ranges prevent conflicts with static devices. Failover pairs provide DHCP high availability.

When clients get APIPA, check server scope exhaustion, relay configuration, VLAN ACLs blocking UDP 67/68, and rogue DHCP servers.`,
          },
          keyFacts: [
            "DHCP automates IP address, mask, gateway, and DNS assignment",
            "DORA: Discover, Offer, Request, Acknowledge",
            "DHCP uses UDP 67 (server) and UDP 68 (client)",
            "Lease time defines how long an address assignment is valid",
            "Reservations map specific MAC addresses to fixed IPs",
            "APIPA (169.254.x.x) is used when DHCP is unavailable",
          ],
          commonMistakes: [
            "Confusing DORA order—Discover, Offer, Request, Acknowledge",
            "Placing the DHCP server on the wrong VLAN without a relay agent (ip helper)",
            "Exhausting the DHCP scope by not reserving addresses for infrastructure devices",
            "Setting lease time too short causing frequent renewals and brief outages",
            "Forgetting that DHCP provides mask, gateway, and DNS—not just the IP address",
          ],
          examTraps: [
            "DORA sequence questions with steps scrambled—Discover always comes first",
            "UDP port traps—server 67, client 68, not TCP 80",
            "APIPA 169.254.x.x scenarios when DHCP server is unreachable",
            "DHCP reservation vs exclusion vs scope—each serves a different purpose",
            "Relay agent needed when server and clients are on different subnets",
          ],
          quiz: [
            {
              id: "dhcp-q1",
              prompt: "What is the correct order of the DHCP process?",
              choices: [
                { id: "a", text: "Offer, Discover, Acknowledge, Request" },
                { id: "b", text: "Discover, Offer, Request, Acknowledge" },
                { id: "c", text: "Request, Discover, Offer, Acknowledge" },
                { id: "d", text: "Discover, Request, Offer, Acknowledge" },
              ],
              correctChoiceId: "b",
              explanation:
                "DORA: Discover, Offer, Request, Acknowledge is the standard DHCP lease process.",
            },
            {
              id: "dhcp-q2",
              prompt: "DHCP servers listen on which port?",
              choices: [
                { id: "a", text: "UDP 53" },
                { id: "b", text: "UDP 67" },
                { id: "c", text: "TCP 80" },
                { id: "d", text: "UDP 161" },
              ],
              correctChoiceId: "b",
              explanation:
                "DHCP servers use UDP port 67; clients use UDP port 68.",
            },
            {
              id: "dhcp-q3",
              prompt: "A DHCP reservation assigns:",
              choices: [
                { id: "a", text: "Random addresses to any client" },
                { id: "b", text: "A fixed IP to a specific MAC address" },
                { id: "c", text: "Only DNS server addresses" },
                { id: "d", text: "Wireless SSIDs" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reservations ensure a specific device (by MAC) always receives the same IP address.",
            },
            {
              id: "dhcp-q4",
              prompt: "APIPA addresses are in the range:",
              choices: [
                { id: "a", text: "10.0.0.0/8" },
                { id: "b", text: "169.254.0.0/16" },
                { id: "c", text: "192.168.0.0/16" },
                { id: "d", text: "224.0.0.0/4" },
              ],
              correctChoiceId: "b",
              explanation:
                "APIPA (Automatic Private IP Addressing) uses 169.254.0.0/16 when DHCP fails.",
            },
            {
              id: "dhcp-q5",
              prompt: "The first DHCP message sent by a client is typically:",
              choices: [
                { id: "a", text: "DHCP Acknowledge" },
                { id: "b", text: "DHCP Offer" },
                { id: "c", text: "DHCP Discover" },
                { id: "d", text: "DHCP Release" },
              ],
              correctChoiceId: "c",
              explanation:
                "Clients begin with a DHCP Discover broadcast to locate available DHCP servers.",
            },
          ],
          flashcards: [
            {
              id: "dhcp-f1",
              front: "DHCP DORA process?",
              back: "Discover, Offer, Request, Acknowledge",
            },
            {
              id: "dhcp-f2",
              front: "DHCP server and client ports?",
              back: "UDP 67 (server), UDP 68 (client)",
            },
            {
              id: "dhcp-f3",
              front: "What is APIPA?",
              back: "169.254.0.0/16 self-assigned when DHCP fails",
            },
            {
              id: "dhcp-f4",
              front: "DHCP Option 3?",
              back: "Default gateway (router)",
            },
            {
              id: "dhcp-f5",
              front: "DHCP relay purpose?",
              back: "Forward DHCP broadcasts to remote server on another subnet",
            }
          ],
          objectives: ["N10-008-3.3","N10-008-3.4"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-dhcp-dora",
              title: "DHCP DORA Ordering Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: DHCP DORA Ordering Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "dhcp-dora-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["dhcp"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "dhcp-qb1",
              prompt: "DHCP Option 6 specifies:",
              choices: [
                { id: "a", text: "DNS servers" },
                { id: "b", text: "Subnet mask only" },
                { id: "c", text: "Wireless SSID" },
                { id: "d", text: "STP priority" }
              ],
              correctChoiceId: "a",
              explanation: "Option 6 lists DNS server addresses for clients.",
            },
            {
              id: "dhcp-qb2",
              prompt: "DHCP relay is configured on:",
              choices: [
                { id: "a", text: "The router interface serving the client subnet" },
                { id: "b", text: "Every PC" },
                { id: "c", text: "DNS root servers" },
                { id: "d", text: "Fiber patch panels" }
              ],
              correctChoiceId: "a",
              explanation: "The L3 gateway relays DHCP to remote servers using helper-address.",
            },
            {
              id: "dhcp-qb3",
              prompt: "Lease renewal at 50% is called:",
              choices: [
                { id: "a", text: "T1 renewal" },
                { id: "b", text: "T2 rebinding" },
                { id: "c", text: "DORA Offer" },
                { id: "d", text: "APIPA" }
              ],
              correctChoiceId: "a",
              explanation: "At 50% of lease, client attempts renewal with original server (T1).",
            },
            {
              id: "dhcp-qb4",
              prompt: "Scope exhaustion causes:",
              choices: [
                { id: "a", text: "New clients failing to obtain addresses" },
                { id: "b", text: "Faster CPU on server" },
                { id: "c", text: "Automatic VLAN creation" },
                { id: "d", text: "WPA3 downgrade" }
              ],
              correctChoiceId: "a",
              explanation: "When the pool is full, DHCP cannot assign new leases.",
            },
            {
              id: "dhcp-qb5",
              prompt: "Rogue DHCP servers can:",
              choices: [
                { id: "a", text: "Assign incorrect gateway/DNS to clients" },
                { id: "b", text: "Improve STP convergence" },
                { id: "c", text: "Encrypt all Wi-Fi" },
                { id: "d", text: "Extend fiber distance" }
              ],
              correctChoiceId: "a",
              explanation: "Unauthorized DHCP servers redirect traffic via malicious options.",
            },
          ],
        },
        {
          id: "nat",
          name: "NAT",
          lesson: {
            title: "Network Address Translation",
            content: `NAT translates private IP addresses to public addresses (or vice versa), conserving IPv4 space and hiding internal network structure. Most home and enterprise networks use NAT at the Internet boundary router or firewall.

Source NAT (SNAT) changes the source address of outbound packets so replies return to the NAT device, which forwards them to the internal host. Port Address Translation (PAT), also called NAT overload, maps many internal hosts to one public IP using different source ports. This is how typical home routers share one public IP among many devices.

Static NAT maps one private address to one public address permanently, useful for servers that must be reachable from outside. Destination NAT (DNAT) forwards inbound traffic on a public IP/port to an internal server.

NAT breaks end-to-end connectivity for some protocols and complicates VPN and VoIP. Understanding SNAT, DNAT, PAT, and when static NAT is needed is a core Network+ topic.

Carrier-grade NAT (CGNAT) uses RFC 6598 shared address space (100.64.0.0/10) between ISP and customer. Hairpin NAT allows internal hosts to reach public services hosted inside the same network via the public address.

NAT444 stacks ISP NAT plus customer NAT. Troubleshooting NAT: verify translations with show ip nat translations, confirm ACLs match intended traffic, check port forwarding rules for inbound services.

Document inside/outside interfaces and overload pools. NAT affects IPSec unless passthrough or modern traversal is configured.`,
          },
          keyFacts: [
            "NAT translates between private and public IP addresses",
            "PAT (NAT overload) maps many internal hosts to one public IP using ports",
            "Static NAT provides one-to-one permanent mapping",
            "SNAT changes source addresses on outbound traffic",
            "DNAT forwards inbound traffic to internal servers",
            "NAT conserves public IPv4 addresses and provides basic address hiding",
          ],
          commonMistakes: [
            "Confusing static NAT (one-to-one) with PAT/overload (many-to-one using ports)",
            "Expecting NAT to fix routing problems without proper routes to destinations",
            "Mixing up inside local, inside global, outside local, and outside global terminology",
            "Forgetting that NAT breaks end-to-end IP traceability for some troubleshooting tools",
            "Applying DNAT rules without matching firewall permits for inbound traffic",
          ],
          examTraps: [
            "PAT described as one-to-one static NAT when it maps many internal hosts to one public IP",
            "SNAT vs DNAT direction—source NAT on outbound, destination NAT for inbound port forwarding",
            "NAT order of operations with ACL filtering on exam topology diagrams",
            "Questions asking what breaks with NAT—some IPsec and P2P applications need NAT traversal",
            "Private-to-public translation traps—inside global is the public face of an internal host",
          ],
          quiz: [
            {
              id: "nat-q1",
              prompt: "PAT (NAT overload) allows:",
              choices: [
                { id: "a", text: "One public IP to serve many internal hosts" },
                { id: "b", text: "Elimination of private addresses" },
                { id: "c", text: "DNS zone transfers" },
                { id: "d", text: "Wireless channel bonding" },
              ],
              correctChoiceId: "a",
              explanation:
                "PAT uses unique source ports so many internal hosts can share one public IP address.",
            },
            {
              id: "nat-q2",
              prompt: "Static NAT is typically used for:",
              choices: [
                { id: "a", text: "Random client browsing" },
                { id: "b", text: "Internal servers needing consistent public mapping" },
                { id: "c", text: "DHCP address pools" },
                { id: "d", text: "Wi-Fi SSID broadcast" },
              ],
              correctChoiceId: "b",
              explanation:
                "Static NAT provides a fixed public-to-private mapping for servers reachable from the Internet.",
            },
            {
              id: "nat-q3",
              prompt: "Which address type is commonly translated by NAT at the edge?",
              choices: [
                { id: "a", text: "RFC 1918 private addresses" },
                { id: "b", text: "Multicast addresses only" },
                { id: "c", text: "Loopback addresses" },
                { id: "d", text: "APIPA only" },
              ],
              correctChoiceId: "a",
              explanation:
                "NAT translates private RFC 1918 addresses to routable public addresses at the network boundary.",
            },
            {
              id: "nat-q4",
              prompt: "DNAT primarily handles:",
              choices: [
                { id: "a", text: "Outbound source address changes only" },
                { id: "b", text: "Inbound traffic forwarded to internal hosts" },
                { id: "c", text: "MAC address learning" },
                { id: "d", text: "Wireless authentication" },
              ],
              correctChoiceId: "b",
              explanation:
                "Destination NAT forwards incoming connections on a public address to an internal server.",
            },
            {
              id: "nat-q5",
              prompt: "A primary reason organizations use NAT is to:",
              choices: [
                { id: "a", text: "Increase MAC table size" },
                { id: "b", text: "Conserve public IPv4 addresses" },
                { id: "c", text: "Replace DNS" },
                { id: "d", text: "Disable encryption" },
              ],
              correctChoiceId: "b",
              explanation:
                "NAT allows many devices with private addresses to share fewer public IPv4 addresses.",
            },
          ],
          flashcards: [
            {
              id: "nat-f1",
              front: "What is PAT?",
              back: "Port Address Translation — many internal hosts share one public IP via ports",
            },
            {
              id: "nat-f2",
              front: "Static NAT use case?",
              back: "Permanent one-to-one mapping for internal servers",
            },
            {
              id: "nat-f3",
              front: "SNAT vs DNAT?",
              back: "SNAT: changes outbound source. DNAT: forwards inbound to internal hosts.",
            },
            {
              id: "nat-f4",
              front: "NAT overload another name?",
              back: "PAT — Port Address Translation",
            },
            {
              id: "nat-f5",
              front: "CGNAT address space?",
              back: "100.64.0.0/10 (RFC 6598)",
            }
          ],
          objectives: ["N10-008-3.5","N10-008-3.6"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-nat-type",
              title: "NAT Type Identifier Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: NAT Type Identifier Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "nat-type-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["nat"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "nat-qb1",
              prompt: "Port forwarding is a form of:",
              choices: [
                { id: "a", text: "DNAT mapping inbound ports to internal hosts" },
                { id: "b", text: "STP tuning" },
                { id: "c", text: "DNSSEC" },
                { id: "d", text: "VLAN pruning" }
              ],
              correctChoiceId: "a",
              explanation: "Port forwarding directs inbound connections to internal services.",
            },
            {
              id: "nat-qb2",
              prompt: "Inside local vs inside global refers to:",
              choices: [
                { id: "a", text: "Private vs translated public view of internal address" },
                { id: "b", text: "Cable types" },
                { id: "c", text: "Wi-Fi bands" },
                { id: "d", text: "STP roles" }
              ],
              correctChoiceId: "a",
              explanation: "NAT terminology distinguishes real private vs translated addresses.",
            },
            {
              id: "nat-qb3",
              prompt: "Hairpin NAT allows:",
              choices: [
                { id: "a", text: "Internal hosts to reach public IP of internal server" },
                { id: "b", text: "Unlimited IPv6" },
                { id: "c", text: "Disable firewalls" },
                { id: "d", text: "Remove DNS" }
              ],
              correctChoiceId: "a",
              explanation: "Hairpin/loopback NAT supports internal access via external address.",
            },
            {
              id: "nat-qb4",
              prompt: "Double NAT commonly occurs with:",
              choices: [
                { id: "a", text: "ISP modem plus home router both performing NAT" },
                { id: "b", text: "Single switch LAN" },
                { id: "c", text: "APIPA only" },
                { id: "d", text: "Fiber SMF" }
              ],
              correctChoiceId: "a",
              explanation: "Stacked NAT devices can break port forwarding and VPN.",
            },
            {
              id: "nat-qb5",
              prompt: "SNAT typically runs on:",
              choices: [
                { id: "a", text: "Outbound traffic leaving the network" },
                { id: "b", text: "Inbound mail only" },
                { id: "c", text: "Layer 1 repeaters" },
                { id: "d", text: "Console ports" }
              ],
              correctChoiceId: "a",
              explanation: "Source NAT changes source on egress so replies return correctly.",
            },
          ],
        },
        {
          id: "vpns",
          name: "VPNs",
          lesson: {
            title: "Virtual Private Networks",
            content: `VPNs create encrypted tunnels over public networks, allowing remote users or sites to communicate securely as if on a private network. VPNs protect confidentiality and integrity of data crossing untrusted links like the Internet.

Remote access VPNs connect individual users to a corporate network. IPsec and SSL/TLS VPNs are common: IPsec operates at Layer 3 and is widely used in site-to-site tunnels; SSL VPNs use HTTPS and are browser-friendly for remote workers. Site-to-site VPNs connect entire office networks over encrypted tunnels.

Tunnel mode encrypts the entire IP packet for gateway-to-gateway VPNs. Transport mode encrypts only the payload, often used host-to-host. Authentication (pre-shared keys or certificates), encryption (AES), and hashing (SHA) form the VPN security stack.

Split tunneling routes only corporate traffic through the VPN while other traffic uses the local Internet connection. Full tunneling sends all traffic through the VPN. Understanding VPN types, protocols, and tunnel modes is essential for Network+ and secure remote access design.

Always-On VPN keeps remote clients connected automatically. MFA should protect VPN authentication. IPsec phases: IKE Phase 1 builds secure channel; Phase 2 negotiates IPsec SA for data. AH provides authentication without encryption; ESP encrypts and authenticates.

SSL VPN portals vs full tunnel clients differ in split routing support. Site-to-site VPNs need matching interesting traffic, phase 1/2 parameters, and stable peer addresses. Monitor VPN tunnels for rekey failures and MTU/fragmentation issues — lower tunnel MTU if applications hang.

Document crypto maps, transform sets, and failover peers for disaster recovery.`,
          },
          keyFacts: [
            "VPNs encrypt traffic over untrusted networks like the Internet",
            "Remote access VPNs connect users; site-to-site VPNs connect office networks",
            "IPsec is common for site-to-site; SSL VPNs use HTTPS for remote access",
            "Tunnel mode encrypts the full packet; transport mode encrypts payload only",
            "Split tunneling sends only corporate traffic through the VPN",
            "VPNs use authentication, encryption (AES), and hashing (SHA)",
          ],
          commonMistakes: [
            "Confusing site-to-site VPNs (network-to-network) with remote access VPNs (user-to-network)",
            "Mixing up IPsec tunnel mode (encrypts full packet) with transport mode (payload only)",
            "Assuming split tunneling sends all traffic through VPN—it sends only corporate traffic",
            "Ignoring IKE phase 1 and phase 2 parameter mismatches in site-to-site troubleshooting",
            "Using weak or deprecated encryption (DES, MD5) when AES and SHA-256 are required",
          ],
          examTraps: [
            "SSL VPN vs IPsec classification—SSL uses HTTPS for remote access, IPsec common for site-to-site",
            "Tunnel vs transport mode scenarios on exam diagrams",
            "Split tunneling security trade-off questions—convenience vs full traffic inspection",
            "GRE over IPsec vs pure IPsec encapsulation confusion",
            "MTU/fragmentation issues causing application hangs over VPN tunnels",
          ],
          quiz: [
            {
              id: "vpn-q1",
              prompt: "A site-to-site VPN connects:",
              choices: [
                { id: "a", text: "One user laptop to a printer" },
                { id: "b", text: "Two office networks over a public network" },
                { id: "c", text: "A switch to a hub" },
                { id: "d", text: "DNS servers to DHCP servers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Site-to-site VPNs create encrypted tunnels between network gateways at different locations.",
            },
            {
              id: "vpn-q2",
              prompt: "SSL VPNs commonly use which port?",
              choices: [
                { id: "a", text: "TCP 443 (HTTPS)" },
                { id: "b", text: "UDP 67" },
                { id: "c", text: "TCP 23" },
                { id: "d", text: "UDP 161" },
              ],
              correctChoiceId: "a",
              explanation:
                "SSL VPNs leverage HTTPS on TCP 443, which is often allowed through firewalls.",
            },
            {
              id: "vpn-q3",
              prompt: "IPsec VPNs primarily operate at:",
              choices: [
                { id: "a", text: "Layer 2" },
                { id: "b", text: "Layer 3" },
                { id: "c", text: "Layer 7 only" },
                { id: "d", text: "Physical layer" },
              ],
              correctChoiceId: "b",
              explanation:
                "IPsec provides Layer 3 encryption and authentication for IP packets.",
            },
            {
              id: "vpn-q4",
              prompt: "Split tunneling means:",
              choices: [
                { id: "a", text: "All traffic goes through the VPN" },
                { id: "b", text: "Only selected traffic uses the VPN; other traffic uses local Internet" },
                { id: "c", text: "VPN tunnels are unencrypted" },
                { id: "d", text: "DNS is disabled" },
              ],
              correctChoiceId: "b",
              explanation:
                "Split tunneling routes corporate traffic through the VPN while other browsing uses the local connection.",
            },
            {
              id: "vpn-q5",
              prompt: "Tunnel mode in IPsec encrypts:",
              choices: [
                { id: "a", text: "Only the TCP payload" },
                { id: "b", text: "The entire original IP packet" },
                { id: "c", text: "Only MAC addresses" },
                { id: "d", text: "SSID names" },
              ],
              correctChoiceId: "b",
              explanation:
                "Tunnel mode wraps and encrypts the entire IP packet for gateway-to-gateway VPNs.",
            },
          ],
          flashcards: [
            {
              id: "vpn-f1",
              front: "Remote access vs site-to-site VPN?",
              back: "Remote: user to network. Site-to-site: network gateway to network gateway.",
            },
            {
              id: "vpn-f2",
              front: "SSL VPN port?",
              back: "TCP 443 (HTTPS)",
            },
            {
              id: "vpn-f3",
              front: "Split vs full tunneling?",
              back: "Split: only corporate traffic via VPN. Full: all traffic via VPN.",
            },
            {
              id: "vpn-f4",
              front: "ESP vs AH?",
              back: "ESP encrypts+authenticates; AH authenticates only",
            },
            {
              id: "vpn-f5",
              front: "IKE Phase 1 purpose?",
              back: "Establish secure channel to negotiate IPsec SAs",
            }
          ],
          objectives: ["N10-008-3.7","N10-008-4.1"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "vpn-qb1",
              prompt: "Always-On VPN is used to:",
              choices: [
                { id: "a", text: "Keep remote clients automatically connected" },
                { id: "b", text: "Disable encryption" },
                { id: "c", text: "Replace DHCP" },
                { id: "d", text: "Configure STP" }
              ],
              correctChoiceId: "a",
              explanation: "Always-On VPN maintains persistent secure connectivity for managed devices.",
            },
            {
              id: "vpn-qb2",
              prompt: "IKE negotiates:",
              choices: [
                { id: "a", text: "IPsec security associations" },
                { id: "b", text: "Ethernet speed" },
                { id: "c", text: "PoE classes" },
                { id: "d", text: "Cable pinouts" }
              ],
              correctChoiceId: "a",
              explanation: "Internet Key Exchange sets up IPsec tunnel parameters.",
            },
            {
              id: "vpn-qb3",
              prompt: "Full tunnel VPN sends:",
              choices: [
                { id: "a", text: "All client traffic through the VPN" },
                { id: "b", text: "Only multicast" },
                { id: "c", text: "No DNS queries" },
                { id: "d", text: "Only Layer 2 frames" }
              ],
              correctChoiceId: "a",
              explanation: "Full tunnel routes all traffic through the corporate VPN gateway.",
            },
            {
              id: "vpn-qb4",
              prompt: "MFA on VPN improves:",
              choices: [
                { id: "a", text: "Authentication security beyond passwords" },
                { id: "b", text: "Cable length" },
                { id: "c", text: "Wi-Fi channels" },
                { id: "d", text: "STP timers" }
              ],
              correctChoiceId: "a",
              explanation: "Multi-factor authentication reduces credential theft impact.",
            },
            {
              id: "vpn-qb5",
              prompt: "MTU issues on VPN often cause:",
              choices: [
                { id: "a", text: "Applications hanging on large packets" },
                { id: "b", text: "APIPA assignment" },
                { id: "c", text: "Automatic VLAN creation" },
                { id: "d", text: "DNSSEC validation" }
              ],
              correctChoiceId: "a",
              explanation: "Encapsulation overhead may require MSS clamping or lower MTU.",
            },
          ],
        },
      ],
    },
    {
      id: "operations-and-security",
      name: "Operations and Security",
      topics: [
        {
          id: "troubleshooting-methodology",
          name: "Troubleshooting Methodology",
          lesson: {
            title: "Structured Network Troubleshooting",
            content: `Effective troubleshooting follows a systematic methodology rather than random changes. CompTIA recommends: identify the problem, establish a theory of probable cause, test the theory, establish a plan of action, implement the solution, verify full functionality, document findings, and escalate if needed.

Start by gathering information: what changed, who is affected, and exact error messages. Reproduce the problem consistently. Divide and conquer by testing layers: physical link, IP addressing, routing, DNS, and applications. The OSI model helps isolate which layer failed.

Top-down troubleshooting begins at the application layer; bottom-up starts at physical cabling. Inside-out tests from the local device outward. Choose the approach that fits the symptoms. For example, if link lights are off, start at Layer 1.

Avoid confirmation bias — test your assumptions. Change one variable at a time. Document steps and outcomes for future incidents. This structured approach is tested on Network+ and used daily by network professionals.

CompTIA's seven-step process aligns with ITIL incident handling: identify, theorize, test, plan, implement, verify, document. Combine with divide-and-conquer across OSI layers. Swap components (cable, port, NIC) to isolate hardware vs configuration faults.

Baseline normal performance before changes. Use change management — many outages trace to recent changes. Escalate when scope exceeds access or time limits, providing clear reproduction steps and logs.

Soft skills matter: communicate impact, set expectations, and confirm user acceptance after resolution.`,
          },
          keyFacts: [
            "Follow a systematic process: identify, theorize, test, plan, implement, verify, document",
            "Gather symptoms, scope, and recent changes before making changes",
            "Use OSI layers to isolate faults (cable, IP, DNS, application)",
            "Top-down starts at Layer 7; bottom-up starts at Layer 1",
            "Change one variable at a time when testing theories",
            "Document findings and escalate when outside your authority or expertise",
          ],
          guidedExample: {
            title: "Resolve Ping Works, Browser Fails Using CompTIA's Seven Steps",
            steps: [
              "Identify the problem: one user cannot browse; ping 8.8.8.8 succeeds but ping www.example.com fails with 'could not find host.'",
              "Establish theory: probable cause is DNS failure (Layer 7/name resolution), not IP connectivity.",
              "Test theory: run nslookup www.example.com and compare ipconfig DNS servers with a working peer on the same VLAN.",
              "Plan action: if DNS server is wrong or unreachable, update DHCP scope or set correct DNS manually for testing.",
              "Implement: point the client to the corporate DNS server 10.1.1.53 and flush the DNS cache (ipconfig /flushdns).",
              "Verify: confirm browsing works and nslookup returns valid A records; document root cause and fix in the ticket.",
            ],
          },
          commonMistakes: [
            "Rebooting all devices before gathering symptoms and identifying scope",
            "Changing multiple variables at once, making root cause impossible to isolate",
            "Skipping documentation after resolution, causing repeat incidents",
            "Jumping to Layer 7 fixes when link lights indicate a Layer 1 problem",
            "Failing to verify the fix end-to-end with the affected user before closing the ticket",
          ],
          examTraps: [
            "First-step traps—identify and gather information before implementing changes",
            "Ping succeeds but browser fails—answer is DNS or application layer, not cabling",
            "Bottom-up vs top-down approach selection based on symptoms described",
            "Seven-step order scrambled—verify and document come after implement, not before test",
            "Escalation scenarios where scope exceeds access—correct answer is escalate with clear notes",
          ],
          realWorldScenario: "Monday morning, half the accounting floor reports 'no Internet.' You confirm switch uplinks are up, ping to the default gateway works, but name resolution fails for everyone on VLAN 30. nslookup times out to the DNS server listed in DHCP. You discover a firewall change blocked UDP 53 overnight, work with security to restore the rule, verify browsing from three workstations, and add a monitoring alert for DNS reachability.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: [],
          quiz: [
            {
              id: "ts-q1",
              prompt: "What should you do FIRST when troubleshooting a network issue?",
              choices: [
                { id: "a", text: "Replace all cables immediately" },
                { id: "b", text: "Identify and gather information about the problem" },
                { id: "c", text: "Reboot every device on the network" },
                { id: "d", text: "Disable the firewall permanently" },
              ],
              correctChoiceId: "b",
              explanation:
                "The first step is identifying the problem and collecting symptoms, scope, and recent changes.",
            },
            {
              id: "ts-q2",
              prompt: "Bottom-up troubleshooting begins at:",
              choices: [
                { id: "a", text: "The application layer" },
                { id: "b", text: "The physical layer" },
                { id: "c", text: "DNS records" },
                { id: "d", text: "User training" },
              ],
              correctChoiceId: "b",
              explanation:
                "Bottom-up starts at Layer 1 (physical) and works upward through the OSI stack.",
            },
            {
              id: "ts-q3",
              prompt: "If link lights are off on a NIC, you should suspect:",
              choices: [
                { id: "a", text: "DNS misconfiguration first" },
                { id: "b", text: "A physical layer or link problem" },
                { id: "c", text: "An application bug" },
                { id: "d", text: "Incorrect email MX records" },
              ],
              correctChoiceId: "b",
              explanation:
                "No link lights indicate a Layer 1 or Layer 2 connectivity problem (cable, port, or NIC).",
            },
            {
              id: "ts-q4",
              prompt: "When testing theories, you should:",
              choices: [
                { id: "a", text: "Change multiple settings at once for speed" },
                { id: "b", text: "Change one variable at a time" },
                { id: "c", text: "Skip documentation" },
                { id: "d", text: "Never verify the fix" },
              ],
              correctChoiceId: "b",
              explanation:
                "Changing one variable at a time isolates cause and prevents introducing new problems.",
            },
            {
              id: "ts-q5",
              prompt: "Ping works but browsing fails. This suggests:",
              choices: [
                { id: "a", text: "Layer 1 cable fault" },
                { id: "b", text: "Lower layers work; possible DNS or application issue" },
                { id: "c", text: "Power failure" },
                { id: "d", text: "Broken fiber only" },
              ],
              correctChoiceId: "b",
              explanation:
                "ICMP (ping) success means IP connectivity works; browser failure points to DNS or Layer 7 issues.",
            },
          ],
          flashcards: [
            {
              id: "ts-f1",
              front: "First step in troubleshooting?",
              back: "Identify the problem and gather information",
            },
            {
              id: "ts-f2",
              front: "Bottom-up vs top-down?",
              back: "Bottom-up: Layer 1 up. Top-down: Application layer down.",
            },
            {
              id: "ts-f3",
              front: "Ping works, browser fails — likely issue?",
              back: "DNS or application layer problem (IP connectivity is OK)",
            },
            {
              id: "tm-f4",
              front: "Bottom-up troubleshooting starts at?",
              back: "Physical layer — cabling and link",
            },
            {
              id: "tm-f5",
              front: "First step in CompTIA methodology?",
              back: "Identify the problem — gather symptoms and scope",
            }
          ],
          objectives: ["N10-008-5.1","N10-008-5.2"],
          practiceType: ["reading","quiz","flashcard","case-study"],
          questionBank: [
            {
              id: "tm-qb1",
              prompt: "Divide-and-conquer troubleshooting means:",
              choices: [
                { id: "a", text: "Split the problem domain to isolate cause" },
                { id: "b", text: "Replace all hardware at once" },
                { id: "c", text: "Skip documentation" },
                { id: "d", text: "Disable security" }
              ],
              correctChoiceId: "a",
              explanation: "Narrow scope by testing segments of the path or stack.",
            },
            {
              id: "tm-qb2",
              prompt: "After implementing a fix you should:",
              choices: [
                { id: "a", text: "Verify full functionality and document" },
                { id: "b", text: "Close ticket without testing" },
                { id: "c", text: "Change multiple variables" },
                { id: "d", text: "Delete logs" }
              ],
              correctChoiceId: "a",
              explanation: "Verification and documentation complete the methodology.",
            },
            {
              id: "tm-qb3",
              prompt: "Top-down troubleshooting begins at:",
              choices: [
                { id: "a", text: "Application layer" },
                { id: "b", text: "Physical layer only" },
                { id: "c", text: "Fiber polish" },
                { id: "d", text: "Battery backup" }
              ],
              correctChoiceId: "a",
              explanation: "Top-down starts with apps and works downward.",
            },
            {
              id: "tm-qb4",
              prompt: "A baseline is used to:",
              choices: [
                { id: "a", text: "Compare normal vs current behavior" },
                { id: "b", text: "Assign APIPA" },
                { id: "c", text: "Disable STP" },
                { id: "d", text: "Remove VLAN tags" }
              ],
              correctChoiceId: "a",
              explanation: "Baselines help spot deviations causing incidents.",
            },
            {
              id: "tm-qb5",
              prompt: "When theory is wrong you should:",
              choices: [
                { id: "a", text: "Establish a new theory and test again" },
                { id: "b", text: "Stop troubleshooting" },
                { id: "c", text: "Hide results" },
                { id: "d", text: "Blame the user" }
              ],
              correctChoiceId: "a",
              explanation: "Iterate theories until evidence confirms root cause.",
            },
            {
              id: "tm-qb6",
              prompt: "Inside-out troubleshooting starts:",
              choices: [
                { id: "a", text: "At the local device and works outward" },
                { id: "b", text: "At the Internet backbone only" },
                { id: "c", text: "By replacing all cables" },
                { id: "d", text: "By disabling DNS" }
              ],
              correctChoiceId: "a",
              explanation: "Inside-out tests from the user's device toward the network edge.",
            },
            {
              id: "tm-qb7",
              prompt: "No link lights on a NIC most likely indicates:",
              choices: [
                { id: "a", text: "Layer 1 or Layer 2 physical/link fault" },
                { id: "b", text: "DNS misconfiguration" },
                { id: "c", text: "Incorrect MX record" },
                { id: "d", text: "WPA3 mismatch" }
              ],
              correctChoiceId: "a",
              explanation: "Absent link lights point to cabling, port, or NIC hardware/link issues.",
            },
            {
              id: "tm-qb8",
              prompt: "Change management helps troubleshooting because:",
              choices: [
                { id: "a", text: "Recent changes are a common root cause of outages" },
                { id: "b", text: "It eliminates the need for baselines" },
                { id: "c", text: "It disables user reports" },
                { id: "d", text: "It replaces documentation" }
              ],
              correctChoiceId: "a",
              explanation: "Correlating incidents with recent changes quickly narrows probable cause.",
            },
          ],
          assignments: [
            {
              id: "troubleshooting-browser-case-1",
              title: "Case Study: Ping Works, Browser Fails",
              type: "case-study",
              instructions: `Scenario: A user reports "the internet is down." You confirm:
- ping 8.8.8.8 succeeds from their PC
- ping www.example.com fails with "could not find host"
- Other users on the same VLAN browse normally
- No recent firewall or router changes

Apply CompTIA's seven-step methodology:

1. Identify the problem — state scope, symptoms, and what works vs what fails.
2. Establish a theory of probable cause (name the OSI layer and specific component).
3. List two tests you would run to confirm or reject your theory.
4. Propose a plan of action and one fix if the theory is correct.
5. Describe how you would verify full functionality after the fix.
6. Note one documentation item you would add to prevent recurrence.

Write your answers — no lab required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Documented scope and symptoms clearly",
                "Named probable cause with OSI layer",
                "Listed two specific diagnostic tests",
                "Proposed fix and verification steps",
                "Included documentation recommendation",
              ],
              relatedTopicIds: ["troubleshooting-methodology"],
              order: 1,
            },
          ],
        },
        {
          id: "network-tools",
          name: "Network Tools",
          lesson: {
            title: "Essential Network Diagnostic Tools",
            content: `Network professionals rely on diagnostic tools to verify connectivity, analyze traffic, and identify faults. Command-line utilities and hardware tools each serve specific troubleshooting roles.

ping tests ICMP reachability to a host. tracert (Windows) or traceroute (Linux) shows the path packets take hop by hop. ipconfig (Windows) or ip addr/ifconfig (Linux) displays interface IP configuration. nslookup or dig queries DNS records. netstat shows active connections and listening ports.

arp displays the IP-to-MAC mapping cache. pathping combines ping and traceroute with per-hop loss statistics. nmap scans for open ports and services. Wireshark captures and decodes packets for deep analysis.

Hardware tools include cable testers (verify wire map and continuity), tone generators and probes (locate cables), and certifiers (validate cable performance standards). Knowing which tool to use for each symptom is a core Network+ skill.

Common tools: ping (ICMP reachability), tracert/traceroute (path), ipconfig/ifconfig (local stack), arp -a (L2 mappings), netstat/ss (sockets), nmap (port scan — use only with authorization), tcpdump/Wireshark (packet analysis), pathping (Windows hybrid), iperf (throughput testing).

Know when to capture on mirror ports vs end hosts. Document capture filters to reduce noise. Interpret simple Wireshark clues: TCP retransmissions, DNS failures, TLS handshakes, and HTTP status codes.

Combine tools with methodology — a single tool rarely proves root cause alone.`,
          },
          keyFacts: [
            "ping tests ICMP reachability; tracert/traceroute maps the route",
            "ipconfig/ifconfig shows IP address, mask, and gateway",
            "nslookup/dig resolves DNS names",
            "arp shows IP-to-MAC address mappings",
            "Wireshark captures and analyzes packets at the frame level",
            "Cable testers verify continuity; certifiers validate performance standards",
          ],
          commonMistakes: [
            "Using ping alone to diagnose DNS failures when nslookup or dig is needed",
            "Confusing tracert (Windows) with traceroute (Linux) syntax and output",
            "Reading Wireshark captures without filtering, missing the relevant packets",
            "Running arp -a on the wrong interface when multiple NICs are present",
            "Using a continuity tester when a certifier is required to validate Cat6 performance",
          ],
          examTraps: [
            "Tool-to-layer mapping—ping is ICMP Layer 3, arp is Layer 2, nslookup is application/DNS",
            "Wireshark described as a cable tester or certifier instead of a protocol analyzer",
            "nslookup vs ipconfig—name resolution vs local IP configuration",
            "Port/protocol association traps bundled with tool questions (DNS UDP 53, DHCP UDP 67/68)",
            "TDR and OTDR confused—TDR for copper length/fault, OTDR for fiber",
          ],
          quiz: [
            {
              id: "tools-q1",
              prompt: "Which tool tests basic IP reachability to a remote host?",
              choices: [
                { id: "a", text: "ping" },
                { id: "b", text: "nslookup" },
                { id: "c", text: "arp" },
                { id: "d", text: "Cable certifier" },
              ],
              correctChoiceId: "a",
              explanation:
                "ping sends ICMP echo requests to verify that a host is reachable at the IP layer.",
            },
            {
              id: "tools-q2",
              prompt: "nslookup is primarily used to:",
              choices: [
                { id: "a", text: "Test DNS name resolution" },
                { id: "b", text: "Crimp RJ-45 connectors" },
                { id: "c", text: "Measure fiber signal loss" },
                { id: "d", text: "Configure VLANs" },
              ],
              correctChoiceId: "a",
              explanation:
                "nslookup queries DNS servers to resolve hostnames to IP addresses.",
            },
            {
              id: "tools-q3",
              prompt: "tracert shows:",
              choices: [
                { id: "a", text: "Each router hop along the path to a destination" },
                { id: "b", text: "Wi-Fi password" },
                { id: "c", text: "Switch MAC table entries" },
                { id: "d", text: "DHCP lease database" },
              ],
              correctChoiceId: "a",
              explanation:
                "tracert/traceroute lists each hop (router) between source and destination.",
            },
            {
              id: "tools-q4",
              prompt: "Wireshark is used for:",
              choices: [
                { id: "a", text: "Packet capture and protocol analysis" },
                { id: "b", text: "Terminating fiber connectors" },
                { id: "c", text: "Assigning static routes only" },
                { id: "d", text: "Generating WPA3 keys" },
              ],
              correctChoiceId: "a",
              explanation:
                "Wireshark captures network traffic and decodes protocols for detailed troubleshooting.",
            },
            {
              id: "tools-q5",
              prompt: "The arp command displays:",
              choices: [
                { id: "a", text: "IP-to-MAC address mappings" },
                { id: "b", text: "DNS MX records" },
                { id: "c", text: "Wireless channel utilization" },
                { id: "d", text: "Subnet allocation policies" },
              ],
              correctChoiceId: "a",
              explanation:
                "arp shows the local ARP cache mapping IP addresses to MAC addresses on the LAN.",
            },
          ],
          flashcards: [
            {
              id: "tools-f1",
              front: "ping vs tracert?",
              back: "ping: reachability. tracert: hop-by-hop path to destination.",
            },
            {
              id: "tools-f2",
              front: "nslookup purpose?",
              back: "Query DNS to resolve hostnames",
            },
            {
              id: "tools-f3",
              front: "Wireshark use?",
              back: "Capture and analyze network packets",
            },
            {
              id: "tools-f4",
              front: "iperf used for?",
              back: "Network throughput and performance testing",
            },
            {
              id: "tools-f5",
              front: "pathping combines?",
              back: "ping + traceroute with per-hop loss stats",
            }
          ],
          objectives: ["N10-008-5.3","N10-008-5.4"],
          practiceType: ["reading","quiz","flashcard","simulator","external-lab"],
          externalResources: [
            {
              id: "wireshark",
              name: "Wireshark",
              url: "https://www.wireshark.org/",
              cost: "free",
              platform: "any",
              installNotes: "Install Wireshark and the optional Npcap/WinPcap driver for live capture.",
            },
          ],
          assignments: [
            {
              id: "network-plus-port-proto",
              title: "Port and Protocol Matcher Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: Port and Protocol Matcher Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "port-protocol-drill",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["network-tools"],
              order: 1,
            },
            {
              id: "wireshark-http-lab",
              title: "Assignment: Analyze HTTP Traffic in Wireshark",
              type: "external-lab",
              instructions: "Install Wireshark and capture web browsing traffic.\n\n1. Start a capture on your active interface.\n2. Browse to a simple HTTP test site or use a provided sample pcap if HTTPS-only.\n3. Apply display filter \"http\" or \"dns\" and locate a DNS query/response pair.\n4. Identify source/destination IP, protocol, and port for one web request.\n5. Export one relevant packet as evidence and note what layer each field represents.",
              estimatedMinutes: 30,
              externalResourceId: "wireshark",
              completionCriteria: ["Captured or opened a valid trace file","Identified DNS resolution and HTTP/TLS flow","Documented IP, port, and protocol for one session"],
              relatedTopicIds: ["network-tools"],
              order: 2,
            },
          ],
          questionBank: [
            {
              id: "tools-qb1",
              prompt: "tcpdump and Wireshark are used for:",
              choices: [
                { id: "a", text: "Packet capture and analysis" },
                { id: "b", text: "Subnet calculation" },
                { id: "c", text: "PoE budgeting" },
                { id: "d", text: "VLAN naming" }
              ],
              correctChoiceId: "a",
              explanation: "Both capture and inspect frame/packet details.",
            },
            {
              id: "tools-qb2",
              prompt: "netstat shows:",
              choices: [
                { id: "a", text: "Active connections and listening ports" },
                { id: "b", text: "Fiber loss" },
                { id: "c", text: "STP root port" },
                { id: "d", text: "WPA keys" }
              ],
              correctChoiceId: "a",
              explanation: "netstat/ss lists socket state on a host.",
            },
            {
              id: "tools-qb3",
              prompt: "nmap should only be run:",
              choices: [
                { id: "a", text: "On networks you are authorized to test" },
                { id: "b", text: "On any public IP without permission" },
                { id: "c", text: "Never" },
                { id: "d", text: "Only on Layer 1" }
              ],
              correctChoiceId: "a",
              explanation: "Port scanning without authorization may violate policy or law.",
            },
            {
              id: "tools-qb4",
              prompt: "A TCP retransmission in Wireshark suggests:",
              choices: [
                { id: "a", text: "Possible packet loss or delay" },
                { id: "b", text: "Successful DNSSEC" },
                { id: "c", text: "PoE enabled" },
                { id: "d", text: "Valid STP" }
              ],
              correctChoiceId: "a",
              explanation: "Retransmissions indicate segments were not acknowledged timely.",
            },
            {
              id: "tools-qb5",
              prompt: "tracert uses which protocol on Windows?",
              choices: [
                { id: "a", text: "ICMP time exceeded messages" },
                { id: "b", text: "DHCP" },
                { id: "c", text: "SNMP only" },
                { id: "d", text: "WEP" }
              ],
              correctChoiceId: "a",
              explanation: "tracert relies on ICMP TTL exceeded replies from each hop.",
            },
          ],
        },
        {
          id: "network-security-basics",
          name: "Network Security Basics",
          lesson: {
            title: "Foundational Network Security",
            content: `Network security protects confidentiality, integrity, and availability of data and services. Defense in depth layers multiple controls: firewalls, segmentation, access control, encryption, and monitoring.

Firewalls filter traffic based on rules — stateful firewalls track connection state; next-generation firewalls add application awareness. ACLs on routers and switches permit or deny traffic by IP, port, or protocol. Place ACLs close to the resource they protect when possible.

Network segmentation isolates sensitive systems using VLANs, subnets, and DMZs. A DMZ hosts public-facing servers between internal and external firewalls. Disable unnecessary services, change default credentials, and keep firmware patched.

Encryption protects data in transit (TLS, IPsec VPN) and at rest. Authentication verifies identity; authorization defines what authenticated users may access. Understanding firewalls, ACLs, segmentation, and encryption basics is essential for Network+ and secure network design.

Beyond firewalls, implement IDS/IPS, NAC, and 802.1X for port access control. Harden devices: disable unused ports/services, use SSH not Telnet, enforce SNMPv3, and patch firmware. Log aggregation supports correlation and incident response.

Zero trust assumes breach — verify explicitly, least privilege, and micro-segmentation. Physical security (locks, cameras) protects closet access. Security policies define acceptable use, password standards, and data classification.

Network+ focuses on foundational controls — know how ACLs, VPNs, segmentation, and monitoring combine for defense in depth.`,
          },
          keyFacts: [
            "Defense in depth uses multiple layered security controls",
            "Stateful firewalls track connection state; ACLs filter by IP/port/protocol",
            "DMZ isolates public-facing servers from the internal network",
            "VLANs and subnets provide network segmentation",
            "TLS and IPsec encrypt data in transit",
            "Change default passwords and disable unused services",
          ],
          commonMistakes: [
            "Relying on a single security control instead of defense in depth",
            "Placing a broad permit any any ACL rule before specific deny statements",
            "Confusing stateful firewall behavior with stateless packet filtering",
            "Leaving default credentials on network devices and management interfaces",
            "Treating VLAN segmentation as a substitute for firewall policy between zones",
          ],
          examTraps: [
            "ACL implicit deny any any at the end—questions test whether students remember unseen deny",
            "DMZ purpose—public-facing servers isolated from internal LAN, not same subnet as users",
            "Stateful vs stateless firewall scenarios on exam topologies",
            "WPA2 vs WPA3 or TLS vs IPsec conflated in encryption-in-transit questions",
            "Port security, MAC filtering, and 802.1X compared—802.1X is strongest for authentication",
          ],
          quiz: [
            {
              id: "sec-q1",
              prompt: "A DMZ is used to:",
              choices: [
                { id: "a", text: "Store offline backups only" },
                { id: "b", text: "Host public-facing servers separately from the internal LAN" },
                { id: "c", text: "Replace DNS servers" },
                { id: "d", text: "Assign DHCP addresses" },
              ],
              correctChoiceId: "b",
              explanation:
                "A DMZ sits between trusted and untrusted networks, hosting services like web and mail servers.",
            },
            {
              id: "sec-q2",
              prompt: "A stateful firewall:",
              choices: [
                { id: "a", text: "Tracks active connection state when filtering" },
                { id: "b", text: "Only operates at Layer 1" },
                { id: "c", text: "Replaces the need for encryption" },
                { id: "d", text: "Assigns IP addresses automatically" },
              ],
              correctChoiceId: "a",
              explanation:
                "Stateful firewalls remember connection state and allow return traffic for established sessions.",
            },
            {
              id: "sec-q3",
              prompt: "Network segmentation helps by:",
              choices: [
                { id: "a", text: "Combining all systems on one broadcast domain" },
                { id: "b", text: "Isolating systems to limit breach spread" },
                { id: "c", text: "Disabling all logging" },
                { id: "d", text: "Removing the need for authentication" },
              ],
              correctChoiceId: "b",
              explanation:
                "Segmentation using VLANs and subnets confines attackers and limits lateral movement.",
            },
            {
              id: "sec-q4",
              prompt: "ACLs on a router typically filter by:",
              choices: [
                { id: "a", text: "Source/destination IP, port, and protocol" },
                { id: "b", text: "Cable color only" },
                { id: "c", text: "Monitor brightness" },
                { id: "d", text: "Keyboard layout" },
              ],
              correctChoiceId: "a",
              explanation:
                "Access Control Lists permit or deny traffic based on IP addresses, ports, and protocols.",
            },
            {
              id: "sec-q5",
              prompt: "TLS primarily provides:",
              choices: [
                { id: "a", text: "Encrypted communication for applications like HTTPS" },
                { id: "b", text: "MAC address learning" },
                { id: "c", text: "DHCP reservations" },
                { id: "d", text: "Fiber termination" },
              ],
              correctChoiceId: "a",
              explanation:
                "TLS encrypts application-layer traffic, most commonly seen with HTTPS on TCP 443.",
            },
          ],
          flashcards: [
            {
              id: "sec-f1",
              front: "What is a DMZ?",
              back: "Network zone for public-facing servers, isolated from internal LAN",
            },
            {
              id: "sec-f2",
              front: "Stateful firewall advantage?",
              back: "Tracks connection state to allow legitimate return traffic",
            },
            {
              id: "sec-f3",
              front: "Defense in depth?",
              back: "Multiple layered security controls rather than one single barrier",
            },
            {
              id: "sec-f4",
              front: "IDS vs IPS?",
              back: "IDS detects/alerts; IPS detects and can block inline",
            },
            {
              id: "sec-f5",
              front: "802.1X provides?",
              back: "Port-based network access control authentication",
            }
          ],
          objectives: ["N10-008-4.2","N10-008-4.3"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "network-plus-acl-order",
              title: "ACL Rule Ordering Drill",
              type: "simulator",
              instructions: "Complete the in-app drill: ACL Rule Ordering Drill. Score at least 70% before marking complete.",
              estimatedMinutes: 15,
              simulatorId: "acl-rule-order",
              completionCriteria: ["Finished drill session","Reviewed missed concepts"],
              relatedTopicIds: ["network-security-basics"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "sec-qb1",
              prompt: "NAC is used to:",
              choices: [
                { id: "a", text: "Control device access based on policy/compliance" },
                { id: "b", text: "Increase cable length" },
                { id: "c", text: "Assign IPv6" },
                { id: "d", text: "Tune Wi-Fi channels" }
              ],
              correctChoiceId: "a",
              explanation: "Network Access Control enforces health and identity before access.",
            },
            {
              id: "sec-qb2",
              prompt: "Telnet should be replaced with:",
              choices: [
                { id: "a", text: "SSH" },
                { id: "b", text: "HTTP" },
                { id: "c", text: "FTP" },
                { id: "d", text: "SNMPv1" }
              ],
              correctChoiceId: "a",
              explanation: "SSH encrypts remote administration; Telnet sends cleartext.",
            },
            {
              id: "sec-qb3",
              prompt: "Micro-segmentation:",
              choices: [
                { id: "a", text: "Limits lateral movement with granular policies" },
                { id: "b", text: "Removes all firewalls" },
                { id: "c", text: "Disables VLANs" },
                { id: "d", text: "Uses WEP" }
              ],
              correctChoiceId: "a",
              explanation: "Fine-grained segments contain breaches.",
            },
            {
              id: "sec-qb4",
              prompt: "An implicit deny in ACLs means:",
              choices: [
                { id: "a", text: "Unmatched traffic is denied by default" },
                { id: "b", text: "All traffic is permitted" },
                { id: "c", text: "DNS is blocked only" },
                { id: "d", text: "STP is disabled" }
              ],
              correctChoiceId: "a",
              explanation: "Most ACLs end with implicit deny unless permit any exists.",
            },
            {
              id: "sec-qb5",
              prompt: "SNMPv3 improves over v1/v2c by adding:",
              choices: [
                { id: "a", text: "Authentication and encryption" },
                { id: "b", text: "Longer cables" },
                { id: "c", text: "PoE" },
                { id: "d", text: "WPA3" }
              ],
              correctChoiceId: "a",
              explanation: "SNMPv3 supports secure monitoring with auth and privacy.",
            },
          ],
        },
      ],
    },
  ],
};
