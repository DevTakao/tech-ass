/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
        lg: "20px",
        "2xl": "24px",
        hero: "clamp(30px, 10vw, 112px)",
      },
      colors: {
        pinkBright: "#FF60E6",
        pinkDim: "#FFADF2",
        light: "#F8F5F0",
        dark: "#1F392C",
        grey: "#D4D4D4",
      },
    },
  },
  plugins: [],
};
