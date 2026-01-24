/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'bn-gold-dark': {
          DEFAULT: '#b99153',
        },  
        'bn-black': {
          DEFAULT: '#0b1326',
        },
        'bn-gold-light': {
          DEFAULT: '#ebc78a',
        },

        // --- Paleta Secundária (Suporte/Neutros) ---
        'bn-silver': {
          DEFAULT: '#CBD5E1', // Para bordas finas
        },
        'bn-gray': {
          DEFAULT: '#334155', // Para textos secundários
        },
        'bn-paper': {
          DEFAULT: '#F8FAFC', // Para fundos de página
        },
      },
      backgroundImage: {
        'bn-gold-gradient': 'linear-gradient(to right, #B88A44, #EACD8C, #B88A44)',
      },
      fontFamily: {
        'lora-bold': ['LoraBold'],
        'lora-regular': ['LoraRegular'],
        'lora-medium': ['LoraMedium'],
      },
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      },
      keyframes: {
        'blink-to-right': {
          '0%': { transform: 'translateX(-30%)'},
          '40%, 70%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(30%)'}
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }  
      }
    },
  },
  plugins: [],
};
