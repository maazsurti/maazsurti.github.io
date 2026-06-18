import { useState } from 'react';

/**
 * Dev-only control to force reduced motion on/off, independent of the OS
 * setting — useful for previewing the reduced-motion experience on a device
 * that has the preference disabled. Persists to localStorage ('reduce-motion').
 */
export default function MotionToggle() {
  const [reduced, setReduced] = useState(() =>
    document.documentElement.classList.contains('reduce-motion')
  );

  const toggle = () => {
    const next = !reduced;
    setReduced(next);
    document.documentElement.classList.toggle('reduce-motion', next);
    localStorage.setItem('reduce-motion', next ? 'on' : 'off');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-4 left-4 z-[60] flex items-center gap-2 bg-ink/90 text-surface px-3 py-2 font-mono text-[10px] font-black uppercase tracking-widest backdrop-blur-sm hover:bg-ink transition-colors"
      style={{ letterSpacing: '0.1em' }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: reduced ? 'var(--color-subtle)' : 'var(--color-accent)' }}
      />
      Reduce motion: {reduced ? 'on' : 'off'}
    </button>
  );
}
