/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        black: "#0f172a",
        basic: "#94a3b8",
        footer: "",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
