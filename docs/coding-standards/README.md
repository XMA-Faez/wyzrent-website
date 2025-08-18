# Coding Standards

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Images**: Next/Image for optimization
- **Component Variants**: class-variance-authority (CVA)
- **Utility Functions**: clsx + tailwind-merge (cn function)

## File Structure
```
app/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/          # Reusable UI components
├── lib/             # Utilities and helpers
├── public/          # Static assets
└── page.tsx         # Page components
```

## Naming Conventions

### Files & Folders
- **Components**: PascalCase (e.g., `Hero.tsx`, `PropertyShowcase.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `calculatePrice.ts`)
- **Pages**: kebab-case directories (e.g., `about-us/page.tsx`)
- **Assets**: kebab-case (e.g., `hero-background.jpg`)

### Code
- **Components**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: kebab-case (when custom CSS needed)
- **Props Interfaces**: PascalCase with "Props" suffix

## Component Standards

### Component Structure
```tsx
"use client"; // Only if needed

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Icon } from 'lucide-react';

interface ComponentNameProps {
  prop1: string;
  prop2?: number;
}

export default function ComponentName({ prop1, prop2 = 0 }: ComponentNameProps) {
  // State hooks
  const [state, setState] = useState();
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // Event handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // Render helpers
  const renderItem = () => {
    // Helper logic
  };
  
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Import Order
1. React/Next.js imports
2. Third-party libraries (motion, cva, etc.)
3. Local components and utilities (@/components, @/lib)
4. Types/interfaces
5. Assets/styles

### CVA Component Pattern
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants with cva
const componentVariants = cva(
  "base-classes", // Base styles
  {
    variants: {
      variant: {
        default: "variant-classes",
        primary: "primary-classes",
      },
      size: {
        sm: "small-classes",
        lg: "large-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

// Props interface extending VariantProps
interface ComponentProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  customProp?: string;
}

// Component implementation
export function Component({ className, variant, size, ...props }: ComponentProps) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)} {...props} />
  );
}
```

## Tailwind CSS Conventions

### Class Order
1. Layout (display, position, grid/flex)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Colors (background, text, border)
6. Effects (shadow, opacity, transform)
7. Transitions/Animations
8. Responsive modifiers (sm:, md:, lg:)

### Example
```tsx
<div className="flex items-center justify-between p-4 w-full text-lg font-medium text-gray-700 bg-white shadow-md hover:shadow-lg transition-shadow md:p-6">
```

## Animation Standards

### Framer Motion Usage
- Import from `motion/react` (not `framer-motion`)
- Keep animations performant (< 500ms for UI feedback)
- Use GPU-accelerated properties (transform, opacity)
- Implement viewport triggers for scroll animations

### Standard Animations
```tsx
// Fade In
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}

// Slide Up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }}

// Scale on Hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## TypeScript Guidelines

### Type Definitions
- Prefer interfaces over types for object shapes
- Use type for unions, primitives, and tuples
- Export shared types from dedicated files
- Avoid using `any` - use `unknown` if type is truly unknown

### Props Pattern
```tsx
interface ComponentProps {
  required: string;
  optional?: number;
  withDefault?: boolean;
  children?: React.ReactNode;
  className?: string;
}

// With default values
function Component({ 
  required, 
  optional, 
  withDefault = true,
  className = ""
}: ComponentProps) {
  // Component logic
}
```

## Performance Best Practices

### Images
- Use Next/Image component for automatic optimization
- Specify width and height or use fill with aspect-ratio
- Use appropriate formats (WebP for photos, SVG for icons)
- Implement lazy loading for below-fold images

### Code Splitting
- Use dynamic imports for heavy components
- Implement route-based splitting (automatic in Next.js)
- Lazy load third-party libraries when possible

### State Management
- Keep state as local as possible
- Use React Context for cross-component state
- Implement memo/useMemo for expensive computations
- Avoid unnecessary re-renders with useCallback

## Accessibility Standards

### Required Attributes
- `alt` text for all images
- `aria-label` for icon-only buttons
- `role` attributes where semantic HTML isn't sufficient
- Proper heading hierarchy (h1 -> h2 -> h3)

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Escape key closes modals/overlays

### Color & Contrast
- WCAG AA compliance (4.5:1 for normal text)
- Don't rely solely on color for information
- Test with color blindness simulators

## Git Commit Conventions

### Commit Message Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test additions/changes
- `chore`: Build process or auxiliary tool changes

### Examples
```
feat(hero): add video background support
fix(navigation): correct mobile menu z-index
docs: update component usage guidelines
style: standardize button border radius
refactor(services): extract service card component
```

## Error Handling

### User-Facing Errors
- Provide clear, actionable error messages
- Include recovery suggestions
- Log errors for debugging
- Implement error boundaries for component failures

### Development Errors
- Use TypeScript for compile-time catching
- Implement proper try-catch blocks
- Add meaningful error messages
- Use console.warn for deprecation notices