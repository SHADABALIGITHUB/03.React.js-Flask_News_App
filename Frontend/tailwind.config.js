/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        'extralight':'#E0FBE2',
        'light':'#BFF6C3',
        'dark':'#B0EBB4',
        'extradark':'#ACE1AF',
        'highdark':'#76d27b',


       }
    },
  },
  plugins: [],
}

