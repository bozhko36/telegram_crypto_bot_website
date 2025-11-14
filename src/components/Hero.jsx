import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet Garfield the Crypto Bot
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your intelligent Telegram bot for tracking cryptocurrency prices, managing portfolios, 
              setting price alerts, and staying updated with the latest crypto news.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="https://t.me/garfield_crypto_bot" 
                className="btn btn-telegram" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start on Telegram
              </motion.a>
              <motion.a 
                href="#getting-started" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#getting-started')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
          <div className="hero-image-container">
            <img 
              src="/generated-image.png" 
              alt="Garfield Crypto Bot"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

