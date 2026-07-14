import type { TopicExperience } from "@/content/types";

/** LES experience — Automation Basics (Wave 6 / Domain 6). */
export const AUTOMATION_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 4,
      headline: "Stop typing the same CLI forever.",
      body: "Network automation cuts copy-paste errors, speeds rollouts, and keeps configs consistent. CCNA needs the why and the vocabulary — not a full coding career yet.",
      media: {
        kind: "icons",
        items: [
          { icon: "cpu", label: "Controller" },
          { icon: "server", label: "Devices" },
        ],
      },
      terms: [
        {
          id: "automation",
          label: "Automation",
          tier: "basics",
          shortDefinition:
            "Using tools and APIs to configure and operate networks with less manual CLI per box.",
        },
      ],
    },
    {
      id: "why-automate",
      type: "teach",
      tcpLayer: 4,
      headline: "Why automate.",
      body: "Humans mistype ACL lines and forget interfaces. Playbooks and APIs apply known-good changes the same way every time — speed, consistency, and fewer surprise drifts.",
    },
    {
      id: "benefit-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — automation benefit",
      checkpointQuestionId: "automation-basics-q5",
    },
    {
      id: "sdn-planes",
      type: "teach",
      tcpLayer: 4,
      headline: "SDN: control vs data plane.",
      body: "Software-Defined Networking separates decision-making (control plane) from packet forwarding (data plane). Controllers hold logic; devices emphasize fast forwarding.",
      terms: [
        {
          id: "sdn",
          label: "SDN",
          tier: "basics",
          shortDefinition:
            "Software-Defined Networking — often centralizes control while forwarding stays on devices.",
        },
        {
          id: "control-plane",
          label: "Control plane",
          tier: "basics",
          shortDefinition: "Where routing/policy decisions are made (can be centralized in SDN).",
        },
        {
          id: "data-plane",
          label: "Data plane",
          tier: "basics",
          shortDefinition: "Where packets are forwarded — the “fast path” on switches/routers.",
        },
      ],
    },
    {
      id: "sdn-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — SDN separation",
      checkpointQuestionId: "automation-basics-q1",
    },
    {
      id: "controllers",
      type: "teach",
      tcpLayer: 4,
      headline: "Controllers push policy.",
      body: "A controller is the brain that talks to many devices. It learns intent from operators or apps and pushes forwarding policy down — instead of configuring every box alone by hand.",
      terms: [
        {
          id: "controller",
          label: "Controller",
          tier: "basics",
          shortDefinition:
            "Central system that manages policy and programs network devices in controller-based designs.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Ops / apps" },
          { icon: "cpu", label: "Controller" },
          { icon: "server", label: "Devices" },
        ],
      },
      laterLearn: ["Cisco DNA Center product deep dive"],
    },
    {
      id: "rest-json",
      type: "teach",
      tcpLayer: 4,
      headline: "REST and JSON — idea.",
      body: "REST APIs use HTTP methods (GET, POST, PUT, DELETE) so software can talk to devices and controllers. JSON is a common human-readable data format in those payloads.",
      terms: [
        {
          id: "rest",
          label: "REST API",
          tier: "basics",
          shortDefinition:
            "HTTP-based API style using verbs like GET/POST/PUT/DELETE to read or change resources.",
        },
        {
          id: "json",
          label: "JSON",
          tier: "basics",
          shortDefinition:
            "JavaScript Object Notation — structured text data often used in REST payloads.",
        },
      ],
    },
    {
      id: "json-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — REST data format",
      checkpointQuestionId: "automation-basics-q2",
    },
    {
      id: "yang-light",
      type: "teach",
      tcpLayer: 4,
      headline: "Structured config — light.",
      body: "NETCONF (and RESTCONF) push structured configuration using YANG data models. Know that they exist for programmable config — authoring YANG models is later skills work.",
      terms: [
        {
          id: "netconf",
          label: "NETCONF",
          tier: "basics",
          shortDefinition:
            "Protocol for getting and setting structured network configuration programmatically.",
        },
        {
          id: "yang",
          label: "YANG",
          tier: "later",
          shortDefinition:
            "Data modeling language for network config — recognition now; authoring deferred.",
          laterItems: ["Writing YANG modules", "Model-driven ops depth"],
        },
      ],
      laterLearn: ["YANG model authoring", "RESTCONF lab depth"],
    },
    {
      id: "netconf-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — NETCONF/YANG",
      checkpointQuestionId: "automation-basics-q3",
    },
    {
      id: "ansible-light",
      type: "teach",
      tcpLayer: 4,
      headline: "Ansible is agentless (light).",
      body: "Ansible typically drives devices over SSH or APIs without installing a permanent agent on every router. Playbooks describe desired state — agentless is the exam keyword.",
      terms: [
        {
          id: "ansible",
          label: "Ansible",
          tier: "basics",
          shortDefinition:
            "Automation tool often used agentless over SSH/API to configure many devices.",
        },
      ],
    },
    {
      id: "git-iac",
      type: "teach",
      tcpLayer: 4,
      headline: "Git and Infrastructure as Code.",
      body: "Treat configs like code: store templates in Git, review changes, roll back when needed. Infrastructure as Code means version-controlled, repeatable network definitions.",
      terms: [
        {
          id: "iac",
          label: "Infrastructure as Code",
          tier: "basics",
          shortDefinition:
            "Managing infrastructure configs as version-controlled files, not one-off CLI.",
        },
        {
          id: "git",
          label: "Git",
          tier: "basics",
          shortDefinition:
            "Version control system — history, branches, and rollback for config as code.",
        },
      ],
    },
    {
      id: "iac-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — IaC",
      checkpointQuestionId: "automation-basics-q4",
    },
    {
      id: "day-012",
      type: "teach",
      tcpLayer: 4,
      headline: "Day 0, Day 1, Day 2.",
      body: "Day 0 is bring-up (rack, image, first reachability). Day 1 is initial intended config. Day 2 is operate — monitor, troubleshoot, and change over time. Lifecycle words show up on exams.",
      terms: [
        {
          id: "day-0",
          label: "Day 0",
          tier: "basics",
          shortDefinition: "Initial deploy — hardware on, base image, management reachability.",
        },
        {
          id: "day-1",
          label: "Day 1",
          tier: "basics",
          shortDefinition: "First intended production configuration after Day 0.",
        },
        {
          id: "day-2",
          label: "Day 2",
          tier: "basics",
          shortDefinition: "Ongoing operations: monitoring, changes, troubleshooting.",
        },
      ],
    },
    {
      id: "not-replace-fundamentals",
      type: "misconception",
      tcpLayer: 4,
      headline: "Automation ≠ skip networking.",
      body: "APIs still push VLANs, routes, and ACLs. If you do not understand the protocols, bad playbooks fail faster at scale. Fundamentals remain required.",
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 4,
      headline: "What we defer.",
      body: "DNA Center product deep dives, YANG model authoring, and Python Netmiko scripting as skills tracks wait. Today: why automate, SDN planes, controllers, REST/JSON, Ansible light, Git/IaC, Day 0/1/2.",
      laterLearn: [
        "Cisco DNA Center product deep dive",
        "YANG model authoring",
        "Python Netmiko / NAPALM scripting skills",
      ],
      terms: [
        {
          id: "netmiko",
          label: "Netmiko",
          tier: "later",
          shortDefinition:
            "Python library for CLI automation over SSH — skills track later.",
          laterItems: ["Script patterns", "Error handling at scale"],
        },
        {
          id: "dna-center",
          label: "DNA Center",
          tier: "later",
          shortDefinition:
            "Cisco controller/assurance platform — product depth deferred for CCNA basics.",
          laterItems: ["Intent workflows", "Assurance dashboards"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 4,
      headline: "Automation basics covered.",
      body: "You can explain why automate, SDN control vs data plane, controllers, REST/JSON, NETCONF/YANG recognition, Ansible agentless light, Git/IaC, and Day 0/1/2 — without product or scripting deep dives yet.",
    },
  ],
};
