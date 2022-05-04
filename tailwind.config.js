const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(0.6)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        loading: "loading 2s ease infinite",
      },
      delay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
      },
    },
    colors: {
      transparent: "transparent",
      gray: colors.gray,
      teal: colors.teal,
      white: colors.white,
      slate: colors.slate,
      watusi: {
        DEFAULT: "#FEDBD0",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFAF8",
        500: "#FEDBD0",
        600: "#FDB199",
        700: "#FC8762",
        800: "#FA5D2B",
        900: "#E93B05",
      },
      "woody-brown": {
        DEFAULT: "#442C2E",
        50: "#AB7D81",
        100: "#A37075",
        200: "#8E5C60",
        300: "#764C50",
        400: "#5D3C3F",
        500: "#442C2E",
        600: "#221617",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        { values: theme("delay") }
      );
    }),
  ],
};
