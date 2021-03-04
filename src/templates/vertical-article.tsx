import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd, ArticleLd } from "src/components/JsonLd"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  ArticleHeader,
  ArticleLink,
  ArticleNav,
  ArticleSideHeader,
  ArticleShareButton,
  ArticleSocialAccounts
} from 'src/components/Article'
//Hooks
import useTategaki from 'src/hooks/useTategaki'

const VerticalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.VerticalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.contentfulMarkdownArticle
  const siteUrl = data.site?.siteMetadata?.siteUrl
  const { previous, next } = data
  const { content, images, featuredImage, author } = post!
  const { tategakiRef } = useTategaki()
  const articlesIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  const imageURLs = images?.map((image) => {
    return image?.localFile?.publicURL
  })

  const publicURLs = imageURLs ? [featuredImage?.localFile?.publicURL, ...imageURLs!] : [featuredImage?.localFile?.publicURL]

  return (
    <div className="max-w-3xl mx-auto">
      <GatsbySeo
        title={`${post?.title} | ${author?.name}`}
        description={content?.childMdx?.excerpt || author?.introduction?.introduction || ``}
        openGraph={{
          title: `${post?.title} | ${author?.name} | 弱いZINE`,
          description: content?.childMdx?.excerpt || author?.introduction?.introduction || ``,
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
        description={content?.childMdx?.excerpt || author?.introduction?.introduction || ``}
      />
      <div>
        <article
          className="py-16 mx-auto"
        >
          <ArticleLink
            to={`${articlesIndexPath}/`}
            title='目次に戻る'
            className="mt-12"
          />
          <ArticleHeader title={post?.title} author={author?.name} />
          <div className="flex p-4 pl-2 sm:p-6 sm:pl-4 md:pl-6 md:p-10 neumorphism-normal rounded-2xl">
            <ArticleSideHeader
              className="sticky w-full h-fit-content top-6"
              title={post?.title}
              author={author?.name}
            />
            <section
              ref={tategakiRef}
              className="font-serif text-justify text-gray-700 main-article-width sm:text-lg md:text-xl multicolumn text-character vertical-rl"
            >
              {
                content?.childMdx?.body
                  ? <MDXRenderer>{content?.childMdx?.body}</MDXRenderer>
                  : `記事無し`
              }
            </section>
          </div>
          <footer className="">
            <ArticleShareButton
              className="w-full py-4 mt-16 sm:py-6 md:py-10"
              articleTitle={post?.title!}
              articleUrl={`${siteUrl}/articles/${post?.slug}/` || siteUrl!}
              articleDescription={content?.childMdx?.excerpt!}
            />
            <div className="p-4 mt-16 font-serif prose text-justify text-gray-700 whitespace-pre-line rounded-2xl sm:p-6 md:p-10 max-w-none sm:prose-lg md:prose-xl neumorphism-inset">
              <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl">{author?.introduction?.introduction}</p>
              <ArticleSocialAccounts
                className="flex items-center justify-around mx-auto mt-4 md:w-1/2"
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
          className="mb-12"
        />
      </div>
    </div>
  )
}

export default VerticalArticleTemplate

export const pageQuery = graphql`
  query VerticalArticleBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulMarkdownArticle(id: {eq: $id}) {
      content {
        childMdx {
          body
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
