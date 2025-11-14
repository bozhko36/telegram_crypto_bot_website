import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Commands', href: '#commands' },
    { name: 'Getting Started', href: '#getting-started' },
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="container">
        <div className="nav-brand">
          <span className="brand-name">Garfield Crypto Bot</span>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com/bozhko36/telegram_crypto_bot" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

