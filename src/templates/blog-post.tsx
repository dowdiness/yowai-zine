import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"

import Layout from "src/components/Layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const BlogPostTemplate: React.FC<PageProps<
  GatsbyTypes.BlogPostBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const countLength = (s?: string) => {
    if (s!.length > 3000) {
      return `column-count-19 sm:column-count-14 md:column-count-10 lg:column-count-7 xl:column-count-5 h-1760 sm:h-1280 md:h-960 lg:h-640 xl:h-480`
    } else if (s!.length > 2400) {
      return `column-count-17 sm:column-count-12 md:column-count-7 lg:column-count-6 h-1600 sm:h-1120 md:h-640 lg:h-520`
    } else if (s!.length > 1800) {
      return `column-count-13 sm:column-count-11 md:column-count-6 lg:column-count-5 h-1120 sm:h-800 md:h-520 lg:h-440`
    } else {
      return `column-count-4 h-480`
    }
  }

  console.log(post?.html?.length)
  console.log(post?.frontmatter?.profile)

  return (
    <Layout location={location}>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.frontmatter?.description || post?.excerpt || ``}
      />
      <div className="">
        <article
          className="mx-auto my-16 space-y-12 text-center"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="flex flex-col items-center font-sans text-justify">
            <h1 className="mb-4 text-2xl font-extrabold" itemProp="headline">{post?.frontmatter?.title}</h1>
            <p className="text-xl italic font-medium">{post?.frontmatter?.author}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className={`inline-block text-justify multicolumn column-gap-12 md:text-lg column-width-300 text-character vertical-rl ${countLength(post?.html)}`}
          />
          <footer className="text-justify">
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
