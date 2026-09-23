/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-gray': {
          50: '#F8F8F8',
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#D9D9D9',
          600: '#666666',
          900: '#333333',
        }
      }
    },
  },
  plugins: [],
};
