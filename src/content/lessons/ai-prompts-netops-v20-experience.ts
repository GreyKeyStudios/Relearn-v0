import type { TopicExperience } from "@/content/types";

/** LES — CCNA v2.0 5.2 Select generative-AI prompts for network operations. */
export const AI_PROMPTS_NETOPS_V20_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro",
      type: "hero",
      tcpLayer: 4,
      headline: "Select prompts for network operations.",
      body: "CCNA v2.0 objective 5.2 is a select skill: choose a generative-AI prompt that supports network operations using data classification, output format, persona, and instructions. This is not creative writing or model-tuning class.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "Net ops task" },
          { icon: "monitor", label: "Prompt select" },
        ],
      },
      terms: [
        {
          id: "prompt-select",
          label: "Select (v2.0 5.2)",
          tier: "basics",
          shortDefinition:
            "Choose among prompts for generative AI that assist network operations using named components.",
        },
      ],
    },
    {
      id: "components",
      type: "teach",
      tcpLayer: 4,
      headline: "Four official components.",
      body: "When you select a prompt, look for: (1) data classification — what may be shared, (2) output format — bullets, table, checklist, (3) persona — e.g. network ops assistant, (4) instructions — the concrete ops ask. Missing pieces fail the objective.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Classification" },
          { icon: "monitor", label: "Format" },
          { icon: "server", label: "Persona" },
          { icon: "monitor", label: "Instructions" },
        ],
      },
    },
    {
      id: "components-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — components",
      checkpointQuestionId: "ai-prompts-v20-q2",
    },
    {
      id: "netops",
      type: "teach",
      tcpLayer: 4,
      headline: "Stay inside Cisco network-ops use cases.",
      body: "Good scenarios: interface CRC triage, ACL review drafts, change-window verification checklists, sanitized OSPF neighbor summaries. Bad scenarios: temperature/top-k trivia, poetry, or dumping enable secrets and full credentialed configs.",
      studyTip: {
        title: "Safety",
        body: "Never paste enable secrets, TACACS keys, or customer PII into prompts.",
      },
    },
    {
      id: "worked",
      type: "teach",
      tcpLayer: 4,
      headline: "Worked example — CRC triage prompt.",
      body: "Weak: 'fix my network.' Strong: 'As a network ops assistant, using only non-secret interface counters (internal), output a three-bullet root-cause hypothesis in markdown focused on L1/L2 causes.' Persona + classification + format + instructions.",
    },
    {
      id: "select-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — select the prompt",
      checkpointQuestionId: "ai-prompts-v20-q1",
    },
    {
      id: "misconception",
      type: "misconception",
      tcpLayer: 4,
      headline: "Misconception: any chat question is fine.",
      body: "Chat habits transfer poorly. Unstructured 'why is it broken?' or generic LLM-tuning advice is not enough. Official 5.2 requires the four components for network-operations assistance.",
    },
    {
      id: "remediation",
      type: "teach",
      tcpLayer: 4,
      headline: "Remediation — rewrite the ops prompt.",
      body: "Take a weak Cisco ticket question (CRC triage or ACL review) and rewrite it with data classification, output format, persona, and instructions. Reject secret leaks and temperature/top-k essays.",
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 4,
      headline: "You can select v2.0 5.2 prompts.",
      body: "Pick network-ops prompts that include the four official components. Keep examples Cisco-relevant. Leave generic AI prompting and ethics essays for other courses.",
    },
  ],
};
