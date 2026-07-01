# Live preview deploy

Use a hosted static build of Bridge so you can study from your phone or any browser — progress still saves in **localStorage** on that device (same as local dev).

## Recommended: Cloudflare Pages (branch previews)

Best if you want **a URL per branch** (e.g. subnetting PR gets its own link).

1. Sign in at [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select **GreyKeyStudios/Relearn-v0**.
3. Build settings (**Framework preset: None** — not “Next.js”):
   - **Production branch:** `dev`
   - **Build command:** `npm run build:pages`
   - **Build output directory:** `out`
   - **Node version:** `20` (or leave blank — `.nvmrc` in repo pins 20)
4. Deploy. Your site will be at something like `https://relearn-v0.pages.dev`.
5. Every push to `dev` updates production; every feature branch/PR gets a **preview URL** automatically.

`CF_PAGES=1` is set automatically by Cloudflare during builds, so `npm run build` also works — but **`build:pages` is explicit and safer**. Do **not** use the Cloudflare “Next.js” framework preset; this app is a static export to `out/`, not Workers SSR.

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

- **Cloudflare keeps building old commit `3de0e37`** — you clicked **Retry deployment** on a failed build; Retry reuses that commit forever. Use **Create deployment → branch `dev` → latest commit**, or push to `dev` and wait for the new auto-deploy (do not Retry the old one).
- **404 on Cloudflare root (`relearn-v0.pages.dev`)** — build output is wrong. In Pages → Settings → Builds: **Framework preset = None**, **Build command = `npm run build:pages`**, **Output directory = `out`**. Redeploy. Check the build log for `Generating static pages` and an `out/` artifact upload.
- **404 on refresh** — use Cloudflare or GitHub Pages with the workflow above; do not open `out/index.html` directly from disk.
- **Blank styles** — on GitHub Pages, confirm `NEXT_PUBLIC_BASE_PATH` matches the repo name (`/Relearn-v0`).
- **Old content** — hard refresh or clear site data; redeploy waits for the GitHub Action / Cloudflare build to finish.
