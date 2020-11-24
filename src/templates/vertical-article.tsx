import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { ArticleHeader } from 'src/components/Article'
//Hooks
import useTategaki from 'src/hooks/useTategaki'

const VerticalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.VerticalArticleBySlugQuery
>> = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const { tategakiRef } = useTategaki()

  return (
    <>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
      />
      <div className="">
        <article
          className="mx-auto my-16 space-y-16 text-center"
          itemScope
          itemType="http://schema.org/Article"
        >
          <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
          <section
            ref={tategakiRef}
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="w-full max-w-screen-xl font-serif text-lg text-justify text-gray-700 md:text-xl xl:text-2xl multicolumn text-character vertical-rl"
          />
          <footer className="font-serif prose text-justify text-gray-700 whitespace-pre-line max-w-none sm:prose-lg md:prose-xl xl:prose-2xl">
            {post?.frontmatter?.profile}
          </footer>
        </article>
      </div>
      <nav className="mb-12 text-gray-700">
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
              <Link
                to={
                  `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` ||
                  `/`
                }
                rel="prev"
              >
                ← {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/vol/${next.frontmatter?.vol}${next.fields?.slug}` || `/`}
                rel="next"
              >
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default VerticalArticleTemplate

export const pageQuery = graphql`
  query VerticalArticleBySlug(
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
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        vol
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        vol
      }
    }
  }
`