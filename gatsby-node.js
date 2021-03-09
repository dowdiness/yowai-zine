const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for article post
  const verticalArticle = path.resolve(`./src/templates/vertical-article.tsx`)
  const horizontalArticle = path.resolve(`./src/templates/horizontal-article.tsx`)

  const resultContentfulMarkdowns = await graphql(
    `
      {
        allContentfulMarkdownArticle(sort: {fields: publishedAt, order: DESC}) {
          edges {
            node {
              id
              slug
              isVirticalWriting
              publishedAt
            }
            next {
              id
            }
            previous {
              id
            }
          }
        }
      }
    `
  )

  if (resultContentfulMarkdowns.errors) {
    reporter.panicOnBuild(
      `There was an error loading your article posts`,
      resultContentfulMarkdowns.errors
    )
    return
  }

  const posts = resultContentfulMarkdowns.data.allContentfulMarkdownArticle.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const { slug } = post.node
      if (!slug) return

      if (post.node.isVirticalWriting === true) {
        createPage({
          path: `/articles/${slug}/`,
          component: verticalArticle,
          context: {
            id: post.node.id,
            previousPostId: post.previous ? post.previous.id : null,
            nextPostId: post.next ? post.next.id :  null,
          },
        })
      } else{
        createPage({
          path: `/articles/${slug}/`,
          component: horizontalArticle,
          context: {
            id: post.node.id,
            previousPostId: post.previous ? post.previous.id : null,
            nextPostId: post.next ? post.next.id :  null,
          },
        })
      }
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
      siteUrl: String
    }
  `)
}
