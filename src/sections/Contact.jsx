export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] pt-20 pb-40 px-[8vw]">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="section-label">04 / Contact</span>
        <h2 className="font-syne font-extrabold leading-[1.0] tracking-[-0.03em] mb-5"
          style={{ fontSize:'clamp(36px,5vw,60px)' }}>
          Let's build<br />
          <span className="text-gradient-cyan">something great.</span>
        </h2>
        <p className="font-outfit text-[15px] text-[#555] leading-[1.7] mb-12">
          Whether it's a new app idea, a consulting project, or just a chat about Swift — my inbox is open.
        </p>

        <div className="flex flex-col gap-3 items-center">
          <a href="mailto:dev@example.com" className="btn-primary">
            ✉ dev@example.com
          </a>

          <div className="flex gap-3 mt-2">
            {[['GitHub','#'],['Twitter / X','#'],['LinkedIn','#'],['App Store','#']].map(([label,href]) => (
              <a key={label} href={href}
                className="font-mono text-[11px] text-[#555] bg-white/[0.04] border border-white/10
                           rounded-[8px] px-4 py-2 no-underline tracking-[0.05em]
                           transition-all duration-200 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 hover:text-brand-cyan">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
