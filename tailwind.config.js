module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',
          dark: '#818CF8',
        },
        secondary: {
          light: '#059669',
          dark: '#34D399',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
        text: {
          primary: {
            light: '#1F2937',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#6B7280',
            dark: '#D1D5DB',
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
