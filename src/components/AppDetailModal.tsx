import { useEffect, useRef } from 'react'
import AppIcon from './AppIcon'
import StoreBadge from './StoreBadge'
import ScreenshotCarousel from './ScreenshotCarousel'

export default function AppDetailModal({ app, onClose }) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    closeBtnRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const root = dialogRef.current
      if (!root) return

      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey) {
        if (active === first || !root.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else if (active === last || !root.contains(active)) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5 animate-fade-in"
      style={{ background: 'rgba(24,20,16,0.58)', backdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${app.name} details`}
        className="relative w-full max-w-[980px] max-h-[90vh] overflow-y-auto rounded-[28px] animate-slide-up"
        style={{
          background: 'linear-gradient(135deg,#fdfaf5,#f4ece2)',
          border: '1px solid #d2c5b5',
          boxShadow: '0 30px 80px rgba(36,30,24,0.24)',
        }}
      >
        <div className="px-5 sm:px-9 pt-7 sm:pt-9 pb-5 sm:pb-7" style={{ borderBottom: '1px solid #d8cec1' }}>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="hidden sm:block"><AppIcon app={app} size={80} /></div>
            <div className="sm:hidden"><AppIcon app={app} size={60} /></div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                <h2 className="font-syne font-bold text-[22px] sm:text-[28px] text-brand-text m-0">{app.name}</h2>
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.08em] rounded-full px-3 py-[3px]"
                  style={{ color: '#5f5143', background: '#f2ece4', border: '1px solid #d7ccbe' }}
                >
                  {app.tech}
                </span>
              </div>
              <p className="font-outfit text-[13px] text-brand-dim mb-3">{app.category} · {app.year}</p>
              <p className="font-syne font-bold text-[17px] italic m-0 text-[#5f5143]">
                "{app.tagline}"
              </p>
            </div>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-lg text-brand-dim
                         bg-black/[0.03] border border-black/[0.1] cursor-pointer transition-all
                         duration-200 flex-shrink-0 hover:bg-black/5 hover:text-brand-text"
            >×</button>
          </div>
        </div>

        <div className="grid grid-cols-3 px-4 sm:px-9 py-4 sm:py-5 bg-[#f8f2e8]" style={{ borderBottom: '1px solid #dfd4c6' }}>
          {[
            { label: 'Downloads', val: app.stats.downloads },
            { label: 'App Rating', val: '★ ' + app.stats.rating },
            { label: 'Reviews',   val: app.stats.reviews },
          ].map(s => (
            <div key={s.label} className="text-center px-1">
              <div className="font-syne font-bold text-[16px] sm:text-[22px] text-brand-text truncate">{s.val}</div>
              <div className="font-outfit text-[11px] sm:text-[12px] text-brand-dim mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="px-5 sm:px-9 py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-7">
          <div>
            <p className="font-outfit text-[15px] text-brand-dim leading-[1.75] mb-7">{app.description}</p>
            {app.screenshots?.length > 0 && (
              <div
                className="rounded-[20px] p-6 mb-7"
                style={{
                  background: '#f5ede3',
                  border: '1px solid #d9cebf',
                }}
              >
                <h3 className="font-syne font-bold text-[13px] text-brand-dim tracking-[0.12em] uppercase text-center mb-5">
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
          </div>
          <div>
            <h3 className="font-syne font-bold text-[13px] text-brand-dim tracking-[0.12em] uppercase mb-3.5">
              Technical Highlights
            </h3>
            <div className="grid grid-cols-1 gap-2.5 mb-7">
              {app.features.map(f => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5"
                  style={{ background: '#f8f2e8', border: '1px solid #dfd4c6' }}
                >
                  <span className="text-[10px] text-[#5f5143]">▸</span>
                  <span className="font-outfit text-[13px] text-brand-dim">{f}</span>
                </div>
              ))}
            </div>
            {(app.stores?.appStore || app.stores?.playStore) && (
              <div className="pt-6 mt-7" style={{ borderTop: '1px solid #dfd4c6' }}>
                <h3 className="font-syne font-bold text-[13px] text-brand-dim tracking-[0.12em] uppercase mb-3.5">
                  Download
                </h3>
                <div className="flex gap-3 flex-col">
                  {app.stores.appStore  && <StoreBadge type="appStore"  url={app.stores.appStore}  color={app.color} />}
                  {app.stores.playStore && <StoreBadge type="playStore" url={app.stores.playStore} color={app.color} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
