const config = {
  siteUrl: `https://yowai.art`,
  themeColor: '#2a9df4',
  keys: {
    googleAnalyticsID: '',
  },
}

const path = require('path')
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), '../..')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `弱いZINE`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://yowai.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/artworks`,
        name: `artworks`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-og-image`,
            options: {
              output: {
                directory: '',
                fileName: 'thumbnail.png'
              },
              image: {
                width: 1200,
                height: 630,
                backgroundColor: '#e6e7ee',
              },
              style: {
                title: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#519fed',
                  fontWeight: 'bold',
                  fontSize: 64,
                  paddingTop: 100,
                  paddingBottom: 200,
                  paddingLeft: 150,
                  paddingRight: 150,
                },
                author: {
                  fontFamily: 'Noto Sans CJK JP',
                  fontColor: '#171717',
                  fontWeight: '400',
                  fontSize: 42,
                }
              },
              fontFile: [
                {
                  path: `${__dirname}/content/fonts/NotoSansCJKjp-Bold.otf`,
                  family: 'Noto Sans CJK JP',
                  weight: 'bold',
                },
                {
                  path: `${__dirname}/content/fonts/NotoSansCJKjp-Regular.otf`,
                  family: 'Noto Sans CJK JP',
                  weight: '400',
                },
              ],
              iconFile: require.resolve('./content/assets/yowai-logo.png'),
              timeout: 10000,
            },
          },
          `gatsby-remark-check-links`,
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-medium-zoom`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `弱いZINE`,
        short_name: `弱いZINE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2a9df4`,
        display: `standalone`,
        icon: `content/assets/yowai-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        titleTemplate: "%s | 弱いZINE",
        language: `ja`,
        description: `弱いZINE`,
        openGraph: {
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          site_name: "SiteName",
        },
        twitter: {
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        },
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
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typegen`,
  ],
}
