/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand, sans-serif"],
      },
      textColor: {
        skin: {
          muted: "var(--color-muted-text)",
          secondary: "var(--color-secondary)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          dark: "var(--color-dark)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
