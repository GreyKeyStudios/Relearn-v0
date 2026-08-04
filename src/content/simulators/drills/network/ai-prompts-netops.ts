/**
 * Generative-AI prompt selection scenarios for official CCNA v2.0 5.2.
 * Network-operations use cases only — not generic LLM tuning.
 */

export interface AiPromptOption {
  id: string;
  label: string;
  text: string;
  /** Has all four official components */
  hasAllComponents: boolean;
  leaksSecrets: boolean;
  genericLlmTuning: boolean;
}

export interface AiPromptScenario {
  id: string;
  task: string;
  context: string;
  prompts: AiPromptOption[];
  correctChoiceId: string;
  explanation: string;
  weakConcept: string;
  misconceptionChoiceIds: string[];
}

export const AI_PROMPTS_NETOPS_SCENARIOS: AiPromptScenario[] = [
  {
    id: "v20-5.2-crc",
    task: "Interface CRC triage",
    context:
      "Gi0/1 on access switch ASW1 shows rising CRC/input errors. You may share non-secret interface counters only.",
    prompts: [
      {
        id: "a",
        label: "A",
        text: "fix my network",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "b",
        label: "B",
        text: "As a network ops assistant, using only non-secret interface counters (internal), output a three-bullet root-cause hypothesis in markdown focused on L1/L2 causes for rising CRCs on Gi0/1.",
        hasAllComponents: true,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "c",
        label: "C",
        text: "Here is the enable secret cisco123 and full show run — tell me anything.",
        hasAllComponents: false,
        leaksSecrets: true,
        genericLlmTuning: false,
      },
      {
        id: "d",
        label: "D",
        text: "Set temperature=0.2 and top-k=40 so the model writes better poetry about cables.",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: true,
      },
    ],
    correctChoiceId: "b",
    explanation:
      "Official v2.0 5.2 requires selecting prompts with data classification, output format, persona, and instructions for network operations — not secret dumps or LLM-tuning trivia.",
    weakConcept: "Prompt components for network ops",
    misconceptionChoiceIds: ["a", "d"],
  },
  {
    id: "v20-5.2-acl",
    task: "ACL review draft",
    context:
      "You need a first-pass review of an ACL that should allow HTTPS to 10.0.0.0/8 and deny other IP. Share only the ACL lines (internal).",
    prompts: [
      {
        id: "a",
        label: "A",
        text: "As a network ops assistant, using the internal ACL lines only (no credentials), output a table of permit/deny gaps in markdown and list two verification show commands.",
        hasAllComponents: true,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "b",
        label: "B",
        text: "check this ACL",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "c",
        label: "C",
        text: "Paste TACACS key and local usernames so you can rewrite the ACL.",
        hasAllComponents: false,
        leaksSecrets: true,
        genericLlmTuning: false,
      },
      {
        id: "d",
        label: "D",
        text: "Explain transformer attention heads before looking at the ACL.",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: true,
      },
    ],
    correctChoiceId: "a",
    explanation:
      "The strong prompt sets persona, classification boundary, format, and instructions for an ACL ops task.",
    weakConcept: "Prompt components for ACL review",
    misconceptionChoiceIds: ["b", "d"],
  },
  {
    id: "v20-5.2-change",
    task: "Change-window checklist",
    context:
      "Friday night maintenance: swap a default route on the edge. You must avoid pasting full configs with passwords.",
    prompts: [
      {
        id: "a",
        label: "A",
        text: "Ignore classification and dump the entire running-config including secrets.",
        hasAllComponents: false,
        leaksSecrets: true,
        genericLlmTuning: false,
      },
      {
        id: "b",
        label: "B",
        text: "As a network ops assistant, using only a sanitized default-route snippet (internal), output a numbered pre-/post-change verification checklist in plain text.",
        hasAllComponents: true,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "c",
        label: "C",
        text: "What is the best temperature for creative writing?",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: true,
      },
      {
        id: "d",
        label: "D",
        text: "help",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
    ],
    correctChoiceId: "b",
    explanation:
      "Change-window assistance still needs the four official components and safe data classification.",
    weakConcept: "Safe network-ops prompt selection",
    misconceptionChoiceIds: ["c", "d"],
  },
  {
    id: "v20-5.2-ospf-adj",
    task: "OSPFv2 adjacency symptom summary",
    context:
      "Two routers stuck in EXSTART. Share only sanitized neighbor-state lines (internal).",
    prompts: [
      {
        id: "a",
        label: "A",
        text: "As a network ops assistant, using sanitized OSPF neighbor lines (internal), output three bullets naming likely mismatch classes (MTU/area/network type) in markdown.",
        hasAllComponents: true,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "b",
        label: "B",
        text: "Any natural-language question is fine — just ask 'why OSPF broken?'",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "c",
        label: "C",
        text: "Include the OSPF authentication key in the prompt for better answers.",
        hasAllComponents: false,
        leaksSecrets: true,
        genericLlmTuning: false,
      },
      {
        id: "d",
        label: "D",
        text: "Tune top-p and frequency penalty until it sounds confident.",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: true,
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Select structured network-ops prompts; unstructured chat and model-tuning tips fail official 5.2.",
    weakConcept: "Structured prompts vs chat habits",
    misconceptionChoiceIds: ["b", "d"],
  },
  {
    id: "v20-5.2-components-recall",
    task: "Component recognition",
    context: "Pick the prompt that names all four official v2.0 5.2 components in a net-ops framing.",
    prompts: [
      {
        id: "a",
        label: "A",
        text: "Persona: NOC analyst. Data classification: internal syslog excerpts only. Output format: two paragraphs. Instructions: propose next show commands for intermittent loss.",
        hasAllComponents: true,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
      {
        id: "b",
        label: "B",
        text: "Only temperature and top-k matter for CCNA AI questions.",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: true,
      },
      {
        id: "c",
        label: "C",
        text: "Paste customer PII from the ticket into the prompt for context.",
        hasAllComponents: false,
        leaksSecrets: true,
        genericLlmTuning: false,
      },
      {
        id: "d",
        label: "D",
        text: "Write a haiku about BGP.",
        hasAllComponents: false,
        leaksSecrets: false,
        genericLlmTuning: false,
      },
    ],
    correctChoiceId: "a",
    explanation:
      "Data classification, output format, persona, and instructions are the four components named in official 5.2.",
    weakConcept: "Four prompt components",
    misconceptionChoiceIds: ["b"],
  },
];
