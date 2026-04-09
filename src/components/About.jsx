import { timeline } from '../data/skills'

const TAGS = ['SwiftUI', 'UIKit', 'Flutter', 'Xcode', 'Instruments', 'TestFlight']

export default function About() {
  return (
    <section id="about" className="py-32 px-[8vw] relative z-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 items-center">

        {/* ── Left: copy ──────────────────────────────────────────────────── */}
        <div>
          <span className="section-label">01 / About</span>

          <h2
            className="font-syne font-extrabold leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(32px,4vw,52px)' }}
          >
            Building apps{' '}
            <span className="text-neon">that feel</span>{' '}
            as good as they look.
          </h2>

          <p className="text-neutral-500 text-[15px] leading-[1.8] mb-5">
            I've spent the last 5 years obsessing over the craft of iOS development — from the
            pixels on screen to the architecture underneath. I believe great apps aren't just
            functional; they're <span className="text-neutral-300">delightful</span>.
          </p>

          <p className="text-neutral-500 text-[15px] leading-[1.8] mb-8">
            My roots are in SwiftUI and UIKit, but I've branched into Flutter for cross-platform
            projects. I care deeply about{' '}
            <span className="text-neutral-300">
              performance, accessibility, and fluid animations
            </span>{' '}
            that make users smile.
          </p>

          <div className="flex gap-3 flex-wrap">
            {TAGS.map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right: timeline ──────────────────────────────────────────────── */}
        <div>
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-5 mb-8 animate-fade-in">
              {/* Connector column */}
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 font-code text-[10px] text-neon"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  {item.year.slice(2)}
                </div>
                {i < timeline.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2 min-h-[30px]"
                    style={{ background: 'rgba(0,212,255,0.1)' }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="font-syne font-bold text-[15px] text-white mb-0.5">
                  {item.role}
                </div>
                <div className="font-code text-[11px] text-neon mb-2">{item.company}</div>
                <p className="font-outfit text-[13px] text-neutral-600 leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
