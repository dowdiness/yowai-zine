const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    typography: {
      default: {
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
      sans: ["'Robot Mono", "Consolas", "'Courier New", ...defaultTheme.fontFamily.sans],
      serif: ["YuMincho", ...defaultTheme.fontFamily.serif],
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
        default: '100%',
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
      padding: {
        default: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      spacing: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        320: "80rem",
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
        "7xl": [
          "5rem",
          {
            letterSpacing: "0.1em",
            lineHeight: "1",
          },
        ],
        "8xl": [
          "5rem",
          {
            letterSpacing: "0.1em",
            lineHeight: "1",
          },
        ],
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
          textCombineUpright: 'all'
        },
      }
      addUtilities(newUtilities)
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
            "-8px -8px 12px rgba(255,255,255,0.2), 8px 8px 12px rgba(0,0,0,0.12)",
        },
        ".multicolumn": {
          fontFeatureSettings: "palt",
          "> p": {
            marginLeft: "1rem",
            textIndent: "1rem",
            lineHeight: "1.75",
            letterSpacing: "0.06em",
          },
        },
      })
    }),
    require("@tailwindcss/typography"),
    require('@tailwindcss/ui'),
  ],
}
