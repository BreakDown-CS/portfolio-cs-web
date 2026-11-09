import React from 'react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'System Architecture & Design',
    desc: 'Defining clean architecture blueprints, normalizing database schemas, and establishing robust business logic and domain boundaries before a single line of code is written.',
    tags: ['Clean Architecture', 'DDD', 'Schema Design', 'API Contracts'],
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    num: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Agent Orchestration',
    desc: 'Directing AI agents to generate high-performance, production-grade code across Go, TypeScript, and database layers — accelerating delivery without compromising quality.',
    tags: ['Go · Fiber', 'TypeScript', 'SQL Generation', 'AI Prompting'],
    color: '#06B6D4',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    num: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Code Review & Quality Control',
    desc: 'Acting as the Lead Architect — reviewing AI-generated output for correctness, security, performance, and architectural alignment before approving production deployment.',
    tags: ['Code Review', 'Security Audit', 'Performance', 'Production-Ready'],
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.2)',
  },
]

export const MethodologySection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section id="methodology" className="relative py-28 overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block"
            style={{ color: '#7C3AED' }}>
            — Working Methodology —
          </span>
          <h2 className="section-heading">The AI-Driven Workflow</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mt-3">
            A modern engineering approach where human architectural expertise directs AI agents to deliver enterprise-grade systems at unprecedented velocity.
          </p>
        </div>

        {/* Flow connector line (desktop) */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-24 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(124,58,237,0.3) 30%, rgba(6,182,212,0.3) 70%, transparent 95%)',
            }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`glass-card rounded-2xl p-7 group cursor-default transition-all duration-500 ${
                inView ? 'animate-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-mono text-5xl font-bold leading-none select-none"
                  style={{ color: 'rgba(124,58,237,0.15)' }}
                >
                  {step.num}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.glow}`,
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                {step.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono font-medium"
                    style={{
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}30`,
                      color: step.color === '#7C3AED' ? '#A78BFA' : '#22D3EE',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

