const FADE_MS = 600
const CAP_MS = 2000

/**
 * One-time intro overlay. Wipes up as soon as fonts are ready (capped at 2s) and
 * adds `loaded` to <html> — the gate that starts the Hero entrance. There is no
 * minimum hold, so a warm cache hands off immediately. Motion-free under
 * reduced motion.
 */
export function mountLoader(): void {
  const reduce = document.documentElement.classList.contains('reduce-motion')
  const fadeMs = reduce ? 0 : FADE_MS
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

    document.documentElement.classList.add('loaded')
    loader.classList.add('loader--leaving')
    window.setTimeout(() => loader.remove(), fadeMs)
  }

  const fonts = document.fonts?.ready ?? Promise.resolve()
  fonts.then(finish)
  window.setTimeout(finish, CAP_MS)
}
