# Garfield Crypto Bot Website

A modern, responsive React website showcasing the Garfield Crypto Bot Telegram bot with interactive features and smooth animations.

## ✨ React Features

- **Scroll Progress Indicator** - Visual progress bar at the top showing scroll position
- **Interactive Command Search** - Real-time search and filter through all bot commands
- **Smooth Animations** - Framer Motion powered animations on scroll and hover
- **Interactive Cards** - Feature cards with hover effects and animations
- **Parallax Hero** - Hero section with mouse-follow parallax effect
- **Animated Tech Stack** - Interactive tech badges with spring animations
- **Scroll-triggered Animations** - Elements animate as they come into view
- **Interactive Navigation** - Smooth scroll navigation with active states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
telegrambot-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with scroll effects
│   │   ├── Hero.jsx             # Hero section with parallax
│   │   ├── Features.jsx         # Feature cards with animations
│   │   ├── Commands.jsx         # Commands with search functionality
│   │   ├── GettingStarted.jsx   # Interactive steps
│   │   ├── TechStack.jsx        # Animated tech badges
│   │   ├── Footer.jsx           # Footer component
│   │   └── ScrollProgress.jsx  # Scroll progress indicator
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── styles.css               # All styling
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🎨 Customization

### Update Bot Username
Replace `@garfield_crypto_bot` in the components with your actual Telegram bot username.

### Update GitHub Link
The GitHub link is set to `https://github.com/bozhko36/telegram_crypto_bot`. Update in Footer.jsx if needed.

### Colors
Edit the CSS variables in `src/styles.css` under `:root` to customize the color scheme.

## 🚀 Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Your site will be live instantly

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder contents to your GitHub repository
3. Enable GitHub Pages in repository settings

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Same as the main bot project.
