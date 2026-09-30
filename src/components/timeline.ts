import { timeline, type TimelineItemData } from '../../Utilities/data/timeline'
import { escapeHtml } from '../dom'

function renderRow(item: TimelineItemData, index: number): string {
  const highlights = item.highlights
    .map(
      highlight => `
          <li class="flex items-start gap-3">
            <span class="shrink-0 mt-0.5 font-black text-accent">-</span>
            <span class="font-serif text-base text-ink leading-snug">${escapeHtml(highlight)}</span>
          </li>`
    )
    .join('')

  return `
    <div class="reveal flex flex-col sm:flex-row gap-4 sm:gap-16 py-10 border-b border-edge last:border-b-0 group" data-reveal="${index * 80}">
      <div class="font-mono text-xl font-black text-muted shrink-0 w-28 pt-1">${escapeHtml(item.year)}</div>

      <div class="row-drift flex-1">
        <p class="font-display font-black text-3xl lg:text-4xl text-ink group-hover:text-accent transition-colors duration-150 leading-none mb-3">
          ${escapeHtml(item.role)}
        </p>

        <p class="text-xs font-black uppercase tracking-widest text-muted mb-1" style="letter-spacing:0.12em">
          ${escapeHtml(item.company)}
        </p>

        <p class="font-mono text-sm text-muted mb-5">${escapeHtml(item.location)}</p>

        <p class="font-serif text-base text-muted leading-relaxed mb-5">${escapeHtml(item.desc)}</p>

        <ul class="space-y-3">${highlights}</ul>
      </div>
    </div>`
}

export function renderTimeline(): string {
  const rows = timeline.map((item, i) => renderRow(item, i)).join('')

  return `
    <section class="py-20 border-b border-edge">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="reveal mb-12" data-reveal="0">
          <h2 class="text-sm font-black uppercase tracking-widest text-ink" style="letter-spacing:0.15em">
            Experience
          </h2>
          <p class="font-serif text-base text-muted leading-relaxed mt-3 max-w-xl">
            6+ years building client-facing mobile products, with recent focus
            on senior ownership, release systems, cross-platform delivery, and
            App Store launches.
          </p>
        </div>

        <div>${rows}</div>
      </div>
    </section>`
}
