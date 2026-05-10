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
              className="flex flex-col sm:flex-row gap-4 sm:gap-16 py-10 border-b border-edge last:border-b-0 group"
            >
              {/* Year */}
              <div
                className="font-mono text-xl font-black text-muted shrink-0 w-28 pt-1"
                style={{ letterSpacing: '-0.02em' }}
              >
                {item.year}
              </div>

              <div className="flex-1">
                {/* Role — headline scale */}
                <p
                  className="font-display font-black text-3xl lg:text-4xl text-ink group-hover:text-accent transition-colors duration-150 leading-none mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {item.role}
                </p>

                {/* Company */}
                <p
                  className="text-xs font-black uppercase tracking-widest text-muted mb-1"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {item.company}
                </p>

                {/* Location */}
                <p className="font-mono text-sm text-muted mb-5">{item.location}</p>

                <p className="font-serif text-base text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
