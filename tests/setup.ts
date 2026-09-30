import { beforeEach } from 'vitest'

// jsdom does not implement scrolling; the app calls it on every route change.
window.scrollTo = (() => {}) as typeof window.scrollTo
Element.prototype.scrollIntoView = (() => {}) as typeof Element.prototype.scrollIntoView

if (typeof window.matchMedia !== 'function') {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false
    },
  })) as unknown as typeof window.matchMedia
}

if (typeof window.IntersectionObserver !== 'function') {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  } as unknown as typeof IntersectionObserver
}

if (typeof window.requestAnimationFrame !== 'function') {
  window.requestAnimationFrame = ((cb: FrameRequestCallback) =>
    window.setTimeout(() => cb(Date.now()), 16)) as typeof window.requestAnimationFrame
  window.cancelAnimationFrame = ((id: number) =>
    window.clearTimeout(id)) as typeof window.cancelAnimationFrame
}

beforeEach(() => {
  document.documentElement.className = ''
  document.body.innerHTML = '<div id="root"></div>'
  localStorage.clear()
  sessionStorage.clear()
})
