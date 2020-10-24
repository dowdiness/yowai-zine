import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"

import Layout from "src/components/Layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const BlogPostTemplate: React.FC<PageProps<
  GatsbyTypes.BlogPostBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout location={location}>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.frontmatter?.description || post?.excerpt || ``}
      />
      <div className="m-screen">
        <article
          className="mx-auto my-16"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="flex flex-col items-center px-4 mb-6 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold" itemProp="headline">{post?.frontmatter?.title}</h1>
            <p className="text-xl italic">{post?.frontmatter?.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="px-4 mx-auto prose-sm prose text-justify text-upright sm:prose lg:prose-lg xl:prose-xl sm:px-6 lg:px-8 text-character vertical-rl multicolumn"
          />
          <footer>
          </footer>
        </article>
      </div>
      {/* <nav className="mb-12 prose">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields?.slug || `/`} rel="prev">
                ← {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields?.slug || `/`} rel="next">
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
