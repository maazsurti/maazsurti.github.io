import { describe, it, expect, beforeEach } from 'vitest'
import { renderHero } from '../src/components/hero'
import { mountHtml } from '../src/dom'

beforeEach(() => {
  mountHtml('#root', renderHero())
})

describe('renderHero', () => {
  it('leads with the availability pill', () => {
    const pill = document.querySelector('.dot-ping')
    expect(pill).not.toBeNull()
    expect(document.body.textContent).toContain('Open to senior mobile developer roles')
  })

  it('renders the name in two clip-up lines', () => {
    const lines = document.querySelectorAll('.enter-clip')
    expect(lines).toHaveLength(2)
    expect(lines[0]?.textContent).toBe('Maaz')
    expect(lines[1]?.textContent).toBe('Surti.')
  })

  it('stagger the entrance with inline animation delays', () => {
    const firstEnter = document.querySelector<HTMLElement>('.enter')
    expect(firstEnter?.style.animationDelay).toBe('0.05s')
  })

  it('lists the three owner-facing stats', () => {
    expect(document.querySelectorAll('p.font-mono.text-3xl')).toHaveLength(3)

    const text = document.body.textContent ?? ''
    expect(text).toContain('15+')
    expect(text).toContain('Production Apps')
    expect(text).toContain('5 Yrs')
    expect(text).toContain('Mobile Experience')
    expect(text).toContain('8+')
    expect(text).toContain('App Store Releases')
  })

  it('renders the eight ownership chips', () => {
    const chips = document.querySelectorAll('span.bg-surface')
    expect(chips).toHaveLength(8)
    expect(document.body.textContent).toContain('App Store release')
  })

  it('exposes the primary contact and profile links', () => {
    expect(document.querySelector('a[href="mailto:hello@maazsurti.com"]')).not.toBeNull()
    expect(document.querySelector('a[href="https://linkedin.com/in/maazsurti"]')).not.toBeNull()
    expect(document.querySelector('a[href="https://github.com/maazsurti"]')).not.toBeNull()
    expect(document.querySelector('a[href="/resume.pdf"][download]')).not.toBeNull()
  })
})
