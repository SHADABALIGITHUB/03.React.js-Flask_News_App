/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

       'active':'black',
       
       colors:{
        'light':'#fff',
        'dark':'#000',
        'my-nav':'#202c33',
        'my':'#00a884',
       },
     
    },
  },
  plugins: [
    function ({addUtilities}){

      const value={
         ".active":{
            color:'#00a884',
            
            borderBottom:'1px solid #00a884'

         },
      };

      addUtilities(value,[]);

    }
  ],
}

