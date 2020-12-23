import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArticleLink, ArticleNav } from 'src/components/Article'
//Hooks

const ImageGalleryTemplate: React.FC<PageProps<
  GatsbyTypes.ImageGalleryBySlugQuery
>> = ({ data }) => {
  const { artist } = data
  const artworks = data.artworks.edges
  const { previous, next } = data
  const zineIndexPath = location?.pathname.split("/").slice(0, 3).join("/")

  return (
    <>
      <GatsbySeo
        title={ artist?.name || ``}
        description={ artist?.name || ``}
      />
      <article
        className="py-16 space-y-16"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ArticleLink
          to={`${zineIndexPath}/`}
          title='目次に戻る'
          className="mt-12 text-left"
        />
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
      <ArticleNav
        previousLink={previous ? `/vol/0/${previous.name}` : undefined}
        previousTitle={previous ? previous.name : undefined}
        nextLink={next ? `/vol/0/${next.name}` : undefined}
        nextTitle={next ? next.name : undefined}
        className="mb-12"
      />
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
