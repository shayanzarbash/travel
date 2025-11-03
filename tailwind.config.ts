import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui-kit/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        md: '1280px',
      },
    },
    fontFamily: {
      primary: ['--fontYekanBakhFaNum', ...defaultTheme.fontFamily.sans],
      primary_en: ['--fontLato'],
    },
    colors: {
      transparent: 'transparent',
      background: {
        1: 'var(--color-background-1)',
        2: 'var(--color-background-2)',
        3: 'var(--color-background-3)',
      },
      text: {
        static: 'var(--color-text-static)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        orange: 'var(--color-text-orange)',
        orange_hover: 'var(--color-text-orange-hover)',
        green: 'var(--color-text-green)',
      },
      stroke: {
        static: 'var(--color-stroke-static)',
        primary: 'var(--color-stroke-primary)',
        secondary: 'var(--color-stroke-secondary)',
        tertiary: 'var(--color-stroke-tertiary)',
        fourth: 'var(--color-stroke-fourth)',
        orange: 'var(--color-stroke-orange)',
        orange_hover: 'var(--color-stroke-orange-hover)',
      },
      button: {
        hover_primary: 'var(--color-button-hover-primary)',
        secondary: 'var(--color-button-secondary)',
        tertiary: 'var(--color-button-tertiary)',
      },
      green: 'var(--color-green)',
      blue: 'var(--color-blue)',
      setareyek: 'var(--color-setareyek)',
      rondtarin: 'var(--color-rondtarin)',
      setareaval: 'var(--color-setareaval)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
      successful: 'var(--color-transparent-02)',
      failed: 'var(--color-transparent-01)',
    },
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        h1_black: [
          '72px',
          {
            lineHeight: '112px',
            fontWeight: '900',
          },
        ],
        h1_bold: [
          '72px',
          {
            lineHeight: '112px',
            fontWeight: '700',
          },
        ],
        h2_black: [
          '36px',
          {
            lineHeight: '56px',
            fontWeight: '900',
          },
        ],
        h2_bold: [
          '36px',
          {
            lineHeight: '56px',
            fontWeight: '700',
          },
        ],
        t1_bold: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],
        t1_black: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '900',
          },
        ],
        t1_regular: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '400',
          },
        ],
        t1_light: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '300',
          },
        ],
        t2_bold: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        t2_regular: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],
        t2_light: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '300',
          },
        ],
        b1_bold: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '700',
          },
        ],
        b1_regular: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        b1_light: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '300',
          },
        ],
        b2_bold: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '700',
          },
        ],
        b2_regular: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        b2_light: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '300',
          },
        ],
        c1_bold: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        c1_regular: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        c1_light: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '300',
          },
        ],

        h1_black_md: [
          '36px',
          {
            lineHeight: '56px',
            fontWeight: '900',
          },
        ],
        h1_bold_md: [
          '36px',
          {
            lineHeight: '56px',
            fontWeight: '700',
          },
        ],
        h2_black_md: [
          '28px',
          {
            lineHeight: '44px',
            fontWeight: '900',
          },
        ],
        h2_bold_md: [
          '28px',
          {
            lineHeight: '44px',
            fontWeight: '700',
          },
        ],
        t1_bold_md: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '700',
          },
        ],
        t1_black_md: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '900',
          },
        ],
        t1_regular_md: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '400',
          },
        ],
        t1_light_md: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '300',
          },
        ],
        t2_bold_md: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '700',
          },
        ],
        t2_regular_md: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        t2_light_md: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '300',
          },
        ],
        b1_bold_md: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '700',
          },
        ],
        b1_regular_md: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        b1_light_md: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '300',
          },
        ],
        b2_bold_md: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        b2_regular_md: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        b2_light_md: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '300',
          },
        ],
        c1_bold_md: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '700',
          },
        ],
        c1_regular_md: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        c1_light_md: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '300',
          },
        ],

        h1_black_sm: [
          '28px',
          {
            lineHeight: '44px',
            fontWeight: '900',
          },
        ],
        h1_bold_sm: [
          '28px',
          {
            lineHeight: '44px',
            fontWeight: '700',
          },
        ],
        h2_black_sm: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '900',
          },
        ],
        h2_bold_sm: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],
        t1_bold_sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        t1_black_sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '900',
          },
        ],
        t1_regular_sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        t1_light_sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '300',
          },
        ],
        t2_bold_sm: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '700',
          },
        ],
        t2_regular_sm: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        t2_light_sm: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '300',
          },
        ],
        b1_bold_sm: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        b1_regular_sm: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        b1_light_sm: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '300',
          },
        ],
        b2_bold_sm: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '700',
          },
        ],
        b2_regular_sm: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        b2_light_sm: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '300',
          },
        ],
        c1_bold_sm: [
          '8px',
          {
            lineHeight: '12px',
            fontWeight: '700',
          },
        ],
        c1_regular_sm: [
          '8px',
          {
            lineHeight: '12px',
            fontWeight: '400',
          },
        ],
        c1_light_sm: [
          '8px',
          {
            lineHeight: '12px',
            fontWeight: '300',
          },
        ],
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        black_1: '0px 1px 8px 0px rgba(32, 32, 32, 0.12)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher:
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        rotating: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
        enter: {
          '0%': { transform: 'translateX(110%)' },
          '100%': { transform: 'translateX(0)' },
        },
        out: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(110%)' },
        },
      },
      animation: {
        'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
        rotating: 'rotating 30s linear infinite',
        'spin-1.5': 'spin 1.5s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite',
        enter: 'enter 0.3s',
        out: 'out 0.3s',
      },
      backgroundImage: {
        hero_pattern: "url('../../public/static/images/home/banner.jpg')",
        button_primary:
          'linear-gradient(93deg, #F66B38 -0.65%, #FF9000 104.32%, #FF9000 104.32%)',
        button_disable_primary:
          'linear-gradient(92deg, #FBB69B 0%, #FFC782 100%)',
        image_card:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.60) 100%)',
        image_card_2:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.40)0%, rgba(0, 0, 0, 0.40)100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundColor: {
        black_gradient: 'rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    backgroundBlendMode: ['responsive'],
    backdropFilter: ['responsive'],
  },
};
export default config;
