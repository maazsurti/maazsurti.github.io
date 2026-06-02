export default function Hero() {
  const stats = [
    { val: '15+', label: 'Production Apps' },
    { val: '5 Yrs', label: 'Mobile Experience' },
    { val: '6', label: 'Featured Apps' },
  ];

  return (
    <section className="px-6 lg:px-16 pt-12 lg:pt-16 pb-20 border-b border-edge">
      <div className="max-w-7xl mx-auto">
        {/* First read: availability, name, and role */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_24rem] gap-12 lg:gap-20 items-end">
          <div>
            <div className="flex items-center gap-2.5 mb-10">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                Open to senior iOS roles
              </span>
            </div>

            <h1 className="font-display text-7xl sm:text-8xl lg:text-[8.5rem] font-black leading-[0.88] uppercase text-ink">
              Maaz
              <br />
              Surti.
            </h1>
          </div>

          <div className="lg:pb-4">
            <p
              className="font-mono text-xs font-black uppercase text-muted mb-4"
              style={{ letterSpacing: '0.12em' }}
            >
              Senior iOS Engineer
            </p>
            <p className="font-serif text-xl font-semibold text-ink leading-snug">
              SwiftUI, UIKit, Flutter, CI/CD, App Store delivery, and AI-powered workflows.
            </p>
            <p className="font-serif text-base text-muted leading-relaxed mt-5">
              Full-time or contract. Remote / hybrid.
            </p>
          </div>
        </div>

        {/* Second read: concise pitch and contact */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_24rem] gap-8 lg:gap-20 items-start">
          <p className="font-serif text-xl sm:text-2xl text-ink leading-relaxed max-w-3xl">
            I help teams turn mobile product ideas into polished iOS apps,
            owning the path from architecture and API integration through CI/CD
            and App Store release. I am also deeply familiar with modern AI
            workflows, including agent skills, MCP servers, and tool-assisted
            development loops that make engineering teams move faster.
          </p>

          <div className="flex flex-col gap-3 lg:pt-2">
            <a
              href="mailto:hello@maazsurti.com"
              className="font-mono text-sm font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150 self-start"
              style={{ letterSpacing: '0.08em' }}
            >
              hello@maazsurti.com ↗
            </a>
            <div className="flex gap-5">
              <a
                href="https://linkedin.com/in/maazsurti"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style={{ letterSpacing: '0.08em' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/maazsurti"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style={{ letterSpacing: '0.08em' }}
              >
                GitHub ↗
              </a>
              <a
                href="/resume.pdf"
                download
                className="font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style={{ letterSpacing: '0.08em' }}
              >
                Resume ↓
              </a>
            </div>
          </div>
        </div>

        {/* Proof, kept quiet */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-edge grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map(({ val, label }) => (
            <div key={label}>
              <p className="font-mono text-3xl sm:text-4xl font-black text-ink">
                {val}
              </p>
              <p
                className="text-xs font-black uppercase text-muted mt-1.5"
                style={{ letterSpacing: '0.12em' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
