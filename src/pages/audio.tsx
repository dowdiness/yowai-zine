import React from 'react'
import { PageProps, graphql } from 'gatsby'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import { useAtom } from "jotai"
import { tracksAtom, updateTracksAtom, prevTrackAtom, nextTrackAtom, durationAtom, trackProgressAtom, isPlayingAtom } from 'src/atoms/track'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AudioPage: React.FC<PageProps<GatsbyTypes.AudioPageQuery>> = ({ data }) => {
  const [tracks] = useAtom(tracksAtom)
  const [, updateTracks] = useAtom(updateTracksAtom)
  const [,toPrevTrack] = useAtom(prevTrackAtom)
  const [,toNextTrack] = useAtom(nextTrackAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

  const songs = data.allContentfulSong.nodes

  const normarizedSongs = songs?.map((song, index) => {
    const coverArt = getImage(song?.coverart?.gatsbyImageData!)
    return {
      title: song?.title!,
      artist: song?.artist?.name!,
      audioSrc: song?.sound?.localFile?.publicURL!,
      cover: coverArt!,
    }
  })

  let currentPercentage = "0%"
  currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"

  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

  const {
    audioRef,
    onScrub,
    onScrubEnd,
  } = useAudioPlayer()

  return (
    <div>
        {tracks[0] ?
          <div className="flex flex-col items-center justify-between w-full py-8 space-y-6">
            <GatsbyImage
              loading="eager"
              className="cursor-none hover:animate-huruhuru"
              image={tracks[0].cover}
              alt={tracks[0].title}
            />
            <h2 className="font-sans text-xl font-bold text-center text-black">{tracks[0].title}</h2>
            <h3 className="font-sans text-lg text-center text-gray-600">{tracks[0].artist}</h3>
            <AudioControls
              isPlaying={isPlaying}
              audio={audioRef.current}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration}
              className="w-10/12 mt-12"
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={{ background: trackStyling }}
            />
          </div> :
        <div>
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
        </div>
        }
    </div>
  )
}

export default AudioPage

export const pageQuery = graphql`
  query AudioPage {
    allContentfulSong {
      nodes {
        coverart {
          gatsbyImageData
        }
        artist {
          name
        }
        sound {
          id
          localFile {
            publicURL
          }
        }
        title
      }
    }
  }
`
