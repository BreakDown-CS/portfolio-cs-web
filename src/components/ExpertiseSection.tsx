import React, { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

const expertise = [
  {
    category: 'Backend & Core',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#7C3AED',
    skills: [
      { name: 'Go (Golang)', level: 90 },
      { name: 'Fiber Framework', level: 88 },
      { name: 'GORM', level: 85 },
      { name: 'Clean Architecture', level: 92 },
      { name: 'RESTful APIs', level: 95 },
    ],
  },
  {
    category: 'Databases',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: '#06B6D4',
    skills: [
      { name: 'Oracle DB', level: 82 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'DB Transactions', level: 87 },
      { name: 'Schema Design', level: 90 },
    ],
  },
  {
    category: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#7C3AED',
    skills: [
      { name: 'TypeScript', level: 83 },
      { name: 'React', level: 80 },
      { name: 'Ant Design', level: 78 },
      { name: 'Vite', level: 82 },
    ],
  },
  {
    category: 'Workflow & Tools',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: '#06B6D4',
    skills: [
      { name: 'AI Agent Orchestration', level: 94 },
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'MinIO', level: 70 },
    ],
  },
]

// Skill group card — single IntersectionObserver per card, not per bar
const SkillGroupCard: React.FC<{
  group: typeof expertise[0]
  animateIn: boolean
  delay: number
}> = ({ group, animateIn, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardVisible, setCardVisible] = useState(false)

  React.useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardVisible(true); obs.unobserve(el) } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-2xl p-7 ${animateIn ? 'animate-in' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: `${group.color}15`,
            border: `1px solid ${group.color}35`,
            color: group.color,
          }}
        >
          {group.icon}
        </div>
        <h3 className="font-bold text-white">{group.category}</h3>
      </div>

      {group.skills.map((skill, si) => (
        <div key={skill.name} className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{skill.name}</span>
            <span className="font-mono text-xs" style={{ color: group.color }}>
              {cardVisible ? `${skill.level}%` : '0%'}
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: cardVisible ? `${skill.level}%` : '0%',
                transition: `width 1s ease-out ${si * 100}ms`,
                background: `linear-gradient(90deg, ${group.color}, ${group.color}70)`,
                boxShadow: cardVisible ? `0 0 8px ${group.color}60` : 'none',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export const ExpertiseSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="expertise" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.5), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7C3AED' }}>
            — Technical Expertise —
          </span>
          <h2 className="section-heading">The Tech Stack</h2>
          <p className="text-sm max-w-xl mx-auto mt-3" style={{ color: '#94A3B8' }}>
            A battle-tested toolkit spanning backend systems, databases, frontend interfaces, and AI-augmented workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((group, gi) => (
            <SkillGroupCard
              key={group.category}
              group={group}
              animateIn={inView}
              delay={200 + gi * 120}
            />
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className={`mt-12 ${inView ? 'animate-in delay-600' : 'opacity-0'}`}>
          <p className="font-mono text-xs text-center mb-5" style={{ color: 'rgba(148,163,184,0.5)' }}>
            ALL TECHNOLOGIES
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Go', 'Fiber', 'GORM', 'Clean Arch', 'RESTful API',
              'Oracle', 'PostgreSQL', 'MySQL', 'TypeScript', 'React',
              'Ant Design', 'Vite', 'AI Orchestration', 'Git', 'Docker', 'MinIO',
            ].map((t, i) => (
              <span key={t} className={`tech-badge ${i % 3 === 1 ? 'tech-badge-cyan' : ''}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
