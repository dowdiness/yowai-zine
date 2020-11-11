const config = {
  siteUrl: `https://yowai.art`,
  themeColor: '#2a9df4',
  keys: {
    googleAnalyticsID: '',
  },
}

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
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        // The CMS will be disabled on your production site
        enabled: process.env.NODE_ENV !== 'production',
        sidebar: true,
        plugins: [
          // We'll add some gatsby-tinacms plugins later
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
          `gatsby-remark-check-links`,
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
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
    `gatsby-plugin-sharp`,
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
