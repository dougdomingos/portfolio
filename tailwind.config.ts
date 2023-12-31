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
        mono: ['var(--font-roboto-mono)']
      },

      colors: {
        black: {
          light: '#232323',
          DEFAULT: '#141414',
          dark: '#080808',
        },

        white: {
          light: '#ffffff',
          DEFAULT: '#fafafa',
          dark: '#e1e1e1',
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
