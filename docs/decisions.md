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
