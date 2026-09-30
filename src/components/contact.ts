import { escapeHtml } from '../dom'

const LINKS = [
  { label: 'Email', href: 'mailto:hello@maazsurti.com', display: 'hello@maazsurti.com' },
  { label: 'GitHub', href: 'https://github.com/maazsurti', display: 'github.com/maazsurti' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/maazsurti',
    display: 'linkedin.com/in/maazsurti',
  },
]

export function renderContact(): string {
  const links = LINKS.map(({ label, href, display }) => {
    const target = href.startsWith('mailto') ? '' : ' target="_blank"'

    return `
        <div class="grid items-baseline" style="grid-template-columns:7rem 1fr">
          <span class="font-mono text-xs font-black uppercase text-muted" style="letter-spacing:0.1em">
            ${escapeHtml(label)}
          </span>
          <a
            href="${href}"
            ${target}
            rel="noopener noreferrer"
            class="group font-mono text-sm font-bold text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
          >
            ${escapeHtml(display)} <span class="arrow-out">↗</span>
          </a>
        </div>`
  }).join('')

  return `
    <section class="py-20 border-b border-edge">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="reveal flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12" data-reveal="0">
          <div class="lg:max-w-sm">
            <h2 class="font-display text-5xl lg:text-6xl font-black leading-none mb-5" style="letter-spacing:-0.03em">
              Let's work<br />together.
            </h2>
            <p class="font-serif text-base text-muted leading-relaxed">
              Hiring for a senior mobile developer who can own product quality
              from first build to store release? I am open to full-time roles,
              contract work, and focused mobile product engagements across iOS,
              React Native, and Flutter.
            </p>
          </div>

          <div class="flex flex-col gap-5">${links}</div>
        </div>
      </div>
    </section>`
}
