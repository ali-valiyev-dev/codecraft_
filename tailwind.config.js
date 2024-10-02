/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: {
          blue: "#1e299c",
          "dark-blue": "#2a3582",
          "very-dark-blue": "#1d234c",
          "light-blue": "#0693e3",
          "very-light-blue": "#30d1ff",
        },
        neutral: {
          black: "#000000",
          white: "#ffffff",
          green: "#008000",
          red: "#ff0000",
        },
      },
    },
  },
  plugins: [],
};
