import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Hooks
import { useInView } from 'react-intersection-observer'
import useSkew from 'src/hooks/useSkew'
import useCursor from 'src/hooks/useCursor'
import { motion } from 'framer-motion'
import 'src/styles/cursor.css'

// import Image from 'gatsby-image'

//Components
import ScrollArticle from 'src/components/ScrollArticle'

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const VolPage: React.FC<PageProps<GatsbyTypes.VolPageQuery>> = ({ data }) => {
  // const images = data.images.edges
  const posts = data.posts.nodes
  useSkew('[data-skew]')
  const { cursorRef } = useCursor<HTMLDivElement>('[data-cursor-src]')

  return (
    <>
      <div className="sticky my-32 space-y-64">
        {posts.map((post, index) => (
          <ScrollArticle
            index={index}
            frontmatter={post.frontmatter}
          />
        ))}
      </div>
      {/* Cursor */}
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed top-0 left-0 z-20 pointer-events-none"
      >
        <div className="relative block w-64 h-64 -mt-32 -ml-32 overflow-hidden rounded-full cursor-media">
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
    images: allImageSharp {
      edges {
        node {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
            originalName
          }
        }
      }
    }
    posts: allMarkdownRemark(filter: { frontmatter: { vol: { eq: $vol } } }) {
      nodes {
        excerpt(truncate: true)
        frontmatter {
          title
          author
          vol
        }
      }
    }
  }
`
