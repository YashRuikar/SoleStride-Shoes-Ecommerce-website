/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'}, 
      'lg': {'max': '991px'}, 
      'md': {'max': '767px'}, 
      'sm': {'max': '550px'}, 
      'xsm': {'max': '375px'}, 
    }
  },
  plugins: [],
}
