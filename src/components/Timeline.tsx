import { timeline } from '../../Utilities/data/timeline';
import { useReveal } from '../hooks/useReveal';

type Entry = (typeof timeline)[number];

function TimelineRow({ item, index }: { item: Entry; index: number }) {
  const [ref, revealed, revealStyle] = useReveal(index * 80);
  return (
    <div
      ref={ref}
      style={revealStyle}
      className={`reveal ${revealed} flex flex-col sm:flex-row gap-4 sm:gap-16 py-10 border-b border-edge last:border-b-0 group`}
    >
      {/* Year */}
      <div className="font-mono text-xl font-black text-muted shrink-0 w-28 pt-1">
        {item.year}
      </div>

      <div className="flex-1">
        {/* Role — headline scale */}
        <p className="font-display font-black text-3xl lg:text-4xl text-ink group-hover:text-accent transition-colors duration-150 leading-none mb-3">
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
  );
}

export default function Timeline() {
  const [ref, revealed, revealStyle] = useReveal();
  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          style={revealStyle}
          className={`reveal ${revealed} mb-12`}
        >
          <h2
            className="text-sm font-black uppercase tracking-widest text-ink"
            style={{ letterSpacing: '0.15em' }}
          >
            Experience
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed mt-3 max-w-xl">
            Five years building client-facing mobile products, with recent focus
            on senior ownership, release systems, and App Store delivery.
          </p>
        </div>

        <div>
          {timeline.map((item, i) => (
            <TimelineRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
