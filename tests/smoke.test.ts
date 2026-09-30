import { describe, it, expect } from 'vitest'
import $ from 'jquery'

describe('test tooling', () => {
  it('mounts markup with jQuery into jsdom', () => {
    $('#root').html('<p class="hi">hi</p>')

    expect($('#root .hi').text()).toBe('hi')
    expect(document.querySelector('.hi')).not.toBeNull()
  })

  it('exposes the browser globals the app relies on', () => {
    expect(typeof window.matchMedia).toBe('function')
    expect(typeof window.requestAnimationFrame).toBe('function')
  })
})
