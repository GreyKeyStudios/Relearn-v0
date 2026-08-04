/**
 * Learner-facing CCNA v2.0 vertical slices (batch-1 elevations).
 * Objectives use only 200-301-v2.0/* IDs. Pilot progress keys stay on topic ids.
 */

import type { Topic } from "@/content/types";
import { IPV4_TROUBLESHOOT_V20_EXPERIENCE } from "@/content/lessons/ipv4-troubleshoot-v20-experience";
import { AI_PROMPTS_NETOPS_V20_EXPERIENCE } from "@/content/lessons/ai-prompts-netops-v20-experience";
import { ccnaV20ObjectiveId } from "@/content/production/objectives/ccna-200-301-v2.0";

const OBJ_1_3 = ccnaV20ObjectiveId("1.3");
const OBJ_5_2 = ccnaV20ObjectiveId("5.2");

export const IPV4_TROUBLESHOOT_V20_TOPIC: Topic = {
  id: "ipv4-troubleshoot-v20",
  name: "IPv4 Troubleshoot (CCNA v2.0)",
  objectivesVersion: "v2.0",
  pathwayBadge: "v2.0 live slice · 1.3",
  prerequisites: ["ipv4-addressing", "subnetting"],
  estimatedStudyMinutes: 40,
  difficulty: "medium",
  practiceType: ["reading", "quiz", "flashcard", "simulator"],
  objectives: [OBJ_1_3],
  lightbulbMoment:
    "Troubleshoot asks why the host cannot talk — not only how to calculate the subnet.",
  lesson: {
    title: "Troubleshoot IPv4 addressing, assignment, and subnetting",
    content: `Official CCNA 200-301 v2.0 objective 1.3: Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private).

Read host and device evidence (ipconfig, interface state, design notes). Distinguish public vs private context. Diagnose mask, gateway, and duplicate assignment faults. Do not treat RFC 1918 private addresses as inherently broken on an internal LAN.

This elevation sits beside the existing configure/verify foundation topics (ipv4-addressing, subnetting). Completing those topics does not silently award v2.0 1.3 mastery — this topic uses 200-301-v2.0/1.3 objective IDs only.`,
    experience: IPV4_TROUBLESHOOT_V20_EXPERIENCE,
  },
  keyFacts: [
    "v2.0 1.3 verb is Troubleshoot (configuration, assignment, subnetting)",
    "Public vs private is context — private LANs are valid",
    "Gateway outside the host subnet = assignment/subnetting fault",
    "Wrong mask can place the gateway in another subnet half",
    "Duplicate IPv4 shows as conflict / flapping ARP",
    "Mastery uses the existing quiz/simulator/SRS engine — no second scoring system",
  ],
  guidedExample: {
    title: "Gateway outside /24 — assignment fault",
    steps: [
      "Host: 192.168.10.50/24; gateway 192.168.11.1; private LAN expected.",
      "Compute that .11.1 is outside the /24 — assignment/subnetting fault.",
      "Reject 'private addresses are illegal' as the root cause.",
      "Confirm interface state is up before blaming L2 loops.",
    ],
  },
  commonMistakes: [
    "Marking RFC 1918 private addresses as inherently misconfigured",
    "Stopping after subnet math without checking gateway placement",
    "Blaming OSPF/STP for a pure addressing ticket",
  ],
  examTraps: [
    "Private ≠ broken on an internal LAN",
    "Troubleshoot depth — not configure-only wording",
    "Public WAN next-hop must match the public handoff",
  ],
  realWorldScenario:
    "A branch laptop shows 192.168.10.50/24 with gateway 192.168.11.1. Users cannot reach the file server. You triage assignment/subnetting before opening a routing ticket.",
  teacherReflectionPrompt:
    "Explain aloud how you would prove a gateway is outside a host's subnet using only ipconfig and prefix math.",
  quiz: [
    {
      id: "ipv4-tv20-q1",
      prompt:
        "A host uses 192.168.10.50/24 but its gateway is 192.168.11.1. What is the most likely IPv4 fault class?",
      choices: [
        { id: "a", text: "Private addresses are illegal" },
        { id: "b", text: "Subnet/gateway assignment mismatch" },
        { id: "c", text: "Missing OSPFv3 process" },
        { id: "d", text: "BPDU guard misconfiguration" },
      ],
      correctChoiceId: "b",
      explanation:
        "Gateway is outside the /24 subnet — an assignment/subnetting troubleshoot case, not a private-address ban.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
      misconceptionChoiceIds: ["a"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
    {
      id: "ipv4-tv20-q2",
      prompt:
        "How does official v2.0 1.3 differ most clearly from typical v1.1 configure/verify IPv4 wording?",
      choices: [
        { id: "a", text: "It removes private addressing entirely" },
        {
          id: "b",
          text: "It emphasizes troubleshoot of configuration/assignment/subnetting (public and private)",
        },
        { id: "c", text: "It requires BGP" },
        { id: "d", text: "It only covers IPv6" },
      ],
      correctChoiceId: "b",
      explanation:
        "Transition classification is greater practical depth toward troubleshoot.",
      objectiveId: OBJ_1_3,
      difficulty: "easy",
    },
    {
      id: "ipv4-tv20-q3",
      prompt:
        "ipconfig shows 10.1.1.50/24 with gateway 10.1.2.1 on an internal LAN. Is 'private = broken' correct?",
      choices: [
        { id: "a", text: "Yes — 10.x can never work" },
        {
          id: "b",
          text: "No — primary fault is subnet/gateway mismatch; private addressing is fine",
        },
        { id: "c", text: "Yes — only public addresses are allowed on LANs" },
        { id: "d", text: "No fault exists" },
      ],
      correctChoiceId: "b",
      explanation:
        "10.1.2.1 is outside 10.1.1.0/24. Private space is expected; fix assignment.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
      misconceptionChoiceIds: ["a", "c"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
    {
      id: "ipv4-tv20-q4",
      prompt:
        "Two MACs flap for 172.16.5.20 in the router ARP table. Primary IPv4 fault?",
      choices: [
        { id: "a", text: "Duplicate IPv4 assignment" },
        { id: "b", text: "172.16 private space is invalid" },
        { id: "c", text: "BPDU filter missing" },
        { id: "d", text: "JSON schema error" },
      ],
      correctChoiceId: "a",
      explanation: "Flapping ARP for one IP indicates duplicate assignment.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
    {
      id: "ipv4-tv20-q5",
      prompt:
        "A phone at 192.168.40.50 with mask /30 cannot reach gateway 192.168.40.1 on a /24 voice VLAN. Why?",
      choices: [
        { id: "a", text: "Wrong mask places the phone and gateway in different subnets" },
        { id: "b", text: "192.168 addresses are illegal" },
        { id: "c", text: "OSPFv3 RID conflict" },
        { id: "d", text: "WPA3 passphrase mismatch" },
      ],
      correctChoiceId: "a",
      explanation:
        "/30 containing .50 is .48–.51; gateway .1 is outside that block.",
      objectiveId: OBJ_1_3,
      difficulty: "hard",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
  ],
  flashcards: [
    {
      id: "ipv4-tv20-f1",
      front: "v2.0 1.3 primary verb?",
      back: "Troubleshoot (configuration, assignment, subnetting — public and private)",
    },
    {
      id: "ipv4-tv20-f2",
      front: "Are private IPv4 addresses illegal on a LAN?",
      back: "No — RFC 1918 is valid internally; troubleshoot assignment/subnetting first",
    },
    {
      id: "ipv4-tv20-f3",
      front: "Gateway 192.168.11.1 with host /24 on 192.168.10.0 means?",
      back: "Subnet/gateway assignment mismatch",
    },
    {
      id: "ipv4-tv20-f4",
      front: "Flapping ARP for one IP suggests?",
      back: "Duplicate IPv4 assignment",
    },
    {
      id: "ipv4-tv20-f5",
      front: "Does finishing subnetting auto-complete v2.0 1.3?",
      back: "No — v2.0 objective IDs are separate; no silent credit from v1.1/pilot topics",
    },
    {
      id: "ipv4-tv20-f6",
      front: "Evidence to gather first on an IPv4 ticket?",
      back: "Host IP/mask/gateway, design subnet, interface state",
    },
  ],
  questionBank: [
    {
      id: "ipv4-tv20-b1",
      prompt: "Official v2.0 1.3 includes which addressing scopes?",
      choices: [
        { id: "a", text: "Public and private" },
        { id: "b", text: "IPv6 only" },
        { id: "c", text: "Multicast only" },
        { id: "d", text: "APIPA only" },
      ],
      correctChoiceId: "a",
      explanation: "The parent line names public and private.",
      objectiveId: OBJ_1_3,
      difficulty: "easy",
    },
    {
      id: "ipv4-tv20-b2",
      prompt: "Healthy private LAN with working pings — intern says 10.x is broken. Your call?",
      choices: [
        { id: "a", text: "No IPv4 fault — private LAN is intentional" },
        { id: "b", text: "Renumber everything to public immediately" },
        { id: "c", text: "Disable the gateway" },
        { id: "d", text: "Enable BPDU filter" },
      ],
      correctChoiceId: "a",
      explanation: "Private addressing on an internal LAN with working reachability is not a fault.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
    {
      id: "ipv4-tv20-b3",
      prompt: "WAN Gi0/0 is 203.0.113.10/30 but next-hop is 10.255.255.1. Fault class?",
      choices: [
        { id: "a", text: "Public/private context — next-hop must match the public /30" },
        { id: "b", text: "Private addresses are illegal on every LAN forever" },
        { id: "c", text: "Duplicate printer IP only" },
        { id: "d", text: "JSON token error" },
      ],
      correctChoiceId: "a",
      explanation: "WAN handoff is public; leftover private next-hop is a context/assignment fault.",
      objectiveId: OBJ_1_3,
      difficulty: "hard",
    },
    {
      id: "ipv4-tv20-b4",
      prompt: "Host mask /25 on a designed /24 with gateway in the lower half — failing upper hosts. Why?",
      choices: [
        { id: "a", text: "Wrong mask / prefix sizing" },
        { id: "b", text: "Private addresses cannot be used" },
        { id: "c", text: "STP root guard" },
        { id: "d", text: "DNS TTL" },
      ],
      correctChoiceId: "a",
      explanation: "The /25 splits the /24; gateway falls into the other half for upper hosts.",
      objectiveId: OBJ_1_3,
      difficulty: "hard",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
    {
      id: "ipv4-tv20-b5",
      prompt: "Which answer is guessing on an IPv4 addressing ticket?",
      choices: [
        { id: "a", text: "Blaming OSPFv3 RID with no routing evidence" },
        { id: "b", text: "Checking gateway vs host subnet" },
        { id: "c", text: "Comparing mask to design" },
        { id: "d", text: "Looking for duplicate ARP" },
      ],
      correctChoiceId: "a",
      explanation: "Unrelated protocol blame without evidence is guessing, not diagnosis.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
    },
    {
      id: "ipv4-tv20-b6",
      prompt: "Source linkage for this slice?",
      choices: [
        { id: "a", text: "Official Cisco 200-301 v2.0 exam topics (1.3)" },
        { id: "b", text: "Random blog only" },
        { id: "c", text: "Vendor marketing tweet" },
        { id: "d", text: "No source needed" },
      ],
      correctChoiceId: "a",
      explanation: "Claims track the official v2.0 objective wording.",
      objectiveId: OBJ_1_3,
      difficulty: "easy",
    },
    {
      id: "ipv4-tv20-b7",
      prompt: "Completing the live subnetting topic automatically masters 200-301-v2.0/1.3?",
      choices: [
        { id: "a", text: "False — objective IDs and progress stay separate" },
        { id: "b", text: "True — silent credit is intended" },
        { id: "c", text: "True — only for public addresses" },
        { id: "d", text: "True — only on weekends" },
      ],
      correctChoiceId: "a",
      explanation: "No silent v2.0 credit from loosely related v1.1/pilot progress.",
      objectiveId: OBJ_1_3,
      difficulty: "easy",
    },
    {
      id: "ipv4-tv20-b8",
      prompt: "First remediation when a learner picks 'private is illegal' on a LAN ticket?",
      choices: [
        {
          id: "a",
          text: "Public vs private triage — private valid; find assignment fault",
        },
        { id: "b", text: "Teach BGP communities" },
        { id: "c", text: "Disable all private ranges company-wide" },
        { id: "d", text: "Skip to wireless QoS" },
      ],
      correctChoiceId: "a",
      explanation: "Matches rem-v20-ipv4-public-private-triage.",
      objectiveId: OBJ_1_3,
      difficulty: "medium",
      misconceptionChoiceIds: ["c"],
      remediationActivityId: "rem-v20-ipv4-public-private-triage",
    },
  ],
  assignments: [
    {
      id: "ipv4-troubleshoot-v20-sim",
      title: "IPv4 Troubleshoot Evidence Drill",
      type: "simulator",
      instructions:
        "Open evidence panels (ipconfig, design, interface/ARP). Diagnose assignment, mask, duplicate, and public/private context faults. Guessing without evidence is scored wrong.",
      estimatedMinutes: 20,
      simulatorId: "ipv4-troubleshoot-drill",
      completionCriteria: ["Completed drill", "Score 80% or higher"],
      relatedTopicIds: ["ipv4-troubleshoot-v20"],
      order: 1,
    },
  ],
};

export const AI_PROMPTS_NETOPS_V20_TOPIC: Topic = {
  id: "ai-prompts-netops-v20",
  name: "AI Prompts for Net Ops (CCNA v2.0)",
  objectivesVersion: "v2.0",
  pathwayBadge: "v2.0 live slice · 5.2",
  prerequisites: [],
  estimatedStudyMinutes: 30,
  difficulty: "medium",
  practiceType: ["reading", "quiz", "flashcard", "simulator"],
  objectives: [OBJ_5_2],
  lightbulbMoment:
    "For network ops AI help, select prompts that state classification, format, persona, and instructions.",
  lesson: {
    title: "Select generative-AI prompts for network operations",
    content: `Official CCNA 200-301 v2.0 objective 5.2: Select a prompt to send to a generative AI system to support network operations considering prompt components such as data classification, output format, persona, and instructions.

Stay inside Cisco-relevant network operations (CRC triage, ACL review, change-window checks). Reject secret leaks and generic LLM-tuning advice. This topic is version-specific — it is not folded into the v1.1 automation-basics lesson. Objective IDs are 200-301-v2.0/5.2 only.`,
    experience: AI_PROMPTS_NETOPS_V20_EXPERIENCE,
  },
  keyFacts: [
    "Four components: data classification, output format, persona, instructions",
    "Use case = network operations assistance",
    "Reject prompts that paste secrets or PII",
    "Temperature/top-k trivia is out of scope",
    "Version-specific pathway — not shared-core with v1.1 6.x automation",
    "Mastery uses the existing engine thresholds",
  ],
  guidedExample: {
    title: "Select a prompt for interface-error triage",
    steps: [
      "Ops task: summarize likely causes of rising CRC errors on Gi0/1.",
      "Weak: 'fix my network' or paste of enable secret + full show run.",
      "Strong: persona=network ops assistant; data=non-secret counters (internal); format=three markdown bullets; instructions=L1/L2 hypotheses only.",
    ],
  },
  commonMistakes: [
    "Treating any natural-language chat as a good ops prompt",
    "Pasting enable secrets or credentialed configs",
    "Answering with temperature/top-k instead of prompt components",
  ],
  examTraps: [
    "Four named components — not model hyperparameters",
    "Network operations framing required",
    "Unsafe/leaky prompts fail",
  ],
  realWorldScenario:
    "A NOC analyst asks an AI assistant for help with CRC errors. You choose the prompt that keeps counters internal, sets a persona, and asks for a markdown bullet hypothesis — without pasting the enable secret.",
  teacherReflectionPrompt:
    "Name the four official prompt components and give one safe network-ops example for each.",
  quiz: [
    {
      id: "ai-prompts-v20-q1",
      prompt:
        "Which prompt best matches official v2.0 5.2 for a Cisco interface CRC triage task?",
      choices: [
        { id: "a", text: "fix my network" },
        {
          id: "b",
          text: "As a network ops assistant, using only non-secret interface counters (internal), output a three-bullet root-cause hypothesis in markdown focused on L1/L2 causes.",
        },
        { id: "c", text: "Paste the full enable secret and ask for ideas" },
        { id: "d", text: "Ignore classification and ask for any config" },
      ],
      correctChoiceId: "b",
      explanation:
        "It includes persona, data classification boundary, output format, and instructions for a network-operations use case.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
      misconceptionChoiceIds: ["a"],
      remediationActivityId: "rem-v20-prompt-components",
    },
    {
      id: "ai-prompts-v20-q2",
      prompt: "Which component set is named in official v2.0 objective 5.2?",
      choices: [
        {
          id: "a",
          text: "Data classification, output format, persona, and instructions",
        },
        { id: "b", text: "Only temperature and top-k" },
        { id: "c", text: "Only BGP communities" },
        { id: "d", text: "Only syslog facilities" },
      ],
      correctChoiceId: "a",
      explanation: "Those four components are explicit in the parent line.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-prompt-components",
    },
    {
      id: "ai-prompts-v20-q3",
      prompt: "A prompt asks for temperature and top-k to 'write better poetry about cables.' Valid for 5.2?",
      choices: [
        { id: "a", text: "No — generic LLM tuning / creative writing is out of scope" },
        { id: "b", text: "Yes — any AI tip counts" },
        { id: "c", text: "Yes — if the poem mentions OSPF" },
        { id: "d", text: "Yes — poetry is a network operation" },
      ],
      correctChoiceId: "a",
      explanation: "5.2 is network-ops prompt selection with four components.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
      misconceptionChoiceIds: ["b"],
      remediationActivityId: "rem-v20-prompt-components",
    },
    {
      id: "ai-prompts-v20-q4",
      prompt: "Which prompt fails data classification for an ACL review?",
      choices: [
        { id: "a", text: "Paste TACACS key and local usernames with the ACL" },
        {
          id: "b",
          text: "As a network ops assistant, using internal ACL lines only, output a markdown table of permit/deny gaps",
        },
        { id: "c", text: "Ask for two verification show commands after a sanitized ACL paste" },
        { id: "d", text: "Request a checklist with no secrets" },
      ],
      correctChoiceId: "a",
      explanation: "Secrets/credentials violate safe data classification.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
    },
    {
      id: "ai-prompts-v20-q5",
      prompt: "Is this topic shared-core with v1.1 automation-basics?",
      choices: [
        { id: "a", text: "No — version-specific v2.0 pathway (200-301-v2.0/5.2 only)" },
        { id: "b", text: "Yes — completing automation-basics auto-passes 5.2" },
        { id: "c", text: "Yes — same progress key" },
        { id: "d", text: "Yes — silent credit intended" },
      ],
      correctChoiceId: "a",
      explanation: "5.2 is version-specific; no silent credit from v1.1 automation.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
    },
  ],
  flashcards: [
    {
      id: "ai-prompts-v20-f1",
      front: "v2.0 5.2 prompt components?",
      back: "Data classification, output format, persona, instructions",
    },
    {
      id: "ai-prompts-v20-f2",
      front: "In-scope use case?",
      back: "Generative AI supporting network operations (not generic PE)",
    },
    {
      id: "ai-prompts-v20-f3",
      front: "Secret in a prompt?",
      back: "Fail — mishandles data classification",
    },
    {
      id: "ai-prompts-v20-f4",
      front: "Temperature/top-k as the answer?",
      back: "Out of scope for official 5.2",
    },
    {
      id: "ai-prompts-v20-f5",
      front: "Pathway classification?",
      back: "Version-specific v2.0 — not shared-core automation",
    },
    {
      id: "ai-prompts-v20-f6",
      front: "Weak prompt example?",
      back: "'fix my network' — missing the four components",
    },
  ],
  questionBank: [
    {
      id: "ai-prompts-v20-b1",
      prompt: "Best change-window prompt?",
      choices: [
        {
          id: "a",
          text: "As a network ops assistant, using a sanitized default-route snippet (internal), output a numbered pre-/post-change checklist",
        },
        { id: "b", text: "Dump the entire running-config including secrets" },
        { id: "c", text: "What temperature is best for creative writing?" },
        { id: "d", text: "help" },
      ],
      correctChoiceId: "a",
      explanation: "Four components + safe classification for a net-ops change task.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
      misconceptionChoiceIds: ["c", "d"],
      remediationActivityId: "rem-v20-prompt-components",
    },
    {
      id: "ai-prompts-v20-b2",
      prompt: "OSPFv2 EXSTART assist — pick the compliant prompt.",
      choices: [
        {
          id: "a",
          text: "As a network ops assistant, using sanitized neighbor lines (internal), output three bullets on likely mismatch classes in markdown",
        },
        { id: "b", text: "why OSPF broken?" },
        { id: "c", text: "Include the OSPF auth key for better answers" },
        { id: "d", text: "Tune top-p until confident" },
      ],
      correctChoiceId: "a",
      explanation: "Structured net-ops prompt; auth keys and tuning trivia fail.",
      objectiveId: OBJ_5_2,
      difficulty: "hard",
      misconceptionChoiceIds: ["b", "d"],
      remediationActivityId: "rem-v20-prompt-components",
    },
    {
      id: "ai-prompts-v20-b3",
      prompt: "Official objective id namespace for this slice?",
      choices: [
        { id: "a", text: "200-301-v2.0/5.2" },
        { id: "b", text: "CCNA-6.1 only" },
        { id: "c", text: "200-301-v1.1/6.4 as the live score key" },
        { id: "d", text: "No objective id" },
      ],
      correctChoiceId: "a",
      explanation: "Associations stay on v2.0 namespaced IDs.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
    },
    {
      id: "ai-prompts-v20-b4",
      prompt: "Persona example that fits 5.2?",
      choices: [
        { id: "a", text: "Network ops assistant / NOC analyst" },
        { id: "b", text: "Fantasy novelist" },
        { id: "c", text: "Stand-up comedian" },
        { id: "d", text: "Sports commentator" },
      ],
      correctChoiceId: "a",
      explanation: "Persona should support network operations.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
    },
    {
      id: "ai-prompts-v20-b5",
      prompt: "Data classification example?",
      choices: [
        { id: "a", text: "Internal interface counters only — no secrets" },
        { id: "b", text: "Paste all enable secrets by default" },
        { id: "c", text: "Ignore classification entirely" },
        { id: "d", text: "Share customer PII for context" },
      ],
      correctChoiceId: "a",
      explanation: "Classification bounds what the model may see.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
    },
    {
      id: "ai-prompts-v20-b6",
      prompt: "Output format example?",
      choices: [
        { id: "a", text: "Three markdown bullets or a numbered checklist" },
        { id: "b", text: "Whatever, stream of consciousness" },
        { id: "c", text: "Binary machine code only" },
        { id: "d", text: "No format constraint ever" },
      ],
      correctChoiceId: "a",
      explanation: "Official component: output format.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
    },
    {
      id: "ai-prompts-v20-b7",
      prompt: "Completing automation-basics silently completes 5.2?",
      choices: [
        { id: "a", text: "False" },
        { id: "b", text: "True" },
        { id: "c", text: "True on v1.1 dates only" },
        { id: "d", text: "True if score > 50%" },
      ],
      correctChoiceId: "a",
      explanation: "No silent cross-version credit.",
      objectiveId: OBJ_5_2,
      difficulty: "easy",
    },
    {
      id: "ai-prompts-v20-b8",
      prompt: "Remediation when learner chooses unstructured chat?",
      choices: [
        {
          id: "a",
          text: "Rewrite into a prompt with all four components; reject secrets",
        },
        { id: "b", text: "Teach VLSM only" },
        { id: "c", text: "Award full credit anyway" },
        { id: "d", text: "Switch to wireless QoS" },
      ],
      correctChoiceId: "a",
      explanation: "Matches rem-v20-prompt-components.",
      objectiveId: OBJ_5_2,
      difficulty: "medium",
      misconceptionChoiceIds: ["c"],
      remediationActivityId: "rem-v20-prompt-components",
    },
  ],
  assignments: [
    {
      id: "ai-prompts-netops-v20-sim",
      title: "AI Prompt Selection for Network Ops",
      type: "simulator",
      instructions:
        "Select prompts for CRC triage, ACL review, and change-window tasks. Require all four official components. Fail secret-leaking and generic LLM-tuning answers.",
      estimatedMinutes: 15,
      simulatorId: "ai-prompts-netops-drill",
      completionCriteria: ["Completed drill", "Score 80% or higher"],
      relatedTopicIds: ["ai-prompts-netops-v20"],
      order: 1,
    },
  ],
};

/** Topics to splice into live CCNA domains. */
export const CCNA_V20_VERTICAL_SLICE_TOPICS = {
  ipv4Troubleshoot: IPV4_TROUBLESHOOT_V20_TOPIC,
  aiPromptsNetops: AI_PROMPTS_NETOPS_V20_TOPIC,
} as const;
