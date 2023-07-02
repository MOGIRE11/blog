/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    
  ],
  theme: {
    extend: {
      colors: {
        'chineseBlack': '#111111',
        'btnGreen':'#88C540',
      },
    },
  },
  
  plugins: [],
}

