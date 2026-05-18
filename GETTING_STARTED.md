# 🚀 Getting Started with SportsPulse

Welcome to **SportsPulse** - the next generation sports platform!

## Quick Start (5 minutes)

### 1. Prerequisites
Ensure you have installed:
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** 7+ (comes with Node.js)

### 2. Installation
```bash
# Navigate to project directory
cd sports

# Install dependencies
npm install
```

### 3. Development Server
```bash
# Start the development server
npm run dev
```

The app will automatically open at **http://localhost:5173** 🎉

## Available Commands

```bash
# Development
npm run dev              # Start dev server with auto-reload

# Production
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript errors

# Cleaning
rm -rf node_modules      # Remove dependencies
rm -rf dist              # Remove build output
```

## Project Structure Quick Reference

```
sports/
├── src/
│   ├── components/      # React components
│   ├── sections/        # Page sections
│   ├── data/            # Mock data
│   ├── store/           # State management
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Main component
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.ts       # Vite config
└── README.md            # Full documentation
```

## Key Features ✨

- **Hero Section** - Engaging landing page
- **Sports Categories** - 7 interactive sport types
- **Live Scores** - Real-time match updates
- **Tournaments** - Browse and register events
- **Player Profiles** - Top athletes and rankings
- **Community** - Social engagement hub
- **Achievements** - XP, medals, leaderboards
- **Responsive Design** - Works on all devices

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'neon-blue': '#00D9FF',   // Change these values
  'neon-red': '#FF0055',
}
```

### Update Mock Data
Edit `src/data/mockData.ts` to change:
- Player information
- Teams and tournaments
- Sports categories
- Community posts

### Add New Section
1. Create `src/components/sections/MySection.tsx`
2. Export from `src/components/index.ts`
3. Import in `src/App.tsx`

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Dependencies installation failed?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build failing?
```bash
# Check for TypeScript errors
npm run type-check

# Fix imports and try again
npm run build
```

### Styles not applying?
```bash
# Rebuild Tailwind CSS
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and update as needed:
```bash
cp .env.example .env.local
```

## Performance Tips

1. Use React DevTools to optimize renders
2. Check Console for warnings
3. Use Chrome DevTools Lighthouse
4. Keep components small and focused

## Need Help?

- Check [README.md](./README.md) for full documentation
- View [FEATURES.md](./FEATURES.md) for feature details
- Read component JSDoc comments
- Check Tailwind CSS docs: https://tailwindcss.com

## Next Steps

After getting familiar with the project:

1. ✅ Explore all sections by scrolling
2. ✅ Check the Sports Categories section
3. ✅ Try the Live Dashboard
4. ✅ Browse Tournaments
5. ✅ View Player Profiles
6. ✅ Read Community Posts
7. ✅ Check Achievements & Leaderboard

## Development Workflow

1. Start dev server: `npm run dev`
2. Edit files in `src/` 
3. Changes auto-reload in browser
4. Open DevTools (F12) for debugging
5. Check console for errors/warnings

## Deployment

When ready to deploy:

```bash
# Build for production
npm run build

# This creates a 'dist' folder

# Upload the 'dist' folder to your hosting provider
# Common options: Vercel, Netlify, GitHub Pages, AWS S3
```

## Performance Metrics

Current build size:
- CSS: ~5KB (gzipped)
- JS: ~97KB (gzipped)
- Total: ~102KB (gzipped)

## Technologies Used

- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 📦 Zustand
- ⚡ Vite
- 📅 date-fns

## Community & Support

- 🐛 Report bugs on GitHub Issues
- 💬 Discuss features in Discussions
- 📧 Email: contact@sportspulse.com

## Happy Coding! 🎉

Build amazing sports experiences with SportsPulse!

---

**Last Updated**: 2026
**Version**: 1.0.0
