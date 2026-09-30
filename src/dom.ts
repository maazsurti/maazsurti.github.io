import $ from 'jquery'

const RETURN_TO_KEY = 'returnTo'

/** Escapes text destined for an HTML template string. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Replaces a target's contents with an HTML string. */
export function mountHtml(target: string | Element, html: string): void {
  const $target = typeof target === 'string' ? $(target) : $(target)
  $target.html(html)
}

export function setReturnTo(id: string): void {
  sessionStorage.setItem(RETURN_TO_KEY, id)
}

/** Reads and clears the card id a detail page should re-center on return. */
export function consumeReturnTo(): string | null {
  const id = sessionStorage.getItem(RETURN_TO_KEY)
  if (id) sessionStorage.removeItem(RETURN_TO_KEY)
  return id
}

export function currentYear(): number {
  return new Date().getFullYear()
}
