/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '4px',
      '4': '6px',
      '6': '8px',
      '8': '10px',
    },

    extend: {
      spacing:{
        '10px': '10px',
      }
    },
  },
  plugins: [],
}