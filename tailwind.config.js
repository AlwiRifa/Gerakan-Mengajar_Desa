/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0C1B33',
        secondary: '#60FFDD',
        accent: '#16315C',
        neutral : '#D9F4FF'
      },
      backgroundImage: {
        'elips1' : "url('../src/assets/elips1.svg')",
        'elips2' : "url('../src/assets/elips2.svg')",
      }
    },
  },
  plugins: [],
};
