import AppIcon from './AppIcon'
import StoreBadge from './StoreBadge'

export default function AppCard({ app, onClick }) {
  return (
    <div
      className="card-base p-7"
      style={{ border: `1px solid ${app.color}22` }}
      onClick={onClick}
    >
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-[150px] h-[150px] pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${app.color}12, transparent 70%)` }}
      />

      {/* Icon row */}
      <div className="flex items-start justify-between mb-5">
        <AppIcon app={app} size={52} />
        <span
          className="font-mono text-[10px] rounded-full px-2.5 py-[3px] tracking-[0.05em]"
          style={{ color: app.color, background: `${app.color}15`, border: `1px solid ${app.color}30` }}
        >
          {app.tech}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-syne font-extrabold text-[20px] text-[#1a1d20] mb-1">{app.name}</h3>
      <p className="font-mono text-[10px] text-[#64748b] mb-3 tracking-[0.05em]">{app.category.toUpperCase()}</p>
      <p className="font-outfit text-[13px] text-[#475569] leading-[1.65] mb-5">
        {app.description.slice(0, 120)}…
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span className="font-mono text-[11px] text-[#64748b]">
            <span style={{ color: app.color }}>↓</span> {app.stats.downloads}
          </span>
          <span className="font-mono text-[11px] text-[#64748b]">★ {app.stats.rating}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {app.stores?.appStore  && <StoreBadge type="appStore"  url={app.stores.appStore}  color={app.color} compact />}
          {app.stores?.playStore && <StoreBadge type="playStore" url={app.stores.playStore} color={app.color} compact />}
          <span className="font-outfit text-[12px] ml-1" style={{ color: app.color }}>Details →</span>
        </div>
      </div>
    </div>
  )
}
