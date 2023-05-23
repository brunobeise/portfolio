/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: `#1c1c1f`,
      white: `white`,
      primary: `#6d35b0`,
      secondary: `#2d2e32`,
      grey: `#a6a9ab`,
      gradient: `
      #2d2e32;
      linear-gradient(90deg, rgba(36,35,39,1) 0%, rgba(45,46,50,1) 60%);
      `,
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
