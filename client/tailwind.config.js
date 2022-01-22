const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.teal,
      neutral: colors.neutral,
      white: "#FFFFFF"
    },
    fontFamily: {
      sans: ['Roboto']
    }
  },
  plugins: [],
}
