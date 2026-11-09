import { useState, useEffect } from 'react'
import './index.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MethodologySection } from './components/MethodologySection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExpertiseSection } from './components/ExpertiseSection'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

const SECTIONS = ['hero', 'methodology', 'experience', 'projects', 'expertise', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div style={{ background: '#090D16', minHeight: '100vh', position: 'relative' }}>
      {/* Global noise texture overlay for premium feel */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <MethodologySection />
          <ExperienceSection />
          <ProjectsSection />
          <ExpertiseSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}

export default App
