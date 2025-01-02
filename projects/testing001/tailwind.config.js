 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./projects/testing001/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}