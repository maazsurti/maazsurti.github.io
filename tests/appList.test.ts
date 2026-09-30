import { describe, it, expect, beforeEach } from 'vitest'
import { renderAppList, bindAppList } from '../src/components/appList'
import { mountHtml, consumeReturnTo } from '../src/dom'
import { apps } from '../Utilities/data/apps'

beforeEach(() => {
  mountHtml('#root', renderAppList())
})

const cards = () => Array.from(document.querySelectorAll<HTMLAnchorElement>('a.card-link'))

describe('renderAppList', () => {
  it('renders one card per app', () => {
    expect(cards()).toHaveLength(apps.length)
  })

  it('links each card to its detail route with a stable id', () => {
    cards().forEach((card, i) => {
      const app = apps[i]
      expect(card.getAttribute('href')).toBe(`/apps/${app?.id}`)
      expect(card.id).toBe(`app-${app?.id}`)
      expect(card.dataset.appId).toBe(app?.id)
    })
  })

  it('carries the app accent as an inline custom property', () => {
    cards().forEach((card, i) => {
      expect(card.style.getPropertyValue('--app-color')).toBe(apps[i]?.color)
    })
  })

  it('numbers the cards as a padded index', () => {
    const numerals = Array.from(document.querySelectorAll('.card-numeral')).map(el =>
      el.textContent?.trim()
    )
    expect(numerals).toEqual(['01', '02', '03', '04', '05', '06', '07'])
  })

  it('shows a Live pill only for store-listed apps', () => {
    const expected = apps.filter(app => app.stores.appStore).length
    const pills = Array.from(document.querySelectorAll('span')).filter(el =>
      el.textContent?.trim() === 'Live'
    )
    expect(pills).toHaveLength(expected)
  })

  it('staggers the reveal per column', () => {
    const wrappers = Array.from(document.querySelectorAll('.reveal[data-reveal]'))
    expect(wrappers.map(el => el.getAttribute('data-reveal'))).toEqual([
      '0',
      '0',
      '90',
      '0',
      '90',
      '0',
      '90',
      '0',
    ])
  })

  it('summarises the project count', () => {
    expect(document.body.textContent).toContain(`${apps.length} featured projects`)
  })
})

describe('bindAppList', () => {
  it('remembers the card a visitor clicked', () => {
    bindAppList(document)

    const card = cards()[0]
    if (!card) throw new Error('missing card')
    card.addEventListener('click', event => event.preventDefault())
    card.click()

    expect(consumeReturnTo()).toBe(apps[0]?.id)
  })
})
