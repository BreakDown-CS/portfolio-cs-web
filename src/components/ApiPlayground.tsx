import React, { useState } from 'react'

interface EndpointOption {
  id: string
  method: 'GET' | 'POST'
  path: string
  description: string
  latency: string
  executionFlow: string[]
  response: object
}

const endpoints: EndpointOption[] = [
  {
    id: 'health',
    method: 'GET',
    path: '/api/v1/health',
    description: 'Multi-Database healthcheck & connection pool telemetry',
    latency: '0.8ms',
    executionFlow: [
      'Fiber Router -> HealthHandler.Check()',
      'Ping Oracle DB (Pool: 10/50 idle: 48)',
      'Ping PostgreSQL (Latency: 0.3ms)',
      'Ping MySQL (Replication lag: 0s)',
      'Return Aggregated System State (200 OK)',
    ],
    response: {
      status: 'healthy',
      uptime: '142h 38m',
      runtime: 'go1.23.2-linux-amd64',
      framework: 'Fiber/v2.52.5',
      databases: {
        oracle: { status: 'CONNECTED', active_conns: 2, max_pool: 50 },
        postgresql: { status: 'CONNECTED', active_conns: 4, max_pool: 100 },
        mysql: { status: 'CONNECTED', active_conns: 1, max_pool: 25 },
      },
      storage: {
        minio: { bucket: 'ecommerce-assets', status: 'AVAILABLE' },
      },
    },
  },
  {
    id: 'checkout',
    method: 'POST',
    path: '/api/v1/orders/checkout',
    description: 'Clean Architecture usecase with multi-database ACID transaction',
    latency: '3.4ms',
    executionFlow: [
      'JWT Auth Middleware (Extract UserID & Claims)',
      'Validation: DTO -> OrderRequestSchema',
      'UseCase: CreateOrderUseCase.Execute(ctx, orderDto)',
      'Begin Distributed DB Transaction',
      'Deduct Inventory -> PostgreSQL (GORM)',
      'Insert ERP Invoicing Log -> Oracle DB (OCI Driver)',
      'Commit Tx & Emit Event -> Kafka/EventBus',
      'Return Clean Domain Entity (201 Created)',
    ],
    response: {
      code: 201,
      message: 'Order created successfully with multi-db sync',
      data: {
        order_id: 'ORD-2026-X892A',
        user_id: 'usr_arm_9941',
        total_amount: 4590.00,
        currency: 'THB',
        payment_status: 'PAID',
        ledger_ref: 'ORA-ERP-883192',
        sync_status: {
          postgres_catalog: 'COMMITTED',
          oracle_financials: 'COMMITTED',
        },
        created_at: '2026-11-09T16:30:00Z',
      },
    },
  },
  {
    id: 'products',
    method: 'GET',
    path: '/api/v1/products?category=electronics&limit=2',
    description: 'High-throughput paginated product catalog query',
    latency: '1.2ms',
    executionFlow: [
      'Query Param Sanitization (Limit: 2, Offset: 0)',
      'Cache Check -> In-Memory/Redis (Hit)',
      'Repository: GormProductRepository.FindWithFilter()',
      'Entity Serialization to JSON Buffer',
      'HTTP 200 OK Response streamed via Fiber',
    ],
    response: {
      code: 200,
      pagination: { current_page: 1, per_page: 2, total_records: 128 },
      data: [
        {
          id: 'prod_901',
          name: 'AI Agent Edge Accelerator',
          sku: 'AI-ACCEL-01',
          price: 12500.00,
          stock: 42,
          db_source: 'PostgreSQL-Primary',
        },
        {
          id: 'prod_902',
          name: 'Clean Architecture Enterprise Blueprint Guide',
          sku: 'CA-BOOK-GO',
          price: 990.00,
          stock: 350,
          db_source: 'PostgreSQL-Primary',
        },
      ],
    },
  },
]

export const ApiPlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointOption>(endpoints[0])
  const [viewTab, setViewTab] = useState<'response' | 'flow'>('response')
  const [loading, setLoading] = useState(false)

  const handleExecute = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 250)
  }

  return (
    <div className="mt-14 glass-card rounded-2xl overflow-hidden border border-violet/30">
      {/* Playground Header */}
      <div
        className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        style={{
          background: 'rgba(124, 58, 237, 0.08)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
              <span>⚡ Go Fiber API Live Simulator</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-dim/50 text-violet-glow font-normal">
                e-commerce-api
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400">Interactive Tech Lead Demo</span>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Endpoint Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {endpoints.map((ep) => (
            <button
              key={ep.id}
              onClick={() => setSelectedEndpoint(ep)}
              className="p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between"
              style={{
                background:
                  selectedEndpoint.id === ep.id
                    ? 'rgba(124, 58, 237, 0.15)'
                    : 'rgba(255, 255, 255, 0.02)',
                border:
                  selectedEndpoint.id === ep.id
                    ? '1px solid rgba(124, 58, 237, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded"
                  style={{
                    background: ep.method === 'GET' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                    color: ep.method === 'GET' ? '#4ADE80' : '#60A5FA',
                    border: `1px solid ${ep.method === 'GET' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                  }}
                >
                  {ep.method}
                </span>
                <span className="font-mono text-xs font-semibold text-white truncate">{ep.path}</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">{ep.description}</p>
            </button>
          ))}
        </div>

        {/* Live URL Input & Send Button */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <div
            className="flex-1 px-4 py-2.5 rounded-xl font-mono text-xs text-slate-200 flex items-center gap-2 overflow-x-auto"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(124, 58, 237, 0.25)',
            }}
          >
            <span
              className="font-bold px-1.5 py-0.5 rounded text-[10px]"
              style={{
                background: selectedEndpoint.method === 'GET' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                color: selectedEndpoint.method === 'GET' ? '#4ADE80' : '#60A5FA',
              }}
            >
              {selectedEndpoint.method}
            </span>
            <span className="text-slate-400 select-none">https://api.breakdown-cs.dev</span>
            <span className="text-white font-semibold">{selectedEndpoint.path}</span>
          </div>

          <button
            onClick={handleExecute}
            disabled={loading}
            className="btn-violet text-white text-xs px-6 py-2.5 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <span className="animate-pulse">Dispatching...</span>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Send Request
              </>
            )}
          </button>
        </div>

        {/* Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              200 OK
            </span>
            <span className="text-slate-400">
              Latency: <span className="text-cyan-400 font-semibold">{selectedEndpoint.latency}</span>
            </span>
            <span className="hidden sm:inline text-slate-400">
              Alloc: <span className="text-violet-400">12.4 KB</span>
            </span>
          </div>

          {/* Sub-tab view */}
          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/40 border border-white/5">
            <button
              onClick={() => setViewTab('response')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                viewTab === 'response' ? 'bg-violet/30 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              JSON Response
            </button>
            <button
              onClick={() => setViewTab('flow')}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                viewTab === 'flow' ? 'bg-violet/30 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Execution Trace ({selectedEndpoint.executionFlow.length} steps)
            </button>
          </div>
        </div>

        {/* Console / Output Window */}
        <div
          className="rounded-xl p-4 overflow-x-auto font-mono text-xs"
          style={{
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            maxHeight: '340px',
          }}
        >
          {viewTab === 'response' ? (
            <pre className="text-slate-300 leading-relaxed">
              <code>{JSON.stringify(selectedEndpoint.response, null, 2)}</code>
            </pre>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400 mb-2">
                // Clean Architecture Internal Execution Stack
              </p>
              {selectedEndpoint.executionFlow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-300">
                  <span className="text-violet-400 select-none">{String(idx + 1).padStart(2, '0')}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

