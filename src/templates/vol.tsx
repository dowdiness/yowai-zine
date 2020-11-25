import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Hooks
import useSkew from 'src/hooks/useSkew'
import useCursor from 'src/hooks/useCursor'

//Components
import ScrollArticle from 'src/components/ScrollArticle'

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const VolPage: React.FC<PageProps<GatsbyTypes.VolPageQuery>> = ({ data }) => {
  const posts = data.posts.nodes
  const artworks = data.artworks.edges
  useSkew('[data-skew]')
  const { cursorRef } = useCursor<HTMLDivElement>('[data-cursor-src]')

  return (
    <>
      <div className="py-64 space-y-80">
        <section className="flex flex-col justify-center mx-auto space-y-32">
          <div data-skew className="flex justify-center mx-auto">
            <h2 className="text-6xl border-b-8 border-blue-700 outline sm:text-7xl md:text-8xl">
              投稿記事
            </h2>
          </div>
          <div className="flex flex-col justify-center mx-auto space-y-28">
            {posts.map((post, index) => (
              <ScrollArticle
                index={index}
                to={`/vol/${post.frontmatter?.vol}${post.fields?.slug}`}
                text={post.frontmatter?.author}
                linkText={post.frontmatter?.title!}
                useCursor={true}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center mx-auto space-y-32">
          <div data-skew className="flex justify-center mx-auto">
            <h2 className="text-6xl border-b-8 border-blue-700 outline sm:text-7xl md:text-8xl">
              投稿画像
            </h2>
          </div>
          <div className="flex flex-col justify-center mx-auto space-y-28">
            {artworks.map((artwork, index) => (
              <ScrollArticle
                index={index}
                to={`/vol/0/${artwork.node.name}`}
                linkText={artwork.node.name}
                useCursor={false}
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

export default VolPage

export const pageQuery = graphql`
  query VolPage($vol: String!) {
    posts: allMarkdownRemark(filter: { frontmatter: { vol: { eq: $vol } } }) {
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
  }
`
