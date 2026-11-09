import React, { useState, useEffect } from 'react'

interface NavbarProps {
  activeSection: string
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
      setScrolled(scrollTop > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
          boxShadow: '0 0 10px rgba(124,58,237,0.8), 0 0 20px rgba(6,182,212,0.4)',
        }}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(9,13,22,0.95)' : 'rgba(9,13,22,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.08)'}`,
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="relative">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-white"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  boxShadow: '0 0 15px rgba(124,58,237,0.5)',
                }}
              >
                BD
              </div>
              <div
                className="absolute inset-0 rounded-lg animate-pulse-glow"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', opacity: 0.3 }}
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-mono font-semibold text-sm leading-none" style={{ color: '#e2e8f0' }}>
                <span className="gradient-text">BD</span> CS
              </p>
              <p className="font-mono text-[10px] leading-none mt-0.5" style={{ color: 'rgba(148,163,184,0.6)' }}>
                BreakDown-CS
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative"
                style={
                  activeSection === item.id
                    ? { background: 'rgba(124,58,237,0.15)', color: '#A78BFA' }
                    : { color: '#94A3B8' }
                }
                onMouseEnter={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLButtonElement).style.color = '#e2e8f0'
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLButtonElement).style.color = '#94A3B8'
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#7C3AED' }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.35)',
                color: '#A78BFA',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.2)'
                e.currentTarget.style.borderColor = '#A78BFA'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.35)'
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>

            <button
              onClick={() => handleNav('contact')}
              className="btn-violet text-white text-sm hidden md:flex"
            >
              Hire Me
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative w-9 h-9 rounded-lg flex flex-col justify-center items-center gap-[5px] transition-all duration-200"
              style={{
                border: '1px solid rgba(124,58,237,0.35)',
                background: menuOpen ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.06)',
              }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: i === 1 ? (menuOpen ? '20px' : '14px') : '20px',
                    height: '2px',
                    background: '#A78BFA',
                    opacity: i === 1 && menuOpen ? 0 : 1,
                    transform:
                      menuOpen && i === 0
                        ? 'translateY(7px) rotate(45deg)'
                        : menuOpen && i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: menuOpen ? '420px' : '0',
            borderTop: menuOpen ? '1px solid rgba(124,58,237,0.12)' : 'none',
          }}
        >
          <div className="px-5 py-4 flex flex-col gap-1" style={{ background: 'rgba(9,13,22,0.98)' }}>
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200"
                style={{
                  transitionDelay: `${i * 30}ms`,
                  background: activeSection === item.id ? 'rgba(124,58,237,0.12)' : 'transparent',
                  color: activeSection === item.id ? '#A78BFA' : '#94A3B8',
                  borderLeft: activeSection === item.id
                    ? '2px solid #7C3AED'
                    : '2px solid transparent',
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono font-semibold"
                style={{
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  color: '#A78BFA',
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV (PDF)
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="btn-violet text-white text-sm w-full justify-center"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
