import { escapeHtml } from '../dom'

const STATS = [
  { value: '15+', label: 'Production Apps' },
  { value: '5 Yrs', label: 'Mobile Experience' },
  { value: '8+', label: 'App Store Releases' },
]

const OWNERSHIP = [
  'Architecture',
  'SwiftUI/UIKit',
  'React Native',
  'Flutter',
  'API integration',
  'Localization',
  'CI/CD',
  'App Store release',
]

export function renderHero(): string {
  const ownership = OWNERSHIP.map(
    item =>
      `<span class="font-mono text-[11px] font-black uppercase px-3 py-1.5 border border-edge text-ink bg-surface" style="letter-spacing:0.08em">${escapeHtml(item)}</span>`
  ).join('')

  const stats = STATS.map(
    ({ value, label }, i) => `
      <div class="enter" style="animation-delay:${(0.85 + i * 0.1).toFixed(2)}s">
        <p class="font-mono text-3xl sm:text-4xl font-black text-ink">${escapeHtml(value)}</p>
        <p class="text-xs font-black uppercase text-muted mt-1.5" style="letter-spacing:0.12em">${escapeHtml(label)}</p>
      </div>`
  ).join('')

  return `
    <section class="px-6 lg:px-16 pt-12 lg:pt-16 pb-20 border-b border-edge">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_24rem] gap-12 lg:gap-20 items-end">
          <div>
            <div class="enter flex items-center gap-2.5 mb-10" style="animation-delay:0.05s">
              <span class="relative flex w-2 h-2 shrink-0">
                <span class="dot-ping absolute inset-0"></span>
                <span class="relative inline-flex w-2 h-2 rounded-full bg-accent"></span>
              </span>
              <span class="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                Open to senior mobile developer roles
              </span>
            </div>

            <h1 class="font-display font-black leading-[0.88] uppercase text-ink" style="font-size:clamp(3.25rem, 14vw, 8.5rem)">
              <span class="enter-clip block" style="animation-delay:0.15s">Maaz</span>
              <span class="enter-clip block" style="animation-delay:0.3s">Surti<span class="text-accent">.</span></span>
            </h1>
          </div>

          <div class="enter lg:pb-4" style="animation-delay:0.45s">
            <p class="font-mono text-xs font-black uppercase text-muted mb-4" style="letter-spacing:0.12em">
              Senior Mobile Developer
            </p>
            <p class="font-serif text-xl font-semibold text-ink leading-snug">
              iOS, React Native, Flutter, CI/CD, App Store delivery, and AI-assisted engineering workflows.
            </p>
            <p class="font-serif text-base text-muted leading-relaxed mt-5">
              Full-time or contract. Remote / hybrid.
            </p>
          </div>
        </div>

        <div class="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_24rem] gap-8 lg:gap-20 items-start">
          <p class="enter font-serif text-xl sm:text-2xl text-ink leading-relaxed max-w-3xl" style="animation-delay:0.6s">
            I build and ship production mobile apps for teams that need reliable
            delivery, clean architecture, and release ownership from first build
            to the store. My strongest base is SwiftUI and UIKit, with practical
            cross-platform delivery across React Native and Flutter.
          </p>

          <div class="enter flex flex-col gap-3 lg:pt-2" style="animation-delay:0.72s">
            <a
              href="mailto:hello@maazsurti.com"
              class="group font-mono text-sm font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150 self-start"
              style="letter-spacing:0.08em"
            >
              hello@maazsurti.com <span class="arrow-out">↗</span>
            </a>
            <div class="flex gap-5">
              <a
                href="https://linkedin.com/in/maazsurti"
                target="_blank"
                rel="noopener noreferrer"
                class="group font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style="letter-spacing:0.08em"
              >
                LinkedIn <span class="arrow-out">↗</span>
              </a>
              <a
                href="https://github.com/maazsurti"
                target="_blank"
                rel="noopener noreferrer"
                class="group font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style="letter-spacing:0.08em"
              >
                GitHub <span class="arrow-out">↗</span>
              </a>
              <a
                href="/resume.pdf"
                download
                class="group font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style="letter-spacing:0.08em"
              >
                Resume <span class="arrow-down">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div class="enter mt-12 lg:mt-14 pt-8 border-t border-edge" style="animation-delay:0.8s">
          <p class="font-mono text-xs font-black uppercase text-muted mb-5" style="letter-spacing:0.12em">
            What I can own
          </p>
          <div class="flex flex-wrap gap-2.5">${ownership}</div>
        </div>

        <div class="mt-16 lg:mt-20 pt-8 border-t border-edge grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          ${stats}
        </div>
      </div>
    </section>`
}
