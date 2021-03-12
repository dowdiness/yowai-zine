import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { FaPlay, FaPause } from 'react-icons/fa'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import AudioControls from 'src/components/AudioPlayer/AudioControls'

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useAtom } from "jotai"
import { trackSetupedAtom } from 'src/atoms/audioPlayer'

const AudioPage: React.FC<PageProps<GatsbyTypes.AudioPageQuery>> = ({ data }) => {
  const pichis = [{
    title: 'あーなにを見ていればいいのか',
    artist: 'ピチピチニートまんじゅう',
    audioSrc: '/static/5b3dcaf46ed11182b50780fec3effcf8/___________________________.mp3',
    cover: "/static/1a16fc5dfdd2ddd2cdde7484adbb6d90/pichipichi.jpg",
  },{
    title: 'feelings, NONAME',
    artist: 'osamuosanai',
    audioSrc: '/static/d63e669934f18e72f9824d258181a59a/GASOLINE___STAND_-_NISSEKI_blue_-_01_feelings__NONAME.mp3',
    cover: '/static/71ae161b191736917195ebea67962d59/NISSEKI-blue.jpg',
  }]

  const [tracks, setTracks] = useAtom(trackSetupedAtom)
  const {
    trackIndex,
    trackStyling,
    duration,
    isPlaying,
    trackProgress,
    setIsPlaying,
    onScrub,
    onScrubEnd,
    toPrevTrack,
    toNextTrack
  } = useAudioPlayer(pichis)

  return (
    <div>
      <div className="flex flex-col items-center justify-between w-full py-8 space-y-6">
          <img
            loading="eager"
            className="cursor-none hover:animate-huruhuru"
            src={pichis[trackIndex].cover}
            alt={pichis[trackIndex].title}
            height={350}
            width={350}
          />
          <h2 className="font-sans text-xl font-bold text-center text-black">{pichis[trackIndex].title}</h2>
          <h3 className="font-sans text-lg text-center text-gray-600">{pichis[trackIndex].artist}</h3>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="w-10/12 mt-12"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
      </div>
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
