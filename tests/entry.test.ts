import { describe, it, expect, vi, afterEach } from 'vitest'

afterEach(() => {
  vi.useRealTimers()
})

describe('app entry wiring', () => {
  it('boots the homepage, navigates to a detail page, and handles unknown routes', async () => {
    vi.useFakeTimers()

    const { navigate } = await import('../src/router')
    await import('../src/main')

    expect(document.querySelector('#root h1')?.textContent).toContain('Maaz')
    expect(document.querySelectorAll('a.card-link')).toHaveLength(7)
    expect(document.querySelector('.loader')).not.toBeNull()

    await vi.advanceTimersByTimeAsync(3000)
    expect(document.documentElement.classList.contains('loaded')).toBe(true)
    expect(document.querySelector('.loader')).toBeNull()

    navigate('/apps/slate')
    expect(document.title).toBe('Slate - Maaz Surti')
    expect(document.querySelector('#root h1')?.textContent?.trim()).toBe('Slate')
    expect(document.querySelectorAll('[data-shot]')).not.toHaveLength(0)

    navigate('/')
    expect(document.querySelectorAll('a.card-link')).toHaveLength(7)

    navigate('/nope')
    expect(document.body.textContent).toContain('App not found.')
  })
})
