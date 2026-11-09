import React, { useEffect, useRef } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 4,
  color: Math.random() > 0.5 ? '#7C3AED' : '#06B6D4',
}))

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { displayed: headline } = useTypewriter(
    'Architecting Enterprise Backend Systems with AI-Driven Precision',
    30,
    400
  )

  // Animated grid + floating orb canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      // floating orbs
      const orbs = [
        { x: 0.75, y: 0.3, r: 180, color: 'rgba(124,58,237,0.12)' },
        { x: 0.2, y: 0.7, r: 140, color: 'rgba(6,182,212,0.08)' },
        { x: 0.5, y: 0.5, r: 220, color: 'rgba(124,58,237,0.05)' },
      ]
      orbs.forEach((o, i) => {
        const x = (o.x + Math.sin(t + i) * 0.03) * canvas.width
        const y = (o.y + Math.cos(t * 0.7 + i) * 0.04) * canvas.height
        const grad = ctx.createRadialGradient(x, y, 0, x, y, o.r)
        grad.addColorStop(0, o.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x, y, o.r, 0, Math.PI * 2)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#090D16' }}
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Logo Badge */}
        <div className="flex justify-center mb-8 animate-in">
          <div className="relative inline-flex items-center justify-center">
            {/* Pulsing aura rings */}
            <div
              className="absolute inset-0 rounded-2xl animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
                transform: 'scale(1.3)',
                filter: 'blur(16px)',
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))',
                transform: 'scale(1.6)',
                filter: 'blur(28px)',
                animation: 'pulseGlow 3.5s ease-in-out infinite',
              }}
            />
            {/* Badge */}
            <div
              className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1a0a3e, #0a1a2e)',
                border: '1px solid rgba(124,58,237,0.5)',
                boxShadow: '0 0 30px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="font-mono font-bold text-2xl leading-none"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA, #22D3EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                BD
              </span>
              <span
                className="font-mono font-bold text-lg leading-none"
                style={{
                  background: 'linear-gradient(135deg, #22D3EE, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CS
              </span>
            </div>
          </div>
        </div>

        {/* Available for Hire Status */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-in">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono"
            style={{
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              color: '#4ADE80',
              boxShadow: '0 0 16px rgba(34, 197, 94, 0.12)',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#22C55E' }} />
            <span>OPEN TO WORK · JUNIOR PROGRAMMER / BACKEND ARCHITECT</span>
          </div>
        </div>

        {/* Identity label */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-in delay-100">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-DEFAULT opacity-60" style={{ background: 'linear-gradient(to right, transparent, #7C3AED)' }} />
          <span className="font-mono text-xs text-slate-accent tracking-[0.25em] uppercase px-3 py-1 rounded-full"
            style={{ border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.08)', color: '#94A3B8' }}>
            Backend Developer · AI-Driven System Architect
          </span>
          <div className="h-px w-12 opacity-60" style={{ background: 'linear-gradient(to left, transparent, #7C3AED)' }} />
        </div>

        {/* Typewriter Headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-in delay-200"
          style={{ minHeight: '4.5rem' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #fff 20%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {headline}
          </span>
          <span
            className="animate-blink"
            style={{ color: '#7C3AED', WebkitTextFillColor: '#7C3AED' }}
          >
            |
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-in delay-400"
          style={{ color: '#94A3B8' }}
        >
          Specialized in designing scalable Go APIs and multi-database architectures,
          leveraging <span style={{ color: '#A78BFA' }}>AI-assisted engineering</span> to build
          high-performance enterprise applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center animate-in delay-500">
          <button
            onClick={() => handleScroll('projects')}
            className="btn-violet text-white min-w-[170px] justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Explore Architecture
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 min-w-[170px] justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(167, 139, 250, 0.4)',
              color: '#F1F5F9',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#A78BFA'
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.4)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <svg className="w-4 h-4" style={{ color: '#A78BFA' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>

          <button
            onClick={() => handleScroll('contact')}
            className="btn-outline min-w-[170px] justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </button>
        </div>

        {/* Key Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-12 animate-in delay-600">
          {[
            { value: '60+', label: 'Enterprise APIs', sub: 'Go Fiber & GORM' },
            { value: '3+', label: 'Database Engines', sub: 'Oracle · Postgres · MySQL' },
            { value: '100%', label: 'Clean Architecture', sub: 'Domain Driven Design' },
            { value: '3x-5x', label: 'Velocity Multiplier', sub: 'AI Agent Workflows' },
          ].map((m) => (
            <div key={m.label} className="p-3.5 rounded-xl text-center glass-card">
              <p className="font-mono font-bold text-xl md:text-2xl gradient-text mb-0.5">{m.value}</p>
              <p className="text-xs font-semibold text-white">{m.label}</p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-8 font-mono text-xs tracking-widest uppercase animate-in delay-700"
          style={{ color: 'rgba(148,163,184,0.5)' }}>
          "Architecting Enterprise Systems through AI-Powered Engineering & Clean Architecture."
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in delay-700">
        <span className="font-mono text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>scroll</span>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1"
          style={{ borderColor: 'rgba(124,58,237,0.4)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: '#7C3AED',
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}

