const SOCIAL_LINKS = [
  { label: 'GitHub',     href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn',   href: '#' },
  { label: 'App Store',  href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-[8vw] pb-40 relative z-10">
      <div className="max-w-[700px] mx-auto text-center">

        <span className="section-label">04 / Contact</span>

        <h2
          className="font-syne font-extrabold leading-[1.0] tracking-[-0.03em] mb-5"
          style={{ fontSize: 'clamp(36px,5vw,60px)' }}
        >
          Let's build
          <br />
          <span className="gradient-text-cyan-violet">something great.</span>
        </h2>

        <p className="text-neutral-600 text-[15px] leading-[1.7] mb-12">
          Whether it's a new app idea, a consulting project, or just a chat about Swift —
          my inbox is open.
        </p>

        <div className="flex flex-col gap-3 items-center">
          {/* Primary email CTA */}
          <a
            href="mailto:hi@maazsurti.com"
            className="inline-flex items-center gap-2.5 btn-primary no-underline"
          >
            ✉ hi@maazsurti.com
          </a>

          {/* Social links */}
          <div className="flex gap-3 mt-2">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-code text-[11px] text-neutral-600 bg-white/[0.04] border border-white/10
                           rounded-lg px-4 py-2 no-underline tracking-[0.05em]
                           transition-all duration-200 hover:text-neutral-300 hover:border-white/20"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
