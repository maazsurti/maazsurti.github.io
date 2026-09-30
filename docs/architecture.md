# Architecture

HOW things are built — patterns, rules, API conventions, code examples.

No rationale here (that lives in `decisions.md`). No task lists (that lives in `backlog.md`).

---

## Docs philosophy

These docs are the sole source of truth for this project. Write them so any engineer or AI assistant can pick up full context from them alone, with no prior conversation. Docs are tool-agnostic — no references to specific AI tools or models.

- One purpose per file. No content belongs in two files.
- If it only exists in conversation or a tool's memory, it does not exist.
- Stale docs are worse than no docs — update immediately after meaningful changes.
- When creating a new file in `docs/`, add it to `.gitignore` in the same step (if docs are gitignored).

---

## Debugging

**Occam's Razor first.** Start with the simplest explanation in project code before escalating to framework or platform internals.

**Log before theorising.** Do not form a theory and immediately write a fix. Add targeted logging first — what is called, in what order, with what values. Let the logs point to the cause.

Ask in order:
1. What do the logs actually show? Does execution match intent?
2. Is there an obvious sequencing or timing problem in the call chain?
3. Is state being mutated more than expected, or in the wrong order?
4. Is something running that shouldn't, or not running that should?

Only escalate to framework internals once all project-code explanations are ruled out — confirmed by logs. A fix written without logs is a guess. A fix written after logs is a diagnosis.

---

## Rendering model

The app is plain TypeScript plus jQuery. There is no component framework and no JSX.

- Each module in `src/components/` exports `render*(): string` returning an HTML template string, and (where needed) `bind*()` that wires behaviour to the mounted markup.
- `src/main.ts` composes the home page by concatenating the section renderers inside the `<div class="min-h-screen flex flex-col bg-bg text-ink">` wrapper, then mounts once with `mountHtml`.
- After every mount, `main.ts` calls `observeReveal()`, `bindAppList()`, and `bindAppDetail()`.
- Tailwind class names are copied into the template strings literally — the design lives in the classes, so preserve them exactly when porting markup.

## Routing

`src/router.ts` is a history-API router.

- `matchRoute(pathname)` → `{ name: 'home' } | { name: 'app', id } | { name: 'notFound' }`; trailing slashes are normalised and the id is URL-decoded.
- `navigate(path)` pushes (or replaces) history state and notifies the single registered listener.
- `startRouter(onRoute)` registers the listener, intercepts plain same-origin `a[href]` clicks (skipping `target`, `download`, and modifier keys), handles `popstate`, and returns a teardown.
- Scroll reset lives in `main.ts`: returning to `/` re-centers the card named by `sessionStorage` `returnTo`; otherwise the window jumps to the top with `behavior: 'instant'` (the global `scroll-behavior: smooth` would otherwise animate the reset).

---

## Rules

- **Content lives in `Utilities/data/`, never in templates.** Renderers render data. The `App` type in `apps.ts` is the contract shared by the AppList cards and the detail page.
- **Escape interpolated data.** Any value from `Utilities/data/` that lands in a template string goes through `escapeHtml`.
- **Use theme tokens, not hex.** Colours and fonts come from the `@theme` block in `src/index.css` via Tailwind classes (`bg-bg`, `text-ink`, `text-accent`, `border-edge`, `font-display/serif/mono`). Per-app accent comes from `app.color` data, applied inline.
- **Separate motion container from interaction surface.** `.reveal` transitions `transform` with a long duration and an inline `transitionDelay`; putting hover/press transforms on the same element inherits that timing. Put the reveal on a wrapper and interactions on the element inside (see the AppList card).
- **Reveal markup carries its own delay.** A reveal target is authored as `class="reveal" data-reveal="<ms>"`; `observeReveal()` sets `transitionDelay` and adds `is-visible` once. Don't wire the IntersectionObserver per component.
- **Interaction classes live in `src/index.css`, not per-element Tailwind utilities:** `.arrow-out`/`.arrow-back`/`.arrow-down` (hover nudge, needs `group` on the anchor), `.pressable` (press scale), `.card-link`/`.card-numeral` (card hover, colour from inline `--app-color`), `.row-drift` (timeline). Central classes keep hover gating (`hover: hover`) and the reduce-motion guard in one place.
- **Whitespace in templates is deliberate.** Inline separators (dots, arrows) need a literal space (`${item} <span>·</span> `) or the run has no line-break opportunities and overflows on mobile — margins alone don't let text wrap.
- **Every animation degrades under `prefers-reduced-motion: reduce`** — keep the guard block in `src/index.css` in sync when adding motion.

## Testing

Vitest + jsdom, one file per module group in `tests/`.

- `tests/setup.ts` provides the jsdom gaps the app needs: `scrollTo`, `scrollIntoView`, `matchMedia`, `IntersectionObserver`, `requestAnimationFrame`, and a fresh `#root` per test.
- Renderers are tested by mounting into `#root` and asserting on the DOM.
- `tests/entry.test.ts` boots `src/main.ts` itself and drives a real route change, which is the end-to-end guard for the composition in `main.ts`.
- Mock browser APIs with `vi.stubGlobal` (globals auto-unstub between tests) and use fake timers for the loader.
