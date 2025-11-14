import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techItems = [
  'Python',
  'python-telegram-bot',
  'SQLite',
  'CoinGecko API',
  'CryptoPanic API',
]

function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="tech-stack">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built With
        </motion.h2>
        <div ref={ref} className="tech-grid">
          {techItems.map((tech, index) => (
            <motion.div
              key={tech}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

