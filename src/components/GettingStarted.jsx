import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: 1,
    title: 'Find the Bot',
    description: 'Search for @garfield_crypto_bot on Telegram or click the button above.',
  },
  {
    number: 2,
    title: 'Start Chatting',
    description: 'Send /start to begin. The bot will greet you and show available commands.',
  },
  {
    number: 3,
    title: 'Set Your Preferences',
    description: 'Use inline buttons to set your language and currency preferences.',
  },
  {
    number: 4,
    title: 'Start Tracking',
    description: 'Add coins to your portfolio or watchlist and start monitoring your investments!',
  },
]

function Step({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="step"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="step-number"
        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {step.number}
      </motion.div>
      <div className="step-content">
        <h3>{step.title}</h3>
        <p>
          {step.description.split('@garfield_crypto_bot').map((part, i, arr) => 
            i === arr.length - 1 ? part : (
              <React.Fragment key={i}>
                {part}
                <strong>@garfield_crypto_bot</strong>
              </React.Fragment>
            )
          )}
          {step.description.includes('/start') && (
            <>
              {' '}
              <code>/start</code>
            </>
          )}
        </p>
      </div>
    </motion.div>
  )
}

function GettingStarted() {
  return (
    <section id="getting-started" className="getting-started">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Getting Started
        </motion.h2>
        <div className="steps">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GettingStarted

