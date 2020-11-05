/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react'
import { graphql, PageProps } from 'gatsby'

import useWindowSize from 'src/hooks/useWindowSize'
import { gsap } from 'gsap'

import Image from 'gatsby-image'

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }

const SmoothSkewPage: React.FC<PageProps<
  DeepWriteable<GatsbyTypes.SmoothSkewPageQuery>
>> = ({ data }) => {
  const images = data.images.edges
  const posts = data.posts.nodes
  gsap.utils.shuffle(images)
  gsap.utils.shuffle(posts)
  const scrollContainer = useRef<HTMLDivElement>(null!)
  const size = useWindowSize()
  const skewConfigs = {
    ease: 0.2,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`
    requestAnimationFrame(() => skewScrolling())
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [size.height])

  return (
    <div
      ref={scrollContainer}
      className="sticky my-32 space-y-40 overflow-hidden"
    >
      {images.map((image, index) => (
        <>
          <h2 className="flex flex-col items-center mx-auto space-y-16 text-center">
            <span className="text-6xl outline sm:text-7xl">
              {posts[index % posts.length].frontmatter?.title}
            </span>
            <span className="text-3xl sm:text-4xl">
              {posts[index % posts.length].frontmatter?.author}
            </span>
          </h2>
          <div
            key={index}
            className="relative w-11/12 h-auto mx-auto overflow-hidden sm:w-1/2"
          >
            <Image
              fluid={image?.node?.fluid}
              alt={`art ${image?.node?.fluid?.originalName}`}
              objectFit="contain"
            />
          </div>
        </>
      ))}
    </div>
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
        frontmatter {
          title
          author
          vol
        }
      }
    }
  }
`
