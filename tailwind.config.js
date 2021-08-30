module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandGreen: '#0E6978',
        brandOrange: '#FF3D00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
