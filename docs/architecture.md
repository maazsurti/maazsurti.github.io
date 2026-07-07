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

## Rules

- **Content lives in `Utilities/data/`, never in JSX.** Components render data. The `App` type in `apps.ts` is the contract shared by `AppList` and `AppDetail`.
- **Use theme tokens, not hex.** Colours and fonts come from the `@theme` block in `src/index.css` via Tailwind classes (`bg-bg`, `text-ink`, `text-accent`, `border-edge`, `font-display/serif/mono`). Per-app accent comes from `app.color` data, applied inline.
- **Motion.** On-load entrance = `.enter` / `.enter-clip` + inline `animationDelay`. Scroll reveal = `useReveal(delay)` → `[ref, className, style]` tuple applied with the base `.reveal` class. The tuple shape is deliberate: member access on a ref-bearing object during render trips `react-hooks/refs`. For list items, wrap the row in a subcomponent so the hook isn't called inside `.map`.
- **Separate motion container from interaction surface.** `.reveal` transitions `transform` with a long duration and inline `transitionDelay`; putting hover/press transforms on the same element inherits that timing. Put the reveal on a wrapper div and interactions on the element inside (see `AppCard`).
- **Interaction classes live in `src/index.css`, not per-element Tailwind utilities:** `.arrow-out`/`.arrow-back`/`.arrow-down` (hover nudge, needs `group` on the anchor), `.pressable` (press scale), `.card-link`/`.card-numeral` (card hover, colour from inline `--app-color`), `.row-drift` (timeline). Central classes keep hover gating (`hover: hover`) and the reduce-motion guard in one place.
- **JSX strips whitespace-only lines between expressions.** Inline separators (dots, arrows) need a literal same-line space (`{item} <span>·</span>`) or the run has no line-break opportunities and overflows on mobile — margins alone don't let text wrap.
- **Every animation degrades under `prefers-reduced-motion: reduce`** — keep the guard block in `src/index.css` in sync when adding motion.
