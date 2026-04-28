/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e27',
        foreground: '#e4e4e7',
        'card-bg': '#111829',
        'card-border': '#1f2937',
        primary: '#10b981',
        'primary-light': '#34d399',
        secondary: '#3b82f6',
        accent: '#f59e0b',
        'accent-red': '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
