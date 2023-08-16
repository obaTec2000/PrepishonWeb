/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        280: "repeat(auto-fit, minmax(280px,1fr))",
      },
    },
  },
  plugins: [],
};
