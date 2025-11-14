import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const commandCategories = [
  {
    title: 'Basic Commands',
    premium: false,
    commands: [
      { cmd: '/start', desc: 'Start the bot and see available commands' },
      { cmd: '/language <lang>', desc: 'Set language (en, bg, ru)' },
      { cmd: '/setcurrency <currency>', desc: 'Set default currency (usd, eur, etc.)' },
      { cmd: '/price <coin>', desc: 'Get current price of a coin' },
    ]
  },
  {
    title: 'Portfolio Commands',
    premium: true,
    commands: [
      { cmd: '/addcoin <coin> <amount> [purchase_price]', desc: 'Add coin to portfolio' },
      { cmd: '/removecoin <coin>', desc: 'Remove coin from portfolio' },
      { cmd: '/portfolio', desc: 'View your portfolio with profit/loss' },
      { cmd: '/performance', desc: 'View detailed performance metrics' },
    ]
  },
  {
    title: 'Watchlist Commands',
    premium: true,
    commands: [
      { cmd: '/addwatch <coin>', desc: 'Add coin to watchlist' },
      { cmd: '/removewatch <coin>', desc: 'Remove coin from watchlist' },
      { cmd: '/watchlist', desc: 'View your watchlist' },
    ]
  },
  {
    title: 'Alert Commands',
    premium: true,
    commands: [
      { cmd: '/pricealert <coin> <above/below> <price>', desc: 'Create price alert' },
      { cmd: '/alerts', desc: 'List all active alerts' },
      { cmd: '/removealert <id>', desc: 'Remove an alert' },
    ]
  },
  {
    title: 'News Commands',
    premium: false,
    commands: [
      { cmd: '/news on', desc: 'Subscribe to news updates' },
      { cmd: '/news off', desc: 'Unsubscribe from news updates' },
      { cmd: '/news latest', desc: 'Get latest news' },
    ]
  },
  {
    title: 'Other Commands',
    premium: true,
    commands: [
      { cmd: '/top10', desc: 'View top 10 cryptocurrencies by market cap' },
      { cmd: '/dailyreport', desc: 'Manually trigger daily report' },
    ]
  },
]

function Commands() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredCategories = commandCategories.filter(category => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return category.title.toLowerCase().includes(query) ||
           category.commands.some(cmd => 
             cmd.cmd.toLowerCase().includes(query) || 
             cmd.desc.toLowerCase().includes(query)
           )
  })

  const filteredCommands = selectedCategory 
    ? commandCategories.find(cat => cat.title === selectedCategory)?.commands || []
    : []

  return (
    <section id="commands" className="commands">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Commands
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 3rem' }}
        >
          <input
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 140, 66, 0.2)',
              background: 'rgba(26, 35, 50, 0.6)',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(255, 140, 66, 0.5)'
              e.target.style.boxShadow = '0 0 0 3px rgba(255, 140, 66, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 140, 66, 0.2)'
              e.target.style.boxShadow = 'none'
            }}
          />
        </motion.div>

        <div className="commands-grid">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, index) => (
              <CommandCategory 
                key={category.title} 
                category={category} 
                index={index}
                searchQuery={searchQuery}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function CommandCategory({ category, index, searchQuery }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const filteredCommands = category.commands.filter(cmd => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return cmd.cmd.toLowerCase().includes(query) || 
           cmd.desc.toLowerCase().includes(query)
  })

  if (filteredCommands.length === 0 && searchQuery) return null

  return (
    <motion.div
      ref={ref}
      className="command-category"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <h3>
        {category.title}
        {category.premium && <span className="premium-badge">Premium</span>}
      </h3>
      <div className="command-list">
        {filteredCommands.map((command, cmdIndex) => (
          <motion.div
            key={command.cmd}
            className="command-item"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + cmdIndex * 0.05 }}
          >
            <code>{command.cmd}</code>
            <p>{command.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Commands

