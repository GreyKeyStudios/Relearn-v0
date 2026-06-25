import type { Certification } from "../types";

export const cysaPlus: Certification = {
  id: "cysa-plus",
  name: "CompTIA Cybersecurity Analyst",
  shortName: "CySA+",
  vendor: "CompTIA",
  overview:
    "CySA+ validates intermediate-level security analytics skills for threat detection, vulnerability management, incident response, and security operations. It emphasizes behavioral analytics, SIEM, and data-driven defense across hybrid environments.",
  examSummary: {
    questionCount: 85,
    durationMinutes: 165,
    passingScore: "750/900",
    format: "Multiple choice and performance-based",
  },
  domains: [
    {
      id: "soc-fundamentals",
      name: "Security Operations",
      topics: [
        {
          id: "threat-intelligence",
          name: "Threat Intelligence",
          lesson: {
            title: "Threat Intelligence Fundamentals",
            content: `Threat intelligence is evidence-based knowledge about adversaries, their capabilities, and their intent, used to inform security decisions. It transforms raw data about attacks into actionable context that helps analysts prioritize defenses and detect campaigns early.

Intelligence is categorized by scope. Strategic intelligence informs executives about long-term trends and nation-state activity. Tactical intelligence describes adversary techniques and tools, often mapped to frameworks like MITRE ATT&CK. Operational intelligence covers specific campaigns, such as a phishing wave targeting your industry. Technical intelligence includes indicators like malicious IP addresses, file hashes, and domain names.

Sources include open-source feeds (OSINT), commercial threat intel platforms, industry Information Sharing and Analysis Centers (ISACs), and government advisories. The Cyber Kill Chain and Diamond Model help analysts understand attack progression and relationships between adversary, capability, infrastructure, and victim.

Effective use requires integrating intel into SIEM correlation rules, blocklists, and hunt hypotheses—not hoarding feeds. Intelligence should be timely, relevant, accurate, and actionable. Stale indicators cause false positives; contextless IOCs waste analyst time. Mature programs tune feeds, score confidence, and share findings back to the community.

Analysts consume intelligence through platforms like MISP, STIX/TAXII feeds, and vendor portals. STIX (Structured Threat Information Expression) standardizes how indicators and relationships are shared. TAXII defines transport protocols for exchanging STIX bundles. When importing intel, validate source reputation, check indicator age, and map findings to your environment's crown jewels.

Purple team exercises validate that intelligence-driven detections actually fire when adversaries simulate TTPs. Document which ATT&CK techniques your SOC can detect today versus gaps requiring new data sources or rules. Intelligence without detection coverage is awareness without defense.`,
          },
          keyFacts: [
            "Threat intelligence converts adversary data into actionable security context",
            "Tactical intel maps to techniques like MITRE ATT&CK; technical intel includes IOCs",
            "OSINT, ISACs, commercial feeds, and government advisories are common sources",
            "The Cyber Kill Chain describes stages from reconnaissance through actions on objectives",
            "Intel must be timely, relevant, accurate, and actionable to be useful",
            "IOCs include IPs, domains, file hashes, and URLs tied to known threats",
          ],
          commonMistakes: [
            "Confusing tactical intelligence (TTPs) with strategic intelligence (long-term trends)",
            "Treating stale IOCs as high-confidence blocklist entries without validating age and context",
            "Hoarding threat feeds without integrating indicators into SIEM rules or hunt hypotheses",
            "Assuming technical IOCs alone explain adversary intent without operational or strategic context",
            "Failing to map imported intel to MITRE ATT&CK to identify detection coverage gaps",
          ],
          examTraps: [
            "Questions mixing intelligence types—board briefings are strategic, not tactical or technical",
            "Trick answers listing STIX/TAXII as intelligence types rather than sharing formats and transport",
            "Scenarios where stale IOCs cause false positives—correct answer emphasizes alert fatigue, not blocking",
            "Diamond Model vs Cyber Kill Chain confusion—Diamond maps adversary relationships, Kill Chain maps stages",
            "ISAC vs OSINT distractors—ISACs are industry-specific sharing organizations, not open public feeds",
          ],
          quiz: [
            {
              id: "threat-intelligence-q1",
              prompt: "Which type of threat intelligence primarily describes adversary TTPs mapped to frameworks like MITRE ATT&CK?",
              choices: [
                { id: "a", text: "Strategic intelligence" },
                { id: "b", text: "Tactical intelligence" },
                { id: "c", text: "Operational intelligence" },
                { id: "d", text: "Compliance intelligence" },
              ],
              correctChoiceId: "b",
              explanation:
                "Tactical intelligence focuses on adversary techniques, tactics, and procedures (TTPs), often aligned with ATT&CK.",
            },
            {
              id: "threat-intelligence-q2",
              prompt: "Which item is an example of technical threat intelligence?",
              choices: [
                { id: "a", text: "A quarterly board briefing on ransomware trends" },
                { id: "b", text: "A malicious file hash from a known malware sample" },
                { id: "c", text: "A nation-state strategic assessment" },
                { id: "d", text: "An annual industry risk report" },
              ],
              correctChoiceId: "b",
              explanation:
                "Technical intelligence includes concrete indicators such as file hashes, IPs, and domains.",
            },
            {
              id: "threat-intelligence-q3",
              prompt: "What does the Cyber Kill Chain describe?",
              choices: [
                { id: "a", text: "Patch prioritization order for critical systems" },
                { id: "b", text: "Stages of an attack from reconnaissance to objective completion" },
                { id: "c", text: "SIEM log retention requirements" },
                { id: "d", text: "Employee onboarding for security teams" },
              ],
              correctChoiceId: "b",
              explanation:
                "The Cyber Kill Chain models attack progression through stages like delivery, exploitation, and exfiltration.",
            },
            {
              id: "threat-intelligence-q4",
              prompt: "Which source provides industry-specific threat sharing among member organizations?",
              choices: [
                { id: "a", text: "ISAC" },
                { id: "b", text: "DHCP" },
                { id: "c", text: "SNMP" },
                { id: "d", text: "NTP" },
              ],
              correctChoiceId: "a",
              explanation:
                "Information Sharing and Analysis Centers (ISACs) facilitate sector-specific threat intelligence exchange.",
            },
            {
              id: "threat-intelligence-q5",
              prompt: "Why can stale threat intelligence indicators cause problems in a SOC?",
              choices: [
                { id: "a", text: "They always block legitimate traffic with no exceptions" },
                { id: "b", text: "They increase false positives and waste analyst time" },
                { id: "c", text: "They prevent SIEM indexing" },
                { id: "d", text: "They disable encryption on endpoints" },
              ],
              correctChoiceId: "b",
              explanation:
                "Outdated IOCs may match benign activity, generating alert fatigue and reducing SOC efficiency.",
            },
          ],
          flashcards: [
            {
              id: "threat-intelligence-f1",
              front: "What are the four common threat intelligence scopes?",
              back: "Strategic, operational, tactical, and technical",
            },
            {
              id: "threat-intelligence-f2",
              front: "What does IOC stand for?",
              back: "Indicator of Compromise — artifacts like IPs, hashes, or domains tied to malicious activity",
            },
            {
              id: "threat-intelligence-f3",
              front: "What framework maps adversary techniques for tactical intelligence?",
              back: "MITRE ATT&CK",
            },
            {
              id: "threat-intelligence-f4",
              front: "What does STIX standardize?",
              back: "Structured Threat Information Expression — format for sharing cyber threat intelligence",
            },
            {
              id: "threat-intelligence-f5",
              front: "What is TAXII used for?",
              back: "Transport protocol for exchanging STIX threat intelligence feeds",
            },
          ],
          objectives: ["CS0-003-1.1","CS0-003-1.2"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "cysa-mitre-tactic-drill",
              title: "ATT&CK Tactic Mapping Drill",
              type: "simulator",
              instructions: "Complete the MITRE ATT&CK tactic drill. Match incident scenarios and techniques to the correct ATT&CK tactics and order response steps appropriately.",
              estimatedMinutes: 15,
              simulatorId: "mitre-tactic-drill",
              completionCriteria: ["Score at least 70% on the drill","Review weak concepts flagged at the end"],
              relatedTopicIds: ["threat-intelligence"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "threat-intelligence-qb1",
              prompt: "What is the Diamond Model used for?",
              choices: [
                { id: "a", text: "Mapping relationships between adversary, capability, infrastructure, and victim" },
                { id: "b", text: "Encrypting threat feeds" },
                { id: "c", text: "Configuring DHCP" },
                { id: "d", text: "Managing patch windows" }
              ],
              correctChoiceId: "a",
              explanation:
                "The Diamond Model maps relationships between adversary, capability, infrastructure, and victim.",
            },
            {
              id: "threat-intelligence-qb2",
              prompt: "Which intelligence type informs board-level long-term trends?",
              choices: [
                { id: "a", text: "Strategic intelligence" },
                { id: "b", text: "Technical IOC lists" },
                { id: "c", text: "Packet captures" },
                { id: "d", text: "Firewall rule exports" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Strategic intelligence\". Review the lesson for full context.",
            },
            {
              id: "threat-intelligence-qb3",
              prompt: "What is an ISAC?",
              choices: [
                { id: "a", text: "Industry-specific threat sharing organization" },
                { id: "b", text: "Internal subnet access controller" },
                { id: "c", text: "Internet speed analyzer" },
                { id: "d", text: "Incident storage archive" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Industry-specific threat sharing organization\". Review the lesson for full context.",
            },
            {
              id: "threat-intelligence-qb4",
              prompt: "Why map intel to ATT&CK?",
              choices: [
                { id: "a", text: "Align detections and coverage to adversary techniques" },
                { id: "b", text: "Replace all SIEM parsers" },
                { id: "c", text: "Disable endpoint agents" },
                { id: "d", text: "Eliminate vulnerability scans" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Align detections and coverage to adversary techniques\". Review the lesson for full context.",
            },
            {
              id: "threat-intelligence-qb5",
              prompt: "What makes intelligence actionable?",
              choices: [
                { id: "a", text: "Timely, relevant, accurate context tied to decisions" },
                { id: "b", text: "Maximum volume of raw logs" },
                { id: "c", text: "Oldest possible indicators" },
                { id: "d", text: "Unverified social media rumors" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Timely, relevant, accurate context tied to decisions\". Review the lesson for full context.",
            }
          ],
        },
        {
          id: "siem-basics",
          name: "SIEM Basics",
          lesson: {
            title: "Security Information and Event Management",
            content: `A Security Information and Event Management (SIEM) platform collects, normalizes, correlates, and analyzes log and event data from across the environment. It gives security teams a centralized view for detection, investigation, and compliance reporting.

SIEMs ingest data from firewalls, endpoints, identity systems, cloud services, and applications. Agents, syslog, and API connectors forward events to collectors. Normalization maps disparate formats into a common schema so analysts can search consistently. Correlation rules link related events—such as failed logins followed by privilege escalation—to generate alerts.

Key capabilities include log storage and retention, dashboards, alerting, threat intelligence integration, and case management. User and Entity Behavior Analytics (UEBA) adds baselines to detect anomalies like impossible travel or unusual data access. SOAR integration can automate enrichment and response playbooks.

Deployment considerations include sizing for events per second (EPS), storage costs, parser maintenance, and tuning to reduce false positives. A SIEM is only as effective as its data sources—gaps in logging create blind spots. Analysts must continuously refine use cases aligned to organizational risk and threat intel.

Modern SIEM platforms often include SOAR capabilities for playbook automation—enriching alerts with threat intel, creating tickets, and isolating hosts. Cloud-native SIEMs (Microsoft Sentinel, Google Chronicle) scale ingestion for hybrid estates but require careful cost management for high-volume logs.

Detection engineering teams maintain a lifecycle: propose use case, develop rule, test against benign traffic, deploy, tune, and retire stale rules. Document each rule's data dependencies so teams know when a log source outage creates a detection blind spot. Run periodic purple team validation to measure rule efficacy against simulated attacks.`,
          },
          keyFacts: [
            "SIEM aggregates, normalizes, correlates, and analyzes security event data",
            "Normalization converts diverse log formats into a searchable common schema",
            "Correlation rules connect related events to produce actionable alerts",
            "UEBA detects behavioral anomalies beyond signature-based rules",
            "EPS capacity and log retention drive SIEM sizing and cost",
            "SIEM effectiveness depends on comprehensive, quality log sources",
          ],
          guidedExample: {
            title: "Triage a Brute-Force Login Alert in the SIEM",
            steps: [
              "Review the correlation alert: 20 failed logins (Event 4625) for svc-backup on DC01 within 10 minutes, followed by one successful login (4624).",
              "Normalize and pivot on source IP, username, and host fields—the SIEM schema maps Windows Security logs to common field names.",
              "Enrich with threat intel: check whether the source IP appears on known malicious lists or geo-IP anomaly databases.",
              "Correlate across sources: confirm VPN logs show no legitimate session, and EDR shows a new scheduled task on DC01 after the success.",
              "Classify severity as high (service account on domain controller) and escalate to Tier 2 with timeline, IOCs, and affected assets documented.",
              "Create a tuning ticket if the rule fired on a known vulnerability scanner—whitelist the scanner IP after confirming benign activity.",
            ],
          },
          commonMistakes: [
            "Deploying correlation rules without testing against benign traffic, causing alert fatigue",
            "Assuming SIEM coverage is complete when critical log sources (cloud audit, EDR, DNS) are missing",
            "Confusing normalization with encryption—normalization maps fields, it does not protect log integrity",
            "Ignoring EPS sizing and retention costs until ingestion queues back up or logs are dropped",
            "Treating UEBA as a replacement for correlation rules instead of a complementary behavioral layer",
          ],
          examTraps: [
            "Questions asking which SIEM function links related events—correlation, not normalization or aggregation alone",
            "EPS vs storage retention distractors—EPS measures ingestion rate, not how long logs are kept",
            "Scenarios where missing log sources create blind spots—the answer is incomplete data sources, not too many dashboards",
            "SOAR vs SIEM confusion—SOAR automates response playbooks; SIEM collects and analyzes events",
            "Alert fatigue caused by poorly tuned rules vs no alerts—exam favors tuning and whitelisting over disabling detection",
          ],
          realWorldScenario: "Your SOC onboards a new cloud SaaS application but forgets to forward its authentication logs to the SIEM. Two weeks later, an analyst notices impossible-travel alerts stopped firing for remote users. You audit data source coverage, add the missing API connector, rebuild the UEBA baseline for 14 days, and retune the impossible-travel rule to exclude approved travel VPN exit nodes before re-enabling production alerting.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["log-analysis"],
          quiz: [
            {
              id: "siem-basics-q1",
              prompt: "What is the primary purpose of log normalization in a SIEM?",
              choices: [
                { id: "a", text: "To encrypt logs at rest" },
                { id: "b", text: "To map diverse log formats into a consistent schema" },
                { id: "c", text: "To delete duplicate users" },
                { id: "d", text: "To replace firewalls" },
              ],
              correctChoiceId: "b",
              explanation:
                "Normalization standardizes fields across sources so analysts can search and correlate events uniformly.",
            },
            {
              id: "siem-basics-q2",
              prompt: "Which SIEM feature links multiple related events into a single alert?",
              choices: [
                { id: "a", text: "Correlation" },
                { id: "b", text: "Defragmentation" },
                { id: "c", text: "Load balancing" },
                { id: "d", text: "DHCP snooping" },
              ],
              correctChoiceId: "a",
              explanation:
                "Correlation rules detect patterns across events, such as brute force followed by successful login.",
            },
            {
              id: "siem-basics-q3",
              prompt: "What does UEBA primarily analyze?",
              choices: [
                { id: "a", text: "Cable pinouts" },
                { id: "b", text: "User and entity behavioral baselines and anomalies" },
                { id: "c", text: "Physical badge access only" },
                { id: "d", text: "Printer toner levels" },
              ],
              correctChoiceId: "b",
              explanation:
                "User and Entity Behavior Analytics establishes baselines to flag unusual account or device activity.",
            },
            {
              id: "siem-basics-q4",
              prompt: "Which metric is commonly used to size SIEM ingestion capacity?",
              choices: [
                { id: "a", text: "Events per second (EPS)" },
                { id: "b", text: "Megabytes of RAM on laptops" },
                { id: "c", text: "Number of email aliases" },
                { id: "d", text: "DNS TTL values" },
              ],
              correctChoiceId: "a",
              explanation:
                "Events per second measures how much log volume a SIEM must ingest and process.",
            },
            {
              id: "siem-basics-q5",
              prompt: "What is a common cause of SIEM alert fatigue?",
              choices: [
                { id: "a", text: "Over-tuned rules with no alerts" },
                { id: "b", text: "Poorly tuned correlation rules generating excessive false positives" },
                { id: "c", text: "Too few log sources" },
                { id: "d", text: "Mandatory multi-factor authentication" },
              ],
              correctChoiceId: "b",
              explanation:
                "Untuned rules fire on benign activity, overwhelming analysts with low-value alerts.",
            },
          ],
          flashcards: [
            {
              id: "siem-basics-f1",
              front: "What four functions define a SIEM?",
              back: "Collect, normalize, correlate, and analyze security events",
            },
            {
              id: "siem-basics-f2",
              front: "What does UEBA stand for?",
              back: "User and Entity Behavior Analytics",
            },
            {
              id: "siem-basics-f3",
              front: "What metric measures SIEM ingestion volume?",
              back: "Events per second (EPS)",
            },
            {
              id: "siem-basics-f4",
              front: "What does SOAR add to a SIEM?",
              back: "Security Orchestration, Automation, and Response — playbooks for alert enrichment and actions",
            },
            {
              id: "siem-basics-f5",
              front: "What is EPS in SIEM sizing?",
              back: "Events per second — measures log ingestion volume capacity",
            },
          ],
          objectives: ["CS0-003-1.3","CS0-003-1.4"],
          practiceType: ["reading","quiz","flashcard","simulator","external-lab"],
          externalResources: [
            {
              id: "splunk-free",
              name: "Splunk Enterprise Free",
              url: "https://www.splunk.com/en_us/download/splunk-enterprise.html",
              cost: "free",
              platform: "any",
              installNotes: "Install Splunk Free locally or use Splunk trial for log search exercises.",
            }
          ],
          assignments: [
            {
              id: "cysa-siem-alert-priority",
              title: "SIEM Alert Priority Drill",
              type: "simulator",
              instructions: "Rank and triage SIEM alerts by severity and investigation priority. Focus on true positive indicators over noisy low-value events.",
              estimatedMinutes: 15,
              simulatorId: "siem-alert-priority",
              completionCriteria: ["Complete the drill with 70% or higher","Note which alert types you ranked incorrectly"],
              relatedTopicIds: ["siem-basics"],
              order: 1,
            },
            {
              id: "cysa-splunk-login-triage",
              title: "Lab: Triage Failed Login Alerts in Splunk",
              type: "external-lab",
              instructions: "1. Install Splunk Free or use a provided sample dataset.\n2. Import authentication logs (Windows 4624/4625 or sample auth.log).\n3. Search for failed logins followed by success from the same source IP within 15 minutes.\n4. Identify the top 3 source IPs by failure count.\n5. Document one account that shows impossible travel or off-hours success.",
              estimatedMinutes: 45,
              externalResourceId: "splunk-free",
              completionCriteria: ["Ran the failed-then-success login search","Identified top failure sources","Documented one suspicious account pattern"],
              relatedTopicIds: ["siem-basics","log-analysis"],
              order: 2,
            }
          ],
          questionBank: [
            {
              id: "siem-basics-qb1",
              prompt: "What is log correlation?",
              choices: [
                { id: "a", text: "Linking related events across sources to detect patterns" },
                { id: "b", text: "Deleting duplicate users" },
                { id: "c", text: "Encrypting syslog transport" },
                { id: "d", text: "Rotating API keys" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Linking related events across sources to detect patterns\". Review the lesson for full context.",
            },
            {
              id: "siem-basics-qb2",
              prompt: "Which feature detects impossible travel?",
              choices: [
                { id: "a", text: "UEBA behavioral analytics" },
                { id: "b", text: "DHCP reservation" },
                { id: "c", text: "STP root bridge" },
                { id: "d", text: "VLAN pruning" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"UEBA behavioral analytics\". Review the lesson for full context.",
            },
            {
              id: "siem-basics-qb3",
              prompt: "What causes SIEM blind spots?",
              choices: [
                { id: "a", text: "Missing or incomplete log sources" },
                { id: "b", text: "Too many dashboards" },
                { id: "c", text: "Dark mode UI" },
                { id: "d", text: "Longer passwords" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Missing or incomplete log sources\". Review the lesson for full context.",
            },
            {
              id: "siem-basics-qb4",
              prompt: "What is a SIEM use case lifecycle?",
              choices: [
                { id: "a", text: "Propose, develop, test, deploy, tune, retire rules" },
                { id: "b", text: "Scan once and ignore results" },
                { id: "c", text: "Disable all alerts" },
                { id: "d", text: "Remove all parsers" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Propose, develop, test, deploy, tune, retire rules\". Review the lesson for full context.",
            },
            {
              id: "siem-basics-qb5",
              prompt: "Why integrate threat intel into SIEM?",
              choices: [
                { id: "a", text: "Enrich alerts with known malicious indicators" },
                { id: "b", text: "Replace patch management" },
                { id: "c", text: "Eliminate need for EDR" },
                { id: "d", text: "Disable firewalls" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Enrich alerts with known malicious indicators\". Review the lesson for full context.",
            },
            {
              id: "siem-basics-qb6",
              prompt: "What does log normalization enable?",
              choices: [
                { id: "a", text: "Consistent search and correlation across diverse log formats" },
                { id: "b", text: "Automatic patch deployment" },
                { id: "c", text: "Physical access control" },
                { id: "d", text: "Elimination of all false positives" }
              ],
              correctChoiceId: "a",
              explanation: "Normalization maps disparate log formats into a common schema for unified analysis.",
            },
            {
              id: "siem-basics-qb7",
              prompt: "What is a primary benefit of SOAR integration with SIEM?",
              choices: [
                { id: "a", text: "Automated alert enrichment and response playbook execution" },
                { id: "b", text: "Replacement of all log collectors" },
                { id: "c", text: "Disabling correlation rules" },
                { id: "d", text: "Removal of retention policies" }
              ],
              correctChoiceId: "a",
              explanation: "SOAR orchestrates enrichment, ticketing, and containment actions triggered by SIEM alerts.",
            },
            {
              id: "siem-basics-qb8",
              prompt: "Why document rule data dependencies?",
              choices: [
                { id: "a", text: "Identify detection blind spots when a log source goes offline" },
                { id: "b", text: "Reduce password complexity requirements" },
                { id: "c", text: "Eliminate need for purple team testing" },
                { id: "d", text: "Disable UEBA baselines" }
              ],
              correctChoiceId: "a",
              explanation: "Knowing which sources feed each rule reveals gaps when ingestion fails or parsers break.",
            }
          ],
        },
        {
          id: "log-analysis",
          name: "Log Analysis",
          lesson: {
            title: "Analyzing Security Logs",
            content: `Log analysis is the process of reviewing recorded events to detect anomalies, investigate incidents, and prove compliance. Logs capture who did what, when, where, and how—making them essential evidence in security operations.

Common log sources include operating system security logs, authentication servers, firewalls, proxies, DNS, cloud audit trails (such as AWS CloudTrail), and application logs. Each source uses different fields: timestamps, source IP, user account, action, result, and object accessed. Analysts must understand normal baselines to spot deviations.

Effective analysis follows structured steps: define the question or hypothesis, identify relevant sources and time ranges, filter noise, pivot on key fields (IP, user, process), and correlate across systems. For example, a suspicious login might be validated against VPN logs, endpoint process creation, and data egress.

Challenges include clock skew, missing logs, volume overload, and tampering. NTP synchronization ensures accurate timelines. Centralized collection with integrity controls (WORM storage, hashing) protects evidence. Parsing errors can hide critical fields—validate ingest pipelines regularly.

Log analysis supports detection, hunting, and forensics. Saved searches, dashboards, and scheduled reports operationalize recurring checks. During incidents, analysts reconstruct attacker paths by chaining events across the kill chain.

Common Windows Event IDs for investigations include 4624/4625 (logon success/failure), 4688 (process creation), 4698/4699 (scheduled tasks), and 4720 (user account created). Linux analysts rely on auth.log, secure, auditd, and journalctl output. Cloud logs like AWS CloudTrail and Azure Activity Log capture control-plane changes critical for detecting credential abuse.

Pivot techniques include filtering by user, source IP, process name, and parent-child process relationships. Timeline analysis reconstructs attack sequences across disparate sources. Always note time zone normalization—UTC storage with local display prevents correlation errors during cross-region incidents.`,
          },
          keyFacts: [
            "Logs provide accountability records of user, system, and network activity",
            "Key fields include timestamp, source, user, action, result, and target object",
            "Cross-source correlation validates suspicious activity across the environment",
            "NTP synchronization prevents timeline errors during investigations",
            "Missing or tampered logs create investigation blind spots",
            "Structured analysis: hypothesis, source selection, filter, pivot, correlate",
          ],
          commonMistakes: [
            "Starting analysis without a clear hypothesis, leading to unfocused searching through noise",
            "Ignoring time zone normalization and causing incorrect event sequencing across regions",
            "Relying on a single log source instead of correlating authentication, endpoint, and network events",
            "Assuming missing logs mean no activity rather than investigating collection or tampering gaps",
            "Confusing Windows Event ID 4624 (success) with 4625 (failure) during login investigations",
          ],
          examTraps: [
            "Questions asking for the first analysis step—define the hypothesis before filtering or pivoting",
            "NTP vs log encryption distractors—NTP ensures accurate timestamps, it does not encrypt logs",
            "CloudTrail vs CloudWatch confusion—CloudTrail logs API management activity, not all application metrics",
            "Scenarios where log tampering undermines evidence—the answer emphasizes integrity loss, not performance gain",
            "Pivot technique questions—pivoting expands from a known anchor value, not physically moving log servers",
          ],
          quiz: [
            {
              id: "log-analysis-q1",
              prompt: "Which log source would best confirm successful authentication to a domain controller?",
              choices: [
                { id: "a", text: "DNS query logs" },
                { id: "b", text: "Windows Security Event ID 4624 (successful logon)" },
                { id: "c", text: "Printer spooler logs" },
                { id: "d", text: "DHCP lease logs" },
              ],
              correctChoiceId: "b",
              explanation:
                "Event ID 4624 records successful Windows logon events, including user and source details.",
            },
            {
              id: "log-analysis-q2",
              prompt: "Why is NTP synchronization critical during log analysis?",
              choices: [
                { id: "a", text: "It encrypts log files" },
                { id: "b", text: "It ensures accurate timestamps for correlating events across systems" },
                { id: "c", text: "It blocks malware execution" },
                { id: "d", text: "It replaces SIEM parsers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Consistent time across devices allows analysts to build accurate incident timelines.",
            },
            {
              id: "log-analysis-q3",
              prompt: "What is the first step in a structured log analysis workflow?",
              choices: [
                { id: "a", text: "Delete old logs" },
                { id: "b", text: "Define the question or investigation hypothesis" },
                { id: "c", text: "Disable all firewalls" },
                { id: "d", text: "Reboot all servers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Starting with a clear hypothesis focuses analysis on relevant sources and timeframes.",
            },
            {
              id: "log-analysis-q4",
              prompt: "Which cloud service log records API activity for AWS resources?",
              choices: [
                { id: "a", text: "CloudTrail" },
                { id: "b", text: "Route 53 only" },
                { id: "c", text: "S3 lifecycle rules" },
                { id: "d", text: "Elastic Beanstalk health" },
              ],
              correctChoiceId: "a",
              explanation:
                "AWS CloudTrail logs API calls and management events across an AWS account.",
            },
            {
              id: "log-analysis-q5",
              prompt: "What risk does log tampering pose during an investigation?",
              choices: [
                { id: "a", text: "It improves SIEM performance" },
                { id: "b", text: "It undermines evidence integrity and may hide attacker actions" },
                { id: "c", text: "It automatically patches vulnerabilities" },
                { id: "d", text: "It reduces storage costs" },
              ],
              correctChoiceId: "b",
              explanation:
                "Altered or deleted logs can conceal adversary activity and weaken forensic evidence.",
            },
          ],
          flashcards: [
            {
              id: "log-analysis-f1",
              front: "What Windows Event ID indicates a successful logon?",
              back: "Event ID 4624",
            },
            {
              id: "log-analysis-f2",
              front: "Why correlate logs across multiple sources?",
              back: "To validate suspicious activity and reconstruct complete attack timelines",
            },
            {
              id: "log-analysis-f3",
              front: "What AWS service logs API management events?",
              back: "CloudTrail",
            },
            {
              id: "log-analysis-f4",
              front: "Windows Event ID 4625 indicates?",
              back: "Failed logon attempt",
            },
            {
              id: "log-analysis-f5",
              front: "Why normalize timestamps to UTC?",
              back: "Accurate cross-system event correlation regardless of local time zones",
            },
          ],
          objectives: ["CS0-003-1.5"],
          practiceType: ["reading","quiz","flashcard","simulator","external-lab"],
          externalResources: [
            {
              id: "wireshark",
              name: "Wireshark",
              url: "https://www.wireshark.org/",
              cost: "free",
              platform: "any",
              installNotes: "Download Wireshark and install the latest release for your OS.",
            }
          ],
          assignments: [
            {
              id: "cysa-log-line-triage",
              title: "Log Line Triage Drill",
              type: "simulator",
              instructions: "Identify the most suspicious log lines from authentication and system logs. Select entries that indicate brute force, privilege escalation, or persistence.",
              estimatedMinutes: 12,
              simulatorId: "log-line-triage",
              completionCriteria: ["Score 70% or higher","Review explanations for missed lines"],
              relatedTopicIds: ["log-analysis"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "log-analysis-qb1",
              prompt: "What is the first step in log investigation?",
              choices: [
                { id: "a", text: "Define the question or hypothesis" },
                { id: "b", text: "Delete all logs" },
                { id: "c", text: "Reboot servers" },
                { id: "d", text: "Disable SIEM" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Define the question or hypothesis\". Review the lesson for full context.",
            },
            {
              id: "log-analysis-qb2",
              prompt: "Which Windows event indicates successful logon?",
              choices: [
                { id: "a", text: "4624" },
                { id: "b", text: "4625" },
                { id: "c", text: "1102" },
                { id: "d", text: "6005" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"4624\". Review the lesson for full context.",
            },
            {
              id: "log-analysis-qb3",
              prompt: "What does CloudTrail log?",
              choices: [
                { id: "a", text: "AWS API and management activity" },
                { id: "b", text: "Physical badge access" },
                { id: "c", text: "Employee payroll" },
                { id: "d", text: "Desktop wallpaper changes" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"AWS API and management activity\". Review the lesson for full context.",
            },
            {
              id: "log-analysis-qb4",
              prompt: "Why preserve original logs during incidents?",
              choices: [
                { id: "a", text: "Maintain evidence integrity for investigation and legal use" },
                { id: "b", text: "Reduce storage costs" },
                { id: "c", text: "Improve network speed" },
                { id: "d", text: "Disable attackers" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Maintain evidence integrity for investigation and legal use\". Review the lesson for full context.",
            },
            {
              id: "log-analysis-qb5",
              prompt: "What is log pivoting?",
              choices: [
                { id: "a", text: "Filtering and expanding search from a known anchor value" },
                { id: "b", text: "Physically rotating log servers" },
                { id: "c", text: "Changing DNS TTL" },
                { id: "d", text: "Patching vulnerabilities" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Filtering and expanding search from a known anchor value\". Review the lesson for full context.",
            }
          ],
        },
        {
          id: "security-operations",
          name: "Security Operations",
          lesson: {
            title: "Security Operations Center Fundamentals",
            content: `Security operations encompasses the people, processes, and technology that monitor, detect, analyze, and respond to cyber threats continuously. The Security Operations Center (SOC) is the hub where analysts triage alerts, investigate incidents, and coordinate response.

SOC tiers typically structure workflow. Tier 1 analysts monitor dashboards, triage alerts, and escalate confirmed threats. Tier 2 performs deeper investigation, threat hunting, and malware analysis. Tier 3 handles advanced persistent threats, tool development, and purple-team exercises. Clear escalation paths prevent bottlenecks.

Core processes follow frameworks like NIST CSF: identify, protect, detect, respond, recover. Runbooks document standard procedures for phishing, ransomware, and data exfiltration scenarios. Shift handoffs, ticketing systems, and communication channels maintain continuity.

Metrics measure SOC health: mean time to detect (MTTD), mean time to respond (MTTR), false positive rate, and alert closure time. Continuous improvement through post-incident reviews and purple-team feedback strengthens detection coverage.

Operational challenges include alert fatigue, skill gaps, tool sprawl, and coverage across cloud and on-premises assets. Automation and SOAR help, but human judgment remains essential for context and decision-making.

SOC metrics extend beyond MTTR to include mean time to detect (MTTD), false positive ratio, and percentage of alerts closed as true positives. Shift handoffs require structured briefs: open P1/P2 incidents, ongoing hunts, and known noisy rules under investigation.

Threat hunting is proactive hypothesis-driven search—not waiting for alerts. Hunts start from intel (new CVE, industry campaign) or anomalies (unusual DNS, rare process execution). Document hunt findings even when benign; negative results improve baseline understanding. Integrate hunt outcomes back into permanent detection rules and playbooks.`,
          },
          keyFacts: [
            "The SOC continuously monitors, detects, analyzes, and responds to security events",
            "Tier 1 triages alerts; Tier 2 investigates; Tier 3 handles advanced threats",
            "Runbooks standardize response for common incident types",
            "MTTD and MTTR are key SOC performance metrics",
            "NIST CSF phases include identify, protect, detect, respond, recover",
            "Post-incident reviews drive continuous SOC improvement",
          ],
          commonMistakes: [
            "Confusing Tier 1 (triage) with Tier 3 (advanced threat hunting and tool development)",
            "Treating MTTR and MTTD as interchangeable metrics with the same meaning",
            "Skipping structured shift handoffs, causing duplicated work or missed escalations",
            "Assuming threat hunting is reactive alert triage rather than proactive hypothesis-driven search",
            "Ignoring false positive ratio when measuring SOC health and rule tuning effectiveness",
          ],
          examTraps: [
            "NIST CSF function mapping—Identify covers assets and risk, Detect covers monitoring and analysis",
            "Purple team vs red team distractors—purple team collaborates to improve detections, red team attacks alone",
            "Runbook purpose questions—runbooks standardize procedures, they do not replace SIEM rules",
            "MTTD vs MTTR scenarios—detect time and respond time measure different phases of incident handling",
            "Tier escalation traps—Tier 1 triages and escalates; deep investigation belongs to Tier 2 or Tier 3",
          ],
          quiz: [
            {
              id: "security-operations-q1",
              prompt: "Which SOC tier typically performs initial alert triage?",
              choices: [
                { id: "a", text: "Tier 1" },
                { id: "b", text: "Tier 3" },
                { id: "c", text: "Executive tier" },
                { id: "d", text: "Compliance tier only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Tier 1 analysts monitor alerts, perform initial triage, and escalate validated incidents.",
            },
            {
              id: "security-operations-q2",
              prompt: "What does MTTR measure in security operations?",
              choices: [
                { id: "a", text: "Mean time to respond to incidents" },
                { id: "b", text: "Maximum transfer rate" },
                { id: "c", text: "Monthly ticket rotation ratio" },
                { id: "d", text: "Minimum threshold for routing" },
              ],
              correctChoiceId: "a",
              explanation:
                "Mean Time to Respond tracks how quickly the SOC contains and resolves incidents.",
            },
            {
              id: "security-operations-q3",
              prompt: "What is the purpose of a SOC runbook?",
              choices: [
                { id: "a", text: "To document standard procedures for recurring incident types" },
                { id: "b", text: "To replace all SIEM correlation rules" },
                { id: "c", text: "To store employee passwords" },
                { id: "d", text: "To configure DHCP scopes" },
              ],
              correctChoiceId: "a",
              explanation:
                "Runbooks provide step-by-step guidance for consistent, repeatable incident handling.",
            },
            {
              id: "security-operations-q4",
              prompt: "Which NIST CSF function focuses on identifying assets and risks?",
              choices: [
                { id: "a", text: "Identify" },
                { id: "b", text: "Detect only" },
                { id: "c", text: "Recover only" },
                { id: "d", text: "Encrypt" },
              ],
              correctChoiceId: "a",
              explanation:
                "The Identify function covers asset management, governance, and risk assessment.",
            },
            {
              id: "security-operations-q5",
              prompt: "What activity helps improve SOC detection through simulated adversary techniques?",
              choices: [
                { id: "a", text: "Purple team exercises" },
                { id: "b", text: "Disabling logging" },
                { id: "c", text: "Removing all tier structure" },
                { id: "d", text: "Ignoring false positives" },
              ],
              correctChoiceId: "a",
              explanation:
                "Purple teams combine red-team attacks with blue-team detection to validate and improve coverage.",
            },
          ],
          flashcards: [
            {
              id: "security-operations-f1",
              front: "What do MTTD and MTTR measure?",
              back: "Mean time to detect and mean time to respond to security incidents",
            },
            {
              id: "security-operations-f2",
              front: "What is a SOC runbook?",
              back: "A documented procedure for handling specific incident or alert types",
            },
            {
              id: "security-operations-f3",
              front: "Which SOC tier handles advanced threat hunting?",
              back: "Tier 2 or Tier 3, depending on organization structure",
            },
            {
              id: "security-operations-f4",
              front: "What does Tier 1 SOC handle?",
              back: "Initial alert triage, enrichment, and escalation of confirmed incidents",
            },
            {
              id: "security-operations-f5",
              front: "What is threat hunting?",
              back: "Proactive hypothesis-driven search for threats not caught by automated alerts",
            },
          ],
          objectives: ["CS0-003-1.6"],
          practiceType: ["reading","quiz","flashcard","case-study"],
          questionBank: [
            {
              id: "security-operations-qb1",
              prompt: "What does MTTD measure?",
              choices: [
                { id: "a", text: "Mean time to detect incidents" },
                { id: "b", text: "Maximum transfer delay" },
                { id: "c", text: "Monthly ticket dispatch" },
                { id: "d", text: "Minimum threshold detection" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Mean time to detect incidents\". Review the lesson for full context.",
            },
            {
              id: "security-operations-qb2",
              prompt: "What is a SOC runbook?",
              choices: [
                { id: "a", text: "Documented standard procedures for recurring incident types" },
                { id: "b", text: "Network cable map" },
                { id: "c", text: "Employee directory" },
                { id: "d", text: "Patch Tuesday calendar" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Documented standard procedures for recurring incident types\". Review the lesson for full context.",
            },
            {
              id: "security-operations-qb3",
              prompt: "What is a purple team exercise?",
              choices: [
                { id: "a", text: "Collaborative attack simulation to test detections and response" },
                { id: "b", text: "Removing all red team tools" },
                { id: "c", text: "Disabling logging" },
                { id: "d", text: "Compliance audit only" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Collaborative attack simulation to test detections and response\". Review the lesson for full context.",
            },
            {
              id: "security-operations-qb4",
              prompt: "Which NIST CSF function includes monitoring?",
              choices: [
                { id: "a", text: "Detect" },
                { id: "b", text: "Identify only" },
                { id: "c", text: "Recover only" },
                { id: "d", text: "Govern only" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Detect\". Review the lesson for full context.",
            },
            {
              id: "security-operations-qb5",
              prompt: "Why track false positive ratio?",
              choices: [
                { id: "a", text: "Measure alert quality and tuning effectiveness" },
                { id: "b", text: "Eliminate all true positives" },
                { id: "c", text: "Replace vulnerability scans" },
                { id: "d", text: "Disable SIEM" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Measure alert quality and tuning effectiveness\". Review the lesson for full context.",
            }
          ],
          assignments: [
            {
              id: "soc-triage-case-1",
              title: "Case Study: SOC Alert Triage and Escalation",
              type: "case-study",
              instructions: `Scenario: At 02:15, your SIEM fires these alerts in order:
1. Multiple failed logins for svc-backup on a domain controller (15 attempts in 5 minutes)
2. Successful login for svc-backup immediately after
3. New scheduled task created on the same DC
4. Outbound HTTPS to an unknown IP in a rare geo region

1. Assign each alert to Tier 1 triage steps vs immediate escalation criteria.
2. Write the first three actions from a SOC runbook for credential abuse on a DC.
3. State whether you would escalate to Tier 2/3 and why (include severity factors).
4. Name two enrichment data points you would pull before containment.
5. Document one false-positive scenario that could explain alert #1 alone.

Use your lesson notes — no external tools required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Differentiated Tier 1 triage vs escalation for each alert",
                "Listed three runbook actions for credential abuse",
                "Justified escalation decision with severity factors",
                "Named two enrichment data points",
                "Described a plausible false-positive for failed logins",
              ],
              relatedTopicIds: ["security-operations"],
              order: 1,
            },
          ],
        },
        {
          id: "detection-rules",
          name: "Detection Rules",
          lesson: {
            title: "Building Effective Detection Rules",
            content: `Detection rules translate threat knowledge into automated alerts within SIEM, EDR, and IDS platforms. Well-crafted rules balance sensitivity (catching real threats) with specificity (avoiding noise). Poor rules either miss attacks or flood analysts with false positives.

Rule types include signature-based (matching known bad indicators), behavioral (detecting deviations from baselines), and correlation (linking sequences of events). Sigma rules provide a vendor-neutral format convertible to Splunk, Elastic, or other query languages. MITRE ATT&CK mapping ensures coverage across tactics.

Development follows a lifecycle: identify use case from threat intel or risk assessment, draft logic, test against benign and malicious samples, tune thresholds, deploy to production, and review regularly. Rules should include metadata—author, severity, ATT&CK mapping, and false positive guidance.

Tuning techniques include whitelisting known-good processes, adjusting time windows, requiring multiple conditions, and enriching with context (asset criticality, user role). Detection engineering teams maintain rule repositories, version control, and regression testing.

Avoid overly broad patterns like alerting on every PowerShell execution. Instead, combine indicators: encoded commands, network connections to rare destinations, and parent-child process anomalies. Document assumptions so future analysts understand rule intent.

Sigma rules use a YAML format portable across Splunk, Elastic, Sentinel, and other backends. Rule quality depends on specificity: require multiple conditions, time windows, and exclusions for known-good admin activity. Test rules against purple team simulations before production deployment.

Detection coverage matrices map rules to MITRE ATT&CK tactics and techniques, revealing gaps in credential access, lateral movement, or exfiltration coverage. Review coverage quarterly as threat landscapes shift. Balance signature, anomaly, and behavioral detections—no single approach catches all threats.`,
          },
          keyFacts: [
            "Detection rules automate threat identification in SIEM, EDR, and IDS platforms",
            "Sigma provides a vendor-neutral rule format for cross-platform deployment",
            "Rules should map to MITRE ATT&CK tactics for coverage tracking",
            "Balance sensitivity and specificity to minimize false positives and false negatives",
            "Rule lifecycle: design, test, tune, deploy, and periodically review",
            "Combine multiple conditions for higher-fidelity alerts",
          ],
          guidedExample: {
            title: "Build a Brute-Force Detection Rule with Sigma Logic",
            steps: [
              "Define the use case from threat intel: credential access via password spraying against Active Directory accounts.",
              "Draft correlation logic: ≥10 failed logins (Event 4625) for the same username from one source IP within 5 minutes, followed by one success (4624).",
              "Add specificity: exclude known vulnerability scanners via whitelist and require target host role = domain controller.",
              "Map the rule to MITRE ATT&CK T1110 (Brute Force) and T1078 (Valid Accounts) for coverage tracking.",
              "Test against 30 days of benign auth logs and purple team simulation samples—tune the threshold if helpdesk lockouts trigger false positives.",
              "Deploy with metadata (author, severity, false-positive guidance) and schedule quarterly review as admin tooling changes.",
            ],
          },
          commonMistakes: [
            "Creating overly broad rules that alert on every PowerShell or cmd.exe execution without context",
            "Deploying rules to production without testing against benign traffic and purple team simulations",
            "Skipping ATT&CK mapping, making it impossible to measure detection coverage gaps",
            "Using whitelists too aggressively and blinding rules to attacker abuse of trusted admin tools",
            "Failing to document rule intent and assumptions, leaving future analysts unable to tune effectively",
          ],
          examTraps: [
            "Sigma vs vendor-specific query distractors—Sigma is vendor-neutral YAML portable across SIEMs",
            "Signature vs behavioral vs correlation rule type confusion—correlation links event sequences over time",
            "Questions where broad rules cause alert fatigue—the fix is tuning and multi-condition logic, not disabling SIEM",
            "Whitelist purpose traps—whitelists exclude known-good activity, they do not block all traffic",
            "Detection coverage matrix vs firewall rule set—coverage matrices map rules to ATT&CK tactics, not network ACLs",
          ],
          realWorldScenario: "Your SOC deploys a new EDR rule alerting on any encoded PowerShell command and within a week Tier 1 is drowning in 400 daily false positives from legitimate deployment scripts. The detection engineer refines the rule to require encoded commands plus outbound connections to rare destinations, adds a whitelist for the software deployment service account, and validates the tuned rule against last month's benign script inventory before re-enabling it in production.",
          estimatedStudyMinutes: 40,
          difficulty: "hard",
          prerequisites: ["siem-basics", "malware-indicators"],
          quiz: [
            {
              id: "detection-rules-q1",
              prompt: "What is the purpose of Sigma rules?",
              choices: [
                { id: "a", text: "Vendor-neutral detection logic convertible to multiple SIEM formats" },
                { id: "b", text: "Physical security badge encoding" },
                { id: "c", text: "Network cable color standards" },
                { id: "d", text: "Database backup scheduling" },
              ],
              correctChoiceId: "a",
              explanation:
                "Sigma defines detection logic in a generic format portable across security platforms.",
            },
            {
              id: "detection-rules-q2",
              prompt: "Which approach links a sequence of events like failed logins followed by success?",
              choices: [
                { id: "a", text: "Correlation-based detection" },
                { id: "b", text: "Cable tracing" },
                { id: "c", text: "Static routing" },
                { id: "d", text: "Disk defragmentation" },
              ],
              correctChoiceId: "a",
              explanation:
                "Correlation rules connect related events over time to detect multi-step attack patterns.",
            },
            {
              id: "detection-rules-q3",
              prompt: "Why should detection rules map to MITRE ATT&CK?",
              choices: [
                { id: "a", text: "To track coverage of adversary tactics and identify gaps" },
                { id: "b", text: "To replace all log sources" },
                { id: "c", text: "To disable encryption" },
                { id: "d", text: "To automate payroll" },
              ],
              correctChoiceId: "a",
              explanation:
                "ATT&CK mapping helps teams measure detection coverage across known adversary techniques.",
            },
            {
              id: "detection-rules-q4",
              prompt: "What is a common tuning technique to reduce false positives?",
              choices: [
                { id: "a", text: "Whitelisting known-good processes or accounts" },
                { id: "b", text: "Alerting on every event regardless of context" },
                { id: "c", text: "Removing all time windows" },
                { id: "d", text: "Disabling rule testing" },
              ],
              correctChoiceId: "a",
              explanation:
                "Whitelists exclude legitimate activity that otherwise triggers broad detection logic.",
            },
            {
              id: "detection-rules-q5",
              prompt: "What risk does an overly broad detection rule create?",
              choices: [
                { id: "a", text: "Alert fatigue from excessive false positives" },
                { id: "b", text: "Automatic patch deployment" },
                { id: "c", text: "Improved network bandwidth" },
                { id: "d", text: "Elimination of all true positives" },
              ],
              correctChoiceId: "a",
              explanation:
                "Broad rules match benign activity frequently, overwhelming analysts with noise.",
            },
          ],
          flashcards: [
            {
              id: "detection-rules-f1",
              front: "What is Sigma used for?",
              back: "Vendor-neutral detection rule format portable across SIEM platforms",
            },
            {
              id: "detection-rules-f2",
              front: "Name three detection rule types.",
              back: "Signature-based, behavioral, and correlation-based",
            },
            {
              id: "detection-rules-f3",
              front: "Why combine multiple conditions in a rule?",
              back: "To increase fidelity and reduce false positives",
            },
            {
              id: "detection-rules-f4",
              front: "What is Sigma?",
              back: "Vendor-neutral YAML format for writing detection rules portable across SIEMs",
            },
            {
              id: "detection-rules-f5",
              front: "What is a detection coverage matrix?",
              back: "Map of rules aligned to MITRE ATT&CK tactics showing detection gaps",
            },
          ],
          objectives: ["CS0-003-1.7"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "cysa-firewall-rule-drill",
              title: "Firewall Rule Outcome Drill",
              type: "simulator",
              instructions: "Evaluate firewall rule sets and predict whether traffic is permitted or denied. Apply first-match rule ordering correctly.",
              estimatedMinutes: 12,
              simulatorId: "firewall-rule-drill",
              completionCriteria: ["Score 70% or higher","Review rule ordering mistakes"],
              relatedTopicIds: ["detection-rules"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "detection-rules-qb1",
              prompt: "What is behavioral detection?",
              choices: [
                { id: "a", text: "Identifying anomalies from baselines rather than static signatures" },
                { id: "b", text: "Scanning cable quality" },
                { id: "c", text: "Measuring office temperature" },
                { id: "d", text: "Configuring printers" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Identifying anomalies from baselines rather than static signatures\". Review the lesson for full context.",
            },
            {
              id: "detection-rules-qb2",
              prompt: "Why test detection rules before production?",
              choices: [
                { id: "a", text: "Reduce false positives and validate true positive coverage" },
                { id: "b", text: "Eliminate need for logs" },
                { id: "c", text: "Disable EDR" },
                { id: "d", text: "Skip change management" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Reduce false positives and validate true positive coverage\". Review the lesson for full context.",
            },
            {
              id: "detection-rules-qb3",
              prompt: "What does a Sigma rule provide?",
              choices: [
                { id: "a", text: "Portable detection logic across multiple SIEM platforms" },
                { id: "b", text: "Physical access badges" },
                { id: "c", text: "DHCP leases" },
                { id: "d", text: "SSL certificates" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Portable detection logic across multiple SIEM platforms\". Review the lesson for full context.",
            },
            {
              id: "detection-rules-qb4",
              prompt: "What causes alert fatigue?",
              choices: [
                { id: "a", text: "Excessive false positives from poorly tuned rules" },
                { id: "b", text: "Strong password policies" },
                { id: "c", text: "Encrypted backups" },
                { id: "d", text: "Multi-factor authentication" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Excessive false positives from poorly tuned rules\". Review the lesson for full context.",
            },
            {
              id: "detection-rules-qb5",
              prompt: "How do whitelists reduce noise?",
              choices: [
                { id: "a", text: "Exclude known-good activity from alerting" },
                { id: "b", text: "Block all traffic" },
                { id: "c", text: "Delete all logs" },
                { id: "d", text: "Disable correlation" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Exclude known-good activity from alerting\". Review the lesson for full context.",
            },
            {
              id: "detection-rules-qb6",
              prompt: "What is a detection coverage matrix?",
              choices: [
                { id: "a", text: "Mapping of rules aligned to MITRE ATT&CK tactics showing gaps" },
                { id: "b", text: "Firewall ACL export" },
                { id: "c", text: "Employee org chart" },
                { id: "d", text: "Patch deployment schedule" }
              ],
              correctChoiceId: "a",
              explanation: "Coverage matrices reveal which adversary tactics have active detection rules and which lack coverage.",
            },
            {
              id: "detection-rules-qb7",
              prompt: "Why combine multiple conditions in one rule?",
              choices: [
                { id: "a", text: "Increase alert fidelity and reduce false positives" },
                { id: "b", text: "Eliminate need for log sources" },
                { id: "c", text: "Disable ATT&CK mapping" },
                { id: "d", text: "Replace EDR agents" }
              ],
              correctChoiceId: "a",
              explanation: "Requiring multiple indicators (process, network, encoding) filters benign single-condition matches.",
            },
            {
              id: "detection-rules-qb8",
              prompt: "What belongs in detection rule metadata?",
              choices: [
                { id: "a", text: "Author, severity, ATT&CK mapping, and false-positive guidance" },
                { id: "b", text: "Employee salary data" },
                { id: "c", text: "Office floor plans" },
                { id: "d", text: "DHCP lease tables" }
              ],
              correctChoiceId: "a",
              explanation: "Metadata helps analysts triage alerts and future engineers tune rules without losing context.",
            }
          ],
        },
      ],
    },
    {
      id: "threat-detection",
      name: "Threat Detection and Analysis",
      topics: [
        {
          id: "network-traffic-analysis",
          name: "Network Traffic Analysis",
          lesson: {
            title: "Analyzing Network Traffic for Threats",
            content: `Network traffic analysis (NTA) examines packet and flow data to detect malicious communication, data exfiltration, and command-and-control activity. Unlike log analysis, NTA observes actual network behavior—even when endpoints are compromised and logs are deleted.

Analysts use tools like Wireshark for deep packet inspection, NetFlow/IPFIX for flow metadata, and Network Detection and Response (NDR) platforms for behavioral analytics. Key indicators include beaconing (regular intervals to external hosts), DNS tunneling, unusual port usage, large outbound transfers, and connections to threat intel-listed IPs.

Encrypted traffic (TLS) limits payload visibility, so analysts focus on metadata: JA3/JA3S fingerprints, certificate anomalies, SNI values, byte counts, and timing patterns. East-west traffic monitoring detects lateral movement that north-south perimeter tools miss.

Baselining normal traffic volumes, protocols, and peer relationships helps identify deviations. During incidents, full packet capture (PCAP) preserves evidence for forensic reconstruction. Storage and privacy considerations apply—capture only what policy allows and retain per legal requirements.

NTA complements EDR and SIEM by providing an independent observation layer. It is especially valuable for IoT, OT, and devices that cannot host agents.

Encrypted traffic analysis uses metadata: JA3/JA3S TLS fingerprints, certificate attributes, SNI hostnames, and flow timing. DNS tunneling and domain fronting leave observable patterns even when payload is encrypted. NetFlow records show talkers, bytes, and ports at scale when full PCAP storage is impractical.

IDS/IPS signatures complement metadata analysis for known exploit patterns. Baseline normal east-west traffic so lateral movement to unusual internal hosts triggers investigation. Capture retention policies balance forensic needs against storage costs—often 7–30 days full PCAP with longer NetFlow retention.`,
          },
          keyFacts: [
            "NTA inspects packets and flows to detect C2, exfiltration, and lateral movement",
            "Beaconing is periodic communication that may indicate malware check-ins",
            "NetFlow/IPFIX provides metadata without full packet capture",
            "TLS encryption limits payload visibility; metadata analysis remains valuable",
            "East-west traffic monitoring detects internal lateral movement",
            "PCAP preserves forensic evidence for detailed incident reconstruction",
          ],
          commonMistakes: [
            "Ignoring east-west traffic and only monitoring north-south perimeter flows",
            "Assuming encrypted TLS traffic is invisible—metadata analysis still reveals anomalies",
            "Confusing NetFlow metadata with full packet capture when deep payload inspection is needed",
            "Missing beaconing patterns by looking only at volume spikes instead of periodic timing intervals",
            "Failing to baseline normal protocol and peer relationships before declaring traffic anomalous",
          ],
          examTraps: [
            "Beaconing vs legitimate NTP/DHCP distractors—beaconing shows regular periodic outbound connections to external hosts",
            "NetFlow vs Wireshark confusion—NetFlow provides flow metadata at scale, Wireshark inspects individual packets",
            "TLS encryption scenarios where the answer is metadata analysis (SNI, JA3, certificates), not disabling encryption",
            "DNS tunneling indicators—unusually long or high-volume queries to one domain, not standard CDN traffic",
            "PCAP purpose questions—full packet capture preserves forensic evidence, not employee performance data",
          ],
          quiz: [
            {
              id: "network-traffic-analysis-q1",
              prompt: "What traffic pattern may indicate malware command-and-control beaconing?",
              choices: [
                { id: "a", text: "Regular, periodic connections to an external host at fixed intervals" },
                { id: "b", text: "A single large inbound patch download" },
                { id: "c", text: "Standard DHCP discovery broadcasts" },
                { id: "d", text: "NTP time synchronization" },
              ],
              correctChoiceId: "a",
              explanation:
                "Beaconing shows consistent timed callbacks from compromised hosts to C2 infrastructure.",
            },
            {
              id: "network-traffic-analysis-q2",
              prompt: "Which tool provides flow metadata such as source, destination, and bytes without full packets?",
              choices: [
                { id: "a", text: "NetFlow/IPFIX" },
                { id: "b", text: "Active Directory" },
                { id: "c", text: "BIOS settings" },
                { id: "d", text: "Printer drivers" },
              ],
              correctChoiceId: "a",
              explanation:
                "NetFlow and IPFIX export connection metadata useful for anomaly detection at scale.",
            },
            {
              id: "network-traffic-analysis-q3",
              prompt: "Why monitor east-west traffic inside a network?",
              choices: [
                { id: "a", text: "To detect lateral movement between internal systems" },
                { id: "b", text: "To configure public DNS records" },
                { id: "c", text: "To replace endpoint antivirus" },
                { id: "d", text: "To manage employee badges" },
              ],
              correctChoiceId: "a",
              explanation:
                "Attackers pivot between internal hosts; east-west monitoring reveals lateral movement.",
            },
            {
              id: "network-traffic-analysis-q4",
              prompt: "What analysis approach is useful when TLS encrypts packet payloads?",
              choices: [
                { id: "a", text: "Metadata analysis of connections, certificates, and timing" },
                { id: "b", text: "Ignoring all encrypted traffic" },
                { id: "c", text: "Disabling TLS globally" },
                { id: "d", text: "Reading plaintext HTTP only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Connection metadata, JA3 fingerprints, and certificate details reveal anomalies even without decryption.",
            },
            {
              id: "network-traffic-analysis-q5",
              prompt: "What does PCAP provide during an investigation?",
              choices: [
                { id: "a", text: "Full packet capture for detailed forensic analysis" },
                { id: "b", text: "Employee performance reviews" },
                { id: "c", text: "Patch deployment schedules" },
                { id: "d", text: "Hardware warranty information" },
              ],
              correctChoiceId: "a",
              explanation:
                "Packet captures preserve raw network evidence for reconstructing attacker activity.",
            },
          ],
          flashcards: [
            {
              id: "network-traffic-analysis-f1",
              front: "What is beaconing?",
              back: "Regular periodic outbound connections that may indicate C2 activity",
            },
            {
              id: "network-traffic-analysis-f2",
              front: "What does NetFlow provide?",
              back: "Flow metadata (IPs, ports, bytes, duration) without full packet contents",
            },
            {
              id: "network-traffic-analysis-f3",
              front: "Why is east-west monitoring important?",
              back: "It detects lateral movement that perimeter-only monitoring misses",
            },
            {
              id: "network-traffic-analysis-f4",
              front: "What is beaconing?",
              back: "Periodic outbound connections at regular intervals—common C2 behavior",
            },
            {
              id: "network-traffic-analysis-f5",
              front: "What does NetFlow provide?",
              back: "Flow metadata: source/dest IP, ports, bytes, and timestamps without full payloads",
            },
          ],
          objectives: ["CS0-003-2.1","CS0-003-2.2"],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          externalResources: [
            {
              id: "wireshark-nta",
              name: "Wireshark",
              url: "https://www.wireshark.org/",
              cost: "free",
              platform: "any",
              installNotes: "Use Wireshark with a sample pcap for traffic analysis labs.",
            }
          ],
          assignments: [
            {
              id: "cysa-wireshark-beacon-lab",
              title: "Lab: Identify Beaconing in Wireshark",
              type: "external-lab",
              instructions: "1. Open Wireshark and load a provided sample pcap (or capture lab traffic).\n2. Use Statistics > Conversations to find hosts with regular interval connections.\n3. Filter for DNS or HTTPS sessions repeating every 60–300 seconds.\n4. Document one internal host communicating with an unusual external IP.\n5. Note packet size consistency that may indicate C2 channel heartbeat.",
              estimatedMinutes: 40,
              externalResourceId: "wireshark-nta",
              completionCriteria: ["Identified periodic outbound connection pattern","Documented suspicious external destination","Exported one filtered view as evidence"],
              relatedTopicIds: ["network-traffic-analysis"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "network-traffic-analysis-qb1",
              prompt: "What metadata helps analyze encrypted HTTPS traffic?",
              choices: [
                { id: "a", text: "SNI, certificates, JA3 fingerprints, and flow timing" },
                { id: "b", text: "Plaintext HTTP bodies only" },
                { id: "c", text: "Employee names" },
                { id: "d", text: "Printer status" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"SNI, certificates, JA3 fingerprints, and flow timing\". Review the lesson for full context.",
            },
            {
              id: "network-traffic-analysis-qb2",
              prompt: "What indicates DNS tunneling?",
              choices: [
                { id: "a", text: "Unusually long or high-volume DNS queries to one domain" },
                { id: "b", text: "Standard NTP sync" },
                { id: "c", text: "DHCP discover broadcasts" },
                { id: "d", text: "Legitimate CDN traffic" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Unusually long or high-volume DNS queries to one domain\". Review the lesson for full context.",
            },
            {
              id: "network-traffic-analysis-qb3",
              prompt: "Why capture east-west traffic?",
              choices: [
                { id: "a", text: "Detect lateral movement between internal systems" },
                { id: "b", text: "Configure public DNS" },
                { id: "c", text: "Manage badge access" },
                { id: "d", text: "Schedule backups" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Detect lateral movement between internal systems\". Review the lesson for full context.",
            },
            {
              id: "network-traffic-analysis-qb4",
              prompt: "What is full packet capture used for?",
              choices: [
                { id: "a", text: "Detailed forensic analysis of payloads and headers" },
                { id: "b", text: "Employee reviews" },
                { id: "c", text: "Patch deployment" },
                { id: "d", text: "License tracking" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Detailed forensic analysis of payloads and headers\". Review the lesson for full context.",
            },
            {
              id: "network-traffic-analysis-qb5",
              prompt: "What does an IDS signature detect?",
              choices: [
                { id: "a", text: "Known attack patterns in network traffic" },
                { id: "b", text: "Office seating charts" },
                { id: "c", text: "Payroll errors" },
                { id: "d", text: "Hardware warranties" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Known attack patterns in network traffic\". Review the lesson for full context.",
            }
          ],
        },
        {
          id: "endpoint-detection",
          name: "Endpoint Detection",
          lesson: {
            title: "Endpoint Detection and Response",
            content: `Endpoint Detection and Response (EDR) platforms monitor workstations, servers, and cloud workloads for malicious activity through continuous telemetry collection and behavioral analysis. EDR goes beyond traditional antivirus by recording process, file, registry, network, and user activity for investigation and response.

Agents or agentless collectors forward events to a central console. Capabilities include threat detection, alert triage, process tree visualization, remote isolation, file quarantine, and live response (shell access, memory dump, artifact collection). Integration with SIEM and SOAR centralizes workflows.

EDR detects techniques like credential dumping, living-off-the-land binaries (LOLBins), persistence mechanisms, and ransomware encryption patterns. Behavioral models flag suspicious parent-child process relationships—such as Word spawning PowerShell—which signature AV may miss.

Deployment requires tuning exclusions for legitimate admin tools, managing agent performance impact, and ensuring coverage on all critical assets including servers and VDI. Cloud workload protection extends EDR to containers and serverless environments.

During incidents, EDR timelines reconstruct attacker actions minute by minute. Remote containment isolates compromised hosts while preserving volatile evidence for deeper forensic analysis.

EDR telemetry includes process trees, file hashes, registry modifications, network connections from endpoints, and script block logging. Memory forensics and live response collections preserve volatile artifacts without full disk imaging when time-critical.

Tune EDR policies by role: developers may need broader script execution while finance workstations enforce stricter application control. Review exclusions quarterly—attackers abuse trusted paths like temp directories and signed binaries. Combine EDR with network and identity signals for multi-domain correlation.`,
          },
          keyFacts: [
            "EDR continuously collects endpoint telemetry for detection and investigation",
            "EDR detects behavioral threats that signature-based antivirus may miss",
            "Live response enables remote artifact collection and host isolation",
            "Process tree analysis reveals parent-child execution chains",
            "LOLBins are legitimate tools abused by attackers (e.g., PowerShell, WMI)",
            "EDR integrates with SIEM and SOAR for centralized incident workflow",
          ],
          commonMistakes: [
            "Treating EDR as equivalent to signature-only antivirus without leveraging behavioral telemetry",
            "Creating over-broad exclusions that blind detection to LOLBin abuse (PowerShell, WMI, certutil)",
            "Isolating hosts with immediate disk wipes instead of preserving volatile evidence for live response",
            "Ignoring process tree analysis and focusing only on single-process alerts without parent-child context",
            "Deploying EDR agents on workstations but leaving critical servers and VDI hosts uncovered",
          ],
          examTraps: [
            "LOLBins vs malware file distractors—LOLBins are legitimate OS tools abused by attackers",
            "Remote isolation vs disk wipe scenarios—isolation contains spread while preserving forensic data",
            "EDR vs AV comparison questions—EDR uses behavioral telemetry and investigation, not signatures alone",
            "Process injection definitions—malicious code running inside another process's memory, not approved patching",
            "Live response purpose—remote collection of volatile forensic data, not rebooting all servers",
          ],
          quiz: [
            {
              id: "endpoint-detection-q1",
              prompt: "How does EDR differ from traditional signature-based antivirus?",
              choices: [
                { id: "a", text: "EDR focuses on behavioral telemetry and investigation, not just known signatures" },
                { id: "b", text: "EDR only scans email attachments" },
                { id: "c", text: "EDR replaces all network firewalls" },
                { id: "d", text: "EDR cannot isolate hosts" },
              ],
              correctChoiceId: "a",
              explanation:
                "EDR records detailed activity and detects anomalous behavior beyond static malware signatures.",
            },
            {
              id: "endpoint-detection-q2",
              prompt: "What is a LOLBin?",
              choices: [
                { id: "a", text: "A legitimate system binary abused for malicious purposes" },
                { id: "b", text: "A deprecated network protocol" },
                { id: "c", text: "A type of firewall rule" },
                { id: "d", text: "A cloud storage tier" },
              ],
              correctChoiceId: "a",
              explanation:
                "Living-off-the-land binaries like PowerShell or certutil are abused to evade detection.",
            },
            {
              id: "endpoint-detection-q3",
              prompt: "Which EDR capability stops spread while preserving evidence?",
              choices: [
                { id: "a", text: "Remote host isolation" },
                { id: "b", text: "Immediate disk wipe" },
                { id: "c", text: "Disabling all logging" },
                { id: "d", text: "Factory reset of the network" },
              ],
              correctChoiceId: "a",
              explanation:
                "Network isolation contains the threat while allowing forensic collection on the endpoint.",
            },
            {
              id: "endpoint-detection-q4",
              prompt: "What does process tree analysis help investigators understand?",
              choices: [
                { id: "a", text: "Parent-child execution relationships and attack chains" },
                { id: "b", text: "Office seating arrangements" },
                { id: "c", text: "DNS root server locations" },
                { id: "d", text: "Printer queue priorities" },
              ],
              correctChoiceId: "a",
              explanation:
                "Process trees show how malware launched child processes and spread on the endpoint.",
            },
            {
              id: "endpoint-detection-q5",
              prompt: "Why must EDR exclusions be carefully managed?",
              choices: [
                { id: "a", text: "Over-broad exclusions can blind detection to attacker abuse of trusted tools" },
                { id: "b", text: "Exclusions automatically patch all vulnerabilities" },
                { id: "c", text: "Exclusions replace SIEM correlation" },
                { id: "d", text: "Exclusions encrypt all disk volumes" },
              ],
              correctChoiceId: "a",
              explanation:
                "Attackers exploit whitelisted admin tools; excessive exclusions create detection gaps.",
            },
          ],
          flashcards: [
            {
              id: "endpoint-detection-f1",
              front: "What does EDR stand for?",
              back: "Endpoint Detection and Response",
            },
            {
              id: "endpoint-detection-f2",
              front: "What is a LOLBin example?",
              back: "PowerShell, WMI, or certutil — legitimate tools abused by attackers",
            },
            {
              id: "endpoint-detection-f3",
              front: "What EDR feature contains a compromised host?",
              back: "Remote network isolation",
            },
            {
              id: "endpoint-detection-f4",
              front: "What is a LOLBin?",
              back: "Living-off-the-land binary — legitimate OS tool abused by attackers",
            },
            {
              id: "endpoint-detection-f5",
              front: "What does EDR remote isolation do?",
              back: "Network-isolates a compromised host while preserving agent telemetry",
            },
          ],
          objectives: ["CS0-003-2.3"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "endpoint-detection-qb1",
              prompt: "How does EDR differ from traditional AV?",
              choices: [
                { id: "a", text: "Behavioral telemetry and investigation vs signature-only scanning" },
                { id: "b", text: "EDR only scans email" },
                { id: "c", text: "EDR replaces firewalls" },
                { id: "d", text: "EDR cannot collect process data" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Behavioral telemetry and investigation vs signature-only scanning\". Review the lesson for full context.",
            },
            {
              id: "endpoint-detection-qb2",
              prompt: "What is process injection?",
              choices: [
                { id: "a", text: "Running malicious code inside another process's memory" },
                { id: "b", text: "Installing approved patches" },
                { id: "c", text: "Rotating passwords" },
                { id: "d", text: "Updating antivirus definitions" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Running malicious code inside another process's memory\". Review the lesson for full context.",
            },
            {
              id: "endpoint-detection-qb3",
              prompt: "Why review EDR exclusions?",
              choices: [
                { id: "a", text: "Over-broad exclusions can blind detection to attacker activity" },
                { id: "b", text: "Exclusions improve detection automatically" },
                { id: "c", text: "Exclusions encrypt disks" },
                { id: "d", text: "Exclusions replace SIEM" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Over-broad exclusions can blind detection to attacker activity\". Review the lesson for full context.",
            },
            {
              id: "endpoint-detection-qb4",
              prompt: "What does a process tree show?",
              choices: [
                { id: "a", text: "Parent-child execution relationships across an attack chain" },
                { id: "b", text: "Office org chart" },
                { id: "c", text: "DNS hierarchy" },
                { id: "d", text: "Network topology only" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Parent-child execution relationships across an attack chain\". Review the lesson for full context.",
            },
            {
              id: "endpoint-detection-qb5",
              prompt: "What is live response?",
              choices: [
                { id: "a", text: "Remote collection of volatile forensic data from endpoints" },
                { id: "b", text: "Rebooting all servers" },
                { id: "c", text: "Deleting user accounts" },
                { id: "d", text: "Disabling all logging" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Remote collection of volatile forensic data from endpoints\". Review the lesson for full context.",
            }
          ],
        },
        {
          id: "malware-indicators",
          name: "Malware Indicators",
          lesson: {
            title: "Recognizing Malware Indicators",
            content: `Malware indicators are observable artifacts and behaviors that suggest malicious software is present or active. Analysts combine static, dynamic, and network indicators to detect, classify, and respond to infections across the environment.

Static indicators include file hashes (MD5, SHA-256), suspicious imports, packed or obfuscated code, unusual file extensions, and digital signature anomalies. Dynamic analysis observes runtime behavior: process injection, registry persistence keys, scheduled task creation, and unauthorized network connections.

Common malware categories include ransomware (encryption and ransom notes), trojans (disguised payloads), rootkits (kernel-level hiding), wipers (destructive deletion), and infostealers (credential and data theft). Each leaves distinct footprints—ransomware creates mass file renames; infostealers exfiltrate browser credentials.

Network indicators include connections to known C2 domains, DNS queries for DGA-generated names, and unusual User-Agent strings. Memory artifacts may reveal injected code or unpacked payloads invisible on disk.

Analysts use sandboxes, YARA rules, and threat intel feeds to automate identification. False positives arise from legitimate admin tools—context matters. Containment, eradication, and recovery follow confirmation, with IOCs shared to block related threats organization-wide.

Sandbox detonation runs suspicious files in isolated environments, capturing API calls, registry changes, and network callbacks. Cuckoo, ANY.RUN, and vendor cloud sandboxes automate dynamic analysis at scale. Compare sandbox output with production EDR telemetry to confirm active threats versus dormant samples.

Fileless malware leverages PowerShell, WMI, and living-off-the-land binaries (LOLBins) to evade traditional AV. Behavioral detections focus on command-line arguments, parent-child anomalies, and encoded payloads rather than file signatures alone.`,
          },
          keyFacts: [
            "Static indicators include file hashes, signatures, and code structure anomalies",
            "Dynamic analysis observes runtime behavior like injection and persistence",
            "Ransomware encrypts files; infostealers exfiltrate credentials and data",
            "C2 communication and DGA domains are key network malware indicators",
            "YARA rules pattern-match suspicious file content",
            "Always validate indicators in context to avoid false positives",
          ],
          commonMistakes: [
            "Confusing static indicators (hashes, file structure) with dynamic indicators (runtime behavior)",
            "Flagging legitimate admin tools as malware without checking parent process and command-line context",
            "Assuming fileless malware leaves no observable indicators—behavioral and network artifacts remain",
            "Treating all ransomware the same without distinguishing encryption patterns from wiper or infostealer behavior",
            "Blocking IOCs organization-wide without validating age, confidence, and potential business impact",
          ],
          examTraps: [
            "Static vs dynamic analysis distractors—hashes are static, process injection is dynamic",
            "Malware category scenarios—ransomware encrypts files, infostealers exfiltrate credentials, wipers destroy data",
            "Fileless malware questions—focus on PowerShell/WMI behavior, not traditional file signatures alone",
            "DGA and C2 network indicator traps—unusual DNS patterns and beaconing, not standard NTP traffic",
            "Sandbox vs production EDR confusion—sandbox detonates samples in isolation; EDR observes live endpoints",
          ],
          quiz: [
            {
              id: "malware-indicators-q1",
              prompt: "Which indicator is considered static malware analysis?",
              choices: [
                { id: "a", text: "SHA-256 file hash of a suspicious executable" },
                { id: "b", text: "Observed network beaconing at runtime" },
                { id: "c", text: "Process injection during execution" },
                { id: "d", text: "Registry key created after launch" },
              ],
              correctChoiceId: "a",
              explanation:
                "Static analysis examines file properties without executing the sample, including hashes.",
            },
            {
              id: "malware-indicators-q2",
              prompt: "What behavior is most associated with ransomware?",
              choices: [
                { id: "a", text: "Mass file encryption and ransom demand" },
                { id: "b", text: "Only passive network scanning" },
                { id: "c", text: "Legitimate Windows Update downloads" },
                { id: "d", text: "BIOS firmware upgrades" },
              ],
              correctChoiceId: "a",
              explanation:
                "Ransomware encrypts victim files and typically displays a ransom note for decryption keys.",
            },
            {
              id: "malware-indicators-q3",
              prompt: "What does DGA stand for in malware context?",
              choices: [
                { id: "a", text: "Domain Generation Algorithm" },
                { id: "b", text: "Dynamic Group Authorization" },
                { id: "c", text: "Data Governance Audit" },
                { id: "d", text: "Digital Gateway Access" },
              ],
              correctChoiceId: "a",
              explanation:
                "DGAs generate many domain names algorithmically to evade static C2 blocklists.",
            },
            {
              id: "malware-indicators-q4",
              prompt: "What tool uses pattern matching to identify suspicious file content?",
              choices: [
                { id: "a", text: "YARA" },
                { id: "b", text: "NTP" },
                { id: "c", text: "SMTP" },
                { id: "d", text: "FTP" },
              ],
              correctChoiceId: "a",
              explanation:
                "YARA rules define textual or binary patterns to classify and detect malware samples.",
            },
            {
              id: "malware-indicators-q5",
              prompt: "Which runtime behavior suggests process injection?",
              choices: [
                { id: "a", text: "Malicious code executing inside another process's memory space" },
                { id: "b", text: "Standard user login via keyboard" },
                { id: "c", text: "Scheduled antivirus definition update" },
                { id: "d", text: "Display brightness adjustment" },
              ],
              correctChoiceId: "a",
              explanation:
                "Process injection hides malicious code within legitimate processes to evade detection.",
            },
          ],
          flashcards: [
            {
              id: "malware-indicators-f1",
              front: "Static vs dynamic malware analysis?",
              back: "Static examines files without execution; dynamic observes runtime behavior",
            },
            {
              id: "malware-indicators-f2",
              front: "What is DGA?",
              back: "Domain Generation Algorithm — malware technique to generate C2 domain names",
            },
            {
              id: "malware-indicators-f3",
              front: "What tool pattern-matches malware with custom rules?",
              back: "YARA",
            },
            {
              id: "malware-indicators-f4",
              front: "Static vs dynamic malware analysis?",
              back: "Static examines files without execution; dynamic observes runtime behavior in sandboxes",
            },
            {
              id: "malware-indicators-f5",
              front: "What is fileless malware?",
              back: "Malware operating in memory via scripts and LOLBins without traditional file drops",
            },
          ],
          objectives: ["CS0-003-2.4"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "cysa-malware-classifier",
              title: "Malware Type Classifier Drill",
              type: "simulator",
              instructions: "Classify malware samples and behaviors into types such as ransomware, trojan, worm, and rootkit based on indicators provided.",
              estimatedMinutes: 12,
              simulatorId: "malware-classifier",
              completionCriteria: ["Score 70% or higher","Review misclassified malware types"],
              relatedTopicIds: ["malware-indicators"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "malware-indicators-qb1",
              prompt: "What is a static indicator?",
              choices: [
                { id: "a", text: "File hash or string observable without executing malware" },
                { id: "b", text: "Runtime network beacon only" },
                { id: "c", text: "User typing speed" },
                { id: "d", text: "Monitor brightness" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"File hash or string observable without executing malware\". Review the lesson for full context.",
            },
            {
              id: "malware-indicators-qb2",
              prompt: "What behavior suggests ransomware?",
              choices: [
                { id: "a", text: "Mass file encryption with ransom demand" },
                { id: "b", text: "Passive DNS lookup" },
                { id: "c", text: "Windows Update download" },
                { id: "d", text: "NTP sync" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Mass file encryption with ransom demand\". Review the lesson for full context.",
            },
            {
              id: "malware-indicators-qb3",
              prompt: "What does YARA detect?",
              choices: [
                { id: "a", text: "Pattern matches in files using custom rules" },
                { id: "b", text: "Cable length" },
                { id: "c", text: "Office temperature" },
                { id: "d", text: "DHCP scope size" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Pattern matches in files using custom rules\". Review the lesson for full context.",
            },
            {
              id: "malware-indicators-qb4",
              prompt: "What is a sandbox used for?",
              choices: [
                { id: "a", text: "Safe detonation and observation of suspicious files" },
                { id: "b", text: "Physical shipping containers" },
                { id: "c", text: "Email archiving" },
                { id: "d", text: "VPN termination" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Safe detonation and observation of suspicious files\". Review the lesson for full context.",
            },
            {
              id: "malware-indicators-qb5",
              prompt: "What does DGA enable?",
              choices: [
                { id: "a", text: "Malware to generate many C2 domains algorithmically" },
                { id: "b", text: "Disk encryption" },
                { id: "c", text: "Password hashing" },
                { id: "d", text: "Patch management" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Malware to generate many C2 domains algorithmically\". Review the lesson for full context.",
            }
          ],
        },
      ],
    },
    {
      id: "vulnerability-risk",
      name: "Vulnerability and Risk Management",
      topics: [
        {
          id: "vulnerability-management",
          name: "Vulnerability Management",
          lesson: {
            title: "Vulnerability Management Lifecycle",
            content: `Vulnerability management is a continuous cycle of discovering, prioritizing, remediating, and verifying security weaknesses across assets. Unlike one-time scans, mature programs integrate with asset inventory, patch management, and risk scoring to focus effort where impact is highest.

Discovery uses authenticated and unauthenticated scanners (Nessus, Qualys, OpenVAS), agent-based assessments, and cloud configuration checks. Results include CVE identifiers, CVSS scores, affected software versions, and proof-of-concept exploitability. False positives require validation before assigning work.

Prioritization goes beyond raw CVSS. Contextual factors include asset criticality, exposure (internet-facing vs internal), exploit availability (CISA KEV catalog, EPSS scores), and compensating controls. A medium CVE on a public web server may outrank a critical CVE on an isolated lab machine.

Remediation paths include patching, configuration hardening, network segmentation, and virtual patching via WAF/IPS. SLAs define timelines by severity tier. Verification rescans confirm fixes; regression tracking ensures closed vulnerabilities stay closed.

Reporting communicates status to IT teams, management, and auditors. Metrics track mean time to remediate (MTTR), scan coverage, and overdue findings. Integration with CMDB and change management prevents blind spots when new assets deploy.

Patch Tuesday cycles and emergency out-of-band patches require communication between vulnerability teams and change management. Maintenance windows, rollback plans, and staged rollouts reduce outage risk on critical systems. Virtual patching via WAF or IPS rules buys time when immediate patching is impossible.

Asset discovery must include shadow IT, containers, and ephemeral cloud instances. Unscanned assets represent unknown risk. Track vulnerability age and SLA breaches in dashboards visible to IT leadership. Integrate pen test and bug bounty findings into the same prioritization workflow as scanner results.`,
          },
          keyFacts: [
            "Vulnerability management is a continuous discover-prioritize-remediate-verify cycle",
            "CVSS scores measure severity; contextual prioritization considers asset exposure",
            "CISA KEV and EPSS highlight actively exploited vulnerabilities",
            "Authenticated scans provide deeper results than unauthenticated scans",
            "Verification rescans confirm remediation effectiveness",
            "CMDB integration ensures new assets enter the scanning scope",
          ],
          commonMistakes: [
            "Prioritizing solely by CVSS base score without considering asset exposure and exploit availability",
            "Closing vulnerability tickets without verification rescans to confirm fixes were applied",
            "Relying on unauthenticated scans when authenticated scans would reveal missing patches",
            "Ignoring CISA KEV and EPSS when ranking which CVEs to remediate first",
            "Failing to include shadow IT, containers, and ephemeral cloud assets in scan scope",
          ],
          examTraps: [
            "Lifecycle order questions—discover, prioritize, remediate, verify (not verify first or scan once)",
            "Medium CVSS on internet-facing vs critical on isolated lab—contextual risk beats CVSS alone",
            "CISA KEV purpose—known exploited vulnerabilities requiring priority patching, not keyboard vendors",
            "Virtual patching distractors—WAF/IPS interim protection when immediate patching is impossible",
            "MTTR in vulnerability context—mean time to remediate findings, not mean time to respond to incidents",
          ],
          quiz: [
            {
              id: "vulnerability-management-q1",
              prompt: "What is the correct order of the vulnerability management lifecycle?",
              choices: [
                { id: "a", text: "Discover, prioritize, remediate, verify" },
                { id: "b", text: "Verify, ignore, discover, deploy" },
                { id: "c", text: "Remediate, discover, delete, reboot" },
                { id: "d", text: "Report, hide, scan once, archive" },
              ],
              correctChoiceId: "a",
              explanation:
                "The cycle finds weaknesses, ranks them by risk, fixes them, and confirms resolution.",
            },
            {
              id: "vulnerability-management-q2",
              prompt: "Why prioritize a medium CVSS vulnerability on an internet-facing server over a critical CVE on an isolated lab?",
              choices: [
                { id: "a", text: "Contextual risk considers exposure and asset criticality, not CVSS alone" },
                { id: "b", text: "CVSS is always ignored" },
                { id: "c", text: "Lab systems are always highest priority" },
                { id: "d", text: "Internet-facing systems never need patching" },
              ],
              correctChoiceId: "a",
              explanation:
                "Real-world prioritization weighs exploitability, exposure, and business impact beyond base scores.",
            },
            {
              id: "vulnerability-management-q3",
              prompt: "What does the CISA KEV catalog list?",
              choices: [
                { id: "a", text: "Known exploited vulnerabilities actively used in attacks" },
                { id: "b", text: "Approved keyboard vendors" },
                { id: "c", text: "Cloud region availability" },
                { id: "d", text: "Employee vacation schedules" },
              ],
              correctChoiceId: "a",
              explanation:
                "The Known Exploited Vulnerabilities catalog prioritizes flaws with confirmed active exploitation.",
            },
            {
              id: "vulnerability-management-q4",
              prompt: "Why perform authenticated vulnerability scans?",
              choices: [
                { id: "a", text: "They provide deeper visibility into installed software and missing patches" },
                { id: "b", text: "They require no credentials by design" },
                { id: "c", text: "They only scan network cables" },
                { id: "d", text: "They disable all logging" },
              ],
              correctChoiceId: "a",
              explanation:
                "Authenticated scans log into systems to enumerate patches and configurations accurately.",
            },
            {
              id: "vulnerability-management-q5",
              prompt: "What is the purpose of a verification rescan after remediation?",
              choices: [
                { id: "a", text: "Confirm the vulnerability is actually resolved" },
                { id: "b", text: "Introduce new vulnerabilities" },
                { id: "c", text: "Replace the CMDB" },
                { id: "d", text: "Disable patch management" },
              ],
              correctChoiceId: "a",
              explanation:
                "Rescanning validates that fixes were applied correctly and the finding is closed.",
            },
          ],
          flashcards: [
            {
              id: "vulnerability-management-f1",
              front: "What are the four vulnerability management phases?",
              back: "Discover, prioritize, remediate, verify",
            },
            {
              id: "vulnerability-management-f2",
              front: "What does CISA KEV track?",
              back: "Known Exploited Vulnerabilities with confirmed active exploitation",
            },
            {
              id: "vulnerability-management-f3",
              front: "Why use authenticated scans?",
              back: "They reveal installed patches and misconfigurations with greater accuracy",
            },
            {
              id: "vulnerability-management-f4",
              front: "What is virtual patching?",
              back: "Interim protection via WAF/IPS rules when immediate software patching is not possible",
            },
            {
              id: "vulnerability-management-f5",
              front: "What does EPSS estimate?",
              back: "Exploit Prediction Scoring System — probability a CVE will be exploited in the wild",
            },
          ],
          objectives: ["CS0-003-3.1"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          questionBank: [
            {
              id: "vulnerability-management-qb1",
              prompt: "What does CVSS measure?",
              choices: [
                { id: "a", text: "Vulnerability severity on a standardized scale" },
                { id: "b", text: "Employee satisfaction" },
                { id: "c", text: "Network bandwidth" },
                { id: "d", text: "Office square footage" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Vulnerability severity on a standardized scale\". Review the lesson for full context.",
            },
            {
              id: "vulnerability-management-qb2",
              prompt: "Why rescan after remediation?",
              choices: [
                { id: "a", text: "Verify the vulnerability is actually fixed" },
                { id: "b", text: "Introduce new flaws" },
                { id: "c", text: "Replace CMDB" },
                { id: "d", text: "Disable scanning" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Verify the vulnerability is actually fixed\". Review the lesson for full context.",
            },
            {
              id: "vulnerability-management-qb3",
              prompt: "What is the CISA KEV catalog?",
              choices: [
                { id: "a", text: "List of known exploited vulnerabilities requiring priority patching" },
                { id: "b", text: "Keyboard vendor list" },
                { id: "c", text: "Cloud region map" },
                { id: "d", text: "Email retention policy" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"List of known exploited vulnerabilities requiring priority patching\". Review the lesson for full context.",
            },
            {
              id: "vulnerability-management-qb4",
              prompt: "What is MTTR in vulnerability context?",
              choices: [
                { id: "a", text: "Mean time to remediate findings" },
                { id: "b", text: "Maximum transfer rate" },
                { id: "c", text: "Monthly ticket rotation" },
                { id: "d", text: "Minimum threshold routing" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Mean time to remediate findings\". Review the lesson for full context.",
            },
            {
              id: "vulnerability-management-qb5",
              prompt: "Why integrate scanning with CMDB?",
              choices: [
                { id: "a", text: "Ensure all assets are in scope for discovery" },
                { id: "b", text: "Eliminate patch testing" },
                { id: "c", text: "Disable authentication" },
                { id: "d", text: "Remove change control" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Ensure all assets are in scope for discovery\". Review the lesson for full context.",
            }
          ],
        },
        {
          id: "risk-analysis",
          name: "Risk Analysis",
          lesson: {
            title: "Security Risk Analysis",
            content: `Risk analysis quantifies the potential impact of threats against organizational assets to guide security investments and control selection. It answers: what could go wrong, how likely is it, and what would it cost?

Risk is commonly expressed as a function of threat, vulnerability, and impact. Qualitative analysis uses scales (low/medium/high) for rapid assessments. Quantitative analysis assigns monetary values—ALE, SLE, ARO—to calculate annualized loss expectancy and ROI of controls.

Frameworks like NIST RMF, ISO 27005, and FAIR provide structured approaches. Asset identification and valuation precede threat modeling and control gap analysis. Residual risk remains after controls are applied; management accepts or transfers (insurance) remaining exposure.

Threat modeling techniques include STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), attack trees, and MITRE ATT&CK mapping. Risk registers document findings, owners, mitigation plans, and review dates.

Analysts communicate risk in business terms—not just technical jargon. A risk heat map visualizes likelihood versus impact for leadership decisions. Continuous monitoring and reassessment adapt to new threats, acquisitions, and architecture changes.

Business impact analysis (BIA) identifies critical processes and recovery time objectives (RTO) that inform control investment. Third-party risk assessments evaluate vendor security posture through questionnaires, SOC 2 reports, and continuous monitoring feeds.

Risk treatment options are accept, avoid, transfer (insurance), or mitigate. Document risk acceptance signatures from authorized executives when residual risk exceeds appetite. Reassess risk when architecture changes—cloud migrations, mergers, and remote work shifts often invalidate prior assessments.`,
          },
          keyFacts: [
            "Risk combines threat likelihood, vulnerability, and business impact",
            "ALE = SLE × ARO (Annualized Loss Expectancy = Single Loss × Annual Rate)",
            "Qualitative analysis uses descriptive scales; quantitative uses monetary values",
            "STRIDE is a threat modeling framework for identifying design risks",
            "Residual risk remains after controls; management decides acceptance or transfer",
            "Risk registers track findings, owners, mitigations, and review schedules",
          ],
          commonMistakes: [
            "Confusing ALE calculation—must multiply SLE by ARO, not add or divide unrelated metrics",
            "Treating residual risk as zero once any control is implemented",
            "Using qualitative scales when the exam scenario explicitly requires quantitative dollar values",
            "Confusing STRIDE categories—Spoofing is 'S', not Scanning or Storage",
            "Failing to document executive risk acceptance when residual risk exceeds appetite",
          ],
          examTraps: [
            "ALE formula traps—SLE × ARO, not CVSS × EPS or MTTR ÷ MTTD",
            "Residual vs inherent risk—residual remains after controls, inherent is before controls",
            "Qualitative vs quantitative distractors—descriptive scales vs monetary SLE/ALE calculations",
            "STRIDE letter mapping—Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation",
            "Risk treatment options—accept, avoid, transfer, or mitigate; elimination is not a standard option",
          ],
          quiz: [
            {
              id: "risk-analysis-q1",
              prompt: "How is Annualized Loss Expectancy (ALE) calculated?",
              choices: [
                { id: "a", text: "SLE × ARO (Single Loss Expectancy × Annual Rate of Occurrence)" },
                { id: "b", text: "CVSS × EPS" },
                { id: "c", text: "MTTR ÷ MTTD" },
                { id: "d", text: "Number of employees × password length" },
              ],
              correctChoiceId: "a",
              explanation:
                "ALE estimates expected yearly loss by multiplying single incident cost by occurrence frequency.",
            },
            {
              id: "risk-analysis-q2",
              prompt: "What does the 'S' in STRIDE stand for?",
              choices: [
                { id: "a", text: "Spoofing" },
                { id: "b", text: "Scanning" },
                { id: "c", text: "Storage" },
                { id: "d", text: "Subnetting" },
              ],
              correctChoiceId: "a",
              explanation:
                "STRIDE covers Spoofing, Tampering, Repudiation, Information disclosure, DoS, and Elevation of privilege.",
            },
            {
              id: "risk-analysis-q3",
              prompt: "What is residual risk?",
              choices: [
                { id: "a", text: "Risk remaining after controls are applied" },
                { id: "b", text: "Risk before any controls exist" },
                { id: "c", text: "Risk transferred to DNS providers" },
                { id: "d", text: "Risk eliminated entirely by insurance" },
              ],
              correctChoiceId: "a",
              explanation:
                "Residual risk is the exposure left after mitigation; organizations accept, transfer, or further reduce it.",
            },
            {
              id: "risk-analysis-q4",
              prompt: "Which analysis type assigns monetary values to losses?",
              choices: [
                { id: "a", text: "Quantitative risk analysis" },
                { id: "b", text: "Qualitative risk analysis only" },
                { id: "c", text: "Cable labeling" },
                { id: "d", text: "Badge printing" },
              ],
              correctChoiceId: "a",
              explanation:
                "Quantitative analysis uses financial metrics like SLE and ALE for cost-based decisions.",
            },
            {
              id: "risk-analysis-q5",
              prompt: "What tool visualizes likelihood versus impact for leadership?",
              choices: [
                { id: "a", text: "Risk heat map" },
                { id: "b", text: "Network topology diagram only" },
                { id: "c", text: "Org chart" },
                { id: "d", text: "Printer queue" },
              ],
              correctChoiceId: "a",
              explanation:
                "Heat maps plot risks by likelihood and impact to prioritize management attention.",
            },
          ],
          flashcards: [
            {
              id: "risk-analysis-f1",
              front: "How is ALE calculated?",
              back: "ALE = SLE × ARO",
            },
            {
              id: "risk-analysis-f2",
              front: "What does STRIDE stand for?",
              back: "Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege",
            },
            {
              id: "risk-analysis-f3",
              front: "What is residual risk?",
              back: "Risk remaining after security controls are implemented",
            },
            {
              id: "risk-analysis-f4",
              front: "What is ALE?",
              back: "Annualized Loss Expectancy = Single Loss Expectancy × Annual Rate of Occurrence",
            },
            {
              id: "risk-analysis-f5",
              front: "What are risk treatment options?",
              back: "Accept, avoid, transfer (insurance), or mitigate",
            },
          ],
          objectives: ["CS0-003-3.2","CS0-003-3.3"],
          practiceType: ["reading","quiz","flashcard","simulator","case-study"],
          assignments: [
            {
              id: "cysa-risk-prioritization",
              title: "Risk & Vulnerability Prioritization Drill",
              type: "simulator",
              instructions: "Rank vulnerabilities and risks by contextual priority considering exposure, asset criticality, and active exploitation—not CVSS alone.",
              estimatedMinutes: 15,
              simulatorId: "risk-prioritization-drill",
              completionCriteria: ["Score 70% or higher","Review ranking rationale for missed items"],
              relatedTopicIds: ["risk-analysis","vulnerability-management"],
              order: 1,
            }
          ],
          questionBank: [
            {
              id: "risk-analysis-qb1",
              prompt: "What is qualitative risk analysis?",
              choices: [
                { id: "a", text: "Using descriptive scales like low/medium/high" },
                { id: "b", text: "Calculating exact dollar losses only" },
                { id: "c", text: "Ignoring threats" },
                { id: "d", text: "Scanning cables" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Using descriptive scales like low/medium/high\". Review the lesson for full context.",
            },
            {
              id: "risk-analysis-qb2",
              prompt: "What does STRIDE help with?",
              choices: [
                { id: "a", text: "Threat modeling during design and architecture review" },
                { id: "b", text: "Subnet calculation" },
                { id: "c", text: "DNS configuration" },
                { id: "d", text: "Printer setup" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Threat modeling during design and architecture review\". Review the lesson for full context.",
            },
            {
              id: "risk-analysis-qb3",
              prompt: "What is a risk register?",
              choices: [
                { id: "a", text: "Document tracking risks, owners, mitigations, and review dates" },
                { id: "b", text: "Employee attendance log" },
                { id: "c", text: "Firewall firmware list" },
                { id: "d", text: "DHCP lease table" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Document tracking risks, owners, mitigations, and review dates\". Review the lesson for full context.",
            },
            {
              id: "risk-analysis-qb4",
              prompt: "What is residual risk?",
              choices: [
                { id: "a", text: "Risk remaining after controls are applied" },
                { id: "b", text: "Risk before any controls" },
                { id: "c", text: "Zero risk state" },
                { id: "d", text: "Compliance audit score" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Risk remaining after controls are applied\". Review the lesson for full context.",
            },
            {
              id: "risk-analysis-qb5",
              prompt: "Why communicate risk in business terms?",
              choices: [
                { id: "a", text: "Enable leadership decisions on investment and acceptance" },
                { id: "b", text: "Hide impact from executives" },
                { id: "c", text: "Eliminate technical controls" },
                { id: "d", text: "Disable monitoring" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Enable leadership decisions on investment and acceptance\". Review the lesson for full context.",
            }
          ],
        },
      ],
    },
    {
      id: "incident-reporting",
      name: "Incident Response and Reporting",
      topics: [
        {
          id: "incident-response",
          name: "Incident Response",
          lesson: {
            title: "Incident Response Lifecycle",
            content: `Incident response is the organized approach to addressing and managing security breaches or attacks. The goal is to limit damage, reduce recovery time, and preserve evidence for potential legal action. NIST SP 800-61 defines phases: preparation, detection and analysis, containment, eradication and recovery, and post-incident activity.

Preparation establishes policies, runbooks, communication plans, forensic tools, and trained personnel before incidents occur. Detection and analysis validate alerts, determine scope, and classify severity. Containment stops spread—short-term (network isolation) and long-term (patching, credential resets).

Eradication removes attacker presence: delete malware, close exploited vulnerabilities, and revoke compromised accounts. Recovery restores systems from clean backups, validates integrity, and monitors for re-entry. Post-incident reviews document lessons learned, update controls, and improve detection rules.

Chain of custody preserves evidence integrity for legal proceedings. Document who collected evidence, when, where, and how it was stored. Coordination with legal, HR, PR, and law enforcement may be required depending on breach scope and regulatory obligations (GDPR, HIPAA).

Effective response balances speed with evidence preservation. Premature reboots or cleanup can destroy forensic artifacts needed for root cause analysis.

Incident classification tiers (P1–P4) drive response SLAs and escalation paths. P1 incidents may trigger war rooms with CISO, legal, and executive participation. Communication templates prepare holding statements for customers and regulators before crises occur.

Forensic imaging uses write blockers and verified hashes to preserve disk evidence. Volatile data collection captures RAM, network connections, and running processes before shutdown. Coordinate with HR and legal for insider threat cases involving employee workstations and privacy considerations.`,
          },
          keyFacts: [
            "NIST IR phases: preparation, detection/analysis, containment, eradication/recovery, post-incident",
            "Short-term containment isolates threats; long-term containment applies durable fixes",
            "Chain of custody documents evidence handling for legal admissibility",
            "Eradication removes attacker artifacts; recovery restores normal operations",
            "Post-incident reviews drive process and detection improvements",
            "Avoid destructive actions that erase forensic evidence before collection",
          ],
          guidedExample: {
            title: "Respond to a Suspected Ransomware Outbreak on a File Server",
            steps: [
              "Detection and analysis: validate the EDR alert showing mass file renames (.locked extension) and confirm scope across FS-PROD-01.",
              "Short-term containment: network-isolate FS-PROD-01 via EDR while preserving disk and memory for volatile collection.",
              "Collect volatile evidence: capture running processes, network connections, and RAM dump before any reboot or cleanup.",
              "Long-term containment: disable compromised service accounts, block known C2 IPs at the firewall, and snapshot backup integrity.",
              "Eradication and recovery: remove malware artifacts, restore files from verified clean backups, and patch the exploited vulnerability.",
              "Post-incident: document chain of custody, conduct lessons-learned review, and update detection rules for the ransomware TTPs observed.",
            ],
          },
          commonMistakes: [
            "Rebooting or wiping systems before collecting volatile forensic evidence",
            "Confusing containment (stop spread) with eradication (remove attacker presence)",
            "Skipping chain of custody documentation during evidence collection",
            "Performing eradication before confirming scope, allowing attackers to persist on undiscovered hosts",
            "Treating post-incident activity as optional instead of driving detection and process improvements",
          ],
          examTraps: [
            "NIST IR phase mapping—runbooks and training belong to Preparation, not Containment or Recovery",
            "Premature reboot scenarios—volatile memory artifacts are lost, hindering root cause analysis",
            "Short-term vs long-term containment—isolation is short-term; patching and credential resets are long-term",
            "Chain of custody purpose—evidence integrity for legal admissibility, not network bandwidth management",
            "Eradication vs recovery distractors—eradication removes malware; recovery restores normal operations from clean backups",
          ],
          realWorldScenario: "At 03:00 your SIEM fires alerts for encrypted file extensions across three finance department workstations. You activate the ransomware runbook, isolate the hosts via EDR without rebooting, collect volatile memory dumps, and escalate to Tier 3. Legal and PR are notified per the communication plan while Tier 2 traces lateral movement through SMB logs. After eradication from clean backups, the post-incident review adds a new correlation rule for the observed encryption TTP and schedules a tabletop exercise for the executive team.",
          estimatedStudyMinutes: 40,
          difficulty: "medium",
          prerequisites: ["security-operations"],
          quiz: [
            {
              id: "incident-response-q1",
              prompt: "Which NIST incident response phase includes creating runbooks and training teams?",
              choices: [
                { id: "a", text: "Preparation" },
                { id: "b", text: "Containment" },
                { id: "c", text: "Eradication" },
                { id: "d", text: "Recovery only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Preparation builds capabilities, policies, and tools before an incident occurs.",
            },
            {
              id: "incident-response-q2",
              prompt: "What is the primary goal of containment?",
              choices: [
                { id: "a", text: "Stop the incident from spreading while preserving evidence" },
                { id: "b", text: "Immediately wipe all disks without documentation" },
                { id: "c", text: "Publish details on social media first" },
                { id: "d", text: "Disable all monitoring permanently" },
              ],
              correctChoiceId: "a",
              explanation:
                "Containment limits blast radius while maintaining evidence for investigation.",
            },
            {
              id: "incident-response-q3",
              prompt: "What does chain of custody document?",
              choices: [
                { id: "a", text: "Who handled evidence, when, and how it was stored" },
                { id: "b", text: "Employee lunch schedules" },
                { id: "c", text: "Network cable lengths" },
                { id: "d", text: "Software license keys only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Chain of custody tracks evidence integrity from collection through legal proceedings.",
            },
            {
              id: "incident-response-q4",
              prompt: "Which action belongs to the eradication phase?",
              choices: [
                { id: "a", text: "Removing malware and closing exploited vulnerabilities" },
                { id: "b", text: "Initial alert triage only" },
                { id: "c", text: "Writing the quarterly budget" },
                { id: "d", text: "Designing office layouts" },
              ],
              correctChoiceId: "a",
              explanation:
                "Eradication eliminates attacker presence and addresses root cause vulnerabilities.",
            },
            {
              id: "incident-response-q5",
              prompt: "Why should analysts avoid rebooting a compromised system prematurely?",
              choices: [
                { id: "a", text: "It may destroy volatile forensic evidence in memory" },
                { id: "b", text: "It automatically patches all CVEs" },
                { id: "c", text: "It blocks all network traffic permanently" },
                { id: "d", text: "It is required by chain of custody" },
              ],
              correctChoiceId: "a",
              explanation:
                "Memory-resident artifacts are lost on reboot, hindering root cause analysis.",
            },
          ],
          flashcards: [
            {
              id: "incident-response-f1",
              front: "Name the five NIST IR phases.",
              back: "Preparation, detection/analysis, containment, eradication/recovery, post-incident",
            },
            {
              id: "incident-response-f2",
              front: "What is chain of custody?",
              back: "Documented record of evidence possession, transfer, and storage",
            },
            {
              id: "incident-response-f3",
              front: "Containment vs eradication?",
              back: "Containment stops spread; eradication removes attacker presence and fixes root cause",
            },
            {
              id: "incident-response-f4",
              front: "What is short-term containment?",
              back: "Immediate isolation actions to stop incident spread (e.g., network quarantine)",
            },
            {
              id: "incident-response-f5",
              front: "Why avoid premature disk wipes?",
              back: "Destroys forensic evidence needed for root cause and legal proceedings",
            },
          ],
          objectives: ["CS0-003-4.1","CS0-003-4.2"],
          practiceType: ["reading","quiz","flashcard","simulator","case-study"],
          questionBank: [
            {
              id: "incident-response-qb1",
              prompt: "Which IR phase builds runbooks and trains teams?",
              choices: [
                { id: "a", text: "Preparation" },
                { id: "b", text: "Containment" },
                { id: "c", text: "Eradication" },
                { id: "d", text: "Post-incident only" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Preparation\". Review the lesson for full context.",
            },
            {
              id: "incident-response-qb2",
              prompt: "What is eradication?",
              choices: [
                { id: "a", text: "Removing attacker presence and closing exploited vulnerabilities" },
                { id: "b", text: "Initial alert triage" },
                { id: "c", text: "Executive reporting only" },
                { id: "d", text: "Marketing response" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Removing attacker presence and closing exploited vulnerabilities\". Review the lesson for full context.",
            },
            {
              id: "incident-response-qb3",
              prompt: "What does chain of custody protect?",
              choices: [
                { id: "a", text: "Evidence integrity for legal admissibility" },
                { id: "b", text: "Network bandwidth" },
                { id: "c", text: "Employee privacy in all cases" },
                { id: "d", text: "Software licensing" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Evidence integrity for legal admissibility\". Review the lesson for full context.",
            },
            {
              id: "incident-response-qb4",
              prompt: "Why collect volatile data first?",
              choices: [
                { id: "a", text: "Memory-resident artifacts are lost on reboot" },
                { id: "b", text: "It reduces storage needs" },
                { id: "c", text: "It disables attackers automatically" },
                { id: "d", text: "It replaces disk imaging" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Memory-resident artifacts are lost on reboot\". Review the lesson for full context.",
            },
            {
              id: "incident-response-qb5",
              prompt: "What happens in post-incident activity?",
              choices: [
                { id: "a", text: "Lessons learned, report writing, and control improvements" },
                { id: "b", text: "Immediate public disclosure only" },
                { id: "c", text: "Permanent logging disable" },
                { id: "d", text: "All systems wiped without review" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Lessons learned, report writing, and control improvements\". Review the lesson for full context.",
            },
            {
              id: "incident-response-qb6",
              prompt: "What is short-term containment?",
              choices: [
                { id: "a", text: "Immediate actions like network isolation to stop incident spread" },
                { id: "b", text: "Permanent system decommissioning" },
                { id: "c", text: "Executive budget approval" },
                { id: "d", text: "Quarterly compliance audit" }
              ],
              correctChoiceId: "a",
              explanation: "Short-term containment uses rapid isolation to limit blast radius while investigation continues.",
            },
            {
              id: "incident-response-qb7",
              prompt: "Why use write blockers during forensic imaging?",
              choices: [
                { id: "a", text: "Prevent modification of original evidence during disk acquisition" },
                { id: "b", text: "Increase network throughput" },
                { id: "c", text: "Encrypt backup tapes" },
                { id: "d", text: "Disable attacker C2 channels" }
              ],
              correctChoiceId: "a",
              explanation: "Write blockers preserve evidence integrity by preventing changes to the source disk.",
            },
            {
              id: "incident-response-qb8",
              prompt: "What distinguishes eradication from recovery?",
              choices: [
                { id: "a", text: "Eradication removes attacker presence; recovery restores normal operations" },
                { id: "b", text: "They are identical phases" },
                { id: "c", text: "Recovery happens before detection" },
                { id: "d", text: "Eradication is only for paper records" }
              ],
              correctChoiceId: "a",
              explanation: "Eradication eliminates malware and closes exploited paths; recovery rebuilds systems from clean state.",
            }
          ],
        },
        {
          id: "reporting",
          name: "Reporting",
          lesson: {
            title: "Security Reporting and Communication",
            content: `Security reporting translates technical findings into clear, actionable communication for stakeholders at every level. Effective reports support decision-making, regulatory compliance, and continuous improvement across the organization.

Report types vary by audience. Executive summaries highlight business risk, trend direction, and resource needs in non-technical language. Technical reports detail IOCs, attack timelines, affected systems, and remediation steps for IT and SOC teams. Compliance reports map controls to frameworks (NIST, ISO 27001, PCI DSS) for auditors.

An incident report typically includes: executive summary, incident classification, timeline, scope of impact, root cause, actions taken, lessons learned, and recommendations. Objectivity and factual language matter—avoid speculation presented as certainty. Attach evidence references and preserve confidentiality classifications.

Metrics dashboards track KPIs: open vulnerabilities by severity, MTTD/MTTR, phishing click rates, patch compliance, and alert volumes. Trend analysis shows whether security posture is improving or degrading over time.

Regulatory notification may require reporting breaches within defined timeframes (e.g., 72 hours under GDPR). Legal review ensures statements do not create unnecessary liability. Clear communication with customers, partners, and regulators maintains trust during crises.

After-action reports (AARs) capture what happened, what worked, and what failed during incidents. Feed AAR recommendations into detection engineering, training, and budget requests. Trend reporting shows quarter-over-quarter movement in vulnerability backlog, phishing resilience, and control maturity scores.

Stakeholder communication during active incidents follows need-to-know principles—premature disclosure can tip attackers or create legal exposure. Legal privilege reviews sensitive breach communications. Tabletop exercises test reporting workflows before real events stress teams.`,
          },
          keyFacts: [
            "Tailor reports to audience: executives need risk summaries; engineers need technical detail",
            "Incident reports include timeline, scope, root cause, actions, and lessons learned",
            "Compliance reports map controls to frameworks like NIST, ISO 27001, or PCI DSS",
            "Use objective, factual language and distinguish confirmed facts from hypotheses",
            "Regulatory breaches may require notification within strict deadlines (e.g., GDPR 72 hours)",
            "Metrics dashboards track KPIs like MTTD, MTTR, and vulnerability remediation rates",
          ],
          commonMistakes: [
            "Sending technical packet dumps to executives instead of business risk summaries",
            "Presenting unverified hypotheses as confirmed facts in incident reports",
            "Missing regulatory notification deadlines by delaying legal review entirely",
            "Using identical report formats for auditors, executives, and SOC engineers",
            "Skipping after-action reports and losing opportunities to improve detection and training",
          ],
          examTraps: [
            "Executive vs technical report distractors—executives need business risk, engineers need IOCs and timelines",
            "GDPR notification timing—72 hours after becoming aware, not 30 days or one year",
            "Compliance report purpose—evidence of control alignment with frameworks, not replacement for scanning",
            "Confirmed facts vs hypotheses scenarios—reports must distinguish verified events from speculation",
            "AAR vs incident report confusion—AAR captures lessons learned post-incident; incident report documents the event itself",
          ],
          quiz: [
            {
              id: "reporting-q1",
              prompt: "What should an executive security report emphasize?",
              choices: [
                { id: "a", text: "Business risk, trends, and resource needs in non-technical terms" },
                { id: "b", text: "Raw packet hex dumps" },
                { id: "c", text: "Every SIEM parser configuration" },
                { id: "d", text: "Individual employee passwords" },
              ],
              correctChoiceId: "a",
              explanation:
                "Leadership needs concise risk context and decisions, not deep technical artifacts.",
            },
            {
              id: "reporting-q2",
              prompt: "Which element is essential in a formal incident report?",
              choices: [
                { id: "a", text: "Timeline of events and scope of impact" },
                { id: "b", text: "Personal opinions without evidence" },
                { id: "c", text: "Unrelated marketing content" },
                { id: "d", text: "Deleted log references" },
              ],
              correctChoiceId: "a",
              explanation:
                "Timelines and impact scope are core components for understanding and responding to incidents.",
            },
            {
              id: "reporting-q3",
              prompt: "Under GDPR, breach notification to regulators is generally required within:",
              choices: [
                { id: "a", text: "72 hours of becoming aware" },
                { id: "b", text: "30 days with no exceptions" },
                { id: "c", text: "One year" },
                { id: "d", text: "No notification is ever required" },
              ],
              correctChoiceId: "a",
              explanation:
                "GDPR mandates notification to supervisory authorities within 72 hours when feasible.",
            },
            {
              id: "reporting-q4",
              prompt: "What is the purpose of a compliance report?",
              choices: [
                { id: "a", text: "Demonstrate alignment with regulatory or framework control requirements" },
                { id: "b", text: "Replace all incident response activities" },
                { id: "c", text: "Eliminate the need for vulnerability scanning" },
                { id: "d", text: "Configure network switches" },
              ],
              correctChoiceId: "a",
              explanation:
                "Compliance reports evidence control implementation for auditors and regulators.",
            },
            {
              id: "reporting-q5",
              prompt: "Why distinguish confirmed facts from hypotheses in reports?",
              choices: [
                { id: "a", text: "To maintain accuracy and avoid misleading stakeholders" },
                { id: "b", text: "To increase report length unnecessarily" },
                { id: "c", text: "To hide root cause details" },
                { id: "d", text: "To bypass legal review" },
              ],
              correctChoiceId: "a",
              explanation:
                "Clear separation prevents decisions based on unverified assumptions during crises.",
            },
          ],
          flashcards: [
            {
              id: "reporting-f1",
              front: "What belongs in an incident report?",
              back: "Timeline, scope, root cause, actions taken, lessons learned, recommendations",
            },
            {
              id: "reporting-f2",
              front: "GDPR breach notification deadline?",
              back: "72 hours after becoming aware of the breach",
            },
            {
              id: "reporting-f3",
              front: "Executive vs technical reports?",
              back: "Executives get business risk summaries; engineers get IOCs and remediation detail",
            },
            {
              id: "reporting-f4",
              front: "What is an after-action report (AAR)?",
              back: "Post-incident review documenting what happened, what worked, and improvements",
            },
            {
              id: "reporting-f5",
              front: "What KPIs do security dashboards track?",
              back: "MTTD, MTTR, open vulnerabilities, patch compliance, alert volumes",
            },
          ],
          objectives: ["CS0-003-4.3"],
          practiceType: ["reading","quiz","flashcard","case-study"],
          questionBank: [
            {
              id: "reporting-qb1",
              prompt: "What should executive reports emphasize?",
              choices: [
                { id: "a", text: "Business risk and trends in non-technical language" },
                { id: "b", text: "Raw packet hex dumps" },
                { id: "c", text: "Every parser configuration" },
                { id: "d", text: "Employee passwords" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Business risk and trends in non-technical language\". Review the lesson for full context.",
            },
            {
              id: "reporting-qb2",
              prompt: "What belongs in an incident report timeline?",
              choices: [
                { id: "a", text: "Chronological sequence of confirmed events" },
                { id: "b", text: "Speculation presented as fact" },
                { id: "c", text: "Unrelated marketing" },
                { id: "d", text: "Deleted log references" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Chronological sequence of confirmed events\". Review the lesson for full context.",
            },
            {
              id: "reporting-qb3",
              prompt: "Why involve legal in breach communications?",
              choices: [
                { id: "a", text: "Manage liability and regulatory obligations" },
                { id: "b", text: "Eliminate need for technical detail" },
                { id: "c", text: "Delay all notifications indefinitely" },
                { id: "d", text: "Disable incident response" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Manage liability and regulatory obligations\". Review the lesson for full context.",
            },
            {
              id: "reporting-qb4",
              prompt: "What is a compliance report?",
              choices: [
                { id: "a", text: "Evidence of control alignment with frameworks and regulations" },
                { id: "b", text: "Replacement for vulnerability scanning" },
                { id: "c", text: "Network topology diagram only" },
                { id: "d", text: "Employee satisfaction survey" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Evidence of control alignment with frameworks and regulations\". Review the lesson for full context.",
            },
            {
              id: "reporting-qb5",
              prompt: "What is MTTR in reporting context?",
              choices: [
                { id: "a", text: "Mean time to respond to and resolve incidents" },
                { id: "b", text: "Maximum transfer rate" },
                { id: "c", text: "Monthly ticket ratio" },
                { id: "d", text: "Minimum threshold routing" }
              ],
              correctChoiceId: "a",
              explanation: "The correct answer is \"Mean time to respond to and resolve incidents\". Review the lesson for full context.",
            }
          ],
        },
      ],
    },
  ],
};
