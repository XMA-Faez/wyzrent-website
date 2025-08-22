# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WYZRENT is a luxury short-term rental management website built with Next.js 15, TypeScript, and Tailwind CSS. The site showcases property management services in Dubai with premium UI/UX design, animations, and revenue calculation features.

## Common Development Commands

```bash
# Development
bun dev              # Start development server with turbo mode on localhost:3000
bun run dev          # Alternative using npm

# Build & Production
bun run build        # Build for production
bun start            # Start production server
bun run build        # Alternative using npm

# Code Quality
bun run lint         # Run ESLint checks
```

Note: TypeScript and ESLint errors are currently ignored during builds (see next.config.ts).

## High-Level Architecture

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion (motion/react) 11.0.8
- **UI Library**: Custom components with class-variance-authority (CVA)
- **Icons**: Lucide React
- **Forms**: react-hook-form

### Project Structure
```
app/
├── components/
│   ├── layout/       # Global layout components (Header, Footer)
│   ├── sections/     # Page sections (Hero, Services, FAQ, etc.)
│   └── ui/          # Reusable UI components (Button, RevenueCalculator, etc.)
├── styles/          # Global styles and design tokens
├── page.tsx         # Main landing page
└── layout.tsx       # Root layout with metadata

docs/                # Comprehensive documentation
├── style-guidelines/    # Design system, colors, typography
├── coding-standards/    # Code conventions, patterns
├── components/         # Component documentation
└── architecture/       # Technical decisions

lib/
└── utils.ts         # Utility functions including cn() for className merging
```

### Key Architectural Patterns

1. **Component Organization**: Components are organized by type (layout, sections, ui) with barrel exports (index.ts) for clean imports.

2. **CVA Pattern**: UI components use class-variance-authority for variant management with the cn() utility function for className merging.

3. **Motion Animations**: All animations use motion/react (NOT framer-motion) with standard patterns for fade, slide, and scale effects.

4. **Image Optimization**: Uses Next/Image with configured remote patterns for Unsplash, Hostaway, and demo content.

5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).

### Important Configuration

**next.config.ts**:
- TypeScript errors ignored in builds (`ignoreBuildErrors: true`)
- ESLint errors ignored in builds (`ignoreDuringBuilds: true`)
- Remote image domains configured for external content

**Import Aliases**:
- `@/*` maps to root directory for clean imports

### Documentation Standards

Before making changes, consult:
- `/docs/style-guidelines/README.md` - Design tokens, colors, typography, spacing
- `/docs/coding-standards/README.md` - Component patterns, TypeScript guidelines, naming conventions

After making changes, update relevant documentation in the `/docs` directory.

### Component Development Patterns

1. **Standard Component Structure**:
   - Use default exports for page components
   - Interface names end with "Props"
   - Keep state local when possible
   - Use "use client" directive only when needed

2. **Tailwind Class Order**:
   - Layout → Spacing → Sizing → Typography → Colors → Effects → Transitions → Responsive

3. **Animation Standards**:
   - Keep animations under 500ms for UI feedback
   - Use GPU-accelerated properties (transform, opacity)
   - Implement viewport triggers for scroll animations

### Key UI Components

- **RevenueCalculator**: Interactive calculator with area/bedroom/furnishing inputs
- **PropertyShowcase**: Image gallery with motion animations
- **WhatsAppWidget**: Floating contact widget
- **TrustBadges**: Animated statistics display
- **ScrollVelocity**: Infinite scroll animation component

### Development Workflow

1. Check existing patterns in similar components before creating new ones
2. Follow the established CVA pattern for components with variants
3. Use the cn() utility for className merging
4. Maintain consistent animation patterns using motion/react
5. Update documentation after significant changes
