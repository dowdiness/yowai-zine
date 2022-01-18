import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink, ArticleLists } from 'src/components/Article'
import SectionHeader from 'src/components/Element/SectionHeader'
import { getImage } from "gatsby-plugin-image"

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const ArticlesPage: React.FC<PageProps<GatsbyTypes.ArticlesPageQuery>> = ({ data }) => {
  const posts = data.posts.nodes
  // @ts-ignore
  const zineDate = getImage(data.zine)

  return (
    <div className="max-w-3xl py-16 mx-auto">
      <GatsbySeo
        title="ギャラリー"
        openGraph={{
          title: "ギャラリー | 弱いZINE",
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
        ]}
      />
      <ArticleLink
        to={`/`}
        title='トップページに戻る'
        className="mt-12 text-left"
      />
      <SectionHeader title="Gallery" author="ギャラリー" />
      <ArticleLists
        //@ts-ignore
        posts={posts}
        image={zineDate!}
      />
    </div>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query ArticlesPage {
    posts: allContentfulMarkdownArticle(sort: {fields: publishedAt, order: DESC}) {
      nodes {
        id
        title
        slug
        publishedAt
        content {
          childMdx {
            # need to truncate for non-laten characters
            excerpt(truncate: true)
          }
        }
        author {
          name
        }
      }
    }
    zine: file(relativePath: { eq: "yowaizine.png" }) {
      childImageSharp {
        gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: TRACED_SVG, formats: [AUTO,WEBP,AVIF])
      }
    }
  }
`
