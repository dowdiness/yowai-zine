import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { StaticImage } from "gatsby-plugin-image"
import { ArticleHeader, ArticleLink, ArticleNav, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
//Hooks

const HorizontalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.HorizontalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next, firstArtwork } = data
  const zineIndexPath = location?.pathname.split("/").slice(0, 3).join("/")

  return (
    <>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
      />
      <article
        className="py-16"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ArticleLink
          to={`${zineIndexPath}/`}
          title='目次に戻る'
          className="mt-12 text-left"
        />
        <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
        <div className="flex p-4 pl-0 sm:p-6 sm:pl-0 md:pl-0 md:p-10 neumorphism-normal rounded-2xl">
          <ArticleSideHeader
            className="sticky w-12 h-fit-content sm:w-16 md:w-20 lg:w-24 top-16"
            title={post?.frontmatter?.title}
            author={post?.frontmatter?.author}
          />
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="font-serif prose text-center main-article-width sm:prose-lg md:prose-xl xl:prose-2xl text-character"
          />
        </div>
        <footer>
          <ArticleShareButton
            className="w-full py-4 mt-16 sm:py-6 md:py-10"
            articleTitle={post?.frontmatter?.title!}
            articleUrl={`${siteUrl}/vol/${post?.frontmatter?.vol}${post?.fields?.slug}` || siteUrl!}
            articleDescription={post?.excerpt!}
          />
          <div className="p-4 mt-16 neumorphism-inset rounded-2xl sm:p-6 md:p-10">
            <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl xl:prose-2xl">{post?.frontmatter?.profile}</p>
            <div className="flex items-center justify-around w-1/2 mx-auto mt-4">
              {post?.frontmatter?.minnakikeru && (
                <a href={post?.frontmatter?.minnakikeru} target="_blank" rel="noreferrer noopener">
                  <StaticImage
                    width={48}
                    height={48}
                    src="../../content/assets/minnakikeru.png"
                    alt="minnakikeru"
                    className="blend-multiply"
                  />
                </a>
              )}
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
        previousLink={previous ? `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` : undefined}
        previousTitle={previous ? previous.frontmatter?.title : undefined}
        nextLink={next ? `/vol/${next.frontmatter?.vol}${next.fields?.slug}` : `/vol/0/${firstArtwork?.name}`}
        nextTitle={next ? next.frontmatter?.title : firstArtwork?.name}
        className="mb-12"
      />
    </>
  )
}

export default HorizontalArticleTemplate

export const pageQuery = graphql`
  query HorizontalArticleBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $firstArtworkId: String
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
        minnakikeru
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
    firstArtwork: directory(id: {eq: $firstArtworkId }) {
      id
      name
    }
  }
`
