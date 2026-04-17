import { useState } from 'react'

export default function Navbar({ scrollY, activeSection, onNav }) {
  const scrolled = scrollY > 60
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (s) => () => {
    onNav(s)
    setIsOpen(false)
  }
  
  const handleContactNavClick = () => {
    onNav('contact')
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-[5vw]">
      <div className="relative w-full max-w-[980px]">
        {/* Main Bar */}
        <div
          className="w-full h-14 rounded-2xl border px-5 flex items-center justify-between transition-all duration-300"
          style={{
            background:           scrolled || isOpen ? 'rgba(253,250,245,0.95)' : 'rgba(253,250,245,0.82)',
            borderColor:          '#d7ccbe',
            backdropFilter:       'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow:            scrolled ? '0 12px 28px rgba(67,52,38,0.14)' : '0 6px 16px rgba(67,52,38,0.08)',
          }}
        >
          <span className="font-outfit font-extrabold text-[18px] tracking-[0.02em] text-brand-text">
            MS
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:grid grid-cols-4 gap-2 items-center h-8">
            {['home','about','work','contact'].map(s => (
              <button
                key={s}
                type="button"
                className="nav-link inline-flex items-center justify-center h-8 min-w-[86px] leading-[1] rounded-full"
                style={{
                  color: activeSection === s ? '#26231f' : '',
                  background: activeSection === s ? '#efe6da' : 'transparent',
                }}
                onClick={handleNavClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
          
          <button className="hidden md:flex btn-outline px-4 py-2 rounded-xl text-[11px]" onClick={handleContactNavClick}>
            Start a Project
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden flex items-center justify-center w-9 h-9 text-brand-dim rounded-full transition-colors hover:bg-black/5" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div 
            className="absolute top-[calc(100%+8px)] left-0 w-full rounded-2xl border p-2 flex flex-col gap-1 md:hidden animate-fade-in"
            style={{ 
              background: 'rgba(253,250,245,0.95)', 
              borderColor: '#d7ccbe', 
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(67,52,38,0.15)' 
            }}
          >
            {['home','about','work','contact'].map(s => (
              <button
                key={s}
                type="button"
                className="nav-link w-full flex items-center justify-start h-11 px-4 rounded-xl leading-[1]"
                style={{
                  color: activeSection === s ? '#26231f' : '',
                  background: activeSection === s ? '#efe6da' : 'transparent',
                }}
                onClick={handleNavClick(s)}
              >
                {s}
              </button>
            ))}
            <div className="h-px w-full bg-[#d7ccbe] my-1" />
            <button 
              className="w-full flex h-11 text-center items-center justify-center btn-primary rounded-xl text-[13px] tracking-normal shadow-none hover:-translate-y-0" 
              onClick={handleContactNavClick}
            >
              Let's Chat
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
