import React, { useEffect } from 'react'
import { graphql, PageProps, Link } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//Hooks

const ImageGalleryTemplate: React.FC<PageProps<
  GatsbyTypes.ImageGalleryBySlugQuery
>> = ({ data }) => {
  const { artist } = data
  const artworks = data.artworks.edges
  const { previous, next } = data

  return (
    <>
      <GatsbySeo
        title={ artist?.name || ``}
        description={ artist?.name || ``}
      />
      <article
        className="py-16 mx-auto space-y-16 text-center"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="flex flex-col items-center my-24 space-y-12">
          <h1 className="text-3xl font-extrabold text-left text-gray-900 font-selif sm:text-4xl md:text-5xl lg:text-6xl" itemProp="headline">
            {artist?.name}
          </h1>
        </header>
        <section
          itemProp="articleBody"
          className="w-full max-w-screen-md mx-auto space-y-16"
        >
          { artworks && artworks.map((artwork, index) => {
            // @ts-ignore
            const imageData = getImage(artwork.node)
            return <GatsbyImage image={imageData!} alt="Plant" className="blend-multiply" />
          })}
        </section>
        <footer className="font-serif prose-sm prose text-center whitespace-pre-line sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl">
          {artist?.name}
        </footer>
      </article>
      <nav className="pb-12">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={
                  `/vol/0/${previous.name}` ||
                  `/`
                }
                rel="prev"
              >
                ← {previous.name}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/vol/0/${next.name}` || `/`}
                rel="next"
              >
                {next.name} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default ImageGalleryTemplate

export const pageQuery = graphql`
  query ImageGalleryBySlug(
    $id: String!
    $artist: String!
    $previousArtworkId: String
    $nextArtworkId: String
  ) {
    artworks: allFile(filter: {sourceInstanceName: {eq: "artworks"}, name: {glob: $artist }}) {
      edges {
        node {
          name
          id
          childImageSharp {
            id
            gatsbyImageData(maxWidth: 768, layout: CONSTRAINED)
          }
        }
      }
    }
    previous: directory(id: {eq: $previousArtworkId }) {
      id
      name
    }
    next: directory(id: {eq: $nextArtworkId }) {
      id
      name
    }
    artist: directory(id: {eq: $id }) {
      id
      name
    }
  }
`
