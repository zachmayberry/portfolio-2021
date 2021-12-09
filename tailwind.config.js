const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.js', 
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#020E36',
      white: '#ffffff',
      green: '#3ECF8E',
      yellow: '#FFB814',
      purple: '#5533FF',
      light: '#F5F7FF'
    },
    fontFamily: {
      'sans': ['proxima-nova', ...defaultTheme.fontFamily.sans],
      'serif': ['cubano', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      height: {
        'screen-half': '50vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
