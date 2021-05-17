module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],

  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        purple: "#250352",
        yellow: "#D79922",
        almostWhite: "#EDEDED",
        grey: "#707070"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
