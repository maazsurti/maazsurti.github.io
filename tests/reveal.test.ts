import { describe, it, expect, vi, beforeEach } from 'vitest'
import { observeReveal } from '../src/reveal'

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = []

  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit
  observed: Element[] = []
  disconnected = false

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    FakeIntersectionObserver.instances.push(this)
  }

  observe(element: Element) {
    this.observed.push(element)
  }

  unobserve() {}

  disconnect() {
    this.disconnected = true
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  intersect(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    )
  }
}

beforeEach(() => {
  FakeIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)
})

function lastObserver() {
  return FakeIntersectionObserver.instances.at(-1)
}

describe('observeReveal', () => {
  it('observes every [data-reveal] element', () => {
    document.body.innerHTML = `
      <div id="root">
        <div class="reveal" data-reveal="0"></div>
        <div class="reveal" data-reveal="90"></div>
        <div class="reveal" data-reveal="180"></div>
      </div>`

    observeReveal(document)

    expect(FakeIntersectionObserver.instances).toHaveLength(3)
    expect(lastObserver()?.observed).toHaveLength(1)
  })

  it('uses data-reveal as the stagger delay', () => {
    document.body.innerHTML = '<div class="reveal" data-reveal="90"></div>'

    observeReveal(document)

    const element = document.querySelector<HTMLElement>('.reveal')
    expect(element?.style.transitionDelay).toBe('90ms')
  })

  it('reveals on intersection and stops observing', () => {
    document.body.innerHTML = '<div class="reveal" data-reveal="0"></div>'
    const element = document.querySelector<HTMLElement>('.reveal')
    if (!element) throw new Error('missing element')

    observeReveal(document)
    const observer = lastObserver()
    expect(element.classList.contains('is-visible')).toBe(false)

    observer?.intersect(element)

    expect(element.classList.contains('is-visible')).toBe(true)
    expect(observer?.disconnected).toBe(true)
  })

  it('ignores the observer options threshold contract', () => {
    document.body.innerHTML = '<div class="reveal" data-reveal="0"></div>'

    observeReveal(document)

    expect(lastObserver()?.options).toEqual({ threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
  })
})
