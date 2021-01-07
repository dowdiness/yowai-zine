import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Hooks
import useSkew from 'src/hooks/useSkew'
import useCursor from 'src/hooks/useCursor'

//Components
import ScrollArticle from 'src/components/ScrollArticle'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const ArticlesPage: React.FC<PageProps<GatsbyTypes.ArticlesPageQuery>> = ({ data }) => {
  const posts = data.posts.nodes
  const artworks = data.artworks.edges
  const zineDate = getImage(data.zine)

  useSkew('[data-skew]')
  const { cursorRef } = useCursor<HTMLDivElement>('[data-cursor-src]')

  return (
    <>
      <GatsbySeo
        title="集まった作品"
        openGraph={{
          title: "集まった作品 | 弱いZINE",
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
        ]}
      />
      <div className="py-16 space-y-16">
        <ArticleLink
          to={`/`}
          title='トップページに戻る'
          className="mt-12 text-left"
        />
        <section className="flex flex-col justify-center mx-auto space-y-32">
          <div data-skew className="flex justify-center mx-auto -mb-12">
            <GatsbyImage
              image={zineDate}
              alt="Zine"
              className="object-scale-down h-32 w-72 sm:w-96 sm:h-40 md:w-120 md:h-56 lg:w-160 lg:h-72 xl:w-240 xl:h-96"
            />
          </div>
          <div className="flex flex-col justify-center mx-auto space-y-28">
            {posts.map((post, index) => (
              <ScrollArticle
                index={index}
                to={`/articles${post.fields?.slug}`}
                text={post.frontmatter?.author}
                linkText={post.frontmatter?.title!}
                useCursor={true}
              />
            ))}
          </div>
        </section>
      </div>
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-20 pointer-events-none"
      >
        <div className="relative block w-64 h-64 -mt-32 -ml-32 overflow-hidden scale-0 rounded-full transform-gpu">
          {posts.map((post, index) => (
            <p
              key={index}
              id={post.frontmatter?.title}
              className="absolute inset-0 w-64 h-64 text-3xl"
            >
              {post.excerpt}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query ArticlesPage {
    posts: allMarkdownRemark {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          title
          author
          vol
        }
      }
    }
    artworks: allDirectory(filter: {sourceInstanceName: {eq: "artworks"}}, skip: 1) {
      edges {
        node {
          id
          name
        }
      }
    }
    zine: file(relativePath: { eq: "yowaizine.png" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 768, layout: FLUID, placeholder: TRACED_SVG)
      }
    }
  }
`
