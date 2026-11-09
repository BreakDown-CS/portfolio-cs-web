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
    value: '(+66) 95-497-7428',
    href: 'tel:+66954977428',
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Backend API Design',
    message: '',
  })
  const [sentSuccess, setSentSuccess] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('chanon.sungchoom@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.email || !formState.message) return

    // Compose mailto link
    const subject = encodeURIComponent(`[Inquiry] ${formState.service} from ${formState.name || 'Client'}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nService Interested: ${formState.service}\n\nMessage:\n${formState.message}`
    )
    window.open(`mailto:chanon.sungchoom@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSentSuccess(true)
    setTimeout(() => setSentSuccess(false), 4000)
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
        {/* Contact Section Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7C3AED' }}>
            — Get in Touch —
          </span>
          <h2 className="section-heading mb-4">Let's Build Something High-Performance</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#94A3B8' }}>
            Available for backend engineering roles, system architecture consulting, and AI-driven development projects.
          </p>
        </div>

        {/* Contact Form & Cards Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 ${inView ? 'animate-in delay-200' : 'opacity-0'}`}>
          {/* Quick Inquiry Form (7 cols) */}
          <div
            className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8"
            style={{
              border: '1px solid rgba(124,58,237,0.25)',
              background: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full animate-pulse-glow" style={{ background: '#7C3AED' }} />
              <h3 className="font-bold text-white text-base">Direct Architecture Inquiry</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Satoshi Nakamoto"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 transition-all duration-200 focus:outline-none"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 transition-all duration-200 focus:outline-none"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Scope / Service</label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-white transition-all duration-200 focus:outline-none"
                  style={{
                    background: '#090D16',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)')}
                >
                  <option value="Backend API Design (Go / Fiber)">Backend API Design (Go / Fiber)</option>
                  <option value="Clean Architecture & Multi-DB">Clean Architecture & Multi-DB (Oracle/Postgres/MySQL)</option>
                  <option value="AI-Assisted Engineering Workflow">AI-Assisted Engineering Workflow Consultation</option>
                  <option value="Full-Time Engineering Role">Full-Time Engineering Role Offer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Details / Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the system requirements, scale, or business objectives..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)')}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-slate-500">
                  ⚡ Dispatches directly via Mail client
                </span>
                <button
                  type="submit"
                  className="btn-violet text-white text-xs px-6 py-2.5"
                >
                  {sentSuccess ? '✓ Dispatched Mail Client!' : 'Send Inquiry →'}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:scale-[1.02]"
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

            {/* Quick copy email card */}
            <div
              className="p-5 rounded-2xl flex flex-col items-center justify-center text-center"
              style={{
                background: 'rgba(124, 58, 237, 0.05)',
                border: '1px dashed rgba(124, 58, 237, 0.3)',
              }}
            >
              <p className="text-xs text-slate-400 mb-2 font-mono">One-click clipboard copy:</p>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  border: '1px solid rgba(124,58,237,0.4)',
                  color: '#A78BFA',
                  background: 'rgba(124,58,237,0.1)',
                }}
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    chanon.sungchoom@gmail.com
                  </>
                )}
              </button>
            </div>
          </div>
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
              <p className="font-semibold text-sm text-white">Chanon (Arm) Sungchoom</p>
              <p className="font-mono text-xs" style={{ color: '#94A3B8' }}>BreakDown-CS · Junior Programmer & AI Architect</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-center" style={{ color: 'rgba(148,163,184,0.4)' }}>
            © {new Date().getFullYear()} Chanon Sungchoom · Built with AI-Driven Engineering
          </p>

          {/* Nav links */}
          <div className="flex items-center gap-4">
            {['hero', 'methodology', 'experience', 'projects', 'expertise'].map((id) => (
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
