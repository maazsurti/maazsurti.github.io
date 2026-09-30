export type Route =
  | { name: 'home' }
  | { name: 'app'; id: string }
  | { name: 'notFound' }

export type RouteListener = (route: Route, path: string) => void

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export function matchRoute(pathname: string): Route {
  const path = normalizePath(pathname)
  if (path === '/') return { name: 'home' }

  const match = /^\/apps\/([^/]+)$/.exec(path)
  if (match) return { name: 'app', id: decodeURIComponent(match[1]) }

  return { name: 'notFound' }
}

export function pathForApp(id: string): string {
  return `/apps/${encodeURIComponent(id)}`
}

let listener: RouteListener | null = null

function emit(): void {
  listener?.(matchRoute(location.pathname), location.pathname)
}

export function navigate(path: string, replace = false): void {
  const current = location.pathname + location.search + location.hash
  if (path === current) return

  if (replace) history.replaceState(null, '', path)
  else history.pushState(null, '', path)

  emit()
}

function isInterceptable(event: MouseEvent, anchor: HTMLAnchorElement): boolean {
  if (event.defaultPrevented || event.button !== 0) return false
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false
  if (anchor.target && anchor.target !== '_self') return false
  if (anchor.hasAttribute('download')) return false

  let url: URL
  try {
    url = new URL(anchor.href, location.href)
  } catch {
    return false
  }

  return url.origin === location.origin
}

/** Routes in-page link clicks through the history API and reports every route change. */
export function startRouter(onRoute: RouteListener): () => void {
  listener = onRoute

  const onClick = (event: MouseEvent) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const anchor = target.closest('a[href]')
    if (!(anchor instanceof HTMLAnchorElement)) return
    if (!isInterceptable(event, anchor)) return

    const url = new URL(anchor.href, location.href)
    event.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }

  const onPopState = () => emit()

  document.addEventListener('click', onClick)
  window.addEventListener('popstate', onPopState)
  emit()

  return () => {
    document.removeEventListener('click', onClick)
    window.removeEventListener('popstate', onPopState)
    listener = null
  }
}
