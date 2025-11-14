import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer id="github" className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3>Garfield Crypto Bot</h3>
            <p>Your intelligent cryptocurrency tracking companion on Telegram.</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li>
                <a 
                  href="https://github.com/bozhko36/telegram_crypto_bot" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/garfield_crypto_bot" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram Bot
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a 
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#commands"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#commands')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Commands
                </a>
              </li>
              <li>
                <a 
                  href="#getting-started"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#getting-started')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>&copy; 2024 Garfield Crypto Bot. Made with ❤️ for crypto enthusiasts.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

