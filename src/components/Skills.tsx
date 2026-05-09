const groups = [
  {
    label: 'Languages',
    items: ['Swift', 'Objective-C', 'Dart', 'JavaScript', 'HTML · CSS'],
  },
  {
    label: 'Frameworks',
    items: ['SwiftUI', 'UIKit', 'Flutter', 'SvelteKit'],
  },
  {
    label: 'Dev Tools',
    items: ['Xcode', 'Fastlane', 'GitHub Actions', 'Git', 'VS Code'],
  },
  {
    label: 'AI & Workflows',
    items: [
      'Proficient with AI coding tools (Claude, Cursor, Copilot)',
      'CLI-first workflows',
      'Markdown & config-driven AI alignment',
      'Prompt engineering for dev tasks',
    ],
  },
  {
    label: 'Industry',
    items: [
      'Latest iOS & Swift evolution',
      'AI trends in mobile & product',
      'App Store ecosystem & guidelines',
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-20 border-b border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2
          className="text-sm font-black uppercase tracking-widest text-ink mb-12"
          style={{ letterSpacing: '0.15em' }}
        >
          Skills & Tools
        </h2>

        <div className="divide-y divide-edge">
          {groups.map(({ label, items }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row gap-3 sm:gap-16 py-6"
            >
              <p
                className="text-xs font-black uppercase tracking-widest text-muted shrink-0 w-32 pt-0.5"
                style={{ letterSpacing: '0.1em' }}
              >
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink bg-surface border border-edge px-3 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
