export default function Navbar({ scrollY, activeSection, onNav }) {
  const scrolled = scrollY > 60

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-[5vw]">
      <div
        className="w-full max-w-[980px] h-14 rounded-2xl border px-5 flex items-center justify-between transition-all duration-300"
        style={{
          background:           scrolled ? 'rgba(253,250,245,0.95)' : 'rgba(253,250,245,0.82)',
          borderColor:          '#d7ccbe',
          backdropFilter:       'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow:            scrolled ? '0 12px 28px rgba(67,52,38,0.14)' : '0 6px 16px rgba(67,52,38,0.08)',
        }}
      >
      <span className="font-outfit font-extrabold text-[18px] tracking-[0.02em] text-brand-text">
        MS
      </span>

      <div className="grid grid-cols-4 gap-2 items-center h-8">
        {['home','about','work','contact'].map(s => (
          <button
            key={s}
            type="button"
            className="nav-link inline-flex items-center justify-center h-8 min-w-[86px] leading-[1] rounded-full"
            style={{
              color: activeSection === s ? '#26231f' : '',
              background: activeSection === s ? '#efe6da' : 'transparent',
            }}
            onClick={() => onNav(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <button className="btn-outline px-4 py-2 rounded-xl text-[11px]" onClick={() => onNav('contact')}>
        Start a Project
      </button>
      </div>
    </nav>
  )
}
