import { timeline } from '../../Utilities/data/timeline';

export default function Timeline() {
  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2
          className="text-sm font-black uppercase tracking-widest text-ink mb-12"
          style={{ letterSpacing: '0.15em' }}
        >
          Experience
        </h2>

        <div>
          {timeline.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 sm:gap-16 py-8 border-b border-edge last:border-b-0 group"
            >
              <div
                className="text-base font-semibold text-muted shrink-0 w-14 pt-0.5"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {item.year}
              </div>

              <div className="flex-1">
                <p
                  className="font-black text-xl text-ink group-hover:text-accent transition-colors duration-150 leading-tight"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {item.role}
                </p>
                <p
                  className="text-sm font-black uppercase tracking-widest text-muted mt-1.5"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {item.company}
                </p>
                <p
                  className="text-sm text-muted mb-4"
                  style={{ fontFamily: 'var(--font-family-mono)' }}
                >
                  {item.location}
                </p>
                <p className="text-base text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
