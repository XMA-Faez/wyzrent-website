# Component Library Documentation

## Current Components

### Layout Components

#### Header
- **Location**: `/app/components/layout/Header.tsx`
- **Dependencies**: Framer Motion, Lucide Icons
- **Props**: None
- **Features**:
  - Fixed positioning with backdrop blur
  - Responsive mobile menu
  - Scroll-based styling changes
  - Smooth scroll navigation
- **Issues**: 
  - Navigation links point to sections but should be separate pages
  - Needs consistent animation timing

#### Footer
- **Location**: `/app/components/layout/Footer.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

### Section Components

#### Hero
- **Location**: `/app/components/sections/Hero.tsx`
- **Dependencies**: Framer Motion
- **Props**: None
- **Features**:
  - Full video background with autoplay
  - Gradient overlay for text readability
  - Animated text entrance
  - Single CTA button
- **Improvements Needed**:
  - Better value proposition copy
  - Loading state for video
  - Accessibility controls for video

#### Services
- **Location**: `/app/components/sections/Services.tsx`
- **Dependencies**: Framer Motion, Lucide Icons
- **Props**: None
- **Features**:
  - 4 service cards in 2x2 grid
  - Step numbers with icons
  - Staggered animation on scroll
- **Data Structure**:
```tsx
{
  step: string;
  icon: ReactNode;
  title: string;
  description: string;
}
```

#### PropertyShowcase
- **Location**: `/app/components/sections/PropertyShowcase.tsx`
- **Dependencies**: Framer Motion, Lucide Icons
- **Props**: None
- **Features**:
  - Gallery with main image/video display
  - Thumbnail navigation
  - Lightbox for full-size viewing
  - Video playback controls
- **Issues**:
  - Using placeholder images
  - Heavy component needs optimization

#### WhyChooseUs
- **Location**: `/app/components/sections/WhyChooseUs.tsx`
- **Dependencies**: Framer Motion, Lucide Icons, NumberTicker
- **Props**: None
- **Features**:
  - Two-column layout (content + image)
  - Animated statistics cards
  - NumberTicker animation for stats
- **Stats Structure**:
```tsx
{
  icon: ReactNode;
  value: number;
  suffix?: string;
  label: string;
  decimalPlaces?: number;
}
```

#### OwnerTestimonials
- **Location**: `/app/components/sections/OwnerTestimonials.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

#### FAQ
- **Location**: `/app/components/sections/FAQ.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

#### CTA (Call to Action)
- **Location**: `/app/components/sections/CTA.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

#### HowItWorks
- **Location**: `/app/components/sections/HowItWorks.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

### UI Components

#### TrustBadges
- **Location**: `/app/components/ui/TrustBadges.tsx`
- **Dependencies**: Framer Motion, Next/Image
- **Props**: None
- **Features**:
  - Airbnb Superhost badge
  - Guest favorite rating (4.92)
  - Quality service badge
- **Assets Required**:
  - `/public/airbnb-superhost-badge.png`
  - `/public/feather.png`
  - `/public/feather-right.png`
  - `/public/quality-service-bg-removed.png`

#### NumberTicker
- **Location**: `/app/components/ui/NumberTicker.tsx`
- **Dependencies**: Framer Motion
- **Props**:
```tsx
{
  value: number;
  decimalPlaces?: number;
  suffix?: string;
}
```
- **Features**:
  - Animated number counting
  - Decimal support
  - Suffix support (e.g., "+", "%")

#### ScrollVelocity
- **Location**: `/app/components/ui/ScrollVelocity.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

#### RevenueCalculator
- **Location**: `/app/components/ui/RevenueCalculator.tsx`
- **Status**: Not yet reviewed
- **Props**: TBD

#### Button (New - CVA Implementation)
- **Location**: `/app/components/ui/Button.tsx`
- **Dependencies**: class-variance-authority, motion/react, @/lib/utils
- **Props**:
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "destructive" | "success";
  size?: "sm" | "default" | "lg" | "icon";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
```
- **Features**:
  - Built with class-variance-authority for type-safe variants
  - Framer Motion animations (hover, tap effects)
  - Loading state with spinner
  - Left and right icon support
  - Consistent with design system tokens
  - Full accessibility support
- **Variants**:
  - **Primary**: Blue background, white text (main CTAs)
  - **Secondary**: White background, gray border (alternative actions)
  - **Ghost**: Transparent background, hover effects (subtle actions)
  - **Outline**: Border with accent color (secondary emphasis)
  - **Destructive**: Red background (dangerous actions)
  - **Success**: Green background (positive actions)
- **Sizes**:
  - **sm**: 32px height, compact padding
  - **default**: 44px height, standard padding
  - **lg**: 56px height, prominent padding
  - **icon**: 40x40px square for icon-only buttons

## Component Best Practices

### Creating New Components

1. **File Structure**:
```tsx
// ComponentName.tsx
"use client"; // Only if using hooks/browser APIs

import statements...

interface ComponentNameProps {
  // Props definition
}

export default function ComponentName(props: ComponentNameProps) {
  // Component logic
}

// Helper components (if any)
function SubComponent() {
  // Sub-component logic
}
```

2. **Animation Guidelines**:
- Use `motion` components from `motion/react`
- Keep initial states subtle (opacity: 0, y: 20)
- Standard transition: `{ duration: 0.4, ease: "easeOut" }`
- Use viewport triggers for scroll animations: `viewport={{ once: true, amount: 0.3 }}`

3. **Responsive Design**:
- Mobile-first approach
- Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)
- Test on common breakpoints (375px, 768px, 1024px, 1440px)

4. **Performance**:
- Lazy load heavy components
- Use Next/Image for all images
- Implement loading states for async content
- Memoize expensive computations

## Common Patterns

### Section Wrapper
```tsx
<section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
  <div className="container mx-auto max-w-6xl">
    {/* Section content */}
  </div>
</section>
```

### Card Component
```tsx
<motion.div
  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
  whileHover={{ y: -2 }}
>
  {/* Card content */}
</motion.div>
```

### Button Variants (Updated - Use Button Component)
```tsx
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Trash2 } from "lucide-react";

// Primary CTA
<Button variant="primary" size="lg">
  Get Started
</Button>

// Secondary Action
<Button variant="secondary">
  Learn More
</Button>

// With Icons
<Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
  Continue
</Button>

<Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
  Download
</Button>

// Loading State
<Button variant="primary" loading>
  Processing...
</Button>

// Destructive Action
<Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
  Delete
</Button>

// Icon Only
<Button variant="ghost" size="icon">
  <Settings className="w-4 h-4" />
</Button>
```

## Testing Checklist

Before deploying any component:
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Performance optimized
- [ ] Cross-browser tested
- [ ] Documentation updated