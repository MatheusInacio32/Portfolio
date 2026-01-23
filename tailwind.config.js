module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3730A3',  // Indigo mais profundo e sério
          dark: '#A5B4FC',   // Indigo suave para contraste
        },
        secondary: {
          light: '#0F766E',  // Teal profissional
          dark: '#5EEAD4',   // Teal suave
        },
        background: {
          light: '#F8FAFC',  // Off-white elegante (não branco puro)
          dark: '#0F172A',   // Azul-escuro profissional (slate-900)
        },
        text: {
          primary: {
            light: '#0F172A', // Quase preto, alta legibilidade
            dark: '#F1F5F9',  // Off-white suave
          },
          secondary: {
            light: '#475569', // Cinza médio profissional
            dark: '#94A3B8',  // Cinza claro equilibrado
          },
        },
      },
      fontSize: {
        '19px': '19px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
