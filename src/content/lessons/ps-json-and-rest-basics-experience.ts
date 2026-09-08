import type { TopicExperience } from "@/content/types";

/** LES — JSON and a first REST call (PowerShell I Module 5). */
export const PS_JSON_AND_REST_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-rest",
      type: "hero",
      powershellShellStep: 2,
      headline: "PowerShell does not stop at your PC.",
      body: "Most systems you will automate — ticketing, monitoring, inventory, identity — expose a web API that speaks JSON. One cmdlet, Invoke-RestMethod, turns that API into ordinary PowerShell objects you already know how to filter, sort, and export.",
    },
    {
      id: "json-is-data",
      type: "teach",
      powershellShellStep: 3,
      headline: "JSON is a data format, not a wall of text.",
      body: "JSON uses braces for objects, brackets for lists, and \"key\": value pairs. ConvertFrom-Json turns that text into objects with real properties. ConvertTo-Json goes the other way when you need to send or save data.",
      terms: [
        {
          id: "json",
          label: "JSON",
          tier: "basics",
          shortDefinition:
            "JavaScript Object Notation — a plain-text way to write objects and lists that almost every web API returns.",
          example: '{ "name": "PowerShell", "stars": 100 }',
        },
      ],
    },
    {
      id: "invoke-restmethod",
      type: "teach",
      powershellShellStep: 2,
      headline: "Invoke-RestMethod converts for you.",
      body: "$repo = Invoke-RestMethod -Uri 'https://api.github.com/repos/PowerShell/PowerShell' gives you an object, not a string. Invoke-WebRequest is the lower-level cousin: it hands back the raw response, so you must pipe .Content through ConvertFrom-Json yourself.",
      studyTip: {
        title: "Same habit as always",
        body: "Pipe the result to Get-Member before guessing property names. API field names are chosen by someone else and are often snake_case.",
      },
    },
    {
      id: "select-what-matters",
      type: "flow",
      powershellShellStep: 4,
      headline: "It is the same pipeline you already know.",
      body: "Call, inspect, select, export. Nothing about an API changes the pipeline skills from Module 3 — only where the objects came from.",
      media: {
        kind: "flow",
        items: [
          { icon: "globe", label: "Invoke-RestMethod" },
          { icon: "search", label: "Get-Member" },
          { icon: "filter", label: "Select-Object" },
          { icon: "file-spreadsheet", label: "Export-Csv" },
        ],
      },
    },
    {
      id: "failure-modes",
      type: "misconception",
      powershellShellStep: 3,
      headline: "Two failures look nothing alike.",
      body: "A wrong URL raises a loud HTTP error you cannot miss. A wrong property name produces a blank column and no error at all. The quiet one is the dangerous one, because a scheduled script will happily email an empty report.",
    },
    {
      id: "be-a-good-client",
      type: "teach",
      powershellShellStep: 2,
      headline: "Be a polite API client.",
      body: "Read only. Use public endpoints while learning. Do not put an API key in a script you might share — that comes back in PowerShell II. If a call fails, wrap it in try/catch with -ErrorAction Stop so your script reports the failure rather than dying halfway through a report.",
    },
    {
      id: "rest-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — JSON and REST",
      checkpointQuestionId: "ps-json-and-rest-basics-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "An API is just another source of objects.",
      body: "Invoke-RestMethod for JSON APIs, ConvertFrom-Json when you hold the text yourself, Get-Member before you name a property, and try/catch around the call. PowerShell II goes deeper: headers, authentication, POST, pagination, and rate limits.",
    },
  ],
};
