/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react'
import { graphql, PageProps } from 'gatsby'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from 'src/hooks/cursor'
import 'src/styles/cursor.css'

// import Image from 'gatsby-image'

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }

const SmoothSkewPage: React.FC<PageProps<
  DeepWriteable<GatsbyTypes.SmoothSkewPageQuery>
>> = ({ data }) => {
  const images = data.images.edges
  const posts = data.posts.nodes
  gsap.utils.shuffle(images)
  gsap.utils.shuffle(posts)
  const scrollContainer = useRef<HTMLDivElement>(null!)
  const cursorRef = useRef(null!)

  const skewScroll = () => {
    gsap.registerPlugin(ScrollTrigger)

    const proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('[data-skew]', 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-30, 30) // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: self => {
        const skew = clamp(self.getVelocity() / -200)
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set('[data-skew]', { transformOrigin: 'right center', force3D: true })
  }

  useEffect(() => {
    skewScroll()
    const cursor = new Cursor(cursorRef.current)
  }, [])

  return (
    <>
      <div ref={scrollContainer} className="sticky my-32 space-y-64">
        {posts.map((post, index) => (
          <>
            <h2
              data-skew
              data-video-src={post.frontmatter?.title}
              key={index}
              className="flex flex-col items-center mx-auto space-y-16 text-center"
            >
              <span className="text-3xl sm:text-4xl">
                {post.frontmatter?.author}
              </span>
              <span className="text-6xl outline sm:text-7xl">
                {post.frontmatter?.title}
              </span>
            </h2>
            {/* <div
              data-skew
              key={index}
              className="relative w-11/12 h-auto mx-auto overflow-hidden sm:w-1/2"
            >
              <Image
                fluid={image?.node?.fluid}
                alt={`art ${image?.node?.fluid?.originalName}`}
                objectFit="contain"
              />
            </div> */}
          </>
        ))}
      </div>
      {/* Cursor */}
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed top-0 left-0 z-20 pointer-events-none"
      >
        <div className="relative block w-64 h-64 -mt-32 -mr-32 overflow-hidden rounded-full cursor-media">
          {posts.map((post, index) => (
            <p
              key={index}
              id={post.frontmatter?.title}
              className="absolute inset-0 w-64 h-64 text-3xl -translate-x-12"
            >
              {post.excerpt}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default SmoothSkewPage

export const pageQuery = graphql`
  query SmoothSkewPage {
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
    posts: allMarkdownRemark {
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
