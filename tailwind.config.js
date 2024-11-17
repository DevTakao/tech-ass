/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
        lg: "20px",
        "2xl": "24px",
      },
      colors: {
        pinkBright: "#FF60E6",
        pinkDim: "#FFADF2",
        light: "#F8F5F0",
        dark: "#1F392C",
      },
    },
  },
  plugins: [],
};
