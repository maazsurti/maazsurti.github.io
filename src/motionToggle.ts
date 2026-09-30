import { setReduceMotion } from './motion'

/** Dev-only control that forces reduced motion on/off and persists the choice. */
export function mountMotionToggle(): void {
  const button = document.createElement('button')
  button.type = 'button'
  button.className =
    'fixed bottom-4 left-4 z-[60] flex items-center gap-2 bg-ink/90 text-surface px-3 py-2 font-mono text-[10px] font-black uppercase tracking-widest backdrop-blur-sm hover:bg-ink transition-colors'
  button.style.letterSpacing = '0.1em'
  button.innerHTML = `
    <span class="w-1.5 h-1.5 rounded-full"></span>
    <span class="motion-toggle-label"></span>`

  const dot = button.querySelector<HTMLElement>('span')
  const label = button.querySelector<HTMLElement>('.motion-toggle-label')

  const render = () => {
    const reduced = document.documentElement.classList.contains('reduce-motion')
    if (dot) dot.style.backgroundColor = reduced ? 'var(--color-subtle)' : 'var(--color-accent)'
    if (label) label.textContent = `Reduce motion: ${reduced ? 'on' : 'off'}`
  }

  button.addEventListener('click', () => {
    const reduced = document.documentElement.classList.contains('reduce-motion')
    setReduceMotion(!reduced)
    render()
  })

  render()
  document.body.appendChild(button)
}
