module.exports = {
  purge: ["./*.html"],
  mode:"jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#FFFBF0",
        btn: {
          light: "#A4BC46",
          dark: "#85A019",
        },
      },
      fontFamily: {
        headline: "'Bebas Neue', cursive",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
