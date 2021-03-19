import React, { useEffect } from 'react'
import { PageProps, graphql } from 'gatsby'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Atoms
import { useAtom } from "jotai"
import { tracksAtom, updateTracksAtom, nextTrackAtom } from 'src/atoms/track'

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistQuery>> = ({ data, location }) => {
  const [tracks] = useAtom(tracksAtom)
  const [,updateTracks] = useAtom(updateTracksAtom)
  const [,nextTrack] = useAtom(nextTrackAtom)

  const playlist = data.contentfulPlaylist
  const songs = playlist?.songs
  // @ts-ignore
  const cover = getImage(songs[0].coverart)!

  const normarizedSongs = songs?.map((song) => {
    const re = / +(1x,|1.5x,|2x,|3x)/
    const artworksSrc = song?.coverart?.fixed?.srcSet.split(re).filter((_src, index) => {
      if (index % 2 === 0) true
      false
    }).map((src, index)=> {
      const size = index === 0 ? 128 : index === 1 ? 128 * 1.5 : index === 2 ? 128 * 2 : 128 * 3
      return {
        src: `https:${src}`,
        sizes: `${size}x${size}`,
        type: 'image/png',
      }
    })

    const coverArt = getImage(song?.coverart?.gatsbyImageData!)
    return {
      audioSrc: song?.sound?.localFile?.publicURL!,
      title: song?.title!,
      artist: song?.artist?.name!,
      album: playlist?.title!,
      cover: coverArt!,
      artworks: artworksSrc!
    }
  })

  useEffect(() => {
  }, [])

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
        <h2 className="mb-8 text-2xl font-medium text-gray-700">
          {playlist?.artists?.map((artist, index) => {
            return (
              index === 0 ? <span>{artist?.name}</span> : <span>, {artist?.name}</span>
            )
          })}
        </h2>
        <GatsbyImage
          image={cover}
          loading="eager"
          alt="Zine"
          className="object-scale-down mb-12 hover:animate-huruhuru"
        />
        <p className="font-serif prose text-center whitespace-pre-line max-w-none sm:prose-lg md:prose-xl">
          {playlist?.artists?.map((artist, index) => {
            return (
              index === 0 ? <span>{artist?.introduction?.introduction}</span> : <span>, {artist?.introduction?.introduction}</span>
            )
          })}
        </p>
        <ul>
          {normarizedSongs?.map((track, index) => {
            return (
              <li key={index} className="">
                <button className="flex items-center" onClick={() => {updateTracks(normarizedSongs.slice(index))}}>
                  <span className="mr-4 font-mono">{index + 1}</span>
                  <h3 className="text-lg">{track.title}</h3>
                </button>
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
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          fixed(height: 128, toFormat: PNG) {
            srcSet
          }
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
