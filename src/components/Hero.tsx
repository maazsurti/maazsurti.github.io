export default function Hero() {
  return (
    <section className="px-6 lg:px-16 pt-14 pb-16 border-b border-edge">
      <div className="max-w-7xl mx-auto">
        {/* Top row: name + right panel */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* Name */}
          <h1
            className="text-[17vw] sm:text-[13vw] lg:text-[8.5rem] font-black leading-[0.88] uppercase text-ink shrink-0"
            style={{ letterSpacing: "-0.03em" }}
          >
            Maaz
            <br />
            Surti.
          </h1>

          {/* Right panel — sized to balance the name */}
          <div className="flex flex-col gap-6 lg:pb-3 lg:max-w-sm w-full">
            {/* Availability */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span
                className="text-xs uppercase tracking-widest text-accent font-semibold"
                style={{ fontFamily: "var(--font-family-mono)" }}
              >
                Available for work
              </span>
            </div>

            {/* Role block */}
            <div className="border-l-2 border-ink pl-4">
              <p
                className="text-2xl font-black text-ink leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Senior iOS Engineer
              </p>
              <p
                className="text-xs font-black uppercase tracking-widest text-muted mt-2"
                style={{ letterSpacing: '0.12em' }}
              >
                SwiftUI · UIKit · Flutter
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-ink leading-relaxed">
              Building polished, high-performance mobile apps used by hundreds
              of thousands of people.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@maazsurti.com"
              className="text-sm font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150 self-start"
              style={{ letterSpacing: '0.08em', fontFamily: 'var(--font-family-mono)' }}
            >
              hello@maazsurti.com ↗
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 pt-8 border-t border-edge flex gap-12 sm:gap-20">
          {[
            { val: "15+", label: "Apps Shipped" },
            { val: "5 Yrs", label: "Experience" },
            { val: "6+", label: "Industries" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p
                className="text-3xl sm:text-4xl font-black text-ink"
                style={{ fontFamily: "var(--font-family-mono)" }}
              >
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
