import React from "react"
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'
import { GrChapterNext, GrChapterPrevious, GrForwardTen, GrBackTen } from "react-icons/gr"
import { useAtom } from "jotai"
import {
  prevTrackAtom,
  nextTrackAtom,
  isPlayingAtom,
  skipTimeAtom,
} from 'src/atoms/track'

import { AudioContext } from 'src/components/AudioPlayer/AudioProvider'
import { useContextSelector } from 'use-context-selector'


const AudioControls = () => {
  const [, toPrevTrack] = useAtom(prevTrackAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [, setSkipTime] = useAtom(skipTimeAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

  const audio = useContextSelector(AudioContext, audio => audio?.current)

  return (
    <div className="flex items-center justify-between space-x-8">
      <button
        type="button"
        className="p-2 rounded-full neumorphism-normal focus:neumorphism-inset"
        aria-label="Previous"
        onClick={() => toPrevTrack(audio)}
      >
        <GrChapterPrevious size={16} />
      </button>
      <button
        type="button"
        className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
        aria-label="Seekbackward"
        onClick={(event) => {
          event.stopPropagation()
          setSkipTime(-10)
        }}
      >
        <GrBackTen size={24} />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="p-2 rounded-full neumorphism-inset active:neumorphism-normal"
          onClick={(event) => {
            event.stopPropagation()
            setIsPlaying(false)
          }}
          aria-label="Pause"
        >
          <FaRegPauseCircle size={36} />
        </button>
      ) : (
        <button
          type="button"
          className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
          onClick={(event) => {
            event.stopPropagation()
            setIsPlaying(true)
          }}
          aria-label="Play"
        >
          <FaRegPlayCircle size={36} />
        </button>
      )}
      <button
        type="button"
        className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
        aria-label="Seekforward"
        onClick={(event) => {
          event.stopPropagation()
          setSkipTime(10)
        }}
      >
        <GrForwardTen size={24} />
      </button>
      <button
        type="button"
        className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
        aria-label="Next"
        onClick={toNextTrack}
      >
        <GrChapterNext size={16} />
      </button>
    </div>
  )
}

export default AudioControls
