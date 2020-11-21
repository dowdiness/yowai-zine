const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./content/**/*.md", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    typography: {
      DEFAULT: {
        // css: {
        //   color: '#333',
        //   strong: {
        //     fontWeight: '800',
        //   },
        //   // ...
        // },
      },
    },
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
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
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
      margin: {
        screen: '0 calc(50% - 50vw)',
      },
      colors: {
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
          "> p": {
            marginLeft: "1rem",
            textIndent: "1.15em",
            letterSpacing: "0.06em",
            whiteSpace: "pre-wrap",
          },
        },
      })
    }),
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
