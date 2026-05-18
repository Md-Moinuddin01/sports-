# SportsPulse - Development Instructions

This is a modern, high-performance sports platform website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Project Overview

**SportsPulse** is a premium sports ecosystem combining:
- Community engagement
- Tournament management
- Live match updates
- Player rankings and achievements
- Sports news and discussions

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Date Utilities**: date-fns

## Project Structure

```
src/
├── components/         # React components
│   ├── sections/      # Page sections (Hero, Categories, Dashboard, etc.)
│   ├── ui/            # Reusable UI components
│   └── Navbar, Footer
├── data/              # Mock data for demo
├── store/             # Zustand state management
├── types/             # TypeScript interfaces
└── App.tsx            # Main app component
```

## Key Features to Maintain

1. **Dark Mode Design** - All components use dark theme with neon accents
2. **Responsive Layout** - Mobile-first approach using Tailwind CSS
3. **Smooth Animations** - Framer Motion for interactive elements
4. **Type Safety** - Full TypeScript coverage
5. **Performance** - Optimized component rendering

## Color Palette

```
Primary: #00D9FF (Neon Blue)
Accent:  #FF0055 (Neon Red)
Success: #00FF88 (Neon Green)
Warning: #FF6B00 (Neon Orange)
BG:      #0A0E27 (Dark)
Card:    #151B3A (Dark Card)
```

## Common Tasks

### Add a New Section
1. Create component in `src/components/sections/SectionName.tsx`
2. Export from `src/components/index.ts`
3. Import and add to `src/App.tsx`

### Update Mock Data
Edit `src/data/mockData.ts` to modify:
- Players and teams
- Tournaments
- Community posts
- Achievements
- Leaderboard

### Modify Colors
Update `tailwind.config.js` colors and `src/index.css` CSS variables

### Add Animation
Use Framer Motion's `motion` component with variants

### Connect to Backend
Replace mock data with API calls in store and components

## Development Guidelines

1. **Component Structure**: Keep components focused and reusable
2. **Naming**: Use descriptive names (e.g., `HeroSection`, not `Hero`)
3. **TypeScript**: Always use proper type annotations
4. **Tailwind**: Prefer utility classes over custom CSS
5. **Animations**: Use Framer Motion for all animations
6. **Dark Mode**: Always design for dark theme first
7. **Responsive**: Test on mobile, tablet, and desktop

## Testing & Quality

```bash
npm run type-check  # Check TypeScript
npm run lint       # Run ESLint
npm run build      # Build check
```

## Performance Tips

- Lazy load images
- Memoize expensive computations
- Use React.memo for expensive components
- Optimize animations (60fps target)
- Code split sections when needed

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast (WCAG AA)
- Reduced motion preferences

## Common Patterns

### Animated Section
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Glass Card
```tsx
<div className="glass rounded-2xl p-6">
  Content
</div>
```

### Button Variants
```
btn btn-primary      // Blue gradient
btn btn-secondary    // Border style
btn btn-danger       // Red background
```

## Deployment

1. Run `npm run build`
2. Deploy `dist/` folder to hosting
3. Ensure environment variables are set
4. Test on production domain

## Troubleshooting

- Clear node_modules and reinstall if issues
- Check Node version (16+)
- Ensure all dependencies are installed
- Verify Tailwind config is correct
- Check browser console for errors

## Next Steps for Development

1. Connect backend API endpoints
2. Implement user authentication
3. Add payment processing
4. Enable real-time notifications
5. Build admin dashboard
6. Create mobile app version
7. Add advanced search/filters
8. Implement user profiles

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)

## Support

For questions or issues, refer to:
- Component documentation in JSDoc
- Type definitions in `src/types/index.ts`
- Mock data structure in `src/data/mockData.ts`
- README.md for overview
