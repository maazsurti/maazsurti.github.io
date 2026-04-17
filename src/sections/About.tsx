import { timeline } from '../Utilities/data/timeline'

export default function About() {
  return (
    <section id="about" className="relative z-[1] mb-20">
      <div className="rounded-[28px] border border-[#d8cec1] bg-brand-surface p-8 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
        <div className="pr-0 lg:pr-4">
          <span className="section-label">01 / About</span>
          <h2 className="section-title mb-6" style={{ fontSize:'clamp(30px,3.8vw,48px)' }}>
            Building apps that are <span className="text-[#5f5143]">clear, fast, and reliable.</span>
          </h2>
          <p className="font-outfit text-[15px] text-brand-dim leading-[1.8] mb-5">
            For the last 5 years, I've shipped iOS products from concept to release. I care about
            sharp interfaces, solid architecture, and smooth performance in production.
          </p>
          <p className="font-outfit text-[15px] text-brand-dim leading-[1.8] mb-8">
            I work mainly in SwiftUI and UIKit, and I use Flutter when a team needs one codebase
            across platforms. My priority is simple: build software that works beautifully and ages well.
          </p>
          <div className="flex flex-wrap gap-3">
            {['SwiftUI','UIKit','Flutter','Xcode','Instruments','TestFlight'].map(t => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {timeline.map((item) => (
            <div key={item.year + item.role} className="rounded-2xl border border-[#ddd3c6] bg-[#f8f2e8] p-4">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="font-outfit font-bold text-[15px] text-[#1f1b17]">{item.role}</div>
                <div className="font-mono text-[10px] text-brand-dim tracking-[0.08em]">{item.year}</div>
              </div>
              <div className="font-mono text-[11px] text-[#5f5143] mb-2">{item.company}</div>
              <p className="font-outfit text-[13px] text-brand-dim leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
