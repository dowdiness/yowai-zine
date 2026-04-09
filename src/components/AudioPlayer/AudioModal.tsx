import React from "react"

// Atoms
import { useAtom } from "jotai"
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

// Hooks
import { useLocation } from '@reach/router'

// Components
import { m as motion } from 'framer-motion'
import { IoChevronDown } from "react-icons/io5"
import { GatsbyImage } from "gatsby-plugin-image"
import AudioControls from 'src/components/AudioPlayer/AudioControls'
import { Link } from 'gatsby'

// Utils
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

  const location = useLocation()
  const isReady = React.useRef(false)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const modalRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (isReady.current) {
      setIsAudioModalOpen(false)
    } else {
      isReady.current = true
    }
  }, [location.pathname])

  // Focus management: move focus into modal on open, trap it
  React.useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAudioModalOpen(false)
        return
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

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
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="オーディオプレイヤー"
      className={`flex flex-col justify-evenly fixed inset-0 z-40 h-full bg-neumorphism px-4 space-y-2`}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      key="modal"
    >
      <header className="flex items-center justify-between w-full h-12">
        <button
          ref={closeButtonRef}
          type="button"
          className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
          onClick={() => setIsAudioModalOpen(false)}
          aria-label="オーディオプレイヤーを閉じる"
        >
          <IoChevronDown
            size={24}
          />
        </button>
        <Link to={`/playlists/${tracks[0].slug}`}>
          <h2 className="text-lg font-medium line-clamp-1">{tracks[0].album}</h2>
        </Link>
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
            aria-label="再生位置"
            className={AudioStyle.slider}
            onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
            onMouseUp={() => setIsPlaying(true)}
            onKeyUp={() => setIsPlaying(true)}
          />
          <div style={{ width: currentPercentage }} className={AudioStyle.value} />
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
