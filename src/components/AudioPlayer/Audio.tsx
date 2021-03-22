import React from 'react'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import AudioInfo from 'src/components/AudioPlayer/AudioInfo'
import AudioVolume from 'src/components/AudioPlayer/AudioVolume'
import AudioModal from 'src/components/AudioPlayer/AudioModal'
import { m as motion, AnimatePresence } from 'framer-motion'

import { useAtom } from "jotai"
import {
  tracksAtom,
  durationAtom,
  trackProgressAtom,
  isPlayingAtom,
  currentTimeAtom,
} from 'src/atoms/track'
import {
  isAudioMiniPlayerOpenAtom,
  isAudioModalOpenAtom,
} from 'src/atoms/ui'

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'
import { RiPlayList2Line } from "react-icons/ri"

import { displayTime } from './utils'

const audioPlaylerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween' }
  }
}

const AudioPlayer: React.FC = () => {
  const [tracks] = useAtom(tracksAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)
  const [, setCurrentTime] = useAtom(currentTimeAtom)

  const [isAudioMiniPlayerOpen] = useAtom(isAudioMiniPlayerOpenAtom)
  const [isAudioModalOpen, setIsAudioModalOpen] = useAtom(isAudioModalOpenAtom)

  let currentPercentage = "0%"
  currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"

  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #414141))
    `

  const { audioRef } = useAudioPlayer()

  return (
    <AnimatePresence>
      {isAudioMiniPlayerOpen ? isAudioModalOpen
        ? <AudioModal audio={audioRef.current} />
        : <motion.div
          className="fixed bottom-0 z-30 flex w-screen h-16 border border-t border-black md:h-24 bg-neumorphism md:flex"
          onClick={() => setIsAudioModalOpen(true)}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={audioPlaylerVariants}
          key="player"
        >
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
                  onClick={(event) => {
                    event.stopPropagation()
                    setIsPlaying(false)
                  }}
                  aria-label="Pause"
                >
                  <FaRegPauseCircle size={38} />
                </button>
              ) : (
                  <button
                    type="button"
                    className="play"
                    onClick={(event) => {
                      event.stopPropagation()
                      setIsPlaying(true)
                    }}
                    aria-label="Play"
                  >
                    <FaRegPlayCircle size={38} />
                  </button>
                )}
            </div>
            <div className="flex-col items-center hidden w-1/2 md:flex">
              <AudioControls
                audio={audioRef.current}
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
                  onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
                  onMouseUp={() => setIsPlaying(true)}
                  onKeyUp={() => setIsPlaying(true)}
                  style={{ background: trackStyling }}
                />
                <span className="text-sm">{displayTime(duration)}</span>
              </div>
            </div>
            <div className="items-center justify-around hidden w-3/12 pl-4 pr-2 md:flex">
              <RiPlayList2Line size={24} />
              <AudioVolume />
            </div>
          </div>
        </motion.div>
        : null
      }
    </AnimatePresence>
  )
}

export default AudioPlayer
