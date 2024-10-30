/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //Custom colors
        cusWhite: "#F1F1F3",
        cusLightBlue: "#F7F7F8",
        greyPriText: "#1A1A1A",
        cusYellow: "#FFD400",
        greySecText: "#656567",
        greybodyText: "#98989A",
        colorOption1: "#739CDA",
        colorOption2: "#DAA573",
        colorOption3: "#DAD673"
      },
      fontFamily:{
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none' /* Chrome, Safari, Opera */
          }
        }
      })
    }
  ],
}