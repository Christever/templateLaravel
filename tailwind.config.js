// Tailkit (Tailwind CSS v3 Configuration)
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
        
      },
      container: {
                center: true,
            },
            colors: {
                primary: {
                    DEFAULT: '#CECE5A',
                },
                secondary: {
                    DEFAULT: '#BA704F',
                },
                danger: {
                  DEFAULT: 'rgb(252,165,165)'
                },
                success: {
                  DEFAULT: "rgb(134,239,172)"
                },
                warning: {
                  DEFAULT: "#FAE392"
                },
                info: {
                  DEFAULT: "#8BE8E5"
                }
            },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      zIndex: {
        '1': 1,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                opacity: '.75',
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
    plugin(function({ addUtilities }) {
      const utilFormSwitch = {
        '.form-switch': {
          'border': 'transparent',
          'background-color': colors.gray[300],
          'background-image': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          'background-position': 'left center',
          'background-repeat': 'no-repeat',
          'background-size': 'contain !important',
          'vertical-align': 'top',
          '&:checked': {
            'border': 'transparent',
            'background-color': 'currentColor',
            'background-image': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            'background-position': 'right center',
          },
          '&:disabled, &:disabled + label': {
            'opacity': '.5',
            'cursor': 'not-allowed',
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
}
