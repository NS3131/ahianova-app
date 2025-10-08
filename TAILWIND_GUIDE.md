# Tailwind CSS Setup Guide

## Overview
This project uses **Tailwind CSS v4** with a comprehensive custom configuration that includes brand colors, custom utilities, animations, and responsive design patterns.

## 🎨 Brand Colors

### Primary Colors
- `brand-primary`: `#065f46` - Main brand color
- `brand-primary-hover`: `#047857` - Hover state
- `brand-primary-light`: `#10b981` - Light variant
- `brand-primary-dark`: `#064e3b` - Dark variant

### Secondary Colors
- `brand-sand`: `#f5f5dc` - Background color
- `brand-sand-light`: `#fefefe` - Light background
- `brand-sand-dark`: `#e5e5cc` - Dark background

### Brown Palette
- `brown-800`: `#5d4037`
- `brown-700`: `#6d4c41`
- `brown-600`: `#8d6e63`

## 🛠️ Custom Utilities

### Button Classes
```css
.btn-primary     /* Primary button with hover and focus states */
.btn-secondary   /* Secondary button with border */
```

### Layout Classes
```css
.card            /* Card component with shadow and border */
.input-field     /* Form input with focus states */
.text-gradient   /* Gradient text effect */
```

### Custom Spacing
- `18`: `4.5rem`
- `88`: `22rem`
- `128`: `32rem`

### Custom Border Radius
- `4xl`: `2rem`

## 🎭 Animations

### Custom Animations
- `animate-fade-in`: Fade in effect (0.5s)
- `animate-slide-up`: Slide up effect (0.3s)
- `animate-bounce-gentle`: Gentle bounce (2s infinite)

### Custom Shadows
- `shadow-brand`: Brand-colored shadow
- `shadow-brand-lg`: Large brand-colored shadow

## 📱 Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Example Usage
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## 🎯 Best Practices

### 1. Use the `cn` Utility
```tsx
import { cn } from '../utils/cn';

<button className={cn(
  'btn-primary',
  'text-lg',
  isActive && 'bg-brand-primary-light'
)}>
  Button
</button>
```

### 2. Component Styling
```tsx
// Good: Use utility classes
<button className="btn-primary hover:bg-brand-primary-hover">

// Good: Use custom utilities for complex patterns
<div className="card hover:shadow-brand-lg">
```

### 3. Responsive Design
```tsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🚀 Usage Examples

### Buttons
```tsx
// Primary button
<button className="btn-primary">Click me</button>

// Secondary button
<button className="btn-secondary">Cancel</button>

// Custom button with size
<Button text="Submit" variant="primary" size="lg" />
```

### Cards
```tsx
<div className="card hover:shadow-brand-lg transition-shadow duration-300">
  <h3 className="text-xl font-bold text-brand-primary">Card Title</h3>
  <p className="text-gray-600">Card content</p>
</div>
```

### Forms
```tsx
<input 
  type="email" 
  className="input-field" 
  placeholder="Enter email"
/>
```

### Animations
```tsx
<div className="animate-fade-in">
  <h1 className="text-gradient">Animated Title</h1>
</div>
```

## 🎨 Color Usage

### Text Colors
```tsx
<p className="text-brand-primary">Primary text</p>
<p className="text-gray-600">Secondary text</p>
<h1 className="text-gradient">Gradient text</h1>
```

### Background Colors
```tsx
<div className="bg-brand-sand">Sand background</div>
<div className="bg-brand-primary">Primary background</div>
```

### Border Colors
```tsx
<div className="border border-brand-primary">Primary border</div>
```

## 📦 File Structure

```
src/
├── index.css              # Global styles and custom utilities
├── utils/
│   └── cn.ts             # Class name utility
├── components/
│   ├── Button.tsx        # Enhanced button component
│   └── TailwindShowcase.tsx # Demo component
└── tailwind.config.ts    # Tailwind configuration
```

## 🔧 Configuration

The `tailwind.config.ts` file includes:
- Custom color palette
- Custom spacing values
- Custom animations and keyframes
- Custom shadows
- Extended font families

## 🎯 Performance Tips

1. **Use Tailwind's JIT mode** (enabled by default in v4)
2. **Purge unused styles** (automatic in v4)
3. **Use custom utilities** for repeated patterns
4. **Leverage the `cn` utility** for conditional classes

## 🚀 Getting Started

1. Use the existing utility classes for common patterns
2. Extend the configuration for new brand colors
3. Create custom utilities for complex patterns
4. Use the showcase component as a reference

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs/v4-beta)
- [Custom Utilities Guide](https://tailwindcss.com/docs/adding-custom-styles)
