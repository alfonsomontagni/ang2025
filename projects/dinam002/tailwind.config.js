/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/dinam002/src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily:{
        pacix:["Pacifico"]
      }
    },
  },
  plugins: [require("daisyui")],
};
