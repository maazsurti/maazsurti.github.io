import { apps, type App, type AppScreenshot } from '../../Utilities/data/apps'
import { escapeHtml } from '../dom'

export const DEFAULT_TITLE = 'Maaz Surti - Senior Mobile Developer'

export function titleForApp(id: string): string {
  const app = apps.find(candidate => candidate.id === id)
  return app ? `${app.name} - Maaz Surti` : DEFAULT_TITLE
}

function chip(text: string): string {
  return `<span class="font-mono text-[11px] font-black uppercase px-3 py-1.5 border border-edge text-ink bg-surface" style="letter-spacing:0.08em">${escapeHtml(text)}</span>`
}

function metaItem(value: string, label: string): string {
  return `
    <div>
      <p class="font-mono text-base font-bold text-ink">${escapeHtml(value)}</p>
      <p class="text-xs font-black uppercase text-muted mt-1" style="letter-spacing:0.1em">${escapeHtml(label)}</p>
    </div>`
}

function shotImage(app: App, shot: AppScreenshot, className: string): string {
  return `
    <div
      class="relative overflow-hidden ${className}"
      data-shot
      data-shot-app="${app.id}"
      data-shot-label="${escapeHtml(shot.label)}"
      data-shot-class="${className}"
      style="background-color:${app.color}14;border:1px solid ${app.color}30"
    >
      <span class="shimmer" style="background-color:${app.color}10"></span>
      <img
        src="${shot.src}"
        alt="${escapeHtml(shot.label)}"
        loading="lazy"
        class="w-full h-full object-cover object-top transition-opacity duration-500 opacity-0"
      />
    </div>`
}

function placeholder(app: App, label: string, className: string): string {
  return `
    <div
      class="flex items-end p-4 ${className}"
      style="background-color:${app.color}18;border:1px solid ${app.color}30"
    >
      <span class="font-mono text-xs font-black uppercase" style="color:${app.color};letter-spacing:0.1em;opacity:0.6">
        ${escapeHtml(label)}
      </span>
    </div>`
}

function heroBlock(app: App, productStatus: string, primaryLink: string | null): string {
  const primaryLinkLabel = app.stores.demo ? 'Try live demo' : 'Live on App Store'
  const chips = [app.tech, app.meta.platform, app.meta.languages, productStatus]
    .map(chip)
    .join('')

  const primary = primaryLink
    ? `<a
            href="${primaryLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="group pressable inline-flex items-center gap-2.5 font-mono text-xs font-black uppercase px-4 py-2.5 border-2 border-ink text-ink hover:border-accent hover:text-accent"
            style="letter-spacing:0.12em"
          >
            <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background-color:${app.color}"></span>
            ${primaryLinkLabel} <span class="arrow-out">↗</span>
          </a>`
    : ''

  const firstShot = app.screenshots[0]
  const heroShot = firstShot ? shotImage(app, firstShot, 'w-40 h-88 rounded-2xl') : ''

  return `
      <div class="enter px-6 lg:px-16 pt-12 pb-10 border-b border-edge" style="animation-delay:0.06s">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
          <div>
            <div class="flex items-center gap-3 mb-5">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color:${app.color}"></span>
              <span class="font-mono text-xs font-black uppercase text-muted" style="letter-spacing:0.12em">
                ${escapeHtml(app.tech)} · ${escapeHtml(app.year)}
              </span>
            </div>
            <h1 class="font-display font-black leading-none mb-4" style="color:${app.color};letter-spacing:-0.03em;font-size:clamp(3rem, 8vw, 7rem)">
              ${escapeHtml(app.name)}
            </h1>
            <p class="font-serif text-xl text-muted italic leading-snug max-w-lg mb-6">${escapeHtml(app.tagline)}</p>
            <p class="font-serif text-base text-ink leading-relaxed max-w-2xl mb-6">${escapeHtml(app.impact)}</p>
            <div class="flex flex-wrap gap-2.5 mb-6">${chips}</div>
            ${primary}
          </div>

          <div class="hidden lg:block">${heroShot}</div>
        </div>
      </div>`
}

function screenshotsBlock(app: App): string {
  const shots = app.screenshots
    .map(shot => shotImage(app, shot, 'flex-none w-56 h-120 rounded-2xl'))
    .join('')

  return `
      <div class="enter border-b border-edge py-10" style="animation-delay:0.12s">
        <div class="pl-6 lg:pl-16">
          <p class="font-mono text-xs font-black uppercase text-muted mb-6" style="letter-spacing:0.12em">
            Screenshots
          </p>
          <div class="flex gap-4 overflow-x-auto pb-4 pr-6 lg:pr-16" style="scrollbar-width:none">
            ${shots}
          </div>
        </div>
      </div>`
}

function caseStudyBlock(app: App): string {
  const rows = [
    { label: 'Problem', value: app.caseStudy.problem },
    { label: 'My Ownership', value: app.caseStudy.ownership },
    { label: 'Technical Decisions', value: app.caseStudy.technical },
    { label: 'Outcome', value: app.caseStudy.outcome },
  ]
    .map(
      ({ label, value }) => `
          <div class="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5">
            <p class="font-mono text-xs font-black uppercase text-muted pt-1" style="letter-spacing:0.1em">${escapeHtml(label)}</p>
            <p class="font-serif text-base text-ink leading-relaxed">${escapeHtml(value)}</p>
          </div>`
    )
    .join('')

  const features = app.features
    .map(
      feature => `
          <li class="flex items-start gap-3 text-base">
            <span class="shrink-0 mt-0.5 font-black" style="color:${app.color}">—</span>
            <span class="font-serif leading-snug">${escapeHtml(feature)}</span>
          </li>`
    )
    .join('')

  return `
      <div class="enter px-6 lg:px-16 py-14 border-b border-edge" style="animation-delay:0.18s">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20">
          <div>
            <p class="font-mono text-xs font-black uppercase text-muted mb-5" style="letter-spacing:0.12em">
              Case Study
            </p>
            <p class="font-serif text-lg text-ink leading-relaxed">${escapeHtml(app.description)}</p>

            <div class="mt-8 divide-y divide-edge border-t border-edge">${rows}</div>
          </div>
          <div>
            <p class="font-mono text-xs font-black uppercase text-muted mb-5" style="letter-spacing:0.12em">
              Features
            </p>
            <ul class="space-y-3">${features}</ul>
          </div>
        </div>
      </div>`
}

function metaBlock(app: App, primaryLink: string | null): string {
  const primaryFooterLabel = app.stores.demo ? 'Try live demo' : 'View on App Store'

  const meta = [
    metaItem(app.meta.platform, 'Platform'),
    metaItem(app.meta.languages, 'Languages'),
    metaItem(app.year, 'Year'),
  ].join('')

  const footerLink = primaryLink
    ? `<a
                href="${primaryLink}"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style="letter-spacing:0.12em"
              >
                ${primaryFooterLabel} <span class="arrow-out">↗</span>
              </a>`
    : ''

  return `
      <div class="enter px-6 lg:px-16 py-12" style="animation-delay:0.24s">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div class="flex gap-10">${meta}</div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:hello@maazsurti.com?subject=Senior%20mobile%20developer%20role"
              class="group inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
              style="letter-spacing:0.12em"
            >
              Hiring for mobile delivery? <span class="arrow-out">↗</span>
            </a>
            ${footerLink}
          </div>
        </div>
      </div>`
}

export function renderNotFoundPage(): string {
  return `
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <p class="font-mono text-sm text-muted mb-4">App not found.</p>
        <a
          href="/"
          class="font-mono text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
          style="letter-spacing:0.12em"
        >
          ← Back
        </a>
      </div>
    </div>`
}

export function renderAppDetail(id: string): string {
  const app = apps.find(candidate => candidate.id === id)
  if (!app) return renderNotFoundPage()

  const primaryLink = app.stores.demo ?? app.stores.appStore
  const productStatus = app.stores.demo ? 'Interactive Web Demo' : 'Live App Store product'

  return `
  <div class="min-h-screen bg-bg text-ink">
      <div class="enter px-6 lg:px-16 py-6 border-b border-edge" style="animation-delay:0s">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            class="group font-mono text-xs font-black uppercase text-muted hover:text-ink transition-colors duration-150"
            style="letter-spacing:0.12em"
          >
            <span class="arrow-back">←</span> All Work
          </a>
          <span class="font-mono text-xs font-black uppercase text-muted" style="letter-spacing:0.1em">
            ${escapeHtml(app.category)}
          </span>
        </div>
      </div>

      ${heroBlock(app, productStatus, primaryLink)}
      ${screenshotsBlock(app)}
      ${caseStudyBlock(app)}
      ${metaBlock(app, primaryLink)}
    </div>`
}

/** Crossfades each screenshot in on load, falling back to a colour block on error. */
export function bindAppDetail(root: ParentNode = document): void {
  const containers = root.querySelectorAll<HTMLElement>('[data-shot]')

  for (const container of containers) {
    const image = container.querySelector('img')
    if (!image) continue

    image.addEventListener('load', () => {
      image.classList.remove('opacity-0')
      image.classList.add('opacity-100')
      container.querySelector('.shimmer')?.remove()
    })

    image.addEventListener('error', () => {
      const app = apps.find(candidate => candidate.id === container.dataset.shotApp)
      if (!app) return
      container.outerHTML = placeholder(
        app,
        container.dataset.shotLabel ?? '',
        container.dataset.shotClass ?? ''
      )
    })
  }
}
