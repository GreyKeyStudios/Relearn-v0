import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { module1Topics, topicDefs, labs } from "./git-github-topic-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../src/content/certifications/git-github.ts");

const experienceImports = [
  ["GIT_WHY_VERSION_CONTROL_EXPERIENCE", "git-why-version-control-experience"],
  ["GIT_VS_GITHUB_EXPERIENCE", "git-vs-github-experience"],
  ["GIT_FEAR_REMOVAL_INTRO_EXPERIENCE", "git-fear-removal-intro-experience"],
  ["GIT_REPOS_AND_COMMITS_EXPERIENCE", "git-repos-and-commits-experience"],
  ["GIT_STAGING_AND_STATUS_EXPERIENCE", "git-staging-and-status-experience"],
  ["GIT_HISTORY_AND_DIFF_EXPERIENCE", "git-history-and-diff-experience"],
  ["GIT_BRANCHING_BASICS_EXPERIENCE", "git-branching-basics-experience"],
  ["GIT_MERGE_BASICS_EXPERIENCE", "git-merge-basics-experience"],
  ["GIT_CONFLICTS_INTRO_EXPERIENCE", "git-conflicts-intro-experience"],
  ["GIT_REMOTES_EXPLAINED_EXPERIENCE", "git-remotes-explained-experience"],
  ["GIT_CLONE_PUSH_PULL_EXPERIENCE", "git-clone-push-pull-experience"],
  ["GIT_PULL_REQUESTS_EXPERIENCE", "git-pull-requests-experience"],
  ["GIT_COMMIT_MESSAGES_EXPERIENCE", "git-commit-messages-experience"],
  ["GIT_GITIGNORE_SECRETS_EXPERIENCE", "git-gitignore-secrets-experience"],
  ["GIT_UNDO_SAFELY_EXPERIENCE", "git-undo-safely-experience"],
  ["GIT_MERGE_CONFLICTS_EXPERIENCE", "git-merge-conflicts-experience"],
  ["GIT_WHEN_NOT_TO_PANIC_EXPERIENCE", "git-when-not-to-panic-experience"],
  ["GIT_BRIDGE_CAPSTONE_EXPERIENCE", "git-bridge-capstone-experience"],
];

function q(id, prompt, correct, explanation, choices, difficulty = "medium") {
  const letters = ["a", "b", "c", "d"];
  return {
    id,
    prompt,
    choices: choices.map((text, i) => ({ id: letters[i], text })),
    correctChoiceId: correct,
    explanation,
    difficulty,
  };
}

function bank(id, prompt, correct, explanation, choices) {
  const letters = ["a", "b", "c", "d"];
  return {
    id,
    prompt,
    choices: choices.map((text, i) => ({ id: letters[i], text })),
    correctChoiceId: correct,
    explanation,
  };
}

function fc(id, front, back) {
  return { id, front, back };
}

function makeBank(topicId, items) {
  return items.map((item, i) =>
    bank(`${topicId}-b${i + 1}`, item[0], item[1], item[2], item[3])
  );
}

function makeFlashcards(topicId, items) {
  return items.map((item, i) => fc(`${topicId}-f${i + 1}`, item[0], item[1]));
}

function buildQuizFromDef(t) {
  if (t.quiz) return t.quiz;
  const [prompt, correct, explanation, choices, difficulty] = t.quizQ1;
  const id = t.id;
  const extra = t.quizExtra ?? [];
  const q1 = q(`${id}-q1`, prompt, correct, explanation, choices, difficulty);
  const rest = extra.map((item, i) =>
    q(`${id}-q${i + 2}`, item[0], item[1], item[2], item[3], item[4] ?? "medium")
  );
  return [q1, ...rest];
}

function indentJson(obj, baseIndent) {
  return JSON.stringify(obj, null, 2)
    .split("\n")
    .map((line) => baseIndent + line)
    .join("\n");
}

function serializeTopic(t) {
  const quiz = buildQuizFromDef(t);
  const lines = [];
  lines.push("        {");
  lines.push(`          id: ${JSON.stringify(t.id)},`);
  lines.push(`          name: ${JSON.stringify(t.name)},`);
  if (t.prereq?.length) {
    lines.push(`          prerequisites: ${JSON.stringify(t.prereq)},`);
  }
  lines.push(`          objectives: ${JSON.stringify(t.objs)},`);
  lines.push("          lesson: {");
  lines.push(`            title: ${JSON.stringify(t.title)},`);
  lines.push("            content: `" + t.content.replace(/\\/g, "\\\\").replace(/`/g, "\\`") + "`,");
  lines.push(`            experience: ${t.exp},`);
  lines.push("          },");
  if (t.lightbulb) {
    lines.push(`          lightbulbMoment: ${JSON.stringify(t.lightbulb)},`);
  }
  lines.push(`          keyFacts: ${indentJson(t.keyFacts, "          ")},`);
  lines.push("          guidedExample: {");
  lines.push(`            title: ${JSON.stringify(t.guided.title)},`);
  lines.push(`            steps: ${indentJson(t.guided.steps, "            ")},`);
  lines.push("          },");
  lines.push(`          commonMistakes: ${indentJson(t.mistakes, "          ")},`);
  lines.push(`          examTraps: ${indentJson(t.traps, "          ")},`);
  lines.push(`          realWorldScenario: ${JSON.stringify(t.scenario)},`);
  lines.push(`          quiz: ${indentJson(quiz, "          ")},`);
  lines.push(`          questionBank: ${indentJson(makeBank(t.id, t.bankItems), "          ")},`);
  lines.push(`          flashcards: ${indentJson(makeFlashcards(t.id, t.flashItems), "          ")},`);

  if (t.externalResources) {
    lines.push(`          externalResources: [${t.externalResources}],`);
  }
  if (t.assignment) {
    const lab = labs[t.assignment];
    lines.push("          assignments: [");
    lines.push(indentJson(lab, "            "));
    lines.push("          ],");
  }

  const practice = t.assignment
    ? ["reading", "quiz", "flashcard", "external-lab"]
    : ["reading", "quiz", "flashcard"];
  lines.push(`          practiceType: ${JSON.stringify(practice)},`);
  lines.push(`          estimatedStudyMinutes: ${t.mins},`);
  lines.push(`          difficulty: ${JSON.stringify(t.diff)},`);
  lines.push("        },");
  return lines.join("\n");
}

function serializeModule1Topic(t) {
  return serializeTopic(t);
}

const domains = [
  {
    id: "version-control-foundations",
    name: "Module 1 — Why Version Control",
    topics: module1Topics,
  },
  {
    id: "local-git",
    name: "Module 2 — Local Git Basics",
    topics: topicDefs.filter((t) =>
      ["git-repos-and-commits", "git-staging-and-status", "git-history-and-diff"].includes(t.id)
    ),
  },
  {
    id: "branching",
    name: "Module 3 — Branches Without Fear",
    topics: topicDefs.filter((t) =>
      ["git-branching-basics", "git-merge-basics", "git-conflicts-intro"].includes(t.id)
    ),
  },
  {
    id: "github-remotes",
    name: "Module 4 — GitHub Remotes",
    topics: topicDefs.filter((t) =>
      ["git-remotes-explained", "git-clone-push-pull"].includes(t.id)
    ),
  },
  {
    id: "professional-workflow",
    name: "Module 5 — Professional Workflow",
    topics: topicDefs.filter((t) =>
      ["git-pull-requests", "git-commit-messages", "git-gitignore-secrets"].includes(t.id)
    ),
  },
  {
    id: "recovery",
    name: "Module 6 — Recovery and Real-World Problems",
    topics: topicDefs.filter((t) =>
      ["git-undo-safely", "git-merge-conflicts", "git-when-not-to-panic"].includes(t.id)
    ),
  },
  {
    id: "capstone",
    name: "Module 7 — Bridge Capstone",
    topics: topicDefs.filter((t) => t.id === "git-bridge-capstone"),
  },
];

const importBlock = experienceImports
  .map(([name, file]) => `import { ${name} } from "@/content/lessons/${file}";`)
  .join("\n");

const domainBlocks = domains
  .map((d) => {
    const topicBlocks = d.topics.map((t) => serializeModule1Topic(t)).join("\n");
    return `    {
      id: ${JSON.stringify(d.id)},
      name: ${JSON.stringify(d.name)},
      topics: [
${topicBlocks}
      ],
    }`;
  })
  .join(",\n");

const output = `import type { Certification, ExternalResource } from "../types";
${importBlock}

const LOCAL_GIT_RESOURCE: ExternalResource = {
  id: "local-git",
  name: "Local Git",
  url: "https://git-scm.com/downloads",
  cost: "free",
  platform: "any",
  installNotes:
    "Install Git. GitHub account optional until Module 4. Windows: Git for Windows or winget install Git.Git.",
};

const GITHUB_FREE_RESOURCE: ExternalResource = {
  id: "github-free",
  name: "GitHub",
  url: "https://github.com",
  cost: "free",
  platform: "any",
  installNotes: "Create a free GitHub account before Module 4 remotes and pull-request labs.",
};

const NOTES_ANY_RESOURCE: ExternalResource = {
  id: "notes-any",
  name: "Notes app or paper",
  url: "https://docs.github.com",
  cost: "free",
  platform: "any",
  installNotes: "Any text editor, notes app, or paper works — no Git install required for this lab.",
};

/** Git & GitHub Foundations — ReLearn skills track (Path A cert shell). */
export const gitGithub: Certification = {
  id: "git-github",
  name: "Git & GitHub Foundations",
  shortName: "Git/GitHub",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum — not a vendor exam. Seven modules take you from why version control exists through local Git commands, branches, GitHub remotes, professional pull-request workflow, recovery skills, and a Bridge capstone PR. Each procedural topic includes guided examples, Break It / Fix It labs, and workplace traps — built for beginners who want Git to feel like a safety system, not a trap.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + capstone",
    format: "Hands-on labs and workflow practice",
  },
  domains: [
${domainBlocks}
  ],
};
`;

fs.writeFileSync(outPath, output, "utf8");
const lineCount = output.split("\n").length;
console.log(`Wrote ${outPath}`);
console.log(`Line count: ${lineCount}`);
