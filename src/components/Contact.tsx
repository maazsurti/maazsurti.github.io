const links = [
  { label: 'Email', href: 'mailto:hello@maazsurti.com', display: 'hello@maazsurti.com' },
  { label: 'GitHub', href: 'https://github.com/maazsurti', display: 'github.com/maazsurti' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/maazsurti', display: 'linkedin.com/in/maazsurti' },
];

export default function Contact() {
  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Heading */}
          <div className="lg:max-w-sm">
            <h2
              className="font-display text-5xl lg:text-6xl font-black leading-none mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Let's work<br />together.
            </h2>
            <p className="font-serif text-base text-muted leading-relaxed">
              Hiring for a senior iOS engineer who can own product quality from
              first build to App Store release? I am open to full-time roles,
              contract work, and focused mobile product engagements.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5">
            {links.map(({ label, href, display }) => (
              <div key={label} className="grid items-baseline" style={{ gridTemplateColumns: '7rem 1fr' }}>
                <span
                  className="font-mono text-xs font-black uppercase text-muted"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
                >
                  {display} ↗
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
