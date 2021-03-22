import React from "react"
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'
import { GrChapterNext, GrChapterPrevious, GrForwardTen, GrBackTen } from "react-icons/gr"
import { useAtom } from "jotai"
import {
  prevTrackAtom,
  nextTrackAtom,
  isPlayingAtom,
} from 'src/atoms/track'

type AudioControlsProps =
  {
    audio: HTMLAudioElement | null
    seekbackward: () => void
    seekforward: () => void
  }

const AudioControls = ({
  audio,
  seekbackward,
  seekforward,
}: AudioControlsProps) => {
  const [, toPrevTrack] = useAtom(prevTrackAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

  return (
    <div className="flex items-center justify-between space-x-8">
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={() => toPrevTrack(audio)}
      >
        <GrChapterPrevious size={16} />
      </button>
      <button
        type="button"
        className="seekbackward"
        aria-label="Seekbackward"
        onClick={() => seekbackward()}
      >
        <GrBackTen size={24} />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => setIsPlaying(false)}
          aria-label="Pause"
        >
          <FaRegPauseCircle size={36} />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => setIsPlaying(true)}
          aria-label="Play"
        >
          <FaRegPlayCircle size={36} />
        </button>
      )}
      <button
        type="button"
        className="seekforward"
        aria-label="Seekforward"
        onClick={seekforward}
      >
        <GrForwardTen size={24} />
      </button>
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={toNextTrack}
      >
        <GrChapterNext size={16} />
      </button>
    </div>
  )
}

export default AudioControls
