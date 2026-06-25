import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const AZURE_RBAC_POOL: ChoiceDrillItem[] = [
  {
    id: "azure-owner",
    prompt: "Which Azure RBAC role grants full access including permission to assign roles?",
    choices: [
      { id: "a", text: "Owner" },
      { id: "b", text: "Reader" },
      { id: "c", text: "Contributor" },
      { id: "d", text: "User Access Administrator only without manage" },
    ],
    correctChoiceId: "a",
    weakConcept: "Owner role scope",
    explanation: "Owner has full access plus role assignment. Contributor cannot assign roles.",
  },
  {
    id: "azure-contributor",
    prompt: "A developer needs to create and manage resources but NOT assign RBAC roles. Best role?",
    choices: [
      { id: "a", text: "Contributor" },
      { id: "b", text: "Owner" },
      { id: "c", text: "Reader" },
      { id: "d", text: "Security Admin" },
    ],
    correctChoiceId: "a",
    weakConcept: "Contributor vs Owner",
  },
  {
    id: "azure-reader",
    prompt: "View resources without making changes — which role?",
    choices: [
      { id: "a", text: "Reader" },
      { id: "b", text: "Contributor" },
      { id: "c", text: "Owner" },
      { id: "d", text: "Billing Reader only for VMs" },
    ],
    correctChoiceId: "a",
    weakConcept: "Reader role",
  },
  {
    id: "azure-scope",
    prompt: "RBAC role assignments can be scoped at which levels?",
    choices: [
      { id: "a", text: "Management group, subscription, resource group, resource" },
      { id: "b", text: "Subscription only" },
      { id: "c", text: "Individual files inside a VM" },
      { id: "d", text: "Azure AD tenant root only" },
    ],
    correctChoiceId: "a",
    weakConcept: "RBAC scope hierarchy",
  },
  {
    id: "azure-uai",
    prompt: "Grant a user permission to manage role assignments without full Owner on resources?",
    choices: [
      { id: "a", text: "User Access Administrator" },
      { id: "b", text: "Reader" },
      { id: "c", text: "Storage Blob Data Reader" },
      { id: "d", text: "Network Contributor only" },
    ],
    correctChoiceId: "a",
    weakConcept: "User Access Administrator",
  },
  {
    id: "azure-inheritance",
    prompt: "A role assigned at the subscription level applies to:",
    choices: [
      { id: "a", text: "All resource groups and resources in that subscription" },
      { id: "b", text: "Only the subscription object itself" },
      { id: "c", text: "All subscriptions in the tenant automatically" },
      { id: "d", text: "Only Azure AD users, not resources" },
    ],
    correctChoiceId: "a",
    weakConcept: "RBAC inheritance",
  },
  {
    id: "azure-deny",
    prompt: "An explicit Deny assignment in Azure RBAC:",
    choices: [
      { id: "a", text: "Overrides Allow assignments (Deny wins)" },
      { id: "b", text: "Is ignored if Allow exists" },
      { id: "c", text: "Only applies to Reader role" },
      { id: "d", text: "Requires Owner to take effect" },
    ],
    correctChoiceId: "a",
    weakConcept: "Deny precedence",
  },
  {
    id: "azure-custom",
    prompt: "Built-in roles don't fit your needs. You can:",
    choices: [
      { id: "a", text: "Create custom role definitions with specific actions" },
      { id: "b", text: "Only use Owner for everything" },
      { id: "c", text: "Assign roles via DNS records" },
      { id: "d", text: "Use Guest accounts only" },
    ],
    correctChoiceId: "a",
    weakConcept: "Custom RBAC roles",
  },
];
