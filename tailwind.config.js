/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#39DB4A",
        "secondary-color": "#000000",
        "primary-color": "#FF6868",
        "bg2-color": "#C1F1C6",
      },
      container: {
        center: true,
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
