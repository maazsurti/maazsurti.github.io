# Decisions

WHY things are the way they are. Locked architectural choices with rationale.

Read this before changing anything structural. No implementation detail or code examples here — those live in `architecture.md`. No task lists — those live in `backlog.md`.

---

## Quiet editorial aesthetic

**Decision:** Cream background, near-black ink, single restrained accent (`#E5421E`), serif display typography. No dark mode, no glassmorphism, no gradient text.

**Why:** Recruiter-facing portfolio for a senior mobile developer; restraint reads as craft. Trend-driven effects date quickly and dilute the signal.

**Consequences / constraints:** New UI must use the existing theme tokens. No second accent colour. Per-app colours are the only sanctioned colour variation.

**Revisit if:** The site is repositioned for a different audience.

## Real data only

**Decision:** Every stat and app entry reflects real work — no invented numbers.

**Why:** Service-based credibility; fabricated metrics are a liability in hiring conversations.

**Consequences / constraints:** Content changes go through `Utilities/data/`. Don't add placeholder stats to fill space.

**Revisit if:** Never, by intent.

## Motion is additive and reduced-motion-safe

**Decision:** Micro-interactions (load entrance, scroll reveal, hover nudges) implemented with pure CSS + one IntersectionObserver hook — no animation library. All motion is disabled under `prefers-reduced-motion: reduce`.

**Why:** Keep the bundle lean and the aesthetic restrained; respect accessibility. The Hero entrance is the deliberate first-impression moment.

**Consequences / constraints:** Any new motion must degrade to a static state under the reduced-motion guard in `src/index.css`. Don't reach for a motion library for effects CSS can express.

**Revisit if:** Motion needs outgrow CSS (e.g. orchestrated, interruptible sequences).

## No UI framework — vanilla TypeScript + jQuery

**Decision:** The site is plain TypeScript with jQuery for DOM work. No React, no JSX, no component framework. Server state is still just static data in `Utilities/data/`.

**Why:** The UI is a handful of static, data-driven sections. A framework earns its bundle weight and build complexity when there is shared interactive state to manage; here there is none, so the framework was pure overhead. jQuery keeps the DOM-wiring terse without a render runtime. TypeScript is kept because it costs nothing at runtime and catches template/route mistakes.

**Consequences / constraints:** Markup lives in template strings inside `render*()` functions, so Tailwind classes are copied literally and must be preserved exactly. Anything interpolated from data goes through `escapeHtml`. Behaviour is attached after mount by `bind*()` functions rather than by declarative bindings.

**Revisit if:** The site grows real client state (filters, auth, live data) — at that point a framework would earn its cost.

## Vitest + jsdom for tests

**Decision:** Behaviour is verified with Vitest running in a jsdom environment; no browser or E2E runner.

**Why:** The app is DOM-rendering logic — template output, routing, and motion wiring. jsdom exercises all of that without a browser download, so the suite stays fast enough to run on every change.

**Consequences / constraints:** jsdom gaps (`matchMedia`, `IntersectionObserver`, `scrollTo`) are stubbed in `tests/setup.ts`, not in production code. `tests/entry.test.ts` boots `main.ts` directly, which is the guard against the composition in the entry point drifting.

**Revisit if:** Layout-dependent behaviour (real scroll timing, image loading, responsive breakpoints) needs verification — add a browser runner rather than weakening jsdom tests.
