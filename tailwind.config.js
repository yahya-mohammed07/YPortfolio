/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Fredoka:['Fredoka'],
      Titillium:['Titillium'],
      Roboto:['Roboto'],
      Nunito:['Nunito']
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1A202C', // Dark mode background color
          text: '#FFFFFF', // Dark mode text color
          // Add more dark mode colors as needed
        },
      },
    },
  },
  plugins: [],
}
