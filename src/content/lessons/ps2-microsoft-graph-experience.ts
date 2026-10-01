import type { TopicExperience } from "@/content/types";

/** LES — Microsoft Graph PowerShell (PowerShell II Module 5). */
export const PS2_MICROSOFT_GRAPH_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 2,
      headline: "Graph is one REST API in front of the whole Microsoft cloud.",
      body: "Users, groups, licences, sign-ins, mailboxes, Teams, devices, Intune policies — one endpoint, one token, one permission model. The Graph PowerShell SDK is a generated wrapper over that API, which means everything you learned about REST, JSON, and paging still applies underneath.",
    },
    {
      id: "sdk",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "The SDK is generated from the API, and it shows.",
      body: "Install-Module Microsoft.Graph gives you thousands of Get-Mg*, New-Mg*, Update-Mg* commands named directly after Graph resources. Get-MgUser is /users. Because they are generated, the help is thin and the output is deeply nested — Get-Member and Select-Object are your survival tools, not optional extras.",
      terms: [
        {
          id: "graph-sdk",
          label: "Graph PowerShell SDK",
          tier: "now",
          shortDefinition:
            "The Microsoft.Graph module — auto-generated cmdlets that call Microsoft Graph REST endpoints for you.",
        },
      ],
    },
    {
      id: "deprecated",
      type: "misconception",
      powershellAutomationStage: 2,
      headline: "AzureAD and MSOnline are retired. Do not learn them.",
      body: "Older tutorials use Get-MsolUser and Get-AzureADUser. Those modules are deprecated and their service endpoints have been retired. If a script you inherit uses them, the migration target is Microsoft.Graph — and knowing that is a genuinely valuable thing to spot in an interview.",
    },
    {
      id: "scopes",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Scopes are the permission contract, and least privilege is enforceable here.",
      body: "Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All' requests exactly those permissions. Ask for User.ReadWrite.All when you only report and you have handed a reporting script the power to change every account in the tenant. Get-MgContext shows what you actually hold.",
      media: {
        kind: "flow",
        items: [
          { icon: "key", label: "Connect-MgGraph" },
          { icon: "shield", label: "-Scopes" },
          { icon: "search", label: "Get-MgContext" },
          { icon: "users", label: "Get-MgUser" },
        ],
      },
      studyTip: {
        title: "Read scopes end in .Read.All",
        body: "User.Read.All reports. User.ReadWrite.All changes. One word separates a safe script from an audit finding.",
      },
    },
    {
      id: "querying",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Filter and select server-side, then page with -All.",
      body: "Get-MgUser -Filter \"accountEnabled eq false\" -Property Id,DisplayName,UserPrincipalName -All lets Graph do the narrowing. Without -All you get one page — usually 100 users — and a script that quietly reports on a fraction of the tenant. Without -Property, requested fields such as licence details come back empty rather than erroring.",
    },
    {
      id: "fixtures",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "You can practise the whole pipeline without a tenant.",
      body: "A Graph response is JSON with a value array. Build that shape yourself with ConvertTo-Json, read it back with ConvertFrom-Json, and every downstream step — Get-Member, Where-Object, calculated properties, Group-Object, Export-Csv — is identical to the live path. The project in this module grades on that fixture; a developer tenant is an optional extra.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 2,
      headline: "Quick check — Microsoft Graph",
      checkpointQuestionId: "ps2-microsoft-graph-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 2,
      headline: "One API, explicit read scopes, server-side filtering, and -All.",
      body: "Graph rewards the habits you already built: request the least permission, ask the service to narrow the data, page fully, and inspect the object before you trust the property name.",
    },
  ],
};
