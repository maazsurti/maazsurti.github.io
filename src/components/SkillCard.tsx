import { levelMeta } from '../Utilities/data/skills'

export default function SkillCard({ skill }) {
  const meta = levelMeta[skill.level]

  return (
    <div
      className="rounded-xl px-3.5 py-3 flex flex-col gap-1 transition-all duration-200 cursor-default"
      style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 6px 20px ${meta.color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Name + dots */}
      <div className="flex items-center justify-between">
        <span className="font-syne font-bold text-[13px] text-[#e0e0e0]">{skill.name}</span>
        <div className="flex items-center gap-1">
          {[1,2,3,4].map(d => (
            <div
              key={d}
              className="w-[5px] h-[5px] rounded-full transition-all duration-300"
              style={{
                background: d <= meta.dot ? meta.color : 'rgba(255,255,255,0.1)',
                boxShadow: d <= meta.dot ? `0 0 4px ${meta.color}` : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Badge + years */}
      <div className="flex items-center gap-2">
        <span
          className="font-mono text-[9px] rounded-[4px] px-1.5 py-0.5 tracking-[0.06em]"
          style={{ color: meta.color, background: `${meta.color}15`, border: `1px solid ${meta.color}30` }}
        >
          {meta.label}
        </span>
        <span className="font-mono text-[9px] text-[#444]">{skill.years}</span>
      </div>

      <p className="font-outfit text-[11px] text-[#555] leading-[1.4] mt-0.5">{skill.detail}</p>
    </div>
  )
}
