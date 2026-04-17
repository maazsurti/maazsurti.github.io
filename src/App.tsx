import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import AppDetailModal from './components/AppDetailModal'

export default function App() {
  const [selectedApp, setSelectedApp] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'work', 'contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  return (
    <div className="bg-brand-base min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-50" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,rgba(95,81,67,0.08),transparent_50%)]" />

      <Navbar scrollY={scrollY} activeSection={activeSection} onNav={navTo} />

      <main className="relative z-[1] max-w-[1280px] mx-auto px-[5vw] pt-28 pb-16">
        <Hero scrollY={scrollY} />
        <About />
        <Work onSelectApp={setSelectedApp} />
        <Contact />
      </main>

      <footer className="border-t border-[#d7ccbe] px-[5vw] py-6 flex justify-between items-center relative z-[1] max-w-[1280px] mx-auto w-full">
        <span className="font-mono text-[11px] text-brand-dim">© 2026 · Built with SwiftUI love &amp; React irony</span>
        <span className="font-mono text-[11px] text-brand-dim">
          <span className="text-brand-text">◆</span> iOS · Flutter · SwiftUI
        </span>
      </footer>

      {selectedApp && (
        <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  )
}
