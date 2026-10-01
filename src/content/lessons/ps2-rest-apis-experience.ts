import type { TopicExperience } from "@/content/types";

/** LES — REST APIs in depth (PowerShell II Module 3). */
export const PS2_REST_APIS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 3,
      headline: "The API is where your automation stops being local.",
      body: "PowerShell I called one endpoint and read the JSON. That is enough to prove the idea and not enough to ship anything. Real API automation has headers, authentication, more pages than you asked for, failures you must survive, and limits you must respect.",
    },
    {
      id: "verbs",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "GET asks. POST changes.",
      body: "Invoke-RestMethod -Method Get is read-only and safe to retry. -Method Post -Body ($obj | ConvertTo-Json) -ContentType 'application/json' creates or triggers something, and retrying it may do the thing twice. Know which one you are sending before you loop.",
      terms: [
        {
          id: "idempotent",
          label: "Idempotent",
          tier: "now",
          shortDefinition:
            "Safe to repeat — running it twice leaves the same result as running it once. GET is; POST usually is not.",
        },
      ],
    },
    {
      id: "headers-auth",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Headers carry who you are and what you want back.",
      body: "A hash table of headers is passed with -Headers. Authorization commonly holds a bearer token; Accept states the format you want. Tokens expire, which is why an API script that ran for weeks can start returning 401 with no code change at all.",
    },
    {
      id: "pagination",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "The first page is not the answer.",
      body: "Most APIs cap a response and tell you how to get more — a nextLink URL, a cursor, a page number, or a Link header. Loop while the pointer exists, collect as you go, and cap the number of iterations so a broken pointer cannot spin forever.",
      studyTip: {
        title: "The 100-row tell",
        body: "A report that always shows exactly 100, 50, or 1000 rows is almost never a coincidence. That is page one.",
      },
    },
    {
      id: "errors-and-limits",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Status codes tell you whether retrying can possibly help.",
      body: "401 means not authenticated — retrying identically will fail identically. 403 is permission or throttling. 404 means it is not there. 429 means slow down, and often tells you how long in a Retry-After header. 5xx is their side and is worth a backed-off retry.",
      media: {
        kind: "flow",
        items: [
          { icon: "key", label: "401 auth" },
          { icon: "shield", label: "403 permission" },
          { icon: "search", label: "404 missing" },
          { icon: "clock", label: "429 slow down" },
        ],
      },
    },
    {
      id: "retry",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Retry with backoff, and only what is safe to retry.",
      body: "A retry loop with a growing wait — 2s, then 4s, then 8s — handles a transient failure without becoming the outage. Retry GETs freely. Think hard before retrying a POST. And always cap the attempts; an uncapped retry is a denial-of-service you wrote yourself.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 3,
      headline: "429 is not an error in your code.",
      body: "It is the API telling you that you are asking too fast. The fix is a wait, a smaller page size, or fewer calls — not more parallelism, and definitely not a tighter loop to 'get through it quicker'.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 3,
      headline: "Quick check — REST APIs",
      checkpointQuestionId: "ps2-rest-apis-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 3,
      headline: "Page it, authenticate it, handle its failures, respect its limits.",
      body: "Follow the pagination pointer until it is gone. Send headers deliberately and expect tokens to expire. Read the status code before deciding to retry, back off when you do, and cap everything.",
    },
  ],
};
