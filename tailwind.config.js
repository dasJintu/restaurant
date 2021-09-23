module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/hero.jpeg')",
        "submenu-image": "url('/submenu.png')",
        "fresh-image": "url('/fresh.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
