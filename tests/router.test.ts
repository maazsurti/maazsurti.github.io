import { describe, it, expect, beforeEach } from 'vitest'
import { matchRoute, navigate, pathForApp, startRouter, type Route } from '../src/router'

beforeEach(() => {
  history.replaceState(null, '', '/')
})

describe('matchRoute', () => {
  it('matches the home route with and without a trailing slash', () => {
    expect(matchRoute('/')).toEqual({ name: 'home' })
    expect(matchRoute('')).toEqual({ name: 'home' })
  })

  it('extracts the app id from /apps/:id', () => {
    expect(matchRoute('/apps/slate')).toEqual({ name: 'app', id: 'slate' })
    expect(matchRoute('/apps/loopmarket/')).toEqual({ name: 'app', id: 'loopmarket' })
  })

  it('decodes an encoded app id', () => {
    expect(matchRoute('/apps/a%20b')).toEqual({ name: 'app', id: 'a b' })
  })

  it('falls back to notFound for unknown paths', () => {
    expect(matchRoute('/nope')).toEqual({ name: 'notFound' })
    expect(matchRoute('/apps/slate/deeper')).toEqual({ name: 'notFound' })
  })
})

describe('pathForApp', () => {
  it('builds the detail path', () => {
    expect(pathForApp('wellnest')).toBe('/apps/wellnest')
    expect(pathForApp('a b')).toBe('/apps/a%20b')
  })
})

describe('routing', () => {
  it('reports the initial route on start', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))

    expect(seen).toEqual([{ name: 'home' }])
    stop()
  })

  it('updates the url and notifies on navigate', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))
    seen.length = 0

    navigate('/apps/gatherly')

    expect(location.pathname).toBe('/apps/gatherly')
    expect(seen.at(-1)).toEqual({ name: 'app', id: 'gatherly' })
    stop()
  })

  it('ignores a navigate to the current url', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))
    seen.length = 0

    navigate('/')

    expect(seen).toHaveLength(0)
    stop()
  })

  it('re-renders the current route on popstate', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))

    history.pushState(null, '', '/apps/wellnest')
    window.dispatchEvent(new PopStateEvent('popstate'))

    expect(seen.at(-1)).toEqual({ name: 'app', id: 'wellnest' })
    stop()
  })

  it('intercepts plain same-origin link clicks', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))
    seen.length = 0

    const link = document.createElement('a')
    link.href = '/apps/slate'
    link.textContent = 'Slate'
    document.body.appendChild(link)

    const event = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 })
    link.dispatchEvent(event)

    expect(event.defaultPrevented).toBe(true)
    expect(location.pathname).toBe('/apps/slate')
    expect(seen.at(-1)).toEqual({ name: 'app', id: 'slate' })
    stop()
  })

  it('stops reporting after teardown', () => {
    const seen: Route[] = []
    const stop = startRouter(route => seen.push(route))
    stop()
    seen.length = 0

    navigate('/apps/slate')

    expect(seen).toHaveLength(0)
  })
})
