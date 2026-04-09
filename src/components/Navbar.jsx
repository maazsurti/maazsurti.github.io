export default function Navbar({ scrollY, activeSection, onNav }) {
  const scrolled = scrollY > 60

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[8vw] h-16 transition-all duration-300"
      style={{
        background:    scrolled ? 'rgba(7,7,15,0.9)'           : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)'                 : 'none',
        borderBottom:  scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
      }}
    >
      {/* Logo */}
      <span
        className="font-syne font-extrabold text-[18px] tracking-[-0.02em]"
        style={{
          background: 'linear-gradient(90deg,#00d4ff,#a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        &lt;/dev&gt;
      </span>

      {/* Links */}
      <div className="flex gap-8">
        {['home','about','work','skills','contact'].map(s => (
          <span
            key={s}
            className="nav-link"
            style={{ color: activeSection === s ? '#00d4ff' : '' }}
            onClick={() => onNav(s)}
          >
            {s}
          </span>
        ))}
      </div>
    </nav>
  )
}
