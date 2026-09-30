const MIN_HOLD_MS = 800
const FADE_MS = 600
const CAP_MS = 2000

/**
 * One-time intro overlay. Holds until fonts are ready (min 800ms, capped at 2s),
 * then wipes up and adds `loaded` to <html> — the gate that starts the Hero
 * entrance. Near-instant and motion-free under reduced motion.
 */
export function mountLoader(): void {
  const reduce = document.documentElement.classList.contains('reduce-motion')
  const minHold = reduce ? 0 : MIN_HOLD_MS
  const fadeMs = reduce ? 0 : FADE_MS
  const start = performance.now()
  let done = false

  const loader = document.createElement('div')
  loader.className = 'loader'
  loader.setAttribute('aria-hidden', 'true')
  loader.innerHTML = `
    <div class="loader-mark">
      <span class="loader-name">Maaz Surti<span class="text-accent">.</span></span>
      <span class="loader-bar"></span>
    </div>`
  document.body.appendChild(loader)

  const finish = () => {
    if (done) return
    done = true

    const wait = Math.max(0, minHold - (performance.now() - start))
    window.setTimeout(() => {
      document.documentElement.classList.add('loaded')
      loader.classList.add('loader--leaving')
      window.setTimeout(() => loader.remove(), fadeMs)
    }, wait)
  }

  const fonts = document.fonts?.ready ?? Promise.resolve()
  fonts.then(finish)
  window.setTimeout(finish, CAP_MS)
}
