/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dana"],
      },
      screens: {
        xs: "390px",
        sm: "481px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
