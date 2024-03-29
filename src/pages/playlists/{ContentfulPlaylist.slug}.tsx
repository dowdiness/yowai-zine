import React, { useState, useEffect, useRef, useContext } from 'react'
import { PageProps, graphql } from 'gatsby'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import SectionHeader from 'src/components/Element/SectionHeader'
import AudioPlayButton from 'src/components/AudioPlayer/AudioPlayButton'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IoTimeOutline } from "react-icons/io5"
import Linkify from 'linkify-react'

// Context
import { AudioContext } from 'src/components/AudioPlayer/AudioProvider'

// Atoms
import { useAtom } from "jotai"
import { tracksAtom, updateTracksAtom, isPlayingAtom, isPlayedAtom, isLoadingAtom } from 'src/atoms/track'
import { historyAtom } from 'src/atoms/history'

// Utils
import { displayTime } from 'src/components/AudioPlayer/utils'

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistQuery>> = ({ data, location }) => {
  const [tracks] = useAtom(tracksAtom)
  const [, updateTracks] = useAtom(updateTracksAtom)
  const [, setHistory] = useAtom(historyAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)
  const [isPlayed, setIsPlayed] = useAtom(isPlayedAtom)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [trackIndex, setTrackIndex] = useState(0)
  const isReady = useRef(false)

  const audio = useContext(AudioContext)

  const playlist = data.contentfulPlaylist
  const songs = playlist?.songs
  const siteUrl = data.site?.siteMetadata?.siteUrl

  const [isHovers, setHovers] = useState([...Array(songs?.length)].map(() => false))

  // @ts-ignore
  const cover = getImage(songs[0].coverart)!

  const normarizedSongs = songs?.map((song) => {
    const re = / +(1x,\n|1.5x,\n|2x,\n|3x)/
    // const artworksSrc = song?.coverart?.fixed?.srcSet.split(re).filter((src, index) => {
    //   if (index % 2 !== 1 && src !== '') {
    //     return true
    //   }
    //   return false
    // }).map((src, index) => {
    //   const size = index === 0 ? 128 : index === 1 ? 128 * 1.5 : index === 2 ? 128 * 2 : 128 * 3
    //   return {
    //     src: `https:${src}`,
    //     sizes: `${size}x${size}`,
    //     type: 'image/png',
    //   }
    // })

    const coverArt = getImage(song?.coverart?.gatsbyImageData!)
    return {
      audioSrc: song?.sound?.localFile?.publicURL!,
      title: song?.title!,
      artist: song?.artist?.name!,
      album: playlist?.title!,
      slug: playlist?.slug!,
      duration: song?.duration!,
      cover: coverArt!,
      // artworks: artworksSrc!,
    }
  })

  const playlistIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  // https://bagelee.com/programming/safari-video-audio-action/
  useEffect(() => {
    if (isReady.current) {
      if (isPlayed === true) {
        if (normarizedSongs) {
          updateTracks(normarizedSongs.slice(trackIndex))
          setHistory(normarizedSongs.slice(0, trackIndex))
          setIsPlaying(true)
          setIsLoading(false)
        }
      }
    } else {
      isReady.current = true
    }
  }, [isPlayed])

  const updateHovers = (index: number, result: boolean) => {
    setHovers(isHovers.map((isHover, i) => {
      return i === index ? result : isHover
    }))
  }

  return (
    <div className="max-w-3xl py-16 mx-auto">
      <GatsbySeo
        title={playlist?.title}
        openGraph={{
          title: `${playlist?.title} | 弱いZINE`,
          images: playlist?.coverart?.localFile?.publicURL ? [
            {
              url: `${siteUrl}${playlist?.coverart?.localFile?.publicURL}`,
              width: 1200,
              height: 840,
              alt: playlist?.title,
            }
          ] : [
            {
              url: `${siteUrl}/yowai-ogp.png`,
              width: 1200,
              height: 840,
              alt: 'Yowai zine',
            }
          ]
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
            item: `playlists/${playlist?.slug}/`,
          },
        ]}
      />
      <ArticleLink
        to={`${playlistIndexPath}/`}
        title='プレイリストに戻る'
        className="mt-12 text-left"
      />
      <SectionHeader
        title={playlist?.title}
        author={
          playlist?.artists?.map((artist, index) => {
            return (
              index === 0 ? <span>{artist?.name}</span> : <span>, {artist?.name}</span>
            )
          })}
        />
      <section className="mt-12">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-around">
          <GatsbyImage
            image={cover}
            loading="eager"
            alt="Zine"
            className="object-scale-down w-full h-full mb-12 md:w-64"
          />
          <div className="flex flex-col justify-start w-full mb-8 space-y-4 md:ml-12">
            {playlist?.artists?.map((artist, _) => {
              return (
                  <Linkify
                    className="font-serif prose text-left whitespace-pre-line max-w-none sm:prose-lg"
                    tagName="p"
                    options={{
                      className: "transition-colors break-all hover:text-slate-500",
                      target: "_blank",
                      rel: 'noopener'
                    }}
                  >
                    {artist?.introduction?.introduction}
                  </Linkify>
              )
            })}
          </div>
        </div>
        <ul className="mt-8 space-y-2">
          {normarizedSongs?.map((track, index) => {
            return (
              <>
                {index === 0 &&
                  <li key="track-table-head" className="flex items-center justify-start p-2 mb-4 text-gray-600 border-b border-gray-400">
                    <span className="mr-4 text-center w-7">#</span>
                    <span className="mr-4">タイトル</span>
                    <IoTimeOutline className="ml-auto" size={20}/>
                  </li>
                }
                <li
                  key={`track-${track.title}-${index}`}
                  className={`
                    ${isHovers[index] || (tracks[0] ? tracks[0].audioSrc === track.audioSrc : false)
                      ? `neumorphism-normal` : ``}
                    flex items-end justify-start p-2 rounded-3xl transition-shadow use-mouse`}
                  onMouseEnter={() => updateHovers(index, true)}
                  onMouseLeave={() => updateHovers(index, false)}
                  onClick={() => {
                    if (isLoading) return
                    if (isPlaying !== true && audio.current) {
                      setIsLoading(true)
                      if (tracks[0] ? audio.current.src === track.audioSrc : false) {
                        setIsPlaying(true)
                      } else if (track) {
                        audio.current.pause()
                        audio.current = new Audio(track.audioSrc)
                        audio.current.load()
                        audio.current.play().then(() => {
                          setTrackIndex(index)
                          setIsPlayed(true)
                        }).catch((error) => { console.error(error)})
                      }
                    } else {
                      setIsPlaying(false)
                    }
                  }}
                >
                  {isHovers[index] || (tracks[0] ? tracks[0].audioSrc === track.audioSrc : false)
                    ?
                    <AudioPlayButton
                      className="mr-4"
                      isPlay={tracks[0] ? (tracks[0].audioSrc === track.audioSrc) && isPlaying : false}
                      size={12}
                    />
                    : <span className="mr-4 text-lg text-center w-7">{index + 1}</span>
                  }
                  <h3 className="text-lg font-medium line-clamp-1">{track.title}</h3>
                  <h4 className="ml-auto text-lg">{displayTime(track.duration)}</h4>
                </li>
              </>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulPlaylist(
      id: {eq: $id}
    ) {
      id
      title
      slug
      coverart {
        localFile {
          publicURL
        }
      }
      songs {
        title
        duration
        coverart {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
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
