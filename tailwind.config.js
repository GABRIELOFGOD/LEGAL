import plugin from 'tailwindcss'

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
        'textSecondary': '#737373',
        'greener': '#70C174'
      },
      fontSize:{
        'heading':'56px',
        'main': '64px',
        'second': '48px'
      },
      textShadow:{
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 5px rgba(0, 0, 0, 0.6)',
        'lg': '5px 5px 15px rgba(0, 0, 0, 0.7)'
      },
      boxShadow: {
        'text': '1px 1px 2px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }){
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        {
          values: theme('textShadow')
        }
      )
    }),
  ],
}

