import AppIcon from './AppIcon'
import StoreBadge from './StoreBadge'

export default function AppCard({ app, onClick }) {
  return (
    <div
      className="card-base p-0"
      style={{ border: '1px solid #d7ccbe' }}
      onClick={onClick}
    >
      <div className="border-b border-[#e1d7cb] px-6 py-4 bg-[#f8f2e8]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-brand-dim tracking-[0.08em]">{app.category.toUpperCase()}</span>
          <span className="font-mono text-[10px] text-brand-dim tracking-[0.08em]">{app.year}</span>
        </div>
      </div>
      <div className="p-6">
      <div className="flex items-start justify-between mb-5">
        <AppIcon app={app} size={52} />
        <span className="font-mono text-[10px] rounded-full px-2.5 py-[3px] tracking-[0.05em] text-brand-dim bg-[#f2ece4] border border-[#d7ccbe]">
          {app.tech}
        </span>
      </div>

      <h3 className="font-syne font-bold text-[20px] text-brand-text mb-1">{app.name}</h3>
      <p className="font-outfit text-[13px] text-brand-dim leading-[1.65] mb-5">
        {app.description.slice(0, 120)}…
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span className="font-mono text-[11px] text-brand-dim">
            <span className="text-brand-text">↓</span> {app.stats.downloads}
          </span>
          <span className="font-mono text-[11px] text-brand-dim">★ {app.stats.rating}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {app.stores?.appStore  && <StoreBadge type="appStore"  url={app.stores.appStore}  color={app.color} compact />}
          {app.stores?.playStore && <StoreBadge type="playStore" url={app.stores.playStore} color={app.color} compact />}
          <span className="font-outfit text-[12px] ml-1 text-brand-text">Details →</span>
        </div>
      </div>
      </div>
    </div>
  )
}
