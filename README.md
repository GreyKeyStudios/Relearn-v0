# ReLearn v0 — Bridge Study Companion

Mobile-first CCNA cert study app and the first implementation of the **ReLearn** learning engine: structured curriculum, quizzes, drills, simulators, weakness tracking, mastery, and adaptive review.

**GitHub:** [GreyKeyStudios/Relearn-v0](https://github.com/GreyKeyStudios/Relearn-v0) (private)

**Source of truth:** [`BRIDGE_MASTER.md`](BRIDGE_MASTER.md)

**Contributing / branch workflow:** [`CONTRIBUTING.md`](CONTRIBUTING.md)

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify (required before PR)

```bash
npm run build
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npx tsc --noEmit
```

## Branch model

```text
main     → stable
dev      → integration
feature/* → Cursor / v0 / Codex work
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full multi-tool workflow.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · Zustand (localStorage progress)

## Status

- Phases 1–4.75 complete (engine, CES, CCNA pilot hooks)
- **CCNA Network Fundamentals** — exam-ready content (domain 1 pilot)
- Phase 5 (AI), Phase 6 (native app), Phase 7 (Python) — not started / blocked per BRIDGE_MASTER
