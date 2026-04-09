import { apps } from '../data/apps'
import AppIcon from './AppIcon'

export default function Hero({ scrollTo, scrollY }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[8vw] overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-[10%] -right-[10%] animate-pulse-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bottom-0 -left-[5%] pointer-events-none"
        style={{
          background:      'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
          animation:       'pulseGlow 5s ease-in-out infinite 1s',
        }}
      />

      <div className="flex items-center w-full gap-20 relative z-10">

        {/* ── Left: copy ──────────────────────────────────────────────────── */}
        <div className="flex-1">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-neon/[0.07] border border-neon/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-glow-xs" />
            <span className="font-code text-[11px] text-neon tracking-[0.1em]">
              AVAILABLE FOR FREELANCE
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-syne font-extrabold leading-[1.0] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 86px)' }}
          >
            <span className="block text-white">Crafting</span>
            <span className="block gradient-text-hero">iOS Apps</span>
            <span className="block text-white">Worth Using.</span>
          </h1>

          {/* Sub-copy */}
          <p className="font-outfit text-[17px] text-neutral-500 leading-[1.7] max-w-[480px] mb-10">
            Senior iOS developer specializing in{' '}
            <span className="text-neutral-200">SwiftUI</span> &{' '}
            <span className="text-neutral-200">UIKit</span> — building performant, beautifully
            crafted native apps. Also shipping cross-platform with{' '}
            <span className="text-neutral-200">Flutter</span>.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 items-center">
            <button className="btn-primary" onClick={() => scrollTo('work')}>
              View My Apps →
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              ['6+',    'Apps on Store'],
              ['500K+', 'Total Downloads'],
              ['4.8★',  'Avg Rating'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-syne text-[26px] font-extrabold text-neon">{n}</div>
                <div className="font-outfit text-xs text-neutral-600 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: floating phone ────────────────────────────────────────── */}
        <div className="shrink-0 relative flex items-center justify-center">
          {/* Rotating rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-neon/10 animate-spin-slow" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-neon-violet/10 animate-spin-reverse" />

          {/* Phone shell */}
          <div
            className="animate-float relative overflow-hidden"
            style={{
              width:        200,
              height:       400,
              borderRadius: 40,
              background:   'linear-gradient(160deg,#1c1c2e,#0f0f1e)',
              border:       '1.5px solid rgba(255,255,255,0.12)',
              boxShadow:    '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Dynamic Island */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-[20px] z-10"
              style={{ width: 64, height: 20 }}
            />

            {/* Screen */}
            <div
              className="absolute inset-0"
              style={{
                background:   'linear-gradient(180deg,#0f0f2e 0%,#07070f 100%)',
                borderRadius: 40,
              }}
            >
              <div className="absolute top-[60px] inset-x-0 bottom-0 p-4 flex flex-col gap-2.5">

                {/* App row 1 */}
                <div className="flex items-center gap-2 mb-1">
                  <AppIcon app={apps[0]} size={28} shadow={false} />
                  <div>
                    <div className="h-1 rounded-full mb-1" style={{ width: 60, background: 'rgba(255,255,255,0.3)' }} />
                    <div className="h-1 rounded-full" style={{ width: 40, background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-3"
                  style={{
                    height:     90,
                    background: 'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(167,139,250,0.08))',
                    border:     '1px solid rgba(0,212,255,0.15)',
                  }}
                >
                  <div className="h-1 rounded-full mb-2" style={{ width: '80%', background: 'rgba(0,212,255,0.3)' }} />
                  <div className="h-1 rounded-full mb-1.5" style={{ width: '60%', background: 'rgba(255,255,255,0.1)' }} />
                  <div className="h-5 rounded-lg mt-2" style={{ background: 'rgba(0,212,255,0.15)' }} />
                </div>

                {/* App icon grid */}
                <div className="grid grid-cols-2 gap-2">
                  {apps.slice(1, 3).map((a) => (
                    <div
                      key={a.id}
                      className="rounded-xl flex items-center justify-center"
                      style={{
                        height:     60,
                        background: `${a.color}18`,
                        border:     `1px solid ${a.color}30`,
                      }}
                    >
                      <AppIcon app={a} size={22} shadow={false} />
                    </div>
                  ))}
                </div>

                {/* Bar */}
                <div
                  className="rounded-xl"
                  style={{ height: 50, background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.2)' }}
                />
              </div>
            </div>

            {/* Home indicator */}
            <div
              className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: 100, height: 4, background: 'rgba(255,255,255,0.25)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
        style={{ opacity: scrollY > 50 ? 0 : 1 }}
      >
        <span className="font-code text-[10px] text-neutral-700 tracking-[0.1em]">SCROLL</span>
        <div
          className="w-px h-10 animate-pulse-glow"
          style={{ background: 'linear-gradient(#00d4ff,transparent)' }}
        />
      </div>
    </section>
  )
}
