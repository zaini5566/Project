/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray': '#8F95A9',
        'text-color': '#71788E' , 
        'button-bg-color': '#6968EC' ,
        'profile-text': '#444753' ,
        
      }
    },
  },
  plugins: [],
}

