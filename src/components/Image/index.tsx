import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

type ImageProps = {
  filename: string
  className?: string
  alt?: string
  background?: boolean
}

const ImageSection: React.FCX<ImageProps> = ({
  children,
  filename,
  className,
  alt,
  background,
}) => (
  <StaticQuery<GatsbyTypes.ImageQuery>
    query={graphql`
      query Image {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image?.node?.childImageSharp?.fluid) {
        return null
      }

      return background ? (
        <BackgroundImage
          fluid={image.node.childImageSharp.fluid}
          className="w-full bg-center bg-repeat bg-cover"
        >
          {children}
        </BackgroundImage>
      ) : (
        <Image
          fluid={image.node.childImageSharp.fluid}
          className={className}
          alt={alt || `Image`}
        />
      )
    }}
  />
)

export default ImageSection
