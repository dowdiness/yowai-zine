import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { ArticleHeader, ArticleLink, ArticleNav, ArticleSideHeader, ArticleShareButton } from 'src/components/Article'
//Hooks

const HorizontalArticleTemplate: React.FC<PageProps<
  GatsbyTypes.HorizontalArticleBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark
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
        <div className="flex py-6 pr-3 ml-8 md:py-10 sm:pr-6 md:pr-10 neumorphism-normal rounded-2xl sm:ml-0">
          <div className="-my-6 m-screen md:-my-10">
            <ArticleShareButton
              className="sticky py-2 h-fit-content top-16 sm:ml-5 md:ml-8 xl:ml-11 neumorphism-deep rounded-2xl"
              articleTitle={post?.frontmatter?.title!}
              articleUrl={`http://localhost:8000/vol/${post.frontmatter?.vol!}${post.fields?.slug!}` || `http://localhost:8000`}
              articleDescription={post?.excerpt!}
            />
          </div>
          <ArticleSideHeader
            className="sticky w-12 ml-16 h-fit-content sm:w-16 md:w-20 lg:w-24 sm:ml-21 md:ml-30 lg:ml-34 xl:ml-40 top-16"
            title={post?.frontmatter?.title}
            author={post?.frontmatter?.author}
          />
          <section
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="font-serif prose text-center main-article-width sm:prose-lg md:prose-xl xl:prose-2xl text-character"
          />
        </div>
        <footer className="p-4 mt-16 font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl xl:prose-2xl neumorphism-inset rounded-2xl sm:p-6 md:p-10">
          {post?.frontmatter?.profile}
        </footer>
      </article>
      <ArticleNav
        previousLink={previous ? `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` : undefined}
        previousTitle={previous ? previous.frontmatter?.title : undefined}
        nextLink={next ? `/vol/${next.frontmatter?.vol}${next.fields?.slug}` : `/vol/0/${firstArtwork.name}`}
        nextTitle={next ? next.frontmatter?.title : firstArtwork.name}
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
    firstArtwork: directory(id: {eq: $firstArtworkId }) {
      id
      name
    }
  }
`
