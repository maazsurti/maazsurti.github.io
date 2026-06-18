# Context

Domain glossary for Maaz Surti Portfolio. Defines what things ARE — not how they're built or why decisions were made.

When a term has a precise meaning in this codebase, it lives here. When a term is used that conflicts with this glossary, call it out immediately.

This file is a glossary and nothing else. No implementation detail, no decisions, no task lists.

---

## App
A shipped product entry in the portfolio. Defined by the `App` type in `Utilities/data/apps.ts`; surfaces as a card in the homepage AppList and as the `/apps/:id` detail page. Carries a per-app `color` used as its accent.

## Section
A top-level homepage band rendered in `src/App.tsx`: Hero, AppList, Timeline, Skills, Contact, Footer — in that order.

## Reveal
A scroll-triggered entrance: an element starts hidden and transitions in when it enters the viewport. Driven by the `useReveal` hook + `.reveal` CSS class.

## Entrance
The on-load animation cascade in the Hero — distinct from a Reveal in that it fires on page load (not scroll), via the `.enter` / `.enter-clip` classes.

## Accent
The single brand colour `#E5421E`. The only non-monochrome colour in the editorial palette, used sparingly for emphasis.
