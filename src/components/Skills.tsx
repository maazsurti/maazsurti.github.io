import { useReveal } from '../hooks/useReveal'

const groups = [
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
    items: [
      'Client communication',
      'Feature scoping',
      'QA handoff',
      'App Store review',
    ],
  },
]

function SkillRow({
  label,
  items,
  index,
}: {
  label: string
  items: string[]
  index: number
}) {
  const [ref, revealed, revealStyle] = useReveal(index * 70)
  return (
    <div
      ref={ref}
      style={revealStyle}
      className={`reveal ${revealed} flex flex-col sm:flex-row gap-4 sm:gap-16 py-7`}
    >
      <p
        className="text-xs font-black uppercase tracking-widest text-muted shrink-0 w-32 pt-1"
        style={{ letterSpacing: '0.12em' }}
      >
        {label}
      </p>

      <p className="font-serif text-lg font-semibold text-ink leading-relaxed">
        {items.map((item, i) => (
          <span key={item}>
            {item}
            {i < items.length - 1 && (
              <span className="text-muted mx-2 font-normal">·</span>
            )}
          </span>
        ))}
      </p>
    </div>
  )
}

export default function Skills() {
  const [ref, revealed, revealStyle] = useReveal()
  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          style={revealStyle}
          className={`reveal ${revealed} mb-12`}
        >
          <h2
            className="text-sm font-black uppercase tracking-widest text-ink"
            style={{ letterSpacing: '0.15em' }}
          >
            Skills & Tools
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed mt-3 max-w-xl">
            Practical mobile engineering skills for teams that need someone who
            can build, stabilize, ship, and improve real products with modern
            AI-assisted workflows.
          </p>
        </div>

        <div className="divide-y divide-edge">
          {groups.map(({ label, items }, i) => (
            <SkillRow key={label} label={label} items={items} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
