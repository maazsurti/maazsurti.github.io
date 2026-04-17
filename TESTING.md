# Testing Guide

This project currently uses lightweight verification (build checks + manual smoke tests).
Use this checklist before opening a PR or deploying.

## 1) Fast Local Verification

Run from repo root:

```bash
npm install
npm run build
npm run preview
```

Expected:
- `npm run build` completes without errors and outputs `dist/`.
- `npm run preview` serves the production build locally.

## 2) Core Smoke Tests

Verify these on desktop and mobile viewport:

- App loads with no blank sections or runtime crashes.
- Navbar links/scroll behavior navigate to correct sections.
- Hero, About, Work, and Contact sections all render.
- Footer renders and has no broken links/text.

## 3) Work/Project Card Tests

- Project cards render title, description, tags, and app/store badges.
- Opening a project detail modal works from each card.
- Closing modal works via close button and overlay click (if supported).
- Screenshot carousel (if present) can move through all images.
- Missing screenshot/icon data gracefully falls back to SVG placeholders.

## 4) Content/Data Integrity Tests

After editing data files (`src/Utilities/data/apps.ts`, `src/Utilities/data/timeline.ts`):

- No duplicated IDs or keys in mapped lists.
- External links (`App Store`, `Play Store`, `GitHub`, `Live`) open valid URLs.
- Timeline entries are ordered correctly (newest/oldest as intended).
- Text content has no obvious typos or placeholder strings.

## 5) Contact and External Link Tests

- Contact email link opens mail client with correct address.
- Social/profile links open the intended destinations.
- All external links use secure URLs (`https`).

## 6) Accessibility and UX Checks

- Page can be navigated using keyboard (`Tab`, `Enter`, `Esc` where relevant).
- Interactive elements show visible focus state.
- Images/icons that convey meaning have accessible labels or text alternatives.
- Color contrast is readable in normal viewing conditions.

## 7) Performance and Console Checks

In browser DevTools:

- Console has no red errors during page load and interaction.
- No repeated warning spam after opening/closing modals or navigating sections.
- Basic Lighthouse check (optional): run Performance + Accessibility and confirm no critical regressions.

## 8) Pre-Deploy Checklist

Before `npm run deploy`:

- `npm run build` passes cleanly.
- Quick smoke pass completed on latest production build (`npm run preview`).
- App links, contact links, and project modal flows verified.
- Recent content/data edits are reflected correctly in the UI.

## Optional: Add Automated Tests Later

If you want stronger regression protection, add:
- `vitest` + `@testing-library/react` for component/unit tests.
- One end-to-end smoke test with Playwright for navigation + modal flow.
