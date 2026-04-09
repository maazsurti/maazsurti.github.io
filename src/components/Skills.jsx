import { skillGroups, frameworks, architectures, levelMeta } from '../data/skills'
import SkillGroup from './SkillGroup'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-[8vw] pb-32 relative z-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Header + legend */}
        <div className="flex items-end justify-between flex-wrap gap-5 mb-14">
          <div>
            <span className="section-label">03 / Skills</span>
            <h2
              className="font-syne font-extrabold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(32px,4vw,48px)' }}
            >
              The stack <span className="text-neon-pink">I live in.</span>
            </h2>
          </div>

          {/* Proficiency legend */}
          <div className="flex gap-4 flex-wrap">
            {Object.entries(levelMeta).map(([key, meta]) => (
              <div key={key} className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((d) => (
                    <div
                      key={d}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: d <= meta.dot ? meta.color : 'rgba(255,255,255,0.1)' }}
                    />
                  ))}
                </div>
                <span className="font-code text-[10px] text-neutral-600 tracking-[0.06em]">
                  {meta.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill groups — 2-column responsive grid */}
        <div className="grid gap-x-16" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(440px,1fr))' }}>
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.05]" />

        {/* Frameworks tag cloud */}
        <h3 className="font-syne font-bold text-[13px] text-neutral-600 uppercase tracking-[0.12em] mb-4">
          Also Familiar With
        </h3>
        <div className="flex flex-wrap gap-2 mb-10">
          {frameworks.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        {/* Architecture patterns */}
        <h3 className="font-syne font-bold text-[13px] text-neutral-600 uppercase tracking-[0.12em] mb-4">
          Architectural Patterns
        </h3>
        <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>
          {architectures.map(({ pattern, desc, color }) => (
            <div
              key={pattern}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: `${color}08`,
                border:     `1px solid ${color}18`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
              <div>
                <div className="font-code text-[12px]" style={{ color }}>{pattern}</div>
                <div className="font-outfit text-[11px] text-neutral-600 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
