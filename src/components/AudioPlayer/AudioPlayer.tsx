import React, { useState, useEffect } from 'react'
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import AudioInfo from 'src/components/AudioPlayer/AudioInfo'
import AudioVolume from 'src/components/AudioPlayer/AudioVolume'
import AudioModal from 'src/components/AudioPlayer/AudioModal'
import AudioPlayButton from 'src/components/AudioPlayer/AudioPlayButton'
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

// import { RiPlayList2Line } from "react-icons/ri"

import { displayTime } from './utils'
import * as AudioStyle from "./audio.module.css"

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

  const [isPc, setIsPc] = useState(false)

  let currentPercentage = "0%"
  currentPercentage = duration
    ? `${(trackProgress / duration) * 97 + 2}%`
    : "2%"

  const changeIsPc = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setIsPc(true)
    } else {
      setIsPc(false)
    }
  }

  useEffect(() => {
    const mql = matchMedia("(min-width: 768px)")
    if (mql.matches) {
      setIsPc(true)
    } else {
      setIsPc(false)
    }

    // Safari 14 以前ではEventTargetを元にしていた為にメソッドの名前が違う
    if (typeof mql.addEventListener === 'undefined') {
      // Safari 14 以前への対応
      // @ts-ignore
      mql.addListener(changeIsPc)
      return() => {
        // @ts-ignore
        mql.removeListener(changeIsPc)
      }
    } else {
      mql.addEventListener("change", changeIsPc)
      return() => {
        mql.removeEventListener("change" , changeIsPc)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isAudioMiniPlayerOpen ? isAudioModalOpen
        ? <AudioModal />
        : <motion.div
          className="fixed bottom-0 left-0 z-30 flex w-screen h-16 py-2 neumorphism-normal md:h-24 bg-neumorphism md:flex"
          onClick={() => isPc ? null : setIsAudioModalOpen(true)}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={audioPlaylerVariants}
          key="player"
        >
          <div className="flex items-center justify-between w-full md:px-4">
            <div
              className="absolute left-0 z-10 w-full -top-4 md:hidden"
            >
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration}
                className={AudioStyle.slider}
                style={{
                  borderRadius: 0,
                  backgroundColor: '#e6e7ee',
                  boxShadow: 'none',
                }}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                onChange={(event) => {
                  event.stopPropagation()
                  setCurrentTime(parseInt(event.target.value, 10))
                }}
                onMouseUp={() => setIsPlaying(true)}
                onKeyUp={() => setIsPlaying(true)}
              />
              <div
                id="value"
                style={{
                  width: currentPercentage,
                  borderRadius: 0,
                }}
                className={AudioStyle.value}
              />
            </div>
            <AudioInfo
              className="flex-1 w-4/5 md:w-4/12"
              image={tracks[0].cover}
              title={tracks[0].title}
              artist={tracks[0].artist}
            />
            <AudioPlayButton
              className='flex-none px-2 m-auto md:hidden'
              isPlay={isPlaying}
              size={38}
              onPlay={(event) => {
                event.stopPropagation()
                setIsPlaying(true)
              }}
              onPause={(event) => {
                event.stopPropagation()
                setIsPlaying(false)
              }}
            />
            <div className="flex-col items-center hidden w-5/12 md:flex">
              <AudioControls />
              <div className="flex items-center w-full mt-2 space-x-2">
                <span className="text-sm">{displayTime(trackProgress)}</span>
                <div className="relative w-full">
                  <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration}
                    className={AudioStyle.slider}
                    onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
                    onMouseUp={() => setIsPlaying(true)}
                    onKeyUp={() => setIsPlaying(true)}
                  />
                  <div id="value" style={{ width: currentPercentage }} className={AudioStyle.value} />
                </div>
                <span className="text-sm">{displayTime(duration)}</span>
              </div>
            </div>
            <div className="items-center justify-around hidden w-3/12 pl-4 pr-2 md:flex">
              {/* <RiPlayList2Line size={24} /> */}
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
