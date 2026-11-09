import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'

const contactLinks = [
  {
    label: 'Email',
    value: 'chanon.sungchoom@gmail.com',
    href: 'mailto:chanon.sungchoom@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#7C3AED',
  },
  {
    label: 'Phone',
    value: '(+66) 62-559-6469',
    href: 'tel:+66625596469',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: '#06B6D4',
  },
  {
    label: 'GitHub',
    value: 'BreakDown-CS',
    href: 'https://github.com/BreakDown-CS',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#7C3AED',
  },
]

export const Footer: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('chanon.sungchoom@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top divider */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.4), transparent)' }}
      />

      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Contact Section */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7C3AED' }}>
            — Get in Touch —
          </span>
          <h2 className="section-heading mb-4">Let's Build Something</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#94A3B8' }}>
            Available for backend engineering roles, system architecture consulting, and AI-driven development projects.
          </p>
        </div>

        {/* Contact cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 ${inView ? 'animate-in delay-200' : 'opacity-0'}`}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-card rounded-2xl p-6 flex items-center gap-4 group transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}35`,
                  color: link.color,
                  boxShadow: `0 0 15px ${link.color}20`,
                }}
              >
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono mb-0.5" style={{ color: '#94A3B8' }}>{link.label}</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-violet-200 transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Copy email button */}
        <div className={`flex justify-center mb-14 ${inView ? 'animate-in delay-400' : 'opacity-0'}`}>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-lg transition-all duration-300"
            style={{
              border: '1px solid rgba(124,58,237,0.3)',
              color: '#A78BFA',
              background: 'rgba(124,58,237,0.06)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'rgba(124,58,237,0.15)'
              el.style.borderColor = 'rgba(124,58,237,0.6)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = 'rgba(124,58,237,0.06)'
              el.style.borderColor = 'rgba(124,58,237,0.3)'
            }}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                chanon.sungchoom@gmail.com
              </>
            )}
          </button>
        </div>

        {/* Bottom bar */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-6 ${inView ? 'animate-in delay-500' : 'opacity-0'}`}
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                boxShadow: '0 0 10px rgba(124,58,237,0.4)',
              }}
            >
              BD
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Chanon Sungchoom</p>
              <p className="font-mono text-xs" style={{ color: '#94A3B8' }}>BreakDown-CS · Backend Developer & AI Architect</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-center" style={{ color: 'rgba(148,163,184,0.4)' }}>
            © {new Date().getFullYear()} Chanon Sungchoom · Built with AI-Driven Engineering
          </p>

          {/* Nav links */}
          <div className="flex items-center gap-4">
            {['hero', 'methodology', 'projects', 'expertise'].map((id) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs capitalize transition-colors"
                style={{ color: 'rgba(148,163,184,0.5)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#A78BFA' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(148,163,184,0.5)' }}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

