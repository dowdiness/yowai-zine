import React, { useRef, useEffect } from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd, ArticleLd } from "src/components/JsonLd"

import ArticleLink from 'src/components/Article/ArticleLink'
import ArticleNav from 'src/components/Article/ArticleNav'
import ArticleSideHeader from 'src/components/Article/ArticleSideHeader'
import ArticleShareButton from 'src/components/Article/ArticleShareButton'
import ArticleSocialAccounts from 'src/components/Article/ArticleSocialAccounts'
import SectionHeader from 'src/components/Element/SectionHeader'
import Linkify from 'linkify-react'
//Hooks

const HorizontalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.HorizontalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.post
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next } = data
  const { content, images, featuredImage, author } = post!
  const articlesIndexPath = location?.pathname.split("/").slice(0, 2).join("/")
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (articleRef.current && content?.childMarkdownRemark?.html) {
      articleRef.current.innerHTML = content.childMarkdownRemark.html
    }
  }, [content?.childMarkdownRemark?.html])

  const imageURLs = images?.map((image) => {
    return image?.localFile?.publicURL
  })

  const publicURLs = imageURLs ? [featuredImage?.localFile?.publicURL, ...imageURLs] : [featuredImage?.localFile?.publicURL]

  return (
    <div className="max-w-3xl mx-auto">
      <GatsbySeo
        title={`${post?.title} | ${author?.name}`}
        description={content?.childMarkdownRemark?.excerpt || author?.introduction?.introduction || ``}
        openGraph={{
          title: `${post?.title} | ${author?.name} | 弱いZINE`,
          description: content?.childMarkdownRemark?.excerpt || author?.introduction?.introduction || ``,
          images: featuredImage ? [
            {
              url: `${siteUrl}${featuredImage?.localFile?.publicURL}`,
              width: 1200,
              height: 840,
              alt: featuredImage?.title,
            }
          ] : [
            {
              url: `${siteUrl}/yowai-ogp.png`,
              width: 1200,
              height: 840,
              alt: 'Yowai zine',
            }
          ]
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: 'ギャラリー',
            item: `articles`,
          },
          {
            position: 3,
            name: `${post?.title} | ${author?.name}`,
            item: `articles/${post?.slug}/`,
          },
        ]}
      />
      <ArticleLd
        url={post?.slug!}
        headline={`${post?.title} | ${author?.name} | 弱いZINE`}
        keywords={`弱いZINE`}
        // @ts-ignore
        images={featuredImage || images ? publicURLs : undefined}
        datePublished={post?.publishedAt!}
        dateModified={post?.updatedAt!}
        authorName={author?.name!}
        description={content?.childMarkdownRemark?.excerpt || author?.introduction?.introduction || ``}
      />
      <article
        className="py-16"
      >
        <ArticleLink
          to={`${articlesIndexPath}/`}
          title='目次に戻る'
          className="mt-12 text-left"
        />
        <SectionHeader title={post?.title} author={author?.name} />
        <div className={`${post?.disableSideHeader ? 'justify-center py-6 sm:py-8 md:py-10' : 'p-4 sm:p-6 md:p-10 pl-0 sm:pl-0 md:pl-0'} flex neumorphism-normal rounded-2xl`}>
          {!post?.disableSideHeader && (
            <ArticleSideHeader
              className="sticky w-12 h-fit-content sm:w-16 md:w-20 lg:w-24 top-6"
              title={post?.title}
              author={author?.name}
            />
          )}
          <section
            ref={articleRef}
            className={`${post?.align ? "text-left" : "text-center"} font-serif prose whitespace-pre-line main-article-width sm:prose-lg md:prose-xl text-character tracking-widest`}
          >
            {!content?.childMarkdownRemark?.html && `記事無し`}
          </section>
        </div>
        <footer>
          <ArticleShareButton
            className="w-full py-4 mt-16 sm:py-6 md:py-10"
            articleTitle={post?.title!}
            articleUrl={`${siteUrl}/articles/${post?.slug}/` || siteUrl!}
            articleDescription={content?.childMarkdownRemark?.excerpt!}
        />
          <div className="p-4 mt-12 sm:mt-16 neumorphism-inset rounded-2xl sm:p-6 md:p-10">
            <Linkify
              as="p"
              className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl"
              options={{
                className: "transition-colors break-all hover:text-slate-500",
                target: "_blank",
                rel: 'noopener'
              }}
            >
              {author?.introduction?.introduction}
            </Linkify>
            <ArticleSocialAccounts
              className="flex flex-wrap items-center justify-center gap-4 mx-auto mt-4 sm:justify-around md:w-1/2"
              linktree={author?.linktree}
              hatena={author?.hatena}
              bandcamp={author?.bandcamp}
              minnakikeru={author?.minnakikeru}
              instagram={author?.instagram}
              youtube={author?.youtube}
              twitter={author?.twitter}
            />
          </div>
        </footer>
      </article>
      <ArticleNav
        previousLink={previous ? `/articles/${previous.slug}/` : undefined}
        previousTitle={previous ? previous.title : undefined}
        nextLink={next ? `/articles/${next.slug}/` : undefined}
        nextTitle={next ? next.title : undefined}
        className="mt-12 mb-16"
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
    post: contentfulMarkdownArticle(id: {eq: $id}) {
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 120, truncate: true)
        }
      }
      images {
        title
        localFile {
          publicURL
        }
      }
      featuredImage {
        title
        localFile {
          publicURL
        }
      }
      author {
        introduction {
          introduction
        }
        name
        bandcamp
        instagram
        minnakikeru
        hatena
        linktree
        twitter
        youtube
      }
      slug
      title
      disableSideHeader
      isVirticalWriting
      align
      updatedAt
      publishedAt
    }
    previous: contentfulMarkdownArticle(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: contentfulMarkdownArticle(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
