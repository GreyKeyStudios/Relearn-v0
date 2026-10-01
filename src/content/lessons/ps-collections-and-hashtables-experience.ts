import type { TopicExperience } from "@/content/types";

/** LES — Arrays and hash tables (PowerShell I Module 4). */
export const PS_COLLECTIONS_AND_HASHTABLES_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-collections",
      type: "hero",
      powershellShellStep: 3,
      headline: "One value is rare. Lists are normal.",
      body: "Real admin work handles many things at once: five services to check, forty rows from a spreadsheet, a lookup table of owners. Arrays hold ordered lists. Hash tables hold labelled pairs. Almost every script you write from here uses one or both.",
    },
    {
      id: "arrays",
      type: "teach",
      powershellShellStep: 3,
      headline: "An array is an ordered list.",
      body: "Build one with @('Spooler','W32Time','Dnscache'). Read the whole thing with $critical, one item with $critical[0], the last with $critical[-1], and the size with $critical.Count. Adding with += rebuilds the array behind the scenes, which is fine for small lists.",
      terms: [
        {
          id: "array",
          label: "Array",
          tier: "basics",
          shortDefinition:
            "An ordered collection you index by position, starting at zero.",
          example: "$names[0] is the first element",
        },
      ],
    },
    {
      id: "hashtables",
      type: "teach",
      powershellShellStep: 3,
      headline: "A hash table is a labelled lookup.",
      body: "Build one with @{ Spooler = 'Print team'; W32Time = 'Infrastructure' }. Read a value by its key: $owners['Spooler'] or $owners.Spooler. Keys are unique and, in a normal PowerShell hash table, matched case-insensitively. $owners.Keys and $owners.Values list each side.",
      terms: [
        {
          id: "key",
          label: "Key",
          tier: "basics",
          shortDefinition:
            "The label you look a value up by — like a column heading for a single value.",
        },
      ],
    },
    {
      id: "operators",
      type: "teach",
      powershellShellStep: 3,
      headline: "Operators ask questions about collections.",
      body: "-eq, -ne, -gt, -lt compare single values. -like matches wildcards, -match matches a pattern. -contains asks whether a collection holds an item, and -in asks the same thing with the operands the other way round: $critical -contains 'Spooler' equals 'Spooler' -in $critical.",
      studyTip: {
        title: "Read the operand order out loud",
        body: "Collection -contains item. Item -in collection. Getting them backwards returns False with no error.",
      },
    },
    {
      id: "silent-lookup",
      type: "misconception",
      powershellShellStep: 3,
      headline: "A missing key is not an error.",
      body: "$owners['Spoolr'] returns nothing at all — no exception, no warning, just an empty cell in your report. Guard important lookups with $owners.ContainsKey($name) so a typo shows up as UNOWNED instead of blank.",
    },
    {
      id: "custom-object",
      type: "teach",
      powershellShellStep: 4,
      headline: "Hash tables become report rows.",
      body: "[PSCustomObject]@{ Service = $name ; Owner = $owners[$name] } turns a hash table into a proper object with named properties. Do that inside a loop and you have a table you can sort, filter, and export like anything else PowerShell produces.",
    },
    {
      id: "collections-check",
      type: "checkpoint",
      powershellShellStep: 3,
      headline: "Quick check — collections",
      checkpointQuestionId: "ps-collections-and-hashtables-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "List it, label it, then shape it.",
      body: "Arrays give you order and position. Hash tables give you fast labelled lookup. [PSCustomObject] turns both into rows you can export. The failure mode to remember is silence: wrong operand order and missing keys both answer quietly rather than complaining.",
    },
  ],
};
