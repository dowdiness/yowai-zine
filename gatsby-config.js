const config = {
  title: `弱いZINE`,
  siteUrl: `https://yowai.band`,
  themeColor: '#2a9df4',
  description: `こころおきなく居られるweb zineです。`,
}

const path = require('path')
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), '../..')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  downloadLocal: true,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

module.exports = {
  siteMetadata: {
    title: config.title,
    author: {
      name: `ｏｓａｍｕｏｓａｎａｉ`,
      summary: `おともだちロボット`,
    },
    description: config.description,
    siteUrl: config.siteUrl,
    social: {
      twitter: `coffee_ippku`,
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-loadable-components-ssr`, //https://github.com/hector-del-rio/gatsby-plugin-loadable-components-ssr
    `gatsby-plugin-root-import`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@sentry/gatsby`,
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        tracesSampleRate: 1,
      },
    },
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "#e6e7ee"
            }
          },
        ],
        gatsbyRemarkPlugins: [
          `gatsby-remark-check-links`,
          `gatsby-remark-external-links`,
          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: false
            }
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // max-w-3xlのwidthと同じサイズ
              maxWidth: 768,
              linkImagesToOriginal: false,
              backgroundColor: "transparent",
              withWebp: true,
              showCaptions: true,
              wrapperStyle: `white-space: normal;`,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {}
          },
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: `content/assets/yowai-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        titleTemplate: `%s | ${config.title}`,
        language: `ja`,
        description: config.description,
        openGraph: {
          title: config.title,
          description: config.description,
          type: "website",
          locale: "ja_JP",
          url: config.siteUrl,
          site_name: config.title,
          images: [
            {
              url: `${config.siteUrl}/yowai-ogp.png`,
              width: 1200,
              height: 840,
              alt: 'Yowai zine',
            }
          ],
        },
        twitter: {
          handle: "@antisatori",
          site: "@coffee_ippku",
          cardType: "summary_large_image",
        },
        facebook: {
          appId: 361318330627253,
        }
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/articles/*`, `/playlist/*`],
      },
    },
    `gatsby-plugin-typegen`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
