import React from 'react'
import { PageProps, graphql } from 'gatsby'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistQuery>> = ({ data, location }) => {
  const playlist = data.contentfulPlaylist
  const cover = playlist?.songs?.map(song => {
    //@ts-ignore
    return getImage(song?.coverart)
  })

  const normarizedSongs = playlist?.songs?.map((song) => {
    const coverArt = getImage(song?.coverart?.gatsbyImageData!)
    return {
      title: song?.title!,
      artist: song?.artist?.name!,
      audioSrc: song?.sound?.localFile?.publicURL!,
      cover: coverArt!,
    }
  })

  console.log(normarizedSongs)

  const playlistIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  return (
    <div className="py-16">
      <GatsbySeo
        title={playlist?.title}
        openGraph={{
          title: `${playlist?.title} | 弱いZINE`,
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
          {
            position: 3,
            name: `${playlist?.title}`,
            item: `playlist/${playlist?.slug}/`,
          },
        ]}
      />
      <ArticleLink
        to={`${playlistIndexPath}/`}
        title='プレイリストに戻る'
        className="mt-12 text-left"
      />
      <section className="mt-12">
        <h1 className="mb-4 text-4xl font-black">{playlist?.title}</h1>
        <h2 className="mb-8 text-2xl font-medium text-gray-700">{playlist?.artists[0].name}</h2>
        <GatsbyImage
          image={cover && cover[0]}
          loading="eager"
          alt="Zine"
          className="object-scale-down mb-12 hover:animate-huruhuru"
        />
        <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl">{playlist?.artists[0] && playlist?.artists[0].introduction?.introduction}</p>
        <ul>
          {normarizedSongs?.map((track, index) => {
            return (
              <li key={index} className="flex items-center">
                <span className="mr-4 font-mono">{index + 1}</span>
                <h3 className="text-lg">{track.title}</h3>
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
  query Playlist($id: String) {
    contentfulPlaylist(
      id: {eq: $id}
    ) {
      id
      title
      slug
      songs {
        title
        coverart {
          gatsbyImageData
        }
        sound {
          localFile {
            publicURL
          }
        }
        artist {
          name
        }
      }
      artists {
        name
        introduction {
          introduction
        }
      }
    }
  }
`
