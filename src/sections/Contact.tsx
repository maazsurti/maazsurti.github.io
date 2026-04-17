export default function Contact() {
  const handleChatClick = () => {
    // TODO: Implement chat action
  };

  return (
    <section id="contact" className="relative z-[1]">
      <div className="rounded-[28px] border border-[#d8cec1] bg-brand-surface p-8 md:p-10 text-center">
        <span className="section-label">03 / Contact</span>
        <h2 className="font-outfit font-extrabold leading-[1.06] tracking-[-0.01em] mb-5 text-[#1f1b17]"
          style={{ fontSize:'clamp(34px,4.6vw,56px)' }}>
          Have a product to ship
          <br />
          <span className="text-gradient-cyan">Let's talk.</span>
        </h2>
        <p className="font-outfit text-[15px] text-brand-dim leading-[1.7] mb-10 max-w-[620px] mx-auto">
          If you need an iOS app built or improved, send a quick note. I reply fast and get straight to the point.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 items-center max-w-[720px] mx-auto">
          <a href="mailto:hi@maazsurti.com" className="btn-primary justify-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 8l9 6 9-6" />
            </svg>
            <span>hi@maazsurti.com</span>
          </a>
          <button onClick={handleChatClick} className="btn-outline justify-center px-5">Let's Chat</button>
        </div>
          <div className="flex gap-3 mt-5 justify-center flex-wrap">
            {[['GitHub','#'],['Twitter / X','#'],['LinkedIn','#'],['App Store','#']].map(([label,href]) => (
              <a key={label} href={href}
                className="font-mono text-[11px] text-brand-dim bg-brand-surface border border-[#d7ccbe]
                           rounded-[8px] px-4 py-2 no-underline tracking-[0.05em]
                           transition-all duration-200 hover:bg-[#f2ece4] hover:border-[#bfae9b] hover:text-brand-text">
                {label}
              </a>
            ))}
          </div>
      </div>
    </section>
  )
}
