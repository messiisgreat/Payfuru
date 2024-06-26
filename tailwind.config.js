/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "smallShadow": "3px 3px 3px 3px rgba(0, 0, 0, 0.15)"
      }
    },
    screens: {
      'phone': '426px',

      'tablet': '769px',

      'laptop': '1025px',

      'desktop': '1281px',
    },
    colors: {
      'grayLetter': '#666',
      'grayBorder': '#eaeaea',
      'hoverButton': '#c4c4c4',
      'inputBorder': '#b7b6b6',
      'backButtonBg': '#651414',
      'updataTagBg': '#FF8A66',
      'viewContinue': '#FF3C00',
      'black': '#000',
      'green': '#00ff00',
      'nabBg': '#FF6333',
      'white': '#fff',
      'red': '#FF0000',
      'bluetext': '#4c8beb',
      'bluestrongtext': '#060892',
      'inputBg': '#F7F7F7',
      'bgtransfer': 'rgba(255,255,255,0.5)',
      'transferBorder': 'rgba(255,255,255,0.1)'
    }
  },
  plugins: [],
};
