module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        'primary': '#E60023',
        'dark': '#111111',
        'lightHover': '#d7d7d7',
        'muted':'#717171'
      }
    },
  },
  plugins: [],
}
