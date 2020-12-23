import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { ArticleHeader, ArticleLink, ArticleNav, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
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
          <ArticleLink
            to={`${zineIndexPath}/`}
            title='目次に戻る'
            className="mt-12"
          />
          <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
          <div className="flex py-6 pr-3 ml-8 sm:pr-6 md:p-10 neumorphism-normal rounded-2xl sm:ml-0">
            <div className="w-screen -my-6 m-screen md:-my-10">
              <ArticleShareButton
                className="sticky py-2 h-fit-content top-16 sm:left-2 md:left-4 lg:left-4 xl:left-6 neumorphism-deep rounded-2xl"
                articleTitle={post?.frontmatter?.title!}
                articleUrl={`http://localhost:8000/vol/${post.frontmatter?.vol!}${post.fields?.slug!}` || `http://localhost:8000`}
                articleDescription={post?.excerpt!}
              />
            </div>
            <ArticleSideHeader
              className="sticky w-full ml-8 h-fit-content top-16"
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
          <footer className="p-4 mt-16 font-serif prose text-justify text-gray-700 whitespace-pre-line sm:p-6 md:p-10 max-w-none sm:prose-lg md:prose-xl neumorphism-inset rounded-2xl">
              {post?.frontmatter?.profile}
          </footer>
        </article>
        <ArticleNav
          previous={previous}
          next={next}
          className="mb-12"
        />
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
