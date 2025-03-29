/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary : "#95E4FE",
        white: "#FFFFFF",
        grey: {
          DEFAULT: "#D9D9D9",
          100: "#CCCBCB",
        }
      },
      fontFamily: {
        nunRegular: ["Nunito-Regular"],
        nunBold: ["Nunito-Bold"]
      }
    },
  },
  plugins: [],
}