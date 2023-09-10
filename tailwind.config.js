/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0060",
        secondary: "#00DFA2",
        tertiary: "#FFE900",
        primaryText: "#000000",
        secondaryText: "#FFFFFF",
        tertiaryText: "#002D72",
      },
      fontFamily: {
        custom: ["geoblack"],
      },
      screens: {
        mb: "520px",
        xxl: "1420px",
      },
    },
  },
  plugins: [],
};
