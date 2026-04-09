import { useState, useEffect } from 'react'

export default function ScreenshotCarousel({ screenshots, color, icon }) {
  const [active, setActive] = useState(0)
  const [dir, setDir]       = useState(1)
  const [key, setKey]       = useState(0)

  const go = (next) => {
    setDir(next > active ? 1 : -1)
    setActive(next)
    setKey(k => k + 1)
  }
  const prev = () => go((active - 1 + screenshots.length) % screenshots.length)
  const next = () => go((active + 1) % screenshots.length)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  const scr = screenshots[active]

  return (
    <div className="select-none">
      {/* Phone + arrows */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg
                     bg-white/5 border border-white/10 text-[#888] cursor-pointer
                     transition-all duration-200 flex-shrink-0"
          style={{}}
          onMouseEnter={e => { e.currentTarget.style.background = color+'22'; e.currentTarget.style.color = color }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#888' }}
        >‹</button>

        {/* Phone frame */}
        <div className="relative flex-shrink-0">
          {/* Glow */}
          <div
            className="absolute inset-[-20px] pointer-events-none"
            style={{ background: `radial-gradient(ellipse, ${color}18 0%, transparent 70%)` }}
          />
          {/* Shell */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 180, height: 360,
              background: '#0a0a14',
              borderRadius: 36,
              border: '2px solid rgba(255,255,255,0.12)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Dynamic island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-black rounded-[14px]"
              style={{ width: 56, height: 16 }} />

            {/* Screen image */}
            <img
              key={key}
              src={scr.src}
              alt={scr.label}
              className="absolute inset-0 w-full h-full object-cover carousel-slide"
              style={{
                borderRadius: 34,
                '--slide-from': `${dir * 30}px`,
              }}
            />

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/20"
              style={{ width: 80, height: 3 }} />
          </div>
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg
                     bg-white/5 border border-white/10 text-[#888] cursor-pointer
                     transition-all duration-200 flex-shrink-0"
          onMouseEnter={e => { e.currentTarget.style.background = color+'22'; e.currentTarget.style.color = color }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#888' }}
        >›</button>
      </div>

      {/* Screen label */}
      <div className="text-center mb-3.5">
        <span className="font-mono text-[11px] tracking-[0.08em]" style={{ color }}>{scr.label}</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="relative overflow-hidden rounded-[8px] p-0 cursor-pointer flex-shrink-0 transition-all duration-[250ms]"
            style={{
              width: i === active ? 44 : 36,
              height: 64,
              border: `1.5px solid ${i === active ? color+'88' : 'rgba(255,255,255,0.08)'}`,
              background: 'transparent',
            }}
          >
            <img src={s.src} alt={s.label} className="w-full h-full object-cover block" />
            {i === active && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[7px]"
                style={{ border: `2px solid ${color}` }}
              />
            )}
          </button>
        ))}
      </div>

      <p className="font-outfit text-[10px] text-[#333] text-center mt-2.5">
        ← → keyboard navigation · {active + 1} / {screenshots.length}
      </p>
    </div>
  )
}
