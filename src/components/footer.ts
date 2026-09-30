import { currentYear, escapeHtml } from '../dom'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/maazsurti' },
  { label: 'Twitter', href: 'https://twitter.com/surti_maaz' },
  { label: 'Email', href: 'mailto:hello@maazsurti.com' },
]

export function renderFooter(): string {
  const links = LINKS.map(({ label, href }) => {
    const isExternal = href.startsWith('http')
    const target = isExternal ? ' target="_blank"' : ''
    const rel = isExternal ? ' rel="noopener noreferrer"' : ''

    return `
          <a
            href="${href}"
            ${target}
            ${rel}
            class="text-xs font-black uppercase text-ink hover:text-accent transition-colors duration-150 underline underline-offset-4 decoration-edge hover:decoration-accent"
            style="letter-spacing:0.12em"
          >
            ${escapeHtml(label)}
          </a>`
  }).join('')

  return `
    <footer class="mt-auto border-t border-edge">
      <div class="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <span class="font-display font-black uppercase text-ink text-sm" style="letter-spacing:0.05em">
            Maaz Surti
          </span>
          <span class="text-edge select-none">·</span>
          <span class="text-xs font-black uppercase text-muted" style="letter-spacing:0.1em">
            Senior Mobile Developer
          </span>
        </div>

        <div class="flex items-center gap-8">
          ${links}
          <span class="text-xs font-black uppercase text-ink" style="letter-spacing:0.12em">
            © ${currentYear()}
          </span>
        </div>
      </div>
    </footer>`
}
