/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/todo001/src/**/*.{html,ts,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}