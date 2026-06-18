import { useEffect, useRef, useState, type CSSProperties } from 'react';

/**
 * Reveals an element when it scrolls into view. Fires once, then disconnects.
 * Returns a tuple `[ref, className, style]` — apply the class alongside
 * `reveal` and spread the style to stagger via `transitionDelay`.
 * Returned as a tuple so callers destructure (member access on a ref-bearing
 * object during render trips react-hooks/refs).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0
): readonly [React.RefObject<T | null>, string, CSSProperties] {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, shown ? 'is-visible' : '', { transitionDelay: `${delay}ms` }] as const;
}
