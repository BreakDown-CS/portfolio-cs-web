import React from 'react'
import { useInView } from '../hooks/useInView'

const highlights = [
  { label: '60+ RESTful APIs', desc: 'Designed and implemented', color: '#7C3AED' },
  { label: 'Multi-DB Architectures', desc: 'Oracle · PostgreSQL · MySQL', color: '#06B6D4' },
  { label: 'Go Fiber · GORM', desc: 'High-performance backend stack', color: '#7C3AED' },
  { label: 'Enterprise Workflows', desc: 'Complex business logic systems', color: '#06B6D4' },
]

export const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#06B6D4' }}>
            — Professional Experience —
          </span>
          <h2 className="section-heading">Where I've Built</h2>
        </div>

        <div className={`${inView ? 'animate-in delay-200' : 'opacity-0'}`}>
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(6,182,212,0.2)',
            }}
          >
            {/* Header bar */}
            <div
              className="px-8 py-5 flex items-center gap-3"
              style={{
                background: 'rgba(6,182,212,0.06)',
                borderBottom: '1px solid rgba(6,182,212,0.15)',
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              </div>
              <span className="font-mono text-xs ml-2" style={{ color: 'rgba(6,182,212,0.6)' }}>
                employment_record.json
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Company info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(124,58,237,0.1))',
                        border: '1px solid rgba(6,182,212,0.3)',
                        color: '#22D3EE',
                      }}
                    >
                      NS
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(34,197,94,0.12)',
                            border: '1px solid rgba(34,197,94,0.3)',
                            color: '#4ADE80',
                          }}
                        >
                          ● Current
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-3 mb-1">
                    Programmer · Backend Developer
                  </h3>
                  <p className="text-lg font-semibold mb-1" style={{ color: '#22D3EE' }}>
                    Nippon SySits Co., Ltd.
                  </p>
                  <p className="font-mono text-sm mb-6" style={{ color: '#94A3B8' }}>
                    Feb 2025 – Present
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-lg" style={{ color: '#94A3B8' }}>
                    Designing and delivering high-performance enterprise backend systems, working
                    across multiple database engines and building production RESTful APIs at scale
                    using Go Fiber and GORM with Clean Architecture principles.
                  </p>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-2 gap-3 md:w-80">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl p-4 transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${h.color}08`,
                        border: `1px solid ${h.color}25`,
                      }}
                    >
                      <p className="font-bold text-sm text-white mb-1">{h.label}</p>
                      <p className="text-xs" style={{ color: '#94A3B8' }}>{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack used */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="font-mono text-xs mb-3" style={{ color: 'rgba(148,163,184,0.5)' }}>
                  TECH STACK AT NIPPON SYSITS
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Go (Golang)', 'Fiber', 'GORM', 'Oracle DB', 'PostgreSQL', 'MySQL', 'RESTful APIs', 'Clean Architecture', 'Git'].map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accent glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

