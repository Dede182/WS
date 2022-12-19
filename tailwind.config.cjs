/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
  mode: "jit",
  theme: {
    extend: {
      padding:{
          'ysm' : '32px',
          'xsm' : '56px'
      },
      colors: {
        primary: "#353535",
        secondary: "#F1F1F3",
        line: "#D9D9D9",
        body : "#5A5757",
        whita : "#FEFEFE",
        mute : "#8F8F8F",
        active : "#2F2E2E",
        bold : "#171717",
        whites : {
          100 : "#EEEEEF",
          200 : "#F1F1F2",
          300 : "#F3F3F3",
        },
        login : "#F1F1F3",
        detail : "#F7F7F8",
        award : {
          100 : "#EEEEF0",
          200 : "#EDEDEF",
        }
      },
      fontSize : {
        reg : "14px"
      },
      fontFamily:{
        shippo : ['Shippori Mincho B1', "serif"],
        cinzel : [ 'Cinzel', 'serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}