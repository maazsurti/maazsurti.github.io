export default function Footer() {
  return (
    <footer className="mt-auto border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span
            className="font-black uppercase text-ink"
            style={{ letterSpacing: '0.05em', fontSize: '0.875rem' }}
          >
            Maaz Surti
          </span>
          <span className="text-edge select-none">·</span>
          <span
            className="text-xs font-black uppercase text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            Senior iOS Engineer
          </span>
        </div>

        <div className="flex items-center gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/maazsurti' },
            { label: 'Twitter', href: 'https://twitter.com/surti_maaz' },
            { label: 'Email', href: 'mailto:hello@maazsurti.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs font-black uppercase text-ink hover:text-accent transition-colors duration-150 underline underline-offset-4 decoration-edge hover:decoration-accent"
              style={{ letterSpacing: '0.12em' }}
            >
              {label}
            </a>
          ))}
          <span
            className="text-xs font-black uppercase text-ink"
            style={{ letterSpacing: '0.12em' }}
          >
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
