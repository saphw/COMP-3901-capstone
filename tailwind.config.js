module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#2931B4",
      secondary: "#F37352",
      light: "#F7FBFE",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [require("flowbite/plugin")],
};
