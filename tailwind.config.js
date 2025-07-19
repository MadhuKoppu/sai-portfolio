// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated Color Palette for a softer, more vibrant light UI
        'brand-primary': '#4F46E5', // A strong, vibrant indigo for primary actions/highlights
        'brand-secondary': '#8B5CF6', // A softer purple for secondary elements
        'brand-accent': '#10B981', // A fresh green for accents/success
        'bg-light': '#F8FAFC', // Very light off-white for main background
        'bg-card': '#FFFFFF', // Pure white for card backgrounds
        'text-dark': '#1F2937', // Dark gray for main text
        'text-medium': '#4B5563', // Medium gray for secondary text/paragraphs
        'text-light': '#D1D5DB', // Very light gray for subtle lines/dividers
        'border-light': '#E5E7EB', // Light gray for borders
        'hover-light': '#EEF2FF', // Very light indigo for hover states
        'shadow-dark': 'rgba(0,0,0,0.08)', // Soft shadow color
        'shadow-medium': 'rgba(0,0,0,0.05)', // Even softer shadow color
      },
      fontFamily: {
        // Define specific font families. Ensure these are loaded via _document.tsx
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // Suggest Fira Code for code blocks/dev feel
      },
      boxShadow: {
        // Custom shadow definitions for better depth
        'soft-lg': '0 10px 15px -3px var(--shadow-dark), 0 4px 6px -2px var(--shadow-medium)',
        'soft-xl': '0 20px 25px -5px var(--shadow-dark), 0 8px 10px -6px var(--shadow-medium)',
        'card-hover': '0 15px 25px -5px rgba(0,0,0,0.12), 0 8px 10px -6px rgba(0,0,0,0.06)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};