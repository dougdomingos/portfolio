import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-poppins)'],
        sans: ['var(--font-inter)'],
      },

      colors: {
        black: {
          DEFAULT: '#1a1a1a',
          900: '#080808',
        },

        white: {
          DEFAULT: '#fafafa',
          900: '#ffffff',
        },

        primary: {
          light: '#c6d9f9',
          DEFAULT: '#4281ec',
          dark: '#142747',
        },
      },
    },
  },

  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
export default config;
