import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apps } from '../../Utilities/data/apps';

function ScreenshotPlaceholder({ color, label }: { color: string; label: string }) {
  return (
    <div
      className="flex-none w-56 h-120 rounded-2xl flex items-end p-4"
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

export default function AppDetail() {
  const { id } = useParams<{ id: string }>();
  const app = apps.find(a => a.id === id);
  const [failedScreenshots, setFailedScreenshots] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (app) document.title = `${app.name} - Maaz Surti`;
    return () => { document.title = 'Maaz Surti - Senior iOS Engineer'; };
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

  const handleImgError = (index: number) => {
    setFailedScreenshots(prev => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-bg text-ink">

      {/* Nav */}
      <div className="px-6 lg:px-16 py-6 border-b border-edge">
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
      <div className="px-6 lg:px-16 pt-12 pb-10 border-b border-edge">
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
            {app.stores.appStore && (
              <a
                href={app.stores.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-xs font-black uppercase px-4 py-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-surface transition-colors duration-150"
                style={{ letterSpacing: '0.12em' }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
                Live on App Store ↗
              </a>
            )}
          </div>

          {/* Right: hero screenshot (desktop only) */}
          <div className="hidden lg:block">
            {!failedScreenshots.has(0) ? (
              <img
                src={app.screenshots[0].src}
                alt={`${app.name} screenshot`}
                onError={() => handleImgError(0)}
                className="w-40 h-88 object-cover object-top rounded-2xl"
                style={{ border: `1.5px solid ${app.color}30` }}
              />
            ) : (
              <div
                className="w-40 h-88 rounded-2xl"
                style={{ backgroundColor: app.color + '18', border: `1.5px solid ${app.color}30` }}
              />
            )}
          </div>

        </div>
      </div>

      {/* Screenshots strip */}
      <div className="border-b border-edge py-10">
        <div className="pl-6 lg:pl-16">
          <p
            className="font-mono text-xs font-black uppercase text-muted mb-6"
            style={{ letterSpacing: '0.12em' }}
          >
            Screenshots
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 pr-6 lg:pr-16" style={{ scrollbarWidth: 'none' }}>
            {app.screenshots.map((s, i) =>
              failedScreenshots.has(i) ? (
                <ScreenshotPlaceholder key={i} color={app.color} label={s.label} />
              ) : (
                <div key={i} className="flex-none relative">
                  <img
                    src={s.src}
                    alt={s.label}
                    onError={() => handleImgError(i)}
                    className="w-56 h-120 object-cover object-top rounded-2xl"
                    style={{ border: `1px solid ${app.color}25` }}
                  />
                  <span
                    className="absolute bottom-3 left-3 font-mono text-xs font-black uppercase"
                    style={{ color: app.color, letterSpacing: '0.1em' }}
                  >
                    {s.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Description + Features */}
      <div className="px-6 lg:px-16 py-14 border-b border-edge">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p
              className="font-mono text-xs font-black uppercase text-muted mb-5"
              style={{ letterSpacing: '0.12em' }}
            >
              About
            </p>
            <p className="font-serif text-lg text-ink leading-relaxed">{app.description}</p>
            <div className="mt-8 border-l-2 pl-5" style={{ borderColor: app.color }}>
              <p
                className="font-mono text-xs font-black uppercase text-muted mb-3"
                style={{ letterSpacing: '0.12em' }}
              >
                Contribution
              </p>
              <p className="font-serif text-base text-ink leading-relaxed">{app.impact}</p>
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
      <div className="px-6 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
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
          {app.stores.appStore && (
            <a
              href={app.stores.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-ink underline underline-offset-4 decoration-edge hover:text-accent hover:decoration-accent transition-colors duration-150"
              style={{ letterSpacing: '0.12em' }}
            >
              View on App Store ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
