/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        mm: "375px",
        ml: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "2560px",
      },
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
