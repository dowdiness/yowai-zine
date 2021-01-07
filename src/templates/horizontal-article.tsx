import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
// @ts-ignore
import minnakikeru from "../../content/assets/minnakikeru.png"
// @ts-ignore
import bandcamp from "../../content/assets/bandcamp.png"
import { ArticleHeader, ArticleLink, ArticleNav, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
//Hooks

const HorizontalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.HorizontalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next } = data
  const articlesIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  return (
    <>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
        openGraph={{
          title: `${post?.frontmatter?.title} ${post?.frontmatter?.author} 弱いZINE`,
          description: post?.excerpt || post?.frontmatter?.profile || ``,
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: '集まった作品',
            item: `articles`,
          },
          {
            position: 3,
            name: post?.frontmatter?.title || post?.frontmatter?.author || '',
            item: `articles${post?.fields?.slug}`,
          },
        ]}
      />
      <article
        className="py-16"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ArticleLink
          to={`${articlesIndexPath}/`}
          title='目次に戻る'
          className="mt-12 text-left"
        />
        <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
        <div className="flex p-4 pl-0 sm:p-6 sm:pl-0 md:pl-0 md:p-10 neumorphism-normal rounded-2xl">
          <ArticleSideHeader
            className="sticky w-12 h-fit-content sm:w-16 md:w-20 lg:w-24 top-6"
            title={post?.frontmatter?.title}
            author={post?.frontmatter?.author}
          />
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="font-serif prose text-center main-article-width sm:prose-lg md:prose-xl text-character"
          />
        </div>
        <footer>
          <ArticleShareButton
            className="w-full py-4 mt-16 sm:py-6 md:py-10"
            articleTitle={post?.frontmatter?.title!}
            articleUrl={`${siteUrl}/articles${post?.fields?.slug}` || siteUrl!}
            articleDescription={post?.excerpt!}
          />
          <div className="p-4 mt-16 neumorphism-inset rounded-2xl sm:p-6 md:p-10">
            <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl">{post?.frontmatter?.profile}</p>
            <div className="flex items-center justify-around w-1/2 mx-auto mt-4">
              {post?.frontmatter?.bandcamp && (
                <a aria-label="bandcamp" href={post?.frontmatter?.bandcamp} target="_blank" rel="noreferrer noopener">
                  <img
                    width={48}
                    height={48}
                    src={bandcamp}
                    alt="bandcamp"
                    className="blend-multiply"
                  />
                </a>
              )}
              {post?.frontmatter?.minnakikeru && (
                <a aria-label="minnakikeru" href={post?.frontmatter?.minnakikeru} target="_blank" rel="noreferrer noopener">
                  <img
                    width={48}
                    height={48}
                    src={minnakikeru}
                    alt="minnakikeru"
                    className="blend-multiply"
                  />
                </a>
              )}
              {post?.frontmatter?.instagram && (
                <a aria-label="instagram" href={post?.frontmatter?.instagram} target="_blank" rel="noreferrer noopener">
                  <TiSocialInstagram className="w-12 h-12" />
                </a>
              )}
              {post?.frontmatter?.twitter && (
                <a aria-label="twitter" href={post?.frontmatter?.twitter} target="_blank" rel="noreferrer noopener">
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
    </>
  )
}

export default HorizontalArticleTemplate

export const pageQuery = graphql`
  query HorizontalArticleBySlug(
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
      excerpt(pruneLength: 60, truncate: true)
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
        bandcamp
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
