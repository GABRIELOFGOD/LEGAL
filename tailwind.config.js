/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#252B42',
        'secondary': '#D0A144',
        'card': '#E8E8E8',
        'textSecondary': '#737373'
      },
      fontSize:{
        'heading':'50px'
      }
    },
  },
  plugins: [],
}

