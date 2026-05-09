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
      className="bg-surface cursor-pointer group"
      onClick={onToggle}
      style={{ borderTop: `3px solid ${expanded ? app.color : 'transparent'}` }}
    >
      <div className="p-6 lg:p-8">

        {/* Meta row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
            <span
              className="text-sm font-semibold text-muted"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            <span>{app.category}</span>
            <span>·</span>
            <span>{app.year}</span>
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-3xl lg:text-4xl font-black mb-3 transition-colors duration-150 leading-none"
          style={{ color: expanded ? app.color : undefined, letterSpacing: '-0.02em' }}
        >
          {app.name}
        </h3>

        {/* Tagline */}
        <p className="text-base text-muted mb-5 leading-relaxed">{app.tagline}</p>

        {/* Tech badge */}
        <span
          className="inline-block text-sm px-3 py-1 bg-bg border border-edge rounded text-ink"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          {app.tech}
        </span>

        {/* Meta */}
        <div className="mt-6 pt-5 border-t border-edge grid grid-cols-3 gap-3">
          {[
            { val: app.meta.platform, label: 'Platform' },
            { val: app.meta.languages, label: 'Languages' },
            { val: app.meta.year, label: 'Year' },
          ].map(({ val, label }) => (
            <div key={label}>
              <p
                className="text-xl font-bold text-ink"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {val}
              </p>
              <p
                className="text-sm text-muted mt-0.5"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Expanded detail */}
        {expanded && (
          <div className="mt-6 pt-6 border-t border-edge">
            <p className="text-base text-muted leading-relaxed mb-5">{app.description}</p>
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

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="text-sm font-black uppercase tracking-widest text-ink"
            style={{ letterSpacing: '0.15em' }}
          >
            Selected Work
          </h2>
          <span
            className="text-sm text-muted"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
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
