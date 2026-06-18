import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apps } from '../../Utilities/data/apps';

function ScreenshotPlaceholder({
  color,
  label,
  className,
}: {
  color: string;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`flex items-end p-4 ${className}`}
      style={{ backgroundColor: color + '18', border: `1px solid ${color}30` }}
    >
      <span
        className="font-mono text-xs font-black uppercase"
        style={{ color, letterSpacing: '0.1em', opacity: 0.6 }}
      >
        {label}
      </span>
    </div>
  );
}

/** Screenshot with a shimmer placeholder that crossfades to the image on load. */
function ShotImage({
  src,
  alt,
  color,
  label,
  className,
}: {
  src: string;
  alt: string;
  color: string;
  label: string;
  className: string;
}) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (state === 'error') {
    return <ScreenshotPlaceholder color={color} label={label} className={className} />;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: color + '14', border: `1px solid ${color}30` }}
    >
      {state === 'loading' && (
        <span className="shimmer" style={{ backgroundColor: color + '10' }} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setState('loaded')}
        onError={() => setState('error')}
        className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
          state === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function AppDetail() {
  const { id } = useParams<{ id: string }>();
  const app = apps.find(a => a.id === id);

  useEffect(() => {
    if (app) document.title = `${app.name} - Maaz Surti`;
    return () => { document.title = 'Maaz Surti - Senior Mobile Developer'; };
  }, [app]);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-sm text-muted mb-4">App not found.</p>
          <Link
            to="/"
            className="font-mono text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
            style={{ letterSpacing: '0.12em' }}
          >
            ← Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-ink">

      {/* Nav */}
      <div className="enter px-6 lg:px-16 py-6 border-b border-edge" style={{ animationDelay: '0s' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-xs font-black uppercase text-muted hover:text-ink transition-colors duration-150"
            style={{ letterSpacing: '0.12em' }}
          >
            ← All Work
          </Link>
          <span
            className="font-mono text-xs font-black uppercase text-muted"
            style={{ letterSpacing: '0.1em' }}
          >
            {app.category}
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="enter px-6 lg:px-16 pt-12 pb-10 border-b border-edge" style={{ animationDelay: '0.06s' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">

          {/* Left: meta + title + tagline + CTA */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
              <span
                className="font-mono text-xs font-black uppercase text-muted"
                style={{ letterSpacing: '0.12em' }}
              >
                {app.tech} · {app.year}
              </span>
            </div>
            <h1
              className="font-display font-black leading-none mb-4"
              style={{
                color: app.color,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
              }}
            >
              {app.name}
            </h1>
            <p className="font-serif text-xl text-muted italic leading-snug max-w-lg mb-6">
              {app.tagline}
            </p>
            <p className="font-serif text-base text-ink leading-relaxed max-w-2xl mb-6">
              {app.impact}
            </p>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {[app.tech, app.meta.platform, app.meta.languages, 'Live App Store product'].map(item => (
                <span
                  key={item}
                  className="font-mono text-[11px] font-black uppercase px-3 py-1.5 border border-edge text-ink bg-surface"
                  style={{ letterSpacing: '0.08em' }}
                >
                  {item}
                </span>
              ))}
            </div>
            {app.stores.appStore && (
              <a
                href={app.stores.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-xs font-black uppercase px-4 py-2.5 border-2 border-ink text-ink hover:border-accent hover:text-accent transition-colors duration-150"
                style={{ letterSpacing: '0.12em' }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
                Live on App Store ↗
              </a>
            )}
          </div>

          {/* Right: hero screenshot (desktop only) */}
          <div className="hidden lg:block">
            <ShotImage
              src={app.screenshots[0].src}
              alt={`${app.name} screenshot`}
              color={app.color}
              label={app.screenshots[0].label}
              className="w-40 h-88 rounded-2xl"
            />
          </div>

        </div>
      </div>

      {/* Screenshots strip */}
      <div className="enter border-b border-edge py-10" style={{ animationDelay: '0.12s' }}>
        <div className="pl-6 lg:pl-16">
          <p
            className="font-mono text-xs font-black uppercase text-muted mb-6"
            style={{ letterSpacing: '0.12em' }}
          >
            Screenshots
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 pr-6 lg:pr-16" style={{ scrollbarWidth: 'none' }}>
            {app.screenshots.map((s, i) => (
              <ShotImage
                key={i}
                src={s.src}
                alt={s.label}
                color={app.color}
                label={s.label}
                className="flex-none w-56 h-120 rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Case study + Features */}
      <div className="enter px-6 lg:px-16 py-14 border-b border-edge" style={{ animationDelay: '0.18s' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20">
          <div>
            <p
              className="font-mono text-xs font-black uppercase text-muted mb-5"
              style={{ letterSpacing: '0.12em' }}
            >
              Case Study
            </p>
            <p className="font-serif text-lg text-ink leading-relaxed">{app.description}</p>

            <div className="mt-8 divide-y divide-edge border-t border-edge">
              {[
                { label: 'Problem', value: app.caseStudy.problem },
                { label: 'My Ownership', value: app.caseStudy.ownership },
                { label: 'Technical Decisions', value: app.caseStudy.technical },
                { label: 'Outcome', value: app.caseStudy.outcome },
              ].map(({ label, value }) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5">
                  <p
                    className="font-mono text-xs font-black uppercase text-muted pt-1"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {label}
                  </p>
                  <p className="font-serif text-base text-ink leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              className="font-mono text-xs font-black uppercase text-muted mb-5"
              style={{ letterSpacing: '0.12em' }}
            >
              Features
            </p>
            <ul className="space-y-3">
              {app.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <span className="shrink-0 mt-0.5 font-black" style={{ color: app.color }}>—</span>
                  <span className="font-serif leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Meta + CTA */}
      <div className="enter px-6 lg:px-16 py-12" style={{ animationDelay: '0.24s' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex gap-10">
            {[
              { val: app.meta.platform, label: 'Platform' },
              { val: app.meta.languages, label: 'Languages' },
              { val: app.year, label: 'Year' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-mono text-base font-bold text-ink">{val}</p>
                <p
                  className="text-xs font-black uppercase text-muted mt-1"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:hello@maazsurti.com?subject=Senior%20mobile%20developer%20role"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
              style={{ letterSpacing: '0.12em' }}
            >
              Hiring for mobile delivery? ↗
            </a>
            {app.stores.appStore && (
              <a
                href={app.stores.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-muted underline underline-offset-4 decoration-edge hover:text-ink hover:decoration-ink transition-colors duration-150"
                style={{ letterSpacing: '0.12em' }}
              >
                View on App Store ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
