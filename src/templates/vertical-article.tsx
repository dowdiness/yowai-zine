import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { ArticleHeader, ArticleLink, ArticleNav, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
//Hooks
import useTategaki from 'src/hooks/useTategaki'

const VerticalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.VerticalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next } = data
  const { tategakiRef } = useTategaki()
  const articlesIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

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
            to={`${articlesIndexPath}/`}
            title='目次に戻る'
            className="mt-12"
          />
          <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
          <div className="flex p-4 pl-2 sm:p-6 sm:pl-4 md:pl-6 md:p-10 neumorphism-normal rounded-2xl">
            <ArticleSideHeader
              className="sticky w-full h-fit-content top-16"
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
          <footer className="">
            <ArticleShareButton
              className="w-full py-4 mt-16 sm:py-6 md:py-10"
              articleTitle={post?.frontmatter?.title!}
              articleUrl={`${siteUrl}/articles${post?.fields?.slug}` || siteUrl!}
              articleDescription={post?.excerpt!}
            />
            <div className="p-4 mt-16 font-serif prose text-justify text-gray-700 whitespace-pre-line rounded-2xl sm:p-6 md:p-10 max-w-none sm:prose-lg md:prose-xl neumorphism-inset">
              <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl xl:prose-2xl">{post?.frontmatter?.profile}</p>
              <div className="flex items-center justify-around w-1/2 mx-auto mt-4">
              {post?.frontmatter?.instagram && (
                <a href={post?.frontmatter?.instagram} target="_blank" rel="noreferrer noopener">
                  <TiSocialInstagram className="w-12 h-12" />
                </a>
              )}
              {post?.frontmatter?.twitter && (
                <a href={post?.frontmatter?.twitter} target="_blank" rel="noreferrer noopener">
                  <TiSocialTwitter className="w-12 h-12" />
                </a>
              )}
            </div>
            </div>
          </footer>
        </article>
        <ArticleNav
          previousLink={previous ? `/articles${previous.fields?.slug}` : undefined}
          previousTitle={previous ? previous.frontmatter?.title : undefined}
          nextLink={next ? `/articles${next.fields?.slug}` : undefined}
          nextTitle={next ? next.frontmatter?.title : undefined}
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
    # $firstArtworkId: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
        description
        vol
        twitter
        instagram
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
    # firstArtwork: directory(id: {eq: $firstArtworkId }) {
    #   id
    #   name
    # }
  }
`
