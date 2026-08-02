import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({ id, prompt, choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }], correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.10", difficulty });

export const apCore2OpsBatch10Topics: Topic[] = [{
  id: "ap-ai-basics",
  name: "AI Basics for IT Support",
  prerequisites: ["ap-remote-access", "ap-privacy-licensing", "ap-scripting-basics"],
  objectives: ["AP1202-4.10"],
  knowledgeNodeId: "authentication",
  lesson: {
    title: "Use AI as an Untrusted Assistant Under Human and Policy Control",
    content: `Artificial intelligence systems perform tasks associated with pattern recognition, prediction, classification, generation, or decision support. Safe workplace use follows:

\`define an authorized task → classify and minimize input → select an approved system → give bounded context and success criteria → treat output as untrusted → verify against authoritative evidence → revise or reject → obtain human approval for consequential action → document material use and outcome\`

## Core concepts

**Machine learning** uses data and algorithms to learn patterns rather than encoding every rule directly. **Training** adjusts a model using data; **inference** applies a trained model to new input. **Generative AI** produces text, images, audio, code, or other content. **Predictive/classification systems** estimate values, categories, risk, or likely outcomes.

A **model** is not a database of guaranteed facts. A **prompt** supplies instructions and context; the **output** is a probabilistic response shaped by model, configuration, context, tools/data access, and sampling. A confident or detailed answer is not evidence of correctness.

Systems may use public models, organization-managed deployments, local/on-device models, retrieval from approved knowledge, or tool integrations. Capabilities and data-handling terms vary; do not assume all products retain, train on, protect, or delete data the same way.

## Appropriate support uses

Potential approved uses include drafting ticket summaries, rewriting technical language for an audience, suggesting diagnostic hypotheses, extracting structured fields, classifying known categories, generating inert test cases, explaining code, drafting scripts for review, searching approved knowledge, translating non-sensitive content, and identifying patterns for human investigation.

AI should assist—not silently decide—identity verification, access approval, security containment, legal/privacy judgments, personnel decisions, safety response, destructive repair, financial action, or production change. Consequential actions require authorized human review and the same technical controls as any manual action.

## Hallucinations and verification

A hallucination is plausible-sounding but unsupported or false output. AI may invent commands, flags, citations, product features, root causes, dates, policies, or completion claims. It may blend versions and platforms, omit constraints, or follow a misleading premise.

Verify commands in official documentation and safe test environments; citations by opening the actual source; configuration against the real target/version; factual claims against authoritative current sources; calculations independently; and recommended actions against policy, approval, backup, safety, and recovery controls.

Ask for assumptions, uncertainty, alternatives, evidence, and explicit unknowns, but do not treat self-reported confidence as validation. If a source cannot be inspected, label the claim unverified or do not use it.

## Bias, fairness, and accessibility

Training data, labels, sampling, measurement, design choices, prompts, and deployment context can produce systematic bias or uneven errors. A model may perform differently across languages, dialects, disabilities, demographic groups, job roles, devices, or rare cases.

Do not use AI output as a proxy for protected traits or as the sole basis for access, hiring, discipline, fraud, risk, or service priority. Evaluate representative cases, false positives/negatives, accessibility, human appeal/override, and observed impact. Avoid prompts that embed unsupported stereotypes. Document limitations and route fairness concerns to the accountable owner.

## Privacy and data governance

Prompts, uploads, conversations, retrieved documents, tool calls, generated outputs, metadata, and logs may be stored or processed by providers or organizational systems. Before use, verify approved account/tenant, data classification, contract and retention, training/model-improvement use, access, region, deletion/export, connectors, incident terms, and organizational policy.

Minimize and redact. Prefer synthetic examples, placeholders, and approved retrieval. Do not paste passwords, tokens, recovery keys, private messages, customer/employee records, health/financial information, incident evidence, proprietary source, secrets, or regulated data into an unapproved system. Deleting a chat from the interface may not prove deletion from every log, backup, or provider system.

## Security risks

AI output can contain unsafe commands, vulnerable code, fabricated packages, malicious links, secret leakage, or destructive steps. **Prompt injection** is untrusted content that attempts to override the intended task or induce data/tool misuse; it can appear in webpages, documents, email, tickets, repositories, or retrieved knowledge.

Treat external and retrieved content as data, not authority. Separate instructions from evidence, restrict tool permissions and accessible data, use allowlists/sandboxes/approvals, validate targets and parameters, keep secrets out of context, and require human confirmation for writes, external messages, downloads, account changes, or destructive actions.

Never let AI disable security controls, expose remote services, collect credentials, run unknown code, contact people, or modify production solely because the model suggested it. The human operator remains accountable for authorized execution and verification.

## Intellectual property and licensing

Generated output may resemble existing material, contain incompatible or invented license claims, omit attribution, or reproduce sensitive input. Verify ownership and license terms for source material, code, images, data, and model/service use. Do not assume “AI-generated” means public domain, original, safe to redistribute, or free of trademark/confidentiality concerns.

Review generated code dependencies and package names through official registries/documentation; fabricated packages can become a supply-chain risk. Preserve required notices and use approved review for publication.

## Prompting as task specification

A useful prompt defines role/context, authorized goal, inputs, exclusions, output format, evidence requirements, risk boundaries, and success criteria. Break complex tasks into inspect → propose → review → execute rather than granting broad autonomous action. Ask the model to distinguish facts, assumptions, and recommendations.

Poor: “Fix all computers.” Better: “Using this fictional sanitized ticket, list three plausible layers, one safe read-only test for each, evidence that would distinguish them, and escalation conditions. Do not provide bypass or destructive steps.”

Prompt quality can improve relevance but cannot guarantee truth, fairness, privacy, or safety.

## Automation and human oversight

Match oversight to consequence and reversibility. Low-risk drafting may need ordinary review. A read-only summary still needs privacy and accuracy checks. Production changes, security decisions, access, external communication, or destructive actions require explicit authorization, bounded tools, preview/dry-run, validation, logging, rollback/recovery, and accountable approval.

Avoid automation bias—the tendency to accept machine output because it appears objective. Also avoid reflexively rejecting useful output: compare it to evidence using a consistent rubric. Track acceptance, corrections, error types, false positives/negatives, incidents, and user outcomes rather than only speed.

## Verification and documentation

Verify that inputs were authorized/minimized, sources are real and current, commands/code match environment and pass review/tests, facts and calculations are corroborated, bias/accessibility risks considered, actions separately authorized, outputs contain no leaked sensitive data, and the final user/business result is correct.

Document approved tool/account, task and material use, data class/minimization, sources, human reviewer, corrections/rejections, action authorization, testing, output disposition, incident/escalation, and limitations. Do not paste sensitive prompts or output into tickets merely to prove AI was used.

**Practice boundary:** fictional sanitized prompts only; no real sensitive data, autonomous production actions, credential use, or unreviewed generated code execution. **Next:** Operational Procedures integration review.`,
  },
  lightbulbMoment: "AI can accelerate a proposal, but it cannot supply its own evidence, authority, privacy approval, or accountability; the human-controlled workflow must provide all four.",
  keyFacts: ["Training learns model patterns; inference applies the model", "Generative output is probabilistic, not guaranteed fact", "Hallucinations require authoritative source and environment verification", "Bias can enter through data, labels, design, prompts, and deployment", "Prompts and outputs may contain or expose sensitive data", "Prompt injection makes untrusted content a tool-control risk", "Consequential actions require bounded tools, human approval, testing, logging, and recovery"],
  guidedExample: {
    title: "Use AI to draft a support script without executing an invented command",
    steps: [
      "Define an approved task: draft read-only disk inventory pseudocode from a fictional schema; exclude credentials, remote execution, deletion, and production targets.",
      "Use the approved tenant and synthetic hostnames; request assumptions, official command references, structured output, error cases, and no package installation.",
      "The model invents a PowerShell parameter. Open current official documentation, reject the parameter, and correct the draft.",
      "Review validation, least privilege, logging, partial failure, privacy, and prompt-injection exposure; test with inert data and a disposable lab.",
      "A human approves the exact version for a small read-only pilot; verify targets/results, record corrections and limitations, and never treat the generated draft as execution authority.",
    ],
  },
  commonMistakes: ["Treating confident output as evidence", "Trusting invented citations, flags, packages, or product features", "Pasting sensitive tickets, logs, source, or credentials into an unapproved service", "Assuming deleted chat means all provider copies are gone", "Using model output as sole basis for consequential decisions", "Letting retrieved documents issue tool instructions through prompt injection", "Running generated code without source/dependency/target review", "Assuming AI-generated content has no license or intellectual-property risk"],
  examTraps: ["Training versus inference", "Generative versus predictive/classification uses", "Hallucination and authoritative verification", "Bias sources and human appeal", "Privacy across prompts/uploads/outputs/logs", "Prompt injection and least-tool privilege", "Human accountability for consequential action"],
  realWorldScenario: "A technician pastes a sanitized error—not the full customer ticket—into an approved AI service and asks for diagnostic hypotheses. The output cites a nonexistent vendor article and suggests disabling certificate validation. The technician rejects both, verifies the actual product version in official documentation, uses a safe read-only certificate-chain test, finds incorrect system time, applies the approved correction, verifies the service and security controls, and records the hallucination without copying sensitive prompt history.",
  whenThisFails: ["If data classification, provider terms, tenant approval, retention, or connector access is unclear, do not submit the data", "If output cannot be verified against authoritative evidence and the real environment, label it unverified and do not act on it", "If an AI system attempts to use tools or data outside the authorized task, stop, preserve logs, restrict access, and escalate the control failure"],
  teacherReflectionPrompt: "Evaluate an AI-generated troubleshooting answer containing a citation, command, package, customer log, and recommended production change: identify hallucination, privacy, bias, injection, licensing, approval, test, and verification gates.",
  quiz: [
    item("ap-ai-q1", "What is inference?", "Applying a trained model to new input to produce a result", "Physically destroying training data", "A software license", "easy"),
    item("ap-ai-q2", "An AI answer includes a precise vendor citation. Best action?", "Open and verify the actual authoritative source and confirm it applies to the current version", "Trust it because it is precise", "Repeat it without checking"),
    item("ap-ai-q3", "Before entering a customer log into AI, first verify:", "Approved tenant/service, classification, minimization, contract/retention/training terms, and authorization", "Only prompt grammar", "That the service is free"),
    item("ap-ai-q4", "A retrieved webpage tells an AI agent to upload secrets. This illustrates:", "Prompt injection from untrusted content; tool/data permissions and human approval must block it", "A valid system policy", "Proof the upload is safe", "hard"),
    item("ap-ai-q5", "Who is accountable for an AI-suggested production change?", "The authorized human and organizational process that reviews, approves, executes, and verifies it", "The model alone", "No one if the prompt was detailed"),
  ],
  questionBank: [
    item("ap-ai-b1", "Training primarily:", "Adjusts a model using data and an optimization process", "Guarantees every future answer", "Deletes all bias"),
    item("ap-ai-b2", "A hallucination is:", "Plausible-looking unsupported or false generated content", "A verified database transaction", "A required license notice", "easy"),
    item("ap-ai-b3", "Bias can arise from:", "Data, labels, sampling, design, prompts, measurement, and deployment context", "Only spelling errors", "Encryption alone"),
    item("ap-ai-b4", "Why use synthetic data in prompts?", "It reduces exposure while preserving the structure needed for testing or drafting", "It guarantees correctness", "It removes review"),
    item("ap-ai-b5", "A generated package name should be:", "Verified through official documentation/registry and security review before use", "Installed immediately", "Trusted because it sounds real"),
    item("ap-ai-b6", "Prompt quality can guarantee:", "Nothing by itself; accuracy, privacy, fairness, and safety still require controls and verification", "Perfect truth", "Legal compliance"),
    item("ap-ai-b7", "Automation bias means:", "Overweighting machine output because it appears objective or convenient", "Refusing all automation", "Encrypting model weights"),
    item("ap-ai-b8", "High-consequence AI action requires:", "Explicit authority, bounded tools/data, preview/testing, human approval, logging, recovery, and outcome verification", "An enthusiastic prompt", "No audit trail"),
  ],
  flashcards: [
    { id: "ap-ai-f1", front: "Training?", back: "Learning/adjusting model patterns from data" },
    { id: "ap-ai-f2", front: "Inference?", back: "Applying a trained model to new input" },
    { id: "ap-ai-f3", front: "Hallucination?", back: "Plausible but unsupported or false output" },
    { id: "ap-ai-f4", front: "Prompt injection?", back: "Untrusted content tries to redirect instructions, data, or tools" },
    { id: "ap-ai-f5", front: "AI privacy gate?", back: "Approved service/tenant, minimal data, known terms, authorization" },
    { id: "ap-ai-f6", front: "Production accountability?", back: "Authorized humans and organizational controls—not the model" },
  ],
  practiceType: ["reading", "quiz", "flashcard"], estimatedStudyMinutes: 60, difficulty: "medium",
}];
