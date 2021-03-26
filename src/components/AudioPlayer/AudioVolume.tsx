import React from "react"
import { IoVolumeMute, IoVolumeOff, IoVolumeLow, IoVolumeMedium, IoVolumeHigh } from "react-icons/io5"
import { useAtom } from "jotai"
import { volumeAtom, isMuteAtom } from 'src/atoms/track'
import * as AudioStyle from "./audio.module.css"

const AudioVolume = () => {
  const [volume, setVolume] = useAtom(volumeAtom)
  const [isMute, setIsMute] = useAtom(isMuteAtom)

  return (
    <div className="flex items-center justify-end">
      {isMute ? (
        <button
          type="button"
          className="p-2 rounded-full neumorphism-inset active:neumorphism-normal"
          onClick={() => setIsMute(false)}
          aria-label="MuteOn"
        >
          <IoVolumeMute size={24} />
        </button>
      ) : (
          <button
            type="button"
            className={`p-2 rounded-full active:neumorphism-inset ${volume === 0 ? `neumorphism-inset` : `neumorphism-normal` }`}
            onClick={() => setIsMute(true)}
            aria-label="MuteOff"
          >
            {
              volume === 0
                ? <IoVolumeOff size={24} />
                : volume < 0.35
                  ? <IoVolumeLow size={24} />
                  : volume < 0.8
                    ? <IoVolumeMedium size={24} />
                    : <IoVolumeHigh size={24} />}
          </button>
        )}
      <div className="relative w-3/5 ml-2">
        <input
          type="range"
          value={volume}
          step="0.01"
          min="0"
          max="1"
          className={AudioStyle.slider}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        <div id="value" style={{ width: `${volume * 100.0}%` }} className={AudioStyle.value} />
      </div>
    </div>
  )
}

export default AudioVolume
