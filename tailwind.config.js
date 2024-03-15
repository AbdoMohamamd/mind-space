/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        banner: "url('../../public/images/banner.svg')",
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        georama: ['var(--font-georama)'],
      },
      colors: {
        'primary-red': '#Fe424c',
      },
      screens:{
        'xs':'400px'
      }
    },
  },
  plugins: [],
};
