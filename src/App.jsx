import { useState, useEffect } from 'react'
import Navbar          from './components/Navbar'
import Hero            from './sections/Hero'
import About           from './sections/About'
import Work            from './sections/Work'
import Skills          from './sections/Skills'
import Contact         from './sections/Contact'
import AppDetailModal  from './components/AppDetailModal'

export default function App() {
  const [selectedApp,   setSelectedApp]   = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePos,      setMousePos]      = useState({ x:50, y:50 })
  const [scrollY,       setScrollY]       = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMouse = (e) =>
      setMousePos({ x:(e.clientX/window.innerWidth)*100, y:(e.clientY/window.innerHeight)*100 })
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  useEffect(() => {
    const ids = ['home','about','work','skills','contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setActiveSection(id)
  }

  return (
    <div className="bg-brand-base min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse 80% 60% at ${mousePos.x}% ${mousePos.y}%, rgba(2,132,199,0.04) 0%, transparent 60%),
                       radial-gradient(ellipse 60% 80% at ${100-mousePos.x}% ${100-mousePos.y}%, rgba(124,58,237,0.04) 0%, transparent 60%)`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid" />

      <Navbar scrollY={scrollY} activeSection={activeSection} onNav={navTo} />

      <main className="relative z-[1]">
        <Hero   scrollY={scrollY} />
        <About  />
        <Work   onSelectApp={setSelectedApp} />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-black/5 px-[8vw] py-6 flex justify-between items-center relative z-[1]">
        <span className="font-mono text-[11px] text-[#64748b]">© 2024 · Built with SwiftUI love &amp; React irony</span>
        <span className="font-mono text-[11px] text-[#64748b]">
          <span className="text-brand-cyan">◆</span> iOS · Flutter · SwiftUI
        </span>
      </footer>

      {selectedApp && (
        <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  )
}
