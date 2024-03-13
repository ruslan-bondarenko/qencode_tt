import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        warn: '#FFFBE6',
        red: '#BF3131',
        gray: {
          100: '#FFFFFF',
          200: '#E3E6E9',
          300: '#BEC5CC',
          400: '#A1ABB5',
          500: '#33353F',
          600: '#20222C',
          700: '#090D18',
        },
        tone: {
          600: '#407ef7',
          700: '#316FEA',
        },
      },
      spacing: {
        '6.5': '1.625rem',
        '7': '28px',
        '7.5': '1.875rem',
        '13': '52px',
        '14': '56px',
        '15': '60px',
        '17': '68px',
        '22': '88px',
        '25': '100px',
        '28': '112px',
        '30': '120px',
        '50': '200px',
        '55': '220px',
        '100': '25rem',
        '105': '420px',
      },
      screens: {
        mm: '23.4375rem', // 375px
        sm: '37.5rem', // 600px
        md: '64rem', // 1024px
        xm: '72rem', // 1161px
        lg: '80rem', // 1280px
        xl: '94.5rem', // 1512px
        '2xl': '108rem', // 1728px
        '3xl': '120rem', // 1920px
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        basis: "var(--font-basis)",
      },
      fontSize: {
        '2xs': [
          '0.625rem' /* 10px */,
          {
            lineHeight: '0.75rem' /* 12px */,
            letterSpacing: '-0.01em',
          },
        ],
        xs: [
          '0.75rem' /* 12px */,
          {
            lineHeight: '1rem' /* 16px */,
            letterSpacing: '-0.01em',
          },
        ],
        s: [
          '0.875rem' /* 14px */,
          {
            lineHeight: '1.25rem' /* 20px */,
            letterSpacing: '-0.01em',
          },
        ],
        m: [
          '1rem' /* 16px */,
          {
            lineHeight: '1.5rem' /* 24px */,
            letterSpacing: '-0.01em',
          },
        ],
        l: [
          '1.125rem' /* 18px */,
          {
            lineHeight: '1.5rem' /* 24px */,
            letterSpacing: '-0.01em',
          },
        ],
        xl: [
          '1.375rem' /* 22px */,
          {
            lineHeight: '1.75rem' /* 28px */,
            letterSpacing: '-0.01em',
          },
        ],
        '2xl': [
          '1.75rem' /* 28px */,
          {
            lineHeight: '2.25rem' /* 36px */,
            letterSpacing: '-0.01em',
          },
        ],
        '3xl': [
          '2rem' /* 32px */,
          {
            lineHeight: '2.25rem' /* 36px */,
            letterSpacing: '-0.03em',
          },
        ],
        '4xl': [
          '2.5rem' /* 40px */,
          {
            lineHeight: '2.75rem' /* 44px */,
            letterSpacing: '-0.03em',
          },
        ],
        '5xl': [
          '3.5rem' /* 56px */,
          {
            lineHeight: '3.75rem' /* 60px */,
            letterSpacing: '-0.03em',
          },
        ],
        '6xl': [
          '4.5rem' /* 72px */,
          {
            lineHeight: '4.5rem' /* 72px */,
            letterSpacing: '-0.03em',
          },
        ],
      },
    },
  }
};
export default config;
