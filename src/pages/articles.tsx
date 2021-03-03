import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Hooks
import useSkew from 'src/hooks/useSkew'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLists } from 'src/components/Article'
import { getImage } from "gatsby-plugin-image"

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const ArticlesPage: React.FC<PageProps<GatsbyTypes.ArticlesPageQuery>> = ({ data }) => {
  const posts = data.posts.nodes
  // @ts-ignore
  const zineDate = getImage(data.zine)

  useSkew('[data-skew]')

  return (
    <>
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
      <ArticleLists
        //@ts-ignore
        posts={posts}
        image={zineDate!}
        hasBackLink={true}
      />
    </>
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
          childMarkdownRemark {
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
        gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`
