<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# ReLearn v0 — agent rules

**Read first:** [`BRIDGE_MASTER.md`](BRIDGE_MASTER.md) · [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Git workflow

- **Do not push directly to `main`.**
- Branch from `dev`: `feature/<tool>-<short-description>` (e.g. `feature/cursor-lesson-stepper`, `feature/v0-dashboard`).
- Open PRs into `dev`; stable releases merge `dev` → `main`.

## Verify before opening a PR

```bash
npm run build
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npm run verify:curriculum -- --strict-pedagogy   # Phase 4.8 BLS warnings
npm run verify:curriculum -- --strict-experience # LES storyboard checks
npx tsc --noEmit
```

**Topic complete gate:** [`docs/definition-of-done.md`](docs/definition-of-done.md) — no topic graduates until all artifacts align. Relocations: [`docs/ccna-deferral-manifest.md`](docs/ccna-deferral-manifest.md).

## File ownership (summary)

| Area | Who may edit |
|------|----------------|
| `src/content/certifications/ccna.ts` | CCNA content agent only |
| Other cert `*.ts` in `src/content/certifications/` | Per-cert content agent |
| `src/content/types.ts`, `src/lib/`, `src/stores/`, `src/app/` | Platform agents per BRIDGE_MASTER |
| `BRIDGE_MASTER.md` | M0 / planning only unless assigned |

Full roster: BRIDGE_MASTER §8–9.

## Tool scope

- **Cursor** — implementation, content, architecture (within ownership).
- **v0** — UI/components only; no store, schema, or curriculum edits.
- **Codex** — PR review and targeted fixes; follow repo guidance above.

## CCNA pilot

Domain-by-domain exam-ready content on `dev` / feature branches. Michael QA on completed domains before expanding scope.
