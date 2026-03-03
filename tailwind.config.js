/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#f4d06f",
          400: "#e6b84f",
          500: "#c9972b"
        }
      }
    }
  },
  plugins: []
};
