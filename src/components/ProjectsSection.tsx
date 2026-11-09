import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArchitectureDiagram } from './ArchitectureDiagram'
import { ApiPlayground } from './ApiPlayground'

const projects = [
  {
    repo: 'e-commerce-api',
    title: 'E-Commerce API',
    subtitle: 'AI-Engineered Go Backend',
    desc: 'High-performance Go Fiber backend built via AI-assisted engineering with Clean Architecture principles. Features RESTful endpoints, GORM ORM, and multi-database support.',
    tags: ['Go', 'Fiber', 'GORM', 'Clean Architecture', 'REST API', 'PostgreSQL'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    primaryColor: '#7C3AED',
    lang: 'Go',
    langColor: '#00ADD8',
    githubUrl: 'https://github.com/BreakDown-CS/e-commerce-api',
  },
  {
    repo: 'e-commerce-admin',
    title: 'E-Commerce Admin',
    subtitle: 'TypeScript Management Suite',
    desc: 'Full-featured TypeScript & Ant Design administration panel for backend control, data management, real-time sync, and comprehensive analytics dashboard.',
    tags: ['TypeScript', 'React', 'Ant Design', 'Vite', 'Admin Dashboard'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    primaryColor: '#06B6D4',
    lang: 'TypeScript',
    langColor: '#3178C6',
    githubUrl: 'https://github.com/BreakDown-CS/e-commerce-admin',
  },
  {
    repo: 'e-commerce-web',
    title: 'E-Commerce Web',
    subtitle: 'TypeScript Customer Storefront',
    desc: 'Modern TypeScript customer-facing storefront with blazing-fast performance powered by Vite. Delivers seamless shopping experiences with responsive design.',
    tags: ['TypeScript', 'React', 'Vite', 'Storefront', 'Responsive'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    primaryColor: '#7C3AED',
    lang: 'TypeScript',
    langColor: '#3178C6',
    githubUrl: 'https://github.com/BreakDown-CS/e-commerce-web',
  },
]

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 ${inView ? 'animate-in' : 'opacity-0'}`}
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7C3AED' }}>
            — Featured GitHub Projects —
          </span>
          <h2 className="section-heading">AI-Engineered Ecosystems</h2>
          <p className="text-sm max-w-xl mx-auto mt-3" style={{ color: '#94A3B8' }}>
            A cohesive full-stack e-commerce system built end-to-end with AI-assisted engineering — from backend API to admin panel to customer storefront.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.repo}
              onMouseEnter={() => setHovered(project.repo)}
              onMouseLeave={() => setHovered(null)}
              className={`glass-card rounded-2xl p-7 group flex flex-col transition-all duration-500 ${
                inView ? 'animate-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${200 + i * 150}ms`,
                borderColor: hovered === project.repo ? `${project.primaryColor}60` : 'rgba(124,58,237,0.2)',
                background: hovered === project.repo ? `${project.primaryColor}08` : 'rgba(255,255,255,0.03)',
                boxShadow: hovered === project.repo
                  ? `0 8px 40px ${project.primaryColor}25, 0 1px 0 rgba(255,255,255,0.05) inset`
                  : 'none',
                transform: hovered === project.repo ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${project.primaryColor}15`,
                    border: `1px solid ${project.primaryColor}35`,
                    color: project.primaryColor,
                    boxShadow: `0 0 15px ${project.primaryColor}20`,
                  }}
                >
                  {project.icon}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-200 transition-colors p-1"
                  aria-label={`GitHub: ${project.repo}`}
                >
                  <GithubIcon />
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-violet-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono mb-3" style={{ color: project.primaryColor }}>
                {project.subtitle}
              </p>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#94A3B8' }}>
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge text-xs">{tag}</span>
                ))}
              </div>

              {/* Footer */}
              <div
                className="pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: project.langColor }}
                  />
                  <span className="text-xs font-mono" style={{ color: '#94A3B8' }}>
                    {project.lang}
                  </span>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono flex items-center gap-1 transition-all duration-200 hover:gap-2"
                  style={{ color: project.primaryColor }}
                >
                  View Repo
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Blueprint */}
        <div className={inView ? 'animate-in delay-500' : 'opacity-0'}>
          <ArchitectureDiagram />
          <ApiPlayground />
        </div>

        {/* GitHub profile link */}
        <div className={`text-center mt-10 ${inView ? 'animate-in delay-600' : 'opacity-0'}`}>
          <a
            href="https://github.com/BreakDown-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-all duration-300 hover:gap-3"
            style={{ color: '#94A3B8' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A78BFA' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8' }}
          >
            <GithubIcon />
            View all repositories on GitHub · BreakDown-CS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

