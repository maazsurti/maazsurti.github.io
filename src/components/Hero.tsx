export default function Hero() {
  const proofPoints = [
    'SwiftUI and UIKit production apps',
    'Fastlane and GitHub Actions releases',
    'English and Arabic product flows',
  ];

  return (
    <section className="px-6 lg:px-16 pt-14 pb-16 border-b border-edge">
      <div className="max-w-7xl mx-auto">
        {/* Top row: name + right panel */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* Name */}
          <h1
            className="font-display text-7xl sm:text-8xl lg:text-[8.5rem] font-black leading-[0.88] uppercase text-ink shrink-0"
          >
            Maaz
            <br />
            Surti.
          </h1>

          {/* Right panel */}
          <div className="flex flex-col gap-6 lg:pb-3 lg:max-w-sm w-full">
            {/* Availability */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  Open to senior iOS roles
                </span>
              </div>
              <p
                className="font-mono text-xs uppercase text-muted pl-[18px]"
                style={{ letterSpacing: '0.1em' }}
              >
                Full-time or contract · Remote / hybrid
              </p>
            </div>

            {/* Role block */}
            <div className="border-l-2 border-ink pl-4">
              <p
                className="font-display text-2xl font-black text-ink leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Senior iOS Engineer
              </p>
              <p
                className="text-xs font-black uppercase tracking-widest text-muted mt-1.5"
                style={{ letterSpacing: '0.12em' }}
              >
                Production mobile apps · App Store delivery
              </p>
              <p
                className="text-xs font-black uppercase tracking-widest text-muted mt-1"
                style={{ letterSpacing: '0.12em' }}
              >
                SwiftUI · UIKit · Flutter
              </p>
            </div>

            {/* Description */}
            <p className="font-serif text-base text-ink leading-relaxed">
              I build polished iOS products in SwiftUI and UIKit, from architecture
              and API integration to CI/CD and App Store release. 5 years, 15+
              shipped apps across logistics, marketplaces, fitness, events, and
              services, with selected live App Store work featured below.
            </p>

            {/* Proof points */}
            <div className="divide-y divide-edge border-y border-edge">
              {proofPoints.map(point => (
                <p key={point} className="font-mono text-xs font-black uppercase text-ink py-3">
                  {point}
                </p>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2.5">
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
        </div>

        {/* Stats bar */}
        <div className="mt-14 pt-8 border-t border-edge flex flex-wrap gap-8 sm:gap-12 lg:gap-20">
          {[
            { val: "15+", label: "Production Apps" },
            { val: "5 Yrs", label: "Mobile Experience" },
            { val: "6", label: "Featured Apps" },
          ].map(({ val, label }) => (
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
