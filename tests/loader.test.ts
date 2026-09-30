import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mountLoader } from '../src/loader'

function stubFonts() {
  Object.defineProperty(document, 'fonts', {
    configurable: true,
    value: { ready: Promise.resolve() },
  })
}

const isLoaded = () => document.documentElement.classList.contains('loaded')
const overlay = () => document.querySelector('.loader')

describe('mountLoader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    stubFonts()
  })

  afterEach(() => {
    vi.useRealTimers()
    overlay()?.remove()
  })

  it('shows the intro overlay first', () => {
    mountLoader()

    expect(overlay()).not.toBeNull()
    expect(overlay()?.querySelector('.loader-name')?.textContent).toBe('Maaz Surti.')
    expect(isLoaded()).toBe(false)
  })

  it('hands off to the entrance, then removes the overlay', async () => {
    mountLoader()

    await vi.advanceTimersByTimeAsync(3000)

    expect(isLoaded()).toBe(true)
    expect(overlay()).toBeNull()
  })

  it('releases as soon as fonts are ready, with no minimum hold', async () => {
    mountLoader()

    await vi.advanceTimersByTimeAsync(0)

    expect(isLoaded()).toBe(true)
    expect(overlay()).not.toBeNull()

    await vi.advanceTimersByTimeAsync(600)
    expect(overlay()).toBeNull()
  })

  it('is near-instant under reduced motion', async () => {
    document.documentElement.classList.add('reduce-motion')
    mountLoader()

    await vi.advanceTimersByTimeAsync(50)

    expect(isLoaded()).toBe(true)
    expect(overlay()).toBeNull()
  })
})
