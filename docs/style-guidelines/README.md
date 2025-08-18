# Style Guidelines

## Design Tokens

### Colors
```css
/* Primary Palette */
--color-primary: #2563eb; /* Blue 600 */
--color-primary-hover: #1d4ed8; /* Blue 700 */
--color-primary-light: #dbeafe; /* Blue 100 */

/* Neutral Palette */
--color-black: #000000;
--color-white: #ffffff;
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;

/* Semantic Colors */
--color-success: #10b981; /* Green 600 */
--color-warning: #f59e0b; /* Yellow 500 */
--color-error: #ef4444; /* Red 500 */

/* Brand Color Palette - Subtle Enhancement */
--color-purple-50: #faf5ff;
--color-purple-600: #9333ea;
--color-rose-50: #fff1f2;
--color-rose-400: #fb7185;
--color-rose-500: #f43f5f;
--color-rose-600: #e11d48;
--color-emerald-50: #ecfdf5;
--color-emerald-400: #34d399;
--color-emerald-600: #059669;
--color-amber-50: #fffbeb;
--color-amber-600: #d97706;
--color-yellow-50: #fefce8;
--color-yellow-500: #eab308;
```

### Typography Scale
```css
/* Font Sizes - Desktop */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Spacing System (8px Grid)
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px - Subtle rounding */
--radius-md: 0.375rem;   /* 6px - Default buttons */
--radius-lg: 0.5rem;     /* 8px - Cards, inputs */
--radius-xl: 0.75rem;    /* 12px - Modals */
--radius-2xl: 1rem;      /* 16px - Large cards */
--radius-3xl: 1.5rem;    /* 24px - Hero sections */
--radius-full: 9999px;   /* Pills, avatars */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Animation Durations
```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;

/* Standard easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

## Component Patterns

### Buttons
- Primary: Blue background, white text, hover darker
- Secondary: White background, gray border, hover gray background
- Ghost: Transparent background, text only, hover background
- Consistent padding: `px-6 py-3` (normal), `px-8 py-4` (large)
- Border radius: `rounded-lg` (8px) for all buttons

### Cards
- Background: White with gray-100 on hover
- Border: 1px solid gray-200
- Border radius: `rounded-2xl` (16px)
- Shadow: `shadow-md` default, `shadow-lg` on hover
- Padding: `p-6` minimum

### Forms
- Input border radius: `rounded-lg` (8px)
- Focus state: Blue border with ring
- Error state: Red border with error message below
- Label: Above input, font-medium, gray-700

## Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

## Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-overlay: 30;
--z-modal: 40;
--z-popover: 50;
--z-tooltip: 60;
--z-notification: 70;
```

## Accessibility Guidelines
- Minimum touch target: 44x44px
- Color contrast: WCAG AA minimum (4.5:1 for normal text)
- Focus indicators: Visible on all interactive elements
- Alt text: Required for all images
- ARIA labels: For icon-only buttons

## Motion Guidelines
- Respect `prefers-reduced-motion`
- Keep animations under 500ms for UI feedback
- Use `ease-out` for enter animations
- Use `ease-in` for exit animations
- Avoid animating layout properties (use transform/opacity)