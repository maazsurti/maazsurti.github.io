# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

`npm run dev` (Vite dev server) · `npm run build` (`tsc -b` typecheck + Vite build) · `npm run lint` (Biome) · `npm run test` (Vitest) · `npm run preview`.

Run `npm run lint`, `npm run test`, and `npm run build` after meaningful changes — the build runs TypeScript typechecking that lint does not.

See `AGENTS.md` for the command reference and conventions; this file covers what spans multiple files.

## Architecture

Single-page **vanilla TypeScript + jQuery** portfolio, Vite, Tailwind CSS v4. No React, no JSX, no UI framework. Two routes in `src/router.ts`: `/` and `/apps/:id`.

**Rendering model.** Each module in `src/components/` exports a `render*(): string` that returns an HTML template string (Tailwind classes copied literally), plus a `bind*()` that attaches behaviour to the freshly mounted markup. `src/main.ts` composes the home page from the section renderers, mounts it with `mountHtml` (jQuery), then calls `observeReveal()`, `bindAppList()`, and `bindAppDetail()`.

**Routing.** `src/router.ts` is a small history-API router: `matchRoute()` maps a pathname to a route, `navigate()` pushes state, and `startRouter()` intercepts same-origin `a` clicks and reports every change through one listener. `main.ts` re-renders `#root` on each route change and resets scroll — returning from a detail page re-centers the originating card via `sessionStorage` (`returnTo`), set on card click in `appList.ts`.

**Content is data-driven.** Portfolio content lives in `Utilities/data/` (`apps.ts`, `timeline.ts`) — edit data there, not templates. The `App` type in `apps.ts` is the contract shared by the AppList cards and the detail page.

**Design system is token-driven.** All theme tokens (`--color-*`, font families) are defined once in `src/index.css` `@theme` and consumed via Tailwind classes (`bg-bg`, `text-ink`, `text-accent`, `border-edge`, `font-display`, `font-serif`, `font-mono`). Per-app accent colors come from `app.color` data, applied via inline style. Do not hardcode hex values in components.

**Motion system** (all in `src/index.css` plus the small modules in `src/`):
- On-load entrance: `.enter` / `.enter-clip` classes (keyframes `rise` / `clip-up`), staggered via inline `animation-delay`. Used in the Hero for the first-impression cascade; `mountLoader()` gates it by adding `loaded` to `<html>`.
- Scroll reveal: elements carry `data-reveal="<delayMs>"`; `observeReveal()` sets `transitionDelay`, observes with an IntersectionObserver, and adds `is-visible` once.
- `.dot-ping` renders the pulsing ring on the Hero availability dot.
- Scrolling is left to the browser — no wheel interception, so trackpad and keyboard scrolling behave natively.
- Every animation is disabled under `prefers-reduced-motion: reduce` — preserve this guard when adding motion.

## Style constraints

Quiet editorial aesthetic is intentional and locked: cream background, near-black ink, single restrained accent (`#E5421E`), serif display type. No dark mode, no glassmorphism, no gradient text. Portfolio uses only real data — no invented stats. Keep changes surgical and match existing component patterns.
