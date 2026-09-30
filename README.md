# Maaz Surti — Portfolio

Recruiter-facing portfolio for a senior mobile developer. Single page (`/`) with a
per-app detail route (`/apps/:id`).

## Stack

Vanilla TypeScript + jQuery, Vite, Tailwind CSS v4, Vitest + jsdom. No UI framework.

## Commands

```sh
npm run dev        # Vite dev server
npm run build      # tsc -b typecheck + production build
npm run lint       # Biome
npm run test       # Vitest suite (jsdom)
npm run preview    # preview the production build
```

## Layout

- `src/main.ts` — entry: reduced-motion seed, loader, router, route rendering.
- `src/router.ts` — history-API router for `/` and `/apps/:id`.
- `src/components/` — one module per section; `render*()` returns HTML, `bind*()` wires behaviour.
- `Utilities/data/` — portfolio content (`apps.ts`, `timeline.ts`).
- `src/index.css` — Tailwind import, theme tokens, motion CSS.
- `tests/` — Vitest + jsdom tests.

Deployment runs through `.github/workflows/deploy.yaml` to GitHub Pages; `public/404.html`
provides the SPA fallback for deep links.
