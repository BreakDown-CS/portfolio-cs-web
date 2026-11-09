import React, { useState, useEffect } from 'react'

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
        border: '1px solid rgba(124,58,237,0.5)',
        boxShadow: visible
          ? '0 0 20px rgba(124,58,237,0.5), 0 4px 20px rgba(0,0,0,0.4)'
          : 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(-3px) scale(1.08)'
        el.style.boxShadow = '0 0 30px rgba(124,58,237,0.7), 0 8px 25px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(0) scale(1)'
        el.style.boxShadow = '0 0 20px rgba(124,58,237,0.5), 0 4px 20px rgba(0,0,0,0.4)'
      }}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  )
}

