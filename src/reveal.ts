/**
 * Reveals elements carrying `data-reveal` when they scroll into view, using the
 * value as a stagger (ms). Each element fires once, then stops being observed.
 */
export function observeReveal(root: ParentNode = document): void {
  const elements = root.querySelectorAll<HTMLElement>('[data-reveal]')

  for (const element of elements) {
    const delay = Number(element.dataset.reveal ?? '0')
    if (delay) element.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        element.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(element)
  }
}
