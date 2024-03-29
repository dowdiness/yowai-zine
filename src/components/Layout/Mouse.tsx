import React from 'react'
import useMouse from 'src/hooks/useMouse'
import { useAtom } from "jotai"
import { isPlayingAtom } from 'src/atoms/track'
import { isAudioModalOpenAtom } from 'src/atoms/ui'

const Mouse = () => {
  const [isPlaying] = useAtom(isPlayingAtom)
  const [isAudioModalOpen] = useAtom(isAudioModalOpenAtom)
  const mouse = useMouse<HTMLDivElement>(isPlaying, isAudioModalOpen)
  return (
    <div
      ref={mouse.cursorRef}
      id="cursor"
      className={`fixed top-0 left-0 z-50 pointer-events-none hidden sm:block`}
    />
  )
}

export default Mouse
