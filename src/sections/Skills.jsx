import { skillGroups, levelMeta, toolkit, architectures } from '../data/skills'
import SkillGroup from '../components/SkillGroup'

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] pt-20 pb-28 px-[8vw]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-5 mb-14">
          <div>
            <span className="section-label">03 / Skills</span>
            <h2 className="section-title" style={{ fontSize:'clamp(32px,4vw,48px)' }}>
              The stack <span className="text-brand-pink">I live in.</span>
            </h2>
          </div>
          {/* Legend */}
          <div className="flex gap-4 flex-wrap">
            {Object.entries(levelMeta).map(([key, meta]) => (
              <div key={key} className="flex items-center gap-1.5">
                <div className="flex gap-[3px]">
                  {[1,2,3,4].map(d => (
                    <div key={d} className="w-[5px] h-[5px] rounded-full"
                      style={{ background: d <= meta.dot ? meta.color : 'rgba(0,0,0,0.1)' }} />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#64748b] tracking-[0.06em]">{meta.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill groups */}
        <div className="grid gap-x-16" style={{ gridTemplateColumns:'repeat(auto-fill,minmax(440px,1fr))' }}>
          {skillGroups.map(g => <SkillGroup key={g.category} group={g} />)}
        </div>

        {/* Toolkit */}
        <div className="mt-12 pt-10 border-t border-black/5">
          <h3 className="font-syne font-bold text-[13px] text-[#64748b] tracking-[0.12em] uppercase mb-4">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap gap-2">
            {toolkit.map(t => <span key={t} className="tag-pill">{t}</span>)}
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-10">
          <h3 className="font-syne font-bold text-[13px] text-[#64748b] tracking-[0.12em] uppercase mb-4">
            Architectural Patterns
          </h3>
          <div className="grid gap-2.5" style={{ gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))' }}>
            {architectures.map(({ pattern, desc, color }) => (
              <div key={pattern}
                className="flex items-center gap-3 rounded-[10px] px-4 py-3"
                style={{ background:`${color}08`, border:`1px solid ${color}18` }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:color }} />
                <div>
                  <div className="font-mono text-[12px]" style={{ color }}>{pattern}</div>
                  <div className="font-outfit text-[11px] text-[#64748b] mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
