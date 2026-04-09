import { timeline } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-28 px-[8vw]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Left: Bio ───────────────────────────────────────────────────── */}
        <div>
          <span className="section-label">01 / About</span>
          <h2 className="section-title mb-6" style={{ fontSize:'clamp(32px,4vw,52px)' }}>
            Building apps <span className="text-brand-cyan">that feel</span> as good as they look.
          </h2>
          <p className="font-outfit text-[15px] text-[#666] leading-[1.8] mb-5">
            I've spent the last 5 years obsessing over the craft of iOS development — from the pixels
            on screen to the architecture underneath. I believe great apps aren't just functional;
            they're <span className="text-[#aaa]">delightful</span>.
          </p>
          <p className="font-outfit text-[15px] text-[#666] leading-[1.8] mb-8">
            My roots are in SwiftUI and UIKit, but I've branched into Flutter for cross-platform
            projects. I care deeply about{' '}
            <span className="text-[#aaa]">performance, accessibility, and fluid animations</span>{' '}
            that make users smile.
          </p>
          <div className="flex flex-wrap gap-3">
            {['SwiftUI','UIKit','Flutter','Xcode','Instruments','TestFlight'].map(t => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right: Timeline ─────────────────────────────────────────────── */}
        <div>
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-5 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0
                                font-mono text-[10px] text-brand-cyan"
                  style={{ background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.2)' }}>
                  {item.year.slice(2)}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 mt-2 min-h-[30px]"
                    style={{ background:'rgba(0,212,255,0.1)' }} />
                )}
              </div>
              <div className="pb-2">
                <div className="font-syne font-bold text-[15px] text-white mb-0.5">{item.role}</div>
                <div className="font-mono text-[11px] text-brand-cyan mb-2">{item.company}</div>
                <p className="font-outfit text-[13px] text-[#555] leading-[1.6]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
