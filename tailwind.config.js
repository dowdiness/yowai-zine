const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./content/**/*.md", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans JP'", "'Roboto Mono'", "Consolas", "'Courier New'", ...defaultTheme.fontFamily.sans],
      serif: ["'Noto Serif JP'", "'Roboto Mono'", ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    container: {
      center: true,
      width: {
        DEFAULT: '',
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
          },
        },
      }),
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        240: "60rem",
        320: "80rem",
        400: "100rem",
        440: "110rem",
        480: "120rem",
        520: "130rem",
        640: "160rem",
        800: "200rem",
        960: "240rem",
        1120: "280rem",
        1280: "320rem",
        1440: "360rem",
        1600: "400rem",
        1760: "440rem",
      },
      maxWidth: {
        'screen-xl': "1280px",
      },
      margin: {
        screen: '0 calc(50% - 50vw)',
      },
      colors: {
        gray: colors.trueGray,
        neumorphism: "#e0e5eb",
        yowai: "#519fed",
      },
      fontSize: {
        'xxs': ['0.5rem', '1rem'],
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        },
        '.text-character': {
          textJustify: 'inter-character'
        },
        '.text-upright': {
          textOrientation: 'upright'
        },
        '.text-sideways': {
          textOrientation: 'sideways'
        },
        '.text-tcy': {
          WebkitTextCombine: 'horizontal',
          MsTextCombineHorizontal: 'all',
          textCombineUpright: 'all',
        },
        '.outline': {
          WebkitTextStroke: '1px black',
          WebkitTextFillColor: 'white',
        },
        '.shape-outside': {
          shapeOutside: 'circle(50%)'
        }
      }
      addUtilities(newUtilities, ['responsive'])
      addComponents({
        ".aspect": {
          position: "relative",
          width: "100%",
          height: "0",
          "> *": {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          },
        },
        ".ratio-16-9": {
          paddingBottom: "56.25%",
        },
        ".neumorphism": {
          textShadow:
            "-4px -4px 8px rgba(255,255,255,0.5), 4px 4px 8px rgba(0,0,0,0.08)",
        },
        ".multicolumn": {
          fontFeatureSettings: "palt",
          height: "22rem",
          columnWidth: "22rem",
          columnGap: "3rem",
          a: {
            color: colors.cyan[700],
            textDecoration: 'underline',
            fontWeight: '500',
          },
          strong: {
            color: colors.blueGray[900],
            fontWeight: '600',
          },
          div: {
            width: "100%",
            marginRight: "1280px",
          },
          "div > p": {
            width: "100%",
          },
          "div > p > span": {
            width: "100%",
          },
          "> h1": {
            color: colors.trueGray[900],
            fontSize: defaultTheme.fontSize["5xl"],
            fontWeight: '800',
            marginLeft: "2rem",
            letterSpacing: "0.1em",
            lineHeight: "1.1",
          },
          "> h2": {
            color: colors.trueGray[900],
            fontSize: defaultTheme.fontSize["4xl"],
            fontWeight: '700',
            marginLeft: "1.75rem",
            letterSpacing: "0.09em",
            lineHeight: "2.5rem",
          },
          "> h3": {
            color: colors.trueGray[800],
            fontSize: defaultTheme.fontSize["3xl"],
            fontWeight: '600',
            marginLeft: "1.5rem",
            letterSpacing: "0.08em",
            lineHeight: "2.25rem",
          },
          "> h4": {
            color: colors.trueGray[800],
            fontSize: defaultTheme.fontSize["2xl"],
            fontWeight: '600',
            marginLeft: "1.25rem",
            letterSpacing: "0.07em",
            lineHeight: "2rem",
          },
          "> p": {
            marginLeft: "1rem",
            textIndent: "1.15em",
            letterSpacing: "0.06em",
            whiteSpace: "pre-wrap",
          },
        },
      })
    }),
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography"),
  ],
}
