const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.teal,
      sky: colors.sky,
      neutral: colors.neutral,
      red: colors.red,
      white: "#FFFFFF"
    },
    fontFamily: {
      sans: ['Roboto', 'Open Sans'],
      handwritten: ['Permanent Marker']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
