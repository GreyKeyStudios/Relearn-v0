import type { TopicExperience } from "@/content/types";

/** LES — Azure PowerShell (Az module) discovery and reporting (PowerShell II Module 5). */
export const PS2_AZURE_POWERSHELL_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 2,
      headline: "PowerShell, Azure CLI, and the portal all call the same API.",
      body: "Azure Resource Manager is a REST API. The portal is a website in front of it, az is a Python CLI in front of it, and the Az module is PowerShell cmdlets in front of it. Pick the one that fits the job — Az wins when the result needs to become an object you filter, group, and export.",
    },
    {
      id: "context",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Context is the variable that silently ruins scripts.",
      body: "Connect-AzAccount signs you in and selects a subscription — often not the one you meant. Every Get-Az* call then runs against that context. Get-AzContext tells you where you are; Set-AzContext -Subscription moves you. A script that assumes the current context is a script that eventually reports on production while you were testing.",
      terms: [
        {
          id: "az-context",
          label: "Az context",
          tier: "now",
          shortDefinition:
            "The account, tenant, and subscription your Az cmdlets currently operate against.",
        },
      ],
      studyTip: {
        title: "Print the context in every Azure script",
        body: "One Write-Verbose line naming the subscription you are about to touch has saved more outages than any clever pipeline.",
      },
    },
    {
      id: "hierarchy",
      type: "flow",
      powershellAutomationStage: 2,
      headline: "Tenant, subscription, resource group, resource.",
      body: "The tenant is the identity boundary. Subscriptions are the billing and quota boundary. Resource groups are the lifecycle boundary — things you create and delete together. Resources are the VMs, storage accounts, and databases themselves. Every Az cmdlet asks you to name a level.",
      media: {
        kind: "flow",
        items: [
          { icon: "cloud", label: "Tenant" },
          { icon: "package", label: "Subscription" },
          { icon: "folder", label: "Resource group" },
          { icon: "server", label: "Resource" },
        ],
      },
    },
    {
      id: "discovery",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Get-AzResource is the inventory workhorse.",
      body: "It returns every resource with Name, ResourceType, ResourceGroupName, Location, and Tags — enough to answer \"what do we have, where, and who owns it\" in one pipeline. Group-Object ResourceType gives you a service breakdown; filtering on a missing tag gives you a compliance list your manager will actually read.",
    },
    {
      id: "safety",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Get-Az* is read-only. New-, Set-, and Remove-Az* are not.",
      body: "Remove-AzResourceGroup deletes everything inside it and is the single most destructive command in the module — it is never a step in this course. Change-tier Az cmdlets support -WhatIf, and resource locks plus RBAC exist precisely because scripts make mistakes at machine speed. Report before you touch.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 4,
      headline: "\"The cmdlet returned, so the resource is ready.\"",
      body: "Azure operations are frequently asynchronous. New-AzVM returning does not mean the guest OS is up, and a provisioning state of Succeeded is about the platform, not your application. Real automation polls for the state it actually needs before moving on — which is the same verify step you built for local scripts, just slower.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 2,
      headline: "Quick check — Azure PowerShell",
      checkpointQuestionId: "ps2-azure-powershell-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 2,
      headline: "Know your context, name your scope, report before you change.",
      body: "Az is a thin layer over the ARM API. Master context and the resource hierarchy, treat Get-Az* as your safe playground, and verify asynchronous work instead of assuming it finished.",
    },
  ],
};
