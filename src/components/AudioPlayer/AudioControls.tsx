import React from "react"
import { FaPlay, FaPause } from 'react-icons/fa'
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr"

type AudioControlsProps =
  {
    isPlaying: boolean,
    audio: HTMLAudioElement | null,
    onPlayPauseClick: React.Dispatch<React.SetStateAction<boolean>>,
    onPrevClick: (update: HTMLAudioElement | null) => void,
    onNextClick: () => void
  }

const AudioControls = ({
  isPlaying,
  audio,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}: AudioControlsProps) => (
  <div className="flex items-center justify-between w-4/6">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={() => onPrevClick(audio)}
    >
      <GrChapterPrevious size={42} />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FaPause size={58} />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FaPlay size={58} />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <GrChapterNext size={42} />
    </button>
  </div>
)

export default AudioControls
