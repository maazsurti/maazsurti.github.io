import { apps } from '../Utilities/data/apps'

export default function Hero({ scrollY }) {
  const handleViewWorkClick = () => document.getElementById('work')?.scrollIntoView({ behavior:'smooth' })
  const handleContactClick = () => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })

  return (
    <section id="home" className="relative overflow-hidden mb-20">
      <div className="rounded-[30px] border border-[#d8cec1] bg-brand-surface px-8 md:px-12 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#f2ece4] border border-[#d7ccbe] rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-brand-text rounded-full animate-pulse-fast" />
            <span className="font-mono text-[11px] text-brand-dim tracking-[0.1em]">OPEN FOR SELECT PROJECTS</span>
          </div>

          <p className="font-mono text-[11px] tracking-[0.12em] text-brand-dim uppercase mb-4">
            Product engineer for iOS teams
          </p>
          <h1 className="font-outfit font-extrabold leading-[1.03] tracking-[-0.015em] mb-6 text-[#1f1b17]"
            style={{ fontSize: 'clamp(42px,6vw,76px)' }}>
            Crafting premium
            <br />
            native apps.
          </h1>

          <p className="font-outfit text-[17px] text-brand-dim leading-[1.7] max-w-[560px] mb-10">
            I'm Maaz Surti, an iOS developer focused on{' '}
            <span className="text-brand-text font-medium">SwiftUI</span> &amp;{' '}
            <span className="text-brand-text font-medium">UIKit</span>. I ship fast, stable native apps with clean UX,
            and I use <span className="text-brand-text font-medium">Flutter</span> when cross-platform delivery makes sense.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <button className="btn-primary justify-center text-center" onClick={handleViewWorkClick}>
              See My Work →
            </button>
            <button className="btn-outline justify-center text-center" onClick={handleContactClick}>
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-8 sm:mt-12 max-w-[620px]">
            {[['6+','Apps on Store'],['500K+','Total Downloads'],['4.8★','Avg Rating']].map(([n,l]) => (
              <div key={l} className="rounded-xl sm:rounded-2xl border border-[#ded3c6] bg-[#faf5ed] px-2 py-3 sm:px-4 sm:py-4 text-center sm:text-left">
                <div className="font-outfit font-extrabold text-[18px] sm:text-[24px] text-brand-text">{n}</div>
                <div className="font-outfit text-[10px] sm:text-[12px] text-brand-dim mt-0.5 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#dacfc2] bg-[#f8f1e8] p-6">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-dim mb-4">Current Snapshot</p>
          <div className="relative overflow-hidden mx-auto"
            style={{
              width:200, height:390,
              background:'linear-gradient(160deg,#e8ded0,#d7c9b8)',
              borderRadius:40,
              border:'1px solid #cbbdaa',
              boxShadow:'0 30px 80px rgba(45,35,25,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-[20px] z-[3]"
              style={{ width:64, height:20 }} />

            <div className="absolute inset-0 rounded-[40px]"
              style={{ background:'linear-gradient(180deg,#fcf8f1,#efe6d9)' }}>
              <div className="absolute top-[60px] left-0 right-0 bottom-0 p-4 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-shrink-0 flex items-center justify-center text-[13px] overflow-hidden"
                    style={{
                      width:28, height:28,
                      borderRadius:Math.round(28*0.2237),
                      background:'#f1e7da',
                      border:'1px solid #cfbda8',
                    }}>
                    {apps[0].iconImage
                      ? <img src={apps[0].iconImage} className="w-full h-full object-cover" alt="" />
                      : apps[0].icon}
                  </div>
                  <div>
                    <div className="h-[5px] w-[60px] rounded mb-1" style={{ background:'rgba(38,35,31,0.2)' }} />
                    <div className="h-[4px] w-10 rounded" style={{ background:'rgba(38,35,31,0.1)' }} />
                  </div>
                </div>
                <div className="h-[90px] rounded-[14px] p-3"
                  style={{ background:'#f3ece2', border:'1px solid #d4c4b2' }}>
                  <div className="h-[5px] w-4/5 rounded mb-2" style={{ background:'rgba(38,35,31,0.35)' }} />
                  <div className="h-[4px] w-3/5 rounded mb-1.5" style={{ background:'rgba(38,35,31,0.12)' }} />
                  <div className="h-6 rounded-[8px] mt-2" style={{ background:'rgba(38,35,31,0.12)' }} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {apps.slice(1,3).map(a => (
                    <div key={a.id} className="h-[60px] rounded-xl flex items-center justify-center"
                      style={{ background:'#f8f2e8', border:'1px solid #dfd0bf' }}>
                      <div className="flex items-center justify-center text-[10px] overflow-hidden"
                        style={{ width:22, height:22, borderRadius:Math.round(22*0.2237), background:'#eadfce' }}>
                        {a.iconImage ? <img src={a.iconImage} className="w-full h-full object-cover" alt="" /> : a.icon}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[50px] rounded-xl" style={{ background:'#f4ebe0', border:'1px solid #d7c8b5' }} />
              </div>
            </div>
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width:100, height:4, background:'rgba(0,0,0,0.25)' }} />
          </div>
          <div className="mt-5 space-y-2">
            {['Product strategy to shipping', 'Native-first engineering quality', 'Fast iteration with clean UX'].map(item => (
              <div key={item} className="text-[13px] text-brand-dim font-outfit border border-[#ddd3c8] rounded-xl px-3 py-2 bg-brand-surface">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: scrollY > 50 ? 0 : 1 }}>
        <span className="font-mono text-[10px] text-brand-dim tracking-[0.1em]">SCROLL</span>
        <div className="w-px h-10 animate-pulse-glow" style={{ background:'linear-gradient(#5f5143,transparent)' }} />
      </div>
    </section>
  )
}
