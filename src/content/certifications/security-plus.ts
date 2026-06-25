import type { Certification } from "../types";

export const securityPlus: Certification = {
  id: "security-plus",
  name: "CompTIA Security+",
  shortName: "Security+",
  vendor: "CompTIA",
  overview:
    "CompTIA Security+ validates baseline skills for securing networks, systems, and cloud environments. It covers threats and vulnerabilities, security architecture, operations, and governance aligned with the SY0-701 exam objectives.",
  examSummary: {
    questionCount: 90,
    durationMinutes: 90,
    passingScore: "750/900",
    format: "Multiple choice and performance-based",
  },
  domains: [
    {
      id: "threats-and-attacks",
      name: "Threats and Attacks",
      topics: [
        {
          id: "threat-actors",
          name: "Threat Actors",
          lesson: {
            title: "Understanding Threat Actors",
            content: `Threat actors are individuals, groups, or organizations that pose risk to information systems. Security teams classify them by motivation, capability, and resources to prioritize defenses appropriately.

Nation-state actors are government-sponsored groups with advanced tools and long-term objectives such as espionage or disruption. Organized crime groups pursue financial gain through ransomware, fraud, and data theft. Hacktivists target organizations to promote political or social causes. Insiders—employees, contractors, or partners—can cause damage through negligence or malice because they already have access. Script kiddies use pre-built tools with limited skill but can still cause harm at scale.

Understanding actor types helps you select controls. Nation-state threats may justify advanced monitoring and threat intelligence sharing, while insider risk calls for least privilege, logging, and separation of duties. Unskilled opportunists are often deterred by basic hygiene: patching, MFA, and email filtering.

On the Security+ exam, match the actor to motivation and typical TTPs (tactics, techniques, and procedures). Financial motivation points to cybercriminals; ideology suggests hacktivists; espionage suggests nation-states; accidental data exposure often involves negligent insiders.`,
          },
          keyFacts: [
            "Nation-state actors pursue espionage or disruption with advanced capabilities",
            "Organized crime groups primarily seek financial profit",
            "Insiders already have legitimate access and may act maliciously or negligently",
            "Hacktivists are motivated by political or social causes",
            "Script kiddies use existing tools with limited technical expertise",
            "Actor motivation helps prioritize security controls and monitoring",
          ],
          commonMistakes: [
            "Assuming insiders are always malicious rather than negligent or compromised",
            "Treating script kiddies as harmless because they lack advanced skills",
            "Matching controls to malware type instead of actor motivation and capability",
            "Ignoring nation-state TTPs because the organization seems too small to target",
            "Failing to distinguish hacktivist disruption goals from organized crime financial motives",
          ],
          examTraps: [
            "Scenario describes financial fraud but answer choices push hacktivist or nation-state distractors",
            "Insider threat questions where negligence (misconfigured share) is the correct answer, not malice",
            "APT questions that emphasize long dwell time and strategic objectives over quick smash-and-grab",
            "Competitor/industrial espionage framed like organized crime—read for espionage vs profit motive",
            "Threat intelligence value questions: proactive defense from TTPs/IOCs, not eliminating all patching",
          ],
          objectives: ["SY0-701-2.1", "SY0-701-2.2"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "threat-actors-q6",
              prompt: "Which actor type typically has the longest dwell time in a network?",
              choices: [
                { id: "a", text: "Nation-state APT" },
                { id: "b", text: "Script kiddie" },
                { id: "c", text: "Insider only" },
                { id: "d", text: "Physical thief" },
              ],
              correctChoiceId: "a",
              explanation: "APTs pursue persistent access for espionage over months or years.",
            },
            {
              id: "threat-actors-q7",
              prompt: "A competitor steals trade secrets via spear phishing. Best classification?",
              choices: [
                { id: "a", text: "Industrial espionage / organized threat" },
                { id: "b", text: "Hacktivist" },
                { id: "c", text: "Unskilled opportunist" },
                { id: "d", text: "Natural disaster" },
              ],
              correctChoiceId: "a",
              explanation: "Targeted theft of IP suggests espionage-motivated actors.",
            },
            {
              id: "threat-actors-q8",
              prompt: "What control best addresses malicious insider data exfiltration?",
              choices: [
                { id: "a", text: "DLP and UEBA with least privilege" },
                { id: "b", text: "Disable all logging" },
                { id: "c", text: "Open firewall to internet" },
                { id: "d", text: "Remove MFA" },
              ],
              correctChoiceId: "a",
              explanation: "DLP monitors data movement; UEBA detects anomalous behavior.",
            },
            {
              id: "threat-actors-q9",
              prompt: "Script kiddies are best described as:",
              choices: [
                { id: "a", text: "Low-skill actors using existing tools" },
                { id: "b", text: "Government-funded APTs" },
                { id: "c", text: "Physical security guards" },
                { id: "d", text: "Compliance auditors" },
              ],
              correctChoiceId: "a",
              explanation: "They rely on pre-built tools rather than custom exploits.",
            },
            {
              id: "threat-actors-q10",
              prompt: "Threat intelligence sharing primarily helps organizations:",
              choices: [
                { id: "a", text: "Proactively defend against known TTPs and IOCs" },
                { id: "b", text: "Eliminate all patching" },
                { id: "c", text: "Replace firewalls" },
                { id: "d", text: "Disable encryption" },
              ],
              correctChoiceId: "a",
              explanation: "Shared IOCs and TTPs improve detection and blocking.",
            },
            {
              id: "threat-actors-q11",
              prompt: "An employee accidentally posts credentials in a public chat. Actor type?",
              choices: [
                { id: "a", text: "Negligent insider" },
                { id: "b", text: "Nation-state" },
                { id: "c", text: "Organized crime leader" },
                { id: "d", text: "Hacktivist" },
              ],
              correctChoiceId: "a",
              explanation: "Unintentional policy violation by a trusted user is negligent insider behavior.",
            },
            {
              id: "threat-actors-q12",
              prompt: "Which motivation aligns with ransomware deployment?",
              choices: [
                { id: "a", text: "Financial gain" },
                { id: "b", text: "Political protest only" },
                { id: "c", text: "Academic research only" },
                { id: "d", text: "Weather disruption" },
              ],
              correctChoiceId: "a",
              explanation: "Ransomware operators typically seek payment.",
            },
            {
              id: "threat-actors-q13",
              prompt: "Profiling threat actors helps security teams:",
              choices: [
                { id: "a", text: "Prioritize controls and monitoring investments" },
                { id: "b", text: "Avoid all risk assessments" },
                { id: "c", text: "Disable incident response" },
                { id: "d", text: "Remove authentication" },
              ],
              correctChoiceId: "a",
              explanation: "Understanding capability and intent guides defense strategy.",
            },
          ],
                    quiz: [
            {
              id: "threat-actors-q1",
              prompt: "Which threat actor is most commonly motivated by financial gain?",
              choices: [
                { id: "a", text: "Hacktivist" },
                { id: "b", text: "Organized crime group" },
                { id: "c", text: "Nation-state actor" },
                { id: "d", text: "Security researcher" },
              ],
              correctChoiceId: "b",
              explanation:
                "Organized crime and cybercriminal groups typically target money through ransomware, fraud, and stolen data.",
            },
            {
              id: "threat-actors-q2",
              prompt: "What distinguishes an insider threat from external attackers?",
              choices: [
                { id: "a", text: "Insiders never use phishing" },
                { id: "b", text: "Insiders already have authorized access to systems" },
                { id: "c", text: "Insiders only act intentionally" },
                { id: "d", text: "Insiders always have nation-state backing" },
              ],
              correctChoiceId: "b",
              explanation:
                "Insiders are trusted users with legitimate credentials, making detection harder and impact potentially greater.",
            },
            {
              id: "threat-actors-q3",
              prompt: "A group defaces a corporate website to protest environmental policy. Which actor type best fits?",
              choices: [
                { id: "a", text: "Hacktivist" },
                { id: "b", text: "Script kiddie" },
                { id: "c", text: "Organized crime" },
                { id: "d", text: "Competitor conducting industrial espionage only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Hacktivists use cyber attacks to advance ideological or political agendas rather than direct financial gain.",
            },
            {
              id: "threat-actors-q4",
              prompt: "Which control is especially important against negligent insider threats?",
              choices: [
                { id: "a", text: "Disabling all logging" },
                { id: "b", text: "Security awareness training and data handling policies" },
                { id: "c", text: "Removing all authentication" },
                { id: "d", text: "Publishing passwords in a shared document" },
              ],
              correctChoiceId: "b",
              explanation:
                "Training and clear policies reduce accidental disclosure, misconfiguration, and unsafe practices by insiders.",
            },
            {
              id: "threat-actors-q5",
              prompt: "Nation-state actors are best characterized by which combination?",
              choices: [
                { id: "a", text: "Low resources and no long-term goals" },
                { id: "b", text: "Advanced capabilities and strategic objectives like espionage" },
                { id: "c", text: "Exclusive use of social engineering only" },
                { id: "d", text: "Motivation limited to website defacement" },
              ],
              correctChoiceId: "b",
              explanation:
                "Nation-state groups often have significant funding, sophisticated tools, and persistent campaigns for intelligence or disruption.",
            },
          ],
          flashcards: [
            {
              id: "threat-actors-f1",
              front: "What motivates organized crime threat actors?",
              back: "Financial gain through ransomware, fraud, and data theft",
            },
            {
              id: "threat-actors-f2",
              front: "What is an insider threat?",
              back: "A trusted user who causes harm through malice or negligence",
            },
            {
              id: "threat-actors-f3",
              front: "What distinguishes hacktivists?",
              back: "Ideological or political motivation rather than profit",
            },
            {
              id: "threat-actors-f4",
              front: "What is an APT?",
              back: "Advanced persistent threat — skilled, resourced actor with long-term access goals",
            },
            {
              id: "threat-actors-f5",
              front: "Unintentional insider example?",
              back: "Employee emails customer data to wrong address or misconfigures public S3 bucket",
            },
            {
              id: "threat-actors-f6",
              front: "Why profile threat actors?",
              back: "Prioritize defenses and detection based on motivation, capability, and TTPs",
            }
          ],
        },
        {
          id: "malware",
          name: "Malware",
          lesson: {
            title: "Malware Types and Defenses",
            content: `Malware is malicious software designed to disrupt, damage, or gain unauthorized access to systems. Security professionals must recognize major families and how they spread.

Viruses attach to legitimate files and require user action to execute. Worms self-replicate across networks without user interaction. Trojans disguise themselves as useful software to trick users into installing them. Ransomware encrypts data or locks systems until a payment is made. Spyware covertly collects information such as keystrokes or browsing habits. Rootkits hide their presence deep in the operating system. Fileless malware runs in memory and avoids traditional file-based detection.

Common delivery methods include phishing emails, malicious downloads, infected removable media, and exploited vulnerabilities. Defenses combine layered controls: endpoint protection, application allowlisting, email filtering, patching, least privilege, and user training. Backups with offline copies are critical for ransomware recovery.

On exams, distinguish malware by behavior—self-propagation indicates a worm; encryption for extortion indicates ransomware; concealment in the OS suggests a rootkit. Always pair identification with an appropriate mitigation.`,
          },
          keyFacts: [
            "Worms self-replicate; viruses typically need a host file and user action",
            "Trojans masquerade as legitimate software",
            "Ransomware encrypts or locks systems to demand payment",
            "Rootkits hide malware from detection tools",
            "Fileless malware executes in memory to evade signature scans",
            "Layered defenses include EDR, patching, backups, and user awareness",
          ],
          commonMistakes: [
            "Confusing worms (self-replicating) with trojans (disguised, user-installed)",
            "Assuming antivirus alone stops fileless or memory-resident malware",
            "Paying ransom immediately instead of isolating systems and preserving evidence",
            "Treating ransomware as the only malware type that encrypts data",
            "Ignoring rootkit behavior that hides other malware from detection tools",
          ],
          examTraps: [
            "Scenario describes automatic network spread without user action—worm, not virus or trojan",
            "Logic bomb questions triggered by date or event, not external command-and-control",
            "Cryptojacking distractors that describe unauthorized CPU/GPU use, not encryption",
            "Fileless malware answers emphasize memory execution to evade signature scans",
            "First response to active malware: isolate and preserve evidence, not reboot or pay ransom",
          ],
          objectives: ["SY0-701-2.3", "SY0-701-2.4"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          assignments: [
            {
              id: "malware-classifier-drill",
              title: "Malware Classifier Simulator Drill",
              type: "simulator",
              instructions: "Launch the Malware Classifier drill. Classify each scenario by malware family (worm, trojan, ransomware, etc.). Aim for 80% or higher. Review weak concepts before moving on.",
              estimatedMinutes: 15,
              simulatorId: "malware-classifier",
              completionCriteria: ["Complete all drill items", "Score at least 80%", "Review any missed classifications"],
              relatedTopicIds: ["malware"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "malware-q6",
              prompt: "A worm spreading via SMB without user action is stopped best by:",
              choices: [
                { id: "a", text: "Patching and network segmentation" },
                { id: "b", text: "Disabling backups" },
                { id: "c", text: "Removing antivirus" },
                { id: "d", text: "Publishing passwords" },
              ],
              correctChoiceId: "a",
              explanation: "Patches close exploit paths; segmentation limits spread.",
            },
            {
              id: "malware-q7",
              prompt: "Rootkits primarily aim to:",
              choices: [
                { id: "a", text: "Hide malicious presence from detection" },
                { id: "b", text: "Speed up CPU performance" },
                { id: "c", text: "Encrypt backups only" },
                { id: "d", text: "Assign IP addresses" },
              ],
              correctChoiceId: "a",
              explanation: "Rootkits conceal themselves and other malware in the OS.",
            },
            {
              id: "malware-q8",
              prompt: "Logic bombs activate based on:",
              choices: [
                { id: "a", text: "Predefined conditions such as date or event" },
                { id: "b", text: "Random network noise" },
                { id: "c", text: "User biometrics only" },
                { id: "d", text: "DNS TTL expiry" },
              ],
              correctChoiceId: "a",
              explanation: "Logic bombs trigger when specific conditions are met.",
            },
            {
              id: "malware-q9",
              prompt: "EDR improves on traditional AV by:",
              choices: [
                { id: "a", text: "Behavioral analysis and threat hunting" },
                { id: "b", text: "Removing all logging" },
                { id: "c", text: "Blocking all USB devices only" },
                { id: "d", text: "Disabling encryption" },
              ],
              correctChoiceId: "a",
              explanation: "EDR detects suspicious behavior beyond signatures.",
            },
            {
              id: "malware-q10",
              prompt: "Cryptominer malware impact is primarily:",
              choices: [
                { id: "a", text: "Unauthorized consumption of CPU/GPU resources" },
                { id: "b", text: "Physical theft of servers" },
                { id: "c", text: "Deletion of all VLANs" },
                { id: "d", text: "Improved TLS performance" },
              ],
              correctChoiceId: "a",
              explanation: "Miners abuse compute resources for cryptocurrency.",
            },
            {
              id: "malware-q11",
              prompt: "Best first response to suspected ransomware:",
              choices: [
                { id: "a", text: "Isolate affected systems and preserve evidence" },
                { id: "b", text: "Pay ransom immediately" },
                { id: "c", text: "Reboot all domain controllers" },
                { id: "d", text: "Disable MFA globally" },
              ],
              correctChoiceId: "a",
              explanation: "Isolation prevents spread; evidence supports investigation.",
            },
            {
              id: "malware-q12",
              prompt: "Trojans differ from worms because trojans:",
              choices: [
                { id: "a", text: "Require user installation and do not self-replicate" },
                { id: "b", text: "Always encrypt all drives" },
                { id: "c", text: "Only affect printers" },
                { id: "d", text: "Spread automatically without files" },
              ],
              correctChoiceId: "a",
              explanation: "Trojans deceive users into installing them.",
            },
            {
              id: "malware-q13",
              prompt: "Application allowlisting prevents:",
              choices: [
                { id: "a", text: "Execution of unauthorized software" },
                { id: "b", text: "All network traffic" },
                { id: "c", text: "Password hashing" },
                { id: "d", text: "Certificate expiration" },
              ],
              correctChoiceId: "a",
              explanation: "Only approved applications can run on endpoints.",
            },
          ],
                    quiz: [
            {
              id: "malware-q1",
              prompt: "Which malware type self-replicates across a network without user interaction?",
              choices: [
                { id: "a", text: "Virus" },
                { id: "b", text: "Worm" },
                { id: "c", text: "Trojan" },
                { id: "d", text: "Logic bomb" },
              ],
              correctChoiceId: "b",
              explanation: "Worms spread automatically across networks, unlike viruses that usually need a host file and user action.",
            },
            {
              id: "malware-q2",
              prompt: "A user downloads a fake PDF viewer that installs a backdoor. What malware type is this?",
              choices: [
                { id: "a", text: "Worm" },
                { id: "b", text: "Trojan" },
                { id: "c", text: "Adware only" },
                { id: "d", text: "BIOS firmware" },
              ],
              correctChoiceId: "b",
              explanation: "Trojans appear legitimate but deliver malicious payloads after installation.",
            },
            {
              id: "malware-q3",
              prompt: "Which control is most critical for recovering from ransomware?",
              choices: [
                { id: "a", text: "Offline, tested backups" },
                { id: "b", text: "Disabling all antivirus" },
                { id: "c", text: "Sharing admin passwords" },
                { id: "d", text: "Opening all email attachments" },
              ],
              correctChoiceId: "a",
              explanation: "Immutable or offline backups allow restoration without paying ransom if encryption occurs.",
            },
            {
              id: "malware-q4",
              prompt: "What best describes fileless malware?",
              choices: [
                { id: "a", text: "Malware stored only on paper" },
                { id: "b", text: "Malware that runs in memory without a traditional file on disk" },
                { id: "c", text: "Malware that cannot spread" },
                { id: "d", text: "Malware that only affects printers" },
              ],
              correctChoiceId: "b",
              explanation: "Fileless attacks use scripts, registry, or memory to evade file-based signature detection.",
            },
            {
              id: "malware-q5",
              prompt: "Spyware is primarily designed to:",
              choices: [
                { id: "a", text: "Encrypt all drives for ransom" },
                { id: "b", text: "Secretly collect user or system information" },
                { id: "c", text: "Patch operating system vulnerabilities" },
                { id: "d", text: "Improve network throughput" },
              ],
              correctChoiceId: "b",
              explanation: "Spyware monitors activity such as keystrokes, credentials, or browsing without consent.",
            },
          ],
          flashcards: [
            {
              id: "malware-f1",
              front: "Worm vs virus?",
              back: "Worms self-replicate across networks; viruses attach to files and need user action",
            },
            {
              id: "malware-f2",
              front: "What does ransomware do?",
              back: "Encrypts or locks data/systems and demands payment for recovery",
            },
            {
              id: "malware-f3",
              front: "What is fileless malware?",
              back: "Malware that runs in memory to avoid traditional file-based detection",
            },
            {
              id: "malware-f4",
              front: "Polymorphic vs metamorphic?",
              back: "Polymorphic changes appearance; metamorphic rewrites code structure entirely",
            },
            {
              id: "malware-f5",
              front: "What is a botnet?",
              back: "Network of compromised devices controlled remotely for coordinated attacks",
            },
            {
              id: "malware-f6",
              front: "First step when malware is detected?",
              back: "Isolate affected systems to prevent spread, then investigate and eradicate",
            }
          ],
        },
        {
          id: "social-engineering",
          name: "Social Engineering",
          lesson: {
            title: "Social Engineering Attacks",
            content: `Social engineering manipulates people into revealing information or performing actions that compromise security. It exploits trust, urgency, and human psychology rather than technical flaws alone.

Phishing sends fraudulent emails impersonating trusted entities to steal credentials or deliver malware. Spear phishing targets specific individuals with personalized messages. Vishing uses voice calls; smishing uses SMS. Pretexting invents a false scenario to extract data—such as an attacker posing as IT support. Baiting offers something enticing, like a infected USB drive labeled "Payroll." Tailgating follows an authorized person through a secure door. Quid pro quo promises a benefit in exchange for information or access.

Defenses emphasize verification procedures, security awareness training, reporting channels for suspicious messages, and technical controls like email authentication (SPF, DKIM, DMARC) and MFA. Users should confirm unusual requests through a separate trusted channel—call a known number, not one provided in the message.

On the Security+ exam, identify the technique from the scenario and recommend human and technical mitigations. Urgency and authority are common manipulation tactics across all variants.`,
          },
          keyFacts: [
            "Phishing uses deceptive messages; spear phishing targets specific victims",
            "Vishing is voice phishing; smishing uses text messages",
            "Pretexting creates a fabricated story to obtain information",
            "Tailgating bypasses physical access controls by following authorized personnel",
            "MFA and email filtering reduce impact even if users click links",
            "Verify unusual requests through an independent trusted channel",
          ],
          commonMistakes: [
            "Confusing vishing (voice) with phishing (email) or smishing (SMS)",
            "Treating tailgating as a network attack rather than physical access bypass",
            "Believing MFA eliminates all social engineering risk after a user approves a prompt",
            "Failing to verify wire-transfer or credential requests through an out-of-band channel",
            "Mixing up pretexting (fabricated story) with baiting (enticing item like a USB drop)",
          ],
          examTraps: [
            "Spear phishing scenarios that emphasize targeted, personalized content over mass email",
            "Quid pro quo answers where attacker offers a service in exchange for credentials",
            "CEO fraud/BEC questions where out-of-band verification is the best control",
            "Physical tailgating vs digital attacks—read whether the scenario involves building access",
            "Security awareness training purpose: measure and improve user behavior, not replace technical controls",
          ],
          objectives: ["SY0-701-2.5", "SY0-701-2.6"],
          practiceType: ["reading", "quiz", "flashcard", "external-lab", "case-study"],
          externalResources: [
            {
              id: "wireshark",
              name: "Wireshark",
              url: "https://www.wireshark.org/",
              cost: "free",
              platform: "windows",
            installNotes: "Install Wireshark and download a sample phishing pcap from Wireshark sample captures.",
            },
          ],
          assignments: [
            {
              id: "wireshark-phishing-lab",
              title: "Lab: Analyze a Phishing PCAP in Wireshark",
              type: "external-lab",
              instructions: "1. Install Wireshark.\n2. Download a sample phishing capture from Wireshark sample captures or use a provided lab file.\n3. Filter for HTTP/DNS traffic and identify the phishing URL.\n4. Note any POST requests submitting credentials.\n5. Document three indicators that confirm phishing.\n6. Return here and mark complete.",
              estimatedMinutes: 45,
              externalResourceId: "wireshark",
              completionCriteria: ["Identified phishing URL in capture", "Documented credential submission attempt", "Listed three phishing indicators"],
              relatedTopicIds: ["social-engineering"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "social-engineering-q6",
              prompt: "Spear phishing differs from bulk phishing because it:",
              choices: [
                { id: "a", text: "Targets specific individuals with tailored content" },
                { id: "b", text: "Uses only physical mail" },
                { id: "c", text: "Never uses email" },
                { id: "d", text: "Requires nation-state sponsorship" },
              ],
              correctChoiceId: "a",
              explanation: "Personalization increases success rates against chosen victims.",
            },
            {
              id: "social-engineering-q7",
              prompt: "Vishing uses which channel?",
              choices: [
                { id: "a", text: "Voice phone calls" },
                { id: "b", text: "SMS only" },
                { id: "c", text: "USB drops only" },
                { id: "d", text: "Satellite radio" },
              ],
              correctChoiceId: "a",
              explanation: "Vishing is voice-based social engineering.",
            },
            {
              id: "social-engineering-q8",
              prompt: "An attacker offers free software in exchange for login credentials. Technique?",
              choices: [
                { id: "a", text: "Quid pro quo" },
                { id: "b", text: "Tailgating" },
                { id: "c", text: "MAC flooding" },
                { id: "d", text: "ARP spoofing" },
              ],
              correctChoiceId: "a",
              explanation: "Quid pro quo exchanges something for information or access.",
            },
            {
              id: "social-engineering-q9",
              prompt: "Best defense against CEO fraud wire transfers:",
              choices: [
                { id: "a", text: "Out-of-band verification of payment requests" },
                { id: "b", text: "Disable all email" },
                { id: "c", text: "Share admin passwords" },
                { id: "d", text: "Remove audit logs" },
              ],
              correctChoiceId: "a",
              explanation: "Verify unusual financial requests via a known trusted channel.",
            },
            {
              id: "social-engineering-q10",
              prompt: "Phishing simulations help organizations by:",
              choices: [
                { id: "a", text: "Measuring and improving user awareness" },
                { id: "b", text: "Replacing all technical controls" },
                { id: "c", text: "Eliminating MFA" },
                { id: "d", text: "Disabling spam filters" },
              ],
              correctChoiceId: "a",
              explanation: "Simulations train users and identify training gaps.",
            },
            {
              id: "social-engineering-q11",
              prompt: "Smishing attacks arrive via:",
              choices: [
                { id: "a", text: "SMS text messages" },
                { id: "b", text: "Physical tailgating" },
                { id: "c", text: "Biometric scanners" },
                { id: "d", text: "Firewall logs" },
              ],
              correctChoiceId: "a",
              explanation: "Smishing uses text messaging to deceive victims.",
            },
            {
              id: "social-engineering-q12",
              prompt: "SPF, DKIM, and DMARC help prevent:",
              choices: [
                { id: "a", text: "Email spoofing and phishing delivery" },
                { id: "b", text: "Hard drive failure" },
                { id: "c", text: "Power outages" },
                { id: "d", text: "Cable length issues" },
              ],
              correctChoiceId: "a",
              explanation: "Email authentication frameworks reduce spoofed messages.",
            },
            {
              id: "social-engineering-q13",
              prompt: "Urgency and authority are:",
              choices: [
                { id: "a", text: "Common psychological manipulation tactics" },
                { id: "b", text: "Encryption algorithms" },
                { id: "c", text: "Firewall rule types" },
                { id: "d", text: "VPN tunnel modes" },
              ],
              correctChoiceId: "a",
              explanation: "Attackers pressure victims by claiming urgency or senior authority.",
            },
          ],
                    quiz: [
            {
              id: "social-engineering-q1",
              prompt: "An attacker calls pretending to be help desk and asks for a password reset. What is this?",
              choices: [
                { id: "a", text: "Vishing with pretexting" },
                { id: "b", text: "SQL injection" },
                { id: "c", text: "ARP spoofing" },
                { id: "d", text: "Port scanning" },
              ],
              correctChoiceId: "a",
              explanation: "Voice-based social engineering using a fabricated IT scenario is vishing combined with pretexting.",
            },
            {
              id: "social-engineering-q2",
              prompt: "Which attack targets one executive with a customized email about a merger?",
              choices: [
                { id: "a", text: "Spear phishing" },
                { id: "b", text: "War driving" },
                { id: "c", text: "Bluejacking" },
                { id: "d", text: "Banner grabbing" },
              ],
              correctChoiceId: "a",
              explanation: "Spear phishing is highly targeted phishing aimed at specific individuals or roles.",
            },
            {
              id: "social-engineering-q3",
              prompt: "An employee holds a door open for someone without a badge. What technique is this?",
              choices: [
                { id: "a", text: "Tailgating" },
                { id: "b", text: "Pharming" },
                { id: "c", text: "Cryptojacking" },
                { id: "d", text: "Fault injection" },
              ],
              correctChoiceId: "a",
              explanation: "Tailgating (piggybacking) bypasses physical controls by entering with an authorized person.",
            },
            {
              id: "social-engineering-q4",
              prompt: "Which control best reduces credential theft from phishing?",
              choices: [
                { id: "a", text: "Multifactor authentication" },
                { id: "b", text: "Disabling firewalls" },
                { id: "c", text: "Using shared admin accounts" },
                { id: "d", text: "Posting credentials on intranet wikis" },
              ],
              correctChoiceId: "a",
              explanation: "MFA limits account compromise even when passwords are phished.",
            },
            {
              id: "social-engineering-q5",
              prompt: "USB drives left in a parking lot hoping someone plugs them in is an example of:",
              choices: [
                { id: "a", text: "Baiting" },
                { id: "b", text: "Shoulder surfing" },
                { id: "c", text: "DNS poisoning" },
                { id: "d", text: "Token impersonation" },
              ],
              correctChoiceId: "a",
              explanation: "Baiting lures victims with a physical or digital enticement that leads to compromise.",
            },
          ],
          flashcards: [
            {
              id: "social-engineering-f1",
              front: "Spear phishing vs phishing?",
              back: "Spear phishing targets specific individuals with tailored messages",
            },
            {
              id: "social-engineering-f2",
              front: "What is tailgating?",
              back: "Following an authorized person through a secure entry without proper credentials",
            },
            {
              id: "social-engineering-f3",
              front: "What is pretexting?",
              back: "Creating a false scenario to trick someone into revealing information or access",
            },
            {
              id: "social-engineering-f4",
              front: "What is BEC?",
              back: "Business Email Compromise — impersonation to trick staff into transfers or data disclosure",
            },
            {
              id: "social-engineering-f5",
              front: "Watering hole attack?",
              back: "Compromising a website the target group visits to deliver malware",
            },
            {
              id: "social-engineering-f6",
              front: "DMARC purpose?",
              back: "Email authentication policy telling receivers how to handle SPF/DKIM failures",
            }
          ],
        },
      ],
    },
    {
      id: "security-concepts",
      name: "Security Concepts",
      topics: [
        {
          id: "cryptography-basics",
          name: "Cryptography Basics",
          lesson: {
            title: "Foundations of Cryptography",
            content: `Cryptography protects confidentiality, integrity, and authenticity of data. Security+ focuses on practical concepts: symmetric vs asymmetric encryption, hashing, digital signatures, and common protocols.

Symmetric encryption uses one shared secret key for both encryption and decryption—fast and suited for bulk data (AES). Asymmetric encryption uses a public/private key pair—public keys encrypt or verify; private keys decrypt or sign (RSA, ECC). Hashing produces a fixed-length digest from input; it is one-way and used for integrity verification (SHA-256). Salting adds random data before hashing passwords to defeat rainbow tables.

Digital signatures use a private key to sign and a public key to verify authenticity and non-repudiation. TLS secures data in transit by combining asymmetric key exchange with symmetric session encryption. Key management—generation, storage, rotation, and destruction—is as important as algorithm choice.

Deprecated algorithms (MD5, SHA-1 for security purposes, DES, RC4) should not be used for new implementations. Prefer AES-256, SHA-256 or stronger, and modern TLS versions.`,
          },
          keyFacts: [
            "Symmetric encryption uses one shared key; asymmetric uses public/private key pairs",
            "AES is a common symmetric standard; RSA and ECC are common asymmetric algorithms",
            "Hashing is one-way and verifies integrity; passwords should be salted and hashed",
            "Digital signatures provide authenticity and non-repudiation",
            "TLS protects data in transit using hybrid cryptography",
            "Avoid MD5, SHA-1, DES, and RC4 for new security implementations",
          ],
          guidedExample: {
            title: "Verify File Integrity with SHA-256 and a Digital Signature",
            steps: [
              "A vendor publishes software update v2.4 with a SHA-256 hash on their download page.",
              "Download the installer and compute SHA-256 locally using a trusted tool—the digest must match the published hash.",
              "Verify the vendor's code-signing certificate chains to a trusted root CA and is not expired or revoked.",
              "Confirm the digital signature on the installer validates with the vendor's public key, proving authenticity.",
              "If hash or signature fails, treat the file as tampered and do not deploy—report to the vendor.",
              "Store the verified hash in change-management records as evidence of supply-chain integrity.",
            ],
          },
          commonMistakes: [
            "Using hashing for confidentiality instead of integrity verification",
            "Confusing symmetric (one shared key) with asymmetric (public/private pair) encryption",
            "Selecting MD5 or SHA-1 for new security implementations despite known weaknesses",
            "Assuming encryption provides non-repudiation without digital signatures",
            "Forgetting to salt passwords, leaving hashes vulnerable to rainbow tables",
          ],
          examTraps: [
            "Scenario asks for integrity check—hashing is correct, not symmetric encryption",
            "Digital signature questions: authenticity and non-repudiation, not confidentiality alone",
            "ECC vs RSA: smaller keys at equivalent strength, not elimination of key exchange",
            "HMAC combines hashing with a secret key for integrity and authenticity",
            "Deprecated algorithm lists: MD5, SHA-1, DES, RC4—distractors offer AES-256 or TLS 1.3",
          ],
          realWorldScenario: "Your team must deploy a critical security patch to 500 endpoints. The vendor publishes a SHA-256 checksum and signs the installer with their code-signing certificate. You verify the hash matches, validate the certificate chain to a trusted root CA, and confirm the digital signature before pushing the update through your patch management system—rejecting a mismatched download that could indicate a supply-chain compromise.",
          estimatedStudyMinutes: 40,
          difficulty: "medium",
          prerequisites: [],
          objectives: ["SY0-701-1.2", "SY0-701-1.3"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
          externalResources: [
            {
              id: "cyberchef",
              name: "CyberChef",
              url: "https://gchq.github.io/CyberChef/",
              cost: "free",
              platform: "web",
            installNotes: "Browser-based tool — no install required.",
            },
          ],
          assignments: [
            {
              id: "crypto-matcher-drill",
              title: "Cryptography Matcher Simulator Drill",
              type: "simulator",
              instructions: "Complete the Crypto Matcher drill. Match each scenario to the correct algorithm or cryptographic concept (symmetric, asymmetric, hash, etc.). Review explanations for missed items.",
              estimatedMinutes: 15,
              simulatorId: "crypto-matcher",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["cryptography-basics"],
              order: 1,
            },
            {
              id: "cert-chain-drill",
              title: "Certificate Chain Ordering Drill",
              type: "simulator",
              instructions: "Complete the Certificate Chain Ordering simulator. Arrange certificates from leaf to root CA in the correct trust order.",
              estimatedMinutes: 10,
              simulatorId: "cert-chain-order",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["cryptography-basics"],
              order: 2,
            },
          ],
          questionBank: [
            {
              id: "cryptography-basics-q6",
              prompt: "ECC advantage over RSA at same security level:",
              choices: [
                { id: "a", text: "Smaller key sizes with equivalent strength" },
                { id: "b", text: "No need for key exchange" },
                { id: "c", text: "Reversible hashing" },
                { id: "d", text: "Faster MD5 collisions" },
              ],
              correctChoiceId: "a",
              explanation: "ECC achieves strong security with smaller keys—useful for mobile.",
            },
            {
              id: "cryptography-basics-q7",
              prompt: "HMAC provides:",
              choices: [
                { id: "a", text: "Integrity and authenticity using a secret key" },
                { id: "b", text: "Physical access control" },
                { id: "c", text: "DNS resolution" },
                { id: "d", text: "VLAN tagging" },
              ],
              correctChoiceId: "a",
              explanation: "HMAC combines hashing with a shared secret.",
            },
            {
              id: "cryptography-basics-q8",
              prompt: "Key rotation reduces risk by:",
              choices: [
                { id: "a", text: "Limiting exposure if a key is compromised" },
                { id: "b", text: "Eliminating need for encryption" },
                { id: "c", text: "Disabling TLS" },
                { id: "d", text: "Removing certificates" },
              ],
              correctChoiceId: "a",
              explanation: "Regular rotation limits damage from leaked keys.",
            },
            {
              id: "cryptography-basics-q9",
              prompt: "Transport mode IPsec protects:",
              choices: [
                { id: "a", text: "Payload only, original IP header visible" },
                { id: "b", text: "Entire packet always" },
                { id: "c", text: "Only MAC addresses" },
                { id: "d", text: "Only wireless frames" },
              ],
              correctChoiceId: "a",
              explanation: "Transport mode encrypts data payload, not full packet.",
            },
            {
              id: "cryptography-basics-q10",
              prompt: "A certificate signed by a trusted CA proves:",
              choices: [
                { id: "a", text: "Binding between public key and entity identity" },
                { id: "b", text: "Physical location of server" },
                { id: "c", text: "CPU serial number" },
                { id: "d", text: "Switch port number" },
              ],
              correctChoiceId: "a",
              explanation: "CA signatures validate identity binding in PKI.",
            },
            {
              id: "cryptography-basics-q11",
              prompt: "Rainbow tables defeat:",
              choices: [
                { id: "a", text: "Unsalted password hashes" },
                { id: "b", text: "AES-256 encryption" },
                { id: "c", text: "TLS 1.3 sessions" },
                { id: "d", text: "Physical locks" },
              ],
              correctChoiceId: "a",
              explanation: "Precomputed tables crack unsalted hashes quickly.",
            },
            {
              id: "cryptography-basics-q12",
              prompt: "Steganography hides data in:",
              choices: [
                { id: "a", text: "Innocuous-looking carriers like images or audio" },
                { id: "b", text: "Plain HTTP headers only" },
                { id: "c", text: "Switch CAM tables" },
                { id: "d", text: "Power cables" },
              ],
              correctChoiceId: "a",
              explanation: "Steganography conceals data within other files.",
            },
            {
              id: "cryptography-basics-q13",
              prompt: "Deprecated for security: MD5, SHA-1, DES, and:",
              choices: [
                { id: "a", text: "RC4 stream cipher" },
                { id: "b", text: "AES-256" },
                { id: "c", text: "SHA-256" },
                { id: "d", text: "TLS 1.3" },
              ],
              correctChoiceId: "a",
              explanation: "RC4 has known weaknesses and should not be used.",
            },
          ],
                    quiz: [
            {
              id: "cryptography-basics-q1",
              prompt: "Which encryption type uses the same key for encryption and decryption?",
              choices: [
                { id: "a", text: "Symmetric" },
                { id: "b", text: "Asymmetric" },
                { id: "c", text: "Hashing" },
                { id: "d", text: "Steganography" },
              ],
              correctChoiceId: "a",
              explanation: "Symmetric algorithms like AES use a single shared secret key for both operations.",
            },
            {
              id: "cryptography-basics-q2",
              prompt: "What is the primary purpose of a cryptographic hash?",
              choices: [
                { id: "a", text: "Reversible encryption of large files" },
                { id: "b", text: "Integrity verification with a fixed-length digest" },
                { id: "c", text: "Compressing backup tapes" },
                { id: "d", text: "Assigning IP addresses" },
              ],
              correctChoiceId: "b",
              explanation: "Hashes detect tampering; even a small change produces a different digest.",
            },
            {
              id: "cryptography-basics-q3",
              prompt: "Why salt passwords before hashing?",
              choices: [
                { id: "a", text: "To make hashes identical for all users" },
                { id: "b", text: "To defeat rainbow table and duplicate hash attacks" },
                { id: "c", text: "To eliminate the need for hashing" },
                { id: "d", text: "To store passwords in plain text" },
              ],
              correctChoiceId: "b",
              explanation: "Unique salts ensure identical passwords produce different hashes, slowing precomputed attacks.",
            },
            {
              id: "cryptography-basics-q4",
              prompt: "Digital signatures primarily provide:",
              choices: [
                { id: "a", text: "Authenticity and non-repudiation" },
                { id: "b", text: "Faster disk defragmentation" },
                { id: "c", text: "Physical door access" },
                { id: "d", text: "MAC address filtering" },
              ],
              correctChoiceId: "a",
              explanation: "Signing with a private key proves origin and that the signer cannot easily deny sending it.",
            },
            {
              id: "cryptography-basics-q5",
              prompt: "Which algorithm should be avoided for new security implementations?",
              choices: [
                { id: "a", text: "AES-256" },
                { id: "b", text: "SHA-256" },
                { id: "c", text: "MD5" },
                { id: "d", text: "TLS 1.3" },
              ],
              correctChoiceId: "c",
              explanation: "MD5 is cryptographically broken and unsuitable for integrity or security use cases today.",
            },
          ],
          flashcards: [
            {
              id: "cryptography-basics-f1",
              front: "Symmetric vs asymmetric encryption?",
              back: "Symmetric uses one shared key; asymmetric uses public/private key pairs",
            },
            {
              id: "cryptography-basics-f2",
              front: "Purpose of password salting?",
              back: "Adds unique random data so identical passwords produce different hashes",
            },
            {
              id: "cryptography-basics-f3",
              front: "What does a digital signature prove?",
              back: "Authenticity of the sender and non-repudiation of the message",
            },
            {
              id: "cryptography-basics-f4",
              front: "What is PKI?",
              back: "Public Key Infrastructure — framework for issuing and managing digital certificates",
            },
            {
              id: "cryptography-basics-f5",
              front: "CRL vs OCSP?",
              back: "CRL is a revoked cert list; OCSP provides real-time revocation status lookup",
            },
            {
              id: "cryptography-basics-f6",
              front: "What is PFS?",
              back: "Perfect Forward Secrecy — compromise of long-term keys does not decrypt past sessions",
            }
          ],
        },
        {
          id: "authentication",
          name: "Authentication",
          lesson: {
            title: "Authentication Methods",
            content: `Authentication verifies identity—proving someone or something is who they claim to be. It is distinct from authorization, which determines what an authenticated entity may do.

Factors fall into three categories: something you know (password, PIN), something you have (smart card, hardware token, authenticator app), and something you are (fingerprint, facial recognition). Multifactor authentication (MFA) combines two or more factor types. Two-factor authentication (2FA) is a subset using exactly two factors. Biometrics add convenience but need liveness detection and secure template storage.

Password best practices include length and complexity requirements, banning common passwords, secure hashing with salt, and lockout or throttling after failed attempts. Passwordless methods—FIDO2/WebAuthn, certificate-based login—reduce phishing risk by eliminating reusable secrets.

Federated authentication (SAML, OAuth, OpenID Connect) lets users sign in through a trusted identity provider. Service accounts and machine identities also require strong authentication and credential rotation. Always pair authentication with secure session management and logging.`,
          },
          keyFacts: [
            "Authentication verifies identity; authorization determines permitted actions",
            "MFA uses two or more factor types: know, have, or are",
            "Passwords should be salted, hashed, and protected against brute force",
            "FIDO2/WebAuthn supports phishing-resistant passwordless authentication",
            "Biometrics require secure storage and spoofing protections",
            "Federation uses identity providers like SAML or OpenID Connect",
          ],
          commonMistakes: [
            "Confusing authentication (proving identity) with authorization (granting permissions)",
            "Treating two passwords or two knowledge factors as MFA instead of different factor types",
            "Assuming biometrics alone are sufficient without liveness or template protection",
            "Believing SSO eliminates the need for strong authentication at the identity provider",
            "Ignoring federation standards—mixing up SAML, OAuth, and OpenID Connect roles",
          ],
          examTraps: [
            "MFA scenarios requiring two different factor categories: know, have, or are",
            "FIDO2/WebAuthn questions emphasize phishing-resistant, passwordless authentication",
            "Kerberos vs LDAP vs federation—match protocol to the scenario (ticket-based, directory, cross-org SSO)",
            "Password storage: salted hashing is correct; plain text or encryption-only answers are traps",
            "Something you have distractors: smart card or authenticator app, not a second password",
          ],
          objectives: ["SY0-701-1.4", "SY0-701-1.5"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          assignments: [
            {
              id: "auth-flow-drill",
              title: "Authentication Flow Simulator Drill",
              type: "simulator",
              instructions: "Complete the Authentication Flow drill. Match each scenario to the correct auth mechanism (MFA, SSO, OAuth, Kerberos, federation).",
              estimatedMinutes: 15,
              simulatorId: "auth-flow-drill",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["authentication"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "authentication-q6",
              prompt: "Something you have includes:",
              choices: [
                { id: "a", text: "Hardware token or smart card" },
                { id: "b", text: "Password memorized" },
                { id: "c", text: "Fingerprint" },
                { id: "d", text: "Security policy document" },
              ],
              correctChoiceId: "a",
              explanation: "Possession factor requires a physical or digital token device.",
            },
            {
              id: "authentication-q7",
              prompt: "MFA requires:",
              choices: [
                { id: "a", text: "Two or more different factor types" },
                { id: "b", text: "Two passwords" },
                { id: "c", text: "One biometric only" },
                { id: "d", text: "Username only" },
              ],
              correctChoiceId: "a",
              explanation: "Factors must come from different categories.",
            },
            {
              id: "authentication-q8",
              prompt: "Kerberos primarily uses:",
              choices: [
                { id: "a", text: "Ticket-granting tickets in Windows domains" },
                { id: "b", text: "SMS OTP only" },
                { id: "c", text: "Self-signed certificates only" },
                { id: "d", text: "WEP keys" },
              ],
              correctChoiceId: "a",
              explanation: "Kerberos issues tickets for authenticated service access.",
            },
            {
              id: "authentication-q9",
              prompt: "Brute-force mitigation includes:",
              choices: [
                { id: "a", text: "Account lockout and rate limiting" },
                { id: "b", text: "Shorter passwords only" },
                { id: "c", text: "Disabling logging" },
                { id: "d", text: "Shared admin accounts" },
              ],
              correctChoiceId: "a",
              explanation: "Lockout and throttling slow automated guessing.",
            },
            {
              id: "authentication-q10",
              prompt: "OAuth is primarily used for:",
              choices: [
                { id: "a", text: "Delegated authorization to third-party apps" },
                { id: "b", text: "Disk encryption" },
                { id: "c", text: "Cable testing" },
                { id: "d", text: "VLAN trunking" },
              ],
              correctChoiceId: "a",
              explanation: "OAuth grants limited access without sharing passwords.",
            },
            {
              id: "authentication-q11",
              prompt: "OpenID Connect adds to OAuth:",
              choices: [
                { id: "a", text: "Identity layer with ID tokens" },
                { id: "b", text: "Physical badge readers" },
                { id: "c", text: "Switch STP" },
                { id: "d", text: "DHCP scopes" },
              ],
              correctChoiceId: "a",
              explanation: "OIDC provides standardized authentication on top of OAuth.",
            },
            {
              id: "authentication-q12",
              prompt: "Passwordless FIDO2 resists phishing because:",
              choices: [
                { id: "a", text: "Credentials are bound to the origin domain cryptographically" },
                { id: "b", text: "Passwords are written down" },
                { id: "c", text: "SMS is always used" },
                { id: "d", text: "MFA is disabled" },
              ],
              correctChoiceId: "a",
              explanation: "WebAuthn keys only authenticate to registered sites.",
            },
            {
              id: "authentication-q13",
              prompt: "Service accounts should use:",
              choices: [
                { id: "a", text: "Strong unique credentials with rotation and monitoring" },
                { id: "b", text: "Shared passwords for convenience" },
                { id: "c", text: "No authentication" },
                { id: "d", text: "Guest access" },
              ],
              correctChoiceId: "a",
              explanation: "Non-human identities need rigorous credential hygiene.",
            },
          ],
                    quiz: [
            {
              id: "authentication-q1",
              prompt: "A smart card plus PIN represents which authentication approach?",
              choices: [
                { id: "a", text: "Single-factor authentication" },
                { id: "b", text: "Multifactor authentication" },
                { id: "c", text: "Authorization only" },
                { id: "d", text: "Anonymization" },
              ],
              correctChoiceId: "b",
              explanation: "PIN is something you know; the card is something you have—two different factor types.",
            },
            {
              id: "authentication-q2",
              prompt: "Which factor type is a fingerprint scan?",
              choices: [
                { id: "a", text: "Something you know" },
                { id: "b", text: "Something you have" },
                { id: "c", text: "Something you are" },
                { id: "d", text: "Somewhere you are only" },
              ],
              correctChoiceId: "c",
              explanation: "Biometrics are inherence factors—something you are.",
            },
            {
              id: "authentication-q3",
              prompt: "Which method is most phishing-resistant?",
              choices: [
                { id: "a", text: "Reusable password only" },
                { id: "b", text: "FIDO2 security key with WebAuthn" },
                { id: "c", text: "Security questions" },
                { id: "d", text: "Plain HTTP basic auth" },
              ],
              correctChoiceId: "b",
              explanation: "FIDO2 uses cryptographic challenges bound to the site, resisting credential replay from phishing pages.",
            },
            {
              id: "authentication-q4",
              prompt: "Authentication is best defined as:",
              choices: [
                { id: "a", text: "Determining what resources a user can access" },
                { id: "b", text: "Verifying the identity of a user or system" },
                { id: "c", text: "Encrypting data at rest" },
                { id: "d", text: "Scheduling patch windows" },
              ],
              correctChoiceId: "b",
              explanation: "Authentication answers 'who are you?' before authorization decides permissions.",
            },
            {
              id: "authentication-q5",
              prompt: "OpenID Connect is commonly used for:",
              choices: [
                { id: "a", text: "Federated single sign-on built on OAuth 2.0" },
                { id: "b", text: "Layer 2 switching" },
                { id: "c", text: "Disk partitioning" },
                { id: "d", text: "SNMP trap generation" },
              ],
              correctChoiceId: "a",
              explanation: "OIDC provides identity layer on OAuth for SSO and claims about authenticated users.",
            },
          ],
          flashcards: [
            {
              id: "authentication-f1",
              front: "Three authentication factor types?",
              back: "Something you know, have, or are",
            },
            {
              id: "authentication-f2",
              front: "Authentication vs authorization?",
              back: "Authentication verifies identity; authorization grants permissions",
            },
            {
              id: "authentication-f3",
              front: "Why use MFA?",
              back: "Compromise of one factor does not alone grant access",
            },
            {
              id: "authentication-f4",
              front: "FIDO2/WebAuthn benefit?",
              back: "Phishing-resistant passwordless authentication using cryptographic key pairs",
            },
            {
              id: "authentication-f5",
              front: "Why avoid SMS for MFA?",
              back: "SIM swapping and interception can bypass SMS one-time codes",
            },
            {
              id: "authentication-f6",
              front: "What is PAM?",
              back: "Privileged Access Management — vaults and controls admin credential use",
            }
          ],
        },
        {
          id: "authorization",
          name: "Authorization",
          lesson: {
            title: "Authorization Models",
            content: `Authorization defines what authenticated users and systems are permitted to do. Effective authorization enforces least privilege—granting only the minimum access needed to perform a job.

Discretionary Access Control (DAC) lets resource owners set permissions—common in file systems where owners assign read/write rights. Mandatory Access Control (MAC) uses system-enforced labels and classifications; users cannot override policy—typical in military and high-assurance environments. Role-Based Access Control (RBAC) assigns permissions to roles (e.g., "Payroll Clerk") and users inherit role rights. Attribute-Based Access Control (ABAC) evaluates attributes (department, location, device health) in policy rules for fine-grained decisions.

Rule-based access control applies static rules such as "no remote access after 6 PM." Separation of duties splits critical tasks among multiple people to reduce fraud. Privileged Access Management (PAM) governs admin accounts with vaulting, session recording, and just-in-time elevation.

Authorization failures often stem from excessive permissions, stale accounts, or missing reviews. Regular access recertification and logging of privileged actions are essential operational practices.`,
          },
          keyFacts: [
            "Least privilege limits access to the minimum required for a task",
            "RBAC assigns permissions to roles; ABAC uses attributes in policies",
            "MAC enforces system-wide labels; DAC lets owners set permissions",
            "Separation of duties prevents one person from completing sensitive transactions alone",
            "PAM controls, monitors, and vaults privileged administrative access",
            "Periodic access reviews remove stale or excessive permissions",
          ],
          commonMistakes: [
            "Confusing RBAC (role-based) with ABAC (attribute-based) access models",
            "Treating MAC and DAC as networking terms instead of mandatory vs discretionary access control",
            "Granting standing admin rights instead of using PAM with vaulting and session monitoring",
            "Skipping separation of duties, allowing one person to initiate and approve sensitive transactions",
            "Failing to remove permissions during role changes—only adding new access without review",
          ],
          examTraps: [
            "Least privilege scenarios: minimum access required, not no access or full admin",
            "MAC questions involve system-enforced labels; DAC lets resource owners set permissions",
            "PAM answers emphasize vaulting, monitoring, and just-in-time elevation of privileged accounts",
            "Separation of duties: no single person completes an entire sensitive workflow alone",
            "RBAC vs ABAC: roles vs dynamic policies based on user, resource, and environmental attributes",
          ],
          objectives: ["SY0-701-1.6", "SY0-701-1.7"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "authorization-q6",
              prompt: "Least privilege means:",
              choices: [
                { id: "a", text: "Granting minimum access required for the job" },
                { id: "b", text: "Giving all users admin rights" },
                { id: "c", text: "Removing all access controls" },
                { id: "d", text: "Sharing one account" },
              ],
              correctChoiceId: "a",
              explanation: "Users receive only permissions necessary for their role.",
            },
            {
              id: "authorization-q7",
              prompt: "RBAC assigns permissions to:",
              choices: [
                { id: "a", text: "Roles rather than individual users directly" },
                { id: "b", text: "MAC addresses only" },
                { id: "c", text: "Cable pairs" },
                { id: "d", text: "DNS servers" },
              ],
              correctChoiceId: "a",
              explanation: "Users inherit permissions from assigned roles.",
            },
            {
              id: "authorization-q8",
              prompt: "ABAC decisions use:",
              choices: [
                { id: "a", text: "Attributes like department, location, and clearance" },
                { id: "b", text: "Only usernames" },
                { id: "c", text: "Cable length" },
                { id: "d", text: "Switch model" },
              ],
              correctChoiceId: "a",
              explanation: "Policies evaluate multiple attributes dynamically.",
            },
            {
              id: "authorization-q9",
              prompt: "MAC is typical in:",
              choices: [
                { id: "a", text: "Military and high-security labeled environments" },
                { id: "b", text: "Home Wi-Fi only" },
                { id: "c", text: "Unmanaged guest networks" },
                { id: "d", text: "Open hotspots" },
              ],
              correctChoiceId: "a",
              explanation: "Mandatory access uses classification labels enforced by the system.",
            },
            {
              id: "authorization-q10",
              prompt: "Permission creep is mitigated by:",
              choices: [
                { id: "a", text: "Regular access reviews and recertification" },
                { id: "b", text: "Never reviewing access" },
                { id: "c", text: "Granting admin to all" },
                { id: "d", text: "Disabling logs" },
              ],
              correctChoiceId: "a",
              explanation: "Periodic reviews remove unnecessary accumulated access.",
            },
            {
              id: "authorization-q11",
              prompt: "Separation of duties prevents:",
              choices: [
                { id: "a", text: "One person completing an entire sensitive transaction alone" },
                { id: "b", text: "All collaboration" },
                { id: "c", text: "Encryption" },
                { id: "d", text: "Backups" },
              ],
              correctChoiceId: "a",
              explanation: "Splitting tasks reduces fraud and error risk.",
            },
            {
              id: "authorization-q12",
              prompt: "DAC allows:",
              choices: [
                { id: "a", text: "Resource owners to set their own permissions" },
                { id: "b", text: "Only the OS kernel to set all permissions" },
                { id: "c", text: "No user control" },
                { id: "d", text: "Automatic admin for guests" },
              ],
              correctChoiceId: "a",
              explanation: "Discretionary access is owner-controlled.",
            },
            {
              id: "authorization-q13",
              prompt: "Need to know restricts access based on:",
              choices: [
                { id: "a", text: "Job relevance to specific data" },
                { id: "b", text: "Random assignment" },
                { id: "c", text: "Physical height" },
                { id: "d", text: "Cable color" },
              ],
              correctChoiceId: "a",
              explanation: "Even authorized users access only data required for their work.",
            },
          ],
                    quiz: [
            {
              id: "authorization-q1",
              prompt: "Which model assigns permissions based on job roles like 'Database Admin'?",
              choices: [
                { id: "a", text: "RBAC" },
                { id: "b", text: "DAC" },
                { id: "c", text: "MAC only" },
                { id: "d", text: "War chalking" },
              ],
              correctChoiceId: "a",
              explanation: "Role-Based Access Control maps permissions to roles that users are assigned.",
            },
            {
              id: "authorization-q2",
              prompt: "Least privilege means:",
              choices: [
                { id: "a", text: "Everyone gets domain admin rights" },
                { id: "b", text: "Users receive only the access needed for their duties" },
                { id: "c", text: "All files are world-readable" },
                { id: "d", text: "Passwords are never required" },
              ],
              correctChoiceId: "b",
              explanation: "Least privilege minimizes attack surface by restricting unnecessary permissions.",
            },
            {
              id: "authorization-q3",
              prompt: "Separation of duties is designed to:",
              choices: [
                { id: "a", text: "Let one person approve and execute sensitive transactions" },
                { id: "b", text: "Divide critical tasks among multiple people to reduce fraud risk" },
                { id: "c", text: "Eliminate all logging" },
                { id: "d", text: "Disable encryption" },
              ],
              correctChoiceId: "b",
              explanation: "Requiring multiple parties for approval and execution deters insider abuse.",
            },
            {
              id: "authorization-q4",
              prompt: "ABAC decisions are primarily based on:",
              choices: [
                { id: "a", text: "Attributes such as user role, resource type, and environmental context" },
                { id: "b", text: "Cable length only" },
                { id: "c", text: "CPU serial numbers exclusively" },
                { id: "d", text: "Random number generation without policy" },
              ],
              correctChoiceId: "a",
              explanation: "Attribute-Based Access Control evaluates multiple attributes in dynamic policy rules.",
            },
            {
              id: "authorization-q5",
              prompt: "PAM solutions primarily manage:",
              choices: [
                { id: "a", text: "Privileged administrative accounts" },
                { id: "b", text: "Office printer toner" },
                { id: "c", text: "DNS TTL values" },
                { id: "d", text: "Wi-Fi SSID broadcast names" },
              ],
              correctChoiceId: "a",
              explanation: "Privileged Access Management vaults, monitors, and controls high-risk admin credentials.",
            },
          ],
          flashcards: [
            {
              id: "authorization-f1",
              front: "What is least privilege?",
              back: "Granting only the minimum access required to perform a job function",
            },
            {
              id: "authorization-f2",
              front: "RBAC vs ABAC?",
              back: "RBAC uses roles; ABAC evaluates attributes in policy rules",
            },
            {
              id: "authorization-f3",
              front: "Purpose of separation of duties?",
              back: "Prevent one individual from controlling an entire sensitive process",
            },
            {
              id: "authorization-f4",
              front: "RBAC vs ABAC?",
              back: "RBAC uses roles; ABAC uses attributes and policies for fine-grained decisions",
            },
            {
              id: "authorization-f5",
              front: "MAC vs DAC?",
              back: "MAC uses system-enforced labels; DAC lets resource owners set permissions",
            },
            {
              id: "authorization-f6",
              front: "Separation of duties?",
              back: "Splitting critical tasks so no single person can complete fraud alone",
            }
          ],
        },
        {
          id: "identity-access-management",
          name: "Identity and Access Management",
          lesson: {
            title: "Identity and Access Management (IAM)",
            content: `Identity and Access Management (IAM) is the framework of policies and technologies that manage digital identities and control access across an organization. It connects authentication, authorization, provisioning, and lifecycle management.

Core IAM functions include identity provisioning (creating accounts when employees join), deprovisioning (disabling access promptly when they leave), and access requests with approval workflows. Single Sign-On (SSO) lets users authenticate once and access multiple applications. Federation extends SSO across organizational boundaries using standards like SAML and OpenID Connect.

Directory services (Active Directory, LDAP, cloud directories) store identity attributes and group memberships. Identity governance adds periodic access certifications, segregation of duty rules, and audit trails. Just-in-time (JIT) and privilege elevation grant temporary admin rights only when needed.

Cloud IAM integrates with hyperscaler services—AWS IAM, Azure Entra ID, Google Cloud IAM—using roles, policies, and service principals. Poor IAM hygiene—orphaned accounts, excessive standing privileges, shared credentials—is a leading cause of breaches. Automate joiner-mover-leaver processes and enforce MFA on privileged and remote access.`,
          },
          keyFacts: [
            "IAM covers identity lifecycle: provisioning, authentication, authorization, and deprovisioning",
            "SSO reduces password fatigue; federation extends SSO across organizations",
            "Directory services centralize users, groups, and attributes",
            "JIT access grants temporary privileges instead of standing admin rights",
            "Access certifications verify that permissions remain appropriate over time",
            "Prompt deprovisioning prevents former employees from retaining access",
          ],
          guidedExample: {
            title: "Offboard a Terminated Employee Using JML Workflow",
            steps: [
              "HR triggers termination in the HRIS, which sends an automated signal to the IAM system.",
              "Immediately disable the user's primary directory account and revoke SSO sessions across all federated apps.",
              "Remove group memberships, role assignments, and standing privileged access (PAM vault entries).",
              "Disable VPN, remote desktop, and API keys or service accounts tied to the individual.",
              "Conduct a manager access certification to confirm no orphaned entitlements remain.",
              "Log all deprovisioning actions with timestamps for audit and compliance evidence.",
            ],
          },
          commonMistakes: [
            "Disabling only the laptop while leaving VPN and cloud accounts active",
            "Granting standing admin rights instead of just-in-time elevation",
            "Confusing SSO (single org) with federation (cross-organization trust)",
            "Skipping access certifications, allowing permission creep over time",
            "Delaying deprovisioning days or weeks after termination",
          ],
          examTraps: [
            "Deprovisioning must occur immediately on termination—not after a grace period",
            "JIT access: temporary elevation on demand, not permanent admin for all users",
            "Orphan accounts: active accounts with no valid owner, not expired certificates",
            "SAML/OIDC federation: SSO across organizations via trusted identity providers",
            "IGA tools automate access certifications and role mining, not cable or hardware tasks",
          ],
          realWorldScenario: "A sales manager terminates an employee who had domain admin rights from a prior project. HR files termination at 5 PM Friday, but IT only collects the laptop. On Monday, the former employee connects via VPN using credentials that were never revoked. You implement automated joiner-mover-leaver workflows, enforce JIT privileged access, and schedule quarterly access certifications to prevent standing privileges and orphaned accounts.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["authentication", "authorization"],
          objectives: ["SY0-701-1.8", "SY0-701-1.9"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "case-study"],
          questionBank: [
            {
              id: "identity-access-management-q6",
              prompt: "Deprovisioning should occur:",
              choices: [
                { id: "a", text: "Immediately when employment ends" },
                { id: "b", text: "Never" },
                { id: "c", text: "Only after one year" },
                { id: "d", text: "Only on weekends" },
              ],
              correctChoiceId: "a",
              explanation: "Delayed deprovisioning leaves orphaned active accounts.",
            },
            {
              id: "identity-access-management-q7",
              prompt: "Federation allows:",
              choices: [
                { id: "a", text: "SSO across organizations using trusted IdPs" },
                { id: "b", text: "Eliminating all passwords globally" },
                { id: "c", text: "Removing audit trails" },
                { id: "d", text: "Physical key duplication" },
              ],
              correctChoiceId: "a",
              explanation: "Federated identity trusts external providers for authentication.",
            },
            {
              id: "identity-access-management-q8",
              prompt: "LDAP directories store:",
              choices: [
                { id: "a", text: "User accounts, groups, and organizational data" },
                { id: "b", text: "Only firewall rules" },
                { id: "c", text: "Cable pinouts" },
                { id: "d", text: "Power consumption" },
              ],
              correctChoiceId: "a",
              explanation: "LDAP is a standard directory protocol for identity data.",
            },
            {
              id: "identity-access-management-q9",
              prompt: "JIT privileged access means:",
              choices: [
                { id: "a", text: "Temporary elevation granted on demand" },
                { id: "b", text: "Permanent admin for all" },
                { id: "c", text: "No logging of admin actions" },
                { id: "d", text: "Shared root password" },
              ],
              correctChoiceId: "a",
              explanation: "Just-in-time access limits standing privileges.",
            },
            {
              id: "identity-access-management-q10",
              prompt: "IGA tools automate:",
              choices: [
                { id: "a", text: "Access certifications and role mining" },
                { id: "b", text: "Cable crimping" },
                { id: "c", text: "OS installation only" },
                { id: "d", text: "Printer maintenance" },
              ],
              correctChoiceId: "a",
              explanation: "Identity governance manages lifecycle and compliance reviews.",
            },
            {
              id: "identity-access-management-q11",
              prompt: "SAML is commonly used for:",
              choices: [
                { id: "a", text: "Enterprise SSO between SP and IdP" },
                { id: "b", text: "Subnet calculation" },
                { id: "c", text: "DHCP assignment" },
                { id: "d", text: "STP root bridge election" },
              ],
              correctChoiceId: "a",
              explanation: "SAML exchanges assertions for federated web SSO.",
            },
            {
              id: "identity-access-management-q12",
              prompt: "Provisioning creates:",
              choices: [
                { id: "a", text: "Initial accounts and entitlements for new users" },
                { id: "b", text: "Firewall hardware" },
                { id: "c", text: "Backup tapes only" },
                { id: "d", text: "DNS root servers" },
              ],
              correctChoiceId: "a",
              explanation: "Provisioning onboards identities with appropriate access.",
            },
            {
              id: "identity-access-management-q13",
              prompt: "Orphan accounts are:",
              choices: [
                { id: "a", text: "Active accounts with no valid owner" },
                { id: "b", text: "Guest Wi-Fi SSIDs" },
                { id: "c", text: "Expired certificates only" },
                { id: "d", text: "Test cables" },
              ],
              correctChoiceId: "a",
              explanation: "Orphan accounts pose unauthorized access risk.",
            },
          ],
                    quiz: [
            {
              id: "identity-access-management-q1",
              prompt: "What IAM process removes access when an employee terminates?",
              choices: [
                { id: "a", text: "Deprovisioning" },
                { id: "b", text: "Banner grabbing" },
                { id: "c", text: "War dialing" },
                { id: "d", text: "Port mirroring" },
              ],
              correctChoiceId: "a",
              explanation: "Deprovisioning disables accounts and revokes permissions when access is no longer authorized.",
            },
            {
              id: "identity-access-management-q2",
              prompt: "SSO primarily benefits users by:",
              choices: [
                { id: "a", text: "Requiring a separate password for every application" },
                { id: "b", text: "Authenticating once to access multiple applications" },
                { id: "c", text: "Eliminating all authentication" },
                { id: "d", text: "Disabling audit logs" },
              ],
              correctChoiceId: "b",
              explanation: "Single Sign-On streamlines access while centralizing authentication policy enforcement.",
            },
            {
              id: "identity-access-management-q3",
              prompt: "Just-in-time (JIT) privileged access means:",
              choices: [
                { id: "a", text: "Permanent 24/7 admin rights for all users" },
                { id: "b", text: "Temporary elevation of privileges when needed" },
                { id: "c", text: "Sharing one admin password" },
                { id: "d", text: "Disabling MFA for admins" },
              ],
              correctChoiceId: "b",
              explanation: "JIT limits standing privileges by granting elevated access only for approved time windows.",
            },
            {
              id: "identity-access-management-q4",
              prompt: "Periodic access reviews (certifications) verify that:",
              choices: [
                { id: "a", text: "Users still require their assigned permissions" },
                { id: "b", text: "All users should become administrators" },
                { id: "c", text: "Passwords are stored in plain text" },
                { id: "d", text: "Firewalls are unplugged" },
              ],
              correctChoiceId: "a",
              explanation: "Managers or owners attest that access rights remain appropriate, removing excess permissions.",
            },
            {
              id: "identity-access-management-q5",
              prompt: "SAML is commonly used in IAM for:",
              choices: [
                { id: "a", text: "Federated SSO between identity provider and service provider" },
                { id: "b", text: "Disk defragmentation" },
                { id: "c", text: "Cable certification testing" },
                { id: "d", text: "Thermal paste application" },
              ],
              correctChoiceId: "a",
              explanation: "Security Assertion Markup Language exchanges authentication and authorization assertions for federation.",
            },
          ],
          flashcards: [
            {
              id: "identity-access-management-f1",
              front: "What is deprovisioning?",
              back: "Removing or disabling access when it is no longer needed",
            },
            {
              id: "identity-access-management-f2",
              front: "What does SSO provide?",
              back: "One authentication event grants access to multiple applications",
            },
            {
              id: "identity-access-management-f3",
              front: "What is JIT privileged access?",
              back: "Temporary elevation of admin rights only when approved and needed",
            },
            {
              id: "identity-access-management-f4",
              front: "JML process?",
              back: "Joiner-mover-leaver — provision, update, and revoke access through employment lifecycle",
            },
            {
              id: "identity-access-management-f5",
              front: "JIT access?",
              back: "Just-in-time — temporary elevated access granted on demand, then revoked",
            },
            {
              id: "identity-access-management-f6",
              front: "IGA purpose?",
              back: "Identity Governance — access reviews, role mining, and compliance reporting",
            }
          ],
          assignments: [
            {
              id: "iam-offboarding-case-1",
              title: "Case Study: IAM Failure After Employee Termination",
              type: "case-study",
              instructions: `Scenario: A terminated sales employee still accessed the CRM two weeks later using VPN credentials. HR confirmed termination on day 0, but IT tickets show only the laptop was collected — no account review occurred. The employee had standing domain admin rights from a prior project.

1. Identify three IAM failures in this scenario (e.g., deprovisioning, standing privileges, access review).
2. Propose one control for each failure (MFA, JIT access, automated JML workflow, access certification, etc.).
3. Describe the correct joiner-mover-leaver steps that should have occurred on termination day.
4. Explain how federation/SSO would or would not change the offboarding requirements.
5. List two audit artifacts that prove deprovisioning occurred.

Document your answers in notes — no external tools required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Identified three distinct IAM failures",
                "Proposed a specific control for each failure",
                "Described correct JML/offboarding steps",
                "Explained SSO/federation impact on offboarding",
                "Listed two audit artifacts for deprovisioning proof",
              ],
              relatedTopicIds: ["identity-access-management"],
              order: 1,
            },
          ],
        },
      ],
    },
    {
      id: "security-architecture",
      name: "Security Architecture",
      topics: [
        {
          id: "secure-network-design",
          name: "Secure Network Design",
          lesson: {
            title: "Designing Secure Networks",
            content: `Secure network design applies defense in depth—layering controls so a single failure does not expose the entire environment. Segmentation isolates systems by trust level, function, or sensitivity.

A demilitarized zone (DMZ) hosts public-facing services (web, email relays) between external and internal networks. Firewalls enforce rules between zones. VLANs and subnets separate departments, guest Wi-Fi, servers, and management networks. Zero Trust assumes no implicit trust based on location; every access request is verified explicitly.

Network access control (NAC) checks device health and identity before granting connectivity. Jump hosts (bastion servers) provide controlled administrative access to internal systems. Outbound filtering limits command-and-control traffic from compromised hosts.

Design principles include least privilege on network paths, disabling unnecessary services, encrypted management channels, and documented data flows. Cloud networks use security groups, network ACLs, and private subnets with controlled egress. Always align architecture with business requirements and compliance obligations.`,
          },
          keyFacts: [
            "Defense in depth layers multiple controls across the environment",
            "DMZ isolates public-facing services from the internal network",
            "Network segmentation limits lateral movement after a breach",
            "Zero Trust verifies every access request regardless of network location",
            "NAC enforces device compliance before network admission",
            "Jump hosts provide audited, controlled administrative entry points",
          ],
          commonMistakes: [
            "Treating a single firewall as sufficient without defense-in-depth layers",
            "Placing public-facing servers on the internal LAN instead of a DMZ",
            "Assuming perimeter security alone satisfies Zero Trust principles",
            "Skipping network segmentation, allowing unrestricted lateral movement",
            "Confusing NAC (device compliance before admission) with simple MAC filtering",
          ],
          examTraps: [
            "Zero Trust: verify every access request regardless of network location",
            "DMZ purpose: isolate public services from the internal network",
            "Defense in depth: multiple layered controls, not one silver-bullet device",
            "Jump host scenarios: audited, controlled admin entry—not open RDP from the internet",
            "Segmentation limits lateral movement after initial compromise",
          ],
          objectives: ["SY0-701-3.1", "SY0-701-3.2"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "external-lab"],
          externalResources: [
            {
              id: "nmap",
              name: "Nmap",
              url: "https://nmap.org/",
              cost: "free",
              platform: "any",
            installNotes: "Install Nmap or use a Linux VM. Scan only networks you own or have written permission to test.",
            },
            {
              id: "virtualbox",
              name: "VirtualBox",
              url: "https://www.virtualbox.org/",
              cost: "free",
              platform: "any",
            installNotes: "Install VirtualBox and import a security lab VM for hands-on exercises.",
            },
          ],
          assignments: [
            {
              id: "nmap-discovery-lab",
              title: "Lab: Network Discovery with Nmap",
              type: "external-lab",
              instructions: "1. Set up a lab VM or use a device you own.\n2. Run: nmap -sV localhost (or your lab target IP).\n3. Identify open ports and service versions.\n4. Run: nmap -O (OS detection) on the same target.\n5. Document findings and one hardening recommendation per open service.\n6. Mark complete when done.",
              estimatedMinutes: 30,
              externalResourceId: "nmap",
              completionCriteria: ["Completed port scan with service detection", "Identified OS or service versions", "Documented one hardening step per open service"],
              relatedTopicIds: ["secure-network-design"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "secure-network-design-q6",
              prompt: "A bastion host is used for:",
              choices: [
                { id: "a", text: "Controlled administrative access to internal systems" },
                { id: "b", text: "Public web hosting only" },
                { id: "c", text: "DHCP relay" },
                { id: "d", text: "Wireless SSID broadcast" },
              ],
              correctChoiceId: "a",
              explanation: "Jump boxes limit and monitor admin entry points.",
            },
            {
              id: "secure-network-design-q7",
              prompt: "Microsegmentation supports:",
              choices: [
                { id: "a", text: "Zero trust by limiting east-west traffic" },
                { id: "b", text: "Open flat networks" },
                { id: "c", text: "Removing all firewalls" },
                { id: "d", text: "WEP deployment" },
              ],
              correctChoiceId: "a",
              explanation: "Fine-grained segments contain breaches.",
            },
            {
              id: "secure-network-design-q8",
              prompt: "Honeypots detect attackers by:",
              choices: [
                { id: "a", text: "Presenting decoy systems to attract probing" },
                { id: "b", text: "Encrypting all backups" },
                { id: "c", text: "Speeding up DNS" },
                { id: "d", text: "Disabling logs" },
              ],
              correctChoiceId: "a",
              explanation: "Decoys reveal malicious activity without risking production.",
            },
            {
              id: "secure-network-design-q9",
              prompt: "Egress filtering blocks:",
              choices: [
                { id: "a", text: "Unauthorized outbound connections from internal hosts" },
                { id: "b", text: "All inbound email" },
                { id: "c", text: "User training" },
                { id: "d", text: "Certificate renewal" },
              ],
              correctChoiceId: "a",
              explanation: "Outbound controls limit C2 and data exfiltration.",
            },
            {
              id: "secure-network-design-q10",
              prompt: "Air-gapped networks:",
              choices: [
                { id: "a", text: "Have no connection to other networks" },
                { id: "b", text: "Require public internet always" },
                { id: "c", text: "Use only wireless" },
                { id: "d", text: "Disable all encryption" },
              ],
              correctChoiceId: "a",
              explanation: "Physical isolation protects critical systems.",
            },
            {
              id: "secure-network-design-q11",
              prompt: "NAC can quarantine devices that:",
              choices: [
                { id: "a", text: "Fail health or compliance checks" },
                { id: "b", text: "Pass all patches" },
                { id: "c", text: "Use MFA" },
                { id: "d", text: "Have encrypted disks" },
              ],
              correctChoiceId: "a",
              explanation: "Non-compliant endpoints are restricted until remediated.",
            },
            {
              id: "secure-network-design-q12",
              prompt: "DMZ placement puts public servers:",
              choices: [
                { id: "a", text: "Between external firewall and internal network" },
                { id: "b", text: "Inside HR databases" },
                { id: "c", text: "On employee laptops only" },
                { id: "d", text: "In backup vaults" },
              ],
              correctChoiceId: "a",
              explanation: "DMZ segments internet-facing services from the LAN.",
            },
            {
              id: "secure-network-design-q13",
              prompt: "Defense in depth uses:",
              choices: [
                { id: "a", text: "Multiple layered security controls" },
                { id: "b", text: "A single firewall only" },
                { id: "c", text: "No monitoring" },
                { id: "d", text: "Shared passwords" },
              ],
              correctChoiceId: "a",
              explanation: "Layered controls ensure no single failure exposes everything.",
            },
          ],
                    quiz: [
            {
              id: "secure-network-design-q1",
              prompt: "What is the primary purpose of a DMZ?",
              choices: [
                { id: "a", text: "Store offline backups exclusively" },
                { id: "b", text: "Host public services isolated from the internal LAN" },
                { id: "c", text: "Replace all firewalls" },
                { id: "d", text: "Disable encryption" },
              ],
              correctChoiceId: "b",
              explanation: "The DMZ sits between untrusted and trusted networks, exposing only necessary services.",
            },
            {
              id: "secure-network-design-q2",
              prompt: "Zero Trust networking assumes:",
              choices: [
                { id: "a", text: "Internal users are always trusted" },
                { id: "b", text: "No implicit trust; verify every access attempt" },
                { id: "c", text: "Firewalls are unnecessary" },
                { id: "d", text: "All ports should be open" },
              ],
              correctChoiceId: "b",
              explanation: "Zero Trust requires continuous verification of identity, device, and context for each request.",
            },
            {
              id: "secure-network-design-q3",
              prompt: "Network segmentation primarily helps:",
              choices: [
                { id: "a", text: "Contain breaches and limit lateral movement" },
                { id: "b", text: "Eliminate the need for patches" },
                { id: "c", text: "Share one admin password" },
                { id: "d", text: "Remove all logging" },
              ],
              correctChoiceId: "a",
              explanation: "Isolating zones restricts attackers from moving freely after initial compromise.",
            },
            {
              id: "secure-network-design-q4",
              prompt: "A bastion (jump) host is used to:",
              choices: [
                { id: "a", text: "Provide controlled administrative access into protected networks" },
                { id: "b", text: "Mine cryptocurrency" },
                { id: "c", text: "Broadcast SSIDs" },
                { id: "d", text: "Store cleartext passwords" },
              ],
              correctChoiceId: "a",
              explanation: "Jump hosts centralize and audit admin connections instead of exposing servers directly.",
            },
            {
              id: "secure-network-design-q5",
              prompt: "NAC solutions typically check:",
              choices: [
                { id: "a", text: "Device identity and compliance before granting network access" },
                { id: "b", text: "Only cable color" },
                { id: "c", text: "Monitor refresh rate" },
                { id: "d", text: "Keyboard layout exclusively" },
              ],
              correctChoiceId: "a",
              explanation: "Network Access Control validates posture—patch level, AV status, certificates—before admission.",
            },
          ],
          flashcards: [
            {
              id: "secure-network-design-f1",
              front: "What is a DMZ?",
              back: "A perimeter zone hosting public services separated from the internal network",
            },
            {
              id: "secure-network-design-f2",
              front: "Core Zero Trust principle?",
              back: "Never trust, always verify—regardless of network location",
            },
            {
              id: "secure-network-design-f3",
              front: "Why segment networks?",
              back: "To limit lateral movement and contain the impact of compromises",
            },
            {
              id: "secure-network-design-f4",
              front: "Purpose of a DMZ?",
              back: "Hosts public services while limiting direct access to internal network",
            },
            {
              id: "secure-network-design-f5",
              front: "What is NAC?",
              back: "Network Access Control — verifies device compliance before network admission",
            },
            {
              id: "secure-network-design-f6",
              front: "Zero trust principle?",
              back: "Never trust, always verify — authenticate and authorize every connection",
            }
          ],
        },
        {
          id: "firewalls",
          name: "Firewalls",
          lesson: {
            title: "Firewall Types and Rules",
            content: `Firewalls control traffic between networks or hosts based on policy rules. They are a foundational perimeter and segmentation control in secure architectures.

Packet-filtering firewalls examine headers—source/destination IP, ports, protocols—and allow or deny traffic. Stateful firewalls track connection state and permit return traffic for established sessions. Next-generation firewalls (NGFW) add application awareness, intrusion prevention, and URL filtering beyond port/protocol rules. Web application firewalls (WAF) protect HTTP/HTTPS applications from exploits like SQL injection and cross-site scripting.

Rules should follow a deny-by-default posture: implicit deny at the end, explicit allow for required flows only. Place more specific rules before general ones. Document rule purpose and review periodically to remove stale permits.

Host-based firewalls (Windows Firewall, iptables/nftables) protect individual systems—valuable on servers and laptops, especially off the corporate network. Firewall logs support incident investigation and compliance evidence.`,
          },
          keyFacts: [
            "Stateful firewalls track active connections; packet filters inspect headers only",
            "NGFW adds application-layer inspection and integrated security services",
            "WAF protects web applications from common HTTP-based attacks",
            "Default-deny policies block traffic unless explicitly allowed",
            "Rule order matters—specific rules should precede broad rules",
            "Host-based firewalls protect individual endpoints",
          ],
          guidedExample: {
            title: "Evaluate Firewall Rule Order for Web Server Traffic",
            steps: [
              "Start with implicit deny at the bottom—block all traffic not explicitly permitted.",
              "Rule 1: Allow TCP 443 from any source to web server DMZ IP (public HTTPS).",
              "Rule 2: Allow TCP 22 from jump-host subnet only to web server for admin SSH.",
              "Rule 3: Deny all other inbound traffic to the web server DMZ IP.",
              "Test: external user on 443 matches Rule 1 and is allowed; attacker on port 22 from internet hits Rule 3 deny.",
              "Document each rule's business purpose and schedule quarterly review to remove stale permits.",
            ],
          },
          commonMistakes: [
            "Placing broad permit rules before specific deny rules, causing unintended access",
            "Using implicit allow instead of default-deny at the end of the rule base",
            "Confusing stateful inspection (tracks sessions) with stateless packet filtering",
            "Deploying a WAF when the question asks for network perimeter segmentation",
            "Ignoring egress filtering that blocks malware command-and-control outbound traffic",
          ],
          examTraps: [
            "First-match rule processing: order matters—deny at top blocks before later permit applies",
            "Stateful vs packet filter: stateful tracks connection state for return traffic",
            "WAF protects web applications at Layer 7, not physical access or network cables",
            "NGFW adds application awareness and integrated IPS beyond port/protocol filtering",
            "Implicit deny means block traffic not explicitly allowed—not allow all by default",
          ],
          realWorldScenario: "A new web application launches in your DMZ. You build a firewall rule set with default deny, allow HTTPS from the internet, permit SSH only from the jump-host subnet, and add egress rules blocking outbound connections except to approved update servers. During a rule review, you discover a broad permit placed above a deny rule that was allowing unauthorized RDP—reordering fixes the gap before an audit.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["secure-network-design"],
          objectives: ["SY0-701-3.3", "SY0-701-3.4"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          assignments: [
            {
              id: "firewall-rule-drill",
              title: "Firewall Rule Outcome Simulator Drill",
              type: "simulator",
              instructions: "Complete the Firewall Rule Outcome drill. Determine whether each traffic scenario is allowed or denied based on rule order.",
              estimatedMinutes: 15,
              simulatorId: "firewall-rule-drill",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["firewalls"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "firewalls-q6",
              prompt: "WAF protects:",
              choices: [
                { id: "a", text: "Web applications at Layer 7" },
                { id: "b", text: "Only physical doors" },
                { id: "c", text: "Power supplies" },
                { id: "d", text: "Cable testers" },
              ],
              correctChoiceId: "a",
              explanation: "WAFs filter HTTP/HTTPS application traffic.",
            },
            {
              id: "firewalls-q7",
              prompt: "First-match firewall rule processing means:",
              choices: [
                { id: "a", text: "First matching rule wins; order matters" },
                { id: "b", text: "Random rule selected" },
                { id: "c", text: "All rules always apply" },
                { id: "d", text: "Implicit allow first" },
              ],
              correctChoiceId: "a",
              explanation: "Incorrect ordering creates unintended permit/deny gaps.",
            },
            {
              id: "firewalls-q8",
              prompt: "SSL inspection on firewalls allows:",
              choices: [
                { id: "a", text: "Examining encrypted traffic for threats" },
                { id: "b", text: "Disabling all TLS" },
                { id: "c", text: "Removing certificates" },
                { id: "d", text: "Blocking HTTPS entirely" },
              ],
              correctChoiceId: "a",
              explanation: "Decryption enables threat detection in encrypted flows.",
            },
            {
              id: "firewalls-q9",
              prompt: "Implicit deny is:",
              choices: [
                { id: "a", text: "Block traffic not explicitly allowed" },
                { id: "b", text: "Allow all by default" },
                { id: "c", text: "Disable logging" },
                { id: "d", text: "Open all ports" },
              ],
              correctChoiceId: "a",
              explanation: "Default deny is a core firewall best practice.",
            },
            {
              id: "firewalls-q10",
              prompt: "NGFW differs from traditional firewall by adding:",
              choices: [
                { id: "a", text: "Application awareness and integrated IPS" },
                { id: "b", text: "Only MAC filtering" },
                { id: "c", text: "DHCP server only" },
                { id: "d", text: "Cable testing" },
              ],
              correctChoiceId: "a",
              explanation: "NGFWs identify applications beyond port/protocol.",
            },
            {
              id: "firewalls-q11",
              prompt: "Egress rules control:",
              choices: [
                { id: "a", text: "Outbound traffic from internal networks" },
                { id: "b", text: "Only inbound DNS" },
                { id: "c", text: "Physical access" },
                { id: "d", text: "Printer queues" },
              ],
              correctChoiceId: "a",
              explanation: "Outbound filtering limits malware C2 communication.",
            },
            {
              id: "firewalls-q12",
              prompt: "Stateful inspection tracks:",
              choices: [
                { id: "a", text: "Connection state for return traffic" },
                { id: "b", text: "Only cable length" },
                { id: "c", text: "User shoe size" },
                { id: "d", text: "Paper documents" },
              ],
              correctChoiceId: "a",
              explanation: "State tables allow return packets for established sessions.",
            },
            {
              id: "firewalls-q13",
              prompt: "A deny rule at the top of the list may:",
              choices: [
                { id: "a", text: "Block traffic before later permit rules apply" },
                { id: "b", text: "Have no effect" },
                { id: "c", text: "Speed up all traffic" },
                { id: "d", text: "Replace PKI" },
              ],
              correctChoiceId: "a",
              explanation: "Rule order determines which rule matches first.",
            },
          ],
                    quiz: [
            {
              id: "firewalls-q1",
              prompt: "Which firewall type tracks connection state to allow return traffic?",
              choices: [
                { id: "a", text: "Stateful firewall" },
                { id: "b", text: "Hub" },
                { id: "c", text: "Repeater" },
                { id: "d", text: "Unmanaged switch" },
              ],
              correctChoiceId: "a",
              explanation: "Stateful inspection maintains session tables to permit legitimate response packets automatically.",
            },
            {
              id: "firewalls-q2",
              prompt: "A WAF is primarily deployed to protect:",
              choices: [
                { id: "a", text: "Web applications at Layer 7" },
                { id: "b", text: "Physical door locks" },
                { id: "c", text: "Power distribution units" },
                { id: "d", text: "BIOS batteries" },
              ],
              correctChoiceId: "a",
              explanation: "Web Application Firewalls filter malicious HTTP/S requests targeting application vulnerabilities.",
            },
            {
              id: "firewalls-q3",
              prompt: "Best practice for firewall rule bases is:",
              choices: [
                { id: "a", text: "Implicit allow all at the end" },
                { id: "b", text: "Deny by default with explicit allow rules for required traffic" },
                { id: "c", text: "No documentation required" },
                { id: "d", text: "Open all inbound ports" },
              ],
              correctChoiceId: "b",
              explanation: "Default-deny minimizes exposure; only necessary flows should be permitted explicitly.",
            },
            {
              id: "firewalls-q4",
              prompt: "NGFW capabilities beyond traditional firewalls include:",
              choices: [
                { id: "a", text: "Application identification and integrated IPS" },
                { id: "b", text: "Only hub regeneration" },
                { id: "c", text: "Paper shredding" },
                { id: "d", text: "Cable crimping" },
              ],
              correctChoiceId: "a",
              explanation: "Next-generation firewalls inspect applications and often include threat prevention features.",
            },
            {
              id: "firewalls-q5",
              prompt: "Host-based firewalls run on:",
              choices: [
                { id: "a", text: "Individual servers or endpoints" },
                { id: "b", text: "Only cloud DNS servers exclusively" },
                { id: "c", text: "Fiber patch panels" },
                { id: "d", text: "UPS battery modules" },
              ],
              correctChoiceId: "a",
              explanation: "Endpoint firewalls add a local policy layer independent of network perimeter devices.",
            },
          ],
          flashcards: [
            {
              id: "firewalls-f1",
              front: "Stateful vs packet-filtering firewall?",
              back: "Stateful tracks connections; packet filters inspect individual packet headers",
            },
            {
              id: "firewalls-f2",
              front: "What does a WAF protect?",
              back: "Web applications from HTTP/S attacks like SQLi and XSS",
            },
            {
              id: "firewalls-f3",
              front: "Recommended default firewall policy?",
              back: "Deny all unless explicitly allowed",
            },
            {
              id: "firewalls-f4",
              front: "Stateful vs stateless firewall?",
              back: "Stateful tracks connections; stateless filters packets independently",
            },
            {
              id: "firewalls-f5",
              front: "NGFW adds what?",
              back: "Application awareness, IPS, and deep packet inspection beyond port/protocol",
            },
            {
              id: "firewalls-f6",
              front: "Implicit deny?",
              back: "Default block-all unless explicitly allowed by a rule",
            }
          ],
        },
        {
          id: "vpns",
          name: "VPNs",
          lesson: {
            title: "Virtual Private Networks",
            content: `A Virtual Private Network (VPN) creates an encrypted tunnel over untrusted networks, providing confidentiality and often authentication for remote access or site-to-site connectivity.

Remote access VPNs let users connect from home or travel to corporate resources—commonly IPsec or SSL/TLS VPNs. Site-to-site VPNs link office networks over the Internet as if connected privately. Split tunneling sends only corporate traffic through the VPN while other browsing uses the local ISP path; full tunneling routes all traffic through the corporate gateway.

IPsec operates at Layer 3 with AH and ESP for integrity and encryption; IKE negotiates keys. SSL/TLS VPNs (often browser-based) are easier to deploy for remote users and traverse NAT well. Always combine VPNs with MFA and endpoint compliance checks.

Misconfigurations—weak cipher suites, pre-shared keys in plaintext, overly broad split tunnel routes—create risk. Monitor VPN logs for anomalous connections and disable access promptly for terminated users.`,
          },
          keyFacts: [
            "VPNs encrypt traffic across untrusted networks like the public Internet",
            "Remote access VPNs connect individual users; site-to-site VPNs link networks",
            "Split tunnel sends only corporate traffic via VPN; full tunnel sends everything",
            "IPsec provides Layer 3 encryption; SSL/TLS VPNs are common for remote users",
            "Pair VPN access with MFA and device posture validation",
            "Review VPN permissions and disable accounts when no longer needed",
          ],
          commonMistakes: [
            "Confusing remote access VPN (user to network) with site-to-site VPN (network to network)",
            "Assuming split tunnel is always more secure than full tunnel—it exposes local network risks",
            "Deploying VPN without MFA and device posture validation",
            "Using weak pre-shared keys stored in plaintext configuration files",
            "Failing to revoke VPN access promptly when employees terminate",
          ],
          examTraps: [
            "Full tunnel sends all traffic through VPN gateway; split tunnel sends only corporate traffic",
            "IPsec operates at Layer 3; SSL/TLS VPNs are common for remote browser-based access",
            "IKE negotiates IPsec keys—do not confuse with IKEv1/v2 port and phase details unless asked",
            "VPN plus MFA is the expected control pairing on Security+ scenario questions",
            "Site-to-site connects office networks; remote access connects individual users",
          ],
          objectives: ["SY0-701-3.5", "SY0-701-3.6"],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "vpns-q6",
              prompt: "Full tunnel VPN sends:",
              choices: [
                { id: "a", text: "All traffic through the VPN gateway" },
                { id: "b", text: "Only DNS queries" },
                { id: "c", text: "Only print jobs" },
                { id: "d", text: "No encrypted traffic" },
              ],
              correctChoiceId: "a",
              explanation: "Full tunnel routes all traffic for inspection.",
            },
            {
              id: "vpns-q7",
              prompt: "IPsec AH provides:",
              choices: [
                { id: "a", text: "Authentication and integrity without encryption" },
                { id: "b", text: "Wireless SSID names" },
                { id: "c", text: "DHCP leases" },
                { id: "d", text: "MAC tables" },
              ],
              correctChoiceId: "a",
              explanation: "Authentication Header verifies integrity; ESP adds encryption.",
            },
            {
              id: "vpns-q8",
              prompt: "Always-on VPN ensures:",
              choices: [
                { id: "a", text: "VPN connects before other network access" },
                { id: "b", text: "VPN never connects" },
                { id: "c", text: "Users disable security" },
                { id: "d", text: "Split tunnel is mandatory" },
              ],
              correctChoiceId: "a",
              explanation: "Always-on enforces corporate policy before internet use.",
            },
            {
              id: "vpns-q9",
              prompt: "Remote-access VPN serves:",
              choices: [
                { id: "a", text: "Individual users connecting from outside" },
                { id: "b", text: "Only data center power" },
                { id: "c", text: "Cable testers" },
                { id: "d", text: "Printer firmware" },
              ],
              correctChoiceId: "a",
              explanation: "Remote access connects teleworkers to corporate resources.",
            },
            {
              id: "vpns-q10",
              prompt: "SSL VPN advantage for remote workers:",
              choices: [
                { id: "a", text: "Browser-based access without full IPsec client" },
                { id: "b", text: "Requires WEP" },
                { id: "c", text: "Disables encryption" },
                { id: "d", text: "Removes authentication" },
              ],
              correctChoiceId: "a",
              explanation: "SSL VPNs simplify client deployment via HTTPS.",
            },
            {
              id: "vpns-q11",
              prompt: "Split tunneling allows:",
              choices: [
                { id: "a", text: "Some traffic direct to internet while corporate traffic uses VPN" },
                { id: "b", text: "No encryption ever" },
                { id: "c", text: "Only physical access" },
                { id: "d", text: "Disabling DNS" },
              ],
              correctChoiceId: "a",
              explanation: "Split tunnel reduces load but may bypass corporate inspection.",
            },
            {
              id: "vpns-q12",
              prompt: "VPN concentrator function:",
              choices: [
                { id: "a", text: "Terminates many simultaneous VPN tunnels" },
                { id: "b", text: "Crimp Ethernet cables" },
                { id: "c", text: "Assigns office desks" },
                { id: "d", text: "Prints badges only" },
              ],
              correctChoiceId: "a",
              explanation: "Concentrators scale remote access termination.",
            },
            {
              id: "vpns-q13",
              prompt: "Transport mode IPsec encrypts:",
              choices: [
                { id: "a", text: "Payload while leaving original IP header" },
                { id: "b", text: "Entire packet always" },
                { id: "c", text: "Only cable pairs" },
                { id: "d", text: "Only BIOS" },
              ],
              correctChoiceId: "a",
              explanation: "Transport mode protects data portion of the packet.",
            },
          ],
                    quiz: [
            {
              id: "vpns-q1",
              prompt: "What is the primary security benefit of a VPN?",
              choices: [
                { id: "a", text: "Encrypted communication over untrusted networks" },
                { id: "b", text: "Faster CPU clock speeds" },
                { id: "c", text: "Elimination of all malware" },
                { id: "d", text: "Automatic software licensing" },
              ],
              correctChoiceId: "a",
              explanation: "VPN tunnels protect confidentiality and integrity of data crossing public networks.",
            },
            {
              id: "vpns-q2",
              prompt: "Split tunneling means:",
              choices: [
                { id: "a", text: "Only selected traffic uses the VPN tunnel" },
                { id: "b", text: "All traffic must use the VPN" },
                { id: "c", text: "VPN encryption is disabled" },
                { id: "d", text: "Two VPNs run without keys" },
              ],
              correctChoiceId: "a",
              explanation: "Split tunnel routes corporate subnets through VPN while other traffic exits locally.",
            },
            {
              id: "vpns-q3",
              prompt: "Site-to-site VPNs are typically used to:",
              choices: [
                { id: "a", text: "Connect two office networks over the Internet" },
                { id: "b", text: "Replace all endpoint antivirus" },
                { id: "c", text: "Format hard drives" },
                { id: "d", text: "Assign DHCP leases only" },
              ],
              correctChoiceId: "a",
              explanation: "Site-to-site VPNs create persistent encrypted links between network gateways.",
            },
            {
              id: "vpns-q4",
              prompt: "IPsec commonly operates at which layer?",
              choices: [
                { id: "a", text: "Layer 3 (Network)" },
                { id: "b", text: "Layer 1 only" },
                { id: "c", text: "Application layer exclusively for email" },
                { id: "d", text: "Physical cable certification" },
              ],
              correctChoiceId: "a",
              explanation: "IPsec encrypts and authenticates IP packets at the network layer.",
            },
            {
              id: "vpns-q5",
              prompt: "Which addition most strengthens remote VPN security?",
              choices: [
                { id: "a", text: "Multifactor authentication" },
                { id: "b", text: "Shared global password" },
                { id: "c", text: "Disabling encryption" },
                { id: "d", text: "Publishing VPN config publicly" },
              ],
              correctChoiceId: "a",
              explanation: "MFA reduces risk of account compromise leading to unauthorized VPN access.",
            },
          ],
          flashcards: [
            {
              id: "vpns-f1",
              front: "Remote access vs site-to-site VPN?",
              back: "Remote access connects users; site-to-site connects entire networks",
            },
            {
              id: "vpns-f2",
              front: "What is split tunneling?",
              back: "Only corporate traffic uses the VPN; other traffic uses the local connection",
            },
            {
              id: "vpns-f3",
              front: "Why add MFA to VPN?",
              back: "Stolen credentials alone cannot establish unauthorized VPN sessions",
            },
            {
              id: "vpns-f4",
              front: "Site-to-site vs remote-access VPN?",
              back: "Site-to-site connects networks; remote-access connects individual users",
            },
            {
              id: "vpns-f5",
              front: "IPsec tunnel vs transport?",
              back: "Tunnel encrypts entire packet; transport encrypts payload only",
            },
            {
              id: "vpns-f6",
              front: "Split tunneling risk?",
              back: "Local internet traffic bypasses corporate inspection and DLP controls",
            }
          ],
        },
        {
          id: "wireless-security",
          name: "Wireless Security",
          lesson: {
            title: "Securing Wireless Networks",
            content: `Wireless networks broadcast signals that extend beyond physical walls, requiring strong authentication and encryption. Security+ emphasizes WPA2/WPA3, enterprise authentication, and common attacks.

WEP is obsolete and easily cracked—never use it. WPA2-Personal (PSK) uses a pre-shared key suitable for homes and small offices; WPA2-Enterprise uses 802.1X with a RADIUS server for per-user credentials. WPA3 improves key exchange and protects against offline dictionary attacks with SAE (Simultaneous Authentication of Equals).

Evil twin attacks set up rogue access points mimicking legitimate SSIDs to capture traffic or credentials. War driving scans for wireless networks from a vehicle. Deauthentication attacks flood clients with disconnect frames. Mitigations include WPA3 or WPA2-Enterprise, hidden SSIDs are weak obscurity, MAC filtering is easily spoofed, and wireless intrusion detection monitors for rogues.

Place APs to minimize signal leakage outside facilities. Segment guest Wi-Fi from internal VLANs. Disable legacy protocols and enforce management interface security on controllers.`,
          },
          keyFacts: [
            "WEP is deprecated; use WPA2 or preferably WPA3",
            "WPA2-Enterprise uses 802.1X and RADIUS for individual authentication",
            "WPA3 SAE strengthens protection against offline password guessing",
            "Evil twin APs impersonate legitimate networks to intercept traffic",
            "Guest wireless should be isolated from internal resources",
            "MAC filtering and hidden SSIDs provide weak security alone",
          ],
          commonMistakes: [
            "Selecting WEP or WPA-Personal when WPA2-Enterprise or WPA3 is required",
            "Relying on hidden SSIDs or MAC filtering as primary wireless security controls",
            "Placing guest wireless on the same VLAN as internal servers without isolation",
            "Ignoring evil twin attacks that impersonate legitimate access point names",
            "Confusing WPA3 SAE improvements with elimination of the need for strong passwords",
          ],
          examTraps: [
            "WPA2-Enterprise uses 802.1X and RADIUS for per-user authentication, not a shared PSK",
            "WPA3 SAE protects against offline dictionary attacks better than WPA2-Personal",
            "Evil twin AP impersonates a legitimate SSID to intercept or capture credentials",
            "WEP is deprecated—any question asking for current best practice excludes WEP",
            "Guest network isolation from internal resources is the expected architecture answer",
          ],
          objectives: ["SY0-701-3.7", "SY0-701-3.8"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          assignments: [
            {
              id: "wireless-standard-drill",
              title: "Wireless Standard Matcher Drill",
              type: "simulator",
              instructions: "Complete the Wireless Standard Matcher drill. Match 802.11 standards to frequency bands and characteristics.",
              estimatedMinutes: 10,
              simulatorId: "wireless-standard-drill",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["wireless-security"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "wireless-security-q6",
              prompt: "WEP should not be used because:",
              choices: [
                { id: "a", text: "It is cryptographically broken and easily cracked" },
                { id: "b", text: "It is too new" },
                { id: "c", text: "It requires WPA3" },
                { id: "d", text: "It uses AES-256 only" },
              ],
              correctChoiceId: "a",
              explanation: "WEP vulnerabilities are well known and exploited.",
            },
            {
              id: "wireless-security-q7",
              prompt: "WPA2-Enterprise requires:",
              choices: [
                { id: "a", text: "802.1X authentication with RADIUS" },
                { id: "b", text: "Shared PSK only" },
                { id: "c", text: "No encryption" },
                { id: "d", text: "WEP keys" },
              ],
              correctChoiceId: "a",
              explanation: "Enterprise mode uses per-user authentication via RADIUS.",
            },
            {
              id: "wireless-security-q8",
              prompt: "Evil twin attacks use:",
              choices: [
                { id: "a", text: "Rogue APs mimicking legitimate SSIDs" },
                { id: "b", text: "Encrypted backups" },
                { id: "c", text: "Patch management" },
                { id: "d", text: "Cable shielding" },
              ],
              correctChoiceId: "a",
              explanation: "Attackers lure clients to fake access points.",
            },
            {
              id: "wireless-security-q9",
              prompt: "WIDS monitors for:",
              choices: [
                { id: "a", text: "Unauthorized wireless devices and attacks" },
                { id: "b", text: "Printer toner levels" },
                { id: "c", text: "Power consumption only" },
                { id: "d", text: "Desk assignments" },
              ],
              correctChoiceId: "a",
              explanation: "Wireless IDS detects rogue APs and suspicious activity.",
            },
            {
              id: "wireless-security-q10",
              prompt: "Disabling SSID broadcast:",
              choices: [
                { id: "a", text: "Does not provide meaningful security" },
                { id: "b", text: "Encrypts all traffic" },
                { id: "c", text: "Replaces WPA3" },
                { id: "d", text: "Blocks all attackers" },
              ],
              correctChoiceId: "a",
              explanation: "SSIDs are easily discovered; encryption provides real protection.",
            },
            {
              id: "wireless-security-q11",
              prompt: "WPA3 SAE improves:",
              choices: [
                { id: "a", text: "Resistance to offline dictionary attacks" },
                { id: "b", text: "Cable length" },
                { id: "c", text: "Switch STP" },
                { id: "d", text: "DNS TTL" },
              ],
              correctChoiceId: "a",
              explanation: "SAE strengthens the wireless handshake.",
            },
            {
              id: "wireless-security-q12",
              prompt: "802.1X on wireless uses:",
              choices: [
                { id: "a", text: "EAP for port-based network access control" },
                { id: "b", text: "WEP keys only" },
                { id: "c", text: "Telnet" },
                { id: "d", text: "FTP" },
              ],
              correctChoiceId: "a",
              explanation: "EAP methods authenticate users before granting WLAN access.",
            },
            {
              id: "wireless-security-q13",
              prompt: "Open wireless networks risk:",
              choices: [
                { id: "a", text: "Unencrypted traffic interception" },
                { id: "b", text: "Improved MFA" },
                { id: "c", text: "Automatic patching" },
                { id: "d", text: "Stronger hashes" },
              ],
              correctChoiceId: "a",
              explanation: "Open networks lack encryption; traffic can be captured.",
            },
          ],
                    quiz: [
            {
              id: "wireless-security-q1",
              prompt: "Which wireless security protocol should never be used today?",
              choices: [
                { id: "a", text: "WEP" },
                { id: "b", text: "WPA3" },
                { id: "c", text: "WPA2-Enterprise" },
                { id: "d", text: "802.1X" },
              ],
              correctChoiceId: "a",
              explanation: "Wired Equivalent Privacy has known critical flaws and is trivial to break.",
            },
            {
              id: "wireless-security-q2",
              prompt: "WPA2-Enterprise typically relies on:",
              choices: [
                { id: "a", text: "802.1X authentication with a RADIUS server" },
                { id: "b", text: "Open networks without encryption" },
                { id: "c", text: "WEP keys rotated hourly" },
                { id: "d", text: "FTP credentials" },
              ],
              correctChoiceId: "a",
              explanation: "Enterprise mode authenticates each user/device individually via EAP and RADIUS.",
            },
            {
              id: "wireless-security-q3",
              prompt: "An evil twin attack involves:",
              choices: [
                { id: "a", text: "A rogue AP mimicking a legitimate SSID" },
                { id: "b", text: "Patching firmware automatically" },
                { id: "c", text: "Encrypting all backups" },
                { id: "d", text: "Using two firewalls in series" },
              ],
              correctChoiceId: "a",
              explanation: "Attackers lure clients to a fake AP to capture credentials or manipulate traffic.",
            },
            {
              id: "wireless-security-q4",
              prompt: "WPA3 improves over WPA2 primarily by:",
              choices: [
                { id: "a", text: "Stronger key exchange with SAE" },
                { id: "b", text: "Removing encryption" },
                { id: "c", text: "Mandating WEP fallback" },
                { id: "d", text: "Disabling authentication" },
              ],
              correctChoiceId: "a",
              explanation: "SAE (Dragonfly) resists offline dictionary attacks better than WPA2-PSK handshake.",
            },
            {
              id: "wireless-security-q5",
              prompt: "Guest Wi-Fi should be:",
              choices: [
                { id: "a", text: "Segmented from internal corporate networks" },
                { id: "b", text: "Merged with domain admin VLANs" },
                { id: "c", text: "Unencrypted by policy" },
                { id: "d", text: "Used for server management" },
              ],
              correctChoiceId: "a",
              explanation: "Isolating guest traffic prevents visitors from reaching sensitive internal resources.",
            },
          ],
          flashcards: [
            {
              id: "wireless-security-f1",
              front: "Why is WEP insecure?",
              back: "Weak encryption that is easily cracked with modern tools",
            },
            {
              id: "wireless-security-f2",
              front: "What is an evil twin attack?",
              back: "A rogue access point impersonating a legitimate wireless network",
            },
            {
              id: "wireless-security-f3",
              front: "WPA2-Enterprise authentication?",
              back: "802.1X with per-user credentials validated by RADIUS",
            },
            {
              id: "wireless-security-f4",
              front: "WPA3 improvement over WPA2?",
              back: "SAE handshake resists offline password guessing attacks",
            },
            {
              id: "wireless-security-f5",
              front: "Evil twin attack?",
              back: "Rogue AP mimicking a legitimate SSID to intercept credentials",
            },
            {
              id: "wireless-security-f6",
              front: "802.1X role in wireless?",
              back: "Port-based network access control authenticating users via RADIUS",
            }
          ],
        },
      ],
    },
    {
      id: "security-operations-and-governance",
      name: "Security Operations and Governance",
      topics: [
        {
          id: "risk-management",
          name: "Risk Management",
          lesson: {
            title: "Risk Management Fundamentals",
            content: `Risk management identifies, assesses, and treats risks to organizational assets. Security decisions should align with business objectives and acceptable risk tolerance.

Risk is commonly expressed as a function of threats exploiting vulnerabilities, leading to impact on confidentiality, integrity, or availability. Qualitative analysis uses scales (low/medium/high); quantitative analysis assigns monetary values to losses and controls. Asset value, likelihood, and impact drive prioritization.

Risk treatment options: mitigate (implement controls), transfer (insurance, contracts), accept (acknowledge residual risk), or avoid (discontinue the activity). Controls are administrative (policies, training), technical (firewalls, encryption), or physical (locks, guards).

Frameworks like NIST RMF and ISO 27005 provide structured processes. Risk registers document identified risks, owners, and status. Third-party risk management evaluates vendors who handle sensitive data. Reassess risks when systems, threats, or regulations change.`,
          },
          keyFacts: [
            "Risk combines threats, vulnerabilities, likelihood, and impact on CIA",
            "Treat risks by mitigating, transferring, accepting, or avoiding",
            "Qualitative analysis uses descriptive scales; quantitative uses numbers/costs",
            "Administrative, technical, and physical controls work together",
            "Risk registers track identified risks, owners, and remediation status",
            "Vendor risk management extends assessments to third parties",
          ],
          commonMistakes: [
            "Confusing risk mitigation with risk transfer (insurance) or risk acceptance",
            "Using only qualitative or only quantitative analysis when the scenario needs the other",
            "Treating CVSS score alone as sufficient without asset criticality and exposure context",
            "Accepting risk without documentation, owner assignment, or review date",
            "Ignoring third-party/vendor risk in enterprise risk assessments",
          ],
          examTraps: [
            "Risk treatment options: mitigate, transfer, accept, or avoid—not ignore or delete",
            "Quantitative risk uses numbers and costs; qualitative uses descriptive scales",
            "Administrative, technical, and physical controls work together—not one category alone",
            "Risk register tracks identified risks, owners, and remediation—not just vulnerability scans",
            "Business alignment: security decisions should match organizational risk tolerance and objectives",
          ],
          objectives: ["SY0-701-5.1", "SY0-701-5.2"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "case-study"],
          assignments: [
            {
              id: "risk-prioritization-drill",
              title: "Risk Prioritization Simulator Drill",
              type: "simulator",
              instructions: "Complete the Risk Prioritization drill. Rank vulnerabilities and findings by severity and remediation priority.",
              estimatedMinutes: 15,
              simulatorId: "risk-prioritization-drill",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["risk-management"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "risk-management-q6",
              prompt: "Qualitative risk assessment uses:",
              choices: [
                { id: "a", text: "Descriptive scales like low/medium/high" },
                { id: "b", text: "Only exact dollar amounts" },
                { id: "c", text: "Cable colors" },
                { id: "d", text: "Switch ports" },
              ],
              correctChoiceId: "a",
              explanation: "Qualitative methods rank risk without precise numbers.",
            },
            {
              id: "risk-management-q7",
              prompt: "Risk transfer example:",
              choices: [
                { id: "a", text: "Purchasing cyber insurance" },
                { id: "b", text: "Implementing MFA" },
                { id: "c", text: "Patching servers" },
                { id: "d", text: "Removing a service entirely" },
              ],
              correctChoiceId: "a",
              explanation: "Insurance shifts financial impact to a third party.",
            },
            {
              id: "risk-management-q8",
              prompt: "Risk acceptance requires:",
              choices: [
                { id: "a", text: "Documented management approval of residual risk" },
                { id: "b", text: "Ignoring all risks silently" },
                { id: "c", text: "Disabling controls" },
                { id: "d", text: "Removing audits" },
              ],
              correctChoiceId: "a",
              explanation: "Accepted risk must be conscious and documented.",
            },
            {
              id: "risk-management-q9",
              prompt: "SLE is:",
              choices: [
                { id: "a", text: "Single Loss Expectancy — cost of one incident" },
                { id: "b", text: "Total annual budget" },
                { id: "c", text: "Switch latency" },
                { id: "d", text: "DNS TTL" },
              ],
              correctChoiceId: "a",
              explanation: "SLE estimates loss from a single occurrence.",
            },
            {
              id: "risk-management-q10",
              prompt: "ARO is:",
              choices: [
                { id: "a", text: "Annualized Rate of Occurrence" },
                { id: "b", text: "Automatic root optimization" },
                { id: "c", text: "Address resolution only" },
                { id: "d", text: "Antivirus response option" },
              ],
              correctChoiceId: "a",
              explanation: "ARO estimates how often an incident occurs per year.",
            },
            {
              id: "risk-management-q11",
              prompt: "Risk register tracks:",
              choices: [
                { id: "a", text: "Identified risks, owners, and treatment status" },
                { id: "b", text: "Only employee birthdays" },
                { id: "c", text: "Cable inventory" },
                { id: "d", text: "Printer models" },
              ],
              correctChoiceId: "a",
              explanation: "Registers document and monitor risk over time.",
            },
            {
              id: "risk-management-q12",
              prompt: "Mitigation reduces risk by:",
              choices: [
                { id: "a", text: "Implementing controls to lower likelihood or impact" },
                { id: "b", text: "Ignoring threats" },
                { id: "c", text: "Deleting all data" },
                { id: "d", text: "Disabling monitoring" },
              ],
              correctChoiceId: "a",
              explanation: "Controls mitigate identified vulnerabilities and threats.",
            },
            {
              id: "risk-management-q13",
              prompt: "Avoidance treats risk by:",
              choices: [
                { id: "a", text: "Discontinuing the risky activity" },
                { id: "b", text: "Buying insurance only" },
                { id: "c", text: "Accepting all risk" },
                { id: "d", text: "Adding no controls" },
              ],
              correctChoiceId: "a",
              explanation: "Avoidance eliminates risk by not performing the activity.",
            },
          ],
                    quiz: [
            {
              id: "risk-management-q1",
              prompt: "Purchasing cyber insurance is an example of:",
              choices: [
                { id: "a", text: "Risk transfer" },
                { id: "b", text: "Risk avoidance" },
                { id: "c", text: "Risk ignorance" },
                { id: "d", text: "Physical penetration only" },
              ],
              correctChoiceId: "a",
              explanation: "Transfer shifts financial impact of some losses to an insurer per policy terms.",
            },
            {
              id: "risk-management-q2",
              prompt: "Implementing a firewall to reduce exposure is:",
              choices: [
                { id: "a", text: "Risk mitigation" },
                { id: "b", text: "Risk acceptance" },
                { id: "c", text: "Risk avoidance" },
                { id: "d", text: "Decommissioning the business" },
              ],
              correctChoiceId: "a",
              explanation: "Mitigation applies controls to lower likelihood or impact of identified risks.",
            },
            {
              id: "risk-management-q3",
              prompt: "CIA in risk context stands for:",
              choices: [
                { id: "a", text: "Confidentiality, Integrity, Availability" },
                { id: "b", text: "Cable, Internet, Access" },
                { id: "c", text: "Central Intelligence Agency only" },
                { id: "d", text: "Certificate, Index, Archive" },
              ],
              correctChoiceId: "a",
              explanation: "Security risks are assessed against impact to confidentiality, integrity, and availability.",
            },
            {
              id: "risk-management-q4",
              prompt: "Choosing not to deploy a service because risk exceeds appetite is:",
              choices: [
                { id: "a", text: "Risk avoidance" },
                { id: "b", text: "Risk transfer" },
                { id: "c", text: "Quantitative hashing" },
                { id: "d", text: "Tokenization" },
              ],
              correctChoiceId: "a",
              explanation: "Avoidance eliminates risk by not engaging in the activity that introduces it.",
            },
            {
              id: "risk-management-q5",
              prompt: "A risk register typically documents:",
              choices: [
                { id: "a", text: "Identified risks, owners, and treatment plans" },
                { id: "b", text: "Employee lunch preferences" },
                { id: "c", text: "Printer toner levels only" },
                { id: "d", text: "DNS TTL defaults" },
              ],
              correctChoiceId: "a",
              explanation: "Registers provide centralized tracking for governance and audit purposes.",
            },
          ],
          flashcards: [
            {
              id: "risk-management-f1",
              front: "Four risk treatment options?",
              back: "Mitigate, transfer, accept, avoid",
            },
            {
              id: "risk-management-f2",
              front: "What is CIA?",
              back: "Confidentiality, Integrity, Availability",
            },
            {
              id: "risk-management-f3",
              front: "What is risk transfer?",
              back: "Shifting financial impact to another party, e.g., insurance",
            },
            {
              id: "risk-management-f4",
              front: "Four risk treatment options?",
              back: "Mitigate, transfer, accept, avoid",
            },
            {
              id: "risk-management-f5",
              front: "Residual risk?",
              back: "Risk remaining after controls are applied",
            },
            {
              id: "risk-management-f6",
              front: "ALE formula?",
              back: "Annual Loss Expectancy = SLE × ARO (single loss × annual rate)",
            }
          ],
        },
        {
          id: "incident-response",
          name: "Incident Response",
          lesson: {
            title: "Incident Response Lifecycle",
            content: `Incident response is the organized approach to detecting, containing, eradicating, and recovering from security events. Preparation before an incident determines success during one.

The NIST incident response phases: Preparation (plans, tools, training), Detection and Analysis (identify and scope), Containment (short-term isolation and long-term fixes), Eradication (remove malware and close vectors), Recovery (restore services safely), and Post-Incident Activity (lessons learned, report).

The CSIRT or SOC coordinates response, evidence handling, and communication. Chain of custody preserves forensic integrity for potential legal action. Containment strategies balance business continuity against spread—disconnect hosts, block IOCs at the firewall, disable compromised accounts.

Document timelines, actions, and data accessed for regulatory notification requirements. Tabletop exercises test playbooks. After recovery, verify eradication with scans and monitoring before returning systems to production.`,
          },
          keyFacts: [
            "NIST IR phases: Preparation, Detection/Analysis, Containment, Eradication, Recovery, Lessons Learned",
            "Containment limits damage while preserving evidence when possible",
            "Chain of custody documents forensic evidence handling",
            "CSIRT/SOC teams coordinate technical and communication response",
            "Post-incident reviews improve playbooks and controls",
            "Regulatory breach notification may require documented impact assessment",
          ],
          guidedExample: {
            title: "Respond to a Ransomware Alert on a Finance Workstation",
            steps: [
              "Detection: SIEM correlates EDR alert with suspicious file encryption on FIN-WS-042.",
              "Analysis: Confirm ransomware IOCs, identify affected host, and determine scope (single host vs lateral spread).",
              "Short-term containment: Isolate the workstation from the network and disable the user's account.",
              "Preserve evidence: Capture volatile data, image the disk, and maintain chain of custody documentation.",
              "Eradication and recovery: Remove malware, patch exploited vector, and restore from clean offline backups.",
              "Post-incident: Conduct lessons learned, update playbooks, and report per regulatory notification requirements.",
            ],
          },
          commonMistakes: [
            "Rebooting or wiping systems before preserving volatile forensic evidence",
            "Skipping containment and jumping straight to eradication or public disclosure",
            "Deleting logs to save space during an active investigation",
            "Confusing eradication (remove threat) with recovery (restore services)",
            "Paying ransom immediately without consulting legal, leadership, and backup options",
          ],
          examTraps: [
            "NIST IR phase order: Preparation first, Lessons Learned last—not recovery before containment",
            "Most volatile evidence (RAM, CPU registers) collected before disk imaging",
            "Chain of custody: who handled evidence and when—not network diagrams or schedules",
            "Short-term containment: isolate VLAN or disable account—not rebuild entire data center",
            "Lessons learned occurs in post-incident phase after recovery, not during preparation",
          ],
          realWorldScenario: "Your SOC receives an EDR alert showing file encryption on a finance department laptop. The analyst confirms ransomware, isolates the host from the network, disables the user's credentials, preserves disk images with documented chain of custody, and escalates to the CSIRT. While eradication removes the malware, the team restores files from offline backups and holds a lessons-learned review to tighten email filtering and endpoint detection rules.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["risk-management"],
          objectives: ["SY0-701-4.1", "SY0-701-4.2", "SY0-701-4.3"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "case-study"],
          assignments: [
            {
              id: "mitre-tactic-drill",
              title: "MITRE ATT&CK Tactic Ordering Drill",
              type: "simulator",
              instructions: "Complete the MITRE ATT&CK / Incident Response ordering drill. Arrange tactics and response steps in the correct sequence.",
              estimatedMinutes: 15,
              simulatorId: "mitre-tactic-drill",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["incident-response"],
              order: 1,
            },
            {
              id: "log-triage-drill",
              title: "Log Line Triage Simulator Drill",
              type: "simulator",
              instructions: "Complete the Log Line Triage drill. Classify log entries by severity and recommended action.",
              estimatedMinutes: 15,
              simulatorId: "log-line-triage",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["incident-response"],
              order: 2,
            },
            {
              id: "siem-alert-drill",
              title: "SIEM Alert Priority Drill",
              type: "simulator",
              instructions: "Complete the SIEM Alert Priority drill. Rank alerts for triage order based on severity and context.",
              estimatedMinutes: 15,
              simulatorId: "siem-alert-priority",
              completionCriteria: ["Complete all drill items", "Score at least 80%"],
              relatedTopicIds: ["incident-response"],
              order: 3,
            },
          ],
          questionBank: [
            {
              id: "incident-response-q6",
              prompt: "First IR priority after detection is often:",
              choices: [
                { id: "a", text: "Containment to limit damage spread" },
                { id: "b", text: "Public press release" },
                { id: "c", text: "Deleting all logs" },
                { id: "d", text: "Paying ransom first" },
              ],
              correctChoiceId: "a",
              explanation: "Containment stops active harm while investigation continues.",
            },
            {
              id: "incident-response-q7",
              prompt: "Chain of custody documents:",
              choices: [
                { id: "a", text: "Who handled evidence and when" },
                { id: "b", text: "Only network diagrams" },
                { id: "c", text: "Employee vacation schedules" },
                { id: "d", text: "Cable lengths" },
              ],
              correctChoiceId: "a",
              explanation: "Legal admissibility requires documented evidence handling.",
            },
            {
              id: "incident-response-q8",
              prompt: "Most volatile evidence includes:",
              choices: [
                { id: "a", text: "CPU registers and RAM contents" },
                { id: "b", text: "Backup tapes in vault" },
                { id: "c", text: "Printed policies" },
                { id: "d", text: "Desk furniture" },
              ],
              correctChoiceId: "a",
              explanation: "Volatile data is lost quickly—collect it first.",
            },
            {
              id: "incident-response-q9",
              prompt: "Lessons learned occurs:",
              choices: [
                { id: "a", text: "After recovery in post-incident phase" },
                { id: "b", text: "Before preparation" },
                { id: "c", text: "Never" },
                { id: "d", text: "Only during marketing" },
              ],
              correctChoiceId: "a",
              explanation: "Post-incident reviews improve future response.",
            },
            {
              id: "incident-response-q10",
              prompt: "CSIRT coordinates:",
              choices: [
                { id: "a", text: "Cross-functional incident response activities" },
                { id: "b", text: "Only cable installation" },
                { id: "c", text: "Office seating" },
                { id: "d", text: "Printer supplies" },
              ],
              correctChoiceId: "a",
              explanation: "CSIRTs bridge technical, legal, and communications teams.",
            },
            {
              id: "incident-response-q11",
              prompt: "Short-term containment may:",
              choices: [
                { id: "a", text: "Isolate affected VLAN or disable compromised account" },
                { id: "b", text: "Rebuild entire data center immediately" },
                { id: "c", text: "Delete all user accounts" },
                { id: "d", text: "Disable all encryption" },
              ],
              correctChoiceId: "a",
              explanation: "Quick containment limits spread with minimal disruption.",
            },
            {
              id: "incident-response-q12",
              prompt: "Forensic imaging creates:",
              choices: [
                { id: "a", text: "Bit-for-bit copy of storage for analysis" },
                { id: "b", text: "Random sample of files only" },
                { id: "c", text: "Printed screenshots only" },
                { id: "d", text: "Deleted evidence" },
              ],
              correctChoiceId: "a",
              explanation: "Images preserve evidence integrity for investigation.",
            },
            {
              id: "incident-response-q13",
              prompt: "Eradication phase removes:",
              choices: [
                { id: "a", text: "Malware and attacker persistence mechanisms" },
                { id: "b", text: "All employees" },
                { id: "c", text: "Network cables" },
                { id: "d", text: "Backup policies" },
              ],
              correctChoiceId: "a",
              explanation: "Eradication eliminates root cause and footholds.",
            },
          ],
                    quiz: [
            {
              id: "incident-response-q1",
              prompt: "Which phase includes creating IR plans and conducting training?",
              choices: [
                { id: "a", text: "Preparation" },
                { id: "b", text: "Eradication" },
                { id: "c", text: "Recovery only" },
                { id: "d", text: "Post-mortem licensing" },
              ],
              correctChoiceId: "a",
              explanation: "Preparation establishes policies, tools, roles, and exercises before incidents occur.",
            },
            {
              id: "incident-response-q2",
              prompt: "Isolating an infected host from the network is an example of:",
              choices: [
                { id: "a", text: "Containment" },
                { id: "b", text: "Risk transfer" },
                { id: "c", text: "Capacity planning" },
                { id: "d", text: "Software development" },
              ],
              correctChoiceId: "a",
              explanation: "Containment stops spread while investigators analyze and plan eradication.",
            },
            {
              id: "incident-response-q3",
              prompt: "Chain of custody is important for:",
              choices: [
                { id: "a", text: "Maintaining forensic evidence integrity" },
                { id: "b", text: "Increasing cable length" },
                { id: "c", text: "DHCP lease renewal" },
                { id: "d", text: "SSID broadcasting" },
              ],
              correctChoiceId: "a",
              explanation: "Documented handling proves evidence was not altered, supporting legal proceedings.",
            },
            {
              id: "incident-response-q4",
              prompt: "Removing malware and closing attack vectors occurs during:",
              choices: [
                { id: "a", text: "Eradication" },
                { id: "b", text: "Detection only" },
                { id: "c", text: "Procurement" },
                { id: "d", text: "Marketing" },
              ],
              correctChoiceId: "a",
              explanation: "Eradication eliminates threat actor presence and fixes vulnerabilities exploited.",
            },
            {
              id: "incident-response-q5",
              prompt: "Lessons learned meetings happen in which phase?",
              choices: [
                { id: "a", text: "Post-incident activity" },
                { id: "b", text: "Preparation only" },
                { id: "c", text: "Before detection" },
                { id: "d", text: "Never" },
              ],
              correctChoiceId: "a",
              explanation: "Post-incident reviews capture improvements to processes, tools, and training.",
            },
          ],
          flashcards: [
            {
              id: "incident-response-f1",
              front: "NIST IR phases (in order)?",
              back: "Preparation, Detection/Analysis, Containment, Eradication, Recovery, Post-Incident",
            },
            {
              id: "incident-response-f2",
              front: "What is containment?",
              back: "Limiting incident scope to prevent further damage or spread",
            },
            {
              id: "incident-response-f3",
              front: "Why maintain chain of custody?",
              back: "Prove forensic evidence integrity for investigations and legal use",
            },
            {
              id: "incident-response-f4",
              front: "NIST IR phases?",
              back: "Prepare, Detect/Analyze, Contain, Eradicate, Recover, Lessons Learned",
            },
            {
              id: "incident-response-f5",
              front: "Chain of custody?",
              back: "Documented record of who handled evidence and when",
            },
            {
              id: "incident-response-f6",
              front: "Order of volatility?",
              back: "Collect most volatile evidence first (CPU cache, RAM, then disk)",
            }
          ],
        },
        {
          id: "vulnerability-management",
          name: "Vulnerability Management",
          lesson: {
            title: "Vulnerability Management Process",
            content: `Vulnerability management is a continuous cycle of discovering, prioritizing, remediating, and verifying weaknesses before attackers exploit them. It differs from a one-time scan.

Discovery uses authenticated vulnerability scanners, configuration assessments, and penetration tests. Prioritization considers CVSS scores, exploit availability, asset criticality, and exposure—internet-facing systems rank higher. Patch management deploys vendor fixes; compensating controls (segmentation, WAF rules) apply when patching is delayed.

False positives require validation; false negatives demand broad coverage and credentialed scans. Change windows and rollback plans reduce patch risk. Track mean time to remediate (MTTR) for SLA reporting.

Threat intelligence feeds highlight actively exploited CVEs for emergency patching. Container and cloud workloads need image scanning and infrastructure-as-code checks. Document exceptions with risk acceptance and expiry dates.`,
          },
          keyFacts: [
            "Vulnerability management is continuous: identify, prioritize, remediate, verify",
            "CVSS scores guide severity; context and exploitability refine priority",
            "Authenticated scans provide deeper visibility than unauthenticated scans",
            "Patch management is primary remediation; compensating controls are temporary",
            "Track MTTR and validate fixes with rescans",
            "Risk acceptance documents exceptions with review dates",
          ],
          commonMistakes: [
            "Prioritizing vulnerabilities by CVSS score alone without asset criticality context",
            "Relying on unauthenticated scans when credentialed scans are available",
            "Treating compensating controls as permanent instead of temporary until patching",
            "Ignoring false positives without validation, wasting remediation effort",
            "Skipping rescans to verify that patches actually fixed the vulnerability",
          ],
          examTraps: [
            "CVSS near 10 indicates critical severity—but context may change priority",
            "Compensating controls (WAF, segmentation) are temporary when patching is delayed",
            "Pen testing simulates exploitation paths; scanning identifies potential weaknesses",
            "Authenticated scans provide deeper visibility than unauthenticated scans",
            "Risk acceptance requires documentation with review dates—not ignoring the vulnerability",
          ],
          objectives: ["SY0-701-4.4", "SY0-701-4.5"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "vulnerability-management-q6",
              prompt: "CVSS score 9.0 indicates:",
              choices: [
                { id: "a", text: "Critical severity vulnerability" },
                { id: "b", text: "Informational only" },
                { id: "c", text: "No impact" },
                { id: "d", text: "Physical issue" },
              ],
              correctChoiceId: "a",
              explanation: "Scores near 10 represent critical severity.",
            },
            {
              id: "vulnerability-management-q7",
              prompt: "Pen testing differs from scanning by:",
              choices: [
                { id: "a", text: "Simulating attacker exploitation paths" },
                { id: "b", text: "Only reading patch notes" },
                { id: "c", text: "Disabling firewalls" },
                { id: "d", text: "Removing logs" },
              ],
              correctChoiceId: "a",
              explanation: "Pen tests validate real-world exploitability.",
            },
            {
              id: "vulnerability-management-q8",
              prompt: "Compensating control example:",
              choices: [
                { id: "a", text: "WAF in front of unpatched legacy app" },
                { id: "b", text: "Deleting the application data" },
                { id: "c", text: "Ignoring the vulnerability" },
                { id: "d", text: "Disabling authentication" },
              ],
              correctChoiceId: "a",
              explanation: "Compensating controls reduce risk when patching is delayed.",
            },
            {
              id: "vulnerability-management-q9",
              prompt: "Bug bounty programs:",
              choices: [
                { id: "a", text: "Engage researchers for responsible disclosure" },
                { id: "b", text: "Encourage illegal hacking" },
                { id: "c", text: "Replace all patching" },
                { id: "d", text: "Disable scanning" },
              ],
              correctChoiceId: "a",
              explanation: "Bounties reward valid vulnerability reports.",
            },
            {
              id: "vulnerability-management-q10",
              prompt: "Patch testing should occur:",
              choices: [
                { id: "a", text: "In non-production before wide deployment" },
                { id: "b", text: "Never" },
                { id: "c", text: "Only on production first" },
                { id: "d", text: "Without backups" },
              ],
              correctChoiceId: "a",
              explanation: "Testing prevents patches from breaking critical systems.",
            },
            {
              id: "vulnerability-management-q11",
              prompt: "Vulnerability scan frequency depends on:",
              choices: [
                { id: "a", text: "Risk tolerance and regulatory requirements" },
                { id: "b", text: "Moon phase only" },
                { id: "c", text: "Cable color" },
                { id: "d", text: "Desk location" },
              ],
              correctChoiceId: "a",
              explanation: "Higher-risk environments require more frequent scanning.",
            },
            {
              id: "vulnerability-management-q12",
              prompt: "False positive in scanning means:",
              choices: [
                { id: "a", text: "Reported vulnerability is not actually present" },
                { id: "b", text: "Critical breach confirmed" },
                { id: "c", text: "Scan tool deleted" },
                { id: "d", text: "Network offline" },
              ],
              correctChoiceId: "a",
              explanation: "Analysts must validate findings before remediation.",
            },
            {
              id: "vulnerability-management-q13",
              prompt: "Zero-day vulnerability is:",
              choices: [
                { id: "a", text: "Unknown to vendor with no patch available" },
                { id: "b", text: "Always low severity" },
                { id: "c", text: "Already patched everywhere" },
                { id: "d", text: "A physical lock type" },
              ],
              correctChoiceId: "a",
              explanation: "Zero-days lack vendor fixes at time of discovery.",
            },
          ],
                    quiz: [
            {
              id: "vulnerability-management-q1",
              prompt: "CVSS scores primarily indicate:",
              choices: [
                { id: "a", text: "Vulnerability severity characteristics" },
                { id: "b", text: "Employee satisfaction" },
                { id: "c", text: "Cable category rating" },
                { id: "d", text: "Office square footage" },
              ],
              correctChoiceId: "a",
              explanation: "Common Vulnerability Scoring System standardizes severity metrics for CVEs.",
            },
            {
              id: "vulnerability-management-q2",
              prompt: "Authenticated vulnerability scans are preferred because they:",
              choices: [
                { id: "a", text: "See patch levels and configurations from inside the host" },
                { id: "b", text: "Require no credentials" },
                { id: "c", text: "Disable all logging" },
                { id: "d", text: "Only test physical locks" },
              ],
              correctChoiceId: "a",
              explanation: "Credentials allow scanners to assess installed software and missing patches accurately.",
            },
            {
              id: "vulnerability-management-q3",
              prompt: "When patching cannot occur immediately, organizations should:",
              choices: [
                { id: "a", text: "Apply compensating controls and document risk acceptance" },
                { id: "b", text: "Ignore the vulnerability forever" },
                { id: "c", text: "Disable all monitoring" },
                { id: "d", text: "Publish admin passwords" },
              ],
              correctChoiceId: "a",
              explanation: "Temporary mitigations reduce exposure until permanent remediation is possible.",
            },
            {
              id: "vulnerability-management-q4",
              prompt: "Penetration testing differs from vulnerability scanning because it:",
              choices: [
                { id: "a", text: "Simulates real attacks to validate exploitability" },
                { id: "b", text: "Only inventories hardware serial numbers" },
                { id: "c", text: "Replaces all policies" },
                { id: "d", text: "Eliminates need for patches" },
              ],
              correctChoiceId: "a",
              explanation: "Pen tests demonstrate impact chains; scans broadly identify potential weaknesses.",
            },
            {
              id: "vulnerability-management-q5",
              prompt: "Rescanning after remediation verifies:",
              choices: [
                { id: "a", text: "That the vulnerability is no longer present" },
                { id: "b", text: "Printer toner levels" },
                { id: "c", text: "DNS SOA records only" },
                { id: "d", text: "Cable color standards" },
              ],
              correctChoiceId: "a",
              explanation: "Verification closes the loop and confirms fixes were applied successfully.",
            },
          ],
          flashcards: [
            {
              id: "vulnerability-management-f1",
              front: "Vulnerability management cycle?",
              back: "Discover, prioritize, remediate, verify (continuously)",
            },
            {
              id: "vulnerability-management-f2",
              front: "Why prioritize by asset criticality?",
              back: "High-value or exposed systems pose greater business risk if exploited",
            },
            {
              id: "vulnerability-management-f3",
              front: "What is a compensating control?",
              back: "Alternative mitigation used when primary fix (like patching) is delayed",
            },
            {
              id: "vulnerability-management-f4",
              front: "CVSS purpose?",
              back: "Standardized severity score (0–10) for vulnerability prioritization",
            },
            {
              id: "vulnerability-management-f5",
              front: "Scan vs pen test?",
              back: "Scanning finds known issues; pen testing exploits paths like an attacker",
            },
            {
              id: "vulnerability-management-f6",
              front: "Compensating control?",
              back: "Alternative control when primary fix (patch) cannot be applied immediately",
            }
          ],
        },
        {
          id: "security-policies",
          name: "Security Policies",
          lesson: {
            title: "Security Policies and Governance",
            content: `Security policies are formal statements of management intent that guide behavior and control selection. They form the top of the policy hierarchy and must be supported by standards, procedures, and guidelines.

A security policy defines scope, roles, and high-level requirements—acceptable use, password policy, data classification. Standards specify mandatory technologies or configurations (minimum TLS version, encryption algorithms). Procedures are step-by-step instructions (how to onboard a user). Guidelines are recommendations, not mandatory.

Governance ensures policies align with regulations (GDPR, HIPAA, PCI DSS) and business goals. Data classification labels (public, internal, confidential, restricted) drive handling rules. Change management controls modifications to production systems. Awareness programs translate policy into employee behavior.

Policies require executive approval, periodic review, and consequences for violations. Exceptions should be documented, time-bound, and risk-assessed. Without enforcement and training, policies are ineffective paper exercises.`,
          },
          keyFacts: [
            "Policies state management intent; standards, procedures, and guidelines support them",
            "Acceptable use policies define proper resource utilization",
            "Data classification drives storage, transmission, and disposal requirements",
            "Change management reduces unauthorized or risky production changes",
            "Policies need executive sponsorship, review cycles, and enforcement",
            "Documented exceptions include risk acceptance and expiration dates",
          ],
          commonMistakes: [
            "Confusing policies (management intent) with procedures (step-by-step instructions)",
            "Treating guidelines as mandatory when they are recommendations only",
            "Publishing policies without executive sponsorship, training, or enforcement",
            "Skipping change management for production system modifications",
            "Creating policy exceptions without risk assessment or expiration dates",
          ],
          examTraps: [
            "Policy hierarchy: policy → standard → procedure → guideline—match level to question",
            "Standards are mandatory specific requirements; guidelines are optional recommendations",
            "AUP defines acceptable and prohibited use of IT resources",
            "Data classification drives handling, storage, and transmission requirements",
            "Change management: controlled testing and approval before production modifications",
          ],
          objectives: ["SY0-701-5.3", "SY0-701-5.4"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "security-policies-q6",
              prompt: "A standard differs from a policy by being:",
              choices: [
                { id: "a", text: "Mandatory specific requirements supporting policy" },
                { id: "b", text: "Optional suggestion only" },
                { id: "c", text: "Physical device" },
                { id: "d", text: "Network protocol" },
              ],
              correctChoiceId: "a",
              explanation: "Standards define required controls implementing policy.",
            },
            {
              id: "security-policies-q7",
              prompt: "AUP defines:",
              choices: [
                { id: "a", text: "Acceptable and prohibited use of IT resources" },
                { id: "b", text: "Firewall rule order" },
                { id: "c", text: "Subnet masks" },
                { id: "d", text: "Cable categories" },
              ],
              correctChoiceId: "a",
              explanation: "AUP sets user behavior expectations for systems.",
            },
            {
              id: "security-policies-q8",
              prompt: "Data classification drives:",
              choices: [
                { id: "a", text: "Handling, storage, and transmission requirements" },
                { id: "b", text: "Cable length only" },
                { id: "c", text: "Desk assignments" },
                { id: "d", text: "Printer speed" },
              ],
              correctChoiceId: "a",
              explanation: "Classification labels determine protection levels.",
            },
            {
              id: "security-policies-q9",
              prompt: "Change management ensures:",
              choices: [
                { id: "a", text: "Controlled testing and approval before modifications" },
                { id: "b", text: "Random production changes" },
                { id: "c", text: "No documentation" },
                { id: "d", text: "Removing rollback plans" },
              ],
              correctChoiceId: "a",
              explanation: "Managed changes reduce outage and security risk.",
            },
            {
              id: "security-policies-q10",
              prompt: "Security awareness training converts:",
              choices: [
                { id: "a", text: "Policy requirements into user behavior" },
                { id: "b", text: "Cables into fiber" },
                { id: "c", text: "Firewalls into switches" },
                { id: "d", text: "DNS into DHCP" },
              ],
              correctChoiceId: "a",
              explanation: "Training reduces human-factor incidents.",
            },
            {
              id: "security-policies-q11",
              prompt: "Guidelines differ from standards because guidelines are:",
              choices: [
                { id: "a", text: "Recommended but not mandatory" },
                { id: "b", text: "Legally binding always" },
                { id: "c", text: "Hardware devices" },
                { id: "d", text: "Encryption keys" },
              ],
              correctChoiceId: "a",
              explanation: "Guidelines offer best practices without mandatory compliance.",
            },
            {
              id: "security-policies-q12",
              prompt: "NIST CSF functions include:",
              choices: [
                { id: "a", text: "Identify, Protect, Detect, Respond, Recover" },
                { id: "b", text: "Only purchasing" },
                { id: "c", text: "Cable testing" },
                { id: "d", text: "Desk layout" },
              ],
              correctChoiceId: "a",
              explanation: "CSF core functions organize cybersecurity activities.",
            },
            {
              id: "security-policies-q13",
              prompt: "Audit findings typically require:",
              choices: [
                { id: "a", text: "Documented remediation plans with deadlines" },
                { id: "b", text: "Ignoring all results" },
                { id: "c", text: "Deleting evidence" },
                { id: "d", text: "Removing MFA" },
              ],
              correctChoiceId: "a",
              explanation: "Audits drive tracked corrective actions.",
            },
          ],
                    quiz: [
            {
              id: "security-policies-q1",
              prompt: "Which document provides step-by-step operational instructions?",
              choices: [
                { id: "a", text: "Procedure" },
                { id: "b", text: "High-level policy only" },
                { id: "c", text: "Marketing brochure" },
                { id: "d", text: "SSID name" },
              ],
              correctChoiceId: "a",
              explanation: "Procedures detail how to perform tasks consistently to meet policy and standards.",
            },
            {
              id: "security-policies-q2",
              prompt: "An acceptable use policy (AUP) defines:",
              choices: [
                { id: "a", text: "Proper and prohibited use of organizational IT resources" },
                { id: "b", text: "Fiber optic bend radius only" },
                { id: "c", text: "CPU overclocking steps" },
                { id: "d", text: "Cafeteria menus" },
              ],
              correctChoiceId: "a",
              explanation: "AUPs set user expectations for email, internet, devices, and data handling.",
            },
            {
              id: "security-policies-q3",
              prompt: "Data labeled 'confidential' typically requires:",
              choices: [
                { id: "a", text: "Stronger access controls and encryption in transit/at rest" },
                { id: "b", text: "Posting on public websites" },
                { id: "c", text: "No protection" },
                { id: "d", text: "Shared passwords for all staff" },
              ],
              correctChoiceId: "a",
              explanation: "Classification schemes map sensitivity to required safeguards and sharing rules.",
            },
            {
              id: "security-policies-q4",
              prompt: "Guidelines differ from standards because guidelines are:",
              choices: [
                { id: "a", text: "Recommendations rather than mandatory requirements" },
                { id: "b", text: "Legally binding contracts only" },
                { id: "c", text: "Always secret" },
                { id: "d", text: "Replacement for firewalls" },
              ],
              correctChoiceId: "a",
              explanation: "Standards are mandatory; guidelines advise best practices without strict enforcement.",
            },
            {
              id: "security-policies-q5",
              prompt: "Change management primarily ensures:",
              choices: [
                { id: "a", text: "Controlled, reviewed modifications to production environments" },
                { id: "b", text: "Unlimited admin access" },
                { id: "c", text: "Disabling all backups" },
                { id: "d", text: "Eliminating audit trails" },
              ],
              correctChoiceId: "a",
              explanation: "Formal change control reduces outages and unauthorized alterations.",
            },
          ],
          flashcards: [
            {
              id: "security-policies-f1",
              front: "Policy hierarchy top to bottom?",
              back: "Policy → standards → procedures → guidelines",
            },
            {
              id: "security-policies-f2",
              front: "What is an AUP?",
              back: "Acceptable Use Policy defining proper IT resource usage",
            },
            {
              id: "security-policies-f3",
              front: "Why classify data?",
              back: "To apply appropriate protection based on sensitivity and impact",
            },
            {
              id: "security-policies-f4",
              front: "Policy vs procedure?",
              back: "Policy states what/why; procedure describes how step-by-step",
            },
            {
              id: "security-policies-f5",
              front: "AUP?",
              back: "Acceptable Use Policy — rules for appropriate use of organizational systems",
            },
            {
              id: "security-policies-f6",
              front: "Data classification levels?",
              back: "Typically public, internal, confidential, and restricted with handling rules each",
            }
          ],
        },
        {
          id: "cloud-security-basics",
          name: "Cloud Security Basics",
          lesson: {
            title: "Cloud Security Fundamentals",
            content: `Cloud computing delivers on-demand resources over the network. Security+ emphasizes shared responsibility, deployment models, and common cloud controls.

Deployment models: public cloud (provider-owned, multi-tenant), private cloud (dedicated to one org), hybrid (mix of on-prem and cloud), and community cloud (shared by organizations with common concerns). Service models: IaaS (you manage OS and apps), PaaS (you manage apps), SaaS (provider manages stack—you manage data and access).

The shared responsibility model splits duties: the provider secures the cloud (physical, hypervisor, core services); the customer secures in the cloud (data, IAM, OS configuration, network rules). Misconfigurations—public S3 buckets, open security groups, excessive IAM permissions—are leading breach causes.

Cloud security tools include CASB, CSPM, encryption at rest and in transit, key management services, and logging to SIEM. Understand data residency, backup ownership, and exit strategies. Enable MFA on cloud admin accounts and use infrastructure-as-code scanning in CI/CD pipelines.`,
          },
          keyFacts: [
            "IaaS, PaaS, and SaaS divide management responsibilities differently",
            "Shared responsibility: provider secures the cloud; customer secures workloads and data",
            "Misconfigured storage and security groups are common cloud vulnerabilities",
            "Public, private, hybrid, and community are cloud deployment models",
            "Encrypt data at rest and in transit; manage keys with cloud KMS",
            "MFA and least-privilege IAM are critical for cloud admin accounts",
          ],
          commonMistakes: [
            "Assuming the cloud provider secures customer data and IAM configurations",
            "Leaving storage buckets or security groups publicly accessible by default",
            "Granting excessive IAM permissions instead of least-privilege roles",
            "Confusing IaaS, PaaS, and SaaS shared responsibility boundaries",
            "Storing encryption keys in the same location as encrypted data without access controls",
          ],
          examTraps: [
            "Shared responsibility: provider secures the cloud; customer secures in the cloud",
            "IaaS customer manages OS, applications, and data; SaaS customer manages access and data",
            "Public S3 bucket misconfiguration causes unintended data exposure",
            "CASB provides visibility and policy for cloud/SaaS usage",
            "CSPM detects misconfigurations like open security groups and excessive IAM permissions",
          ],
          objectives: ["SY0-701-3.9", "SY0-701-5.5"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "cloud-security-basics-q6",
              prompt: "In IaaS, customer manages:",
              choices: [
                { id: "a", text: "Operating system, applications, and data" },
                { id: "b", text: "Physical data center power" },
                { id: "c", text: "Hypervisor hardware only" },
                { id: "d", text: "Nothing" },
              ],
              correctChoiceId: "a",
              explanation: "IaaS customers patch OS and configure apps.",
            },
            {
              id: "cloud-security-basics-q7",
              prompt: "Public S3 bucket misconfiguration causes:",
              choices: [
                { id: "a", text: "Unintended public data exposure" },
                { id: "b", text: "Automatic encryption" },
                { id: "c", text: "Improved MFA" },
                { id: "d", text: "Faster DNS" },
              ],
              correctChoiceId: "a",
              explanation: "Open buckets are a leading cloud breach cause.",
            },
            {
              id: "cloud-security-basics-q8",
              prompt: "SaaS customer typically manages:",
              choices: [
                { id: "a", text: "User access and data classification" },
                { id: "b", text: "Physical servers" },
                { id: "c", text: "Hypervisor patches" },
                { id: "d", text: "Data center cooling" },
              ],
              correctChoiceId: "a",
              explanation: "SaaS providers manage the application stack.",
            },
            {
              id: "cloud-security-basics-q9",
              prompt: "CASB provides:",
              choices: [
                { id: "a", text: "Visibility and policy for cloud/SaaS usage" },
                { id: "b", text: "Cable crimping" },
                { id: "c", text: "OS kernel patches on laptops" },
                { id: "d", text: "STP root election" },
              ],
              correctChoiceId: "a",
              explanation: "CASBs enforce security policy across cloud apps.",
            },
            {
              id: "cloud-security-basics-q10",
              prompt: "Shared responsibility means:",
              choices: [
                { id: "a", text: "Provider and customer each secure their layers" },
                { id: "b", text: "Provider secures everything always" },
                { id: "c", text: "Customer has no duties in SaaS" },
                { id: "d", text: "No one is responsible" },
              ],
              correctChoiceId: "a",
              explanation: "Responsibility splits by service model.",
            },
            {
              id: "cloud-security-basics-q11",
              prompt: "Container image scanning detects:",
              choices: [
                { id: "a", text: "Vulnerabilities in container images before deployment" },
                { id: "b", text: "Office seating" },
                { id: "c", text: "Cable length" },
                { id: "d", text: "Printer toner" },
              ],
              correctChoiceId: "a",
              explanation: "Scanning prevents deploying vulnerable images.",
            },
            {
              id: "cloud-security-basics-q12",
              prompt: "Hybrid cloud combines:",
              choices: [
                { id: "a", text: "On-premises and cloud infrastructure" },
                { id: "b", text: "Two unrelated SaaS email products only" },
                { id: "c", text: "WEP and WPA" },
                { id: "d", text: "FTP and Telnet" },
              ],
              correctChoiceId: "a",
              explanation: "Hybrid integrates existing data centers with cloud.",
            },
            {
              id: "cloud-security-basics-q13",
              prompt: "Encryption at rest in cloud is often:",
              choices: [
                { id: "a", text: "Customer responsibility for sensitive data" },
                { id: "b", text: "Never needed" },
                { id: "c", text: "Provider-only always with no customer role" },
                { id: "d", text: "Replaced by SSID hiding" },
              ],
              correctChoiceId: "a",
              explanation: "Customers must enable and manage encryption for their data.",
            },
          ],
                    quiz: [
            {
              id: "cloud-security-basics-q1",
              prompt: "In the shared responsibility model, the customer is typically responsible for:",
              choices: [
                { id: "a", text: "Data, identity, and application configuration in the cloud" },
                { id: "b", text: "Physical data center power only" },
                { id: "c", text: "Hypervisor firmware at all times in SaaS" },
                { id: "d", text: "Global Internet backbone" },
              ],
              correctChoiceId: "a",
              explanation: "Customers secure what they deploy and configure; providers secure underlying infrastructure per model.",
            },
            {
              id: "cloud-security-basics-q2",
              prompt: "SaaS means the provider manages:",
              choices: [
                { id: "a", text: "Most of the stack including application; customer manages data and access" },
                { id: "b", text: "Only physical cables" },
                { id: "c", text: "Nothing at all" },
                { id: "d", text: "Customer-owned data centers exclusively" },
              ],
              correctChoiceId: "a",
              explanation: "Software as a Service delivers applications; customers configure users and data handling.",
            },
            {
              id: "cloud-security-basics-q3",
              prompt: "A publicly accessible cloud storage bucket is an example of:",
              choices: [
                { id: "a", text: "Misconfiguration leading to data exposure" },
                { id: "b", text: "Perfect least privilege" },
                { id: "c", text: "Mandatory encryption" },
                { id: "d", text: "Air-gapped backup" },
              ],
              correctChoiceId: "a",
              explanation: "Incorrect access policies on object storage frequently cause unintended public data leaks.",
            },
            {
              id: "cloud-security-basics-q4",
              prompt: "Hybrid cloud combines:",
              choices: [
                { id: "a", text: "On-premises infrastructure with public or private cloud" },
                { id: "b", text: "Only two SaaS email products" },
                { id: "c", text: "WEP and WPA" },
                { id: "d", text: "FTP and Telnet" },
              ],
              correctChoiceId: "a",
              explanation: "Hybrid architectures integrate existing data centers with cloud services.",
            },
            {
              id: "cloud-security-basics-q5",
              prompt: "CSPM tools help organizations:",
              choices: [
                { id: "a", text: "Detect and remediate cloud misconfigurations" },
                { id: "b", text: "Crimp copper cables" },
                { id: "c", text: "Replace physical locks" },
                { id: "d", text: "Disable all encryption" },
              ],
              correctChoiceId: "a",
              explanation: "Cloud Security Posture Management continuously assesses configuration against best practices.",
            },
          ],
          flashcards: [
            {
              id: "cloud-security-basics-f1",
              front: "IaaS vs PaaS vs SaaS?",
              back: "IaaS: you manage OS/apps; PaaS: you manage apps; SaaS: provider manages application stack",
            },
            {
              id: "cloud-security-basics-f2",
              front: "Shared responsibility model?",
              back: "Provider secures cloud infrastructure; customer secures data and configurations",
            },
            {
              id: "cloud-security-basics-f3",
              front: "Common cloud misconfiguration risk?",
              back: "Publicly exposed storage or overly permissive security groups/IAM",
            },
            {
              id: "cloud-security-basics-f4",
              front: "CASB purpose?",
              back: "Cloud Access Security Broker — visibility and policy enforcement for SaaS",
            },
            {
              id: "cloud-security-basics-f5",
              front: "CSPM?",
              back: "Cloud Security Posture Management — detects cloud misconfigurations",
            },
            {
              id: "cloud-security-basics-f6",
              front: "Hybrid cloud?",
              back: "Combines on-premises infrastructure with public or private cloud services",
            }
          ],
        },
      ],
    },
  ],
};
