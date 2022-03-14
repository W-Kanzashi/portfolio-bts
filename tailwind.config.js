module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
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
  plugins: [],
};
