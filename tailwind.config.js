const { color } = require("framer-motion");

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-black': '#0a0a0a',  // Defina a cor que deseja
        'darker-black': '#000000'  // Uma segunda cor ainda mais escura
      },
    },
  },
  plugins: [],
};
