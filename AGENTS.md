# Agent Notes

## Project

This is a React + TypeScript portfolio site built with Vite, React Router, and Tailwind CSS v4.

## Commands

- `npm run dev`: start the local Vite dev server.
- `npm run build`: run TypeScript build checks and create the production build.
- `npm run lint`: run ESLint.
- `npm run preview`: preview the production build locally.

## Structure

- `src/App.tsx`: app routes and page composition.
- `src/components/`: homepage sections and shared UI components.
- `src/pages/`: route-level pages.
- `Utilities/data/`: portfolio content data.
- `Utilities/utils/`: shared helper utilities.
- `src/index.css`: global styles, Tailwind import, fonts, and theme tokens.
- `public/`: static assets and SEO files.

## Conventions

- Prefer existing component patterns before adding new abstractions.
- Keep portfolio content in `Utilities/data/` when practical instead of hardcoding it into components.
- Use Tailwind utility classes and the theme tokens defined in `src/index.css`.
- Preserve the quiet editorial style of the site: cream background, black text, restrained accent color, serif display typography.
- Keep changes scoped; avoid unrelated refactors or generated churn.
- Run `npm run lint` and `npm run build` after meaningful code changes.

## Notes

- The app uses `BrowserRouter`, with routes for `/` and `/apps/:id`.
- The Vite dev server may move to another port if `5173` is already in use.
