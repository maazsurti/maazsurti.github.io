import { useState, useEffect } from 'react'

export default function ScreenshotCarousel({ screenshots, color }) {
  const [active, setActive] = useState(0)
  const [prevActive, setPrevActive] = useState(0)
  const [dir, setDir]       = useState(1)
  const [key, setKey]       = useState(0)

  const go = (nextIndex, explicitDir) => {
    let d = explicitDir;
    if (d === undefined) {
      d = nextIndex > active ? 1 : -1;
    }
    setDir(d)
    setPrevActive(active)
    setActive(nextIndex)
    setKey(k => k + 1)
  }
  const prev = () => go((active - 1 + screenshots.length) % screenshots.length, -1)
  const next = () => go((active + 1) % screenshots.length, 1)
  const handleDotClick = (index) => () => go(index)

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
      {/* Phone + arrows — arrows sit inside the relative wrapper so they never overflow */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          {/* Glow */}
          <div
            className="absolute inset-[-20px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(95,81,67,0.14) 0%, transparent 70%)' }}
          />

          {/* Phone frame */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 180, height: 360,
              background: '#f8f2e8',
              borderRadius: 36,
              border: '2px solid #ccbca8',
              boxShadow: '0 20px 60px rgba(50,42,33,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-black rounded-[14px]"
              style={{ width: 56, height: 16 }} />

            {active !== prevActive && (
              <img
                src={screenshots[prevActive]?.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: 34 }}
              />
            )}

            <img
              key={key}
              src={scr.src}
              alt={scr.label}
              className="absolute inset-0 w-full h-full object-cover carousel-slide"
              style={{
                borderRadius: 34,
                '--slide-from': `${dir * 30}px`,
                zIndex: 2,
              }}
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black/20"
              style={{ width: 80, height: 3 }} />
          </div>

          {/* Arrows — absolutely positioned on the sides of the phone, never overflow */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-11 w-8 h-8 rounded-full
                       flex items-center justify-center text-lg
                       bg-[#f2ece4] border border-[#d1c5b7] text-brand-dim cursor-pointer
                       transition-all duration-200"
            onMouseEnter={e => { e.currentTarget.style.background = color+'22'; e.currentTarget.style.color = color }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f2ece4'; e.currentTarget.style.color = '#6c6256' }}
          >‹</button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-11 w-8 h-8 rounded-full
                       flex items-center justify-center text-lg
                       bg-[#f2ece4] border border-[#d1c5b7] text-brand-dim cursor-pointer
                       transition-all duration-200"
            onMouseEnter={e => { e.currentTarget.style.background = color+'22'; e.currentTarget.style.color = color }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f2ece4'; e.currentTarget.style.color = '#6c6256' }}
          >›</button>
        </div>
      </div>

      <div className="text-center mb-3.5">
        <span className="font-mono text-[11px] tracking-[0.08em] text-brand-dim">{scr.label}</span>
      </div>

      <div className="flex gap-2 justify-center">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={handleDotClick(i)}
            className="relative overflow-hidden rounded-[8px] p-0 cursor-pointer flex-shrink-0 transition-all duration-[250ms]"
            style={{
              width: i === active ? 44 : 36,
              height: 64,
              border: `1.5px solid ${i === active ? '#9f8e7a' : '#d4c8ba'}`,
              background: 'transparent',
            }}
          >
            <img src={s.src} alt={s.label} className="w-full h-full object-cover block" />
            {i === active && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[7px]"
                style={{ border: '2px solid #8e7b66' }}
              />
            )}
          </button>
        ))}
      </div>

      <p className="hidden sm:block font-outfit text-[10px] text-brand-dim text-center mt-2.5">
        ← → keyboard navigation · {active + 1} / {screenshots.length}
      </p>
    </div>
  )
}
