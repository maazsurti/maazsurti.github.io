# Context

Domain glossary for Maaz Surti Portfolio. Defines what things ARE — not how they're built or why decisions were made.

When a term has a precise meaning in this codebase, it lives here. When a term is used that conflicts with this glossary, call it out immediately.

This file is a glossary and nothing else. No implementation detail, no decisions, no task lists.

---

## App
A shipped product entry in the portfolio. Defined by the `App` type in `Utilities/data/apps.ts`; surfaces as a card in the homepage AppList and as the `/apps/:id` detail page. Carries a per-app `color` used as its accent.

## Section
A top-level homepage band composed in `src/main.ts`: Hero, AppList, Timeline, Skills, Contact, Footer — in that order.

## Route
One of the recognised URLs: `home` (`/`), `app` (`/apps/:id`), or `notFound`. Resolved by `matchRoute` in `src/router.ts`.

## Reveal
A scroll-triggered entrance: an element starts hidden and transitions in when it enters the viewport. Authored as `class="reveal" data-reveal="<ms>"` and driven by `observeReveal()` plus the `.reveal` CSS.

## Entrance
The on-load animation cascade in the Hero — distinct from a Reveal in that it fires on page load (not scroll), via the `.enter` / `.enter-clip` classes. Gated by the `loaded` class the intro loader adds to `<html>`.

## Accent
The single brand colour `#E5421E`. The only non-monochrome colour in the editorial palette, used sparingly for emphasis.

## Reduced motion
The `reduce-motion` class on `<html>`, seeded from the OS preference but overridable. Every animation in `src/index.css` degrades under it.
