import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import AudioPlayButton from 'src/components/AudioPlayer/AudioPlayButton'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IoTimeOutline } from "react-icons/io5"

// Context
import { AudioContext } from 'src/components/AudioPlayer/AudioProvider'
import { useContextSelector } from 'use-context-selector'

// Atoms
import { useAtom } from "jotai"
import { tracksAtom, updateTracksAtom, isPlayingAtom } from 'src/atoms/track'
import { historyAtom } from 'src/atoms/history'

// Utils
import { displayTime } from 'src/components/AudioPlayer/utils'

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistQuery>> = ({ data, location }) => {
  const [tracks] = useAtom(tracksAtom)
  const [, updateTracks] = useAtom(updateTracksAtom)
  const [, setHistory] = useAtom(historyAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

  const [isPlayed, setIsPlayed] = useState(false)

  const audio = useContextSelector(AudioContext, audio => audio)

  const playlist = data.contentfulPlaylist
  const songs = playlist?.songs

  const [isHovers, setHovers] = useState([...Array(songs?.length)].map(() => false))

  // @ts-ignore
  const cover = getImage(songs[0].coverart)!

  const normarizedSongs = songs?.map((song) => {
    const re = / +(1x,\n|1.5x,\n|2x,\n|3x)/
    const artworksSrc = song?.coverart?.fixed?.srcSet.split(re).filter((src, index) => {
      if (index % 2 !== 1 && src !== '') {
        return true
      }
      return false
    }).map((src, index) => {
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
      artworks: artworksSrc!,
      duration: song?.duration!,
    }
  })

  const playlistIndexPath = location?.pathname.split("/").slice(0, 2).join("/")

  // https://bagelee.com/programming/safari-video-audio-action/
  const initializeForSafari = async () => {
    if (audio?.current) {
      audio.current.muted = true
      try {
        await audio.current.play()
      } catch (err) {
        console.error(err)
      }
      audio.current.pause()
      audio.current.muted = false
      audio.current.currentTime = 0
      setIsPlayed(true)
      // console.log('initial')
    }
  }

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
        <div className="flex flex-col md:flex-row">
          <div className="mb-8 space-y-4 md:ml-6">
            <h1 className="text-4xl font-black">{playlist?.title}</h1>
            <h2 className="text-2xl font-medium text-gray-700">
              {playlist?.artists?.map((artist, index) => {
                return (
                  index === 0 ? <span>{artist?.name}</span> : <span>, {artist?.name}</span>
                )
              })}
            </h2>
          </div>
          <GatsbyImage
            image={cover}
            loading="eager"
            alt="Zine"
            className="object-scale-down mb-12 md:order-first md:w-64 md:h-64"
          />
        </div>
        <p className="font-serif prose text-left whitespace-pre-line max-w-none sm:prose-lg md:prose-xl">
          {playlist?.artists?.map((artist, index) => {
            return (
              index === 0 ? <span>{artist?.introduction?.introduction}</span> : <span>, {artist?.introduction?.introduction}</span>
            )
          })}
        </p>
        <ul className="mt-8 space-y-2">
          {normarizedSongs?.map((track, index) => {
            return (
              <>
                {index === 0 &&
                  <li className="flex items-center justify-start p-2 mb-4 text-gray-600 border-b border-gray-400">
                    <span className="mr-4 text-center w-7">#</span>
                    <span className="mr-4">タイトル</span>
                    <IoTimeOutline className="ml-auto" size={20}/>
                  </li>
                }
                <li
                  key={index}
                  className={`
                    ${isHovers[index] || (tracks[0] ? tracks[0].audioSrc === track.audioSrc : false)
                      ? `neumorphism-normal` : ``}
                    flex items-end justify-start p-2 rounded-3xl transition-shadow`}
                  onMouseEnter={() => updateHovers(index, true)}
                  onMouseLeave={() => updateHovers(index, false)}
                  onDoubleClick={() => {
                    if (!isPlayed) initializeForSafari()
                    updateTracks(normarizedSongs.slice(index))
                    // console.log('update')
                    setHistory(normarizedSongs.slice(0, index))
                    // console.log('history')
                  }}
                >
                  {isHovers[index] || (tracks[0] ? tracks[0].audioSrc === track.audioSrc : false)
                    ?
                    <AudioPlayButton
                      className="mr-4"
                      isPlay={tracks[0] ? (tracks[0].audioSrc === track.audioSrc) && isPlaying : false}
                      size={12}
                      onPlay={() => {
                        if (!isPlayed) initializeForSafari()
                        updateTracks(normarizedSongs.slice(index))
                        // console.log('update')
                        setHistory(normarizedSongs.slice(0, index))
                        // console.log('history')
                      }}
                      onPause={() => {
                        setIsPlaying(false)
                      }}
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
    contentfulPlaylist(
      id: {eq: $id}
    ) {
      id
      title
      slug
      songs {
        title
        duration
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
