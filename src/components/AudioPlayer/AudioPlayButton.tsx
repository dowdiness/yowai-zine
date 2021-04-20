import React from "react"
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'

type Props = {
  isPlay: boolean
  size: number
}

const AudioPlayButton: React.FCX<Props> = ({ isPlay, size, className }) => {

  return (
    <div className={`${className} flex items-center justify-center`}>
      {isPlay ? (
        <button
          type="button"
          className="p-2 rounded-full neumorphism-inset active:neumorphism-normal"
          aria-label="Pause"
        >
          <FaRegPauseCircle size={size} />
        </button>
      ) : (
          <button
            type="button"
            className="p-2 rounded-full neumorphism-normal active:neumorphism-inset"
            aria-label="Play"
          >
            <FaRegPlayCircle size={size} />
          </button>
        )}
    </div>
  )
}

export default AudioPlayButton
