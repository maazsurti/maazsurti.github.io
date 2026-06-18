# Roadmap

Milestone scope, exit criteria, and status. Not a timeline — order reflects dependency, not calendar.

No implementation detail — that lives in `architecture.md` and `decisions.md`.

---

## M0 — Editorial portfolio baseline ✅

Single-page recruiter-facing portfolio with data-driven app entries and detail pages.

Exit criteria: all sections render from data; lint + build pass.

## M1 — Memorable micro-interactions ✅

Tasteful, reduced-motion-safe motion that makes the site memorable without breaking the editorial restraint — Hero first-impression entrance + scroll reveals + hover affordances.

Exit criteria: Hero animates on load; sections reveal on scroll; all motion disabled under `prefers-reduced-motion`; lint + build pass.
