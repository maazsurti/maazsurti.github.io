import './index.css'
import { bindAppList, renderAppList } from './components/appList'
import {
  DEFAULT_TITLE,
  bindAppDetail,
  renderAppDetail,
  renderNotFoundPage,
  titleForApp,
} from './components/appDetail'
import { renderContact } from './components/contact'
import { renderFooter } from './components/footer'
import { renderHero } from './components/hero'
import { renderSkills } from './components/skills'
import { renderTimeline } from './components/timeline'
import { consumeReturnTo, mountHtml } from './dom'
import { mountLoader } from './loader'
import { mountMotionToggle } from './motionToggle'
import { seedReduceMotion } from './motion'
import { observeReveal } from './reveal'
import { type Route, startRouter } from './router'

seedReduceMotion()

function renderHome(): string {
  return `
    <div class="min-h-screen flex flex-col bg-bg text-ink">
      ${renderHero()}
      ${renderAppList()}
      ${renderTimeline()}
      ${renderSkills()}
      ${renderContact()}
      ${renderFooter()}
    </div>`
}

// Returning from a detail page re-centers the originating card; otherwise top.
function resetScroll(isHome: boolean): void {
  if (isHome) {
    const id = consumeReturnTo()
    const card = id ? document.getElementById(`app-${id}`) : null
    if (card) {
      card.scrollIntoView({ block: 'center', behavior: 'instant' })
      return
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

function render(route: Route): void {
  if (route.name === 'home') {
    document.title = DEFAULT_TITLE
    mountHtml('#root', renderHome())
  } else if (route.name === 'app') {
    document.title = titleForApp(route.id)
    mountHtml('#root', renderAppDetail(route.id))
  } else {
    document.title = DEFAULT_TITLE
    mountHtml('#root', renderNotFoundPage())
  }

  observeReveal(document)
  bindAppList(document)
  bindAppDetail(document)
  resetScroll(route.name === 'home')
}

mountLoader()
startRouter(render)

if (import.meta.env.DEV) {
  mountMotionToggle()
}
