import { escapeHtml } from '../dom'

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Apple Stack',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'App Store Connect'],
  },
  {
    label: 'Mobile Delivery',
    items: ['Architecture', 'REST APIs', 'Localization', 'Debugging', 'Release readiness'],
  },
  {
    label: 'CI/CD',
    items: ['Fastlane', 'GitHub Actions', 'Xcode', 'Git', 'Automated build pipelines'],
  },
  {
    label: 'Cross-platform',
    items: ['React Native', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'SvelteKit'],
  },
  {
    label: 'AI Workflows',
    items: ['Agent skills', 'MCP servers', 'Tool-assisted development loops', 'Claude', 'Cursor'],
  },
  {
    label: 'Product Work',
    items: ['Client communication', 'Feature scoping', 'QA handoff', 'App Store review'],
  },
]

// Spaces around the separator give the browser break opportunities between items.
function renderItems(items: string[]): string {
  return items
    .map((item, i) =>
      i < items.length - 1
        ? `${escapeHtml(item)} <span class="text-muted mx-1 font-normal">·</span> `
        : escapeHtml(item)
    )
    .join('')
}

function renderRow({ label, items }: { label: string; items: string[] }, index: number): string {
  return `
    <div class="reveal flex flex-col sm:flex-row gap-4 sm:gap-16 py-7" data-reveal="${index * 70}">
      <p class="text-xs font-black uppercase tracking-widest text-muted shrink-0 sm:w-32 pt-1" style="letter-spacing:0.12em">
        ${escapeHtml(label)}
      </p>

      <p class="font-serif text-lg font-semibold text-ink leading-relaxed">${renderItems(items)}</p>
    </div>`
}

export function renderSkills(): string {
  const rows = GROUPS.map((group, i) => renderRow(group, i)).join('')

  return `
    <section class="py-20 border-b border-edge">
      <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="reveal mb-12" data-reveal="0">
          <h2 class="text-sm font-black uppercase tracking-widest text-ink" style="letter-spacing:0.15em">
            Skills &amp; Tools
          </h2>
          <p class="font-serif text-base text-muted leading-relaxed mt-3 max-w-xl">
            Practical mobile engineering skills for teams that need someone who
            can build, stabilize, ship, and improve real products with modern
            AI-assisted workflows.
          </p>
        </div>

        <div class="divide-y divide-edge">${rows}</div>
      </div>
    </section>`
}
