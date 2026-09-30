import { describe, it, expect, vi } from 'vitest'
import { seedReduceMotion, setReduceMotion } from '../src/motion'
import { mountMotionToggle } from '../src/motionToggle'

type ChangeListener = (event: { matches: boolean }) => void

function installMatchMedia(matches: boolean) {
  const listeners: ChangeListener[] = []

  vi.stubGlobal('matchMedia', () => ({
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addListener: (cb: ChangeListener) => listeners.push(cb),
    removeListener: () => {},
    addEventListener: (_type: string, cb: ChangeListener) => listeners.push(cb),
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }))

  return {
    emit: (next: boolean) => {
      for (const listener of listeners) listener({ matches: next })
    },
  }
}

const isReduced = () => document.documentElement.classList.contains('reduce-motion')

describe('seedReduceMotion', () => {
  it('follows the OS preference when nothing is stored', () => {
    installMatchMedia(true)
    seedReduceMotion()
    expect(isReduced()).toBe(true)
  })

  it('lets a stored "on" override an OS preference of no', () => {
    installMatchMedia(false)
    localStorage.setItem('reduce-motion', 'on')
    seedReduceMotion()
    expect(isReduced()).toBe(true)
  })

  it('lets a stored "off" override an OS preference of yes', () => {
    installMatchMedia(true)
    localStorage.setItem('reduce-motion', 'off')
    seedReduceMotion()
    expect(isReduced()).toBe(false)
  })

  it('tracks later OS changes while no override is stored', () => {
    const media = installMatchMedia(false)
    seedReduceMotion()

    media.emit(true)
    expect(isReduced()).toBe(true)

    media.emit(false)
    expect(isReduced()).toBe(false)
  })

  it('ignores OS changes once an override is stored', () => {
    const media = installMatchMedia(false)
    seedReduceMotion()
    localStorage.setItem('reduce-motion', 'off')

    media.emit(true)
    expect(isReduced()).toBe(false)
  })
})

describe('setReduceMotion', () => {
  it('applies the class and persists the choice', () => {
    setReduceMotion(true)
    expect(isReduced()).toBe(true)
    expect(localStorage.getItem('reduce-motion')).toBe('on')

    setReduceMotion(false)
    expect(isReduced()).toBe(false)
    expect(localStorage.getItem('reduce-motion')).toBe('off')
  })
})

describe('mountMotionToggle', () => {
  it('reflects and flips the reduced-motion state', () => {
    mountMotionToggle()

    const button = document.querySelector('button')
    expect(button?.textContent).toContain('Reduce motion: off')

    button?.click()
    expect(isReduced()).toBe(true)
    expect(button?.textContent).toContain('Reduce motion: on')
    expect(localStorage.getItem('reduce-motion')).toBe('on')

    button?.click()
    expect(isReduced()).toBe(false)
    expect(button?.textContent).toContain('Reduce motion: off')
    expect(localStorage.getItem('reduce-motion')).toBe('off')
  })
})
