import { type Config } from 'tailwindcss';
import { fontFamily, colors } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#EBEBEB',
        dark: '#1c2128',
        'dark-secondary': '#22272e',
        ...colors,
      },
      fontFamily: { sans: ['var(--font-space_grotesk)', ...fontFamily.sans] },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
