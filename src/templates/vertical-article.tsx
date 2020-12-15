import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { ArticleHeader, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
//Hooks
import useTategaki from 'src/hooks/useTategaki'

const VerticalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.VerticalArticleBySlugQuery
>> = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const { tategakiRef } = useTategaki()
  const zineIndexPath = location?.pathname.split("/").slice(0, 3).join("/")

  return (
    <>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
      />
      <div className="">
        <article
          className="py-16 mx-auto"
          itemScope
          itemType="http://schema.org/Article"
        >
          <Link
            to={`${zineIndexPath}/`}
            className="justify-start mt-12 text-left left-animated-arrow"
          >
            <span className='left-arrow-content'>
              <span className='left-arrow -left'>
                <span className='shaft'></span>
              </span>
              <span className='text'>
                目次に戻る
              </span>
            </span>
            <span className='left-arrow -right'>
              <span className='shaft'></span>
            </span>
          </Link>
          <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
          <div className="flex py-6 pr-3 mx-1 neumorphism-normal rounded-2xl">
            <div className="w-screen m-screen">
              <ArticleShareButton
                className="sticky max-h-screen top-16 sm:left-1 md:left-2 lg:left-0 xl:left-1"
                articleTitle={post?.frontmatter?.title!}
                articleUrl={`http://localhost:8000/vol/${post.frontmatter?.vol!}${post.fields?.slug!}` || `http://localhost:8000`}
                articleDescription={post?.excerpt!}
              />
            </div>
            <ArticleSideHeader
              className="sticky h-full ml-8 top-16"
              title={post?.frontmatter?.title}
              author={post?.frontmatter?.author}
            />
            <section
              ref={tategakiRef}
              dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
              itemProp="articleBody"
              className="font-serif text-justify text-gray-700 main-article-width sm:text-lg md:text-xl multicolumn text-character vertical-rl"
            />
          </div>
          <footer className="p-4 mt-16 font-serif prose text-justify text-gray-700 whitespace-pre-line max-w-none sm:prose-lg md:prose-xl neumorphism-inset rounded-2xl">
              {post?.frontmatter?.profile}
          </footer>
        </article>
        <nav className="pb-12 text-gray-700">
          <ul
            className="flex flex-col items-center justify-between space-y-8 list-none md:space-y-0 md:flex-row"
          >
            <li className="w-full">
              {previous && (
                <Link
                  to={
                    `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` ||
                    `/`
                  }
                  rel="prev"
                  className="left-animated-arrow"
                >
                  <span className='left-arrow-content'>
                    <span className='left-arrow -left'>
                      <span className='shaft'></span>
                    </span>
                    <span className='text'>
                      {previous.frontmatter?.title}
                    </span>
                  </span>
                  <span className='left-arrow -right'>
                    <span className='shaft'></span>
                  </span>
                </Link>
              )}
            </li>
            <li className="w-full text-right">
              {next && (
                <Link
                  to={`/vol/${next.frontmatter?.vol}${next.fields?.slug}` || `/`}
                  rel="next"
                  className='animated-arrow'
                >
                  <span className='the-arrow -left'>
                    <span className='shaft'></span>
                  </span>
                  <span className='main'>
                    <span className='text'>
                      {next.frontmatter?.title}
                    </span>
                    <span className='the-arrow -right'>
                      <span className='shaft'></span>
                    </span>
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
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
      fields {
        slug
      }
      frontmatter {
        title
        author
        profile
        vol
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
