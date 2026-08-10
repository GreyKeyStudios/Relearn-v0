# Cloudflare Website Hosting — Learning Architecture

**Status:** First pass; learner QA and live capstone walkthrough remain required  
**Template:** Type B skill track delivered through the current Certification shell  
**Reference track:** Git & GitHub Foundations  
**Primary outcome:** A beginner can deploy, secure, troubleshoot, recover, and hand off a small website.

## Transfer standard

Course completion is not the outcome. A graduate must be able to take a different small website outside ReLearn, determine what it needs, select an appropriate Cloudflare architecture, deploy it, verify it, diagnose ordinary failures, recover safely, and explain the result to another person.

Instruction therefore fades across the track:

```text
explicit model and guided example
→ bounded Try It / Break It / Fix It practice
→ unfamiliar symptoms with evidence prompts
→ independently planned capstone and handoff
```

The capstone provides requirements and acceptance evidence, not a click-by-click recipe. Learners may consult current official documentation—as working professionals do—but must choose and justify their own DNS, hosting, access, storage, security, verification, and rollback decisions. Passing requires transfer to a fresh site or scenario, not merely reproducing the course example.

## Product boundary

This is not a Cloudflare certification-prep course or a tour of every Cloudflare product. It follows one job-shaped journey:

```text
local website → Git repository → preview → production → domain/DNS
→ HTTPS → caching/security → optional dynamic/data feature → operations/recovery
```

Workers, KV, D1, R2, Tunnel, Access, Turnstile, and observability appear only where they solve an ordinary website-hosting need. Durable Objects, Queues, AI, Stream, infrastructure as code, enterprise networking, and advanced analytics are deferred to later specialist tracks.

## Git/GitHub ownership

Cloudflare lessons apply Git; they do not reteach it. The deployment module links to these ReLearn topics:

- `git-repos-and-commits`
- `git-clone-push-pull`
- `git-pull-requests`
- `git-gitignore-secrets`
- `git-undo-safely`

A learner who lacks those skills follows the Git readiness assignment, completes the linked path, and returns to `cfh-git-deploy`.

## Module map

| Module | Topic | Proof |
|---|---|---|
| 1 | Request path | Trace registrar → DNS → edge → origin/host → browser |
| 2 | Domains and DNS | Safe zone migration plan with web/mail preservation |
| 3 | Git deployment | Live static site, broken preview, Git-based recovery |
| 4 | HTTPS/TLS | Diagnose certificates, redirects, and mixed content |
| 5 | Caching/performance | Explain stale state without blind global purges |
| 6 | Edge security | Narrow form protection with false-positive testing |
| 7 | Workers/Wrangler | Minimal dynamic route, safe secrets, rollback |
| 8 | Website storage and R2 delivery | Choose KV, D1, or R2; configure and troubleshoot a safe R2 browser delivery path |
| 9 | Origins/Tunnel | Separate public and private service paths |
| 10 | Operations capstone | Deploy, secure, observe, break, fix, and hand off |

Every module includes a Try It → Break It → Fix It external lab. Work that changes public DNS, security, billing, origins, or real data must use an owned practice environment and a rollback plan.

## Onboarding decisions

| Question | Decision |
|---|---|
| Why teach it? | Website hosting joins DNS, security, Git, deployment, and operations into a portfolio-ready skill. |
| Audience | High-school-readable beginner with basic file and browser skills. |
| Prerequisites | Git/GitHub modules are linked at the point of need; domain purchase is optional. |
| Success | Transfer to a fresh website: independently plan, deploy, secure, troubleshoot, recover, and hand off using current documentation rather than replaying course steps. |
| Activities | Lessons, quizzes, flashcards, external labs, Break/Fix, capstone. |
| Lab model | Real learner-owned Cloudflare/Git environment or a paper simulation where purchasing/production access is inappropriate. |
| Template | Type B skill track; Git is the canonical reference. |
| Content/route | `src/content/certifications/cloudflare-hosting.ts`; `/cert/cloudflare-hosting` until Path B migration. |
| Gate | First-pass content may be available; graduation requires owner walkthrough of every lab and capstone. |
| Delight | First live URL, first custom domain, seeing a preview catch a bug, and recovering without panic. |

## Source and volatility policy

Use official Cloudflare Developer Documentation as the source of truth. Product screens, recommended deployment paths, configuration formats, limits, and pricing may change. Lessons teach durable decisions and direct learners to current official instructions instead of freezing plan limits or fragile dashboard click coordinates into the curriculum.

Primary official documentation families:

- Fundamentals and DNS
- Workers and static assets
- SSL/TLS
- Cache
- Application security and Turnstile
- KV, D1, and R2
- Cloudflare One / Tunnel / Access
- Workers observability

### R2 depth boundary

R2 is the storage product taught beyond awareness level because it is a common website-hosting dependency and a frequent source of beginner browser failures. Module 8 takes a learner from object-storage vocabulary through:

- bucket and key design plus HTTP metadata
- public custom-domain delivery versus private Worker bindings
- temporary presigned S3 operations without exposing credentials
- browser CORS, OPTIONS preflight, exact origin/method/header matching, and exposed response headers
- custom-domain cache effects after a CORS policy change
- development/production isolation, least-privilege tokens, retention, lifecycle, and deletion
- an evidence-based Try It → Break It → Fix It browser upload lab

Large migrations, multipart tuning, event pipelines, data lakes, and advanced media processing remain specialist-track material. The lab must use a disposable bucket and synthetic objects; it never operates on an existing production bucket.

## Graduation gate

The track remains **first-pass / In progress** until the owner completes the course from a new learner profile, performs the live capstone on a fresh disposable site or approved practice hostname without a click-by-click course recipe, verifies cost and deletion guidance against current documentation, confirms that Git detours return learners to the correct Cloudflare lesson, and demonstrates recovery from at least one unfamiliar injected failure.
