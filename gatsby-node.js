const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for article post
  const verticalArticle = path.resolve(`./src/templates/vertical-article.tsx`)
  const horizontalArticle = path.resolve(`./src/templates/horizontal-article.tsx`)
  const volTemplate = path.resolve(`./src/templates/vol.tsx`)
  const ImageGallery = path.resolve(`./src/templates/image-gallery.tsx`)

  // Get all markdown article posts sorted by date
  const resultAllMarkdowns = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              vol
              writing
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (resultAllMarkdowns.errors) {
    reporter.panicOnBuild(
      `There was an error loading your article posts`,
      resultAllMarkdowns.errors
    )
    return
  }

  const posts = resultAllMarkdowns.data.allMarkdownRemark.nodes

  // Get all artworks folders posts sorted by date
  const resultArtworks = await graphql(
    `
      {
        allDirectory(filter: {sourceInstanceName: {eq: "artworks"}}, skip: 1) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  )

  if (resultArtworks.errors) {
    reporter.panicOnBuild(
      `There was an error loading your artworks directories`,
      resultAllMarkdowns.errors
    )
    return
  }

  const artworks = resultArtworks.data.allDirectory.edges

  // Create article posts pages
  // But only if there's at least one markdown file found at "content/article" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    const availableVols = []
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      availableVols.push(post.frontmatter.vol)

      if (post.frontmatter.writing === "horizontal") {
        createPage({
          path: `/vol/${post.frontmatter.vol}${post.fields.slug}`,
          component: horizontalArticle,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      } else if (post.frontmatter.writing === "vertical") {
        createPage({
          path: `/vol/${post.frontmatter.vol}${post.fields.slug}`,
          component: verticalArticle,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      }
    })
    const availableVolsSet = new Set(availableVols)
    availableVolsSet.forEach((availableVol) => {
      createPage({
        path: `/vol/${availableVol}/`,
        component: volTemplate,
        context: {
          vol: availableVol,
        },
      })
    })
  }

  if (artworks.length > 0) {
    artworks.forEach((artwork, index) => {
      const previousArtworkId = index === 0 ? null : artworks[index - 1].node.id
      const nextArtworkId = index === artworks.length - 1 ? null : artworks[index + 1].node.id

      createPage({
        path: `/vol/0/${artwork.node.name}/`,
        component: ImageGallery,
        context: {
          id: artwork.node.id,
          artist: `${artwork.node.name}-*`,
          previousArtworkId,
          nextArtworkId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // article posts are stored inside "content/article" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
