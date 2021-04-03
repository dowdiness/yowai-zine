import React from "react"
import { useAtom } from "jotai"
import { m as motion } from 'framer-motion'

import {
  tracksAtom,
  durationAtom,
  trackProgressAtom,
  isPlayingAtom,
  currentTimeAtom,
} from 'src/atoms/track'
import {
  isAudioModalOpenAtom
} from 'src/atoms/ui'

import {
  windowSizeAtom
} from 'src/atoms/windowSizeAtom'


import { IoChevronDown } from "react-icons/io5"
import { GatsbyImage } from "gatsby-plugin-image"
import AudioControls from 'src/components/AudioPlayer/AudioControls'

import { displayTime } from './utils'
import * as AudioStyle from "./audio.module.css"

const AudioModal = () => {
  const [tracks] = useAtom(tracksAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [, setIsPlaying] = useAtom(isPlayingAtom)
  const [, setCurrentTime] = useAtom(currentTimeAtom)

  const [, setIsAudioModalOpen] = useAtom(isAudioModalOpenAtom)

  const [windowSize] = useAtom(windowSizeAtom)

  let currentPercentage = "0%"
  currentPercentage = duration
    ? `${(trackProgress / duration) * 97 + 2}%`
    : "2%"

  const variants = {
    hidden: {
      opacity: 0,
      y: windowSize.height,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween' }
    }
  }

  return (
    <motion.article
      className={`flex flex-col justify-evenly fixed inset-0 z-40 h-screen bg-neumorphism px-4 space-y-2`}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      key="modal"
    >
      <header className="flex items-center justify-between w-full h-12">
        <button
          type="button"
          className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
          onClick={() => setIsAudioModalOpen(false)}
          aria-label="オーディオプレイヤーを閉じる"
        >
          <IoChevronDown
            size={24}
          />
        </button>
        <h2 className="text-lg font-medium line-clamp-1">{tracks[0].album}</h2>
        <div className="w-9 h-9" />
      </header>
      <section className={`flex flex-col items-center`}>
        <GatsbyImage
          loading="eager"
          className="w-5/6 h-full sm:w-96 cursor-none"
          image={tracks[0].cover}
          alt={tracks[0].title}
        />
      </section>
      <section className="space-y-2">
        <div className="flex flex-col items-start w-full">
          <h2 className="font-sans text-2xl font-bold leading-normal text-black line-clamp-2">{tracks[0].title}</h2>
          <h3 className="font-sans text-lg text-gray-600 line-clamp-1">{tracks[0].artist}</h3>
        </div>
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
        <div className="flex items-center justify-between w-full">
          <span className="text-sm">{displayTime(trackProgress)}</span>
          <span className="text-sm">{displayTime(duration)}</span>
        </div>
        <AudioControls />
      </section>
    </motion.article>
  )
}

export default AudioModal
