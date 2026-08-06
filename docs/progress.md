# Progress

WHAT is built and working. Updated after every meaningful change.

No rationale, no patterns, no tasks — those live in `decisions.md`, `architecture.md`, and `backlog.md` respectively.

---

## Portfolio site — baseline

- Single-page site live: Hero, AppList (data-driven cards → `/apps/:id` detail), Timeline, Skills, Contact, Footer.
- Token-driven editorial design system in `src/index.css`; content in `Utilities/data/`.
- `npm run lint` and `npm run build` pass.

## Micro-interactions & motion — 2026-06-18

- Hero on-load entrance cascade: availability pill → name lines (clip-up) → role → pitch → contact → stats, staggered ~0.05–1.05s.
- Hero detail touches: accent-coloured period in "Surti.", pulsing ring on the availability dot.
- Scroll-reveal across AppList, Timeline, Skills, Contact via `useReveal` hook (IntersectionObserver, fires once); per-item stagger in list sections.
- Hover nudge on app-card and contact-link `↗` arrows.
- All motion gated behind `prefers-reduced-motion: reduce`.
- Verified: lint clean, build green.

## Intro loader & return-scroll — 2026-06-18

- One-time intro overlay (`Loader`, mounted once at App level): name rises + accent line draws, holds for `document.fonts.ready` (min 800ms, capped 2s), then wipes up. On dismiss it adds `.loaded` to `<html>`, which is the gate that starts the Hero entrance — intro flows straight into the cascade. Near-instant + motion-free under reduced-motion.
- Returning to `/` from an app detail page re-centers the originating card instantly (no scroll-to-top): card stores its id in `sessionStorage` on click; `ScrollToTop` reads it in a layout effect and `scrollIntoView({ block: 'center', behavior: 'instant' })`.
- Detail-page entrance: main blocks (nav → header → screenshots → about → meta) rise in with a tight 0.06s stagger, reusing the `.enter` mechanism.
- Detail-page navigation snaps to top via `scrollTo({ behavior: 'instant' })` — the `html { scroll-behavior: smooth }` rule was animating the reset, which read as an unwanted scroll-up.
- Verified: lint clean, build green.

## Micro-interaction refinement pass — 2026-07-07

- App card: JS border-color mutation replaced with a CSS accent line that draws in from the left and exits through the right (`.card-link::after`, colour from `--app-color`); decorative index numeral rises and darkens on hover (`.card-numeral`). Reveal moved to a wrapper div so card interactions aren't polluted by the reveal's slow transform transition.
- Timeline: row content drifts 4px right on hover while the year stays anchored (`.row-drift`).
- Arrows unified under `.arrow-out` / `.arrow-back` / `.arrow-down` CSS classes (hover nudge along pointing direction) — replaces per-element Tailwind utilities; now covered by the reduce-motion guard.
- Press feedback: `.pressable` (`scale(0.97)` on `:active`) on the App Store CTA.
- Underlined links: `text-underline-offset` eases 4px→6px on hover, one global rule.
- Scroll reveal: opacity resolves at 0.5s ahead of the 0.7s transform settle.
- Non-motion polish: global `:focus-visible` accent outline, `-webkit-tap-highlight-color: transparent`, `tabular-nums` on mono, `text-wrap: pretty` on paragraphs.
- All new hover motion gated behind `(hover: hover) and (pointer: fine)` and degraded under reduce-motion.
- Responsive fix (Skills): real spaces around the `·` separator restore line-break opportunities between items (margin-only gaps rendered one unbreakable run that overflowed on mobile); group label width now `sm:w-32` so labels don't wrap on mobile.
- Verified: lint clean, build green.

## Reduce-motion control & image shimmer — 2026-06-18

- Reduced motion now driven by a `reduce-motion` class on `<html>` (set in `main.tsx`), seeded from the OS preference but overridable via localStorage — `prefers-reduced-motion` itself is OS-level and not settable from JS.
- Dev-only `MotionToggle` (rendered only under `import.meta.env.DEV`) forces reduced motion on/off to preview the reduced experience on a device where the OS preference is off.
- Screenshots on the detail page load through `ShotImage`: a tinted placeholder with a soft sheen sweep (`shimmer`) that crossfades to the image on load, falling back to a colour block on error. Replaced the old `failedScreenshots` state machinery.
- Verified: lint clean, build green.

## Slate portfolio entry — 2026-08-06

- Slate added as the second featured app with product details grounded in its Flutter project documentation.
- App links now support interactive demos; Slate links to `maazsurti.com/slate` from its detail page.
- Five supplied Slate screenshots cover Quick Record, Transactions, Credit Ledger, Analytics, and Settings.
- Selected Work copy now covers both client work and independently built products.
- Verified: lint clean, build green.
