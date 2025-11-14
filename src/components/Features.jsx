import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { icon: '💰', title: 'Price Tracking', description: 'Get real-time cryptocurrency prices for any coin. Track price changes with 24h statistics.' },
  { icon: '📊', title: 'Portfolio Management', description: 'Track your crypto holdings with automatic profit/loss calculations. Monitor your investments in real-time.' },
  { icon: '📈', title: 'Performance Tracking', description: 'View detailed performance metrics including 24h, 7d, and 30d changes. Identify your top performers.' },
  { icon: '🔔', title: 'Price Alerts', description: 'Set custom price alerts for when coins reach specific prices. Get notified instantly when conditions are met.' },
  { icon: '📡', title: 'Watchlist', description: 'Monitor your favorite coins without adding them to your portfolio. Keep track of potential investments.' },
  { icon: '🗞️', title: 'News Updates', description: 'Receive breaking crypto news directly in Telegram. Stay informed about market movements and updates.' },
  { icon: '📅', title: 'Daily Reports', description: 'Get automated daily summaries of your portfolio performance and market insights.' },
  { icon: '🌍', title: 'Multi-Language', description: 'Supports English, Bulgarian, and Russian. Easy language switching with inline buttons.' },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div 
        className="feature-icon"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {feature.icon}
      </motion.div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

