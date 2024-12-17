/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: {
          dark: "#0E1217",
          darkDimmed: "#141A21",
          light: "#ffffff",
          lightDimmed: "#FBFDFF",
        },
        textColor: {
          dark: "#FFFFFF",
          darkDimmed: "#A8B2BC",
          light: "#0E1217",
          lightDimmed: "#67717B"
        },
        primary: {
          default: "#2C46F1",
          light: "#96A3F8"
        },
        secondaryColor: "#29EBD4"
      },
      zIndex: {
        top: "9998",
        loader: "9999",
      }
    },
  },
  plugins: [],
};