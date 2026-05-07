/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "ui-serif", "serif"],
      },
      colors: {
        paper: "#FAFAF8",
        ink: "#1E1E1E",
        muted: "#666666",
        plum: "#5C5470",
        indigo: "#4A4E91",
        line: "#E7E3DC"
      }
    },
  },
  plugins: [],
};
