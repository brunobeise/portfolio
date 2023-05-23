/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      bg: `#1c1c1f`,
      white: `white`,
      primary: `#6d35b0`,
      secondary: `#2d2e32`,
      grey: `#a6a9ab`,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      medium: "Source Code Pro Medium",
      light: "Source Code Pro Light",
      bold: "Source Code Pro Bold",
    },
  },
  plugins: [],
};
