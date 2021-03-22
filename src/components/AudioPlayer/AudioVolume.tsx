import React from "react"
import { IoVolumeMute, IoVolumeOff, IoVolumeLow, IoVolumeMedium, IoVolumeHigh } from "react-icons/io5"
import { useAtom } from "jotai"
import { volumeAtom, isMuteAtom } from 'src/atoms/track'

const AudioVolume = () => {
  const [volume, setVolume] = useAtom(volumeAtom)
  const [isMute, setIsMute] = useAtom(isMuteAtom)

  const volumeStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volume}, #fff), color-stop(${volume}, #414141))
    `

  return (
    <div className="flex items-center justify-end">
      {isMute ? (
        <button
          type="button"
          className="mute"
          onClick={() => setIsMute(false)}
          aria-label="MuteOn"
        >
          <IoVolumeMute size={24} />
        </button>
      ) : (
          <button
            type="button"
            className="mute"
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
      <input
        type="range"
        value={volume}
        step="0.01"
        min="0"
        max="1"
        className="w-3/5 ml-2"
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        style={{ background: volumeStyling }}
      />
    </div>
  )
}

export default AudioVolume
