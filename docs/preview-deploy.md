# Live preview deploy

Use a hosted static build of Bridge so you can study from your phone or any browser — progress still saves in **localStorage** on that device (same as local dev).

## Recommended: Cloudflare Pages (branch previews)

Best if you want **a URL per branch** (e.g. subnetting PR gets its own link).

1. Sign in at [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select **GreyKeyStudios/Relearn-v0**.
3. Build settings:
   - **Production branch:** `dev`
   - **Build command:** `npm run build`
   - **Build environment variables:** `STATIC_EXPORT` = `1`
   - **Build output directory:** `out`
   - **Node version:** `20`
4. Deploy. Your site will be at something like `https://relearn-v0.pages.dev`.
5. Every push to `dev` updates production; every feature branch/PR gets a **preview URL** automatically.

No `basePath` needed on Cloudflare (site is served from the domain root).

### Optional: custom subdomain

In Pages → **Custom domains** → add e.g. `study.greykeystudios.com` (DNS must point to Cloudflare).

---

## Alternative: GitHub Pages (this repo)

Workflow: [`.github/workflows/preview-pages.yml`](../.github/workflows/preview-pages.yml)

Deploys on push to **`dev`** or **`preview`**.

### One-time setup

1. GitHub repo → **Settings** → **Pages**
2. **Source:** GitHub Actions (not “Deploy from branch”)
3. After the first workflow run, the site is at:

   **https://greykeystudios.github.io/Relearn-v0/**

Uses `NEXT_PUBLIC_BASE_PATH=/Relearn-v0` so assets resolve under the project path.

> **Note:** GitHub Pages on **private** repos may require a paid GitHub plan. Cloudflare Pages is free for private repos.

---

## Local static preview

```powershell
cd "Cert Companion"
$env:STATIC_EXPORT = "1"
# GitHub Pages path (optional — omit for root hosting):
# $env:NEXT_PUBLIC_BASE_PATH = "/Relearn-v0"
npm run build
npx serve out
```

Open the URL `serve` prints (usually http://localhost:3000).

---

## What works on the live site

| Feature | Works? |
|--------|--------|
| Lessons, quizzes, flashcards, simulators | Yes |
| Progress, mastery, study plan | Yes (per browser, localStorage) |
| Deep links (`/cert/ccna/lesson/subnetting`) | Yes |
| Quiz `?bank=1` / `?objective=` query params | Yes (client-side) |
| Server APIs / auth | N/A — app is fully static |

---

## Branches

| Branch | Typical use |
|--------|-------------|
| `dev` | Stable preview (subnetting + latest merged work) |
| `preview` | Optional long-lived staging branch |
| `feature/*` | Cloudflare preview URLs per branch; GitHub Pages only tracks `dev`/`preview` |

---

## Troubleshooting

- **404 on refresh** — use Cloudflare or GitHub Pages with the workflow above; do not open `out/index.html` directly from disk.
- **Blank styles** — on GitHub Pages, confirm `NEXT_PUBLIC_BASE_PATH` matches the repo name (`/Relearn-v0`).
- **Old content** — hard refresh or clear site data; redeploy waits for the GitHub Action / Cloudflare build to finish.
