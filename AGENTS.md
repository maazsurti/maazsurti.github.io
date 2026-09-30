# Agent Notes

## Project

This is a vanilla TypeScript + jQuery portfolio site built with Vite and Tailwind CSS v4.
No UI framework — the DOM is rendered from plain HTML template strings and wired with jQuery.

## Commands

- `npm run dev`: start the local Vite dev server.
- `npm run build`: run TypeScript typechecking (`tsc -b`) and create the production build.
- `npm run lint`: run Biome.
- `npm run test`: run the Vitest suite once.
- `npm run test:watch`: run Vitest in watch mode.
- `npm run preview`: preview the production build locally.

## Structure

- `src/main.ts`: entry point — seeds reduced motion, mounts the loader, starts the router, renders routes.
- `src/router.ts`: history-API router (`/` and `/apps/:id`), intercepts same-origin link clicks.
- `src/components/`: one module per page section, each exporting `render*(): string` plus a `bind*()` where behaviour is needed.
- `src/dom.ts`: `escapeHtml`, `mountHtml`, session-storage and year helpers.
- `src/motion.ts` / `src/reveal.ts` / `src/loader.ts`: motion and shell behaviour.
- `Utilities/data/`: portfolio content data (`apps.ts`, `timeline.ts`).
- `Utilities/utils/`: shared helper utilities.
- `src/index.css`: global styles, Tailwind import, fonts, and theme tokens.
- `public/`: static assets and SEO files.
- `tests/`: Vitest + jsdom tests, one file per module group.

## Conventions

- Components are `render*(): string` functions; mount them with `mountHtml`. Never build DOM with `document.createElement` when a template string reads better.
- Interpolated data must go through `escapeHtml`.
- Keep portfolio content in `Utilities/data/` when practical instead of hardcoding it into components.
- Use Tailwind utility classes and the theme tokens defined in `src/index.css`.
- Preserve the quiet editorial style of the site: cream background, black text, restrained accent color, serif display typography.
- Keep changes scoped; avoid unrelated refactors or generated churn.
- Run `npm run lint`, `npm run test`, and `npm run build` after meaningful code changes.

## Notes

- The app uses history-based routing, with routes for `/` and `/apps/:id`.
- `public/404.html` is an SPA fallback for GitHub Pages: it stashes the deep-link path in `sessionStorage` and `index.html` restores it via `history.replaceState`.
- The Vite dev server may move to another port if `5173` is already in use.
- A globally exported `NODE_ENV=production` makes Vite treat even the dev server as a production build, so `import.meta.env.DEV` is false and the dev-only motion toggle never mounts.
