import React from 'react'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import { useAtom } from "jotai"
import { tracksAtom, prevTrackAtom, nextTrackAtom, durationAtom, trackProgressAtom, isPlayingAtom } from 'src/atoms/track'

import { GatsbyImage } from "gatsby-plugin-image"

const AudioModal: React.FC = () => {
  const [tracks] = useAtom(tracksAtom)
  // const [, updateTracks] = useAtom(updateTracksAtom)
  const [, toPrevTrack] = useAtom(prevTrackAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

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

  const displayTime = (second: number): string => {
    const roundedSecond = Math.round(second)
    // 3600秒以上の場合に対応してません
    if (roundedSecond < 10) {
      return `0:0${roundedSecond}`
    } else if(roundedSecond < 60) {
      return `0:${roundedSecond}`
    } else {
      return `${Math.floor(roundedSecond / 60)}:${roundedSecond % 60}`
    }
  }

  return (
    <>
      {tracks[0] ?
        <div className="fixed bottom-0 w-screen h-24 border border-t border-black bg-neumorphism">
          <div className="flex items-center justify-around w-full pt-4 space-x-6">
            <div className="flex items-center space-x-4 justify-evenly">
              <GatsbyImage
                loading="eager"
                className="w-16 h-16 cursor-none hover:animate-huruhuru"
                image={tracks[0].cover}
                alt={tracks[0].title}
              />
              <div className="flex flex-col items-start">
                <h2 className="font-sans text-sm font-bold text-black">{tracks[0].title}</h2>
                <h3 className="font-sans text-xs text-gray-600">{tracks[0].artist}</h3>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <AudioControls
                isPlaying={isPlaying}
                audio={audioRef.current}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
              />
              <div className="flex items-center">
                <span>{displayTime(trackProgress)}</span>
                <input
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration}
                  className="w-full"
                  onChange={(e) => onScrub(e.target.value)}
                  onMouseUp={onScrubEnd}
                  onKeyUp={onScrubEnd}
                  style={{ background: trackStyling }}
                />
                <span>{displayTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </>
  )
}

export default AudioModal
