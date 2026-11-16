/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Readex Pro covers Latin and Arabic, so mixed-script text shares one voice
        sans: ['Readex Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Lapis — the glazed blue of the Ishtar Gate
        brand: {
          50: '#eef2fb',
          100: '#dce4f7',
          200: '#b9c8ee',
          300: '#8ea6e2',
          400: '#5f7fd3',
          500: '#3d60c1',
          600: '#2747a8',
          700: '#1f3a8c',
          800: '#1a3070',
          900: '#16275a',
          950: '#0d1630',
        },
        // Glaze gold — decoration on light, text accent on dark
        ochre: {
          200: '#f2e3bf',
          300: '#e9c77a',
          400: '#e3b550',
          500: '#c8952e',
          600: '#a67722',
        },
        ink: {
          DEFAULT: '#0d1630',
          soft: '#142042',
        },
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-down': 'slide-down 0.2s ease-out both',
      },
    },
  },
  plugins: [],
}
