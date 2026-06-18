# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

`npm run dev` (Vite dev server) · `npm run build` (`tsc -b` typecheck + Vite build) · `npm run lint` (ESLint) · `npm run preview`.

Run `npm run lint` **and** `npm run build` after meaningful changes — the build runs TS typechecking that lint does not. There is no test suite.

See `AGENTS.md` for the command reference and conventions; this file covers what spans multiple files.

## Architecture

Single-page React 19 + TypeScript portfolio, Vite 8, Tailwind CSS v4, React Router 7. Two routes in `src/App.tsx`: `/` composes homepage sections in order (Hero → AppList → Timeline → Skills → Contact → Footer); `/apps/:id` is the per-app detail page. `ScrollToTop` resets scroll on navigation.

**Content is data-driven.** Portfolio content lives in `Utilities/data/` (`apps.ts`, `timeline.ts`) — edit data there, not JSX. The `App` type in `apps.ts` is the contract for both `AppList` cards and the `AppDetail` page. Keep new content out of components.

**Design system is token-driven.** All theme tokens (`--color-*`, font families) are defined once in `src/index.css` `@theme` and consumed via Tailwind classes (`bg-bg`, `text-ink`, `text-accent`, `border-edge`, `font-display`, `font-serif`, `font-mono`). Per-app accent colors come from `app.color` data, applied via inline style. Do not hardcode hex values in components.

**Motion system** (added for micro-interactions, all in `src/index.css` + `src/hooks/useReveal.ts`):
- On-load entrance: `.enter` / `.enter-clip` classes (keyframes `rise` / `clip-up`), staggered via inline `animationDelay`. Used in the Hero for first-impression cascade.
- Scroll reveal: `useReveal(delay)` returns `[ref, className, style]` (a tuple, not an object — member access on a ref-bearing object during render trips `react-hooks/refs`). Apply the returned class alongside the base `.reveal` class. Section list-items use a small Row subcomponent so the hook isn't called inside `.map`.
- `.dot-ping` renders the pulsing ring on the Hero availability dot.
- Every animation is disabled under `@media (prefers-reduced-motion: reduce)` — preserve this guard when adding motion.

## Style constraints

Quiet editorial aesthetic is intentional and locked: cream background, near-black ink, single restrained accent (`#E5421E`), serif display type. No dark mode, no glassmorphism, no gradient text. Portfolio uses only real data — no invented stats. Keep changes surgical and match existing component patterns.
