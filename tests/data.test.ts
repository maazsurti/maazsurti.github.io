import { describe, it, expect } from 'vitest'
import { apps, type App } from '../Utilities/data/apps'
import { timeline } from '../Utilities/data/timeline'
import { svgIcon } from '../Utilities/utils/svg'

const REQUIRED_APP_FIELDS: (keyof App)[] = [
  'id',
  'name',
  'category',
  'tech',
  'color',
  'accent',
  'icon',
  'tagline',
  'impact',
  'description',
  'features',
  'meta',
  'year',
  'stores',
  'screenshots',
  'caseStudy',
]

describe('apps data', () => {
  it('holds the seven featured projects in order', () => {
    expect(apps.map(app => app.id)).toEqual([
      'swifthaul',
      'slate',
      'loopmarket',
      'gatherly',
      'motionfit',
      'pawline',
      'wellnest',
    ])
  })

  it('gives every app a full set of fields', () => {
    for (const app of apps) {
      for (const field of REQUIRED_APP_FIELDS) {
        expect(app[field], `${app.id}.${String(field)}`).toBeTruthy()
      }
      expect(app.meta.platform).toBeTruthy()
      expect(app.meta.languages).toBeTruthy()
      for (const key of ['problem', 'ownership', 'technical', 'outcome'] as const) {
        expect(app.caseStudy[key], `${app.id}.caseStudy.${key}`).toBeTruthy()
      }
      expect(app.features.length).toBeGreaterThan(0)
    }
  })

  it('has unique ids', () => {
    const ids = apps.map(app => app.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('points screenshots at /screenshots/<id>/<n>.jpg', () => {
    for (const app of apps) {
      expect(app.screenshots.length).toBe(5)
      app.screenshots.forEach((shot, i) => {
        expect(shot.src).toBe(`/screenshots/${app.id}/${i + 1}.jpg`)
        expect(shot.label).toBeTruthy()
      })
    }
  })

  it('generates an inline svg icon with the app glyph', () => {
    for (const app of apps) {
      const icon = svgIcon(app.color, app.accent, app.icon)
      expect(icon).toMatch(/^data:image\/svg\+xml;utf8,/)
      expect(decodeURIComponent(icon)).toContain(`>${app.icon.toUpperCase()}<`)
      expect(app.iconImage).toBe(icon)
    }
  })
})

describe('timeline data', () => {
  it('describes the current role with highlights', () => {
    expect(timeline).toHaveLength(1)

    const [entry] = timeline
    expect(entry.role).toBe('Lead Mobile Developer')
    expect(entry.company).toBe('Raw Code Developers')
    expect(entry.year).toBeTruthy()
    expect(entry.desc).toBeTruthy()
    expect(entry.highlights).toHaveLength(4)
  })
})
