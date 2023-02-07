/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};
