/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#303030",
      },
      boxShadow: {
        custom: "0 2px 12px rgba(0, 0, 0, 0.12)",
      },
      container: {
        screens: {
          '2xl': '1280px', 
        },
      },
    },
  },
  plugins: [],
};