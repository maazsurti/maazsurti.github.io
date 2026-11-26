const DEFAULT_HOST = 'https://us.i.posthog.com'

function analyticsKey(): string {
  return import.meta.env.VITE_POSTHOG_KEY ?? ''
}

function analyticsHost(): string {
  return import.meta.env.VITE_POSTHOG_HOST || DEFAULT_HOST
}

export function initAnalytics(): void {
  const key = analyticsKey()
  if (!key || import.meta.env.DEV) return

  // Loaded lazily so the SDK stays out of the main bundle and off the first paint.
  void import('posthog-js').then(({ default: posthog }) => {
    posthog.init(key, {
      api_host: analyticsHost(),
      defaults: '2025-05-24',
      capture_pageview: 'history_change',
      capture_pageleave: true,
      person_profiles: 'identified_only',
      respect_dnt: true,
      persistence: 'memory',
      disable_session_recording: true,
      disable_surveys: true,
    })
  })
}
