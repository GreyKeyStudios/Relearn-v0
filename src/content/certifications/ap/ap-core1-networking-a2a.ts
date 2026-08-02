import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 Networking — A2a (Michael 2026-08-01).
 * Batch 1 only: ap-ports-protocols (2.1) → ap-network-services (2.3).
 * Do not add wireless / SOHO / tools here.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you are allowed to practice on. Labs are read-only / fictional tickets — do not scan public networks.",
};

export const apCore1NetworkingBatch1Topics: Topic[] = [
  {
    id: "ap-ports-protocols",
    name: "TCP, UDP, Ports & Protocols",
    prerequisites: ["ap-hardware-domain-review"],
    objectives: ["AP1201-2.1"],
    knowledgeNodeId: "ports-protocols",
    lesson: {
      title: "Protocols, Transport Choices, and Ports",
      content: `When two computers talk, they agree on rules. Those rules are **protocols**. Technicians use protocol and port knowledge to decide *which service layer* is failing — not to memorize a phone book of numbers in isolation.

**Computer Fundamentals refreshers (optional):** \`cf-what-is-a-network\`, \`cf-ip-and-dns-beginner\`, \`cf-browser-url-cloud\` — client/server and “name vs address” literacy before A+ depth.

**What a protocol is.** A protocol is an agreed format and behavior for exchanging messages (who speaks first, what a request looks like, how errors are signaled). HTTP is a protocol for web requests. DNS is a protocol for name lookups. SSH is a protocol for encrypted remote shells.

**Why different services use different protocols.** Email delivery, file transfer, name resolution, and remote desktop solve different problems. Each protocol defines the right verbs and security expectations for that job.

**Ports — what a number represents.** An IP address finds a host. A **port** finds an application process *on* that host. Think apartment building (IP) and apartment number (port). Well-known ports (0–1023) are conventional defaults for common services (for example HTTPS often listens on 443). Ports are **defaults and conventions**, not proof of what traffic contains — administrators can move services, and malware can impersonate ports.

**Relationship model (learn this order).**
1. **User action** — open a site, sync mail, remote in.
2. **Service / application** — web, mail, remote desktop.
3. **Application protocol** — HTTPS, IMAP, RDP, …
4. **Transport** — usually TCP or UDP.
5. **Port** — the conventional listener number (when defaults are used).
6. **Client ↔ server** — client initiates; server listens (typical model).

**TCP versus UDP (mechanism).**
- **TCP** is connection-oriented. It establishes a session, tracks sequence/order, acknowledges delivery, and can retransmit lost data. Higher reliability and ordering cost more overhead and can add latency.
- **UDP** is connectionless. It sends datagrams without building a session or guaranteeing delivery/order. Lower overhead — useful when speed or simplicity matters more than perfect reliability, or when the application handles retries itself (DNS often uses UDP for quick queries).

**Tradeoffs — TCP is not “good” and UDP is not “bad.”** A file download wants integrity → TCP fits. A tiny DNS query that can be retried may prefer UDP. Real-time media may tolerate loss rather than wait for retransmission. Choose for the job.

**Concrete examples.**
- Loading a website: browser → HTTPS → TCP → port 443 (default) → web server.
- Looking up a name: stub resolver → DNS → usually UDP/53 (TCP/53 for larger responses/zone transfers).
- Remote administration today: SSH → TCP/22 (encrypted). Telnet → TCP/23 is a **legacy insecure** remote shell — do not recommend as a modern default.
- Email send path often SMTP (TCP/25 or submission ports in real deployments); retrieval often IMAP or POP3 over TCP.

**Interpretation for technicians.**
- Works by IP, fails by name → think **DNS**, not “the internet is down.”
- Browser TLS errors vs connection refused → different layers (certificate/protocol vs nothing listening / firewall).
- Seeing port 443 open does **not** prove the service is safe or even HTTPS.

**Safe checks (authorized / local).** \`ping\` (reachability, not ports), \`nslookup\` (name resolution), \`Test-NetConnection\` or similar to a *known authorized* host/port, \`ipconfig\` for addressing context. Do not scan the public internet.

**What's next.** Networked host services catalog — what each common service *does*, with default ports as labels after you understand the job.`,
    },
    lightbulbMoment:
      "IP finds the computer; a port finds the conversation — TCP and UDP decide how carefully that conversation is delivered.",
    keyFacts: [
      "A protocol is an agreed set of rules for exchanging messages",
      "A port identifies an application endpoint on a host — defaults are conventions, not guarantees",
      "TCP: connection-oriented, ordered, acknowledged, retransmits — more overhead",
      "UDP: connectionless, lightweight — no delivery guarantee from the transport",
      "TCP vs UDP is a tradeoff, not a moral ranking",
      "An open port does not prove a service is legitimate or safe",
    ],
    guidedExample: {
      title: "Map one user action end-to-end",
      steps: [
        "User action: open https://intranet.example.com in a browser.",
        "Service: web / intranet site.",
        "Protocol: HTTPS (HTTP over TLS).",
        "Transport: TCP (reliable byte stream for the session).",
        "Default port: 443 (unless the URL specifies another).",
        "First tech check if it fails by name but works by IP: DNS resolution (nslookup), not reinstalling the browser first.",
      ],
    },
    commonMistakes: [
      "Memorizing port numbers with no idea what the service does",
      "Assuming UDP means 'broken TCP' or that UDP is always insecure",
      "Believing traffic on port 80/443 must be harmless",
      "Treating Telnet as a modern secure admin tool",
      "Scanning random public hosts to 'practice ports'",
    ],
    examTraps: [
      "TCP vs UDP characteristic comparisons",
      "Port identifies a service endpoint — not the IP address itself",
      "Defaults can be changed — questions may still use well-known ports",
      "DNS commonly UDP/53 with TCP used in other cases",
      "Telnet insecure legacy vs SSH encrypted remote shell",
    ],
    realWorldScenario:
      "A user says the ERP 'is down.' Ping to the server IP works. The browser URL fails; https://10.10.10.50 loads. You explain DNS — the service and TCP/443 path are fine; the name is not resolving. nslookup confirms NXDOMAIN for the hostname.",
    whenThisFails: [
      "If Test-NetConnection to an authorized port fails but ping works, suspect firewall/filter or nothing listening — escalate per policy",
      "If you lack permission to test a port, stop and use approved monitoring or ask the owner",
      "If symptoms are intermittent, capture time, client IP, and exact error text before changing firewall rules",
    ],
    teacherReflectionPrompt:
      "Explain TCP vs UDP with one example each, then explain why a port number alone does not tell you the traffic is safe.",
    quiz: [
      {
        id: "ap-ports-protocols-q1",
        prompt: "In the apartment analogy, an IP address is the building and a port number is:",
        choices: [
          { id: "a", text: "The apartment / application endpoint inside that host" },
          { id: "b", text: "The city name only" },
          { id: "c", text: "The wall power outlet amperage" },
          { id: "d", text: "The toner cartridge yield" },
        ],
        correctChoiceId: "a",
        explanation:
          "Ports select which process/service on the host should handle the conversation.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-q2",
        prompt: "Which statement about TCP is accurate at A+ depth?",
        choices: [
          { id: "a", text: "It is connection-oriented and can retransmit lost data" },
          { id: "b", text: "It never uses port numbers" },
          { id: "c", text: "It is always faster than UDP for every workload" },
          { id: "d", text: "It replaces IP addressing entirely" },
        ],
        correctChoiceId: "a",
        explanation:
          "TCP builds a session, tracks order, and retransmits — at the cost of overhead.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-q3",
        prompt: "UDP is often chosen when:",
        choices: [
          { id: "a", text: "Lower overhead matters and the app can tolerate or retry loss" },
          { id: "b", text: "You must guarantee ordered delivery at the transport layer" },
          { id: "c", text: "You want automatic encryption equal to HTTPS" },
          { id: "d", text: "You are replacing DNS with DHCP" },
        ],
        correctChoiceId: "a",
        explanation:
          "UDP is connectionless and lightweight; DNS queries are a classic example.",
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-ports-protocols-q4",
        prompt: "A site loads by IP but fails by hostname. Which layer should you investigate first?",
        choices: [
          { id: "a", text: "Name resolution (DNS)" },
          { id: "b", text: "Toner density" },
          { id: "c", text: "CPU socket compatibility" },
          { id: "d", text: "DisplayPort version" },
        ],
        correctChoiceId: "a",
        explanation:
          "IP success shows reachability; hostname failure points at DNS.",
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-ports-protocols-q5",
        prompt: "Why is Telnet not recommended as a modern remote-admin default?",
        choices: [
          { id: "a", text: "It sends session data without modern encryption expectations — prefer SSH" },
          { id: "b", text: "It only works on printers" },
          { id: "c", text: "It requires DDR5 RAM" },
          { id: "d", text: "It cannot use port numbers" },
        ],
        correctChoiceId: "a",
        explanation:
          "Telnet is a legacy cleartext remote shell; SSH is the secure replacement pattern.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ports-protocols-b1",
        prompt: "A protocol defines:",
        choices: [
          { id: "a", text: "Rules and formats for exchanging messages" },
          { id: "b", text: "Only the color of Ethernet jackets" },
          { id: "c", text: "PSU wattage" },
        ],
        correctChoiceId: "a",
        explanation: "Protocols are behavioral contracts between systems.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-b2",
        prompt: "Well-known default ports are:",
        choices: [
          { id: "a", text: "Conventions that can be changed by configuration" },
          { id: "b", text: "Physically burned into every NIC forever" },
          { id: "c", text: "Proof the traffic is malware-free" },
        ],
        correctChoiceId: "a",
        explanation: "Defaults help interoperability; they are not immutable truth.",
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-ports-protocols-b3",
        prompt: "HTTPS in a typical browser session commonly uses:",
        choices: [
          { id: "a", text: "TCP with default port 443" },
          { id: "b", text: "UDP only on port 25" },
          { id: "c", text: "No transport protocol" },
        ],
        correctChoiceId: "a",
        explanation: "Web sessions need a reliable stream — TCP/443 is the usual default.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-b4",
        prompt: "DNS queries commonly start as:",
        choices: [
          { id: "a", text: "UDP to port 53 (TCP may be used in other DNS cases)" },
          { id: "b", text: "ICMP toner queries" },
          { id: "c", text: "RDP on 3389 exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "Quick lookups often use UDP/53; larger DNS uses TCP.",
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-ports-protocols-b5",
        prompt: "Connection-oriented describes:",
        choices: [
          { id: "a", text: "TCP's session setup and tracked delivery behavior" },
          { id: "b", text: "UDP's lack of any IP address" },
          { id: "c", text: "HDMI pinouts" },
        ],
        correctChoiceId: "a",
        explanation: "TCP establishes and maintains a connection context.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-b6",
        prompt: "Seeing traffic destined to port 22 means:",
        choices: [
          { id: "a", text: "It is commonly associated with SSH — but inspection policy still matters" },
          { id: "b", text: "It is guaranteed safe and approved" },
          { id: "c", text: "It cannot be blocked by a firewall" },
        ],
        correctChoiceId: "a",
        explanation: "Ports suggest likely services; they do not certify safety.",
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-ports-protocols-b7",
        prompt: "Safe practice for learning port tests:",
        choices: [
          { id: "a", text: "Use local, fictional, or explicitly authorized targets only" },
          { id: "b", text: "Scan the entire public internet nightly" },
          { id: "c", text: "Disable all firewalls permanently" },
        ],
        correctChoiceId: "a",
        explanation: "No offensive reconnaissance training in this track.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-ports-protocols-b8",
        prompt: "A service works by IP address but not by hostname. Which layer should be investigated first?",
        choices: [
          { id: "a", text: "DNS name resolution and the configured DNS server" },
          { id: "b", text: "Monitor refresh rate" },
          { id: "c", text: "Printer fuser temperature" },
        ],
        correctChoiceId: "a",
        explanation: "Successful IP access with failed hostname access points first to name resolution.",
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ports-protocols-f1",
        front: "Protocol means?",
        back: "Agreed rules/formats for exchanging messages",
      },
      {
        id: "ap-ports-protocols-f2",
        front: "Port number means?",
        back: "Application endpoint on a host (default ≠ guarantee)",
      },
      {
        id: "ap-ports-protocols-f3",
        front: "TCP in one line?",
        back: "Connection-oriented, ordered, acknowledged, can retransmit",
      },
      {
        id: "ap-ports-protocols-f4",
        front: "UDP in one line?",
        back: "Connectionless, low overhead, no transport delivery guarantee",
      },
      {
        id: "ap-ports-protocols-f5",
        front: "Works by IP, fails by name?",
        back: "Suspect DNS first",
      },
      {
        id: "ap-ports-protocols-f6",
        front: "Telnet vs SSH?",
        back: "Telnet legacy/insecure remote shell; prefer SSH (TCP/22)",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ports-mapping",
        title: "Service mapping worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Complete three rows (no scanning required):

| User action | Likely service | Protocol | Transport | Default port | First troubleshooting check |
|-------------|----------------|----------|-----------|--------------|-------------------------------|
| Open a bank website with the lock icon | | | | | |
| Resolve intranet.contoso.local | | | | | |
| Remote to a jump box with encrypted shell | | | | | |

Then on your practice PC (read-only): run \`ipconfig\` and note IPv4 + DNS servers. Run \`nslookup\` for a hostname you are allowed to query (e.g. your org's site or example.com if permitted). Record whether the name resolved.

Do not scan external networks.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Complete all three mapping rows with transport + default port",
          "Record ipconfig DNS server addresses",
          "Record one nslookup result (success or failure)",
        ],
        relatedTopicIds: ["ap-ports-protocols"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-network-services",
    name: "Networked Host Services",
    prerequisites: ["ap-ports-protocols"],
    objectives: ["AP1201-2.3"],
    knowledgeNodeId: "dns",
    lesson: {
      title: "What Network Services Do (Then Their Ports)",
      content: `Hosts offer **services** — jobs other devices can request. You already know TCP/UDP and ports. This topic catalogs common services by *purpose*, then attaches the conventional ports technicians expect.

**CF refreshers:** \`cf-ip-and-dns-beginner\`, \`cf-browser-url-cloud\`, \`cf-home-network-devices\` — do not re-teach whole CF lessons; apply them to tickets.

**Web services.**
- **HTTP** (TCP/80) — unencrypted web; legacy/local use only in modern practice.
- **HTTPS** (TCP/443) — web over TLS; default for real sites.

**Remote access.**
- **SSH** (TCP/22) — encrypted remote shell/file copy patterns.
- **Telnet** (TCP/23) — legacy cleartext remote shell — know it for exams; do not deploy as a default.
- **RDP** (TCP/3389) — Windows remote desktop (expose carefully; prefer VPN/jump hosts in real designs).

**Name and address services.**
- **DNS** (UDP/53, TCP/53 when needed) — maps names ↔ addresses. Failure looks like “internet down.”
- **DHCP** (UDP/67 server, UDP/68 client) — automatic IP, mask, gateway, DNS options. No lease → APIPA/limited connectivity symptoms.

**Email.**
- **SMTP** (TCP/25 classic; submission often 587 in real networks) — sending/relaying mail between servers.
- **POP3** (TCP/110; POP3S 995) — download mail to a client (often removes from server depending on settings).
- **IMAP** (TCP/143; IMAPS 993) — mail stays on server; multi-device sync friendlier.

**File and directory.**
- **FTP** (TCP/21 control; data 20/active or passive high ports) — legacy file transfer; prefer **SFTP/FTPS** or HTTPS portals in modern ops. Know FTP exists; do not recommend plain FTP as the default.
- **SMB** (TCP/445) — Windows file/printer sharing.
- **LDAP** (TCP/389) / **LDAPS** (TCP/636) — directory queries (identity lookups).

**Operations / monitoring.**
- **SNMP** (UDP/161 queries; UDP/162 traps) — device monitoring (use secure versions/community hygiene in real life).
- **NTP** (UDP/123) — time sync; drift breaks auth and log correlation.
- **Syslog** (UDP/514 classic; TCP/TLS variants exist) — centralized logging.

**Databases (recognition).** Exam objectives may list common DB listener ports (for example TCP/1433 SQL Server, TCP/3306 MySQL). Know they are database services — you are not a DBA yet.

**Technician tickets → likely service.**
- Works by IP, not by name → **DNS**.
- Sends mail OK, cannot receive in client → **IMAP/POP** settings vs **SMTP** send path.
- RDP button fails; ping works → **3389/firewall/RDP service**, not “no network.”
- HTTPS works; old HTTP intranet blocked → firewall policy by design.
- Phone shows 169.254.x.x → **DHCP** failure.
- Shares fail across VLANs but work locally → **SMB** path/firewall/permissions.
- Logons fail “time difference” → **NTP**/clock skew.
- Monitoring gaps → **SNMP/syslog** path.

**Layer habit.** Identify the *service job* before changing random settings. Ports label the door; the service is the room.

**What's next (later batches).** Wireless technologies, network types/internet links, then SOHO gear, tools, and a Networking domain review — not in A2a.`,
    },
    lightbulbMoment:
      "Name the job (DNS, DHCP, mail, remote, file, time) before you argue about the port number.",
    keyFacts: [
      "HTTPS 443 / HTTP 80 — prefer HTTPS for real web traffic",
      "DNS 53 — name problems masquerade as total outages",
      "DHCP 67/68 — no lease means addressing failure",
      "SSH 22 encrypted remote; Telnet 23 legacy insecure",
      "RDP 3389 — Windows remote desktop (lock down exposure)",
      "SMTP send vs IMAP/POP receive are different paths",
      "SMB 445 file sharing; LDAP 389 / LDAPS 636 directories",
      "NTP 123 time sync; SNMP 161/162 monitoring; Syslog 514 logging",
    ],
    guidedExample: {
      title: "Ticket triage by service",
      steps: [
        "Symptom: 'VPN is fine but file shares to \\\\files01 fail; web works.'",
        "Likely service: SMB (not DNS — web names resolve).",
        "Transport/port default: TCP/445.",
        "First checks: can you reach files01 by ping? Test-NetConnection files01 -Port 445 on an authorized host; check firewall between VLANs; confirm share permissions separately.",
        "Avoid: reinstalling Office before proving the SMB path.",
      ],
    },
    commonMistakes: [
      "Reimaging a PC for a DHCP outage affecting the whole VLAN",
      "Calling Telnet a secure admin standard",
      "Assuming email 'is down' without separating SMTP send vs IMAP receive",
      "Exposing RDP directly to the internet without controls",
      "Treating FTP as the preferred modern file-transfer default",
    ],
    examTraps: [
      "Match service → default port",
      "DNS vs DHCP symptom discrimination",
      "IMAP vs POP vs SMTP roles",
      "SSH vs Telnet security posture",
      "NTP related authentication/time issues",
    ],
    realWorldScenario:
      "Help desk hears 'email is broken.' Outbound messages leave (SMTP path OK) but phones show empty inboxes. IMAP to the mail host fails on 993 while webmail works. You fix the IMAP hostname in the profile — the mail *service* was up; the client path was wrong.",
    whenThisFails: [
      "If an entire floor loses DHCP, escalate to network infra — do not chase one PC image",
      "If RDP is required across untrusted networks, push for VPN/jump host rather than opening 3389 publicly",
      "If unsure whether a port test is authorized, stop and use approved tools/owners",
    ],
    teacherReflectionPrompt:
      "Give four tickets (DNS, DHCP, RDP, IMAP) and state the first proving check for each without jumping to reimaging.",
    quiz: [
      {
        id: "ap-network-services-q1",
        prompt: "A PC has IP 169.254.x.x and cannot reach the intranet. Which service most likely failed?",
        choices: [
          { id: "a", text: "DHCP address assignment" },
          { id: "b", text: "SMTP relay only" },
          { id: "c", text: "Laser fusing" },
          { id: "d", text: "DisplayPort Alt Mode" },
        ],
        correctChoiceId: "a",
        explanation:
          "APIPA addressing commonly appears when DHCP does not provide a lease.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-q2",
        prompt: "Which pair correctly matches a modern encrypted remote shell default?",
        choices: [
          { id: "a", text: "SSH — TCP/22" },
          { id: "b", text: "Telnet — TCP/22" },
          { id: "c", text: "SSH — UDP/67" },
          { id: "d", text: "RDP — UDP/53" },
        ],
        correctChoiceId: "a",
        explanation: "SSH commonly listens on TCP/22; Telnet is the insecure legacy alternative.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-q3",
        prompt: "Users can ping a server by IP but browsers fail for its hostname. Primary suspect:",
        choices: [
          { id: "a", text: "DNS" },
          { id: "b", text: "SMB share ACLs only" },
          { id: "c", text: "NTP stratum labels only" },
          { id: "d", text: "Toner sensors" },
        ],
        correctChoiceId: "a",
        explanation: "Name failure with IP success is classic DNS.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-q4",
        prompt: "Which service is primarily responsible for sending mail between mail systems?",
        choices: [
          { id: "a", text: "SMTP" },
          { id: "b", text: "IMAP only" },
          { id: "c", text: "POP3 only" },
          { id: "d", text: "NTP" },
        ],
        correctChoiceId: "a",
        explanation: "SMTP handles submission/relay; IMAP/POP retrieve to clients.",
        objectiveId: "AP1201-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-network-services-q5",
        prompt: "Logons fail with a large workstation time skew versus the domain. Which service should you verify?",
        choices: [
          { id: "a", text: "NTP / time synchronization" },
          { id: "b", text: "FTP data ports only" },
          { id: "c", text: "SNMP toner traps only" },
          { id: "d", text: "HTTP on port 80 exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "Authentication and Kerberos-style systems are sensitive to clock drift.",
        objectiveId: "AP1201-2.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-network-services-b1",
        prompt: "HTTPS default port:",
        choices: [
          { id: "a", text: "TCP/443" },
          { id: "b", text: "UDP/67" },
          { id: "c", text: "TCP/23" },
        ],
        correctChoiceId: "a",
        explanation: "HTTPS conventionally uses TCP/443.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-b2",
        prompt: "RDP default port:",
        choices: [
          { id: "a", text: "TCP/3389" },
          { id: "b", text: "UDP/123" },
          { id: "c", text: "TCP/445" },
        ],
        correctChoiceId: "a",
        explanation: "Windows Remote Desktop commonly uses 3389/TCP.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-b3",
        prompt: "SMB file sharing commonly uses:",
        choices: [
          { id: "a", text: "TCP/445" },
          { id: "b", text: "UDP/53 only" },
          { id: "c", text: "TCP/993" },
        ],
        correctChoiceId: "a",
        explanation: "SMB listens on 445/TCP in modern Windows networking.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-b4",
        prompt: "LDAP vs LDAPS ports:",
        choices: [
          { id: "a", text: "389 LDAP · 636 LDAPS (typical defaults)" },
          { id: "b", text: "80 LDAP · 443 LDAPS always" },
          { id: "c", text: "25 LDAP · 110 LDAPS" },
        ],
        correctChoiceId: "a",
        explanation: "Directory services use 389/636 by convention.",
        objectiveId: "AP1201-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-network-services-b5",
        prompt: "SNMP typical ports:",
        choices: [
          { id: "a", text: "UDP/161 (queries) and UDP/162 (traps)" },
          { id: "b", text: "TCP/22 only" },
          { id: "c", text: "TCP/3389 only" },
        ],
        correctChoiceId: "a",
        explanation: "SNMP monitoring uses 161/162 UDP in classic deployments.",
        objectiveId: "AP1201-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-network-services-b6",
        prompt: "IMAP vs POP3 primary difference:",
        choices: [
          { id: "a", text: "IMAP keeps mail on server for multi-device use; POP often downloads to one client" },
          { id: "b", text: "POP encrypts; IMAP cannot use TLS" },
          { id: "c", text: "IMAP is only for printers" },
        ],
        correctChoiceId: "a",
        explanation: "Retrieval models differ; both are distinct from SMTP send.",
        objectiveId: "AP1201-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-network-services-b7",
        prompt: "Plain FTP as a modern default for sensitive files:",
        choices: [
          { id: "a", text: "Not recommended — prefer secure alternatives (SFTP/FTPS/HTTPS)" },
          { id: "b", text: "Required by HTTPS" },
          { id: "c", text: "Identical to LDAPS" },
        ],
        correctChoiceId: "a",
        explanation: "Know FTP for exams; do not treat cleartext FTP as best practice.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-network-services-b8",
        prompt: "Syslog is primarily used for:",
        choices: [
          { id: "a", text: "Centralized event/logging streams" },
          { id: "b", text: "Assigning DHCP leases" },
          { id: "c", text: "Fusing toner" },
        ],
        correctChoiceId: "a",
        explanation: "Syslog aggregates logs; classic port UDP/514.",
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-network-services-f1",
        front: "DNS port?",
        back: "53/UDP (and 53/TCP when needed)",
      },
      {
        id: "ap-network-services-f2",
        front: "DHCP ports?",
        back: "67/UDP server · 68/UDP client",
      },
      {
        id: "ap-network-services-f3",
        front: "HTTPS / HTTP ports?",
        back: "443 / 80 TCP",
      },
      {
        id: "ap-network-services-f4",
        front: "SSH vs Telnet ports?",
        back: "22 SSH (prefer) · 23 Telnet (legacy insecure)",
      },
      {
        id: "ap-network-services-f5",
        front: "RDP / SMB ports?",
        back: "3389 RDP · 445 SMB",
      },
      {
        id: "ap-network-services-f6",
        front: "NTP / Syslog classic ports?",
        back: "123/UDP NTP · 514/UDP syslog (variants exist)",
      },
    ],
    assignments: [
      {
        id: "ap-lab-service-isolation-tickets",
        title: "Service-isolation tickets (fictional)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Diagnose each fictional ticket. For each, name: (1) likely service, (2) default port/transport, (3) failure class from this list: name-resolution · address-assignment · blocked port · wrong client config · remote service down · authentication/time · application.

T1: Works by IP, hostname fails in browser.
T2: New PC has 169.254 address; others on the VLAN are fine? (say what changes if *all* PCs show 169.254)
T3: Ping to jumpbox OK; RDP button fails.
T4: Outbound mail works; phone IMAP inbox empty; webmail OK.
T5: Shares to \\\\files01 fail from VLAN B; VLAN A OK; DNS OK.
T6: Domain logon fails after travel; clock is days wrong.

Optional read-only on your PC: \`ipconfig /all\` — note DHCP enabled? DNS servers? Do not scan external hosts.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Classify all six tickets with service + failure class",
          "Include default port/transport for at least four tickets",
          "Record DHCP/DNS fields from ipconfig /all on your practice PC",
        ],
        relatedTopicIds: ["ap-network-services", "ap-ports-protocols"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },
];
