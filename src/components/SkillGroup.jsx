import SkillCard from './SkillCard'

export default function SkillGroup({ group }) {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <span className="text-xs" style={{ color: group.color }}>{group.icon}</span>
        <span
          className="font-syne font-bold text-[13px] tracking-[0.08em] uppercase"
          style={{ color: group.color }}
        >
          {group.category}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(90deg, ${group.color}33, transparent)` }}
        />
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-2">
        {group.skills.map(s => <SkillCard key={s.name} skill={s} />)}
      </div>
    </div>
  )
}
