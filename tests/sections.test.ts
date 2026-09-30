import { describe, it, expect, beforeEach } from 'vitest'
import { renderTimeline } from '../src/components/timeline'
import { renderSkills } from '../src/components/skills'
import { renderContact } from '../src/components/contact'
import { renderFooter } from '../src/components/footer'
import { mountHtml, currentYear } from '../src/dom'
import { timeline } from '../Utilities/data/timeline'

describe('renderTimeline', () => {
  beforeEach(() => {
    mountHtml('#root', renderTimeline())
  })

  it('renders the experience heading', () => {
    expect(document.body.textContent).toContain('Experience')
    expect(document.body.textContent).toContain('6+ years building client-facing mobile products')
  })

  it('renders one drifting row per timeline entry', () => {
    expect(document.querySelectorAll('.row-drift')).toHaveLength(timeline.length)
  })

  it('shows the year, role, company and location', () => {
    const entry = timeline[0]
    const row = document.querySelector('.row-drift')?.closest('.reveal')
    const text = row?.textContent ?? ''

    expect(text).toContain(entry?.year)
    expect(text).toContain(entry?.role)
    expect(text).toContain(entry?.company)
    expect(text).toContain(entry?.location)
  })

  it('lists every highlight', () => {
    expect(document.querySelectorAll('.row-drift li')).toHaveLength(
      timeline[0]?.highlights.length ?? 0
    )
  })
})

describe('renderSkills', () => {
  beforeEach(() => {
    mountHtml('#root', renderSkills())
  })

  it('renders the six skill groups', () => {
    const rows = document.querySelectorAll('.divide-y > .reveal')
    expect(rows).toHaveLength(6)

    const text = document.body.textContent ?? ''
    for (const label of ['Apple Stack', 'Mobile Delivery', 'CI/CD', 'Cross-platform', 'AI Workflows', 'Product Work']) {
      expect(text).toContain(label)
    }
  })

  it('keeps real spaces around the separators so the run can wrap', () => {
    const firstRow = document.querySelector('.divide-y p.font-serif')
    expect(firstRow?.textContent).toBe(
      'Swift · SwiftUI · UIKit · Objective-C · App Store Connect'
    )
  })

  it('staggers each group', () => {
    const delays = Array.from(document.querySelectorAll('.divide-y > .reveal')).map(el =>
      el.getAttribute('data-reveal')
    )
    expect(delays).toEqual(['0', '70', '140', '210', '280', '350'])
  })
})

describe('renderContact', () => {
  beforeEach(() => {
    mountHtml('#root', renderContact())
  })

  it('renders the heading and all three contact links', () => {
    expect(document.body.textContent).toContain("Let's work")
    expect(document.querySelectorAll('a[href]')).toHaveLength(3)
  })

  it('opens the profile links in a new tab but not the mailto', () => {
    const email = document.querySelector<HTMLAnchorElement>('a[href^="mailto"]')
    expect(email?.hasAttribute('target')).toBe(false)

    for (const href of ['https://github.com/maazsurti', 'https://linkedin.com/in/maazsurti']) {
      const link = document.querySelector<HTMLAnchorElement>(`a[href="${href}"]`)
      expect(link?.target).toBe('_blank')
      expect(link?.rel).toBe('noopener noreferrer')
    }
  })
})

describe('renderFooter', () => {
  beforeEach(() => {
    mountHtml('#root', renderFooter())
  })

  it('shows the name, role and current year', () => {
    const text = document.body.textContent ?? ''
    expect(text).toContain('Maaz Surti')
    expect(text).toContain('Senior Mobile Developer')
    expect(text).toContain(`© ${currentYear()}`)
  })

  it('links out to profiles, and only external ones open a new tab', () => {
    expect(document.querySelectorAll('footer a')).toHaveLength(3)

    const github = document.querySelector<HTMLAnchorElement>('a[href="https://github.com/maazsurti"]')
    expect(github?.target).toBe('_blank')

    const email = document.querySelector<HTMLAnchorElement>('a[href^="mailto"]')
    expect(email?.hasAttribute('target')).toBe(false)
  })
})
