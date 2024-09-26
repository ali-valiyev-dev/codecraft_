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
          blue: "#1E299C",
          lightBlue: "#30D1FF",
          vividCyanBlue: "#0693e3",
          vividGreenCyan: "#00d084",
          vividRed: "#cf2e2e",
          luminousVividOrange: "#ff6900",
          luminousVividAmber: "#fcb900",
          vividPurple: "#9b51e0",
        },
        neutral: {
          text: "#7A7A7A",
          accent: "#989898",
          bodyText: "#3F3F46",
          black: "#000000",
          white: "#ffffff",
          cyanBluishGray: "#abb8c3",
        },
        soft: {
          palePink: "#f78da7",
          lightGreenCyan: "#7bdcb5",
          paleCyanBlue: "#8ed1fc",
        },
      },
    },
  },
  plugins: [],
};
