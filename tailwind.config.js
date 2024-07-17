/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font : ['Belanosima', 'sans-serif'],
      },
      colors: {
       
          primary: '#f97316',
          secondary: '#00FF00',
      
      },
    },
  },
  plugins: [],
};
