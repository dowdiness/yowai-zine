import React from 'react'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import AudioInfo from 'src/components/AudioPlayer/AudioInfo'

import { useAtom } from "jotai"
import {
  tracksAtom,
  durationAtom,
  trackProgressAtom,
  volumeAtom,
  isPlayingAtom,
  isMuteAtom,
} from 'src/atoms/track'

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'
import { IoVolumeMute, IoVolumeOff, IoVolumeLow, IoVolumeMedium, IoVolumeHigh } from "react-icons/io5"
import { RiPlayList2Line } from "react-icons/ri"

const AudioModal: React.FC = () => {
  const [tracks] = useAtom(tracksAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [volume, setVolume] = useAtom(volumeAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)
  const [isMute, setIsMute] = useAtom(isMuteAtom)

  let currentPercentage = "0%"
  currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"

  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #414141))
    `

  const {
    audioRef,
    seekbackward,
    seekforward,
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
      return `${Math.floor(roundedSecond / 60)}:${roundedSecond % 60 < 10 ? `0${roundedSecond % 60}` : roundedSecond % 60 }`
    }
  }

  return (
    <>
      {tracks[0] ?
        <div className="fixed bottom-0 z-40 flex w-screen h-16 border border-t border-black md:h-24 bg-neumorphism md:flex">
          <div className="flex items-center justify-between w-full md:px-4">
            <AudioInfo
              className="w-4/5 md:w-3/12"
              image={tracks[0].cover}
              title={tracks[0].title}
              artist={tracks[0].artist}
            />
            <div className="flex items-center justify-center m-auto md:hidden">
              {isPlaying ? (
                <button
                  type="button"
                  className="pause"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Pause"
                >
                  <FaRegPauseCircle size={38} />
                </button>
              ) : (
                <button
                  type="button"
                  className="play"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play"
                >
                  <FaRegPlayCircle size={38} />
                </button>
              )}
            </div>
            <div className="flex-col items-center hidden w-1/2 md:flex">
              <AudioControls
                audio={audioRef.current}
                seekbackward={seekbackward}
                seekforward={seekforward}
              />
              <div className="flex items-center w-full mt-2 space-x-2">
                <span className="text-sm">{displayTime(trackProgress)}</span>
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
                <span className="text-sm">{displayTime(duration)}</span>
              </div>
            </div>
            <div className="items-center justify-around hidden w-3/12 pl-4 pr-2 md:flex">
              <RiPlayList2Line size={24} />
              <div className="flex items-center justify-end">
                {isMute ? (
                  <button
                    type="button"
                    className="mute"
                    onClick={() => setIsMute(false)}
                    aria-label="MuteOn"
                  >
                    <IoVolumeMute size={24} />
                  </button>
                ): (
                  <button
                    type="button"
                    className="mute"
                    onClick={() => setIsMute(true)}
                    aria-label="MuteOff"
                  >
                    {
                    volume === 0
                    ? <IoVolumeOff size={24}/>
                    : volume < 0.35
                    ? <IoVolumeLow size={24} />
                    : volume < 0.8
                    ? <IoVolumeMedium size={24} />
                    : <IoVolumeHigh size={24} />}
                  </button>
                )}
                <input
                  type="range"
                  value={volume}
                  step="0.01"
                  min="0"
                  max="1"
                  className="w-3/5 ml-2"
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  style={{ background: trackStyling }}
                />
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
