import React, { useState } from 'react'

type TabKey = 'ecosystem' | 'clean-arch' | 'ai-pipeline'

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('ecosystem')
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <div
      className="mt-14 rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(124, 58, 237, 0.25)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Top terminal bar with tabs */}
      <div
        className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{
          background: 'rgba(124, 58, 237, 0.07)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="font-mono text-xs" style={{ color: 'rgba(167, 139, 250, 0.8)' }}>
            system_architecture_blueprint.go
          </span>
        </div>

        {/* Blueprint tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)' }}>
          {[
            { key: 'ecosystem' as TabKey, label: 'Ecosystem Flow' },
            { key: 'clean-arch' as TabKey, label: 'Clean Architecture' },
            { key: 'ai-pipeline' as TabKey, label: 'AI Agent Pipeline' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                setActiveNode(null)
              }}
              className="px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all duration-200"
              style={{
                background: activeTab === tab.key ? 'rgba(124, 58, 237, 0.35)' : 'transparent',
                color: activeTab === tab.key ? '#fff' : '#94A3B8',
                border: activeTab === tab.key ? '1px solid rgba(124, 58, 237, 0.5)' : '1px solid transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* TAB 1: ECOSYSTEM FLOW */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6">
            <p className="text-xs font-mono text-slate-400">
              Interactive Blueprint: Tap or hover any component to inspect its architectural responsibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Clients */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] tracking-wider uppercase text-cyan-glow block">
                  01 // Client Tier
                </span>
                <div
                  onMouseEnter={() => setActiveNode('storefront')}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-4 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: activeNode === 'storefront' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">e-commerce-web</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-dim/40 text-cyan-glow">React Vite</span>
                  </div>
                  <p className="text-xs text-slate-400">Customer Storefront · Optimized bundle & responsive UI</p>
                </div>

                <div
                  onMouseEnter={() => setActiveNode('admin')}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-4 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: activeNode === 'admin' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">e-commerce-admin</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-dim/40 text-cyan-glow">Ant Design</span>
                  </div>
                  <p className="text-xs text-slate-400">Backoffice Suite · Real-time sync, audit logs, inventory control</p>
                </div>
              </div>

              {/* API Core */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] tracking-wider uppercase text-violet-glow block">
                  02 // Go Backend Core
                </span>
                <div
                  onMouseEnter={() => setActiveNode('api')}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-5 rounded-xl transition-all duration-300 cursor-pointer h-[calc(100%-2rem)] flex flex-col justify-between"
                  style={{
                    background: activeNode === 'api' ? 'rgba(124, 58, 237, 0.15)' : 'rgba(124, 58, 237, 0.06)',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base text-white">e-commerce-api</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-dim/60 text-violet-glow font-bold">Go Fiber</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      High-throughput HTTP Server executing domain boundaries, distributed JWT auth, and multi-tenant transaction routing.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-violet-500/20 text-[10px] font-mono text-slate-400">
                    <div>⚡ 60+ Endpoints</div>
                    <div>🛡️ Clean Arch</div>
                    <div>🔄 GORM Engine</div>
                    <div>📦 MinIO S3 SDK</div>
                  </div>
                </div>
              </div>

              {/* Data Tier */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] tracking-wider uppercase text-cyan-glow block">
                  03 // Multi-DB & Storage Tier
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: 'PostgreSQL', tag: 'Primary DB', desc: 'ACID orders & catalogs' },
                    { title: 'Oracle DB', tag: 'Enterprise', desc: 'Complex stored proc & ERP' },
                    { title: 'MySQL', tag: 'Legacy / Log', desc: 'High-write analytical sync' },
                    { title: 'MinIO S3', tag: 'Object Store', desc: 'Media assets & invoices' },
                  ].map((db) => (
                    <div
                      key={db.title}
                      onMouseEnter={() => setActiveNode(db.title)}
                      onMouseLeave={() => setActiveNode(null)}
                      className="p-3 rounded-xl transition-all duration-300 cursor-pointer"
                      style={{
                        background: activeNode === db.title ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(6, 182, 212, 0.25)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{db.title}</span>
                      </div>
                      <span className="text-[9px] font-mono text-cyan-400">{db.tag}</span>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{db.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLEAN ARCHITECTURE LAYERS */}
        {activeTab === 'clean-arch' && (
          <div className="space-y-4">
            <p className="text-xs font-mono text-slate-400">
              Dependency Rule: Inner circles do not know anything about outer circles. Business logic is 100% decoupled from frameworks.
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  layer: '01. Frameworks & Drivers (Outer)',
                  title: 'HTTP Handlers / Fiber Routers & DB Connectors',
                  tech: 'Go Fiber, GORM Driver, Oracle OCI, MinIO Client',
                  color: '#06B6D4',
                  desc: 'Handles request deserialization, status codes, query parsing, and raw SQL/OCI driver execution.',
                },
                {
                  layer: '02. Interface Adapters (Controllers & Repositories)',
                  title: 'Repository Implementations & Data Presenters',
                  tech: 'GormProductRepository, OracleOrderRepository',
                  color: '#7C3AED',
                  desc: 'Converts data between the usecase domain entities and persistent database model schemas.',
                },
                {
                  layer: '03. Application Business Rules (Use Cases)',
                  title: 'Interactors & Service Workflows',
                  tech: 'CreateOrderUseCase, ProcessPaymentService',
                  color: '#22D3EE',
                  desc: 'Coordinates state changes, transaction rollbacks across multi-DB, and invokes repository contracts.',
                },
                {
                  layer: '04. Enterprise Business Rules (Domain Core)',
                  title: 'Entities & Domain Contracts',
                  tech: 'OrderEntity, PriceCalculation, RepositoryInterfaces',
                  color: '#A78BFA',
                  desc: 'Pure Go domain models without external dependencies, embodying pure business rules.',
                },
              ].map((item) => (
                <div
                  key={item.layer}
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}10, rgba(255,255,255,0.02))`,
                    borderLeft: `4px solid ${item.color}`,
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-mono text-xs font-bold" style={{ color: item.color }}>
                      {item.layer}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300">
                      {item.tech}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: AI AGENT PIPELINE */}
        {activeTab === 'ai-pipeline' && (
          <div className="space-y-4">
            <p className="text-xs font-mono text-slate-400">
              How AI Agents collaborate under Human Lead Architecture to output bug-free enterprise Go & TypeScript systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                {
                  step: 'Phase 1',
                  role: 'Architect (Human)',
                  title: 'Blueprint Specification',
                  desc: 'Design OpenAPI contract, DB schema normalization, interface signatures, and security constraints.',
                  tag: 'Human Precision',
                  color: '#7C3AED',
                },
                {
                  step: 'Phase 2',
                  role: 'AI Agent Swarm',
                  title: 'Contextual Code Gen',
                  desc: 'Generate boilerplate, repetitive CRUD, GORM bindings, unit tests, and TypeScript client typings.',
                  tag: 'AI Velocity',
                  color: '#06B6D4',
                },
                {
                  step: 'Phase 3',
                  role: 'Architect (Human)',
                  title: 'Audit & Static Review',
                  desc: 'Inspect race conditions, database transaction isolations, memory leaks, and architectural compliance.',
                  tag: 'Quality Gate',
                  color: '#7C3AED',
                },
                {
                  step: 'Phase 4',
                  role: 'CI/CD & Delivery',
                  title: 'Production Deploy',
                  desc: 'Automated test execution, Docker containerization, and zero-downtime rolling update deployment.',
                  tag: 'Zero Defect',
                  color: '#06B6D4',
                },
              ].map((p) => (
                <div
                  key={p.step}
                  className="p-5 rounded-xl flex flex-col justify-between"
                  style={{
                    background: `${p.color}08`,
                    border: `1px solid ${p.color}30`,
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold" style={{ color: p.color }}>{p.step}</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full" style={{ background: `${p.color}20`, color: p.color }}>
                        {p.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">{p.role}</span>
                    <h5 className="font-bold text-sm text-white mb-2">{p.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
