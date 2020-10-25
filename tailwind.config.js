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
      tb: "848px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
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
        }
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
          columnCount: "2",
          columnRule: "solid 1px #ccc",
          width: "100vw",
          "> p": {
            marginLeft: "1rem",
            textIndent: "1rem",
          },
        },
      })
    }),
    require("@tailwindcss/typography"),
    require('@tailwindcss/ui'),
  ],
}
