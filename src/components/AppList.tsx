import { useState } from 'react';
import { apps, type App } from '../../Utilities/data/apps';

function AppCard({ app, index, expanded, onToggle }: {
  app: App;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="bg-surface cursor-pointer group relative overflow-hidden"
      onClick={onToggle}
      style={{ borderTop: `3px solid ${expanded ? app.color : 'transparent'}` }}
    >
      {/* Decorative large index — typographic texture */}
      <span
        className="font-display absolute top-0 right-4 text-[8rem] font-black leading-none select-none pointer-events-none"
        style={{ color: app.color, opacity: 0.07, letterSpacing: '-0.04em' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="p-6 lg:p-8 relative">

        {/* Meta row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
            <span
              className="text-xs font-black uppercase tracking-widest text-muted"
              style={{ letterSpacing: '0.1em' }}
            >
              {app.category}
            </span>
          </div>
          <span
            className="font-mono text-xs font-black uppercase tracking-widest text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            {app.tech}
          </span>
        </div>

        {/* Name — headline scale */}
        <h3
          className="font-display text-4xl lg:text-5xl font-black leading-none mb-4 transition-colors duration-150"
          style={{ color: expanded ? app.color : undefined, letterSpacing: '-0.03em' }}
        >
          {app.name}
        </h3>

        {/* Tagline */}
        <p className="font-serif text-lg text-muted leading-snug mb-6 italic">{app.tagline}</p>

        {/* Platform + Languages */}
        <div className="flex gap-6 pt-5 border-t border-edge">
          {[
            { val: app.meta.platform, label: 'Platform' },
            { val: app.meta.languages, label: 'Languages' },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-mono text-base font-bold text-ink">{val}</p>
              <p
                className="text-xs font-black uppercase text-muted mt-0.5"
                style={{ letterSpacing: '0.1em' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Expanded detail */}
        {expanded && (
          <div className="mt-6 pt-6 border-t border-edge">
            <p className="font-serif text-base text-muted leading-relaxed mb-5">{app.description}</p>
            <ul className="space-y-2">
              {app.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-base">
                  <span className="text-accent mt-0.5 shrink-0">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {app.stores.appStore && (
              <div className="mt-6 flex gap-4">
                <a
                  href={app.stores.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
                  style={{ letterSpacing: '0.12em' }}
                >
                  App Store ↗
                </a>
                {app.stores.playStore && (
                  <a
                    href={app.stores.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    Play Store ↗
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppList() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="text-sm font-black uppercase tracking-widest text-ink"
            style={{ letterSpacing: '0.15em' }}
          >
            Selected Work
          </h2>
          <span className="font-mono text-sm text-muted">
            {apps.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-edge">
          {apps.map((app, i) => (
            <AppCard
              key={app.id}
              app={app}
              index={i}
              expanded={expanded === app.id}
              onToggle={() => setExpanded(expanded === app.id ? null : app.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
