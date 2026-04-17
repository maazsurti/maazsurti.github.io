import { useEffect } from 'react'
import AppIcon from './AppIcon'
import StoreBadge from './StoreBadge'
import ScreenshotCarousel from './ScreenshotCarousel'

export default function AppDetailModal({ app, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5 animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-[720px] max-h-[90vh] overflow-y-auto rounded-[28px] animate-slide-up"
        style={{
          background: 'linear-gradient(135deg,#ffffff,#f1f5f9)',
          border: `1px solid ${app.color}33`,
          boxShadow: `0 40px 100px ${app.accent}22, 0 0 0 1px ${app.color}22`,
        }}
      >
        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div className="px-9 pt-9 pb-7" style={{ borderBottom: `1px solid ${app.color}22` }}>
          <div className="flex items-start gap-5">
            <AppIcon app={app} size={80} />

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5">
                <h2 className="font-syne font-extrabold text-[28px] text-[#1a1d20] m-0">{app.name}</h2>
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.08em] rounded-full px-3 py-[3px]"
                  style={{ color: app.color, background: `${app.color}22`, border: `1px solid ${app.color}44` }}
                >
                  {app.tech}
                </span>
              </div>
              <p className="font-outfit text-[13px] text-[#64748b] mb-3">{app.category} · {app.year}</p>
              <p className="font-syne font-bold text-[17px] italic m-0" style={{ color: app.color }}>
                "{app.tagline}"
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg text-[#64748b]
                         bg-black/[0.03] border border-black/[0.1] cursor-pointer transition-all
                         duration-200 flex-shrink-0 hover:bg-black/5 hover:text-black"
            >×</button>
          </div>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 px-9 py-5" style={{ borderBottom: `1px solid ${app.color}15` }}>
          {[
            { label: 'Downloads', val: app.stats.downloads },
            { label: 'App Rating', val: '★ ' + app.stats.rating },
            { label: 'Reviews',   val: app.stats.reviews },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-syne font-extrabold text-[22px]" style={{ color: app.color }}>{s.val}</div>
              <div className="font-outfit text-[12px] text-[#64748b] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Body ───────────────────────────────────────────────────────────── */}
        <div className="px-9 py-7">
          <p className="font-outfit text-[15px] text-[#475569] leading-[1.75] mb-7">{app.description}</p>

          {/* Screenshots */}
          {app.screenshots?.length > 0 && (
            <div
              className="rounded-[20px] p-6 mb-7"
              style={{
                background: `linear-gradient(135deg, ${app.color}08, ${app.accent}10)`,
                border: `1px solid ${app.color}18`,
              }}
            >
              <h3 className="font-syne font-bold text-[13px] text-[#64748b] tracking-[0.12em] uppercase text-center mb-5">
                Screenshots
              </h3>
              <ScreenshotCarousel
                screenshots={app.screenshots}
                color={app.color}
                accent={app.accent}
                icon={app.icon}
              />
            </div>
          )}

          {/* Features */}
          <h3 className="font-syne font-bold text-[13px] text-[#64748b] tracking-[0.12em] uppercase mb-3.5">
            Technical Highlights
          </h3>
          <div className="grid grid-cols-2 gap-2.5 mb-7">
            {app.features.map(f => (
              <div
                key={f}
                className="flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5"
                style={{ background: `${app.color}0a`, border: `1px solid ${app.color}1a` }}
              >
                <span className="text-[10px]" style={{ color: app.color }}>▸</span>
                <span className="font-outfit text-[13px] text-[#475569]">{f}</span>
              </div>
            ))}
          </div>

          {/* Store links */}
          {(app.stores?.appStore || app.stores?.playStore) && (
            <div className="pt-6 mt-7" style={{ borderTop: `1px solid ${app.color}15` }}>
              <h3 className="font-syne font-bold text-[13px] text-[#64748b] tracking-[0.12em] uppercase mb-3.5">
                Download
              </h3>
              <div className="flex gap-3">
                {app.stores.appStore  && <StoreBadge type="appStore"  url={app.stores.appStore}  color={app.color} />}
                {app.stores.playStore && <StoreBadge type="playStore" url={app.stores.playStore} color={app.color} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
