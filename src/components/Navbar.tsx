export default function Navbar({ scrollY, activeSection, onNav }) {
  const scrolled = scrollY > 60

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[8vw] h-16 transition-all duration-300"
      style={{
        background:           scrolled ? 'rgba(250,250,252,0.9)'          : 'rgba(250,250,252,0)',
        backdropFilter:       scrolled ? 'blur(20px)'                     : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)'                     : 'blur(0px)',
        borderBottom:         scrolled ? '1px solid rgba(2,132,199,0.08)' : '1px solid rgba(2,132,199,0)',
      }}
    >
      {/* Logo */}
      <span
        className="font-syne font-extrabold text-[18px] tracking-[-0.02em]"
        style={{
          background: 'linear-gradient(90deg,#0284c7,#7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Maaz Surti
      </span>

      {/* Links */}
      <div className="flex gap-8">
        {['home','about','work','contact'].map(s => (
          <span
            key={s}
            className="nav-link"
            style={{ color: activeSection === s ? '#0284c7' : '' }}
            onClick={() => onNav(s)}
          >
            {s}
          </span>
        ))}
      </div>
    </nav>
  )
}
