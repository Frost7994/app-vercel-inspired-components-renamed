const colors = require('tailwindcss/colors')
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default

const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme('colors'))

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.rose,
        tertiary: colors.zinc
      }
    }
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms')
  ]
}
