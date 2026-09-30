import { describe, it, expect, beforeEach } from 'vitest'
import {
  renderAppDetail,
  bindAppDetail,
  titleForApp,
  DEFAULT_TITLE,
} from '../src/components/appDetail'
import { mountHtml } from '../src/dom'
import { apps } from '../Utilities/data/apps'

const demoApp = apps.find(app => app.stores.demo) ?? apps[0]
const storeApp = apps.find(app => app.stores.appStore && !app.stores.demo) ?? apps[0]

describe('renderAppDetail — a known app', () => {
  beforeEach(() => {
    mountHtml('#root', renderAppDetail(demoApp.id))
  })

  it('renders the name in the app colour', () => {
    const heading = document.querySelector('h1')
    expect(heading?.textContent?.trim()).toBe(demoApp.name)
    expect(heading?.getAttribute('style')).toContain(`color:${demoApp.color}`)
  })

  it('renders the hero shot plus one screenshot per data entry', () => {
    expect(document.querySelectorAll('[data-shot]')).toHaveLength(demoApp.screenshots.length + 1)
  })

  it('renders every feature and case-study field', () => {
    expect(document.querySelectorAll('.space-y-3 li')).toHaveLength(demoApp.features.length)

    const text = document.body.textContent ?? ''
    for (const label of ['Case Study', 'Problem', 'My Ownership', 'Technical Decisions', 'Outcome']) {
      expect(text).toContain(label)
    }
    expect(text).toContain(demoApp.caseStudy.outcome)
  })

  it('shows the tech, platform, languages and product status as chips', () => {
    const chips = Array.from(document.querySelectorAll('span.bg-surface')).map(el =>
      el.textContent?.trim()
    )
    expect(chips).toEqual([
      demoApp.tech,
      demoApp.meta.platform,
      demoApp.meta.languages,
      'Interactive Web Demo',
    ])
  })

  it('links the primary CTA to the demo', () => {
    const primary = document.querySelectorAll(`a[href="${demoApp.stores.demo}"]`)
    expect(primary).toHaveLength(2)
  })
})

describe('renderAppDetail — a store-listed app', () => {
  beforeEach(() => {
    mountHtml('#root', renderAppDetail(storeApp.id))
  })

  it('uses store wording and links to the App Store', () => {
    const text = document.body.textContent ?? ''
    expect(text).toContain('Live on App Store')
    expect(text).toContain('Live App Store product')
    expect(document.querySelector(`a[href="${storeApp.stores.appStore}"]`)).not.toBeNull()
  })
})

describe('renderAppDetail — an unknown app', () => {
  it('renders the not-found fallback', () => {
    mountHtml('#root', renderAppDetail('does-not-exist'))

    expect(document.body.textContent).toContain('App not found.')
    expect(document.querySelector('a[href="/"]')).not.toBeNull()
    expect(document.querySelector('[data-shot]')).toBeNull()
  })
})

describe('titleForApp', () => {
  it('names the app in the document title', () => {
    expect(titleForApp(demoApp.id)).toBe(`${demoApp.name} - Maaz Surti`)
  })

  it('falls back to the site title for unknown apps', () => {
    expect(titleForApp('nope')).toBe(DEFAULT_TITLE)
  })
})

describe('bindAppDetail', () => {
  beforeEach(() => {
    mountHtml('#root', renderAppDetail(demoApp.id))
    bindAppDetail(document)
  })

  it('fades a screenshot in and drops its shimmer on load', () => {
    const container = document.querySelector<HTMLElement>('[data-shot]')
    const image = container?.querySelector('img')
    if (!container || !image) throw new Error('missing screenshot')

    expect(container.querySelector('.shimmer')).not.toBeNull()

    image.dispatchEvent(new Event('load'))

    expect(image.classList.contains('opacity-100')).toBe(true)
    expect(image.classList.contains('opacity-0')).toBe(false)
    expect(container.querySelector('.shimmer')).toBeNull()
  })

  it('falls back to a labelled colour block on error', () => {
    const container = document.querySelectorAll<HTMLElement>('[data-shot]')[1]
    const image = container?.querySelector('img')
    if (!container || !image) throw new Error('missing screenshot')

    const label = container.dataset.shotLabel

    image.dispatchEvent(new Event('error'))

    expect(document.querySelectorAll('[data-shot]')).toHaveLength(demoApp.screenshots.length)

    const fallback = Array.from(document.querySelectorAll('.p-4')).find(
      element => element.textContent?.trim() === label
    )
    expect(fallback).not.toBeUndefined()
  })
})
