import { useEffect, useState } from 'react';

/**
 * One-time intro overlay. Holds the page until fonts are ready (min ~800ms,
 * capped at 2s), then wipes up and adds `loaded` to <html> — which is what
 * triggers the Hero entrance, so the intro flows straight into the cascade.
 * Near-instant and motion-free under prefers-reduced-motion.
 */
export default function Loader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minHold = reduce ? 0 : 800;
    const fadeMs = reduce ? 0 : 600;
    const start = performance.now();
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, minHold - (performance.now() - start));
      window.setTimeout(() => {
        document.documentElement.classList.add('loaded');
        setLeaving(true);
        window.setTimeout(() => setGone(true), fadeMs);
      }, wait);
    };

    const fonts = document.fonts?.ready ?? Promise.resolve();
    fonts.then(finish);
    const cap = window.setTimeout(finish, 2000);
    return () => window.clearTimeout(cap);
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${leaving ? 'loader--leaving' : ''}`} aria-hidden="true">
      <div className="loader-mark">
        <span className="loader-name">
          Maaz Surti<span className="text-accent">.</span>
        </span>
        <span className="loader-bar" />
      </div>
    </div>
  );
}
