import $ from 'jquery'
import { apps, type App } from '../../Utilities/data/apps'
import { escapeHtml, setReturnTo } from '../dom'

function renderCard(app: App, index: number): string {
  const delay = (index % 2) * 90
  const numeral = String(index + 1).padStart(2, '0')

  const meta = [
    { value: app.meta.platform, label: 'Platform' },
    { value: app.meta.languages, label: 'Languages' },
    { value: app.year, label: 'Year' },
  ]
    .map(
      ({ value, label }) => `
        <div>
          <p class="font-mono text-base font-bold text-ink">${escapeHtml(value)}</p>
          <p class="text-xs font-black uppercase text-muted mt-0.5" style="letter-spacing:0.1em">${escapeHtml(label)}</p>
        </div>`
    )
    .join('')

  const livePill = app.stores.appStore
    ? `<span class="inline-flex items-center gap-1.5 font-mono text-[10px] font-black uppercase px-2 py-1 rounded-full border border-current text-muted group-hover:border-ink group-hover:text-ink transition-colors duration-150" style="letter-spacing:0.1em">
          <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background-color:${app.color}"></span>
          Live
        </span>`
    : ''

  return `
    <div class="reveal" data-reveal="${delay}">
      <a
        href="/apps/${app.id}"
        data-app-id="${app.id}"
        id="app-${app.id}"
        class="card-link bg-surface group relative overflow-hidden block h-full"
        style="--app-color:${app.color}"
      >
        <span
          class="card-numeral font-display absolute top-0 right-4 text-[8rem] font-black leading-none select-none pointer-events-none"
          style="color:${app.color};letter-spacing:-0.04em"
        >${numeral}</span>

        <div class="p-6 lg:p-8 relative">
          <div class="flex items-center justify-between mb-5">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full shrink-0" style="background-color:${app.color}"></span>
              <span class="text-xs font-black uppercase tracking-widest text-muted" style="letter-spacing:0.1em">
                ${escapeHtml(app.category)}
              </span>
            </div>
            <span class="font-mono text-xs font-black uppercase tracking-widest text-muted" style="letter-spacing:0.1em">
              ${escapeHtml(app.tech)}
            </span>
          </div>

          <h3 class="font-display text-4xl lg:text-5xl font-black leading-none mb-4 transition-colors duration-200 group-hover:text-(--app-color)">
            ${escapeHtml(app.name)}
          </h3>

          <p class="font-serif text-lg text-muted leading-snug mb-6 italic">${escapeHtml(app.tagline)}</p>

          <p class="font-serif text-base text-ink leading-relaxed mb-6">${escapeHtml(app.impact)}</p>

          <div class="flex flex-wrap gap-6 pt-5 border-t border-edge">
            ${meta}
            <div class="ml-auto self-end flex items-center gap-2">
              ${livePill}
              <span class="arrow-out font-mono text-xs font-black uppercase text-muted group-hover:text-ink transition-colors duration-200" style="letter-spacing:0.1em">↗</span>
            </div>
          </div>
        </div>
      </a>
    </div>`
}

export function renderAppList(): string {
  const cards = apps.map((app, i) => renderCard(app, i)).join('')

  return `
    <section class="py-20 border-b border-edge">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="reveal flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-10" data-reveal="0">
          <div>
            <h2 class="text-sm font-black uppercase tracking-widest text-ink" style="letter-spacing:0.15em">
              Selected Work
            </h2>
            <p class="font-serif text-base text-muted leading-relaxed mt-3 max-w-xl">
              Production apps and independently built products across accounting,
              logistics, marketplaces, events, fitness, and services.
            </p>
          </div>
          <span class="font-mono text-sm text-muted">${apps.length} featured projects</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-px">${cards}</div>
      </div>
    </section>`
}

/** Remembers which card a visitor came from so returning home re-centers it. */
export function bindAppList(root: ParentNode = document): void {
  $(root)
    .find('a.card-link')
    .on('click', function (this: HTMLElement) {
      const id = this.dataset.appId
      if (id) setReturnTo(id)
    })
}
