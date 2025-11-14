import { useState, useEffect } from 'react'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px',
        background: 'linear-gradient(135deg, #FF8C42, #FF6B35)',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 10px rgba(255, 140, 66, 0.5)'
      }}
    />
  )
}

export default ScrollProgress

