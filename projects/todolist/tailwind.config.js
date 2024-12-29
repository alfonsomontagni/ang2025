/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/jasm001/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}