/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      
      extend: {
        
        spacing: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',  
          '3xl':'1700',   
          backgroundImage: {
            'hero-pattern': "url('https://cdn.pixabay.com/photo/2023/07/25/13/50/lake-8149111_1280.jpg')",
            'footer-texture': "url('/img/footer-texture.png')",
            
          } 
         
          
        }

          

      },
    },
    plugins: [
      
    ],
    }