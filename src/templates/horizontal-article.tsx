import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd, ArticleLd } from "src/components/JsonLd"

import {
  ArticleHeader,
  ArticleLink,
  ArticleNav,
  ArticleSideHeader,
  ArticleShareButton,
  ArticleSocialAccounts
} from 'src/components/Article'
//Hooks

const HorizontalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.HorizontalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next } = data
  const articlesIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  const images = post?.frontmatter?.images?.map(image => image?.publicURL!)

  return (
    <div className="max-w-3xl mx-auto">
      <GatsbySeo
        title={`${post?.frontmatter?.title} | ${post?.frontmatter?.author}` || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
        openGraph={{
          title: `${post?.frontmatter?.title} | ${post?.frontmatter?.author} | 弱いZINE`,
          description: post?.excerpt || post?.frontmatter?.profile || ``,
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: '作品一覧',
            item: `articles`,
          },
          {
            position: 3,
            name: `${post?.frontmatter?.title} | ${post?.frontmatter?.author}`,
            item: `articles${post?.fields?.slug}`,
          },
        ]}
      />
      <ArticleLd
        url={post?.fields?.slug!}
        headline={`${post?.frontmatter?.title} | ${post?.frontmatter?.author} | 弱いZINE`}
        keywords={post?.frontmatter?.keywords as string | string[] | undefined}
        images={images!}
        datePublished={post?.frontmatter?.publishedAt!}
        dateModified={post?.frontmatter?.updatedAt!}
        authorName={post?.frontmatter?.author!}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
      />
      <article
        className="py-16"
      >
        <ArticleLink
          to={`${articlesIndexPath}/`}
          title='目次に戻る'
          className="mt-12 text-left"
        />
        <ArticleHeader title={post?.frontmatter?.title} author={post?.frontmatter?.author} />
        <div className={`${post?.frontmatter?.disableSideHeader ? 'justify-center py-6 sm:py-8 md:py-10' : 'p-4 sm:p-6 md:p-10 pl-0 sm:pl-0 md:pl-0'} flex neumorphism-normal rounded-2xl`}>
          {!post?.frontmatter?.disableSideHeader && (
            <ArticleSideHeader
              className="sticky w-12 h-fit-content sm:w-16 md:w-20 lg:w-24 top-6"
              title={post?.frontmatter?.title}
              author={post?.frontmatter?.author}
            />
          )}
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            className={`${post?.frontmatter?.align === "left" ? "text-left" : "text-center"} font-serif prose whitespace-pre-line main-article-width sm:prose-lg md:prose-xl text-character`}
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
            <ArticleSocialAccounts
              className="flex items-center justify-around mx-auto mt-4 md:w-1/2"
              linktree={post?.frontmatter?.linktree}
              hatena={post?.frontmatter?.hatena}
              bandcamp={post?.frontmatter?.bandcamp}
              minnakikeru={post?.frontmatter?.minnakikeru}
              instagram={post?.frontmatter?.instagram}
              youtube={post?.frontmatter?.youtube}
              twitter={post?.frontmatter?.twitter}
            />
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
  )
}

export default HorizontalArticleTemplate

export const pageQuery = graphql`
  query HorizontalArticleBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { draft: { eq: false } }, id: { eq: $id }) {
      id
      excerpt(pruneLength: 120, truncate: true)
      html
      rawMarkdownBody
      fields {
        slug
      }
      frontmatter {
        title
        author
        profile
        description
        vol
        align
        twitter
        youtube
        instagram
        minnakikeru
        bandcamp
        linktree
        hatena
        disableSideHeader
        images {
          publicURL
        }
        updatedAt
        publishedAt
        keywords
      }
    }
    previous: markdownRemark(fields: { draft: { eq: false } }, id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        vol
      }
    }
    next: markdownRemark(fields: { draft: { eq: false } }, id: { eq: $nextPostId }) {
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
