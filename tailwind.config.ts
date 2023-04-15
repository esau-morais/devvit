import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-space_grotesk)', ...fontFamily.sans] },
    },
  },
  plugins: [],
} satisfies Config;
