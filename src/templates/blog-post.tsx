import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"

import useTategaki from "src/hooks/useTategaki"

import Layout from "src/components/Layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const BlogPostTemplate: React.FC<PageProps<
  GatsbyTypes.BlogPostBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const { tategakiRef } = useTategaki()

  return (
    <Layout location={location}>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.frontmatter?.description || post?.excerpt || ``}
      />
      <div className="">
        <article
          className="mx-auto my-16 space-y-16 text-center"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="flex flex-col items-center font-sans text-justify">
            <h1 className="mb-4 text-2xl font-extrabold" itemProp="headline">{post?.frontmatter?.title}</h1>
            <p className="text-xl italic font-medium">{post?.frontmatter?.author}</p>
          </header>
          <section
            ref={tategakiRef}
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="w-full max-w-full font-serif text-lg text-justify md:text-xl multicolumn text-character vertical-rl"
          />
          <footer className="font-serif text-lg text-justify whitespace-pre-line md:text-xl">
            {post?.frontmatter?.profile}
          </footer>
        </article>
      </div>
      <nav className="mb-12">
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
      </nav>
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
        author
        profile
        # date(formatString: "MMMM DD, YYYY")
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
