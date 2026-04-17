import { apps } from '../Utilities/data/apps'

export default function Hero({ scrollY }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-[8vw] overflow-hidden">

      {/* Glow orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full top-[10%] right-[-10%] pointer-events-none animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.07) 0%, transparent 70%)' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-0 left-[-5%] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', animation:'pulseGlow 5s ease-in-out infinite 1s' }} />

      <div className="flex items-center w-full gap-20 z-[1] flex-wrap py-24">

        {/* ── Left: Copy ─────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-[300px]">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-brand-cyan/[0.07] border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse-fast" />
            <span className="font-mono text-[11px] text-brand-cyan tracking-[0.1em]">OPEN FOR SELECT PROJECTS</span>
          </div>

          {/* Headline */}
          <h1 className="font-syne font-extrabold leading-[1.0] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(48px,7vw,86px)' }}>
            <span className="block text-[#1a1d20]">I build</span>
            <span className="block text-gradient-hero">iOS products</span>
            <span className="block text-[#1a1d20]">people keep using.</span>
          </h1>

          <p className="font-outfit text-[17px] text-[#475569] leading-[1.7] max-w-[480px] mb-10">
            I'm Maaz Surti, an iOS developer focused on{' '}
            <span className="text-[#0f172a] font-medium">SwiftUI</span> &amp;{' '}
            <span className="text-[#0f172a] font-medium">UIKit</span>. I ship fast, stable native apps with clean UX,
            and I use <span className="text-[#0f172a] font-medium">Flutter</span> when cross-platform delivery makes sense.
          </p>

          <div className="flex gap-4 items-center">
            <button className="btn-primary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior:'smooth' })}>
              See My Work →
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}>
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[['6+','Apps on Store'],['500K+','Total Downloads'],['4.8★','Avg Rating']].map(([n,l]) => (
              <div key={l}>
                <div className="font-syne font-extrabold text-[26px] text-brand-cyan">{n}</div>
                <div className="font-outfit text-[12px] text-[#64748b] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Phone mockup ─────────────────────────────────────────── */}
        <div className="flex-shrink-0 relative flex items-center justify-center">
          {/* Orbital rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-cyan/10 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-brand-violet/10 animate-spin-reverse pointer-events-none" />

          {/* Phone shell */}
          <div className="relative overflow-hidden animate-float"
            style={{
              width:200, height:400,
              background:'linear-gradient(160deg,#e2e8f0,#cbd5e1)',
              borderRadius:40,
              border:'1.5px solid rgba(255,255,255,0.8)',
              boxShadow:'0 40px 100px rgba(0,0,0,0.15),0 0 0 1px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            {/* Dynamic island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-[20px] z-[3]"
              style={{ width:64, height:20 }} />

            {/* Screen content */}
            <div className="absolute inset-0 rounded-[40px]"
              style={{ background:'linear-gradient(180deg,#ffffff,#f1f5f9)' }}>
              <div className="absolute top-[60px] left-0 right-0 bottom-0 p-4 flex flex-col gap-2.5">
                {/* App row */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-shrink-0 flex items-center justify-center text-[13px] overflow-hidden"
                    style={{
                      width:28, height:28,
                      borderRadius:Math.round(28*0.2237),
                      background:`linear-gradient(135deg,${apps[0].color}33,${apps[0].accent}44)`,
                      border:`1px solid ${apps[0].color}44`,
                    }}>
                    {apps[0].iconImage
                      ? <img src={apps[0].iconImage} className="w-full h-full object-cover" alt="" />
                      : apps[0].icon}
                  </div>
                  <div>
                    <div className="h-[5px] w-[60px] rounded mb-1" style={{ background:'rgba(0,0,0,0.15)' }} />
                    <div className="h-[4px] w-10 rounded"           style={{ background:'rgba(0,0,0,0.08)' }} />
                  </div>
                </div>
                {/* Chart card */}
                <div className="h-[90px] rounded-[14px] p-3"
                  style={{ background:'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(167,139,250,0.08))', border:'1px solid rgba(0,212,255,0.15)' }}>
                  <div className="h-[5px] w-4/5 rounded mb-2" style={{ background:'rgba(2,132,199,0.4)' }} />
                  <div className="h-[4px] w-3/5 rounded mb-1.5" style={{ background:'rgba(0,0,0,0.08)' }} />
                  <div className="h-6 rounded-[8px] mt-2"       style={{ background:'rgba(2,132,199,0.15)' }} />
                </div>
                {/* Mini icon grid */}
                <div className="grid grid-cols-2 gap-2">
                  {apps.slice(1,3).map(a => (
                    <div key={a.id} className="h-[60px] rounded-xl flex items-center justify-center"
                      style={{ background:`${a.color}18`, border:`1px solid ${a.color}30` }}>
                      <div className="flex items-center justify-center text-[10px] overflow-hidden"
                        style={{ width:22, height:22, borderRadius:Math.round(22*0.2237), background:`linear-gradient(135deg,${a.color}44,${a.accent}55)` }}>
                        {a.iconImage ? <img src={a.iconImage} className="w-full h-full object-cover" alt="" /> : a.icon}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[50px] rounded-xl" style={{ background:'rgba(244,114,182,0.1)', border:'1px solid rgba(244,114,182,0.2)' }} />
              </div>
            </div>
            {/* Home indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width:100, height:4, background:'rgba(0,0,0,0.25)' }} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: scrollY > 50 ? 0 : 1 }}>
        <span className="font-mono text-[10px] text-[#64748b] tracking-[0.1em]">SCROLL</span>
        <div className="w-px h-10 animate-pulse-glow" style={{ background:'linear-gradient(#0284c7,transparent)' }} />
      </div>
    </section>
  )
}
