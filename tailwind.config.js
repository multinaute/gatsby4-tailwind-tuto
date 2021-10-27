module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      md: "640px",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      display: ["Custom Font", "Other Font"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
