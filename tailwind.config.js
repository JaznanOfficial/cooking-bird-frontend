/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": ['Ubuntu', 'sans-serif']
      },
      colors: {
        'navy-900':'#231E41'
      }
    },
    
  },

  plugins: [require("daisyui","flowbite/plugin")],


}
