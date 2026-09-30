import { describe, it, expect } from 'vitest'
import { escapeHtml, mountHtml, setReturnTo, consumeReturnTo, currentYear } from '../src/dom'

describe('escapeHtml', () => {
  it('neutralises the html-significant characters', () => {
    expect(escapeHtml(`<>&"'`)).toBe('&lt;&gt;&amp;&quot;&#39;')
  })

  it('escapes ampersands before the entities it introduces', () => {
    expect(escapeHtml('a & b < c')).toBe('a &amp; b &lt; c')
  })

  it('leaves plain text untouched', () => {
    expect(escapeHtml('Onward — logistics')).toBe('Onward — logistics')
  })
})

describe('mountHtml', () => {
  it('replaces the target contents', () => {
    mountHtml('#root', '<section id="hero">hi</section>')

    expect(document.querySelector('#hero')?.textContent).toBe('hi')
  })
})

describe('returnTo', () => {
  it('round-trips an id and clears it after reading', () => {
    setReturnTo('slate')

    expect(consumeReturnTo()).toBe('slate')
    expect(consumeReturnTo()).toBeNull()
  })
})

describe('currentYear', () => {
  it('returns the current calendar year', () => {
    expect(currentYear()).toBe(new Date().getFullYear())
  })
})
