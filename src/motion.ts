const MOTION_KEY = 'reduce-motion'

export function applyReduceMotion(reduce: boolean): void {
  document.documentElement.classList.toggle('reduce-motion', reduce)
}

/**
 * Seeds the reduce-motion class from the OS preference while letting a stored
 * override ('on'/'off') win in either direction, then keeps tracking OS changes
 * until an override is set.
 */
export function seedReduceMotion(): void {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')
  const stored = localStorage.getItem(MOTION_KEY)

  applyReduceMotion(stored === 'on' ? true : stored === 'off' ? false : query.matches)

  query.addEventListener('change', event => {
    if (!localStorage.getItem(MOTION_KEY)) applyReduceMotion(event.matches)
  })
}

/** Applies reduced motion immediately and remembers the choice. */
export function setReduceMotion(reduce: boolean): void {
  applyReduceMotion(reduce)
  localStorage.setItem(MOTION_KEY, reduce ? 'on' : 'off')
}
