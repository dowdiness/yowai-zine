const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for article post
  const verticalArticle = path.resolve(`./src/templates/vertical-article.tsx`)
  const horizontalArticle = path.resolve(`./src/templates/horizontal-article.tsx`)

  const resultAllMarkdowns = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { draft: { eq: false } } }
          sort: { fields: [frontmatter___publishedAt], order: DESC }
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

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      const { slug } = post.fields
      if (!slug) return

      if (post.frontmatter.writing === "horizontal") {
        createPage({
          path: `/articles${slug}`,
          component: horizontalArticle,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      } else if (post.frontmatter.writing === "vertical") {
        createPage({
          path: `/articles${slug}`,
          component: verticalArticle,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      }
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

    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter @infer {
      title: String
      description: String
      author: String
      vol: String
      align: String
      writing: String
      profile: String
      twitter: String
      instagram: String
      minnakikeru: String
      bandcamp: String
      linktree: String
      hatena: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      publishedAt: Date @dateformat
      disableSideHeader: Boolean
      featuredImage: File
    }

    type Fields {
      slug: String
    }
  `)
}
