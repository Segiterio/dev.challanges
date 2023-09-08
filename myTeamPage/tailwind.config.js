/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth:{
         "8xl" : "1440px"
      },
      fontSize: {
         "xss": ["10px","1.3"]
      },
      fontFamily:{
         "ptSerif":["'PT Serif'","serif"],
         "Montserrat":["Montserrat" ,"sans"],
         "Poppins":["Poppins","sans"]
      }
    },
  },
  plugins: [],
}

