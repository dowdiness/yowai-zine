import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

//Hooks
// import useSkew from 'src/hooks/useSkew'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistIndexPageQuery>> = ({ data }) => {
  // useSkew('[data-skew]')


  const albumList = data.allContentfulPlaylist.edges

  return (
    <div className="max-w-3xl mx-auto">
      <GatsbySeo
        title="プレイリスト"
        openGraph={{
          title: "プレイリスト | 弱いZINE",
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: 'プレイリスト',
            item: `playlist`,
          },
        ]}
      />
      <ArticleLink
        to={`/`}
        title='トップページに戻る'
        className="mt-12 text-left"
      />
      <section className="mt-12">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {albumList?.map(({ node }, index) => {
            // @ts-ignore
            const cover = getImage(node.coverart)
            return (
              <li data-skew key={`playlist-${node.title}-${index}`} className="w-full">
                <Link to={node.albumPath!}>
                  <GatsbyImage
                    image={cover!}
                    loading="eager"
                    alt="Zine"
                    className="object-scale-down w-full mb-4 -z-10 hover:animate-huruhuru"
                  />
                  <div className="z-30">
                    <h2 className="text-lg font-bold md:text-2xl">{node.title}</h2>
                    <h3 className="text-base text-gray-700 md:text-xl">
                      {node?.artists?.map((artist, index) => {
                        return (
                          index === 0 ? <span>{artist?.name}</span> : <span>, {artist?.name}</span>
                        )
                      })}
                    </h3>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default PlaylistPage

export const pageQuery = graphql`
  query PlaylistIndexPage {
    allContentfulPlaylist(sort: {order: DESC, fields: updatedAt}) {
      edges {
        node {
          id
          title
          slug
          artists {
            name
          }
          coverart {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
          albumPath: gatsbyPath(filePath: "/playlist/{ContentfulPlaylist.slug}")
        }
      }
    }
}
`
