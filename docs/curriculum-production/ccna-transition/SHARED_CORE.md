# CCNA Shared-Core Curriculum Layer

Shared-core is a **design layer**, not a third exam version. It identifies knowledge clusters that can power one lesson body for both pathways while keeping **version-specific objective associations**.

## Design rules

1. Cluster membership comes from medium/high-confidence comparison edges marked `sharedCore`.
2. A shared lesson may list both:
   - `200-301-v1.1/<number>` associations for v1.1 learners
   - `200-301-v2.0/<number>` associations for v2.0 learners
3. Never merge those IDs into one undifferentiated list.
4. Verb depth may differ (e.g. configure/verify → troubleshoot). Shared body + version-specific drills is preferred over inventing a single shallow lesson.
5. `newly added`, `removed`, and `unable to determine` parents are **not** shared-core by default.

## Clusters (see `shared-core.ts`)

| ID | Priority | v1.1 parents | v2.0 parents |
| --- | --- | --- | --- |
| `shared-cabling-interfaces` | P0 | 1.3, 1.4 | 1.1 |
| `shared-ipv4-addressing` | P0 | 1.6, 1.7 | 1.3 |
| `shared-ipv6-addressing` | P0 | 1.8, 1.9 | 1.4 |
| `shared-wireless-principles` | P1 | 1.11, 5.9 | 1.5 |
| `shared-virtualization` | P1 | 1.12 | 1.2 |
| `shared-switching-access` | P0 | 2.1–2.5 | 2.1–2.3, 2.5 |
| `shared-routing` | P0 | 3.1, 3.3–3.5 | 3.1–3.4 |
| `shared-services-security` | P0 | 4.1, 4.3, 4.6, 5.3, 5.5–5.8 | 1.7, 4.1, 4.3–4.7 |
| `shared-ops-telemetry` | P1 | 4.4, 4.5 | 5.4, 5.6 |

v2.0 **2.4** (L2/L3 troubleshoot parent) and AI parents **5.1/5.2** stay version-specific add-ons, not shared-core.

## Authoring implication

When a future content batch elevates a shared cluster:

1. Keep or lightly revise the shared conceptual body.
2. Attach version-specific checklists and practice depth.
3. Leave live Path A pilot tags alone until an explicit remap ticket.
