import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#001d0c",
          100: "#e6f1ec",
          200: "#b3d4c5",
          300: "#80b89e",
          400: "#4d9b77", 
          500: "#1a7f50",
          600: "#146640",
          700: "#0f4d30",
          800: "#093420",
          900: "#041b10",
        },
        secondary: {
          DEFAULT: "#a78738",
          50: "#FAF9F2",
          100: "#F7F5E6",
          200: "#E8E1C3",
          300: "#DBD0A2",
          400: "#C2AD69",
          500: "#a78738",
          600: "#96762F",
          700: "#7D5B1F",
          800: "#634114",
          900: "#4A2C0B",
          950: "#301905",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
