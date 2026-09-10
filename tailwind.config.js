/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#142137",
        navyDeep: "#0E1728",
        gold: "#B8923F",
        goldLight: "#D4B267",
        stone: "#EDE6D8",
        cream: "#FAF8F4",
        charcoal: "#24262B",
        charcoalSoft: "#4A4D55",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Public Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1140px",
      },
    },
  },
  plugins: [],
}
