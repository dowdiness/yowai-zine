import { graphql } from "gatsby"
import { PageProps } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "src/components/bio"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <GatsbySeo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </>
    )
  }

  return (
    <>
      <GatsbySeo title="弱いZINE" titleTemplate="%s" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article
                className="mx-auto mt-12 prose-sm prose sm:prose lg:prose-lg xl:prose-xl"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <AniLink
                      to={`/vol${post.frontmatter?.vol}${post.fields?.slug}` || `/`}
                      fade
                    >
                      <span itemProp="headline">{title}</span>
                    </AniLink>
                  </h2>
                  <small>Vol {post.frontmatter?.vol} </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.frontmatter?.description ||
                        post.excerpt ||
                        `見つかりません`,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          vol
          description
        }
      }
    }
  }
`
