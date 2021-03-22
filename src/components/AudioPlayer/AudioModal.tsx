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
import { IoChevronDown } from "react-icons/io5"
import { GatsbyImage } from "gatsby-plugin-image"
import AudioControls from 'src/components/AudioPlayer/AudioControls'

import { displayTime } from './utils'

const variants = {
  hidden: {
    opacity: 0,
    y: window.innerHeight,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween' }
  }
}

type AudioModalProps =
  {
    audio: HTMLAudioElement | null
  }

const AudioModal = ({ audio }: AudioModalProps) => {
  const [tracks] = useAtom(tracksAtom)
  const [duration] = useAtom(durationAtom)
  const [trackProgress] = useAtom(trackProgressAtom)
  const [, setIsPlaying] = useAtom(isPlayingAtom)
  const [, setCurrentTime] = useAtom(currentTimeAtom)

  const [isAudioModalOpen, setIsAudioModalOpen] = useAtom(isAudioModalOpenAtom)

  return (
    <motion.article
      className={`flex flex-col fixed inset-0 z-40 h-screen bg-neumorphism mx-4 space-y-4`}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      key="modal"
    >
      <header className="flex items-center justify-between w-full h-24">
        <IoChevronDown
          size={36}
          onClick={() => setIsAudioModalOpen(false)}
        />
        <h2 className="text-lg font-medium">{tracks[0].album}</h2>
        <div className="w-9 h-9" />
      </header>
      <section className={`flex flex-col items-center justify-start space-y-4`}>
        <GatsbyImage
          loading="eager"
          className="w-5/6 h-full cursor-none hover:animate-huruhuru"
          image={tracks[0].cover}
          alt={tracks[0].title}
        />
        <div className="flex flex-col items-start w-full mt-4">
          <h2 className="font-sans text-3xl font-bold text-black">{tracks[0].title}</h2>
          <h3 className="font-sans text-lg text-gray-600">{tracks[0].artist}</h3>
        </div>
      </section>
      <section>
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
        // style={{ background: trackStyling }}
        />
        <div className="flex items-center justify-between w-full -mt-2">
          <span className="text-sm">{displayTime(trackProgress)}</span>
          <span className="text-sm">{displayTime(duration)}</span>
        </div>
      </section>
      <AudioControls audio={audio} />
    </motion.article>
  )
}

export default AudioModal
